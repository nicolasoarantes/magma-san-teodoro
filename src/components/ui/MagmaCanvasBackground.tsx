"use client";

import { useEffect, useRef } from "react";

interface Ember {
  x: number;
  y: number;
  vx: number;
  vy: number;
  life: number;
  max: number;
  size: number;
  hue: number;
  drift: number;
}

const COLORS = [10, 18, 26, 34, 42]; // red -> orange -> gold

/**
 * Interactive ember field. Warm particles drift upward on their own (clearly
 * visible even with no interaction) and burst toward pointer/touch movement.
 * When idle, the field gets denser and brighter. Honors prefers-reduced-motion
 * and scales down on small / low-core devices.
 */
export default function MagmaCanvasBackground({
  className = "",
  intensity = 1,
}: {
  className?: string;
  intensity?: number;
}) {
  const ref = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = ref.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) return;

    const weak =
      window.innerWidth < 480 ||
      (navigator.hardwareConcurrency && navigator.hardwareConcurrency <= 4);
    const dpr = Math.min(window.devicePixelRatio || 1, weak ? 1 : 2);
    // Idle (no recent pointer) ambient count vs. active count.
    const idleCount = Math.round((weak ? 26 : 52) * intensity);
    const activeCount = Math.round((weak ? 16 : 34) * intensity);

    let w = 0;
    let h = 0;
    const resize = () => {
      const rect = canvas.getBoundingClientRect();
      w = rect.width;
      h = rect.height;
      canvas.width = Math.max(1, w * dpr);
      canvas.height = Math.max(1, h * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };
    resize();
    window.addEventListener("resize", resize);

    const embers: Ember[] = [];
    const spawn = (x: number, y: number, burst = false) => {
      embers.push({
        x,
        y,
        vx: (Math.random() - 0.5) * (burst ? 1.6 : 0.3),
        vy: -(Math.random() * (burst ? 2.2 : 1.0) + 0.4),
        life: 0,
        max: 70 + Math.random() * 90,
        size: Math.random() * (burst ? 3 : 2.4) + 1.1,
        hue: COLORS[(Math.random() * COLORS.length) | 0],
        drift: (Math.random() - 0.5) * 0.5,
      });
    };

    let lastMove = -9999;
    let now = 0;
    const onMove = (cx: number, cy: number) => {
      const rect = canvas.getBoundingClientRect();
      const px = cx - rect.left;
      const py = cy - rect.top;
      if (px < -40 || py < -40 || px > w + 40 || py > h + 40) return;
      lastMove = now;
      if (!weak) for (let i = 0; i < 3; i++) spawn(px, py, true);
    };
    const mouse = (e: MouseEvent) => onMove(e.clientX, e.clientY);
    const touch = (e: TouchEvent) => {
      const t = e.touches[0];
      if (t) onMove(t.clientX, t.clientY);
    };
    window.addEventListener("mousemove", mouse, { passive: true });
    window.addEventListener("touchmove", touch, { passive: true });

    // Pause the animation while the canvas is scrolled out of view.
    let raf = 0;
    let visible = true;
    const io = new IntersectionObserver(
      (entries) => {
        visible = entries[0]?.isIntersecting ?? true;
        if (visible && !raf) raf = requestAnimationFrame(tick);
      },
      { rootMargin: "120px" },
    );
    io.observe(canvas);

    const tick = (ts: number) => {
      if (!visible) {
        raf = 0;
        return;
      }
      now = ts;
      ctx.clearRect(0, 0, w, h);

      const idle = now - lastMove > 900;
      const target = idle ? idleCount : activeCount;
      const brightness = idle ? 0.95 : 0.7;
      if (embers.length < target) {
        spawn(Math.random() * w, h + 8);
        if (idle && embers.length < target - 1) spawn(Math.random() * w, h + 8);
      }

      for (let i = embers.length - 1; i >= 0; i--) {
        const e = embers[i];
        e.life++;
        e.x += e.vx + Math.sin(e.life * 0.04) * e.drift;
        e.y += e.vy;
        e.vy -= 0.003;
        e.vx *= 0.99;
        const t = e.life / e.max;
        if (t >= 1) {
          embers.splice(i, 1);
          continue;
        }
        const alpha = Math.sin(t * Math.PI) * brightness;
        ctx.beginPath();
        ctx.fillStyle = `hsla(${e.hue}, 100%, 56%, ${alpha})`;
        ctx.shadowBlur = 16;
        ctx.shadowColor = `hsla(${e.hue}, 100%, 50%, ${alpha})`;
        ctx.arc(e.x, e.y, e.size * (1 - t * 0.4), 0, Math.PI * 2);
        ctx.fill();
      }
      ctx.shadowBlur = 0;
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(raf);
      io.disconnect();
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", mouse);
      window.removeEventListener("touchmove", touch);
    };
  }, [intensity]);

  return (
    <canvas
      ref={ref}
      aria-hidden="true"
      className={`pointer-events-none absolute inset-0 h-full w-full ${className}`}
    />
  );
}

/**
 * Static, themed background ornament for darker/grey sections — no JS, no canvas.
 * Layers: warm radial glows, a faint flame silhouette and film grain. Pure CSS/SVG.
 * Sits absolutely behind content (parent must be `relative` + `overflow-hidden`).
 */
export default function EmberBackdrop({
  className = "",
  variant = "default",
}: {
  className?: string;
  variant?: "default" | "top" | "split";
}) {
  const glow =
    variant === "split"
      ? "radial-gradient(60% 50% at 12% 0%, rgba(255,106,0,0.16), transparent 60%), radial-gradient(55% 50% at 90% 100%, rgba(195,38,22,0.16), transparent 60%)"
      : variant === "top"
        ? "radial-gradient(70% 60% at 50% -10%, rgba(255,106,0,0.18), transparent 65%)"
        : "radial-gradient(60% 55% at 20% 10%, rgba(255,106,0,0.14), transparent 60%), radial-gradient(50% 50% at 85% 90%, rgba(245,166,35,0.10), transparent 60%)";

  return (
    <div
      aria-hidden="true"
      className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`}
    >
      <div className="absolute inset-0" style={{ background: glow }} />
      {/* Faint flame silhouette at the bottom */}
      <svg
        className="absolute bottom-0 left-1/2 h-[55%] w-[140%] -translate-x-1/2 opacity-[0.07]"
        viewBox="0 0 600 300"
        preserveAspectRatio="xMidYMax meet"
        fill="none"
      >
        <path
          d="M300 300C140 300 60 230 60 150 60 95 95 60 120 70 110 30 150 0 165 25 175-5 215 5 210 45 250 20 280 55 270 90 320 55 360 90 345 140 410 95 470 140 450 210 540 180 560 260 470 300Z"
          fill="url(#flame)"
        />
        <defs>
          <linearGradient id="flame" x1="0" y1="300" x2="0" y2="0" gradientUnits="userSpaceOnUse">
            <stop stopColor="#FF3B1F" />
            <stop offset="0.6" stopColor="#FF6A00" />
            <stop offset="1" stopColor="#F5A623" />
          </linearGradient>
        </defs>
      </svg>
      {/* Thin ember divider line near the top */}
      <div className="absolute left-0 top-0 h-px w-full bg-gradient-to-r from-transparent via-magma-orange/40 to-transparent" />
      <div className="grain absolute inset-0 opacity-40" />
    </div>
  );
}

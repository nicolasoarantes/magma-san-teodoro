"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import type { Dictionary } from "@/i18n";
import { magmaAssets } from "@/data/assets";
import MagmaCanvasBackground from "@/components/ui/MagmaCanvasBackground";

export default function MagmaPosterSection({ dict }: { dict: Dictionary }) {
  const tiles = [
    { src: magmaAssets.photos.drink, label: "DRINKS", span: "row-span-2" },
    { src: magmaAssets.photos.churrasco, label: "FOOD", span: "" },
    { src: magmaAssets.photos.latinDay, label: "MUSIC", span: "" },
    { src: magmaAssets.photos.aerial, label: "SAN TEODORO", span: "col-span-2" },
  ];

  return (
    <section className="relative overflow-hidden bg-magma-black py-16 sm:py-24">
      <MagmaCanvasBackground className="opacity-40" intensity={0.6} />
      <div className="relative mx-auto max-w-5xl px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7 }}
          className="relative rounded-[28px] border border-magma-orange/40 bg-gradient-to-b from-magma-charcoal/80 to-black p-5 shadow-ember-lg sm:p-8"
        >
          {/* Corner accents */}
          <span className="pointer-events-none absolute left-4 top-4 h-6 w-6 border-l-2 border-t-2 border-magma-orange" />
          <span className="pointer-events-none absolute right-4 top-4 h-6 w-6 border-r-2 border-t-2 border-magma-orange" />
          <span className="pointer-events-none absolute bottom-4 left-4 h-6 w-6 border-b-2 border-l-2 border-magma-orange" />
          <span className="pointer-events-none absolute bottom-4 right-4 h-6 w-6 border-b-2 border-r-2 border-magma-orange" />

          <p className="text-center font-heading text-xs uppercase tracking-[0.45em] text-magma-orange sm:text-sm">
            {dict.home.poster.tag}
          </p>

          <div className="mx-auto mt-3 w-full" style={{ maxWidth: 560 }}>
            <Image
              src={magmaAssets.logos.wordmarkFire}
              alt="MAGMA"
              width={640}
              height={145}
              style={{ width: "100%", height: "auto" }}
              className="h-auto w-full object-contain drop-shadow-[0_0_18px_rgba(255,106,0,0.2)]"
            />
          </div>

          <div className="mx-auto mt-3 h-px w-40 ember-divider" />

          <p className="mt-4 text-center font-heading text-lg italic text-magma-gold sm:text-2xl">
            “{dict.home.poster.quote}”
          </p>
          <p className="mt-1 text-center text-xs uppercase tracking-widest text-magma-cream/40">
            {dict.home.poster.caption}
          </p>

          {/* Collage */}
          <div className="mt-8 grid auto-rows-[110px] grid-cols-3 gap-3 sm:auto-rows-[150px]">
            {tiles.map((t) => (
              <motion.div
                key={t.label}
                initial={{ opacity: 0, scale: 0.94 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className={`group relative overflow-hidden rounded-xl border border-white/10 ${t.span}`}
              >
                <Image
                  src={t.src}
                  alt={`MAGMA — ${t.label}`}
                  fill
                  quality={88}
                  sizes="(max-width: 640px) 33vw, 320px"
                  className="object-cover transition duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
                <span className="absolute bottom-2 left-3 font-heading text-xs uppercase tracking-[0.2em] text-magma-cream">
                  {t.label}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import type { Locale } from "@/lib/locale";
import { localizedPath } from "@/lib/locale";
import type { Dictionary } from "@/i18n";
import { magmaAssets } from "@/data/assets";
import { waLink } from "@/lib/whatsapp";
import MagmaCanvasBackground from "@/components/ui/MagmaCanvasBackground";

export default function HeroSection({
  locale,
  dict,
}: {
  locale: Locale;
  dict: Dictionary;
}) {
  return (
    <section className="relative flex min-h-[100svh] items-center justify-center overflow-hidden">
      {/* Background video. Avoid a stale poster frame before playback starts. */}
      <video
        className="absolute inset-0 h-full w-full bg-magma-black object-cover"
        autoPlay
        muted
        loop
        playsInline
      >
        <source src={magmaAssets.videos.hero} type="video/mp4" />
      </video>

      <div className="absolute inset-0 heat-veil" />
      <div className="absolute inset-0 grain opacity-60" />
      <MagmaCanvasBackground className="opacity-80" intensity={1} />

      <div className="relative z-10 flex flex-col items-center px-6 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          className="relative px-4 py-4 before:absolute before:inset-x-0 before:top-1/2 before:z-0 before:h-44 before:-translate-y-1/2 before:rounded-full before:bg-[radial-gradient(ellipse_at_center,rgba(5,4,3,0.76),rgba(5,4,3,0.42)_48%,transparent_76%)] before:blur-2xl before:content-[''] sm:px-8 sm:py-6"
        >
          <Image
            src={magmaAssets.logos.whiteCompleteTransparent}
            alt="MAGMA — Churrascaria, Steakhouse & American Bar"
            width={1594}
            height={672}
            priority
            className="relative z-10 mx-auto h-auto w-[min(84vw,520px)] object-contain drop-shadow-[0_10px_26px_rgba(0,0,0,0.88)]"
          />
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.25 }}
          className="mt-8 font-display text-5xl leading-[0.95] tracking-wide sm:text-7xl md:text-8xl"
        >
          <span className="block text-magma-cream">{dict.home.hero.line1}</span>
          <span className="block heat-text">{dict.home.hero.line2}</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-5 max-w-xl text-balance text-base text-magma-cream/85 sm:text-lg"
        >
          {dict.home.hero.subtitle}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.65 }}
          className="mt-9 flex flex-col items-center gap-3 sm:flex-row"
        >
          <a
            href={waLink(dict.wa.reservation)}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full rounded-full bg-magma-orange px-7 py-3 text-center font-heading text-sm uppercase tracking-widest text-magma-black shadow-ember transition hover:scale-[1.03] active:scale-95 sm:w-auto"
          >
            {dict.common.book}
          </a>
          <a
            href={localizedPath(locale, "/menu")}
            className="w-full rounded-full border border-magma-cream/40 px-7 py-3 text-center font-heading text-sm uppercase tracking-widest text-magma-cream transition hover:border-magma-orange hover:text-magma-orange sm:w-auto"
          >
            {dict.common.viewMenu}
          </a>
          <a
            href={localizedPath(locale, "/events")}
            className="w-full rounded-full border border-magma-cream/40 px-7 py-3 text-center font-heading text-sm uppercase tracking-widest text-magma-cream transition hover:border-magma-orange hover:text-magma-orange sm:w-auto"
          >
            {dict.common.events}
          </a>
        </motion.div>
      </div>

      <div className="absolute bottom-6 left-1/2 z-10 -translate-x-1/2">
        <div className="h-10 w-6 rounded-full border border-magma-cream/30 p-1">
          <motion.div
            animate={{ y: [0, 14, 0] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
            className="mx-auto h-2 w-1 rounded-full bg-magma-orange"
          />
        </div>
      </div>
    </section>
  );
}

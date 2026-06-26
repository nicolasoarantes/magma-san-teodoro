"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import type { Dictionary } from "@/i18n";
import { magmaAssets } from "@/data/assets";
import { waLink } from "@/lib/whatsapp";
import MagmaCanvasBackground from "@/components/ui/MagmaCanvasBackground";

export default function EventsHero({ dict }: { dict: Dictionary }) {
  return (
    <section className="relative flex min-h-[78svh] items-center justify-center overflow-hidden">
      <Image
        src={magmaAssets.photos.latinDay}
        alt="MAGMA Latin night"
        fill
        priority
        quality={90}
        sizes="100vw"
        className="object-cover"
      />
      <div className="absolute inset-0 heat-veil" />
      <div className="absolute inset-0 grain opacity-60" />
      <MagmaCanvasBackground className="opacity-70" intensity={0.8} />

      <div className="relative z-10 mx-auto max-w-3xl px-6 pt-20 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="font-display text-5xl leading-[0.95] tracking-wide sm:text-7xl md:text-8xl"
        >
          <span className="text-magma-cream">{dict.events.hero.title}</span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mx-auto mt-5 max-w-xl text-balance text-base text-magma-cream/85 sm:text-lg"
        >
          {dict.events.hero.subtitle}
        </motion.p>
        <motion.a
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.45 }}
          href={waLink(dict.wa.event)}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-8 inline-block rounded-full bg-magma-orange px-8 py-3.5 font-heading text-sm uppercase tracking-widest text-magma-black shadow-ember transition hover:scale-[1.03]"
        >
          {dict.events.hero.cta}
        </motion.a>
      </div>
    </section>
  );
}

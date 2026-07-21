"use client";

import { motion } from "framer-motion";
import type { Dictionary } from "@/i18n";
import SocialLinks from "@/components/ui/SocialLinks";

export default function MenuHero({ dict }: { dict: Dictionary }) {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#1a0a02] to-magma-black pb-10 pt-28 sm:pt-32">
      <div className="grain absolute inset-0 opacity-40" />
      <div className="relative mx-auto max-w-4xl px-6 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="font-display text-6xl tracking-wide sm:text-8xl"
        >
          <span className="heat-text">{dict.menu.title}</span>
        </motion.h1>
        <p className="mx-auto mt-3 max-w-xs text-balance font-heading text-xs uppercase leading-relaxed tracking-[0.22em] text-magma-cream/60 sm:max-w-none sm:text-sm sm:tracking-[0.3em]">
          {dict.menu.subtitle}
        </p>
        <SocialLinks className="mt-6" />
      </div>
    </section>
  );
}

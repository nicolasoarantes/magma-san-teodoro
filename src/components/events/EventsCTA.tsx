"use client";

import { motion } from "framer-motion";
import type { Dictionary } from "@/i18n";
import { waLink } from "@/lib/whatsapp";
import MagmaCanvasBackground from "@/components/ui/MagmaCanvasBackground";

export default function EventsCTA({ dict }: { dict: Dictionary }) {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-magma-black via-[#1a0a02] to-magma-black py-20 sm:py-28">
      <MagmaCanvasBackground className="opacity-70" intensity={0.9} />
      <div className="relative mx-auto max-w-3xl px-6 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="font-display text-5xl leading-[0.95] tracking-wide sm:text-6xl"
        >
          <span className="heat-text">{dict.events.cta.title}</span>
        </motion.h2>
        <p className="mx-auto mt-5 max-w-xl text-balance text-base text-magma-cream/80 sm:text-lg">
          {dict.events.cta.copy}
        </p>
        <a
          href={waLink(dict.wa.event)}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-9 inline-block rounded-full bg-magma-orange px-8 py-3.5 font-heading text-sm uppercase tracking-widest text-magma-black shadow-ember transition hover:scale-[1.03]"
        >
          {dict.events.cta.button}
        </a>
      </div>
    </section>
  );
}

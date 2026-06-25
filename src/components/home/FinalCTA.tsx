"use client";

import { motion } from "framer-motion";
import type { Locale } from "@/lib/locale";
import { localizedPath } from "@/lib/locale";
import type { Dictionary } from "@/i18n";
import { whatsappLink } from "@/lib/whatsapp";
import MagmaCanvasBackground from "@/components/ui/MagmaCanvasBackground";

export default function FinalCTA({
  locale,
  dict,
}: {
  locale: Locale;
  dict: Dictionary;
}) {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-magma-black via-[#1a0a02] to-magma-black py-20 sm:py-28">
      <MagmaCanvasBackground className="opacity-70" intensity={0.9} />
      <div className="relative mx-auto max-w-3xl px-6 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="font-display text-5xl leading-[0.95] tracking-wide sm:text-7xl"
        >
          <span className="heat-text">{dict.home.finalCta.title}</span>
        </motion.h2>
        <p className="mx-auto mt-5 max-w-xl text-balance text-base text-magma-cream/80 sm:text-lg">
          {dict.home.finalCta.copy}
        </p>
        <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <a
            href={whatsappLink("reservation")}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full rounded-full bg-magma-orange px-8 py-3.5 text-center font-heading text-sm uppercase tracking-widest text-magma-black shadow-ember transition hover:scale-[1.03] sm:w-auto"
          >
            {dict.common.book}
          </a>
          <a
            href={localizedPath(locale, "/menu")}
            className="w-full rounded-full border border-magma-cream/40 px-8 py-3.5 text-center font-heading text-sm uppercase tracking-widest text-magma-cream transition hover:border-magma-orange hover:text-magma-orange sm:w-auto"
          >
            {dict.common.viewMenu}
          </a>
          <a
            href={localizedPath(locale, "/events")}
            className="w-full rounded-full border border-magma-cream/40 px-8 py-3.5 text-center font-heading text-sm uppercase tracking-widest text-magma-cream transition hover:border-magma-orange hover:text-magma-orange sm:w-auto"
          >
            {dict.common.exploreEvents}
          </a>
        </div>
      </div>
    </section>
  );
}

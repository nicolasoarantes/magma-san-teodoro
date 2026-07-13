"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";
import type { Dictionary } from "@/i18n";
import EmberBackdrop from "@/components/ui/EmberBackdrop";

const s = {
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.6,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

// Icons follow the order of dict.events.plan.cards:
// dinners, birthdays, corporate, dj sets, brazilian nights, cocktail & food.
const ICONS: ReactNode[] = [
  <svg key="d" viewBox="0 0 24 24" {...s}>
    <path d="M5 3v7a2 2 0 0 0 2 2h0a2 2 0 0 0 2-2V3M7 12v9M17 3c-1.5 0-2.5 2-2.5 5s1 4 2.5 4 0 0 0 0v9" />
  </svg>,
  <svg key="b" viewBox="0 0 24 24" {...s}>
    <path d="M4 21h16M5 21v-7h14v7M3 14c1.2 0 1.2-1.5 2.4-1.5S6.6 14 7.8 14s1.2-1.5 2.4-1.5S11.4 14 12.6 14 13.8 12.5 15 12.5 16.2 14 17.4 14 18.6 12.5 19.8 12.5 21 14 21 14M12 8V5M12 5a1 1 0 1 0-1-1c0 .8 1 1 1 1Z" />
  </svg>,
  <svg key="c" viewBox="0 0 24 24" {...s}>
    <path d="M3 21h18M5 21V7l7-4 7 4v14M9 21v-4h6v4M9 11h0M15 11h0M9 14h0M15 14h0" />
  </svg>,
  <svg key="dj" viewBox="0 0 24 24" {...s}>
    <circle cx="12" cy="12" r="8" />
    <circle cx="12" cy="12" r="2.4" />
    <path d="M12 4v3M12 17v3" />
  </svg>,
  <svg key="br" viewBox="0 0 24 24" {...s}>
    <path d="M12 3c-1 2-3 3-3 6a3 3 0 0 0 6 0c0-1-.5-1.8-1-2.5M12 21c-3.5 0-6-2.4-6-6 0 0 2 1 3 0 .5 3 3 3.5 3 6Z" />
  </svg>,
  <svg key="cf" viewBox="0 0 24 24" {...s}>
    <path d="M5 4h14l-7 8-7-8ZM12 12v6M9 21h6M9 4l3 3 3-3" />
  </svg>,
];

export default function PlanEvent({ dict }: { dict: Dictionary }) {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#0c0b09] via-magma-charcoal to-[#0c0b09] py-16 sm:py-24">
      <EmberBackdrop variant="default" />
      <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
        <div className="text-center">
          <p className="font-heading text-xs uppercase tracking-[0.35em] text-magma-orange">
            {dict.events.types.brazilian}
          </p>
          <h2 className="mt-3 font-display text-4xl tracking-wide text-magma-cream sm:text-6xl">
            {dict.events.plan.title}
          </h2>
          <p className="mt-3 text-sm text-magma-cream/60 sm:text-base">
            {dict.events.plan.subtitle}
          </p>
        </div>

        <div className="horizontal-carousel no-scrollbar -mx-4 mt-12 flex snap-x snap-mandatory gap-4 overflow-x-auto px-4 pb-2 sm:mx-0 sm:grid sm:grid-cols-2 sm:overflow-visible sm:px-0 lg:grid-cols-3">
          {dict.events.plan.cards.map((card, i) => (
            <motion.div
              key={card}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: (i % 3) * 0.07 }}
              className="group relative w-[80%] flex-none snap-center overflow-hidden rounded-2xl border border-white/10 bg-magma-black/50 p-6 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-magma-orange/60 hover:shadow-ember sm:w-auto sm:p-7"
            >
              {/* hover glow */}
              <div className="pointer-events-none absolute -right-10 -top-10 h-28 w-28 rounded-full bg-magma-orange/0 blur-2xl transition-all duration-500 group-hover:bg-magma-orange/20" />
              <div className="relative flex items-center gap-4">
                <span className="flex h-12 w-12 flex-none items-center justify-center rounded-xl border border-magma-orange/30 bg-gradient-to-br from-magma-orange/15 to-transparent text-magma-orange transition [&>svg]:h-6 [&>svg]:w-6 group-hover:border-magma-orange/70">
                  {ICONS[i % ICONS.length]}
                </span>
                <h3 className="font-heading text-base font-semibold uppercase leading-tight tracking-wide text-magma-cream sm:text-lg">
                  {card}
                </h3>
              </div>
              <span className="mt-5 block h-0.5 w-10 bg-gradient-to-r from-magma-orange to-magma-ember transition-all duration-500 group-hover:w-20" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

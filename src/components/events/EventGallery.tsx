"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import type { Dictionary } from "@/i18n";
import { events } from "@/data/events";

export default function EventGallery({ dict }: { dict: Dictionary }) {
  return (
    <section className="bg-magma-black py-16 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="text-center">
          <h2 className="font-display text-4xl tracking-wide text-magma-cream sm:text-6xl">
            {dict.events.gallery.title}
          </h2>
          <p className="mt-3 text-sm text-magma-cream/60">
            {dict.events.gallery.subtitle}
          </p>
        </div>

        <div className="horizontal-carousel no-scrollbar -mx-4 mt-12 flex snap-x snap-mandatory gap-4 overflow-x-auto px-4 pb-2 sm:mx-0 sm:grid sm:grid-cols-2 sm:gap-5 sm:overflow-visible sm:px-0 lg:grid-cols-3">
          {events.map((ev, i) => (
            <motion.article
              key={ev.id}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: (i % 3) * 0.08 }}
              className="group relative w-[80%] flex-none snap-center overflow-hidden rounded-2xl border border-white/10 bg-magma-charcoal sm:w-auto"
            >
              <div className="relative aspect-[4/5] overflow-hidden">
                <Image
                  src={ev.image}
                  alt={ev.title}
                  fill
                  quality={90}
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover transition duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/15 to-transparent" />
                <span className="absolute left-3 top-3 rounded-full border border-magma-orange/60 bg-black/40 px-3 py-1 font-heading text-[10px] uppercase tracking-widest text-magma-orange backdrop-blur">
                  {dict.events.types[ev.type]}
                </span>
                <div className="absolute inset-x-0 bottom-0 p-4">
                  <h3 className="font-heading text-lg font-semibold uppercase leading-tight tracking-wide text-magma-cream">
                    {ev.title}
                  </h3>
                  <p className="mt-1 text-sm text-magma-gold">
                    {ev.dateText ?? dict.common.pastEvent}
                  </p>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

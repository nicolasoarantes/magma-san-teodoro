"use client";

import { motion } from "framer-motion";
import type { Dictionary } from "@/i18n";
import { magmaAssets } from "@/data/assets";
import Image from "next/image";
import EmberBackdrop from "@/components/ui/EmberBackdrop";

export default function ExperienceCards({ dict }: { dict: Dictionary }) {
  const images = [
    magmaAssets.photos.churrasco,
    magmaAssets.photos.drink,
    magmaAssets.photos.latinDay,
    magmaAssets.photos.facade,
  ];
  const cards = dict.home.experience.cards;

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-magma-charcoal to-[#0c0b09] py-16 sm:py-24">
      <EmberBackdrop variant="split" />
      <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
        <div className="text-center">
          <h2 className="font-display text-4xl tracking-wide text-magma-cream sm:text-6xl">
            {dict.home.experience.title}
          </h2>
          <p className="mt-3 text-sm text-magma-cream/60 sm:text-base">
            {dict.home.experience.subtitle}
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {cards.map((card, i) => (
            <motion.article
              key={card.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: i * 0.08 }}
              className="group relative h-72 overflow-hidden rounded-2xl border border-white/10"
            >
              <Image
                src={images[i]}
                alt={card.title}
                fill
                quality={90}
                sizes="(max-width: 640px) 100vw, 25vw"
                className="object-cover transition duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 photo-veil" />
              <div className="absolute inset-x-0 bottom-0 p-5">
                <span className="mb-2 block h-0.5 w-8 bg-magma-orange transition-all duration-500 group-hover:w-14" />
                <h3 className="font-heading text-xl font-semibold uppercase tracking-wide text-magma-cream">
                  {card.title}
                </h3>
                <p className="mt-1 text-sm text-magma-cream/70">{card.text}</p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

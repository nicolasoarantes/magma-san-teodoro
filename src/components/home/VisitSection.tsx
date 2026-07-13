"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import type { Dictionary } from "@/i18n";
import { magmaAssets } from "@/data/assets";
import { waLink } from "@/lib/whatsapp";

const ADDRESS = "Via San Francesco d'Assisi 15, San Teodoro (SS)";
const MAPS_URL =
  process.env.NEXT_PUBLIC_MAPS_URL ||
  `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
    "MAGMA " + ADDRESS,
  )}`;

export default function VisitSection({ dict }: { dict: Dictionary }) {
  return (
    <section className="relative overflow-hidden py-16 sm:py-24">
      <Image
        src={magmaAssets.photos.rotisserieChicken}
        alt="Pollo allo spiedo in cottura alla griglia del MAGMA"
        fill
        quality={92}
        sizes="100vw"
        className="scale-110 object-cover blur-[3px]"
        style={{ objectPosition: "center 58%" }}
      />
      <div className="absolute inset-0 bg-magma-black/65" />
      <div className="absolute inset-0 photo-veil" />
      <div className="grain absolute inset-0 opacity-30" />
      <div className="relative mx-auto max-w-3xl px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7 }}
        >
          <p className="font-heading text-xs uppercase tracking-[0.35em] text-magma-orange">
            {dict.home.visit.kicker}
          </p>
          <h2 className="mt-3 font-display text-5xl tracking-wide text-magma-cream sm:text-7xl">
            {dict.home.visit.title}
          </h2>
          <p className="mt-4 text-lg text-magma-cream/85">{dict.home.visit.address}</p>
          <a href={`tel:${dict.home.visit.phone.replace(/\s/g, "")}`} className="mt-1 block text-magma-cream/60 hover:text-magma-orange">
            {dict.home.visit.phone}
          </a>

          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a
              href={MAPS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full rounded-full bg-magma-orange px-7 py-3 text-center font-heading text-sm uppercase tracking-widest text-magma-black transition hover:scale-[1.03] sm:w-auto"
            >
              {dict.common.openMaps}
            </a>
            <a
              href={waLink(dict.wa.reservation)}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full rounded-full border border-magma-cream/40 px-7 py-3 text-center font-heading text-sm uppercase tracking-widest text-magma-cream transition hover:border-magma-orange hover:text-magma-orange sm:w-auto"
            >
              {dict.common.whatsapp}
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import MagmaCanvasBackground from "@/components/ui/MagmaCanvasBackground";

export default function FeatureBlock({
  image,
  imageAlt,
  kicker,
  title,
  copy,
  ctaLabel,
  ctaHref,
  reverse = false,
  fire = 0.7,
}: {
  image: string;
  imageAlt: string;
  kicker: string;
  title: string;
  copy: string;
  ctaLabel?: string;
  ctaHref?: string;
  reverse?: boolean;
  fire?: number;
}) {
  return (
    <section className="relative overflow-hidden bg-magma-black py-12 sm:py-20">
      <MagmaCanvasBackground className="opacity-70" intensity={fire} />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          background: reverse
            ? "radial-gradient(50% 60% at 85% 50%, rgba(255,106,0,0.12), transparent 60%)"
            : "radial-gradient(50% 60% at 15% 50%, rgba(255,106,0,0.12), transparent 60%)",
        }}
      />
      <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
        <div
          className={`grid items-center gap-8 lg:grid-cols-2 ${
            reverse ? "lg:[&>*:first-child]:order-2" : ""
          }`}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.7 }}
            className="relative aspect-[4/5] overflow-hidden rounded-3xl border border-white/10 shadow-ember sm:aspect-[3/2] lg:aspect-[4/5]"
          >
            <Image
              src={image}
              alt={imageAlt}
              fill
              quality={90}
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="px-1 lg:px-4"
          >
            <p className="font-heading text-xs uppercase tracking-[0.35em] text-magma-orange">
              {kicker}
            </p>
            <h2 className="mt-3 font-display text-5xl leading-[0.95] tracking-wide text-magma-cream sm:text-6xl">
              {title}
            </h2>
            <p className="mt-4 max-w-md text-base text-magma-cream/75 sm:text-lg">
              {copy}
            </p>
            {ctaLabel && ctaHref && (
              <Link
                href={ctaHref}
                className="mt-7 inline-block rounded-full border border-magma-orange/70 px-7 py-3 font-heading text-sm uppercase tracking-widest text-magma-orange transition hover:bg-magma-orange hover:text-magma-black"
              >
                {ctaLabel}
              </Link>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

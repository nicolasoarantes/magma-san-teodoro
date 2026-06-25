"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import type { Locale } from "@/lib/locale";
import type { Dictionary } from "@/i18n";
import { whatsappLink } from "@/lib/whatsapp";
import LanguageSwitcher from "./LanguageSwitcher";

export default function MobileMenu({
  locale,
  dict,
  links,
  onClose,
}: {
  locale: Locale;
  dict: Dictionary;
  links: { href: string; label: string }[];
  onClose: () => void;
}) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.25 }}
      className="fixed inset-0 z-[60] md:hidden"
    >
      <div className="absolute inset-0 bg-magma-black/95 backdrop-blur-md heat-veil" />
      <div className="relative flex h-full flex-col px-6 pt-6">
        <div className="flex items-center justify-between">
          <span className="font-display text-2xl tracking-wider heat-text">MAGMA</span>
          <button
            onClick={onClose}
            aria-label="Close menu"
            className="flex h-10 w-10 items-center justify-center text-3xl text-magma-cream"
          >
            ×
          </button>
        </div>

        <nav className="mt-16 flex flex-col gap-6">
          {links.map((l, i) => (
            <motion.div
              key={l.href}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.08 * i + 0.1 }}
            >
              <Link
                href={l.href}
                onClick={onClose}
                className="font-display text-5xl uppercase tracking-wide text-magma-cream hover:text-magma-orange"
              >
                {l.label}
              </Link>
            </motion.div>
          ))}
        </nav>

        <div className="mt-auto mb-10 flex flex-col gap-5">
          <a
            href={whatsappLink("reservation")}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-magma-orange px-6 py-3 text-center font-heading text-sm uppercase tracking-widest text-magma-black"
          >
            {dict.common.book}
          </a>
          <LanguageSwitcher locale={locale} label={dict.common.language} expanded />
        </div>
      </div>
    </motion.div>
  );
}

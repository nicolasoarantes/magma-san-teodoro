"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import type { Locale } from "@/lib/locale";
import { localizedPath } from "@/lib/locale";
import type { Dictionary } from "@/i18n";
import { magmaAssets } from "@/data/assets";
import { whatsappLink } from "@/lib/whatsapp";
import LanguageSwitcher from "./LanguageSwitcher";
import MobileMenu from "./MobileMenu";

export default function Header({
  locale,
  dict,
}: {
  locale: Locale;
  dict: Dictionary;
}) {
  const pathname = usePathname();
  const [hidden, setHidden] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    let last = window.scrollY;
    const onScroll = () => {
      const y = window.scrollY;
      setScrolled(y > 24);
      if (Math.abs(y - last) > 6) {
        setHidden(y > last && y > 120);
        last = y;
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    { href: localizedPath(locale, "/"), label: dict.nav.home },
    { href: localizedPath(locale, "/events"), label: dict.nav.events },
    { href: localizedPath(locale, "/menu"), label: dict.nav.menu },
  ];

  const isActive = (href: string) =>
    href === localizedPath(locale, "/")
      ? pathname === href
      : pathname.startsWith(href);

  return (
    <>
      <motion.header
        initial={{ y: 0 }}
        animate={{ y: hidden ? "-100%" : 0 }}
        transition={{ duration: 0.35, ease: "easeInOut" }}
        className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
          scrolled
            ? "bg-magma-black/85 backdrop-blur-md border-b border-white/5"
            : "bg-gradient-to-b from-black/60 to-transparent"
        }`}
      >
        <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
          <Link href={localizedPath(locale, "/")} className="relative z-10 flex items-center" aria-label="MAGMA home">
            <Image
              src={magmaAssets.logos.header}
              alt="MAGMA — Churrascaria, Steakhouse & American Bar"
              width={210}
              height={34}
              priority
              className="h-8 w-auto object-contain drop-shadow-[0_1px_10px_rgba(255,106,0,0.25)] sm:h-9"
            />
          </Link>

          <div className="hidden items-center gap-8 md:flex">
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className={`font-heading text-sm uppercase tracking-widest transition-colors ${
                  isActive(l.href)
                    ? "text-magma-orange"
                    : "text-magma-cream/80 hover:text-magma-cream"
                }`}
              >
                {l.label}
              </Link>
            ))}
            <a
              href={whatsappLink("reservation")}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-magma-orange/70 px-4 py-1.5 font-heading text-xs uppercase tracking-widest text-magma-orange transition hover:bg-magma-orange hover:text-magma-black"
            >
              {dict.nav.whatsapp}
            </a>
            <LanguageSwitcher locale={locale} label={dict.common.language} />
          </div>

          <button
            onClick={() => setMenuOpen(true)}
            className="relative z-10 flex h-10 w-10 items-center justify-center md:hidden"
            aria-label="Open menu"
          >
            <span className="flex flex-col gap-1.5">
              <span className="block h-0.5 w-6 bg-magma-cream" />
              <span className="block h-0.5 w-6 bg-magma-cream" />
              <span className="block h-0.5 w-4 bg-magma-orange" />
            </span>
          </button>
        </nav>
      </motion.header>

      <AnimatePresence>
        {menuOpen && (
          <MobileMenu
            locale={locale}
            dict={dict}
            links={links}
            onClose={() => setMenuOpen(false)}
          />
        )}
      </AnimatePresence>
    </>
  );
}

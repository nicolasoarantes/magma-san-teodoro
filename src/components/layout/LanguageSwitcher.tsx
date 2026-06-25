"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { locales, localeNames, type Locale } from "@/lib/locale";

export default function LanguageSwitcher({
  locale,
  label,
  expanded = false,
}: {
  locale: Locale;
  label?: string;
  expanded?: boolean;
}) {
  const pathname = usePathname();

  // Replace the leading /<locale> segment with the target locale.
  const swap = (target: Locale) => {
    const rest = pathname.replace(/^\/(en|it|pt)(?=\/|$)/, "");
    return `/${target}${rest || ""}` || `/${target}`;
  };

  return (
    <div
      className={`flex items-center gap-1 ${expanded ? "" : "rounded-full border border-white/10 px-1 py-1"}`}
      aria-label={label}
    >
      {locales.map((l) => (
        <Link
          key={l}
          href={swap(l)}
          aria-current={l === locale ? "true" : undefined}
          className={`rounded-full px-2.5 py-1 font-heading text-xs uppercase tracking-widest transition ${
            l === locale
              ? "bg-magma-orange text-magma-black"
              : "text-magma-cream/70 hover:text-magma-cream"
          }`}
        >
          {localeNames[l]}
        </Link>
      ))}
    </div>
  );
}

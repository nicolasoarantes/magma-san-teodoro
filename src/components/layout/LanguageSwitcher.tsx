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
      className={`flex items-center gap-1 ${expanded ? "" : "rounded-full border border-magma-orange/40 px-1.5 py-1"}`}
      aria-label={label || "Language"}
    >
      {!expanded && (
        <svg
          viewBox="0 0 24 24"
          className="ml-0.5 mr-0.5 h-4 w-4 text-magma-orange"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.6"
          aria-hidden="true"
        >
          <circle cx="12" cy="12" r="9" />
          <path d="M3 12h18M12 3c2.5 2.5 2.5 15 0 18M12 3c-2.5 2.5-2.5 15 0 18" />
        </svg>
      )}
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

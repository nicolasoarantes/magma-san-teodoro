"use client";

import type { Locale } from "@/lib/locale";
import { categoryLabel } from "@/data/menu-i18n";

export default function MenuFilters({
  categories,
  active,
  onChange,
  allValue,
  allLabel,
  locale,
}: {
  categories: string[];
  active: string;
  onChange: (value: string) => void;
  allValue: string;
  allLabel: string;
  locale: Locale;
}) {
  const chips = [
    { value: allValue, label: allLabel },
    ...categories.map((c) => ({ value: c, label: categoryLabel(c, locale) })),
  ];

  return (
    <div className="no-scrollbar -mx-4 flex gap-2 overflow-x-auto px-4 sm:mx-0 sm:flex-wrap sm:px-0">
      {chips.map((chip) => {
        const isActive = active === chip.value;
        return (
          <button
            key={chip.value}
            onClick={() => onChange(chip.value)}
            className={`flex-none whitespace-nowrap rounded-full border px-4 py-2 font-heading text-xs uppercase tracking-widest transition ${
              isActive
                ? "border-magma-orange bg-magma-orange text-magma-black"
                : "border-white/15 text-magma-cream/70 hover:border-magma-orange/60 hover:text-magma-cream"
            }`}
          >
            {chip.label}
          </button>
        );
      })}
    </div>
  );
}

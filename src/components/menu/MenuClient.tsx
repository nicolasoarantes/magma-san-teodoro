"use client";

import { useMemo, useState } from "react";
import type { Locale } from "@/lib/locale";
import type { Dictionary } from "@/i18n";
import type { MenuItem } from "@/data/menu";
import { groupItems, matchesQuery } from "@/lib/menu-normalizer";
import { categoryIntro, categoryLabel, subcategoryLabel } from "@/data/menu-i18n";
import MenuFilters from "./MenuFilters";
import MenuCard from "./MenuCard";

const ALL = "__all__";

export default function MenuClient({
  dict,
  items,
  categories,
  locale,
}: {
  dict: Dictionary;
  items: MenuItem[];
  categories: string[];
  locale: Locale;
}) {
  const [active, setActive] = useState(ALL);
  const [query, setQuery] = useState("");

  const filtered = useMemo(() => {
    return items.filter(
      (it) =>
        (active === ALL || it.category === active) && matchesQuery(it, query),
    );
  }, [items, active, query]);

  const groups = useMemo(() => groupItems(filtered), [filtered]);

  return (
    <section className="bg-magma-black pb-20">
      <div className="sticky top-[var(--magma-header-offset,4rem)] z-30 border-b border-white/5 bg-magma-black/90 backdrop-blur-md transition-[top] duration-300">
        <div className="mx-auto max-w-4xl px-4 py-4 sm:px-6">
          <div className="relative mb-3">
            <input
              type="search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder={dict.menu.searchPlaceholder}
              className="w-full rounded-full border border-white/15 bg-magma-charcoal/80 px-5 py-3 text-sm text-magma-cream placeholder:text-magma-cream/40 focus:border-magma-orange focus:outline-none"
            />
          </div>
          <MenuFilters
            categories={categories}
            active={active}
            onChange={setActive}
            allValue={ALL}
            allLabel={dict.menu.all}
            locale={locale}
          />
        </div>
      </div>

      <div className="mx-auto max-w-4xl px-4 pt-10 sm:px-6">
        {groups.length === 0 && (
          <p className="py-20 text-center text-magma-cream/50">{dict.menu.empty}</p>
        )}

        {groups.map((group) => (
          <div key={group.category} className="mb-12">
            <div className="mb-5 flex items-baseline gap-4">
              <h2 className="font-display text-3xl tracking-wide text-magma-orange sm:text-4xl">
                {categoryLabel(group.category, locale)}
              </h2>
              <span className="h-px flex-1 ember-divider opacity-50" />
            </div>
            {categoryIntro(group.category, locale) && (
              <p className="mb-6 max-w-3xl text-sm leading-relaxed text-magma-cream/65">
                {categoryIntro(group.category, locale)}
              </p>
            )}

            {group.subgroups.map((sub) => (
              <div key={sub.subcategory ?? "_"} className="mb-6">
                {sub.subcategory && (
                  <h3 className="mb-3 font-heading text-sm uppercase tracking-[0.25em] text-magma-gold">
                    {subcategoryLabel(sub.subcategory, locale)}
                  </h3>
                )}
                <div className="grid grid-cols-1 gap-3 md:grid-cols-2">
                  {sub.items.map((item, i) => (
                    <MenuCard key={item.name + i} item={item} locale={locale} />
                  ))}
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
}

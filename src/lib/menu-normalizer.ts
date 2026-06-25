import type { MenuItem } from "@/data/menu";

export interface MenuGroup {
  category: string;
  subgroups: { subcategory: string | null; items: MenuItem[] }[];
}

/** Format a price + unit, e.g. "€ 40 /persona", "€ 100 /kg", "€ 12". */
export function formatPrice(item: MenuItem): string {
  if (item.price === null) return "";
  const value = Number.isInteger(item.price)
    ? String(item.price)
    : item.price.toFixed(2).replace(/0$/, "");
  const extra = (item.unit || "€").replace("€", "").trim();
  return `€ ${value}${extra ? ` ${extra}` : ""}`;
}

/** Group a flat item list by category, then subcategory, preserving order. */
export function groupItems(items: MenuItem[]): MenuGroup[] {
  const groups: MenuGroup[] = [];
  for (const item of items) {
    let group = groups.find((g) => g.category === item.category);
    if (!group) {
      group = { category: item.category, subgroups: [] };
      groups.push(group);
    }
    let sub = group.subgroups.find((s) => s.subcategory === item.subcategory);
    if (!sub) {
      sub = { subcategory: item.subcategory, items: [] };
      group.subgroups.push(sub);
    }
    sub.items.push(item);
  }
  return groups;
}

/** Case/diacritic-insensitive search across name, description and details. */
export function matchesQuery(item: MenuItem, query: string): boolean {
  if (!query.trim()) return true;
  const norm = (s: string) =>
    s
      .toLowerCase()
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "");
  const haystack = norm(
    `${item.name} ${item.description} ${item.details} ${item.category}`,
  );
  return query
    .split(/\s+/)
    .every((token) => haystack.includes(norm(token)));
}

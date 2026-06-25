export const locales = ["en", "it", "pt"] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = "en";

export const localeNames: Record<Locale, string> = {
  en: "EN",
  it: "IT",
  pt: "PT",
};

export const localeFullNames: Record<Locale, string> = {
  en: "English",
  it: "Italiano",
  pt: "Português",
};

export function isLocale(value: string): value is Locale {
  return (locales as readonly string[]).includes(value);
}

/** Build a localized path: localizedPath("en", "/menu") -> "/en/menu" */
export function localizedPath(locale: Locale, path = "/"): string {
  const clean = path === "/" ? "" : path.startsWith("/") ? path : `/${path}`;
  return `/${locale}${clean}`;
}

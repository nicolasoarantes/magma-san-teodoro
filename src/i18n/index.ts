import type { Locale } from "@/lib/locale";
import en, { type Dictionary } from "./en";
import it from "./it";
import pt from "./pt";

const dictionaries: Record<Locale, Dictionary> = { en, it, pt };

export function getDictionary(locale: Locale): Dictionary {
  return dictionaries[locale] ?? en;
}

export type { Dictionary };

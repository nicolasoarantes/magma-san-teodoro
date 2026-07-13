import type { Metadata } from "next";
import { isLocale, defaultLocale, type Locale } from "@/lib/locale";
import { getDictionary } from "@/i18n";
import { publicMenuItems, menuCategories } from "@/data/menu";
import MenuHero from "@/components/menu/MenuHero";
import MenuClient from "@/components/menu/MenuClient";
import DownloadMenuBlock from "@/components/menu/DownloadMenuBlock";

export function generateMetadata({
  params,
}: {
  params: { locale: string };
}): Metadata {
  const locale: Locale = isLocale(params.locale) ? params.locale : defaultLocale;
  const dict = getDictionary(locale);
  return {
    title: dict.meta.menuTitle,
    description: dict.meta.menuDescription,
    alternates: { canonical: `/${locale}/menu` },
    openGraph: {
      title: dict.meta.menuTitle,
      description: dict.meta.menuDescription,
    },
  };
}

export default function MenuPage({ params }: { params: { locale: string } }) {
  const locale: Locale = isLocale(params.locale) ? params.locale : defaultLocale;
  const dict = getDictionary(locale);
  return (
    <>
      <MenuHero dict={dict} />
      <MenuClient dict={dict} items={publicMenuItems} categories={menuCategories} locale={locale} />
      <DownloadMenuBlock dict={dict} />
    </>
  );
}

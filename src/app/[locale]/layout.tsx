import type { Metadata } from "next";
import type { ReactNode } from "react";
import { locales, isLocale, defaultLocale, type Locale } from "@/lib/locale";
import { getDictionary } from "@/i18n";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import WhatsAppButton from "@/components/layout/WhatsAppButton";
import LangSync from "@/components/util/LangSync";

const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL || "https://magma-san-teodoro.vercel.app";

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: { locale: string };
}): Promise<Metadata> {
  const locale: Locale = isLocale(params.locale) ? params.locale : defaultLocale;
  const dict = getDictionary(locale);
  return {
    metadataBase: new URL(SITE_URL),
    title: dict.meta.homeTitle,
    description: dict.meta.homeDescription,
    alternates: {
      canonical: `/${locale}`,
      languages: { en: "/en", it: "/it", pt: "/pt" },
    },
    openGraph: {
      title: dict.meta.homeTitle,
      description: dict.meta.homeDescription,
      url: `/${locale}`,
      siteName: "MAGMA San Teodoro",
      locale,
      type: "website",
      images: [
        { url: "/assets/magma/fotos/poster-vibes.jpg", width: 1080, height: 1536 },
      ],
    },
  };
}

export default function LocaleLayout({
  children,
  params,
}: {
  children: ReactNode;
  params: { locale: string };
}) {
  const locale: Locale = isLocale(params.locale) ? params.locale : defaultLocale;
  const dict = getDictionary(locale);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Restaurant",
    name: "MAGMA",
    description: dict.meta.homeDescription,
    servesCuisine: ["Brazilian", "Steakhouse", "Churrascaria"],
    address: {
      "@type": "PostalAddress",
      streetAddress: "Via San Francesco d'Assisi 15",
      addressLocality: "San Teodoro",
      addressRegion: "SS",
      addressCountry: "IT",
    },
    telephone: "+39 340 139 6582",
    url: SITE_URL,
  };

  return (
    <>
      <LangSync locale={locale} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Header locale={locale} dict={dict} />
      <main>{children}</main>
      <Footer locale={locale} dict={dict} />
      <WhatsAppButton message={dict.wa.reservation} label={dict.common.book} />
    </>
  );
}

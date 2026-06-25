import type { Metadata } from "next";
import { isLocale, defaultLocale, type Locale } from "@/lib/locale";
import { getDictionary } from "@/i18n";
import EventsHero from "@/components/events/EventsHero";
import EventGallery from "@/components/events/EventGallery";
import PlanEvent from "@/components/events/PlanEvent";
import EventsCTA from "@/components/events/EventsCTA";

export function generateMetadata({
  params,
}: {
  params: { locale: string };
}): Metadata {
  const locale: Locale = isLocale(params.locale) ? params.locale : defaultLocale;
  const dict = getDictionary(locale);
  return {
    title: dict.meta.eventsTitle,
    description: dict.meta.eventsDescription,
    alternates: { canonical: `/${locale}/events` },
    openGraph: {
      title: dict.meta.eventsTitle,
      description: dict.meta.eventsDescription,
      images: [{ url: "/assets/magma/fotos/event-latin-party.jpg" }],
    },
  };
}

export default function EventsPage({ params }: { params: { locale: string } }) {
  const locale: Locale = isLocale(params.locale) ? params.locale : defaultLocale;
  const dict = getDictionary(locale);
  return (
    <>
      <EventsHero dict={dict} />
      <EventGallery dict={dict} />
      <PlanEvent dict={dict} />
      <EventsCTA dict={dict} />
    </>
  );
}

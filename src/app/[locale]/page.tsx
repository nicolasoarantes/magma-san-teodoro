import { isLocale, defaultLocale, localizedPath, type Locale } from "@/lib/locale";
import { getDictionary } from "@/i18n";
import { magmaAssets } from "@/data/assets";
import HeroSection from "@/components/home/HeroSection";
import MagmaPosterSection from "@/components/home/MagmaPosterSection";
import ExperienceCards from "@/components/home/ExperienceCards";
import FeatureBlock from "@/components/home/FeatureBlock";
import VisitSection from "@/components/home/VisitSection";
import FinalCTA from "@/components/home/FinalCTA";

export default function HomePage({ params }: { params: { locale: string } }) {
  const locale: Locale = isLocale(params.locale) ? params.locale : defaultLocale;
  const dict = getDictionary(locale);

  return (
    <>
      <HeroSection locale={locale} dict={dict} />
      <MagmaPosterSection dict={dict} />
      <ExperienceCards dict={dict} />

      <FeatureBlock
        image={magmaAssets.photos.skewerBeef}
        imageAlt="Grande spiedo di carne brasiliana davanti alla griglia del MAGMA"
        kicker={dict.home.food.kicker}
        title={dict.home.food.title}
        copy={dict.home.food.copy}
        ctaLabel={dict.common.exploreMenu}
        ctaHref={localizedPath(locale, "/menu")}
        fire={1.2}
        imagePosition="58% center"
      />

      <FeatureBlock
        reverse
        image={magmaAssets.photos.drink}
        imageAlt="Tropical yellow cocktail at MAGMA bar"
        kicker={dict.home.cocktails.kicker}
        title={dict.home.cocktails.title}
        copy={dict.home.cocktails.copy}
        ctaLabel={dict.common.viewMenu}
        ctaHref={localizedPath(locale, "/menu")}
      />

      <FeatureBlock
        image={magmaAssets.photos.latinDay}
        imageAlt="Latin night dancefloor at MAGMA"
        kicker={dict.home.eventsTeaser.kicker}
        title={dict.home.eventsTeaser.title}
        copy={dict.home.eventsTeaser.copy}
        ctaLabel={dict.common.exploreEvents}
        ctaHref={localizedPath(locale, "/events")}
      />

      <FeatureBlock
        reverse
        image={magmaAssets.photos.dessertPassionfruit}
        imageAlt="Dessert al passion fruit servito al tavolo da MAGMA"
        kicker={dict.home.desserts.kicker}
        title={dict.home.desserts.title}
        copy={dict.home.desserts.copy}
        ctaLabel={dict.common.viewMenu}
        ctaHref={localizedPath(locale, "/menu")}
        imagePosition="center 45%"
        fire={0.55}
      />

      <VisitSection dict={dict} />
      <FinalCTA locale={locale} dict={dict} />
    </>
  );
}

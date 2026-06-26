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
        image={magmaAssets.photos.steak}
        imageAlt="Steakhouse cut served at MAGMA in San Teodoro"
        kicker={dict.home.food.kicker}
        title={dict.home.food.title}
        copy={dict.home.food.copy}
        ctaLabel={dict.common.exploreMenu}
        ctaHref={localizedPath(locale, "/menu")}
        fire={1.2}
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

      <VisitSection dict={dict} />
      <FinalCTA locale={locale} dict={dict} />
    </>
  );
}

import Link from "next/link";
import Image from "next/image";
import type { Locale } from "@/lib/locale";
import { localizedPath } from "@/lib/locale";
import type { Dictionary } from "@/i18n";
import { magmaAssets } from "@/data/assets";
import { whatsappLink } from "@/lib/whatsapp";

const ADDRESS = "Via San Francesco d'Assisi 15, San Teodoro (SS)";
// Default Maps link is a plain address search (no invented place ID).
// Override with NEXT_PUBLIC_MAPS_URL once you have the real listing.
const MAPS_URL =
  process.env.NEXT_PUBLIC_MAPS_URL ||
  `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
    "MAGMA " + ADDRESS,
  )}`;
const INSTAGRAM_URL = process.env.NEXT_PUBLIC_INSTAGRAM_URL || "";

export default function Footer({
  locale,
  dict,
}: {
  locale: Locale;
  dict: Dictionary;
}) {
  const year = new Date().getFullYear();
  return (
    <footer className="relative border-t border-white/10 bg-magma-charcoal">
      <div className="mx-auto grid max-w-6xl gap-10 px-6 py-14 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <Image
            src={magmaAssets.logos.header}
            alt="MAGMA"
            width={200}
            height={34}
            className="h-9 w-auto object-contain"
          />
          <p className="mt-4 font-heading text-xs uppercase tracking-[0.2em] text-magma-orange">
            {dict.footer.tagline}
          </p>
          <p className="mt-2 text-sm text-magma-cream/70">{dict.footer.description}</p>
        </div>

        <div>
          <h3 className="font-heading text-xs uppercase tracking-widest text-magma-cream/50">
            {dict.footer.sections}
          </h3>
          <ul className="mt-4 space-y-2 text-sm">
            <li>
              <Link href={localizedPath(locale, "/")} className="text-magma-cream/80 hover:text-magma-orange">
                {dict.nav.home}
              </Link>
            </li>
            <li>
              <Link href={localizedPath(locale, "/events")} className="text-magma-cream/80 hover:text-magma-orange">
                {dict.nav.events}
              </Link>
            </li>
            <li>
              <Link href={localizedPath(locale, "/menu")} className="text-magma-cream/80 hover:text-magma-orange">
                {dict.nav.menu}
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="font-heading text-xs uppercase tracking-widest text-magma-cream/50">
            {dict.footer.contact}
          </h3>
          <ul className="mt-4 space-y-2 text-sm text-magma-cream/80">
            <li>{ADDRESS}</li>
            <li>
              <a href="tel:+393401396582" className="hover:text-magma-orange">
                +39 340 139 6582
              </a>
            </li>
            <li>
              <a href={whatsappLink("reservation")} target="_blank" rel="noopener noreferrer" className="hover:text-magma-orange">
                {dict.footer.contact} · WhatsApp
              </a>
            </li>
            <li>
              <a href={MAPS_URL} target="_blank" rel="noopener noreferrer" className="hover:text-magma-orange">
                {dict.common.openMaps}
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="font-heading text-xs uppercase tracking-widest text-magma-cream/50">
            {dict.footer.follow}
          </h3>
          <ul className="mt-4 space-y-2 text-sm">
            <li>
              {INSTAGRAM_URL ? (
                <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer" className="text-magma-cream/80 hover:text-magma-orange">
                  Instagram
                </a>
              ) : (
                // TODO: set NEXT_PUBLIC_INSTAGRAM_URL with the real handle.
                <span className="text-magma-cream/40">{dict.footer.instagramTodo}</span>
              )}
            </li>
            <li>
              <a href={MAPS_URL} target="_blank" rel="noopener noreferrer" className="text-magma-cream/80 hover:text-magma-orange">
                Google Maps
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="ember-divider h-px w-full opacity-40" />
      <div className="mx-auto max-w-6xl px-6 py-5 text-center text-xs text-magma-cream/40">
        © {year} MAGMA — San Teodoro. {dict.footer.rights}
      </div>
    </footer>
  );
}

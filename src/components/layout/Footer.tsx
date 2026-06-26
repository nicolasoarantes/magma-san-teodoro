import Link from "next/link";
import Image from "next/image";
import type { Locale } from "@/lib/locale";
import { localizedPath } from "@/lib/locale";
import type { Dictionary } from "@/i18n";
import { magmaAssets } from "@/data/assets";
import { waLink } from "@/lib/whatsapp";

const ADDRESS = "Via San Francesco d'Assisi 15, San Teodoro (SS)";
const MAPS_URL =
  process.env.NEXT_PUBLIC_MAPS_URL ||
  `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
    "MAGMA " + ADDRESS,
  )}`;
const INSTAGRAM_URL =
  process.env.NEXT_PUBLIC_INSTAGRAM_URL ||
  "https://www.instagram.com/magma_santeodoro/";
const FACEBOOK_URL =
  process.env.NEXT_PUBLIC_FACEBOOK_URL ||
  "https://www.facebook.com/people/MAGMA-Churrascaria-Steakhouse-Americanbar/61590723545757/";

function InstagramIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.6">
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="0.9" fill="currentColor" stroke="none" />
    </svg>
  );
}
function FacebookIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor">
      <path d="M14 9h3V6h-3c-2.2 0-4 1.8-4 4v2H7v3h3v6h3v-6h2.5l.5-3H13v-2c0-.6.4-1 1-1Z" />
    </svg>
  );
}

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

          <div className="mt-5 flex items-center gap-3">
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 text-magma-cream/80 transition hover:border-magma-orange hover:text-magma-orange"
            >
              <InstagramIcon />
            </a>
            <a
              href={FACEBOOK_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 text-magma-cream/80 transition hover:border-magma-orange hover:text-magma-orange"
            >
              <FacebookIcon />
            </a>
          </div>
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
              <a href={waLink(dict.wa.reservation)} target="_blank" rel="noopener noreferrer" className="hover:text-magma-orange">
                WhatsApp
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
              <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer" className="text-magma-cream/80 hover:text-magma-orange">
                Instagram
              </a>
            </li>
            <li>
              <a href={FACEBOOK_URL} target="_blank" rel="noopener noreferrer" className="text-magma-cream/80 hover:text-magma-orange">
                Facebook
              </a>
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

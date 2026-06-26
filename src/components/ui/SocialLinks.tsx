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

export default function SocialLinks({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center justify-center gap-3 ${className}`}>
      <a
        href={INSTAGRAM_URL}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Instagram"
        className="flex h-11 w-11 items-center justify-center rounded-full border border-white/15 text-magma-cream/80 transition hover:border-magma-orange hover:text-magma-orange"
      >
        <InstagramIcon />
      </a>
      <a
        href={FACEBOOK_URL}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Facebook"
        className="flex h-11 w-11 items-center justify-center rounded-full border border-white/15 text-magma-cream/80 transition hover:border-magma-orange hover:text-magma-orange"
      >
        <FacebookIcon />
      </a>
    </div>
  );
}

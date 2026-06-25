import { NextRequest, NextResponse } from "next/server";
import { locales, defaultLocale } from "@/lib/locale";

// Redirect any path missing a locale prefix to the best-matching locale.
function pickLocale(req: NextRequest): string {
  const header = req.headers.get("accept-language") || "";
  const preferred = header.split(",").map((p) => p.split(";")[0].trim().slice(0, 2));
  for (const code of preferred) {
    if ((locales as readonly string[]).includes(code)) return code;
  }
  return defaultLocale;
}

export function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;

  const hasLocale = locales.some(
    (l) => pathname === `/${l}` || pathname.startsWith(`/${l}/`),
  );
  if (hasLocale) return NextResponse.next();

  const locale = pickLocale(req);
  const url = req.nextUrl.clone();
  url.pathname = `/${locale}${pathname === "/" ? "" : pathname}`;
  return NextResponse.redirect(url);
}

export const config = {
  // Skip Next internals, API and any file with an extension (assets, pdf, etc.).
  matcher: ["/((?!_next|api|.*\\..*).*)"],
};

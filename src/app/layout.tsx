import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Bebas_Neue, Oswald, Inter } from "next/font/google";
import "./globals.css";

const bebas = Bebas_Neue({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});
const oswald = Oswald({
  subsets: ["latin"],
  variable: "--font-heading",
  display: "swap",
});
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL || "https://magma-san-teodoro.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "MAGMA — San Teodoro",
  description:
    "Churrasco, cocktails, music and unforgettable nights in San Teodoro, Sardinia.",
  icons: { icon: "/favicon.ico" },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={`${bebas.variable} ${oswald.variable} ${inter.variable}`}>
      <body className="font-body bg-magma-black text-magma-cream antialiased">
        {children}
      </body>
    </html>
  );
}

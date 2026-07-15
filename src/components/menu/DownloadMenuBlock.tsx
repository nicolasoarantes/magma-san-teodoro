"use client";

import type { Dictionary } from "@/i18n";
import type { Locale } from "@/lib/locale";
import { getLocalizedMenuAssets } from "@/data/assets";
import EmberBackdrop from "@/components/ui/EmberBackdrop";
import QRCodeBlock from "./QRCodeBlock";

export default function DownloadMenuBlock({ dict, locale }: { dict: Dictionary; locale: Locale }) {
  const menuAssets = getLocalizedMenuAssets(locale);

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#0c0b09] to-magma-charcoal py-14">
      <EmberBackdrop variant="top" />
      <div className="relative mx-auto max-w-4xl px-6">
        <div className="flex flex-col items-center gap-8 rounded-3xl border border-magma-orange/30 bg-magma-black/60 p-8 text-center shadow-ember sm:flex-row sm:justify-between sm:text-left">
          <div className="max-w-md">
            <h3 className="font-display text-3xl tracking-wide text-magma-cream sm:text-4xl">
              {dict.menu.download.title}
            </h3>
            <p className="mt-3 text-sm text-magma-cream/70">
              {dict.menu.download.copy}
            </p>
            <a
              href={menuAssets.pdf}
              target="_blank"
              rel="noopener noreferrer"
              download
              className="mt-6 inline-block rounded-full bg-magma-orange px-7 py-3 font-heading text-sm uppercase tracking-widest text-magma-black transition hover:scale-[1.03]"
            >
              {dict.menu.download.pdf}
            </a>
          </div>
          <QRCodeBlock dict={dict} qrSrc={menuAssets.qr} />
        </div>
      </div>
    </section>
  );
}

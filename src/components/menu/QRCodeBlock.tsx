"use client";

import Image from "next/image";
import type { Dictionary } from "@/i18n";
import { magmaAssets } from "@/data/assets";

export default function QRCodeBlock({ dict }: { dict: Dictionary }) {
  return (
    <div className="flex flex-col items-center text-center">
      <div className="rounded-2xl border border-white/10 bg-white p-3">
        {/* QR points to the menu page (see README to regenerate for your domain). */}
        <Image
          src={magmaAssets.menu.qr}
          alt="QR code to the MAGMA menu"
          width={150}
          height={150}
          className="h-[150px] w-[150px]"
        />
      </div>
      <p className="mt-3 font-heading text-sm uppercase tracking-widest text-magma-cream">
        {dict.menu.download.qrTitle}
      </p>
      <p className="mt-1 text-xs text-magma-cream/50">{dict.menu.download.qrCopy}</p>
    </div>
  );
}

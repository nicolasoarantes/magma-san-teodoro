"use client";

import Image from "next/image";

/**
 * Mobile-first horizontal snap carousel. On desktop it simply shows a wider
 * scrollable strip. No JS deps — native scroll-snap.
 */
export default function PhotoCarousel({
  photos,
  alt = "MAGMA",
  aspect = "aspect-[3/4]",
}: {
  photos: string[];
  alt?: string;
  aspect?: string;
}) {
  return (
    <div className="horizontal-carousel no-scrollbar flex snap-x snap-mandatory gap-4 overflow-x-auto px-4 pb-2 sm:px-6">
      {photos.map((src, i) => (
        <div
          key={src + i}
          className={`relative ${aspect} w-[72%] flex-none snap-center overflow-hidden rounded-2xl border border-white/10 sm:w-[45%] lg:w-[31%]`}
        >
          <Image
            src={src}
            alt={`${alt} ${i + 1}`}
            fill
            sizes="(max-width: 640px) 72vw, 33vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
        </div>
      ))}
    </div>
  );
}

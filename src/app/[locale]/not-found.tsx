import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex min-h-[70svh] flex-col items-center justify-center px-6 text-center">
      <p className="font-display text-7xl tracking-wide heat-text">404</p>
      <p className="mt-4 text-magma-cream/70">This page got lost in the fire.</p>
      <Link
        href="/en"
        className="mt-8 rounded-full border border-magma-orange/70 px-7 py-3 font-heading text-sm uppercase tracking-widest text-magma-orange transition hover:bg-magma-orange hover:text-magma-black"
      >
        Back home
      </Link>
    </div>
  );
}

import Link from "next/link";

// Root-level 404. The document shell comes from app/layout.tsx.
export default function RootNotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center px-6 text-center">
      <p className="font-display text-7xl tracking-wide heat-text">404</p>
      <p className="mt-4 text-magma-cream/70">This page got lost in the fire.</p>
      <Link
        href="/en"
        className="mt-8 rounded-full border border-magma-orange px-7 py-3 text-sm uppercase tracking-widest text-magma-orange transition hover:bg-magma-orange hover:text-black"
      >
        Back home
      </Link>
    </div>
  );
}

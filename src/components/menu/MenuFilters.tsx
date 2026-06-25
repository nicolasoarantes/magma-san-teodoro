"use client";

export default function MenuFilters({
  categories,
  active,
  onChange,
  allLabel,
}: {
  categories: string[];
  active: string;
  onChange: (cat: string) => void;
  allLabel: string;
}) {
  const chips = [allLabel, ...categories];
  return (
    <div className="no-scrollbar -mx-4 flex gap-2 overflow-x-auto px-4 sm:mx-0 sm:flex-wrap sm:px-0">
      {chips.map((cat) => {
        const isActive = active === cat;
        return (
          <button
            key={cat}
            onClick={() => onChange(cat)}
            className={`flex-none whitespace-nowrap rounded-full border px-4 py-2 font-heading text-xs uppercase tracking-widest transition ${
              isActive
                ? "border-magma-orange bg-magma-orange text-magma-black"
                : "border-white/15 text-magma-cream/70 hover:border-magma-orange/60 hover:text-magma-cream"
            }`}
          >
            {cat}
          </button>
        );
      })}
    </div>
  );
}

import type { MenuItem } from "@/data/menu";
import { formatPrice } from "@/lib/menu-normalizer";

export default function MenuCard({ item }: { item: MenuItem }) {
  return (
    <div className="flex items-start justify-between gap-4 rounded-xl border border-white/10 bg-magma-charcoal/70 p-4 transition hover:border-magma-orange/40">
      <div className="min-w-0">
        <h4 className="font-heading text-base font-semibold uppercase tracking-wide text-magma-cream">
          {item.name}
          {item.details && (
            <span className="ml-2 align-middle text-xs font-normal normal-case tracking-normal text-magma-cream/40">
              {item.details}
            </span>
          )}
        </h4>
        {item.description && (
          <p className="mt-1 text-sm leading-snug text-magma-cream/60">
            {item.description}
          </p>
        )}
      </div>
      {item.price !== null && (
        <span className="shrink-0 whitespace-nowrap font-heading text-base font-semibold text-magma-orange">
          {formatPrice(item)}
        </span>
      )}
    </div>
  );
}

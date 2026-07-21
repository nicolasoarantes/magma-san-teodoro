import type { Locale } from "@/lib/locale";
import type { MenuItem } from "@/data/menu";
import { formatPrice } from "@/lib/menu-normalizer";
import { describe } from "@/data/menu-i18n";

export default function MenuCard({
  item,
  locale,
}: {
  item: MenuItem;
  locale: Locale;
}) {
  const description = describe(item.description, locale);
  const details = describe(item.details, locale);
  const showInlineDetails = details && details.length <= 24;

  return (
    <div className="flex flex-col gap-3 rounded-xl border border-white/10 bg-magma-charcoal/70 p-4 transition hover:border-magma-orange/40 sm:flex-row sm:items-start sm:justify-between sm:gap-4">
      <div className="min-w-0">
        <h4 className="font-heading text-base font-semibold uppercase tracking-wide text-magma-cream">
          {item.name}
          {showInlineDetails && (
            <span className="ml-2 align-middle text-xs font-normal normal-case tracking-normal text-magma-cream/40">
              {details}
            </span>
          )}
        </h4>
        {description && (
          <p className="mt-1 text-sm leading-snug text-magma-cream/60">
            {description}
          </p>
        )}
        {details && !showInlineDetails && (
          <p className="mt-2 text-xs leading-snug text-magma-cream/45">
            {details}
          </p>
        )}
      </div>
      {item.price !== null && (
        <span className="self-start whitespace-nowrap font-heading text-base font-semibold text-magma-orange sm:shrink-0">
          {formatPrice(item)}
        </span>
      )}
    </div>
  );
}

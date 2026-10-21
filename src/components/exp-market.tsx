"use client";

import { Globe2 } from "lucide-react";
import type { Loc } from "@/lib/data";
import { useI18n, pick } from "@/lib/i18n";

/** Mercado(s) y temporalidad en que opera el experimento, bien visible bajo el título. */
export function ExpMarket({ market }: { market: Loc }) {
  const { t, locale } = useI18n();
  return (
    <div className="mt-3 inline-flex items-center gap-2 rounded-lg border border-primary/40 bg-primary/[0.08] px-3 py-1.5 text-sm">
      <Globe2 className="size-4 text-primary" />
      <span className="font-semibold text-primary">{t("detail.market")}:</span>
      <span className="font-medium">{pick(market, locale)}</span>
    </div>
  );
}

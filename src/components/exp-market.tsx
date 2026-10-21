"use client";

import { CalendarRange, Globe2 } from "lucide-react";
import type { Loc } from "@/lib/data";
import { useI18n, pick } from "@/lib/i18n";

function Chip({ icon, label, value }: { icon: React.ReactNode; label: string; value: string }) {
  return (
    <div className="inline-flex items-center gap-2 rounded-lg border border-primary/40 bg-primary/[0.08] px-3 py-1.5 text-sm">
      {icon}
      <span className="font-semibold text-primary">{label}:</span>
      <span className="font-medium">{value}</span>
    </div>
  );
}

/** Mercado(s) y periodo del experimento, bien visibles bajo el título. */
export function ExpMarket({ market, period }: { market?: Loc; period?: Loc }) {
  const { t, locale } = useI18n();
  if (!market && !period) return null;
  return (
    <div className="mt-3 flex flex-wrap gap-2">
      {market && <Chip icon={<Globe2 className="size-4 text-primary" />} label={t("detail.market")} value={pick(market, locale)} />}
      {period && <Chip icon={<CalendarRange className="size-4 text-primary" />} label={t("detail.period")} value={pick(period, locale)} />}
    </div>
  );
}

"use client";

import { Check, Minus, X } from "lucide-react";
import type { ExpFilter } from "@/lib/exp-detail";
import { Card } from "@/components/ui/card";
import { useI18n } from "@/lib/i18n";
import { cn } from "@/lib/utils";

/** Checklist de filtros anti-overfitting (✓ pasa / ✕ no pasa / — sin resultado). */
export function ExpFiltersCard({ filters }: { filters: ExpFilter[] }) {
  const { t, locale } = useI18n();
  if (filters.length === 0) return null;
  return (
    <Card className="mt-8 p-5">
      <div className="mb-1 text-sm font-medium">{t("detail.filters")}</div>
      <p className="mb-4 text-xs leading-relaxed text-muted-foreground">{t("detail.filtersWhy")}</p>
      <ul className="divide-y rounded-lg border">
        {filters.map((f, i) => {
          const state = f.pass === true ? "pass" : f.pass === false ? "fail" : "na";
          const Icon = state === "pass" ? Check : state === "fail" ? X : Minus;
          const detail = typeof f.detail === "string" ? f.detail : f.detail?.[locale] || f.detail?.es;
          return (
            <li key={`${f.key}-${i}`} className="flex items-start gap-3 px-3 py-2.5 text-sm">
              <span
                role="img"
                aria-label={t(state === "pass" ? "detail.fltPass" : state === "fail" ? "detail.fltFail" : "detail.fltNA")}
                className={cn(
                  "mt-0.5 grid size-5 shrink-0 place-items-center rounded-full",
                  state === "pass" && "bg-[var(--gain)]/15 text-[var(--gain)]",
                  state === "fail" && "bg-[var(--loss)]/15 text-[var(--loss)]",
                  state === "na" && "bg-muted text-muted-foreground"
                )}
              >
                <Icon className="size-3.5" />
              </span>
              <div className="min-w-0">
                <div className="font-medium">{t(`flt.${f.key}`)}</div>
                {detail && <div className="tabular text-xs text-muted-foreground">{detail}</div>}
              </div>
            </li>
          );
        })}
      </ul>
    </Card>
  );
}

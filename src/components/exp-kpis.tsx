"use client";

import type { Experiment } from "@/lib/data";
import { Card } from "@/components/ui/card";
import { cn, fmtMetric, metricLabel } from "@/lib/utils";
import { useI18n, pick } from "@/lib/i18n";

/** Métricas del experimento: las legibles (kpis) si existen; si no, las crudas. */
export function ExpKpis({ exp }: { exp: Experiment }) {
  const { locale } = useI18n();
  const items = exp.kpis
    ? exp.kpis.map((k) => ({ label: pick(k.label, locale), value: String(k.value), tone: k.tone }))
    : Object.entries(exp.metrics).map(([k, v]) => ({ label: metricLabel(k, locale), value: fmtMetric(k, v), tone: undefined }));
  if (items.length === 0) return null;
  return (
    <div className="mt-8 grid grid-cols-2 gap-px overflow-hidden rounded-lg border bg-border sm:grid-cols-4">
      {items.map((m, i) => (
        <div key={i} className="bg-card p-4">
          <div className="text-xs text-muted-foreground">{m.label}</div>
          <div className={cn("tabular mt-1 text-xl font-semibold",
            m.tone === "gain" && "text-[var(--gain)]", m.tone === "loss" && "text-[var(--loss)]")}>{m.value}</div>
        </div>
      ))}
    </div>
  );
}

/** Parámetros: los legibles (params_view) si existen; si no, los del código. */
export function ExpParams({ exp }: { exp: Experiment }) {
  const { t, locale } = useI18n();
  const rows = exp.params_view
    ? exp.params_view.map((p) => [pick(p.label, locale), p.value] as const)
    : Object.entries(exp.params ?? {}).map(([k, v]) => [k, String(v)] as const);
  if (rows.length === 0) return null;
  return (
    <Card className="mt-8 p-5">
      <div className="mb-3 text-sm font-medium">{t("detail.params")}</div>
      <dl className="grid grid-cols-1 gap-x-8 sm:grid-cols-2">
        {rows.map(([k, v]) => (
          <div key={k} className="flex items-center justify-between gap-4 border-b py-2 text-sm">
            <dt className="text-muted-foreground">{k}</dt>
            <dd className="tabular text-right font-medium">{v}</dd>
          </div>
        ))}
      </dl>
    </Card>
  );
}

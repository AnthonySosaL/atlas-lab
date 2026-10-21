"use client";

import type { ExpChart, Experiment } from "@/lib/data";
import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { useI18n, pick } from "@/lib/i18n";

const SERIES = [
  { key: "is", label: "IS" },
  { key: "oos1", label: "OOS1" },
  { key: "oos2", label: "OOS2" },
] as const;

function fmt(v: number, unit: ExpChart["unit"]) {
  const s = v < 0 ? "−" : unit === "num" ? "" : "+";
  const a = Math.abs(v);
  if (unit === "usd") return s + "$" + Math.round(a).toLocaleString("en-US");
  if (unit === "pct") return s + a.toFixed(1) + "%";
  return s + (Number.isInteger(a) ? String(a) : a.toFixed(2));
}

/** Barra horizontal centrada en cero (positivos a la derecha, negativos a la izquierda). */
function Bar({ value, max, tone }: { value: number; max: number; tone: "gain" | "loss" | "ref" }) {
  const w = (Math.abs(value) / max) * 50;
  return (
    <div className="relative h-3 flex-1 rounded-sm bg-muted/50">
      <div className="absolute inset-y-0 left-1/2 w-px bg-border" />
      <div
        className={cn("absolute inset-y-0 rounded-sm",
          tone === "ref" ? "bg-muted-foreground/60" : tone === "gain" ? "bg-[var(--gain)]" : "bg-[var(--loss)]")}
        style={{ width: `${w}%`, left: value >= 0 ? "50%" : `${50 - w}%` }}
      />
    </div>
  );
}

/** Gráfico para experimentos sin curva de capital: barras del propio resultado o Sharpe por forma. */
export function ExpCurveFallback({ forms, chart }: { forms: NonNullable<Experiment["forms"]>; chart?: ExpChart }) {
  const { t, locale } = useI18n();
  if (chart) {
    const max = Math.max(1e-9, ...chart.bars.map((b) => Math.abs(b.value)));
    return (
      <Card className="mt-8 p-5">
        <div className="mb-4 text-sm font-medium">{pick(chart.title, locale)}</div>
        <ul className="space-y-2.5">
          {chart.bars.map((b, i) => (
            <li key={i} className="grid grid-cols-[minmax(0,14rem)_1fr_5.5rem] items-center gap-3 text-xs">
              <span className="truncate font-medium" title={pick(b.label, locale)}>{pick(b.label, locale)}</span>
              <Bar value={b.value} max={max} tone={b.tone ?? (b.value >= 0 ? "gain" : "loss")} />
              <span className="tabular text-right">{fmt(b.value, chart.unit)}</span>
            </li>
          ))}
        </ul>
      </Card>
    );
  }
  const max = Math.max(0.01, ...forms.flatMap((f) => SERIES.map((s) => Math.abs(f[s.key]))));
  return (
    <Card className="mt-8 p-5">
      <div className="mb-4 text-sm font-medium">{t("detail.formsBars")}</div>
      <ul className="space-y-3">
        {forms.map((f, i) => (
          <li key={i}>
            <div className="mb-1 truncate text-xs font-medium">{f.name}</div>
            {SERIES.map((s) => (
              <div key={s.key} className="flex items-center gap-2 text-[11px]">
                <span className="w-9 shrink-0 text-muted-foreground">{s.label}</span>
                <Bar value={f[s.key]} max={max} tone={f[s.key] >= 0 ? "gain" : "loss"} />
                <span className="tabular w-12 shrink-0 text-right">{fmt(f[s.key], "num")}</span>
              </div>
            ))}
          </li>
        ))}
      </ul>
    </Card>
  );
}

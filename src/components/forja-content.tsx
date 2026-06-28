"use client";

import * as React from "react";
import { FlaskConical, ShieldCheck } from "lucide-react";
import type { ForjaData, ForjaStrategy } from "@/lib/data";
import { useI18n } from "@/lib/i18n";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";

const pct = (n: number) => (n >= 0 ? "+" : "") + (n * 100).toFixed(0) + "%";

function EquityMini({ eq }: { eq: ForjaStrategy["equity"] }) {
  const { strat, bh, x } = eq;
  const W = 600, H = 230, pad = 32;
  const all = [...strat, ...bh];
  const vmax = Math.max(...all);
  const vmin = Math.min(...all, 1);
  const px = (i: number) => pad + (i / (strat.length - 1)) * (W - 2 * pad);
  const py = (v: number) => H - pad - ((v - vmin) / (vmax - vmin)) * (H - 2 * pad);
  const line = (arr: number[]) => arr.map((v, i) => `${px(i).toFixed(0)},${py(v).toFixed(1)}`).join(" ");
  const years = x
    .map((d, i) => ({ i, y: d.slice(0, 4) }))
    .filter((o, idx, a) => o.y !== a[idx - 1]?.y);
  return (
    <svg viewBox={`0 0 ${W} ${H}`} className="w-full" role="img" aria-label="curva de capital">
      {[1, 2, 3].filter((g) => g <= vmax).map((g) => (
        <g key={g}>
          <line x1={pad} y1={py(g)} x2={W - pad} y2={py(g)} className="stroke-border" strokeDasharray="3 4" />
          <text x={pad - 6} y={py(g) + 3} textAnchor="end" fontSize="9" className="fill-muted-foreground">{g}×</text>
        </g>
      ))}
      <polyline points={line(bh)} fill="none" className="stroke-muted-foreground" strokeWidth="1.6" strokeDasharray="5 4" />
      <polyline points={line(strat)} fill="none" className="stroke-primary" strokeWidth="2.4" />
      {years.map((o) => (
        <text key={o.i} x={px(o.i)} y={H - 6} textAnchor="middle" fontSize="9" className="fill-muted-foreground">{o.y.slice(2)}</text>
      ))}
    </svg>
  );
}

function Metric({ label, s, b, bh }: { label: string; s: string; b: string; bh: string }) {
  return (
    <div className="bg-card p-3">
      <div className="text-[11px] text-muted-foreground">{label}</div>
      <div className="mt-0.5 text-base font-bold text-primary tabular-nums">{s}</div>
      <div className="text-[11px] text-muted-foreground tabular-nums">{bh}: {b}</div>
    </div>
  );
}

export function ForjaContent({ data }: { data: ForjaData }) {
  const { t } = useI18n();
  if (data.strategies.length === 0)
    return <p className="rounded-lg border bg-card px-4 py-10 text-center text-sm text-muted-foreground">—</p>;

  return (
    <div className="space-y-6">
      {data.strategies.map((s) => {
        const m = s.metrics;
        const inv = Math.round((m.expo_actual ?? 0) * 100);
        return (
          <Card key={s.id} className="p-5">
            <div className="flex flex-wrap items-center gap-2">
              <FlaskConical className="size-4 shrink-0 text-primary" />
              <span className="font-semibold">{s.name}</span>
              <Badge variant={s.verdict === "viable" ? "survived" : s.verdict === "descartada" ? "died" : "neutral"}>
                {t(`forja.${s.verdict}`)} · {s.npass}/5
              </Badge>
              <span className="text-xs text-muted-foreground">{s.instrument} · {s.periodo}</span>
            </div>

            <div className="mt-4 grid grid-cols-3 gap-px overflow-hidden rounded-lg border bg-border text-center">
              <Metric label={t("forja.return")} s={pct(m.s_total)} b={pct(m.b_total)} bh={t("forja.bh")} />
              <Metric label={t("forja.maxdd")} s={pct(m.s_maxdd)} b={pct(m.b_maxdd)} bh={t("forja.bh")} />
              <Metric label={t("forja.calmar")} s={m.s_calmar.toFixed(2)} b={m.b_calmar.toFixed(2)} bh={t("forja.bh")} />
            </div>

            <div className="mt-4">
              <EquityMini eq={s.equity} />
              <div className="mt-1 flex items-center justify-center gap-4 text-xs text-muted-foreground">
                <span className="inline-flex items-center gap-1.5"><span className="h-0.5 w-4 bg-primary" />{t("forja.strat")}</span>
                <span className="inline-flex items-center gap-1.5"><span className="h-0.5 w-4 bg-muted-foreground" />{t("forja.bh")}</span>
              </div>
            </div>

            <div className="mt-4 rounded-lg border p-3">
              <div className="mb-1.5 text-xs text-muted-foreground">{t("forja.exposure")}</div>
              <div className="flex h-5 overflow-hidden rounded bg-muted">
                <div className="bg-primary/70" style={{ width: `${inv}%` }} />
              </div>
              <div className="mt-1 text-xs">
                <span className="font-medium text-primary">{inv}% {t("forja.invested")}</span> · {100 - inv}% {t("forja.cash")}
              </div>
            </div>

            <div className="mt-4">
              <div className="mb-2 flex items-center gap-1.5 text-sm font-medium">
                <ShieldCheck className="size-4 text-primary" /> {t("forja.filters")}
              </div>
              <div className="grid gap-1.5 sm:grid-cols-2">
                {s.filters.map((f, i) => (
                  <div key={i} className="flex items-start gap-2 text-xs">
                    <span className={cn(
                      "mt-0.5 grid size-4 shrink-0 place-items-center rounded-full text-[10px] font-bold",
                      f.pass ? "bg-[var(--gain)]/15 text-[var(--gain)]" : "bg-[var(--loss)]/15 text-[var(--loss)]"
                    )}>{f.pass ? "✓" : "✕"}</span>
                    <span>
                      <span className="font-medium text-foreground">{f.name}</span>
                      <span className="text-muted-foreground"> — {f.detail}</span>
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-4 rounded-lg bg-muted/40 p-3 text-xs text-muted-foreground">
              <span className="font-medium text-foreground">{t("forja.rationale")}:</span> {s.rationale}
            </div>
          </Card>
        );
      })}
      <p className="text-xs text-muted-foreground">{t("forja.note")}</p>
    </div>
  );
}

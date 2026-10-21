"use client";

import * as React from "react";
import { Wallet } from "lucide-react";
import type { Experiment, Serie } from "@/lib/data";
import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { useI18n, pick } from "@/lib/i18n";

const CAPITALS = [10_000, 100_000, 1_000_000];

type Stats = { ratio: number; maxDD: number; from: string; to: string; years: number };

/** Multiplicador final, drawdown máximo y periodo de una curva de capital. */
function stats(s: Serie): Stats | null {
  const pts = s.y.map((v, i) => [v, s.x[i]] as const).filter(([v]) => v != null && Number.isFinite(v)) as [number, string][];
  if (pts.length < 2 || pts[0][0] <= 0) return null;
  let peak = pts[0][0];
  let maxDD = 0;
  for (const [v] of pts) {
    peak = Math.max(peak, v);
    maxDD = Math.min(maxDD, v / peak - 1);
  }
  const from = pts[0][1].slice(0, 10);
  const to = pts[pts.length - 1][1].slice(0, 10);
  const years = (Date.parse(to) - Date.parse(from)) / (365.25 * 864e5);
  return { ratio: pts[pts.length - 1][0] / pts[0][0], maxDD, from, to, years };
}

const usd = (n: number) => (n < 0 ? "−" : "") + "$" + Math.round(Math.abs(n)).toLocaleString("en-US");
const signed = (n: number) => (n >= 0 ? "+" : "−") + usd(Math.abs(n)).replace("−", "");
const pct = (n: number) => (n >= 0 ? "+" : "−") + Math.abs(n * 100).toFixed(1) + "%";

export function ExpCapitalCard({ exp, series }: { exp: Experiment; series: Serie[] }) {
  const { t, locale } = useI18n();
  const [capital, setCapital] = React.useState(100_000);
  const main = series[0] ? stats(series[0]) : null;
  const bhSerie = series.slice(1).find((s) => /buy|bench|sin estrategia/i.test(s.name));
  const bh = bhSerie ? stats(bhSerie) : null;
  const note = exp.capital ? pick(exp.capital.note, locale) : "";

  return (
    <Card className="mt-8 p-5">
      <div className="mb-4 flex flex-wrap items-center justify-between gap-3">
        <div className="flex items-center gap-2 text-sm font-medium">
          <Wallet className="size-4 text-primary" /> {t("capital.title")}
        </div>
        {main && (
          <div className="flex gap-1 rounded-lg bg-muted p-1" role="group" aria-label={t("capital.title")}>
            {CAPITALS.map((c) => (
              <button
                key={c}
                onClick={() => setCapital(c)}
                aria-pressed={capital === c}
                className={cn(
                  "rounded-md px-2.5 py-1 text-xs font-medium tabular-nums transition-colors",
                  capital === c ? "bg-background shadow-sm" : "text-muted-foreground hover:text-foreground",
                )}
              >
                {usd(c)}
              </button>
            ))}
          </div>
        )}
      </div>

      {main ? (
        <div className="grid gap-px overflow-hidden rounded-lg border bg-border sm:grid-cols-3">
          <Cell label={t("capital.strategy")} value={signed(capital * (main.ratio - 1))}
            sub={`${usd(capital * main.ratio)} · ${pct(main.ratio - 1)}`} good={main.ratio >= 1} />
          <Cell label={t("capital.buyHold")} value={bh ? signed(capital * (bh.ratio - 1)) : "—"}
            sub={bh ? `${usd(capital * bh.ratio)} · ${pct(bh.ratio - 1)}` : t("capital.noBench")}
            good={bh ? bh.ratio >= 1 : undefined} />
          <Cell label={t("capital.worst")} value={usd(capital * main.maxDD)}
            sub={`${t("capital.maxDD")} ${pct(main.maxDD)}`} good={false} />
        </div>
      ) : null}

      <p className="mt-3 text-xs text-muted-foreground">
        {main
          ? t("capital.period").replace("{from}", main.from).replace("{to}", main.to).replace("{years}", main.years.toFixed(1))
          : t("capital.none")}
      </p>
      {note && <p className={cn("mt-2 text-sm", exp.capital?.warn ? "text-amber-600 dark:text-amber-400" : "text-muted-foreground")}>{note}</p>}
    </Card>
  );
}

function Cell({ label, value, sub, good }: { label: string; value: string; sub: string; good?: boolean }) {
  return (
    <div className="bg-card p-4">
      <div className="text-xs text-muted-foreground">{label}</div>
      <div className={cn("tabular mt-1 text-2xl font-semibold",
        good === undefined ? "" : good ? "text-[var(--gain)]" : "text-[var(--loss)]")}>{value}</div>
      <div className="mt-0.5 text-xs text-muted-foreground tabular-nums">{sub}</div>
    </div>
  );
}

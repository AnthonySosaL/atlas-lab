"use client";

import type { Experiment } from "@/lib/data";
import { Card } from "@/components/ui/card";
import { useI18n } from "@/lib/i18n";

const SERIES = [
  { key: "is", label: "IS" },
  { key: "oos1", label: "OOS1" },
  { key: "oos2", label: "OOS2" },
] as const;

/** Sin curva de capital: aviso + barras simples del Sharpe por forma. */
export function ExpCurveFallback({ forms }: { forms: NonNullable<Experiment["forms"]> }) {
  const { t } = useI18n();
  const max = Math.max(0.01, ...forms.flatMap((f) => SERIES.map((s) => Math.abs(f[s.key]))));
  return (
    <Card className="mt-8 p-5">
      <div className="mb-1 text-sm font-medium">{t("detail.equity")}</div>
      <p className="text-sm text-muted-foreground">{t("detail.noCurve")}</p>
      {forms.length > 0 && (
        <div className="mt-4">
          <div className="mb-2 text-xs font-medium text-muted-foreground">{t("detail.formsBars")}</div>
          <ul className="space-y-3">
            {forms.map((f, i) => (
              <li key={i}>
                <div className="mb-1 truncate text-xs font-medium">{f.name}</div>
                {SERIES.map((s) => {
                  const v = f[s.key];
                  const w = (Math.abs(v) / max) * 50;
                  return (
                    <div key={s.key} className="flex items-center gap-2 text-[11px]">
                      <span className="w-9 shrink-0 text-muted-foreground">{s.label}</span>
                      <div className="relative h-2.5 flex-1 rounded-sm bg-muted/50">
                        <div className="absolute inset-y-0 left-1/2 w-px bg-border" />
                        <div
                          className={v >= 0 ? "absolute inset-y-0 rounded-sm bg-[var(--gain)]" : "absolute inset-y-0 rounded-sm bg-[var(--loss)]"}
                          style={{ width: `${w}%`, left: v >= 0 ? "50%" : `${50 - w}%` }}
                        />
                      </div>
                      <span className="tabular w-12 shrink-0 text-right">{(v >= 0 ? "+" : "") + v.toFixed(2)}</span>
                    </div>
                  );
                })}
              </li>
            ))}
          </ul>
        </div>
      )}
    </Card>
  );
}

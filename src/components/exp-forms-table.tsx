"use client";

import type { Experiment } from "@/lib/data";
import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { useI18n } from "@/lib/i18n";

const sfmt = (n: number) => (n >= 0 ? "+" : "") + n.toFixed(2);
const ok = (cond: boolean) => (cond ? "text-[var(--gain)] font-medium" : "text-muted-foreground");

/** Tabla con el resultado de cada forma probada en los 5 filtros. */
export function ExpFormsTable({ forms }: { forms: NonNullable<Experiment["forms"]> }) {
  const { t } = useI18n();
  return (
    <Card className="mt-8 p-5">
    <div className="mb-3 text-sm font-medium">{t("detail.forms")}</div>
    <div className="overflow-x-auto rounded-lg border">
      <table className="w-full min-w-[560px] text-sm">
        <thead className="border-b bg-muted/40 text-xs text-muted-foreground">
          <tr>
            <th className="px-3 py-2 text-left font-medium">{t("lab.colName")}</th>
            <th title={t("lab.tipIS")} className="cursor-help px-2 py-2 text-right font-medium">{t("lab.colIS")}</th>
            <th title={t("lab.tipOOS1")} className="cursor-help px-2 py-2 text-right font-medium">{t("lab.colOOS1")}</th>
            <th title={t("lab.tipOOS2")} className="cursor-help px-2 py-2 text-right font-medium">{t("lab.colOOS2")}</th>
            <th title={t("lab.tipDSR")} className="cursor-help px-2 py-2 text-right font-medium">{t("lab.colDSR")}</th>
            <th title={t("lab.tipMC")} className="cursor-help px-2 py-2 text-right font-medium">{t("lab.colMC")}</th>
          </tr>
        </thead>
        <tbody>
          {forms.map((f, i) => {
            const passed =
              (f.oos1 > 0.3 ? 1 : 0) + (f.oos2 > 0.3 ? 1 : 0) + (f.dsr > 0.95 ? 1 : 0) +
              (f.mc < 0.05 ? 1 : 0) + (f.is > 0.13 ? 1 : 0);
            return (
              <tr key={i} className="border-b last:border-0 hover:bg-muted/30">
                <td className="px-3 py-2">
                  <span className="font-medium">{f.name}</span>
                  <span className="ml-2 rounded bg-muted px-1.5 py-0.5 text-[10px] text-muted-foreground">{passed}/5</span>
                </td>
                <td className={cn("px-2 py-2 text-right tabular-nums", ok(f.is > 0.13))}>{sfmt(f.is)}</td>
                <td className={cn("px-2 py-2 text-right tabular-nums", ok(f.oos1 > 0.3))}>{sfmt(f.oos1)}</td>
                <td className={cn("px-2 py-2 text-right tabular-nums", ok(f.oos2 > 0.3))}>{sfmt(f.oos2)}</td>
                <td className={cn("px-2 py-2 text-right tabular-nums", ok(f.dsr > 0.95))}>{f.dsr.toFixed(2)}</td>
                <td className={cn("px-2 py-2 text-right tabular-nums", ok(f.mc < 0.05))}>{f.mc.toFixed(2)}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
    <p className="mt-2 text-[11px] text-muted-foreground">{t("lab.legend")}</p>
  </Card>
  );
}

"use client";

import Link from "next/link";
import { ArrowLeft, Lightbulb } from "lucide-react";
import type { Experiment, Serie } from "@/lib/data";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { EquityChart } from "@/components/equity-chart";
import { fmtMetric, metricLabel, cn } from "@/lib/utils";
import { useI18n, pick } from "@/lib/i18n";

function metricTone(key: string, value: number | string) {
  if (typeof value !== "number") return "";
  const k = key.toLowerCase();
  if (k.includes("dd") || k.includes("loss") || k.includes("viola")) return value < 0 ? "text-[var(--loss)]" : "";
  if (k.includes("sharpe") || k.includes("cagr") || k.includes("r2") || k.includes("acc"))
    return value > 0 ? "text-[var(--gain)]" : "text-[var(--loss)]";
  return "";
}

const sfmt = (n: number) => (n >= 0 ? "+" : "") + n.toFixed(2);
const ok = (cond: boolean) => (cond ? "text-[var(--gain)] font-medium" : "text-muted-foreground");

export function ExperimentView({
  exp,
  series,
  related,
}: {
  exp: Experiment;
  series: Serie[];
  related: Experiment[];
}) {
  const { t, locale } = useI18n();
  const metrics = Object.entries(exp.metrics);
  const paramEntries = Object.entries(exp.params ?? {});
  const verdictTxt = pick(exp.verdict, locale);
  const notesTxt = pick(exp.notes, locale);
  const lesson = notesTxt || verdictTxt;
  const analysisText = pick(exp.analysis, locale);

  return (
    <div className="mx-auto max-w-5xl px-4 py-10">
      <Link
        href="/"
        className="mb-6 inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground"
      >
        <ArrowLeft className="size-4" /> {t("detail.back")}
      </Link>

      <div className="mb-2 flex flex-wrap items-center gap-2">
        {exp.family && <Badge variant="muted">{t(`fam.${exp.family}`)}</Badge>}
        <Badge variant={exp.status}>{t(`status.${exp.status}`)}</Badge>
        {exp.date && <span className="text-xs text-muted-foreground">{exp.date.slice(0, 10)}</span>}
      </div>
      <h1 className="text-3xl font-bold tracking-tight">
        {exp.v != null && <span className="text-primary">#{exp.v} · </span>}
        {pick(exp.name, locale)}
      </h1>
      <p className="mt-3 max-w-3xl text-muted-foreground">{pick(exp.description, locale)}</p>

      {lesson && (
        <Card className="mt-6 flex gap-3 border-primary/30 bg-primary/[0.04] p-4">
          <Lightbulb className="size-5 shrink-0 text-primary" />
          <div>
            <div className="text-xs font-semibold uppercase tracking-wide text-primary">
              {t("detail.lesson")}
            </div>
            {verdictTxt && verdictTxt !== notesTxt && (
              <p className="mt-1 text-sm font-medium">{verdictTxt}</p>
            )}
            <p className="mt-1 text-sm text-muted-foreground">{lesson}</p>
          </div>
        </Card>
      )}

      {analysisText && (
        <Card className="mt-6 p-5">
          <div className="mb-2 text-sm font-medium">{t("detail.analysis")}</div>
          <p className="text-sm leading-relaxed text-muted-foreground">{analysisText}</p>
        </Card>
      )}

      {metrics.length > 0 && (
        <div className="mt-8 grid grid-cols-2 gap-px overflow-hidden rounded-lg border bg-border sm:grid-cols-4">
          {metrics.map(([k, v]) => (
            <div key={k} className="bg-card p-4">
              <div className="text-xs text-muted-foreground">{metricLabel(k, locale)}</div>
              <div className={`tabular mt-1 text-xl font-semibold ${metricTone(k, v)}`}>
                {fmtMetric(k, v)}
              </div>
            </div>
          ))}
        </div>
      )}

      {exp.forms && exp.forms.length > 0 && (
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
                {exp.forms.map((f, i) => {
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
      )}

      {series.length > 0 && (
        <Card className="mt-8 p-5">
          <div className="mb-3 text-sm font-medium">{t("detail.equity")}</div>
          <EquityChart series={series} />
        </Card>
      )}

      {paramEntries.length > 0 && (
        <Card className="mt-8 p-5">
          <div className="mb-3 text-sm font-medium">{t("detail.params")}</div>
          <dl className="grid grid-cols-1 gap-x-8 sm:grid-cols-2">
            {paramEntries.map(([k, v]) => (
              <div key={k} className="flex items-center justify-between border-b py-2 text-sm">
                <dt className="text-muted-foreground">{k}</dt>
                <dd className="tabular font-medium">{String(v)}</dd>
              </div>
            ))}
          </dl>
        </Card>
      )}

      {related.length > 0 && (
        <section className="mt-10">
          <h2 className="mb-4 text-sm font-medium text-muted-foreground">
            {t("detail.related")} <span className="text-foreground">{exp.family}</span>
          </h2>
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {related.map((e) => (
              <Link key={e.id} href={`/exp/${e.id}`}>
                <Card className="flex h-full items-start gap-3 p-4 transition-colors hover:border-primary/40">
                  {e.v != null && (
                    <span className="tabular shrink-0 rounded-md bg-foreground/5 px-1.5 py-0.5 text-xs font-bold text-muted-foreground">
                      #{e.v}
                    </span>
                  )}
                  <div className="min-w-0">
                    <div className="line-clamp-2 text-sm font-medium">{pick(e.name, locale)}</div>
                    <Badge variant={e.status} className="mt-1.5">
                      {t(`status.${e.status}`)}
                    </Badge>
                  </div>
                </Card>
              </Link>
            ))}
          </div>
        </section>
      )}
    </div>
  );
}

"use client";

import * as React from "react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useI18n } from "@/lib/i18n";
import { useTheme } from "next-themes";
import type { BotForwardData } from "@/lib/data";

function BotEquityChart({ data }: { data: BotForwardData }) {
  const ref = React.useRef<HTMLDivElement>(null);
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = React.useState(false);
  const { t } = useI18n();
  React.useEffect(() => setMounted(true), []);

  React.useEffect(() => {
    if (!ref.current || !mounted || data.series.length < 2) return;
    let removed = false;

    import("lightweight-charts").then(({ createChart, AreaSeries, HistogramSeries, ColorType, LineStyle }) => {
      if (removed || !ref.current) return;
      const dark = resolvedTheme === "dark";
      const grid = dark ? "#27272a" : "#e4e4e7";
      const text = dark ? "#a1a1aa" : "#71717a";

      const chart = createChart(ref.current!, {
        layout: {
          background: { type: ColorType.Solid, color: "transparent" },
          textColor: text,
          attributionLogo: false,
        },
        grid: { vertLines: { color: grid }, horzLines: { color: grid } },
        rightPriceScale: { borderColor: grid },
        timeScale: { borderColor: grid, timeVisible: false },
        crosshair: { mode: 0 },
        handleScroll: true,
        handleScale: true,
        autoSize: true,
      });

      const series = chart.addSeries(AreaSeries, {
        lineColor: dark ? "#f4404e" : "#e11d2a",
        topColor: dark ? "rgba(244,64,78,0.30)" : "rgba(225,29,42,0.25)",
        bottomColor: "rgba(0,0,0,0)",
        lineWidth: 2,
        priceLineVisible: false,
      });

      series.setData(
        data.series.map((r) => ({ time: r.date, value: r.equity }))
      );

      series.createPriceLine({
        price: data.initial_equity,
        color: dark ? "#52525b" : "#a1a1aa",
        lineStyle: LineStyle.Dashed,
        lineWidth: 1,
        title: "$50,000",
      });

      const riskOffSeries = chart.addSeries(HistogramSeries, {
        priceScaleId: "risk-off",
        priceLineVisible: false,
        lastValueVisible: false,
      });
      chart.priceScale("risk-off").applyOptions({ visible: false });
      riskOffSeries.setData(
        data.series.map((r) => ({
          time: r.date,
          value: r.risk_off ? 1 : 0,
          color: r.risk_off
            ? (dark ? "rgba(239,68,68,0.15)" : "rgba(239,68,68,0.10)")
            : "transparent",
        }))
      );

      chart.timeScale().fitContent();
      (ref.current as HTMLDivElement & { _chart?: ReturnType<typeof createChart> })._chart = chart;
    });

    return () => {
      removed = true;
      const el = ref.current as HTMLDivElement & { _chart?: { remove: () => void } } | null;
      if (el?._chart) { el._chart.remove(); el._chart = undefined; }
    };
  }, [data, resolvedTheme, mounted, t]);

  return <div ref={ref} className="h-[320px] w-full" />;
}

function StatBox({ label, value, accent }: { label: string; value: string; accent?: boolean }) {
  return (
    <div className="rounded-md border p-3">
      <div className="text-[11px] text-muted-foreground">{label}</div>
      <div className={`mt-0.5 text-sm font-bold tabular-nums ${accent ? "text-primary" : ""}`}>{value}</div>
    </div>
  );
}

export function BotContent({ data }: { data: BotForwardData | null }) {
  const { t } = useI18n();

  if (!data) {
    return (
      <div className="mx-auto max-w-3xl px-4 py-12">
        <h1 className="text-3xl font-bold tracking-tight">{t("bot.title")}</h1>
        <p className="mt-4 text-muted-foreground">{t("bot.note")}</p>
      </div>
    );
  }

  const ret = data.return_pct >= 0 ? `+${data.return_pct.toFixed(2)}%` : `${data.return_pct.toFixed(2)}%`;

  return (
    <div className="mx-auto max-w-3xl px-4 py-12">
      <div className="mb-2 flex flex-wrap items-center gap-2">
        <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">{t("bot.title")}</h1>
        <Badge variant="died">{t("bot.badge")}</Badge>
        <Badge variant="outline" className="text-[10px]">{t("bot.demoBadge")}</Badge>
      </div>

      <p className="mt-1 text-xs text-muted-foreground">
        {t("bot.dates").replace("{start}", "2026-06-09").replace("{end}", "2026-08-04")}
      </p>

      <p className="mt-4 mb-6 text-sm text-muted-foreground leading-relaxed">{t("bot.intro")}</p>

      <div className="mb-6 grid grid-cols-2 gap-2 sm:grid-cols-4">
        <StatBox label={t("bot.statEquity")} value={`$${data.latest_equity.toLocaleString("en-US", { minimumFractionDigits: 2 })}`} accent />
        <StatBox label={t("bot.statReturn")} value={ret} />
        <StatBox label={t("bot.statDays")} value={String(data.days)} />
        <StatBox label={t("bot.statRiskOff")} value={String(data.risk_off_days)} />
        <StatBox label={t("bot.statWorst")} value={`$${data.worst_equity.toLocaleString("en-US", { minimumFractionDigits: 2 })}`} />
        <StatBox label={t("bot.statPeak")} value={`$${data.peak_equity.toLocaleString("en-US", { minimumFractionDigits: 2 })}`} />
        <StatBox label={t("bot.statOrders")} value={String(data.total_orders)} />
        <StatBox label={t("bot.statRegime")} value={data.current_risk_off ? t("bot.riskOff") : t("bot.riskOn")} />
      </div>

      <Card className="p-4">
        <h2 className="mb-2 text-sm font-semibold">{t("bot.chartTitle")}</h2>
        <BotEquityChart data={data} />
      </Card>

      <div className="mt-8 space-y-4 rounded-md border p-4 text-xs text-muted-foreground">
        <h3 className="text-sm font-semibold text-foreground">{t("bot.fineprint")}</h3>

        <div>
          <p className="font-medium text-foreground">{t("bot.fp1title")}</p>
          <p className="mt-1 leading-relaxed">{t("bot.fp1")}</p>
        </div>

        <div>
          <p className="font-medium text-foreground">{t("bot.fp2title")}</p>
          <p className="mt-1 leading-relaxed">{t("bot.fp2")}</p>
        </div>

        <div>
          <p className="font-medium text-foreground">{t("bot.fp3title")}</p>
          <ul className="mt-1 list-disc pl-4 space-y-1 leading-relaxed">
            <li>{t("bot.fp3a")}</li>
            <li>{t("bot.fp3b")}</li>
          </ul>
        </div>

        <div>
          <p className="font-medium text-foreground">{t("bot.fp4title")}</p>
          <p className="mt-1 leading-relaxed">{t("bot.fp4")}</p>
        </div>
      </div>

      <p className="mt-6 text-center text-xs text-muted-foreground">{t("bot.note")}</p>
    </div>
  );
}

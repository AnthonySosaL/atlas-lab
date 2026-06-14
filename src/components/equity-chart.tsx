"use client";

import * as React from "react";
import { useTheme } from "next-themes";
import {
  createChart,
  AreaSeries,
  LineSeries,
  ColorType,
  LineStyle,
  type IChartApi,
} from "lightweight-charts";
import type { Serie } from "@/lib/data";

/** Convierte una serie exportada {x,y} a datos de lightweight-charts (diario, único, ascendente). */
function toData(serie: Serie) {
  const map = new Map<string, number>();
  for (let i = 0; i < serie.x.length; i++) {
    const v = serie.y[i];
    if (v == null || !Number.isFinite(v)) continue;
    map.set(serie.x[i].slice(0, 10), v); // yyyy-mm-dd, último gana
  }
  return Array.from(map.entries())
    .sort((a, b) => (a[0] < b[0] ? -1 : 1))
    .map(([time, value]) => ({ time, value }));
}

export function EquityChart({ series }: { series: Serie[] }) {
  const ref = React.useRef<HTMLDivElement>(null);
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = React.useState(false);
  React.useEffect(() => setMounted(true), []);

  React.useEffect(() => {
    if (!ref.current || !mounted || series.length === 0) return;
    const dark = resolvedTheme === "dark";
    const primary = dark ? "#f4404e" : "#e11d2a";
    const grid = dark ? "#27272a" : "#e4e4e7";
    const text = dark ? "#a1a1aa" : "#71717a";
    const muted = dark ? "#52525b" : "#a1a1aa";

    const chart: IChartApi = createChart(ref.current, {
      layout: {
        background: { type: ColorType.Solid, color: "transparent" },
        textColor: text,
        attributionLogo: false,
      },
      grid: { vertLines: { color: grid }, horzLines: { color: grid } },
      rightPriceScale: { borderColor: grid },
      timeScale: { borderColor: grid, timeVisible: false },
      crosshair: { mode: 0 },
      autoSize: true,
    });

    const main = chart.addSeries(AreaSeries, {
      lineColor: primary,
      topColor: dark ? "rgba(244,64,78,0.30)" : "rgba(225,29,42,0.25)",
      bottomColor: "rgba(0,0,0,0)",
      lineWidth: 2,
      priceLineVisible: false,
    });
    main.setData(toData(series[0]));

    for (let i = 1; i < series.length; i++) {
      const line = chart.addSeries(LineSeries, {
        color: muted,
        lineWidth: 1,
        lineStyle: LineStyle.Dashed,
        priceLineVisible: false,
      });
      line.setData(toData(series[i]));
    }

    chart.timeScale().fitContent();
    return () => chart.remove();
  }, [series, resolvedTheme, mounted]);

  return (
    <div className="space-y-2">
      <div ref={ref} className="h-[360px] w-full" />
      <div className="flex flex-wrap gap-4 text-xs text-muted-foreground">
        {series.map((s, i) => (
          <span key={i} className="flex items-center gap-1.5">
            <span
              className="h-0.5 w-4 rounded-full"
              style={{ background: i === 0 ? "var(--primary)" : "var(--muted-foreground)" }}
            />
            {s.name}
          </span>
        ))}
      </div>
    </div>
  );
}

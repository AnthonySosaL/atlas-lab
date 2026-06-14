import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/** Formatea métricas conocidas con el signo/porcentaje correcto. */
export function fmtMetric(key: string, value: number | string): string {
  if (typeof value !== "number" || !Number.isFinite(value)) return String(value);
  const k = key.toLowerCase();
  if (["cagr", "maxdd", "sharpe_bh", "peor_dia", "peor_anio", "anios_pos", "r2_vol"].some((p) => k.includes(p)) ||
      k.includes("dd") || k.includes("cagr") || k.includes("anio") || k.includes("dia") || k.includes("acc")) {
    if (Math.abs(value) <= 1.5 && (k.includes("dd") || k.includes("cagr") || k.includes("anio") || k.includes("dia") || k.includes("pos")))
      return (value * 100).toFixed(1) + "%";
  }
  return Number.isInteger(value) ? String(value) : value.toFixed(3);
}

const METRIC_LABELS: Record<string, { en: string; pt: string }> = {
  peor_dia:   { en: "Worst day",      pt: "Pior dia" },
  peor_anio:  { en: "Worst year",     pt: "Pior ano" },
  anios_pos:  { en: "Positive yrs",   pt: "Anos pos." },
  lev_medio:  { en: "Mean lev.",      pt: "Alav. média" },
  sobrevive:  { en: "Survived",       pt: "Sobreviveu" },
  flat_days:  { en: "Flat days",      pt: "Dias planos" },
  n_trades:   { en: "Trades",         pt: "Trades" },
  win_rate:   { en: "Win rate",       pt: "Win rate" },
  sharpe:     { en: "Sharpe",         pt: "Sharpe" },
  cagr:       { en: "CAGR",           pt: "CAGR" },
  maxdd:      { en: "MaxDD",          pt: "MaxDD" },
  psr:        { en: "PSR",            pt: "PSR" },
  dsr:        { en: "DSR",            pt: "DSR" },
  r2_vol:     { en: "R² vol",         pt: "R² vol" },
  acc:        { en: "Accuracy",       pt: "Acurácia" },
};

export function metricLabel(key: string, locale: "es" | "en" | "pt"): string {
  if (locale === "es") return key;
  const k = key.toLowerCase();
  for (const [slug, tr] of Object.entries(METRIC_LABELS)) {
    if (k.includes(slug)) return tr[locale] ?? key;
  }
  return key;
}

/** Métricas destacadas para mostrar en las tarjetas, según existan. */
export function headlineMetrics(m: Record<string, number | string>) {
  const order = ["Sharpe", "CAGR", "MaxDD", "acc", "r2_vol", "PSR", "DSR"];
  const out: { key: string; value: number | string }[] = [];
  for (const key of Object.keys(m)) {
    if (order.some((o) => key.toLowerCase().includes(o.toLowerCase()))) out.push({ key, value: m[key] });
  }
  return out.slice(0, 4);
}

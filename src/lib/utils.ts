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

/** Métricas destacadas para mostrar en las tarjetas, según existan. */
export function headlineMetrics(m: Record<string, number | string>) {
  const order = ["Sharpe", "CAGR", "MaxDD", "acc", "r2_vol", "PSR", "DSR"];
  const out: { key: string; value: number | string }[] = [];
  for (const key of Object.keys(m)) {
    if (order.some((o) => key.toLowerCase().includes(o.toLowerCase()))) out.push({ key, value: m[key] });
  }
  return out.slice(0, 4);
}

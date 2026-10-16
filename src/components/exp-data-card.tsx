"use client";

import type { ExpData } from "@/lib/exp-detail";
import { Card } from "@/components/ui/card";
import { useI18n, pick } from "@/lib/i18n";

const FREE = ["yahoo finance", "dukascopy", "fred", "cboe", "cftc", "stooq"];
const isFree = (p: string) => FREE.includes(p.trim().toLowerCase());
const isMt5 = (p: string) => p.toLowerCase().includes("metatrader");

/** Título de la curva + etiqueta de origen (data.curve_origin). */
export function ExpEquityTitle({ data }: { data?: ExpData }) {
  const { t, locale } = useI18n();
  const o = data?.curve_origin;
  const label = o && o !== "none" ? t(`data.origin.${o}`) : "";
  const note = data?.curve_note ? pick(data.curve_note, locale) : "";
  return (
    <div className="mb-3">
      <div className="flex flex-wrap items-center gap-2">
        <span className="text-sm font-medium">{t("detail.equity")}</span>
        {label && (
          <span className="rounded bg-muted px-1.5 py-0.5 text-[10px] text-muted-foreground">{label}</span>
        )}
      </div>
      {label && note && <p className="mt-1 text-[11px] text-muted-foreground">{note}</p>}
    </div>
  );
}

/** Bloque "Fuente de datos": proveedor, instrumento, timeframe, periodo y archivo. */
export function ExpDataCard({ data }: { data?: ExpData }) {
  const { t, locale } = useI18n();
  const sources = data?.sources ?? [];
  if (!data) return null;
  const note = data.note ? pick(data.note, locale) : "";
  const noCurve = data.curve_origin === "none" && data.curve_note ? pick(data.curve_note, locale) : "";
  if (sources.length === 0 && !note && !noCurve) return null;
  const providers = sources.map((s) => s.provider);
  const foot = sources.length === 0
    ? ""
    : providers.some(isMt5)
    ? t("data.mt5")
    : providers.every(isFree)
      ? t("data.free")
      : "";
  return (
    <Card className="mt-8 p-5">
      <div className="mb-3 text-sm font-medium">{t("data.title")}</div>
      <ul className="divide-y">
        {sources.map((s, i) => (
          <li key={i} className="py-2 first:pt-0 last:pb-0">
            <div className="flex flex-wrap items-baseline gap-x-2 text-sm">
              <span className="font-semibold text-primary">{s.provider}</span>
              <span>{s.instrument}</span>
              <span className="text-xs text-muted-foreground">
                {s.timeframe} · {s.period}
              </span>
            </div>
            {s.file && <div className="mt-0.5 break-all font-mono text-[11px] text-muted-foreground">{s.file}</div>}
          </li>
        ))}
      </ul>
      {note && <p className="mt-3 text-sm text-muted-foreground">{note}</p>}
      {noCurve && <p className="mt-3 text-sm text-muted-foreground">{noCurve}</p>}
      {foot && <p className="mt-3 text-xs text-muted-foreground">{foot}</p>}
    </Card>
  );
}

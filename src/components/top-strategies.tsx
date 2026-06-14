"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { Card } from "@/components/ui/card";
import { useI18n } from "@/lib/i18n";

type Top = {
  v: number;
  id: string;
  title: string;
  finding: string;
  caveat: string;
  next: string;
};

const TOP: Top[] = [
  {
    v: 16,
    id: "20260608_160317_validacion-filtro-macro-multi-crisis-v16",
    title: "Filtro de régimen macro (VIX + crédito)",
    finding:
      "El candidato más fuerte de toda la investigación: Sharpe 1.23, sobrevivió 4 crisis y resistió un out-of-sample puro 2007–2013 (incluido 2008) con todos los años positivos.",
    caveat:
      "Parte de su brillo era clarividencia: usaba el VIX del mismo día. La versión ejecutable (rezagada 1 día) es bastante más débil.",
    next: "Medir en el forward test la reacción real de un monitor intradía de VIX (el factor φ).",
  },
  {
    v: 57,
    id: "20260613_200850_vol-targeting-vs-leverage-fijo-bot-live",
    title: "Vol-targeting (control de drawdown)",
    finding:
      "Dimensionar la posición por volatilidad recorta el drawdown ~3.5× (de −68% a −20%). Es gestión de riesgo institucional, desplegable hoy.",
    caveat:
      "No crea retorno, solo controla riesgo; y no protege contra gaps súbitos (un EWMA simple iguala al ML aquí).",
    next: "Combinarlo con el filtro macro y validar la mejora en vivo antes de activarlo en el bot.",
  },
  {
    v: 19,
    id: "20260609_210756_leverage-graduado-por-vix-v19",
    title: "Leverage graduado por VIX",
    finding:
      "El mejor Sharpe in-sample (1.39): sube el apalancamiento solo en calma estricta (VIX < 14) y lo corta en estrés.",
    caveat:
      "MaxDD ~15% desde pico → solo sirve en firms de drawdown estático, nunca trailing. Frágil fuera de la calma estricta.",
    next: "Re-validar la versión ejecutable (lag-1) junto a un kill-switch intradía.",
  },
];

export function TopStrategies() {
  const { t } = useI18n();
  return (
    <section className="pb-16">
      <div className="mb-1 flex items-baseline gap-3">
        <h2 className="text-xl font-semibold tracking-tight">{t("top.heading")}</h2>
        <span className="text-sm text-muted-foreground">{t("top.subtitle")}</span>
      </div>
      <div className="mt-6 grid gap-4 md:grid-cols-3">
        {TOP.map((s, i) => (
          <motion.div
            key={s.id}
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.4, delay: i * 0.08 }}
          >
            <Card className="flex h-full flex-col p-5">
              <div className="mb-3 flex items-center justify-between">
                <span className="tabular text-2xl font-bold text-primary">#{s.v}</span>
                <span className="grid size-7 place-items-center rounded-full border text-xs font-bold text-muted-foreground">
                  {i + 1}
                </span>
              </div>
              <h3 className="font-semibold leading-snug">{s.title}</h3>

              <p className="mt-3 text-sm text-muted-foreground">{s.finding}</p>

              <div className="mt-3 rounded-md bg-muted/60 p-3 text-xs text-muted-foreground">
                <span className="font-semibold text-foreground">{t("top.caveat")} </span>
                {s.caveat}
              </div>
              <div className="mt-2 text-xs text-muted-foreground">
                <span className="font-semibold text-foreground">{t("top.next")} </span>
                {s.next}
              </div>

              <Link
                href={`/exp/${s.id}`}
                className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-primary hover:underline"
              >
                {t("top.cta")} <ArrowUpRight className="size-4" />
              </Link>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

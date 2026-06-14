"use client";

import * as React from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { X, MousePointerClick } from "lucide-react";
import { useI18n } from "@/lib/i18n";

type Illusion = { title: string; body: string; exp?: string };

const ILLUSIONS: Illusion[] = [
  {
    title: "Clarividencia del VIX",
    body: "El filtro macro daba Sharpe 1.23 y sobrevivía 4 crisis… porque usaba el cierre del VIX del MISMO día para esquivar el crash de ese día. Al rezagarlo 1 día (lo único ejecutable) murió.",
    exp: "20260610_135143_prueba-de-fuego-lag-1-re-entrada-v27",
  },
  {
    title: "El espejismo de Sharpe 2.1",
    body: "La re-entrada 'pánico enfriándose' marcaba Sharpe 2.12 en toda la grilla. Era lookahead puro: la versión ejecutable se desplomó.",
    exp: "20260610_135036_re-entrada-panico-enfriandose-v26",
  },
  {
    title: "La reversión de +0.20",
    body: "Un edge de reversión de sesión aparecía con Sharpe +0.20 antes de costos. El desglose por año mostró que cambiaba de signo cada año: ruido que promedió positivo.",
    exp: "20260607_205914_meta-labeling-reversion-sesion-v8",
  },
  {
    title: "El p-valor de 0.003",
    body: "El TSMOM de cartera daba un MCPT p=0.003 (parecía señal real). Era artefacto del turnover: sin costos el Sharpe era −0.003, cero edge.",
    exp: "20260607_204455_tsmom-cartera-15-activos-v5",
  },
  {
    title: "El modelo nulo que ganó",
    body: "La clasificación de dirección parecía acertar… hasta que un modelo entrenado con etiquetas BARAJADAS rindió igual o mejor. La 'predicción' era solo beta del mercado.",
  },
  {
    title: "Deflated Sharpe 0.35",
    body: "Tras 40+ intentos, el mejor sistema ejecutable tenía Sharpe 0.38. El Deflated Sharpe (0.35) reveló que no se distinguía del mejor resultado por puro azar.",
    exp: "20260610_140955_deflated-sharpe-del-ejecutable-v38",
  },
];

export function HeroStats({
  total,
  survived,
  died,
}: {
  total: number;
  survived: number;
  died: number;
}) {
  const { t } = useI18n();
  const [open, setOpen] = React.useState(false);

  React.useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const stats: { label: string; value: React.ReactNode }[] = [
    { label: t("stats.experiments"), value: total },
    { label: t("stats.classes"), value: 11 },
    { label: t("stats.survivedDied"), value: `${survived} / ${died}` },
  ];

  return (
    <>
      <div className="grid grid-cols-2 gap-px overflow-hidden rounded-lg border bg-border sm:grid-cols-4">
        {stats.map((s) => (
          <div key={s.label} className="bg-card p-5">
            <div className="tabular text-3xl font-bold">{s.value}</div>
            <div className="mt-1 text-xs text-muted-foreground">{s.label}</div>
          </div>
        ))}
        {/* tarjeta clicable: ilusiones */}
        <button
          onClick={() => setOpen(true)}
          className="group bg-card p-5 text-left transition-colors hover:bg-muted"
        >
          <div className="tabular text-3xl font-bold text-primary">{ILLUSIONS.length}</div>
          <div className="mt-1 flex items-center gap-1 text-xs text-muted-foreground">
            {t("stats.illusions")}
            <MousePointerClick className="size-3 opacity-0 transition-opacity group-hover:opacity-100" />
          </div>
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 z-[100] grid place-items-center bg-black/60 p-4 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setOpen(false)}
          >
            <motion.div
              className="max-h-[85vh] w-full max-w-2xl overflow-y-auto rounded-xl border bg-card p-6 shadow-xl"
              initial={{ opacity: 0, scale: 0.96, y: 12 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.96, y: 12 }}
              transition={{ duration: 0.2 }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="mb-1 flex items-start justify-between">
                <h3 className="text-lg font-semibold">{t("illusions.title")}</h3>
                <button
                  onClick={() => setOpen(false)}
                  className="rounded-md p-1 text-muted-foreground hover:bg-muted"
                  aria-label="Cerrar"
                >
                  <X className="size-4" />
                </button>
              </div>
              <p className="mb-5 text-sm text-muted-foreground">{t("illusions.subtitle")}</p>
              <ol className="space-y-4">
                {ILLUSIONS.map((il, i) => (
                  <li key={i} className="flex gap-3">
                    <span className="tabular grid size-7 shrink-0 place-items-center rounded-full bg-primary/10 text-sm font-bold text-primary">
                      {i + 1}
                    </span>
                    <div>
                      <div className="font-medium">
                        {il.exp ? (
                          <Link href={`/exp/${il.exp}`} className="hover:text-primary hover:underline">
                            {il.title}
                          </Link>
                        ) : (
                          il.title
                        )}
                      </div>
                      <p className="mt-0.5 text-sm text-muted-foreground">{il.body}</p>
                    </div>
                  </li>
                ))}
              </ol>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

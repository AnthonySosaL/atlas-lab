"use client";

import { motion } from "framer-motion";
import { ShieldX, Sparkles, Activity, GraduationCap, Scale } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { useI18n } from "@/lib/i18n";
import { cn } from "@/lib/utils";

export type HallazgosStats = {
  tested: number;
  survived: number;
  dsrMin: number;
  counts: { survived: number; neutral: number; died: number };
};

const FINDINGS = [
  { Icon: ShieldX, accent: "border-t-[var(--loss)]", chip: "bg-[var(--loss)]/10 text-[var(--loss)]" },
  { Icon: Sparkles, accent: "border-t-amber-500", chip: "bg-amber-500/10 text-amber-500" },
  { Icon: Activity, accent: "border-t-primary", chip: "bg-primary/10 text-primary" },
  { Icon: GraduationCap, accent: "border-t-sky-500", chip: "bg-sky-500/10 text-sky-500" },
];

const fade = { hidden: { opacity: 0, y: 14 }, show: { opacity: 1, y: 0, transition: { duration: 0.35 } } };

export function HallazgosContent({ stats }: { stats: HallazgosStats }) {
  const { t, locale } = useI18n();
  const { counts } = stats;
  const expTotal = counts.survived + counts.neutral + counts.died;
  const nf = (n: number) => n.toLocaleString(locale);
  const big = [
    { v: nf(stats.tested), k: "hallazgos.statTested" },
    { v: nf(stats.survived), k: "hallazgos.statSurvived", accent: true },
    { v: stats.dsrMin.toLocaleString(locale, { minimumFractionDigits: 2 }), k: "hallazgos.statDsrMin" },
    { v: nf(expTotal), k: "hallazgos.statExps" },
  ];
  const bar = [
    { n: counts.survived, cls: "bg-[var(--gain)]", label: t("status.survived") },
    { n: counts.neutral, cls: "bg-muted-foreground/40", label: t("status.neutral") },
    { n: counts.died, cls: "bg-[var(--loss)]", label: t("status.died") },
  ];

  return (
    <div className="mx-auto max-w-4xl px-4 py-12">
      <div className="mb-3 inline-flex items-center gap-2 rounded-full border px-3 py-1 text-xs text-muted-foreground">
        <span className="size-2 rounded-full bg-primary" />
        {t("hallazgos.badge")}
      </div>
      <h1 className="text-3xl font-bold tracking-tight sm:text-5xl">{t("hallazgos.title")}</h1>
      <p className="mt-3 mb-8 max-w-2xl text-muted-foreground">{t("hallazgos.subtitle")}</p>

      <motion.div
        className="grid grid-cols-2 gap-3 sm:grid-cols-4"
        initial="hidden"
        animate="show"
        variants={{ show: { transition: { staggerChildren: 0.06 } } }}
      >
        {big.map((s) => (
          <motion.div key={s.k} variants={fade} className="rounded-xl border bg-card p-5 text-center shadow-sm">
            <div className={cn("tabular text-4xl font-bold tracking-tight sm:text-5xl", s.accent && "text-primary")}>{s.v}</div>
            <div className="mt-2 text-xs leading-tight text-muted-foreground">{t(s.k)}</div>
          </motion.div>
        ))}
      </motion.div>

      {expTotal > 0 && (
        <Card className="mt-4 p-5">
          <div className="mb-3 text-sm font-medium">{t("hallazgos.breakdown")}</div>
          <div className="flex h-3 overflow-hidden rounded-full bg-muted" role="img"
            aria-label={bar.map((b) => `${b.label}: ${b.n}`).join(", ")}>
            {bar.map((b) => (
              <div key={b.label} className={b.cls} style={{ width: `${(b.n / expTotal) * 100}%` }} />
            ))}
          </div>
          <ul className="mt-3 flex flex-wrap gap-x-5 gap-y-1 text-xs text-muted-foreground">
            {bar.map((b) => (
              <li key={b.label} className="flex items-center gap-1.5">
                <span className={cn("size-2 rounded-full", b.cls)} />
                <span className="tabular font-semibold text-foreground">{nf(b.n)}</span> {b.label}
              </li>
            ))}
          </ul>
        </Card>
      )}

      <div className="mt-8 grid gap-4 sm:grid-cols-2">
        {FINDINGS.map(({ Icon, accent, chip }, idx) => {
          const i = idx + 1;
          const body = t(`hallazgos.f${i}b`).replace("{dsr}", stats.dsrMin.toLocaleString(locale, { minimumFractionDigits: 2 }));
          return (
            <motion.div key={i} initial="hidden" whileInView="show" viewport={{ once: true }} variants={fade}>
              <Card className={cn("h-full border-t-4", accent)}>
                <CardContent className="py-5">
                  <div className="mb-3 flex items-center gap-3 font-semibold">
                    <span className={cn("grid size-9 shrink-0 place-items-center rounded-lg", chip)}>
                      <Icon className="size-5" />
                    </span>
                    <span className="leading-snug">{t(`hallazgos.f${i}t`)}</span>
                  </div>
                  <p className="text-sm leading-relaxed text-muted-foreground">{body}</p>
                </CardContent>
              </Card>
            </motion.div>
          );
        })}
      </div>

      <motion.section
        className="mt-10 rounded-2xl border border-primary/30 bg-primary/5 p-6 sm:p-8"
        initial="hidden" whileInView="show" viewport={{ once: true }} variants={fade}
      >
        <div className="mb-3 flex items-center gap-2 text-xs font-semibold uppercase tracking-wide text-primary">
          <Scale className="size-4" /> {t("hallazgos.concTitle")}
        </div>
        <p className="text-lg font-semibold leading-snug sm:text-2xl">{t("hallazgos.conclusion")}</p>
      </motion.section>
    </div>
  );
}

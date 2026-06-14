"use client";

import * as React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import type { Experiment } from "@/lib/data";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { cn, fmtMetric, headlineMetrics } from "@/lib/utils";
import { useI18n } from "@/lib/i18n";

const STATUS_FILTERS: { key: "todos" | Experiment["status"]; tkey: string }[] = [
  { key: "todos", tkey: "filter.all" },
  { key: "survived", tkey: "filter.survived" },
  { key: "neutral", tkey: "filter.neutral" },
  { key: "died", tkey: "filter.died" },
];

export function ExperimentsGrid({ experiments }: { experiments: Experiment[] }) {
  const { t } = useI18n();
  const families = React.useMemo(
    () => ["todas", ...Array.from(new Set(experiments.map((e) => e.family).filter(Boolean)))],
    [experiments]
  );
  const [family, setFamily] = React.useState("todas");
  const [status, setStatus] = React.useState<"todos" | Experiment["status"]>("todos");
  const [q, setQ] = React.useState("");

  const filtered = experiments
    .filter(
      (e) =>
        (family === "todas" || e.family === family) &&
        (status === "todos" || e.status === status) &&
        (q === "" || (e.name + e.description).toLowerCase().includes(q.toLowerCase()))
    )
    .sort((a, b) => (b.v ?? -1) - (a.v ?? -1));

  return (
    <div>
      <div className="mb-5 flex flex-col gap-3">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <input
            value={q}
            onChange={(e) => setQ(e.target.value)}
            placeholder={t("exp.search")}
            className="h-9 w-full rounded-md border bg-card px-3 text-sm outline-none focus:ring-2 focus:ring-ring sm:max-w-xs"
          />
          {/* filtro por estado */}
          <div className="flex flex-wrap gap-1.5">
            {STATUS_FILTERS.map((s) => (
              <button
                key={s.key}
                onClick={() => setStatus(s.key)}
                className={cn(
                  "rounded-full border px-3 py-1 text-xs font-medium transition-colors",
                  status === s.key
                    ? "border-primary bg-primary text-primary-foreground"
                    : "text-muted-foreground hover:bg-muted"
                )}
              >
                {t(s.tkey)}
              </button>
            ))}
          </div>
        </div>
        {/* filtro por familia */}
        <div className="flex flex-wrap gap-1.5">
          {families.map((f) => (
            <button
              key={f}
              onClick={() => setFamily(f)}
              className={cn(
                "rounded-full border px-2.5 py-1 text-xs transition-colors",
                family === f ? "border-foreground/40 bg-muted font-medium" : "text-muted-foreground hover:bg-muted"
              )}
            >
              {f === "todas" ? t("families.all") : f}
            </button>
          ))}
        </div>
      </div>

      <motion.div
        className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3"
        initial="hidden"
        animate="show"
        variants={{ show: { transition: { staggerChildren: 0.03 } } }}
      >
        {filtered.map((e) => {
          const metrics = headlineMetrics(e.metrics);
          return (
            <motion.div
              key={e.id}
              variants={{
                hidden: { opacity: 0, y: 14 },
                show: { opacity: 1, y: 0, transition: { duration: 0.3 } },
              }}
              whileHover={{ y: -4 }}
            >
              <Link href={`/exp/${e.id}`}>
                <Card className="h-full p-5 transition-shadow hover:border-primary/40 hover:shadow-md">
                  <div className="mb-3 flex items-center justify-between gap-2">
                    <div className="flex items-center gap-2">
                      {e.v != null && (
                        <span className="tabular rounded-md bg-foreground/5 px-1.5 py-0.5 text-xs font-bold text-muted-foreground">
                          #{e.v}
                        </span>
                      )}
                      {e.family && <Badge variant="muted">{e.family}</Badge>}
                    </div>
                    <Badge variant={e.status}>{t(`status.${e.status}`)}</Badge>
                  </div>
                  <h3 className="mb-1 line-clamp-2 font-semibold leading-snug">{e.name}</h3>
                  <p className="mb-4 line-clamp-2 text-sm text-muted-foreground">{e.description}</p>
                  {metrics.length > 0 && (
                    <div className="flex flex-wrap gap-x-4 gap-y-1 border-t pt-3">
                      {metrics.map((m) => (
                        <div key={m.key} className="text-xs">
                          <span className="text-muted-foreground">{m.key}: </span>
                          <span className="tabular font-medium">{fmtMetric(m.key, m.value)}</span>
                        </div>
                      ))}
                    </div>
                  )}
                </Card>
              </Link>
            </motion.div>
          );
        })}
      </motion.div>

      {filtered.length === 0 && (
        <p className="py-12 text-center text-sm text-muted-foreground">Sin resultados.</p>
      )}
    </div>
  );
}

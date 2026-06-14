"use client";

import * as React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import type { Experiment } from "@/lib/data";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { cn, fmtMetric, headlineMetrics } from "@/lib/utils";

const STATUS_LABEL: Record<Experiment["status"], string> = {
  survived: "sobrevivió",
  died: "murió",
  neutral: "neutro",
};

export function ExperimentsGrid({ experiments }: { experiments: Experiment[] }) {
  const families = React.useMemo(
    () => ["todas", ...Array.from(new Set(experiments.map((e) => e.family).filter(Boolean)))],
    [experiments]
  );
  const [family, setFamily] = React.useState("todas");
  const [q, setQ] = React.useState("");

  const filtered = experiments.filter(
    (e) =>
      (family === "todas" || e.family === family) &&
      (q === "" || (e.name + e.description).toLowerCase().includes(q.toLowerCase()))
  );

  return (
    <div>
      <div className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <input
          value={q}
          onChange={(e) => setQ(e.target.value)}
          placeholder="Buscar experimento…"
          className="h-9 w-full rounded-md border bg-card px-3 text-sm outline-none focus:ring-2 focus:ring-ring sm:max-w-xs"
        />
        <div className="flex flex-wrap gap-1.5">
          {families.map((f) => (
            <button
              key={f}
              onClick={() => setFamily(f)}
              className={cn(
                "rounded-full border px-3 py-1 text-xs font-medium transition-colors",
                family === f
                  ? "border-primary bg-primary text-primary-foreground"
                  : "text-muted-foreground hover:bg-muted"
              )}
            >
              {f}
            </button>
          ))}
        </div>
      </div>

      <motion.div
        className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3"
        initial="hidden"
        animate="show"
        variants={{ show: { transition: { staggerChildren: 0.04 } } }}
      >
        {filtered.map((e) => {
          const metrics = headlineMetrics(e.metrics);
          return (
            <motion.div
              key={e.id}
              variants={{
                hidden: { opacity: 0, y: 14 },
                show: { opacity: 1, y: 0, transition: { duration: 0.35 } },
              }}
              whileHover={{ y: -4 }}
            >
              <Link href={`/exp/${e.id}`}>
                <Card className="h-full p-5 transition-shadow hover:shadow-md hover:border-primary/40">
                  <div className="mb-3 flex items-center justify-between gap-2">
                    {e.family && <Badge variant="muted">{e.family}</Badge>}
                    <Badge variant={e.status}>{STATUS_LABEL[e.status]}</Badge>
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

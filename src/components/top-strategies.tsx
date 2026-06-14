"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { Card } from "@/components/ui/card";
import { useI18n } from "@/lib/i18n";

type Top = { v: number; id: string; key: string };

const TOP: Top[] = [
  { v: 16, id: "20260608_160317_validacion-filtro-macro-multi-crisis-v16", key: "s1" },
  { v: 57, id: "20260613_200850_vol-targeting-vs-leverage-fijo-bot-live", key: "s2" },
  { v: 19, id: "20260609_210756_leverage-graduado-por-vix-v19", key: "s3" },
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
              <h3 className="font-semibold leading-snug">{t(`top.${s.key}.title`)}</h3>

              <p className="mt-3 text-sm text-muted-foreground">{t(`top.${s.key}.finding`)}</p>

              <div className="mt-3 rounded-md bg-muted/60 p-3 text-xs text-muted-foreground">
                <span className="font-semibold text-foreground">{t("top.caveat")} </span>
                {t(`top.${s.key}.caveat`)}
              </div>
              <div className="mt-2 text-xs text-muted-foreground">
                <span className="font-semibold text-foreground">{t("top.next")} </span>
                {t(`top.${s.key}.next`)}
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

"use client";

import { AlertTriangle } from "lucide-react";
import type { Experiment } from "@/lib/data";
import { Card } from "@/components/ui/card";
import { useI18n, pick } from "@/lib/i18n";

/** Aviso destacado cuando la auditoría cambió el status del experimento. */
export function ExpReclassNotice({ reclass }: { reclass: NonNullable<Experiment["reclass"]> }) {
  const { t, locale } = useI18n();
  const title = t("detail.reclass")
    .replace("{from}", t(`status.${reclass.from}`))
    .replace("{to}", t(`status.${reclass.to}`));
  return (
    <Card role="note" className="mt-6 flex gap-3 border-amber-500/50 bg-amber-500/[0.06] p-4">
      <AlertTriangle className="size-5 shrink-0 text-amber-500" />
      <div>
        <div className="text-sm font-semibold">{title}</div>
        <p className="mt-1 text-sm text-muted-foreground">{pick(reclass.reason, locale)}</p>
      </div>
    </Card>
  );
}

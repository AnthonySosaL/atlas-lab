"use client";

import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Activity, FlaskConical, ShieldCheck } from "lucide-react";
import { useI18n } from "@/lib/i18n";

export function BotContent() {
  const { t } = useI18n();
  const points = [
    { icon: FlaskConical, title: t("bot.p1t"), body: t("bot.p1b") },
    { icon: ShieldCheck, title: t("bot.p2t"), body: t("bot.p2b") },
    { icon: Activity, title: t("bot.p3t"), body: t("bot.p3b") },
  ];

  return (
    <div className="mx-auto max-w-3xl px-4 py-12">
      <div className="mb-3 flex items-center gap-2">
        <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">{t("bot.title")}</h1>
        <Badge variant="default">{t("bot.badge")}</Badge>
      </div>
      <p className="mt-2 mb-10 max-w-2xl text-muted-foreground">{t("bot.intro")}</p>

      <div className="grid gap-4 sm:grid-cols-1">
        {points.map((p) => (
          <Card key={p.title} className="flex items-start gap-4 p-5">
            <span className="grid size-10 shrink-0 place-items-center rounded-lg bg-primary/10 text-primary">
              <p.icon className="size-5" />
            </span>
            <div>
              <div className="font-medium">{p.title}</div>
              <p className="mt-1 text-sm text-muted-foreground">{p.body}</p>
            </div>
          </Card>
        ))}
      </div>

      <p className="mt-8 text-center text-xs text-muted-foreground">{t("bot.note")}</p>
    </div>
  );
}

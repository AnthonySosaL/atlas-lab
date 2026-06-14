"use client";

import { useI18n } from "@/lib/i18n";
import { HeroStats } from "@/components/hero-stats";

export function Hero({
  total,
  survived,
  died,
}: {
  total: number;
  survived: number;
  died: number;
}) {
  const { t } = useI18n();
  return (
    <section className="py-16 sm:py-24">
      <div className="mb-4 inline-flex items-center gap-2 rounded-full border px-3 py-1 text-xs text-muted-foreground">
        <span className="size-2 rounded-full bg-primary" />
        {t("hero.badge")}
      </div>
      <h1 className="max-w-3xl text-4xl font-bold tracking-tight sm:text-6xl">
        {total} {t("hero.titleA")} <span className="text-primary">{t("hero.titleHi")}</span>.
      </h1>
      <p className="mt-5 max-w-2xl text-lg text-muted-foreground">{t("hero.subtitle")}</p>

      <div className="mt-10">
        <HeroStats total={total} survived={survived} died={died} />
      </div>
    </section>
  );
}

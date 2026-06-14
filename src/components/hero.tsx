"use client";

import dynamic from "next/dynamic";
import { useI18n } from "@/lib/i18n";
import { HeroStats } from "@/components/hero-stats";

const Hero3D = dynamic(() => import("@/components/hero-3d").then((m) => m.Hero3D), {
  ssr: false,
  loading: () => <div className="h-full w-full animate-pulse rounded-xl bg-muted/40" />,
});

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
    <section className="py-16 sm:py-20">
      <div className="grid items-center gap-8 lg:grid-cols-[1.1fr_0.9fr]">
        {/* Texto */}
        <div>
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border px-3 py-1 text-xs text-muted-foreground">
            <span className="size-2 rounded-full bg-primary" />
            {t("hero.badge")}
          </div>
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
            {total} {t("hero.titleA")} <span className="text-primary">{t("hero.titleHi")}</span>.
          </h1>
          <p className="mt-5 max-w-xl text-lg text-muted-foreground">{t("hero.subtitle")}</p>
        </div>

        {/* 3D interactivo (arrastra para rotar) */}
        <div className="relative h-[300px] w-full sm:h-[380px]">
          <Hero3D />
          <span className="pointer-events-none absolute bottom-1 right-2 text-[10px] text-muted-foreground/70">
            arrastra para rotar ↔
          </span>
        </div>
      </div>

      <div className="mt-12">
        <HeroStats total={total} survived={survived} died={died} />
      </div>
    </section>
  );
}

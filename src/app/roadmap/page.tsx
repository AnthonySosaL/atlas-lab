import type { Metadata } from "next";
import { getExperiments, getRoadmap } from "@/lib/data";
import { RoadmapTimeline } from "@/components/roadmap-timeline";
import { Tr } from "@/lib/i18n";

export async function generateMetadata(): Promise<Metadata> {
  const n = (await getExperiments()).length;
  return {
    title: "Roadmap — ATLAS Lab",
    description: n > 0
      ? `La bitácora completa: ${n} experimentos, qué sobrevivió y qué murió.`
      :"La bitácora completa: qué sobrevivió y qué murió.",
  };
}

export default async function RoadmapPage() {
  const chapters = await getRoadmap();

  return (
    <div className="mx-auto max-w-3xl px-4 py-12">
      <div className="mb-3 inline-flex items-center gap-2 rounded-full border px-3 py-1 text-xs text-muted-foreground">
        <span className="size-2 rounded-full bg-primary" />
        <Tr k="roadmap.badge" />
      </div>
      <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
        <Tr k="roadmap.title" />
      </h1>
      <p className="mt-3 mb-8 max-w-2xl text-muted-foreground">
        <Tr k="roadmap.subtitle" />
      </p>

      <RoadmapTimeline chapters={chapters} />
    </div>
  );
}

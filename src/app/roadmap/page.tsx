import { getRoadmap } from "@/lib/data";
import { RoadmapTimeline } from "@/components/roadmap-timeline";
import { Tr } from "@/lib/i18n";

export const metadata = {
  title: "Roadmap — ATLAS Lab",
  description: "La bitácora completa: 57 experimentos, qué sobrevivió y qué murió.",
};

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
      <p className="mt-3 mb-12 max-w-2xl text-muted-foreground">
        <Tr k="roadmap.subtitle" />
      </p>

      <RoadmapTimeline chapters={chapters} />
    </div>
  );
}

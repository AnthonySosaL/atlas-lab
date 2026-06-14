import { getRoadmap } from "@/lib/data";
import { RoadmapTimeline } from "@/components/roadmap-timeline";

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
        Bitácora del laboratorio
      </div>
      <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
        El camino completo, sin maquillaje
      </h1>
      <p className="mt-3 mb-12 max-w-2xl text-muted-foreground">
        Cada capítulo es una frontera que probamos y, casi siempre, una ilusión que cazamos.
        El cementerio de estrategias, en orden.
      </p>

      <RoadmapTimeline chapters={chapters} />
    </div>
  );
}

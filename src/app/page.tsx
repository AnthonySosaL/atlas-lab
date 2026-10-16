import { getExperiments } from "@/lib/data";
import { ExperimentsGrid } from "@/components/experiments-grid";
import { Hero } from "@/components/hero";
import { TopStrategies } from "@/components/top-strategies";
import { Tr } from "@/lib/i18n";

export default async function Home() {
  const experiments = await getExperiments();
  // conteos desde experiments.json (refleja la auditoría; summary.json puede ir desfasado)
  const survived = experiments.filter((e) => e.status === "survived").length;
  const died = experiments.filter((e) => e.status === "died").length;

  return (
    <div className="mx-auto max-w-6xl px-4">
      <Hero total={experiments.length} survived={survived} died={died} />

      <TopStrategies />

      <section className="pb-24">
        <h2 className="mb-6 text-xl font-semibold tracking-tight">
          <Tr k="exp.heading" />
        </h2>
        <ExperimentsGrid experiments={experiments} />
      </section>
    </div>
  );
}

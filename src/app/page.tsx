import { getExperiments, getSummary } from "@/lib/data";
import { ExperimentsGrid } from "@/components/experiments-grid";
import { Hero } from "@/components/hero";
import { TopStrategies } from "@/components/top-strategies";
import { Tr } from "@/lib/i18n";

export default async function Home() {
  const [experiments, summary] = await Promise.all([getExperiments(), getSummary()]);

  return (
    <div className="mx-auto max-w-6xl px-4">
      <Hero total={summary.total} survived={summary.survived} died={summary.died} />

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

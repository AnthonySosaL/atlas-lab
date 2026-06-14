import { notFound } from "next/navigation";
import { getExperiment, getExperiments, getSeries } from "@/lib/data";
import { ExperimentView } from "@/components/experiment-view";

export async function generateStaticParams() {
  const all = await getExperiments();
  return all.map((e) => ({ id: e.id }));
}

export default async function ExperimentPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const exp = await getExperiment(id);
  if (!exp) notFound();
  const [series, all] = await Promise.all([
    exp.has_equity ? getSeries(id) : Promise.resolve([]),
    getExperiments(),
  ]);
  const related = all
    .filter((e) => e.family === exp.family && e.id !== exp.id)
    .sort((a, b) => (b.v ?? -1) - (a.v ?? -1))
    .slice(0, 6);
  return <ExperimentView exp={exp} series={series} related={related} />;
}

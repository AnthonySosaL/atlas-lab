import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, Lightbulb } from "lucide-react";
import { getExperiment, getExperiments, getSeries } from "@/lib/data";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { EquityChart } from "@/components/equity-chart";
import { fmtMetric } from "@/lib/utils";

export async function generateStaticParams() {
  const all = await getExperiments();
  return all.map((e) => ({ id: e.id }));
}

const STATUS_LABEL = { survived: "sobrevivió", died: "murió", neutral: "neutro" } as const;

function metricTone(key: string, value: number | string) {
  if (typeof value !== "number") return "";
  const k = key.toLowerCase();
  if (k.includes("dd") || k.includes("loss") || k.includes("viola")) return value < 0 ? "text-[var(--loss)]" : "";
  if (k.includes("sharpe") || k.includes("cagr") || k.includes("r2") || k.includes("acc"))
    return value > 0 ? "text-[var(--gain)]" : "text-[var(--loss)]";
  return "";
}

export default async function ExperimentPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const exp = await getExperiment(id);
  if (!exp) notFound();
  const [series, all] = await Promise.all([
    exp.has_equity ? getSeries(id) : Promise.resolve([]),
    getExperiments(),
  ]);
  const metrics = Object.entries(exp.metrics);
  const paramEntries = Object.entries(exp.params ?? {});
  const lesson = exp.notes || exp.verdict;
  const related = all
    .filter((e) => e.family === exp.family && e.id !== exp.id)
    .sort((a, b) => (b.v ?? -1) - (a.v ?? -1))
    .slice(0, 6);

  return (
    <div className="mx-auto max-w-5xl px-4 py-10">
      <Link
        href="/"
        className="mb-6 inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground"
      >
        <ArrowLeft className="size-4" /> Volver a experimentos
      </Link>

      <div className="mb-2 flex flex-wrap items-center gap-2">
        {exp.family && <Badge variant="muted">{exp.family}</Badge>}
        <Badge variant={exp.status}>{STATUS_LABEL[exp.status]}</Badge>
        {exp.date && <span className="text-xs text-muted-foreground">{exp.date.slice(0, 10)}</span>}
      </div>
      <h1 className="text-3xl font-bold tracking-tight">
        {exp.v != null && <span className="text-primary">#{exp.v} · </span>}
        {exp.name}
      </h1>
      <p className="mt-3 max-w-3xl text-muted-foreground">{exp.description}</p>

      {/* Lección clave (de las notas) */}
      {lesson && (
        <Card className="mt-6 flex gap-3 border-primary/30 bg-primary/[0.04] p-4">
          <Lightbulb className="size-5 shrink-0 text-primary" />
          <div>
            <div className="text-xs font-semibold uppercase tracking-wide text-primary">
              Lección clave
            </div>
            {exp.verdict && exp.verdict !== exp.notes && (
              <p className="mt-1 text-sm font-medium">{exp.verdict}</p>
            )}
            <p className="mt-1 text-sm text-muted-foreground">{lesson}</p>
          </div>
        </Card>
      )}

      {/* Análisis (curado, por experimento) */}
      {exp.analysis && (
        <Card className="mt-6 p-5">
          <div className="mb-2 text-sm font-medium">Análisis</div>
          <p className="text-sm leading-relaxed text-muted-foreground">{exp.analysis}</p>
        </Card>
      )}

      {/* Métricas */}
      {metrics.length > 0 && (
        <div className="mt-8 grid grid-cols-2 gap-px overflow-hidden rounded-lg border bg-border sm:grid-cols-4">
          {metrics.map(([k, v]) => (
            <div key={k} className="bg-card p-4">
              <div className="text-xs text-muted-foreground">{k}</div>
              <div className={`tabular mt-1 text-xl font-semibold ${metricTone(k, v)}`}>
                {fmtMetric(k, v)}
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Gráfico de equity (estilo TradingView) */}
      {series.length > 0 && (
        <Card className="mt-8 p-5">
          <div className="mb-3 text-sm font-medium">Curva de equity</div>
          <EquityChart series={series} />
        </Card>
      )}

      {/* Parámetros */}
      {paramEntries.length > 0 && (
        <Card className="mt-8 p-5">
          <div className="mb-3 text-sm font-medium">Parámetros</div>
          <dl className="grid grid-cols-1 gap-x-8 sm:grid-cols-2">
            {paramEntries.map(([k, v]) => (
              <div key={k} className="flex items-center justify-between border-b py-2 text-sm">
                <dt className="text-muted-foreground">{k}</dt>
                <dd className="tabular font-medium">{String(v)}</dd>
              </div>
            ))}
          </dl>
        </Card>
      )}

      {/* Experimentos relacionados (misma familia) */}
      {related.length > 0 && (
        <section className="mt-10">
          <h2 className="mb-4 text-sm font-medium text-muted-foreground">
            Relacionados · familia <span className="text-foreground">{exp.family}</span>
          </h2>
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {related.map((e) => (
              <Link key={e.id} href={`/exp/${e.id}`}>
                <Card className="flex h-full items-start gap-3 p-4 transition-colors hover:border-primary/40">
                  {e.v != null && (
                    <span className="tabular shrink-0 rounded-md bg-foreground/5 px-1.5 py-0.5 text-xs font-bold text-muted-foreground">
                      #{e.v}
                    </span>
                  )}
                  <div className="min-w-0">
                    <div className="line-clamp-2 text-sm font-medium">{e.name}</div>
                    <Badge variant={e.status} className="mt-1.5">
                      {STATUS_LABEL[e.status]}
                    </Badge>
                  </div>
                </Card>
              </Link>
            ))}
          </div>
        </section>
      )}
    </div>
  );
}

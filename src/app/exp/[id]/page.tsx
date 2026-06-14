import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";
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
  const series = exp.has_equity ? await getSeries(id) : [];
  const metrics = Object.entries(exp.metrics);
  const paramEntries = Object.entries(exp.params ?? {});

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
        {exp.date && (
          <span className="text-xs text-muted-foreground">{exp.date.slice(0, 10)}</span>
        )}
      </div>
      <h1 className="text-3xl font-bold tracking-tight">
        {exp.v != null && <span className="text-primary">#{exp.v} · </span>}
        {exp.name}
      </h1>
      <p className="mt-3 max-w-3xl text-muted-foreground">{exp.description}</p>

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

      <div className="mt-8 grid gap-6 md:grid-cols-2">
        {/* Parámetros */}
        {paramEntries.length > 0 && (
          <Card className="p-5">
            <div className="mb-3 text-sm font-medium">Parámetros</div>
            <dl className="divide-y text-sm">
              {paramEntries.map(([k, v]) => (
                <div key={k} className="flex items-center justify-between py-2">
                  <dt className="text-muted-foreground">{k}</dt>
                  <dd className="tabular font-medium">{String(v)}</dd>
                </div>
              ))}
            </dl>
          </Card>
        )}

        {/* Veredicto + notas */}
        {(exp.verdict || exp.notes) && (
          <Card className="border-primary/30 p-5">
            <div className="mb-3 text-sm font-medium text-primary">Veredicto</div>
            {exp.verdict && <p className="text-sm font-medium">{exp.verdict}</p>}
            {exp.notes && <p className="mt-2 text-sm text-muted-foreground">{exp.notes}</p>}
          </Card>
        )}
      </div>
    </div>
  );
}

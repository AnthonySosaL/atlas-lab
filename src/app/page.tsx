import { getExperiments, getSummary } from "@/lib/data";
import { ExperimentsGrid } from "@/components/experiments-grid";

export default async function Home() {
  const [experiments, summary] = await Promise.all([getExperiments(), getSummary()]);

  const stats = [
    { label: "experimentos registrados", value: summary.total },
    { label: "sobrevivieron / murieron", value: `${summary.survived} / ${summary.died}` },
    { label: "gastado en challenges", value: "$0" },
    { label: "ilusiones cazadas", value: 6 },
  ];

  return (
    <div className="mx-auto max-w-6xl px-4">
      {/* Hero */}
      <section className="py-16 sm:py-24">
        <div className="mb-4 inline-flex items-center gap-2 rounded-full border px-3 py-1 text-xs text-muted-foreground">
          <span className="size-2 rounded-full bg-primary" />
          Laboratorio cuantitativo · código abierto
        </div>
        <h1 className="max-w-3xl text-4xl font-bold tracking-tight sm:text-6xl">
          57 experimentos honestos buscando{" "}
          <span className="text-primary">alpha de trading retail</span>.
        </h1>
        <p className="mt-5 max-w-2xl text-lg text-muted-foreground">
          Validación rigurosa antes de arriesgar un dólar: out-of-sample temporal, señales
          ejecutables y Deflated Sharpe. Esta es la conclusión —y cómo muere cada ilusión.
        </p>

        <div className="mt-10 grid grid-cols-2 gap-px overflow-hidden rounded-lg border bg-border sm:grid-cols-4">
          {stats.map((s) => (
            <div key={s.label} className="bg-card p-5">
              <div className="tabular text-3xl font-bold">{s.value}</div>
              <div className="mt-1 text-xs text-muted-foreground">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Experimentos */}
      <section className="pb-24">
        <h2 className="mb-6 text-xl font-semibold tracking-tight">Todos los experimentos</h2>
        <ExperimentsGrid experiments={experiments} />
      </section>
    </div>
  );
}

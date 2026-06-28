import { getLab } from "@/lib/data";
import { Tr } from "@/lib/i18n";
import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { ShieldX, Sparkles, Activity, GraduationCap } from "lucide-react";

export const dynamic = "force-dynamic";

export const metadata = {
  title: "Hallazgos — ATLAS Lab",
  description:
    "Decenas de miles de estrategias probadas con rigor institucional. Ninguna sobrevive — y por qué eso es el hallazgo más valioso.",
};

const ICONS = [ShieldX, Sparkles, Activity, GraduationCap];

export default async function HallazgosPage() {
  const d = await getLab();
  const stats = [
    { v: d.total.toLocaleString("es"), k: "hallazgos.statTested" },
    { v: String(d.survived), k: "hallazgos.statSurvived", accent: true },
    { v: "0", k: "hallazgos.statDsr" },
    { v: "4/5", k: "hallazgos.statMax" },
  ];

  return (
    <div className="mx-auto max-w-4xl px-4 py-12">
      <div className="mb-3 inline-flex items-center gap-2 rounded-full border px-3 py-1 text-xs text-muted-foreground">
        <span className="size-2 rounded-full bg-primary" />
        <Tr k="hallazgos.badge" />
      </div>
      <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
        <Tr k="hallazgos.title" />
      </h1>
      <p className="mt-3 mb-8 max-w-2xl text-muted-foreground">
        <Tr k="hallazgos.subtitle" />
      </p>

      {/* stats grandes */}
      <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
        {stats.map((s) => (
          <div key={s.k} className="rounded-xl border bg-card p-4 text-center">
            <div className={cn("text-3xl font-bold tabular-nums", s.accent && "text-primary")}>{s.v}</div>
            <div className="mt-1 text-xs leading-tight text-muted-foreground">
              <Tr k={s.k} />
            </div>
          </div>
        ))}
      </div>

      {/* hallazgos */}
      <div className="mt-8 grid gap-4 sm:grid-cols-2">
        {[1, 2, 3, 4].map((i) => {
          const Icon = ICONS[i - 1];
          return (
            <Card key={i}>
              <CardContent className="py-5">
                <div className="mb-2 flex items-center gap-2 font-semibold">
                  <span className="grid size-7 shrink-0 place-items-center rounded-md bg-primary/10 text-primary">
                    <Icon className="size-4" />
                  </span>
                  <Tr k={`hallazgos.f${i}t`} />
                </div>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  <Tr k={`hallazgos.f${i}b`} />
                </p>
              </CardContent>
            </Card>
          );
        })}
      </div>

      {/* conclusion */}
      <div className="mt-8 rounded-xl border border-primary/30 bg-primary/5 p-6 text-center">
        <p className="text-base font-medium sm:text-lg">
          <Tr k="hallazgos.conclusion" />
        </p>
      </div>
    </div>
  );
}

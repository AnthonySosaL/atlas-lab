import { getLab } from "@/lib/data";
import { LabContent } from "@/components/lab-content";
import { Tr } from "@/lib/i18n";

export const dynamic = "force-dynamic";

export const metadata = {
  title: "Laboratorio — ATLAS Lab",
  description: "Laboratorio automático: genera y prueba estrategias con dos OOS, Deflated Sharpe y Monte Carlo.",
};

export default async function LabPage() {
  const data = await getLab();

  return (
    <div className="mx-auto max-w-5xl px-4 py-12">
      <div className="mb-3 inline-flex items-center gap-2 rounded-full border px-3 py-1 text-xs text-muted-foreground">
        <span className="size-2 rounded-full bg-primary" />
        <Tr k="lab.badge" />
      </div>
      <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
        <Tr k="lab.title" />
      </h1>
      <p className="mt-3 mb-8 max-w-2xl text-muted-foreground">
        <Tr k="lab.subtitle" />
      </p>

      <LabContent data={data} />
    </div>
  );
}

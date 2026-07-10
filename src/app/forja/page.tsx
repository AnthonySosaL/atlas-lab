import { getForja, getForjaForward } from "@/lib/data";
import { ForjaContent } from "@/components/forja-content";
import { Tr } from "@/lib/i18n";

export const dynamic = "force-dynamic";

export const metadata = {
  title: "Forja — ATLAS Lab",
  description: "Estrategias de menor riesgo que mantener, para ingreso. No alpha — beta gestionada con base económica.",
};

export default async function ForjaPage() {
  const [data, forward] = await Promise.all([getForja(), getForjaForward()]);

  return (
    <div className="mx-auto max-w-3xl px-4 py-12">
      <div className="mb-3 inline-flex items-center gap-2 rounded-full border px-3 py-1 text-xs text-muted-foreground">
        <span className="size-2 rounded-full bg-primary" />
        <Tr k="forja.badge" />
      </div>
      <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
        <Tr k="forja.title" />
      </h1>
      <p className="mt-3 mb-8 max-w-2xl text-muted-foreground">
        <Tr k="forja.subtitle" />
      </p>

      <ForjaContent data={data} forward={forward} />
    </div>
  );
}

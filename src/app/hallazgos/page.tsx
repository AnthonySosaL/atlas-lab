import { getExperiments, getLab } from "@/lib/data";
import { HallazgosContent } from "@/components/hallazgos-content";

export const dynamic = "force-dynamic";

export const metadata = {
  title: "Hallazgos — ATLAS Lab",
  description:
    "Decenas de miles de estrategias probadas con rigor institucional. Ninguna sobrevive — y por qué eso es el hallazgo más valioso.",
};

export default async function HallazgosPage() {
  const [lab, exps] = await Promise.all([getLab(), getExperiments()]);
  const count = (s: "survived" | "neutral" | "died") => exps.filter((e) => e.status === s).length;
  return (
    <HallazgosContent
      stats={{
        tested: lab.tested ?? lab.total,
        survived: lab.survived,
        dsrMin: lab.thresholds?.dsr_min ?? 0.95,
        counts: { survived: count("survived"), neutral: count("neutral"), died: count("died") },
      }}
    />
  );
}

import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Activity, FlaskConical, ShieldCheck } from "lucide-react";

export const metadata = {
  title: "Bot en vivo — ATLAS Lab",
  description: "Forward test en cuenta demo. En pruebas y desarrollo.",
};

const points = [
  {
    icon: FlaskConical,
    title: "En pruebas y desarrollo",
    body: "El sistema corre en una cuenta demo como forward test. Estamos recogiendo datos reales de ejecución antes de cualquier decisión.",
  },
  {
    icon: ShieldCheck,
    title: "Riesgo cero",
    body: "Cuenta de práctica, $0 en juego. El objetivo de esta fase es medir comportamiento en vivo, no generar ingresos.",
  },
  {
    icon: Activity,
    title: "Seguimiento continuo",
    body: "El bot rebalancea de forma automática y registra cada paso. Los resultados se evaluarán al cierre del periodo de prueba.",
  },
];

export default function BotPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-12">
      <div className="mb-3 flex items-center gap-2">
        <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">Bot en vivo</h1>
        <Badge variant="default">en desarrollo</Badge>
      </div>
      <p className="mt-2 mb-10 max-w-2xl text-muted-foreground">
        Una estrategia propia corriendo en vivo sobre una cuenta de práctica. Esta página es una
        bitácora del proceso — el detalle del sistema se mantiene reservado mientras está en
        evaluación.
      </p>

      <div className="grid gap-4 sm:grid-cols-1">
        {points.map((p) => (
          <Card key={p.title} className="flex items-start gap-4 p-5">
            <span className="grid size-10 shrink-0 place-items-center rounded-lg bg-primary/10 text-primary">
              <p.icon className="size-5" />
            </span>
            <div>
              <div className="font-medium">{p.title}</div>
              <p className="mt-1 text-sm text-muted-foreground">{p.body}</p>
            </div>
          </Card>
        ))}
      </div>

      <p className="mt-8 text-center text-xs text-muted-foreground">
        Una reseña de resultados se publicará cuando concluya la fase de pruebas.
      </p>
    </div>
  );
}

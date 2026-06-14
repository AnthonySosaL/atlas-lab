import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export const metadata = {
  title: "Bot en vivo — ATLAS Lab",
  description: "Forward test en demo MetaTrader 5.",
};

const facts = [
  { k: "Broker", v: "Pepperstone (demo)" },
  { k: "Estrategia", v: "Basket 15 · risk parity · filtro macro" },
  { k: "Leverage", v: "fijo 2.0 (instrumento de medición)" },
  { k: "Régimen", v: "VIX + crédito → flat en risk-off" },
];

export default function BotPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-12">
      <div className="mb-3 flex items-center gap-2">
        <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">Bot en vivo</h1>
        <Badge variant="muted">snapshot</Badge>
      </div>
      <p className="mt-2 mb-8 max-w-2xl text-muted-foreground">
        El bot corre en una cuenta <strong>demo</strong> de MetaTrader 5 como forward test ($0 en
        riesgo). Es un <strong>instrumento de medición</strong>, no una fuente de ingresos: los 57
        experimentos demostraron que no hay alpha desplegable con datos retail.
      </p>

      <Card className="p-5">
        <div className="mb-4 text-sm font-medium">Configuración actual</div>
        <dl className="grid grid-cols-1 gap-px overflow-hidden rounded-md border bg-border sm:grid-cols-2">
          {facts.map((f) => (
            <div key={f.k} className="bg-card p-4">
              <dt className="text-xs text-muted-foreground">{f.k}</dt>
              <dd className="mt-1 text-sm font-medium">{f.v}</dd>
            </div>
          ))}
        </dl>
        <p className="mt-4 text-xs text-muted-foreground">
          Los datos en vivo (equity, posiciones) viven en el bot local; esta página es un snapshot.
          Una función serverless en Python podría exponerlos en tiempo real más adelante.
        </p>
      </Card>
    </div>
  );
}

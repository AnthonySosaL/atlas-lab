"use client";

import * as React from "react";
import { FlaskConical, ShieldCheck, Target, Layers, ArrowLeft, ChevronRight, Link2 } from "lucide-react";
import type { ForjaData, ForjaStrategy, ForjaUniverse } from "@/lib/data";
import { useI18n } from "@/lib/i18n";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";

const pct = (n: number) => (n >= 0 ? "+" : "") + (n * 100).toFixed(0) + "%";
const dotColor = (v: ForjaStrategy["verdict"]) =>
  v === "viable" ? "bg-[var(--gain)]" : v === "candidata" ? "bg-amber-500" : "bg-[var(--loss)]";

// ---------------------------------------------------------------------------
// Curva de capital (estrategia 1× vs Buy&Hold)
// ---------------------------------------------------------------------------
function EquityMini({ eq }: { eq: ForjaStrategy["equity"] }) {
  const { strat, bh, x } = eq;
  const W = 600, H = 230, pad = 32;
  const all = [...strat, ...bh];
  const vmax = Math.max(...all);
  const vmin = Math.min(...all, 1);
  const px = (i: number) => pad + (i / (strat.length - 1)) * (W - 2 * pad);
  const py = (v: number) => H - pad - ((v - vmin) / (vmax - vmin)) * (H - 2 * pad);
  const line = (arr: number[]) => arr.map((v, i) => `${px(i).toFixed(0)},${py(v).toFixed(1)}`).join(" ");
  const years = x
    .map((d, i) => ({ i, y: d.slice(0, 4) }))
    .filter((o, idx, a) => o.y !== a[idx - 1]?.y);
  return (
    <svg viewBox={`0 0 ${W} ${H}`} className="w-full" role="img" aria-label="curva de capital">
      {[1, 2, 3].filter((g) => g <= vmax).map((g) => (
        <g key={g}>
          <line x1={pad} y1={py(g)} x2={W - pad} y2={py(g)} className="stroke-border" strokeDasharray="3 4" />
          <text x={pad - 6} y={py(g) + 3} textAnchor="end" fontSize="9" className="fill-muted-foreground">{g}×</text>
        </g>
      ))}
      <polyline points={line(bh)} fill="none" className="stroke-muted-foreground" strokeWidth="1.6" strokeDasharray="5 4" />
      <polyline points={line(strat)} fill="none" className="stroke-primary" strokeWidth="2.4" />
      {years.map((o) => (
        <text key={o.i} x={px(o.i)} y={H - 6} textAnchor="middle" fontSize="9" className="fill-muted-foreground">{o.y.slice(2)}</text>
      ))}
    </svg>
  );
}

function Metric({ label, s, b, bh }: { label: string; s: string; b: string; bh: string }) {
  return (
    <div className="bg-card p-3">
      <div className="text-[11px] text-muted-foreground">{label}</div>
      <div className="mt-0.5 text-base font-bold text-primary tabular-nums">{s}</div>
      <div className="text-[11px] text-muted-foreground tabular-nums">{bh}: {b}</div>
    </div>
  );
}

function StrategyCard({ s }: { s: ForjaStrategy }) {
  const { t } = useI18n();
  const [lev, setLev] = React.useState<1 | 2>(1);
  const m = s.metrics;
  const inv = Math.round((m.expo_actual ?? 0) * 100);
  const sTotal = lev === 2 ? s.lev2.s_total : m.s_total;
  const sMdd = lev === 2 ? s.lev2.s_maxdd : m.s_maxdd;
  const sCalmar = lev === 2 ? s.lev2.s_calmar : m.s_calmar;
  const cap = lev === 2 ? s.lev2.cap_final : (m.cap_final ?? 0);
  const hold = Math.round(cap * (m.expo_actual ?? 0));

  return (
    <Card className="p-5">
      <div className="flex flex-wrap items-center gap-2">
        <FlaskConical className="size-4 shrink-0 text-primary" />
        <span className="font-semibold">{s.name}</span>
        <Badge variant={s.verdict === "viable" ? "survived" : s.verdict === "descartada" ? "died" : "neutral"}>
          {t(`forja.${s.verdict}`)} · {s.npass}/5
        </Badge>
        <div className="ml-auto inline-flex overflow-hidden rounded-md border text-xs">
          {([1, 2] as const).map((L) => (
            <button
              key={L}
              onClick={() => setLev(L)}
              className={cn("px-2 py-0.5 tabular-nums", lev === L ? "bg-primary text-primary-foreground" : "text-muted-foreground hover:bg-muted")}
            >{L}×</button>
          ))}
        </div>
      </div>
      <div className="mt-1 text-xs text-muted-foreground">{s.instrument} · {s.periodo}</div>

      <div className="mt-4 grid grid-cols-3 gap-px overflow-hidden rounded-lg border bg-border text-center">
        <Metric label={t("forja.return")} s={pct(sTotal)} b={pct(m.b_total)} bh={t("forja.bh")} />
        <Metric label={t("forja.maxdd")} s={pct(sMdd)} b={pct(m.b_maxdd)} bh={t("forja.bh")} />
        <Metric label={t("forja.calmar")} s={sCalmar.toFixed(2)} b={m.b_calmar.toFixed(2)} bh={t("forja.bh")} />
      </div>

      {lev === 2 && (
        <div className={cn(
          "mt-2 rounded-md px-3 py-1.5 text-xs",
          s.lev2.ok ? "bg-[var(--gain)]/12 text-[var(--gain)]" : "bg-[var(--loss)]/12 text-[var(--loss)]"
        )}>
          {s.lev2.ok ? t("forja.lev2ok") : t("forja.lev2bad")}
        </div>
      )}

      <div className="mt-4">
        <EquityMini eq={s.equity} />
        <div className="mt-1 flex items-center justify-center gap-4 text-xs text-muted-foreground">
          <span className="inline-flex items-center gap-1.5"><span className="h-0.5 w-4 bg-primary" />{t("forja.strat")} (1×)</span>
          <span className="inline-flex items-center gap-1.5"><span className="h-0.5 w-4 bg-muted-foreground" />{t("forja.bh")}</span>
        </div>
      </div>

      <div className="mt-4 rounded-lg border p-3">
        <div className="mb-1.5 text-xs text-muted-foreground">{t("forja.exposure")} · {t("forja.fromStart")} · {lev}×</div>
        <div className="flex h-5 overflow-hidden rounded bg-muted">
          <div className="bg-primary/70" style={{ width: `${inv}%` }} />
        </div>
        <div className="mt-1 text-xs">
          <span className="font-medium text-primary">{inv}% {t("forja.invested")}</span> · {100 - inv}% {t("forja.cash")}
        </div>
        <div className="mt-3 grid grid-cols-3 gap-2 text-xs">
          <div>
            <div className="text-muted-foreground">{t("forja.capNet")}</div>
            <div className="font-bold tabular-nums">${cap.toLocaleString("en-US")}</div>
          </div>
          <div>
            <div className="text-muted-foreground">{t("forja.capHold")}</div>
            <div className="font-bold tabular-nums text-primary">${hold.toLocaleString("en-US")}</div>
          </div>
          <div>
            <div className="text-muted-foreground">{t("forja.capCash")}</div>
            <div className="font-bold tabular-nums">${(cap - hold).toLocaleString("en-US")}</div>
          </div>
        </div>
      </div>

      <div className="mt-4">
        <div className="mb-2 flex items-center gap-1.5 text-sm font-medium">
          <ShieldCheck className="size-4 text-primary" /> {t("forja.filters")}
        </div>
        <div className="grid gap-1.5 sm:grid-cols-2">
          {s.filters.map((f, i) => (
            <div key={i} className="flex items-start gap-2 text-xs">
              <span className={cn(
                "mt-0.5 grid size-4 shrink-0 place-items-center rounded-full text-[10px] font-bold",
                f.pass ? "bg-[var(--gain)]/15 text-[var(--gain)]" : "bg-[var(--loss)]/15 text-[var(--loss)]"
              )}>{f.pass ? "✓" : "✕"}</span>
              <span>
                <span className="font-medium text-foreground">{f.name}</span>
                <span className="text-muted-foreground"> — {f.detail}</span>
              </span>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-4 rounded-lg bg-muted/40 p-3 text-xs text-muted-foreground">
        <span className="font-medium text-foreground">{t("forja.rationale")}:</span> {s.rationale}
      </div>
    </Card>
  );
}

// ---------------------------------------------------------------------------
// Mapa de universos: cajas anidadas = contención (no son independientes)
// ---------------------------------------------------------------------------
function MapBox({ x, y, w, h, tag, sub, onPick, muted }: {
  x: number; y: number; w: number; h: number; tag: string; sub?: string;
  onPick?: () => void; muted?: boolean;
}) {
  return (
    <g onClick={onPick} style={{ cursor: onPick ? "pointer" : "default" }} className={onPick ? "group/box" : ""}>
      <rect x={x} y={y} width={w} height={h} rx={6}
        className={cn("stroke-border", muted ? "fill-muted/20" : "fill-card", onPick && "group-hover/box:stroke-primary group-hover/box:stroke-2")} />
      <text x={x + 8} y={y + 15} fontSize="11" fontWeight={600} className={cn(onPick ? "fill-foreground" : "fill-muted-foreground")}>{tag}</text>
      {sub && <text x={x + 8} y={y + 28} fontSize="8.5" className="fill-muted-foreground">{sub}</text>}
    </g>
  );
}

function MapHeader({ x, y, text }: { x: number; y: number; text: string }) {
  return <text x={x} y={y} fontSize="10" fontWeight={700} className="fill-muted-foreground" letterSpacing="0.5">{text}</text>;
}

function UniverseMap({ onPick }: { onPick: (k: string) => void }) {
  const { t } = useI18n();
  return (
    <Card className="p-4">
      <div className="mb-1 flex items-center gap-1.5 text-sm font-medium">
        <Layers className="size-4 text-primary" /> {t("forja.universeMap")}
      </div>
      <p className="mb-3 text-xs text-muted-foreground">{t("forja.mapNote")}</p>
      <svg viewBox="0 0 760 432" className="w-full" role="img" aria-label="mapa de universos">
        {/* --- ÍNDICES DEL MUNDO --- */}
        <MapHeader x={14} y={14} text="ÍNDICES DEL MUNDO" />
        <MapBox x={14} y={22} w={300} h={120} tag="U3 · Índices global" onPick={() => onPick("U3")} />
        <MapBox x={26} y={54} w={136} h={78} tag="U1 · US" sub="SP500 · NAS100" onPick={() => onPick("U1")} />
        <MapBox x={168} y={54} w={134} h={78} tag="U2 · Europa" sub="DAX · FTSE100" onPick={() => onPick("U2")} />
        <MapBox x={326} y={22} w={160} h={120} tag="U11 · Asia-Pac" sub="NIKKEI·HANGSENG·ASX" onPick={() => onPick("U11")} />
        <MapBox x={498} y={22} w={248} h={120} tag="U7 · Diversificado" sub="contiene U3 + U4 + oro" onPick={() => onPick("U7")} />

        {/* --- MATERIAS PRIMAS Y REFUGIO --- */}
        <MapHeader x={14} y={166} text="MATERIAS PRIMAS Y REFUGIO" />
        <MapBox x={14} y={174} w={236} h={64} tag="U4 · Energía" sub="WTI · BRENT" onPick={() => onPick("U4")} />
        <MapBox x={262} y={174} w={236} h={64} tag="U5 · Metales" sub="oro · plata" onPick={() => onPick("U5")} />
        <MapBox x={510} y={174} w={236} h={64} tag="U8 · Refugio" sub="oro · JPY · CHF" onPick={() => onPick("U8")} />
        <line x1={380} y1={238} x2={380} y2={250} className="stroke-amber-500" strokeDasharray="3 3" />
        <line x1={380} y1={250} x2={628} y2={250} className="stroke-amber-500" strokeDasharray="3 3" />
        <line x1={628} y1={250} x2={628} y2={238} className="stroke-amber-500" strokeDasharray="3 3" />
        <text x={470} y={248} fontSize="8.5" className="fill-amber-500">comparten oro</text>

        {/* --- DIVISAS (FX) --- */}
        <MapHeader x={14} y={278} text="DIVISAS (FX)" />
        <MapBox x={14} y={286} w={236} h={64} tag="U6a · EUR-bloc" sub="EUR · GBP · CHF" onPick={() => onPick("U6a")} />
        <MapBox x={262} y={286} w={236} h={64} tag="U6b · commodity" sub="AUD · NZD · CAD" onPick={() => onPick("U6b")} />
        <MapBox x={510} y={286} w={236} h={64} tag="U10 · Cruces JPY" sub="EURJPY · GBPJPY · AUDJPY" onPick={() => onPick("U10")} />

        {/* --- ALTERNATIVOS Y CARTERAS --- */}
        <MapHeader x={14} y={378} text="ALTERNATIVOS Y CARTERAS" />
        <MapBox x={14} y={386} w={236} h={40} tag="U9 · Cripto" sub="BTC · ETH · LTC" onPick={() => onPick("U9")} />
        <g onClick={() => onPick("UP")} style={{ cursor: "pointer" }} className="group/box">
          <rect x={262} y={386} width={484} height={40} rx={6} className="fill-primary/10 stroke-primary group-hover/box:stroke-2" />
          <text x={270} y={403} fontSize="11" fontWeight={700} className="fill-primary">UP · Portafolios combinados</text>
          <text x={270} y={417} fontSize="8.5" className="fill-muted-foreground">carteras equal-weight de mercados independientes → el menor drawdown</text>
        </g>
      </svg>
    </Card>
  );
}

// ---------------------------------------------------------------------------
// Nivel 0: grilla de universos (estado + entrada)
// ---------------------------------------------------------------------------
function UniverseGrid({ universes, onPick }: { universes: ForjaUniverse[]; onPick: (k: string) => void }) {
  const { t } = useI18n();
  return (
    <div className="grid gap-3 sm:grid-cols-2">
      {universes.map((u) => (
        <button
          key={u.key}
          onClick={() => onPick(u.key)}
          className="group flex flex-col rounded-lg border bg-card p-4 text-left transition-colors hover:border-primary/50 hover:bg-muted/40"
        >
          <div className="flex items-center gap-2">
            <Layers className="size-4 shrink-0 text-primary" />
            <span className="font-semibold">{u.key} · {u.label}</span>
            <ChevronRight className="ml-auto size-4 text-muted-foreground transition-transform group-hover:translate-x-0.5" />
          </div>
          <div className="mt-1.5 flex flex-wrap gap-1.5">
            {u.n_viable > 0 && <Badge variant="survived">{u.n_viable} {t("forja.viable")}</Badge>}
            {u.n_candidata > 0 && <Badge variant="neutral">{u.n_candidata} {t("forja.candidata")}</Badge>}
            <Badge variant="outline">{u.n_test}/{u.max_tests} {t("forja.tests")}</Badge>
          </div>
          <div className="mt-2 text-xs text-muted-foreground">{u.instrument}</div>
          {u.relates.length > 0 && (
            <div className="mt-2 space-y-0.5">
              {u.relates.map((r, i) => (
                <div key={i} className="flex items-center gap-1 text-[11px] text-muted-foreground">
                  <Link2 className="size-3 shrink-0" /> {r}
                </div>
              ))}
            </div>
          )}
        </button>
      ))}
    </div>
  );
}

// ---------------------------------------------------------------------------
// Nivel 1: dentro de un universo — lista COMPACTA de sus experimentos
// ---------------------------------------------------------------------------
function UniverseList({ u, onOpen, onBack }: { u: ForjaUniverse; onOpen: (id: string) => void; onBack: () => void }) {
  const { t } = useI18n();
  return (
    <div className="space-y-4">
      <button onClick={onBack} className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground">
        <ArrowLeft className="size-4" /> {t("forja.allUniverses")}
      </button>
      <Card className="p-5">
        <div className="flex items-center gap-2">
          <Layers className="size-5 text-primary" />
          <h3 className="text-lg font-semibold">{u.key} · {u.label}</h3>
        </div>
        <div className="mt-1 text-sm text-muted-foreground">{u.instrument} · {u.periodo}</div>
        <div className="mt-3 rounded-md bg-muted/50 px-3 py-2 text-xs text-muted-foreground">
          {t("forja.capNote").replace("{n}", String(u.max_tests))} — {u.n_test}/{u.max_tests}.
        </div>
        {u.relates.length > 0 && (
          <div className="mt-2 flex flex-wrap gap-x-4 gap-y-0.5">
            {u.relates.map((r, i) => (
              <span key={i} className="inline-flex items-center gap-1 text-[11px] text-muted-foreground">
                <Link2 className="size-3" /> {r}
              </span>
            ))}
          </div>
        )}
      </Card>

      <Card className="overflow-hidden">
        {u.strategies.map((s, i) => (
          <button
            key={s.id}
            onClick={() => onOpen(s.id)}
            className={cn(
              "flex w-full items-center gap-3 px-4 py-3 text-left transition-colors hover:bg-muted/50",
              i > 0 && "border-t"
            )}
          >
            <span className={cn("size-2.5 shrink-0 rounded-full", dotColor(s.verdict))} />
            <div className="min-w-0 flex-1">
              <div className="flex flex-wrap items-center gap-2">
                <span className="font-medium">{s.name}</span>
                <Badge variant={s.verdict === "viable" ? "survived" : s.verdict === "descartada" ? "died" : "neutral"}>
                  {t(`forja.${s.verdict}`)} · {s.npass}/5
                </Badge>
              </div>
            </div>
            <div className="hidden shrink-0 gap-4 text-xs tabular-nums sm:flex">
              <div className="text-right">
                <div className="text-muted-foreground">{t("forja.maxdd")}</div>
                <div className="font-semibold text-primary">{pct(s.metrics.s_maxdd)} <span className="font-normal text-muted-foreground">/ {pct(s.metrics.b_maxdd)}</span></div>
              </div>
              <div className="text-right">
                <div className="text-muted-foreground">{t("forja.calmar")}</div>
                <div className="font-semibold text-primary">{s.metrics.s_calmar.toFixed(2)} <span className="font-normal text-muted-foreground">/ {s.metrics.b_calmar.toFixed(2)}</span></div>
              </div>
            </div>
            <ChevronRight className="size-4 shrink-0 text-muted-foreground" />
          </button>
        ))}
      </Card>
    </div>
  );
}

// ---------------------------------------------------------------------------
// Nivel 2: un experimento abierto — card completa con curva
// ---------------------------------------------------------------------------
function ExperimentView({ u, s, onBack }: { u: ForjaUniverse; s: ForjaStrategy; onBack: () => void }) {
  const { t } = useI18n();
  return (
    <div className="space-y-4">
      <button onClick={onBack} className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground">
        <ArrowLeft className="size-4" /> {u.key} · {u.label}
      </button>
      <StrategyCard s={s} />
    </div>
  );
}

// ---------------------------------------------------------------------------
// Contenedor: routing por hash (#U1 , #U1/<idExperimento>) -> "atrás" funciona
// ---------------------------------------------------------------------------
export function ForjaContent({ data }: { data: ForjaData }) {
  const { t } = useI18n();
  const [route, setRoute] = React.useState<{ u?: string; s?: string }>({});

  React.useEffect(() => {
    const read = () => {
      const h = typeof window !== "undefined" ? window.location.hash.replace(/^#/, "") : "";
      if (!h) return setRoute({});
      const [u, s] = h.split("/");
      setRoute({ u, s });
    };
    read();
    window.addEventListener("hashchange", read);
    return () => window.removeEventListener("hashchange", read);
  }, []);

  const go = (hash: string) => { window.location.hash = hash; };

  if (!data.universes || data.universes.length === 0)
    return <p className="rounded-lg border bg-card px-4 py-10 text-center text-sm text-muted-foreground">—</p>;

  const universe = route.u ? data.universes.find((u) => u.key === route.u) ?? null : null;

  // Nivel 2: experimento abierto
  if (universe && route.s) {
    const strat = universe.strategies.find((x) => x.id === route.s);
    if (strat) return <ExperimentView u={universe} s={strat} onBack={() => go(universe.key)} />;
  }
  // Nivel 1: dentro de un universo
  if (universe)
    return <UniverseList u={universe} onOpen={(id) => go(`${universe.key}/${id}`)} onBack={() => go("")} />;

  // Nivel 0: mapa + grilla + reto de fondeo
  return (
    <div className="space-y-6">
      <UniverseMap onPick={(k) => go(k)} />
      <UniverseGrid universes={data.universes} onPick={(k) => go(k)} />

      {data.challenge && data.challenge.length > 0 && (
        <Card className="p-5">
          <div className="mb-1 flex items-center gap-1.5 text-sm font-medium">
            <Target className="size-4 text-primary" /> {t("forja.challenge")}
          </div>
          <p className="mb-3 text-xs text-muted-foreground">{t("forja.challengeNote")}</p>
          <div className="overflow-x-auto">
            <table className="w-full text-xs">
              <thead className="text-muted-foreground">
                <tr className="border-b">
                  <th className="py-1.5 pr-2 text-left font-medium">{t("forja.strat")}</th>
                  <th className="px-2 text-right font-medium">1×</th>
                  <th className="px-2 text-right font-medium">3×</th>
                  <th className="pl-2 text-right font-medium">5×</th>
                </tr>
              </thead>
              <tbody>
                {data.challenge.map((c, i) => (
                  <tr key={i} className="border-b border-border/50">
                    <td className="py-1.5 pr-2">{c.name}</td>
                    <td className="px-2 text-right tabular-nums">{(c.x1 * 100).toFixed(1)}%</td>
                    <td className="px-2 text-right tabular-nums font-medium text-primary">{(c.x3 * 100).toFixed(1)}%</td>
                    <td className="pl-2 text-right tabular-nums">{(c.x5 * 100).toFixed(1)}%</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Card>
      )}

      <p className="text-xs text-muted-foreground">{t("forja.note")}</p>
    </div>
  );
}

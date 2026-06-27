"use client";

import * as React from "react";
import {
  Play, Square, RefreshCw, FlaskConical, ShieldCheck, Terminal,
  Sparkles, Code2, Check, X,
} from "lucide-react";
import type { LabData } from "@/lib/data";
import { useI18n } from "@/lib/i18n";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";

const fmt = (n: number) => (n >= 0 ? "+" : "") + n.toFixed(2);
const pass = (ok: boolean) => (ok ? "text-[var(--gain)] font-medium" : "text-muted-foreground");

export function LabContent({ data: initial }: { data: LabData }) {
  const { t } = useI18n();
  const [data, setData] = React.useState<LabData>(initial);
  const [isLocal, setIsLocal] = React.useState(false);
  const [busy, setBusy] = React.useState(false);
  const [log, setLog] = React.useState("");
  const logRef = React.useRef<HTMLPreElement>(null);
  const stateRef = React.useRef(initial.state);
  const liveUntilRef = React.useRef(0); // sigue refrescando aunque el estado parpadee

  React.useEffect(() => {
    stateRef.current = data.state;
  }, [data.state]);

  React.useEffect(() => {
    const h = window.location.hostname;
    setIsLocal(h === "localhost" || h === "127.0.0.1");
  }, []);

  const refresh = React.useCallback(async () => {
    try {
      const r = await fetch(`/data/lab.json?t=${Date.now()}`, { cache: "no-store" });
      if (r.ok) setData(await r.json());
    } catch {
      /* offline */
    }
  }, []);

  const fetchLog = React.useCallback(async () => {
    try {
      const r = await fetch(`/data/lab.log?t=${Date.now()}`, { cache: "no-store" });
      if (r.ok) {
        const txt = await r.text();
        if (txt.trim()) setLog(txt); // no pisar "iniciando..." con vacio
      }
    } catch {
      /* sin log aun */
    }
  }, []);

  // auto-scroll de la consola al fondo
  React.useEffect(() => {
    if (logRef.current) logRef.current.scrollTop = logRef.current.scrollHeight;
  }, [log]);

  // un solo intervalo SIEMPRE montado: refresca si corre o dentro de la ventana viva
  React.useEffect(() => {
    const id = setInterval(() => {
      if (stateRef.current === "running" || Date.now() < liveUntilRef.current) {
        refresh();
        fetchLog();
      }
    }, 1500);
    return () => clearInterval(id);
  }, [refresh, fetchLog]);

  // --- escribir mi propia estrategia ---
  type Spec = { name?: string; signal: { type: string; params: Record<string, unknown> } };
  type Parsed = { spec: Spec; code: string };
  type EvalResult = {
    status: "survived" | "died";
    verdict: string;
    dsr: number;
    mc_p: number;
    is_: { sharpe: number };
    oos1: { sharpe: number };
    oos2: { sharpe: number };
  };
  type TestOut = { result: EvalResult; code: string; spec: Spec };
  const [idea, setIdea] = React.useState("");
  const [parsing, setParsing] = React.useState(false);
  const [parsed, setParsed] = React.useState<Parsed | null>(null);
  const [parseErr, setParseErr] = React.useState(false);
  const [testing, setTesting] = React.useState(false);
  const [myResult, setMyResult] = React.useState<TestOut | null>(null);
  const [modal, setModal] = React.useState<{ title: string; body: string; mono: boolean } | null>(null);
  const [sortBy, setSortBy] = React.useState<"result" | "order">("result");
  const [sortDir, setSortDir] = React.useState<"asc" | "desc">("desc");
  const [statusFilter, setStatusFilter] = React.useState<"all" | "survived" | "died">("all");

  // cerrar el modal con Esc
  React.useEffect(() => {
    if (!modal) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setModal(null);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [modal]);

  const postLab = async (payload: object) => {
    const r = await fetch("/api/lab", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });
    return r.json();
  };

  const interpret = async () => {
    if (!idea.trim()) return;
    setParsing(true); setParseErr(false); setParsed(null); setMyResult(null);
    try {
      const res = await postLab({ action: "parse", text: idea });
      if (res?.spec) setParsed(res as Parsed);
      else setParseErr(true);
    } finally {
      setParsing(false);
    }
  };

  const confirmTest = async () => {
    if (!parsed) return;
    setTesting(true);
    try {
      const res = await postLab({ action: "test", spec: parsed.spec });
      if (res?.result) {
        setMyResult(res as TestOut);
        setParsed(null);
        setIdea("");
        refresh();
      }
    } finally {
      setTesting(false);
    }
  };

  const act = async (action: "start" | "stop") => {
    setBusy(true);
    if (action === "start") {
      setLog(t("lab.starting") + "\n");
      liveUntilRef.current = Date.now() + 25000; // 25s de refresco garantizado
    }
    try {
      await fetch("/api/lab", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ action }),
      });
      setData((d) => ({ ...d, state: action === "start" ? "running" : "stopped" }));
      if (action === "stop") liveUntilRef.current = Date.now() + 3000;
      setTimeout(fetchLog, 800);
    } finally {
      setBusy(false);
    }
  };

  const logTail = log.split("\n").slice(-120).join("\n");

  const running = data.state === "running";
  const filters = ["lab.f1", "lab.f2", "lab.f3", "lab.f4", "lab.f5"];
  const thr = data.thresholds ?? { oos_min: 0.3, dsr_min: 0.95, mc_max: 0.05 };
  const thrChips = [`> ${thr.oos_min}`, `> ${thr.oos_min}`, `> ${thr.dsr_min}`, `< ${thr.mc_max}`, ""];

  const sortKey = (it: (typeof data.items)[number]) =>
    sortBy === "order" ? it.order : Math.min(it.sharpe_oos1, it.sharpe_oos2);
  const displayItems = data.items
    .filter((it) => statusFilter === "all" || it.status === statusFilter)
    .sort((a, b) => (sortDir === "asc" ? sortKey(a) - sortKey(b) : sortKey(b) - sortKey(a)));

  return (
    <div className="space-y-6">
      {/* barra de estado + controles */}
      <div className="flex flex-wrap items-center justify-between gap-4 rounded-xl border bg-card p-4">
        <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-sm">
          <Stat label={t("lab.total")} value={String(data.total)} />
          <Stat label={t("lab.survived")} value={String(data.survived)} accent />
          <div className="flex items-center gap-2">
            <span className="text-muted-foreground">{t("lab.state")}</span>
            <span className="inline-flex items-center gap-1.5 font-medium">
              <span className={cn("size-2 rounded-full", running ? "animate-pulse bg-[var(--gain)]" : "bg-muted-foreground")} />
              {running ? t("lab.running") : t("lab.stopped")}
            </span>
          </div>
          {data.updated && (
            <span className="text-xs text-muted-foreground">{t("lab.updated")}: {data.updated}</span>
          )}
        </div>

        <div className="flex items-center gap-2">
          <Button variant="outline" size="sm" onClick={refresh} aria-label={t("lab.refresh")}>
            <RefreshCw className="size-4" /> {t("lab.refresh")}
          </Button>
          {isLocal ? (
            running ? (
              <Button
                size="sm"
                variant="outline"
                className="border-[var(--loss)] text-[var(--loss)] hover:bg-[var(--loss)]/10"
                disabled={busy}
                onClick={() => act("stop")}
              >
                <Square className="size-4" /> {t("lab.stop")}
              </Button>
            ) : (
              <Button size="sm" disabled={busy} onClick={() => act("start")}>
                <Play className="size-4" /> {t("lab.run")}
              </Button>
            )
          ) : null}
        </div>
      </div>

      {!isLocal && (
        <p className="rounded-lg border border-dashed bg-muted/40 px-4 py-3 text-sm text-muted-foreground">
          {t("lab.localOnly")}
        </p>
      )}

      {/* mini-consola en vivo (solo localhost) */}
      {isLocal && (
        <div className="overflow-hidden rounded-xl border bg-zinc-950 text-zinc-100">
          <div className="flex items-center gap-2 border-b border-white/10 px-3 py-2 text-xs font-medium text-zinc-400">
            <Terminal className="size-3.5" />
            {t("lab.console")}
            {running && (
              <span className="ml-auto inline-flex items-center gap-1.5 text-[var(--gain)]">
                <span className="size-1.5 animate-pulse rounded-full bg-[var(--gain)]" />
                {t("lab.running")}
              </span>
            )}
          </div>
          <pre
            ref={logRef}
            className="max-h-64 overflow-auto px-3 py-2 font-mono text-[11.5px] leading-relaxed whitespace-pre-wrap text-zinc-300"
          >
            {logTail || <span className="text-zinc-500">{t("lab.consoleEmpty")}</span>}
          </pre>
        </div>
      )}

      {/* el gauntlet */}
      <Card>
        <CardContent className="py-4">
          <div className="mb-3 flex items-center gap-2 text-sm font-semibold">
            <ShieldCheck className="size-4 text-primary" /> {t("lab.filtersTitle")}
          </div>
          <div className="flex flex-wrap gap-2">
            {filters.map((k, i) => (
              <button
                key={k}
                onClick={() => setModal({ title: `${i + 1}. ${t(k)}`, body: t(`${k}why`), mono: false })}
                className="inline-flex items-center gap-1.5 rounded-full border px-3 py-1 text-xs transition-colors hover:border-primary hover:bg-primary/5"
              >
                <span className="grid size-4 place-items-center rounded-full bg-primary/10 text-[10px] font-bold text-primary">
                  {i + 1}
                </span>
                {t(k)}
                {thrChips[i] && (
                  <span className="rounded bg-[var(--gain)]/15 px-1.5 py-0.5 font-mono text-[10px] font-semibold text-[var(--gain)]">
                    {thrChips[i]}
                  </span>
                )}
              </button>
            ))}
          </div>
          <p className="mt-2 text-xs text-primary/80">{t("lab.whyHint")}</p>
          <p className="mt-1 text-xs text-muted-foreground">{t("lab.legend")}</p>
          <p className="mt-1 text-[11px] text-muted-foreground">{t("lab.glossary")}</p>
        </CardContent>
      </Card>

      {/* escribir mi propia estrategia (solo localhost) */}
      {isLocal && (
        <Card>
          <CardContent className="py-4">
            <div className="mb-1 flex items-center gap-2 text-sm font-semibold">
              <Sparkles className="size-4 text-primary" /> {t("lab.writeTitle")}
            </div>
            <p className="mb-3 text-xs text-muted-foreground">{t("lab.writeHint")}</p>

            <div className="flex flex-col gap-2 sm:flex-row">
              <textarea
                value={idea}
                onChange={(e) => setIdea(e.target.value)}
                placeholder={t("lab.writePlaceholder")}
                rows={2}
                className="flex-1 resize-y rounded-lg border bg-background px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-primary/40"
              />
              <Button
                size="sm"
                disabled={parsing || !idea.trim()}
                onClick={interpret}
                className="sm:self-start"
              >
                <Sparkles className="size-4" /> {parsing ? t("lab.interpreting") : t("lab.interpret")}
              </Button>
            </div>

            {parseErr && (
              <p className="mt-3 rounded-lg border border-dashed border-[var(--loss)]/50 px-3 py-2 text-xs text-[var(--loss)]">
                {t("lab.parseError")}
              </p>
            )}

            {/* interpretacion -> confirmar */}
            {parsed && (
              <div className="mt-3 rounded-lg border bg-muted/30 p-3">
                <div className="mb-2 text-sm font-medium">{t("lab.parsed")}</div>
                <pre className="mb-3 overflow-auto rounded-md bg-zinc-950 px-3 py-2 font-mono text-[11.5px] leading-relaxed whitespace-pre-wrap text-zinc-300">
                  {parsed.code}
                </pre>
                <div className="flex items-center gap-2">
                  <Button size="sm" disabled={testing} onClick={confirmTest}>
                    <Check className="size-4" /> {testing ? t("lab.testing") : t("lab.confirmTest")}
                  </Button>
                  <Button size="sm" variant="ghost" disabled={testing} onClick={() => setParsed(null)}>
                    <X className="size-4" /> {t("lab.cancel")}
                  </Button>
                </div>
              </div>
            )}

            {/* resultado de mi estrategia */}
            {myResult && (
              <div className="mt-3 rounded-lg border p-3">
                <div className="mb-2 flex items-center gap-2 text-sm font-medium">
                  {t("lab.yourResult")}
                  <Badge variant={myResult.result.status === "survived" ? "survived" : "died"}>
                    {t(`status.${myResult.result.status}`)}
                  </Badge>
                  <button
                    onClick={() => setModal({ title: myResult.spec.name || "estrategia", body: myResult.code, mono: true })}
                    className="ml-auto inline-flex items-center gap-1 text-[11px] text-muted-foreground hover:text-primary"
                  >
                    <Code2 className="size-3" /> {t("lab.viewCode")}
                  </button>
                </div>
                <div className="grid grid-cols-2 gap-x-6 gap-y-1 text-xs sm:grid-cols-3">
                  <Metric label={t("lab.colIS")} v={fmt(myResult.result.is_.sharpe)} />
                  <Metric label={t("lab.colOOS1")} v={fmt(myResult.result.oos1.sharpe)} ok={myResult.result.oos1.sharpe > 0.3} />
                  <Metric label={t("lab.colOOS2")} v={fmt(myResult.result.oos2.sharpe)} ok={myResult.result.oos2.sharpe > 0.3} />
                  <Metric label={t("lab.colDSR")} v={myResult.result.dsr.toFixed(2)} ok={myResult.result.dsr > 0.95} />
                  <Metric label={t("lab.colMC")} v={myResult.result.mc_p.toFixed(2)} ok={myResult.result.mc_p < 0.05} />
                </div>
                <p className="mt-2 text-xs text-muted-foreground">{myResult.result.verdict}</p>
              </div>
            )}
          </CardContent>
        </Card>
      )}

      {/* tabla de resultados */}
      {data.items.length === 0 ? (
        <p className="rounded-lg border bg-card px-4 py-10 text-center text-sm text-muted-foreground">
          {t("lab.empty")}
        </p>
      ) : (
        <div className="space-y-2">
        <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-xs text-muted-foreground">
          {/* filtro por estado */}
          <div className="flex items-center gap-1">
            {(["all", "survived", "died"] as const).map((s) => (
              <button
                key={s}
                onClick={() => setStatusFilter(s)}
                className={cn(
                  "rounded-full border px-2.5 py-1 transition-colors",
                  statusFilter === s ? "border-primary bg-primary/10 text-primary" : "hover:text-foreground"
                )}
              >
                {t(s === "all" ? "filter.all" : s === "survived" ? "filter.survived" : "filter.died")}
              </button>
            ))}
          </div>
          {/* ordenar por + direccion */}
          <div className="flex items-center gap-1">
            <span>{t("lab.sortLabel")}</span>
            {(["result", "order"] as const).map((k) => (
              <button
                key={k}
                onClick={() => setSortBy(k)}
                className={cn(
                  "rounded-full border px-2.5 py-1 transition-colors",
                  sortBy === k ? "border-primary bg-primary/10 text-primary" : "hover:text-foreground"
                )}
              >
                {t(k === "result" ? "lab.sortResult" : "lab.sortOrder")}
              </button>
            ))}
            <button
              onClick={() => setSortDir((d) => (d === "asc" ? "desc" : "asc"))}
              className="rounded-full border px-2.5 py-1 transition-colors hover:text-foreground"
            >
              {sortDir === "asc" ? "↑ " : "↓ "}{t(sortDir === "asc" ? "lab.asc" : "lab.desc")}
            </button>
          </div>
        </div>
        <div className="overflow-x-auto rounded-xl border">
          <table className="w-full min-w-[680px] text-sm">
            <thead className="border-b bg-muted/40 text-xs text-muted-foreground">
              <tr>
                <th className="px-4 py-2.5 text-left font-medium">{t("lab.colName")}</th>
                <th title={t("lab.tipIS")} className="cursor-help px-3 py-2.5 text-right font-medium">{t("lab.colIS")}</th>
                <th title={t("lab.tipOOS1")} className="cursor-help px-3 py-2.5 text-right font-medium">{t("lab.colOOS1")}</th>
                <th title={t("lab.tipOOS2")} className="cursor-help px-3 py-2.5 text-right font-medium">{t("lab.colOOS2")}</th>
                <th title={t("lab.tipDSR")} className="cursor-help px-3 py-2.5 text-right font-medium">{t("lab.colDSR")}</th>
                <th title={t("lab.tipMC")} className="cursor-help px-3 py-2.5 text-right font-medium">{t("lab.colMC")}</th>
                <th className="px-4 py-2.5 text-left font-medium">{t("lab.colVerdict")}</th>
              </tr>
            </thead>
            <tbody>
              {displayItems.map((it) => (
                <tr key={it.id} className="border-b last:border-0 hover:bg-muted/30">
                  <td className="px-4 py-2.5">
                    <div className="flex items-center gap-2">
                      <FlaskConical className="size-3.5 shrink-0 text-muted-foreground" />
                      <span className="font-medium">{it.name}</span>
                      <Badge variant={it.status === "survived" ? "survived" : "died"}>
                        {t(`status.${it.status}`)}
                      </Badge>
                      {it.code && (
                        <button
                          onClick={() => setModal({ title: it.name, body: it.code!, mono: true })}
                          className="inline-flex items-center gap-1 text-[11px] text-muted-foreground hover:text-primary"
                        >
                          <Code2 className="size-3" /> {t("lab.viewCode")}
                        </button>
                      )}
                    </div>
                    <span className="ml-6 text-xs text-muted-foreground">
                      <span className="font-mono">#{it.order}</span> · {it.family} · {it.type}
                      {it.source && it.source !== "?" && (
                        <span className="ml-1 rounded bg-muted px-1.5 py-0.5 text-[10px]">
                          {t(`lab.src.${it.source}`)}
                        </span>
                      )}
                    </span>
                  </td>
                  <td className="px-3 py-2.5 text-right tabular-nums text-muted-foreground">{fmt(it.sharpe_is)}</td>
                  <td className={cn("px-3 py-2.5 text-right tabular-nums", pass(it.sharpe_oos1 > 0.3))}>{fmt(it.sharpe_oos1)}</td>
                  <td className={cn("px-3 py-2.5 text-right tabular-nums", pass(it.sharpe_oos2 > 0.3))}>{fmt(it.sharpe_oos2)}</td>
                  <td className={cn("px-3 py-2.5 text-right tabular-nums", pass(it.dsr > 0.95))}>{it.dsr.toFixed(2)}</td>
                  <td className={cn("px-3 py-2.5 text-right tabular-nums", pass(it.mc_p < 0.05))}>{it.mc_p.toFixed(2)}</td>
                  <td className="px-4 py-2.5 text-xs text-muted-foreground">{it.verdict}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        </div>
      )}

      <p className="text-xs text-muted-foreground">{t("lab.note")}</p>

      {/* modal: codigo real (mono) o explicacion de filtro (prosa) */}
      {modal && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4"
          onClick={() => setModal(null)}
        >
          <div
            className="flex max-h-[80vh] w-full max-w-2xl flex-col overflow-hidden rounded-xl border bg-card shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between border-b px-4 py-3">
              <div className="flex min-w-0 items-center gap-2 text-sm font-semibold">
                {modal.mono ? <Code2 className="size-4 shrink-0 text-primary" /> : <ShieldCheck className="size-4 shrink-0 text-primary" />}
                <span className="truncate">{modal.title}</span>
              </div>
              <button
                onClick={() => setModal(null)}
                className="shrink-0 text-muted-foreground hover:text-foreground"
                aria-label="cerrar"
              >
                <X className="size-4" />
              </button>
            </div>
            {modal.mono ? (
              <pre className="overflow-auto bg-zinc-950 px-4 py-3 font-mono text-[12px] leading-relaxed whitespace-pre-wrap text-zinc-300">
                {modal.body}
              </pre>
            ) : (
              <p className="overflow-auto px-5 py-4 text-sm leading-relaxed text-muted-foreground">
                {modal.body}
              </p>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

function Stat({ label, value, accent }: { label: string; value: string; accent?: boolean }) {
  return (
    <div className="flex items-baseline gap-1.5">
      <span className={cn("text-lg font-bold tabular-nums", accent && "text-primary")}>{value}</span>
      <span className="text-muted-foreground">{label}</span>
    </div>
  );
}

function Metric({ label, v, ok }: { label: string; v: string; ok?: boolean }) {
  return (
    <div className="flex items-baseline justify-between gap-2">
      <span className="text-muted-foreground">{label}</span>
      <span className={cn("font-medium tabular-nums", ok === undefined ? "" : pass(ok))}>{v}</span>
    </div>
  );
}

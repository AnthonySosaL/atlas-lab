"use client";

import * as React from "react";
import { Play, Square, RefreshCw, FlaskConical, ShieldCheck } from "lucide-react";
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

  // mientras corre, refresca solo cada 4s
  React.useEffect(() => {
    if (data.state !== "running") return;
    const id = setInterval(refresh, 4000);
    return () => clearInterval(id);
  }, [data.state, refresh]);

  const act = async (action: "start" | "stop") => {
    setBusy(true);
    try {
      await fetch("/api/lab", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ action }),
      });
      setData((d) => ({ ...d, state: action === "start" ? "running" : "stopped" }));
      setTimeout(refresh, 1500);
    } finally {
      setBusy(false);
    }
  };

  const running = data.state === "running";
  const filters = ["lab.f1", "lab.f2", "lab.f3", "lab.f4", "lab.f5"];

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

      {/* el gauntlet */}
      <Card>
        <CardContent className="py-4">
          <div className="mb-3 flex items-center gap-2 text-sm font-semibold">
            <ShieldCheck className="size-4 text-primary" /> {t("lab.filtersTitle")}
          </div>
          <div className="flex flex-wrap gap-2">
            {filters.map((k, i) => (
              <span key={k} className="inline-flex items-center gap-1.5 rounded-full border px-3 py-1 text-xs">
                <span className="grid size-4 place-items-center rounded-full bg-primary/10 text-[10px] font-bold text-primary">
                  {i + 1}
                </span>
                {t(k)}
              </span>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* tabla de resultados */}
      {data.items.length === 0 ? (
        <p className="rounded-lg border bg-card px-4 py-10 text-center text-sm text-muted-foreground">
          {t("lab.empty")}
        </p>
      ) : (
        <div className="overflow-x-auto rounded-xl border">
          <table className="w-full min-w-[680px] text-sm">
            <thead className="border-b bg-muted/40 text-xs text-muted-foreground">
              <tr>
                <th className="px-4 py-2.5 text-left font-medium">{t("lab.colName")}</th>
                <th className="px-3 py-2.5 text-right font-medium">{t("lab.colIS")}</th>
                <th className="px-3 py-2.5 text-right font-medium">{t("lab.colOOS1")}</th>
                <th className="px-3 py-2.5 text-right font-medium">{t("lab.colOOS2")}</th>
                <th className="px-3 py-2.5 text-right font-medium">{t("lab.colDSR")}</th>
                <th className="px-3 py-2.5 text-right font-medium">{t("lab.colMC")}</th>
                <th className="px-4 py-2.5 text-left font-medium">{t("lab.colVerdict")}</th>
              </tr>
            </thead>
            <tbody>
              {data.items.map((it) => (
                <tr key={it.id} className="border-b last:border-0 hover:bg-muted/30">
                  <td className="px-4 py-2.5">
                    <div className="flex items-center gap-2">
                      <FlaskConical className="size-3.5 shrink-0 text-muted-foreground" />
                      <span className="font-medium">{it.name}</span>
                      <Badge variant={it.status === "survived" ? "survived" : "died"}>
                        {t(`status.${it.status}`)}
                      </Badge>
                    </div>
                    <span className="ml-6 text-xs text-muted-foreground">{it.family} · {it.type}</span>
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
      )}

      <p className="text-xs text-muted-foreground">{t("lab.note")}</p>
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

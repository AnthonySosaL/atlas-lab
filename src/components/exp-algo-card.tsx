"use client";

import * as React from "react";
import { Check, Copy } from "lucide-react";
import type { ExpDetail } from "@/lib/exp-detail";
import { Card } from "@/components/ui/card";
import { useI18n, pick } from "@/lib/i18n";

/** Bloque "Algoritmo": texto + código de la señal con botón de copiar. */
export function ExpAlgoCard({ detail }: { detail: ExpDetail }) {
  const { t, locale } = useI18n();
  const [copied, setCopied] = React.useState(false);
  const text = pick(detail.algo, locale);
  const { src, snippet } = detail.code;

  React.useEffect(() => {
    if (!copied) return;
    const id = setTimeout(() => setCopied(false), 1800);
    return () => clearTimeout(id);
  }, [copied]);

  async function copy() {
    try {
      await navigator.clipboard.writeText(snippet);
      setCopied(true);
    } catch {
      /* portapapeles no disponible: sin feedback */
    }
  }

  if (!text && !snippet) return null;
  return (
    <Card className="mt-8 p-5">
      <div className="mb-2 text-sm font-medium">{t("detail.algo")}</div>
      {text && <p className="text-sm leading-relaxed text-muted-foreground">{text}</p>}
      {snippet && (
        <div className="mt-4 overflow-hidden rounded-lg border bg-zinc-950">
          <div className="flex items-center justify-between gap-2 border-b border-zinc-800 px-3 py-1.5">
            <span className="min-w-0 truncate font-mono text-[11px] text-zinc-400">
              {src ? `${t("detail.codeFile")}: ${src}` : "Python"}
            </span>
            <button
              type="button"
              onClick={copy}
              aria-label={t("detail.copyAria")}
              className="inline-flex shrink-0 items-center gap-1 rounded px-2 py-1 text-[11px] text-zinc-300 transition-colors hover:bg-zinc-800"
            >
              {copied ? <Check className="size-3.5 text-emerald-400" /> : <Copy className="size-3.5" />}
              <span aria-live="polite">{copied ? t("detail.copied") : t("detail.copy")}</span>
            </button>
          </div>
          <pre className="overflow-x-auto px-4 py-3 font-mono text-[12px] leading-relaxed text-zinc-300">
            <code>{snippet}</code>
          </pre>
        </div>
      )}
    </Card>
  );
}

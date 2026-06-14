"use client";

import * as React from "react";
import { Languages, Check } from "lucide-react";
import { useI18n, LOCALES } from "@/lib/i18n";
import { cn } from "@/lib/utils";

export function LanguageSwitcher() {
  const { locale, setLocale } = useI18n();
  const [open, setOpen] = React.useState(false);
  const ref = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    const onClick = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener("mousedown", onClick);
    return () => document.removeEventListener("mousedown", onClick);
  }, []);

  return (
    <div ref={ref} className="relative">
      <button
        onClick={() => setOpen((v) => !v)}
        className="inline-flex h-9 items-center gap-1.5 rounded-md px-2.5 text-sm font-medium text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
        aria-label="Idioma"
      >
        <Languages className="size-4" />
        <span className="tabular text-xs font-bold">{locale.toUpperCase()}</span>
      </button>
      {open && (
        <div className="absolute right-0 top-11 z-50 w-40 overflow-hidden rounded-lg border bg-card p-1 shadow-lg">
          {LOCALES.map((l) => (
            <button
              key={l.code}
              onClick={() => {
                setLocale(l.code);
                setOpen(false);
              }}
              className={cn(
                "flex w-full items-center justify-between rounded-md px-3 py-2 text-sm transition-colors hover:bg-muted",
                locale === l.code && "font-medium text-primary"
              )}
            >
              <span className="flex items-center gap-2">
                <span className="tabular text-xs font-bold text-muted-foreground">{l.flag}</span>
                {l.label}
              </span>
              {locale === l.code && <Check className="size-4" />}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

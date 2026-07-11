"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, FlaskConical } from "lucide-react";
import { cn } from "@/lib/utils";
import { useI18n } from "@/lib/i18n";
import { ThemeToggle } from "@/components/theme-toggle";
import { LanguageSwitcher } from "@/components/language-switcher";
import { Button } from "@/components/ui/button";

const LINKS = [
  { href: "/", key: "nav.experiments" },
  { href: "/roadmap", key: "nav.roadmap" },
  { href: "/bot", key: "nav.bot" },
  { href: "/lab", key: "nav.lab" },
  { href: "/hallazgos", key: "nav.hallazgos" },
  { href: "/forja", key: "nav.forja" },
];

export function Navbar() {
  const pathname = usePathname();
  const { t } = useI18n();
  const [open, setOpen] = React.useState(false);

  return (
    <header className="sticky top-0 z-50 border-b bg-background/80 backdrop-blur-md">
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4">
        <Link href="/" className="flex items-center gap-2 font-semibold tracking-tight">
          <span className="grid size-8 place-items-center rounded-md bg-primary text-primary-foreground">
            <FlaskConical className="size-5" />
          </span>
          ATLAS <span className="text-primary">Lab</span>
        </Link>

        <div className="hidden items-center gap-1 md:flex">
          {LINKS.map((l) => {
            const active = pathname === l.href;
            return (
              <Link
                key={l.href}
                href={l.href}
                onClick={() => { if (active && window.location.hash) window.location.hash = ""; }}
                className={cn(
                  "relative px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground",
                  active && "text-foreground"
                )}
              >
                {t(l.key)}
                {active && (
                  <span className="absolute inset-x-3 -bottom-px h-0.5 rounded-full bg-primary" />
                )}
              </Link>
            );
          })}
          <LanguageSwitcher />
          <ThemeToggle />
        </div>

        <div className="flex items-center gap-1 md:hidden">
          <LanguageSwitcher />
          <ThemeToggle />
          <Button variant="ghost" size="icon" aria-label="Menú" onClick={() => setOpen((v) => !v)}>
            {open ? <X /> : <Menu />}
          </Button>
        </div>
      </nav>

      {open && (
        <div className="border-t md:hidden">
          <div className="mx-auto flex max-w-6xl flex-col px-4 py-2">
            {LINKS.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                onClick={() => { setOpen(false); if (pathname === l.href && window.location.hash) window.location.hash = ""; }}
                className={cn(
                  "rounded-md px-3 py-2.5 text-sm font-medium text-muted-foreground hover:bg-muted hover:text-foreground",
                  pathname === l.href && "text-foreground"
                )}
              >
                {t(l.key)}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}

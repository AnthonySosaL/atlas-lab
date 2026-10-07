"use client";

import { ArrowUpRight } from "lucide-react";
import { useI18n, type Locale } from "@/lib/i18n";
import { CERTIS_URL, PORTFOLIO_URL, withUtm } from "@/lib/site";

const TEXT: Record<Locale, { title: string; certis: string; portfolio: string }> = {
  es: {
    title: "Otros proyectos",
    certis: "Certis — examen de nivel de inglés (A2–C1) y práctica de speaking con IA",
    portfolio: "Portafolio de Anthony Sosa",
  },
  en: {
    title: "Other projects",
    certis: "Certis — English placement test (A2–C1) and AI speaking practice",
    portfolio: "Anthony Sosa's portfolio",
  },
  pt: {
    title: "Outros projetos",
    certis: "Certis — teste de nível de inglês (A2–C1) e prática de speaking com IA",
    portfolio: "Portfólio de Anthony Sosa",
  },
};

export function OtherProjects() {
  const { locale } = useI18n();
  const t = TEXT[locale] ?? TEXT.es;
  const links = [
    { href: withUtm(CERTIS_URL), label: t.certis },
    { href: withUtm(PORTFOLIO_URL), label: t.portfolio },
  ];
  return (
    <nav aria-label={t.title} className="mx-auto max-w-6xl px-4 pb-8">
      <h3 className="text-sm font-semibold tracking-tight">{t.title}</h3>
      <ul className="mt-2 flex flex-col gap-1.5 text-sm text-muted-foreground sm:flex-row sm:gap-6">
        {links.map((l) => (
          <li key={l.href}>
            <a href={l.href} target="_blank" rel="noopener" className="inline-flex items-center gap-1 hover:text-primary">
              {l.label} <ArrowUpRight className="size-3.5" />
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

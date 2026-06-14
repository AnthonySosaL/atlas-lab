"use client";

import * as React from "react";
import { motion } from "framer-motion";
import type { RoadmapChapter } from "@/lib/data";
import { useI18n, pick } from "@/lib/i18n";

/** Renderiza **negrita** y `código` simples dentro de un item del roadmap. */
function RichText({ text }: { text: string }) {
  const parts = text.split(/(\*\*[^*]+\*\*|`[^`]+`)/g).filter(Boolean);
  return (
    <>
      {parts.map((p, i) => {
        if (p.startsWith("**") && p.endsWith("**"))
          return <strong key={i} className="font-semibold text-foreground">{p.slice(2, -2)}</strong>;
        if (p.startsWith("`") && p.endsWith("`"))
          return <code key={i} className="tabular rounded bg-muted px-1 py-0.5 text-[0.85em]">{p.slice(1, -1)}</code>;
        return <span key={i}>{p}</span>;
      })}
    </>
  );
}

export function RoadmapTimeline({ chapters }: { chapters: RoadmapChapter[] }) {
  const { locale } = useI18n();
  return (
    <div className="relative">
      {/* riel vertical */}
      <div className="absolute left-4 top-2 bottom-2 w-px bg-border sm:left-5" />

      <div className="space-y-10">
        {chapters.map((ch, i) => (
          <motion.section
            key={i}
            initial={{ opacity: 0, x: -16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.45 }}
            className="relative pl-12 sm:pl-14"
          >
            {/* nodo */}
            <div className="absolute left-0 top-0 grid size-9 place-items-center rounded-full border bg-card text-base shadow-sm sm:size-10">
              {ch.emoji || "•"}
            </div>

            <h3 className="mb-3 text-lg font-semibold tracking-tight">{pick(ch.title_i18n, locale) || ch.title}</h3>
            <ul className="space-y-2">
              {(ch.items_i18n?.[locale] ?? ch.items).map((it, j) => (
                <li key={j} className="text-sm leading-relaxed text-muted-foreground">
                  <RichText text={it} />
                </li>
              ))}
            </ul>
          </motion.section>
        ))}
      </div>
    </div>
  );
}

import type { MetadataRoute } from "next";
import { getExperiments } from "@/lib/data";
import { SITE_URL } from "@/lib/site";

const PAGES = ["", "/lab", "/hallazgos", "/forja", "/bot", "/roadmap"];

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const experiments = await getExperiments();
  return [
    ...PAGES.map((p) => ({
      url: `${SITE_URL}${p}`,
      changeFrequency: "weekly" as const,
      priority: p === "" ? 1 : 0.8,
    })),
    ...experiments.map((e) => ({
      url: `${SITE_URL}/exp/${e.id}`,
      lastModified: e.date || undefined,
      changeFrequency: "monthly" as const,
      priority: 0.5,
    })),
  ];
}

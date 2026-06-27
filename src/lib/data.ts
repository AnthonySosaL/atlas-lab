import { promises as fs } from "fs";
import path from "path";

const DATA = path.join(process.cwd(), "public", "data");

export type Loc = { es: string; en: string; pt: string };

export type Experiment = {
  id: string;
  v: number | null;
  analysis: Loc;
  name: Loc;
  family: string;
  date: string;
  description: Loc;
  params: Record<string, unknown>;
  verdict: Loc;
  notes: Loc;
  metrics: Record<string, number | string>;
  status: "survived" | "died" | "neutral";
  has_equity: boolean;
  has_trades_chart: boolean;
  has_trades_csv: boolean;
};

export type Summary = {
  total: number;
  families: string[];
  n_families: number;
  survived: number;
  died: number;
  generated_at: string;
};

export type RoadmapChapter = {
  title: string;
  emoji: string;
  items: string[];
  title_i18n: Loc;
  items_i18n: { es: string[]; en: string[]; pt: string[] };
};
export type Serie = { name: string; x: string[]; y: (number | null)[] };

export type LabItem = {
  id: string;
  order: number;
  name: string;
  family: string;
  type: string;
  params: Record<string, unknown>;
  status: "survived" | "died";
  verdict: string;
  dsr: number;
  mc_p: number;
  beats_bh: boolean;
  sharpe_is: number;
  sharpe_oos1: number;
  sharpe_oos2: number;
  ret_is: number;
  mdd_is: number;
  code?: string;
  at: string;
};
export type LabData = {
  updated: string;
  total: number;
  survived: number;
  state: "running" | "stopped";
  thresholds?: { oos_min: number; dsr_min: number; mc_max: number };
  items: LabItem[];
};

async function readJSON<T>(file: string, fallback: T): Promise<T> {
  try {
    return JSON.parse(await fs.readFile(path.join(DATA, file), "utf8")) as T;
  } catch {
    return fallback;
  }
}

export const getExperiments = () => readJSON<Experiment[]>("experiments.json", []);
export const getSummary = () =>
  readJSON<Summary>("summary.json", {
    total: 0, families: [], n_families: 0, survived: 0, died: 0, generated_at: "",
  });
export const getRoadmap = () => readJSON<RoadmapChapter[]>("roadmap.json", []);
export const getLab = () =>
  readJSON<LabData>("lab.json", {
    updated: "", total: 0, survived: 0, state: "stopped",
    thresholds: { oos_min: 0.3, dsr_min: 0.95, mc_max: 0.05 }, items: [],
  });

export async function getExperiment(id: string) {
  const all = await getExperiments();
  return all.find((e) => e.id === id) ?? null;
}

export async function getSeries(id: string): Promise<Serie[]> {
  return readJSON<Serie[]>(path.join("series", `${id}.json`), []);
}

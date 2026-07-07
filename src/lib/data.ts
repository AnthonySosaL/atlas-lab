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
  forms?: { name: string; is: number; oos1: number; oos2: number; dsr: number; mc: number }[];
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
  source?: string;
  name: string;
  family: string;
  type: string;
  params: Record<string, unknown>;
  status: "survived" | "died" | "noop";
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
  bh_is?: number;
  shown?: number;
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
export type ForjaLev2 = {
  s_total: number; s_maxdd: number; s_calmar: number; cap_final: number; ok: boolean;
};
export type ForjaLeg = {
  name: string; weight: number; usd: number; instruments: string; expo_actual: number; rule: string;
};
export type ForjaWithdrawTasa = {
  rate: number; usd_mes: number; horizonte: string;
  pct_preserva: number; pct_semiruina: number; peor_final: number; peor_minimo: number;
  bh_pct_preserva: number; bh_pct_semiruina: number; bh_peor_final: number; bh_peor_minimo: number;
};
export type ForjaWithdrawSim = {
  tasas: ForjaWithdrawTasa[];
  retiro_max_seguro: number; retiro_max_seguro_bh: number; horizonte_seguro: string;
};
export type ForjaOps = {
  capital: number; legs: ForjaLeg[]; cagr: number; withdraw_rate: number; withdraw_month: number; maxdd: number;
  withdraw_sim?: ForjaWithdrawSim;
};
export type ForjaStrategy = {
  id: string;
  name: string;
  hyp: string;
  instrument: string;
  periodo: string;
  rationale: string;
  verdict: "viable" | "candidata" | "descartada";
  npass: number;
  metrics: Record<string, number>;
  lev2: ForjaLev2;
  ops?: ForjaOps;
  filters: { name: string; pass: boolean; detail: string }[];
  equity: { x: string[]; strat: number[]; bh: number[] };
};
export type ForjaUniverse = {
  key: string;
  label: string;
  assets: string[];
  instrument: string;
  periodo: string;
  relates: string[];
  max_tests: number;
  n_test: number;
  n_viable: number;
  n_candidata: number;
  strategies: ForjaStrategy[];
};
export type ForjaChallenge = { name: string; x1: number; x3: number; x5: number };
export type ForjaTop5 = {
  rank: number; id: string; name: string; ukey: string; ulabel: string;
  verdict: string; calmar: number; maxdd: number; maxdd_bh: number; cagr: number;
  also_viable_in: string[];
};
export type ForjaData = { updated: string; universes: ForjaUniverse[]; challenge?: ForjaChallenge[]; top5?: ForjaTop5[]; fin_note?: string };
export const getForja = () => readJSON<ForjaData>("forja.json", { updated: "", universes: [] });

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

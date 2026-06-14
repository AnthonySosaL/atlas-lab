import { promises as fs } from "fs";
import path from "path";

const DATA = path.join(process.cwd(), "public", "data");

export type Experiment = {
  id: string;
  name: string;
  family: string;
  date: string;
  description: string;
  params: Record<string, unknown>;
  verdict: string;
  notes: string;
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

export type RoadmapChapter = { title: string; emoji: string; items: string[] };
export type Serie = { name: string; x: string[]; y: (number | null)[] };

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

export async function getExperiment(id: string) {
  const all = await getExperiments();
  return all.find((e) => e.id === id) ?? null;
}

export async function getSeries(id: string): Promise<Serie[]> {
  return readJSON<Serie[]>(path.join("series", `${id}.json`), []);
}

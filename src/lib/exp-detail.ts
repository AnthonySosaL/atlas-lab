/** Contrato de public/data/exp_details.json (un objeto por id de experimento). */
export type ExpFilterKey =
  | "is" | "oos1" | "oos2" | "dsr" | "mc" | "costs" | "lag" | "bh" | "wf" | "params" | "logic" | "other";

export type ExpFilter = {
  key: ExpFilterKey;
  pass: boolean | null;
  /** Texto plano (legado) o traducido por idioma. */
  detail: string | { es: string; en: string; pt: string };
};

type L3 = { es: string; en: string; pt: string };

export type ExpDataSource = {
  provider: string;
  instrument: string;
  timeframe: string;
  period: string;
  file: string | null;
};

export type ExpData = {
  sources: ExpDataSource[];
  note?: L3 | null;
  curve_origin: "original" | "regenerated" | "alt_feed" | "none";
  curve_note?: L3 | null;
};

export type ExpDetail = {
  algo: { es: string; en: string; pt: string };
  code: { src: string | null; snippet: string };
  filters: ExpFilter[];
  curve: "series" | "none";
  data?: ExpData;
};

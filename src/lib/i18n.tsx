"use client";

import * as React from "react";

export type Locale = "es" | "en" | "pt";
export const LOCALES: { code: Locale; label: string; flag: string }[] = [
  { code: "es", label: "Español", flag: "ES" },
  { code: "en", label: "English", flag: "EN" },
  { code: "pt", label: "Português", flag: "PT" },
];

/* Solo se traduce la INTERFAZ y el contenido curado. Los datos de los
   experimentos (nombres, descripciones, análisis) quedan en español. */
const DICT: Record<Locale, Record<string, string>> = {
  es: {
    "nav.experiments": "Experimentos",
    "nav.roadmap": "Roadmap",
    "nav.bot": "Bot en vivo",
    "hero.badge": "Laboratorio cuantitativo · código abierto",
    "hero.titleA": "experimentos honestos buscando",
    "hero.titleHi": "alpha de trading retail",
    "hero.subtitle":
      "Validación rigurosa antes de arriesgar un dólar: out-of-sample temporal, señales ejecutables y Deflated Sharpe. Esta es la conclusión —y cómo muere cada ilusión.",
    "stats.experiments": "experimentos",
    "stats.classes": "clases de estrategia",
    "stats.survivedDied": "sobrevivieron / murieron",
    "stats.illusions": "ilusiones cazadas",
    "illusions.title": "Las 6 ilusiones cazadas",
    "illusions.subtitle":
      "Estrategias que parecían desplegables y resultaron espejismos — detectadas antes de arriesgar un dólar.",
    "top.heading": "Top 3 hallazgos",
    "top.subtitle": "lo que más prometió — y su letra pequeña",
    "top.finding": "El hallazgo:",
    "top.caveat": "La letra pequeña:",
    "top.next": "Siguiente investigación:",
    "top.cta": "Ver experimento",
    "exp.heading": "Todos los experimentos",
    "exp.search": "Buscar experimento…",
    "filter.all": "Todos",
    "filter.survived": "Sobrevivió",
    "filter.neutral": "Neutro",
    "filter.died": "Murió",
    "families.all": "todas",
    "status.survived": "sobrevivió",
    "status.died": "murió",
    "status.neutral": "neutro",
    "detail.back": "Volver a experimentos",
    "detail.lesson": "Lección clave",
    "detail.analysis": "Análisis",
    "detail.equity": "Curva de equity",
    "detail.params": "Parámetros",
    "detail.related": "Relacionados · familia",
    "bot.title": "Bot en vivo",
    "bot.badge": "en desarrollo",
    "bot.intro":
      "Una estrategia propia corriendo en vivo sobre una cuenta de práctica. Esta página es una bitácora del proceso — el detalle del sistema se mantiene reservado mientras está en evaluación.",
    "bot.p1t": "En pruebas y desarrollo",
    "bot.p1b": "El sistema corre en una cuenta demo como forward test. Estamos recogiendo datos reales de ejecución antes de cualquier decisión.",
    "bot.p2t": "Riesgo cero",
    "bot.p2b": "Cuenta de práctica, $0 en juego. El objetivo de esta fase es medir comportamiento en vivo, no generar ingresos.",
    "bot.p3t": "Seguimiento continuo",
    "bot.p3b": "El bot rebalancea de forma automática y registra cada paso. Los resultados se evaluarán al cierre del periodo de prueba.",
    "bot.note": "Una reseña de resultados se publicará cuando concluya la fase de pruebas.",
    "roadmap.badge": "Bitácora del laboratorio",
    "roadmap.title": "El camino completo, sin maquillaje",
    "roadmap.subtitle":
      "Cada capítulo es una frontera que probamos y, casi siempre, una ilusión que cazamos. El cementerio de estrategias, en orden.",
    "footer.role": "ingeniero de sistemas · Python · full-stack · IA.",
    "footer.by": "Construido por",
    "footer.talk": "Hablemos",
    "footer.talkSub": "¿Tienes un proyecto en mente o quieres trabajar juntos? Contáctame.",
  },
  en: {
    "nav.experiments": "Experiments",
    "nav.roadmap": "Roadmap",
    "nav.bot": "Live bot",
    "hero.badge": "Quant research lab · open source",
    "hero.titleA": "honest experiments searching for",
    "hero.titleHi": "retail trading alpha",
    "hero.subtitle":
      "Rigorous validation before risking a dollar: temporal out-of-sample, executable signals and Deflated Sharpe. Here's the conclusion —and how every illusion dies.",
    "stats.experiments": "experiments",
    "stats.classes": "strategy classes",
    "stats.survivedDied": "survived / died",
    "stats.illusions": "illusions caught",
    "illusions.title": "The 6 illusions caught",
    "illusions.subtitle":
      "Strategies that looked deployable and turned out to be mirages — caught before risking a dollar.",
    "top.heading": "Top 3 findings",
    "top.subtitle": "what looked most promising — and the fine print",
    "top.finding": "The finding:",
    "top.caveat": "The fine print:",
    "top.next": "Further research:",
    "top.cta": "View experiment",
    "exp.heading": "All experiments",
    "exp.search": "Search experiment…",
    "filter.all": "All",
    "filter.survived": "Survived",
    "filter.neutral": "Neutral",
    "filter.died": "Died",
    "families.all": "all",
    "status.survived": "survived",
    "status.died": "died",
    "status.neutral": "neutral",
    "detail.back": "Back to experiments",
    "detail.lesson": "Key lesson",
    "detail.analysis": "Analysis",
    "detail.equity": "Equity curve",
    "detail.params": "Parameters",
    "detail.related": "Related · family",
    "bot.title": "Live bot",
    "bot.badge": "in development",
    "bot.intro":
      "A proprietary strategy running live on a practice account. This page is a log of the process — the system's details stay private while under evaluation.",
    "bot.p1t": "In testing and development",
    "bot.p1b": "The system runs on a demo account as a forward test. We're collecting real execution data before any decision.",
    "bot.p2t": "Zero risk",
    "bot.p2b": "Practice account, $0 at stake. This phase is about measuring live behavior, not generating income.",
    "bot.p3t": "Continuous tracking",
    "bot.p3b": "The bot rebalances automatically and logs every step. Results will be evaluated at the end of the test period.",
    "bot.note": "A review of results will be published once the testing phase concludes.",
    "roadmap.badge": "Lab journal",
    "roadmap.title": "The full journey, unfiltered",
    "roadmap.subtitle":
      "Each chapter is a frontier we tested and, almost always, an illusion we caught. The strategy graveyard, in order.",
    "footer.role": "systems engineer · Python · full-stack · AI.",
    "footer.by": "Built by",
    "footer.talk": "Let's talk",
    "footer.talkSub": "Got a project in mind or want to work together? Get in touch.",
  },
  pt: {
    "nav.experiments": "Experimentos",
    "nav.roadmap": "Roadmap",
    "nav.bot": "Bot ao vivo",
    "hero.badge": "Laboratório quant · código aberto",
    "hero.titleA": "experimentos honestos em busca de",
    "hero.titleHi": "alpha de trading de varejo",
    "hero.subtitle":
      "Validação rigorosa antes de arriscar um dólar: out-of-sample temporal, sinais executáveis e Deflated Sharpe. Esta é a conclusão —e como cada ilusão morre.",
    "stats.experiments": "experimentos",
    "stats.classes": "classes de estratégia",
    "stats.survivedDied": "sobreviveram / morreram",
    "stats.illusions": "ilusões caçadas",
    "illusions.title": "As 6 ilusões caçadas",
    "illusions.subtitle":
      "Estratégias que pareciam implementáveis e se revelaram miragens — detectadas antes de arriscar um dólar.",
    "top.heading": "Top 3 descobertas",
    "top.subtitle": "o que mais prometeu — e as letras miúdas",
    "top.finding": "A descoberta:",
    "top.caveat": "As letras miúdas:",
    "top.next": "Próxima investigação:",
    "top.cta": "Ver experimento",
    "exp.heading": "Todos os experimentos",
    "exp.search": "Buscar experimento…",
    "filter.all": "Todos",
    "filter.survived": "Sobreviveu",
    "filter.neutral": "Neutro",
    "filter.died": "Morreu",
    "families.all": "todas",
    "status.survived": "sobreviveu",
    "status.died": "morreu",
    "status.neutral": "neutro",
    "detail.back": "Voltar aos experimentos",
    "detail.lesson": "Lição-chave",
    "detail.analysis": "Análise",
    "detail.equity": "Curva de equity",
    "detail.params": "Parâmetros",
    "detail.related": "Relacionados · família",
    "bot.title": "Bot ao vivo",
    "bot.badge": "em desenvolvimento",
    "bot.intro":
      "Uma estratégia própria rodando ao vivo numa conta de prática. Esta página é um diário do processo — os detalhes do sistema ficam reservados enquanto está em avaliação.",
    "bot.p1t": "Em testes e desenvolvimento",
    "bot.p1b": "O sistema roda numa conta demo como forward test. Estamos coletando dados reais de execução antes de qualquer decisão.",
    "bot.p2t": "Risco zero",
    "bot.p2b": "Conta de prática, $0 em jogo. Esta fase é para medir o comportamento ao vivo, não gerar renda.",
    "bot.p3t": "Acompanhamento contínuo",
    "bot.p3b": "O bot rebalanceia automaticamente e registra cada passo. Os resultados serão avaliados ao fim do período de teste.",
    "bot.note": "Uma resenha dos resultados será publicada quando a fase de testes terminar.",
    "roadmap.badge": "Diário do laboratório",
    "roadmap.title": "O caminho completo, sem maquiagem",
    "roadmap.subtitle":
      "Cada capítulo é uma fronteira que testamos e, quase sempre, uma ilusão que caçamos. O cemitério de estratégias, em ordem.",
    "footer.role": "engenheiro de sistemas · Python · full-stack · IA.",
    "footer.by": "Construído por",
    "footer.talk": "Vamos conversar",
    "footer.talkSub": "Tem um projeto em mente ou quer trabalhar junto? Entre em contato.",
  },
};

type Ctx = { locale: Locale; setLocale: (l: Locale) => void; t: (k: string) => string };
const I18nContext = React.createContext<Ctx>({ locale: "es", setLocale: () => {}, t: (k) => k });

export function I18nProvider({ children }: { children: React.ReactNode }) {
  const [locale, setLocaleState] = React.useState<Locale>("es");
  React.useEffect(() => {
    const saved = (typeof window !== "undefined" && localStorage.getItem("atlas-locale")) as Locale | null;
    if (saved && DICT[saved]) setLocaleState(saved);
  }, []);
  const setLocale = (l: Locale) => {
    setLocaleState(l);
    if (typeof window !== "undefined") localStorage.setItem("atlas-locale", l);
    document.documentElement.lang = l;
  };
  const t = React.useCallback((k: string) => DICT[locale][k] ?? DICT.es[k] ?? k, [locale]);
  return <I18nContext.Provider value={{ locale, setLocale, t }}>{children}</I18nContext.Provider>;
}

export const useI18n = () => React.useContext(I18nContext);

/** Texto traducible usable dentro de componentes de servidor. */
export function Tr({ k }: { k: string }) {
  const { t } = useI18n();
  return <>{t(k)}</>;
}

# Plan de videos — canal ATLAS Lab

Fuente única de datos: `public/data/experiments.json` y `public/data/exp_details.json` (91 experimentos, #0–#90).
Regla: ningún número fuera de esos archivos. Cada video termina con "contenido educativo, no es asesoría financiera".

## Formato por tema

| Pieza | Duración | Para qué |
|---|---|---|
| Video largo (16:9) | 8–12 min | Explicar la estrategia, cómo se probó, resultados por filtro y por qué falló o sobrevivió |
| Short (9:16) | 40–55 s | Gancho + resultado + "el video completo está en el canal" |

Un experimento puede dar **varios videos** cuando tiene varias formas o una lección propia (ver columna "Videos").

## Orden de publicación — Fase 1: pestaña Experimentos

### Serie A — "Probé la estrategia de TikTok" (gancho más buscado)
| # | Experimento | Estado | Videos |
|---|---|---|---|
| 85 | TikTok 1 — Breakout del rango previo + retroceso ("71% de aciertos") | murió | 1 largo + 1 short |
| 86 | TikTok 2 — MA200 + vela de alto volumen/rango | murió | 1 + 1 |
| 87 | TikTok 3 — Noticias + Breaker Block (ICT) | neutro | 1 + 1 |
| 88 | TikTok 4 — ORB del Nasdaq 9:30 | neutro | 1 + 1 |
| 89 | TikTok 5 — Candle Range Theory (sweep + FVG) | murió | 1 + 1 |
| 83 | EMAs a favor de tendencia (tier-list de TikTok) — 8 formas | murió | 1 + 1 |
| 84 | Multi-temporalidad — 12 formas | murió | 1 + 1 |
| 90 | ¿Y si las pruebo en ÍNDICES como dicen? | neutro | 1 + 2 shorts (beta vs alpha; B&H gana el doble) |

### Serie B — "Estrategias famosas, puestas a prueba"
| # | Experimento | Estado | Videos |
|---|---|---|---|
| 72 | Connors RSI(2) | murió | 1 + 1 |
| 73 | Faber GTAA (MA200) | neutro | 1 + 1 |
| 74 | Turtle Trading (Donchian) | neutro | 1 + 1 |
| 75 | IBS — Internal Bar Strength | murió | 1 + 1 |
| 76 | Double Seven (Connors) | murió | 1 + 1 |

### Serie C — "El experimento grande"
| # | Experimento | Estado | Videos |
|---|---|---|---|
| 81 | 34,751 estrategias, 0 sobrevivieron | murió | 2 largos (qué es el gauntlet de 5 filtros / por qué el Deflated Sharpe las mata) + 3 shorts |
| 82 | ¿Sirven las 50 mejores para fondeo (FTMO)? | murió | 1 + 1 |

### Serie D — "Machine learning en trading: lo que pasó"
#1–#3, #22–#25 (XGBoost, meta-labeling, HMM, régimen walk-forward). 2 largos + 3 shorts.

### Serie E — "Lo que SÍ sobrevivió: gestión de riesgo"
#9–#12 (simulador prop-firm, risk parity, EV de fondeo, stress test), #52 vol-targeting, #70, #78, #80 Calmar. 3 largos + 4 shorts.

### Serie F — "Anomalías y estacionalidad"
#49, #63, #64, #68, #69, #71 (turn-of-month, overnight, VRP). 2 largos + 3 shorts.

### Serie G — "Construyendo un bot (y por qué murió)"
#13–#21, #26–#40 (bot, filtros macro, kill-switch, veredicto de 40 experimentos). 3 largos + 3 shorts.

Fase 2: pestaña **Laboratorio** (`lab.json`). Fase 3: **Forja** (`forja.json`, `forja_forward.json`). Se planifican cuando termine la fase 1.

## Flujo por video
1. Guion (este repo, `docs/youtube/guiones/`) → **aprobación de Anthony**.
2. Gráficos con los datos reales del experimento (formas, Sharpe IS/OOS1/OOS2, DSR, Monte Carlo, curvas de `series/`).
3. Voz (Anthony o la voz de su programa) + montaje con ffmpeg + subtítulos `.srt`.
4. Miniatura 1280×720 + título, descripción, capítulos y etiquetas.
5. Subida en **privado** por el programa de la API → revisión → público.

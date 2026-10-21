# Auditoría de capital — ¿cuánto habría ganado con $100,000?

Generado de `public/data/series/*.json` (curvas de capital del sitio). Cada curva se reescala a un capital inicial de **$100,000** (resultado = 100,000 × valor final / valor inicial). Sin impuestos ni comisiones extra a las que ya incluya cada experimento.

**Cómo leerlo:** un número alto NO significa que la estrategia sirva. Ver la columna *Ojo*: varias curvas tienen lookahead (refutado en #27), apalancamiento, son brutas sin costos o están solo en muestra.

| # | Estado | Periodo | Estrategia (curva principal) | Neto con $100k | Buy & Hold con $100k | Ojo |
|---|---|---|---|---|---|---|
| 0 | neutro | 2019–2024 | Baseline SMA 20/50 | +$7,888 | −$9,668 |  |
| 1 | murió | 2023–2024 | ML XGBoost triple-barrier v1 | −$36,182 | — |  |
| 2 | murió | 2023–2024 | ML XGBoost + filtro conviccion v2 | −$33,846 | — |  |
| 3 | murió | 2023–2024 | ML Meta-labeling SMA+XGBoost v3 | −$19,037 | — |  |
| 4 | murió | 2019–2024 | Time-Series Momentum diario v4 | −$4,252 | — |  |
| 5 | murió | 2019–2025 | TSMOM cartera 15 activos v5 | −$4,125 | +$26,775 | Sharpe −0.105 tras costos y pierde contra comprar y mantener (Sharpe 0.39); el p-valor bajo era un artefacto d… |
| 6 | murió | 2019–2024 | ORB sesion Londres-NY v6 | −$19,468 | −$9,673 |  |
| 7 | murió | 2019–2024 | Reversion de sesion (fade) v7 | −$22,339 | — |  |
| 8 | murió | 2023–2024 | Meta-labeling reversion sesion v8 | −$4,935 | — |  |
| 9 | sobrevivió | 2019–2025 | Simulador prop-firm (cartera) v9 | +$57,609 | — |  |
| 10 | sobrevivió | 2019–2025 | Risk parity + sizing optimo v10 | +$21,885 | — |  |
| 11 | sobrevivió | 2019–2025 | EV real prop firm (challenge+fondeo) v11 | +$57,609 | — |  |
| 12 | sobrevivió | 2006–2025 | Stress test por regimen v12 | +$105,115 | — |  |
| 13 | murió | 2019–2020 | Bot ATLAS paper-run funded v13 | −$10,056 | — |  |
| 14 | murió | 2019–2020 | Bot ATLAS vol-target paper v14 | −$13,877 | — |  |
| 15 | murió | 2019–2025 | Bot + filtro macro regimen v15 | +$192,009 | — | Usaba el VIX/crédito del cierre del mismo día (lookahead). El experimento #27, con señales rezagadas 1 día, re… |
| 16 | murió | 2014–2025 | Validacion filtro macro multi-crisis v16 | +$267,267 | — | Usaba el VIX/crédito del cierre del mismo día (lookahead). El experimento #27, con señales rezagadas 1 día, re… |
| 17 | murió | 2014–2025 | Dinero real con filtro macro v17 | +$55,935 | — | Valor esperado negativo (−429 USD por intento) y depende del mismo filtro con lookahead refutado en #27.… |
| 18 | murió | 2014–2014 | Rotacion defensiva oro+yen v18 | −$3,604 | — |  |
| 19 | murió | 2014–2025 | Leverage graduado por VIX v19 | +$591,504 | — | Usaba el VIX/crédito del cierre del mismo día (lookahead). El experimento #27, con señales rezagadas 1 día, re… |
| 20 | murió | 2014–2022 | Trend long-short filtrado v20 | +$39,293 | — |  |
| 21 | murió | 2007–2013 | OOS temporal 2007-2013 (anti-overfit) v21 | +$84,462 | — | Usaba el VIX/crédito del cierre del mismo día (lookahead). El experimento #27, con señales rezagadas 1 día, re… |
| 22 | neutro | 2014–2015 | HMM regime detection (IA) v22 | −$10,258 | — | Resultado idéntico a ×3 sin filtro: el HMM no llegó a actuar antes de la ruina (500 días de calentamiento). La… |
| 23 | neutro | 2014–2015 | Regimen supervisado XGB walk-forward v23 | −$10,258 | — | Cifras idénticas a ×3 sin filtro: el modelo nunca redujo la exposición antes de la ruina, así que no prueba qu… |
| 24 | murió | 2014–2015 | Regimen supervisado v2 residual v24 | −$6,929 | — |  |
| 25 | neutro | 2014–2025 | ML sizing con proteccion manual v25 | +$203,840 | — |  |
| 26 | murió | 2014–2025 | Re-entrada panico enfriandose v26 | +$1,227,815 | — | Usaba el VIX/crédito del cierre del mismo día (lookahead). El experimento #27, con señales rezagadas 1 día, re… |
| 27 | murió | 2014–2015 | Prueba de fuego lag-1 re-entrada v27 | −$9,959 | — |  |
| 31 | neutro | 2014–2024 | Filtro reactivo intradia v31 | +$21,644 | — |  |
| 32 | neutro | 2014–2024 | Validacion ejecutable-reactivo v32 | +$21,644 | — | Mismo run que #31 (neutral); pasa solo por 61% de años positivos con umbral 60%, sin Deflated Sharpe (la famil… |
| 33 | neutro | 2014–2024 | Disparo temprano del filtro v33 | +$31,196 | — |  |
| 34 | neutro | 2014–2024 | Graduado VIX<14 ejecutable v34 | +$29,369 | — | Sharpe OOS 2007-2013 de 0.297, por debajo del mínimo 0.30 y peor que la base (0.365).… |
| 35 | murió | 2014–2024 | Curva de tasas como filtro v35 | +$31,196 | — |  |
| 36 | neutro | 2014–2024 | Calidad intrinseca sin reglas prop v36 | +$31,196 | — |  |
| 37 | neutro | 2007–2024 | P(pasar) ejecutable v37 | +$49,364 | — |  |
| 38 | murió | 2007–2024 | Deflated Sharpe del ejecutable v38 | +$49,364 | — |  |
| 39 | murió | 2007–2024 | EV del negocio ejecutable v39 | +$49,364 | — |  |
| 40 | murió | 2007–2024 | VEREDICTO FINAL 40 experimentos v40 | +$49,364 | — |  |
| 42 | murió | 2014–2014 | Carry FX ejecutable v42 | −$10,083 | — |  |
| 43 | murió | 2014–2018 | Carry+Trend combo v43 | −$10,015 | — |  |
| 45 | murió | 2014–2022 | COT contrarian extremos v45 | −$10,219 | — |  |
| 46 | murió | 2014–2016 | Pairs cointegracion v46 | −$10,847 | — |  |
| 47 | murió | 2014–2017 | Stat-arb PCA residual v47 | −$10,076 | — |  |
| 48 | murió | 2014–2015 | Momentum cross-sectional v48 | −$10,236 | — |  |
| 49 | murió | 2014–2015 | Turn-of-month indices v49 | −$11,071 | — |  |
| 50 | murió | 2007–2024 | CIERRE: 11 clases probadas v50 | +$49,364 | — |  |
| 51 | murió | 2020–2025 | ML swing 5d (HGB largo/flat, conviccion 0.55) | +$21,666 | +$55,171 |  |
| 52 | sobrevivió | 2019–2024 | Vol-targeting forward-looking (15% vol, tope  | +$60,839 | — |  |
| 53 | murió | 2020–2025 | Breakout + gate de volatilidad pronosticada | −$14,168 | +$112,904 |  |
| 57 | neutro | 2014–2025 | vol-targeting vs leverage fijo (bot live) | +$5,308 | −$2,755 | Sharpe 0.097 y CAGR +0.4%; el MaxDD mejora solo 0.5 pp y su propio análisis lo considera ~0% ejecutable.… |
| 59 | murió | 2014–2024 | Trend-flat (MA200, flat bajo la media) | +$30,275 | +$23,098 |  |
| 60 | murió | 2014–2024 | Trend + vol-targeting (A2) | +$29,702 | +$23,098 |  |
| 61 | murió | 2014–2024 | B3 exposicion continua por tendencia | +$22,490 | +$23,098 |  |
| 62 | murió | 2007–2024 | B3 continuo MA200 (cesta reducida 8) | −$6,680 | +$2,616 |  |
| 63 | neutro | 2012–2024 | Overnight oro (cierre->apertura) (bruto, sin  | +$27,208 | +$66,979 |  |
| 64 | neutro | 2012–2024 | VRP short-variance (tamano 15% vol) (bruto, s | +$1,624,827 | +$347,885 | Proxy bruto de VRP sin costos de opciones, sin fuera de muestra, DSR ni Monte Carlo (asimetría −16.4). Falta e… |
| 65 | murió | 2012–2024 | Reversion z-score 5d NAS100 (bruto) (bruto, s | +$220,005 | +$764,178 |  |
| 66 | murió | 2012–2024 | Captura de anomalias |z|>2 (bruto) (bruto, si | −$37,344 | +$77,693 |  |
| 67 | murió | 2012–2024 | Lead-lag petroleo->CAD (bruto) (bruto, sin co | −$3,844 | +$36,726 |  |
| 69 | neutro | 2012–2024 | VRP protegido (put 6%, cuesta 12%) (bruto, si | +$780,194 | +$347,885 | Su propio análisis indica que falta el triple test; el costo del put es un supuesto y se eligió el mejor de 4 … |
| 70 | neutro | 2014–2024 | VRP con gestion de riesgo (vol-target 10% + t | +$2,742,858 | — |  |
| 71 | murió | 2012–2024 | Overnight oro neto de costos (2.5 bps/dia) | −$53,695 | +$66,979 |  |
| 72 | murió | 2012–2024 | Connors RSI(2) (indices) | +$26,889 | +$290,064 |  |
| 73 | neutro | 2012–2024 | Faber GTAA (MA200) | +$41,712 | +$92,344 |  |
| 74 | neutro | 2012–2024 | Turtle Donchian 20/10 | +$41,686 | +$92,344 |  |
| 75 | murió | 2012–2024 | IBS (<0.2 entra, >0.7 sale) | +$61,591 | +$290,064 |  |
| 76 | murió | 2012–2024 | Double Seven (Connors) | +$45,736 | +$290,064 |  |
| 77 | murió | 2012–2024 | Regimen adaptativo (ER 20d) | +$2,179 | +$290,064 |  |
| 78 | neutro | 2012–2024 | Turtle (mejor Calmar) | +$41,686 | +$92,344 |  |
| 79 | murió | 2012–2024 | Adaptativo con confirmacion 5d (mejor variant | +$37,060 | +$290,064 |  |
| 80 | neutro | 2012–2024 | Vol-target (B3) indices+oro | +$297,399 | +$286,540 | Beta gestionada sin costos, fuera de muestra ni DSR: rinde igual que comprar y mantener (+8.7% vs +8.6%) y su … |
| 83 | murió | 2007–2024 | EMA-cross 50/200 (cesta 8: 7 FX + oro) | +$13,487 | +$14,407 |  |
| 84 | murió | 2007–2024 | MA200 filtro + RSI4<20 (cesta 8: 7 FX + oro) | +$1,738 | +$14,407 |  |
| 85 | murió | 2007–2024 | MA200 + rangebreak 5d (cesta 8: 7 FX + oro) | −$25,460 | +$14,407 |  |
| 86 | murió | 2007–2024 | MA200 + volumen>2.0x(20) (cesta 8: 7 FX + oro | −$5,692 | +$14,407 |  |
| 89 | murió | 2007–2024 | MA200 + sweep_rev 3d (cesta 8: 7 FX + oro) | −$21,472 | +$14,407 |  |

## Sin curva de capital (no se puede calcular)

- **#28** lag-1 + kill-switch — métricas: {"sobrevive": "False", "causa": "DD acumulado 1a semana"}
- **#29** kill-switch disparo temprano — métricas: {"sobrevive": "False"}
- **#30** kill-switch + leverage bajo — métricas: {"sobrevive": "parcial", "retorno": "demasiado bajo"}
- **#41** tasas FRED (datos de carry) — métricas: {"monedas": 8, "desde": 1956}
- **#44** posicionamiento COT (datos) — métricas: {"años": 40, "fuente": "CFTC"}
- **#54** predicción de volumen y rango — métricas: {"R2_volumen": -0.003, "R2_rango": 0.15}
- **#55** EWMA clásico vs ML (vol) — métricas: {"R2_EWMA": 0.225, "R2_ML": 0.113}
- **#56** sentimiento probado de 4 formas — métricas: {"acc_dir": 0.57, "base_rate": 0.613, "R2_vol_VIX": 0.395, "R2_vol_precio": 0.378}
- **#58** What-if: capital del bot (1x / 2x / vol-target) — métricas: {"1_mes_2x": "-1.0%", "6_meses_2x": "+6.7%", "2020_2x": "+13.1%", "2022_2x": "-17.0%", "costos_6m": "$192"}
- **#68** Estacionalidad (dia de semana, turn-of-month) — métricas: {"turn_of_month": "+5 bps", "resto_del_mes": "+4 bps", "dia_semana": "plano"}
- **#81** Laboratorio automático — 34,751 estrategias con gauntlet de 5 filtros — métricas: {"probadas": 34751, "sobrevivieron": 0, "DSR_max": 0.7, "max_filtros": "4/5", "tilt_RSI": "real pero inutil: 6% exposici
- **#82** ¿Sirven las 50 mejores para FONDEO? (challenge tipo FTMO en 3 meses) — métricas: {"P_pasar_x1": "0.0%", "P_pasar_x5_promedio": "0.4%", "mejor_x5": "RSI5<18: 3.5%", "mejor_paso": 21, "mejor_revento": 28
- **#87** TikTok 3 — Noticias + Breaker Block (ICT) — métricas: {"testeable": "no", "relacionado": "#56 sentimiento (falló)"}
- **#88** TikTok 4 — ORB (Opening Range Breakout) del Nasdaq 9:30 — métricas: {"ORB_intradia": "#6: Sharpe -0.96", "breakout_daily": "pierde (#85)", "sobrevivieron": 0}
- **#90** ¿Cambia si pruebo en ÍNDICES (lo que dicen los influencers)? Nasdaq/SP500/DAX/FT — métricas: {"BuyHold_indices_12-24": "+$29,368 (Sharpe 0.68)", "Tendencia_MA_EMA_Momentum": "+$6k a +$15k — BETA, pierden vs B&H", 

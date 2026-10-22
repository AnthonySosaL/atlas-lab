# Tabla de capital — ¿cuánto habría ganado con $100,000?

Generado de `public/data/series/*.json` (curvas de capital del sitio): 81 de 91 experimentos tienen curva. Cada curva se reescala a un capital inicial de **$100,000** (resultado = 100,000 × valor final / valor inicial; la curva «Sin estrategia (comprar y esperar)» se mide en las mismas fechas que la estrategia, igual que la tarjeta «Con tu capital»). Sin impuestos ni comisiones extra a las que ya incluya cada experimento.

Totales de los 91 experimentos: 1 sirvió (#52), 64 murieron y 26 quedaron en parcial o no concluyente.

**Cómo leerlo:** un número alto NO significa que la estrategia sirva. Ver la columna *Ojo*: varias curvas tienen información del mismo día (refutado en #27), apalancamiento, son brutas sin costos, están solo en muestra o usan la salida medida del día de disparo (φ = 0.90–0.94). Las cuentas cortadas por las reglas de la prop firm terminan en el día del corte.

| # | Estado | Periodo | Estrategia (curva principal) | Neto con $100k | Sin estrategia (comprar y esperar) con $100k | Ojo |
|---|---|---|---|---|---|---|
| 0 | parcial | 2019–2024 | Baseline SMA 20/50 | +$7,888 | −$9,668 |  |
| 1 | murió | 2023–2024 | ML XGBoost triple-barrier v1 | −$36,182 | −$2,237 |  |
| 2 | murió | 2023–2024 | ML XGBoost + filtro conviccion v2 | −$33,846 | −$2,237 |  |
| 3 | murió | 2023–2024 | ML Meta-labeling SMA+XGBoost v3 | −$19,037 | −$2,237 |  |
| 4 | murió | 2019–2024 | Time-Series Momentum diario v4 | −$4,252 | −$9,673 |  |
| 5 | murió | 2019–2025 | TSMOM cartera 15 activos v5 | −$4,125 | +$26,775 | Sharpe −0.10 tras costos frente a 0.40 de la cesta sin estrategia; el p-valor bajo era un artefacto de la rotación. |
| 6 | murió | 2019–2024 | ORB sesion Londres-NY v6 | −$19,468 | −$8,482 |  |
| 7 | murió | 2019–2024 | Reversion de sesion (fade) v7 | −$22,339 | −$8,482 |  |
| 8 | murió | 2023–2024 | Meta-labeling reversion sesion v8 | −$4,935 | −$3,756 |  |
| 9 | parcial | 2019–2025 | Simulador prop-firm (cartera) v9 | +$57,609 | +$51,747 | Remuestreo (Monte Carlo) del periodo alcista 2019–2024, sin costos; a ×4 revienta el 50.4% de las veces. |
| 10 | parcial | 2019–2025 | Risk parity + sizing optimo v10 | +$21,885 | +$51,747 | Remuestreo del periodo alcista, sin costos; no mejora a los pesos iguales de #9. |
| 11 | parcial | 2019–2025 | EV real prop firm (challenge+fondeo) v11 | +$57,609 | +$51,747 | Valor esperado simulado (+$5,919 por intento) que sale solo de la subida de la cesta; el camino real (#13) reventó en el COVID. |
| 12 | parcial | 2006–2025 | Stress test por regimen v12 | +$105,115 | +$45,601 | Valor esperado simulado; el remuestreo subestima los drawdowns largos (en el COVID el camino real reventó, #13). |
| 13 | murió | 2019–2020 | Bot ATLAS paper-run funded v13 | −$10,056 | −$11,558 | La cuenta se corta el 12-mar-2020 (COVID) por el límite de drawdown de 10%. |
| 14 | murió | 2019–2020 | Bot ATLAS vol-target paper v14 | −$13,877 | −$11,558 | La cuenta se corta el 12-mar-2020 (COVID) por la pérdida diaria. |
| 15 | murió | 2019–2025 | Bot + filtro macro regimen v15 | +$192,009 | +$40,488 | Usa el VIX/crédito del cierre del mismo día (información que un bot real no tiene); con las señales de ayer (#27) la base muere. |
| 16 | murió | 2014–2025 | Validacion filtro macro multi-crisis v16 | +$267,267 | +$59,039 | Usa el VIX/crédito del cierre del mismo día (información que un bot real no tiene); con las señales de ayer (#27) la base muere. |
| 17 | murió | 2014–2025 | Dinero real con filtro macro v17 | +$55,935 | +$59,039 | Valor esperado de −$429 por intento; depende del mismo filtro con información del mismo día. |
| 18 | murió | 2014–2014 | Rotacion defensiva oro+yen v18 | −$3,604 | −$767 | Solo 24 días: la cuenta se corta el 31-oct-2014. |
| 19 | murió | 2014–2025 | Leverage graduado por VIX v19 | +$591,504 | +$59,039 | Usa el VIX/crédito del cierre del mismo día (información que un bot real no tiene); con las señales de ayer (#27) la base muere. |
| 20 | murió | 2014–2022 | Trend long-short filtrado v20 | +$39,293 | +$23,511 | La cuenta se corta el 4-nov-2022 por una pérdida diaria de −5.2%. |
| 21 | murió | 2007–2013 | OOS temporal 2007-2013 (anti-overfit) v21 | +$84,462 | +$6,196 | Usa el VIX/crédito del cierre del mismo día (información que un bot real no tiene); con las señales de ayer (#27) la base muere. |
| 22 | no concluyente | 2014–2015 | HMM regime detection (IA) v22 | −$10,258 | −$5,776 | Resultado idéntico a ×3 sin filtro: el HMM seguía en su calentamiento cuando la cuenta reventó. |
| 23 | no concluyente | 2014–2015 | Regimen supervisado XGB walk-forward v23 | −$10,258 | −$5,776 | Cifras idénticas a ×3 sin filtro: el modelo nunca redujo la exposición antes de que la cuenta reventara. |
| 24 | murió | 2014–2015 | Regimen supervisado v2 residual v24 | −$6,929 | −$6,370 |  |
| 25 | murió | 2014–2025 | ML sizing con proteccion manual v25 | +$203,840 | +$59,039 | Su Sharpe depende del filtro con información del mismo día y ni así mejora al ×3 fijo. |
| 26 | murió | 2014–2025 | Re-entrada panico enfriandose v26 | +$1,227,815 | +$59,039 | Usa el VIX/crédito del cierre del mismo día (información que un bot real no tiene); con las señales de ayer (#27) la base muere. |
| 27 | murió | 2014–2015 | Prueba de fuego lag-1 re-entrada v27 | −$9,959 | −$4,428 | Cuenta cortada el 12-jul-2015: con las señales de ayer la re-entrada y la base filtrada mueren. |
| 28 | murió | 2014–2015 | Ejecutable: lag1+killswitch grid v28 | −$10,814 | — | Curva con ×3 cortada el 29-jun-2015; ningún apalancamiento sobrevive en ambos periodos. |
| 29 | murió | 2014–2015 | Sensibilidad kill-switch v29 | −$11,493 | — | Con disparo temprano (−2% o −2.5%) tampoco sobrevive ningún periodo. |
| 31 | parcial | 2014–2024 | Filtro reactivo intradia v31 | +$4,155 | +$58,879 | Salida del día de disparo medida con datos horarios (φ = 0.90: el bot evita solo ~10% del movimiento de ese día); el ×1.5 da Sharpe 0.09 y con ×2 la cuenta muere el 11-nov-2016. |
| 32 | parcial | 2014–2024 | Validacion ejecutable-reactivo v32 | +$4,155 | +$58,879 | Misma cartera que #31 (año por año); φ medido 0.90 (el bot evita solo ~10% del movimiento del día de salida); 10 de 18 años positivos (56%). |
| 33 | murió | 2014–2016 | Disparo temprano del filtro v33 | −$10,642 | −$5,766 | Base ×2 con φ medido 0.94: la cuenta se corta el 11-nov-2016 (−10.6% desde el capital inicial); ninguna de las 6 combinaciones sobrevive 2014–2024. |
| 34 | murió | 2014–2016 | Graduado VIX<14 ejecutable v34 | −$10,178 | −$4,698 | ×2.5 en calma con φ medido 0.94: la cuenta se corta el 10-nov-2016 (−10.2% desde el capital inicial); ×3 y ×4 también mueren. |
| 35 | murió | 2014–2016 | Curva de tasas como filtro v35 | −$10,368 | −$5,766 | Base ×2 con las señales de ayer: la cuenta se corta el 11-nov-2016 (−10.4% desde el capital inicial). |
| 36 | murió | 2014–2024 | Calidad intrinseca sin reglas prop v36 | −$6,094 | +$58,879 | ×2 con las señales de ayer y sin reglas de prop firm (2014–2024): Sharpe −0.04. |
| 37 | parcial | 2007–2024 | P(pasar) ejecutable v37 | −$7,102 | +$68,723 | Cartera ×2 con las señales de ayer (el día del disparo se opera completo), 2007–2024: −7.1% con Sharpe −0.03. |
| 38 | murió | 2007–2024 | Deflated Sharpe del ejecutable v38 | −$7,102 | +$68,723 | Cartera ×2 con las señales de ayer (el día del disparo se opera completo), 2007–2024: −7.1% con Sharpe −0.03. Deflated Sharpe 0.010. |
| 39 | murió | 2007–2024 | EV del negocio ejecutable v39 | −$7,102 | +$68,723 | Cartera ×2 con las señales de ayer (el día del disparo se opera completo), 2007–2024: −7.1% con Sharpe −0.03. Valor esperado −$500 por intento. |
| 40 | murió | 2007–2024 | VEREDICTO FINAL 40 experimentos v40 | −$7,102 | +$68,723 | Cartera ×2 con las señales de ayer (el día del disparo se opera completo), 2007–2024: −7.1% con Sharpe −0.03. |
| 42 | murió | 2014–2014 | Carry FX ejecutable v42 | −$9,924 | −$43 | Carry puro ×2 con el interés del carry sumado: la cuenta se corta el 15-dic-2014 (256 días). |
| 43 | murió | 2014–2017 | Carry+Trend combo v43 | −$10,098 | −$4,422 | Incluye el interés del carry; con la salida medida del día de disparo (φ = 0.94) la cuenta se corta el 25-ene-2017 (917 días, Sharpe −0.63). |
| 45 | murió | 2014–2022 | COT contrarian extremos v45 | −$10,219 | −$5,266 |  |
| 46 | murió | 2014–2016 | Pairs cointegracion v46 | −$10,847 | −$11,854 |  |
| 47 | murió | 2014–2017 | Stat-arb PCA residual v47 | −$10,076 | −$99 |  |
| 48 | murió | 2014–2015 | Momentum cross-sectional v48 | −$10,236 | −$3,608 |  |
| 49 | murió | 2014–2015 | Turn-of-month indices v49 | −$11,071 | +$11,000 |  |
| 50 | murió | 2007–2024 | CIERRE: 11 clases probadas v50 | −$7,102 | +$68,723 | Cartera ×2 con las señales de ayer (el día del disparo se opera completo), 2007–2024: −7.1% con Sharpe −0.03. Deflated Sharpe 0.010. |
| 51 | murió | 2020–2025 | ML swing 5d (HGB largo/flat, conviccion 0.55) | +$21,666 | +$55,171 | Acierto de dirección 51.6% (casi azar); Sharpe 0.15 neto de costos frente a 0.37 sin estrategia. |
| 52 | sirvió | 2020–2024 | Vol-targeting forward-looking (15% vol, tope 4x) | +$60,839 | +$129,383 | Desde el 18-mar-2020: controla riesgo (drawdown −19.2% frente a −40.3% del ×2 fijo; Sharpe 0.79 frente a 0.93), no genera ganancia extra. La referencia es la cesta equiponderada a 1x. |
| 53 | murió | 2020–2025 | Breakout + gate de volatilidad pronosticada | −$14,168 | +$112,904 |  |
| 57 | parcial | 2014–2025 | Vol-targeting (apalancamiento dinámico, media 2.0) | +$5,308 | +$24,173 | Sharpe 0.10 y +0.5% anual; el drawdown mejora solo 0.5 pp (−17.8% → −17.3%). Referencia: la misma cesta a 1x (Sharpe 0.38). |
| 58 | parcial | 2020–2020 | Bot x2 · COVID 2020 | +$13,149 | — | Escenario del COVID 2020 con ×2; las otras curvas son el último mes, los últimos 6 meses y el mercado bajista de 2022. |
| 59 | murió | 2014–2024 | Trend-flat (MA200, flat bajo la media) | +$30,275 | +$23,098 |  |
| 60 | murió | 2014–2024 | Trend + vol-targeting (A2) | +$29,702 | +$23,098 |  |
| 61 | murió | 2014–2024 | B3 exposicion continua por tendencia | +$22,490 | +$23,098 |  |
| 62 | murió | 2007–2024 | B3 continuo MA200 (cesta reducida 8) | −$6,680 | +$2,616 |  |
| 63 | no concluyente | 2012–2024 | Overnight oro (cierre->apertura) (bruto, sin costos) | +$27,208 | +$66,979 | Bruto, sin costos ni prueba fuera de muestra; el tramo nocturno puede ser un artefacto del rollover. |
| 64 | no concluyente | 2012–2024 | VRP short-variance (tamano 15% vol) (bruto, sin costos) | +$1,624,827 | +$347,885 | Proxy bruto sin costos de opciones ni prueba fuera de muestra; Sharpe inestable entre periodos y asimetría −16.4. |
| 65 | murió | 2012–2024 | Reversion z-score 5d NAS100 (bruto) (bruto, sin costos) | +$220,005 | +$764,178 | Bruto, sin costos. |
| 66 | murió | 2012–2024 | Captura de anomalias /z/>2 (bruto) (bruto, sin costos) | −$37,344 | +$77,693 | Bruto, sin costos. |
| 67 | murió | 2012–2024 | Lead-lag petroleo->CAD (bruto) (bruto, sin costos) | −$3,844 | +$36,726 | Bruto, sin costos. |
| 69 | parcial | 2012–2024 | VRP protegido (put 6%, cuesta 12%) (bruto, sin costos) | +$780,194 | +$347,885 | El costo del put es un supuesto; falta el triple test con datos de opciones reales. |
| 70 | parcial | 2014–2024 | VRP con gestion de riesgo (vol-target 10% + throttle DD) (bruto, sin costos) | +$2,742,858 | +$221,217 |  |
| 71 | murió | 2012–2024 | Overnight oro neto de costos (2.5 bps/dia) | −$53,695 | +$66,979 | Oro neto de costos: −5.8% al año (Sharpe −3.11). |
| 72 | murió | 2012–2024 | Connors RSI(2), variante de salida rápida (índices) | +$26,889 | +$290,064 | Variante de salida rápida: Sharpe 0.48 fuera de muestra frente a 0.68 de comprar y esperar los 4 índices. |
| 73 | parcial | 2012–2024 | Faber GTAA (MA200) | +$41,712 | +$92,344 | Recorta el drawdown (−10.2% frente a −29.8%) pero no gana a comprar y esperar en retorno. |
| 74 | parcial | 2012–2024 | Turtle Donchian 20/10 | +$41,686 | +$92,344 | Sharpe 0.75 fuera de muestra pero solo 0.21 en 2012–2018; +32.8% frente a +70.8% de comprar y esperar. |
| 75 | murió | 2012–2024 | IBS (<0.2 entra, >0.7 sale) | +$61,591 | +$290,064 |  |
| 76 | murió | 2012–2024 | Double Seven (Connors) | +$45,736 | +$290,064 |  |
| 77 | murió | 2012–2024 | Regimen adaptativo (ER 20d) | +$2,179 | +$290,064 |  |
| 78 | parcial | 2012–2024 | Turtle (mejor Calmar) | +$41,686 | +$92,344 | Mejor Calmar que comprar y esperar, pero retirando 4% al año termina más bajo ($37,864 frente a $56,401). |
| 79 | murió | 2012–2024 | Adaptativo con confirmacion 5d (mejor variante) | +$37,060 | +$290,064 |  |
| 80 | parcial | 2012–2024 | Exposición por tendencia (B3, hasta 2x) índices+oro | +$297,399 | +$286,540 | Beta gestionada: +11.2% frente a +11.0% anual con drawdown −26% frente a −31%; sin costos ni prueba fuera de muestra. |
| 83 | murió | 2007–2024 | EMA-cross 50/200 (cesta 8: 7 FX + oro) | +$13,487 | +$14,407 |  |
| 84 | murió | 2007–2024 | MA200 filtro + RSI4<20 (cesta 8: 7 FX + oro) | +$1,738 | +$14,407 |  |
| 85 | murió | 2007–2024 | MA200 + rangebreak 5d (cesta 8: 7 FX + oro) | −$25,460 | +$14,407 |  |
| 86 | murió | 2007–2024 | MA200 + volumen>2.0x(20) (cesta 8: 7 FX + oro) | −$5,692 | +$14,407 |  |
| 88 | murió | 2012–2026 | ORB del video: rango de la vela de las 9:30, objetivo 1:3 (3 bps por lado) | −$77,076 | +$1,102,826 | Versión del video; la referencia es comprar y esperar el Nasdaq 100 (2012–2026). Sin costos la versión del video da −0.35 en 2014–2020. |
| 89 | murió | 2007–2024 | MA200 + sweep_rev 3d (cesta 8: 7 FX + oro) | −$21,472 | +$14,407 |  |
| 90 | parcial | 2012–2024 | Tendencia: cruce de medias EMA 50/200 en 4 índices | +$148,136 | +$290,064 | Sobre $10,000 de la ficha: +$14,814 la mejor tendencia y +$29,368 comprar y esperar; aquí la referencia se mide en las fechas de la curva. |

## Sin curva de capital (no se puede calcular)

- **#30** Interruptor de emergencia + apalancamiento bajo — métricas: {"sobrevive": "parcial", "retorno": "demasiado bajo"}
- **#41** Tasas de FRED (datos de carry) — métricas: {"monedas": 8, "desde (la más antigua)": 1956, "desde (las 8 juntas)": 2002}
- **#44** Posicionamiento COT (datos) — métricas: {"años": 40, "fuente": "CFTC", "pares con historia antes de 2022": 6}
- **#54** Predicción de volumen y rango — métricas: {"R2_volumen": -0.003, "R2_rango": 0.15}
- **#55** EWMA clásico vs. machine learning (volatilidad) — métricas: {"R2_EWMA": 0.175, "R2_ML": 0.113}
- **#56** Sentimiento probado de 4 formas — métricas: {"acc_dir": 0.57, "base_rate": 0.613, "R2_vol_VIX": 0.395, "R2_vol_precio": 0.378}
- **#68** Estacionalidad (día de la semana, cambio de mes) — métricas: {"turn_of_month": "+5 bps", "resto_del_mes": "+4 bps", "dia_semana": "plano"}
- **#81** Laboratorio automático — 33,363 estrategias probadas con 5 filtros — métricas: {"probadas": 33363, "sin_operar": 1388, "sobrevivieron": 0, "DSR_max": 0.31, "max_filtros": "4/5", "tilt_RSI": "real pero inutil: 7% exposicion, ~0.4%/año, pierde vs B&H", "DSR_contador": "global (33,363 intentos)", "mejores_4d...
- **#82** ¿Sirven las 50 mejores para fondeo? (desafío tipo FTMO en 3 meses) — métricas: {"P_pasar_x1": "0.0%", "P_pasar_x5_promedio": "0.4%", "mejor_x5": "RSI5<18: 3.5%", "mejor_paso": 21, "mejor_revento": 28, "timeout_x5": "99%"}
- **#87** TikTok 3 — Noticias + Breaker Block (ICT) — métricas: {"testeable": "no", "relacionado": "#56 sentimiento (falló)"}

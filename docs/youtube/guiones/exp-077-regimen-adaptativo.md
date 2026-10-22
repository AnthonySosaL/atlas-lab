# Experimento #77 — Régimen adaptativo (reversión en rango, tendencia en tendencia)

Estado del guion: **BORRADOR — pendiente de aprobación**
Estado del experimento: **murió** (no sirvió: la versión adaptativa rinde peor que usar una sola estrategia; comprar y esperar le gana a todo) · Serie: no figura en plan-series.md; propuesta Serie A (es la tesis de un TikTok) como pieza 1 de 2 junto al #79 · 1 largo + 1 Short
Datos usados: `experiments.json` (v=77: kpis, metrics, verdict, analysis, market, period), `exp_details.json` (extra-v77: algo, code, filters), `series/extra-v77.json` (1.ª curva = régimen adaptativo; 2.ª = «Sin estrategia»), tabla «Con tu capital» de `docs/youtube`.
Producción (CLAUDE.md del canal): b-roll real detrás de cada escena con overlay oscuro 0.6, Ken Burns alternando in/out, subtítulos karaoke en MAYÚSCULAS con palabras clave en rojo, un dato visual por escena, golpe de bajo + sacudida solo en 1–2 momentos. Colores: rojo `#e11d2a`, verde `#22c55e`, fondo `#09090b`. Cifras en dígitos aquí; en el campo `tts` del JSON, en palabras.

## Títulos (3 opciones)
1. «Mide el régimen y adapta»: lo probé en 4 índices (49 caracteres)
2. Adaptar al mercado: Sharpe 0.37 contra 0.59 sin adaptar
3. Mi detector marca tendencia el 27% de los días: ¿adaptar sirve?

## Miniatura (pensada para el título 1)
Fondo `#09090b`, dividido en dos: flecha ↗ «tendencia» a la izquierda y línea ↔ «rango» a la derecha. En el centro, «0.37» en rojo grande con «<» y «0.59» en verde. Texto: «ADAPTAR = PEOR» (2 palabras + símbolo). Logo ATLAS arriba a la derecha.

---

## VIDEO LARGO (16:9, ≈ 6 min)

**[0:00 — Gancho]** (pantalla: tres barras de Sharpe)
Un TikTok dice algo que suena a pura lógica: ninguna estrategia sirve siempre, así que mide el régimen del mercado y adapta. Tendencia cuando hay tendencia, reversión cuando está en rango. Lo probé en cuatro índices. Con datos que nunca vio, la versión adaptativa dio un Sharpe de 0.37. Usar solo tendencia, sin adaptar nada, dio 0.59. Y comprar y esperar, 0.68.
BOCETO: tres barras de altura creciente (adaptativa 0.37 roja, solo tendencia 0.59 blanca, comprar y esperar 0.68 verde de referencia), texto «Sharpe fuera de muestra». kb=in.

**[0:40 — La idea]** (pantalla: dos mini-gráficos, uno en línea recta y otro de lado)
Régimen es el «modo» del mercado. A veces avanza en línea recta, sube o baja: tendencia. A veces se mueve de lado: rango. En tendencia conviene seguir la dirección; en rango, comprar las caídas y vender las subidas, que se llama reversión a la media. El TikTok reparte el tiempo en más o menos 80% rango y 20% tendencia. Yo medí 27% de días en tendencia, así que el diagnóstico es razonable.
BOCETO: dos esquemas ilustrativos (rotulados «ilustración»): flecha diagonal vs zigzag horizontal. Barra de 100 días con 27% en verde («días en tendencia, medido»).

**[1:40 — Cómo lo probé]** (pantalla: el detector y las dos reglas)
Para saber el modo uso el Efficiency Ratio de Kaufman a 20 días. Compara cuánto avanzó el precio en línea recta con cuánto se movió en total: cerca de 1 es tendencia limpia, cerca de 0 es ruido. Si pasa de 0.35, es tendencia y compro cuando el cierre está sobre su media de 50 días. Si no, es rango: compro cuando el RSI de 2 días, que mide cuán rápido bajó el precio, cae bajo 10, y vendo cuando pasa de 70. El régimen va rezagado 2 días en total, uno al calcular la señal y otro al ejecutar la posición, para no usar información del futuro. Cuatro índices: S&P 500, Nasdaq 100, DAX y FTSE 100. Costo de 3 puntos básicos. 2012–2018 de prueba y 2019–2024 fuera de muestra, datos que la estrategia no vio. Comparo contra usar siempre una sola estrategia y contra comprar y esperar. No apliqué Deflated Sharpe ni Monte Carlo.
BOCETO: diagrama de flujo con `exp_details.code`: «ER > 0.35 → tendencia (cierre > MA50)» / «si no → rango (RSI(2) < 10 compra, > 70 sale)». Checklist: ✓ costos 3 bps, ✓ rezago, «DSR y Monte Carlo: no aplicado» en gris.

**[3:00 — Resultados]** (pantalla: tabla animada)
En 2012–2018 la adaptativa tiene un Sharpe de −0.27: negativo, pierde. Solo tendencia, 0.02. Fuera de muestra, la adaptativa mejora a 0.37, pasa el umbral de 0.30, pero queda por debajo de solo tendencia, 0.59. Y comprar y esperar, con 0.68, supera a todas.
| | 2012–2018 | 2019–2024 (fuera de muestra) |
|---|---|---|
| Adaptativa | −0.27 | 0.37 |
| Solo tendencia | 0.02 | 0.59 |
| Comprar y esperar | 0.68 | 0.68 |
BOCETO: tabla fila a fila; −0.27 en rojo. Checklist: ✗ en muestra (−0.27 < 0.13), ✓ fuera de muestra (0.37 > 0.30), ✗ comprar y esperar le gana, ✗ peor que una sola estrategia (0.37 < 0.59). Golpe de bajo en el último ✗.

**[4:10 — Por qué falla]** (pantalla: precio con el régimen pintado y desfasado)
El detector llega tarde: para cuando mide «tendencia», el régimen ya cambió. Es el mismo muro de detección que encontré en los experimentos 59 al 62: medir el régimen con datos del pasado avisa cuando ya pasó. El TikTok tenía razón en el diagnóstico: hay regímenes. No en la solución.
BOCETO: línea de precio con franjas verde (tendencia) y gris (rango); una segunda franja, la que detecta el algoritmo, aparece desplazada a la derecha. Texto: «Detecta cuando ya cambió». kb=out.

**[5:00 — Con tu capital]** (pantalla: tarjeta de capital)
Con 100,000 dólares entre 2012 y 2024 en esos cuatro índices, el régimen adaptativo gana 2,179. Comprar y esperar gana 290,064. Con 10,000 dólares serían unos +218 contra +29,006. Es lo que pasó, no una promesa.
BOCETO: curvas reales de `series/extra-v77.json`: adaptativa casi plana en verde pálido, «Sin estrategia» subiendo en blanco; contadores finales.

**[5:30 — Conclusión y cierre]**
Medir el régimen suena sensato, pero el detector llega tarde y la adaptación rinde menos que no adaptar. No sirvió. Todos los datos en atlas-lab-one.vercel.app, experimento 77. Contenido educativo, no es asesoría financiera. El trading no se promete: se prueba.

---

## SHORT (9:16, ≈ 45 s)

**[0-3 s]** «Adaptar la estrategia al mercado dio 0.37. No adaptar, 0.59.»
BOCETO: dos números gigantes, 0.37 rojo y 0.59 verde, sobre b-roll de gráfico de velas (kb=in). Texto: «Sharpe fuera de muestra».

**[3-14 s]** «Un TikTok dice: mide el régimen del mercado y adapta. Tendencia cuando hay tendencia, reversión cuando está en rango. Lo probé en cuatro índices, con costos.»
BOCETO: dos esquemas (flecha ↗ y zigzag ↔) alternando; ticker arriba (kb=out).

**[14-30 s]** «El Sharpe mide ganancia por unidad de riesgo. La adaptativa: −0.27 en 2012–2018 y 0.37 con datos nuevos. Solo tendencia: 0.59. Comprar y esperar: 0.68.»
BOCETO: tabla de tres filas animada; −0.27 en rojo; golpe de bajo cuando aparece 0.68.

**[30-45 s]** «El detector llega tarde: cuando mide tendencia, el régimen ya cambió. El video completo está en el canal. Adaptar al mercado… dio peor que no adaptar.»
BOCETO: franja de régimen desfasada; texto final «Video completo en el canal» + «No es asesoría financiera · El trading no se promete: se prueba». Loop: «dio peor que no adaptar» vuelve al 0.37 vs 0.59 del inicio.

---

## Descripción de YouTube
Un TikTok dice «mide el régimen y adapta»: tendencia cuando hay tendencia, reversión cuando hay rango. Lo probé en S&P 500, Nasdaq 100, DAX y FTSE 100 (2012–2024) con costos: la versión adaptativa da un Sharpe de 0.37 fuera de muestra, contra 0.59 de usar solo tendencia y 0.68 de comprar y esperar.
Datos completos: https://atlas-lab-one.vercel.app (experimento #77)
Contenido educativo. No es asesoría financiera ni recomendación de inversión.

## Capítulos
0:00 Gancho · 0:40 La idea · 1:40 Cómo lo probé · 3:00 Resultados · 4:10 Por qué falla · 5:00 Con tu capital · 5:30 Conclusión

## Etiquetas
régimen de mercado, estrategia adaptativa, efficiency ratio, reversión a la media, seguimiento de tendencia, backtest, sharpe ratio, fuera de muestra, tiktok trading, índices bursátiles, atlas lab, trading con datos

## Rúbrica (autoevaluación, 1–5)
| Pieza | hook_0_3s | ritmo | promesa_cumplida | potencial_loop | claridad_no_traders | honestidad_atlas | audio | cta | Promedio |
|---|---|---|---|---|---|---|---|---|---|
| Largo | 4 | 4 | 5 | 4 | 4 | 5 | 4 | 4 | 4.3 |
| Short | 4 | 4 | 5 | 5 | 4 | 5 | 4 | 4 | 4.4 |

Hook ≥ 4 ✓ · honestidad 5 ✓. Punto débil: el hook depende de entender «Sharpe»; el Short lo explica en una frase a los 14 s.

## Otros temas de este experimento
- Tema 1 (este archivo): `exp-077-regimen-adaptativo.md` — Régimen adaptativo (reversión en rango, tendencia en tendencia)
- Tema 2: `exp-077-t2-trece-anos-2179-dolares.md` — Trece años para ganar $2,179 (la estrategia adaptativa con tu capital)
- Tema 3: `exp-077-t3-27-por-ciento-en-tendencia.md` — ¿Cuánto tiempo está el mercado en tendencia? (27% de los días, medido en cuatro índices)

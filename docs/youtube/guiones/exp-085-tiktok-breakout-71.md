# Experimento #85 — TikTok 1: ruptura del rango del día previo + retroceso («71% de aciertos»)

Estado del guion: **BORRADOR — pendiente de aprobación**
Estado del experimento: **murió** (las 6 formas del núcleo diario pierden; mejor Sharpe 2014–2020 −0.54, peor −1.58; 0 de 5 filtros) · Serie A — «Probé la estrategia de TikTok» (plan-series.md; relacionado con el #90) · 1 largo + 1 Short
Datos usados: `experiments.json` (v=85: kpis, metrics, forms, verdict, analysis, market, period), `exp_details.json` (extra-v85: algo, code, filters), `series/extra-v85.json` (1.ª curva = «MA200 + rangebreak 5d», cesta de 8; 2.ª = «Sin estrategia»), tabla «Con tu capital» de `docs/youtube`; cifras del #90 para la comparación en índices.
Producción (CLAUDE.md del canal): b-roll real detrás de cada escena con overlay oscuro 0.6, Ken Burns alternando in/out, subtítulos karaoke en MAYÚSCULAS con palabras clave en rojo, un dato visual por escena, golpe de bajo + sacudida solo en 1–2 momentos. Colores: rojo `#e11d2a`, verde `#22c55e`, fondo `#09090b`. Cifras en dígitos aquí; en el campo `tts` del JSON, en palabras.

## Títulos (3 opciones)
1. La estrategia de TikTok del 71% de aciertos: 0 de 6 pasan
2. ¿Funciona romper el máximo de ayer? 6 variantes, todas pierden
3. 71% de aciertos prometidos: el núcleo, probado de 2007 a 2024

## Miniatura (pensada para el título 1)
Fondo negro `#09090b`. Texto gigante en rojo: «−$25,460», con la línea pequeña «con $100,000» debajo. En una esquina, «71%» en blanco tachado con una raya roja. Logo ATLAS arriba a la derecha.

---

## VIDEO LARGO (16:9, ≈ 8 min)

**[0:00 — Gancho]** (pantalla: «71% de aciertos» en grande)
En TikTok circula una estrategia que promete un 71% de aciertos: romper el rango del día anterior, esperar el retroceso y entrar. Probé su núcleo con datos de 2007 a 2024 y con los mismos cinco filtros que uso para todo en ATLAS Lab. Las seis variantes pierden. Con 100,000 dólares, la de mejor Sharpe en el periodo de diseño pierde 25,460. Spoiler: no es lo que parece.
BOCETO: «71%» blanco que se tacha con una raya roja; después, la curva real de `series/extra-v85.json` (verde sobre rojo, cayendo) y el contador «−$25,460». kb=in.

**[0:35 — La estrategia, tal como la cuentan]** (pantalla: dibujo del rango previo, máximo y mínimo marcados)
La versión del video, atribuida a Carl Ericsson y ProRealAlgos, es así. Uno: marcas el máximo y el mínimo del día anterior. Dos: en gráficos de 15 minutos esperas un cierre claro fuera de ese rango. Tres: esperas que el precio vuelva a tocar el nivel. Cuatro: en gráficos de 5 minutos buscas una vela envolvente o un martillo. Cinco: entras con stop debajo del patrón y objetivo de 1 a 3.
BOCETO: gráfico de velas esquemático (rotulado «ilustración») con las cinco etapas apareciendo numeradas sobre el rango del día previo (líneas de máximo y mínimo). kb=out.

**[1:50 — Qué probé (y qué no)]** (pantalla: texto en dos columnas, «probado» y «no probado»)
Seamos honestos: la parte del retroceso y de la vela en 5 minutos es intradía y discrecional, depende de cómo la mire cada persona, y no se puede mecanizar. Lo que sí se puede probar es su núcleo diario: comprar cuando el cierre supera el máximo de los N días previos. Es una prueba del núcleo, no del esquema completo. Mi lectura: si el núcleo no tiene ventaja, difícilmente la decoración encima la crea.
BOCETO: dos columnas: ✓ «Probado: ruptura diaria del máximo de 1, 2, 3 y 5 días» / ✗ «No se puede mecanizar: retroceso y vela de 5 min (discrecional)».

**[2:40 — Cómo lo probé]** (pantalla: esquema de los 5 filtros)
Una cesta de 7 pares de divisas más oro. La señal se ejecuta al día siguiente, sin mirar el futuro, con 3 puntos básicos de costo por operación y solo compra. Seis variantes: romper el máximo de 1, 2, 3 o 5 días, y dos de ellas con el filtro de la media de 200 días. Cinco filtros: el periodo de diseño 2014–2020, donde comprar y esperar da un Sharpe de 0.13; dos periodos que la estrategia nunca vio, 2007–2013, con la crisis de 2008, y 2021–2024, donde se exige más de 0.30; el Deflated Sharpe, que descuenta la suerte de probar muchas ideas, con un contador de 33,363 intentos; y un Monte Carlo de 5,000 permutaciones. El Sharpe es la ganancia por unidad de riesgo: por debajo de cero, pierde.
BOCETO: cinco puertas con su umbral (0.13 / 0.30 / 0.30 / 0.95 / p < 0.05); checklist `filters`: ✓ costos 3 bps, ✓ rezago de 1 día. kb=in.

**[4:10 — Resultados]** (pantalla: tabla animada, una fila por variante)
Las seis variantes, negativas en los tres periodos. Cero de seis pasan el primer filtro. El mejor Sharpe de diseño es −0.54 y el peor, −1.58. Fuera de muestra, la peor llega a −1.69. El Deflated Sharpe máximo es 0.00, cuando se exige 0.95, y el mejor Monte Carlo tiene un p de 0.16, lejos de 0.05. No es que gane poco: pierde, y pierde de forma consistente.
| Variante | 2014–20 | 2007–13 | 2021–24 | Monte Carlo (p) |
|---|---|---|---|---|
| MA200 + rompe 5 días | −0.54 | −0.86 | −0.80 | 0.19 |
| Rompe 5 días | −0.97 | −1.02 | −1.65 | 0.29 |
| Rompe 3 días | −1.05 | −1.02 | −1.67 | 0.22 |
| MA200 + rompe 1 día | −1.10 | −0.97 | −1.24 | 0.50 |
| Rompe 2 días | −1.13 | −1.17 | −1.69 | 0.16 |
| Rompe 1 día | −1.58 | −1.19 | −1.44 | 0.47 |
BOCETO: barras rojas que crecen hacia abajo, fila por fila, en tres columnas (2014–20 / 2007–13 / 2021–24); sacudida al llegar a −1.69. Sello «0 / 6» y «0 / 5 filtros».

**[5:30 — Por qué pierde]** (pantalla: gráfico de precio que rompe y revierte)
En estos mercados, perseguir la ruptura del rango anterior no deja ventaja bruta: la ruptura de 1 día, sin contar costos, da un Sharpe de −0.10 en 2014–2020. Y como la estrategia entra y sale muy seguido, los costos terminan de rematarla.
BOCETO: precio que rompe el máximo del día previo y revierte (esquema ilustrativo); dos barras: «sin costos: −0.10» y «con costos: −1.58» (ruptura de 1 día, 2014–20). kb=out.

**[6:15 — «Pero yo opero índices, no forex»]** (pantalla: resultado del experimento #90)
Es una crítica justa, así que lo repetí en índices: S&P 500, Nasdaq 100, DAX y FTSE 100, de 2012 a 2024. Según el experimento 90, la ruptura de 5 días dio −424 dólares sobre 10,000. Comprar y esperar los índices, +29,368. Ahí otras ideas de tendencia sí ganan dinero, pero ninguna supera a comprar y esperar. Eso lo cuento en su propio video.
BOCETO: dos barras de la ficha del #90: −$424 (rojo) y +$29,368 (verde de referencia). Nota al pie en gris: «#90: curvas rehechas con parámetros reconstruidos; reproducen las cifras publicadas».

**[6:55 — Con tu capital]** (pantalla: tarjeta de capital)
La curva de la variante de mejor Sharpe de diseño, MA200 con ruptura de 5 días, sobre la cesta de 8 entre 2007 y 2024. Con 100,000 dólares pierde 25,460. Comprar y esperar la misma cesta gana 14,407. Con 10,000 dólares serían unos −2,546 contra +1,441. Es lo que pasó, no una promesa.
BOCETO: curvas reales de `series/extra-v85.json` (estrategia en rojo cayendo, «Sin estrategia» en blanco subiendo) con contadores finales. Pie: «cifras escaladas a $100,000».

**[7:25 — Conclusión]**
El núcleo de esta estrategia, comprar rupturas del rango previo, no tiene ventaja en estos datos. No medí el porcentaje de aciertos del esquema completo, que es intradía; lo que medí es que el núcleo diario pierde en los tres periodos, con costos. El trading no se promete: se prueba.

**[7:50 — Cierre]**
Todos los datos en atlas-lab-one.vercel.app, experimento 85. Si quieres que pruebe otra estrategia de redes, déjala en los comentarios. Contenido educativo, no es asesoría financiera.

---

## SHORT (9:16, ≈ 48 s)

**[0-3 s]** «Esta estrategia de TikTok promete 71% de aciertos. Probé su núcleo: 0 de 6 pasan.»
BOCETO: «71%» gigante que se tacha; contador «0/6» en rojo sobre b-roll de gráfico (kb=in), overlay 0.6.

**[3-15 s]** «Comprar cuando el precio rompe el máximo del día anterior. Seis variantes, de 2007 a 2024, siete divisas y oro, con costos.»
BOCETO: esquema del rango previo con la flecha de ruptura (kb=out); ticker arriba.

**[15-32 s]** «Las seis pierden en los tres periodos. Sharpe de −0.54 a −1.69. Con 100,000 dólares, la de mejor Sharpe de diseño pierde 25,460.»
BOCETO: barras rojas apareciendo una a una con tick; contador −$25,460 con golpe de bajo + sacudida.

**[32-43 s]** «Perseguir la ruptura no deja ventaja: sin costos, la de un día da −0.10. Y los costos rematan.»
BOCETO: dos barras, −0.10 y −1.58, la segunda mucho más larga.

**[43-48 s]** «El video completo está en el canal. Prometen setenta y uno por ciento. Los datos dicen: cero de seis.»
BOCETO: «71%» tachado y debajo «0/6» en rojo; texto final «Video completo en el canal» + pequeño «No es asesoría financiera · El trading no se promete: se prueba». Loop: «cero de seis» responde al hook.

---

## Descripción de YouTube
Probé el núcleo diario de la estrategia de TikTok del «71% de aciertos» (ruptura del rango del día anterior) con datos de 2007 a 2024, costos de 3 puntos básicos y 5 filtros estadísticos. Resultado: 0 de 6 variantes sobreviven; con $100,000, la de mejor Sharpe de diseño pierde $25,460.
Datos completos: https://atlas-lab-one.vercel.app (experimento #85)
Contenido educativo. No es asesoría financiera ni recomendación de inversión.

## Capítulos
0:00 Gancho · 0:35 La estrategia · 1:50 Qué probé · 2:40 Cómo lo probé · 4:10 Resultados · 5:30 Por qué pierde · 6:15 ¿Y en índices? · 6:55 Con tu capital · 7:25 Conclusión

## Etiquetas
estrategia de tiktok, 71% de aciertos, ruptura del rango, breakout, prorealalgos, backtest, sharpe ratio, deflated sharpe, forex, trading con datos, atlas lab, estrategias de trading

## Rúbrica (autoevaluación, 1–5)
| Pieza | hook_0_3s | ritmo | promesa_cumplida | potencial_loop | claridad_no_traders | honestidad_atlas | audio | cta | Promedio |
|---|---|---|---|---|---|---|---|---|---|
| Largo | 5 | 4 | 5 | 4 | 4 | 5 | 4 | 4 | 4.4 |
| Short | 5 | 4 | 5 | 5 | 4 | 5 | 4 | 4 | 4.5 |

Hook ≥ 4 ✓ · honestidad 5 ✓. Punto débil: solo se prueba el núcleo diario; el esquema completo es intradía y discrecional, y el video lo dice dos veces (bloque 1:50 y conclusión).

## Otros temas de este experimento
Cada tema es un video largo más un Short, con el mismo formato y las mismas reglas que el tema 1; cada uno se puede ver solo.
1. `exp-085-tiktok-breakout-71.md` — Tema 1: La estrategia de TikTok del 71% de aciertos: 0 de 6 pasan
2. `exp-085-t2-costo-de-operar-seguido.md` — Tema 2: Sin costos, −0.10. Con costos, −1.58: lo que cuesta comprar la ruptura de ayer
3. `exp-085-t3-filtro-ma200-recorta.md` — Tema 3: El filtro de la media de 200 días mejora la ruptura de −0.97 a −0.54… y sigue perdiendo

# Experimento #89 — TikTok 5: Candle Range Theory (barrida + FVG)

Estado del guion: **BORRADOR — pendiente de aprobación**
Estado del experimento: **murió** (las 8 formas pierden fuerte: Sharpe 2014–2020 de −0.82 a −1.67; 0 de 5 filtros) · Serie A — «Probé la estrategia de TikTok» (plan-series.md) · 1 largo + 1 Short
Datos usados: `experiments.json` (v=89: kpis, metrics, forms, verdict, analysis, market, period), `exp_details.json` (extra-v89: algo, code, filters), `series/extra-v89.json` (1.ª curva = «MA200 + sweep_rev 3d», cesta de 8; 2.ª = «Sin estrategia»), tabla «Con tu capital» de `docs/youtube`. Se cita el #85 y el #88 (la ruptura) por la ficha del propio #89.
Producción (CLAUDE.md del canal): b-roll real detrás de cada escena con overlay oscuro 0.6, Ken Burns alternando in/out, subtítulos karaoke en MAYÚSCULAS con palabras clave en rojo, un dato visual por escena, golpe de bajo + sacudida solo en 1–2 momentos. Colores: rojo `#e11d2a`, verde `#22c55e`, fondo `#09090b`. Cifras en dígitos aquí; en el campo `tts` del JSON, en palabras.

## Títulos (3 opciones)
1. «Candle Range Theory» de TikTok: 8 formas, ninguna pasa
2. Si romper el rango pierde, ¿ir en contra gana? 8 formas, 8 pérdidas
3. Barrida del mínimo previo: Sharpe de −0.82 a −1.67 en 8 formas

## Miniatura (pensada para el título 1)
Fondo `#09090b`. Dos flechas opuestas, → «ruptura» y ← «barrida», cada una con una ✕ roja. Texto: «TAMBIÉN PIERDE» (2 palabras) en blanco y rojo. Logo ATLAS arriba a la derecha.

---

## VIDEO LARGO (16:9, ≈ 7 min)

**[0:00 — Gancho]** (pantalla: dos flechas opuestas con ✕)
Ya vimos que comprar la ruptura del rango del día anterior pierde. Entonces un TikTok propone exactamente lo contrario: esperar a que el precio barra un nivel y operar la vuelta. Se llama Candle Range Theory. Probé 8 formas. Las ocho pierden: en el periodo de diseño, el Sharpe va de −0.82 a −1.67.
BOCETO: dos flechas, → con «ruptura: pierde (#85, #88)» y ← con «barrida: ?»; la segunda se llena con una ✕ roja. Rango «−0.82 a −1.67» en rojo. kb=in.

**[0:40 — La estrategia]** (pantalla: dibujo del rango previo con la barrida)
Marcas el máximo y el mínimo del día anterior. En gráficos de 1 hora esperas que el precio barra un nivel, que se asome fuera del rango, y cierre de vuelta dentro. A esa barrida o falso rompimiento la leen como señal de reversión. Luego, en gráficos de 5 minutos, entras por un quiebre de estructura más un FVG, un tipo de hueco entre velas, con un ratio de 1 a 2 o 3. Este TikTok es publicidad de un programa de fondeo.
BOCETO: velas esquemáticas (rotuladas «ilustración»): mínimo del día previo, la mecha lo barre, la vela cierra dentro; flecha de compra. kb=out.

**[1:45 — Qué probé (y qué no)]** (pantalla: dos columnas)
Lo intradía, el quiebre de estructura y el FVG, es discrecional y no se puede mecanizar aquí. Lo que sí se puede probar es su núcleo en diario: ir contra el falso rompimiento. Si el día barre el mínimo de los N días previos y cierra por encima de él, compro. Es una prueba del núcleo, no del esquema completo.
BOCETO: ✓ «Probado: barrida del mínimo de 1, 2, 3 o 5 días, diario» / ✗ «No probado: quiebre de estructura + FVG (intradía, discrecional)».

**[2:35 — Cómo lo probé]** (pantalla: 8 formas y 5 filtros)
Ocho formas: la barrida de 1, 2, 3 o 5 días, con y sin un filtro de tendencia, una media de 100 o 200 días o una EMA de 200. Siete pares de divisas y oro, señal ejecutada al día siguiente, 3 puntos básicos de costo y solo compra. Cinco filtros: dos periodos que la estrategia nunca vio, 2007–2013 y 2021–2024, con Sharpe mayor que 0.30; Deflated Sharpe mayor que 0.95, con un contador global de 33,363 intentos; Monte Carlo; y superar a comprar y esperar, cuyo Sharpe en 2014–2020 es 0.13. El Sharpe es la ganancia por unidad de riesgo: por debajo de cero, pierde.
BOCETO: cinco puertas con sus umbrales; checklist `filters`: ✓ costos 3 bps, ✓ rezago de 1 día.

**[3:35 — Resultados]** (pantalla: tabla animada)
En el periodo de diseño, 2014–2020, la mejor da −0.82 y la peor −1.67. En 2007–2013, la peor llega a −1.74. El Deflated Sharpe máximo es 0.00 y el mejor Monte Carlo tiene un p de 0.08, que no baja de 0.05. Cero de ocho superan a comprar y esperar. Máximo de filtros superados: 0 de 5.
| Variante | 2014–20 | 2007–13 | 2021–24 | Monte Carlo (p) |
|---|---|---|---|---|
| MA200 + barrida 3 días | −0.82 | −0.99 | −0.90 | 0.34 |
| Barrida 5 días | −0.88 | −1.34 | −1.29 | 0.08 |
| MA200 + barrida 1 día | −0.90 | −1.50 | −0.97 | 0.12 |
| EMA200 + barrida 1 día | −0.90 | −1.45 | −0.75 | 0.12 |
| MA100 + barrida 2 días | −1.10 | −1.02 | −0.74 | 0.50 |
| Barrida 3 días | −1.43 | −1.44 | −1.15 | 0.47 |
| Barrida 2 días | −1.59 | −1.33 | −1.13 | 0.48 |
| Barrida 1 día | −1.67 | −1.74 | −1.14 | 0.23 |
BOCETO: barras rojas que crecen hacia abajo fila por fila; sacudida al llegar a −1.74. Sellos «0 / 8» y «0 / 5 filtros».

**[4:50 — Por qué pierde]** (pantalla: ruptura y barrida frente a frente)
Fíjate en lo curioso: tanto la ruptura, los TikToks 1 y 4, como su opuesto, ir contra la barrida, el TikTok 5, pierden. No es que falte encontrar el lado correcto. Es que no hay ventaja direccional y la fricción manda. Ir contra las barridas en diario es puro movimiento de cartera sin ventaja: los costos se comen todo y la reversión es ruido.
BOCETO: dos paneles: «Ruptura → pierde» (#85, #88) y «Barrida → pierde» (#89), ambos con curva roja; centro: «Sin ventaja direccional · manda la fricción». kb=in.

**[5:45 — Con tu capital]** (pantalla: tarjeta de capital)
La curva de la variante de mejor Sharpe de diseño, MA200 con barrida de 3 días, sobre la cesta de 8 entre 2007 y 2024. Con 100,000 dólares pierde 21,472. Comprar y esperar la misma cesta gana 14,407. Con 10,000 dólares serían unos −2,147 contra +1,441. Es lo que pasó, no una promesa.
BOCETO: curvas reales de `series/extra-v89.json` (estrategia en rojo cayendo, «Sin estrategia» en blanco) con contadores finales.

**[6:25 — Conclusión]**
Las 8 formas pierden. Al derecho o al revés, el núcleo diario de este TikTok no deja ventaja en estos datos. No sirvió. El trading no se promete: se prueba.

**[6:50 — Cierre]**
Todos los datos en atlas-lab-one.vercel.app, experimento 89. Contenido educativo, no es asesoría financiera.

---

## SHORT (9:16, ≈ 45 s)

**[0-3 s]** «Comprar la ruptura pierde. Ir en contra, también: 8 formas, 8 pérdidas.»
BOCETO: dos flechas opuestas con ✕ rojas sobre b-roll de velas (kb=in), overlay 0.6; «8/8» en rojo.

**[3-14 s]** «Candle Range Theory: el precio barre el mínimo del día anterior y cierra de vuelta por encima, y compras. Versión diaria, siete divisas y oro, con costos.»
BOCETO: esquema de la mecha que barre el mínimo y la vela que cierra dentro (kb=out).

**[14-30 s]** «Sharpe de −0.82 a −1.67 en el periodo de diseño. Fuera de muestra, hasta −1.74. Cero de cinco filtros.»
BOCETO: barras rojas cayendo con tick; golpe de bajo + sacudida en −1.74.

**[30-40 s]** «Con 100,000 dólares, la mejor de diseño pierde 21,472. Comprar y esperar gana 14,407.»
BOCETO: tarjeta de capital: −$21,472 rojo y +$14,407 blanco/verde.

**[40-45 s]** «No falta el lado correcto: falta ventaja. El video completo está en el canal. Al derecho o al revés, pierde.»
BOCETO: sello ✕ sobre las dos flechas; texto final «Video completo en el canal» + pequeño «No es asesoría financiera · El trading no se promete: se prueba». Loop: «al derecho o al revés, pierde» responde al hook.

---

## Descripción de YouTube
Probé el núcleo diario del TikTok «Candle Range Theory» (barrida del mínimo del día previo y vuelta): 8 formas con y sin filtro de tendencia, en 7 pares de divisas + oro, 2007–2024, con 3 puntos básicos de costo y 5 filtros. Todas pierden (Sharpe de −0.82 a −1.67 en 2014–2020), igual que la ruptura: no hay ventaja direccional.
Datos completos: https://atlas-lab-one.vercel.app (experimento #89)
Contenido educativo. No es asesoría financiera ni recomendación de inversión.

## Capítulos
0:00 Gancho · 0:40 La estrategia · 1:45 Qué probé · 2:35 Cómo lo probé · 3:35 Resultados · 4:50 Por qué pierde · 5:45 Con tu capital · 6:25 Conclusión

## Etiquetas
candle range theory, barrida de liquidez, falso rompimiento, fvg, estrategia de tiktok, reversión, backtest, sharpe ratio, fuera de muestra, deflated sharpe, atlas lab, trading con datos

## Rúbrica (autoevaluación, 1–5)
| Pieza | hook_0_3s | ritmo | promesa_cumplida | potencial_loop | claridad_no_traders | honestidad_atlas | audio | cta | Promedio |
|---|---|---|---|---|---|---|---|---|---|
| Largo | 5 | 4 | 5 | 4 | 4 | 5 | 4 | 4 | 4.4 |
| Short | 5 | 4 | 5 | 5 | 4 | 5 | 4 | 4 | 4.5 |

Hook ≥ 4 ✓ · honestidad 5 ✓. Punto débil: el hook se apoya en haber visto los TikToks 1 y 4; el Short lo resume en una frase. Solo se prueba el núcleo diario; el quiebre de estructura y el FVG son intradía y discrecionales.

## Otros temas de este experimento
Cada tema es un video largo más un Short, con el mismo formato y las mismas reglas que el tema 1; cada uno se puede ver solo.
1. `exp-089-tiktok-candle-range-theory.md` — Tema 1: «Candle Range Theory» de TikTok: 8 formas, ninguna pasa
2. `exp-089-t2-ruptura-contra-barrida.md` — Tema 2: Compré la ruptura: −$25,460. Compré lo contrario: −$21,472. Con $100,000
3. `exp-089-t3-barrida-de-liquidez-que-es.md` — Tema 3: Barrida de liquidez explicada: la regla más simple da un Sharpe de −1.67

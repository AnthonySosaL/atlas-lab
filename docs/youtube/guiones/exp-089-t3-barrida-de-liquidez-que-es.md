# Experimento #89 — Tema 3: qué es una barrida de liquidez (la idea y su prueba diaria)

Tema 3 de 3 del experimento #89 · Qué aporta frente a los otros temas: es el tema del concepto. Explica para principiantes qué dice la teoría de la barrida de liquidez y el falso rompimiento, cómo se convierte en una regla de una línea y qué resultado dio esa regla en su versión diaria, aclarando qué no se probó (quiebre de estructura y FVG, intradía). El tema 1 cuenta el resultado completo de las 8 formas; el tema 2 compara la barrida con la ruptura.
Estado del guion: **BORRADOR — pendiente de aprobación**
Estado del experimento: **murió** (las 8 formas pierden fuerte: Sharpe 2014–2020 de −0.82 a −1.67; 0 de 5 filtros) · Serie A — «Probé la estrategia de TikTok» (plan-series.md) · 1 largo + 1 Short
Datos usados: `experiments.json` (v=89: kpis, metrics, forms, verdict, analysis, notes), `exp_details.json` (extra-v89: algo, code, filters), `series/extra-v89.json` (1.ª curva = «MA200 + sweep_rev 3d», cesta de 8; 2.ª = «Sin estrategia»), tabla «Con tu capital» de `docs/youtube`.
Producción (CLAUDE.md del canal): b-roll real detrás de cada escena con overlay oscuro 0.6, Ken Burns alternando in/out, subtítulos karaoke en MAYÚSCULAS con palabras clave en rojo, un dato visual por escena, golpe de bajo + sacudida solo en 1–2 momentos. Colores: rojo `#e11d2a`, verde `#22c55e`, fondo `#09090b`. Cifras en dígitos aquí; en el campo `tts` del JSON, en palabras.

## Títulos (3 opciones)
1. Barrida de liquidez explicada: la regla más simple da un Sharpe de −1.67
2. ¿Qué es un falso rompimiento? Lo probé en 8 formas: de −0.82 a −1.67
3. El precio barre el mínimo de ayer y vuelve: ¿ventaja o historia?

## Miniatura (pensada para el título 1)
Fondo `#09090b`. Una vela con una mecha larga que baja por debajo de una línea de «mínimo de ayer» y vuelve a cerrar dentro; a la derecha, «−1.67» en rojo. Texto grande: «¿LIQUIDEZ?» (1 palabra, sin repetir el título). Logo ATLAS arriba a la derecha.

---

## VIDEO LARGO (16:9, ≈ 6 min)

**[0:00 — Gancho]** (pantalla: vela con mecha y una cifra roja)
Si el precio barre el mínimo de ayer y cierra por encima, compras. Esa es la regla más simple de la barrida de liquidez. Su Sharpe, en el periodo de diseño: −1.67.
BOCETO: vela con mecha larga que atraviesa la línea del «mínimo de ayer» y cierra dentro; flecha de compra; contador «−1.67» en rojo con golpe de bajo. kb=in.

**[0:15 — Qué es este experimento]** (pantalla: rótulo con el número y el nombre)
Este es el experimento #89 de ATLAS Lab: TikTok 5, Candle Range Theory, barrido más FVG. Todos los resultados están en la página del experimento.
BOCETO: rótulo en rojo y blanco «EXPERIMENTO #89» con el nombre debajo, sobre la vela atenuada (overlay 0.6). Whoosh corto. kb=out.

**[0:25 — La idea, según quienes la enseñan]** (pantalla: stops acumulados)
Voy a contarte la idea tal como la cuentan, sin darla por cierta. Dicen que, por encima de los máximos y por debajo de los mínimos, se acumulan órdenes pendientes de otros operadores, los stops. A esa acumulación la llaman liquidez. Según la teoría, el precio se asoma a esos niveles, activa esas órdenes, y luego vuelve. A ese asomarse lo llaman barrida, o falso rompimiento. Y la señal sería comprar la vuelta.
BOCETO: gráfico de velas esquemático (rotulado «ilustración») con una zona de «stops» bajo un mínimo, una mecha que la toca y la vela que cierra dentro. Cartel gris: «Así lo cuentan · no es un dato». kb=in.

**[1:15 — Del dibujo a una regla]** (pantalla: una línea de código)
Un dibujo no se puede probar; una regla sí. Mi versión diaria: compra si el día barre el mínimo de los N días previos y cierra por encima de ese mínimo. En código es una línea: el mínimo del día es menor que el mínimo previo, y el cierre es mayor. N puede ser 1, 2, 3 o 5 días, con o sin filtro de tendencia: una media de 100 o 200 días, o una EMA de 200.
BOCETO: línea de código `pos = ((l < prev_low) & (c > prev_low))` con sus partes iluminadas sobre la vela; selector N = 1 / 2 / 3 / 5. kb=out.

**[2:05 — Cómo se probó]** (pantalla: reglas y cinco filtros)
Siete pares de divisas más oro, de 2007 a 2024, con la señal ejecutada al día siguiente, 3 puntos básicos de costo por rotación y solo compra. El Sharpe es la ganancia por unidad de riesgo; por debajo de cero, pierde. Cinco filtros: dos periodos fuera de muestra, 2007–2013 y 2021–2024, con Sharpe mayor que 0.30; Deflated Sharpe mayor que 0.95, que descuenta la suerte de probar muchas ideas; Monte Carlo; y superar a comprar y esperar, cuyo Sharpe en 2014–2020 es 0.13.
BOCETO: cinco puertas con sus umbrales; checklist `filters`: ✓ costos 3 bps, ✓ rezago de 1 día. kb=in.

**[2:55 — Resultados]** (pantalla: tres filas de la tabla)
La barrida de 1 día, la regla más simple, da −1.67 en el diseño, −1.74 en 2007–2013 y −1.14 en 2021–2024. La de 5 días: −0.88, −1.34 y −1.29. Y la mejor de las ocho, con el filtro de la media de 200 días y barrida de 3 días: −0.82, −0.99 y −0.90. El Deflated Sharpe máximo es 0.00 y el mejor Monte Carlo tiene un p de 0.08. Cero de ocho superan a comprar y esperar. Máximo de filtros superados: 0 de 5.
| Forma | 2014–20 | 2007–13 | 2021–24 |
|---|---|---|---|
| Barrida 1 día | −1.67 | −1.74 | −1.14 |
| Barrida 5 días | −0.88 | −1.34 | −1.29 |
| MA200 + barrida 3 días (la mejor de diseño) | −0.82 | −0.99 | −0.90 |
BOCETO: tres filas con barras rojas hacia abajo; sacudida al llegar a −1.74. Sellos «0 / 8» y «0 / 5 filtros». kb=out.

**[3:50 — Qué NO probé]** (pantalla: dos columnas)
Aquí va la limitación. La teoría completa que cuenta el TikTok es intradía: barrida en velas de 1 hora y entrada en velas de 5 minutos por un quiebre de estructura y un FVG, que es un tipo de hueco entre velas. Eso es discrecional y no se puede mecanizar aquí. Lo que probé es su núcleo diario. Un resultado negativo del núcleo diario no refuta toda la teoría; dice que, en datos diarios de siete divisas y oro, comprar la vuelta de una barrida no deja ventaja.
BOCETO: ✓ «Probado: barrida del mínimo de 1, 2, 3 o 5 días, diario» / ✗ «No probado: quiebre de estructura + FVG (intradía, discrecional)». kb=in.

**[4:35 — Cómo escuchar una teoría así]** (pantalla: tres preguntas)
Cuando oigas una teoría con nombres técnicos, tres preguntas. Uno: ¿qué parte puedo escribir como regla exacta? Dos: ¿qué resultado da esa regla con costos y en épocas que no vio? Tres: ¿qué parte queda sin probar y lo dicen? Aquí, la regla exacta existe y da pérdidas; lo intradía queda sin probar y lo dije.
BOCETO: tres casillas que se marcan una a una con las respuestas de este experimento. kb=out.

**[5:10 — Con tu capital]** (pantalla: tarjeta de capital)
La curva de la mejor de diseño, MA200 con barrida de 3 días, sobre la cesta de 8 entre 2007 y 2024. Con 100,000 dólares pierde 21,472. Comprar y esperar la misma cesta gana 14,407. Con 10,000 dólares serían unos −2,147 contra +1,441.
BOCETO: curvas reales de `series/extra-v89.json` (estrategia roja cayendo, «Sin estrategia» blanca) con contadores finales.

**[5:35 — Conclusión]**
La barrida de liquidez suena a explicación del mercado. Su núcleo diario no dejó ventaja: las 8 formas pierden. El trading no se promete: se prueba.

**[5:55 — Ficha del experimento #89]** (pantalla: tarjeta con la ficha y la URL)
Ficha del experimento #89. Estado: murió. Cifra clave: la barrida de 1 día da Sharpe −1.67 en el diseño; las 8 formas van de −0.82 a −1.67; con 100,000 dólares la mejor pierde 21,472. Filtro que decidió: 0 de 8 superan a comprar y esperar, Sharpe 0.13. Lección: una teoría con nombre técnico se prueba con una regla exacta. Revísalo completo en atlas-lab-one.vercel.app/e/89.
BOCETO: tarjeta con el número «#89», el sello «MURIÓ» en rojo, tres líneas (cifra clave, filtro que decidió, lección) y la URL `atlas-lab-one.vercel.app/e/89` grande abajo. kb=in.

**[6:15 — Cierre]**
Todos los datos en atlas-lab-one.vercel.app, experimento 89. Contenido educativo, no es asesoría financiera.

---

## SHORT (9:16, ≈ 48 s)

**[0-3 s]** «Barrió el mínimo de ayer y cerró por encima. Compras. Sharpe: menos 1.67.»
BOCETO: vela con mecha bajo la línea y contador −1.67 rojo, sobre b-roll de velas (kb=in), overlay 0.6; golpe de bajo.

**[3-15 s]** «Es la barrida de liquidez, de un TikTok: el precio se asoma bajo un mínimo, cazaría stops y vuelve. Así lo cuentan.»
BOCETO: zona de stops bajo el mínimo y mecha que la toca (kb=out); cartel gris «así lo cuentan»; ticker arriba.

**[15-30 s]** «Lo probé en versión diaria: 1, 2, 3 y 5 días, con y sin filtro de tendencia. Ocho formas, siete divisas y oro, con costos.»
BOCETO: selector N = 1/2/3/5 y línea de código; tick en cada forma.

**[30-43 s]** «Sharpe de menos 0.82 a menos 1.67 en el diseño. Fuera de muestra, hasta menos 1.74. Cero de cinco filtros.»
BOCETO: barras rojas hacia abajo; golpe de bajo + sacudida en −1.74.

**[43-48 s]** «El video completo está en el canal, y el experimento #89 completo, en el enlace. La historia suena bien. Los datos diarios dicen menos 1.67.»
BOCETO: texto final «Video completo en el canal · Experimento #89 completo en el enlace» + pequeño «No es asesoría financiera · El trading no se promete: se prueba». Loop: «menos 1.67» repite el hook.

---

## Descripción de YouTube (video largo)
https://atlas-lab-one.vercel.app/e/89?utm_source=youtube&utm_medium=video&utm_campaign=exp089-t3
Ficha del experimento #89: murió · 8 formas de la barrida del mínimo previo, 0 de 5 filtros · Sharpe 2014–2020 de −0.82 a −1.67 (la de 1 día: −1.67) · con $100,000: −$21,472 contra +$14,407 de comprar y esperar.
Explico qué dice la teoría de la barrida de liquidez y el falso rompimiento, cómo se convierte en una regla de una línea y qué dio su núcleo diario en 7 pares de divisas y oro (2007–2024, 3 puntos básicos de costo). El quiebre de estructura y el FVG, intradía, no se probaron.
Contenido educativo. No es asesoría financiera ni recomendación de inversión.

## Descripción de YouTube (Short)
https://atlas-lab-one.vercel.app/e/89?utm_source=youtube&utm_medium=short&utm_campaign=exp089-t3
Ficha del experimento #89: murió · barrida del mínimo previo, versión diaria: Sharpe de −0.82 a −1.67 · 0 de 5 filtros · con $100,000: −$21,472.
Contenido educativo. No es asesoría financiera.

## Capítulos
0:00 Gancho · 0:15 Qué es este experimento · 0:25 La idea, según quienes la enseñan · 1:15 Del dibujo a una regla · 2:05 Cómo se probó · 2:55 Resultados · 3:50 Qué no probé · 4:35 Cómo escuchar una teoría · 5:10 Con tu capital · 5:35 Conclusión · 5:55 Ficha del experimento

## Etiquetas
barrida de liquidez, falso rompimiento, liquidity sweep, candle range theory, fvg, estrategia de tiktok, backtest, sharpe ratio, fuera de muestra, deflated sharpe, atlas lab, trading con datos

## Rúbrica (autoevaluación, 1–5)
| Pieza | hook_0_3s | ritmo | promesa_cumplida | potencial_loop | claridad_no_traders | honestidad_atlas | audio | cta | Promedio |
|---|---|---|---|---|---|---|---|---|---|
| Largo | 5 | 4 | 5 | 4 | 5 | 5 | 4 | 4 | 4.5 |
| Short | 5 | 4 | 5 | 5 | 5 | 5 | 4 | 4 | 4.6 |

Hook ≥ 4 ✓ · honestidad 5 ✓. Punto débil: la teoría de la liquidez se cuenta «como la cuentan», con cartel gris «no es un dato»; no se afirma que sea cierta ni falsa. Solo se prueba el núcleo diario y se dice que lo intradía queda sin probar.

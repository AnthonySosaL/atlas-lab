# Experimento #88 — Tema 3: el stop a mitad del rango y el objetivo cercano (las 32 formas, de −0.69 a −18.57)

Tema 3 de 4 del experimento #88 · Qué aporta frente a los otros temas: es el tema de las 32 formas. Explica el cubo 4 rangos × 2 stops × 4 objetivos y muestra dos patrones verificables en la tabla: el stop a mitad del rango es peor que el del lado opuesto en las 16 comparaciones, y en cada combinación de rango y stop, «sin objetivo» es la mejor y 1:1 la peor. El tema 1 cuenta el resultado completo; el tema 2 trata el costo; el tema 4, el orden dentro de la vela.
Estado del guion: **BORRADOR — pendiente de aprobación**
Estado del experimento: **murió** (ninguna de las 32 formas pasa; versión del video: Sharpe −1.73 en 2014–2020) · Serie A — «Probé la estrategia de TikTok» (plan-series.md) · 1 largo + 1 Short
Datos usados: `experiments.json` (v=88: kpis, metrics, forms, verdict, analysis, notes), `exp_details.json` (extra-v88: algo, code, filters), `series/extra-v88.json` (1.ª curva = versión del video; 2.ª = mejor de las 32; 3.ª = «Sin estrategia»), tabla «Con tu capital» de `docs/youtube`. Las comparaciones entre pares de formas son del guion, sobre las 32 formas de `forms`.
Producción (CLAUDE.md del canal): b-roll real detrás de cada escena con overlay oscuro 0.6, Ken Burns alternando in/out, subtítulos karaoke en MAYÚSCULAS con palabras clave en rojo, un dato visual por escena, golpe de bajo + sacudida solo en 1–2 momentos. Colores: rojo `#e11d2a`, verde `#22c55e`, fondo `#09090b`. Cifras en dígitos aquí; en el campo `tts` del JSON, en palabras.

## Títulos (3 opciones)
1. La peor de 32 versiones del ORB del Nasdaq: Sharpe de −18.57
2. Stop a mitad del rango: de −3.23 a −18.57 en las 16 versiones
3. Objetivo 1:1, 1:2, 1:3 o ninguno: ¿cuál pierde menos? Las 32 formas

## Miniatura (pensada para el título 1)
Fondo `#09090b`. Un mosaico de 32 cuadrados rojos de distinta intensidad con uno más oscuro marcado «−18.57». Texto grande: «EL PEOR STOP» (3 palabras, sin repetir el título). Logo ATLAS arriba a la derecha.

---

## VIDEO LARGO (16:9, ≈ 6 min)

**[0:00 — Gancho]** (pantalla: mosaico de 32 cuadrados y uno en rojo oscuro)
De 32 versiones de la estrategia ORB del Nasdaq, la peor da un Sharpe de −18.57. Y la mejor, −0.69. Y buena parte de esa diferencia depende de dónde pones el stop y el objetivo.
BOCETO: mosaico de 32 cuadrados coloreados por Sharpe de diseño; el peor (−18.57) destella y el mejor (−0.69) queda más claro. Golpe de bajo en −18.57. kb=in.

**[0:15 — Qué es este experimento]** (pantalla: rótulo con el número y el nombre)
Este es el experimento #88 de ATLAS Lab: TikTok 4, ORB del Nasdaq a las 9:30. Todos los resultados están en la página del experimento.
BOCETO: rótulo en rojo y blanco «EXPERIMENTO #88» con el nombre debajo, sobre el mosaico atenuado (overlay 0.6). Whoosh corto. kb=out.

**[0:25 — Stop y objetivo, en una frase]** (pantalla: operación con stop y objetivo)
Primero, dos palabras. El stop es el precio en el que cierras la operación si sale mal. El objetivo es el precio en el que la cierras si sale bien. «1 a 3» significa que el objetivo está a tres veces la distancia del stop: arriesgas una unidad para ganar tres. En el ORB, marcas un rango de referencia, pones una orden de compra en su máximo y una de venta en su mínimo, y la que se active primero abre la operación.
BOCETO: operación esquemática sobre el rango (ilustración): entrada en el máximo, stop abajo, objetivo arriba a «1:3», cierre a las 16:00. kb=in.

**[1:10 — El cubo de 32 formas]** (pantalla: cubo 4 × 2 × 4)
Probé 32 formas, que salen de combinar tres cosas. Cuatro rangos de referencia: la vela de las 9:30, la primera hora, la vela de 9:00 a 9:30 y el premercado de 4:00 a 9:30. Dos stops: en el lado opuesto del rango, o a mitad del rango. Y cuatro objetivos: 1 a 1, 1 a 2, 1 a 3 o ninguno. Cada lado de la operación paga 3 puntos básicos de costo, 6 de ida y vuelta. Diseño en 2014–2020.
BOCETO: cubo 4 × 2 × 4 = 32 que se llena de cuadritos; checklist `filters`: ✓ costos 3 bps por lado, ✓ orden intrabarra desfavorable, ✓ sin lookahead. kb=out.

**[1:55 — Hallazgo 1: el stop a mitad del rango es peor]** (pantalla: dos columnas)
Primer hallazgo. Con el stop en el lado opuesto, las 16 formas van de −0.69 a −5.92 en el periodo de diseño. Con el stop a mitad del rango, las 16 van de −3.23 a −18.57. Y no es un promedio que tape diferencias: para cada rango y cada objetivo, la versión con stop a mitad del rango es peor que la del lado opuesto, en los 16 pares. Mi lectura, que no medí: un stop más cerca se activa más veces, y cada activación es una pérdida que paga costos. No medí cuántas veces se activa.
| Stop | Mejor Sharpe 2014–20 | Peor Sharpe 2014–20 |
|---|---|---|
| Lado opuesto del rango (16 formas) | −0.69 | −5.92 |
| Mitad del rango (16 formas) | −3.23 | −18.57 |
BOCETO: dos columnas de 16 cuadrados cada una; la de «mitad del rango» mucho más roja. Líneas finas que unen cada par (mismo rango y objetivo) y apuntan siempre a la peor. Etiqueta gris «razonamiento, no medido» junto a la explicación. Golpe de bajo + sacudida en −18.57.

**[3:05 — Hallazgo 2: sin objetivo es lo mejor]** (pantalla: tabla)
Segundo hallazgo. En cada una de las ocho combinaciones de rango y stop, «sin objetivo» es la mejor opción y el objetivo 1 a 1 es la peor. Por ejemplo, con el rango de las 9:30 y el stop en el lado opuesto: sin objetivo, −1.70; 1 a 3, −1.73; 1 a 2, −1.80; 1 a 1, −1.95. Con el rango de 9:00 a 9:30 la diferencia es enorme: sin objetivo, −1.18; 1 a 3, −2.50; 1 a 2, −3.50; 1 a 1, −5.92.
| Stop en el lado opuesto | Sin objetivo | 1:3 | 1:2 | 1:1 |
|---|---|---|---|---|
| Vela de las 9:30 | −1.70 | −1.73 | −1.80 | −1.95 |
| Vela de 9:00 a 9:30 | −1.18 | −2.50 | −3.50 | −5.92 |
BOCETO: dos filas de cuatro barras rojas; la de «sin objetivo» la más corta en cada fila y la de «1:1» la más larga. kb=in.

**[4:05 — Qué no dice este resultado]** (pantalla: nota de alcance)
Cuidado con la lectura. Esto no dice que los stops sean inútiles: la gestión de riesgo es lo que evita reventar una cuenta. Dice algo más concreto: que, en estas 32 formas, con costos y con el peor orden dentro de cada vela, poner el stop a mitad del rango y un objetivo cercano fue peor que no poner objetivo. Y que ninguna de las 32 pasa los filtros.
BOCETO: nota ámbar: «alcance: Nasdaq 100, velas de 30 min, 2012–2026, 3 bps por lado, orden desfavorable». Sello «0 / 32» rojo. kb=out.

**[4:40 — Con tu capital]** (pantalla: tarjeta de capital)
Con 100,000 dólares entre 2012 y 2026, la versión del video, con el rango de las 9:30 y el objetivo 1 a 3, pierde 77,076. Comprar y esperar el Nasdaq 100 gana 1,102,826. Con 10,000 dólares serían unos −7,708 contra +110,283. Y la mejor de las 32 formas, el premercado sin objetivo, empieza en 10,000 y termina en 3,506. Cuidado: las curvas asumen siempre el peor orden dentro de cada vela.
BOCETO: tres curvas reales de `series/extra-v88.json` (versión del video roja, mejor de las 32 en naranja, «Sin estrategia» verde); cartel ámbar con la nota de `capital.note`.

**[5:20 — Conclusión]**
Entre 32 formas del mismo ORB, la mejor da −0.69 y la peor, −18.57. Los límites que parecen prudentes, un stop cerca y un objetivo cercano, fueron los que más empeoraron el resultado. Ninguna pasa. El trading no se promete: se prueba.

**[5:45 — Ficha del experimento #88]** (pantalla: tarjeta con la ficha y la URL)
Ficha del experimento #88. Estado: murió. Cifra clave: de las 32 formas, la mejor da Sharpe −0.69 y la peor −18.57 en 2014–2020; con 100,000 dólares, la versión del video pierde 77,076. Filtro que decidió: 0 de 32 superan a comprar y esperar, Sharpe 1.01. Lección: colocar los límites más cerca no es perder menos. Revísalo completo en atlas-lab-one.vercel.app/e/88.
BOCETO: tarjeta con el número «#88», el sello «MURIÓ» en rojo, tres líneas (cifra clave, filtro que decidió, lección) y la URL `atlas-lab-one.vercel.app/e/88` grande abajo. kb=in.

**[6:05 — Cierre]**
Todos los datos en atlas-lab-one.vercel.app, experimento 88. Contenido educativo, no es asesoría financiera.

---

## SHORT (9:16, ≈ 49 s)

**[0-3 s]** «La peor de 32 versiones del ORB del Nasdaq: Sharpe de menos 18.57.»
BOCETO: mosaico de 32 cuadrados rojos con uno destellando «−18.57» sobre b-roll de bolsa de Nueva York (kb=in), overlay 0.6; golpe de bajo.

**[3-15 s]** «Dos stops: en el lado opuesto del rango o a mitad del rango. Cuatro objetivos: 1 a 1, 1 a 2, 1 a 3 o ninguno.»
BOCETO: cubo 4 × 2 × 4 que se llena (kb=out); ticker arriba.

**[15-30 s]** «Con el stop a mitad del rango, las 16 versiones van de menos 3.23 a menos 18.57. Con el stop en el lado opuesto, la mejor da menos 0.69.»
BOCETO: dos columnas de cuadrados; la de «mitad del rango» más roja; tick en cada cifra.

**[30-43 s]** «Y en las ocho combinaciones de rango y stop, sin objetivo es la mejor opción. El objetivo de 1 a 1, la peor.»
BOCETO: dos filas de barras con la «sin objetivo» más corta y la «1:1» más larga.

**[43-49 s]** «El video completo está en el canal, y el experimento #88 completo, en el enlace. Poner los límites más cerca no es perder menos.»
BOCETO: texto final «Video completo en el canal · Experimento #88 completo en el enlace» + pequeño «No es asesoría financiera · El trading no se promete: se prueba». Loop: «no es perder menos» responde al «la peor de 32» del arranque.

---

## Descripción de YouTube (video largo)
https://atlas-lab-one.vercel.app/e/88?utm_source=youtube&utm_medium=video&utm_campaign=exp088-t3
Ficha del experimento #88: murió · 32 formas del ORB del Nasdaq 100, 0 pasan · Sharpe 2014–2020 de −0.69 (la mejor) a −18.57 (la peor) · con $100,000, la versión del video pierde $77,076 contra +$1,102,826 de comprar y esperar.
Explico las 32 formas (4 rangos × 2 stops × 4 objetivos): el stop a mitad del rango es peor que el del lado opuesto en las 16 comparaciones y «sin objetivo» es la mejor opción en las 8 combinaciones. Velas de 30 minutos de Dukascopy, 2012–2026, 3 puntos básicos por lado.
Contenido educativo. No es asesoría financiera ni recomendación de inversión.

## Descripción de YouTube (Short)
https://atlas-lab-one.vercel.app/e/88?utm_source=youtube&utm_medium=short&utm_campaign=exp088-t3
Ficha del experimento #88: murió · de 32 versiones del ORB, la mejor da Sharpe −0.69 y la peor −18.57 · 0 de 32 pasan.
Contenido educativo. No es asesoría financiera.

## Capítulos
0:00 Gancho · 0:15 Qué es este experimento · 0:25 Stop y objetivo · 1:10 El cubo de 32 formas · 1:55 Hallazgo 1 · 3:05 Hallazgo 2 · 4:05 Qué no dice · 4:40 Con tu capital · 5:20 Conclusión · 5:45 Ficha del experimento

## Etiquetas
orb, stop loss, take profit, ratio riesgo beneficio, nasdaq 100, ruptura del rango de apertura, estrategia de tiktok, backtest, sharpe ratio, costos de trading, atlas lab, trading con datos

## Rúbrica (autoevaluación, 1–5)
| Pieza | hook_0_3s | ritmo | promesa_cumplida | potencial_loop | claridad_no_traders | honestidad_atlas | audio | cta | Promedio |
|---|---|---|---|---|---|---|---|---|---|
| Largo | 5 | 4 | 5 | 4 | 4 | 5 | 4 | 4 | 4.4 |
| Short | 5 | 4 | 5 | 5 | 4 | 5 | 4 | 4 | 4.5 |

Hook ≥ 4 ✓ · honestidad 5 ✓. Punto débil: el bloque 1:55 compara 16 pares; en pantalla se reduce a dos columnas y líneas de unión. La explicación por el número de activaciones del stop es una lectura no medida y se rotula así. El bloque 4:05 evita leerlo como «los stops no sirven».

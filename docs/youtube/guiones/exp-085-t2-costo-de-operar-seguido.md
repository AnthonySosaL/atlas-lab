# Experimento #85 — Tema 2: el costo de operar seguido (−0.10 sin costos, −1.58 con costos)

Tema 2 de 3 del experimento #85 · Qué aporta frente a los otros temas: es el tema del costo. Separa la ventaja bruta (casi nula) de la pérdida neta y muestra que, en el periodo de diseño, cuanto más corta la ventana de ruptura, más pierde. El tema 1 cuenta el resultado completo de las 6 formas y la promesa del «71% de aciertos»; el tema 3 trata el filtro de media de 200 días.
Estado del guion: **BORRADOR — pendiente de aprobación**
Estado del experimento: **murió** (las 6 formas del núcleo diario pierden; mejor Sharpe 2014–2020 −0.54, peor −1.58; 0 de 5 filtros) · Serie A — «Probé la estrategia de TikTok» (plan-series.md; relacionado con el #90) · 1 largo + 1 Short
Datos usados: `experiments.json` (v=85: kpis, metrics, forms, verdict, analysis, notes), `exp_details.json` (extra-v85: algo, code, filters), `series/extra-v85.json` (1.ª curva = «MA200 + rangebreak 5d», cesta de 8; 2.ª = «Sin estrategia»), tabla «Con tu capital» de `docs/youtube`.
Producción (CLAUDE.md del canal): b-roll real detrás de cada escena con overlay oscuro 0.6, Ken Burns alternando in/out, subtítulos karaoke en MAYÚSCULAS con palabras clave en rojo, un dato visual por escena, golpe de bajo + sacudida solo en 1–2 momentos. Colores: rojo `#e11d2a`, verde `#22c55e`, fondo `#09090b`. Cifras en dígitos aquí; en el campo `tts` del JSON, en palabras.

## Títulos (3 opciones)
1. Sin costos, −0.10. Con costos, −1.58: lo que cuesta comprar la ruptura de ayer
2. Cuanto más corta la ventana, más pierde: de −0.97 a −1.58
3. La ruptura del máximo de ayer, con 100,000 dólares: −25,460

## Miniatura (pensada para el título 1)
Fondo `#09090b`. Dos barras: una pequeña gris «−0.10» y otra enorme roja «−1.58», unidas por una etiqueta «3 bps». Texto grande: «EL COSTO» (2 palabras, sin repetir el título). Logo ATLAS arriba a la derecha.

---

## VIDEO LARGO (16:9, ≈ 5.5 min)

**[0:00 — Gancho]** (pantalla: dos barras, gris y roja)
Si compras cada vez que el precio rompe el máximo de ayer y no pagas costos, tu Sharpe es de −0.10. Con 3 puntos básicos de costo por rotación, es de −1.58.
BOCETO: barra gris corta «−0.10 sin costos» y barra roja larga «−1.58 con costos» de la forma «range_break 1d», periodo 2014–2020; sacudida cuando crece la roja. kb=in.

**[0:15 — Qué es este experimento]** (pantalla: rótulo con el número y el nombre)
Este es el experimento #85 de ATLAS Lab: TikTok 1, Ruptura del rango del día previo más retroceso. Todos los resultados están en la página del experimento.
BOCETO: rótulo en rojo y blanco «EXPERIMENTO #85» con el nombre debajo, sobre las barras atenuadas (overlay 0.6). Whoosh corto. kb=out.

**[0:25 — La regla que probé]** (pantalla: rango del día previo)
Un TikTok promete un 71% de aciertos con una ruptura del rango del día anterior. Su esquema completo es intradía y discrecional, así que probé su núcleo diario: comprar cuando el cierre supera el máximo de los N días previos, con N de 1, 2, 3 o 5. La señal se ejecuta al día siguiente, en una cesta de 7 pares de divisas más oro, de 2007 a 2024, solo compra. El Sharpe es la ganancia por unidad de riesgo: por debajo de cero, la estrategia pierde.
BOCETO: velas esquemáticas (rotuladas «ilustración») con el máximo de los N días marcado y el cierre que lo supera con flecha de compra. kb=in.

**[1:15 — Qué es un punto básico]** (pantalla: costo por rotación)
Un punto básico es una centésima de un por ciento. Cada vez que la posición cambia, o sea, cada vez que entras o sales, el motor descuenta 3 puntos básicos. Parece nada. Pero si entras y sales muy seguido, esa nada se suma día tras día.
BOCETO: contador «3 bps» que se descuenta de la curva con cada entrada y salida; una curva que sube lento y se va comiendo por las rebanadas. kb=out.

**[2:00 — Sin costos y con costos]** (pantalla: dos barras)
Tomemos la ruptura de 1 día, la más rápida. Sin contar costos, su Sharpe en el periodo de diseño, 2014–2020, es −0.10. Ya es negativo: no hay ventaja bruta, perseguir la ruptura del rango previo no deja nada. Con costos, el Sharpe es −1.58. Los costos no crean la pérdida, pero la convierten en una pérdida enorme.
BOCETO: las mismas dos barras de la miniatura, con una flecha «+3 bps por rotación» entre ellas. Golpe de bajo + sacudida en −1.58.

**[2:50 — Cuanto más corta la ventana, más pierde]** (pantalla: escalera de cuatro barras)
Ahora compara las ventanas, sin filtro. En el periodo de diseño, la ruptura de 5 días da −0.97, la de 3 días −1.05, la de 2 días −1.13 y la de 1 día −1.58. Cuanto más corta la ventana, más pierde. Mi lectura, que no medí: una ventana corta se rompe más veces, así que entra y sale más veces, y paga más costos. No medí el número de operaciones de cada una.
| Ventana de ruptura | Sharpe 2014–20 |
|---|---|
| 5 días | −0.97 |
| 3 días | −1.05 |
| 2 días | −1.13 |
| 1 día | −1.58 |
BOCETO: escalera de cuatro barras rojas que crecen hacia abajo; etiqueta gris «razonamiento, no medido» junto a la explicación de las operaciones. kb=in.

**[3:50 — Resultado completo y filtros]** (pantalla: checklist)
Ninguna de las seis formas supera el 0.13 de comprar y esperar en el periodo de diseño. Ninguna pasa el Deflated Sharpe, que descuenta la suerte de probar muchas ideas: su máximo es 0.00, cuando se exige 0.95. Y el mejor Monte Carlo tiene un p de 0.16, lejos de 0.05. Máximo de filtros superados: 0 de 5.
BOCETO: cinco puertas cerradas con sus umbrales (0.13 / 0.30 / 0.30 / 0.95 / p < 0.05) y «0 / 5» en rojo. kb=out.

**[4:20 — Con tu capital]** (pantalla: tarjeta de capital)
La curva de la forma de mejor Sharpe de diseño, MA200 con ruptura de 5 días, sobre la cesta de 8 entre 2007 y 2024. Con 100,000 dólares pierde 25,460. Comprar y esperar la misma cesta gana 14,407. Con 10,000 dólares serían unos −2,546 contra +1,441.
BOCETO: curvas reales de `series/extra-v85.json` (estrategia roja cayendo, «Sin estrategia» blanca subiendo) con contadores finales.

**[4:50 — Conclusión]**
La ruptura del máximo de ayer no deja ventaja antes de costos, y los costos hacen el resto. Si una estrategia opera seguido, el costo es parte de la estrategia, no un detalle. El trading no se promete: se prueba.

**[5:15 — Ficha del experimento #85]** (pantalla: tarjeta con la ficha y la URL)
Ficha del experimento #85. Estado: murió. Cifra clave: la ruptura de 1 día da −0.10 sin costos y −1.58 con costos; con 100,000 dólares, la mejor de diseño pierde 25,460. Filtro que decidió: batir a comprar y esperar, 0 de 6 superan 0.13. Lección: el costo es parte de la estrategia. Revísalo completo en atlas-lab-one.vercel.app/e/85.
BOCETO: tarjeta con el número «#85», el sello «MURIÓ» en rojo, tres líneas (cifra clave, filtro que decidió, lección) y la URL `atlas-lab-one.vercel.app/e/85` grande abajo. kb=in.

**[5:35 — Cierre]**
Todos los datos en atlas-lab-one.vercel.app, experimento 85. Contenido educativo, no es asesoría financiera.

---

## SHORT (9:16, ≈ 48 s)

**[0-3 s]** «Sin costos: Sharpe de menos 0.10. Con costos: menos 1.58.»
BOCETO: barra gris −0.10 y barra roja −1.58 sobre b-roll de gráfico (kb=in), overlay 0.6.

**[3-15 s]** «La regla: comprar cuando el cierre supera el máximo de ayer. Siete divisas y oro, de 2007 a 2024.»
BOCETO: velas con el máximo previo y flecha de compra (kb=out); ticker arriba.

**[15-30 s]** «Cada vez que entras o sales pagas 3 puntos básicos. Cuanto más corta la ventana, más pierde: de 5 días, menos 0.97. De 1 día, menos 1.58.»
BOCETO: escalera de cuatro barras rojas; tick en cada cifra; golpe de bajo + sacudida en −1.58.

**[30-42 s]** «Con 100,000 dólares, la mejor de diseño pierde 25,460. Comprar y esperar gana 14,407.»
BOCETO: tarjeta de capital con contadores −$25,460 rojo y +$14,407 blanco/verde.

**[42-48 s]** «El video completo está en el canal, y el experimento #85 completo, en el enlace. Sin costos, apenas menos 0.10. Con costos, menos 1.58.»
BOCETO: texto final «Video completo en el canal · Experimento #85 completo en el enlace» + pequeño «No es asesoría financiera · El trading no se promete: se prueba». Loop: repite las dos cifras del hook.

---

## Descripción de YouTube (video largo)
https://atlas-lab-one.vercel.app/e/85?utm_source=youtube&utm_medium=video&utm_campaign=exp085-t2
Ficha del experimento #85: murió · 6 formas del núcleo diario de la ruptura del rango previo, 0 de 5 filtros · Sharpe 2014–2020 de −0.54 a −1.58 · ruptura de 1 día: −0.10 sin costos, −1.58 con costos · con $100,000: −$25,460 contra +$14,407 de comprar y esperar.
Explico cuánto pesa el costo (3 puntos básicos por rotación) en la estrategia del «71% de aciertos» de TikTok, probada en su versión diaria sobre 7 pares de divisas y oro (2007–2024).
Contenido educativo. No es asesoría financiera ni recomendación de inversión.

## Descripción de YouTube (Short)
https://atlas-lab-one.vercel.app/e/85?utm_source=youtube&utm_medium=short&utm_campaign=exp085-t2
Ficha del experimento #85: murió · ruptura de 1 día: −0.10 sin costos y −1.58 con costos · con $100,000: −$25,460 contra +$14,407.
Contenido educativo. No es asesoría financiera.

## Capítulos
0:00 Gancho · 0:15 Qué es este experimento · 0:25 La regla · 1:15 Qué es un punto básico · 2:00 Sin y con costos · 2:50 Ventana más corta · 3:50 Resultado y filtros · 4:20 Con tu capital · 4:50 Conclusión · 5:15 Ficha del experimento

## Etiquetas
costos de trading, ruptura del máximo, breakout, puntos básicos, sharpe ratio, estrategia de tiktok, backtest, rotación, 71% de aciertos, forex, atlas lab, trading con datos

## Rúbrica (autoevaluación, 1–5)
| Pieza | hook_0_3s | ritmo | promesa_cumplida | potencial_loop | claridad_no_traders | honestidad_atlas | audio | cta | Promedio |
|---|---|---|---|---|---|---|---|---|---|
| Largo | 5 | 4 | 5 | 4 | 4 | 5 | 4 | 4 | 4.4 |
| Short | 5 | 4 | 5 | 5 | 4 | 5 | 4 | 4 | 4.5 |

Hook ≥ 4 ✓ · honestidad 5 ✓. Punto débil: solo se prueba el núcleo diario; el esquema completo es intradía y discrecional. La relación entre ventana corta y más operaciones es una lectura no medida y se rotula así.

# Experimento #74 — Tema 2: La tortuga año por año (le ganó al mercado en 5 de 13 años, cuatro de ellos en años de caída)

**Tema 2 de 3 del experimento #74** · Qué aporta frente a los otros temas: es el tema «con tu capital y el calendario». Baja las curvas de Turtle y de comprar y esperar a cada año calendario, de 2012 a 2024, para ver cuándo gana, cuándo se queda atrás, y qué hay detrás de un Sharpe de 0.21 en un periodo y 0.75 en otro. Se entiende sin los otros temas.
Estado del guion: **BORRADOR — pendiente de aprobación**
Estado del experimento: **parcial** (fuera de muestra logra Sharpe 0.75, sobre 0.67 sin estrategia, pero en 2012–2018 solo 0.21: depende del periodo)
Serie: B (estrategias famosas, puestas a prueba). Su cartera base se analiza por Calmar y retiros en #78.
Datos usados: `series/extra-v74.json` ([0] Turtle Donchian 20/10, [1] los 11 activos comprar y esperar): retornos por año calendario (último valor de cada año contra el del año anterior), peor caída y tiempo bajo el agua, calculados de las curvas · `experiments.json` (v=74: kpis, metrics, params_view, analysis) · `exp_details.json` (extra-v74: algo, code) · tabla «Con tu capital» (fila #74: +$41,686 contra +$92,344).
Producción (CLAUDE.md del canal): b-roll real detrás de cada escena con overlay 0.6, Ken Burns alternando, subtítulos karaoke en MAYÚSCULAS, un dato visual por escena. Colores: rojo `#e11d2a`, verde `#22c55e`, fondo `#09090b`.

## Títulos
1. Turtle Trading año por año: mejor que el mercado en 5 de 13 años
2. La tortuga gana cuando el mercado cae: 2014, 2015, 2018 y 2022
3. 13 años de Turtle: +14.0% en 2020 y casi nada en los años buenos

## Miniatura
Fondo `#09090b`. Una tortuga verde `#22c55e` sobre una fila de 13 barras anuales: cinco iluminadas en verde y ocho apagadas en gris. Texto grande: «5 DE 13». Logo ATLAS arriba a la derecha.

---

## VIDEO LARGO (≈ 6 min)

**[0:00 — Gancho]** (pantalla: fila de 13 barras anuales; cinco se iluminan en verde y aparece «5 de 13 años»)
BOCETO: las 13 barras aparecen grises; cinco se encienden en verde una a una con tick; golpe de bajo en la quinta (2020).
> Turtle Trading le ganó al mercado en 5 de 13 años. Cuatro de esos años fueron años en que el mercado cayó. Hoy la miro año por año, de 2012 a 2024.

**[0:18 — Qué experimento es]** (pantalla: rótulo «Experimento #74 · ATLAS Lab» y el nombre debajo)
BOCETO: rótulo con el número 74 y el nombre «Turtle Trading — ruptura de Donchian (Richard Dennis)»; logo en la esquina.
> Este es el experimento #74 de ATLAS Lab: Turtle Trading, ruptura de Donchian. Todos los resultados están en la página del experimento.

**[0:40 — La regla en 20 segundos]** (pantalla: canal de Donchian con 20 y 10)
BOCETO: precio con una línea superior (máximo de 20 días) y una inferior (mínimo de 10); compra al romper arriba, salida al romper abajo.
> La regla de Richard Dennis: compra cuando el precio rompe su máximo de 20 días, sal cuando pierde su mínimo de 10. Solo en largo, sobre once activos: cuatro índices, oro, cuatro pares de divisas, Brent y WTI, con el mismo peso, 3 puntos básicos de costo por movimiento y la señal de ayer. Comparo con comprar y esperar esos mismos once activos.

**[1:10 — La tabla año por año]** (pantalla: tabla de 13 filas con barras)
BOCETO: barras verdes y rojas por año; las filas donde Turtle supera al mercado, resaltadas; nota «cifras calculadas de las curvas».
| Año | Turtle | Comprar y esperar |
|---|---|---|
| 2012 | −0.3% | +6.4% |
| 2013 | +1.5% | +8.6% |
| 2014 | −1.7% | −9.8% |
| 2015 | −2.1% | −7.5% |
| 2016 | +4.7% | +11.3% |
| 2017 | +4.9% | +14.5% |
| 2018 | −0.2% | −8.3% |
| 2019 | +3.0% | +16.6% |
| 2020 | +14.0% | +8.9% |
| 2021 | +5.8% | +16.6% |
| 2022 | +0.8% | −3.7% |
| 2023 | +6.1% | +10.3% |
| 2024 | 0.0% | +8.7% |
> Cada fila es el cambio del capital dentro de ese año calendario. Turtle supera al mercado en cinco años: 2014, 2015, 2018, 2020 y 2022.

**[2:20 — Los años malos: la tortuga se esconde]** (pantalla: cuatro pares de barras)
BOCETO: cuatro pares: mercado en rojo largo, Turtle en verde o rojo muy corto; texto «peor año de Turtle: −2.1% · peor año del mercado: −9.8%».
> En los cuatro años en que el mercado cayó, 2014, 2015, 2018 y 2022, Turtle hizo −1.7%, −2.1%, −0.2% y +0.8%. El mercado: −9.8%, −7.5%, −8.3% y −3.7%. Su peor año, −2.1%, es mucho mejor que el peor año del mercado, −9.8%. Eso es lo que se ve en su peor caída: −9.5% contra −29.8%.

**[3:05 — Los años buenos: se queda atrás]** (pantalla: pares de barras donde la gris es mucho más alta)
BOCETO: 2017, 2019 y 2021 en pares: Turtle +4.9%, +3.0% y +5.8% contra +14.5%, +16.6% y +16.6%; texto «menos riesgo, menos ganancia».
> En los años buenos del mercado, la tortuga se queda atrás: 2017, +4.9% contra +14.5%; 2019, +3.0% contra +16.6%; 2021, +5.8% contra +16.6%. Por estar parte del tiempo en efectivo, gana poco cuando todo sube. Y 2024 terminó en cero mientras el mercado ganaba 8.7%.

**[3:50 — Y el año de la tortuga: 2020]** (pantalla: barra de 2020 destacada: +14.0% contra +8.9%)
BOCETO: la barra de 2020 se ilumina; la curva del año muestra una caída y un rebote; texto «el mejor año».
> El mejor año de Turtle es 2020, con +14.0%, contra +8.9% del mercado. Cae dentro del periodo fuera de muestra, 2019 a 2024, y ayuda a explicar su Sharpe de 0.75 allí, contra 0.21 en 2012–2018, donde su mejor año fue +4.9%. El Sharpe mide cuánto rindes por cada unidad de riesgo. Es una lectura, no una medición separada del efecto de 2020.

**[4:35 — La paciencia que exige]** (pantalla: curva con un tramo largo sin máximos nuevos)
BOCETO: la curva de Turtle con el tramo de septiembre de 2012 a febrero de 2015 sombreado; contador «2.4 años».
> La estrategia exige paciencia: entre septiembre de 2012 y febrero de 2015, unos 2.4 años, el capital no hizo un máximo nuevo. Terminó con 8 años positivos de 13, uno menos que comprar y esperar, que tuvo 9.

**[5:00 — Con tu capital]** (pantalla: tarjeta «Con tu capital» con el selector)
BOCETO: curva verde contra gris; contadores finales; nota «misma cartera del experimento 78».
> Con $10,000, Turtle dio +$4,169; comprar y esperar, +$9,234. Con $100,000: +$41,686 contra +$92,344, con una peor caída de −9.5% contra −29.8%. Menos riesgo, menos de la mitad del dinero.

**[5:30 — Preguntas de un escéptico]** (pantalla: tres tarjetas: «¿otras ventanas?», «¿con corto?», «¿un año o una ley?»)
BOCETO: tres tarjetas que se voltean con «no probado» y «sin Deflated Sharpe».
> Preguntas que me haría un escéptico. ¿Y con otras ventanas distintas de 20 y 10? No las probé. ¿Y vendiendo en corto? Esta versión es solo en largo. ¿Y que 2020 sea una casualidad? Es justo lo que dice el video: un año explica gran parte del contraste, y no apliqué Deflated Sharpe ni Monte Carlo.

**[5:55 — Ficha del experimento #74]** (pantalla: tarjeta con la ficha y la URL abajo)
BOCETO: tarjeta con cinco líneas que entran con tick y, al final, la URL resaltada en verde.
> Ficha del experimento 74. Estado: parcial. Cifras clave: Sharpe de 0.21 en 2012–2018 y de 0.75 fuera de muestra; retorno fuera de muestra de +32.8% contra +70.8%. Lo que decidió: la inconsistencia entre periodos. Lección: no juzgues una estrategia de tendencia por un solo periodo. Revísalo completo en atlas-lab-one.vercel.app/e/74.

**[6:25 — Cierre]**
BOCETO: la tortuga sobre las 13 barras; logo.
> Todos los datos en atlas-lab-one.vercel.app, experimento 74. El trading no se promete: se prueba. Contenido educativo, no es asesoría financiera.

---

## SHORT (9:16, ≈ 48 s)

**[0-3 s]** (boceto: 13 barras anuales, cinco en verde; b-roll de tortuga en el agua, kb=in; golpe de bajo)
> Turtle Trading le ganó al mercado en 5 de 13 años. Cuatro, en años de caída.

**[3-13 s]** (boceto: canal de Donchian; whoosh)
> La regla: compra al romper el máximo de 20 días, sal al perder el mínimo de 10. Once activos, con costos, de 2012 a 2024.

**[13-26 s]** (boceto: cuatro pares de barras: 2014, 2015, 2018, 2022; ticks)
> En 2014, 2015, 2018 y 2022 hizo −1.7%, −2.1%, −0.2% y +0.8%. El mercado: −9.8%, −7.5%, −8.3% y −3.7%.

**[26-36 s]** (boceto: barra de 2020: +14.0% contra +8.9%)
> El quinto fue 2020: +14.0% contra +8.9%. Su mejor año.

**[36-43 s]** (boceto: 2019: barra verde corta +3.0% y gris larga +16.6%)
> Pero en los años buenos se queda atrás: en 2019, +3.0% contra +16.6%.

**[43-48 s]** (boceto: texto «Experimento #74 completo en el enlace»; logo)
> Video completo en el canal y experimento #74 completo en el enlace. ¿Prefieres perder menos o ganar más?

Gancho alterno A: «+14.0% en 2020: el año que explica el Sharpe de 0.75.» · B: «Turtle: su peor año fue −2.1%. El del mercado, −9.8%.»

## Descripción de YouTube — video largo
https://atlas-lab-one.vercel.app/e/74?utm_source=youtube&utm_medium=video&utm_campaign=exp074-t2
Ficha: experimento #74, Turtle Trading (Richard Dennis). Estado: parcial. Sharpe 0.21 en 2012–2018 y 0.75 fuera de muestra; con $100,000, +$41,686 contra +$92,344; peor caída −9.5% contra −29.8%.
Turtle año por año, de 2012 a 2024, en 11 activos con costos de 3 puntos básicos: le gana al mercado en 5 de 13 años, cuatro de ellos en años de caída.
Contenido educativo. No es asesoría financiera ni recomendación de inversión.

## Descripción de YouTube — Short
https://atlas-lab-one.vercel.app/e/74?utm_source=youtube&utm_medium=short&utm_campaign=exp074-t2
Ficha: experimento #74, parcial. Turtle le ganó al mercado en 5 de 13 años; su mejor año, 2020: +14.0% contra +8.9%. Contenido educativo, no es asesoría financiera.

## Capítulos
0:00 Gancho · 0:18 Qué experimento es · 0:40 La regla en 20 segundos · 1:10 La tabla año por año · 2:20 Los años malos · 3:05 Los años buenos · 3:50 El año de la tortuga: 2020 · 4:35 La paciencia que exige · 5:00 Con tu capital · 5:30 Preguntas de un escéptico · 5:55 Ficha del experimento #74 · 6:25 Cierre

## Etiquetas
Turtle Trading, Richard Dennis, canal de Donchian, seguimiento de tendencia, año por año, retorno anual, estrategias famosas, drawdown, backtest, trading con datos, ATLAS Lab, comprar y mantener

## Rúbrica (autoevaluación, 1–5)
| Pieza | hook_0_3s | ritmo | promesa_cumplida | potencial_loop | claridad_no_traders | honestidad_atlas | audio | cta | Promedio |
|---|---|---|---|---|---|---|---|---|---|
| Largo | 5 | 4 | 5 | 4 | 4 | 5 | 4 | 4 | 4.38 |
| Short | 5 | 4 | 5 | 4 | 4 | 5 | 4 | 4 | 4.38 |

Hook ≥ 4 ✓ · honestidad 5 ✓. Punto débil: los retornos por año salen de la curva (no de la ficha del sitio) y el largo lo rotula en pantalla; la frase sobre 2020 y el Sharpe de 0.75 es una lectura, no una medición, y se dice como «ayuda a explicar».

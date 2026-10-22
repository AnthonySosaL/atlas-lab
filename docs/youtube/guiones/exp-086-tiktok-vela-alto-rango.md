# Experimento #86 — TikTok 2: MA200 a favor de la tendencia + vela de alto rango o volumen

Estado del guion: **BORRADOR — pendiente de aprobación**
Estado del experimento: **murió** (las 10 formas murieron sin pasar ningún filtro, 0 de 5; la peor llega a −1.55 fuera de muestra) · Serie A — «Probé la estrategia de TikTok» (plan-series.md) · 1 largo + 1 Short
Datos usados: `experiments.json` (v=86: kpis, metrics, forms, verdict, analysis, market, period), `exp_details.json` (extra-v86: algo, code, filters), `series/extra-v86.json` (1.ª curva = «MA200 + volumen>2.0x(20)», cesta de 8; 2.ª = «Sin estrategia»), tabla «Con tu capital» de `docs/youtube`.
Producción (CLAUDE.md del canal): b-roll real detrás de cada escena con overlay oscuro 0.6, Ken Burns alternando in/out, subtítulos karaoke en MAYÚSCULAS con palabras clave en rojo, un dato visual por escena, golpe de bajo + sacudida solo en 1–2 momentos. Colores: rojo `#e11d2a`, verde `#22c55e`, fondo `#09090b`. Cifras en dígitos aquí; en el campo `tts` del JSON, en palabras.

## Títulos (3 opciones)
1. El TikTok de «+30% al año»: probé 10 versiones, 0 pasan
2. «30 años de backtest»: la estrategia de la vela grande, probada
3. MA200 con vela de alto volumen: la mejor da un Sharpe de 0.08

## Miniatura (pensada para el título 1)
Fondo `#09090b`. Una vela verde gigante con un sello rojo ✕ encima. Texto: «CERO FILTROS» en blanco y rojo (2 palabras; sin repetir el título). Logo ATLAS arriba a la derecha.

---

## VIDEO LARGO (16:9, ≈ 7½ min)

**[0:00 — Gancho]** (pantalla: «+30% al año» y una vela grande)
Un TikTok promete +30% al año con 30 años de backtest. La receta: la media de 200 días para saber la dirección, entrar en una vela grande y piramidar hasta tres veces. Probé 10 versiones de su parte diaria. Ninguna pasó ni un solo filtro: 0 de 5. Y la peor llegó a un Sharpe de −1.55 en datos que nunca vio.
BOCETO: «+30%» en blanco que se rompe en pedazos; contador «0 / 10» rojo. Barra de «Sharpe fuera de muestra» que cae hasta −1.55. kb=in.

**[0:25 — Presentación]** (pantalla: rótulo «Experimento #86 · TikTok 2: MA200 a favor de la tendencia + vela de alto rango o volumen»)
Este es el experimento #86 de ATLAS Lab: TikTok 2, MA200 a favor de la tendencia más vela de alto rango o volumen. Todos los resultados están en la página del experimento.
BOCETO: rótulo en rojo y blanco «EXPERIMENTO #86» con el nombre debajo, sobre la última imagen del gancho atenuada (overlay 0.6); whoosh corto; logo en la esquina.

**[0:40 — La receta]** (pantalla: esquema de vela, rango promedio y pirámide)
Es reversión a la media operando a favor de la tendencia. Paso uno: la media de 200 días marca la dirección. Paso dos: esperar una vela de alto volumen o de alto rango, que supere el rango diario promedio. Paso tres: entrar y piramidar hasta tres veces, con el mismo riesgo. Paso cuatro: ratio de 1 a 3. Quien lo cuenta lo respalda con 30 años de backtest.
BOCETO: gráfico de velas esquemático (rotulado «ilustración»): MA200, una vela con rango doble del promedio, flechas de entrada escalonadas. kb=out.

**[1:35 — Qué probé (y qué no)]** (pantalla: dos columnas «probado» y «no probado»)
Probé la versión diaria, sin pirámide ni stops. La posición dura el día siguiente a la vela grande y no distingue si la vela fue alcista o bajista. Es una prueba del núcleo diario, no del esquema completo: la pirámide y el ratio de 1 a 3 no están en este experimento.
BOCETO: ✓ «Probado: MA/EMA 100 o 200 + vela de alto rango o volumen, diario» / ✗ «No probado: pirámide ×3, stops, ratio 1:3».

**[2:25 — Cómo lo probé]** (pantalla: 10 combinaciones y 5 filtros)
Diez combinaciones: un filtro de media móvil o EMA de 100 o 200 días, con el cierre por encima, y un gatillo de expansión: un rango del día mayor que 1.5 o 2.0 veces su promedio de 10, 20 o 50 días, o un volumen mayor que 1.5 o 2.0 veces su promedio. Siete pares de divisas y oro, señal ejecutada al día siguiente, 3 puntos básicos de costo y solo compra. Los cinco filtros de siempre: dos periodos fuera de muestra, 2007–2013 y 2021–2024, con Sharpe mayor que 0.30; Deflated Sharpe mayor que 0.95, con un contador global de 33,363 intentos; Monte Carlo; y superar a comprar y esperar, cuyo Sharpe en 2014–2020 es 0.13.
BOCETO: diagrama «filtro de dirección Y gatillo de expansión»; cinco puertas con sus umbrales; checklist `filters`: ✓ costos, ✓ rezago de 1 día.

**[3:30 — Resultados]** (pantalla: tabla animada)
En el periodo de diseño, 2014–2020, la mejor da apenas 0.08, y comprar y esperar da 0.13. Fuera de muestra, la mejor de 2007–2013 es −0.37 y la mejor de 2021–2024, −0.32. El Deflated Sharpe máximo es 0.001, y el Monte Carlo no baja de un p de 0.14. Cero de diez pasan cualquiera de los filtros.
| Forma | 2014–20 | 2007–13 | 2021–24 |
|---|---|---|---|
| MA200 + volumen>2.0x(20) | 0.08 | −1.00 | −0.32 |
| MA200 + rango>2.0x(20) | −0.28 | −0.37 | −1.11 |
| MA200 + volumen>1.5x(20) | −0.47 | −0.47 | −0.45 |
| EMA200 + volumen>1.5x(20) | −0.51 | −0.42 | −0.45 |
| MA100 + volumen>1.5x(20) | −0.57 | −0.64 | −0.53 |
| EMA200 + rango>1.5x(20) | −0.68 | −0.57 | −1.55 |
| MA200 + rango>1.5x(10) | −0.74 | −0.73 | −1.03 |
| MA100 + rango>1.5x(20) | −0.76 | −0.74 | −1.48 |
| MA200 + rango>1.5x(20) | −0.85 | −0.78 | −1.35 |
| MA200 + rango>1.5x(50) | −0.88 | −0.79 | −1.24 |
BOCETO: tabla fila a fila con barras rojas hacia abajo; −1.55 resaltado con golpe de bajo + sacudida. Sello «0 / 10».

**[4:50 — Por qué pierde]** (pantalla: dos barras con y sin costos)
Operar solo el día siguiente a una vela grande, sin mirar su dirección, no tiene una ventaja bruta clara: sin contar costos, el Sharpe va de −0.73 a +0.44 según la forma y el periodo. Y el costo de entrar y salir cada vez se la come. Sobre la pirámide, mi razonamiento es que promediar sobre una entrada sin ventaja solo amplifica la pérdida; eso no lo probé.
BOCETO: rango de barras «sin costos: de −0.73 a +0.44» frente a «con costos: casi todo negativo». Etiqueta «razonamiento, no medido» en gris junto a la frase de la pirámide. kb=in.

**[5:40 — Con tu capital]** (pantalla: tarjeta de capital)
La curva de la forma que mejor salió en el periodo de diseño, MA200 con volumen mayor que 2.0 veces su promedio, sobre la cesta de 8 entre 2007 y 2024. Con 100,000 dólares pierde 5,692. Comprar y esperar la misma cesta gana 14,407. Con 10,000 dólares serían unos −569 contra +1,441. Es lo que pasó, no una promesa.
BOCETO: curvas reales de `series/extra-v86.json` (estrategia en rojo, ligeramente a la baja; «Sin estrategia» en blanco subiendo) con contadores finales.

**[6:25 — Conclusión]**
Las 10 formas murieron sin pasar ningún filtro. El +30% al año no apareció. El trading no se promete: se prueba.

**[6:50 — Ficha del experimento #86]** (pantalla: tarjeta con la ficha y la URL abajo)
Ficha del experimento 86. Estado: murió. Cifra clave: las 10 formas pasan 0 de 5 filtros; la mejor de diseño da Sharpe de 0.08 contra 0.13 de comprar y esperar, y con 100,000 dólares pierde 5,692. Filtro que decidió: el Deflated Sharpe, con un máximo de 0.001 cuando se exige 0.95. Lección: el +30% al año anunciado no apareció. Revísalo completo en atlas-lab-one.vercel.app/e/86.
BOCETO: tarjeta con el número «#86», el sello «MURIÓ» en rojo y cuatro líneas (estado, cifra clave, lo que decidió, lección) que entran con tick; al final, la URL «atlas-lab-one.vercel.app/e/86» grande y resaltada en verde. kb=in.

**[7:15 — Cierre]**
Todos los datos en atlas-lab-one.vercel.app/e/86. Contenido educativo, no es asesoría financiera.

---

## SHORT (9:16, ≈ 49 s)

**[0-3 s]** «Un TikTok promete +30% al año. Probé 10 versiones: pasan cero de cinco filtros.»
BOCETO: «+30%» gigante que se rompe; contador «0/10» rojo sobre b-roll de velas (kb=in), overlay 0.6.

**[3-14 s]** «La media de 200 días para la dirección y entrar en una vela de alto volumen o alto rango. Versión diaria, siete divisas y oro, con costos.»
BOCETO: vela gigante sobre la MA200, flecha de entrada (kb=out); ticker arriba.

**[14-30 s]** «El mejor Sharpe de diseño: 0.08. Comprar y esperar: 0.13. Fuera de muestra, la peor llega a −1.55.»
BOCETO: barra 0.08 verde pálido frente a línea 0.13; barra −1.55 roja cayendo; golpe de bajo + sacudida.

**[30-42 s]** «Con 100,000 dólares, la mejor de diseño pierde 5,692. Comprar y esperar gana 14,407.»
BOCETO: tarjeta de capital con contadores: −$5,692 rojo, +$14,407 blanco/verde.

**[42-49 s]** «El video completo está en el canal y experimento #86 completo en el enlace. Prometen treinta por ciento… y pasan cero.»
BOCETO: sello ✕; texto final «Video completo en el canal · Experimento #86 completo en el enlace» + pequeño «No es asesoría financiera · El trading no se promete: se prueba». Loop: «pasan cero» responde al hook.

---

## Descripción de YouTube (video largo)
https://atlas-lab-one.vercel.app/e/86?utm_source=youtube&utm_medium=video&utm_campaign=exp086-t1
Ficha del experimento #86: murió · 10 formas, 0 de 5 filtros · mejor Sharpe de diseño 0.08 contra 0.13 de comprar y esperar · con $100,000, la mejor de diseño pierde $5,692.
Un TikTok promete «+30% al año con 30 años de backtest»: MA200 como dirección y entrada en una vela de alto volumen o rango. Probé su versión diaria en 10 formas (7 pares de divisas + oro, 2007–2024, costos de 3 puntos básicos, 5 filtros): 0 pasan ningún filtro y la peor llega a −1.55 de Sharpe en 2021–2024.
Contenido educativo. No es asesoría financiera ni recomendación de inversión.

## Descripción de YouTube (Short)
https://atlas-lab-one.vercel.app/e/86?utm_source=youtube&utm_medium=short&utm_campaign=exp086-t1
Ficha del experimento #86: murió · +30% anual anunciado: 0 de 10 formas pasan ningún filtro.
Contenido educativo, no es asesoría financiera.

## Capítulos
0:00 Gancho · 0:25 Presentación · 0:40 La receta · 1:35 Qué probé · 2:25 Cómo lo probé · 3:30 Resultados · 4:50 Por qué pierde · 5:40 Con tu capital · 6:25 Conclusión · 6:50 Ficha del experimento #86

## Etiquetas
estrategia de tiktok, media de 200 días, vela de alto volumen, reversión a la media, piramidar, backtest, sharpe ratio, fuera de muestra, deflated sharpe, forex, atlas lab, trading con datos

## Rúbrica (autoevaluación, 1–5)
| Pieza | hook_0_3s | ritmo | promesa_cumplida | potencial_loop | claridad_no_traders | honestidad_atlas | audio | cta | Promedio |
|---|---|---|---|---|---|---|---|---|---|
| Largo | 5 | 4 | 5 | 4 | 4 | 5 | 4 | 4 | 4.4 |
| Short | 5 | 4 | 5 | 5 | 4 | 5 | 4 | 4 | 4.5 |

Hook ≥ 4 ✓ · honestidad 5 ✓. Punto débil: la pirámide y el ratio 1:3 del TikTok no se probaron; el video lo dice dos veces y rotula como «razonamiento» lo que no se midió.

## Otros temas de este experimento
Cada tema es un video largo más un Short, con el mismo formato y las mismas reglas que el tema 1; cada uno se puede ver solo.
1. `exp-086-tiktok-vela-alto-rango.md` — Tema 1: El TikTok de «+30% al año»: probé 10 versiones, 0 pasan
2. `exp-086-t2-vela-grande-dos-veces.md` — Tema 2: Vela de 2.0 veces su promedio: la única versión con Sharpe positivo (0.08)
3. `exp-086-t3-treinta-anos-de-backtest.md` — Tema 3: Misma regla, tres épocas: 0.08, −1.00 y −0.32. Lo que esconde un backtest largo

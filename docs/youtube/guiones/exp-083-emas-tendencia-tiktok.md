# Experimento #83 — EMAs a favor de la tendencia (ranking de TikTok) — 8 formas

Estado del guion: **BORRADOR — pendiente de aprobación**
Estado del experimento: **murió** (las 8 formas murieron, máximo 1 de 5 filtros; ninguna supera el Sharpe 0.13 de comprar y esperar) · Serie A — «Probé la estrategia de TikTok» (plan-series.md) · 1 largo + 1 Short
Datos usados: `experiments.json` (v=83: kpis, metrics, forms, verdict, analysis, market, period), `exp_details.json` (extra-v83: algo, code, filters), `series/extra-v83.json` (1.ª curva = EMA-cross 50/200, cesta de 8; 2.ª = «Sin estrategia»), tabla «Con tu capital» de `docs/youtube`.
Producción (CLAUDE.md del canal): b-roll real detrás de cada escena con overlay oscuro 0.6, Ken Burns alternando in/out, subtítulos karaoke en MAYÚSCULAS con palabras clave en rojo, un dato visual por escena, golpe de bajo + sacudida solo en 1–2 momentos. Colores: rojo `#e11d2a`, verde `#22c55e`, fondo `#09090b`. Cifras en dígitos aquí; en el campo `tts` del JSON, en palabras.

## Títulos (3 opciones)
1. EMAs «nivel excelente» en TikTok: 8 formas, 0 sobreviven
2. Probé el método «excelente» de un ranking de TikTok con 5 filtros
3. EMAs a favor de la tendencia: la mejor pasa 1 de 5

## Miniatura (pensada para el título 1)
Fondo `#09090b`. Una fila de tier-list dorada con la etiqueta «S» y dos líneas de EMA cruzándose; encima, un sello rojo ✕. Texto grande: «1 DE 5» (verde, el máximo de filtros superados). Logo ATLAS arriba a la derecha.

---

## VIDEO LARGO (16:9, ≈ 8 min)

**[0:00 — Gancho]** (pantalla: tier-list con una fila «excelente»)
Un video de TikTok ordena métodos de trading en un ranking: excelente, medio, malo. En «excelente» pone operar con medias exponenciales a favor de la tendencia. Lo probé en 8 formas, con los mismos cinco filtros de siempre. Sobrevivieron 0. La mejor superó apenas 1 de los 5 filtros.
BOCETO: tier-list animada (S/A/B) con la fila superior dorada; entra un sello rojo ✕ y el contador «0 / 8». kb=in. Texto: «Máximo de filtros: 1/5».

**[0:20 — Presentación]** (pantalla: rótulo «Experimento #83 · EMAs a favor de la tendencia (ranking de TikTok), 8 formas»)
Este es el experimento #83 de ATLAS Lab: EMAs a favor de la tendencia, el ranking de TikTok, 8 formas. Todos los resultados están en la página del experimento.
BOCETO: rótulo en rojo y blanco «EXPERIMENTO #83» con el nombre debajo, sobre la última imagen del gancho atenuada (overlay 0.6); whoosh corto; logo en la esquina.

**[0:45 — El método]** (pantalla: dos líneas de EMA)
El autor del video dice que ese método fue lo que lo hizo rentable. Es concreto y comprobable. Una EMA, o media móvil exponencial, es un promedio de precios que pesa más los días recientes. Operar a favor de la tendencia significa comprar cuando el precio está sobre su EMA, o cuando una EMA rápida está sobre una lenta. Si eso fuera una ventaja, saldría en los datos.
BOCETO: precio con una EMA rápida (verde) y una lenta (blanca); marca de compra cuando la rápida cruza hacia arriba (esquema ilustrativo, rotulado «ilustración»). kb=out.

**[1:40 — Cómo lo probé]** (pantalla: las 8 formas y los 5 filtros)
Ocho formas. EMA-trend: compro si el cierre está sobre su EMA de 20, 50, 100 o 200 días. EMA-cross: compro si la EMA rápida está sobre la lenta, en 9/21, 12/26, 20/50 y 50/200, el famoso golden cross. Una cesta de 7 pares de divisas y oro, con la señal ejecutada al día siguiente, 3 puntos básicos de costo y solo compra. Cinco filtros. Uno y dos: Sharpe mayor que 0.30 en dos periodos que la estrategia nunca vio, 2007–2013 y 2021–2024. El Sharpe es la ganancia por unidad de riesgo. Tres: Deflated Sharpe mayor que 0.95, que descuenta la suerte de probar muchas ideas, con un contador global de 33,363 intentos. Cuatro: Monte Carlo con 5,000 rotaciones de la señal. Cinco: superar a comprar y esperar, cuyo Sharpe en 2014–2020 es 0.13.
BOCETO: cuadrícula 4+4 con las ocho formas; cinco puertas con sus umbrales (0.30 / 0.30 / 0.95 / p < 0.05 / 0.13); checklist `filters`: ✓ costos 3 bps, ✓ rezago de 1 día.

**[3:00 — Resultados]** (pantalla: tabla animada, una fila por forma)
En el periodo de diseño, 2014–2020, ninguna supera 0.13: la mejor da 0.10. En 2007–2013 solo una pasa 0.30, el cruce 50/200 con 0.36. En 2021–2024 pasan dos, el cruce 9/21 con 0.46 y el 12/26 con 0.38. Pero ninguna pasa dos filtros. El Deflated Sharpe máximo es 0.002, cuando se exige 0.95, y el Monte Carlo no baja de un p de 0.42.
| Forma | 2014–20 | 2007–13 | 2021–24 | Deflated Sharpe | Monte Carlo (p) |
|---|---|---|---|---|---|
| EMA-trend 200 | 0.10 | 0.24 | −0.26 | 0.001 | 0.42 |
| EMA-trend 100 | −0.14 | 0.09 | 0.04 | 0 | 0.61 |
| EMA-trend 50 | −0.19 | −0.05 | −0.02 | 0 | 0.54 |
| EMA-trend 20 | −0.50 | −0.16 | −0.13 | 0 | 0.73 |
| EMA-cross 50/200 | 0.10 | 0.36 | −0.16 | 0.002 | 0.60 |
| EMA-cross 12/26 | −0.28 | 0.19 | 0.38 | 0 | 0.84 |
| EMA-cross 9/21 | −0.34 | 0.14 | 0.46 | 0 | 0.86 |
| EMA-cross 20/50 | −0.01 | −0.01 | 0.23 | 0 | 0.59 |
BOCETO: tabla fila a fila; celdas > 0.30 en verde (solo tres), el resto en rojo/gris. Línea guía «comprar y esperar: 0.13» en la columna 2014–20. Golpe de bajo + sacudida cuando se ve la columna de Deflated Sharpe.

**[4:30 — Por qué falla]** (pantalla: texto)
Seguir la tendencia con medias es justo lo que el laboratorio ya había descartado en su versión simple: 408 variantes de medias, ninguna sobrevivió. Aquí agregué la versión exponencial y pasa lo mismo. Algunas formas lucen bien en un periodo, como el cruce 50/200 con 0.36 en 2007–2013, y colapsan en otro, con −0.16 en 2021–2024. Funcionar en una época y no en otra no es ventaja.
BOCETO: dos barras del cruce 50/200: 0.36 (verde, 2007–2013) y −0.16 (roja, 2021–2024). Cartel: «408 variantes de medias · 0 sobrevivientes» (de `notes`).

**[5:30 — Más allá del backtest]** (pantalla: tres tarjetas)
Hay tres cosas del video que no dependen de ningún backtest. Una: dice que los indicadores son basura, pero su método excelente es una EMA, que es un indicador. Dos: dice que el stop loss es basura, cuando la gestión de riesgo es lo único que evita reventar la cuenta. Tres: sugiere que los ganadores están en los índices sintéticos, números que genera el bróker, que no son un mercado real y que no probé. Son opiniones, no resultados medibles.
BOCETO: tres tarjetas que entran una a una con un icono; sin foto ni nombre de la persona; texto neutro en cada una.

**[6:30 — Con tu capital]** (pantalla: tarjeta de capital)
Esta es la curva de la forma que más filtros pasó, el cruce 50/200, sobre la cesta de 8 entre 2007 y 2024. Con 100,000 dólares gana 13,487. Comprar y esperar la misma cesta gana 14,407. Con 10,000 dólares serían unos +1,349 contra +1,441. Es casi lo mismo que no hacer nada: eso no es una ventaja, es el mercado.
BOCETO: curvas reales de `series/extra-v83.json` casi superpuestas (cruce 50/200 verde, «Sin estrategia» blanca); contadores finales.

**[7:10 — Conclusión]**
Las 8 formas murieron, con un máximo de 1 de 5 filtros, y ninguna supera el Sharpe de 0.13 de comprar y esperar. El nivel «excelente» no resistió los datos. El trading no se promete: se prueba.

**[7:40 — Ficha del experimento #83]** (pantalla: tarjeta con la ficha y la URL abajo)
Ficha del experimento 83. Estado: murió. Cifra clave: ninguna de las 8 formas supera el Sharpe de 0.13 de comprar y esperar; la mejor da 0.10. Filtro que decidió: el Deflated Sharpe, con un máximo de 0.002 cuando se exige 0.95. Lección: un nivel «excelente» en un ranking no es una prueba. Revísalo completo en atlas-lab-one.vercel.app/e/83.
BOCETO: tarjeta con el número «#83», el sello «MURIÓ» en rojo y cuatro líneas (estado, cifra clave, lo que decidió, lección) que entran con tick; al final, la URL «atlas-lab-one.vercel.app/e/83» grande y resaltada en verde. kb=in.

**[8:05 — Cierre]**
Todos los datos en atlas-lab-one.vercel.app/e/83. Contenido educativo, no es asesoría financiera.

---

## SHORT (9:16, ≈ 51 s)

**[0-3 s]** «Un TikTok pone esta estrategia en el nivel “excelente”. La probé: 0 de 8 sobreviven.»
BOCETO: tier-list con la fila dorada y sello ✕ rojo sobre b-roll de gráfico (kb=in); contador «0/8».

**[3-14 s]** «Operar con medias exponenciales a favor de la tendencia. Ocho versiones, cruces como el 50/200 y el 9/21, en siete divisas y oro, con costos.»
BOCETO: dos líneas de EMA cruzándose y la lista de las 8 formas pasando (kb=out).

**[14-30 s]** «Cinco filtros: dos periodos que nunca vio, Deflated Sharpe, Monte Carlo y batir a comprar y esperar. La mejor pasó uno de cinco. Deflated Sharpe máximo: 0.002. Se pedía 0.95.»
BOCETO: cinco puertas; solo una se abre en verde; barra 0.002 contra 0.95; golpe de bajo + sacudida en 0.002.

**[30-43 s]** «Comprar y esperar da un Sharpe de 0.13. La mejor de las ocho, 0.10. Ninguna le gana.»
BOCETO: barra blanca 0.13 y barra roja 0.10 por debajo; sello ✕.

**[43-51 s]** «El video completo está en el canal y experimento #83 completo en el enlace. Nivel excelente… y no pasó ni dos filtros de cinco.»
BOCETO: sello rojo sobre «excelente»; texto final «Video completo en el canal · Experimento #83 completo en el enlace» + pequeño «No es asesoría financiera · El trading no se promete: se prueba». Loop: «nivel excelente» vuelve al arranque.

---

## Descripción de YouTube (video largo)
https://atlas-lab-one.vercel.app/e/83?utm_source=youtube&utm_medium=video&utm_campaign=exp083-t1
Ficha del experimento #83: murió · 8 formas, 0 sobrevivientes, máximo 1 de 5 filtros · mejor Sharpe 0.10 contra 0.13 de comprar y esperar · Deflated Sharpe máximo 0.002 de 0.95.
Un TikTok tipo tier-list pone las medias exponenciales (EMA) a favor de la tendencia en el nivel «excelente». Las probé en 8 formas (EMA-trend 20/50/100/200 y cruces 9/21, 12/26, 20/50, 50/200) con 5 filtros, 3 puntos básicos de costo y señal del día siguiente: 0 sobrevivieron, máximo 1 de 5 filtros.
Contenido educativo. No es asesoría financiera ni recomendación de inversión.

## Descripción de YouTube (Short)
https://atlas-lab-one.vercel.app/e/83?utm_source=youtube&utm_medium=short&utm_campaign=exp083-t1
Ficha del experimento #83: murió · la mejor de las 8 formas da 0.10 contra 0.13 de comprar y esperar.
Contenido educativo, no es asesoría financiera.

## Capítulos
0:00 Gancho · 0:20 Presentación · 0:45 El método · 1:40 Cómo lo probé · 3:00 Resultados · 4:30 Por qué falla · 5:30 Más allá del backtest · 6:30 Con tu capital · 7:10 Conclusión · 7:40 Ficha del experimento #83

## Etiquetas
medias exponenciales, ema, golden cross, cruce de medias, seguimiento de tendencia, estrategia de tiktok, backtest, deflated sharpe, fuera de muestra, forex, atlas lab, trading con datos

## Rúbrica (autoevaluación, 1–5)
| Pieza | hook_0_3s | ritmo | promesa_cumplida | potencial_loop | claridad_no_traders | honestidad_atlas | audio | cta | Promedio |
|---|---|---|---|---|---|---|---|---|---|
| Largo | 5 | 4 | 5 | 4 | 4 | 5 | 4 | 4 | 4.4 |
| Short | 5 | 4 | 5 | 5 | 4 | 5 | 4 | 4 | 4.5 |

Hook ≥ 4 ✓ · honestidad 5 ✓. Punto débil: el bloque «Más allá del backtest» toca a una persona real; debe quedar neutro, sin nombre ni imagen, y revisarse antes de aprobar.

## Otros temas de este experimento
Cada tema es un video largo más un Short, con el mismo formato y las mismas reglas que el tema 1; cada uno se puede ver solo.
1. `exp-083-emas-tendencia-tiktok.md` — Tema 1: EMAs «nivel excelente» en TikTok: 8 formas, 0 sobreviven
2. `exp-083-t2-golden-cross-50-200.md` — Tema 2: El golden cross 50/200: 0.36 de Sharpe en 2007–2013 y −0.16 en 2021–2024
3. `exp-083-t3-ema-lenta-contra-rapida.md` — Tema 3: Media lenta o rápida: de −0.50 a +0.10 en el diseño, y al revés en 2021–2024

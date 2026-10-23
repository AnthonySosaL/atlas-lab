# Experimento #72 — Tema 2: Dos fórmulas del RSI, dos veredictos (−0.23 o 0.40 con la misma regla de Connors)

**Tema 2 de 3 del experimento #72** · Qué aporta frente a los otros temas: el tema 1 cuenta las reglas y el resultado; este es el tema de la robustez. Usa el RSI(2) de Larry Connors para mostrar qué pasa cuando la misma regla se calcula con el RSI de promedio simple o con el de Wilder, y por qué una ventaja de verdad no debería depender de ese detalle. Se entiende sin haber visto el tema 1.
Estado del guion: **BORRADOR — pendiente de aprobación**
Estado del experimento: **murió** (Sharpe fuera de muestra 0.48 con la variante probada y 0.66 con la regla original de salida RSI > 70; ninguna supera a comprar y esperar, 0.68)
Serie: B (estrategias famosas, puestas a prueba). Confirma lo visto en #65.
Datos usados: `experiments.json` (v=72: kpis, metrics, analysis, verdict, params_view) · `exp_details.json` (extra-v72: algo, code —las dos funciones de RSI y la salida persistente—, filters) · `series/extra-v72.json` ([0] variante de salida rápida, [1] los 4 índices comprar y esperar; años positivos calculados de las curvas) · tabla «Con tu capital» (fila #72).
Producción (CLAUDE.md del canal): b-roll real detrás de cada escena con overlay 0.6, Ken Burns alternando, subtítulos karaoke en MAYÚSCULAS, un dato visual por escena. Colores: rojo `#e11d2a`, verde `#22c55e`, fondo `#09090b`.

## Títulos
1. El mismo RSI(2), dos fórmulas: Sharpe −0.23 o 0.40
2. ¿Una ventaja que depende de cómo calculas el RSI? Connors, probado con costos
3. RSI simple contra RSI de Wilder: 0.15 o 0.66 con datos nuevos

## Miniatura
Fondo `#09090b`. Dos termómetros de RSI idénticos lado a lado; el de la izquierda marca «−0.23» en rojo `#e11d2a`, el de la derecha «0.40» en verde `#22c55e`. Texto grande: «MISMA REGLA». Logo ATLAS esquina inferior derecha.

---

## VIDEO LARGO (≈ 6 min)

**[0:00 — Gancho]** (pantalla: dos termómetros iguales, con las cifras «−0.23» y «0.40» debajo; debajo aparece «la misma regla»)
BOCETO: los termómetros descienden a la zona roja de abajo a la vez; las cifras salen una en rojo y otra en verde; golpe de bajo.
> Una estrategia famosa de Larry Connors, la misma regla de compra y de venta, dio un Sharpe de −0.23 con una fórmula del RSI y de 0.40 con otra, en el mismo periodo, con los mismos cuatro índices.

**[0:18 — Qué experimento es]** (pantalla: rótulo «Experimento #72 · ATLAS Lab» y el nombre debajo)
BOCETO: rótulo con el número 72 y el nombre «Connors RSI(2), variante de salida rápida (Larry Connors)»; logo en la esquina.
> Este es el experimento #72 de ATLAS Lab: Connors RSI(2), variante de salida rápida. Todos los resultados están en la página del experimento.

**[0:40 — Qué es el RSI(2)]** (pantalla: termómetro de 0 a 100 con zonas; precio que cae rápido)
BOCETO: precio cayendo; el termómetro baja a la zona roja; rótulo «RSI(2) < 10 = caída brusca».
> El RSI, o índice de fuerza relativa, mide qué tan fuerte han sido las subidas contra las bajadas de un precio, en una escala de 0 a 100. El RSI de 2 días es muy sensible: por debajo de 10 es una caída brusca en muy poco tiempo. La regla de Connors es comprar esas caídas, pero solo si el precio está sobre su media de 200 días, y salir cuando el RSI se recupera.

**[1:15 — Las dos fórmulas]** (pantalla: dos cajas con la etiqueta «promedio simple» y «Wilder»)
BOCETO: caja 1: «promedio simple: la media de las subidas y bajadas de los últimos 2 días»; caja 2: «Wilder: un promedio que arrastra memoria de los días anteriores»; mismo precio de entrada.
> El RSI no tiene una sola fórmula. En la versión de promedio simple, se promedian las subidas y las bajadas de los últimos 2 días. En la de Wilder, el promedio se actualiza día a día arrastrando memoria de los anteriores. Con una ventana de solo 2 días, esa diferencia pesa mucho, como veremos.

**[1:55 — La regla y las dos salidas]** (pantalla: línea de tiempo con la misma entrada y dos salidas)
BOCETO: línea 1 «salida rápida: sale cuando el RSI(2) deja de estar bajo 10 · ≈ 3.4 días»; línea 2 «regla original: sale cuando el RSI(2) pasa de 70».
> La entrada es común: precio sobre la media de 200 días y RSI de 2 días por debajo de 10. Probé una salida rápida, que sale en cuanto el RSI deja de estar bajo 10 y dura unos 3.4 días en promedio, y la regla original, que sale cuando pasa de 70. Cuatro índices, S&P 500, Nasdaq 100, DAX y FTSE 100, con costos de 3 puntos básicos y la señal de ayer.

**[2:30 — Resultados]** (pantalla: tabla animada; la fila de comprar y esperar fija abajo)
BOCETO: barras agrupadas (2012–2018 y 2019–2024) que crecen por fila; línea punteada en 0.68; las barras que quedan por debajo, en rojo.
| Versión | Sharpe 2012–2018 | Sharpe fuera de muestra 2019–2024 |
|---|---|---|
| Regla original, RSI de promedio simple | −0.23 | 0.15 |
| Regla original, RSI de Wilder | 0.40 | 0.66 |
| Salida rápida (RSI de promedio simple) | 0.17 | 0.48 |
| Comprar y esperar los 4 índices | 0.68 | 0.68 |
> La misma entrada, tres resultados. Con la regla original y el RSI de promedio simple: −0.23 y 0.15. Con el de Wilder: 0.40 y 0.66. Con la salida rápida: 0.17 y 0.48. Comprar y esperar: 0.68 en los dos periodos. Fuera de muestra, que son los datos de 2019 a 2024 que no se usaron para diseñar, la mejor versión llega a 0.66, a dos centésimas de 0.68.

**[3:20 — Qué te dice un resultado que cambia tanto]** (pantalla: dos preguntas: «¿la ventaja está en la idea?» y «¿o en el detalle?»)
BOCETO: una balanza con dos platos: «idea» y «detalle de cálculo»; el segundo pesa más; texto «robusto = sobrevive a cambios pequeños».
> Si una ventaja está en la idea, debería sobrevivir a cambios pequeños de cálculo. Aquí el Sharpe de 2012–2018 va de −0.23 a 0.40 solo por cambiar la fórmula del RSI. Eso no prueba que la idea sea falsa, pero sí dice que el número depende de decisiones que no tienen nada que ver con el mercado. Con Wilder y de 2019 a 2024, 0.66 se ve cerca de 0.68; con el RSI simple, 0.15 está lejísimos. Quien elija la fórmula mirando solo el resultado de un periodo corre el riesgo de quedarse con la que tuvo suerte.

**[4:05 — Para ser justos]** (pantalla: la fila de Wilder resaltada)
BOCETO: la fila de Wilder resaltada con 0.40 lejos de la línea punteada y 0.66 cerca; texto «no supera a 0.68 en ningún periodo».
> Para ser justos: ninguna versión supera a comprar y esperar en ningún periodo. La de Wilder se acerca fuera de muestra, 0.66 contra 0.68, pero en 2012–2018 se queda en 0.40 contra 0.68. Y una estrategia que necesita un periodo concreto para parecer competitiva no es una ventaja estable.

**[4:35 — Con tu capital]** (pantalla: tarjeta «Con tu capital» con la curva de salida rápida contra la gris)
BOCETO: aviso «variante de salida rápida»; contadores finales; sello «6 de 13 años positivos» contra «11 de 13» de comprar y esperar.
> Con la variante de salida rápida, de enero de 2012 a diciembre de 2024, con $100,000 gana $26,889; comprar y esperar los 4 índices, $290,064. Con $10,000 serían +$2,689 contra +$29,006. Su peor caída fue de −18.1%, contra −36.1% de quedarse quieto, y tuvo 6 años positivos de 13, contra 11 de 13. Gana dinero, pero mucho menos.

**[5:10 — Preguntas de un escéptico]** (pantalla: tres tarjetas: «¿otro umbral?», «¿otra media?», «¿Deflated Sharpe?»)
BOCETO: tres tarjetas que se voltean con «no medido» y «no hace falta».
> Preguntas que me haría un escéptico. ¿Y si cambio el umbral de 10? No lo probé. ¿Y la media de 200 días? Tampoco. ¿Y el Deflated Sharpe? No lo apliqué: si ya no supera a comprar y esperar, ajustar por las versiones probadas solo la haría ver peor.

**[5:35 — Ficha del experimento #72]** (pantalla: tarjeta con la ficha y la URL abajo)
BOCETO: tarjeta con cinco líneas que entran con tick y, al final, la URL resaltada en verde.
> Ficha del experimento 72. Estado: murió. Cifras clave: Sharpe fuera de muestra de 0.48 con la variante probada y de 0.66 con la regla original y el RSI de Wilder, contra 0.68 de comprar y esperar. Lo que decidió: el filtro de comparar contra comprar y esperar. Lección: una ventaja de verdad no debería cambiar de signo por un detalle de cálculo. Revísalo completo en atlas-lab-one.vercel.app/e/72.

**[6:05 — Cierre]**
BOCETO: dos termómetros iguales con la ✕ roja; logo.
> Todos los datos en atlas-lab-one.vercel.app, experimento 72. El trading no se promete: se prueba. Contenido educativo, no es asesoría financiera.

---

## SHORT (9:16, ≈ 49 s)

**[0-3 s]** (boceto: dos termómetros iguales con «−0.23» rojo y «0.40» verde; b-roll de termómetro de pared, kb=in; golpe de bajo)
> El mismo RSI, dos fórmulas: Sharpe −0.23 o 0.40.

**[3-14 s]** (boceto: gráfico con media de 200 días y termómetro bajo 10; flecha COMPRA; whoosh)
> Larry Connors compra cuando el RSI de 2 días baja de 10, con el precio sobre su media de 200 días, y sale cuando pasa de 70. Cuatro índices, con costos.

**[14-26 s]** (boceto: dos columnas: «promedio simple: −0.23 y 0.15» y «Wilder: 0.40 y 0.66»; ticks)
> Con el RSI de promedio simple: −0.23 en 2012–2018 y 0.15 con datos nuevos. Con el RSI de Wilder: 0.40 y 0.66.

**[26-37 s]** (boceto: línea punteada en 0.68; las dos barras por debajo)
> Comprar y esperar los mismos índices: 0.68 en los dos periodos. Ninguna versión lo supera.

**[37-44 s]** (boceto: balanza «idea» contra «detalle de cálculo»)
> Una ventaja robusta no debería depender de un detalle de cálculo. Esta, sí.

**[44-49 s]** (boceto: texto «Experimento #72 completo en el enlace»; logo)
> Video completo en el canal y experimento #72 completo en el enlace. ¿Qué fórmula elegirías?

Gancho alterno A: «Famosa no es lo mismo que robusta: −0.23 o 0.40 con la misma regla.» · B: «Con Wilder, 0.66. Con promedio simple, 0.15. La misma estrategia.»

## Descripción de YouTube — video largo
https://atlas-lab-one.vercel.app/e/72?utm_source=youtube&utm_medium=video&utm_campaign=exp072-t2
Ficha: experimento #72, Connors RSI(2), variante de salida rápida. Estado: murió. Regla original: Sharpe −0.23 y 0.15 con el RSI de promedio simple; 0.40 y 0.66 con el RSI de Wilder; comprar y esperar, 0.68. Con $100,000, +$26,889 contra +$290,064.
La misma regla de Larry Connors con dos fórmulas del RSI, en 4 índices con costos de 3 puntos básicos y fuera de muestra 2019–2024.
Contenido educativo. No es asesoría financiera ni recomendación de inversión.

## Descripción de YouTube — Short
https://atlas-lab-one.vercel.app/e/72?utm_source=youtube&utm_medium=short&utm_campaign=exp072-t2
Ficha: experimento #72, murió. Mismo RSI(2), dos fórmulas: −0.23 o 0.40 en 2012–2018; comprar y esperar, 0.68. Contenido educativo, no es asesoría financiera.

## Capítulos
0:00 Gancho · 0:18 Qué experimento es · 0:40 Qué es el RSI(2) · 1:15 Las dos fórmulas · 1:55 La regla y las dos salidas · 2:30 Resultados · 3:20 Qué te dice un resultado que cambia tanto · 4:05 Para ser justos · 4:35 Con tu capital · 5:10 Preguntas de un escéptico · 5:35 Ficha del experimento #72 · 6:05 Cierre

## Etiquetas
RSI(2), Larry Connors, RSI de Wilder, robustez, reversión a la media, estrategias famosas, índices bursátiles, prueba fuera de muestra, backtest, Sharpe ratio, trading con datos, ATLAS Lab

## Rúbrica (autoevaluación, 1–5)
| Pieza | hook_0_3s | ritmo | promesa_cumplida | potencial_loop | claridad_no_traders | honestidad_atlas | audio | cta | Promedio |
|---|---|---|---|---|---|---|---|---|---|
| Largo | 4 | 4 | 5 | 4 | 4 | 5 | 4 | 4 | 4.25 |
| Short | 5 | 4 | 5 | 4 | 4 | 5 | 4 | 4 | 4.38 |

Hook ≥ 4 ✓ · honestidad 5 ✓. Punto débil: explicar dos fórmulas del RSI sin matemática exige simplificar (el largo lo dice con palabras y deja la fórmula al código del experimento); «Wilder» necesita una frase de contexto.

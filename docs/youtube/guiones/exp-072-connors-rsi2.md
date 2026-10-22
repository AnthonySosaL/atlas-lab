# Experimento #72 — Connors RSI(2), variante de salida rápida (Larry Connors)

Estado del guion: **BORRADOR — pendiente de aprobación**
Estado del experimento: **murió** (Sharpe fuera de muestra 0.48 con la variante probada y 0.66 con la regla original de salida RSI > 70; ninguna supera a comprar y esperar, 0.68)
Serie: B (estrategias famosas, puestas a prueba). Confirma lo visto en #65.
Datos usados: `experiments.json` (v=72: verdict, analysis, notes, kpis, metrics, params_view, period) · `exp_details.json` (extra-v72: algo, code, filters) · `series/extra-v72.json` ([0] variante de salida rápida, [1] los 4 índices comprar y esperar) · tabla «Con tu capital» (docs/youtube, archivo de capital, fila #72; el $10k se calcula con la misma regla de la tarjeta del sitio).

## Títulos
1. RSI(2) de Larry Connors: probado en 4 índices con costos
2. Con $100,000, el famoso RSI(2) ganó $26,889; quedarse quieto, $290,064
3. Una de las estrategias más documentadas, puesta a prueba (2012–2024)

## Miniatura
Fondo `#09090b`. A la izquierda un termómetro de RSI con la marca «10» en rojo `#e11d2a`; a la derecha un cartel blanco enorme «¿FAMOSA = BUENA?». Logo ATLAS esquina inferior derecha.

---

## VIDEO LARGO (≈ 7½ min)

**[0:00 — Gancho]** (pantalla: dos barras de Sharpe fuera de muestra: «RSI(2) 0.48» corta y «quedarse quieto 0.68» larga)
BOCETO: la barra corta crece y se frena; la larga la pasa con whoosh; golpe de bajo y sacudida al aparecer 0.68.
> El RSI de 2 días, de Larry Connors, es una de las estrategias de reversión más documentadas. La probé en 4 índices, con costos y fuera de muestra. Resultado: un Sharpe de 0.48 contra 0.68 de simplemente comprar y esperar. Te cuento las reglas, las dos formas de salida que probé y qué pasó con cada una, porque la respuesta tiene matices.

**[0:25 — Presentación]** (pantalla: rótulo «Experimento #72 · Connors RSI(2), variante de salida rápida (Larry Connors)»)
BOCETO: rótulo en rojo y blanco «EXPERIMENTO #72» con el nombre debajo, sobre la última imagen del gancho atenuada (overlay 0.6); whoosh corto; logo en la esquina.
> Este es el experimento #72 de ATLAS Lab: Connors RSI(2), variante de salida rápida. Todos los resultados están en la página del experimento.

**[0:35 — Qué es el RSI]** (pantalla: un termómetro de 0 a 100 con zonas «sobrevendido» y «sobrecomprado»)
BOCETO: precio cayendo rápido y el termómetro bajando hasta la zona roja de abajo; rótulo «RSI(2) < 10 = caída brusca».
> El RSI, o índice de fuerza relativa, es un indicador que mide qué tan rápido y cuánto ha subido o bajado un precio en los últimos días, en una escala de 0 a 100. Con una ventana larga, es lento. Con una ventana de solo 2 días es muy sensible: un valor por debajo de 10 significa una caída brusca en muy poco tiempo, un precio muy sobrevendido. La idea de Connors es que esas caídas bruscas tienden a rebotar.

**[1:10 — La regla de compra]** (pantalla: gráfico de precio con la media de 200 días, un termómetro de RSI y una flecha de compra cuando cae bajo 10)
BOCETO: precio sobre la media de 200 días (zona verde); el RSI(2) cae por debajo de 10 (termómetro rojo) y aparece «COMPRA»; el rótulo «caída fuerte en tendencia alcista».
> La regla es comprar si el precio está sobre su media de 200 días y el RSI de 2 días baja de 10. Fíjate en la primera condición: solo compra caídas dentro de una tendencia alcista de fondo. No compra cualquier caída, sino la bajada pasajera en un mercado que va hacia arriba. Por eso la regla tiene sentido a primera vista: no intenta atrapar un mercado que se derrumba, solo rebotes dentro de una tendencia alcista.

**[1:40 — Las dos salidas]** (pantalla: dos líneas de tiempo con la entrada igual y la salida distinta)
BOCETO: línea 1 «salida rápida: sale en cuanto el RSI(2) deja de estar bajo 10 · dura ≈ 3.4 días»; línea 2 «regla original: sale cuando el RSI(2) pasa de 70».
> Probé dos formas de salir. La primera, la que llamo variante de salida rápida, sale en cuanto el RSI de 2 días deja de estar bajo 10, y la posición dura en promedio unos 3.4 días. La segunda es la regla original de Connors: sale cuando el RSI de 2 días supera 70. A esta la probé aparte, con dos versiones del RSI: la de promedio simple y la de Wilder, que suaviza el cálculo de otra manera. Las dos comparten la misma entrada; cambia cuánto tiempo te quedas dentro.

**[2:20 — Cómo lo probé]** (pantalla: checklist de filtros con los valores reales)
BOCETO: ✓ Costos: 3 bps por rotación · ✓ Señal de ayer (rezago de 1 día) · ✓ Fuera de muestra 2019–2024: Sharpe 0.48 (> 0.30) · ✗ Superar a comprar y esperar · — Deflated Sharpe: no aplicado · — Monte Carlo: no aplicado.
> Cuatro índices, S&P 500, Nasdaq 100, DAX y FTSE 100, con el mismo peso cada uno. Costo de 3 puntos básicos por movimiento, y la señal siempre de ayer. Diseño con datos de 2012 a 2018 y prueba fuera de muestra, es decir, en un periodo no usado al diseñar, de 2019 a 2024. Y todo se compara con comprar y esperar esos 4 índices, que da un Sharpe de 0.68 en los dos periodos. El Sharpe mide cuánto rindes por cada unidad de riesgo, así que es la forma justa de comparar una estrategia que pasa tiempo fuera del mercado con una que siempre está dentro.

**[3:05 — Resultados]** (pantalla: tabla animada; la fila de comprar y esperar queda fija abajo)
BOCETO: barras agrupadas (2012–2018 y 2019–2024) que crecen por fila; en rojo las que quedan bajo la línea punteada de 0.68.
| Versión | Sharpe 2012–2018 | Sharpe fuera de muestra 2019–2024 |
|---|---|---|
| Salida rápida (RSI(2) < 10) | 0.17 | 0.48 |
| Regla original, RSI de promedio simple | −0.23 | 0.15 |
| Regla original, RSI de Wilder | 0.40 | 0.66 |
| Comprar y esperar los 4 índices | 0.68 | 0.68 |
> La variante de salida rápida: 0.17 y 0.48. La regla original con el RSI de promedio simple: −0.23 y 0.15. Con el RSI de Wilder: 0.40 y 0.66. Esa última es la que más se acerca fuera de muestra, 0.66 contra 0.68, pero en 2012–2018 se queda en 0.40 contra 0.68. Ninguna versión supera a comprar y esperar.

**[3:30 — Cómo leer la tabla]** (pantalla: tres lupas sobre la tabla, una por observación)
BOCETO: tres lupas que se posan una a una sobre la tabla: la variante (0.17 → 0.48), las dos versiones del RSI (−0.23 y 0.15 contra 0.40 y 0.66) y el 0.66 contra 0.68.
> Fíjate en tres cosas. Primera: la variante rápida pasa de 0.17 a 0.48 entre un periodo y otro, mientras comprar y esperar se queda en 0.68 en ambos: su resultado cambia bastante según el periodo y, aun en el mejor, sigue por debajo. Segunda: la regla original cambia muchísimo según cómo calcules el RSI. Con promedio simple da −0.23 y 0.15; con el RSI de Wilder, 0.40 y 0.66. Una ventaja robusta no debería depender de un detalle de cálculo. Tercera: aun en el mejor caso, 0.66, no supera a 0.68.

**[4:05 — Por qué no suma]** (pantalla: texto «la reversión de corto plazo no añade ventaja tras costos»)
BOCETO: texto «la reversión de corto plazo no añade ventaja tras costos» con un enlace al experimento 65 y una flecha de confirmación.
> La reversión de corto plazo no añade ventaja tras costos, ni siquiera en una de las reglas más documentadas. Confirma lo que vimos en el experimento 65 con otra idea de reversión: cuando algo funciona a ratos, pero no le gana a quedarse dentro del mercado, no es una ventaja, es una forma distinta de tener menos exposición.

**[4:30 — Para ser justos]** (pantalla: la fila de Wilder resaltada: 0.66 contra 0.68 y 0.40 contra 0.68)
BOCETO: la fila de Wilder resaltada, con 0.66 muy cerca de la línea punteada de 0.68 y 0.40 lejos de ella.
> Para ser justos: la regla original con el RSI de Wilder fue la que casi alcanzó a comprar y esperar fuera de muestra, 0.66 contra 0.68. Si el único criterio fuera acercarse a la alternativa más simple, se portó bien. Pero se queda en 0.40 en 2012–2018, y una estrategia que necesita un periodo concreto para parecer competitiva no es una ventaja estable.

**[5:00 — Con tu capital]** (pantalla: tarjeta «Con tu capital» con selector; curva `series/extra-v72.json[0]` contra `[1]`)
BOCETO: aviso «variante de salida rápida»; al cambiar a $100,000 el número gris se dispara y el verde apenas se mueve.
> Veamos qué significa en dinero, con la variante de salida rápida, de enero de 2012 a diciembre de 2024. Con $10,000, +$2,689; comprar y esperar los 4 índices, +$29,006. Con $100,000: +$26,889 contra +$290,064. La peor caída desde un máximo fue de −$1,814 con 10,000 y −$18,136 con 100,000, un −18.1%. Gana dinero, pero mucho menos que quedarse quieto.

**[5:25 — Lo que no cambia el veredicto]** (pantalla: dos casillas vacías: «Deflated Sharpe» y «Monte Carlo», con la nota «no aplicado»)
BOCETO: dos casillas vacías («Deflated Sharpe» y «Monte Carlo») con la nota «no aplicado» y una flecha: «solo la empeoraría».
> No apliqué Deflated Sharpe ni Monte Carlo en este experimento. Pero no hacen falta para el veredicto: si una estrategia ya no supera a comprar y esperar, ajustar por cuántas versiones probé solo la haría ver peor, no mejor.

**[5:40 — Preguntas de un escéptico]** (pantalla: tres tarjetas: «¿otros índices?», «¿otra media?», «¿otro umbral?»; cada una con la etiqueta «no medido»)
BOCETO: tres tarjetas que se voltean: «¿otros índices?», «¿otra media?», «¿otro umbral?», todas con «no medido».
> Preguntas que me haría un escéptico. ¿Y si cambio los índices? Solo medí los cuatro de este experimento. ¿Y si uso otra media en lugar de la de 200 días? No lo probé. ¿Y si uso un umbral distinto de 10 para entrar? Tampoco. Lo que sí probé fueron las dos salidas y las dos versiones del RSI, y ninguna combinación llegó a 0.68. Es decir, dentro de lo que medí, el veredicto no depende del detalle de la regla, aunque el número sí cambia.

**[6:15 — Resumen]** (pantalla: tarjeta con las cifras clave: 0.17 · 0.48 · −0.23 · 0.15 · 0.40 · 0.66 · 0.68 · +$26,889 · +$290,064)
BOCETO: tarjeta con las cifras de la tabla y las de dinero (+$26,889 contra +$290,064) entrando con tick.
> Resumen en tres bloques de cifras. Variante de salida rápida: Sharpe de 0.17 en 2012–2018 y 0.48 fuera de muestra. Regla original: de −0.23 a 0.15 con el RSI de promedio simple, y de 0.40 a 0.66 con el de Wilder. Comprar y esperar: 0.68 en los dos periodos. En dinero, con $100,000: +$26,889 contra +$290,064.

**[6:40 — Ficha del experimento #72]** (pantalla: tarjeta con la ficha y la URL abajo)
BOCETO: tarjeta con el número «#72», el sello «MURIÓ» en rojo y cuatro líneas (estado, cifra clave, lo que decidió, lección) que entran con tick; al final, la URL «atlas-lab-one.vercel.app/e/72» grande y resaltada en verde. kb=in.
> Ficha del experimento 72. Estado: murió. Cifras clave: Sharpe fuera de muestra de 0.48 con la variante probada y de 0.66 con la regla original y el RSI de Wilder, contra 0.68 de comprar y esperar. Lo que decidió: compararla con comprar y esperar los 4 índices. Lección: que una estrategia sea famosa no la hace rentable. Revísalo completo en atlas-lab-one.vercel.app/e/72.

**[7:05 — Conclusión]**
BOCETO: dos barras finales (0.48 y 0.68) con la ✕ roja y el texto «famosa ≠ rentable»; cierre con el logo.
> No sirvió: ni con la salida rápida ni con la regla original se supera a comprar y esperar. Que una estrategia sea famosa y esté muy documentada no significa que tenga ventaja hoy, con costos y fuera de muestra. Todos los datos en atlas-lab-one.vercel.app/e/72. El trading no se promete: se prueba. Contenido educativo, no es asesoría financiera.

---

## SHORT (9:16, ≈ 46 s)

**[0-3 s]** (boceto: «$26,889» verde pequeño y «$290,064» verde enorme; rótulo «por cada $100,000»; b-roll de operador mirando pantallas, kb=in; golpe de bajo)
> Con $100,000, el famoso RSI(2) ganó $26,889. Quedarte quieto, $290,064.

**[3-15 s]** (boceto: gráfico con media de 200 días y termómetro de RSI bajo 10; flecha «COMPRA»; whoosh)
> Es la estrategia de Larry Connors: comprar una caída fuerte dentro de una tendencia alcista. RSI de 2 días bajo 10, precio sobre su media de 200. Probada en 4 índices, con costos, de 2012 a 2024.

**[15-24 s]** (boceto: dos barras: 0.48 contra 0.68; ticks; sello ✕ sobre la corta)
> Fuera de muestra, de 2019 a 2024, su Sharpe fue 0.48. En 2012–2018, apenas 0.17. Comprar y esperar los 4 índices: 0.68 en los dos periodos.

**[24-33 s]** (boceto: tarjetas «salida RSI > 70»: 0.15 y 0.66; línea punteada en 0.68; b-roll de reloj de arena, kb=out)
> Probé también la regla original, que sale cuando el RSI pasa de 70: 0.15 con un RSI y 0.66 con el RSI de Wilder. Ninguna gana a 0.68.

**[33-40 s]** (boceto: texto «reversión de corto plazo ≠ ventaja»)
> La reversión de corto plazo no añade ventaja tras costos, ni siquiera en una de las reglas más documentadas.

**[40-46 s]** (boceto: texto «¿cuánto ganó quedarse quieto?»; rótulo «Experimento #72 completo en el enlace»; logo)
> Video completo en el canal y experimento #72 completo en el enlace. Con $100,000, ¿cuánto ganó quedarse quieto?

Gancho alterno A: «Una estrategia famosa, 4 índices, con costos: Sharpe 0.48 contra 0.68.» · B: «Famosa no es lo mismo que rentable.»

## Descripción de YouTube — video largo
https://atlas-lab-one.vercel.app/e/72?utm_source=youtube&utm_medium=video&utm_campaign=exp072-t1
Ficha del experimento #72: murió · Sharpe fuera de muestra 0.48 (variante probada) y 0.66 (regla original con RSI de Wilder) contra 0.68 de comprar y esperar · con $100,000: +$26,889 contra +$290,064.
Connors RSI(2) en el S&P 500, Nasdaq 100, DAX y FTSE 100: comprar si el precio está sobre su media de 200 días y el RSI de 2 días baja de 10. Con costos de 3 puntos básicos, Sharpe de 0.17 en 2012–2018 y 0.48 fuera de muestra (2019–2024), contra 0.68 de comprar y esperar. La regla original de salida (RSI > 70) da 0.15 y 0.66 según el RSI; tampoco supera a quedarse quieto.

Contenido educativo. No es asesoría financiera ni recomendación de inversión.

Capítulos: 0:00 Gancho · 0:25 Presentación · 0:35 Qué es el RSI · 1:10 La regla de compra · 1:40 Las dos salidas · 2:20 Cómo lo probé · 3:05 Resultados · 3:30 Cómo leer la tabla · 4:05 Por qué no suma · 4:30 Para ser justos · 5:00 Con tu capital · 5:25 Lo que no cambia el veredicto · 5:40 Preguntas de un escéptico · 6:15 Resumen · 6:40 Ficha del experimento #72 · 7:05 Conclusión

Etiquetas: Connors RSI, RSI(2), Larry Connors, reversión a la media, estrategias famosas, índices bursátiles, prueba fuera de muestra, backtest, Sharpe ratio, trading con datos, ATLAS Lab, comprar y mantener

## Descripción de YouTube — Short
https://atlas-lab-one.vercel.app/e/72?utm_source=youtube&utm_medium=short&utm_campaign=exp072-t1
Ficha del experimento #72: murió · Sharpe fuera de muestra 0.48 contra 0.68 de comprar y esperar.
Contenido educativo, no es asesoría financiera.

## Rúbrica (autoevaluación)
| Criterio | Short | Largo |
|---|---|---|
| hook_0_3s | 5 | 5 |
| ritmo | 4 | 4 |
| promesa_cumplida | 5 | 5 |
| potencial_loop | 5 | 4 |
| claridad_no_traders | 4 | 4 |
| honestidad_atlas | 5 | 5 |
| audio | 4 | 4 |
| cta | 4 | 4 |
| **Promedio** | **4.50** | **4.38** |

## Otros temas de este experimento
- Tema 1 (este archivo): `exp-072-connors-rsi2.md` — Connors RSI(2), variante de salida rápida (Larry Connors)
- Tema 2: `exp-072-t2-dos-formulas-del-rsi.md` — Dos fórmulas del RSI, dos veredictos (−0.23 o 0.40 con la misma regla de Connors)
- Tema 3: `exp-072-t3-comprar-la-caida-tres-famosas.md` — Comprar la caída, tres estrategias famosas contra quedarse quieto (RSI(2), IBS y Double Seven)

# Experimento #72 — Tema 3: Comprar la caída, tres estrategias famosas contra quedarse quieto (RSI(2), IBS y Double Seven)

**Tema 3 de 3 del experimento #72** · Qué aporta frente a los otros temas: es el tema de la comparación. Pone el RSI(2) de Connors (#72) junto a otras dos estrategias famosas de «comprar la caída» probadas con los mismos cuatro índices y los mismos costos (IBS, #75, y Double Seven, #76) y contra comprar y esperar. Se nombra con el #72 por ser el menor del grupo. Se entiende sin los otros temas.
Estado del guion: **BORRADOR — pendiente de aprobación**
Estado del experimento: **murió** (Sharpe fuera de muestra 0.48 con la variante probada y 0.66 con la regla original de salida RSI > 70; ninguna supera a comprar y esperar, 0.68)
Serie: B (estrategias famosas, puestas a prueba). Une #72, #75 y #76.
Datos usados: `experiments.json` (v=72, v=75, v=76: kpis, metrics, analysis, params_view; el 68% y el 77% de aciertos son los anunciados, no medidos) · `series/extra-v72.json`, `extra-v75.json`, `extra-v76.json` (la 2.ª curva de las tres es la misma: los 4 índices comprar y esperar) · tabla «Con tu capital» (filas #72, #75, #76): +$26,889, +$61,591, +$45,736 y +$290,064.
Producción (CLAUDE.md del canal): b-roll real detrás de cada escena con overlay 0.6, Ken Burns alternando, subtítulos karaoke en MAYÚSCULAS, un dato visual por escena. Colores: rojo `#e11d2a`, verde `#22c55e`, fondo `#09090b`.

## Títulos
1. Tres estrategias famosas de comprar la caída: $26,889, $45,736 y $61,591 contra $290,064
2. RSI(2), IBS y Double Seven: ganan dinero, pero ninguna le gana a quedarse quieto
3. Comprar la caída en un mercado que sube: probado con 4 índices y costos

## Miniatura
Fondo `#09090b`. Tres monedas verdes `#22c55e` pequeñas («$26,889», «$45,736», «$61,591») frente a una pila gigante blanca de monedas («$290,064»). Texto: «¿Y EL RESTO?». Logo ATLAS arriba a la derecha.

---

## VIDEO LARGO (≈ 7 min)

**[0:00 — Gancho]** (pantalla: tres monedas verdes pequeñas con sus cifras y una pila gigante blanca al lado)
BOCETO: las tres monedas caen una a una con tick; la pila gigante entra con whoosh y golpe de bajo; texto «por cada $100,000».
> Tres estrategias famosas de comprar la caída. Con $100,000, entre 2012 y 2024, ganaron $26,889, $45,736 y $61,591. Quedarte quieto en los mismos cuatro índices ganó $290,064. Hoy las pongo una al lado de otra, con las mismas reglas de prueba, para ver qué tienen en común.

**[0:18 — Qué experimento es]** (pantalla: rótulo «Experimento #72 · ATLAS Lab» y el nombre debajo; dos tarjetas más, «#75» y «#76»)
BOCETO: rótulo con el número 72 y el nombre «Connors RSI(2), variante de salida rápida»; a los lados, los números 75 y 76 en pequeño.
> Este es el experimento #72 de ATLAS Lab: Connors RSI(2), variante de salida rápida. Todos los resultados están en la página del experimento. Aquí lo comparo con el 75, IBS, y el 76, Double Seven.

**[0:45 — La idea común]** (pantalla: línea de precio que sube a largo plazo con caídas pasajeras; cada caída comprada)
BOCETO: índice que sube con caídas pasajeras; flecha de compra en cada caída y de venta en el rebote; texto «reversión a la media».
> Las tres hacen lo mismo en esencia: comprar después de una caída, apostando a que el precio rebota. Se llama reversión a la media. Las tres funcionan en un mercado que sube a largo plazo, donde las caídas suelen ser pasajeras. Cambia cómo definen «caída» y cuándo salen.

**[1:25 — Las tres reglas]** (pantalla: tres tarjetas)
BOCETO: tarjeta 1 «RSI(2) < 10 · sobre su media de 200 días · dura ≈ 3.4 días»; tarjeta 2 «IBS < 0.2 entra, > 0.7 sale · anuncia 13% anual y 68% de aciertos»; tarjeta 3 «cierre bajo el mínimo de 7 días, sobre su media de 200 días · anuncia 77% de aciertos».
> Una: RSI de 2 días, de Larry Connors, compra cuando baja de 10 con el precio sobre su media de 200 días, y la posición dura unos 3.4 días. Dos: IBS, que mide dónde cerró el precio dentro del rango del día, compra cuando cierra cerca del mínimo, y se anuncia con 13% anual y 68% de aciertos. Tres: Double Seven, también de Connors, compra cuando el cierre rompe el mínimo de 7 días y se anuncia con 77% de aciertos. Los porcentajes de aciertos son los anunciados, no medidos aquí.

**[2:30 — Cómo se probaron]** (pantalla: línea de tiempo en dos tramos y checklist)
BOCETO: barra 2012–2018 «diseño» y 2019–2024 «datos nuevos»; checklist: ✓ 4 índices, ✓ 3 bps por rotación, ✓ señal de ayer.
> Igual para las tres: S&P 500, Nasdaq 100, DAX y FTSE 100 con el mismo peso, 3 puntos básicos de costo por movimiento, señal de ayer, y dos periodos: 2012 a 2018 para el diseño y 2019 a 2024 como prueba fuera de muestra. Todo se compara con comprar y esperar los mismos índices. El Sharpe mide cuánto rindes por cada unidad de riesgo.

**[3:05 — Resultados]** (pantalla: tabla animada)
BOCETO: filas que aparecen con tick; las columnas de dinero con contadores; comprar y esperar abajo en blanco.
| Estrategia | Sharpe 2012–2018 | Sharpe 2019–2024 | Con $100,000 (2012–2024) | Peor caída |
|---|---|---|---|---|
| RSI(2), salida rápida | 0.17 | 0.48 | +$26,889 | −18.1% |
| IBS | 0.37 | 0.42 | +$61,591 | −18.2% |
| Double Seven | 0.58 | 0.16 | +$45,736 | −35.5% |
| Comprar y esperar | 0.68 | 0.68 | +$290,064 | −36.1% |
> Las tres ganan dinero. Ninguna supera a quedarse quieto, ni en Sharpe ni en dinero. IBS y RSI(2) caen la mitad que el mercado, −18.1% y −18.2% contra −36.1%, pero ganan mucho menos. Double Seven es la que más sorprende: tiene el mejor Sharpe en el periodo de diseño, 0.58, y el peor con datos nuevos, 0.16, con una caída de −35.5%, casi igual a la de comprar y esperar.

**[4:00 — Lo que comparten]** (pantalla: tres monedas pequeñas y una barra gris alta; texto «% de aciertos ≠ dinero»)
BOCETO: muchas monedas verdes pequeñas apiladas que no alcanzan la barra gris; texto «mucho acierto, poca ganancia».
> Primero: comprar caídas en un mercado alcista da muchos aciertos y ganancias chicas. Eso lo dice el propio análisis del IBS. El porcentaje de aciertos cuenta cuántas operaciones ganan, no cuánto. Segundo: el 77% anunciado de Double Seven fue la estrategia peor parada con datos nuevos. Un porcentaje de aciertos alto esconde el riesgo: pocas pérdidas, pero enormes. Tercero: la reversión de corto plazo no añade ventaja tras costos. El experimento 65, con otra regla de reversión en los mismos índices, lo había mostrado.

**[4:50 — Con tu capital]** (pantalla: tarjeta «Con tu capital» con las cuatro cifras y el selector $10,000 / $100,000)
BOCETO: cuatro barras; las de las estrategias en verde y la de comprar y esperar en blanco, mucho más alta.
> Con $100,000, entre enero de 2012 y diciembre de 2024: +$26,889, +$61,591, +$45,736 y +$290,064. Con $10,000 serían +$2,689, +$6,159, +$4,574 y +$29,006. Es lo que pasó, no una promesa.

**[5:25 — Para ser justos con las tres]** (pantalla: tres frases en pantalla)
BOCETO: «menor caída» (IBS y RSI), «Sharpe de 0.48 y 0.42 fuera de muestra, sobre el umbral de 0.30», «no baten a comprar y esperar».
> Para ser justos: IBS y RSI(2) pasan el umbral de 0.30 de Sharpe fuera de muestra, 0.42 y 0.48, y recortan la caída a la mitad. Si tu único objetivo fuera sufrir menos, hacen algo. Pero como camino para ganar más dinero que quedarte quieto, ninguna sirvió.

**[5:55 — Preguntas de un escéptico]** (pantalla: tres tarjetas: «¿otros índices?», «¿otros umbrales?», «¿versión original?»)
BOCETO: tres tarjetas que se voltean con «no medido».
> Preguntas que me haría un escéptico. ¿Y otros índices? Solo medí estos cuatro. ¿Y otros umbrales? No los probé. ¿Y la versión original del RSI(2), con salida en 70? La probé aparte: con el RSI de Wilder llega a 0.66 fuera de muestra, pero a 0.40 en 2012–2018. Tampoco supera a 0.68.

**[6:25 — Ficha del experimento #72]** (pantalla: tarjeta con la ficha y la URL abajo)
BOCETO: tarjeta con cinco líneas que entran con tick y, al final, la URL resaltada en verde.
> Ficha del experimento 72. Estado: murió. Cifras clave: Sharpe fuera de muestra de 0.48 contra 0.68 de comprar y esperar; con $100,000, +$26,889 contra +$290,064. Lo que decidió: el filtro de comparar contra comprar y esperar. Lección: comprar caídas gana dinero en un mercado que sube, pero no le gana a quedarse quieto. Revísalo completo en atlas-lab-one.vercel.app/e/72.

**[6:55 — Cierre]**
BOCETO: tres monedas verdes y la pila blanca con el sello ✕; logo.
> Todos los datos en atlas-lab-one.vercel.app, experimento 72. El trading no se promete: se prueba. Contenido educativo, no es asesoría financiera.

---

## SHORT (9:16, ≈ 49 s)

**[0-3 s]** (boceto: tres monedas verdes pequeñas y una pila gigante; b-roll de monedas cayendo, kb=in; golpe de bajo)
> Tres estrategias famosas de comprar la caída ganaron $26,889, $45,736 y $61,591.

**[3-14 s]** (boceto: pila blanca con «$290,064»; texto «quedarte quieto»)
> Por cada $100,000, entre 2012 y 2024. Quedarte quieto en los mismos cuatro índices: $290,064.

**[14-26 s]** (boceto: tres tarjetas: RSI(2), IBS y Double Seven; whoosh)
> Son el RSI de 2 días, IBS y Double Seven. Dos se anuncian con 68% y 77% de aciertos. Todas con costos y fuera de muestra.

**[26-38 s]** (boceto: Sharpe de Double Seven: 0.58 cae a 0.16; sello ✕)
> Ninguna le gana a quedarse quieto. Y la del 77% de aciertos fue la peor con datos nuevos: Sharpe de 0.58 a 0.16.

**[38-45 s]** (boceto: texto «% de aciertos ≠ dinero»)
> Comprar caídas da muchos aciertos y ganancias chicas. Acertar mucho no es ganar más.

**[45-49 s]** (boceto: texto «Experimento #72 completo en el enlace»; logo)
> Video completo en el canal y experimento #72 completo en el enlace. ¿Y tú, comprarías la caída?

Gancho alterno A: «77% de aciertos y el peor Sharpe con datos nuevos.» · B: «$26,889, $45,736, $61,591 y la pila de $290,064.»

## Descripción de YouTube — video largo
https://atlas-lab-one.vercel.app/e/72?utm_source=youtube&utm_medium=video&utm_campaign=exp072-t3
Ficha: experimento #72, Connors RSI(2). Estado: murió. Sharpe fuera de muestra 0.48 contra 0.68 de comprar y esperar; con $100,000, +$26,889 contra +$290,064.
Comparo RSI(2) (#72), IBS (#75) y Double Seven (#76), tres estrategias famosas de comprar la caída, con las mismas reglas de prueba (4 índices, 3 puntos básicos, 2012–2024).
Contenido educativo. No es asesoría financiera ni recomendación de inversión.

## Descripción de YouTube — Short
https://atlas-lab-one.vercel.app/e/72?utm_source=youtube&utm_medium=short&utm_campaign=exp072-t3
Ficha: experimento #72, murió. Tres estrategias de comprar la caída: +$26,889, +$45,736 y +$61,591 contra +$290,064 de quedarse quieto. Contenido educativo, no es asesoría financiera.

## Capítulos
0:00 Gancho · 0:18 Qué experimento es · 0:45 La idea común · 1:25 Las tres reglas · 2:30 Cómo se probaron · 3:05 Resultados · 4:00 Lo que comparten · 4:50 Con tu capital · 5:25 Para ser justos con las tres · 5:55 Preguntas de un escéptico · 6:25 Ficha del experimento #72 · 6:55 Cierre

## Etiquetas
reversión a la media, comprar la caída, RSI(2), IBS, Double Seven, Larry Connors, estrategias famosas, porcentaje de aciertos, índices bursátiles, backtest, trading con datos, ATLAS Lab

## Rúbrica (autoevaluación, 1–5)
| Pieza | hook_0_3s | ritmo | promesa_cumplida | potencial_loop | claridad_no_traders | honestidad_atlas | audio | cta | Promedio |
|---|---|---|---|---|---|---|---|---|---|
| Largo | 5 | 4 | 5 | 4 | 4 | 5 | 4 | 4 | 4.38 |
| Short | 5 | 4 | 5 | 4 | 4 | 5 | 4 | 4 | 4.38 |

Hook ≥ 4 ✓ · honestidad 5 ✓. Punto débil: junta tres experimentos; las tres usan la misma cesta, costos y periodos (y la misma curva de comprar y esperar), así que es una comparación limpia. Los porcentajes de aciertos (68% y 77%) son anunciados, no medidos, y así se dicen.

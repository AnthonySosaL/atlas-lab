# Experimento #75 — IBS, fuerza interna de la barra

Estado del guion: **BORRADOR — pendiente de aprobación**
Estado del experimento: **murió** (gana +32% fuera de muestra, pero muy por debajo de comprar y esperar, +109%; Sharpe 0.42 frente a 0.68)
Serie: B (estrategias famosas, puestas a prueba). Eco directo de #85 («71% de aciertos»).
Datos usados: `experiments.json` (v=75: verdict, analysis, notes, kpis, metrics, params_view, description, period) · `exp_details.json` (extra-v75: algo, code, filters) · `series/extra-v75.json` ([0] IBS, [1] los 4 índices comprar y esperar) · tabla «Con tu capital» (docs/youtube, archivo de capital, fila #75; el $10k se calcula con la misma regla de la tarjeta del sitio).

## Títulos
1. IBS, la estrategia del «68% de aciertos», probada con costos
2. 68% de aciertos y rinde menos de un tercio que quedarse quieto
3. ¿Vale algo acertar el 68% de las veces? IBS contra comprar y esperar

## Miniatura
Fondo `#09090b`. Dos barras verticales: una corta verde `#22c55e` «+32%» y una muy alta gris «+109%», con un signo «VS» rojo `#e11d2a` en medio. Sin más texto. Logo ATLAS esquina inferior derecha.

---

## VIDEO LARGO (≈ 6½ min)

**[0:00 — Gancho]** (pantalla: «68%» verde enorme con una palomita; debajo, dos barras: «IBS +32%» y «quedarse quieto +109%»)
BOCETO: el 68% se llena como un contador; luego cae un telón gris con las dos barras; golpe de bajo y sacudida en +109%.
> Una estrategia se anuncia con un 13% anual y 68% de aciertos. Suena genial. Yo la probé en 4 índices, con costos y fuera de muestra, entre 2019 y 2024: ganó +32%. Comprar y esperar los mismos índices: +109%. Hoy te explico por qué acertar mucho no es lo mismo que ganar más.

**[0:25 — La estrategia]** (pantalla: una vela diaria con un marcador que indica dónde cerró dentro de su rango)
BOCETO: vela que cierra cerca del mínimo → «IBS < 0.2: COMPRA» en verde; vela que cierra cerca del máximo → «IBS > 0.7: SALE» en rojo. Fórmula en pantalla: (cierre − mínimo) / (máximo − mínimo).
> IBS significa fuerza interna de la barra, y es una estrategia de QuantifiedStrategies. Mide dónde cerró el precio dentro del rango del día: 0 es cerrar en el mínimo, 1 es cerrar en el máximo. La regla: comprar cuando el cierre queda cerca del mínimo, con IBS menor que 0.2, y salir cuando queda cerca del máximo, con IBS mayor que 0.7. La premisa de la estrategia es que, si un índice cierra el día en su zona más baja, tiende a rebotar al siguiente. Se aplica al S&P 500, Nasdaq 100, DAX y FTSE 100, con el mismo peso cada uno.

**[1:05 — Qué es el porcentaje de aciertos]** (pantalla: dos curvas: una con muchas ganancias pequeñas y pocas pérdidas grandes, y otra con pocos aciertos grandes)
BOCETO: dos curvas: una con muchas ganancias pequeñas y pocas pérdidas grandes (mucho acierto, poco dinero) y otra con pocos aciertos grandes (menos acierto, más dinero).
> Antes de seguir, una aclaración. El porcentaje de aciertos cuenta cuántas operaciones terminaron en ganancia, sin importar de cuánto. Una estrategia puede acertar casi siempre y aun así rendir poco, si cada ganancia es pequeña y las pocas pérdidas son grandes. Y al revés: otra puede fallar muchas veces y rendir mucho, si sus aciertos son grandes. Por eso el porcentaje de aciertos, solo, no dice si una estrategia gana dinero.

**[1:35 — Cómo lo probé]** (pantalla: checklist de filtros con los valores reales)
BOCETO: ✓ En muestra 2012–2018: Sharpe 0.37 (> 0.13) · ✓ Fuera de muestra 2019–2024: Sharpe 0.42 (> 0.30) · ✗ Superar a comprar y esperar · ✓ Costos: 3 bps · ✓ Señal de ayer · — Deflated Sharpe: no aplicado · — Monte Carlo: no aplicado.
> Costo de 3 puntos básicos por movimiento, señal siempre de ayer y capital inicial de $10,000. Diseño con datos de 2012 a 2018 y prueba fuera de muestra, en un periodo no usado al diseñar, de 2019 a 2024. Y todo contra comprar y esperar. El Sharpe mide cuánto rindes por cada unidad de riesgo, así que permite comparar una estrategia que entra y sale con una que siempre está dentro del mercado.

**[2:05 — Resultados]** (pantalla: tabla con barras; las del IBS en verde, las de comprar y esperar en gris)
BOCETO: cada fila crece de izquierda a derecha; en la fila fuera de muestra, la barra gris deja chica a la verde; sello ✕ rojo sobre «supera al mercado».
| Medida | IBS | Comprar y esperar |
|---|---|---|
| Sharpe 2012–2018 | 0.37 | no se publica en este experimento |
| Retorno 2012–2018 | +23% | no se publica en este experimento |
| Sharpe fuera de muestra (2019–24) | 0.42 | 0.68 |
| Retorno fuera de muestra (2019–24) | +32% | +109% |
> En 2012–2018, IBS dio un Sharpe de 0.37 y +23%. Fuera de muestra, de 2019 a 2024, ganó +32%, con un Sharpe de 0.42. Comprar y esperar los mismos índices dio +109%, con un Sharpe de 0.68. IBS gana dinero, pero rinde menos de un tercio de lo que rindió quedarse quieto.

**[2:30 — Por qué comparo con comprar y esperar]** (pantalla: una balanza: a un lado «comprar y esperar: sin reglas, sin atención, sin costos de operar»; al otro, la estrategia)
BOCETO: balanza: a un lado «comprar y esperar: sin reglas, sin atención, sin costos de operar»; al otro, la estrategia con su trabajo extra.
> Podrías preguntar por qué comparo siempre contra comprar y esperar. Porque es la alternativa que no cuesta nada: no necesitas reglas, ni atención, ni costos de operar. Si una estrategia no supera a esa alternativa, el trabajo extra de operarla no se justifica con dinero, aunque tenga un porcentaje de aciertos muy alto.

**[2:50 — Qué dice y qué no dice el 68% de aciertos]** (pantalla: diez monedas verdes pequeñas y una roja grande)
BOCETO: animación de muchas ganancias chicas que se apilan y no alcanzan una barra gris alta; texto «% de aciertos ≠ dinero».
> El 68% es el porcentaje de aciertos que anuncia la estrategia; en este experimento no medí esa cifra, medí el dinero y el Sharpe. Lo que sí puedo decir es que, con ese porcentaje de aciertos anunciado, el resultado en dinero queda muy por debajo de quedarse quieto. Acertar muchas veces no es ganar más dinero: depende de cuánto ganas cuando aciertas y de cuánto tiempo estás dentro del mercado.

**[3:20 — Un caso concreto: comprar la caída]** (pantalla: un índice que sube a largo plazo con caídas pasajeras; cada caída comprada se cierra con una ganancia pequeña)
BOCETO: un índice que sube a largo plazo con caídas pasajeras; cada caída comprada se cierra con una ganancia pequeña (moneda verde) mientras el índice sigue subiendo.
> En un mercado que sube a largo plazo, comprar después de un mal día suele producir muchos aciertos, porque el mercado tiende a recuperarse. Pero cada operación dura poco y captura una ganancia pequeña. Esa es la explicación que da el propio análisis del experimento: el 68% de aciertos viene de comprar caídas en un mercado alcista. Muchas ganancias chicas, pero rindes menos que quedarte quieto.

**[3:50 — Consistencia entre periodos]** (pantalla: dos tarjetas: 2012–2018 (Sharpe 0.37, +23%) y 2019–2024 (Sharpe 0.42, +32%))
BOCETO: dos tarjetas, 2012–2018 (Sharpe 0.37, +23%) y 2019–2024 (Sharpe 0.42, +32%), y debajo la barra de comprar y esperar, mucho más alta.
> Mira también la consistencia. En 2012–2018, IBS dio +23% con un Sharpe de 0.37. En 2019–2024, +32% con un Sharpe de 0.42. Son resultados parecidos entre sí, y eso sugiere que la estrategia hace algo estable. El problema no es que sea inconsistente; es que la alternativa simple, comprar y esperar, rindió mucho más en el mismo periodo.

**[4:15 — Con tu capital]** (pantalla: tarjeta «Con tu capital»; curva `series/extra-v75.json[0]` contra `[1]`)
BOCETO: la tarjeta cubre todo el periodo 2012–2024; una nota separa «2012–2024 (tarjeta)» de «2019–2024 (fuera de muestra)».
> Veamos todo el periodo, de enero de 2012 a diciembre de 2024. Con $10,000, IBS dio +$6,159; comprar y esperar, +$29,006. Con $100,000: +$61,591 contra +$290,064. La peor caída desde un máximo fue de −$1,822 con 10,000 y −$18,215 con 100,000, un −18.2%. Gana dinero, pero mucho menos que quedarse dentro del mercado.

**[4:35 — Lo que me llevo]** (pantalla: texto «gana dinero, no le gana al mercado»)
BOCETO: la pregunta «¿de cuánto es cada ganancia y cuánto tiempo estás dentro?» aparece en pantalla; texto «gana dinero, no le gana al mercado».
> La pregunta correcta no es cuántas veces aciertas, sino cuánto rinde frente a la alternativa más simple. Aquí la alternativa era no hacer nada. Y hay una segunda pregunta útil cuando alguien te muestra un porcentaje de aciertos: ¿de cuánto es cada ganancia y cuánto tiempo estás dentro del mercado? Un porcentaje de aciertos alto con ganancias chicas puede rendir menos que una estrategia con menos aciertos y ganancias grandes. Esa es la diferencia entre sentirse bien con el resultado y ganar más dinero.

**[5:10 — Preguntas de un escéptico]** (pantalla: tres tarjetas: «¿sin costos?», «¿otros umbrales?», «¿un solo índice?»)
BOCETO: tres tarjetas que se voltean: «¿sin costos?» → ya incluidos (3 bps); «¿otros umbrales?» → no probado; «¿un solo índice?» → no separado.
> Preguntas que me haría un escéptico. ¿Y si no restara costos? Este experimento ya los incluye: 3 puntos básicos por movimiento. ¿Y si usara umbrales distintos de 0.2 y 0.7? No lo probé. ¿Y si aplicara IBS a un solo índice? Probé los 4 con el mismo peso; no medí cada uno por separado en este experimento. Lo que sí está medido es que, en conjunto, la estrategia no supera a comprar y esperar.

**[5:40 — Resumen]** (pantalla: tarjeta con las cifras clave: 0.37 · +23% · 0.42 · +32% · 0.68 · +109% · +$61,591 · +$290,064)
BOCETO: tarjeta con las cifras (0.37, +23%, 0.42, +32%, 0.68, +109%, +$61,591 y +$290,064).
> Resumen en tres bloques de cifras. En 2012–2018, Sharpe de 0.37 y +23%. Fuera de muestra, de 2019 a 2024, Sharpe de 0.42 y +32%, contra 0.68 y +109% de comprar y esperar. Y en dinero, con $100,000 entre 2012 y 2024: +$61,591 contra +$290,064. La estrategia gana dinero; el mercado, mucho más.

**[6:05 — Conclusión]**
BOCETO: el 68% en verde y debajo las dos barras, +32% y +109%; cierre con el logo.
> No sirvió: gana dinero, pero no le gana al mercado. Es la misma pregunta del experimento 85, el de los «71% de aciertos»: qué hay detrás de un porcentaje de aciertos. Todos los datos en atlas-lab-one.vercel.app, experimento 75. El trading no se promete: se prueba. Contenido educativo, no es asesoría financiera.

---

## SHORT (9:16, ≈ 45 s)

**[0-3 s]** (boceto: «68%» verde enorme y debajo «+32% vs +109%»; b-roll de monedas cayendo, kb=in; golpe de bajo + sacudida)
> 68% de aciertos, pero +32% contra +109% de quedarte quieto.

**[3-14 s]** (boceto: vela que cierra cerca del mínimo → COMPRA; cerca del máximo → SALE; whoosh)
> Es IBS: compra cuando el cierre queda cerca del mínimo del día, vende cuando queda cerca del máximo. Se anuncia con 13% anual y 68% de aciertos. Probé 4 índices, con costos.

**[14-21 s]** (boceto: dos barras: Sharpe 0.42 corta contra 0.68 larga; ticks)
> De 2019 a 2024, la estrategia ganó +32%, con un Sharpe de 0.42. Comprar y esperar: +109%, con un Sharpe de 0.68.

**[21-28 s]** (boceto: muchas monedas verdes pequeñas que no alcanzan la barra gris; texto «% de aciertos ≠ dinero»; b-roll de ciudad al atardecer, kb=out)
> El 68% de aciertos viene de comprar caídas en un mercado alcista: muchas ganancias chicas. Pero rindes menos que quedarte quieto.

**[28-35 s]** (boceto: dos tarjetas: 2012–2018 +23% y 2019–2024 +32%)
> Fue consistente: +23% en 2012–2018 y +32% en 2019–2024. El problema es que la alternativa más simple rindió mucho más.

**[35-39 s]** (boceto: tarjeta «Con tu capital»: +$61,591 contra +$290,064)
> En todo el periodo, de 2012 a 2024, con $100,000: +$61,591 contra +$290,064.

**[39-45 s]** (boceto: texto «¿y cuánto dinero?»; sello ✕ rojo; logo)
> Gana dinero, no le gana al mercado. Video completo en el canal. 68% de aciertos… ¿y cuánto dinero?

Gancho alterno A: «Acertar el 68% de las veces y aun así quedarte atrás.» · B: «Con $100,000, IBS ganó $61,591; quedarse quieto, $290,064.»

## Descripción (YouTube)
IBS (Internal Bar Strength), la reversión de QuantifiedStrategies que se anuncia con «13% anual y 68% de aciertos»: comprar con IBS < 0.2 y salir con IBS > 0.7, en 4 índices con costos de 3 puntos básicos. Fuera de muestra (2019–2024) gana +32% con Sharpe 0.42, frente a +109% y 0.68 de comprar y esperar. Gana dinero, pero no le gana al mercado.

Datos completos: https://atlas-lab-one.vercel.app (experimento #75)

Contenido educativo. No es asesoría financiera ni recomendación de inversión.

Capítulos: 0:00 Gancho · 0:25 La estrategia · 1:05 Qué es el porcentaje de aciertos · 1:35 Cómo lo probé · 2:05 Resultados · 2:30 Por qué comparo con comprar y esperar · 2:50 Qué dice y qué no dice el 68% de aciertos · 3:20 Un caso concreto: comprar la caída · 3:50 Consistencia entre periodos · 4:15 Con tu capital · 4:35 Lo que me llevo · 5:10 Preguntas de un escéptico · 5:40 Resumen · 6:05 Conclusión

Etiquetas: IBS, Internal Bar Strength, porcentaje de aciertos, estrategias famosas, reversión a la media, índices bursátiles, prueba fuera de muestra, backtest, Sharpe ratio, trading con datos, ATLAS Lab, comprar y mantener

## Rúbrica (autoevaluación)
| Criterio | Short | Largo |
|---|---|---|
| hook_0_3s | 5 | 5 |
| ritmo | 4 | 4 |
| promesa_cumplida | 5 | 5 |
| potencial_loop | 5 | 4 |
| claridad_no_traders | 5 | 4 |
| honestidad_atlas | 5 | 5 |
| audio | 4 | 4 |
| cta | 4 | 4 |
| **Promedio** | **4.63** | **4.38** |

## Otros temas de este experimento
- Tema 1 (este archivo): `exp-075-ibs.md` — IBS, fuerza interna de la barra
- Tema 2: `exp-075-t2-promesa-contra-medicion.md` — La promesa contra la medición (13% anual anunciado, ¿y lo medido?)
- Tema 3: `exp-075-t3-once-anios-de-trece.md` — 11 años positivos de 13 (la estrategia regular que pierde contra quedarse quieto)

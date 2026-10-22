# Experimento #75 — Tema 2: La promesa contra la medición (13% anual anunciado, ¿y lo medido?)

**Tema 2 de 3 del experimento #75** · Qué aporta frente a los otros temas: es el tema de la letra pequeña. Pone en una tabla lo que se anuncia (13% anual y 68% de aciertos) y lo que se midió con costos en cuatro índices, y enseña qué preguntar a cualquier cifra anunciada. Se entiende sin haber visto el tema 1.
Estado del guion: **BORRADOR — pendiente de aprobación**
Estado del experimento: **murió** (gana +32% fuera de muestra, pero muy por debajo de comprar y esperar, +109%; Sharpe 0.42 frente a 0.68)
Serie: B (estrategias famosas, puestas a prueba). Eco directo de #85 («71% de aciertos»).
Datos usados: `experiments.json` (v=75: description —«13% anual y 68% de aciertos» anunciados—, kpis, metrics, notes, analysis, params_view) · `exp_details.json` (extra-v75: algo, code, filters) · `series/extra-v75.json` ([0] IBS, [1] los 4 índices comprar y esperar; el crecimiento anual de 3.8% y de 11.1% se calcula de las curvas) · tabla «Con tu capital» (fila #75: +$61,591 contra +$290,064).
Producción (CLAUDE.md del canal): b-roll real detrás de cada escena con overlay 0.6, Ken Burns alternando, subtítulos karaoke en MAYÚSCULAS, un dato visual por escena. Colores: rojo `#e11d2a`, verde `#22c55e`, fondo `#09090b`.

## Títulos
1. Se anuncia con 13% anual: medida con costos en 4 índices, IBS rindió 61.6% en 13 años
2. 13% anual anunciado contra 3.8% medido: IBS, probada con costos
3. Qué preguntar a una cifra anunciada: el caso de IBS

## Miniatura
Fondo `#09090b`. A la izquierda, un cartel de feria con «13% ANUAL» en blanco; a la derecha, una lupa que muestra «3.8%» en rojo `#e11d2a` y «61.6%» en verde `#22c55e`. Texto: «¿Y LO MEDIDO?». Logo ATLAS arriba a la derecha.

---

## VIDEO LARGO (≈ 5½ min)

**[0:00 — Gancho]** (pantalla: cartel «13% anual · 68% de aciertos»; una lupa lo cruza y muestra «61.6% en 13 años»)
BOCETO: el cartel brilla; la lupa lo atraviesa con whoosh y revela la cifra medida; golpe de bajo.
> Una estrategia se anuncia con 13% de ganancia anual y 68% de aciertos. La probé con costos en cuatro índices, de 2012 a 2024: subió 61.6% en total, unos 3.8% al año. Quedarse quieto en los mismos índices: 290.1%.

**[0:18 — Qué experimento es]** (pantalla: rótulo «Experimento #75 · ATLAS Lab» y el nombre debajo)
BOCETO: rótulo con el número 75 y el nombre «IBS — Fuerza interna de la barra»; logo en la esquina.
> Este es el experimento #75 de ATLAS Lab: IBS, fuerza interna de la barra. Todos los resultados están en la página del experimento.

**[0:45 — La promesa]** (pantalla: dos cifras anunciadas con la etiqueta «anunciado, no medido»)
BOCETO: dos tarjetas «13% anual» y «68% de aciertos», ambas con sello ámbar «anunciado»; una vela con el cierre cerca del mínimo.
> IBS significa fuerza interna de la barra: mide dónde cerró el precio dentro del rango del día, de 0, el mínimo, a 1, el máximo. La regla: comprar cuando queda por debajo de 0.2 y salir cuando pasa de 0.7. QuantifiedStrategies la presenta con 13% anual y 68% de aciertos. Esas son cifras anunciadas: no sé con qué datos, periodo o costos se calcularon.

**[1:25 — Lo que sí hice]** (pantalla: checklist con los valores reales)
BOCETO: ✓ 4 índices con el mismo peso; ✓ 3 puntos básicos por movimiento; ✓ señal de ayer; ✓ 2012–2018 y 2019–2024.
> Yo la probé en S&P 500, Nasdaq 100, DAX y FTSE 100, con el mismo peso cada uno, 3 puntos básicos de costo por movimiento, con la señal de ayer, y en dos periodos: 2012 a 2018 para el diseño y 2019 a 2024 como prueba fuera de muestra, con datos que no se usaron al diseñar. Un punto básico es la centésima parte de 1%. No medí el porcentaje de aciertos: medí dinero y Sharpe, que es cuánto rindes por unidad de riesgo.

**[2:10 — La medición]** (pantalla: tabla comparativa)
BOCETO: tabla que se llena con tick; la columna «anunciado» en ámbar, la «medido» en verde, la de comprar y esperar en blanco.
| | Anunciado | Medido: IBS | Medido: comprar y esperar |
|---|---|---|---|
| Ganancia anual | 13% | unos 3.8% (+61.6% en 2012–2024) | unos 11.1% (+290.1%) |
| Aciertos | 68% | no medido | no aplica |
| Sharpe 2012–2018 / fuera de muestra | no se anuncia | 0.37 / 0.42 | 0.68 fuera de muestra |
| Retorno fuera de muestra (2019–2024) | no se anuncia | +32% | +109% |
> IBS sube 61.6% entre 2012 y 2024, unos 3.8% al año calculado de la curva. Fuera de muestra gana +32% con un Sharpe de 0.42. Comprar y esperar: +109% y 0.68; en todo el periodo, 290.1%, unos 11.1% al año.

**[3:00 — Por qué pueden diferir]** (pantalla: tres interruptores: «mercado», «costos», «periodo»)
BOCETO: tres interruptores que se mueven y cambian el número; texto «mismas reglas, otro resultado».
> Una cifra anunciada y una medida pueden diferir por muchas razones legítimas: otros mercados, otro periodo, otros costos. Yo no sé cuál explica la diferencia, y no lo voy a inventar. Lo que sí puedo decir es qué pasa con estas reglas, en estos cuatro índices, con estos costos: gana dinero, no le gana al mercado. Por eso hay tres preguntas que conviene hacer.

**[3:35 — Tres preguntas para cualquier cifra anunciada]** (pantalla: tres preguntas grandes, una a una)
BOCETO: tres preguntas que aparecen con whoosh: «¿con qué datos y qué periodo?», «¿con qué costos?», «¿contra qué se compara?».
> Una: ¿con qué datos y qué periodo? Dos: ¿con qué costos? Tres: ¿contra qué se compara? Un 13% anual impresiona hasta que descubres que quedarse quieto en los mismos índices rindió más. La comparación con comprar y esperar es la alternativa que no cuesta nada: sin reglas, sin atención y sin costos de operar.

**[4:10 — Con tu capital]** (pantalla: tarjeta «Con tu capital» con selector)
BOCETO: curvas verde y gris; contadores finales; nota «2012–2024».
> Con $100,000, entre enero de 2012 y diciembre de 2024, IBS gana $61,591; comprar y esperar, $290,064. Con $10,000: +$6,159 contra +$29,006. La peor caída de IBS fue de −18.2%, contra −36.1% de quedarse quieto.

**[4:40 — Preguntas de un escéptico]** (pantalla: tres tarjetas: «¿y sin costos?», «¿otros umbrales?», «¿un solo índice?»)
BOCETO: tres tarjetas que se voltean con «incluidos», «no probado» y «no separado».
> Preguntas que me haría un escéptico. ¿Y sin costos? Este experimento ya los incluye. ¿Y otros umbrales distintos de 0.2 y 0.7? No los probé. ¿Y un solo índice? Probé los cuatro juntos; no medí cada uno por separado.

**[5:00 — Ficha del experimento #75]** (pantalla: tarjeta con la ficha y la URL abajo)
BOCETO: tarjeta con cinco líneas que entran con tick y, al final, la URL resaltada en verde.
> Ficha del experimento 75. Estado: murió. Cifras clave: +32% fuera de muestra contra +109% de comprar y esperar; Sharpe de 0.42 contra 0.68. Lo que decidió: no supera a comprar y esperar. Lección: gana dinero, pero no le gana al mercado. Revísalo completo en atlas-lab-one.vercel.app/e/75.

**[5:30 — Cierre]**
BOCETO: el cartel de «13%» junto a la lupa; logo.
> Todos los datos en atlas-lab-one.vercel.app, experimento 75. El trading no se promete: se prueba. Contenido educativo, no es asesoría financiera.

---

## SHORT (9:16, ≈ 48 s)

**[0-3 s]** (boceto: cartel «13% anual» y una lupa con «61.6% en 13 años»; b-roll de cartel luminoso, kb=in; golpe de bajo)
> Se anuncia con 13% anual. Medida con costos en 4 índices: 61.6% en 13 años.

**[3-13 s]** (boceto: vela que cierra cerca del mínimo → COMPRA; whoosh)
> IBS compra cuando el cierre queda cerca del mínimo del día y vende cuando queda cerca del máximo. Cuatro índices, con costos de 3 puntos básicos.

**[13-25 s]** (boceto: tarjeta «+$61,591 con $100,000»; «unos 3.8% al año»)
> De 2012 a 2024, con $100,000: ganó $61,591. Eso es unos 3.8% al año, calculado de la curva.

**[25-35 s]** (boceto: tarjeta «+$290,064»; «unos 11.1% al año»)
> Quedarte quieto en los mismos cuatro índices: $290,064, unos 11.1% al año.

**[35-43 s]** (boceto: texto «¿con qué datos, costos y contra qué?»)
> No sé con qué datos se calculó el 13% anunciado. Lo que medí: gana dinero, pero no le gana al mercado.

**[43-48 s]** (boceto: texto «Experimento #75 completo en el enlace»; logo)
> Video completo en el canal y experimento #75 completo en el enlace. ¿Qué preguntas haces a una cifra anunciada?

Gancho alterno A: «13% anual anunciado. Medido: unos 3.8%.» · B: «Con $100,000, IBS ganó $61,591; quedarse quieto, $290,064.»

## Descripción de YouTube — video largo
https://atlas-lab-one.vercel.app/e/75?utm_source=youtube&utm_medium=video&utm_campaign=exp075-t2
Ficha: experimento #75, IBS (fuerza interna de la barra). Estado: murió. Fuera de muestra (2019–2024): +32% con Sharpe 0.42 contra +109% y 0.68 de comprar y esperar. Con $100,000: +$61,591 contra +$290,064.
La estrategia se anuncia con «13% anual y 68% de aciertos»; la probé en 4 índices con costos de 3 puntos básicos y comparo lo anunciado con lo medido.
Contenido educativo. No es asesoría financiera ni recomendación de inversión.

## Descripción de YouTube — Short
https://atlas-lab-one.vercel.app/e/75?utm_source=youtube&utm_medium=short&utm_campaign=exp075-t2
Ficha: experimento #75, murió. Anunciada con 13% anual; medida: +$61,591 contra +$290,064 de comprar y esperar. Contenido educativo, no es asesoría financiera.

## Capítulos
0:00 Gancho · 0:18 Qué experimento es · 0:45 La promesa · 1:25 Lo que sí hice · 2:10 La medición · 3:00 Por qué pueden diferir · 3:35 Tres preguntas para cualquier cifra anunciada · 4:10 Con tu capital · 4:40 Preguntas de un escéptico · 5:00 Ficha del experimento #75 · 5:30 Cierre

## Etiquetas
IBS, Internal Bar Strength, 13% anual, porcentaje de aciertos, cifras anunciadas, estrategias famosas, QuantifiedStrategies, índices bursátiles, backtest, trading con datos, ATLAS Lab, comprar y mantener

## Rúbrica (autoevaluación, 1–5)
| Pieza | hook_0_3s | ritmo | promesa_cumplida | potencial_loop | claridad_no_traders | honestidad_atlas | audio | cta | Promedio |
|---|---|---|---|---|---|---|---|---|---|
| Largo | 5 | 4 | 5 | 4 | 4 | 5 | 4 | 4 | 4.38 |
| Short | 5 | 4 | 5 | 4 | 4 | 5 | 4 | 4 | 4.38 |

Hook ≥ 4 ✓ · honestidad 5 ✓. Punto débil: el 13% anunciado y el 3.8% medido no son comparables en sentido estricto (datos, periodo y costos pueden ser distintos); el largo lo dice dos veces y no atribuye intención. El 3.8% y el 11.1% son cálculos sobre la curva.

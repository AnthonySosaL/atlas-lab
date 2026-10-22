# Experimento #73 — Tema 2: Faber contra Turtle (dos sistemas famosos de tendencia, el mismo dinero final)

**Tema 2 de 3 del experimento #73** · Qué aporta frente a los otros temas: es el tema de la comparación. Pone la regla de Faber (#73) frente a la de Turtle (#74) en la misma cesta de 11 activos, con los mismos costos y periodos: terminan con casi el mismo dinero, por caminos distintos. Se nombra con el #73 por ser el menor del par. Se entiende sin los otros temas.
Estado del guion: **BORRADOR — pendiente de aprobación**
Estado del experimento: **parcial** (recorta el drawdown a −10.2% frente a −29.8% sin estrategia, pero su Sharpe de 0.58 no le gana a comprar y esperar, 0.67)
Serie: B (estrategias famosas, puestas a prueba). Une #73 y #74.
Datos usados: `experiments.json` (v=73 y v=74: kpis, metrics, params_view, analysis) · `exp_details.json` (extra-v73 y extra-v74: algo, code) · `series/extra-v73.json` y `extra-v74.json` ([0] la estrategia, [1] los 11 activos comprar y esperar, la misma curva en las dos; retornos por año calendario calculados de las curvas) · tabla «Con tu capital» (filas #73 y #74).
Producción (CLAUDE.md del canal): b-roll real detrás de cada escena con overlay 0.6, Ken Burns alternando, subtítulos karaoke en MAYÚSCULAS, un dato visual por escena. Colores: rojo `#e11d2a`, verde `#22c55e`, fondo `#09090b`.

## Títulos
1. Dos estrategias famosas, reglas distintas, el mismo final: +$41,712 y +$41,686
2. Faber contra Turtle: media de 200 días contra ruptura de 20, con 11 activos
3. Seguir la tendencia por dos caminos: mismo dinero, caídas distintas (−13.4% y −9.5%)

## Miniatura
Fondo `#09090b`. Dos curvas verdes `#22c55e` de formas distintas que llegan al mismo punto, con dos etiquetas: «$41,712» y «$41,686»; una curva gris más alta detrás. Texto: «MISMO FINAL». Logo ATLAS esquina inferior derecha.

---

## VIDEO LARGO (≈ 6½ min)

**[0:00 — Gancho]** (pantalla: dos curvas verdes de formas distintas que se juntan en el mismo punto; dos contadores: «+$41,712» y «+$41,686»)
BOCETO: las dos curvas avanzan de 2012 a 2024 por caminos distintos y llegan al mismo punto con tick; una curva gris más alta aparece detrás con «+$92,344»; golpe de bajo.
> Dos estrategias famosas de seguir la tendencia, con reglas distintas, terminaron con casi el mismo dinero: con $100,000, +$41,712 y +$41,686. Quedarse quieto con los mismos once activos ganó $92,344. Hoy comparo las dos, porque su camino fue muy distinto.

**[0:18 — Qué experimento es]** (pantalla: rótulo «Experimento #73 · ATLAS Lab» y el nombre debajo; una tarjeta pequeña «#74»)
BOCETO: rótulo con el número 73 y el nombre «Faber GTAA — timing con MA200 (Meb Faber)»; en un lado, la tarjeta del 74.
> Este es el experimento #73 de ATLAS Lab: Faber GTAA, timing con la media de 200 días. Todos los resultados están en la página del experimento. Aquí lo comparo con el experimento 74, Turtle Trading.

**[0:45 — Las dos reglas]** (pantalla: dos mini-gráficos)
BOCETO: gráfico 1: precio con la media de 200 días; verde sobre ella, gris de efectivo debajo. Gráfico 2: canal con el máximo de 20 días y el mínimo de 10; compra al romper arriba, sale al romper abajo.
> Faber, de Meb Faber, es un interruptor: mantén cada activo solo si su precio está sobre su media de 200 días, que son unos 10 meses; si no, pasa a efectivo. Turtle, de Richard Dennis, compra cuando el precio rompe su máximo de 20 días y sale cuando pierde su mínimo de 10. Las dos son de tendencia: no predicen, siguen. Las dos, solo en largo.

**[1:30 — La misma prueba]** (pantalla: checklist con los valores reales)
BOCETO: cesta de 11 casillas (4 índices, oro, 4 pares de divisas, Brent y WTI); checklist: ✓ 3 bps, ✓ señal de ayer, ✓ fuera de muestra 2019–2024.
> Las dos se probaron igual: la misma cesta de 11 activos, que son 4 índices, oro, 4 pares de divisas, Brent y WTI, con el mismo peso cada uno; 3 puntos básicos de costo por movimiento; señal de ayer; diseño en 2012–2018 y prueba fuera de muestra en 2019–2024, que son datos que no se usaron para diseñar. El Sharpe mide cuánto rindes por cada unidad de riesgo.

**[2:05 — Resultados]** (pantalla: tabla con barras gemelas)
BOCETO: tres barras por fila (Faber en verde, Turtle en verde claro, comprar y esperar en gris); la fila de dinero con contadores.
| Medida | Faber (MA200) | Turtle (20/10) | Comprar y esperar |
|---|---|---|---|
| Sharpe 2012–2018 | 0.26 | 0.21 | 0.20 |
| Sharpe fuera de muestra (2019–2024) | 0.58 | 0.75 | 0.67 |
| Retorno fuera de muestra | +28.5% | +32.8% | +70.8% |
| Con $100,000 (2012–2024) | +$41,712 | +$41,686 | +$92,344 |
| Peor caída (2012–2024) | −13.4% | −9.5% | −29.8% |
> Faber y Turtle empatan en dinero y quedan a menos de la mitad de comprar y esperar. Turtle tiene mejor Sharpe fuera de muestra, 0.75 contra 0.58 de Faber, y mejor que el 0.67 de quedarse quieto. Las dos reducen la peor caída: −13.4% y −9.5% contra −29.8%.

**[3:00 — El mismo final, caminos distintos]** (pantalla: tabla con tres años)
BOCETO: barras por año; en 2020 la de Turtle duplica a la de Faber; en 2021 ocurre lo contrario.
| Año | Faber | Turtle | Comprar y esperar |
|---|---|---|---|
| 2015 | −3.5% | −2.1% | −7.5% |
| 2020 | +7.0% | +14.0% | +8.9% |
| 2021 | +12.6% | +5.8% | +16.6% |
> Por dentro no se parecen. En 2020, Turtle ganó +14.0% y Faber +7.0%. En 2021, al revés: Faber +12.6% y Turtle +5.8%. En el mal año 2015, las dos perdieron menos que el mercado, −3.5% y −2.1% contra −7.5%. Mismo punto de llegada, trayecto distinto: calculado de las curvas, año calendario por año calendario.

**[3:50 — Dónde sufre cada una]** (pantalla: dos curvas con su peor caída marcada)
BOCETO: curva de Faber con el valle desde octubre de 2018 hasta marzo de 2020; curva de Turtle con el valle en 2022; curva gris con su caída de febrero a marzo de 2020.
> La peor caída de Faber se extendió desde octubre de 2018 hasta marzo de 2020. La de Turtle llegó en 2022, entre marzo y noviembre. Y la de comprar y esperar fue la del COVID, de enero a marzo de 2020. Cada regla tiene su punto débil, según cuándo el mercado cambia de dirección.

**[4:30 — Qué enseña la comparación]** (pantalla: dos frases: «el camino cambia» y «el destino casi no»)
BOCETO: flechas que parten de puntos distintos y llegan al mismo lugar; sello «gestión de riesgo, no ventaja».
> La forma de entrar y salir cambia el camino, pero el destino casi no cambia: dos reglas distintas de seguir la tendencia, mismo dinero. Las dos pasan parte del tiempo en efectivo, así que asumen menos riesgo y ganan menos. Es gestión de riesgo, no una ventaja sobre el mercado.

**[5:00 — Con tu capital]** (pantalla: tarjeta «Con tu capital» con selector)
BOCETO: tres curvas; contadores finales; nota «mismo periodo, 2012–2024».
> Con $10,000: +$4,171 con Faber, +$4,169 con Turtle y +$9,234 comprando y esperando. Con $100,000: +$41,712, +$41,686 y +$92,344.

**[5:30 — Preguntas de un escéptico]** (pantalla: tres tarjetas: «¿otras ventanas?», «¿Deflated Sharpe?», «¿mismo resultado por casualidad?»)
BOCETO: tres tarjetas que se voltean con «no probado» y «no aplicado».
> Preguntas que me haría un escéptico. ¿Y otras ventanas de 200 y de 20? No las probé. ¿Y el Deflated Sharpe? No lo apliqué. ¿Y que el empate sea casualidad? Puede serlo: los caminos son distintos. Lo medido es que las dos terminan lejos de comprar y esperar.

**[5:55 — Ficha del experimento #73]** (pantalla: tarjeta con la ficha y la URL abajo)
BOCETO: tarjeta con cinco líneas que entran con tick y, al final, la URL resaltada en verde.
> Ficha del experimento 73. Estado: parcial. Cifras clave: Sharpe fuera de muestra de 0.58 contra 0.67 de comprar y esperar; drawdown de −10.2% contra −29.8%; retorno de +28.5% contra +70.8%. Lo que decidió: no supera a comprar y esperar. Lección: es gestión de riesgo, no ventaja. Revísalo completo en atlas-lab-one.vercel.app/e/73.

**[6:25 — Cierre]**
BOCETO: dos curvas verdes que se juntan y una gris por encima; logo.
> Todos los datos en atlas-lab-one.vercel.app, experimento 73. El trading no se promete: se prueba. Contenido educativo, no es asesoría financiera.

---

## SHORT (9:16, ≈ 48 s)

**[0-3 s]** (boceto: dos curvas distintas que llegan al mismo punto; «$41,712» y «$41,686»; b-roll de dos caminos que se unen, kb=in; golpe de bajo)
> Dos estrategias famosas, reglas distintas, el mismo final: $41,712 y $41,686.

**[3-14 s]** (boceto: gráfico de media de 200 días y canal de 20 y 10; whoosh)
> Faber: mantén cada activo si está sobre su media de 200 días. Turtle: compra al romper el máximo de 20 días, sal al perder el mínimo de 10. Once activos, con costos.

**[14-26 s]** (boceto: barras de Sharpe fuera de muestra: 0.58, 0.75 y 0.67)
> Fuera de muestra, de 2019 a 2024, Faber da un Sharpe de 0.58 y Turtle de 0.75. Comprar y esperar: 0.67.

**[26-36 s]** (boceto: barras de caída máxima: −13.4%, −9.5% y −29.8%)
> Las dos recortan la peor caída: −13.4% y −9.5%, contra −29.8% de quedarte quieto.

**[36-43 s]** (boceto: curva gris más alta: +$92,344)
> Pero quedarte quieto ganó $92,344. Son gestión de riesgo, no ventaja.

**[43-48 s]** (boceto: texto «Experimento #73 completo en el enlace»; logo)
> Video completo en el canal y experimento #73 completo en el enlace. Mismo final, ¿cuál caída prefieres?

Gancho alterno A: «Menos caída, menos dinero: dos estrategias famosas de tendencia, $41,712 contra $41,686.» · B: «Faber o Turtle: terminan igual, sufren distinto.»

## Descripción de YouTube — video largo
https://atlas-lab-one.vercel.app/e/73?utm_source=youtube&utm_medium=video&utm_campaign=exp073-t2
Ficha: experimento #73, Faber GTAA (Meb Faber). Estado: parcial. Sharpe fuera de muestra 0.58 contra 0.67 de comprar y esperar; drawdown −10.2% contra −29.8%. Con $100,000: Faber +$41,712, Turtle +$41,686, comprar y esperar +$92,344.
Faber (#73) y Turtle (#74) en la misma cesta de 11 activos, con costos de 3 puntos básicos y prueba fuera de muestra 2019–2024.
Contenido educativo. No es asesoría financiera ni recomendación de inversión.

## Descripción de YouTube — Short
https://atlas-lab-one.vercel.app/e/73?utm_source=youtube&utm_medium=short&utm_campaign=exp073-t2
Ficha: experimento #73, parcial. Faber +$41,712 y Turtle +$41,686 contra +$92,344 de quedarse quieto. Contenido educativo, no es asesoría financiera.

## Capítulos
0:00 Gancho · 0:18 Qué experimento es · 0:45 Las dos reglas · 1:30 La misma prueba · 2:05 Resultados · 3:00 El mismo final, caminos distintos · 3:50 Dónde sufre cada una · 4:30 Qué enseña la comparación · 5:00 Con tu capital · 5:30 Preguntas de un escéptico · 5:55 Ficha del experimento #73 · 6:25 Cierre

## Etiquetas
Faber GTAA, Turtle Trading, seguimiento de tendencia, media móvil 200, canal de Donchian, Meb Faber, Richard Dennis, estrategias famosas, drawdown, backtest, trading con datos, ATLAS Lab

## Rúbrica (autoevaluación, 1–5)
| Pieza | hook_0_3s | ritmo | promesa_cumplida | potencial_loop | claridad_no_traders | honestidad_atlas | audio | cta | Promedio |
|---|---|---|---|---|---|---|---|---|---|
| Largo | 5 | 4 | 5 | 4 | 4 | 5 | 4 | 4 | 4.38 |
| Short | 5 | 4 | 5 | 4 | 4 | 5 | 4 | 4 | 4.38 |

Hook ≥ 4 ✓ · honestidad 5 ✓. Punto débil: el empate de dinero es un resultado, no una ley; el largo dice que puede ser casualidad. Los retornos por año salen de las curvas.

# Experimento #61 — Ataques al cambio de régimen, ronda 2 · Tema 2 de 3: la estrategia «neutral» que ya perdía antes de costos

Estado del guion: **BORRADOR — pendiente de aprobación**
Tema 2 de 3 del experimento #61 · Qué aporta frente a los otros temas: es el tema del CONCEPTO largo/corto. Explica desde cero qué es vender en corto y qué significa «neutral en dólares», y muestra el caso B1: −10.6% antes de costos y −28.0% después. El tema 1 repasa las tres ideas de la ronda 2; el tema 3 trata de la capa neutral que envenenó una buena cartera (B2).
Estado del experimento: **murió** (ninguna variante supera a invertir a 1x)
Serie: G, por tema (filtros de régimen; el plan aún no lista #61–#62) · Relacionado: #59, #60, #62
Datos usados: `experiments.json` (v=61: verdict, analysis, notes, kpis, metrics, period, params_view, capital), `exp_details.json` (extra-v61: algo, code.snippet, filters), `series/extra-v61.json` ([0] B3, [1] cesta a 1x; B1 no tiene curva) y la tabla «Con tu capital» (`docs/youtube/*-capital.md`, fila #61; el $10k se calcula con la misma regla de la tarjeta del sitio).

## Títulos (3 opciones)
1. Neutral en dólares: −10.6% antes de costos, −28.0% después (15 activos, 2014–2024)
2. Comprar lo fuerte y vender lo débil por el mismo monto: Sharpe −0.22
3. ¿Qué es una estrategia largo/corto? La probé en 15 activos

## Miniatura (1280×720)
Fondo `#09090b`. Una balanza perfectamente nivelada: en un platillo, verde `#22c55e`, «COMPRA»; en el otro, rojo `#e11d2a`, «VENDE EN CORTO». Debajo, texto grande blanco: «NEUTRAL» y, en rojo, «−28.0%». Logo ATLAS esquina superior derecha.

---

## VIDEO LARGO (16:9, ≈ 5 min)

**[0:00 — Gancho]** (pantalla: balanza nivelada y el contador «−10.6%»)
Una estrategia diseñada para no depender de si el mercado sube o baja perdió −10.6% antes de pagar un solo costo. Con costos, −28.0%.
> BOCETO: balanza nivelada; el contador baja hasta «−10.6%» y luego hasta «−28.0%» en rojo; golpe de bajo y sacudida en el segundo número.

**[0:15 — Este experimento]** (pantalla: rótulo «Experimento #61 · Ataques al cambio de régimen, ronda 2»)
Este es el experimento #61 de ATLAS Lab: ataques al cambio de régimen, ronda 2. Todos los resultados están en la página del experimento. Hoy me centro en la primera idea de la ronda, la que prometía ganar sin importar la dirección del mercado.
> BOCETO: rótulo con «#61» y el nombre del experimento; logo ATLAS; whoosh suave.

**[0:35 — Qué es vender en corto]** (pantalla: dos flechas, una hacia arriba y otra hacia abajo)
Comprar es apostar a que algo sube. Vender en corto es apostar a que algo baja: ganas si el precio cae y pierdes si sube. Una estrategia neutral en dólares combina las dos cosas por el mismo monto: tanto dinero comprado como vendido en corto. La idea es que, si todo el mercado cae, lo que pierdes en las compras lo recuperas en las ventas en corto.
> BOCETO: dos flechas, verde «compra» (ganas si sube) y roja «vende en corto» (ganas si baja); dos pilas de dinero del mismo tamaño. Ilustración rotulada, sin datos.

**[1:10 — Cómo se arma B1]** (pantalla: mosaico de 15 casillas)
Uso una cesta de 15 activos, con datos diarios y pesos que bajan cuanto más se mueve cada activo. Cada día ordeno los activos según cuánto están por encima de su media de 200 días, con los datos de ayer. Compro la mitad más fuerte y vendo en corto la mitad más débil, por el mismo monto. Cada vez que se mueve la cartera, pago 3 puntos básicos.
> BOCETO: mosaico de 15 casillas; la mitad fuerte pasa a la columna verde y la débil a la roja; una balanza queda nivelada. Recuadro `params_view`: pesos inversos a la volatilidad de 60 días · MA200 por activo · rezago 1 día · 3 bps.

**[1:55 — La promesa de lo neutral]** (pantalla: dos escenarios, mercado que sube y mercado que cae)
La promesa es atractiva: ganar sin importar si el mercado sube o baja. Pero hay una condición escondida. La ganancia tiene que salir de acertar cuáles activos van mejor que otros, no de la dirección general. Si comparar los activos entre sí no aporta nada, no queda nada que cobrar.
> BOCETO: dos escenarios con un mercado que sube y otro que cae, y la balanza nivelada en ambos; sobre ella, un signo de interrogación ámbar: «¿de dónde sale la ganancia?».

**[2:30 — Resultado]** (pantalla: tabla con B1 y la referencia 1x)
B1 perdió −28.0% entre 2014 y 2024, con un Sharpe de −0.22. El Sharpe es la ganancia por unidad de riesgo; por debajo de cero, pierde. Estar invertido a 1x en la misma cesta dio +23.1%, con un Sharpe de 0.37. Y el dato importante: sin costos, B1 ya perdía −10.6%.
| Variante | Retorno 2014–2024 | Sharpe |
|---|---|---|
| B1 neutral en dólares, antes de costos | −10.6% | — |
| B1 neutral en dólares, con costos | −28.0% | −0.22 |
| Invertido a 1x (sin estrategia) | +23.1% | 0.37 |
> BOCETO: barras que crecen hacia abajo (rojas) para B1 y una barra verde para 1x; sello ✕ sobre B1; el −10.6% marcado «sin ventaja ni en bruto».

**[3:10 — Por qué no tiene ventaja]** (pantalla: dos tarjetas «comparar activos» y «costos»)
La ficha lo explica así: entre estos 15 activos, comparar fuertes contra débiles no aporta nada, ni siquiera en bruto. Y encima, como la cartera cambia todos los días, los costos terminan de hundirla: de −10.6% a −28.0%. El análisis lo resume: lo neutral entre activos está muerto.
> BOCETO: dos tarjetas lado a lado: «comparar activos entre sí: sin ventaja en bruto (−10.6%)» con una ✕ roja y «costos de rotación: −28.0%» con una pila de monedas que crece.

**[3:50 — Lo que no dice]** (pantalla: dos columnas)
Este resultado vale para esta regla, en esta cesta y en estos años. No prueba que ninguna estrategia largo/corto pueda funcionar en otro mercado. Y para B1 no apliqué el periodo fuera de muestra ni el Deflated Sharpe, que descuenta la suerte de haber probado varias ideas; no hizo falta para ver que falla la comparación simple con invertir a 1x.
> BOCETO: dos columnas: «sí: 15 activos, 2014–2024, MA200, 3 bps» y «no medido: otras reglas, otros mercados, fuera de muestra, Deflated Sharpe» (gris).

**[4:15 — Con tu capital]** (pantalla: tarjeta «Con tu capital»)
B1 no tiene curva de capital en la ficha, solo porcentajes. La tarjeta del sitio muestra la mejor variante, B3: con $10,000, +$2,249; con $100,000, +$22,490, contra +$2,310 y +$23,098 de invertir a 1x. B3 llega a exposición de hasta el doble, así que ganancias y pérdidas se amplifican.
> BOCETO: tarjeta idéntica a la del sitio con B3 y sin estrategia; nota ámbar: «B1 no tiene curva en la ficha. Simulación con exposición de hasta x2, no es una promesa».

**[4:35 — Conclusión]** (pantalla: la balanza del inicio)
Ser neutral no es ser rentable. Para ganar sin depender del mercado hay que tener una ventaja entre los activos, y aquí no la hay.
> BOCETO: la balanza nivelada del inicio con el «−10.6%» y el «−28.0%».

**[4:45 — Ficha del experimento #61 y cierre]** (pantalla: tarjeta con la ficha y la URL)
Ficha del experimento #61. Estado: murió. Cifra clave: B1 neutral en dólares, −28.0% en 2014–2024 y −10.6% antes de costos, contra +23.1% de invertir a 1x. Filtro que decidió: superar a invertir a 1x, con Sharpe de 0.37. Lección: lo neutral entre activos no tiene ventaja. Revísalo completo en atlas-lab-one.vercel.app/e/61. Contenido educativo, no es asesoría financiera. El trading no se promete: se prueba.
> BOCETO: tarjeta en pantalla con las 4 líneas de la ficha (estado rojo «murió») y la URL `atlas-lab-one.vercel.app/e/61` en grande; fundido a la frase de marca.

---

## SHORT (9:16, ≈ 44 s) — "Neutral y perdedora"
Título del Short: La estrategia neutral al mercado que perdió −10.6% antes de costos #Shorts

**[0-3 s]** "Neutral al mercado. Y perdió menos 10.6% antes de pagar un solo costo."
> BOCETO: B-roll vertical de pantallas con velas rojas, overlay 0.6; balanza nivelada y «−10.6%» en rojo; golpe de bajo y sacudida. Karaoke con «NEUTRAL» en rojo.

**[3-14 s]** "Compra los activos más fuertes y vende en corto los más débiles, por el mismo monto. Así, en teoría, da igual si el mercado sube o baja."
> BOCETO: mosaico de 15 casillas que se divide en verde y rojo; balanza nivelada; whoosh. Ken Burns hacia dentro.

**[14-26 s]** "La probé en 15 activos, de 2014 a 2024. Antes de costos: menos 10.6%. Con costos: menos 28.0%. Sharpe de −0.22."
> BOCETO: contador −10.6% → −28.0% en rojo; tick por cifra; flash blanco.

**[26-37 s]** "Invertir y esperar la misma cesta: más 23.1%, Sharpe de 0.37. Entre estos activos, comparar fuertes contra débiles no aporta nada."
> BOCETO: barra roja de B1 contra barra verde de 1x; sello ✕ sobre B1.

**[37-44 s]** "Lo neutral entre activos está muerto. Video completo en el canal y experimento 61 completo en el enlace."
> BOCETO: vuelve la balanza con «−10.6%» (loop); rótulo «Experimento #61 completo en el enlace»; texto pequeño «No es asesoría financiera · El trading no se promete: se prueba».

---

## Descripción (YouTube)
https://atlas-lab-one.vercel.app/e/61?utm_source=youtube&utm_medium=video&utm_campaign=exp061-t2
Ficha del experimento #61: murió · B1 neutral en dólares: −28.0% en 2014–2024 (−10.6% antes de costos, Sharpe −0.22) · invertir a 1x: +23.1%, Sharpe 0.37.
Qué es una estrategia largo/corto neutral en dólares y por qué, en una cesta de 15 activos, comparar los más fuertes con los más débiles no deja ventaja ni en bruto, y los costos terminan de hundirla.
Contenido educativo. No es asesoría financiera ni recomendación de inversión.
Descripción del Short (primera línea): https://atlas-lab-one.vercel.app/e/61?utm_source=youtube&utm_medium=short&utm_campaign=exp061-t2

Capítulos: 0:00 Gancho · 0:15 Este experimento · 0:35 Qué es vender en corto · 1:10 Cómo se arma B1 · 1:55 La promesa de lo neutral · 2:30 Resultado · 3:10 Por qué no tiene ventaja · 3:50 Lo que no dice · 4:15 Con tu capital · 4:35 Conclusión · 4:45 Ficha del experimento #61 y cierre

Etiquetas: estrategia neutral, largo corto, venta en corto, neutral en dólares, cambio de régimen, media móvil 200, backtest, Sharpe ratio, trading con datos, ATLAS Lab, estrategias de trading, comprar y mantener

## Rúbrica (autoevaluación, 1–5)
| Pieza | hook_0_3s | ritmo | promesa_cumplida | potencial_loop | claridad_no_traders | honestidad_atlas | audio | cta | Promedio |
|---|---|---|---|---|---|---|---|---|---|
| Largo | 4 | 4 | 5 | 4 | 5 | 5 | 4 | 4 | 4.38 |
| Short | 5 | 4 | 5 | 5 | 4 | 5 | 4 | 4 | 4.50 |

Hook ≥ 4 ✓ · honestidad 5 ✓. Punto débil: B1 no tiene curva en la ficha; el video lo dice en el bloque de capital y recurre a la tarjeta de B3 solo como referencia.

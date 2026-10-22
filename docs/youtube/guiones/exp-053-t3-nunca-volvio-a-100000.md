# Experimento #53 — Ruptura de volatilidad sin dirección · Tema 3: ni un solo día por encima de $100,000

Estado del guion: **BORRADOR — pendiente de aprobación**
Tema 3 de 3 del experimento #53. Qué aporta frente a los otros temas: el tema 1 cuenta la idea y el resultado; el tema 2 explica la diversificación y el Sharpe; este sigue la cuenta año por año (con $100,000) y destaca lo que la curva muestra: 258 días planos y, desde que abre posiciones, ningún día por encima del capital inicial.
Estado del experimento: **murió** (No sirvió) · Serie: D/E (propuesta: mini-serie «La volatilidad sí se predice, la dirección no», #51 → #56; no figura en `plan-series.md`) · Relacionado: #51, #52, #54, #55, #56
Datos usados: `experiments.json` (v=53: verdict, analysis, notes, metrics, kpis, params_view, capital.note, period), `exp_details.json` (v53: algo, code.snippet, filters), `series/extra-v53.json` (curva 0 = estrategia con gate de volatilidad, 1,491 puntos de 2020-03-19 a 2025-01-01; curva 1 = comprar y esperar 7 activos; valores de fin de año, días planos y conteos derivados de las curvas) y la tabla «Con tu capital» (`docs/youtube/*-capital.md`) (fila #53).

## Títulos (3 opciones)
1. Ni un solo día por encima de $100,000 en 1,491 días
2. Ruptura de volatilidad año por año: de $93,908 a $85,857
3. 258 días planos y luego solo bajó: de $100,000 a $85,832

## Miniatura (1280×720)
Fondo `#09090b`. Una línea blanca horizontal en $100,000 (258 días planos) y después una curva roja `#e11d2a` que cae y nunca vuelve a cruzar la línea; una flecha "NUNCA" apuntando al cruce. Texto enorme: "NUNCA ARRIBA" (2 palabras). Texto pequeño: "$100,000". Logo ATLAS esquina superior derecha. (No repite el título 1.)

---

## VIDEO LARGO (16:9, ≈ 4 min)

**[0:00 — Gancho]** (pantalla: una línea de $100,000 y una curva roja siempre por debajo)
Esta cuenta simulada empezó con $100,000 y operó la ruptura del canal de 20 días cuando un modelo anunciaba volatilidad alta. En 1,491 días de curva, estuvo exactamente en $100,000 durante 258 y por debajo durante los otros 1,233. Ni un solo día por encima.
> BOCETO: curva real de `series/extra-v53.json` (curva 0) sobre una línea blanca de $100,000; contador «258 planos · 1,233 por debajo · 0 por encima» con tick; sacudida de pantalla en el «0». Subtítulo karaoke con "NI UN SOLO DÍA" en rojo.

**[0:20 — De qué experimento hablamos]** (pantalla: rótulo con el número y el nombre)
Este es el experimento #53 de ATLAS Lab: Ruptura de volatilidad sin dirección. Todos los resultados están en la página del experimento.
> BOCETO: rótulo «EXPERIMENTO #53 · Ruptura de volatilidad sin dirección» con whoosh.

**[0:30 — La estrategia en 30 segundos]** (pantalla: canal de 20 días y tercil de volatilidad)
Un modelo de machine learning pronostica la volatilidad, es decir, cuánto se va a mover el precio. Cuando el pronóstico está en el tercio más alto de su historia, opero la ruptura del canal de 20 días: compro si cierra sobre el máximo y vendo en corto si cierra bajo el mínimo. Siete activos: S&P 500, Nasdaq 100, DAX, FTSE 100, WTI, Brent y oro. Costo de 2 puntos básicos por cambio de posición.
> BOCETO: canal de 20 días con flechas de ruptura; barra de pronóstico con el tercil superior sombreado; `params_view` (canal 20 d · tercil superior · 2 bps).

**[1:05 — Fase 1: 258 días planos]** (pantalla: tramo plano de la curva)
La curva arranca el 19 de marzo de 2020 y no se mueve de $100,000 hasta el 17 de enero de 2021. La ficha lo explica: el umbral del tercio más alto necesita 252 días de pronósticos, así que la estrategia no abre posiciones hasta enero de 2021, y hasta entonces queda plana. Mientras tanto, comprar y esperar sí corre: termina 2020 en $151,043 de cada $100,000.
> BOCETO: curva 0 plana en $100,000 resaltada en gris; curva 1 (comprar y esperar) subiendo por encima, con el marcador $151,043 al final de 2020; etiqueta «umbral: 252 días de pronósticos».

**[1:35 — Fase 2: desde enero de 2021, solo hacia abajo]** (pantalla: curva con fines de año)
El 18 de enero de 2021 se mueve por primera vez. Al terminar 2021: $93,908. Al terminar 2022: $87,995. Al terminar 2023: $87,514. Al terminar 2024: $85,857. Y el 1 de enero de 2025, $85,832. La cuenta cambió en 541 de los 1,491 días; el resto, plana. Y en ninguno de esos días volvió a $100,000.
> BOCETO: curva 0 con cuatro marcadores de fin de año ($93,908 · $87,995 · $87,514 · $85,857) y el final $85,832; cada uno entra con tick; la línea de $100,000 permanece arriba, sin cruzarse.
| Fin de año | Estrategia | Comprar y esperar |
|---|---|---|
| 2020 | $100,000 | $151,043 |
| 2021 | $93,908 | $187,663 |
| 2022 | $87,995 | $169,141 |
| 2023 | $87,514 | $188,558 |
| 2024 | $85,857 | $212,659 |

**[2:00 — El contraste]** (pantalla: dos curvas divergiendo)
Al otro lado, comprar y esperar los siete activos terminó 2024 en $212,659, y el 1 de enero de 2025 en $212,904. La estrategia intentó aprovechar los movimientos grandes con rupturas y, en conjunto, no lo logró. El Sharpe, la ganancia por unidad de riesgo, promedio por activo, es de −0.44 contra 0.65 de comprar y esperar.
> BOCETO: curvas 0 y 1 divergiendo; cifras finales $85,832 y $212,904; barras de Sharpe −0.44 y 0.65.

**[2:30 — Con tu capital]** (pantalla: tarjeta "Con tu capital")
Con $10,000, la estrategia termina en −$1,417. Con $100,000, en −$14,168. Comprar y esperar los siete activos, en las mismas fechas, +$11,290 y +$112,904. La comparación en dólares incluye el tramo plano de la estrategia. Es lo que pasó en la simulación, no una promesa.
> BOCETO: tarjeta de capital con la fila roja y la gris; nota «La estrategia no opera hasta ene-2021. Simulación, no es una promesa».

**[2:50 — Lo que dice y lo que no dice una curva así]** (pantalla: dos columnas)
Lo que dice: desde que abrió posiciones, esta regla no recuperó su capital. Lo que no dice: por qué. La ficha lo resume con una frase, saber que viene un movimiento no basta, hay que acertar la dirección; este experimento no desglosa cuánto perdió en compras y cuánto en ventas en corto. Y tampoco prueba opciones, que serían otro instrumento con otros costos.
> BOCETO: columna “Sí dice” (258 planos · 0 días por encima · −$14,168) y columna “No dice” (compras vs. ventas en corto · opciones) en gris con ✕.

**[3:20 — Tres cosas que mirar en una curva]** (pantalla: tres tarjetas)
Tres cosas que mirar en cualquier curva. Una: cuántos días estuvo realmente en juego; aquí, 541 de 1,491. Dos: si en algún momento recuperó su capital inicial; aquí, nunca. Tres: qué hacía el mercado mientras tanto; aquí, comprar y esperar terminó en $212,904.
> BOCETO: tres tarjetas con iconos (calendario, línea de capital inicial, comparación) y las cifras.

**[3:40 — Ficha del experimento #53]** (pantalla: tarjeta con la URL)
Ficha del experimento 53. Estado: murió, no sirvió. Cifra clave: Sharpe de −0.44 contra 0.65 de comprar y esperar, y una cuenta que termina en $85,832 de cada $100,000, sin un solo día por encima del capital inicial. Filtro que decidió: batir a comprar y esperar, que no se cumple. Lección: saber que viene un movimiento no basta. Revísalo completo en atlas-lab-one.vercel.app/e/53.
> BOCETO: tarjeta «FICHA · EXPERIMENTO #53» con Estado · Cifra clave · Filtro que decidió · Lección, y la URL `atlas-lab-one.vercel.app/e/53` en grande.

**[4:05 — Cierre]**
Contenido educativo, no es asesoría financiera. El trading no se promete: se prueba.
> BOCETO: fundido a la frase de marca en blanco sobre negro; logo ATLAS.

---

## SHORT (9:16, ≈ 42 s) — "Nunca arriba"
Título del Short: Ni un día por encima de $100,000 #Shorts

**[0-3 s]** "En 1,491 días, esta cuenta no estuvo ni un solo día por encima de cien mil."
> BOCETO: B-roll vertical de pantallas con overlay 0.6; línea blanca de $100,000 y curva roja por debajo; texto gigante «0 DÍAS ARRIBA»; golpe de bajo y sacudida.

**[3-14 s]** "Un modelo anuncia volatilidad alta y opero la ruptura del canal de 20 días: compro si rompe el máximo, vendo si rompe el mínimo. Siete activos."
> BOCETO: canal de 20 días con flechas; chips de activos. Ken Burns hacia dentro.

**[14-27 s]** "258 días planos, hasta enero de 2021. Fin de 2021: $93,908. 2022: $87,995. 2023: $87,514. 2024: $85,857."
> BOCETO: la curva plana y luego cuatro marcadores que entran con tick; flash al cambio de escena.

**[27-36 s]** "Comprar y esperar los mismos siete activos: $212,904. Sharpe de menos 0.44 contra 0.65."
> BOCETO: curva gris por encima; barras de Sharpe −0.44 y 0.65.

**[36-42 s]** "Saber que viene un movimiento no basta. Experimento 53 completo en el enlace; el video completo está en el canal. No es asesoría financiera."
> BOCETO: vuelve la línea de $100,000 con la curva por debajo (loop con el primer cuadro); abajo «Experimento #53 completo en el enlace»; texto pequeño «El trading no se promete: se prueba.»

---

## Descripción (YouTube) — video largo
https://atlas-lab-one.vercel.app/e/53?utm_source=youtube&utm_medium=video&utm_campaign=exp053-t3
Ficha del experimento #53 (Ruptura de volatilidad sin dirección): murió (No sirvió) · Sharpe −0.44 contra 0.65 de comprar y esperar · con $100,000, −$14,168 contra +$112,904 · la curva queda plana 258 días y nunca vuelve a $100,000.
La cuenta año por año (2021: $93,908; 2022: $87,995; 2023: $87,514; 2024: $85,857) y lo que una curva así dice y no dice.
Contenido educativo. No es asesoría financiera ni recomendación de inversión.

## Descripción (YouTube) — Short
https://atlas-lab-one.vercel.app/e/53?utm_source=youtube&utm_medium=short&utm_campaign=exp053-t3
Experimento #53 (Ruptura de volatilidad sin dirección): murió · 258 días planos y ningún día por encima de $100,000 · termina en $85,832 · Sharpe −0.44 contra 0.65. Video completo en el canal. No es asesoría financiera.

## Capítulos
0:00 Gancho · 0:20 De qué experimento hablamos · 0:30 La estrategia en 30 segundos · 1:05 Fase 1: 258 días planos · 1:35 Fase 2: desde enero de 2021, solo hacia abajo · 2:00 El contraste · 2:30 Con tu capital · 2:50 Lo que dice y lo que no dice una curva así · 3:20 Tres cosas que mirar en una curva · 3:40 Ficha del experimento #53 · 4:05 Cierre

## Etiquetas
curva de capital, ruptura de volatilidad, breakout, canal de 20 días, drawdown, machine learning, backtest, Sharpe ratio, estrategia de trading, trading con datos, ATLAS Lab

## Rúbrica (autoevaluación, escala 1-5)
| Criterio | Nota | Por qué |
|---|---|---|
| hook_0_3s | 5 | «Ni un solo día por encima» con el conteo 258 / 1,233 / 0 en pantalla, verificable en la curva |
| ritmo | 4 | Marcadores de fin de año cada 2–3 s; el bloque de la estrategia es el más estático |
| promesa_cumplida | 5 | Promete la cuenta año por año y entrega cifras de cierre de cada año |
| potencial_loop | 4 | El final vuelve a la línea de $100,000 con la curva debajo |
| claridad_no_traders | 4 | Explica tercil de volatilidad, canal de 20 días, Sharpe y curva de capital |
| honestidad_atlas | 5 | Declara los 258 días planos, que la comparación en dólares los incluye y lo que el experimento no desglosa |
| audio | 4 | Voz por clonar; un golpe de bajo |
| cta | 4 | Una petición (la ficha en la web) y remite al video completo |
Promedio: **4.38** (≥ 4.0). Hook del Short 5 (≥ 4) y honestidad 5: no descalificado.

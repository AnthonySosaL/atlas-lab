# Experimento #51 — Swing + clasificación + sentimiento (nueva prueba) · Tema 2: sin costos, el azar le ganó a la IA (0.36 contra 0.30)

Estado del guion: **BORRADOR — pendiente de aprobación**
Tema 2 de 4 del experimento #51. Qué aporta frente a los otros temas: el tema 1 cuenta la prueba completa (51.6% de acierto, modelo nulo, comprar y esperar); este se centra en el costo: qué le hacen 2 puntos básicos por cambio de posición al Sharpe, con y sin costos, del modelo real y del nulo.
Estado del experimento: **murió** (No sirvió) · Serie: D ("Machine learning en trading: lo que pasó"); abre la mini-serie propuesta «La volatilidad sí se predice, la dirección no» (#51 → #56) · Relacionado: #52, #53, #54, #55, #56
Datos usados: `experiments.json` (v=51: verdict, analysis, notes, metrics, kpis, params_view, capital.note), `exp_details.json` (v51: algo, code.snippet, filters), `series/extra-v51.json` (curva 0 = ML swing 5d, curva 1 = comprar y esperar 15 activos) y la tabla «Con tu capital» (`docs/youtube/*-capital.md`) (fila #51).

## Títulos (3 opciones)
1. Sin costos, el azar rindió 0.36 y la IA 0.30
2. 2 puntos básicos le quitaron la mitad a la IA de trading
3. El costo escondido del machine learning en trading

## Miniatura (1280×720)
Fondo `#09090b`. Una moneda gigante a medio comer por una boca de costos (símbolo de "$" con mordida). Texto enorme rojo `#e11d2a`: "LA MITAD". Texto pequeño blanco: "2 bps". Logo ATLAS esquina superior derecha. (No repite el título 1.)

---

## VIDEO LARGO (16:9, ≈ 4.5 min)

**[0:00 — Gancho]** (pantalla: cuatro barras de Sharpe, sin costos y con costos)
Sin costos, un modelo con respuestas barajadas al azar rindió más que la IA real: Sharpe de 0.36 contra 0.30. Con 2 puntos básicos por cambio de posición, la real baja a 0.15 y el azar a 0.14. Los costos le quitaron la mitad.
> BOCETO: cuatro barras: "azar sin costos 0.36 · IA sin costos 0.30" (gris) y "azar con costos 0.14 · IA con costos 0.15" (rojo) animadas con tick; sacudida de pantalla cuando las dos de la derecha encogen. Subtítulo karaoke con "LA MITAD" en rojo.

**[0:20 — De qué experimento hablamos]** (pantalla: rótulo con el número y el nombre)
Este es el experimento #51 de ATLAS Lab: Swing + clasificación + sentimiento (nueva prueba). Todos los resultados están en la página del experimento.
> BOCETO: rótulo "EXPERIMENTO #51 · Swing + clasificación + sentimiento (nueva prueba)" con whoosh.

**[0:30 — La prueba en 30 segundos]** (pantalla: tubería de variables al modelo)
Un clasificador de machine learning, HistGradientBoosting, mira 19 variables técnicas, como RSI, MACD, bandas de Bollinger y volumen, y responde si el retorno de los próximos 5 días será positivo. Si la probabilidad pasa de 0.55, compra; si no, se queda fuera. Son 15 activos. Se prueba con walk-forward, entrenando solo con el pasado en bloques de 126 días con 5 días de purga. La IA acierta la dirección el 51.6% de las veces, casi una moneda al aire.
> BOCETO: tubería (19 variables → modelo → «probabilidad > 0.55 = compra»); `params_view` (HistGradientBoosting · 5 d · 19 variables · 0.55 · 126 d con purga de 5 d · 2 bps); contador 51.6%.

**[1:10 — Qué es un punto básico y qué es un costo por cambio de posición]** (pantalla: moneda que se parte)
Un punto básico es una centésima de por ciento. Aquí, cada vez que la posición cambia, de comprar a estar fuera o al revés, se descuentan 2 puntos básicos, es decir, 0.02%. Es poco por operación. Pero un modelo que cambia de idea seguido paga ese costo muchas veces.
> BOCETO: regla "1 punto básico = 0.01%"; cada cambio de posición en una línea de tiempo (compra → fuera → compra) resta una moneda pequeña de un montón.

**[1:30 — Bruto contra neto]** (pantalla: tabla animada)
Esta es la tabla del experimento. Sharpe, la ganancia por unidad de riesgo, promedio de los 15 activos. Sin costos: la IA, 0.30; el modelo nulo, 0.36. Con costos de 2 puntos básicos: la IA, 0.15; el nulo, 0.14. Y comprar y esperar, 0.37. El modelo nulo usa las mismas variables y las mismas reglas, pero con las etiquetas barajadas: no puede haber aprendido nada.
> BOCETO: tabla de tres filas × dos columnas (bruto / neto) que se rellena con tick; la fila de comprar y esperar (0.37) en verde.
| Modelo | Sin costos | Con costos (2 bps) |
|---|---|---|
| IA real | 0.30 | 0.15 |
| Modelo nulo (etiquetas barajadas) | 0.36 | 0.14 |
| Comprar y esperar | — | 0.37 |

**[2:00 — Qué dice cada columna]** (pantalla: dos flechas)
La columna sin costos dice algo incómodo: antes de pagar nada, el azar ya iba por delante de la IA. Si las etiquetas reales hubieran traído información útil, la IA real habría ganado al nulo. La columna con costos dice otra cosa: ambos quedan casi empatados y los dos por debajo de comprar y esperar. Para tener sentido, una estrategia activa tiene que superar 0.37 después de costos. Aquí no llega.
> BOCETO: dos flechas, "sin costos: nulo > IA (0.36 > 0.30)" y "con costos: empate (0.14 ≈ 0.15) y ambos < 0.37"; línea de meta en 0.37.

**[2:35 — Con tu capital]** (pantalla: tarjeta "Con tu capital")
La curva es la cartera de los 15 activos entre marzo de 2020 y principios de 2025. Con $100,000, la IA gana $21,666. Comprar y esperar los 15 activos, $55,171. En esa cartera, el Sharpe de la IA es de 0.65 y el de comprar y esperar, de 0.87. Ganó dinero, sí. Ganó menos que no hacer nada.
> BOCETO: curva 0 (blanca) y curva 1 (gris) de `series/extra-v51.json` desde 2020-03-18; tarjeta de capital con +$21,666 y +$55,171; aviso "Simulación, no es una promesa".

**[3:00 — Lo que la ficha no dice]** (pantalla: aviso ámbar)
Tres cosas que este experimento no publica. Cuántos cambios de posición hizo cada modelo, así que no puedo decir por qué el nulo pierde más con los costos. El resultado del filtro híbrido, que combina la señal con RSI bajo 35 y volumen sobre su media: no tiene una cifra aparte. Y el Deflated Sharpe, que descuenta la suerte de haber probado varias ideas, no se aplicó.
> BOCETO: tres avisos ámbar con tick: "cambios de posición: no publicado", "filtro híbrido: sin cifra aparte", "Deflated Sharpe: no aplicado".

**[3:30 — Tres cifras para pedir a quien te venda un modelo]** (pantalla: tres tarjetas)
Si te venden un modelo de trading, pide tres cifras. Una: el resultado con costos y sin costos. Aquí, de 0.30 a 0.15. Dos: el resultado de un modelo nulo con las mismas reglas. Aquí, 0.36 y 0.14. Tres: el resultado de comprar y esperar. Aquí, 0.37. Con esas tres cifras puedes juzgar casi todo lo demás.
> BOCETO: tres tarjetas con iconos (monedas, balanza, barra) y las cifras de la tabla.

**[3:55 — Ficha del experimento #51]** (pantalla: tarjeta con la URL)
Ficha del experimento 51. Estado: murió, no sirvió. Cifra clave: acierto de 51.6% y Sharpe de 0.15 con costos, contra 0.14 del modelo nulo y 0.37 de comprar y esperar; sin costos, el azar daría 0.36 y la IA, 0.30. Filtro que decidió: batir a comprar y esperar, que no se cumple. Lección: sin costos y sin modelo nulo, no se puede juzgar un modelo. Revísalo completo en atlas-lab-one.vercel.app/e/51.
> BOCETO: tarjeta "FICHA · EXPERIMENTO #51" con Estado · Cifra clave · Filtro que decidió · Lección, y la URL `atlas-lab-one.vercel.app/e/51` en grande.

**[4:30 — Cierre]**
Contenido educativo, no es asesoría financiera. El trading no se promete: se prueba.
> BOCETO: fundido a la frase de marca en blanco sobre negro; logo ATLAS.

---

## SHORT (9:16, ≈ 43 s) — "Antes de pagar nada"
Título del Short: Sin costos, el azar le ganó a la IA #Shorts

**[0-3 s]** "Antes de pagar costos, el azar le ganó a la IA. Sharpe de 0.36 contra 0.30."
> BOCETO: B-roll vertical de código/gráficos con overlay 0.6; dos barras "0.36" y "0.30"; golpe de bajo y sacudida.

**[3-14 s]** "Una IA con RSI, MACD y Bollinger predice si 15 activos suben en cinco días. Acierta el 51.6%. Otra, con las respuestas barajadas, no sabe nada."
> BOCETO: moneda girando sobre velas; contador 51.6%; segunda IA con candado "etiquetas barajadas". Ken Burns hacia dentro.

**[14-27 s]** "Con 2 puntos básicos por cambio de posición, la IA baja a 0.15 y el azar a 0.14. Comprar y esperar, sin hacer nada: 0.37."
> BOCETO: las barras de la derecha encogen con tick; la barra de 0.37 en verde las supera; flash al cambio de escena.

**[27-36 s]** "Con cien mil dólares: la IA ganó $21,666. Comprar y esperar, $55,171."
> BOCETO: tarjeta de capital con dos barras; curvas reales de `series/extra-v51.json` por detrás a baja opacidad.

**[36-43 s]** "Los costos le quitaron la mitad. Experimento 51 completo en el enlace; el video completo está en el canal. No es asesoría financiera."
> BOCETO: vuelven las dos barras "0.36" y "0.30" (loop con el primer cuadro); abajo "Experimento #51 completo en el enlace"; texto pequeño "El trading no se promete: se prueba."

---

## Descripción (YouTube) — video largo
https://atlas-lab-one.vercel.app/e/51?utm_source=youtube&utm_medium=video&utm_campaign=exp051-t2
Ficha del experimento #51 (Swing + clasificación + sentimiento, nueva prueba): murió (No sirvió) · acierto 51.6% · Sharpe con costos 0.15 (IA), 0.14 (modelo nulo) y 0.37 (comprar y esperar); sin costos, 0.30 (IA) y 0.36 (nulo) · con $100,000, +$21,666 contra +$55,171.
Qué hacen 2 puntos básicos por cambio de posición a un modelo de machine learning, con y sin costos, comparado con un modelo nulo de etiquetas barajadas.
Contenido educativo. No es asesoría financiera ni recomendación de inversión.

## Descripción (YouTube) — Short
https://atlas-lab-one.vercel.app/e/51?utm_source=youtube&utm_medium=short&utm_campaign=exp051-t2
Experimento #51 (Swing + clasificación + sentimiento): murió · sin costos, azar 0.36 y IA 0.30; con costos, 0.14 y 0.15; comprar y esperar, 0.37. Video completo en el canal. No es asesoría financiera.

## Capítulos
0:00 Gancho · 0:20 De qué experimento hablamos · 0:30 La prueba en 30 segundos · 1:10 Qué es un punto básico y qué es un costo por cambio de posición · 1:30 Bruto contra neto · 2:00 Qué dice cada columna · 2:35 Con tu capital · 3:00 Lo que la ficha no dice · 3:30 Tres cifras para pedir a quien te venda un modelo · 3:55 Ficha del experimento #51 · 4:30 Cierre

## Etiquetas
costos de trading, machine learning, inteligencia artificial, modelo nulo, swing trading, Sharpe ratio, puntos básicos, backtest, walk-forward, trading con datos, ATLAS Lab

## Rúbrica (autoevaluación, escala 1-5)
| Criterio | Nota | Por qué |
|---|---|---|
| hook_0_3s | 4 | Contradicción «el azar le ganó a la IA» con 0.36 y 0.30 en pantalla |
| ritmo | 4 | Tabla y barras cambian cada 2–3 s; el bloque de la prueba es el más denso |
| promesa_cumplida | 5 | Promete mostrar qué hacen los costos y lo muestra con la tabla bruto/neto |
| potencial_loop | 4 | El cierre repite «la mitad» y las dos barras del primer cuadro |
| claridad_no_traders | 4 | Define punto básico, Sharpe, modelo nulo y walk-forward |
| honestidad_atlas | 5 | Declara lo que no se publica: cambios de posición, filtro híbrido y Deflated Sharpe |
| audio | 4 | Voz por clonar; un golpe de bajo |
| cta | 4 | Una petición (la ficha en la web) y remite al video completo |
Promedio: **4.25** (≥ 4.0). Hook del Short 4 (≥ 4) y honestidad 5: no descalificado.

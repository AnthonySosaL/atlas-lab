# Experimento #51 — Swing a 5 días con machine learning (clasificación + filtro híbrido)

Estado del guion: **BORRADOR — pendiente de aprobación**
Estado del experimento: **murió** (No sirvió) · Serie: D ("Machine learning en trading: lo que pasó"); abre la mini-serie propuesta «La volatilidad sí se predice, la dirección no» (#51 → #55) · Relacionado: #1–#3 (ML anterior), #52–#56
Datos usados: `experiments.json` (v=51: verdict, analysis, notes, metrics, kpis, params_view, capital.note), `exp_details.json` (algo, code.snippet, filters), `series/extra-v51.json` (curva 0 = ML swing 5d, curva 1 = comprar y esperar 15 activos) y la tabla «Con tu capital» (`docs/youtube/*-capital.md`) (fila #51).

## Títulos (3 opciones)
1. IA con respuestas al azar: Sharpe 0.14. La real: 0.15
2. Machine learning con RSI, MACD y Bollinger: acierta 51.6%
3. Swing con IA: Sharpe 0.15 vs 0.37 sin hacer nada

## Miniatura (1280×720)
Fondo `#09090b`. Una moneda en el aire sobre velas japonesas (verde y roja). Texto enorme rojo `#e11d2a`: "51.6%". Texto pequeño blanco: "MONEDA AL AIRE". Logo ATLAS esquina superior derecha. (No repite el título 1.)

---

## VIDEO LARGO (16:9, ≈ 7½ min)

**[0:00 — Gancho]** (pantalla: dos barras de Sharpe casi iguales, 0.15 y 0.14, y "51.6%")
Entrené una inteligencia artificial para hacer swing trading con RSI, MACD, bandas de Bollinger y volumen. Acertó la dirección el 51.6% de las veces: casi una moneda al aire. Pero lo raro no es eso. Lo raro es que entrené otra con las respuestas barajadas al azar, sin ninguna información real, y rindió casi igual: Sharpe de 0.14 contra 0.15.
> BOCETO: barras animadas de Sharpe "IA real 0.15" y "IA al azar 0.14" que casi se igualan; contador "51.6%" con moneda girando. Sacudida de pantalla solo cuando aparecen las dos barras.

**[0:30 — Presentación]** (pantalla: rótulo «Experimento #51 · Swing + clasificación + sentimiento (nueva prueba)»)
Este es el experimento #51 de ATLAS Lab: Swing + clasificación + sentimiento (nueva prueba). Todos los resultados están en la página del experimento.
> BOCETO: rótulo «EXPERIMENTO #51 · Swing + clasificación + sentimiento (nueva prueba)» que entra con whoosh sobre el último cuadro del gancho a baja opacidad.

**[0:40 — La idea]** (pantalla: esquema de variables → modelo → compra o no)
Swing trading es mantener una posición varios días; aquí, 5. Un clasificador de machine learning, HistGradientBoosting, mira 19 variables técnicas —retornos, volatilidad, ATR, RSI, MACD, bandas de Bollinger, distancia a medias móviles y volumen— y responde una pregunta: ¿el retorno de los próximos 5 días será positivo? Si la probabilidad pasa de 0.55, compro. Son 15 activos. También probé un filtro híbrido: señal, y RSI bajo 35, y volumen sobre su media.
> BOCETO: tubería animada (19 variables → modelo → "probabilidad > 0.55 = compra"); lista de indicadores con iconos; recuadro `params_view` (HistGradientBoosting · 5 d · 19 variables · umbral 0.55).

**[1:15 — El modelo nulo, explicado con un examen]** (pantalla: examen con respuestas barajadas)
Imagina que le das a un estudiante un examen en el que las respuestas correctas están barajadas al azar: la pregunta uno trae la respuesta de otra, la dos la de otra. Ese estudiante no puede aprender nada real. Si aun así saca buena nota, esa nota no mide conocimiento: mide suerte o, en este caso, la inclinación del examen. El modelo nulo hace eso con la inteligencia artificial: mismas variables, mismas reglas, pero con las etiquetas, es decir, las respuestas de si el precio subió o bajó, mezcladas. Si el modelo real no le gana con claridad al nulo, lo que parecía predicción era otra cosa.
> BOCETO: ilustración rotulada (no es dato real): hoja de examen con respuestas que cambian de lugar (barajar) y, al lado, el modelo real con las respuestas en su sitio; dos engranajes idénticos, uno con candado "etiquetas barajadas".

**[2:05 — Cómo se probó]** (pantalla: bloques de entrenamiento y prueba avanzando; modelo nulo)
Se prueba con walk-forward: el modelo se entrena solo con el pasado, predice un bloque de 126 días, y avanza. Entre entrenamiento y prueba dejo 5 días de distancia, la purga, para que las etiquetas de 5 días no se mezclen. El costo es 2 puntos básicos por cambio de posición. Y el truco central: el modelo nulo. El mismo modelo, con las mismas variables, pero con las respuestas correctas barajadas. Si el modelo real no le gana al nulo, no aprendió nada que valga. La referencia es comprar y esperar.
> BOCETO: línea de tiempo con bloques de 126 días que avanzan (entrena en azul, prueba en blanco, purga de 5 d en gris); dos tarjetas "Modelo real" y "Modelo nulo (etiquetas barajadas)". Checklist de `filters`: walk-forward ✓ con purga, costos 2 bps.

**[2:45 — La vara para medir: 0.37]** (pantalla: barra de Sharpe 0.37 como línea de meta)
Un momento para fijar la vara de medir. El Sharpe divide la ganancia entre el riesgo asumido. Comprar y esperar, sin hacer nada, da 0.37 en promedio por activo. Esa es la vara: una estrategia activa tiene que superarla después de costos para tener sentido; si no, es más simple, más barato y más cómodo no operar. Con 2 puntos básicos por cambio de posición, el modelo queda en 0.15, claramente por debajo. Y el nulo, en 0.14, casi pegado al modelo real.
> BOCETO: línea horizontal de meta en 0.37 (verde) con tres barras debajo: modelo 0.15, nulo 0.14 (grises) y comprar y esperar 0.37 (verde). Tick por cada barra.

**[3:25 — Resultados]** (pantalla: tarjetas KPI + barras)
Acierto de dirección: 51.6%, cuando el azar sería 50%. Sharpe, la ganancia por unidad de riesgo, promedio de los 15 activos y neto de costos: el modelo, 0.15; comprar y esperar, 0.37; el modelo nulo, 0.14. Sin descontar costos, el nulo da 0.36 y el modelo real 0.30: el azar le ganó a la IA. Con costos, empatan, y ambos quedan por debajo de comprar y esperar, que da 0.37. Una precisión: la ficha no publica una cifra aparte para el filtro híbrido; los números de arriba son los del modelo.
> BOCETO: 4 barras de Sharpe (real 0.15, nulo 0.14, comprar y esperar 0.37) y luego versión sin costos (nulo 0.36, real 0.30); tick sonoro por barra. Las tarjetas `kpis` aparecen al lado.

**[4:10 — Qué significa]** (pantalla: palabra "beta")
Cuando un modelo con respuestas al azar rinde igual que el real, lo que estás viendo no es predicción. Es la subida del mercado, lo que se llama beta: lo que ganas solo por estar dentro de un mercado que sube. En la cartera equiponderada de los 15 activos, la estrategia da Sharpe de 0.65 y comprar y esperar, 0.87, en el mismo tramo.
> BOCETO: curvas reales de `series/extra-v51.json`: curva 0 (blanca) y curva 1 (gris) desde 2020-03-18; texto "BETA ≠ PREDICCIÓN". Ken Burns hacia fuera.

**[4:40 — Con tu capital]** (pantalla: tarjeta "Con tu capital")
Con $10,000, el modelo termina en +$2,167. Con $100,000, en +$21,666. Comprar y esperar los 15 activos en esas fechas, entre marzo de 2020 y principios de 2025: +$5,517 y +$55,171. Ganó dinero, sí. Ganó menos que no hacer nada.
> BOCETO: tarjeta de capital: filas "IA" (verde, menor) y "Sin estrategia" (gris, mayor); aviso al pie "Simulación, no es una promesa".

**[5:00 — El hallazgo lateral]** (pantalla: barras de R² por activo)
Algo útil salió de este experimento. La volatilidad, es decir, qué tanto se mueve el precio, sí se deja predecir en algunos activos. R², que mide qué parte de lo que varía explica el modelo, de 0.27 en el S&P 500 y de 0.40 en el petróleo WTI. Pero no en toda la cesta: el R² medio de los 15 activos es de 0.02, la mediana es −0.02 y solo 7 de 15 son positivos. En Brent, −0.38; en oro, −0.20; en plata, −0.22. Esto importa porque la volatilidad es la materia prima del control de riesgo, el tema de los siguientes experimentos. Este hilo sigue en los experimentos 52 a 55.
> BOCETO: barras de R² (SP500 0.27, WTI 0.40 en verde; Brent −0.38, oro −0.20, plata −0.22 en rojo; media 0.02 en gris). Flecha "→ #52 a #55".

**[5:50 — Tres preguntas para cualquier IA que te vendan]** (pantalla: tres tarjetas con preguntas)
Si te venden una inteligencia artificial para operar, hazle tres preguntas. Una: ¿la comparó con un modelo nulo? Aquí el nulo rindió 0.14 contra 0.15. Dos: ¿la comparó con comprar y esperar? Aquí, 0.37 contra 0.15. Tres: ¿descontó costos? Con 2 puntos básicos por cambio de posición, el modelo real pasó de 0.30 a 0.15. Si la respuesta a alguna es no, lo que te muestran puede ser beta con un nombre sofisticado. Y cuando veas un porcentaje de acierto, pregunta contra qué se compara.
> BOCETO: tres tarjetas con icono (balanza = nulo, barra = comprar y esperar, monedas = costos) y a su lado la cifra de la ficha (0.14 vs 0.15 · 0.37 vs 0.15 · 0.30 → 0.15).

**[6:30 — Ficha del experimento #51]** (pantalla: tarjeta con la URL)
Ficha del experimento #51. Estado: murió, no sirvió. Cifra clave: acierta la dirección el 51.6% de las veces, con Sharpe de 0.15 contra 0.14 del modelo nulo y 0.37 de comprar y esperar. Filtro que decidió: batir a comprar y esperar, que no se cumple; tampoco llega al 0.30 que se exige fuera de muestra. Lección: la supuesta predicción era solo beta del mercado. Revísalo completo en atlas-lab-one.vercel.app/e/51.
> BOCETO: tarjeta «FICHA · EXPERIMENTO #51» con Estado · Cifra clave · Filtro que decidió · Lección, y la URL `atlas-lab-one.vercel.app/e/51` en grande.

**[7:00 — Conclusión y cierre]** (pantalla: logo)
Acertar el 51.6% no es predecir: es casi lanzar una moneda. Y un modelo sin información real rindió casi igual. Todos los datos en atlas-lab-one.vercel.app/e/51. Si quieres que pruebe otro modelo de inteligencia artificial, dímelo en los comentarios. Contenido educativo, no es asesoría financiera. El trading no se promete: se prueba.
> BOCETO: las dos barras del inicio se quedan juntas; fundido a la frase de marca en blanco sobre negro.

---

## SHORT (9:16, ≈ 45 s) — "La IA al azar"
Título del Short: Una IA al azar rindió igual que la real #Shorts

**[0-3 s]** "Una IA al azar rindió igual que la real."
> BOCETO: B-roll vertical de código/gráficos con overlay 0.6; texto gigante "0.14 ≈ 0.15" en rojo; dos robots idénticos; golpe de bajo y sacudida. Subtítulos karaoke con "AL AZAR" en rojo.

**[3-14 s]** "Le pedí a una IA que predijera si cada activo subiría en 5 días, con RSI, MACD y Bollinger. Acertó el 51.6%: una moneda al aire."
> BOCETO: moneda girando sobre velas; el contador sube hasta 51.6% y se frena. Ken Burns hacia dentro.

**[14-23 s]** "Luego entrené otra con las respuestas barajadas, sin información real. Sharpe de la barajada: 0.14. Sharpe de la real: 0.15."
> BOCETO: dos barras que casi se igualan, 0.14 y 0.15, con tick; rótulo "SIN INFORMACIÓN REAL" sobre la primera. Whoosh y flash al entrar.

**[23-33 s]** "Y comprar y esperar, sin hacer nada: 0.37. Con cien mil dólares, la IA ganó $21,666. Sin hacer nada, $55,171."
> BOCETO: tercera barra gris de 0.37 que supera a las dos; tarjeta de capital con $21,666 vs $55,171; curvas reales de `series/extra-v51.json` por detrás a baja opacidad.

**[33-45 s]** "La predicción era solo el mercado subiendo. Una IA al azar rindió igual que la real. Experimento 51 completo en el enlace; el video completo está en el canal. No es asesoría financiera."
> BOCETO: vuelve el "0.14 ≈ 0.15" del primer cuadro (loop); texto pequeño "El trading no se promete: se prueba." Abajo, «Experimento #51 completo en el enlace».

---

## Descripción (YouTube) — video largo
https://atlas-lab-one.vercel.app/e/51?utm_source=youtube&utm_medium=video&utm_campaign=exp051-t1
Ficha del experimento #51: murió (No sirvió) · acierto de dirección 51.6% · Sharpe 0.15 (IA) frente a 0.14 (modelo nulo) y 0.37 (comprar y esperar).
Probé el enfoque más publicitado de machine learning para swing trading: un clasificador sobre RSI, MACD, Bollinger y volumen en 15 activos, evaluado con walk-forward y comparado con un modelo nulo de etiquetas barajadas. Acertó la dirección el 51.6%; Sharpe 0.15 (real) vs 0.14 (nulo) vs 0.37 (comprar y esperar). Hallazgo lateral: la volatilidad se predice en el S&P 500 y el WTI.
Contenido educativo. No es asesoría financiera ni recomendación de inversión.

Capítulos: 0:00 Gancho · 0:30 Presentación · 0:40 La idea · 1:15 El modelo nulo, explicado con un examen · 2:05 Cómo se probó · 2:45 La vara para medir: 0.37 · 3:25 Resultados · 4:10 Qué significa · 4:40 Con tu capital · 5:00 El hallazgo lateral · 5:50 Tres preguntas para cualquier IA que te vendan · 6:30 Ficha del experimento #51 · 7:00 Conclusión y cierre

Etiquetas: machine learning, inteligencia artificial, swing trading, RSI, MACD, bandas de Bollinger, modelo nulo, walk-forward, Sharpe ratio, backtest, trading con datos, ATLAS Lab

## Descripción (YouTube) — Short
https://atlas-lab-one.vercel.app/e/51?utm_source=youtube&utm_medium=short&utm_campaign=exp051-t1
Experimento #51 · Swing + clasificación + sentimiento (nueva prueba): murió · acierto 51.6% · Sharpe 0.15 de la IA frente a 0.14 del azar y 0.37 de comprar y esperar. Video completo en el canal. No es asesoría financiera.

## Rúbrica (autoevaluación, escala 1-5)
| Criterio | Nota | Por qué |
|---|---|---|
| hook_0_3s | 4 | Afirmación contraintuitiva; el 0.14 ≈ 0.15 está en pantalla, no en voz |
| ritmo | 4 | Barras, moneda y curvas cambian cada 2–3 s; el bloque de walk-forward es denso |
| promesa_cumplida | 5 | Promete la comparación real vs azar y las barras la muestran |
| potencial_loop | 5 | Cierra repitiendo el hook y empalma con "0.14 ≈ 0.15" |
| claridad_no_traders | 4 | Explica nulo, walk-forward, purga, beta, Sharpe y R² |
| honestidad_atlas | 5 | Muestra que la IA ganó dinero pero menos que no hacer nada; cifras con y sin costos |
| audio | 4 | Voz por clonar; golpe de bajo en el gancho |
| cta | 4 | Una petición y remite al video completo |
Promedio: **4.38** (≥ 4.0). Hook del Short 4 (≥ 4) y honestidad 5: no descalificado.

## Otros temas de este experimento
- `exp-051-swing-ml-5-dias.md` — Tema 1: IA con respuestas al azar: Sharpe 0.14. La real: 0.15
- `exp-051-t2-con-y-sin-costos.md` — Tema 2: sin costos, el azar le ganó a la IA (0.36 contra 0.30)
- `exp-051-t3-volatilidad-wti-brent.md` — Tema 3: la volatilidad del WTI sí se predice (0.40) y la del Brent no (−0.38)
- `exp-051-t4-volatilidad-si-direccion-no.md` — Tema 4: la volatilidad sí se predice, la dirección no (experimentos #51 a #56)

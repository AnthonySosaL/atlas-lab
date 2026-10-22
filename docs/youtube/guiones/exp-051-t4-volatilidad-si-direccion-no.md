# Experimento #51 — Swing + clasificación + sentimiento (nueva prueba) · Tema 4: la volatilidad sí se predice, la dirección no (experimentos #51 a #56)

Estado del guion: **BORRADOR — pendiente de aprobación**
Tema 4 de 4 del experimento #51. Tema de unión: cubre la mini-serie #51 → #56 y se nombra con el número menor. Qué aporta frente a los otros temas: los temas 1 a 3 miran el #51 por dentro; este junta seis experimentos en una sola respuesta: lo que se pudo predecir (cuánto se mueve el mercado) y lo que no (hacia dónde).
Estado del experimento: **murió** (No sirvió) para el #51; en la serie: #52 sirvió (control de riesgo), #53 y #56 murieron, #54 y #55 parcial · Serie: D ("Machine learning en trading: lo que pasó") y E ("Gestión de riesgo") · Relacionado: #52, #53, #54, #55, #56
Datos usados: `experiments.json` (v=51 a v=56: verdict, metrics, kpis, params_view, chart.bars, capital.note), `exp_details.json` (v51 a v56: algo, filters), `series/extra-v51.json`, `series/extra-v52.json` y `series/extra-v53.json` (solo para las cifras finales de capital) y la tabla «Con tu capital» (`docs/youtube/*-capital.md`) (filas #51, #52 y #53; los #54, #55 y #56 no tienen curva).
Aviso de datos: las seis pruebas usan cestas y periodos distintos (15, 7 y 10 activos, o solo el S&P 500); sus cifras se leen una a una, no se comparan entre sí.

## Títulos (3 opciones)
1. La volatilidad sí se predice; la dirección, no (6 pruebas)
2. 6 experimentos: ¿cuánto se mueve? Sí. ¿Hacia dónde? No
3. R² 0.40 en volatilidad, 51.6% en dirección: 6 pruebas

## Miniatura (1280×720)
Fondo `#09090b`. Dos pictogramas: a la izquierda, un termómetro verde `#22c55e` con "SÍ"; a la derecha, una brújula con una gran ✕ roja `#e11d2a` y "NO". Texto enorme blanco: "SÍ · NO". Texto pequeño: "VOLATILIDAD / DIRECCIÓN". Logo ATLAS esquina superior derecha. (No repite el título 1.)

---

## VIDEO LARGO (16:9, ≈ 5 min)

**[0:00 — Gancho]** (pantalla: dos medidores, uno lleno y otro vacío)
Seis experimentos, una conclusión. Hacia dónde va el mercado: acierto de 51.6% con una IA, 57% con el sentimiento. Cuánto se va a mover: R² de 0.40 en el WTI, 0.27 en el S&P 500, 0.175 con una línea de código.
> BOCETO: dos medidores: "HACIA DÓNDE" con 51.6% · 57% · −0.44 casi vacío (rojo) y "CUÁNTO" con 0.40 · 0.27 · 0.175 más lleno (verde); sacudida de pantalla al llenarse el segundo. Subtítulo karaoke con "CUÁNTO" y "HACIA DÓNDE" en rojo.

**[0:20 — De qué experimento hablamos]** (pantalla: rótulo con el número y el nombre)
Este es el experimento #51 de ATLAS Lab: Swing + clasificación + sentimiento (nueva prueba). Todos los resultados están en la página del experimento. Este video junta el 51 con los cinco que lo siguen, del 52 al 56.
> BOCETO: rótulo "EXPERIMENTO #51 · Swing + clasificación + sentimiento (nueva prueba)" y una cinta con seis casillas #51 a #56 que se encienden con whoosh.

**[0:40 — Dos preguntas distintas]** (pantalla: termómetro y brújula)
Hay dos preguntas distintas que se mezclan. Una: ¿cuánto se va a mover el precio? Eso es volatilidad. Otra: ¿hacia dónde? Eso es dirección. Es la diferencia entre saber que mañana habrá mucho viento y saber hacia dónde sopla. La primera sirve para decidir cuánto arriesgar; la segunda, para ganar dinero apostando. Y se miden con herramientas distintas.
> BOCETO: termómetro rotulado "cuánto" y brújula rotulada "hacia dónde"; chips "R²" (volatilidad) y "% de acierto / Sharpe" (dirección).

**[1:05 — Hacia dónde: tres pruebas, tres veces no]** (pantalla: tres tarjetas)
Primera prueba, el experimento 51: una IA con RSI, MACD y Bollinger en 15 activos acierta la dirección el 51.6% de las veces, y su Sharpe de 0.15 queda por debajo del 0.37 de comprar y esperar y casi igual al 0.14 de un modelo con las respuestas barajadas. Segunda, el 56: el sentimiento en 4 formas acierta entre 55% y 58%, media 57%, por debajo de la tasa base de 61.3% que da decir siempre «sube». Tercera, el 53: operar rupturas solo cuando se espera mucha volatilidad da un Sharpe de −0.44 contra 0.65 de comprar y esperar.
> BOCETO: tres tarjetas con las cifras reales de cada ficha: #51 (51.6% · 0.15 · 0.14 · 0.37), #56 (55–58% · 57% · 61.3%), #53 (−0.44 · 0.65); sello ✕ en cada una con tick.

**[1:50 — Cuánto se mueve: cuatro mediciones, cuatro señales]** (pantalla: cuatro tarjetas)
Ahora la otra pregunta. En el 51, el R² de volatilidad es de 0.40 en el WTI y 0.27 en el S&P 500, aunque la media de los 15 activos es de 0.02 y la volatilidad del Brent, el oro y la plata queda en negativo. En el 54, el rango diario de mañana en 10 activos: R² de 0.15 y hasta 0.27 en índices y energía; el volumen, −0.003. En el 55, una línea de código, un EWMA, llega a 0.175 contra 0.113 del machine learning. En el 56, el VIX sube el R² de volatilidad de 0.378 a 0.395.
> BOCETO: cuatro tarjetas con cifras reales: #51 (0.40 · 0.27 · media 0.02), #54 (0.15 · 0.27 · volumen −0.003), #55 (0.175 vs 0.113), #56 (0.378 → 0.395); barras verdes que crecen con tick; las negativas en rojo.

**[2:35 — Tabla resumen]** (pantalla: tabla animada)
Resumo. Hacia dónde: no, en tres pruebas. Cuánto: sí, en índices y energía; no en todos los activos, y con matices. Una advertencia: cada prueba usa su propia cesta y su propio periodo, así que las cifras se leen una a una, no se comparan entre sí.
> BOCETO: tabla que se rellena fila a fila.
| Pregunta | Experimento | Cifra clave |
|---|---|---|
| ¿Hacia dónde? | #51 IA con indicadores | acierto 51.6%, Sharpe 0.15 contra 0.37 |
| ¿Hacia dónde? | #56 sentimiento | 55–58% contra tasa base 61.3% |
| ¿Hacia dónde? | #53 ruptura con filtro de volatilidad | Sharpe −0.44 contra 0.65 |
| ¿Cuánto? | #51 volatilidad por activo | R² 0.40 (WTI), 0.27 (S&P 500), media 0.02 |
| ¿Cuánto? | #54 rango y volumen | rango 0.15 (hasta 0.27), volumen −0.003 |
| ¿Cuánto? | #55 EWMA contra ML | 0.175 contra 0.113 |
| ¿Cuánto? | #56 VIX | 0.395 contra 0.378 solo con precio |

**[2:55 — Dónde la volatilidad sí sirvió]** (pantalla: dos valles de drawdown)
¿Y para qué sirve saber cuánto se mueve? Para decidir cuánto arriesgar. En el experimento 52, el único de 91 que sirvió, la posición se ajusta según la volatilidad pronosticada: la caída máxima baja de −40.3% con apalancamiento fijo de 2 a −19.2%, con Sharpe de 0.79 contra 0.93. Es control de riesgo, no una fuente de ganancia. Y una desviación estándar simple de 20 días logra −16.1%, así que el machine learning no aporta más.
> BOCETO: valles de drawdown reales de `series/extra-v52.json` (−40.3% rojo, −19.2% verde); sello SIRVIÓ; tarjeta "20 días: −16.1% · 0.83".

**[3:30 — Con tu capital]** (pantalla: tarjeta con tres filas)
Con $100,000, las tres pruebas con curva de capital. El swing con IA, #51: +$21,666, contra +$55,171 de comprar y esperar. La volatilidad objetivo, #52: +$60,839, contra +$129,383. La ruptura con filtro de volatilidad, #53: −$14,168, contra +$112,904. Las pruebas 54, 55 y 56 no simulan una cuenta. Es lo que pasó en las simulaciones, no una promesa.
> BOCETO: tarjeta de capital con tres filas (estrategia / comprar y esperar) y cifras reales; las del #53 en rojo; aviso "Simulación, no es una promesa".

**[4:00 — Qué te llevas]** (pantalla: tres reglas)
Tres ideas. Una: la volatilidad es la materia prima del control de riesgo; en el 52 se usa para dimensionar la posición, no para adivinar dirección. Dos: para pronosticarla, prueba primero lo simple; aquí una línea le ganó a la IA. Tres: ante un pronóstico de dirección, compara siempre con la tasa base, con un modelo nulo y con comprar y esperar.
> BOCETO: tres tarjetas numeradas con whoosh y los iconos de cada experimento (#52, #55, #51/#56).

**[4:25 — Ficha del experimento #51]** (pantalla: tarjeta con la URL)
Ficha del experimento 51. Estado: murió, no sirvió. Cifra clave: acierto de dirección de 51.6% y Sharpe de 0.15 contra 0.37 de comprar y esperar; en volatilidad, R² de 0.40 en WTI y 0.27 en S&P 500. Filtro que decidió: batir a comprar y esperar, que no se cumple. Lección: se predice cuánto se mueve el mercado en algunos activos, no hacia dónde. Revísalo completo en atlas-lab-one.vercel.app/e/51; los experimentos 52 a 56 están en la misma web.
> BOCETO: tarjeta "FICHA · EXPERIMENTO #51" con Estado · Cifra clave · Filtro que decidió · Lección, la URL `atlas-lab-one.vercel.app/e/51` en grande y, debajo, la cinta #52 a #56.

**[5:00 — Cierre]**
Contenido educativo, no es asesoría financiera. El trading no se promete: se prueba.
> BOCETO: fundido a la frase de marca en blanco sobre negro; logo ATLAS.

---

## SHORT (9:16, ≈ 44 s) — "Cuánto sí, hacia dónde no"
Título del Short: Cuánto se mueve el mercado: sí. Hacia dónde: no #Shorts

**[0-3 s]** "Predecir cuánto se mueve el mercado: R² de 0.40. Hacia dónde: 51.6%."
> BOCETO: B-roll vertical de pantallas de mercado con overlay 0.6; dos medidores, uno lleno y otro casi vacío; golpe de bajo y sacudida.

**[3-14 s]** "Seis experimentos. Una IA con indicadores: 51.6%. El sentimiento: 57%, y decir siempre «sube» da 61.3%. Una ruptura de volatilidad: Sharpe de −0.44."
> BOCETO: tres tarjetas con ✕ y tick, 3 s cada una. Ken Burns hacia dentro.

**[14-27 s]** "Pero la volatilidad sí se deja predecir: R² de 0.40 en el WTI, 0.27 en el S&P 500. Una línea de código, 0.175, le ganó al machine learning, 0.113."
> BOCETO: barras verdes que crecen con tick; la barra de 0.175 supera a la de 0.113 con flash.

**[27-36 s]** "Y sirve para controlar el riesgo: la caída máxima bajó de −40.3% a −19.2%. Es el único de 91 experimentos que sirvió."
> BOCETO: valles de drawdown reales (−40.3% y −19.2%); sello SIRVIÓ.

**[36-44 s]** "Cuánto se mueve: a veces. Hacia dónde: no. Experimento 51 completo en el enlace; el video completo está en el canal. No es asesoría financiera."
> BOCETO: vuelven los dos medidores (loop con el primer cuadro); abajo "Experimento #51 completo en el enlace"; texto pequeño "El trading no se promete: se prueba."

---

## Descripción (YouTube) — video largo
https://atlas-lab-one.vercel.app/e/51?utm_source=youtube&utm_medium=video&utm_campaign=exp051-t4
Ficha del experimento #51 (Swing + clasificación + sentimiento, nueva prueba): murió (No sirvió) · acierto 51.6% y Sharpe 0.15 contra 0.37 de comprar y esperar · R² de volatilidad 0.40 (WTI) y 0.27 (S&P 500). Este video resume los experimentos 51 a 56.
Hacia dónde va el mercado (51.6%, 57% contra 61.3%, Sharpe −0.44) contra cuánto se mueve (R² 0.40, 0.175, 0.395): qué se pudo predecir y para qué sirvió.
Contenido educativo. No es asesoría financiera ni recomendación de inversión.

## Descripción (YouTube) — Short
https://atlas-lab-one.vercel.app/e/51?utm_source=youtube&utm_medium=short&utm_campaign=exp051-t4
Experimento #51 (Swing + clasificación + sentimiento): murió · dirección 51.6%, volatilidad R² 0.40 (WTI) · resumen de los experimentos 51 a 56. Video completo en el canal. No es asesoría financiera.

## Capítulos
0:00 Gancho · 0:20 De qué experimento hablamos · 0:40 Dos preguntas distintas · 1:05 Hacia dónde: tres pruebas, tres veces no · 1:50 Cuánto se mueve: cuatro mediciones, cuatro señales · 2:35 Tabla resumen · 2:55 Dónde la volatilidad sí sirvió · 3:30 Con tu capital · 4:00 Qué te llevas · 4:25 Ficha del experimento #51 · 5:00 Cierre

## Etiquetas
predicción de volatilidad, predecir el mercado, machine learning, EWMA, VIX, sentimiento del mercado, control de riesgo, tasa base, backtest, trading con datos, ATLAS Lab, resultados negativos

## Rúbrica (autoevaluación, escala 1-5)
| Criterio | Nota | Por qué |
|---|---|---|
| hook_0_3s | 5 | Contraste «cuánto 0.40 / hacia dónde 51.6%» con dos medidores desde el cuadro 1 |
| ritmo | 4 | Tarjetas y barras cambian cada 2–3 s; la sección de tres pruebas es la más densa |
| promesa_cumplida | 5 | Promete una conclusión de seis experimentos y la entrega con tabla y cifras de cada ficha |
| potencial_loop | 4 | El final repite «cuánto sí, hacia dónde no» y los dos medidores |
| claridad_no_traders | 4 | Separa volatilidad y dirección con la analogía del viento y define R² y tasa base |
| honestidad_atlas | 5 | Avisa de que las cestas y periodos difieren, que 54–56 no tienen curva y que el ML no aporta en el 52 |
| audio | 4 | Voz por clonar; un golpe de bajo |
| cta | 4 | Una petición (la ficha en la web) y remite al video completo |
Promedio: **4.38** (≥ 4.0). Hook del Short 5 (≥ 4) y honestidad 5: no descalificado.

# Experimento #54 — Predicción de volumen y rango (medición, no estrategia)

Estado del guion: **BORRADOR — pendiente de aprobación**
Estado del experimento: **parcial** (neutral): el volumen no se predice (R² −0.003), el rango sí (R² 0.15) · Serie: D/E (propuesta: mini-serie «La volatilidad sí se predice, la dirección no», #51 → #55) · Relacionado: #51, #52, #55
Datos usados: `experiments.json` (v=54: verdict, analysis, notes, metrics, kpis, params_view, chart.bars, capital.note), `exp_details.json` (algo, code.snippet, filters). No tiene `series/` (no simula cartera). Tampoco tiene fila en la tabla «Con tu capital» (`docs/youtube/*-capital.md`): figura en su sección «Sin curva de capital».
Aviso de datos: la ficha tiene pocas cifras (−0.003, 0.15, 0.27 y los rangos por tipo de activo); por eso el video es corto (≈ 4 min) y no se estira.

## Títulos (3 opciones)
1. El volumen no se predice; el rango sí: R² 0.15 en 10 activos
2. ¿Se puede predecir el volumen de mañana? R² de −0.003
3. 10 activos con machine learning: ¿qué se predice de mañana?

## Miniatura (1280×720)
Fondo `#09090b`. Dos barras: una vacía con borde rojo `#e11d2a` y una alta verde `#22c55e`. Texto grande: "HASTA 0.27" sobre la barra verde. Texto pequeño blanco: "MAÑANA". Logo ATLAS esquina superior derecha. (No repite el título 1.)

---

## VIDEO LARGO (16:9, ≈ 4 min — es una medición de datos, sin cuenta simulada)

**[0:00 — Gancho]** (pantalla: dos barras, una vacía y una alta; cifras −0.003 y 0.15)
¿Qué se puede adivinar del mercado de mañana? Lo probé con machine learning en 10 activos. ¿El volumen, cuánto se negocia? R² de −0.003: nada. ¿El rango, la distancia entre el máximo y el mínimo del día? R² de 0.15, y hasta 0.27 en índices y energía.
> BOCETO: las dos barras reales del `chart.bars` de la ficha (Volumen −0.003 rojo vacía; Rango promedio 0.15 verde; Rango máx. índices y energía 0.27 verde) creciendo con tick. Texto en pantalla: "¿QUÉ SE PUEDE PREDECIR?".

**[0:25 — Qué se midió y para qué]** (pantalla: aviso "no es una estrategia" y esquema de R²)
Esto no es una estrategia: es una medición. No simulo una cuenta ni busco ganar dinero. Quiero saber qué parte del futuro inmediato se deja predecir, porque eso decide qué tipo de herramienta puedes construir. Para medirlo uso el R²: la parte de lo que varía que el modelo logra explicar. Cero es como adivinar el promedio; un número negativo es peor que adivinar el promedio.
> BOCETO: esquema de R² con una escala horizontal (negativo · 0 · positivo) y los dos puntos de la ficha marcados; sello "MEDICIÓN, NO ESTRATEGIA".

**[0:55 — Cómo se midió]** (pantalla: lista de 10 activos y esquema walk-forward)
Diez activos: S&P 500, Nasdaq 100, DAX, FTSE 100, WTI, Brent, oro, euro-dólar, libra-dólar y dólar-yen. Datos de 2019 a 2024. Un modelo HistGradientBoosting, con las mismas variables técnicas del experimento 51, predice dos cosas del día siguiente: el logaritmo del volumen y el rango, es decir, máximo menos mínimo dividido por el cierre. El R² se calcula fuera de muestra, con un modelo que se entrena solo con el pasado y predice días que no ha visto.
> BOCETO: 10 chips de activos entrando uno a uno; checklist de `filters` (R² fuera de muestra ✓ en el rango, ✕ en el volumen); esquema walk-forward con bloques que avanzan.

**[1:35 — Cómo leer las tres barras]** (pantalla: escalera de tres peldaños)
Lee las tres barras como una escalera. La primera, el volumen, está en cero: el modelo no sabe del volumen de mañana más que su promedio. La segunda, el rango promedio de los diez activos, 0.15: sabe algo. La tercera, el máximo en índices y energía, 0.27: ahí sabe bastante más. Ninguna llega cerca de 1, que sería predecirlo todo. Un R² de 0.15 es modesto: explica una pequeña parte de lo que varía. Pero una parte predecible puede ser útil para decidir cuándo actuar.
> BOCETO: escalera con los tres peldaños de `chart.bars` (−0.003, 0.15, 0.27) y una marca punteada en 1 arriba, rotulada "predecirlo todo"; un personaje sube un peldaño con cada frase.

**[2:15 — Resultados]** (pantalla: gráfico de barras de la ficha)
El volumen: R² de −0.003. Cero. El rango: 0.15 de promedio, y entre 0.15 y 0.27 en índices y energía. En oro no: −0.04. Y en divisas es débil, entre 0.05 y 0.12. Es decir, hay algo que predecir en el rango de los índices y la energía, y casi nada en otros lados.
> BOCETO: las tres barras de `chart.bars`, más tres marcas pequeñas por tipo de activo (índices/energía 0.15–0.27, oro −0.04, divisas 0.05–0.12). El oro, en rojo.

**[2:40 — Por qué el volumen no]** (pantalla: texto de la ficha)
El volumen que usa un minorista en estos datos es volumen de ticks: cuenta cuántas veces cambió el precio, no cuánto dinero se negoció, y depende de factores externos. Por eso el modelo no encuentra patrón. En cambio el rango sí se deja predecir: confirma por otra puerta que la volatilidad es predecible en índices y energía, como vimos en el experimento 51.
> BOCETO: tick de precio (línea en zigzag) con el rótulo "volumen de ticks = número de cambios"; flecha hacia "#51". Chip "R² 0.27 S&P 500 · 0.40 WTI" (de la ficha del 51).

**[3:15 — Para qué se usó después]** (pantalla: tres tarjetas enlazadas: #52, #54, #55)
Esta medición no se queda en el cajón. En el experimento 52, la volatilidad pronosticada se usa para dimensionar la posición. Y en el 55 comparo si hace falta un modelo de machine learning o basta una línea de código. Son piezas de la misma historia: la volatilidad se puede medir; la dirección, en mis pruebas, no.
> BOCETO: tres tarjetas en fila (#54 mide, #55 compara, #52 aplica) unidas por flechas; la tercera con el sello verde SIRVIÓ.

**[3:40 — Para qué sirve y cierre]** (pantalla: logo)
Sirve para decidir cuándo ejecutar, no para saber hacia dónde va el precio. Este experimento no simula una cartera, así que no hay un resultado en dinero. Todos los datos en atlas-lab-one.vercel.app, experimento 54. Si quieres que mida qué más se puede predecir, dímelo en los comentarios. Contenido educativo, no es asesoría financiera. El trading no se promete: se prueba.
> BOCETO: las dos barras del inicio se quedan fijas; texto "CUÁNDO, NO HACIA DÓNDE"; fundido a la frase de marca.

---

## SHORT (9:16, ≈ 41 s) — "Mañana"
Título del Short: El volumen de mañana no se deja predecir #Shorts

**[0-3 s]** "El volumen de mañana no se deja predecir."
> BOCETO: B-roll vertical de pantalla de mercado con overlay 0.6; texto gigante "R² −0.003" en rojo; barra vacía; golpe de bajo y sacudida.

**[3-12 s]** "Probé con machine learning en 10 activos. Dos cosas del día siguiente: cuánto se negocia y cuánto se mueve el precio."
> BOCETO: 10 chips de activos con whoosh; dos iconos (volumen y rango) que aparecen con tick. Ken Burns hacia dentro.

**[12-20 s]** "El volumen: cero. El rango del día: R² de 0.15, y hasta 0.27 en índices y energía."
> BOCETO: barras reales del `chart.bars` de la ficha creciendo (−0.003 vacía, 0.15 y 0.27 verdes); flash al entrar la barra de 0.27.

**[20-32 s]** "Pero saber cuánto se va a mover no dice hacia dónde. Sirve para decidir cuándo ejecutar, no para la dirección. Y este experimento no simula ninguna cuenta."
> BOCETO: vela con flecha de doble sentido y rótulo "CUÁNDO ✓ · HACIA DÓNDE ✕"; overlay oscuro.

**[32-41 s]** "Volumen de mañana: no. Rango: un poco sí. El video completo está en el canal. No es asesoría financiera."
> BOCETO: vuelve "R² −0.003" con la barra vacía (empalma con el primer cuadro: loop); texto pequeño "El trading no se promete: se prueba."

---

## Descripción (YouTube)
Medí qué se puede predecir del día siguiente con machine learning (HistGradientBoosting, walk-forward) en 10 activos, 2019-2024: el volumen no (R² −0.003), el rango diario sí (R² 0.15, hasta 0.27 en índices y energía). No es una estrategia ni simula una cuenta: sirve para decidir cuándo ejecutar, no hacia dónde va el precio.
Datos completos: https://atlas-lab-one.vercel.app (experimento #54)
Contenido educativo. No es asesoría financiera ni recomendación de inversión.

Capítulos: 0:00 Gancho · 0:25 Qué se midió y para qué · 0:55 Cómo se midió · 1:35 Cómo leer las tres barras · 2:15 Resultados · 2:40 Por qué el volumen no · 3:15 Para qué se usó después · 3:40 Para qué sirve y cierre

Etiquetas: predicción de volatilidad, rango diario, volumen de ticks, machine learning, R2 fuera de muestra, walk-forward, HistGradientBoosting, trading con datos, análisis cuantitativo, ATLAS Lab

## Rúbrica (autoevaluación, escala 1-5)
| Criterio | Nota | Por qué |
|---|---|---|
| hook_0_3s | 4 | Afirmación fuerte con "R² −0.003" en pantalla; el R² exige una segunda explicación |
| ritmo | 4 | Barras y chips cambian cada 2–3 s; el video corto evita relleno |
| promesa_cumplida | 5 | Promete qué se predice y qué no, y lo muestra con las tres barras |
| potencial_loop | 4 | Cierra en "volumen no, rango un poco sí" y empalma con el primer cuadro |
| claridad_no_traders | 4 | Define R², rango, volumen de ticks y fuera de muestra |
| honestidad_atlas | 5 | Dice que no es una estrategia y que no hay resultado en dinero |
| audio | 4 | Voz por clonar; un solo golpe de bajo |
| cta | 4 | Una petición y remite al video completo |
Promedio: **4.25** (≥ 4.0). Hook del Short 4 (≥ 4) y honestidad 5: no descalificado.

# Experimento #56 — Sentimiento probado de 4 formas · Tema 3: lo único que aportó el VIX, ayudar con la volatilidad (0.378 a 0.395)

Estado del guion: **BORRADOR — pendiente de aprobación**
Tema 3 de 3 del experimento #56. Qué aporta frente a los otros temas: el tema 1 cuenta el resultado de dirección frente a la tasa base y el tema 2 explica qué mide cada indicador; este se centra en lo único que el sentimiento aportó, la volatilidad (R² 0.378 a 0.395), y lo coloca junto a las demás mediciones de volatilidad del programa (#51, #54, #55) y al control de riesgo del #52.
Estado del experimento: **murió** (No sirvió): las 4 formas aciertan la dirección entre 55% y 58% (media 57%), por debajo de la tasa base de 61.3% · Serie: D ("Machine learning en trading: lo que pasó"); cierra la mini-serie propuesta #51 → #56 · Relacionado: #51, #52, #54, #55
Datos usados: `experiments.json` (v=56: verdict, analysis, notes, metrics, kpis, params_view, chart.bars, capital.note; v=51, v=54, v=55 y v=52: metrics, para el contexto), `exp_details.json` (v56: algo, code.snippet, filters). No tiene `series/` ni fila en la tabla «Con tu capital» (`docs/youtube/*-capital.md`): figura en su sección «Sin curva de capital».
Aviso de datos: las cifras de volatilidad de #51, #54, #55 y #56 usan cestas y periodos distintos; el guion las lee una a una, no las compara entre sí.

## Títulos (3 opciones)
1. El VIX no da dirección, pero ayuda con el riesgo: +0.017
2. ¿El índice del miedo predice la volatilidad? 0.378 a 0.395
3. Sentimiento y riesgo: lo único que aportó el VIX

## Miniatura (1280×720)
Fondo `#09090b`. Dos barras casi iguales, una gris y una verde `#22c55e` apenas más alta, con una llave que marca la diferencia. Texto enorme blanco: "APENAS". Texto pequeño rojo `#e11d2a`: "+0.017". Logo ATLAS esquina superior derecha. (No repite el título 1.)

---

## VIDEO LARGO (16:9, ≈ 3.5 min — medición sin cuenta simulada)

**[0:00 — Gancho]** (pantalla: dos barras de R², 0.378 y 0.395)
El sentimiento no predijo la dirección del S&P 500. Pero hay una cifra que lo salva, poco. Con el VIX, el R² de la volatilidad futura sube de 0.378, con solo el precio, a 0.395. Una mejora de 0.017.
> BOCETO: dos barras reales de la ficha: «solo precio 0.378» (gris) y «con VIX 0.395» (verde claro) con tick; una llave que marca la diferencia; golpe de bajo. Subtítulo karaoke con "APENAS" en rojo.

**[0:20 — De qué experimento hablamos]** (pantalla: rótulo con el número y el nombre)
Este es el experimento #56 de ATLAS Lab: Sentimiento probado de 4 formas. Todos los resultados están en la página del experimento.
> BOCETO: rótulo «EXPERIMENTO #56 · Sentimiento probado de 4 formas» con whoosh.

**[0:30 — Qué se predice aquí]** (pantalla: vela con rango de movimiento)
El mismo experimento que prueba la dirección mide otra cosa: la volatilidad futura del S&P 500, es decir, cuánto se va a mover el precio en los próximos 5 días. No hacia dónde: cuánto. La métrica es el R², la parte de lo que varía que el modelo logra explicar. Cero es como adivinar el promedio.
> BOCETO: vela con flecha de doble sentido; etiqueta «cuánto, no hacia dónde»; escala de R² con cero marcado.

**[0:55 — Lo que significa 0.378]** (pantalla: barra de 0.378)
Con solo el precio, sin ningún indicador de sentimiento, el modelo ya alcanza un R² de 0.378. Ya es un R² considerable. Y tiene sentido: cuando el mercado ya se está moviendo mucho, suele seguir moviéndose, y el propio precio reciente lo cuenta. No hace falta un termómetro del miedo para saber que hoy hay tormenta.
> BOCETO: barra de 0.378 con rótulo «solo precio»; ilustración rotulada (no es dato real) de rachas de movimiento grande agrupadas.

**[1:20 — Lo que añade el VIX: +0.017]** (pantalla: llave sobre la diferencia)
Con el VIX, el R² sube a 0.395. Una ayuda marginal, de 0.017. En el lenguaje de la ficha: el sentimiento ayuda un poco a predecir la volatilidad. Es positivo, pero pequeño, y el experimento no aplica una prueba de significancia, así que no puedo decirte si esa diferencia es más que ruido.
> BOCETO: las dos barras con la llave «+0.017»; aviso ámbar «sin prueba de significancia».

**[1:45 — El mismo patrón en otras pruebas]** (pantalla: cuatro tarjetas)
Esto no está solo. En el experimento 51, la volatilidad del S&P 500 dio un R² de 0.27 y la del WTI, 0.40. En el 54, el rango diario, 0.15 de promedio y hasta 0.27 en índices y energía. En el 55, un EWMA de una línea de código llegó a 0.175 contra 0.113 del machine learning. Cada prueba usa su propia cesta y su propio periodo, así que no las comparo entre sí; las leo juntas como un patrón: la volatilidad se deja predecir.
> BOCETO: cuatro tarjetas con las cifras reales de #56 (0.378 → 0.395), #51 (0.27 · 0.40), #54 (0.15 · 0.27) y #55 (0.175 vs 0.113); aviso «cestas y periodos distintos».

**[2:25 — Para qué sirve]** (pantalla: tarjeta «cuánto arriesgar»)
Saber cuánto se va a mover el mercado sirve para decidir cuánto arriesgar. En el experimento 52, la volatilidad pronosticada dimensiona la posición y baja la caída máxima de −40.3% a −19.2%; es el único de 91 que sirvió. No probé el VIX dentro de ese esquema. Y para la dirección, ninguna de las cuatro formas superó la tasa base: acierto de 55% a 58% contra 61.3%.
> BOCETO: valles de drawdown del #52 (−40.3% y −19.2%) con sello SIRVIÓ; chip ámbar «VIX dentro del vol-targeting: no probado»; barras de 55–58% bajo la línea de 61.3%.

**[2:55 — Con tu capital]** (pantalla: aviso)
Este experimento no guarda una curva de cartera, así que no hay un resultado en dinero que escalar a $10,000 o $100,000.
> BOCETO: tarjeta «Con tu capital» con el texto «sin cuenta simulada: es una medición».

**[3:05 — Ficha del experimento #56]** (pantalla: tarjeta con la URL)
Ficha del experimento 56. Estado: murió, no sirvió. Cifra clave: acierto de dirección de 55% a 58% contra una tasa base de 61.3%; en volatilidad, R² de 0.395 con VIX contra 0.378 solo con precio. Filtro que decidió: superar la tasa base, que no se cumple. Lección: el sentimiento no da dirección y ayuda poco con la volatilidad. Revísalo completo en atlas-lab-one.vercel.app/e/56.
> BOCETO: tarjeta «FICHA · EXPERIMENTO #56» con Estado · Cifra clave · Filtro que decidió · Lección, y la URL `atlas-lab-one.vercel.app/e/56` en grande.

**[3:35 — Cierre]**
Contenido educativo, no es asesoría financiera. El trading no se promete: se prueba.
> BOCETO: fundido a la frase de marca en blanco sobre negro; logo ATLAS.

---

## SHORT (9:16, ≈ 40 s) — "Apenas"
Título del Short: El VIX ayuda con el riesgo, no con la dirección #Shorts

**[0-3 s]** "El VIX no predijo la dirección, pero subió el R² de la volatilidad de 0.378 a 0.395."
> BOCETO: B-roll vertical de pantallas de mercado con overlay 0.6; dos barras «0.378» y «0.395»; golpe de bajo y sacudida.

**[3-14 s]** "Con solo el precio, el R² de la volatilidad futura del S&P 500 es 0.378. Con el VIX, 0.395. Una mejora de 0.017."
> BOCETO: dos barras creciendo con tick; llave «+0.017». Ken Burns hacia dentro.

**[14-26 s]** "La volatilidad se deja predecir: en otros experimentos, 0.40 en el petróleo WTI, 0.27 en el S&P 500, 0.175 con una línea de código."
> BOCETO: tarjetas con las cifras reales de #51 y #55 entrando con whoosh; flash al cambio de escena.

**[26-34 s]** "La dirección, no: entre 55% y 58% de acierto, contra 61.3% de decir siempre «sube»."
> BOCETO: barras de 55–58% bajo la línea blanca de 61.3%; sello ✕.

**[34-40 s]** "Sirve para el riesgo, no para el rumbo. Experimento 56 completo en el enlace; el video completo está en el canal. No es asesoría financiera."
> BOCETO: vuelven las dos barras 0.378 y 0.395 (loop con el primer cuadro); abajo «Experimento #56 completo en el enlace»; texto pequeño «El trading no se promete: se prueba.»

---

## Descripción (YouTube) — video largo
https://atlas-lab-one.vercel.app/e/56?utm_source=youtube&utm_medium=video&utm_campaign=exp056-t3
Ficha del experimento #56 (Sentimiento probado de 4 formas): murió (No sirvió) · acierto de dirección de 55% a 58% contra tasa base de 61.3% · R² de volatilidad 0.395 con VIX contra 0.378 solo con precio (+0.017) · sin cuenta simulada.
Lo único que aportó el sentimiento: una ayuda marginal con la volatilidad, y cómo encaja con las mediciones de los experimentos 51, 54 y 55 y con el control de riesgo del 52.
Contenido educativo. No es asesoría financiera ni recomendación de inversión.

## Descripción (YouTube) — Short
https://atlas-lab-one.vercel.app/e/56?utm_source=youtube&utm_medium=short&utm_campaign=exp056-t3
Experimento #56 (Sentimiento probado de 4 formas): murió · R² de volatilidad 0.395 con VIX contra 0.378 solo con precio · dirección 55% a 58% contra tasa base 61.3%. Video completo en el canal. No es asesoría financiera.

## Capítulos
0:00 Gancho · 0:20 De qué experimento hablamos · 0:30 Qué se predice aquí · 0:55 Lo que significa 0.378 · 1:20 Lo que añade el VIX: +0.017 · 1:45 El mismo patrón en otras pruebas · 2:25 Para qué sirve · 2:55 Con tu capital · 3:05 Ficha del experimento #56 · 3:35 Cierre

## Etiquetas
VIX, volatilidad, predicción de volatilidad, sentimiento del mercado, R2, S&P 500, control de riesgo, machine learning, walk-forward, trading con datos, ATLAS Lab

## Rúbrica (autoevaluación, escala 1-5)
| Criterio | Nota | Por qué |
|---|---|---|
| hook_0_3s | 4 | Paradoja «no predice la dirección / sí ayuda con la volatilidad» con las dos cifras en pantalla |
| ritmo | 4 | Barras, llaves y tarjetas cambian cada 2–3 s; video corto de 4 min |
| promesa_cumplida | 5 | Promete la cifra que salva al sentimiento y la explica con la ficha y el contexto |
| potencial_loop | 4 | El final vuelve a las dos barras |
| claridad_no_traders | 4 | Define volatilidad futura, R² y ayuda marginal sin jerga |
| honestidad_atlas | 5 | Dice que no hay prueba de significancia, que las cestas difieren entre experimentos y que el VIX no se probó en el #52 |
| audio | 4 | Voz por clonar; un golpe de bajo |
| cta | 4 | Una petición (la ficha en la web) y remite al video completo |
Promedio: **4.25** (≥ 4.0). Hook del Short 4 (≥ 4) y honestidad 5: no descalificado.

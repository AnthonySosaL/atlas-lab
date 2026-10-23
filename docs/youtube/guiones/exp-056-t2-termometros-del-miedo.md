# Experimento #56 — Sentimiento probado de 4 formas · Tema 2: los cuatro termómetros del miedo, y por qué ninguno adivina la dirección

Estado del guion: **BORRADOR — pendiente de aprobación**
Tema 2 de 3 del experimento #56. Qué aporta frente a los otros temas: el tema 1 cuenta el resultado frente a la tasa base; este es el tema conceptual para principiantes: qué mide cada indicador de sentimiento (VIX, VIX contra VIX3M, crédito, dólar y oro) y por qué medir el miedo no es lo mismo que saber hacia dónde va el precio.
Estado del experimento: **murió** (No sirvió): las 4 formas aciertan la dirección entre 55% y 58% (media 57%), por debajo de la tasa base de 61.3% · Serie: D ("Machine learning en trading: lo que pasó"); cierra la mini-serie propuesta #51 → #56 · Relacionado: #51, #52, #53, #87
Datos usados: `experiments.json` (v=56: verdict, analysis, notes, metrics, kpis, params_view, chart.bars, capital.note, period), `exp_details.json` (v56: algo, code.snippet, filters). No tiene `series/` ni fila en la tabla «Con tu capital» (`docs/youtube/*-capital.md`): figura en su sección «Sin curva de capital».
Aviso de datos: el Sharpe de cada forma y el del modelo nulo no quedaron registrados; el guion se apoya solo en el acierto frente a la tasa base y en el R² de volatilidad, y lo dice. La ficha no asigna cada cifra (55%, 58%) a una forma concreta; el guion tampoco.

## Títulos (3 opciones)
1. Los 4 termómetros del miedo: ninguno adivina la dirección
2. VIX, VIX3M, crédito, dólar y oro: qué mide cada uno
3. ¿Qué es el VIX? El índice del miedo y lo que no predice

## Miniatura (1280×720)
Fondo `#09090b`. Cuatro termómetros en fila, cada uno con una ✕ roja `#e11d2a` al lado de una brújula. Texto enorme blanco: "MIDE MIEDO". Texto pequeño rojo: "NO DIRECCIÓN". Logo ATLAS esquina superior derecha. (No repite el título 1.)

---

## VIDEO LARGO (16:9, ≈ 5 min)

**[0:00 — Gancho]** (pantalla: cuatro termómetros, una brújula y las cifras 55–58% y 61.3%)
Cuatro termómetros para medir el miedo del mercado: el VIX, su estructura de plazos, un indicador de crédito, dólar y oro, y los tres juntos. Les pedí que predijeran si el S&P 500 sube en 5 días. Acertaron entre 55% y 58%. Decir siempre «sube» acierta el 61.3%.
> BOCETO: cuatro termómetros que se llenan con tick; una brújula en el centro; las cifras 55–58% (rojo) y 61.3% (blanco) debajo; sacudida de pantalla al aparecer el 61.3%. Subtítulo karaoke con "MIEDO" en rojo.

**[0:20 — De qué experimento hablamos]** (pantalla: rótulo con el número y el nombre)
Este es el experimento #56 de ATLAS Lab: Sentimiento probado de 4 formas. Todos los resultados están en la página del experimento.
> BOCETO: rótulo «EXPERIMENTO #56 · Sentimiento probado de 4 formas» con whoosh.

**[0:35 — Qué es el sentimiento]** (pantalla: dos mundos, «con apetito de riesgo» y «con miedo»)
En trading, el sentimiento es una forma de medir el ánimo del mercado: si los inversores están tranquilos y comprando riesgo, o asustados y buscando refugio. La idea tentadora es: si mido el miedo, puedo anticipar qué viene. Veamos los cuatro termómetros del experimento, todos sobre SPY, el fondo que replica al S&P 500, con datos desde 2010.
> BOCETO: dos escenas ilustradas (no son datos reales): una soleada y otra con tormenta; termómetro en medio. Texto: «SENTIMIENTO = ÁNIMO DEL MERCADO».

**[1:00 — Termómetro 1: el VIX]** (pantalla: medidor del VIX)
Primero, el VIX, al que muchos llaman el índice del miedo. Mide la volatilidad que el mercado de opciones espera para el S&P 500 en el próximo mes: más alto, más miedo. El experimento usa tres lecturas: su nivel, su cambio a 5 días y su z-score de 60 días, que dice cuántas desviaciones está por encima o por debajo de su promedio reciente.
> BOCETO: medidor con aguja; tres chips «nivel · cambio a 5 días · z-score de 60 días» (de `params_view` y del código de la ficha).

**[1:30 — Termómetro 2: VIX contra VIX3M]** (pantalla: dos curvas de plazos)
Segundo, la estructura de plazos: compara el VIX, que mira el próximo mes, con el VIX3M, que mira tres meses. Normalmente el miedo a más largo plazo es mayor; cuando se invierte, es señal de que algo inmediato asusta. Se usa el cociente entre ambos y su cambio a 5 días.
> BOCETO: dos curvas «VIX» y «VIX3M» (ilustración rotulada, no es dato real) que se cruzan; chip «VIX / VIX3M».

**[1:55 — Termómetro 3: crédito, dólar y oro]** (pantalla: tres refugios)
Tercero, una mirada entre clases de activos. El crédito, comparando bonos de alto rendimiento con bonos de alta calidad, HYG contra LQD: si los de alto rendimiento flaquean, el apetito de riesgo cae. El dólar, con UUP, y el oro, con GLD, que suelen buscarse como refugio. Más el z-score del VIX.
> BOCETO: tres iconos (bonos, dólar, oro) con las etiquetas HYG/LQD, UUP y GLD; flecha «refugio».

**[2:15 — Termómetro 4 y la referencia]** (pantalla: todos juntos más la base de solo precio)
Cuarto, todos juntos. Y como referencia, un modelo que usa solo el precio. Cada conjunto alimenta un HistGradientBoosting con walk-forward, entrenado solo con el pasado, que predice si el S&P 500 sube a 5 días: compra si la probabilidad pasa de 0.55, con 2 puntos básicos de costo por cambio de posición.
> BOCETO: cuatro cajas + una gris de «solo precio» conectadas a un modelo; `params_view` (HistGradientBoosting · 5 d · 0.55 · 2 bps · desde 2010).

**[2:40 — El resultado]** (pantalla: barras de la ficha)
Resultado: acierto entre 55% y 58%, media de 57%. La tasa base, la proporción de veces que el S&P 500 sube a 5 días desde 2010, es de 61.3%. Ninguno de los cuatro termómetros llega a esa línea. Medir el miedo no hizo mejor que quien dice siempre «sube».
> BOCETO: `chart.bars` de la ficha: 55, 57 y 58 en rojo con tick; la línea blanca de 61.3% cae desde arriba con flash.

**[3:05 — Miedo no es dirección]** (pantalla: termómetro y brújula)
Mide el ánimo, no el rumbo. Un termómetro te dice que hace calor; no te dice si mañana va a llover. Los indicadores de miedo dicen cuánto se espera que se mueva el mercado, no hacia dónde. La ficha no da una explicación causal; lo medido es que no superan la tasa base. Pero algo sí aportaron, poco, en la volatilidad: el R² de la volatilidad futura sube de 0.378 con solo precio a 0.395 con el VIX.
> BOCETO: termómetro con «cuánto ✓» y brújula con «hacia dónde ✕»; chip «R² 0.378 → 0.395».

**[3:40 — Con tu capital]** (pantalla: aviso)
Este experimento no guarda una curva de cartera, así que no hay un resultado en dinero que escalar a $10,000 o $100,000. Mide si el sentimiento acierta la dirección frente a la tasa base.
> BOCETO: tarjeta «Con tu capital» con el texto «sin cuenta simulada: es una medición».

**[3:55 — Lo que falta]** (pantalla: lista ámbar)
Tres cosas que no quedaron registradas: el Sharpe de cada forma, el del modelo nulo de cada forma, y el Deflated Sharpe, que descuenta la suerte de haber probado varias ideas. Por eso la conclusión se apoya solo en el acierto frente a la tasa base.
> BOCETO: lista ámbar con tick: «Sharpe por forma: no registrado», «modelo nulo por forma: no registrado», «Deflated Sharpe: no aplicado».

**[4:15 — Ficha del experimento #56]** (pantalla: tarjeta con la URL)
Ficha del experimento 56. Estado: murió, no sirvió. Cifra clave: acierto de 55% a 58% (media 57%) contra una tasa base de 61.3%. Filtro que decidió: superar la tasa base de acierto, que ninguna de las cuatro formas cumple. Lección: medir el miedo no es saber hacia dónde va el precio. Revísalo completo en atlas-lab-one.vercel.app/e/56.
> BOCETO: tarjeta «FICHA · EXPERIMENTO #56» con Estado · Cifra clave · Filtro que decidió · Lección, y la URL `atlas-lab-one.vercel.app/e/56` en grande.

**[4:45 — Cierre]**
Contenido educativo, no es asesoría financiera. El trading no se promete: se prueba.
> BOCETO: fundido a la frase de marca en blanco sobre negro; logo ATLAS.

---

## SHORT (9:16, ≈ 43 s) — "Mide miedo"
Título del Short: Cuatro formas de medir el miedo: 57% #Shorts

**[0-3 s]** "Cuatro formas de medir el miedo del mercado. Aciertan 57%. Decir «sube», 61.3%."
> BOCETO: B-roll vertical de pantallas de mercado con overlay 0.6; cuatro termómetros; dos cifras enormes, «57%» rojo y «61.3%» blanco; golpe de bajo y sacudida.

**[3-14 s]** "El VIX, el índice del miedo. Su estructura de plazos. Crédito, dólar y oro. Y todos juntos. Con machine learning, sobre el S&P 500, desde 2010."
> BOCETO: cuatro tarjetas con whoosh, 2 s cada una. Ken Burns hacia dentro.

**[14-26 s]** "Resultado: entre 55% y 58%. Ninguno llega a 61.3%. Mide el ánimo, no el rumbo."
> BOCETO: `chart.bars` de la ficha; línea blanca de 61.3% cayendo con flash; termómetro y brújula con ✕.

**[26-35 s]** "Sí ayudó un poco con la volatilidad: de 0.378 a 0.395. Cuánto se mueve, sí. Hacia dónde, no."
> BOCETO: dos barras de R² (0.378 gris, 0.395 verde claro) con tick.

**[35-43 s]** "Medir el miedo no es saber el rumbo. Experimento 56 completo en el enlace; el video completo está en el canal. No es asesoría financiera."
> BOCETO: vuelven las dos cifras 57% y 61.3% (loop con el primer cuadro); abajo «Experimento #56 completo en el enlace»; texto pequeño «El trading no se promete: se prueba.»

---

## Descripción (YouTube) — video largo
https://atlas-lab-one.vercel.app/e/56?utm_source=youtube&utm_medium=video&utm_campaign=exp056-t2
Ficha del experimento #56 (Sentimiento probado de 4 formas): murió (No sirvió) · acierto de dirección a 5 días de 55% a 58% (media 57%) contra una tasa base de 61.3% · R² de volatilidad 0.395 con VIX contra 0.378 solo con precio · sin cuenta simulada.
Qué mide el VIX, qué mide su estructura de plazos (VIX contra VIX3M), qué dicen el crédito, el dólar y el oro, y por qué ninguno adivinó la dirección del S&P 500.
Contenido educativo. No es asesoría financiera ni recomendación de inversión.

## Descripción (YouTube) — Short
https://atlas-lab-one.vercel.app/e/56?utm_source=youtube&utm_medium=short&utm_campaign=exp056-t2
Experimento #56 (Sentimiento probado de 4 formas): murió · acierto de 55% a 58% (media 57%) contra tasa base de 61.3% · R² de volatilidad 0.395 contra 0.378. Video completo en el canal. No es asesoría financiera.

## Capítulos
0:00 Gancho · 0:20 De qué experimento hablamos · 0:35 Qué es el sentimiento · 1:00 Termómetro 1: el VIX · 1:30 Termómetro 2: VIX contra VIX3M · 1:55 Termómetro 3: crédito, dólar y oro · 2:15 Termómetro 4 y la referencia · 2:40 El resultado · 3:05 Miedo no es dirección · 3:40 Con tu capital · 3:55 Lo que falta · 4:15 Ficha del experimento #56 · 4:45 Cierre

## Etiquetas
sentimiento del mercado, VIX, índice del miedo, VIX3M, estructura de plazos, HYG LQD, S&P 500, SPY, machine learning, tasa base, trading con datos, ATLAS Lab

## Rúbrica (autoevaluación, escala 1-5)
| Criterio | Nota | Por qué |
|---|---|---|
| hook_0_3s | 4 | Cuatro termómetros y 61.3% contra 55–58% en pantalla desde el cuadro 1 |
| ritmo | 4 | Un termómetro nuevo cada 35–40 s en el largo y cada 2 s en el Short; el bloque de definiciones es el más conceptual |
| promesa_cumplida | 5 | Promete explicar los cuatro indicadores y mostrar por qué no bastan, y lo entrega con las barras de la ficha |
| potencial_loop | 4 | El final vuelve a las dos cifras del primer cuadro |
| claridad_no_traders | 5 | Define sentimiento, VIX, VIX3M, crédito, tasa base y z-score con imágenes sencillas |
| honestidad_atlas | 5 | Declara lo que no quedó registrado y que la ficha no da una explicación causal |
| audio | 4 | Voz por clonar; un golpe de bajo |
| cta | 4 | Una petición (la ficha en la web) y remite al video completo |
Promedio: **4.38** (≥ 4.0). Hook del Short 4 (≥ 4) y honestidad 5: no descalificado.

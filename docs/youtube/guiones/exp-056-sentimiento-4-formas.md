# Experimento #56 — Sentimiento probado de 4 formas

Estado del guion: **BORRADOR — pendiente de aprobación**
Estado del experimento: **murió** (No sirvió): las 4 formas aciertan la dirección entre 55% y 58% (media 57%), por debajo de la tasa base de 61.3% · Serie: D ("Machine learning en trading: lo que pasó"); cierra la mini-serie propuesta #51 → #56 · Relacionado: #51, #52, #53
Datos usados: `experiments.json` (v=56: verdict, analysis, notes, metrics, kpis, params_view, chart.bars, capital.note), `exp_details.json` (algo, code.snippet, filters). No tiene `series/` ni fila en la tabla de capital (sección «Sin curva de capital»).
Aviso de datos: el Sharpe de cada forma y el del modelo nulo no quedaron registrados; el guion se apoya solo en el acierto frente a la tasa base y en el R² de volatilidad, y lo dice.

## Títulos (3 opciones)
1. El sentimiento acierta 57%. Decir «sube» siempre: 61.3%
2. ¿El VIX predice el S&P 500? 4 formas probadas desde 2010
3. 4 formas de medir el sentimiento: ninguna le gana a «sube»

## Miniatura (1280×720)
Fondo `#09090b`. Un medidor de miedo/codicia (semicírculo rojo-verde) con una gran ✕ roja `#e11d2a` encima. Texto enorme blanco: "VIX ✕". Texto pequeño: "SPY desde 2010". Logo ATLAS esquina superior derecha. (No repite el título 1.)

---

## VIDEO LARGO (16:9, ≈ 5 min — medición sin cuenta simulada)

**[0:00 — Gancho]** (pantalla: cuatro barras de 55 a 58 frente a una línea de 61.3)
Si apostaras siempre que el S&P 500 va a subir en los próximos 5 días, acertarías el 61.3% de las veces. Probé cuatro formas de leer el sentimiento del mercado, con machine learning, para hacerlo mejor. Las cuatro acertaron menos: entre 55% y 58%.
> BOCETO: gráfico `chart.bars` de la ficha: peor 55%, media 57%, mejor 58% (rojo) y la tasa base 61.3% como línea blanca por encima; sacudida de pantalla cuando la línea blanca aparece sobre las barras.

**[0:25 — La tasa base]** (pantalla: gráfico simple "sube / baja")
Primero, una idea clave: la tasa base. El mercado sube más de lo que baja. En SPY, el fondo del S&P 500, desde 2010, a 5 días sube el 61.3% de las veces. Entonces un modelo que acierta el 57% no está "acertando bastante": está acertando menos que quien dice siempre "sube". Para ser útil, un modelo tiene que superar esa línea, no el 50%.
> BOCETO: barra horizontal dividida en 61.3% "sube" y el resto "baja" (ilustración de la proporción de la ficha); línea de la moneda justa en gris y la de 61.3% en blanco; texto "LA BARRA A SUPERAR".

**[0:55 — Un ejemplo con una moneda cargada]** (pantalla: moneda cargada y un adivino)
Imagina una moneda cargada que cae cara el 61.3% de las veces. Si apuestas siempre a cara, ganas más de la mitad de las apuestas sin saber nada. Un adivino que acierta el 57% está peor que tú, aunque suene mejor que lanzar una moneda justa. Así hay que leer el 57%: no contra la moneda al aire, sino contra el 61.3%.
> BOCETO: una moneda con la cara marcada 61.3% y dos jugadores: "siempre cara" (61.3%, blanco) y "adivino" (57%, rojo); las barras crecen con tick.

**[1:25 — Las 4 formas de leer el sentimiento]** (pantalla: cuatro tarjetas S1–S4)
Forma uno: el VIX como miedo. El VIX es el índice de volatilidad esperada que muchos llaman "el índice del miedo"; uso su nivel, su cambio a 5 días y su z-score de 60 días. Forma dos: la estructura de plazos, VIX contra VIX3M. Forma tres: señales entre activos, como el crédito, el dólar y el oro. Forma cuatro: todo junto. Y una base de comparación que usa solo el precio.
> BOCETO: 4 tarjetas S1–S4 con iconos (medidor VIX, dos curvas VIX/VIX3M, crédito HYG/LQD + dólar UUP + oro GLD, todas juntas) entrando con whoosh; la tarjeta "Solo precio" en gris.

**[2:00 — Cómo se probó]** (pantalla: esquema walk-forward)
Cada conjunto de datos alimenta un modelo HistGradientBoosting con walk-forward, es decir, entrenado solo con el pasado y evaluado fuera de muestra. Predice dos cosas: la dirección a 5 días, comprando si la probabilidad supera 0.55 con 2 puntos básicos de costo por cambio de posición, y la volatilidad futura. Comparo el acierto con la tasa base y con un modelo nulo de etiquetas barajadas.
> BOCETO: bloques walk-forward avanzando; dos salidas del modelo, "dirección a 5 d" y "volatilidad futura". Recuadro `params_view` (HistGradientBoosting · 5 d · umbral 0.55 · 2 bps · datos desde 2010).

**[2:35 — Resultados]** (pantalla: gráfico de barras de la ficha)
El acierto de dirección: entre 55% y 58%, con una media de 57%. La tasa base: 61.3%. Ninguna de las cuatro formas la supera. Acertar mucho no es lo mismo que ser útil: sin información extra, decir siempre "sube" le gana al sentimiento.
> BOCETO: el mismo `chart.bars` ahora con etiquetas de cada forma sobre cada barra; las 4 barras rojas quedan bajo la línea blanca de 61.3%; sello ✕ "NO SUPERA LA TASA BASE".

**[2:55 — Lo único que aportó]** (pantalla: dos barras de R²)
Hay algo que sí se salva, pero poco: el sentimiento ayuda un poco a predecir la volatilidad. El R², que mide qué parte de lo que varía explica el modelo, sube de 0.378 con solo precio a 0.395 con el VIX. Es una ayuda marginal, de 0.017. No dirección: volatilidad, y apenas.
> BOCETO: dos barras de R² (0.378 solo precio, gris; 0.395 con VIX, verde claro) con una llave que marca "+0.017". Texto: "AYUDA MARGINAL".

**[3:25 — Lo que no se midió]** (pantalla: aviso ámbar)
Una nota de honestidad. El script calcula el Sharpe de un modelo nulo por cada forma, pero ese dato no quedó registrado en el experimento, y tampoco apliqué el Deflated Sharpe. Por eso la conclusión se apoya solo en el acierto frente a la tasa base. Y este experimento no guarda una curva de cartera, así que no hay un resultado "con tu capital".
> BOCETO: lista ámbar: "Sharpe por forma: no registrado", "modelo nulo por forma: no registrado", "Deflated Sharpe: no aplicado"; abajo, "sin curva de cartera".

**[3:55 — Tres preguntas para cualquier indicador de sentimiento]** (pantalla: tres tarjetas con preguntas)
Si alguien te dice que el sentimiento predice el mercado, pregunta tres cosas. Una: ¿contra qué tasa base se compara? Aquí, 61.3%. Dos: ¿se probó fuera de muestra y contra un modelo nulo? Aquí, fuera de muestra sí; el nulo por forma no quedó registrado. Tres: ¿predice dirección o volatilidad? Aquí ayuda un poco con la volatilidad, de 0.378 a 0.395, y nada con la dirección. Un indicador puede servir para medir riesgo sin servir para saber hacia dónde va el precio.
> BOCETO: tres tarjetas con icono (balanza = tasa base, candado = fuera de muestra, onda = volatilidad) con las cifras de la ficha (61.3% · 55–58% · 0.378 → 0.395).

**[4:35 — Conclusión y cierre]** (pantalla: logo)
El sentimiento no aporta dirección. Todos los datos en atlas-lab-one.vercel.app, experimento 56. Si quieres que pruebe otro indicador de sentimiento, dímelo en los comentarios. Contenido educativo, no es asesoría financiera. El trading no se promete: se prueba.
> BOCETO: las 4 barras rojas bajo la línea blanca; fundido a la frase de marca.

---

## SHORT (9:16, ≈ 43 s) — "Decir «sube»"
Título del Short: Decir «sube» acierta 61.3%. El sentimiento, 57% #Shorts

**[0-3 s]** "Decir siempre «sube» acierta el 61.3%."
> BOCETO: B-roll vertical de pantallas de mercado con overlay 0.6; dos cifras enormes, "61.3%" (blanco) y "57%" (rojo), con un rótulo pequeño "SPY · a 5 días · desde 2010"; golpe de bajo y sacudida. Subtítulo karaoke con "SOLO 57%" en rojo.

**[3-14 s]** "El sentimiento, con machine learning: solo 57%. Probé cuatro formas de leerlo: el VIX, su estructura de plazos, crédito, dólar y oro, y todo junto."
> BOCETO: 4 tarjetas S1–S4 con whoosh, 2 s cada una; medidor de miedo. Ken Burns hacia dentro.

**[14-24 s]** "Todas predicen la dirección del S&P 500 a cinco días. Resultado fuera de muestra: entre 55% y 58%. Media, 57%."
> BOCETO: `chart.bars` de la ficha (55, 57, 58 en rojo) con tick; la línea blanca de 61.3% cae desde arriba con flash.

**[24-33 s]** "Ninguna le gana a decir «sube». Acertar mucho no es lo mismo que ser útil: hay que superar la tasa base, no la moneda al aire."
> BOCETO: las 4 barras rojas bajo la línea blanca; sello ✕; texto "NO SUPERA LA TASA BASE" en la zona segura del centro.

**[33-43 s]** "Cuatro formas de sentimiento: 57%. Decir «sube»: 61.3%. El video completo está en el canal. No es asesoría financiera."
> BOCETO: vuelven las dos cifras del primer cuadro, 61.3% y 57% (loop); texto pequeño "El trading no se promete: se prueba."

---

## Descripción (YouTube)
Probé el sentimiento de 4 formas sobre SPY desde 2010 (VIX como miedo, estructura de plazos VIX/VIX3M, señal entre activos y todo junto) con un modelo HistGradientBoosting walk-forward para predecir la dirección a 5 días. Acierto entre 55% y 58% (media 57%), por debajo de la tasa base de 61.3%. Solo ayuda marginalmente a predecir volatilidad (R² 0.395 con VIX vs 0.378 solo con precio).
Datos completos: https://atlas-lab-one.vercel.app (experimento #56)
Contenido educativo. No es asesoría financiera ni recomendación de inversión.

Capítulos: 0:00 Gancho · 0:25 La tasa base · 0:55 Un ejemplo con una moneda cargada · 1:25 Las 4 formas de leer el sentimiento · 2:00 Cómo se probó · 2:35 Resultados · 2:55 Lo único que aportó · 3:25 Lo que no se midió · 3:55 Tres preguntas para cualquier indicador de sentimiento · 4:35 Conclusión y cierre

Etiquetas: sentimiento del mercado, VIX, índice del miedo, VIX3M, S&P 500, SPY, tasa base, machine learning, walk-forward, backtest, trading con datos, ATLAS Lab

## Rúbrica (autoevaluación, escala 1-5)
| Criterio | Nota | Por qué |
|---|---|---|
| hook_0_3s | 5 | 61.3% en voz y el 57% enfrentado en pantalla; premisa que sorprende |
| ritmo | 4 | Tarjetas y barras cambian cada 2–3 s; el bloque de la tasa base es conceptual |
| promesa_cumplida | 5 | Promete comparar el sentimiento con la tasa base y lo hace con las barras de la ficha |
| potencial_loop | 5 | Termina con las mismas dos cifras con que abre |
| claridad_no_traders | 4 | Explica tasa base, VIX, walk-forward, fuera de muestra y R² |
| honestidad_atlas | 5 | Declara lo que no quedó registrado (Sharpe por forma, nulo, Deflated Sharpe) |
| audio | 4 | Voz por clonar; un golpe de bajo |
| cta | 4 | Una petición y remite al video completo |
Promedio: **4.5** (≥ 4.0). Hook del Short 5 (≥ 4) y honestidad 5: no descalificado.

## Otros temas de este experimento
- `exp-056-sentimiento-4-formas.md` — Tema 1: El sentimiento acierta 57%. Decir «sube» siempre: 61.3%
- `exp-056-t2-termometros-del-miedo.md` — Tema 2: los cuatro termómetros del miedo, y por qué ninguno adivina la dirección
- `exp-056-t3-vix-ayuda-con-la-volatilidad.md` — Tema 3: lo único que aportó el VIX, ayudar con la volatilidad (0.378 a 0.395)

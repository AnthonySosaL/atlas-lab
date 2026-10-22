# Experimento #51 — Swing + clasificación + sentimiento (nueva prueba) · Tema 3: la volatilidad del WTI sí se predice (0.40) y la del Brent no (−0.38)

Estado del guion: **BORRADOR — pendiente de aprobación**
Tema 3 de 4 del experimento #51. Qué aporta frente a los otros temas: el tema 1 cuenta la prueba completa, el tema 2 mira los costos; este desarrolla el hallazgo lateral de la ficha, el R² de la volatilidad activo por activo (WTI 0.40, S&P 500 0.27, Brent −0.38), y qué significa un R² negativo.
Estado del experimento: **murió** (No sirvió); el hallazgo de volatilidad es lateral · Serie: D ("Machine learning en trading: lo que pasó"); mini-serie propuesta «La volatilidad sí se predice, la dirección no» (#51 → #56) · Relacionado: #52, #54, #55
Datos usados: `experiments.json` (v=51: analysis, notes, metrics, kpis, params_view, capital.note; v=54: metrics y chart.bars), `exp_details.json` (v51: algo, filters, hallazgo lateral; v54: algo), `series/extra-v51.json` (curva 0 y curva 1) y la tabla «Con tu capital» (`docs/youtube/*-capital.md`) (fila #51).

## Títulos (3 opciones)
1. Volatilidad: WTI sí (0.40), Brent no (−0.38)
2. ¿Qué es un R² negativo? Peor que adivinar el promedio
3. La volatilidad sí se predice… en 7 de 15 activos

## Miniatura (1280×720)
Fondo `#09090b`. Dos barriles de petróleo lado a lado: el de la izquierda con una barra verde alta (`#22c55e`), el de la derecha con una barra roja `#e11d2a` que cae por debajo de cero. Texto enorme blanco: "MISMO PETRÓLEO". Texto pequeño rojo: "¿SÍ O NO?". Logo ATLAS esquina superior derecha. (No repite el título 1.)

---

## VIDEO LARGO (16:9, ≈ 4.5 min)

**[0:00 — Gancho]** (pantalla: dos barriles, una barra verde de 0.40 y una roja de −0.38)
Un mismo modelo de machine learning, los mismos datos, la misma prueba. En el petróleo WTI predice la volatilidad de los próximos 5 días con un R² de 0.40. En el Brent, otro petróleo, el R² es de −0.38. Peor que adivinar el promedio.
> BOCETO: dos barriles; barra verde que sube a 0.40 y barra roja que cae a −0.38 con tick; línea de cero en blanco; sacudida de pantalla al caer la roja. Subtítulo karaoke con "−0.38" en rojo.

**[0:20 — De qué experimento hablamos]** (pantalla: rótulo con el número y el nombre)
Este es el experimento #51 de ATLAS Lab: Swing + clasificación + sentimiento (nueva prueba). Todos los resultados están en la página del experimento. Hoy hablo del hallazgo lateral.
> BOCETO: rótulo "EXPERIMENTO #51 · Swing + clasificación + sentimiento (nueva prueba)" con whoosh.

**[0:35 — Qué se midió]** (pantalla: línea de tiempo con un bloque de entrenamiento y uno de prueba)
Además de predecir la dirección, el experimento mide algo distinto: si el modelo puede predecir la volatilidad, es decir, cuánto se va a mover el precio en los próximos 5 días. Lo hace con walk-forward: se entrena solo con el pasado y se evalúa en días que el modelo no ha visto. La métrica es el R², sobre una cesta de 15 activos.
> BOCETO: bloques walk-forward avanzando; dos salidas del modelo, "dirección" (51.6%) y "volatilidad" (R²).

**[1:05 — Qué es el R²]** (pantalla: escala negativa, cero y positiva)
El R² dice qué parte de lo que varía explica el modelo. Un R² de cero es como predecir siempre el promedio. Por encima de cero, el modelo sabe algo. Por debajo de cero, el modelo es peor que no saber nada: sus pronósticos se alejan más de la realidad que el simple promedio. Un R² de −0.38 no es «poco acierto»: es un modelo que estorba.
> BOCETO: escala horizontal −0.4 · 0 · 0.4 con los puntos de la ficha marcados; sombreado rojo a la izquierda del cero con el rótulo "peor que el promedio".

**[1:35 — El mapa de la cesta]** (pantalla: barras por activo)
Mira los resultados de la ficha. S&P 500: 0.27. WTI: 0.40. Los dos, claramente positivos. En el otro extremo: el Brent, −0.38; el oro, −0.20; la plata, −0.22. La media de los 15 activos es de 0.02 y la mediana de −0.02. Solo 7 de los 15 son positivos.
> BOCETO: barras reales de la ficha: S&P 500 0.27 y WTI 0.40 en verde; Brent −0.38, oro −0.20 y plata −0.22 en rojo; media 0.02 y mediana −0.02 como líneas grises; contador "7 de 15".

**[1:55 — La media esconde los extremos]** (pantalla: una media entre dos mundos)
Una media de 0.02 diría «la volatilidad no se predice». Es cierta y a la vez engaña, porque oculta un 0.40 y un −0.38. Por eso conviene mirar activo por activo. Y otra cosa: el experimento no explica por qué el Brent falla donde el WTI funciona. La ficha solo documenta que pasa.
> BOCETO: la barra de la media (0.02) casi vacía; dos flechas hacia los extremos (0.40 y −0.38); aviso ámbar "el porqué no está medido".

**[2:20 — Otra medición que apunta igual]** (pantalla: experimento 54)
El experimento 54 midió algo parecido en 10 activos: el rango diario de mañana, es decir, máximo menos mínimo dividido por el cierre. R² de 0.15 de promedio y hasta 0.27 en índices y energía, y de −0.04 en oro. El oro vuelve a resistirse. Son dos mediciones distintas con el mismo patrón: índices y energía sí, oro no.
> BOCETO: barras de #54 (0.15 · 0.27 · oro −0.04) al lado de las de #51; flecha "oro ✕ en los dos"; chips "#51" y "#54".

**[2:50 — Para qué sirve saber esto]** (pantalla: control de riesgo)
La volatilidad es la materia prima del control de riesgo. Si sabes cuánto se va a mover un activo, puedes ajustar cuánto arriesgas. Esa idea se prueba en el experimento 52, el único que sirvió. Pero saber cuánto se moverá no dice hacia dónde: eso lo cubre la dirección, y la dirección acertó el 51.6%.
> BOCETO: tarjeta "volatilidad → tamaño de posición (#52)" con sello verde SIRVIÓ; tarjeta "dirección: 51.6%" en gris.

**[3:15 — Con tu capital]** (pantalla: tarjeta "Con tu capital")
Este hallazgo es una medición, no una cuenta; la cuenta es la del swing. Con $100,000, el swing con IA gana $21,666. Comprar y esperar los 15 activos, entre marzo de 2020 y principios de 2025, $55,171. Es lo que pasó en la simulación, no una promesa.
> BOCETO: tarjeta de capital con +$21,666 y +$55,171; aviso "El R² es una medición, no una cuenta".

**[3:35 — Qué hacer con un R² por activo]** (pantalla: tres tarjetas)
Tres hábitos. Uno: mira siempre activo por activo, no solo la media. Dos: un R² negativo significa «mejor no usar este modelo aquí». Tres: confirma con una segunda medición, como el rango del experimento 54. Y una advertencia: que el WTI salga bien en este tramo no garantiza que lo haga en otros.
> BOCETO: tres tarjetas con iconos (lupa, semáforo rojo, doble check) y la advertencia en ámbar.

**[4:00 — Ficha del experimento #51]** (pantalla: tarjeta con la URL)
Ficha del experimento 51. Estado: murió, no sirvió. Cifra clave: acierto de dirección de 51.6% y Sharpe de 0.15, contra 0.37 de comprar y esperar; hallazgo lateral: R² de volatilidad de 0.40 en WTI y 0.27 en S&P 500, pero media de 0.02 en 15 activos. Filtro que decidió: batir a comprar y esperar, que no se cumple. Lección: la volatilidad se predice en algunos activos y en otros no. Revísalo completo en atlas-lab-one.vercel.app/e/51.
> BOCETO: tarjeta "FICHA · EXPERIMENTO #51" con Estado · Cifra clave · Filtro que decidió · Lección, y la URL `atlas-lab-one.vercel.app/e/51` en grande.

**[4:35 — Cierre]**
Contenido educativo, no es asesoría financiera. El trading no se promete: se prueba.
> BOCETO: fundido a la frase de marca en blanco sobre negro; logo ATLAS.

---

## SHORT (9:16, ≈ 42 s) — "Dos petróleos"
Título del Short: Mismo modelo: WTI 0.40, Brent −0.38 #Shorts

**[0-3 s]** "Mismo modelo, dos petróleos. WTI: 0.40. Brent: menos 0.38."
> BOCETO: B-roll vertical de refinería/bolsa con overlay 0.6; dos barras, una verde y una roja bajo cero; golpe de bajo y sacudida.

**[3-14 s]** "Un modelo de machine learning predice cuánto se moverá cada activo en cinco días. Se mide con R²: cero es adivinar el promedio. Negativo, es peor."
> BOCETO: escala negativo-cero-positivo con el modelo en distintos puntos. Ken Burns hacia dentro.

**[14-27 s]** "S&P 500: 0.27. Oro: menos 0.20. Plata: menos 0.22. En 15 activos, solo 7 salen positivos. La media es 0.02."
> BOCETO: barras por activo cayendo bajo cero con tick; contador "7 de 15"; flash al cambio de escena.

**[27-36 s]** "La media dice «no se predice». Los extremos dicen otra cosa. Mira activo por activo."
> BOCETO: la barra de la media casi vacía entre dos barras extremas.

**[36-42 s]** "Volatilidad sí en el WTI, no en el Brent. Experimento 51 completo en el enlace; el video completo está en el canal. No es asesoría financiera."
> BOCETO: vuelven los dos barriles (loop con el primer cuadro); abajo "Experimento #51 completo en el enlace"; texto pequeño "El trading no se promete: se prueba."

---

## Descripción (YouTube) — video largo
https://atlas-lab-one.vercel.app/e/51?utm_source=youtube&utm_medium=video&utm_campaign=exp051-t3
Ficha del experimento #51 (Swing + clasificación + sentimiento, nueva prueba): murió (No sirvió) · acierto 51.6% · Sharpe 0.15 contra 0.37 de comprar y esperar · hallazgo lateral: R² de volatilidad 0.40 (WTI), 0.27 (S&P 500), −0.38 (Brent), media 0.02 en 15 activos.
Qué es un R² negativo, por qué la media esconde los extremos y qué dice la medición del experimento 54 sobre el oro.
Contenido educativo. No es asesoría financiera ni recomendación de inversión.

## Descripción (YouTube) — Short
https://atlas-lab-one.vercel.app/e/51?utm_source=youtube&utm_medium=short&utm_campaign=exp051-t3
Experimento #51 (Swing + clasificación + sentimiento): murió · volatilidad: R² 0.40 en WTI y −0.38 en Brent; 7 de 15 activos positivos. Video completo en el canal. No es asesoría financiera.

## Capítulos
0:00 Gancho · 0:20 De qué experimento hablamos · 0:35 Qué se midió · 1:05 Qué es el R² · 1:35 El mapa de la cesta · 1:55 La media esconde los extremos · 2:20 Otra medición que apunta igual · 2:50 Para qué sirve saber esto · 3:15 Con tu capital · 3:35 Qué hacer con un R² por activo · 4:00 Ficha del experimento #51 · 4:35 Cierre

## Etiquetas
R2, volatilidad, pronóstico de volatilidad, machine learning, WTI, Brent, petróleo, walk-forward, fuera de muestra, trading con datos, ATLAS Lab

## Rúbrica (autoevaluación, escala 1-5)
| Criterio | Nota | Por qué |
|---|---|---|
| hook_0_3s | 4 | Contraste WTI/Brent con 0.40 y −0.38 en pantalla; sin pregunta ni logo |
| ritmo | 4 | Barras y escala cambian cada 2–3 s; el bloque del R² es conceptual |
| promesa_cumplida | 5 | Promete la diferencia entre petróleos y la muestra con las cifras de la ficha |
| potencial_loop | 4 | El final vuelve a los dos barriles |
| claridad_no_traders | 4 | Define R² y R² negativo con una escala visual |
| honestidad_atlas | 5 | Dice que la ficha no explica por qué falla el Brent y que el R² es una medición, no una cuenta |
| audio | 4 | Voz por clonar; un golpe de bajo |
| cta | 4 | Una petición (la ficha en la web) y remite al video completo |
Promedio: **4.25** (≥ 4.0). Hook del Short 4 (≥ 4) y honestidad 5: no descalificado.

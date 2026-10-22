# Experimento #52 — Volatilidad objetivo (control de drawdown): el único que sirvió

Estado del guion: **BORRADOR — pendiente de aprobación**
Estado del experimento: **sirvió** (el único de los 91: 1 sirvió, 64 murieron, 26 parcial o no concluyente) — como control de riesgo, no como fuente de ganancia · Serie: E ("Gestión de riesgo: lo poco que se sostuvo"), video central · Relacionado: #51, #53–#55, #57
Datos usados: `experiments.json` (v=52: verdict, analysis, notes, metrics, kpis, params_view, capital.note), `exp_details.json` (algo, code.snippet, filters), `series/extra-v52.json` (curva 0 = vol-targeting, 1 = leverage fijo 2x, 2 = comprar y esperar), `summary.json` (91 / 1 / 64) y la tabla «Con tu capital» (`docs/youtube/*-capital.md`) (fila #52 y cabecera).

## Títulos (3 opciones)
1. De 91 experimentos, solo 1 sirvió (y no gana más dinero)
2. Volatilidad objetivo: caída máxima de −40.3% a −19.2%
3. El único de 91 que sirvió: Sharpe 0.79 y caída de −19.2%

## Miniatura (1280×720)
Fondo `#09090b`. Dos valles de drawdown superpuestos: uno profundo en rojo `#e11d2a` (rotulado "x2 fijo") y uno poco profundo en verde `#22c55e`. Texto enorme: "−40.3% → −19.2%". Sello pequeño verde "SIRVIÓ". Logo ATLAS esquina superior derecha. (No repite el título 1.)

---

## VIDEO LARGO (16:9, ≈ 8½ min — es el único experimento que sirvió)

**[0:00 — Gancho]** (pantalla: contador 91 → 1; dos valles de drawdown)
De 91 experimentos, solo uno sirvió. Y no es una estrategia que gane más dinero: es una que te hace sufrir menos. Con apalancamiento fijo de 2, la caída máxima fue de −40.3%. Con volatilidad objetivo, de −19.2%.
> BOCETO: contador 91 → 1 con tick; el "1" en verde con sello SIRVIÓ. Enseguida, dos valles de drawdown reales (curvas 1 y 0 de `series/extra-v52.json`, normalizadas al pico) y cifras −40.3% y −19.2%. Sacudida solo en −40.3%.

**[0:20 — Presentación]** (pantalla: rótulo «Experimento #52 · Volatilidad objetivo (control de drawdown)»)
Este es el experimento #52 de ATLAS Lab: Volatilidad objetivo (control de drawdown). Todos los resultados están en la página del experimento.
> BOCETO: rótulo «EXPERIMENTO #52 · Volatilidad objetivo (control de drawdown)» que entra con whoosh sobre el último cuadro del gancho a baja opacidad.

**[0:30 — El marcador del programa]** (pantalla: barra de 91 experimentos)
Para dimensionar lo que significa "uno": de los 91 experimentos, 1 sirvió, 64 murieron y 26 quedaron en parcial o no concluyente. Todo está publicado, lo que sirvió y lo que no.
> BOCETO: barra segmentada de 91 casillas: 64 rojas, 26 ámbar, 1 verde que parpadea. Datos de `summary.json` y de la tabla «Con tu capital».

**[0:50 — Qué significa "sirvió"]** (pantalla: tarjeta con la palabra SIRVIÓ y su alcance)
Antes de seguir, una aclaración sobre la palabra "sirvió". En este programa significa que la técnica cumple lo que promete con las reglas del experimento. Esta promete controlar el riesgo, y lo cumple: deja la caída máxima en menos de la mitad que con el apalancamiento fijo. No promete ganar más dinero, y de hecho no lo hace. Es un "sirvió" pequeño, honesto y acotado, y por eso lo cuento con todos sus matices.
> BOCETO: tarjeta "SIRVIÓ" en verde con dos renglones debajo: "promete: controlar el riesgo ✓" y "no promete: ganar más ✕". Sin cifras nuevas.

**[1:25 — La idea]** (pantalla: ilustración de volatilidad alta y baja)
La volatilidad es cuánto se mueve el precio. Es como conducir: en una recta despejada aceleras; en una curva con niebla, frenas. No dejas el pie fijo en el acelerador. La idea es simple: cuando el mercado está tranquilo, aumento la posición; cuando se agita, la reduzco. Fijo un objetivo de 15% de volatilidad anual y calculo el apalancamiento como ese objetivo dividido por la volatilidad pronosticada, con un tope de 4 veces. Un modelo de machine learning hace el pronóstico, siempre con datos hasta ayer.
> BOCETO: ilustración rotulada (no es dato real): dos tramos de precio, uno calmo con palanca grande y uno agitado con palanca pequeña; fórmula "apalancamiento = objetivo ÷ volatilidad pronosticada". Recuadro `params_view`: 15% · tope x4 · rebalanceo diario.

**[2:05 — La fórmula en un ejemplo]** (pantalla: fórmula animada)
Con la fórmula, si la volatilidad pronosticada de un activo sube al doble, el apalancamiento se reduce a la mitad; si baja a la mitad, se duplica, hasta el tope de 4. Así la cartera intenta mantener el mismo nivel de riesgo, no el mismo nivel de dinero.
> BOCETO: fórmula "apalancamiento = objetivo ÷ volatilidad pronosticada" con una palanca que sube y baja según una onda de volatilidad; al final, un medidor con la marca "objetivo 15%".

**[2:30 — Cómo se probó]** (pantalla: checklist de reglas)
Siete activos: S&P 500, Nasdaq 100, DAX, FTSE 100, petróleo WTI, Brent y oro. Rebalanceo diario y un costo de 2 puntos básicos por cambio de apalancamiento. Lo comparo con tres cosas: un apalancamiento fijo de 2, una volatilidad reactiva —la desviación estándar simple de los últimos 20 días— y comprar y esperar la cesta. La medición empieza el 18 de marzo de 2020, el primer día con un pronóstico fuera de muestra, es decir, hecho con un modelo que no vio ese día.
> BOCETO: 7 chips de activos; checklist con ✓ "pronóstico fuera de muestra (walk-forward)" y aviso ámbar "la medición arranca el 18-mar-2020". Línea de tiempo 2020 → 2024.

**[3:10 — Resultados]** (pantalla: tabla animada + valles de drawdown)
Mira la tabla. Con apalancamiento fijo de 2, caída máxima de −40.3% y Sharpe de 0.93. Con volatilidad objetivo y pronóstico de machine learning, −19.2% y Sharpe de 0.79; su volatilidad anual real quedó en 11.0%. Con la desviación estándar de 20 días, −16.1% y 0.83. Y comprar y esperar la cesta a 1x: −21.9% y 0.93. Recuerda: el Sharpe mide la ganancia por unidad de riesgo, y el drawdown, la mayor caída desde un pico.
| Método | Caída máxima | Sharpe |
|---|---|---|
| Apalancamiento fijo x2 | −40.3% | 0.93 |
| Volatilidad objetivo (pronóstico ML) | −19.2% | 0.79 |
| Volatilidad reactiva (20 días) | −16.1% | 0.83 |
| Comprar y esperar la cesta (1x) | −21.9% | 0.93 |
> BOCETO: la tabla entra fila a fila con tick; las caídas máximas se dibujan como barras; la fila de −19.2% se resalta en verde. Valles de drawdown de las curvas 0 y 1 de la serie por detrás.

**[3:45 — Cómo leer los dos valles]** (pantalla: dos valles de drawdown superpuestos)
Un valle de drawdown mide cuánto cae la cuenta desde su último pico hasta su peor punto. Con apalancamiento fijo 2, ese valle llegó a −40.3%. Con volatilidad objetivo, a −19.2%. Una caída más profunda es más difícil de recuperar, porque necesitas ganar proporcionalmente más para volver al pico. Y es más probable que una cuenta con reglas, como las de una prop firm, se corte antes. Por eso reducir ese valle tiene valor práctico incluso cuando no hay ganancia extra.
> BOCETO: valles reales de las curvas 1 y 0 de `series/extra-v52.json`, normalizados al pico y superpuestos: rojo profundo (x2 fijo) y verde poco profundo (vol-targeting); flechas hacia el mínimo con −40.3% y −19.2%.

**[4:25 — Lo que "sirvió" no significa]** (pantalla: aviso ámbar)
Ojo. Sirvió porque cumple su promesa de recortar el riesgo, no porque te haga ganar más. Su Sharpe, 0.79, queda por debajo del 0.93. Frente a comprar y esperar sin apalancar, la caída máxima mejora de −21.9% a −19.2%: es modesto. Y la desviación estándar simple de 20 días logra algo parecido, −16.1% con 0.83: el pronóstico de machine learning no aporta más. Eso lo comparo en el experimento 55. No la pasé por el Deflated Sharpe porque no es una señal de retorno: es una técnica de riesgo.
> BOCETO: aviso ámbar "RIESGO, NO GANANCIA"; dos tarjetas lado a lado: ML −19.2% / 0.79 vs desviación 20 d −16.1% / 0.83. Texto: "#55: EWMA vs ML".

**[5:05 — Por qué funciona]** (pantalla: barras de R²)
¿Por qué esto sí se sostiene? Porque la volatilidad se deja predecir mejor que la dirección. En el experimento 51, la volatilidad tuvo un R² de 0.27 en el S&P 500 y de 0.40 en el WTI. En el 54, el rango diario llegó a un R² de 0.15, hasta 0.27 en índices y energía. Pero predecir cuánto se va a mover no dice hacia dónde: por eso sirve para controlar el riesgo, no para ganar más.
> BOCETO: barras de R² (0.27 y 0.40 en verde; 0.15 y hasta 0.27 del rango) con etiquetas "#51" y "#54"; flecha "volatilidad ✓ · dirección ✕".

**[5:45 — Dos números para no engañarte]** (pantalla: dos tarjetas de cifras)
Primero, la volatilidad que logró: 11.0%, cuando el objetivo era 15%. El control no clava el objetivo: se queda por debajo. Segundo, el tramo medido: de marzo de 2020 a finales de 2024, porque el modelo necesita historia para entrenarse y su primer pronóstico fuera de muestra es del 18 de marzo de 2020. Esa fecha es el inicio de la medición; no se midió nada antes. Es una advertencia sobre el alcance, no una excusa.
> BOCETO: dos tarjetas: "Volatilidad real 11.0% (objetivo 15%)" y "Medición: 18-mar-2020 → 2024"; línea de tiempo con el tramo anterior a 2020 en gris y la etiqueta "sin medición".

**[6:20 — Cómo pensar en esto]** (pantalla: texto en pantalla)
Si lo piensas como lo que es, una regla de tamaño de posición, la pregunta útil no es cuánto voy a ganar, sino cuánto estoy dispuesto a perder desde el pico. La técnica no cambia esa respuesta: cambia cuánto riesgo toma la cuenta para dártela. Esa es la diferencia entre una técnica que sirve para controlar y una que promete rendimiento. Y por eso, en un programa donde casi todo murió, esta es la excepción que merece un video propio.
> BOCETO: texto grande en la zona segura del centro: "¿CUÁNTO PERDERÍA DESDE EL PICO?"; los dos valles de fondo a baja opacidad.

**[7:00 — Con tu capital]** (pantalla: tarjeta "Con tu capital")
Con $10,000, termina en +$6,084. Con $100,000, en +$60,839. Comprar y esperar la cesta a 1x, entre el 18 de marzo de 2020 y finales de 2024: +$12,938 y +$129,383. Es decir, gana menos que no hacer nada. La curva usa apalancamiento de hasta 4 veces: las ganancias y las pérdidas se amplifican en la misma proporción.
> BOCETO: tarjeta de capital con curva 0 (verde) y curva 2 (gris) dibujándose; aviso al pie: "Simulación con apalancamiento variable, no es una promesa".

**[7:25 — Ficha del experimento #52]** (pantalla: tarjeta con la URL)
Ficha del experimento #52. Estado: sirvió, como control de riesgo. Cifra clave: la caída máxima baja de −40.3% con apalancamiento fijo x2 a −19.2% con volatilidad objetivo, con Sharpe de 0.79 contra 0.93. Filtro que decidió: el recorte de la caída máxima con pronóstico fuera de muestra. Lección: sirve para sufrir menos, no para ganar más. Revísalo completo en atlas-lab-one.vercel.app/e/52.
> BOCETO: tarjeta «FICHA · EXPERIMENTO #52» con Estado · Cifra clave · Filtro que decidió · Lección, y la URL `atlas-lab-one.vercel.app/e/52` en grande.

**[7:55 — Conclusión y cierre]** (pantalla: valles de drawdown y logo)
De 91 experimentos, el único que sirvió no te hace ganar más: recorta la caída de −40.3% a −19.2%. Lo útil de este programa no es una máquina de dinero, sino saber qué se sostiene y qué no. Todos los datos en atlas-lab-one.vercel.app/e/52. Si quieres que pruebe otra técnica de gestión de riesgo, dímelo en los comentarios. Contenido educativo, no es asesoría financiera. El trading no se promete: se prueba.
> BOCETO: los dos valles del inicio quedan fijos con sus cifras; fundido a la frase de marca en blanco sobre negro.

---

## SHORT (9:16, ≈ 45 s) — "Uno de 91"
Título del Short: De 91 experimentos, solo 1 sirvió #Shorts

**[0-3 s]** "De noventa y un experimentos, solo uno sirvió."
> BOCETO: B-roll vertical de bolsa con overlay 0.6; texto gigante "1 / 91" (el 1 en verde); golpe de bajo y sacudida. Subtítulos karaoke con "SOLO UNO" en rojo.

**[3-13 s]** "Y no gana más dinero. No predice hacia dónde va el mercado: ajusta cuánto arriesgas. Si se agita, reduce la posición; si se calma, la sube."
> BOCETO: ilustración de dos tramos de precio (calma/agitado) con la palanca subiendo y bajando; whoosh. Ken Burns hacia dentro.

**[13-25 s]** "Desde marzo de 2020: con apalancamiento fijo de 2, la caída máxima fue de −40.3%. Con volatilidad objetivo: −19.2%."
> BOCETO: dos valles de drawdown reales de `series/extra-v52.json` (curvas 1 y 0) cayendo; cifras en rojo y verde con tick; flash blanco al cambio de escena.

**[25-34 s]** "Con cien mil dólares ganó $60,839. Comprar y esperar, $129,383. No es para ganar más: es para sufrir menos."
> BOCETO: tarjeta de capital con dos barras (verde menor, gris mayor) y rótulo "RIESGO, NO GANANCIA".

**[34-45 s]** "Uno de noventa y uno. El único que sirvió… y no gana más dinero. Experimento 52 completo en el enlace; el video completo está en el canal. No es asesoría financiera."
> BOCETO: vuelve "1 / 91" del primer cuadro (loop); texto pequeño "El trading no se promete: se prueba." Abajo, «Experimento #52 completo en el enlace».

---

## Descripción (YouTube) — video largo
https://atlas-lab-one.vercel.app/e/52?utm_source=youtube&utm_medium=video&utm_campaign=exp052-t1
Ficha del experimento #52: sirvió, como control de riesgo · caída máxima −19.2% frente a −40.3% con x2 fijo · Sharpe 0.79 frente a 0.93.
De 91 experimentos, este es el único que sirvió, y como control de riesgo, no como fuente de ganancia: dimensionar la posición según la volatilidad pronosticada (objetivo 15% anual, tope x4) en 7 activos recorta la caída máxima de −40.3% (apalancamiento fijo x2) a −19.2% desde el 18 de marzo de 2020, con Sharpe 0.79 frente a 0.93.
Contenido educativo. No es asesoría financiera ni recomendación de inversión.

Capítulos: 0:00 Gancho · 0:20 Presentación · 0:30 El marcador del programa · 0:50 Qué significa "sirvió" · 1:25 La idea · 2:05 La fórmula en un ejemplo · 2:30 Cómo se probó · 3:10 Resultados · 3:45 Cómo leer los dos valles · 4:25 Lo que "sirvió" no significa · 5:05 Por qué funciona · 5:45 Dos números para no engañarte · 6:20 Cómo pensar en esto · 7:00 Con tu capital · 7:25 Ficha del experimento #52 · 7:55 Conclusión y cierre

Etiquetas: volatilidad objetivo, vol targeting, gestión de riesgo, drawdown, apalancamiento, control de riesgo, backtest, Sharpe ratio, machine learning, trading con datos, ATLAS Lab, estrategia que sirvió

## Descripción (YouTube) — Short
https://atlas-lab-one.vercel.app/e/52?utm_source=youtube&utm_medium=short&utm_campaign=exp052-t1
Experimento #52 · Volatilidad objetivo (control de drawdown): sirvió, como control de riesgo · caída máxima −19.2% frente a −40.3%. Video completo en el canal. No es asesoría financiera.

## Rúbrica (autoevaluación, escala 1-5)
| Criterio | Nota | Por qué |
|---|---|---|
| hook_0_3s | 5 | Escasez («91, solo uno») en voz y pantalla; la contradicción «no gana más dinero» entra en el segundo 3 |
| ritmo | 4 | Tabla animada, valles y barras; el bloque de la idea es el más teórico |
| promesa_cumplida | 5 | Se muestra qué sirvió, cuánto recorta y por qué no es ganancia |
| potencial_loop | 5 | Cierra en "uno de 91, no gana más" y empalma con "1 / 91" |
| claridad_no_traders | 4 | Explica volatilidad, drawdown, Sharpe, fuera de muestra y R² |
| honestidad_atlas | 5 | Dice que gana menos que comprar y esperar y que el ML no aporta sobre la desviación simple |
| audio | 4 | Voz por clonar; un golpe de bajo en el gancho |
| cta | 4 | Una petición y remite al video completo |
Promedio: **4.5** (≥ 4.0). Hook del Short 5 (≥ 4) y honestidad 5: no descalificado.

## Otros temas de este experimento
- `exp-052-vol-targeting-unico-que-sirvio.md` — Tema 1: De 91 experimentos, solo 1 sirvió (y no gana más dinero)
- `exp-052-t2-x2-fijo-446193.md` — Tema 2: el x2 fijo ganó más dinero ($446,193) y perdió 22.7% en un día
- `exp-052-t3-sin-ia-20-dias.md` — Tema 3: sin inteligencia artificial, la desviación de 20 días recorta más la caída
- `exp-052-t4-ano-por-ano-2022.md` — Tema 4: año por año, el único que sirvió también perdió en 2022

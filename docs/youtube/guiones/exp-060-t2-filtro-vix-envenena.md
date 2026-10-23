# Experimento #60 — Ataques al cambio de régimen — ronda 1 · Tema 2 de 3: el filtro de VIX que envenenó la regla

Estado del guion: **BORRADOR — pendiente de aprobación**
Tema 2 de 3 del experimento #60 · Qué aporta frente a los otros temas: es el tema de UN ataque a fondo, el A1 (tendencia + filtro de VIX): cómo funciona, por qué la señal de ayer lo hace entrar y salir a destiempo y por qué una regla que daba +30.3% quedó en −16.8%. El tema 1 repasa los tres ataques y la balanza; el tema 3 trata del criterio de éxito fijado de antemano.
Estado del experimento: **murió** (No sirvió): ninguno de los tres ataques supera el Sharpe de 0.37 de estar invertido a 1x · Serie: G (propuesta «Cambio de régimen», #59 → #62) · Relacionado: #59, #57, #61
Datos usados: `experiments.json` (v=60: verdict, analysis, notes, metrics, kpis, params_view, capital.note; v=59: kpis para la regla base), `exp_details.json` (extra-v60: algo, code.snippet, filters), `series/extra-v60.json` (curva 0 = A2, curva 1 = comprar y esperar la cesta) y la tabla «Con tu capital» (`docs/youtube/*-capital.md`, fila #60). A1 no tiene curva en la ficha; se muestra solo con sus cifras.

## Títulos (3 opciones)
1. Añadí un filtro de VIX a una regla que daba +30.3%: quedó en −16.8%
2. Por qué un filtro «de seguridad» puede envenenar una estrategia (Sharpe −0.24)
3. El VIX con un día de rezago: entra y sale a destiempo

## Miniatura (1280×720)
Fondo `#09090b`. A la izquierda, «+30.3%» en verde `#22c55e`. Una flecha blanca con el rótulo «+ FILTRO VIX» lleva a la derecha, donde aparece «−16.8%» en rojo `#e11d2a`. Texto grande blanco: «LO ENVENENÓ». Logo ATLAS esquina superior derecha.

---

## VIDEO LARGO (16:9, ≈ 5 min)

**[0:00 — Gancho]** (pantalla: «+30.3%» que, tras un filtro, se convierte en «−16.8%»)
Una regla de tendencia daba +30.3%. Le añadí un filtro de pánico para protegerla. Resultado: −16.8%.
> BOCETO: contador «+30.3%» en verde; entra el rótulo «+ filtro VIX» y el número cae hasta «−16.8%» en rojo; golpe de bajo y sacudida.

**[0:15 — Este experimento]** (pantalla: rótulo «Experimento #60 · Ataques al cambio de régimen — ronda 1»)
Este es el experimento #60 de ATLAS Lab: ataques al cambio de régimen, ronda 1. Todos los resultados están en la página del experimento. Hoy te cuento el primero de los tres intentos, el que más daño hizo.
> BOCETO: rótulo con «#60» y el nombre del experimento; logo ATLAS; whoosh suave.

**[0:35 — La regla de partida]** (pantalla: precio con media de 200 días)
La regla viene del experimento 59: si la cesta está sobre su media de 200 días, compro con apalancamiento 2; si está debajo, salgo. En esta cesta de 15 activos, de 2014 a 2024, esa regla dio +30.3%, con un Sharpe de 0.33 frente a 0.37 de estar invertido a 1x. Su punto débil es el mercado bajista.
> BOCETO: precio con media de 200 días y tramos verdes «x2» sobre ella; curva 0 del #59 como referencia con «+30.3%». Recuadro `params_view`: MA200 · x2 · rezago 1 día · 3 bps.

**[1:05 — El VIX y el filtro de pánico]** (pantalla: termómetro del VIX)
El VIX es un indicador que resume cuánto espera el mercado de opciones que se mueva el S&P 500; se le llama el termómetro del miedo. El filtro de pánico combina el VIX con una señal de crédito, y dice «aversión al riesgo» cuando algo se enciende. El ataque 1 suma ese filtro a la regla: salir del mercado si el índice está bajo su media de 200 días o si el filtro indica aversión al riesgo. La idea parece de sentido común: más protección, menos pérdidas.
> BOCETO: termómetro del VIX con zona roja; diagrama de dos condiciones de salida unidas por «o»; texto «tendencia + VIX = A1».

**[1:50 — El problema: la señal de ayer]** (pantalla: línea de tiempo con tres días)
Hay un detalle clave. Para no mirar el futuro, el filtro se decide con el cierre de ayer. Imagina el día en que el pánico estalla: el VIX salta, pero tú solo lo sabes al cierre y sales al día siguiente, cuando parte del daño ya ocurrió. Más tarde, el miedo baja, pero tu señal tarda en apagarse y vuelves tarde. El resultado es entrar y salir a destiempo. Es una ilustración del mecanismo, no un dato medido.
> BOCETO: línea de tiempo ilustrativa de tres días: «día 1: el VIX salta», «día 2: sales», «día 3: el mercado ya rebotó»; sello «ilustración, no dato».

**[2:35 — Resultado]** (pantalla: tabla con A1 resaltado)
Entre 2014 y 2024, el ataque 1 terminó en −16.8%, con un Sharpe de −0.24. Estar invertido a 1x da un Sharpe de 0.37. En 2022, el ataque 1 perdió −4.0%. Es decir, ni gana en el año bajista, ni sostiene el periodo completo. Y la regla de partida, sin el filtro, daba +30.3%.
| Ataque | 2014–2024 | Sharpe 2014–2024 | 2022 |
|---|---|---|---|
| Regla base (#59) | +30.3% | 0.33 | — |
| A1 tendencia + VIX | −16.8% | −0.24 | −4.0% |
| Invertido a 1x | — | 0.37 | — |
> BOCETO: la tabla entra fila a fila con tick; la cifra −16.8% en rojo con sacudida; barras de Sharpe (−0.24 roja, 0.33 blanca, 0.37 verde).

**[3:15 — Lo que dice la ficha]** (pantalla: texto de la ficha)
La ficha lo resume así: el ataque 1 se envenenó. El filtro de VIX rezagado entra y sale a destiempo y arrastró todo a −16.8%. En el experimento 59 ya había una lección parecida: un detector lento, como la media de 200 días, sobrevive mejor a la ejecución que uno rápido, como el VIX, pero tampoco genera ventaja.
> BOCETO: la frase de la ficha en pantalla, con «envenenó» en rojo; dos relojes (lento y rápido) al fondo.

**[3:50 — La lección: cada parche añade una decisión]** (pantalla: una prenda con un parche)
Cada filtro que añades es una decisión más, y cada decisión tiene su propio riesgo de llegar tarde. Un parche puede cubrir un hueco y abrir otro. Por eso la pregunta no es si el filtro suena razonable, sino si el resultado del conjunto mejora, y aquí empeoró.
> BOCETO: prenda con un parche que cubre un agujero y abre otro; texto «+1 filtro = +1 decisión».

**[4:20 — Con tu capital]** (pantalla: tarjeta «Con tu capital»)
El ataque 1 no tiene curva de capital en la ficha. La única curva de este experimento es la del ataque 2: con $10,000 termina en +$2,970; con $100,000, en +$29,702, contra +$2,310 y +$23,098 de comprar y esperar la cesta. Del ataque 1 solo hay sus porcentajes, los de la tabla.
> BOCETO: tarjeta de capital con dos filas (A2 y sin estrategia); nota al pie: «Curva de A2, con apalancamiento variable entre x0.5 y x3. A1 y A3 no tienen curva. Simulación, no es una promesa».

**[4:45 — Conclusión]** (pantalla: el «+30.3%» y el «−16.8%» del inicio)
Un filtro de seguridad no siempre protege. A veces solo llega tarde.
> BOCETO: los dos números del inicio, fijos, unidos por la flecha «+ filtro VIX».

**[4:55 — Ficha del experimento #60 y cierre]** (pantalla: tarjeta con la ficha y la URL)
Ficha del experimento #60. Estado: murió. Cifra clave: tendencia más VIX, −16.8% en 2014–2024; ninguno de los tres ataques supera el Sharpe de 0.37. Filtro que decidió: superar a estar invertido a 1x. Lección: cada arreglo solo mueve dónde ganas y dónde pierdes. Revísalo completo en atlas-lab-one.vercel.app/e/60. Contenido educativo, no es asesoría financiera. El trading no se promete: se prueba.
> BOCETO: tarjeta en pantalla con las 4 líneas de la ficha (estado rojo «murió») y la URL `atlas-lab-one.vercel.app/e/60` en grande; fundido a la frase de marca.

---

## SHORT (9:16, ≈ 44 s) — "El parche que hundió la regla"
Título del Short: Añadí un filtro a una regla de +30.3% y quedó en −16.8% #Shorts

**[0-3 s]** "Le añadí un filtro a una regla de más 30.3%. Resultado: menos 16.8%."
> BOCETO: B-roll vertical de pantallas rojas de mercado con overlay 0.6; «+30.3%» que cae a «−16.8%»; golpe de bajo y sacudida. Karaoke con «FILTRO» en rojo.

**[3-14 s]** "La regla compra con apalancamiento doble si el mercado está sobre su media de 200 días. El filtro: salir también cuando el VIX, el termómetro del miedo, o el crédito indican pánico."
> BOCETO: precio con media móvil y termómetro del VIX; dos condiciones «o»; whoosh. Ken Burns hacia dentro.

**[14-26 s]** "Pero la señal es la de ayer. Te saca tarde y te mete tarde: entra y sale a destiempo."
> BOCETO: línea de tiempo ilustrativa de tres días con el sello «ilustración»; flash blanco al entrar.

**[26-37 s]** "De 2014 a 2024: menos 16.8% y un Sharpe de −0.24. Estar invertido a 1x: 0.37."
> BOCETO: barras de Sharpe (−0.24 roja, 0.37 verde) con tick; «−16.8%» en rojo.

**[37-44 s]** "Un parche más, una decisión más. Video completo en el canal y experimento 60 completo en el enlace. De más 30.3 a… menos 16.8."
> BOCETO: vuelve «+30.3%» → «−16.8%» del primer cuadro (loop); rótulo «Experimento #60 completo en el enlace»; texto pequeño «No es asesoría financiera · El trading no se promete: se prueba».

---

## Descripción (YouTube)
https://atlas-lab-one.vercel.app/e/60?utm_source=youtube&utm_medium=video&utm_campaign=exp060-t2
Ficha del experimento #60: murió · A1 tendencia + VIX: −16.8% en 2014–2024 (Sharpe −0.24) y −4.0% en 2022 · ninguno de los tres ataques supera el Sharpe de 0.37 de estar invertido a 1x.
Qué pasa cuando le añades un filtro de VIX y crédito a una regla de tendencia con apalancamiento 2 (cesta de 15 activos, costos de 3 bps, señales con un día de rezago). La regla de partida daba +30.3%; con el filtro, −16.8%.
Contenido educativo. No es asesoría financiera ni recomendación de inversión.
Descripción del Short (primera línea): https://atlas-lab-one.vercel.app/e/60?utm_source=youtube&utm_medium=short&utm_campaign=exp060-t2

Capítulos: 0:00 Gancho · 0:15 Este experimento · 0:35 La regla de partida · 1:05 El VIX y el filtro de pánico · 1:50 El problema: la señal de ayer · 2:35 Resultado · 3:15 Lo que dice la ficha · 3:50 La lección: cada parche añade una decisión · 4:20 Con tu capital · 4:45 Conclusión · 4:55 Ficha del experimento #60 y cierre

Etiquetas: filtro VIX, VIX, termómetro del miedo, media móvil 200, cambio de régimen, mercado bajista, tendencia, backtest, Sharpe ratio, trading con datos, ATLAS Lab, estrategias de trading

## Rúbrica (autoevaluación, 1–5)
| Pieza | hook_0_3s | ritmo | promesa_cumplida | potencial_loop | claridad_no_traders | honestidad_atlas | audio | cta | Promedio |
|---|---|---|---|---|---|---|---|---|---|
| Largo | 5 | 4 | 5 | 4 | 4 | 5 | 4 | 4 | 4.38 |
| Short | 5 | 4 | 5 | 5 | 4 | 5 | 4 | 4 | 4.50 |

Hook ≥ 4 ✓ · honestidad 5 ✓. Punto débil: el mecanismo de «entrar y salir a destiempo» se ilustra con tres días inventados; va rotulado como ilustración y la ficha solo confirma la conclusión, no el detalle del mecanismo.

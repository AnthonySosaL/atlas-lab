# Experimento #59 — Tendencia o fuera (cambio de régimen con MA200) · Tema 3 de 4: más dólares, peor estrategia

Estado del guion: **BORRADOR — pendiente de aprobación**
Tema 3 de 4 del experimento #59 · Qué aporta frente a los otros temas: es el tema de la COMPARACIÓN contra comprar y esperar y del CONCEPTO de retorno ajustado por riesgo. Muestra por qué ganar más dólares (+$30,275 contra +$23,098) no hace mejor a una regla cuando su Sharpe es menor (0.33 contra 0.37). El tema 1 cuenta la historia del +30.3% que era beta; el tema 2 trata de las seis ventanas; el tema 4, de la prueba fuera de muestra.
Estado del experimento: **murió** (No sirvió): el +30.3% de 2014-2024 era beta de los índices; fuera de muestra (2007-2013) da Sharpe −0.09 y el Deflated Sharpe es 0.21 · Serie: G (propuesta «Cambio de régimen», #59 → #62) · Relacionado: #60, #61, #62
Datos usados: `experiments.json` (v=59: verdict, analysis, notes, metrics, kpis, params_view, capital.note), `exp_details.json` (extra-v59: algo, filters), `series/extra-v59.json` (curva 0 = Trend-flat MA200, curva 1 = comprar y esperar la cesta) y la tabla «Con tu capital» (`docs/youtube/*-capital.md`, fila #59).

## Títulos (3 opciones)
1. Ganó más dinero que comprar y esperar (+$30,275 contra +$23,098) y era peor estrategia
2. Más dólares no es mejor: Sharpe 0.33 contra 0.37 (media de 200 días con apalancamiento 2)
3. El truco del apalancamiento: cómo una regla parece buena solo por duplicar la dosis

## Miniatura (1280×720)
Fondo `#09090b`. Dos pilas de billetes: la alta, a la izquierda, rotulada «+$30,275» con una ✕ roja `#e11d2a`; la baja, a la derecha, rotulada «+$23,098» con un ✓ verde `#22c55e`. Texto grande blanco: «MÁS DÓLARES ≠ MEJOR». Logo ATLAS esquina superior derecha.

---

## VIDEO LARGO (16:9, ≈ 5 min)

**[0:00 — Gancho]** (pantalla: dos pilas de billetes, una más alta que la otra)
Con $100,000, esta regla ganó +$30,275. Comprar y esperar, +$23,098. Gana más dinero. Y, aun así, es la peor de las dos.
> BOCETO: dos pilas de billetes que crecen; la alta recibe una ✕ roja y la baja un ✓ verde; golpe de bajo y sacudida al aparecer la ✕.

**[0:15 — Este experimento]** (pantalla: rótulo «Experimento #59 · Tendencia o fuera (cambio de régimen con MA200)»)
Este es el experimento #59 de ATLAS Lab: tendencia o fuera, un cambio de régimen con la media de 200 días. Todos los resultados están en la página del experimento. Hoy te explico por qué ganar más dinero no significa ser mejor.
> BOCETO: rótulo con «#59» y el nombre del experimento; logo ATLAS; whoosh suave.

**[0:35 — La tarjeta de capital]** (pantalla: tarjeta «Con tu capital»)
Con $10,000, la regla termina en +$3,027; con $100,000, en +$30,275. Comprar y esperar la misma cesta a 1x, de julio de 2014 a finales de 2024: +$2,310 y +$23,098. En dólares, gana la regla. La regla compra la cartera de paridad de riesgo con apalancamiento 2 cuando el mercado está sobre su media de 200 días, y sale cuando está debajo.
> BOCETO: tarjeta de capital con dos filas (regla en verde claro, sin estrategia en gris); curvas 0 y 1 de la serie dibujándose por detrás.

**[1:10 — Por qué ganó más dinero]** (pantalla: dos marcas en el mismo mar)
Porque usa el doble de exposición, en un periodo en que los índices de la cesta subieron. Piensa en una marea que sube: todos los barcos suben, y el que está amarrado con el doble de cuerda sube el doble. Eso se llama beta: lo que ganas por estar dentro de un mercado que sube, sin que cuente tu habilidad. Con apalancamiento 2, las ganancias y las pérdidas se amplifican en la misma proporción.
> BOCETO: ilustración rotulada (no es dato real): marea que sube con dos barcos, uno con «x1» y otro con «x2» que sube más; texto «x2 = beta por dos».

**[1:50 — El Sharpe, con dos corredores]** (pantalla: dos corredores y un contador de energía)
Para comparar con justicia hace falta el Sharpe: la ganancia por cada unidad de riesgo que aguantas. Imagina dos corredores. Uno llega primero, pero gastó el doble de energía; el otro llega un poco después con la mitad del esfuerzo. ¿Quién corrió mejor? Depende de si miras la meta o el esfuerzo. El Sharpe mira el esfuerzo, el riesgo.
> BOCETO: dos corredores con barras de energía; el primero llega antes con la barra vacía; el segundo, después, con la barra casi llena. Ilustración rotulada, sin datos.

**[2:30 — Sharpe 0.33 contra 0.37]** (pantalla: dos tarjetas de Sharpe)
En la cesta completa, la regla tiene un Sharpe de 0.33. Estar invertido a 1x, sin apalancar y sin hacer nada, da 0.37. Por unidad de riesgo, la regla rinde algo menos que quedarse quieto. Los dólares de más no vienen de ser mejor, vienen de haber duplicado la dosis.
> BOCETO: dos tarjetas: «Trend-flat 0.33» (blanca) y «Invertido a 1x 0.37» (verde); la segunda es mayor. Flecha «x2» que agranda la primera.

**[3:05 — El truco del apalancamiento]** (pantalla: un regulador de volumen)
Cualquiera puede ganar más dólares subiendo el apalancamiento, igual que se sube el volumen de una radio. No hace la canción mejor; la hace más fuerte, y también más fuerte cuando desafina. Por eso, ante una cifra de dólares, la pregunta es: ¿cuánto de esto es habilidad y cuánto es solo volumen?
> BOCETO: regulador de volumen etiquetado «apalancamiento»; al subirlo, una onda verde y una roja crecen a la vez. Ilustración rotulada.

**[3:40 — La prueba que lo confirma]** (pantalla: pantalla dividida)
La ficha pone a prueba la regla donde la beta no ayuda: una cesta de 7 pares de divisas más oro, sin índices, en 2007–2013, un periodo que la regla no vio y con la regla congelada. Sharpe de −0.09, retorno de −5.6% y caída máxima de −13.6%. Sin la marea de los índices, la regla pierde.
> BOCETO: izquierda «con índices: +30.3%»; derecha «sin índices, fuera de muestra: −5.6% · Sharpe −0.09 · caída −13.6%». Texto «BETA ≠ VENTAJA».

**[4:10 — Tres comprobaciones antes de aplaudir una cifra]** (pantalla: tres tarjetas con iconos)
Una: compara el Sharpe, no solo los dólares. Dos: mira si el periodo estuvo dominado por una subida, como la de los índices. Tres: busca la prueba en años que la regla no vio. Si una regla falla en alguna de las tres, el número bonito no cuenta como ventaja.
> BOCETO: tres tarjetas con icono (balanza = Sharpe, marea = periodo alcista, calendario = fuera de muestra).

**[4:35 — Conclusión]** (pantalla: las dos pilas del inicio)
Más dinero no es mejor si el riesgo que asumiste fue el doble.
> BOCETO: las dos pilas del inicio con la ✕ y el ✓; fundido corto.

**[4:45 — Ficha del experimento #59 y cierre]** (pantalla: tarjeta con la ficha y la URL)
Ficha del experimento #59. Estado: murió. Cifra clave: +30.3% en la cesta completa, con Sharpe de 0.33 frente a 0.37 de estar invertido a 1x. Filtro que decidió: Sharpe de −0.09 fuera de muestra y Deflated Sharpe de 0.21. Lección: un número bonito dentro de muestra no es una ventaja. Revísalo completo en atlas-lab-one.vercel.app/e/59. Contenido educativo, no es asesoría financiera. El trading no se promete: se prueba.
> BOCETO: tarjeta en pantalla con las 4 líneas de la ficha (estado rojo «murió») y la URL `atlas-lab-one.vercel.app/e/59` en grande; fundido a la frase de marca.

---

## SHORT (9:16, ≈ 43 s) — "Más dólares, peor regla"
Título del Short: Ganó más que comprar y esperar… y era peor #Shorts

**[0-3 s]** "Ganó más dinero que comprar y esperar. Y es peor estrategia."
> BOCETO: B-roll vertical de pantallas de mercado con overlay 0.6; dos pilas de billetes, «+$30,275» y «+$23,098», con una ✕ sobre la alta; golpe de bajo y sacudida. Karaoke con «PEOR» en rojo.

**[3-14 s]** "Con 100,000 dólares: más 30,275 contra más 23,098. La regla: si el mercado está sobre su media de 200 días, compras con apalancamiento doble."
> BOCETO: tarjeta de capital con las dos cifras; precio con media móvil y tramos «x2»; whoosh. Ken Burns hacia dentro.

**[14-26 s]** "Pero mira el Sharpe, la ganancia por unidad de riesgo: 0.33 contra 0.37 de estar invertido sin apalancar. Ganó más porque duplicó la dosis."
> BOCETO: dos tarjetas de Sharpe, 0.33 blanca y 0.37 verde, con tick; regulador de volumen que sube.

**[26-37 s]** "Sin índices y en años que no vio, de 2007 a 2013: menos 5.6%, Sharpe de −0.09."
> BOCETO: barra roja de −5.6% y «Sharpe −0.09»; flash blanco al entrar.

**[37-43 s]** "Más dinero no es mejor si el riesgo fue el doble. Video completo en el canal y experimento 59 completo en el enlace."
> BOCETO: vuelven las dos pilas del primer cuadro (loop); rótulo «Experimento #59 completo en el enlace»; texto pequeño «No es asesoría financiera · El trading no se promete: se prueba».

---

## Descripción (YouTube)
https://atlas-lab-one.vercel.app/e/59?utm_source=youtube&utm_medium=video&utm_campaign=exp059-t3
Ficha del experimento #59: murió · +30.3% en la cesta completa con Sharpe 0.33 frente a 0.37 de estar invertido a 1x · Sharpe −0.09 fuera de muestra (2007–2013).
Por qué una regla que gana más dólares que comprar y esperar (+$30,275 contra +$23,098 con $100,000) puede ser peor: apalancamiento 2, beta de los índices y retorno por unidad de riesgo.
Contenido educativo. No es asesoría financiera ni recomendación de inversión.
Descripción del Short (primera línea): https://atlas-lab-one.vercel.app/e/59?utm_source=youtube&utm_medium=short&utm_campaign=exp059-t3

Capítulos: 0:00 Gancho · 0:15 Este experimento · 0:35 La tarjeta de capital · 1:10 Por qué ganó más dinero · 1:50 El Sharpe, con dos corredores · 2:30 Sharpe 0.33 contra 0.37 · 3:05 El truco del apalancamiento · 3:40 La prueba que lo confirma · 4:10 Tres comprobaciones · 4:35 Conclusión · 4:45 Ficha del experimento #59 y cierre

Etiquetas: Sharpe ratio, retorno ajustado por riesgo, apalancamiento, beta, media móvil 200, comprar y esperar, seguimiento de tendencia, backtest, trading con datos, ATLAS Lab, estrategias de trading, fuera de muestra

## Rúbrica (autoevaluación, 1–5)
| Pieza | hook_0_3s | ritmo | promesa_cumplida | potencial_loop | claridad_no_traders | honestidad_atlas | audio | cta | Promedio |
|---|---|---|---|---|---|---|---|---|---|
| Largo | 5 | 4 | 5 | 4 | 5 | 5 | 4 | 4 | 4.50 |
| Short | 5 | 4 | 5 | 5 | 4 | 5 | 4 | 4 | 4.50 |

Hook ≥ 4 ✓ · honestidad 5 ✓. Punto débil: las analogías (corredores, volumen) son ilustraciones, no datos; van rotuladas como tales. El video dice que en dólares la regla gana más y explica por qué.

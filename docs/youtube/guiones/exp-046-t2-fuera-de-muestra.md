# Experimento #46 — Pares por z-score del spread · Tema 2: la prueba de los años que la estrategia nunca vio

Estado del guion: **BORRADOR — pendiente de aprobación**
Tema 2 de 3 del experimento #46. Qué aporta frente a los otros temas: el tema 1 cuenta la estrategia y su resultado; este explica un método, el «fuera de muestra», usando el pairs trading como caso y comparándolo con el filtro del laboratorio (#81).
Estado del experimento: **murió** (No sirvió) · Serie: sin asignar en `plan-series.md`; propuesta: B ampliada ("Estrategias famosas, puestas a prueba") · Relacionado: #47, #48, #50, #81
Datos usados: `experiments.json` (v=46: verdict, notes, metrics, kpis, params_view, period, capital.note; v=81: metrics y chart.bars), `exp_details.json` (v46: algo, filters; v81: filters) y la tabla «Con tu capital» (`docs/youtube/*-capital.md`) (fila #46).

## Títulos (3 opciones)
1. Pairs trading en años que nunca vio: Sharpe −1.04
2. Fuera de muestra: la prueba que casi nadie te enseña
3. ¿Funciona en años nuevos? 2 pares, 2007–2013: −1.04

## Miniatura (1280×720)
Fondo `#09090b`. Línea de tiempo 2007→2024: el tramo 2007–2013 en gris con un candado abierto y una lupa; 2014–2024 en blanco. Texto enorme rojo `#e11d2a`: "MISMO SIGNO" (3 palabras máximo; no repite la cifra del título 1). Debajo, dos barras rojas hacia abajo de largo parecido. Logo ATLAS esquina superior derecha.

---

## VIDEO LARGO (16:9, ≈ 5.5 min)

**[0:00 — Gancho]** (pantalla: dos barras rojas casi iguales, "−1.21" y "−1.04", con un candado sobre la segunda)
¿Y en años que la estrategia nunca vio? Es la pregunta que casi nadie responde en un backtest. Pairs trading: Sharpe de −1.21 en los años de diseño, de 2014 a 2024. En 2007–2013, años que nunca vio: −1.04. Mismo signo.
> BOCETO: barra roja de −1.21 que crece hacia abajo con tick; después la de −1.04 con un candado que se abre y sacudida de pantalla. Subtítulo karaoke con "NUNCA VIO" en rojo.

**[0:20 — De qué experimento hablamos]** (pantalla: rótulo con el número y el nombre)
Este es el experimento #46 de ATLAS Lab: Pares por z-score del spread. Todos los resultados están en la página del experimento.
> BOCETO: rótulo "EXPERIMENTO #46 · Pares por z-score del spread" que entra con whoosh sobre la curva real de `series/…v46.json` (curva 0) a baja opacidad.

**[0:30 — La estrategia en 30 segundos]** (pantalla: cinco chips de pares y la caja de parámetros)
Pairs trading: tomas dos activos que suelen moverse juntos, como el oro y la plata. Calculas el spread, la diferencia entre sus precios ajustada por una beta de 250 días, y mides cuántas desviaciones se alejó de su promedio: el z-score. Si pasa de 2, vendes el lado caro y compras el lado barato. Si baja de 0.5, cierras. Cinco pares: Brent–WTI, oro–plata, S&P 500–Nasdaq 100, euro–libra y dólar australiano–neozelandés. Apalancamiento 2, corte automático al −3% y deslizamiento de 0.2%.
> BOCETO: chips de los 5 pares con whoosh; caja `params_view` (x2 · beta 250 d · entrada |z| > 2 · salida |z| < 0.5 · kill-switch −3% · deslizamiento 0.2%). Ilustración rotulada del spread con bandas.

**[1:05 — Qué es «fuera de muestra»]** (pantalla: un examen con las respuestas del año pasado)
Cuando diseñas una estrategia, miras datos del pasado y ajustas reglas hasta que se ven bien. Eso es «en muestra», y se parece a estudiar con las preguntas del año pasado. Si la estrategia solo funciona ahí, no es habilidad, es memoria. La prueba justa es guardar años que nunca miraste y probar ahí, sin tocar nada. Eso es «fuera de muestra»: el examen nuevo.
> BOCETO: ilustración rotulada (no es dato real): hoja de examen con respuestas ya marcadas ("en muestra") y otra hoja en blanco con una lupa ("fuera de muestra"). Texto: "EL EXAMEN NUEVO".

**[1:35 — Cómo se partió la historia]** (pantalla: línea de tiempo 2007–2024)
Aquí, el diseño usa 2014 a 2024 con los 5 pares. Se reservó 2007–2013, un periodo que incluye la crisis de 2008, como fuera de muestra. Y una limitación que hay que decir en voz alta: en 2007–2013 solo hay datos de dos pares, euro–libra y dólar australiano–neozelandés. La prueba nueva no es una réplica exacta: es una cesta más pequeña. Por eso lo tomo como un indicio, no como una sentencia.
> BOCETO: línea de tiempo con 2007–2013 en gris ("fuera de muestra · 2 pares") y 2014–2024 en blanco ("diseño · 5 pares"); los chips de EUR-GBP y AUD-NZD se iluminan en el tramo gris, los otros tres quedan apagados.

**[2:10 — El resultado]** (pantalla: tarjetas KPI de la ficha)
Sharpe, que mide cuánta ganancia obtienes por cada unidad de riesgo: −1.21 en 2014–2024 y −1.04 en 2007–2013. Retorno total de la cuenta simulada, −10.8%. Drawdown máximo, la mayor caída desde un pico, −13.8%. La cuenta se cortó a los 484 días, el 21 de abril de 2016, por las reglas de una prop firm, una empresa que financia traders: caída máxima de 10% o pérdida de 5% en un día. ¿Sobrevive en todos los periodos? No. Un detalle de método que la ficha deja por escrito: el Sharpe se calcula sobre la curva ya truncada por ese corte.
> BOCETO: `kpis` entrando con tick y en rojo; la fila de −1.04 con la etiqueta "fuera de muestra"; sello ✕ en "Sobrevive todos: No". Aviso ámbar: "Sharpe sobre curva truncada".

**[2:55 — Qué prueba y qué no prueba]** (pantalla: dos columnas)
Esto sí dice: el signo negativo se repite en años que la estrategia no vio. Esto no dice: que dos pares basten para juzgar la idea, porque no hay un test formal de cointegración, solo el z-score del spread; que los costos estén completos, porque aquí solo se modela el deslizamiento de 0.2% en el corte automático; ni nada sobre la suerte de haber probado muchas ideas, porque no se aplicó el Deflated Sharpe. Es un examen nuevo con preguntas distintas y una nota igual de mala.
> BOCETO: columna "Sí dice" (−1.21 y −1.04, mismo signo) en blanco y columna "No dice" (2 pares · sin test de cointegración · costos mínimos · sin Deflated Sharpe) en gris con ✕.

**[3:35 — Qué tan exigente es el examen nuevo]** (pantalla: embudo del laboratorio del experimento 81)
Para medir lo exigente que es esta prueba, mira el laboratorio automático del experimento 81. De 33,363 estrategias que operaron, con el mismo requisito de un Sharpe mayor que 0.30 fuera de muestra, 4,566 pasaron en 2007–2013 y 2,631 en 2021–2024. Y ninguna pasó los 5 filtros. Fuera de muestra no es un trámite: se lleva por delante a la gran mayoría.
> BOCETO: las barras reales del `chart.bars` de #81 (33,363 · 4,566 · 2,631 · 0 · 0) cayendo como un embudo; etiqueta "#81" y las dos barras de fuera de muestra resaltadas.

**[4:05 — Con tu capital]** (pantalla: tarjeta "Con tu capital")
Con $100,000, la cuenta simulada termina en −$10,847. Comprar y esperar la cesta en esas mismas fechas dio −$11,854; es solo contexto, porque esta estrategia pretendía ser neutral al mercado. Es lo que pasó en la simulación, no una promesa.
> BOCETO: tarjeta de capital con una cifra roja (−$10,847) y una fila gris de referencia (−$11,854). Aviso: "Simulación, no es una promesa".

**[4:20 — Tu lista para cualquier backtest]** (pantalla: tres casillas)
Tres cosas que puedes exigir. Una: ¿qué años se guardaron sin tocar? Dos: ¿eran los mismos activos? Aquí, 2 pares contra 5. Tres: ¿el signo se mantiene? Aquí sí, y en negativo. Si falta alguna, lo que te muestran es la práctica con el examen del año pasado.
> BOCETO: tres casillas que se marcan con tick; la segunda con el aviso "2 de 5 pares".

**[4:45 — Ficha del experimento #46]** (pantalla: tarjeta con la URL)
Ficha del experimento 46. Estado: murió, no sirvió. Cifra clave: Sharpe de −1.21 en 2014–2024 y de −1.04 en 2007–2013, con un retorno de −10.8% y la cuenta cortada a los 484 días. Filtro que decidió: fuera de muestra, donde la estrategia tampoco sobrevive; la señal del día anterior sí se cumplió. Lección: la relación entre los pares existe, la ventaja neta no, y el examen con años nuevos es el que decide. Revísalo completo en atlas-lab-one.vercel.app/e/46.
> BOCETO: tarjeta "FICHA · EXPERIMENTO #46" con 4 líneas (Estado · Cifra clave · Filtro que decidió · Lección) y, abajo, la URL `atlas-lab-one.vercel.app/e/46` en grande.

**[5:20 — Cierre]**
Contenido educativo, no es asesoría financiera. El trading no se promete: se prueba.
> BOCETO: fundido a la frase de marca en blanco sobre negro; logo ATLAS.

---

## SHORT (9:16, ≈ 45 s) — "El examen nuevo"
Título del Short: Pairs trading en años que nunca vio: −1.04 #Shorts

**[0-3 s]** "¿Y en años que la estrategia nunca vio? Sharpe de menos 1.04."
> BOCETO: B-roll vertical de pantallas de mercado con overlay 0.6; texto gigante "−1.04" en rojo con un candado que se abre; golpe de bajo y sacudida. Subtítulos karaoke.

**[3-14 s]** "Es pairs trading: cuando dos activos hermanos se separan, compras el barato y vendes el caro. Cinco pares, de 2014 a 2024: Sharpe de −1.21."
> BOCETO: dos líneas que se separan (ilustración rotulada); chips Brent-WTI, oro-plata, S&P-Nasdaq, EUR-GBP, AUD-NZD con tick. Ken Burns hacia dentro.

**[14-26 s]** "Después guardé 2007–2013, años que no vio nunca. Solo había dos pares con datos. Resultado: −1.04. Otros años, mismo signo."
> BOCETO: línea de tiempo con el tramo gris encendiéndose; barra roja de −1.04 que cae con tick; whoosh y flash al entrar.

**[26-36 s]** "En el laboratorio de 33,363 estrategias, solo 4,566 pasaron esa prueba de 2007–2013. Ninguna pasó los cinco filtros."
> BOCETO: contador 33,363 → 4,566 → 0 con tick; las cifras reales de #81.

**[36-45 s]** "Un backtest sin años guardados es memoria, no habilidad. Experimento 46 completo en el enlace; el video completo está en el canal. No es asesoría financiera."
> BOCETO: vuelve el "−1.04" con el candado abierto (loop con "mismo signo"); abajo "Experimento #46 completo en el enlace"; texto pequeño "El trading no se promete: se prueba."

---

## Descripción (YouTube) — video largo
https://atlas-lab-one.vercel.app/e/46?utm_source=youtube&utm_medium=video&utm_campaign=exp046-t2
Ficha del experimento #46 (Pares por z-score del spread): murió (No sirvió) · Sharpe −1.21 (2014–2024) y −1.04 (2007–2013, fuera de muestra) · retorno −10.8% · cuenta cortada a los 484 días.
Explico el «fuera de muestra» con el pairs trading como caso: 5 pares en el diseño, 2 pares en los años guardados, y cuántas estrategias del laboratorio (#81) pasan esa misma prueba.
Contenido educativo. No es asesoría financiera ni recomendación de inversión.

## Descripción (YouTube) — Short
https://atlas-lab-one.vercel.app/e/46?utm_source=youtube&utm_medium=short&utm_campaign=exp046-t2
Experimento #46 (Pares por z-score del spread): murió · Sharpe −1.21 (2014–2024) y −1.04 (2007–2013, años que nunca vio) · cuenta cortada a los 484 días. Video completo en el canal. No es asesoría financiera.

## Capítulos
0:00 Gancho · 0:20 De qué experimento hablamos · 0:30 La estrategia en 30 segundos · 1:05 Qué es «fuera de muestra» · 1:35 Cómo se partió la historia · 2:10 El resultado · 2:55 Qué prueba y qué no prueba · 3:35 Qué tan exigente es el examen nuevo · 4:05 Con tu capital · 4:20 Tu lista para cualquier backtest · 4:45 Ficha del experimento #46 · 5:20 Cierre

## Etiquetas
fuera de muestra, out of sample, backtest, pairs trading, trading de pares, z-score, sobreajuste, Sharpe ratio, validación de estrategias, trading con datos, ATLAS Lab

## Rúbrica (autoevaluación, escala 1-5)
| Criterio | Nota | Por qué |
|---|---|---|
| hook_0_3s | 4 | Pregunta concreta con "−1.04" en pantalla y en voz |
| ritmo | 4 | Cambio visual cada 2–3 s; el bloque de límites es el más denso |
| promesa_cumplida | 5 | Promete responder qué pasa en años nuevos y lo responde con la cifra de la ficha |
| potencial_loop | 4 | El final repite "mismo signo" y el primer cuadro muestra las dos barras |
| claridad_no_traders | 4 | Explica pairs trading, Sharpe, fuera de muestra y prop firm con analogía de examen |
| honestidad_atlas | 5 | Dice que son 2 pares, que no hay test de cointegración, costos mínimos y Sharpe sobre curva truncada |
| audio | 4 | Voz por clonar; golpe de bajo solo en el gancho |
| cta | 4 | Una petición (la ficha en la web) y remite al video completo |
Promedio: **4.25** (≥ 4.0). Hook del Short 4 (≥ 4) y honestidad 5: no descalificado.

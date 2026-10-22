# Experimento #50 — Cierre: 11 clases de estrategia probadas · Tema 2: el mismo cálculo con la señal de hoy (+49.4%) o la de ayer (−7.1%)

Estado del guion: **BORRADOR — pendiente de aprobación**
Tema 2 de 4 del experimento #50. Qué aporta frente a los otros temas: el tema 1 resume las 11 clases y el triple test; este se dedica a un solo método, el rezago de un día (la señal de ayer), y a cómo detectar un backtest que usa información del futuro.
Estado del experimento: **murió** (No sirvió: ninguna de las 11 clases pasa el triple test; el experimento no opera nada propio, resume el programa) · Serie: G ("Construyendo un bot, y por qué murió") · Relacionado: #38, #40
Datos usados: `experiments.json` (v=50: verdict, analysis, notes, metrics, kpis, capital.note), `exp_details.json` (v50: algo, code.snippet, filters), `series/20260610_142844_cierre-11-clases-probadas-v50.json` (curva 0 = configuración ejecutable x2 de #40 con señal rezagada, curva 1 = sin estrategia) y la tabla «Con tu capital» (`docs/youtube/*-capital.md`) (fila #50).

## Títulos (3 opciones)
1. +49.4% o −7.1%: mismo cálculo, señal de hoy o de ayer
2. La línea de código que separa un backtest de la realidad
3. Sharpe 0.38 con la señal de hoy, −0.03 con la de ayer

## Miniatura (1280×720)
Fondo `#09090b`. Pantalla dividida: a la izquierda, "+49.4%" verde apagado y tachado con un candado ("HOY"); a la derecha, "−7.1%" en rojo `#e11d2a` ("AYER"). Texto enorme blanco: "FUTURO". Logo ATLAS esquina superior derecha. (No repite el título 1.)

---

## VIDEO LARGO (16:9, ≈ 4.5 min)

**[0:00 — Gancho]** (pantalla: dos cifras enfrentadas, +49.4% y −7.1%)
Mismos datos. Misma estrategia. Mismo cálculo. Con la señal de hoy, +49.4% y un Sharpe de 0.38. Con la señal de ayer, −7.1% y un Sharpe de −0.03. Toda la diferencia es información del futuro.
> BOCETO: dos paneles: "+49.4% · Sharpe 0.38" (gris, rótulo "imposible en la vida real") contra "−7.1% · Sharpe −0.03" (rojo); sacudida de pantalla al aparecer el segundo. Subtítulo karaoke con "FUTURO" en rojo.

**[0:15 — De qué experimento hablamos]** (pantalla: rótulo con el número y el nombre)
Este es el experimento #50 de ATLAS Lab: Cierre: 11 clases de estrategia probadas. Todos los resultados están en la página del experimento.
> BOCETO: rótulo "EXPERIMENTO #50 · Cierre: 11 clases de estrategia probadas" con whoosh.

**[0:30 — La estrategia que uso de ejemplo]** (pantalla: esquema del filtro de riesgo)
Tomo la configuración ejecutable del experimento 40: una cesta con apalancamiento 2 y un filtro macro. Cada día se mira si hay riesgo alto: si el VIX, el índice de volatilidad esperada, pasa de 28, si el VIX da un salto, o si el crédito cae por debajo de su media de 40 días. Si hay riesgo alto, la cuenta queda fuera del mercado. Además, corte automático del 3% y deslizamiento de 0.2%.
> BOCETO: tres semáforos (VIX > 28 · salto del VIX · crédito < media de 40 días) que, si se enciende alguno, apagan la cuenta; caja con "x2 · kill-switch 3% · deslizamiento 0.2%".

**[1:00 — ¿Qué es «la señal de hoy»?]** (pantalla: reloj de un día de mercado)
El cierre de hoy solo se conoce cuando termina el día. Si el cálculo usa el VIX de cierre de hoy para decidir si hoy estabas dentro o fuera, está usando algo que no sabías cuando tenías que decidir. Es como decidir si llevas paraguas con el parte de lo que ya llovió esta tarde. La señal de ayer, en cambio, sí se conoce: es la única que puedes usar.
> BOCETO: línea de tiempo de un día: "decides" al principio y "cierra el VIX" al final; flecha roja de "señal de hoy" que viaja hacia atrás en el tiempo (✕) y flecha verde de "señal de ayer" (✓).

**[1:35 — Una línea de diferencia]** (pantalla: el código de la ficha)
En el código, la diferencia es una línea. Con la señal de ayer: si ayer hubo riesgo alto, hoy la cuenta queda plana. Con la señal de hoy: se mira el indicador del mismo día. Todo lo demás es idéntico. Y la curva pasa de +49.4% a −7.1%.
> BOCETO: `code.snippet` con la línea `if ro[t - 1]: r = 0.0` resaltada y, al lado, la versión con `ro[t]` tachada; la curva cambiando de dirección.

**[1:55 — El resultado, sin futuro]** (pantalla: tarjetas KPI de la ficha)
Con la señal de ayer, entre mayo de 2007 y diciembre de 2024: retorno total de −7.1%, drawdown máximo de −22.7% y Sharpe de −0.03, que es la ganancia por unidad de riesgo. Por periodos, −0.003 en 2007–2013 y −0.044 en 2014–2024. Y el Deflated Sharpe, la prueba que descuenta la suerte de haber probado muchas ideas, da 0.010, cuando se exige 0.95.
> BOCETO: `kpis` entrando con tick en rojo; barra del Deflated Sharpe 0.010 contra la meta 0.95; curva 0 de `series/…v50.json` dibujándose.

**[2:25 — Con tu capital]** (pantalla: tarjeta "Con tu capital")
Con $100,000, la configuración con la señal de ayer termina en −$7,102. Comprar y esperar esa cesta, entre mayo de 2007 y diciembre de 2024, +$68,723. Es lo que pasó en la simulación, no una promesa. El +49.4% de la señal de hoy no es una cuenta que alguien pudo tener.
> BOCETO: tarjeta de capital con dos filas: estrategia (rojo, −$7,102) y sin estrategia (verde, +$68,723); la cifra +49.4% aparece en gris tachada con "imposible".

**[2:50 — Cómo detectarlo en cualquier backtest]** (pantalla: tres preguntas)
Tres preguntas para cualquier backtest. Una: ¿la señal que usa en un día se conoce antes de que empiece ese día? Dos: ¿dice explícitamente que está rezagada un día? Tres: ¿qué pasa con el resultado si la rezagas? Si se hunde, no era una estrategia, era el futuro. Aquí pasó de +49.4% a −7.1%.
> BOCETO: tres tarjetas con iconos (reloj, candado, flecha atrás) que entran con whoosh; la tercera con el par "+49.4% → −7.1%".

**[3:15 — Qué hacen estas pruebas para no caer en eso]** (pantalla: checklist de `filters`)
En los experimentos 46 a 49 y en este, las posiciones se deciden un día antes. En esta ficha, el filtro de rezago está marcado como cumplido: la posición de hoy usa solo la bandera de ayer. Hay que decir también lo que falta: el Deflated Sharpe solo se calculó para esta configuración; en los experimentos 42 a 49 no se calculó.
> BOCETO: checklist: ✓ "señal rezagada 1 día"; ✕ "Deflated Sharpe 0.010 < 0.95"; ámbar "DSR no calculado en #42–#49".

**[3:40 — Ficha del experimento #50]** (pantalla: tarjeta con la URL)
Ficha del experimento 50. Estado: murió, ninguna de las 11 clases pasa el triple test. Cifra clave: con la señal de ayer, −7.1%, Sharpe de −0.03 y Deflated Sharpe de 0.010; con la señal de hoy, +49.4% y Sharpe de 0.38. Filtro que decidió: el Deflated Sharpe, de 0.010 contra 0.95. Lección: esa diferencia es el futuro. Revísalo completo en atlas-lab-one.vercel.app/e/50.
> BOCETO: tarjeta "FICHA · EXPERIMENTO #50" con Estado · Cifra clave · Filtro que decidió · Lección, y la URL `atlas-lab-one.vercel.app/e/50` en grande.

**[4:10 — Cierre]**
Contenido educativo, no es asesoría financiera. El trading no se promete: se prueba.
> BOCETO: fundido a la frase de marca en blanco sobre negro; logo ATLAS.

---

## SHORT (9:16, ≈ 43 s) — "La línea del futuro"
Título del Short: Señal de hoy: +49.4%. Señal de ayer: −7.1% #Shorts

**[0-3 s]** "Mismo cálculo. Señal de hoy: más 49.4%. Señal de ayer: menos 7.1%."
> BOCETO: B-roll vertical de pantallas de bolsa con overlay 0.6; dos cifras enormes, "+49.4%" gris tachada y "−7.1%" roja; golpe de bajo y sacudida.

**[3-14 s]** "La estrategia mira si hay riesgo alto: el VIX por encima de 28, un salto, o el crédito bajo su media. Si lo hay, la cuenta sale del mercado."
> BOCETO: tres semáforos que se encienden y apagan la cuenta; chips "x2" y "kill-switch 3%". Ken Burns hacia dentro.

**[14-26 s]** "Con la señal de hoy, Sharpe de 0.38. Pero hoy no lo sabes cuando decides. Con la de ayer: Sharpe de −0.03."
> BOCETO: reloj de un día de mercado; la flecha de hoy tachada; dos barras 0.38 (gris) y −0.03 (roja) con tick; flash al cambio de escena.

**[26-36 s]** "Con cien mil dólares, entre 2007 y 2024: −$7,102. Comprar y esperar: +$68,723. Esa diferencia es el futuro."
> BOCETO: tarjeta de capital con las dos cifras; curva 0 de la serie cayendo por detrás a baja opacidad.

**[36-43 s]** "Pregunta siempre si la señal está rezagada. Experimento 50 completo en el enlace; el video completo está en el canal. No es asesoría financiera."
> BOCETO: vuelven "+49.4%" tachada y "−7.1%" (loop con el primer cuadro); abajo "Experimento #50 completo en el enlace"; texto pequeño "El trading no se promete: se prueba."

---

## Descripción (YouTube) — video largo
https://atlas-lab-one.vercel.app/e/50?utm_source=youtube&utm_medium=video&utm_campaign=exp050-t2
Ficha del experimento #50 (Cierre: 11 clases de estrategia probadas): murió · configuración ejecutable x2 con señal rezagada: −7.1% y Sharpe −0.03 en 2007–2024, Deflated Sharpe 0.010 (se exige 0.95); con la señal del mismo día daría +49.4% y Sharpe 0.38.
Explico qué es la información del futuro en un backtest, cómo se rezaga una señal y tres preguntas para detectarla.
Contenido educativo. No es asesoría financiera ni recomendación de inversión.

## Descripción (YouTube) — Short
https://atlas-lab-one.vercel.app/e/50?utm_source=youtube&utm_medium=short&utm_campaign=exp050-t2
Experimento #50 (Cierre: 11 clases de estrategia probadas): murió · señal de hoy +49.4% (imposible en la vida real) contra señal de ayer −7.1%. Video completo en el canal. No es asesoría financiera.

## Capítulos
0:00 Gancho · 0:15 De qué experimento hablamos · 0:30 La estrategia que uso de ejemplo · 1:00 ¿Qué es «la señal de hoy»? · 1:35 Una línea de diferencia · 1:55 El resultado, sin futuro · 2:25 Con tu capital · 2:50 Cómo detectarlo en cualquier backtest · 3:15 Qué hacen estas pruebas para no caer en eso · 3:40 Ficha del experimento #50 · 4:10 Cierre

## Etiquetas
look-ahead bias, información del futuro, backtest, señal rezagada, VIX, Deflated Sharpe, Sharpe ratio, validación de estrategias, trading con datos, ATLAS Lab, trading algorítmico

## Rúbrica (autoevaluación, escala 1-5)
| Criterio | Nota | Por qué |
|---|---|---|
| hook_0_3s | 5 | Dos cifras enfrentadas en voz y pantalla, con la paradoja «mismo cálculo» |
| ritmo | 4 | Paneles y semáforos cambian cada 2–3 s; el bloque de la señal de hoy es conceptual |
| promesa_cumplida | 5 | Promete la causa de la diferencia y la explica con la línea de código y el reloj |
| potencial_loop | 5 | Cierra repitiendo «+49.4% tachada / −7.1%» como en el primer cuadro |
| claridad_no_traders | 4 | Explica VIX, Sharpe, Deflated Sharpe y rezago con analogías |
| honestidad_atlas | 5 | Rotula +49.4% como imposible en la vida real y declara que el DSR no se calculó en #42–#49 |
| audio | 4 | Voz por clonar; un golpe de bajo |
| cta | 4 | Una petición (la ficha en la web) y remite al video completo |
Promedio: **4.5** (≥ 4.0). Hook del Short 5 (≥ 4) y honestidad 5: no descalificado.

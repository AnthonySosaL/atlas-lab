# Experimento #82 — Tema 2: «mejor» no es «apta» (cómo se eligieron las 50 y qué pide un challenge)

Tema 2 de 3 del experimento #82 · Qué aporta frente a los otros temas: explica el criterio con el que se eligieron las 50 mejores de 33,363 y por qué ese criterio (consistencia en dos épocas) no responde a lo que pide un challenge (velocidad dentro de límites estrechos). El tema 1 cuenta el resultado; el tema 3 trata la paradoja del apalancamiento x5.
Estado del guion: **BORRADOR — pendiente de aprobación**
Estado del experimento: **murió** (sin apalancamiento ninguna llega a +10% en 3 meses; con x5 la mejor pasa 3.5% y revienta 4.7%) · Serie C — «El experimento grande» (plan-series.md) · 1 largo + 1 Short
Datos usados: `experiments.json` (v=82: kpis, metrics, verdict, analysis, chart, params_view, capital), `exp_details.json` (extra-v82: algo, filters; sin script, el filtro `is`/`costs`/`lag` dice «no verificable»). Cifras de apoyo del #81 (93% en efectivo, ≈0.4% al año). No tiene `series/`.
Producción (CLAUDE.md del canal): b-roll real detrás de cada escena con overlay oscuro 0.6, Ken Burns alternando in/out, subtítulos karaoke en MAYÚSCULAS con palabras clave en rojo, un dato visual por escena, golpe de bajo + sacudida solo en 1–2 momentos. Colores: rojo `#e11d2a`, verde `#22c55e`, fondo `#09090b`. Cifras en dígitos aquí; en el campo `tts` del JSON, en palabras.

## Títulos (3 opciones)
1. Las 50 mejores de 33,363 estrategias: 0.0% pasan un challenge de fondeo
2. «Mejor» no es «apta»: por qué el Sharpe fuera de muestra no sirve para un challenge
3. De 33,363 a 50 y a 0.0%: la selección que no alcanzó

## Miniatura (pensada para el título 1)
Fondo `#09090b`. Un embudo con «33,363» arriba, «50» en el medio y «0.0%» en rojo grande al final. Texto: «NO ALCANZÓ» (2 palabras, sin repetir el título). Logo ATLAS arriba a la derecha.

---

## VIDEO LARGO (16:9, ≈ 6 min)

**[0:00 — Gancho]** (pantalla: embudo 33,363 → 50 → 0.0%)
Elegí a las 50 mejores estrategias de las 33,363 que probé. Las puse en un challenge de fondeo, esas pruebas que te dan una cuenta grande si las superas. Sin apalancamiento, pasan 0.0%.
BOCETO: embudo animado: 33,363 puntos que se reducen a 50 y, al final, «0.0%» rojo con sacudida. kb=in.

**[0:15 — Qué es este experimento]** (pantalla: rótulo con el número y el nombre)
Este es el experimento #82 de ATLAS Lab: ¿Sirven las 50 mejores para fondeo? Desafío tipo FTMO en 3 meses. Todos los resultados están en la página del experimento.
BOCETO: rótulo en rojo y blanco «EXPERIMENTO #82» con el nombre debajo, sobre el embudo atenuado (overlay 0.6). Whoosh corto. kb=out.

**[0:25 — Cómo se eligieron las 50]** (pantalla: ranking con el peor de dos periodos)
¿Qué significa «mejores»? Para cada estrategia miré su Sharpe, que es la ganancia por unidad de riesgo, en dos periodos que nunca vio: 2007–2013, con la crisis de 2008, y 2021–2024. Me quedé con el peor de los dos. Y ordené por ese peor número: las 50 con el más alto. Es un criterio exigente: una estrategia que brilla en una época y se hunde en otra queda fuera. Son 50 que se portaron bien en las dos.
BOCETO: ranking de estrategias con dos columnas (2007–13 y 2021–24); se resalta el menor de los dos en cada fila y se ordena por él. Corte en la fila 50. kb=in.

**[1:20 — Qué pide un challenge]** (pantalla: tres medidores y un reloj)
Ahora, qué pide un challenge. Las reglas, tipo FTMO: llegar a +10% en 3 meses, sin que la cuenta caiga −10% en total y sin perder más de −5% en un solo día. Si llegas, pasas. Si rompes un límite, reventaste la cuenta. Si se acaba el tiempo, te quedas sin llegar. Fíjate en lo que pide: un objetivo grande, en poco tiempo, con límites estrechos. Es una prueba de velocidad con red de seguridad.
BOCETO: tres medidores («+10%», «−10%», «−5% diario») y un reloj de 3 meses; tres finales posibles: pasar, reventar, quedarse sin tiempo (parámetros de `params_view`). kb=out.

**[2:10 — Lo que tienen en común las 50]** (pantalla: barra de tiempo y regla de la mejor)
Las 50 comparten un rasgo del experimento anterior, el 81: un sesgo de reversión con RSI, que compra después de caídas fuertes. Están en efectivo cerca del 93% del tiempo y hacen alrededor de 0.4% al año. La que mejor se portó con apalancamiento se llama RSI5 menor que 18: compra cuando el RSI de 5 días baja de 18, sale cuando pasa de 87 y solo opera con el precio sobre su media de 100 días. Consistente en dos épocas, sí. Rápida, no.
BOCETO: barra de tiempo 93% gris / 7% verde; tarjeta «RSI5 < 18 · salida RSI > 87 · filtro MA100». kb=in.

**[3:05 — Resultados]** (pantalla: barras del `chart`)
Sin apalancamiento, pasan 0.0% de las ventanas: el 100% se queda sin tiempo. Con x5, es decir, con las posiciones multiplicadas por cinco, en promedio las 50 pasan 0.4%. La mejor, la RSI5 menor que 18, pasa 3.5% de las ventanas, 21 aprobadas, y revienta 4.7%, 28 cuentas reventadas.
| Caso | Pasan | Revientan |
|---|---|---|
| Sin apalancamiento (x1), las 50 | 0.0% | — |
| Con x5, promedio de las 50 | 0.4% | — |
| Con x5, la mejor (RSI5 < 18) | 3.5% (21 ventanas) | 4.7% (28 ventanas) |
BOCETO: barras del `chart` de la ficha (0 · 0.4 · 3.5 en verde; 4.7 en rojo). Sacudida cuando 4.7% supera a 3.5%.

**[3:55 — «Mejor» depende de para qué]** (pantalla: dos metas)
Esa es la lección: mejor para qué. Mi criterio premia la consistencia entre épocas. El challenge premia llegar lejos rápido sin romper límites. Una estrategia puede ser la más consistente y aun así ser demasiado lenta para un reto de 3 meses. Según esta simulación, con cualquiera de las 50 fallarías entre el 96% y el 100% de las veces.
BOCETO: dos metas: «consistencia en dos épocas ✓» y «+10% en 3 meses ✗», unidas por una flecha rota. kb=in.

**[4:40 — Una limitación que debes conocer]** (pantalla: nota fija)
Un aviso de honestidad: de este experimento se conservan las métricas registradas, pero no el script de la simulación. Los periodos exactos, los costos y el rezago de la señal no se pueden verificar. Es un resultado anotado, no un código que puedas reproducir.
BOCETO: cartel ámbar fijo: «Sin script: resultado registrado (exp_details)». Tres líneas en gris: «periodos · costos · rezago: no verificable».

**[5:10 — Con tu capital]** (pantalla: tarjeta sin curva)
Aquí no hay un monto en dólares: el experimento mide la probabilidad de pasar o reventar un challenge en ventanas de 3 meses, no una cartera. En el mejor caso, esa probabilidad es 3.5% de pasar y 4.7% de reventar.
BOCETO: tarjeta de capital con el texto de `capital.note` y las dos cifras, 3.5% verde y 4.7% rojo.

**[5:30 — Conclusión]**
Las mejores de decenas de miles de estrategias no sirvieron para un challenge. Elegir bien según un criterio no significa elegir bien para otra meta. El trading no se promete: se prueba.

**[5:50 — Ficha del experimento #82]** (pantalla: tarjeta con la ficha y la URL)
Ficha del experimento #82. Estado: murió. Cifra clave: sin apalancamiento pasan 0.0%; con x5, la mejor pasa 3.5% y revienta 4.7%. Filtro que decidió: la regla de tiempo, +10% en 3 meses, que las estrategias lentas no alcanzan. Lección: «mejor» depende de para qué. Revísalo completo en atlas-lab-one.vercel.app/e/82.
BOCETO: tarjeta con el número «#82», el sello «MURIÓ» en rojo, tres líneas (cifra clave, filtro que decidió, lección) y la URL `atlas-lab-one.vercel.app/e/82` grande abajo. kb=in.

**[6:10 — Cierre]**
Todos los datos en atlas-lab-one.vercel.app, experimento 82. Contenido educativo, no es asesoría financiera.

---

## SHORT (9:16, ≈ 49 s)

**[0-3 s]** «Elegí las 50 mejores estrategias de 33,363. Para un reto de fondeo, sin apalancamiento: 0.0%.»
BOCETO: embudo 33,363 → 50 → «0.0%» rojo, sobre b-roll de oficina de trading (kb=in), overlay 0.6.

**[3-15 s]** «Las elegí por su Sharpe en dos épocas que nunca vieron: gana la que tenga el peor de los dos más alto.»
BOCETO: ranking con dos columnas y el menor de cada fila resaltado (kb=out); ticker arriba.

**[15-30 s]** «Pero el reto pide +10% en tres meses sin caer −10%. Piden velocidad. Estas están en efectivo cerca del 93% del tiempo y hacen cerca de 0.4% al año.»
BOCETO: tres medidores del reto y la barra de tiempo 93% gris / 7% verde.

**[30-42 s]** «Mejor para ganar con calma no es mejor para correr. Con x5, la mejor pasa 3.5%… y revienta 4.7%.»
BOCETO: barra verde 3.5% y barra roja 4.7% que la supera; golpe de bajo + sacudida.

**[42-49 s]** «El video completo está en el canal, y el experimento #82 completo, en el enlace. Las mejores de 33,363: cero en el reto.»
BOCETO: texto final «Video completo en el canal · Experimento #82 completo en el enlace» + pequeño «No es asesoría financiera · El trading no se promete: se prueba». Loop: «cero en el reto» responde al «0.0%» del arranque.

---

## Descripción de YouTube (video largo)
https://atlas-lab-one.vercel.app/e/82?utm_source=youtube&utm_medium=video&utm_campaign=exp082-t2
Ficha del experimento #82: murió · sin apalancamiento pasan 0.0% de las ventanas · con x5, la mejor (RSI5 < 18) pasa 3.5% (21 ventanas) y revienta 4.7% (28 ventanas) · el 99% se queda sin llegar a tiempo con x5.
Explico cómo elegí las 50 mejores de 33,363 estrategias (por el peor de sus dos periodos fuera de muestra) y por qué ese criterio no responde a lo que pide un challenge tipo FTMO (+10%, caída máxima −10%, pérdida diaria −5%, 3 meses). De este experimento se conservan las métricas, no el script.
Contenido educativo. No es asesoría financiera ni recomendación de inversión.

## Descripción de YouTube (Short)
https://atlas-lab-one.vercel.app/e/82?utm_source=youtube&utm_medium=short&utm_campaign=exp082-t2
Ficha del experimento #82: murió · 0.0% pasan sin apalancamiento · con x5 la mejor pasa 3.5% y revienta 4.7%.
Contenido educativo. No es asesoría financiera.

## Capítulos
0:00 Gancho · 0:15 Qué es este experimento · 0:25 Cómo se eligieron las 50 · 1:20 Qué pide un challenge · 2:10 Lo que tienen en común · 3:05 Resultados · 3:55 «Mejor» depende de para qué · 4:40 Una limitación · 5:10 Con tu capital · 5:30 Conclusión · 5:50 Ficha del experimento

## Etiquetas
fondeo, prop firm, ftmo, challenge de fondeo, cuenta fondeada, sharpe ratio, fuera de muestra, apalancamiento, backtest, 33363 estrategias, atlas lab, trading con datos

## Rúbrica (autoevaluación, 1–5)
| Pieza | hook_0_3s | ritmo | promesa_cumplida | potencial_loop | claridad_no_traders | honestidad_atlas | audio | cta | Promedio |
|---|---|---|---|---|---|---|---|---|---|
| Largo | 4 | 4 | 5 | 4 | 4 | 5 | 4 | 4 | 4.3 |
| Short | 4 | 4 | 5 | 5 | 4 | 5 | 4 | 4 | 4.4 |

Hook ≥ 4 ✓ · honestidad 5 ✓. Punto débil: sin curva ni script, el visual depende de embudo, medidores y barras; hay que mostrar siempre la nota «sin script: resultado registrado». Las reglas son «tipo FTMO», no las reglas literales de ninguna empresa.

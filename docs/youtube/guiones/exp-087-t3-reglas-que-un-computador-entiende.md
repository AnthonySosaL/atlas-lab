# Experimento #87 — Tema 3: reglas que una computadora entiende (por qué este TikTok no se pudo probar)

Tema 3 de 3 del experimento #87 · Qué aporta frente a los otros temas: es el tema del método. Desmonta el TikTok pieza por pieza (qué es regla exacta y qué no), lo contrasta con dos reglas que sí se codifican en una línea (las de los experimentos 85 y 89) y da cuatro pasos para convertir una idea en algo que se pueda probar. El tema 1 cuenta el caso completo y el dato del #56; el tema 2 explica la tasa base.
Estado del guion: **BORRADOR — pendiente de aprobación**
Estado del experimento: **no concluyente** (no se pudo probar mecánicamente: 0 pruebas realizadas; lo relacionado, #56, no supera la tasa base) · Serie A — «Probé la estrategia de TikTok» (plan-series.md) · 1 largo corto (≈ 4.5 min, experimento sin estrategia medible) + 1 Short
Datos usados: `experiments.json` (v=87: kpis, metrics, verdict, analysis, notes, params_view, capital), `exp_details.json` (extra-v87: algo, filters; sin script), y los fragmentos de código `range_break` (#85) y `sweep_reversal` (#89) de sus fichas. No tiene `series/`.
Producción (CLAUDE.md del canal): b-roll real detrás de cada escena con overlay oscuro 0.6, Ken Burns alternando in/out, subtítulos karaoke en MAYÚSCULAS con palabras clave en rojo, un dato visual por escena, golpe de bajo + sacudida solo en 1–2 momentos. Colores: rojo `#e11d2a`, verde `#22c55e`, fondo `#09090b`. Cifras en dígitos aquí; en el campo `tts` del JSON, en palabras.

## Títulos (3 opciones)
1. Este TikTok tiene 3 reglas exactas y 3 piezas que faltan: 0 pruebas posibles
2. ¿Qué es una regla que una computadora entiende? El caso del breaker block
3. De la idea a la prueba en 4 pasos: por qué hay estrategias que no se pueden backtestear

## Miniatura (pensada para el título 1)
Fondo `#09090b`. Una balanza con tres piezas verdes («3 reglas») a un lado y tres piezas con signo de interrogación en rojo («3 faltan») al otro. Texto grande: «SIN PRUEBA» (2 palabras, sin repetir el título). Logo ATLAS arriba a la derecha.

---

## VIDEO LARGO (16:9, ≈ 4.5 min)

**[0:00 — Gancho]** (pantalla: «Pruebas realizadas: 0»)
Pruebas mecánicas de este TikTok: cero. No es falta de ganas: le faltan tres piezas que una computadora necesita para probarlo.
BOCETO: contador «Pruebas mecánicas realizadas: 0» (KPI de la ficha) en rojo sobre b-roll de pantallas de mercado (kb=in), overlay 0.6.

**[0:15 — Qué es este experimento]** (pantalla: rótulo con el número y el nombre)
Este es el experimento #87 de ATLAS Lab: TikTok 3, Noticias más Breaker Block. Todos los resultados están en la página del experimento.
BOCETO: rótulo en rojo y blanco «EXPERIMENTO #87» con el nombre debajo, sobre el contador atenuado (overlay 0.6). Whoosh corto. kb=out.

**[0:25 — Qué entiende una computadora]** (pantalla: una línea de código)
Una computadora entiende una regla cuando cada término está definido con números y da siempre la misma respuesta. Un ejemplo de mi laboratorio, la ruptura del rango: compra si el cierre supera el máximo de los N días previos. Una línea de código. Otro: la barrida, compra si el día barre el mínimo de los N días previos y cierra por encima de él. Otra línea. Ahí no hay nada que interpretar.
BOCETO: dos líneas de código en pantalla, la ruptura (`c > c.rolling(w).max().shift(1)`) y la barrida (`(l < prev_low) & (c > prev_low)`), con sus etiquetas «experimento 85» y «experimento 89». kb=in.

**[1:15 — El TikTok, pieza por pieza]** (pantalla: tabla de siete piezas)
Ahora, el TikTok. Tras una noticia de alto impacto, como el informe de empleo, las tasas o la inflación, dejas cerrar la vela diaria, buscas lo que llaman aceptación, y operas el breaker block del día previo con una orden limitada, el stop bajo el día anterior y una relación de riesgo a beneficio de 1 a 2. Pieza por pieza: ¿se puede escribir como regla exacta?
| Pieza del TikTok | ¿Regla exacta? |
|---|---|
| Esperar a que cierre la vela diaria | Sí |
| Stop bajo el mínimo del día anterior | Sí |
| Relación de riesgo a beneficio de 1 a 2 | Sí |
| Noticia de alto impacto (informe de empleo, tasas, inflación) | No: falta un calendario con fechas y horas |
| «Aceptación» | No: falta la definición exacta |
| «Breaker block» | No: falta la definición exacta |
| Orden limitada | Depende del breaker block, que no está definido |
BOCETO: tabla fila a fila; las tres primeras con ✓ verde, las cuatro siguientes con ✗ rojo o ámbar. Contadores «3 reglas» y «3 faltan». kb=out.

**[2:15 — Por qué faltan]** (pantalla: dos gráficos iguales con zonas distintas)
La aceptación y el breaker block son conceptos de ICT, un estilo discrecional de operar. Dibujan zonas sobre el gráfico según el criterio de quien las mira. Dos personas con el mismo gráfico dibujarían zonas distintas, y el resultado dependería de quién mira. Con un calendario de noticias que no tengo, y reglas exactas que no existen en el material, cualquier cifra sería una opinión, no un backtest.
BOCETO: dos mini-gráficos idénticos con zonas dibujadas distintas (ilustración, rotulada) y la etiqueta «mismo gráfico, dos resultados». kb=in.

**[2:55 — De la idea a la prueba, en cuatro pasos]** (pantalla: escalera)
Cuatro pasos para convertir una idea en algo probable. Uno: define cada término con números, sin palabras vagas. Dos: lista los datos que necesitas, como un calendario de noticias con fechas y horas. Tres: fija costos y rezago, es decir, que la señal se ejecute al día siguiente. Cuatro: prueba en épocas que no usaste para afinarla. Si fallas en el paso uno, no hay nada que probar.
BOCETO: escalera de cuatro peldaños numerados; el peldaño 1 en rojo con «aquí se queda el TikTok». kb=out.

**[3:35 — Qué no significa «no concluyente»]** (pantalla: dos cajas)
Una aclaración. No concluyente no significa que funcione, ni que no funcione: significa que no hay prueba. Sin reglas objetivas queda como narrativa, no como estrategia que se pueda validar.
BOCETO: dos cajas tachadas, «funciona» y «no funciona», y una caja ámbar iluminada, «sin prueba».

**[3:55 — Con tu capital]** (pantalla: tarjeta vacía)
La tarjeta «Con tu capital» queda sin cifras: no hay curva porque no hay prueba.
BOCETO: tarjeta de capital con el texto de `capital.note` y un «—» grande.

**[4:05 — Conclusión]**
Resultado: no concluyente. Tres reglas exactas no bastan si faltan tres piezas. Para probar una estrategia primero hay que poder escribirla. El trading no se promete: se prueba.

**[4:25 — Ficha del experimento #87]** (pantalla: tarjeta con la ficha y la URL)
Ficha del experimento #87. Estado: no concluyente. Cifra clave: 0 pruebas mecánicas; el TikTok tiene 3 reglas exactas y le faltan 3 piezas. Filtro que decidió: ninguno se pudo aplicar, sin calendario de noticias ni definiciones exactas de aceptación y breaker block. Lección: para probar una estrategia primero hay que poder escribirla. Revísalo completo en atlas-lab-one.vercel.app/e/87.
BOCETO: tarjeta con el número «#87», el sello «NO CONCLUYENTE» en ámbar, tres líneas (cifra clave, filtro que decidió, lección) y la URL `atlas-lab-one.vercel.app/e/87` grande abajo. kb=in.

**[4:45 — Cierre]**
Todos los datos en atlas-lab-one.vercel.app, experimento 87. Contenido educativo, no es asesoría financiera.

---

## SHORT (9:16, ≈ 48 s)

**[0-3 s]** «Esta estrategia de TikTok no se puede probar. Pruebas realizadas: cero.»
BOCETO: contador «0 pruebas» rojo gigante sobre b-roll de pantallas de mercado (kb=in), overlay 0.6.

**[3-15 s]** «Una computadora necesita reglas exactas. Esta es una: comprar si el cierre supera el máximo de los últimos días. Una línea de código.»
BOCETO: línea de código de la ruptura con tick verde (kb=out); ticker arriba.

**[15-30 s]** «El TikTok tiene tres reglas exactas: esperar que cierre la vela, stop bajo el día anterior y relación de 1 a 2. Pero faltan tres piezas: el calendario de noticias, qué es aceptación y qué es un breaker block.»
BOCETO: tabla de tres ✓ verdes y tres ✗ rojas que aparecen con tick.

**[30-43 s]** «Si dos personas dibujan zonas distintas en el mismo gráfico, no hay backtest: hay opinión.»
BOCETO: dos gráficos idénticos con zonas distintas y un «≠» entre ellos; golpe de bajo + sacudida.

**[43-48 s]** «El video completo está en el canal, y el experimento #87 completo, en el enlace. Sin reglas exactas, cero pruebas.»
BOCETO: texto final «Video completo en el canal · Experimento #87 completo en el enlace» + pequeño «No es asesoría financiera · El trading no se promete: se prueba». Loop: «cero pruebas» responde al hook.

---

## Descripción de YouTube (video largo)
https://atlas-lab-one.vercel.app/e/87?utm_source=youtube&utm_medium=video&utm_campaign=exp087-t3
Ficha del experimento #87: no concluyente · 0 pruebas mecánicas · el TikTok tiene 3 reglas exactas (cierre de la vela diaria, stop bajo el día anterior, ratio 1:2) y le faltan 3 piezas (calendario de noticias, «aceptación» y «breaker block»).
Explico qué es una regla que una computadora entiende y cuatro pasos para convertir una idea en algo que se pueda probar, con dos reglas reales del laboratorio como ejemplo (experimentos 85 y 89).
Contenido educativo. No es asesoría financiera ni recomendación de inversión.

## Descripción de YouTube (Short)
https://atlas-lab-one.vercel.app/e/87?utm_source=youtube&utm_medium=short&utm_campaign=exp087-t3
Ficha del experimento #87: no concluyente · 0 pruebas mecánicas · faltan el calendario de noticias y las reglas exactas de «aceptación» y «breaker block».
Contenido educativo. No es asesoría financiera.

## Capítulos
0:00 Gancho · 0:15 Qué es este experimento · 0:25 Qué entiende una computadora · 1:15 El TikTok pieza por pieza · 2:15 Por qué faltan · 2:55 Cuatro pasos · 3:35 Qué no significa · 3:55 Con tu capital · 4:05 Conclusión · 4:25 Ficha del experimento

## Etiquetas
reglas objetivas, backtest, breaker block, ict, trading discrecional, trading de noticias, estrategia de tiktok, programar una estrategia, probar una estrategia, atlas lab, trading con datos, no concluyente

## Rúbrica (autoevaluación, 1–5)
| Pieza | hook_0_3s | ritmo | promesa_cumplida | potencial_loop | claridad_no_traders | honestidad_atlas | audio | cta | Promedio |
|---|---|---|---|---|---|---|---|---|---|
| Largo | 4 | 4 | 4 | 4 | 4 | 5 | 4 | 4 | 4.1 |
| Short | 4 | 4 | 4 | 5 | 4 | 5 | 4 | 4 | 4.2 |

Hook ≥ 4 ✓ · honestidad 5 ✓. Punto débil: el experimento no tiene curva ni cifras propias; el tema se sostiene por el método (tabla de reglas contra piezas que faltan) y por el contador de 0 pruebas. La clasificación de «cierre de la vela diaria» como regla exacta es del guion.

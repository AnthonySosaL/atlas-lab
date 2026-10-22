# Experimento #87 — TikTok 3: Noticias + Breaker Block (ICT)

Estado del guion: **BORRADOR — pendiente de aprobación**
Estado del experimento: **no concluyente** (no se pudo probar mecánicamente: 0 pruebas realizadas; lo relacionado, #56, no supera la tasa base) · Serie A — «Probé la estrategia de TikTok» (plan-series.md) · 1 largo corto (≈ 5 min, experimento sin estrategia medible) + 1 Short
Datos usados: `experiments.json` (v=87: kpis, metrics, verdict, analysis, chart, capital, period), `exp_details.json` (extra-v87: algo, filters; sin script). No tiene `series/` (la ficha dice que no hay curva de capital). El único dato medido es del #56 (sentimiento), citado en este experimento.
Producción (CLAUDE.md del canal): b-roll real detrás de cada escena con overlay oscuro 0.6, Ken Burns alternando in/out, subtítulos karaoke en MAYÚSCULAS con palabras clave en rojo, un dato visual por escena, golpe de bajo + sacudida solo en 1–2 momentos. Colores: rojo `#e11d2a`, verde `#22c55e`, fondo `#09090b`. Cifras en dígitos aquí; en el campo `tts` del JSON, en palabras.

## Títulos (3 opciones)
1. Noticias + «breaker block» de TikTok: 0 pruebas mecánicas
2. ¿Se puede backtestear el «dinero institucional»? Pruebas: 0
3. Sin reglas exactas, 0 pruebas: el TikTok del breaker block

## Miniatura (pensada para el título 1)
Fondo `#09090b`. Un signo de interrogación enorme en blanco y, dentro de él, un gráfico de velas difuminado. Texto: «SIN REGLAS» en rojo (2 palabras; sin repetir el título). Logo ATLAS arriba a la derecha.

---

## VIDEO LARGO (16:9, ≈ 5 min)

**[0:00 — Gancho]** (pantalla: «Pruebas realizadas: 0»)
Un TikTok dice que se pueden operar las noticias como lo hace el dinero institucional. Quise probarlo con los mismos cinco filtros de siempre. Pruebas mecánicas realizadas: cero. Y la razón de ese cero es lo más útil de este video.
BOCETO: contador «Pruebas mecánicas realizadas: 0» (KPI de la ficha) en rojo sobre b-roll de pantallas de noticias financieras (kb=in), overlay 0.6.

**[0:35 — La estrategia]** (pantalla: línea de tiempo de una noticia)
La idea es esta. Hay una noticia de alto impacto, como el informe de empleo de Estados Unidos, las tasas o la inflación. Dejas que cierre la vela diaria. Buscas lo que llaman aceptación: que el precio se acumule sin romper el máximo ni el mínimo de la vela de la noticia. Y entonces operas el breaker block del día previo, con una orden limitada, el stop bajo el día anterior y una relación de riesgo a beneficio de 1 a 2.
BOCETO: línea de tiempo ilustrativa (rotulada «ilustración»): noticia → cierre de la vela diaria → «aceptación» → entrada limitada con stop bajo el día previo. kb=out.

**[1:30 — Por qué no se pudo probar]** (pantalla: checklist «¿se puede probar?»)
Probar una estrategia exige reglas que una computadora aplique siempre igual. Aquí faltan dos cosas. Una: un calendario de noticias con fechas y horas. Dos: reglas exactas de qué es la aceptación y qué es un breaker block. Son conceptos de ICT, un estilo discrecional: dos personas dibujarían zonas distintas sobre el mismo gráfico. Sin reglas objetivas, cualquier resultado dependería de quién mira. Eso no es un backtest, es una opinión.
BOCETO: checklist de `filters`: ✗ reglas exactas de «aceptación»; ✗ definición exacta de «breaker block»; ✗ calendario de noticias; ✓ stop y relación 1:2 (esas sí son reglas). Dos mini-gráficos idénticos con zonas dibujadas distintas (ilustración).

**[2:30 — Lo más cercano que sí medí]** (pantalla: barras del experimento #56)
Lo más cercano que sí medí fue otra pregunta: si el sentimiento del mercado, con el VIX, sus plazos, el crédito, el dólar y el oro, ayuda a adivinar la dirección. Fue el experimento 56, en cuatro formas. Acertaron la dirección entre 55% y 58% de las veces, 57% en promedio. La tasa base, que es lo que aciertas sin ninguna información, repitiendo siempre lo más frecuente, es 61.3%. Ninguna la supera. Ojo: eso no prueba ni descarta operar noticias, porque no se probaron noticias ni titulares.
| Experimento #56 | Acierto de dirección |
|---|---|
| Tasa base | 61.3% |
| Mejor forma de sentimiento | 58% |
| Promedio de las 4 formas | 57% |
| Peor forma de sentimiento | 55% |
BOCETO: barras del `chart` de la ficha (tasa base en gris de referencia, las tres de sentimiento en rojo por debajo). Cartel ámbar: «Esto es el #56, no es una prueba de noticias». Golpe de bajo cuando se ve 61.3%.

**[3:30 — Con tu capital]** (pantalla: tarjeta de capital vacía)
La tarjeta «Con tu capital» queda sin cifras: no hay curva porque no hay prueba. Cualquier número en dólares que alguien te muestre de este método, sin reglas exactas ni datos, no se puede comprobar.
BOCETO: tarjeta de capital con el texto de `capital.note` y un «—» grande.

**[3:55 — Qué mirar cuando ves una estrategia así]** (pantalla: cuatro preguntas)
Mi regla práctica, cuatro preguntas. Primera: ¿tiene reglas que una computadora pueda aplicar igual cada vez? Segunda: ¿dice en qué datos y periodo se probó? Tercera: ¿incluye costos? Cuarta: ¿muestra qué pasó en periodos que nunca vio? Si falla la primera, ya no hay nada que probar.
BOCETO: cuatro casillas que se marcan una a una; la primera queda en rojo con ✗ «sin reglas, no hay backtest». kb=in.

**[4:30 — Conclusión]**
Resultado: no concluyente. No concluyente no significa que funcione: significa que sin reglas objetivas queda como narrativa, no como una estrategia que se pueda validar. El trading no se promete: se prueba.

**[4:55 — Cierre]**
Todos los datos en atlas-lab-one.vercel.app, experimento 87. Contenido educativo, no es asesoría financiera.

---

## SHORT (9:16, ≈ 45 s)

**[0-3 s]** «Esta estrategia de TikTok no se puede probar. Pruebas realizadas: cero.»
BOCETO: contador «0 pruebas» rojo gigante sobre b-roll de noticias financieras (kb=in), overlay 0.6.

**[3-14 s]** «Operar noticias como el dinero institucional: dejar cerrar la vela, buscar aceptación y entrar en un breaker block.»
BOCETO: línea de tiempo noticia → vela → zona de entrada (kb=out); ticker arriba.

**[14-28 s]** «Faltan dos cosas: un calendario de noticias y reglas exactas de qué es aceptación y qué es un breaker block. Sin reglas, no hay backtest.»
BOCETO: checklist con tres ✗ rojas que aparecen con tick; dos gráficos iguales con zonas distintas.

**[28-41 s]** «Lo más cercano que medí: el sentimiento acierta la dirección el 57% de las veces. La tasa base es 61.3%. Ni eso la supera.»
BOCETO: barra 57% roja contra línea 61.3%; golpe de bajo + sacudida en 61.3%. Cartel «#56, no es prueba de noticias».

**[41-45 s]** «El video completo está en el canal. Pruebas: cero. Y eso ya es parte de la respuesta.»
BOCETO: «0» rojo; texto final «Video completo en el canal» + pequeño «No es asesoría financiera · El trading no se promete: se prueba». Loop: «cero» vuelve al hook.

---

## Descripción de YouTube
Un TikTok propone operar noticias de alto impacto con el «breaker block» de ICT. No se puede probar mecánicamente: faltan un calendario de noticias y reglas exactas de «aceptación» y «breaker block», así que hay 0 pruebas. Lo más cercano que sí medí (experimento 56): el sentimiento de mercado acierta la dirección 57% de las veces, por debajo de la tasa base de 61.3%.
Datos completos: https://atlas-lab-one.vercel.app (experimento #87)
Contenido educativo. No es asesoría financiera ni recomendación de inversión.

## Capítulos
0:00 Gancho · 0:35 La estrategia · 1:30 Por qué no se pudo probar · 2:30 Lo más cercano que medí · 3:30 Con tu capital · 3:55 Qué mirar · 4:30 Conclusión

## Etiquetas
breaker block, ict, trading de noticias, backtest, reglas objetivas, estrategia de tiktok, dinero institucional, sentimiento de mercado, vix, tasa base, atlas lab, trading con datos

## Rúbrica (autoevaluación, 1–5)
| Pieza | hook_0_3s | ritmo | promesa_cumplida | potencial_loop | claridad_no_traders | honestidad_atlas | audio | cta | Promedio |
|---|---|---|---|---|---|---|---|---|---|
| Largo | 4 | 4 | 4 | 3 | 4 | 5 | 4 | 4 | 4.0 |
| Short | 4 | 4 | 4 | 4 | 4 | 5 | 4 | 4 | 4.1 |

Hook ≥ 4 ✓ · honestidad 5 ✓. Datos justos: es el experimento más débil de la tanda (no hay prueba propia ni curva). Se sostiene por el método («sin reglas no hay backtest») y por el único dato medido, que es del #56; ese dato debe llevar siempre el cartel «no es una prueba de noticias».

## Otros temas de este experimento
Cada tema es un video largo más un Short, con el mismo formato y las mismas reglas que el tema 1; cada uno se puede ver solo.
1. `exp-087-tiktok-noticias-breaker-block.md` — Tema 1: Noticias + «breaker block» de TikTok: 0 pruebas mecánicas
2. `exp-087-t2-tasa-base-61-3.md` — Tema 2: Acertar el 57% suena bien, pero la tasa base es 61.3%: qué significa
3. `exp-087-t3-reglas-que-un-computador-entiende.md` — Tema 3: Este TikTok tiene 3 reglas exactas y 3 piezas que faltan: 0 pruebas posibles

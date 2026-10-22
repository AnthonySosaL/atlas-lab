# Experimento #90 — Tema 4: código no conservado, cifras reproducidas (qué se puede y qué no se puede verificar)

Tema 4 de 4 del experimento #90 · Qué aporta frente a los otros temas: es el tema de la transparencia. Explica qué significa que el script original no se conserve, qué se verifica (las cifras publicadas se reproducen al dólar) y qué no (periodos, umbrales y costos), y da tres preguntas para leer cualquier backtest sin código. Es el tema más fiel a la identidad del canal: se publica también lo que no se puede comprobar. El tema 1 cuenta el resultado completo; el tema 2 explica beta contra alfa; el tema 3 compara la misma regla en dos mercados.
Estado del guion: **BORRADOR — pendiente de aprobación**
Estado del experimento: **parcial** (la tendencia sí gana dinero en índices, +$10.9k a +$14.8k sobre $10k, pero ninguna estrategia supera a comprar y esperar, +$29,368) · Serie A — «Probé la estrategia de TikTok» (plan-series.md) · 1 largo + 1 Short
Datos usados: `experiments.json` (v=90: kpis, metrics, chart, verdict, capital.note, period), `exp_details.json` (extra-v90: algo, filters; `code.src` es null), `series/extra-v90.json` (7 curvas), tabla «Con tu capital» de `docs/youtube`. Se citan los experimentos 82 y 87 como otros casos sin script, según sus fichas.
Producción (CLAUDE.md del canal): b-roll real detrás de cada escena con overlay oscuro 0.6, Ken Burns alternando in/out, subtítulos karaoke en MAYÚSCULAS con palabras clave en rojo, un dato visual por escena, golpe de bajo + sacudida solo en 1–2 momentos. Colores: rojo `#e11d2a`, verde `#22c55e`, fondo `#09090b`. Cifras en dígitos aquí; en el campo `tts` del JSON, en palabras.

## Títulos (3 opciones)
1. Código no conservado, cifras reproducidas al dólar: ¿basta? Experimento 90
2. +$29,368, +$14,814, −$424, +$353, +$707: lo que sí y lo que no se puede verificar
3. Cómo leer un backtest sin código: tres preguntas y un caso real

## Miniatura (pensada para el título 1)
Fondo `#09090b`. Un archivo de código tachado con un candado ámbar y, al lado, cinco cifras verdes con un tick: «+29,368 · +14,814 · −424 · +353 · +707». Texto grande: «¿BASTA?» (1 palabra, sin repetir el título). Logo ATLAS arriba a la derecha.

---

## VIDEO LARGO (16:9, ≈ 5.5 min)

**[0:00 — Gancho]** (pantalla: archivo de código tachado y cinco cifras)
El código original de este experimento no se conserva. Las curvas se rehicieron y reproducen al dólar +29,368, +14,814, −424, +353 y +707. Reproducir las cifras no basta para fiarse. Te explico por qué.
BOCETO: icono de archivo de código con una ✕; debajo, cinco cifras con tick verde que aparecen una a una. kb=in.

**[0:15 — Qué es este experimento]** (pantalla: rótulo con el número y el nombre)
Este es el experimento #90 de ATLAS Lab: ¿Cambia en índices? Nasdaq, S&P 500, DAX y FTSE. Todos los resultados están en la página del experimento.
BOCETO: rótulo en rojo y blanco «EXPERIMENTO #90» con el nombre debajo, sobre el archivo atenuado (overlay 0.6). Whoosh corto. kb=out.

**[0:25 — Qué pasó]** (pantalla: nota de la ficha)
Probé en el S&P 500, el Nasdaq 100, el DAX y el FTSE 100, de 2012 a 2024, tendencias clásicas y los núcleos de tres TikToks, con 10,000 dólares. Los resultados se publicaron. Pero el script original no se conserva. Lo digo tal cual en la ficha del experimento: las curvas se rehicieron con parámetros reconstruidos.
BOCETO: captura de la nota `capital.note` de la ficha, resaltada: «El código original de este experimento no se conserva. Las curvas se rehicieron con parámetros reconstruidos». kb=in.

**[1:05 — Qué significa «reconstruidos»]** (pantalla: ajuste de parámetros)
Reconstruir significa buscar parámetros que reproduzcan las cifras ya publicadas: comprar y esperar, +29,368; las tendencias, entre +10,878 y +14,814; y los setups, −424, +353 y +707. Y reproducen cada cifra al dólar. Pero ojo: que unos parámetros reproduzcan una cifra no prueba que sean los originales. Muchas combinaciones podrían dar el mismo número.
BOCETO: una perilla de parámetros que se ajusta hasta que la curva toca una cifra objetivo; tick verde; al lado, una interrogación sobre «¿son los originales?». Etiqueta gris «reconstruidos, no originales». kb=out.

**[1:55 — Lo que sí se puede verificar]** (pantalla: checklist verde)
Qué sí se puede verificar. Primero, las cifras publicadas: las curvas las reproducen. Segundo, comprar y esperar los cuatro índices, que es la referencia: +29,368 con un Sharpe de 0.67, y cualquiera puede calcularlo con datos públicos de esos índices. Tercero, el resultado central: las curvas muestran que ninguna de las seis estrategias llega a esa referencia, la mejor con +14,814.
BOCETO: checklist de tres líneas con ✓ verde. kb=in.

**[2:40 — Lo que no se puede verificar]** (pantalla: checklist ámbar)
Y qué no. Los periodos que se usaron para afinar cada regla. Los umbrales exactos. Los costos de operación. La ficha de la prueba lo dice: sin script original, los periodos y umbrales no son verificables, y los costos tampoco. La descripción original habla de un Sharpe positivo en tres periodos para la tendencia, pero no puedo mostrarte ese cálculo. Por eso el estado del experimento es parcial.
BOCETO: checklist de cuatro líneas con candado ámbar: periodos, umbrales, costos, «Sharpe positivo en 3 periodos». Sello «PARCIAL». kb=out.

**[3:25 — Por qué lo cuento]** (pantalla: tres experimentos con nota)
Porque el canal publica también lo que no se puede comprobar. Hay otros casos en el programa. En el experimento 82, las 50 mejores en un challenge de fondeo, se conservan las métricas pero no el script. En el 87, el breaker block, no se pudo probar. Cada ficha lo dice, y cada guion lo repite. Un resultado que oculta sus límites te enseña una versión mejorada de sí mismo.
BOCETO: tres tarjetas con candado ámbar: «#90 · código no conservado», «#82 · sin script», «#87 · sin reglas exactas». kb=in.

**[4:00 — Tres preguntas para un backtest sin código]** (pantalla: checklist)
Cuando veas un backtest sin código, tres preguntas. Una: ¿se puede reproducir con datos y reglas exactas? Dos: ¿dice qué periodos y qué costos usó? Tres: ¿compara contra comprar y esperar el mismo mercado y periodo? La tercera es la más fácil de comprobar tú mismo, y suele ser la que más pesa.
BOCETO: tres casillas que se marcan; la tercera se resalta con «+$29,368» como ejemplo. kb=out.

**[4:35 — Con tu capital]** (pantalla: tarjeta de capital con advertencia)
Con 10,000 dólares, la mejor tendencia gana +14,814 y comprar y esperar, +29,368. Con 100,000 dólares, esa escala es +148,140 contra +293,680; los setups serían −4,240 la ruptura, +3,530 la barrida y +7,070 el volumen. Recuerda la advertencia: las curvas usan parámetros reconstruidos.
BOCETO: barras del `chart` de la ficha («Ganancia 2012–2024 escalada a $100,000»). Cartel ámbar con `capital.note`.

**[5:00 — Conclusión]**
Resultado parcial: la tendencia gana dinero en índices, pero ninguna estrategia supera a comprar y esperar. Y lo publico con su límite: sin el código original, hay cifras que reproduzco y cosas que no puedo verificar. El trading no se promete: se prueba.

**[5:20 — Ficha del experimento #90]** (pantalla: tarjeta con la ficha y la URL)
Ficha del experimento #90. Estado: parcial. Cifra clave: comprar y esperar gana +29,368 sobre 10,000 en índices; la mejor tendencia, +14,814. Filtro que decidió: 0 estrategias superan a comprar y esperar; los periodos y costos no son verificables sin el código original. Lección: reproducir una cifra no prueba que los parámetros sean los originales. Revísalo completo en atlas-lab-one.vercel.app/e/90.
BOCETO: tarjeta con el número «#90», el sello «PARCIAL» en ámbar, tres líneas (cifra clave, filtro que decidió, lección) y la URL `atlas-lab-one.vercel.app/e/90` grande abajo. kb=in.

**[5:40 — Cierre]**
Todos los datos en atlas-lab-one.vercel.app, experimento 90. Contenido educativo, no es asesoría financiera.

---

## SHORT (9:16, ≈ 49 s)

**[0-3 s]** «El código de este experimento no se conserva. Las cifras se reprodujeron al dólar. ¿Basta?»
BOCETO: archivo de código tachado y cinco cifras con tick, sobre b-roll de pantallas de índices (kb=in), overlay 0.6.

**[3-15 s]** «Rehice las curvas con parámetros reconstruidos. Comprar y esperar: más 29,368. Tendencia: más 14,814. Los setups de TikTok: menos 424, más 353 y más 707.»
BOCETO: cinco cifras que aparecen con tick (kb=out); ticker arriba.

**[15-30 s]** «Pero que unos parámetros reproduzcan una cifra no prueba que sean los originales. Y los periodos y los costos no se pueden verificar.»
BOCETO: candado ámbar sobre «periodos · umbrales · costos»; golpe de bajo + sacudida.

**[30-43 s]** «Por eso el resultado es parcial, y lo digo. Frente a un backtest sin código: ¿se reproduce? ¿qué periodos y costos usó? ¿le gana a comprar y esperar?»
BOCETO: tres casillas que se marcan; sello «PARCIAL».

**[43-49 s]** «El video completo está en el canal, y el experimento #90 completo, en el enlace. Reproducir la cifra no basta.»
BOCETO: texto final «Video completo en el canal · Experimento #90 completo en el enlace» + pequeño «No es asesoría financiera · El trading no se promete: se prueba». Loop: «no basta» responde al «¿Basta?» del arranque.

---

## Descripción de YouTube (video largo)
https://atlas-lab-one.vercel.app/e/90?utm_source=youtube&utm_medium=video&utm_campaign=exp090-t4
Ficha del experimento #90: parcial · el código original no se conserva; las curvas usan parámetros reconstruidos que reproducen al dólar las cifras publicadas: comprar y esperar +$29,368, tendencias de +$10,878 a +$14,814, setups de TikTok −$424, +$353 y +$707 (sobre $10,000, 2012–2024) · 0 estrategias superan a comprar y esperar.
Explico qué se puede y qué no se puede verificar cuando falta el código de un backtest, y tres preguntas para leer cualquiera: ¿se reproduce?, ¿qué periodos y costos usó?, ¿le gana a comprar y esperar? Periodos, umbrales y costos de esta prueba no son verificables.
Contenido educativo. No es asesoría financiera ni recomendación de inversión.

## Descripción de YouTube (Short)
https://atlas-lab-one.vercel.app/e/90?utm_source=youtube&utm_medium=short&utm_campaign=exp090-t4
Ficha del experimento #90: parcial · código original no conservado; cifras reproducidas con parámetros reconstruidos (+$29,368 comprar y esperar, +$14,814 la mejor tendencia) · periodos y costos no verificables.
Contenido educativo. No es asesoría financiera.

## Capítulos
0:00 Gancho · 0:15 Qué es este experimento · 0:25 Qué pasó · 1:05 Qué significa «reconstruidos» · 1:55 Lo que sí se verifica · 2:40 Lo que no · 3:25 Por qué lo cuento · 4:00 Tres preguntas · 4:35 Con tu capital · 5:00 Conclusión · 5:20 Ficha del experimento

## Etiquetas
backtest sin código, reproducibilidad, transparencia, verificar un backtest, parámetros reconstruidos, trading en índices, comprar y mantener, beta contra alfa, estrategias de tiktok, atlas lab, trading con datos, parcial

## Rúbrica (autoevaluación, 1–5)
| Pieza | hook_0_3s | ritmo | promesa_cumplida | potencial_loop | claridad_no_traders | honestidad_atlas | audio | cta | Promedio |
|---|---|---|---|---|---|---|---|---|---|
| Largo | 4 | 4 | 5 | 4 | 4 | 5 | 4 | 4 | 4.3 |
| Short | 4 | 4 | 5 | 5 | 4 | 5 | 4 | 4 | 4.4 |

Hook ≥ 4 ✓ · honestidad 5 ✓. Punto débil: es un tema de método con pocas cifras nuevas; se sostiene en las cinco cifras reproducidas y en el candado ámbar de lo no verificable. Se dice qué parte del resultado sí se puede comprobar con datos públicos (comprar y esperar) y qué no. Todo lo que se afirma sobre el estado del código sale de la ficha.

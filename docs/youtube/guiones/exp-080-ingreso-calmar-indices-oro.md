# Experimento #80 — Estrategia de ingreso óptima por Calmar (índices + oro)

Estado del guion: **BORRADOR — pendiente de aprobación**
Estado del experimento: **parcial** (la exposición por tendencia B3 rinde casi igual que comprar y esperar con menos drawdown, pero es beta gestionada, no ventaja) · Serie E — «Gestión de riesgo: lo poco que se sostuvo» (plan-series.md) · 1 largo + 1 Short
Datos usados: `experiments.json` (v=80: kpis, metrics, verdict, analysis, market, capital, period), `exp_details.json` (extra-v80: algo, code, filters), `series/extra-v80.json` (1.ª curva = B3, exposición por tendencia hasta 2x; 2.ª = «Sin estrategia»), tabla «Con tu capital» de `docs/youtube` (con su advertencia).
Producción (CLAUDE.md del canal): b-roll real detrás de cada escena con overlay oscuro 0.6, Ken Burns alternando in/out, subtítulos karaoke en MAYÚSCULAS con palabras clave en rojo, un dato visual por escena, golpe de bajo + sacudida solo en 1–2 momentos. Colores: rojo `#e11d2a`, verde `#22c55e`, fondo `#09090b`. Cifras en dígitos aquí; en el campo `tts` del JSON, en palabras.

## Títulos (3 opciones)
1. Mismo retorno, menos caída: +11.2% contra +11.0% (¿ventaja?)
2. ¿Se puede vivir de retiros? Probé 5 estrategias en índices y oro
3. Exposición por tendencia: Calmar 0.43 contra 0.36, con una trampa

## Miniatura (pensada para el título 1)
Fondo `#09090b`. Dos curvas casi pegadas, una verde y una blanca; entre ellas, texto rojo grande: «−26% / −31%» (la caída máxima de cada una). Un candado ámbar con «2x» en una esquina como aviso. Logo ATLAS arriba a la derecha.

---

## VIDEO LARGO (16:9, ≈ 7 min)

**[0:00 — Gancho]** (pantalla: dos curvas casi iguales)
Una estrategia que rinde +11.2% al año, contra +11.0% de comprar y esperar. Casi lo mismo. Pero con una caída máxima de −26% en vez de −31%. Menos dolor, igual de ganancia. Suena a ventaja, ¿no? Te cuento por qué no lo es.
BOCETO: dos curvas reales superpuestas de `series/extra-v80.json` (B3 verde, «Sin estrategia» blanca) dibujándose; contadores «+11.2%» y «+11.0%»; al final, marcas rojas en sus puntos más bajos: «−26%» y «−31%». kb=in.

**[0:20 — Presentación]** (pantalla: rótulo «Experimento #80 · Estrategia de ingreso óptima por Calmar (índices + oro)»)
Este es el experimento #80 de ATLAS Lab: estrategia de ingreso óptima por Calmar, índices y oro. Todos los resultados están en la página del experimento.
BOCETO: rótulo en rojo y blanco «EXPERIMENTO #80» con el nombre debajo, sobre la última imagen del gancho atenuada (overlay 0.6); whoosh corto; logo en la esquina.

**[0:35 — La pregunta]** (pantalla: texto)
Quiero vivir de retiros: sacar dinero cada año mientras la cartera sigue creciendo. Para eso miro dos cosas: el Calmar, que es el retorno anual dividido entre la caída máxima, y el retiro anual máximo sostenible, es decir, la mayor tasa de retiro con la que la cartera no se agota y conserva al menos la mitad del capital.
BOCETO: dos tarjetas con las definiciones: «Calmar = retorno ÷ caída máxima» y «Retiro sostenible = el mayor % anual que no agota la cartera y conserva ≥ 50%».

**[1:30 — Cómo lo probé]** (pantalla: cinco contendientes y advertencias)
Cinco activos: S&P 500, Nasdaq 100, DAX, FTSE 100 y oro, de 2012 a 2024. Cinco contendientes: comprar y esperar; Faber, comprado sobre la media de 200 días; Turtle; una combinación 50/50; y una exposición por tendencia a la que llamo B3: comprar y esperar multiplicado por 2 y por la fracción de activos que están sobre su media de 200 días, entre 0 y 2 veces. El indicador va rezagado un día. Faber y Turtle pagan 3 puntos básicos. Atención: B3 no incluye costos ni el financiamiento de ese apalancamiento de 2x, y no hay prueba fuera de muestra ni Deflated Sharpe.
BOCETO: cinco tarjetas; la de B3 con un candado ámbar «2x · sin costos ni financiamiento». Checklist `filters`: ✓ rezago 1 día; costos «B3 sin costos» en ámbar; fuera de muestra y DSR en gris «no aplicado».

**[2:40 — Resultados]** (pantalla: tabla animada)
B3 crece +11.2% al año contra +11.0% de comprar y esperar, con caída de −26% contra −31%. Su Calmar: 0.43 contra 0.36. Pero el Sharpe baja, 0.67 contra 0.76, y el retiro sostenible también: 10.0% contra 12.0% al año. Turtle y Faber tienen mejor Calmar, 0.56 y 0.45, con una caída de apenas −7% en Turtle. A cambio ganan mucho menos: +4.2% y +5.5% al año, y sostienen retiros de 6% y 7%.
| | Crecimiento anual | Caída máxima | Calmar | Sharpe | Retiro sostenible |
|---|---|---|---|---|---|
| B3 (exposición por tendencia) | +11.2% | −26% | 0.43 | 0.67 | 10.0% |
| Comprar y esperar | +11.0% | −31% | 0.36 | 0.76 | 12.0% |
| Turtle | +4.2% | −7% | 0.56 | — | 6% |
| Faber | +5.5% | — | 0.45 | — | 7% |
BOCETO: tabla fila a fila; las celdas donde B3 gana en verde y donde pierde (Sharpe, retiro) en rojo. kb=out.

**[3:50 — Por qué es beta y no ventaja]** (pantalla: texto y checklist)
B3 mejora el Calmar recortando un poco la caída sin perder retorno. Eso es útil. Pero no mejora el Sharpe y sostiene menos retiro que simplemente comprar y esperar. No es alfa, es beta gestionada: sigues expuesto al mercado, solo que con un cinturón. Y hay tres avisos. Uno: usa apalancamiento de hasta 2x. Dos: no incluye costos ni financiamiento. Tres: su regla ya murió en el triple test del experimento 62, con un Sharpe fuera de muestra de −0.03 y un Deflated Sharpe de 0.20 sobre la cesta de divisas y oro.
BOCETO: checklist `filters`: ✓ Calmar 0.43 > 0.36; ✗ Sharpe 0.67 < 0.76 y retiro 10.0% < 12.0%; ✗ «la regla ya fracasó en la triple prueba del #62». Golpe de bajo en el último ✗.

**[4:55 — Con tu capital]** (pantalla: tarjeta de capital con advertencia)
Con 100,000 dólares entre 2012 y 2024, B3 gana 297,399 y comprar y esperar gana 286,540. Con 10,000 dólares serían unos +29,740 contra +28,654. Pero ojo con el cartel: esta curva usa apalancamiento de hasta 2x y no incluye costos de operación ni el financiamiento de ese apalancamiento. En la vida real el resultado sería menor.
BOCETO: curvas reales de `series/extra-v80.json`; cartel ámbar fijo: «Sin costos ni financiamiento del 2x · en real sería menor» (texto de `capital.note`).

**[5:50 — Conclusión]**
Resultado parcial. Para vivir de retiros la clave es el Calmar, y B3 lo mejora sin perder retorno. Pero sostiene menos retiro, no mejora el Sharpe y es beta gestionada. Sirve como un plan de ingreso sensato, no como una ventaja. El trading no se promete: se prueba.

**[6:30 — Ficha del experimento #80]** (pantalla: tarjeta con la ficha y la URL abajo)
Ficha del experimento 80. Estado: parcial. Cifra clave: la exposición por tendencia B3 rinde +11.2% anual contra +11.0% de comprar y esperar, con caída máxima de −26% contra −31%. Filtro que decidió: B3 no mejora el Sharpe, 0.67 contra 0.76, ni el retiro sostenible, 10.0% contra 12.0%. Lección: es beta gestionada, no ventaja. Revísalo completo en atlas-lab-one.vercel.app/e/80.
BOCETO: tarjeta con el número «#80», el sello «PARCIAL» en ámbar y cuatro líneas (estado, cifra clave, lo que decidió, lección) que entran con tick; al final, la URL «atlas-lab-one.vercel.app/e/80» grande y resaltada en verde. kb=in.

**[6:55 — Cierre]**
Todos los datos en atlas-lab-one.vercel.app/e/80. Contenido educativo, no es asesoría financiera.

---

## SHORT (9:16, ≈ 45 s)

**[0-3 s]** «+11.2% contra +11.0%, con menos caída. ¿Ventaja?»
BOCETO: dos números gigantes (verde y blanco) sobre b-roll de bolsa (kb=in), overlay 0.6.

**[3-14 s]** «Probé una estrategia de ingreso en cuatro índices y oro: comprar y esperar, multiplicado por 2 cuando los activos están en tendencia.»
BOCETO: curvas reales de B3 y «Sin estrategia» dibujándose (kb=out).

**[14-28 s]** «Caída máxima: −26% contra −31%. Calmar: 0.43 contra 0.36. Pero el Sharpe baja de 0.76 a 0.67 y el retiro sostenible, de 12% a 10%.»
BOCETO: tres pares de cifras en pantalla; verdes los de B3 que ganan, rojos los que pierden; golpe de bajo + sacudida en 12% → 10%.

**[28-45 s]** «Usa 2x, sin costos ni financiamiento. No es ventaja: es beta gestionada. El video completo está en el canal y experimento #80 completo en el enlace. Menos caída, mismo retorno… porque es el mismo mercado.»
BOCETO: candado ámbar «2x»; texto final «Video completo en el canal · Experimento #80 completo en el enlace» + pequeño «No es asesoría financiera · El trading no se promete: se prueba». Loop: «el mismo mercado» responde al «¿Ventaja?» del inicio.

---

## Descripción de YouTube (video largo)
https://atlas-lab-one.vercel.app/e/80?utm_source=youtube&utm_medium=video&utm_campaign=exp080-t1
Ficha del experimento #80: parcial · exposición por tendencia B3: +11.2% anual contra +11.0% de comprar y esperar, caída −26% contra −31% · Sharpe 0.67 contra 0.76 · retiro sostenible 10.0% contra 12.0%.
Busqué una estrategia para vivir de retiros en S&P 500, Nasdaq 100, DAX, FTSE 100 y oro (2012–2024), midiendo Calmar y retiro sostenible. La exposición por tendencia (B3, hasta 2x) crece +11.2% contra +11.0% de comprar y esperar, con caída de −26% contra −31%; pero es beta gestionada, no ventaja, y no incluye costos ni financiamiento.
Contenido educativo. No es asesoría financiera ni recomendación de inversión.

## Descripción de YouTube (Short)
https://atlas-lab-one.vercel.app/e/80?utm_source=youtube&utm_medium=short&utm_campaign=exp080-t1
Ficha del experimento #80: parcial · +11.2% contra +11.0% anual y caída de −26% contra −31%: beta gestionada, no ventaja.
Contenido educativo, no es asesoría financiera.

## Capítulos
0:00 Gancho · 0:20 Presentación · 0:35 La pregunta · 1:30 Cómo lo probé · 2:40 Resultados · 3:50 Por qué es beta · 4:55 Con tu capital · 5:50 Conclusión · 6:30 Ficha del experimento #80 · 6:55 Cierre

## Etiquetas
calmar ratio, retiro sostenible, vivir de inversiones, exposición por tendencia, vol target, beta gestionada, drawdown, turtle, faber, backtest, atlas lab, trading con datos

## Rúbrica (autoevaluación, 1–5)
| Pieza | hook_0_3s | ritmo | promesa_cumplida | potencial_loop | claridad_no_traders | honestidad_atlas | audio | cta | Promedio |
|---|---|---|---|---|---|---|---|---|---|
| Largo | 4 | 4 | 5 | 4 | 3 | 5 | 4 | 4 | 4.1 |
| Short | 4 | 4 | 5 | 5 | 4 | 5 | 4 | 4 | 4.4 |

Hook ≥ 4 ✓ · honestidad 5 ✓. Punto débil: muchos conceptos (Calmar, retiro sostenible, B3); el cartel ámbar de «sin costos ni financiamiento» es obligatorio en toda escena que muestre la curva de B3.

## Otros temas de este experimento
Cada tema es un video largo más un Short, con el mismo formato y las mismas reglas que el tema 1; cada uno se puede ver solo.
1. `exp-080-ingreso-calmar-indices-oro.md` — Tema 1: Mismo retorno, menos caída: +11.2% contra +11.0% (¿ventaja?)
2. `exp-080-t2-turtle-calmar-pero-poco-retiro.md` — Tema 2: Calmar 0.56 con caída de solo −7%: ¿sirve para vivir de retiros?
3. `exp-080-t3-letra-pequena-del-2x.md` — Tema 3: +$297,399 con $100,000… en una curva que no paga costos
4. `exp-080-t4-calmar-contra-sharpe.md` — Tema 4: La misma estrategia gana en 3 medidas y pierde en 2: Calmar contra Sharpe

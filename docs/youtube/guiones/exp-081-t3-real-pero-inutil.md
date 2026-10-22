# Experimento #81 — Tema 3: real, medible e inútil (el sesgo RSI de las 50 mejores)

Tema 3 de 5 del experimento #81 · Qué aporta frente a los otros temas: es el Short 3 del plan («real pero inútil»). Es el único patrón que apareció en 33,363 estrategias y enseña la diferencia entre una señal estadísticamente real y una señal útil para ganar dinero, con tres preguntas que cualquiera puede aplicar. El tema 1 cuenta qué pasó; el tema 2 explica el Deflated Sharpe; el tema 4, las cinco puertas; el tema 5, la cuenta de los intentos.
Estado del guion: **BORRADOR — pendiente de aprobación**
Estado del experimento: **murió** (0 de 33,363 sobrevivieron; Deflated Sharpe máximo 0.31 de 0.95 exigido) · Serie C — «El experimento grande» (plan-series.md) · 1 largo + 1 Short
Datos usados: `experiments.json` (v=81: metrics, verdict, analysis, notes, capital), `exp_details.json` (extra-v81: algo, filters, en especial el filtro `other`). No tiene `series/`: la ficha dice que no hay curva de capital.
Producción (CLAUDE.md del canal): b-roll real detrás de cada escena con overlay oscuro 0.6, Ken Burns alternando in/out, subtítulos karaoke en MAYÚSCULAS con palabras clave en rojo, un dato visual por escena, golpe de bajo + sacudida solo en 1–2 momentos. Colores: rojo `#e11d2a`, verde `#22c55e`, fondo `#09090b`. Cifras en dígitos aquí; en el campo `tts` del JSON, en palabras.

## Títulos (3 opciones)
1. 49 de las 50 mejores ganan dinero en 18 años… y no sirven
2. Real, medible e inútil: el único patrón de 33,363 estrategias
3. En efectivo el 93% del tiempo y +0.4% al año: la señal que sí existe

## Miniatura (pensada para el título 1)
Fondo `#09090b`. Una barra de tiempo casi toda gris con una franja verde mínima; encima, un sello ámbar «REAL». Texto grande en blanco y rojo: «PERO INÚTIL» (2 palabras, sin repetir el título). Logo ATLAS arriba a la derecha.

---

## VIDEO LARGO (16:9, ≈ 6.5 min)

**[0:00 — Gancho]** (pantalla: «49 de 50» y «+0.4% al año»)
De las 50 mejores estrategias de un laboratorio con 33,363, 49 ganan dinero en 18 años. Y aun así no sirven: ganan cerca de 0.4% al año.
BOCETO: «49 / 50» en verde que se encoge junto a «≈ +0.4% al año» en rojo, sobre b-roll de pantallas de datos (kb=in).

**[0:15 — Qué es este experimento]** (pantalla: rótulo con el número y el nombre)
Este es el experimento #81 de ATLAS Lab: Laboratorio automático, 33,363 estrategias probadas con 5 filtros. Todos los resultados están en la página del experimento.
BOCETO: rótulo en rojo y blanco «EXPERIMENTO #81» con el nombre debajo, sobre el gráfico atenuado (overlay 0.6). Whoosh corto. kb=out.

**[0:25 — Qué es la señal]** (pantalla: precio que cae y rebota)
El patrón se llama reversión con RSI. El RSI es un indicador que mide qué tanto ha bajado el precio en los últimos días. La idea de reversión es comprar cuando cayó mucho, esperando un pequeño rebote. La mejor de todas, por ejemplo, combina una regla llamada Double Seven con un RSI de 6 días menor que 18. Todo se probó en una cesta de 7 pares de divisas y oro, con datos diarios, la señal ejecutada al día siguiente y 3 puntos básicos de costo.
BOCETO: precio esquemático que cae con fuerza y rebota (rotulado «ilustración»); flecha de compra en el valle. Debajo, el texto «RSI de 6 días < 18». kb=in.

**[1:20 — Lo que sí es real]** (pantalla: 49 de 50 en 18 años)
De las 50 mejores estrategias del laboratorio, 49 son positivas en 18 años. Eso no es poca cosa: significa que el patrón se repite, que no depende de un solo año. Es una señal débil de reversión, medible, real. Si el laboratorio hubiera encontrado solo ruido, esa consistencia no aparecería.
BOCETO: 50 mini-barras de resultado en 18 años; 49 verdes y 1 roja. Sello ámbar «consistente». kb=out.

**[2:15 — Por qué no sirve (1): casi nunca está invertida]** (pantalla: barra de tiempo)
Pero mira cuánto tiempo está invertida. Está en efectivo cerca del 93% del tiempo; solo un 7% del tiempo tiene dinero en el mercado. Una regla que casi nunca opera no puede ganar mucho, por buena que sea cuando opera.
BOCETO: barra de tiempo con 93% gris («en efectivo») y 7% verde («invertida»). kb=in.

**[3:00 — Por qué no sirve (2): lo que gana es muy poco]** (pantalla: tres cifras)
Y cuando opera, gana poco. Cerca de 0.4% al año, y la mejor de todas, 0.9%. Compáralo con simplemente mantener la cesta de divisas y oro sin hacer nada: +0.8% al año. La señal real gana menos que no hacer nada.
BOCETO: tres barras horizontales: «señal RSI ≈ 0.4%», «la mejor 0.9%», «mantener la cesta +0.8%». La de mantener, en blanco, supera a la primera. Golpe de bajo + sacudida en «+0.8%».

**[3:50 — Las cinco que pasaron 4 de 5 filtros]** (pantalla: tarjetas)
También están las cinco estrategias que más lejos llegaron: pasaron cuatro de los cinco filtros y cayeron en el Deflated Sharpe, el que descuenta la suerte. Mirándolas año por año, ganan entre +0.3% y +0.5% al año. En 18 años acumulan entre +5.6% y +8.8%, con entre 1 y 4 años negativos. Es una ventaja del tamaño del ruido: no explotable.
BOCETO: cinco tarjetas con «+0.3% a +0.5% al año», «+5.6% a +8.8% en 18 años», «1 a 4 años negativos de 18». Sello rojo «4/5, no sobrevive».

**[4:40 — Tres preguntas para cualquier señal]** (pantalla: checklist)
Esto da tres preguntas que sirven para cualquier estrategia que te muestren. Una: ¿es consistente, o depende de un periodo? Aquí, sí: 49 de 50. Dos: ¿es lo bastante grande para importar, una vez pagados los costos? Aquí, no: cerca de 0.4% al año. Tres: ¿le gana a no hacer nada? Aquí, tampoco: mantener da +0.8% al año. Real no es lo mismo que útil.
BOCETO: checklist con tres preguntas; la primera con ✓ verde, la segunda y la tercera con ✗ rojo, cada una con su cifra. kb=in.

**[5:30 — Con tu capital]** (pantalla: tarjeta vacía)
La tarjeta «Con tu capital» de este experimento no tiene cifras: no hay curva de capital, porque se midió cuántas estrategias superan cada filtro y ninguna de las 33,363 llegó a ser apta para operar. A este ritmo, de cerca de 0.4% al año, no es una cifra en dólares que merezca la pena mostrar.
BOCETO: tarjeta de capital con el texto de `capital.note` y un «—» grande.

**[5:55 — Conclusión]**
En esta cesta, con datos diarios y reglas simples, no hay ventaja explotable. El único patrón que aparece es real, medible e inútil: casi nunca está invertido, gana menos que mantener, y sus mejores versiones se quedan en el tamaño del ruido. El trading no se promete: se prueba.

**[6:20 — Ficha del experimento #81]** (pantalla: tarjeta con la ficha y la URL)
Ficha del experimento #81. Estado: murió. Cifra clave: 0 de 33,363 sobrevivieron; las mejores versiones del sesgo RSI ganan cerca de 0.4% al año, en efectivo el 93% del tiempo. Filtro que decidió: el Deflated Sharpe, máximo 0.31 de 0.95. Lección: una señal puede ser real y aun así no servir. Revísalo completo en atlas-lab-one.vercel.app/e/81.
BOCETO: tarjeta con el número «#81», el sello «MURIÓ» en rojo, tres líneas (cifra clave, filtro que decidió, lección) y la URL `atlas-lab-one.vercel.app/e/81` grande abajo. kb=in.

**[6:40 — Cierre]**
Todos los datos en atlas-lab-one.vercel.app, experimento 81. Contenido educativo, no es asesoría financiera.

---

## SHORT (9:16, ≈ 50 s)

**[0-3 s]** «49 de las 50 mejores estrategias ganan dinero en 18 años. Y no sirven para nada.»
BOCETO: «49/50» en verde y «¿útil? NO» en rojo sobre b-roll de datos (kb=in), overlay 0.6.

**[3-15 s]** «Es un sesgo de reversión con RSI: comprar cuando el precio cayó mucho. Real y medible.»
BOCETO: precio que cae y rebota con flecha de compra (kb=out); ticker arriba.

**[15-30 s]** «Pero está en efectivo el 93% del tiempo y gana cerca de 0.4% al año. La mejor, 0.9%.»
BOCETO: barra de tiempo 93% gris / 7% verde; luego tres cifras con tick.

**[30-43 s]** «Mantener la cesta sin hacer nada daba +0.8% al año. La señal real ganaba menos que no hacer nada.»
BOCETO: barra blanca «+0.8%» que supera a la verde «0.4%»; golpe de bajo + sacudida.

**[43-50 s]** «El video completo está en el canal, y el experimento #81 completo, en el enlace. Real, medible… e inútil.»
BOCETO: texto final «Video completo en el canal · Experimento #81 completo en el enlace» + pequeño «No es asesoría financiera · El trading no se promete: se prueba». Loop: «inútil» responde al «no sirven para nada» del arranque.

---

## Descripción de YouTube (video largo)
https://atlas-lab-one.vercel.app/e/81?utm_source=youtube&utm_medium=video&utm_campaign=exp081-t3
Ficha del experimento #81: murió · 33,363 estrategias probadas, 0 sobrevivieron · Deflated Sharpe máximo 0.31 de 0.95 · el único patrón real, un sesgo de reversión con RSI, gana cerca de 0.4% al año y está en efectivo ~93% del tiempo.
49 de las 50 mejores estrategias del laboratorio son positivas en 18 años, pero mantener la cesta de 7 divisas y oro da +0.8% al año. Explico la diferencia entre una señal real y una señal útil.
Contenido educativo. No es asesoría financiera ni recomendación de inversión.

## Descripción de YouTube (Short)
https://atlas-lab-one.vercel.app/e/81?utm_source=youtube&utm_medium=short&utm_campaign=exp081-t3
Ficha del experimento #81: murió · 49 de 50 mejores positivas en 18 años, pero en efectivo el 93% del tiempo y ~0.4% al año, contra +0.8% de mantener la cesta.
Contenido educativo. No es asesoría financiera.

## Capítulos
0:00 Gancho · 0:15 Qué es este experimento · 0:25 Qué es la señal · 1:20 Lo que sí es real · 2:15 Casi nunca invertida · 3:00 Gana muy poco · 3:50 Las cinco de 4 de 5 · 4:40 Tres preguntas · 5:30 Con tu capital · 5:55 Conclusión · 6:20 Ficha del experimento

## Etiquetas
rsi, reversión a la media, sesgo estadístico, señal real, backtest, 33363 estrategias, comprar y mantener, ventaja explotable, minería de estrategias, divisas y oro, atlas lab, trading con datos

## Rúbrica (autoevaluación, 1–5)
| Pieza | hook_0_3s | ritmo | promesa_cumplida | potencial_loop | claridad_no_traders | honestidad_atlas | audio | cta | Promedio |
|---|---|---|---|---|---|---|---|---|---|
| Largo | 5 | 4 | 5 | 4 | 4 | 5 | 4 | 4 | 4.4 |
| Short | 5 | 4 | 5 | 5 | 4 | 5 | 4 | 4 | 4.5 |

Hook ≥ 4 ✓ · honestidad 5 ✓. Punto débil: no hay curva de capital, así que el peso visual lo llevan la barra de tiempo (93%/7%) y las barras de 0.4%, 0.9% y +0.8%. Las cifras de «cerca de 0.4% al año», «0.9%» y «+0.8%» son aproximadas en la ficha y se dicen con «cerca de».

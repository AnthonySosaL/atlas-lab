# Experimento #81 — Tema 4: las 5 puertas del gauntlet (qué error atrapa cada filtro)

Tema 4 de 5 del experimento #81 · Qué aporta frente a los otros temas: es el tema del método. Explica el gauntlet de 5 filtros puerta por puerta, qué error atrapa cada una y qué le pasó a estrategias concretas de otros experimentos (83, 84 y 88) al chocar con ella. El tema 1 cuenta qué pasó; el tema 2 profundiza en el Deflated Sharpe; el tema 3 trata el patrón «real pero inútil»; el tema 5, la cuenta de los intentos.
Estado del guion: **BORRADOR — pendiente de aprobación**
Estado del experimento: **murió** (0 de 33,363 sobrevivieron; Deflated Sharpe máximo 0.31 de 0.95 exigido) · Serie C — «El experimento grande» (plan-series.md) · 1 largo + 1 Short
Datos usados: `experiments.json` (v=81: kpis, metrics, chart, analysis, params_view), `exp_details.json` (extra-v81: algo, filters), y ejemplos de `forms` de los experimentos 83, 84 y 88 (Sharpe por periodo y Monte Carlo). No tiene `series/`.
Producción (CLAUDE.md del canal): b-roll real detrás de cada escena con overlay oscuro 0.6, Ken Burns alternando in/out, subtítulos karaoke en MAYÚSCULAS con palabras clave en rojo, un dato visual por escena, golpe de bajo + sacudida solo en 1–2 momentos. Colores: rojo `#e11d2a`, verde `#22c55e`, fondo `#09090b`. Cifras en dígitos aquí; en el campo `tts` del JSON, en palabras.

## Títulos (3 opciones)
1. Cinco filtros, 33,363 estrategias, 0 sobrevivientes: qué atrapa cada puerta
2. 5,252 pasan una puerta; ninguna pasa las cinco
3. Cómo saber si una estrategia es real: las 5 pruebas del laboratorio

## Miniatura (pensada para el título 1)
Fondo `#09090b`. Cinco puertas en fila, cada una más angosta; sobre ellas los números «5,252 · 4,566 · 2,631 · 1,360 · 0», el último en rojo. Texto grande: «NADIE SALE» (2 palabras, sin repetir el título). Logo ATLAS arriba a la derecha.

---

## VIDEO LARGO (16:9, ≈ 8 min)

**[0:00 — Gancho]** (pantalla: cinco puertas y un contador)
Una estrategia tiene que pasar cinco pruebas para sobrevivir en mi laboratorio. Por separado, la más fácil la pasan 5,252 estrategias de 33,363. Las cinco juntas, ninguna.
BOCETO: cinco puertas en fila que se angostan; contador 33,363 que baja a 5,252 en la primera y termina en «0». kb=in.

**[0:15 — Qué es este experimento]** (pantalla: rótulo con el número y el nombre)
Este es el experimento #81 de ATLAS Lab: Laboratorio automático, 33,363 estrategias probadas con 5 filtros. Todos los resultados están en la página del experimento.
BOCETO: rótulo en rojo y blanco «EXPERIMENTO #81» con el nombre debajo, sobre las puertas atenuadas (overlay 0.6). Whoosh corto. kb=out.

**[0:25 — Por qué cinco y no una]** (pantalla: cinco agujeros en una red)
Una sola prueba deja pasar mucho. Cada filtro cierra un camino distinto por el que la suerte se disfraza de talento, así que se usan todos a la vez. Un aviso: los números que verás son de cada filtro por separado, no un embudo en cadena. Las reglas son las mismas para todas: una cesta de 7 pares de divisas más oro, datos diarios, la señal ejecutada al día siguiente, 3 puntos básicos de costo por rotación y solo compra. Se diseña sobre 2014–2020.
BOCETO: red con cinco agujeros de formas distintas; por cada uno se cuela un tipo de estrategia. Checklist `filters`: ✓ costos 3 bps, ✓ rezago de 1 día. kb=in.

**[1:20 — Puerta 1: batir a comprar y esperar]** (pantalla: umbral 0.13)
Primera puerta: ¿le ganas a no hacer nada en el periodo en que te diseñaron? El Sharpe, que es la ganancia por unidad de riesgo, de comprar y esperar esa cesta en 2014–2020 es 0.13. La superan 5,252 estrategias. Atrapa a las que ni siquiera le ganan al mercado donde fueron afinadas. Ejemplo: de las 8 formas de EMAs del experimento 83, la mejor dio 0.10 y ninguna superó 0.13.
BOCETO: barra de 0.13 como vara; contador «5,252 de 33,363». Mini-tarjeta «#83: mejor 0.10 < 0.13».

**[2:20 — Puerta 2: otra época (2007–2013)]** (pantalla: línea de tiempo)
Segunda puerta: una época que la estrategia nunca vio, 2007–2013, con la crisis de 2008. Se exige Sharpe mayor que 0.30. La pasan 4,566 y el mejor valor fue 0.88. Atrapa a las que solo funcionan en el periodo donde se afinaron. Ejemplo del experimento 84: la mejor forma del periodo de diseño dio 0.36 y cayó a 0.18 en 2007–2013, bajo la vara de 0.30.
BOCETO: línea de tiempo con 2007–2013 resaltada y la crisis de 2008 marcada; contador «4,566». Mini-tarjeta «#84: 0.36 → 0.18».

**[3:15 — Puerta 3: otra época (2021–2024)]** (pantalla: línea de tiempo)
Tercera puerta: otra época que no vio, 2021–2024, también con Sharpe mayor que 0.30. La pasan 2,631 y el mejor valor fue 1.42. Aquí caen las que brillaron antes y se hunden después. Ejemplo del experimento 84: dos formas dieron 0.58 en 2007–2013, y una de ellas cayó a −1.01 en 2021–2024. O el cruce de medias 50/200 del experimento 83: 0.36 en 2007–2013 y −0.16 en 2021–2024.
BOCETO: contador «2,631»; barras verde→rojo del ejemplo «0.58 → −1.01» y «0.36 → −0.16». Golpe de bajo en −1.01.

**[4:10 — Puerta 4: Monte Carlo]** (pantalla: señal que se desplaza)
Cuarta puerta, Monte Carlo: se toma la señal de la estrategia y se desplaza en el tiempo 5,000 veces. Si la estrategia real no le gana a sus propias versiones desalineadas, su timing podría ser suerte. Se exige p menor que 0.05. La pasan 1,360. Ojo con lo que mide: el timing, no si gana dinero. En el experimento 88, 11 de 32 formas pasan este filtro y las 11 pierden dinero en el periodo de diseño.
BOCETO: señal original y varias copias desplazadas; marcador de p; contador «1,360». Cartel ámbar «mide el timing, no la ganancia». kb=out.

**[5:10 — Puerta 5: Deflated Sharpe]** (pantalla: barra 0.31 contra 0.95)
Quinta puerta, el Deflated Sharpe: descuenta el hecho de haber probado miles de ideas. Con un contador global de 33,363 intentos, se exige más de 0.95. La pasan cero; el mejor valor fue 0.31. Atrapa a la mejor de muchas, que siempre luce bien. Cinco estrategias pasaron las otras cuatro puertas y cayeron aquí.
BOCETO: barra roja 0.31 frente a la línea de 0.95; cinco puntos verdes que se detienen ante la quinta puerta. Sacudida en 0.31.

**[6:00 — Las cinco juntas]** (pantalla: tabla)
Al final, ninguna atraviesa las cinco. La que más lejos llegó fue a 4 de 5.
| Puerta | Qué atrapa | Pasan, de 33,363 | Mejor valor |
|---|---|---|---|
| Batir a comprar y esperar (0.13) | no le gana al mercado en su periodo | 5,252 | — |
| Fuera de muestra 2007–2013 (> 0.30) | solo funciona en una época | 4,566 | 0.88 |
| Fuera de muestra 2021–2024 (> 0.30) | brilla antes y se hunde después | 2,631 | 1.42 |
| Monte Carlo (p < 0.05) | timing que podría ser suerte | 1,360 | — |
| Deflated Sharpe (> 0.95) | la mejor de muchas | 0 | 0.31 |
BOCETO: la tabla se llena fila a fila con una puerta que se cierra en cada una. La última fila en rojo. kb=in.

**[6:50 — Qué no prueba este laboratorio]** (pantalla: límites)
Para ser honestos con los límites: los umbrales, 0.30, 0.95 y 0.05, son decisiones de diseño. Todo se probó en una sola cesta, siete pares de divisas y oro, con datos diarios, solo compras y reglas simples. El resultado es que ahí no hay ventaja explotable; no es una afirmación sobre todos los mercados ni sobre reglas más complejas.
BOCETO: lista de cuatro límites con icono de candado ámbar; cartel «alcance: esta cesta, estos datos, estas reglas».

**[7:20 — Con tu capital]** (pantalla: tarjeta vacía)
La tarjeta «Con tu capital» de este experimento está vacía a propósito. Se midió cuántas estrategias superan cada filtro, no una cartera, y ninguna de las 33,363 llegó a ser apta para operar.
BOCETO: tarjeta de capital con el texto de `capital.note` y un «—» grande.

**[7:40 — Conclusión]**
Cinco puertas, cinco errores distintos. Una estrategia real tiene que pasar todas, y en este laboratorio ninguna lo logró. El trading no se promete: se prueba.

**[8:00 — Ficha del experimento #81]** (pantalla: tarjeta con la ficha y la URL)
Ficha del experimento #81. Estado: murió. Cifra clave: 0 de 33,363 sobrevivieron; 5,252 pasan la puerta más fácil y 0 pasan el Deflated Sharpe. Filtro que decidió: el Deflated Sharpe, máximo 0.31 de 0.95. Lección: una sola prueba no basta, hay que cerrar los cinco caminos de la suerte. Revísalo completo en atlas-lab-one.vercel.app/e/81.
BOCETO: tarjeta con el número «#81», el sello «MURIÓ» en rojo, tres líneas (cifra clave, filtro que decidió, lección) y la URL `atlas-lab-one.vercel.app/e/81` grande abajo. kb=in.

**[8:20 — Cierre]**
Todos los datos en atlas-lab-one.vercel.app, experimento 81. Contenido educativo, no es asesoría financiera.

---

## SHORT (9:16, ≈ 50 s)

**[0-3 s]** «Cinco puertas. De 33,363 estrategias, pasaron las cinco: cero.»
BOCETO: cinco puertas en fila y un «0» rojo gigante, sobre b-roll de servidores (kb=in), overlay 0.6.

**[3-16 s]** «Puerta uno, batir a comprar y esperar: pasan 5,252. Puerta dos, otra época, 2007 a 2013: pasan 4,566.»
BOCETO: dos puertas que se abren con tick y sus contadores (kb=out); ticker arriba.

**[16-31 s]** «Puerta tres, 2021 a 2024: 2,631. Puerta cuatro, Monte Carlo: 1,360. Puerta cinco, Deflated Sharpe: cero.»
BOCETO: tres puertas más; la quinta se cierra en rojo con golpe de bajo + sacudida.

**[31-43 s]** «Cada puerta atrapa un error distinto: la que solo funciona en una época, la de timing de suerte y la mejor de muchas.»
BOCETO: tres iconos (calendario, dado, podio) que se tachan.

**[43-50 s]** «El video completo está en el canal, y el experimento #81 completo, en el enlace. Cinco puertas, cero salidas.»
BOCETO: texto final «Video completo en el canal · Experimento #81 completo en el enlace» + pequeño «No es asesoría financiera · El trading no se promete: se prueba». Loop: «cero salidas» responde al «cero» del arranque.

---

## Descripción de YouTube (video largo)
https://atlas-lab-one.vercel.app/e/81?utm_source=youtube&utm_medium=video&utm_campaign=exp081-t4
Ficha del experimento #81: murió · 33,363 estrategias probadas, 0 sobrevivieron · 5,252 batían a comprar y esperar, 4,566 pasaban 2007–2013, 2,631 pasaban 2021–2024, 1,360 el Monte Carlo y 0 el Deflated Sharpe (máximo 0.31 de 0.95).
Explico las cinco pruebas del laboratorio una por una: qué error atrapa cada una y qué le pasó a estrategias de otros experimentos al chocar con ellas. Cesta de 7 divisas y oro, datos diarios, 3 puntos básicos de costo.
Contenido educativo. No es asesoría financiera ni recomendación de inversión.

## Descripción de YouTube (Short)
https://atlas-lab-one.vercel.app/e/81?utm_source=youtube&utm_medium=short&utm_campaign=exp081-t4
Ficha del experimento #81: murió · cinco filtros, 0 de 33,363 los pasan todos · 5,252 · 4,566 · 2,631 · 1,360 · 0.
Contenido educativo. No es asesoría financiera.

## Capítulos
0:00 Gancho · 0:15 Qué es este experimento · 0:25 Por qué cinco · 1:20 Puerta 1 · 2:20 Puerta 2 · 3:15 Puerta 3 · 4:10 Monte Carlo · 5:10 Deflated Sharpe · 6:00 Las cinco juntas · 6:50 Límites · 7:20 Con tu capital · 7:40 Conclusión · 8:00 Ficha del experimento

## Etiquetas
backtest, fuera de muestra, deflated sharpe, monte carlo, sobreajuste, validación de estrategias, gauntlet, sharpe ratio, 33363 estrategias, comprar y mantener, atlas lab, trading con datos

## Rúbrica (autoevaluación, 1–5)
| Pieza | hook_0_3s | ritmo | promesa_cumplida | potencial_loop | claridad_no_traders | honestidad_atlas | audio | cta | Promedio |
|---|---|---|---|---|---|---|---|---|---|
| Largo | 5 | 4 | 5 | 4 | 4 | 5 | 4 | 4 | 4.4 |
| Short | 5 | 4 | 5 | 5 | 4 | 5 | 4 | 4 | 4.5 |

Hook ≥ 4 ✓ · honestidad 5 ✓. Punto débil: cinco conceptos técnicos en un solo largo; cada puerta lleva un ejemplo concreto de otro experimento para anclarla. El aviso «cada filtro por separado, no un embudo en cadena» debe quedar claro en pantalla para que 5,252 → 4,566 → 2,631 → 1,360 no se lean como una resta.

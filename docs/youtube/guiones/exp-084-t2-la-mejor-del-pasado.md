# Experimento #84 — Tema 2: la mejor del pasado (0.36 en el diseño, −0.68 en 2021–2024)

Tema 2 de 4 del experimento #84 · Qué aporta frente a los otros temas: sigue a una sola forma, la mejor del periodo de diseño, y enseña por qué elegir la ganadora del pasado no sirve: la «mejor» cambia con el periodo que mires. El tema 1 recorre las 12 combinaciones; el tema 3 compara comprar caídas con seguir tendencia; el tema 4 explica el Monte Carlo con el caso del IBS.
Estado del guion: **BORRADOR — pendiente de aprobación**
Estado del experimento: **murió** (las 12 formas murieron, máximo 2 de 5 filtros; algunas brillan en 2007–2013 y se hunden en 2021–2024) · Serie A — «Probé la estrategia de TikTok» (plan-series.md) · 1 largo + 1 Short
Datos usados: `experiments.json` (v=84: kpis, metrics, forms, verdict, analysis, notes, period), `exp_details.json` (extra-v84: algo, code, filters), `series/extra-v84.json` (1.ª curva = «MA200 filtro + RSI4<20», cesta de 8; 2.ª = «Sin estrategia»), tabla «Con tu capital» de `docs/youtube`.
Producción (CLAUDE.md del canal): b-roll real detrás de cada escena con overlay oscuro 0.6, Ken Burns alternando in/out, subtítulos karaoke en MAYÚSCULAS con palabras clave en rojo, un dato visual por escena, golpe de bajo + sacudida solo en 1–2 momentos. Colores: rojo `#e11d2a`, verde `#22c55e`, fondo `#09090b`. Cifras en dígitos aquí; en el campo `tts` del JSON, en palabras.

## Títulos (3 opciones)
1. La mejor de 12 en el pasado (Sharpe 0.36) cae a −0.68 en 2021–2024
2. Elegir la ganadora del pasado: MA200 + RSI de 4 días, +$1,738 contra +$14,407
3. El espejismo de la mejor en muestra: Deflated Sharpe 0.013

## Miniatura (pensada para el título 1)
Fondo `#09090b`. Un podio con la estrella «0.36» en lo alto que se cae por un lado hacia una cifra roja «−0.68». Texto grande: «LA GANADORA» (2 palabras, sin repetir el título). Logo ATLAS arriba a la derecha.

---

## VIDEO LARGO (16:9, ≈ 6 min)

**[0:00 — Gancho]** (pantalla: podio y dos barras)
De 12 combinaciones, la mejor del periodo de diseño sacó un Sharpe de 0.36, más del doble que comprar y esperar, que da 0.13. En 2021–2024, esa misma forma dio −0.68.
BOCETO: podio con la forma ganadora arriba (0.36 en verde); la barra cae a roja con −0.68 y golpe de bajo + sacudida. kb=in.

**[0:15 — Qué es este experimento]** (pantalla: rótulo con el número y el nombre)
Este es el experimento #84 de ATLAS Lab: Filtro multitemporalidad, media superior más entrada inferior, 12 formas. Todos los resultados están en la página del experimento.
BOCETO: rótulo en rojo y blanco «EXPERIMENTO #84» con el nombre debajo, sobre el podio atenuado (overlay 0.6). Whoosh corto. kb=out.

**[0:25 — Diseño y fuera de muestra]** (pantalla: línea de tiempo en tres tramos)
Dos conceptos. El periodo de diseño es donde miras los datos para elegir la estrategia: aquí, 2014–2020. Fuera de muestra son periodos que la estrategia no vio al elegirla: aquí, 2007–2013, con la crisis de 2008, y 2021–2024. Una estrategia real tiene que funcionar también donde no la afinaste. El Sharpe es la ganancia por unidad de riesgo.
BOCETO: línea de tiempo con tres tramos: «2007–13 fuera», «2014–20 diseño» (resaltado) y «2021–24 fuera». kb=in.

**[1:10 — La candidata]** (pantalla: precio, media y caída del RSI)
La idea viene de un comentario de TikTok: usar la media móvil solo como filtro de dirección, y buscar la entrada con una señal más rápida. La ganadora del diseño combina las dos cosas: el cierre sobre su media de 200 días, que dice que la tendencia es alcista, y una caída fuerte del RSI de 4 días, por debajo de 20. El RSI mide cuánto ha bajado el precio en los últimos días. Es comprar una caída dentro de una tendencia alcista. Es la versión diaria de la idea, no intradía.
BOCETO: precio sobre su MA200 con una caída marcada y flecha de compra (esquema ilustrativo, rotulado «ilustración»). Cartel ámbar fijo «Versión diaria · no intradía». kb=out.

**[2:05 — Los números]** (pantalla: tabla de la candidata)
En diseño, 2014–2020, da 0.36, y comprar y esperar da 0.13: es una de solo dos formas de las 12 que le gana. Pero en 2007–2013 baja a 0.18, bajo la vara de 0.30. Y en 2021–2024 cae a −0.68. El Deflated Sharpe, que descuenta la suerte de probar muchas ideas, es 0.013, cuando se exige 0.95. Y el Monte Carlo da un p de 0.13, lejos de 0.05. Pasa un solo filtro de cinco.
| Medida | MA200 filtro + RSI4<20 | Vara |
|---|---|---|
| Diseño 2014–2020 | 0.36 | 0.13 (comprar y esperar) |
| Fuera de muestra 2007–2013 | 0.18 | 0.30 |
| Fuera de muestra 2021–2024 | −0.68 | 0.30 |
| Deflated Sharpe | 0.013 | 0.95 |
| Monte Carlo (p) | 0.13 | 0.05 |
BOCETO: tabla fila a fila; solo la primera en verde. Barra 0.013 frente a la línea de 0.95. Golpe de bajo en −0.68.

**[3:05 — La «mejor» cambia según dónde mires]** (pantalla: tres podios)
Mira qué pasa si cambias de periodo. La mejor del diseño es esa, con 0.36. Pero en 2007–2013, las mejores son dos formas distintas, ambas con 0.58. Y en 2021–2024, la mejor es otra más, el filtro de 200 días con Donchian de 20 y 10, con −0.02, que sigue siendo negativo. Tres periodos, tres mejores distintas. Ninguna lo es en los tres.
BOCETO: tres podios en fila, uno por periodo; el 1.º puesto cambia de forma: «MA200 + RSI4<20 · 0.36», «EMA200 + RSI4<15 y MA100 + RSI3<15 · 0.58» y «MA200 + Donchian20/10 · −0.02». kb=in.

**[3:55 — Por qué pasa]** (pantalla: dado y torneo)
Una explicación general, no medida en esta ficha. Cuando eliges la mejor de 12, eliges a la que tuvo la mejor racha en ese periodo. Una parte de esa racha es habilidad, si la hay, y otra parte es suerte. La suerte no se repite en otro periodo. Por eso la ganadora del pasado suele decepcionar: no porque la estrategia cambie, sino porque la suerte no vuelve.
BOCETO: torneo de 12 curvas con una ganadora resaltada; luego otro torneo donde esa misma curva baja. Etiqueta gris «explicación general, no medida». kb=out.

**[4:40 — Con tu capital]** (pantalla: tarjeta de capital)
Esta es la curva de esa forma sobre la cesta de 8 entre 2007 y 2024. Con 100,000 dólares gana 1,738. Comprar y esperar la misma cesta gana 14,407. Con 10,000 dólares serían unos +174 contra +1,441. La curva queda casi plana.
BOCETO: curvas reales de `series/extra-v84.json` (estrategia casi plana en verde pálido, «Sin estrategia» subiendo en blanco) con contadores finales.

**[5:10 — Conclusión]**
La mejor del pasado no fue la mejor del futuro. Doce formas, ninguna sobrevive, máximo 2 de 5 filtros. Elegir según un solo periodo es elegir la ganadora de una época. El trading no se promete: se prueba.

**[5:35 — Ficha del experimento #84]** (pantalla: tarjeta con la ficha y la URL)
Ficha del experimento #84. Estado: murió. Cifra clave: la mejor de diseño, 0.36, cae a −0.68 en 2021–2024; con 100,000 dólares, +1,738 contra +14,407 de comprar y esperar. Filtro que decidió: el Deflated Sharpe, máximo 0.01 de 0.95. Lección: la ganadora del pasado no es la del futuro. Revísalo completo en atlas-lab-one.vercel.app/e/84.
BOCETO: tarjeta con el número «#84», el sello «MURIÓ» en rojo, tres líneas (cifra clave, filtro que decidió, lección) y la URL `atlas-lab-one.vercel.app/e/84` grande abajo. kb=in.

**[5:55 — Cierre]**
Todos los datos en atlas-lab-one.vercel.app, experimento 84. Contenido educativo, no es asesoría financiera.

---

## SHORT (9:16, ≈ 49 s)

**[0-3 s]** «La mejor de 12 en el pasado: Sharpe 0.36. Más del doble que comprar y esperar.»
BOCETO: podio con «0.36» en verde sobre b-roll de gráfico (kb=in), overlay 0.6.

**[3-15 s]** «Cierre sobre la media de 200 días y caída fuerte del RSI de 4 días: comprar caídas en tendencia alcista. Siete divisas y oro, con costos.»
BOCETO: precio sobre MA200 con caída y flecha de compra (kb=out); cartel «Versión diaria». Ticker arriba.

**[15-30 s]** «En 2007 a 2013 baja a 0.18. En 2021 a 2024 cae a menos 0.68. Deflated Sharpe: 0.013, cuando se exige 0.95.»
BOCETO: tres barras 0.36 → 0.18 → −0.68 y barra 0.013 frente a la línea de 0.95; golpe de bajo + sacudida en −0.68.

**[30-43 s]** «Con 100,000 dólares: +1,738. Comprar y esperar: +14,407.»
BOCETO: tarjeta de capital con contadores +$1,738 y +$14,407.

**[43-49 s]** «El video completo está en el canal, y el experimento #84 completo, en el enlace. La mejor del pasado no fue la mejor del futuro.»
BOCETO: texto final «Video completo en el canal · Experimento #84 completo en el enlace» + pequeño «No es asesoría financiera · El trading no se promete: se prueba». Loop: «la mejor» responde al «la mejor de 12» del arranque.

---

## Descripción de YouTube (video largo)
https://atlas-lab-one.vercel.app/e/84?utm_source=youtube&utm_medium=video&utm_campaign=exp084-t2
Ficha del experimento #84: murió · 12 formas, 0 sobrevivientes, máximo 2 de 5 filtros · la mejor de diseño (MA200 + RSI4<20) da Sharpe 0.36, luego 0.18 y −0.68 · con $100,000: +$1,738 contra +$14,407 de comprar y esperar.
Sigo a la ganadora del periodo de diseño de una idea de varias temporalidades (versión diaria) por tres épocas y explico por qué elegir la mejor del pasado no sirve. Siete pares de divisas y oro, 3 puntos básicos de costo, 5 filtros.
Contenido educativo. No es asesoría financiera ni recomendación de inversión.

## Descripción de YouTube (Short)
https://atlas-lab-one.vercel.app/e/84?utm_source=youtube&utm_medium=short&utm_campaign=exp084-t2
Ficha del experimento #84: murió · mejor de diseño: Sharpe 0.36 → 0.18 → −0.68 · con $100,000: +$1,738 contra +$14,407.
Contenido educativo. No es asesoría financiera.

## Capítulos
0:00 Gancho · 0:15 Qué es este experimento · 0:25 Diseño y fuera de muestra · 1:10 La candidata · 2:05 Los números · 3:05 La mejor cambia · 3:55 Por qué pasa · 4:40 Con tu capital · 5:10 Conclusión · 5:35 Ficha del experimento

## Etiquetas
sobreajuste, mejor estrategia en el pasado, fuera de muestra, rsi, media de 200 días, deflated sharpe, backtest, multitemporalidad, estrategia de tiktok, forex, atlas lab, trading con datos

## Rúbrica (autoevaluación, 1–5)
| Pieza | hook_0_3s | ritmo | promesa_cumplida | potencial_loop | claridad_no_traders | honestidad_atlas | audio | cta | Promedio |
|---|---|---|---|---|---|---|---|---|---|
| Largo | 5 | 4 | 5 | 4 | 4 | 5 | 4 | 4 | 4.4 |
| Short | 5 | 4 | 5 | 5 | 4 | 5 | 4 | 4 | 4.5 |

Hook ≥ 4 ✓ · honestidad 5 ✓. Punto débil: la explicación de la «racha» es general y está rotulada «no medida». Es la versión diaria de una idea de varias temporalidades; el cartel «no intradía» debe verse siempre.

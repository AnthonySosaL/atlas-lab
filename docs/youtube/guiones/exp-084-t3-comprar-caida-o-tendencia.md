# Experimento #84 — Tema 3: comprar la caída o seguir la tendencia (qué entrada resiste mejor)

Tema 3 de 4 del experimento #84 · Qué aporta frente a los otros temas: agrupa las 12 formas por tipo de entrada rápida (5 que compran caídas, 7 que siguen la tendencia) y muestra un patrón verificable en la tabla: las que compran caídas brillan más en diseño y 2007–2013 pero se hunden más en 2021–2024. El tema 1 recorre las 12 combinaciones; el tema 2 sigue a la mejor del diseño; el tema 4 explica el Monte Carlo con el caso del IBS.
Estado del guion: **BORRADOR — pendiente de aprobación**
Estado del experimento: **murió** (las 12 formas murieron, máximo 2 de 5 filtros; algunas brillan en 2007–2013 y se hunden en 2021–2024) · Serie A — «Probé la estrategia de TikTok» (plan-series.md) · 1 largo + 1 Short
Datos usados: `experiments.json` (v=84: kpis, metrics, forms, verdict, analysis, notes), `exp_details.json` (extra-v84: algo, code, filters), `series/extra-v84.json` (1.ª curva = «MA200 filtro + RSI4<20»; 2.ª = «Sin estrategia»), tabla «Con tu capital» de `docs/youtube`. La clasificación en «comprar caída» y «seguir tendencia» es del guion, sobre las 12 formas de `forms`.
Producción (CLAUDE.md del canal): b-roll real detrás de cada escena con overlay oscuro 0.6, Ken Burns alternando in/out, subtítulos karaoke en MAYÚSCULAS con palabras clave en rojo, un dato visual por escena, golpe de bajo + sacudida solo en 1–2 momentos. Colores: rojo `#e11d2a`, verde `#22c55e`, fondo `#09090b`. Cifras en dígitos aquí; en el campo `tts` del JSON, en palabras.

## Títulos (3 opciones)
1. Comprar caídas contra seguir la tendencia: −1.01 contra −0.31 en 2021–2024
2. Las únicas 2 formas que le ganan a comprar y esperar compran caídas… y se hunden
3. 12 combinaciones, dos familias: la que más brilla es la que más cae

## Miniatura (pensada para el título 1)
Fondo `#09090b`. Dos columnas: a la izquierda una flecha hacia abajo con «caída» y barras que suben alto y caen hondo; a la derecha una flecha hacia arriba con «tendencia» y barras pequeñas y planas. Texto grande: «DOS FAMILIAS» (2 palabras, sin repetir el título). Logo ATLAS arriba a la derecha.

---

## VIDEO LARGO (16:9, ≈ 6.5 min)

**[0:00 — Gancho]** (pantalla: dos rangos de cifras)
Cinco de mis 12 combinaciones compran caídas. Las otras siete siguen la tendencia. En 2021–2024, las que compran caídas dieron entre −0.33 y −1.01. Las que siguen la tendencia, entre −0.02 y −0.31.
BOCETO: dos franjas horizontales de barras rojas hacia abajo; la de «caídas» llega a −1.01 y la de «tendencia» a −0.31. Golpe de bajo en −1.01. kb=in.

**[0:15 — Qué es este experimento]** (pantalla: rótulo con el número y el nombre)
Este es el experimento #84 de ATLAS Lab: Filtro multitemporalidad, media superior más entrada inferior, 12 formas. Todos los resultados están en la página del experimento.
BOCETO: rótulo en rojo y blanco «EXPERIMENTO #84» con el nombre debajo, sobre las franjas atenuadas (overlay 0.6). Whoosh corto. kb=out.

**[0:25 — Dos formas de entrar]** (pantalla: dos dibujos de precio)
Imagina una tendencia alcista. Hay dos formas de entrar. Una: comprar la caída, es decir, esperar a que el precio baje fuerte y apostar a que rebota. Eso es reversión a la media. Otra: seguir la tendencia, es decir, comprar cuando el precio demuestra que sube, con un cruce de medias, una ruptura de máximos o el momentum. Mis combinaciones usan siempre un filtro de media de 100 o 200 días como dirección, y una de esas entradas rápidas.
BOCETO: dos paneles ilustrativos (rotulados «ilustración»): arriba, precio que sube, baja un poco y rebota con flecha de compra en el valle; abajo, precio que cruza hacia arriba con flecha de compra en la subida. kb=in.

**[1:20 — Las 12, en dos grupos]** (pantalla: dos listas)
Cinco compran caídas: cuatro con el RSI, que mide cuánto ha bajado el precio en pocos días, y una con el IBS, que mide dónde cierra el día dentro de su rango, y con valores bajos cierra cerca del mínimo. Siete siguen la tendencia: tres cruces de EMAs, dos de Donchian, que es la ruptura del máximo de unos días, y dos de momentum. Siete pares de divisas y oro, señal del día siguiente, 3 puntos básicos de costo, solo compra. Versión diaria, no intradía.
BOCETO: dos listas con iconos; cartel ámbar fijo «Versión diaria · no intradía»; checklist `filters`: ✓ costos 3 bps, ✓ rezago de 1 día. kb=out.

**[2:10 — La tabla agrupada]** (pantalla: dos tablas)
| Compran la caída | 2014–20 | 2007–13 | 2021–24 |
|---|---|---|---|
| EMA200 filtro + RSI4<15 | 0.14 | 0.58 | −0.39 |
| MA200 filtro + RSI4<20 | 0.36 | 0.18 | −0.68 |
| MA100 filtro + RSI3<15 | −0.10 | 0.58 | −1.01 |
| MA200 filtro + RSI2<10 | 0.08 | 0.04 | −0.68 |
| MA200 filtro + IBS<0.2 | 0.07 | −0.29 | −0.33 |

| Siguen la tendencia | 2014–20 | 2007–13 | 2021–24 |
|---|---|---|---|
| MA200 filtro + Donchian20/10 | 0.03 | −0.05 | −0.02 |
| MA200 filtro + EMAcross9/21 | −0.09 | 0.12 | −0.14 |
| MA200 filtro + EMAcross12/26 | −0.07 | 0.14 | −0.14 |
| EMA200 filtro + EMAcross9/21 | −0.12 | 0.16 | −0.14 |
| MA100 filtro + Momentum50 | −0.15 | −0.03 | −0.19 |
| MA200 filtro + Momentum20 | −0.21 | −0.07 | −0.27 |
| MA200 filtro + Donchian10/5 | −0.30 | −0.32 | −0.31 |
BOCETO: las dos tablas lado a lado; celdas que superan su umbral (0.13 en diseño; 0.30 en las otras dos) en verde, el resto en rojo/gris. Línea guía «comprar y esperar, 2014–20: 0.13».

**[3:10 — Hallazgo 1: quien brilla compra caídas]** (pantalla: celdas verdes)
Primer hallazgo. Las únicas dos formas que superan el 0.13 de comprar y esperar en el diseño compran caídas. Y las únicas dos que pasan 0.30 en 2007–2013 también, ambas con 0.58. Ninguna de las siete que siguen la tendencia pasa ninguno de esos dos umbrales. Si solo miraras esos dos periodos, concluirías que comprar caídas es mejor.
BOCETO: celdas verdes resaltadas, todas en la tabla de «caídas»; la tabla de «tendencia» sin celdas verdes. Contadores «2 de 12» y «2 de 12». kb=in.

**[3:55 — Hallazgo 2: quien brilla, cae más]** (pantalla: columna 2021–24)
Segundo hallazgo. En 2021–2024, ninguna de las 12 pasa 0.30, y las que compraban caídas son las que más caen: de −0.33 a −1.01. Las que siguen la tendencia pierden menos, de −0.02 a −0.31. Los resultados más altos del pasado y los más bajos del presente salen de la misma familia.
BOCETO: columna 2021–24 con dos franjas de barras rojas; la de caídas más larga. Sacudida al llegar a −1.01. kb=out.

**[4:40 — Lo que no sé]** (pantalla: signo de interrogación)
Quiero ser claro con el límite. El experimento mide el patrón, no la causa. No medí en qué condiciones de mercado ocurre cada cosa ni cuántas operaciones hace cada forma. Sé que, en estos datos, quien más brilla en dos épocas es quien más cae en la tercera, y que eso es una razón para no fiarse de lo que sale bien en un periodo.
BOCETO: signo de interrogación ámbar y dos etiquetas grises: «causa: no medida», «número de operaciones: no medido».

**[5:10 — Con tu capital]** (pantalla: tarjeta de capital)
La curva de la forma que mejor salió en el diseño, MA200 con RSI de 4 días menor que 20, que es de la familia de las caídas, sobre la cesta de 8 entre 2007 y 2024. Con 100,000 dólares gana 1,738. Comprar y esperar la misma cesta gana 14,407. Con 10,000 dólares serían unos +174 contra +1,441.
BOCETO: curvas reales de `series/extra-v84.json` (estrategia casi plana, «Sin estrategia» subiendo) con contadores finales.

**[5:40 — Conclusión]**
Doce formas, ninguna sobrevive, máximo 2 de 5 filtros. Comprar caídas y seguir la tendencia fallan, cada una a su manera. Y la que más brilla es la que más cae. El trading no se promete: se prueba.

**[6:05 — Ficha del experimento #84]** (pantalla: tarjeta con la ficha y la URL)
Ficha del experimento #84. Estado: murió. Cifra clave: ninguna de las 12 pasa 0.30 en 2021–2024; las que compran caídas dan de −0.33 a −1.01. Filtro que decidió: el Deflated Sharpe, máximo 0.01 de 0.95. Lección: lo que más brilla en el pasado puede ser lo que más cae. Revísalo completo en atlas-lab-one.vercel.app/e/84.
BOCETO: tarjeta con el número «#84», el sello «MURIÓ» en rojo, tres líneas (cifra clave, filtro que decidió, lección) y la URL `atlas-lab-one.vercel.app/e/84` grande abajo. kb=in.

**[6:25 — Cierre]**
Todos los datos en atlas-lab-one.vercel.app, experimento 84. Contenido educativo, no es asesoría financiera.

---

## SHORT (9:16, ≈ 49 s)

**[0-3 s]** «Cinco estrategias compran caídas. Siete siguen la tendencia. En 2021 a 2024, ninguna gana.»
BOCETO: dos franjas de barras rojas sobre b-roll de gráfico (kb=in), overlay 0.6.

**[3-15 s]** «Las que compran caídas brillaron antes: hasta 0.58 en 2007 a 2013. Y son las únicas que le ganan a comprar y esperar en el diseño.»
BOCETO: celdas verdes 0.58 y 0.36 sobre la tabla (kb=out); ticker arriba.

**[15-30 s]** «Pero en 2021 a 2024 cayeron entre menos 0.33 y menos 1.01. Las que siguen la tendencia, entre menos 0.02 y menos 0.31.»
BOCETO: barras rojas, la más larga −1.01; golpe de bajo + sacudida.

**[30-43 s]** «Lo que más brilla es lo que más se hunde. Doce combinaciones, cero sobrevivientes.»
BOCETO: sello «0 / 12» rojo gigante.

**[43-49 s]** «El video completo está en el canal, y el experimento #84 completo, en el enlace. Brilla más… y cae más.»
BOCETO: texto final «Video completo en el canal · Experimento #84 completo en el enlace» + pequeño «No es asesoría financiera · El trading no se promete: se prueba». Loop: «brilla más, cae más» responde al «ninguna gana» del arranque.

---

## Descripción de YouTube (video largo)
https://atlas-lab-one.vercel.app/e/84?utm_source=youtube&utm_medium=video&utm_campaign=exp084-t3
Ficha del experimento #84: murió · 12 formas, 0 sobrevivientes, máximo 2 de 5 filtros · en 2021–2024, las 5 que compran caídas dan de −0.33 a −1.01 y las 7 que siguen la tendencia, de −0.02 a −0.31 · con $100,000: +$1,738 contra +$14,407 de comprar y esperar.
Agrupo las 12 combinaciones (filtro de media de 100 o 200 días más entrada rápida con RSI, IBS, cruce de EMAs, Donchian o momentum) en comprar caídas contra seguir la tendencia. Versión diaria, siete pares de divisas y oro, 3 puntos básicos de costo, 5 filtros.
Contenido educativo. No es asesoría financiera ni recomendación de inversión.

## Descripción de YouTube (Short)
https://atlas-lab-one.vercel.app/e/84?utm_source=youtube&utm_medium=short&utm_campaign=exp084-t3
Ficha del experimento #84: murió · comprar caídas: de −0.33 a −1.01 en 2021–2024 · seguir la tendencia: de −0.02 a −0.31 · 0 de 12 sobreviven.
Contenido educativo. No es asesoría financiera.

## Capítulos
0:00 Gancho · 0:15 Qué es este experimento · 0:25 Dos formas de entrar · 1:20 Las 12 en dos grupos · 2:10 La tabla · 3:10 Hallazgo 1 · 3:55 Hallazgo 2 · 4:40 Lo que no sé · 5:10 Con tu capital · 5:40 Conclusión · 6:05 Ficha del experimento

## Etiquetas
reversión a la media, seguimiento de tendencia, comprar caídas, rsi, ibs, donchian, momentum, backtest, fuera de muestra, multitemporalidad, atlas lab, trading con datos

## Rúbrica (autoevaluación, 1–5)
| Pieza | hook_0_3s | ritmo | promesa_cumplida | potencial_loop | claridad_no_traders | honestidad_atlas | audio | cta | Promedio |
|---|---|---|---|---|---|---|---|---|---|
| Largo | 4 | 4 | 5 | 4 | 4 | 5 | 4 | 4 | 4.3 |
| Short | 4 | 4 | 5 | 5 | 4 | 5 | 4 | 4 | 4.4 |

Hook ≥ 4 ✓ · honestidad 5 ✓. Punto débil: la agrupación en «caídas» y «tendencia» es del guion; la ficha no la hace. Se dice qué entrada lleva cada forma y se declara que la causa y el número de operaciones no se midieron. Es la versión diaria de una idea de varias temporalidades.

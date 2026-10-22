# Experimento #80 — Tema 3: la letra pequeña del 2x (una curva que no paga costos)

Tema 3 de 4 del experimento #80 · Qué aporta frente a los otros temas: es el tema de la letra pequeña. Desmonta la curva de B3 pieza por pieza (apalancamiento de hasta 2x, sin costos, sin financiamiento, sin fuera de muestra) y la cruza con el triple test del #62, donde esa regla ya murió. El tema 1 la compara con comprar y esperar; el tema 2 compara los cuatro contendientes; el tema 4 trata Calmar contra Sharpe.
Estado del guion: **BORRADOR — pendiente de aprobación**
Estado del experimento: **parcial** (B3 rinde casi igual que comprar y esperar con menos caída, pero es beta gestionada, no ventaja) · Serie E — «Gestión de riesgo: lo poco que se sostuvo» (plan-series.md) · 1 largo + 1 Short
Datos usados: `experiments.json` (v=80: kpis, metrics, verdict, notes, capital, params_view), `exp_details.json` (extra-v80: algo, code, filters), `series/extra-v80.json` (1.ª curva = B3; 2.ª = «Sin estrategia»), tabla «Con tu capital» de `docs/youtube` (filas 80 y 62; la fila 62 es la cesta de divisas + oro).
Producción (CLAUDE.md del canal): b-roll real detrás de cada escena con overlay oscuro 0.6, Ken Burns alternando in/out, subtítulos karaoke en MAYÚSCULAS con palabras clave en rojo, un dato visual por escena, golpe de bajo + sacudida solo en 1–2 momentos. Colores: rojo `#e11d2a`, verde `#22c55e`, fondo `#09090b`. Cifras en dígitos aquí; en el campo `tts` del JSON, en palabras.

## Títulos (3 opciones)
1. +$297,399 con $100,000… en una curva que no paga costos
2. +11.2% al año con hasta 2x: la letra pequeña de la curva de B3
3. Su regla ya murió en el experimento 62: Sharpe fuera de muestra −0.03

## Miniatura (pensada para el título 1)
Fondo `#09090b`. Una curva verde subiendo con un candado ámbar «2x» pegado a la línea y una etiqueta tachada «costos». Texto grande: «SIN COSTOS» en rojo y blanco (2 palabras, sin repetir el título). Logo ATLAS arriba a la derecha.

---

## VIDEO LARGO (16:9, ≈ 6 min)

**[0:00 — Gancho]** (pantalla: contador hasta «+$297,399»)
Con 100,000 dólares, entre 2012 y 2024, esta curva gana 297,399. Suena a estrategia ganadora. Pero usa hasta el doble de exposición y no paga ni un solo costo.
BOCETO: contador animado 0 → +$297,399 sobre la curva real de B3 de `series/extra-v80.json`; al llegar, aparecen un candado «2x» y una etiqueta «costos: $0». kb=in.

**[0:15 — Qué es este experimento]** (pantalla: rótulo con el número y el nombre)
Este es el experimento #80 de ATLAS Lab: Estrategia de ingreso óptima por Calmar (índices + oro). Todos los resultados están en la página del experimento.
BOCETO: rótulo en rojo y blanco «EXPERIMENTO #80» con el nombre debajo, sobre la curva atenuada (overlay 0.6). Whoosh corto. kb=out.

**[0:25 — Cómo se construye B3]** (pantalla: fórmula en tres piezas)
Se llama B3, exposición por tendencia. Tomas comprar y esperar en cinco activos, el S&P 500, el Nasdaq 100, el DAX, el FTSE 100 y el oro, y lo multiplicas por 2 y por la fracción de esos activos que están sobre su media de 200 días. Si ninguno está en tendencia, estás fuera. Si los cinco lo están, estás expuesto al doble. El indicador va rezagado un día. En el código se la llama «Vol-target», pero no usa la volatilidad: es solo la tendencia.
BOCETO: fórmula en pantalla «comprar y esperar × 2 × fracción sobre MA200», acotada entre 0 y 2x, con un deslizador animado que va de 0 a 2. Los cinco iconos de activos se encienden o apagan según estén sobre su media. kb=in.

**[1:10 — Qué significa «2x»]** (pantalla: dos barras de exposición)
Estar expuesto al doble significa que por cada dólar de la cartera tienes dos dólares en el mercado. Cuando el mercado sube, ganas más rápido; cuando baja, pierdes más rápido. Y esa exposición extra no es gratis: se financia con dinero prestado o con derivados, y el financiamiento es el interés que pagas por esa parte. Hasta aquí es lo normal. La pregunta es qué hace la curva con ese costo.
BOCETO: dos barras, una de «1x» y otra de «2x», con una cinta ámbar sobre la parte extra: «exposición financiada». Dos flechas, una verde (mercado sube) y otra roja (mercado baja), más largas en la barra de 2x. kb=out.

**[1:55 — Lo que la curva no incluye]** (pantalla: checklist)
La curva de B3 no incluye costos de operación. Faber y Turtle, los otros contendientes, sí pagan 3 puntos básicos por rotación; B3 no. Tampoco incluye el financiamiento de ese 2x. No tiene prueba fuera de muestra, es decir, no se probó en periodos que la estrategia no hubiera visto. Y no tiene Deflated Sharpe, el filtro que descuenta la suerte de probar muchas ideas. Cuatro ausencias en una sola curva.
BOCETO: checklist de `filters`: ✓ indicador rezagado 1 día; ámbar «costos: Faber/Turtle 3 bps · B3 sin costos»; gris «fuera de muestra: no aplicado»; gris «Deflated Sharpe: no aplicado». Cada ausencia entra con tick.

**[2:55 — Lo que ya sabemos de esta regla]** (pantalla: enlace con el #62)
Hay un dato que pesa más que todos los avisos. Esta misma regla, exposición continua por tendencia con la media de 200 días, ya pasó por la triple prueba en el experimento 62. Ahí murió: Sharpe fuera de muestra de −0.03 y Deflated Sharpe de 0.20, cuando se exige 0.95. Era la cesta de divisas y oro, no índices, así que no es la misma prueba, pero es la misma regla. En esa cesta, entre 2007 y 2024, con 100,000 dólares la regla pierde 6,680, y comprar y esperar gana 2,616.
BOCETO: tarjeta «#62» con tres cifras: «OOS −0.03», «DSR 0.20 (se exige 0.95)» y la fila de capital «−$6,680 contra +$2,616». Cartel gris «otra cesta: divisas + oro». Golpe de bajo + sacudida en «−0.03».

**[3:50 — Con tu capital]** (pantalla: tarjeta de capital con advertencia)
Con 100,000 dólares, entre 2012 y 2024, B3 gana 297,399 y comprar y esperar gana 286,540. Con 10,000 dólares serían unos +29,740 contra +28,654. Casi lo mismo. Y recuerda el cartel: la curva usa apalancamiento de hasta 2x y no incluye costos ni financiamiento; en la vida real el resultado sería menor.
BOCETO: las dos curvas reales de `series/extra-v80.json` casi pegadas, con contadores finales; cartel ámbar permanente con el texto de `capital.note`.

**[4:30 — Lo que sí aporta B3]** (pantalla: tres cifras en verde y dos en rojo)
Para ser justos, B3 aporta algo. Crece +11.2% al año contra +11.0%, con una caída máxima de −26% contra −31%, y su Calmar, el retorno entre la caída, sube de 0.36 a 0.43. Pero el Sharpe baja, 0.67 contra 0.76, y el retiro anual sostenible también, 10.0% contra 12.0%. Es beta gestionada: sigues expuesto al mercado, con un cinturón. Un plan de ingreso sensato, no una ventaja.
BOCETO: cinco cifras en pantalla; en verde las que gana B3 (crecimiento, caída, Calmar) y en rojo las que pierde (Sharpe, retiro). Nota ámbar fija: «con 2x y sin costos».

**[5:10 — Conclusión]**
Una curva con apalancamiento, sin costos, sin financiamiento y sin prueba fuera de muestra no es una estrategia lista para operar, es el borrador de una idea. Y esta idea ya murió en la triple prueba del experimento 62. Resultado parcial. El trading no se promete: se prueba.

**[5:40 — Ficha del experimento #80]** (pantalla: tarjeta con la ficha y la URL)
Ficha del experimento #80. Estado: parcial. Cifra clave: B3 crece +11.2% al año contra +11.0% de comprar y esperar, con caída de −26% contra −31%. Filtro que decidió: el Sharpe, 0.67 contra 0.76, y el retiro sostenible, 10.0% contra 12.0%; además, la curva no incluye costos ni financiamiento del 2x. Lección: es beta gestionada, no ventaja. Revísalo completo en atlas-lab-one.vercel.app/e/80.
BOCETO: tarjeta con el número «#80», el sello «PARCIAL» en ámbar, tres líneas (cifra clave, filtro que decidió, lección) y la URL `atlas-lab-one.vercel.app/e/80` grande abajo. kb=in.

**[6:00 — Cierre]**
Todos los datos en atlas-lab-one.vercel.app, experimento 80. Contenido educativo, no es asesoría financiera.

---

## SHORT (9:16, ≈ 49 s)

**[0-3 s]** «+297,399 dólares con 100,000. Y esa curva no paga ni un costo.»
BOCETO: contador 0 → +$297,399 en verde y un «$0» en rojo para los costos, sobre b-roll de gráfico (kb=in), overlay 0.6.

**[3-14 s]** «Es la exposición por tendencia: comprar y esperar índices y oro, con hasta el doble de exposición cuando están en tendencia.»
BOCETO: deslizador de exposición de 0 a 2x sobre la curva (kb=out); ticker arriba.

**[14-29 s]** «La letra pequeña: usa hasta 2x, no incluye costos, no incluye el financiamiento de ese 2x y no tiene prueba fuera de muestra.»
BOCETO: cuatro ausencias que entran con tick sobre la curva; candado ámbar «2x».

**[29-42 s]** «Y su regla ya murió en la triple prueba del experimento 62: Sharpe fuera de muestra de −0.03.»
BOCETO: tarjeta «#62» con «−0.03» en rojo; golpe de bajo + sacudida.

**[42-49 s]** «El video completo está en el canal, y el experimento #80 completo, en el enlace. Una curva sin costos es una curva sin precio.»
BOCETO: texto final «Video completo en el canal · Experimento #80 completo en el enlace» + pequeño «No es asesoría financiera · El trading no se promete: se prueba». Loop: «sin precio» responde al «no paga ni un costo» del arranque.

---

## Descripción de YouTube (video largo)
https://atlas-lab-one.vercel.app/e/80?utm_source=youtube&utm_medium=video&utm_campaign=exp080-t3
Ficha del experimento #80: parcial · B3 +11.2% anual contra +11.0% de comprar y esperar, caída −26% contra −31% · Sharpe 0.67 contra 0.76 · con $100,000: +$297,399 contra +$286,540 (sin costos ni financiamiento del 2x).
Desmonto la curva de la exposición por tendencia (B3, hasta 2x) en S&P 500, Nasdaq 100, DAX, FTSE 100 y oro (2012–2024): no incluye costos, financiamiento ni prueba fuera de muestra, y su regla ya murió en la triple prueba del experimento 62 (Sharpe fuera de muestra −0.03, Deflated Sharpe 0.20).
Contenido educativo. No es asesoría financiera ni recomendación de inversión.

## Descripción de YouTube (Short)
https://atlas-lab-one.vercel.app/e/80?utm_source=youtube&utm_medium=short&utm_campaign=exp080-t3
Ficha del experimento #80: parcial · +$297,399 con $100,000, hasta 2x y sin costos ni financiamiento · regla ya muerta en el #62 (Sharpe fuera de muestra −0.03).
Contenido educativo. No es asesoría financiera.

## Capítulos
0:00 Gancho · 0:15 Qué es este experimento · 0:25 Cómo se construye B3 · 1:10 Qué significa 2x · 1:55 Lo que no incluye · 2:55 Lo que ya sabemos (#62) · 3:50 Con tu capital · 4:30 Lo que sí aporta · 5:10 Conclusión · 5:40 Ficha del experimento

## Etiquetas
apalancamiento 2x, exposición por tendencia, media de 200 días, backtest sin costos, financiamiento, beta gestionada, calmar ratio, fuera de muestra, deflated sharpe, comprar y mantener, atlas lab, trading con datos

## Rúbrica (autoevaluación, 1–5)
| Pieza | hook_0_3s | ritmo | promesa_cumplida | potencial_loop | claridad_no_traders | honestidad_atlas | audio | cta | Promedio |
|---|---|---|---|---|---|---|---|---|---|
| Largo | 4 | 4 | 5 | 4 | 4 | 5 | 4 | 4 | 4.3 |
| Short | 5 | 4 | 5 | 5 | 4 | 5 | 4 | 4 | 4.5 |

Hook ≥ 4 ✓ · honestidad 5 ✓. Punto débil: el hook muestra una cifra grande que el propio video desmonta; el cartel ámbar «2x · sin costos ni financiamiento» debe verse desde el segundo 3. La referencia al #62 es de otra cesta (divisas + oro) y se rotula como tal.

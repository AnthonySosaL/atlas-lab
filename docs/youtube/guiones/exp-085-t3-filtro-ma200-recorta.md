# Experimento #85 — Tema 3: el filtro de la media de 200 días (recorta la pérdida, no fabrica ventaja)

Tema 3 de 3 del experimento #85 · Qué aporta frente a los otros temas: es el tema del filtro de tendencia. Compara, con las mismas ventanas, la ruptura con y sin la media de 200 días, en los tres periodos, y lo cruza con el mismo efecto en el experimento 89. El tema 1 cuenta el resultado completo y la promesa del «71% de aciertos»; el tema 2 trata el costo de operar seguido.
Estado del guion: **BORRADOR — pendiente de aprobación**
Estado del experimento: **murió** (las 6 formas del núcleo diario pierden; mejor Sharpe 2014–2020 −0.54, peor −1.58; 0 de 5 filtros) · Serie A — «Probé la estrategia de TikTok» (plan-series.md; relacionado con el #90) · 1 largo + 1 Short
Datos usados: `experiments.json` (v=85: kpis, metrics, forms, verdict, analysis), `exp_details.json` (extra-v85: algo, code, filters), `series/extra-v85.json` (1.ª curva = «MA200 + rangebreak 5d»; 2.ª = «Sin estrategia»), tabla «Con tu capital» de `docs/youtube`; `forms` del experimento 89 para el mismo efecto con la barrida.
Producción (CLAUDE.md del canal): b-roll real detrás de cada escena con overlay oscuro 0.6, Ken Burns alternando in/out, subtítulos karaoke en MAYÚSCULAS con palabras clave en rojo, un dato visual por escena, golpe de bajo + sacudida solo en 1–2 momentos. Colores: rojo `#e11d2a`, verde `#22c55e`, fondo `#09090b`. Cifras en dígitos aquí; en el campo `tts` del JSON, en palabras.

## Títulos (3 opciones)
1. El filtro de la media de 200 días mejora la ruptura de −0.97 a −0.54… y sigue perdiendo
2. Un filtro de tendencia recorta la pérdida en los tres periodos, pero no la convierte en ganancia
3. Con el mejor filtro, la ruptura de TikTok aún pierde $25,460 con $100,000

## Miniatura (pensada para el título 1)
Fondo `#09090b`. Dos barras rojas, una larga «−0.97» y otra más corta «−0.54» con un embudo/filtro dibujado entre ellas; las dos bajo la línea del cero. Texto grande: «MEJOR, NO BUENA» (3 palabras, sin repetir el título). Logo ATLAS arriba a la derecha.

---

## VIDEO LARGO (16:9, ≈ 5.5 min)

**[0:00 — Gancho]** (pantalla: dos barras rojas y un filtro)
Agrega el filtro de la media de 200 días a la ruptura del máximo de 5 días y el Sharpe pasa de −0.97 a −0.54. Mejor. Y aun así, pierde.
BOCETO: barra roja «−0.97 sin filtro» y, tras un embudo «MA200», una barra más corta «−0.54 con filtro»; ambas bajo la línea del cero. kb=in.

**[0:15 — Qué es este experimento]** (pantalla: rótulo con el número y el nombre)
Este es el experimento #85 de ATLAS Lab: TikTok 1, Ruptura del rango del día previo más retroceso. Todos los resultados están en la página del experimento.
BOCETO: rótulo en rojo y blanco «EXPERIMENTO #85» con el nombre debajo, sobre las barras atenuadas (overlay 0.6). Whoosh corto. kb=out.

**[0:25 — Qué es un filtro de tendencia]** (pantalla: precio y media de 200 días)
La media móvil de 200 días es el promedio de los últimos 200 cierres. Si el precio está por encima de ella, se considera que el activo está en tendencia alcista. Un filtro de tendencia significa: solo compro la señal si el precio está sobre esa media. Con la ruptura, la regla pasa a ser: compro cuando el cierre supera el máximo de los N días previos y además está sobre su media de 200 días. El Sharpe es la ganancia por unidad de riesgo.
BOCETO: precio con su MA200; zonas verdes (sobre la media: se permite comprar) y grises (bajo la media: no se compra). kb=in.

**[1:15 — La comparación]** (pantalla: dos pares de barras)
Tengo dos pares para comparar. Ruptura de 5 días: sin filtro, −0.97 en el periodo de diseño, 2014–2020; con filtro, −0.54. Ruptura de 1 día: sin filtro, −1.58; con filtro, −1.10. En los dos casos, el filtro recorta la pérdida.
| Forma | Sin filtro | Con MA200 |
|---|---|---|
| Ruptura de 5 días | −0.97 | −0.54 |
| Ruptura de 1 día | −1.58 | −1.10 |
BOCETO: dos pares de barras rojas, la de «con filtro» más corta en cada par. kb=out.

**[2:05 — En los tres periodos]** (pantalla: tabla)
Y no es un accidente de un solo periodo. En 2007–2013 la ruptura de 5 días pasa de −1.02 a −0.86 y la de 1 día de −1.19 a −0.97. En 2021–2024, la de 5 días pasa de −1.65 a −0.80 y la de 1 día de −1.44 a −1.24. Con las dos ventanas y en los tres periodos, el filtro mejora el resultado.
| Forma | Periodo | Sin filtro | Con MA200 |
|---|---|---|---|
| Ruptura 5 días | 2007–13 | −1.02 | −0.86 |
| Ruptura 5 días | 2014–20 | −0.97 | −0.54 |
| Ruptura 5 días | 2021–24 | −1.65 | −0.80 |
| Ruptura 1 día | 2007–13 | −1.19 | −0.97 |
| Ruptura 1 día | 2014–20 | −1.58 | −1.10 |
| Ruptura 1 día | 2021–24 | −1.44 | −1.24 |
BOCETO: tabla fila a fila; la columna «Con MA200» en verde pálido (mejora) pero todas las cifras con signo negativo en rojo. Cartel: «Mejor ≠ bueno».

**[3:00 — Por qué mejora]** (pantalla: precio que cae)
Mi lectura, que no medí: el filtro deja de comprar rupturas cuando el activo está por debajo de su media, que suele ser cuando las caídas son más fuertes. Además, compra menos veces y paga menos costos. No medí cuántas operaciones evita ni en qué condiciones. Lo que sí está en la tabla es que mejora, en los tres periodos.
BOCETO: precio por debajo de su MA200 con rupturas tachadas en gris. Etiqueta gris «razonamiento, no medido». kb=in.

**[3:40 — Pero no cruza el cero]** (pantalla: cinco puertas)
Aun con filtro, ninguna cruza el cero. Ninguna de las seis formas supera el 0.13 de comprar y esperar en el diseño. El Deflated Sharpe, que descuenta la suerte de probar muchas ideas, tiene un máximo de 0.00, cuando se exige 0.95. Y el mejor Monte Carlo es un p de 0.16, lejos de 0.05. Máximo de filtros superados: 0 de 5.
BOCETO: cinco puertas cerradas con sus umbrales y «0 / 5» en rojo. kb=out.

**[4:10 — El mismo efecto en otro experimento]** (pantalla: pares del experimento 89)
El efecto se repite con la idea contraria. En el experimento 89, que compra después de una barrida del mínimo previo, la forma de 1 día pasa de −1.67 sin filtro a −0.90 con la media de 200 días, y la de 3 días de −1.43 a −0.82. El filtro ayuda; la estrategia sigue perdiendo.
| Barrida (#89) | Sin filtro | Con MA200 |
|---|---|---|
| 1 día | −1.67 | −0.90 |
| 3 días | −1.43 | −0.82 |
BOCETO: dos pares de barras rojas más, con cartel «#89 · mismo efecto». kb=in.

**[4:45 — Con tu capital]** (pantalla: tarjeta de capital)
La curva de la mejor forma, MA200 con ruptura de 5 días, sobre la cesta de 8 entre 2007 y 2024. Con 100,000 dólares pierde 25,460. Comprar y esperar la misma cesta gana 14,407. Con 10,000 dólares serían unos −2,546 contra +1,441. Un filtro que mejora no es un filtro que arregla.
BOCETO: curvas reales de `series/extra-v85.json` (estrategia roja cayendo, «Sin estrategia» blanca subiendo) con contadores finales.

**[5:10 — Conclusión]**
Un filtro de tendencia recorta la pérdida, pero no crea una ventaja que no existe. La ruptura del rango previo, con o sin filtro, no deja ventaja en estos datos. El trading no se promete: se prueba.

**[5:30 — Ficha del experimento #85]** (pantalla: tarjeta con la ficha y la URL)
Ficha del experimento #85. Estado: murió. Cifra clave: con el filtro de 200 días, la ruptura de 5 días pasa de −0.97 a −0.54, y con 100,000 dólares la mejor pierde 25,460. Filtro que decidió: batir a comprar y esperar, 0 de 6 superan 0.13. Lección: un filtro recorta la pérdida, no fabrica ventaja. Revísalo completo en atlas-lab-one.vercel.app/e/85.
BOCETO: tarjeta con el número «#85», el sello «MURIÓ» en rojo, tres líneas (cifra clave, filtro que decidió, lección) y la URL `atlas-lab-one.vercel.app/e/85` grande abajo. kb=in.

**[5:50 — Cierre]**
Todos los datos en atlas-lab-one.vercel.app, experimento 85. Contenido educativo, no es asesoría financiera.

---

## SHORT (9:16, ≈ 48 s)

**[0-3 s]** «El filtro de la media de 200 días mejora esta estrategia. Y aun así pierde.»
BOCETO: barras rojas −0.97 → −0.54 con un embudo en medio, sobre b-roll de gráfico (kb=in), overlay 0.6.

**[3-15 s]** «Ruptura del máximo de 5 días: Sharpe de menos 0.97. Con el filtro de tendencia: menos 0.54.»
BOCETO: dos barras con tick; ticker arriba (kb=out).

**[15-30 s]** «La de 1 día pasa de menos 1.58 a menos 1.10. Y mejora en los tres periodos: 2007 a 2013, 2014 a 2020 y 2021 a 2024.»
BOCETO: tabla de seis filas con la mejora en verde pálido y cifras en rojo.

**[30-43 s]** «Pero ninguna de las seis supera el 0.13 de comprar y esperar. Con el filtro, la mejor aún pierde 25,460 dólares con 100,000.»
BOCETO: tarjeta de capital con −$25,460 rojo; golpe de bajo + sacudida.

**[43-48 s]** «El video completo está en el canal, y el experimento #85 completo, en el enlace. Un filtro recorta la pérdida. No fabrica ventaja.»
BOCETO: texto final «Video completo en el canal · Experimento #85 completo en el enlace» + pequeño «No es asesoría financiera · El trading no se promete: se prueba». Loop: «no fabrica ventaja» responde al «aun así pierde» del arranque.

---

## Descripción de YouTube (video largo)
https://atlas-lab-one.vercel.app/e/85?utm_source=youtube&utm_medium=video&utm_campaign=exp085-t3
Ficha del experimento #85: murió · 6 formas del núcleo diario de la ruptura del rango previo, 0 de 5 filtros · con el filtro de 200 días, la ruptura de 5 días pasa de −0.97 a −0.54 · con $100,000 la mejor pierde $25,460 contra +$14,407 de comprar y esperar.
Comparo la ruptura del máximo de 1 y 5 días con y sin la media de 200 días en tres periodos (2007–2013, 2014–2020, 2021–2024) y muestro el mismo efecto en el experimento 89. Siete pares de divisas y oro, 3 puntos básicos de costo.
Contenido educativo. No es asesoría financiera ni recomendación de inversión.

## Descripción de YouTube (Short)
https://atlas-lab-one.vercel.app/e/85?utm_source=youtube&utm_medium=short&utm_campaign=exp085-t3
Ficha del experimento #85: murió · el filtro de 200 días mejora la ruptura de −0.97 a −0.54, pero 0 de 6 superan el 0.13 de comprar y esperar.
Contenido educativo. No es asesoría financiera.

## Capítulos
0:00 Gancho · 0:15 Qué es este experimento · 0:25 Qué es un filtro de tendencia · 1:15 La comparación · 2:05 En los tres periodos · 3:00 Por qué mejora · 3:40 Pero no cruza el cero · 4:10 En el experimento 89 · 4:45 Con tu capital · 5:10 Conclusión · 5:30 Ficha del experimento

## Etiquetas
filtro de tendencia, media de 200 días, ruptura del rango, breakout, estrategia de tiktok, sharpe ratio, backtest, fuera de muestra, forex, comprar y mantener, atlas lab, trading con datos

## Rúbrica (autoevaluación, 1–5)
| Pieza | hook_0_3s | ritmo | promesa_cumplida | potencial_loop | claridad_no_traders | honestidad_atlas | audio | cta | Promedio |
|---|---|---|---|---|---|---|---|---|---|
| Largo | 4 | 4 | 5 | 4 | 4 | 5 | 4 | 4 | 4.3 |
| Short | 5 | 4 | 5 | 5 | 4 | 5 | 4 | 4 | 4.5 |

Hook ≥ 4 ✓ · honestidad 5 ✓. Punto débil: muchas cifras en las tablas del bloque 2:05; el Short usa solo dos pares. Solo se prueba el núcleo diario de la ruptura; el esquema completo es intradía y discrecional. La explicación del porqué es una lectura no medida y se rotula así.

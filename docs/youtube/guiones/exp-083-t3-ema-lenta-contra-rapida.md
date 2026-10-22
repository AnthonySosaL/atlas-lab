# Experimento #83 — Tema 3: EMA lenta contra EMA rápida (el péndulo de las épocas)

Tema 3 de 3 del experimento #83 · Qué aporta frente a los otros temas: ordena las 8 formas por velocidad y muestra dos patrones verificables en la tabla: en el periodo de diseño, cuanto más lenta la media, menos pierde; en 2021–2024, los cruces rápidos son los que mejor salen. Cada época premia una velocidad distinta, así que no se puede elegir de antemano. El tema 1 recorre las 8 formas y el ranking de TikTok; el tema 2 sigue al golden cross 50/200.
Estado del guion: **BORRADOR — pendiente de aprobación**
Estado del experimento: **murió** (las 8 formas murieron, máximo 1 de 5 filtros; ninguna supera el Sharpe 0.13 de comprar y esperar) · Serie A — «Probé la estrategia de TikTok» (plan-series.md) · 1 largo + 1 Short
Datos usados: `experiments.json` (v=83: kpis, metrics, forms, verdict, analysis, notes, params_view), `exp_details.json` (extra-v83: algo, code, filters), `series/extra-v83.json` (1.ª curva = EMA-cross 50/200; 2.ª = «Sin estrategia»), tabla «Con tu capital» de `docs/youtube`.
Producción (CLAUDE.md del canal): b-roll real detrás de cada escena con overlay oscuro 0.6, Ken Burns alternando in/out, subtítulos karaoke en MAYÚSCULAS con palabras clave en rojo, un dato visual por escena, golpe de bajo + sacudida solo en 1–2 momentos. Colores: rojo `#e11d2a`, verde `#22c55e`, fondo `#09090b`. Cifras en dígitos aquí; en el campo `tts` del JSON, en palabras.

## Títulos (3 opciones)
1. Media lenta o rápida: de −0.50 a +0.10 en el diseño, y al revés en 2021–2024
2. Ocho EMAs, tres épocas, tres ganadoras: 0.10, 0.36 y 0.46
3. Las medias rápidas ganan en 2021–2024 (0.46) y pierden en 2014–2020 (−0.34)

## Miniatura (pensada para el título 1)
Fondo `#09090b`. Un péndulo dibujado con una línea de EMA: a la izquierda «lenta ✓» en verde, a la derecha «rápida ✓» en rojo. Texto grande: «NADIE ACIERTA» (2 palabras, sin repetir el título). Logo ATLAS arriba a la derecha.

---

## VIDEO LARGO (16:9, ≈ 6 min)

**[0:00 — Gancho]** (pantalla: tres barras con tres nombres distintos)
Cada época tiene su ganadora. En el periodo de diseño, 2014–2020, la mejor de ocho medias exponenciales da 0.10. En 2007–2013, el cruce 50/200 da 0.36. En 2021–2024, el cruce 9/21 da 0.46. Tres épocas, tres ganadoras distintas.
BOCETO: tres barras (0.10, 0.36, 0.46) con el nombre de la forma ganadora sobre cada una; la línea guía «comprar y esperar: 0.13» cruza la primera. kb=in.

**[0:15 — Qué es este experimento]** (pantalla: rótulo con el número y el nombre)
Este es el experimento #83 de ATLAS Lab: EMAs a favor de la tendencia, ranking de TikTok, 8 formas. Todos los resultados están en la página del experimento.
BOCETO: rótulo en rojo y blanco «EXPERIMENTO #83» con el nombre debajo, sobre las barras atenuadas (overlay 0.6). Whoosh corto. kb=out.

**[0:25 — Qué significa rápida o lenta]** (pantalla: dos EMAs sobre el mismo precio)
Una EMA, o media móvil exponencial, es un promedio de los precios que pesa más los días recientes. Cuanto menos días, más rápida: sigue al precio muy de cerca y cambia de señal a menudo. Cuantos más días, más lenta: ignora el ruido y cambia de señal pocas veces. Probé ocho: comprar si el cierre está sobre su EMA de 20, 50, 100 o 200 días, y comprar si una EMA rápida está sobre una lenta, en los cruces 9/21, 12/26, 20/50 y 50/200.
BOCETO: precio con una EMA de 20 días (pegada al precio, verde) y una de 200 (suave, blanca), rotuladas «ilustración». Ocho tarjetas ordenadas de rápida a lenta. kb=in.

**[1:15 — Cómo lo probé]** (pantalla: reglas y cinco filtros)
Siete pares de divisas y oro, con la señal ejecutada al día siguiente, 3 puntos básicos de costo por rotación y solo compra. El periodo de diseño es 2014–2020, donde comprar y esperar da un Sharpe de 0.13. El Sharpe es la ganancia por unidad de riesgo. Dos periodos fuera de muestra, que la estrategia nunca vio: 2007–2013 y 2021–2024.
BOCETO: línea de tiempo con los tres periodos; checklist `filters`: ✓ costos 3 bps, ✓ rezago de 1 día. kb=out.

**[1:55 — La tabla, ordenada por velocidad]** (pantalla: tabla animada de rápida a lenta)
Ordenadas de rápida a lenta. Entre las que miran el cierre contra su EMA: la de 20 días da −0.50 en diseño, la de 50, −0.19, la de 100, −0.14 y la de 200, +0.10. Entre los cruces: el 9/21 da −0.34, el 12/26, −0.28, el 20/50, −0.01 y el 50/200, +0.10.
| Forma (de rápida a lenta) | 2014–20 | 2007–13 | 2021–24 |
|---|---|---|---|
| EMA-trend 20 | −0.50 | −0.16 | −0.13 |
| EMA-trend 50 | −0.19 | −0.05 | −0.02 |
| EMA-trend 100 | −0.14 | 0.09 | 0.04 |
| EMA-trend 200 | 0.10 | 0.24 | −0.26 |
| EMA-cross 9/21 | −0.34 | 0.14 | 0.46 |
| EMA-cross 12/26 | −0.28 | 0.19 | 0.38 |
| EMA-cross 20/50 | −0.01 | −0.01 | 0.23 |
| EMA-cross 50/200 | 0.10 | 0.36 | −0.16 |
BOCETO: tabla fila a fila con mapa de calor; la columna 2014–20 va de rojo intenso a verde pálido de arriba hacia abajo en cada familia. Línea guía «comprar y esperar: 0.13». kb=in.

**[3:00 — Patrón 1: en el diseño, más lenta pierde menos]** (pantalla: dos escaleras)
Primer patrón. En el periodo de diseño, en las dos familias, cuanto más lenta la media, menos pierde: de −0.50 a +0.10 entre las que miran el cierre, y de −0.34 a +0.10 entre los cruces. Mi lectura, que no medí: una media rápida cambia de señal muchas veces, y cada cambio paga 3 puntos básicos de costo. Una lenta cambia poco y paga menos.
BOCETO: dos escaleras de barras, de −0.50 a 0.10 y de −0.34 a 0.10, que suben de izquierda a derecha. Etiqueta gris «razonamiento, no medido» junto a la explicación de los costos. Golpe de bajo en −0.50.

**[3:50 — Patrón 2: en 2021–2024 se invierte]** (pantalla: columna 2021–24)
Segundo patrón. En 2021–2024 le toca a las rápidas. El cruce 9/21 da 0.46 y el 12/26, 0.38: los dos superan la vara de 0.30. El 20/50 da 0.23. Y el cruce lento 50/200, el golden cross, que era el mejor de 2007–2013 con 0.36, da −0.16. Lo que funcionó en una época se vuelve contra ti en la otra.
BOCETO: columna 2021–24 resaltada; barras verdes para 0.46 y 0.38, naranja para 0.23, roja para −0.16. Flecha de péndulo entre «lenta» y «rápida». kb=out.

**[4:35 — Qué significa para elegir]** (pantalla: tres épocas)
Esto es lo que me importa: la mejor velocidad cambia con la época. Si hubieras elegido la media viendo solo el periodo de diseño, habrías elegido la más lenta, y esa se hunde en 2021–2024. Si hubieras mirado solo 2021–2024, habrías elegido la rápida, que en diseño pierde. Elegir la velocidad mirando el pasado es elegir la ganadora de una época.
BOCETO: tres épocas en línea de tiempo, cada una con su ganadora marcada con una corona; las coronas apuntan a formas distintas. kb=in.

**[5:10 — Con tu capital]** (pantalla: tarjeta de capital)
Esta es la curva del cruce 50/200, el más lento, sobre la cesta de 8 entre 2007 y 2024. Con 100,000 dólares gana 13,487. Comprar y esperar la misma cesta gana 14,407. Con 10,000 dólares serían unos +1,349 contra +1,441.
BOCETO: curvas reales de `series/extra-v83.json` casi superpuestas con contadores finales.

**[5:40 — Conclusión]**
Las ocho murieron, con un máximo de 1 de 5 filtros. En el diseño, ninguna supera el 0.13 de comprar y esperar. Y cada época premia una velocidad distinta, así que ninguna se puede elegir de antemano. El trading no se promete: se prueba.

**[6:00 — Ficha del experimento #83]** (pantalla: tarjeta con la ficha y la URL)
Ficha del experimento #83. Estado: murió. Cifra clave: ninguna de las 8 formas supera el Sharpe de 0.13 de comprar y esperar; las ganadoras de cada época son distintas (0.10, 0.36 y 0.46). Filtro que decidió: el Deflated Sharpe, máximo 0.002 de 0.95. Lección: la mejor velocidad cambia con la época. Revísalo completo en atlas-lab-one.vercel.app/e/83.
BOCETO: tarjeta con el número «#83», el sello «MURIÓ» en rojo, tres líneas (cifra clave, filtro que decidió, lección) y la URL `atlas-lab-one.vercel.app/e/83` grande abajo. kb=in.

**[6:20 — Cierre]**
Todos los datos en atlas-lab-one.vercel.app, experimento 83. Contenido educativo, no es asesoría financiera.

---

## SHORT (9:16, ≈ 49 s)

**[0-3 s]** «Ocho medias, tres épocas, tres ganadoras distintas: 0.10, 0.36 y 0.46.»
BOCETO: tres barras con sus nombres sobre b-roll de gráfico (kb=in), overlay 0.6.

**[3-15 s]** «En el periodo de diseño, cuanto más lenta la media, menos pierde: de menos 0.50 con la de 20 días a más 0.10 con la de 200.»
BOCETO: escalera de barras de −0.50 a +0.10 (kb=out); ticker arriba.

**[15-30 s]** «Pero de 2021 a 2024 se invierte: el cruce rápido de 9 y 21 da 0.46 y el lento de 50 y 200 da menos 0.16.»
BOCETO: barra verde 0.46 y barra roja −0.16 frente a frente; golpe de bajo + sacudida en −0.16.

**[30-43 s]** «Ninguna supera el 0.13 de comprar y esperar en el diseño. Y ninguna pasa más de uno de cinco filtros.»
BOCETO: línea guía 0.13 con las barras por debajo; sello «1 / 5».

**[43-49 s]** «El video completo está en el canal, y el experimento #83 completo, en el enlace. Cada época premia una velocidad distinta.»
BOCETO: texto final «Video completo en el canal · Experimento #83 completo en el enlace» + pequeño «No es asesoría financiera · El trading no se promete: se prueba». Loop: «una velocidad distinta» responde al «tres ganadoras distintas» del arranque.

---

## Descripción de YouTube (video largo)
https://atlas-lab-one.vercel.app/e/83?utm_source=youtube&utm_medium=video&utm_campaign=exp083-t3
Ficha del experimento #83: murió · 8 formas de EMAs, 0 sobrevivientes, máximo 1 de 5 filtros · mejor Sharpe por época: 0.10 (2014–2020), 0.36 (2007–2013) y 0.46 (2021–2024), contra 0.13 de comprar y esperar en el diseño.
Ordeno las 8 EMAs de rápida a lenta (EMA 20/50/100/200 y cruces 9/21, 12/26, 20/50 y 50/200) y muestro dos patrones: más lenta pierde menos en el diseño, y en 2021–2024 ganan las rápidas. Siete pares de divisas y oro, 3 puntos básicos de costo.
Contenido educativo. No es asesoría financiera ni recomendación de inversión.

## Descripción de YouTube (Short)
https://atlas-lab-one.vercel.app/e/83?utm_source=youtube&utm_medium=short&utm_campaign=exp083-t3
Ficha del experimento #83: murió · 8 EMAs, 3 épocas, 3 ganadoras distintas (0.10, 0.36, 0.46) · ninguna supera el 0.13 de comprar y esperar en el diseño.
Contenido educativo. No es asesoría financiera.

## Capítulos
0:00 Gancho · 0:15 Qué es este experimento · 0:25 Rápida o lenta · 1:15 Cómo lo probé · 1:55 La tabla · 3:00 Patrón 1 · 3:50 Patrón 2 · 4:35 Qué significa · 5:10 Con tu capital · 5:40 Conclusión · 6:00 Ficha del experimento

## Etiquetas
media móvil exponencial, ema rápida y lenta, cruce de medias, seguimiento de tendencia, sobreajuste, backtest, fuera de muestra, costos de trading, forex, estrategia de tiktok, atlas lab, trading con datos

## Rúbrica (autoevaluación, 1–5)
| Pieza | hook_0_3s | ritmo | promesa_cumplida | potencial_loop | claridad_no_traders | honestidad_atlas | audio | cta | Promedio |
|---|---|---|---|---|---|---|---|---|---|
| Largo | 4 | 4 | 5 | 4 | 4 | 5 | 4 | 4 | 4.3 |
| Short | 4 | 4 | 5 | 5 | 4 | 5 | 4 | 4 | 4.4 |

Hook ≥ 4 ✓ · honestidad 5 ✓. Punto débil: en el periodo de diseño la EMA de 200 y el cruce 50/200 empatan en 0.10; la ficha destaca la EMA de 200 como mejor de diseño, y el guion lo dice así. La explicación por los costos está rotulada «razonamiento, no medido»: no se midió el número de operaciones.

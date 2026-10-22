# Experimento #89 — Tema 2: ruptura contra barrida (dos apuestas contrarias, el mismo resultado)

Tema 2 de 3 del experimento #89 · Qué aporta frente a los otros temas: es el tema de la comparación. Pone lado a lado las ocho formas de la barrida (#89) y las seis de la ruptura (#85) ventana por ventana, con las mismas reglas, y las cruza con el dinero (−$25,460 contra −$21,472 con $100,000) y con los índices (#90). El tema 1 cuenta el resultado completo de las 8 formas; el tema 3 explica la barrida de liquidez para principiantes.
Estado del guion: **BORRADOR — pendiente de aprobación**
Estado del experimento: **murió** (las 8 formas pierden fuerte: Sharpe 2014–2020 de −0.82 a −1.67; 0 de 5 filtros) · Serie A — «Probé la estrategia de TikTok» (plan-series.md) · 1 largo + 1 Short
Datos usados: `experiments.json` (v=89: kpis, metrics, forms, verdict, analysis, notes), `exp_details.json` (extra-v89: algo, code, filters), `series/extra-v89.json` (1.ª curva = «MA200 + sweep_rev 3d», cesta de 8; 2.ª = «Sin estrategia»), tabla «Con tu capital» de `docs/youtube` (filas 85, 89 y 90), `forms` del #85 y cifras del #90.
Producción (CLAUDE.md del canal): b-roll real detrás de cada escena con overlay oscuro 0.6, Ken Burns alternando in/out, subtítulos karaoke en MAYÚSCULAS con palabras clave en rojo, un dato visual por escena, golpe de bajo + sacudida solo en 1–2 momentos. Colores: rojo `#e11d2a`, verde `#22c55e`, fondo `#09090b`. Cifras en dígitos aquí; en el campo `tts` del JSON, en palabras.

## Títulos (3 opciones)
1. Compré la ruptura: −$25,460. Compré lo contrario: −$21,472. Con $100,000
2. Ruptura contra barrida: ventana por ventana, las dos pierden
3. Dos TikToks opuestos sobre el mismo rango: mismo resultado, mismas pérdidas

## Miniatura (pensada para el título 1)
Fondo `#09090b`. Dos flechas opuestas, cada una con su cifra: «→ −25,460» y «← −21,472», ambas en rojo. Texto grande: «MISMA PÉRDIDA» (2 palabras, sin repetir el título). Logo ATLAS arriba a la derecha.

---

## VIDEO LARGO (16:9, ≈ 6 min)

**[0:00 — Gancho]** (pantalla: dos flechas opuestas y dos cifras)
Con 100,000 dólares, entre 2007 y 2024, la mejor versión de comprar la ruptura del rango previo pierde 25,460. La mejor versión de hacer exactamente lo contrario, comprar después de una barrida, pierde 21,472.
BOCETO: dos flechas opuestas (→ ruptura, ← barrida) con contadores −$25,460 y −$21,472 en rojo y, debajo, +$14,407 en blanco para comprar y esperar. kb=in.

**[0:15 — Qué es este experimento]** (pantalla: rótulo con el número y el nombre)
Este es el experimento #89 de ATLAS Lab: TikTok 5, Candle Range Theory, barrido más FVG. Todos los resultados están en la página del experimento.
BOCETO: rótulo en rojo y blanco «EXPERIMENTO #89» con el nombre debajo, sobre las flechas atenuadas (overlay 0.6). Whoosh corto. kb=out.

**[0:25 — Dos ideas opuestas sobre el mismo rango]** (pantalla: rango del día previo)
Las dos ideas parten del mismo dibujo: el máximo y el mínimo del día anterior. La ruptura dice: si el precio cierra por encima del máximo, sigue subiendo, compra. La barrida dice lo contrario: si el precio se asoma por debajo del mínimo y cierra de vuelta por encima, fue un falso rompimiento, compra la vuelta. Dos TikToks distintos, dos apuestas contrarias. Los esquemas completos son intradía y discrecionales, así que probé el núcleo diario de cada uno.
BOCETO: rango del día previo con dos esquemas: arriba, cierre sobre el máximo con flecha de compra; abajo, mecha que barre el mínimo y cierra dentro, con flecha de compra (ilustración). kb=in.

**[1:15 — El mismo terreno de juego]** (pantalla: reglas comunes)
Para que sea una comparación justa, las dos pasan por lo mismo. Siete pares de divisas más oro, de 2007 a 2024, la señal ejecutada al día siguiente, 3 puntos básicos de costo por rotación y solo compra. Ventanas de 1, 2, 3 y 5 días, con y sin filtro de tendencia. Cinco filtros: dos periodos fuera de muestra, 2007–2013 y 2021–2024; el Deflated Sharpe, que descuenta la suerte de probar muchas ideas; el Monte Carlo; y superar a comprar y esperar, cuyo Sharpe en 2014–2020 es 0.13.
BOCETO: checklist de reglas comunes y cinco puertas con sus umbrales (0.30 / 0.30 / 0.95 / p < 0.05 / 0.13). kb=out.

**[2:00 — Ventana por ventana]** (pantalla: tabla espejo)
El Sharpe es la ganancia por unidad de riesgo; por debajo de cero, pierde. Sin filtro y en el periodo de diseño, 2014–2020, la ventana de 1 día da −1.58 en la ruptura y −1.67 en la barrida. La de 2 días: −1.13 y −1.59. La de 3 días: −1.05 y −1.43. La de 5 días: −0.97 y −0.88. En ninguna ventana alguna de las dos gana.
| Ventana, sin filtro, 2014–20 | Ruptura (#85) | Barrida (#89) |
|---|---|---|
| 1 día | −1.58 | −1.67 |
| 2 días | −1.13 | −1.59 |
| 3 días | −1.05 | −1.43 |
| 5 días | −0.97 | −0.88 |
BOCETO: dos columnas de barras rojas hacia abajo, una por idea, fila por fila; el 0 como línea de referencia. Golpe de bajo + sacudida cuando las dos columnas quedan completas.

**[3:05 — Con el filtro de tendencia]** (pantalla: tabla)
Con el filtro de la media de 200 días, las dos mejoran, y siguen perdiendo. La ruptura de 1 día pasa de −1.58 a −1.10, y la barrida de 1 día, de −1.67 a −0.90. En los dos casos, el filtro recorta la pérdida y no crea ventaja.
| Ventana de 1 día, 2014–20 | Sin filtro | Con MA200 |
|---|---|---|
| Ruptura | −1.58 | −1.10 |
| Barrida | −1.67 | −0.90 |
BOCETO: dos pares de barras rojas, con la de «con MA200» más corta en cada par. kb=in.

**[3:45 — Con tu capital]** (pantalla: tarjeta de capital)
Estas son las mejores de cada idea por Sharpe de diseño, sobre la cesta de 8 entre 2007 y 2024. Ruptura, MA200 con 5 días: con 100,000 dólares pierde 25,460. Barrida, MA200 con 3 días: pierde 21,472. Comprar y esperar la misma cesta gana 14,407. Con 10,000 dólares serían unos −2,546 y −2,147, contra +1,441.
BOCETO: curva real de `series/extra-v89.json` (barrida roja cayendo, «Sin estrategia» blanca) y, al lado, una tarjeta con la cifra de la ruptura (−$25,460, del #85); contadores finales.

**[4:25 — Y en índices]** (pantalla: tarjeta del #90)
En el experimento 90 repetí estas dos ideas en índices, el S&P 500, el Nasdaq 100, el DAX y el FTSE 100, de 2012 a 2024, con 10,000 dólares. La ruptura de 5 días da −424. La barrida da +353. Casi cero las dos, mientras comprar y esperar gana +29,368. Esas curvas se rehicieron con parámetros reconstruidos que reproducen las cifras publicadas.
BOCETO: dos barras casi planas, −$424 (roja) y +$353 (verde pálida), junto a una barra blanca de +$29,368; nota gris: «#90: parámetros reconstruidos».

**[5:00 — Qué enseña]** (pantalla: dos flechas con una ✕)
Mi conclusión: no falta encontrar el lado correcto. Si fuera cuestión de apostar al revés, una de las dos ideas ganaría. Lo que pasa es que no hay una ventaja direccional en estos datos, y la fricción, los costos de entrar y salir, manda. Al derecho o al revés, el resultado es el mismo.
BOCETO: las dos flechas con una ✕ roja cada una y, en medio, «sin ventaja direccional · manda la fricción». kb=out.

**[5:30 — Conclusión]**
Seis formas de ruptura y ocho de barrida, todas negativas. No sirvió ninguna. El trading no se promete: se prueba.

**[5:50 — Ficha del experimento #89]** (pantalla: tarjeta con la ficha y la URL)
Ficha del experimento #89. Estado: murió. Cifra clave: la mejor barrida pierde 21,472 dólares con 100,000, y la mejor ruptura, 25,460; comprar y esperar gana 14,407. Filtro que decidió: 0 de 8 formas superan a comprar y esperar, Sharpe 0.13. Lección: al derecho o al revés, sin ventaja manda la fricción. Revísalo completo en atlas-lab-one.vercel.app/e/89.
BOCETO: tarjeta con el número «#89», el sello «MURIÓ» en rojo, tres líneas (cifra clave, filtro que decidió, lección) y la URL `atlas-lab-one.vercel.app/e/89` grande abajo. kb=in.

**[6:10 — Cierre]**
Todos los datos en atlas-lab-one.vercel.app, experimento 89. Contenido educativo, no es asesoría financiera.

---

## SHORT (9:16, ≈ 49 s)

**[0-3 s]** «Comprar la ruptura: menos 25,460 dólares con 100,000. Lo contrario, la barrida: menos 21,472.»
BOCETO: dos flechas opuestas con las dos cifras rojas, sobre b-roll de velas (kb=in), overlay 0.6; golpe de bajo en la segunda cifra.

**[3-15 s]** «Dos ideas opuestas de TikTok sobre el mismo rango del día anterior. Una compra cuando lo rompe. La otra, cuando lo barre y vuelve.»
BOCETO: rango previo con los dos esquemas (kb=out); ticker arriba.

**[15-30 s]** «Misma cesta, siete divisas y oro, mismos costos. Las seis formas de la ruptura y las ocho de la barrida dan Sharpe negativo en los tres periodos.»
BOCETO: dos columnas de barras rojas que se llenan con tick.

**[30-43 s]** «Con ventana de 1 día: menos 1.58 y menos 1.67. No falta el lado correcto: falta ventaja.»
BOCETO: dos barras −1.58 y −1.67 frente a frente; sello ✕ sobre las dos flechas.

**[43-49 s]** «El video completo está en el canal, y el experimento #89 completo, en el enlace. Ruptura o barrida: el resultado es el mismo.»
BOCETO: texto final «Video completo en el canal · Experimento #89 completo en el enlace» + pequeño «No es asesoría financiera · El trading no se promete: se prueba». Loop: «el mismo resultado» responde al hook de las dos cifras.

---

## Descripción de YouTube (video largo)
https://atlas-lab-one.vercel.app/e/89?utm_source=youtube&utm_medium=video&utm_campaign=exp089-t2
Ficha del experimento #89: murió · 8 formas de la barrida, 0 de 5 filtros · Sharpe 2014–2020 de −0.82 a −1.67 · con $100,000: −$21,472 (la mejor barrida) y −$25,460 (la mejor ruptura, #85) contra +$14,407 de comprar y esperar.
Comparo ventana por ventana dos ideas de TikTok opuestas sobre el rango del día previo (comprar la ruptura contra comprar la barrida), con las mismas reglas: 7 pares de divisas y oro, 2007–2024, 3 puntos básicos de costo, 5 filtros. Incluye la comparación en índices (experimento 90, parámetros reconstruidos).
Contenido educativo. No es asesoría financiera ni recomendación de inversión.

## Descripción de YouTube (Short)
https://atlas-lab-one.vercel.app/e/89?utm_source=youtube&utm_medium=short&utm_campaign=exp089-t2
Ficha del experimento #89: murió · con $100,000: la mejor ruptura −$25,460 y la mejor barrida −$21,472 · comprar y esperar +$14,407.
Contenido educativo. No es asesoría financiera.

## Capítulos
0:00 Gancho · 0:15 Qué es este experimento · 0:25 Dos ideas opuestas · 1:15 El mismo terreno de juego · 2:00 Ventana por ventana · 3:05 Con filtro de tendencia · 3:45 Con tu capital · 4:25 Y en índices · 5:00 Qué enseña · 5:30 Conclusión · 5:50 Ficha del experimento

## Etiquetas
ruptura contra barrida, falso rompimiento, candle range theory, rango del día previo, estrategia de tiktok, backtest, sharpe ratio, fuera de muestra, fricción de costos, forex, atlas lab, trading con datos

## Rúbrica (autoevaluación, 1–5)
| Pieza | hook_0_3s | ritmo | promesa_cumplida | potencial_loop | claridad_no_traders | honestidad_atlas | audio | cta | Promedio |
|---|---|---|---|---|---|---|---|---|---|
| Largo | 5 | 4 | 5 | 4 | 4 | 5 | 4 | 4 | 4.4 |
| Short | 5 | 4 | 5 | 5 | 4 | 5 | 4 | 4 | 4.5 |

Hook ≥ 4 ✓ · honestidad 5 ✓. Punto débil: mezcla cifras de tres experimentos (#85, #89 y #90); cada cifra lleva su etiqueta de origen en pantalla. Solo se prueba el núcleo diario de cada idea; el quiebre de estructura y el FVG son intradía y discrecionales. Las curvas del #90 son reconstruidas.

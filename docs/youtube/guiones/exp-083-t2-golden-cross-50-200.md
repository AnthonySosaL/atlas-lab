# Experimento #83 — Tema 2: el golden cross 50/200 (0.36 en una época, −0.16 en la siguiente)

Tema 2 de 3 del experimento #83 · Qué aporta frente a los otros temas: se centra en una sola forma, la más famosa de las ocho (el cruce de EMAs 50/200, el «golden cross») y la sigue por las tres épocas, el Deflated Sharpe y la curva de capital. El tema 1 recorre las 8 formas y el ranking de TikTok; el tema 3 compara las medias lentas con las rápidas.
Estado del guion: **BORRADOR — pendiente de aprobación**
Estado del experimento: **murió** (las 8 formas murieron, máximo 1 de 5 filtros; ninguna supera el Sharpe 0.13 de comprar y esperar) · Serie A — «Probé la estrategia de TikTok» (plan-series.md) · 1 largo + 1 Short
Datos usados: `experiments.json` (v=83: kpis, metrics, forms, verdict, analysis, notes, period), `exp_details.json` (extra-v83: algo, code, filters), `series/extra-v83.json` (1.ª curva = EMA-cross 50/200, cesta de 8; 2.ª = «Sin estrategia»), tabla «Con tu capital» de `docs/youtube`; cifras del #90 para el cruce 50/200 en índices.
Producción (CLAUDE.md del canal): b-roll real detrás de cada escena con overlay oscuro 0.6, Ken Burns alternando in/out, subtítulos karaoke en MAYÚSCULAS con palabras clave en rojo, un dato visual por escena, golpe de bajo + sacudida solo en 1–2 momentos. Colores: rojo `#e11d2a`, verde `#22c55e`, fondo `#09090b`. Cifras en dígitos aquí; en el campo `tts` del JSON, en palabras.

## Títulos (3 opciones)
1. El golden cross 50/200: 0.36 de Sharpe en 2007–2013 y −0.16 en 2021–2024
2. ¿Sirve el golden cross? Siete divisas y oro: +$13,487 contra +$14,407
3. El cruce de medias más famoso pasa 1 de 5 filtros

## Miniatura (pensada para el título 1)
Fondo `#09090b`. Dos líneas de EMA cruzándose con una estrella dorada en el cruce y una ✕ roja encima. Texto grande: «0.36 → −0.16» (cifras). Logo ATLAS arriba a la derecha.

---

## VIDEO LARGO (16:9, ≈ 6 min)

**[0:00 — Gancho]** (pantalla: dos barras, una verde y una roja)
El golden cross, el cruce de la media de 50 con la de 200, sacó un Sharpe de 0.36 entre 2007 y 2013. Entre 2021 y 2024, la misma regla dio −0.16.
BOCETO: dos barras de la forma «EMA-cross 50/200» de `forms`: 0.36 en verde (2007–13) y −0.16 en rojo (2021–24); la verde cae a roja con golpe de bajo. kb=in.

**[0:15 — Qué es este experimento]** (pantalla: rótulo con el número y el nombre)
Este es el experimento #83 de ATLAS Lab: EMAs a favor de la tendencia, ranking de TikTok, 8 formas. Todos los resultados están en la página del experimento.
BOCETO: rótulo en rojo y blanco «EXPERIMENTO #83» con el nombre debajo, sobre las barras atenuadas (overlay 0.6). Whoosh corto. kb=out.

**[0:25 — Qué es el golden cross]** (pantalla: precio con dos líneas)
Una EMA, o media móvil exponencial, es un promedio de los precios que da más peso a los días recientes. El golden cross usa dos: una de 50 días y otra de 200. Cuando la corta cruza hacia arriba de la larga, se considera una señal de compra, el «cruce dorado». Su contrario, cuando cruza hacia abajo, se llama cruce de la muerte. Aquí solo compro: estoy comprado mientras la EMA de 50 esté sobre la de 200, y fuera de ella cuando no.
BOCETO: precio con una EMA de 50 (verde) y una de 200 (blanca); marca de compra en el cruce hacia arriba y de salida en el cruce hacia abajo (esquema ilustrativo, rotulado «ilustración»). kb=in.

**[1:15 — Cómo lo probé]** (pantalla: reglas y cinco filtros)
Una cesta de 7 pares de divisas más oro, con la señal ejecutada al día siguiente, 3 puntos básicos de costo y solo compra. Cinco filtros. Uno y dos: Sharpe mayor que 0.30 en dos periodos que la estrategia nunca vio, 2007–2013 y 2021–2024. El Sharpe es la ganancia por unidad de riesgo. Tres: Deflated Sharpe mayor que 0.95, que descuenta la suerte de haber probado muchas ideas, con un contador global de 33,363 intentos. Cuatro: Monte Carlo, que compara la señal con 5,000 versiones desplazadas en el tiempo. Cinco: superar a comprar y esperar, cuyo Sharpe en el periodo de diseño, 2014–2020, es 0.13.
BOCETO: cinco puertas con sus umbrales (0.30 / 0.30 / 0.95 / p < 0.05 / 0.13); checklist `filters`: ✓ costos 3 bps, ✓ rezago de 1 día. kb=out.

**[2:10 — El resultado, época por época]** (pantalla: barras por periodo)
En el periodo de diseño, 2014–2020, el golden cross da 0.10, y comprar y esperar da 0.13, así que no le gana. En 2007–2013, con la crisis de 2008, da 0.36: pasa el filtro de 0.30. En 2021–2024, da −0.16. El Deflated Sharpe es 0.002, cuando se exige 0.95. Y el Monte Carlo da un p de 0.60, lejos de 0.05. Resultado: pasa 1 de los 5 filtros, el de 2007–2013.
| Periodo o filtro | Valor del cruce 50/200 | Vara |
|---|---|---|
| Diseño 2014–2020 | 0.10 | 0.13 (comprar y esperar) |
| Fuera de muestra 2007–2013 | 0.36 | 0.30 |
| Fuera de muestra 2021–2024 | −0.16 | 0.30 |
| Deflated Sharpe | 0.002 | 0.95 |
| Monte Carlo (p) | 0.60 | 0.05 |
BOCETO: tabla fila a fila; la celda 0.36 en verde y las demás en rojo. Sacudida en −0.16.

**[3:10 — La curva: casi lo mismo que no hacer nada]** (pantalla: dos curvas casi pegadas)
Esta es la curva del cruce 50/200 sobre la cesta de 8 entre 2007 y 2024. Con 100,000 dólares gana 13,487. Comprar y esperar la misma cesta gana 14,407. Con 10,000 dólares serían unos +1,349 contra +1,441. La curva casi se pega a la de no hacer nada. Mi lectura, que no medí: un cruce tan lento opera poco, así que se parece a estar comprado todo el tiempo.
BOCETO: curvas reales de `series/extra-v83.json` (cruce verde, «Sin estrategia» blanca, casi superpuestas) con contadores finales. Etiqueta gris «razonamiento, no medido» junto a la última frase. kb=in.

**[4:00 — No era el único cruce]** (pantalla: tabla de cruces)
Probé otros tres cruces. El de 20/50 dio −0.01 en diseño, −0.01 en 2007–2013 y 0.23 en 2021–2024. El 12/26: −0.28, 0.19 y 0.38. El 9/21: −0.34, 0.14 y 0.46. El laboratorio ya había descartado las medias móviles simples: 408 variantes, ninguna sobrevivió. Aquí agregué la versión exponencial y pasa lo mismo.
| Cruce de EMAs | 2014–20 | 2007–13 | 2021–24 |
|---|---|---|---|
| 50/200 | 0.10 | 0.36 | −0.16 |
| 20/50 | −0.01 | −0.01 | 0.23 |
| 12/26 | −0.28 | 0.19 | 0.38 |
| 9/21 | −0.34 | 0.14 | 0.46 |
BOCETO: las cuatro filas con barras; 0.36, 0.38 y 0.46 en verde, el resto en rojo/gris. Cartel: «408 variantes de medias · 0 sobrevivientes» (de `notes`).

**[4:50 — ¿Y en índices?]** (pantalla: enlace con el #90)
Una pregunta justa: ¿y en índices? Repetí el cruce 50/200 en el S&P 500, el Nasdaq 100, el DAX y el FTSE 100, de 2012 a 2024, en el experimento 90. Sí ganó dinero: +14,814 dólares sobre 10,000. Pero comprar y esperar ganó +29,368. Ganó dinero, pero algo más de la mitad de lo que dio el mercado.
BOCETO: dos barras de la ficha del #90: +$14,814 (verde) y +$29,368 (blanca). Nota gris: «#90: curvas rehechas con parámetros reconstruidos; reproducen las cifras publicadas». kb=out.

**[5:30 — Conclusión]**
El golden cross no sobrevive a los cinco filtros: funciona en una época y se hunde en la otra, y su curva es casi la de no hacer nada. Resultado: murió, con un máximo de 1 de 5 filtros. El trading no se promete: se prueba.

**[5:55 — Ficha del experimento #83]** (pantalla: tarjeta con la ficha y la URL)
Ficha del experimento #83. Estado: murió. Cifra clave: ninguna de las 8 formas supera el Sharpe de 0.13 de comprar y esperar; el cruce 50/200 da 0.36 en 2007–2013 y −0.16 en 2021–2024. Filtro que decidió: el Deflated Sharpe, máximo 0.002 de 0.95. Lección: funcionar en una época no es tener ventaja. Revísalo completo en atlas-lab-one.vercel.app/e/83.
BOCETO: tarjeta con el número «#83», el sello «MURIÓ» en rojo, tres líneas (cifra clave, filtro que decidió, lección) y la URL `atlas-lab-one.vercel.app/e/83` grande abajo. kb=in.

**[6:15 — Cierre]**
Todos los datos en atlas-lab-one.vercel.app, experimento 83. Contenido educativo, no es asesoría financiera.

---

## SHORT (9:16, ≈ 49 s)

**[0-3 s]** «El golden cross: Sharpe de 0.36 en una época. Y menos 0.16 en la siguiente.»
BOCETO: barra verde 0.36 que cae a roja −0.16 sobre b-roll de gráfico (kb=in), overlay 0.6; golpe de bajo en la caída.

**[3-15 s]** «Es el cruce de la media exponencial de 50 días con la de 200. Cuando la corta pasa por encima, compras. Siete divisas y oro, con costos.»
BOCETO: dos EMAs que se cruzan con marca de compra (kb=out); ticker arriba.

**[15-30 s]** «De 2007 a 2013: 0.36. De 2014 a 2020: 0.10, y comprar y esperar da 0.13. De 2021 a 2024: menos 0.16.»
BOCETO: tres barras por periodo con la línea guía 0.13; tick en cada cifra.

**[30-43 s]** «Con 100,000 dólares gana 13,487. Comprar y esperar gana 14,407. Pasó uno de cinco filtros.»
BOCETO: curvas casi pegadas con contadores +$13,487 y +$14,407; sello «1 / 5».

**[43-49 s]** «El video completo está en el canal, y el experimento #83 completo, en el enlace. Cero punto treinta y seis… y menos cero punto dieciséis.»
BOCETO: texto final «Video completo en el canal · Experimento #83 completo en el enlace» + pequeño «No es asesoría financiera · El trading no se promete: se prueba». Loop: «0.36… y −0.16» repite el hook.

---

## Descripción de YouTube (video largo)
https://atlas-lab-one.vercel.app/e/83?utm_source=youtube&utm_medium=video&utm_campaign=exp083-t2
Ficha del experimento #83: murió · 8 formas de EMAs, 0 sobrevivientes, máximo 1 de 5 filtros · cruce 50/200: Sharpe 0.36 en 2007–2013 y −0.16 en 2021–2024 · con $100,000: +$13,487 contra +$14,407 de comprar y esperar.
Probé el golden cross (cruce de EMAs 50/200) en 7 pares de divisas y oro con 5 filtros, 3 puntos básicos de costo y señal del día siguiente. Incluye los cruces 20/50, 12/26 y 9/21 y una comparación con el mismo cruce en índices (experimento 90).
Contenido educativo. No es asesoría financiera ni recomendación de inversión.

## Descripción de YouTube (Short)
https://atlas-lab-one.vercel.app/e/83?utm_source=youtube&utm_medium=short&utm_campaign=exp083-t2
Ficha del experimento #83: murió · golden cross 50/200: 0.36 en 2007–2013 y −0.16 en 2021–2024 · con $100,000: +$13,487 contra +$14,407.
Contenido educativo. No es asesoría financiera.

## Capítulos
0:00 Gancho · 0:15 Qué es este experimento · 0:25 Qué es el golden cross · 1:15 Cómo lo probé · 2:10 Época por época · 3:10 La curva · 4:00 Otros cruces · 4:50 ¿Y en índices? · 5:30 Conclusión · 5:55 Ficha del experimento

## Etiquetas
golden cross, cruce de medias, ema 50 200, medias exponenciales, seguimiento de tendencia, backtest, fuera de muestra, deflated sharpe, forex, comprar y mantener, atlas lab, trading con datos

## Rúbrica (autoevaluación, 1–5)
| Pieza | hook_0_3s | ritmo | promesa_cumplida | potencial_loop | claridad_no_traders | honestidad_atlas | audio | cta | Promedio |
|---|---|---|---|---|---|---|---|---|---|
| Largo | 5 | 4 | 5 | 4 | 4 | 5 | 4 | 4 | 4.4 |
| Short | 5 | 4 | 5 | 5 | 4 | 5 | 4 | 4 | 4.5 |

Hook ≥ 4 ✓ · honestidad 5 ✓. Punto débil: el bloque de índices cruza dos experimentos con periodos distintos (2007–2024 en divisas y oro; 2012–2024 en índices); se rotula así y la ficha del #90 usa parámetros reconstruidos. La explicación de por qué la curva se parece a no hacer nada está marcada «razonamiento, no medido».

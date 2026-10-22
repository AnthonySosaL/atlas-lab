# Experimento #84 — Filtro multitemporalidad (MA superior + entrada inferior) — 12 formas

Estado del guion: **BORRADOR — pendiente de aprobación**
Estado del experimento: **murió** (las 12 formas murieron, máximo 2 de 5 filtros; algunas brillan en 2007–2013 y se hunden en 2021–2024) · Serie A — «Probé la estrategia de TikTok» (plan-series.md) · 1 largo + 1 Short
Datos usados: `experiments.json` (v=84: kpis, metrics, forms, verdict, analysis, market, period), `exp_details.json` (extra-v84: algo, code, filters), `series/extra-v84.json` (1.ª curva = «MA200 filtro + RSI4<20», cesta de 8; 2.ª = «Sin estrategia»), tabla «Con tu capital» de `docs/youtube`.
Producción (CLAUDE.md del canal): b-roll real detrás de cada escena con overlay oscuro 0.6, Ken Burns alternando in/out, subtítulos karaoke en MAYÚSCULAS con palabras clave en rojo, un dato visual por escena, golpe de bajo + sacudida solo en 1–2 momentos. Colores: rojo `#e11d2a`, verde `#22c55e`, fondo `#09090b`. Cifras en dígitos aquí; en el campo `tts` del JSON, en palabras.

## Títulos (3 opciones)
1. Filtro de varias temporalidades: 12 formas, 0 sobreviven
2. Brilla en 2007–2013 y se hunde en 2021–2024: la prueba
3. Filtro de media y entrada rápida: 0.58 y luego −1.01

## Miniatura (pensada para el título 1)
Fondo `#09090b`. Una montaña rusa dibujada con una curva real: sube en verde hasta «+0.58» y cae en rojo hasta «−1.01». Texto: «BRILLA… Y CAE». Logo ATLAS arriba a la derecha.

---

## VIDEO LARGO (16:9, ≈ 7 min)

**[0:00 — Gancho]** (pantalla: dos barras que suben y caen)
Esta estrategia sacó un Sharpe de 0.58 entre 2007 y 2013. En 2021–2024, esa misma forma dio −0.39. Otra, también con 0.58 en la primera época, dio −1.01 en la segunda. Probé 12 combinaciones de una idea que vi en un comentario de TikTok. Sobrevivieron 0.
BOCETO: barras del `forms`: «EMA200 filtro + RSI4<15» 0.58 → −0.39 y «MA100 filtro + RSI3<15» 0.58 → −1.01; la barra verde cae a roja con golpe de bajo + sacudida. kb=in.

**[0:45 — La idea]** (pantalla: texto de la idea)
Viene de un comentario en TikTok, más fina que el video: la media móvil no sirve para decidir la entrada. Úsala solo como filtro de dirección, para saber quién manda, compradores o vendedores, en una temporalidad alta, y busca la entrada en una temporalidad más baja, sin entrar justo cuando se rompe la media. Es un enfoque de varias temporalidades y suena sensato.
BOCETO: dos paneles ilustrativos (rotulados «ilustración»): arriba, gráfico lento con la media (dirección); abajo, gráfico rápido con la flecha de entrada. kb=out.

**[1:45 — Cómo lo probé]** (pantalla: aviso + 12 combinaciones + filtros)
Primero una aclaración importante: mi motor es diario. La «temporalidad baja» la aproximo con una señal diaria más rápida, no con velas intradía; esta es la versión diaria de la idea. Probé 12 combinaciones con un «y» lógico: un filtro de media móvil o EMA de 100 o 200 días, con el cierre por encima, y una entrada rápida: caída del RSI de 2 a 4 días, cruce de EMAs, Donchian, momentum o IBS. Cesta de 7 pares de divisas y oro, señal ejecutada al día siguiente, 3 puntos básicos de costo y solo compra. Los mismos cinco filtros: dos periodos fuera de muestra, 2007–2013 y 2021–2024, con Sharpe mayor que 0.30; Deflated Sharpe mayor que 0.95, con un contador global de 33,363 intentos; Monte Carlo; y superar a comprar y esperar, cuyo Sharpe en 2014–2020 es 0.13.
BOCETO: cartel ámbar fijo «Versión diaria · no intradía». Dos cajas «filtro» + «entrada» unidas por «Y». Checklist `filters`: ✓ costos 3 bps, ✓ rezago de 1 día.

**[3:05 — Resultados]** (pantalla: tabla animada de 12 filas)
En el periodo de diseño, 2014–2020, solo 2 de 12 superan 0.13; la mejor da 0.36. En 2007–2013, 2 de 12 pasan 0.30, con 0.58. En 2021–2024, 0 de 12; la mejor da −0.02. El Deflated Sharpe máximo es 0.01. Una sola forma pasa el Monte Carlo, la del IBS, con p de 0.01, pero su Sharpe es 0.07, −0.29 y −0.33: pasar un filtro no es ganar dinero. El máximo es 2 de 5 filtros.
| Forma | 2014–20 | 2007–13 | 2021–24 | Deflated Sharpe | Monte Carlo (p) |
|---|---|---|---|---|---|
| EMA200 filtro + RSI4<15 | 0.14 | 0.58 | −0.39 | 0.002 | 0.29 |
| MA200 filtro + RSI4<20 | 0.36 | 0.18 | −0.68 | 0.013 | 0.13 |
| MA100 filtro + RSI3<15 | −0.10 | 0.58 | −1.01 | 0 | 0.49 |
| MA200 filtro + IBS<0.2 | 0.07 | −0.29 | −0.33 | 0.001 | 0.01 |
| MA200 filtro + RSI2<10 | 0.08 | 0.04 | −0.68 | 0.001 | 0.23 |
| MA200 filtro + Donchian20/10 | 0.03 | −0.05 | −0.02 | 0.001 | 0.39 |
| MA200 filtro + EMAcross9/21 | −0.09 | 0.12 | −0.14 | 0 | 0.57 |
| MA200 filtro + EMAcross12/26 | −0.07 | 0.14 | −0.14 | 0 | 0.57 |
| EMA200 filtro + EMAcross9/21 | −0.12 | 0.16 | −0.14 | 0 | 0.61 |
| MA100 filtro + Momentum50 | −0.15 | −0.03 | −0.19 | 0 | 0.57 |
| MA200 filtro + Momentum20 | −0.21 | −0.07 | −0.27 | 0 | 0.56 |
| MA200 filtro + Donchian10/5 | −0.30 | −0.32 | −0.31 | 0 | 0.64 |
BOCETO: tabla fila a fila; celdas que superan su umbral en verde (0.13 en 2014–20; 0.30 en las otras dos columnas: solo los dos 0.58 de 2007–13), el resto en rojo/gris. Resaltar la columna 2021–24 completa en rojo. Línea guía «comprar y esperar: 0.13» en la columna 2014–20.

**[4:50 — Por qué falla]** (pantalla: dos épocas)
El patrón revelador: varias formas funcionan en una época y colapsan en la otra, hasta +0.58 en 2007–2013 y hasta −1.01 en 2021–2024. El filtro de varias temporalidades suena lógico, pero no crea ventaja: sigue siendo beta y ruido que no se generaliza entre épocas.
BOCETO: dos franjas de años, 2007–2013 en verde y 2021–2024 en rojo, con las barras de las dos formas estrella. Texto: «Funciona en una época, colapsa en la otra». kb=in.

**[5:40 — Con tu capital]** (pantalla: tarjeta de capital)
Esta es la curva de la forma que mejor salió en el periodo de diseño, MA200 con RSI de 4 días menor que 20, sobre la cesta de 8 entre 2007 y 2024. Con 100,000 dólares gana 1,738. Comprar y esperar la misma cesta gana 14,407. Con 10,000 dólares serían unos +174 contra +1,441. Es lo que pasó, no una promesa.
BOCETO: curvas reales de `series/extra-v84.json` (estrategia casi plana en verde pálido, «Sin estrategia» subiendo en blanco); contadores finales.

**[6:25 — Conclusión y cierre]**
Doce formas, ninguna sobrevive, máximo 2 de 5 filtros. La idea de varias temporalidades suena bien, pero en versión diaria no crea ventaja. El trading no se promete: se prueba. Todos los datos en atlas-lab-one.vercel.app, experimento 84. Contenido educativo, no es asesoría financiera.

---

## SHORT (9:16, ≈ 48 s)

**[0-3 s]** «Esta estrategia sacó 0.58 en una época y −1.01 en la siguiente.»
BOCETO: barra verde 0.58 que cae a roja −1.01, sobre b-roll de gráfico (kb=in); golpe de bajo en la caída.

**[3-15 s]** «La idea de un comentario de TikTok: la media móvil solo como filtro de dirección y la entrada con una señal más rápida. Doce combinaciones, siete divisas y oro, con costos. Versión diaria.»
BOCETO: filtro + entrada unidos por «Y»; cartel «Versión diaria» (kb=out).

**[15-30 s]** «Cinco filtros. En 2021–2024, ninguna de las doce superó 0.30; la mejor dio −0.02. La que más filtros pasó: dos de cinco.»
BOCETO: columna 2021–24 de la tabla en rojo, con −0.02 resaltado; cinco puertas con solo dos abiertas; tick en cada número.

**[30-43 s]** «El Deflated Sharpe, el filtro contra la suerte, pedía 0.95. El máximo: 0.01. Cero sobrevivientes.»
BOCETO: barra 0.01 contra línea 0.95; «0 / 12» rojo gigante con sacudida.

**[43-48 s]** «El video completo está en el canal. Brilla en una época, se hunde en la otra: 0.58, menos 1.01.»
BOCETO: texto final «Video completo en el canal» + pequeño «No es asesoría financiera · El trading no se promete: se prueba». Loop: «0.58, menos 1.01» vuelve al hook.

---

## Descripción de YouTube
Probé la idea de un comentario de TikTok: usar la media móvil solo como filtro de dirección y buscar la entrada con una señal más rápida. Doce combinaciones (filtro MA/EMA 100/200 con RSI, cruce de EMAs, Donchian, momentum e IBS) sobre 7 pares de divisas y oro, versión diaria, con 5 filtros: 0 sobrevivieron y algunas pasan de +0.58 en 2007–2013 a −1.01 en 2021–2024.
Datos completos: https://atlas-lab-one.vercel.app (experimento #84)
Contenido educativo. No es asesoría financiera ni recomendación de inversión.

## Capítulos
0:00 Gancho · 0:45 La idea · 1:45 Cómo lo probé · 3:05 Resultados · 4:50 Por qué falla · 5:40 Con tu capital · 6:25 Conclusión

## Etiquetas
multitemporalidad, media móvil, filtro de tendencia, rsi, ibs, donchian, estrategia de tiktok, backtest, fuera de muestra, deflated sharpe, atlas lab, trading con datos

## Rúbrica (autoevaluación, 1–5)
| Pieza | hook_0_3s | ritmo | promesa_cumplida | potencial_loop | claridad_no_traders | honestidad_atlas | audio | cta | Promedio |
|---|---|---|---|---|---|---|---|---|---|
| Largo | 5 | 4 | 4 | 4 | 4 | 5 | 4 | 4 | 4.3 |
| Short | 5 | 4 | 5 | 5 | 4 | 5 | 4 | 4 | 4.5 |

Hook ≥ 4 ✓ · honestidad 5 ✓. Punto débil: es la versión diaria de una idea de varias temporalidades; el cartel «no intradía» debe verse siempre, para no prometer más de lo que se probó.

## Otros temas de este experimento
Cada tema es un video largo más un Short, con el mismo formato y las mismas reglas que el tema 1; cada uno se puede ver solo.
1. `exp-084-multitemporalidad-12-formas.md` — Tema 1: Filtro de varias temporalidades: 12 formas, 0 sobreviven
2. `exp-084-t2-la-mejor-del-pasado.md` — Tema 2: La mejor de 12 en el pasado (Sharpe 0.36) cae a −0.68 en 2021–2024
3. `exp-084-t3-comprar-caida-o-tendencia.md` — Tema 3: Comprar caídas contra seguir la tendencia: −1.01 contra −0.31 en 2021–2024
4. `exp-084-t4-monte-carlo-ibs.md` — Tema 4: Pasó el Monte Carlo con p = 0.01… y su Sharpe fue 0.07, −0.29 y −0.33

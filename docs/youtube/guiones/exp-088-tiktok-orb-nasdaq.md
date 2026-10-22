# Experimento #88 — TikTok 4: ORB del Nasdaq a las 9:30 (prueba directa, 32 formas)

Estado del guion: **BORRADOR — pendiente de aprobación**
Estado del experimento: **murió** (ninguna de las 32 formas pasa; versión del video: Sharpe −1.73 en 2014–2020) · Serie A — «Probé la estrategia de TikTok» (plan-series.md) · 1 largo + 1 Short
Datos usados: `experiments.json` (v=88: kpis, metrics, forms, verdict, analysis, market, capital, period), `exp_details.json` (extra-v88: algo, code, filters), `series/extra-v88.json` (1.ª curva = versión del video; 2.ª = mejor de las 32; 3.ª = «Sin estrategia», comprar y esperar el Nasdaq 100), tabla «Con tu capital» de `docs/youtube`.
Producción (CLAUDE.md del canal): b-roll real detrás de cada escena con overlay oscuro 0.6, Ken Burns alternando in/out, subtítulos karaoke en MAYÚSCULAS con palabras clave en rojo, un dato visual por escena, golpe de bajo + sacudida solo en 1–2 momentos. Colores: rojo `#e11d2a`, verde `#22c55e`, fondo `#09090b`. Cifras en dígitos aquí; en el campo `tts` del JSON, en palabras.

## Títulos (3 opciones)
1. La estrategia ORB del Nasdaq, probada en 32 formas: 0 pasan
2. ORB a las 9:30 en el Nasdaq: −$77,076 contra +$1,102,826
3. «+214% en 20 años» con el ORB del Nasdaq: lo probé de verdad

## Miniatura (pensada para el título 1)
Fondo `#09090b`. Dos curvas reales de `series/extra-v88.json`: una roja que se desploma (versión del video) y una verde que se dispara (comprar y esperar el Nasdaq). Texto: «−$77,076» en rojo y «+$1,102,826» en verde (cifras con $100,000, tabla de capital). Logo ATLAS arriba a la derecha.

---

## VIDEO LARGO (16:9, ≈ 9½ min)

**[0:00 — Gancho]** (pantalla: «+214% en 20 años» y dos curvas)
Un TikTok promete +214% en 20 años con una sola regla en el Nasdaq. La probé directamente en el Nasdaq 100, en 32 formas y 3,594 sesiones de Nueva York. La versión del video, con 100,000 dólares entre 2012 y 2026, pierde 77,076. Comprar y esperar el Nasdaq, en cambio, gana 1,102,826.
BOCETO: «+214%» en blanco que se desvanece; las dos curvas reales (versión del video roja, comprar y esperar verde) se dibujan de 2012 a 2026; contadores finales en pantalla. kb=in.

**[0:20 — Presentación]** (pantalla: rótulo «Experimento #88 · TikTok 4: ORB del Nasdaq a las 9:30 (prueba directa, 32 formas)»)
Este es el experimento #88 de ATLAS Lab: TikTok 4, ORB del Nasdaq a las 9:30. Todos los resultados están en la página del experimento.
BOCETO: rótulo en rojo y blanco «EXPERIMENTO #88» con el nombre debajo, sobre la última imagen del gancho atenuada (overlay 0.6); whoosh corto; logo en la esquina.

**[0:50 — La estrategia]** (pantalla: velas de 30 minutos con el rango de las 9:30)
Se llama ORB, ruptura del rango de apertura. Cuando abre Wall Street, a las 9:30 hora de Nueva York, marcas el rango de la primera vela de 30 minutos. Pones una orden de compra en su máximo y una de venta en su mínimo. La que se active primero abre la operación, con el stop en el lado opuesto y un objetivo de tres veces el riesgo, lo que llaman 1 a 3. Si no sale antes, cierras a las 16:00. Hacer siempre lo mismo, todos los días.
BOCETO: esquema sobre velas reales del Nasdaq (o ilustrativo, rotulado): rectángulo del rango de las 9:30, flechas de compra y venta, línea de stop, línea de objetivo 1:3 y marca «16:00». kb=out.

**[1:55 — Esta vez, prueba directa]** (pantalla: datos y sesiones)
En otros TikToks probé el núcleo diario en divisas. Esta sí se puede probar tal cual: es una regla mecánica con horas exactas. Datos del Nasdaq 100 en velas de 30 minutos, de Dukascopy, de 2012 a 2026: 3,594 sesiones de Nueva York, sin feriados ni medias sesiones. Una operación por día.
BOCETO: tarjeta de datos: «Nasdaq 100 · velas de 30 min · 2012–2026 · 3,594 sesiones». Línea de tiempo con cuatro tramos (2012–13, 2014–20, 2021–24, 2025–26).

**[2:50 — Cómo lo probé]** (pantalla: 4 rangos × stop × objetivo = 32)
Cuatro rangos de referencia: la vela de las 9:30, la primera hora, la vela de 9:00 a 9:30 y el premercado de 4:00 a 9:30. Dos stops: en el lado opuesto o a mitad del rango. Cuatro objetivos: 1 a 1, 1 a 2, 1 a 3 o ninguno. Eso da 32 formas. Cada lado de la operación paga 3 puntos básicos, 6 de ida y vuelta; un punto básico es una centésima de un por ciento. Una vela de 30 minutos no muestra si se tocó antes el stop o el objetivo, así que asumí siempre el orden desfavorable. Diseño en 2014–2020; fuera de muestra, periodos que no vio: 2012–2013, 2021–2024 y 2025–2026. Filtros: Sharpe mayor que 0.30 fuera de muestra; Deflated Sharpe mayor que 0.95, con las 32 formas como número de intentos; Monte Carlo de 5,000 rotaciones; y superar a comprar y esperar el Nasdaq, cuyo Sharpe en 2014–2020 es 1.01. Sin mirar el futuro: las órdenes son stops que se ejecutan al tocar el nivel.
BOCETO: cubo 4 × 2 × 4 = 32 que se llena de cuadritos; checklist `filters`: ✓ costos 3 bps por lado, ✓ orden intrabarra desfavorable, ✓ sin lookahead; cinco puertas con sus umbrales.

**[4:15 — Resultados]** (pantalla: tabla animada)
Estas son las mejores formas de cada rango, con stop en el lado opuesto y sin objetivo, más la versión del video. La del video, rango de las 9:30 con objetivo 1 a 3, da −1.73 en 2014–2020 y −1.02 en 2012–2013; en 2021–2024 sí sale positiva, +0.36, y en 2025–2026 vuelve a caer, −0.67. Las 32 formas tienen Sharpe negativo en el periodo de diseño: la mejor es −0.69 y, con el stop a mitad del rango, van de −3.23 a −18.57. Fuera de muestra, 0 de 32 pasan 0.30 en 2012–2013, 2 de 32 en 2021–2024 y 1 de 32 en 2025–2026, con 0.54, la del rango de 9:00 a 9:30, que falla en 2012–2013 con −2.23. Deflated Sharpe: 0 de 32, máximo 0.00. Comprar y esperar: 0 de 32 la superan.
| Forma (stop en el lado opuesto) | 2014–20 | 2012–13 | 2021–24 | 2025–26 |
|---|---|---|---|---|
| Premercado 4:00–9:30, sin objetivo | −0.69 | −1.46 | −0.46 | 0.23 |
| Vela 9:00–9:30, sin objetivo | −1.18 | −2.23 | 0.04 | 0.54 |
| Primera hora (9:30–10:30), sin objetivo | −1.43 | −1.11 | 0.06 | −0.74 |
| Vela de las 9:30, sin objetivo | −1.70 | −0.83 | 0.32 | −0.51 |
| **Versión del video**: vela de las 9:30, objetivo 1:3 | −1.73 | −1.02 | 0.36 | −0.67 |
BOCETO: tabla fila a fila; la fila de la versión del video resaltada. Barras con ceros de referencia: 2014–20 todas rojas. Fondo secundario: mosaico de las 32 formas en rojo (barra del Sharpe de diseño) con la mejor, −0.69, marcada. Golpe de bajo + sacudida en −1.73.

**[6:00 — El Monte Carlo que engaña]** (pantalla: texto)
Una nota para ser justos con los números. En el Monte Carlo, 11 de 32 formas salen con p menor que 0.05. Parece un éxito, pero no lo es: ese filtro compara la dirección de la primera ruptura contra una dirección al azar, y no mide si la forma gana dinero. Esas 11 tienen Sharpe negativo en el periodo de diseño.
BOCETO: cartel ámbar «11/32 pasan Monte Carlo · las 11 pierden dinero». kb=in.

**[6:35 — Por qué pierde]** (pantalla: barra de ventaja bruta contra costo)
La ventaja bruta por operación es de +2.1 puntos básicos en la versión del video, y +3.1 y +3.9 en los rangos previos a la apertura. El costo de ida y vuelta es de 6. No alcanza. Sin costos, la versión del video queda en −0.35 en 2014–2020 pero es positiva fuera de muestra, entre +0.6 y +1.5; el costo es lo que termina de hundirla. Incluso suponiendo el orden más favorable en cada vela y 3 puntos básicos por lado, tampoco pasa ninguna de las 32. Hacer siempre lo mismo no convierte un setup sin ventaja en rentable, y el 1 a 3 no compensa una tasa de acierto que los costos dejan bajo el equilibrio.
BOCETO: tres barras pequeñas de ventaja bruta (+2.1, +3.1, +3.9 bps) frente a una barra roja de 6 bps. kb=out.

**[7:35 — Con tu capital]** (pantalla: tarjeta de capital)
Con 100,000 dólares entre 2012 y 2026, la versión del video pierde 77,076. Comprar y esperar el Nasdaq 100, en las mismas fechas, gana 1,102,826. Con 10,000 dólares serían unos −7,708 contra +110,283. Y la mejor de las 32 formas empieza en 10,000 y termina en 3,506. Cuidado con una cosa: la curva de la versión del video asume siempre el peor orden dentro de cada vela.
BOCETO: tres curvas reales de `series/extra-v88.json` (versión del video roja, mejor de las 32 en naranja, «Sin estrategia» verde); cartel ámbar con la nota de `capital.note`.

**[8:20 — Conclusión]**
Ninguna de las 32 formas pasa. La versión del video pierde con costos y no le llega a la de comprar y esperar. Estas rupturas no dejan margen sobre el costo. El trading no se promete: se prueba.

**[8:45 — Ficha del experimento #88]** (pantalla: tarjeta con la ficha y la URL abajo)
Ficha del experimento 88. Estado: murió. Cifra clave: la versión del video da Sharpe de −1.73 en 2014–2020, y −0.35 sin costos; con 100,000 dólares pierde 77,076 contra +1,102,826 de comprar y esperar el Nasdaq. Filtro que decidió: ninguna de las 32 formas pasa; la ventaja de 2.1 puntos básicos no cubre un costo de 6. Lección: el costo es parte de la estrategia. Revísalo completo en atlas-lab-one.vercel.app/e/88.
BOCETO: tarjeta con el número «#88», el sello «MURIÓ» en rojo y cuatro líneas (estado, cifra clave, lo que decidió, lección) que entran con tick; al final, la URL «atlas-lab-one.vercel.app/e/88» grande y resaltada en verde. kb=in.

**[9:15 — Cierre]**
Todos los datos en atlas-lab-one.vercel.app/e/88. Contenido educativo, no es asesoría financiera.

---

## SHORT (9:16, ≈ 52 s)

**[0-3 s]** «Prometía +214% en 20 años. Con 100,000 dólares, perdió 77,076.»
BOCETO: «+214%» gigante en verde que se tacha y se transforma en «−$77,076» rojo, sobre b-roll de bolsa de Nueva York (kb=in), overlay 0.6; golpe de bajo + sacudida al cambiar la cifra.

**[3-14 s]** «Es el ORB del Nasdaq, de un TikTok: marcas el rango de la vela de las 9:30, orden de compra en el máximo, de venta en el mínimo, objetivo de tres veces el riesgo.»
BOCETO: velas de 30 minutos con el rectángulo del rango y las flechas (kb=out); ticker arriba.

**[14-28 s]** «Lo probé en el Nasdaq 100: 32 formas, 3,594 sesiones, con costos. Cero pasan. La versión del video, de 2014 a 2020: Sharpe de −1.73. Comprar y esperar: 1.01.»
BOCETO: contador «0/32» rojo; barra roja −1.73 frente a barra verde 1.01; tick en cada número.

**[28-42 s]** «Con los mismos 100,000 dólares, comprar y esperar el Nasdaq gana 1,102,826.»
BOCETO: dos curvas reales de 2012 a 2026 con contadores finales: −$77,076 rojo y +$1,102,826 verde.

**[42-52 s]** «La ventaja por operación es de 2.1 puntos básicos. Cuesta 6. El video completo está en el canal y experimento #88 completo en el enlace. Prometía 214%. Perdió 77,076.»
BOCETO: barra de 2.1 frente a barra de 6; texto final «Video completo en el canal · Experimento #88 completo en el enlace» + pequeño «No es asesoría financiera · El trading no se promete: se prueba». Loop: «Perdió 77,076» responde a la promesa del hook.

---

## Descripción de YouTube (video largo)
https://atlas-lab-one.vercel.app/e/88?utm_source=youtube&utm_medium=video&utm_campaign=exp088-t1
Ficha del experimento #88: murió · 32 formas del ORB del Nasdaq 100, 0 pasan · versión del video: Sharpe −1.73 en 2014–2020 (−0.35 sin costos) · con $100,000: −$77,076 contra +$1,102,826 de comprar y esperar.
Probé directamente en el Nasdaq 100 la estrategia ORB de TikTok (ruptura del rango de las 9:30, objetivo 1:3, «+214% en 20 años»): velas de 30 minutos de 2012 a 2026, 3,594 sesiones, 32 formas, 3 puntos básicos por lado y 5 filtros. 0 de 32 pasan; con $100,000, la versión del video pierde $77,076 y comprar y esperar el Nasdaq gana $1,102,826.
Contenido educativo. No es asesoría financiera ni recomendación de inversión.

## Descripción de YouTube (Short)
https://atlas-lab-one.vercel.app/e/88?utm_source=youtube&utm_medium=short&utm_campaign=exp088-t1
Ficha del experimento #88: murió · ventaja de +2.1 puntos básicos contra un costo de 6 · con $100,000: −$77,076.
Contenido educativo, no es asesoría financiera.

## Capítulos
0:00 Gancho · 0:20 Presentación · 0:50 La estrategia · 1:55 Prueba directa · 2:50 Cómo lo probé · 4:15 Resultados · 6:00 El Monte Carlo que engaña · 6:35 Por qué pierde · 7:35 Con tu capital · 8:20 Conclusión · 8:45 Ficha del experimento #88

## Etiquetas
orb, opening range breakout, nasdaq 100, estrategia de tiktok, ruptura del rango de apertura, trading intradía, backtest, costos de trading, sharpe ratio, deflated sharpe, atlas lab, trading con datos

## Rúbrica (autoevaluación, 1–5)
| Pieza | hook_0_3s | ritmo | promesa_cumplida | potencial_loop | claridad_no_traders | honestidad_atlas | audio | cta | Promedio |
|---|---|---|---|---|---|---|---|---|---|
| Largo | 5 | 4 | 5 | 4 | 4 | 5 | 4 | 4 | 4.4 |
| Short | 5 | 4 | 5 | 5 | 4 | 5 | 4 | 4 | 4.5 |

Hook ≥ 4 ✓ · honestidad 5 ✓. Punto débil: bloque de resultados denso (4 periodos); el cartel del orden desfavorable por vela debe verse junto a cada curva, y el «+214%» es una promesa del TikTok, no un dato nuestro.

## Otros temas de este experimento
Cada tema es un video largo más un Short, con el mismo formato y las mismas reglas que el tema 1; cada uno se puede ver solo.
1. `exp-088-tiktok-orb-nasdaq.md` — Tema 1: La estrategia ORB del Nasdaq, probada en 32 formas: 0 pasan
2. `exp-088-t2-ventaja-2-1-contra-6.md` — Tema 2: Sin costos, positiva fuera de muestra (+0.6 a +1.5). Con costos, −1.73: el ORB del Nasdaq
3. `exp-088-t3-stop-y-objetivo-32-formas.md` — Tema 3: La peor de 32 versiones del ORB del Nasdaq: Sharpe de −18.57
4. `exp-088-t4-orden-en-la-vela-peor-y-mejor-caso.md` — Tema 4: Peor caso y mejor caso: 0 de 32 formas del ORB pasan en los dos

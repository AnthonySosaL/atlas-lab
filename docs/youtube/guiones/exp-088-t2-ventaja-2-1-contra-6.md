# Experimento #88 — Tema 2: la ventaja de 2.1 puntos básicos contra un costo de 6

Tema 2 de 4 del experimento #88 · Qué aporta frente a los otros temas: es el tema del costo. Compara la ventaja bruta por operación (+2.1, +3.1 y +3.9 puntos básicos) con el costo de ida y vuelta (6) y separa la versión del video sin costos de la versión con costos, periodo por periodo. El tema 1 cuenta el resultado completo de las 32 formas; el tema 3 trata los stops y los objetivos; el tema 4, el orden dentro de la vela de 30 minutos.
Estado del guion: **BORRADOR — pendiente de aprobación**
Estado del experimento: **murió** (ninguna de las 32 formas pasa; versión del video: Sharpe −1.73 en 2014–2020) · Serie A — «Probé la estrategia de TikTok» (plan-series.md) · 1 largo + 1 Short
Datos usados: `experiments.json` (v=88: kpis, metrics, forms, verdict, analysis, notes, capital, period), `exp_details.json` (extra-v88: algo, code, filters, en especial `logic` y `other`), `series/extra-v88.json` (1.ª curva = versión del video; 2.ª = mejor de las 32; 3.ª = «Sin estrategia», comprar y esperar el Nasdaq 100), tabla «Con tu capital» de `docs/youtube`.
Producción (CLAUDE.md del canal): b-roll real detrás de cada escena con overlay oscuro 0.6, Ken Burns alternando in/out, subtítulos karaoke en MAYÚSCULAS con palabras clave en rojo, un dato visual por escena, golpe de bajo + sacudida solo en 1–2 momentos. Colores: rojo `#e11d2a`, verde `#22c55e`, fondo `#09090b`. Cifras en dígitos aquí; en el campo `tts` del JSON, en palabras.

## Títulos (3 opciones)
1. Sin costos, positiva fuera de muestra (+0.6 a +1.5). Con costos, −1.73: el ORB del Nasdaq
2. Gana 2.1 puntos básicos por operación y cuesta 6: la cuenta del ORB
3. El costo de ida y vuelta se come la ventaja: −$77,076 con $100,000

## Miniatura (pensada para el título 1)
Fondo `#09090b`. Dos barras pequeñas verdes («+2.1», «+3.1») frente a una barra roja grande («6»). Texto grande: «NO ALCANZA» (2 palabras, sin repetir el título). Logo ATLAS arriba a la derecha.

---

## VIDEO LARGO (16:9, ≈ 6 min)

**[0:00 — Gancho]** (pantalla: dos barras verdes cortas y una roja larga)
Sin costos, la estrategia ORB del Nasdaq que prometía +214% en 20 años sale positiva fuera de muestra, entre +0.6 y +1.5 de Sharpe. Con costos, pierde. Esta es la cuenta.
BOCETO: tres barras cortas verdes (+0.6 a +1.5) que se convierten en rojas al caer el cartel «3 bps por lado». kb=in.

**[0:15 — Qué es este experimento]** (pantalla: rótulo con el número y el nombre)
Este es el experimento #88 de ATLAS Lab: TikTok 4, ORB del Nasdaq a las 9:30. Todos los resultados están en la página del experimento.
BOCETO: rótulo en rojo y blanco «EXPERIMENTO #88» con el nombre debajo, sobre las barras atenuadas (overlay 0.6). Whoosh corto. kb=out.

**[0:25 — La estrategia, en breve]** (pantalla: velas de 30 minutos)
ORB significa ruptura del rango de apertura. Al abrir Wall Street, a las 9:30 hora de Nueva York, marcas el rango de la primera vela de 30 minutos. Pones una orden de compra en su máximo y una de venta en su mínimo. La que se active primero abre la operación, con el stop en el lado opuesto y un objetivo de tres veces el riesgo. Si no sale antes, cierras a las 16:00. La probé en el Nasdaq 100 con velas de 30 minutos de 2012 a 2026, 3,594 sesiones de Nueva York.
BOCETO: velas de 30 minutos con el rectángulo del rango de las 9:30, flechas de compra y venta, stop, objetivo 1:3 y marca «16:00» (esquema o velas reales, rotulado). kb=in.

**[1:15 — Qué es un punto básico]** (pantalla: el costo por lado)
Un punto básico es una centésima de un por ciento. En esta prueba, cada lado de la operación paga 3 puntos básicos: 3 al entrar y 3 al salir, 6 de ida y vuelta. Es un costo realista para un índice, pero hay que compararlo con lo que gana cada operación.
BOCETO: barra de 3 al entrar, barra de 3 al salir, sumadas en una barra roja de 6. kb=out.

**[1:55 — La ventaja bruta por operación]** (pantalla: tres barras verdes contra una roja)
Antes de costos, ¿cuánto gana cada operación? En promedio, la versión del video gana +2.1 puntos básicos. Los rangos previos a la apertura, el de 9:00 a 9:30 y el premercado de 4:00 a 9:30, ganan +3.1 y +3.9. Pero ir y volver cuesta 6. Ni siquiera la mejor ventaja bruta, la de +3.9, llega a cubrir ese costo.
BOCETO: tres barras verdes (+2.1, +3.1, +3.9) frente a una barra roja de 6; línea de costo horizontal. Golpe de bajo + sacudida cuando se superpone el 6.

**[2:50 — Sin costos y con costos, por periodo]** (pantalla: tabla)
Mira el Sharpe de la versión del video, que es la ganancia por unidad de riesgo. Sin costos, en el periodo de diseño, 2014–2020, da −0.35. Fuera de muestra, en los periodos que la estrategia no vio, es positivo, entre +0.6 y +1.5. Con costos, da −1.73 en 2014–2020, −1.02 en 2012–2013, +0.36 en 2021–2024 y −0.67 en 2025–2026.
| Versión del video | 2014–20 | Fuera de muestra |
|---|---|---|
| Sin costos | −0.35 | de +0.6 a +1.5 |
| Con costos (3 bps por lado) | −1.73 | −1.02 (2012–13) · +0.36 (2021–24) · −0.67 (2025–26) |
BOCETO: tabla de dos filas con barras; la fila «sin costos» en verde pálido fuera de muestra y la fila «con costos» en rojo, salvo +0.36. Cartel ámbar: «el costo es lo que termina de hundirla».

**[3:50 — Una aclaración para ser justos]** (pantalla: dos medidas)
Ojo, no son la misma medida. La ventaja de +2.1 puntos básicos es una ganancia media por operación; el Sharpe es una ganancia por unidad de riesgo, en un periodo. Por eso pueden parecer contradictorias: una es positiva y la otra negativa en 2014–2020. Lo que sí es común a las dos lecturas es que el costo de 6 puntos básicos es mayor que la ventaja.
BOCETO: dos tarjetas: «bps por operación» y «Sharpe por periodo», con una flecha que las une a «costo = 6 bps». Etiqueta gris «medidas distintas». kb=in.

**[4:20 — Con todas las ventajas, tampoco]** (pantalla: 0 de 32)
Para probar que no es un detalle del método, repetí el cálculo dándole todas las ventajas: el orden más favorable dentro de cada vela y 3 puntos básicos por lado. Tampoco pasa ninguna de las 32 formas. Y la vara es alta: comprar y esperar el Nasdaq da un Sharpe de 1.01 en 2014–2020.
BOCETO: contador «0 / 32» rojo y barra 1.01 como vara de referencia. kb=out.

**[4:50 — Con tu capital]** (pantalla: tarjeta de capital)
Con 100,000 dólares entre 2012 y 2026, la versión del video pierde 77,076. Comprar y esperar el Nasdaq 100 gana 1,102,826. Con 10,000 dólares serían unos −7,708 contra +110,283. Cuidado: la curva de la versión del video asume siempre el peor orden dentro de cada vela.
BOCETO: curvas reales de `series/extra-v88.json` (versión del video roja, «Sin estrategia» verde); cartel ámbar con la nota de `capital.note`.

**[5:20 — Conclusión]**
Una ventaja de unos pocos puntos básicos no cubre un costo de ida y vuelta de 6. Hacer siempre lo mismo no convierte un setup sin margen en rentable. Ninguna de las 32 formas pasa. El trading no se promete: se prueba.

**[5:45 — Ficha del experimento #88]** (pantalla: tarjeta con la ficha y la URL)
Ficha del experimento #88. Estado: murió. Cifra clave: la versión del video gana +2.1 puntos básicos por operación y el costo de ida y vuelta es 6; con 100,000 dólares pierde 77,076 contra +1,102,826 de comprar y esperar el Nasdaq. Filtro que decidió: 0 de 32 formas superan a comprar y esperar, Sharpe 1.01. Lección: el costo es parte de la estrategia. Revísalo completo en atlas-lab-one.vercel.app/e/88.
BOCETO: tarjeta con el número «#88», el sello «MURIÓ» en rojo, tres líneas (cifra clave, filtro que decidió, lección) y la URL `atlas-lab-one.vercel.app/e/88` grande abajo. kb=in.

**[6:05 — Cierre]**
Todos los datos en atlas-lab-one.vercel.app, experimento 88. Contenido educativo, no es asesoría financiera.

---

## SHORT (9:16, ≈ 49 s)

**[0-3 s]** «Sin costos, esta estrategia de TikTok sale positiva fuera de muestra: de más 0.6 a más 1.5. Con costos, pierde.»
BOCETO: barras verdes que se vuelven rojas, sobre b-roll de bolsa de Nueva York (kb=in), overlay 0.6; golpe de bajo en el cambio.

**[3-15 s]** «Es el ORB del Nasdaq: orden de compra en el máximo de la vela de las 9:30, de venta en el mínimo, y objetivo de tres veces el riesgo.»
BOCETO: velas de 30 minutos con el rango y las flechas (kb=out); ticker arriba.

**[15-30 s]** «Gana 2.1 puntos básicos por operación. Cada lado paga 3, o sea 6 de ida y vuelta. No alcanza.»
BOCETO: barra verde +2.1 frente a barra roja 6; tick en cada cifra.

**[30-43 s]** «Sharpe de 2014 a 2020: menos 0.35 sin costos, menos 1.73 con costos. Con 100,000 dólares, pierde 77,076.»
BOCETO: dos barras −0.35 y −1.73; contador −$77,076 rojo; golpe de bajo + sacudida.

**[43-49 s]** «El video completo está en el canal, y el experimento #88 completo, en el enlace. Positiva sin costos. Hundida con costos.»
BOCETO: texto final «Video completo en el canal · Experimento #88 completo en el enlace» + pequeño «No es asesoría financiera · El trading no se promete: se prueba». Loop: «hundida con costos» responde al «con costos, pierde» del arranque.

---

## Descripción de YouTube (video largo)
https://atlas-lab-one.vercel.app/e/88?utm_source=youtube&utm_medium=video&utm_campaign=exp088-t2
Ficha del experimento #88: murió · 32 formas del ORB del Nasdaq 100, 0 pasan · versión del video: Sharpe −1.73 en 2014–2020 (−0.35 sin costos) · con $100,000: −$77,076 contra +$1,102,826 de comprar y esperar.
Comparo la ventaja bruta por operación (+2.1 puntos básicos en la versión del video) con el costo de ida y vuelta (6) en el Nasdaq 100, velas de 30 minutos de Dukascopy, 2012–2026, 3,594 sesiones. Orden desfavorable dentro de cada vela.
Contenido educativo. No es asesoría financiera ni recomendación de inversión.

## Descripción de YouTube (Short)
https://atlas-lab-one.vercel.app/e/88?utm_source=youtube&utm_medium=short&utm_campaign=exp088-t2
Ficha del experimento #88: murió · ventaja de +2.1 puntos básicos contra un costo de 6 · Sharpe −0.35 sin costos y −1.73 con costos · con $100,000: −$77,076.
Contenido educativo. No es asesoría financiera.

## Capítulos
0:00 Gancho · 0:15 Qué es este experimento · 0:25 La estrategia · 1:15 Qué es un punto básico · 1:55 Ventaja bruta · 2:50 Sin y con costos · 3:50 Una aclaración · 4:20 Con todas las ventajas · 4:50 Con tu capital · 5:20 Conclusión · 5:45 Ficha del experimento

## Etiquetas
orb, opening range breakout, nasdaq 100, puntos básicos, costos de trading, estrategia de tiktok, ventaja bruta, sharpe ratio, backtest, trading intradía, atlas lab, trading con datos

## Rúbrica (autoevaluación, 1–5)
| Pieza | hook_0_3s | ritmo | promesa_cumplida | potencial_loop | claridad_no_traders | honestidad_atlas | audio | cta | Promedio |
|---|---|---|---|---|---|---|---|---|---|
| Largo | 5 | 4 | 5 | 4 | 4 | 5 | 4 | 4 | 4.4 |
| Short | 5 | 4 | 5 | 5 | 4 | 5 | 4 | 4 | 4.5 |

Hook ≥ 4 ✓ · honestidad 5 ✓. Punto débil: mezcla ventaja por operación y Sharpe; el bloque 3:50 lo aclara. El «+214% en 20 años» es una promesa del TikTok, no un dato nuestro. El cartel del orden desfavorable por vela debe verse junto a cada curva.

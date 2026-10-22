# Experimento #81 — Laboratorio automático: 33,363 estrategias probadas con 5 filtros

Estado del guion: **BORRADOR — pendiente de aprobación**
Estado del experimento: **murió** (0 de 33,363 sobrevivieron; Deflated Sharpe máximo 0.31 de 0.95 exigido) · Serie C — «El experimento grande» (plan-series.md) · este archivo cubre el largo 1 («qué pasó») y el Short 1; quedan para otros guiones el largo 2 (el Deflated Sharpe explicado) y los Shorts 2 («el filtro que nadie pasó») y 3 («real pero inútil»)
Datos usados: `experiments.json` (v=81: kpis, metrics, verdict, analysis, chart, capital, period), `exp_details.json` (extra-v81: algo, code, filters). No tiene `series/` (no hay curva de capital: la ficha lo dice).
Producción (CLAUDE.md del canal): b-roll real detrás de cada escena con overlay oscuro 0.6, Ken Burns alternando in/out, subtítulos karaoke en MAYÚSCULAS con palabras clave en rojo, un dato visual por escena, golpe de bajo + sacudida solo en 1–2 momentos. Colores: rojo `#e11d2a`, verde `#22c55e`, fondo `#09090b`. Cifras en dígitos aquí; en el campo `tts` del JSON, en palabras.

## Títulos (3 opciones)
1. Probé 33,363 estrategias de trading. Sobrevivieron 0
2. Una máquina inventó estrategias toda la noche: 0 sirvieron
3. 34,751 estrategias generadas, 33,363 probadas, 0 sobrevivientes

## Miniatura (pensada para el título 1)
Fondo `#09090b`. Una cuadrícula densa de puntos rojos (cada punto, una estrategia) con ni un solo punto verde. Texto enorme en blanco: «TODAS MURIERON» (2 palabras, sin repetir el título). Logo ATLAS arriba a la derecha.

---

## VIDEO LARGO (16:9, ≈ 10 min)

**[0:00 — Gancho]** (pantalla: contador subiendo hasta 33,363 y luego un 0 rojo)
Dejé una máquina inventando y probando estrategias de trading durante una noche entera. En total, el registro llegó a 34,751 estrategias distintas, y 33,363 se probaron de verdad. Por la mañana, ¿cuántas habían superado los cinco filtros? Cero. Y ese cero es lo más útil que he aprendido.
BOCETO: contador animado 0 → 33,363 sobre b-roll de servidores (kb=in); al llegar, se congela y aparece «0» rojo gigante con sacudida. Texto: «Sobrevivieron: 0».

**[0:45 — Qué construí]** (pantalla: diagrama semillas → modelo → explorador → motor)
Un laboratorio automático con tres fuentes de ideas. Unas semillas clásicas: medias móviles, Donchian, momentum, RSI, IBS, Double Seven y combinaciones. Un modelo de lenguaje, DeepSeek y Qwen, que propone variantes. Y un explorador que garantiza novedad sin fin, con una huella para que ninguna estrategia se repita. Cada idea se convierte en una especificación y un motor fijo la prueba siempre igual. La corrida de esa noche agregó 33,016 estrategias nuevas a 1,735 de pruebas anteriores: 34,751 únicas. De ellas, 1,388 casi nunca operaron, y el motor no las cuenta como intento. Quedan 33,363.
BOCETO: diagrama de tres cajas que desembocan en un embudo «motor fijo». Cuadro de cuentas: 33,016 + 1,735 = 34,751 → −1,388 «casi nunca operaron» → 33,363. kb=out.

**[2:00 — Las reglas del juego]** (pantalla: cesta de activos y costos)
Todas operan lo mismo: una cesta equiponderada de 7 pares de divisas más oro, con datos diarios. La señal se ejecuta al día siguiente, nunca con información del futuro, y cada operación paga 3 puntos básicos de costo. Solo compra. El periodo de diseño es 2014–2020.
BOCETO: seis iconos de pares + oro; checklist `filters`: ✓ costos 3 bps, ✓ rezago de 1 día en todas las señales.

**[2:45 — Los 5 filtros]** (pantalla: cinco puertas, una tras otra)
Para sobrevivir, una estrategia tiene que atravesar cinco puertas. Uno: fuera de muestra 2007–2013, con la crisis de 2008, Sharpe mayor que 0.30. El Sharpe es la ganancia por unidad de riesgo. Dos: fuera de muestra 2021–2024, Sharpe mayor que 0.30; esos son periodos que la estrategia nunca vio. Tres: Deflated Sharpe mayor que 0.95, que ajusta por cuántas estrategias probé, con un contador global de 33,363 intentos. Cuatro: Monte Carlo con 5,000 rotaciones de la señal; si no le gana a sus propias versiones desalineadas en el tiempo, su timing es suerte. Cinco: superar a comprar y esperar en el periodo de diseño, cuyo Sharpe es 0.13.
BOCETO: cinco puertas numeradas que se abren una a una; sobre cada una, su umbral (0.30 / 0.30 / 0.95 / p < 0.05 / 0.13). Un puñado de puntos rojos cae en cada puerta.

**[4:50 — El resultado]** (pantalla: barras con el conteo de cada filtro)
Mira cuántas pasan cada filtro por separado. Superan a comprar y esperar, 5,252. Pasan el fuera de muestra 2007–2013, 4,566. Pasan 2021–2024, 2,631. Pasan Monte Carlo, 1,360. Pasan el Deflated Sharpe, cero. Y las que atraviesan los cinco, cero. Lo más lejos que llegó alguna fue a 4 de 5, y lo lograron 5 estrategias: pasaron los otros cuatro filtros y cayeron en el Deflated Sharpe. Aun así, año por año ganan apenas entre +0.3% y +0.5% al año, con 1 a 4 años negativos de 18. Ventaja de ruido, no explotable.
| Filtro (cada uno por separado) | Pasan, de 33,363 | Mejor valor |
|---|---|---|
| Batir a comprar y esperar en muestra | 5,252 | — |
| Fuera de muestra 2007–2013 | 4,566 | Sharpe 0.88 |
| Fuera de muestra 2021–2024 | 2,631 | Sharpe 1.42 |
| Monte Carlo (p < 0.05) | 1,360 | — |
| Deflated Sharpe (> 0.95) | 0 | 0.31 |
| Los 5 filtros | 0 | máximo 4/5 |
BOCETO: gráfico de barras `chart` de experiments.json (la primera en gris «33,363 operaron»; las demás en azul tenue; las dos últimas en rojo con valor 0). Sacudida cuando aparece el primer 0.

**[6:00 — El filtro que nadie pasó]** (pantalla: barra de 0.31 frente a 0.95)
El Deflated Sharpe nunca se superó. El mejor valor fue 0.31, con el contador global de 33,363 intentos, cuando hacía falta 0.95. Piensa en miles de personas lanzando una moneda: alguna sacará una racha de caras que parece magia, y no por habilidad. Con tantos intentos, el Sharpe que una estrategia puede sacar solo por suerte sube a cerca de 1.11 al año. El Deflated Sharpe descuenta eso. Por eso a la mejor, que fue una combinación de Double Seven con RSI, le dio 0.31. Le dedico el próximo video.
BOCETO: barra horizontal de 0 a 0.95 con una marca roja en 0.31 («máximo de todas») y una línea punteada en 0.95 («exigido»). Ilustración: monedas lanzadas con una racha resaltada (rotulada «ilustración»).

**[7:10 — Lo único «real»]** (pantalla: texto y porcentajes)
Hubo una señal que se repite: un leve sesgo de reversión con RSI. 49 de las 50 mejores son positivas en 18 años. Pero está en efectivo cerca del 93% del tiempo, hace cerca de un 0.4% al año, la mejor un 0.9%, y pierde contra simplemente mantener la cesta, que da +0.8% al año. Real, medible… e inútil para ganar dinero.
BOCETO: barra de tiempo con 93% gris («en efectivo») y 7% verde («invertida»); tres cifras: «≈0.4% al año», «mejor 0.9%», «mantener: +0.8%». kb=in.

**[8:10 — Con tu capital]** (pantalla: tarjeta de capital vacía)
La tarjeta «Con tu capital» de este experimento está vacía a propósito. No hay curva de capital: se midió cuántas estrategias superan cada filtro, no una cartera, y ninguna de las 33,363 probadas llegó a ser apta para operar. Con 10,000 o con 100,000 dólares, aquí no hay ninguna estrategia apta para operar.
BOCETO: tarjeta de capital con el texto de `capital.note` y un «—» grande donde irían las cifras.

**[8:40 — La lección]**
Si alguien te enseña la mejor de muchas pruebas sin decirte cuántas hizo, te está enseñando ruido. Es lo que insiste López de Prado, investigador de finanzas cuantitativas: minar miles de estrategias garantiza falsos positivos, y solo el ajuste por pruebas múltiples los atrapa. Mi conclusión: en esta cesta, con datos diarios y reglas simples, no encontré ventaja explotable. El trading no se promete: se prueba.

**[9:30 — Cierre]**
Todos los datos en atlas-lab-one.vercel.app, experimento 81. El siguiente video explica el Deflated Sharpe paso a paso. Contenido educativo, no es asesoría financiera.

---

## SHORT (9:16, ≈ 50 s)

**[0-3 s]** «33,363 estrategias de trading. ¿Cuántas sobrevivieron?»
BOCETO: contador rápido 0 → 33,363 en blanco sobre b-roll de servidores (kb=in), overlay 0.6.

**[3-15 s]** «Una máquina las inventó, la mayoría en una sola noche: semillas clásicas, un modelo de lenguaje y un explorador sin repeticiones. Todas, en siete divisas y oro, con costos.»
BOCETO: diagrama de tres cajas que alimentan un motor (kb=out); ticker arriba.

**[15-30 s]** «Cinco filtros: dos periodos que nunca vio, Deflated Sharpe, Monte Carlo y batir a comprar y esperar.»
BOCETO: cinco puertas que se abren en secuencia con tick en cada una; los puntos rojos caen.

**[30-43 s]** «Las mejores pasaron cuatro de cinco. El Deflated Sharpe, el filtro contra la suerte, pedía 0.95. El máximo fue 0.31.»
BOCETO: barra 0.31 contra la línea 0.95; golpe de bajo + sacudida en 0.31.

**[43-50 s]** «El video completo está en el canal. Cero: de 33,363, ninguna sobrevivió.»
BOCETO: «0» rojo gigante que late; texto final «Video completo en el canal» + pequeño «No es asesoría financiera · El trading no se promete: se prueba». Loop: «Cero» responde la pregunta inicial.

---

## Descripción de YouTube
Un laboratorio automático generó 34,751 estrategias únicas de trading; 33,363 se probaron de verdad (las otras 1,388 casi nunca operaron) contra 5 filtros: dos pruebas fuera de muestra, Deflated Sharpe, Monte Carlo de 5000 permutaciones y batir a comprar y esperar. Sobrevivieron 0; el Deflated Sharpe máximo fue 0.31 de 0.95.
Datos completos: https://atlas-lab-one.vercel.app (experimento #81)
Contenido educativo. No es asesoría financiera ni recomendación de inversión.

## Capítulos
0:00 Gancho · 0:45 Qué construí · 2:00 Las reglas · 2:45 Los 5 filtros · 4:50 El resultado · 6:00 El filtro que nadie pasó · 7:10 Lo único real · 8:10 Con tu capital · 8:40 La lección

## Etiquetas
33363 estrategias, laboratorio de trading, deflated sharpe, sobreajuste, backtest, monte carlo, fuera de muestra, minería de estrategias, lópez de prado, trading con datos, atlas lab, estrategias de trading

## Rúbrica (autoevaluación, 1–5)
| Pieza | hook_0_3s | ritmo | promesa_cumplida | potencial_loop | claridad_no_traders | honestidad_atlas | audio | cta | Promedio |
|---|---|---|---|---|---|---|---|---|---|
| Largo | 5 | 4 | 5 | 4 | 4 | 5 | 4 | 4 | 4.4 |
| Short | 5 | 5 | 5 | 5 | 4 | 5 | 4 | 4 | 4.6 |

Hook ≥ 4 ✓ · honestidad 5 ✓. Punto débil: el largo de 10 min concentra muchos conceptos (Sharpe, fuera de muestra, Deflated Sharpe, Monte Carlo); la cuenta 33,016 + 1,735 = 34,751 y los 1,388 que casi no operaron debe quedar clara en pantalla para no sugerir que todo ocurrió en una noche.

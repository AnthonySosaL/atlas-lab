# Experimento #6 — Tema 3: dos monedas con comisión, la ruptura y su espejo (cubre #6 y #7)

Tema 3 de 4 del experimento #6 · también tema del #7 (3 de 4)
Qué aporta frente a los otros temas: es la comparación de las dos apuestas opuestas sobre el mismo rango asiático: a favor de la ruptura (#6: −19.1%) y en contra (#7: −22.5%), con las mismas 1,553 operaciones. Su hallazgo propio: si apostar a favor y en contra pierde las dos veces, el problema no es la dirección, es que son monedas de 50% con comisión. El tema 2 explica el ORB paso a paso y el tema 4 es el año por año de ambas.
Estado del guion: **BORRADOR — pendiente de aprobación**
Estado de los experimentos: ambos **murieron** · Serie B (Estrategias famosas, puestas a prueba) · 1 largo + 1 Short. Es la pieza de unión recomendada para #6 + #7.
Datos usados: `experiments.json` (v=6 y v=7: metrics, kpis, params_view, verdict, notes), `exp_details.json` (algo y filters de ambos) y tabla «Con tu capital» de docs/youtube (filas 6 y 7). Las cifras con 10,000 dólares son las de la tabla de 100,000 divididas entre 10. El Sharpe bruto solo existe para el #7; el guion lo dice.
Producción: b-roll real con overlay oscuro 0.6, Ken Burns alterno, subtítulos karaoke en MAYÚSCULAS con cifras en rojo, golpe de bajo solo en 1–2 momentos. Rojo `#e11d2a`, verde `#22c55e`, fondo `#09090b`.

## Títulos (3 opciones)
1. A favor y en contra de la misma ruptura: pierde las dos veces (−19.1% y −22.5%)
2. Dos monedas con comisión: el ORB y su espejo, 1,553 operaciones cada uno
3. Si apostar a favor y en contra del mismo rango pierde, el problema no es la dirección

## Miniatura
Fondo negro `#09090b`. Dos monedas en espejo: la de la izquierda con «ARRIBA» y «−19.1%», la de la derecha con «ABAJO» y «−22.5%», ambas en rojo; entre ellas, el símbolo «=» grande. Texto superior: «AMBAS PIERDEN» (2 palabras). Logo ATLAS esquina inferior derecha.

---

## VIDEO LARGO (16:9, ≈ 4:25 min)

**[0:00 — Gancho]** (pantalla: dos monedas en espejo)
Apostar a favor de la ruptura del rango: menos 19.1%. Apostar en contra: menos 22.5%. La misma caja, las mismas 1,553 operaciones, y las dos pierden.
> Boceto: dos monedas espejo con «−19.1%» y «−22.5%»; el signo «=» pulsa; sacudida al aparecer la segunda cifra. Ken Burns «in».

**[0:13 — Qué experimentos son]** (pantalla: rótulo con el número y el nombre)
Este es el experimento #6 de ATLAS Lab: ORB de la sesión Londres-Nueva York, y hoy lo comparo con su espejo, el experimento 7. Todos los resultados están en la página de cada experimento.
> Boceto: rótulos «#6 ORB · a favor» y «#7 Reversión · en contra» y URL pequeña. kb=out.

**[0:27 — Dos apuestas opuestas]** (pantalla: caja con dos flechas)
Las dos estrategias miran lo mismo: el máximo y el mínimo de la madrugada asiática, de 00:00 a 07:00 UTC. En el experimento 6, cuando Londres o Nueva York rompen la caja, entro en esa dirección. En el experimento 7 hago lo contrario: si el precio toca el techo, vendo en corto; si toca el piso, compro, con la idea de que vuelva hacia el centro. Una operación al día, euro-dólar con velas de un minuto, de 2019 a 2024.
> Boceto: caja con dos juegos de flechas: hacia afuera (#6) y hacia adentro (#7). kb=in.

**[1:01 — Si una pierde, la otra debería ganar]** (pantalla: pregunta)
Aquí está la intuición. Si el precio no sigue las rupturas, entonces apostar en contra de ellas debería funcionar. Es lo que probé. Y el resultado es que no funciona: las dos pierden. Eso apunta a que la dirección no es el problema principal.
> Boceto: un interruptor que pasa de «a favor» a «en contra» y en las dos posiciones la curva cae. kb=out.

**[1:19 — Lado a lado]** (pantalla: tabla comparativa)
Los números. Las dos hacen 1,553 operaciones. La ruptura acierta el 49.9% y tiene un factor de beneficio de 0.87; la reversión acierta el 50.3% y tiene 0.75. Retorno: menos 19.1% y menos 22.5%. Sharpe: menos 0.96 y menos 1.99. Peor caída: menos 20.4% y menos 22.8%. El PSR es 0.009 en la primera y casi cero, 5.9e−7, en la segunda.
| | #6 A favor (ruptura) | #7 En contra (reversión) |
|---|---|---|
| Operaciones | 1,553 | 1,553 |
| Aciertos | 49.9% | 50.3% |
| Factor de beneficio | 0.87 | 0.75 |
| Retorno | −19.1% | −22.5% |
| Sharpe | −0.96 | −1.99 |
| Sharpe antes de costos | no reportado | +0.20 |
| Caída máxima | −20.4% | −22.8% |
> Boceto: tabla animada; ambas columnas en rojo; la celda del Sharpe bruto del #7 en verde tenue y la del #6 en gris. kb=in.

**[1:53 — Dos monedas con comisión]** (pantalla: moneda y monedas de costo)
Mira los aciertos: 49.9% y 50.3%. Son monedas. Y por las reglas, en las dos el objetivo y el stop quedan a una distancia parecida: en el experimento 6, el stop está en el otro lado de la caja y el objetivo a un tamaño de caja; en el 7, el objetivo está en el punto medio y el stop a media caja más allá del extremo. Es una deducción de las reglas. Una moneda de 50% con ganancia y pérdida parecidas no gana ni pierde antes de costos; después de costos, pierde. Y como hay una operación al día, el peaje se paga 1,553 veces.
> Boceto: moneda 50/50 y, debajo, dos barras de tamaño similar (ganancia y pérdida) marcadas «deducción de las reglas»; monedas de comisión que caen y inclinan la balanza. kb=out.

**[2:38 — Lo que dice el Sharpe antes de costos]** (pantalla: dos barras del #7)
El experimento 7 sí midió el Sharpe antes de costos: más 0.20. Es una ventaja diminuta, menor incluso que el 0.245 de la línea base. Con costos, menos 1.99. De la ruptura no hay cifra bruta, así que no puedo repartir su pérdida entre costos y falta de señal. Pero el espejo da una pista clara: una señal de más 0.20 no sobrevive a pagar 1,553 veces.
> Boceto: barras «#7 bruto +0.20» (verde, baja), «línea base 0.245» (gris) y «#7 neto −1.99» (roja); «#6 bruto: no reportado» en gris. kb=in.

**[3:08 — La lección]** (pantalla: tres ideas)
Tres ideas para llevarte. Una: probar el espejo es una buena prueba; si el espejo también pierde, sospecha de los costos, no de la dirección. Dos: una ventaja diminuta no resiste operar todos los días. Tres: un porcentaje de aciertos de 50% no es una ventaja; es lo que da una moneda.
> Boceto: tres iconos numerados: espejo, monedas de costo, moneda; el tercero resaltado. kb=out.

**[3:30 — Con tu capital]** (pantalla: tarjeta «Con tu capital»)
Con 10,000 dólares, la ruptura pierde 1,947 y la reversión pierde 2,234, contra 848 de comprar y esperar. Con 100,000, la tabla de ATLAS da menos 19,468 y menos 22,339, contra menos 8,482.
> Boceto: tarjeta de capital con tres cifras rojas; selector $10,000 / $100,000.

**[3:49 — Ficha del experimento #6 (con #7)]** (pantalla: tarjeta con las URL)
Ficha de los experimentos 6 y 7. Estado: los dos murieron. Cifra clave: menos 19.1% y menos 22.5%, con 1,553 operaciones cada uno, y un Sharpe antes de costos de más 0.20 en el espejo. Filtros que decidieron: PSR y costos. Lección: si el espejo también pierde, mira los costos. Revísalo completo en atlas-lab-one.vercel.app/e/6 y /e/7.
> Boceto: tarjeta oscura con «#6 · #7 · MURIERON», cifras clave y «atlas-lab-one.vercel.app/e/6» en grande; logo.

**[4:16 — Cierre]**
Todos los datos en atlas-lab-one.vercel.app, experimentos 6 y 7. Contenido educativo, no es asesoría financiera. El trading no se promete: se prueba.
> Boceto: pantalla oscura con la frase de marca.

---

## SHORT (9:16, ≈ 46 s)

**[0-3 s]** «A favor: −19.1%. En contra: −22.5%. Las dos pierden.»
> Boceto: dos monedas espejo con las cifras en rojo; sacudida; b-roll de gráficos de velas, Ken Burns «in», overlay 0.6.

**[3-14 s]** «Misma caja, la del rango de la madrugada asiática. Una estrategia entra cuando el precio la rompe; la otra apuesta a que vuelve. Euro-dólar, velas de un minuto, 1,553 operaciones cada una.»
> Boceto: caja con flechas hacia afuera y hacia adentro; Ken Burns «out».

**[14-26 s]** «Aciertan 49.9% y 50.3%: son monedas. Los factores de beneficio, 0.87 y 0.75. Y cada operación paga comisión y deslizamiento.»
> Boceto: dos monedas 50/50 y monedas de costo cayendo; whoosh y flash blanco.

**[26-38 s]** «La reversión tenía un Sharpe de +0.20 antes de costos y −1.99 después. Una ventaja diminuta no sobrevive a pagar 1,553 veces.»
> Boceto: barras +0.20 verde y −1.99 rojo; contador de 1,553; Ken Burns «in».

**[38-46 s]** «Si el espejo también pierde, mira los costos. Experimentos seis y siete completos en el enlace. El video completo está en el canal. No es asesoría financiera.»
> Boceto: vuelven las dos monedas rojas (loop con el gancho); texto «Experimentos #6 y #7 completos en el enlace» y logo.

---

## Descripción de YouTube (video largo)
https://atlas-lab-one.vercel.app/e/6?utm_source=youtube&utm_medium=video&utm_campaign=exp006-t3
Ficha de los experimentos #6 y #7 (ORB y reversión de sesión, EUR/USD, velas de 1 minuto, 2019-2024): murieron los dos · −19.1% (Sharpe −0.96) y −22.5% (Sharpe −1.99) · 1,553 operaciones cada uno · Sharpe antes de costos del #7: +0.20.
Apostar a favor y en contra de la misma ruptura del rango asiático pierde las dos veces: dos monedas de 50% de aciertos con comisión en cada operación.
Contenido educativo. No es asesoría financiera ni recomendación de inversión.
También: https://atlas-lab-one.vercel.app/e/7?utm_source=youtube&utm_medium=video&utm_campaign=exp006-t3

## Descripción del Short
https://atlas-lab-one.vercel.app/e/6?utm_source=youtube&utm_medium=short&utm_campaign=exp006-t3
Experimentos #6 y #7 · murieron · a favor −19.1%, en contra −22.5%. No es asesoría financiera.

Capítulos: 0:00 Gancho · 0:13 Qué experimentos son · 0:27 Dos apuestas opuestas · 1:01 Si una pierde, la otra debería ganar · 1:19 Lado a lado · 1:53 Dos monedas con comisión · 2:38 Lo que dice el Sharpe antes de costos · 3:08 La lección · 3:30 Con tu capital · 3:49 Ficha del experimento #6 (con #7) · 4:16 Cierre

Etiquetas: ORB, reversión a la media, fade, rango asiático, ruptura de rango, costos de trading, EUR/USD, trading intradía, backtest, Sharpe bruto y neto, ATLAS Lab, trading con datos

## Rúbrica (autoevaluación, 1–5)
| Criterio | Short | Largo |
|---|---|---|
| hook_0_3s | 5 | 4 |
| ritmo | 4 | 4 |
| promesa_cumplida | 5 | 4 |
| potencial_loop | 5 | 4 |
| claridad_no_traders | 4 | 4 |
| honestidad_atlas | 5 | 5 |
| audio | 4 | 3 |
| cta | 4 | 4 |
| **Promedio** | **4.50** | **4.00** |

Notas: la equivalencia de distancias entre stop y objetivo es una deducción de las reglas de cada experimento y el guion la rotula así; el #6 no reporta Sharpe bruto, por lo que la parte de costos se apoya en el espejo. Promesa cumplida 4 en el largo por esa razón. El Short cumple hook ≥ 4 y honestidad 5.

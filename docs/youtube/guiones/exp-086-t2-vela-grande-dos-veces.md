# Experimento #86 — Tema 2: ¿qué vela es «grande»? (2.0 contra 1.5 veces, volumen contra rango)

Tema 2 de 3 del experimento #86 · Qué aporta frente a los otros temas: ordena las 10 formas por el tipo de gatillo (volumen o rango) y por su umbral (2.0 o 1.5 veces su promedio) y muestra dos patrones de la tabla: las dos más exigentes pierden menos en el diseño, y el gatillo de volumen pierde menos que el de rango en 2021–2024. El tema 1 cuenta el resultado completo de las 10 y la promesa del «+30% al año»; el tema 3 trata el «backtest de 30 años».
Estado del guion: **BORRADOR — pendiente de aprobación**
Estado del experimento: **murió** (las 10 formas murieron sin pasar ningún filtro, 0 de 5; la peor llega a −1.55 fuera de muestra) · Serie A — «Probé la estrategia de TikTok» (plan-series.md) · 1 largo + 1 Short
Datos usados: `experiments.json` (v=86: kpis, metrics, forms, verdict, analysis, notes), `exp_details.json` (extra-v86: algo, code, filters), `series/extra-v86.json` (1.ª curva = «MA200 + volumen>2.0x(20)», cesta de 8; 2.ª = «Sin estrategia»), tabla «Con tu capital» de `docs/youtube`. La agrupación por gatillo y umbral es del guion, sobre las 10 formas de `forms`.
Producción (CLAUDE.md del canal): b-roll real detrás de cada escena con overlay oscuro 0.6, Ken Burns alternando in/out, subtítulos karaoke en MAYÚSCULAS con palabras clave en rojo, un dato visual por escena, golpe de bajo + sacudida solo en 1–2 momentos. Colores: rojo `#e11d2a`, verde `#22c55e`, fondo `#09090b`. Cifras en dígitos aquí; en el campo `tts` del JSON, en palabras.

## Títulos (3 opciones)
1. Vela de 2.0 veces su promedio: la única versión con Sharpe positivo (0.08)
2. ¿Qué vela es «grande»? De 2.0 veces a 1.5 veces: de 0.08 a −0.88
3. Volumen contra rango: el gatillo que pierde menos en 2021–2024

## Miniatura (pensada para el título 1)
Fondo `#09090b`. Dos velas: una enorme dorada con «2.0×» y una mediana gris con «1.5×»; sobre la grande, «+0.08» en verde pálido; sobre la mediana, «−0.88» en rojo. Texto: «¿CUÁNTO ES GRANDE?» (3 palabras, sin repetir el título). Logo ATLAS arriba a la derecha.

---

## VIDEO LARGO (16:9, ≈ 5.5 min)

**[0:00 — Gancho]** (pantalla: dos velas y dos cifras)
Una vela grande: ¿cuánto es grande? Con 2.0 veces su volumen promedio, la forma da un Sharpe de 0.08 en el diseño, la única positiva de diez. Con 1.5 veces, las ocho restantes van de −0.47 a −0.88.
BOCETO: dos velas de distinto tamaño con su multiplicador; barras 0.08 (verde pálido) y rango −0.47 a −0.88 (rojo). kb=in.

**[0:15 — Qué es este experimento]** (pantalla: rótulo con el número y el nombre)
Este es el experimento #86 de ATLAS Lab: TikTok 2, MA200 a favor de la tendencia más vela de alto rango. Todos los resultados están en la página del experimento.
BOCETO: rótulo en rojo y blanco «EXPERIMENTO #86» con el nombre debajo, sobre las velas atenuadas (overlay 0.6). Whoosh corto. kb=out.

**[0:25 — Qué es una vela grande]** (pantalla: vela y su promedio)
Un TikTok promete +30% al año con la media de 200 días como dirección y la entrada en una vela grande. ¿Qué es grande? Hay dos formas de medirlo. Por rango: el máximo menos el mínimo del día supera cierto múltiplo de su promedio de los últimos 10, 20 o 50 días. Por volumen: el volumen del día supera cierto múltiplo de su promedio. Probé múltiplos de 1.5 y de 2.0. Y la posición dura el día siguiente a la vela, sin distinguir si la vela fue alcista o bajista. Es la versión diaria del TikTok, sin pirámide ni stops.
BOCETO: vela diaria con una banda del «rango promedio» y una vela que la supera por mucho; al lado, una barra de volumen que sobresale de su promedio (esquema ilustrativo, rotulado «ilustración»). Cartel ámbar: «Probado: versión diaria · No probado: pirámide ×3, stops, 1:3». kb=in.

**[1:20 — Las 10 formas]** (pantalla: tabla)
Todas con un filtro de media de 100 o 200 días y el gatillo. Siete pares de divisas y oro, señal del día siguiente, 3 puntos básicos de costo, solo compra. El Sharpe es la ganancia por unidad de riesgo; por debajo de cero, pierde. En el periodo de diseño, 2014–2020, comprar y esperar da 0.13.
| Gatillo | Umbral | Sharpe 2014–20 |
|---|---|---|
| Volumen | 2.0 veces (20 días) | 0.08 |
| Rango | 2.0 veces (20 días) | −0.28 |
| Volumen | 1.5 veces (20 días), tres formas | −0.47, −0.51 y −0.57 |
| Rango | 1.5 veces (10, 20 y 50 días), cinco formas | de −0.68 a −0.88 |
BOCETO: tabla agrupada; las filas del 2.0 en verde pálido y las del 1.5 en rojo; línea guía «comprar y esperar: 0.13». kb=out.

**[2:20 — Hallazgo 1: más exigente, menos pierde]** (pantalla: dos barras al frente)
Primer hallazgo. Las dos formas con umbral de 2.0 veces son las dos mejores del diseño: 0.08 y −0.28. Las ocho de 1.5 veces van de −0.47 a −0.88. Mi lectura, que no medí: una vela de 2.0 veces ocurre menos días, así que opera menos y paga menos costos. No medí el número de operaciones.
BOCETO: las dos barras del 2.0 al frente y las ocho del 1.5 detrás, más cortas hacia abajo; etiqueta gris «razonamiento, no medido». kb=in.

**[3:10 — Hallazgo 2: volumen pierde menos que rango]** (pantalla: columna 2021–24)
Segundo hallazgo. Con el mismo umbral de 1.5 veces, el gatillo de volumen pierde menos que el de rango. En 2021–2024, las tres de volumen dan entre −0.45 y −0.53. Las cinco de rango, entre −1.03 y −1.55. El volumen no gana dinero, pero daña menos que el rango.
| 1.5 veces | 2007–13 | 2021–24 |
|---|---|---|
| Volumen (tres formas) | de −0.42 a −0.64 | de −0.45 a −0.53 |
| Rango (cinco formas) | de −0.57 a −0.79 | de −1.03 a −1.55 |
BOCETO: dos franjas de barras para 2021–24; la de rango llega a −1.55 con golpe de bajo + sacudida. kb=out.

**[4:00 — Aun así, no sobrevive]** (pantalla: cinco puertas)
La mejor de todas, volumen de 2.0 veces, da 0.08 en diseño, bajo el 0.13 de comprar y esperar, y −1.00 en 2007–2013 y −0.32 en 2021–2024. El Deflated Sharpe, que descuenta la suerte de probar muchas ideas, tiene un máximo de 0.001, cuando se exige 0.95. El mejor Monte Carlo es un p de 0.14, lejos de 0.05. Cero de diez pasan cualquier filtro.
BOCETO: tres barras de la mejor forma: 0.08, −1.00, −0.32; cinco puertas cerradas, «0 / 10».

**[4:30 — Con tu capital]** (pantalla: tarjeta de capital)
La curva de la forma de volumen de 2.0 veces sobre la cesta de 8 entre 2007 y 2024. Con 100,000 dólares pierde 5,692. Comprar y esperar la misma cesta gana 14,407. Con 10,000 dólares serían unos −569 contra +1,441.
BOCETO: curvas reales de `series/extra-v86.json` (estrategia roja, ligeramente a la baja; «Sin estrategia» blanca subiendo) con contadores finales.

**[4:55 — Conclusión]**
Ser más exigente con lo que cuenta como «vela grande» pierde menos, pero ninguna versión gana. Las diez murieron sin pasar un solo filtro. El trading no se promete: se prueba.

**[5:15 — Ficha del experimento #86]** (pantalla: tarjeta con la ficha y la URL)
Ficha del experimento #86. Estado: murió. Cifra clave: la mejor de diseño da Sharpe 0.08 contra 0.13 de comprar y esperar; con 100,000 dólares pierde 5,692. Filtro que decidió: ninguno se supera, 0 de 5; el Deflated Sharpe máximo es 0.001. Lección: ser más exigente pierde menos, pero no crea ventaja. Revísalo completo en atlas-lab-one.vercel.app/e/86.
BOCETO: tarjeta con el número «#86», el sello «MURIÓ» en rojo, tres líneas (cifra clave, filtro que decidió, lección) y la URL `atlas-lab-one.vercel.app/e/86` grande abajo. kb=in.

**[5:35 — Cierre]**
Todos los datos en atlas-lab-one.vercel.app, experimento 86. Contenido educativo, no es asesoría financiera.

---

## SHORT (9:16, ≈ 48 s)

**[0-3 s]** «Una vela con el doble de volumen: la única versión con Sharpe positivo. 0.08.»
BOCETO: vela gigante con «2.0×» y barra 0.08, sobre b-roll de velas (kb=in), overlay 0.6.

**[3-15 s]** «Un TikTok promete 30% al año: la media de 200 días para la dirección y entrar en una vela grande. Versión diaria, siete divisas y oro.»
BOCETO: vela grande sobre la MA200 con flecha de entrada (kb=out); ticker arriba.

**[15-30 s]** «Diez versiones. Las dos más exigentes, de 2.0 veces su promedio, pierden menos. Las ocho de 1.5 veces: de menos 0.47 a menos 0.88.»
BOCETO: barras 2.0× verde pálido al frente y barras 1.5× rojas detrás; golpe de bajo + sacudida en −0.88.

**[30-42 s]** «Pero comprar y esperar da 0.13, y la mejor da 0.08. Con 100,000 dólares pierde 5,692.»
BOCETO: línea 0.13 sobre la barra 0.08; tarjeta de capital −$5,692.

**[42-48 s]** «El video completo está en el canal, y el experimento #86 completo, en el enlace. Más exigente, pierde menos. Pero sigue perdiendo.»
BOCETO: texto final «Video completo en el canal · Experimento #86 completo en el enlace» + pequeño «No es asesoría financiera · El trading no se promete: se prueba». Loop: «sigue perdiendo» responde al «única positiva» del arranque.

---

## Descripción de YouTube (video largo)
https://atlas-lab-one.vercel.app/e/86?utm_source=youtube&utm_medium=video&utm_campaign=exp086-t2
Ficha del experimento #86: murió · 10 formas, 0 de 5 filtros · la mejor de diseño (MA200 + volumen > 2.0 veces) da Sharpe 0.08 contra 0.13 de comprar y esperar · con $100,000: −$5,692 contra +$14,407.
Agrupo las 10 versiones del TikTok del «+30% al año» según el gatillo (volumen o rango) y el umbral (2.0 o 1.5 veces su promedio). Versión diaria, siete pares de divisas y oro, 2007–2024, 3 puntos básicos de costo, 5 filtros; la pirámide y el ratio 1:3 no se probaron.
Contenido educativo. No es asesoría financiera ni recomendación de inversión.

## Descripción de YouTube (Short)
https://atlas-lab-one.vercel.app/e/86?utm_source=youtube&utm_medium=short&utm_campaign=exp086-t2
Ficha del experimento #86: murió · la más exigente (2.0 veces) da 0.08; las de 1.5 veces, de −0.47 a −0.88 · con $100,000: −$5,692.
Contenido educativo. No es asesoría financiera.

## Capítulos
0:00 Gancho · 0:15 Qué es este experimento · 0:25 Qué es una vela grande · 1:20 Las 10 formas · 2:20 Hallazgo 1 · 3:10 Hallazgo 2 · 4:00 Aun así no sobrevive · 4:30 Con tu capital · 4:55 Conclusión · 5:15 Ficha del experimento

## Etiquetas
vela de alto volumen, vela de alto rango, media de 200 días, estrategia de tiktok, expansión de rango, backtest, sharpe ratio, fuera de muestra, deflated sharpe, forex, atlas lab, trading con datos

## Rúbrica (autoevaluación, 1–5)
| Pieza | hook_0_3s | ritmo | promesa_cumplida | potencial_loop | claridad_no_traders | honestidad_atlas | audio | cta | Promedio |
|---|---|---|---|---|---|---|---|---|---|
| Largo | 4 | 4 | 5 | 4 | 4 | 5 | 4 | 4 | 4.2 |
| Short | 4 | 4 | 5 | 5 | 4 | 5 | 4 | 4 | 4.4 |

Hook ≥ 4 ✓ · honestidad 5 ✓. Punto débil: la agrupación por gatillo y umbral es del guion; se dice que la pirámide y el ratio 1:3 no se probaron y que la explicación por costos es una lectura no medida.

# Experimento #79 — Tema 3: Señales falsas y tres remedios (histéresis, confirmación y mezcla: de 0.36 a 0.60)

**Tema 3 de 3 del experimento #79** · Qué aporta frente a los otros temas: es el tema del concepto. Explica qué es una señal falsa (whipsaw) con el detector de régimen del #77, y cómo funciona cada remedio (termostato, espera de 5 días, peso gradual) con sus umbrales reales y su resultado. Se entiende sin los otros temas.
Estado del guion: **BORRADOR — pendiente de aprobación**
Estado del experimento: **murió** (la mejor variante, confirmación de 5 días, apenas iguala a solo tendencia, queda bajo comprar y esperar y es negativa en 2012–2018)
Serie: A (propuesta; continuación del #77).
Datos usados: `experiments.json` (v=79: kpis, metrics, analysis, params_view) · `exp_details.json` (extra-v79: algo, code —funciones `hysteresis`, `conf` y `w`—, filters) · `series/extra-v79.json` ([0] confirmación de 5 días, [1] los 4 índices comprar y esperar; peor caída, retorno de 2018 y años sin máximo nuevo calculados de las curvas) · tabla «Con tu capital» (fila #79).
Producción (CLAUDE.md del canal): b-roll real detrás de cada escena con overlay 0.6, Ken Burns alternando, subtítulos karaoke en MAYÚSCULAS, un dato visual por escena. Colores: rojo `#e11d2a`, verde `#22c55e`, fondo `#09090b`.

## Títulos
1. Señales falsas: un termostato, una espera de 5 días y un regulador (de 0.36 a 0.60)
2. Qué es el whipsaw y cómo se combate: tres remedios probados con datos
3. El remedio que más espera fue el mejor: confirmación de 5 días, Sharpe 0.60

## Miniatura
Fondo `#09090b`. Una línea de precio en zigzag con flechas de compra y venta rojas `#e11d2a` que se contradicen; a su derecha, tres iconos (termostato, calendario de 5 casillas, regulador) con «0.53 · 0.60 · 0.43» en verde `#22c55e`. Texto: «SEÑALES FALSAS». Logo ATLAS esquina inferior derecha.

---

## VIDEO LARGO (≈ 6 min)

**[0:00 — Gancho]** (pantalla: precio en zigzag con flechas de compra y venta que se contradicen; contador de «0.36 → 0.60»)
BOCETO: las flechas rojas y verdes parpadean alternando; aparecen tres iconos que las apagan una a una; el contador sube de 0.36 a 0.60; golpe de bajo.
> Una estrategia que cambia de modo según el mercado entra y sale a destiempo: son señales falsas. Probé tres remedios y la mejor subió el Sharpe de 0.36 a 0.60. Hoy te explico cómo funciona cada remedio, con sus umbrales reales, y por qué no alcanzó.

**[0:18 — Qué experimento es]** (pantalla: rótulo «Experimento #79 · ATLAS Lab» y el nombre debajo)
BOCETO: rótulo con el número 79 y el nombre «Régimen adaptativo — histéresis, confirmación y mezcla»; logo en la esquina.
> Este es el experimento #79 de ATLAS Lab: régimen adaptativo, histéresis, confirmación y mezcla. Todos los resultados están en la página del experimento.

**[0:45 — El problema: el whipsaw]** (pantalla: una medida que cruza arriba y abajo de una línea de umbral varias veces seguidas)
BOCETO: la curva del Efficiency Ratio oscila alrededor de la línea 0.35; cada cruce dispara un cambio de estrategia y una moneda de costo.
> La estrategia mide el régimen con el Efficiency Ratio de 20 días, que va de 0 a 1: cerca de 1, el precio avanza en línea recta, tendencia; cerca de 0, ruido. Si pasa de 0.35, usa seguimiento de tendencia; si no, reversión a la media. Cuando el indicador oscila justo alrededor de 0.35, la estrategia cambia de modo una y otra vez. Eso es el whipsaw, o señales falsas, y cada cambio paga 3 puntos básicos de costo.

**[1:30 — Remedio 1: histéresis]** (pantalla: un termostato con dos marcas: 0.45 y 0.25)
BOCETO: termostato con dos marcas; la flecha sube hasta 0.45 y «enciende» tendencia; solo apaga al bajar de 0.25; entre ambas, mantiene el estado.
> Primer remedio, la histéresis, como el termostato de una casa: la calefacción se enciende por debajo de cierta temperatura y se apaga por encima de otra, no en la misma. Aquí entras en tendencia cuando el ratio pasa de 0.45 y solo sales cuando baja de 0.25. Entre los dos números, mantienes lo que tenías. Fuera de muestra, el Sharpe sube de 0.36 a 0.53.

**[2:10 — Remedio 2: confirmación]** (pantalla: calendario con cinco casillas)
BOCETO: calendario de cinco casillas; solo cuando las cinco se marcan seguidas, se enciende «tendencia».
> Segundo remedio, la confirmación: el ratio debe superar 0.35 cinco días seguidos antes de creer que hay tendencia. Es esperar para estar seguro. Fuera de muestra, el Sharpe sube a 0.60, el mejor de los tres.

**[2:45 — Remedio 3: mezcla continua]** (pantalla: un regulador de volumen deslizante de 0.2 a 0.5)
BOCETO: regulador que va de 0 a 1 entre 0.2 y 0.5 del ratio; abajo, «todo reversión» y arriba, «todo tendencia».
> Tercer remedio, la mezcla continua: en vez de un interruptor, un regulador. Con el ratio en 0.2 o menos, todo va a reversión; con 0.5 o más, todo va a tendencia; en medio, una mezcla gradual. Fuera de muestra, el Sharpe sube a 0.43.

**[3:20 — Los resultados juntos]** (pantalla: tabla con barras)
BOCETO: barras por fila, 2012–2018 en rojo (todas negativas) y fuera de muestra en verde; línea de «solo tendencia» en 0.59.
| Variante | Cómo funciona | Sharpe 2012–2018 | Sharpe fuera de muestra |
|---|---|---|---|
| Binaria | un umbral: 0.35 | −0.15 | 0.36 |
| Mezcla continua | peso gradual entre 0.2 y 0.5 | −0.18 | 0.43 |
| Histéresis | entra con 0.45, sale con 0.25 | −0.15 | 0.53 |
| Confirmación | 0.35 durante 5 días seguidos | −0.05 | 0.60 |
> El Sharpe mide cuánto rindes por cada unidad de riesgo, y fuera de muestra son los datos de 2019 a 2024 que no se usaron para diseñar. El remedio que más espera, la confirmación de 5 días, fue el mejor. Pero mira la columna de 2012–2018: todas negativas.

**[4:05 — Por qué no alcanza]** (pantalla: línea en 0.59 de solo tendencia; línea en 0.68 de comprar y esperar)
BOCETO: barra de 0.60 con una línea blanca en 0.59 y otra verde en 0.68; texto «no aporta nada extra».
> Los remedios ayudan, pero no alcanzan: la confirmación saca 0.60, y solo tendencia, sin detector, ya sacaba 0.59; comprar y esperar, 0.68. Hay una razón de fondo, y es una conclusión mía, no un teorema: arreglar el detector del todo exigiría adivinar el régimen perfecto, y eso no se puede. Cada espera evita señales falsas, pero también retrasa las verdaderas.

**[4:40 — Ni el mejor remedio evitó 2018]** (pantalla: barra de 2018 en rojo: −15.8% contra −9.6%)
BOCETO: barras de 2018 de la mejor variante y de comprar y esperar; texto «calculado de las curvas».
> Un dato de la curva de la mejor variante: en 2018 perdió 15.8%, mientras comprar y esperar perdió 9.6%. Con $100,000, entre 2012 y 2024, la confirmación de 5 días gana $37,060 contra $290,064 de comprar y esperar, con una peor caída de −22.3% contra −36.1%. Con $10,000: +$3,706 contra +$29,006.

**[5:15 — Preguntas de un escéptico]** (pantalla: tres tarjetas: «¿otros umbrales?», «¿una combinación?», «¿Deflated Sharpe?»)
BOCETO: tres tarjetas que se voltean con «un solo juego de parámetros», «no probado» y «no aplicado».
> Preguntas que me haría un escéptico. ¿Y otros umbrales? Usé un solo juego de parámetros, sin buscar el mejor. ¿Y combinar los tres remedios? No lo probé. ¿Y el Deflated Sharpe? No lo apliqué.

**[5:30 — Ficha del experimento #79]** (pantalla: tarjeta con la ficha y la URL abajo)
BOCETO: tarjeta con cinco líneas que entran con tick y, al final, la URL resaltada en verde.
> Ficha del experimento 79. Estado: murió. Cifras clave: Sharpe fuera de muestra de 0.36 a 0.60 con los remedios, contra 0.59 de solo tendencia y 0.68 de comprar y esperar. Lo que decidió: la adaptación no aporta nada extra. Lección: esperar evita señales falsas, pero también retrasa las verdaderas. Revísalo completo en atlas-lab-one.vercel.app/e/79.

**[6:00 — Cierre]**
BOCETO: termostato, calendario y regulador sobre una línea de 0.59; logo.
> Todos los datos en atlas-lab-one.vercel.app, experimento 79. El trading no se promete: se prueba. Contenido educativo, no es asesoría financiera.

---

## SHORT (9:16, ≈ 49 s)

**[0-3 s]** (boceto: termostato con «0.36 → 0.53»; b-roll de termostato de pared, kb=in; golpe de bajo)
> Un termostato mejoró esta estrategia de 0.36 a 0.53. Una espera de cinco días, a 0.60.

**[3-14 s]** (boceto: Efficiency Ratio oscilando alrededor de 0.35; monedas de costo)
> Cuando el indicador oscila alrededor de su umbral, la estrategia cambia de modo una y otra vez. Son señales falsas, y cada cambio paga costos.

**[14-27 s]** (boceto: termostato 0.45 y 0.25; calendario de 5 casillas; regulador; ticks)
> Remedio uno: histéresis, entra con 0.45 y sale con 0.25. Dos: confirmación, 0.35 durante cinco días seguidos. Tres: una mezcla gradual.

**[27-38 s]** (boceto: barras 0.36, 0.43, 0.53 y 0.60; línea en 0.59)
> Sharpe fuera de muestra: 0.43, 0.53 y 0.60. Pero solo tendencia, sin nada de eso, ya daba 0.59.

**[38-44 s]** (boceto: barras negativas de 2012–2018)
> Y de 2012 a 2018, todas fueron negativas.

**[44-49 s]** (boceto: texto «Experimento #79 completo en el enlace»; logo)
> Video completo en el canal y experimento #79 completo en el enlace. Esperar evita señales falsas… y retrasa las verdaderas.

Gancho alterno A: «El remedio que más esperó fue el mejor: 0.60.» · B: «Tres arreglos, ninguna ventaja nueva.»

## Descripción de YouTube — video largo
https://atlas-lab-one.vercel.app/e/79?utm_source=youtube&utm_medium=video&utm_campaign=exp079-t3
Ficha: experimento #79, régimen adaptativo (histéresis, confirmación y mezcla). Estado: murió. Sharpe fuera de muestra: binaria 0.36, mezcla 0.43, histéresis 0.53, confirmación 0.60; solo tendencia 0.59 y comprar y esperar 0.68.
Qué son las señales falsas (whipsaw) y cómo funcionan tres remedios con sus umbrales reales, en 4 índices con costos de 3 puntos básicos.
Contenido educativo. No es asesoría financiera ni recomendación de inversión.

## Descripción de YouTube — Short
https://atlas-lab-one.vercel.app/e/79?utm_source=youtube&utm_medium=short&utm_campaign=exp079-t3
Ficha: experimento #79, murió. Remedios contra señales falsas: Sharpe de 0.36 a 0.60; solo tendencia 0.59. Contenido educativo, no es asesoría financiera.

## Capítulos
0:00 Gancho · 0:18 Qué experimento es · 0:45 El problema: el whipsaw · 1:30 Remedio 1: histéresis · 2:10 Remedio 2: confirmación · 2:45 Remedio 3: mezcla continua · 3:20 Los resultados juntos · 4:05 Por qué no alcanza · 4:40 Ni el mejor remedio evitó 2018 · 5:15 Preguntas de un escéptico · 5:30 Ficha del experimento #79 · 6:00 Cierre

## Etiquetas
whipsaw, señales falsas, histéresis, confirmación, Efficiency Ratio, régimen de mercado, estrategia adaptativa, seguimiento de tendencia, backtest, Sharpe ratio, trading con datos, ATLAS Lab

## Rúbrica (autoevaluación, 1–5)
| Pieza | hook_0_3s | ritmo | promesa_cumplida | potencial_loop | claridad_no_traders | honestidad_atlas | audio | cta | Promedio |
|---|---|---|---|---|---|---|---|---|---|
| Largo | 4 | 4 | 5 | 4 | 4 | 5 | 4 | 4 | 4.25 |
| Short | 5 | 4 | 5 | 4 | 4 | 5 | 4 | 4 | 4.38 |

Hook ≥ 4 ✓ · honestidad 5 ✓. Punto débil: es una continuación; para quien no vio el #77 el largo explica el Efficiency Ratio y el régimen en el bloque 0:45. La frase «arreglarlo exigiría adivinar el régimen perfecto» se dice como conclusión propia, no como teorema.

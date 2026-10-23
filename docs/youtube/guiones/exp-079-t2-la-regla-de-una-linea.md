# Experimento #79 — Tema 2: La regla de una línea (solo tendencia saca 0.59; la estrategia con detector, 0.60)

**Tema 2 de 3 del experimento #79** · Qué aporta frente a los otros temas: es el tema de la comparación y del método. Pone la regla más simple (comprar si el cierre está sobre su media de 50 días) frente a las cuatro versiones del detector de régimen y frente a comprar y esperar, y enseña por qué hay que compararse siempre con la versión simple. Se entiende sin haber visto el tema 1.
Estado del guion: **BORRADOR — pendiente de aprobación**
Estado del experimento: **murió** (la mejor variante, confirmación de 5 días, apenas iguala a solo tendencia, queda bajo comprar y esperar y es negativa en 2012–2018)
Serie: A (propuesta; continuación del #77).
Datos usados: `experiments.json` (v=79: kpis —0.60, 0.53, 0.43, 0.36 y −0.05, −0.15 de 2012–2018—, metrics, analysis, params_view; v=77: solo tendencia 0.02 en 2012–2018) · `exp_details.json` (extra-v79: algo, code —variante `E solo-trend: tf`—, filters; extra-v77: code con `tf = (c > MA50)`) · `series/extra-v79.json` ([0] confirmación de 5 días, [1] los 4 índices comprar y esperar) · tabla «Con tu capital» (fila #79).
Producción (CLAUDE.md del canal): b-roll real detrás de cada escena con overlay 0.6, Ken Burns alternando, subtítulos karaoke en MAYÚSCULAS, un dato visual por escena. Colores: rojo `#e11d2a`, verde `#22c55e`, fondo `#09090b`.

## Títulos
1. Una regla de una línea saca 0.59; la estrategia con detector, 0.60
2. ¿Y si no adaptas nada? Solo tendencia contra cuatro versiones adaptativas
3. Siempre compárate con la versión simple: el caso del régimen adaptativo

## Miniatura
Fondo `#09090b`. A la izquierda, una sola línea escrita en blanco («cierre > media de 50 días») con «0.59» en verde `#22c55e`; a la derecha, una maquinaria de engranajes complicada con «0.60» en rojo `#e11d2a`. Texto: «¿PARA QUÉ?». Logo ATLAS arriba a la derecha.

---

## VIDEO LARGO (≈ 5½ min)

**[0:00 — Gancho]** (pantalla: una línea de texto con «0.59» frente a una maquinaria de engranajes con «0.60»)
BOCETO: la línea de texto aparece sola con tick; la maquinaria se arma a su lado con whoosh; los dos números quedan casi pegados; golpe de bajo.
> Una regla de una línea, comprar si el precio está sobre su media de 50 días, saca un Sharpe de 0.59 con datos nuevos. La versión con detector de régimen, tres arreglos y mucha ingeniería, saca 0.60. Hoy te muestro por qué hay que compararse siempre con la versión simple.

**[0:18 — Qué experimento es]** (pantalla: rótulo «Experimento #79 · ATLAS Lab» y el nombre debajo)
BOCETO: rótulo con el número 79 y el nombre «Régimen adaptativo — histéresis, confirmación y mezcla»; logo en la esquina.
> Este es el experimento #79 de ATLAS Lab: régimen adaptativo, histéresis, confirmación y mezcla. Todos los resultados están en la página del experimento.

**[0:45 — La regla de una línea]** (pantalla: precio con su media de 50 días; verde sobre ella, gris de efectivo debajo)
BOCETO: precio y media de 50 días; tramos verdes «dentro» y grises «fuera»; cuatro índices.
> La regla simple se llama aquí «solo tendencia»: si el cierre está sobre su media de 50 días, estás dentro; si no, estás fuera, en efectivo. Nada más. Se aplica a S&P 500, Nasdaq 100, DAX y FTSE 100, con el mismo peso, 3 puntos básicos de costo por movimiento y la señal con rezago.

**[1:25 — La versión compleja]** (pantalla: diagrama de flujo con el detector y las tres mejoras)
BOCETO: diagrama: Efficiency Ratio de 20 días → ¿tendencia o rango? → en tendencia, la regla de una línea; en rango, comprar si el RSI de 2 días baja de 10; tres mejoras apiladas: histéresis, confirmación y mezcla.
> La versión compleja mide el régimen con el Efficiency Ratio de 20 días. En tendencia usa justamente esa regla de una línea; en rango, compra las caídas con el RSI de 2 días. Y como el detector entraba y salía a destiempo, probé tres arreglos: histéresis, confirmación de 5 días y mezcla continua.

**[2:05 — Resultados]** (pantalla: tabla con barras)
BOCETO: barras agrupadas; la línea de «solo tendencia» en blanco atraviesa todas; la de 0.68 en verde punteada.
| Variante | Sharpe 2012–2018 | Sharpe fuera de muestra (2019–2024) |
|---|---|---|
| Solo tendencia (una línea) | 0.02 | 0.59 |
| Confirmación de 5 días | −0.05 | 0.60 |
| Histéresis | −0.15 | 0.53 |
| Mezcla continua | −0.18 | 0.43 |
| Versión binaria | −0.15 | 0.36 |
| Comprar y esperar | 0.68 | 0.68 |
> El Sharpe mide cuánto rindes por cada unidad de riesgo. Fuera de muestra, que son los datos de 2019 a 2024, la mejor variante compleja llega a 0.60 y la regla de una línea ya tenía 0.59. En 2012–2018, la regla de una línea da 0.02 y todas las complejas son negativas, de −0.05 a −0.18. El 0.02 de la regla simple viene del experimento 77.

**[3:00 — Qué enseña]** (pantalla: balanza con «ingeniería» y «resultado»)
BOCETO: una balanza: el plato de la «ingeniería» pesa mucho y el del «resultado extra» casi nada; texto «+0.01».
> La ingeniería adicional, el detector y los tres arreglos, añade una centésima de Sharpe fuera de muestra y empeora el periodo de diseño. Cuando alguien te muestre una estrategia con muchas piezas, la primera pregunta es: ¿y la versión simple? Si la simple hace lo mismo, las piezas no aportan nada. El análisis del experimento lo dice así: la adaptación no aporta nada extra.

**[3:40 — Pero la simple tampoco gana]** (pantalla: línea de 0.68 por encima de todas)
BOCETO: la línea verde punteada de 0.68 por encima de todas las barras; texto «ninguna le gana a comprar y esperar».
> Que la regla simple iguale a la compleja no significa que sirva. Ninguna supera el 0.68 de comprar y esperar fuera de muestra, y en 2012–2018 la simple da 0.02. Es seguimiento de tendencia que depende del periodo: 2019–2024 fue tendencial, y en ese periodo luce bien; en 2012–2018, no.

**[4:15 — Con tu capital]** (pantalla: tarjeta «Con tu capital» con la curva de la mejor variante compleja)
BOCETO: aviso «mejor variante compleja: confirmación de 5 días»; contadores finales; no hay curva de solo tendencia en el sitio.
> No hay una curva de dinero para la regla de una línea; la del sitio es la de la mejor variante compleja. Con $100,000, entre 2012 y 2024, la confirmación de 5 días gana $37,060 y comprar y esperar, $290,064. Con $10,000: +$3,706 contra +$29,006. Es lo que pasó, no una promesa.

**[4:45 — Preguntas de un escéptico]** (pantalla: tres tarjetas: «¿otra media?», «¿Deflated Sharpe?», «¿dinero de solo tendencia?»)
BOCETO: tres tarjetas que se voltean con «no probado», «no aplicado» y «no se midió».
> Preguntas que me haría un escéptico. ¿Y con otra media distinta de 50 días? No la probé. ¿Y el Deflated Sharpe? No lo apliqué. ¿Y cuánto dinero da la regla de una línea? No tengo su curva, solo su Sharpe.

**[5:05 — Ficha del experimento #79]** (pantalla: tarjeta con la ficha y la URL abajo)
BOCETO: tarjeta con cinco líneas que entran con tick y, al final, la URL resaltada en verde.
> Ficha del experimento 79. Estado: murió. Cifras clave: la mejor variante, confirmación de 5 días, 0.60 fuera de muestra; solo tendencia, 0.59; comprar y esperar, 0.68. Lo que decidió: la adaptación no aporta nada extra y es negativa en 2012–2018. Lección: compárate siempre con la versión simple. Revísalo completo en atlas-lab-one.vercel.app/e/79.

**[5:35 — Cierre]**
BOCETO: una línea de texto y una maquinaria con los números 0.59 y 0.60; logo.
> Todos los datos en atlas-lab-one.vercel.app, experimento 79. El trading no se promete: se prueba. Contenido educativo, no es asesoría financiera.

---

## SHORT (9:16, ≈ 47 s)

**[0-3 s]** (boceto: una línea de texto con «0.59» frente a una maquinaria con «0.60»; b-roll de engranajes, kb=in; golpe de bajo)
> Una regla de una línea saca un Sharpe de 0.59. La versión complicada, 0.60.

**[3-13 s]** (boceto: precio y media de 50 días; tramos verdes y grises)
> La regla simple: si el precio está sobre su media de 50 días, estás dentro; si no, fuera. Cuatro índices, con costos.

**[13-26 s]** (boceto: cuatro engranajes: 0.36, 0.43, 0.53 y 0.60; ticks)
> La complicada mide el régimen del mercado y le suma tres arreglos. Sus Sharpe fuera de muestra: 0.36, 0.43, 0.53 y 0.60.

**[26-37 s]** (boceto: línea de 0.68 por encima; sello «comprar y esperar»)
> Ninguna le gana a comprar y esperar: 0.68. Y de 2012 a 2018, todas las complicadas fueron negativas.

**[37-42 s]** (boceto: balanza «ingeniería» contra «resultado»)
> Si la versión simple hace lo mismo, las piezas no aportan nada.

**[42-47 s]** (boceto: texto «Experimento #79 completo en el enlace»; logo)
> Video completo en el canal y experimento #79 completo en el enlace. ¿Y tu versión simple?

Gancho alterno A: «0.59 contra 0.60: la ingeniería no aportó casi nada.» · B: «Siempre compárate con la versión simple.»

## Descripción de YouTube — video largo
https://atlas-lab-one.vercel.app/e/79?utm_source=youtube&utm_medium=video&utm_campaign=exp079-t2
Ficha: experimento #79, régimen adaptativo (histéresis, confirmación y mezcla). Estado: murió. Mejor variante (confirmación de 5 días): Sharpe 0.60 fuera de muestra; solo tendencia, 0.59; comprar y esperar, 0.68. Con $100,000: +$37,060 contra +$290,064.
La regla de una línea (cierre sobre su media de 50 días) frente a cuatro versiones adaptativas, en 4 índices con costos de 3 puntos básicos.
Contenido educativo. No es asesoría financiera ni recomendación de inversión.

## Descripción de YouTube — Short
https://atlas-lab-one.vercel.app/e/79?utm_source=youtube&utm_medium=short&utm_campaign=exp079-t2
Ficha: experimento #79, murió. Solo tendencia 0.59 contra 0.60 de la mejor versión compleja; comprar y esperar 0.68. Contenido educativo, no es asesoría financiera.

## Capítulos
0:00 Gancho · 0:18 Qué experimento es · 0:45 La regla de una línea · 1:25 La versión compleja · 2:05 Resultados · 3:00 Qué enseña · 3:40 Pero la simple tampoco gana · 4:15 Con tu capital · 4:45 Preguntas de un escéptico · 5:05 Ficha del experimento #79 · 5:35 Cierre

## Etiquetas
solo tendencia, régimen adaptativo, media de 50 días, versión simple, navaja de Occam, Efficiency Ratio, seguimiento de tendencia, índices bursátiles, backtest, Sharpe ratio, trading con datos, ATLAS Lab

## Rúbrica (autoevaluación, 1–5)
| Pieza | hook_0_3s | ritmo | promesa_cumplida | potencial_loop | claridad_no_traders | honestidad_atlas | audio | cta | Promedio |
|---|---|---|---|---|---|---|---|---|---|
| Largo | 4 | 4 | 5 | 4 | 4 | 5 | 4 | 4 | 4.25 |
| Short | 5 | 4 | 5 | 4 | 4 | 5 | 4 | 4 | 4.38 |

Hook ≥ 4 ✓ · honestidad 5 ✓. Punto débil: solo se conoce el Sharpe de la regla de una línea (0.02 y 0.59), no su dinero ni su caída; el largo lo dice y no inventa esas cifras. El 0.02 viene del experimento 77.

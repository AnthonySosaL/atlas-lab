# Experimento #77 — Tema 3: ¿Cuánto tiempo está el mercado en tendencia? (27% de los días, medido en cuatro índices)

**Tema 3 de 3 del experimento #77** · Qué aporta frente a los otros temas: es el tema del concepto y del método. Explica qué es un «régimen», cómo se mide con el Efficiency Ratio (el 27% de días en tendencia contra el ~20% del TikTok) y por qué el rezago de la señal es lo que hace que el detector llegue tarde. Se entiende sin los otros temas.
Estado del guion: **BORRADOR — pendiente de aprobación**
Estado del experimento: **murió** (no sirvió: la versión adaptativa rinde peor que usar una sola estrategia; comprar y esperar le gana a todo)
Serie: A (propuesta; es la tesis de un TikTok), pieza con el #79.
Datos usados: `experiments.json` (v=77: kpis —27% de días en tendencia—, metrics, analysis, params_view) · `exp_details.json` (extra-v77: algo —Efficiency Ratio a 20 días, umbral 0.35, régimen rezagado 2 días—, code, filters) · `experiments.json` (v=62, v=79: el «muro de detección» de los #59–62 y el intento de arreglo del #79).
Producción (CLAUDE.md del canal): b-roll real detrás de cada escena con overlay 0.6, Ken Burns alternando, subtítulos karaoke en MAYÚSCULAS, un dato visual por escena. Colores: rojo `#e11d2a`, verde `#22c55e`, fondo `#09090b`.

## Títulos
1. ¿Cuánto tiempo está el mercado en tendencia? 27% de los días, medido
2. Un TikTok dice 20%; yo medí 27%: qué es un régimen de mercado
3. El Efficiency Ratio explicado: cómo medir si el mercado va en línea recta

## Miniatura
Fondo `#09090b`. Una barra de 100 casillas con 27 en verde `#22c55e` y 73 en gris; encima, «27%» en blanco enorme y, tachado en rojo `#e11d2a`, «20%». Texto: «¿TENDENCIA?». Logo ATLAS arriba a la derecha.

---

## VIDEO LARGO (≈ 6 min)

**[0:00 — Gancho]** (pantalla: barra de 100 días con 20 casillas verdes del TikTok, y luego 27 verdes medidas)
BOCETO: barra de 100 casillas; 20 se encienden con la etiqueta «TikTok»; después se encienden 27 con la etiqueta «medido» y un tick; golpe de bajo.
> Un TikTok dice que el mercado está en tendencia más o menos el 20% del tiempo y en rango el 80%. Lo medí en cuatro índices y salió 27% de los días.

**[0:18 — Qué experimento es]** (pantalla: rótulo «Experimento #77 · ATLAS Lab» y el nombre debajo)
BOCETO: rótulo con el número 77 y el nombre «Régimen adaptativo (reversión en rango, tendencia en tendencia)»; logo en la esquina.
> Este es el experimento #77 de ATLAS Lab: régimen adaptativo, reversión en rango y tendencia en tendencia. Todos los resultados están en la página del experimento.

**[0:45 — Qué es un régimen]** (pantalla: dos mini-gráficos: línea diagonal y zigzag)
BOCETO: gráfico 1: precio que avanza en línea casi recta («tendencia»); gráfico 2: precio que sube y baja y termina donde empezó («rango»).
> Un régimen es el «modo» del mercado. A veces avanza en línea casi recta, sube o baja: tendencia. A veces se mueve de lado, sube y baja y termina donde empezó: rango. La idea del TikTok es usar una estrategia distinta en cada modo: seguir la dirección en tendencia, y comprar las caídas y vender los rebotes en rango.

**[1:25 — El Efficiency Ratio]** (pantalla: dos recorridos del mismo precio; una regla mide el «avance neto» y otra el «camino total»)
BOCETO: una línea azul con el avance neto del precio en 20 días y una línea amarilla con todo lo que se movió día a día; el cociente en pantalla; escala de 0 a 1.
> Para medirlo uso el Efficiency Ratio de Kaufman a 20 días. Compara el avance neto del precio en 20 días con todo lo que se movió día a día. Si avanzó en línea recta, el cociente es cercano a 1: tendencia limpia. Si fue de un lado a otro y terminó donde empezó, es cercano a 0: ruido. El umbral que uso es 0.35: por encima, tendencia; por debajo, rango.

**[2:10 — El resultado: 27%]** (pantalla: barra de 100 casillas con 27 verdes; cuatro logos de índices)
BOCETO: barra de 100 casillas; 27 en verde; etiquetas S&P 500, Nasdaq 100, DAX y FTSE 100.
> Con ese umbral, en el S&P 500, el Nasdaq 100, el DAX y el FTSE 100, el 27% de los días están en tendencia. Es algo más que el 20% del TikTok, así que el diagnóstico es razonable: el mercado está en rango la mayor parte del tiempo. Un umbral distinto daría otro porcentaje; usé 0.35 y no lo ajusté.

**[2:50 — Qué hace la estrategia con cada régimen]** (pantalla: diagrama de flujo)
BOCETO: diagrama: ¿ER > 0.35? Sí → tendencia: compra si el cierre está sobre su media de 50 días. No → rango: compra si el RSI de 2 días baja de 10 y vende si pasa de 70.
> Si el Efficiency Ratio pasa de 0.35, es tendencia y compro cuando el cierre está sobre su media de 50 días. Si no, es rango: compro cuando el RSI de 2 días, que mide cuán rápido bajó el precio, cae bajo 10, y vendo cuando pasa de 70. Cuatro índices, 3 puntos básicos de costo por movimiento.

**[3:30 — El problema del rezago]** (pantalla: precio con el régimen pintado y la franja detectada desplazada a la derecha)
BOCETO: franja verde (tendencia real) y una segunda franja desplazada dos casillas (la que detecta el algoritmo); texto «llega tarde».
> Aquí viene el obstáculo. Para no usar información del futuro, el régimen va rezagado 2 días en total: uno al calcular la señal y otro al ejecutar la posición. Pero además el Efficiency Ratio mira 20 días hacia atrás: tarda en subir cuando empieza una tendencia y tarda en bajar cuando termina. Para cuando mide «tendencia», el régimen ya cambió. Es el mismo muro de detección de los experimentos 59 al 62.

**[4:15 — Lo que costó]** (pantalla: tabla corta)
BOCETO: tabla con filas y barras; la adaptativa en rojo en 2012–2018.
| Versión | Sharpe 2012–2018 | Sharpe fuera de muestra |
|---|---|---|
| Adaptativa | −0.27 | 0.37 |
| Solo tendencia | 0.02 | 0.59 |
| Comprar y esperar | 0.68 | 0.68 |
> El Sharpe mide cuánto rindes por cada unidad de riesgo, y fuera de muestra son los datos de 2019 a 2024 que no se usaron para diseñar. La adaptativa da −0.27 y 0.37; solo tendencia, sin ningún detector, 0.02 y 0.59; comprar y esperar, 0.68. El diagnóstico era correcto, hay regímenes; la solución, no.

**[4:55 — ¿Y si arreglo el detector?]** (pantalla: tres engranajes del experimento 79)
BOCETO: tres engranajes («histéresis», «confirmación», «mezcla») y una barra que sube de 0.36 a 0.60.
> Lo intenté en el experimento 79 con tres mejoras: histéresis, confirmación de 5 días y mezcla continua. La mejor llegó a 0.60 fuera de muestra, pero solo tendencia ya daba 0.59. Mejorar el detector no basta.

**[5:20 — Con tu capital]** (pantalla: tarjeta «Con tu capital»)
BOCETO: curva verde pálida casi plana contra la blanca; contadores finales.
> Con $100,000, entre 2012 y 2024: +$2,179 contra +$290,064 de comprar y esperar. Con $10,000: +$218 contra +$29,006.

**[5:40 — Preguntas de un escéptico]** (pantalla: tres tarjetas: «¿otro umbral?», «¿otra ventana?», «¿otros índices?»)
BOCETO: tres tarjetas que se voltean con «no probado».
> Preguntas que me haría un escéptico. ¿Y otro umbral distinto de 0.35? No lo probé. ¿Y otra ventana distinta de 20 días? Tampoco. ¿Y otros índices? Solo estos cuatro.

**[5:55 — Ficha del experimento #77]** (pantalla: tarjeta con la ficha y la URL abajo)
BOCETO: tarjeta con cinco líneas que entran con tick y, al final, la URL resaltada en verde.
> Ficha del experimento 77. Estado: murió. Cifras clave: 27% de días en tendencia; Sharpe fuera de muestra de 0.37 contra 0.59 de solo tendencia y 0.68 de comprar y esperar. Lo que decidió: es peor que aplicar una sola estrategia. Lección: el detector llega tarde. Revísalo completo en atlas-lab-one.vercel.app/e/77.

**[6:25 — Cierre]**
BOCETO: barra de 100 casillas con 27 verdes; logo.
> Todos los datos en atlas-lab-one.vercel.app, experimento 77. El trading no se promete: se prueba. Contenido educativo, no es asesoría financiera.

---

## SHORT (9:16, ≈ 48 s)

**[0-3 s]** (boceto: barra de 100 casillas; 20 verdes tachadas y 27 verdes medidas; golpe de bajo)
> Un TikTok dice que el mercado está en tendencia el 20% del tiempo. Yo medí 27%.

**[3-14 s]** (boceto: dos recorridos del precio: línea recta y zigzag; escala de 0 a 1)
> Uso el Efficiency Ratio de 20 días: mide qué tan en línea recta se movió el precio. Si pasa de 0.35, lo llamo tendencia.

**[14-26 s]** (boceto: diagrama: tendencia → media de 50 días; rango → RSI de 2 días)
> En tendencia, compro sobre su media de 50 días. En rango, compro cuando el RSI de 2 días baja de 10. Cuatro índices, con costos.

**[26-38 s]** (boceto: tres barras: 0.37, 0.59 y 0.68)
> Fuera de muestra, la adaptativa da un Sharpe de 0.37. Solo tendencia: 0.59. Comprar y esperar: 0.68.

**[38-43 s]** (boceto: franja desplazada; texto «llega tarde»)
> El detector llega tarde: cuando mide tendencia, el régimen ya cambió.

**[43-48 s]** (boceto: texto «Experimento #77 completo en el enlace»; logo)
> Video completo en el canal y experimento #77 completo en el enlace. ¿Cuánto tiempo crees que está en tendencia?

Gancho alterno A: «El mercado está en tendencia el 27% de los días, no el 20%.» · B: «Medir bien el régimen no alcanza.»

## Descripción de YouTube — video largo
https://atlas-lab-one.vercel.app/e/77?utm_source=youtube&utm_medium=video&utm_campaign=exp077-t3
Ficha: experimento #77, régimen adaptativo. Estado: murió. 27% de los días en tendencia (Efficiency Ratio de 20 días, umbral 0.35); Sharpe fuera de muestra 0.37 contra 0.59 de solo tendencia y 0.68 de comprar y esperar.
Qué es un régimen de mercado, cómo se mide con el Efficiency Ratio y por qué el detector llega tarde. 4 índices, costos de 3 puntos básicos, 2012–2024.
Contenido educativo. No es asesoría financiera ni recomendación de inversión.

## Descripción de YouTube — Short
https://atlas-lab-one.vercel.app/e/77?utm_source=youtube&utm_medium=short&utm_campaign=exp077-t3
Ficha: experimento #77, murió. 27% de los días en tendencia; Sharpe fuera de muestra 0.37 contra 0.68 de comprar y esperar. Contenido educativo, no es asesoría financiera.

## Capítulos
0:00 Gancho · 0:18 Qué experimento es · 0:45 Qué es un régimen · 1:25 El Efficiency Ratio · 2:10 El resultado: 27% · 2:50 Qué hace la estrategia con cada régimen · 3:30 El problema del rezago · 4:15 Lo que costó · 4:55 ¿Y si arreglo el detector? · 5:20 Con tu capital · 5:40 Preguntas de un escéptico · 5:55 Ficha del experimento #77 · 6:25 Cierre

## Etiquetas
régimen de mercado, Efficiency Ratio, tendencia y rango, estrategia adaptativa, detector de régimen, reversión a la media, seguimiento de tendencia, TikTok trading, índices bursátiles, backtest, trading con datos, ATLAS Lab

## Rúbrica (autoevaluación, 1–5)
| Pieza | hook_0_3s | ritmo | promesa_cumplida | potencial_loop | claridad_no_traders | honestidad_atlas | audio | cta | Promedio |
|---|---|---|---|---|---|---|---|---|---|
| Largo | 5 | 4 | 5 | 4 | 4 | 5 | 4 | 4 | 4.38 |
| Short | 5 | 4 | 5 | 4 | 4 | 5 | 4 | 4 | 4.38 |

Hook ≥ 4 ✓ · honestidad 5 ✓. Punto débil: el 20% del TikTok es una cifra aproximada («~80/20») del análisis del experimento; el 27% depende del umbral de 0.35, y el largo lo dice en voz alta.

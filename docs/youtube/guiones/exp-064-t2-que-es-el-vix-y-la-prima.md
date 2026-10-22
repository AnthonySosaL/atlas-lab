# Experimento #64 — VRP: prima de riesgo de volatilidad · Tema 2 de 4: qué es el VIX y qué significa vender seguros

Estado del guion: **BORRADOR — pendiente de aprobación**
Tema 2 de 4 del experimento #64 · Qué aporta frente a los otros temas: es el tema del CONCEPTO para principiantes. Explica desde cero qué es la volatilidad, qué es el VIX, qué es la prima de riesgo de volatilidad y por qué venderla equivale a ser una aseguradora, con el dato de que el mercado se movió menos de lo anunciado el 82% de los días. El tema 1 cuenta la historia del peor día; el tema 3 trata de la inestabilidad entre periodos; el tema 4, de la cola y del número del millón.
Estado del experimento: **no concluyente** (la prima existe en bruto, pero es inestable entre periodos, no tiene costos de opciones ni prueba fuera de muestra y su cola es extrema)
Serie: F (anomalías y estacionalidad) · Continúa en #69 (VRP protegido) y #70 (gestión de riesgo)
Datos usados: `experiments.json` (v=64: verdict, analysis, notes, kpis, metrics, params_view, capital) · `exp_details.json` (extra-v64: algo, code.snippet, filters) · `series/extra-v64.json` ([0] VRP vendiendo varianza al 15% de volatilidad, [1] S&P 500 comprar y esperar) · tabla «Con tu capital» (`docs/youtube/*-capital.md`, fila #64; el $10k se calcula con la misma regla de la tarjeta del sitio).

## Títulos
1. ¿Qué es el VIX? El mercado se movió menos de lo que anunciaba el 82% de los días
2. Vender seguros al mercado, explicado con un paraguas: la prima de riesgo de volatilidad
3. La prima de riesgo de volatilidad en 5 minutos: VIX, varianza y por qué no es ganancia gratis

## Miniatura
Fondo `#09090b`. Un paraguas abierto con un termómetro rotulado «VIX» dentro; bajo él, un calendario donde el 82% de las casillas son verdes `#22c55e` y unas pocas, rojas `#e11d2a`. Texto grande blanco: «82%». Logo ATLAS esquina inferior derecha.

---

## VIDEO LARGO (≈ 5½ min)

**[0:00 — Gancho]** (pantalla: calendario con casillas verdes y un termómetro del VIX)
El 82% de los días, el mercado se movió menos de lo que el VIX anunciaba el día anterior. Esa diferencia tiene nombre: la prima de riesgo de volatilidad.
> BOCETO: calendario en el que el 82% de las casillas se pintan de verde; termómetro del VIX al lado; golpe de bajo y sacudida al llegar a «82%».

**[0:20 — Este experimento]** (pantalla: rótulo «Experimento #64 · VRP: prima de riesgo de volatilidad»)
Este es el experimento #64 de ATLAS Lab: la prima de riesgo de volatilidad, o VRP. Todos los resultados están en la página del experimento. Hoy lo explico desde cero, sin suponer que sabes qué es el VIX.
> BOCETO: rótulo con «#64» y el nombre del experimento; logo ATLAS; whoosh suave.

**[0:40 — Qué es la volatilidad]** (pantalla: dos líneas de precio, una tranquila y otra agitada)
Volatilidad es cuánto se mueve el precio de algo. Un activo tranquilo sube y baja poco; uno agitado, mucho. No dice hacia dónde va, solo cuánto se mueve.
> BOCETO: dos líneas de precio, una casi plana y otra con oleaje, rotuladas «volatilidad baja» y «volatilidad alta». Ilustración, sin datos.

**[1:10 — Qué es el VIX]** (pantalla: termómetro del miedo)
El VIX es un indicador que resume cuánto espera el mercado de opciones que se mueva el S&P 500 en el futuro; por eso se le llama el termómetro del miedo. Cuando hay pánico, sube. Cuando todo está tranquilo, baja. Es una expectativa, un anuncio de movimiento, no una medición de lo que ya pasó.
> BOCETO: termómetro del VIX que sube con noticias de pánico y baja con calma; texto «VIX = lo que el mercado espera que se mueva».

**[1:45 — Lo anunciado y lo real]** (pantalla: dos líneas, anunciado y real)
Ahora hay dos cantidades. La anunciada: lo que el VIX decía ayer que se movería el mercado. La real: lo que de verdad se movió hoy. El 82% de los días, lo real fue menor que lo anunciado.
> BOCETO: línea del VIX por encima de una línea más baja de «lo que realmente se movió»; la franja entre las dos se pinta verde y se rotula «la prima».

**[2:20 — La prima]** (pantalla: franja verde entre las dos líneas)
La prima de riesgo de volatilidad es esa diferencia entre lo que se anuncia y lo que se mueve. Si cobras esa diferencia, ganas la mayoría de los días. Se mide con varianza, que es la volatilidad elevada al cuadrado: cada día, la estrategia cobra la varianza que anunciaba el VIX de ayer y paga la que realmente se movió hoy.
> BOCETO: fórmula animada «cobra (VIX de ayer ÷ 100)² ÷ 252» → «paga el movimiento de hoy al cuadrado»; recuadro `params_view`: prima cobrada y pago.

**[2:55 — Vender seguros]** (pantalla: dibujo de una aseguradora)
Cobrar esa prima es como ser una aseguradora. Los demás pagan por protegerse contra caídas; tú cobras una prima pequeña casi todos los días y, cuando llega el siniestro, pagas. Muchos días ganas poquito; unos pocos, pierdes muchísimo. Por eso se dice que la prima es el pago por asumir riesgo de cola: el de eventos extremos y raros.
> BOCETO: lluvia de monedas verdes pequeñas cayendo cada día y, de golpe, una factura roja enorme; texto «prima pequeña · siniestro enorme». Ilustración rotulada.

**[3:30 — Cómo se midió aquí]** (pantalla: checklist de filtros)
Usé el S&P 500 y el VIX, de 2012 a 2024, con la señal de ayer. Es una aproximación: no uso opciones reales. Por eso no hay costos de opciones, ni prueba fuera de muestra, ni Deflated Sharpe, que ajusta por cuántas versiones probaste.
> BOCETO: ✓ «Señal de ayer» · — «Costos: no aplicado» · — «Fuera de muestra: no aplicado» · — «Deflated Sharpe: no aplicado».

**[4:10 — Resultado en bruto]** (pantalla: Sharpe 1.56 y el 82%)
En bruto, el Sharpe es 1.56. El Sharpe mide cuánto rindes por cada unidad de riesgo. Comprar y esperar el S&P 500 da 0.80, pero los dos números no son comparables: uno es el resultado de vender varianza, sin capital ni costos, y el otro es el retorno de un índice.
> BOCETO: contador del Sharpe subiendo a 1.56 y un segundo medidor de 0.80 unido por «≠ no comparable».

**[4:40 — Con tu capital]** (pantalla: tarjeta con el aviso ámbar)
Con $10,000, la curva de esta aproximación termina en +$162,483; con $100,000, en +$1,624,827, contra +$347,885 de comprar y esperar el S&P 500. Es una curva bruta, sin opciones reales, y no es una expectativa. La peor caída fue de −$61,861 con $100,000, un −61.9%.
> BOCETO: tarjeta de capital con sello rojo «BRUTO · SIN OPCIONES REALES»; la curva `series/extra-v64.json[0]` sube casi vertical.

**[5:10 — Conclusión]** (pantalla: paraguas y termómetro)
La prima existe en bruto, pero no es ganancia gratis: es el pago por asegurar a otros contra caídas.
> BOCETO: el paraguas del inicio con una gota roja grande cayendo.

**[5:20 — Ficha del experimento #64 y cierre]** (pantalla: tarjeta con la ficha y la URL)
Ficha del experimento #64. Estado: no concluyente. Cifra clave: Sharpe de 1.56 en bruto, con prima positiva el 82% de los días y un peor día de −28.6 sigmas. Filtro que decidió: ninguno aplicado; faltan costos de opciones y fuera de muestra, y el Sharpe es inestable entre periodos. Lección: no es ganancia gratis, es el pago por asumir riesgo de cola. Revísalo completo en atlas-lab-one.vercel.app/e/64. Contenido educativo, no es asesoría financiera. El trading no se promete: se prueba.
> BOCETO: tarjeta en pantalla con las 4 líneas de la ficha (estado ámbar «no concluyente») y la URL `atlas-lab-one.vercel.app/e/64` en grande; fundido a la frase de marca.

---

## SHORT (9:16, ≈ 45 s) — "El termómetro del miedo"

**[0-3 s]** "El 82% de los días, el mercado se movió menos de lo que el VIX anunciaba."
> BOCETO: B-roll vertical de paraguas bajo tormenta, kb=in, overlay 0.6; calendario con casillas verdes y «82%» gigante; golpe de bajo + sacudida. Karaoke con «82%» en rojo.

**[3-14 s]** "El VIX es el termómetro del miedo: resume cuánto espera el mercado de opciones que se mueva el S&P 500. Cuando hay pánico, sube."
> BOCETO: termómetro del VIX; whoosh. Ken Burns hacia dentro.

**[14-26 s]** "Esa diferencia entre lo anunciado y lo real es la prima de riesgo de volatilidad. Cobrarla es como ser una aseguradora: una prima pequeña casi todos los días."
> BOCETO: franja verde entre dos líneas; lluvia de monedas pequeñas; tick.

**[26-37 s]** "En bruto, de 2012 a 2024, su Sharpe es 1.56. Comprar y esperar el S&P 500: 0.80. No son comparables, y no hay costos de opciones."
> BOCETO: dos medidores con «≠» y el rótulo «no comparable»; flash blanco.

**[37-45 s]** "No es ganancia gratis: es el pago por asumir un riesgo extremo. Video completo en el canal y experimento 64 completo en el enlace. Casi siempre, el mercado se mueve menos de lo anunciado. Casi."
> BOCETO: vuelve el calendario con el 82% verde y una casilla roja grande (loop); rótulo «Experimento #64 completo en el enlace»; texto pequeño «No es asesoría financiera · El trading no se promete: se prueba».

---

## Descripción (YouTube)
https://atlas-lab-one.vercel.app/e/64?utm_source=youtube&utm_medium=video&utm_campaign=exp064-t2
Ficha del experimento #64: no concluyente · Sharpe 1.56 en bruto (S&P 500, 2012–2024) · prima positiva el 82% de los días · peor día −28.6σ.
Qué es la volatilidad, qué es el VIX y qué es la prima de riesgo de volatilidad, explicados con una aseguradora. Es una aproximación sin opciones reales, ni costos de opciones, ni prueba fuera de muestra.
Contenido educativo. No es asesoría financiera ni recomendación de inversión.
Descripción del Short (primera línea): https://atlas-lab-one.vercel.app/e/64?utm_source=youtube&utm_medium=short&utm_campaign=exp064-t2

Capítulos: 0:00 Gancho · 0:20 Este experimento · 0:40 Qué es la volatilidad · 1:10 Qué es el VIX · 1:45 Lo anunciado y lo real · 2:20 La prima · 2:55 Vender seguros · 3:30 Cómo se midió aquí · 4:10 Resultado en bruto · 4:40 Con tu capital · 5:10 Conclusión · 5:20 Ficha del experimento #64 y cierre

Etiquetas: VIX, prima de riesgo de volatilidad, VRP, volatilidad, vender volatilidad, qué es el VIX, riesgo de cola, S&P 500, Sharpe ratio, backtest, trading con datos, ATLAS Lab

## Rúbrica (autoevaluación)
| Pieza | hook_0_3s | ritmo | promesa_cumplida | potencial_loop | claridad_no_traders | honestidad_atlas | audio | cta | Promedio |
|---|---|---|---|---|---|---|---|---|---|
| Largo | 4 | 4 | 5 | 4 | 5 | 5 | 4 | 4 | 4.38 |
| Short | 5 | 4 | 5 | 5 | 5 | 5 | 4 | 4 | 4.63 |

Hook ≥ 4 ✓ · honestidad 5 ✓. Punto débil: es un video conceptual con pocas cifras; el 82% y la aseguradora sostienen el gancho y el ritmo.

# Experimento #0 — Línea base SMA 20/50

Estado del guion: **BORRADOR — pendiente de aprobación**
Estado del experimento: **parcial** (en el sitio: neutral)
Serie: D (abre la serie de machine learning: es la vara mínima que los #1–#3 tenían que superar; el #0 no figura de forma explícita en plan-series.md)
Datos usados: `experiments.json` (v=0: description, params, metrics, kpis, analysis, verdict, notes), `exp_details.json` (algo, filters), `series/20260607_144908_baseline-sma-20-50.json` (curva 1 = estrategia, curva 2 = comprar y esperar) y la tabla «Con tu capital» de docs/youtube (fila 0). Las cifras con 10,000 dólares son las de la tabla de 100,000 divididas entre 10.

## Títulos (3 opciones)
1. El cruce de medias SMA 20/50: +7.9% en 6 años y $1,273 en costos
2. Probé una de las estrategias más básicas del trading con costos reales
3. La vara mínima: un cruce de medias contra comprar y esperar (2019-2024)

## Miniatura
Fondo negro de la marca. Texto enorme en Segoe UI Black: «LA VARA» en blanco y «MÍNIMA» en rojo de marca (3 palabras; no repite el título). Debajo, dos barras horizontales: verde «+7.9%» y roja «−9.7%». De fondo, muy atenuadas, las dos curvas reales de la serie (estrategia en verde, comprar y esperar en rojo). Logo ATLAS en la esquina inferior derecha.

---

## VIDEO LARGO (16:9, ≈ 5:12 min — experimento corto: es el punto de partida del laboratorio)
Ritmo visual: algo cambia en pantalla cada 2-3 s; b-roll real detrás, Ken Burns alterno, subtítulos karaoke, whoosh + flash en cada corte, golpe de bass solo en el momento clave.

**[0:00 — Gancho]** (pantalla: «+7.9%» verde gigante; al lado «$1,273» rojo)
+7.9% en seis años con una de las estrategias más simples que existen: un cruce de medias móviles. Suena bien. Pero para lograrlo pagó 1,273 dólares en comisiones sobre una cuenta de 10,000. Y comprar el euro y no hacer nada habría dado −9.7%. En este video te enseño la estrategia, cómo la probé y por qué la uso como la vara mínima de ATLAS Lab: el punto de partida contra el que mido todo lo demás.
> Boceto: contador animado de 0 a +7.9% (verde) que, al llegar, es golpeado por un sello rojo «$1,273 en costos» con sacudida de pantalla; Ken Burns «in» sobre velas de fondo con overlay oscuro.

**[0:32 — La idea]** (pantalla: velas con dos medias móviles y flechas en los cruces)
Una media móvil es, sencillamente, el precio promedio de las últimas velas. Cada vela resume una hora de precio. La media de 20 velas reacciona rápido a los cambios; la de 50 velas es más lenta y más suave. Cuando la rápida cruza por encima de la lenta, es una señal de que el precio empieza a subir, y compro. Cuando cruza por debajo, el precio empieza a bajar, y vendo en corto, es decir, apuesto a que seguirá bajando. No hay momentos de espera: siempre estoy dentro del mercado, o comprado o vendido, hasta que llega el siguiente cruce. Es probablemente la primera estrategia que cualquiera aprende, y por eso mismo es un buen punto de partida.
> Boceto: animación de dos líneas (SMA 20 verde, SMA 50 blanca) sobre la curva real del EUR/USD; en cada cruce aparece una flecha verde «COMPRA» o roja «VENTA EN CORTO»; texto fijo «Siempre dentro del mercado».

**[1:20 — Las reglas del experimento]** (pantalla: tarjeta de parámetros)
El mercado es el euro contra el dólar, el EUR/USD, en velas de una hora, de 2019 a 2024. Los parámetros están fijos: 20 y 50. No probé otras combinaciones para quedarme con la que mejor se veía en el pasado, porque eso es hacer trampa con la historia. Y con costos reales. Cada operación paga una comisión de 0.007%, unos 0.7 pips, más 0.002% de deslizamiento, que es la diferencia entre el precio que esperas y el que realmente te dan. El capital inicial es de 10,000 dólares. Son pocas reglas, pero hacen que el resultado se parezca a lo que pasaría en una cuenta real y no a un gráfico bonito.
> Boceto: tarjeta de `params_view` (Mercado EUR/USD · Temporalidad 1 h · SMA 20 / SMA 50 · Comisión · Deslizamiento · Capital $10,000 · Periodo 2019–2024) apareciendo fila por fila con tick sonoro; sello «Parámetros fijos».

**[2:06 — Resultados]** (pantalla: tarjetas KPI y curva)
Vamos a los números. Retorno total: +7.9% en los seis años. Comprar el euro-dólar y esperar, sin hacer nada: −9.7%. La estrategia terminó en positivo mientras el mercado terminó en negativo. El Sharpe, que mide cuánto ganas por cada unidad de riesgo que asumes y donde cero significa que no hay ventaja, fue 0.25. La peor caída desde un máximo, lo que llamamos drawdown, fue −14.8%: en algún momento la cuenta estuvo casi un 15% por debajo de su mejor punto. Hizo 822 operaciones, y solo el 37.0% terminó en ganancia. Y el factor de beneficio, que es lo ganado dividido entre lo perdido, fue 1.04.
> Boceto: las 8 tarjetas de `kpis` (retorno, sin estrategia, Sharpe, drawdown, operaciones, ganadoras, factor de beneficio, costos) entrando en cascada; +7.9% en verde, −9.7% y −14.8% en rojo. Después, la curva real (series, curva 1) dibujándose contra la curva 2 en rojo.

**[2:50 — Dónde se va el dinero]** (pantalla: contador de operaciones y de costos)
Fíjate en un detalle: 822 operaciones en seis años, y cada una paga un peaje. En total, 1,273 dólares en costos sobre una cuenta de 10,000. El propio experimento lo resume así: los costos se comen casi toda la ventaja. Con un factor de beneficio de 1.04, el margen entre lo que gana y lo que pierde es mínimo. Y el 37.0% de aciertos es lo esperable en una estrategia que sigue tendencias: pierde más veces de las que gana, pero cuando acierta, gana más de lo que pierde en cada fallo. Muchos fallos pequeños, pocos aciertos grandes, y un peaje en cada paso.
> Boceto: contador de operaciones que sube hasta 822 y, en paralelo, un contador de dólares hasta $1,273 sobre una barra que representa la cuenta de $10,000; Ken Burns «out»; texto «Los costos se comen casi toda la ventaja».

**[3:32 — Qué prueba y qué no]** (pantalla: checklist de filtros)
Dos cosas sí se comprobaron: que cuenta los costos y que le gana a comprar y esperar. Otras dos no se aplicaron. Primero, este experimento no separa un periodo de diseño de otro de prueba; es decir, no usa datos fuera de muestra, datos que la estrategia nunca vio. Segundo, no usa todavía el Deflated Sharpe, que es un Sharpe ajustado por cuántas estrategias se han probado. Por eso no digo «funciona»: el veredicto es parcial. Un Sharpe de 0.25 es una ventaja mínima, y esa es justo su función aquí: servir de vara. Cualquier modelo de machine learning que venga después tiene que superar esto.
> Boceto: checklist de `filters`: costos ✓, vs comprar y esperar ✓, fuera de muestra «no aplicado» (gris), Deflated Sharpe «no aplicado» (gris); etiqueta final «PARCIAL» en ámbar.

**[4:16 — Con tu capital]** (pantalla: tarjeta «Con tu capital»)
Con 10,000 dólares, el experimento terminó en +789, y 1,273 se fueron en costos; comprar y esperar habría dado menos 967. Con 100,000, la tabla de ATLAS da más 7,888 dólares para la estrategia, frente a menos 9,668 de comprar y esperar. Es mejor que perder, pero ganarle a un mercado que cayó no es lo mismo que tener una ventaja.
> Boceto: tarjeta de capital con dos cifras grandes, «Estrategia +$7,888» (verde) y «Comprar y esperar −$9,668» (rojo), sobre las dos curvas reales; selector $10,000 / $100,000.

**[4:41 — Conclusión y cierre]**
Veredicto: parcial. Gana poco, +7.9% en seis años; le gana a comprar y esperar, que perdió −9.7%; y los costos se comen casi todo, con 1,273 dólares pagados. Es la vara mínima. En los siguientes experimentos entran el machine learning y otras ideas más sofisticadas, y todas tendrán que superar este punto de partida. Todos los datos en atlas-lab-one.vercel.app, experimento 0. Contenido educativo, no es asesoría financiera. El trading no se promete: se prueba.
> Boceto: pantalla oscura con «PARCIAL» y la frase de marca; logo ATLAS y URL; velas animadas con opacidad baja.

---

## SHORT (9:16, ≈ 47 s)
Fórmula visual: b-roll vertical + overlay oscuro 0.6, Ken Burns alternando in/out, subtítulos karaoke en MAYÚSCULAS con las cifras en rojo, whoosh + flash en cada corte, golpe de bass + sacudida solo en el 0-3 s; ticker arriba.

**[0-3 s]** «+7.9% en seis años, pero 1,273 dólares en comisiones.»
> Boceto: texto gigante «+7.9%» verde y «$1,273» rojo; contador 0→+7.9% y sello rojo con sacudida; b-roll de pantalla de trading, Ken Burns «in».
**[3-12 s]** «Es un cruce de medias móviles: una de 20 velas y otra de 50, sobre el euro-dólar, de 2019 a 2024. Parámetros fijos y costos reales.»
> Boceto: curva real de la serie con las dos medias dibujándose y flechas en los cruces; Ken Burns «out»; karaoke con «COSTOS REALES» en rojo.
**[12-24 s]** «Hizo 822 operaciones y acertó solo el 37.0%. Su Sharpe fue 0.25 y su peor caída, −14.8%. Comprar y esperar, sin hacer nada, perdió −9.7%. Le ganó al mercado… por poco.»
> Boceto: contador de operaciones hasta 822; barras comparativas verde +7.9% contra roja −9.7%; whoosh y flash blanco al cambiar de escena.
**[24-36 s]** «Cada operación paga un peaje, y las 822 sumaron 1,273 dólares sobre una cuenta de 10,000. Con un factor de beneficio de 1.04, los costos se comen casi toda la ventaja.»
> Boceto: monedas cayendo sobre una barra de $10,000 hasta el contador $1,273; Ken Burns «in»; cifra «1.04» pulsando.
**[36-47 s]** «Por eso es la vara mínima de ATLAS: todo lo demás tiene que superarla. +7.9%, sí, pero con 1,273 dólares de peaje. El video completo está en el canal. No es asesoría financiera.»
> Boceto: vuelve el «+7.9%» del inicio con el «$1,273» encima (loop: la frase final retoma el gancho); texto «Video completo en el canal» y logo.

## Descripción (YouTube)
Probé el cruce de medias móviles SMA 20/50 sobre el EUR/USD en velas de 1 hora (2019-2024), con parámetros fijos y costos reales: +7.9% frente a −9.7% de comprar y esperar, pero con 822 operaciones y $1,273 en costos. Es la línea base contra la que se miden los demás experimentos de ATLAS Lab.
Todos los datos: https://atlas-lab-one.vercel.app (experimento #0)
Contenido educativo. No es asesoría financiera ni recomendación de inversión.

Capítulos: 0:00 Gancho · 0:32 La idea · 1:20 Las reglas del experimento · 2:06 Resultados · 2:50 Dónde se va el dinero · 3:32 Qué prueba y qué no · 4:16 Con tu capital · 4:41 Conclusión y cierre

Etiquetas: trading con datos, backtest, cruce de medias móviles, SMA 20 50, EUR/USD, forex, estrategia de trading, costos de trading, Sharpe ratio, ATLAS Lab, comprar y esperar, línea base

## Rúbrica (autoevaluación, 1–5)
| Criterio | Short | Largo |
|---|---|---|
| hook_0_3s | 4 | 4 |
| ritmo | 4 | 4 |
| promesa_cumplida | 5 | 5 |
| potencial_loop | 5 | 3 |
| claridad_no_traders | 4 | 4 |
| honestidad_atlas | 5 | 5 |
| audio | 4 | 3 |
| cta | 4 | 4 |
| **Promedio** | **4.38** | **4.00** |

Notas: el gancho es un par de números en tensión (+7.9% y $1,273), no un resultado extremo; por eso 4 y no 5. El Short cumple hook ≥ 4 y honestidad 5.

## Otros temas de este experimento
Cada tema = video largo + Short, con su propia ficha del experimento. Todos en estado BORRADOR — pendiente de aprobación.
- Tema 1: este archivo — Línea base SMA 20/50
- Tema 2: [exp-000-t2-porcentaje-aciertos.md](exp-000-t2-porcentaje-aciertos.md) — el porcentaje de aciertos no dice nada
- Tema 3: [exp-000-t3-camino-de-10000.md](exp-000-t3-camino-de-10000.md) — el camino de 10,000 dólares (12,461 y luego 10,789)

# Experimento #64 — VRP: prima de riesgo de volatilidad

Estado del guion: **BORRADOR — pendiente de aprobación**
Estado del experimento: **no concluyente** (la prima existe en bruto, pero es inestable entre periodos, no tiene costos de opciones ni prueba fuera de muestra y su cola es extrema)
Serie: F (anomalías y estacionalidad). Continúa en #69 (VRP protegido) y #70 (gestión de riesgo).
Datos usados: `experiments.json` (v=64: verdict, analysis, notes, kpis, metrics, params_view, capital) · `exp_details.json` (extra-v64: algo, code, filters) · `series/extra-v64.json` ([0] VRP vendiendo varianza al 15% de volatilidad, [1] S&P 500 comprar y esperar) · tabla «Con tu capital» (docs/youtube, archivo de capital, fila #64; el $10k se calcula con la misma regla de la tarjeta del sitio).

## Títulos
1. Gana el 82% de los días: la estrategia que esconde un riesgo
2. Vender seguros al mercado: Sharpe 1.56 y una cola extrema
3. VRP, la prima de volatilidad: probada con datos de 2012 a 2024

## Miniatura
Fondo `#09090b`. Una curva verde que sube muy despacio y, de golpe, cae en picado en rojo `#e11d2a`. Texto en blanco a la izquierda: «VENDES SEGUROS». Logo ATLAS esquina inferior derecha.

---

## VIDEO LARGO (≈ 6½ min)

**[0:00 — Gancho]** (pantalla: «82%» verde enorme; la curva sube y, de repente, una barra roja la rompe con «12-mar-2020»)
BOCETO: contador de días verdes y, al final, un solo día rojo que ocupa media pantalla; golpe de bajo y sacudida en ese día.
> Esta estrategia gana el 82% de los días. Y aun así, un solo día, el 12 de marzo de 2020, fue 28.6 veces más grande que un día normal de variación para ella. Hoy te cuento qué es la prima de riesgo de volatilidad, por qué en el papel se ve tan bien y por qué no es ganancia gratis.

**[0:25 — Volatilidad y VIX]** (pantalla: una línea de precio con oleaje; termómetro del VIX junto a ella)
BOCETO: línea del VIX por encima de una línea más baja de «lo que realmente se movió»; la franja entre las dos se pinta verde: «la prima».
> Primero, dos palabras. Volatilidad es cuánto se mueve el precio de algo. Y el VIX es un indicador que resume cuánto espera el mercado de opciones que se mueva el S&P 500; por eso se le llama el termómetro del miedo. Cuando hay pánico, sube. Cuando todo está tranquilo, baja. Ahora viene lo interesante: la mayoría de los días el mercado se mueve menos de lo que el VIX anunciaba. Esa diferencia entre lo que se anuncia y lo que realmente se mueve es la prima de riesgo de volatilidad, o VRP.

**[1:05 — Vender volatilidad es vender seguros]** (pantalla: dibujo de un paraguas y una póliza; pocas monedas verdes y, de golpe, una gran cuenta roja)
BOCETO: ilustración de una aseguradora: lluvia de monedas verdes pequeñas cayendo cada día y, de golpe, una factura roja enorme; texto «prima pequeña · siniestro enorme».
> Vender esa prima es como ser una aseguradora. Los demás pagan por protegerse contra caídas; tú cobras esa prima pequeña la mayoría de los días y, cuando llega el siniestro, pagas. Muchos días ganas poquito; unos pocos días pierdes muchísimo. Por eso se dice que la prima es el pago por asumir riesgo de cola: el riesgo de eventos extremos y raros.

**[1:30 — Cómo lo calculé]** (pantalla: fórmula animada y checklist de filtros)
BOCETO: «cobra (VIX de ayer / 100)² / 252» → «paga el movimiento de hoy al cuadrado». Checklist: ✓ Señal de ayer · — Costos: no aplicado · — Fuera de muestra: no aplicado · — Deflated Sharpe: no aplicado.
> Cada día, la estrategia cobra la varianza que anunciaba el VIX de ayer y paga la varianza que realmente se movió hoy. La varianza es la volatilidad elevada al cuadrado. Uso el S&P 500 y el VIX, de 2012 a 2024, y la señal siempre es la de ayer. Es una aproximación: no uso opciones reales. Eso significa que no hay costos de opciones, ni prueba fuera de muestra, ni Deflated Sharpe, que ajusta por cuántas versiones probaste. Y para dibujar la curva escalo el resultado a una volatilidad de 15%, usando la desviación de toda la muestra.

**[2:10 — Resultado 1: la prima existe]** (pantalla: Sharpe 1.56 y 82% de los días en verde)
BOCETO: contador del Sharpe subiendo hasta 1.56 y un calendario donde el 82% de las casillas se pintan de verde; texto «bruto».
> Primer resultado: en bruto, el Sharpe es 1.56. El Sharpe mide cuánto rindes por cada unidad de riesgo. Y la prima fue positiva el 82% de los días. Hasta aquí parece un regalo: ganas la mayoría de los días y con un Sharpe alto.

**[2:30 — Resultado 2: no es estable]** (pantalla: tres barras por periodo)
BOCETO: barras 2012–2016 = 4.8, 2017–2020 = 0.4, 2021–2024 = 4.3; la barra del medio parpadea en rojo.
> Pero mira el Sharpe por periodo: 4.8 entre 2012 y 2016, apenas 0.4 entre 2017 y 2020, y 4.3 entre 2021 y 2024. Una ventaja estable no debería cambiar tanto de un periodo a otro. Ese salto de 4.8 a 0.4 y de nuevo a 4.3 dice que el promedio de 1.56 esconde épocas muy distintas, y que en el periodo que incluye 2020 la prima casi no se tradujo en ganancia.

**[3:00 — Resultado 3: la cola]** (pantalla: histograma con una cola izquierda larga; marcador en −28.6σ)
BOCETO: campana con muchas barras verdes pequeñas y una barra roja aislada lejísimos a la izquierda; textos «asimetría −16.4», «peor día −28.6σ», «caída máxima −91σ».
> La asimetría, que mide qué tan larga es la cola de pérdidas, es −16.4: muchas ganancias pequeñas y, de vez en cuando, una pérdida enorme. El peor día fue −28.6 sigmas. Una sigma es el tamaño de un día normal de variación de esta estrategia, así que fue un día 28.6 veces ese tamaño: el 12 de marzo de 2020. Y la caída máxima llegó a −91 sigmas. Un solo día así puede borrar años de ganancia.

**[3:35 — El día que lo cambia todo]** (pantalla: la curva `series/extra-v64.json[0]` en cámara lenta; marca roja sobre el 12-mar-2020)
BOCETO: zoom a la curva: años de escalones verdes pequeños y, al final, un escalón rojo gigante; el rótulo "−91σ: caída máxima" aparece al pie.
> Piensa en lo que significa ese día. Durante años, la estrategia va sumando ganancias pequeñas, una tras otra, y la curva sube con una regularidad que seduce. Entonces llega un día como el 12 de marzo de 2020, en pleno desplome por el COVID, y la pérdida de ese solo día es 28.6 veces el tamaño de un día normal para ella. La caída máxima, de −91 sigmas, resume cuánto puede perderse desde un máximo. Quien vende seguros sin cobertura no sabe cuándo llegará el siniestro, y cuando llega, no hay forma de reducir la pérdida a tiempo. Esa es la diferencia entre una ganancia estable y una ganancia que parece estable.

**[4:20 — ¿Le gana al S&P 500?]** (pantalla: Sharpe 1.56 junto a Sharpe 0.80 con el rótulo «no comparable»)
BOCETO: dos medidores, 1.56 y 0.80, unidos por un signo «≠» y el rótulo «no comparable»; texto «vender varianza ≠ retorno de un índice».
> Comprar y esperar el S&P 500 da un Sharpe de 0.80. Podrías querer comparar los dos números, pero no son comparables: uno es el resultado de vender varianza, sin capital ni costos, y el otro es el retorno de un índice. Por eso el experimento no declara un ganador en esa comparación.

**[4:40 — Con tu capital]** (pantalla: tarjeta «Con tu capital» con el aviso ámbar; la curva `series/extra-v64.json[0]` sube casi vertical)
BOCETO: sello rojo «BRUTO · SIN OPCIONES REALES» sobre la tarjeta; al pasar a $100,000 el número parpadea y se tacha con «no es una expectativa».
> Con $10,000, la curva de esta aproximación terminó en +$162,483; con $100,000, en +$1,624,827, contra +$347,885 de comprar y esperar el S&P 500. Lee la letra pequeña: es una curva bruta, sin costos de opciones, y escalada con la desviación de toda la muestra, algo que no tendrías en tiempo real. La peor caída desde un máximo fue de −$6,186 con 10,000 y −$61,861 con 100,000, un −61.9%. Ese número de millones no es una expectativa: es lo que sale de una aproximación sin fricciones.

**[5:15 — Lo que falta probar]** (pantalla: tres piezas vacías de un rompecabezas: «opciones reales», «periodo aparte», «ajuste por intentos»)
BOCETO: rompecabezas de tres piezas vacías («opciones reales», «periodo aparte», «ajuste por intentos») que se van marcando; texto «sin esto, 1.56 es provisional».
> Antes de concluir, lo que no hice. No usé precios de opciones reales, así que ignoro los costos de comprarlas y venderlas. No probé la estrategia en un periodo aparte que no hubiera visto. Y no apliqué ningún ajuste por haber probado varias versiones. Cualquiera de esas tres pruebas podría bajar el Sharpe de 1.56. Lo que sí dice este experimento es que la prima existe en bruto, que su cola es extrema, y que cualquier versión seria tendría que limitar ese riesgo de cola.

**[5:50 — Conclusión]**
BOCETO: sello ámbar «NO CONCLUYENTE» sobre la curva; texto «el pago por asumir riesgo de cola»; cierre con el logo.
> Veredicto: no concluyente. La prima existe, pero no es ganancia gratis: es el pago por asumir un riesgo de cola, por asegurar a otros contra caídas. Los fondos que lo hacen usan opciones y coberturas de cola estrictas, porque sin gestionar el riesgo, un solo día puede borrar años de ganancia. En los próximos videos pruebo la versión con cobertura y la versión con gestión de riesgo. Todos los datos en atlas-lab-one.vercel.app, experimento 64. El trading no se promete: se prueba. Contenido educativo, no es asesoría financiera.

---

## SHORT (9:16, ≈ 45 s)

**[0-3 s]** (boceto: «82%» verde gigante; curva que sube y una barra roja que la parte; b-roll de paraguas bajo tormenta, kb=in; golpe de bajo + sacudida)
> Gana el 82% de los días. Un día puede borrar años.

**[3-14 s]** (boceto: dibujo de póliza de seguro; el VIX como termómetro; whoosh)
> Se llama vender volatilidad: es vender seguros contra caídas del mercado. Cobras una prima pequeña la mayoría de los días, y esa prima se mide con el VIX, el termómetro del miedo.

**[14-24 s]** (boceto: tres barras 4.8 / 0.4 / 4.3, la del medio roja; tick por barra)
> En bruto, su Sharpe es 1.56. Pero cambia según el periodo: 4.8 en 2012–2016, 0.4 en 2017–2020 y 4.3 en 2021–2024. Y no hay costos de opciones ni prueba fuera de muestra.

**[24-35 s]** (boceto: histograma con una cola roja aislada en −28.6σ; fecha «12-mar-2020»; b-roll de pantalla de bolsa en rojo, kb=out)
> Su peor día fue el 12 de marzo de 2020: 28.6 sigmas, un día 28.6 veces más grande que uno normal. Y su asimetría es −16.4: muchas ganancias pequeñas y una pérdida enorme.

**[35-45 s]** (boceto: texto «¿y el día que pierde?»; logo)
> No es ganancia gratis: es el pago por asumir ese riesgo. Video completo en el canal. Gana el 82% de los días… ¿qué pasa el día que no?

Gancho alterno A: «El VIX es el precio del miedo, y esta estrategia lo vende.» · B: «Sharpe 1.56 en el papel. Un día de −28.6σ en la realidad.»

## Descripción (YouTube)
La prima de riesgo de volatilidad (VRP) en el S&P 500, 2012–2024: se cobra la varianza que anuncia el VIX y se paga la que realmente se mueve. En bruto da Sharpe 1.56 y prima positiva el 82% de los días, pero el Sharpe va de 4.8 a 0.4 y 4.3 según el periodo y el peor día fue de −28.6σ. No concluyente: sin costos de opciones ni prueba fuera de muestra.

Datos completos: https://atlas-lab-one.vercel.app (experimento #64)

Contenido educativo. No es asesoría financiera ni recomendación de inversión.

Capítulos: 0:00 Gancho · 0:25 Volatilidad y VIX · 1:05 Vender volatilidad es vender seguros · 1:30 Cómo lo calculé · 2:10 Resultado 1: la prima existe · 2:30 Resultado 2: no es estable · 3:00 Resultado 3: la cola · 3:35 El día que lo cambia todo · 4:20 ¿Le gana al S&P 500? · 4:40 Con tu capital · 5:15 Lo que falta probar · 5:50 Conclusión

Etiquetas: prima de riesgo de volatilidad, VRP, VIX, vender volatilidad, riesgo de cola, S&P 500, Sharpe ratio, asimetría, backtest, trading con datos, ATLAS Lab, opciones

## Rúbrica (autoevaluación)
| Criterio | Short | Largo |
|---|---|---|
| hook_0_3s | 5 | 5 |
| ritmo | 4 | 4 |
| promesa_cumplida | 5 | 4 |
| potencial_loop | 5 | 4 |
| claridad_no_traders | 4 | 4 |
| honestidad_atlas | 5 | 5 |
| audio | 4 | 4 |
| cta | 4 | 4 |
| **Promedio** | **4.50** | **4.25** |

## Otros temas de este experimento
- Tema 1 de 4: `exp-064-vrp-prima-volatilidad.md` — Gana el 82% de los días: la estrategia que esconde un riesgo
- Tema 2 de 4: `exp-064-t2-que-es-el-vix-y-la-prima.md` — ¿Qué es el VIX? El mercado se movió menos de lo que anunciaba el 82% de los días
- Tema 3 de 4: `exp-064-t3-sharpe-48-04-43.md` — Sharpe 4.8, luego 0.4, luego 4.3: la ventaja que cambia de un periodo a otro
- Tema 4 de 4: `exp-064-t4-la-cola-y-el-millon.md` — +$1,624,827 con $100,000 y una caída de −61.9%: lo que no cuenta esa curva

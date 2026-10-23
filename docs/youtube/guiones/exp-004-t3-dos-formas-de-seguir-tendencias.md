# Experimento #4 — Tema 3: dos formas de seguir tendencias (822 operaciones contra 75)

Tema 3 de 4 del experimento #4
Qué aporta frente a los otros temas: es el tema del concepto. Explica qué es seguir tendencias con dos diseños sobre el mismo euro y los mismos seis años: el cruce de medias de una hora del #0 (822 operaciones, +7.9%) y el momentum de 120 días del #4 (75 operaciones, −4.3%). Su hallazgo propio: bajar los costos de $1,273 a $100 no creó ventaja. El tema 2 es el año por año y el tema 4 compara un mercado con quince.
Estado del guion: **BORRADOR — pendiente de aprobación**
Estado del experimento: **murió** · Serie B (Estrategias famosas, puestas a prueba), por afinidad · 1 largo + 1 Short
Datos usados: `experiments.json` (v=4 y v=0: kpis, metrics, params), `exp_details.json` (algo y filters del v=4; filters del v=0) y tabla «Con tu capital» de docs/youtube (filas 0 y 4). Las cifras con 10,000 dólares son el saldo final de las curvas de series o la tabla de 100,000 dividida entre 10.
Producción: b-roll real con overlay oscuro 0.6, Ken Burns alterno, subtítulos karaoke en MAYÚSCULAS con cifras en rojo, golpe de bajo solo en 1–2 momentos. Rojo `#e11d2a`, verde `#22c55e`, fondo `#09090b`.

## Títulos (3 opciones)
1. Dos formas de seguir tendencias en el euro: 822 operaciones (+7.9%) contra 75 (−4.3%)
2. Cruce de medias contra momentum de 120 días: mismo mercado, mismos seis años
3. ¿Operar menos arregla una estrategia de tendencia? Costos de $1,273 contra $100

## Miniatura
Fondo negro `#09090b`. Dos columnas: izquierda «822» en blanco y «+7.9%» en verde; derecha «75» en blanco y «−4.3%» en rojo; entre ambas, «VS» pequeño. Texto superior: «MISMO EURO» (2 palabras). Logo ATLAS abajo a la derecha.

---

## VIDEO LARGO (16:9, ≈ 4:04 min)

**[0:00 — Gancho]** (pantalla: dos columnas enfrentadas)
Dos formas de seguir tendencias en el euro. Una opera 822 veces y gana más 7.9%. La otra opera 75 veces y pierde menos 4.3%. Mismo mercado, mismos seis años.
> Boceto: dos columnas con contadores 822 y 75; las cifras verde y roja entran con sacudida. Ken Burns «in».

**[0:14 — Qué experimento es]** (pantalla: rótulo con el número y el nombre)
Este es el experimento #4 de ATLAS Lab: Momentum de serie temporal diario. Todos los resultados están en la página del experimento. Hoy lo comparo con el experimento 0, la línea base.
> Boceto: rótulos «#4 Momentum diario» y «#0 Línea base SMA 20/50», y la URL pequeña. kb=out.

**[0:28 — Seguir tendencias]** (pantalla: precio subiendo y flecha)
Seguir tendencias significa apostar a que lo que sube seguirá subiendo y lo que baja seguirá bajando, durante un tiempo. No intenta adivinar los giros: espera a que el movimiento esté en marcha. Hay muchas formas de definir que hay una tendencia. Aquí comparo dos, sobre el euro-dólar de 2019 a 2024, con costos reales y comprando o vendiendo en corto.
> Boceto: línea de precio con una tendencia marcada por una flecha; dos etiquetas «forma 1» y «forma 2». kb=in.

**[0:53 — Forma 1: el cruce de medias]** (pantalla: dos medias móviles)
La primera es el cruce de medias del experimento 0. Usa velas de una hora y dos medias móviles, la de 20 velas y la de 50. Cuando la rápida cruza por encima de la lenta, compra; cuando cruza por debajo, vende en corto. Reacciona rápido, así que opera mucho: 822 operaciones y 1,273 dólares en costos.
> Boceto: velas de 1 hora con SMA 20 y SMA 50; flechas en los cruces; contador 822 y monedas hasta $1,273. kb=out.

**[1:18 — Forma 2: el momentum de 120 días]** (pantalla: ventana de 120 días)
La segunda es el momentum del experimento 4. Usa velas diarias y una sola pregunta: ¿el euro está más alto o más bajo que hace 120 días? Si está más alto, compra; si más bajo, vende en corto. Reacciona despacio, así que opera poco: 75 operaciones y unos 100 dólares en costos.
> Boceto: gráfico diario con la ventana de 120 días resaltada; contador 75 y monedas hasta $100. kb=in.

**[1:40 — Lado a lado]** (pantalla: tabla comparativa)
Los resultados. La rápida: más 7.9%, Sharpe 0.25, 37.0% de operaciones ganadoras y factor de beneficio de 1.04. La lenta: menos 4.3%, Sharpe menos 0.08, 25.7% de ganadoras y factor de 0.79. Comprar y esperar, en las dos, menos 9.7%. Las caídas máximas son parecidas: menos 14.8% y menos 13.9%.
| | Cruce SMA 20/50 (#0) | Momentum 120 días (#4) |
|---|---|---|
| Velas | 1 hora | Diarias |
| Operaciones | 822 | 75 |
| Costos | $1,273 | $100 |
| Ganadoras | 37.0% | 25.7% |
| Factor de beneficio | 1.04 | 0.79 |
| Sharpe | 0.25 | −0.08 |
| Retorno | +7.9% | −4.3% |
| Caída máxima | −14.8% | −13.9% |
| Comprar y esperar | −9.7% | −9.7% |
> Boceto: tabla animada con las celdas de la mejor en verde y las de la peor en rojo; la última fila en gris. kb=out.

**[2:08 — Lo que enseña: menos costos no es más ventaja]** (pantalla: monedas y curva)
El experimento 4 sí resolvió el problema de los costos: de 1,273 dólares a unos 100. Y aun así no ganó. Eso es lo importante: operar menos reduce lo que pagas, pero no crea una señal. Con la ventana de 120 días, el p de azar fue 0.585 y el PSR, 0.473; lejos de lo que se exige, menos de 0.05 y más de 0.95. La señal lenta, en este euro, no se distingue de la suerte.
> Boceto: dos montones de monedas, uno enorme ($1,273) y otro pequeño ($100); sobre el segundo, sello «costo resuelto, ventaja no»; moneda con «p = 0.585». kb=in.

**[2:43 — Lo que no podemos concluir]** (pantalla: aviso ámbar)
Y cuidado con la conclusión contraria. No digo que la rápida sea mejor. El experimento 0 es parcial: gana poco, su Sharpe es 0.25 y no tiene prueba fuera de muestra ni Deflated Sharpe, ni la prueba de azar del experimento 4. Son dos muestras de un solo mercado. Lo único firme: ninguna de las dos tiene una ventaja demostrada.
> Boceto: cartel ámbar con tres puntos: «una muestra por diseño», «sin prueba de azar en el #0», «sin fuera de muestra en el #0». kb=out.

**[3:09 — Con tu capital]** (pantalla: tarjeta «Con tu capital»)
Con 10,000 dólares, el cruce de medias terminó en 10,789, el momentum de 120 días en 9,575, y comprar y esperar en 9,033. Con 100,000, la tabla de ATLAS da más 7,888, menos 4,252 y menos 9,673 respectivamente.
> Boceto: tarjeta de capital con tres cifras (verde, rojo, gris) y selector $10,000 / $100,000.

**[3:30 — Ficha del experimento #4]** (pantalla: tarjeta con la URL)
Ficha del experimento 4. Estado: murió. Cifra clave: menos 4.3% contra menos 9.7% de comprar y esperar, con solo 75 operaciones y 100 dólares de costos. Filtros que decidieron: prueba de azar con p de 0.585 y PSR de 0.473. Lección: bajar los costos no crea una ventaja. Revísalo completo en atlas-lab-one.vercel.app/e/4.
> Boceto: tarjeta oscura con «#4 · MURIÓ», cifras clave y «atlas-lab-one.vercel.app/e/4» en grande; logo.

**[3:56 — Cierre]**
Todos los datos en atlas-lab-one.vercel.app, experimento 4. Contenido educativo, no es asesoría financiera. El trading no se promete: se prueba.
> Boceto: pantalla oscura con la frase de marca.

---

## SHORT (9:16, ≈ 45 s)

**[0-3 s]** «Dos formas de seguir tendencias en el euro: 822 operaciones o 75.»
> Boceto: contadores 822 y 75 enfrentados; b-roll de gráfico del euro, Ken Burns «in», overlay 0.6.

**[3-14 s]** «Una usa dos medias móviles en velas de una hora. La otra mira si el euro está más alto que hace 120 días. Mismos seis años, costos reales.»
> Boceto: dos medias cruzándose y, al lado, ventana de 120 días; karaoke con «120 DÍAS» en rojo; Ken Burns «out».

**[14-27 s]** «La rápida ganó +7.9% y pagó 1,273 dólares en costos. La lenta perdió −4.3% y pagó solo unos 100. Comprar y esperar, en las dos: −9.7%.»
> Boceto: barras +7.9% verde y −4.3% roja; monedas de $1,273 y $100; whoosh y flash blanco.

**[27-38 s]** «Bajar los costos no creó ventaja: la lenta tiene un p de azar de 0.585 y un PSR de 0.473. Y la rápida no tiene esas pruebas, así que tampoco está validada.»
> Boceto: moneda con «p = 0.585»; cartel ámbar «sin prueba de azar en el #0»; Ken Burns «in».

**[38-45 s]** «Operar menos no es tener ventaja. Experimento cuatro completo en el enlace. El video completo está en el canal. No es asesoría financiera.»
> Boceto: vuelven 822 y 75 (loop con el gancho); texto «Experimento #4 completo en el enlace» y logo.

---

## Descripción de YouTube (video largo)
https://atlas-lab-one.vercel.app/e/4?utm_source=youtube&utm_medium=video&utm_campaign=exp004-t3
Ficha del experimento #4 (Momentum de serie temporal diario): estado murió · −4.3% frente a −9.7% de comprar y esperar · Sharpe −0.08 · 75 operaciones y $100 en costos · p de azar 0.585.
Comparo dos maneras de seguir tendencias en el EUR/USD (2019-2024): el cruce de medias SMA 20/50 de una hora (experimento #0: 822 operaciones, +7.9%) y el momentum de 120 días (75 operaciones, −4.3%).
Contenido educativo. No es asesoría financiera ni recomendación de inversión.

## Descripción del Short
https://atlas-lab-one.vercel.app/e/4?utm_source=youtube&utm_medium=short&utm_campaign=exp004-t3
Experimento #4 · murió · 75 operaciones y −4.3% frente a 822 operaciones y +7.9% del #0. No es asesoría financiera.

Capítulos: 0:00 Gancho · 0:14 Qué experimento es · 0:28 Seguir tendencias · 0:53 Forma 1: el cruce de medias · 1:18 Forma 2: el momentum de 120 días · 1:40 Lado a lado · 2:08 Lo que enseña: menos costos no es más ventaja · 2:43 Lo que no podemos concluir · 3:09 Con tu capital · 3:30 Ficha del experimento #4 · 3:56 Cierre

Etiquetas: seguir tendencias, trend following, momentum trading, cruce de medias, SMA 20 50, EUR/USD, backtest, costos de trading, estrategia de trading, ATLAS Lab, trading con datos, comprar y esperar

## Rúbrica (autoevaluación, 1–5)
| Criterio | Short | Largo |
|---|---|---|
| hook_0_3s | 4 | 4 |
| ritmo | 4 | 4 |
| promesa_cumplida | 5 | 5 |
| potencial_loop | 4 | 4 |
| claridad_no_traders | 4 | 4 |
| honestidad_atlas | 5 | 5 |
| audio | 4 | 3 |
| cta | 4 | 4 |
| **Promedio** | **4.25** | **4.13** |

Notas: la comparación es entre dos experimentos con la misma ventana (EUR/USD, 2019-2024) y el mismo mercado, pero con distinta frecuencia y regla; el guion subraya que el #0 no tiene las pruebas del #4. El Short cumple hook ≥ 4 y honestidad 5.

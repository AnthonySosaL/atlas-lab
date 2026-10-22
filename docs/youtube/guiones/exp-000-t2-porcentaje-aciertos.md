# Experimento #0 — Tema 2: el porcentaje de aciertos no dice nada

Tema 2 de 3 del experimento #0 (usa el #0 como ancla y compara con #1, #2, #3, #4, #6, #7 y #8)
Qué aporta frente a los otros temas: el tema 1 es la ficha de la línea base (+7.9% y $1,273 en costos); este es una lección de método con 8 experimentos: el porcentaje de aciertos no predice nada, y lo que ordena los resultados es el factor de beneficio y el número de operaciones.
Estado del guion: **BORRADOR — pendiente de aprobación**
Estado del experimento: **parcial** (en el sitio: neutral) · Serie D (vara mínima del machine learning) · 1 largo + 1 Short
Datos usados: `experiments.json` (v=0, 1, 2, 3, 4, 6, 7, 8: metrics y kpis: operaciones ganadoras, factor de beneficio, retorno total, operaciones) y la tabla «Con tu capital» de docs/youtube (filas 0, 1, 7). El #5 no reporta porcentaje de aciertos y no entra. Las cifras con 10,000 dólares son las de la tabla de 100,000 divididas entre 10.
Producción: b-roll real con overlay oscuro 0.6, Ken Burns alterno, subtítulos karaoke en MAYÚSCULAS con cifras en rojo, golpe de bajo solo en 1–2 momentos. Rojo `#e11d2a`, verde `#22c55e`, fondo `#09090b`.

## Títulos (3 opciones)
1. Acierta el 50.3% y pierde −22.5%: el porcentaje de aciertos no dice nada
2. 8 estrategias, 8 porcentajes de aciertos: solo una terminó en positivo
3. ¿Acertar mucho o ganar más de lo que pierdes? Datos de 8 experimentos reales

## Miniatura
Fondo negro `#09090b`. A la izquierda «50.3%» en blanco y debajo «−22.5%» en rojo; a la derecha «37.0%» en blanco y debajo «+7.9%» en verde; un signo «≠» grande en el centro. Logo ATLAS arriba a la derecha.

---

## VIDEO LARGO (16:9, ≈ 4:22 min)

**[0:00 — Gancho]** (pantalla: dos parejas de cifras enfrentadas)
Una estrategia acierta el 50.3% de las veces y pierde −22.5%. Otra acierta solo el 37.0% y gana +7.9%. El porcentaje de aciertos no basta para saber si una estrategia sirve.
> Boceto: «50.3% → −22.5%» (rojo) y «37.0% → +7.9%» (verde) entran desde lados opuestos; golpe de bajo en el cruce. Ken Burns «in».

**[0:16 — Qué experimento es]** (pantalla: rótulo con el número y el nombre)
Este es el experimento #0 de ATLAS Lab: Línea base SMA 20/50. Todos los resultados están en la página del experimento. Hoy lo uso como ancla para compararlo con otros siete.
> Boceto: rótulo grande «EXPERIMENTO #0 · Línea base SMA 20/50» sobre las velas del euro; abajo, la URL pequeña. kb=out.

**[0:29 — Qué es el porcentaje de aciertos]** (pantalla: diez operaciones, siete en verde)
El porcentaje de aciertos es la parte de las operaciones que terminó en ganancia. Se usa mucho porque suena a examen: si aciertas 7 de cada 10, parece que eres bueno. Pero ese número ignora dos cosas. Una, cuánto ganas cuando aciertas frente a cuánto pierdes cuando fallas. Otra, cuánto cuesta cada operación. Una estrategia puede acertar casi siempre y perder dinero, o fallar casi siempre y ganar.
> Boceto: fila de 10 círculos, siete verdes y tres rojos, y debajo dos barras de tamaño distinto (lo ganado y lo perdido) que invierten el resultado. kb=in.

**[0:56 — El factor de beneficio]** (pantalla: dos montones de dinero)
La medida que sí junta esas dos cosas es el factor de beneficio: los dólares ganados divididos entre los dólares perdidos. Si es mayor que 1, ganas más de lo que pierdes; si es menor que 1, pierdes más de lo que ganas. En la línea base es 1.04. En el resto de experimentos que miden esto, es menor que 1.
> Boceto: balanza con un montón verde y uno rojo; el número 1.04 en verde sobre «#0». kb=out.

**[1:22 — Los 8 experimentos]** (pantalla: tabla animada, una fila por experimento)
Aquí están los ocho experimentos que reportan su porcentaje de aciertos, ordenados de menor a mayor retorno final. La que más acierta, el 50.3%, es la reversión del experimento 7, y es la tercera que más pierde. La que menos acierta, el 25.7%, es el momentum del experimento 4, y pierde poco. La única que termina en positivo acierta el 37.0%.
| Experimento | Aciertos | Factor de beneficio | Retorno | Operaciones |
|---|---|---|---|---|
| #1 XGBoost, triple barrera | 46.4% | 0.72 | −36.2% | 2,040 |
| #2 XGBoost + convicción | 45.8% | 0.68 | −33.9% | 1,822 |
| #7 Reversión de sesión | 50.3% | 0.75 | −22.5% | 1,553 |
| #6 ORB Londres-Nueva York | 49.9% | 0.87 | −19.1% | 1,553 |
| #3 Meta-etiquetado SMA + XGBoost | 41.8% | 0.71 | −19.0% | 1,173 |
| #8 Meta-etiquetado de reversión | 48.1% | 0.56 | −5.0% | 189 |
| #4 Momentum diario | 25.7% | 0.79 | −4.3% | 75 |
| #0 Línea base SMA 20/50 | 37.0% | 1.04 | +7.9% | 822 |
> Boceto: la tabla se llena fila por fila; la columna «Aciertos» se resalta en azul y no sigue ningún orden; la columna «Retorno» baja de verde a rojo. Segundo gráfico: dispersión con el eje horizontal «aciertos» y el vertical «retorno»: los puntos forman una nube sin dirección. Nota al pie: «el #5 no reporta aciertos».

**[1:50 — Lo que sí ordena los resultados]** (pantalla: factor de beneficio contra operaciones)
Fíjate en dos patrones. Primero: el único factor de beneficio por encima de 1 es el del único experimento que gana. Segundo: el tamaño de la pérdida depende de cuántas operaciones hiciste. La reversión meta-etiquetada del experimento 8 tiene el peor factor de beneficio de todos, 0.56, pero solo hizo 189 operaciones y perdió −5.0%. El ORB del experimento 6 tiene un factor de 0.87, mejor, pero hizo 1,553 operaciones y perdió −19.1%. Cuando no hay ventaja, cada operación suma un peaje, y el daño crece con el número de operaciones.
> Boceto: dos barras comparadas: «#8: 0.56 · 189 operaciones · −5.0%» y «#6: 0.87 · 1,553 operaciones · −19.1%», con las monedas de costo cayendo en la segunda. kb=in.

**[2:31 — Por qué 37.0% puede ganar y 50.3% perder]** (pantalla: dos estilos de operar)
La línea base sigue tendencias: muchas operaciones pequeñas que fallan y pocas grandes que acaban pagando, por eso un 37.0% de aciertos le basta para un factor de 1.04. La reversión del experimento 7 hace lo contrario: acierta la mitad de las veces, pero cada acierto deja poco y cada fallo cuesta más, y además paga 1,553 comisiones. El porcentaje de aciertos describe el estilo de la estrategia, no su calidad.
> Boceto: izquierda, curva en escalera con pérdidas pequeñas y un salto grande («tendencia»); derecha, muchos escalones pequeños arriba y caídas más grandes («reversión»). kb=out.

**[3:01 — Ojo con el +7.9%]** (pantalla: aviso ámbar)
Y una advertencia sobre la única ganadora. El experimento 0 solo es parcial: su factor de beneficio de 1.04 es mínimo, su Sharpe es 0.25 y pagó 1,273 dólares en costos. Tampoco se le aplicó una prueba fuera de muestra ni el Deflated Sharpe. Es la vara mínima, no una estrategia validada.
> Boceto: tarjeta ámbar «PARCIAL» con los cuatro datos; los filtros «fuera de muestra» y «Deflated Sharpe» en gris «no aplicado».

**[3:24 — Con tu capital]** (pantalla: tarjeta «Con tu capital»)
Con 100,000 dólares, la línea base da más 7,888; la reversión del experimento 7, menos 22,339; y el XGBoost del experimento 1, menos 36,182. Con 10,000 dólares, más 789 contra menos 2,234 de la reversión. Ninguna cifra tiene que ver con cuántas veces aciertan.
> Boceto: tarjeta de capital con tres cifras (verde, rojo, rojo) y su porcentaje de aciertos en gris debajo de cada una; selector $10,000 / $100,000.

**[3:48 — Ficha del experimento #0]** (pantalla: tarjeta con la URL)
Ficha del experimento 0. Estado: parcial. Cifra clave: más 7.9% frente a menos 9.7% de comprar y esperar, con 37.0% de aciertos. Filtros que decidieron: costos y comprar y esperar pasaron; fuera de muestra y Deflated Sharpe no se aplicaron. Lección: mira el factor de beneficio y los costos, no el porcentaje de aciertos. Revísalo completo en atlas-lab-one.vercel.app/e/0.
> Boceto: tarjeta oscura con «#0 · PARCIAL», las cifras clave y «atlas-lab-one.vercel.app/e/0» en grande; logo.

**[4:14 — Cierre]**
Todos los datos en atlas-lab-one.vercel.app, experimento 0. Contenido educativo, no es asesoría financiera. El trading no se promete: se prueba.
> Boceto: pantalla oscura con la frase de marca y velas animadas con opacidad baja.

---

## SHORT (9:16, ≈ 46 s)

**[0-3 s]** «Acierta el 50.3% y pierde −22.5%.»
> Boceto: «50.3%» blanco y «−22.5%» rojo con sacudida; «37.0%» y «+7.9%» verde; b-roll de pantallas de trading, Ken Burns «in», overlay 0.6.

**[3-14 s]** «Otra acierta el 37.0% y gana. De ocho experimentos, los que más aciertan, 50.3% y 49.9%, pierden −22.5% y −19.1%. El que menos, 25.7%, pierde −4.3%.»
> Boceto: la tabla de 8 filas entra rápido; la columna de aciertos sin orden, la de retorno bajando; Ken Burns «out».

**[14-27 s]** «Lo que importa es el factor de beneficio: dólares ganados entre dólares perdidos. La única por encima de 1 es la línea base, con 1.04. Las demás van de 0.56 a 0.87.»
> Boceto: balanza con montones verde y rojo; el 1.04 se enciende en verde; whoosh y flash blanco al cambiar de escena.

**[27-38 s]** «Y cuenta cuántas operaciones haces: con 189 operaciones, pierdes −5.0%; con 1,553, pierdes −19.1%. Sin ventaja, cada operación es un peaje.»
> Boceto: dos barras, 189 y 1,553 operaciones, con monedas de costo cayendo en la segunda; Ken Burns «in».

**[38-46 s]** «El porcentaje de aciertos solo describe el estilo. Experimento cero completo en el enlace. El video completo está en el canal. No es asesoría financiera.»
> Boceto: vuelve «50.3% → −22.5%» y «37.0% → +7.9%» (loop con el gancho); texto «Experimento #0 completo en el enlace» y logo.

---

## Descripción de YouTube (video largo)
https://atlas-lab-one.vercel.app/e/0?utm_source=youtube&utm_medium=video&utm_campaign=exp000-t2
Ficha del experimento #0 (Línea base SMA 20/50): estado parcial · +7.9% frente a −9.7% de comprar y esperar · 37.0% de aciertos · factor de beneficio 1.04 · $1,273 en costos.
Comparé el porcentaje de aciertos y el factor de beneficio de 8 experimentos (EUR/USD, 2019-2024 y fuera de muestra 2023-2024): el que más acierta, 50.3%, pierde −22.5%; el único con factor de beneficio sobre 1 acierta el 37.0%.
Contenido educativo. No es asesoría financiera ni recomendación de inversión.

## Descripción del Short
https://atlas-lab-one.vercel.app/e/0?utm_source=youtube&utm_medium=short&utm_campaign=exp000-t2
Experimento #0 · parcial · 37.0% de aciertos y +7.9% frente a 50.3% de aciertos y −22.5%. No es asesoría financiera.

Capítulos: 0:00 Gancho · 0:16 Qué experimento es · 0:29 Qué es el porcentaje de aciertos · 0:56 El factor de beneficio · 1:22 Los 8 experimentos · 1:50 Lo que sí ordena los resultados · 2:31 Por qué 37.0% puede ganar y 50.3% perder · 3:01 Ojo con el +7.9% · 3:24 Con tu capital · 3:48 Ficha del experimento #0 · 4:14 Cierre

Etiquetas: porcentaje de aciertos, win rate, factor de beneficio, profit factor, backtest, estrategia de trading, trading con datos, EUR/USD, comprar y esperar, Sharpe ratio, ATLAS Lab, costos de trading

## Rúbrica (autoevaluación, 1–5)
| Criterio | Short | Largo |
|---|---|---|
| hook_0_3s | 5 | 4 |
| ritmo | 4 | 4 |
| promesa_cumplida | 5 | 5 |
| potencial_loop | 5 | 4 |
| claridad_no_traders | 4 | 4 |
| honestidad_atlas | 5 | 5 |
| audio | 4 | 3 |
| cta | 4 | 4 |
| **Promedio** | **4.50** | **4.13** |

Notas: la tabla de 8 filas es densa; en pantalla se muestra fila por fila y el locutor solo cita tres. El Short cumple hook ≥ 4 y honestidad 5. El #5 queda fuera porque no reporta porcentaje de aciertos.

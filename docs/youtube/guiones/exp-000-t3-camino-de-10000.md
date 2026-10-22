# Experimento #0 — Tema 3: el camino de 10,000 dólares (12,461 y luego 10,789)

Tema 3 de 3 del experimento #0
Qué aporta frente a los otros temas: el tema 1 da el resultado final (+7.9%, $1,273 en costos) y el tema 2 compara porcentajes de aciertos; este cuenta el camino de la cuenta año por año contra comprar y esperar, con el máximo de 12,461 dólares y la caída posterior. Es el tema de «con tu capital» y de «el detalle sorprendente».
Estado del guion: **BORRADOR — pendiente de aprobación**
Estado del experimento: **parcial** (en el sitio: neutral) · Serie D (vara mínima del machine learning) · 1 largo + 1 Short
Datos usados: `experiments.json` (v=0: kpis, metrics, verdict), `series/20260607_144908_baseline-sma-20-50.json` (curva 1 = estrategia, curva 2 = comprar y esperar; de ahí salen el máximo, el mínimo y los retornos por año de calendario, calculados sobre el cierre de cada año) y la tabla «Con tu capital» de docs/youtube (fila 0).
Producción: b-roll real con overlay oscuro 0.6, Ken Burns alterno, subtítulos karaoke en MAYÚSCULAS con cifras en rojo, golpe de bajo solo en 1–2 momentos. Rojo `#e11d2a`, verde `#22c55e`, fondo `#09090b`.

## Títulos (3 opciones)
1. La cuenta llegó a 12,461 dólares y terminó en 10,789: el camino del cruce de medias
2. Una estrategia le ganó al mercado 5 de 6 años… y aun así perdió −12.4% en el último
3. Con 10,000 dólares en el cruce de medias SMA 20/50: año por año, 2019-2024

## Miniatura
Fondo negro `#09090b`. La curva real de la estrategia (verde) con un círculo en su pico y el texto «12,461» en blanco; una flecha roja hacia el final con «10,789». Arriba, «3 ENE 2024» en rojo. Logo ATLAS en la esquina inferior derecha.

---

## VIDEO LARGO (16:9, ≈ 4:45 min)

**[0:00 — Gancho]** (pantalla: «12,461» y «10,789»)
El 3 de enero de 2024, esta cuenta valía 12,461 dólares. Terminó el año en 10,789. Es el cruce de medias más simple del trading, probado seis años con costos reales.
> Boceto: la curva real de la serie 1 sube hasta el pico (contador hasta 12,461) y cae hasta 10,789; sacudida al empezar la caída. Ken Burns «in».

**[0:15 — Qué experimento es]** (pantalla: rótulo con el número y el nombre)
Este es el experimento #0 de ATLAS Lab: Línea base SMA 20/50. Todos los resultados están en la página del experimento. Aquí te cuento el camino que vivió la cuenta, no solo el final.
> Boceto: rótulo «EXPERIMENTO #0 · Línea base SMA 20/50» y URL pequeña abajo. kb=out.

**[0:29 — La regla en una línea]** (pantalla: dos medias móviles cruzándose)
La regla es sencilla. Una media móvil es el precio promedio de las últimas velas; aquí, una de 20 y otra de 50, sobre el euro-dólar en velas de una hora. Cuando la corta cruza por encima de la larga, compro; cuando cruza por debajo, vendo en corto. Siempre dentro del mercado. En seis años hizo 822 operaciones, y pagó 1,273 dólares en comisiones y deslizamiento.
> Boceto: velas con SMA 20 (verde) y SMA 50 (blanca); flechas «COMPRA» y «VENTA EN CORTO» en los cruces; contador de operaciones hasta 822. kb=in.

**[0:57 — El trayecto de la cuenta]** (pantalla: la curva con cuatro marcas)
Empiezas con 10,000 dólares. Los primeros meses van mal: el 2 de octubre de 2019, la cuenta baja a 9,612. Después llegan 2020 y años de ganancias, hasta el máximo del 3 de enero de 2024: 12,461 dólares. Luego cae hasta unos 10,620 a finales de noviembre de ese año, y termina en 10,789. La peor caída, de pico a valle, es de menos 14.8%.
> Boceto: curva real con cuatro marcadores que aparecen en orden: «9,612 · 2-oct-2019», «12,461 · 3-ene-2024», «caída −14.8%», «10,789 · final». Ken Burns «out».

**[1:29 — Año por año]** (pantalla: barras por año, estrategia contra comprar y esperar)
Año por año, la estrategia contra comprar y esperar: en 2019, menos 0.3% contra menos 2.2%; en 2020, más 11.3% contra más 9.0%; en 2021, más 0.7% contra menos 6.9%; en 2022, más 4.1% contra menos 5.8%; en 2023, más 5.9% contra más 3.1%. Cinco años seguidos le ganó al mercado. Y en 2024, menos 12.4% contra menos 6.2%: perdió el doble que el mercado.
| Año | Estrategia | Comprar y esperar |
|---|---|---|
| 2019 | −0.3% | −2.2% |
| 2020 | +11.3% | +9.0% |
| 2021 | +0.7% | −6.9% |
| 2022 | +4.1% | −5.8% |
| 2023 | +5.9% | +3.1% |
| 2024 | −12.4% | −6.2% |
> Boceto: pares de barras por año (verde estrategia, gris mercado) que crecen una a una; sello «5 de 6 años» y, al final, la barra de 2024 en rojo con sacudida. Nota al pie: «retornos calculados de la curva de la serie, sobre el cierre de cada año».

**[2:06 — Por qué 2024 se llevó una parte]** (pantalla: cruces seguidos sin tendencia)
Un cruce de medias gana cuando el precio avanza en una dirección durante semanas, y sufre cuando se mueve de lado: las medias se cruzan una y otra vez, y cada cruce es una operación con su costo. Esa es la lectura natural de un 2024 con menos 12.4%; el experimento no mide la tendencia año por año, así que es una interpretación, no una cifra. Lo que sí está medido: 37.0% de operaciones ganadoras y un factor de beneficio de 1.04, un margen muy fino.
> Boceto: velas laterales con muchas flechas de compra y venta alternándose y monedas de costo cayendo; texto «Interpretación, no dato» en gris. kb=in.

**[2:43 — El mercado también cayó]** (pantalla: curva de comprar y esperar)
Para ser justos, comprar y esperar lo pasó peor en profundidad: su máximo fue de 10,767 dólares el 6 de enero de 2021, y bajó hasta 8,323 el 28 de septiembre de 2022, una caída de menos 22.7%. Terminó en 9,033, que es el menos 9.7% del que hablamos. La estrategia cayó menos, pero su caída llegó justo al final del camino, cuando la gente suele mirar el resultado.
> Boceto: curva gris de comprar y esperar con su pico y su valle marcados; la curva verde de la estrategia encima; etiquetas «−22.7%» y «−14.8%». kb=out.

**[3:15 — ¿Aguantarías esto?]** (pantalla: cuenta de 12,461 a 10,789)
Esta es la pregunta práctica. Con 10,000 dólares, verías la cuenta en 12,461 y después aguantarías una caída de menos 14.8% sin saber si se detiene. Un Sharpe de 0.25, que es la ganancia por unidad de riesgo, no compensa mucho esa montaña rusa. Por eso es la vara mínima y no una estrategia para operar: parcial, sin prueba fuera de muestra y sin Deflated Sharpe.
> Boceto: tarjeta de capital con una cuenta que sube y baja; el Sharpe 0.25 en ámbar; sello «PARCIAL». kb=in.

**[3:44 — Con tu capital]** (pantalla: tarjeta «Con tu capital»)
Con 10,000 dólares, la estrategia termina en 10,789, es decir, más 789; comprar y esperar, en 9,033, menos 967. Con 100,000, la tabla de ATLAS da más 7,888 contra menos 9,668. Más 789 después de pasar por 12,461: eso es lo que dejó el camino.
> Boceto: tarjeta de capital con «Estrategia +$7,888» (verde) y «Comprar y esperar −$9,668» (rojo) sobre las dos curvas reales; selector $10,000 / $100,000.

**[4:09 — Ficha del experimento #0]** (pantalla: tarjeta con la URL)
Ficha del experimento 0. Estado: parcial. Cifra clave: más 7.9% contra menos 9.7% de comprar y esperar, con un máximo de 12,461 dólares por el camino. Filtros que decidieron: costos y comprar y esperar pasaron; fuera de muestra y Deflated Sharpe no se aplicaron. Lección: el resultado final no cuenta lo que se vive por el camino. Revísalo completo en atlas-lab-one.vercel.app/e/0.
> Boceto: tarjeta oscura con «#0 · PARCIAL», cifras clave y «atlas-lab-one.vercel.app/e/0» en grande; logo.

**[4:36 — Cierre]**
Todos los datos en atlas-lab-one.vercel.app, experimento 0. Contenido educativo, no es asesoría financiera. El trading no se promete: se prueba.
> Boceto: pantalla oscura con la frase de marca y velas animadas con opacidad baja.

---

## SHORT (9:16, ≈ 46 s)

**[0-3 s]** «Llegó a 12,461 dólares. Terminó el año en 10,789.»
> Boceto: contador 0→12,461 que se rompe en «10,789» rojo con sacudida; b-roll de gráfico de velas, Ken Burns «in», overlay 0.6.

**[3-14 s]** «Es un cruce de medias móviles sobre el euro-dólar, de 2019 a 2024, con costos reales. Su máximo fue el 3 de enero de 2024. En el año, perdió −12.4%.»
> Boceto: curva real con el pico marcado y la caída sombreada; karaoke con «3 DE ENERO» en rojo; Ken Burns «out».

**[14-27 s]** «Le ganó al mercado cinco años seguidos: en 2022, más 4.1% contra menos 5.8%. Pero en 2024, perdió −12.4% contra −6.2% de comprar y esperar.»
> Boceto: pares de barras por año; cinco verdes, la sexta en rojo; whoosh y flash blanco.

**[27-38 s]** «Su peor caída fue −14.8%, y su Sharpe, 0.25: una ventaja mínima. Total: más 7.9% contra menos 9.7%. Con 10,000 dólares, más 789.»
> Boceto: tarjeta de capital con +$789 verde; Sharpe 0.25 en ámbar; Ken Burns «in».

**[38-46 s]** «El resultado final no cuenta el camino. Experimento cero completo en el enlace. El video completo está en el canal. No es asesoría financiera.»
> Boceto: vuelve «12,461 → 10,789» (loop con el gancho); texto «Experimento #0 completo en el enlace» y logo.

---

## Descripción de YouTube (video largo)
https://atlas-lab-one.vercel.app/e/0?utm_source=youtube&utm_medium=video&utm_campaign=exp000-t3
Ficha del experimento #0 (Línea base SMA 20/50): estado parcial · +7.9% frente a −9.7% de comprar y esperar · Sharpe 0.25 · caída máxima −14.8% · $1,273 en costos.
El camino de 10,000 dólares en el cruce de medias SMA 20/50 sobre el EUR/USD (2019-2024): máximo de 12,461 el 3 de enero de 2024, final en 10,789 y comparación año por año con comprar y esperar.
Contenido educativo. No es asesoría financiera ni recomendación de inversión.

## Descripción del Short
https://atlas-lab-one.vercel.app/e/0?utm_source=youtube&utm_medium=short&utm_campaign=exp000-t3
Experimento #0 · parcial · máximo de 12,461 dólares y final en 10,789. No es asesoría financiera.

Capítulos: 0:00 Gancho · 0:15 Qué experimento es · 0:29 La regla en una línea · 0:57 El trayecto de la cuenta · 1:29 Año por año · 2:06 Por qué 2024 se llevó una parte · 2:43 El mercado también cayó · 3:15 ¿Aguantarías esto? · 3:44 Con tu capital · 4:09 Ficha del experimento #0 · 4:36 Cierre

Etiquetas: cruce de medias móviles, SMA 20 50, EUR/USD, backtest, drawdown, caída máxima, comprar y esperar, estrategia de trading, trading con datos, forex, Sharpe ratio, ATLAS Lab

## Rúbrica (autoevaluación, 1–5)
| Criterio | Short | Largo |
|---|---|---|
| hook_0_3s | 4 | 4 |
| ritmo | 4 | 4 |
| promesa_cumplida | 5 | 5 |
| potencial_loop | 5 | 4 |
| claridad_no_traders | 4 | 4 |
| honestidad_atlas | 5 | 5 |
| audio | 4 | 3 |
| cta | 4 | 4 |
| **Promedio** | **4.38** | **4.13** |

Notas: los retornos por año y el máximo se calculan de la curva de la serie; el guion lo dice en pantalla. La explicación de 2024 está marcada como interpretación. El Short cumple hook ≥ 4 y honestidad 5.

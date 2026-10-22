# Experimento #64 — VRP: prima de riesgo de volatilidad · Tema 4 de 4: la cola extrema y el número del millón

Estado del guion: **BORRADOR — pendiente de aprobación**
Tema 4 de 4 del experimento #64 · Qué aporta frente a los otros temas: es el tema del DINERO y de la letra pequeña. Explica qué es una sigma y qué es la asimetría (−16.4), cómo se fabrica la cifra de +$1,624,827 con $100,000, por qué esa curva no es una expectativa (−61.9% de caída máxima, sin opciones reales, escalada con toda la muestra) y cómo se gestiona la cola (#69 y #70). El tema 1 cuenta la historia del peor día; el tema 2 explica el VIX y la prima; el tema 3 trata de la inestabilidad entre periodos.
Estado del experimento: **no concluyente** (la prima existe en bruto, pero es inestable entre periodos, no tiene costos de opciones ni prueba fuera de muestra y su cola es extrema)
Serie: F (anomalías y estacionalidad) · Continúa en #69 (VRP protegido) y #70 (gestión de riesgo)
Datos usados: `experiments.json` (v=64: verdict, analysis, notes, kpis, metrics, params_view, capital; v=69 y v=70: verdict, kpis para el cierre) · `exp_details.json` (extra-v64: algo, code.snippet, filters) · `series/extra-v64.json` ([0] VRP vendiendo varianza al 15% de volatilidad, [1] S&P 500 comprar y esperar) · tabla «Con tu capital» (`docs/youtube/*-capital.md`, fila #64; el $10k se calcula con la misma regla de la tarjeta del sitio).

## Títulos
1. +$1,624,827 con $100,000 y una caída de −61.9%: lo que no cuenta esa curva
2. Asimetría −16.4: muchas ganancias pequeñas y una pérdida enorme
3. ¿Qué es una sigma? El día de −28.6σ (12 de marzo de 2020), explicado

## Miniatura
Fondo `#09090b`. Una curva verde `#22c55e` que sube casi en vertical y, a media subida, una muesca roja `#e11d2a` profunda. Texto grande blanco: «+$1,624,827». Debajo, en rojo: «−61.9%». Logo ATLAS esquina inferior derecha.

---

## VIDEO LARGO (≈ 5½ min)

**[0:00 — Gancho]** (pantalla: curva que sube y una muesca roja)
Con $100,000, esta curva termina en +$1,624,827. En el camino, llegó a caer −61.9%. Y ni siquiera es una expectativa.
> BOCETO: curva verde subiendo; contador «+$1,624,827»; una muesca roja y el contador «−61.9%»; golpe de bajo y sacudida en la muesca.

**[0:20 — Este experimento]** (pantalla: rótulo «Experimento #64 · VRP: prima de riesgo de volatilidad»)
Este es el experimento #64 de ATLAS Lab: la prima de riesgo de volatilidad, o VRP: vender la diferencia entre lo que anuncia el VIX y lo que se mueve el S&P 500. Todos los resultados están en la página del experimento. Hoy te cuento por qué esos números de dinero hay que leerlos con lupa.
> BOCETO: rótulo con «#64» y el nombre del experimento; logo ATLAS; whoosh suave.

**[0:45 — Qué es una sigma]** (pantalla: regla con marcas de tamaño)
Una sigma es el tamaño de un día normal de variación de esta estrategia. Si un día vale 1 sigma, es un día normal; si vale 28.6 sigmas, es un día 28.6 veces más grande. El peor día de la estrategia fue de −28.6 sigmas, el 12 de marzo de 2020.
> BOCETO: regla con «1σ = día normal» y una marca lejanísima «−28.6σ · 12-mar-2020»; la regla se estira fuera de pantalla.

**[1:20 — La forma del riesgo: asimetría]** (pantalla: histograma con una cola izquierda larga)
La asimetría mide qué tan larga es la cola de pérdidas. Aquí es de −16.4: muchas ganancias pequeñas y, de vez en cuando, una pérdida enorme. En un dibujo, muchas barras verdes pequeñas a la derecha y una sola barra roja aislada, muy lejos, a la izquierda.
> BOCETO: histograma con muchas barras verdes pequeñas y una barra roja aislada; textos «asimetría −16.4», «peor día −28.6σ».

**[1:55 — La caída máxima]** (pantalla: curva en cámara lenta con la muesca)
La caída máxima, la peor caída desde un pico, llegó a −91 sigmas. En dinero, sobre la curva de $100,000, fue de −$61,861, un −61.9%. Durante años la curva sube con una regularidad que seduce, y de pronto un solo episodio borra buena parte de lo ganado.
> BOCETO: zoom a la curva de `series/extra-v64.json[0]`: escalones verdes y un escalón rojo gigante; rótulo «−91σ: caída máxima».

**[2:35 — Cómo se fabrica el número del millón]** (pantalla: tres ingredientes)
Tres ingredientes explican la cifra de +$1,624,827. Primero, es bruta: no resta costos de opciones. Segundo, es una aproximación: se vende varianza con una fórmula, sin opciones reales. Tercero, la curva se escala a una volatilidad de 15% usando la desviación de toda la muestra, algo que no tendrías en tiempo real. Con esos tres ingredientes, el resultado no es una expectativa.
> BOCETO: tres tarjetas («bruta», «sin opciones reales», «escalada con toda la muestra») que se apilan sobre la curva; sello rojo «NO ES UNA EXPECTATIVA».

**[3:20 — Con tu capital]** (pantalla: tarjeta «Con tu capital»)
Con $10,000, la curva termina en +$162,483; con $100,000, en +$1,624,827. Comprar y esperar el S&P 500 con $100,000 da +$347,885. La peor caída desde un máximo: −$6,186 con $10,000 y −$61,861 con $100,000. Ese número de millones es lo que sale de una aproximación sin fricciones.
> BOCETO: tarjeta de capital con sello rojo «BRUTO · SIN OPCIONES REALES»; al pasar a $100,000 el número parpadea y se tacha con «no es una expectativa».

**[4:00 — Por qué importa la cola]** (pantalla: una cuenta que se vacía)
Quien vende seguros sin cobertura no sabe cuándo llegará el siniestro. Un solo día como el 12 de marzo de 2020 puede borrar años de ganancia. Por eso los fondos que se dedican a esto usan opciones y coberturas de cola estrictas.
> BOCETO: cuenta que sube por escalones pequeños y se vacía de golpe; texto «un día puede borrar años».

**[4:30 — Cómo se gestiona la cola]** (pantalla: dos tarjetas con #69 y #70)
Los siguientes experimentos de la serie lo prueban. En el 69 se compra un put lejano, una opción que protege de las caídas: el peor día pasa de −27% a −7.8%, con un Sharpe de 1.85, pero el costo del put es un supuesto. En el 70, una gestión de riesgo por volatilidad lleva el Sharpe del VRP de 1.36 a 3.38 y su caída máxima de −62% a −26%. Los dos están en parcial: falta validarlos con datos de opciones reales.
> BOCETO: dos tarjetas: «#69: peor día −27% → −7.8%, Sharpe 1.85» y «#70: Sharpe 1.36 → 3.38, caída −62% → −26%», con el sello ámbar «PARCIAL: faltan opciones reales».

**[5:00 — Conclusión]** (pantalla: la curva con la muesca)
Una curva que sube casi vertical y una muesca roja: las dos cosas son la misma estrategia. Quien mira solo la primera está leyendo la mitad de la historia.
> BOCETO: la curva del inicio con el contador «+$1,624,827» y la muesca «−61.9%».

**[5:15 — Ficha del experimento #64 y cierre]** (pantalla: tarjeta con la ficha y la URL)
Ficha del experimento #64. Estado: no concluyente. Cifra clave: peor día de −28.6 sigmas el 12 de marzo de 2020, asimetría de −16.4 y caída máxima de −61.9% en la curva de $100,000. Filtro que decidió: ninguno aplicado; sin costos de opciones ni fuera de muestra. Lección: no es ganancia gratis, es el pago por asumir riesgo de cola. Revísalo completo en atlas-lab-one.vercel.app/e/64. Contenido educativo, no es asesoría financiera. El trading no se promete: se prueba.
> BOCETO: tarjeta en pantalla con las 4 líneas de la ficha (estado ámbar «no concluyente») y la URL `atlas-lab-one.vercel.app/e/64` en grande; fundido a la frase de marca.

---

## SHORT (9:16, ≈ 45 s) — "El millón y la muesca"

**[0-3 s]** "Con 100,000 dólares, la curva termina en más 1,624,827. Y cae menos 61.9% en el camino."
> BOCETO: B-roll de pantalla de bolsa en rojo, kb=in, overlay 0.6; curva casi vertical con una muesca roja; contadores; golpe de bajo + sacudida. Karaoke con «MENOS 61.9%» en rojo.

**[3-14 s]** "Es la prima de riesgo de volatilidad: vender seguros contra caídas del S&P 500. Gana la mayoría de los días. Su asimetría es −16.4: muchas ganancias pequeñas y una pérdida enorme."
> BOCETO: lluvia de monedas pequeñas y una factura roja; histograma con la barra roja aislada; whoosh. Ken Burns hacia dentro.

**[14-26 s]** "Su peor día fue el 12 de marzo de 2020: 28.6 sigmas, un día 28.6 veces más grande que uno normal. La caída máxima llegó a −91 sigmas."
> BOCETO: regla que se estira con «−28.6σ · 12-mar-2020»; tick; flash blanco.

**[26-37 s]** "Y ese millón es bruto: sin costos de opciones, sin opciones reales y escalado con toda la muestra. No es una expectativa."
> BOCETO: tres tarjetas «bruta», «sin opciones reales», «escalada con toda la muestra»; sello «NO ES UNA EXPECTATIVA».

**[37-45 s]** "Video completo en el canal y experimento 64 completo en el enlace. Un millón y medio, y menos 61.9. Son la misma estrategia."
> BOCETO: vuelve la curva con la muesca (loop); rótulo «Experimento #64 completo en el enlace»; texto pequeño «No es asesoría financiera · El trading no se promete: se prueba».

---

## Descripción (YouTube)
https://atlas-lab-one.vercel.app/e/64?utm_source=youtube&utm_medium=video&utm_campaign=exp064-t4
Ficha del experimento #64: no concluyente · con $100,000, la curva bruta termina en +$1,624,827 (contra +$347,885 de comprar y esperar) con una caída máxima de −61.9% · asimetría −16.4 · peor día −28.6σ (12-mar-2020).
Qué es una sigma, qué es la asimetría y por qué el número del millón no es una expectativa: es bruto, sin opciones reales y escalado con toda la muestra. Cómo se gestiona la cola en los experimentos 69 y 70.
Contenido educativo. No es asesoría financiera ni recomendación de inversión.
Descripción del Short (primera línea): https://atlas-lab-one.vercel.app/e/64?utm_source=youtube&utm_medium=short&utm_campaign=exp064-t4

Capítulos: 0:00 Gancho · 0:20 Este experimento · 0:45 Qué es una sigma · 1:20 La forma del riesgo: asimetría · 1:55 La caída máxima · 2:35 Cómo se fabrica el número del millón · 3:20 Con tu capital · 4:00 Por qué importa la cola · 4:30 Cómo se gestiona la cola · 5:00 Conclusión · 5:15 Ficha del experimento #64 y cierre

Etiquetas: riesgo de cola, asimetría, sigma, drawdown, prima de riesgo de volatilidad, VRP, vender volatilidad, VIX, backtest, trading con datos, ATLAS Lab, opciones

## Rúbrica (autoevaluación)
| Pieza | hook_0_3s | ritmo | promesa_cumplida | potencial_loop | claridad_no_traders | honestidad_atlas | audio | cta | Promedio |
|---|---|---|---|---|---|---|---|---|---|
| Largo | 5 | 4 | 5 | 4 | 4 | 5 | 4 | 4 | 4.38 |
| Short | 5 | 4 | 5 | 5 | 4 | 5 | 4 | 4 | 4.50 |

Hook ≥ 4 ✓ · honestidad 5 ✓. Punto débil: el cierre cita cifras de los experimentos 69 y 70; el video las presenta como parciales y no las usa para decir que el riesgo está resuelto.

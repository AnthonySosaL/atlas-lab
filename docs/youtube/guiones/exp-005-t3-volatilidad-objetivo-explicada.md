# Experimento #5 — Tema 3: ajustar el tamaño por volatilidad (qué hace y qué no hace)

Tema 3 de 4 del experimento #5
Qué aporta frente a los otros temas: es el tema del concepto. Explica el ajuste de tamaño por volatilidad (objetivo de 10% anual, ventana de 60 días, tope de 3 veces) con el #5 como caso, y muestra su límite: no crea ventaja (Sharpe sin costos −0.003) pero es una herramienta de control de riesgo, como mostró el #52. El tema 1 es el p = 0.003, el 2 el COVID y el 4 la comparación entre un mercado y quince.
Estado del guion: **BORRADOR — pendiente de aprobación**
Estado del experimento: **murió** · Serie B (Estrategias famosas, puestas a prueba), por afinidad · 1 largo + 1 Short
Datos usados: `experiments.json` (v=5: params con vol_win 60, target_vol_anual 0.1, clip 3, cost_rate 0.0002; metrics; kpis; notes; v=52: kpis y verdict para el contraste de control de riesgo: caída máxima de −40.3% a −19.2%), `exp_details.json` (algo y filters del v=5) y tabla «Con tu capital» de docs/youtube (fila 5). Las cifras con 10,000 dólares son las de la tabla de 100,000 divididas entre 10.
Producción: b-roll real con overlay oscuro 0.6, Ken Burns alterno, subtítulos karaoke en MAYÚSCULAS con cifras en rojo, golpe de bajo solo en 1–2 momentos. Rojo `#e11d2a`, verde `#22c55e`, fondo `#09090b`.

## Títulos (3 opciones)
1. Ajustar el tamaño por volatilidad no crea ventaja: Sharpe −0.003 antes de costos
2. Volatilidad objetivo explicada con 15 mercados: qué hace y qué no hace
3. ¿Sirve igualar el riesgo de cada mercado? El caso del momentum en 15 activos

## Miniatura
Fondo negro `#09090b`. Una balanza con un mercado «nervioso» (barra pequeña) y uno «tranquilo» (barra grande) en equilibrio; debajo, «10%» en blanco y «−0.003» en rojo. Texto grande: «MISMO RIESGO» (2 palabras). Logo ATLAS esquina inferior derecha.

---

## VIDEO LARGO (16:9, ≈ 4:17 min)

**[0:00 — Gancho]** (pantalla: balanza y «−0.003»)
Igualé el riesgo de cada uno de 15 mercados con una fórmula profesional. Antes de pagar costos, el Sharpe de la estrategia fue menos 0.003: cero.
> Boceto: una balanza que se equilibra con barras de distinto tamaño; después el número «−0.003» en rojo con sacudida. Ken Burns «in».

**[0:12 — Qué experimento es]** (pantalla: rótulo con el número y el nombre)
Este es el experimento #5 de ATLAS Lab: TSMOM cartera de 15 activos. Todos los resultados están en la página del experimento. Hoy explico una de sus piezas: el ajuste por volatilidad.
> Boceto: rótulo «EXPERIMENTO #5 · TSMOM cartera de 15 activos» y URL pequeña. kb=out.

**[0:25 — El problema: mercados con distinto humor]** (pantalla: tres líneas de precio)
Imagina que pones la misma cantidad de dinero en el euro, en el oro y en el petróleo. El petróleo se mueve mucho más cada día: él solo decidiría casi todos los buenos y los malos días de tu cartera. La volatilidad mide cuánto se mueve un precio. Si no la tienes en cuenta, los mercados nerviosos mandan sobre los tranquilos, aunque tú quisieras que todos pesaran igual.
> Boceto: tres líneas de precio, una casi plana (euro), una media (oro) y una muy movida (petróleo); etiqueta gris «ilustración». kb=in.

**[0:52 — La fórmula]** (pantalla: tamaño igual a objetivo entre volatilidad)
La solución es sencilla. El tamaño de cada posición es igual a un objetivo de riesgo dividido entre la volatilidad que ha tenido ese mercado últimamente. Mercado nervioso, posición pequeña. Mercado tranquilo, posición grande. Así cada mercado aporta un riesgo parecido a la cartera. Es una idea clásica de gestión de riesgo.
> Boceto: fórmula animada «tamaño = objetivo ÷ volatilidad» con una balanza; mercado nervioso → barra corta, mercado tranquilo → barra larga. kb=out.

**[1:13 — Los ajustes de este experimento]** (pantalla: tarjeta de parámetros)
En el experimento 5: la volatilidad se mide con los últimos 60 días. El objetivo es un 10% de volatilidad anual por activo. Hay un tope de 3 veces, para que un mercado muy tranquilo no acabe con una posición enorme. Los 15 activos pesan igual. Y todo se calcula con datos hasta el día anterior: se opera con la señal y el peso de ayer. El costo es de 2 puntos básicos por rotación.
> Boceto: tarjeta de parámetros: «Ventana 60 días · Objetivo 10% anual · Tope 3× · 15 activos · Señal de ayer · Costo 0.02%», cada fila con tick sonoro. kb=in.

**[1:45 — Por qué el rezago de un día]** (pantalla: calendario con ayer y hoy)
Hay un detalle que decide si un backtest es honesto: la señal de ayer. En este experimento, la posición de cada día usa la señal y el peso calculados con el cierre del día anterior. Si usaras el cierre de hoy para decidir las compras de hoy, estarías usando información que no tenías cuando operabas, y el resultado saldría mejor en el papel que en la realidad. Este experimento pasa esa prueba: opera con la señal de ayer.
> Boceto: calendario con dos casillas, ayer y hoy; flecha de ayer a hoy ✓ y flecha de hoy a hoy ✗; checklist `filters`: «señal con un día de rezago ✓». kb=in.

**[2:16 — Lo que hizo]** (pantalla: señales y tamaños)
Con eso, cada día la estrategia decide para cada mercado si compra o vende en corto, según su retorno de 120 días, y con qué tamaño. Hizo 953 cambios de señal en 1,754 días. Lo que el ajuste hace es repartir mejor el riesgo entre mercados distintos.
> Boceto: rejilla de 15 símbolos con flechas de dirección y barras de tamaño distinto; contador 953. kb=out.

**[2:36 — Lo que no hizo]** (pantalla: Sharpe bruto y neto)
Lo que no hace es crear una señal. Antes de costos, el Sharpe fue menos 0.003; después, menos 0.10. El retorno total fue menos 4.1%, mientras la cesta sin estrategia tuvo un Sharpe de 0.40. El ajuste por volatilidad dice cuánto apostar, no hacia dónde. Si la dirección no tiene ventaja, apostar de forma más ordenada no la crea.
> Boceto: dos barras de Sharpe: «bruto −0.003» (casi invisible) y «neto −0.10»; la cesta con 0.40 en verde. kb=in.

**[3:02 — Lo que sí puede hacer]** (pantalla: caída máxima de otro experimento)
Pero la herramienta sí sirve para otra cosa. En el experimento 52, el mismo principio de ajustar el tamaño por volatilidad, aplicado a un apalancamiento fijo, recortó la peor caída de menos 40.3% a menos 19.2%. Control de riesgo, no una fuente de ganancia. Ese es su lugar: la gestión de riesgo, no la señal.
> Boceto: dos barras de caída máxima del #52: «apalancamiento fijo −40.3%» y «volatilidad objetivo −19.2%»; sello verde «control de riesgo». kb=out.

**[3:26 — Con tu capital]** (pantalla: tarjeta «Con tu capital»)
Con 10,000 dólares serían unos menos 413 para la estrategia, frente a unos más 2,678 de comprar y esperar la cesta. Con 100,000, la tabla de ATLAS da menos 4,125 contra más 26,775.
> Boceto: tarjeta de capital con «Estrategia −$4,125» y «Comprar y esperar +$26,775»; selector $10,000 / $100,000.

**[3:43 — Ficha del experimento #5]** (pantalla: tarjeta con la URL)
Ficha del experimento 5. Estado: murió. Cifra clave: Sharpe de menos 0.10 tras costos y menos 0.003 antes, contra 0.40 de la cesta sin estrategia. Filtros que decidieron: PSR de 0.39 y comparación con comprar y esperar. Lección: ajustar el tamaño por volatilidad ordena el riesgo, no crea ventaja. Revísalo completo en atlas-lab-one.vercel.app/e/5.
> Boceto: tarjeta oscura con «#5 · MURIÓ», cifras clave y «atlas-lab-one.vercel.app/e/5» en grande; logo.

**[4:08 — Cierre]**
Todos los datos en atlas-lab-one.vercel.app, experimento 5. Contenido educativo, no es asesoría financiera. El trading no se promete: se prueba.
> Boceto: pantalla oscura con la frase de marca.

---

## SHORT (9:16, ≈ 45 s)

**[0-3 s]** «Igualé el riesgo de 15 mercados: Sharpe −0.003.»
> Boceto: balanza que se equilibra y «−0.003» en rojo con sacudida; b-roll de pantallas de bolsa, Ken Burns «in», overlay 0.6.

**[3-14 s]** «Se llama volatilidad objetivo: el tamaño de cada posición es un objetivo dividido entre cuánto se mueve el mercado. Si es nervioso, posición pequeña; si es tranquilo, grande.»
> Boceto: fórmula y dos barras de distinto tamaño; karaoke con «NERVIOSO» y «TRANQUILO» en rojo; Ken Burns «out».

**[14-27 s]** «Aquí: objetivo de 10% anual, ventana de 60 días y tope de 3 veces. La señal, el retorno de 120 días. Resultado: −4.1% y un Sharpe de −0.10.»
> Boceto: tarjeta de parámetros; barras −0.10 y 0.40 de la cesta; whoosh y flash blanco.

**[27-38 s]** «El ajuste dice cuánto apostar, no hacia dónde. En el experimento 52, ese mismo principio recortó la peor caída de −40.3% a −19.2%.»
> Boceto: dos barras −40.3% y −19.2%; sello verde «control de riesgo»; Ken Burns «in».

**[38-45 s]** «Ordena el riesgo, no crea ventaja. Experimento cinco completo en el enlace. El video completo está en el canal. No es asesoría financiera.»
> Boceto: vuelve la balanza equilibrada con «−0.003» (loop con el gancho); texto «Experimento #5 completo en el enlace» y logo.

---

## Descripción de YouTube (video largo)
https://atlas-lab-one.vercel.app/e/5?utm_source=youtube&utm_medium=video&utm_campaign=exp005-t3
Ficha del experimento #5 (TSMOM cartera de 15 activos): estado murió · −4.1% en seis años, Sharpe −0.10 tras costos y −0.003 antes · la cesta sin estrategia, Sharpe 0.40 · PSR 0.39.
Qué es el ajuste de tamaño por volatilidad (objetivo 10% anual, ventana de 60 días, tope de 3 veces) aplicado a 15 mercados, por qué no crea ventaja y en qué sí ayuda (control de riesgo, experimento #52).
Contenido educativo. No es asesoría financiera ni recomendación de inversión.

## Descripción del Short
https://atlas-lab-one.vercel.app/e/5?utm_source=youtube&utm_medium=short&utm_campaign=exp005-t3
Experimento #5 · murió · Sharpe −0.003 antes de costos con el riesgo igualado entre 15 mercados. No es asesoría financiera.

Capítulos: 0:00 Gancho · 0:12 Qué experimento es · 0:25 El problema: mercados con distinto humor · 0:52 La fórmula · 1:13 Los ajustes de este experimento · 1:45 Por qué el rezago de un día · 2:16 Lo que hizo · 2:36 Lo que no hizo · 3:02 Lo que sí puede hacer · 3:26 Con tu capital · 3:43 Ficha del experimento #5 · 4:08 Cierre

Etiquetas: volatilidad objetivo, vol targeting, gestión de riesgo, paridad de riesgo, momentum trading, cartera de 15 activos, backtest, Sharpe ratio, control de riesgo, ATLAS Lab, trading con datos, estrategia de trading

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

Notas: el ejemplo del euro, el oro y el petróleo es una ilustración rotulada, sin cifras. La referencia al #52 usa solo su caída máxima publicada (−40.3% a −19.2%); el guion no extrapola sus resultados a este experimento. El Short cumple hook ≥ 4 y honestidad 5.

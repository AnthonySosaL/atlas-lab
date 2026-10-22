# Experimento #7 — Tema 2: la goma elástica, vender en el techo y comprar en el piso

Tema 2 de 4 del experimento #7
Qué aporta frente a los otros temas: es el tema del concepto de la reversión a la media, explicado para principiantes y contrastado con la tendencia (el momentum del #4 acierta 25.7%; esta acierta 50.3%, y ambas pierden). El tema 1 gira en torno al Sharpe antes y después de costos; los temas 3 y 4 son los compartidos con el #6 (la ruptura y su espejo; el año por año).
Estado del guion: **BORRADOR — pendiente de aprobación**
Estado del experimento: **murió** · Serie B (Estrategias famosas, puestas a prueba) · 1 largo + 1 Short
Datos usados: `experiments.json` (v=7: params, metrics, kpis, params_view, verdict, notes; v=4 para el contraste de aciertos del momentum), `exp_details.json` (algo y filters del v=7) y tabla «Con tu capital» de docs/youtube (fila 7). Las cifras con 10,000 dólares son las de la tabla de 100,000 divididas entre 10.
Producción: b-roll real con overlay oscuro 0.6, Ken Burns alterno, subtítulos karaoke en MAYÚSCULAS con cifras en rojo, golpe de bajo solo en 1–2 momentos. Rojo `#e11d2a`, verde `#22c55e`, fondo `#09090b`.

## Títulos (3 opciones)
1. Vender en el techo y comprar en el piso: acierta el 50.3% y pierde −22.5%
2. Reversión a la media explicada con una goma elástica: el caso del rango asiático
3. Tendencia contra reversión: 25.7% de aciertos contra 50.3%, y las dos pierden

## Miniatura
Fondo negro `#09090b`. Una goma elástica estirada entre el techo y el piso de una caja, con una flecha que apunta al centro. Texto grande: «¿VUELVE AL CENTRO?» (3 palabras) en blanco y «−22.5%» en rojo. Logo ATLAS esquina inferior derecha.

---

## VIDEO LARGO (16:9, ≈ 4:20 min)

**[0:00 — Gancho]** (pantalla: goma elástica y «50.3%»)
Vender cuando el precio toca el techo y comprar cuando toca el piso: la idea más intuitiva del trading. Esta versión acierta el 50.3% de las veces y perdió menos 22.5%.
> Boceto: una goma elástica que se estira entre techo y piso y se suelta hacia el centro; contador 50.3% y luego «−22.5%» en rojo con sacudida. Ken Burns «in».

**[0:14 — Qué experimento es]** (pantalla: rótulo con el número y el nombre)
Este es el experimento #7 de ATLAS Lab: Reversión de sesión, contratendencia. Todos los resultados están en la página del experimento. Hoy es la clase de la idea.
> Boceto: rótulo «EXPERIMENTO #7 · Reversión de sesión (contratendencia)» y URL pequeña. kb=out.

**[0:26 — La intuición de la goma elástica]** (pantalla: precio y centro)
Piensa en una goma elástica. Si la estiras mucho, tiende a volver a su posición normal. La reversión a la media aplica esa idea a los precios: si un precio se aleja mucho de su zona habitual, apuesta a que volverá. En este experimento, la zona habitual es el rango de la madrugada asiática, de 00:00 a 07:00 UTC. Cuando el precio toca el techo de ese rango, vendo en corto; cuando toca el piso, compro.
> Boceto: precio que sube hasta el techo de la caja, flecha «VENTA EN CORTO» y retorno al centro; igual con el piso y «COMPRA». kb=in.

**[0:56 — Las reglas del fade]** (pantalla: tarjeta de parámetros)
Las reglas, fijadas de antemano. Una operación al día. El objetivo de ganancia está en el punto medio del rango. El stop está a media caja más allá del extremo. Y si no pasa ninguna de las dos cosas, salgo a las 16:00 UTC. Euro-dólar con velas de un minuto, de 2019 a 2024, con comisión de 0.007% y deslizamiento de 0.002%. Son 1,553 operaciones.
> Boceto: tarjeta `params_view` apareciendo fila por fila; dibujo de la caja con objetivo en el centro y stop fuera del extremo; reloj en 16:00. kb=out.

**[1:25 — Reversión contra tendencia]** (pantalla: dos filosofías)
Es lo opuesto a seguir tendencias. El momentum del experimento 4 apuesta a que lo que sube sigue subiendo, y acertó solo el 25.7% de sus operaciones. La reversión apuesta a lo contrario, y acierta el 50.3%. Es el perfil típico: seguir tendencias gana pocas veces, pero cuando gana, gana más; revertir gana a menudo, pero se expone a una ruptura que no vuelve. Aun así, las dos terminaron en pérdida.
> Boceto: dos columnas: «tendencia: 25.7%» y «reversión: 50.3%» con sus curvas reales; sello ✕ doble. kb=in.

**[1:55 — Resultados]** (pantalla: tarjetas KPI)
El resultado: menos 22.5%, Sharpe de menos 1.99 y una peor caída de menos 22.8%. Acierta el 50.3% y el factor de beneficio, lo ganado entre lo perdido, es 0.75. El PSR, la probabilidad de que el Sharpe real sea positivo, es casi cero: 5.9e−7. Con una moneda de 50% y esa forma de riesgo, el resultado no sorprende.
> Boceto: KPI en cascada; curva real bajando de forma casi continua; moneda con «50.3%». kb=out.

**[2:24 — Cómo leer 5.9e−7]** (pantalla: notación científica)
Una nota de lectura. El PSR de este experimento aparece como 5.9e−7. Esa notación significa 0.00000059: un número tan cercano a cero que la ficha lo escribe en notación científica. Traducido, la probabilidad de que el Sharpe verdadero de esta estrategia sea positivo es, con estos datos, prácticamente nula. Cuando veas una e con un menos delante en un resultado, lee casi cero.
> Boceto: «5.9e−7» que se transforma en «0.00000059» y luego en «≈ 0»; medidor PSR vacío con la meta 0.95. kb=in.

**[2:50 — Cuándo podría funcionar]** (pantalla: dos escenarios)
Una nota sobre la idea, no sobre este experimento. La reversión a la media suele asociarse con mercados que se mueven de lado, dentro de un rango, y sufre cuando aparece una tendencia que no vuelve. Este experimento no separa por tipo de mercado, así que no puedo decir si, en algún subconjunto de días, habría funcionado. Lo que sí puedo decir es que, en conjunto, con 1,553 operaciones y costos reales, no funcionó.
> Boceto: dos escenarios (ilustración): mercado lateral con precio que rebota y tendencia que rompe y se aleja; etiqueta gris «idea general, no medida aquí». kb=in.

**[3:20 — Lo que dicen los costos]** (pantalla: Sharpe bruto y neto)
Antes de costos, el Sharpe fue más 0.20: una ventaja diminuta. Después de costos, menos 1.99. La idea no era absurda; era demasiado pequeña para pagarla 1,553 veces.
> Boceto: barras +0.20 verde y −1.99 rojo; contador 1,553 con monedas cayendo. kb=out.

**[3:34 — Con tu capital]** (pantalla: tarjeta «Con tu capital»)
Con 10,000 dólares serían menos 2,234 para la estrategia, contra menos 848 de comprar y esperar. Con 100,000, la tabla de ATLAS da menos 22,339 contra menos 8,482.
> Boceto: tarjeta de capital con ambas cifras en rojo; selector $10,000 / $100,000.

**[3:49 — Ficha del experimento #7]** (pantalla: tarjeta con la URL)
Ficha del experimento 7. Estado: murió. Cifra clave: menos 22.5%, con un Sharpe de más 0.20 antes de costos y menos 1.99 después. Filtros que decidieron: costos y PSR. Lección: la señal era demasiado pequeña para sobrevivir a operar todos los días. Revísalo completo en atlas-lab-one.vercel.app/e/7.
> Boceto: tarjeta oscura con «#7 · MURIÓ», cifras clave y «atlas-lab-one.vercel.app/e/7» en grande; logo.

**[4:11 — Cierre]**
Todos los datos en atlas-lab-one.vercel.app, experimento 7. Contenido educativo, no es asesoría financiera. El trading no se promete: se prueba.
> Boceto: pantalla oscura con la frase de marca.

---

## SHORT (9:16, ≈ 46 s)

**[0-3 s]** «Vende en el techo, compra en el piso: −22.5%.»
> Boceto: goma elástica que vuelve al centro y «−22.5%» en rojo con sacudida; b-roll de gráficos de velas, Ken Burns «in», overlay 0.6.

**[3-14 s]** «Es como una goma elástica: si el precio se estira hasta el techo del rango de la madrugada, vendo en corto; si toca el piso, compro. Objetivo en el centro.»
> Boceto: caja con goma y flechas «VENTA EN CORTO» y «COMPRA»; karaoke con «GOMA ELÁSTICA» en rojo; Ken Burns «out».

**[14-26 s]** «Es lo opuesto a seguir tendencias. El momentum del experimento 4 acierta solo el 25.7%; esta acierta el 50.3%. Aun así, las dos pierden.»
> Boceto: dos columnas 25.7% y 50.3% con sellos ✕; whoosh y flash blanco.

**[26-38 s]** «1,553 operaciones, factor de beneficio de 0.75 y un Sharpe de −1.99. Antes de costos era +0.20: una ventaja diminuta que los costos borraron.»
> Boceto: barras +0.20 y −1.99; contador 1,553; Ken Burns «in».

**[38-46 s]** «Una buena intuición no es una ventaja. Experimento siete completo en el enlace. El video completo está en el canal. No es asesoría financiera.»
> Boceto: vuelve la goma elástica con «−22.5%» (loop con el gancho); texto «Experimento #7 completo en el enlace» y logo.

---

## Descripción de YouTube (video largo)
https://atlas-lab-one.vercel.app/e/7?utm_source=youtube&utm_medium=video&utm_campaign=exp007-t2
Ficha del experimento #7 (Reversión de sesión): estado murió · −22.5% (Sharpe −1.99; antes de costos +0.20) · 50.3% de aciertos · 1,553 operaciones · PSR casi cero.
La reversión a la media explicada con una goma elástica: vender en el techo del rango asiático y comprar en el piso, con objetivo en el punto medio (EUR/USD, velas de 1 minuto, 2019-2024), y su contraste con seguir tendencias.
Contenido educativo. No es asesoría financiera ni recomendación de inversión.

## Descripción del Short
https://atlas-lab-one.vercel.app/e/7?utm_source=youtube&utm_medium=short&utm_campaign=exp007-t2
Experimento #7 · murió · 50.3% de aciertos y −22.5%. No es asesoría financiera.

Capítulos: 0:00 Gancho · 0:14 Qué experimento es · 0:26 La intuición de la goma elástica · 0:56 Las reglas del fade · 1:25 Reversión contra tendencia · 1:55 Resultados · 2:24 Cómo leer 5.9e−7 · 2:50 Cuándo podría funcionar · 3:20 Lo que dicen los costos · 3:34 Con tu capital · 3:49 Ficha del experimento #7 · 4:11 Cierre

Etiquetas: reversión a la media, mean reversion, fade, contratendencia, rango asiático, EUR/USD, trading intradía, backtest, costos de trading, ATLAS Lab, trading con datos, estrategia de trading

## Rúbrica (autoevaluación, 1–5)
| Criterio | Short | Largo |
|---|---|---|
| hook_0_3s | 4 | 4 |
| ritmo | 4 | 4 |
| promesa_cumplida | 5 | 5 |
| potencial_loop | 5 | 4 |
| claridad_no_traders | 5 | 4 |
| honestidad_atlas | 5 | 5 |
| audio | 4 | 3 |
| cta | 4 | 4 |
| **Promedio** | **4.50** | **4.13** |

Notas: el bloque «Cuándo podría funcionar» describe la idea general y está rotulado como tal; el experimento no mide por tipo de mercado. El contraste de aciertos 25.7% frente a 50.3% usa dos experimentos distintos con la misma ventana. El Short cumple hook ≥ 4 y honestidad 5.

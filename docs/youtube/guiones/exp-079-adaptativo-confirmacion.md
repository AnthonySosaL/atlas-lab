# Experimento #79 — Régimen adaptativo: histéresis, confirmación y mezcla

Estado del guion: **BORRADOR — pendiente de aprobación**
Estado del experimento: **murió** (no sirvió: la mejor variante, confirmación de 5 días, apenas iguala a solo tendencia, queda bajo comprar y esperar y es negativa en 2012–2018) · Serie: no figura en plan-series.md; propuesta Serie A, pieza 2 de 2 (continuación del #77) · 1 largo + 1 Short
Datos usados: `experiments.json` (v=79: kpis, metrics, verdict, analysis, market, period), `exp_details.json` (extra-v79: algo, code, filters), `series/extra-v79.json` (1.ª curva = confirmación de 5 días; 2.ª = «Sin estrategia»), tabla «Con tu capital» de `docs/youtube`; el Sharpe de solo tendencia en 2012–2018 (0.02) viene del #77.
Producción (CLAUDE.md del canal): b-roll real detrás de cada escena con overlay oscuro 0.6, Ken Burns alternando in/out, subtítulos karaoke en MAYÚSCULAS con palabras clave en rojo, un dato visual por escena, golpe de bajo + sacudida solo en 1–2 momentos. Colores: rojo `#e11d2a`, verde `#22c55e`, fondo `#09090b`. Cifras en dígitos aquí; en el campo `tts` del JSON, en palabras.

## Títulos (3 opciones)
1. Tres mejoras al régimen adaptativo: la mejor, Sharpe 0.60
2. 3 arreglos al régimen adaptativo: histéresis, confirmación y mezcla
3. 0.60 contra 0.59: adaptar al mercado no aporta nada

## Miniatura (pensada para el título 1)
Fondo `#09090b`. Tres engranajes numerados 1-2-3, el tercero iluminado en verde; texto grande: «EMPATE» (rojo) y debajo pequeño «vs 0.59 sin adaptar». Logo ATLAS arriba a la derecha.

---

## VIDEO LARGO (16:9, ≈ 6 min)

**[0:00 — Gancho]** (pantalla: tres engranajes y dos números)
Probé tres mejoras para una estrategia que cambia de modo según el mercado. Una de ellas subió el Sharpe fuera de muestra de 0.36 a 0.60. Parece un éxito. Pero usar solo tendencia, sin adaptar nada, ya daba 0.59. La mejora existe; la ventaja, no.
BOCETO: barra que crece de 0.36 a 0.60 (verde) y de pronto una línea blanca en 0.59 («solo tendencia») y otra en 0.68 («comprar y esperar»). Texto: «Sharpe fuera de muestra, 2019–2024». kb=in.

**[0:20 — Presentación]** (pantalla: rótulo «Experimento #79 · Régimen adaptativo: histéresis, confirmación y mezcla»)
Este es el experimento #79 de ATLAS Lab: régimen adaptativo, histéresis, confirmación y mezcla. Todos los resultados están en la página del experimento.
BOCETO: rótulo en rojo y blanco «EXPERIMENTO #79» con el nombre debajo, sobre la última imagen del gancho atenuada (overlay 0.6); whoosh corto; logo en la esquina.

**[0:35 — El problema]** (pantalla: señal que entra y sale a destiempo)
En el experimento anterior, la versión adaptativa medía el régimen con el Efficiency Ratio, una medida de qué tan en línea recta se movió el precio, y entraba y salía a destiempo, con señales falsas. Aquí intento arreglar eso con tres ideas. Una: histéresis, como un termostato: entra en tendencia cuando el ratio pasa de 0.45 y solo sale cuando baja de 0.25. Dos: confirmación, exigir que el ratio supere 0.35 durante 5 días seguidos. Tres: mezcla continua, un peso gradual según la fuerza del ratio en lugar de un interruptor.
BOCETO: tres paneles ilustrativos (rotulados «ilustración»): termostato con dos umbrales 0.45 / 0.25; calendario con 5 casillas marcadas; regulador de volumen deslizante. Parámetros de `params_view`.

**[1:45 — Cómo lo probé]** (pantalla: checklist)
Mismos cuatro índices, S&P 500, Nasdaq 100, DAX y FTSE 100, mismos costos de 3 puntos básicos y el régimen rezagado un día para no mirar el futuro. Parámetros fijos, un solo juego, sin buscar el mejor. 2012–2018 de prueba y 2019–2024 fuera de muestra. Comparo contra la versión binaria, contra solo tendencia y contra comprar y esperar. No apliqué Deflated Sharpe ni Monte Carlo.
BOCETO: línea de tiempo en dos tramos; checklist `filters`: ✓ costos, ✓ régimen y posición rezagados 1 día; «DSR / Monte Carlo» en gris «no aplicado».

**[2:40 — Resultados]** (pantalla: tabla animada)
Las mejoras sí ayudan. Fuera de muestra, la versión binaria da 0.36; la mezcla, 0.43; la histéresis, 0.53; la confirmación de 5 días, 0.60. Pero mira las otras columnas. En 2012–2018 todas son negativas. Y solo tendencia, sin ningún detector, da 0.59 fuera de muestra. Comprar y esperar, 0.68, las supera a todas.
| Variante | 2012–2018 | 2019–2024 (fuera de muestra) |
|---|---|---|
| Confirmación 5 días | −0.05 | 0.60 |
| Histéresis (0.45 / 0.25) | −0.15 | 0.53 |
| Mezcla continua | −0.18 | 0.43 |
| Binaria | −0.15 | 0.36 |
| Solo tendencia | 0.02 (dato del #77) | 0.59 |
| Comprar y esperar | — | 0.68 |
BOCETO: barras agrupadas de `kpis`; las de 2012–2018 en rojo (negativas), las de fuera de muestra en verde; línea blanca punteada en 0.59 y verde en 0.68. Checklist: ✗ en muestra (todas < 0.13), ✓ fuera de muestra (0.60 > 0.30), ✗ comprar y esperar (0.60 < 0.68), ✗ la adaptación aporta (0.60 contra 0.59).

**[3:55 — Por qué no alcanza]** (pantalla: dos franjas de años)
Hay dos problemas. Primero, la adaptación no aporta nada extra: 0.60 contra 0.59. Todo lo que hay es seguimiento de tendencia. Segundo, solo brilla en 2019–2024, un periodo tendencial; en 2012–2018 es negativa. Es seguimiento de tendencia que depende del periodo, no una ventaja robusta. Arreglarlo del todo exigiría adivinar el régimen perfecto, y eso no se puede. Es una conclusión mía, no un teorema.
BOCETO: dos franjas: 2012–2018 gris/rojo (−0.05) y 2019–2024 verde (0.60). Texto: «Solo brilla cuando el mercado ya iba en tendencia». kb=out.

**[4:40 — Con tu capital]** (pantalla: tarjeta de capital)
Con 100,000 dólares entre 2012 y 2024, la mejor variante, la confirmación de 5 días, gana 37,060. Comprar y esperar los mismos índices gana 290,064. Con 10,000 dólares serían unos +3,706 contra +29,006. Es lo que pasó, no una promesa.
BOCETO: curvas reales de `series/extra-v79.json` (confirmación en verde, «Sin estrategia» en blanco), contadores finales.

**[5:15 — Ficha del experimento #79]** (pantalla: tarjeta con la ficha y la URL abajo)
Ficha del experimento 79. Estado: murió. Cifras clave: la mejor variante, la confirmación de 5 días, 0.60 fuera de muestra; solo tendencia, 0.59; comprar y esperar, 0.68. Lo que decidió: la adaptación no aporta nada extra y es negativa en 2012–2018. Lección: compárate siempre con la versión simple. Revísalo completo en atlas-lab-one.vercel.app/e/79.
BOCETO: tarjeta con el número «#79», el sello «MURIÓ» en rojo y cuatro líneas (estado, cifra clave, lo que decidió, lección) que entran con tick; al final, la URL «atlas-lab-one.vercel.app/e/79» grande y resaltada en verde. kb=in.

**[5:35 — Conclusión y cierre]**
Las mejoras ayudan, pero la adaptación no aporta nada extra y comprar y esperar sigue por encima. No sirvió. El trading no se promete: se prueba. Todos los datos en atlas-lab-one.vercel.app/e/79. Contenido educativo, no es asesoría financiera.

---

## SHORT (9:16, ≈ 45 s)

**[0-3 s]** «Mejoré una estrategia de 0.36 a 0.60. Y aun así no sirve.»
BOCETO: contador 0.36 → 0.60 en verde sobre b-roll de gráfico (kb=in); texto «Sharpe» pequeño.

**[3-15 s]** «Es la estrategia que cambia de modo según el mercado. Probé tres arreglos: histéresis, confirmación de cinco días y mezcla continua. Cuatro índices, con costos.»
BOCETO: tres iconos (termostato, calendario, regulador) entrando uno a uno (kb=out).

**[15-30 s]** «La mejor, la confirmación, saca 0.60 con datos nuevos. Pero solo tendencia, sin adaptar nada, saca 0.59. Comprar y esperar, 0.68.»
BOCETO: barra 0.60 verde, línea blanca 0.59 que la iguala, línea 0.68 por encima; tick en cada número; golpe de bajo en 0.68.

**[30-45 s]** «Y de 2012 a 2018 era negativa. La adaptación no aporta nada. El video completo está en el canal y experimento #79 completo en el enlace. Mejorar de 0.36 a 0.60… para igualar lo que ya había.»
BOCETO: barra negativa roja en 2012–2018; texto final «Video completo en el canal · Experimento #79 completo en el enlace» + pequeño «No es asesoría financiera · El trading no se promete: se prueba». Loop: «para igualar lo que ya había» vuelve a «mejoré… de 0.36 a 0.60».

---

## Descripción de YouTube (video largo)
https://atlas-lab-one.vercel.app/e/79?utm_source=youtube&utm_medium=video&utm_campaign=exp079-t1
Ficha del experimento #79: murió · mejor variante (confirmación de 5 días): Sharpe 0.60 fuera de muestra · solo tendencia 0.59 · comprar y esperar 0.68.
Tres mejoras al régimen adaptativo (histéresis, confirmación de 5 días y mezcla continua), probadas en S&P 500, Nasdaq 100, DAX y FTSE 100 con costos. La mejor llega a un Sharpe de 0.60 fuera de muestra, pero solo tendencia ya daba 0.59 y comprar y esperar, 0.68.
Contenido educativo. No es asesoría financiera ni recomendación de inversión.

## Descripción de YouTube (Short)
https://atlas-lab-one.vercel.app/e/79?utm_source=youtube&utm_medium=short&utm_campaign=exp079-t1
Ficha del experimento #79: murió · 0.60 contra 0.59 de solo tendencia: la adaptación no aporta nada extra.
Contenido educativo, no es asesoría financiera.

## Capítulos
0:00 Gancho · 0:20 Presentación · 0:35 El problema · 1:45 Cómo lo probé · 2:40 Resultados · 3:55 Por qué no alcanza · 4:40 Con tu capital · 5:15 Ficha del experimento #79 · 5:35 Conclusión

## Etiquetas
régimen de mercado, histéresis, efficiency ratio, estrategia adaptativa, seguimiento de tendencia, backtest, sharpe ratio, fuera de muestra, índices bursátiles, atlas lab, trading con datos

## Rúbrica (autoevaluación, 1–5)
| Pieza | hook_0_3s | ritmo | promesa_cumplida | potencial_loop | claridad_no_traders | honestidad_atlas | audio | cta | Promedio |
|---|---|---|---|---|---|---|---|---|---|
| Largo | 4 | 4 | 5 | 4 | 3 | 5 | 4 | 4 | 4.1 |
| Short | 4 | 4 | 5 | 5 | 4 | 5 | 4 | 4 | 4.4 |

Hook ≥ 4 ✓ · honestidad 5 ✓. Punto débil: es una continuación; para quien no vio el #77 hay que dejar claro en 20 s qué es el «régimen». Mejor publicarlo después del #77.

## Otros temas de este experimento
- Tema 1 (este archivo): `exp-079-adaptativo-confirmacion.md` — Régimen adaptativo: histéresis, confirmación y mezcla
- Tema 2: `exp-079-t2-la-regla-de-una-linea.md` — La regla de una línea (solo tendencia saca 0.59; la estrategia con detector, 0.60)
- Tema 3: `exp-079-t3-senales-falsas-tres-remedios.md` — Señales falsas y tres remedios (histéresis, confirmación y mezcla: de 0.36 a 0.60)

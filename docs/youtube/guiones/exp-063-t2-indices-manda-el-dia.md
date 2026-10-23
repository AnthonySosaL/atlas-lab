# Experimento #63 — Efecto nocturno (sesión diurna vs. nocturna) · Tema 2 de 4: en los índices manda el día

Estado del guion: **BORRADOR — pendiente de aprobación**
Tema 2 de 4 del experimento #63 · Qué aporta frente a los otros temas: es el tema del CONCEPTO aplicado a los ÍNDICES. Explica qué es partir el día en noche y día, qué se esperaba por la anomalía clásica de las acciones de EE. UU. y qué muestran el S&P 500 (−0.33 de noche, 0.84 de día) y el conjunto de índices (−0.22 y 0.69). El tema 1 abre con el Brent y el panorama de los 7 activos; el tema 3 trata del posible artefacto del rollover; el tema 4, del oro con costos reales.
Estado del experimento: **no concluyente** (estudio descriptivo bruto: sin señal de trading, sin costos, sin prueba fuera de muestra)
Serie: F (anomalías y estacionalidad) · Continúa en #71 (el mismo efecto con costos reales)
Datos usados: `experiments.json` (v=63: verdict, analysis, notes, kpis, metrics, market, period, params_view, capital), `exp_details.json` (extra-v63: algo, code.snippet, filters), `series/extra-v63.json` ([0] oro solo de noche, bruto; [1] oro comprar y esperar) y la tabla «Con tu capital» (`docs/youtube/*-capital.md`, fila #63).
Experimento de datos: el video explica qué se midió y para qué sirve; no hay una estrategia que aprobar o reprobar.

## Títulos
1. S&P 500: Sharpe −0.33 de noche y 0.84 de día (2012–2024)
2. La anomalía de la noche en las acciones de EE. UU.: ¿existe en los índices que medí?
3. Cierre a apertura contra apertura a cierre: qué tramo del día es el que paga

## Miniatura
Pantalla partida vertical sobre `#09090b`. Izquierda: una luna apagada en gris con «−0.33» en rojo `#e11d2a`. Derecha: un sol con «0.84» en verde `#22c55e`. Arriba, texto blanco: «S&P 500». Logo ATLAS esquina inferior derecha.

---

## VIDEO LARGO (≈ 4½ min, experimento de datos)

**[0:00 — Gancho]** (pantalla: luna y sol con dos contadores)
En el S&P 500, entre 2012 y 2024, el Sharpe de la noche fue de −0.33. El del día, de 0.84.
> BOCETO: luna a la izquierda con el contador bajando a «−0.33» y sol a la derecha con el contador subiendo a «0.84»; golpe de bajo y sacudida con el contador rojo.

**[0:15 — Este experimento]** (pantalla: rótulo «Experimento #63 · Efecto nocturno (sesión diurna vs. nocturna)»)
Este es el experimento #63 de ATLAS Lab: el efecto nocturno, sesión diurna contra sesión nocturna. Todos los resultados están en la página del experimento. Hoy me centro en lo que encontré en los índices.
> BOCETO: rótulo con «#63» y el nombre del experimento; logo ATLAS; whoosh suave.

**[0:35 — Partir el día en dos]** (pantalla: una vela diaria dividida en dos tramos)
Cada día de trading se puede partir en dos. La noche va del cierre de ayer a la apertura de hoy. El día va de la apertura al cierre. Para comparar los dos tramos uso el Sharpe, que mide cuánto rindes por cada unidad de riesgo: más alto es mejor, y negativo significa que perdiste.
> BOCETO: la vela se separa: tramo nocturno (cierre de ayer → apertura de hoy) en azul oscuro; tramo intradía (apertura → cierre) en blanco.

**[1:05 — Qué se esperaba]** (pantalla: acciones de EE. UU. con una flecha hacia la luna)
En las acciones de EE. UU. existe una anomalía muy conocida: buena parte del rendimiento se concentra de noche. Es la razón por la que este tipo de estudio despierta tanto interés. Entonces la pregunta natural era: ¿ocurre lo mismo en los índices que operan los CFD?
> BOCETO: icono de acciones de EE. UU. con una flecha hacia la luna (la anomalía clásica); cuatro iconos de índices con un signo de interrogación.

**[1:40 — Resultados en índices]** (pantalla: barras de noche y día)
En los cuatro índices, S&P 500, Nasdaq 100, DAX y FTSE 100, el Sharpe de la noche fue de −0.22 y el del día, de 0.69. Si miramos solo el S&P 500, −0.33 de noche y 0.84 de día. Dicho en simple: en los índices que medí, el rendimiento por unidad de riesgo está en la sesión de operación, y el tramo nocturno incluso resta.
| Sharpe, 2012–2024, bruto | Noche | Día |
|---|---|---|
| Índices (los cuatro) | −0.22 | 0.69 |
| S&P 500 | −0.33 | 0.84 |
> BOCETO: barras que crecen desde cero: la noche hacia abajo (roja), el día hacia arriba (verde); la del S&P 500 resaltada. Texto «en índices manda el día».

**[2:20 — Cómo leer un Sharpe negativo]** (pantalla: línea de cero y dos flechas)
Un Sharpe negativo significa que, por unidad de riesgo, ese tramo perdió. Comprar índices solo de noche habría sido un mal negocio en estos años, y comprarlos solo de día, uno bueno. Ojo: eso describe lo que pasó, no hay una estrategia detrás ni una promesa de que se repita.
> BOCETO: línea de cero; flecha roja hacia abajo para la noche y verde hacia arriba para el día; sello «descriptivo, no es una señal».

**[2:50 — La salvedad que cambia la lectura]** (pantalla: barra de 24 horas)
Hay una salvedad importante. Las barras diarias de los CFD cubren casi 24 horas. Por eso, el tramo nocturno de estos datos no es necesariamente la noche de la bolsa de valores: depende de cómo la fuente corta el día. La ficha avisa de que esto no se descartó con datos de sesión reales. Es decir, que el patrón sea lo opuesto a la anomalía clásica puede reflejar cómo están construidos los datos.
> BOCETO: barra de 24 horas con la franja del «cierre → apertura» marcada y un signo de interrogación; sello ámbar «NO DESCARTADO CON DATOS DE SESIÓN REALES».

**[3:30 — Lo que sí y lo que no]** (pantalla: dos columnas)
Lo que sí: una descripción del Sharpe por tramo en cuatro índices, entre 2012 y 2024. Lo que no: no hay costos, no hay una señal de operación, no hay una prueba fuera de muestra, es decir, en un periodo que no se haya usado para mirar los datos. Por eso el veredicto del experimento es: no concluyente.
> BOCETO: checklist ✗ «Costos: no aplicado (bruto)» · — «Señal de ayer: no aplica» · — «Fuera de muestra: no aplicado» · — «Deflated Sharpe: no aplicado».

**[3:55 — Con tu capital]** (pantalla: tarjeta «Con tu capital»)
El sitio no tiene curva de capital para los índices; solo para el oro de noche: con $100,000, +$27,208 contra +$66,979 de mantener el oro. Para los índices, lo que hay son los Sharpe, y son brutos. Si hubiera una curva, el resultado real sería peor, porque faltan los costos.
> BOCETO: tarjeta de capital del oro con dos filas; nota ámbar: «Para índices no hay curva. Resultados brutos, sin costos».

**[4:15 — Conclusión]** (pantalla: luna y sol)
En los índices, el rendimiento por unidad de riesgo cae en la sesión diurna. Lo que falta es confirmar que la noche de estos datos sea la noche real del mercado.
> BOCETO: luna y sol con las cifras del S&P 500, fijas.

**[4:25 — Ficha del experimento #63 y cierre]** (pantalla: tarjeta con la ficha y la URL)
Ficha del experimento #63. Estado: no concluyente. Cifra clave: en índices, Sharpe de 0.69 de día y −0.22 de noche; en el S&P 500, 0.84 y −0.33. Filtro que decidió: ninguno; es un estudio bruto, sin costos ni fuera de muestra. Lección: el patrón de sesión depende del activo y hay que descartar artefactos de los datos. Revísalo completo en atlas-lab-one.vercel.app/e/63. Contenido educativo, no es asesoría financiera. El trading no se promete: se prueba.
> BOCETO: tarjeta en pantalla con las 4 líneas de la ficha (estado ámbar «no concluyente») y la URL `atlas-lab-one.vercel.app/e/63` en grande; fundido a la frase de marca.

---

## SHORT (9:16, ≈ 44 s) — "Noche y día"

**[0-3 s]** "S&P 500: de noche, Sharpe de −0.33. De día, 0.84."
> BOCETO: luna con «−0.33» en rojo y sol con «0.84» en verde; b-roll de ciudad al anochecer, kb=in, overlay 0.6; golpe de bajo + sacudida. Karaoke con «DE NOCHE» en rojo.

**[3-13 s]** "Partí cada día en dos: la noche, del cierre de ayer a la apertura de hoy, y el día, de la apertura al cierre. Cuatro índices, de 2012 a 2024."
> BOCETO: vela partida en noche/día; cuatro iconos de índices; whoosh. Ken Burns hacia dentro.

**[13-25 s]** "En los cuatro índices, la noche: menos 0.22. El día: 0.69. Es lo contrario de la anomalía clásica de las acciones de Estados Unidos, donde mucho del rendimiento está de noche."
> BOCETO: barras roja y verde con tick; icono de acciones de EE. UU. con flecha hacia la luna tachada.

**[25-37 s]** "Ojo: son cifras brutas, sin costos ni prueba fuera de muestra. Y las barras de CFD cubren casi 24 horas: esa noche puede no ser la noche de la bolsa."
> BOCETO: barra de 24 horas con el hueco marcado «?»; sello ámbar «NO CONCLUYENTE»; flash blanco al entrar.

**[37-44 s]** "Video completo en el canal y experimento 63 completo en el enlace. De noche, menos 0.33. De día, 0.84."
> BOCETO: vuelven la luna y el sol del primer cuadro (loop); rótulo «Experimento #63 completo en el enlace»; texto pequeño «No es asesoría financiera · El trading no se promete: se prueba».

---

## Descripción (YouTube)
https://atlas-lab-one.vercel.app/e/63?utm_source=youtube&utm_medium=video&utm_campaign=exp063-t2
Ficha del experimento #63: no concluyente · índices (2012–2024): Sharpe 0.69 de día y −0.22 de noche; S&P 500: 0.84 y −0.33 · cifras brutas, sin costos ni fuera de muestra.
Partí el retorno diario en noche (cierre a apertura) y día (apertura a cierre) en S&P 500, Nasdaq 100, DAX y FTSE 100. En índices manda el día, lo contrario de la anomalía clásica de las acciones de EE. UU.; las barras de los CFD cubren casi 24 horas y la ficha no lo descartó con datos de sesión reales.
Contenido educativo. No es asesoría financiera ni recomendación de inversión.
Descripción del Short (primera línea): https://atlas-lab-one.vercel.app/e/63?utm_source=youtube&utm_medium=short&utm_campaign=exp063-t2

Capítulos: 0:00 Gancho · 0:15 Este experimento · 0:35 Partir el día en dos · 1:05 Qué se esperaba · 1:40 Resultados en índices · 2:20 Cómo leer un Sharpe negativo · 2:50 La salvedad que cambia la lectura · 3:30 Lo que sí y lo que no · 3:55 Con tu capital · 4:15 Conclusión · 4:25 Ficha del experimento #63 y cierre

Etiquetas: efecto nocturno, overnight, intradía, S&P 500, Nasdaq 100, DAX, FTSE 100, anomalías de mercado, Sharpe ratio, backtest, trading con datos, ATLAS Lab

## Rúbrica (autoevaluación)
| Pieza | hook_0_3s | ritmo | promesa_cumplida | potencial_loop | claridad_no_traders | honestidad_atlas | audio | cta | Promedio |
|---|---|---|---|---|---|---|---|---|---|
| Largo | 4 | 4 | 5 | 4 | 4 | 5 | 4 | 4 | 4.25 |
| Short | 5 | 4 | 5 | 5 | 4 | 5 | 4 | 4 | 4.50 |

Hook ≥ 4 ✓ · honestidad 5 ✓. Punto débil: es un estudio descriptivo, sin curva para los índices; el video lo dice y no promete una estrategia.

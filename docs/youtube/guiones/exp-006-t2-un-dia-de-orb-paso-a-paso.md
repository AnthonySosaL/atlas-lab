# Experimento #6 — Tema 2: un día de ORB, paso a paso (una caja, una ruptura, una operación)

Tema 2 de 4 del experimento #6
Qué aporta frente a los otros temas: es el tema del concepto, pensado para quien nunca ha visto un ORB: explica hora por hora cómo funciona la ruptura del rango de apertura (rango asiático de 00:00 a 07:00 UTC, sesión de 07:00 a 16:00 UTC, stop y objetivo) y cierra con lo que dijeron 1,553 días de datos. El tema 3 compara la ruptura con su espejo (#7) y el tema 4 es el año por año de las dos.
Estado del guion: **BORRADOR — pendiente de aprobación**
Estado del experimento: **murió** · Serie B (Estrategias famosas, puestas a prueba) · 1 largo + 1 Short
Datos usados: `experiments.json` (v=6: params, metrics, kpis, params_view, verdict, notes), `exp_details.json` (algo y filters del v=6) y tabla «Con tu capital» de docs/youtube (fila 6). Las cifras con 10,000 dólares son las de la tabla de 100,000 divididas entre 10. El experimento no reporta Sharpe bruto ni aplica prueba de azar; el guion lo dice.
Producción: b-roll real con overlay oscuro 0.6, Ken Burns alterno, subtítulos karaoke en MAYÚSCULAS con cifras en rojo, golpe de bajo solo en 1–2 momentos. Rojo `#e11d2a`, verde `#22c55e`, fondo `#09090b`.

## Títulos (3 opciones)
1. Cómo funciona un ORB, hora por hora: la estrategia de apertura de Londres probada 1,553 días
2. Una caja, una ruptura y una operación al día: Opening Range Breakout con datos reales
3. ORB explicado para principiantes: reglas exactas y resultado (−19.1%, Sharpe −0.96)

## Miniatura
Fondo negro `#09090b`. Un reloj de 24 horas con el arco asiático sombreado en gris y el arco de Londres/Nueva York en blanco; una caja rectangular con una flecha que la rompe hacia arriba. Texto grande: «UNA CAJA» (blanco) y «1,553 DÍAS» (rojo). Logo ATLAS arriba a la derecha.

---

## VIDEO LARGO (16:9, ≈ 4:08 min)

**[0:00 — Gancho]** (pantalla: caja y flecha)
Una caja, una línea de salida y una sola operación al día. Es la estrategia de ruptura de apertura, y esta es la versión exacta que probé en 1,553 días.
> Boceto: una caja que se dibuja sobre velas y una flecha que la rompe; contador de días hasta 1,553. Ken Burns «in».

**[0:13 — Qué experimento es]** (pantalla: rótulo con el número y el nombre)
Este es el experimento #6 de ATLAS Lab: ORB de la sesión Londres-Nueva York. Todos los resultados están en la página del experimento. Aquí te explico las reglas, una por una.
> Boceto: rótulo «EXPERIMENTO #6 · ORB de la sesión Londres-Nueva York» y URL pequeña. kb=out.

**[0:26 — Las horas del mercado]** (pantalla: reloj de 24 horas)
El forex funciona casi todo el día, pero no se mueve igual a todas las horas. Usamos el horario UTC, el horario universal. De las 00:00 a las 07:00 UTC es la madrugada asiática, normalmente más tranquila. A las 07:00 abre Londres y más tarde Nueva York, y hasta las 16:00 UTC es cuando entra más dinero. La idea del ORB es aprovechar ese contraste entre la calma de la madrugada y la actividad de la sesión.
> Boceto: reloj con arco gris 00–07 UTC «Asia» y arco blanco 07–16 UTC «Londres y Nueva York». kb=in.

**[0:58 — Paso 1 y 2: la caja y la ruptura]** (pantalla: caja sobre velas)
Paso uno: marco la caja. Es el precio máximo y mínimo de la madrugada asiática, de 00:00 a 07:00. Paso dos: espero. Entre las 07:00 y las 16:00, en cuanto el precio rompe la caja por arriba o por abajo, entro en esa dirección. Si rompe por arriba, compro; si rompe por abajo, vendo en corto. Solo se opera la primera ruptura, y solo una vez al día.
> Boceto: velas de la madrugada que dibujan la caja; la primera vela que la rompe se marca con «COMPRA» o «VENTA EN CORTO». kb=out.

**[1:26 — Paso 3 y 4: stop, objetivo y salida]** (pantalla: tres líneas)
Paso tres: protejo la operación. El stop está en el lado opuesto de la caja: si el precio da la vuelta y cruza la caja entera, salgo con pérdida. El objetivo de ganancia es un tamaño de caja más allá de la entrada. Paso cuatro: si no pasa ninguna de las dos cosas, salgo al cierre de la sesión, a las 16:00 UTC. Los parámetros están fijados de antemano; no probé otros horarios ni otros objetivos para quedarme con el mejor.
> Boceto: una operación con tres líneas: entrada, objetivo (verde) a «1× el rango», stop (rojo) en el lado opuesto de la caja, y reloj marcando las 16:00. Etiqueta «ilustración, sin cifras». kb=in.

**[1:58 — Los costos y el ritmo]** (pantalla: tarjeta de parámetros)
Los datos son velas de un minuto del euro-dólar, de 2019 a 2024. Cada operación paga comisión de 0.007% y deslizamiento de 0.002%, tanto al entrar como al salir. Una operación al día significa que en total hubo 1,553 operaciones. Es una frecuencia alta, y cada una paga su peaje.
> Boceto: tarjeta `params_view` apareciendo fila por fila con tick; contador de operaciones hasta 1,553 y monedas cayendo. kb=out.

**[2:21 — Lo que dijeron 1,553 operaciones]** (pantalla: tarjetas KPI)
Resultado: retorno de menos 19.1%, Sharpe de menos 0.96 y una peor caída de menos 20.4%. Acierta el 49.9% de las veces, y el factor de beneficio, lo ganado entre lo perdido, es 0.87. El PSR, la probabilidad de que el Sharpe real sea positivo, es 0.009. Comprar y esperar el euro tuvo un Sharpe de menos 0.21: la estrategia lo hizo bastante peor.
> Boceto: KPI en cascada; barras de Sharpe −0.96 contra −0.21; curva real cayendo. kb=in.

**[2:52 — Lo que el experimento no mide]** (pantalla: aviso ámbar)
Dos límites, dichos con claridad. No se reportó el Sharpe antes de costos, así que no puedo separar cuánto de la pérdida son comisiones y cuánto es que la ruptura no funciona. Y no se aplicó la prueba de azar. El propio experimento resume lo que sí se ve: en forex, el precio no siguió la ruptura al abrir Londres o Nueva York.
> Boceto: dos tarjetas ámbar: «Sharpe bruto: no reportado» y «Prueba de azar: no aplicada»; sello ✕ sobre el PSR 0.009. kb=out.

**[3:16 — Con tu capital]** (pantalla: tarjeta «Con tu capital»)
Con 10,000 dólares serían menos 1,947 para la estrategia, contra menos 848 de comprar y esperar. Con 100,000, la tabla de ATLAS da menos 19,468 contra menos 8,482.
> Boceto: tarjeta de capital con ambas cifras en rojo; selector $10,000 / $100,000.

**[3:32 — Ficha del experimento #6]** (pantalla: tarjeta con la URL)
Ficha del experimento 6. Estado: murió. Cifra clave: menos 19.1% con un Sharpe de menos 0.96, contra menos 0.21 de comprar y esperar. Filtros que decidieron: PSR de 0.009 y comparación con comprar y esperar; el Sharpe bruto no se reportó. Lección: acertar la mitad de las veces no basta si cada operación paga su peaje. Revísalo completo en atlas-lab-one.vercel.app/e/6.
> Boceto: tarjeta oscura con «#6 · MURIÓ», cifras clave y «atlas-lab-one.vercel.app/e/6» en grande; logo.

**[3:59 — Cierre]**
Todos los datos en atlas-lab-one.vercel.app, experimento 6. Contenido educativo, no es asesoría financiera. El trading no se promete: se prueba.
> Boceto: pantalla oscura con la frase de marca.

---

## SHORT (9:16, ≈ 46 s)

**[0-3 s]** «Una caja, una ruptura, una operación al día: −19.1%.»
> Boceto: caja dibujada sobre velas, flecha de ruptura y «−19.1%» en rojo con sacudida; b-roll de gráficos de velas, Ken Burns «in», overlay 0.6.

**[3-14 s]** «Marco el máximo y el mínimo de la madrugada asiática, de 00:00 a 07:00 UTC. Cuando Londres o Nueva York rompen esa caja, entro en esa dirección.»
> Boceto: reloj con arco asiático y caja; karaoke con «00:00 A 07:00» en rojo; Ken Burns «out».

**[14-26 s]** «Stop en el lado opuesto de la caja, objetivo de una caja más allá, y si no pasa nada, salgo a las 16:00. Parámetros fijados de antemano, con costos reales.»
> Boceto: tres líneas (entrada, objetivo verde, stop rojo) y reloj en 16:00; whoosh y flash blanco.

**[26-38 s]** «Acierta el 49.9% y el factor de beneficio es 0.87. Sharpe de −0.96, contra −0.21 de comprar y esperar. El PSR, 0.009.»
> Boceto: moneda con «49.9%»; barras de Sharpe −0.96 y −0.21; Ken Burns «in».

**[38-46 s]** «No se midió el Sharpe antes de costos. Experimento seis completo en el enlace. El video completo está en el canal. No es asesoría financiera.»
> Boceto: vuelve la caja rota con «−19.1%» (loop con el gancho); texto «Experimento #6 completo en el enlace» y logo.

---

## Descripción de YouTube (video largo)
https://atlas-lab-one.vercel.app/e/6?utm_source=youtube&utm_medium=video&utm_campaign=exp006-t2
Ficha del experimento #6 (ORB de la sesión Londres-Nueva York): estado murió · −19.1% con Sharpe −0.96 (comprar y esperar: −0.21) · 1,553 operaciones · 49.9% de aciertos · PSR 0.009.
Cómo funciona un Opening Range Breakout paso a paso (rango asiático 00:00-07:00 UTC, sesión 07:00-16:00 UTC, stop en el lado opuesto, objetivo de 1× el rango) y qué resultado dio en el EUR/USD con velas de 1 minuto, 2019-2024.
Contenido educativo. No es asesoría financiera ni recomendación de inversión.

## Descripción del Short
https://atlas-lab-one.vercel.app/e/6?utm_source=youtube&utm_medium=short&utm_campaign=exp006-t2
Experimento #6 · murió · una caja, una ruptura y una operación al día: −19.1% en 1,553 días. No es asesoría financiera.

Capítulos: 0:00 Gancho · 0:13 Qué experimento es · 0:26 Las horas del mercado · 0:58 Paso 1 y 2: la caja y la ruptura · 1:26 Paso 3 y 4: stop, objetivo y salida · 1:58 Los costos y el ritmo · 2:21 Lo que dijeron 1,553 operaciones · 2:52 Lo que el experimento no mide · 3:16 Con tu capital · 3:32 Ficha del experimento #6 · 3:59 Cierre

Etiquetas: ORB, opening range breakout, ruptura de rango, rango asiático, sesión de Londres, sesión de Nueva York, EUR/USD, trading intradía, backtest, Sharpe ratio, ATLAS Lab, trading con datos

## Rúbrica (autoevaluación, 1–5)
| Criterio | Short | Largo |
|---|---|---|
| hook_0_3s | 4 | 4 |
| ritmo | 4 | 4 |
| promesa_cumplida | 5 | 5 |
| potencial_loop | 4 | 4 |
| claridad_no_traders | 5 | 5 |
| honestidad_atlas | 5 | 5 |
| audio | 4 | 3 |
| cta | 4 | 4 |
| **Promedio** | **4.38** | **4.25** |

Notas: el tema es didáctico; el diagrama de la caja con las tres líneas es lo que sostiene la claridad. La descripción de «calma de la madrugada y actividad de la sesión» es la motivación habitual de la estrategia, no una cifra del experimento. El Short cumple hook ≥ 4 y honestidad 5.

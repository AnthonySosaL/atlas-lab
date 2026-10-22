# Experimento #71 — Tema 3: El muro de los costos (dos ventajas reales que el costo entierra: +0.20 → −1.99 y +0.99 → −3.11)

**Tema 3 de 3 del experimento #71** · Qué aporta frente a los otros temas: es el tema de la comparación. Pone el oro de noche (#71) junto a la reversión de sesión (#7), la ruptura de sesión (#6) y la reversión de corto plazo en índices (#65) para ver qué tienen en común las estrategias de trading frecuente. Se entiende sin los otros temas.
Estado del guion: **BORRADOR — pendiente de aprobación**
Estado del experimento: **murió** (el efecto existe en bruto, oro Sharpe 0.99, pero con spread y swap reales cae a −3.11, −5.8% al año)
Serie: F (anomalías y estacionalidad). Une #6, #7, #65 y #71.
Datos usados: `experiments.json` (v=71: kpis, analysis, notes; v=7: kpis —Sharpe bruto 0.20, neto −1.99, −22.5%, 1,553 operaciones—, analysis; v=6: kpis —Sharpe −0.96, −19.1%, 1,553 operaciones—; v=65: kpis y analysis —Sharpe bruto de −0.11 a 0.48 contra 0.26 a 0.84 sin estrategia—) · tabla «Con tu capital» (filas #65: +$220,005 contra +$764,178, bruto; #71: −$53,695 contra +$66,979).
Producción (CLAUDE.md del canal): b-roll real detrás de cada escena con overlay 0.6, Ken Burns alternando, subtítulos karaoke en MAYÚSCULAS, un dato visual por escena. Colores: rojo `#e11d2a`, verde `#22c55e`, fondo `#09090b`.

## Títulos
1. Dos ventajas reales y un mismo final: +0.20 → −1.99 y +0.99 → −3.11
2. El muro de los costos: cuatro experimentos de trading frecuente
3. ¿Por qué mueren las estrategias que operan mucho? El caso del oro de noche

## Miniatura
Fondo `#09090b`. Una pared de ladrillos rojos `#e11d2a` con la etiqueta «COSTOS» y, delante, dos flechas verdes `#22c55e` rotas contra ella: «+0.99» y «+0.20». Logo ATLAS esquina inferior derecha.

---

## VIDEO LARGO (≈ 7 min)

**[0:00 — Gancho]** (pantalla: dos barras verdes cortas, «+0.20» y «+0.99»; cada una se vuelve roja y cae: «−1.99» y «−3.11»)
BOCETO: las barras verdes suben y chocan con un muro; se invierten hacia abajo; golpe de bajo en −3.11.
> Antes de costos, esta idea tenía un Sharpe de +0.20. Esta otra, de +0.99. Después de costos: −1.99 y −3.11. No eran ideas falsas: eran ventajas pequeñas que el costo de operar se comió. Hoy comparo cuatro experimentos de ATLAS que chocaron contra el mismo muro.

**[0:18 — Qué experimento es]** (pantalla: rótulo «Experimento #71 · ATLAS Lab» y el nombre debajo)
BOCETO: rótulo con el número 71 y el nombre «Efecto nocturno con costos reales + validación fuera de muestra»; logo en la esquina.
> Este es el experimento #71 de ATLAS Lab: efecto nocturno con costos reales y validación fuera de muestra. Todos los resultados están en la página del experimento. Aquí lo comparo con los experimentos 6, 7 y 65.

**[0:45 — La pregunta]** (pantalla: dos platos de una balanza: «ventaja por operación» y «costo por operación»)
BOCETO: balanza; el plato del costo baja más que el de la ventaja; texto «la ventaja tiene que ser mayor que lo que cuesta capturarla».
> Una estrategia gana si la ventaja de cada operación es mayor que lo que cuesta hacerla. Cuando operas pocas veces, el costo pesa poco. Cuando operas todos los días, el costo se repite cada día. Veamos qué pasó en cuatro experimentos. El Sharpe, para quien llegue ahora, mide cuánto rindes por cada unidad de riesgo.

**[1:15 — Caso 1: la reversión de sesión (#7)]** (pantalla: tarjeta del #7 con dos barras de Sharpe)
BOCETO: barra verde «bruto +0.20» y barra roja «neto −1.99»; contador «1,553 operaciones»; texto «EUR/USD · velas de 1 minuto».
> Experimento 7: ir en contra del movimiento de la sesión en EUR/USD, con velas de 1 minuto, de 2019 a 2024. Antes de costos, el Sharpe era de +0.20. Neto, −1.99, con una pérdida de 22.5%. Fueron 1,553 operaciones. El propio análisis lo resume: el muro no era la falta de señal, eran los costos.

**[2:00 — Caso 2: el oro de noche (#71)]** (pantalla: tarjeta del #71)
BOCETO: barra verde «bruto +0.99» y barra roja «neto −3.11»; moneda de «2.5 bps por día»; Deflated Sharpe 1.00 en un sello.
> Experimento 71: comprar oro al cierre y venderlo a la apertura. En bruto, Sharpe de 0.99 y Deflated Sharpe de 1.00, o sea, no es azar. Con spread y swap reales, 2.5 puntos básicos por día, el Sharpe baja a −3.11 y el retorno es de −5.8% al año. Un punto básico es la centésima parte de 1%.

**[2:45 — Caso 3: la reversión en índices (#65)]** (pantalla: tarjeta del #65 con cuatro índices)
BOCETO: cuatro pares de barras: Sharpe bruto contra Sharpe de comprar y esperar en S&P 500 (0.21 y 0.73), Nasdaq 100 (0.48 y 0.84), DAX (−0.11 y 0.54) y FTSE 100 (0.02 y 0.26).
> Experimento 65: reversión de corto plazo con z-score de 5 días en cuatro índices. Incluso en bruto, el Sharpe va de −0.11 a 0.48, siempre por debajo de comprar y esperar, que va de 0.26 a 0.84. Y hace muchísimas operaciones, así que los costos la entierran todavía más.

**[3:30 — Para ser justos: el caso 0 (#6)]** (pantalla: tarjeta del #6)
BOCETO: barra roja «Sharpe −0.96» contra la gris «comprar y esperar −0.21»; texto «aquí la señal misma perdió».
> Para ser justos, no todo es costos. En el experimento 6, la ruptura de la sesión de Londres y Nueva York, con las mismas 1,553 operaciones, el Sharpe fue de −0.96, peor que el −0.21 de comprar y esperar, y perdió 19.1%. Ahí la señal misma no funcionó. Eso motivó probar lo contrario, que fue el caso 1.

**[4:10 — El patrón]** (pantalla: tabla comparativa)
BOCETO: tabla que se llena fila a fila con tick; la columna «neto» en rojo.
| Experimento | Idea | Sharpe bruto | Sharpe neto |
|---|---|---|---|
| #7 | Reversión de sesión (EUR/USD, 1 minuto) | 0.20 | −1.99 |
| #71 | Oro de noche (cierre a apertura) | 0.99 | −3.11 |
| #65 | Reversión z-score de 5 días en índices | −0.11 a 0.48 | no se muestra: los costos la entierran |
> Dos ventajas pequeñas en bruto, 0.20 y 0.99, que se vuelven negativas. Una reversión en índices que ni siquiera en bruto le gana a quedarse quieto. Y una ruptura, la del experimento 6, que perdía por sí sola. Lo que une los casos de trading frecuente: la ventaja por operación es pequeña, y el costo por operación no.

**[4:55 — Con tu capital]** (pantalla: tarjeta con dos filas de dinero)
BOCETO: filas «#71 oro de noche neto: −$53,695 · comprar y esperar: +$66,979» y «#65 reversión en Nasdaq 100, bruto: +$220,005 · comprar y esperar: +$764,178»; aviso ámbar «la fila del #65 es bruta».
> Con $100,000, el oro de noche con costos reales termina en −$53,695, y mantener el oro, en +$66,979. La reversión en el Nasdaq 100, en bruto y sin costos, gana $220,005 y comprar y esperar, $764,178. Con $10,000, el oro de noche perdería $5,369, y mantener el oro ganaría $6,698. Lo bruto no es lo que te pagan.

**[5:35 — Qué hacer con esto]** (pantalla: tres reglas en pantalla)
BOCETO: tres reglas que aparecen con whoosh: «exige el Sharpe neto», «cuenta cuántas veces entra y sale», «pregunta quién cobra».
> Tres reglas para quien mire un backtest. Una: exige el Sharpe neto de costos, no el bruto. Dos: cuenta cuántas veces entra y sale; cada rotación paga. Tres: pregunta qué costo se usó y si es el de un inversor minorista. Esto confirma la ventaja institucional: quien tiene ejecución barata puede capturar una ventaja pequeña; el inversor minorista, no.

**[6:10 — Preguntas de un escéptico]** (pantalla: tres tarjetas: «¿otros brokers?», «¿costos más bajos?», «¿otras ventanas?»)
BOCETO: tres tarjetas que se voltean con «no medido».
> Preguntas que me haría un escéptico. ¿Y con un broker más barato? Probablemente mejoraría, pero usé los costos que leí del mío. ¿Y otras estrategias con costos más modestos? Los experimentos 72 al 79 pagan 3 puntos básicos por rotación, y en dinero total ninguno supera a comprar y esperar. Lo medido es que, en estos cuatro casos, el costo decide.

**[6:35 — Ficha del experimento #71]** (pantalla: tarjeta con la ficha y la URL abajo)
BOCETO: tarjeta con cinco líneas que entran con tick y, al final, la URL resaltada en verde.
> Ficha del experimento 71. Estado: murió. Cifras clave: Sharpe del oro de 0.99 en bruto y −3.11 neto, −5.8% al año; fuera de muestra, −7.34. Lo que decidió: el filtro de costos. Lección: una ventaja real puede no ser operable si el costo por operación es mayor. Revísalo completo en atlas-lab-one.vercel.app/e/71.

**[7:05 — Cierre]**
BOCETO: la pared con las flechas verdes rotas; logo.
> Todos los datos en atlas-lab-one.vercel.app, experimento 71. El trading no se promete: se prueba. Contenido educativo, no es asesoría financiera.

---

## SHORT (9:16, ≈ 49 s)

**[0-3 s]** (boceto: barras verdes «+0.20» y «+0.99» que chocan con un muro y se vuelven rojas; b-roll de muro de ladrillos, kb=in; golpe de bajo)
> Dos ventajas reales: +0.20 y +0.99. Con costos, −1.99 y −3.11.

**[3-14 s]** (boceto: tarjeta del #7: 1,553 operaciones; «EUR/USD · 1 minuto»; whoosh)
> La primera: ir en contra del movimiento de la sesión en EUR/USD. Antes de costos, Sharpe de +0.20. Neto, −1.99, tras 1,553 operaciones.

**[14-26 s]** (boceto: lingote de oro y reloj; moneda de «2.5 bps por día»)
> La segunda: comprar oro al cierre y venderlo a la apertura. En bruto, Sharpe de 0.99 y Deflated Sharpe de 1.00. Con 2.5 puntos básicos de costo por día, −3.11.

**[26-38 s]** (boceto: cuatro índices con barras bajas frente a comprar y esperar)
> Y la reversión de corto plazo en índices: ni en bruto le gana a quedarse quieto. Sharpe de −0.11 a 0.48, contra 0.26 a 0.84.

**[38-45 s]** (boceto: balanza con costo mayor que ventaja; texto «ventaja < costo»)
> Una ventaja pequeña por operación no paga un costo que se repite todos los días.

**[45-49 s]** (boceto: texto «Experimento #71 completo en el enlace»; logo)
> Video completo en el canal y experimento #71 completo en el enlace. ¿Cuántas veces entras y sales?

Gancho alterno A: «El análisis lo dice: el muro no era la falta de señal, eran los costos.» · B: «Deflated Sharpe de 1.00 y −3.11 neto: lo real no siempre es operable.»

## Descripción de YouTube — video largo
https://atlas-lab-one.vercel.app/e/71?utm_source=youtube&utm_medium=video&utm_campaign=exp071-t3
Ficha: experimento #71, efecto nocturno con costos reales. Estado: murió. Oro de noche: Sharpe 0.99 en bruto y −3.11 neto (−5.8% al año). Reversión de sesión (#7): de +0.20 a −1.99.
Comparo cuatro experimentos de trading frecuente (#6, #7, #65 y #71) para ver qué los une: la ventaja por operación es pequeña y el costo se repite.
Contenido educativo. No es asesoría financiera ni recomendación de inversión.

## Descripción de YouTube — Short
https://atlas-lab-one.vercel.app/e/71?utm_source=youtube&utm_medium=short&utm_campaign=exp071-t3
Ficha: experimento #71, murió. De +0.99 a −3.11 (oro de noche) y de +0.20 a −1.99 (reversión de sesión). Contenido educativo, no es asesoría financiera.

## Capítulos
0:00 Gancho · 0:18 Qué experimento es · 0:45 La pregunta · 1:15 Caso 1: la reversión de sesión · 2:00 Caso 2: el oro de noche · 2:45 Caso 3: la reversión en índices · 3:30 Para ser justos · 4:10 El patrón · 4:55 Con tu capital · 5:35 Qué hacer con esto · 6:10 Preguntas de un escéptico · 6:35 Ficha del experimento #71 · 7:05 Cierre

## Etiquetas
costos de trading, spread y swap, trading frecuente, efecto nocturno, reversión de sesión, Sharpe bruto y neto, ventaja institucional, backtest, EUR/USD, oro, trading con datos, ATLAS Lab

## Rúbrica (autoevaluación, 1–5)
| Pieza | hook_0_3s | ritmo | promesa_cumplida | potencial_loop | claridad_no_traders | honestidad_atlas | audio | cta | Promedio |
|---|---|---|---|---|---|---|---|---|---|
| Largo | 5 | 4 | 5 | 4 | 4 | 5 | 4 | 4 | 4.38 |
| Short | 5 | 4 | 5 | 4 | 4 | 5 | 4 | 4 | 4.38 |

Hook ≥ 4 ✓ · honestidad 5 ✓. Punto débil: cruza cuatro experimentos con instrumentos y periodos distintos; el largo compara el patrón, no las curvas, y aclara que en el #6 la señal misma perdió y que la fila del #65 es bruta.

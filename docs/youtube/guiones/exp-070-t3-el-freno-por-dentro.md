# Experimento #70 — Tema 3: El freno por dentro (cinco números y el marzo de 2020, con y sin freno)

**Tema 3 de 3 del experimento #70** · Qué aporta frente a los otros temas: es el tema del método. Abre el mecanismo del freno número a número (10%, 60 días, 1.5x, −15% y la mitad) y lo ve trabajar en un caso concreto, marzo de 2020, con la misma estrategia con y sin freno. Se entiende sin los otros temas.
Estado del guion: **BORRADOR — pendiente de aprobación**
Estado del experimento: **parcial** (la gestión de riesgo transforma el VRP, Sharpe 1.36 → 3.38, pero empeora al bot, 0.17 → −0.02: depende de la estrategia)
Serie: E (gestión de riesgo).
Datos usados: `exp_details.json` (extra-v70: algo, code —la función `managed`, con sus cinco parámetros—, filters) · `experiments.json` (v=70: params_view, kpis, metrics, capital.note) · `series/extra-v70.json` ([0] VRP con gestión, [1] VRP sin gestión, [2] comprar y esperar; retornos por año, fechas del drawdown y tiempo bajo el agua calculados de las curvas, brutas) · tabla «Con tu capital» (fila #70: +$2,742,858 contra +$221,217 con $100,000).
Producción (CLAUDE.md del canal): b-roll real detrás de cada escena con overlay 0.6, Ken Burns alternando, subtítulos karaoke en MAYÚSCULAS, un dato visual por escena. Colores: rojo `#e11d2a`, verde `#22c55e`, fondo `#09090b`.

## Títulos
1. Cinco números forman un freno de riesgo: 10%, 60 días, 1.5x, −15% y la mitad
2. Marzo de 2020, con y sin freno: −62% contra −26%
3. Cómo funciona un freno de riesgo por dentro (con un caso real)

## Miniatura
Fondo `#09090b`. Un tablero con cinco perillas numeradas (10%, 60, 1.5, −15%, ½) y, al lado, dos curvas: una roja `#e11d2a` que cae hasta «−62%» y una verde `#22c55e` que se frena en «−26%». Texto: «5 NÚMEROS». Logo ATLAS esquina inferior derecha.

---

## VIDEO LARGO (≈ 6½ min)

**[0:00 — Gancho]** (pantalla: dos curvas del VRP en marzo de 2020: roja hasta «−62%» y verde frenada en «−26%»)
BOCETO: las dos curvas bajan juntas; la verde se frena y la roja sigue; golpe de bajo al llegar a −62%; texto «21 feb – 16 mar de 2020».
> Entre el 21 de febrero y el 16 de marzo de 2020, la venta de volatilidad sin freno cayó 62%. La misma estrategia, con un freno de cinco números, cayó 26%. Hoy abro ese freno y te explico qué hace cada número.

**[0:18 — Qué experimento es]** (pantalla: rótulo «Experimento #70 · ATLAS Lab» y el nombre debajo)
BOCETO: rótulo con el número 70 y el nombre «Gestión de riesgo por estrategia (no todo el capital)»; logo en la esquina.
> Este es el experimento #70 de ATLAS Lab: gestión de riesgo por estrategia. Todos los resultados están en la página del experimento.

**[0:40 — Número 1: 10% de volatilidad]** (pantalla: dos líneas, una calmada y otra nerviosa; la etiqueta «volatilidad anual»)
BOCETO: dos curvas, una con oscilaciones pequeñas y otra con oscilaciones grandes; una banda marcada «objetivo: 10%».
> La volatilidad es cuánto se mueve una estrategia. El freno apunta a una volatilidad anual de 10%: si la estrategia se está moviendo más que eso, reduce la apuesta; si se mueve menos, la aumenta. Es una forma de que cada día cuente el mismo riesgo, sea calmo o violento.

**[1:15 — Número 2: 60 días, con un día de rezago]** (pantalla: ventana de 60 casillas que se desliza; la de hoy en gris)
BOCETO: ventana deslizante de 60 días que termina ayer; la casilla de hoy atenuada con el texto «no se usa».
> Segundo número: cómo se mide esa volatilidad. Con los últimos 60 días, hasta ayer. El rezago de un día es la regla de siempre en ATLAS: la señal de hoy se calcula con datos que ya existían. Tiene un costo: el freno mira el pasado, así que reacciona cuando la volatilidad ya subió.

**[1:50 — Número 3: tope de 1.5x]** (pantalla: acelerador con la zona 0 a 1.5 marcada)
BOCETO: pedal con una escala de 0 a 1.5; una raya roja en 1.5 con la etiqueta «tope».
> Tercer número: el apalancamiento puede ir de 0 a 1.5 veces. Cuando la estrategia está en calma, el freno puede subirla hasta 1.5x; cuando está agitada, la baja hacia cero. Sin ese tope, un periodo muy tranquilo llevaría la apuesta a niveles peligrosos.

**[2:20 — Números 4 y 5: −15% y la mitad]** (pantalla: curva de capital con una línea al −15% desde su máximo; la exposición se parte en dos)
BOCETO: curva de capital; al cruzar la línea del −15%, una barra de exposición se parte a la mitad; texto «−15% → 50%».
> Cuarto y quinto: el freno por drawdown. El drawdown es la caída desde el máximo. Si el capital cae más de 15% desde su máximo, la exposición baja a la mitad y se queda así mientras siga más de 15% por debajo. Es un cinturón de seguridad: no evita el golpe, lo amortigua.

**[3:00 — La prueba: marzo de 2020]** (pantalla: tabla con las curvas del VRP con y sin gestión)
BOCETO: dos curvas (`series/extra-v70.json[0]` y `[1]`) sombreadas del 21 de febrero al 16 de marzo; contadores que bajan; sello «bruto, VRP aproximado».
| Medida (2014–2024) | VRP sin freno | VRP con freno |
|---|---|---|
| Sharpe | 1.36 | 3.38 |
| Drawdown máximo (21 feb – 16 mar de 2020) | −62% | −26% |
| Retorno del año 2020 | −14.6% | +12.8% |
> Fíjate en que el peor momento de las dos curvas es el mismo: del 21 de febrero al 16 de marzo de 2020, unas semanas. Sin freno, −62%. Con freno, −26%. Y en el año completo, la versión sin freno perdió 14.6% y la gestionada ganó 12.8%. El Sharpe, que mide cuánto rindes por cada unidad de riesgo, pasa de 1.36 a 3.38.

**[3:50 — Por qué funcionó aquí, y dónde no]** (pantalla: dos dibujos: «peligro = volatilidad» y «peligro = dirección del mercado»)
BOCETO: surfista en olas altas (verde) y barco bajo la tormenta (rojo); el bot con su Sharpe de 0.17 → −0.02 y drawdown −14% → −22%.
> Funcionó porque en esta estrategia el peligro es justamente la volatilidad: cuando el mercado se agita, la apuesta baja. En el bot del mismo experimento, el peligro es que el mercado caiga, y el mismo freno no ayuda: el Sharpe baja de 0.17 a −0.02 y la peor caída, de −14% a −22%. El freno decide cuánto riesgo tomas; no decide si hay ventaja.

**[4:30 — El otro lado: cuando se calma]** (pantalla: barras de años; la de 2021 con «+121.6%» marcada con interrogación)
BOCETO: barras anuales de la curva con freno, todas verdes; la de 2021 destacada con un «?»; sello «bruto».
> Un freno que reduce la apuesta en la tormenta la sube cuando todo se calma, hasta 1.5x. Por eso en 2021 la versión gestionada ganó 121.6%, contra 74.8% de la otra, y por eso sus 11 años de 2014 a 2024 salen positivos. Un +121.6% en un año no se celebra, se cuestiona: la curva es bruta, con un VRP aproximado con el VIX y sin costos de opciones.

**[5:05 — Con tu capital]** (pantalla: tarjeta «Con tu capital» con aviso ámbar)
BOCETO: sello «BRUTO · VRP APROXIMADO · HASTA 1.5x»; el número de $100,000 se atenúa con «no es una expectativa».
> Con $100,000, entre 2014 y 2024, la curva con freno termina en +$2,742,858, contra +$221,217 de comprar y esperar. Si ves millones en una simulación sin costos, la reacción correcta es la sospecha. Sirve para ver el mecanismo del freno, no para esperar ese resultado.

**[5:35 — Preguntas de un escéptico]** (pantalla: tres tarjetas: «¿otros números?», «¿con costos?», «¿por qué empeora el bot?»)
BOCETO: tres tarjetas que se voltean con «no probado», «sería menor» y «no separa la causa».
> Preguntas que me haría un escéptico. ¿Y si cambio los cinco números? No lo probé: usé 10%, 60 días, 1.5x, −15% y la mitad. ¿Y con costos? Las series son brutas; el efecto real sería menor, y el freno, al mover la exposición, también paga por operar. ¿Y por qué empeora el bot? El experimento mide que empeora, pero no separa la causa.

**[6:00 — Ficha del experimento #70]** (pantalla: tarjeta con la ficha y la URL abajo)
BOCETO: tarjeta con cinco líneas que entran con tick y, al final, la URL resaltada en verde.
> Ficha del experimento 70. Estado: parcial. Cifras clave: VRP, Sharpe de 1.36 a 3.38 y drawdown de −62% a −26%; bot, Sharpe de 0.17 a −0.02. Lo que decidió: resultado mixto, series brutas y sin prueba fuera de muestra. Lección: antes de poner un freno, hay que saber de dónde viene el riesgo. Revísalo completo en atlas-lab-one.vercel.app/e/70.

**[6:30 — Cierre]**
BOCETO: tablero de cinco perillas; logo.
> Todos los datos en atlas-lab-one.vercel.app, experimento 70. El trading no se promete: se prueba. Contenido educativo, no es asesoría financiera.

---

## SHORT (9:16, ≈ 50 s)

**[0-3 s]** (boceto: dos curvas en marzo de 2020, roja a −62% y verde a −26%; b-roll de tormenta, kb=in; golpe de bajo)
> Cinco números forman este freno de riesgo. En marzo de 2020 recortó la caída de −62% a −26%.

**[3-14 s]** (boceto: tablero con cinco perillas que se encienden una a una; ticks)
> Uno: apunta a 10% de volatilidad. Dos: la mide en 60 días, hasta ayer. Tres: tope de 1.5 veces de apalancamiento.

**[14-24 s]** (boceto: curva de capital con línea al −15%; exposición partida a la mitad)
> Cuatro y cinco: si el capital cae 15% desde su máximo, la exposición baja a la mitad.

**[24-36 s]** (boceto: barras de 2020: −14.6% contra +12.8%; sello «bruto»)
> En venta de volatilidad, ese año: sin freno, −14.6%; con freno, +12.8%. En bruto, con una aproximación del VRP.

**[36-44 s]** (boceto: bot con barras rojas −14% → −22%; texto «no es magia»)
> Pero el mismo freno empeoró al bot: su peor caída pasó de −14% a −22%. El freno decide cuánto riesgo tomas.

**[44-50 s]** (boceto: texto «Experimento #70 completo en el enlace»; logo)
> Video completo en el canal y experimento #70 completo en el enlace. ¿Cuál de los cinco números ajustarías?

Gancho alterno A: «−62% contra −26% en 24 días de 2020: la misma estrategia, con y sin freno.» · B: «Un freno de riesgo se resume en cinco números.»

## Descripción de YouTube — video largo
https://atlas-lab-one.vercel.app/e/70?utm_source=youtube&utm_medium=video&utm_campaign=exp070-t3
Ficha: experimento #70, gestión de riesgo por estrategia. Estado: parcial. VRP: Sharpe 1.36 → 3.38 y drawdown −62% → −26% (bruto, aproximación con el VIX); bot: Sharpe 0.17 → −0.02.
Los cinco números del freno (10% de volatilidad, ventana de 60 días, tope de 1.5x, freno al −15% y la mitad de exposición) y el caso de marzo de 2020 con y sin freno.
Contenido educativo. No es asesoría financiera ni recomendación de inversión.

## Descripción de YouTube — Short
https://atlas-lab-one.vercel.app/e/70?utm_source=youtube&utm_medium=short&utm_campaign=exp070-t3
Ficha: experimento #70, parcial. Marzo de 2020: −62% sin freno, −26% con freno (bruto). Contenido educativo, no es asesoría financiera.

## Capítulos
0:00 Gancho · 0:18 Qué experimento es · 0:40 Número 1: 10% de volatilidad · 1:15 Número 2: 60 días · 1:50 Número 3: tope de 1.5x · 2:20 Números 4 y 5: −15% y la mitad · 3:00 La prueba: marzo de 2020 · 3:50 Por qué funcionó aquí, y dónde no · 4:30 El otro lado: cuando se calma · 5:05 Con tu capital · 5:35 Preguntas de un escéptico · 6:00 Ficha del experimento #70 · 6:30 Cierre

## Etiquetas
freno de riesgo, volatilidad objetivo, vol targeting, drawdown, marzo 2020, VRP, gestión de riesgo, apalancamiento, cómo funciona, backtest, trading con datos, ATLAS Lab

## Rúbrica (autoevaluación, 1–5)
| Pieza | hook_0_3s | ritmo | promesa_cumplida | potencial_loop | claridad_no_traders | honestidad_atlas | audio | cta | Promedio |
|---|---|---|---|---|---|---|---|---|---|
| Largo | 5 | 4 | 5 | 4 | 4 | 5 | 4 | 4 | 4.38 |
| Short | 5 | 4 | 5 | 4 | 4 | 5 | 4 | 4 | 4.38 |

Hook ≥ 4 ✓ · honestidad 5 ✓. Punto débil: las fechas del 21 de febrero y el 16 de marzo de 2020 y los retornos por año salen de la curva bruta (no de la ficha del sitio); el guion repite «bruto / aproximado» y marca el +121.6% de 2021 como señal de cautela.

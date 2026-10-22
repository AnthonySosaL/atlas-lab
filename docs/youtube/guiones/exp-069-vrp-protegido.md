# Experimento #69 — VRP protegido (cobertura de cola)

Estado del guion: **BORRADOR — pendiente de aprobación**
Estado del experimento: **parcial** (Sharpe 1.85 y peor día de −7.8%, pero el costo del put es un supuesto y falta el triple test con datos de opciones reales)
Serie: F (anomalías y estacionalidad). Continúa el #64; sigue en #70.
Datos usados: `experiments.json` (v=69: verdict, analysis, notes, kpis, metrics, params_view, capital) · `exp_details.json` (extra-v69: algo, code, filters) · `series/extra-v69.json` ([0] VRP protegido, bruto; [1] S&P 500 comprar y esperar) · tabla «Con tu capital» (docs/youtube, archivo de capital, fila #69; el $10k se calcula con la misma regla de la tarjeta del sitio).

## Títulos
1. Un seguro para la estrategia más riesgosa: −26.9% a −7.8%
2. VRP protegido: Sharpe 1.85, pero falta lo más importante
3. Vender volatilidad con cobertura: lo que sí y lo que no está probado

## Miniatura
Fondo `#09090b`. Una barra roja `#e11d2a` que se desploma y, justo encima, un paracaídas blanco que la frena; texto «CON PARACAÍDAS». Logo ATLAS esquina inferior derecha. (Sin cifras en la imagen: ya están en el título.)

---

## VIDEO LARGO (≈ 7½ min)

**[0:00 — Gancho]** (pantalla: dos barras de «peor día»: roja larga «−26.9%» y roja corta «−7.8%»; el paracaídas aparece entre ambas)
BOCETO: la barra larga cae; al entrar el seguro la barra se acorta con un whoosh; golpe de bajo en −7.8%.
> Esta estrategia puede perder 26.9% en un solo día. Con un seguro barato, el peor día fue −7.8% y el Sharpe subió de 1.56 a 1.85. Suena demasiado bien, así que lo primero que voy a decirte es lo que falta: precios de opciones reales. Este experimento quedó en parcial, y te explico por qué.

**[0:25 — Recordatorio: la prima de volatilidad]** (pantalla: curva `series/extra-v69.json[0]` subiendo y una caída marcada «12-mar-2020» de los videos anteriores)
BOCETO: la curva del VRP sube en escalones pequeños y cae en un solo escalón rojo marcado «12-mar-2020»; texto «Sharpe 1.56 · cola extrema».
> Recordemos de qué va esto. En el video sobre la prima de riesgo de volatilidad vimos que vender volatilidad del S&P 500 es como vender seguros contra caídas: cobras una prima pequeña la mayoría de los días y, cuando llega el desastre, pagas. En bruto, esa estrategia daba un Sharpe de 1.56, pero tenía una cola extrema: un solo día, el 12 de marzo de 2020, bastaba para borrar años de ganancia. Sin cobertura, ese desastre puede liquidar la cuenta. La pregunta de hoy: ¿y si, al mismo tiempo, compro un seguro propio?

**[1:00 — La cobertura: un put]** (pantalla: dibujo de un put como paraguas; esquema «cobro prima − pago pérdida con tope»)
BOCETO: línea de pérdida que crece hasta chocar con un techo punteado en «6%»; al lado, una etiqueta «cuesta 12% de la prima».
> Un put es un contrato que gana valor cuando el mercado se desploma: funciona como un seguro. La idea es comprar uno muy lejano, que solo empieza a pagar cuando el mercado cae muchísimo, y por eso resulta barato. En este experimento el put pone un tope a la pérdida de cada día, equivalente a un movimiento de 6%, y cuesta el 12% de la prima que cobro. Con el put, la pérdida máxima de un día deja de ser ilimitada: queda definida de antemano.

**[1:40 — Cómo se arma la estrategia]** (pantalla: balanza con «prima cobrada, menos costo del put» a un lado y «pérdida con tope» al otro)
BOCETO: balanza con tres piezas: «+ prima del VIX de ayer», «− costo del put (12%)», «− pérdida del día con tope»; texto «tamaño: 15% de volatilidad».
> En cuentas simples: cada día cobro la prima que anunciaba el VIX de ayer, menos lo que me cuesta el put, y pago la varianza que realmente se movió hoy, pero con un tope. El tamaño de la posición se fija para que la versión sin cobertura tenga 15% de volatilidad anual, así comparo manzanas con manzanas. Probé cuatro niveles de cobertura, desde ninguna hasta una fuerte, y el que destaco es el intermedio: put de 6%, con costo del 12%.

**[2:10 — Cómo lo probé, y qué no hice]** (pantalla: checklist de filtros con los valores reales)
BOCETO: ✓ Señal de ayer (shift 1) · ✓ Sharpe mayor que sin cobertura (1.56) y que comprar y esperar (0.80) · — Costos: el put es un supuesto, sin bid-ask · — Fuera de muestra: no aplicado · — Deflated Sharpe: no aplicado · — Multiplicidad: no ajustada.
> Es una aproximación con el VIX, no con opciones reales, de 2012 a 2024, y la señal es siempre la de ayer. Y tres limitaciones que quiero decir en voz alta. El costo del put es un supuesto: no incluye la diferencia entre el precio de compra y el de venta de las opciones. No hay prueba fuera de muestra ni Deflated Sharpe. Y comparé cuatro niveles de cobertura y destaqué el de mejor Sharpe, sin ajustar por haber probado cuatro: si pruebas varias versiones y destacas la mejor, esa mejor tiende a estar inflada. Eso infla un poco la cifra.

**[2:55 — Resultados: el peor día y el Sharpe]** (pantalla: tabla de dos columnas, «sin cobertura» y «con cobertura», con barras)
BOCETO: las barras de la columna «con cobertura» se acortan en rojo y la del Sharpe crece en verde; sello «aproximación, no opciones reales».
| Medida (2012–2024) | Sin cobertura | Con cobertura |
|---|---|---|
| Sharpe | 1.56 | 1.85 |
| Peor día | −26.9% | −7.8% |
| Drawdown máximo | −62% | −32% |
| Con apalancamiento ×4 | −108% | −31% |
> El Sharpe sube de 1.56 a 1.85 y esto parece una paradoja, porque el seguro cuesta dinero. La explicación es que quitar la bomba baja la volatilidad: aunque ganas un poco menos por día, tu resultado es mucho más estable. Y el peor día pasa de −26.9% a −7.8%.

**[3:15 — Resultados: la caída y el apalancamiento]** (pantalla: dos curvas de capital, una cae al abismo y otra con piso)
BOCETO: dos curvas de capital con apalancamiento ×4: la roja se desploma bajo cero (−108%) y la verde se frena en −31%; texto «×4».
> El drawdown máximo, la peor caída desde un máximo, pasa de −62% a −32%. Y la prueba más reveladora: con apalancamiento ×4, o sea, multiplicando por cuatro la apuesta, sin cobertura la cuenta se liquida, −108%, y con cobertura queda en −31%. Para ubicarnos, comprar y esperar el S&P 500 da un Sharpe de 0.80, aunque esa no es una comparación limpia: esto es una aproximación bruta.

**[3:45 — El backtest]** (pantalla: cuatro tarjetas: +18.4% al año, 9% de volatilidad, 92% de años positivos, peor año −6% en 2018)
BOCETO: cuatro tarjetas que entran con tick: +18.4% al año, 9% de volatilidad, 92% de años positivos y peor año −6% (2018); sello «aproximación».
> En el backtest, la versión protegida crece 18.4% al año, con una volatilidad de 9%, 92% de años positivos y un peor año de −6%, en 2018. Son números atractivos, y justamente por eso hay que desconfiar de ellos: están calculados con un seguro cuyo precio es un supuesto y sin los costos reales de operar opciones.

**[4:05 — Cómo leer el 18.4% anual]** (pantalla: curva compuesta año a año; rótulo «crecimiento anual = promedio compuesto»)
BOCETO: una bola de nieve que crece año a año (interés compuesto) con el rótulo «crecimiento anual = promedio compuesto»; el 18.4% se parte por la mitad hasta «~+9%».
> Una aclaración sobre el 18.4% anual. Es el crecimiento anual del capital que daría la curva si la estrategia se hubiera mantenido todos esos años y lo ganado se hubiera ido reinvirtiendo. No es lo que cobras cada año: es un promedio compuesto. Y es un resultado bruto: el análisis lo recorta a la mitad por fricciones, y con razón, porque el seguro de esta simulación se compra a un precio que yo fijé, no a uno que el mercado me ofreció.

**[4:40 — El escenario realista]** (pantalla: barra del +18.4% partida por la mitad: «~+9%»; dos tarjetas de dinero)
BOCETO: la barra de 18.4% se parte por la mitad; dos tarjetas de dinero («$10k → ~$900 al año» y «$50k → ~$4,600 al año») y un sello «supuesto, no medición».
> El propio análisis recorta el resultado a la mitad por fricciones: unos +9% al año. Esa mitad es un supuesto, no una medición. En dinero: $10,000 dejarían unos $900 al año, y $50,000, unos $4,600. No es hacerse rico: es entre 9% y 18% anual, aguantando caídas de −32%, y requiere una cuenta de opciones, no el bot de CFD.

**[5:05 — Con tu capital]** (pantalla: tarjeta «Con tu capital» con el aviso ámbar; curva verde contra la gris)
BOCETO: sello «BRUTO · SIN COSTOS REALES» sobre la tarjeta; el número de $100,000 aparece atenuado con la leyenda «no es una expectativa».
> Con $10,000, la curva de esta aproximación terminó en +$78,019; con $100,000, en +$780,194, contra +$347,885 de comprar y esperar. La peor caída fue de −$3,234 con 10,000 y −$32,341 con 100,000, un −32.3%. Esa curva es bruta: el precio del put es un supuesto y no incluye el diferencial de opciones reales. Por eso el propio experimento dice que lo realista es la mitad, y por eso esta cifra no es una expectativa.

**[5:40 — Preguntas de un escéptico]** (pantalla: tres tarjetas: «¿put más caro?», «¿otro futuro?», «¿suerte al elegir?»)
BOCETO: tres tarjetas que se voltean: «¿put más caro?» → mejora menor; «¿otro futuro?» → solo 2012–2024; «¿suerte al elegir?» → sin ajustar.
> Preguntas que me haría un escéptico. ¿Y si el put costara más del 12% de la prima? No lo medí con precios reales; con un costo mayor, la mejora sería menor. ¿Y si la volatilidad se comportara distinto en el futuro? Esta es una aproximación con el VIX, de 2012 a 2024, un periodo que incluye el desplome de 2020, pero no todos los escenarios posibles. ¿Y si solo tuve suerte al elegir el mejor de los cuatro niveles? Es una posibilidad real, y por eso lo dije antes: no ajusté por haber probado cuatro.

**[6:20 — Por qué es «parcial»]** (pantalla: piezas que faltan, como un rompecabezas: «precios de opciones reales», «triple test», «cuenta de opciones»)
BOCETO: rompecabezas con cuatro piezas faltantes («precios de opciones reales», «diferencial compra-venta», «fuera de muestra», «Deflated Sharpe»); sello ámbar «PARCIAL».
> Es parcial porque funciona como idea, pero no está probada. Faltan precios reales de opciones, el diferencial de compra y venta, la prueba fuera de muestra y el Deflated Sharpe. Comprar un put lejano convierte una venta de volatilidad peligrosa en un riesgo definido: deja de liquidar la cuenta. Es lo más prometedor de los primeros 69 experimentos, pero prometedor no es probado.

**[6:45 — Resumen]** (pantalla: tarjeta con las cifras clave: 1.85 vs 1.56 · −7.8% vs −26.9% · −32% vs −62% · 18.4% · ~9%)
BOCETO: tarjeta con cinco cifras: 1.85 contra 1.56, −7.8% contra −26.9%, −32% contra −62%, 18.4% y ~9%; estado «parcial».
> Resumen en cinco cifras. Sharpe de 1.85 contra 1.56 sin cobertura. Peor día de −7.8% contra −26.9%. Drawdown máximo de −32% contra −62%. Crecimiento de 18.4% al año en el papel, unos 9% en un escenario realista. Y un estado: parcial, porque el precio del seguro es un supuesto.

**[7:05 — Cierre]**
BOCETO: el paracaídas queda abierto sobre la barra y debajo el texto «falta la prueba con opciones reales»; cierre con el logo.
> Mi conclusión: vale la pena validarlo con datos de opciones reales, y hasta entonces no es una estrategia que alguien deba operar. Todos los datos en atlas-lab-one.vercel.app, experimento 69. El trading no se promete: se prueba. Contenido educativo, no es asesoría financiera.

---

## SHORT (9:16, ≈ 47 s)

**[0-3 s]** (boceto: barra roja «−26.9%» que se acorta a «−7.8%» con un paracaídas; b-roll de paracaídas abriéndose, kb=in; golpe de bajo)
> Un seguro bajó el peor día de −26.9% a −7.8%.

**[3-15 s]** (boceto: póliza y termómetro del VIX; texto «vendes seguros + compras uno»; whoosh)
> La estrategia vende la prima de volatilidad del S&P 500: cobras cada día, y un día malo puede liquidar la cuenta. La cobertura es un put lejano que cuesta el 12% de lo que cobras.

**[15-24 s]** (boceto: tabla animada: Sharpe 1.56 → 1.85, drawdown −62% → −32%; ticks)
> En el papel, el Sharpe sube de 1.56 a 1.85 y la peor caída baja de −62% a −32%. Crece 18.4% al año, con 92% de años positivos.

**[24-37 s]** (boceto: sello ámbar «APROXIMACIÓN CON EL VIX»; mitad de la barra tachada: «~+9% realista»; b-roll de tormenta sobre ciudad, kb=out)
> Ojo: el precio del seguro es un supuesto y no hay opciones reales. El propio análisis estima que lo realista es la mitad, unos 9% al año. Y elegí el mejor de cuatro niveles sin ajustar por eso.

**[37-42 s]** (boceto: sello «PARCIAL» en ámbar; piezas de rompecabezas que faltan)
> Veredicto: parcial. Falta la prueba completa, con precios de opciones reales. Video completo en el canal.

**[42-47 s]** (boceto: pregunta «¿cuánto baja el peor día?»; logo)
> ¿Cuánto baja el peor día de la estrategia más peligrosa si le pones un seguro?

Gancho alterno A: «Sharpe 1.85 y peor día de −7.8%: lo que falta saber.» · B: «Su peor día pasó de −26.9% a −7.8%… en el papel.»

## Descripción (YouTube)
VRP protegido: se vende la prima de volatilidad del S&P 500 y se compra un put lejano y barato (cuesta el 12% de la prima) que limita la pérdida. En el backtest 2012–2024: Sharpe 1.85 (1.56 sin cobertura), peor día de −7.8% (−26.9% sin cobertura) y drawdown máximo de −32% (−62%). Resultado parcial: el costo del put es un supuesto y falta el triple test con opciones reales.

Datos completos: https://atlas-lab-one.vercel.app (experimento #69)

Contenido educativo. No es asesoría financiera ni recomendación de inversión.

Capítulos: 0:00 Gancho · 0:25 Recordatorio: la prima de volatilidad · 1:00 La cobertura: un put · 1:40 Cómo se arma la estrategia · 2:10 Cómo lo probé, y qué no hice · 2:55 Resultados: el peor día y el Sharpe · 3:15 Resultados: la caída y el apalancamiento · 3:45 El backtest · 4:05 Cómo leer el 18.4% anual · 4:40 El escenario realista · 5:05 Con tu capital · 5:40 Preguntas de un escéptico · 6:20 Por qué es «parcial» · 6:45 Resumen · 7:05 Cierre

Etiquetas: VRP protegido, cobertura de cola, put, vender volatilidad, VIX, S&P 500, riesgo de cola, drawdown, Sharpe ratio, opciones, trading con datos, ATLAS Lab

## Rúbrica (autoevaluación)
| Criterio | Short | Largo |
|---|---|---|
| hook_0_3s | 5 | 5 |
| ritmo | 4 | 4 |
| promesa_cumplida | 5 | 5 |
| potencial_loop | 4 | 3 |
| claridad_no_traders | 4 | 3 |
| honestidad_atlas | 5 | 5 |
| audio | 4 | 4 |
| cta | 4 | 4 |
| **Promedio** | **4.38** | **4.13** |

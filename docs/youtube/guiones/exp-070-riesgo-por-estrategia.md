# Experimento #70 — Gestión de riesgo por estrategia (no todo el capital)

Estado del guion: **BORRADOR — pendiente de aprobación**
Estado del experimento: **parcial** (la gestión de riesgo transforma el VRP, Sharpe 1.36 → 3.38, pero empeora al bot, 0.17 → −0.02: depende de la estrategia)
Serie: E (gestión de riesgo). Usa el VRP de #64/#69.
Datos usados: `experiments.json` (v=70: verdict, analysis, notes, kpis, metrics, params_view, capital) · `exp_details.json` (extra-v70: algo, code, filters) · `series/extra-v70.json` ([0] VRP con gestión, [1] VRP sin gestión, [2] sin estrategia) · tabla «Con tu capital» (docs/youtube, archivo de capital, fila #70; el $10k se calcula con la misma regla de la tarjeta del sitio).

## Títulos
1. Un freno de riesgo: Sharpe de 1.36 a 3.38 y de 0.17 a −0.02
2. Gestión de riesgo: de Sharpe 1.36 a 3.38 (y por qué falla en el bot)
3. ¿La gestión de riesgo vuelve buena a cualquier estrategia? Lo probé

## Miniatura
Fondo `#09090b`. Un pedal de freno grande en el centro; a la izquierda una flecha verde `#22c55e` hacia arriba, a la derecha una flecha roja `#e11d2a` hacia abajo. Texto blanco: «¿SIRVE PARA TODO?» (3 palabras). Dos cifras pequeñas como elemento gráfico (3.38 en verde, −0.02 en rojo). Logo ATLAS esquina inferior derecha.

---

## VIDEO LARGO (≈ 7 min)

**[0:00 — Gancho]** (pantalla: dos tarjetas lado a lado: «VRP 1.36 → 3.38» en verde y «Bot 0.17 → −0.02» en rojo; un pedal de freno pisa las dos)
BOCETO: los números cambian al pisar el freno; golpe de bajo cuando el del bot cruza el cero.
> Apliqué el mismo freno de riesgo a tres estrategias. En una, el Sharpe pasó de 1.36 a 3.38. En otra, bajó de 0.17 a −0.02. La gestión de riesgo no es magia: ayuda mucho a unas estrategias y a otras las empeora. Te cuento cuáles y por qué.

**[0:20 — La pregunta]** (pantalla: tres cajas de dinero; en una, todo el capital apilado; en otra, solo lo necesario)
BOCETO: tres cajas de dinero; la que tiene todo el capital apilado se tambalea y la que tiene solo lo necesario queda estable; texto «¿todo el capital o solo lo necesario?».
> Cuando tienes una estrategia, hay una tentación: meter todo el capital en ella. La pregunta de hoy es si mejora cuando le doy a cada estrategia su propia gestión de riesgo, en vez de dejarla correr con todo. Es una pregunta útil porque la gestión de riesgo se vende como una solución universal: «controla tu volatilidad y todo irá mejor». Veamos si es cierto, con datos, estrategia por estrategia.

**[0:50 — Las tres estrategias]** (pantalla: tres tarjetas: «bot», «cesta 1x» y «VRP sin cobertura»)
BOCETO: bot = cesta con un 2x y un filtro de aversión al riesgo; cesta 1x = la misma cesta sin apalancar; VRP = curva que sube despacio con un precipicio.
> Probé tres flujos de retornos, de 2014 a 2024. El primero es el bot: la cesta con apalancamiento de 2x y un filtro que lo aparta cuando hay aversión al riesgo. El segundo es la misma cesta a 1x, sin apalancamiento. Y el tercero es la venta de la prima de volatilidad sin cobertura, el VRP de los videos anteriores: una estrategia que gana poco la mayoría de los días y arriesga una pérdida enorme muy de vez en cuando.

**[1:25 — El freno, pieza 1: volatilidad objetivo]** (pantalla: un termómetro de volatilidad y un acelerador que se ajusta de 0 a 1.5x)
BOCETO: termómetro de volatilidad de 60 días y un pedal que sube o baja el apalancamiento entre 0 y 1.5x; texto «objetivo: 10%».
> La gestión tiene dos piezas. La primera es la volatilidad objetivo de 10% anual. Mido cuánto se ha movido la estrategia en los últimos 60 días, con un día de rezago, y ajusto el apalancamiento entre 0 y 1.5x para mantenerme cerca de ese 10%. Si la estrategia se vuelve más nerviosa, reduzco la apuesta; si se calma, la aumento, siempre con ese tope de 1.5x.

**[1:50 — El freno, pieza 2: drawdown]** (pantalla: una curva de capital con una línea al −15% desde su máximo; al cruzarla la exposición baja a la mitad)
BOCETO: curva de capital con una línea al −15% desde su máximo; al cruzarla, la exposición baja a la mitad (barra que se parte); texto «−15% → la mitad».
> La segunda pieza es un freno por drawdown. El drawdown es la caída desde el máximo que ha tenido tu capital. Si mi capital cae más de 15% desde su pico, reduzco la exposición a la mitad, y la mantengo así mientras siga más de 15% por debajo de ese máximo. Es una especie de cinturón de seguridad: no evita el golpe, pero lo amortigua.

**[2:20 — Cómo lo probé]** (pantalla: checklist de filtros con los valores reales)
BOCETO: ✓ Volatilidad del día previo (shift 1) · ≈ Resultado mixto · — Costos: no aplicado (series brutas) · — Fuera de muestra: no aplicado · — Deflated Sharpe: no aplicado. Sello «VRP: aproximación».
> Todo es bruto: las series de la cesta y del VRP no restan costos, y el VRP es una aproximación con el VIX, no con opciones reales. La señal de volatilidad es la del día previo, para no mirar el futuro. No hay prueba fuera de muestra ni Deflated Sharpe. Úsalo para entender el mecanismo, no como una promesa. Comparo, para cada flujo, el Sharpe y la peor caída con y sin gestión. El Sharpe mide cuánto rindes por cada unidad de riesgo.

**[2:55 — Resultado: el VRP]** (pantalla: tabla con barras antes y después)
BOCETO: para cada fila, barra gris «sin gestión» y barra de color «con gestión»; verde si mejora, roja si empeora.
| Flujo (2014–2024) | Sin gestión | Con gestión |
|---|---|---|
| VRP, Sharpe | 1.36 | 3.38 |
| VRP, drawdown máximo | −62% | −26% |
| Bot, Sharpe | 0.17 | −0.02 |
| Bot, drawdown máximo | −14% | −22% |
| Cesta 1x, Sharpe | 0.39 | 0.28 |
> En el VRP el efecto es espectacular: el Sharpe sube de 1.36 a 3.38 y el drawdown baja de −62% a −26%. Ojo con ese 3.38: es una aproximación bruta, sin costos. No es un número para creer; es un número para entender el mecanismo.

**[3:15 — Resultado: el bot y la cesta]** (pantalla: barras rojas del bot; la de 2022 en verde)
BOCETO: barras del bot en rojo (Sharpe 0.17 → −0.02; drawdown −14% → −22%) y una barra verde aparte para 2022 (−13% → −10%); cesta a 1x: 0.39 → 0.28.
> En el bot pasa lo contrario. El Sharpe baja de 0.17 a −0.02, es decir, deja de tener un rendimiento positivo por unidad de riesgo. Y su drawdown máximo de 2014 a 2024 sube de −14% a −22%: en el conjunto del periodo, la peor caída empeoró. Eso sí, en 2022 el freno ayudó: recortó su caída de −13% a −10%. En la cesta a 1x, el Sharpe baja de 0.39 a 0.28: menos ganancia por unidad de riesgo, no más.

**[3:45 — Por qué depende de la estrategia]** (pantalla: dos dibujos: «peligro = volatilidad» y «peligro = que el mercado caiga»)
BOCETO: dos dibujos: un surfista en olas altas («peligro = volatilidad») y un barco bajo la tormenta («peligro = que el mercado caiga»); definiciones de beta y alfa en pantalla.
> En el VRP, el peligro es justamente la volatilidad: la estrategia gana cuando el mercado está calmado y pierde cuando se agita. Dimensionar por volatilidad ataca exactamente ese riesgo: cuando el mercado se agita, la apuesta se reduce. Por eso la gestión es transformadora. En las estrategias de beta, la ganancia que viene de estar en el mercado, no ayuda e incluso empeora. La verdad de fondo: la gestión de riesgo controla cuánto pierdes, no si tienes ventaja. No convierte beta, que es seguir al mercado, en alfa, que es una ventaja propia.

**[4:25 — Cómo leer un Sharpe de 3.38]** (pantalla: medidor con el 3.38 y tres sellos: «aproximación», «sin costos», «sin prueba fuera de muestra»)
BOCETO: medidor con el 3.38 y tres sellos que se pegan uno a uno: «aproximación», «sin costos», «sin prueba fuera de muestra».
> Un Sharpe de 3.38 suena extraordinario, y por eso hay que ser desconfiado. Viene de una aproximación del VRP con datos del VIX, sin costos de opciones y sin prueba fuera de muestra. Es útil para ver el mecanismo: dimensionar por volatilidad reduce justo el riesgo que más daña a esta estrategia. Pero no es un número que alguien pueda esperar obtener en la práctica.

**[4:55 — Con tu capital]** (pantalla: tarjeta «Con tu capital» con el aviso ámbar; curva del VRP con gestión, `series/extra-v70.json[0]`)
BOCETO: sello «BRUTO · VRP APROXIMADO · HASTA 1.5x»; el número de $100,000 se atenúa con «no es una expectativa».
> Veamos qué significa en dinero, para el VRP con gestión, de 2014 a 2024. Con $10,000, la curva terminó en +$274,286, y comprar y esperar, en +$22,122. Con $100,000: +$2,742,858 contra +$221,217. La peor caída desde un máximo: −$2,592 con 10,000 y −$25,923 con 100,000, un −25.9%. Esta curva es bruta, usa un VRP aproximado y apalancamiento de hasta 1.5x: sirve para ver el efecto del freno, no para esperar ese resultado. Si ves un número de millones en una simulación sin costos, la reacción correcta es la sospecha.

**[5:30 — Lo que me llevo]** (pantalla: dos frases en pantalla, una a la vez)
BOCETO: dos frases que aparecen una a una en pantalla: «de dónde viene el riesgo» y «el freno decide cuánto riesgo, no si hay ventaja».
> Dos lecciones. Primera: antes de poner un freno, hay que saber de dónde viene el riesgo de la estrategia. Si viene de la volatilidad, un freno de volatilidad ayuda. Si viene de la dirección del mercado, no. Segunda: ningún freno convierte una estrategia sin ventaja en una con ventaja; solo decide cuánto riesgo tomas.

**[5:55 — Preguntas de un escéptico]** (pantalla: tres tarjetas: «¿otro freno?», «¿con costos?», «¿por qué empeora el bot?»)
BOCETO: tres tarjetas que se voltean: «¿otro freno?» → no probado; «¿con costos?» → sería menor; «¿por qué empeora el bot?» → no separa la causa.
> Preguntas que me haría un escéptico. ¿Y si el freno fuera de otro porcentaje en vez de 15%? No lo probé: usé 15% y una volatilidad objetivo de 10%. ¿Y con costos? Las series son brutas, así que el efecto real sería menor, y el freno, al mover la exposición, también tiene su propio costo de operar. ¿Y por qué el bot empeora? El experimento mide que empeora, pero no separa la causa; lo que sí dice es que la gestión de riesgo no es universal.

**[6:30 — Resumen]** (pantalla: tarjeta con las cifras clave: VRP 1.36 → 3.38 · −62% → −26% · bot 0.17 → −0.02 · −14% → −22% · cesta 0.39 → 0.28)
BOCETO: tarjeta con las cifras clave en tres filas (VRP, bot, cesta 1x) con flechas verde o roja.
> Resumen en tres bloques de cifras. VRP: Sharpe de 1.36 a 3.38 y drawdown de −62% a −26%. Bot: Sharpe de 0.17 a −0.02 y drawdown de −14% a −22%. Cesta a 1x: Sharpe de 0.39 a 0.28. La conclusión: depende de la estrategia.

**[6:50 — Conclusión]**
BOCETO: el pedal de freno con las dos flechas (verde para el VRP, roja para el bot); cierre con el logo.
> Resultado parcial. La gestión de riesgo no es magia universal: transforma al VRP y empeora al bot. Controla cuánto pierdes, no si tienes ventaja. Todos los datos en atlas-lab-one.vercel.app, experimento 70. El trading no se promete: se prueba. Contenido educativo, no es asesoría financiera.

---

## SHORT (9:16, ≈ 51 s)

**[0-3 s]** (boceto: pedal de freno pisando dos tarjetas: «1.36 → 3.38» verde y «0.17 → −0.02» rojo; b-roll de coche frenando, kb=in; golpe de bajo + sacudida)
> Mismo freno: Sharpe 1.36 a 3.38 y 0.17 a −0.02.

**[3-8 s]** (boceto: pedal de freno y termómetro de volatilidad; texto «10% de volatilidad»; whoosh)
> Un mismo freno de riesgo mejoró una estrategia y hundió otra. Apunto a 10% de volatilidad.

**[8-17 s]** (boceto: curva de capital con una línea al −15% desde su máximo; al cruzarla la exposición se parte a la mitad; texto «−15% = la mitad»)
> Y si el capital cae más de 15% desde su máximo, reduzco la exposición a la mitad. La probé en tres estrategias, de 2014 a 2024.

**[17-25 s]** (boceto: barras: Sharpe 1.36 → 3.38 y drawdown −62% → −26%; sello «aproximación bruta»; ticks)
> En la venta de volatilidad, sobre una aproximación bruta, el Sharpe sube de 1.36 a 3.38 y la peor caída baja de −62% a −26%.

**[25-33 s]** (boceto: barras: Sharpe 0.17 → −0.02 y drawdown −14% → −22% en rojo; sello ✕)
> En el bot pasa lo contrario: el Sharpe baja de 0.17 a −0.02 y su peor caída sube de −14% a −22%.

**[33-38 s]** (boceto: barra del bot en 2022: caída −13% → −10% en verde)
> Eso sí, en 2022 el freno ayudó al bot: su caída pasó de −13% a −10%.

**[38-46 s]** (boceto: cesta 1x: 0.39 → 0.28; texto «controla cuánto pierdes, no si tienes ventaja»)
> En la cesta a 1x, el Sharpe baja de 0.39 a 0.28. La gestión de riesgo controla cuánto pierdes, no si tienes ventaja.

**[46-51 s]** (boceto: pregunta «¿mejora o hunde?»; logo)
> Video completo en el canal. Y tú: ¿un mismo freno mejora o hunde una estrategia?

Gancho alterno A: «Sharpe 1.36 a 3.38… y en otra estrategia, 0.17 a −0.02.» · B: «La gestión de riesgo no convierte beta en alfa.»

## Descripción (YouTube)
Apliqué volatilidad objetivo de 10% más un freno por drawdown (−15% → exposición a la mitad) al bot, a la cesta a 1x y al VRP sin cobertura (2014–2024). En el VRP el Sharpe pasa de 1.36 a 3.38 y el drawdown de −62% a −26%; en el bot baja de 0.17 a −0.02. Resultado parcial: la gestión de riesgo controla cuánto pierdes, no si tienes ventaja. Series brutas y VRP aproximado.

Datos completos: https://atlas-lab-one.vercel.app (experimento #70)

Contenido educativo. No es asesoría financiera ni recomendación de inversión.

Capítulos: 0:00 Gancho · 0:20 La pregunta · 0:50 Las tres estrategias · 1:25 El freno, pieza 1: volatilidad objetivo · 1:50 El freno, pieza 2: drawdown · 2:20 Cómo lo probé · 2:55 Resultado: el VRP · 3:15 Resultado: el bot y la cesta · 3:45 Por qué depende de la estrategia · 4:25 Cómo leer un Sharpe de 3.38 · 4:55 Con tu capital · 5:30 Lo que me llevo · 5:55 Preguntas de un escéptico · 6:30 Resumen · 6:50 Conclusión

Etiquetas: gestión de riesgo, volatilidad objetivo, vol targeting, drawdown, freno por drawdown, VRP, beta y alfa, Sharpe ratio, backtest, trading con datos, ATLAS Lab, gestión de capital

## Rúbrica (autoevaluación)
| Criterio | Short | Largo |
|---|---|---|
| hook_0_3s | 5 | 5 |
| ritmo | 4 | 4 |
| promesa_cumplida | 5 | 5 |
| potencial_loop | 4 | 3 |
| claridad_no_traders | 4 | 4 |
| honestidad_atlas | 5 | 5 |
| audio | 4 | 4 |
| cta | 4 | 4 |
| **Promedio** | **4.38** | **4.25** |

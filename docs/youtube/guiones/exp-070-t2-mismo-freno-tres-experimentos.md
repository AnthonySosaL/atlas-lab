# Experimento #70 — Tema 2: El mismo freno de riesgo en tres experimentos (el que sirvió, el parcial y el que empeoró)

**Tema 2 de 3 del experimento #70** · Qué aporta frente a los otros temas: el tema 1 compara el freno en tres flujos del #70; este lo pone al lado de los otros dos experimentos de ATLAS que usaron volatilidad objetivo (#52, el único de los 91 que sirvió, y #57, parcial) para responder una sola pregunta: ¿cuándo sirve un freno de riesgo? Se entiende sin haber visto el tema 1.
Estado del guion: **BORRADOR — pendiente de aprobación**
Estado del experimento: **parcial** (la gestión de riesgo transforma el VRP, Sharpe 1.36 → 3.38, pero empeora al bot, 0.17 → −0.02: depende de la estrategia)
Serie: E (gestión de riesgo). Une #52, #57 y #70.
Datos usados: `experiments.json` (v=70: kpis, metrics, analysis; v=52: verdict, analysis, kpis; v=57: verdict, analysis, kpis, metrics) · `exp_details.json` (extra-v70: algo, code) · el archivo de capital de `docs/youtube` (totales de los 91 experimentos: 1 sirvió, 64 murieron y 26 parciales o no concluyentes; filas #52, #57, #70) · `series/extra-v70.json` ([0] VRP con gestión, [1] VRP sin gestión: +2,742.9% y +853.9% en total, brutas).
Producción (CLAUDE.md del canal): b-roll real detrás de cada escena con overlay 0.6, Ken Burns alternando, subtítulos karaoke en MAYÚSCULAS, un dato visual por escena. Colores: rojo `#e11d2a`, verde `#22c55e`, fondo `#09090b`.

## Títulos
1. De 91 experimentos solo uno sirvió: un freno de riesgo. ¿Y por qué no siempre?
2. El mismo freno, cuatro resultados: de −40.3% a −19.2% y de −14% a −22%
3. ¿Sirve la volatilidad objetivo? Tres experimentos, tres respuestas

## Miniatura
Fondo `#09090b`. Un pedal de freno al centro con cuatro flechas: tres verdes `#22c55e` hacia abajo («−40.3% → −19.2%», «−62% → −26%», «−13.9% → −10.9%») y una roja `#e11d2a` hacia arriba («−14% → −22%»). Texto: «¿SIEMPRE SIRVE?». Logo ATLAS esquina inferior derecha.

---

## VIDEO LARGO (≈ 7 min)

**[0:00 — Gancho]** (pantalla: contador «91 experimentos» y una sola casilla verde que se enciende: «sirvió: 1»)
BOCETO: 91 casillas grises en cuadrícula; una se ilumina en verde; se acerca la cámara y dice «volatilidad objetivo»; golpe de bajo.
> De los 91 experimentos de ATLAS Lab, solo uno sirvió. Y fue un freno de riesgo. Pero cuando le puse un freno parecido a otra estrategia, la peor caída empeoró, de −14% a −22%. Hoy comparo tres experimentos con el mismo tipo de freno para responder: ¿cuándo sirve?

**[0:18 — Qué experimento es]** (pantalla: rótulo «Experimento #70 · ATLAS Lab» y el nombre debajo)
BOCETO: rótulo con el número 70 y el nombre «Gestión de riesgo por estrategia (no todo el capital)»; logo en la esquina.
> Este es el experimento #70 de ATLAS Lab: gestión de riesgo por estrategia. Todos los resultados están en la página del experimento. Aquí lo pongo al lado de los experimentos 52 y 57.

**[0:40 — El freno, en una frase]** (pantalla: un termómetro de volatilidad y un acelerador que se reduce)
BOCETO: termómetro que sube; el acelerador baja; texto «más volatilidad = menos apuesta».
> La volatilidad objetivo es una regla simple: mides cuánto se está moviendo la estrategia y reduces la apuesta cuando se mueve mucho; la aumentas cuando se calma. El drawdown es la caída desde el máximo. Y el Sharpe, la ganancia por unidad de riesgo. Con esas tres palabras puedes seguir todo el video.

**[1:10 — Caso 1: el que sirvió (#52)]** (pantalla: tarjeta del #52 con barras de drawdown)
BOCETO: dos barras de drawdown: gris «apalancamiento fijo x2: −40.3%» y verde «con volatilidad objetivo: −19.2%»; dato «Sharpe 0.93 → 0.79».
> Caso uno, el experimento 52. Desde el 18 de marzo de 2020, la volatilidad objetivo recortó el drawdown máximo de una cartera con apalancamiento fijo x2 de −40.3% a −19.2%. El Sharpe bajó de 0.93 a 0.79. Y una desviación estándar simple de 20 días logró algo parecido, −16.1% con Sharpe 0.83: el pronóstico de machine learning no aportó más. Veredicto: sirvió, como control de riesgo, no como fuente de ganancia.

**[1:55 — Caso 2: el parcial (#57)]** (pantalla: tarjeta del #57 con dos crisis)
BOCETO: dos pares de barras: COVID −10.3% → −9.0% y 2022 −13.9% → −10.9%; dato «Sharpe 0.10 · +0.5% anual».
> Caso dos, el experimento 57, con el bot en vivo. La volatilidad objetivo recortó la caída en las dos crisis: la del COVID, de −10.3% a −9.0%, y la de 2022, de −13.9% a −10.9%. Pero el resultado total fue un Sharpe de 0.10 y +0.5% anual, muy por debajo de comprar y esperar la cesta, que dio 0.38. Veredicto: parcial. Mejora el riesgo, no el retorno.

**[2:40 — Caso 3: la transformación (#70, VRP)]** (pantalla: tarjeta del VRP con y sin gestión)
BOCETO: barras: Sharpe 1.36 → 3.38 (verde) y drawdown −62% → −26% (verde); sello «aproximación bruta, sin costos».
> Caso tres, el experimento 70 con la venta de la prima de volatilidad. El Sharpe pasa de 1.36 a 3.38 y el drawdown, de −62% a −26%. Es un resultado bruto, sobre una aproximación con el VIX; sirve para ver el mecanismo, no para esperar ese número. En el total del periodo, la curva sin gestión sube +853.9% y la gestionada +2,742.9%, también en bruto.

**[3:25 — Caso 4: el que empeoró (#70, bot)]** (pantalla: tarjeta del bot con y sin gestión)
BOCETO: barras rojas: Sharpe 0.17 → −0.02 y drawdown −14% → −22%; una barra verde aparte para 2022: −13% → −10%.
> Caso cuatro, el mismo experimento 70, pero con el bot. El Sharpe baja de 0.17 a −0.02 y la peor caída del periodo 2014–2024 sube de −14% a −22%. Eso sí, en 2022 el freno ayudó: −13% a −10%. Y en la cesta a 1x, el Sharpe baja de 0.39 a 0.28.

**[4:05 — El patrón]** (pantalla: tabla comparativa con cuatro filas)
BOCETO: tabla que se llena fila a fila; las mejoras de caída en verde y la única empeorada en rojo.
| Qué se frenó | Drawdown, antes → después | Sharpe |
|---|---|---|
| Cartera x2 (#52) | −40.3% → −19.2% | 0.93 → 0.79 |
| Bot en vivo (#57, crisis de 2022) | −13.9% → −10.9% | 0.10 en total |
| VRP sin cobertura (#70) | −62% → −26% | 1.36 → 3.38 |
| Bot (#70, 2014–2024) | −14% → −22% | 0.17 → −0.02 |
> Tres de cuatro veces la caída se recorta. Y el freno no crea una ventaja por sí solo: en la cartera x2 el Sharpe baja de 0.93 a 0.79, y en el bot, de 0.17 a −0.02. Solo en el VRP el Sharpe sube, y es justo donde el riesgo viene de la volatilidad. La regla es sencilla: el freno decide cuánto riesgo tomas; no decide si hay ventaja.

**[5:00 — Con tu capital: lo que cuesta el freno]** (pantalla: tres tarjetas de «Con tu capital»)
BOCETO: tres tarjetas con aviso ámbar «curvas brutas o con supuestos»: #52 con +$60,839 contra +$129,383; #57 con +$5,308 contra +$24,173; #70 VRP con freno +$2,742,858.
> En dinero, con $100,000, el experimento 52 termina en +$60,839 contra +$129,383 de la cesta a 1x, y el 57, en +$5,308 contra +$24,173 de su propia cesta a 1x. En ninguno de los dos supera a la referencia. Para el VRP con freno la curva dice +$2,742,858, pero es bruta, con un VRP aproximado y apalancamiento de hasta 1.5x: es para entender el mecanismo, no una expectativa.

**[5:40 — Preguntas de un escéptico]** (pantalla: tres tarjetas: «¿mismas fechas?», «¿mismos parámetros?», «¿con costos?»)
BOCETO: tres tarjetas que se voltean: «no: periodos distintos», «no: cada uno con su regla», «el VRP es bruto».
> Preguntas que me haría un escéptico. ¿Son comparables los tres experimentos? No del todo: cambian el periodo, la cartera y los parámetros, así que comparo el patrón, no los números. ¿Por qué empeora el bot en el 70? El experimento mide que empeora, pero no separa la causa. ¿Y con costos? Parte de las series son brutas, así que el efecto real sería menor.

**[6:10 — Ficha del experimento #70]** (pantalla: tarjeta con la ficha y la URL abajo)
BOCETO: tarjeta con cinco líneas que entran con tick y, al final, la URL resaltada en verde.
> Ficha del experimento 70. Estado: parcial. Cifras clave: VRP, Sharpe de 1.36 a 3.38 y drawdown de −62% a −26%; bot, Sharpe de 0.17 a −0.02. Lo que decidió: el resultado mixto, sin costos ni prueba fuera de muestra. Lección: la gestión de riesgo controla cuánto pierdes, no si tienes ventaja. Revísalo completo en atlas-lab-one.vercel.app/e/70.

**[6:40 — Cierre]**
BOCETO: pedal de freno con tres flechas verdes y una roja; logo.
> Todos los datos en atlas-lab-one.vercel.app, experimento 70. El trading no se promete: se prueba. Contenido educativo, no es asesoría financiera.

---

## SHORT (9:16, ≈ 50 s)

**[0-3 s]** (boceto: cuadrícula de 91 casillas con una verde; b-roll de coche frenando, kb=in; golpe de bajo)
> De 91 experimentos, solo uno sirvió: un freno de riesgo.

**[3-14 s]** (boceto: barras −40.3% → −19.2%; ticks)
> Era la volatilidad objetivo: redujo la peor caída de una cartera de −40.3% a −19.2%. Control de riesgo, no ganancia.

**[14-26 s]** (boceto: barras −62% → −26% y Sharpe 1.36 → 3.38; sello «bruto»)
> En la venta de volatilidad, un freno parecido llevó el Sharpe de 1.36 a 3.38 y la caída, de −62% a −26%. En bruto.

**[26-38 s]** (boceto: barras rojas del bot: −14% → −22%; Sharpe 0.17 → −0.02; sello ✕)
> Pero en el bot, el mismo tipo de freno empeoró todo: la peor caída pasó de −14% a −22% y el Sharpe, de 0.17 a −0.02.

**[38-45 s]** (boceto: texto «controla cuánto pierdes, no si tienes ventaja»)
> El freno controla cuánto pierdes. No crea una ventaja.

**[45-50 s]** (boceto: texto «Experimento #70 completo en el enlace»; logo)
> Video completo en el canal y experimento #70 completo en el enlace. ¿Dónde pondrías un freno?

Gancho alterno A: «Un freno de riesgo bajó la caída de −40.3% a −19.2%. Otro la subió de −14% a −22%.» · B: «El único experimento que sirvió fue un freno.»

## Descripción de YouTube — video largo
https://atlas-lab-one.vercel.app/e/70?utm_source=youtube&utm_medium=video&utm_campaign=exp070-t2
Ficha: experimento #70, gestión de riesgo por estrategia. Estado: parcial. VRP: Sharpe 1.36 → 3.38 y drawdown −62% → −26% (bruto); bot: Sharpe 0.17 → −0.02 y drawdown −14% → −22%.
Comparo el mismo tipo de freno en los experimentos 52 (sirvió: −40.3% → −19.2%), 57 (parcial) y 70. Conclusión: controla cuánto pierdes, no si tienes ventaja.
Contenido educativo. No es asesoría financiera ni recomendación de inversión.

## Descripción de YouTube — Short
https://atlas-lab-one.vercel.app/e/70?utm_source=youtube&utm_medium=short&utm_campaign=exp070-t2
Ficha: experimento #70, parcial. VRP −62% → −26%; bot −14% → −22%. Contenido educativo, no es asesoría financiera.

## Capítulos
0:00 Gancho · 0:18 Qué experimento es · 0:40 El freno, en una frase · 1:10 Caso 1: el que sirvió · 1:55 Caso 2: el parcial · 2:40 Caso 3: la transformación · 3:25 Caso 4: el que empeoró · 4:05 El patrón · 5:00 Con tu capital · 5:40 Preguntas de un escéptico · 6:10 Ficha del experimento #70 · 6:40 Cierre

## Etiquetas
volatilidad objetivo, vol targeting, gestión de riesgo, drawdown, freno por drawdown, VRP, bot de trading, Sharpe ratio, el único que sirvió, backtest, trading con datos, ATLAS Lab

## Rúbrica (autoevaluación, 1–5)
| Pieza | hook_0_3s | ritmo | promesa_cumplida | potencial_loop | claridad_no_traders | honestidad_atlas | audio | cta | Promedio |
|---|---|---|---|---|---|---|---|---|---|
| Largo | 5 | 4 | 5 | 4 | 4 | 5 | 4 | 4 | 4.38 |
| Short | 5 | 4 | 5 | 4 | 4 | 5 | 4 | 4 | 4.38 |

Hook ≥ 4 ✓ · honestidad 5 ✓. Punto débil: reúne tres experimentos con periodos y carteras distintos; el largo lo avisa en el bloque 5:40 y compara el patrón, no los números.

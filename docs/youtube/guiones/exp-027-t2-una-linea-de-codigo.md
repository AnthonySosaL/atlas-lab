# Experimento #27 — Prueba de fuego: reentrada con retraso de 1 día · Tema 2: la línea de código que cambia el Sharpe

Tema 2 de 3 del experimento #027 · Qué aporta frente a los otros temas: enseña el método —la diferencia de «hoy» a «ayer» en una sola línea de código— y cuatro preguntas para detectar si un backtest mira el futuro, con las cifras del #27 como caso. El tema 1 cuenta el resultado y la serie; el tema 3 compara las cuentas de varios experimentos. Se entiende sin haber visto los otros temas.
Estado del guion: **BORRADOR — pendiente de aprobación**
Estado del experimento: **murió** (veredicto del sitio: «No sirvió») · Serie G — Construyendo un bot (y por qué murió)
Datos usados: `experiments.json` (v=27: analysis, metrics, kpis, params_view, verdict, capital; v=16 y v=26 para las cifras de «mismo día»), `exp_details.json` (claves `…-v27`, `…-v26` y `…-v25`: code.snippet, filters), tabla «Con tu capital» (archivo de capital en `docs/youtube/`).
Producción (CLAUDE.md del canal): b-roll real detrás de cada escena con overlay oscuro 0.6, Ken Burns alternando in/out, subtítulos karaoke en MAYÚSCULAS con cifras en rojo, un dato visual por escena, golpe de bajo + sacudida solo en 1–2 momentos. Colores: rojo `#e11d2a`, verde `#22c55e`, fondo `#09090b`.

## Títulos (3 opciones)
1. Una línea de código separa un Sharpe de 1.23 de uno de −0.17
2. Hoy contra ayer: cuatro preguntas para saber si tu backtest mira el futuro
3. La prueba de fuego de un bot: cambiar t por t−1 (experimento #27)

## Miniatura (pensada para el título 1)
Fondo `#09090b`. Dos líneas de código en fuente monoespaciada: arriba `manual[t]` tachada en rojo `#e11d2a`; abajo `m[t-1]` en verde `#22c55e`. Texto en Segoe UI Black: «1 LÍNEA» (dos palabras, sin repetir los títulos). Logo ATLAS abajo a la derecha.

---

## VIDEO LARGO (16:9, ≈ 4:48 min)

**[0:00 — Gancho]** (pantalla: dos líneas de código)
Una sola línea de código separa un Sharpe de 1.23 de uno de menos 0.17. La diferencia: mirar la señal de hoy o la de ayer.
BOCETO: las dos líneas de código (`manual[t]` y `m[t - 1]`) con contadores «1.23» y «−0.17»; golpe de bajo en el segundo. kb=in.

**[0:12 — Qué es este experimento]** (pantalla: rótulo con el número y el nombre)
Este es el experimento #27 de ATLAS Lab: Prueba de fuego, reentrada con retraso de 1 día. Todos los resultados están en la página del experimento. No hace falta saber programar: te explico la línea con un ejemplo.
BOCETO: rótulo «EXPERIMENTO #27 · Prueba de fuego: reentrada con retraso de 1 día» sobre velas con opacidad 0.12. kb=out.

**[0:29 — Hoy contra ayer]** (pantalla: dos líneas de código con anotaciones)
En el código del bot, la regla de apalancamiento era esta: cero si la señal manual de hoy marca riesgo, tres si no. La versión de la prueba de fuego es casi igual: cero si la señal de ayer marca riesgo, tres si no. En el código, hoy es t, y ayer es t menos 1. Un solo cambio.
BOCETO: `0.0 if manual[t] else 3.0` con la nota «señal de HOY» y `0.0 if m[t - 1] else 3.0` con «señal de AYER» (líneas tomadas de `exp_details.json`).

**[0:53 — Por qué es tan fácil usar la señal de hoy]** (pantalla: una fila de datos)
Es fácil usar la señal de hoy sin querer. En una hoja de cálculo o en un backtest, todos los datos de un día están en la misma fila: el precio de cierre, el VIX de cierre, el crédito de cierre. Usar la fila de hoy parece natural. Pero el cierre de hoy no existe hasta que hoy termina, y un bot real que decide a las 17:30 solo puede operar al día siguiente.
BOCETO: tabla con una fila «hoy» (precio, VIX, crédito) y un reloj: «17:30: decide» y «mañana: opera». kb=in.

**[1:24 — Qué pasó al cambiar la línea]** (pantalla: dos pares de barras)
Esto fue lo que pasó. La base filtrada con ×3, en 2014 a 2024: de un Sharpe de 1.23 a menos 0.17. En 2007 a 2013: de 1.06 a menos 0.46. La re-entrada del experimento 26, con enfriamiento 0.9 y ×2, bajó de 2.12 a menos 1.00 en 2014–2024, y de 1.53 a menos 0.76 en 2007–2013. El Sharpe es la ganancia por unidad de riesgo.
| | Con la señal de hoy | Con la señal de ayer |
|---|---|---|
| Base 2014–24 | 1.23 | −0.17 |
| Base 2007–13 | 1.06 | −0.46 |
| Re-entrada 2014–24 | 2.12 | −1.00 |
| Re-entrada 2007–13 | 1.53 | −0.76 |
BOCETO: tabla animada; las cifras de «hoy» en verde se apagan y las de «ayer» entran en rojo con golpe de bajo + sacudida.

**[2:00 — Las cuatro preguntas]** (pantalla: cuatro tarjetas)
De aquí salen cuatro preguntas que puedes hacerle a cualquier backtest. Una: ¿a qué hora se conoce cada dato? Dos: ¿la señal de hoy opera hoy o mañana? Tres: ¿existe una versión con un día de retraso, y cuánto cae? Cuatro: ¿el resultado es sospechosamente mejor que el de la base?
BOCETO: cuatro tarjetas numeradas que entran una a una con tick: «¿a qué hora se conoce?», «¿opera hoy o mañana?», «¿versión con 1 día de retraso?», «¿demasiado bueno?».

**[2:21 — Las preguntas en este caso]** (pantalla: tarjetas con ejemplos)
Veamos las cuatro en este caso. Hora del dato: el VIX y el crédito de cierre. Hoy o mañana: el filtro decidía con el cierre del mismo día. Versión rezagada: es este experimento, y la base cae a menos 0.17. Demasiado bueno: en el experimento 26, las seis variantes mejoraban a la base, hasta un Sharpe de 2.12. Las cuatro alarmas sonaban juntas.
BOCETO: las cuatro tarjetas se llenan con su ejemplo y se ponen en ámbar una a una; sirena breve en la cuarta.

**[2:48 — Cómo mueren las cuentas]** (pantalla: dos formas de morir)
Con las señales de ayer, las cuentas mueren de dos maneras. En 3 de los 4 casos, las pérdidas se acumulan durante varios días y cruzan el drawdown de 10%, la caída máxima permitida, antes de que el filtro rezagado reaccione. Solo en la base de 2014–2024 la cuenta cae por una única jornada: el 24 de junio de 2016, con menos 6.2%, que rompe el límite diario de 5%. La re-entrada se cierra el 12 de julio de 2015, a los 241 días, con menos 10.0%.
BOCETO: una escalera de pérdidas pequeñas que cruza −10% y una barra única de −6.2% que cruza −5% con sacudida; rótulos «3 de 4» y «1 de 4».

**[3:30 — Qué no dice la prueba]** (pantalla: dos frases)
Ojo con lo que no dice. No dice que ningún filtro funcione, sino que este, con la señal de ayer, no funciona. Y no descuenta costos: en la práctica, el resultado sería peor. La lección es el orden: primero se comprueba que el bot puede ejecutar la regla, y después se mide si gana.
BOCETO: «no dice: ningún filtro funciona» (tachada) y «dice: este filtro, con la señal de ayer, no funciona»; luego el check «¿se puede ejecutar?» en grande.

**[3:52 — Con tu capital]** (pantalla: tarjeta de capital $10,000 / $100,000)
Con 10,000 dólares, la curva con la señal de ayer termina en menos 996; con 100,000, en menos 9,959. Comprando y esperando en esas fechas: menos 443 y menos 4,428. Con tu capital verías esa cuenta cerrada.
BOCETO: tarjeta «Con tu capital» del sitio con el selector; curva roja cortada el 12-jul-2015 y gris «Sin estrategia».

**[4:10 — Ficha del experimento #27]** (pantalla: tarjeta con la URL)
Ficha del experimento #27, Prueba de fuego con retraso de 1 día. Estado: murió. Cifra clave: el Sharpe de la base pasa de 1.23 a menos 0.17, y el de la re-entrada, de 2.12 a menos 1.00. Filtros que decidieron: con la señal de ayer, la re-entrada y la base mueren en los dos periodos. Lección: antes de medir si una regla gana, comprueba que se puede ejecutar. Revísalo completo en atlas-lab-one.vercel.app/e/27. Contenido educativo, no es asesoría financiera. El trading no se promete: se prueba.
BOCETO: tarjeta final con cuatro líneas (estado · cifra clave · filtro que decidió · lección) y la URL «atlas-lab-one.vercel.app/e/27» en grande; logo ATLAS; fondo de velas con opacidad 0.12.

---

## SHORT (9:16, ≈ 47 s)

**[0-3 s]** «Una línea: de Sharpe 1.23 a menos 0.17.»
BOCETO: `manual[t]` tachada y `m[t-1]` en verde; barra 1.23 que cae a −0.17 con golpe de bajo + sacudida.
**[3-10 s]** «La diferencia es mirar la señal de hoy o la de ayer. En código: t contra t menos 1.»
BOCETO: las dos líneas de código con anotaciones «HOY» y «AYER». kb=out.
**[10-18 s]** «Un bot real decide por la tarde y opera mañana. El cierre de hoy no existe hasta que hoy termina.»
BOCETO: reloj con «decide» y «mañana: opera»; flecha roja tachada.
**[18-27 s]** «Resultado: la base pasa de 1.23 a menos 0.17. La re-entrada, de 2.12 a menos 1.00. Las cuentas mueren.»
BOCETO: tabla de cuatro cifras que caen de verde a rojo.
**[27-35 s]** «Cuatro preguntas para cualquier backtest: ¿a qué hora se conoce el dato? ¿Opera hoy o mañana?»
BOCETO: las dos primeras tarjetas de preguntas con tick.
**[35-43 s]** «Experimento 27 completo en el enlace. El video completo está en el canal. No es asesoría financiera. El trading no se promete: se prueba.»
BOCETO: tarjeta con «experimento #27 completo en el enlace» y la URL corta; logo ATLAS.
**[43-47 s]** «Antes de creerle a un Sharpe, mira la línea.»
BOCETO: las dos líneas de código del inicio; corte directo al inicio (loop).

---

## Descripción de YouTube (video largo)
https://atlas-lab-one.vercel.app/e/27?utm_source=youtube&utm_medium=video&utm_campaign=exp027-t2
Ficha del experimento #27 (Prueba de fuego: reentrada con retraso de 1 día): murió (No sirvió) · la base pasa de Sharpe 1.23 a −0.17 y la re-entrada de 2.12 a −1.00 al usar la señal de ayer · cuenta cerrada el 12-jul-2015 (−10.0%).
La diferencia entre la señal de hoy y la de ayer en una línea de código, y cuatro preguntas para detectar si un backtest mira el futuro.
Contenido educativo. No es asesoría financiera ni recomendación de inversión.

## Descripción del Short
https://atlas-lab-one.vercel.app/e/27?utm_source=youtube&utm_medium=short&utm_campaign=exp027-t2
Ficha del experimento #27: murió · una línea de código cambia el Sharpe de 1.23 a −0.17. Video completo en el canal. Contenido educativo, no es asesoría financiera.

## Capítulos
0:00 Gancho · 0:12 Qué es este experimento · 0:29 Hoy contra ayer · 0:53 Por qué es tan fácil usar la señal de hoy · 1:24 Qué pasó al cambiar la línea · 2:00 Las cuatro preguntas · 2:21 Las preguntas en este caso · 2:48 Cómo mueren las cuentas · 3:30 Qué no dice la prueba · 3:52 Con tu capital · 4:10 Ficha del experimento #27

## Etiquetas
look-ahead bias, sesgo de mirar el futuro, backtest, código, bot de trading, Sharpe ratio, VIX, prop firm, drawdown, trading con datos, atlas lab, trading algorítmico

## Rúbrica (autoevaluación, 1–5)
| Pieza | hook_0_3s | ritmo | promesa_cumplida | potencial_loop | claridad_no_traders | honestidad_atlas | audio | cta | Promedio |
|---|---|---|---|---|---|---|---|---|---|
| Largo | 5 | 4 | 5 | 4 | 4 | 5 | 4 | 4 | 4.38 |
| Short | 5 | 4 | 5 | 5 | 4 | 5 | 4 | 4 | 4.50 |

Hook ≥ 4 ✓ · honestidad 5 ✓. Punto débil: el código puede espantar a quien no programa; el largo lo traduce a «hoy contra ayer» y el Short usa solo «t contra t menos 1». Las cuatro preguntas son una síntesis del método de la serie, no una lista del experimento.

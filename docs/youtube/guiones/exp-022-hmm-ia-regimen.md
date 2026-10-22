# Experimento #22 — Detección de régimen con HMM (IA)

Estado del guion: **BORRADOR — pendiente de aprobación**
Estado del experimento: **no concluyente** (el sitio lo muestra como neutral: «No concluyente») · Serie D — Machine learning en trading: lo que pasó
Datos usados: `experiments.json` (v=22: kpis, metrics, params, params_view, verdict, analysis, notes, capital), `exp_details.json` (clave `…-v22`: algo, filters), `series/20260610_134200_hmm-regime-detection-ia-v22.json` (curva de la estrategia hasta el corte, curva hipotética «Sin reglas de prop firm» y «Sin estrategia»), tabla «Con tu capital» (archivo de capital en `docs/youtube/`). Relacionados: #16 (el filtro manual), #23 (la misma curva), #27.

## Títulos
1. El HMM necesitaba 500 días para empezar. La cuenta duró 81
2. Una IA para detectar crisis: −10.4% en 81 días (y por qué no cuenta)
3. HMM contra el filtro manual: Sharpe −2.31 y veredicto no concluyente

## Miniatura
Fondo `#09090b`. Un chip de IA con una barra de carga que marca 81 de 500 y, a la derecha, en Segoe UI Black, «IA SIN DECIDIR» (tres palabras, sin repetir los títulos) en rojo `#e11d2a`. Logo ATLAS abajo a la derecha.

---

## VIDEO LARGO (16:9, ≈ 6:10 min)
Ritmo visual: algo cambia en pantalla cada 2-3 s; los pasos de cada boceto van en orden. Fórmula del canal: b-roll real detrás, Ken Burns alterno, subtítulos karaoke, whoosh + flash en cada corte.

**[0:00 — Gancho]** (pantalla: barra de calentamiento 81/500)
¿Y si en lugar de reglas escritas a mano, una inteligencia artificial aprende sola cuándo el mercado está en pánico? Probé un modelo oculto de Markov, un HMM. Resultado: menos 10.4%, un Sharpe, el retorno por unidad de riesgo, de menos 2.31 y la cuenta cerrada a los 81 días. Pero ojo: no es que la IA fallara. La cuenta murió antes de que la IA empezara a decidir.
> Boceto: una barra de «calentamiento» que se llena hasta 81 de 500 días y se corta con X roja; contadores «−10.4%» y «−2.31»; golpe de bass en el corte.

**[0:29 — Presentación]** (pantalla: rótulo «Experimento #22 · Detección de régimen con HMM (IA)»)
Este es el experimento #22 de ATLAS Lab: Detección de régimen con HMM (IA). Todos los resultados están en la página del experimento.
> Boceto: rótulo grande «EXPERIMENTO #22 · Detección de régimen con HMM (IA)» sobre velas de fondo con overlay oscuro; abajo, la URL pequeña «atlas-lab-one.vercel.app/e/22». Ken Burns «out».

**[0:39 — Dónde encaja en la serie]** (pantalla: mapa de la serie, #15 al #30)
Hasta el experimento 21, el filtro de pánico eran reglas escritas por mí: VIX por encima de 28, salto del VIX, crédito débil. Del #22 al #25 le doy la tarea a la inteligencia artificial. Este es el primer intento: un modelo que no usa umbrales a mano.
> Boceto: la línea de la serie cambia de color en el #22; icono de chip junto a la etiqueta «IA: del #22 al #25».

**[1:00 — Qué es un HMM]** (pantalla: dos estados que alternan)
Un modelo oculto de Markov parte de una idea: el mercado alterna entre estados que no vemos directamente, por ejemplo calma y pánico, y solo observamos sus efectos. Aquí hay dos estados. El modelo recibe dos datos diarios —el retorno de la cesta y el cambio del VIX— y calcula la probabilidad de estar en el estado malo, el de mayor varianza, es decir, el de movimientos más violentos. Si esa probabilidad pasa de 0.5, el bot se sale; si no, opera a ×3.
> Boceto: dos burbujas, «calma» y «pánico», con flechas de transición; la curva de precios se pinta de verde o rojo según el estado; un indicador de probabilidad con la línea en 0.5.

**[1:35 — Por qué dos estados]** (pantalla: dos burbujas)
¿Por qué solo dos estados? Un HMM puede tener más, pero dos es la versión más simple y se interpreta bien: calma y pánico. Cada estado se describe con su propio nivel de movimiento diario, y el modelo calcula, día a día, cuál de los dos es más probable.
> Boceto: dos burbujas, una con ondas pequeñas («calma») y otra con ondas grandes («pánico»); un medidor de probabilidad que oscila entre ambas.

**[1:56 — Cómo se probó]** (pantalla: línea de tiempo con calentamiento)
Sin usar información futura. El modelo usa los primeros 500 días solo para calentar; durante ese periodo la señal vale cero, es decir, el bot opera sin filtro. Después se reentrena cada 126 días con todo el pasado, y la probabilidad que usa es la de ayer, no la de hoy. Se prueba en 2014 a 2024 y en 2007 a 2013, con las reglas de una prop firm, la empresa que presta la cuenta y la cierra si pierdes demasiado.
> Boceto: línea de tiempo con un tramo gris «500 días: sin filtro» y puntos de reentrenamiento cada 126 días; checklist de `exp_details.json`: «sin mirar el futuro: pasa», «señal de ayer: pasa».

**[2:30 — Qué es el calentamiento]** (pantalla: guardia que llega tarde)
Un modelo así necesita ver mucha historia antes de decidir. Durante esos primeros 500 días, el bot opera sin filtro, como si no existiera. Es como contratar a un guardia de seguridad que empieza a trabajar 500 días después de abrir la tienda: si el robo ocurre antes, no es culpa del guardia, pero tampoco prueba que sirva.
> Boceto: tienda con puerta abierta; un reloj avanza 81 días y ocurre el «robo» (la caída de la cuenta); recién después llega el guardia con la etiqueta «día 500».

**[2:55 — Resultados 2014-2024]** (pantalla: tarjetas de KPI)
En 2014 a 2024: retorno de menos 10.4%, Sharpe de menos 2.31 y caída máxima de menos 11.1%. La cuenta duró 81 días: se cerró el 6 de enero de 2015. A modo de comparación, el filtro manual daba Sharpe de 1.23.
> Boceto: tarjetas con tick (−10.4% · −2.31 · −11.1% · 81 días); la curva real de la estrategia dibujándose hasta el 2015-01-06.

**[3:13 — El dato clave]** (pantalla: dos curvas idénticas)
Ahora lo importante: esas cifras son idénticas a operar a ×3 sin ningún filtro. Se verificó volviendo a ejecutar la base sin filtro. La razón: el modelo necesita 500 días para calentarse y la cuenta murió a los 81. Durante toda su vida, la IA no decidió nada.
> Boceto: dos curvas superpuestas, «HMM» y «×3 sin filtro», que coinciden exactamente; el rótulo «idénticas» parpadea; barra «81 / 500 días».

**[3:34 — Y en 2007-2013]** (pantalla: segundo periodo)
En 2007 a 2013, el modelo solo estuvo activo desde agosto de 2008, y la cuenta se cerró en diciembre de 2008: retorno de menos 11.9% y Sharpe de menos 0.54. Combinado con el filtro manual, el modelo quedó por debajo de este: 0.98 y 1.03, frente a 1.23 y 1.06. Tampoco ahí hay evidencia a su favor.
> Boceto: segundo eje 2007–2013 con la marca «activo desde ago-2008» y la X en dic-2008; tabla corta «combinado: 0.98 / 1.03» frente a «manual: 1.23 / 1.06».

**[3:58 — La comparación no es pareja]** (pantalla: dos reglas de información)
Una advertencia de justicia. El HMM usa datos hasta ayer. El filtro manual con el que se compara usa el cierre del mismo día, información que un bot real no tendría. Es decir, el HMM juega con la restricción de un bot real, y el filtro manual no. Eso hace que el modelo parta con desventaja frente a su vara de 1.23.
> Boceto: dos relojes: el del HMM marca «hasta ayer» en verde y el del filtro manual marca «hasta hoy» en ámbar; texto «condiciones distintas».

**[4:25 — Qué se puede concluir]** (pantalla: balanza)
Esto es lo honesto: un modelo con 500 días de calentamiento no se puede juzgar en un periodo que termina antes. La muerte de la cuenta es un artefacto del periodo inicial, no evidencia contra el HMM. Y tampoco hay evidencia a su favor. Por eso el veredicto es no concluyente.
> Boceto: una balanza con dos platos vacíos y el sello gris «NO CONCLUYENTE».

**[4:47 — Con tu capital]** (pantalla: tarjeta de capital $10,000 / $100,000)
Con 10,000 dólares, la curva termina en menos $1,026; con 100,000, en menos $10,258. Comprando y esperando en esas fechas: menos $578 y menos $5,776. Con tu capital verías esa cuenta cerrada. La línea «Sin reglas de prop firm» muestra cómo habría seguido la misma estrategia sin el corte; es hipotética, porque en la realidad la cuenta se cierra ese día.
> Boceto: tarjeta «Con tu capital» del sitio con el selector; curva roja cortada en enero de 2015; la curva punteada «sin reglas de prop firm» en gris claro con el rótulo «hipotética».

**[5:12 — Conclusión]** (pantalla: texto grande)
Veredicto: no concluyente. Menos 10.4% con Sharpe de menos 2.31, idéntico a no usar filtro, porque el HMM seguía en sus 500 días de calentamiento cuando la cuenta reventó. Ahora veremos si un modelo supervisado, con más datos macro, lo hace mejor.
> Boceto: sello gris «NO CONCLUYENTE»; frase final «El trading no se promete: se prueba»; flecha hacia el siguiente video (#23).

**[5:31 — Ficha del experimento #22]** (pantalla: tarjeta con la URL)
Ficha del experimento 22. Estado: no concluyente. Cifra clave: en 2014-2024, menos 10.4% con un Sharpe de menos 2.31, idéntico a operar a ×3 sin filtro; en 2007-2013, Sharpe de menos 0.54. Filtro que decidió: el calentamiento; el modelo seguía en sus 500 días de calentamiento cuando la cuenta reventó. Lección: un modelo con 500 días de calentamiento no se puede juzgar en un periodo que termina antes. Revísalo completo en atlas-lab-one.vercel.app/e/22.
> Boceto: tarjeta oscura con el estado del experimento #22 arriba, las cifras clave en el centro y «atlas-lab-one.vercel.app/e/22» en grande al pie; las líneas de la ficha entran una a una; logo ATLAS.

**[5:59 — Cierre]** (pantalla: logo y enlace)
En el siguiente video, un modelo supervisado con XGBoost: el experimento 23. Todos los datos en atlas-lab-one.vercel.app/e/22. Contenido educativo, no es asesoría financiera.
> Boceto: pantalla final con enlace y logo ATLAS; fondo de velas animadas con opacidad 0.12.

---

## SHORT (9:16, ≈ 43 s)
Fórmula visual: b-roll Pexels vertical + overlay oscuro 0.6, Ken Burns alternando in/out, subtítulos karaoke en MAYÚSCULAS con las cifras en rojo, whoosh + flash en cada corte, golpe de bass + sacudida solo en el 0-3 s y en el «500 días»; ticker arriba, viñeta y velas con opacidad ≤ 0.12.

**[0-3 s]** "IA contra las crisis: menos 10.4% en 81 días."
> Boceto: chip de IA con la curva real cayendo; texto gigante «−10.4%» y contador «81 días».
**[3-10 s]** "Probé un modelo oculto de Markov, una IA que aprende sola si el mercado está en calma o en pánico."
> Boceto: dos burbujas, «calma» y «pánico», con flechas; la curva cambia de color según el estado.
**[10-15 s]** "Opera ×3 en calma y se sale en pánico. Datos de 2014 a 2024."
> Boceto: semáforo verde/rojo sobre la curva; chip «×3»; barra de tiempo 2014 → 2024.
**[15-19 s]** "Sharpe menos 2.31. Cuenta cerrada el 6 de enero de 2015."
> Boceto: tarjeta «−2.31»; la curva se corta con X roja y golpe de bass.
**[19-23 s]** "Y aquí está el giro: el resultado es idéntico a operar sin ningún filtro."
> Boceto: dos curvas superpuestas que coinciden; rótulo «idénticas».
**[23-27 s]** "El modelo necesitaba 500 días para calentar. La cuenta duró 81."
> Boceto: barra de calentamiento que llega a 81 de 500 con sacudida.
**[27-32 s]** "La IA no falló: no llegó a decidir. El veredicto es no concluyente."
> Boceto: sello gris «NO CONCLUYENTE» sobre la barra.
**[32-40 s]** "El video completo está en el canal. Experimento #22 completo en el enlace. No es asesoría financiera. El trading no se promete: se prueba."
> Boceto: frase de marca en blanco; logo ATLAS; texto «Experimento #22 completo en el enlace».
**[40-43 s]** "Y cuando una IA te prometa detectar crisis:"
> Boceto: chip de IA con interrogación; corte directo al inicio (loop).

## Descripción de YouTube (video largo)
https://atlas-lab-one.vercel.app/e/22?utm_source=youtube&utm_medium=video&utm_campaign=exp022-t1
Ficha del experimento #22 (Detección de régimen con HMM (IA)): estado no concluyente · 2014-2024: −10.4% con Sharpe −2.31, idéntico a ×3 sin filtro · el modelo seguía en sus 500 días de calentamiento.
Probé un modelo oculto de Markov (HMM) de 2 estados que aprende sin umbrales a mano cuándo salir del mercado, con reentrenamiento cada 126 días y sin mirar el futuro.
En 2014–2024: −10.4%, Sharpe −2.31 y cuenta cerrada a los 81 días, un resultado idéntico a operar a ×3 sin filtro, porque el modelo seguía en sus 500 días de calentamiento.
Veredicto: no concluyente.
Contenido educativo. No es asesoría financiera ni recomendación de inversión.

## Descripción del Short
https://atlas-lab-one.vercel.app/e/22?utm_source=youtube&utm_medium=short&utm_campaign=exp022-t1
Experimento #22 · no concluyente · −10.4% idéntico a ×3 sin filtro: el modelo seguía calentando. No es asesoría financiera.

Capítulos: 0:00 Gancho · 0:29 Presentación · 0:39 Dónde encaja en la serie · 1:00 Qué es un HMM · 1:35 Por qué dos estados · 1:56 Cómo se probó · 2:30 Qué es el calentamiento · 2:55 Resultados 2014-2024 · 3:13 El dato clave · 3:34 Y en 2007-2013 · 3:58 La comparación no es pareja · 4:25 Qué se puede concluir · 4:47 Con tu capital · 5:12 Conclusión · 5:31 Ficha del experimento #22 · 5:59 Cierre

Etiquetas: HMM, modelo oculto de Markov, inteligencia artificial, régimen de mercado, bot de trading, backtest, VIX, machine learning, prop firm, trading con datos, ATLAS Lab, trading algorítmico

## Rúbrica (autoevaluación del Short)
hook_0_3s 4 · ritmo 4 · promesa_cumplida 5 · potencial_loop 4 · claridad_no_traders 4 · honestidad_atlas 5 · audio 4 · cta 4 → promedio 4.25 (aprobado: ≥ 4.0, hook ≥ 4, honestidad 5)
Notas: el gancho da dos cifras y deja la pregunta («¿por qué cuenta tan poco?»); la honestidad es 5 porque el Short no vende la IA ni la condena: dice «no concluyente» y explica el calentamiento de 500 días.

## Otros temas de este experimento

- Tema 1 — `exp-022-hmm-ia-regimen.md` — Detección de régimen con HMM (IA) (este archivo).
- Tema 2 — `exp-022-t2-que-es-un-hmm.md` — Qué es un modelo oculto de Markov (HMM): una IA que aprende sola si el mercado está en calma o en pánico
- Tema 3 — `exp-022-t3-resultado-identico.md` — Dos estrategias, el mismo resultado: −10.37%, Sharpe −2.314 y 81 días
- Tema 4 — `exp-022-t4-2007-2013-y-la-comparacion.md` — 2007-2013: la IA activa solo desde agosto de 2008 y una comparación que parte con desventaja

# Experimento #27 — Prueba de fuego: reentrada con retraso de 1 día

Estado del guion: **BORRADOR — pendiente de aprobación**
Estado del experimento: **murió** (veredicto del sitio: «No sirvió») · Serie G — Construyendo un bot (y por qué murió)
Datos usados: `experiments.json` (v=27: kpis, metrics, params, verdict, analysis, notes, capital), `exp_details.json` (clave `…-v27`: algo, filters), `series/20260610_135143_prueba-de-fuego-lag-1-re-entrada-v27.json` (curva de la estrategia hasta el corte, curva hipotética «Sin reglas de prop firm» y «Sin estrategia»), tabla «Con tu capital» (archivo de capital en `docs/youtube/`). Las cifras con la señal del mismo día vienen de #16, #21 y #26 (en `experiments.json`).

## Títulos
1. El mismo bot: Sharpe 1.23 con la señal de hoy, −0.17 con la de ayer
2. La prueba que decide si un bot se puede operar: 1 día de retraso
3. 1 día de retraso: de Sharpe 1.23 a −0.17 (y la cuenta se cierra)

## Miniatura
Fondo `#09090b`. Dos calendarios: a la izquierda «HOY» en verde `#22c55e` con una curva subiendo, a la derecha «AYER» en rojo `#e11d2a` con la curva cayendo y una X; texto en Segoe UI Black «HOY vs AYER» (tres palabras, sin repetir los títulos). Logo ATLAS abajo a la derecha.

---

## VIDEO LARGO (16:9, ≈ 5:39 min)
Ritmo visual: algo cambia en pantalla cada 2-3 s; los pasos de cada boceto van en orden. Fórmula del canal: b-roll real detrás, Ken Burns alterno, subtítulos karaoke, whoosh + flash en cada corte.

**[0:00 — Gancho]** (pantalla: dos barras que se separan)
El mismo bot. Las mismas reglas. Los mismos datos. Con la señal de hoy: Sharpe —el retorno por unidad de riesgo— de 1.23. Con la señal de ayer: menos 0.17. Esta es la prueba que decide si las curvas de esta serie se pueden operar de verdad.
> Boceto: dos barras iguales de 1.23 en verde; la segunda se invierte con golpe de bass y sacudida hasta −0.17 en rojo; texto «1 día de retraso».

**[0:20 — Dónde encaja en la serie]** (pantalla: mapa de la serie, #15 al #30)
Es la prueba que le pregunta a todas las anteriores si se pueden ejecutar. Del #15 al #26, el filtro de pánico decide con el cierre del mismo día. Este experimento cambia una sola cosa: usa la información de ayer. Después vendrán tres experimentos más, del #28 al #30, con una versión ejecutable y un interruptor de emergencia.
> Boceto: línea de la serie con una lupa sobre los puntos #15 al #26; el #27 se ilumina; etiquetas «mismo día» y «señal de ayer».

**[0:45 — El problema de ejecución]** (pantalla: reloj de un día de mercado)
Un bot real tiene un horario. El mercado cierra, el bot calcula sus señales con ese cierre, por ejemplo a las 17:30, y la orden se aplica al día siguiente. En los experimentos anteriores, el VIX y el crédito del cierre del día decidían la exposición de ese mismo día. Eso es información que aún no existe cuando el bot decide: nadie puede operar con el cierre de hoy antes de que hoy cierre.
> Boceto: reloj con tres marcas, «cierre», «17:30: decide» y «mañana: opera»; una flecha roja tachada que va de «cierre de hoy» a «retorno de hoy».

**[1:16 — Una analogía]** (pantalla: pronóstico con la lluvia de mañana)
Piénsalo así: es como armar un pronóstico del clima usando la lluvia de mañana. En la práctica nunca falla, y en la vida real no sirve de nada. Con la señal de hoy, el filtro conoce el día antes de sufrirlo; con la señal de ayer, tiene que adivinarlo, como cualquier bot real.
> Boceto: dos pronósticos, uno con las nubes de mañana dibujadas (verde, «nunca falla») y otro con las nubes de ayer (rojo, «falla»); texto «hoy vs ayer».

**[1:39 — La prueba]** (pantalla: dos versiones de la regla)
Se rezagan todas las señales un día: el filtro macro y el enfriamiento del VIX se deciden con los datos de ayer. Se comparan con una base igualmente rezagada, la cartera con filtro a ×3. Se prueba la re-entrada del experimento 26, con enfriamiento de 0.9 y ×2, y también la de 0.8 y ×2, en 2014 a 2024 y en 2007 a 2013, con las reglas de una prop firm, la empresa que presta la cuenta y la cierra si pierdes demasiado. No se descuentan costos.
> Boceto: dos filas de código simplificado, «señal[hoy]» (tachada) y «señal[ayer]» (verde); checklist de `exp_details.json`: «señal rezagada: FALLA», «contra la base rezagada: FALLA», «2007–2013: FALLA», «costos: no aplicado».

**[2:15 — Cómo leer un Sharpe negativo]** (pantalla: escala)
Un recordatorio para leer la tabla. El Sharpe mide el retorno por unidad de riesgo. Cuanto más alto, mejor; por debajo de cero significa que, en relación con el riesgo asumido, el bot perdió dinero. Todas las cifras de la tabla que sigue son negativas.
> Boceto: escala horizontal con el cero al centro; a la derecha, zona verde «ganó»; a la izquierda, zona roja «perdió»; un marcador se desplaza de 1.23 a −0.17.

**[2:35 — Resultados]** (pantalla: tabla animada)
Estos son los Sharpe, que miden el retorno por unidad de riesgo. La base filtrada con la señal de ayer: menos 0.17 en 2014 a 2024 y menos 0.46 en 2007 a 2013. La re-entrada con la señal de ayer: menos 1.00 y menos 0.76. Para comparar, con la señal del mismo día daban 1.23 y 1.06 la base, y 2.12 y 1.53 la re-entrada.
> Boceto: tabla de dos filas y dos columnas (2014–2024 y 2007–2013) con las cifras de «señal de ayer» en rojo; debajo, en gris, las cifras del mismo día; las cifras negativas entran con golpe de bass.

**[3:02 — La cuenta]** (pantalla: curva hasta el corte)
La versión con re-entrada pierde 10.0% en total, con una caída máxima de 12.6%, y la cuenta se cierra el 12 de julio de 2015, a los 241 días. Y la base rezagada también muere, en los dos periodos.
> Boceto: la curva real de la estrategia dibujándose y cortándose el 2015-07-12; tarjetas (−10.0% · −12.6% · 241 días).

**[3:19 — Cómo mueren las cuentas]** (pantalla: dos formas de morir)
Hay dos formas de morir. En 3 de los 4 casos, las pérdidas se acumulan durante varios días y cruzan el drawdown de 10%, la caída máxima permitida, antes de que el filtro rezagado reaccione: con las señales de ayer, el filtro llega tarde. Solo en la base de 2014 a 2024 la cuenta cae por una única jornada: el 24 de junio de 2016, con menos 6.2%, que rompe el límite diario de 5%.
> Boceto: dos animaciones: una escalera de pérdidas pequeñas que baja hasta cruzar la línea de −10% y una sola barra de −6.2% que cruza la línea de −5% con sacudida; rótulos «3 de 4» y «1 de 4».

**[3:51 — Qué significa para la serie]** (pantalla: lista de experimentos)
El Sharpe de 1.23 del filtro depende de usar el VIX del cierre del mismo día. Y varios resultados anteriores descansan sobre esa misma señal: el más 267.3% del experimento 16, el más 591.5% del 19, el Sharpe de 1.06 del 21, el más 203.8% del 25 y el más 1,226.7% del 26.
> Boceto: lista vertical de cinco tarjetas (#16 +267.3%, #19 +591.5%, #21 Sharpe 1.06, #25 +203.8%, #26 +1,226.7%) que se ponen en ámbar una a una con el rótulo «mismo día».

**[4:13 — Qué no dice esta prueba]** (pantalla: texto)
Ojo con lo que no dice. No dice que ningún filtro funcione; dice que este, con la señal de ayer, no funciona. Y no descuenta costos: en real, el resultado sería peor, no mejor. La lección es el método: antes de medir si una regla gana, hay que comprobar que un bot real puede ejecutarla.
> Boceto: dos frases en pantalla, «no dice: ningún filtro funciona» (tachada) y «dice: este filtro, con la señal de ayer, no funciona»; luego el check «¿se puede ejecutar?» en grande.

**[4:37 — Con tu capital]** (pantalla: tarjeta de capital $10,000 / $100,000)
Con 10,000 dólares, la curva termina en menos $996; con 100,000, en menos $9,959. Comprando y esperando en esas fechas: menos $443 y menos $4,428. Con tu capital verías esa cuenta cerrada, no una inversión que sigue corriendo. La línea hipotética «Sin reglas de prop firm» muestra cómo habría seguido sin el corte, pero en la realidad la cuenta se cierra ese día.
> Boceto: tarjeta «Con tu capital» del sitio con el selector; curva roja cortada el 12 de julio de 2015 y curva punteada gris «hipotética».

**[5:04 — Conclusión]** (pantalla: texto grande)
Veredicto: no sirvió. Con las señales rezagadas un día, la re-entrada cae a un Sharpe de menos 1.00, y hasta la base filtrada muere: menos 0.17 en 2014 a 2024 y menos 0.46 en 2007 a 2013. Es la única versión que un bot real puede ejecutar, y es la que cuenta.
> Boceto: sello rojo «NO SIRVIÓ»; frase final «El trading no se promete: se prueba».

**[5:26 — Cierre]** (pantalla: logo y enlace)
En el siguiente video, la versión ejecutable con un interruptor de emergencia: el experimento 28. Todos los datos en atlas-lab-one.vercel.app, experimento 27. Contenido educativo, no es asesoría financiera.
> Boceto: pantalla final con enlace y logo ATLAS; fondo de velas animadas con opacidad 0.12.

---

## SHORT (9:16, ≈ 46 s)
Fórmula visual: b-roll Pexels vertical + overlay oscuro 0.6, Ken Burns alternando in/out, subtítulos karaoke en MAYÚSCULAS con las cifras en rojo, whoosh + flash en cada corte, golpe de bass + sacudida solo en el 0-3 s y en el −0.17; ticker arriba, viñeta y velas con opacidad ≤ 0.12.

**[0-3 s]** "Un día de retraso: Sharpe 1.23 a menos 0.17."
> Boceto: barra verde de 1.23 que se invierte hasta −0.17 en rojo con sacudida; texto gigante «1 DÍA».
**[3-9 s]** "Mi bot decide con el VIX del cierre de hoy y cobra el retorno de hoy."
> Boceto: reloj con «cierre de hoy» y una flecha roja hacia «cobra HOY».
**[9-12 s]** "Pero un bot real decide al cierre y opera mañana."
> Boceto: la flecha cambia a verde hacia «cobra MAÑANA».
**[12-16 s]** "La prueba de fuego: rezagar todas las señales un día."
> Boceto: el texto «señal[hoy]» tachado y «señal[ayer]» en verde.
**[16-21 s]** "La base filtrada: Sharpe menos 0.17 en 2014 a 2024, menos 0.46 en 2007 a 2013."
> Boceto: tabla con dos cifras rojas que entran con tick.
**[21-25 s]** "La re-entrada, la del Sharpe 2.12: menos 1.00 y menos 0.76."
> Boceto: tabla con una segunda fila; la cifra de 2.12 tachada en gris, las nuevas en rojo.
**[25-30 s]** "Las cuentas mueren: tres de cuatro por pérdidas que se acumulan hasta cruzar el 10%."
> Boceto: escalera de pérdidas pequeñas que cruza la línea de −10%.
**[30-37 s]** "Y una sola jornada de menos 6.2%, el 24 de junio de 2016, rompe el límite diario de 5%."
> Boceto: una barra roja de −6.2% que cruza la línea de −5% con golpe de bass.
**[37-46 s]** "El trading no se promete: se prueba. El video completo está en el canal. No es asesoría financiera. Antes de creerle a un Sharpe, pregunta qué pasa con:"
> Boceto: frase de marca; logo ATLAS; corte directo al inicio (loop).

## Descripción (YouTube)
La prueba de fuego del bot: todas las señales rezagadas un día, como las ejecutaría un bot real (decide por la tarde, opera al día siguiente).
La base filtrada da Sharpe −0.17 (2014–2024) y −0.46 (2007–2013); la re-entrada, −1.00 y −0.76; la cuenta se cierra a los 241 días con −10.0%.
Con la señal del mismo día, la base daba 1.23 y 1.06.
Todos los datos: https://atlas-lab-one.vercel.app (experimento #27)
Contenido educativo. No es asesoría financiera ni recomendación de inversión.

Capítulos: 0:00 Gancho · 0:20 Dónde encaja en la serie · 0:45 El problema de ejecución · 1:16 Una analogía · 1:39 La prueba · 2:15 Cómo leer un Sharpe negativo · 2:35 Resultados · 3:02 La cuenta · 3:19 Cómo mueren las cuentas · 3:51 Qué significa para la serie · 4:13 Qué no dice esta prueba · 4:37 Con tu capital · 5:04 Conclusión · 5:26 Cierre

Etiquetas: sesgo de mirar el futuro, look-ahead bias, backtest, bot de trading, ejecutable, Sharpe ratio, VIX, prop firm, drawdown, trading con datos, ATLAS Lab, trading algorítmico

## Rúbrica (autoevaluación del Short)
hook_0_3s 5 · ritmo 4 · promesa_cumplida 5 · potencial_loop 5 · claridad_no_traders 4 · honestidad_atlas 5 · audio 4 · cta 4 → promedio 4.50 (aprobado: ≥ 4.0, hook ≥ 4, honestidad 5)
Notas: el gancho es una comparación de dos cifras con una sola variable cambiada (un día); la honestidad es 5 porque se dice qué no demuestra (no es que ningún filtro funcione) y no se oculta que la base también muere.

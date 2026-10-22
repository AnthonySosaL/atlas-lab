# Experimento #28 — Retraso de 1 día + interruptor de emergencia (kill-switch)

Estado del guion: **BORRADOR — pendiente de aprobación**
Estado del experimento: **murió** (veredicto del sitio: «No sirvió») · Serie G — Construyendo un bot (y por qué murió)
Datos usados: `experiments.json` (v=28: kpis, metrics, params_view, chart, verdict, analysis, notes, capital), `exp_details.json` (clave `extra-v28`: algo, filters), `series/extra-v28.json` (curva ×3 hasta el corte y curva hipotética «Sin reglas de prop firm»), tabla «Con tu capital» (archivo de capital en `docs/youtube/`; sin curva de «Sin estrategia»). Relacionados: #27 (la señal de ayer), #29 y #30.

## Títulos
1. Cierro todo si el día pierde 3%: la cuenta murió igual (kill-switch)
2. El freno de emergencia que no frena: 0 de 3 apalancamientos sobreviven
3. Sharpe −1.06 con ×3: por qué un kill-switch no salva a un bot

## Miniatura
Fondo `#09090b`. Un botón rojo `#e11d2a` de emergencia con «−3%» y, detrás, la curva real hundiéndose; texto en Segoe UI Black «NO FRENA» (dos palabras, sin repetir los títulos). Logo ATLAS abajo a la derecha.

---

## VIDEO LARGO (16:9, ≈ 5:33 min)
Ritmo visual: algo cambia en pantalla cada 2-3 s; los pasos de cada boceto van en orden. Fórmula del canal: b-roll real detrás, Ken Burns alterno, subtítulos karaoke, whoosh + flash en cada corte.

**[0:00 — Gancho]** (pantalla: botón de emergencia y curva)
Lo lógico para sobrevivir a un mal día es cerrar todo cuando la pérdida llega a cierto punto. Eso hace un kill-switch, un interruptor de emergencia. Lo probé con las señales de ayer, la única versión que un bot real puede operar, y con un freno a los menos 3% del día. Resultado: con ×3, un Sharpe, el retorno por unidad de riesgo, de menos 1.06 en 2014 a 2024. Ningún apalancamiento sobrevive en los dos periodos.
> Boceto: botón rojo que se pulsa al llegar la curva a −3% del día; la curva sigue cayendo igual; contadores «×3», «−1.06» y el texto «ninguno sobrevive» con golpe de bass.

**[0:32 — Presentación]** (pantalla: rótulo «Experimento #28 · Retraso de 1 día + interruptor de emergencia»)
Este es el experimento #28 de ATLAS Lab: Retraso de 1 día más interruptor de emergencia. Todos los resultados están en la página del experimento.
> Boceto: el rótulo «EXPERIMENTO #28 · Retraso de 1 día + interruptor de emergencia» entra sobre velas animadas con opacidad 0.12.

**[0:42 — Dónde encaja en la serie]** (pantalla: mapa de la serie, #15 al #30)
Después de la prueba de fuego del #27, la pregunta es natural: si el filtro con la señal de ayer llega tarde, ¿puede un freno dentro del día arreglarlo? Este es el primero de tres experimentos con la versión ejecutable: el #28, el #29 y el #30.
> Boceto: línea de la serie con el #27 en rojo y tres puntos nuevos, #28, #29 y #30, iluminándose en cadena; etiqueta «versión ejecutable».

**[1:03 — Cómo funciona el interruptor]** (pantalla: línea del día con un tope)
La regla es simple: si la pérdida del día llega a menos 3%, se cierra todo. Pero hay que simularla con realismo. Se añade un deslizamiento de 0.2% al activarse el freno, porque nadie cierra exactamente en el tope. Se usan los saltos de apertura reales, los gaps: si el precio abre ya muy abajo, el freno no puede salvarte. Y el mínimo del día se estima con los mínimos reales.
> Boceto: gráfico de un día con una línea de tope en −3%; tres casos: cierre limpio en −3%, cierre con deslizamiento, y gap de apertura que se salta el tope.

**[1:33 — Por qué los gaps importan]** (pantalla: precio que abre más abajo)
Los saltos de apertura son los peores enemigos de un freno. Si el precio abre ya por debajo del tope, el cierre ocurre debajo del tope, no en él. Por eso la simulación usa los gaps reales y no supone que siempre se cierra en el nivel exacto.
> Boceto: dos días de precios: en uno, el precio cae gradualmente y el freno cierra en −3%; en el otro, abre por debajo del tope y el freno cierra ya más abajo.

**[1:53 — Cómo se probó]** (pantalla: checklist de filtros)
La señal macro va rezagada un día. Se prueban los apalancamientos, es decir, el tamaño de las posiciones frente al capital: ×2, ×3 y ×4, en 2014 a 2024, con 15 instrumentos, y en 2007 a 2013, con siete pares de divisas más oro, con las reglas de una prop firm, la empresa que presta la cuenta y la cierra si pierdes demasiado. En costos, solo está el deslizamiento de 0.2%; no hay spread ni comisiones. Una nota de transparencia: las cifras salen de una reproducción con el motor ejecutable, porque el script termina sin registrar carpeta cuando ningún apalancamiento sobrevive en los dos periodos.
> Boceto: checklist de `exp_details.json`: «señal rezagada 1 día: pasa», «sobrevive a la prop firm en ambos periodos: FALLA», «2007–2013: FALLA», «costos: solo deslizamiento 0.2%».

**[2:37 — Resultados]** (pantalla: barras de Sharpe por apalancamiento)
En 2014 a 2024, el Sharpe es de menos 0.52 con ×2, menos 1.06 con ×3 y menos 1.59 con ×4. En 2007 a 2013, con ×3 es de menos 0.57 y con ×4, de menos 1.15. Ningún apalancamiento sobrevive a las reglas de la prop firm en los dos periodos. Y la causa es siempre la misma: el drawdown acumulado, la caída desde el máximo de la cuenta, con su límite de 10%.
> Boceto: gráfico de barras de `experiments.json` (chart: «Sharpe 2014–2024 según apalancamiento»): ×2 −0.52, ×3 −1.06, ×4 −1.59 en rojo; segunda fila de barras para 2007–2013 (×3 −0.57, ×4 −1.15).

**[3:08 — Frena el día malo, no la racha]** (pantalla: escalera de pérdidas)
Aquí está la lección. El kill-switch protege del día malo, no de la racha mala. Las pérdidas se acumulan durante semanas o meses hasta cruzar el drawdown de 10%: entre 34 días y unos 23 meses desde el máximo hasta la quiebra. El freno diario no lo evita, porque ningún día individual toca el tope.
> Boceto: escalera de pequeñas pérdidas diarias, todas por debajo del tope de −3%, que suman hasta cruzar la línea de −10%; rótulo «34 días a unos 23 meses».

**[3:31 — Dos riesgos distintos]** (pantalla: día malo y racha mala)
Hay dos riesgos distintos. Uno es el día malo, una caída brusca en una jornada. Otro es la racha mala, muchas pérdidas pequeñas que se acumulan. Un control de riesgo diario cubre el primero; el segundo necesita menos apalancamiento o una señal que saque al bot a tiempo, y con la señal de ayer esa señal llega tarde.
> Boceto: dos paneles: «día malo» con una barra grande y un escudo verde; «racha mala» con muchas barras pequeñas que suman hasta cruzar −10% y el escudo no las ve.

**[3:56 — La curva del ×3]** (pantalla: curva hasta el corte)
La curva con ×3 se corta el 29 de junio de 2015, al día 230. Si se ignoraran las reglas de la prop firm, la línea hipotética seguiría y terminaría en 41,902, partiendo de 100,000. Pero en la realidad la cuenta se cierra ese día.
> Boceto: la curva real hasta el 2015-06-29 y, en gris punteado, la hipotética hasta 41,902 con el rótulo «hipotética: la cuenta real se cierra».

**[4:15 — Con tu capital]** (pantalla: tarjeta de capital $10,000 / $100,000)
Con 10,000 dólares, la curva termina en menos $1,081; con 100,000, en menos $10,814. En este experimento no hay curva de «sin estrategia» para comparar. Con tu capital verías esa cuenta cerrada.
> Boceto: tarjeta «Con tu capital» del sitio con el selector; la curva roja cortada en junio de 2015; el cuadro de comparación en «—».

**[4:30 — Qué queda por probar]** (pantalla: dos preguntas)
Quedan dos preguntas. ¿Y si el freno se dispara antes? Eso es el experimento 29. ¿Y si baja el apalancamiento? Eso es el 30. Spoiler: ninguna de las dos cambia el panorama.
> Boceto: dos tarjetas «#29: frenar antes» y «#30: menos apalancamiento» con candados cerrados.

**[4:44 — Conclusión]** (pantalla: texto grande)
Veredicto: no sirvió. Ningún apalancamiento sobrevive las reglas de la prop firm en ambos periodos; con ×3, el Sharpe es de menos 1.06 en 2014 a 2024. El kill-switch frena el día malo, no la racha.
> Boceto: sello rojo «NO SIRVIÓ»; frase final «El trading no se promete: se prueba».

**[5:00 — Ficha del experimento #28]** (pantalla: tarjeta con la URL)
Ficha del experimento #28.
Estado: murió.
Cifra clave: con ×3, Sharpe de menos 1.06 en 2014–2024; ningún apalancamiento sobrevive en los dos periodos.
Filtro que decidió: sobrevivir a las reglas de la prop firm en ambos periodos.
Lección: el freno diario protege del día malo, no de la racha.
Revísalo completo en atlas-lab-one.vercel.app/e/28.
> Boceto: tarjeta final con cuatro líneas (estado · cifra clave · filtro que decidió · lección) y la URL «atlas-lab-one.vercel.app/e/28» en grande; sello «NO SIRVIÓ»; fondo de velas con opacidad 0.12.

**[5:20 — Cierre]** (pantalla: logo y enlace)
En el siguiente video, qué pasa si el freno se dispara antes: el experimento 29. Todos los datos en atlas-lab-one.vercel.app/e/28. Contenido educativo, no es asesoría financiera.
> Boceto: pantalla final con enlace y logo ATLAS; fondo de velas animadas con opacidad 0.12.

---

## SHORT (9:16, ≈ 44 s)
Fórmula visual: b-roll Pexels vertical + overlay oscuro 0.6, Ken Burns alternando in/out, subtítulos karaoke en MAYÚSCULAS con las cifras en rojo, whoosh + flash en cada corte, golpe de bass + sacudida solo en el 0-3 s y en el «ninguna sobrevive»; ticker arriba, viñeta y velas con opacidad ≤ 0.12.

**[0-3 s]** "Cierro todo si el día pierde 3%. Murió igual."
> Boceto: botón rojo que se pulsa en −3%; la curva real sigue cayendo; texto gigante «−3%».
**[3-7 s]** "Es un kill-switch: un interruptor que cierra todas las posiciones."
> Boceto: icono de interruptor y la palabra «kill-switch»; la curva se aplana al pulsarlo.
**[7-12 s]** "Lo combiné con señales de ayer, la única versión que un bot real puede operar."
> Boceto: reloj con «decide hoy, opera mañana»; check verde.
**[12-17 s]** "Probé apalancamiento ×2, ×3 y ×4, de 2014 a 2024 y de 2007 a 2013."
> Boceto: tres chips (×2, ×3, ×4) y dos barras de tiempo.
**[17-23 s]** "Sharpe de 2014 a 2024: menos 0.52 con ×2, menos 1.06 con ×3, menos 1.59 con ×4."
> Boceto: tres barras rojas que crecen hacia abajo con tick, una por cifra.
**[23-25 s]** "Ninguna cuenta sobrevive en los dos periodos."
> Boceto: sello «NINGUNA SOBREVIVE» en rojo con golpe de bass y sacudida.
**[25-33 s]** "El freno protege del día malo, no de la racha mala: las pérdidas se acumulan semanas o meses hasta cruzar el 10%."
> Boceto: escalera de pérdidas pequeñas que cruza la línea de −10%.
**[33-41 s]** "El video completo está en el canal. Experimento 28 completo en el enlace. No es asesoría financiera. El trading no se promete: se prueba."
> Boceto: frase de marca en blanco; tarjeta «experimento #28 completo en el enlace» y la URL corta; logo ATLAS.
**[41-44 s]** "Y cuando te vendan un freno de emergencia:"
> Boceto: botón rojo con interrogación; corte directo al inicio (loop).

## Descripción (YouTube)
https://atlas-lab-one.vercel.app/e/28?utm_source=youtube&utm_medium=video&utm_campaign=exp028-t1
Ficha del experimento #28 (Retraso de 1 día + interruptor de emergencia): murió (No sirvió) · Sharpe −0.52 con ×2, −1.06 con ×3 y −1.59 con ×4 (2014–2024); ningún apalancamiento sobrevive en los dos periodos.
Versión ejecutable del bot: señal macro rezagada un día y un kill-switch que cierra todo cuando el día pierde 3% (con 0.2% de deslizamiento y gaps reales).
Sharpe en 2014–2024: −0.52 con ×2, −1.06 con ×3 y −1.59 con ×4; ningún apalancamiento sobrevive en ambos periodos.
El freno protege del día malo, no de la racha mala.
Contenido educativo. No es asesoría financiera ni recomendación de inversión.

Capítulos: 0:00 Gancho · 0:32 Presentación · 0:42 Dónde encaja en la serie · 1:03 Cómo funciona el interruptor · 1:33 Por qué los gaps importan · 1:53 Cómo se probó · 2:37 Resultados · 3:08 Frena el día malo, no la racha · 3:31 Dos riesgos distintos · 3:56 La curva del ×3 · 4:15 Con tu capital · 4:30 Qué queda por probar · 4:44 Conclusión · 5:00 Ficha del experimento #28 · 5:20 Cierre

Etiquetas: kill-switch, stop de emergencia, gestión de riesgo, bot de trading, prop firm, drawdown, apalancamiento, backtest, trading con datos, ATLAS Lab, trading algorítmico, riesgo de ruina

## Descripción del Short
https://atlas-lab-one.vercel.app/e/28?utm_source=youtube&utm_medium=short&utm_campaign=exp028-t1
Ficha del experimento #28: murió · con ×3, Sharpe −1.06; ningún apalancamiento sobrevive. Video completo en el canal. Contenido educativo, no es asesoría financiera.

## Rúbrica (autoevaluación del Short)
hook_0_3s 4 · ritmo 4 · promesa_cumplida 5 · potencial_loop 4 · claridad_no_traders 4 · honestidad_atlas 5 · audio 4 · cta 4 → promedio 4.25 (aprobado: ≥ 4.0, hook ≥ 4, honestidad 5)
Notas: el gancho contradice una intuición común (el freno de emergencia debería salvar la cuenta); la honestidad es 5 porque se dicen las tres cifras de Sharpe tal cual y que ninguna cuenta sobrevive.

## Otros temas de este experimento
- Tema 1: `exp-028-kill-switch-lag1.md` — Retraso de 1 día + interruptor de emergencia (kill-switch)
- Tema 2: `exp-028-t2-freno-con-realismo.md` — cómo se simula un freno con realismo
- Tema 3: `exp-028-t3-sin-reglas-41902.md` — aunque no existieran las reglas
- Ver también (temas de otro experimento que usan las cifras del #28): `exp-027-t3-cinco-cuentas-un-maximo.md`, `exp-030-t2-x1-5-zona-segura.md`

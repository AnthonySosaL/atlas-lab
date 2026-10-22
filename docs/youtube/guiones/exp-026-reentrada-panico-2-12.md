# Experimento #26 — Reentrada cuando el pánico se enfría

Estado del guion: **BORRADOR — pendiente de aprobación**
Estado del experimento: **murió** (veredicto del sitio: «No sirvió») · Serie G — Construyendo un bot (y por qué murió)
Datos usados: `experiments.json` (v=26: kpis, metrics, params, params_view, verdict, analysis, notes, capital), `exp_details.json` (clave `…-v26`: algo, filters), `series/20260610_135036_re-entrada-panico-enfriandose-v26.json` (curva de la estrategia y curva «Sin estrategia»), tabla «Con tu capital» (archivo de capital en `docs/youtube/`). Relacionados: #16 (la base, Sharpe 1.23), #21 (la base fuera de muestra, 1.06) y #27 (la señal de ayer).

## Títulos
1. Sharpe 2.12 y +1,226.7%: cuando el resultado es demasiado bueno
2. Probé 6 variantes: las 6 batieron a mi bot (y eso es una alarma)
3. $100,000 → +$1,227,815: la curva que ningún bot real puede operar

## Miniatura
Fondo `#09090b`. «2.12» enorme en blanco y Segoe UI Black, con la curva real disparándose hacia arriba en verde `#22c55e`; una alarma roja `#e11d2a` con el texto «ALARMA» (una palabra, sin repetir los títulos). Logo ATLAS abajo a la derecha.

---

## VIDEO LARGO (16:9, ≈ 5:54 min)
Ritmo visual: algo cambia en pantalla cada 2-3 s; los pasos de cada boceto van en orden. Fórmula del canal: b-roll real detrás, Ken Burns alterno, subtítulos karaoke, whoosh + flash en cada corte.

**[0:00 — Gancho]** (pantalla: la curva real disparándose)
Si alguien te enseña esta curva, tiene que explicarte una cosa: a qué hora conocía cada dato. Con 100,000 dólares, esta estrategia gana 1,227,815 dólares en diez años. Sharpe de 2.12, el retorno por unidad de riesgo. Más 1,226.7%. Es el Sharpe más alto de los experimentos 16 al 30. Y no se puede operar.
> Boceto: la curva real de `series/…v26.json` disparándose con el contador «+$1,227,815»; el medidor de Sharpe llega a 2.12; al final, la alarma roja parpadea con golpe de bass y sacudida.

**[0:24 — Presentación]** (pantalla: rótulo «Experimento #26 · Reentrada cuando el pánico se enfría»)
Este es el experimento #26 de ATLAS Lab: Reentrada cuando el pánico se enfría. Todos los resultados están en la página del experimento.
> Boceto: el rótulo «EXPERIMENTO #26 · Reentrada cuando el pánico se enfría» entra sobre velas animadas con opacidad 0.12.

**[0:34 — Dónde encaja en la serie]** (pantalla: mapa de la serie, #15 al #30)
Este es el último experimento antes de la prueba de fuego del #27. Los anteriores muestran cómo cada idea nueva mejora o empeora al bot. Este mejora tanto, que la sospecha es inevitable.
> Boceto: línea de la serie con el #26 iluminado y la flecha «sospecha» hacia el #27.

**[0:48 — La idea: volver cuando el pánico se enfría]** (pantalla: VIX bajando de su máximo)
La regla del filtro saca al bot del mercado cuando hay miedo. Esta idea lo trae de vuelta, con menos apalancamiento, es decir, posiciones más pequeñas, ×1.5 o ×2, cuando el VIX ya bajó por debajo de cierta fracción de su máximo de los últimos 10 días: 0.7, 0.8 o 0.9 veces ese máximo: cuando el pánico se está enfriando.
> Boceto: curva del VIX con un máximo de 10 días marcado y tres líneas horizontales en 0.7, 0.8 y 0.9 veces el máximo; cuando la curva cruza hacia abajo, un cartel verde «re-entra a ×2».

**[1:14 — Cómo se probó]** (pantalla: checklist de filtros)
Una grilla de 6 combinaciones —3 niveles de enfriamiento por 2 apalancamientos—, con reglas fijadas de antemano y sin aprendizaje automático, en 2014 a 2024 y en 2007 a 2013, con las reglas de una prop firm, la empresa que presta la cuenta y la cierra si pierdes demasiado. Se publica la mejor que sobrevive en ambos periodos, elegida por el Sharpe de 2014–2024. No se descuentan costos ni se aplica el Deflated Sharpe.
> Boceto: rejilla de 6 casillas (0.7/0.8/0.9 por ×1.5/×2) que se iluminan una a una; checklist de `exp_details.json`: «2014–2024: pasa», «2007–2013: pasa», «parámetros elegidos en la misma muestra: FALLA», «señal de ayer: FALLA», «costos y DSR: no aplicados».

**[1:45 — Resultados]** (pantalla: tarjetas de KPI y las 6 barras)
Las seis combinaciones superan a la base, que daba un Sharpe de 1.23: van de 1.36 hasta 2.12. La mejor, enfriamiento de 0.9 y apalancamiento ×2: Sharpe de 2.12, más 1,226.7% y caída máxima de menos 10.2%. Fuera de muestra, es decir, con datos que no se usaron para diseñar la regla, en 2007 a 2013: Sharpe de 1.53, contra 1.06 de la base.
> Boceto: seis barras verdes de 1.36 a 2.12 con la línea de la base en 1.23; la barra de 2.12 se resalta; tarjetas con tick (+1,226.7% · −10.2% · 1.53).

**[2:12 — Cómo se vería en un curso]** (pantalla: portada de curso imaginaria)
Piensa cómo se vería esta curva en un curso de trading: diez años, dos periodos que pasan, una variante mejor que la base y un Sharpe de 2.12. Se vería como una estrategia validada. Lo único que la separa de un espejismo es una pregunta que casi nadie hace: ¿a qué hora se conocía cada dato?
> Boceto: portada genérica de curso con la curva real, un sello «VALIDADA» en dorado y, debajo, la pregunta «¿a qué hora se conocía el dato?» en rojo; el sello se desvanece al terminar la frase.

**[2:36 — La alarma]** (pantalla: alarma y grilla)
Un resultado demasiado bueno en la grilla es una alarma, no un premio. Seis de seis superan a la base, y por mucho. Cuando todo mejora a la vez, conviene sospechar. Esta regla pasaba todas las pruebas menos la de ejecutabilidad.
> Boceto: las seis barras parpadean en verde y pasan a ámbar con el rótulo «¿demasiado bueno?»; sonido de alarma breve.

**[2:54 — Elegir la mejor de seis]** (pantalla: selección en la misma muestra)
Hay una segunda sospecha, más sutil. La mejor combinación se eligió entre seis por su Sharpe en 2014–2024, el mismo periodo con el que luego se la califica. Eso se llama selección en la misma muestra: la regla elegida lleva ventaja de partida. No se aplicó el Deflated Sharpe, el ajuste estadístico por cuántas ideas se probaron.
> Boceto: seis cajas cerradas, una se abre con el cartel «la mejor» y una flecha circular que vuelve a la misma muestra; etiqueta «ajuste por intentos: no aplicado».

**[3:18 — Tres alarmas de un backtest]** (pantalla: tres luces rojas)
Resumamos las alarmas. Primera: un Sharpe muy por encima del de la base. Segunda: que todas las variantes de la grilla mejoren, no solo una. Tercera: elegir la mejor de pocas por el mismo periodo que la califica. Este experimento enciende las tres a la vez, y por eso se mira con lupa antes de celebrar.
> Boceto: tres luces que se encienden una por una: «Sharpe muy alto», «todas mejoran», «mejor de seis en la misma muestra»; sirena breve en la tercera.

**[3:42 — El detalle de siempre]** (pantalla: reloj y cierre de hoy)
Y el motivo principal: la regla usa el VIX y la señal del cierre del mismo día. Es información que un bot real aún no tendría al decidir. Con las señales de ayer, el Sharpe cae a menos 1.00 y la cuenta no sobrevive, como se mide en el experimento 27.
> Boceto: dos barras, «señal del mismo día: 2.12» (verde, alta) y «señal de ayer: −1.00» (roja, hacia abajo); la verde se rompe con golpe de bass y sacudida.

**[4:04 — Con tu capital]** (pantalla: tarjeta de capital $10,000 / $100,000)
Con 10,000 dólares, la curva termina en más $122,781; con 100,000, en más $1,227,815. Comprando y esperando, serían más $5,904 y más $59,039. Es la cifra más grande de los experimentos 16 al 30, y es justamente la que no se puede cobrar: usa el VIX y el filtro del cierre del mismo día, con apalancamiento ×3 y ×2 al re-entrar.
> Boceto: tarjeta «Con tu capital» del sitio con el selector; curva verde disparada frente a la gris «Sin estrategia»; aviso ámbar «información del mismo día».

**[4:30 — Qué haría falta para creerle]** (pantalla: tres candados)
Para creerle a esta curva haría falta la señal de ayer, costos y un ajuste por haber elegido la mejor de seis. Con la primera sola, se cae: el Sharpe pasa de 2.12 a menos 1.00. Por eso, cuando un resultado te parezca demasiado bueno, pregunta primero a qué hora se conocía el dato.
> Boceto: tres candados; el primero se abre y cae la curva a la zona roja; texto «¿a qué hora se conocía el dato?».

**[4:53 — Conclusión]** (pantalla: texto grande)
Veredicto: no sirvió. El Sharpe de 2.12 salía de usar información del mismo día que un bot real no tendría; con las señales de ayer cae a menos 1.00. Una de las ilusiones más peligrosas es la que pasa todas las pruebas menos la de si se puede ejecutar de verdad.
> Boceto: sello rojo «NO SIRVIÓ»; frase final «El trading no se promete: se prueba».

**[5:15 — Ficha del experimento #26]** (pantalla: tarjeta con la URL)
Ficha del experimento #26.
Estado: murió.
Cifra clave: Sharpe de 2.12 y más 1,226.7%, la mejor de seis; con la señal de ayer, menos 1.00.
Filtro que decidió: la selección de la mejor de seis en la misma muestra y el uso del cierre del mismo día.
Lección: un resultado demasiado bueno es una alarma: pregunta a qué hora se conocía cada dato.
Revísalo completo en atlas-lab-one.vercel.app/e/26.
> Boceto: tarjeta final con cuatro líneas (estado · cifra clave · filtro que decidió · lección) y la URL «atlas-lab-one.vercel.app/e/26» en grande; sello «NO SIRVIÓ»; fondo de velas con opacidad 0.12.

**[5:41 — Cierre]** (pantalla: logo y enlace)
En el siguiente video, la prueba de fuego con la señal de ayer: el experimento 27. Todos los datos en atlas-lab-one.vercel.app/e/26. Contenido educativo, no es asesoría financiera.
> Boceto: pantalla final con enlace y logo ATLAS; fondo de velas animadas con opacidad 0.12.

---

## SHORT (9:16, ≈ 45 s)
Fórmula visual: b-roll Pexels vertical + overlay oscuro 0.6, Ken Burns alternando in/out, subtítulos karaoke en MAYÚSCULAS con las cifras en rojo, whoosh + flash en cada corte, golpe de bass + sacudida solo en el 0-3 s y en el giro del −1.00; ticker arriba, viñeta y velas con opacidad ≤ 0.12.

**[0-2 s]** "Cien mil dólares ganan 1,227,815. Es imposible."
> Boceto: curva real disparándose; contador «+$1,227,815»; sello rojo «IMPOSIBLE» al cerrar la frase.
**[2-10 s]** "Es un bot que vuelve al mercado cuando el pánico se enfría: el VIX baja de su máximo de 10 días."
> Boceto: curva del VIX cayendo desde su pico; cartel verde «re-entra».
**[10-14 s]** "Probé seis variantes. Las seis superan al bot base: Sharpe de 1.36 a 2.12."
> Boceto: seis barras verdes de 1.36 a 2.12 con la línea de la base; cada barra con tick.
**[14-18 s]** "La mejor: Sharpe 2.12, más 1,226.7%, caída máxima de 10.2%."
> Boceto: la barra de 2.12 se agranda; tres tarjetas con tick (2.12 · +1,226.7% · −10.2%).
**[18-21 s]** "Y fuera de muestra, 2007 a 2013, Sharpe 1.53."
> Boceto: segundo eje de tiempo con la tarjeta «1.53 vs 1.06 de la base».
**[21-25 s]** "Elegí la mejor de seis mirando el mismo periodo que la califica."
> Boceto: seis cajas; una se abre y una flecha vuelve a la misma muestra.
**[25-31 s]** "Un resultado tan bueno es una alarma, no un premio. Usa el VIX del cierre de hoy."
> Boceto: la alarma roja parpadea; reloj con el cierre de hoy.
**[31-35 s]** "Con la señal de ayer: Sharpe menos 1.00 y la cuenta muere."
> Boceto: dos barras, 2.12 verde y −1.00 roja; la verde se rompe con golpe de bass y sacudida.
**[35-45 s]** "El trading no se promete: se prueba. El video completo está en el canal. Experimento 26 completo en el enlace. No es asesoría financiera. Cuando veas una curva así:"
> Boceto: frase de marca; tarjeta «experimento #26 completo en el enlace» y la URL corta; logo ATLAS; corte directo al inicio (loop).

## Descripción (YouTube)
https://atlas-lab-one.vercel.app/e/26?utm_source=youtube&utm_medium=video&utm_campaign=exp026-t1
Ficha del experimento #26 (Reentrada cuando el pánico se enfría): murió (No sirvió) · la mejor de 6 combinaciones: Sharpe 2.12, +1,226.7% y 1.53 fuera de muestra · con la señal de ayer: −1.00.
Regla de re-entrada «pánico enfriándose»: volver al mercado a ×1.5 o ×2 cuando el VIX baja de su máximo de 10 días.
Las 6 variantes superan a la base (Sharpe de 1.36 a 2.12); la mejor da +1,226.7% con Sharpe 2.12 y 1.53 fuera de muestra, pero usa el VIX y la señal del cierre del mismo día.
Con las señales de ayer, el Sharpe cae a −1.00.
Contenido educativo. No es asesoría financiera ni recomendación de inversión.

Capítulos: 0:00 Gancho · 0:24 Presentación · 0:34 Dónde encaja en la serie · 0:48 La idea: volver cuando el pánico se enfría · 1:14 Cómo se probó · 1:45 Resultados · 2:12 Cómo se vería en un curso · 2:36 La alarma · 2:54 Elegir la mejor de seis · 3:18 Tres alarmas de un backtest · 3:42 El detalle de siempre · 4:04 Con tu capital · 4:30 Qué haría falta para creerle · 4:53 Conclusión · 5:15 Ficha del experimento #26 · 5:41 Cierre

Etiquetas: sesgo de mirar el futuro, demasiado bueno para ser verdad, VIX, bot de trading, backtest, Sharpe ratio, selección de la mejor variante, prop firm, trading con datos, ATLAS Lab, trading algorítmico, overfitting

## Descripción del Short
https://atlas-lab-one.vercel.app/e/26?utm_source=youtube&utm_medium=short&utm_campaign=exp026-t1
Ficha del experimento #26: murió · la mejor de 6 variantes, Sharpe 2.12; con la señal de ayer, −1.00. Video completo en el canal. Contenido educativo, no es asesoría financiera.

## Rúbrica (autoevaluación del Short)
hook_0_3s 5 · ritmo 4 · promesa_cumplida 5 · potencial_loop 5 · claridad_no_traders 4 · honestidad_atlas 5 · audio 4 · cta 4 → promedio 4.50 (aprobado: ≥ 4.0, hook ≥ 4, honestidad 5)
Notas: el gancho combina una cifra enorme con la negación inmediata («es imposible»), sin promesa falsa; la honestidad es 5 porque se explican las dos sospechas (mismo día y mejor de seis) y se dice el veredicto.

## Otros temas de este experimento
- Tema 1: `exp-026-reentrada-panico-2-12.md` — Reentrada cuando el pánico se enfría
- Tema 2: `exp-026-t2-la-mejor-de-seis.md` — la mejor de seis
- Tema 3: `exp-026-t3-volver-cuando-el-miedo-baja.md` — volver cuando el miedo baja

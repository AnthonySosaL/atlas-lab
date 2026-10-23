# Experimento #26 — Reentrada cuando el pánico se enfría · Tema 3: volver cuando el miedo baja

Tema 3 de 3 del experimento #026 · Qué aporta frente a los otros temas: explica para principiantes la idea de mercado detrás de la regla (qué es el VIX, qué es «el pánico que se enfría» y por qué suena tan lógico volver) y el detalle de la hora en que se conoce el dato. El tema 1 se centra en la alarma del resultado; el tema 2, en elegir la mejor de seis. Se entiende sin haber visto los otros temas.
Estado del guion: **BORRADOR — pendiente de aprobación**
Estado del experimento: **murió** (veredicto del sitio: «No sirvió») · Serie G — Construyendo un bot (y por qué murió)
Datos usados: `experiments.json` (v=26: description, params_view, metrics, kpis, verdict, capital; v=27: metrics, kpis; v=31 para la hora 16:15 ET en `exp_details.json`), `exp_details.json` (claves `…-v26`, `…-v27`, `…-v31`: algo), tabla «Con tu capital» (archivo de capital en `docs/youtube/`).
Producción (CLAUDE.md del canal): b-roll real detrás de cada escena con overlay oscuro 0.6, Ken Burns alternando in/out, subtítulos karaoke en MAYÚSCULAS con cifras en rojo, un dato visual por escena, golpe de bajo + sacudida solo en 1–2 momentos. Colores: rojo `#e11d2a`, verde `#22c55e`, fondo `#09090b`.

## Títulos (3 opciones)
1. Volver al mercado cuando el miedo baja: la idea que subió el Sharpe a 2.12
2. El VIX de hoy solo existe a las 16:15: el detalle que cambia una estrategia
3. Qué es el VIX y cómo se mide «el pánico que se enfría» (con datos del experimento #26)

## Miniatura (pensada para el título 2)
Fondo `#09090b`. Una curva del VIX que sube a un pico y empieza a bajar, con una flecha verde `#22c55e` «VUELVE» en la bajada; en la esquina, un reloj marcando «16:15» en rojo `#e11d2a`. Texto en Segoe UI Black: «¿CUÁNDO LO SABES?» (tres palabras, sin repetir los títulos). Logo ATLAS abajo a la derecha.

---

## VIDEO LARGO (16:9, ≈ 4:14 min)

**[0:00 — Gancho]** (pantalla: curva del VIX con un pico)
Una regla muy lógica: cuando el miedo del mercado baja, vuelve a entrar. Con ella, el Sharpe sube de 1.23 a 2.12. Pero hay un detalle de hora que lo cambia todo.
BOCETO: curva del VIX que sube a un pico y baja; una flecha verde «re-entra» en la bajada; contadores «1.23 → 2.12». kb=in.

**[0:14 — Qué es este experimento]** (pantalla: rótulo con el número y el nombre)
Este es el experimento #26 de ATLAS Lab: Reentrada cuando el pánico se enfría. Todos los resultados están en la página del experimento. En este video lo cuento desde cero, para quien no ha operado nunca.
BOCETO: rótulo «EXPERIMENTO #26 · Reentrada cuando el pánico se enfría» sobre velas con opacidad 0.12. kb=out.

**[0:30 — Qué es el VIX]** (pantalla: medidor de miedo)
El VIX es el índice del miedo de Wall Street. Cuando sube, los inversores esperan sacudidas en el mercado; cuando baja, se calman. En los desplomes, el VIX se dispara. Por eso muchas estrategias lo usan como alarma: si pasa de cierto nivel, salir del mercado.
BOCETO: medidor semicircular verde-ámbar-rojo con la aguja moviéndose; etiqueta «VIX: el índice del miedo».

**[0:49 — El bot de partida]** (pantalla: filtro de pánico)
El bot de esta serie compra una cesta de activos con apalancamiento ×3 y tiene un filtro de pánico. Cuando el filtro marca riesgo, el bot sale del mercado. El problema que se quería resolver: salir es fácil, pero después hay que decidir cuándo volver. Si vuelves tarde, puedes perderte la recuperación.
BOCETO: línea de tiempo con tramo «dentro ×3», tramo «fuera» y una interrogación «¿cuándo vuelvo?». kb=in.

**[1:10 — La regla del enfriamiento]** (pantalla: máximo de 10 días y tres líneas)
La regla es sencilla. Se mira el máximo del VIX de los últimos 10 días. Si el VIX de hoy ya bajó por debajo de cierta fracción de ese máximo, el pánico se está enfriando: el bot vuelve, con menos apalancamiento, ×1.5 o ×2. Las fracciones probadas fueron 0.7, 0.8 y 0.9. La mejor combinación: 0.9 y ×2.
BOCETO: curva del VIX con el máximo de 10 días marcado y tres líneas horizontales (0.7, 0.8, 0.9 del máximo); cuando la curva cruza la de 0.9, cartel verde «re-entra a ×2».

**[1:38 — Qué salió]** (pantalla: tarjetas de KPI)
El resultado, en 2014 a 2024: Sharpe de 2.12, más 1,226.7% y caída máxima de menos 10.2%, frente a un Sharpe de 1.23 de la base. Fuera de muestra, 2007 a 2013: 1.53 contra 1.06. Las seis combinaciones mejoran a la base, de 1.36 a 2.12. El Sharpe es la ganancia por unidad de riesgo.
BOCETO: tarjetas con tick (2.12 · +1,226.7% · −10.2% · 1.53); barra de la base en 1.23.

**[2:07 — El detalle de la hora]** (pantalla: reloj de un día de mercado)
Ahora el detalle. La regla usa el VIX de hoy. Pero el VIX del día solo existe después del cierre: la documentación del experimento 31 sitúa ese momento a las 16:15, hora de Nueva York. Un bot que decide con el VIX de hoy para actuar hoy está usando un dato que todavía no existe cuando tiene que decidir.
BOCETO: reloj con tres marcas: «mercado abre», «16:15 ET: existe el VIX de hoy» y «17:00 ET: cierra NY»; flecha roja tachada desde «16:15» hacia «decide al abrir».

**[2:32 — La versión que sí se puede ejecutar]** (pantalla: dos versiones)
La versión ejecutable usa el VIX de ayer. Es lo que mide el experimento 27: con la señal rezagada un día, la re-entrada con enfriamiento 0.9 y ×2 da un Sharpe de menos 1.00 en 2014–2024 y de menos 0.76 en 2007–2013. La cuenta se cierra el 12 de julio de 2015, a los 241 días.
BOCETO: dos barras: «VIX de hoy: 2.12» verde alta y «VIX de ayer: −1.00» roja hacia abajo; la verde se rompe con golpe de bajo + sacudida.

**[3:01 — Qué no dice esto]** (pantalla: dos frases)
Cuidado con lo que no se concluye. No se concluye que volver cuando el miedo baja sea una mala idea de mercado. Se concluye que esta versión, con el dato disponible a la hora de decidir, no sobrevive. Eso es distinto, y es importante decirlo así.
BOCETO: dos frases: «no dice: la idea es mala» (tachada) y «dice: esta versión, con el VIX de ayer, no sobrevive» (resaltada).

**[3:20 — Con tu capital]** (pantalla: tarjeta de capital $10,000 / $100,000)
Con 10,000 dólares, la simulación del experimento 26 termina en más 122,781; con 100,000, en más 1,227,815. Comprando y esperando serían más 5,904 y más 59,039. Esa cifra usa el VIX de hoy y no se puede cobrar.
BOCETO: tarjeta «Con tu capital» del sitio con el selector; curva verde frente a la gris; aviso ámbar «información del mismo día».

**[3:39 — Ficha del experimento #26]** (pantalla: tarjeta con la URL)
Ficha del experimento #26, Reentrada cuando el pánico se enfría. Estado: murió. Cifra clave: Sharpe de 2.12 y más 1,226.7% con el VIX de hoy; con el de ayer, menos 1.00. Filtros que decidieron: el uso del cierre del mismo día y la selección de la mejor de seis. Lección: una buena idea necesita un dato que exista a la hora de actuar. Revísalo completo en atlas-lab-one.vercel.app/e/26. Contenido educativo, no es asesoría financiera. El trading no se promete: se prueba.
BOCETO: tarjeta final con cuatro líneas (estado · cifra clave · filtro que decidió · lección) y la URL «atlas-lab-one.vercel.app/e/26» en grande; logo ATLAS; fondo de velas con opacidad 0.12.

---

## SHORT (9:16, ≈ 47 s)

**[0-3 s]** «Vuelve cuando el miedo baja: Sharpe 2.12.»
BOCETO: curva del VIX con el pico y la flecha verde de re-entrada; «2.12» gigante; golpe de bajo + sacudida.
**[3-11 s]** «El VIX es el índice del miedo. La regla: si baja a 0.9 de su máximo de 10 días, el bot vuelve a ×2.»
BOCETO: medidor de miedo y la línea en 0.9 del máximo. kb=out.
**[11-19 s]** «Con eso, 2014 a 2024: más 1,226.7%. Con 100,000 dólares, más 1,227,815.»
BOCETO: curva real disparándose; contador final.
**[19-27 s]** «Pero el VIX de hoy solo existe después de las 16:15, hora de Nueva York. Un bot no puede usarlo para decidir hoy.»
BOCETO: reloj con «16:15» en rojo y flecha tachada.
**[27-35 s]** «Con el VIX de ayer: Sharpe menos 1.00 y la cuenta se cierra a los 241 días.»
BOCETO: barra verde que se rompe en roja; golpe de bajo.
**[35-43 s]** «Experimento 26 completo en el enlace. El video completo está en el canal. No es asesoría financiera. El trading no se promete: se prueba.»
BOCETO: tarjeta con «experimento #26 completo en el enlace» y la URL corta; logo ATLAS.
**[43-47 s]** «Volver cuando el miedo baja… ¿con el dato de qué día?»
BOCETO: la curva del inicio con interrogación sobre el reloj; corte directo al inicio (loop).

---

## Descripción de YouTube (video largo)
https://atlas-lab-one.vercel.app/e/26?utm_source=youtube&utm_medium=video&utm_campaign=exp026-t3
Ficha del experimento #26 (Reentrada cuando el pánico se enfría): murió (No sirvió) · Sharpe 2.12 y +1,226.7% con el VIX de hoy; con el de ayer, −1.00 (2014–2024) y −0.76 (2007–2013).
Qué es el VIX, qué significa que el pánico se enfríe y por qué la hora en que se conoce el dato decide si una regla se puede ejecutar.
Contenido educativo. No es asesoría financiera ni recomendación de inversión.

## Descripción del Short
https://atlas-lab-one.vercel.app/e/26?utm_source=youtube&utm_medium=short&utm_campaign=exp026-t3
Ficha del experimento #26: murió · Sharpe 2.12 con el VIX de hoy; −1.00 con el de ayer. Video completo en el canal. Contenido educativo, no es asesoría financiera.

## Capítulos
0:00 Gancho · 0:14 Qué es este experimento · 0:30 Qué es el VIX · 0:49 El bot de partida · 1:10 La regla del enfriamiento · 1:38 Qué salió · 2:07 El detalle de la hora · 2:32 La versión que sí se puede ejecutar · 3:01 Qué no dice esto · 3:20 Con tu capital · 3:39 Ficha del experimento #26

## Etiquetas
VIX, índice del miedo, reentrada, bot de trading, sesgo de mirar el futuro, look-ahead bias, backtest, Sharpe ratio, trading para principiantes, trading con datos, atlas lab, trading algorítmico

## Rúbrica (autoevaluación, 1–5)
| Pieza | hook_0_3s | ritmo | promesa_cumplida | potencial_loop | claridad_no_traders | honestidad_atlas | audio | cta | Promedio |
|---|---|---|---|---|---|---|---|---|---|
| Largo | 4 | 4 | 5 | 4 | 5 | 5 | 4 | 4 | 4.38 |
| Short | 4 | 4 | 5 | 5 | 4 | 5 | 4 | 4 | 4.38 |

Hook ≥ 4 ✓ · honestidad 5 ✓. Punto débil: la hora de las 16:15 ET proviene de la documentación del experimento 31 (cuándo existe el cierre del VIX), no del 26; el video lo atribuye así.

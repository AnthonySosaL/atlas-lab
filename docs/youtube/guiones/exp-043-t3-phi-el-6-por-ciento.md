# Experimento #43 — Combinación carry + tendencia · Tema 3: φ, el 6% del día de pánico que sí se esquiva

Estado del guion: **BORRADOR — pendiente de aprobación**
Tema 3 de 4 del experimento #43. Qué aporta frente a los otros temas: es el CONCEPTO que decide el resultado. El tema 1 cuenta la idea y el resultado, el tema 2 prueba la robustez con siete escenarios y el tema 4 compara las tres versiones del carry; este tema explica qué es φ, cómo se midió con datos horarios (0.94) y por qué un φ de 0.5 sería un supuesto sin respaldo.
Estado del experimento: **MURIÓ** (la cuenta se corta el 25-ene-2017; en 2007–2013 sobrevive con Sharpe 0.18, bajo el 0.30 exigido)
Serie: **G (epílogo)** — continúa el carry de #42 con los datos de #41.
Datos usados: `experiments.json` (v=43: analysis, notes, metrics, kpis, params_view, capital; v=31: verdict, notes, metrics) · `exp_details.json` (v43: algo, code.snippet de la salida medida, filters) · `series/20260610_142006_carry-trend-combo-v43.json` · fila #43 de la tabla «Con tu capital» (`docs/youtube/`).

## Títulos (opciones)
1. Mi bot solo esquiva el 6% del día de pánico (φ = 0.94)
2. El número que decide si el filtro sirve: φ, medido con datos horarios
3. ¿Puede un bot salir a tiempo del pánico? Lo medí hora a hora

## Miniatura
Fondo #09090b. Un reloj de 24 horas con un gajo diminuto en verde (#22c55e) y el resto del día en rojo (#e11d2a). Texto grande: «CASI NADA». Logo ATLAS en la esquina superior derecha. (No repite las palabras de los títulos.)

---

## VIDEO LARGO (16:9, ≈ 4:41)

**[0:00 — Gancho]** (pantalla — BOCETO: un reloj de 24 horas con un día de pánico; un gajo diminuto se ilumina en verde y el resto del día queda en rojo; contador «φ = 0.94»)
Cuando llega el pánico al mercado, ¿cuánto del movimiento de ese día puede esquivar un bot? Lo medí con datos horarios: cerca del 6%. A ese número le llamo φ, y en este experimento decide si la cuenta muere el 25 de enero de 2017 o sobrevive.

**[0:19 — Este es el experimento #43]** (pantalla — BOCETO: rótulo «EXPERIMENTO #43 · COMBINACIÓN CARRY + TENDENCIA» con el logo ATLAS; la URL pequeña debajo)
Este es el experimento #43 de ATLAS Lab: Combinación carry más tendencia. Todos los resultados están en la página del experimento. Es un experimento de forex con filtro de pánico, y el filtro es donde φ importa.

**[0:34 — El problema del día de pánico]** (pantalla — BOCETO: línea de tiempo de un día con tres momentos: «ayer: el bot decide con el cierre» · «hoy: se dispara el pánico» · «hoy: el bot ve la señal y sale»; el segmento entre pánico y salida se rotula «lo que el bot se come»)
El filtro saca al bot del mercado si ayer hubo aversión al riesgo: el VIX, el índice del miedo, sobre 28 y el crédito bajo su media de 40 días. Pero el pánico no avisa. El día que se dispara, el bot ya está dentro, y solo puede salir cuando vea la señal. Todo el movimiento que ocurre antes de su salida se lo come la cuenta.

**[1:01 — Qué es φ]** (pantalla — BOCETO: escala horizontal de 0 a 1 con cuatro marcas: «0 = esquiva todo (imposible)» · «0.5 = esquiva la mitad» · «0.94 = medido» · «1 = no esquiva nada (rezago puro)»)
φ es la parte del movimiento del día de disparo que el bot se come. Con φ igual a 1 no esquiva nada: decide con el cierre de ayer y opera todo el día. Con φ igual a 0 lo esquivaría todo, algo imposible. Cuanto más cerca de 1, peor para el filtro. Y no se supone: se mide.

**[1:24 — Cómo se midió]** (pantalla — BOCETO: fragmento del código real de exp_details.code.snippet: «cruce_vix_en_vivo», «h = min(h + retraso, 23)», «hora_cierre_NY(t) − 1»; datos horarios de Dukascopy)
Se midió con datos horarios. Para saber a qué hora se cruza el nivel de pánico se reconstruye el VIX en vivo con un instrumento que lo sigue, el VXX, desde marzo de 2017; el bot sale una hora después de ver el cruce. Si no hay dato en vivo, sale al cierre de Nueva York, a las 17:00, hora del Este. Con eso se calcula cuánto del movimiento del día ya se había producido al salir.

**[1:54 — El resultado de la medición]** (pantalla — BOCETO: tarjeta «φ medido del filtro: 0.94 (IC 95%: 0.87–1.00) · 2014–2024: 0.95 · 2007–2013: 0.89» con la barra del intervalo sobre la escala)
Resultado: φ de 0.94, con un intervalo de confianza del 95% entre 0.87 y 1.00. Un intervalo de confianza es el rango donde, con 95% de confianza, está el valor verdadero. Por periodo: 0.95 en 2014–2024 y 0.89 en 2007–2013. En otras palabras, el bot esquiva cerca del 6% del movimiento del día de pánico, y el intervalo no se acerca a 0.5.

**[2:19 — Qué cambia con φ]** (pantalla — BOCETO: cuatro marcas en una línea de tiempo con la fecha de muerte según φ: 1 → 31-ene-2017 · 0.94 → 25-ene-2017 · 0.90 → 25-oct-2017 · 0.5 → sobrevive, Sharpe 0.14)
φ mueve el resultado. Con rezago puro, que equivale a un φ de 1, la cuenta muere el 31 de enero de 2017. Con el φ medido de 0.94, el 25 de enero. Con un φ constante de 0.90, el 25 de octubre de 2017: nueve meses después. Y con un φ de 0.5, sobrevive, con Sharpe de 0.14. Una diferencia de pocas centésimas en φ separa fechas de muerte muy distintas.

**[2:48 — Por qué 0.5 no es creíble]** (pantalla — BOCETO: tarjeta amarilla «φ = 0.5 = salir al abrir Wall Street sabiendo cómo cerrará el día»; sello «sin respaldo en datos horarios»)
Para esquivar la mitad del día de pánico habría que salir, por ejemplo, al abrir Wall Street sabiendo cómo cerrará el día. Esa información no existe a esa hora. Los datos horarios no respaldan un φ de 0.5, y por eso no cuenta como resultado, aunque sea el único supuesto con el que la cuenta sobrevive.

**[3:10 — Una pista de otro experimento]** (pantalla — BOCETO: tarjeta del experimento 31: «φ medido = 0.90 (IC 95%: 0.83–0.96) · con φ = 0.5 el Sharpe sería 0.37 y 0.34»)
Algo parecido pasó en el experimento 31, con otro filtro: φ medido de 0.90, con intervalo entre 0.83 y 0.96. Allí, con un φ de 0.5, el Sharpe habría sido 0.37 y 0.34. Un supuesto optimista produce números que lucen bien. Medir φ es lo que impide que el optimismo decida el veredicto.

**[3:31 — El marcador de filtros]** (pantalla — BOCETO: checklist de exp_details.filters: Sharpe 2014–2024 ✗ · Sharpe 2007–2013 ✗ · batir a comprar y esperar ✗ · sobrevivir en ambos periodos ✗ · costos ✗ · señal rezagada ✓ · Deflated Sharpe —)
El tablero de filtros: Sharpe de 2014–2024 de menos 0.63 y de 2007–2013 de 0.18, ambos bajo el 0.30; no bate a comprar y esperar, con menos 10.1% frente a menos 4.4%; y no sobrevive en los dos periodos. Pasa uno: la señal no mira el futuro, incluso con la salida medida del día del disparo. El Deflated Sharpe no se aplicó.

**[3:56 — Con tu capital]** (pantalla — BOCETO: tarjeta «Con tu capital»: $100,000 → −$10,098 contra −$4,422, «2014–2017, hasta el corte»)
Con $100,000 simulados, la cuenta se cierra con −$10,098. Comprar y esperar la misma cesta, en las mismas fechas: −$4,422. Es una simulación histórica, no una promesa; con $10,000 serían la décima parte.

**[4:09 — Ficha del experimento #43]** (pantalla — BOCETO: tarjeta de ficha con sello «NO SIRVIÓ», cuatro líneas y la URL atlas-lab-one.vercel.app/e/43; logo ATLAS)
Ficha del experimento #43. Estado: no sirvió. Cifra clave: φ medido de 0.94, es decir, el bot esquiva solo cerca del 6% del día de pánico; la cuenta muere el 25 de enero de 2017, con Sharpe de menos 0.63. Filtro que decidió: sobrevivir en los dos periodos, que dio falso. Lección: el supuesto de cómo sales del pánico se mide, no se imagina. Revísalo completo en atlas-lab-one.vercel.app/e/43. Contenido educativo, no es asesoría financiera. El trading no se promete: se prueba.

---

## SHORT (9:16, ≈ 47 s)
Título del Short: Mi bot solo esquiva el 6% del día de pánico #shorts
Fórmula visual (CLAUDE.md del canal): b-roll vertical real con overlay 0.6, Ken Burns alternado, subtítulos karaoke en MAYÚSCULAS con cifras en rojo, ticker arriba, whoosh + flash en cada corte; golpe (bass + sacudida) solo en 0-3 s y 28-40 s.

**[0-3 s]** "Cuando llega el pánico, mi bot solo esquiva el 6% de ese día."
- Boceto: b-roll de un reloj de pared o una bolsa en caída (kb=in); «6%» en verde diminuto y «94%» en rojo; golpe de bass.

**[3-14 s]** "Lo llamo φ: la parte del movimiento del día de pánico que el bot se come. Con φ igual a 1 no esquiva nada. Lo medí con datos horarios: 0.94."
- Boceto: escala de 0 a 1 con la marca 0.94; el intervalo 0.87–1.00 sombreado.

**[14-28 s]** "Con rezago puro, la cuenta murió el 31 de enero de 2017. Con φ de 0.94, el 25 de enero. Con φ de 0.90, el 25 de octubre."
- Boceto: tres fechas sobre una línea de tiempo con ✕; sacudida en la segunda.

**[28-40 s]** "Solo sobrevive con φ de 0.5: salir sabiendo cómo cierra el día. Esa información no existe a esa hora. Los datos horarios no lo respaldan."
- Boceto: fila punteada «φ = 0.5 · NO RESPALDADO» en amarillo; golpe de bass.

**[40-48 s]** "Video completo en el canal. Experimento 43 completo en el enlace. No es asesoría financiera. ¿Cuánto esquiva el bot del día de pánico? Cerca del 6%."
- Boceto: sello «NO SIRVIÓ»; logo ATLAS y «EXPERIMENTO #43 · ENLACE». Loop: la pregunta final se responde con el gancho.

## Descripción (YouTube)
**Video largo**
https://atlas-lab-one.vercel.app/e/43?utm_source=youtube&utm_medium=video&utm_campaign=exp043-t3
Ficha del experimento #43 (combinación carry + tendencia): no sirvió. φ medido 0.94 (IC 95%: 0.87–1.00): el bot esquiva solo cerca del 6% del movimiento del día de pánico; la cuenta muere el 25-ene-2017 (Sharpe −0.63). Solo sobrevive con φ = 0.5, que los datos horarios no respaldan.
Qué es φ, cómo se midió con datos horarios y cómo cambia la fecha de muerte (31-ene-2017 con φ = 1, 25-oct-2017 con φ = 0.90).

Capítulos: 0:00 Gancho · 0:19 Este es el experimento #43 · 0:34 El problema del día de pánico · 1:01 Qué es φ · 1:24 Cómo se midió · 1:54 El resultado de la medición · 2:19 Qué cambia con φ · 2:48 Por qué 0.5 no es creíble · 3:10 Una pista de otro experimento · 3:31 El marcador de filtros · 3:56 Con tu capital · 4:09 Ficha del experimento #43

**Short**
https://atlas-lab-one.vercel.app/e/43?utm_source=youtube&utm_medium=short&utm_campaign=exp043-t3
Experimento #43: el bot esquiva solo cerca del 6% del día de pánico (φ = 0.94); la cuenta muere el 25-ene-2017. No sirvió.

Contenido educativo. No es asesoría financiera ni recomendación de inversión.

Etiquetas: filtro de pánico, VIX, φ, datos horarios, carry trade, forex, backtest, ejecución, bot de trading, gestión de riesgo, ATLAS Lab

## Rúbrica (autoevaluación — criterios del CLAUDE.md del canal, 1-5)
| hook_0_3s | ritmo | promesa_cumplida | potencial_loop | claridad_no_traders | honestidad_atlas | audio | cta |
|---|---|---|---|---|---|---|---|
| 5 | 4 | 5 | 4 | 4 | 5 | 4 | 4 |

Promedio: **4.38** → cumple el corte (≥ 4.0; hook ≥ 4 y honestidad 5).
Notas: el hook es una sola cifra concreta (6%) con una imagen clara (un día de 24 horas). Punto débil: «intervalo de confianza» y «VXX» se explican en una frase; en el Short se omiten y se muestra el intervalo sombreado en la escala.

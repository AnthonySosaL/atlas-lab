# Experimento #43 — Combinación carry + tendencia · Tema 2: siete escenarios, casi la misma muerte

Estado del guion: **BORRADOR — pendiente de aprobación**
Tema 2 de 4 del experimento #43. Qué aporta frente a los otros temas: es el MÉTODO de robustez. El tema 1 cuenta la idea y el resultado base, el tema 3 se centra en φ (cuánto del día de pánico esquiva el bot) y el tema 4 compara las tres versiones del carry de #42 y #43; este tema enseña a probar un resultado cambiando un supuesto por vez, con los siete escenarios y sus fechas de muerte como caso.
Estado del experimento: **MURIÓ** (la cuenta se corta el 25-ene-2017; en 2007–2013 sobrevive con Sharpe 0.18, bajo el 0.30 exigido)
Serie: **G (epílogo)** — continúa el carry de #42 con los datos de #41.
Datos usados: `experiments.json` (v=43: analysis, verdict, notes, metrics, kpis, params_view, capital) · `exp_details.json` (algo con la sensibilidad de supuestos, filters) · `series/20260610_142006_carry-trend-combo-v43.json` · fila #43 de la tabla «Con tu capital» (`docs/youtube/`).

## Títulos (opciones)
1. Probé 7 escenarios del mismo bot: 6 mueren (5 en enero de 2017)
2. Prueba de robustez: carry + tendencia con 7 escenarios distintos
3. Del 17 al 31 de enero: cuándo muere la cuenta según el supuesto
(Para el Short: «Siete escenarios del mismo bot. Seis murieron #shorts».)

## Miniatura
Fondo #09090b. Una hoja de calendario con cinco ✕ rojas (#e11d2a) sobre cinco fechas seguidas y una sexta ✕ más lejos; una séptima casilla en gris con signo de interrogación. Texto grande: «UNA SOLA TUMBA». Logo ATLAS en la esquina inferior derecha. (No repite las palabras de los títulos.)

---

## VIDEO LARGO (16:9, ≈ 4:52)

**[0:00 — Gancho]** (pantalla — BOCETO: calendario de enero de 2017 con ✕ rojas que caen en el 17, 20, 23, 25 y 31; una sexta ✕ cae lejos, en octubre; la séptima casilla queda con «sobrevive»)
Cambié los costos, el swap del broker, el interés y hasta la forma de salir del mercado. Siete escenarios del mismo bot. En seis murió la cuenta, y en cinco lo hizo entre el 17 y el 31 de enero de 2017.

**[0:17 — Este es el experimento #43]** (pantalla — BOCETO: rótulo «EXPERIMENTO #43 · COMBINACIÓN CARRY + TENDENCIA» con el logo ATLAS; la URL pequeña debajo)
Este es el experimento #43 de ATLAS Lab: Combinación carry más tendencia. Todos los resultados están en la página del experimento. Hoy no te cuento la idea, sino cómo se comprueba si un resultado resiste.

**[0:31 — Qué es una prueba de robustez]** (pantalla — BOCETO: ilustración rotulada, no es dato real: un puente al que se le cambia una pieza por vez y se vuelve a pesar; texto «un cambio a la vez»)
Un resultado puede depender de un supuesto frágil sin que te des cuenta. La prueba de robustez consiste en cambiar un supuesto por vez, repetir el cálculo y mirar si la conclusión aguanta. Si cambia con cualquier retoque, no era una conclusión: era una casualidad del supuesto.

**[0:50 — El bot en breve]** (pantalla — BOCETO: tarjeta params_view: carry y momentum de 120 días en la misma dirección · filtro VIX 28 / crédito 40 días · ×2 · kill-switch −3% · φ = 0.94 · interés del carry sumado cada día)
La base: carry y tendencia, es decir, solo se opera donde coinciden el signo del diferencial de tasas y la dirección de los últimos 120 días, en 7 pares de forex. Con filtro de pánico, apalancamiento ×2, corte automático del 3% e interés del carry sumado cada día. El día del disparo sale con lo que ve a esa hora; su φ medido es 0.94, es decir, esquiva solo cerca del 6% del movimiento de ese día. En esta base, la cuenta muere el 25 de enero de 2017, tras 917 días, con Sharpe de menos 0.63.

**[1:28 — Los siete escenarios]** (pantalla — BOCETO: tabla que se llena fila por fila sobre una línea de tiempo de enero a octubre de 2017; cada ✕ cae en su fecha; la fila de φ = 0.5 en gris punteado)
| Escenario (2014–2024) | La cuenta muere |
|---|---|
| Costo de 3 puntos básicos por rotación (el del laboratorio) | 17-ene-2017 |
| Margen de swap del broker de 1% anual | 20-ene-2017 |
| Sin el interés, o costo de 1 pb, o swap de 0.5% (cada uno por separado) | 23-ene-2017 |
| Base: interés sumado, φ = 0.94 | 25-ene-2017 |
| Rezago puro de un día | 31-ene-2017 |
| φ constante de 0.90 | 25-oct-2017 |
| φ = 0.5 (no respaldado por los datos) | sobrevive, Sharpe 0.14 |
Estos son los siete escenarios del mismo bot en 2014–2024, de la muerte más temprana a la más tardía, y el último, el único que sobrevive.

**[1:50 — Qué es cada supuesto]** (pantalla — BOCETO: cuatro tarjetas con icono: «puntos básicos» = costo por cada cambio de posición; «swap» = interés que cobra o paga el broker por mantener la posición; «sin interés» = solo el precio; «rezago puro» = decidir con el cierre de ayer sin salida dentro del día)
Una traducción de cada fila. En la tercera, cada variante suave por separado da la misma fecha. Un punto básico es la centésima parte de un punto porcentual, y aquí se cobra cada vez que la posición cambia. El swap es el interés que cobra o paga el broker por mantener una posición abierta, y el margen es lo que se queda. Sin interés significa mirar solo el movimiento del precio. Y el rezago puro es decidir con el cierre de ayer, sin salir dentro del día del disparo.

**[2:25 — Cómo leer la tabla]** (pantalla — BOCETO: la línea de tiempo con una llave que agrupa las cinco ✕ de enero, rotulada «entre el día 910 y el día 922»; las otras dos filas aparte)
Mira el patrón. Cinco de los siete escenarios mueren en enero de 2017, entre el día 910 y el día 922 de la cuenta. Cambiar el costo, el swap, el interés o el rezago mueve la fecha unos días, no el desenlace. Con un φ de 0.90, la cuenta aguanta hasta el 25 de octubre de 2017. Cuando los retoques razonables cambian la fecha unos días pero no el desenlace, una prueba de robustez habla de una conclusión estable.

**[2:56 — La única que sobrevive]** (pantalla — BOCETO: la fila de φ = 0.5 con aviso «salir al abrir Wall Street sabiendo cómo cerrará el día · los datos horarios no lo respaldan»)
Solo un escenario sobrevive: el que supone un φ de 0.5, es decir, que el bot esquive la mitad del movimiento del día de pánico, por ejemplo saliendo al abrir Wall Street sabiendo cómo cerrará el día. Los datos horarios no lo respaldan. Citar solo esa fila sería enseñar el resultado más favorable y esconder los otros seis. En una prueba de robustez, la conclusión se lee sobre el conjunto.

**[3:23 — El otro periodo]** (pantalla — BOCETO: dos tarjetas: «2007–2013 · Sharpe 0.18 · +6.9%» y «sin el interés: 0.08», ambas con el aviso «bajo el 0.30»)
En 2007–2013, años que el bot no vio al diseñarse, la combinación sobrevive: Sharpe de 0.18 y +6.9%, o 0.08 sin el interés. Pero queda bajo el 0.30 que exige el laboratorio. Sobrevivir ahí tampoco es una ventaja.

**[3:39 — El marcador de filtros]** (pantalla — BOCETO: checklist de exp_details.filters: Sharpe 2014–2024 ✗ · Sharpe 2007–2013 ✗ · batir a comprar y esperar ✗ · sobrevivir en ambos periodos ✗ · costos ✗ · señal rezagada ✓ · Deflated Sharpe —)
El tablero de filtros: el Sharpe de 2014–2024, menos 0.63, y el de 2007–2013, 0.18, no llegan al 0.30. No bate a comprar y esperar, con menos 10.1% frente a menos 4.4%. No sobrevive en los dos periodos, y con los costos del laboratorio la cuenta muere antes. Pasa uno: el carry va rezagado un mes, el momentum un día y el filtro un día. El Deflated Sharpe no se aplicó.

**[4:07 — Con tu capital]** (pantalla — BOCETO: tarjeta «Con tu capital»: $100,000 → −$10,098 contra −$4,422, «2014–2017, hasta el corte»; nota: «la cesta de comprar y esperar no incluye intereses»)
Con $100,000 simulados, la cuenta se cierra con −$10,098. Comprar y esperar la misma cesta, en las mismas fechas, 2014–2017: −$4,422. Esa cesta no incluye intereses. Es una simulación histórica, no una promesa; con $10,000 serían la décima parte.

**[4:23 — Ficha del experimento #43]** (pantalla — BOCETO: tarjeta de ficha con sello «NO SIRVIÓ», cuatro líneas y la URL atlas-lab-one.vercel.app/e/43; logo ATLAS)
Ficha del experimento #43. Estado: no sirvió. Cifra clave: Sharpe de menos 0.63 y cuenta cortada el 25 de enero de 2017; con otros supuestos, entre el 17 y el 31 de enero. Filtro que decidió: sobrevivir en los dos periodos, que dio falso. Lección: un resultado robusto cambia de fecha, no de desenlace, cuando retocas un supuesto. Revísalo completo en atlas-lab-one.vercel.app/e/43. Contenido educativo, no es asesoría financiera. El trading no se promete: se prueba.

---

## SHORT (9:16, ≈ 48 s)
Título del Short: Siete escenarios del mismo bot. Seis murieron #shorts
Fórmula visual (CLAUDE.md del canal): b-roll vertical real con overlay 0.6, Ken Burns alternado, subtítulos karaoke en MAYÚSCULAS con cifras en rojo, ticker arriba, whoosh + flash en cada corte; golpe (bass + sacudida) solo en 0-3 s y 14-28 s.

**[0-3 s]** "Siete escenarios del mismo bot. Cinco murieron en enero de 2017."
- Boceto: b-roll de hojas de calendario pasando (kb=in); ✕ rojas cayendo sobre «17 · 20 · 23 · 25 · 31»; golpe de bass.

**[3-14 s]** "Carry más tendencia, con filtro de pánico y el interés sumado a la cuenta. Cambié los costos, el swap del broker, el interés y la forma de salir."
- Boceto: cuatro perillas que se giran una por una sobre la tarjeta del bot.

**[14-28 s]** "Con costos de 3 puntos básicos: 17 de enero. Con swap de 1%: el 20. Sin interés: el 23. La base: el 25. Con rezago puro: el 31. Todas entre el día 910 y el 922."
- Boceto: línea de tiempo con cinco ✕; sacudida en la última.

**[28-40 s]** "Con φ de 0.90 murió el 25 de octubre. Solo sobrevive con φ de 0.5: salir sabiendo cómo cierra el día. Los datos horarios no lo respaldan."
- Boceto: la fila punteada «φ = 0.5 · NO RESPALDADO»; sello amarillo.

**[40-48 s]** "Video completo en el canal. Experimento 43 completo en el enlace. No es asesoría financiera. Siete escenarios, ¿y la cuenta? Murió en seis."
- Boceto: sello «NO SIRVIÓ»; logo ATLAS y «EXPERIMENTO #43 · ENLACE». Loop: la pregunta final enlaza con «seis murieron».

## Descripción (YouTube)
**Video largo**
https://atlas-lab-one.vercel.app/e/43?utm_source=youtube&utm_medium=video&utm_campaign=exp043-t2
Ficha del experimento #43 (combinación carry + tendencia): no sirvió. La cuenta muere el 25-ene-2017 (Sharpe −0.63, 917 días); con otros supuestos, entre el 17 y el 31 de enero de 2017 y, con φ = 0.90, el 25-oct-2017. En 2007–2013 sobrevive con Sharpe 0.18, bajo el 0.30.
Prueba de robustez: siete escenarios del mismo bot cambiando costos, swap, interés, rezago y φ.

Capítulos: 0:00 Gancho · 0:17 Este es el experimento #43 · 0:31 Qué es una prueba de robustez · 0:50 El bot en breve · 1:28 Los siete escenarios · 1:50 Qué es cada supuesto · 2:25 Cómo leer la tabla · 2:56 La única que sobrevive · 3:23 El otro periodo · 3:39 El marcador de filtros · 4:07 Con tu capital · 4:23 Ficha del experimento #43

**Short**
https://atlas-lab-one.vercel.app/e/43?utm_source=youtube&utm_medium=short&utm_campaign=exp043-t2
Experimento #43: siete escenarios del bot de carry + tendencia, seis mueren (cinco entre el 17 y el 31 de enero de 2017). No sirvió.

Contenido educativo. No es asesoría financiera ni recomendación de inversión.

Etiquetas: prueba de robustez, análisis de sensibilidad, carry trade, tendencia, momentum, swap, costos de transacción, forex, backtest, bot de trading, ATLAS Lab

## Rúbrica (autoevaluación — criterios del CLAUDE.md del canal, 1-5)
| hook_0_3s | ritmo | promesa_cumplida | potencial_loop | claridad_no_traders | honestidad_atlas | audio | cta |
|---|---|---|---|---|---|---|---|
| 4 | 4 | 5 | 4 | 4 | 5 | 4 | 4 |

Promedio: **4.25** → cumple el corte (≥ 4.0; hook ≥ 4 y honestidad 5).
Notas: el hook tiene dos cifras (siete escenarios, cinco en enero) y se apoya en un calendario. Punto débil: «swap» y «puntos básicos» se definen en el largo y solo se nombran en el Short. Se enseña también la fila favorable (φ = 0.5) con su salvedad, para que la honestidad no dependa de lo que el espectador no ve.

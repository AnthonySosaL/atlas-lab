# Experimento #42 — Carry de divisas ejecutable · Tema 2: el mejor escenario (+25.7%) y por qué no cuenta

Estado del guion: **BORRADOR — pendiente de aprobación**
Tema 2 de 3 del experimento #42. Qué aporta frente a los otros temas: es la LETRA PEQUEÑA. El tema 1 cuenta el carry puro y su cuenta cortada a los 256 días y el tema 3 compara el filtro de pánico; este tema se dedica al único resultado favorable del experimento (+25.7% sin reglas de prop firm) y enseña a leer un número favorable con cuatro preguntas.
Estado del experimento: **MURIÓ** (el carry puro muere en los dos periodos, incluso sumando el interés; con el filtro macro tampoco sobrevive 2014–2024)
Serie: **G (epílogo)** — usa los datos de #41; continúa en #43.
Datos usados: `experiments.json` (v=42: analysis, verdict, notes, metrics, kpis, params_view, capital) · `exp_details.json` (algo, filters) · `series/20260610_142006_carry-fx-ejecutable-v42.json` (curva 1 = carry puro hasta la quiebra; curva 2 = «sin reglas de prop firm»; curva 3 = comprar y esperar; el escenario favorable NO tiene curva en series/) · fila #42 de la tabla «Con tu capital» (`docs/youtube/`).

## Títulos (opciones)
1. El mejor escenario del carry: +25.7% (y por qué no cuenta)
2. Carry con filtro: +25.7%, Sharpe 0.33 y una caída de −20.3%
3. Cómo leer un resultado favorable sin engañarte: el caso del carry

## Miniatura
Fondo #09090b. Una línea verde (#22c55e) ascendente dibujada con lápiz sobre un papel cuadriculado, y una tijera roja (#e11d2a) cortando la hoja por debajo. Texto grande: «SOLO EN EL PAPEL». Logo ATLAS en la esquina superior derecha. (No repite los números ni las palabras de los títulos.)

---

## VIDEO LARGO (16:9, ≈ 4:23)

**[0:00 — Gancho]** (pantalla — BOCETO: una tarjeta hipotética con «+25.7% · Sharpe 0.33» en verde, rodeada de tres avisos amarillos que parpadean; el rótulo «sin reglas de prop firm»)
Este es el mejor número de todo mi experimento del carry de divisas: más 25.7% entre 2014 y 2024, con Sharpe de 0.33. Y no lo cuento como resultado. Te explico por qué, con cuatro preguntas que sirven para cualquier número favorable.

**[0:17 — Este es el experimento #42]** (pantalla — BOCETO: rótulo «EXPERIMENTO #42 · CARRY DE DIVISAS EJECUTABLE» con el logo ATLAS; la URL pequeña debajo)
Este es el experimento #42 de ATLAS Lab: Carry de divisas ejecutable. Todos los resultados están en la página del experimento. Si no lo conoces, el carry es comprar la divisa que paga más interés y vender la que paga menos, cobrando la diferencia día a día; lo probé con 7 pares de forex.

**[0:39 — El escenario favorable]** (pantalla — BOCETO: tabla con dos filas; la segunda en verde con aviso «hipotético, sin reglas de prop firm»)
| 2014–2024 sin reglas de prop firm | Resultado | Caída máxima |
|---|---|---|
| Carry puro | −9.9% | −35.4% |
| Carry + filtro de pánico, salida medida | +25.7% (Sharpe 0.33) | −20.3% |
El filtro de pánico saca al bot del mercado si el VIX, el índice del miedo, supera 28 y el crédito cae bajo su media de 40 días. Con la salida medida el día del disparo, con un φ de 0.94, la versión con filtro habría ganado 25.7%, siempre que nadie le cerrara la cuenta. El carry puro, en cambio, habría terminado en menos 9.9%. La caída máxima es el peor tramo de pico a valle.

**[1:13 — Pregunta 1: ¿respeta las reglas del juego?]** (pantalla — BOCETO: barra de caída máxima −20.3% cruzando una línea roja en −10% con el rótulo «límite de la prop firm»; sello ✕ el 24-jun-2016)
Una prop firm, la empresa que te presta una cuenta si superas su reto, cierra la cuenta si cae 10%. El escenario de 25.7% tuvo una caída máxima de menos 20.3%: el doble de lo que la regla tolera. Con las reglas puestas, esa misma estrategia murió el 24 de junio de 2016, con Sharpe de menos 0.86 en ese tramo. Un número que solo existe si te dejan seguir después de romper las reglas no es un resultado de la cuenta real.

**[1:46 — Pregunta 2: ¿incluye todos los costos?]** (pantalla — BOCETO: dos columnas, «entran» (interés del diferencial de tasas · deslizamiento 0.2% en el corte) con tick y «faltan» (spread · margen del broker sobre el swap · 3 puntos básicos por rotación) con aviso)
Segunda pregunta: ¿incluye todos los costos? Entra el interés del diferencial de tasas y un deslizamiento de 0.2% en el corte. Faltan el diferencial entre compra y venta, el margen que cobra el broker sobre el swap, que es el interés que paga o cobra el broker por mantener la posición, y los 3 puntos básicos por rotación que usa el laboratorio. Todos esos costos empeoran el resultado, no lo mejoran.

**[2:14 — Pregunta 3: ¿descuenta la suerte?]** (pantalla — BOCETO: tres variantes probadas («carry puro» · «carry + filtro» · «sin interés») y una resaltada; el rótulo «Deflated Sharpe — no aplicado»)
Tercera: ¿descuenta la suerte? Probé varias versiones: carry puro, carry con filtro, con y sin el interés. Quedarse con la mejor y no ajustar por haber probado varias es justo lo que corrige el Deflated Sharpe, la prueba que descuenta la suerte de haber probado muchas ideas. A este escenario no se le aplicó. Y su Sharpe, 0.33, apenas supera el 0.30 que pide el laboratorio.

**[2:40 — Pregunta 4: ¿se repite en otro periodo?]** (pantalla — BOCETO: dos barras: «2014–2024 sin reglas · Sharpe 0.33» y «2007–2013 · Sharpe −0.02», la segunda gris y casi plana)
Cuarta pregunta: ¿se repite en otro periodo? En 2007–2013, años que el bot no vio al diseñarse, el mismo carry con filtro sobrevive, pero con Sharpe de menos 0.02. No repite el 0.33. Un resultado que aparece en un periodo y desaparece en el otro merece desconfianza.

**[2:59 — El marcador de filtros]** (pantalla — BOCETO: checklist de exp_details.filters: Sharpe 2014–2024 ✗ · Sharpe 2007–2013 ✗ · sobrevivir en ambos periodos ✗ · señal rezagada ✓ · costos completos — · Deflated Sharpe —)
El tablero de filtros: el carry puro de 2014–2024, con Sharpe de menos 1.79, no llega al 0.30; el de 2007–2013, con menos 2.86, tampoco; y sobrevivir en ambos periodos es falso. Pasa uno: la señal está rezagada y no mira el futuro. Incluso con rezago puro de un día, el carry con filtro muere igual el 24 de junio de 2016, con Sharpe de menos 0.80. Los costos completos y el Deflated Sharpe no se aplicaron.

**[3:29 — Con tu capital]** (pantalla — BOCETO: tarjeta «Con tu capital»: $100,000 → −$9,924 contra −$43, «hasta el 15-dic-2014»; el escenario +25.7% aparte, en gris, con la etiqueta «hipotético»)
Lo que cuenta con $100,000 simulados es la cuenta real del carry puro: se cierra con −$9,924 tras 256 días. Comprar y esperar la misma cesta en las mismas fechas: −$43. El escenario de más 25.7% queda aparte, rotulado como hipotético, porque la cuenta real se cierra antes. Es una simulación histórica, no una promesa; con $10,000 serían la décima parte.

**[3:53 — Ficha del experimento #42]** (pantalla — BOCETO: tarjeta de ficha con sello «NO SIRVIÓ», cuatro líneas y la URL atlas-lab-one.vercel.app/e/42; logo ATLAS)
Ficha del experimento #42. Estado: no sirvió. Cifra clave: Sharpe de menos 1.79 del carry puro en 2014–2024 y cuenta cortada a los 256 días; el mejor escenario, más 25.7%, es hipotético. Filtro que decidió: sobrevivir en ambos periodos, que dio falso. Lección: ante un número favorable, pregunta por las reglas, los costos, la suerte y el otro periodo. Revísalo completo en atlas-lab-one.vercel.app/e/42. Contenido educativo, no es asesoría financiera. El trading no se promete: se prueba.

---

## SHORT (9:16, ≈ 50 s)
Título del Short: El mejor escenario del carry: +25.7%. Y no cuenta #shorts
Fórmula visual (CLAUDE.md del canal): b-roll vertical real con overlay 0.6, Ken Burns alternado, subtítulos karaoke en MAYÚSCULAS con cifras en rojo, ticker arriba, whoosh + flash en cada corte; golpe (bass + sacudida) solo en 0-3 s y 14-28 s.

**[0-3 s]** "El mejor resultado de mi carry de divisas: más 25.7%. Y no lo cuento."
- Boceto: b-roll de monedas sobre un tablero (kb=in); «+25.7%» verde gigante con un «✕» rojo encima; golpe de bass.

**[3-14 s]** "Es el carry con filtro de pánico, de 2014 a 2024, sin las reglas de la prop firm: Sharpe 0.33. El carry puro, sin reglas, terminó en menos 9.9%."
- Boceto: dos barras (verde +25.7% y roja −9.9%) con el rótulo «SIN REGLAS».

**[14-28 s]** "Primera pregunta: ¿respeta las reglas? Su caída máxima fue de menos 20.3%. La prop firm cierra la cuenta al caer 10%. Con las reglas puestas, murió el 24 de junio de 2016."
- Boceto: barra de caída que cruza la línea roja del −10%; sello ✕; sacudida.

**[28-40 s]** "Segunda: ¿incluye todos los costos? No: faltan el spread y el swap del broker. Tercera: ¿se repite? En 2007 a 2013, el mismo carry con filtro dio Sharpe menos 0.02."
- Boceto: lista de costos que faltan en amarillo; barra de −0.02 casi plana.

**[40-48 s]** "Video completo en el canal. Experimento 42 completo en el enlace. No es asesoría financiera. Un número favorable que ninguna cuenta real pudo vivir, ¿cuenta?"
- Boceto: sello «NO SIRVIÓ»; logo ATLAS y «EXPERIMENTO #42 · ENLACE». Loop: la pregunta final enlaza con «y no lo cuento».

## Descripción (YouTube)
**Video largo**
https://atlas-lab-one.vercel.app/e/42?utm_source=youtube&utm_medium=video&utm_campaign=exp042-t2
Ficha del experimento #42 (carry de divisas ejecutable): no sirvió. Carry puro: Sharpe −1.79 en 2014–2024 y cuenta cortada a los 256 días (−$9,924 sobre $100,000). El mejor escenario, carry con filtro sin reglas de prop firm (+25.7%, Sharpe 0.33, caída máxima −20.3%), es hipotético.
Cuatro preguntas para leer un número favorable: ¿respeta las reglas?, ¿incluye todos los costos?, ¿descuenta la suerte? y ¿se repite en otro periodo?

Capítulos: 0:00 Gancho · 0:17 Este es el experimento #42 · 0:39 El escenario favorable · 1:13 Pregunta 1: ¿respeta las reglas del juego? · 1:46 Pregunta 2: ¿incluye todos los costos? · 2:14 Pregunta 3: ¿descuenta la suerte? · 2:40 Pregunta 4: ¿se repite en otro periodo? · 2:59 El marcador de filtros · 3:29 Con tu capital · 3:53 Ficha del experimento #42

**Short**
https://atlas-lab-one.vercel.app/e/42?utm_source=youtube&utm_medium=short&utm_campaign=exp042-t2
Experimento #42: el mejor escenario del carry (+25.7% sin reglas de prop firm, caída máxima −20.3%) es hipotético. No sirvió.

Contenido educativo. No es asesoría financiera ni recomendación de inversión.

Etiquetas: carry trade, forex, divisas, backtest, sesgo de selección, Sharpe ratio, prop firm, swap, resultado favorable, bot de trading, ATLAS Lab

## Rúbrica (autoevaluación — criterios del CLAUDE.md del canal, 1-5)
| hook_0_3s | ritmo | promesa_cumplida | potencial_loop | claridad_no_traders | honestidad_atlas | audio | cta |
|---|---|---|---|---|---|---|---|
| 5 | 4 | 5 | 4 | 4 | 5 | 4 | 4 |

Promedio: **4.38** → cumple el corte (≥ 4.0; hook ≥ 4 y honestidad 5).
Notas: el hook usa el número favorable como gancho y lo desmonta con honestidad (hipotético, tres avisos). Punto débil: el +25.7% no tiene curva en series/; se muestra como tarjeta y se rotula como hipotético para que no se confunda con el resultado de la cuenta.

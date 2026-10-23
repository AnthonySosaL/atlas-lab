# Experimento #43 — Combinación carry + tendencia · Tema 4: tres fechas de muerte, cada capa compra tiempo

Estado del guion: **BORRADOR — pendiente de aprobación**
Tema 4 de 4 del experimento #43 (compara con #42). Qué aporta frente a los otros temas: es la COMPARACIÓN. El tema 1 cuenta la idea y el resultado, el tema 2 prueba la robustez y el tema 3 explica φ; este tema alinea las tres versiones del mismo carry (puro, con filtro de pánico y con tendencia) y muestra que cada capa mejora el Sharpe y atrasa la muerte, sin salvar la cuenta.
Estado del experimento: **MURIÓ** (la cuenta se corta el 25-ene-2017; en 2007–2013 sobrevive con Sharpe 0.18, bajo el 0.30 exigido)
Serie: **G (epílogo)** — continúa el carry de #42 con los datos de #41.
Datos usados: `experiments.json` (v=43: analysis, verdict, notes, metrics, kpis, capital; v=42: analysis, verdict, kpis, capital) · `exp_details.json` (v43: algo, filters; v42: filters) · `series/20260610_142006_carry-trend-combo-v43.json` y `series/20260610_142006_carry-fx-ejecutable-v42.json` · filas #42 y #43 de la tabla «Con tu capital» (`docs/youtube/`).

## Títulos (opciones)
1. Carry, carry + filtro, carry + tendencia: tres fechas de muerte
2. Cada capa extra compra tiempo, no salvación: 2014, 2016 y 2017
3. De 256 a 917 días: cuánto vive la cuenta con cada capa

## Miniatura
Fondo #09090b. Tres lápidas en fila, de menor a mayor, con una ✕ roja (#e11d2a) en cada una; sobre ellas, tres pilas de monedas crecientes. Texto grande: «LÁPIDAS EN FILA». Logo ATLAS en la esquina inferior derecha. (No repite las palabras de los títulos.)

---

## VIDEO LARGO (16:9, ≈ 4:26)

**[0:00 — Gancho]** (pantalla — BOCETO: línea de tiempo 2014–2017 con tres lápidas que se levantan una por una: «15-dic-2014», «24-jun-2016», «25-ene-2017»)
Tres versiones del mismo carry de divisas, tres fechas de muerte: el 15 de diciembre de 2014, el 24 de junio de 2016 y el 25 de enero de 2017. Cada capa que añadí atrasó el final. Ninguna lo evitó.

**[0:16 — Este es el experimento #43]** (pantalla — BOCETO: rótulo «EXPERIMENTO #43 · COMBINACIÓN CARRY + TENDENCIA» con el logo ATLAS; la URL pequeña debajo)
Este es el experimento #43 de ATLAS Lab: Combinación carry más tendencia. Todos los resultados están en la página del experimento. Aquí lo comparo con el carry del experimento 42, para ver qué aporta cada capa.

**[0:31 — Las tres capas]** (pantalla — BOCETO: tres bloques apilados que se encajan uno encima del otro: «carry puro» · «+ filtro de pánico» · «+ tendencia de 120 días»)
El carry es comprar la divisa que paga más interés y vender la que paga menos, cobrando la diferencia cada día; lo probé en 7 pares de forex. Primera capa, el carry puro. Segunda, un filtro de pánico: fuera del mercado si el VIX, el índice del miedo, supera 28 y el crédito cae bajo su media de 40 días. Tercera, la tendencia: solo se opera donde coinciden el signo del carry y la dirección de los últimos 120 días. Las tres con apalancamiento ×2, corte automático del 3% e interés sumado.

**[1:07 — La comparación]** (pantalla — BOCETO: tabla que se llena fila por fila; la columna de 2014–2024 muestra la ✕ con su fecha; la de 2007–2013, ✕ o tick amarillo)
| Capa | Muere en 2014–2024 | Sharpe 2014–2024 | Sharpe 2007–2013 |
|---|---|---|---|
| Carry puro | 15-dic-2014 (256 días) | −1.79 | −2.86 (muere, 155 días) |
| + filtro de pánico | 24-jun-2016 | −0.86 | −0.02 (sobrevive) |
| + tendencia | 25-ene-2017 (917 días) | −0.63 | 0.18 (sobrevive) |
El Sharpe es la ganancia por unidad de riesgo. Mira las dos primeras columnas numéricas: el Sharpe mejora de menos 1.79 a menos 0.86 y a menos 0.63, y la cuenta dura de 256 a 917 días. Cada capa ayuda.

**[1:29 — Mejorar no es llegar]** (pantalla — BOCETO: escala de Sharpe con las marcas −1.79, −0.86, −0.63, 0 y 0.30; las tres cifras del bot se acercan al cero pero no llegan; la marca 0.30 rotulada «listón»)
Pero mejorar no es llegar. El Sharpe sigue siendo negativo en 2014–2024, y el listón del laboratorio es 0.30. En 2007–2013, años que el bot no vio al diseñarse, la versión final sobrevive con 0.18, o 0.08 sin el interés: otra vez bajo 0.30. Ninguna de las tres capas sobrevive los dos periodos.

**[1:50 — Cuánto aportó el interés y cuánto costó]** (pantalla — BOCETO: balanza: «interés del carry +1.2% = 2 días más de vida (23-ene → 25-ene)» frente a «3 puntos básicos de costo = 8 días menos (25-ene → 17-ene)»)
En la versión final, el interés del carry sumó +1.2% del capital y le regaló a la cuenta dos días de vida: del 23 al 25 de enero. Un costo de 3 puntos básicos por rotación, el del laboratorio, la adelanta del 25 al 17 de enero. Los costos que faltan en las otras capas harían lo mismo: empeorar, no mejorar.

**[2:15 — Cada capa también cuesta intentos]** (pantalla — BOCETO: escalera de tres peldaños con una lupa sobre «Deflated Sharpe — no aplicado»; texto «más capas = más combinaciones probadas»)
Hay otra cuenta que no se ve en la tabla. Cada capa nueva es otra combinación probada. El Deflated Sharpe, la prueba que descuenta la suerte de haber probado muchas ideas, no se aplicó a ninguna de las tres versiones. Antes de celebrar una mejora hecha capa por capa, esa es la prueba que falta.

**[2:37 — La defensa del optimista]** (pantalla — BOCETO: curva «sin reglas de prop firm» de series/…v43.json: +6.3%, Sharpe 0.12, caída máxima −16.6%, contra comprar y esperar −3.7%; dos avisos amarillos «hipotético» y «la caída supera el 10%»)
Un optimista diría que sin las reglas de la prop firm, la empresa que cierra la cuenta si cae 10%, la versión final habría terminado 2014–2024 en +6.3%, con Sharpe 0.12 y caída máxima de menos 16.6%, por encima de comprar y esperar, que dio menos 3.7%. Es cierto y es hipotético: esa caída supera el 10% que la prop firm tolera, el cálculo no incluye spread ni swap del broker, y un Sharpe de 0.12 sigue lejos del 0.30.

**[3:08 — El marcador de filtros]** (pantalla — BOCETO: checklist de exp_details.filters: Sharpe 2014–2024 ✗ · Sharpe 2007–2013 ✗ · batir a comprar y esperar ✗ · sobrevivir en ambos periodos ✗ · costos ✗ · señal rezagada ✓ · Deflated Sharpe —)
El tablero de filtros de la versión final: Sharpe de menos 0.63 y de 0.18, ambos bajo 0.30; no bate a comprar y esperar, con menos 10.1% frente a menos 4.4%; no sobrevive en los dos periodos; y con los costos del laboratorio la cuenta muere antes. Pasa uno: no mira el futuro.

**[3:29 — Con tu capital]** (pantalla — BOCETO: dos tarjetas «Con tu capital»: carry puro −$9,924 contra −$43 (hasta el 15-dic-2014) y carry + tendencia −$10,098 contra −$4,422 (hasta el 25-ene-2017))
Con $100,000 simulados, el carry puro se cierra con −$9,924 tras 256 días, contra −$43 de comprar y esperar en las mismas fechas. La versión con tendencia se cierra con −$10,098 tras 917 días, contra −$4,422. Las dos pierden cerca de lo mismo antes del corte; la diferencia es cuánto tardan. Es una simulación histórica, no una promesa; con $10,000 serían la décima parte.

**[3:55 — Ficha del experimento #43]** (pantalla — BOCETO: tarjeta de ficha con sello «NO SIRVIÓ», cuatro líneas y la URL atlas-lab-one.vercel.app/e/43; logo ATLAS)
Ficha del experimento #43. Estado: no sirvió. Cifra clave: la cuenta muere el 25 de enero de 2017, tras 917 días, con Sharpe de menos 0.63; el carry puro moría a los 256 días con menos 1.79. Filtro que decidió: sobrevivir en los dos periodos, que dio falso. Lección: sumar capas a una idea débil cambia la fecha de la muerte, no el desenlace. Revísalo completo en atlas-lab-one.vercel.app/e/43. Contenido educativo, no es asesoría financiera. El trading no se promete: se prueba.

---

## SHORT (9:16, ≈ 42 s)
Título del Short: Tres versiones del carry, tres fechas de muerte #shorts
Fórmula visual (CLAUDE.md del canal): b-roll vertical real con overlay 0.6, Ken Burns alternado, subtítulos karaoke en MAYÚSCULAS con cifras en rojo, ticker arriba, whoosh + flash en cada corte; golpe (bass + sacudida) solo en 0-3 s y 28-40 s.

**[0-3 s]** "Tres versiones del carry. Tres fechas de muerte: diciembre de 2014, junio de 2016 y enero de 2017."
- Boceto: b-roll de un cementerio o lápidas al amanecer (kb=in); tres fechas en rojo; golpe de bass.

**[3-14 s]** "Carry puro. Carry con filtro de pánico. Y carry más tendencia: solo opero donde coinciden las dos señales."
- Boceto: tres bloques que se apilan uno sobre otro.

**[14-28 s]** "Sharpe de menos 1.79, menos 0.86 y menos 0.63. La cuenta aguantó 256 días, luego hasta junio de 2016, y por fin 917 días."
- Boceto: tres barras de Sharpe que se acercan al cero sin llegar; contador de días 256 → 917.

**[28-40 s]** "Cada capa mejoró el resultado, pero ninguna llegó a 0.30 ni sobrevivió los dos periodos. Sumar señales cambia la fecha de la muerte, no el desenlace."
- Boceto: marca 0.30 inalcanzable en la escala; golpe de bass y sello «MEJORA ≠ LLEGAR».

**[40-48 s]** "Video completo en el canal. Experimento 43 completo en el enlace. No es asesoría financiera. Tres capas, ¿y la cuenta? Muerta, cada vez."
- Boceto: sello «NO SIRVIÓ»; logo ATLAS y «EXPERIMENTO #43 · ENLACE». Loop: la pregunta final enlaza con el gancho.

## Descripción (YouTube)
**Video largo**
https://atlas-lab-one.vercel.app/e/43?utm_source=youtube&utm_medium=video&utm_campaign=exp043-t4
Ficha del experimento #43 (combinación carry + tendencia): no sirvió. La cuenta muere el 25-ene-2017 tras 917 días (Sharpe −0.63); el carry puro moría el 15-dic-2014 a los 256 días (−1.79) y el carry con filtro, el 24-jun-2016 (−0.86). En 2007–2013 sobrevive con Sharpe 0.18, bajo el 0.30.
Comparo las tres capas del mismo carry de divisas (experimentos 42 y 43): cada una mejora el Sharpe y atrasa la muerte, ninguna salva la cuenta.

Capítulos: 0:00 Gancho · 0:16 Este es el experimento #43 · 0:31 Las tres capas · 1:07 La comparación · 1:29 Mejorar no es llegar · 1:50 Cuánto aportó el interés y cuánto costó · 2:15 Cada capa también cuesta intentos · 2:37 La defensa del optimista · 3:08 El marcador de filtros · 3:29 Con tu capital · 3:55 Ficha del experimento #43

**Short**
https://atlas-lab-one.vercel.app/e/43?utm_source=youtube&utm_medium=short&utm_campaign=exp043-t4
Experimento #43: tres capas del carry (puro, filtro, tendencia), tres fechas de muerte: 15-dic-2014, 24-jun-2016 y 25-ene-2017. No sirvió.

Contenido educativo. No es asesoría financiera ni recomendación de inversión.

Etiquetas: carry trade, tendencia, momentum, filtro de pánico, forex, divisas, backtest, Sharpe ratio, bot de trading, prop firm, ATLAS Lab

## Rúbrica (autoevaluación — criterios del CLAUDE.md del canal, 1-5)
| hook_0_3s | ritmo | promesa_cumplida | potencial_loop | claridad_no_traders | honestidad_atlas | audio | cta |
|---|---|---|---|---|---|---|---|
| 5 | 4 | 5 | 4 | 4 | 5 | 4 | 4 |

Promedio: **4.38** → cumple el corte (≥ 4.0; hook ≥ 4 y honestidad 5).
Notas: el hook son tres fechas verificables en la ficha de #42 y #43. Punto débil: las tres versiones comparten supuestos (salida medida con φ = 0.94 en las versiones con filtro) pero no son una comparación controlada punto a punto; el largo lo dice al presentar las capas y el Short se limita a las fechas.

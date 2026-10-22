# Experimento #60 — Ataques al cambio de régimen — ronda 1

Estado del guion: **BORRADOR — pendiente de aprobación**
Estado del experimento: **murió** (No sirvió): ninguno de los tres ataques supera el Sharpe de 0.37 de estar invertido a 1x · Serie: sin asignar en `plan-series.md`; propuesta: nueva serie «Cambio de régimen» (#59 → #60) · Relacionado: #59, #57
Datos usados: `experiments.json` (v=60: verdict, analysis, notes, metrics, kpis, params_view, capital.note), `exp_details.json` (algo, code.snippet, filters), `series/extra-v60.json` (curva 0 = A2 tendencia + vol-targeting, curva 1 = comprar y esperar la cesta) y la tabla «Con tu capital» (`docs/youtube/*-capital.md`) (fila #60). A1 y A3 no tienen curva en la ficha; se muestran solo con sus cifras.
Aviso de datos: no se ejecutó el periodo fuera de muestra 2007-2013 para estos ataques ni se aplicó el Deflated Sharpe; el guion lo dice.

## Títulos (3 opciones)
1. Ganó +6.7% en el mercado bajista, pero −24.1% en 2014–2024
2. 3 arreglos al filtro MA200: ninguno supera 0.37
3. Tendencia con VIX, volatilidad y largo/corto: 3 pruebas

## Miniatura (1280×720)
Fondo `#09090b`. Una balanza: en un platillo, pequeño y verde `#22c55e`, un sol de "alcista"; en el otro, grande y rojo `#e11d2a`, una nube de "bajista". Texto grande blanco: "NO HAY ARREGLO". Logo ATLAS esquina superior derecha. (No repite el título 1.)

---

## VIDEO LARGO (16:9, ≈ 7 min)

**[0:00 — Gancho]** (pantalla: balanza con +6.7% de un lado y −24.1% del otro)
Tenía una regla de tendencia que perdía en el mercado bajista. ¿Se puede arreglar? Probé tres arreglos sobre la cesta de 15 activos. Uno ganó +6.7% en 2022, pero perdió −24.1% en el periodo completo. Otro perdió −16.8%. El tercero ganó +29.7%, pero con peor Sharpe, 0.31, que estar invertido a 1x, 0.37.
> BOCETO: balanza animada con las cifras reales de la ficha; los tres ataques A1, A2 y A3 aparecen como tarjetas con sus cifras (−16.8%, +29.7%, −24.1%). Sacudida solo al inclinarse la balanza.

**[0:25 — Presentación]** (pantalla: rótulo «Experimento #60 · Ataques al cambio de régimen — ronda 1»)
Este es el experimento #60 de ATLAS Lab: Ataques al cambio de régimen — ronda 1. Todos los resultados están en la página del experimento.
> BOCETO: rótulo «EXPERIMENTO #60 · Ataques al cambio de régimen — ronda 1» que entra con whoosh sobre el último cuadro del gancho a baja opacidad.

**[0:35 — El problema]** (pantalla: curva del Trend-flat del experimento 59)
La regla viene del experimento 59: si la cesta está sobre su media de 200 días, compro con apalancamiento 2; si está debajo, salgo. Su pérdida aparece en el mercado bajista. Un arreglo útil tendría que mejorar el Sharpe en 2022 sin hundir el periodo 2014–2024, y superar a estar invertido a 1x. Ese era el criterio.
> BOCETO: curva del Trend-flat (referencia al #59) y un recuadro con el criterio de éxito: "Sharpe mejor en 2022 · sin hundir 2014–2024 · superar a 1x".

**[1:05 — Por qué es tentador arreglar]** (pantalla: texto en pantalla)
Es tentador cuando una regla funciona bien salvo en un tramo: parece que basta tapar el hueco. El problema es que cada parche añade una decisión, y cada decisión añade una oportunidad de ajustarse a lo que ya viste. Por eso conviene fijar de entrada qué se espera lograr: aquí, mejorar el Sharpe en 2022 sin hundir 2014–2024 y superar a 1x.
> BOCETO: una prenda con un agujero y tres parches distintos; el criterio "Sharpe 2022 ↑ · 2014–2024 no se hunde · supera a 1x" escrito debajo.

**[1:35 — Los tres ataques]** (pantalla: tres tarjetas A1, A2, A3)
Ataque uno: tendencia más filtro VIX. Salgo del mercado si el índice está bajo su media de 200 días o si el filtro de VIX y crédito indica aversión al riesgo. Ataque dos: tendencia más volatilidad objetivo. Cuando el mercado es alcista, compro con un apalancamiento que depende de la volatilidad, entre 0.5 y 3 veces; si no, salgo. Ataque tres: largo y corto direccional. Compro cada activo que está sobre su media de 200 días y vendo en corto los que están debajo, con apalancamiento 2.
> BOCETO: tres tarjetas con un diagrama de lógica cada una (A1: dos condiciones de salida; A2: apalancamiento entre x0.5 y x3; A3: activos con ▲ y ▼ según su media de 200 días). Recuadro de `params_view`.

**[2:20 — Cómo se probó]** (pantalla: checklist y línea de tiempo)
Cesta de 15 activos, 3 puntos básicos de costo por unidad de rotación y señales con un día de rezago, para no mirar el futuro. Se evalúa en 2014–2024, en el COVID de 2020 y en el mercado bajista de 2022, contra estar invertido a 1x y contra el doble de apalancamiento. Dos límites: no se probó el periodo fuera de muestra, 2007–2013, para estos ataques, y no se aplicó el Deflated Sharpe.
> BOCETO: checklist con ✓ "rezago 1 día", "3 bps"; ámbar "sin fuera de muestra 2007–2013", "sin Deflated Sharpe". Línea de tiempo con tres ventanas marcadas: 2014–2024, 2020 y 2022.

**[2:55 — Resultados]** (pantalla: tabla animada)
En 2014–2024: el ataque uno, −16.8% con Sharpe de −0.24. El dos, +29.7% con Sharpe de 0.31. El tres, −24.1% con Sharpe de −0.16. Estar invertido a 1x: Sharpe de 0.37. En 2022: el uno, −4.0%; el dos, −4.9%; y el tres, +6.7%, con Sharpe de +0.40. Recuerda: el Sharpe es la ganancia por unidad de riesgo. Ninguno supera al 0.37.
| Ataque | 2014–2024 | Sharpe 2014–2024 | 2022 |
|---|---|---|---|
| A1 tendencia + VIX | −16.8% | −0.24 | −4.0% |
| A2 tendencia + vol-targeting | +29.7% | 0.31 | −4.9% |
| A3 largo/corto | −24.1% | −0.16 | +6.7% (Sharpe +0.40) |
| Invertido a 1x | | 0.37 | |
> BOCETO: la tabla entra fila a fila con tick; A3/2022 en verde y A3/2014–2024 en rojo; línea de meta en 0.37. Curva 0 de `series/extra-v60.json` (A2) y curva 1 por detrás a baja opacidad.

**[3:25 — Cómo leer la tabla]** (pantalla: tabla con las dos columnas resaltadas)
Lee la tabla por columnas. En 2014–2024, solo el ataque dos es positivo, pero su Sharpe, 0.31, queda por debajo de 0.37. En 2022, solo el ataque tres es positivo, +6.7%. Ningún ataque gana en las dos columnas: cada uno compra una cosa a cambio de otra. Y como el criterio exigía las dos cosas a la vez, ninguno lo cumple.
> BOCETO: la misma tabla con la columna 2014–2024 resaltada en una pasada y la columna 2022 en otra; luego un tilde vacío en "gana en las dos".

**[3:55 — Por qué: solo mueven dónde ganas]** (pantalla: texto de la ficha)
Cada "arreglo" solo mueve dónde ganas y dónde pierdes. El ataque uno se envenenó: el filtro VIX con un día de rezago entra y sale a destiempo, y arrastró todo a −16.8%. El tres gana en el bajista de 2022, pero pierde en el alcista: es la apuesta contraria, no un arreglo. Y el dos no aportó: con +29.7% y Sharpe de 0.31 queda por debajo de 1x, y con más caída máxima: −21.5% frente a −13.0%.
> BOCETO: balanza que vuelve a inclinarse; dos tarjetas lado a lado "A2: caída máxima −21.5%" y "1x: −13.0%"; icono "apuesta contraria" sobre A3.

**[4:30 — El truco de la balanza]** (pantalla: balanza con dos platillos)
Piensa en una balanza. Si bajas el platillo del mercado bajista, sube el del alcista. El ataque tres lo muestra: apuesta por la tendencia en las dos direcciones, por eso gana en un mercado que cae de forma sostenida, pero pierde mucho en el periodo completo. Un arreglo auténtico sería uno que ganara en el bajista sin entregar el alcista, y eso es lo que no apareció en esta ronda.
> BOCETO: balanza con los platillos "mercado bajista 2022: +6.7%" y "periodo completo: −24.1%", que se mueven en sentidos opuestos.

**[5:05 — Con tu capital]** (pantalla: tarjeta "Con tu capital")
La ficha muestra la curva del ataque dos. Con $10,000 termina en +$2,970; con $100,000, en +$29,702. Comprar y esperar la cesta, entre julio de 2014 y finales de 2024: +$2,310 y +$23,098. Gana más en dólares porque opera con apalancamiento, pero con peor Sharpe y más caída máxima. Los ataques uno y tres no tienen curva en la ficha; sus cifras son las del cuadro.
> BOCETO: tarjeta de capital con dos filas (A2 y sin estrategia); nota al pie: "Curva de A2. Apalancamiento variable entre x0.5 y x3. Simulación, no es una promesa".

**[5:35 — Lo que quedaría por probar]** (pantalla: lista de pendientes)
Quedan cosas por probar. Estos ataques no se evaluaron fuera de muestra en 2007–2013 ni con Deflated Sharpe. Y el nombre, ronda 1, deja la puerta abierta a más intentos; cada intento adicional tendría que contarse en el Deflated Sharpe, porque cuantas más ideas pruebas, más fácil es que una salga bien por casualidad. Por eso importa contar cuántas veces se intenta, y por eso las cuento.
> BOCETO: lista con tres casillas vacías: "fuera de muestra 2007–2013", "Deflated Sharpe", "ronda 2"; un contador "intentos: 3" (A1, A2, A3).

**[6:10 — Ficha del experimento #60]** (pantalla: tarjeta con la URL)
Ficha del experimento #60. Estado: murió, no sirvió. Cifra clave: tendencia más VIX, −16.8% en 2014–2024; tendencia más volatilidad objetivo, +29.7% con Sharpe de 0.31; largo y corto, −24.1% (y +6.7% en 2022). Filtro que decidió: superar el Sharpe de 0.37 de estar invertido a 1x, que ninguno logra. Lección: cada arreglo solo mueve dónde ganas y dónde pierdes. Revísalo completo en atlas-lab-one.vercel.app/e/60.
> BOCETO: tarjeta «FICHA · EXPERIMENTO #60» con Estado · Cifra clave · Filtro que decidió · Lección, y la URL `atlas-lab-one.vercel.app/e/60` en grande.

**[6:40 — Conclusión y cierre]** (pantalla: logo)
No encontré un arreglo: cada uno cambia de lugar la ganancia y la pérdida. Todos los datos en atlas-lab-one.vercel.app/e/60. Si quieres que pruebe una cuarta idea para el mercado bajista, dímelo en los comentarios. Contenido educativo, no es asesoría financiera. El trading no se promete: se prueba.
> BOCETO: la balanza del inicio con +6.7% y −24.1%; fundido a la frase de marca en blanco sobre negro.

---

## SHORT (9:16, ≈ 45 s) — "El precio de ganar en 2022"
Título del Short: Ganar en el mercado bajista tuvo un precio: −24.1% #Shorts

**[0-3 s]** "Ganar en el mercado bajista tuvo un precio."
> BOCETO: B-roll vertical de pantallas rojas de mercado con overlay 0.6; balanza con "+6.7%" verde y "−24.1%" rojo; golpe de bajo y sacudida. Subtítulos karaoke con "EL PRECIO" en rojo.

**[3-15 s]** "Más 6.7% en 2022, pero menos 24.1% en el periodo completo. Tenía una regla de tendencia que perdía en el bajista: probé tres arreglos en 15 activos."
> BOCETO: tres tarjetas A1, A2, A3 entrando con whoosh, 3 s cada una. Ken Burns hacia dentro.

**[15-27 s]** "Uno, tendencia más VIX: menos 16.8%. Dos, tendencia más volatilidad objetivo: más 29.7%, pero Sharpe de 0.31. Tres, largo y corto: menos 24.1%."
> BOCETO: cada tarjeta se rellena con su cifra (rojo, verde, rojo) y un tick; Sharpe 0.31 resaltado; flash blanco al cambio de tarjeta.

**[27-34 s]** "Solo el largo y corto gana en 2022: más 6.7%. Pero es la apuesta contraria, no un arreglo."
> BOCETO: curva de 2022 (ilustración con el +6.7%) sobre balanza que se inclina hacia el −24.1%; texto "APUESTA CONTRARIA" en el centro.

**[34-45 s]** "Cada arreglo solo mueve dónde ganas y dónde pierdes. Ninguno supera el Sharpe de 0.37. Experimento 60 completo en el enlace; el video completo está en el canal. No es asesoría financiera."
> BOCETO: regresa la balanza con "+6.7%" y "−24.1%" del primer cuadro (loop); texto pequeño "El trading no se promete: se prueba." Abajo, «Experimento #60 completo en el enlace».

---

## Descripción (YouTube) — video largo
https://atlas-lab-one.vercel.app/e/60?utm_source=youtube&utm_medium=video&utm_campaign=exp060-t1
Ficha del experimento #60: murió (No sirvió) · A1 −16.8%, A2 +29.7%, A3 −24.1% (2014–2024) · ninguno supera el Sharpe de 0.37 de invertir a 1x.
Tres intentos de arreglar la pérdida del filtro de tendencia MA200 en el mercado bajista, sobre una cesta de 15 activos y costos de 3 bps: A1 tendencia + VIX (−16.8% en 2014-2024), A2 tendencia + vol-targeting (+29.7%, Sharpe 0.31, caída máxima −21.5% vs −13.0% de 1x) y A3 largo/corto (+6.7% en 2022 pero −24.1% en 2014-2024). Ninguno supera el Sharpe de 0.37 de estar invertido a 1x.
Contenido educativo. No es asesoría financiera ni recomendación de inversión.

Capítulos: 0:00 Gancho · 0:25 Presentación · 0:35 El problema · 1:05 Por qué es tentador arreglar · 1:35 Los tres ataques · 2:20 Cómo se probó · 2:55 Resultados · 3:25 Cómo leer la tabla · 3:55 Por qué: solo mueven dónde ganas · 4:30 El truco de la balanza · 5:05 Con tu capital · 5:35 Lo que quedaría por probar · 6:10 Ficha del experimento #60 · 6:40 Conclusión y cierre

Etiquetas: media móvil 200, mercado bajista, cambio de régimen, VIX, volatilidad objetivo, largo y corto, tendencia, backtest, Sharpe ratio, estrategia de trading, trading con datos, ATLAS Lab

## Descripción (YouTube) — Short
https://atlas-lab-one.vercel.app/e/60?utm_source=youtube&utm_medium=short&utm_campaign=exp060-t1
Experimento #60 · Ataques al cambio de régimen — ronda 1: murió · A1 −16.8%, A2 +29.7%, A3 −24.1% · ninguno supera el Sharpe de 0.37 de invertir a 1x. Video completo en el canal. No es asesoría financiera.

## Rúbrica (autoevaluación, escala 1-5)
| Criterio | Nota | Por qué |
|---|---|---|
| hook_0_3s | 4 | Frase de tensión; las cifras +6.7% y −24.1% están en pantalla |
| ritmo | 4 | Tarjetas, balanza y tabla; el bloque de los tres ataques es largo |
| promesa_cumplida | 5 | Promete responder si se puede arreglar y lo responde con la tabla |
| potencial_loop | 4 | Cierra con la misma balanza y el mismo par de cifras |
| claridad_no_traders | 4 | Define media móvil, VIX, largo/corto, Sharpe y Deflated Sharpe |
| honestidad_atlas | 5 | Declara que no hubo fuera de muestra ni Deflated Sharpe y que A1/A3 no tienen curva |
| audio | 4 | Voz por clonar; un golpe de bajo |
| cta | 4 | Una petición y remite al video completo |
Promedio: **4.25** (≥ 4.0). Hook del Short 4 (≥ 4) y honestidad 5: no descalificado.

## Otros temas de este experimento
- Tema 1 de 3: `exp-060-ataques-cambio-regimen.md` — Ganó +6.7% en el mercado bajista, pero −24.1% en 2014–2024
- Tema 2 de 3: `exp-060-t2-filtro-vix-envenena.md` — Añadí un filtro de VIX a una regla que daba +30.3%: quedó en −16.8%
- Tema 3 de 3: `exp-060-t3-criterio-antes-de-probar.md` — Escribe qué tiene que pasar antes de probar: tres arreglos, cero cumplen

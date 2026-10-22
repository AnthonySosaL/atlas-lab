# Experimento #65 — Reversión de corto plazo (z-score 5d) en índices · Tema 2 de 3: ganar dinero no es ganar

Estado del guion: **BORRADOR — pendiente de aprobación**
Tema 2 de 3 del experimento #65 · Qué aporta frente a los otros temas: es el tema de la COMPARACIÓN y del CON TU CAPITAL. Con el Nasdaq 100, el mejor de los cuatro índices, muestra que una estrategia puede ganar dinero (+$220,005 con $100,000) y aun así perder contra comprar y esperar (+$764,178), y explica el costo de oportunidad. El tema 1 abre con los cuatro índices y el z-score; el tema 3 trata del método: la prueba más barata primero.
Estado del experimento: **murió** (incluso en bruto su Sharpe queda siempre por debajo de comprar y esperar)
Serie: F, por tema (anomalías de corto plazo; el plan aún no lista #65–#67) · Lo confirma el #72 (Connors RSI(2))
Datos usados: `experiments.json` (v=65: verdict, analysis, notes, kpis, metrics, params_view, capital) · `exp_details.json` (extra-v65: algo, code.snippet, filters) · `series/extra-v65.json` ([0] reversión en el Nasdaq 100, bruto; [1] Nasdaq 100 comprar y esperar) · tabla «Con tu capital» (`docs/youtube/*-capital.md`, fila #65; el $10k se calcula con la misma regla de la tarjeta del sitio).

## Títulos
1. Ganó +$220,005 con $100,000 y aun así perdió: el costo de oportunidad
2. Nasdaq 100: reversión de corto plazo +$220,005 contra +$764,178 de comprar y esperar
3. ¿Ganar dinero es ganar? La comparación que casi nadie hace

## Miniatura
Fondo `#09090b`. Dos pilas de billetes: una pequeña en verde `#22c55e` con «+$220,005» y una enorme en gris con «+$764,178». Encima de la pequeña, un sello rojo `#e11d2a`: «PERDIÓ». Logo ATLAS esquina inferior derecha.

---

## VIDEO LARGO (≈ 4½ min, experimento corto)

**[0:00 — Gancho]** (pantalla: dos pilas de billetes, una pequeña y otra enorme)
Con $100,000, esta estrategia ganó +$220,005. Y aun así fue una derrota.
> BOCETO: pila pequeña verde con «+$220,005» y pila enorme gris con «+$764,178»; golpe de bajo y sacudida al aparecer la pila grande.

**[0:15 — Este experimento]** (pantalla: rótulo «Experimento #65 · Reversión de corto plazo (z-score 5d) en índices»)
Este es el experimento #65 de ATLAS Lab: reversión de corto plazo, con z-score de 5 días, en índices. Todos los resultados están en la página del experimento. Hoy me centro en una pregunta: ¿qué significa ganar?
> BOCETO: rótulo con «#65» y el nombre del experimento; logo ATLAS; whoosh suave.

**[0:35 — La estrategia en treinta segundos]** (pantalla: precio con su media de 5 días y una liga que se estira)
La reversión a la media es la idea de que, si el precio se aleja mucho de su promedio reciente, tiende a volver, como una liga que se estira. Mido cuántas desviaciones se alejó el precio de su media de 5 días, el z-score. Si cayó mucho, compro; si subió mucho, vendo en corto, con un tope de ±3. La señal siempre es la de ayer. Lo probé en cuatro índices de 2012 a 2024, sin descontar costos.
> BOCETO: precio con banda de 5 días; flecha verde de compra abajo y roja de venta en corto arriba, con tope en ±3. Recuadro `params_view`: ventana 5 d · tope ±3 · rezago 1 día · bruto.

**[1:10 — Con tu capital: la tarjeta]** (pantalla: tarjeta «Con tu capital» con el Nasdaq 100)
Tomo el mejor de los cuatro, el Nasdaq 100. De enero de 2012 a diciembre de 2024, con $10,000, la reversión habría dado +$22,001. Comprar y esperar, +$76,418. Con $100,000: +$220,005 contra +$764,178. La peor caída desde un máximo fue de −$29,311, un −29.3%.
> BOCETO: curva `series/extra-v65.json[0]` (roja/blanca) muy por debajo de la gris `[1]`; selector $10,000 / $100,000; aviso ámbar «bruto, sin costos».

**[1:55 — El costo de oportunidad]** (pantalla: dos caminos que se bifurcan)
Ganar dinero y ganar a la alternativa son cosas distintas. Si tienes dos caminos, y en uno ganas $220,005 y en el otro habrías ganado $764,178, el primero te cuesta lo que el segundo habría dado. A eso se le llama costo de oportunidad: lo que dejas de ganar por elegir una opción. Aquí, la alternativa más simple, no hacer nada, era mucho mejor.
> BOCETO: bifurcación de un camino: la rama «reversión» termina en una pila pequeña y la rama «comprar y esperar», en una grande; etiqueta «costo de oportunidad». Ilustración rotulada.

**[2:35 — El mejor de los cuatro]** (pantalla: tabla con cuatro filas y barras)
El Nasdaq 100 es el mejor resultado de la reversión: un Sharpe de 0.48, contra 0.84 de comprar y esperar. El Sharpe es la ganancia por unidad de riesgo. Los otros tres índices están peor: S&P 500, 0.21 contra 0.73; DAX, −0.11 contra 0.54; FTSE 100, 0.02 contra 0.26. Cuatro de cuatro: la reversión queda siempre por debajo.
| Índice | Reversión (bruto) | Comprar y esperar |
|---|---|---|
| S&P 500 | 0.21 | 0.73 |
| Nasdaq 100 | 0.48 | 0.84 |
| DAX | −0.11 | 0.54 |
| FTSE 100 | 0.02 | 0.26 |
> BOCETO: en cada fila, barra roja corta (reversión) junto a barra gris larga (sin estrategia); el DAX con la barra roja hacia abajo.

**[3:15 — Y esto es bruto]** (pantalla: contador de operaciones y pila de monedas)
Todas estas cifras son brutas: no restan costos. La estrategia hace muchísimas operaciones, así que los costos solo la dejarían todavía peor. Esa es la parte que juega a favor de la estrategia en esta comparación, y aun así no le gana a quedarse quieto.
> BOCETO: contador de operaciones que sube muy rápido y una pila de monedas de costo que crece; sello «costos: sin descontar».

**[3:45 — Dos preguntas, en este orden]** (pantalla: dos preguntas)
Cuando te enseñen un resultado, hazte dos preguntas. Primera: ¿gana dinero? Segunda, la que importa: ¿le gana a no hacer nada? La primera se contesta con una cifra de dólares; la segunda, con una comparación contra comprar y esperar.
> BOCETO: dos tarjetas: «1 · ¿gana dinero?» con ✓ verde y «2 · ¿le gana a no hacer nada?» con ✕ roja.

**[4:10 — Conclusión]** (pantalla: las dos pilas del inicio)
Ganar dinero con una estrategia no la hace buena. La hace buena ganarle a la alternativa más simple.
> BOCETO: las dos pilas del inicio, fijas, con el sello ✕.

**[4:20 — Ficha del experimento #65 y cierre]** (pantalla: tarjeta con la ficha y la URL)
Ficha del experimento #65. Estado: murió. Cifra clave: Sharpe bruto de −0.11 a 0.48, siempre por debajo del 0.26 a 0.84 de comprar y esperar; en el Nasdaq 100, +$220,005 contra +$764,178 con $100,000. Filtro que decidió: superar a comprar y esperar, ya en bruto. Lección: no hay ventaja de reversión de corto plazo en estos índices. Revísalo completo en atlas-lab-one.vercel.app/e/65. Contenido educativo, no es asesoría financiera. El trading no se promete: se prueba.
> BOCETO: tarjeta en pantalla con las 4 líneas de la ficha (estado rojo «murió») y la URL `atlas-lab-one.vercel.app/e/65` en grande; fundido a la frase de marca.

---

## SHORT (9:16, ≈ 44 s) — "Ganó y perdió"

**[0-3 s]** "Con 100,000 dólares ganó 220,005. Y fue una derrota."
> BOCETO: B-roll vertical de pantalla de bolsa, kb=in, overlay 0.6; pila pequeña verde «+$220,005» y pila enorme gris «+$764,178»; golpe de bajo + sacudida. Karaoke con «DERROTA» en rojo.

**[3-14 s]** "Es reversión de corto plazo en el Nasdaq 100: comprar cuando el precio cae más de lo normal respecto a su media de 5 días, vender en corto cuando sube más de lo normal. De 2012 a 2024, sin descontar costos."
> BOCETO: precio con banda de 5 días y flechas verde y roja; whoosh. Ken Burns hacia dentro.

**[14-26 s]** "Comprar y esperar el mismo índice, en las mismas fechas, ganó 764,178. La diferencia es el costo de oportunidad: lo que dejas de ganar por elegir la estrategia."
> BOCETO: bifurcación de caminos con dos pilas; contadores; tick.

**[26-37 s]** "Y es el mejor de los cuatro índices: Sharpe de 0.48 contra 0.84. En los otros tres, todavía peor. Y todo esto, sin descontar costos."
> BOCETO: barras roja corta y gris larga; sello ✕; flash blanco al entrar.

**[37-44 s]** "Video completo en el canal y experimento 65 completo en el enlace. Ganar dinero no es ganar. Ganó 220 mil… y perdió."
> BOCETO: vuelven las dos pilas del primer cuadro (loop); rótulo «Experimento #65 completo en el enlace»; texto pequeño «No es asesoría financiera · El trading no se promete: se prueba».

---

## Descripción (YouTube)
https://atlas-lab-one.vercel.app/e/65?utm_source=youtube&utm_medium=video&utm_campaign=exp065-t2
Ficha del experimento #65: murió · Nasdaq 100 (2012–2024, bruto): +$220,005 con $100,000 contra +$764,178 de comprar y esperar · Sharpe 0.48 contra 0.84.
Una estrategia puede ganar dinero y aun así perder contra no hacer nada: el costo de oportunidad, explicado con la reversión de corto plazo en índices. Cifras brutas, sin costos.
Contenido educativo. No es asesoría financiera ni recomendación de inversión.
Descripción del Short (primera línea): https://atlas-lab-one.vercel.app/e/65?utm_source=youtube&utm_medium=short&utm_campaign=exp065-t2

Capítulos: 0:00 Gancho · 0:15 Este experimento · 0:35 La estrategia en treinta segundos · 1:10 Con tu capital: la tarjeta · 1:55 El costo de oportunidad · 2:35 El mejor de los cuatro · 3:15 Y esto es bruto · 3:45 Dos preguntas, en este orden · 4:10 Conclusión · 4:20 Ficha del experimento #65 y cierre

Etiquetas: costo de oportunidad, reversión a la media, z-score, Nasdaq 100, comprar y mantener, índices bursátiles, backtest, Sharpe ratio, trading con datos, ATLAS Lab, estrategias de trading, comprar y esperar

## Rúbrica (autoevaluación)
| Pieza | hook_0_3s | ritmo | promesa_cumplida | potencial_loop | claridad_no_traders | honestidad_atlas | audio | cta | Promedio |
|---|---|---|---|---|---|---|---|---|---|
| Largo | 5 | 4 | 5 | 4 | 5 | 5 | 4 | 4 | 4.50 |
| Short | 5 | 4 | 5 | 5 | 4 | 5 | 4 | 4 | 4.50 |

Hook ≥ 4 ✓ · honestidad 5 ✓. Punto débil: la tarjeta de capital es solo del Nasdaq 100, el mejor de los cuatro; el video lo dice y da los Sharpe de los otros tres.

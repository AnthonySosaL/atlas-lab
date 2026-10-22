# Experimento #65 — Reversión de corto plazo (z-score 5d) en índices

Estado del guion: **BORRADOR — pendiente de aprobación**
Estado del experimento: **murió** (incluso en bruto su Sharpe queda siempre por debajo de comprar y esperar)
Serie: F, por tema (anomalías de corto plazo; el plan aún no lista #65–#67). Lo confirma el #72 (Connors RSI(2)).
Datos usados: `experiments.json` (v=65: verdict, analysis, notes, kpis, metrics, params_view, capital) · `exp_details.json` (extra-v65: algo, code, filters) · `series/extra-v65.json` ([0] reversión en el Nasdaq 100, bruto; [1] Nasdaq 100 comprar y esperar) · tabla «Con tu capital» (docs/youtube, archivo de capital, fila #65; el $10k se calcula con la misma regla de la tarjeta del sitio).

## Títulos
1. Comprar la caída, vender la subida: 4 índices, 4 derrotas
2. Reversión de corto plazo: ni sin costos le gana al mercado
3. ¿Funciona la reversión a la media? Sharpe 0.21 contra 0.73 (S&P 500)

## Miniatura
Fondo `#09090b`. Cuatro parejas de barras: la corta en rojo `#e11d2a` (la estrategia) y la alta en gris (comprar y esperar). Sobre ellas, texto blanco «SIEMPRE PEOR». Logo ATLAS esquina inferior derecha.

---

## VIDEO LARGO (≈ 5 min, experimento corto)

**[0:00 — Gancho]** (pantalla: texto «¿comprar la caída?»; cuatro tarjetas de índices que se voltean y muestran una ✕ roja cada una)
BOCETO: S&P 500, Nasdaq 100, DAX, FTSE 100 con una ✕ que cae sobre cada tarjeta, una por segundo, con tick; sacudida en la cuarta.
> Comprar cuando el mercado cae y vender cuando sube suena a sentido común. Lo probé en 4 índices entre 2012 y 2024, y aun sin descontar costos, perdió contra no hacer nada en los cuatro. Te explico qué probé y por qué no hay ventaja que explotar.

**[0:20 — Presentación]** (pantalla: rótulo «Experimento #65 · Reversión de corto plazo (z-score 5d) en índices»)
BOCETO: rótulo «EXPERIMENTO #65 · Reversión de corto plazo (z-score 5d) en índices» que entra con whoosh sobre el último cuadro del gancho a baja opacidad.
> Este es el experimento #65 de ATLAS Lab: Reversión de corto plazo (z-score 5d) en índices. Todos los resultados están en la página del experimento.

**[0:30 — La idea: reversión a la media]** (pantalla: una liga que se estira y vuelve; precio con su media de 5 días)
BOCETO: el precio se aleja de la media hacia abajo (flecha verde «compra») y hacia arriba (flecha roja «vende en corto»); la liga se tensa y regresa.
> La idea se llama reversión a la media: si el precio se aleja mucho de su promedio reciente, tiende a volver, como una liga que se estira. Quien la opera compra cuando el precio cae por debajo de lo normal, esperando el rebote, y vende en corto cuando sube demasiado, esperando que baje. Es una de las ideas más intuitivas del trading, y por eso conviene probarla con datos.

**[1:00 — El z-score]** (pantalla: una banda que mide «cuántas desviaciones se alejó»; el tamaño de la posición crece con la distancia hasta un tope de ±3)
BOCETO: precio con su media de 5 días y una regla graduada; al alejarse hacia abajo crece una flecha verde de compra y hacia arriba una roja de venta en corto, con tope en ±3; texto «z = cuántas desviaciones se alejó».
> Para medir qué tan lejos está el precio de lo normal uso el z-score: cuántas desviaciones estándar está el precio de hoy respecto a su media de los últimos 5 días. Un z-score de cero significa que está justo en su promedio; uno muy negativo, que cayó mucho; uno muy positivo, que subió mucho. La posición es contraria y proporcional: si el z-score es muy negativo, compro más; si es muy positivo, vendo en corto más, con un tope de ±3 para no exagerar. Y la señal siempre es la de ayer, para no mirar el futuro.

**[1:40 — Cómo lo probé]** (pantalla: checklist de filtros con los valores reales)
BOCETO: ✗ Superar a comprar y esperar · ✓ Señal de ayer (rezago de 1 día) · — Costos: no aplicado (bruto) · — Fuera de muestra: no aplicado · — Deflated Sharpe: no aplicado.
> Lo probé en el S&P 500, el Nasdaq 100, el DAX y el FTSE 100, de 2012 a 2024. Para cada uno comparo el Sharpe de la estrategia con el de simplemente comprar y esperar. El Sharpe mide cuánto rindes por cada unidad de riesgo, así que sirve para comparar dos cosas distintas con justicia. Ojo: es un resultado bruto, sin restar costos. Eso juega a favor de la estrategia, porque en la vida real los costos solo le restan. Tampoco apliqué prueba fuera de muestra ni Deflated Sharpe: bastó la comparación simple para ver que no pasa la primera puerta.

**[2:20 — Resultados]** (pantalla: tabla con cuatro filas y barras)
BOCETO: en cada fila, barra roja corta (reversión) junto a barra gris larga (sin estrategia); el DAX con la barra roja hacia abajo, en negativo.
| Índice | Reversión (bruto) | Comprar y esperar |
|---|---|---|
| S&P 500 | 0.21 | 0.73 |
| Nasdaq 100 | 0.48 | 0.84 |
| DAX | −0.11 | 0.54 |
| FTSE 100 | 0.02 | 0.26 |
> En el S&P 500, 0.21 contra 0.73. En el Nasdaq 100, 0.48 contra 0.84. En el DAX, −0.11 contra 0.54. En el FTSE 100, 0.02 contra 0.26. Cuatro de cuatro: la reversión queda siempre por debajo, con un Sharpe entre −0.11 y 0.48, mientras que no hacer nada va de 0.26 a 0.84. No es que gane poco: es que, aun regalándole los costos, pierde la comparación en todos los índices.

**[2:50 — Por qué no hay ventaja]** (pantalla: contador de operaciones subiendo muy rápido; sello «costos: sin descontar»)
BOCETO: contador de operaciones que sube muy rápido y, al lado, una pila de monedas de costo que crece; sello «costos: sin descontar»; texto «hipótesis, no medida».
> Hay dos problemas. El primero: aun en bruto no le gana a comprar y esperar. El segundo: hace muchísimas operaciones, así que los costos, que aquí ni siquiera resté, la enterrarían todavía más. Una hipótesis, que este experimento no midió: como también vende en corto cuando el precio sube, va contra la subida de fondo de estos índices. Lo que sí está medido es el resultado: no hay una ventaja de reversión explotable en estos índices.

**[3:25 — Con tu capital]** (pantalla: tarjeta «Con tu capital»; curva `series/extra-v65.json[0]` contra `[1]`, la roja muy por debajo de la gris)
BOCETO: aviso ámbar «bruto, sin costos»; la tarjeta usa el Nasdaq 100, el mejor de los cuatro.
> Veamos qué significa en dinero. Tomo el mejor de los cuatro, el Nasdaq 100. De enero de 2012 a diciembre de 2024, con $10,000 la reversión habría dado +$22,001, y comprar y esperar, +$76,418. Con $100,000: +$220,005 contra +$764,178. La peor caída desde un máximo fue de −$2,931 con 10,000 y −$29,311 con 100,000, un −29.3%. Fíjate: la estrategia ganó dinero, pero aun siendo el mejor de los cuatro, termina muy por debajo de quedarse quieto. Y todo esto sin descontar costos.

**[4:00 — Lo que este resultado no dice]** (pantalla: dos columnas: «lo que sí» y «lo que no»)
BOCETO: dos columnas; a la izquierda «sí: z-score de 5 días · 4 índices · 2012–2024», a la derecha «no medido: otras ventanas, otros mercados».
> Conviene ser preciso. Esto no prueba que la reversión nunca funcione. Prueba que, con esta regla de z-score a 5 días, en estos cuatro índices y en estos años, no hay una ventaja explotable, ni siquiera antes de costos. Otras ventanas u otros mercados no los medí aquí.

**[4:20 — Ficha del experimento #65]** (pantalla: tarjeta con la URL)
BOCETO: tarjeta «FICHA · EXPERIMENTO #65» con Estado · Cifra clave · Filtro que decidió · Lección, y la URL `atlas-lab-one.vercel.app/e/65` en grande.
> Ficha del experimento #65. Estado: murió, no sirvió. Cifra clave: Sharpe bruto entre −0.11 y 0.48, siempre por debajo del 0.26 a 0.84 de comprar y esperar en cada índice. Filtro que decidió: superar a comprar y esperar, que no se cumple ni sin costos. Lección: no hay ventaja de reversión de corto plazo explotable en índices. Revísalo completo en atlas-lab-one.vercel.app/e/65.

**[4:50 — Conclusión]**
BOCETO: las cuatro parejas de barras finales con la ✕ roja; frase «no hay ventaja de reversión de corto plazo»; cierre con el logo.
> Conclusión: no hay ventaja de reversión de corto plazo en estos índices. Más adelante pruebo una de las reversiones más documentadas, con costos y fuera de muestra, y llega a la misma conclusión. Todos los datos en atlas-lab-one.vercel.app/e/65. El trading no se promete: se prueba. Contenido educativo, no es asesoría financiera.

---

## SHORT (9:16, ≈ 48 s)

**[0-3 s]** (boceto: «COMPRA LA CAÍDA · VENDE LA SUBIDA» y «4 DE 4» en rojo; b-roll de pantalla con velas en rojo y verde, kb=in; golpe de bajo)
> Comprar la caída pierde ante el mercado: 4 de 4.

**[3-15 s]** (boceto: precio con banda de 5 días, flechas verde y roja; b-roll de operador mirando monitores, kb=out; whoosh)
> Mido cuánto se alejó el precio de su media de 5 días y apuesto a que vuelve: compro lo que cae, vendo lo que sube. Cuatro índices, de 2012 a 2024, sin descontar ni un costo.

**[15-23 s]** (boceto: cuatro parejas de barras que crecen; rótulos 0.21 / 0.73, 0.48 / 0.84, −0.11 / 0.54, 0.02 / 0.26; tick por pareja)
> S&P 500: Sharpe 0.21 contra 0.73 de comprar y esperar. Nasdaq 100: 0.48 contra 0.84. DAX: −0.11 contra 0.54. FTSE 100: 0.02 contra 0.26.

**[23-30 s]** (boceto: sello ✕ rojo; contador de operaciones acelerando; b-roll de ciudad de noche, kb=in)
> Ni sin costos le gana a no hacer nada. Y hace tantas operaciones que los costos la enterrarían todavía más.

**[30-35 s]** (boceto: barras: mejor Nasdaq 100 (0.48) y peor DAX (−0.11))
> El mejor de los cuatro fue el Nasdaq 100, con 0.48; el peor, el DAX, con −0.11.

**[35-41 s]** (boceto: tarjeta «Con tu capital»: +$220,005 contra +$764,178; aviso «bruto»)
> Con $100,000 en el Nasdaq 100, el mejor de los cuatro: +$220,005 contra +$764,178 de comprar y esperar.

**[41-48 s]** (boceto: texto «¿compras la caída?»; logo; abajo, «Experimento #65 completo en el enlace»)
> Video completo en el canal. Experimento 65 completo en el enlace. Y tú: ¿comprarías la caída y venderías la subida?

Gancho alterno A: «Sharpe de −0.11 en el DAX, sin costos.» · B: «Con $100,000 en el Nasdaq 100: +$220,005 contra +$764,178.»

## Descripción (YouTube) — video largo
https://atlas-lab-one.vercel.app/e/65?utm_source=youtube&utm_medium=video&utm_campaign=exp065-t1
Ficha del experimento #65: murió (No sirvió) · Sharpe bruto entre −0.11 y 0.48 frente a 0.26 a 0.84 de comprar y esperar · 4 índices, 2012–2024.
Reversión de corto plazo en el S&P 500, Nasdaq 100, DAX y FTSE 100 (2012–2024): se compra la sobreventa y se vende la sobrecompra según el z-score de 5 días. Incluso en bruto, su Sharpe (de −0.11 a 0.48) queda siempre por debajo de comprar y esperar (de 0.26 a 0.84).

Contenido educativo. No es asesoría financiera ni recomendación de inversión.

Capítulos: 0:00 Gancho · 0:20 Presentación · 0:30 La idea: reversión a la media · 1:00 El z-score · 1:40 Cómo lo probé · 2:20 Resultados · 2:50 Por qué no hay ventaja · 3:25 Con tu capital · 4:00 Lo que este resultado no dice · 4:20 Ficha del experimento #65 · 4:50 Conclusión

Etiquetas: reversión a la media, z-score, comprar la caída, índices bursátiles, S&P 500, Nasdaq 100, DAX, FTSE 100, backtest, trading con datos, Sharpe ratio, ATLAS Lab

## Descripción (YouTube) — Short
https://atlas-lab-one.vercel.app/e/65?utm_source=youtube&utm_medium=short&utm_campaign=exp065-t1
Experimento #65 · Reversión de corto plazo (z-score 5d) en índices: murió · Sharpe bruto de −0.11 a 0.48 frente a 0.26 a 0.84 de comprar y esperar. Video completo en el canal. No es asesoría financiera.

## Rúbrica (autoevaluación)
| Criterio | Short | Largo |
|---|---|---|
| hook_0_3s | 4 | 4 |
| ritmo | 4 | 4 |
| promesa_cumplida | 5 | 5 |
| potencial_loop | 4 | 3 |
| claridad_no_traders | 4 | 4 |
| honestidad_atlas | 5 | 5 |
| audio | 4 | 4 |
| cta | 4 | 4 |
| **Promedio** | **4.25** | **4.13** |

## Otros temas de este experimento
- Tema 1 de 3: `exp-065-reversion-zscore-indices.md` — Comprar la caída, vender la subida: 4 índices, 4 derrotas
- Tema 2 de 3: `exp-065-t2-ganar-dinero-no-es-ganar.md` — Ganó +$220,005 con $100,000 y aun así perdió: el costo de oportunidad
- Tema 3 de 3: `exp-065-t3-la-prueba-barata-primero.md` — La prueba más barata primero: si pierde sin costos, no pasa con costos

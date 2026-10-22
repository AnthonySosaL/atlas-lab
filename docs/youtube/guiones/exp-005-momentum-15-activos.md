# Experimento #5 — TSMOM cartera de 15 activos

Estado del guion: **BORRADOR — pendiente de aprobación**
Estado del experimento: **murió**
Serie: B (Estrategias famosas, puestas a prueba), por afinidad; los #4–#8 no figuran en plan-series.md
Datos usados: `experiments.json` (v=5: description, params, metrics, kpis, analysis, verdict, notes), `exp_details.json` (algo, filters), `series/20260607_204455_tsmom-cartera-15-activos-v5.json` (curva 1 = estrategia, curva 2 = comprar y esperar la cesta) y la tabla «Con tu capital» de docs/youtube (fila 5). Las cifras con 10,000 dólares son las de la tabla de 100,000 divididas entre 10.

## Títulos (3 opciones)
1. Un test estadístico dio p = 0.003, pero la estrategia no tenía ventaja
2. Momentum en 15 mercados: Sharpe −0.10 frente a 0.40 de comprar y esperar
3. Cuando un p-valor bajo no significa nada: el caso del momentum diversificado

## Miniatura
Fondo negro de la marca. A la izquierda «p = 0.003» en blanco enorme con un check verde; a la derecha, un sello rojo girado «CERO VENTAJA» (texto de apoyo de 2 palabras) y «Sharpe −0.003» en pequeño. De fondo, tenue, las dos curvas reales: la estrategia plana y la cesta subiendo. Logo ATLAS esquina inferior derecha.

---

## VIDEO LARGO (16:9, ≈ 5:43 min — 4–6 min: experimento de una sola idea y pocas cifras)
Ritmo visual: algo cambia en pantalla cada 2-3 s; b-roll real detrás, Ken Burns alterno, subtítulos karaoke, whoosh + flash en cada corte, golpe de bass solo en el momento clave.

**[0:00 — Gancho]** (pantalla: «p = 0.003» con check verde; luego «−4.1%» rojo)
Un test estadístico dio un p de 0.003. En estadística, un valor tan bajo suele significar que el resultado no es casualidad. Pero esta estrategia perdió −4.1%, mientras comprar y esperar la misma cesta ganaba 26,775 dólares por cada 100,000. ¿Cómo se explica? Porque el test estaba midiendo otra cosa. Este es un caso para no fiarse nunca de un solo número, y para entender qué hay detrás de un p-valor bajo.
> Boceto: el «0.003» aparece con check verde y sonido de acierto; de pronto la curva real de la estrategia (series, curva 1) queda plana y la curva 2 sube con fuerza; el check se vuelve ✕.

**[0:30 — La idea]** (pantalla: mapa con 15 instrumentos agrupados)
La literatura académica dice que el momentum necesita diversificación: un solo mercado puede pasar años sin tendencia, pero una cesta de muchos mercados distintos podría encontrar tendencia en alguno de ellos en cada momento. Así que paso de un solo par de divisas a 15 instrumentos: divisas, metales, índices y energía, desde el euro-dólar y el oro hasta el S&P 500, el Brent y el petróleo WTI. La señal es la de siempre: el signo del retorno de los últimos 120 días; compro si es positivo y vendo en corto si es negativo. Pero ahora cada posición se ajusta por volatilidad: si un mercado se mueve mucho, apuesto menos; si se mueve poco, apuesto más, para que cada uno aporte un riesgo parecido. El objetivo es un 10% de volatilidad anual, con un tope de 3 veces, y todos los activos pesan igual en la cartera.
> Boceto: rejilla con los 15 símbolos de `params.instrumentos` en cuatro grupos de color; al lado, una balanza: mercado nervioso = posición pequeña, mercado tranquilo = posición grande. Texto: «Objetivo 10% anual · tope 3×».

**[1:29 — Cómo lo probé]** (pantalla: línea de tiempo y reglas)
El periodo va de 2019 a 2024, con 1,754 días. Hay una regla de oro: la posición de cada día usa la señal del día anterior, para no mirar el futuro. El costo es de 2 puntos básicos, o 0.02%, cada vez que se rota una posición. Y tres chequeos. Uno, el PSR, la probabilidad de que el Sharpe real sea positivo. Dos, la comparación con comprar y esperar la misma cesta. Y tres, la prueba de azar: barajo en el tiempo la señal de cada instrumento, 300 veces, como si barajaras un mazo de cartas, y miro cuántas de esas versiones barajadas le ganan a la estrategia real. Si muy pocas lo hacen, la señal parece tener algo. Si muchas lo hacen, es suerte.
> Boceto: checklist de `filters` apareciendo (señal con un día de rezago ✓); animación de una señal original y 300 copias barajadas; tarjeta «Costo 0.02% por rotación».

**[2:20 — Resultados]** (pantalla: tarjetas KPI)
Retorno total: −4.1%. Sharpe: −0.10. El Sharpe de comprar y esperar la cesta: 0.40. Retorno anual compuesto: −0.6%. Peor caída: −14.8%. Hizo 953 cambios de señal. Y el PSR, la probabilidad de que el Sharpe real sea positivo, fue 0.39, lejos del 0.95 que se exige. Sobre estas cifras no hay mucho que discutir: la cesta simplemente mantenida tuvo un Sharpe de 0.40, y la estrategia, uno negativo. Perdió contra no hacer nada.
> Boceto: `kpis` en cascada; la curva real de la estrategia, casi plana y por debajo de su punto de partida, frente a la curva 2 que sube con fuerza; Sharpe −0.10 contra 0.40 en dos barras.

**[2:50 — El p de 0.003]** (pantalla: histograma de 300 versiones barajadas)
En la prueba de azar, el p fue 0.003. Con 300 permutaciones, el mínimo posible es 1 entre 301: la estrategia real le ganó a prácticamente todas las versiones barajadas. Visto solo, ese número parece una prueba contundente. Si te quedaras ahí, concluirías que la estrategia tiene una ventaja real, y querrías operarla. Pero fíjate en el resto de la ficha: el retorno es negativo, el Sharpe es negativo y el PSR es bajo. Algo no cuadra. Un p-valor bajo dice que la estrategia es distinta de sus versiones barajadas; no dice que sea buena.
> Boceto: histograma de 300 puntos rojos (versiones barajadas) y un punto verde (la real) a la derecha de casi todos; etiqueta «p = 0.003 = 1/301».

**[3:29 — La trampa: sin costos]** (pantalla: Sharpe bruto contra neto)
Mira el Sharpe sin costos: −0.003. Cero. Antes de pagar nada, la estrategia no tiene ventaja. Entonces, ¿por qué el test sale tan bien? Porque las señales barajadas cambian de posición unas 10 veces más seguido, y por eso pagan muchos más costos. La estrategia real no le gana al azar por ser buena: el azar se arruina en comisiones. Es como comparar a un corredor con otros diez que, además, cargan una mochila pesada: ganarles no demuestra que seas rápido. Sin costos, el p sube a unos 0.91: la estrategia es igual de buena que casi cualquier versión barajada. Cero ventaja, tal cual.
> Boceto: dos barras de Sharpe: «bruto −0.003» (casi invisible) y «neto −0.10» (roja); luego la animación del histograma desplazándose a la derecha al quitar los costos, con la estrella verde quedando en el medio: «p ≈ 0.91».

**[4:12 — Qué enseña]** (pantalla: tres hábitos)
Tres hábitos para cualquier backtest que veas. Uno: mira siempre el resultado antes y después de costos, porque el costo cambia lo que cualquier test compara. Dos: compara con comprar y esperar, el rival más simple y más honesto. Tres: pregúntate contra qué compara realmente el test. Aquí, el PSR de 0.39 y el Sharpe de −0.10 contaban la historia correcta; el p de 0.003 era un artefacto de la rotación, no una ventaja. Y si un solo número te parece demasiado bueno, o demasiado malo, busca el que lo contradice.
> Boceto: tres iconos numerados con texto grande; el tercero se resalta con una lupa sobre «¿contra qué compara?».

**[4:49 — Con tu capital]** (pantalla: tarjeta «Con tu capital»)
Con 10,000 dólares serían unos menos 413 para la estrategia, frente a unos más 2,678 de comprar y esperar la misma cesta. Con 100,000, la tabla de ATLAS da menos 4,125 contra más 26,775. Aquí, no hacer nada fue claramente mejor.
> Boceto: tarjeta de capital: «Estrategia −$4,125» (rojo) y «Comprar y esperar +$26,775» (verde), con la brecha entre curvas sombreada; selector $10,000 / $100,000.

**[5:07 — Conclusión y cierre]**
Veredicto: no sirvió. Tras costos, el Sharpe fue −0.10, y la cesta sin estrategia tuvo 0.40. Un p bajo no basta: venía de la rotación de posiciones, no de una ventaja real. Con esto cierro el bloque de momentum: ni en un par ni en quince mercados mostró ventaja. En el siguiente experimento cambio de escala de tiempo y pruebo ideas intradía, con velas de un minuto. Todos los datos en atlas-lab-one.vercel.app, experimento 5. Contenido educativo, no es asesoría financiera. El trading no se promete: se prueba.
> Boceto: sello ✕ rojo sobre «p = 0.003»; frase de marca, logo y URL.

---

## SHORT (9:16, ≈ 46 s)
Fórmula visual: b-roll vertical + overlay oscuro 0.6, Ken Burns alternando in/out, subtítulos karaoke en MAYÚSCULAS con las cifras en rojo, whoosh + flash en cada corte, golpe de bass + sacudida solo en el 0-3 s; ticker arriba.

**[0-3 s]** «Un test dio p = 0.003… y no había ventaja.»
> Boceto: texto gigante «p = 0.003» con check verde que se convierte en ✕ rojo con sacudida; b-roll de gráficos de mercado, Ken Burns «in».
**[3-12 s]** «Es momentum sobre 15 mercados: divisas, metales, índices y energía. Posiciones ajustadas por volatilidad, señal del día anterior y costos en cada rotación.»
> Boceto: rejilla de 15 símbolos encendiéndose; Ken Burns «out»; karaoke con «15 MERCADOS» en rojo.
**[12-24 s]** «Un p tan bajo suele significar que no es casualidad. Pero el Sharpe fue −0.10 y perdió −4.1%, mientras la cesta sin estrategia tenía un Sharpe de 0.40.»
> Boceto: dos barras Sharpe −0.10 contra 0.40; curva real plana frente a curva que sube; whoosh y flash blanco.
**[24-36 s]** «¿La trampa? Sin costos, el Sharpe era −0.003: cero ventaja. Las versiones barajadas rotaban unas 10 veces más y se arruinaban en comisiones. Sin costos, el p sube a 0.91.»
> Boceto: contador que baja a −0.003; versiones barajadas apareciendo y desvaneciéndose en rojo; Ken Burns «in».
**[36-46 s]** «Un p bajo no basta: compara siempre con el resultado antes de costos. Aquí, un 0.003 que no significaba nada. El video completo está en el canal. No es asesoría financiera.»
> Boceto: vuelve el «p = 0.003» con ✕ grande (loop con el gancho); texto «Video completo en el canal» y logo.

## Descripción (YouTube)
Momentum de serie temporal sobre 15 instrumentos (divisas, metales, índices y energía, 2019-2024) con tamaño ajustado por volatilidad y señal rezagada un día. La prueba de azar dio p = 0.003, pero el Sharpe sin costos fue −0.003 y tras costos −0.10 (la cesta sin estrategia: 0.40). Explico por qué ese p bajo era un artefacto de la rotación de posiciones.
Todos los datos: https://atlas-lab-one.vercel.app (experimento #5)
Contenido educativo. No es asesoría financiera ni recomendación de inversión.

Capítulos: 0:00 Gancho · 0:30 La idea · 1:29 Cómo lo probé · 2:20 Resultados · 2:50 El p de 0.003 · 3:29 La trampa: sin costos · 4:12 Qué enseña · 4:49 Con tu capital · 5:07 Conclusión y cierre

Etiquetas: p-valor, Monte Carlo trading, momentum, TSMOM, volatilidad objetivo, backtest, forex, índices, Sharpe ratio, estadística trading, ATLAS Lab, trading con datos

## Rúbrica (autoevaluación, 1–5)
| Criterio | Short | Largo |
|---|---|---|
| hook_0_3s | 4 | 4 |
| ritmo | 4 | 4 |
| promesa_cumplida | 5 | 5 |
| potencial_loop | 4 | 3 |
| claridad_no_traders | 3 | 4 |
| honestidad_atlas | 5 | 5 |
| audio | 4 | 3 |
| cta | 4 | 4 |
| **Promedio** | **4.13** | **4.00** |

Notas: la claridad es el punto débil del Short (p-valor en 46 s); el largo la sube a 4 solo si la animación del histograma de versiones barajadas queda clara. El Short cumple hook ≥ 4 y honestidad 5.

## Otros temas de este experimento
Cada tema = video largo + Short, con su propia ficha del experimento. Todos en estado BORRADOR — pendiente de aprobación.
- Tema 1: este archivo — TSMOM cartera de 15 activos
- Tema 2: [exp-005-t2-covid-protegio-pero-no-gano.md](exp-005-t2-covid-protegio-pero-no-gano.md) — en el crash del COVID subió +4.0%, y aun así perdió
- Tema 3: [exp-005-t3-volatilidad-objetivo-explicada.md](exp-005-t3-volatilidad-objetivo-explicada.md) — ajustar el tamaño por volatilidad (qué hace y qué no hace)
- Tema 4: [exp-004-t4-uno-o-quince-mercados.md](exp-004-t4-uno-o-quince-mercados.md) — un mercado o quince, el mismo −4% (cubre #4 y #5)

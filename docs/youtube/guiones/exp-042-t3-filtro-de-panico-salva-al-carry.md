# Experimento #42 — Carry de divisas ejecutable · Tema 3: ¿puede un filtro de pánico salvar al carry?

Estado del guion: **BORRADOR — pendiente de aprobación**
Tema 3 de 3 del experimento #42. Qué aporta frente a los otros temas: es la COMPARACIÓN. El tema 1 cuenta el carry puro y el tema 2 desmonta el mejor escenario; este tema compara las cuatro cuentas (carry puro y carry con filtro, en 2014–2024 y en 2007–2013) y responde si el filtro de pánico cambia el desenlace: retrasa la muerte en un periodo y permite sobrevivir en el otro, sin crear ventaja.
Estado del experimento: **MURIÓ** (el carry puro muere en los dos periodos, incluso sumando el interés; con el filtro macro tampoco sobrevive 2014–2024)
Serie: **G (epílogo)** — usa los datos de #41; continúa en #43.
Datos usados: `experiments.json` (v=42: analysis, verdict, notes, metrics, kpis, params_view, capital) · `exp_details.json` (algo, filters) · `series/20260610_142006_carry-fx-ejecutable-v42.json` · fila #42 de la tabla «Con tu capital» (`docs/youtube/`).

## Títulos (opciones)
1. El filtro de pánico salvó al carry en 2007–2013 (Sharpe −0.02), pero…
2. Carry con y sin filtro de pánico: de −2.86 a −0.02 en 2007–2013
3. ¿Puede un filtro de pánico salvar al carry trade? Cuatro cuentas

## Miniatura
Fondo #09090b. Un salvavidas naranja flotando en un mar agitado, con una moneda dentro; al lado, un cartel pequeño en rojo (#e11d2a) «0 ganancia». Texto grande: «VIVO, NO RICO». Logo ATLAS en la esquina inferior izquierda. (No repite las palabras de los títulos.)

---

## VIDEO LARGO (16:9, ≈ 4:51)

**[0:00 — Gancho]** (pantalla — BOCETO: dos cuentas de 2007–2013 una al lado de la otra; la de la izquierda muere con ✕ y el contador «155 días»; la de la derecha sobrevive con el rótulo «Sharpe −0.02»)
En 2007–2013, el carry puro murió a los 155 días. Con un filtro de pánico, la cuenta sobrevivió todo el periodo. Sharpe: menos 0.02. Sobrevivir no es lo mismo que ganar, y los números de este experimento lo muestran con cuatro cuentas.

**[0:17 — Este es el experimento #42]** (pantalla — BOCETO: rótulo «EXPERIMENTO #42 · CARRY DE DIVISAS EJECUTABLE» con el logo ATLAS; la URL pequeña debajo)
Este es el experimento #42 de ATLAS Lab: Carry de divisas ejecutable. Todos los resultados están en la página del experimento. Probé el carry, comprar la divisa que paga más interés y vender la que paga menos, en 7 pares de forex, sumando el interés a la cuenta cada día.

**[0:37 — Qué hace el filtro de pánico]** (pantalla — BOCETO: dos condiciones que se encienden, «VIX > 28» y «crédito bajo su media de 40 días»; al cumplirse ambas, el carril del bot se vacía y aparece «fuera del mercado»)
El filtro saca al bot del mercado cuando ayer hubo aversión al riesgo: el VIX, el índice del miedo, sobre 28 y el crédito bajo su media de 40 días. La idea es simple: el carry cobra poco cada día y pierde mucho de golpe cuando el mercado entra en pánico, así que conviene no estar ahí. El día del disparo, el bot sale con lo que puede ver a esa hora; su φ medido es 0.94, es decir, esquiva solo cerca del 6% del movimiento de ese día.

**[1:12 — Las cuatro cuentas]** (pantalla — BOCETO: tabla 2×2 que se llena celda por celda; las celdas de muerte llevan ✕ y la fecha; la celda de supervivencia, un tick amarillo)
| Variante | 2014–2024 | 2007–2013 (fuera de muestra) |
|---|---|---|
| Carry puro | Sharpe −1.79 · muere el 15-dic-2014 (256 días) | Sharpe −2.86 · muere (155 días) |
| Carry + filtro de pánico | Sharpe −0.86 · muere el 24-jun-2016 | Sharpe −0.02 · sobrevive |
El Sharpe es la ganancia por unidad de riesgo; negativo significa que pierde. El 2007–2013 es fuera de muestra, es decir, años que el bot no vio al diseñarse.

**[1:29 — Qué cambió el filtro]** (pantalla — BOCETO: dos líneas de tiempo con las fechas de muerte: puro 15-dic-2014 y filtro 24-jun-2016; y en 2007–2013 una ✕ que se convierte en un tick amarillo)
Mira lo que cambia con el filtro. En 2014–2024, la muerte pasa del 15 de diciembre de 2014 al 24 de junio de 2016, y el Sharpe mejora de menos 1.79 a menos 0.86. En 2007–2013, un periodo que incluye la crisis de 2008, la cuenta deja de morir a los 155 días y sobrevive, con un Sharpe que sube de menos 2.86 a menos 0.02. El filtro compra tiempo y, en uno de los dos periodos, supervivencia.

**[1:59 — Sobrevivir no es ganar]** (pantalla — BOCETO: regla horizontal con las marcas −0.02, 0 y 0.30; el 0.30 rotulado «listón del laboratorio»)
Pero un Sharpe de menos 0.02 es casi cero, y el laboratorio pide más de 0.30. La cuenta vive, no gana. Y en 2014–2024, el periodo de diseño, el filtro no basta: la cuenta muere igual, solo que más tarde.

**[2:16 — El interés y el precio]** (pantalla — BOCETO: tabla de control con dos columnas «con interés» y «solo precio»: puro −1.79 / −1.94 y −2.86 / −3.07; filtro −0.86 / −0.83 y −0.02 / −0.99)
Un control más: ¿qué pasa si quitas el interés y miras solo el precio? El carry puro da menos 1.94 y menos 3.07. El carry con filtro da menos 0.83 y menos 0.99, y la cuenta muere en los dos periodos. Es decir, en 2007–2013 el interés cobrado es lo que separa a la cuenta con filtro de la muerte. En la década de 2010, con las tasas de los países desarrollados cerca de 0, el interés sumó poco: solo +1.4% del capital en los 256 días del carry puro.

**[2:51 — ¿Y si la salida fuera más simple?]** (pantalla — BOCETO: tarjeta «rezago puro de 1 día»: carry + filtro muere el 24-jun-2016 · Sharpe −0.80, junto a −0.86)
Se podría objetar que la salida medida del día del disparo favorece o perjudica al filtro. Con rezago puro de un día, sin suponer nada sobre ese día, el carry con filtro muere el mismo 24 de junio de 2016, con Sharpe de menos 0.80. La fecha de la muerte no depende de ese supuesto.

**[3:13 — Por qué el filtro no alcanza]** (pantalla — BOCETO: metáfora gráfica, monedas pequeñas a lo largo de una línea y un golpe rojo; texto «los crashes del carry coinciden con los de todo lo demás»)
La razón de fondo está en las notas del experimento: los crashes del carry coinciden con los de todo lo demás, así que no diversifica. Un filtro puede evitar una parte del golpe, pero el carry sigue cobrando poco y exponiéndose mucho. El filtro retrasa; no convierte la idea en una ventaja.

**[3:34 — El marcador de filtros]** (pantalla — BOCETO: checklist de exp_details.filters: Sharpe 2014–2024 ✗ · Sharpe 2007–2013 ✗ · sobrevivir en ambos periodos ✗ · señal rezagada ✓ · costos completos — · Deflated Sharpe —)
El tablero de filtros: el Sharpe de 2014–2024 y el de 2007–2013 del carry puro, menos 1.79 y menos 2.86, no llegan al 0.30; y sobrevivir en ambos periodos es falso, porque el carry con filtro muere en 2014–2024. Pasa uno: la señal va rezagada. Los costos completos y el Deflated Sharpe no se aplicaron: solo hay deslizamiento de 0.2% en el corte, sin spread ni margen del broker sobre el swap.

**[4:02 — Con tu capital]** (pantalla — BOCETO: tarjeta «Con tu capital»: $100,000 → −$9,924 contra −$43, «hasta el 15-dic-2014»)
Con $100,000 simulados, la cuenta del carry puro se cierra con −$9,924 tras 256 días; comprar y esperar la misma cesta: −$43. La versión con filtro dura hasta el 24 de junio de 2016 en el mismo periodo. Es una simulación histórica, no una promesa; con $10,000 serían la décima parte.

**[4:23 — Ficha del experimento #42]** (pantalla — BOCETO: tarjeta de ficha con sello «NO SIRVIÓ», cuatro líneas y la URL atlas-lab-one.vercel.app/e/42; logo ATLAS)
Ficha del experimento #42. Estado: no sirvió. Cifra clave: el filtro de pánico lleva el carry de menos 2.86 a menos 0.02 en 2007–2013, pero en 2014–2024 la cuenta muere igual, en junio de 2016. Filtro que decidió: sobrevivir en ambos periodos, que dio falso. Lección: un filtro puede comprar tiempo, no crear ventaja. Revísalo completo en atlas-lab-one.vercel.app/e/42. Contenido educativo, no es asesoría financiera. El trading no se promete: se prueba.

---

## SHORT (9:16, ≈ 51 s)
Título del Short: El filtro de pánico salvó al carry… pero Sharpe −0.02 #shorts
Fórmula visual (CLAUDE.md del canal): b-roll vertical real con overlay 0.6, Ken Burns alternado, subtítulos karaoke en MAYÚSCULAS con cifras en rojo, ticker arriba, whoosh + flash en cada corte; golpe (bass + sacudida) solo en 0-3 s y 14-28 s.

**[0-3 s]** "Con filtro de pánico, el carry pasó de morir en 155 días a sobrevivir. Sharpe: menos 0.02."
- Boceto: b-roll de un salvavidas en el mar (kb=in); «155 DÍAS» con ✕ y «−0.02» en rojo; golpe de bass.

**[3-14 s]** "El carry compra la divisa que más paga y vende la que menos. El filtro de pánico lo saca del mercado cuando el VIX supera 28."
- Boceto: dos condiciones que se encienden y el carril del bot que se vacía.

**[14-28 s]** "En 2007 a 2013: puro, menos 2.86 y muere. Con filtro, menos 0.02 y sobrevive. En 2014 a 2024: de menos 1.79, con muerte en diciembre de 2014, a menos 0.86, con muerte en junio de 2016."
- Boceto: tabla 2×2 que se llena; ✕ en tres celdas y un tick amarillo en la cuarta; sacudida en la última ✕.

**[28-40 s]** "Sobrevivir no es ganar: menos 0.02 es casi cero, y el listón es 0.30. Sin el interés del carry, hasta el filtro muere en 2007 a 2013."
- Boceto: regla con marcas −0.02, 0 y 0.30; barra −0.99 en rojo.

**[40-48 s]** "Video completo en el canal. Experimento 42 completo en el enlace. No es asesoría financiera. ¿Salva el filtro al carry? Lo retrasa; no lo vuelve ganador."
- Boceto: sello «NO SIRVIÓ»; logo ATLAS y «EXPERIMENTO #42 · ENLACE». Loop: la pregunta final enlaza con «sobrevivir no es ganar».

## Descripción (YouTube)
**Video largo**
https://atlas-lab-one.vercel.app/e/42?utm_source=youtube&utm_medium=video&utm_campaign=exp042-t3
Ficha del experimento #42 (carry de divisas ejecutable): no sirvió. El filtro de pánico lleva el carry de Sharpe −2.86 (cuenta muerta a los 155 días) a −0.02 (sobrevive) en 2007–2013; en 2014–2024 pasa de −1.79 (muere el 15-dic-2014) a −0.86 (muere el 24-jun-2016).
Comparo las cuatro cuentas del experimento, con y sin interés, y explico por qué sobrevivir no es ganar.

Capítulos: 0:00 Gancho · 0:17 Este es el experimento #42 · 0:37 Qué hace el filtro de pánico · 1:12 Las cuatro cuentas · 1:29 Qué cambió el filtro · 1:59 Sobrevivir no es ganar · 2:16 El interés y el precio · 2:51 ¿Y si la salida fuera más simple? · 3:13 Por qué el filtro no alcanza · 3:34 El marcador de filtros · 4:02 Con tu capital · 4:23 Ficha del experimento #42

**Short**
https://atlas-lab-one.vercel.app/e/42?utm_source=youtube&utm_medium=short&utm_campaign=exp042-t3
Experimento #42: con filtro de pánico el carry sobrevive 2007–2013 (Sharpe −0.02), pero en 2014–2024 muere en junio de 2016 (−0.86). No sirvió.

Contenido educativo. No es asesoría financiera ni recomendación de inversión.

Etiquetas: carry trade, filtro de pánico, VIX, forex, divisas, backtest, Sharpe ratio, supervivencia, bot de trading, estrategia de trading, ATLAS Lab

## Rúbrica (autoevaluación — criterios del CLAUDE.md del canal, 1-5)
| hook_0_3s | ritmo | promesa_cumplida | potencial_loop | claridad_no_traders | honestidad_atlas | audio | cta |
|---|---|---|---|---|---|---|---|
| 5 | 4 | 5 | 4 | 4 | 5 | 4 | 4 |

Promedio: **4.38** → cumple el corte (≥ 4.0; hook ≥ 4 y honestidad 5).
Notas: el hook es una mejora real (155 días a sobrevivir) acompañada de su límite (Sharpe −0.02). Punto débil: la tabla 2×2 y el control sin interés son muchas cifras para un Short; el Short se queda con la tabla 2×2 y el contraste «sobrevivir no es ganar».

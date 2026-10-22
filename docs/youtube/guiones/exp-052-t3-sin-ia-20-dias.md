# Experimento #52 — Volatilidad objetivo (control de drawdown) · Tema 3: sin inteligencia artificial, la desviación de 20 días recorta más la caída

Estado del guion: **BORRADOR — pendiente de aprobación**
Tema 3 de 4 del experimento #52. Qué aporta frente a los otros temas: el tema 1 cuenta por qué es el único que sirvió; este responde una pregunta concreta, si hace falta machine learning para controlar el riesgo, comparando el pronóstico de ML con una desviación estándar simple de 20 días y con el EWMA del experimento 55.
Estado del experimento: **sirvió** (el único de los 91), como control de riesgo, no como fuente de ganancia · Serie: E ("Gestión de riesgo: lo poco que se sostuvo") · Relacionado: #51, #53, #54, #55
Datos usados: `experiments.json` (v=52: verdict, analysis, notes, metrics, kpis, params_view, capital.note; v=55: metrics, chart.bars, params_view), `exp_details.json` (v52: algo, code.snippet, filters; v55: algo, code.snippet, filters) y la tabla «Con tu capital» (`docs/youtube/*-capital.md`) (fila #52).

## Títulos (3 opciones)
1. Volatilidad objetivo sin IA: −16.1% contra −19.2% con ML
2. ¿Hace falta machine learning para controlar el riesgo?
3. Desviación de 20 días contra machine learning: 0.83 y 0.79

## Miniatura (1280×720)
Fondo `#09090b`. A la izquierda, un cerebro de IA con una ✕ gris; a la derecha, una calculadora simple con el número 20 en verde `#22c55e`. Texto enorme blanco: "SIN IA". Texto pequeño rojo `#e11d2a`: "20 DÍAS". Logo ATLAS esquina inferior derecha. (No repite el título 1.)

---

## VIDEO LARGO (16:9, ≈ 5 min)

**[0:00 — Gancho]** (pantalla: dos valles de drawdown, −19.2% y −16.1%)
Para controlar el riesgo con volatilidad objetivo usé un modelo de machine learning y bajé la caída máxima de −40.3% a −19.2%. Después probé algo mucho más simple: la desviación estándar de los últimos 20 días. Resultado: −16.1%. Sin inteligencia artificial, un poco mejor.
> BOCETO: dos valles de drawdown superpuestos, rojo de −19.2% (ML) y verde de −16.1% (20 días), con cifras y tick; sacudida de pantalla en −16.1%. Subtítulo karaoke con "SIN IA" en rojo.

**[0:20 — De qué experimento hablamos]** (pantalla: rótulo con el número y el nombre)
Este es el experimento #52 de ATLAS Lab: Volatilidad objetivo (control de drawdown). Todos los resultados están en la página del experimento.
> BOCETO: rótulo "EXPERIMENTO #52 · Volatilidad objetivo (control de drawdown)" con whoosh.

**[0:30 — La idea en 30 segundos]** (pantalla: ilustración de calma y agitación)
La volatilidad es cuánto se mueve el precio. La técnica ajusta la posición: si se agita, reduce; si se calma, aumenta. El apalancamiento es el objetivo, 15% de volatilidad anual, dividido por la volatilidad estimada, con un tope de 4 veces. Siete activos, rebalanceo diario y 2 puntos básicos de costo por cada cambio de apalancamiento. Lo único que cambia entre las versiones es cómo se estima la volatilidad.
> BOCETO: fórmula «apalancamiento = objetivo ÷ volatilidad estimada»; tres cajas intercambiables en el denominador: «ML», «desviación 20 d», «constante».

**[1:05 — Las dos formas de estimarla]** (pantalla: dos cajas de código)
Primera forma, el machine learning: un modelo HistGradientBoosting con walk-forward pronostica la volatilidad con datos hasta ayer. Segunda forma, la reactiva: la desviación estándar simple de los retornos de los últimos 20 días, corrida un día para no mirar el futuro. Es una línea de código. Y un tercer rival, el más simple de todos: apalancamiento fijo de 2.
> BOCETO: dos cajas: «ML walk-forward» y `ret.rolling(20).std().shift(1)`; la tercera: «x2 fijo». Texto «misma cesta, mismo costo».

**[1:30 — La tabla]** (pantalla: tabla animada)
Todas las comparaciones, desde el 18 de marzo de 2020, el primer día con un pronóstico fuera de muestra. Apalancamiento fijo de 2: caída máxima de −40.3% y Sharpe de 0.93. Volatilidad objetivo con ML: −19.2% y 0.79, y su volatilidad real fue de 11.0%. Volatilidad reactiva de 20 días: −16.1% y 0.83. Comprar y esperar a 1x: −21.9% y 0.93.
> BOCETO: tabla de cuatro filas; la fila de 20 días resaltada en verde con ✓ en ambas columnas respecto del ML.
| Método | Caída máxima | Sharpe |
|---|---|---|
| Apalancamiento fijo x2 | −40.3% | 0.93 |
| Volatilidad objetivo (ML) | −19.2% | 0.79 |
| Volatilidad reactiva (20 días) | −16.1% | 0.83 |
| Comprar y esperar (1x) | −21.9% | 0.93 |

**[2:00 — Lo que la tabla dice]** (pantalla: dos flechas)
La versión sin IA gana en las dos columnas: cae menos, −16.1% contra −19.2%, y tiene mejor Sharpe, 0.83 contra 0.79. Esa es la conclusión de la ficha: el pronóstico de machine learning no aporta más. Y mira lo que sigue sin cambiar: ninguna de las dos le gana a comprar y esperar en Sharpe, 0.93, porque esto es control de riesgo, no una fuente de ganancia.
> BOCETO: dos flechas verdes sobre la fila de 20 días; una línea punteada en 0.93 por encima de ambas filas; rótulo «RIESGO, NO GANANCIA».

**[2:30 — Lo mismo, medido por separado]** (pantalla: experimento 55)
Hay una segunda evidencia, del experimento 55. Allí no se simula una cuenta: se mide qué método pronostica mejor la volatilidad de los próximos 5 días en siete activos. Un EWMA, un promedio que da más peso a los días recientes y que cabe en una línea de código, llegó a un R² de 0.175. El machine learning, a 0.113. Para quedarse, el ML debía ganar por más de 0.02. Quedó por debajo.
> BOCETO: las dos barras reales de #55 (EWMA 0.175 verde, ML 0.113 gris) con la marca del margen de 0.02; línea de código `ewm(span=10).std().shift(1)`.

**[3:05 — Lo que nadie probó]** (pantalla: aviso ámbar)
Una advertencia de honestidad. El EWMA ganó como pronóstico de volatilidad en el 55, y la desviación de 20 días ganó dentro del vol-targeting en el 52, pero no probé el EWMA dentro del vol-targeting. Son dos pruebas distintas que apuntan a la misma dirección. Y la ventaja de la versión simple en la caída máxima, de −19.2% a −16.1%, no es enorme: el mensaje no es «lo simple siempre gana», es «el ML no aportó».
> BOCETO: dos cajas conectadas por una línea punteada con «?»: «EWMA en #55» y «vol-targeting en #52»; aviso ámbar «EWMA dentro del vol-targeting: no probado».

**[3:35 — Con tu capital]** (pantalla: tarjeta "Con tu capital")
Con $100,000, la volatilidad objetivo con ML termina en +$60,839. Comprar y esperar la cesta a 1x, entre el 18 de marzo de 2020 y fin de 2024, +$129,383. La ficha no publica una curva para la versión de 20 días, así que no te doy una cifra en dólares para ella. Es lo que pasó en la simulación, no una promesa.
> BOCETO: tarjeta de capital con +$60,839 y +$129,383; una tercera fila vacía rotulada «20 días: sin curva publicada»; aviso «Simulación, no es una promesa».

**[4:05 — Qué significa para tu propio riesgo]** (pantalla: tres ideas)
Tres ideas. Una: para estimar volatilidad, empieza por lo simple y exige que lo complejo gane por un margen definido de antemano. Dos: compara siempre contra el apalancamiento fijo y contra comprar y esperar. Tres: cuando algo controla el riesgo, no esperes que además gane más. Esto es educativo; no es una recomendación sobre cuánto arriesgar.
> BOCETO: tres tarjetas numeradas con whoosh; la primera con «margen 0.02».

**[4:30 — Ficha del experimento #52]** (pantalla: tarjeta con la URL)
Ficha del experimento 52. Estado: sirvió, el único de 91, como control de riesgo. Cifra clave: caída máxima de −19.2% con ML y de −16.1% con la desviación de 20 días, contra −40.3% del x2 fijo. Filtro que decidió: pronóstico fuera de muestra y recorte de la caída máxima. Lección: el machine learning no aportó sobre una línea de código. Revísalo completo en atlas-lab-one.vercel.app/e/52.
> BOCETO: tarjeta «FICHA · EXPERIMENTO #52» con Estado · Cifra clave · Filtro que decidió · Lección, y la URL `atlas-lab-one.vercel.app/e/52` en grande.

**[5:00 — Cierre]**
Contenido educativo, no es asesoría financiera. El trading no se promete: se prueba.
> BOCETO: fundido a la frase de marca en blanco sobre negro; logo ATLAS.

---

## SHORT (9:16, ≈ 43 s) — "Una línea"
Título del Short: Controlé el riesgo sin IA: −16.1% contra −19.2% #Shorts

**[0-3 s]** "Con machine learning: caída máxima de menos 19.2%. Sin él: menos 16.1%."
> BOCETO: B-roll vertical de código con overlay 0.6; dos valles de drawdown con cifras; texto gigante "SIN IA"; golpe de bajo y sacudida.

**[3-14 s]** "Volatilidad objetivo: si el mercado se agita, reduces la posición. Un modelo de ML estima la volatilidad. O la desviación estándar de los últimos 20 días, una línea de código."
> BOCETO: palanca que sube y baja; dos cajas intercambiables ML y 20 d. Ken Burns hacia dentro.

**[14-27 s]** "Caída máxima: x2 fijo, −40.3%. ML, −19.2%. 20 días, −16.1%. Sharpe: 0.79 con ML, 0.83 con 20 días."
> BOCETO: tabla que se rellena con tick; flash en la fila de 20 días.

**[27-36 s]** "Y en otra prueba, una línea, EWMA, predijo la volatilidad mejor que el machine learning: 0.175 contra 0.113."
> BOCETO: barras reales de #55 con tick y flash.

**[36-43 s]** "El ML no aportó. Experimento 52 completo en el enlace; el video completo está en el canal. No es asesoría financiera."
> BOCETO: vuelven los dos valles con «SIN IA» (loop con el primer cuadro); abajo «Experimento #52 completo en el enlace»; texto pequeño «El trading no se promete: se prueba.»

---

## Descripción (YouTube) — video largo
https://atlas-lab-one.vercel.app/e/52?utm_source=youtube&utm_medium=video&utm_campaign=exp052-t3
Ficha del experimento #52 (Volatilidad objetivo, control de drawdown): sirvió, el único de 91, como control de riesgo · caída máxima −40.3% (x2 fijo), −19.2% (ML) y −16.1% (desviación de 20 días) · Sharpe 0.79 (ML) y 0.83 (20 días).
¿Hace falta machine learning para controlar el riesgo? Comparo el pronóstico de ML con una desviación estándar de 20 días y con el EWMA del experimento 55 (R² 0.175 contra 0.113).
Contenido educativo. No es asesoría financiera ni recomendación de inversión.

## Descripción (YouTube) — Short
https://atlas-lab-one.vercel.app/e/52?utm_source=youtube&utm_medium=short&utm_campaign=exp052-t3
Experimento #52 (Volatilidad objetivo): sirvió como control de riesgo · caída máxima −19.2% con ML y −16.1% con una desviación de 20 días. Video completo en el canal. No es asesoría financiera.

## Capítulos
0:00 Gancho · 0:20 De qué experimento hablamos · 0:30 La idea en 30 segundos · 1:05 Las dos formas de estimarla · 1:30 La tabla · 2:00 Lo que la tabla dice · 2:30 Lo mismo, medido por separado · 3:05 Lo que nadie probó · 3:35 Con tu capital · 4:05 Qué significa para tu propio riesgo · 4:30 Ficha del experimento #52 · 5:00 Cierre

## Etiquetas
volatilidad objetivo, EWMA, machine learning, desviación estándar, gestión de riesgo, drawdown, navaja de Occam, modelo simple, Sharpe ratio, trading con datos, ATLAS Lab, vol targeting

## Rúbrica (autoevaluación, escala 1-5)
| Criterio | Nota | Por qué |
|---|---|---|
| hook_0_3s | 4 | Contraste directo «con ML −19.2% / sin ML −16.1%» con dos valles en pantalla |
| ritmo | 4 | Valles, cajas de código y tabla cambian cada 2–3 s; las dos formas de estimar son el bloque más técnico |
| promesa_cumplida | 5 | Promete responder si hace falta ML y lo responde con la tabla de la ficha y el #55 |
| potencial_loop | 4 | El final vuelve a «sin IA» y a los dos valles |
| claridad_no_traders | 4 | Explica volatilidad, EWMA, Sharpe, drawdown y fuera de muestra |
| honestidad_atlas | 5 | Dice que no probó el EWMA dentro del vol-targeting, que no hay curva para los 20 días y que la diferencia no es enorme |
| audio | 4 | Voz por clonar; un golpe de bajo |
| cta | 4 | Una petición (la ficha en la web) y remite al video completo |
Promedio: **4.25** (≥ 4.0). Hook del Short 4 (≥ 4) y honestidad 5: no descalificado.

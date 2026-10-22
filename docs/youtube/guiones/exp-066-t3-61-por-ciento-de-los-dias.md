# Experimento #66 — Captura de anomalías (|z|>2 → reversión) · Tema 3 de 3: señal el 61% de los días

Estado del guion: **BORRADOR — pendiente de aprobación**
Tema 3 de 3 del experimento #66 · Qué aporta frente a los otros temas: es el tema del DETALLE SORPRENDENTE y del MÉTODO de medida. Explica por qué tener señal el 61% de los días no es una virtud (operar mucho sin ventaja solo multiplica las pérdidas) y por qué el mismo resultado tiene dos Sharpe: −0.21 (solo días con señal) y −0.17 (toda la curva). El tema 1 abre con la idea y el resultado general; el tema 2 trata del dinero y de la caída de −57.0%.
Estado del experimento: **murió** (Sharpe −0.21 incluso sin costos)
Serie: F, por tema (anomalías de corto plazo; el plan aún no lista #65–#67) · Hermano del #65
Datos usados: `experiments.json` (v=66: verdict, analysis, notes, kpis, metrics, params_view, capital) · `exp_details.json` (extra-v66: algo, code.snippet, filters) · `series/extra-v66.json` ([0] captura de anomalías, bruto; [1] cesta comprar y esperar) · tabla «Con tu capital» (`docs/youtube/*-capital.md`, fila #66; el $10k se calcula con la misma regla de la tarjeta del sitio).

## Títulos
1. 61% de los días con señal: cuando operar mucho es el problema
2. Sharpe −0.21 o −0.17: dos formas de medir la misma estrategia
3. Más oportunidades no son más ventaja: captura de anomalías en 15 activos

## Miniatura
Fondo `#09090b`. Un calendario donde el 61% de las casillas está encendido en ámbar. Encima, texto grande blanco: «61%». Debajo, en rojo `#e11d2a`: «Sharpe −0.21». Logo ATLAS esquina inferior derecha.

---

## VIDEO LARGO (≈ 5 min, experimento corto)

**[0:00 — Gancho]** (pantalla: calendario con el 61% de casillas encendidas)
En el 61% de los días había algo que operar. Y aun así, la estrategia dio un Sharpe de −0.21, incluso sin descontar costos.
> BOCETO: calendario donde se enciende el 61% de las casillas; el medidor del Sharpe cae bajo cero; golpe de bajo y sacudida al aparecer «−0.21».

**[0:15 — Este experimento]** (pantalla: rótulo «Experimento #66 · Captura de anomalías (|z|>2 → reversión)»)
Este es el experimento #66 de ATLAS Lab: captura de anomalías. Todos los resultados están en la página del experimento. Hoy hablo de un detalle que pasa desapercibido: qué significa tener señal casi todos los días.
> BOCETO: rótulo con «#66» y el nombre del experimento; logo ATLAS; whoosh suave.

**[0:35 — Quince activos, un umbral]** (pantalla: mosaico de 15 casillas)
La regla se aplica a una cesta de 15 activos. Cada día, para cada activo, mido el z-score de 20 días: cuántas desviaciones estándar está el precio de su media de las últimas 20 sesiones. Si baja de −2, compro; si pasa de 2, vendo en corto. Con 15 activos, cada día hay 15 oportunidades de que algo cruce el umbral.
> BOCETO: mosaico de 15 casillas; cuando un activo cruza el umbral, su casilla se enciende en verde (compra) o en rojo (venta en corto).

**[1:10 — Qué significa el 61%]** (pantalla: calendario con el 61% encendido)
En el 61% de los días, al menos uno de los 15 activos da señal. Es decir, en más de la mitad de los días hay algo que operar. Suena a máquina de oportunidades, pero lo que revela es otra cosa: la regla actúa muchísimo.
> BOCETO: calendario con 61% de casillas encendidas; texto «al menos 1 de 15 activos» y sello «más de la mitad de los días».

**[1:50 — Cómo se arma la cartera]** (pantalla: reparto del capital entre señales activas)
Cada día reparto el capital por igual entre las señales activas de ese día, con la señal de ayer para no mirar el futuro. El resultado es bruto: no resta costos.
> BOCETO: pastel de capital que se reparte en partes iguales entre las señales encendidas del día; recuadro `params_view`: ventana 20 d · |z|>2 · rezago 1 día · bruto.

**[2:25 — Dos formas de medir el mismo resultado]** (pantalla: dos medidores)
El Sharpe mide cuánto rindes por unidad de riesgo. Medido solo en los días con señal, es de −0.21. Si incluyo también los días sin señal, que es lo que dibuja la curva de capital, es de −0.17. Son dos formas de medir la misma estrategia, y las dos quedan muy por debajo de la referencia de 0.13, que es lo que da comprar y esperar en 2014–2020.
> BOCETO: dos medidores, «−0.21 · solo días con señal» y «−0.17 · toda la curva», con una línea verde punteada en 0.13.

**[3:00 — Operar mucho sin ventaja]** (pantalla: contador de operaciones y pila de monedas)
Actuar mucho sin ventaja solo multiplica las pérdidas. Cada operación es una apuesta, y si no hay ventaja, cada apuesta tiene el mismo problema. Y además, en una cuenta real, cada una cuesta dinero. Aquí ni siquiera resté los costos, lo cual favorece a la estrategia, y aun así pierde.
> BOCETO: contador de operaciones que sube muy rápido, pila de monedas de costo que crece; sello «costos: sin descontar».

**[3:30 — Con tu capital]** (pantalla: tarjeta «Con tu capital»)
De 2012 a 2024, con $10,000, la curva perdió $3,734; comprar y esperar la misma cesta, +$7,769. Con $100,000: −$37,344 contra +$77,693. La peor caída fue de −57.0%.
> BOCETO: curva `series/extra-v66.json[0]` roja bajo la línea de partida y gris `[1]` subiendo; aviso ámbar «bruto, sin costos».

**[4:00 — Una pregunta de escéptico]** (pantalla: tarjeta con la pregunta)
Un escéptico preguntaría si otro umbral lo arregla. No lo probé aquí: este experimento usa solo |z| mayor que 2 y la ventana de 20 días. Y hay una razón para desconfiar de las variantes: cada versión que pruebas y te quedas con la mejor aumenta la probabilidad de que esa sea solo suerte.
> BOCETO: tarjeta «¿otro umbral?» → «no medido»; icono de dados.

**[4:25 — Conclusión]** (pantalla: calendario y medidor)
Tener señal casi todos los días no es una ventaja: es una invitación a operar demasiado.
> BOCETO: calendario encendido y el medidor en −0.21.

**[4:35 — Ficha del experimento #66 y cierre]** (pantalla: tarjeta con la ficha y la URL)
Ficha del experimento #66. Estado: murió. Cifra clave: señal en al menos un activo el 61% de los días, con Sharpe de −0.21 sin costos (−0.17 en toda la curva). Filtro que decidió: el Sharpe bruto, por debajo de la referencia de 0.13. Lección: los extremos a veces son el inicio de una tendencia, no una reversión. Revísalo completo en atlas-lab-one.vercel.app/e/66. Contenido educativo, no es asesoría financiera. El trading no se promete: se prueba.
> BOCETO: tarjeta en pantalla con las 4 líneas de la ficha (estado rojo «murió») y la URL `atlas-lab-one.vercel.app/e/66` en grande; fundido a la frase de marca.

---

## SHORT (9:16, ≈ 44 s) — "Siempre hay algo que operar"

**[0-3 s]** "El 61% de los días hay señal. Y aun así: Sharpe de −0.21."
> BOCETO: B-roll vertical de pantallas de bolsa, kb=in, overlay 0.6; calendario con el 61% encendido y «−0.21» en rojo; golpe de bajo + sacudida. Karaoke con «61%» en rojo.

**[3-14 s]** "Probé una regla en 15 activos: si el precio se aleja más de dos desviaciones de su media de 20 días, apuesta a que vuelve. De 2012 a 2024, sin costos."
> BOCETO: mosaico de 15 casillas y banda de ±2 desviaciones; whoosh. Ken Burns hacia dentro.

**[14-26 s]** "En el 61% de los días, al menos un activo da señal. Parece una máquina de oportunidades. Pero actuar mucho sin ventaja solo multiplica las pérdidas."
> BOCETO: contador de operaciones acelerando; pila de monedas; tick; flash blanco.

**[26-37 s]** "Mismo resultado, dos medidas: menos 0.21 en los días con señal y menos 0.17 en toda la curva. Las dos, por debajo de la referencia de 0.13."
> BOCETO: dos medidores con línea verde punteada en 0.13; sello ✕.

**[37-44 s]** "Video completo en el canal y experimento 66 completo en el enlace. Sesenta y uno por ciento de los días… y menos 0.21."
> BOCETO: vuelve el calendario con «−0.21» (loop); rótulo «Experimento #66 completo en el enlace»; texto pequeño «No es asesoría financiera · El trading no se promete: se prueba».

---

## Descripción (YouTube)
https://atlas-lab-one.vercel.app/e/66?utm_source=youtube&utm_medium=video&utm_campaign=exp066-t3
Ficha del experimento #66: murió · señal en al menos un activo el 61% de los días · Sharpe −0.21 sin costos (−0.17 en toda la curva) · con $100,000, −$37,344 contra +$77,693 de comprar y esperar.
Por qué tener señal casi todos los días no es una ventaja y por qué el mismo resultado tiene dos Sharpe según cómo se mida. Cesta de 15 activos, 2012–2024, cifras brutas.
Contenido educativo. No es asesoría financiera ni recomendación de inversión.
Descripción del Short (primera línea): https://atlas-lab-one.vercel.app/e/66?utm_source=youtube&utm_medium=short&utm_campaign=exp066-t3

Capítulos: 0:00 Gancho · 0:15 Este experimento · 0:35 Quince activos, un umbral · 1:10 Qué significa el 61% · 1:50 Cómo se arma la cartera · 2:25 Dos formas de medir el mismo resultado · 3:00 Operar mucho sin ventaja · 3:30 Con tu capital · 4:00 Una pregunta de escéptico · 4:25 Conclusión · 4:35 Ficha del experimento #66 y cierre

Etiquetas: sobreoperar, overtrading, captura de anomalías, z-score, reversión a la media, Sharpe ratio, anomalías de mercado, backtest, trading con datos, ATLAS Lab, estrategias de trading, cesta de 15 activos

## Rúbrica (autoevaluación)
| Pieza | hook_0_3s | ritmo | promesa_cumplida | potencial_loop | claridad_no_traders | honestidad_atlas | audio | cta | Promedio |
|---|---|---|---|---|---|---|---|---|---|
| Largo | 4 | 4 | 5 | 4 | 5 | 5 | 4 | 4 | 4.38 |
| Short | 5 | 4 | 5 | 5 | 5 | 5 | 4 | 4 | 4.63 |

Hook ≥ 4 ✓ · honestidad 5 ✓. Punto débil: «al menos un activo el 61% de los días» no equivale a operar el 61% de las veces con todo el capital; el video lo aclara con el reparto igualitario entre señales activas.

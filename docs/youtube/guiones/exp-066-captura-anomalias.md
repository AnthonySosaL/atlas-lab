# Experimento #66 — Captura de anomalías (|z|>2 → reversión)

Estado del guion: **BORRADOR — pendiente de aprobación**
Estado del experimento: **murió** (Sharpe −0.21 incluso sin costos)
Serie: F, por tema (anomalías de corto plazo; el plan aún no lista #65–#67). Hermano del #65.
Datos usados: `experiments.json` (v=66: verdict, analysis, notes, kpis, metrics, params_view, capital) · `exp_details.json` (extra-v66: algo, code, filters) · `series/extra-v66.json` ([0] captura de anomalías, bruto; [1] cesta comprar y esperar) · tabla «Con tu capital» (docs/youtube, archivo de capital, fila #66; el $10k se calcula con la misma regla de la tarjeta del sitio).

## Títulos
1. Apostar a que lo extremo regresa: Sharpe −0.21 sin costos
2. La idea «obvia» que pierde −$37,344 por cada $100,000 (15 activos)
3. Hay señal el 61% de los días y aun así pierde: captura de anomalías

## Miniatura
Fondo `#09090b`. Una línea de precio que rompe una banda superior y, en vez de volver, sigue subiendo en verde `#22c55e` con una flecha roja `#e11d2a` tachada que apuntaba hacia abajo. Texto blanco: «NO VUELVE». Logo ATLAS esquina inferior derecha.

---

## VIDEO LARGO (≈ 6 min, experimento corto)

**[0:00 — Gancho]** (pantalla: precio que se dispara fuera de una banda; texto «¿vuelve?»; luego «−$37,344 por cada $100,000»)
BOCETO: la línea sale de la banda, un reloj marca el día siguiente y la línea sigue subiendo; entra el número rojo con sacudida.
> Cuando el precio se aleja demasiado de lo normal, ¿tiende a volver? Suena lógico. Lo probé en una cesta de 15 activos entre 2012 y 2024 y el resultado fue un Sharpe de −0.21, incluso sin descontar costos. Por cada $100,000, la curva perdió $37,344.

**[0:20 — Presentación]** (pantalla: rótulo «Experimento #66 · Captura de anomalías (|z|>2 → reversión)»)
BOCETO: rótulo «EXPERIMENTO #66 · Captura de anomalías (|z|>2 → reversión)» que entra con whoosh sobre el último cuadro del gancho a baja opacidad.
> Este es el experimento #66 de ATLAS Lab: Captura de anomalías (|z|>2 → reversión). Todos los resultados están en la página del experimento.

**[0:30 — La idea]** (pantalla: banda de ±2 desviaciones alrededor de la media de 20 días; cesta de 15 activos como mosaico)
BOCETO: cuando el precio toca abajo de la banda aparece «COMPRA» en verde; arriba, «VENDE EN CORTO» en rojo; cada señal se enciende en el mosaico.
> Es una idea intuitiva: detectar extremos estadísticos y apostar a que revierten, o sea, a que regresan a lo normal. Un extremo es un movimiento tan grande que, si el mercado se comportara de forma habitual, ocurriría muy pocas veces. Si el precio se hunde más de lo normal, compro; si se dispara más de lo normal, vendo en corto. La lógica detrás es que los extremos son rarezas y que, tarde o temprano, el precio vuelve a su sitio.

**[1:05 — Cómo se mide un extremo]** (pantalla: fórmula del z-score con una barra graduada y marcas en −2 y 2)
BOCETO: banda alrededor de la media de 20 días con marcas en −2 y 2; cuando el precio sale de la banda se enciende la señal; texto «|z| > 2 = extremo».
> Para medir qué es un extremo uso el z-score de 20 días: cuántas desviaciones estándar está el precio de hoy respecto a su media de las últimas 20 sesiones. Si el z-score baja de −2, compro; si pasa de 2, vendo en corto. La señal es siempre la de ayer, para no mirar el futuro. Y como lo aplico a toda la cesta, cada día reparto el capital por igual entre las señales activas de ese día.

**[1:35 — Cómo lo probé]** (pantalla: checklist de filtros con los valores reales)
BOCETO: ✗ Sharpe por debajo de la referencia 0.13 · ✓ Señal de ayer (rezago de 1 día) · — Costos: no aplicado (bruto) · — Fuera de muestra: no aplicado · — Deflated Sharpe: no aplicado.
> El Sharpe mide cuánto rindes por cada unidad de riesgo. Mi referencia en el laboratorio es 0.13, que es lo que da comprar y esperar en 2014–2020. Es un resultado bruto: no resta costos, lo cual juega a favor de la estrategia. Y aun así, el resultado es este.

**[1:55 — Resultados]** (pantalla: dos medidores, «Sharpe −0.21» y «61% de los días con señal»)
BOCETO: un calendario de casillas donde se enciende el 61% de ellas; después el medidor del Sharpe cayendo bajo cero.
> Sharpe de −0.21, medido solo en los días con señal. Si incluyo también los días sin señal, que es lo que dibuja la curva, queda en −0.17. Los dos están muy por debajo de la referencia de 0.13. Y hay señal en al menos uno de los 15 activos en el 61% de los días: en más de la mitad de los días hay algo que operar. Eso suena como una máquina de oportunidades, pero lo que revela es otra cosa: la regla actúa muchísimo, y actuar mucho sin ventaja solo multiplica las pérdidas.

**[2:35 — Por qué falla]** (pantalla: dos gráficos de precio; en uno el extremo revierte, en el otro es el inicio de una tendencia)
BOCETO: dos gráficos de precio: en uno el extremo regresa (flecha verde), en el otro el extremo se convierte en tendencia (flecha roja que sigue); texto «¿rareza o inicio de tendencia?».
> ¿Por qué? Primero, son demasiadas operaciones: con un 61% de días con señal, los costos solo empeorarían el resultado, y eso que aquí ni siquiera los resté. Segundo, y más importante: los extremos a veces son el inicio de una tendencia, no una reversión. Cuando un precio se dispara, puede ser una rareza que se normaliza o puede ser el primer día de un movimiento largo. La regla no distingue entre las dos cosas. Buena intuición, pero en estos activos no hay ventaja.

**[3:10 — Con tu capital]** (pantalla: tarjeta «Con tu capital»; curva roja `series/extra-v66.json[0]` bajo la línea de partida y gris `[1]` subiendo)
BOCETO: aviso ámbar «bruto, sin costos»; al pasar de $10,000 a $100,000 los números se multiplican por diez.
> Veamos qué significa en dinero. De 2012 a 2024, con $10,000 la curva perdió $3,734; comprar y esperar la misma cesta, +$7,769. Con $100,000: −$37,344 contra +$77,693. La peor caída desde un máximo fue de −$5,698 con 10,000 y −$56,983 con 100,000, un −57.0%. Más de la mitad del capital en algún momento. Y recuerda: ni siquiera restamos costos.

**[3:35 — Preguntas de un escéptico]** (pantalla: tres tarjetas con preguntas: «¿otro umbral?», «¿con costos?», «¿solo compras?»; cada una con la etiqueta «no medido» o «sería peor»)
BOCETO: tres tarjetas que se voltean una a una con su respuesta («no medido», «sería peor», «no medido»).
> Preguntas que me haría un escéptico. ¿Y si el umbral fuera otro, en vez de 2? No lo probé aquí: este experimento usa solo el umbral de 2 y la ventana de 20 días. ¿Y con costos? Sería peor, porque ya pierde sin ellos. ¿Y si opero solo las compras, sin vender en corto? Tampoco lo medí. Lo que sí puedo decir es que la versión que probé, la más directa, no tiene ventaja. Y hay una razón para desconfiar de las variantes: cada vez que pruebas otra versión y te quedas con la mejor, aumenta la probabilidad de que esa mejor sea solo suerte.

**[4:20 — Qué dice y qué no dice]** (pantalla: dos columnas: «lo que sí» y «lo que no»)
BOCETO: dos columnas, verde «sí: esta regla, esta cesta, estos años» y gris «no: otras definiciones de extremo».
> Este resultado dice que, con esta regla, en esta cesta y en estos años, apostar a que los extremos regresan no funciona. No dice que ninguna otra definición de extremo vaya a fallar. Pero sí es una buena señal de alerta: cuando una idea suena tan lógica y aun así pierde sin costos, conviene desconfiar de las ideas que solo suenan bien.

**[4:45 — Resumen]** (pantalla: las cifras clave en una sola tarjeta: −0.21 · −0.17 · 61% · −$37,344 · +$77,693 · −57.0%)
BOCETO: tarjeta única con seis cifras que entran con tick; −$37,344 en rojo y +$77,693 en gris.
> Resumen en tres bloques de cifras. Sharpe de −0.21 en los días con señal, −0.17 en toda la curva, y señal en el 61% de los días. En dinero, −$37,344 por cada $100,000 contra +$77,693 de comprar y esperar, con una caída de hasta −57.0%. Todo en bruto, de 2012 a 2024, en una cesta de 15 activos.

**[5:10 — Ficha del experimento #66]** (pantalla: tarjeta con la URL)
BOCETO: tarjeta «FICHA · EXPERIMENTO #66» con Estado · Cifra clave · Filtro que decidió · Lección, y la URL `atlas-lab-one.vercel.app/e/66` en grande.
> Ficha del experimento #66. Estado: murió, no sirvió. Cifra clave: Sharpe de −0.21 incluso sin costos, con señal en al menos un activo el 61% de los días. Filtro que decidió: el Sharpe bruto, por debajo del 0.13 de referencia del laboratorio. Lección: los extremos a veces son el inicio de una tendencia, no una reversión. Revísalo completo en atlas-lab-one.vercel.app/e/66.

**[5:40 — Conclusión]**
BOCETO: el sello «NO VUELVE» sobre la línea de precio; cierre con el logo.
> Una idea que suena bien, probada con datos: no hay ventaja en apostar a que los extremos regresan. Todos los datos en atlas-lab-one.vercel.app/e/66. El trading no se promete: se prueba. Contenido educativo, no es asesoría financiera.

---

## SHORT (9:16, ≈ 50 s)

**[0-3 s]** (boceto: precio saliendo de una banda; texto «−$37,344» en rojo y «por cada $100,000»; b-roll de gráfico de bolsa en rojo, kb=in; golpe de bajo + sacudida)
> Apostar a que lo extremo regresa: menos $37,344 por cada $100,000.

**[3-13 s]** (boceto: banda de ±2 desviaciones; flechas verde y roja; b-roll de operador frente a pantallas, kb=out; whoosh)
> La regla: si el precio se aleja más de dos desviaciones de su media de 20 días, apuesta a que vuelve. En 15 activos, de 2012 a 2024, sin descontar costos.

**[13-22 s]** (boceto: calendario con el 61% de casillas encendidas; medidor del Sharpe cayendo a −0.21; tick)
> Parece buena idea, y hay señal en al menos un activo el 61% de los días. Pero el Sharpe fue −0.21, incluso sin descontar costos.

**[22-32 s]** (boceto: contador de operaciones acelerando; texto «más de la mitad de los días»)
> Opera más de la mitad de los días, así que los costos la dejarían todavía peor, y aquí ni siquiera los restamos. La regla actúa mucho y no tiene ventaja.

**[32-40 s]** (boceto: barra roja −$37,344 frente a barra gris +$77,693; sello ✕)
> Mientras tanto, comprar y esperar la misma cesta habría dado +$77,693 por cada $100,000. Y la peor caída de la estrategia llegó a −57.0%.

**[40-50 s]** (boceto: dos gráficos, uno que revierte y otro que sigue; texto «¿cuánto perdió?»; logo; abajo, «Experimento #66 completo en el enlace»)
> A veces un extremo no es una rareza que regresa: es el comienzo de una tendencia. Video completo en el canal. Experimento 66 completo en el enlace. ¿Cuánto perdió por cada $100,000?

Gancho alterno A: «El 61% de los días hay señal. Y aun así: Sharpe −0.21.» · B: «Buena intuición, cero ventaja: lo probé en 15 activos.»

## Descripción (YouTube) — video largo
https://atlas-lab-one.vercel.app/e/66?utm_source=youtube&utm_medium=video&utm_campaign=exp066-t1
Ficha del experimento #66: murió (No sirvió) · Sharpe −0.21 sin costos · señal en al menos un activo el 61% de los días (2012–2024).
Captura de anomalías: cuando el z-score de 20 días pasa de ±2, se apuesta a la reversión, en una cesta de 15 activos (2012–2024). Sharpe de −0.21 incluso sin costos; hay señal en al menos un activo el 61% de los días. Por cada $100,000 la curva perdió $37,344 mientras comprar y esperar ganó $77,693.

Contenido educativo. No es asesoría financiera ni recomendación de inversión.

Capítulos: 0:00 Gancho · 0:20 Presentación · 0:30 La idea · 1:05 Cómo se mide un extremo · 1:35 Cómo lo probé · 1:55 Resultados · 2:35 Por qué falla · 3:10 Con tu capital · 3:35 Preguntas de un escéptico · 4:20 Qué dice y qué no dice · 4:45 Resumen · 5:10 Ficha del experimento #66 · 5:40 Conclusión

Etiquetas: captura de anomalías, z-score, reversión a la media, extremos estadísticos, cesta de 15 activos, backtest, trading con datos, Sharpe ratio, ATLAS Lab, estrategias de trading, tendencia, anomalías de mercado

## Descripción (YouTube) — Short
https://atlas-lab-one.vercel.app/e/66?utm_source=youtube&utm_medium=short&utm_campaign=exp066-t1
Experimento #66 · Captura de anomalías (|z|>2 → reversión): murió · Sharpe −0.21 sin costos · señal en al menos un activo el 61% de los días. Video completo en el canal. No es asesoría financiera.

## Rúbrica (autoevaluación)
| Criterio | Short | Largo |
|---|---|---|
| hook_0_3s | 4 | 4 |
| ritmo | 4 | 4 |
| promesa_cumplida | 5 | 5 |
| potencial_loop | 5 | 4 |
| claridad_no_traders | 5 | 4 |
| honestidad_atlas | 5 | 5 |
| audio | 4 | 4 |
| cta | 4 | 4 |
| **Promedio** | **4.50** | **4.25** |

## Otros temas de este experimento
- Tema 1 de 3: `exp-066-captura-anomalias.md` — Apostar a que lo extremo regresa: Sharpe −0.21 sin costos
- Tema 2 de 3: `exp-066-t2-caida-de-57-por-ciento.md` — −57.0% de caída máxima: lo que cuesta apostar a que lo extremo regresa
- Tema 3 de 3: `exp-066-t3-61-por-ciento-de-los-dias.md` — 61% de los días con señal: cuando operar mucho es el problema

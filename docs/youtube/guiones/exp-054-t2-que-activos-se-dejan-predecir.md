# Experimento #54 — Predicción de volumen y rango · Tema 2: ¿qué activos se dejan predecir? Índices y energía sí, oro no (−0.04)

Estado del guion: **BORRADOR — pendiente de aprobación**
Tema 2 de 3 del experimento #54. Qué aporta frente a los otros temas: el tema 1 cuenta la medición completa (volumen contra rango); este abre el rango por tipo de activo (índices y energía, divisas, oro) y lo cruza con la volatilidad del experimento 51; el tema 3 trata el volumen.
Estado del experimento: **parcial** (neutral): el volumen no se predice (R² −0.003), el rango sí (R² 0.15) · Serie: D/E (propuesta: mini-serie «La volatilidad sí se predice, la dirección no», #51 → #56) · Relacionado: #51, #52, #55
Datos usados: `experiments.json` (v=54: verdict, analysis, notes, metrics, kpis, params_view, chart.bars, capital.note, period; v=51: analysis y metrics para el oro), `exp_details.json` (v54: algo, code.snippet, filters). No tiene `series/` (no simula cartera) ni fila en la tabla «Con tu capital» (`docs/youtube/*-capital.md`): figura en su sección «Sin curva de capital».
Aviso de datos: la ficha da el rango de R² por grupo de activos, no un R² por activo; el guion no inventa desgloses.

## Títulos (3 opciones)
1. ¿Qué activos se dejan predecir? Índices sí, oro no (−0.04)
2. Rango de mañana: 0.27 en índices, −0.04 en oro
3. 10 activos, un solo modelo: dónde funciona y dónde no

## Miniatura (1280×720)
Fondo `#09090b`. Tres columnas de distinta altura: una alta verde `#22c55e` (índices y energía), una media amarilla (divisas) y una por debajo de cero en rojo `#e11d2a` (oro, con un lingote). Texto enorme blanco: "ORO NO". Texto pequeño: "RANGO DE MAÑANA". Logo ATLAS esquina superior derecha. (No repite el título 1.)

---

## VIDEO LARGO (16:9, ≈ 3.5 min — es una medición de datos, sin cuenta simulada)

**[0:00 — Gancho]** (pantalla: tres columnas, una alta, una media y una bajo cero)
Un mismo modelo, diez activos, una pregunta: ¿cuánto se va a mover mañana? En índices y energía responde con un R² de entre 0.15 y 0.27. En divisas, entre 0.05 y 0.12. En el oro, −0.04: peor que adivinar el promedio.
> BOCETO: tres columnas con las cifras reales de la ficha: índices y energía (0.15–0.27, verde), divisas (0.05–0.12, amarilla) y oro (−0.04, roja bajo la línea de cero); sacudida de pantalla al caer la del oro. Subtítulo karaoke con "ORO NO" en rojo.

**[0:20 — De qué experimento hablamos]** (pantalla: rótulo con el número y el nombre)
Este es el experimento #54 de ATLAS Lab: Predicción de volumen y rango. Todos los resultados están en la página del experimento.
> BOCETO: rótulo «EXPERIMENTO #54 · Predicción de volumen y rango» con whoosh.

**[0:30 — Qué se midió]** (pantalla: lista de 10 activos y esquema walk-forward)
Diez activos: S&P 500, Nasdaq 100, DAX, FTSE 100, WTI, Brent, oro, euro-dólar, libra-dólar y dólar-yen, con datos de 2019 a 2024. Un modelo HistGradientBoosting, entrenado con walk-forward, es decir, solo con el pasado y evaluado en días que no ha visto, predice el rango del día siguiente: máximo menos mínimo, dividido por el cierre. No es una estrategia: es una medición.
> BOCETO: 10 chips que entran uno a uno; bloques walk-forward avanzando; sello «MEDICIÓN, NO ESTRATEGIA».

**[1:00 — Cómo leer el R²]** (pantalla: escala negativa, cero y positiva)
El R² dice qué parte de lo que varía explica el modelo. Cero es como predecir siempre el promedio. Positivo, el modelo sabe algo. Negativo, el modelo es peor que el promedio. Ninguna cifra de este experimento llega cerca de 1, que sería predecirlo todo. Un R² de 0.15 es modesto, pero es una parte predecible, y eso es útil.
> BOCETO: escala −0.1 · 0 · 0.3 con los puntos de la ficha; marca punteada en 1 rotulada «predecirlo todo».

**[1:25 — El mapa por grupos]** (pantalla: tres grupos de activos)
Los resultados por grupo. Índices y energía, es decir, los cuatro índices más el WTI y el Brent: entre 0.15 y 0.27. Divisas, es decir, euro-dólar, libra-dólar y dólar-yen: entre 0.05 y 0.12. El oro: −0.04. El promedio de los diez, 0.15. La ficha no da un R² por cada activo, solo estos rangos, así que no te voy a inventar el detalle.
> BOCETO: los diez chips se agrupan en tres cajas con su rango; la caja del oro en rojo; aviso ámbar «la ficha da rangos por grupo, no por activo».

**[1:55 — El oro se resiste dos veces]** (pantalla: dos mediciones del oro)
El oro ya había salido mal en el experimento 51, con una medida distinta: la volatilidad realizada de los próximos 5 días daba un R² de −0.20 en oro, y −0.22 en plata. Dos mediciones, dos objetivos distintos, el mismo resultado: ni el rango ni la volatilidad del oro se dejaron predecir en este tramo con estas variables. La ficha no explica por qué.
> BOCETO: barras del oro: −0.04 (rango, #54) y −0.20 (volatilidad, #51) en rojo; plata −0.22 (#51); chips «#54» y «#51»; aviso ámbar «el porqué no está medido».

**[2:25 — Para qué sirve el mapa]** (pantalla: tarjeta «cuándo, no hacia dónde»)
Saber cuánto se va a mover un activo sirve para decidir cuándo ejecutar y cuánto arriesgar, no para saber hacia dónde va el precio. En el experimento 52, esa idea se usa para dimensionar la posición y es el único de 91 que sirvió. La regla práctica: no asumas que un pronóstico que funciona en el S&P 500 funcionará en el oro.
> BOCETO: tarjeta «cuándo ✓ · hacia dónde ✕»; chip verde «#52 SIRVIÓ»; flecha del S&P 500 al oro con un ✕.

**[2:55 — Con tu capital]** (pantalla: aviso)
Este experimento no simula una cartera, así que no hay un resultado en dinero que escalar a $10,000 o $100,000. Mide qué tan predecible es el rango de mañana.
> BOCETO: tarjeta «Con tu capital» con el texto «sin cuenta simulada: es una medición» sobre las tres columnas.

**[3:05 — Ficha del experimento #54]** (pantalla: tarjeta con la URL)
Ficha del experimento 54. Estado: parcial, neutral. Cifra clave: R² del rango de 0.15 de promedio, de 0.15 a 0.27 en índices y energía y de −0.04 en oro; el volumen, −0.003. Filtro que decidió: el R² fuera de muestra, positivo para el rango, nulo para el volumen. Lección: la volatilidad se puede medir, no en todos los activos. Revísalo completo en atlas-lab-one.vercel.app/e/54.
> BOCETO: tarjeta «FICHA · EXPERIMENTO #54» con Estado · Cifra clave · Filtro que decidió · Lección, y la URL `atlas-lab-one.vercel.app/e/54` en grande.

**[3:35 — Cierre]**
Contenido educativo, no es asesoría financiera. El trading no se promete: se prueba.
> BOCETO: fundido a la frase de marca en blanco sobre negro; logo ATLAS.

---

## SHORT (9:16, ≈ 41 s) — "El oro no"
Título del Short: Predije el rango de 10 activos: el oro, −0.04 #Shorts

**[0-3 s]** "Un modelo, diez activos. El oro: R² de menos 0.04."
> BOCETO: B-roll vertical de lingotes/pantallas con overlay 0.6; columna roja bajo la línea de cero y «−0.04»; golpe de bajo y sacudida.

**[3-12 s]** "Predice cuánto se moverá mañana: máximo menos mínimo del día. Índices, petróleo, divisas y oro, de 2019 a 2024."
> BOCETO: diez chips con whoosh; ondas de volatilidad. Ken Burns hacia dentro.

**[12-24 s]** "Índices y energía: entre 0.15 y 0.27. Divisas: entre 0.05 y 0.12. Oro: menos 0.04. Peor que adivinar el promedio."
> BOCETO: tres columnas con las cifras reales creciendo con tick; flash al entrar la roja.

**[24-33 s]** "En otro experimento, el oro salió con menos 0.20. Dos medidas, el mismo resultado. Y la ficha no explica por qué."
> BOCETO: barras del oro de #54 y #51; aviso ámbar «porqué: no medido».

**[33-41 s]** "No asumas que lo que funciona en el S&P 500 funciona en el oro. Experimento 54 completo en el enlace; el video completo está en el canal. No es asesoría financiera."
> BOCETO: vuelve la columna roja del oro (loop con el primer cuadro); abajo «Experimento #54 completo en el enlace»; texto pequeño «El trading no se promete: se prueba.»

---

## Descripción (YouTube) — video largo
https://atlas-lab-one.vercel.app/e/54?utm_source=youtube&utm_medium=video&utm_campaign=exp054-t2
Ficha del experimento #54 (Predicción de volumen y rango): parcial (neutral) · R² del rango 0.15 de promedio, 0.15 a 0.27 en índices y energía, 0.05 a 0.12 en divisas, −0.04 en oro · R² del volumen −0.003 · sin cuenta simulada.
Un solo modelo en diez activos: dónde predice el rango de mañana y dónde no, y qué tiene que ver con el control de riesgo del experimento 52.
Contenido educativo. No es asesoría financiera ni recomendación de inversión.

## Descripción (YouTube) — Short
https://atlas-lab-one.vercel.app/e/54?utm_source=youtube&utm_medium=short&utm_campaign=exp054-t2
Experimento #54 (Predicción de volumen y rango): parcial · rango de mañana: R² 0.15 a 0.27 en índices y energía, −0.04 en oro. Video completo en el canal. No es asesoría financiera.

## Capítulos
0:00 Gancho · 0:20 De qué experimento hablamos · 0:30 Qué se midió · 1:00 Cómo leer el R² · 1:25 El mapa por grupos · 1:55 El oro se resiste dos veces · 2:25 Para qué sirve el mapa · 2:55 Con tu capital · 3:05 Ficha del experimento #54 · 3:35 Cierre

## Etiquetas
predicción de volatilidad, rango diario, R2 fuera de muestra, oro, índices, energía, divisas, machine learning, walk-forward, trading con datos, ATLAS Lab

## Rúbrica (autoevaluación, escala 1-5)
| Criterio | Nota | Por qué |
|---|---|---|
| hook_0_3s | 4 | Contraste de tres grupos con las cifras de la ficha y el oro bajo cero |
| ritmo | 4 | Columnas y chips cambian cada 2–3 s; video corto de 4 min |
| promesa_cumplida | 5 | Promete el mapa por activos y lo entrega con los rangos de la ficha |
| potencial_loop | 4 | El final vuelve a la columna roja del oro |
| claridad_no_traders | 4 | Define R², rango y walk-forward |
| honestidad_atlas | 5 | Dice que la ficha da rangos por grupo, que el porqué no está medido y que no hay cuenta simulada |
| audio | 4 | Voz por clonar; un golpe de bajo |
| cta | 4 | Una petición (la ficha en la web) y remite al video completo |
Promedio: **4.25** (≥ 4.0). Hook del Short 4 (≥ 4) y honestidad 5: no descalificado.

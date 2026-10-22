# Experimento #54 — Predicción de volumen y rango · Tema 3: el volumen de tu plataforma no es dinero negociado (R² −0.003)

Estado del guion: **BORRADOR — pendiente de aprobación**
Tema 3 de 3 del experimento #54. Qué aporta frente a los otros temas: el tema 1 cuenta la medición completa y el tema 2 abre el rango por tipo de activo; este se dedica al volumen: qué es el volumen de ticks, por qué no se predijo (R² −0.003) y qué implica para las estrategias que lo usan como filtro.
Estado del experimento: **parcial** (neutral): el volumen no se predice (R² −0.003), el rango sí (R² 0.15) · Serie: D/E (propuesta: mini-serie «La volatilidad sí se predice, la dirección no», #51 → #56) · Relacionado: #51, #52, #55
Datos usados: `experiments.json` (v=54: verdict, analysis, notes, metrics, kpis, params_view, chart.bars, capital.note, period; v=51: description y params_view para el filtro con volumen), `exp_details.json` (v54: algo, code.snippet, filters; v51: algo). No tiene `series/` (no simula cartera) ni fila en la tabla «Con tu capital» (`docs/youtube/*-capital.md`): figura en su sección «Sin curva de capital».
Aviso de datos: la ficha no tiene más cifras que −0.003, 0.15, 0.27 y los rangos por tipo de activo; por eso el video es corto (≈ 4 min) y no se estira.

## Títulos (3 opciones)
1. El volumen de tu plataforma no es dinero: R² de −0.003
2. ¿Se puede predecir el volumen de mañana? Aquí: R² de −0.003
3. Volumen de ticks: qué mide y por qué no se predice

## Miniatura (1280×720)
Fondo `#09090b`. Una línea de precio en zigzag con marcas pequeñas en cada vértice (los ticks) y, a un lado, un montón de monedas tachado con una ✕ roja `#e11d2a`. Texto enorme blanco: "NO ES DINERO". Texto pequeño: "VOLUMEN DE TICKS". Logo ATLAS esquina superior derecha. (No repite el título 1.)

---

## VIDEO LARGO (16:9, ≈ 3.5 min — es una medición de datos, sin cuenta simulada)

**[0:00 — Gancho]** (pantalla: una barra de volumen vacía y la cifra −0.003)
Entrené un modelo de machine learning para predecir el volumen de mañana en 10 activos. Resultado fuera de muestra: R² de −0.003. Cero. Y hay una razón: el volumen que usa un minorista en estos datos es volumen de ticks, no dinero negociado.
> BOCETO: barra de volumen real de la ficha (−0.003, vacía y con borde rojo) junto a una pila de monedas tachada; golpe de bajo y sacudida de pantalla. Subtítulo karaoke con "NO ES DINERO" en rojo.

**[0:20 — De qué experimento hablamos]** (pantalla: rótulo con el número y el nombre)
Este es el experimento #54 de ATLAS Lab: Predicción de volumen y rango. Todos los resultados están en la página del experimento.
> BOCETO: rótulo «EXPERIMENTO #54 · Predicción de volumen y rango» con whoosh.

**[0:30 — Qué es el volumen de ticks]** (pantalla: línea de precio con ticks)
En una bolsa centralizada, el volumen es cuántas acciones o contratos se negociaron. Pero en los datos de un minorista, como forex y contratos por diferencia, no hay un libro central. Lo que aparece como volumen suele ser el número de ticks: cuántas veces cambió el precio en ese periodo. La ficha lo dice así: es volumen de ticks, y depende de factores externos.
> BOCETO: ilustración rotulada (no es dato real): línea de precio en zigzag con un contador de cambios («ticks») frente a una columna de «dinero negociado» tachada.

**[1:00 — Qué se probó]** (pantalla: 10 activos y objetivo del modelo)
Diez activos: S&P 500, Nasdaq 100, DAX, FTSE 100, WTI, Brent, oro, euro-dólar, libra-dólar y dólar-yen, de 2019 a 2024. Un modelo HistGradientBoosting, con walk-forward, predice el logaritmo del volumen del día siguiente. El logaritmo evita que los picos enormes dominen la medición. Se usan las mismas variables técnicas que en el experimento 51.
> BOCETO: 10 chips; fórmula «objetivo = log(volumen de mañana)»; esquema walk-forward con bloques que avanzan.

**[1:25 — Qué dice −0.003]** (pantalla: escala de R²)
Un R² de cero es como predecir siempre el promedio. El de −0.003 es apenas un poco peor: el modelo no sabe nada del volumen de mañana más que su promedio. Al lado, el rango diario, máximo menos mínimo, sí se dejó predecir: R² de 0.15 de promedio y hasta 0.27 en índices y energía.
> BOCETO: escala con −0.003 casi sobre el cero y 0.15 y 0.27 a la derecha; barras reales de `chart.bars` de la ficha.

**[1:50 — Por qué importa si usas volumen]** (pantalla: dos reglas que usan volumen)
Si una estrategia usa el volumen como filtro o como variable, conviene saber qué está midiendo. En el experimento 51, el filtro híbrido pedía que el volumen estuviera sobre su media, y el modelo incluía el z-score del volumen entre sus variables. No quiere decir que sea inútil describir la actividad del pasado; quiere decir que predecir cuánto será mañana no funcionó aquí. Y ese experimento terminó sin ventaja sobre comprar y esperar.
> BOCETO: dos tarjetas: «#51: filtro híbrido con volumen sobre su media» y «#51: z-score del volumen como variable»; flecha a «#54: volumen de mañana, R² −0.003»; aviso ámbar «descriptivo ≠ predecible».

**[2:25 — La alternativa que sí funcionó (un poco)]** (pantalla: barra de rango)
El rango, en cambio, sí tiene algo que se pueda predecir, y es útil para decidir cuándo ejecutar o cuánto arriesgar. En el experimento 52, la volatilidad pronosticada se usa para dimensionar la posición y es el único de 91 que sirvió. No hay milagro: ni dirección ni dinero extra, solo control de riesgo.
> BOCETO: barra verde de 0.15 y 0.27; chip verde «#52 SIRVIÓ»; texto «CUÁNDO, NO HACIA DÓNDE».

**[2:50 — Con tu capital]** (pantalla: aviso)
Este experimento no simula una cartera, así que no hay un resultado en dinero que escalar a $10,000 o $100,000.
> BOCETO: tarjeta «Con tu capital» con el texto «sin cuenta simulada: es una medición».

**[3:00 — Ficha del experimento #54]** (pantalla: tarjeta con la URL)
Ficha del experimento 54. Estado: parcial, neutral. Cifra clave: R² del volumen de −0.003 contra 0.15 del rango, con hasta 0.27 en índices y energía. Filtro que decidió: el R² fuera de muestra, que en el volumen queda en cero. Lección: el volumen de ticks no se predice, y no es dinero negociado. Revísalo completo en atlas-lab-one.vercel.app/e/54.
> BOCETO: tarjeta «FICHA · EXPERIMENTO #54» con Estado · Cifra clave · Filtro que decidió · Lección, y la URL `atlas-lab-one.vercel.app/e/54` en grande.

**[3:25 — Cierre]**
Contenido educativo, no es asesoría financiera. El trading no se promete: se prueba.
> BOCETO: fundido a la frase de marca en blanco sobre negro; logo ATLAS.

---

## SHORT (9:16, ≈ 40 s) — "Ticks, no dinero"
Título del Short: El volumen de tu plataforma no es dinero #Shorts

**[0-3 s]** "El volumen de mañana no se predice. R² de menos 0.003."
> BOCETO: B-roll vertical de pantallas de mercado con overlay 0.6; barra vacía y «−0.003» en rojo; golpe de bajo y sacudida.

**[3-14 s]** "En forex y CFD no hay volumen central. Lo que ves cuenta ticks: cuántas veces cambió el precio. No es dinero negociado."
> BOCETO: línea de precio con contador de ticks; pila de monedas tachada. Ken Burns hacia dentro.

**[14-26 s]** "Probé con machine learning en diez activos, de 2019 a 2024. El volumen: cero. El rango del día: R² de 0.15, y hasta 0.27 en índices y energía."
> BOCETO: barras reales de `chart.bars` creciendo con tick; flash al entrar la de 0.27.

**[26-34 s]** "Lo que se mueve se puede medir un poco. Lo que se negocia, aquí, no."
> BOCETO: texto en la zona segura del centro; las dos barras a baja opacidad.

**[34-40 s]** "Volumen de ticks: no es dinero. Experimento 54 completo en el enlace; el video completo está en el canal. No es asesoría financiera."
> BOCETO: vuelve la barra vacía de −0.003 (loop con el primer cuadro); abajo «Experimento #54 completo en el enlace»; texto pequeño «El trading no se promete: se prueba.»

---

## Descripción (YouTube) — video largo
https://atlas-lab-one.vercel.app/e/54?utm_source=youtube&utm_medium=video&utm_campaign=exp054-t3
Ficha del experimento #54 (Predicción de volumen y rango): parcial (neutral) · R² del volumen −0.003 · R² del rango 0.15 (hasta 0.27 en índices y energía) · 10 activos, 2019–2024 · sin cuenta simulada.
Qué es el volumen de ticks, por qué un modelo no lo predice y qué implica si tu estrategia usa volumen como filtro.
Contenido educativo. No es asesoría financiera ni recomendación de inversión.

## Descripción (YouTube) — Short
https://atlas-lab-one.vercel.app/e/54?utm_source=youtube&utm_medium=short&utm_campaign=exp054-t3
Experimento #54 (Predicción de volumen y rango): parcial · volumen R² −0.003; rango R² 0.15. El volumen de ticks no es dinero negociado. Video completo en el canal. No es asesoría financiera.

## Capítulos
0:00 Gancho · 0:20 De qué experimento hablamos · 0:30 Qué es el volumen de ticks · 1:00 Qué se probó · 1:25 Qué dice −0.003 · 1:50 Por qué importa si usas volumen · 2:25 La alternativa que sí funcionó (un poco) · 2:50 Con tu capital · 3:00 Ficha del experimento #54 · 3:25 Cierre

## Etiquetas
volumen de ticks, volumen, predicción de volumen, forex, CFD, R2 fuera de muestra, machine learning, walk-forward, análisis técnico, trading con datos, ATLAS Lab

## Rúbrica (autoevaluación, escala 1-5)
| Criterio | Nota | Por qué |
|---|---|---|
| hook_0_3s | 4 | Afirmación fuerte con «−0.003» en pantalla y en voz |
| ritmo | 4 | Ticks, barras y escala cambian cada 2–3 s; video corto de 4 min |
| promesa_cumplida | 5 | Promete explicar por qué el volumen no se predice y lo hace con la definición de ticks y la cifra de la ficha |
| potencial_loop | 4 | El final vuelve a la barra vacía de −0.003 |
| claridad_no_traders | 4 | Define volumen de ticks, R² y logaritmo con ejemplos visuales |
| honestidad_atlas | 5 | Dice que la ficha tiene pocas cifras, que no hay cuenta simulada y que el volumen descriptivo no es inútil |
| audio | 4 | Voz por clonar; un golpe de bajo |
| cta | 4 | Una petición (la ficha en la web) y remite al video completo |
Promedio: **4.25** (≥ 4.0). Hook del Short 4 (≥ 4) y honestidad 5: no descalificado.

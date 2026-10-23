# Experimento #23 — Régimen supervisado con XGBoost (walk-forward) · Tema 2: walk-forward y embargo

Tema 2 de 3 del experimento #023 · Qué aporta frente a los otros temas: el tema 1 cuenta el resultado (crashes raros, ~2 ejemplos por ventana); este explica a fondo el método —calentamiento, reentrenamiento y embargo— y lo que cuesta, usando el #23 como caso. Se entiende sin haber visto el tema 1.
Estado del guion: **BORRADOR — pendiente de aprobación**
Estado del experimento: **no concluyente** (el sitio lo muestra como neutral: «No concluyente») · Serie D — Machine learning en trading: lo que pasó
Datos usados: `experiments.json` (v=23: params, params_view, metrics, kpis, notes, capital, period), `exp_details.json` (clave `…-v23`: algo, code, filters).
Producción (CLAUDE.md del canal): b-roll real detrás de cada escena con overlay oscuro 0.6, Ken Burns alternando in/out, subtítulos karaoke en MAYÚSCULAS con cifras en rojo, un dato visual por escena, golpe de bajo + sacudida solo en 1–2 momentos. Colores: rojo `#e11d2a`, verde `#22c55e`, fondo `#09090b`.

## Títulos (3 opciones)
1. Walk-forward con embargo: cómo entrenar una IA sin mirar el futuro
2. 750 días de calentamiento: esta IA no puede opinar hasta el 25 de junio de 2010
3. Reentrenar cada 126 días y dejar 10 de embargo: el método del experimento #23

## Miniatura (pensada para el título 1)
Fondo `#09090b`. Una línea de tiempo: bloque azul de entrenamiento que crece, un hueco rojo `#e11d2a` rotulado «10 DÍAS» y un bloque verde de prueba. Texto en Segoe UI Black: «EMBARGO» (una palabra, sin repetir los títulos). Logo ATLAS arriba a la derecha.

---

## VIDEO LARGO (16:9, ≈ 6:18 min)

**[0:00 — Gancho]** (pantalla: calendario con la fecha «25 jun 2010» resaltada)
Esta inteligencia artificial no puede opinar sobre el mercado hasta el 25 de junio de 2010. No es una falla: es el precio de entrenarla sin hacer trampa. Hoy te explico cómo se hace.
BOCETO: línea de tiempo desde 2007 en gris; la fecha «25-jun-2010» se ilumina en verde. kb=in.

**[0:15 — Qué es este experimento]** (pantalla: rótulo con el número y el nombre)
Este es el experimento #23 de ATLAS Lab: Régimen supervisado con XGBoost, en walk-forward. Todos los resultados están en la página del experimento. Aquí me quedo con una sola pregunta: ¿cómo se prueba una IA que predice el mercado sin hacerle trampa al examen?
BOCETO: rótulo «EXPERIMENTO #23 · Régimen supervisado con XGBoost (walk-forward)» sobre fondo de velas con opacidad 0.12. kb=out.

**[0:34 — La trampa más común]** (pantalla: un examen con las respuestas a la vista)
Imagina un examen donde el alumno ya vio las respuestas. Saca 10, pero no sabes si aprendió algo. En trading pasa igual: si entrenas un modelo con datos que incluyen lo que ocurrió después del día que quieres predecir, el backtest sale precioso y no vale nada. Se llama mirar el futuro, y es la forma más fácil de que una prueba salga bonita sin demostrar nada.
BOCETO: examen con un sello «10/10» y, detrás, la hoja de respuestas; el sello se rompe. kb=in.

**[1:01 — Qué se le pide a la IA]** (pantalla: tabla de datos de ayer y una etiqueta)
El modelo es XGBoost: 200 árboles de decisión de profundidad 3. Para cada día recibe datos del día anterior: el VIX y su cambio frente a su media de 60 días, el crédito medido con HYG y LQD, la pendiente de la curva de tasas, el dólar, y la volatilidad y el momentum de la propia cesta. La pregunta, o etiqueta: ¿el retorno acumulado de los siguientes 10 días será menor a menos 1%? Si la probabilidad de periodo malo supera el umbral, el bot se queda fuera.
BOCETO: siete chips (datos de ayer) entran a un árbol; salida: medidor de probabilidad con el umbral marcado y la etiqueta «próximos 10 días < −1%».

**[1:40 — Walk-forward, paso a paso]** (pantalla: ventana que avanza)
Primero hay un calentamiento de 750 días: el modelo solo observa. Después se entrena con todo el pasado disponible, se usa durante 126 días, se vuelve a entrenar con lo nuevo y se repite. En ningún momento ve un día que todavía no ocurrió. Eso es el walk-forward: caminar hacia adelante sin mezclar nunca pasado y futuro.
BOCETO: bloque azul «750 días: calentamiento» y, a su derecha, ciclos de «entrena → usa 126 días» que se desplazan; contador de reentrenamientos. kb=out.

**[2:04 — El embargo de 10 días]** (pantalla: etiqueta que mira 10 días adelante)
Hay una trampa más sutil. La etiqueta de un día mira 10 días hacia adelante. Si el entrenamiento llega hasta ayer, algunas etiquetas ya contienen lo que pasará en los próximos días. Por eso se deja un embargo de 10 días: el entrenamiento se detiene 10 días antes del día que se va a predecir, para que ninguna etiqueta mire más allá de hoy. Y las variables son siempre las de t menos 1, el día anterior.
BOCETO: línea de días; la etiqueta de un día dibuja un arco de 10 días; el bloque de entrenamiento se corta 10 días antes con un hueco rojo «embargo 10». Checklist de `filters`: ✓ «ventana expansiva con embargo de 10 y variables de t−1».

**[2:37 — Lo que cuesta el método]** (pantalla: línea de tiempo 2007–2013)
Esa disciplina tiene un precio. Con 750 días de calentamiento, el modelo no tiene señal al principio. En la prueba de 2007 a 2013 la tiene recién el 25 de junio de 2010, y hasta entonces el bot queda invertido a ×3. La cuenta de ese periodo ya había muerto el 4 de septiembre de 2008, antes de que el modelo pudiera opinar. Así que ese periodo, simplemente, no lo pone a prueba.
BOCETO: eje 2007–2013: la X roja en 4-sep-2008 y la señal verde arrancando el 25-jun-2010, con el tramo intermedio en gris «sin señal». kb=in.

**[3:11 — Cuatro variantes, una publicada]** (pantalla: cuatro tarjetas)
Se probaron cuatro variantes: salir si la probabilidad supera 0.4, 0.5 o 0.6, y una versión graduada. Se publica la mejor por Sharpe en 2014–2024 entre las cuatro: salir si supera 0.5. El Sharpe es la ganancia por unidad de riesgo. Elegir la mejor de pocas con el mismo periodo con el que se la califica lleva un aviso en la ficha. Un dato curioso: la graduada, que sin señal se queda fuera del mercado, llegó a 0.33 en 2007–2013, pero ese periodo no prueba al modelo.
BOCETO: cuatro tarjetas (0.4 · 0.5 · 0.6 · graduada); la de 0.5 se resalta; la graduada muestra «0.33» en gris con el rótulo «no prueba al modelo».

**[3:50 — Qué salió al aplicarlo]** (pantalla: tarjetas de KPI)
En 2014 a 2024: menos 10.4%, Sharpe de menos 2.31, caída máxima de menos 11.1% y 81 días de vida; el filtro manual de comparación da 1.23, pero con el cierre del mismo día. Fuera de muestra, en 2007 a 2013, el Sharpe es de menos 0.59. El método impide hacer trampa; lo que no puede es darle tiempo al modelo: la cuenta se cerró el 6 de enero de 2015, el día 81.
BOCETO: tarjetas con tick (−10.4% · −2.31 · −11.1% · 81 días) y barra «manual 1.23» frente a la roja; la curva real de `series/…v23.json` se corta el 2015-01-06.

**[4:26 — Dos límites del método]** (pantalla: dos candados)
Dos límites. Uno: este motor no modela costos de transacción; el laboratorio aplica 3 puntos básicos por rotación. Otro: la vara de 1.23 usa el cierre del mismo día, y con las señales de ayer el filtro manual cae a menos 0.17. Para juzgar al modelo haría falta un periodo más largo después del calentamiento, costos y señal de ayer. Con estos datos, lo único honesto es decir que no se pudo medir.
BOCETO: candados «costos: no aplicado» y «señal de ayer»; la cifra «1.23 → −0.17»; sello gris «no concluyente».

**[4:58 — Con tu capital]** (pantalla: tarjeta de capital $10,000 / $100,000)
Con 10,000 dólares, la curva termina en menos 1,026 dólares; con 100,000, en menos 10,258. Comprando y esperando en esas fechas: menos 578 y menos 5,776. Con tu capital verías esa cuenta cerrada, no una inversión que sigue corriendo.
BOCETO: tarjeta «Con tu capital» del sitio con el selector; curva roja cortada en enero de 2015 y gris «Sin estrategia».

**[5:17 — Tres preguntas para cualquier IA de trading]** (pantalla: tres preguntas)
Si alguien te muestra una IA que predice el mercado, hazle tres preguntas. Una: ¿con qué datos se entrenó para predecir cada día? Dos: ¿hay un embargo entre el entrenamiento y la prueba? Tres: ¿cuántos días necesita para empezar a opinar? Si no hay respuesta, no hay forma de saber si el examen tenía las respuestas a la vista.
BOCETO: las tres preguntas aparecen una a una con tick; la tercera se resalta con «750 días».

**[5:41 — Ficha del experimento #23]** (pantalla: tarjeta con la URL)
Ficha del experimento #23, Régimen supervisado con XGBoost. Estado: no concluyente. Cifra clave: menos 10.4% y Sharpe de menos 2.31 en 81 días, idéntico a operar a ×3 sin filtro. Filtros: el walk-forward con embargo pasa; 2014–2024 y 2007–2013 no se pueden dar por superados, porque el modelo no llegó a actuar. Lección: los crashes son rarísimos y a un clasificador le faltan casos. Revísalo completo en atlas-lab-one.vercel.app/e/23. Contenido educativo, no es asesoría financiera. El trading no se promete: se prueba.
BOCETO: tarjeta final con cuatro líneas (estado · cifra clave · filtro que decidió · lección) y la URL «atlas-lab-one.vercel.app/e/23» en grande; logo ATLAS; fondo de velas con opacidad 0.12.

---

## SHORT (9:16, ≈ 48 s)

**[0-3 s]** «Esta IA no puede opinar hasta junio de 2010.»
BOCETO: calendario con «JUN 2010» gigante en verde; ticker arriba; golpe de bajo + sacudida.
**[3-11 s]** «Predice si los próximos 10 días caen más de 1%. Para no hacer trampa, empieza con 750 días de calentamiento.»
BOCETO: bloque azul de 750 días que se llena; etiqueta «próximos 10 días < −1%». kb=out.
**[11-19 s]** «Se reentrena cada 126 días, solo con el pasado, y deja un embargo de 10 días para que ninguna etiqueta mire el futuro.»
BOCETO: ventana que avanza con un hueco rojo «embargo 10» entre entrenamiento y prueba.
**[19-28 s]** «El precio: en 2007 a 2013 la señal llega en junio de 2010; la cuenta ya había muerto en septiembre de 2008.»
BOCETO: eje 2007–2013 con la X roja en 2008 y la señal verde en 2010.
**[28-36 s]** «En 2014 a 2024: menos 10.4%, Sharpe menos 2.31, 81 días. Idéntico a no usar filtro. No concluyente.»
BOCETO: curva real cayendo hasta el corte; tarjetas «−10.4%» y «−2.31»; sello gris «NO CONCLUYENTE».
**[36-44 s]** «Experimento 23 completo en el enlace. El video completo está en el canal. No es asesoría financiera. El trading no se promete: se prueba.»
BOCETO: tarjeta con «experimento #23 completo en el enlace» y la URL corta; logo ATLAS.
**[44-48 s]** «Una IA bien entrenada llega tarde. Esta, hasta junio de 2010.»
BOCETO: vuelve el calendario del inicio (loop).

---

## Descripción de YouTube (video largo)
https://atlas-lab-one.vercel.app/e/23?utm_source=youtube&utm_medium=video&utm_campaign=exp023-t2
Ficha del experimento #23 (Régimen supervisado con XGBoost, walk-forward): no concluyente · −10.4% y Sharpe −2.31 en 81 días · fuera de muestra (2007–2013): −0.59.
Cómo se entrena una IA con precios sin mirar el futuro: 750 días de calentamiento, reentrenamiento cada 126 días y embargo de 10 días, y lo que ese método cuesta.
Contenido educativo. No es asesoría financiera ni recomendación de inversión.

## Descripción del Short
https://atlas-lab-one.vercel.app/e/23?utm_source=youtube&utm_medium=short&utm_campaign=exp023-t2
Ficha del experimento #23: no concluyente · −10.4% y Sharpe −2.31 en 81 días. Video completo en el canal. Contenido educativo, no es asesoría financiera.

## Capítulos
0:00 Gancho · 0:15 Qué es este experimento · 0:34 La trampa más común · 1:01 Qué se le pide a la IA · 1:40 Walk-forward, paso a paso · 2:04 El embargo de 10 días · 2:37 Lo que cuesta el método · 3:11 Cuatro variantes, una publicada · 3:50 Qué salió al aplicarlo · 4:26 Dos límites del método · 4:58 Con tu capital · 5:17 Tres preguntas para cualquier IA de trading · 5:41 Ficha del experimento #23

## Etiquetas
walk-forward, embargo, XGBoost, machine learning, mirar el futuro, look-ahead bias, backtest, inteligencia artificial, bot de trading, crashes de mercado, trading con datos, atlas lab

## Rúbrica (autoevaluación, 1–5)
| Pieza | hook_0_3s | ritmo | promesa_cumplida | potencial_loop | claridad_no_traders | honestidad_atlas | audio | cta | Promedio |
|---|---|---|---|---|---|---|---|---|---|
| Largo | 4 | 4 | 5 | 4 | 4 | 5 | 4 | 4 | 4.25 |
| Short | 4 | 4 | 5 | 5 | 4 | 5 | 4 | 4 | 4.38 |

Hook ≥ 4 ✓ · honestidad 5 ✓. Punto débil: «embargo» y «etiqueta» necesitan el bloque de explicación; en el Short se resumen en una frase.

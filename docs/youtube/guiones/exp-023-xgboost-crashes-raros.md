# Experimento #23 — Régimen supervisado con XGBoost (walk-forward)

Estado del guion: **BORRADOR — pendiente de aprobación**
Estado del experimento: **no concluyente** (el sitio lo muestra como neutral: «No concluyente») · Serie D — Machine learning en trading: lo que pasó
Datos usados: `experiments.json` (v=23: kpis, metrics, params, params_view, verdict, analysis, notes, capital), `exp_details.json` (clave `…-v23`: algo, filters), `series/20260610_134700_regimen-supervisado-xgb-walk-forward-v23.json` (curva de la estrategia hasta el corte, curva hipotética «Sin reglas de prop firm» y «Sin estrategia»), tabla «Con tu capital» (archivo de capital en `docs/youtube/`). Relacionados: #22 (misma curva), #24, #27.

## Títulos
1. Para aprender qué es un crash, una IA tiene ~2 ejemplos por ventana
2. XGBoost contra las crisis: −10.4% y por qué no se pudo medir
3. Walk-forward con XGBoost: la IA no llegó a actuar (Sharpe −2.31)

## Miniatura
Fondo `#09090b`. Cientos de puntos verdes pequeños y, resaltados en rojo `#e11d2a`, solo dos puntos grandes; texto en Segoe UI Black «2 EJEMPLOS» (dos palabras, sin repetir los títulos). Logo ATLAS abajo a la derecha.

---

## VIDEO LARGO (16:9, ≈ 6:01 min)
Ritmo visual: algo cambia en pantalla cada 2-3 s; los pasos de cada boceto van en orden. Fórmula del canal: b-roll real detrás, Ken Burns alterno, subtítulos karaoke, whoosh + flash en cada corte.

**[0:00 — Gancho]** (pantalla: nube de puntos con dos rojos)
Los crashes son tan raros que, para aprender a reconocerlos, una inteligencia artificial tiene apenas unos 2 ejemplos por ventana de entrenamiento. Probé igualmente: un modelo XGBoost que intenta predecir periodos malos con datos macro. Resultado: menos 10.4% y un Sharpe, el retorno por unidad de riesgo, de menos 2.31, idéntico a no usar filtro, porque el modelo nunca llegó a reducir la exposición antes de que la cuenta tocara el límite de pérdida.
> Boceto: nube de puntos verdes (días normales) con dos puntos rojos que se agrandan; contadores «−10.4%» y «−2.31»; golpe de bass al aparecer el segundo punto rojo.

**[0:31 — Presentación]** (pantalla: rótulo «Experimento #23 · Régimen supervisado con XGBoost (walk-forward)»)
Este es el experimento #23 de ATLAS Lab: Régimen supervisado con XGBoost, en walk-forward. Todos los resultados están en la página del experimento.
> Boceto: el rótulo «EXPERIMENTO #23 · Régimen supervisado con XGBoost (walk-forward)» entra sobre velas animadas con opacidad 0.12.

**[0:41 — Dónde encaja en la serie]** (pantalla: mapa de la serie, #15 al #30)
Es el segundo intento con inteligencia artificial. El #22 usó un modelo sin supervisión, el HMM. Este usa uno supervisado, al que se le dan ejemplos con la respuesta. Después vendrán una segunda versión, el #24, y un uso distinto de la IA, el #25: decidir solo el tamaño de la apuesta.
> Boceto: la línea de la serie con los puntos #22 al #25 resaltados y el #23 en primer plano; etiquetas «sin supervisión», «supervisado», «v2», «tamaño».

**[1:03 — Qué es XGBoost y qué significa supervisado]** (pantalla: árboles de decisión)
XGBoost es un conjunto de árboles de decisión, 200 aquí, de profundidad 3. Supervisado significa que se le dan ejemplos con la respuesta: para cada día, los datos del día anterior y una etiqueta que dice si los siguientes 10 días fueron malos, es decir, si el retorno acumulado cayó más de 1%. El modelo aprende qué datos suelen preceder a un periodo malo.
> Boceto: un árbol de decisión simplificado que se ramifica; tabla de dos columnas «datos de ayer» y «etiqueta: ¿los próximos 10 días < −1%?» con filas verdes y unas pocas rojas.

**[1:31 — Qué datos recibe]** (pantalla: siete indicadores)
Recibe el VIX y su cambio frente a su media de 60 días, el crédito medido con HYG y LQD, la pendiente de la curva de tasas, el dólar, y la volatilidad y el momentum de la propia cesta. Todo del día anterior. Si la probabilidad de periodo malo supera un umbral, el bot se queda fuera del mercado.
> Boceto: siete chips que entran al árbol (VIX, VIX/media 60 d, crédito, curva de tasas, dólar, volatilidad, momentum); a la salida, un medidor de probabilidad con el umbral marcado.

**[1:56 — Cómo se probó: walk-forward]** (pantalla: ventana que avanza)
Con walk-forward: entrenar solo con el pasado, probar en el futuro inmediato y repetir. Los primeros 750 días son de calentamiento; después se reentrena cada 126 días, y se deja un embargo de 10 días entre el entrenamiento y la prueba para que las etiquetas no se contaminen con el futuro. Se probaron los umbrales de 0.4, 0.5 y 0.6 y una versión graduada, y se publica la mejor por Sharpe en 2014–2024 entre cuatro opciones: salir si la probabilidad supera 0.5. No se descuentan costos.
> Boceto: animación de ventana expansiva: bloque azul de entrenamiento, hueco de 10 días y bloque de prueba que se desplazan; checklist de `exp_details.json`: «sin mirar el futuro: pasa», «variante elegida por Sharpe 2014–24 entre 4: aviso», «costos: no aplicado».

**[2:32 — Resultados]** (pantalla: tarjetas de KPI)
En 2014 a 2024: retorno de menos 10.4%, Sharpe de menos 2.31, caída máxima de menos 11.1% y 81 días de vida. La vara a superar era el filtro manual, con un Sharpe de 1.23 usando el cierre del mismo día. En 2007 a 2013, fuera de muestra, es decir, con datos que no se usaron para diseñar el modelo, el Sharpe es de menos 0.59.
> Boceto: tarjetas con tick (−10.4% · −2.31 · −11.1% · 81 días); barra de la vara «manual 1.23» frente a la barra roja del modelo.

**[2:59 — El dato clave]** (pantalla: dos curvas idénticas)
Las cifras coinciden exactamente con operar a ×3 sin filtro, y se verificó volviendo a ejecutarlo. En 2014–2015 el modelo nunca apagó la exposición antes de la quiebra. Y en 2007–2013 la cuenta ya había muerto, el 4 de septiembre de 2008, antes de que el modelo tuviera señal, el 25 de junio de 2010. Hasta entonces queda invertido a ×3, así que ese periodo tampoco lo pone a prueba.
> Boceto: línea de tiempo 2007–2013 con la X roja en 4-sep-2008 y la señal del modelo arrancando el 25-jun-2010; dos curvas superpuestas «XGBoost» y «×3 sin filtro» que coinciden.

**[3:29 — Por qué es tan difícil]** (pantalla: pocos ejemplos)
Esta es la advertencia válida del experimento. Los crashes son rarísimos —unos 2 ejemplos por ventana— y cada crisis es distinta. Un clasificador necesita muchos casos parecidos para aprender un patrón; aquí tiene muy pocos y todos distintos. Que el modelo no actuara no demuestra que el régimen sea imposible de aprender.
> Boceto: rejilla de días con dos celdas rojas distintas (una forma cada una) y el texto «cada crisis es distinta»; sello «no demuestra imposibilidad».

**[3:51 — Qué haría falta para creerle]** (pantalla: tres candados)
Para juzgar a un modelo así haría falta un periodo más largo después del calentamiento, costos y la señal de ayer: la vara de 1.23 usa el cierre del mismo día, y con las señales de ayer cae a menos 0.17, como se mide en el #27. Con estos datos, lo único honesto es decir que el modelo no se pudo medir.
> Boceto: tres candados («periodo más largo», «costos», «señal de ayer») y la vara «1.23 → −0.17»; sello gris «no concluyente».

**[4:18 — Con tu capital]** (pantalla: tarjeta de capital $10,000 / $100,000)
Con 10,000 dólares, la curva termina en menos $1,026; con 100,000, en menos $10,258. Comprando y esperando en esas fechas: menos $578 y menos $5,776. Es la misma curva del experimento 22. Con tu capital verías esa cuenta cerrada, no una inversión que sigue corriendo; la línea hipotética «Sin reglas de prop firm», la empresa que cierra la cuenta si pierdes demasiado, muestra cómo habría seguido sin el corte.
> Boceto: tarjeta «Con tu capital» del sitio con el selector; curva roja cortada en enero de 2015 y curva punteada gris «hipotética».

**[4:47 — Lo que sí aporta este experimento]** (pantalla: pregunta mejor planteada)
Aun sin resultado, el experimento deja una pregunta mejor planteada. No es «¿funciona la IA?», sino «¿cuántos ejemplos tiene para aprender?». Si el fenómeno ocurre unas 2 veces por ventana y cada vez es distinto, el límite no está en el modelo: está en los datos.
> Boceto: dos preguntas en pantalla, la primera tachada («¿funciona la IA?») y la segunda resaltada («¿cuántos ejemplos tiene?»).

**[5:07 — Conclusión]** (pantalla: texto grande)
Veredicto: no concluyente. Menos 10.4% con Sharpe de menos 2.31, idéntico a la cartera sin filtro, porque el modelo no llegó a actuar. Lo que sí queda claro: los crashes son rarísimos y a un clasificador le faltan casos para entrenarse.
> Boceto: sello gris «NO CONCLUYENTE»; frase final «El trading no se promete: se prueba».

**[5:24 — Ficha del experimento #23]** (pantalla: tarjeta con la URL)
Ficha del experimento #23.
Estado: no concluyente.
Cifra clave: menos 10.4% y Sharpe de menos 2.31 en 81 días, idéntico a operar a ×3 sin filtro.
Filtro que decidió: el walk-forward con embargo pasa; 2014–2024 y 2007–2013 no se pueden dar por superados, porque el modelo no llegó a actuar.
Lección: los crashes son rarísimos y a un clasificador le faltan casos.
Revísalo completo en atlas-lab-one.vercel.app/e/23.
> Boceto: tarjeta final con cuatro líneas (estado · cifra clave · filtro que decidió · lección) y la URL «atlas-lab-one.vercel.app/e/23» en grande; sello «NO CONCLUYENTE»; fondo de velas con opacidad 0.12.

**[5:49 — Cierre]** (pantalla: logo y enlace)
En el siguiente video, la segunda versión del modelo supervisado: el experimento 24. Todos los datos en atlas-lab-one.vercel.app/e/23. Contenido educativo, no es asesoría financiera.
> Boceto: pantalla final con enlace y logo ATLAS; fondo de velas animadas con opacidad 0.12.

---

## SHORT (9:16, ≈ 44 s)
Fórmula visual: b-roll Pexels vertical + overlay oscuro 0.6, Ken Burns alternando in/out, subtítulos karaoke en MAYÚSCULAS con las cifras en rojo, whoosh + flash en cada corte, golpe de bass + sacudida solo en el 0-3 s y en el «idéntico»; ticker arriba, viñeta y velas con opacidad ≤ 0.12.

**[0-3 s]** "Una IA aprende crashes con unos 2 ejemplos."
> Boceto: nube de puntos verdes con dos rojos que se agrandan; texto gigante «2 EJEMPLOS».
**[3-8 s]** "Los crashes son tan raros que, en cada ventana de entrenamiento, hay unos 2 ejemplos."
> Boceto: ventana deslizante sobre una línea de tiempo; en cada posición, solo dos marcas rojas.
**[8-14 s]** "Probé XGBoost, una IA de árboles de decisión: predice si los próximos 10 días caen más de 1%."
> Boceto: árbol de decisión simple que se ramifica; etiqueta «10 días < −1%».
**[14-18 s]** "Se reentrena cada 126 días, usando solo datos del pasado."
> Boceto: bloque de entrenamiento que crece y un bloque de prueba que avanza.
**[18-21 s]** "Resultado: menos 10.4% y Sharpe menos 2.31 en 81 días."
> Boceto: la curva real cayendo hasta el corte; tarjetas «−10.4%» y «−2.31».
**[21-27 s]** "Idéntico a no usar filtro: el modelo no alcanzó a actuar antes de que la cuenta cayera."
> Boceto: dos curvas superpuestas que coinciden; rótulo «idénticas» con sacudida.
**[27-34 s]** "No prueba que una IA no pueda aprender el régimen, pero con tan pocos ejemplos tiene poco de dónde aprender."
> Boceto: balanza con dos platos casi vacíos; sello gris «NO CONCLUYENTE».
**[34-42 s]** "El video completo está en el canal. Experimento 23 completo en el enlace. No es asesoría financiera. El trading no se promete: se prueba."
> Boceto: frase de marca en blanco; tarjeta «experimento #23 completo en el enlace» y la URL corta; logo ATLAS.
**[42-44 s]** "Y para aprender qué es un crash:"
> Boceto: puntos rojos parpadeando; corte directo al inicio (loop).

## Descripción (YouTube)
https://atlas-lab-one.vercel.app/e/23?utm_source=youtube&utm_medium=video&utm_campaign=exp023-t1
Ficha del experimento #23 (Régimen supervisado con XGBoost, walk-forward): no concluyente · −10.4% y Sharpe −2.31 en 81 días · fuera de muestra (2007–2013): −0.59.
Probé XGBoost en walk-forward (reentrenamiento cada 126 días, embargo de 10) para predecir periodos malos (retorno a 10 días menor a −1%) con datos macro del día anterior. En 2014–2024: −10.4% y Sharpe −2.31, idéntico a la cartera ×3 sin filtro, porque el modelo no llegó a actuar.
Los crashes son rarísimos (~2 ejemplos por ventana). Veredicto: no concluyente.
Contenido educativo. No es asesoría financiera ni recomendación de inversión.

Capítulos: 0:00 Gancho · 0:31 Presentación · 0:41 Dónde encaja en la serie · 1:03 Qué es XGBoost y qué significa supervisado · 1:31 Qué datos recibe · 1:56 Cómo se probó: walk-forward · 2:32 Resultados · 2:59 El dato clave · 3:29 Por qué es tan difícil · 3:51 Qué haría falta para creerle · 4:18 Con tu capital · 4:47 Lo que sí aporta este experimento · 5:07 Conclusión · 5:24 Ficha del experimento #23 · 5:49 Cierre

Etiquetas: XGBoost, machine learning, walk-forward, crashes de mercado, inteligencia artificial, bot de trading, backtest, VIX, prop firm, trading con datos, ATLAS Lab, trading algorítmico

## Descripción del Short
https://atlas-lab-one.vercel.app/e/23?utm_source=youtube&utm_medium=short&utm_campaign=exp023-t1
Ficha del experimento #23: no concluyente · −10.4% y Sharpe −2.31 en 81 días. Video completo en el canal. Contenido educativo, no es asesoría financiera.

## Rúbrica (autoevaluación del Short)
hook_0_3s 4 · ritmo 4 · promesa_cumplida 5 · potencial_loop 4 · claridad_no_traders 4 · honestidad_atlas 5 · audio 4 · cta 4 → promedio 4.25 (aprobado: ≥ 4.0, hook ≥ 4, honestidad 5)
Notas: el gancho es un dato contraintuitivo (solo ~2 ejemplos) y el Short cumple explicando por qué; la honestidad es 5 porque dice «no concluyente» y que no se puede deducir que la IA no pueda aprender.

## Otros temas de este experimento
- Tema 1: `exp-023-xgboost-crashes-raros.md` — Régimen supervisado con XGBoost (walk-forward)
- Tema 2: `exp-023-t2-walk-forward-embargo.md` — walk-forward y embargo
- Tema 3: `exp-023-t3-dos-ias-mismo-resultado.md` — dos IAs, el mismo resultado

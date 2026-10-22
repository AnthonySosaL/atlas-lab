# Experimento #25 — Tamaño de posición con ML y protección manual

Estado del guion: **BORRADOR — pendiente de aprobación**
Estado del experimento: **murió** (veredicto del sitio: «No sirvió») · Serie D — Machine learning en trading: lo que pasó
Datos usados: `experiments.json` (v=25: kpis, metrics, params, params_view, verdict, analysis, notes, capital), `exp_details.json` (clave `…-v25`: algo, filters), `series/20260610_134940_ml-sizing-con-proteccion-manual-v25.json` (curva de la estrategia y curva «Sin estrategia»), tabla «Con tu capital» (archivo de capital en `docs/youtube/`). Relacionados: #16 (la vara del ×3 fijo) y #27 (la señal de ayer).

## Títulos
1. Una IA decidió el tamaño de cada operación: Sharpe 1.20 contra 1.23
2. ¿El machine learning mejora el tamaño de posición? 1.04 contra 1.06: no
3. +203.8% con IA… y no mejora al ×3 fijo sin IA

## Miniatura
Fondo `#09090b`. Dos barras verticales casi iguales: «IA 1.20» (azul) y «SIN IA 1.23» (verde `#22c55e`); encima, en rojo `#e11d2a` y Segoe UI Black, «IA NO AÑADE» (tres palabras, sin repetir los títulos). Logo ATLAS abajo a la derecha.

---

## VIDEO LARGO (16:9, ≈ 4:59 min)
Ritmo visual: algo cambia en pantalla cada 2-3 s; los pasos de cada boceto van en orden. Fórmula del canal: b-roll real detrás, Ken Burns alterno, subtítulos karaoke, whoosh + flash en cada corte.

**[0:00 — Gancho]** (pantalla: dos barras casi iguales)
Dejé que una inteligencia artificial decidiera cuánto apostar cada día, entre ×2 y ×4. Resultado: más 203.8% en diez años y un Sharpe de 1.20, el retorno por unidad de riesgo. Suena bien, hasta que lo comparas con no usar ninguna IA: un ×3 fijo, con el mismo filtro, da 1.23.
> Boceto: la curva real de la estrategia subiendo con el contador «+203.8%»; al final, dos barras «IA 1.20» y «sin IA 1.23» con la segunda apenas más alta; golpe de bass.

**[0:22 — Dónde encaja en la serie]** (pantalla: mapa de la serie, #15 al #30)
En el #22, el #23 y el #24 la inteligencia artificial intentaba decidir cuándo salir del mercado, y no lo logró. Aquí cambia el papel: la protección manual sigue mandando y la IA solo ajusta el tamaño de la apuesta los días tranquilos.
> Boceto: la línea de la serie con los #22–#24 en gris y el #25 iluminado; etiqueta «la IA ya no decide cuándo salir».

**[0:41 — Por qué el tamaño y no la dirección]** (pantalla: dos tareas)
Anticipar los periodos malos fue difícil, como mostraron los tres intentos anteriores. Decidir cuánto apostar es una tarea más modesta: no necesitas acertar siempre, solo estar algo más expuesto cuando los datos son favorables y algo menos cuando no lo son. Si la inteligencia artificial aporta algo, aquí debería notarse.
> Boceto: dos tarjetas, «predecir cuándo salir» (con tres X rojas de los #22, #23 y #24) y «decidir cuánto apostar» (con un signo de interrogación verde); la segunda crece al centro.

**[1:02 — La idea]** (pantalla: dial de apalancamiento)
El filtro manual manda: si marca riesgo, el bot sale. Los días tranquilos, un XGBoost estima la probabilidad de que los próximos 10 días suban más de 0.5%, y con eso ajusta el apalancamiento, es decir, cuántas veces el capital apuesta: 2 más 2 por esa probabilidad, es decir, entre ×2 y ×4. Cuando el modelo no tiene señal, opera a ×3.
> Boceto: dial de apalancamiento entre ×2 y ×4 que se mueve según un medidor de probabilidad; el semáforo del filtro manual lo apaga cuando se pone rojo.

**[1:28 — Un ejemplo de la fórmula]** (pantalla: tres casos del dial)
Veamos la fórmula con tres casos. Si el modelo ve poca probabilidad de un buen periodo, apalanca ×2. Si ve probabilidad de 0.5, apalanca ×3. Y si la probabilidad se acerca a 1, apalanca ×4. En ningún caso supera esos extremos, y cuando el filtro manual marca riesgo, el dial queda en cero.
> Boceto: tres diales sucesivos con la fórmula «2 + 2 × P» y los valores ×2, ×3 y ×4; el último dial se apaga cuando el semáforo del filtro se pone en rojo.

**[1:51 — Cómo se probó]** (pantalla: checklist de filtros)
Con walk-forward: reentrenamiento cada 126 días, embargo de 10 y datos del día anterior. Se compara contra el mismo filtro con ×3 fijo, en 2014 a 2024 y en 2007 a 2013, con las reglas de una prop firm, la empresa que presta la cuenta y la cierra si pierdes demasiado. No se descuentan costos, y el filtro manual usa el cierre del mismo día.
> Boceto: checklist de `exp_details.json`: «2014–2024 sobrevive: pasa», «2007–2013 sobrevive: pasa», «supera al ×3 fijo: FALLA», «sin mirar el futuro (modelo): pasa», «señal de ayer: FALLA», «costos: no aplicado».

**[2:19 — Resultados]** (pantalla: tabla comparativa)
Con IA: Sharpe de 1.20 en 2014–2024, más 203.8% y caída máxima de menos 11.5%; Sharpe de 1.04 en 2007–2013. Con ×3 fijo, sin IA: 1.23 y 1.06. Sobrevive en los dos periodos, algo que los tres intentos anteriores no lograron, pero no mejora a la versión sin IA: queda un poquito por debajo en los dos, y una diferencia tan pequeña no justifica la complejidad de un modelo que hay que reentrenar cada 126 días.
> Boceto: tabla de dos columnas («con IA» y «×3 fijo») y filas por periodo; las cifras de la IA entran en azul y las del ×3 fijo en verde, con una flecha mínima hacia abajo en cada fila.

**[2:51 — Por qué no aporta]** (pantalla: texto)
Los datos macro no tienen más señal de retorno que el simple encendido y apagado del filtro. Dicho de otro modo: el filtro simple ya aprovecha lo que había. Usar machine learning para el tamaño de la posición no agrega nada.
> Boceto: dos filtros de agua en cadena: el primero (filtro manual) deja pasar un chorro limpio; el segundo (IA) solo mueve gotas; texto «nada que extraer».

**[3:08 — Lo que sostiene todo el resultado]** (pantalla: pilares)
Hasta el 25 de junio de 2010 el modelo no tiene señal, y opera igual que el ×3 fijo. Y todo descansa sobre un filtro que, decidido con datos de ayer, deja de funcionar: con las señales de ayer, la cartera base da un Sharpe de menos 0.17, como se mide en el experimento 27.
> Boceto: tres pilares «modelo», «filtro manual», «cierre del mismo día»; el pilar de abajo se agrieta y el cartel «−0.17» cae sobre los demás.

**[3:32 — Con tu capital]** (pantalla: tarjeta de capital $10,000 / $100,000)
Con 10,000 dólares, la curva termina en más $20,384; con 100,000, en más $203,840. Comprando y esperando, serían más $5,904 y más $59,039. Pero la curva usa el filtro con el cierre del mismo día y apalancamiento de ×2 a ×4: en real no se puede replicar.
> Boceto: tarjeta «Con tu capital» del sitio con el selector; curva verde frente a la gris «Sin estrategia»; aviso ámbar «información del mismo día».

**[3:52 — Qué haría falta para creerle]** (pantalla: tres candados)
Para creerle a un ajuste de tamaño con IA haría falta que superara claramente al ×3 fijo, con la señal de ayer y con costos. Aquí ni siquiera supera al ×3 fijo, así que la discusión se acaba antes.
> Boceto: tres candados; el primero («superar al ×3 fijo») se pone en rojo y los otros dos quedan atenuados.

**[4:09 — Lo que sí aporta este experimento]** (pantalla: texto)
Lo que deja el experimento es una respuesta ordenada a una duda frecuente: ¿puede la IA ajustar el tamaño aunque no acierte la dirección? Aquí no pudo. Y es una respuesta útil, porque evita añadir un modelo que hay que mantener y reentrenar sin beneficio demostrado.
> Boceto: dos cajas, «modelo extra que mantener» y «beneficio demostrado»; la segunda queda vacía.

**[4:29 — Conclusión]** (pantalla: texto grande)
Veredicto: no sirvió. El Sharpe de 1.20 depende del filtro macro que usa información del mismo día, y ni así mejora al ×3 fijo: 1.23 y 1.06, contra 1.20 y 1.04.
> Boceto: sello rojo «NO SIRVIÓ»; frase final «El trading no se promete: se prueba».

**[4:43 — Cierre]** (pantalla: logo y enlace)
En el siguiente video, la regla de re-entrada con el Sharpe más alto de los experimentos 16 al 30: el experimento 26. Todos los datos en atlas-lab-one.vercel.app, experimento 25. Contenido educativo, no es asesoría financiera.
> Boceto: pantalla final con enlace y logo ATLAS; fondo de velas animadas con opacidad 0.12.

---

## SHORT (9:16, ≈ 43 s)
Fórmula visual: b-roll Pexels vertical + overlay oscuro 0.6, Ken Burns alternando in/out, subtítulos karaoke en MAYÚSCULAS con las cifras en rojo, whoosh + flash en cada corte, golpe de bass + sacudida solo en el 0-3 s y en el 1.20 contra 1.23; ticker arriba, viñeta y velas con opacidad ≤ 0.12.

**[0-2 s]** "IA contra no-IA: Sharpe 1.20 contra 1.23."
> Boceto: dos barras casi iguales; la de la IA, un poco más baja, con sacudida; texto gigante «1.20 vs 1.23».
**[2-7 s]** "Dejé que una IA decidiera cuánto apostar cada día, entre ×2 y ×4."
> Boceto: dial de apalancamiento moviéndose entre ×2 y ×4 según un medidor de probabilidad.
**[7-11 s]** "La protección manual seguía mandando: cuando hay pánico, el bot se sale."
> Boceto: semáforo del filtro que se pone en rojo y apaga el dial.
**[11-16 s]** "Resultado de 2014 a 2024: más 203.8%, Sharpe 1.20, caída máxima de 11.5%."
> Boceto: la curva real subiendo; tarjetas con tick (+203.8% · 1.20 · −11.5%).
**[16-20 s]** "Parece bueno, hasta que lo comparas con el ×3 fijo, sin IA: Sharpe 1.23."
> Boceto: aparece la barra del ×3 fijo, un poco más alta, en verde.
**[20-25 s]** "En 2007 a 2013 pasa lo mismo: 1.04 con IA, 1.06 sin ella."
> Boceto: segunda pareja de barras con el mismo patrón; flecha mínima hacia abajo.
**[25-30 s]** "Los datos macro no tienen más señal que el encendido y apagado del filtro."
> Boceto: dos filtros de agua en cadena; el segundo solo mueve gotas.
**[30-38 s]** "Y todo descansa en un filtro que usa el cierre del mismo día. El video completo está en el canal. No es asesoría financiera."
> Boceto: reloj con el cierre de hoy; logo ATLAS.
**[38-43 s]** "El trading no se promete: se prueba. Y cuando una IA prometa mejorar tu resultado:"
> Boceto: frase de marca; chip de IA con interrogación; corte directo al inicio (loop).

## Descripción (YouTube)
Un XGBoost en walk-forward ajusta el apalancamiento entre ×2 y ×4 los días tranquilos, con la protección del filtro manual intacta.
Resultado: +203.8% y Sharpe 1.20 en 2014–2024 (1.04 en 2007–2013) frente a 1.23 y 1.06 del ×3 fijo sin IA: no aporta.
Además, el filtro manual decide con el cierre del mismo día.
Todos los datos: https://atlas-lab-one.vercel.app (experimento #25)
Contenido educativo. No es asesoría financiera ni recomendación de inversión.

Capítulos: 0:00 Gancho · 0:22 Dónde encaja en la serie · 0:41 Por qué el tamaño y no la dirección · 1:02 La idea · 1:28 Un ejemplo de la fórmula · 1:51 Cómo se probó · 2:19 Resultados · 2:51 Por qué no aporta · 3:08 Lo que sostiene todo el resultado · 3:32 Con tu capital · 3:52 Qué haría falta para creerle · 4:09 Lo que sí aporta este experimento · 4:29 Conclusión · 4:43 Cierre

Etiquetas: machine learning, tamaño de posición, XGBoost, apalancamiento, inteligencia artificial, bot de trading, backtest, Sharpe ratio, walk-forward, trading con datos, ATLAS Lab, trading algorítmico

## Rúbrica (autoevaluación del Short)
hook_0_3s 4 · ritmo 4 · promesa_cumplida 5 · potencial_loop 4 · claridad_no_traders 4 · honestidad_atlas 5 · audio 4 · cta 4 → promedio 4.25 (aprobado: ≥ 4.0, hook ≥ 4, honestidad 5)
Notas: el gancho es una comparación con dos números casi iguales (la sorpresa es que la IA no gane); la honestidad es 5 porque se dice que supera al mercado en el papel pero no al ×3 fijo, y que el filtro usa el cierre del mismo día.

## Otros temas de este experimento
- Tema 1: `exp-025-ia-tamano-posicion.md` — Tamaño de posición con ML y protección manual
- Tema 2: `exp-025-t2-ia-contra-x3-fijo.md` — la IA contra el ×3 fijo
- Tema 3: `exp-025-t3-pasa-tres-filtros.md` — pasa 3 filtros de 6 y no sirve

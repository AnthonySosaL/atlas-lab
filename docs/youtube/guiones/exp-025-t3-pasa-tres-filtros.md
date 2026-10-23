# Experimento #25 — Tamaño de posición con ML y protección manual · Tema 3: pasa 3 filtros de 6 y no sirve

Tema 3 de 3 del experimento #025 · Qué aporta frente a los otros temas: es una lectura filtro por filtro de la ficha del experimento (qué pasa, qué falla y qué no se aplicó) y explica por qué no todos los filtros pesan igual. Sirve también como guía para leer cualquier ficha de ATLAS Lab. Se entiende sin haber visto los otros temas.
Estado del guion: **BORRADOR — pendiente de aprobación**
Estado del experimento: **murió** (veredicto del sitio: «No sirvió») · Serie D — Machine learning en trading: lo que pasó
Datos usados: `experiments.json` (v=25: metrics, kpis, verdict, notes, capital), `exp_details.json` (clave `…-v25`: filters con sus seis entradas), tabla «Con tu capital» (archivo de capital en `docs/youtube/`).
Producción (CLAUDE.md del canal): b-roll real detrás de cada escena con overlay oscuro 0.6, Ken Burns alternando in/out, subtítulos karaoke en MAYÚSCULAS con cifras en rojo, un dato visual por escena, golpe de bajo + sacudida solo en 1–2 momentos. Colores: rojo `#e11d2a`, verde `#22c55e`, fondo `#09090b`.

## Títulos (3 opciones)
1. Pasó 3 filtros de 6 y aun así murió: cómo leer una ficha de ATLAS Lab
2. Sobrevive en dos periodos y no sirve: el experimento #25, filtro por filtro
3. Los 6 filtros de la ficha: qué pasa, qué falla y qué no se aplicó

## Miniatura (pensada para el título 1)
Fondo `#09090b`. Seis casillas en fila: tres con check verde `#22c55e`, dos con X roja `#e11d2a` y una gris vacía. Texto en Segoe UI Black: «3 DE 6» y, debajo, «NO SIRVIÓ» en rojo (sin repetir los títulos). Logo ATLAS arriba a la derecha.

---

## VIDEO LARGO (16:9, ≈ 4:14 min)

**[0:00 — Gancho]** (pantalla: seis casillas de filtros)
Este experimento sobrevive en los dos periodos y tiene un Sharpe de 1.20. Pasa tres filtros de seis. Y aun así, su veredicto es: no sirvió. Hoy te explico por qué.
BOCETO: seis casillas que se rellenan: tres checks verdes, dos X rojas y una gris; sello rojo «NO SIRVIÓ» al final. Golpe de bajo en el sello.

**[0:14 — Qué es este experimento]** (pantalla: rótulo con el número y el nombre)
Este es el experimento #25 de ATLAS Lab: Tamaño de posición con ML y protección manual. Todos los resultados están en la página del experimento. Es una inteligencia artificial que ajusta cuánto apostar, entre ×2 y ×4, con el filtro manual intacto.
BOCETO: rótulo «EXPERIMENTO #25 · Tamaño de posición con ML y protección manual» sobre velas con opacidad 0.12. kb=out.

**[0:32 — La ficha de filtros]** (pantalla: ficha del sitio)
Cada experimento del sitio trae una lista de filtros. Cada uno puede estar en tres estados: pasa, falla o no se aplicó. El veredicto no sale de contar cuántos pasan: sale de cuáles son. Vamos con los seis de este experimento, uno por uno.
BOCETO: la lista de filtros del sitio con tres tipos de marca (✓ verde, ✗ rojo, — gris) y la leyenda; las seis filas vacías. kb=in.

**[0:50 — Filtros 1 y 2: sobrevivir]** (pantalla: dos periodos)
Primero, 2014 a 2024: Sharpe de 1.20, retorno de más 204% y caída máxima de menos 11.5%, y sobrevive a las reglas de la prop firm, la empresa que presta la cuenta y la cierra si pierdes demasiado. Pasa. Segundo, fuera de muestra, 2007 a 2013, años que el modelo no vio al diseñarse: Sharpe de 1.04, por encima del 0.30 que pide el laboratorio, y sobrevive. Pasa.
BOCETO: dos filas del checklist se marcan en verde con sus cifras (1.20 · +204% · −11.5% / 1.04 > 0.30); la línea de referencia 0.30.

**[1:23 — Filtro 3: ¿mejora al control?]** (pantalla: IA contra ×3 fijo)
Tercero: ¿supera al ×3 fijo, el mismo filtro sin IA? Los números dicen que no: 1.20 y 1.04, contra 1.23 y 1.06. Falla. Es el filtro más importante para esta pregunta, porque lo que se quería saber es si la IA aporta algo.
BOCETO: dos parejas de barras; la verde (×3 fijo) siempre un poco más alta; la fila del checklist se marca en rojo.

**[1:43 — Filtro 4: sin mirar el futuro]** (pantalla: ventana que avanza)
Cuarto: ¿el modelo mira el futuro? Se entrena con ventana expansiva, es decir, siempre con el pasado, con un embargo de 10 días y variables del día anterior. Pasa. Un detalle: hasta el 25 de junio de 2010 el modelo no tiene señal y opera igual que el ×3 fijo.
BOCETO: ventana expansiva con hueco «embargo 10»; fila verde; cinta gris sobre el tramo previo a 2010-06-25.

**[2:06 — Filtro 5: la señal de ayer]** (pantalla: reloj)
Quinto: ¿puede un bot real ejecutarlo? El filtro manual decide con el cierre del mismo día, información que un bot real aún no tendría. Con la señal de ayer, la cartera base da un Sharpe de menos 0.17, como se mide en el experimento 27. Falla.
BOCETO: reloj con «cierre de hoy» y flecha roja tachada; fila roja; cartel «−0.17».

**[2:26 — Filtro 6: los costos]** (pantalla: casilla gris)
Sexto: los costos. Este motor no los modela. El laboratorio aplica 3 puntos básicos por rotación. No se aplicó: no pasa ni falla, queda en blanco. Con costos, el resultado no mejoraría.
BOCETO: fila gris «costos: no aplicado» con el rótulo «el laboratorio aplica 3 pb por rotación».

**[2:40 — Cómo se decide el veredicto]** (pantalla: balanza con pesos)
Conclusión del recuento: tres pasan, dos fallan, uno no se aplicó. Pero no pesan igual. Los dos que fallan son los que importan: no mejora al control y no se puede ejecutar con la señal de ayer. Que sobreviva en los dos periodos es necesario, no suficiente. Por eso el veredicto es: no sirvió.
BOCETO: balanza: en un plato, tres checks pequeños; en el otro, dos X grandes; la balanza se inclina hacia las X.

**[3:02 — Con tu capital]** (pantalla: tarjeta de capital $10,000 / $100,000)
Con 10,000 dólares, la simulación termina en más 20,384; con 100,000, en más 203,840. Comprando y esperando serían más 5,904 y más 59,039. Es una curva bonita que no se puede replicar: usa el cierre del mismo día y apalancamiento de ×2 a ×4.
BOCETO: tarjeta «Con tu capital» del sitio con el selector; curva verde frente a la gris; aviso ámbar «información del mismo día».

**[3:24 — Qué haría falta para creerle]** (pantalla: tres candados)
Para creerle a este modelo haría falta que supere claramente al ×3 fijo, con la señal de ayer y con costos. El primer candado ya está cerrado, así que los otros dos no llegan a evaluarse.
BOCETO: tres candados; el primero en rojo; los otros dos atenuados.

**[3:40 — Ficha del experimento #25]** (pantalla: tarjeta con la URL)
Ficha del experimento #25, Tamaño de posición con ML y protección manual. Estado: murió. Cifra clave: Sharpe de 1.20 contra 1.23 del ×3 fijo; pasa 3 filtros, falla 2 y 1 no se aplicó. Filtros que decidieron: no supera al ×3 fijo y usa el cierre del mismo día. Lección: sobrevivir no es lo mismo que servir. Revísalo completo en atlas-lab-one.vercel.app/e/25. Contenido educativo, no es asesoría financiera. El trading no se promete: se prueba.
BOCETO: tarjeta final con cuatro líneas (estado · cifra clave · filtro que decidió · lección) y la URL «atlas-lab-one.vercel.app/e/25» en grande; logo ATLAS; fondo de velas con opacidad 0.12.

---

## SHORT (9:16, ≈ 46 s)

**[0-3 s]** «Pasó 3 filtros de 6. Murió igual.»
BOCETO: seis casillas: tres verdes, dos rojas, una gris; sello «NO SIRVIÓ»; golpe de bajo + sacudida.
**[3-10 s]** «Una IA ajusta cuánto apostar. Sobrevive en los dos periodos, con Sharpe 1.20 y 1.04.»
BOCETO: dos filas verdes con sus cifras. kb=out.
**[10-17 s]** «Pero un ×3 fijo, sin IA, da 1.23 y 1.06. No mejora al control. Ese filtro falla.»
BOCETO: dos parejas de barras; la fila del checklist se pone roja.
**[17-25 s]** «Y el filtro manual usa el cierre del mismo día. Con la señal de ayer, la base da menos 0.17.»
BOCETO: reloj con el cierre de hoy y cartel «−0.17»; segunda fila roja.
**[25-34 s]** «Los costos no se aplicaron. Tres pasan, dos fallan, uno queda en blanco. Y no pesan igual.»
BOCETO: casilla gris «costos» y balanza que se inclina hacia las dos X.
**[34-42 s]** «Experimento 25 completo en el enlace. El video completo está en el canal. No es asesoría financiera. El trading no se promete: se prueba.»
BOCETO: tarjeta con «experimento #25 completo en el enlace» y la URL corta; logo ATLAS.
**[42-46 s]** «Sobrevivir no es lo mismo que servir.»
BOCETO: sello «NO SIRVIÓ» sobre las seis casillas; corte directo al inicio (loop).

---

## Descripción de YouTube (video largo)
https://atlas-lab-one.vercel.app/e/25?utm_source=youtube&utm_medium=video&utm_campaign=exp025-t3
Ficha del experimento #25 (Tamaño de posición con ML y protección manual): murió (No sirvió) · pasa 3 filtros de 6 (sobrevive en 2014–2024 y 2007–2013, walk-forward), falla 2 (no supera al ×3 fijo; usa el cierre del mismo día) y 1 no se aplicó (costos) · Sharpe 1.20 contra 1.23.
Cómo leer una ficha de filtros y por qué no todos pesan igual.
Contenido educativo. No es asesoría financiera ni recomendación de inversión.

## Descripción del Short
https://atlas-lab-one.vercel.app/e/25?utm_source=youtube&utm_medium=short&utm_campaign=exp025-t3
Ficha del experimento #25: murió · pasa 3 filtros de 6 y no sirvió. Video completo en el canal. Contenido educativo, no es asesoría financiera.

## Capítulos
0:00 Gancho · 0:14 Qué es este experimento · 0:32 La ficha de filtros · 0:50 Filtros 1 y 2: sobrevivir · 1:23 Filtro 3: ¿mejora al control? · 1:43 Filtro 4: sin mirar el futuro · 2:06 Filtro 5: la señal de ayer · 2:26 Filtro 6: los costos · 2:40 Cómo se decide el veredicto · 3:02 Con tu capital · 3:24 Qué haría falta para creerle · 3:40 Ficha del experimento #25

## Etiquetas
filtros de validación, backtest, fuera de muestra, walk-forward, machine learning, tamaño de posición, XGBoost, prop firm, Sharpe ratio, bot de trading, trading con datos, atlas lab

## Rúbrica (autoevaluación, 1–5)
| Pieza | hook_0_3s | ritmo | promesa_cumplida | potencial_loop | claridad_no_traders | honestidad_atlas | audio | cta | Promedio |
|---|---|---|---|---|---|---|---|---|---|
| Largo | 5 | 4 | 5 | 4 | 4 | 5 | 4 | 4 | 4.38 |
| Short | 5 | 4 | 5 | 5 | 4 | 5 | 4 | 4 | 4.50 |

Hook ≥ 4 ✓ · honestidad 5 ✓. Punto débil: el recuento «3 pasan, 2 fallan, 1 no se aplicó» sale de las seis entradas de `filters`; el video lo dice sin sugerir que el veredicto sea un conteo.

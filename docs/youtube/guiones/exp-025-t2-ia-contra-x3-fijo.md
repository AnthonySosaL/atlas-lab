# Experimento #25 — Tamaño de posición con ML y protección manual · Tema 2: la IA contra el ×3 fijo

Tema 2 de 3 del experimento #025 · Qué aporta frente a los otros temas: pone la IA frente a su control más simple, un ×3 fijo, con retorno, caída máxima y Sharpe lado a lado (el tema 1 se centra en la idea del tamaño y en el Sharpe 1.20 contra 1.23). Se entiende sin haber visto los otros temas.
Estado del guion: **BORRADOR — pendiente de aprobación**
Estado del experimento: **murió** (veredicto del sitio: «No sirvió») · Serie D — Machine learning en trading: lo que pasó
Datos usados: `experiments.json` (v=25: metrics, kpis, params_view, verdict, notes, capital; v=16 para el ×3 fijo: metrics, kpis), `exp_details.json` (clave `…-v25`: algo, filters), `series/20260610_134940_ml-sizing-con-proteccion-manual-v25.json` (curva de la estrategia y «Sin estrategia»), tabla «Con tu capital» (archivo de capital en `docs/youtube/`).
Producción (CLAUDE.md del canal): b-roll real detrás de cada escena con overlay oscuro 0.6, Ken Burns alternando in/out, subtítulos karaoke en MAYÚSCULAS con cifras en rojo, un dato visual por escena, golpe de bajo + sacudida solo en 1–2 momentos. Colores: rojo `#e11d2a`, verde `#22c55e`, fondo `#09090b`.

## Títulos (3 opciones)
1. IA: +203.8%. Sin IA: +267.3%. El machine learning y el tamaño de posición
2. Una IA decidió el apalancamiento y rindió menos que un ×3 fijo
3. Sharpe 1.20 contra 1.23: qué pasa cuando una IA no le gana al control

## Miniatura (pensada para el título 1)
Fondo `#09090b`. Dos barras de retorno: una azul corta «IA» y una verde `#22c55e` más alta «×3 FIJO»; encima, en rojo `#e11d2a` y Segoe UI Black, «GANA MENOS» (dos palabras, sin repetir los títulos). Logo ATLAS abajo a la derecha.

---

## VIDEO LARGO (16:9, ≈ 4:50 min)

**[0:00 — Gancho]** (pantalla: dos barras de retorno)
Una inteligencia artificial decidió cuánto apostar cada día, entre ×2 y ×4. Su simulación da más 203.8%. Un ×3 fijo, sin IA, con el mismo filtro, da más 267.3%.
BOCETO: barra azul «IA +203.8%» que sube y, un poco más alta, barra verde «×3 fijo +267.3%»; golpe de bajo al aparecer la verde.

**[0:15 — Qué es este experimento]** (pantalla: rótulo con el número y el nombre)
Este es el experimento #25 de ATLAS Lab: Tamaño de posición con ML y protección manual. Todos los resultados están en la página del experimento. Aquí lo miro con una sola vara: ¿le gana la IA al control más simple?
BOCETO: rótulo «EXPERIMENTO #25 · Tamaño de posición con ML y protección manual» sobre velas con opacidad 0.12. kb=out.

**[0:32 — La idea]** (pantalla: dial de apalancamiento)
La protección manual manda: si el filtro marca riesgo, el bot sale del mercado. Los días tranquilos, un modelo XGBoost, árboles de decisión reentrenados cada 126 días, estima la probabilidad de que los próximos 10 días suban más de 0.5%. Con eso fija el apalancamiento, es decir, cuántas veces el capital apuesta: 2 más 2 por esa probabilidad, entre ×2 y ×4. Sin señal, ×3.
BOCETO: dial entre ×2 y ×4 que se mueve según un medidor de probabilidad; semáforo del filtro que lo apaga. kb=in.

**[1:03 — El control: un ×3 fijo]** (pantalla: dos estrategias lado a lado)
Para saber si la IA aporta, hay que compararla con lo más simple: el mismo filtro, pero con ×3 fijo, sin IA. Ese control es el del experimento 16: Sharpe de 1.23, retorno de más 267.3% y caída máxima de menos 12.5%. El Sharpe es la ganancia por unidad de riesgo; la caída máxima, el peor tramo de pico a valle.
BOCETO: dos tarjetas «IA ×2–×4» y «×3 FIJO»; la segunda se llena con las cifras del experimento 16.

**[1:30 — Cara a cara]** (pantalla: tabla comparativa)
Ahora, cara a cara, 2014 a 2024. La IA: más 203.8%, Sharpe de 1.20, caída máxima de menos 11.5%. El ×3 fijo: más 267.3%, Sharpe de 1.23, caída máxima de menos 12.5%. Fuera de muestra, 2007 a 2013, es decir, años que el modelo no vio: 1.04 con IA, 1.06 sin ella. La IA rinde menos, cae un poco menos y tiene un Sharpe un pelo más bajo.
| | Retorno 2014–24 | Sharpe 2014–24 | Caída máx. | Sharpe 2007–13 |
|---|---|---|---|---|
| IA (×2 a ×4) | +203.8% | 1.20 | −11.5% | 1.04 |
| ×3 fijo | +267.3% | 1.23 | −12.5% | 1.06 |
BOCETO: tabla animada fila por fila; las cifras de la IA en azul y las del ×3 fijo en verde; una flecha mínima hacia abajo en cada columna de Sharpe.

**[2:05 — Una diferencia que no compra nada]** (pantalla: dos puntos casi iguales)
Una diferencia de Sharpe de 1.20 contra 1.23 parece nada. Y justamente ese es el punto. Para justificar un modelo hay que ver una mejora clara; aquí ni siquiera hay mejora. Y el costo es real: hay que reentrenar cada 126 días, con embargo de 10, mantener 200 árboles y vigilar que siga funcionando. El control es un número fijo.
BOCETO: balanza: un plato con «XGBoost, walk-forward, reentrenar cada 126 días» y otro con «×3 fijo»; el primero pesa más y no rinde más.

**[2:32 — Sobrevivir no es aportar]** (pantalla: dos preguntas)
Hay un matiz importante. Este experimento sobrevive a las reglas de la prop firm, la empresa que presta la cuenta y la cierra si pierdes demasiado, en los dos periodos. Eso no lo logró ninguno de los tres intentos anteriores con IA. Pero sobrevivir no es lo mismo que aportar: el control, sin IA y con el mismo filtro manual, tiene un Sharpe de 1.23 y de 1.06. Lo que sostiene la cuenta es el filtro, no el modelo.
BOCETO: dos preguntas: «¿sobrevive?» con check verde y «¿mejora al control?» con X roja.

**[3:05 — Lo que sostiene el resultado]** (pantalla: reloj y cierre de hoy)
Hay otro punto débil. El filtro manual decide con el cierre del mismo día, información que un bot real aún no tendría. Con la señal de ayer, la cartera base da un Sharpe de menos 0.17, como se mide en el experimento 27. Hasta el 25 de junio de 2010, el modelo ni siquiera tiene señal y opera igual que el ×3 fijo.
BOCETO: pilares «modelo» y «filtro manual» sobre «cierre del mismo día»; el pilar de abajo se agrieta; cartel «−0.17».

**[3:33 — Con tu capital]** (pantalla: tarjeta de capital $10,000 / $100,000)
Con 10,000 dólares, la simulación termina en más 20,384; con 100,000, en más 203,840. Comprando y esperando serían más 5,904 y más 59,039. Pero esta curva usa el filtro con el cierre del mismo día y apalancamiento de ×2 a ×4: en la práctica no se puede replicar.
BOCETO: tarjeta «Con tu capital» del sitio con el selector; curva verde frente a la gris «Sin estrategia»; aviso ámbar «información del mismo día».

**[3:57 — La regla para cualquier IA]** (pantalla: pregunta en grande)
Si una IA dice que mejora tu estrategia, pide un control: la misma estrategia sin IA. Si la IA no le gana con claridad, lo único que añade es complejidad. Aquí el control gana en retorno y casi empata en Sharpe.
BOCETO: «¿contra qué la comparaste?» con el control resaltado.

**[4:14 — Ficha del experimento #25]** (pantalla: tarjeta con la URL)
Ficha del experimento #25, Tamaño de posición con ML y protección manual. Estado: murió. Cifra clave: Sharpe de 1.20 con IA contra 1.23 con ×3 fijo, y más 203.8% contra más 267.3%. Filtros: sobrevive en los dos periodos, pero no supera al ×3 fijo y usa el cierre del mismo día. Lección: una IA tiene que ganarle al control más simple. Revísalo completo en atlas-lab-one.vercel.app/e/25. Contenido educativo, no es asesoría financiera. El trading no se promete: se prueba.
BOCETO: tarjeta final con cuatro líneas (estado · cifra clave · filtro que decidió · lección) y la URL «atlas-lab-one.vercel.app/e/25» en grande; logo ATLAS; fondo de velas con opacidad 0.12.

---

## SHORT (9:16, ≈ 47 s)

**[0-3 s]** «IA: más 203.8%. Sin IA: más 267.3%.»
BOCETO: dos barras, la azul «IA» y la verde «SIN IA» más alta; golpe de bajo + sacudida.
**[3-10 s]** «Una IA decidía cuánto apostar, entre ×2 y ×4. El control: un ×3 fijo.»
BOCETO: dial entre ×2 y ×4 y, al lado, un dial fijo en ×3. kb=out.
**[10-18 s]** «Sharpe de 2014 a 2024: 1.20 con IA, 1.23 sin ella. Fuera de muestra: 1.04 contra 1.06.»
BOCETO: dos parejas de barras; la verde siempre un poco más alta.
**[18-26 s]** «La IA rinde menos, y hay que reentrenarla cada 126 días. El control es un número fijo.»
BOCETO: balanza con «reentrenar cada 126 días» frente a «×3 fijo».
**[26-35 s]** «Sobrevive en los dos periodos, pero eso lo hace el filtro manual, y ese filtro usa el cierre del mismo día.»
BOCETO: dos preguntas «¿sobrevive?» ✓ y «¿mejora al control?» ✗; reloj con el cierre de hoy.
**[35-43 s]** «Experimento 25 completo en el enlace. El video completo está en el canal. No es asesoría financiera. El trading no se promete: se prueba.»
BOCETO: tarjeta con «experimento #25 completo en el enlace» y la URL corta; logo ATLAS.
**[43-47 s]** «Una IA que no le gana al control, ¿qué aporta?»
BOCETO: las dos barras del inicio con interrogación; corte directo al inicio (loop).

---

## Descripción de YouTube (video largo)
https://atlas-lab-one.vercel.app/e/25?utm_source=youtube&utm_medium=video&utm_campaign=exp025-t2
Ficha del experimento #25 (Tamaño de posición con ML y protección manual): murió (No sirvió) · IA +203.8% y Sharpe 1.20 contra ×3 fijo +267.3% y Sharpe 1.23 · fuera de muestra (2007–2013): 1.04 contra 1.06.
Una IA decide el apalancamiento entre ×2 y ×4 y la comparo con su control: el mismo filtro con ×3 fijo. El filtro manual usa el cierre del mismo día.
Contenido educativo. No es asesoría financiera ni recomendación de inversión.

## Descripción del Short
https://atlas-lab-one.vercel.app/e/25?utm_source=youtube&utm_medium=short&utm_campaign=exp025-t2
Ficha del experimento #25: murió · IA +203.8% contra ×3 fijo +267.3%. Video completo en el canal. Contenido educativo, no es asesoría financiera.

## Capítulos
0:00 Gancho · 0:15 Qué es este experimento · 0:32 La idea · 1:03 El control: un ×3 fijo · 1:30 Cara a cara · 2:05 Una diferencia que no compra nada · 2:32 Sobrevivir no es aportar · 3:05 Lo que sostiene el resultado · 3:33 Con tu capital · 3:57 La regla para cualquier IA · 4:14 Ficha del experimento #25

## Etiquetas
machine learning, tamaño de posición, apalancamiento, XGBoost, grupo de control, inteligencia artificial, bot de trading, backtest, Sharpe ratio, walk-forward, trading con datos, atlas lab

## Rúbrica (autoevaluación, 1–5)
| Pieza | hook_0_3s | ritmo | promesa_cumplida | potencial_loop | claridad_no_traders | honestidad_atlas | audio | cta | Promedio |
|---|---|---|---|---|---|---|---|---|---|
| Largo | 5 | 4 | 5 | 4 | 4 | 5 | 4 | 4 | 4.38 |
| Short | 5 | 4 | 5 | 4 | 4 | 5 | 4 | 4 | 4.38 |

Hook ≥ 4 ✓ · honestidad 5 ✓. Punto débil: el control del ×3 fijo se toma del experimento 16 (mismo Sharpe de 1.23 y mismo filtro); el video lo cita así. Las cifras de la curva no son operables (cierre del mismo día, ×2 a ×4) y el guion lo dice.

# Experimento #68 — Tema 3: De la tabla a la cuenta (el cambio de mes, operado en el experimento 49)

**Tema 3 de 3 del experimento #68** · Qué aporta frente a los otros temas: el tema 1 mide el efecto de calendario y el tema 2 revisa los datos; este lo lleva a la cuenta. Compara lo que dice la tabla del #68 con lo que pasó al operar el mismo calendario en el #49 (con x2 y reglas de prop firm), y explica por qué medir no es operar. Se entiende sin los otros temas.
Estado del guion: **BORRADOR — pendiente de aprobación**
Estado del experimento: **murió** (#68: diferencias dentro del ruido, p = 0.67 y p = 0.89; el #49 operado: −10.9% y la cuenta se corta a los 179 días)
Serie: F (anomalías y estacionalidad).
Datos usados: `experiments.json` (v=68: verdict, analysis, chart.bars; v=49: kpis, params_view, capital.note, description, notes) · `exp_details.json` (extra-v68: algo; 20260610_142756_turn-of-month-indices-v49: algo, filters) · `series/20260610_142756_turn-of-month-indices-v49.json` ([0] con reglas de prop firm, [1] «Sin reglas de prop firm (periodo completo)», [2] comprar y esperar los 4 índices; −32.4% y −42.1% salen de [1]; +189.7% de [2]) · tabla «Con tu capital» (fila #49).
Producción (CLAUDE.md del canal): b-roll real detrás de cada escena con overlay 0.6, Ken Burns alternando, subtítulos karaoke en MAYÚSCULAS, un dato visual por escena. Colores: rojo `#e11d2a`, verde `#22c55e`, fondo `#09090b`.

## Títulos
1. Fin de mes: +5 contra +4 puntos básicos. Operado, la cuenta duró 179 días
2. Medir no es operar: el cambio de mes del S&P 500, de la tabla a la cuenta
3. Un efecto de calendario con x2: −10.9% (y −32.4% sin cortar la cuenta)

## Miniatura
Fondo `#09090b`. A la izquierda una tabla pequeña con «+5 / +4» en verde `#22c55e`; a la derecha una cuenta de trading con una línea roja `#e11d2a` que cae y se corta, y el texto grande «179 DÍAS». Logo ATLAS arriba a la derecha.

---

## VIDEO LARGO (≈ 6½ min)

**[0:00 — Gancho]** (pantalla: tabla con «+5» y «+4»; después una curva de cuenta que cae y se corta en el día 179)
BOCETO: la tabla en verde se desliza a la izquierda; a la derecha la curva roja cae y se corta con un chasquido; golpe de bajo al cortarse.
> El cambio de mes del S&P 500 rinde +5 puntos básicos por día, contra +4 el resto del mes. Pero cuando la operé con el mismo calendario, la cuenta se cortó a los 179 días con una pérdida de 10.9%.

**[0:18 — Qué experimento es]** (pantalla: rótulo «Experimento #68 · ATLAS Lab» y el nombre debajo; una flecha hacia «#49»)
BOCETO: rótulo con el número 68 y el nombre «Estacionalidad (día de la semana, cambio de mes)»; una flecha lo conecta con la tarjeta «#49: se operó».
> Este es el experimento #68 de ATLAS Lab: Estacionalidad, día de la semana y cambio de mes. Todos los resultados están en la página del experimento. Aquí lo comparo con el experimento 49, donde operé ese mismo calendario.

**[0:40 — Lo que dice la tabla]** (pantalla: tarjeta «S&P 500 · 2012–2024» con las barras +5 y +4 y el p de 0.67)
BOCETO: dos barras, cambio de mes +5 y resto del mes +4; medidor de p-valor con la aguja en 0.67, zona gris «ruido».
> El experimento 68 es un estudio descriptivo: el retorno medio diario del S&P 500, en puntos básicos, que son centésimas de 1%. Cambio de mes, días 28 al 3, +5; resto del mes, +4. La prueba t da p de 0.67, o sea, una diferencia que se explica por casualidad. Los días de la semana van de +3 a +9, con p de 0.89.

**[1:20 — Cómo se operó]** (pantalla: calendario de un mes con las últimas 2 y las primeras 3 filas resaltadas; cuatro logos de índices)
BOCETO: mes dibujado con cinco casillas en verde («compra») y el resto en gris («fuera»); cuatro etiquetas: S&P 500, Nasdaq 100, DAX, FTSE 100; ticker arriba.
> Para ver si la tabla se podía convertir en dinero, el experimento 49 compró cuatro índices, S&P 500, Nasdaq 100, DAX y FTSE 100, solo en las últimas 2 y las primeras 3 filas de cada mes, y se quedó fuera el resto. La señal se aplicaba con un día de rezago, para no usar información del futuro.

**[2:00 — x2, corte y prop firm]** (pantalla: tres tarjetas: «x2», «corte al −3%», «reglas de prop firm»)
BOCETO: tres tarjetas que se voltean: «x2 = multiplica ganancias y pérdidas por dos», «kill-switch −3% = salida automática», «prop firm = caída máxima 10% / pérdida diaria 5%».
> Esa prueba lleva tres piezas. Apalancamiento x2: se multiplica por dos lo que gana o pierde la posición. Un corte automático al −3%. Y las reglas de una prop firm, una empresa que te da capital si cumples límites: la cuenta se corta si cae más de 10% desde su máximo o pierde más de 5% en un día. Eso es lo que hace el motor: simula una cuenta con esas reglas.

**[2:45 — Resultado con las reglas]** (pantalla: curva real de la cuenta cortada; kpis en grande)
BOCETO: curva `series/…v49.json[0]` que cae y se detiene el 30-abr-2015; tarjetas −10.9%, Sharpe −1.63, caída máxima −13.4%, 179 días; sello ✕ «no sobrevive».
> Resultado: pierde 10.9%, con un Sharpe de −1.63. El Sharpe mide cuánto rindes por cada unidad de riesgo; negativo significa que pierde. La caída máxima fue de 13.4% y la cuenta se cortó el 30 de abril de 2015, el día 179. No sobrevive.

**[3:25 — ¿Y sin cortar la cuenta?]** (pantalla: dos curvas: la del calendario con x2 sin reglas de prop firm y la de comprar y esperar los 4 índices)
BOCETO: curva roja que sigue de 2014 a 2024 y termina en −32.4%; curva gris de comprar y esperar en +189.7%; sello «hipotética: en la realidad la cuenta se cierra ese día».
> El experimento incluye otra línea: cómo habría seguido la misma estrategia sin el corte. Es hipotética, porque en la realidad la cuenta se cierra ese día. Aun así, es instructiva: en los diez años completos termina en −32.4%, con una caída máxima de 42.1%, mientras comprar y esperar esos cuatro índices da +189.7%.

**[4:05 — Lo que esta prueba NO dice]** (pantalla: cuatro avisos en ámbar)
BOCETO: cuatro avisos: «no es una prueba limpia: x2, corte y reglas de prop firm», «costos: solo 0.2% de deslizamiento en el corte», «sin prueba fuera de muestra», «definición de fin de mes distinta».
> Seamos honestos con lo que no dice. No es una prueba limpia del efecto: lleva apalancamiento, un corte y reglas de prop firm. El costo es solo un deslizamiento de 0.2% en el corte, sin spread por cada rotación. No hay prueba fuera de muestra, porque la cesta de 2007 a 2013 no tiene índices. Y la ventana es distinta: aquí cuenta filas, últimas 2 y primeras 3, no los días 28 al 3. Lo que sí dice es qué pasa cuando una ventaja minúscula entra en una cuenta real.

**[4:50 — Medir no es operar]** (pantalla: tres columnas: «promedio», «costos», «reglas de la cuenta»)
BOCETO: tres columnas con un icono cada una; en la última, una puerta de salida con el cartel «10% / 5%».
> Tres razones por las que una tabla no basta. Una: un promedio no paga costos; entre lunes, +9, y martes, +3, hay 6 puntos básicos, y con p de 0.89 eso es ruido. Dos: el apalancamiento multiplica la ventaja y también el ruido. Tres: las reglas de la cuenta no esperan a que el azar se compense; si cae 10%, termina. Por eso la nota del experimento dice que las anomalías de calendario, si existieron, ya están arbitradas.

**[5:30 — Con tu capital]** (pantalla: tarjeta «Con tu capital» con aviso ámbar; curva cortada contra la gris)
BOCETO: aviso «con reglas de prop firm y x2 · no representa una cartera que sigue operando»; contadores −$11,071 y +$11,000.
> Con $100,000, la curva del experimento 49 termina en −$11,071, mientras comprar y esperar esos cuatro índices en las mismas fechas, 179 días, da +$11,000. Con $10,000 serían −$1,107 contra +$1,100. Ojo con el aviso: la curva se corta por las reglas de la prop firm y no representa una cartera que sigue operando.

**[6:00 — Preguntas de un escéptico]** (pantalla: tres tarjetas con la etiqueta «no medido»)
BOCETO: tres tarjetas: «¿sin apalancar?», «¿con costos reales?», «¿fuera de muestra?»; todas «no medido».
> Preguntas que me haría un escéptico. ¿Y sin apalancamiento? No lo probé. ¿Y con costos por cada rotación? Tampoco. ¿Y fuera de muestra? No existe, por falta de datos. Lo medido es lo que cuento: en la tabla, ruido; operado con x2 y esas reglas, no sobrevive.

**[6:25 — Ficha del experimento #68]** (pantalla: tarjeta con la ficha y la URL abajo)
BOCETO: tarjeta con cuatro líneas que entran con tick y, al final, la URL resaltada en verde.
> Ficha del experimento 68. Estado: murió. Cifra clave: cambio de mes +5 contra +4 puntos básicos por día, p de 0.67; operado en el 49, −10.9% y cuenta cortada a los 179 días. Filtro que decidió: la prueba estadística, con diferencias dentro del ruido. Lección: una ventaja de calendario de un punto básico no sostiene una cuenta. Revísalo completo en atlas-lab-one.vercel.app/e/68.

**[6:50 — Cierre]**
BOCETO: tabla verde y cuenta roja cortada, con el sello ✕; logo.
> Todos los datos en atlas-lab-one.vercel.app, experimento 68. El trading no se promete: se prueba. Contenido educativo, no es asesoría financiera.

---

## SHORT (9:16, ≈ 50 s)

**[0-3 s]** (boceto: tabla «+5 / +4» en verde que se corta con una curva roja; b-roll de calendario, kb=in; golpe de bajo)
> Fin de mes rinde +5 puntos básicos, contra +4. Lo operé: la cuenta duró 179 días.

**[3-14 s]** (boceto: mes con cinco casillas verdes; cuatro índices; whoosh)
> Compré cuatro índices solo en las últimas 2 y primeras 3 filas de cada mes, con apalancamiento x2 y las reglas de una prop firm: caída máxima de 10%, pérdida diaria de 5%.

**[14-26 s]** (boceto: curva real cortada el 30-abr-2015; tarjetas −10.9% y −1.63; ticks)
> Resultado: pierde 10.9%, con un Sharpe de −1.63, y la cuenta se corta el 30 de abril de 2015, el día 179.

**[26-38 s]** (boceto: curva hipotética que sigue y llega a −32.4% contra la gris de +189.7%; sello «hipotética»)
> Sin cortar la cuenta, en diez años termina en −32.4%, con una caída de 42.1%. Comprar y esperar esos índices: +189.7%.

**[38-45 s]** (boceto: sello «p = 0.67 · ruido»; texto «medir ≠ operar»)
> En la tabla la diferencia ya era ruido: p de 0.67. Medir no es operar.

**[45-50 s]** (boceto: texto «Experimento #68 completo en el enlace»; logo)
> Video completo en el canal y experimento #68 completo en el enlace. ¿Operarías un punto básico?

Gancho alterno A: «179 días: lo que duró una cuenta con el efecto de fin de mes.» · B: «El efecto de calendario del S&P 500 es de un punto básico por día.»

## Descripción de YouTube — video largo
https://atlas-lab-one.vercel.app/e/68?utm_source=youtube&utm_medium=video&utm_campaign=exp068-t3
Ficha: experimento #68, Estacionalidad (día de la semana, cambio de mes). Estado: murió. Cambio de mes +5 contra +4 puntos básicos por día (p = 0.67); operado en el #49 con x2, −10.9% y cuenta cortada a los 179 días.
Comparo lo que dice la tabla con lo que pasa al operar el mismo calendario. No es una prueba limpia (x2, corte y reglas de prop firm), y el video lo explica.
Contenido educativo. No es asesoría financiera ni recomendación de inversión.

## Descripción de YouTube — Short
https://atlas-lab-one.vercel.app/e/68?utm_source=youtube&utm_medium=short&utm_campaign=exp068-t3
Ficha: experimento #68, murió. Operado en el #49: −10.9% y cuenta cortada a los 179 días. Contenido educativo, no es asesoría financiera.

## Capítulos
0:00 Gancho · 0:18 Qué experimento es · 0:40 Lo que dice la tabla · 1:20 Cómo se operó · 2:00 x2, corte y prop firm · 2:45 Resultado con las reglas · 3:25 ¿Y sin cortar la cuenta? · 4:05 Lo que esta prueba no dice · 4:50 Medir no es operar · 5:30 Con tu capital · 6:00 Preguntas de un escéptico · 6:25 Ficha del experimento #68 · 6:50 Cierre

## Etiquetas
efecto calendario, turn-of-month, cambio de mes, apalancamiento x2, prop firm, kill-switch, S&P 500, backtest, medir no es operar, trading con datos, ATLAS Lab, anomalías de mercado

## Rúbrica (autoevaluación, 1–5)
| Pieza | hook_0_3s | ritmo | promesa_cumplida | potencial_loop | claridad_no_traders | honestidad_atlas | audio | cta | Promedio |
|---|---|---|---|---|---|---|---|---|---|
| Largo | 5 | 4 | 5 | 4 | 4 | 5 | 4 | 4 | 4.38 |
| Short | 5 | 4 | 5 | 5 | 4 | 5 | 4 | 4 | 4.50 |

Hook ≥ 4 ✓ · honestidad 5 ✓. Punto débil: el #49 no es una prueba limpia del efecto (x2, corte, reglas de prop firm, costos parciales); el video lo dice en el bloque 4:05 y en el Short se deja el matiz de «las reglas de una prop firm».

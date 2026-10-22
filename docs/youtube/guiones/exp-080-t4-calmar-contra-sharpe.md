# Experimento #80 — Tema 4: Calmar contra Sharpe (la misma estrategia, dos veredictos)

Tema 4 de 4 del experimento #80 · Qué aporta frente a los otros temas: es el tema del concepto. Explica para principiantes las cinco medidas del experimento (crecimiento anual, caída máxima, Calmar, Sharpe, retiro sostenible) y por qué B3 gana en tres y pierde en dos contra comprar y esperar. Insiste en una regla anti-gurú: la medida se elige antes de ver el resultado.
Estado del guion: **BORRADOR — pendiente de aprobación**
Estado del experimento: **parcial** (B3 rinde casi igual que comprar y esperar con menos caída, pero es beta gestionada, no ventaja) · Serie E — «Gestión de riesgo: lo poco que se sostuvo» (plan-series.md) · 1 largo + 1 Short
Datos usados: `experiments.json` (v=80: kpis, metrics, verdict, analysis, capital, period), `exp_details.json` (extra-v80: algo, filters), `series/extra-v80.json` (1.ª curva = B3; 2.ª = «Sin estrategia»), tabla «Con tu capital» de `docs/youtube`.
Producción (CLAUDE.md del canal): b-roll real detrás de cada escena con overlay oscuro 0.6, Ken Burns alternando in/out, subtítulos karaoke en MAYÚSCULAS con palabras clave en rojo, un dato visual por escena, golpe de bajo + sacudida solo en 1–2 momentos. Colores: rojo `#e11d2a`, verde `#22c55e`, fondo `#09090b`. Cifras en dígitos aquí; en el campo `tts` del JSON, en palabras.

## Títulos (3 opciones)
1. La misma estrategia gana en 3 medidas y pierde en 2: Calmar contra Sharpe
2. Calmar 0.43 contra 0.36, pero Sharpe 0.67 contra 0.76: ¿cuál importa?
3. Cinco medidas, una estrategia: B3 contra comprar y esperar

## Miniatura (pensada para el título 1)
Fondo `#09090b`. Una balanza partida: a un lado tres cifras verdes («3 ✓»), al otro dos rojas («2 ✗»). Texto grande: «¿QUIÉN GANA?» (2 palabras, sin repetir el título). Logo ATLAS arriba a la derecha.

---

## VIDEO LARGO (16:9, ≈ 6 min)

**[0:00 — Gancho]** (pantalla: marcador «3 – 2»)
La misma estrategia le gana a comprar y esperar en tres medidas, y pierde en las otras dos. Crece +11.2% contra +11.0%, pero su Sharpe es 0.67 contra 0.76.
BOCETO: marcador «3 – 2» con cinco casillas que se encienden una a una, tres verdes y dos rojas. kb=in.

**[0:15 — Qué es este experimento]** (pantalla: rótulo con el número y el nombre)
Este es el experimento #80 de ATLAS Lab: Estrategia de ingreso óptima por Calmar (índices + oro). Todos los resultados están en la página del experimento.
BOCETO: rótulo en rojo y blanco «EXPERIMENTO #80» con el nombre debajo, sobre el marcador atenuado (overlay 0.6). Whoosh corto. kb=out.

**[0:25 — Las cinco medidas]** (pantalla: cinco tarjetas)
Para entenderlo hay que saber qué mide cada una. Crecimiento anual: cuánto crece la cartera por año. Caída máxima, o drawdown: lo más que baja desde un pico hasta el valle siguiente. Calmar: el crecimiento anual dividido entre la caída máxima, cuánto ganas por cada punto de dolor. Sharpe: la ganancia por unidad de riesgo, donde el riesgo es cuánto se agita la curva, hacia arriba y hacia abajo. Y retiro anual sostenible: la mayor tasa que puedes sacar cada año sin agotar la cartera y conservando al menos la mitad.
BOCETO: cinco tarjetas con un dibujo simple cada una: una flecha ascendente, un valle, una división, una onda y un grifo. Cada una entra con tick. kb=in.

**[1:20 — La tabla]** (pantalla: B3 contra comprar y esperar)
Las probé en cinco activos, S&P 500, Nasdaq 100, DAX, FTSE 100 y oro, de 2012 a 2024. La estrategia es B3: comprar y esperar multiplicado por 2 y por la fracción de activos sobre su media de 200 días, entre 0 y 2 veces. Compárala con comprar y esperar. Crecimiento anual, B3 gana: +11.2% contra +11.0%. Caída máxima, B3 gana: −26% contra −31%. Calmar, B3 gana: 0.43 contra 0.36. Sharpe, B3 pierde: 0.67 contra 0.76. Retiro sostenible, B3 pierde: 10.0% contra 12.0%.
| Medida | B3 | Comprar y esperar | Gana |
|---|---|---|---|
| Crecimiento anual | +11.2% | +11.0% | B3 |
| Caída máxima | −26% | −31% | B3 |
| Calmar | 0.43 | 0.36 | B3 |
| Sharpe | 0.67 | 0.76 | Comprar y esperar |
| Retiro sostenible | 10.0% | 12.0% | Comprar y esperar |
BOCETO: tabla fila a fila; la celda ganadora en verde y la perdedora en rojo. Golpe de bajo + sacudida cuando aparece «0.67 contra 0.76». Cartel ámbar fijo: «B3 usa hasta 2x y no incluye costos ni financiamiento».

**[2:25 — Por qué no se ponen de acuerdo]** (pantalla: dos curvas esquemáticas)
Mi lectura, que no medí: el Sharpe castiga toda agitación, incluso la que va hacia arriba. B3 está expuesta al doble cuando los activos están en tendencia, así que su curva se agita más cuando sube, y el Sharpe lo cuenta como riesgo. El Calmar solo mira la peor caída, y B3 la recorta porque sale del mercado cuando la tendencia se rompe. Y el retiro sostenible depende del camino, del orden de los años buenos y malos, no solo del punto de llegada: dos curvas que acaban casi igual pueden sostener retiros distintos.
BOCETO: dos curvas esquemáticas rotuladas «ilustración»: una con subidas más empinadas y un único valle menos hondo, otra más suave con un valle más hondo. Marcas sobre el valle (Calmar) y sobre las ondulaciones (Sharpe). Etiqueta gris «razonamiento, no medido». kb=out.

**[3:30 — La regla: elige la medida antes]** (pantalla: texto)
Aquí va una regla anti-gurú. Si puedes elegir la medida después de ver el resultado, siempre habrá una a tu favor. Alguien te mostrará solo el Calmar y B3 parecerá mejor. Otro te mostrará solo el Sharpe y parecerá peor. En este experimento la pregunta de partida fue vivir de retiros, y por eso importaban el Calmar y el retiro sostenible. Se publican las cinco, también las dos que B3 pierde.
BOCETO: dos manos sosteniendo dos cartas distintas, «solo Calmar ✓» y «solo Sharpe ✗»; luego las cinco cartas abiertas sobre la mesa. kb=in.

**[4:20 — Con tu capital]** (pantalla: tarjeta de capital con advertencia)
Con 100,000 dólares, entre 2012 y 2024, B3 gana 297,399 y comprar y esperar gana 286,540. Con 10,000 dólares serían unos +29,740 contra +28,654. Es casi lo mismo, y eso es consistente con el marcador de tres a dos. Recuerda que la curva de B3 usa hasta 2x y no incluye costos ni el financiamiento de ese apalancamiento; en la vida real sería menor.
BOCETO: curvas reales de `series/extra-v80.json` casi pegadas con contadores finales; cartel ámbar con `capital.note`.

**[5:00 — Conclusión]**
Resultado parcial. B3 mejora el Calmar sin perder retorno, pero no mejora el Sharpe ni el retiro sostenible. No es alfa, es beta gestionada, un plan de ingreso sensato. Y lo que aprendes de esto vale más que la estrategia: define la medida antes de mirar el resultado. El trading no se promete: se prueba.

**[5:30 — Ficha del experimento #80]** (pantalla: tarjeta con la ficha y la URL)
Ficha del experimento #80. Estado: parcial. Cifra clave: Calmar 0.43 contra 0.36, pero Sharpe 0.67 contra 0.76. Filtro que decidió: el Sharpe y el retiro sostenible, 10.0% contra 12.0%, quedan por debajo de comprar y esperar. Lección: define la medida antes de ver el resultado. Revísalo completo en atlas-lab-one.vercel.app/e/80.
BOCETO: tarjeta con el número «#80», el sello «PARCIAL» en ámbar, tres líneas (cifra clave, filtro que decidió, lección) y la URL `atlas-lab-one.vercel.app/e/80` grande abajo. kb=in.

**[5:50 — Cierre]**
Todos los datos en atlas-lab-one.vercel.app, experimento 80. Contenido educativo, no es asesoría financiera.

---

## SHORT (9:16, ≈ 49 s)

**[0-3 s]** «Misma estrategia: le gana a comprar y esperar en tres medidas y pierde en dos.»
BOCETO: marcador «3 – 2» sobre b-roll de bolsa (kb=in), overlay 0.6.

**[3-15 s]** «Gana en crecimiento anual, +11.2% contra +11.0%. En caída máxima, −26% contra −31%. Y en Calmar, 0.43 contra 0.36.»
BOCETO: tres pares de cifras que entran con tick, el de B3 en verde (kb=out); ticker arriba.

**[15-30 s]** «Pierde en Sharpe, 0.67 contra 0.76. Y en retiro sostenible, 10.0% contra 12.0%.»
BOCETO: dos pares en rojo; golpe de bajo + sacudida en «12.0%».

**[30-42 s]** «El Calmar mira la peor caída. El Sharpe mira toda la agitación. Si eliges la medida después, siempre habrá una a tu favor.»
BOCETO: dos iconos, un valle y una onda; cartel ámbar «B3: hasta 2x, sin costos ni financiamiento».

**[42-49 s]** «El video completo está en el canal, y el experimento #80 completo, en el enlace. Tres a dos: depende de qué midas.»
BOCETO: texto final «Video completo en el canal · Experimento #80 completo en el enlace» + pequeño «No es asesoría financiera · El trading no se promete: se prueba». Loop: «tres a dos» responde al marcador del arranque.

---

## Descripción de YouTube (video largo)
https://atlas-lab-one.vercel.app/e/80?utm_source=youtube&utm_medium=video&utm_campaign=exp080-t4
Ficha del experimento #80: parcial · B3 +11.2% anual contra +11.0%, caída −26% contra −31%, Calmar 0.43 contra 0.36 · Sharpe 0.67 contra 0.76 y retiro sostenible 10.0% contra 12.0%.
Explico cinco medidas (crecimiento, caída máxima, Calmar, Sharpe y retiro sostenible) con un caso real: la exposición por tendencia B3 gana en tres y pierde en dos contra comprar y esperar (S&P 500, Nasdaq 100, DAX, FTSE 100 y oro, 2012–2024). Usa hasta 2x y no incluye costos ni financiamiento.
Contenido educativo. No es asesoría financiera ni recomendación de inversión.

## Descripción de YouTube (Short)
https://atlas-lab-one.vercel.app/e/80?utm_source=youtube&utm_medium=short&utm_campaign=exp080-t4
Ficha del experimento #80: parcial · gana en crecimiento, caída máxima y Calmar (0.43 contra 0.36) · pierde en Sharpe (0.67 contra 0.76) y retiro sostenible (10.0% contra 12.0%).
Contenido educativo. No es asesoría financiera.

## Capítulos
0:00 Gancho · 0:15 Qué es este experimento · 0:25 Las cinco medidas · 1:20 La tabla · 2:25 Por qué no se ponen de acuerdo · 3:30 Elige la medida antes · 4:20 Con tu capital · 5:00 Conclusión · 5:30 Ficha del experimento

## Etiquetas
calmar ratio, sharpe ratio, drawdown, retiro sostenible, métricas de trading, exposición por tendencia, beta gestionada, comprar y mantener, backtest, atlas lab, trading con datos, estrategias de trading

## Rúbrica (autoevaluación, 1–5)
| Pieza | hook_0_3s | ritmo | promesa_cumplida | potencial_loop | claridad_no_traders | honestidad_atlas | audio | cta | Promedio |
|---|---|---|---|---|---|---|---|---|---|
| Largo | 4 | 4 | 5 | 4 | 4 | 5 | 4 | 4 | 4.3 |
| Short | 4 | 4 | 5 | 5 | 4 | 5 | 4 | 4 | 4.4 |

Hook ≥ 4 ✓ · honestidad 5 ✓. Punto débil: cinco definiciones en un tema; el bloque 0:25 las agrupa con un dibujo por medida. La explicación de por qué las medidas discrepan está rotulada «razonamiento, no medido». El cartel de «hasta 2x, sin costos ni financiamiento» es obligatorio en toda escena con B3.

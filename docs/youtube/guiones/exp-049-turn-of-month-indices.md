# Experimento #49 — Cambio de mes en índices (efecto turn-of-month)

Estado del guion: **BORRADOR — pendiente de aprobación**
Estado del experimento: **murió** (No sirvió) · Serie: F ("Anomalías y estacionalidad") · Relacionado: #68 (estacionalidad medida aparte, sin cuenta simulada)
Datos usados: `experiments.json` (v=49: verdict, notes, metrics, kpis, params_view, period), `exp_details.json` (algo, code.snippet, filters), `series/20260610_142756_turn-of-month-indices-v49.json` (curva 0 = estrategia, 1 = «sin reglas de prop firm», 2 = sin estrategia) y la tabla «Con tu capital» (`docs/youtube/*-capital.md`) (fila #49).
Aviso de datos: 179 días de curva y sin periodo fuera de muestra (la cesta de 2007–2013 no tiene índices); el guion lo dice y no extrapola.

## Títulos (3 opciones)
1. ¿Comprar al cambio de mes funciona? Lo probé: Sharpe −1.63
2. Turn-of-month en 4 índices: la cuenta duró 179 días
3. Comprar solo 5 días al mes en 4 índices: ¿funciona?

## Miniatura (1280×720)
Fondo `#09090b`. Calendario mensual con los 2 últimos y los 3 primeros días resaltados en verde. Debajo, dos cifras: "+$11,000" verde (mercado) y "−$11,071" rojo (estrategia). Palabra en blanco: "MISMAS FECHAS". Logo ATLAS esquina superior derecha. (No repite el título 1.)

---

## VIDEO LARGO (16:9, ≈ 5 min — la cuenta duró 179 días)

**[0:00 — Gancho]** (pantalla: calendario con cinco días resaltados; dos cifras enfrentadas)
Hay una idea muy repetida: los índices suben más en los últimos días del mes y los primeros del siguiente. Compré el S&P 500, el Nasdaq 100, el DAX y el FTSE 100 solo esos cinco días de cada mes. Resultado: la cuenta simulada se cortó a los 179 días, con una pérdida de 10.9% y un Sharpe de −1.63. En esas mismas fechas, comprar y esperar los índices ganó $11,000 por cada $100,000.
> BOCETO: calendario con 5 casillas en verde; dos contadores enfrentados, "+$11,000" (verde) y "−$11,071" (rojo), sacudida al segundo. Texto: "MISMAS FECHAS".

**[0:35 — La idea]** (pantalla: calendario animado)
Se llama turn-of-month, el cambio de mes. La regla compra los cuatro índices en las últimas dos y las primeras tres filas diarias de cada mes, y el resto del mes se queda fuera. La idea es puro calendario: no mira el precio, solo la fecha. Apalancamiento 2, kill-switch de −3% y deslizamiento de 0.2%.
> BOCETO: calendario mensual que pasa de mes a mes; las casillas de ventana se encienden y el resto se apaga. Recuadro con params_view: "Apalancamiento x2 · Kill-switch −3% · Deslizamiento 0.2%".

**[1:05 — Cómo se ve un mes]** (pantalla: línea de un mes con cinco casillas en verde y el resto en gris)
Tomemos un mes cualquiera. La regla entra a comprar en las últimas dos filas diarias del mes y se mantiene hasta la tercera fila del mes siguiente. Son cinco filas de exposición. El resto del mes, la cuenta está en efectivo. Es una estrategia que pasa poco tiempo en el mercado y que no mira el precio ni las noticias: mira solo la fecha. Por eso los efectos de calendario son tentadores: son simples de describir y simples de programar. Pero simple no quiere decir que funcione.
> BOCETO: línea de tiempo mensual: 2 casillas verdes al final, 3 al inicio del mes siguiente, el resto en gris con rótulo "en efectivo". Tick por cada casilla verde.

**[1:45 — Cómo se probó (y sus límites)]** (pantalla: checklist con tres avisos ámbar)
Tres límites que debes conocer. Primero, el calendario de esta cesta incluye domingos: en 2014–2024, 105 de las 630 filas de la ventana son domingos. Segundo, el motor aplica el peso del día anterior, para no mirar el futuro, y eso desplaza la ventana un día. Tercero, solo existe el periodo 2014–2024, porque en 2007–2013 la cesta no tiene índices; por eso no hay prueba fuera de muestra, es decir, en años que la estrategia nunca vio. Y la cuenta sigue las reglas de una prop firm: se corta con una caída máxima de 10% o una pérdida de 5% en un día.
> BOCETO: checklist: ✓ "señal del día anterior"; ámbar "105 de 630 filas son domingos", "ventana desplazada un día", "sin fuera de muestra". Barra: 630 filas con 105 en gris.

**[2:30 — Resultados]** (pantalla: 5 tarjetas KPI + curva 0)
Retorno total: −10.9%. Sharpe, la ganancia por unidad de riesgo, que debería ser positiva: −1.63. Drawdown máximo, la mayor caída desde un pico: −13.4%. La cuenta duró 179 días, hasta el 30 de abril de 2015. ¿Sobrevive en todos los periodos? No, y solo hay uno.
> BOCETO: tarjetas `kpis` en rojo con tick; curva 0 de la serie cayendo hasta el corte con sello ✕ en 30-abr-2015.

**[2:55 — Contra comprar y esperar]** (pantalla: curva 0 vs curva 2)
Aquí viene el contraste. Con $100,000, la estrategia cerró en −$11,071. Comprar y esperar los índices en esas mismas fechas cerró en +$11,000. La línea hipotética sin el corte de la prop firm, que en la realidad no existe porque la cuenta se cierra ese día, habría terminado 2024 con $67,594 de cada $100,000.
> BOCETO: curva 0 (blanca, cae) y curva 2 (gris, sube) divergiendo en pantalla dividida; cifras +$11,000 / −$11,071; curva 1 punteada rotulada "hipotética".

**[3:25 — Qué diría y qué no diría un efecto calendario]** (pantalla: texto de la ficha)
Un efecto calendario es una regla que no mira el precio: mira la fecha. Si funciona, es porque algo se repite en las mismas fechas. Para creerlo hacen falta muchos años y varios mercados. Aquí hay 179 días y una sola ventana, 2014–2024, así que lo único que puedo decir es que, en este tramo y con esta implementación, perdió mientras el mercado subía. El experimento 68 mide la estacionalidad por separado, sin simular una cuenta.
> BOCETO: dos columnas: "Lo que sí dice" (−10.9%, Sharpe −1.63, 179 días) en blanco y "Lo que no dice" (muchos años, varios mercados) en gris con ✕. Referencia al experimento 68.

**[4:00 — Por qué falla]** (pantalla: texto de la ficha)
La ficha lo resume así: los efectos de calendario, si existieron, ya están arbitrados, es decir, que si existieron, otros ya los explotaron hasta agotar la ventaja.
> BOCETO: calendario que se apaga mes a mes; el sello ✕ queda sobre las cinco casillas.

**[4:15 — Con tu capital]** (pantalla: tarjeta "Con tu capital")
Con $10,000: −$1,107 la estrategia y +$1,100 comprar y esperar. Con $100,000: −$11,071 y +$11,000.
> BOCETO: tarjeta de capital con dos columnas ($10,000 y $100,000) y dos filas (estrategia en rojo, referencia en verde). Aviso: "Simulación, no es una promesa".

**[4:30 — Conclusión y cierre]** (pantalla: logo y frase de marca)
Comprar solo cinco días al mes, tal como se implementó, perdió mientras el mercado subía. Todos los datos en atlas-lab-one.vercel.app, experimento 49. Si quieres que pruebe otro efecto de calendario, dímelo en los comentarios. Contenido educativo, no es asesoría financiera. El trading no se promete: se prueba.
> BOCETO: el calendario se apaga con el sello ✕ y las dos cifras del inicio; fundido a la frase de marca en blanco sobre negro.

---

## SHORT (9:16, ≈ 43 s) — "Cinco días al mes"
Título del Short: Comprar solo 5 días al mes: −$11,071 #Shorts

**[0-3 s]** "Mismas fechas: el mercado ganó. Esta estrategia perdió."
> BOCETO: B-roll vertical de calendario/bolsa con overlay 0.6; dos cifras enormes, "+$11,000" verde y "−$11,071" rojo; golpe de bajo y sacudida.

**[3-15 s]** "Con cien mil dólares, el mercado ganó $11,000 y la estrategia perdió $11,071. Comprar cuatro índices solo cinco días al mes: los dos últimos y los tres primeros."
> BOCETO: calendario que se enciende en 5 casillas por mes; chips S&P 500, Nasdaq 100, DAX, FTSE 100 con tick; las dos cifras del inicio quedan abajo, pequeñas. Ken Burns hacia dentro.

**[15-28 s]** "Se llama efecto de cambio de mes. La cuenta simulada se cortó el 30 de abril de 2015, a los 179 días. Sharpe de −1.63 y pérdida de 10.9%."
> BOCETO: curva real de la serie (curva 0) cayendo hasta el corte; barra de Sharpe −1.63 en rojo; sello ✕. Whoosh y flash al cambio de escena.

**[28-35 s]** "Hay límites que digo en el video: son solo 179 días y no hay prueba fuera de muestra. Pero esta versión no funcionó."
> BOCETO: tres avisos ámbar que aparecen con tick: "179 días", "sin fuera de muestra", "domingos en el calendario". Overlay oscuro.

**[35-43 s]** "Comprar solo cinco días al mes: perdió mientras el mercado ganaba. El video completo está en el canal. No es asesoría financiera."
> BOCETO: vuelven las dos cifras del inicio, +$11,000 y −$11,071 (empalma con el primer cuadro: loop); texto pequeño "El trading no se promete: se prueba."

---

## Descripción (YouTube)
Probé el efecto turn-of-month: comprar S&P 500, Nasdaq 100, DAX y FTSE 100 solo en las últimas 2 y las primeras 3 filas diarias de cada mes, con apalancamiento x2 y señal del día anterior. La cuenta simulada se cortó a los 179 días con −10.9% y Sharpe −1.63, mientras comprar y esperar ganó $11,000 por cada $100,000 en esas fechas. Hay límites (muestra corta, sin fuera de muestra) y el video los explica.
Datos completos: https://atlas-lab-one.vercel.app (experimento #49)
Contenido educativo. No es asesoría financiera ni recomendación de inversión.

Capítulos: 0:00 Gancho · 0:35 La idea · 1:05 Cómo se ve un mes · 1:45 Cómo se probó (y sus límites) · 2:30 Resultados · 2:55 Contra comprar y esperar · 3:25 Qué diría y qué no diría un efecto calendario · 4:00 Por qué falla · 4:15 Con tu capital · 4:30 Conclusión y cierre

Etiquetas: turn-of-month, efecto calendario, cambio de mes, estacionalidad, índices bursátiles, S&P 500, backtest, Sharpe ratio, estrategia de trading, trading con datos, ATLAS Lab

## Rúbrica (autoevaluación, escala 1-5)
| Criterio | Nota | Por qué |
|---|---|---|
| hook_0_3s | 4 | Contraste claro («ganó / perdió») con +$11,000 y −$11,071 en pantalla; las cifras no se dicen en los primeros 3 s |
| ritmo | 4 | Calendario animado y contraste de curvas; bloque de límites algo denso |
| promesa_cumplida | 5 | Promete el contraste y las curvas lo muestran |
| potencial_loop | 4 | Cierra con las mismas dos cifras con que abre |
| claridad_no_traders | 4 | Explica turn-of-month, Sharpe, fuera de muestra y prop firm |
| honestidad_atlas | 5 | Declara 179 días, domingos en el calendario y falta de fuera de muestra |
| audio | 4 | Voz por clonar; bajo en el gancho |
| cta | 4 | Una petición y remite al video completo |
Promedio: **4.25** (≥ 4.0). Hook del Short 4 (≥ 4) y honestidad 5: no descalificado.

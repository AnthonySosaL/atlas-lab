# Experimento #58 — Escenarios: capital del bot (1x / 2x / volatilidad objetivo)

Estado del guion: **BORRADOR — pendiente de aprobación**
Estado del experimento: **parcial** (neutral): simulación hipotética; a 2x el mismo bot gana +13.1% en 2020 y +6.7% en 6 meses, pero pierde −17.0% en 2022 · Serie: G ("Construyendo un bot, y por qué murió"), como complemento del bot en vivo · Relacionado: #57, #50
Datos usados: `experiments.json` (v=58: verdict, analysis, notes, metrics, kpis, params_view, chart.bars, capital.note), `exp_details.json` (algo, code.snippet, filters), `series/extra-v58.json` (4 curvas: COVID 2020, mercado bajista 2022, último mes y últimos 6 meses hasta 2026-06-12) y la tabla «Con tu capital» (`docs/youtube/*-capital.md`) (fila #58, solo la curva del COVID).

## Títulos (3 opciones)
1. ¿Cuánto daría mi bot? +13.1% en 2020, −17.0% en 2022
2. Mismo bot, mismo apalancamiento: +13.1% y −17.0%
3. El bot a 2x en el COVID y en el mercado bajista de 2022

## Miniatura (1280×720)
Fondo `#09090b`, dividido en diagonal. Izquierda: curva verde `#22c55e` que sube, rótulo "COVID". Derecha: curva roja `#e11d2a` que cae, rótulo "OSO". Centro, en blanco: "MISMO x2". Las cifras van en el título, no en la imagen. Logo ATLAS esquina inferior central. (No repite el título 1.)

---

## VIDEO LARGO (16:9, ≈ 5 min)

**[0:00 — Gancho]** (pantalla: pantalla dividida, curva que sube y curva que cae)
Mismo bot, mismo apalancamiento, mismas reglas. En 2020, con el COVID: +13.1%. En 2022, el mercado bajista: −17.0%. ¿Qué cambió? Solo el mercado.
> BOCETO: pantalla dividida con las curvas reales de `series/extra-v58.json`: curva 0 (COVID 2020, sube a 11,315) y curva 1 (2022, cae a 8,303), normalizadas a 10,000; contadores +13.1% (verde) y −17.0% (rojo). Sacudida solo en −17.0%.

**[0:15 — Qué es un "what-if"]** (pantalla: esquema del bot y cuatro ventanas)
Esto es una simulación hipotética: lo que habría rendido el bot en vivo en ventanas reales. No es una predicción ni una estrategia nueva. El bot reparte el riesgo entre los activos de la cesta, filtra con el VIX y el crédito del cierre anterior, y opera con apalancamiento fijo de 2, con 3 puntos básicos de costo por unidad de rotación. Cuatro ventanas: el último mes, los últimos 6 meses, el año 2020 y el año 2022. Comparo 1x, 2x, volatilidad objetivo y 2x sin filtro. Para 2020 y 2022, el capital inicial es de $50,000.
> BOCETO: esquema del bot (paridad de riesgo → filtro macro → apalancamiento 2x) y 4 ventanas en una línea de tiempo (1 mes, 6 meses, 2020, 2022). Recuadro `params_view`: "1x / 2x / vol-targeting · costo 3 bps · capital $50,000".

**[1:00 — La beta, con un ejemplo]** (pantalla: ilustración de beta con dos mercados)
Beta es lo que ganas o pierdes solo por estar dentro del mercado. Si el mercado sube, quien tiene beta alta sube con él; si cae, cae con él. Con apalancamiento 2, esa sensibilidad se duplica. Un bot puede ganar mucho en un año alcista y perder mucho en uno bajista sin tener ninguna habilidad: solo está amplificando el mercado. La pregunta importante es si hay algo más que beta. Este experimento muestra que, en estos escenarios, no.
> BOCETO: ilustración rotulada (no es dato real): una línea de mercado y otra línea del bot, con el bot siguiendo al mercado a doble amplitud; etiqueta "2x = beta ×2".

**[1:35 — Los cuatro resultados]** (pantalla: gráfico de barras de la ficha)
A 2x, estos son los resultados. El último mes: −1.0%. Los últimos 6 meses: +6.7%. El COVID de 2020: +13.1%. El mercado bajista de 2022: −17.0%. Dos positivos, dos negativos, con el mismo bot.
> BOCETO: las 4 barras reales del `chart.bars` de la ficha (−1, +6.7, +13.1, −17) creciendo con tick; verdes y rojas según el signo.

**[1:55 — Cómo leer cada escenario]** (pantalla: cuatro ventanas con distinto tamaño)
Las ventanas no pesan lo mismo. El último mes y los últimos 6 meses son ventanas cortas: la curva del mes tiene 23 puntos y la de los 6 meses, 127. Un mes cualquiera puede salir bien o mal por azar. En cambio, 2020 y 2022 son años completos con mercados muy distintos: uno con el COVID, el otro con un mercado bajista. La comparación entre esos dos es la que más enseña.
> BOCETO: cuatro ventanas de distinto ancho en una línea de tiempo (1 mes y 6 meses estrechas, 2020 y 2022 anchas); etiquetas "23 puntos" y "127 puntos" sobre las dos primeras.

**[2:30 — Dos fuentes de precios]** (pantalla: tabla comparativa)
Un detalle de datos. El mes y los 6 meses se calcularon con precios de MetaTrader 5, que ya no se conservan, así que ese cálculo no se puede reproducir hoy. Con precios de Dukascopy y Yahoo Finance, esos dos escenarios dan −1.5% y +6.2%. Las curvas que verás son esas. Los años 2020 y 2022 coinciden exactamente en ambas fuentes.
| Ventana (a 2x) | Precios originales | Dukascopy y Yahoo Finance |
|---|---|---|
| Último mes | −1.0% | −1.5% |
| Últimos 6 meses | +6.7% | +6.2% |
| 2020 (COVID) | +13.1% | +13.1% |
| 2022 (mercado bajista) | −17.0% | −17.0% |
> BOCETO: la tabla entra fila a fila; las dos filas de 2020 y 2022 se marcan con "coinciden" en verde; las curvas de 1 y 6 meses (curvas 2 y 3 de la serie) aparecen al lado con la etiqueta "hasta 12-jun-2026".

**[3:00 — Por qué: beta apalancada]** (pantalla: texto de la ficha)
Mismo bot, signo según el mercado: es beta apalancada, no una ventaja propia. Beta es lo que ganas o pierdes solo por estar dentro del mercado; con apalancamiento 2, se duplica. Los costos de operar son mínimos: unos $192 en 6 meses. El riesgo real es la dirección del mercado y los swaps, el costo o ingreso por mantener posiciones abiertas de un día para otro. En un año bajista, perderías, y a 2x el drawdown, la caída máxima, reventaría una cuenta de fondeo.
> BOCETO: la curva del 2022 en rojo con un zoom a su mínimo; tarjeta "Costos: $192 en 6 meses"; sello ámbar "RIESGO REAL = DIRECCIÓN DEL MERCADO".

**[3:40 — Con tu capital]** (pantalla: tarjeta "Con tu capital")
Con $10,000, el escenario del COVID da +$1,315 y el de 2022, −$1,697. Con $100,000, +$13,149 y −$16,967. La misma cuenta, con las mismas reglas, en dos años distintos. Y recuerda: son escenarios en retrospectiva, no una predicción de lo que pasará.
> BOCETO: tarjeta de capital con dos filas, 2020 en verde y 2022 en rojo, y dos columnas ($10,000 y $100,000). Aviso al pie: "Simulación hipotética, no es una promesa".

**[4:05 — Lo que este experimento no dice]** (pantalla: dos columnas: dice / no dice)
Lo que no dice: no dice que el bot ganará o perderá en el futuro. No es una predicción; es un "qué habría pasado" en cuatro ventanas. Y no dice que el filtro macro o el apalancamiento sean buenos o malos por sí solos: dice que, tal como están, el resultado sigue al mercado. Si el próximo año es bajista, la ficha avisa: perderías, y a 2x el drawdown reventaría una cuenta de fondeo.
> BOCETO: dos columnas: "Dice" (4 resultados, beta apalancada) en blanco y "No dice" (futuro, predicción) en gris con ✕; aviso ámbar con la frase de la ficha sobre el año bajista.

**[4:40 — Conclusión y cierre]** (pantalla: logo)
Si el bot gana o pierde depende del mercado, no de una ventaja propia. Todos los datos en atlas-lab-one.vercel.app, experimento 58. Si quieres que simule otro escenario, dímelo en los comentarios. Contenido educativo, no es asesoría financiera. El trading no se promete: se prueba.
> BOCETO: la pantalla dividida del inicio con las dos curvas; fundido a la frase de marca.

---

## SHORT (9:16, ≈ 43 s) — "Mismo bot"
Título del Short: Mismo bot: +13.1% en 2020, −17.0% en 2022 #Shorts

**[0-3 s]** "Mismo bot: el COVID, ganó. El mercado bajista, perdió."
> BOCETO: B-roll vertical de pantallas de mercado con overlay 0.6; texto gigante "+13.1%" verde y "−17.0%" rojo enfrentados; golpe de bajo y sacudida.

**[3-17 s]** "En 2020, más 13.1%. En 2022, menos 17.0%. Es un bot con filtro macro y apalancamiento doble, simulado con las mismas reglas."
> BOCETO: esquema del bot en 3 cajas y dos ventanas de tiempo (2020 y 2022) con whoosh. Ken Burns hacia dentro.

**[17-24 s]** "Con apalancamiento doble, las ganancias y las pérdidas se duplican: el bot no cambió, cambió el mercado."
> BOCETO: curvas reales de `series/extra-v58.json` (curvas 0 y 1) dibujándose una tras otra; contadores verde y rojo; flash blanco al cambio de curva.

**[24-36 s]** "¿Qué cambió entre un año y otro? Solo el mercado. Es beta apalancada, no una ventaja propia. Y en un año bajista, a 2x el drawdown reventaría una cuenta de fondeo."
> BOCETO: texto grande "BETA APALANCADA ≠ VENTAJA" en la zona segura del centro; ambas curvas por detrás a baja opacidad.

**[36-43 s]** "Mismo bot, otro mercado, otro signo. El video completo está en el canal. No es asesoría financiera."
> BOCETO: vuelven "+13.1%" y "−17.0%" del primer cuadro (loop); texto pequeño "El trading no se promete: se prueba."

---

## Descripción (YouTube)
Simulé qué habría hecho el bot en vivo (paridad de riesgo, filtro macro VIX/crédito, apalancamiento 2x, 3 bps por rotación) en cuatro ventanas: último mes (−1.0%), últimos 6 meses (+6.7%), COVID 2020 (+13.1%) y mercado bajista 2022 (−17.0%). El mismo bot cambia de signo según el mercado: es beta apalancada, no una ventaja propia. Con precios de Dukascopy y Yahoo Finance, el mes y los 6 meses dan −1.5% y +6.2%.
Datos completos: https://atlas-lab-one.vercel.app (experimento #58)
Contenido educativo. No es asesoría financiera ni recomendación de inversión.

Capítulos: 0:00 Gancho · 0:15 Qué es un "what-if" · 1:00 La beta, con un ejemplo · 1:35 Los cuatro resultados · 1:55 Cómo leer cada escenario · 2:30 Dos fuentes de precios · 3:00 Por qué: beta apalancada · 3:40 Con tu capital · 4:05 Lo que este experimento no dice · 4:40 Conclusión y cierre

Etiquetas: bot de trading, simulación, what-if, COVID 2020, mercado bajista 2022, beta apalancada, apalancamiento 2x, paridad de riesgo, backtest, gestión de riesgo, trading con datos, ATLAS Lab

## Rúbrica (autoevaluación, escala 1-5)
| Criterio | Nota | Por qué |
|---|---|---|
| hook_0_3s | 4 | Contraste ganó/perdió en voz; +13.1% y −17.0% en pantalla |
| ritmo | 4 | Pantalla dividida, barras y tabla; el bloque de fuentes de precios es el más seco |
| promesa_cumplida | 5 | Promete explicar por qué cambia de signo y lo explica con beta |
| potencial_loop | 4 | Cierra con las mismas dos cifras con que abre |
| claridad_no_traders | 4 | Define what-if, beta, swaps y drawdown |
| honestidad_atlas | 5 | Declara que los precios originales no se conservan y da la segunda fuente |
| audio | 4 | Voz por clonar; un golpe de bajo |
| cta | 4 | Una petición y remite al video completo |
Promedio: **4.25** (≥ 4.0). Hook del Short 4 (≥ 4) y honestidad 5: no descalificado.

## Otros temas de este experimento
- Tema 1 de 3: `exp-058-escenarios-bot-2x.md` — ¿Cuánto daría mi bot? +13.1% en 2020, −17.0% en 2022
- Tema 2 de 3: `exp-058-t2-precios-originales-perdidos.md` — +6.7% o +6.2%: el resultado de mi bot que ya no se puede repetir con los precios originales
- Tema 3 de 3: `exp-058-t3-costos-192-riesgo-real.md` — $192 de costos en 6 meses: el riesgo de un bot a 2x no está en las comisiones

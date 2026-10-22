# Experimento #58 — Escenarios: capital del bot (1x / 2x / volatilidad objetivo) · Tema 2 de 3: dos fuentes de precios, dos resultados

Estado del guion: **BORRADOR — pendiente de aprobación**
Tema 2 de 3 del experimento #58 · Qué aporta frente a los otros temas: es el tema de la REPRODUCIBILIDAD y de los datos. Explica por qué el último mes (−1.0%) y los 6 meses (+6.7%) no se pueden repetir hoy, qué cifras salen con precios de Dukascopy y Yahoo Finance (−1.5% y +6.2%) y por qué 2020 y 2022 coinciden exactamente. El tema 1 cuenta el contraste COVID contra mercado bajista; el tema 3 trata de los costos y del riesgo real.
Estado del experimento: **parcial** (neutral): simulación hipotética; a 2x el mismo bot gana +13.1% en 2020 y +6.7% en 6 meses, pero pierde −17.0% en 2022 · Serie: G ("Construyendo un bot, y por qué murió") · Relacionado: #57, #50
Datos usados: `experiments.json` (v=58: verdict, analysis, notes, metrics, kpis, params_view, chart.bars, capital.note), `exp_details.json` (extra-v58: algo, code.snippet, filters), `series/extra-v58.json` (4 curvas: COVID 2020, mercado bajista 2022, último mes y últimos 6 meses hasta 2026-06-12) y la tabla «Con tu capital» (`docs/youtube/*-capital.md`, fila #58, solo la curva del COVID).

## Títulos (3 opciones)
1. +6.7% o +6.2%: el resultado de mi bot que ya no se puede repetir con los precios originales
2. Dos fuentes de precios, dos resultados: −1.0% contra −1.5%, +6.7% contra +6.2%
3. Por qué 2020 y 2022 coinciden exactamente y el último mes no

## Miniatura (1280×720)
Fondo `#09090b`. Dos tarjetas apiladas. Arriba, gris y con una raya diagonal roja `#e11d2a`: «+6.7%» con la etiqueta pequeña «precios originales». Abajo, verde `#22c55e`: «+6.2%» con la etiqueta «Dukascopy + Yahoo». Texto grande blanco: «DOS PRECIOS». Logo ATLAS esquina superior derecha.

---

## VIDEO LARGO (16:9, ≈ 5 min, experimento de datos)

**[0:00 — Gancho]** (pantalla: «+6.7%» que se transforma en «+6.2%»)
Mi simulación dio +6.7% en seis meses. Con otros precios, dio +6.2%. Y los precios con los que hice la primera cifra ya no existen.
> BOCETO: contador «+6.7%» en gris que se tacha y es reemplazado por «+6.2%» en verde; golpe de bajo y sacudida al tacharse.

**[0:15 — Este experimento]** (pantalla: rótulo «Experimento #58 · Escenarios: capital del bot (1x / 2x / volatilidad objetivo)»)
Este es el experimento #58 de ATLAS Lab: escenarios del capital del bot. Todos los resultados están en la página del experimento. Hoy hablo de la parte menos vistosa y más importante de un resultado: de dónde salieron los precios.
> BOCETO: rótulo con «#58» y el nombre del experimento; logo ATLAS; whoosh suave.

**[0:35 — Qué significa reproducir un resultado]** (pantalla: una receta con ingredientes)
Un resultado es reproducible si cualquiera, con los mismos datos y las mismas reglas, obtiene la misma cifra. Es como una receta: si los ingredientes cambian, el plato también. Si no puedes repetir una cifra, es una anécdota, no una medición.
> BOCETO: ilustración de una receta con cuatro ingredientes («precios», «reglas», «costos», «fechas»); uno desaparece y el plato cambia de color. Rotulada, sin datos.

**[1:05 — Qué se simuló]** (pantalla: esquema del bot y cuatro ventanas)
Es una simulación hipotética, un «qué habría pasado»: el bot en vivo con paridad de riesgo, filtro macro de VIX y crédito, apalancamiento 2x y 3 puntos básicos de costo por unidad de rotación. Cuatro ventanas: el último mes, los últimos 6 meses hasta el 12 de junio de 2026, el COVID de 2020 y el mercado bajista de 2022.
> BOCETO: esquema del bot (3 cajas) y línea de tiempo con las 4 ventanas; recuadro `params_view`: «1x / 2x / vol-targeting · 3 bps · capital $50,000 en 2020 y 2022».

**[1:50 — De dónde vino cada precio]** (pantalla: dos columnas de origen de datos)
El mes y los 6 meses se calcularon con precios de MetaTrader 5 de esa fecha, que no se conservan. Los años 2020 y 2022 se calcularon con el histórico de la cesta. Para poder mostrar curvas que se puedan repetir hoy, recalculé el mes y los 6 meses con precios de Dukascopy y Yahoo Finance.
> BOCETO: dos columnas: «MetaTrader 5, de esa fecha — ya no se conservan» (gris, con candado) y «Dukascopy y Yahoo Finance — reproducible hoy» (verde). Flecha del recálculo.

**[2:35 — Las dos cifras, lado a lado]** (pantalla: tabla animada)
| Ventana (a 2x) | Precios originales | Dukascopy y Yahoo Finance |
|---|---|---|
| Último mes | −1.0% | −1.5% |
| Últimos 6 meses | +6.7% | +6.2% |
| 2020 (COVID) | +13.1% | +13.1% |
| 2022 (mercado bajista) | −17.0% | −17.0% |
El mes pasa de −1.0% a −1.5%; los 6 meses, de +6.7% a +6.2%. En 2020 y 2022 las dos fuentes coinciden exactamente.
> BOCETO: la tabla entra fila a fila; las filas de 2020 y 2022 se marcan con «coinciden» en verde; las filas del mes y 6 meses con «cambian» en ámbar. Curvas 2 y 3 de la serie al lado, rotuladas «hasta 12-jun-2026».

**[3:10 — Qué cambia y qué no]** (pantalla: dos columnas «cambia» y «no cambia»)
Lo que cambia es la cifra de las ventanas cortas. Lo que no cambia es el signo: el mes sigue siendo negativo y los 6 meses, positivos, con cualquiera de las dos fuentes. La ficha no explica la diferencia. En general, dos proveedores pueden registrar el precio de forma algo distinta, pero eso es una razón posible, no una medida de este experimento.
> BOCETO: dos columnas: «Cambia: −1.0% → −1.5% · +6.7% → +6.2%» y «No cambia: el signo de cada ventana · 2020 y 2022 idénticos». Etiqueta gris «razón posible, no medida».

**[3:40 — Por qué las ventanas cortas pesan menos]** (pantalla: cuatro ventanas de distinto ancho)
El mes tiene 23 puntos y los 6 meses, 127. Un mes cualquiera puede salir bien o mal por azar, así que su cifra importa menos que la de un año completo. Por eso las curvas de 2020 y 2022 son las que más se pueden defender: son años completos, con mercados muy distintos, y coinciden en las dos fuentes.
> BOCETO: cuatro ventanas de ancho proporcional; etiquetas «23 puntos» y «127 puntos» sobre las dos primeras; las de 2020 y 2022 con candado verde «reproducible».

**[4:05 — Con tu capital]** (pantalla: tarjeta «Con tu capital»)
Con las dos ventanas que sí se pueden repetir: con $10,000, el escenario del COVID da +$1,315 y el de 2022, −$1,697. Con $100,000, +$13,149 y −$16,967. Son escenarios en retrospectiva, no una predicción.
> BOCETO: tarjeta de capital con dos filas, 2020 en verde y 2022 en rojo, y dos columnas ($10,000 y $100,000). Aviso al pie: «Simulación hipotética, no es una promesa».

**[4:30 — Conclusión]** (pantalla: la tabla de las dos fuentes)
Publico las dos cifras y marco cuál se puede repetir. Un resultado honesto incluye de dónde salieron sus datos.
> BOCETO: la tabla queda fija; el candado verde crece sobre las filas de 2020 y 2022.

**[4:45 — Ficha del experimento #58 y cierre]** (pantalla: tarjeta con la ficha y la URL)
Ficha del experimento #58. Estado: parcial. Cifra clave: a 2x, +13.1% en 2020 y −17.0% en 2022. Filtro que decidió: no tiene criterio de aprobado; es una simulación hipotética. Lección: el resultado sigue al mercado, es beta apalancada. Revísalo completo en atlas-lab-one.vercel.app/e/58. Contenido educativo, no es asesoría financiera. El trading no se promete: se prueba.
> BOCETO: tarjeta en pantalla con las 4 líneas de la ficha (estado ámbar «parcial») y la URL `atlas-lab-one.vercel.app/e/58` en grande; fundido a la frase de marca.

---

## SHORT (9:16, ≈ 44 s) — "Dos precios, dos cifras"
Título del Short: Mi bot dio +6.7%… o +6.2%, según los precios #Shorts

**[0-3 s]** "Mi simulación dio más 6.7%. Con otros precios, más 6.2%."
> BOCETO: B-roll vertical de pantallas de mercado con overlay 0.6; «+6.7%» gigante que se tacha y es reemplazado por «+6.2%»; golpe de bajo y sacudida. Karaoke con «OTROS PRECIOS» en rojo.

**[3-14 s]** "Simulé qué habría hecho mi bot en los últimos seis meses, con apalancamiento doble. Usé precios de MetaTrader 5 de esa fecha. Esos precios ya no se conservan."
> BOCETO: esquema del bot en 3 cajas; el icono de los datos de MetaTrader 5 se apaga con candado; whoosh. Ken Burns hacia dentro.

**[14-26 s]** "Lo recalculé con precios de Dukascopy y Yahoo Finance. El último mes: de menos 1.0 a menos 1.5. Los seis meses: de más 6.7 a más 6.2."
> BOCETO: dos filas de la tabla con flechas de cambio; tick por fila; flash blanco al entrar.

**[26-37 s]** "En cambio, 2020 y 2022 coinciden exactamente: más 13.1 y menos 17.0. Esas dos sí se pueden repetir hoy."
> BOCETO: dos filas con «coinciden» en verde; candado verde.

**[37-44 s]** "Un resultado que no puedes repetir es una anécdota. Video completo en el canal y experimento 58 completo en el enlace. ¿Más 6.7… o más 6.2? Depende de los precios."
> BOCETO: vuelve «+6.7%» tachado y «+6.2%» del primer cuadro (loop); rótulo «Experimento #58 completo en el enlace»; texto pequeño «No es asesoría financiera · El trading no se promete: se prueba».

---

## Descripción (YouTube)
https://atlas-lab-one.vercel.app/e/58?utm_source=youtube&utm_medium=video&utm_campaign=exp058-t2
Ficha del experimento #58: parcial (neutral) · a 2x: +13.1% en 2020 y −17.0% en 2022 · el mes y los 6 meses cambian de −1.0% y +6.7% a −1.5% y +6.2% con precios de Dukascopy y Yahoo Finance.
Los precios originales de MetaTrader 5 de las ventanas cortas no se conservan, así que publico las dos cifras y marco cuáles se pueden repetir. Las de 2020 y 2022 coinciden exactamente en ambas fuentes.
Contenido educativo. No es asesoría financiera ni recomendación de inversión.
Descripción del Short (primera línea): https://atlas-lab-one.vercel.app/e/58?utm_source=youtube&utm_medium=short&utm_campaign=exp058-t2

Capítulos: 0:00 Gancho · 0:15 Este experimento · 0:35 Qué significa reproducir · 1:05 Qué se simuló · 1:50 De dónde vino cada precio · 2:35 Las dos cifras, lado a lado · 3:10 Qué cambia y qué no · 3:40 Por qué las ventanas cortas pesan menos · 4:05 Con tu capital · 4:30 Conclusión · 4:45 Ficha del experimento #58 y cierre

Etiquetas: reproducibilidad, fuentes de datos, Dukascopy, MetaTrader 5, Yahoo Finance, simulación what-if, bot de trading, backtest, apalancamiento 2x, datos de mercado, trading con datos, ATLAS Lab

## Rúbrica (autoevaluación, 1–5)
| Pieza | hook_0_3s | ritmo | promesa_cumplida | potencial_loop | claridad_no_traders | honestidad_atlas | audio | cta | Promedio |
|---|---|---|---|---|---|---|---|---|---|
| Largo | 4 | 4 | 5 | 4 | 4 | 5 | 4 | 4 | 4.25 |
| Short | 4 | 4 | 5 | 5 | 4 | 5 | 4 | 4 | 4.38 |

Hook ≥ 4 ✓ · honestidad 5 ✓. Punto débil: es un tema seco (procedencia de datos); la receta y el candado verde lo hacen visual. La ficha no explica por qué difieren las fuentes y el video lo dice, marcando la razón general como no medida.

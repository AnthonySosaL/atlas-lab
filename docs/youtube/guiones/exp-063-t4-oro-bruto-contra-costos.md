# Experimento #63 — Efecto nocturno (sesión diurna vs. nocturna) · Tema 4 de 4: el oro de noche, en bruto y con costos

Estado del guion: **BORRADOR — pendiente de aprobación**
Tema 4 de 4 del experimento #63 · Qué aporta frente a los otros temas: es el tema del COSTO y de la letra pequeña. Explica qué son el spread y el swap, por qué un efecto que exige operar todos los días es tan sensible a ellos y cómo el Sharpe del oro de noche pasa de 0.99 en bruto a −3.11 con los costos reales (experimento 71). El tema 1 abre con el panorama de los 7 activos; el tema 2 trata de los índices; el tema 3, del posible artefacto del rollover.
Estado del experimento: **no concluyente** (estudio descriptivo bruto: sin señal de trading, sin costos, sin prueba fuera de muestra)
Serie: F (anomalías y estacionalidad) · Continúa en #71 (el mismo efecto con costos reales)
Datos usados: `experiments.json` (v=63: verdict, analysis, kpis, metrics, params_view, capital; v=71: verdict, analysis, kpis, metrics, params_view), `exp_details.json` (extra-v63: filters), `series/extra-v63.json` ([0] oro solo de noche, bruto; [1] oro comprar y esperar) y la tabla «Con tu capital» (`docs/youtube/*-capital.md`, filas #63 y #71).
Experimento de datos: el video explica qué se midió y para qué sirve; no hay una estrategia que aprobar o reprobar.

## Títulos
1. Oro de noche: Sharpe 0.99 en bruto, −3.11 con los costos reales del broker
2. Con $100,000, comprar el oro solo de noche: +$27,208 en bruto… y −$53,695 con costos
3. Spread y swap: lo que se come una ventaja pequeña

## Miniatura
Fondo `#09090b`. Un lingote de oro con una luna encima; a su izquierda, «0.99» en verde `#22c55e`; a su derecha, «−3.11» en rojo `#e11d2a`, unidos por una flecha que cae. Texto blanco: «CON COSTOS». Logo ATLAS esquina inferior derecha.

---

## VIDEO LARGO (≈ 5 min, experimento de datos)

**[0:00 — Gancho]** (pantalla: medidor del Sharpe del oro que cae de 0.99 a −3.11)
El oro rinde de noche con un Sharpe de 0.99, en bruto. Con los costos reales del broker, el mismo efecto da −3.11.
> BOCETO: medidor de Sharpe con la aguja subiendo a «0.99» (verde) y cayendo a «−3.11» (rojo) con una pila de monedas; golpe de bajo y sacudida en la caída.

**[0:20 — Este experimento]** (pantalla: rótulo «Experimento #63 · Efecto nocturno (sesión diurna vs. nocturna)»)
Este es el experimento #63 de ATLAS Lab: el efecto nocturno. Todos los resultados están en la página del experimento. Las cifras con costos reales son del experimento 71, su continuación. Hoy junto las dos para ver qué pasa cuando un patrón bruto se encuentra con la factura.
> BOCETO: rótulo con «#63» y, al lado, uno más pequeño «#71 · con costos reales»; logo ATLAS; whoosh suave.

**[0:45 — Spread y swap]** (pantalla: dos monedas con etiquetas)
Operar tiene dos costos principales. El spread es la diferencia entre el precio al que puedes comprar y el precio al que puedes vender: pagas por entrar y por salir. El swap es el interés que cobra el broker por mantener una posición abierta de un día para otro. Un CFD cobra swaps aunque el precio no se mueva.
> BOCETO: pantalla con dos precios «compra» y «venta» y una brecha rotulada «spread»; reloj de medianoche con una moneda que cae, rotulado «swap». Ilustración, sin datos.

**[1:25 — Por qué este efecto es tan sensible]** (pantalla: calendario con entradas y salidas diarias)
Para capturar el efecto nocturno hay que entrar al cierre y salir a la apertura, todos los días. Eso son dos operaciones diarias, y se paga en cada una. Cuando la ventaja por operación es pequeña, el costo manda. Por eso un patrón en bruto puede ser real y aun así no ser cobrable.
> BOCETO: calendario donde cada día muestra una flecha verde de entrada y una roja de salida; contador de costos que sube.

**[2:00 — Con tu capital: el bruto]** (pantalla: tarjeta «Con tu capital»; curva del oro solo de noche contra la gris)
Primero, el bruto. Con $10,000, comprar el oro solo de noche de 2012 a 2024 da +$2,721; mantener el oro, +$6,698. Con $100,000: +$27,208 contra +$66,979. La peor caída desde un máximo fue de −$2,266, un −2.3%. Fíjate: aun en bruto, ganó menos dinero que mantener el oro.
> BOCETO: curva del oro solo de noche (verde) por debajo de la gris de comprar y esperar; sello «BRUTO · SIN COSTOS».

**[2:40 — Con tu capital: el neto]** (pantalla: tarjeta del experimento 71)
Ahora, el neto. El experimento 71 aplica el spread y el swap reales: unos 2.5 puntos básicos por día en el oro, y entre 4.5 y 4.7 en el petróleo. Resultado en el oro: Sharpe de −3.11 y −5.8% al año. Con $100,000, la curva termina en −$53,695, mientras mantener el oro dio +$66,979.
> BOCETO: tarjeta del #71 con «costo: 2.5 bps/día», «Sharpe −3.11», «−5.8% al año», y las barras −$53,695 (rojo) contra +$66,979 (verde).

**[3:20 — Fuera de muestra]** (pantalla: línea de tiempo 2007–2013)
El experimento 71 también probó el oro neto en 2007 a 2013, un periodo que no se usó para mirar los datos: Sharpe de −7.34. El resultado con costos no depende del periodo.
> BOCETO: línea de tiempo con 2007–2013 resaltado y la cifra «−7.34» en rojo; sello ✕.

**[3:50 — ¿Entonces el efecto no existe?]** (pantalla: dos columnas «en bruto» y «con costos»)
Existe en bruto. El experimento 71 calcula un Deflated Sharpe de 1.00 para el oro bruto: el ajuste que descuenta la suerte dice que no es azar. Pero cobrar el efecto cuesta más de lo que deja. Las dos cosas son ciertas a la vez.
> BOCETO: dos columnas: «En bruto: Sharpe 0.99 · Deflated Sharpe 1.00» (verde) y «Con costos: Sharpe −3.11» (rojo).

**[4:20 — Quién sí puede]** (pantalla: texto de la ficha)
La ficha del 71 lo lee así: es el mismo muro de costos que mató a las estrategias de alta frecuencia; la ventaja es real pero muy pequeña, y confirma la ventaja institucional: ellos tienen ejecución barata; el inversor minorista no.
> BOCETO: texto de la ficha con «ejecución barata» resaltada; dos iconos: «institución» (costo bajo) y «minorista» (costo alto).

**[4:40 — Conclusión]** (pantalla: el medidor del inicio)
Un patrón bruto no es una estrategia. La factura decide.
> BOCETO: el medidor con la aguja en −3.11 y el 0.99 tachado.

**[4:50 — Ficha del experimento #63 y cierre]** (pantalla: tarjeta con la ficha y la URL)
Ficha del experimento #63. Estado: no concluyente. Cifra clave: oro de noche, Sharpe de 0.99 en bruto; con costos reales, −3.11 (experimento 71). Filtro que decidió: los costos, spread y swap. Lección: un patrón puede ser real y no ser cobrable. Revísalo completo en atlas-lab-one.vercel.app/e/63. Contenido educativo, no es asesoría financiera. El trading no se promete: se prueba.
> BOCETO: tarjeta en pantalla con las 4 líneas de la ficha (estado ámbar «no concluyente») y la URL `atlas-lab-one.vercel.app/e/63` en grande; fundido a la frase de marca.

---

## SHORT (9:16, ≈ 44 s) — "La factura"

**[0-3 s]** "Oro de noche: Sharpe de 0.99. Con los costos reales del broker: menos 3.11."
> BOCETO: medidor que cae de «0.99» a «−3.11»; b-roll de lingotes de oro, kb=in, overlay 0.6; golpe de bajo + sacudida. Karaoke con «COSTOS» en rojo.

**[3-14 s]** "Comprar el oro al cierre y venderlo a la apertura, todos los días. En bruto, de 2012 a 2024, con 100,000 dólares: más 27,208. Mantener el oro: más 66,979."
> BOCETO: curva verde del oro de noche bajo la gris de comprar y esperar; contadores; whoosh. Ken Burns hacia dentro.

**[14-26 s]** "Pero cada día pagas spread y swap: unos 2.5 puntos básicos por día en el oro. Con costos, el Sharpe cae a −3.11 y la curva termina en menos 53,695 dólares."
> BOCETO: pila de monedas que crece; barras −$53,695 (roja) y +$66,979 (verde); flash blanco.

**[26-37 s]** "El efecto existe en bruto: no es azar. Pero cobrarlo cuesta más de lo que deja. Es el muro de los costos."
> BOCETO: dos columnas «bruto» y «con costos»; sello ✕.

**[37-44 s]** "Video completo en el canal y experimento 63 completo en el enlace. 0.99… o menos 3.11. La factura decide."
> BOCETO: vuelve el medidor del primer cuadro (loop); rótulo «Experimento #63 completo en el enlace»; texto pequeño «No es asesoría financiera · El trading no se promete: se prueba».

---

## Descripción (YouTube)
https://atlas-lab-one.vercel.app/e/63?utm_source=youtube&utm_medium=video&utm_campaign=exp063-t4
Ficha del experimento #63: no concluyente · oro de noche: Sharpe 0.99 en bruto; con spread y swap reales (experimento 71), −3.11 y −5.8% al año · con $100,000: +$27,208 en bruto y −$53,695 con costos.
Qué son el spread y el swap y por qué un efecto que exige operar todos los días es tan sensible a ellos. El efecto existe en bruto, pero los costos lo entierran.
Contenido educativo. No es asesoría financiera ni recomendación de inversión.
Descripción del Short (primera línea): https://atlas-lab-one.vercel.app/e/63?utm_source=youtube&utm_medium=short&utm_campaign=exp063-t4

Capítulos: 0:00 Gancho · 0:20 Este experimento · 0:45 Spread y swap · 1:25 Por qué este efecto es tan sensible · 2:00 Con tu capital: el bruto · 2:40 Con tu capital: el neto · 3:20 Fuera de muestra · 3:50 ¿Entonces el efecto no existe? · 4:20 Quién sí puede · 4:40 Conclusión · 4:50 Ficha del experimento #63 y cierre

Etiquetas: spread, swap, costos de trading, efecto nocturno, oro, overnight, CFD, anomalías de mercado, Sharpe ratio, backtest, trading con datos, ATLAS Lab

## Rúbrica (autoevaluación)
| Pieza | hook_0_3s | ritmo | promesa_cumplida | potencial_loop | claridad_no_traders | honestidad_atlas | audio | cta | Promedio |
|---|---|---|---|---|---|---|---|---|---|
| Largo | 5 | 4 | 5 | 4 | 4 | 5 | 4 | 4 | 4.38 |
| Short | 5 | 4 | 5 | 5 | 4 | 5 | 4 | 4 | 4.50 |

Hook ≥ 4 ✓ · honestidad 5 ✓. Punto débil: mezcla cifras de dos fichas (#63 y #71); el video lo avisa desde el inicio y cita de cuál sale cada cifra.

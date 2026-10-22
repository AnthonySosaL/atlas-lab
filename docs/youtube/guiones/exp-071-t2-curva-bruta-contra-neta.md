# Experimento #71 — Tema 2: La curva casi perfecta (el oro de noche: −2.3% de caída en bruto, −53.7% con costos reales)

**Tema 2 de 3 del experimento #71** · Qué aporta frente a los otros temas: es el tema «con tu capital y el calendario». Pone la curva bruta del oro de noche (experimento 63) junto a la neta del 71 y a comprar y esperar, año por año, para ver cómo una curva casi sin caídas se convierte en 12 años de 13 en rojo. Se entiende sin los otros temas.
Estado del guion: **BORRADOR — pendiente de aprobación**
Estado del experimento: **murió** (el efecto existe en bruto, oro Sharpe 0.99, pero con spread y swap reales cae a −3.11, −5.8% al año)
Serie: F (anomalías y estacionalidad). Continúa el #63.
Datos usados: `series/extra-v71.json` ([0] oro de noche neto de costos, [1] oro comprar y esperar) y `series/extra-v63.json` ([0] oro de noche bruto) para la peor caída, los retornos por año calendario y el tiempo bajo el agua (cifras calculadas de las curvas) · `experiments.json` (v=71: kpis, metrics, verdict, analysis; v=63: kpis, verdict, capital.note) · tabla «Con tu capital» (filas #63: +$27,208; #71: −$53,695; comprar y esperar: +$66,979).
Producción (CLAUDE.md del canal): b-roll real detrás de cada escena con overlay 0.6, Ken Burns alternando, subtítulos karaoke en MAYÚSCULAS, un dato visual por escena. Colores: rojo `#e11d2a`, verde `#22c55e`, fondo `#09090b`.

## Títulos
1. De −2.3% a −53.7%: la curva del oro de noche, antes y después de costos
2. 12 de 13 años en rojo: el oro de noche con costos reales
3. Una curva casi perfecta que los costos destruyen (oro, 2012–2024)

## Miniatura
Fondo `#09090b`. Dos curvas sobre un lingote tenue: una verde `#22c55e` casi recta hacia arriba con «−2.3%» y otra roja `#e11d2a` en picada con «−53.7%». Texto grande: «MISMA IDEA». Logo ATLAS arriba a la derecha.

---

## VIDEO LARGO (≈ 6 min)

**[0:00 — Gancho]** (pantalla: curva verde del oro de noche, casi sin caídas, con el contador «caída máxima −2.3%»; después se vuelve roja y el contador salta a «−53.7%»)
BOCETO: la curva avanza de 2012 a 2024 en verde; al cruzar la pantalla se tiñe de rojo y cae; golpe de bajo y sacudida al llegar a −53.7%.
> Esta curva casi no tiene caídas: en 13 años, su peor tramo fue de −2.3%. Es el oro comprado solo de noche. Ahora la misma idea, restando lo que cobra el broker: la peor caída es de −53.7%.

**[0:18 — Qué experimento es]** (pantalla: rótulo «Experimento #71 · ATLAS Lab» y el nombre debajo)
BOCETO: rótulo con el número 71 y el nombre «Efecto nocturno con costos reales + validación fuera de muestra»; logo en la esquina.
> Este es el experimento #71 de ATLAS Lab: efecto nocturno con costos reales y validación fuera de muestra. Todos los resultados están en la página del experimento.

**[0:40 — La curva bruta]** (pantalla: reloj del cierre a la apertura; curva de `series/extra-v63.json[0]`)
BOCETO: reloj que va del cierre a la apertura; curva verde de 2012 a 2024; tarjetas: «+$27,208 con $100,000», «Sharpe 0.99», «peor caída −2.3%».
> La idea del experimento 63: comprar oro al cierre y venderlo a la apertura, cada día. Solo estás dentro de noche. En bruto, sin costos, con $100,000 gana $27,208 entre 2012 y 2024, con un Sharpe de 0.99 y una peor caída de −2.3%. El Sharpe mide cuánto rindes por cada unidad de riesgo, y la caída, la peor bajada desde un máximo. En 9 de los 13 años, la curva sube. Hay que decirlo: era una cifra bruta, y el tramo nocturno puede reflejar el rollover de los datos.

**[1:30 — La referencia: quedarse con el oro]** (pantalla: curva gris de comprar y esperar; marcas «−41.3%» y «7.8 años bajo el agua»)
BOCETO: curva gris con un valle largo sombreado entre octubre de 2012 y julio de 2020; contador de años.
> Comparada con quedarse con el oro todo el tiempo, la curva nocturna parecía un sueño. Comprar y esperar gana $66,979, pero con una caída de −41.3% y cerca de 7.8 años por debajo de su máximo, de octubre de 2012 a julio de 2020. La versión nocturna ganaba menos, pero con casi ninguna caída.

**[2:10 — El peaje]** (pantalla: caseta de peaje con una moneda cayendo cada noche; contador «2.5 bps/día»)
BOCETO: moneda que cae cada noche sobre el calendario; etiqueta «spread + swap del broker»; un punto básico = centésima parte de 1%.
> Ahora el experimento 71 resta lo que cobra el broker: el spread, que es la diferencia entre el precio de compra y el de venta, y el swap, el interés por mantener la posición de un día para otro. En el oro son 2.5 puntos básicos por día, y un punto básico es la centésima parte de un 1%. Es un peaje diario.

**[2:50 — La curva neta]** (pantalla: curva de `series/extra-v71.json[0]` cayendo, junto a las dos anteriores)
BOCETO: las tres curvas juntas: verde bruta arriba, gris de comprar y esperar, roja neta en picada; contadores finales.
> La curva neta cae casi en línea recta: −$53,695 con $100,000, con una caída máxima de −53.7%, casi igual a la pérdida final porque casi nunca sube. El Sharpe del oro pasa de 0.99 a −3.11, y el retorno es de −5.8% al año.

**[3:25 — Año por año]** (pantalla: tabla con cuatro años elegidos)
BOCETO: barras por año; las del bruto en verde y las del neto casi todas rojas; la de 2020 en verde pálido.
| Año | Oro de noche, bruto | Oro de noche, neto |
|---|---|---|
| 2013 | +4.8% | −3.0% |
| 2015 | +3.6% | −4.1% |
| 2020 | +8.7% | +0.6% |
| 2023 | −1.1% | −8.5% |
> En bruto, el oro de noche tuvo 9 años positivos de 13. Con costos, 12 de 13 años en rojo: solo 2020, el mejor año de la versión bruta, se salva con +0.6%. En 2023 la bruta ya perdía 1.1% y la neta, 8.5%. Cada año, el peaje es más grande que la ventaja.

**[4:10 — Con tu capital]** (pantalla: tarjeta «Con tu capital» con tres curvas y selector $10,000 / $100,000)
BOCETO: tres filas: «bruto +$27,208 · −2.3%», «neto −$53,695 · −53.7%», «comprar y esperar +$66,979 · −41.3%»; aviso ámbar sobre la fila bruta: «sin costos».
> Con $100,000: en bruto, +$27,208 y una caída de −2.3%; neto de costos, −$53,695 y una caída de −53.7%; mantener el oro, +$66,979 y una caída de −41.3%. Con $10,000 serían +$2,721, −$5,369 y +$6,698. Lo bruto no es lo que te pagan.

**[4:50 — Una nota sobre cómo contar el año]** (pantalla: dos cifras: «−5.8% compuesto» y «−4.7% media diaria × 252»)
BOCETO: dos tarjetas que se voltean: «compuesto en años calendario: −5.8%» y «sumando retornos simples, media diaria por 252: −4.7%».
> El experimento calcula el retorno anual del oro de dos maneras: compuesto en años calendario, −5.8%, y sumando retornos simples con la media diaria por 252, −4.7%. Las dos son negativas. Cambiar la forma de contar no cambia el veredicto.

**[5:15 — Preguntas de un escéptico]** (pantalla: tres tarjetas: «¿broker más barato?», «¿costo actual en todo el histórico?», «¿solo el oro?»)
BOCETO: tres tarjetas que se voltean con «mejoraría, no medido», «limitación» y «también petróleo».
> Preguntas que me haría un escéptico. ¿Y si el broker cobrara menos? Probablemente mejoraría, pero usé los costos que leí del broker. ¿Y el costo de hoy aplicado a todo el histórico? Es una limitación. ¿Y solo el oro? También probé Brent y WTI, que pagan de 4.5 a 4.7 puntos básicos por día; entre los tres activos, el neto va de −5.8% a −10.3% al año.

**[5:40 — Ficha del experimento #71]** (pantalla: tarjeta con la ficha y la URL abajo)
BOCETO: tarjeta con cinco líneas que entran con tick y, al final, la URL resaltada en verde.
> Ficha del experimento 71. Estado: murió. Cifras clave: oro de noche, Sharpe 0.99 en bruto y −3.11 neto; −5.8% al año; fuera de muestra, −7.34. Lo que decidió: el filtro de costos. Lección: una curva bruta bonita no es una estrategia; pregunta siempre por los costos. Revísalo completo en atlas-lab-one.vercel.app/e/71.

**[6:10 — Cierre]**
BOCETO: las dos curvas, verde y roja, y el sello ✕; logo.
> Todos los datos en atlas-lab-one.vercel.app, experimento 71. El trading no se promete: se prueba. Contenido educativo, no es asesoría financiera.

---

## SHORT (9:16, ≈ 50 s)

**[0-3 s]** (boceto: curva verde del oro con «−2.3%» que se vuelve roja con «−53.7%»; b-roll de lingotes, kb=in; golpe de bajo)
> Esta curva del oro casi no tiene caídas: −2.3% en 13 años. Con costos reales, −53.7%.

**[3-14 s]** (boceto: reloj del cierre a la apertura; tarjeta «+$27,208»; whoosh)
> Comprar el oro al cierre y venderlo a la apertura, cada noche, de 2012 a 2024. En bruto, con 100,000 dólares: +$27,208.

**[14-26 s]** (boceto: moneda roja cayendo cada noche; contador «2.5 bps por día»; curva roja cayendo hasta −$53,695)
> Pero el broker cobra spread y swap: 2.5 puntos básicos por día. Restando eso, la misma idea termina en −$53,695.

**[26-38 s]** (boceto: barras por año: 9 de 13 verdes en bruto; 12 de 13 rojas con costos; 2020 con +0.6%)
> Año por año: en bruto, 9 de 13 años positivos. Con costos, 12 de 13 en rojo. Solo 2020 se salva, con +0.6%.

**[38-45 s]** (boceto: curva gris de comprar y esperar: +$66,979; texto «mantener el oro»)
> Y quedarte con el oro todo el tiempo: +$66,979.

**[45-50 s]** (boceto: texto «Experimento #71 completo en el enlace»; logo)
> Video completo en el canal y experimento #71 completo en el enlace. ¿Cuánto cuesta tu peaje diario?

Gancho alterno A: «Una curva sin caídas… hasta que restas el peaje.» · B: «12 de 13 años en rojo: el oro de noche con costos reales.»

## Descripción de YouTube — video largo
https://atlas-lab-one.vercel.app/e/71?utm_source=youtube&utm_medium=video&utm_campaign=exp071-t2
Ficha: experimento #71, efecto nocturno con costos reales. Estado: murió. Oro de noche: Sharpe 0.99 en bruto y −3.11 neto; −5.8% al año; con $100,000, −$53,695 contra +$66,979 de mantener el oro.
La misma idea antes y después de costos, año por año: caída máxima de −2.3% en bruto y de −53.7% neta, 12 de 13 años en rojo. Costos leídos del broker: 2.5 puntos básicos por día.
Contenido educativo. No es asesoría financiera ni recomendación de inversión.

## Descripción de YouTube — Short
https://atlas-lab-one.vercel.app/e/71?utm_source=youtube&utm_medium=short&utm_campaign=exp071-t2
Ficha: experimento #71, murió. Oro de noche: caída máxima −2.3% en bruto, −53.7% con costos; −$53,695 con $100,000. Contenido educativo, no es asesoría financiera.

## Capítulos
0:00 Gancho · 0:18 Qué experimento es · 0:40 La curva bruta · 1:30 La referencia: quedarse con el oro · 2:10 El peaje · 2:50 La curva neta · 3:25 Año por año · 4:10 Con tu capital · 4:50 Cómo contar el año · 5:15 Preguntas de un escéptico · 5:40 Ficha del experimento #71 · 6:10 Cierre

## Etiquetas
efecto nocturno, oro, overnight, curva bruta, curva neta, spread y swap, costos de trading, drawdown, backtest, trading con datos, ATLAS Lab, mantener el oro

## Rúbrica (autoevaluación, 1–5)
| Pieza | hook_0_3s | ritmo | promesa_cumplida | potencial_loop | claridad_no_traders | honestidad_atlas | audio | cta | Promedio |
|---|---|---|---|---|---|---|---|---|---|
| Largo | 5 | 4 | 5 | 4 | 4 | 5 | 4 | 4 | 4.38 |
| Short | 5 | 4 | 5 | 4 | 4 | 5 | 4 | 4 | 4.38 |

Hook ≥ 4 ✓ · honestidad 5 ✓. Punto débil: junta cifras del #63 (bruto) y del #71 (neto); el largo lo dice en pantalla y avisa que la curva bruta puede reflejar el rollover de los datos. Los retornos por año salen de las curvas.

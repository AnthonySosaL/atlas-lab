# Experimento #71 — Efecto nocturno con costos reales + validación fuera de muestra

Estado del guion: **BORRADOR — pendiente de aprobación**
Estado del experimento: **murió** (el efecto existe en bruto, oro Sharpe 0.99, pero con spread y swap reales cae a −3.11, −5.8% al año)
Serie: F (anomalías y estacionalidad). Continúa el #63.
Datos usados: `experiments.json` (v=71: verdict, analysis, notes, kpis, metrics, params_view, period) · `exp_details.json` (extra-v71: algo, code, filters) · `series/extra-v71.json` ([0] oro de noche neto de costos, [1] oro comprar y esperar) · tabla «Con tu capital» (docs/youtube, archivo de capital, fila #71; el $10k se calcula con la misma regla de la tarjeta del sitio).

## Títulos
1. Una ventaja real que los costos destruyen: oro, −5.8% al año
2. Efecto nocturno con costos reales: de Sharpe 0.99 a −3.11
3. ¿Es real el efecto nocturno del oro? Sí. ¿Se puede operar? No

## Miniatura
Fondo `#09090b`. Un lingote de oro al que unas monedas rojas `#e11d2a` le van mordiendo la mitad inferior; texto blanco «SPREAD + SWAP». Logo ATLAS esquina inferior derecha.

---

## VIDEO LARGO (≈ 8 min)

**[0:00 — Gancho]** (pantalla: lingote de oro; a su derecha dos cifras: «0.99» en verde que se transforma en «−3.11» en rojo)
BOCETO: el Sharpe cae en caída libre de 0.99 a −3.11 con sacudida (bass) al cruzar el cero; debajo, «−5.8% al año».
> El efecto es real: el oro rinde de noche con un Sharpe de 0.99 y un Deflated Sharpe de 1.00, es decir, no es azar. Pero cuando restas el spread y el swap que cobra el broker, el Sharpe pasa a −3.11, y pierdes 5.8% al año. Hoy te cuento por qué una ventaja real puede ser completamente inútil, y qué significa eso para cualquiera que opere por su cuenta.

**[0:30 — Presentación]** (pantalla: rótulo «Experimento #71 · Efecto nocturno con costos reales + validación fuera de muestra»)
BOCETO: rótulo en rojo y blanco «EXPERIMENTO #71» con el nombre debajo, sobre la última imagen del gancho atenuada (overlay 0.6); whoosh corto; logo en la esquina.
> Este es el experimento #71 de ATLAS Lab: efecto nocturno con costos reales y validación fuera de muestra. Todos los resultados están en la página del experimento.

**[0:40 — Lo que vimos en el #63]** (pantalla: tarjeta del #63: oro de noche 0.99, Brent de noche 0.58; sello «bruto»)
BOCETO: la tarjeta del experimento 63 con las cifras oro de noche 0.99 y Brent de noche 0.58; sello «bruto»; luego una flecha hacia «ahora, con costos».
> En el experimento 63 medí a qué hora ganan los activos, de noche o de día. El oro rindió de noche con un Sharpe de 0.99; el Brent, de 0.58. El Sharpe mide cuánto rindes por cada unidad de riesgo, y 0.99 es una cifra llamativa. Pero eran cifras brutas, sin costos, y con una duda abierta sobre los datos. Hoy toca la prueba que lo decide: intentar operarlo de verdad, con los costos reales de un broker.

**[1:10 — La estrategia]** (pantalla: reloj que va del cierre a la apertura; una luna que sube y baja cada día)
BOCETO: la secuencia «compra al cierre → vende a la apertura» se repite cada día en una cinta de calendario.
> La estrategia es simple: comprar al cierre y vender a la apertura, todos los días, en oro, Brent y WTI. Es decir, solo estás dentro del mercado de noche, y por la mañana sales. Al día siguiente, otra vez. Eso significa que cada día entras y sales: dos operaciones, todos los días del año.

**[1:35 — Los costos reales]** (pantalla: dos monedas que salen cada noche: «spread» y «swap»)
BOCETO: moneda 1 = diferencia entre precio de compra y de venta; moneda 2 = interés por dormir con la posición abierta; contador «2.5 bps/día (oro)» y «4.5–4.7 bps/día (petróleo)».
> Y aquí entran los costos reales. El primero es el spread: la diferencia entre el precio al que compras y el precio al que vendes en el mismo instante, que es lo que cobra el broker por cruzar el mercado. El segundo es el swap: el interés que el broker cobra por mantener una posición abierta de un día para otro. Como esta estrategia mantiene la posición siempre de noche, paga swap todos los días. Leí esos costos directamente del broker: 2.5 puntos básicos por día en el oro y entre 4.5 y 4.7 en el petróleo. Un punto básico es la centésima parte de un 1%. Ojo con una limitación: usé los valores actuales del símbolo para todo el histórico.

**[2:25 — El peaje diario]** (pantalla: una caseta de peaje con una moneda pequeña cayendo cada día)
BOCETO: una caseta de peaje donde cae una moneda pequeña cada día; el contador de días sube mientras la pila de monedas crece.
> Dos puntos y medio parecen nada. Pero piensa en un peaje: pagar una moneda pequeña es irrelevante una vez, y es muy relevante si la pagas todos los días durante años. Aquí la ventaja que buscas también es diaria y también es pequeña. La pregunta es cuál de las dos es más grande.

**[2:50 — Las tres pruebas]** (pantalla: tres puertas con sus umbrales)
BOCETO: puerta 1 «Sharpe neto de los 3 activos > 0.30»; puerta 2 «Fuera de muestra 2007–2013: Sharpe neto > 0.30 (solo el oro tiene datos)»; puerta 3 «Deflated Sharpe del oro bruto, con 3 activos probados».
> Tres pruebas. Una: que el Sharpe neto de los tres activos supere 0.30. Dos: que también lo supere fuera de muestra, en 2007–2013, un periodo que no se usó para mirar los datos; solo el oro tiene datos de esos años. Tres: el Deflated Sharpe del oro en bruto, que ajusta por cuántas cosas probé, aquí tres activos. Esta última sirve para saber si el efecto es suerte. Las dos primeras sirven para saber si, con costos, es un negocio.

**[3:20 — Resultados]** (pantalla: tabla animada, una fila por medida)
BOCETO: las filas aparecen con tick; las negativas en rojo; «1.00» en verde con la nota «no incluye costos».
| Medida | Resultado |
|---|---|
| Sharpe del oro, bruto | 0.99 |
| Sharpe del oro, neto | −3.11 |
| Retorno anual del oro, neto (compuesto) | −5.8% |
| Retorno anual neto, según el activo | −5.8% a −10.3% |
| Costo diario del oro | 2.5 bps |
| Costo diario del petróleo | 4.5–4.7 bps |
| Sharpe neto del oro, fuera de muestra 2007–13 | −7.34 |
| Deflated Sharpe del oro, bruto | 1.00 |
> El Deflated Sharpe del oro bruto es 1.00: el efecto no es azar. Pero ya neto de costos, el Sharpe del oro cae de 0.99 a −3.11, con un retorno de −5.8% al año. Según el activo, de −5.8% a −10.3% al año. Y fuera de muestra, en 2007–2013, el oro neto da un Sharpe de −7.34. Falla las dos pruebas con costos; la única que pasa es la que mide el efecto en bruto.

**[3:55 — Por qué los costos ganan]** (pantalla: una moneda cayendo cada día sobre un mini calendario; el calendario se llena de monedas)
BOCETO: calendario que se llena de monedas rojas día a día; la curva de ventaja bruta (verde) queda tapada; texto «mismo muro: experimentos 6, 7 y 65».
> Para capturar el efecto hay que entrar al cierre y salir a la apertura todos los días. Pagar 2.5 puntos básicos cada día es un peaje diario: la ventaja existe, pero es muy pequeña, y entrar y salir cada día cuesta más de lo que deja. Es el mismo muro que mató a las estrategias de alta frecuencia de los experimentos 6 y 7, y, en diario, al 65. Confirma la ventaja institucional: quien tiene ejecución barata sí puede capturar una ventaja así; el inversor minorista, no.

**[4:30 — Cómo leer un Sharpe de −7.34]** (pantalla: medidor del Sharpe neto fuera de muestra en −7.34; nota «solo el oro tiene datos de 2007–2013»)
BOCETO: medidor del Sharpe neto fuera de muestra marcando −7.34 en rojo; nota «solo el oro tiene datos de 2007–2013».
> Un detalle: el Sharpe del oro neto fuera de muestra, en 2007–2013, es −7.34. Un Sharpe tan negativo no significa un mal año concreto, sino que pierde de forma muy consistente: cada noche paga el costo y el movimiento nocturno no lo compensa. Ten presente además que ese cálculo sale de las métricas registradas del experimento y que solo el oro tiene datos de esos años.

**[4:55 — Con tu capital]** (pantalla: tarjeta «Con tu capital» con el selector $10,000 / $100,000; curva `series/extra-v71.json[0]` descendiendo y gris `[1]` subiendo)
BOCETO: la curva del oro de noche neta cae casi en línea recta; la tarjeta marca la peor caída casi igual a la pérdida final.
> Veamos qué significa en dinero. Con $10,000, comprar el oro solo de noche con costos reales, de 2012 a 2024, habría perdido $5,369; mantener el oro todo el tiempo, +$6,698. Con $100,000: −$53,695 contra +$66,979. La peor caída desde un máximo fue de −$5,370 con 10,000 y −$53,696 con 100,000, un −53.7%: casi la misma que la pérdida final, porque la curva casi no sube. En otras palabras, el oro de noche, pagando costos, perdió más de la mitad del capital.

**[5:30 — Preguntas de un escéptico]** (pantalla: tres tarjetas: «¿broker más barato?», «¿datos de sesión reales?», «¿solo el oro?»)
BOCETO: tres tarjetas que se voltean: «¿broker más barato?» → no separé spread y swap; «¿datos de sesión reales?» → limitación del #63; «¿solo el oro?» → lo que hay.
> Preguntas que me haría un escéptico. ¿Y si el broker cobrara menos? Probablemente el resultado mejoraría, pero aquí usé los costos que leí del broker, y no separé cuánto es spread y cuánto es swap: medí el costo total por día. ¿Y si usara datos de sesión reales en lugar de las barras de casi 24 horas? Eso lo marqué como limitación en el experimento 63. ¿Y por qué solo el oro tiene datos de 2007 a 2013? Es lo que hay disponible. Lo que no cambia es el orden de magnitud: un costo diario de 2.5 puntos básicos es grande frente a una ventaja diaria pequeña.

**[6:15 — Real no es lo mismo que operable]** (pantalla: dos balanzas: «ventaja» contra «costo de capturarla»)
BOCETO: dos balanzas: la ventaja (Deflated Sharpe 1.00) pesa poco frente al costo diario (2.5 bps); texto «¿y los costos?».
> Hay una lección que va más allá del oro. Que una anomalía sea estadísticamente real no significa que sea operable. Para que una ventaja sirva, tiene que ser mayor que lo que cuesta capturarla. El Deflated Sharpe de 1.00 te dice que el patrón no es suerte; el Sharpe neto de −3.11 te dice que, para ti, con esos costos, no es negocio. Cuando veas a alguien mostrar un gráfico bruto de una anomalía, la primera pregunta es: ¿y los costos?

**[6:50 — Resumen]** (pantalla: tarjeta con las cifras clave: 0.99 → −3.11 · −5.8% al año · −5.8% a −10.3% · 1.00 · −7.34)
BOCETO: tarjeta con cinco cifras: 0.99 → −3.11, −5.8% al año, −5.8% a −10.3%, 1.00 y −7.34; frase «la ventaja es real; el negocio, no».
> Resumen en cinco cifras. Sharpe del oro de 0.99 en bruto y −3.11 neto. Retorno anual neto de −5.8%, y de −5.8% a −10.3% según el activo. Deflated Sharpe del oro bruto de 1.00. Y fuera de muestra, un Sharpe neto de −7.34. La ventaja es real; el negocio, no.

**[7:10 — Ficha del experimento #71]** (pantalla: tarjeta con la ficha y la URL abajo)
BOCETO: tarjeta con el número «#71», el sello «MURIÓ» en rojo y cuatro líneas (estado, cifra clave, lo que decidió, lección) que entran con tick; al final, la URL «atlas-lab-one.vercel.app/e/71» grande y resaltada en verde. kb=in.
> Ficha del experimento 71. Estado: murió. Cifras clave: oro de noche, Sharpe de 0.99 en bruto y de −3.11 con costos reales; −5.8% al año. Lo que decidió: el filtro de costos, con 2.5 puntos básicos por día. Lección: una ventaja real no sirve si cuesta más capturarla de lo que da. Revísalo completo en atlas-lab-one.vercel.app/e/71.

**[7:35 — Cierre]**
BOCETO: lingote de oro con las monedas rojas mordiéndolo; sello ✕ rojo; cierre con el logo.
> No sirvió. Existe una ventaja real, medible, que no es azar, y aun así no se puede operar con costos de minorista. Todos los datos en atlas-lab-one.vercel.app/e/71. El trading no se promete: se prueba. Contenido educativo, no es asesoría financiera.

---

## SHORT (9:16, ≈ 49 s)

**[0-3 s]** (boceto: lingote de oro, «0.99 → −3.11» con la segunda cifra en rojo; b-roll de lingotes de oro en cámara lenta, kb=in; golpe de bajo + sacudida)
> El oro gana de noche. Operarlo te cuesta 5.8% al año.

**[3-12 s]** (boceto: reloj de cierre a apertura; tick por cifra «Sharpe 0.99» y «Deflated Sharpe 1.00»; whoosh)
> Comprar al cierre y vender a la apertura, cada día, en oro: Sharpe de 0.99 y Deflated Sharpe de 1.00. No es suerte: el efecto es real.

**[12-22 s]** (boceto: una moneda roja cayendo cada noche sobre un calendario; texto «2.5 bps por día»; b-roll de reloj de pared, kb=out)
> Pero hay que pagar el spread y el swap del broker: 2.5 puntos básicos por día en el oro, de 4.5 a 4.7 en el petróleo. Un peaje diario.

**[22-33 s]** (boceto: curva dorada cayendo; cifras −3.11, −5.8% y −7.34; sello ✕ rojo)
> Con costos reales, el Sharpe del oro cae de 0.99 a −3.11 y pierdes 5.8% al año. Según el activo, entre 5.8% y 10.3%. Y fuera de muestra, el Sharpe del oro es −7.34.

**[33-39 s]** (boceto: tarjeta «Con tu capital»: −$53,695 contra +$66,979)
> Con $100,000, comprar el oro solo de noche con costos reales perdió $53,695. Mantener el oro, ganó $66,979.

**[39-49 s]** (boceto: lingote al que muerden monedas; texto «¿cuánto cuesta operarlo?»; rótulo «Experimento #71 completo en el enlace»; logo)
> Ventaja real, pero los costos se la comen. Video completo en el canal y experimento #71 completo en el enlace. El oro gana de noche: ¿y cuánto te cuesta operarlo?

Gancho alterno A: «Deflated Sharpe de 1.00 y aun así pierdes dinero.» · B: «Una ventaja real que no se puede operar: el oro de noche.»

## Descripción de YouTube — video largo
https://atlas-lab-one.vercel.app/e/71?utm_source=youtube&utm_medium=video&utm_campaign=exp071-t1
Ficha del experimento #71: murió · oro de noche: Sharpe 0.99 en bruto y −3.11 con costos reales · −5.8% al año · fuera de muestra (2007–2013): −7.34.
Triple test del efecto nocturno en oro, Brent y WTI (2012–2024): comprar al cierre y vender a la apertura restando el spread y el swap reales del broker. En bruto el oro da Sharpe 0.99 y Deflated Sharpe 1.00; neto de costos, Sharpe −3.11 (−5.8% al año). Fuera de muestra (2007–2013), Sharpe neto de −7.34. La ventaja existe, pero los costos la entierran.

Contenido educativo. No es asesoría financiera ni recomendación de inversión.

Capítulos: 0:00 Gancho · 0:30 Presentación · 0:40 Lo que vimos en el #63 · 1:10 La estrategia · 1:35 Los costos reales · 2:25 El peaje diario · 2:50 Las tres pruebas · 3:20 Resultados · 3:55 Por qué los costos ganan · 4:30 Cómo leer un Sharpe de −7.34 · 4:55 Con tu capital · 5:30 Preguntas de un escéptico · 6:15 Real no es lo mismo que operable · 6:50 Resumen · 7:10 Ficha del experimento #71 · 7:35 Cierre

Etiquetas: efecto nocturno, overnight, oro, spread y swap, costos de trading, Deflated Sharpe, prueba fuera de muestra, backtest, trading con datos, ATLAS Lab, Brent y WTI, ventaja institucional

## Descripción de YouTube — Short
https://atlas-lab-one.vercel.app/e/71?utm_source=youtube&utm_medium=short&utm_campaign=exp071-t1
Ficha del experimento #71: murió · Sharpe 0.99 en bruto y −3.11 con costos reales (−5.8% al año).
Contenido educativo, no es asesoría financiera.

## Rúbrica (autoevaluación)
| Criterio | Short | Largo |
|---|---|---|
| hook_0_3s | 5 | 5 |
| ritmo | 4 | 4 |
| promesa_cumplida | 5 | 5 |
| potencial_loop | 5 | 4 |
| claridad_no_traders | 4 | 4 |
| honestidad_atlas | 5 | 5 |
| audio | 4 | 4 |
| cta | 4 | 4 |
| **Promedio** | **4.50** | **4.38** |

## Otros temas de este experimento
- Tema 1 (este archivo): `exp-071-nocturno-costos-reales.md` — Efecto nocturno con costos reales + validación fuera de muestra
- Tema 2: `exp-071-t2-curva-bruta-contra-neta.md` — La curva casi perfecta (el oro de noche: −2.3% de caída en bruto, −53.7% con costos reales)
- Tema 3: `exp-071-t3-el-muro-de-costos.md` — El muro de los costos (dos ventajas reales que el costo entierra: +0.20 → −1.99 y +0.99 → −3.11)

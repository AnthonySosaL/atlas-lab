# Experimento #69 — Tema 3: Lo que no se midió (un Sharpe de 1.85 con cuatro de siete pruebas sin hacer)

**Tema 3 de 4 del experimento #69** · Qué aporta frente a los otros temas: es el tema del método y la letra pequeña. Pone en un marcador qué pruebas pasó el VRP protegido y cuáles no se aplicaron, y explica los tres supuestos que sostienen sus números (costo del put, elegir el mejor de cuatro, y el escenario «realista»). Sirve para aprender a leer cualquier backtest bonito. Se entiende sin los otros temas.
Estado del guion: **BORRADOR — pendiente de aprobación**
Estado del experimento: **parcial** (Sharpe 1.85 y peor día de −7.8%, pero el costo del put es un supuesto y falta el triple test con datos de opciones reales)
Serie: F (anomalías y estacionalidad). Continúa el #64.
Datos usados: `experiments.json` (v=69: analysis, kpis, metrics, notes, capital.note, params_view; v=81: 33,363 probadas, Deflated Sharpe máximo 0.31 de 0.95 exigido) · `exp_details.json` (extra-v69: algo —el CAGR «realista» es un recorte arbitrario del 50%—, code con los cuatro niveles de cobertura, filters: 3 aplicadas con resultado favorable y 4 sin aplicar). Experimento con curva, pero este tema no usa «Con tu capital»: usa las cifras de dinero del propio análisis ($10k → ~$900 al año; $50k → ~$4,600 al año).
Producción (CLAUDE.md del canal): b-roll real detrás de cada escena con overlay 0.6, Ken Burns alternando, subtítulos karaoke en MAYÚSCULAS, un dato visual por escena. Colores: rojo `#e11d2a`, verde `#22c55e`, fondo `#09090b`.

## Títulos
1. Sharpe 1.85 y cuatro de siete pruebas sin hacer: lo que no sabemos del VRP protegido
2. El 18.4% anual que no está medido: tres supuestos detrás de un backtest
3. Cómo leer un backtest bonito: el caso del VRP protegido

## Miniatura
Fondo `#09090b`. Un marcador de siete casillas: tres con ✓ verde `#22c55e` y cuatro con «—» gris. Texto grande en blanco: «4 DE 7 SIN HACER» y, pequeño y tachado en rojo `#e11d2a`, «18.4%». Logo ATLAS esquina inferior derecha.

---

## VIDEO LARGO (≈ 6½ min)

**[0:00 — Gancho]** (pantalla: tarjeta con «Sharpe 1.85 · 92% de años positivos · +18.4% al año»; debajo aparece un marcador de siete casillas, cuatro vacías)
BOCETO: las tres cifras brillan en verde; el marcador baja desde arriba y las cuatro casillas vacías parpadean en gris; golpe de bajo.
> Sharpe de 1.85, 92% de años positivos, 18.4% de crecimiento anual. Suena a la estrategia perfecta. Pero de las siete pruebas que aplico a una estrategia, a esta le faltan cuatro. Hoy te enseño qué números de este experimento están medidos y cuáles son supuestos.

**[0:18 — Qué experimento es]** (pantalla: rótulo «Experimento #69 · ATLAS Lab» y el nombre debajo)
BOCETO: rótulo con el número 69 y el nombre «VRP protegido (cobertura de cola)»; logo en la esquina.
> Este es el experimento #69 de ATLAS Lab: VRP protegido, cobertura de cola. Todos los resultados están en la página del experimento.

**[0:35 — La estrategia en 20 segundos]** (pantalla: curva de `series/extra-v69.json[0]` y un paraguas)
BOCETO: curva que sube en escalones; paraguas que se abre al llegar una caída.
> La estrategia vende la prima de volatilidad del S&P 500, que es como vender un seguro contra caídas, y a la vez compra un seguro propio más barato: un put lejano, que pone un tope a la pérdida de cada día. Se probó de 2012 a 2024, con una aproximación basada en el VIX.

**[0:55 — El marcador]** (pantalla: lista de siete pruebas con ✓ o «—»)
BOCETO: lista que se llena fila a fila con tick: ✓ Sharpe mayor que sin cobertura (1.85 contra 1.56) y que comprar y esperar (0.80); ✓ Riesgo: peor día −7.8% contra −26.9%; ✓ Señal de ayer; — Costos; — Multiplicidad; — Fuera de muestra; — Deflated Sharpe.
> Este es el marcador. Pasa tres: mejora el Sharpe frente a no cubrirse y frente a comprar y esperar, reduce el peor día de −26.9% a −7.8%, y usa solo la señal de ayer. Y cuatro no se aplican: costos reales, ajuste por haber probado varias versiones, prueba fuera de muestra y Deflated Sharpe. Veamos qué esconde cada hueco.

**[1:40 — Supuesto 1: el precio del seguro]** (pantalla: etiqueta de precio «12% de la prima» con la palabra «supuesto» en ámbar)
BOCETO: etiqueta de precio que dice «12% de la prima» y un sello ámbar «supuesto»; al lado, dos precios: «compra» y «venta» con una brecha.
> Primero, el costo del put. En el experimento cuesta el 12% de la prima que cobras. Ese número lo fijé yo; no es un precio de mercado. Y no incluye el diferencial de compra y venta, o bid-ask: la diferencia entre lo que pagas al comprar una opción y lo que recibes al venderla. Si el put real costara más, la mejora sería menor. No lo medí, y por eso no puedo decir cuánto.

**[2:25 — Supuesto 2: elegir el mejor de cuatro]** (pantalla: cuatro tarjetas de cobertura: a pelo, leve, medio, fuerte; la del medio se ilumina)
BOCETO: cuatro tarjetas; una mano elige la del medio y la rodea; texto «¿la mejor de cuatro o la mejor?».
> Segundo, comparé cuatro niveles de cobertura: ninguna, leve, media y fuerte. Destaqué la media, la de mejor Sharpe, sin ajustar por haber probado cuatro. Es como lanzar varias veces una moneda y quedarte con la mejor tirada: la mejor tiende a verse mejor de lo que realmente es. Aquí el efecto es pequeño, porque son cuatro; en el laboratorio de ATLAS, con 33,363 estrategias probadas, el mejor Deflated Sharpe fue 0.31, cuando se exige 0.95. Esa es la diferencia entre probar poco y probar mucho.

**[3:10 — Supuesto 3: el «realista»]** (pantalla: la barra de +18.4% partida por la mitad: «~+9%»; dos tarjetas de dinero)
BOCETO: barra de 18.4% que se parte por la mitad hasta «~+9%»; sello «recorte arbitrario, no una medición»; tarjetas «$10k → ~$900 al año» y «$50k → ~$4,600 al año».
> Tercero, el escenario realista. El análisis dice que lo realista es la mitad del backtest, unos 9% al año. Esa mitad es un recorte arbitrario, no una medición. Con él, $10,000 dejarían unos $900 al año y $50,000, unos $4,600. Ni el 18.4% ni el 9% están medidos con precios reales de opciones.

**[3:55 — Lo que sí está medido]** (pantalla: tres tarjetas verdes: «señal de ayer», «peor día −7.8%», «MaxDD −32%»)
BOCETO: tres tarjetas verdes que entran con tick; debajo la nota «sobre una aproximación».
> Para ser justos, hay cosas que sí están hechas bien: la señal es la de ayer, el peor día baja de −26.9% a −7.8% y el drawdown máximo, de −62% a −32%. Son resultados de una aproximación, pero el mecanismo es claro: el put quita la bomba y baja la volatilidad. En el backtest, además, el peor año fue −6%, en 2018, con 92% de años positivos.

**[4:30 — Qué haría falta]** (pantalla: rompecabezas con cuatro piezas)
BOCETO: rompecabezas con cuatro piezas faltantes: «precios de opciones reales», «bid-ask», «fuera de muestra», «Deflated Sharpe».
> Para pasar de «parcial» a «probado» haría falta: precios reales de opciones, el bid-ask, una prueba fuera de muestra y el Deflated Sharpe, que ajusta por cuántas cosas se probaron. Y operarlo exige una cuenta de opciones, no el bot de CFD. Hasta entonces, prometedor no es probado.

**[5:05 — Tres preguntas para cualquier backtest]** (pantalla: tres preguntas grandes, una por una)
BOCETO: tres preguntas que aparecen con whoosh: «¿el costo está medido o supuesto?», «¿cuántas versiones se probaron?», «¿qué no se probó?».
> Llévate tres preguntas para cualquier backtest que veas. Una: ¿el costo está medido o supuesto? Dos: ¿cuántas versiones se probaron antes de mostrar la mejor? Tres: ¿qué pruebas no se hicieron? Si el que lo muestra no puede responder, la cifra bonita vale menos de lo que parece.

**[5:35 — Preguntas de un escéptico]** (pantalla: tres tarjetas: «¿y si el put cuesta más?», «¿y si fuera la mejor de cuatro por suerte?», «¿otro periodo?»)
BOCETO: tres tarjetas que se voltean con «no medido».
> Preguntas que me haría un escéptico. ¿Y si el put cuesta más? La mejora sería menor. ¿Y si elegí el mejor de cuatro por suerte? Es posible, y por eso lo digo. ¿Y en otro periodo? Solo cubre 2012–2024. Todo eso queda sin medir.

**[6:00 — Ficha del experimento #69]** (pantalla: tarjeta con la ficha y la URL abajo)
BOCETO: tarjeta con cinco líneas que entran con tick y, al final, la URL resaltada en verde.
> Ficha del experimento 69. Estado: parcial. Cifras clave: Sharpe 1.85 contra 1.56 sin cobertura, peor día −7.8% contra −26.9%, y 18.4% anual en el papel, unos 9% en un escenario realista. Lo que decidió: faltan precios de opciones reales, fuera de muestra y Deflated Sharpe. Lección: pregunta qué está medido y qué es supuesto. Revísalo completo en atlas-lab-one.vercel.app/e/69.

**[6:30 — Cierre]**
BOCETO: marcador de siete casillas con tres ✓ y cuatro «—»; logo.
> Todos los datos en atlas-lab-one.vercel.app, experimento 69. El trading no se promete: se prueba. Contenido educativo, no es asesoría financiera.

---

## SHORT (9:16, ≈ 50 s)

**[0-3 s]** (boceto: marcador de siete casillas con cuatro vacías; «Sharpe 1.85»; b-roll de lista de verificación, kb=in; golpe de bajo)
> Sharpe de 1.85… y cuatro de siete pruebas sin hacer.

**[3-13 s]** (boceto: curva con paraguas; tarjetas «+18.4% al año» y «92% de años positivos»; whoosh)
> Es el VRP protegido: vende la prima de volatilidad y compra un seguro. En el papel crece 18.4% al año, con 92% de años positivos.

**[13-25 s]** (boceto: etiqueta de precio «12% de la prima» con sello «supuesto»; cuatro tarjetas de cobertura)
> Pero el precio del seguro, 12% de lo que cobras, es un supuesto, sin opciones reales. Y comparé cuatro niveles y destaqué el mejor, sin ajustar por haber probado cuatro.

**[25-36 s]** (boceto: barra de 18.4% partida por la mitad hasta «~9%»; sello «recorte, no medición»)
> El escenario realista, unos 9% al año, es la mitad del 18.4%. Un recorte arbitrario, no una medición.

**[36-44 s]** (boceto: sello ámbar «PARCIAL»; rompecabezas con piezas que faltan)
> Faltan precios de opciones reales, fuera de muestra y Deflated Sharpe. Por eso es parcial: prometedor no es probado.

**[44-50 s]** (boceto: texto «Experimento #69 completo en el enlace»; logo)
> Video completo en el canal y experimento #69 completo en el enlace. ¿Qué número de un backtest es solo un supuesto?

Gancho alterno A: «18.4% al año… y el 9% realista es un recorte mío.» · B: «Un backtest con el costo supuesto no es una prueba.»

## Descripción de YouTube — video largo
https://atlas-lab-one.vercel.app/e/69?utm_source=youtube&utm_medium=video&utm_campaign=exp069-t3
Ficha: experimento #69, VRP protegido (cobertura de cola). Estado: parcial. Sharpe 1.85 contra 1.56 sin cobertura; peor día −7.8% contra −26.9%; 18.4% anual en el papel y unos 9% en el escenario realista (un recorte, no una medición).
Los tres supuestos detrás de los números (costo del put, elegir el mejor de cuatro niveles y el escenario realista) y las cuatro pruebas que faltan. Aproximación con el VIX, 2012–2024.
Contenido educativo. No es asesoría financiera ni recomendación de inversión.

## Descripción de YouTube — Short
https://atlas-lab-one.vercel.app/e/69?utm_source=youtube&utm_medium=short&utm_campaign=exp069-t3
Ficha: experimento #69, parcial. Sharpe 1.85, 18.4% anual en el papel; costo del put supuesto. Contenido educativo, no es asesoría financiera.

## Capítulos
0:00 Gancho · 0:18 Qué experimento es · 0:35 La estrategia en 20 segundos · 0:55 El marcador · 1:40 Supuesto 1: el precio del seguro · 2:25 Supuesto 2: elegir el mejor de cuatro · 3:10 Supuesto 3: el realista · 3:55 Lo que sí está medido · 4:30 Qué haría falta · 5:05 Tres preguntas para cualquier backtest · 5:35 Preguntas de un escéptico · 6:00 Ficha del experimento #69 · 6:30 Cierre

## Etiquetas
backtest, VRP protegido, supuestos, costos de trading, multiplicidad, Deflated Sharpe, bid-ask, put, cobertura de cola, cómo leer un backtest, trading con datos, ATLAS Lab

## Rúbrica (autoevaluación, 1–5)
| Pieza | hook_0_3s | ritmo | promesa_cumplida | potencial_loop | claridad_no_traders | honestidad_atlas | audio | cta | Promedio |
|---|---|---|---|---|---|---|---|---|---|
| Largo | 4 | 4 | 5 | 4 | 4 | 5 | 4 | 4 | 4.25 |
| Short | 5 | 4 | 5 | 4 | 4 | 5 | 4 | 4 | 4.38 |

Hook ≥ 4 ✓ · honestidad 5 ✓. Punto débil: «siete pruebas» es el marcador de la ficha técnica del experimento (3 aplicadas con resultado favorable y 4 sin aplicar); el largo lo enseña en pantalla en el bloque 0:55 para que el número no quede suelto.

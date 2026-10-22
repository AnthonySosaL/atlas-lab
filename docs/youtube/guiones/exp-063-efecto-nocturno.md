# Experimento #63 — Efecto nocturno (sesión diurna vs. nocturna)

Estado del guion: **BORRADOR — pendiente de aprobación**
Estado del experimento: **no concluyente** (estudio descriptivo bruto: sin señal de trading, sin costos, sin prueba fuera de muestra)
Serie: F (anomalías y estacionalidad). Continúa en #71 (el mismo efecto con costos reales).
Datos usados: `experiments.json` (v=63: verdict, analysis, notes, kpis, metrics, market, period, capital) · `exp_details.json` (extra-v63: algo, filters) · `series/extra-v63.json` ([0] oro solo de noche, bruto; [1] oro comprar y esperar) · tabla «Con tu capital» (docs/youtube, archivo de capital, fila #63; el $10k se calcula con la misma regla de la tarjeta del sitio).
Experimento de datos: el video explica qué se midió y para qué sirve; no hay una estrategia que aprobar o reprobar.

## Títulos
1. Brent: +149% de noche y −72% de día. ¿Truco o patrón?
2. El mercado gana de noche o de día: lo medí en 7 activos (2012–2024)
3. El oro rinde de noche con Sharpe 0.99: por qué todavía no lo creo

## Miniatura
Pantalla partida vertical sobre `#09090b`: a la izquierda una luna con un lingote de oro y el texto «ORO 0.99» en verde `#22c55e`; a la derecha un sol apagado en gris. Debajo, signo «?» rojo `#e11d2a` enorme. Logo ATLAS esquina inferior derecha.

---

## VIDEO LARGO (≈ 5½ min, experimento de datos)

**[0:00 — Gancho]** (pantalla: dos contadores. Luna: «+149%». Sol: «−72%». Rótulo «Brent · 2012–2024»)
BOCETO: los contadores suben (luna, verde) y bajan (sol, rojo) a la vez; golpe de bajo y sacudida al llegar a −72%.
> Entre 2012 y 2024, el petróleo Brent rindió +149% de noche y −72% de día. Mismo activo, mismos días: lo único que cambia es a qué hora estás dentro. ¿Es una ventaja o un truco de los datos? Te cuento qué medí, qué encontré y por qué todavía no puedo darle un veredicto.

**[0:25 — Presentación]** (pantalla: rótulo «Experimento #63 · Efecto nocturno (sesión diurna vs. nocturna)»)
BOCETO: rótulo «EXPERIMENTO #63 · Efecto nocturno (sesión diurna vs. nocturna)» que entra con whoosh sobre el último cuadro del gancho a baja opacidad.
> Este es el experimento #63 de ATLAS Lab: Efecto nocturno (sesión diurna vs. nocturna). Todos los resultados están en la página del experimento.

**[0:35 — Qué se midió]** (pantalla: una vela diaria dividida en dos tramos con un salto entre el cierre de ayer y la apertura de hoy)
BOCETO: la vela se separa: tramo nocturno (cierre de ayer → apertura de hoy) en azul oscuro; tramo intradía (apertura → cierre) en blanco. Debajo, los 7 activos como iconos: S&P 500, Nasdaq 100, DAX, FTSE 100, oro, EUR/USD y Brent.
> Cada día de trading se puede partir en dos: la noche, que va del cierre de ayer a la apertura de hoy, y el día, que va de la apertura al cierre. Medí cada tramo por separado en 7 activos: S&P 500, Nasdaq 100, DAX, FTSE 100, oro, EUR/USD y Brent, con datos diarios de 2012 a 2024. Para comparar uso el Sharpe, que mide cuánto rindes por cada unidad de riesgo: más alto es mejor, y negativo significa que perdiste. Y una advertencia desde ya: esto es un estudio descriptivo. No hay una estrategia, ni costos, ni una prueba fuera de muestra, es decir, en un periodo que no se haya usado para mirar los datos.

**[1:20 — Qué esperábamos]** (pantalla: texto «acciones de EE. UU.: la anomalía clásica» con flecha hacia la luna)
BOCETO: icono de acciones de EE. UU. con una flecha hacia la luna (la anomalía clásica) y, al lado, los índices con una flecha hacia el sol; texto «índices: manda el día».
> En las acciones de EE. UU. existe una anomalía muy conocida: buena parte del rendimiento se concentra de noche. Es una de las razones por las que este tipo de estudio despierta tanto interés. Lo que encontré en los índices es lo opuesto: manda el día. Y en otros activos, como el oro y el petróleo, el patrón es distinto de nuevo. Es decir, no hay una sola regla de la noche y el día: depende del activo.

**[1:55 — Resultados en índices]** (pantalla: panel de barras, noche a la izquierda y día a la derecha)
BOCETO: barras verdes y rojas que crecen desde cero. Índices: noche −0.22, día 0.69. S&P 500: noche −0.33, día 0.84.
| Dato (2012–2024, bruto; «—» = el experimento no publica ese dato) | Noche | Día |
|---|---|---|
| Índices, Sharpe | −0.22 | 0.69 |
| S&P 500, Sharpe | −0.33 | 0.84 |
| Oro, Sharpe | 0.99 | — |
| Brent, Sharpe | 0.58 | — |
| Brent, retorno | +149% | −72% |
> En los índices, el día gana: Sharpe de 0.69 de día contra −0.22 de noche. Si miramos solo el S&P 500, 0.84 de día y −0.33 de noche. Dicho en simple: en los índices que medí, el rendimiento por unidad de riesgo está en la sesión de operación, y el tramo nocturno incluso resta.

**[2:15 — Resultados en oro y Brent]** (pantalla: barras de noche para oro y Brent; cuadro aparte «Brent: +149% noche / −72% día»)
BOCETO: barras de noche para oro (0.99) y Brent (0.58) en verde; cuadro aparte con dos contadores del Brent, +149% (luna) y −72% (sol); texto «cada activo, su patrón».
> En el oro pasa lo contrario: de noche, Sharpe de 0.99. En el Brent, 0.58 de noche, y el contraste de retornos es el del gancho: +149% de noche contra −72% de día. Fíjate lo que significa: durante esos años, quien hubiera estado dentro del Brent solo de noche habría ganado mucho, y quien hubiera estado dentro solo de día, habría perdido. Cada clase de activo tiene su propio patrón de sesión.

**[2:45 — Por qué todavía no lo creo]** (pantalla: checklist de filtros con los valores reales)
BOCETO: ✗ Costos: no aplicado (bruto) · — Señal de ayer: no aplica · — Fuera de muestra: no aplicado · — Deflated Sharpe: no aplicado. Al lado, una barra de 24 horas con un hueco rojo marcado «rollover».
> Hay tres razones para la cautela. Primera, son cifras brutas: no restan costos de ningún tipo, ni el spread, ni el swap, que es el interés que cobra el broker por mantener una posición de un día para otro. Segunda, no hay prueba fuera de muestra. Y la tercera es la más sutil: las barras diarias de los CFD cubren casi 24 horas, así que el tramo nocturno puede incluir el salto que ocurre cuando la fuente de datos cambia de contrato, lo que se llama rollover. En el Brent, además, se usa un contrato continuo, que es una serie armada pegando trozos de distintos contratos. El patrón puede ser real, o puede ser un artefacto de cómo se construyen los datos. No lo descarté con datos de sesión reales.

**[3:40 — Con tu capital]** (pantalla: tarjeta «Con tu capital»; curva `series/extra-v63.json[0]` contra `[1]`; aviso ámbar)
BOCETO: la curva del oro solo de noche (verde) queda debajo de la gris de comprar y esperar. Sello «BRUTO · SIN COSTOS».
> Veamos qué pasa en dinero con el oro. Con $10,000, comprar el oro solo de noche, de 2012 a 2024, habría dado +$2,721; mantener el oro todo el tiempo, +$6,698. Con $100,000: +$27,208 contra +$66,979. Es decir, aun en bruto, comprar solo de noche ganó menos dinero que mantener el oro. La peor caída desde un máximo fue de −$227 con 10,000 y −$2,266 con 100,000, un −2.3%. Pero recuerda: la curva es bruta. Mantener una posición de noche con un CFD cobra swaps que aquí no están restados, y en la vida real el resultado sería peor.

**[4:20 — Ficha del experimento #63]** (pantalla: tarjeta con la URL)
BOCETO: tarjeta «FICHA · EXPERIMENTO #63» con Estado · Cifra clave · Filtro que decidió · Lección, y la URL `atlas-lab-one.vercel.app/e/63` en grande.
> Ficha del experimento #63. Estado: no concluyente. Cifra clave: en índices, Sharpe de 0.69 de día y de −0.22 de noche; en el oro, 0.99 de noche; el Brent rinde +149% de noche y −72% de día. Filtro que decidió: ninguno; son cifras brutas, sin costos ni prueba fuera de muestra. Lección: el patrón de sesión depende del activo y hay que descartar que sea un artefacto del rollover. Revísalo completo en atlas-lab-one.vercel.app/e/63.

**[4:55 — Conclusión]** (pantalla: texto «no concluyente» y flecha hacia «Experimento #71»)
BOCETO: sello ámbar «NO CONCLUYENTE»; flecha hacia una tarjeta «Experimento 71: con costos reales»; cierre con el logo.
> Veredicto: no concluyente. Hay un patrón de sesión distinto por clase de activo, pero falta descartar que sea un artefacto del rollover y restar los costos. Eso lo hice en el experimento 71, con el spread y el swap reales: allí el oro pasa de 0.99 bruto a −3.11 neto. Lo dejo para el siguiente video. Todos los datos en atlas-lab-one.vercel.app/e/63. El trading no se promete: se prueba. Contenido educativo, no es asesoría financiera.

---

## SHORT (9:16, ≈ 48 s)

**[0-3 s]** (boceto: contador verde «+149%» sobre una luna y contador rojo «−72%» sobre un sol; b-roll de refinería de noche, kb=in; golpe de bajo + sacudida)
> Brent: +149% de noche, −72% de día. ¿Truco o patrón?

**[3-12 s]** (boceto: vela partida en noche/día; b-roll de ciudad al anochecer, kb=out; whoosh)
> Partí cada día en dos: la noche, del cierre a la apertura, y el día, de la apertura al cierre. Siete activos, de 2012 a 2024.

**[12-20 s]** (boceto: barras: índices 0.69 día contra −0.22 noche; oro 0.99 noche; Brent 0.58; ticks)
> En los índices manda el día: Sharpe de 0.69 contra −0.22 de noche. En el oro, de noche: Sharpe de 0.99. En el Brent, 0.58.

**[20-30 s]** (boceto: sello «?» rojo; barra de 24 horas con hueco marcado «rollover»; b-roll de pantallas de trading, kb=in)
> ¿Es una ventaja? Todavía no lo sé. Son cifras brutas, sin costos ni prueba fuera de muestra, y la noche puede incluir un salto de los datos cuando cambia el contrato.

**[30-36 s]** (boceto: tarjeta «Con tu capital»: oro de noche +$27,208 contra mantener +$66,979; sello «BRUTO»)
> Con $100,000, comprar solo de noche el oro, en bruto, dio +$27,208. Mantener el oro, +$66,979.

**[36-41 s]** (boceto: oro cayendo de 0.99 a −3.11 con costos; texto «ver experimento 71»)
> Y con costos reales, el oro cae de 0.99 a −3.11. Eso, en otro video.

**[41-48 s]** (boceto: luna y sol con las dos cifras; logo; abajo, «Experimento #63 completo en el enlace»)
> Video completo en el canal. Experimento 63 completo en el enlace. Más 149 de noche, menos 72 de día: ¿patrón o truco?

Gancho alterno A: «El oro gana de noche con Sharpe 0.99.» · B: «Mismo activo, mismos días: +149% o −72%, según la hora.»

## Descripción (YouTube) — video largo
https://atlas-lab-one.vercel.app/e/63?utm_source=youtube&utm_medium=video&utm_campaign=exp063-t1
Ficha del experimento #63: no concluyente · índices (2012–2024): Sharpe 0.69 de día y −0.22 de noche · oro de noche: 0.99 · cifras brutas, sin costos ni fuera de muestra.
Dividí el retorno diario en noche (cierre a apertura) y día (apertura a cierre) en 7 activos entre 2012 y 2024. El Brent da +149% de noche y −72% de día; el oro, Sharpe 0.99 de noche; en índices manda el día (0.69 contra −0.22). Son cifras brutas y pueden reflejar el rollover de los datos: no concluyente.

Contenido educativo. No es asesoría financiera ni recomendación de inversión.

Capítulos: 0:00 Gancho · 0:25 Presentación · 0:35 Qué se midió · 1:20 Qué esperábamos · 1:55 Resultados en índices · 2:15 Resultados en oro y Brent · 2:45 Por qué todavía no lo creo · 3:40 Con tu capital · 4:20 Ficha del experimento #63 · 4:55 Conclusión

Etiquetas: efecto nocturno, overnight, intradía, petróleo Brent, oro, anomalías de mercado, rollover, Sharpe ratio, backtest, trading con datos, ATLAS Lab, cierre a apertura

## Descripción (YouTube) — Short
https://atlas-lab-one.vercel.app/e/63?utm_source=youtube&utm_medium=short&utm_campaign=exp063-t1
Experimento #63 · Efecto nocturno (sesión diurna vs. nocturna): no concluyente · índices: Sharpe 0.69 de día y −0.22 de noche · cifras brutas, sin costos. Video completo en el canal. No es asesoría financiera.

## Rúbrica (autoevaluación)
| Criterio | Short | Largo |
|---|---|---|
| hook_0_3s | 5 | 5 |
| ritmo | 4 | 4 |
| promesa_cumplida | 4 | 4 |
| potencial_loop | 5 | 4 |
| claridad_no_traders | 4 | 4 |
| honestidad_atlas | 5 | 5 |
| audio | 4 | 4 |
| cta | 4 | 4 |
| **Promedio** | **4.38** | **4.25** |

## Otros temas de este experimento
- Tema 1 de 4: `exp-063-efecto-nocturno.md` — Brent: +149% de noche y −72% de día. ¿Truco o patrón?
- Tema 2 de 4: `exp-063-t2-indices-manda-el-dia.md` — S&P 500: Sharpe −0.33 de noche y 0.84 de día (2012–2024)
- Tema 3 de 4: `exp-063-t3-artefacto-del-rollover.md` — Brent: +149% de noche y −72% de día. Antes de creerlo, hay que descartar un error de los datos
- Tema 4 de 4: `exp-063-t4-oro-bruto-contra-costos.md` — Oro de noche: Sharpe 0.99 en bruto, −3.11 con los costos reales del broker

# Experimento #73 — Tema 3: Faber en dos versiones (decidir cada día o cada mes: +2.7% al año las dos)

**Tema 3 de 3 del experimento #73** · Qué aporta frente a los otros temas: es el tema de la robustez y de la letra pequeña. Compara la versión diaria (media de 200 días) con la mensual (media de 10 meses, la de la idea original) y muestra que dan el mismo crecimiento anual, +2.7% contra +5.2% de no hacer nada; y qué significa ese +2.7% para quien retira dinero. Se entiende sin los otros temas.
Estado del guion: **BORRADOR — pendiente de aprobación**
Estado del experimento: **parcial** (recorta el drawdown a −10.2% frente a −29.8% sin estrategia, pero su Sharpe de 0.58 no le gana a comprar y esperar, 0.67)
Serie: B (estrategias famosas, puestas a prueba). Cruza con #78.
Datos usados: `experiments.json` (v=73: kpis —crecimiento anual de la versión mensual +2.7% contra +5.2%—, metrics, params_view, analysis; v=78: saldo final con retiro de 4%: $37,646 de Faber contra $56,401) · `exp_details.json` (extra-v73: algo, code —incluye la versión mensual `resample("M")` con media de 10 meses—, filters) · `series/extra-v73.json` ([0] Faber diario, [1] los 11 activos comprar y esperar; el crecimiento anual de la curva diaria, 2.7%, se calcula de la curva) · tabla «Con tu capital» (fila #73).
Producción (CLAUDE.md del canal): b-roll real detrás de cada escena con overlay 0.6, Ken Burns alternando, subtítulos karaoke en MAYÚSCULAS, un dato visual por escena. Colores: rojo `#e11d2a`, verde `#22c55e`, fondo `#09090b`.

## Títulos
1. Faber en dos versiones, el mismo +2.7% al año (comprar y esperar: +5.2%)
2. La media de 10 meses de verdad: probé la versión mensual de Faber
3. ¿Importa decidir cada día o cada mes? Dos versiones de la misma regla

## Miniatura
Fondo `#09090b`. Dos relojes: uno con manecilla diaria (calendario con 365 casillas) y otro con una sola casilla marcada por mes; entre ambos, «+2.7%» en verde `#22c55e` y, tachado en gris, «+5.2%». Texto: «MISMO RESULTADO». Logo ATLAS esquina inferior derecha.

---

## VIDEO LARGO (≈ 5½ min)

**[0:00 — Gancho]** (pantalla: dos curvas, «versión diaria +2.7%» y «versión mensual +2.7%»; una barra gris más alta, «comprar y esperar +5.2%»)
BOCETO: las dos curvas verdes avanzan juntas hasta el mismo número; la barra gris sube por encima con whoosh; golpe de bajo en +5.2%.
> Probé la estrategia de Faber de dos maneras: decidiendo cada día y decidiendo una vez al mes. Resultado: las dos crecen 2.7% al año. Comprar y esperar los mismos once activos creció 5.2%.

**[0:18 — Qué experimento es]** (pantalla: rótulo «Experimento #73 · ATLAS Lab» y el nombre debajo)
BOCETO: rótulo con el número 73 y el nombre «Faber GTAA — timing con MA200 (Meb Faber)»; logo en la esquina.
> Este es el experimento #73 de ATLAS Lab: Faber GTAA, timing con la media de 200 días. Todos los resultados están en la página del experimento.

**[0:45 — 200 días son 10 meses]** (pantalla: calendario con 200 días sombreados que se agrupan en 10 meses)
BOCETO: 200 casillas diarias que se agrupan en 10 bloques mensuales; texto «≈ 10 meses».
> La regla de Meb Faber es de una línea: mantén cada activo solo si su precio está sobre su media de 10 meses, y si no, pasa a efectivo. Diez meses de bolsa son unos 200 días, por eso la versión diaria usa la media de 200 días. Es un interruptor por activo, con once activos: cuatro índices, oro, cuatro pares de divisas, Brent y WTI.

**[1:25 — Las dos versiones]** (pantalla: dos líneas de tiempo, una con marcas diarias y otra con una marca al final de cada mes)
BOCETO: línea 1 «diaria: cada día compara el cierre con su media de 200 días»; línea 2 «mensual: una vez al mes compara el cierre del mes con el promedio de los últimos 10 cierres mensuales».
> La versión diaria compara el precio de cada día con su media de 200 días. La versión mensual decide solo una vez al mes: compara el cierre del mes con el promedio de los últimos 10 cierres mensuales. Las dos usan la señal anterior, nunca la actual, y de la diaria sé que paga 3 puntos básicos de costo por movimiento. Un punto básico es la centésima parte de 1%.

**[2:10 — Resultados]** (pantalla: tabla)
BOCETO: tabla con barras gemelas; las dos filas de Faber en verde y la de comprar y esperar en gris.
| Medida (11 activos) | Faber, versión diaria | Faber, versión mensual | Comprar y esperar |
|---|---|---|---|
| Crecimiento anual, 2012–2024 | +2.7% | +2.7% | +5.2% |
| Sharpe 2012–2018 / fuera de muestra | 0.26 / 0.58 | no se midió | 0.20 / 0.67 |
| Peor caída fuera de muestra | −10.2% | no se midió | −29.8% |
> Las dos versiones crecen 2.7% al año, entre 2012 y 2024, contra 5.2% de comprar y esperar. De la versión mensual solo tengo el crecimiento anual; del resto, la diaria: Sharpe de 0.26 en 2012–2018 y 0.58 fuera de muestra, contra 0.20 y 0.67, y una peor caída de −10.2% contra −29.8%. El Sharpe mide cuánto rindes por cada unidad de riesgo, y fuera de muestra son los datos de 2019 a 2024 que no se usaron para diseñar.

**[3:00 — Por qué importa que den lo mismo]** (pantalla: dos preguntas: «¿depende del detalle?» y «¿o de la idea?»)
BOCETO: balanza con «detalle» e «idea»; el platillo del detalle sube (pesa poco).
> Cuando una ventaja depende de un detalle de cálculo, cambia al tocar el detalle. Aquí no: decidir cada día o cada mes da el mismo crecimiento. Eso hace más creíble la conclusión: la regla controla el riesgo y se queda atrás en retorno, sea cual sea la frecuencia con que la mires. El experimento no separa la causa de la coincidencia; lo que muestra es que, en este caso, la frecuencia de decisión no cambia el resultado.

**[3:35 — Qué significa +2.7% si retiras dinero]** (pantalla: dos frascos; retiro de 4% al año)
BOCETO: dos frascos de $50,000 que se vacían a ritmo de 4% anual: Faber termina en $37,646, comprar y esperar en $56,401; línea «+2.7% < 4%».
> Un dato del experimento 78: si empiezas con $50,000 y retiras 4% al año, Faber termina en $37,646 y comprar y esperar en $56,401. La razón es sencilla: un crecimiento de 2.7% es menor que el retiro de 4%, así que el retiro va consumiendo el capital. Para dormir tranquilo, una caída menor; para sostener un retiro, un retorno que lo cubra.

**[4:10 — Con tu capital]** (pantalla: tarjeta «Con tu capital» con selector)
BOCETO: curvas verde y gris; nota «versión diaria, 2012–2024».
> Con la versión diaria, entre enero de 2012 y diciembre de 2024: con $10,000, +$4,171 contra +$9,234 de comprar y esperar; con $100,000, +$41,712 contra +$92,344.

**[4:40 — Preguntas de un escéptico]** (pantalla: tres tarjetas: «¿otros activos?», «¿otras medias?», «¿costos de la mensual?»)
BOCETO: tres tarjetas que se voltean con «no probado».
> Preguntas que me haría un escéptico. ¿Y con otros activos? No lo probé. ¿Y con otra media? Tampoco. ¿Y los costos de la versión mensual? No tengo ese detalle. Lo que sí está medido es que las dos versiones crecen lo mismo.

**[5:05 — Ficha del experimento #73]** (pantalla: tarjeta con la ficha y la URL abajo)
BOCETO: tarjeta con cinco líneas que entran con tick y, al final, la URL resaltada en verde.
> Ficha del experimento 73. Estado: parcial. Cifras clave: Sharpe fuera de muestra de 0.58 contra 0.67; drawdown de −10.2% contra −29.8%; crecimiento de 2.7% al año con las dos versiones, contra 5.2%. Lo que decidió: no supera a comprar y esperar. Lección: gestiona el riesgo, no el retorno. Revísalo completo en atlas-lab-one.vercel.app/e/73.

**[5:35 — Cierre]**
BOCETO: dos relojes con el mismo +2.7% y la barra gris por encima; logo.
> Todos los datos en atlas-lab-one.vercel.app, experimento 73. El trading no se promete: se prueba. Contenido educativo, no es asesoría financiera.

---

## SHORT (9:16, ≈ 48 s)

**[0-3 s]** (boceto: dos curvas verdes que llegan a «+2.7%» y barra gris «+5.2%»; b-roll de calendario, kb=in; golpe de bajo)
> Dos versiones de Faber, el mismo resultado: 2.7% al año. Comprar y esperar: 5.2%.

**[3-13 s]** (boceto: semáforo por activo; whoosh)
> La regla: mantén cada activo si está sobre su media de 10 meses; si no, efectivo. Once activos.

**[13-25 s]** (boceto: dos líneas de tiempo: marcas diarias y una marca por mes)
> Una versión decide cada día, con la media de 200 días. La otra, una vez al mes, con los últimos 10 cierres mensuales.

**[25-35 s]** (boceto: dos barras verdes iguales y una gris más alta)
> Las dos crecen 2.7% al año, de 2012 a 2024. Quedarte quieto en los mismos once activos: 5.2%.

**[35-43 s]** (boceto: frasco de $50,000 que se vacía; «37,646» contra «56,401»)
> Y si retiras 4% al año de $50,000, Faber termina en $37,646. Quedarte quieto: $56,401.

**[43-48 s]** (boceto: texto «Experimento #73 completo en el enlace»; logo)
> Video completo en el canal y experimento #73 completo en el enlace. ¿Cada día o cada mes?

Gancho alterno A: «Cambié de diario a mensual y el resultado no cambió: 2.7%.» · B: «Un crecimiento de 2.7% no cubre un retiro de 4%.»

## Descripción de YouTube — video largo
https://atlas-lab-one.vercel.app/e/73?utm_source=youtube&utm_medium=video&utm_campaign=exp073-t3
Ficha: experimento #73, Faber GTAA (Meb Faber). Estado: parcial. Crecimiento anual +2.7% en las versiones diaria y mensual, contra +5.2% de comprar y esperar; Sharpe fuera de muestra 0.58 contra 0.67; drawdown −10.2% contra −29.8%.
La regla de la media de 10 meses probada de dos maneras, decidiendo cada día o cada mes, en 11 activos. Con retiro de 4% al año sobre $50,000 (experimento 78): $37,646 contra $56,401.
Contenido educativo. No es asesoría financiera ni recomendación de inversión.

## Descripción de YouTube — Short
https://atlas-lab-one.vercel.app/e/73?utm_source=youtube&utm_medium=short&utm_campaign=exp073-t3
Ficha: experimento #73, parcial. Dos versiones de Faber: +2.7% al año las dos, contra +5.2% de comprar y esperar. Contenido educativo, no es asesoría financiera.

## Capítulos
0:00 Gancho · 0:18 Qué experimento es · 0:45 200 días son 10 meses · 1:25 Las dos versiones · 2:10 Resultados · 3:00 Por qué importa que den lo mismo · 3:35 Qué significa 2.7% si retiras dinero · 4:10 Con tu capital · 4:40 Preguntas de un escéptico · 5:05 Ficha del experimento #73 · 5:35 Cierre

## Etiquetas
Faber GTAA, Meb Faber, media de 10 meses, versión mensual, asignación táctica de activos, retiro del 4%, tendencia, backtest, robustez, trading con datos, ATLAS Lab, comprar y mantener

## Rúbrica (autoevaluación, 1–5)
| Pieza | hook_0_3s | ritmo | promesa_cumplida | potencial_loop | claridad_no_traders | honestidad_atlas | audio | cta | Promedio |
|---|---|---|---|---|---|---|---|---|---|
| Largo | 4 | 4 | 5 | 4 | 4 | 5 | 4 | 4 | 4.25 |
| Short | 5 | 4 | 5 | 4 | 4 | 5 | 4 | 4 | 4.38 |

Hook ≥ 4 ✓ · honestidad 5 ✓. Punto débil: de la versión mensual solo existe el crecimiento anual (+2.7% contra +5.2%); el largo lo dice en la tabla («no se midió») y no inventa su Sharpe ni su caída.

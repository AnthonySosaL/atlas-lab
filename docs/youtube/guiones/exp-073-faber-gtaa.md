# Experimento #73 — Faber GTAA, timing con MA200 (Meb Faber)

Estado del guion: **BORRADOR — pendiente de aprobación**
Estado del experimento: **parcial** (recorta el drawdown a −10.2% frente a −29.8% sin estrategia, pero su Sharpe de 0.58 no le gana a comprar y esperar, 0.67)
Serie: B (estrategias famosas, puestas a prueba). Mismo perfil que #59 (trend-flat) y primo del #74.
Datos usados: `experiments.json` (v=73: verdict, analysis, notes, kpis, metrics, params_view, period) · `exp_details.json` (extra-v73: algo, code, filters) · `series/extra-v73.json` ([0] Faber GTAA, [1] los 11 activos comprar y esperar) · tabla «Con tu capital» (docs/youtube, archivo de capital, fila #73; el $10k se calcula con la misma regla de la tarjeta del sitio).

## Títulos
1. La estrategia para dormir tranquilo: −10.2% contra −29.8%
2. Faber GTAA: la media de 10 meses, probada en 11 activos con costos
3. Protege tu cuenta, pero ganas menos: +28.5% contra +70.8% (2019–2024)

## Miniatura
Fondo `#09090b`. Un escudo grande verde `#22c55e` frenando una curva roja `#e11d2a` que cae; detrás, una curva gris que sigue subiendo más alto. Texto blanco: «UN ESCUDO». Logo ATLAS esquina inferior derecha.

---

## VIDEO LARGO (≈ 6½ min)

**[0:00 — Gancho]** (pantalla: dos barras de drawdown, gris «−29.8%» larga y verde «−10.2%» corta; después dos barras de retorno, «+70.8%» y «+28.5%»)
BOCETO: la barra verde corta aparece primero con un golpe de bajo; un segundo después las barras de retorno la contradicen (la verde queda más corta); cartel «¿vale la pena?».
> Una regla de una sola línea recortó la peor caída de −29.8% a −10.2%. Pero entre 2019 y 2024 ganó +28.5%, contra +70.8% de no hacer nada. Es la estrategia de asignación táctica de Meb Faber. ¿Sirve? Depende de para qué la quieras, y los números lo dicen con claridad.

**[0:20 — Qué es GTAA]** (pantalla: tres activos y un semáforo para cada uno: verde conserva, rojo pasa a efectivo)
BOCETO: tres activos con semáforo: verde «conserva», rojo «a efectivo»; texto «asignación táctica global de activos».
> GTAA significa asignación táctica global de activos. Suena complicado, pero la idea es sencilla: en vez de mantener siempre todos tus activos, decides cada uno según su tendencia. Si un activo va bien, lo conservas; si va mal, lo cambias por efectivo. La versión de Meb Faber es la base de la asignación táctica de activos, y se apoya en un solo indicador: la media de 10 meses.

**[0:50 — La regla]** (pantalla: precio con una media de 200 días; verde cuando está sobre ella, «efectivo» en gris cuando está debajo)
BOCETO: un semáforo por activo: sobre la media, «invertido»; bajo la media, «efectivo». Debajo, la cesta de 11 activos como mosaico: 4 índices, oro, 4 pares de divisas, Brent y WTI.
> La regla es esta: mantengo cada activo solo si su cierre está sobre su media de 10 meses, que equivale a unos 200 días; si no, paso a efectivo. Es un interruptor por activo: encendido cuando el precio está sobre su media, apagado cuando está debajo. La idea es evitar estar dentro de un activo cuando entra en una tendencia bajista larga.

**[1:15 — La cesta de 11 activos]** (pantalla: mosaico de 11 casillas que se encienden y apagan de forma independiente)
BOCETO: mosaico de 11 casillas (4 índices, oro, 4 pares de divisas, Brent y WTI) que se encienden y se apagan de forma independiente.
> La cartera reparte el mismo peso entre 11 activos: 4 índices, oro, 4 pares de divisas, Brent y WTI. Cada uno decide por su cuenta si está dentro o en efectivo. Así, en un mal año, la cartera puede quedar parcialmente en efectivo, y en un buen año, completamente invertida.

**[1:40 — Cómo lo probé]** (pantalla: checklist de filtros con los valores reales)
BOCETO: ✓ En muestra 2012–2018: Sharpe 0.26 (> 0.13) · ✓ Fuera de muestra 2019–2024: Sharpe 0.58 (> 0.30) · ✗ Superar a comprar y esperar · ✓ Controla la caída · ✓ Costos: 3 bps · ✓ Señal de ayer · — Deflated Sharpe: no aplicado.
> Costo de 3 puntos básicos por movimiento, y la señal siempre de ayer. Diseño en 2012–2018 y prueba fuera de muestra, en un periodo no usado al diseñar, de 2019 a 2024. En 2012–2018 el Sharpe es 0.26. El Sharpe mide cuánto rindes por cada unidad de riesgo. Todo se compara contra comprar y esperar la misma cesta. No apliqué Deflated Sharpe en este experimento: no hace falta para ver que la regla no le gana al Sharpe de comprar y esperar.

**[2:10 — Resultados]** (pantalla: tabla con barras gemelas, estrategia contra sin estrategia)
BOCETO: cada fila tiene una barra verde y una gris; la fila del drawdown es la única donde gana la verde.
| Medida | Faber GTAA | Sin estrategia |
|---|---|---|
| Sharpe fuera de muestra (2019–24) | 0.58 | 0.67 |
| Drawdown máximo fuera de muestra | −10.2% | −29.8% |
| Retorno fuera de muestra | +28.5% | +70.8% |
| Crecimiento anual, versión mensual (2012–24) | +2.7% | +5.2% |
> Fuera de muestra, el Sharpe es 0.58 contra 0.67: no le gana. El drawdown, la peor caída desde un máximo, es de −10.2% contra −29.8%: aquí gana por mucho. El retorno es +28.5% contra +70.8%. Y la versión mensual, con la media de 10 meses de verdad, crece +2.7% al año contra +5.2% de no hacer nada.

**[2:35 — Qué significa esa caída]** (pantalla: dos curvas de capital, una con un valle profundo y otra con un valle suave)
BOCETO: dos curvas de capital: gris con un valle profundo (−29.8%) y verde con un valle suave (−10.2%); texto «2019–2024».
> Vale la pena detenerse en la caída. El drawdown es la peor caída desde un máximo. Sin estrategia, entre 2019 y 2024, el capital llegó a caer −29.8% desde su pico. Con la regla de Faber, la peor caída fue de −10.2%. En la práctica, es la diferencia entre una caída que cuesta mucho aguantar y otra mucho más llevadera. Por eso la estrategia no es un fracaso: cumple una función real, solo que no es la de ganar más.

**[3:10 — Cómo juzgar una estrategia de riesgo]** (pantalla: dos balanzas: «caída máxima» mejora y «retorno» empeora; el Sharpe en el centro)
BOCETO: dos balanzas, «caída máxima» que mejora (−29.8% → −10.2%) y «retorno» que empeora (+70.8% → +28.5%), con el Sharpe 0.58 contra 0.67 en el centro.
> Hay estrategias que se juzgan por cuánto ganan y otras por cuánto te evitan perder. Faber GTAA pertenece al segundo grupo. Para juzgarla, conviene mirar dos cosas a la vez: la caída máxima y el retorno. La caída máxima mejora mucho, de −29.8% a −10.2%; el retorno baja a menos de la mitad, de +70.8% a +28.5%. El Sharpe, que combina las dos cosas, queda en 0.58 contra 0.67: el riesgo baja más o menos al ritmo del retorno, y por eso no hay una ventaja neta.

**[3:45 — Qué es y qué no es]** (pantalla: dos etiquetas: «gestión de riesgo» en verde, «ventaja sobre el mercado» tachada en rojo)
BOCETO: dos etiquetas: «gestión de riesgo» en verde y «ventaja sobre el mercado» tachada en rojo; referencia al experimento 59.
> Es gestión de riesgo, no una ventaja. Tiene el mismo perfil que el trend-flat del experimento 59, que murió en el triple test: al salir a efectivo cuando el precio cae bajo su media, evita buena parte de las caídas, pero también se pierde parte de las subidas. Sirve para dormir tranquilo, no para batir al mercado.

**[4:10 — Con tu capital]** (pantalla: tarjeta «Con tu capital» con el selector; curva `series/extra-v73.json[0]` por debajo de la gris `[1]`)
BOCETO: la tarjeta cubre todo el periodo 2012–2024; una nota distingue «2012–2024» de «fuera de muestra 2019–2024».
> Veamos todo el periodo, de enero de 2012 a diciembre de 2024. Con $10,000, +$4,171; comprar y esperar los 11 activos, +$9,234. Con $100,000: +$41,712 contra +$92,344. La peor caída desde un máximo en todo el periodo fue de −$1,336 con 10,000 y −$13,361 con 100,000, un −13.4%. Ojo con no mezclar: el −10.2% de antes es solo de 2019 a 2024. En dinero, la regla te deja con menos de la mitad de lo que ganó quedarse quieto, a cambio de una caída menor.

**[4:45 — Preguntas de un escéptico]** (pantalla: tres tarjetas: «¿media mensual?», «¿otros activos?», «¿decidir más tarde?»)
BOCETO: tres tarjetas que se voltean: «¿media mensual?» → +2.7% contra +5.2%; «¿otros activos?» → no probado; «¿decidir más tarde?» → no probado.
> Preguntas que me haría un escéptico. ¿Y si usara la media de 10 meses de verdad, con datos mensuales? Lo medí en una versión mensual: crece +2.7% al año contra +5.2% de no hacer nada, de 2012 a 2024. ¿Y si cambio los 11 activos por otros? No lo probé. ¿Y si espero más tiempo antes de decidir? Tampoco. Lo que sí queda claro es que, en este conjunto y en estos años, la regla controla el riesgo y no mejora el rendimiento ajustado por riesgo.

**[5:20 — Para quién sirve]** (pantalla: dos personas: una que quiere maximizar y otra que quiere aguantar caídas)
BOCETO: dos personas: una mira el saldo final (ganar más) y otra mira la caída (dormir tranquila); cada una elige una barra.
> Si tu prioridad es ganar lo máximo posible, esta regla te dejó con menos dinero. Si tu prioridad es aguantar una caída menor, sí hizo su trabajo. Esa diferencia es lo que significa «parcial»: la estrategia cumple una de las dos cosas que se le pedían, la de controlar el riesgo, y falla la otra, la de superar al mercado.

**[5:50 — Resumen]** (pantalla: tarjeta con las cifras clave: 0.26 · 0.58 · 0.67 · −10.2% · −29.8% · +28.5% · +70.8% · +$41,712 · +$92,344)
BOCETO: tarjeta con las cifras clave en dos columnas (Faber contra sin estrategia) y sello ámbar «PARCIAL».
> Resumen en tres bloques de cifras. Sharpe de 0.26 en 2012–2018 y 0.58 fuera de muestra, contra 0.67 de comprar y esperar. Drawdown de −10.2% contra −29.8%. Retorno fuera de muestra de +28.5% contra +70.8%. Y en dinero, con $100,000 entre 2012 y 2024: +$41,712 contra +$92,344. Veredicto: parcial.

**[6:10 — Cierre]**
BOCETO: escudo verde sobre la curva roja que cae; cierre con el logo.
> Resultado parcial: recorta el drawdown a −10.2% frente a −29.8%, pero su Sharpe de 0.58 no le gana al 0.67 de comprar y esperar. Todos los datos en atlas-lab-one.vercel.app, experimento 73. El trading no se promete: se prueba. Contenido educativo, no es asesoría financiera.

---

## SHORT (9:16, ≈ 48 s)

**[0-3 s]** (boceto: barras «−29.8%» gris y «−10.2%» verde; b-roll de escudo o paraguas bajo la lluvia, kb=in; golpe de bajo)
> Esta regla recortó la peor caída de −29.8% a −10.2%.

**[3-13 s]** (boceto: semáforo por activo, sobre la media de 200 días = verde, debajo = efectivo; whoosh)
> Se llama Faber GTAA: mantén cada activo solo si está sobre su media de 200 días; si no, pasa a efectivo. Probé 11 activos, con costos de 3 puntos básicos.

**[13-21 s]** (boceto: tabla animada: drawdown −10.2% contra −29.8% en verde; retorno +28.5% contra +70.8% en rojo; ticks)
> Fuera de muestra, de 2019 a 2024, la peor caída fue de −10.2% contra −29.8% de no hacer nada. Pero ganó +28.5%, contra +70.8%.

**[21-28 s]** (boceto: Sharpe 0.58 contra 0.67; sello «parcial» en ámbar; b-roll de persona durmiendo, kb=out)
> Su Sharpe fue 0.58 contra 0.67. Es gestión de riesgo, no ventaja: sirve para dormir tranquilo, no para batir al mercado.

**[28-36 s]** (boceto: tarjeta «Con tu capital»: +$41,712 contra +$92,344; caída −13.4%)
> En todo el periodo, de 2012 a 2024, con $100,000: +$41,712 contra +$92,344 de comprar y esperar, con una peor caída de −13.4%.

**[36-43 s]** (boceto: versión mensual con la media de 10 meses; barras +2.7% y +5.2%)
> También probé la versión mensual con la media de 10 meses: crece +2.7% al año contra +5.2% de no hacer nada.

**[43-48 s]** (boceto: texto «¿cuánto recorta?»; logo)
> Veredicto: parcial. Video completo en el canal. ¿Cuánto recorta la peor caída una regla de una línea?

Gancho alterno A: «Menos caída, menos ganancia: el trato que ofrece Faber GTAA.» · B: «+28.5% contra +70.8%: lo que cuesta dormir tranquilo.»

## Descripción (YouTube)
Faber GTAA (Meb Faber): mantener cada activo solo si está sobre su media de 200 días (≈ 10 meses); si no, efectivo. Cartera de 11 activos con costos de 3 puntos básicos, diseño 2012–2018 y prueba fuera de muestra 2019–2024. Recorta el drawdown a −10.2% (−29.8% sin estrategia), pero su Sharpe de 0.58 no le gana al 0.67 de comprar y esperar. Parcial.

Datos completos: https://atlas-lab-one.vercel.app (experimento #73)

Contenido educativo. No es asesoría financiera ni recomendación de inversión.

Capítulos: 0:00 Gancho · 0:20 Qué es GTAA · 0:50 La regla · 1:15 La cesta de 11 activos · 1:40 Cómo lo probé · 2:10 Resultados · 2:35 Qué significa esa caída · 3:10 Cómo juzgar una estrategia de riesgo · 3:45 Qué es y qué no es · 4:10 Con tu capital · 4:45 Preguntas de un escéptico · 5:20 Para quién sirve · 5:50 Resumen · 6:10 Cierre

Etiquetas: Faber GTAA, Meb Faber, asignación táctica de activos, media móvil 200, drawdown, gestión de riesgo, tendencia, backtest, Sharpe ratio, trading con datos, ATLAS Lab, comprar y mantener

## Rúbrica (autoevaluación)
| Criterio | Short | Largo |
|---|---|---|
| hook_0_3s | 4 | 4 |
| ritmo | 4 | 4 |
| promesa_cumplida | 5 | 5 |
| potencial_loop | 5 | 4 |
| claridad_no_traders | 4 | 4 |
| honestidad_atlas | 5 | 5 |
| audio | 4 | 4 |
| cta | 4 | 4 |
| **Promedio** | **4.38** | **4.25** |

## Otros temas de este experimento
- Tema 1 (este archivo): `exp-073-faber-gtaa.md` — Faber GTAA, timing con MA200 (Meb Faber)
- Tema 2: `exp-073-t2-faber-contra-turtle.md` — Faber contra Turtle (dos sistemas famosos de tendencia, el mismo dinero final)
- Tema 3: `exp-073-t3-dos-versiones-mismo-resultado.md` — Faber en dos versiones (decidir cada día o cada mes: +2.7% al año las dos)

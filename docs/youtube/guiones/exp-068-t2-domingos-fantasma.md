# Experimento #68 — Tema 2: 484 domingos en una serie de bolsa (revisar los datos antes de la estadística)

**Tema 2 de 3 del experimento #68** · Qué aporta frente a los otros temas: el tema 1 es el resultado (¿hay un mejor día para comprar?); este es el método de datos: qué pasa con una serie que trae filas de sábado y domingo y si cambia la conclusión al quitarlas. Se entiende sin haber visto el tema 1.
Estado del guion: **BORRADOR — pendiente de aprobación**
Estado del experimento: **murió** (diferencias dentro del ruido: p = 0.67 y p = 0.89; con solo lunes a viernes, p = 0.70)
Serie: F (anomalías y estacionalidad).
Datos usados: `exp_details.json` (extra-v68: algo, con las 484 filas de domingo y 102 de sábado) · `experiments.json` (v=68: verdict, analysis, chart.bars; v=49: description y params_view para las 105 de 630 filas de domingo; v=78: nota de las 322 filas por año; v=63: barras de casi 24 horas). Experimento de datos: no hay curva en `series/` ni «Con tu capital». La única cifra calculada es la diferencia 6.7 − 5.1 = 1.6.
Producción (CLAUDE.md del canal): b-roll real detrás de cada escena con overlay 0.6, Ken Burns alternando, subtítulos karaoke en MAYÚSCULAS, un dato visual por escena. Colores: rojo `#e11d2a`, verde `#22c55e`, fondo `#09090b`.

## Títulos
1. 484 domingos en los datos del S&P 500: ¿cambia el efecto de fin de mes?
2. Lunes a viernes: +6.7 contra +5.1 puntos básicos (p = 0.70)
3. Antes de la estadística, los datos: lo que encontré en una serie de bolsa

## Miniatura
Fondo `#09090b`. Una fila de calendario con cinco columnas blancas (lun–vie) y dos columnas rojas `#e11d2a` con signo «?» (sáb, dom). Texto enorme en rojo: «484 DOMINGOS». Logo ATLAS arriba a la derecha.

---

## VIDEO LARGO (≈ 6 min, experimento de datos)

**[0:00 — Gancho]** (pantalla: calendario de lunes a viernes; aparecen dos columnas extra, sábado y domingo, con los contadores «102» y «484»)
BOCETO: columnas lun–vie en blanco; sáb y dom entran en rojo con whoosh; golpe de bajo al llegar a 484.
> Un día de bolsa es de lunes a viernes. Pero en mi serie del S&P 500 hay 484 filas de domingo y 102 de sábado. ¿Cambian esas filas lo que concluí sobre el efecto de calendario? Lo comprobé, y el resultado enseña algo más útil que el resultado.

**[0:18 — Qué experimento es]** (pantalla: rótulo «Experimento #68 · ATLAS Lab» y el nombre debajo)
BOCETO: rótulo con el número 68 y el nombre «Estacionalidad (día de la semana, cambio de mes)»; logo en la esquina.
> Este es el experimento #68 de ATLAS Lab: Estacionalidad, día de la semana y cambio de mes. Todos los resultados están en la página del experimento.

**[0:30 — Qué se había medido]** (pantalla: tarjeta «S&P 500 · 2012–2024 · retorno medio diario» con las cuatro barras del experimento)
BOCETO: barras grises: cambio de mes +5, resto del mes +4, día más bajo +3, día más alto +9; al lado, la regla de un punto básico (centésima parte de 1%).
> Para que este video se entienda solo: medí el retorno medio diario del S&P 500 entre 2012 y 2024, en puntos básicos; un punto básico es la centésima parte de un 1%. Por día de la semana: lunes +9, martes +3 y miércoles, jueves y viernes +5. Y el cambio de mes, los días 28 al 3, rinde +5 contra +4 el resto del mes. Dos pruebas estadísticas dicen que esas diferencias son ruido: p de 0.67 y de 0.89.

**[1:10 — Las filas que no deberían estar]** (pantalla: tabla con tres líneas: «lunes a viernes», «sábado: 102 filas, +0.1», «domingo: 484 filas, −3.2»)
BOCETO: tabla que se llena fila a fila; las de sábado y domingo en rojo con la etiqueta «fuera de la tabla por día de la semana».
> Revisando la serie vi algo raro. Además de lunes a viernes trae 484 filas de domingo, con −3.2 puntos básicos de media, y 102 de sábado, con +0.1. Cada fila es un día con su retorno. No investigué por qué la fuente de datos las incluye en este experimento; en el experimento 63 la nota dice que las barras diarias de estos instrumentos cubren casi 24 horas. Lo que sí hice fue medir lo que valen esas filas.

**[1:55 — Dónde se cuelan]** (pantalla: dos cajas, «tabla por día de la semana» y «resto del mes»; las filas de fin de semana entran solo en la segunda)
BOCETO: flechas rojas llevan las filas de sábado y domingo a la caja «resto del mes»; la caja de lunes a viernes las rechaza.
> Esas filas no están en la tabla por día de la semana, que solo reparte de lunes a viernes. Pero sí entran en el «resto del mes», el grupo contra el que comparo el cambio de mes. Es decir, el promedio de +4 se calculó con unos domingos que valen −3.2 de media. Y si un domingo cae entre el día 28 y el 3, también entra en la ventana de fin de mes.

**[2:35 — La comprobación]** (pantalla: tabla comparativa con dos columnas)
BOCETO: dos columnas, «todas las filas» y «solo lunes a viernes»; las cifras cambian con tick; sello «p casi igual».
| Medida (S&P 500, 2012–2024) | Todas las filas | Solo lunes a viernes |
|---|---|---|
| Cambio de mes (días 28 a 3) | +5 | +6.7 |
| Resto del mes | +4 | +5.1 |
| Prueba t del cambio de mes (p) | 0.67 | 0.70 |
> Repetí la comparación quitando todo lo que no fuera lunes a viernes. El cambio de mes sube a +6.7 puntos básicos por día y el resto del mes sube a +5.1. La prueba da p de 0.70. Los dos promedios subieron porque los fines de semana los estaban bajando.

**[3:15 — Qué cambia y qué no]** (pantalla: una escala de 0 a 1; la aguja pasa de 0.67 a 0.70, siempre en la zona «compatible con azar»)
BOCETO: escala de p-valor con zona gris «ruido»; la aguja se mueve un poco y se queda en la zona gris; texto «diferencia: de 1 a 1.6 puntos básicos».
> Qué cambió: la diferencia entre cambio de mes y resto pasa de 1 punto básico a 1.6. Qué no cambió: el veredicto. Un p de 0.70, igual que el de 0.67, dice que esa diferencia se explica por casualidad. Esta es la señal de una conclusión sólida: sobrevive a limpiar los datos. Si hubiera dependido de los domingos, habría sido un artefacto de la base de datos y no una anomalía de mercado.

**[3:55 — El mismo detalle en otros experimentos]** (pantalla: tres tarjetas: «#68: 484 domingos», «#49: 105 de 630 filas», «#78: ~322 filas por año»)
BOCETO: tres tarjetas que se voltean con tick; texto «el calendario de la base de datos importa».
> No es un caso aislado. En el experimento 49, que operó el cambio de mes en cuatro índices, 105 de las 630 filas de la ventana eran domingos, y como la regla cuenta filas, no días de bolsa, la ventana se corre. En el experimento 78 la nota habla de unas 322 filas por año en esas series. Cuando una regla depende del calendario, hay que mirar cómo cuenta los días la base de datos.

**[4:30 — Mi lista de revisión]** (pantalla: checklist de cuatro casillas que se marcan)
BOCETO: cuatro casillas: «¿cuántas filas por semana?», «¿qué valen las filas raras?», «¿cambia la conclusión si las quito?», «¿mi regla cuenta filas o días?».
> Esto es lo que ahora reviso antes de calcular nada. Una: cuántas filas por semana trae la serie. Dos: qué valen las filas raras, aquí −3.2 y +0.1. Tres: si la conclusión cambia al quitarlas, aquí no. Y cuatro: si mi regla cuenta filas o días de bolsa. Son cuatro minutos de revisión que evitan conclusiones falsas.

**[5:00 — Preguntas de un escéptico]** (pantalla: tres tarjetas con la etiqueta «no medido»: «¿festivos?», «¿otros índices?», «¿antes de 2012?»)
BOCETO: tres tarjetas que se voltean: festivos, otros índices, antes de 2012; todas «no medido».
> Preguntas que me haría un escéptico. ¿Y los festivos? No los medí. ¿Y otros índices? Solo medí el S&P 500. ¿Y antes de 2012? Tampoco. Lo medido es esto: quitar fines de semana no cambia el veredicto.

**[5:25 — Ficha del experimento #68]** (pantalla: tarjeta con la ficha y la URL abajo)
BOCETO: tarjeta con cuatro líneas que entran con tick y, al final, la URL resaltada en verde.
> Ficha del experimento 68. Estado: murió. Cifra clave: cambio de mes +5 contra +4 puntos básicos por día, con p de 0.67; y solo de lunes a viernes, +6.7 contra +5.1, con p de 0.70. Lo que decidió: la prueba estadística, que dice que las diferencias son ruido. Lección: revisa los datos antes de la estadística, y comprueba que la conclusión sobrevive. Revísalo completo en atlas-lab-one.vercel.app/e/68.

**[5:50 — Cierre]**
BOCETO: calendario con la ✕ roja sobre el domingo; cierre con el logo.
> Todos los datos en atlas-lab-one.vercel.app, experimento 68. El trading no se promete: se prueba. Contenido educativo, no es asesoría financiera.

---

## SHORT (9:16, ≈ 48 s)

**[0-3 s]** (boceto: calendario con «484» en rojo sobre la columna del domingo; b-roll de hojas de calendario pasando, kb=in; golpe de bajo)
> Mi serie del S&P 500 trae 484 domingos. ¿Cambia el efecto de fin de mes?

**[3-13 s]** (boceto: filas de sábado y domingo en rojo; cifras −3.2 y +0.1; whoosh)
> Un día de bolsa es de lunes a viernes. Pero la serie incluye 484 filas de domingo, con −3.2 puntos básicos de media, y 102 de sábado, con +0.1.

**[13-24 s]** (boceto: flechas rojas llevan las filas al «resto del mes»; b-roll de pantalla de bolsa, kb=out)
> Esas filas entraban en el «resto del mes». Así que quité todo lo que no fuera lunes a viernes y repetí la comparación.

**[24-36 s]** (boceto: dos barras: +6.7 y +5.1; ticks; la etiqueta «p = 0.70»)
> Fin de mes: +6.7 puntos básicos por día. Resto del mes: +5.1. Antes eran +5 y +4. La prueba da p de 0.70.

**[36-44 s]** (boceto: aguja de p-valor en la zona gris; texto «sigue siendo ruido»)
> La diferencia sube un poco, pero sigue dentro del ruido. Revisar los datos no cambió la conclusión.

**[44-49 s]** (boceto: calendario con la ✕ roja en el domingo; texto «Experimento #68 completo en el enlace»; logo)
> Video completo en el canal y experimento #68 completo en el enlace. ¿Cuántos domingos tiene tu base de datos?

Gancho alterno A: «Un domingo no hay bolsa. Mi base de datos tiene 484.» · B: «+6.7 contra +5.1: lo que pasa al quitar los fines de semana.»

## Descripción de YouTube — video largo
https://atlas-lab-one.vercel.app/e/68?utm_source=youtube&utm_medium=video&utm_campaign=exp068-t2
Ficha: experimento #68, Estacionalidad (día de la semana, cambio de mes). Estado: murió. Cambio de mes +5 contra +4 puntos básicos por día (p = 0.67); solo de lunes a viernes, +6.7 contra +5.1 (p = 0.70).
La serie del S&P 500 (2012–2024) trae 484 filas de domingo y 102 de sábado; comprobé si cambian la conclusión. No la cambian: las diferencias siguen dentro del ruido.
Contenido educativo. No es asesoría financiera ni recomendación de inversión.

## Descripción de YouTube — Short
https://atlas-lab-one.vercel.app/e/68?utm_source=youtube&utm_medium=short&utm_campaign=exp068-t2
Ficha: experimento #68, murió. Solo lunes a viernes: +6.7 contra +5.1 puntos básicos, p = 0.70. Contenido educativo, no es asesoría financiera.

## Capítulos
0:00 Gancho · 0:18 Qué experimento es · 0:30 Qué se había medido · 1:10 Las filas que no deberían estar · 1:55 Dónde se cuelan · 2:35 La comprobación · 3:15 Qué cambia y qué no · 3:55 El mismo detalle en otros experimentos · 4:30 Mi lista de revisión · 5:00 Preguntas de un escéptico · 5:25 Ficha del experimento #68 · 5:50 Cierre

## Etiquetas
calidad de datos, S&P 500, turn-of-month, efecto calendario, día de la semana, p-valor, puntos básicos, backtest, errores en los datos, trading con datos, ATLAS Lab, anomalías de mercado

## Rúbrica (autoevaluación, 1–5)
| Pieza | hook_0_3s | ritmo | promesa_cumplida | potencial_loop | claridad_no_traders | honestidad_atlas | audio | cta | Promedio |
|---|---|---|---|---|---|---|---|---|---|
| Largo | 4 | 4 | 5 | 4 | 4 | 5 | 4 | 4 | 4.25 |
| Short | 5 | 4 | 5 | 4 | 4 | 5 | 4 | 4 | 4.38 |

Hook ≥ 4 ✓ · honestidad 5 ✓. Punto débil: es el tema con menos material (no hay curva ni dinero); el largo se queda en el rango bajo y el origen de las filas de fin de semana se dice «no investigado».

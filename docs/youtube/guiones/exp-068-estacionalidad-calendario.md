# Experimento #68 — Estacionalidad (día de la semana, cambio de mes)

Estado del guion: **BORRADOR — pendiente de aprobación**
Estado del experimento: **murió** (diferencias dentro del ruido: p = 0.67 y p = 0.89)
Serie: F (anomalías y estacionalidad).
Datos usados: `experiments.json` (v=68: verdict, analysis, notes, kpis, metrics, chart.bars, capital.note) · `exp_details.json` (extra-v68: algo, code, filters). Este experimento no tiene curva en `series/` ni fila en la tabla «Con tu capital» (no simula una cartera): los gráficos son las 4 barras del propio experimento.
Experimento de datos: el video explica qué se midió y para qué sirve. Es el experimento con menos material de toda la tanda (4 barras, 2 p-valores y 1 comprobación), por eso el largo se queda en la parte baja del rango.

## Títulos
1. ¿Hay un mejor día para comprar? Lunes +9, martes +3: ruido
2. Efecto fin de mes y día de la semana: lo probé en el S&P 500 (2012–2024)
3. Turn-of-month: +5 contra +4 puntos básicos. ¿Anomalía o casualidad?

## Miniatura
Fondo `#09090b`. Un calendario blanco con una ✕ roja `#e11d2a` sobre el lunes y una ✕ sobre el día 28 al 3; a la derecha, texto grande «p = 0.89» en verde `#22c55e`. Logo ATLAS esquina inferior derecha.

---

## VIDEO LARGO (≈ 5 min, experimento de datos)

**[0:00 — Gancho]** (pantalla: calendario con el lunes iluminado en verde; contador «+9» sobre el lunes y «+3» sobre el martes)
BOCETO: las columnas lunes a viernes crecen como barras; la del lunes la más alta, la del martes la más baja; después aparece «¿ventaja?» y se oye un golpe de bajo.
> ¿Hay un mejor día para comprar? Entre 2012 y 2024, el S&P 500 rindió en promedio 9 puntos básicos los lunes y 3 los martes. Y a fin de mes parece rendir un poco más. Suena a ventaja, ¿verdad? Hoy lo pasamos por la estadística, porque en trading una diferencia que se ve en una tabla no es lo mismo que una diferencia real.

**[0:25 — Qué es un punto básico]** (pantalla: una barra de 1% dividida en cien tramos; uno iluminado)
BOCETO: barra de 1% dividida en cien tramos; se ilumina uno y aparece «un punto básico = la centésima parte de 1%»; luego el lunes (+9) como nueve tramos iluminados.
> Un punto básico es la centésima parte de un 1%. Cuando digo que el lunes rindió 9 puntos básicos, hablo del rendimiento promedio de un día: un número muy pequeño, porque un día de bolsa es un periodo muy corto. Por eso uso esta escala: si usara porcentajes, casi todos los números serían decimales difíciles de comparar.

**[0:50 — Qué se midió]** (pantalla: tarjeta «S&P 500 · 2012–2024 · retorno medio diario»; checklist con filtros)
BOCETO: dos paneles: «Día de la semana» (lunes a viernes) y «Cambio de mes» (días 28 a 3 contra el resto). Checklist: ✗ Diferencias dentro del ruido · — Costos: no aplicado (no hay estrategia operada) · — Fuera de muestra: no aplicado · — Deflated Sharpe: no aplicado.
> Calculé el retorno medio diario del S&P 500 de dos maneras. Primera: por día de la semana, de lunes a viernes. Segunda: el cambio de mes, lo que se conoce como turn-of-month, que son los días 28 a 3, contra el resto del mes. No es una estrategia: es un estudio descriptivo, sin costos ni operaciones. Sirve para responder una pregunta previa: ¿vale la pena siquiera construir una estrategia de calendario?

**[1:20 — Resultados]** (pantalla: las cuatro barras del gráfico del experimento «Retorno medio diario del SP500 (bps)»)
BOCETO: barras grises que crecen: turn-of-month +5, resto del mes +4, día más bajo +3, día más alto +9; después una tabla con lunes +9, martes +3, miércoles +5, jueves +5 y viernes +5.
| Medida (S&P 500, 2012–2024) | Puntos básicos por día |
|---|---|
| Turn-of-month (días 28 a 3) | +5 |
| Resto del mes | +4 |
| Lunes | +9 |
| Martes | +3 |
| Miércoles, jueves y viernes | +5 cada uno |
> El cambio de mes rinde +5 puntos básicos por día, contra +4 el resto del mes. Por día de la semana, el lunes rinde +9, el martes +3 y miércoles, jueves y viernes +5 cada uno. Lunes a viernes va de +3 a +9. A simple vista, el lunes destaca. Pero una tabla solo te dice qué pasó, no si lo que pasó se repetiría: para eso hace falta una prueba.

**[1:50 — ¿Real o casualidad?]** (pantalla: dos medidores de p-valor, 0.67 y 0.89, ambos cerca de «pura casualidad»)
BOCETO: una escala de 0 a 1 con la aguja del cambio de mes en 0.67 y la de los días de la semana en 0.89, las dos en la zona gris «compatible con azar»; al lado, una moneda que cae un poco más de un lado.
> Para saber si esas diferencias son reales usé dos pruebas. Cada una da un p-valor, un número entre 0 y 1: valores altos significan que la diferencia se explica por pura casualidad. Es como lanzar una moneda unas cuantas veces: si una cara sale un poco más que la otra, no concluyes que la moneda está trucada. Para el cambio de mes contra el resto del mes, p = 0.67. Para comparar los cinco días de la semana entre sí, p = 0.89. Ambos están muy lejos de algo que parezca una anomalía: las diferencias están dentro del ruido.

**[2:30 — Una comprobación más]** (pantalla: texto «484 filas de domingo · 102 de sábado» y después «solo lunes a viernes»)
BOCETO: la tabla con dos filas extra («domingo» y «sábado») que se tachan y la comparación se repite: +6.7 contra +5.1, p = 0.70.
> Una comprobación más. La serie del S&P 500 trae 484 filas de domingo, con −3.2 puntos básicos de media, y 102 de sábado, con +0.1; entran en el resto del mes pero no en la tabla por día de la semana. Si miro solo de lunes a viernes, el cambio de mes rinde +6.7 y el resto +5.1, con p = 0.70. La conclusión no cambia: la diferencia sigue siendo compatible con la casualidad.

**[3:05 — Preguntas de un escéptico]** (pantalla: tres tarjetas: «¿antes de 2012?», «¿otros índices?», «¿festivos?»; cada una con la etiqueta «no medido»)
BOCETO: tres tarjetas con la etiqueta «no medido»: «¿antes de 2012?», «¿otros índices?», «¿festivos?».
> Preguntas que me haría un escéptico. ¿Y si el efecto existía antes de 2012? Aquí medí de 2012 a 2024, así que no puedo decir nada de épocas anteriores. ¿Y en otros índices? Solo medí el S&P 500. ¿Y si miro además los festivos? No lo medí. Lo que sí está claro es que, en los datos que tengo, las diferencias que se ven en la tabla no se distinguen del ruido, y que con dos pruebas distintas el veredicto es el mismo.

**[3:40 — Por qué importa para el trading]** (pantalla: dos monedas, una pequeña que representa la ventaja y una más grande que representa el costo de operar)
BOCETO: una moneda diminuta (la ventaja) frente a una moneda grande (el costo de operar); la balanza se inclina hacia el costo.
> Y aquí está la parte práctica. Aunque una diferencia de calendario fuera real, serían unos pocos puntos básicos por día. Diferencias de unos pocos puntos básicos por día no pagan ningún costo de operación: cada vez que compras o vendes, pagas más de lo que ganarías por elegir el día correcto. Además, una anomalía que todo el mundo conoce tiende a desaparecer: si los lunes fueran siempre mejores, muchos compradores se adelantarían y el efecto se borraría. Las anomalías de calendario, si existieron, ya están arbitradas.

**[4:15 — Resumen]** (pantalla: tarjeta con las cifras clave: +5 vs +4 · p = 0.67 · +3 a +9 · p = 0.89 · +6.7 vs +5.1 · p = 0.70)
BOCETO: tres pares de cifras con sus p-valores entrando con tick; sello «RUIDO».
> Resumen en tres pares de cifras. Cambio de mes: +5 contra +4 puntos básicos por día, con p = 0.67. Días de la semana: de +3 a +9, con p = 0.89. Y solo de lunes a viernes: +6.7 contra +5.1, con p = 0.70. Las tres pruebas dicen lo mismo: ruido.

**[4:35 — Conclusión]** (pantalla: aviso «Este experimento no simula una cartera: no hay resultado en dinero»)
BOCETO: calendario con la ✕ roja sobre el lunes y sobre el cambio de mes; aviso «sin cartera: sin cifras en dólares»; cierre con el logo.
> Aquí no hay «Con tu capital», porque no simulamos una cartera: solo comparamos retornos medios, y por eso no te doy cifras en dólares, que no serían honestas. Lo que sí hay es una conclusión clara: ni el cambio de mes ni el día de la semana muestran una diferencia que se distinga del ruido. Todos los datos en atlas-lab-one.vercel.app, experimento 68. El trading no se promete: se prueba. Contenido educativo, no es asesoría financiera.

---

## SHORT (9:16, ≈ 48 s)

**[0-3 s]** (boceto: calendario con barras: lunes +9 en verde, martes +3 en rojo; b-roll de hojas de calendario pasando, kb=in; golpe de bajo)
> Lunes +9, martes +3: ¿hay un mejor día para comprar?

**[3-14 s]** (boceto: una barra de 1% dividida en cien; tick; b-roll de pantalla de bolsa, kb=out; whoosh)
> Medí el rendimiento medio diario del S&P 500 por día de la semana, de 2012 a 2024, en puntos básicos: una centésima de 1%. Lunes +9, martes +3, y miércoles, jueves y viernes +5.

**[14-22 s]** (boceto: dos barras: cambio de mes +5 contra resto del mes +4)
> Lo mismo con el cambio de mes, del día 28 al 3: +5 puntos básicos por día, contra +4 el resto del mes.

**[22-30 s]** (boceto: dos medidores de p-valor, 0.67 y 0.89, en la zona gris; sello ✕ rojo sobre «anomalía»)
> ¿Es una anomalía? La prueba estadística da p de 0.67 y de 0.89. Valores tan altos significan que la diferencia se explica por casualidad.

**[30-36 s]** (boceto: segunda tarjeta de comprobación; cifras +6.7 / +5.1 y p = 0.70)
> Y si miro solo de lunes a viernes pasa lo mismo: +6.7 contra +5.1, con una p de 0.70.

**[36-45 s]** (boceto: dos monedas, la ventaja diminuta y el costo grande; calendario tachado)
> Y aunque fuera real, unos pocos puntos básicos por día no pagan ningún costo de operación. Las anomalías de calendario, si existieron, ya están arbitradas.

**[45-48 s]** (boceto: texto «¿lunes o martes?»; logo)
> Video completo en el canal. Lunes contra martes: ¿ventaja o casualidad?

Gancho alterno A: «Comprar a fin de mes: +5 contra +4. p = 0.67.» · B: «El mejor día para comprar no existe: p = 0.89.»

## Descripción (YouTube)
Efectos de calendario en el S&P 500 (2012–2024): retorno medio diario por día de la semana (de +3 a +9 puntos básicos) y turn-of-month (+5 contra +4 el resto del mes). Las diferencias están dentro del ruido: p = 0.67 y p = 0.89. No hay estrategia que operar.

Datos completos: https://atlas-lab-one.vercel.app (experimento #68)

Contenido educativo. No es asesoría financiera ni recomendación de inversión.

Capítulos: 0:00 Gancho · 0:25 Qué es un punto básico · 0:50 Qué se midió · 1:20 Resultados · 1:50 ¿Real o casualidad? · 2:30 Una comprobación más · 3:05 Preguntas de un escéptico · 3:40 Por qué importa para el trading · 4:15 Resumen · 4:35 Conclusión

Etiquetas: estacionalidad, turn-of-month, efecto calendario, día de la semana, S&P 500, anomalías de mercado, p-valor, puntos básicos, trading con datos, ATLAS Lab, backtest, mejor día para comprar

## Rúbrica (autoevaluación)
| Criterio | Short | Largo |
|---|---|---|
| hook_0_3s | 4 | 4 |
| ritmo | 4 | 4 |
| promesa_cumplida | 5 | 5 |
| potencial_loop | 4 | 3 |
| claridad_no_traders | 4 | 4 |
| honestidad_atlas | 5 | 5 |
| audio | 4 | 4 |
| cta | 4 | 4 |
| **Promedio** | **4.25** | **4.13** |

## Otros temas de este experimento
- Tema 1 (este archivo): `exp-068-estacionalidad-calendario.md` — Estacionalidad (día de la semana, cambio de mes)
- Tema 2: `exp-068-t2-domingos-fantasma.md` — 484 domingos en una serie de bolsa (revisar los datos antes de la estadística)
- Tema 3: `exp-068-t3-de-la-tabla-a-la-cuenta.md` — De la tabla a la cuenta (el cambio de mes, operado en el experimento 49)

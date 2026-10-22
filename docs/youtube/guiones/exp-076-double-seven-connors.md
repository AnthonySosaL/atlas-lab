# Experimento #76 — Double Seven (Larry Connors)

Estado del guion: **BORRADOR — pendiente de aprobación**
Estado del experimento: **murió** (no sirvió: el Sharpe cae de 0.58 a 0.16 fuera de muestra y el drawdown llega a −35%) · Serie B — «Estrategias famosas, puestas a prueba» (plan-series.md) · 1 largo + 1 Short
Datos usados: `experiments.json` (v=76: kpis, metrics, verdict, analysis, market, period), `exp_details.json` (extra-v76: algo, code, filters), `series/extra-v76.json` (1.ª curva = Double Seven; 2.ª = «Sin estrategia»), tabla «Con tu capital» de `docs/youtube`.
Producción (CLAUDE.md del canal): b-roll real detrás de cada escena con overlay oscuro 0.6, Ken Burns alternando in/out, subtítulos karaoke en MAYÚSCULAS con palabras clave en rojo, un dato visual por escena, golpe de bajo + sacudida solo en 1–2 momentos. Colores: rojo `#e11d2a`, verde `#22c55e`, fondo `#09090b`. Aquí las cifras van en dígitos; en el campo `tts` del JSON se pasan a palabras.

## Títulos (3 opciones)
1. Double Seven: gana $45,736… y comprar y esperar, $290,064 (57 caracteres)
2. Probé la estrategia del 77% de aciertos de Larry Connors
3. Double Seven: el Sharpe cae de 0.58 a 0.16 con datos nuevos

## Miniatura (pensada para el título 1)
Fondo `#09090b`. Izquierda: «77%» enorme en blanco con una lupa. Derecha, texto rojo grande: «¿Y EL DINERO?» (3 palabras) y debajo, en pequeño, «+8% vs +109%» (retorno fuera de muestra, ficha). Logo ATLAS arriba a la derecha (abajo a la derecha lo tapa la duración del video). Si se usa el título 2, cambiar «77%» por «+$45,736».

---

## VIDEO LARGO (16:9, ≈ 7 min)

**[0:00 — Gancho]** (pantalla: «77% de aciertos» gigante; luego dos barras)
Hay una estrategia que se vende con un 77% de aciertos. Suena imposible de perder. La probé en cuatro índices, de 2012 a 2024, con costos. Con 100,000 dólares habría ganado +45,736. Y simplemente comprar y esperar, +290,064. Te cuento por qué un porcentaje de aciertos alto engaña.
BOCETO: «77%» late en blanco (kb=in). A los 8 s se parte la pantalla: barra verde +$45,736 (la estrategia) contra barra blanca de referencia +$290,064 (tarjeta de capital de la ficha, cifras de la tabla). Texto en pantalla: «Se vende con 77% de aciertos».

**[0:40 — La estrategia]** (pantalla: esquema de precio, media de 200 días, mínimo y máximo de 7 días)
Se llama Double Seven y es de Larry Connors. La regla cabe en una frase: si el precio está por encima de su media de 200 días, es decir, en tendencia alcista de largo plazo, compras cuando el cierre cae por debajo del mínimo de los últimos 7 días y vendes cuando el cierre supera el máximo de los últimos 7. Comprar la caída dentro de una subida. Ese 77% es el que anuncia quien la vende; lo que yo voy a medir es otra cosa.
BOCETO: dibujo animado (esquema ilustrativo, rotulado «no es un dato»): línea de precio con la MA200 en amarillo; al romper el mínimo de 7 días aparece una flecha verde «compra»; al romper el máximo, una flecha «sale». kb=out.

**[1:45 — Cómo la probé]** (pantalla: línea de tiempo 2012–2018 / 2019–2024 y checklist)
Cuatro índices a partes iguales: S&P 500, Nasdaq 100, DAX y FTSE 100, con datos diarios. Tres reglas para no hacerme trampa. Una: la señal se decide con el cierre de hoy y se ejecuta al día siguiente, nunca con información que todavía no existe. Dos: cada entrada y salida paga 3 puntos básicos, tres centésimas de un por ciento. Tres: no ajusté nada, uso los parámetros públicos. Y parto el tiempo en dos: 2012 a 2018 es el periodo de prueba; 2019 a 2024 son datos nuevos que la estrategia nunca vio, lo que se llama fuera de muestra. En este experimento no apliqué el Deflated Sharpe ni el Monte Carlo; la prueba es el fuera de muestra y compararla con comprar y esperar.
BOCETO: barra de tiempo con dos tramos (2012–2018 «diseño», 2019–2024 «datos nuevos»). Checklist `filters` de exp_details: ✓ costos 3 bps, ✓ rezago de 1 día; «Deflated Sharpe» y «Monte Carlo» en gris con «no aplicado».

**[3:05 — Resultados]** (pantalla: tabla animada + checklist)
Mira cómo cambia. En 2012–2018 el Sharpe es 0.58. El Sharpe es la ganancia por cada unidad de riesgo: cuanto más alto, mejor, y por debajo de cero es que pierde. Comprar y esperar da 0.68. Con datos nuevos, 2019–2024, baja a 0.16. El drawdown, la peor caída desde un máximo, pasa de −9% a −35%. Y el retorno fuera de muestra es +8%, contra +109% de comprar y esperar.
| | 2012–2018 (diseño) | 2019–2024 (fuera de muestra) |
|---|---|---|
| Sharpe | 0.58 | 0.16 |
| Drawdown máximo | −9% | −35% |
| Retorno | — | +8% (comprar y esperar: +109%) |
BOCETO: la tabla aparece fila a fila; 0.58 en verde que baja a 0.16 en rojo (golpe de bajo + sacudida aquí) y −35% parpadea. Checklist: ✓ en muestra (0.58 > 0.13), ✗ fuera de muestra (0.16 < 0.30), ✗ batir a comprar y esperar (0.16 < 0.68).

**[4:20 — Por qué se cae]** (pantalla: monedas pequeñas verdes y una enorme roja)
Un porcentaje de aciertos alto esconde el riesgo: pocas pérdidas, pero enormes. Si casi siempre ganas poquito y de vez en cuando pierdes mucho, el porcentaje luce genial y el resultado no. Es lo que muestra el drawdown de −35%. Y no es sobreajuste: los parámetros son los públicos, no los toqué. Es dependencia del periodo: se ve bonita en el periodo de prueba y se cae en datos nuevos.
BOCETO: ilustración (rotulada «ilustración»): muchas monedas verdes pequeñas y una roja gigante que las tapa. Texto en pantalla: «Pocas pérdidas, pero enormes». kb=in.

**[5:20 — Con tu capital]** (pantalla: tarjeta de capital con la curva real)
Con 100,000 dólares entre 2012 y 2024, en esos cuatro índices y con costos, Double Seven gana 45,736. Comprar y esperar gana 290,064. Con 10,000 dólares serían unos +4,574 contra +29,006. Es lo que pasó, no una promesa de lo que pasará.
BOCETO: curvas reales de `series/extra-v76.json` (Double Seven en verde, «Sin estrategia» en blanco) dibujándose de 2012 a 2024; contador final en cada una; pie: «cifras escaladas a $100,000».

**[6:10 — Conclusión]**
El 77% no es el número que importa; importan el riesgo y lo que pasa con datos nuevos. Double Seven no sirvió: el Sharpe cae de 0.58 a 0.16 y el drawdown llega a −35%. Hay estrategias que ganan dinero y aun así no aportan nada sobre comprar y esperar. El trading no se promete: se prueba.

**[6:40 — Cierre]**
Todos los datos en atlas-lab-one.vercel.app, experimento 76. Si quieres que pruebe otra estrategia famosa, déjala en los comentarios. Contenido educativo, no es asesoría financiera.
BOCETO: logo ATLAS + URL; texto «El trading no se promete: se prueba».

---

## SHORT (9:16, ≈ 48 s)

**[0-3 s]** «Se vende con 77% de aciertos. ¿Y el dinero?»
BOCETO: «77%» gigante en blanco sobre b-roll de pantalla de trading (kb=in), overlay 0.6; texto en pantalla «¿Y el dinero?». Sin logo de entrada.

**[3-13 s]** «Double Seven, de Larry Connors: con el precio sobre su media de 200 días, compra cuando cae a un mínimo de 7 días y vende cuando supera el máximo de 7.»
BOCETO: esquema animado de precio con flechas de compra y salida (kb=out). Ticker de mercado arriba.

**[13-25 s]** «La probé en cuatro índices, con costos. Sharpe de 0.58 de 2012 a 2018. Con datos nuevos, de 2019 a 2024: 0.16.»
BOCETO: dos barras verticales, 0.58 en verde cae a 0.16 en rojo; tick al aparecer cada número; golpe de bajo + sacudida en la caída.

**[25-38 s]** «El drawdown pasa de −9% a −35%. Con 100,000 dólares: +45,736. Comprar y esperar: +290,064.»
BOCETO: tarjeta de capital con contadores animados (verde y blanco); −35% en rojo parpadeando.

**[38-48 s]** «Un porcentaje de aciertos alto esconde el riesgo. El video completo está en el canal. Setenta y siete por ciento de aciertos… y el dinero lo ganó comprar y esperar.»
BOCETO: sello rojo ✕ sobre «77%»; texto final «Video completo en el canal» + pequeño «No es asesoría financiera · El trading no se promete: se prueba». Loop: la última frase desemboca en el «¿Y el dinero?» del inicio.

---

## Descripción de YouTube
Double Seven, de Larry Connors, se vende con «77% de aciertos». La probé en S&P 500, Nasdaq 100, DAX y FTSE 100 (2012–2024) con costos de 3 puntos básicos y señal del día siguiente: el Sharpe cae de 0.58 a 0.16 con datos nuevos y el drawdown llega a −35%.
Datos completos: https://atlas-lab-one.vercel.app (experimento #76)
Contenido educativo. No es asesoría financiera ni recomendación de inversión.

## Capítulos
0:00 Gancho · 0:40 La estrategia · 1:45 Cómo la probé · 3:05 Resultados · 4:20 Por qué se cae · 5:20 Con tu capital · 6:10 Conclusión · 6:40 Cierre

## Etiquetas
double seven, larry connors, estrategia de trading, backtest, sharpe ratio, drawdown, comprar y mantener, fuera de muestra, índices bursátiles, trading con datos, atlas lab, estrategia 77% aciertos

## Rúbrica (autoevaluación, 1–5)
| Pieza | hook_0_3s | ritmo | promesa_cumplida | potencial_loop | claridad_no_traders | honestidad_atlas | audio | cta | Promedio |
|---|---|---|---|---|---|---|---|---|---|
| Largo | 5 | 4 | 5 | 4 | 4 | 5 | 4 | 4 | 4.4 |
| Short | 5 | 4 | 5 | 5 | 4 | 5 | 4 | 4 | 4.5 |

Hook ≥ 4 ✓ · honestidad 5 ✓. Punto débil: el esquema de la regla es ilustrativo (no una curva real) y debe rotularse así; el 77% es una cifra anunciada, no medida.

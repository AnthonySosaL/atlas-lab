# Experimento #76 — Tema 2: Seis estrategias ante datos nuevos (la mejor del periodo de prueba fue la peor fuera de muestra)

**Tema 2 de 3 del experimento #76** · Qué aporta frente a los otros temas: es el tema del método. Explica qué es la prueba fuera de muestra con seis casos reales (RSI(2), Faber, Turtle, IBS, Double Seven y el régimen adaptativo) y muestra que el orden de las estrategias en 2012–2018 casi se invierte en 2019–2024. Se entiende sin haber visto el tema 1.
Estado del guion: **BORRADOR — pendiente de aprobación**
Estado del experimento: **murió** (no sirvió: el Sharpe cae de 0.58 a 0.16 fuera de muestra y el drawdown llega a −35%)
Serie: B (estrategias famosas, puestas a prueba). Cruza con #72 a #77.
Datos usados: `experiments.json` (v=76: kpis, metrics, analysis; v=72, v=73, v=74, v=75, v=77: Sharpe en 2012–2018 y fuera de muestra 2019–2024, y de comprar y esperar: 0.68 y 0.68 en 4 índices; 0.20 y 0.67 en 11 activos) · `exp_details.json` (extra-v76: algo, code, filters).
Producción (CLAUDE.md del canal): b-roll real detrás de cada escena con overlay 0.6, Ken Burns alternando, subtítulos karaoke en MAYÚSCULAS, un dato visual por escena. Colores: rojo `#e11d2a`, verde `#22c55e`, fondo `#09090b`.

## Títulos
1. La mejor en el periodo de prueba, la peor con datos nuevos: Sharpe 0.58 → 0.16
2. Seis estrategias ante datos nuevos: el orden casi se invierte
3. Qué es la prueba fuera de muestra, con seis casos reales

## Miniatura
Fondo `#09090b`. Una escalera de seis peldaños con los nombres de las estrategias; una flecha curva la da la vuelta: la de arriba cae al fondo («0.58 → 0.16» en rojo `#e11d2a`) y la de abajo sube. Texto: «SE INVIERTE». Logo ATLAS esquina inferior derecha.

---

## VIDEO LARGO (≈ 7 min)

**[0:00 — Gancho]** (pantalla: una clasificación de seis estrategias; la primera cae al último puesto)
BOCETO: lista de seis nombres ordenada por Sharpe de 2012–2018; al aparecer «datos nuevos», la lista se da la vuelta con whoosh; la primera, Double Seven, baja al último puesto con «0.58 → 0.16»; golpe de bajo.
> Entre seis estrategias, la que tenía el mejor Sharpe en el periodo de prueba, 0.58, quedó la última con datos nuevos, 0.16. Y el orden del resto casi se invirtió. Hoy te explico qué es la prueba fuera de muestra con seis casos reales.

**[0:18 — Qué experimento es]** (pantalla: rótulo «Experimento #76 · ATLAS Lab» y el nombre debajo)
BOCETO: rótulo con el número 76 y el nombre «Double Seven (Larry Connors)»; logo en la esquina.
> Este es el experimento #76 de ATLAS Lab: Double Seven, de Larry Connors. Todos los resultados están en la página del experimento. Hoy la comparo con cinco experimentos más.

**[0:45 — Qué es «fuera de muestra»]** (pantalla: examen con preguntas de práctica y preguntas nuevas)
BOCETO: un examen con dos bloques: «preguntas de práctica (2012–2018)» y «preguntas nuevas (2019–2024)»; el alumno saca nota alta en el primero y baja en el segundo.
> Al diseñar una estrategia miras un periodo, aquí 2012 a 2018. Fuera de muestra son los datos que no miraste, aquí 2019 a 2024. Es como estudiar con unas preguntas y ser examinado con otras: si solo sabes las de práctica, no sabes la materia. El Sharpe mide cuánto rindes por cada unidad de riesgo, y es la nota con la que comparo.

**[1:20 — El caso que se desmoronó]** (pantalla: tarjeta de Double Seven con dos medidores)
BOCETO: medidor de Sharpe de 0.58 que baja a 0.16; barras de caída máxima −9% y −35%; dato «77% de aciertos anunciado».
> Double Seven, de Larry Connors, compra cuando el precio está sobre su media de 200 días y el cierre rompe el mínimo de 7 días, y sale cuando rompe el máximo de 7. Se vende con 77% de aciertos. En 2012–2018 el Sharpe es 0.58; con datos nuevos, 0.16. La caída máxima pasa de −9% a −35%. Y no es sobreajuste: los parámetros son los públicos, no se ajustaron. Es dependencia del periodo.

**[2:10 — Las otras cinco]** (pantalla: tabla ordenada por el Sharpe de 2012–2018)
BOCETO: filas que aparecen con tick; flechas verdes o rojas entre las dos columnas; la última columna es el puesto.
| Estrategia | Sharpe 2012–2018 | Sharpe fuera de muestra (2019–2024) |
|---|---|---|
| Double Seven (4 índices) | 0.58 | 0.16 |
| IBS (4 índices) | 0.37 | 0.42 |
| Faber (11 activos) | 0.26 | 0.58 |
| Turtle (11 activos) | 0.21 | 0.75 |
| RSI(2) de Connors, salida rápida (4 índices) | 0.17 | 0.48 |
| Régimen adaptativo (4 índices) | −0.27 | 0.37 |
> Mira cómo se ordenan. En 2012–2018, de mejor a peor: Double Seven, IBS, Faber, Turtle, RSI(2) y el régimen adaptativo. Con datos nuevos: Turtle, Faber, RSI(2), IBS, el adaptativo y, de última, Double Seven. Casi la lista al revés.

**[3:20 — Lo que no hay que concluir]** (pantalla: dos barras de comprar y esperar: 0.20 y 0.67 con la cesta de 11 activos)
BOCETO: dos barras grises de la cesta de 11 activos: 2012–2018 con 0.20 y 2019–2024 con 0.67; línea de 0.68 para los 4 índices en los dos periodos.
> Ojo, no es solo la estrategia: el periodo cuenta. Comprar y esperar los 11 activos pasó de 0.20 en 2012–2018 a 0.67 en 2019–2024. Para los cuatro índices dio 0.68 en los dos periodos. Cinco de las seis mejoraron con datos nuevos, y la única que empeoró fue la que parecía la mejor. Con seis casos no hay una ley: lo que enseñan es que el Sharpe del periodo de diseño no predice el siguiente.

**[4:10 — Por qué pasa]** (pantalla: tres tarjetas: «azar del periodo», «tendencias o laterales», «una sola muestra»)
BOCETO: tres tarjetas que se voltean; en la última, un solo termómetro.
> Hay tres razones posibles, y el experimento no separa cuál manda. Una: el azar de un periodo corto. Dos: que el mercado cambie de carácter, con años de tendencias y años laterales. Tres: que un solo periodo es una sola muestra. Lo útil es otra cosa: cómo protegerte.

**[4:50 — Tres reglas]** (pantalla: tres reglas en pantalla)
BOCETO: tres reglas que aparecen con whoosh: «exige fuera de muestra», «mira los dos periodos», «compara con comprar y esperar».
> Una: exige una prueba fuera de muestra, no solo el resultado bonito. Dos: mira los dos periodos, no el mejor. Tres: compara con comprar y esperar, que es la alternativa que no cuesta nada. Con esas tres reglas, Double Seven habría salido mal parada, porque su 0.58 no sobrevive a datos nuevos y ni en su mejor periodo supera el 0.68 de quedarse quieto.

**[5:35 — Con tu capital]** (pantalla: tarjeta «Con tu capital» con la curva de Double Seven contra la gris)
BOCETO: aviso «periodo completo 2012–2024»; contadores finales.
> Con $100,000, entre 2012 y 2024, Double Seven gana $45,736; comprar y esperar los cuatro índices, $290,064. Con $10,000: +$4,574 contra +$29,006. Es lo que pasó, no una promesa.

**[6:00 — Preguntas de un escéptico]** (pantalla: tres tarjetas: «¿mismas cestas?», «¿más periodos?», «¿Deflated Sharpe?»)
BOCETO: tres tarjetas que se voltean; en la primera, «no: 4 índices y 11 activos».
> Preguntas que me haría un escéptico. ¿Son las mismas cestas? No: unas usan cuatro índices y otras once activos, así que comparo el patrón, no los números. ¿Y más periodos? Solo hay dos. ¿Y el Deflated Sharpe? No lo apliqué en ninguno de los seis.

**[6:25 — Ficha del experimento #76]** (pantalla: tarjeta con la ficha y la URL abajo)
BOCETO: tarjeta con cinco líneas que entran con tick y, al final, la URL resaltada en verde.
> Ficha del experimento 76. Estado: murió. Cifras clave: Sharpe de 0.58 en 2012–2018 y 0.16 fuera de muestra; caída máxima de −9% a −35%; +8% fuera de muestra contra +109% de comprar y esperar. Lo que decidió: la prueba fuera de muestra. Lección: lo que se ve bonito en un periodo puede caerse con datos nuevos. Revísalo completo en atlas-lab-one.vercel.app/e/76.

**[6:55 — Cierre]**
BOCETO: la escalera de seis peldaños con la flecha curva; logo.
> Todos los datos en atlas-lab-one.vercel.app, experimento 76. El trading no se promete: se prueba. Contenido educativo, no es asesoría financiera.

---

## SHORT (9:16, ≈ 49 s)

**[0-3 s]** (boceto: clasificación de seis estrategias; la primera cae al último puesto; golpe de bajo)
> La mejor en el periodo de prueba fue la peor con datos nuevos: Sharpe de 0.58 a 0.16.

**[3-13 s]** (boceto: tarjeta de Double Seven: «77% de aciertos anunciado»; whoosh)
> Es Double Seven, de Larry Connors, vendida con 77% de aciertos. Cuatro índices, con costos, de 2012 a 2024.

**[13-27 s]** (boceto: dos listas: 2012–2018 y 2019–2024, con flechas que se cruzan)
> Probé seis estrategias. En 2012–2018 el orden era Double Seven, IBS, Faber, Turtle, RSI(2) y el adaptativo. Con datos nuevos, casi al revés: Turtle primero, Double Seven última.

**[27-37 s]** (boceto: barras 0.20 y 0.67 de comprar y esperar los 11 activos)
> Pero el periodo nuevo fue mejor para casi todo: comprar y esperar once activos pasó de 0.20 a 0.67.

**[37-44 s]** (boceto: texto «exige fuera de muestra»)
> Por eso se exige la prueba fuera de muestra: lo que se ve bonito en un periodo puede caerse en datos nuevos.

**[44-49 s]** (boceto: texto «Experimento #76 completo en el enlace»; logo)
> Video completo en el canal y experimento #76 completo en el enlace. ¿Cuál habrías elegido en 2018?

Gancho alterno A: «La mejor de 2012 a 2018, la última de 2019 a 2024.» · B: «Seis estrategias, un examen con preguntas nuevas.»

## Descripción de YouTube — video largo
https://atlas-lab-one.vercel.app/e/76?utm_source=youtube&utm_medium=video&utm_campaign=exp076-t2
Ficha: experimento #76, Double Seven (Larry Connors). Estado: murió. Sharpe 0.58 en 2012–2018 y 0.16 fuera de muestra; drawdown −9% → −35%; +8% fuera de muestra contra +109% de comprar y esperar.
Qué es la prueba fuera de muestra con seis casos: Double Seven, IBS, Faber, Turtle, RSI(2) y el régimen adaptativo. El orden de 2012–2018 casi se invierte en 2019–2024.
Contenido educativo. No es asesoría financiera ni recomendación de inversión.

## Descripción de YouTube — Short
https://atlas-lab-one.vercel.app/e/76?utm_source=youtube&utm_medium=short&utm_campaign=exp076-t2
Ficha: experimento #76, murió. Double Seven: Sharpe 0.58 → 0.16 con datos nuevos; drawdown −35%. Contenido educativo, no es asesoría financiera.

## Capítulos
0:00 Gancho · 0:18 Qué experimento es · 0:45 Qué es fuera de muestra · 1:20 El caso que se desmoronó · 2:10 Las otras cinco · 3:20 Lo que no hay que concluir · 4:10 Por qué pasa · 4:50 Tres reglas · 5:35 Con tu capital · 6:00 Preguntas de un escéptico · 6:25 Ficha del experimento #76 · 6:55 Cierre

## Etiquetas
fuera de muestra, out of sample, Double Seven, Larry Connors, sobreajuste, dependencia del periodo, Sharpe ratio, estrategias famosas, backtest, trading con datos, ATLAS Lab, comprar y mantener

## Rúbrica (autoevaluación, 1–5)
| Pieza | hook_0_3s | ritmo | promesa_cumplida | potencial_loop | claridad_no_traders | honestidad_atlas | audio | cta | Promedio |
|---|---|---|---|---|---|---|---|---|---|
| Largo | 5 | 4 | 5 | 4 | 4 | 5 | 4 | 4 | 4.38 |
| Short | 5 | 4 | 5 | 4 | 4 | 5 | 4 | 4 | 4.38 |

Hook ≥ 4 ✓ · honestidad 5 ✓. Punto débil: junta seis experimentos con cestas distintas (4 índices y 11 activos); el largo avisa que compara el patrón, no los números, y que con seis casos no hay una ley.

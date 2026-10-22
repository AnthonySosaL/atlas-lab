# Experimento #74 — Tema 3: Una sola combinación (20 y 10) contra 33,363 intentos

**Tema 3 de 3 del experimento #74** · Qué aporta frente a los otros temas: es el tema del método. Explica el canal de Donchian paso a paso y por qué probar una sola combinación (20 y 10) no es lo mismo que probar miles, con el laboratorio de ATLAS (33,363 estrategias, 0 sobrevivientes) como contraste. Se entiende sin los otros temas.
Estado del guion: **BORRADOR — pendiente de aprobación**
Estado del experimento: **parcial** (fuera de muestra logra Sharpe 0.75, sobre 0.67 sin estrategia, pero en 2012–2018 solo 0.21: depende del periodo)
Serie: B (estrategias famosas, puestas a prueba). Cruza con #81.
Datos usados: `exp_details.json` (extra-v74: algo, code —`rolling(20).max().shift(1)`, `rolling(10).min().shift(1)`, `ffill`—, filters) · `experiments.json` (v=74: kpis, metrics, params_view, capital; v=81: probadas 33,363, sobrevivieron 0, Deflated Sharpe máximo 0.31 de 0.95 exigido, máximo 4 de 5 filtros, mejores +0.3% a +0.5% al año) · `series/extra-v74.json` ([0] Turtle, [1] los 11 activos comprar y esperar) · tabla «Con tu capital» (fila #74).
Producción (CLAUDE.md del canal): b-roll real detrás de cada escena con overlay 0.6, Ken Burns alternando, subtítulos karaoke en MAYÚSCULAS, un dato visual por escena. Colores: rojo `#e11d2a`, verde `#22c55e`, fondo `#09090b`.

## Títulos
1. Probé Turtle una sola vez (20 y 10); el laboratorio probó 33,363 y ninguna sobrevivió
2. Compra al romper 20, sal al perder 10: el canal de Donchian paso a paso
3. Probar una vez no es probar 33,363 veces: por qué importa cuántas pruebas haces

## Miniatura
Fondo `#09090b`. A la izquierda, una sola tortuga verde `#22c55e` con «20 / 10»; a la derecha, una cuadrícula enorme de puntos grises con un contador rojo `#e11d2a` «33,363 → 0». Texto: «UNA VS 33,363». Logo ATLAS esquina inferior derecha.

---

## VIDEO LARGO (≈ 6 min)

**[0:00 — Gancho]** (pantalla: una tortuga con «20 / 10» a la izquierda; a la derecha un contador que sube hasta «33,363» y termina en «0 sobrevivieron»)
BOCETO: la tortuga aparece sola; la cuadrícula de puntos se llena con whoosh y el contador sube; al final todos los puntos se apagan; golpe de bajo en «0».
> Probé Turtle Trading una sola vez, con una sola combinación: 20 y 10. El laboratorio de ATLAS probó 33,363 estrategias y no sobrevivió ninguna. Parecen cosas parecidas, pero no lo son. Hoy te explico cómo funciona la regla y por qué importa cuántas veces pruebas.

**[0:18 — Qué experimento es]** (pantalla: rótulo «Experimento #74 · ATLAS Lab» y el nombre debajo)
BOCETO: rótulo con el número 74 y el nombre «Turtle Trading — ruptura de Donchian (Richard Dennis)»; logo en la esquina.
> Este es el experimento #74 de ATLAS Lab: Turtle Trading, ruptura de Donchian. Todos los resultados están en la página del experimento.

**[0:45 — El canal en tres pasos]** (pantalla: precio con dos líneas que se dibujan)
BOCETO: paso 1: línea superior = máximo de los 20 días anteriores; paso 2: línea inferior = mínimo de los 10 días anteriores; paso 3: compra si el cierre rompe la superior, sale si rompe la inferior, y si no, mantiene.
> Paso uno: la línea superior es el máximo de los 20 días anteriores, sin contar hoy. Paso dos: la línea inferior es el mínimo de los 10 días anteriores. Paso tres: si el precio cierra por encima de la superior, compras; si cierra por debajo de la inferior, sales; y entre las dos líneas no haces nada, mantienes lo que tengas. La posición se aplica un día después. Solo en largo, sobre once activos.

**[1:40 — Por qué dos números distintos]** (pantalla: dos relojes, uno de 20 días y uno de 10)
BOCETO: reloj grande «entrar: exigir 20 días» y reloj pequeño «salir: basta 10»; curva con tramos en efectivo.
> Entrar pide 20 días de máximo; salir pide solo 10 de mínimo. La intuición es entrar con exigencia y salir con rapidez. Es una idea de diseño, no un resultado medido. Lo que sí se ve en los datos es la consecuencia: la estrategia pasa tiempo en efectivo, así que asume menos riesgo y gana menos: peor caída de −9.5% contra −29.8%, y con $100,000, +$41,686 contra +$92,344 de comprar y esperar.

**[2:30 — Una sola combinación]** (pantalla: un solo botón con «20 / 10» entre cientos de botones apagados)
BOCETO: panel con muchos botones apagados y uno encendido «20 / 10»; texto «una prueba, sin ajustar».
> En este experimento probé una sola combinación: 20 y 10, sin ajustarla para mejorar el resultado. Eso importa: los números de este experimento, Sharpe de 0.21 en 2012–2018 y de 0.75 fuera de muestra, no son «la mejor de muchas». El Sharpe mide cuánto rindes por cada unidad de riesgo, y fuera de muestra son los datos de 2019 a 2024 que no se usaron para diseñar.

**[3:10 — Lo contrario: el laboratorio]** (pantalla: embudo con 33,363 arriba y 0 al final)
BOCETO: embudo de 5 filtros; entran 33,363 y salen 0; chip «Deflated Sharpe máximo: 0.31 de 0.95».
> El laboratorio de ATLAS hizo lo contrario: generó y probó 33,363 estrategias, todas con los mismos cinco filtros. Resultado: cero sobrevivieron. El Deflated Sharpe, que ajusta el Sharpe por cuántas estrategias probaste, llegó como máximo a 0.31, cuando se exige 0.95. Cinco estrategias pasaron cuatro de cinco filtros, pero al revisarlas año por año ganan entre +0.3% y +0.5% al año: ventaja de ruido, no explotable.

**[4:00 — Qué enseña el contraste]** (pantalla: dos platos: «probar 1 vez» y «probar 33,363 veces»)
BOCETO: balanza; en el plato de la derecha, una montaña de ganadoras falsas; sello «más pruebas = más falsos positivos».
> Si pruebas miles de estrategias, alguna se verá bien por pura suerte. Por eso, cuando alguien te muestra una estrategia, la pregunta es cuántas probó antes de elegir esa. Con una sola combinación no hay selección. Pero ojo: probar una sola vez evita inflar el resultado, no lo vuelve robusto. El Sharpe de Turtle cambia de 0.21 a 0.75 entre periodos, y por eso el estado es parcial.

**[4:40 — Con tu capital]** (pantalla: tarjeta «Con tu capital» con selector)
BOCETO: curva de Turtle contra la gris; contadores finales; nota «11 activos, 2012–2024».
> Con $10,000, Turtle dio +$4,169; comprar y esperar, +$9,234. Con $100,000: +$41,686 contra +$92,344, con una peor caída de −9.5%.

**[5:05 — Preguntas de un escéptico]** (pantalla: tres tarjetas: «¿otras ventanas?», «¿Deflated Sharpe de Turtle?», «¿Monte Carlo?»)
BOCETO: tres tarjetas que se voltean con «no probado» y «no aplicado».
> Preguntas que me haría un escéptico. ¿Y otras ventanas? No las probé. ¿Y el Deflated Sharpe de Turtle? No lo apliqué en este experimento, ni el Monte Carlo. Lo que sí queda claro es que probar una vez no sustituye a esas pruebas.

**[5:25 — Ficha del experimento #74]** (pantalla: tarjeta con la ficha y la URL abajo)
BOCETO: tarjeta con cinco líneas que entran con tick y, al final, la URL resaltada en verde.
> Ficha del experimento 74. Estado: parcial. Cifras clave: Sharpe de 0.21 en 2012–2018 y de 0.75 fuera de muestra, contra 0.67 de comprar y esperar; con $100,000, +$41,686 contra +$92,344. Lo que decidió: la inconsistencia entre periodos. Lección: pregunta cuántas veces se probó antes de elegir. Revísalo completo en atlas-lab-one.vercel.app/e/74.

**[5:55 — Cierre]**
BOCETO: una tortuga frente a la cuadrícula apagada; logo.
> Todos los datos en atlas-lab-one.vercel.app, experimento 74. El trading no se promete: se prueba. Contenido educativo, no es asesoría financiera.

---

## SHORT (9:16, ≈ 48 s)

**[0-3 s]** (boceto: «20 / 10» frente a la cuadrícula con «33,363»; b-roll de laboratorio, kb=in; golpe de bajo)
> Probé Turtle con una sola combinación: 20 y 10. El laboratorio probó 33,363 y sobrevivieron cero.

**[3-14 s]** (boceto: canal de Donchian con 20 y 10; whoosh)
> Turtle compra cuando el precio rompe su máximo de 20 días y sale cuando pierde su mínimo de 10. Once activos, con costos, de 2012 a 2024.

**[14-25 s]** (boceto: dos medidores: 0.21 y 0.75; ticks)
> Sin ajustar nada: Sharpe de 0.21 en 2012–2018 y de 0.75 fuera de muestra. Comprar y esperar, fuera de muestra: 0.67.

**[25-37 s]** (boceto: embudo de cinco filtros: 33,363 → 0; «Deflated Sharpe máximo 0.31 de 0.95»)
> El laboratorio probó 33,363 estrategias con cinco filtros: ninguna sobrevivió. Su mejor Deflated Sharpe fue 0.31, cuando se exige 0.95.

**[37-43 s]** (boceto: texto «probar una vez ≠ probar mil»)
> Cuantas más pruebas, más falsos positivos. Probar una vez evita inflar el resultado.

**[43-48 s]** (boceto: texto «Experimento #74 completo en el enlace»; logo)
> Video completo en el canal y experimento #74 completo en el enlace. ¿Cuántas veces probaron lo que te venden?

Gancho alterno A: «Una combinación contra 33,363: dos formas de probar, dos resultados.» · B: «Cuantas más estrategias pruebas, más ganadoras falsas encuentras.»

## Descripción de YouTube — video largo
https://atlas-lab-one.vercel.app/e/74?utm_source=youtube&utm_medium=video&utm_campaign=exp074-t3
Ficha: experimento #74, Turtle Trading (Richard Dennis). Estado: parcial. Sharpe 0.21 en 2012–2018 y 0.75 fuera de muestra; con $100,000, +$41,686 contra +$92,344. Una sola combinación (20 y 10), sin ajustar.
El canal de Donchian paso a paso y por qué importa cuántas pruebas haces: el laboratorio de ATLAS probó 33,363 estrategias y ninguna sobrevivió.
Contenido educativo. No es asesoría financiera ni recomendación de inversión.

## Descripción de YouTube — Short
https://atlas-lab-one.vercel.app/e/74?utm_source=youtube&utm_medium=short&utm_campaign=exp074-t3
Ficha: experimento #74, parcial. Una combinación probada (20 y 10) contra 33,363 del laboratorio, con 0 sobrevivientes. Contenido educativo, no es asesoría financiera.

## Capítulos
0:00 Gancho · 0:18 Qué experimento es · 0:45 El canal en tres pasos · 1:40 Por qué dos números distintos · 2:30 Una sola combinación · 3:10 Lo contrario: el laboratorio · 4:00 Qué enseña el contraste · 4:40 Con tu capital · 5:05 Preguntas de un escéptico · 5:25 Ficha del experimento #74 · 5:55 Cierre

## Etiquetas
Turtle Trading, canal de Donchian, Deflated Sharpe, pruebas múltiples, sobreajuste, laboratorio ATLAS, 33,363 estrategias, seguimiento de tendencia, backtest, trading con datos, ATLAS Lab, estrategias famosas

## Rúbrica (autoevaluación, 1–5)
| Pieza | hook_0_3s | ritmo | promesa_cumplida | potencial_loop | claridad_no_traders | honestidad_atlas | audio | cta | Promedio |
|---|---|---|---|---|---|---|---|---|---|
| Largo | 5 | 4 | 5 | 4 | 4 | 5 | 4 | 4 | 4.38 |
| Short | 5 | 4 | 5 | 4 | 4 | 5 | 4 | 4 | 4.38 |

Hook ≥ 4 ✓ · honestidad 5 ✓. Punto débil: el experimento #74 y el laboratorio (#81) son pruebas de naturaleza distinta; el largo lo dice y evita comparar sus Sharpe. La «idea de diseño» de las dos ventanas se presenta como intuición, no como resultado.

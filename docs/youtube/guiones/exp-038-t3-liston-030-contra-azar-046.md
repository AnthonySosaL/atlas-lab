# Experimento #38 — Deflated Sharpe de la versión ejecutable · Tema 3: el listón de 0.30 contra el azar de 0.46

Estado del guion: **BORRADOR — pendiente de aprobación**
Tema 3 de 3 del experimento #38. Qué aporta frente a los otros temas: es el DETALLE SORPRENDENTE. El tema 1 explica la idea y el veredicto y el tema 2 abre el cálculo; este tema compara el listón fijo de Sharpe 0.30 del laboratorio con el 0.46 que da el azar tras 40 intentos, y lo conecta con el experimento 81 (4,566 estrategias superan el listón y ninguna supera el Deflated Sharpe).
Estado del experimento: **MURIÓ** (Deflated Sharpe 0.010 frente a los 0.95 necesarios)
Serie: **G — Construyendo un bot (y por qué murió)**
Datos usados: `experiments.json` (v=38: analysis, verdict, metrics, kpis, capital; v=81: verdict, metrics, kpis) · `exp_details.json` (v38: algo, filters; v81: filters) · fila #38 de la tabla «Con tu capital» (`docs/youtube/`).

## Títulos (opciones)
1. El listón de Sharpe 0.30 lo pasaron 4,566 estrategias. Ninguna, el 0.95
2. Con 40 intentos, el azar saca Sharpe 0.46: más que mi listón de 0.30
3. ¿Sirve un Sharpe de 0.30? Depende de cuántas veces lo intentaste

## Miniatura
Fondo #09090b. Una regla horizontal con tres marcas: «0.30» en blanco, «0.46» en gris y una flecha roja (#e11d2a) por debajo de cero. Encima, una multitud de puntos pasando la primera marca y ninguno la tercera. Texto grande: «NO BASTA». Logo ATLAS en la esquina inferior derecha. (No repite las palabras de los títulos.)

---

## VIDEO LARGO (16:9, ≈ 4:15)

**[0:00 — Gancho]** (pantalla — BOCETO: un embudo con 33,363 puntos; 4,566 pasan el primer filtro «Sharpe fuera de muestra > 0.30» y al llegar al segundo, «Deflated Sharpe > 0.95», no pasa ninguno)
De 33,363 estrategias probadas en el laboratorio, 4,566 superaron el listón de Sharpe 0.30 en una de las pruebas fuera de muestra. Del Deflated Sharpe, la prueba que descuenta la suerte, no pasó ninguna. Este video explica por qué un listón fijo no basta.

**[0:18 — Este es el experimento #38]** (pantalla — BOCETO: rótulo «EXPERIMENTO #38 · DEFLATED SHARPE DE LA VERSIÓN EJECUTABLE» con el logo ATLAS; la URL pequeña debajo)
Este es el experimento #38 de ATLAS Lab: Deflated Sharpe de la versión ejecutable. Todos los resultados están en la página del experimento. Parto de un detalle de los números que conviene tener presente.

**[0:32 — El listón]** (pantalla — BOCETO: regla horizontal con la marca 0.30 y el rótulo «mínimo de Sharpe del laboratorio»; Sharpe definido como «ganancia por unidad de riesgo»)
El Sharpe es la ganancia por unidad de riesgo. En el laboratorio, una estrategia debe superar un Sharpe de 0.30 para empezar a tomarse en serio. Es un listón fijo, fácil de explicar y fácil de aplicar. Pero tiene un punto ciego: no sabe cuántas veces intentaste pasarlo.

**[0:51 — Lo que el azar entrega]** (pantalla — BOCETO: sobre la misma regla aparece la marca 0.464 con el rótulo «el mejor Sharpe del puro azar tras 40 intentos y 5,609 días»; una flecha señala que está por encima de 0.30)
Si pruebas unas 40 versiones de una estrategia sin ningún valor, con 5,609 días de datos, la mejor de ellas tendrá en promedio un Sharpe de 0.464 al año solo por suerte. Eso queda por encima del listón de 0.30. En este caso concreto, cualquier Sharpe entre 0.30 y 0.46 pasaría el listón sin distinguirse de lo que el azar da con 40 intentos.

**[1:16 — A gran escala: el experimento 81]** (pantalla — BOCETO: tabla con los números del experimento 81: «probadas 33,363 · fuera de muestra 2007–2013 > 0.30: 4,566 · fuera de muestra 2021–2024 > 0.30: 2,631 · Deflated Sharpe > 0.95: 0 · máximo 0.31»)
| Filtro del experimento 81 | Estrategias que lo pasan |
|---|---|
| Sharpe > 0.30 en 2007–2013 | 4,566 de 33,363 |
| Sharpe > 0.30 en 2021–2024 | 2,631 de 33,363 |
| Deflated Sharpe > 0.95 | 0 de 33,363 |
En el experimento 81 el laboratorio probó 33,363 estrategias. Miles superan el listón de 0.30 en una prueba fuera de muestra, es decir, en años que no se usaron para diseñarlas. Pero el Deflated Sharpe, que cuenta los 33,363 intentos, tiene un máximo de 0.31 frente a los 0.95 necesarios. Minar miles de estrategias produce falsos positivos, y solo el ajuste por pruebas múltiples los atrapa.

**[1:49 — Mi bot en esa regla]** (pantalla — BOCETO: regla con cuatro marcas: «−0.03 bot» · «0.025 bot con salida medida» · «0.30 listón» · «0.46 azar tras 40 intentos»)
Ahora pon el bot de este experimento en la regla. Con las señales de ayer y apalancamiento ×2, el Sharpe es menos 0.03. Con la salida medida el día del disparo, con un φ de 0.94, es 0.025. Está lejos de 0.30 y muy lejos de 0.46. Resultado del Deflated Sharpe: 0.010, o 0.019 con la salida medida, frente a 0.95.

**[2:13 — Cada filtro responde otra pregunta]** (pantalla — BOCETO: cuatro tarjetas: «¿rinde algo?» → Sharpe ≥ 0.30 · «¿vale en años nuevos?» → fuera de muestra · «¿añade algo al mercado?» → batir a comprar y esperar · «¿es más que suerte?» → Deflated Sharpe)
Por eso el laboratorio no usa un filtro, sino varios, y cada uno responde una pregunta distinta. ¿Rinde algo? Un Sharpe mínimo. ¿Vale en años nuevos? La prueba fuera de muestra. ¿Añade algo al mercado? Batir a comprar y esperar. ¿Es más que suerte? El Deflated Sharpe. Una estrategia puede pasar las primeras y fallar la última, que es la que mira cuántas veces probaste.

**[2:39 — El marcador de filtros]** (pantalla — BOCETO: checklist de exp_details.filters: Deflated Sharpe ✗ · Sharpe observado ✗ · batir a comprar y esperar ✗ · número de intentos «estimado» — · costos completos —)
El tablero de filtros de este bot: el Deflated Sharpe, 0.010, no llega a 0.95; el Sharpe observado, menos 0.03, no llega a 0.30; y no bate a comprar y esperar, con menos 7.1% frente a más 68.7%. El número de intentos, 40, es una estimación, y por eso también se calcula con 20 y con 91, que dan 0.020 y 0.004. Los costos completos no se aplicaron: solo hay deslizamiento de 0.2% en el corte automático.

**[3:09 — Qué preguntarle a un backtest]** (pantalla — BOCETO: tres tarjetas que se marcan: «¿cuántas versiones probó?» · «¿qué años no vio?» · «¿Deflated Sharpe?»)
Si te muestran un Sharpe por encima del listón, hazle tres preguntas al backtest. ¿Cuántas versiones se probaron antes de mostrar esta? ¿Qué años no vio? ¿Cuál es su Deflated Sharpe? Un número que supera un listón no es una ventaja hasta que sabes contra cuántos intentos lo logró.

**[3:28 — Con tu capital]** (pantalla — BOCETO: tarjeta «Con tu capital»: $100,000 → −$7,102 contra +$68,723, 2007–2024; nota «este experimento mide si el Sharpe supera al azar»)
Con $100,000 simulados entre 2007 y 2024, la cartera ×2 de este experimento termina en −$7,102. Comprar y esperar la misma cesta: +$68,723. Este experimento no mide cuánto rendiría una cuenta, sino si su Sharpe supera al azar. Es una simulación histórica, no una promesa; con $10,000 serían la décima parte.

**[3:49 — Ficha del experimento #38]** (pantalla — BOCETO: tarjeta de ficha con sello «NO SIRVIÓ», cuatro líneas y la URL atlas-lab-one.vercel.app/e/38; logo ATLAS)
Ficha del experimento #38. Estado: no sirvió. Cifra clave: Sharpe de menos 0.03 contra 0.46 que da el azar tras 40 intentos; Deflated Sharpe de 0.010 frente a 0.95. Filtro que decidió: el Deflated Sharpe. Lección: superar un listón fijo no prueba ventaja; hay que saber contra cuántos intentos. Revísalo completo en atlas-lab-one.vercel.app/e/38. Contenido educativo, no es asesoría financiera. El trading no se promete: se prueba.

---

## SHORT (9:16, ≈ 46 s)
Título del Short: 4,566 pasaron Sharpe 0.30. Ninguna, el Deflated Sharpe #shorts
Fórmula visual (CLAUDE.md del canal): b-roll vertical real con overlay 0.6, Ken Burns alternado, subtítulos karaoke en MAYÚSCULAS con cifras en rojo, ticker arriba, whoosh + flash en cada corte; golpe (bass + sacudida) solo en 0-3 s y 14-28 s.

**[0-3 s]** "De 33,363 estrategias, 4,566 pasaron el listón de Sharpe 0.30. Ninguna, el Deflated Sharpe."
- Boceto: b-roll de una multitud atravesando un torniquete (kb=in); «4,566» en blanco y «0» en rojo; golpe de bass.

**[3-14 s]** "El Sharpe es la ganancia por unidad de riesgo. Mi listón mínimo es 0.30. Pero un listón fijo no sabe cuántas veces lo intentaste."
- Boceto: regla horizontal con la marca 0.30; signo de interrogación sobre «¿cuántas veces?».

**[14-28 s]** "Con 40 intentos y 5,609 días, el azar solo ya saca un Sharpe de 0.46 al año. Eso es más que 0.30. Mi bot: menos 0.03. Deflated Sharpe: 0.010."
- Boceto: sobre la regla aparece la marca 0.46; el bot cae por debajo de cero; sacudida al aparecer 0.46.

**[28-40 s]** "Minar miles de estrategias da falsos positivos. Solo el ajuste por pruebas múltiples los caza: el máximo fue 0.31, y se necesita 0.95."
- Boceto: medidor con la aguja en 0.31 lejos de la meta 0.95; sello «FALSOS POSITIVOS».

**[40-48 s]** "Un Sharpe por encima del listón no es ventaja hasta saber cuántos intentos costó. Video completo en el canal. Experimento 38 completo en el enlace. No es asesoría financiera."
- Boceto: sello «NO SIRVIÓ»; logo ATLAS y «EXPERIMENTO #38 · ENLACE». Loop: la frase final enlaza con el gancho (4,566 pasaron el listón).

## Descripción (YouTube)
**Video largo**
https://atlas-lab-one.vercel.app/e/38?utm_source=youtube&utm_medium=video&utm_campaign=exp038-t3
Ficha del experimento #38 (Deflated Sharpe de la versión ejecutable): no sirvió. Deflated Sharpe 0.010 (se necesita 0.95); el azar da Sharpe 0.46 tras 40 intentos y el bot, −0.03. En el experimento 81, 4,566 de 33,363 estrategias superan Sharpe 0.30 fuera de muestra y ninguna supera el Deflated Sharpe.
Por qué un listón fijo de Sharpe no basta y qué preguntarle a un backtest.

Capítulos: 0:00 Gancho · 0:18 Este es el experimento #38 · 0:32 El listón · 0:51 Lo que el azar entrega · 1:16 A gran escala: el experimento 81 · 1:49 Mi bot en esa regla · 2:13 Cada filtro responde otra pregunta · 2:39 El marcador de filtros · 3:09 Qué preguntarle a un backtest · 3:28 Con tu capital · 3:49 Ficha del experimento #38

**Short**
https://atlas-lab-one.vercel.app/e/38?utm_source=youtube&utm_medium=short&utm_campaign=exp038-t3
Experimento #38: el azar da Sharpe 0.46 con 40 intentos; el listón es 0.30 y mi bot sacó −0.03 (Deflated Sharpe 0.010). No sirvió.

Contenido educativo. No es asesoría financiera ni recomendación de inversión.

Etiquetas: Deflated Sharpe, Sharpe ratio, falsos positivos, pruebas múltiples, overfitting, backtest, fuera de muestra, López de Prado, validación de estrategias, bot de trading, ATLAS Lab

## Rúbrica (autoevaluación — criterios del CLAUDE.md del canal, 1-5)
| hook_0_3s | ritmo | promesa_cumplida | potencial_loop | claridad_no_traders | honestidad_atlas | audio | cta |
|---|---|---|---|---|---|---|---|
| 5 | 4 | 5 | 4 | 4 | 5 | 4 | 4 |

Promedio: **4.38** → cumple el corte (≥ 4.0; hook ≥ 4 y honestidad 5).
Notas: el hook es una pareja de cifras de otro experimento (4,566 contra 0), rotulada como tal. La afirmación sobre el rango entre 0.30 y 0.46 es una consecuencia lógica de los dos números y se limita a este caso concreto (40 intentos, 5,609 días).

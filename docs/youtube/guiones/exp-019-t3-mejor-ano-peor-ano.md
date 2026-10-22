# Experimento #19 — Apalancamiento escalonado por VIX · Tema 3: Mejor año +41.4%, peor año −2.1%: el ×5 en calma, año por año

Tema 3 de 3 del experimento #19. Tema 1: `exp-019-leverage-vix-x5.md`.
Qué aporta frente a los otros temas: Desglosa por años (2015-2024) la versión ×5 en calma frente a la base ×3 y a comprar y esperar, y enseña qué hace la palanca en cada año. El tema 1 es el resultado completo y el tema 2 explica el drawdown estático y dinámico.
Estado del guion: **BORRADOR — pendiente de aprobación**
Estado del experimento: **murió** (veredicto del sitio: «No sirvió»)
Serie: G (Construyendo un bot, y por qué murió)
Datos usados: `experiments.json` (v=19: description, params, metrics, kpis, analysis, verdict, notes, capital, period), `exp_details.json` (algo, code, filters), `series/20260609_210756_leverage-graduado-por-vix-v19.json` (curva de la estrategia y curva «Sin estrategia») y la tabla «Con tu capital» de docs/youtube (fila 19). Las cifras con 10,000 dólares son las de la tabla de 100,000 divididas entre 10. Los rendimientos por año calendario se calculan de las curvas de series de los experimentos 19 y 16 (último valor del año frente al último del año anterior); coinciden con el mejor año (+41.4%, 2016) y el peor año completo (−2.1%, 2015) que publica el sitio. Se cita el #16 por la base ×3.

## Títulos (3 opciones)
1. Mejor año +41.4%, peor año −2.1%: lo que hace el ×5 en calma, año por año
2. Apalancamiento ×5 contra ×3 contra comprar y esperar: los diez años de 2015 a 2024
3. En 2022 las dos versiones dieron exactamente +11.9%: la pista del ×5

## Miniatura
Fondo negro de la marca. Diez barras anuales, la más alta en verde con «2016: +41.4%» y una pequeña en rojo con «2015: −2.1%». Texto grande: «×5 AÑO POR AÑO». Logo ATLAS esquina inferior derecha.

---

## VIDEO LARGO (16:9, ≈ 4:13 min — 4–6 min: tema de una sola idea y pocas cifras)
Ritmo visual: algo cambia en pantalla cada 2-3 s; b-roll real detrás, Ken Burns alterno, subtítulos karaoke, whoosh + flash en cada corte, golpe de bass solo en el momento clave.

**[0:00 — Gancho]** (pantalla: diez barras anuales)
Con apalancamiento ×5 cuando el VIX está bajo 16, el mejor año fue 2016, con +41.4%. El peor año completo, 2015, con −2.1%. Veamos los diez años y qué hace la palanca en cada uno.
> Boceto: diez barras que suben una a una; la de 2016 se dispara en verde y la de 2015 queda en rojo; b-roll de pantallas de bolsa, Ken Burns «in».

**[0:15 — El experimento]** (pantalla: rótulo con el número y el nombre del experimento)
Este es el experimento #19 de ATLAS Lab: Apalancamiento escalonado por VIX. Todos los resultados están en la página del experimento.
> Boceto: rótulo animado «EXPERIMENTO #19» con el nombre «Apalancamiento escalonado por VIX» debajo y el logo ATLAS; whoosh de entrada y fondo de velas con opacidad 0.12.

**[0:23 — La regla del ×5]** (pantalla: escalera de apalancamiento)
La regla: si el VIX, el índice del miedo, está por debajo de 16, el bot apalanca ×5. Si no, ×3. Y si el filtro de pánico detecta riesgo, se queda fuera. Es una cesta de 15 mercados con las reglas de una cuenta fondeada, de 2014 a 2024.
> Boceto: escalera «fuera / ×3 / ×5» con termómetro del VIX y la marca en 16; cesta de 15 símbolos.

**[0:44 — Los diez años del ×5]** (pantalla: barras anuales 2015-2024)
Los diez años completos del ×5. 2015, −2.1%. 2016, +41.4%. 2017, +38.9%. 2018, +9.0%. 2019, +28.5%. 2020, +24.3%. 2021, +25.8%. 2022, +11.9%. 2023, +12.3%. 2024, +33.9%. Nueve años positivos de diez.
> Boceto: barras anuales con su cifra, una a una, leídas de la curva 1 de series; contador «9 / 10».

**[0:56 — Contra la base de ×3]** (pantalla: pares de barras)
Compáralo con la base de ×3, la del experimento 16. En 2016, +41.4% contra +25.3%. En 2017, +38.9% contra +22.0%. En 2024, +33.9% contra +15.9%. La palanca extra, usada solo en calma, mejora casi todos los años.
> Boceto: tres pares de barras (×5 verde y ×3 azul-gris) que entran con tick; texto «misma regla, más palanca en calma».

**[1:12 — El año idéntico: 2022]** (pantalla: dos barras iguales)
Hay un año en que las dos versiones dieron exactamente lo mismo: 2022, +11.9% las dos. Un resultado idéntico sugiere que el ×5 no llegó a activarse ese año, es decir, que el VIX no bajó de 16. Es una lectura de los datos, no una medición directa.
> Boceto: dos barras idénticas de 2022 con el rótulo «=»; etiqueta ámbar «lectura, no medición».

**[1:31 — El año de contraste: 2023]** (pantalla: tres barras de 2023)
El año de más contraste es 2023. La base de ×3 hizo +2.5%, el ×5 en calma +12.3% y comprar y esperar la cesta, +12.4%. Ese año, la palanca extra marcó la diferencia frente a la base, y dejó al bot a la altura de comprar y esperar.
> Boceto: tres barras de 2023: «×3: +2.5%», «×5: +12.3%», «comprar y esperar: +12.4%»; las dos últimas casi iguales.

**[1:51 — Contra comprar y esperar]** (pantalla: diez años, un marcador)
Contra comprar y esperar la cesta, el ×5 gana en nueve de los diez años. La excepción es 2023, por una décima. Es una ventaja grande, pero recuerda de dónde viene: palanca de hasta ×5 y un filtro que usa el cierre del mismo día.
> Boceto: marcador «9 – 1» entre barras verdes y grises; la excepción de 2023 resaltada; aviso ámbar «×5 + cierre del mismo día».

**[2:10 — La palanca amplifica en los dos sentidos]** (pantalla: dos caídas máximas)
La palanca no distingue entre años buenos y malos: amplifica. Los mejores años crecen más, pero también las caídas dentro del año: la caída máxima pasó de −12.5% con la base a −17.2% con el ×5.
> Boceto: barras de caída máxima «×3: −12.5%» y «×5: −17.2%»; la curva con un tramo bajista resaltado.

**[2:25 — Qué mirar en un desglose por años]** (pantalla: tres preguntas)
Cuando veas un desglose por años, mira tres cosas. Cuántos años son positivos: aquí, nueve de diez. Cuál es el peor año y cuánto cuesta: aquí, −2.1%. Y si el resultado depende de uno o dos años extraordinarios, como 2016 y 2017, o está repartido en toda la serie.
> Boceto: tres tarjetas que entran con tick: «años positivos 9/10», «peor año −2.1%», «¿depende de 2016 y 2017?»; las barras de esos dos años se resaltan.

**[2:45 — Sharpe 1.39 contra 1.23]** (pantalla: dos barras de Sharpe)
El Sharpe es de 1.39 contra 1.23 de la base: mejor en la muestra. Pero con la señal de ayer la base muere, según el experimento 27, así que subir el apalancamiento sobre esa base solo amplifica el problema.
> Boceto: dos barras 1.23 y 1.39; debajo, la base con la señal de ayer en rojo; sello «NO EJECUTABLE».

**[3:01 — Con tu capital]** (pantalla: tarjeta «Con tu capital» con aviso)
Con 10,000 dólares, el ×5 termina en más 59,150; la base de ×3, en más 26,727; y comprar y esperar, en más 5,904. Con 100,000, más 591,504, más 267,267 y más 59,039. Ninguna de las dos primeras se puede replicar en real: usan el cierre del mismo día y apalancamiento.
> Boceto: tarjeta de capital con tres cifras por selector $10,000 / $100,000; aviso ámbar «información del mismo día».

**[3:21 — Conclusión]** (pantalla: texto grande)
Veredicto: no sirvió. El +591.5% con Sharpe 1.39 depende del VIX del cierre del mismo día. Años de +41.4% o +38.9% son exactamente lo que se esperaría de una palanca de ×5 sobre una buena racha, y tampoco son una promesa.
> Boceto: sello ✕ rojo sobre las barras altas; la barra de 2015 queda en rojo.

**[3:38 — Ficha del experimento #19]** (pantalla: tarjeta en pantalla con la ficha y la URL)
Ficha del experimento 19. Estado: murió (veredicto del sitio: «No sirvió»). Cifra clave: +591.5%, Sharpe 1.39 (la base: 1.23), caída máxima −17.2% y 9 de 10 años positivos. Filtro que decidió: la señal rezagada un día falla (el VIX es el del cierre del mismo día) y la caída de −17.2% solo sirve en firmas de drawdown estático. Lección: subir el apalancamiento en calma amplifica ganancias y caídas. Revísalo completo en atlas-lab-one.vercel.app/e/19. Contenido educativo, no es asesoría financiera. El trading no se promete: se prueba.
> Boceto: tarjeta con las líneas de la ficha apareciendo una a una (estado, cifra clave, filtro que decidió, lección) y, al pie, la URL «atlas-lab-one.vercel.app/e/19» resaltada; sello del estado del experimento; frase de marca, logo y URL.

---

## SHORT (9:16, ≈ 42 s)
Fórmula visual: b-roll vertical + overlay oscuro 0.6, Ken Burns alternando in/out, subtítulos karaoke en MAYÚSCULAS con las cifras en rojo, whoosh + flash en cada corte, golpe de bass + sacudida solo en el 0-3 s; ticker arriba.

**[0-3 s]** «Mejor año +41.4%. Peor año completo: −2.1%.»
> Boceto: texto gigante «+41.4%» verde y «−2.1%» rojo sobre barras anuales; sacudida; b-roll de bolsa, Ken Burns «in».
**[3-12 s]** «Es el mismo bot con filtro de pánico, pero con apalancamiento ×5 cuando el VIX está bajo 16, y ×3 el resto del tiempo.»
> Boceto: escalera «fuera / ×3 / ×5» con el termómetro; Ken Burns «out»; karaoke con «×5» en rojo.
**[12-18 s]** «En 2016, +41.4% contra +25.3% de la versión ×3. En 2017, +38.9% contra +22.0%.»
> Boceto: dos pares de barras que entran con tick; whoosh y flash blanco.
**[18-21 s]** «En 2022, las dos dieron lo mismo: +11.9%.»
> Boceto: dos barras idénticas con «=»; Ken Burns «in».
**[21-27 s]** «Nueve de diez años positivos, pero la caída máxima subió de −12.5% a −17.2%.»
> Boceto: dos barras de caída máxima, la segunda más larga y roja.
**[27-38 s]** «Y decide con el VIX del cierre de ese mismo día. El video completo está en el canal. Experimento #19 completo en el enlace. No es asesoría financiera.»
> Boceto: reloj con flecha roja; texto «Video completo en el canal» y «Experimento #19 en el enlace» con el logo ATLAS.
**[38-42 s]** «Cuando veas un año de +41.4%, pregunta con qué palanca.»
> Boceto: vuelve «+41.4%» con el chip «×5» (loop con el gancho); corte directo al inicio.

## Descripción (YouTube) — video largo
https://atlas-lab-one.vercel.app/e/19?utm_source=youtube&utm_medium=video&utm_campaign=exp019-t3
Ficha del experimento #19 (Apalancamiento escalonado por VIX): estado murió. +591.5%, Sharpe 1.39 (base 1.23), caída máxima −17.2% y 9 de 10 años positivos, con el VIX del cierre del mismo día.
Los diez años completos (2015-2024) del bot con apalancamiento ×5 cuando el VIX está bajo 16 (×3 el resto del tiempo): mejor año 2016 con +41.4%, peor año completo 2015 con −2.1%, 9 de 10 años positivos, Sharpe 1.39 contra 1.23 de la base ×3 y caída máxima −17.2% contra −12.5%.
Comparado con la base ×3 y con comprar y esperar la cesta. Decide con el VIX del cierre del mismo día (no ejecutable).
Contenido educativo. No es asesoría financiera ni recomendación de inversión.

## Descripción (YouTube) — Short
https://atlas-lab-one.vercel.app/e/19?utm_source=youtube&utm_medium=short&utm_campaign=exp019-t3
Ficha del experimento #19 (Apalancamiento escalonado por VIX): estado murió. +591.5%, Sharpe 1.39 (base 1.23), caída máxima −17.2% y 9 de 10 años positivos, con el VIX del cierre del mismo día.
Con ×5 en calma, el mejor año fue +41.4% y el peor completo −2.1%; la caída máxima subió de −12.5% a −17.2%.
Video completo en el canal. Experimento #19 completo en el enlace. Contenido educativo, no es asesoría financiera.

Capítulos: 0:00 Gancho · 0:15 El experimento · 0:23 La regla del ×5 · 0:44 Los diez años del ×5 · 0:56 Contra la base de ×3 · 1:12 El año idéntico: 2022 · 1:31 El año de contraste: 2023 · 1:51 Contra comprar y esperar · 2:10 La palanca amplifica en los dos sentidos · 2:25 Qué mirar en un desglose por años · 2:45 Sharpe 1.39 contra 1.23 · 3:01 Con tu capital · 3:21 Conclusión · 3:38 Ficha del experimento #19

Etiquetas: apalancamiento, resultados por año, VIX, backtest, bot de trading, Sharpe ratio, drawdown, comparar estrategias, prop firm, ATLAS Lab, trading con datos, riesgo de ruina

## Rúbrica (autoevaluación, 1–5)
| Criterio | Short | Largo |
|---|---|---|
| hook_0_3s | 4 | 4 |
| ritmo | 4 | 4 |
| promesa_cumplida | 5 | 5 |
| potencial_loop | 4 | 4 |
| claridad_no_traders | 4 | 4 |
| honestidad_atlas | 5 | 5 |
| audio | 4 | 3 |
| cta | 4 | 4 |
| **Promedio** | **4.25** | **4.13** |

Notas: el gancho da el mejor y el peor año con números verificables (+41.4% y −2.1% son kpis del sitio); la lectura de 2022 se rotula como «lectura, no medición». Los rendimientos anuales se calculan de la serie. El Short cumple hook ≥ 4 y honestidad 5 (dice que decide con el cierre del mismo día).

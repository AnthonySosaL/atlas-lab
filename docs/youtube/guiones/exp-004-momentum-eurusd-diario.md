# Experimento #4 — Momentum de serie temporal diario

Estado del guion: **BORRADOR — pendiente de aprobación**
Estado del experimento: **murió**
Serie: B (Estrategias famosas, puestas a prueba), por afinidad; los #4–#8 no figuran en plan-series.md
Datos usados: `experiments.json` (v=4: description, params, metrics, kpis, analysis, verdict, notes), `exp_details.json` (algo, filters), `series/20260607_152309_time-series-momentum-diario-v4.json` (curva 1 = estrategia, curva 2 = comprar y esperar) y la tabla «Con tu capital» de docs/youtube (fila 4). Las cifras con 10,000 dólares son el saldo final del propio experimento y de las curvas de series.

## Títulos (3 opciones)
1. Momentum en el EUR/USD: acierta el 25.7% y pierde −4.3%
2. Momentum de serie temporal en el euro: 75 operaciones, Sharpe −0.08
3. ¿Funciona el momentum clásico con un solo par de divisas? 6 años de datos

## Miniatura
Fondo negro de la marca. Texto grande: «SOLO 25.7%» (blanco; «25.7%» en rojo de marca). Debajo, una flecha ascendente que se rompe y «−4.3%» en rojo. De fondo, tenue, la curva real de la serie 1 con su pico de mayo de 2023 y la caída posterior. Logo ATLAS esquina inferior derecha.

---

## VIDEO LARGO (16:9, ≈ 5:21 min — 4–6 min: experimento de una sola idea y pocas cifras)
Ritmo visual: algo cambia en pantalla cada 2-3 s; b-roll real detrás, Ken Burns alterno, subtítulos karaoke, whoosh + flash en cada corte, golpe de bass solo en el momento clave.

**[0:00 — Gancho]** (pantalla: «25.7%» en rojo, «−4.3% vs −9.7%»)
Esta estrategia acierta solo el 25.7% de sus operaciones. Aun así perdió menos que el mercado: −4.3% frente a −9.7%. ¿Eso es una buena señal? No. En este video te muestro por qué perder menos que el mercado no es lo mismo que tener una ventaja, y qué cambia cuando pasamos del trading de una hora al trading diario, con una idea que viene de la investigación académica.
> Boceto: contador del 25.7% sobre un círculo mayormente rojo; después dos barras: −4.3% y −9.7%. Ken Burns «in» sobre b-roll del gráfico del euro con overlay oscuro.

**[0:28 — Presentación]** (pantalla: rótulo «Experimento #4 · Momentum de serie temporal diario»)
Este es el experimento #4 de ATLAS Lab: Momentum de serie temporal diario. Todos los resultados están en la página del experimento.
> Boceto: rótulo grande «EXPERIMENTO #4 · Momentum de serie temporal diario» sobre velas de fondo con overlay oscuro; abajo, la URL pequeña «atlas-lab-one.vercel.app/e/4». Ken Burns «out».

**[0:38 — La idea]** (pantalla: precio con ventana de 120 días)
Es el momentum de serie temporal, una idea académica de Moskowitz, Ooi y Pedersen de 2012: lo que ha subido tiende a seguir subiendo, y lo que ha bajado, a seguir bajando, al menos durante un tiempo. La regla es simple. Miro el retorno de los últimos 120 días del euro-dólar. Si es positivo, compro. Si es negativo, vendo en corto, es decir, apuesto a que baja. No intento adivinar el cambio de tendencia; la sigo y espero. Por eso las operaciones duran semanas, no horas, y por eso este enfoque debería sufrir mucho menos con los costos que los modelos de una hora.
> Boceto: gráfico diario con una ventana de 120 días resaltada; si el cierre está más arriba que hace 120 días, flecha verde «COMPRA»; si está más abajo, flecha roja «VENTA EN CORTO».

**[1:21 — Cómo lo probé]** (pantalla: tarjeta de parámetros)
Uso el euro-dólar, pero esta vez en velas diarias: convertí las de una hora a cierres de cada día. Son 1,877 días, de 2019 a 2024. La ventana de 120 días la fijé de antemano, sin probar otras para quedarme con la mejor, porque probar muchas ventanas y quedarte con la ganadora es la forma más fácil de inflar un resultado. Los costos son los de siempre: 0.007% de comisión más 0.002% de deslizamiento. Y los chequeos habituales: una prueba de azar con permutaciones, el PSR, que es la probabilidad de que el Sharpe real sea positivo, y la comparación con comprar y esperar.
> Boceto: tarjeta de `params_view` (EUR/USD · 1 d · ventana 120 d · comisión 0.007% · deslizamiento 0.002% · 1,877 días) con tick sonoro; sello «Ventana fijada de antemano».

**[2:03 — Resultados]** (pantalla: tarjetas KPI y curva)
Retorno total: −4.3%. Comprar y esperar: −9.7%. El Sharpe fue −0.08, es decir, casi cero: ni ganancia ni pérdida por unidad de riesgo. La peor caída fue −13.9%, y la cuenta estuvo 863 días por debajo de su máximo. Hizo 75 operaciones, con el 25.7% ganadoras, y un factor de beneficio de 0.79. Su mejor operación ganó 11.9%; la peor perdió 2.2%. Es el perfil típico de la tendencia: pocas operaciones grandes que ganan, y muchas pequeñas que pierden.
> Boceto: `kpis` en cascada; la curva real (series, curva 1) se dibuja subiendo hasta su pico de mayo de 2023 y cae hasta terminar por debajo de los 10,000 iniciales; la curva 2 en rojo tenue. Cota «863 días» sobre el tramo bajo el máximo.

**[2:36 — Qué sí cambió: los costos]** (pantalla: comparación de costos con el #1)
Bajar a velas diarias sí arregló el problema de los costos: solo 75 operaciones y unos 100 dólares de comisiones, un 1% de la cuenta. Recuerda que el modelo de una hora del experimento 1 pagó 2,327. Además, el perfil de las operaciones es el que describe la teoría: las ganadoras duran en promedio 54 días y ganan 1.53%; las perdedoras duran 12 días y pierden 0.64%. La estrategia corta las pérdidas rápido y deja correr las ganancias. Todo eso es correcto, y aun así no alcanza.
> Boceto: dos tarjetas de costos: «#1: $2,327 (23%)» tachada en gris y «#4: $100 (1%)» en verde; debajo, dos barras de duración: ganadoras 54 días, perdedoras 12 días.

**[3:12 — Pero la señal es azar]** (pantalla: moneda y checklist)
El problema ya no son los costos, es la señal. En la prueba de azar, el p fue 0.585: más de la mitad de las versiones aleatorias rinden igual o mejor. El PSR fue 0.473, lejos del 0.95 que se exige. Perder −4.3% contra −9.7% suena a victoria, pero la señal no se distingue del azar. Y el Deflated Sharpe, el ajuste por el número de pruebas, no se aplicó aquí; solo el PSR.
> Boceto: checklist de `filters`: ventana fijada de antemano ✓ verde; costos ✗ (Sharpe −0.083, factor 0.79), azar ✗ (p=0.585), PSR ✗ (0.473), comprar y esperar ✓ en ámbar con la nota «pierde menos, pero sigue en negativo».

**[3:42 — Perder menos no es ganar]** (pantalla: dos curvas negativas)
Comprar y esperar también perdió en esos seis años, así que cualquier cosa que perdiera menos iba a parecer buena. La pregunta correcta no es «¿le ganó a un mercado que cayó?», sino «¿tiene una ventaja que se distinga del azar?». Y aquí no la tiene. Con un solo par de divisas, el momentum clásico no mostró ventaja. Esto no dice que el momentum nunca funcione; dice que, en esta prueba, con este par y este periodo, no se distingue de lanzar una moneda.
> Boceto: ambas curvas reales en rojo con el área entre ellas sombreada de gris y el texto «Menos malo ≠ ventaja».

**[4:17 — Con tu capital]** (pantalla: tarjeta «Con tu capital»)
Con 10,000 dólares, la cuenta terminó en 9,575 y comprar y esperar habría terminado en 9,033. Con 100,000, la tabla de ATLAS da menos 4,252 para la estrategia, frente a menos 9,673 de comprar y esperar.
> Boceto: tarjeta de capital con ambas cifras en rojo y la diferencia sombreada; selector $10,000 / $100,000.

**[4:32 — Ficha del experimento #4]** (pantalla: tarjeta con la URL)
Ficha del experimento 4. Estado: murió. Cifra clave: menos 4.3% frente a menos 9.7% de comprar y esperar, con un Sharpe de menos 0.08, 75 operaciones y unos 100 dólares en costos. Filtros que decidieron: la prueba de azar dio un p de 0.585 y el PSR fue 0.473; perder menos que el mercado no es tener ventaja. Lección: pasar a datos diarios resolvió los costos, pero el momentum en un solo par no mostró ventaja. Revísalo completo en atlas-lab-one.vercel.app/e/4.
> Boceto: tarjeta oscura con el estado del experimento #4 arriba, las cifras clave en el centro y «atlas-lab-one.vercel.app/e/4» en grande al pie; las líneas de la ficha entran una a una; logo ATLAS.

**[5:03 — Conclusión y cierre]**
Veredicto: no sirvió. La literatura dice que el momentum necesita diversificarse, así que el siguiente experimento lo prueba sobre 15 instrumentos. Todos los datos en atlas-lab-one.vercel.app/e/4. Contenido educativo, no es asesoría financiera. El trading no se promete: se prueba.
> Boceto: sello ✕ rojo sobre «EUR/USD solo»; flecha hacia «15 instrumentos»; frase de marca, logo y URL.

---

## SHORT (9:16, ≈ 48 s)
Fórmula visual: b-roll vertical + overlay oscuro 0.6, Ken Burns alternando in/out, subtítulos karaoke en MAYÚSCULAS con las cifras en rojo, whoosh + flash en cada corte, golpe de bass + sacudida solo en el 0-3 s; ticker arriba.

**[0-3 s]** «Acierta el 25.7% y pierde menos que el mercado.»
> Boceto: texto gigante «25.7% DE ACIERTOS» y debajo «−4.3% vs −9.7%»; círculo que se llena de rojo hasta 25.7%; b-roll de gráfico del euro, Ken Burns «in».
**[3-12 s]** «Es el momentum: si el euro subió en los últimos 120 días, compra; si bajó, vende en corto. Una idea académica, probada de 2019 a 2024, con costos reales.»
> Boceto: ventana de 120 días sobre el gráfico con flechas verde y roja; Ken Burns «out»; karaoke con «120 DÍAS» en rojo.
**[12-24 s]** «Solo 75 operaciones y apenas 100 dólares de costos. Pero el resultado fue −4.3%, con un Sharpe de −0.08 y una caída máxima de −13.9%. Comprar y esperar perdió −9.7%.»
> Boceto: contador 75; dos barras −4.3% y −9.7%; whoosh y flash blanco.
**[24-36 s]** «Su mejor operación ganó 11.9%, pero el p de azar fue 0.585 y el PSR, 0.473: la señal no se distingue de la suerte. Estuvo 863 días por debajo de su máximo.»
> Boceto: moneda girando junto a «p = 0.585»; curva real con la cota «863 días»; Ken Burns «in».
**[36-48 s]** «Perder menos que un mercado que cae no es tener ventaja. Acierta el 25.7% y su señal no se distingue del azar. El video completo está en el canal. Experimento #4 completo en el enlace. No es asesoría financiera.»
> Boceto: vuelve el círculo rojo del 25.7% con ✕ (loop con el gancho); textos «Video completo en el canal» y «Experimento #4 completo en el enlace»; logo.

## Descripción de YouTube (video largo)
https://atlas-lab-one.vercel.app/e/4?utm_source=youtube&utm_medium=video&utm_campaign=exp004-t1
Ficha del experimento #4 (Momentum de serie temporal diario): estado murió · −4.3% frente a −9.7% de comprar y esperar · Sharpe −0.08 · p de azar 0.585.
Probé el momentum de serie temporal (Moskowitz, Ooi y Pedersen, 2012) en el EUR/USD diario de 2019 a 2024: compra si el retorno de 120 días es positivo, vende en corto si es negativo. Resultado: −4.3% (comprar y esperar: −9.7%), Sharpe −0.08, 75 operaciones, $100 en costos y p de azar 0.585.
Contenido educativo. No es asesoría financiera ni recomendación de inversión.

## Descripción del Short
https://atlas-lab-one.vercel.app/e/4?utm_source=youtube&utm_medium=short&utm_campaign=exp004-t1
Experimento #4 · murió · −4.3% frente a −9.7% de comprar y esperar, con 25.7% de aciertos. No es asesoría financiera.

Capítulos: 0:00 Gancho · 0:28 Presentación · 0:38 La idea · 1:21 Cómo lo probé · 2:03 Resultados · 2:36 Qué sí cambió: los costos · 3:12 Pero la señal es azar · 3:42 Perder menos no es ganar · 4:17 Con tu capital · 4:32 Ficha del experimento #4 · 5:03 Conclusión y cierre

Etiquetas: momentum trading, time series momentum, Moskowitz, EUR/USD, backtest, estrategia de trading, forex, tendencia, Sharpe ratio, ATLAS Lab, trading con datos, comprar y esperar

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

Notas: el gancho funciona por la paradoja (acierta poco y «pierde menos»); no promete ningún resultado y el Short aclara que perder menos no es ventaja. El Short cumple hook ≥ 4 y honestidad 5.

## Otros temas de este experimento
Cada tema = video largo + Short, con su propia ficha del experimento. Todos en estado BORRADOR — pendiente de aprobación.
- Tema 1: este archivo — Momentum de serie temporal diario
- Tema 2: [exp-004-t2-2022-el-unico-ano.md](exp-004-t2-2022-el-unico-ano.md) — 2022, el único año que valió (+12.9%)
- Tema 3: [exp-004-t3-dos-formas-de-seguir-tendencias.md](exp-004-t3-dos-formas-de-seguir-tendencias.md) — dos formas de seguir tendencias (822 operaciones contra 75)
- Tema 4: [exp-004-t4-uno-o-quince-mercados.md](exp-004-t4-uno-o-quince-mercados.md) — un mercado o quince, el mismo −4% (cubre #4 y #5)

# Experimento #8 — Tema 2: la comparación justa, elegidas contra todas (−4.14 contra −4.00)

Tema 2 de 3 del experimento #8
Qué aporta frente a los otros temas: es el tema de método. Explica cómo se sabe si un filtro sirve: comparando lo que deja pasar (189 operaciones, Sharpe −4.14) con el grupo completo del que salió (369 operaciones, Sharpe −4.00), y mirando también el Sharpe antes de costos (−1.41). El tema 1 se centra en el Sharpe bruto año por año del #7; el tema 3 explica las siete variables del modelo.
Estado del guion: **BORRADOR — pendiente de aprobación**
Estado del experimento: **murió** · Serie D (Machine learning en trading) · 1 largo + 1 Short
Datos usados: `experiments.json` (v=8: params, metrics, kpis, params_view, verdict, notes), `exp_details.json` (algo y filters del v=8), `series/20260607_205914_meta-labeling-reversion-sesion-v8.json` (curva 1 = las 189 operaciones elegidas, curva 2 = comprar y esperar) y tabla «Con tu capital» de docs/youtube (fila 8). Las cifras con 10,000 dólares son las de la tabla de 100,000 divididas entre 10.
Producción: b-roll real con overlay oscuro 0.6, Ken Burns alterno, subtítulos karaoke en MAYÚSCULAS con cifras en rojo, golpe de bajo solo en 1–2 momentos. Rojo `#e11d2a`, verde `#22c55e`, fondo `#09090b`.

## Títulos (3 opciones)
1. Elegidas contra todas: la comparación que decide si un filtro de IA sirve (−4.14 contra −4.00)
2. ¿Cómo saber si un filtro de machine learning funciona? El grupo de control, con datos reales
3. Una IA eligió 189 de 369 operaciones: peor que no elegir

## Miniatura
Fondo negro `#09090b`. Dos grupos de puntos: 369 grises y, dentro, 189 resaltados en verde; debajo, «−4.14» en rojo junto a «−4.00» en gris. Texto grande: «¿ELEGIR AYUDA?» (3 palabras). Logo ATLAS esquina inferior derecha.

---

## VIDEO LARGO (16:9, ≈ 4:17 min)

**[0:00 — Gancho]** (pantalla: 369 puntos y 189 resaltados)
Una IA eligió 189 de 369 operaciones. Las elegidas tuvieron un Sharpe de menos 4.14. Las 369 sin elegir, menos 4.00. El filtro no ayudó.
> Boceto: 369 puntos grises; 189 se iluminan en verde; las dos cifras aparecen debajo y la roja empeora con sacudida. Ken Burns «in».

**[0:13 — Qué experimento es]** (pantalla: rótulo con el número y el nombre)
Este es el experimento #8 de ATLAS Lab: Meta-etiquetado de reversión de sesión. Todos los resultados están en la página del experimento. Hoy lo uso para aprender a evaluar un filtro.
> Boceto: rótulo «EXPERIMENTO #8 · Meta-etiquetado de reversión de sesión» y URL pequeña. kb=out.

**[0:26 — La pregunta]** (pantalla: embudo)
Un filtro es una regla o un modelo que decide qué operaciones tomar y cuáles saltar. Siempre da una buena impresión: si quedan pocas operaciones, parece que se eligió lo mejor. La pregunta correcta no es cuánto ganan las elegidas, sino si son mejores que lo que se descartó.
> Boceto: embudo que deja pasar algunas operaciones; texto «¿Mejores que las descartadas?». kb=in.

**[0:45 — El espejismo de las elegidas]** (pantalla: subconjunto resaltado)
Cuando miras solo las operaciones elegidas hay una trampa de percepción: casi cualquier subconjunto puede verse bien por azar si lo escoges después de ver los resultados. Por eso el modelo se entrena con unas operaciones y se prueba con otras, y por eso importa el grupo de control: te dice cómo le fue al conjunto completo en las mismas fechas, con los mismos costos y el mismo mercado.
> Boceto: un puñado de puntos verdes sobre un fondo gris de puntos; texto «¿mejores o solo escogidas?». kb=out.

**[1:12 — El grupo de control]** (pantalla: dos barras de tiempo)
Aquí se compara con el grupo completo. La reversión del experimento 7 hizo 1,553 operaciones; sin los lunes, que no tienen retorno del día anterior, quedan 1,228. De esas, 854 se usan para entrenar al modelo, hay un embargo de 5 operaciones para que no se filtre información, y las 369 finales, de marzo de 2023 a diciembre de 2024, son la prueba. El modelo elige 189. El grupo de control son esas mismas 369, sin filtrar.
> Boceto: barra de 1,228 operaciones dividida en «854 entrena», «5 embargo» y «369 prueba»; dentro de las 369, 189 verdes. Texto: «Se excluyen los lunes». kb=out.

**[1:47 — El resultado]** (pantalla: dos barras de Sharpe)
Las elegidas tienen un Sharpe de menos 4.14. Las 369 sin filtrar, menos 4.00. El Sharpe es la ganancia por unidad de riesgo, y cero significa que no hay ventaja. Las elegidas no solo no son mejores: son un poco peores. El retorno de las elegidas fue de menos 5.0%, con 48.1% de aciertos, un factor de beneficio de 0.56 y una peor caída de menos 5.2%.
> Boceto: dos barras de Sharpe hacia abajo (−4.14 roja, −4.00 gris) y tarjetas KPI debajo. kb=in.

**[2:19 — Cómo sería un filtro que sirve]** (pantalla: dos escenarios)
Para que un filtro sirva, tendrían que pasar dos cosas. Una: las elegidas deben ser claramente mejores que el grupo completo. Dos: deben ser mejores que cero, es decir, que dar una ventaja real. Aquí ninguna de las dos se cumple. Y hay un chequeo más: si las elegidas son mejores solo por azar, el resultado no se repite en datos nuevos.
> Boceto: dos escenarios (ilustración): «elegidas > todas > 0» con barras verdes y el real con barras rojas; etiqueta gris «ilustración». kb=out.

**[2:43 — Ni antes de costos]** (pantalla: Sharpe bruto)
Falta la prueba más dura: quitar los costos. El Sharpe de las elegidas antes de costos es menos 1.41. Es decir, aunque no pagaras ninguna comisión, las operaciones que el modelo consideraba mejores perdían. Y el PSR, la probabilidad de que el Sharpe verdadero sea positivo, es 0.0002. No hay ventaja que rescatar.
> Boceto: barra grande «bruto de las elegidas −1.41» con candado cerrado; medidor PSR en 0.0002 contra 0.95. kb=in.

**[3:06 — Una advertencia de tamaño]** (pantalla: aviso ámbar)
Una advertencia honesta: son 189 operaciones en una ventana corta. No pretendo más precisión de la que hay. Pero la dirección es clara en las tres lecturas: peor que el grupo completo, negativa antes de costos y con un PSR casi cero. Con tan pocas operaciones, no afirmo más que eso.
> Boceto: tarjeta ámbar «189 operaciones · mar-2023 → dic-2024» y tres sellos ✕. kb=out.

**[3:26 — Con tu capital]** (pantalla: tarjeta «Con tu capital»)
Con 10,000 dólares serían unos menos 494 para la estrategia, frente a unos menos 376 de comprar y esperar. Con 100,000, la tabla de ATLAS da menos 4,935 contra menos 3,756. Recuerda: son 189 operaciones.
> Boceto: tarjeta de capital con ambas cifras en rojo y la nota «189 operaciones · mar-2023 → dic-2024»; selector $10,000 / $100,000.

**[3:44 — Ficha del experimento #8]** (pantalla: tarjeta con la URL)
Ficha del experimento 8. Estado: murió. Cifra clave: Sharpe de las elegidas menos 4.14 contra menos 4.00 sin filtro, y menos 1.41 antes de costos. Filtros que decidieron: costos, tramo reservado y PSR de 0.0002. Lección: compara siempre el filtro contra el grupo del que sale. Revísalo completo en atlas-lab-one.vercel.app/e/8.
> Boceto: tarjeta oscura con «#8 · MURIÓ», cifras clave y «atlas-lab-one.vercel.app/e/8» en grande; logo.

**[4:08 — Cierre]**
Todos los datos en atlas-lab-one.vercel.app, experimento 8. Contenido educativo, no es asesoría financiera. El trading no se promete: se prueba.
> Boceto: pantalla oscura con la frase de marca.

---

## SHORT (9:16, ≈ 45 s)

**[0-3 s]** «Una IA eligió lo mejor: Sharpe −4.14. Sin elegir: −4.00.»
> Boceto: 369 puntos y 189 en verde; las dos cifras con sacudida en la roja; b-roll de pantallas de bolsa, Ken Burns «in», overlay 0.6.

**[3-14 s]** «Eligió 189 de 369 operaciones. Un filtro solo sirve si lo que deja pasar es mejor que lo que descarta, y eso se mide contra el grupo completo, el de control.»
> Boceto: embudo y dos grupos; karaoke con «GRUPO DE CONTROL» en rojo; Ken Burns «out».

**[14-26 s]** «El modelo aprendió con 854 operaciones y se probó en 369 que nunca vio, de marzo de 2023 a diciembre de 2024. Sus elegidas perdieron −5.0%, con un factor de beneficio de 0.56.»
> Boceto: barra 854 / 5 / 369 y KPI −5.0% y 0.56; whoosh y flash blanco.

**[26-38 s]** «Y antes de costos, las elegidas tenían un Sharpe de −1.41. El PSR: 0.0002. Son pocas operaciones, pero la dirección es clara.»
> Boceto: candado cerrado sobre −1.41; medidor PSR; cartel ámbar «189 operaciones»; Ken Burns «in».

**[38-45 s]** «Compara el filtro con su grupo de origen. Experimento ocho completo en el enlace. El video completo está en el canal. No es asesoría financiera.»
> Boceto: vuelven los 369 puntos con los 189 verdes y «−4.14» (loop con el gancho); texto «Experimento #8 completo en el enlace» y logo.

---

## Descripción de YouTube (video largo)
https://atlas-lab-one.vercel.app/e/8?utm_source=youtube&utm_medium=video&utm_campaign=exp008-t2
Ficha del experimento #8 (Meta-etiquetado de reversión de sesión): estado murió · Sharpe de las elegidas −4.14 (sin filtro −4.00) · −1.41 antes de costos · −5.0% con 189 operaciones · PSR 0.0002.
Cómo saber si un filtro de machine learning sirve: comparar lo que deja pasar con el grupo completo del que sale (EUR/USD, velas de 1 minuto, prueba de mar-2023 a dic-2024).
Contenido educativo. No es asesoría financiera ni recomendación de inversión.

## Descripción del Short
https://atlas-lab-one.vercel.app/e/8?utm_source=youtube&utm_medium=short&utm_campaign=exp008-t2
Experimento #8 · murió · elegidas −4.14 frente a −4.00 sin filtro. No es asesoría financiera.

Capítulos: 0:00 Gancho · 0:13 Qué experimento es · 0:26 La pregunta · 0:45 El espejismo de las elegidas · 1:12 El grupo de control · 1:47 El resultado · 2:19 Cómo sería un filtro que sirve · 2:43 Ni antes de costos · 3:06 Una advertencia de tamaño · 3:26 Con tu capital · 3:44 Ficha del experimento #8 · 4:08 Cierre

Etiquetas: meta-etiquetado, filtro de machine learning, grupo de control, XGBoost, reversión de sesión, EUR/USD, backtest, fuera de muestra, Sharpe ratio, ATLAS Lab, trading con datos, inteligencia artificial trading

## Rúbrica (autoevaluación, 1–5)
| Criterio | Short | Largo |
|---|---|---|
| hook_0_3s | 4 | 4 |
| ritmo | 4 | 4 |
| promesa_cumplida | 5 | 5 |
| potencial_loop | 5 | 4 |
| claridad_no_traders | 4 | 4 |
| honestidad_atlas | 5 | 5 |
| audio | 4 | 3 |
| cta | 4 | 4 |
| **Promedio** | **4.38** | **4.13** |

Notas: son 189 operaciones y una ventana corta; el guion lo dice dos veces (bloque de advertencia y Short). El guion no predice qué pasaría con más datos. El Short cumple hook ≥ 4 y honestidad 5.

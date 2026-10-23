# Experimento #8 — Meta-etiquetado de reversión de sesión

Estado del guion: **BORRADOR — pendiente de aprobación**
Estado del experimento: **murió**
Serie: D (Machine learning en trading)
Datos usados: `experiments.json` (v=8: description, params, metrics, kpis, analysis, verdict, notes; v=7 para las cifras de partida), `exp_details.json` (algo, filters), `series/20260607_205914_meta-labeling-reversion-sesion-v8.json` (curva 1 = estrategia, curva 2 = comprar y esperar) y la tabla «Con tu capital» de docs/youtube (fila 8). Las cifras con 10,000 dólares son las de la tabla de 100,000 divididas entre 10.

## Títulos (3 opciones)
1. Sharpe +1.58 en 2019 y −1.36 en 2024: la misma estrategia, dos mundos
2. Usé machine learning para rescatar una estrategia: 189 operaciones, Sharpe −4.14
3. Meta-etiquetado sobre la reversión de sesión: ni antes de costos hay ventaja (−1.41)

## Miniatura
Fondo negro de la marca. Una montaña rusa de barras anuales: «+1.58» (verde), «−0.95» y «−1.36» (rojo), con el texto «RUIDO» en grande (1 palabra). Pequeño, abajo, «Sharpe antes de costos». Logo ATLAS esquina inferior derecha.

---

## VIDEO LARGO (16:9, ≈ 5:42 min — 4–6 min: experimento de una sola idea y pocas cifras)
Ritmo visual: algo cambia en pantalla cada 2-3 s; b-roll real detrás, Ken Burns alterno, subtítulos karaoke, whoosh + flash en cada corte, golpe de bass solo en el momento clave.

**[0:00 — Gancho]** (pantalla: tres barras anuales)
Antes de costos, esta estrategia tuvo un Sharpe de +1.58 en 2019, de −0.95 en 2020 y de −1.36 en 2024. La misma regla, el mismo mercado, y resultados que cambian de signo. Una estrategia con ventaja real no se comporta así. Eso es lo que muestra este experimento: el +0.20 del promedio era ruido. Y para llegar a esa conclusión usé inteligencia artificial para intentar rescatar la estrategia, a ver si encontraba algo que a simple vista no se veía.
> Boceto: tres barras que aparecen una a una (+1.58 verde, −0.95 y −1.36 rojas) con sonido de montaña rusa; texto «Sharpe antes de costos». Ken Burns «in» sobre b-roll de gráfico oscuro.

**[0:33 — Presentación]** (pantalla: rótulo «Experimento #8 · Meta-etiquetado de reversión de sesión»)
Este es el experimento #8 de ATLAS Lab: Meta-etiquetado de reversión de sesión. Todos los resultados están en la página del experimento.
> Boceto: rótulo grande «EXPERIMENTO #8 · Meta-etiquetado de reversión de sesión» sobre velas de fondo con overlay oscuro; abajo, la URL pequeña «atlas-lab-one.vercel.app/e/8». Ken Burns «out».

**[0:43 — De dónde venimos]** (pantalla: resumen del #7)
Resumen rápido: el experimento 7 apostaba contra la ruptura del rango de la madrugada en el euro-dólar, con velas de un minuto, una operación al día. Antes de costos tenía un Sharpe de +0.20; con costos, −1.99 y −22.5%. La pregunta de este video: ¿puede el machine learning quedarse solo con las mejores operaciones y rescatar esa pequeña ventaja? Si funcionara, tendríamos una forma de usar la señal sin pagar el peaje de las operaciones malas.
> Boceto: barras «+0.20 bruto / −1.99 neto» del #7 y una interrogación que parpadea sobre un logo de IA.

**[1:15 — La idea]** (pantalla: embudo con siete variables)
Es meta-etiquetado otra vez, la técnica del experimento 3: la reversión da la señal y un modelo, XGBoost, decide si la tomo. El modelo aprende, con siete datos conocidos justo al entrar, qué reversiones serán rentables después de costos. Los siete son: el tamaño relativo del rango, ese tamaño medido en desviaciones, la hora de entrada, el día de la semana, el lado de la operación, el retorno del día anterior y la posición del cierre asiático. Todos existen en el momento de decidir; ninguno mira al futuro. El modelo tiene 300 árboles de profundidad 3, y solo opero si su probabilidad supera 0.5.
> Boceto: siete iconos entran a un embudo etiquetado «XGBoost: 300 árboles, profundidad 3»; a la salida, cada señal pasa o se bloquea según p > 0.5.

**[1:57 — Cómo lo probé]** (pantalla: línea de tiempo de operaciones)
Para tener el retorno del día anterior, excluyo los lunes: quedan 1,228 de las 1,553 operaciones del experimento 7. Después divido la historia en orden cronológico, por operaciones: 854 para entrenar, un embargo de 5 operaciones para que no se filtre información, y 369 para probar, el 30% final, de marzo de 2023 a diciembre de 2024. Eso es fuera de muestra: operaciones que el modelo nunca vio. De esas 369, el modelo elige 189. La comparación justa es contra las 369 completas, sin filtro: si el filtro sirve, las 189 elegidas deberían rendir mejor que el conjunto entero.
> Boceto: barra de 1,228 operaciones dividida en «854 entrena», «5 embargo» y «369 prueba»; dentro de las 369, 189 se iluminan en verde. Texto: «Se excluyen los lunes».

**[2:38 — Resultados]** (pantalla: tarjetas KPI)
Las 189 operaciones elegidas tuvieron un Sharpe de −4.14. Sin filtro, el Sharpe habría sido −4.00: el filtro no ayudó, empeoró un poco. Retorno de −5.0%, peor caída de −5.2%, 48.1% de aciertos y un factor de beneficio de 0.56. El PSR, la probabilidad de que el Sharpe real sea positivo, es 0.0002, es decir, casi imposible. Son pocas operaciones y un periodo corto, así que no pretendo más precisión de la que hay; pero la dirección es clara y no ayuda.
> Boceto: `kpis` en cascada; barras «Elegidas −4.14 / Sin filtro −4.00»; la curva real (series, curva 1) de 189 puntos cayendo contra la curva 2.

**[3:12 — Ni antes de costos]** (pantalla: Sharpe bruto de las elegidas)
Lo más importante: el Sharpe de las operaciones elegidas antes de costos es −1.41. Es decir, aunque no cobraras ninguna comisión, las operaciones que el modelo considera mejores pierden. No hay ventaja ni antes de pagar nada. Si las mejores operaciones según el modelo pierden incluso sin costos, no hay nada que rescatar: el filtro no puede separar lo bueno de lo malo si todo es igual de malo.
> Boceto: barra grande «Bruto de las elegidas: −1.41» en rojo, con un candado cerrado y el texto «Nada que rescatar».

**[3:40 — Año por año]** (pantalla: Sharpe bruto por año del #7)
Y por qué no había nada que rescatar: mira el Sharpe bruto del experimento 7 por año. +1.58 en 2019, −0.95 en 2020, −1.36 en 2024. Mientras tanto, el Sharpe neto fue negativo los seis años. El +0.20 era ruido que, en promedio, salió positivo; no una ventaja. Es como lanzar una moneda unas pocas veces: puede salir una racha de caras, pero eso no significa que la moneda esté cargada. Un promedio positivo hecho de años buenos y malos no es lo mismo que una ventaja estable.
> Boceto: las tres barras del gancho vuelven con una línea horizontal «promedio +0.20» que se desvanece, y una fila de seis puntos rojos «Neto: negativo los 6 años».

**[4:17 — Los filtros]** (pantalla: checklist)
Lógica: pasa, porque las variables se conocían al entrar y la división es cronológica. Todo lo demás falla: Sharpe neto de −4.14, Sharpe bruto de −1.41, PSR de 0.0002. La prueba de azar no se aplicó en este experimento.
> Boceto: checklist de `filters`: lógica ✓ verde; tramo reservado ✗, costos ✗, PSR ✗; prueba de azar «no aplicado» en gris.

**[4:33 — Con tu capital]** (pantalla: tarjeta «Con tu capital»)
Con 10,000 dólares serían unos menos 494 para la estrategia, frente a menos 376 de comprar y esperar. Con 100,000, la tabla de ATLAS da menos 4,935 contra menos 3,756 en esas fechas. Ten presente que son solo 189 operaciones, de marzo de 2023 a diciembre de 2024.
> Boceto: tarjeta de capital con ambas cifras en rojo; nota «189 operaciones · mar-2023 → dic-2024»; selector $10,000 / $100,000.

**[4:53 — Ficha del experimento #8]** (pantalla: tarjeta con la URL)
Ficha del experimento 8. Estado: murió. Cifra clave: menos 5.0% en las 189 operaciones elegidas, con un Sharpe de menos 4.14 (sin filtro, menos 4.00) y de menos 1.41 antes de costos. Filtro que decidió: los costos; ni antes de ellos las operaciones elegidas ganaban. Lección: un filtro de machine learning no crea una ventaja donde no la hay. Revísalo completo en atlas-lab-one.vercel.app/e/8.
> Boceto: tarjeta oscura con el estado del experimento #8 arriba, las cifras clave en el centro y «atlas-lab-one.vercel.app/e/8» en grande al pie; las líneas de la ficha entran una a una; logo ATLAS.

**[5:17 — Conclusión y cierre]**
Veredicto: no sirvió. Un filtro de machine learning no puede crear una ventaja donde no la hay: Sharpe de −4.14, y −1.41 antes de costos. Con este experimento termina mi primer bloque de pruebas con velas de un minuto. Todos los datos en atlas-lab-one.vercel.app/e/8. Contenido educativo, no es asesoría financiera. El trading no se promete: se prueba.
> Boceto: sello ✕ rojo sobre el embudo; frase de marca, logo y URL.

---

## SHORT (9:16, ≈ 48 s)
Fórmula visual: b-roll vertical + overlay oscuro 0.6, Ken Burns alternando in/out, subtítulos karaoke en MAYÚSCULAS con las cifras en rojo, whoosh + flash en cada corte, golpe de bass + sacudida solo en el 0-3 s; ticker arriba.

**[0-3 s]** «Antes de costos: Sharpe +1.58 en 2019, −1.36 en 2024.»
> Boceto: texto gigante «+1.58 → −1.36» y «antes de costos»; dos barras (verde y roja) que se enfrentan; b-roll de gráfico de velas, Ken Burns «in».
**[3-12 s]** «Es la misma estrategia de reversión, que en promedio tenía un Sharpe de +0.20. Intenté rescatarla con inteligencia artificial: un modelo que elige solo las mejores operaciones.»
> Boceto: embudo con siete iconos; Ken Burns «out»; karaoke con «RESCATARLA» en rojo.
**[12-24 s]** «Usó siete datos conocidos al entrar y se probó en 369 operaciones que nunca vio. De ellas eligió 189. Su Sharpe fue −4.14, peor que sin filtro, que daba −4.00.»
> Boceto: barra de 369 operaciones con 189 iluminadas; barras −4.14 contra −4.00; whoosh y flash blanco.
**[24-36 s]** «Y aun antes de costos, las elegidas tenían un Sharpe de −1.41: no había nada que rescatar. El retorno fue −5.0%, con 48.1% de aciertos y un factor de beneficio de 0.56.»
> Boceto: candado cerrado sobre −1.41; curva real cayendo; Ken Burns «in».
**[36-48 s]** «Una estrategia que cambia de signo cada año no tiene ventaja: tiene ruido. Y el resultado neto fue negativo los seis años. El video completo está en el canal. Experimento #8 completo en el enlace. No es asesoría financiera.»
> Boceto: vuelven las barras +1.58 / −1.36 y la palabra «RUIDO» las cubre (loop con el gancho); textos «Video completo en el canal» y «Experimento #8 completo en el enlace»; logo.

## Descripción de YouTube (video largo)
https://atlas-lab-one.vercel.app/e/8?utm_source=youtube&utm_medium=video&utm_campaign=exp008-t1
Ficha del experimento #8 (Meta-etiquetado de reversión de sesión): estado murió · −5.0% en 189 operaciones · Sharpe −4.14 (sin filtro −4.00; −1.41 antes de costos).
Meta-etiquetado sobre la reversión de sesión del EUR/USD (velas de 1 minuto): un XGBoost con 7 variables conocidas al entrar elige 189 de las 369 operaciones de prueba (mar-2023 a dic-2024). Sharpe de las elegidas −4.14 (sin filtro −4.00) y −1.41 antes de costos. Además, el Sharpe bruto del experimento 7 cambia de signo cada año.
Contenido educativo. No es asesoría financiera ni recomendación de inversión.

## Descripción del Short
https://atlas-lab-one.vercel.app/e/8?utm_source=youtube&utm_medium=short&utm_campaign=exp008-t1
Experimento #8 · murió · Sharpe −4.14 y −1.41 antes de costos, con −5.0%. No es asesoría financiera.

Capítulos: 0:00 Gancho · 0:33 Presentación · 0:43 De dónde venimos · 1:15 La idea · 1:57 Cómo lo probé · 2:38 Resultados · 3:12 Ni antes de costos · 3:40 Año por año · 4:17 Los filtros · 4:33 Con tu capital · 4:53 Ficha del experimento #8 · 5:17 Conclusión y cierre

Etiquetas: meta-labeling, XGBoost, reversión de sesión, machine learning trading, EUR/USD, fuera de muestra, ruido, Sharpe ratio, backtest, ATLAS Lab, trading con datos, inteligencia artificial trading

## Rúbrica (autoevaluación, 1–5)
| Criterio | Short | Largo |
|---|---|---|
| hook_0_3s | 4 | 4 |
| ritmo | 4 | 4 |
| promesa_cumplida | 5 | 5 |
| potencial_loop | 5 | 4 |
| claridad_no_traders | 3 | 3 |
| honestidad_atlas | 5 | 5 |
| audio | 4 | 3 |
| cta | 4 | 4 |
| **Promedio** | **4.25** | **4.00** |

Notas: la claridad es el punto flojo (Sharpe bruto por año + meta-etiquetado); se apoya en los gráficos de barras. Recomendado verlo después del #7. El Short cumple hook ≥ 4 y honestidad 5.

## Otros temas de este experimento
Cada tema = video largo + Short, con su propia ficha del experimento. Todos en estado BORRADOR — pendiente de aprobación.
- Tema 1: este archivo — Meta-etiquetado de reversión de sesión
- Tema 2: [exp-008-t2-comparacion-justa-elegidas-contra-todas.md](exp-008-t2-comparacion-justa-elegidas-contra-todas.md) — la comparación justa, elegidas contra todas (−4.14 contra −4.00)
- Tema 3: [exp-008-t3-las-siete-variables.md](exp-008-t3-las-siete-variables.md) — las siete variables de una IA (y la regla de no mirar al futuro)

# Experimento #2 — Tema 2: la confianza de un modelo no es lo mismo que su acierto

Tema 2 de 4 del experimento #2
Qué aporta frente a los otros temas: el tema 1 cuenta el resultado del filtro de convicción (−33.9%); este explica el concepto de fondo, la confianza de un modelo frente a su acierto real, con una cifra propia: al operar solo con convicción mayor que 0.5, el porcentaje de operaciones ganadoras bajó de 46.4% a 45.8%. El tema 3 trata del Sharpe y el tema 4 compara las tres IAs.
Estado del guion: **BORRADOR — pendiente de aprobación**
Estado del experimento: **murió** · Serie D (Machine learning en trading) · 1 largo + 1 Short
Datos usados: `experiments.json` (v=2 y v=1: metrics con Win Rate, ganadora y perdedora media, Profit Factor, operaciones, Sharpe; kpis con p de Monte Carlo; params del umbral 0.5; analysis y notes), `exp_details.json` (filters con el PSR) y tabla «Con tu capital» de docs/youtube (fila 2). Las cifras con 10,000 dólares son el saldo final del propio experimento.
Producción: b-roll real con overlay oscuro 0.6, Ken Burns alterno, subtítulos karaoke en MAYÚSCULAS con cifras en rojo, golpe de bajo solo en 1–2 momentos. Rojo `#e11d2a`, verde `#22c55e`, fondo `#09090b`.

## Títulos (3 opciones)
1. Le pedí a una IA que operara solo si estaba segura: ganó menos operaciones (45.8%)
2. Confianza no es acierto: el filtro de convicción empeoró la tasa de aciertos de una IA
3. ¿Sirve que un modelo diga «estoy seguro»? XGBoost con umbral 0.5 en el euro

## Miniatura
Fondo negro `#09090b`. Un medidor de confianza con la aguja a fondo en «SEGURA» y, debajo, un porcentaje que baja: «46.4% → 45.8%» (la flecha en rojo). Texto grande: «SEGURA ≠ ACIERTA» (3 palabras). Logo ATLAS esquina inferior derecha.

---

## VIDEO LARGO (16:9, ≈ 4:09 min)

**[0:00 — Gancho]** (pantalla: «46.4% → 45.8%»)
Le pedí a una inteligencia artificial que solo operara cuando estuviera segura. Resultado: ganó menos operaciones que sin esa condición, 45.8% contra 46.4%.
> Boceto: medidor de confianza con la aguja subiendo y, a la vez, un contador de aciertos que baja de 46.4% a 45.8%; sacudida al cruzarse. Ken Burns «in».

**[0:11 — Qué experimento es]** (pantalla: rótulo con el número y el nombre)
Este es el experimento #2 de ATLAS Lab: ML XGBoost más filtro de convicción. Todos los resultados están en la página del experimento. Hoy hablo de una idea que sirve mucho fuera del trading.
> Boceto: rótulo «EXPERIMENTO #2 · ML XGBoost + filtro de convicción» sobre las curvas; URL pequeña abajo. kb=out.

**[0:25 — Qué es la confianza de un modelo]** (pantalla: tres barras de probabilidad)
Un modelo de machine learning no solo da una respuesta: da una probabilidad. En este caso, para cada hora del euro-dólar, el modelo calcula la probabilidad de tres opciones: comprar, vender en corto o esperar. Cuando una opción pasa de 0.5, decimos que el modelo está convencido. Esa probabilidad no mide lo bien que el modelo conoce el mercado: mide qué tanto se parece esa hora a los patrones que vio al entrenar. Si esos patrones eran ruido, el modelo puede estar convencido de algo que no existe.
> Boceto: tres barras (sube, baja, quieto) para una vela con una línea en 0.5; una de las barras la cruza y se enciende «CONVENCIDO». kb=in.

**[1:00 — El experimento]** (pantalla: línea de tiempo y regla)
La regla fue sencilla y se fijó antes de ver nada: operar solo si la probabilidad de la opción ganadora supera 0.5. Un único umbral, sin probar otros. El mismo modelo del experimento 1, el mismo euro-dólar en velas de una hora, entrenado con el 70% inicial de 2019 a 2024 y probado en lo que nunca vio, de marzo de 2023 a diciembre de 2024, con costos reales.
> Boceto: la barra de tiempo con el tramo de prueba resaltado; tarjeta «Umbral 0.5 · fijado de antemano»; cuenta de $10,000. kb=out.

**[1:31 — Más seguro, no más acertado]** (pantalla: tabla #1 contra #2)
El resultado, lado a lado. Operaciones ganadoras: 45.8% contra 46.4%. Ganadora media: 0.10% contra 0.12%. Perdedora media: 0.13% contra 0.14%. Factor de beneficio, lo ganado entre lo perdido: 0.68 contra 0.72. Las operaciones en las que el modelo estaba más convencido no fueron mejores. Fueron un poco peores.
| | #1 Sin filtro | #2 Convicción > 0.5 |
|---|---|---|
| Operaciones | 2,040 | 1,822 |
| Ganadoras | 46.4% | 45.8% |
| Ganadora media | +0.12% | +0.10% |
| Perdedora media | −0.14% | −0.13% |
| Factor de beneficio | 0.72 | 0.68 |
| Retorno | −36.2% | −33.9% |
> Boceto: tabla animada; las celdas en las que #2 empeora se marcan en rojo; la última fila (retorno) en verde tenue con la nota «menos operaciones». kb=in.

**[1:56 — Por qué el filtro dejó casi todo igual]** (pantalla: embudo)
Operó 1,822 veces en lugar de 2,040: el filtro dejó fuera menos operaciones de las que haría falta para cambiar la película. Y las que dejó pasar no tenían mejor calidad. El retorno mejora un poco, de menos 36.2% a menos 33.9%, pero solo porque hubo menos operaciones y menos comisiones: 2,097 dólares contra 2,327. No porque el modelo supiera algo nuevo.
> Boceto: embudo con 2,040 flechas que entran y 1,822 que salen; monedas de comisión que bajan de $2,327 a $2,097. kb=out.

**[2:25 — Qué haría falta para que la confianza valiera]** (pantalla: ilustración)
Para que la confianza sirva, tendría que cumplirse esto: cuando el modelo dice que está muy seguro, debe acertar claramente más que cuando duda. Eso se llama calibración. Aquí no ocurre. Y las pruebas lo confirman: el p de azar fue 0.86 y el PSR, 0.14, frente a las exigencias de menos de 0.05 y más de 0.95. Dicho de otro modo: el modelo no sabía cuándo sabía.
> Boceto: ilustración con dos medidores: uno «seguro → acierta mucho» (marcado «ilustración») y otro «el modelo real» sin relación; p = 0.86 con una moneda.

**[2:55 — Fuera del trading]** (pantalla: tres ejemplos)
La lección se aplica a cualquier modelo, o persona: el tono de seguridad no es evidencia. Un pronóstico que suena muy seguro puede estar tan vacío como uno que duda; lo que importa es si, al medirlo con datos que no vio, acierta más cuando dice estar seguro. Esa es la prueba que este modelo no pasó.
> Boceto: tres iconos (modelo, analista, predicción de bolsa) con el mismo sello «¿acierta más cuando está seguro?». kb=in.

**[3:17 — Con tu capital]** (pantalla: tarjeta «Con tu capital»)
Con 10,000 dólares, la cuenta terminó en 6,615 y comprar y esperar habría terminado en 9,775. Con 100,000, la tabla de ATLAS da menos 33,846 contra menos 2,237.
> Boceto: tarjeta de capital con «Estrategia −$33,846» y «Comprar y esperar −$2,237»; selector $10,000 / $100,000.

**[3:33 — Ficha del experimento #2]** (pantalla: tarjeta con la URL)
Ficha del experimento 2. Estado: murió. Cifra clave: menos 33.9% fuera de muestra contra menos 2.2% de comprar y esperar, con 45.8% de operaciones ganadoras. Filtros que decidieron: costos, prueba de azar con p de 0.86 y PSR de 0.14. Lección: un modelo sin señal no mejora por exigirle más seguridad. Revísalo completo en atlas-lab-one.vercel.app/e/2.
> Boceto: tarjeta oscura con «#2 · MURIÓ», cifras clave y «atlas-lab-one.vercel.app/e/2» en grande; logo.

**[4:00 — Cierre]**
Todos los datos en atlas-lab-one.vercel.app, experimento 2. Contenido educativo, no es asesoría financiera. El trading no se promete: se prueba.
> Boceto: pantalla oscura con la frase de marca.

---

## SHORT (9:16, ≈ 46 s)

**[0-3 s]** «Solo operaba si estaba segura. Ganó menos: 45.8% contra 46.4%.»
> Boceto: medidor con la aguja a fondo y contador de aciertos que baja de 46.4% a 45.8% con sacudida; b-roll de pantallas de bolsa, Ken Burns «in», overlay 0.6.

**[3-14 s]** «El modelo da una probabilidad por cada opción: comprar, vender o esperar. Solo operaba si la mayor superaba 0.5, un umbral fijado antes de ver el resultado.»
> Boceto: tres barras y una línea en 0.5; karaoke con «ANTES DE VER» en rojo; Ken Burns «out».

**[14-27 s]** «Operó 1,822 veces en vez de 2,040. Pero la ganadora media bajó de 0.12% a 0.10%, y el factor de beneficio, de 0.72 a 0.68. Más seguro, pero no mejor.»
> Boceto: tabla #1 contra #2 con las celdas peores en rojo; whoosh y flash blanco.

**[27-38 s]** «El resultado: −33.9%. La prueba de azar dio un p de 0.86 y el PSR, 0.14. Comprar y esperar perdió −2.2%.»
> Boceto: barras −33.9% contra −2.2%; moneda con «p = 0.86»; Ken Burns «in».

**[38-46 s]** «La confianza de un modelo no es su acierto. Experimento dos completo en el enlace. El video completo está en el canal. No es asesoría financiera.»
> Boceto: vuelve el medidor a fondo con el 45.8% (loop con el gancho); texto «Experimento #2 completo en el enlace» y logo.

---

## Descripción de YouTube (video largo)
https://atlas-lab-one.vercel.app/e/2?utm_source=youtube&utm_medium=video&utm_campaign=exp002-t2
Ficha del experimento #2 (ML XGBoost + filtro de convicción): estado murió · −33.9% fuera de muestra (comprar y esperar: −2.2%) · 45.8% de operaciones ganadoras · p de azar 0.86 · PSR 0.14.
Explico por qué la confianza de un modelo no es lo mismo que su acierto, con el filtro de probabilidad 0.5 aplicado a un XGBoost en el EUR/USD (mar-2023 a dic-2024).
Contenido educativo. No es asesoría financiera ni recomendación de inversión.

## Descripción del Short
https://atlas-lab-one.vercel.app/e/2?utm_source=youtube&utm_medium=short&utm_campaign=exp002-t2
Experimento #2 · murió · 45.8% de aciertos con el filtro frente a 46.4% sin él. No es asesoría financiera.

Capítulos: 0:00 Gancho · 0:11 Qué experimento es · 0:25 Qué es la confianza de un modelo · 1:00 El experimento · 1:31 Más seguro, no más acertado · 1:56 Por qué el filtro dejó casi todo igual · 2:25 Qué haría falta para que la confianza valiera · 2:55 Fuera del trading · 3:17 Con tu capital · 3:33 Ficha del experimento #2 · 4:00 Cierre

Etiquetas: calibración de modelos, confianza de un modelo, machine learning trading, XGBoost, filtro de convicción, umbral de probabilidad, EUR/USD, backtest, fuera de muestra, inteligencia artificial trading, ATLAS Lab, trading con datos

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

Notas: «ganadoras» es el porcentaje de operaciones que cerraron en ganancia, no la exactitud de clasificación del modelo; conviene mostrarlo así en pantalla. La comparación es #1 contra #2 en la misma ventana. El Short cumple hook ≥ 4 y honestidad 5.

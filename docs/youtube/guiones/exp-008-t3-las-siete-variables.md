# Experimento #8 — Tema 3: las siete variables de una IA (y la regla de no mirar al futuro)

Tema 3 de 3 del experimento #8
Qué aporta frente a los otros temas: es el tema del concepto. Explica qué datos se le dan a un modelo de machine learning (siete variables conocidas en el momento de entrar) y cómo se construyen sin mirar al futuro (por eso se excluyen los lunes: 1,228 de 1,553 operaciones). El tema 1 se centra en el Sharpe bruto año por año y el tema 2 en la comparación entre elegidas y todas.
Estado del guion: **BORRADOR — pendiente de aprobación**
Estado del experimento: **murió** · Serie D (Machine learning en trading) · 1 largo + 1 Short
Datos usados: `experiments.json` (v=8: params con la lista de variables, 300 árboles y profundidad 3, 854/5/369/189, umbral 0.5; metrics; kpis; analysis; notes), `exp_details.json` (algo y filters del v=8) y tabla «Con tu capital» de docs/youtube (fila 8). Las definiciones de cada variable son una lectura de las etiquetas del experimento y el guion las rotula así. Las cifras con 10,000 dólares son las de la tabla de 100,000 divididas entre 10.
Producción: b-roll real con overlay oscuro 0.6, Ken Burns alterno, subtítulos karaoke en MAYÚSCULAS con cifras en rojo, golpe de bajo solo en 1–2 momentos. Rojo `#e11d2a`, verde `#22c55e`, fondo `#09090b`.

## Títulos (3 opciones)
1. Siete datos para una IA, ninguno mira al futuro: tampoco rescataron la estrategia (−4.14)
2. Qué le das a un modelo de machine learning para decidir una operación: las 7 variables
3. Cómo evitar que tu IA vea el futuro: la regla que excluyó los lunes

## Miniatura
Fondo negro `#09090b`. Siete iconos en fila (reloj, calendario, flecha, regla, caja…) entrando a un embudo con «XGBoost»; sobre el embudo un candado y la cifra «−4.14» en rojo. Texto grande: «7 DATOS» (blanco) y «0 FUTURO» (rojo). Logo ATLAS abajo a la derecha.

---

## VIDEO LARGO (16:9, ≈ 4:02 min)

**[0:00 — Gancho]** (pantalla: siete iconos y un embudo)
Siete datos, todos conocidos justo antes de entrar a la operación. Ninguno mira al futuro. Con ellos, una IA intentó rescatar una estrategia, y su Sharpe fue menos 4.14.
> Boceto: siete iconos caen uno a uno en un embudo; al final «−4.14» en rojo con sacudida. Ken Burns «in».

**[0:13 — Qué experimento es]** (pantalla: rótulo con el número y el nombre)
Este es el experimento #8 de ATLAS Lab: Meta-etiquetado de reversión de sesión. Todos los resultados están en la página del experimento. Hoy hablo de lo que se le da de comer a la IA.
> Boceto: rótulo «EXPERIMENTO #8 · Meta-etiquetado de reversión de sesión» y URL pequeña. kb=out.

**[0:27 — Qué es una variable]** (pantalla: una operación y sus datos)
Un modelo de machine learning aprende de variables, que son datos que describen cada operación en el momento de decidir. Cuanto más relevantes, mejor puede decidir; pero hay una regla de oro: solo pueden ser datos que existían antes de entrar. Si le das al modelo algo que solo se sabe después, parecerá un genio en el pasado y fallará en la vida real.
> Boceto: una operación con tarjetas de datos a su alrededor; un reloj marca «hasta aquí, solo pasado»; etiqueta «regla de oro». kb=in.

**[0:52 — Las siete]** (pantalla: siete tarjetas)
Estas son las siete, tal como las usó el modelo. Una: el tamaño relativo del rango de la madrugada. Dos: ese tamaño medido en desviaciones, es decir, qué tan raro es frente a lo habitual. Tres: la hora de entrada. Cuatro: el día de la semana. Cinco: el lado de la operación, compra o venta en corto. Seis: el retorno del día anterior. Siete: dónde cerró la sesión asiática dentro de su rango. Las definiciones son mi lectura de las etiquetas del experimento.
> Boceto: siete tarjetas que entran una por una con icono y nombre técnico en pequeño (rel_range, range_z, entry_hour, dow, side, prev_day_ret, aclose_pos); etiqueta gris «lectura de las etiquetas». kb=out.

**[1:25 — Por qué se excluyeron los lunes]** (pantalla: calendario)
Una variable es el retorno del día anterior. En los lunes, ese retorno del día anterior no se puede calcular, así que ese dato no existe. En lugar de inventarlo, se excluyeron los lunes. Quedaron 1,228 de las 1,553 operaciones del experimento 7. Es una decisión incómoda, porque se pierden datos, pero evita el error de rellenar con información que no estaba disponible.
> Boceto: calendario con los lunes tachados; barra de 1,553 que se recorta a 1,228. kb=in.

**[1:51 — El modelo y su prueba]** (pantalla: línea de tiempo y árboles)
El modelo es un XGBoost: 300 árboles de decisión de profundidad 3, es decir, árboles pequeños que votan entre todos. Aprende con las primeras 854 operaciones, hay un embargo de 5 operaciones, y se prueba en las 369 finales, de marzo de 2023 a diciembre de 2024. Solo toma las operaciones con probabilidad mayor que 0.5: elige 189.
> Boceto: bosque de árboles pequeños; barra 854 / 5 / 369 con 189 verdes; tarjeta «300 árboles · profundidad 3 · umbral 0.5». kb=out.

**[2:18 — Lo que consiguió]** (pantalla: tarjetas KPI)
Con eso, las 189 elegidas dieron un Sharpe de menos 4.14, contra menos 4.00 de las 369 sin filtrar. Retorno de menos 5.0%, 48.1% de aciertos, factor de beneficio de 0.56. Antes de costos, el Sharpe de las elegidas fue menos 1.41. Con variables bien construidas y sin mirar al futuro, la IA no encontró nada que rescatar.
> Boceto: KPI en cascada; barra bruta −1.41 con candado. kb=in.

**[2:47 — Qué aprender]** (pantalla: dos ideas)
Dos ideas. Una: construir bien las variables es necesario, pero no suficiente; las variables correctas no crean una señal que no existe. Dos: la señal base, la reversión del experimento 7, ya tenía un Sharpe de más 0.20 antes de costos que cambiaba de signo según el año, y un filtro no puede inventar estabilidad. Un modelo solo puede encontrar lo que está en los datos.
> Boceto: dos tarjetas: «variables limpias ≠ señal» y «+0.20 que cambia de signo»; frase «Un modelo solo encuentra lo que está en los datos». kb=out.

**[3:14 — Con tu capital]** (pantalla: tarjeta «Con tu capital»)
Con 10,000 dólares serían unos menos 494 para la estrategia, frente a unos menos 376 de comprar y esperar. Con 100,000, la tabla de ATLAS da menos 4,935 contra menos 3,756. Son solo 189 operaciones.
> Boceto: tarjeta de capital con ambas cifras en rojo y nota «189 operaciones · mar-2023 → dic-2024»; selector $10,000 / $100,000.

**[3:32 — Ficha del experimento #8]** (pantalla: tarjeta con la URL)
Ficha del experimento 8. Estado: murió. Cifra clave: Sharpe de las elegidas menos 4.14 y menos 1.41 antes de costos, con siete variables conocidas al entrar. Filtros que decidieron: costos, tramo reservado y PSR de 0.0002. Lección: variables limpias no crean una señal. Revísalo completo en atlas-lab-one.vercel.app/e/8.
> Boceto: tarjeta oscura con «#8 · MURIÓ», cifras clave y «atlas-lab-one.vercel.app/e/8» en grande; logo.

**[3:54 — Cierre]**
Todos los datos en atlas-lab-one.vercel.app, experimento 8. Contenido educativo, no es asesoría financiera. El trading no se promete: se prueba.
> Boceto: pantalla oscura con la frase de marca.

---

## SHORT (9:16, ≈ 45 s)

**[0-3 s]** «Siete datos para una IA. Ninguno mira al futuro. Sharpe: −4.14.»
> Boceto: siete iconos cayendo a un embudo y «−4.14» en rojo con sacudida; b-roll de pantallas de datos, Ken Burns «in», overlay 0.6.

**[3-14 s]** «Rango de la madrugada, su tamaño en desviaciones, hora, día de la semana, lado, retorno de ayer y dónde cerró la sesión asiática. Todo se conoce antes de entrar.»
> Boceto: siete tarjetas veloces; karaoke con «ANTES DE ENTRAR» en rojo; Ken Burns «out».

**[14-26 s]** «Por eso se excluyeron los lunes: no hay retorno del día anterior. Quedaron 1,228 de 1,553 operaciones. El modelo aprendió con 854 y eligió 189 de las 369 de prueba.»
> Boceto: calendario con lunes tachados; barras 1,553 → 1,228; whoosh y flash blanco.

**[26-38 s]** «Resultado: −5.0%, 48.1% de aciertos, factor de beneficio de 0.56. Y −1.41 de Sharpe incluso antes de costos.»
> Boceto: KPI y candado sobre −1.41; Ken Burns «in».

**[38-45 s]** «Variables limpias no crean una señal. Experimento ocho completo en el enlace. El video completo está en el canal. No es asesoría financiera.»
> Boceto: vuelven los siete iconos sobre el embudo con «−4.14» (loop con el gancho); texto «Experimento #8 completo en el enlace» y logo.

---

## Descripción de YouTube (video largo)
https://atlas-lab-one.vercel.app/e/8?utm_source=youtube&utm_medium=video&utm_campaign=exp008-t3
Ficha del experimento #8 (Meta-etiquetado de reversión de sesión): estado murió · Sharpe de las elegidas −4.14 · −1.41 antes de costos · −5.0% con 189 operaciones · XGBoost de 300 árboles y profundidad 3.
Las siete variables que se le dieron al modelo (todas conocidas al entrar), por qué se excluyeron los lunes (1,228 de 1,553 operaciones) y por qué unas variables bien construidas no crean una señal.
Contenido educativo. No es asesoría financiera ni recomendación de inversión.

## Descripción del Short
https://atlas-lab-one.vercel.app/e/8?utm_source=youtube&utm_medium=short&utm_campaign=exp008-t3
Experimento #8 · murió · siete variables conocidas al entrar y Sharpe −4.14. No es asesoría financiera.

Capítulos: 0:00 Gancho · 0:13 Qué experimento es · 0:27 Qué es una variable · 0:52 Las siete · 1:25 Por qué se excluyeron los lunes · 1:51 El modelo y su prueba · 2:18 Lo que consiguió · 2:47 Qué aprender · 3:14 Con tu capital · 3:32 Ficha del experimento #8 · 3:54 Cierre

Etiquetas: variables de machine learning, feature engineering, mirar al futuro, XGBoost, meta-etiquetado, reversión de sesión, EUR/USD, backtest, fuera de muestra, ATLAS Lab, trading con datos, inteligencia artificial trading

## Rúbrica (autoevaluación, 1–5)
| Criterio | Short | Largo |
|---|---|---|
| hook_0_3s | 4 | 4 |
| ritmo | 4 | 4 |
| promesa_cumplida | 5 | 5 |
| potencial_loop | 5 | 4 |
| claridad_no_traders | 3 | 4 |
| honestidad_atlas | 5 | 5 |
| audio | 4 | 3 |
| cta | 4 | 4 |
| **Promedio** | **4.25** | **4.13** |

Notas: el experimento no publica la importancia de cada variable; el guion no inventa ninguna. Las definiciones de las siete variables son una lectura de sus etiquetas y se rotulan así. La claridad del Short baja por la lista de siete nombres; el largo la sostiene con las tarjetas. El Short cumple hook ≥ 4 y honestidad 5.

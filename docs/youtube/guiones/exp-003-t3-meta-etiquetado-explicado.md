# Experimento #3 — Tema 3: el meta-etiquetado explicado (dos modelos, dos trabajos)

Tema 3 de 4 del experimento #3
Qué aporta frente a los otros temas: es el tema del concepto. Explica paso a paso cómo funciona el meta-etiquetado de López de Prado (cómo se crea la etiqueta, cómo se entrena, cuándo debería ayudar) y lo contrasta con dos intentos reales: el #3 (−19.0%) y el #8 (Sharpe −4.14). El tema 1 cuenta el resultado, el 2 hace la comparación contra el cruce solo y el 4 compara las tres IAs.
Estado del guion: **BORRADOR — pendiente de aprobación**
Estado del experimento: **murió** · Serie D (Machine learning en trading) · 1 largo + 1 Short
Datos usados: `experiments.json` (v=3: params, metrics, kpis, analysis, notes; v=8: kpis para el segundo intento), `exp_details.json` (algo y filters del v=3) y tabla «Con tu capital» de docs/youtube (fila 3). La descripción del método (etiqueta 1/0, 70% de entrenamiento, embargo de 24, umbral 0.5) sale del campo algo del v=3. Las cifras con 10,000 dólares son el saldo final del propio experimento.
Producción: b-roll real con overlay oscuro 0.6, Ken Burns alterno, subtítulos karaoke en MAYÚSCULAS con cifras en rojo, golpe de bajo solo en 1–2 momentos. Rojo `#e11d2a`, verde `#22c55e`, fondo `#09090b`.

## Títulos (3 opciones)
1. Meta-etiquetado explicado: una IA que no adivina, solo dice «sí» o «no» (−19.0%)
2. Dos modelos, dos trabajos: la técnica de López de Prado, probada con costos reales
3. ¿Qué es el meta-etiquetado y cuándo debería ayudar? Dos pruebas, dos fracasos (#3 y #8)

## Miniatura
Fondo negro `#09090b`. Dos cajas conectadas: «DIRECCIÓN» (blanco) → «¿APOSTAR?» (rojo), con una compuerta en medio. Debajo, «p = 0.48» en pequeño. Logo ATLAS arriba a la derecha.

---

## VIDEO LARGO (16:9, ≈ 4:17 min)

**[0:00 — Gancho]** (pantalla: dos cajas y una compuerta)
Este modelo no adivina nada. Solo responde sí o no a una pregunta: ¿tomo esta señal? Aun así, 1,173 operaciones después, la cuenta estaba menos 19.0%.
> Boceto: dos cajas «Señal» → compuerta «¿Tomar?» con flechas que pasan o se bloquean; contador 1,173 y «−19.0%» en rojo. Ken Burns «in».

**[0:12 — Qué experimento es]** (pantalla: rótulo con el número y el nombre)
Este es el experimento #3 de ATLAS Lab: meta-etiquetado con ML, SMA más XGBoost. Todos los resultados están en la página del experimento. Hoy es la clase de la técnica.
> Boceto: rótulo «EXPERIMENTO #3 · Meta-etiquetado SMA + XGBoost» y URL pequeña. kb=out.

**[0:25 — Dos trabajos distintos]** (pantalla: dos empleados)
La mayoría de los modelos intentan hacer dos cosas a la vez: decidir hacia dónde va el precio y decidir cuánta confianza tener. El meta-etiquetado, una técnica de López de Prado de 2018, las separa. Un primer modelo, la señal primaria, decide la dirección: aquí, el cruce de medias de 20 y 50 velas. Un segundo modelo, el secundario, solo decide si vale la pena tomar esa señal. El primero propone, el segundo filtra.
> Boceto: dos «empleados»: uno que señala una flecha arriba o abajo y otro con sello «TOMAR / SALTAR». kb=in.

**[0:55 — Cómo se crea la etiqueta]** (pantalla: señales del pasado con 1 y 0)
Para entrenar al segundo modelo necesita ejemplos con respuesta. Se toma cada señal del pasado del cruce de medias y se mira qué barrera toca primero el precio: la de ganancia a 2 ATR, la de pérdida a 2 ATR o el límite de 24 horas. Si la dirección de la señal coincide con la barrera que se tocó, la señal recibe una etiqueta 1: habría acertado. Si no, una etiqueta 0. El modelo aprende a reconocer qué señales suelen acabar en 1.
> Boceto: fila de seis señales pasadas (ilustración); a cada una se le dibuja la barrera que toca y se le pone «1» verde o «0» rojo. kb=out.

**[1:30 — Cómo se entrena y se prueba]** (pantalla: línea de tiempo)
Todo en orden cronológico. El modelo aprende con el primer 70% de los datos, de 2019 en adelante. Entre el entrenamiento y la prueba hay un hueco de 24 velas, el embargo, para que no se filtre información. Y se prueba en lo que nunca vio, de marzo de 2023 a diciembre de 2024, con costos reales. En la prueba, cada señal se toma solo si el modelo da más de 0.5 de probabilidad.
> Boceto: barra de tiempo con «entrena 70%», hueco gris «embargo 24 velas» y tramo de prueba azul; compuerta con «p > 0.5». kb=in.

**[2:02 — Cuándo debería ayudar]** (pantalla: dos escenarios)
Esta técnica solo puede elegir entre las señales que el modelo primario le da: no inventa señales nuevas. Si la señal base tiene algo de ventaja, escondido en unas situaciones sí y en otras no, el filtro podría aprender a separarlas y mejorar la calidad. Si la señal base es ruido, el filtro tiene poco que aprender. La técnica es un pulidor, no una fuente de ventaja.
> Boceto: dos escenarios (ilustración): señal con zonas buenas y malas, filtro que las separa; y señal sin estructura, filtro que no separa. Etiqueta «ilustración». kb=out.

**[2:28 — Lo que pasó aquí]** (pantalla: tarjetas KPI)
Resultado: 1,173 operaciones, 41.8% de ganadoras, factor de beneficio de 0.71, costos de 1,474 dólares y menos 19.0% en total, con una peor caída de menos 20.1%. Las pruebas: p de azar de 0.48 y PSR de 0.51. El Sharpe, ya con costos, es menos 3.28. El filtro no se distingue del azar.
> Boceto: KPI en cascada; moneda con «p = 0.48» y medidor del PSR en 0.51 frente a la meta 0.95. kb=in.

**[2:56 — Segundo intento: el experimento 8]** (pantalla: embudo de siete variables)
El experimento 8 repitió la técnica sobre otra señal base, la reversión del rango asiático, con siete variables conocidas al entrar. El modelo eligió 189 de 369 operaciones. Su Sharpe fue menos 4.14, peor que el menos 4.00 de las 369 sin filtrar, y menos 1.41 incluso antes de costos. Dos señales base distintas, el mismo resultado: filtrar una señal sin ventaja no crea ventaja.
> Boceto: dos tarjetas: «#3: −3.28 · p 0.48» y «#8: −4.14 contra −4.00 sin filtro»; sello ✕ doble. kb=out.

**[3:26 — Con tu capital]** (pantalla: tarjeta «Con tu capital»)
Con 10,000 dólares, la cuenta del experimento 3 terminó en 8,096 y comprar y esperar habría terminado en 9,775. Con 100,000, la tabla de ATLAS da menos 19,037 contra menos 2,237.
> Boceto: tarjeta de capital con «Estrategia −$19,037» y «Comprar y esperar −$2,237»; selector $10,000 / $100,000.

**[3:43 — Ficha del experimento #3]** (pantalla: tarjeta con la URL)
Ficha del experimento 3. Estado: murió. Cifra clave: menos 19.0% fuera de muestra contra menos 2.2% de comprar y esperar, con un Sharpe de menos 3.28. Filtros que decidieron: costos, prueba de azar con p de 0.48 y PSR de 0.51. Lección: el meta-etiquetado filtra señales, no las crea. Revísalo completo en atlas-lab-one.vercel.app/e/3.
> Boceto: tarjeta oscura con «#3 · MURIÓ», cifras clave y «atlas-lab-one.vercel.app/e/3» en grande; logo.

**[4:09 — Cierre]**
Todos los datos en atlas-lab-one.vercel.app, experimento 3. Contenido educativo, no es asesoría financiera. El trading no se promete: se prueba.
> Boceto: pantalla oscura con la frase de marca.

---

## SHORT (9:16, ≈ 45 s)

**[0-3 s]** «Esta IA solo dice sí o no a cada señal: −19.0%.»
> Boceto: compuerta «¿tomar?» que deja pasar o bloquea flechas; «−19.0%» en rojo con sacudida; b-roll de gráficos de bolsa, Ken Burns «in», overlay 0.6.

**[3-14 s]** «Se llama meta-etiquetado. Un cruce de medias decide la dirección y un modelo secundario decide si vale la pena tomarla. Dos modelos, dos trabajos.»
> Boceto: dos cajas conectadas; karaoke con «DOS TRABAJOS» en rojo; Ken Burns «out».

**[14-26 s]** «Para entrenarlo, cada señal del pasado recibe un 1 si habría acertado y un 0 si no. Luego se prueba solo con datos que nunca vio, con costos reales.»
> Boceto: señales con etiquetas 1 y 0; línea de tiempo con el tramo de prueba; whoosh y flash blanco.

**[26-38 s]** «Hizo 1,173 operaciones. El p de azar fue 0.48 y el PSR, 0.51. El Sharpe, −3.28. Repetido sobre otra señal, el experimento 8 dio −4.14.»
> Boceto: moneda con «p = 0.48»; tarjetas −3.28 y −4.14; Ken Burns «in».

**[38-45 s]** «El meta-etiquetado filtra señales, no las crea. Experimento tres completo en el enlace. El video completo está en el canal. No es asesoría financiera.»
> Boceto: vuelve la compuerta con la señal bloqueada (loop con el gancho); texto «Experimento #3 completo en el enlace» y logo.

---

## Descripción de YouTube (video largo)
https://atlas-lab-one.vercel.app/e/3?utm_source=youtube&utm_medium=video&utm_campaign=exp003-t3
Ficha del experimento #3 (meta-etiquetado SMA + XGBoost): estado murió · −19.0% fuera de muestra (comprar y esperar: −2.2%) · Sharpe −3.28 · p de azar 0.48 · PSR 0.51 · 1,173 operaciones.
Qué es el meta-etiquetado (López de Prado, 2018): un modelo da la dirección y otro decide si tomar la señal. Cómo se crea la etiqueta, cómo se entrena y se prueba, cuándo debería ayudar y qué pasó en dos pruebas reales (#3 y #8).
Contenido educativo. No es asesoría financiera ni recomendación de inversión.

## Descripción del Short
https://atlas-lab-one.vercel.app/e/3?utm_source=youtube&utm_medium=short&utm_campaign=exp003-t3
Experimento #3 · murió · −19.0% con una IA que solo dice sí o no a cada señal. No es asesoría financiera.

Capítulos: 0:00 Gancho · 0:12 Qué experimento es · 0:25 Dos trabajos distintos · 0:55 Cómo se crea la etiqueta · 1:30 Cómo se entrena y se prueba · 2:02 Cuándo debería ayudar · 2:28 Lo que pasó aquí · 2:56 Segundo intento: el experimento 8 · 3:26 Con tu capital · 3:43 Ficha del experimento #3 · 4:09 Cierre

Etiquetas: meta-etiquetado, meta-labeling, López de Prado, XGBoost, machine learning trading, cruce de medias, triple barrera, EUR/USD, backtest, fuera de muestra, ATLAS Lab, trading con datos

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

Notas: el bloque «Cuándo debería ayudar» es una explicación general del método, no una cifra del experimento, y se rotula como ilustración. El diagrama de las dos cajas es imprescindible para la claridad. El Short cumple hook ≥ 4 y honestidad 5.

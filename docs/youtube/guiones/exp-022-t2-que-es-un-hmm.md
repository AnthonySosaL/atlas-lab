# Experimento #22 — Detección de régimen con HMM (IA) · Tema 2: Qué es un modelo oculto de Markov (HMM): una IA que aprende sola si el mercado está en calma o en pánico

Tema 2 de 4 del experimento #22. Tema 1: `exp-022-hmm-ia-regimen.md`.
Qué aporta frente a los otros temas: Explica el HMM sin fórmulas (estados ocultos, datos observados, probabilidad de pánico, reentrenamiento) para quien nunca lo ha visto. El tema 1 cuenta el resultado del experimento, el tema 3 el resultado idéntico a no usar filtro y el tema 4 el segundo periodo.
Estado del guion: **BORRADOR — pendiente de aprobación**
Estado del experimento: **no concluyente** (el sitio lo muestra como neutral)
Serie: D (Machine learning en trading: lo que pasó)
Datos usados: `experiments.json` (v=22: description, params, metrics, kpis, analysis, verdict, notes, capital, period), `exp_details.json` (algo, code, filters), `series/20260610_134200_hmm-regime-detection-ia-v22.json` (curva de la estrategia hasta el corte, curva hipotética «Sin reglas de prop firm» y «Sin estrategia») y la tabla «Con tu capital» de docs/youtube (fila 22). Las cifras con 10,000 dólares son las de la tabla de 100,000 divididas entre 10.

## Títulos (3 opciones)
1. Una IA que aprende sola cuándo hay pánico: el modelo oculto de Markov explicado sin fórmulas
2. HMM de 2 estados, calma y pánico, con 2 datos diarios: retorno de la cesta y cambio del VIX
3. Cómo decide una IA si salir del mercado: probabilidad de pánico mayor a 0.5

## Miniatura
Fondo negro de la marca. Dos burbujas conectadas por flechas: «CALMA» (verde) y «PÁNICO» (rojo de marca), con un chip de IA arriba. Texto grande: «2 ESTADOS» (blanco). Logo ATLAS esquina inferior derecha.

---

## VIDEO LARGO (16:9, ≈ 4:24 min — 4–6 min: tema de una sola idea y pocas cifras)
Ritmo visual: algo cambia en pantalla cada 2-3 s; b-roll real detrás, Ken Burns alterno, subtítulos karaoke, whoosh + flash en cada corte, golpe de bass solo en el momento clave.

**[0:00 — Gancho]** (pantalla: dos burbujas, calma y pánico)
¿Y si una inteligencia artificial pudiera aprender sola cuándo el mercado está en pánico? Probé un modelo oculto de Markov, con dos estados y dos datos diarios. Te explico cómo piensa, sin fórmulas.
> Boceto: dos burbujas «calma» y «pánico» con flechas de transición; un chip de IA que parpadea; la curva de precios se pinta de verde o rojo según el estado; b-roll de pantallas de bolsa, Ken Burns «in».

**[0:14 — El experimento]** (pantalla: rótulo con el número y el nombre del experimento)
Este es el experimento #22 de ATLAS Lab: Detección de régimen con HMM (IA). Todos los resultados están en la página del experimento.
> Boceto: rótulo animado «EXPERIMENTO #22» con el nombre «Detección de régimen con HMM (IA)» debajo y el logo ATLAS; whoosh de entrada y fondo de velas con opacidad 0.12.

**[0:23 — La idea de un estado oculto]** (pantalla: humores del mercado)
Imagina que el mercado tiene dos humores que no vemos directamente: calma y pánico. Lo que sí vemos son sus efectos: cuánto se mueven los precios y el VIX. Un modelo oculto de Markov parte de esa idea: hay estados escondidos, y solo observamos las señales que dejan.
> Boceto: una cara tapada por una cortina con dos humores; a la derecha, las señales visibles (zigzag de precios y VIX); texto «estado oculto, señales visibles».

**[0:43 — Los dos datos]** (pantalla: retorno de la cesta y cambio del VIX)
Aquí el modelo recibe dos datos cada día: el retorno de la cesta de mercados y el cambio del VIX, el índice del miedo. Con esos dos datos aprende cómo se ven los días de calma y los de pánico, sin que nadie le escriba umbrales a mano.
> Boceto: dos líneas que entran en una caja negra con chip de IA: «retorno de la cesta» y «cambio del VIX»; a la salida, un medidor de probabilidad.

**[1:03 — Los dos estados]** (pantalla: varianza baja y varianza alta)
Son dos estados, la versión más sencilla. Se distinguen por la varianza: el estado malo es el de mayor varianza, el de los movimientos más violentos; el bueno, el de los movimientos más tranquilos. Cada día el modelo calcula la probabilidad de estar en el estado malo.
> Boceto: dos burbujas: una con ondas pequeñas («calma») y otra con ondas grandes («pánico»); un indicador de probabilidad que oscila entre las dos.

**[1:22 — La regla de decisión]** (pantalla: medidor con la línea en 0.5)
La regla del bot es simple: si esa probabilidad supera 0.5, se sale del mercado; si no, opera la cesta de mercados con apalancamiento ×3. Y se usa la probabilidad de ayer, no la de hoy, para no mirar el futuro.
> Boceto: medidor de probabilidad con la línea en 0.5; por encima, la cesta se apaga («fuera»); por debajo, se enciende («×3»); reloj con «hasta ayer».

**[1:39 — Aprender sin mirar el futuro]** (pantalla: reentrenamiento cada 126 días)
El modelo se vuelve a entrenar cada 126 días con todo el pasado disponible, nunca con datos futuros. Es un entrenamiento expansivo: cada vez que se reentrena, tiene más historia. Y antes del primer entrenamiento hacen falta 500 días de calentamiento.
> Boceto: línea de tiempo con un tramo gris «500 días de calentamiento» y puntos de reentrenamiento cada 126 días; checklist de filters: «sin mirar el futuro ✓», «señal de ayer ✓».

**[1:56 — Frente al filtro manual]** (pantalla: quién decide)
Frente al filtro manual la diferencia es quién decide. En el manual, los umbrales los fijé yo: un nivel del VIX, un salto del VIX y un crédito débil. En el HMM no hay umbral escrito a mano: el modelo aprende de los datos. Es el primer experimento de la serie en el que la regla la aprende una máquina.
> Boceto: dos columnas: «filtro manual: nivel del VIX, salto, crédito (reglas escritas)» y «HMM: aprende de los datos»; flecha entre ambas.

**[2:20 — Qué puede salir mal]** (pantalla: tres riesgos de un modelo que aprende)
Una máquina que aprende también puede aprender mal. Con pocos datos, el modelo es inestable. Si el futuro se parece poco al pasado, falla. Y es más difícil de interpretar que una regla simple. Por eso se compara siempre con una referencia clara.
> Boceto: tres tarjetas ámbar: «pocos datos», «futuro distinto», «difícil de interpretar»; una referencia clara al fondo.

**[2:38 — El resultado, en una frase]** (pantalla: tarjetas KPI y curva cortada)
El resultado de 2014 a 2024: −10.4%, un Sharpe de −2.31 y la cuenta cerrada a los 81 días, el 6 de enero de 2015. Pero eso no evalúa la inteligencia del modelo, y en otro tema de este experimento te cuento por qué.
> Boceto: tarjetas con tick (−10.4% · −2.31 · 81 días); la curva real dibujándose hasta el 6-ene-2015 y cortándose.

**[2:56 — Una IA no es una promesa]** (pantalla: texto)
Una IA no es una promesa. Es una herramienta que hay que probar con las mismas reglas que cualquier otra idea: sin mirar el futuro, con costos y con datos que no haya visto.
> Boceto: chip de IA con tres candados: «sin mirar el futuro», «con costos», «datos nuevos».

**[3:10 — Con tu capital]** (pantalla: tarjeta «Con tu capital» con aviso)
Con 10,000 dólares, la curva termina en menos 1,026; con 100,000, en menos 10,258. Comprando y esperando en esas fechas serían menos 578 y menos 5,776. La curva se corta en enero de 2015 porque la cuenta se cierra; la línea «Sin reglas de prop firm» es hipotética.
> Boceto: tarjeta de capital con selector $10,000 / $100,000; curva roja cortada en enero de 2015; curva punteada gris «hipotética».

**[3:30 — Conclusión]** (pantalla: texto grande)
Veredicto: no concluyente. Un HMM es una forma de que la máquina aprenda el régimen del mercado en lugar de escribir umbrales. Este experimento no llegó a medirlo, pero sí deja claro cómo piensa y qué le exige una prueba justa.
> Boceto: sello gris «NO CONCLUYENTE» sobre las dos burbujas; frase final en blanco.

**[3:47 — Ficha del experimento #22]** (pantalla: tarjeta en pantalla con la ficha y la URL)
Ficha del experimento 22. Estado: no concluyente (neutral en el sitio). Cifra clave: 2014-2024, retorno −10.4% y Sharpe −2.31 con la cuenta cerrada a los 81 días, idéntico a operar a ×3 sin filtro. Filtro que decidió: el calentamiento de 500 días; el modelo no llegó a decidir antes del corte. En 2007-2013: −11.9%, Sharpe −0.54. Lección: un modelo con 500 días de calentamiento no se puede juzgar en un periodo que termina antes. Revísalo completo en atlas-lab-one.vercel.app/e/22. Contenido educativo, no es asesoría financiera. El trading no se promete: se prueba.
> Boceto: tarjeta con las líneas de la ficha apareciendo una a una (estado, cifra clave, filtro que decidió, lección) y, al pie, la URL «atlas-lab-one.vercel.app/e/22» resaltada; sello del estado del experimento; frase de marca, logo y URL.

---

## SHORT (9:16, ≈ 47 s)
Fórmula visual: b-roll vertical + overlay oscuro 0.6, Ken Burns alternando in/out, subtítulos karaoke en MAYÚSCULAS con las cifras en rojo, whoosh + flash en cada corte, golpe de bass + sacudida solo en el 0-3 s; ticker arriba.

**[0-3 s]** «Una IA con 2 estados decide cuándo salir del mercado.»
> Boceto: texto gigante «2 ESTADOS» con dos burbujas, calma y pánico, que se conectan; chip de IA; sacudida; b-roll de bolsa, Ken Burns «in».
**[3-11 s]** «Es un modelo oculto de Markov: aprende que el mercado alterna entre calma y pánico, sin umbrales escritos a mano.»
> Boceto: la curva de precios se pinta de verde o rojo según el estado; Ken Burns «out»; karaoke con «SIN UMBRALES» en rojo.
**[11-16 s]** «Recibe dos datos diarios: el retorno de la cesta y el cambio del VIX.»
> Boceto: dos líneas que entran en la caja de IA; whoosh y flash blanco.
**[16-24 s]** «Es la primera vez que la regla de salida la aprende una máquina y no la escribo yo.»
> Boceto: dos columnas: «reglas escritas a mano» y «aprende de los datos»; flecha entre ambas.
**[24-31 s]** «Si la probabilidad de pánico pasa de 0.5, el bot se sale. Si no, opera la cesta a ×3.»
> Boceto: medidor con la línea en 0.5 y la cesta que se apaga o se enciende; Ken Burns «in».
**[31-37 s]** «Se reentrena cada 126 días, sin mirar el futuro, y necesita 500 días de calentamiento.»
> Boceto: línea de tiempo con 500 días en gris y puntos cada 126 días; golpe de bass en «500».
**[37-44 s]** «El video completo está en el canal. Experimento #22 completo en el enlace. No es asesoría financiera.»
> Boceto: texto «Video completo en el canal» y «Experimento #22 en el enlace» con el logo ATLAS.
**[44-47 s]** «Dos estados, dos datos y 500 días de calentamiento.»
> Boceto: vuelven las dos burbujas con el contador 500 (loop con el gancho); corte directo al inicio.

## Descripción (YouTube) — video largo
https://atlas-lab-one.vercel.app/e/22?utm_source=youtube&utm_medium=video&utm_campaign=exp022-t2
Ficha del experimento #22 (Detección de régimen con HMM (IA)): estado no concluyente. 2014-2024: −10.4%, Sharpe −2.31, cuenta cerrada a los 81 días, resultado idéntico a ×3 sin filtro; 2007-2013: −11.9% y Sharpe −0.54.
El modelo oculto de Markov (HMM) explicado sin fórmulas con el experimento de ATLAS: dos estados (calma y pánico), dos datos diarios (retorno de la cesta y cambio del VIX), salida del mercado si la probabilidad de pánico supera 0.5, reentrenamiento cada 126 días con datos hasta ayer y 500 días de calentamiento, a ×3.
Resultado en 2014-2024: −10.4%, Sharpe −2.31 y cuenta cerrada a los 81 días; veredicto no concluyente.
Contenido educativo. No es asesoría financiera ni recomendación de inversión.

## Descripción (YouTube) — Short
https://atlas-lab-one.vercel.app/e/22?utm_source=youtube&utm_medium=short&utm_campaign=exp022-t2
Ficha del experimento #22 (Detección de régimen con HMM (IA)): estado no concluyente. 2014-2024: −10.4%, Sharpe −2.31, cuenta cerrada a los 81 días, resultado idéntico a ×3 sin filtro; 2007-2013: −11.9% y Sharpe −0.54.
Una IA con dos estados, calma y pánico, aprende sola cuándo salir del mercado: así funciona un HMM.
Video completo en el canal. Experimento #22 completo en el enlace. Contenido educativo, no es asesoría financiera.

Capítulos: 0:00 Gancho · 0:14 El experimento · 0:23 La idea de un estado oculto · 0:43 Los dos datos · 1:03 Los dos estados · 1:22 La regla de decisión · 1:39 Aprender sin mirar el futuro · 1:56 Frente al filtro manual · 2:20 Qué puede salir mal · 2:38 El resultado, en una frase · 2:56 Una IA no es una promesa · 3:10 Con tu capital · 3:30 Conclusión · 3:47 Ficha del experimento #22

Etiquetas: HMM, modelo oculto de Markov, inteligencia artificial, régimen de mercado, machine learning, VIX, bot de trading, volatilidad, detección de crisis, ATLAS Lab, trading con datos, trading algorítmico

## Rúbrica (autoevaluación, 1–5)
| Criterio | Short | Largo |
|---|---|---|
| hook_0_3s | 4 | 4 |
| ritmo | 4 | 4 |
| promesa_cumplida | 5 | 5 |
| potencial_loop | 4 | 4 |
| claridad_no_traders | 4 | 5 |
| honestidad_atlas | 5 | 5 |
| audio | 4 | 3 |
| cta | 4 | 4 |
| **Promedio** | **4.25** | **4.25** |

Notas: el gancho plantea una pregunta que los no traders se hacen («¿puede una IA saber cuándo hay pánico?») y la promete responder sin fórmulas; la honestidad es 5 porque el cierre dice «no concluyente» y que el experimento no llegó a medir al modelo. El Short cumple hook ≥ 4.

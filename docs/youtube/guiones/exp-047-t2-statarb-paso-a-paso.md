# Experimento #47 — Arbitraje estadístico (residuo PCA) · Tema 2: la técnica de los fondos, paso a paso con el código real

Estado del guion: **BORRADOR — pendiente de aprobación**
Tema 2 de 3 del experimento #47. Qué aporta frente a los otros temas: el tema 1 cuenta la idea y el resultado con una analogía; este desarma la técnica en pasos con los números y el código de la ficha (250, 60, 1.5, ±3) para que se entienda qué hace cada línea.
Estado del experimento: **murió** (No sirvió) · Serie: sin asignar en `plan-series.md`; propuesta: B ampliada, tras #46 y antes de #48 · Relacionado: #46, #48, #50
Datos usados: `experiments.json` (v=47: verdict, analysis, notes, metrics, kpis, params_view, period, capital.note), `exp_details.json` (v47: algo, code.snippet, filters), `series/20260610_142756_stat-arb-pca-residual-v47.json` (curva 0) y la tabla «Con tu capital» (`docs/youtube/*-capital.md`) (fila #47).

## Títulos (3 opciones)
1. Arbitraje estadístico paso a paso: el código real (−10.1%)
2. Así se construye lo que usan los fondos: 15 activos, 60 días
3. Residuos, z-score y 1.5: la técnica de los fondos explicada

## Miniatura (1280×720)
Fondo `#09090b`. Un fragmento de código real en verde `#22c55e` (la línea `|z| > 1.5`) con un círculo rojo alrededor. Texto enorme blanco: "6 PASOS". Texto pequeño rojo: "SHARPE −0.58". Logo ATLAS esquina inferior derecha. (No repite el título 1.)

---

## VIDEO LARGO (16:9, ≈ 5.5 min)

**[0:00 — Gancho]** (pantalla: seis casillas numeradas que se encienden; al final, el contador −10.1%)
Seis pasos. Quince activos. Un umbral de 1.5. Así se construye el arbitraje estadístico, una de las técnicas más asociadas a los fondos cuantitativos. Y así de bien le fue en mi prueba: la cuenta simulada se cortó a los 876 días con una pérdida de 10.1%.
> BOCETO: seis casillas "1…6" que se encienden con tick; detrás, la curva real de la serie (curva 0) en gris; al final el −10.1% en rojo con sacudida de pantalla. Subtítulo karaoke con "SEIS PASOS" en rojo.

**[0:20 — De qué experimento hablamos]** (pantalla: rótulo con el número y el nombre)
Este es el experimento #47 de ATLAS Lab: Arbitraje estadístico (residuo PCA). Todos los resultados están en la página del experimento.
> BOCETO: rótulo "EXPERIMENTO #47 · Arbitraje estadístico (residuo PCA)" con whoosh.

**[0:30 — La idea en una frase]** (pantalla: 15 líneas y una que se desvía)
La técnica, al estilo de Avellaneda y Lee, de 2010: casi todos los activos comparten un movimiento común. Si se lo restas a cada uno, lo que queda es su parte propia, el residuo. La apuesta es que, cuando ese residuo se estira demasiado, regresa. Vamos a verlo en seis pasos, con el código de la ficha.
> BOCETO: ilustración rotulada (no es dato real): 15 líneas grises con una verde que se separa del grupo y vuelve; título "6 pasos".

**[1:00 — Pasos 1 y 2: el factor común]** (pantalla: dos líneas del código)
Paso uno: calculo los retornos diarios de cada activo y los divido por su volatilidad de los últimos 250 días, para que un activo muy nervioso no pese más que uno tranquilo. Paso dos: promedio esos retornos estandarizados de los 15 activos. Ese promedio es el factor común, el movimiento del grupo. Una advertencia de honestidad: el método estadístico fino para sacar ese factor es el PCA, pero aquí es una aproximación, la media estandarizada de la cesta. Por eso el nombre del experimento dice «residuo PCA» pero la ficha lo marca como aproximado.
> BOCETO: `code.snippet` con `rets / stdr` y `.mean(axis=1)` resaltados; 15 líneas que se funden en una línea gruesa ("factor común ≈ PC1"). Aviso ámbar: "PCA aproximado".

**[1:40 — Pasos 3 y 4: el residuo]** (pantalla: dos líneas del código)
Paso tres: para cada activo estimo su beta móvil de 250 días respecto al factor, es decir, cuánto suele moverse con el grupo, y calculo el residuo: lo que se movió el activo menos lo que explicaba el grupo. Paso cuatro: sumo ese residuo durante 60 días y calculo su z-score, que mide cuántas desviaciones se alejó de su promedio de los últimos 250 días.
> BOCETO: `code.snippet` con `beta`, `resid` y `rolling(60).sum()` resaltados; animación: línea del activo menos línea del grupo = línea del residuo, que oscila alrededor de cero.

**[2:10 — Pasos 5 y 6: la decisión]** (pantalla: umbral |z| > 1.5 y pesos)
Paso cinco: solo actúo con los extremos, cuando el z-score pasa de 1.5 en valor absoluto. Compro el activo hundido, vendo en corto el estirado, con pesos acotados a ±3 y normalizados para que la exposición bruta sea 1. Paso seis: el motor usa las posiciones de ayer para el retorno de hoy, con apalancamiento 2, corte automático al −3% y deslizamiento de 0.2%. Cesta de 15 activos de 2014 a 2024 y de 8 de 2007 a 2013.
> BOCETO: barra de z-scores con la banda ±1.5 sombreada; flechas "compro hundido / vendo estirado"; luego `params_view` (x2 · beta 250 d · residuo 60 d · |z| > 1.5 · kill-switch −3% · deslizamiento 0.2%).

**[2:45 — El resultado]** (pantalla: tarjetas KPI)
Retorno total, −10.1%. Sharpe, la ganancia por unidad de riesgo, −0.58 en 2014–2024 y −0.69 en 2007–2013, años fuera de muestra, es decir, que la estrategia nunca vio. Drawdown máximo, la mayor caída desde un pico, −12.2%. La cuenta se cortó a los 876 días, el 23 de julio de 2017, por las reglas de una prop firm: caída máxima de 10% o pérdida de 5% en un día. ¿Sobrevive en todos los periodos? No. Y comparar los dos periodos es solo un indicio: son dos cestas distintas, 8 y 15 activos.
> BOCETO: `kpis` en rojo con tick; sello ✕ en el 23-jul-2017; aviso ámbar "8 activos vs 15".

**[3:30 — Qué paso es el débil]** (pantalla: los seis pasos con una lupa)
¿Dónde falla? La ficha lo resume: sin datos tick ni acceso directo, los residuos no pagan los costos. Los datos tick son cada cambio de precio; aquí uso cierres diarios. Además, el único costo modelado es el deslizamiento de 0.2% en el corte automático, sin spread por rotación, así que más costos solo lo empeorarían. No puedo decir qué paso concreto es el culpable: el experimento mide el conjunto, no cada paso por separado.
> BOCETO: los seis pasos en fila; una lupa recorre cada uno y se detiene sin señalar ninguno, con el rótulo "el experimento mide el conjunto". Lateral: "datos diarios · deslizamiento 0.2% · 15 activos".

**[4:05 — Con tu capital]** (pantalla: tarjeta "Con tu capital")
Con $100,000, la cuenta simulada termina en −$10,076. La referencia, comprar y esperar la cesta en esas mismas fechas, queda en −$99. Es lo que pasó en la simulación, no una promesa.
> BOCETO: tarjeta de capital con una cifra roja (−$10,076) y una fila gris casi en cero (−$99).

**[4:20 — Cómo reproducirlo con cabeza]** (pantalla: tres preguntas)
Si vas a probar esta técnica por tu cuenta, tres preguntas. ¿Tu factor común es una aproximación o un PCA de verdad? ¿Tu prueba incluye años que la estrategia nunca vio? ¿Cuántos activos tienes, 15 o miles? La técnica es pública. Lo que cambia el resultado es lo que la rodea.
> BOCETO: tres tarjetas con iconos; la primera señala el aviso "PCA aproximado", la segunda la barra de 2007–2013 y la tercera el contador "15".

**[4:40 — Ficha del experimento #47]** (pantalla: tarjeta con la URL)
Ficha del experimento 47. Estado: murió, no sirvió. Cifra clave: retorno de −10.1%, Sharpe de −0.58 en 2014–2024 y de −0.69 en 2007–2013, con la cuenta cortada a los 876 días. Filtro que decidió: sobrevivir en todos los periodos, que no se cumple; la señal del día anterior sí se cumplió. Lección: la matemática del arbitraje estadístico es pública, y con 15 activos y datos diarios no alcanzó. Revísalo completo en atlas-lab-one.vercel.app/e/47.
> BOCETO: tarjeta "FICHA · EXPERIMENTO #47" con Estado · Cifra clave · Filtro que decidió · Lección, y la URL `atlas-lab-one.vercel.app/e/47` en grande.

**[5:15 — Cierre]**
Contenido educativo, no es asesoría financiera. El trading no se promete: se prueba.
> BOCETO: fundido a la frase de marca en blanco sobre negro; logo ATLAS.

---

## SHORT (9:16, ≈ 44 s) — "Seis pasos"
Título del Short: Arbitraje estadístico en 6 pasos: −10.1% #Shorts

**[0-3 s]** "Seis pasos para el arbitraje estadístico. Resultado: menos 10.1%."
> BOCETO: B-roll vertical de oficina financiera con overlay 0.6; seis casillas que se encienden y "−10.1%" en rojo; golpe de bajo y sacudida.

**[3-15 s]** "Uno: retornos de 15 activos. Dos: restas el movimiento del grupo. Tres: te quedas con el residuo de 60 días. Cuatro: su z-score. Cinco: actúas si pasa de 1.5. Seis: usas la señal de ayer."
> BOCETO: cada paso entra con whoosh y tick, 2 s cada uno, con su línea de código real al fondo a baja opacidad. Ken Burns hacia dentro.

**[15-28 s]** "Sharpe de −0.58 entre 2014 y 2024 y de −0.69 en 2007–2013, años que no vio. La cuenta se cortó a los 876 días."
> BOCETO: dos barras rojas con tick; etiqueta "nunca lo vio" en la segunda; fecha "23-jul-2017" con sello ✕.

**[28-37 s]** "El factor común es una aproximación, los datos son diarios y solo tengo 15 activos. La matemática es pública; lo que la rodea, no."
> BOCETO: tres chips ámbar (PCA aproximado · datos diarios · 15 activos) que entran con tick.

**[37-44 s]** "Seis pasos, menos 10.1%. Experimento 47 completo en el enlace; el video completo está en el canal. No es asesoría financiera."
> BOCETO: vuelven las seis casillas y "−10.1%" (loop con el primer cuadro); abajo "Experimento #47 completo en el enlace"; texto pequeño "El trading no se promete: se prueba."

---

## Descripción (YouTube) — video largo
https://atlas-lab-one.vercel.app/e/47?utm_source=youtube&utm_medium=video&utm_campaign=exp047-t2
Ficha del experimento #47 (Arbitraje estadístico, residuo PCA): murió (No sirvió) · retorno −10.1% · Sharpe −0.58 (2014–2024) y −0.69 (2007–2013) · cuenta cortada a los 876 días.
La técnica de los fondos desarmada en seis pasos con el código de la ficha: factor común (aproximado), beta de 250 días, residuo de 60 días, z-score y umbral de 1.5.
Contenido educativo. No es asesoría financiera ni recomendación de inversión.

## Descripción (YouTube) — Short
https://atlas-lab-one.vercel.app/e/47?utm_source=youtube&utm_medium=short&utm_campaign=exp047-t2
Experimento #47 (Arbitraje estadístico, residuo PCA): murió · −10.1% · Sharpe −0.58 y −0.69 · cuenta cortada a los 876 días. Video completo en el canal. No es asesoría financiera.

## Capítulos
0:00 Gancho · 0:20 De qué experimento hablamos · 0:30 La idea en una frase · 1:00 Pasos 1 y 2: el factor común · 1:40 Pasos 3 y 4: el residuo · 2:10 Pasos 5 y 6: la decisión · 2:45 El resultado · 3:30 Qué paso es el débil · 4:05 Con tu capital · 4:20 Cómo reproducirlo con cabeza · 4:40 Ficha del experimento #47 · 5:15 Cierre

## Etiquetas
arbitraje estadístico, stat arb, Avellaneda y Lee, residuo, z-score, factor común, PCA, fondos cuantitativos, backtest, Sharpe ratio, trading con datos, ATLAS Lab

## Rúbrica (autoevaluación, escala 1-5)
| Criterio | Nota | Por qué |
|---|---|---|
| hook_0_3s | 4 | «Seis pasos, quince activos» con el −10.1% en pantalla; el resultado llega en el segundo 3 |
| ritmo | 4 | Un paso nuevo cada 30–60 s con código en pantalla; los pasos 3 y 4 son los más densos |
| promesa_cumplida | 5 | Promete los seis pasos y se muestran con las líneas reales de la ficha |
| potencial_loop | 4 | El final repite «seis pasos, menos 10.1%» y las casillas del primer cuadro |
| claridad_no_traders | 4 | Explica factor común, residuo, beta, z-score y prop firm sin jerga extra |
| honestidad_atlas | 5 | Declara el PCA aproximado, las dos cestas (8 y 15) y que el experimento no aísla qué paso falla |
| audio | 4 | Voz por clonar; golpe de bajo solo en el gancho |
| cta | 4 | Una petición (la ficha en la web) y remite al video completo |
Promedio: **4.25** (≥ 4.0). Hook del Short 4 (≥ 4) y honestidad 5: no descalificado.

# Experimento #3 — Meta-etiquetado con ML: SMA + XGBoost

Estado del guion: **BORRADOR — pendiente de aprobación**
Estado del experimento: **murió**
Serie: D (Machine learning en trading)
Datos usados: `experiments.json` (v=3: description, params, metrics, kpis, analysis, verdict, notes), `exp_details.json` (algo, filters), `series/20260607_151624_ml-meta-labeling-sma-xgboost-v3.json` (curva 1 = estrategia, curva 2 = comprar y esperar) y la tabla «Con tu capital» de docs/youtube (fila 3). Se cita el #0 solo como origen de la señal SMA 20/50, y el #1 y el #2 por su retorno. Las cifras con 10,000 dólares son el saldo final del propio experimento y de las curvas de series.

## Títulos (3 opciones)
1. Usé una IA solo para decidir cuándo NO operar: −19.0%
2. Meta-etiquetado de López de Prado con XGBoost, probado con costos reales
3. 1,173 operaciones filtradas por una IA: Sharpe −3.28 y p = 0.48

## Miniatura
Fondo negro de la marca. Texto: «FILTRAR RUIDO» (blanco; «RUIDO» en rojo de marca). Debajo, un embudo con una señal ondulada entrando y otra igual de ondulada saliendo, y «−19.0%» en rojo. De fondo, tenue, la curva real de la serie 1. Logo ATLAS esquina inferior derecha.

---

## VIDEO LARGO (16:9, ≈ 5:15 min — 4–6 min: experimento de una sola idea y pocas cifras)
Ritmo visual: algo cambia en pantalla cada 2-3 s; b-roll real detrás, Ken Burns alterno, subtítulos karaoke, whoosh + flash en cada corte, golpe de bass solo en el momento clave.

**[0:00 — Gancho]** (pantalla: «¿Cuándo NO operar?» y «−19.0%» en rojo)
Esta vez la inteligencia artificial no tenía que adivinar nada. Solo debía decidir cuándo NO operar, filtrando las señales de una estrategia clásica. Aun así, sobre una cuenta de 10,000 dólares perdió −19.0% fuera de muestra, frente a −2.2% de comprar y esperar. Y el filtro no se distingue del azar: p de 0.48. Es el tercer experimento de machine learning del laboratorio y usa una técnica profesional muy citada.
> Boceto: embudo animado: entran señales (verde y rojo) y salen algunas; la curva real (series, curva 1) cae hasta −19.0% con sacudida de pantalla.

**[0:29 — Presentación]** (pantalla: rótulo «Experimento #3 · Meta-etiquetado con ML: SMA + XGBoost»)
Este es el experimento #3 de ATLAS Lab: Meta-etiquetado con ML: SMA + XGBoost. Todos los resultados están en la página del experimento.
> Boceto: rótulo grande «EXPERIMENTO #3 · Meta-etiquetado con ML: SMA + XGBoost» sobre velas de fondo con overlay oscuro; abajo, la URL pequeña «atlas-lab-one.vercel.app/e/3». Ken Burns «out».

**[0:39 — La idea: meta-etiquetado]** (pantalla: dos cajas «Señal primaria» y «Filtro»)
El meta-etiquetado, o meta-labeling, es una técnica de López de Prado de 2018. Separa dos trabajos que normalmente se mezclan: una señal primaria decide la dirección, y un modelo secundario decide si vale la pena tomar esa señal. Aquí la señal primaria es el cruce de medias SMA 20/50, el mismo de la línea base del experimento 0, y el modelo secundario es XGBoost. Para entrenarlo, cada señal del pasado recibe una etiqueta: 1 si la dirección del cruce coincide con la barrera que toca primero el precio, es decir, si la señal habría acertado, y 0 si no. El modelo aprende a distinguir las señales que acertaron de las que fallaron, y en la prueba solo deja pasar las que le parecen buenas.
> Boceto: diagrama «SMA 20/50 → dirección» + «XGBoost → ¿tomar? sí/no» con una compuerta que deja pasar o bloquea cada flecha de señal.

**[1:30 — Cómo lo probé]** (pantalla: línea de tiempo 70% / 30%)
Igual que en los experimentos 1 y 2: EUR/USD en velas de una hora, división cronológica con 70% para entrenar y 30% para probar, y un embargo de 24 velas entre ambos para que no se filtre información. Solo se opera la parte de prueba, de marzo de 2023 a diciembre de 2024. Eso es fuera de muestra: datos que el modelo nunca vio. La señal solo se toma si el modelo da más de 0.5 de probabilidad. Costos de 0.7 pips más deslizamiento. Y los chequeos de siempre: prueba de azar con 500 permutaciones, PSR y comparación con comprar y esperar. Un aviso: el periodo de prueba es distinto al de la línea base, así que no comparo sus cifras directamente.
> Boceto: misma barra de tiempo del #1 con el tramo de prueba resaltado; tarjeta `params_view` (Señal principal SMA 20/50 · Filtro XGBoost p > 0.5 · Barreras 2×ATR · Horizonte 24 h).

**[2:19 — Resultados]** (pantalla: tarjetas KPI)
Resultado: −19.0%; la cuenta de 10,000 dólares terminó en 8,096 dólares. El Sharpe neto, que es la ganancia por unidad de riesgo ya con costos, fue −3.28. La peor caída: −20.1%. Hizo 1,173 operaciones, con 41.8% de aciertos y un factor de beneficio de 0.71, y pagó 1,474 dólares en costos, el 15% de la cuenta. Pierde menos que los experimentos 1 y 2, que perdieron −36.2% y −33.9%, y también paga menos en comisiones. Pero sigue siendo mucho peor que el −2.2% de comprar y esperar.
> Boceto: barras comparativas de retorno: #1 −36.2%, #2 −33.9%, #3 −19.0% (rojas) y comprar y esperar −2.2% (gris); a un lado, tarjetas de `kpis`.

**[2:54 — Los filtros]** (pantalla: checklist)
La lógica pasa: el modelo solo filtra la señal primaria y la división es limpia. El resto falla. La señal filtrada salió prácticamente aleatoria: el p de la prueba de azar fue 0.48, es decir, casi la mitad de las versiones barajadas rinden igual o mejor, y el PSR fue 0.51, lejos del 0.95 que se exige. Al sumar costos, el Sharpe neto fue −3.28. Y contra comprar y esperar: −19.0% frente a −2.2%. El Deflated Sharpe, el ajuste por el número de pruebas, no se aplicó en este experimento.
> Boceto: checklist de `filters`: lógica ✓ verde; costos ✗, azar ✗ (p=0.48), PSR ✗ (0.51), comprar y esperar ✗; Deflated Sharpe «no aplicado». Una moneda girando junto a «p = 0.48».

**[3:31 — Por qué falla]** (pantalla: embudo con ruido)
Que el machine learning elija cuándo operar no ayuda si la señal de base es ruido. Filtrar ruido sigue dando ruido. Las tres pruebas con XGBoost, cada una con una idea distinta, terminaron en pérdida fuera de muestra, y ninguna se distingue del azar. No es que la herramienta sea mala; es que, con variables simples de precio y volumen en velas de una hora, no hay una señal que descubrir. Un modelo no puede encontrar lo que no está en los datos.
> Boceto: embudo que recibe ondas irregulares y devuelve ondas igual de irregulares; debajo, las tres cifras −36.2%, −33.9%, −19.0% con sellos ✕.

**[4:06 — Con tu capital]** (pantalla: tarjeta «Con tu capital»)
Con 10,000 dólares, la cuenta terminó en 8,096 dólares y comprar y esperar habría terminado en 9,775 dólares. Con 100,000, la tabla de ATLAS da menos 19,037 dólares, frente a menos 2,237 de comprar y esperar en las mismas fechas.
> Boceto: tarjeta de capital con «Estrategia −$19,037» (rojo) y «Comprar y esperar −$2,237»; curvas reales debajo; selector $10,000 / $100,000.

**[4:22 — Ficha del experimento #3]** (pantalla: tarjeta con la URL)
Ficha del experimento 3. Estado: murió. Cifra clave: menos 19.0% fuera de muestra con un Sharpe de menos 3.28, frente a menos 2.2% de comprar y esperar; 1,173 operaciones y 1,474 dólares en costos. Filtros que decidieron: la prueba de azar dio un p de 0.48 y el PSR fue 0.51, bajo el 0.95 exigido. Lección: filtrar ruido sigue dando ruido. Revísalo completo en atlas-lab-one.vercel.app/e/3.
> Boceto: tarjeta oscura con el estado del experimento #3 arriba, las cifras clave en el centro y «atlas-lab-one.vercel.app/e/3» en grande al pie; las líneas de la ficha entran una a una; logo ATLAS.

**[4:47 — Conclusión y cierre]**
Veredicto: no sirvió. −19.0% fuera de muestra con un Sharpe de −3.28, y un filtro que no se distingue del azar. Filtrar ruido sigue dando ruido. En el siguiente experimento cambio de enfoque: dejo el machine learning y vuelvo a una idea clásica de la literatura, el momentum diario. Todos los datos en atlas-lab-one.vercel.app/e/3. Contenido educativo, no es asesoría financiera. El trading no se promete: se prueba.
> Boceto: sello ✕ rojo sobre el embudo; frase de marca, logo y URL.

---

## SHORT (9:16, ≈ 48 s)
Fórmula visual: b-roll vertical + overlay oscuro 0.6, Ken Burns alternando in/out, subtítulos karaoke en MAYÚSCULAS con las cifras en rojo, whoosh + flash en cada corte, golpe de bass + sacudida solo en el 0-3 s; ticker arriba.

**[0-3 s]** «Una IA decide cuándo NO operar. Resultado: −19.0%.»
> Boceto: texto gigante «¿CUÁNDO NO OPERAR?» y «−19.0%» rojo; embudo que bloquea señales; cifra roja con sacudida; b-roll de gráficos de bolsa, Ken Burns «in».
**[3-12 s]** «La señal es un cruce de medias móviles, 20 contra 50. Un modelo de machine learning decide si tomar cada señal. Se llama meta-etiquetado.»
> Boceto: dos cajas conectadas «Cruce de medias → IA decide»; Ken Burns «out»; karaoke con «TOMAR O SALTAR» en rojo.
**[12-24 s]** «Lo probé solo con datos que el modelo nunca vio. Hizo 1,173 operaciones, con un Sharpe de −3.28 y una caída máxima de −20.1%. Comprar y esperar perdió −2.2%.»
> Boceto: contador de operaciones hasta 1,173; barras −19.0% contra −2.2%; whoosh y flash blanco.
**[24-36 s]** «Pagó 1,474 dólares en comisiones, el 15% de la cuenta. Y la señal filtrada tuvo un p de azar de 0.48 y un PSR de 0.51: no se distingue de la suerte.»
> Boceto: monedas cayendo hasta $1,474; moneda girando junto a «p = 0.48»; Ken Burns «in».
**[36-48 s]** «Filtrar ruido sigue dando ruido. La IA decidió cuándo no operar… y aun así perdió −19.0%. El video completo está en el canal. Experimento #3 completo en el enlace. No es asesoría financiera.»
> Boceto: vuelve la pregunta «¿Cuándo no operar?» tachada con ✕ y el −19.0% (loop con el gancho); textos «Video completo en el canal» y «Experimento #3 completo en el enlace»; logo.

## Descripción de YouTube (video largo)
https://atlas-lab-one.vercel.app/e/3?utm_source=youtube&utm_medium=video&utm_campaign=exp003-t1
Ficha del experimento #3 (Meta-etiquetado con ML: SMA + XGBoost): estado murió · −19.0% frente a −2.2% de comprar y esperar · Sharpe −3.28 · p de azar 0.48.
Meta-etiquetado (López de Prado, 2018): un cruce de medias SMA 20/50 decide la dirección y un XGBoost decide si tomar o saltar cada señal. Prueba fuera de muestra (mar-2023 a dic-2024, EUR/USD en 1 hora, costos reales): −19.0%, Sharpe −3.28, p de azar 0.48. Comprar y esperar: −2.2%.
Contenido educativo. No es asesoría financiera ni recomendación de inversión.

## Descripción del Short
https://atlas-lab-one.vercel.app/e/3?utm_source=youtube&utm_medium=short&utm_campaign=exp003-t1
Experimento #3 · murió · −19.0% fuera de muestra frente a −2.2% de comprar y esperar. No es asesoría financiera.

Capítulos: 0:00 Gancho · 0:29 Presentación · 0:39 La idea: meta-etiquetado · 1:30 Cómo lo probé · 2:19 Resultados · 2:54 Los filtros · 3:31 Por qué falla · 4:06 Con tu capital · 4:22 Ficha del experimento #3 · 4:47 Conclusión y cierre

Etiquetas: meta-labeling, meta-etiquetado, López de Prado, XGBoost, machine learning trading, cruce de medias, EUR/USD, backtest, fuera de muestra, inteligencia artificial trading, ATLAS Lab, trading con datos

## Rúbrica (autoevaluación, 1–5)
| Criterio | Short | Largo |
|---|---|---|
| hook_0_3s | 4 | 4 |
| ritmo | 4 | 4 |
| promesa_cumplida | 5 | 5 |
| potencial_loop | 4 | 3 |
| claridad_no_traders | 4 | 4 |
| honestidad_atlas | 5 | 5 |
| audio | 4 | 3 |
| cta | 4 | 4 |
| **Promedio** | **4.25** | **4.00** |

Notas: el concepto de meta-etiquetado exige el diagrama de las dos cajas; sin él, la claridad del largo baja a 3. El Short cumple hook ≥ 4 y honestidad 5.

## Otros temas de este experimento
Cada tema = video largo + Short, con su propia ficha del experimento. Todos en estado BORRADOR — pendiente de aprobación.
- Tema 1: este archivo — Meta-etiquetado con ML: SMA + XGBoost
- Tema 2: [exp-003-t2-mismo-cruce-misma-ventana.md](exp-003-t2-mismo-cruce-misma-ventana.md) — ¿mejoró la IA al cruce de medias? Misma señal, misma ventana
- Tema 3: [exp-003-t3-meta-etiquetado-explicado.md](exp-003-t3-meta-etiquetado-explicado.md) — el meta-etiquetado explicado (dos modelos, dos trabajos)
- Tema 4: [exp-001-t4-tres-ias-perdida-por-operacion.md](exp-001-t4-tres-ias-perdida-por-operacion.md) — tres IAs, la misma pérdida por operación (cubre #1, #2 y #3)

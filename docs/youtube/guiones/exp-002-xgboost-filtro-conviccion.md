# Experimento #2 — ML XGBoost + filtro de convicción

Estado del guion: **BORRADOR — pendiente de aprobación**
Estado del experimento: **murió**
Serie: D (Machine learning en trading)
Datos usados: `experiments.json` (v=2: description, params, metrics, kpis, analysis, verdict, notes), `exp_details.json` (algo, filters), `series/20260607_151500_ml-xgboost-filtro-conviccion-v2.json` (curva 1 = estrategia, curva 2 = comprar y esperar) y la tabla «Con tu capital» de docs/youtube (fila 2). Compara con el #1 (mismos datos y mismo modelo). Las cifras con 10,000 dólares son el saldo final del propio experimento y de las curvas de series.

## Títulos (3 opciones)
1. Obligué a una IA a operar solo cuando estuviera segura: −33.9%
2. ¿Operar menos arregla una estrategia sin ventaja? XGBoost con filtro de convicción
3. 1,822 operaciones, $2,097 en comisiones y p = 0.86: el filtro no salvó a la IA

## Miniatura
Fondo negro de la marca. Texto grande: «SOLO SI ESTÁ SEGURA» (blanco, «SEGURA» en rojo de marca). A la derecha, un medidor de confianza con la aguja en 0.5 y, debajo, «−33.9%» en rojo. Curva real de la serie 1 cayendo, atenuada, detrás. Logo ATLAS esquina inferior derecha.

---

## VIDEO LARGO (16:9, ≈ 5:20 min — 4–6 min: experimento de una sola idea y pocas cifras)
Ritmo visual: algo cambia en pantalla cada 2-3 s; b-roll real detrás, Ken Burns alterno, subtítulos karaoke, whoosh + flash en cada corte, golpe de bass solo en el momento clave.

**[0:00 — Gancho]** (pantalla: «−33.9%» rojo y «1,822 operaciones»)
Le puse una condición a la inteligencia artificial: operar solo cuando estuviera segura. Operó menos. Y perdió −33.9% de una cuenta de 10,000 dólares, mientras comprar y esperar perdió −2.2%. Es la segunda prueba de machine learning de ATLAS Lab y responde a una pregunta muy común: si una estrategia pierde por operar demasiado, ¿basta con exigirle más seguridad antes de entrar? Spoiler: no.
> Boceto: cifra «−33.9%» que entra con sacudida; debajo, la curva real (series, curva 1) cayendo contra la curva 2 casi plana. Ken Burns «in».

**[0:27 — Presentación]** (pantalla: rótulo «Experimento #2 · ML XGBoost + filtro de convicción»)
Este es el experimento #2 de ATLAS Lab: ML XGBoost + filtro de convicción. Todos los resultados están en la página del experimento.
> Boceto: rótulo grande «EXPERIMENTO #2 · ML XGBoost + filtro de convicción» sobre velas de fondo con overlay oscuro; abajo, la URL pequeña «atlas-lab-one.vercel.app/e/2». Ken Burns «out».

**[0:37 — Dónde estábamos]** (pantalla: resumen del #1)
Es la continuación del experimento anterior. El mismo modelo, XGBoost, que en cada vela de una hora del euro-dólar decide comprar, vender en corto o quedarse fuera, aprendiendo de etiquetas de triple barrera. En el experimento 1 operó 2,040 veces y perdió −36.2%, y pagó 2,327 dólares en comisiones. La hipótesis natural era: si el problema son los costos de operar tanto, hagamos que solo opere cuando esté más convencido. Menos operaciones, menos peajes, mejor resultado. Es una idea razonable, y justo por eso conviene probarla con datos.
> Boceto: dos columnas «#1: 2,040 operaciones · −36.2%» y «#2: ?» con una interrogación que se resuelve al final; iconos de moneda cayendo para representar costos.

**[1:13 — La regla nueva]** (pantalla: medidor de probabilidad)
El modelo no solo da una decisión: da una probabilidad para cada una de las tres opciones, comprar, vender o esperar. La regla nueva es simple: operar únicamente si la probabilidad de la opción ganadora supera 0.5. Ese umbral lo fijé de antemano. No lo ajusté mirando el resultado de la prueba, que es la forma más común de inflar un backtest: probar muchos umbrales y quedarse con el que mejor sale. Aquí hay un solo umbral, escogido antes de ver nada. La idea era operar menos y pagar menos costos.
> Boceto: tres barras de probabilidad (sube / baja / quieto) para una vela; una línea en 0.5; si ninguna la cruza, el cartel «NO OPERA»; si una la cruza, «OPERA». Texto: «Umbral fijado de antemano: 0.5».

**[1:50 — Cómo lo probé]** (pantalla: línea de tiempo 70% / 30%)
Todo lo demás es igual al experimento 1. EUR/USD en velas de una hora, con la historia dividida en orden cronológico: 70% para entrenar y 30% para probar, con un embargo de 24 velas entre ambos para que no se filtre información. Solo se opera la parte de prueba, de marzo de 2023 a diciembre de 2024: datos que el modelo nunca vio, lo que llamamos fuera de muestra. Los costos son 0.7 pips de comisión más deslizamiento. Y los mismos chequeos: una prueba de azar con 500 permutaciones, el PSR y la comparación con comprar y esperar.
> Boceto: la misma barra de tiempo del #1 con la etiqueta «igual que el #1» y el único cambio resaltado en amarillo: «+ filtro de convicción 0.5».

**[2:30 — Resultados]** (pantalla: tabla #1 contra #2)
Resultado: −33.9% frente a −36.2% del experimento 1, una mejora pequeña. El Sharpe, la ganancia por unidad de riesgo, siguió igual de malo: −4.79 frente a −4.43. La peor caída fue −35.4%. Hizo 1,822 operaciones frente a 2,040: el filtro apenas recortó una parte. Acertó el 45.8% y el factor de beneficio fue 0.68. Y los costos: 2,097 dólares, el 21% de la cuenta. La cuenta de 10,000 terminó en 6,615. Menos operaciones, sí, pero no las suficientes, y las que quedaron seguían sin tener ventaja.
> Boceto: tabla animada fila por fila: Retorno (−36.2% → −33.9%), Sharpe (−4.43 → −4.79), Operaciones (2,040 → 1,822), Costos ($2,327 → $2,097). Verde si mejora, rojo si empeora; el Sharpe en rojo parpadea.

**[3:06 — Los filtros]** (pantalla: checklist)
La lógica pasa, porque el umbral estaba fijado de antemano y la división es limpia. Todo lo demás falla. Costos: Sharpe neto de −4.79. Azar: un p de 0.86, lo que significa que la mayoría de las versiones aleatorias de esta señal rinden igual o mejor que el modelo. PSR, la probabilidad de que el Sharpe real sea positivo: 0.14, cuando se pide más de 0.95. Y contra comprar y esperar: −33.9% frente a −2.2%. El Deflated Sharpe, el ajuste por el número de pruebas, no se aplicó aquí; solo el PSR.
> Boceto: checklist de `filters` con lógica ✓ verde y cuatro ✗ rojas (costos, azar p=0.86, PSR 0.14, comprar y esperar); Deflated Sharpe en gris «no aplicado».

**[3:44 — Por qué falla]** (pantalla: curva del #1 y del #2 superpuestas)
Un modelo sin señal no mejora por exigirle más seguridad. Si lo que el modelo «sabe» es ruido, decirle «opera solo cuando estés más seguro» solo consigue que esté más seguro de ruido. Lo único que cambió fue la cantidad de operaciones; la cuenta siguió perdiendo y el resultado siguió sin distinguirse del azar. Es una lección que sirve fuera del trading: la confianza de un modelo no es lo mismo que su acierto.
> Boceto: ambas curvas reales superpuestas (series de v1 y v2) cayendo casi juntas; texto «Menos operaciones ≠ ventaja».

**[4:14 — Con tu capital]** (pantalla: tarjeta «Con tu capital»)
Con 10,000 dólares, la cuenta terminó en 6,615 y comprar y esperar habría terminado en 9,775. Con 100,000, la tabla de ATLAS da menos 33,846 dólares para la estrategia, frente a menos 2,237 de comprar y esperar.
> Boceto: tarjeta de capital con «Estrategia −$33,846» (rojo) y «Comprar y esperar −$2,237» sobre las dos curvas; selector $10,000 / $100,000.

**[4:30 — Ficha del experimento #2]** (pantalla: tarjeta con la URL)
Ficha del experimento 2. Estado: murió. Cifra clave: menos 33.9% fuera de muestra con un Sharpe de menos 4.79, frente a menos 2.2% de comprar y esperar; 1,822 operaciones y 2,097 dólares en costos. Filtros que decidieron: la prueba de azar dio un p de 0.86, y los costos y comprar y esperar fallaron. Lección: un modelo sin señal no mejora por exigirle más seguridad. Revísalo completo en atlas-lab-one.vercel.app/e/2.
> Boceto: tarjeta oscura con el estado del experimento #2 arriba, las cifras clave en el centro y «atlas-lab-one.vercel.app/e/2» en grande al pie; las líneas de la ficha entran una a una; logo ATLAS.

**[4:57 — Conclusión y cierre]**
Veredicto: no sirvió. −33.9% fuera de muestra, Sharpe −4.79, mucho peor que comprar y esperar. En el siguiente experimento le doy otro trabajo a la inteligencia artificial: no adivinar, sino decidir cuándo no operar. Todos los datos en atlas-lab-one.vercel.app/e/2. Contenido educativo, no es asesoría financiera. El trading no se promete: se prueba.
> Boceto: sello ✕ rojo sobre «Convicción 0.5»; frase de marca, logo y URL.

---

## SHORT (9:16, ≈ 48 s)
Fórmula visual: b-roll vertical + overlay oscuro 0.6, Ken Burns alternando in/out, subtítulos karaoke en MAYÚSCULAS con las cifras en rojo, whoosh + flash en cada corte, golpe de bass + sacudida solo en el 0-3 s; ticker arriba.

**[0-3 s]** «Una IA que solo opera si está segura: −33.9%.»
> Boceto: texto gigante «SOLO SI ESTÁ SEGURA» y «−33.9%» rojo; medidor con aguja que cruza 0.5 y cifra roja con sacudida; b-roll de pantallas de bolsa, Ken Burns «in».
**[3-12 s]** «Es el mismo modelo que ya había perdido −36.2%. Ahora solo opera si su probabilidad supera 0.5, un umbral fijado antes de ver el resultado.»
> Boceto: tres barras de probabilidad con línea en 0.5; Ken Burns «out»; karaoke con «ANTES DE VER» en rojo.
**[12-24 s]** «La idea: menos operaciones, menos costos. Hizo 1,822 en vez de 2,040. Pero el Sharpe fue −4.79, peor que antes, y la cuenta cayó −33.9%. Comprar y esperar perdió −2.2%.»
> Boceto: tabla #1 → #2 con 2,040 → 1,822 y −4.43 → −4.79; curva real cayendo; whoosh y flash blanco.
**[24-36 s]** «Acertó el 45.8% y pagó 2,097 dólares en comisiones, el 21% de la cuenta. La prueba de azar dio un p de 0.86: la mayoría de las versiones aleatorias le ganan.»
> Boceto: monedas cayendo hasta $2,097; moneda girando junto a «p = 0.86»; sello ✕; Ken Burns «in».
**[36-48 s]** «Un modelo sin señal no mejora por exigirle más seguridad. Seguro de sí mismo… y perdiendo −33.9%. El video completo está en el canal. Experimento #2 completo en el enlace. No es asesoría financiera.»
> Boceto: vuelve «SEGURA» con el −33.9% rojo debajo (loop con el gancho); textos «Video completo en el canal» y «Experimento #2 completo en el enlace»; logo.

## Descripción de YouTube (video largo)
https://atlas-lab-one.vercel.app/e/2?utm_source=youtube&utm_medium=video&utm_campaign=exp002-t1
Ficha del experimento #2 (ML XGBoost + filtro de convicción): estado murió · −33.9% frente a −2.2% de comprar y esperar · Sharpe −4.79 · p de azar 0.86.
Segundo intento con machine learning: el mismo XGBoost del experimento #1, pero operando solo si su probabilidad supera 0.5 (umbral fijado de antemano). Resultado fuera de muestra (mar-2023 a dic-2024, EUR/USD en 1 hora): −33.9%, Sharpe −4.79, p de azar 0.86, 1,822 operaciones y $2,097 en costos.
Contenido educativo. No es asesoría financiera ni recomendación de inversión.

## Descripción del Short
https://atlas-lab-one.vercel.app/e/2?utm_source=youtube&utm_medium=short&utm_campaign=exp002-t1
Experimento #2 · murió · −33.9% fuera de muestra frente a −2.2% de comprar y esperar. No es asesoría financiera.

Capítulos: 0:00 Gancho · 0:27 Presentación · 0:37 Dónde estábamos · 1:13 La regla nueva · 1:50 Cómo lo probé · 2:30 Resultados · 3:06 Los filtros · 3:44 Por qué falla · 4:14 Con tu capital · 4:30 Ficha del experimento #2 · 4:57 Conclusión y cierre

Etiquetas: machine learning trading, XGBoost, filtro de convicción, umbral de probabilidad, EUR/USD, backtest, fuera de muestra, costos de trading, inteligencia artificial trading, Sharpe ratio, ATLAS Lab, trading con datos

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

Notas: el gancho funciona mejor si el espectador ya vio el #1; por eso el Short repite en una frase qué era el modelo. El Short cumple hook ≥ 4 y honestidad 5.

## Otros temas de este experimento
Cada tema = video largo + Short, con su propia ficha del experimento. Todos en estado BORRADOR — pendiente de aprobación.
- Tema 1: este archivo — ML XGBoost + filtro de convicción
- Tema 2: [exp-002-t2-confianza-no-es-acierto.md](exp-002-t2-confianza-no-es-acierto.md) — la confianza de un modelo no es lo mismo que su acierto
- Tema 3: [exp-002-t3-sharpe-contra-retorno.md](exp-002-t3-sharpe-contra-retorno.md) — perder menos y tener peor Sharpe (cómo leer un panel de números)
- Tema 4: [exp-001-t4-tres-ias-perdida-por-operacion.md](exp-001-t4-tres-ias-perdida-por-operacion.md) — tres IAs, la misma pérdida por operación (cubre #1, #2 y #3)

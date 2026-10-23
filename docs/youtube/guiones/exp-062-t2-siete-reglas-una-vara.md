# Experimento #62 — B3 continuo (prueba triple) · Tema 2 de 3: siete reglas, una sola vara de medir

Estado del guion: **BORRADOR — pendiente de aprobación**
Tema 2 de 3 del experimento #62 · Qué aporta frente a los otros temas: es el tema de la COMPARACIÓN y del RESUMEN de la saga #59–#62. Pone en una sola tabla las siete ideas probadas para detectar el cambio de régimen (la regla base y seis ataques), las mide con la misma vara (Sharpe 0.37 de invertir a 1x) y cuenta cómo cerró el examen del mejor candidato. El tema 1 es el examen de B3 (Deflated Sharpe 0.20); el tema 3 trata de si B3 al menos protege la cuenta.
Estado del experimento: **murió** (cierra la saga de cambio de régimen: 7 ataques, ninguno pasa el triple test)
Serie: G, por tema (filtros de régimen; el plan aún no lista #61–#62) · Relacionado: #59, #60, #61
Datos usados: `experiments.json` (v=62, v=61, v=60, v=59: verdict, analysis, notes, kpis, metrics), `exp_details.json` (extra-v62: algo, code.snippet, filters), `series/extra-v62.json` y la tabla «Con tu capital» (`docs/youtube/*-capital.md`, filas #59, #60, #61 y #62).

## Títulos
1. Siete reglas para detectar la crisis a tiempo, una sola vara: el Sharpe de 0.37
2. De +30.3% a −28.0%: la saga completa del cambio de régimen, ninguna le gana a invertir y esperar
3. Siete ideas, cero aprobadas: tabla final de los experimentos 59 a 62

## Miniatura
Fondo `#09090b`. Una tabla de siete filas con barras horizontales rojas y blancas, y una línea vertical verde `#22c55e` rotulada «0.37» que ninguna barra cruza. Texto grande blanco: «7 IDEAS · 0 PASAN». Logo ATLAS esquina inferior derecha.

---

## VIDEO LARGO (≈ 6½ min)

**[0:00 — Gancho]** (pantalla: siete barras y una línea vertical «0.37»)
Siete reglas para detectar la crisis a tiempo. Una sola vara de medir: el Sharpe de 0.37 que da invertir a 1x y esperar. Ninguna la superó.
> BOCETO: siete barras horizontales que crecen hacia la línea verde «0.37» y se detienen antes; golpe de bajo y sacudida al detenerse la última.

**[0:15 — Este experimento]** (pantalla: rótulo «Experimento #62 · B3 continuo (prueba triple)»)
Este es el experimento #62 de ATLAS Lab: B3 continuo, con la prueba triple. Todos los resultados están en la página del experimento. Cierra una saga de cuatro experimentos, y hoy la cuento completa en una tabla.
> BOCETO: rótulo con «#62» y el nombre del experimento; cuatro fichas pequeñas «#59 #60 #61 #62» debajo; logo ATLAS.

**[0:40 — El problema que querían resolver]** (pantalla: curva de la cesta con 2020 y 2022 sombreados)
Los mercados tienen épocas tranquilas y crisis, como 2020 o 2022, en que casi todo cae a la vez. A eso se le llama cambio de régimen. Si pudieras detectar a tiempo que cambió, saldrías antes de la caída. La saga probó siete ideas para lograrlo, siempre contra la misma referencia: la misma cesta, invertida a 1x, sin hacer nada.
> BOCETO: curva gris de la cesta con 2020 y 2022 sombreados en rojo; texto «régimen = cómo se comporta el mercado».

**[1:15 — Las siete ideas]** (pantalla: tabla animada)
La primera, del experimento 59, es una regla de una línea: comprar con apalancamiento 2 si el mercado está sobre su media de 200 días. Después, tres ataques para arreglar su pérdida en el mercado bajista, en el 60: tendencia más VIX, tendencia más volatilidad objetivo y largo y corto. Y otros tres en el 61: neutral en dólares, núcleo más capa neutral y exposición continua. Estos son los resultados, de 2014 a 2024.
| Idea | Experimento | Retorno 2014–2024 | Sharpe |
|---|---|---|---|
| Regla base: tendencia con MA200 | #59 | +30.3% | 0.33 |
| A1 tendencia + VIX | #60 | −16.8% | −0.24 |
| A2 tendencia + vol-targeting | #60 | +29.7% | 0.31 |
| A3 largo/corto | #60 | −24.1% | −0.16 |
| B1 neutral en dólares | #61 | −28.0% | −0.22 |
| B2 núcleo + capa neutral | #61 | −9.6% | −0.03 |
| B3 exposición continua | #61 | +22.5% | 0.35 |
| Invertido a 1x (sin estrategia) | — | +23.1% | 0.37 |
> BOCETO: la tabla entra fila a fila con tick; barras de Sharpe en rojo (negativas) y blanco (positivas); la fila de 1x en verde con la línea de meta 0.37.

**[2:30 — La vara de medir]** (pantalla: línea vertical 0.37)
Ojo con el Sharpe: es la ganancia por cada unidad de riesgo. El 0.37 es lo que da quedarse quieto en esta cesta. Por eso es la vara: una idea que no la supera, con todo su trabajo y sus costos, no mejora lo que ya tenías sin hacer nada. La más cercana, B3, queda en 0.35.
> BOCETO: línea vertical verde «0.37»; la barra de B3 se detiene en 0.35 con una etiqueta «casi, pero no».

**[3:05 — Lo que tienen en común]** (pantalla: tres tarjetas)
Tres patrones. Uno: cada arreglo solo mueve dónde ganas y dónde pierdes; el largo y corto, por ejemplo, ganó +6.7% en 2022 pero perdió −24.1% en el periodo completo. Dos: lo neutral entre activos no tiene ventaja, ni siquiera antes de costos. Tres: la exposición continua iguala a invertir a 1x, con menos caída en 2022, pero no lo supera.
> BOCETO: tres tarjetas con icono (balanza = «mueven dónde ganas», ✕ = «neutral muerto», regulador = «iguala, no supera»), con sus cifras.

**[3:50 — El examen final]** (pantalla: tres puertas)
Al mejor candidato, B3, le hice el examen completo, en una cesta de 7 pares de divisas más oro con datos desde 2007. Primera puerta: seis ventanas de media entre 2014 y 2024; las seis dan Sharpe negativo, la de 200 días con −0.14. Segunda: la regla congelada en 2007 a 2013, un periodo que no vio y con la crisis de 2008: Sharpe de −0.03, cuando se exigía más de 0.30. Tercera: el Deflated Sharpe, que descuenta la suerte de haber probado seis ventanas: 0.20, cuando se exigía más de 0.95.
> BOCETO: tres puertas con candado que se cierran una a una; medidor del Deflated Sharpe con la aguja en 0.20 y la meta 0.95.

**[4:30 — Por qué contar las ideas]** (pantalla: contador de ideas)
El 0.20 solo descuenta las seis ventanas de B3; no cuenta las otras seis ideas de la saga. Si se contaran todas, el ajuste solo podría ser más severo, nunca más generoso: más intentos hacen más probable que una salga bien por casualidad. Por eso importa contarlas, y por eso las cuento.
> BOCETO: contador «ideas: 7» con siete fichas; flecha hacia el medidor con la nota «más intentos, nota más baja».

**[5:00 — El muro]** (pantalla: pared con la frase de la ficha)
La ficha lo resume: el muro no es la falta de ideas, es detectar el régimen a tiempo con datos de un inversor minorista. Siete ideas muy distintas, el mismo resultado. Quizá con otros datos sea distinto, pero con lo que tengo a mi alcance, no lo es.
> BOCETO: siete tarjetas que se apagan una a una; queda una pared con el texto «el muro: detectar el régimen a tiempo con datos minoristas».

**[5:30 — Lo que no se probó]** (pantalla: casillas vacías)
Honestidad sobre los límites: los ataques A1, A2, A3, B1 y B2 no pasaron por el periodo fuera de muestra ni por el Deflated Sharpe. Con que no superen la vara del 0.37 ya no hacía falta; pero faltan, y lo digo.
> BOCETO: casillas vacías «fuera de muestra» y «Deflated Sharpe» marcadas «NO APLICADO» en ámbar junto a cinco fichas.

**[5:50 — Con tu capital]** (pantalla: tarjeta «Con tu capital»)
Para B3, en la cesta reducida de marzo de 2007 a diciembre de 2024: con $10,000, perdió $668; invertido a 1x, ganó $262. Con $100,000: −$6,680 contra +$2,616. En la cesta de 15 activos de 2014 a 2024, B3 dio +$22,490 contra +$23,098. La curva usa exposición de hasta el doble.
> BOCETO: tarjeta de capital con dos filas y el aviso ámbar «exposición hasta x2». Segunda tarjeta pequeña con la cesta de 15 activos.

**[6:10 — Conclusión]** (pantalla: las siete barras del inicio)
Siete ideas, un resultado. Si algo así funcionara con datos al alcance de cualquiera, ya estaría en el precio.
> BOCETO: las siete barras del inicio, fijas, todas por debajo de la línea 0.37.

**[6:20 — Ficha del experimento #62 y cierre]** (pantalla: tarjeta con la ficha y la URL)
Ficha del experimento #62. Estado: murió. Cifra clave: Sharpe de −0.03 fuera de muestra y Deflated Sharpe de 0.20 en B3. Filtro que decidió: el Deflated Sharpe, con una exigencia de más de 0.95. Lección: siete intentos, ninguno pasa y nada le gana a invertir a 1x. Revísalo completo en atlas-lab-one.vercel.app/e/62. Contenido educativo, no es asesoría financiera. El trading no se promete: se prueba.
> BOCETO: tarjeta en pantalla con las 4 líneas de la ficha (estado rojo «murió») y la URL `atlas-lab-one.vercel.app/e/62` en grande; fundido a la frase de marca.

---

## SHORT (9:16, ≈ 45 s) — "Siete ideas, una vara"

**[0-3 s]** "Siete ideas para detectar la crisis a tiempo. Una sola vara: Sharpe 0.37. Ninguna la superó."
> BOCETO: siete barras que se detienen antes de la línea verde «0.37»; b-roll de pantallas de mercado en caída, kb=in, overlay 0.6; golpe de bajo.

**[3-14 s]** "Del experimento 59 al 62: tendencia, filtro de VIX, volatilidad objetivo, largo y corto, neutral, capa neutral y exposición continua."
> BOCETO: siete tarjetas que entran con whoosh, 1.5 s cada una; ticker arriba.

**[14-26 s]** "Sus Sharpe: 0.33, −0.24, 0.31, −0.16, −0.22, −0.03 y 0.35. Invertir y esperar: 0.37."
> BOCETO: barras de Sharpe apareciendo una a una con tick; la última, 0.35, se detiene bajo la línea verde.

**[26-37 s]** "A la mejor le hice el examen completo: fuera de muestra, Sharpe de −0.03. Deflated Sharpe: 0.20, cuando hacía falta más de 0.95."
> BOCETO: medidor del Deflated Sharpe con la aguja en 0.20; sello ✕; flash blanco al entrar.

**[37-45 s]** "El muro no es la falta de ideas: es detectar el régimen a tiempo con datos de un inversor minorista. Video completo en el canal y experimento 62 completo en el enlace. Siete ideas, cero aprobadas."
> BOCETO: vuelven las siete barras y la línea «0.37» (loop); rótulo «Experimento #62 completo en el enlace»; texto pequeño «No es asesoría financiera · El trading no se promete: se prueba».

---

## Descripción (YouTube)
https://atlas-lab-one.vercel.app/e/62?utm_source=youtube&utm_medium=video&utm_campaign=exp062-t2
Ficha del experimento #62: murió · siete ideas de cambio de régimen (experimentos 59 a 62), ninguna supera el Sharpe de 0.37 de invertir a 1x · B3: Sharpe −0.03 fuera de muestra y Deflated Sharpe 0.20.
Tabla completa de la saga: regla de tendencia con MA200 (+30.3%), tendencia más VIX (−16.8%), tendencia más volatilidad objetivo (+29.7%), largo y corto (−24.1%), neutral en dólares (−28.0%), núcleo más capa neutral (−9.6%) y exposición continua (+22.5%), frente a +23.1% de invertir a 1x.
Contenido educativo. No es asesoría financiera ni recomendación de inversión.
Descripción del Short (primera línea): https://atlas-lab-one.vercel.app/e/62?utm_source=youtube&utm_medium=short&utm_campaign=exp062-t2

Capítulos: 0:00 Gancho · 0:15 Este experimento · 0:40 El problema · 1:15 Las siete ideas · 2:30 La vara de medir · 3:05 Lo que tienen en común · 3:50 El examen final · 4:30 Por qué contar las ideas · 5:00 El muro · 5:30 Lo que no se probó · 5:50 Con tu capital · 6:10 Conclusión · 6:20 Ficha del experimento #62 y cierre

Etiquetas: cambio de régimen, mercado bajista, media móvil 200, volatilidad objetivo, estrategia neutral, Deflated Sharpe, fuera de muestra, backtest, Sharpe ratio, trading con datos, ATLAS Lab, estrategias de trading

## Rúbrica (autoevaluación)
| Pieza | hook_0_3s | ritmo | promesa_cumplida | potencial_loop | claridad_no_traders | honestidad_atlas | audio | cta | Promedio |
|---|---|---|---|---|---|---|---|---|---|
| Largo | 4 | 4 | 5 | 4 | 4 | 5 | 4 | 4 | 4.25 |
| Short | 5 | 4 | 5 | 5 | 4 | 5 | 4 | 4 | 4.50 |

Hook ≥ 4 ✓ · honestidad 5 ✓. Punto débil: es un resumen con muchas cifras; la tabla única y la línea 0.37 ordenan la lectura. El video aclara que solo B3 pasó por el examen completo.

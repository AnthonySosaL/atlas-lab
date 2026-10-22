# Experimento #1 — Tema 2: la prueba del azar (500 barajadas y p = 0.78)

Tema 2 de 4 del experimento #1
Qué aporta frente a los otros temas: el tema 1 cuenta la historia de la IA que perdió −36.2%; este explica a fondo la herramienta que dice si un resultado es suerte o ventaja (la prueba de permutación y el PSR), usando el #1 como caso. El tema 3 cuenta el camino de la cuenta y el tema 4 compara las tres IAs.
Estado del guion: **BORRADOR — pendiente de aprobación**
Estado del experimento: **murió** · Serie D (Machine learning en trading) · 1 largo + 1 Short
Datos usados: `experiments.json` (v=1: metrics, kpis, params, verdict), `exp_details.json` (extra del v=1: filters con la prueba de permutación y el PSR); para el contraste, v=5 (p = 0.003, Sharpe −0.10, Sharpe sin costos −0.003); tabla «Con tu capital» de docs/youtube (fila 1). Las cifras con 10,000 dólares son el saldo final del propio experimento.
Producción: b-roll real con overlay oscuro 0.6, Ken Burns alterno, subtítulos karaoke en MAYÚSCULAS con cifras en rojo, golpe de bajo solo en 1–2 momentos. Rojo `#e11d2a`, verde `#22c55e`, fondo `#09090b`.

## Títulos (3 opciones)
1. Barajé 500 veces las decisiones de una IA: p = 0.78, así se distingue suerte de ventaja
2. La prueba de permutación explicada con una IA que perdió −36.2%
3. ¿Suerte o ventaja? Dos pruebas que usa ATLAS Lab: p-valor y PSR (0.78 y 0.19)

## Miniatura
Fondo negro `#09090b`. Un mazo de cartas que se abre en abanico con la carta del centro en rojo y el texto «p = 0.78» en blanco gigante; debajo, «¿SUERTE?» en rojo (1 palabra). Logo ATLAS arriba a la derecha.

---

## VIDEO LARGO (16:9, ≈ 4:30 min)

**[0:00 — Gancho]** (pantalla: 500 puntos y uno verde)
Barajé las decisiones de esta inteligencia artificial 500 veces. En 78 de cada 100 versiones al azar, el resultado fue igual o mejor que el de la IA real. Así se distingue la suerte de la ventaja.
> Boceto: 500 puntos grises se dispersan; el punto verde de la IA queda dentro de la nube, no a la derecha; contador «78 de cada 100». Ken Burns «in».

**[0:16 — Qué experimento es]** (pantalla: rótulo con el número y el nombre)
Este es el experimento #1 de ATLAS Lab: ML XGBoost con triple barrera. Todos los resultados están en la página del experimento. Aquí me quedo con una de sus pruebas.
> Boceto: rótulo «EXPERIMENTO #1 · ML XGBoost con triple barrera» sobre la curva real cayendo; URL pequeña abajo. kb=out.

**[0:29 — El problema]** (pantalla: moneda y curva)
Cuando una estrategia gana, hay una pregunta incómoda: ¿fue habilidad o suerte? Con pocos datos, cualquier regla puede tener una racha. Este modelo, un XGBoost que cada hora decide comprar, vender en corto o no hacer nada en el euro-dólar, se probó con 11,200 velas que nunca había visto, de marzo de 2023 a diciembre de 2024. Perdió −36.2%. Pero incluso un resultado así necesita una prueba formal: ¿se distingue del azar?
> Boceto: una moneda que gira junto a la curva real de la serie 1; texto «¿Habilidad o suerte?»; 11,200 velas apareciendo como una barra. kb=in.

**[0:59 — La prueba de permutación, paso a paso]** (pantalla: señales que se barajan)
La idea es sencilla. Uno: tomo las señales del modelo en la parte de prueba: sus compras, ventas en corto y momentos fuera. Dos: las barajo en el tiempo, como un mazo de cartas. Mismas señales, mismo número de cada tipo, pero en momentos al azar, así que cualquier relación con lo que hace el precio después se destruye. Tres: repito 500 veces y calculo el Sharpe de cada versión barajada. Cuatro: cuento cuántas versiones barajadas rinden igual o mejor que el modelo real. Esa proporción es el p-valor.
> Boceto: cuatro pasos numerados: señal original → mazo barajándose → 500 curvas grises → histograma con una línea vertical en el Sharpe real. Contador de 500 permutaciones. kb=out.

**[1:34 — El resultado: p = 0.78]** (pantalla: histograma)
El p fue 0.78. Dicho en cristiano: de cada 100 versiones al azar, 78 rindieron igual o mejor que la IA. Si el modelo tuviera ventaja real, casi ninguna versión barajada le ganaría, y el p estaría por debajo de 0.05. Aquí el modelo está en medio de la nube de azar. Nota de honestidad: el laboratorio usa normalmente 5,000 permutaciones; este experimento usó 500. Con un 0.78, la conclusión no cambia.
> Boceto: histograma de 500 barras con la línea del modelo real en el centro-derecha y el área sombreada «78 de cada 100»; la línea de «0.05» muy a la izquierda, en verde. kb=in.

**[2:07 — Segunda prueba: el PSR]** (pantalla: medidor de probabilidad)
La segunda prueba es el PSR, la probabilidad de que el Sharpe verdadero sea mayor que cero, dado el Sharpe que observaste y cuántos datos tienes. Un Sharpe es la ganancia por unidad de riesgo, y cero significa que no hay ventaja. El PSR de este modelo fue 0.19, y la exigencia es más de 0.95: casi hay que estar seguro. Aquí, la probabilidad de que haya una ventaja es de 0.19.
> Boceto: medidor semicircular con la aguja en 0.19 y una marca de meta en 0.95; Sharpe −4.43 en rojo debajo. kb=out.

**[2:37 — Un p bajo tampoco basta]** (pantalla: caso del experimento #5)
Ojo con el otro lado. En el experimento 5, un momentum sobre 15 mercados dio un p de 0.003, que parece una prueba contundente, y perdió: Sharpe de menos 0.10. Sin costos, su Sharpe era menos 0.003, y el p subía a 0.91. Las pruebas miden cosas concretas y hay que leerlas juntas con el retorno y con los costos. Por eso ATLAS exige varias a la vez.
> Boceto: dos tarjetas: «#1: p = 0.78 → sin ventaja» y «#5: p = 0.003 → pero Sharpe −0.10»; flecha «leer juntas». kb=in.

**[3:08 — Las tres exigencias]** (pantalla: checklist)
Para pasar, el script de este experimento pide tres cosas: p por debajo de 0.05, PSR por encima de 0.95, y un Sharpe mayor que 0.245, el de la línea base del experimento 0. El #1 no pasó ninguna. Además, 2,040 operaciones costaron 2,327 dólares. Y el Deflated Sharpe, el ajuste por el número de pruebas, no se aplicó aquí; solo el PSR.
> Boceto: checklist: p < 0.05 ✗ (0.78), PSR > 0.95 ✗ (0.19), Sharpe > 0.245 ✗ (−4.43); Deflated Sharpe «no aplicado» en gris.

**[3:37 — Con tu capital]** (pantalla: tarjeta «Con tu capital»)
Con 10,000 dólares, la cuenta terminó en 6,381; comprar y esperar habría terminado en 9,775. Con 100,000, la tabla de ATLAS da menos 36,182 contra menos 2,237.
> Boceto: tarjeta de capital con ambas cifras en rojo; selector $10,000 / $100,000.

**[3:53 — Ficha del experimento #1]** (pantalla: tarjeta con la URL)
Ficha del experimento 1. Estado: murió. Cifra clave: menos 36.2% fuera de muestra contra menos 2.2% de comprar y esperar, con un Sharpe de menos 4.43. Filtros que decidieron: la prueba de azar, con p de 0.78, y el PSR de 0.19. Lección: con variables simples de precio y volumen no apareció señal de dirección. Revísalo completo en atlas-lab-one.vercel.app/e/1.
> Boceto: tarjeta oscura con «#1 · MURIÓ», cifras clave y «atlas-lab-one.vercel.app/e/1» en grande; logo.

**[4:21 — Cierre]**
Todos los datos en atlas-lab-one.vercel.app, experimento 1. Contenido educativo, no es asesoría financiera. El trading no se promete: se prueba.
> Boceto: pantalla oscura con la frase de marca.

---

## SHORT (9:16, ≈ 45 s)

**[0-3 s]** «El azar igualó a esta IA 78 de cada 100 veces.»
> Boceto: 500 puntos grises y un punto verde dentro de la nube; «78 / 100» en rojo con sacudida; b-roll de pantallas de datos, Ken Burns «in», overlay 0.6.

**[3-14 s]** «Barajé sus decisiones 500 veces. Es un XGBoost que opera el euro cada hora, probado con datos que nunca vio, de marzo de 2023 a diciembre de 2024. Perdió −36.2%.»
> Boceto: línea de tiempo con el tramo de prueba iluminado; curva real cayendo; Ken Burns «out».

**[14-27 s]** «La prueba: barajar sus señales en el tiempo 500 veces y contar cuántas versiones al azar rinden igual o mejor. Eso da el p-valor: 0.78. Para ser ventaja real, tendría que ser menor que 0.05.»
> Boceto: mazo barajándose; histograma con la línea de la IA en el centro y la meta «0.05» en verde a la izquierda; whoosh y flash.

**[27-38 s]** «Segunda prueba, el PSR: probabilidad de que haya ventaja. Salió 0.19; se pide más de 0.95. Y 2,040 operaciones costaron 2,327 dólares.»
> Boceto: medidor con aguja en 0.19 y meta 0.95; monedas cayendo hasta $2,327; Ken Burns «in».

**[38-45 s]** «Estos dos números dicen lo mismo. Experimento uno completo en el enlace. El video completo está en el canal. No es asesoría financiera.»
> Boceto: vuelve el punto verde dentro de la nube con «78 / 100» (loop con el gancho); texto «Experimento #1 completo en el enlace» y logo.

---

## Descripción de YouTube (video largo)
https://atlas-lab-one.vercel.app/e/1?utm_source=youtube&utm_medium=video&utm_campaign=exp001-t2
Ficha del experimento #1 (ML XGBoost con triple barrera): estado murió · −36.2% fuera de muestra (comprar y esperar: −2.2%) · Sharpe −4.43 · p de azar 0.78 · PSR 0.19.
Explico la prueba de permutación (500 barajadas) y el PSR con una IA que operó el EUR/USD 2,040 veces entre marzo de 2023 y diciembre de 2024, y por qué un p-valor bajo tampoco basta (caso del experimento #5).
Contenido educativo. No es asesoría financiera ni recomendación de inversión.

## Descripción del Short
https://atlas-lab-one.vercel.app/e/1?utm_source=youtube&utm_medium=short&utm_campaign=exp001-t2
Experimento #1 · murió · p de azar 0.78 y PSR 0.19. No es asesoría financiera.

Capítulos: 0:00 Gancho · 0:16 Qué experimento es · 0:29 El problema · 0:59 La prueba de permutación, paso a paso · 1:34 El resultado: p = 0.78 · 2:07 Segunda prueba: el PSR · 2:37 Un p bajo tampoco basta · 3:08 Las tres exigencias · 3:37 Con tu capital · 3:53 Ficha del experimento #1 · 4:21 Cierre

Etiquetas: prueba de permutación, p-valor, PSR, Monte Carlo trading, XGBoost, machine learning trading, fuera de muestra, backtest, suerte o habilidad, Sharpe ratio, ATLAS Lab, trading con datos

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

Notas: la claridad del Short baja por el p-valor; el gancho en lenguaje de «78 de cada 100» lo sostiene, y el largo lo explica con el mazo de cartas. El Short cumple hook ≥ 4 y honestidad 5.

# Experimento #1 — Tema 4: tres IAs, la misma pérdida por operación (cubre #1, #2 y #3)

Tema 4 de 4 del experimento #1 · también tema del #2 (4 de 4) y del #3 (4 de 4)
Qué aporta frente a los otros temas: es la comparación de los tres primeros intentos de machine learning (triple barrera, filtro de convicción y meta-etiquetado). Su hallazgo propio: cambió el número de operaciones (2,040, 1,822, 1,173), pero la pérdida media por operación casi no cambió (entre 1.62 y 1.86 dólares), así que la única forma de perder menos fue operar menos.
Estado del guion: **BORRADOR — pendiente de aprobación**
Estado de los experimentos: los tres **murieron** · Serie D (Machine learning en trading) · 1 largo + 1 Short
Datos usados: `experiments.json` (v=1, 2, 3: metrics con Expectancy, ganadora y perdedora media, operaciones, costos, retorno, Sharpe, win rate, profit factor; kpis con p de Monte Carlo; filters con el PSR) y tabla «Con tu capital» de docs/youtube (filas 1, 2, 3). Las tres pruebas usan la misma ventana (mar-2023 a dic-2024, EUR/USD, 1 hora).
Producción: b-roll real con overlay oscuro 0.6, Ken Burns alterno, subtítulos karaoke en MAYÚSCULAS con cifras en rojo, golpe de bajo solo en 1–2 momentos. Rojo `#e11d2a`, verde `#22c55e`, fondo `#09090b`.

## Títulos (3 opciones)
1. Tres IAs, tres arreglos y la misma pérdida por operación: entre 1.62 y 1.86 dólares
2. Menos operaciones no son una ventaja: −36.2%, −33.9% y −19.0% explicados
3. XGBoost, filtro de convicción y meta-etiquetado comparados: p de 0.78, 0.86 y 0.48

## Miniatura
Fondo negro `#09090b`. Tres monedas en fila con «−1.77», «−1.86» y «−1.62» en rojo; encima, texto grande «3 IAs» en blanco y «MISMA PÉRDIDA» en rojo. Logo ATLAS arriba a la derecha.

---

## VIDEO LARGO (16:9, ≈ 4:06 min)

**[0:00 — Gancho]** (pantalla: tres monedas con su pérdida por operación)
Tres ideas distintas para arreglar una inteligencia artificial. Y en las tres, cada operación seguía perdiendo entre 1.62 y 1.86 dólares de media.
> Boceto: tres monedas caen una a una con «−1.77», «−1.86», «−1.62» en rojo; sacudida en la tercera. Ken Burns «in».

**[0:11 — Qué experimentos son]** (pantalla: rótulo con el número y el nombre)
Este es el experimento #1 de ATLAS Lab: ML XGBoost con triple barrera, y hoy lo comparo con los experimentos 2 y 3. Todos los resultados están en la página de cada experimento.
> Boceto: tres rótulos «#1 XGBoost · #2 + convicción · #3 meta-etiquetado» y la URL pequeña. kb=out.

**[0:25 — Las tres ideas]** (pantalla: tres columnas)
Primera: un XGBoost que decide cada hora si comprar, vender o esperar el euro-dólar. Segunda: el mismo modelo, pero solo opera si su probabilidad supera 0.5, para operar menos. Tercera: un cruce de medias da la señal y el modelo decide si tomarla o saltarla, el meta-etiquetado. Misma ventana, de marzo de 2023 a diciembre de 2024; mismos datos nunca vistos; mismos costos.
> Boceto: tres columnas con iconos: cerebro, medidor de confianza 0.5, embudo; línea de tiempo común debajo con el tramo de prueba resaltado. kb=in.

**[0:52 — La tabla]** (pantalla: tabla comparativa)
Los resultados. Retorno: menos 36.2%, menos 33.9% y menos 19.0%, contra menos 2.2% de comprar y esperar. Operaciones: 2,040, 1,822 y 1,173. Costos: 2,327, 2,097 y 1,474 dólares. Sharpe: menos 4.43, menos 4.79 y menos 3.28. Si solo miras el retorno, parece que cada idea mejoró la anterior. Pero hay una fila que casi no se mueve.
| | #1 Triple barrera | #2 + Convicción | #3 Meta-etiquetado |
|---|---|---|---|
| Retorno | −36.2% | −33.9% | −19.0% |
| Operaciones | 2,040 | 1,822 | 1,173 |
| Costos | $2,327 | $2,097 | $1,474 |
| Sharpe | −4.43 | −4.79 | −3.28 |
| Aciertos | 46.4% | 45.8% | 41.8% |
| Pérdida media por operación | −$1.77 | −$1.86 | −$1.62 |
> Boceto: la tabla se llena columna a columna; la fila «Pérdida media por operación» se ilumina en amarillo al final. kb=out.

**[1:24 — La fila que no se mueve]** (pantalla: tres barras casi iguales)
La pérdida media por operación, lo que llamamos la expectativa: menos 1.77 dólares, menos 1.86 y menos 1.62. Casi lo mismo. Mientras tanto, las operaciones bajaron de 2,040 a 1,173. La conclusión es directa: cada idea no mejoró la calidad de las operaciones; solo hizo menos. Y cuando cada operación pierde, la única manera de perder menos es operar menos.
> Boceto: tres barras de pérdida por operación casi iguales y, debajo, tres barras de número de operaciones que bajan; flecha «menos operaciones = menos pérdida». kb=in.

**[1:52 — Por qué ninguna llegó a ganar]** (pantalla: barreras simétricas)
Hay un detalle del método. Las tres usan la triple barrera con ganancia y pérdida a 2 ATR, es decir, a la misma distancia. Por eso, la ganadora media y la perdedora media quedan parecidas: 0.12% y 0.14% en el primero; 0.10% y 0.13% en el segundo; 0.11% y 0.11% en el tercero. Con barreras simétricas necesitas acertar más del 50% solo para cubrir los costos. Acertaron 46.4%, 45.8% y 41.8%. No hay margen.
> Boceto: vela con barrera verde y roja a la misma distancia; tres pares de barras (ganadora y perdedora media) de tamaño parecido; línea del 50% con los tres aciertos por debajo. kb=out.

**[2:29 — Las pruebas de azar]** (pantalla: tres medidores)
Las pruebas estadísticas dicen lo mismo. En la prueba de azar, el p fue 0.78, 0.86 y 0.48; hace falta menos de 0.05. El PSR fue 0.19, 0.14 y 0.51; hace falta más de 0.95. Ninguna se distingue de lanzar una moneda. La tercera es la que más se parece a una moneda justa, con 0.48 y 0.51, y aun así perdió menos 19.0%, porque cada operación paga su peaje.
> Boceto: tres filas de medidores (p y PSR) con las metas 0.05 y 0.95 en verde; sellos ✕ rojos. kb=in.

**[3:05 — Con tu capital]** (pantalla: tarjeta «Con tu capital»)
Con 10,000 dólares, las tres cuentas terminaron en 6,381, 6,615 y 8,096; comprar y esperar habría terminado en 9,775. Con 100,000, la tabla de ATLAS da menos 36,182, menos 33,846 y menos 19,037, contra menos 2,237 de comprar y esperar.
> Boceto: tarjeta de capital con tres cifras rojas y la gris de comprar y esperar; selector $10,000 / $100,000.

**[3:29 — Ficha del experimento #1 (con #2 y #3)]** (pantalla: tarjeta con las URL)
Ficha de los experimentos 1, 2 y 3. Estado: los tres murieron. Cifra clave: pérdidas de menos 36.2%, menos 33.9% y menos 19.0% frente a menos 2.2% de comprar y esperar. Filtros que decidieron: costos, prueba de azar y PSR. Lección: menos operaciones no son una ventaja. Revísalo completo en atlas-lab-one.vercel.app/e/1, /e/2 y /e/3.
> Boceto: tarjeta oscura con «#1 · #2 · #3 · MURIERON», tres cifras clave y «atlas-lab-one.vercel.app/e/1» en grande; logo.

**[3:55 — Cierre]**
Todos los datos en atlas-lab-one.vercel.app, experimentos 1, 2 y 3. Contenido educativo, no es asesoría financiera. El trading no se promete: se prueba.
> Boceto: pantalla oscura con la frase de marca.

---

## SHORT (9:16, ≈ 46 s)

**[0-3 s]** «Tres IAs. Cada operación perdía entre 1.62 y 1.86 dólares.»
> Boceto: tres monedas con −1.77, −1.86, −1.62; sacudida; b-roll de pantallas de bolsa, Ken Burns «in», overlay 0.6.

**[3-14 s]** «Primero, un XGBoost que opera el euro cada hora. Después, uno que solo opera si está seguro. Y un tercero que filtra un cruce de medias. Los tres, con datos que nunca vieron.»
> Boceto: tres iconos que aparecen en orden; Ken Burns «out».

**[14-27 s]** «Sus pérdidas: −36.2%, −33.9% y −19.0%. Las operaciones bajaron de 2,040 a 1,173. Pero la pérdida por operación casi no cambió.»
> Boceto: barras de retorno que mejoran y barras de pérdida por operación casi iguales; whoosh y flash blanco.

**[27-39 s]** «La única forma de perder menos fue operar menos. Aciertos: 46.4%, 45.8% y 41.8%. Con barreras simétricas, necesitas más del 50% solo para cubrir los costos.»
> Boceto: línea del 50% con tres puntos por debajo; monedas de costo; Ken Burns «in».

**[39-46 s]** «Menos operaciones no son ventaja. Experimentos uno, dos y tres completos en el enlace. El video completo está en el canal. No es asesoría financiera.»
> Boceto: vuelven las tres monedas (loop con el gancho); texto «Experimentos #1, #2 y #3 completos en el enlace» y logo.

---

## Descripción de YouTube (video largo)
https://atlas-lab-one.vercel.app/e/1?utm_source=youtube&utm_medium=video&utm_campaign=exp001-t4
Ficha de los experimentos #1, #2 y #3 (machine learning en EUR/USD, 1 hora, mar-2023 a dic-2024): los tres murieron · −36.2%, −33.9% y −19.0% (comprar y esperar: −2.2%) · pérdida media por operación −$1.77, −$1.86 y −$1.62.
Comparo XGBoost con triple barrera, el filtro de convicción 0.5 y el meta-etiquetado sobre un cruce de medias: cambió el número de operaciones (2,040, 1,822, 1,173), no la pérdida por operación.
Contenido educativo. No es asesoría financiera ni recomendación de inversión.
También: https://atlas-lab-one.vercel.app/e/2?utm_source=youtube&utm_medium=video&utm_campaign=exp001-t4 y https://atlas-lab-one.vercel.app/e/3?utm_source=youtube&utm_medium=video&utm_campaign=exp001-t4

## Descripción del Short
https://atlas-lab-one.vercel.app/e/1?utm_source=youtube&utm_medium=short&utm_campaign=exp001-t4
Experimentos #1, #2 y #3 · murieron · pérdida por operación entre −$1.62 y −$1.86. No es asesoría financiera.

Capítulos: 0:00 Gancho · 0:11 Qué experimentos son · 0:25 Las tres ideas · 0:52 La tabla · 1:24 La fila que no se mueve · 1:52 Por qué ninguna llegó a ganar · 2:29 Las pruebas de azar · 3:05 Con tu capital · 3:29 Ficha del experimento #1 (con #2 y #3) · 3:55 Cierre

Etiquetas: machine learning trading, XGBoost, meta-etiquetado, filtro de convicción, triple barrera, expectativa por operación, EUR/USD, backtest, fuera de muestra, inteligencia artificial trading, ATLAS Lab, trading con datos

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

Notas: el hallazgo (pérdida media por operación) viene del campo Expectancy de las métricas de cada experimento; el guion no lo recalcula. El Short cumple hook ≥ 4 y honestidad 5.

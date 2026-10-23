# Experimento #1 — Tema 3: el camino de la cuenta y la expectativa por operación

Tema 3 de 4 del experimento #1
Qué aporta frente a los otros temas: el tema 1 cuenta el resultado (−36.2%) y el 2 la prueba del azar; este sigue la cuenta de 10,000 dólares en el tiempo (máximo a las dos semanas, 457 de 466 días por debajo de ese máximo) y explica la expectativa: cuánto gana o pierde, de media, cada vez que la IA opera (−1.77 dólares). Tema de «con tu capital» y de «el detalle sorprendente».
Estado del guion: **BORRADOR — pendiente de aprobación**
Estado del experimento: **murió** · Serie D (Machine learning en trading) · 1 largo + 1 Short
Datos usados: `experiments.json` (v=1: metrics con Expectancy, ganadora y perdedora media, mejor y peor operación, duración media, Max Drawdown Duration; kpis), `series/20260607_151319_ml-xgboost-triple-barrier-v1.json` (curva 1 = estrategia, curva 2 = comprar y esperar; de ahí el máximo, su fecha y los retornos de 2023 y 2024) y tabla «Con tu capital» de docs/youtube (fila 1).
Producción: b-roll real con overlay oscuro 0.6, Ken Burns alterno, subtítulos karaoke en MAYÚSCULAS con cifras en rojo, golpe de bajo solo en 1–2 momentos. Rojo `#e11d2a`, verde `#22c55e`, fondo `#09090b`.

## Títulos (3 opciones)
1. Una IA tocó su máximo a las dos semanas y pasó 457 días sin volver a verlo
2. Cada operación de esta IA perdía 1.77 dólares de media: la expectativa explicada
3. El camino de 10,000 dólares en una IA de machine learning: 10,308 y luego 6,381

## Miniatura
Fondo negro `#09090b`. Curva real de la serie 1 con un punto blanco en su máximo y el texto «10,308» encima; a la derecha, la curva hundida hasta «6,381» en rojo. Texto grande: «2 SEMANAS ARRIBA» (blanco) y «457 DÍAS ABAJO» (rojo). Logo ATLAS abajo a la derecha.

---

## VIDEO LARGO (16:9, ≈ 4:03 min)

**[0:00 — Gancho]** (pantalla: «10,308» y «457 días»)
Esta IA tocó su máximo, 10,308 dólares, el 29 de marzo de 2023, a las dos semanas de empezar. Después pasó 457 de los 466 días de la prueba por debajo de ese máximo.
> Boceto: la curva real sube un tramo corto hasta el pico (contador 10,308) y luego cae sin volver; sacudida al arrancar la caída. Ken Burns «in».

**[0:16 — Qué experimento es]** (pantalla: rótulo con el número y el nombre)
Este es el experimento #1 de ATLAS Lab: ML XGBoost con triple barrera. Todos los resultados están en la página del experimento. Hoy te cuento cómo se vivió, día a día, con 10,000 dólares.
> Boceto: rótulo «EXPERIMENTO #1 · ML XGBoost con triple barrera» sobre la curva; URL pequeña abajo. kb=out.

**[0:31 — El camino]** (pantalla: curva con tres marcas)
El modelo opera el euro-dólar cada hora, de marzo de 2023 a diciembre de 2024. En 2023, de marzo a diciembre, la cuenta cae menos 22.4%, hasta 7,756 dólares. En 2024 cae otro menos 17.7%, y termina en 6,381. La peor caída es de menos 38.3%, y dura 457 de los 466 días: la cuenta no recupera su máximo. Comprar y esperar, en las mismas fechas, tuvo su mejor momento en 10,630 dólares el 18 de julio de 2023 y terminó en 9,775.
> Boceto: curva de la estrategia con tres marcas: «10,308 · 29-mar-2023», «7,756 · fin 2023», «6,381 · final»; curva gris de comprar y esperar con su pico «10,630 · 18-jul-2023». Etiqueta «457 de 466 días». Ken Burns «out».

**[1:12 — Qué es la expectativa]** (pantalla: una ruleta con ganancias y pérdidas)
Para entender por qué cae así, hay un número muy útil: la expectativa. Es lo que ganas o pierdes, en promedio, cada vez que operas. Si es positiva, repetir la operación te beneficia; si es negativa, cada vez que operas pierdes un poco, y repetirlo muchas veces lo convierte en una pérdida grande. En esta IA, la expectativa fue menos 1.77 dólares por operación.
> Boceto: una operación como ruleta con resultados verdes y rojos que se promedian en una barra única «−$1.77»; texto «Promedio por operación». kb=in.

**[1:38 — Ganar un poco, perder un poco más]** (pantalla: promedios de ganadora y perdedora)
Los datos, operación por operación. Acierta el 46.4% de las veces. Cuando gana, gana de media 0.12%; cuando pierde, pierde de media 0.14%. Su mejor operación ganó 1.16% y la peor perdió 1.99%. Las operaciones duran unas cinco horas: 5 horas 17 minutos las ganadoras y 5 horas 35 minutos las perdedoras. El factor de beneficio, lo ganado entre lo perdido, es 0.72: ganó 0.72 dólares por cada dólar perdido.
> Boceto: dos barras: «ganadora +0.12%» (verde) y «perdedora −0.14%» (roja, más larga); tarjetas «mejor +1.16% / peor −1.99%» y «5 h 17 min / 5 h 35 min»; factor 0.72 pulsando. kb=out.

**[2:12 — El peaje]** (pantalla: monedas cayendo sobre la cuenta)
Y entre una operación y otra está el costo. Fueron 2,040 operaciones y 2,327 dólares en comisiones, el 23% de la cuenta. La cuenta perdió 3,619 dólares en total: 10,000 menos 6,381. De esos, 2,327 fueron comisiones. Con una expectativa negativa, operar más no mejora nada; solo hace que cada pérdida pequeña se repita más veces.
> Boceto: barra de $3,619 (pérdida) con un tramo rojo oscuro de $2,327 (comisiones); contador de operaciones hasta 2,040. kb=in.

**[2:40 — Qué habrías vivido]** (pantalla: reloj y cuenta)
Ponte en el lugar de quien lo operó. Durante las dos primeras semanas, todo bien: la cuenta sube hasta 10,308. Y a partir de ahí, 457 días esperando una recuperación que no llega. Un Sharpe de menos 4.43, que es la ganancia por unidad de riesgo, dice que no fue mala suerte de una racha: la pérdida fue constante. Y la prueba de azar, con p de 0.78, no distingue al modelo de lanzar una moneda.
> Boceto: calendario que avanza rápido con la cuenta en rojo; el Sharpe −4.43 en rojo; moneda con «p = 0.78». kb=out.

**[3:12 — Con tu capital]** (pantalla: tarjeta «Con tu capital»)
Con 10,000 dólares, la cuenta terminó en 6,381 y comprar y esperar habría terminado en 9,775. Con 100,000, la tabla de ATLAS da menos 36,182 contra menos 2,237 de comprar y esperar.
> Boceto: tarjeta de capital con «Estrategia −$36,182» y «Comprar y esperar −$2,237»; selector $10,000 / $100,000.

**[3:30 — Ficha del experimento #1]** (pantalla: tarjeta con la URL)
Ficha del experimento 1. Estado: murió. Cifra clave: menos 36.2% fuera de muestra contra menos 2.2% de comprar y esperar, y una expectativa de menos 1.77 dólares por operación. Filtros que decidieron: costos, prueba de azar, PSR y comprar y esperar fallaron. Lección: sin ventaja, operar más es pagar más. Revísalo completo en atlas-lab-one.vercel.app/e/1.
> Boceto: tarjeta oscura con «#1 · MURIÓ», cifras clave y «atlas-lab-one.vercel.app/e/1» en grande; logo.

**[3:54 — Cierre]**
Todos los datos en atlas-lab-one.vercel.app, experimento 1. Contenido educativo, no es asesoría financiera. El trading no se promete: se prueba.
> Boceto: pantalla oscura con la frase de marca.

---

## SHORT (9:16, ≈ 45 s)

**[0-3 s]** «Tocó su máximo a las dos semanas. Luego, 457 días sin volver.»
> Boceto: curva que sube y cae; «10,308» blanco y «457 días» rojo con sacudida; b-roll de pantallas de bolsa, Ken Burns «in», overlay 0.6.

**[3-14 s]** «Es un modelo de machine learning que opera el euro-dólar cada hora. En 2023 cayó −22.4%, en 2024, otro −17.7%. Terminó con 6,381 de 10,000 dólares.»
> Boceto: dos barras rojas por año y contador final 6,381; Ken Burns «out».

**[14-27 s]** «Su número clave: la expectativa, lo que gana o pierde de media cada operación. Fue menos 1.77 dólares. Ganadoras, 0.12%; perdedoras, 0.14%.»
> Boceto: ruleta que se detiene en «−$1.77»; barras +0.12% y −0.14%; whoosh y flash blanco.

**[27-38 s]** «Hizo 2,040 operaciones y pagó 2,327 dólares en comisiones, el 23% de la cuenta. Sin ventaja, operar más es pagar más.»
> Boceto: contador 0→2,040 y monedas hasta $2,327; Ken Burns «in».

**[38-45 s]** «Dos semanas arriba, 457 días abajo. Experimento uno completo en el enlace. El video completo está en el canal. No es asesoría financiera.»
> Boceto: vuelve el pico con «10,308» y la caída en rojo (loop con el gancho); texto «Experimento #1 completo en el enlace» y logo.

---

## Descripción de YouTube (video largo)
https://atlas-lab-one.vercel.app/e/1?utm_source=youtube&utm_medium=video&utm_campaign=exp001-t3
Ficha del experimento #1 (ML XGBoost con triple barrera): estado murió · −36.2% fuera de muestra (comprar y esperar: −2.2%) · expectativa −1.77 dólares por operación · 2,040 operaciones y $2,327 en comisiones.
El camino de 10,000 dólares en una IA que opera el EUR/USD cada hora (mar-2023 a dic-2024): máximo de 10,308 dólares a las dos semanas, 457 de 466 días por debajo de ese máximo, y qué es la expectativa por operación.
Contenido educativo. No es asesoría financiera ni recomendación de inversión.

## Descripción del Short
https://atlas-lab-one.vercel.app/e/1?utm_source=youtube&utm_medium=short&utm_campaign=exp001-t3
Experimento #1 · murió · máximo de 10,308 dólares y final en 6,381. No es asesoría financiera.

Capítulos: 0:00 Gancho · 0:16 Qué experimento es · 0:31 El camino · 1:12 Qué es la expectativa · 1:38 Ganar un poco, perder un poco más · 2:12 El peaje · 2:40 Qué habrías vivido · 3:12 Con tu capital · 3:30 Ficha del experimento #1 · 3:54 Cierre

Etiquetas: expectativa por operación, drawdown, caída máxima, machine learning trading, XGBoost, EUR/USD, backtest, fuera de muestra, costos de trading, inteligencia artificial trading, ATLAS Lab, trading con datos

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

Notas: los 457 días son «días de la prueba» tal como los reporta el experimento (466 en total); el máximo y los retornos anuales salen de la curva de la serie. El Short cumple hook ≥ 4 y honestidad 5.

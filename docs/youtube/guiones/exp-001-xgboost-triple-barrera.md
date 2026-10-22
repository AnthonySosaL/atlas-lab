# Experimento #1 — ML XGBoost con triple barrera

Estado del guion: **BORRADOR — pendiente de aprobación**
Estado del experimento: **murió**
Serie: D (Machine learning en trading)
Datos usados: `experiments.json` (v=1: description, params, metrics, kpis, analysis, verdict, notes), `exp_details.json` (algo, filters), `series/20260607_151319_ml-xgboost-triple-barrier-v1.json` (curva 1 = estrategia, curva 2 = comprar y esperar) y la tabla «Con tu capital» de docs/youtube (fila 1). Las cifras con 10,000 dólares son el saldo final del propio experimento y de las curvas de series.

## Títulos (3 opciones)
1. Una IA operó el euro 2,040 veces: perdió −36.2%
2. Machine learning en trading: XGBoost contra el EUR/USD, con costos reales
3. Probé una IA que predice el euro hora a hora: p = 0.78, como lanzar una moneda

## Miniatura
Fondo negro de la marca. Texto enorme: «LA IA PERDIÓ» (blanco; «PERDIÓ» en rojo de marca). A la derecha, «−36.2%» en rojo con la curva real de la serie 1 cayendo en diagonal; detrás, muy atenuada, la curva 2 casi plana. Icono simple de cerebro/chip a la izquierda. Logo ATLAS esquina inferior derecha.

---

## VIDEO LARGO (16:9, ≈ 5:57 min — 4–6 min: experimento de una sola idea y pocas cifras)
Ritmo visual: algo cambia en pantalla cada 2-3 s; b-roll real detrás, Ken Burns alterno, subtítulos karaoke, whoosh + flash en cada corte, golpe de bass solo en el momento clave.

**[0:00 — Gancho]** (pantalla: «2,040 operaciones» y «−36.2%» en rojo)
Una inteligencia artificial operó el euro-dólar 2,040 veces. Perdió −36.2% de una cuenta de 10,000 dólares. Comprar y esperar, sin hacer nada, perdió −2.2%. Esta fue mi primera prueba seria de machine learning en ATLAS Lab. Le di datos de precio y volumen, un modelo muy popular y costos reales, y la probé solo con datos que nunca había visto. El resultado fue indistinguible de lanzar una moneda. Te cuento cómo se hizo y por qué falló.
> Boceto: contador de operaciones hasta 2,040; la curva real (series, curva 1) se dibuja cayendo hasta 6,381 mientras la curva 2 (rojo tenue) casi no se mueve. Sacudida de pantalla al llegar a −36.2%.

**[0:32 — Presentación]** (pantalla: rótulo «Experimento #1 · ML XGBoost con triple barrera»)
Este es el experimento #1 de ATLAS Lab: ML XGBoost con triple barrera. Todos los resultados están en la página del experimento.
> Boceto: rótulo grande «EXPERIMENTO #1 · ML XGBoost con triple barrera» sobre velas de fondo con overlay oscuro; abajo, la URL pequeña «atlas-lab-one.vercel.app/e/1». Ken Burns «out».

**[0:42 — La idea]** (pantalla: esquema de una vela con tres barreras)
El modelo se llama XGBoost: muchos árboles de decisión pequeños que votan entre todos. En cada vela de una hora debe decidir una de tres cosas: comprar, vender en corto o quedarse fuera. Para enseñarle, uso un método de López de Prado, la triple barrera. Después de cada vela del pasado miro qué toca primero el precio: una ganancia de 2 ATR, una pérdida de 2 ATR —el ATR es el rango medio de movimiento, una medida de volatilidad— o el límite de 24 horas. Si toca primero la ganancia, esa vela era buena para comprar; si toca primero la pérdida, era buena para vender; si no pasa nada, era mejor esperar. Mirar hacia adelante solo sirve para etiquetar los datos de entrenamiento; cuando el modelo opera, no ve el futuro.
> Boceto: vela dibujada con tres líneas (verde arriba «+2 ATR», roja abajo «−2 ATR», vertical «24 h»); animación de un precio que toca una de ellas y etiqueta la vela «COMPRA / VENTA / FUERA».

**[1:35 — Cómo lo probé]** (pantalla: línea de tiempo 2019–2024 partida en 70% / 30%)
Aquí está lo que importa. No vale probar un modelo con los mismos datos con los que aprendió, porque entonces solo demuestras que tiene buena memoria. Dividí 2019-2024 en orden cronológico: 70% para entrenar y 30% para probar, con un hueco de 24 velas entre ambos, el embargo, para que no se filtre información de un lado al otro. Solo se opera la parte de prueba: 11,200 velas, de marzo de 2023 a diciembre de 2024. Eso se llama fuera de muestra: datos que el modelo nunca vio. Las variables son de precio y volumen, solo del pasado; el modelo usa 400 árboles de profundidad 4. Los costos son 0.7 pips de comisión más deslizamiento en cada operación. Y tres chequeos: una prueba de azar con 500 permutaciones, el PSR y la comparación con comprar y esperar.
> Boceto: barra de tiempo con tramo verde «entrena 70%», hueco gris «embargo 24 velas» y tramo azul «prueba 30%: mar-2023 → dic-2024 · 11,200 velas». Debajo, tarjeta con `params_view` (400 árboles, profundidad 4, tasa 0.05, barreras 2×ATR/2×ATR).

**[2:31 — Resultados]** (pantalla: tarjetas KPI)
Resultado: −36.2%. La cuenta de 10,000 terminó en 6,381. El Sharpe, que mide cuánto ganas por cada unidad de riesgo asumido, fue −4.43; un Sharpe tan negativo significa que pierde de forma constante, no por mala suerte en una racha. La peor caída fue −38.3% y duró 457 de los 466 días de la prueba: prácticamente nunca se recuperó. Fueron 2,040 operaciones, con 46.4% de aciertos y un factor de beneficio de 0.72, es decir, 0.72 dólares ganados por cada dólar perdido.
> Boceto: 8 tarjetas de `kpis` en cascada (retorno −36.2%, comprar y esperar −2.2%, Sharpe −4.43, drawdown −38.3%, 2,040 operaciones, 46.4%, costos $2,327, p 0.78); la curva 1 con el tramo del drawdown sombreado en rojo y una cota «457 días».

**[3:05 — Los filtros]** (pantalla: checklist con ✓ y ✗)
Pasó una sola prueba: la lógica, es decir, una división limpia y variables sin mirar el futuro. Falló las demás. Costos: Sharpe neto de −4.43 y 2,327 dólares en comisiones. Azar: barajo la señal 500 veces y miro cuántas versiones barajadas rinden igual o mejor; el p fue 0.78, o sea que la mayoría lo hace, y el modelo no se distingue del azar. PSR, la probabilidad de que el Sharpe real sea mayor que cero: 0.19, cuando se pide más de 0.95. Y contra comprar y esperar: −36.2% frente a −2.2%. El Deflated Sharpe, el ajuste por el número de pruebas, no se aplicó en este experimento; solo el PSR.
> Boceto: checklist de `filters`: lógica ✓ verde; costos ✗, azar ✗ (p=0.78), PSR ✗ (0.19 < 0.95), comprar y esperar ✗ en rojo; Deflated Sharpe «no aplicado» en gris. Moneda girando junto a «p = 0.78» y sello ✕ rojo al final.

**[3:50 — Por qué falla]** (pantalla: operaciones ganadoras contra perdedoras)
El propio resultado lo explica: con variables simples de precio y volumen, en velas de una hora, no apareció señal de dirección. Acierta el 46.4% de las veces, pero cuando gana, gana 0.12% de media, y cuando pierde, pierde 0.14%: con eso solo ya pierde. Y encima están los costos: 2,327 dólares, el 23% de la cuenta. Cuando un modelo no tiene ventaja, operar más no lo arregla; cada operación solo suma un peaje. Con 2,040 operaciones, el peaje se come la cuenta. Es una lección temprana y dura: en este experimento, el modelo no encontró nada que predecir.
> Boceto: dos barras: ganadora media +0.12% (verde) y perdedora media −0.14% (roja); a su lado una cuenta de $10,000 de la que se desprende un trozo rojo «23% = $2,327»; texto «Sin ventaja, operar más = pagar más».

**[4:31 — Con tu capital]** (pantalla: tarjeta «Con tu capital»)
Con 10,000 dólares, la cuenta terminó en 6,381 y comprar y esperar habría terminado en 9,775. Con 100,000, la tabla de ATLAS da menos 36,182 dólares, frente a menos 2,237 de comprar y esperar en las mismas fechas. Aun el mercado, sin hacer nada, perdió poco; el modelo perdió más de un tercio de la cuenta.
> Boceto: tarjeta de capital con «Estrategia −$36,182» (rojo) y «Comprar y esperar −$2,237» (rojo tenue) sobre las dos curvas reales; selector $10,000 / $100,000.

**[4:54 — Ficha del experimento #1]** (pantalla: tarjeta con la URL)
Ficha del experimento 1. Estado: murió. Cifra clave: menos 36.2% fuera de muestra, frente a menos 2.2% de comprar y esperar, con 2,040 operaciones y 2,327 dólares en comisiones. Filtros que decidieron: la prueba de azar dio un p de 0.78, y los costos y comprar y esperar fallaron. Lección: con variables simples de precio y volumen en velas de una hora no apareció señal de dirección. Revísalo completo en atlas-lab-one.vercel.app/e/1.
> Boceto: tarjeta oscura con el estado del experimento #1 arriba, las cifras clave en el centro y «atlas-lab-one.vercel.app/e/1» en grande al pie; las líneas de la ficha entran una a una; logo ATLAS.

**[5:21 — Conclusión y cierre]**
Veredicto: no sirvió. −36.2% fuera de muestra, un Sharpe de −4.43 y un resultado que no se distingue del azar. La lección es temprana y clara: con variables simples de precio y volumen no hay señal de dirección a una hora, y escribir «machine learning» en el nombre no crea una ventaja que no existe. En los siguientes experimentos pruebo otras formas de usar la misma herramienta. Todos los datos en atlas-lab-one.vercel.app/e/1. Contenido educativo, no es asesoría financiera. El trading no se promete: se prueba.
> Boceto: sello ✕ rojo sobre «XGBoost»; frase de marca, logo y URL.

---

## SHORT (9:16, ≈ 49 s)
Fórmula visual: b-roll vertical + overlay oscuro 0.6, Ken Burns alternando in/out, subtítulos karaoke en MAYÚSCULAS con las cifras en rojo, whoosh + flash en cada corte, golpe de bass + sacudida solo en el 0-3 s; ticker arriba.

**[0-3 s]** «Una IA operó el euro 2,040 veces: −36.2%.»
> Boceto: texto gigante «2,040 operaciones» y «−36.2%» en rojo; contador 0→2,040 y cifra roja con sacudida; b-roll de pantallas de datos, Ken Burns «in».
**[3-12 s]** «Usé XGBoost, un modelo de machine learning muy popular, para predecir cada hora si el euro subía o bajaba. Lo probé solo con datos que nunca vio, con costos reales.»
> Boceto: línea de tiempo con el tramo «prueba» iluminándose; Ken Burns «out»; karaoke con «NUNCA VIO» en rojo.
**[12-24 s]** «Entre marzo de 2023 y diciembre de 2024, la cuenta cayó −36.2%, con un Sharpe de −4.43 y una caída máxima de −38.3%. Comprar y esperar perdió solo −2.2%.»
> Boceto: curva real cayendo; barras comparativas −36.2% contra −2.2%; whoosh y flash blanco.
**[24-36 s]** «Acertó el 46.4% de las veces, pero pagó 2,327 dólares en comisiones, el 23% de la cuenta. Y la prueba de azar dio un p de 0.78: su resultado no se distingue de lanzar una moneda.»
> Boceto: monedas cayendo sobre la cuenta hasta $2,327; moneda girando junto a «p = 0.78»; Ken Burns «in».
**[36-49 s]** «Con variables simples de precio y volumen no hay señal de dirección a una hora. 2,040 operaciones y el resultado de una moneda… con comisiones. El video completo está en el canal. Experimento #1 completo en el enlace. No es asesoría financiera.»
> Boceto: vuelve «2,040 operaciones» tachado con sello ✕ (loop con el gancho); textos «Video completo en el canal» y «Experimento #1 completo en el enlace»; logo.

## Descripción de YouTube (video largo)
https://atlas-lab-one.vercel.app/e/1?utm_source=youtube&utm_medium=video&utm_campaign=exp001-t1
Ficha del experimento #1 (ML XGBoost con triple barrera): estado murió · −36.2% fuera de muestra frente a −2.2% de comprar y esperar · Sharpe −4.43 · p de azar 0.78.
Entrené un modelo de machine learning (XGBoost con triple barrera, López de Prado) para predecir la dirección del EUR/USD en velas de 1 hora y lo probé fuera de muestra (mar-2023 a dic-2024) con costos reales: −36.2%, Sharpe −4.43, p de azar 0.78. Comprar y esperar: −2.2%.
Contenido educativo. No es asesoría financiera ni recomendación de inversión.

## Descripción del Short
https://atlas-lab-one.vercel.app/e/1?utm_source=youtube&utm_medium=short&utm_campaign=exp001-t1
Experimento #1 · murió · −36.2% fuera de muestra frente a −2.2% de comprar y esperar. No es asesoría financiera.

Capítulos: 0:00 Gancho · 0:32 Presentación · 0:42 La idea · 1:35 Cómo lo probé · 2:31 Resultados · 3:05 Los filtros · 3:50 Por qué falla · 4:31 Con tu capital · 4:54 Ficha del experimento #1 · 5:21 Conclusión y cierre

Etiquetas: machine learning trading, XGBoost, triple barrera, López de Prado, EUR/USD, backtest, fuera de muestra, inteligencia artificial trading, estrategia de trading, Sharpe ratio, ATLAS Lab, trading con datos

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

Notas: la explicación de la triple barrera es lo más denso del largo; el boceto de la vela con tres líneas está para sostenerla. El Short cumple hook ≥ 4 y honestidad 5.

## Otros temas de este experimento
Cada tema = video largo + Short, con su propia ficha del experimento. Todos en estado BORRADOR — pendiente de aprobación.
- Tema 1: este archivo — ML XGBoost con triple barrera
- Tema 2: [exp-001-t2-prueba-del-azar.md](exp-001-t2-prueba-del-azar.md) — la prueba del azar (500 barajadas y p = 0.78)
- Tema 3: [exp-001-t3-camino-y-expectativa.md](exp-001-t3-camino-y-expectativa.md) — el camino de la cuenta y la expectativa por operación
- Tema 4: [exp-001-t4-tres-ias-perdida-por-operacion.md](exp-001-t4-tres-ias-perdida-por-operacion.md) — tres IAs, la misma pérdida por operación (cubre #1, #2 y #3)

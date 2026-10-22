# Experimento #6 — ORB de la sesión Londres-Nueva York

Estado del guion: **BORRADOR — pendiente de aprobación**
Estado del experimento: **murió**
Serie: B (Estrategias famosas, puestas a prueba), por afinidad; los #4–#8 no figuran en plan-series.md
Datos usados: `experiments.json` (v=6: description, params, metrics, kpis, analysis, verdict, notes), `exp_details.json` (algo, filters), `series/20260607_205310_orb-sesion-londres-ny-v6.json` (curva 1 = estrategia, curva 2 = comprar y esperar), tabla «Con tu capital» de docs/youtube (fila 6) y, para el bloque del espejo, la cifra bruta y neta del #7. Las cifras con 10,000 dólares son las de la tabla de 100,000 divididas entre 10.
Nota de datos: el experimento no reporta el Sharpe bruto ni aplica prueba de azar; el guion lo dice tal cual y por eso el largo es corto y su rúbrica queda por debajo de 4.0.

## Títulos (3 opciones)
1. Acierta el 49.9% de las veces y pierde −19.1%: la ruptura del rango asiático
2. ORB en EUR/USD con velas de 1 minuto: 1,553 operaciones, Sharpe −0.96
3. Probé la ruptura del rango de apertura de Londres y Nueva York (2019-2024)

## Miniatura
Fondo negro de la marca. Texto grande: «ACIERTA, PIERDE» (blanco; «PIERDE» en rojo de marca). Debajo, una moneda al aire con «49.9%» y a su lado «−19.1%» en rojo. De fondo, tenue, la curva real de la serie 1 (cae) sobre un recuadro de rango horizontal. Logo ATLAS esquina inferior derecha.

---

## VIDEO LARGO (16:9, ≈ 4:14 min — experimento corto, con menos datos que otros)
Ritmo visual: algo cambia en pantalla cada 2-3 s; b-roll real detrás, Ken Burns alterno, subtítulos karaoke, whoosh + flash en cada corte, golpe de bass solo en el momento clave.

**[0:00 — Gancho]** (pantalla: moneda con «49.9%» y cifra roja «−19.1%»)
Acierta el 49.9% de las veces: casi una moneda al aire. Y aun así perdió −19.1% de una cuenta de 10,000 dólares. Su Sharpe fue −0.96; el de simplemente comprar y esperar, −0.21. Esta es la ruptura del rango de apertura de Londres y Nueva York, una estrategia clásica de trading intradía, probada con velas de un minuto. Y es un buen ejemplo de por qué acertar la mitad de las veces no basta.
> Boceto: moneda que gira y cae en «49.9%»; la cuenta de $10,000 se encoge en la curva real (series, curva 1) hasta −19.1% con sacudida de pantalla.

**[0:31 — La idea]** (pantalla: reloj de 24 horas con sesiones)
ORB significa Opening Range Breakout: la ruptura del rango de apertura. Piensa en una carrera: durante la madrugada marco una línea de salida, y espero a ver quién la cruza primero. Concretamente, marco el rango de precios de la sesión asiática, de las 00:00 a las 07:00 UTC. Cuando abren Londres y Nueva York, entre las 07:00 y las 16:00 UTC, espero la primera ruptura de ese rango y entro en esa dirección. Si rompe hacia arriba, compro; si rompe hacia abajo, vendo en corto. La lógica es que cuando entra mucho dinero a la vez, el movimiento que empieza tiende a continuar.
> Boceto: reloj con arco asiático (00–07 UTC) sombreado y arco de Londres/Nueva York (07–16 UTC); en el gráfico, caja del rango y una flecha que lo rompe, con etiqueta «COMPRA».

**[1:13 — Las reglas]** (pantalla: tarjeta de parámetros)
Una sola operación al día. El stop está en el lado opuesto del rango: si el precio vuelve a cruzarlo, salgo con pérdida. El objetivo de ganancia es 1 vez el tamaño del rango. Y si no pasa ninguna de las dos cosas, salgo al cierre de la sesión. Euro-dólar con velas de un minuto, de 2019 a 2024, con una comisión de 0.007% y un deslizamiento de 0.002%, pagados a la entrada y a la salida. Todos los parámetros están fijados de antemano, sin optimizar: no probé otros horarios ni otros objetivos para quedarme con los que mejor salieran.
> Boceto: tarjeta `params_view` (Rango asiático 00:00–07:00 UTC · Sesión 07:00–16:00 UTC · Take-profit 1× · Comisión 0.007% · Deslizamiento 0.002%) con tick sonoro; sello «Parámetros fijados de antemano».

**[1:54 — Resultados]** (pantalla: tarjetas KPI)
Resultado: 1,553 operaciones. Retorno total −19.1%. Sharpe −0.96. Peor caída −20.4%. Acierta el 49.9% y el factor de beneficio es 0.87: ganó 0.87 dólares por cada dólar que perdió. El PSR, la probabilidad de que el Sharpe real sea positivo, es 0.009, prácticamente cero. Comprar y esperar el euro-dólar tuvo un Sharpe de −0.21: también fue una época difícil para el euro, pero la estrategia lo hizo bastante peor.
> Boceto: `kpis` en cascada con el contador de operaciones hasta 1,553; la curva real de la estrategia cayendo hasta su mínimo en octubre de 2024 frente a la curva 2 que también baja pero menos.

**[2:22 — Por qué pierde (y qué no sé)]** (pantalla: lo que se ve y lo que falta)
El propio experimento lo resume así: en forex, el precio no siguió la ruptura al abrir Londres o Nueva York. Cuando aciertas la mitad de las veces, para ganar necesitas que cada ganancia sea mayor que cada pérdida. Con un factor de beneficio de 0.87, ocurre lo contrario. Y cada una de las 1,553 operaciones paga costos. Pero hay algo que este experimento no mide: el Sharpe antes de costos. No puedo separar cuánto de la pérdida son costos y cuánto es que la ruptura no funciona. Tampoco se aplicó la prueba de azar. Prefiero decírtelo antes que inventar una explicación.
> Boceto: checklist de `filters`: parámetros ✓; costos incluidos pero «Sharpe bruto no reportado» en ámbar; PSR ✗ (0.009); comprar y esperar ✗; prueba de azar «no aplicado» en gris.

**[3:04 — Lo que motivó el #7]** (pantalla: espejo)
Esa duda motivó probar lo contrario en el experimento 7: la misma señal, pero apostando contra la ruptura. Allí sí se midió antes de costos: Sharpe de +0.20, que después de pagar las mismas 1,553 operaciones se convirtió en −1.99. Es una lección que atraviesa este bloque de experimentos: una ventaja pequeña no sobrevive a operar todos los días. Si te interesa el detalle, lo cuento en el siguiente video.
> Boceto: pantalla dividida: izquierda «#6 ruptura: −0.96» y derecha «#7 reversión: +0.20 → −1.99»; flecha de espejo en el centro.

**[3:33 — Con tu capital]** (pantalla: tarjeta «Con tu capital»)
Con 10,000 dólares serían menos 1,947 para la estrategia, frente a menos 848 de comprar y esperar. Con 100,000, la tabla de ATLAS da menos 19,468 contra menos 8,482; en esas fechas el euro-dólar también bajó.
> Boceto: tarjeta de capital con ambas cifras en rojo; la curva 1 más abajo que la 2; selector $10,000 / $100,000.

**[3:48 — Conclusión y cierre]**
Veredicto: no sirvió. En esta prueba, la ruptura no funcionó y perdió −19.1% con un Sharpe de −0.96, peor que sin estrategia. Acertar la mitad de las veces no alcanza si las pérdidas pesan más que las ganancias y cada operación paga costos. Todos los datos en atlas-lab-one.vercel.app, experimento 6. Contenido educativo, no es asesoría financiera. El trading no se promete: se prueba.
> Boceto: sello ✕ rojo sobre el rango roto; frase de marca, logo y URL.

---

## SHORT (9:16, ≈ 46 s)
Fórmula visual: b-roll vertical + overlay oscuro 0.6, Ken Burns alternando in/out, subtítulos karaoke en MAYÚSCULAS con las cifras en rojo, whoosh + flash en cada corte, golpe de bass + sacudida solo en el 0-3 s; ticker arriba.

**[0-3 s]** «Acierta el 49.9% de las veces y pierde −19.1%.»
> Boceto: texto gigante «49.9% DE ACIERTOS» y «−19.1%» rojo; moneda que gira; cifra roja con sacudida; b-roll de velas del euro, Ken Burns «in».
**[3-12 s]** «Es la ruptura del rango de apertura. Marco el rango de la madrugada asiática y, cuando Londres o Nueva York lo rompe, entro en esa dirección.»
> Boceto: gráfico con la caja del rango y la flecha de ruptura; Ken Burns «out»; karaoke con «RUPTURA» en rojo.
**[12-24 s]** «Una operación al día, en el euro-dólar, con velas de un minuto, de 2019 a 2024. Fueron 1,553 operaciones, con un Sharpe de −0.96 y una caída máxima de −20.4%.»
> Boceto: contador de operaciones hasta 1,553; curva real cayendo; whoosh y flash blanco.
**[24-36 s]** «El factor de beneficio fue 0.87: ganó 0.87 dólares por cada dólar que perdió. Comprar y esperar el euro tuvo un Sharpe de −0.21, y el PSR de la estrategia fue 0.009.»
> Boceto: barras de Sharpe −0.96 contra −0.21; cifra 0.87 pulsando; Ken Burns «in».
**[36-46 s]** «Acertar la mitad de las veces no basta si cada operación paga costos y las pérdidas pesan más. El video completo está en el canal. No es asesoría financiera.»
> Boceto: vuelve la moneda del inicio, cae en «49.9%» y se tiñe de rojo con «−19.1%» (loop con el gancho); texto «Video completo en el canal» y logo.

## Descripción (YouTube)
Probé la ruptura del rango de apertura (ORB) de la sesión Londres-Nueva York sobre el EUR/USD con velas de 1 minuto, 2019-2024: una operación al día, parámetros fijos y costos. Resultado: −19.1%, Sharpe −0.96, 1,553 operaciones, aciertos 49.9%.
Todos los datos: https://atlas-lab-one.vercel.app (experimento #6)
Contenido educativo. No es asesoría financiera ni recomendación de inversión.

Capítulos: 0:00 Gancho · 0:31 La idea · 1:13 Las reglas · 1:54 Resultados · 2:22 Por qué pierde (y qué no sé) · 3:04 Lo que motivó el #7 · 3:33 Con tu capital · 3:48 Conclusión y cierre

Etiquetas: ORB, opening range breakout, ruptura de rango, sesión de Londres, sesión de Nueva York, EUR/USD, trading intradía, backtest, forex, Sharpe ratio, ATLAS Lab, trading con datos

## Rúbrica (autoevaluación, 1–5)
| Criterio | Short | Largo |
|---|---|---|
| hook_0_3s | 5 | 4 |
| ritmo | 4 | 4 |
| promesa_cumplida | 5 | 4 |
| potencial_loop | 4 | 3 |
| claridad_no_traders | 4 | 4 |
| honestidad_atlas | 5 | 5 |
| audio | 4 | 3 |
| cta | 4 | 4 |
| **Promedio** | **4.38** | **3.88** |

Notas: el largo queda por debajo de 4.0 porque el experimento no reporta el Sharpe bruto ni la prueba de azar; recomendación: producir primero el Short y unir el largo con el del #7 («ORB y su espejo») en una sola pieza. El Short cumple hook ≥ 4 y honestidad 5.

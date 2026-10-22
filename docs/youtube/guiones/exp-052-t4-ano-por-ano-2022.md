# Experimento #52 — Volatilidad objetivo (control de drawdown) · Tema 4: año por año, el único que sirvió también perdió en 2022

Estado del guion: **BORRADOR — pendiente de aprobación**
Tema 4 de 4 del experimento #52. Qué aporta frente a los otros temas: el tema 1 explica por qué sirvió, el tema 2 pone el dinero final del x2 fijo al lado y el tema 3 compara con una técnica sin IA; este mira la curva año por año, el valle de 2022 y el punto de partida de la medición, para enseñar qué quiere decir «controlar el riesgo» (no es evitar las pérdidas).
Estado del experimento: **sirvió** (el único de los 91), como control de riesgo, no como fuente de ganancia · Serie: E ("Gestión de riesgo: lo poco que se sostuvo") · Relacionado: #51, #53, #55, #57
Datos usados: `experiments.json` (v=52: verdict, analysis, notes, metrics, kpis, params_view, capital.note, period), `exp_details.json` (v52: algo, filters), `series/extra-v52.json` (curva 0 = vol-targeting, 1 = apalancamiento fijo 2x, 2 = comprar y esperar; valores de fin de año y fechas de los valles derivados de las curvas) y la tabla «Con tu capital» (`docs/youtube/*-capital.md`) (fila #52).

## Títulos (3 opciones)
1. Año por año: el único que sirvió también perdió en 2022
2. Controlar el riesgo no evita pérdidas: $143,855 a $124,100
3. Volatilidad objetivo: el valle de 2022, mes por mes

## Miniatura (1280×720)
Fondo `#09090b`. Cinco barras anuales (2020 a 2024) de una curva; la de 2022 baja en rojo `#e11d2a` con un círculo. Texto enorme blanco: "TAMBIÉN CAYÓ". Texto pequeño verde `#22c55e`: "SIRVIÓ". Logo ATLAS esquina superior derecha. (No repite el título 1.)

---

## VIDEO LARGO (16:9, ≈ 5 min)

**[0:00 — Gancho]** (pantalla: barras anuales de 2020 a 2024, la de 2022 bajando)
El único experimento que sirvió de 91 también tuvo un mal año. Al terminar 2021, la cuenta de volatilidad objetivo valía $143,855 por cada $100,000. Al terminar 2022, $124,100. Controlar el riesgo no es evitar las pérdidas.
> BOCETO: curva real de la curva 0 de `series/extra-v52.json` con marcadores de fin de año; contador $143,855 → $124,100 en rojo con sacudida de pantalla. Subtítulo karaoke con "TAMBIÉN CAYÓ" en rojo.

**[0:15 — De qué experimento hablamos]** (pantalla: rótulo con el número y el nombre)
Este es el experimento #52 de ATLAS Lab: Volatilidad objetivo (control de drawdown). Todos los resultados están en la página del experimento.
> BOCETO: rótulo «EXPERIMENTO #52 · Volatilidad objetivo (control de drawdown)» con whoosh.

**[0:30 — La técnica en 30 segundos]** (pantalla: palanca que sube y baja)
Volatilidad objetivo: en cada activo, la posición se ajusta para que el riesgo se mantenga cerca de un objetivo de 15% anual. Si el mercado se agita, reduce; si se calma, aumenta, con un tope de 4 veces. Siete activos: S&P 500, Nasdaq 100, DAX, FTSE 100, WTI, Brent y oro. La comparo con un apalancamiento fijo de 2 y con comprar y esperar a 1x. La medición empieza el 18 de marzo de 2020, el primer día con un pronóstico fuera de muestra, es decir, hecho por un modelo que no vio ese día.
> BOCETO: palanca animada; 7 chips de activos; tres curvas que parten del 18-mar-2020.

**[1:10 — Los fines de año]** (pantalla: tabla animada)
Con $100,000, así termina cada año. Volatilidad objetivo: $124,823 en 2020, $143,855 en 2021, $124,100 en 2022, $141,664 en 2023 y $160,839 en 2024. Apalancamiento fijo de 2: $239,935, $375,348, $292,517, $354,249 y $446,193. Comprar y esperar: $161,041, $203,603, $183,282, $203,155 y $229,383. Los tres bajan en 2022 y suben en 2023 y 2024.
> BOCETO: tabla de 3 filas × 5 columnas que se rellena columna a columna con tick; la columna 2022 en rojo.
| Año | Volatilidad objetivo | Apalancamiento fijo x2 | Comprar y esperar |
|---|---|---|---|
| 2020 | $124,823 | $239,935 | $161,041 |
| 2021 | $143,855 | $375,348 | $203,603 |
| 2022 | $124,100 | $292,517 | $183,282 |
| 2023 | $141,664 | $354,249 | $203,155 |
| 2024 | $160,839 | $446,193 | $229,383 |

**[1:35 — El valle de 2022]** (pantalla: tres valles de drawdown con fechas)
Un valle de drawdown es el tramo entre un pico y su punto más bajo. El de la volatilidad objetivo empieza el 16 de noviembre de 2021, con $147,839, y termina el 2 de octubre de 2022, con $119,442: −19.2%, la caída máxima del experimento. El de comprar y esperar empieza el 25 de marzo de 2022, con $222,479, y termina el 30 de septiembre, con $173,826: −21.9%. El del apalancamiento fijo de 2, también desde el 25 de marzo, baja de $445,374 a $265,711: −40.3%.
> BOCETO: tres valles de drawdown de las curvas 0, 2 y 1, normalizados a su pico, con las fechas y cifras en pantalla; el de −19.2% resaltado en verde, los otros dos en gris y rojo.

**[2:15 — Qué controla y qué no]** (pantalla: dos columnas)
Esto es lo que sí hace la técnica: reduce la peor caída, de −40.3% a −19.2% frente al x2 fijo, y de −21.9% a −19.2% frente a comprar y esperar, una mejora modesta. Esto es lo que no hace: no evita que la cuenta baje en un mal año, ni te hace ganar más. Su Sharpe, la ganancia por unidad de riesgo, es de 0.79, y el de comprar y esperar, de 0.93. Por eso se llama control de riesgo y no estrategia de ganancia.
> BOCETO: columna «Sí hace» (recorta la peor caída, −40.3% → −19.2%) con ✓ y columna «No hace» (evitar pérdidas, ganar más) con ✕; Sharpe 0.79 contra 0.93.

**[2:55 — El punto de partida]** (pantalla: línea de tiempo desde marzo de 2020)
Una advertencia sobre lo que se midió. Todo parte del 18 de marzo de 2020 y llega a finales de 2024: un solo tramo, con una subida fuerte de los mercados al principio. El modelo necesita historia para entrenarse, así que no hay medición anterior. Además, la volatilidad que logró la cartera fue de 11.0%, no los 15% del objetivo: el control se queda por debajo del objetivo. Y no se aplicó el Deflated Sharpe, porque es una técnica de riesgo, no una señal de retorno.
> BOCETO: línea de tiempo con el tramo anterior a marzo de 2020 en gris («sin medición») y el tramo medido en blanco; tarjetas «11.0% real, 15% objetivo» y «Deflated Sharpe: no aplica».

**[3:35 — Con tu capital]** (pantalla: tarjeta "Con tu capital")
Con $10,000, la volatilidad objetivo termina en +$6,084. Con $100,000, en +$60,839. Comprar y esperar la cesta a 1x en las mismas fechas, +$12,938 y +$129,383. La curva usa apalancamiento de hasta 4 veces: las ganancias y las pérdidas se amplifican en la misma proporción. Es lo que pasó en la simulación, no una promesa.
> BOCETO: tarjeta de capital con dos filas y las curvas 0 y 2 al fondo; aviso «Simulación con apalancamiento variable, no es una promesa».

**[4:00 — Tres preguntas antes de confiar en un control de riesgo]** (pantalla: tres tarjetas)
Tres preguntas. Una: ¿cuánto bajó en su peor año, no solo en su peor momento? Aquí, de $143,855 a $124,100 en 2022. Dos: ¿contra qué se compara, el x2 fijo o comprar y esperar? Aquí, −40.3% y −21.9%. Tres: ¿cuánto tramo midió? Aquí, de marzo de 2020 a finales de 2024.
> BOCETO: tres tarjetas con iconos (calendario, balanza, regla) con las cifras de la ficha.

**[4:25 — Ficha del experimento #52]** (pantalla: tarjeta con la URL)
Ficha del experimento 52. Estado: sirvió, el único de 91, como control de riesgo. Cifra clave: caída máxima de −19.2% contra −40.3% del x2 fijo, con Sharpe de 0.79; en 2022 la cuenta bajó de $143,855 a $124,100. Filtro que decidió: pronóstico fuera de muestra y recorte de la caída máxima. Lección: controlar el riesgo no evita las pérdidas. Revísalo completo en atlas-lab-one.vercel.app/e/52.
> BOCETO: tarjeta «FICHA · EXPERIMENTO #52» con Estado · Cifra clave · Filtro que decidió · Lección, y la URL `atlas-lab-one.vercel.app/e/52` en grande.

**[4:50 — Cierre]**
Contenido educativo, no es asesoría financiera. El trading no se promete: se prueba.
> BOCETO: fundido a la frase de marca en blanco sobre negro; logo ATLAS.

---

## SHORT (9:16, ≈ 42 s) — "También perdió en 2022"
Título del Short: El único que sirvió… también perdió en 2022 #Shorts

**[0-3 s]** "El único experimento que sirvió, de 91, también perdió en 2022."
> BOCETO: B-roll vertical de bolsa con overlay 0.6; barras anuales con la de 2022 en rojo; golpe de bajo y sacudida.

**[3-14 s]** "Volatilidad objetivo: si el mercado se agita, reduces la posición. Siete activos, desde marzo de 2020, con cien mil dólares."
> BOCETO: palanca que sube y baja; chips de activos. Ken Burns hacia dentro.

**[14-27 s]** "Fin de 2021: $143,855. Fin de 2022: $124,100. Su peor caída fue de −19.2%, entre noviembre de 2021 y octubre de 2022."
> BOCETO: contadores que cambian con tick; valle de drawdown en rojo con fechas; flash al cambio de escena.

**[27-35 s]** "Frente al x2 fijo, −40.3%. Pero controlar el riesgo no es evitar las pérdidas ni ganar más."
> BOCETO: dos valles (−19.2% y −40.3%); rótulo «RIESGO, NO GANANCIA».

**[35-42 s]** "Sirvió… y también cayó. Experimento 52 completo en el enlace; el video completo está en el canal. No es asesoría financiera."
> BOCETO: vuelven las barras con 2022 en rojo (loop con el primer cuadro); abajo «Experimento #52 completo en el enlace»; texto pequeño «El trading no se promete: se prueba.»

---

## Descripción (YouTube) — video largo
https://atlas-lab-one.vercel.app/e/52?utm_source=youtube&utm_medium=video&utm_campaign=exp052-t4
Ficha del experimento #52 (Volatilidad objetivo, control de drawdown): sirvió, el único de 91, como control de riesgo · caída máxima −19.2% contra −40.3% del x2 fijo · Sharpe 0.79 contra 0.93 · en 2022 la cuenta bajó de $143,855 a $124,100.
La curva año por año, el valle de 2022 (16-nov-2021 a 2-oct-2022) y el punto de partida de la medición (18-mar-2020).
Contenido educativo. No es asesoría financiera ni recomendación de inversión.

## Descripción (YouTube) — Short
https://atlas-lab-one.vercel.app/e/52?utm_source=youtube&utm_medium=short&utm_campaign=exp052-t4
Experimento #52 (Volatilidad objetivo): sirvió como control de riesgo · caída máxima −19.2% contra −40.3% del x2 fijo · en 2022, de $143,855 a $124,100. Video completo en el canal. No es asesoría financiera.

## Capítulos
0:00 Gancho · 0:15 De qué experimento hablamos · 0:30 La técnica en 30 segundos · 1:10 Los fines de año · 1:35 El valle de 2022 · 2:15 Qué controla y qué no · 2:55 El punto de partida · 3:35 Con tu capital · 4:00 Tres preguntas antes de confiar en un control de riesgo · 4:25 Ficha del experimento #52 · 4:50 Cierre

## Etiquetas
volatilidad objetivo, drawdown, 2022, gestión de riesgo, control de riesgo, curva de capital, apalancamiento, Sharpe ratio, backtest, trading con datos, ATLAS Lab, estrategia que sirvió

## Rúbrica (autoevaluación, escala 1-5)
| Criterio | Nota | Por qué |
|---|---|---|
| hook_0_3s | 5 | Contradicción «el único que sirvió también perdió» con dos cifras reales en pantalla |
| ritmo | 4 | Tabla y valles cambian cada 2–3 s; el bloque de fines de año es denso |
| promesa_cumplida | 5 | Promete el año malo y muestra fechas y cifras del valle |
| potencial_loop | 4 | El final vuelve a las barras con 2022 en rojo |
| claridad_no_traders | 4 | Explica volatilidad objetivo, valle de drawdown, Sharpe y fuera de muestra |
| honestidad_atlas | 5 | Dice que no evita pérdidas, que el control queda en 11.0% y que la medición es un solo tramo desde marzo de 2020 |
| audio | 4 | Voz por clonar; un golpe de bajo |
| cta | 4 | Una petición (la ficha en la web) y remite al video completo |
Promedio: **4.38** (≥ 4.0). Hook del Short 5 (≥ 4) y honestidad 5: no descalificado.

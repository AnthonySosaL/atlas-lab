# Experimento #41 — Tasas de FRED (datos de carry)

Estado del guion: **BORRADOR — pendiente de aprobación**
Estado del experimento: **NO CONCLUYENTE** (es un paso de datos: no opera ni prueba rentabilidad; deja listas las tasas para el carry de #42 y #43)
Serie: **G (epílogo)** — el plan-series.md llega hasta #40; este es el primero de los «caminos futuros» que cierra el veredicto de #40 (carry con tasas FRED).
Datos usados: `experiments.json` (v=41: analysis, description, verdict, notes, metrics, kpis, params_view, capital, chart) · `exp_details.json` (algo con la cobertura por moneda; sin curva). No hay `series/` ni fila en la tabla «Con tu capital»; para el payoff se cita la fila #42 de esa tabla (`docs/youtube/`).
**Datos justos:** es un experimento de datos, sin resultado de rentabilidad propio. Se recomienda publicarlo como video corto (≈4 min) o como capítulo inicial del video de #42, y su Short se apoya en el resultado de #42, marcado como tal.

## Títulos (opciones)
1. Bajé las tasas de interés de 8 monedas desde 1956 (gratis)
2. Los datos del carry trade: 8 monedas, FRED, 2002–2026
3. ¿De dónde salen los datos del carry? 8 monedas, tasas públicas

## Miniatura
Fondo #09090b. Texto gigante blanco "DESDE 1956"; debajo, en rojo (#e11d2a), "8 MONEDAS". Elemento visual: una cascada de símbolos $ € £ ¥ cayendo como una tabla de datos. Logo ATLAS en la esquina inferior derecha. (No repite los títulos.)

---

## VIDEO LARGO (16:9, ≈ 4:12 · experimento de datos: rango de 4 a 6 min)

**[0:00 — Gancho]** (pantalla — BOCETO: una tabla vacía de 8 columnas (USD, EUR, GBP, JPY, AUD, CAD, CHF, NZD) que se llena con números; sobre ella aparece «1956» en grande y luego «2026»)
Hay una estrategia que te paga intereses por cambiar de moneda. Para probarla en serio, antes de cualquier backtest necesitas un dato: la tasa de interés de cada moneda, mes a mes. Las descargué, gratis, para 8 monedas. La más antigua empieza en 1956 y los datos llegan hasta 2026.

**[0:22 — Qué es el carry]** (pantalla — BOCETO: dos monedas, una con «tasa alta» y otra con «tasa baja»; flecha de compra hacia la primera, de venta hacia la segunda; contador de interés cobrado día a día)
La estrategia se llama carry. Compras la divisa que paga más interés, vendes la que paga menos y cobras la diferencia de tasas, un día tras otro, mientras el tipo de cambio no se mueva demasiado. Pero para saber cuál paga más en cada momento hay que tener las tasas. Sin esa tabla no hay carry que probar.

**[0:48 — Qué descargué]** (pantalla — BOCETO: tarjeta params_view: fuente FRED (CSV público) · 8 monedas · tasa interbancaria a 3 meses · USD con respaldo de la letra del Tesoro a 3 meses · sin clave de API · datos mensuales)
Bajé la tasa interbancaria a 3 meses de ocho monedas, que es la tasa a la que los bancos se prestan entre sí a tres meses y sirve para comparar cuánto paga cada moneda: dólar estadounidense, euro, libra, yen, dólar australiano, canadiense, franco suizo y dólar neozelandés. La fuente es FRED, la base de datos económicos de la Reserva Federal de EE. UU., en un archivo CSV público: gratis y sin clave de API. Para el dólar añadí como respaldo la letra del Tesoro a 3 meses. Son datos mensuales, no diarios.

**[1:27 — Desde cuándo hay datos]** (pantalla — BOCETO: gráfico de barras/línea de tiempo con el año de inicio de cada moneda: CAD 1956 · GBP 1957 · USD 1964 · AUD 1968 · NZD 1973 · EUR 1994 · CHF 1999 · JPY 2002; una banda vertical en 2002 rotulada «las 8 juntas»; es el chart del experimento)
Cada moneda empieza en un año distinto. El dólar canadiense, en 1956. La libra, en 1957. El dólar estadounidense, en 1964, y su letra del Tesoro, desde 1934. El australiano, 1968. El neozelandés, 1973. El euro, 1994. El franco suizo, 1999. Y el yen, 2002. Las ocho monedas juntas existen solo desde 2002, y ese es el límite para cualquier factor que las compare.

**[1:55 — Por qué importan tantos años]** (pantalla — BOCETO: la línea de tiempo con tres franjas de color genéricas rotuladas «épocas distintas»; sin cifras nuevas)
Cuantos más años de tasas, más épocas distintas se pueden probar. Para el carry importa especialmente, porque el interés que se cobra cambia con cada época: lo que paga una moneda en una década no es lo que paga en otra, y una prueba honesta tiene que pasar por varias.

**[2:17 — Hasta cuándo]** (pantalla — BOCETO: la misma línea de tiempo extendida hasta 2026 con tres marcadores: EUR y GBP «enero 2026», JPY «marzo 2026», resto «abril 2026»)
Del otro lado, los datos llegan casi al presente: el euro y la libra hasta enero de 2026, el yen hasta marzo y las demás monedas hasta abril de 2026. Con eso se pueden probar épocas muy distintas, aunque en las pruebas del carry usé 2007–2013 y 2014–2024.

**[2:39 — Los límites de estos datos]** (pantalla — BOCETO: checklist de exp_details.filters: «paso de datos: sin backtest» · «frecuencia mensual» · «la publicación real puede tardar más que el rezago de un mes»)
Conviene ser claro sobre lo que este experimento no es. Es un paso de datos: no opera, no tiene curva de capital y no prueba rentabilidad. Y los datos son mensuales, así que en las pruebas la señal se rezaga un mes por la publicación; en la vida real puede tardar más. Por eso no hay un veredicto de ganancia: el resultado es una tabla lista para usar.

**[3:09 — Para qué sirvió]** (pantalla — BOCETO: flecha desde la tabla de tasas hacia dos tarjetas «Experimento 42: carry de divisas» y «Experimento 43: carry + tendencia»; dato de la tarjeta de capital del 42: −$9,924 sobre $100,000 en 256 días, sello ✕)
Esta tabla alimenta los experimentos 42 y 43, donde probé el carry con siete pares de forex. Adelanto el resultado del primero: con el interés del carry sumado a la cuenta, el carry puro se cortó a los 256 días, con −$9,924 sobre $100,000 simulados. Lo cuento completo en el siguiente video.

**[3:32 — Con tu capital]** (pantalla — BOCETO: la tarjeta «Con tu capital» vacía con el mensaje de la web: «No hay cartera: es la descarga de las tasas»)
Este experimento no tiene cuenta ni curva de capital: es la descarga de las tasas de interés de 8 monedas, sin cifras en dinero. Para ver dólares en juego, mira el experimento 42.

**[3:48 — Conclusión y cierre]** (pantalla — BOCETO: sello «NO CONCLUYENTE» sobre la tabla de 8 columnas; logo ATLAS + URL)
Veredicto: no concluyente. Es un paso de datos, sin prueba de rentabilidad: deja listas las tasas mensuales de 8 monedas, con la más antigua desde 1956 y las ocho juntas desde 2002. Todos los datos están en atlas-lab-one.vercel.app, experimento 41. Contenido educativo, no es asesoría financiera. El trading no se promete: se prueba.

---

## SHORT (9:16, ≈ 48 s)
Título del Short: Una estrategia que te paga por cambiar de moneda #shorts
Fórmula visual (CLAUDE.md del canal): b-roll vertical real con overlay 0.6, Ken Burns alternado, subtítulos karaoke en MAYÚSCULAS con cifras en rojo, ticker arriba, whoosh + flash en cada corte; golpe (bass + sacudida) solo en 0-3 s y 28-40 s.

**[0-3 s]** "Una estrategia que te paga intereses por cambiar de moneda."
- Boceto: b-roll de billetes de varias monedas (kb=in); texto «CARRY» y «8 MONEDAS · DESDE 1956»; golpe de bass.

**[3-14 s]** "Se llama carry: compras la moneda que paga más interés, vendes la que paga menos y cobras la diferencia. Para probarla bajé las tasas de 8 monedas, gratis, de FRED."
- Boceto: dos monedas con «TASA ALTA / TASA BAJA» y flechas; logo FRED en texto y «GRATIS» en verde.

**[14-28 s]** "La más antigua, el dólar canadiense, desde 1956. La libra, 1957. El euro, 1994. El yen, 2002. Las ocho juntas existen desde 2002, y los datos llegan hasta 2026."
- Boceto: línea de tiempo que avanza con un tick por moneda (CAD 1956, GBP 1957, EUR 1994, JPY 2002) y una banda en 2002.

**[28-40 s]** "¿Funcionó el carry? Con estos datos probé una versión con el interés sumado a la cuenta. La del carry puro se cortó a los 256 días."
- Boceto: rótulo «DATO DEL EXPERIMENTO 42»; contador de días que llega a 256 y sello ✕; sacudida.

**[40-48 s]** "Video completo en el canal. No es asesoría financiera. Una estrategia que te paga por cambiar de moneda… ¿y funciona?"
- Boceto: logo ATLAS. Loop: la pregunta final enlaza con «Una estrategia que te paga intereses por cambiar de moneda».

## Descripción (YouTube)
Paso de datos: descargué las tasas de interés a 3 meses de 8 monedas (USD, EUR, GBP, JPY, AUD, CAD, CHF y NZD) desde FRED, gratis y sin clave de API. La más antigua, el dólar canadiense, empieza en 1956; las ocho juntas existen desde 2002, hasta 2026. Son la base del carry de los experimentos 42 y 43. Experimento #41, no concluyente (no prueba rentabilidad).

Datos completos: https://atlas-lab-one.vercel.app (experimento #41)

Capítulos: 0:00 Gancho · 0:22 Qué es el carry · 0:48 Qué descargué · 1:27 Desde cuándo hay datos · 1:55 Por qué importan tantos años · 2:17 Hasta cuándo · 2:39 Los límites de estos datos · 3:09 Para qué sirvió · 3:32 Con tu capital · 3:48 Conclusión y cierre

Contenido educativo. No es asesoría financiera ni recomendación de inversión.

Etiquetas: carry trade, tasas de interés, FRED, forex, datos económicos, divisas, trading, backtest, datos gratis, Reserva Federal, ATLAS Lab

## Rúbrica (autoevaluación — criterios del CLAUDE.md del canal, 1-5)
| hook_0_3s | ritmo | promesa_cumplida | potencial_loop | claridad_no_traders | honestidad_atlas | audio | cta |
|---|---|---|---|---|---|---|---|
| 4 | 4 | 4 | 4 | 4 | 5 | 4 | 4 |

Promedio: **4.13** → cumple el corte (≥ 4.0; hook ≥ 4 y honestidad 5).
Notas: el hook usa una promesa atractiva (te paga por cambiar de moneda) y el Short la resuelve con un resultado real de #42 (256 días), rotulado como dato de otro experimento. Es uno de los dos guiones con datos más justos: sin ese resultado, un Short solo de «descargué datos» tendría un hook de 3. Alternativa para A/B: «Probé el carry con tasas desde 1956: la cuenta murió a los 256 días.» Se recomienda publicarlo junto al de #42 o dentro de ese video.

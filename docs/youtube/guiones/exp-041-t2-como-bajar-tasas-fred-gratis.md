# Experimento #41 — Tasas de FRED (datos de carry) · Tema 2: cómo bajar datos macro gratis, paso a paso

Estado del guion: **BORRADOR — pendiente de aprobación**
Tema 2 de 2 del experimento #41 (cubre también #42 y #43, que usan estos datos). Qué aporta frente a los otros temas: es el MÉTODO de datos. El tema 1 cuenta qué hay en la tabla (8 monedas, desde 1956) y por qué importa para el carry; este tema es el paso a paso para conseguirla tú mismo con el código real del experimento, cómo revisar su cobertura y cómo convertirla en la señal del carry.
Estado del experimento: **NO CONCLUYENTE** (es un paso de datos: no opera ni prueba rentabilidad; deja listas las tasas para el carry de #42 y #43)
Serie: **G (epílogo)** — primer paso del camino «carry con tasas FRED» que abre el veredicto de #40.
Datos usados: `experiments.json` (v=41: analysis, description, verdict, notes, metrics, kpis, params_view, capital, chart; v=42: analysis, kpis) · `exp_details.json` (v41: algo con la cobertura por moneda, code.snippet de la descarga; v42: code.snippet de la señal) · fila #42 de la tabla «Con tu capital» (`docs/youtube/`). No hay `series/` para #41.
**Datos justos:** experimento de datos, sin curva propia. El Short se apoya en una cifra del #42 (256 días), rotulada como tal.

## Títulos (opciones)
1. Cómo bajar las tasas de 8 monedas gratis, desde 1956 (FRED)
2. Datos macro gratis con unas líneas de código: así preparé el carry
3. Del archivo CSV al carry trade: la tabla que lo hizo posible

## Miniatura
Fondo #09090b. Una barra de navegador con una dirección web que se convierte en una tabla de 8 columnas; un candado abierto en verde (#22c55e). Texto grande: «SIN CLAVE». Logo ATLAS en la esquina inferior derecha. (No repite las palabras de los títulos.)

---

## VIDEO LARGO (16:9, ≈ 4:26)

**[0:00 — Gancho]** (pantalla — BOCETO: una dirección web que se pega en un navegador y de la que cae un archivo CSV; este se transforma en una tabla de 8 columnas; texto «1956 → 2026 · gratis · sin clave»)
Las tasas de interés de ocho monedas, mes a mes, desde 1956 hasta 2026. Gratis, sin clave de API, con un puñado de líneas de código. En este video te enseño cómo las bajé y qué revisar antes de usarlas.

**[0:16 — Este es el experimento #41]** (pantalla — BOCETO: rótulo «EXPERIMENTO #41 · TASAS DE FRED (DATOS DE CARRY)» con el logo ATLAS; la URL pequeña debajo)
Este es el experimento #41 de ATLAS Lab: Tasas de FRED, datos de carry. Todos los resultados están en la página del experimento. Es un paso de datos: no opera ni prueba rentabilidad. Su valor es que sin esta tabla no se puede probar el carry.

**[0:35 — Qué necesitas]** (pantalla — BOCETO: dos monedas con «tasa alta» y «tasa baja»; flecha de compra a la primera y de venta a la segunda; debajo, una tabla vacía de 8 columnas: USD, EUR, GBP, JPY, AUD, CAD, CHF, NZD)
El carry es comprar la divisa que paga más interés, vender la que paga menos y cobrar la diferencia. Para saber cuál paga más en cada momento necesitas una tabla: una columna por moneda y una fila por mes con su tasa de interés. Eso es lo que vamos a construir.

**[0:55 — Paso 1 y 2: la fuente y la serie]** (pantalla — BOCETO: tarjeta params_view: FRED (CSV público) · tasa interbancaria a 3 meses · USD con respaldo de la letra del Tesoro a 3 meses · sin clave de API · mensual)
Primero, la fuente: FRED, la base de datos económicos de la Reserva Federal de EE. UU., que ofrece cada serie como un archivo CSV público, sin clave de API. Segundo, la serie: la tasa interbancaria a 3 meses, que es a la que los bancos se prestan entre sí a tres meses y sirve para comparar cuánto paga cada moneda. Para el dólar añadí como respaldo la letra del Tesoro a 3 meses. En total, nueve series: ocho monedas y un respaldo.

**[1:27 — Paso 3 y 4: descargar y juntar]** (pantalla — BOCETO: fragmento del código real de exp_details.code.snippet: el diccionario SERIES con una entrada por moneda, la función fetch con la dirección fredgraph.csv?id=… y la tabla final guardada como rates.parquet; resaltar una línea a la vez)
El código es corto. Un diccionario con una entrada por moneda, cada una con el código de su serie en FRED. Una función que arma una dirección web con ese código, descarga el CSV, lo lee como tabla y quita los vacíos. Y una línea que junta todas las columnas y guarda el resultado en un archivo. No hay claves, no hay cuentas: una dirección por serie.

**[1:54 — Paso 5: revisar la cobertura]** (pantalla — BOCETO: línea de tiempo con el año de inicio de cada moneda: CAD 1956 · GBP 1957 · USD 1964 · AUD 1968 · NZD 1973 · EUR 1994 · CHF 1999 · JPY 2002; una banda en 2002 «las 8 juntas»)
El paso que más se olvida: revisar cuándo empieza y termina cada serie. Aquí cada moneda arranca en un año distinto: el dólar canadiense en 1956, la libra en 1957, el dólar estadounidense en 1964 y su letra del Tesoro desde 1934, el australiano en 1968, el neozelandés en 1973, el euro en 1994, el franco suizo en 1999 y el yen en 2002. Las ocho juntas existen solo desde 2002. El final también cambia: euro y libra llegan a enero de 2026, el yen a marzo y el resto a abril.

**[2:30 — Del dato a la señal]** (pantalla — BOCETO: fragmento del código de #42: la resta de tasas por par con el dólar y el signo; una tabla de 7 pares con «tasa de la divisa − tasa del dólar» y, en tres, «tasa del dólar − tasa de la divisa»)
Con la tabla lista, la señal del carry sale de una resta. Para cada par se compara la tasa de la divisa con la del dólar y se toma el signo: más o menos. En tres pares el dólar va primero, el yen, el dólar canadiense y el franco suizo, así que la resta se da la vuelta. Y como los datos son mensuales y se publican con retraso, en las pruebas la señal se rezaga un mes; en la vida real puede tardar más.

**[3:03 — Los límites de estos datos]** (pantalla — BOCETO: checklist de exp_details.filters: paso de datos, sin backtest · datos mensuales · rezago de un mes, la publicación real puede tardar más)
Los límites. Es un paso de datos: no hay backtest, ni curva de capital, ni prueba de rentabilidad; por eso su veredicto es no concluyente. Los datos son mensuales, no diarios. Y las ocho monedas juntas existen desde 2002, aunque en las pruebas del carry usé 2007–2013 y 2014–2024.

**[3:23 — Para qué sirvió]** (pantalla — BOCETO: flecha desde la tabla hacia las tarjetas «experimento 42: carry de divisas» y «experimento 43: carry + tendencia»; dato del 42: «Sharpe −1.79 · cuenta cortada a los 256 días · −$9,924 sobre $100,000», sello ✕)
Esta tabla alimenta los experimentos 42 y 43, donde probé el carry con siete pares de forex. Adelanto el resultado del primero: el carry puro tuvo Sharpe de menos 1.79 y la cuenta se cortó a los 256 días, con −$9,924 sobre $100,000 simulados, aun sumando el interés. Lo cuento completo en esos videos.

**[3:44 — Con tu capital]** (pantalla — BOCETO: la tarjeta «Con tu capital» vacía con el mensaje de la web: «No hay cartera: es la descarga de las tasas»)
Este experimento no tiene cuenta ni curva de capital: es la descarga de las tasas de interés de 8 monedas, sin cifras en dinero. Para ver dólares en juego, mira el experimento 42.

**[3:58 — Ficha del experimento #41]** (pantalla — BOCETO: tarjeta de ficha con sello «NO CONCLUYENTE», cuatro líneas y la URL atlas-lab-one.vercel.app/e/41; logo ATLAS)
Ficha del experimento #41. Estado: no concluyente, es un paso de datos. Cifra clave: 8 monedas, la más antigua desde 1956 y las ocho juntas desde 2002, hasta 2026. Filtro que decidió: ninguno; aquí no hay backtest que filtrar. Lección: revisa siempre desde cuándo y hasta cuándo llega cada serie antes de usarla. Revísalo completo en atlas-lab-one.vercel.app/e/41. Contenido educativo, no es asesoría financiera. El trading no se promete: se prueba.

---

## SHORT (9:16, ≈ 50 s)
Título del Short: Las tasas de 8 monedas desde 1956, gratis y sin clave #shorts
Fórmula visual (CLAUDE.md del canal): b-roll vertical real con overlay 0.6, Ken Burns alternado, subtítulos karaoke en MAYÚSCULAS con cifras en rojo, ticker arriba, whoosh + flash en cada corte; golpe (bass + sacudida) solo en 0-3 s y 28-40 s.

**[0-3 s]** "Las tasas de interés de 8 monedas, desde 1956. Gratis y sin clave."
- Boceto: b-roll de una pantalla de código o teclado (kb=in); «1956» gigante en blanco y «SIN CLAVE» en verde; golpe de bass.

**[3-14 s]** "La fuente es FRED, una base pública. Cada serie es una dirección web que devuelve un CSV: ocho monedas y un respaldo para el dólar."
- Boceto: dirección web que se convierte en tabla; las nueve columnas entrando con tick.

**[14-28 s]** "El paso que se olvida: revisar la cobertura. El dólar canadiense empieza en 1956, la libra en 1957, el euro en 1994 y el yen en 2002. Las ocho juntas, desde 2002."
- Boceto: línea de tiempo con tick por moneda y una banda en 2002.

**[28-40 s]** "La señal del carry es el signo de la resta de tasas en cada par. Con esta tabla, el carry puro tuvo Sharpe de menos 1.79 y la cuenta murió a los 256 días."
- Boceto: rótulo «DATO DEL EXPERIMENTO 42»; contador de días que llega a 256 y sello ✕; sacudida.

**[40-48 s]** "Video completo en el canal. Experimento 41 completo en el enlace. No es asesoría financiera. ¿Gratis y sin clave? Sí, y la señal sale de una resta."
- Boceto: sello «NO CONCLUYENTE»; logo ATLAS y «EXPERIMENTO #41 · ENLACE». Loop: la pregunta final enlaza con el gancho.

## Descripción (YouTube)
**Video largo**
https://atlas-lab-one.vercel.app/e/41?utm_source=youtube&utm_medium=video&utm_campaign=exp041-t2
Ficha del experimento #41 (tasas de FRED, datos de carry): no concluyente, es un paso de datos. 8 monedas, la más antigua desde 1956 (dólar canadiense) y las ocho juntas desde 2002, hasta 2026; fuente FRED, gratis y sin clave de API.
Paso a paso para bajar las tasas, revisar su cobertura y convertirlas en la señal del carry (resta de tasas por par, con un mes de rezago). Con esta tabla, el carry puro del experimento 42 tuvo Sharpe −1.79 y la cuenta se cortó a los 256 días.

Capítulos: 0:00 Gancho · 0:16 Este es el experimento #41 · 0:35 Qué necesitas · 0:55 Paso 1 y 2: la fuente y la serie · 1:27 Paso 3 y 4: descargar y juntar · 1:54 Paso 5: revisar la cobertura · 2:30 Del dato a la señal · 3:03 Los límites de estos datos · 3:23 Para qué sirvió · 3:44 Con tu capital · 3:58 Ficha del experimento #41

**Short**
https://atlas-lab-one.vercel.app/e/41?utm_source=youtube&utm_medium=short&utm_campaign=exp041-t2
Experimento #41: tasas de interés de 8 monedas desde 1956, de FRED, gratis y sin clave de API. No concluyente (paso de datos).

Contenido educativo. No es asesoría financiera ni recomendación de inversión.

Etiquetas: FRED, datos gratis, tasas de interés, carry trade, forex, descargar datos, Python, datos económicos, CSV, backtest, ATLAS Lab

## Rúbrica (autoevaluación — criterios del CLAUDE.md del canal, 1-5)
| hook_0_3s | ritmo | promesa_cumplida | potencial_loop | claridad_no_traders | honestidad_atlas | audio | cta |
|---|---|---|---|---|---|---|---|
| 4 | 4 | 5 | 4 | 4 | 5 | 4 | 4 |

Promedio: **4.25** → cumple el corte (≥ 4.0; hook ≥ 4 y honestidad 5).
Notas: es un tema práctico con una cifra gancho (1956) y un resultado real del #42 (256 días) rotulado como tal. Punto débil: sin conflicto propio, depende del interés de la audiencia en datos gratis; el tema 1 cubre el contenido de la tabla y este el método.

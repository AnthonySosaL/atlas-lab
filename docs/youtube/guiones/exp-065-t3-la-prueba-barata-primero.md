# Experimento #65 — Reversión de corto plazo (z-score 5d) en índices · Tema 3 de 3: la prueba barata primero

Estado del guion: **BORRADOR — pendiente de aprobación**
Tema 3 de 3 del experimento #65 · Qué aporta frente a los otros temas: es el tema del MÉTODO. Explica el orden de las pruebas (bruto contra comprar y esperar, costos, fuera de muestra, Deflated Sharpe) y por qué conviene empezar por la más barata: aquí, cuatro índices y cuatro derrotas antes de pagar un solo costo. El tema 1 abre con los cuatro índices y el z-score; el tema 2 compara ganar dinero con ganar.
Estado del experimento: **murió** (incluso en bruto su Sharpe queda siempre por debajo de comprar y esperar)
Serie: F, por tema (anomalías de corto plazo; el plan aún no lista #65–#67) · Lo confirma el #72 (Connors RSI(2))
Datos usados: `experiments.json` (v=65: verdict, analysis, notes, kpis, metrics, params_view, capital; v=72: kpis) · `exp_details.json` (extra-v65: algo, code.snippet, filters) · `series/extra-v65.json` y tabla «Con tu capital» (`docs/youtube/*-capital.md`, filas #65 y #72).

## Títulos
1. La prueba más barata primero: si pierde sin costos, no pasa con costos
2. Cómo descarto una idea en minutos: Sharpe bruto contra comprar y esperar
3. Cuatro índices, cuatro derrotas, antes de pagar un solo costo

## Miniatura
Fondo `#09090b`. Un embudo con cuatro compuertas rotuladas «bruto», «costos», «fuera de muestra», «Deflated Sharpe». Una ✕ roja `#e11d2a` cierra la primera. Texto grande blanco: «4 DE 4 EN LA PRIMERA». Logo ATLAS esquina inferior derecha.

---

## VIDEO LARGO (≈ 4½ min, experimento corto)

**[0:00 — Gancho]** (pantalla: cuatro tarjetas de índices que caen en la primera compuerta)
Probar una idea de trading cuesta tiempo. Esta la descarté con la primera prueba, la más barata: cuatro índices, cuatro derrotas, antes de pagar un solo costo.
> BOCETO: embudo con cuatro compuertas; cuatro tarjetas (S&P 500, Nasdaq 100, DAX, FTSE 100) se detienen una a una en la primera, con ✕ y tick; golpe de bajo y sacudida con la cuarta.

**[0:20 — Este experimento]** (pantalla: rótulo «Experimento #65 · Reversión de corto plazo (z-score 5d) en índices»)
Este es el experimento #65 de ATLAS Lab: reversión de corto plazo, con z-score de 5 días, en índices. Todos los resultados están en la página del experimento. Hoy no hablo de la estrategia, sino de cómo se decide, en orden, si una idea merece más trabajo.
> BOCETO: rótulo con «#65» y el nombre del experimento; logo ATLAS; whoosh suave.

**[0:40 — El embudo de pruebas]** (pantalla: embudo con cuatro compuertas)
Imagina un embudo con cuatro compuertas. Primera: ¿en bruto, sin costos, le gana a comprar y esperar? Segunda: ¿lo sigue haciendo con costos? Tercera: ¿funciona en un periodo fuera de muestra, es decir, que no se haya usado para mirar los datos? Cuarta: ¿sobrevive al Deflated Sharpe, el ajuste que descuenta la suerte de haber probado varias ideas? Cada compuerta es más cara que la anterior.
> BOCETO: embudo con las cuatro compuertas y un cartel de precio creciente («barata → cara»); cada compuerta con su pregunta.

**[1:25 — Por qué empezar por el bruto]** (pantalla: balanza con monedas)
Los costos solo restan. Si una estrategia no le gana a comprar y esperar ni siquiera sin costos, con costos le irá peor. Por eso la primera prueba se hace en bruto: es la más barata y la que más ideas descarta. Si pierde aquí, no hace falta pagar las otras tres.
> BOCETO: balanza: un platillo con la estrategia en bruto y otro con comprar y esperar; al añadir monedas de costo, el platillo de la estrategia baja más.

**[2:00 — La primera prueba, aplicada]** (pantalla: tabla con cuatro filas)
La estrategia: reversión a la media con el z-score de 5 días, con tope de ±3 y la señal de ayer. En el S&P 500, un Sharpe de 0.21 contra 0.73 de comprar y esperar. El Sharpe es la ganancia por unidad de riesgo. Nasdaq 100: 0.48 contra 0.84. DAX: −0.11 contra 0.54. FTSE 100: 0.02 contra 0.26. Cuatro de cuatro por debajo.
| Índice | Reversión (bruto) | Comprar y esperar |
|---|---|---|
| S&P 500 | 0.21 | 0.73 |
| Nasdaq 100 | 0.48 | 0.84 |
| DAX | −0.11 | 0.54 |
| FTSE 100 | 0.02 | 0.26 |
> BOCETO: cada fila con una barra roja corta frente a una gris larga; la compuerta 1 se cierra con sello ✕.

**[2:35 — Lo que no hizo falta]** (pantalla: checklist de filtros con los valores reales)
Con eso se acabó. No apliqué costos, ni el periodo fuera de muestra, ni el Deflated Sharpe. La ficha los marca como no aplicados, y es correcto: bastó la comparación simple para ver que no pasa la primera puerta. Además, la estrategia hace muchísimas operaciones, así que los costos, que aquí ni siquiera resté, la enterrarían todavía más.
> BOCETO: ✗ «Superar a comprar y esperar» · ✓ «Señal de ayer (rezago de 1 día)» · — «Costos: no aplicado (bruto)» · — «Fuera de muestra: no aplicado» · — «Deflated Sharpe: no aplicado».

**[3:10 — Cuando una idea hace el recorrido completo]** (pantalla: tarjeta del experimento 72)
Para comprobar que la prueba barata no engaña, el experimento 72 probó una reversión famosa, el RSI(2) de Connors, con todo el recorrido: costos de 3 puntos básicos y un periodo fuera de muestra. Resultado fuera de muestra: Sharpe de 0.48, contra 0.68 de comprar y esperar los cuatro índices. Llegó a la misma conclusión: la reversión de corto plazo no añade ventaja tras costos.
> BOCETO: tarjeta del #72 con «Sharpe fuera de muestra 0.48 contra 0.68» y una flecha que apunta a la tabla del #65; texto «mismo resultado, otro camino».

**[3:40 — Con tu capital]** (pantalla: tarjeta «Con tu capital», Nasdaq 100)
Con el Nasdaq 100, el mejor de los cuatro: con $10,000, la reversión da +$22,001 y comprar y esperar, +$76,418. Con $100,000: +$220,005 contra +$764,178. Es una curva bruta, sin costos. La peor caída desde un máximo fue de −29.3%.
> BOCETO: tarjeta de capital con dos filas y aviso ámbar «bruto, sin costos».

**[4:05 — Conclusión]** (pantalla: embudo cerrado en la primera compuerta)
Empieza por la prueba que menos cuesta. Si la idea no pasa ahí, no hace falta gastar más.
> BOCETO: el embudo del inicio, con la primera compuerta cerrada y las otras tres apagadas.

**[4:15 — Ficha del experimento #65 y cierre]** (pantalla: tarjeta con la ficha y la URL)
Ficha del experimento #65. Estado: murió. Cifra clave: cuatro índices, Sharpe bruto de −0.11 a 0.48 contra 0.26 a 0.84 de comprar y esperar. Filtro que decidió: superar a comprar y esperar, ya en bruto. Lección: no hay ventaja de reversión de corto plazo en estos índices. Revísalo completo en atlas-lab-one.vercel.app/e/65. Contenido educativo, no es asesoría financiera. El trading no se promete: se prueba.
> BOCETO: tarjeta en pantalla con las 4 líneas de la ficha (estado rojo «murió») y la URL `atlas-lab-one.vercel.app/e/65` en grande; fundido a la frase de marca.

---

## SHORT (9:16, ≈ 44 s) — "La prueba barata"

**[0-3 s]** "Descarté esta estrategia con la prueba más barata: cuatro índices, cuatro derrotas."
> BOCETO: B-roll vertical de pantallas de bolsa, kb=in, overlay 0.6; cuatro tarjetas de índices con ✕; golpe de bajo + sacudida. Karaoke con «BARATA» en rojo.

**[3-14 s]** "Un embudo de cuatro pruebas: en bruto contra comprar y esperar, con costos, fuera de muestra y Deflated Sharpe. Cada una cuesta más que la anterior."
> BOCETO: embudo con cuatro compuertas; whoosh. Ken Burns hacia dentro.

**[14-26 s]** "Reversión de corto plazo, de 2012 a 2024, sin costos. S&P 500: 0.21 contra 0.73. Nasdaq 100: 0.48 contra 0.84. DAX: −0.11 contra 0.54. FTSE 100: 0.02 contra 0.26."
> BOCETO: cuatro parejas de barras que crecen; tick por pareja; flash blanco.

**[26-37 s]** "Si no le gana a comprar y esperar sin costos, con costos le irá peor. Y esta hace muchísimas operaciones. No hace falta pagar las otras tres pruebas."
> BOCETO: balanza con monedas que hunden el platillo de la estrategia; compuerta 1 cerrada.

**[37-44 s]** "Video completo en el canal y experimento 65 completo en el enlace. Cuatro de cuatro en la primera puerta."
> BOCETO: vuelven las cuatro tarjetas con ✕ (loop); rótulo «Experimento #65 completo en el enlace»; texto pequeño «No es asesoría financiera · El trading no se promete: se prueba».

---

## Descripción (YouTube)
https://atlas-lab-one.vercel.app/e/65?utm_source=youtube&utm_medium=video&utm_campaign=exp065-t3
Ficha del experimento #65: murió · 4 índices, Sharpe bruto de −0.11 a 0.48 contra 0.26 a 0.84 de comprar y esperar · la reversión del RSI(2) (experimento 72) llega a la misma conclusión con costos y fuera de muestra.
El orden de las pruebas para descartar una idea: bruto contra comprar y esperar, costos, fuera de muestra y Deflated Sharpe. Por qué empezar por la más barata.
Contenido educativo. No es asesoría financiera ni recomendación de inversión.
Descripción del Short (primera línea): https://atlas-lab-one.vercel.app/e/65?utm_source=youtube&utm_medium=short&utm_campaign=exp065-t3

Capítulos: 0:00 Gancho · 0:20 Este experimento · 0:40 El embudo de pruebas · 1:25 Por qué empezar por el bruto · 2:00 La primera prueba, aplicada · 2:35 Lo que no hizo falta · 3:10 Cuando una idea hace el recorrido completo · 3:40 Con tu capital · 4:05 Conclusión · 4:15 Ficha del experimento #65 y cierre

Etiquetas: metodología de backtest, comprar y esperar, Deflated Sharpe, fuera de muestra, reversión a la media, z-score, índices bursátiles, validación de estrategias, Sharpe ratio, trading con datos, ATLAS Lab, backtest

## Rúbrica (autoevaluación)
| Pieza | hook_0_3s | ritmo | promesa_cumplida | potencial_loop | claridad_no_traders | honestidad_atlas | audio | cta | Promedio |
|---|---|---|---|---|---|---|---|---|---|
| Largo | 4 | 4 | 5 | 4 | 5 | 5 | 4 | 4 | 4.38 |
| Short | 5 | 4 | 5 | 5 | 4 | 5 | 4 | 4 | 4.50 |

Hook ≥ 4 ✓ · honestidad 5 ✓. Punto débil: es un tema de método con una sola tabla de cifras; el embudo y la balanza dan el ritmo visual.

# Experimento #61 — Ataques al cambio de régimen, ronda 2 · Tema 3 de 3: la capa que envenenó a una cartera ganadora

Estado del guion: **BORRADOR — pendiente de aprobación**
Tema 3 de 3 del experimento #61 · Qué aporta frente a los otros temas: es el tema del DETALLE SORPRENDENTE y de la DIVERSIFICACIÓN. Cuenta el caso B2: una cartera que daba +23.1% terminó en −9.6% al añadirle una capa neutral, y qué enseña sobre mezclar lo que gana con lo que no tiene ventaja. El tema 1 repasa las tres ideas de la ronda 2; el tema 2 explica qué es una estrategia largo/corto (B1).
Estado del experimento: **murió** (ninguna variante supera a invertir a 1x)
Serie: G, por tema (filtros de régimen; el plan aún no lista #61–#62) · Relacionado: #59, #60, #62
Datos usados: `experiments.json` (v=61: verdict, analysis, notes, kpis, metrics, period, params_view, capital), `exp_details.json` (extra-v61: algo, code.snippet, filters), `series/extra-v61.json` ([0] B3, [1] cesta a 1x; B2 no tiene curva) y la tabla «Con tu capital» (`docs/youtube/*-capital.md`, fila #61; el $10k se calcula con la misma regla de la tarjeta del sitio).

## Títulos (3 opciones)
1. De +23.1% a −9.6%: cómo una capa sin ventaja arruina una buena cartera
2. Mezclar lo que gana con lo que no gana: B2, Sharpe −0.03
3. La diversificación que no diversifica (15 activos, 2014–2024)

## Miniatura (1280×720)
Fondo `#09090b`. Un bloque grande verde `#22c55e` rotulado «+23.1%» sobre el que cae una capa fina roja `#e11d2a`; el bloque, a la derecha, ya está teñido de rojo y rotulado «−9.6%». Texto grande blanco: «LA CAPA». Logo ATLAS esquina superior derecha.

---

## VIDEO LARGO (16:9, ≈ 5 min)

**[0:00 — Gancho]** (pantalla: bloque verde con «+23.1%» y una capa roja encima)
Una cartera ganaba +23.1% en diez años. Le añadí una capa extra, pensada para no depender del mercado. Terminó en −9.6%.
> BOCETO: bloque verde «+23.1%»; cae una capa fina roja; el bloque se tiñe y el número baja a «−9.6%»; golpe de bajo y sacudida.

**[0:15 — Este experimento]** (pantalla: rótulo «Experimento #61 · Ataques al cambio de régimen, ronda 2»)
Este es el experimento #61 de ATLAS Lab: ataques al cambio de régimen, ronda 2. Todos los resultados están en la página del experimento. Hoy te cuento el caso que más me sorprendió: la segunda idea, la que mezcla algo bueno con algo que no lo era.
> BOCETO: rótulo con «#61» y el nombre del experimento; logo ATLAS; whoosh suave.

**[0:35 — El núcleo: invertir y esperar]** (pantalla: curva gris de la cesta a 1x, `series/extra-v61.json[1]`)
El núcleo es la cesta de 15 activos, comprada a 1x, con pesos que bajan cuanto más se mueve cada activo. Entre 2014 y 2024 dio +23.1%, con un Sharpe de 0.37. El Sharpe es la ganancia por unidad de riesgo. Es la referencia: lo que ganas sin hacer nada.
> BOCETO: curva gris de la cesta subiendo de 2014 a 2024 con el contador «+23.1% · Sharpe 0.37».

**[1:10 — La capa neutral]** (pantalla: tarjeta B1 pequeña)
La capa es la idea de otro video, B1: comprar la mitad más fuerte de los activos y vender en corto la mitad más débil, por el mismo monto, según su media de 200 días. Sola, esa capa perdió −28.0% con costos, y −10.6% sin ellos. La esperanza era que, puesta sobre el núcleo, le sumara un extra.
> BOCETO: tarjeta B1 con «−28.0% con costos · −10.6% antes de costos»; flecha que la coloca sobre el bloque verde del núcleo.

**[1:50 — La idea de diversificar]** (pantalla: dos bolsas de monedas que se mezclan)
Diversificar es combinar piezas que no se mueven igual, para que una compense a la otra. Funciona cuando lo que sumas aporta algo propio o, al menos, no resta. Aquí la capa se sumaba al núcleo tal cual: posición del núcleo más posición neutral, con 3 puntos básicos de costo por cada movimiento de la cartera.
> BOCETO: dos bolsas, una «núcleo» y otra «capa», que se funden en una sola; fórmula «núcleo 1x + capa neutral». Ilustración rotulada.

**[2:30 — Resultado]** (pantalla: dos barras enfrentadas)
El núcleo solo dio +23.1%. Con la capa encima, el resultado fue −9.6%, con un Sharpe de −0.03. La capa perdedora envenenó al núcleo ganador.
| Variante | Retorno 2014–2024 | Sharpe |
|---|---|---|
| Núcleo 1x (sin estrategia) | +23.1% | 0.37 |
| B2: núcleo 1x + capa neutral | −9.6% | −0.03 |
> BOCETO: dos barras, una verde grande (+23.1%) y una roja hacia abajo (−9.6%); el sello ✕ cae sobre B2.

**[3:10 — Por qué una capa sin ventaja solo resta]** (pantalla: balanza con un platillo que baja)
Si una capa no tiene ventaja, no suma: resta. Cada día que se mueve cuesta dinero, y lo que gana en bruto no alcanza a pagarlo; en esta cesta, la capa perdía incluso antes de costos. No puedes mezclar algo que pierde con algo que gana y esperar que el promedio sea bueno.
> BOCETO: balanza con el núcleo en un platillo y la capa en otro; el platillo de la capa pesa hacia abajo y arrastra al otro; pila de monedas de costo que crece.

**[3:50 — La alternativa: regular, no añadir]** (pantalla: regulador de luz)
La tercera idea de la ronda, B3, no añade una capa: regula cuánta exposición tener, según cuántos activos están sobre su media. Dio +22.5%, con un Sharpe de 0.35. No supera a invertir a 1x, que dio +23.1%, pero tampoco lo envenena.
> BOCETO: regulador de luz de 0 a 2x; curva de B3 casi pegada a la gris de 1x; contadores «+22.5%» y «+23.1%».

**[4:20 — Con tu capital]** (pantalla: tarjeta «Con tu capital»)
B2 no tiene curva de capital en la ficha. El núcleo, con $10,000, da +$2,310 y con $100,000, +$23,098. La tarjeta del sitio muestra B3: +$2,249 y +$22,490. Esa curva llega a exposición de hasta el doble, así que ganancias y pérdidas se amplifican.
> BOCETO: tarjeta idéntica a la del sitio con B3 y sin estrategia; nota ámbar: «B2 no tiene curva en la ficha. Simulación con exposición de hasta x2, no es una promesa».

**[4:40 — Conclusión]** (pantalla: el bloque verde y la capa roja)
Antes de añadir algo a una cartera que ya funciona, hay que probar la pieza nueva por separado. Si por sí sola pierde, lo más probable es que solo reste.
> BOCETO: el bloque del inicio con la capa roja; texto «probar la pieza por separado».

**[4:50 — Ficha del experimento #61 y cierre]** (pantalla: tarjeta con la ficha y la URL)
Ficha del experimento #61. Estado: murió. Cifra clave: núcleo más capa neutral, −9.6% contra +23.1% del núcleo solo, en 2014–2024. Filtro que decidió: superar a invertir a 1x, con Sharpe de 0.37. Lección: una capa sin ventaja envenena a un núcleo ganador. Revísalo completo en atlas-lab-one.vercel.app/e/61. Contenido educativo, no es asesoría financiera. El trading no se promete: se prueba.
> BOCETO: tarjeta en pantalla con las 4 líneas de la ficha (estado rojo «murió») y la URL `atlas-lab-one.vercel.app/e/61` en grande; fundido a la frase de marca.

---

## SHORT (9:16, ≈ 43 s) — "La capa que lo arruinó"
Título del Short: Una cartera de +23.1% terminó en −9.6% por una capa extra #Shorts

**[0-3 s]** "Una cartera ganaba más 23.1%. Le añadí una capa extra y terminó en menos 9.6%."
> BOCETO: B-roll vertical de pantallas de mercado con overlay 0.6; bloque verde «+23.1%» y capa roja que lo tiñe a «−9.6%»; golpe de bajo y sacudida. Karaoke con «CAPA» en rojo.

**[3-14 s]** "El núcleo: 15 activos, comprados y mantenidos, de 2014 a 2024. Más 23.1%, Sharpe de 0.37. La capa: comprar lo fuerte y vender en corto lo débil, por el mismo monto."
> BOCETO: curva gris del núcleo; tarjeta B1 que se coloca encima; whoosh. Ken Burns hacia dentro.

**[14-26 s]** "Sola, esa capa perdía menos 10.6% antes de costos. Sumada al núcleo: menos 9.6% y un Sharpe de −0.03."
> BOCETO: contador −10.6% y luego −9.6% en rojo; tick por cifra; flash blanco al entrar.

**[26-37 s]** "Una capa sin ventaja no suma: resta. No puedes mezclar algo que pierde con algo que gana y esperar un buen promedio."
> BOCETO: balanza con la capa que arrastra al núcleo hacia abajo; sello ✕.

**[37-43 s]** "Video completo en el canal y experimento 61 completo en el enlace. De más 23.1 a… menos 9.6."
> BOCETO: vuelve el bloque verde con la capa roja (loop); rótulo «Experimento #61 completo en el enlace»; texto pequeño «No es asesoría financiera · El trading no se promete: se prueba».

---

## Descripción (YouTube)
https://atlas-lab-one.vercel.app/e/61?utm_source=youtube&utm_medium=video&utm_campaign=exp061-t3
Ficha del experimento #61: murió · B2 núcleo 1x + capa neutral: −9.6% en 2014–2024 (Sharpe −0.03) frente a +23.1% del núcleo solo (Sharpe 0.37).
Qué pasa cuando le sumas a una cartera que funciona una capa sin ventaja (largo/corto neutral en dólares, 15 activos, costos de 3 bps): la capa perdedora envenena al núcleo ganador.
Contenido educativo. No es asesoría financiera ni recomendación de inversión.
Descripción del Short (primera línea): https://atlas-lab-one.vercel.app/e/61?utm_source=youtube&utm_medium=short&utm_campaign=exp061-t3

Capítulos: 0:00 Gancho · 0:15 Este experimento · 0:35 El núcleo: invertir y esperar · 1:10 La capa neutral · 1:50 La idea de diversificar · 2:30 Resultado · 3:10 Por qué una capa sin ventaja solo resta · 3:50 La alternativa: regular, no añadir · 4:20 Con tu capital · 4:40 Conclusión · 4:50 Ficha del experimento #61 y cierre

Etiquetas: diversificación, estrategia neutral, largo corto, cartera, núcleo y satélite, cambio de régimen, backtest, Sharpe ratio, trading con datos, ATLAS Lab, estrategias de trading, comprar y mantener

## Rúbrica (autoevaluación, 1–5)
| Pieza | hook_0_3s | ritmo | promesa_cumplida | potencial_loop | claridad_no_traders | honestidad_atlas | audio | cta | Promedio |
|---|---|---|---|---|---|---|---|---|---|
| Largo | 5 | 4 | 5 | 4 | 5 | 5 | 4 | 4 | 4.50 |
| Short | 5 | 4 | 5 | 5 | 4 | 5 | 4 | 4 | 4.50 |

Hook ≥ 4 ✓ · honestidad 5 ✓. Punto débil: B2 no tiene curva en la ficha; el video lo dice y la lectura sobre diversificación se presenta como lección, no como resultado medido.

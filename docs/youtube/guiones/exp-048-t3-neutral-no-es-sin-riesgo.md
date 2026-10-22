# Experimento #48 — Momentum transversal · Tema 3: «neutral al mercado» no es «sin riesgo»

Estado del guion: **BORRADOR — pendiente de aprobación**
Tema 3 de 3 del experimento #48. Qué aporta frente a los otros temas: el tema 1 cuenta la estrategia y su resultado, el tema 2 muestra cómo cambia la historia según dónde cortes la curva; este explica un concepto, qué neutraliza (y qué no) una estrategia neutral al mercado, comparando su recorrido con el de la cesta sin estrategia.
Estado del experimento: **murió** (No sirvió) · Serie: sin asignar en `plan-series.md`; propuesta: B ampliada ("Estrategias famosas, puestas a prueba") · Relacionado: #46, #47, #49, #50
Datos usados: `experiments.json` (v=48: description, notes, metrics, kpis, params_view, period, capital.note), `exp_details.json` (v48: algo, code.snippet, filters), `series/20260610_142756_momentum-cross-sectional-v48.json` (curva 0 = estrategia; curva 1 = «sin reglas de prop firm»; curva 2 = sin estrategia, rango medido en los mismos 156 días; valores derivados de las curvas) y la tabla «Con tu capital» (`docs/youtube/*-capital.md`) (fila #48).
Aviso de datos: la curva dura solo 156 días; el guion lo dice y no extrapola.

## Títulos (3 opciones)
1. Neutral al mercado y aun así −28.1% de caída
2. «Neutral» no es «sin riesgo»: $89,764 a $124,788
3. Largo 3, corto 3: la cesta casi quieta, la cuenta no

## Miniatura (1280×720)
Fondo `#09090b`. Dos barras verticales: una pequeña gris (la cesta) y otra altísima con un tramo verde y uno rojo `#e11d2a` (la estrategia). Texto enorme blanco: "¿NEUTRAL?". Texto pequeño rojo: "x2". Logo ATLAS esquina superior derecha. (No repite el título 1.)

---

## VIDEO LARGO (16:9, ≈ 4 min — la curva es corta, 156 días)

**[0:00 — Gancho]** (pantalla: dos barras de rango, una pequeña y una enorme)
En esos 156 días, la cesta de activos sin estrategia se movió entre $93,630 y $100,445 por cada $100,000. La estrategia, que se llama «neutral al mercado», se movió entre $89,764 y $124,788. Neutral no quiere decir sin riesgo.
> BOCETO: dos barras de rango sobre el eje de dólares: gris corta ($93,630 a $100,445) y blanca larga ($89,764 a $124,788), la segunda con sacudida de pantalla. Subtítulo karaoke con "NEUTRAL" en rojo.

**[0:20 — De qué experimento hablamos]** (pantalla: rótulo con el número y el nombre)
Este es el experimento #48 de ATLAS Lab: Momentum transversal. Todos los resultados están en la página del experimento.
> BOCETO: rótulo "EXPERIMENTO #48 · Momentum transversal" con whoosh.

**[0:30 — Qué es «neutral al mercado»]** (pantalla: balanza con compras y ventas)
Una estrategia neutral al mercado compra y vende en corto a la vez, en cantidades parecidas, para que la subida o la bajada general se compensen. Aquí: de 15 activos, compro los 3 que más subieron en 90 días y vendo en corto los 3 que más cayeron. La suma de lo que compro y lo que vendo queda con exposición bruta 1, y luego se aplica un apalancamiento de 2. Si todo el mercado sube, lo que ganas en los largos lo pierdes en los cortos. Esa es la idea.
> BOCETO: balanza con 3 barras verdes a la izquierda (largos) y 3 rojas a la derecha (cortos) que se compensan; flecha "mercado ↑" que empuja ambos lados; texto "EXPOSICIÓN BRUTA 1 · x2".

**[1:10 — Lo que neutraliza]** (pantalla: tarjeta verde)
Lo que sí neutraliza: la dirección general. Si el mercado sube o baja, la estrategia no depende de eso. Por eso el experimento la compara con la cesta sin estrategia solo como contexto, no como rival directo.
> BOCETO: tarjeta verde "Neutraliza: la dirección del mercado" con un ✓.

**[1:25 — Lo que NO neutraliza]** (pantalla: tarjeta roja con tres puntos)
Lo que no neutraliza: primero, la selección. Si los 3 «mejores» dejan de serlo, la posición larga pierde y la corta también puede perder, porque los «peores» pueden rebotar. Segundo, el apalancamiento de 2 multiplica por dos cualquier mala racha. Tercero, el suavizado de 21 días hace que la regla reaccione despacio cuando el ranking cambia. Ojo: este experimento no mide por qué cayó la curva, solo que cayó.
> BOCETO: tarjeta roja "NO neutraliza" con tres iconos (selección · apalancamiento x2 · suavizado 21 d); una línea de ranking donde un "mejor" cambia de color y las dos patas pierden.

**[2:00 — Los números del recorrido]** (pantalla: curva 0 y curva 2 superpuestas)
Con $100,000, la estrategia llegó a $124,788, el 14 de diciembre de 2014, y terminó en $89,764 el 3 de abril de 2015. El drawdown máximo, la mayor caída desde un pico, fue de −28.1%. La cesta sin estrategia, en esos mismos 156 días, terminó en $96,392: −$3,608. Una cuenta que debía ser indiferente al mercado se movió mucho más que el propio mercado.
> BOCETO: curva 0 (blanca) y curva 2 (gris) superpuestas, ambas recortadas a los 156 días; marcadores $124,788 y $89,764 en la primera y $96,392 en la segunda.

**[2:30 — El Sharpe y la línea hipotética]** (pantalla: tarjetas KPI y curva punteada)
El Sharpe, la ganancia por unidad de riesgo, queda en −0.41 en 2014–2024 y en −0.42 en 2007–2013, años que la estrategia nunca vio y con 8 activos en lugar de 15. Una cifra más, con una advertencia: la línea «sin reglas de prop firm», que es hipotética porque en la realidad la cuenta se cierra ese día, pasa por $54,756 al final de 2015 y termina 2024 en $345 de cada $100,000.
> BOCETO: `kpis` en rojo; curva 1 punteada gris cayendo con marcadores ($54,756 · $345) y el rótulo "hipotética".

**[3:00 — Con tu capital]** (pantalla: tarjeta "Con tu capital")
Con $100,000, la cuenta simulada termina en −$10,236. Comprar y esperar la cesta, en las mismas fechas, −$3,608. Es lo que pasó en la simulación, no una promesa.
> BOCETO: tarjeta de capital con la cifra roja (−$10,236) y la fila gris (−$3,608).

**[3:15 — Qué mirar en una estrategia «neutral»]** (pantalla: tres señales)
Tres señales que conviene mirar. Una: el rango de la curva, no solo el final; aquí, entre $89,764 y $124,788. Dos: el apalancamiento, que aquí es 2. Tres: cuánto tiempo y cuántos activos hay detrás; aquí, 156 días y 15 activos, una muestra corta, y la ficha lo dice.
> BOCETO: tres tarjetas con iconos (rango, palanca, calendario) con las cifras de la ficha.

**[3:35 — Ficha del experimento #48]** (pantalla: tarjeta con la URL)
Ficha del experimento 48. Estado: murió, no sirvió. Cifra clave: retorno de −10.2%, drawdown de −28.1% y Sharpe de −0.41 y −0.42, con la cuenta cortada a los 156 días. Filtro que decidió: sobrevivir en todos los periodos, que no se cumple. Lección: neutral al mercado no es sin riesgo. Revísalo completo en atlas-lab-one.vercel.app/e/48.
> BOCETO: tarjeta "FICHA · EXPERIMENTO #48" con Estado · Cifra clave · Filtro que decidió · Lección, y la URL `atlas-lab-one.vercel.app/e/48` en grande.

**[4:00 — Cierre]**
Contenido educativo, no es asesoría financiera. El trading no se promete: se prueba.
> BOCETO: fundido a la frase de marca en blanco sobre negro; logo ATLAS.

---

## SHORT (9:16, ≈ 42 s) — "Neutral"
Título del Short: «Neutral al mercado»… y cayó −28.1% #Shorts

**[0-3 s]** "Estrategia neutral al mercado. Caída máxima: menos 28.1%."
> BOCETO: B-roll vertical de pantallas de mercado con overlay 0.6; texto gigante "−28.1%" en rojo y "¿NEUTRAL?" arriba; golpe de bajo y sacudida.

**[3-13 s]** "Compro los tres activos que más subieron en 90 días y vendo los tres que más cayeron, de quince. Si el mercado sube, se compensa. Con apalancamiento doble."
> BOCETO: balanza con 3 verdes y 3 rojas; chips "90 días" y "x2". Ken Burns hacia dentro.

**[13-27 s]** "En 156 días, la cesta sin estrategia se movió entre $93,630 y $100,445. La estrategia, entre $89,764 y $124,788."
> BOCETO: dos barras de rango, gris corta y blanca larga, apareciendo con tick; flash al entrar la larga.

**[27-35 s]** "Sharpe de −0.41 y −0.42, también en 2007–2013, años que no vio. Muestra corta, y lo digo."
> BOCETO: dos barras rojas con tick; sello "MUESTRA CORTA".

**[35-42 s]** "Neutral no es sin riesgo. Experimento 48 completo en el enlace; el video completo está en el canal. No es asesoría financiera."
> BOCETO: vuelven las dos barras de rango (loop con el primer cuadro); abajo "Experimento #48 completo en el enlace"; texto pequeño "El trading no se promete: se prueba."

---

## Descripción (YouTube) — video largo
https://atlas-lab-one.vercel.app/e/48?utm_source=youtube&utm_medium=video&utm_campaign=exp048-t3
Ficha del experimento #48 (Momentum transversal): murió (No sirvió) · retorno −10.2% · drawdown −28.1% · Sharpe −0.41 (2014–2024) y −0.42 (2007–2013) · cuenta cortada a los 156 días (muestra corta).
Qué neutraliza una estrategia «neutral al mercado» y qué no: en 156 días, la cesta se movió entre $93,630 y $100,445; la estrategia, entre $89,764 y $124,788.
Contenido educativo. No es asesoría financiera ni recomendación de inversión.

## Descripción (YouTube) — Short
https://atlas-lab-one.vercel.app/e/48?utm_source=youtube&utm_medium=short&utm_campaign=exp048-t3
Experimento #48 (Momentum transversal): murió · drawdown −28.1% · Sharpe −0.41 y −0.42 · cuenta cortada a los 156 días. Video completo en el canal. No es asesoría financiera.

## Capítulos
0:00 Gancho · 0:20 De qué experimento hablamos · 0:30 Qué es «neutral al mercado» · 1:10 Lo que neutraliza · 1:25 Lo que NO neutraliza · 2:00 Los números del recorrido · 2:30 El Sharpe y la línea hipotética · 3:00 Con tu capital · 3:15 Qué mirar en una estrategia «neutral» · 3:35 Ficha del experimento #48 · 4:00 Cierre

## Etiquetas
neutral al mercado, market neutral, momentum, largo y corto, apalancamiento, drawdown, backtest, Sharpe ratio, riesgo, trading con datos, ATLAS Lab

## Rúbrica (autoevaluación, escala 1-5)
| Criterio | Nota | Por qué |
|---|---|---|
| hook_0_3s | 4 | La paradoja «neutral / −28.1%» entra en voz y en pantalla desde el segundo 0 |
| ritmo | 4 | Balanzas, rangos y curvas cambian cada 2–3 s; el bloque conceptual es el más largo |
| promesa_cumplida | 5 | Promete comparar el recorrido con la cesta y lo muestra con rangos reales de las curvas |
| potencial_loop | 4 | El final repite «neutral no es sin riesgo» y las dos barras de rango |
| claridad_no_traders | 4 | Explica neutral, exposición bruta, apalancamiento, Sharpe y drawdown |
| honestidad_atlas | 5 | Declara que el experimento no mide la causa de la caída, que son 156 días y que el cálculo de rangos sale de la curva |
| audio | 4 | Voz por clonar; golpe de bajo solo en el gancho |
| cta | 4 | Una petición (la ficha en la web) y remite al video completo |
Promedio: **4.25** (≥ 4.0). Hook del Short 4 (≥ 4) y honestidad 5: no descalificado.

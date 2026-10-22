# Experimento #48 — Momentum transversal · Tema 2: el gráfico que se corta en el pico (día 61 de 156)

Estado del guion: **BORRADOR — pendiente de aprobación**
Tema 2 de 3 del experimento #48. Qué aporta frente a los otros temas: el tema 1 cuenta la estrategia y su resultado; este usa la curva para enseñar cómo la fecha en que termina un gráfico cambia la historia (el pico de $124,788 y el final de $89,764).
Estado del experimento: **murió** (No sirvió) · Serie: sin asignar en `plan-series.md`; propuesta: B ampliada ("Estrategias famosas, puestas a prueba") · Relacionado: #5 (TSMOM de cartera), #46, #47, #50
Datos usados: `experiments.json` (v=48: verdict, notes, metrics, kpis, params_view, period, capital.note), `exp_details.json` (v48: algo, filters), `series/20260610_142756_momentum-cross-sectional-v48.json` (curva 0 = estrategia, 156 puntos; picos, mínimos y fechas derivados de la curva) y la tabla «Con tu capital» (`docs/youtube/*-capital.md`) (fila #48).
Aviso de datos: la curva dura solo 156 días; el guion lo dice y no extrapola.

## Títulos (3 opciones)
1. Iba en $124,788 y acabó en $89,764: depende de dónde cortes
2. El momentum que ganaba… hasta el día 61: Sharpe −0.41
3. El gráfico que te venden termina en el pico: caso real

## Miniatura (1280×720)
Fondo `#09090b`. Una curva verde que sube y una tijera que la corta en el pico; la parte cortada, en rojo `#e11d2a` punteado, cae. Texto enorme blanco: "DÍA 61". Texto pequeño rojo: "DE 156". Logo ATLAS esquina superior izquierda. (No repite el título 1.)

---

## VIDEO LARGO (16:9, ≈ 4.5 min — la curva es corta, 156 días)

**[0:00 — Gancho]** (pantalla: curva verde que sube hasta "$124,788" y se detiene; luego el resto cae)
El 14 de diciembre de 2014, el día 61 de 156, esta cuenta simulada valía $124,788 por cada $100,000. Si el gráfico se cortaba ahí, la estrategia parecía un genio. El gráfico completo termina en $89,764.
> BOCETO: curva real de `series/…v48.json` (curva 0) subiendo en verde hasta "$124,788"; se congela, aparece una tijera; la parte restante cae en rojo hasta "$89,764" con sacudida de pantalla.

**[0:15 — De qué experimento hablamos]** (pantalla: rótulo con el número y el nombre)
Este es el experimento #48 de ATLAS Lab: Momentum transversal. Todos los resultados están en la página del experimento.
> BOCETO: rótulo "EXPERIMENTO #48 · Momentum transversal" con whoosh.

**[0:25 — La estrategia en 30 segundos]** (pantalla: ranking de 15 activos)
Es el momentum entre activos, al estilo de Jegadeesh y Titman. Cada día ordeno 15 activos por lo que subieron en 90 días, compro los 3 mejores y vendo en corto los 3 peores, suavizando la posición con una media de 21 días. Apalancamiento 2, corte automático del −3%, deslizamiento de 0.2% y posiciones decididas un día antes.
> BOCETO: ranking de 15 barras que se reordena; 3 verdes arriba y 3 rojas abajo; caja `params_view` (x2 · momentum 90 d · top-3 / bottom-3 · suavizado 21 d · kill-switch −3% · deslizamiento 0.2%).

**[0:55 — La subida]** (pantalla: curva con tres marcadores)
La curva no se mueve de $100,000 hasta el 9 de noviembre de 2014. Luego sube. El 27 de noviembre gana 5.06% en un día y el 28, otro 4.46%. El 14 de diciembre toca $124,788. Si esa fuera toda la historia, tendrías un gráfico de portada.
> BOCETO: curva 0 con marcadores: 9-nov (primer movimiento), 27-nov (+5.06%), 28-nov (+4.46%), 14-dic ($124,788); contador verde que sube con tick.

**[1:15 — Lo que viene después]** (pantalla: cinco escalones rojos seguidos)
Después de ese máximo, cinco días seguidos de −3.20%, del 15 al 19 de diciembre: la cuenta baja a $106,060. Ese −3.20% es el corte automático de −3% más el deslizamiento de 0.2%. Se recupera: el 12 de enero de 2015 vuelve a $123,616. Y desde ahí se hunde: el 3 de febrero está en $97,726 y el 3 de abril de 2015, a los 156 días, la cuenta se cierra en $89,764. En total hubo 32 días de −3.20% de los 156.
> BOCETO: zoom a diciembre: 5 escalones rojos con tick y flash; después el segundo máximo ($123,616) y la caída, marcadores en $97,726 y $89,764; sello ✕ en el 3-abr-2015; contador "32 / 156".

**[1:55 — El mismo gráfico, tres historias]** (pantalla: tres recortes de la misma curva)
Mira el mismo experimento cortado en tres sitios. Cortado en el día 61: $124,788. Cortado el 12 de enero de 2015: $123,616. Completo: $89,764. Nada ha cambiado, salvo la fecha donde termina el gráfico. Cuando alguien te muestra una curva de una estrategia, la primera pregunta es: ¿hasta qué fecha llega, y por qué ahí?
> BOCETO: tres paneles con la misma curva; cada uno recortado en un punto distinto, con su cifra ($124,788 · $123,616 · $89,764); el tercero con el sello ✕.

**[2:20 — El resultado completo]** (pantalla: tarjetas KPI)
Retorno total, −10.2%. Sharpe, que mide la ganancia por unidad de riesgo: −0.41 en 2014–2024 y −0.42 en 2007–2013, años que la estrategia nunca vio y con 8 activos en vez de 15. Los dos, negativos. Drawdown máximo, la mayor caída desde un pico: −28.1%, justamente de $124,788 a $89,764. Y recuerda: el drawdown se mide desde el pico, no desde el capital inicial, por eso es mayor que la pérdida final.
> BOCETO: `kpis` en rojo con tick; una flecha entre el pico ($124,788) y el final ($89,764) con la etiqueta "−28.1%".

**[2:50 — Con tu capital]** (pantalla: tarjeta "Con tu capital")
Con $100,000, la cuenta simulada termina en −$10,236. En esas mismas fechas, comprar y esperar la cesta dio −$3,608. Es lo que pasó en la simulación, no una promesa.
> BOCETO: tarjeta de capital con una cifra roja (−$10,236) y una fila gris de referencia (−$3,608).

**[3:05 — Lo que no sabemos]** (pantalla: aviso «156 días»)
Una nota de honestidad. La curva dura 156 días y la ficha lo dice: es una muestra muy corta. No sabemos qué habría pasado con más días, con otros activos o con más costos, porque aquí solo se modela el deslizamiento del corte automático. Lo que sí sabemos es que el signo del Sharpe es negativo en los dos periodos.
> BOCETO: sello "MUESTRA CORTA" sobre un tramo de 156 días; checklist ámbar: "más días ✕ · otros activos ✕ · más costos ✕".

**[3:35 — Tres preguntas ante cualquier gráfico]** (pantalla: tres tarjetas)
Tres preguntas. Una: ¿hasta qué fecha llega el gráfico? Dos: ¿qué pasó después? Tres: ¿se probó en años que la estrategia no vio? Aquí, la respuesta a las tres cabe en una curva: sube hasta el día 61, cae hasta el 156 y tiene Sharpe negativo en 2007–2013.
> BOCETO: tres tarjetas numeradas con iconos (calendario, tijera, candado) que entran con whoosh.

**[3:55 — Ficha del experimento #48]** (pantalla: tarjeta con la URL)
Ficha del experimento 48. Estado: murió, no sirvió. Cifra clave: retorno de −10.2%, Sharpe de −0.41 y −0.42, drawdown de −28.1% y cuenta cortada a los 156 días. Filtro que decidió: sobrevivir en todos los periodos, que no se cumple. Lección: un gráfico cortado en el pico cuenta otra historia que el gráfico completo. Revísalo completo en atlas-lab-one.vercel.app/e/48.
> BOCETO: tarjeta "FICHA · EXPERIMENTO #48" con Estado · Cifra clave · Filtro que decidió · Lección, y la URL `atlas-lab-one.vercel.app/e/48` en grande.

**[4:20 — Cierre]**
Contenido educativo, no es asesoría financiera. El trading no se promete: se prueba.
> BOCETO: fundido a la frase de marca en blanco sobre negro; logo ATLAS.

---

## SHORT (9:16, ≈ 43 s) — "El día 61"
Título del Short: Iba en $124,788… y terminó en $89,764 #Shorts

**[0-3 s]** "Día 61 de 156: la cuenta vale $124,788. El final: $89,764."
> BOCETO: B-roll vertical de pantallas de mercado con overlay 0.6; curva verde hasta "$124,788" y tijera; texto gigante "DÍA 61"; golpe de bajo y sacudida.

**[3-13 s]** "Es momentum: compro los tres activos que más subieron en 90 días y vendo los tres que más cayeron, de quince. Neutral al mercado, con apalancamiento doble."
> BOCETO: ranking que se reordena; chips "90 días" y "x2". Ken Burns hacia dentro.

**[13-26 s]** "Del 15 al 19 de diciembre, cinco días seguidos de menos 3.20%. En 156 días hubo 32 así. El 3 de abril de 2015 la cuenta se cerró en $89,764."
> BOCETO: cinco escalones rojos con tick; contador "32 / 156"; curva cayendo hasta el sello ✕.

**[26-36 s]** "Sharpe de −0.41 entre 2014 y 2024 y de −0.42 en 2007–2013, años que no vio. Es una muestra corta, y lo digo."
> BOCETO: dos barras rojas con tick; etiqueta "nunca lo vio" en la segunda; sello "MUESTRA CORTA".

**[36-43 s]** "Antes de creer un gráfico, pregunta dónde termina. Experimento 48 completo en el enlace; el video completo está en el canal. No es asesoría financiera."
> BOCETO: vuelve la tijera sobre "$124,788" (loop con el primer cuadro); abajo "Experimento #48 completo en el enlace"; texto pequeño "El trading no se promete: se prueba."

---

## Descripción (YouTube) — video largo
https://atlas-lab-one.vercel.app/e/48?utm_source=youtube&utm_medium=video&utm_campaign=exp048-t2
Ficha del experimento #48 (Momentum transversal): murió (No sirvió) · retorno −10.2% · Sharpe −0.41 (2014–2024) y −0.42 (2007–2013) · drawdown −28.1% · cuenta cortada a los 156 días (muestra corta).
La misma curva cortada en tres fechas: $124,788 en el día 61, $123,616 el 12 de enero de 2015 y $89,764 al final. Por qué conviene preguntar siempre dónde termina el gráfico.
Contenido educativo. No es asesoría financiera ni recomendación de inversión.

## Descripción (YouTube) — Short
https://atlas-lab-one.vercel.app/e/48?utm_source=youtube&utm_medium=short&utm_campaign=exp048-t2
Experimento #48 (Momentum transversal): murió · día 61 de 156: $124,788; final: $89,764 · Sharpe −0.41 y −0.42. Video completo en el canal. No es asesoría financiera.

## Capítulos
0:00 Gancho · 0:15 De qué experimento hablamos · 0:25 La estrategia en 30 segundos · 0:55 La subida · 1:15 Lo que viene después · 1:55 El mismo gráfico, tres historias · 2:20 El resultado completo · 2:50 Con tu capital · 3:05 Lo que no sabemos · 3:35 Tres preguntas ante cualquier gráfico · 3:55 Ficha del experimento #48 · 4:20 Cierre

## Etiquetas
momentum, momentum transversal, curva de capital, backtest, cherry picking, drawdown, Sharpe ratio, Jegadeesh y Titman, largo y corto, trading con datos, ATLAS Lab

## Rúbrica (autoevaluación, escala 1-5)
| Criterio | Nota | Por qué |
|---|---|---|
| hook_0_3s | 5 | Dos cifras reales enfrentadas ($124,788 / $89,764) y la tijera en el primer cuadro |
| ritmo | 4 | Hitos de la curva cada 2–3 s; el bloque de la estrategia es el más estático |
| promesa_cumplida | 5 | Promete mostrar cómo cambia la historia según dónde cortes y lo muestra con tres recortes reales |
| potencial_loop | 4 | El cierre vuelve a la tijera sobre el pico |
| claridad_no_traders | 4 | Explica momentum, Sharpe, drawdown y fuera de muestra |
| honestidad_atlas | 5 | Declara la muestra de 156 días y que el Sharpe de 2007–2013 es otra cesta; no extrapola |
| audio | 4 | Voz por clonar; golpe de bajo solo en el gancho |
| cta | 4 | Una petición (la ficha en la web) y remite al video completo |
Promedio: **4.38** (≥ 4.0). Hook del Short 5 (≥ 4) y honestidad 5: no descalificado.

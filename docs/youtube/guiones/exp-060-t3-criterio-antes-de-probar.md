# Experimento #60 — Ataques al cambio de régimen — ronda 1 · Tema 3 de 3: escribir qué tiene que pasar antes de probar

Estado del guion: **BORRADOR — pendiente de aprobación**
Tema 3 de 3 del experimento #60 · Qué aporta frente a los otros temas: es el tema del MÉTODO. Explica por qué se fija el criterio de éxito antes de mirar los resultados (tres condiciones), muestra el marcador de los tres ataques contra esas condiciones y cuenta por qué importa contar los intentos («ronda 1»). El tema 1 repasa los tres ataques y la balanza; el tema 2 desmonta el ataque 1 (tendencia + VIX).
Estado del experimento: **murió** (No sirvió): ninguno de los tres ataques supera el Sharpe de 0.37 de estar invertido a 1x · Serie: G (propuesta «Cambio de régimen», #59 → #62) · Relacionado: #59, #61, #62
Datos usados: `experiments.json` (v=60: verdict, analysis, notes, kpis, params_view, capital.note), `exp_details.json` (extra-v60: algo, code.snippet, filters), `series/extra-v60.json` (curva 0 = A2, curva 1 = comprar y esperar la cesta) y la tabla «Con tu capital» (`docs/youtube/*-capital.md`, fila #60). Aviso de datos: no se ejecutó el periodo fuera de muestra 2007-2013 ni el Deflated Sharpe para estos ataques; el guion lo dice.

## Títulos (3 opciones)
1. Escribe qué tiene que pasar antes de probar: tres arreglos, cero cumplen
2. El criterio fijado de antemano: mejorar 2022, no hundir 2014–2024 y superar el Sharpe de 0.37
3. Contar los intentos: por qué la «ronda 1» importa

## Miniatura (1280×720)
Fondo `#09090b`. Un cuaderno con una lista de tres casillas escritas a mano, todas con una ✕ roja `#e11d2a`. Texto grande blanco: «3 REGLAS · 0 CUMPLEN». Texto pequeño: «escritas ANTES de probar». Logo ATLAS esquina superior derecha.

---

## VIDEO LARGO (16:9, ≈ 5 min)

**[0:00 — Gancho]** (pantalla: una lista de tres condiciones y tres candidatos)
Antes de probar tres arreglos, escribí qué tenía que pasar. Tres condiciones. Ninguno de los tres arreglos las cumplió.
> BOCETO: un cuaderno con tres líneas escritas a mano; tres tarjetas A1, A2 y A3 caen sobre la lista y cada una recibe ✕; golpe de bajo y sacudida con la última.

**[0:15 — Este experimento]** (pantalla: rótulo «Experimento #60 · Ataques al cambio de régimen — ronda 1»)
Este es el experimento #60 de ATLAS Lab: ataques al cambio de régimen, ronda 1. Todos los resultados están en la página del experimento. Hoy no te cuento solo qué pasó, sino cómo se decide si algo funcionó.
> BOCETO: rótulo con «#60» y el nombre del experimento; logo ATLAS; whoosh suave.

**[0:35 — Por qué fijar el criterio antes]** (pantalla: una portería dibujada después de la jugada)
Hay un truco muy común: probar una idea, mirar el resultado y recién entonces decidir qué se consideraba éxito. Es como poner la portería después de ver dónde cayó el balón: siempre habrá un gol. Para evitarlo, el criterio se escribe antes de probar.
> BOCETO: balón cayendo, y después una portería que se dibuja en el lugar donde cayó; sello «el criterio va antes». Ilustración rotulada.

**[1:10 — Las tres condiciones]** (pantalla: lista de tres condiciones)
Tenía una regla de tendencia, la del experimento 59, que perdía en el mercado bajista. Un arreglo útil tenía que cumplir tres cosas a la vez. Una: mejorar el Sharpe en 2022, el año bajista. El Sharpe es la ganancia por unidad de riesgo. Dos: no hundir el periodo 2014 a 2024. Tres: superar a estar invertido a 1x, cuyo Sharpe es de 0.37.
> BOCETO: tres casillas rotuladas «1 · mejora 2022», «2 · no hunde 2014–2024», «3 · supera el Sharpe 0.37 de 1x», con la nota «escrito antes de probar».

**[1:50 — Los tres candidatos]** (pantalla: tarjetas A1, A2, A3)
Probé tres ataques en una cesta de 15 activos, con 3 puntos básicos de costo y señales con un día de rezago. El A1 suma un filtro de VIX a la tendencia. El A2 suma volatilidad objetivo, con un apalancamiento entre 0.5 y 3 veces. El A3 compra los activos sobre su media de 200 días y vende en corto los que están debajo.
> BOCETO: tres tarjetas con un diagrama de lógica cada una (A1: dos condiciones de salida; A2: apalancamiento entre x0.5 y x3; A3: activos con ▲ y ▼ según su media de 200 días).

**[2:30 — El marcador]** (pantalla: tabla de 3 por 3)
Cada ataque contra cada condición.
| Ataque | 1 · Mejora 2022 | 2 · No hunde 2014–2024 | 3 · Supera el Sharpe de 0.37 |
|---|---|---|---|
| A1 tendencia + VIX | ✕ (−4.0%) | ✕ (−16.8%) | ✕ (Sharpe −0.24) |
| A2 tendencia + vol-targeting | ✕ (−4.9%) | ✓ (+29.7%) | ✕ (Sharpe 0.31) |
| A3 largo/corto | ✓ (+6.7%, Sharpe +0.40) | ✕ (−24.1%) | ✕ (Sharpe −0.16) |
> BOCETO: la tabla se rellena casilla a casilla con tick: ✓ verdes y ✕ rojas; la fila completa de «tres ✓» queda vacía, con la etiqueta «ninguno».

**[3:10 — Cómo leer el marcador]** (pantalla: la tabla con columnas resaltadas)
Ningún ataque gana en las tres columnas. El A2 sostiene el periodo completo, pero se queda por debajo del 0.37 y cae más: −21.5% frente a −13.0%. El A3 gana en 2022 y hunde el periodo. Cada uno compra una cosa a cambio de otra. Y como el criterio pedía las tres a la vez, el veredicto es: no sirvió.
> BOCETO: columnas resaltadas una por una; tarjeta lateral «A2: caída máxima −21.5% contra −13.0% de 1x»; sello ✕ final.

**[3:45 — Contar los intentos]** (pantalla: contador de intentos)
Esta es la ronda 1: tres intentos. Cuantas más ideas pruebas, más fácil es que una salga bien por pura casualidad. Para eso existe el Deflated Sharpe, que descuenta la suerte según el número de intentos. En esta ronda no lo apliqué, pero sí cuento los intentos. La saga completa llegará a siete ataques antes de cerrarse.
> BOCETO: contador «intentos: 3» con las tres tarjetas; después «saga: 7» con cuatro tarjetas más apagadas. Texto: «cada intento cuenta».

**[4:15 — Lo que falta]** (pantalla: dos casillas vacías)
Quedan dos pruebas sin hacer para estos ataques: el periodo fuera de muestra, 2007 a 2013, y el Deflated Sharpe. Como ya fallaron el criterio de entrada, no se justifica seguir; pero el video lo dice porque falta.
> BOCETO: dos casillas vacías: «fuera de muestra 2007–2013» y «Deflated Sharpe», con el sello ámbar «NO APLICADAS».

**[4:35 — Con tu capital]** (pantalla: tarjeta «Con tu capital»)
La única curva de la ficha es la del A2. Con $10,000 termina en +$2,970; con $100,000, en +$29,702. Comprar y esperar la cesta, de julio de 2014 a finales de 2024: +$2,310 y +$23,098. Gana más en dólares porque opera con apalancamiento, pero con peor Sharpe y más caída.
> BOCETO: tarjeta de capital con dos filas (A2 y sin estrategia); nota al pie: «Curva de A2. Simulación, no es una promesa».

**[4:55 — Conclusión]** (pantalla: la lista de tres condiciones con las ✕)
Si el criterio se escribe antes, el veredicto no depende de mi estado de ánimo. Aquí el criterio decía tres cosas, y ningún arreglo las cumplió.
> BOCETO: el cuaderno del inicio con las tres ✕.

**[5:10 — Ficha del experimento #60 y cierre]** (pantalla: tarjeta con la ficha y la URL)
Ficha del experimento #60. Estado: murió. Cifra clave: A1 −16.8%, A2 +29.7% con Sharpe de 0.31 y A3 −24.1% en 2014–2024; ninguno supera el Sharpe de 0.37. Filtro que decidió: el criterio fijado de antemano, superar a estar invertido a 1x. Lección: cada arreglo solo mueve dónde ganas y dónde pierdes. Revísalo completo en atlas-lab-one.vercel.app/e/60. Contenido educativo, no es asesoría financiera. El trading no se promete: se prueba.
> BOCETO: tarjeta en pantalla con las 4 líneas de la ficha (estado rojo «murió») y la URL `atlas-lab-one.vercel.app/e/60` en grande; fundido a la frase de marca.

---

## SHORT (9:16, ≈ 44 s) — "La regla antes de la prueba"
Título del Short: Escribí qué tenía que pasar antes de probar. Ninguno lo cumplió #Shorts

**[0-3 s]** "Antes de probar, escribí qué tenía que pasar. Tres condiciones. Ninguno las cumplió."
> BOCETO: B-roll vertical de pantallas de mercado con overlay 0.6; cuaderno con tres casillas y tres ✕; golpe de bajo y sacudida. Karaoke con «ANTES» en rojo.

**[3-14 s]** "Mejorar el Sharpe en 2022, no hundir 2014–2024 y superar el Sharpe de 0.37 de estar invertido a 1x. Tres arreglos a una regla de tendencia."
> BOCETO: tres casillas aparecen una a una con whoosh; tarjetas A1, A2 y A3. Ken Burns hacia dentro.

**[14-27 s]** "Tendencia más VIX: menos 16.8%. Tendencia más volatilidad objetivo: más 29.7%, pero Sharpe de 0.31. Largo y corto: más 6.7% en 2022, pero menos 24.1% en total."
> BOCETO: cada tarjeta se rellena con su cifra y un tick; flash blanco al cambio.

**[27-37 s]** "Cada uno compra una cosa a cambio de otra. Ninguno gana en las tres. Y si el criterio se escribe antes, no puedes mover la portería."
> BOCETO: portería que intenta moverse y queda anclada con candado; tabla 3 por 3 con ninguna fila completa.

**[37-44 s]** "Video completo en el canal y experimento 60 completo en el enlace. Tres reglas, cero cumplidas."
> BOCETO: vuelve el cuaderno con tres ✕ (loop); rótulo «Experimento #60 completo en el enlace»; texto pequeño «No es asesoría financiera · El trading no se promete: se prueba».

---

## Descripción (YouTube)
https://atlas-lab-one.vercel.app/e/60?utm_source=youtube&utm_medium=video&utm_campaign=exp060-t3
Ficha del experimento #60: murió · A1 −16.8%, A2 +29.7% (Sharpe 0.31), A3 −24.1% en 2014–2024 · ninguno supera el Sharpe de 0.37 de estar invertido a 1x.
Por qué se escribe el criterio de éxito antes de probar y cómo quedaron tres arreglos a una regla de tendencia frente a tres condiciones fijadas de antemano. También por qué importa contar los intentos de una ronda.
Contenido educativo. No es asesoría financiera ni recomendación de inversión.
Descripción del Short (primera línea): https://atlas-lab-one.vercel.app/e/60?utm_source=youtube&utm_medium=short&utm_campaign=exp060-t3

Capítulos: 0:00 Gancho · 0:15 Este experimento · 0:35 Por qué fijar el criterio antes · 1:10 Las tres condiciones · 1:50 Los tres candidatos · 2:30 El marcador · 3:10 Cómo leer el marcador · 3:45 Contar los intentos · 4:15 Lo que falta · 4:35 Con tu capital · 4:55 Conclusión · 5:10 Ficha del experimento #60 y cierre

Etiquetas: criterio de éxito, metodología de backtest, Deflated Sharpe, intentos múltiples, cambio de régimen, mercado bajista, backtest, Sharpe ratio, validación de estrategias, trading con datos, ATLAS Lab, estrategias de trading

## Rúbrica (autoevaluación, 1–5)
| Pieza | hook_0_3s | ritmo | promesa_cumplida | potencial_loop | claridad_no_traders | honestidad_atlas | audio | cta | Promedio |
|---|---|---|---|---|---|---|---|---|---|
| Largo | 4 | 4 | 5 | 4 | 4 | 5 | 4 | 4 | 4.25 |
| Short | 4 | 4 | 5 | 5 | 4 | 5 | 4 | 4 | 4.38 |

Hook ≥ 4 ✓ · honestidad 5 ✓. Punto débil: es un tema de método, con menos cifras llamativas; la tabla 3 por 3 sostiene el ritmo. Las marcas ✓/✕ de la tabla salen de las pruebas de la ficha (solo el A3 mejora 2022) y de los porcentajes del periodo completo.

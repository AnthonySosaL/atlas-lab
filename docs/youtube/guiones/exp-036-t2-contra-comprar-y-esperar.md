# Experimento #36 — Calidad intrínseca sin reglas de prop firm · Tema 2: contra comprar y esperar

Estado del guion: **BORRADOR — pendiente de aprobación**
Tema 2 de 3 del experimento #36. Qué aporta frente a los otros temas: es la COMPARACIÓN. El tema 1 pregunta si el problema eran las reglas de la prop firm y el tema 3 explica el apalancamiento; este tema pone al bot frente al rival más simple, comprar la misma cesta y esperar, y mira rendimiento, Sharpe y caída máxima de los dos.
Estado del experimento: **MURIÓ** (sin reglas y con las señales de ayer, ni con ×2 hay ventaja: Sharpe −0.04)
Serie: **G — Construyendo un bot (y por qué murió)**
Datos usados: `experiments.json` (v=36: analysis, verdict, notes, metrics, kpis, capital; v=31 y v=37: verdict/capital) · `exp_details.json` (v36: algo, filters) · `series/20260610_140835_calidad-intrinseca-sin-reglas-prop-v36.json` (curva 1 = ×2 sin reglas 2014–2024; curva 2 = comprar y esperar) · fila #36 de la tabla «Con tu capital» (`docs/youtube/`).

## Títulos (opciones)
1. Mi bot ×2: −6.1%. La misma cesta, sin hacer nada: +58.9%
2. ¿Mi bot le gana a comprar y esperar? Sharpe −0.04 contra 0.47
3. El test más simple que mi bot reprobó: compararlo con no tocar nada
(Para el Short: «Mi bot perdió 6.1%. Quedarse quieto ganó 58.9% #shorts».)

## Miniatura
Fondo #09090b. A la izquierda, un robot corriendo en una cinta, con «−6.1» pequeño en rojo; a la derecha, una persona en una hamaca con «+58.9» pequeño en verde (#22c55e). Texto grande: «BOT 0 · HAMACA 1». Logo ATLAS arriba a la derecha. (Los números no se repiten en grande para no duplicar el título.)

---

## VIDEO LARGO (16:9, ≈ 4:17)

**[0:00 — Gancho]** (pantalla — BOCETO: curva real de series/…v36.json en rojo terminando en −6.1% y la curva gris de comprar y esperar subiendo hasta +58.9%; ambas cifras como contadores)
Entre 2014 y 2024, mi bot con apalancamiento ×2 y sin las reglas de la prop firm terminó en menos 6.1%. La misma cesta de activos, comprada y sin tocar, terminó en más 58.9%. Esta es la comparación más simple del trading, y mi bot la reprobó.

**[0:19 — Este es el experimento #36]** (pantalla — BOCETO: rótulo «EXPERIMENTO #36 · CALIDAD INTRÍNSECA SIN REGLAS DE PROP FIRM» con el logo ATLAS; la URL pequeña debajo)
Este es el experimento #36 de ATLAS Lab: Calidad intrínseca sin reglas de prop firm. Todos los resultados están en la página del experimento. Hoy lo miro desde un solo ángulo: ¿qué habría pasado sin hacer nada?

**[0:34 — El rival más simple]** (pantalla — BOCETO: dos carriles, «el bot» con sus tres piezas (filtro de pánico · corte del 3% · ×2) y «comprar y esperar» con una sola caja: «la misma cesta, sin tocar»)
Comprar y esperar significa comprar la cesta y no hacer nada más. Es el punto de comparación obligatorio: si una estrategia con filtros, cortes y apalancamiento no le gana a quedarse quieta, no está aportando. El bot tiene tres piezas: un filtro de pánico, que lo saca del mercado si el VIX, el índice del miedo, supera 28 y el crédito cae bajo su media de 40 días; un corte automático del 3% diario; y apalancamiento ×2. Todo decidido con el cierre de ayer.

**[1:07 — El marcador 2014–2024]** (pantalla — BOCETO: tabla de tres filas que se llena con tick; las cifras del bot en rojo y las de la cesta en gris; la caída de la cesta con la nota «calculada sobre la curva»)
| 2014–2024 | Bot ×2 sin reglas | Comprar y esperar |
|---|---|---|
| Resultado final | −6.1% | +58.9% |
| Sharpe | −0.04 | 0.47 |
| Caída máxima | −19.7% | −21.9% |
El Sharpe es la ganancia por unidad de riesgo; el del bot es casi cero y el de la cesta, 0.47. La caída máxima es el peor tramo de pico a valle; la de la cesta sale de su curva.

**[1:29 — La protección que no protegió mucho]** (pantalla — BOCETO: dos barras de caída máxima casi del mismo tamaño, −19.7% y −21.9%, y encima la diferencia de resultado final: −6.1% frente a +58.9%)
Fíjate en la fila de la caída máxima. El bot, con su filtro y su corte, cae menos 19.7%. La cesta sin tocar cae menos 21.9%. Casi la misma caída, pero el bot renuncia a toda la subida. No digo por qué ocurre, porque este experimento no lo mide; digo lo que mide: protección pequeña y rendimiento ausente.

**[1:52 — Otra ventana, el mismo signo]** (pantalla — BOCETO: tarjeta «2007–2024, experimentos 37 a 40» con dos barras: −7.1% (rojo) y +68.7% (gris); debajo, Sharpe −0.03 y 0.36)
¿Será cosa de una década? Los experimentos 37 a 40 usan una ventana más larga, 2007–2024, con la misma cartera ×2 y señales de ayer. Resultado: menos 7.1% contra más 68.7% de comprar y esperar, con Sharpe de menos 0.03 contra 0.36. Otra ventana, el mismo signo.

**[2:11 — Con menos apalancamiento tampoco]** (pantalla — BOCETO: tarjeta del experimento 31: «×1.5 sobrevive · Sharpe 0.09 y 0.11 · +4.2% en 2014–2024» contra «+58.9% · Sharpe 0.47»)
Se podría pensar: bájale el apalancamiento. En el experimento 31, con ×1.5, el bot sí sobrevive 2007–2024, pero con Sharpe de 0.09 y 0.11, y +4.2% en 2014–2024. Sigue sin batir a comprar y esperar, que dio 58.9% con Sharpe 0.47. Y con ×2 o ×3 la cuenta muere, con Sharpe de menos 0.53 y menos 1.06.

**[2:34 — Beta y alfa en una frase]** (pantalla — BOCETO: ilustración rotulada, no es dato real: una ola que levanta un barco («beta: lo que sube el mercado») y un remo que empuja a mayor velocidad («alfa: lo que añade tu estrategia»))
Hay una forma de decirlo. Una parte del resultado viene de que la cesta suba por sí sola: se llama beta. Otra parte viene de lo que tu estrategia añade: se llama alfa. Una estrategia que merece existir tiene que añadir algo sobre lo que ya da el mercado. En este experimento, el bot no añade: resta.

**[2:57 — El marcador de filtros]** (pantalla — BOCETO: checklist de exp_details.filters: Sharpe 2014–2024 ✗ · Sharpe 2007–2013 ✗ · batir a comprar y esperar ✗ · ×3 y ×4 ✗ · señal rezagada ✓ · costos completos —)
El tablero de filtros del laboratorio lo dice así. El Sharpe de 2014–2024, menos 0.04, y el de 2007–2013, 0.00, quedan bajo el 0.30 que exige el laboratorio. No bate a comprar y esperar. Con ×3 y ×4 tampoco hay ventaja. Pasa uno: la señal está rezagada y no mira el futuro. Los costos completos no se aplicaron: solo hay deslizamiento de 0.2% en el corte.

**[3:23 — Con tu capital]** (pantalla — BOCETO: tarjeta «Con tu capital»: −$6,094 contra +$58,879; la curva del bot llega a $105,214 y cae a $84,482, la de la cesta llega a $162,704, ambos valores de la curva)
Con $100,000 simulados entre 2014 y 2024, el bot ×2 termina en −$6,094. Comprar y esperar la misma cesta: +$58,879. En el camino, la cuenta del bot llega a $105,214 y baja a $84,482; la de la cesta llega a $162,704. Es una simulación histórica, no una promesa, y no recomienda comprar y esperar: solo muestra qué habría pasado en esas fechas. Con $10,000 serían la décima parte.

**[3:50 — Ficha del experimento #36]** (pantalla — BOCETO: tarjeta de ficha con sello «NO SIRVIÓ», cuatro líneas y la URL atlas-lab-one.vercel.app/e/36; logo ATLAS)
Ficha del experimento #36. Estado: no sirvió. Cifra clave: menos 6.1% del bot ×2 frente a más 58.9% de comprar y esperar, con Sharpe de menos 0.04 contra 0.47. Filtro que decidió: batir a comprar y esperar, que dio falso. Lección: compara siempre con no hacer nada antes de añadir filtros o apalancamiento. Revísalo completo en atlas-lab-one.vercel.app/e/36. Contenido educativo, no es asesoría financiera. El trading no se promete: se prueba.

---

## SHORT (9:16, ≈ 49 s)
Título del Short: Mi bot perdió 6.1%. Quedarse quieto ganó 58.9% #shorts
Fórmula visual (CLAUDE.md del canal): b-roll vertical real con overlay 0.6, Ken Burns alternado, subtítulos karaoke en MAYÚSCULAS con cifras en rojo, ticker arriba, whoosh + flash en cada corte; golpe (bass + sacudida) solo en 0-3 s y 28-40 s.

**[0-3 s]** "Mi bot perdió 6.1%. La misma cesta, sin hacer nada, ganó 58.9%."
- Boceto: b-roll de una hamaca en la playa (kb=in); «−6.1%» rojo y «+58.9%» verde enfrentados; golpe de bass.

**[3-14 s]** "De 2014 a 2024 comparé mi estrategia con lo más simple: comprar la cesta y no tocarla. El bot tiene filtro de pánico, corte automático del 3% y apalancamiento ×2."
- Boceto: dos carriles, bot con tres piezas y cesta con una caja.

**[14-28 s]** "Sharpe del bot: menos 0.04. Comprar y esperar: 0.47. Y la caída máxima del bot, menos 19.7%, casi igual que la de la cesta: menos 21.9%. La misma caída, sin la ganancia."
- Boceto: tarjetas de Sharpe y dos barras de caída casi iguales; la barra del bot se vacía de verde.

**[28-40 s]** "En una ventana más larga, de 2007 a 2024, lo mismo: menos 7.1% contra más 68.7%. Antes de mirar el Sharpe de una estrategia, mira qué pasaba sin hacer nada."
- Boceto: curva real de series/…v37.json (bot rojo, cesta gris); sacudida al cruzar las dos cifras.

**[40-48 s]** "Video completo en el canal. Experimento 36 completo en el enlace. No es asesoría financiera. ¿Bot o hamaca? Menos 6.1 contra más 58.9."
- Boceto: sello «NO SIRVIÓ»; logo ATLAS y «EXPERIMENTO #36 · ENLACE». Loop: la pregunta final enlaza con el gancho.

## Descripción (YouTube)
**Video largo**
https://atlas-lab-one.vercel.app/e/36?utm_source=youtube&utm_medium=video&utm_campaign=exp036-t2
Ficha del experimento #36 (calidad intrínseca sin reglas de prop firm): no sirvió. Bot ×2 sin reglas 2014–2024: −6.1%, Sharpe −0.04, caída máxima −19.7%. Comprar y esperar la misma cesta: +58.9%, Sharpe 0.47.
Comparo el bot con el rival más simple, quedarse quieto, y repito la comparación en 2007–2024 (−7.1% contra +68.7%). No es una recomendación de comprar y esperar.

Capítulos: 0:00 Gancho · 0:19 Este es el experimento #36 · 0:34 El rival más simple · 1:07 El marcador 2014–2024 · 1:29 La protección que no protegió mucho · 1:52 Otra ventana, el mismo signo · 2:11 Con menos apalancamiento tampoco · 2:34 Beta y alfa en una frase · 2:57 El marcador de filtros · 3:23 Con tu capital · 3:50 Ficha del experimento #36

**Short**
https://atlas-lab-one.vercel.app/e/36?utm_source=youtube&utm_medium=short&utm_campaign=exp036-t2
Experimento #36: bot ×2 −6.1% contra +58.9% de comprar y esperar (2014–2024). No sirvió.

Contenido educativo. No es asesoría financiera ni recomendación de inversión.

Etiquetas: comprar y esperar, benchmark, alfa y beta, bot de trading, backtest, Sharpe ratio, apalancamiento, caída máxima, drawdown, prop firm, ATLAS Lab

## Rúbrica (autoevaluación — criterios del CLAUDE.md del canal, 1-5)
| hook_0_3s | ritmo | promesa_cumplida | potencial_loop | claridad_no_traders | honestidad_atlas | audio | cta |
|---|---|---|---|---|---|---|---|
| 5 | 4 | 5 | 5 | 5 | 5 | 4 | 4 |

Promedio: **4.63** → cumple el corte (≥ 4.0; hook ≥ 4 y honestidad 5).
Notas: el hook enfrenta dos cifras opuestas y verificables. Se aclara que la comparación no recomienda comprar y esperar. Punto débil: la caída de −21.9% sale de la curva de series/ y no de la ficha; el largo lo rotula así.

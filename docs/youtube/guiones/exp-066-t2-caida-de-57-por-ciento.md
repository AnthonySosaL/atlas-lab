# Experimento #66 — Captura de anomalías (|z|>2 → reversión) · Tema 2 de 3: la caída de −57.0%

Estado del guion: **BORRADOR — pendiente de aprobación**
Tema 2 de 3 del experimento #66 · Qué aporta frente a los otros temas: es el tema del DINERO y del RIESGO. Explica qué es el drawdown con el caso de una idea «lógica» que llegó a caer −57.0% (−$56,983 de caída máxima con $100,000, −$37,344 al final) y por qué importa distinto que el Sharpe. El tema 1 abre con la idea y el resultado general; el tema 3 trata del 61% de los días con señal y de las dos formas de medir el Sharpe.
Estado del experimento: **murió** (Sharpe −0.21 incluso sin costos)
Serie: F, por tema (anomalías de corto plazo; el plan aún no lista #65–#67) · Hermano del #65
Datos usados: `experiments.json` (v=66: verdict, analysis, notes, kpis, metrics, params_view, capital) · `exp_details.json` (extra-v66: algo, code.snippet, filters) · `series/extra-v66.json` ([0] captura de anomalías, bruto; [1] cesta comprar y esperar) · tabla «Con tu capital» (`docs/youtube/*-capital.md`, fila #66; el $10k se calcula con la misma regla de la tarjeta del sitio).

## Títulos
1. −57.0% de caída máxima: lo que cuesta apostar a que lo extremo regresa
2. −$37,344 por cada $100,000: la idea lógica que perdió dinero incluso sin costos
3. Qué significa un drawdown de −57.0% (y por qué importa más que el Sharpe)

## Miniatura
Fondo `#09090b`. Una curva roja `#e11d2a` que cae como una montaña hasta una línea horizontal rotulada «−57.0%». Debajo, en blanco: «CAÍDA MÁXIMA». En una esquina, pequeña, una curva gris que sube: «comprar y esperar». Logo ATLAS esquina inferior derecha.

---

## VIDEO LARGO (≈ 5 min, experimento corto)

**[0:00 — Gancho]** (pantalla: curva que cae y el contador «−57.0%»)
Una idea que suena lógica llegó a perder más de la mitad del capital: una caída máxima de −57.0%. Y esto, sin descontar un solo costo.
> BOCETO: curva roja que cae y se detiene en una línea horizontal; contador «−57.0%»; golpe de bajo y sacudida al llegar.

**[0:15 — Este experimento]** (pantalla: rótulo «Experimento #66 · Captura de anomalías (|z|>2 → reversión)»)
Este es el experimento #66 de ATLAS Lab: captura de anomalías. Todos los resultados están en la página del experimento. Hoy me centro en lo que más se siente cuando una idea falla: cuánto dinero se pierde por el camino.
> BOCETO: rótulo con «#66» y el nombre del experimento; logo ATLAS; whoosh suave.

**[0:35 — Qué es el drawdown]** (pantalla: montaña con un valle marcado)
El drawdown, o caída máxima, es la peor caída desde un pico: si tu cuenta llegó a un máximo y luego bajó, cuánto bajó desde ahí. No es lo que pierdes al final; es lo que habrías visto en tu pantalla en el peor momento del camino. Por eso importa: muchas personas abandonan una estrategia antes de llegar al final.
> BOCETO: curva ilustrativa con un pico y un valle; flecha entre ambos rotulada «drawdown». Ilustración, sin datos.

**[1:05 — La regla en treinta segundos]** (pantalla: banda de ±2 desviaciones)
La regla busca extremos. Mido cuántas desviaciones se alejó el precio de su media de 20 días, el z-score. Si baja de −2, compro; si pasa de 2, vendo en corto, apostando a que regresa a lo normal. La señal es la de ayer y la cesta tiene 15 activos, de 2012 a 2024.
> BOCETO: banda alrededor de la media de 20 días; «COMPRA» verde bajo −2 y «VENDE EN CORTO» rojo sobre 2. Recuadro `params_view`: ventana 20 d · |z|>2 · rezago 1 día · bruto · 2012–2024.

**[1:40 — La curva y el dinero]** (pantalla: tarjeta «Con tu capital»; curva roja bajo la línea de partida y gris subiendo)
De 2012 a 2024, con $10,000, la curva perdió $3,734; comprar y esperar la misma cesta, +$7,769. Con $100,000: −$37,344 contra +$77,693. La peor caída desde un máximo fue de −$5,698 con $10,000 y de −$56,983 con $100,000: un −57.0%.
> BOCETO: curva `series/extra-v66.json[0]` roja y `[1]` gris; selector $10,000 / $100,000; aviso ámbar «bruto, sin costos».

**[2:25 — Qué se siente un −57.0%]** (pantalla: una cuenta de $100,000 que se vacía a la mitad)
Con $100,000, un −57.0% de caída máxima significa ver el saldo caer más de la mitad desde su punto más alto, aunque la estrategia haya sido «lógica». Es el tipo de caída que hace dudar de cualquier regla. Y el final es peor que el punto de partida: −$37,344.
> BOCETO: barra de saldo que baja por debajo de la mitad con una línea de «pico»; contador «−$56,983» y luego «final: −$37,344».

**[3:05 — El Sharpe y el drawdown dicen cosas distintas]** (pantalla: dos medidores)
El Sharpe, que mide la ganancia por unidad de riesgo, fue de −0.21 en los días con señal. Dice cuánta calidad tiene el resultado. El drawdown dice cuánto tendrías que aguantar. Una estrategia puede tener un Sharpe discreto y un drawdown soportable, o al revés; hay que mirar los dos.
> BOCETO: dos medidores: «Sharpe −0.21 = calidad» y «drawdown −57.0% = lo que aguantas».

**[3:40 — Y esto, sin costos]** (pantalla: sello «bruto»)
Todo esto es bruto. La regla actúa en muchos días y los costos solo la empeorarían: con costos, el resultado sería peor. No medí la versión con costos porque la versión sin ellos ya no supera la referencia de 0.13, que es lo que da comprar y esperar en 2014–2020.
> BOCETO: sello «BRUTO · SIN COSTOS»; línea de referencia verde «0.13» por encima del −0.21.

**[4:10 — Qué dice y qué no dice]** (pantalla: dos columnas)
Dice que, con esta regla, en esta cesta y en estos años, apostar a que los extremos regresan no funciona. No dice que ninguna otra definición de extremo vaya a fallar: no probé otros umbrales ni ventanas aquí.
> BOCETO: dos columnas: «sí: |z|>2, 20 días, 15 activos, 2012–2024» y «no medido: otros umbrales, otras ventanas».

**[4:30 — Conclusión]** (pantalla: la curva del inicio)
Antes de entrar en una idea que suena lógica, mira su peor tramo, no solo su final.
> BOCETO: la curva del inicio con «−57.0%».

**[4:40 — Ficha del experimento #66 y cierre]** (pantalla: tarjeta con la ficha y la URL)
Ficha del experimento #66. Estado: murió. Cifra clave: Sharpe de −0.21 sin costos y −$37,344 por cada $100,000, con una caída máxima de −57.0%. Filtro que decidió: el Sharpe bruto, por debajo de la referencia de 0.13. Lección: los extremos a veces son el inicio de una tendencia, no una reversión. Revísalo completo en atlas-lab-one.vercel.app/e/66. Contenido educativo, no es asesoría financiera. El trading no se promete: se prueba.
> BOCETO: tarjeta en pantalla con las 4 líneas de la ficha (estado rojo «murió») y la URL `atlas-lab-one.vercel.app/e/66` en grande; fundido a la frase de marca.

---

## SHORT (9:16, ≈ 44 s) — "Más de la mitad"

**[0-3 s]** "Una idea lógica llegó a perder menos 57.0% desde su pico. Sin costos."
> BOCETO: B-roll de pantalla de bolsa en rojo, kb=in, overlay 0.6; curva que cae y «−57.0%»; golpe de bajo + sacudida. Karaoke con «57.0%» en rojo.

**[3-14 s]** "La regla: si el precio se aleja más de dos desviaciones de su media de 20 días, apuesta a que vuelve. Quince activos, de 2012 a 2024."
> BOCETO: banda de ±2 desviaciones y flechas verde y roja; whoosh. Ken Burns hacia dentro.

**[14-26 s]** "Con 100,000 dólares, perdió 37,344. Comprar y esperar la misma cesta ganó 77,693. Y en el camino, la caída máxima fue de menos 56,983."
> BOCETO: barra roja −$37,344 frente a barra gris +$77,693; contador −$56,983; tick; flash blanco.

**[26-37 s]** "La caída máxima es la peor caída desde un pico: lo que habrías visto en tu pantalla en el peor momento. Y esto es bruto: con costos, sería peor."
> BOCETO: montaña con valle marcado y el sello «bruto».

**[37-44 s]** "Video completo en el canal y experimento 66 completo en el enlace. Antes de una idea lógica, mira su peor tramo. Menos 57.0."
> BOCETO: vuelve la curva con «−57.0%» (loop); rótulo «Experimento #66 completo en el enlace»; texto pequeño «No es asesoría financiera · El trading no se promete: se prueba».

---

## Descripción (YouTube)
https://atlas-lab-one.vercel.app/e/66?utm_source=youtube&utm_medium=video&utm_campaign=exp066-t2
Ficha del experimento #66: murió · Sharpe −0.21 sin costos · con $100,000, −$37,344 contra +$77,693 de comprar y esperar · caída máxima de −57.0%.
Qué es el drawdown y por qué importa tanto como el Sharpe, con el caso de apostar a que los extremos regresan (z-score de 20 días, |z|>2, 15 activos, 2012–2024). Cifras brutas, sin costos.
Contenido educativo. No es asesoría financiera ni recomendación de inversión.
Descripción del Short (primera línea): https://atlas-lab-one.vercel.app/e/66?utm_source=youtube&utm_medium=short&utm_campaign=exp066-t2

Capítulos: 0:00 Gancho · 0:15 Este experimento · 0:35 Qué es el drawdown · 1:05 La regla en treinta segundos · 1:40 La curva y el dinero · 2:25 Qué se siente un −57.0% · 3:05 El Sharpe y el drawdown dicen cosas distintas · 3:40 Y esto, sin costos · 4:10 Qué dice y qué no dice · 4:30 Conclusión · 4:40 Ficha del experimento #66 y cierre

Etiquetas: drawdown, caída máxima, reversión a la media, z-score, anomalías de mercado, extremos estadísticos, backtest, Sharpe ratio, riesgo, trading con datos, ATLAS Lab, estrategias de trading

## Rúbrica (autoevaluación)
| Pieza | hook_0_3s | ritmo | promesa_cumplida | potencial_loop | claridad_no_traders | honestidad_atlas | audio | cta | Promedio |
|---|---|---|---|---|---|---|---|---|---|
| Largo | 4 | 4 | 5 | 4 | 5 | 5 | 4 | 4 | 4.38 |
| Short | 5 | 4 | 5 | 5 | 4 | 5 | 4 | 4 | 4.50 |

Hook ≥ 4 ✓ · honestidad 5 ✓. Punto débil: el hook del Short «menos 57.0%» necesita la palabra «pico» para no confundirse con la pérdida final (−$37,344); el video las distingue en bloques separados.

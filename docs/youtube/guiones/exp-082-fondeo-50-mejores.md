# Experimento #82 — ¿Sirven las 50 mejores para fondeo? (desafío tipo FTMO en 3 meses)

Estado del guion: **BORRADOR — pendiente de aprobación**
Estado del experimento: **murió** (sin apalancamiento ninguna llega a +10% en 3 meses; con x5 la mejor pasa 3.5% y revienta 4.7%) · Serie C — «El experimento grande» (plan-series.md) · 1 largo + 1 Short
Datos usados: `experiments.json` (v=82: kpis, metrics, verdict, analysis, chart, capital, period), `exp_details.json` (extra-v82: algo, filters; sin script). No tiene `series/` (la ficha dice que no hay curva de capital). Cifras de apoyo (93% en efectivo, ≈0.4% al año) del #81.
Producción (CLAUDE.md del canal): b-roll real detrás de cada escena con overlay oscuro 0.6, Ken Burns alternando in/out, subtítulos karaoke en MAYÚSCULAS con palabras clave en rojo, un dato visual por escena, golpe de bajo + sacudida solo en 1–2 momentos. Colores: rojo `#e11d2a`, verde `#22c55e`, fondo `#09090b`. Cifras en dígitos aquí; en el campo `tts` del JSON, en palabras.

## Títulos (3 opciones)
1. Fondeo: la mejor estrategia pasa 3.5% y revienta 4.7%
2. Puse a las 50 mejores estrategias en un challenge de fondeo
3. Challenge de fondeo: 21 ventanas aprobadas, 28 reventadas

## Miniatura (pensada para el título 1)
Fondo `#09090b`. Una fila de 50 mini-curvas, cada una con una ✕ roja. Texto grande: «0.0% PASAN» (rojo y blanco) y debajo, pequeño, «sin apalancamiento». Logo ATLAS arriba a la derecha.

---

## VIDEO LARGO (16:9, ≈ 6 min)

**[0:00 — Gancho]** (pantalla: 50 curvas y una cifra)
Tomé las 50 mejores estrategias de las 33,363 que probé y las puse en un challenge de fondeo: esas pruebas que te dan una cuenta grande si las superas. Sin apalancamiento, pasan 0.0%. Con apalancamiento x5, la mejor pasa el 3.5% de las veces… y revienta la cuenta el 4.7%. Pierde más veces de las que gana.
BOCETO: 50 mini-curvas en cuadrícula; una a una se tachan con ✕ roja; al final, texto «0.0%». Luego dos barras: 3.5% verde y 4.7% rojo (del `chart` de la ficha). kb=in.

**[0:40 — Qué es un challenge]** (pantalla: las reglas como contadores)
Una empresa de fondeo te presta una cuenta si superas una prueba. Aquí uso las reglas tipo FTMO: objetivo de +10%, caída máxima de −10%, pérdida diaria máxima de −5% y una ventana de 3 meses. Si llegas a +10% sin romper los límites, pasas. Si rompes un límite, revientas la cuenta. Y si se acaba el tiempo sin llegar, te quedas sin llegar.
BOCETO: tres medidores: objetivo «+10%» (verde), caída «−10%» y pérdida diaria «−5%» (rojos), reloj de 3 meses. Parámetros de `params_view`.

**[1:35 — Cómo lo probé]** (pantalla: cómo se eligió a las 50)
Las 50 mejores son las que tienen el mayor Sharpe en el peor de sus dos periodos fuera de muestra, 2007–2013 y 2021–2024: periodos que las estrategias nunca vieron. Con cada una simulé cientos de ventanas de 3 meses en distintas épocas, sin apalancamiento y con x5, es decir, con las posiciones multiplicadas por cinco. Una limitación que te debo decir: de este experimento se conservan las métricas registradas, pero no el script de la simulación, así que es un resultado anotado, no un código que puedas reproducir.
BOCETO: embudo 33,363 → 50 (criterio «mayor Sharpe fuera de muestra, el peor de los dos»). Nota fija al pie en gris: «Sin script: resultado registrado (exp_details)».

**[2:30 — Resultados]** (pantalla: barras `chart`)
Sin apalancamiento, 0.0% pasan; el 100% se queda sin tiempo. Con x5, en promedio las 50 pasan 0.4%, y el 99% se queda sin llegar a tiempo. La mejor con x5, una llamada RSI5 menor que 18, pasa 3.5% de las ventanas, 21 aprobadas, y revienta el 4.7%, 28 cuentas reventadas.
| Caso | Pasan | Revientan |
|---|---|---|
| Sin apalancamiento (x1), las 50 | 0.0% | — |
| Con x5, promedio de las 50 | 0.4% | — |
| Con x5, la mejor (RSI5 < 18) | 3.5% (21 ventanas) | 4.7% (28 ventanas) |
BOCETO: barras del `chart` (pasan: 0, 0.4, 3.5; revienta: 4.7 en rojo). Sacudida cuando 4.7% supera a 3.5%.

**[3:40 — Por qué]** (pantalla: 93% en efectivo y el dilema del apalancamiento)
Sin apalancamiento son demasiado lentas: están en efectivo cerca del 93% del tiempo y hacen alrededor de 0.4% al año, como vimos en el experimento 81. No hay manera de llegar a +10% en 3 meses. Con x5 aparece el otro problema: el apalancamiento que necesitas para ganar +10% rápido es justo el que te revienta el límite de −10%. Es lo mismo que vi en los experimentos 9 al 40. Según esta simulación, pagar un challenge con cualquiera de estas sería tirar el dinero: fallarías entre el 96% y el 100% de las veces.
BOCETO: barra de tiempo 93% gris / 7% verde; luego una curva con ×5 que sube y choca contra la línea roja de −10%. Texto: «Ganar rápido = riesgo que revienta».

**[4:40 — Con tu capital]** (pantalla: tarjeta sin curva)
Aquí no hay un monto en dólares que mostrar: este experimento no tiene curva de capital, mide la probabilidad de pasar o reventar un challenge en ventanas de 3 meses. Esa probabilidad, en el mejor caso, es 3.5% de pasar y 4.7% de reventar.
BOCETO: tarjeta de capital con el texto de `capital.note` y las dos cifras 3.5% (verde) y 4.7% (rojo).

**[5:10 — Conclusión]**
No sirvió. Ni las mejores de decenas de miles de estrategias sirven para pasar un challenge de fondeo: sin apalancamiento son lentas, y con x5 pierden más veces de las que ganan. El trading no se promete: se prueba.

**[5:40 — Cierre]**
Todos los datos en atlas-lab-one.vercel.app, experimento 82. Contenido educativo, no es asesoría financiera.

---

## SHORT (9:16, ≈ 45 s)

**[0-3 s]** «Puse a las 50 mejores estrategias en un challenge de fondeo. Pasaron: 0.0%.»
BOCETO: 50 mini-curvas tachadas con ✕ sobre b-roll de oficina de trading (kb=in), overlay 0.6; «0.0%» gigante.

**[3-14 s]** «Las reglas: +10% de objetivo, caída máxima de −10%, pérdida diaria máxima de −5%, tres meses.»
BOCETO: tres medidores con las cifras (kb=out); ticker arriba.

**[14-28 s]** «Sin apalancamiento, ninguna llega: están en efectivo el 93% del tiempo. Con x5, la mejor pasa el 3.5%… y revienta el 4.7%.»
BOCETO: barra verde 3.5% y barra roja 4.7% que la supera; golpe de bajo + sacudida en 4.7%.

**[28-40 s]** «21 ventanas aprobadas. 28 cuentas reventadas. El apalancamiento para ganar rápido es justo el que te revienta.»
BOCETO: contadores 21 (verde) y 28 (rojo); curva ×5 que choca con la línea de −10%.

**[40-45 s]** «El video completo está en el canal. Las 50 mejores: pasan cero sin apalancamiento.»
BOCETO: «0.0%» rojo; texto final «Video completo en el canal» + pequeño «No es asesoría financiera · El trading no se promete: se prueba». Loop: «pasan cero» conecta con el «Pasaron: 0.0%» inicial.

---

## Descripción de YouTube
Simulé un challenge de fondeo tipo FTMO (objetivo +10%, caída máxima −10%, pérdida diaria máxima −5%, 3 meses) con las 50 mejores estrategias de mi laboratorio. Sin apalancamiento pasan 0.0%; con x5, la mejor pasa 3.5% y revienta 4.7%. De este experimento se conservan las métricas, no el script.
Datos completos: https://atlas-lab-one.vercel.app (experimento #82)
Contenido educativo. No es asesoría financiera ni recomendación de inversión.

## Capítulos
0:00 Gancho · 0:40 Qué es un challenge · 1:35 Cómo lo probé · 2:30 Resultados · 3:40 Por qué · 4:40 Con tu capital · 5:10 Conclusión

## Etiquetas
fondeo, prop firm, ftmo, challenge de fondeo, cuenta fondeada, apalancamiento, drawdown, simulación, backtest, trading con datos, atlas lab, estrategias de trading

## Rúbrica (autoevaluación, 1–5)
| Pieza | hook_0_3s | ritmo | promesa_cumplida | potencial_loop | claridad_no_traders | honestidad_atlas | audio | cta | Promedio |
|---|---|---|---|---|---|---|---|---|---|
| Largo | 5 | 4 | 5 | 4 | 4 | 5 | 4 | 4 | 4.4 |
| Short | 5 | 4 | 5 | 5 | 4 | 5 | 4 | 4 | 4.5 |

Hook ≥ 4 ✓ · honestidad 5 ✓. Punto débil: sin curva ni script, el visual depende de barras y medidores; hay que mostrar la nota «sin script: resultado registrado».

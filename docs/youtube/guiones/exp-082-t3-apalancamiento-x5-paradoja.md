# Experimento #82 — Tema 3: la paradoja del apalancamiento (x1 no llega, x5 revienta)

Tema 3 de 3 del experimento #82 · Qué aporta frente a los otros temas: es el tema del apalancamiento. Explica qué hace multiplicar las posiciones por cinco dentro de un challenge, por qué la salida «apalancar para llegar» choca con el límite de caída, y lo conecta con la simulación del experimento 9 (a ×4 reventaba el 50.4% de las veces). El tema 1 cuenta el resultado completo; el tema 2, cómo se eligieron las 50 y por qué «mejor» no es «apta».
Estado del guion: **BORRADOR — pendiente de aprobación**
Estado del experimento: **murió** (sin apalancamiento ninguna llega a +10% en 3 meses; con x5 la mejor pasa 3.5% y revienta 4.7%) · Serie C — «El experimento grande» (plan-series.md) · 1 largo + 1 Short
Datos usados: `experiments.json` (v=82: kpis, metrics, verdict, analysis, notes, chart, params_view, capital), `exp_details.json` (extra-v82: algo, filters; sin script), y la columna «Ojo» de la fila 9 de la tabla «Con tu capital» de `docs/youtube`. No tiene `series/`.
Producción (CLAUDE.md del canal): b-roll real detrás de cada escena con overlay oscuro 0.6, Ken Burns alternando in/out, subtítulos karaoke en MAYÚSCULAS con palabras clave en rojo, un dato visual por escena, golpe de bajo + sacudida solo en 1–2 momentos. Colores: rojo `#e11d2a`, verde `#22c55e`, fondo `#09090b`. Cifras en dígitos aquí; en el campo `tts` del JSON, en palabras.

## Títulos (3 opciones)
1. Apalancamiento x5: el 99% sigue sin llegar a +10% en 3 meses
2. La mejor pasa 21 ventanas y revienta 28: la paradoja del apalancamiento
3. Para ganar +10% rápido necesitas justo el riesgo que te revienta

## Miniatura (pensada para el título 1)
Fondo `#09090b`. Una curva que se dispara con una «x5» y choca contra una línea roja de −10%. Texto grande: «21 CONTRA 28» (3 palabras/cifras, sin repetir el título). Logo ATLAS arriba a la derecha.

---

## VIDEO LARGO (16:9, ≈ 6 min)

**[0:00 — Gancho]** (pantalla: «x5» y «99%»)
Multiplicar por cinco no basta. Con apalancamiento x5, en promedio el 99% de las ventanas de las 50 mejores estrategias sigue sin llegar a +10% en tres meses. Y la mejor de todas aprobó 21 y reventó 28.
BOCETO: «x5» que se enciende, contador «99%» en rojo y luego dos contadores, 21 verde y 28 rojo. kb=in.

**[0:15 — Qué es este experimento]** (pantalla: rótulo con el número y el nombre)
Este es el experimento #82 de ATLAS Lab: ¿Sirven las 50 mejores para fondeo? Desafío tipo FTMO en 3 meses. Todos los resultados están en la página del experimento.
BOCETO: rótulo en rojo y blanco «EXPERIMENTO #82» con el nombre debajo, sobre la curva atenuada (overlay 0.6). Whoosh corto. kb=out.

**[0:25 — Qué hace el apalancamiento]** (pantalla: dos curvas, x1 y x5)
Apalancar es multiplicar las posiciones. Con x5, cada movimiento del mercado vale cinco veces: la ganancia, y también la pérdida. Eso importa por los límites del reto: un challenge tipo FTMO te da 3 meses para llegar a +10%, pero revientas la cuenta si cae −10% en total o si pierdes más de −5% en un solo día. Con x5, esos límites se alcanzan con un movimiento del mercado cinco veces más pequeño.
BOCETO: la misma curva dibujada en x1 (suave) y en x5 (cinco veces más amplia), con las líneas rojas de −10% y −5%; la curva x5 toca la línea mientras la x1 no. kb=in.

**[1:20 — Sin apalancar: demasiado lenta]** (pantalla: reloj de 3 meses)
Primero, sin apalancamiento. Las 50 mejores estrategias del laboratorio hacen alrededor de 0.4% al año y están en efectivo cerca del 93% del tiempo. Resultado: 0.0% llega a +10% en 3 meses; el 100% se queda sin tiempo. No revientan: simplemente no llegan.
BOCETO: reloj que se agota con la curva x1 casi plana lejos de la línea de +10%. Barra de tiempo 93% gris / 7% verde. kb=out.

**[2:00 — Con x5: aparece el otro problema]** (pantalla: barras del `chart`)
Con x5, en promedio las 50 pasan 0.4% de las ventanas, y el 99% sigue sin llegar a tiempo. La mejor, la que compra cuando el RSI de 5 días baja de 18, pasa 3.5% de las ventanas, es decir, 21 aprobadas. Pero revienta 4.7%, 28 cuentas reventadas. Pierde más veces de las que gana.
| Caso | Pasan | Revientan | Sin llegar a tiempo |
|---|---|---|---|
| Sin apalancamiento (x1), las 50 | 0.0% | — | 100% |
| Con x5, promedio de las 50 | 0.4% | — | 99% |
| Con x5, la mejor (RSI5 < 18) | 3.5% (21) | 4.7% (28) | — |
BOCETO: barras del `chart` de la ficha (0 · 0.4 · 3.5 verdes; 4.7 roja). Contadores 21 y 28. Sacudida cuando 4.7% supera a 3.5%. Las celdas «—» se muestran en gris: la ficha no publica ese dato.

**[3:00 — La paradoja]** (pantalla: dos flechas)
Aquí está la paradoja. Si no apalancas, no llegas. Si apalancas lo bastante para llegar rápido, el límite de caída te alcanza antes. El apalancamiento que necesitas para ganar +10% rápido es justo el que te revienta el límite de −10%. No es mala suerte de estas 50: es lo que pasa cuando la ventaja por unidad de tiempo es pequeña.
BOCETO: dos flechas: «x1 → no llega» y «x5 → revienta»; en medio, una curva que sube y choca con la línea roja. Texto: «Ganar rápido = riesgo que revienta». kb=in.

**[3:50 — No es la primera vez]** (pantalla: tarjeta del experimento 9)
Lo mismo apareció antes con otra cartera. En el experimento 9, una simulación con remuestreo del periodo alcista 2019–2024, sin costos, a ×4 la cuenta reventaba el 50.4% de las veces. Otra cartera, otro método, el mismo patrón: subir el apalancamiento sube la probabilidad de reventar.
BOCETO: tarjeta «#9 · remuestreo 2019–2024, sin costos · a ×4 revienta 50.4%». Cartel gris «otra cartera y otro método». kb=out.

**[4:30 — Una limitación]** (pantalla: nota fija)
Un aviso: de este experimento se conservan las métricas registradas, pero no el script de la simulación. Los periodos exactos, los costos y el rezago de la señal no se pueden verificar. Es un resultado anotado, no un código que puedas reproducir.
BOCETO: cartel ámbar fijo: «Sin script: resultado registrado (exp_details)».

**[4:55 — Con tu capital]** (pantalla: tarjeta sin curva)
No hay un monto en dólares: este experimento mide la probabilidad de pasar o reventar un challenge en ventanas de 3 meses. En el mejor caso, 3.5% de pasar y 4.7% de reventar.
BOCETO: tarjeta de capital con el texto de `capital.note` y las dos cifras, 3.5% verde y 4.7% rojo.

**[5:15 — Conclusión]**
El apalancamiento no crea ventaja: escala el resultado y escala el riesgo. Si la ventaja es pequeña, para llegar a +10% en 3 meses necesitas tanto apalancamiento que los límites te alcanzan antes. Según esta simulación, pagar un challenge con cualquiera de estas 50 sería fallar entre el 96% y el 100% de las veces. El trading no se promete: se prueba.

**[5:50 — Ficha del experimento #82]** (pantalla: tarjeta con la ficha y la URL)
Ficha del experimento #82. Estado: murió. Cifra clave: con x5, la mejor pasa 3.5% y revienta 4.7%; sin apalancamiento pasan 0.0%. Filtro que decidió: el límite de caída de −10%, que el apalancamiento necesario para llegar a +10% rompe antes. Lección: apalancar no crea ventaja, solo multiplica el riesgo. Revísalo completo en atlas-lab-one.vercel.app/e/82.
BOCETO: tarjeta con el número «#82», el sello «MURIÓ» en rojo, tres líneas (cifra clave, filtro que decidió, lección) y la URL `atlas-lab-one.vercel.app/e/82` grande abajo. kb=in.

**[6:10 — Cierre]**
Todos los datos en atlas-lab-one.vercel.app, experimento 82. Contenido educativo, no es asesoría financiera.

---

## SHORT (9:16, ≈ 49 s)

**[0-3 s]** «Con apalancamiento x5, el 99% sigue sin llegar a +10% en tres meses.»
BOCETO: «x5» y contador «99%» rojo gigante, sobre b-roll de gráfico (kb=in), overlay 0.6.

**[3-15 s]** «El reto: +10%, sin caer −10% y sin perder −5% en un día. Con x5, cada movimiento del mercado vale cinco veces.»
BOCETO: tres medidores y la curva x5 más amplia que la x1 (kb=out); ticker arriba.

**[15-30 s]** «La mejor estrategia con x5 pasó 21 ventanas. Y reventó 28.»
BOCETO: contadores 21 (verde) y 28 (rojo) que crecen; golpe de bajo + sacudida en 28.

**[30-42 s]** «Sin apalancamiento no llegas. Con apalancamiento, el límite te alcanza antes. El riesgo que necesitas para ganar rápido es el que te saca.»
BOCETO: curva x5 que sube y choca con la línea roja de −10%.

**[42-49 s]** «El video completo está en el canal, y el experimento #82 completo, en el enlace. Multiplicar por cinco multiplica también el riesgo.»
BOCETO: texto final «Video completo en el canal · Experimento #82 completo en el enlace» + pequeño «No es asesoría financiera · El trading no se promete: se prueba». Loop: «multiplicar por cinco» responde al «x5» del arranque.

---

## Descripción de YouTube (video largo)
https://atlas-lab-one.vercel.app/e/82?utm_source=youtube&utm_medium=video&utm_campaign=exp082-t3
Ficha del experimento #82: murió · sin apalancamiento pasan 0.0% · con x5, la mejor (RSI5 < 18) pasa 3.5% (21 ventanas) y revienta 4.7% (28 ventanas) · el 99% no llega a tiempo con x5.
Explico por qué el apalancamiento que necesitas para ganar +10% en 3 meses es justo el que te revienta el límite de caída de −10%. Simulación tipo FTMO con las 50 mejores estrategias del laboratorio; de este experimento se conservan las métricas, no el script.
Contenido educativo. No es asesoría financiera ni recomendación de inversión.

## Descripción de YouTube (Short)
https://atlas-lab-one.vercel.app/e/82?utm_source=youtube&utm_medium=short&utm_campaign=exp082-t3
Ficha del experimento #82: murió · con x5 el 99% no llega a +10% en 3 meses · la mejor pasa 21 ventanas y revienta 28.
Contenido educativo. No es asesoría financiera.

## Capítulos
0:00 Gancho · 0:15 Qué es este experimento · 0:25 Qué hace el apalancamiento · 1:20 Sin apalancar · 2:00 Con x5 · 3:00 La paradoja · 3:50 No es la primera vez · 4:30 Una limitación · 4:55 Con tu capital · 5:15 Conclusión · 5:50 Ficha del experimento

## Etiquetas
apalancamiento, x5, fondeo, challenge de fondeo, ftmo, prop firm, drawdown, reventar la cuenta, simulación, backtest, atlas lab, trading con datos

## Rúbrica (autoevaluación, 1–5)
| Pieza | hook_0_3s | ritmo | promesa_cumplida | potencial_loop | claridad_no_traders | honestidad_atlas | audio | cta | Promedio |
|---|---|---|---|---|---|---|---|---|---|
| Largo | 4 | 4 | 5 | 4 | 4 | 5 | 4 | 4 | 4.3 |
| Short | 5 | 4 | 5 | 5 | 4 | 5 | 4 | 4 | 4.5 |

Hook ≥ 4 ✓ · honestidad 5 ✓. Punto débil: sin curva ni script; el visual lo sostienen medidores y barras. La referencia al experimento 9 es de otra cartera y otro método (remuestreo, sin costos) y se rotula así. El 99% es el promedio de las 50 con x5, tal como lo publica la ficha.

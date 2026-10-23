# Experimento #53 — Ruptura de volatilidad sin dirección

Estado del guion: **BORRADOR — pendiente de aprobación**
Estado del experimento: **murió** (No sirvió) · Serie: D/E (propuesta: mini-serie «La volatilidad sí se predice, la dirección no», #51 → #55; no figura en `plan-series.md`) · Relacionado: #51, #52, #54, #55, #56
Datos usados: `experiments.json` (v=53: verdict, analysis, notes, metrics, kpis, params_view, capital.note, period), `exp_details.json` (algo, code.snippet, filters), `series/extra-v53.json` (curva 0 = estrategia con gate de volatilidad, curva 1 = comprar y esperar 7 activos) y la tabla «Con tu capital» (`docs/youtube/*-capital.md`) (fila #53).

## Títulos (3 opciones)
1. Predije la volatilidad. Operar el movimiento dio −0.44
2. Ruptura de volatilidad en 7 activos: Sharpe −0.44 vs 0.65
3. Saber que viene un movimiento no basta: Sharpe −0.44

## Miniatura (1280×720)
Fondo `#09090b`. Una vela enorme con una flecha de doble sentido y un signo "?". Mitad izquierda con "−0.44" rojo `#e11d2a`, mitad derecha con "+0.65" verde `#22c55e`. Texto pequeño blanco: "¿HACIA DÓNDE?". Logo ATLAS esquina superior derecha. (No repite el título 1.)

---

## VIDEO LARGO (16:9, ≈ 6 min — datos justos: dos cifras de Sharpe y una curva)

**[0:00 — Gancho]** (pantalla: vela gigante con flecha de doble sentido; cifras −0.44 y 0.65)
Imagina que supieras con antelación que mañana habrá un gran movimiento en el mercado. No sabes hacia dónde: solo que viene. ¿Se puede ganar con eso? Lo probé en siete activos y el Sharpe medio fue de −0.44. Comprar y esperar, en promedio por activo, dio +0.65.
> BOCETO: vela que se agranda con flecha ↑↓; dos cifras enfrentadas, "−0.44" (rojo, sacudida) y "+0.65" (verde). Subtítulo karaoke con "DIRECCIÓN" en rojo.

**[0:25 — Presentación]** (pantalla: rótulo «Experimento #53 · Ruptura de volatilidad sin dirección»)
Este es el experimento #53 de ATLAS Lab: Ruptura de volatilidad sin dirección. Todos los resultados están en la página del experimento.
> BOCETO: rótulo «EXPERIMENTO #53 · Ruptura de volatilidad sin dirección» que entra con whoosh sobre el último cuadro del gancho a baja opacidad.

**[0:35 — La idea]** (pantalla: canal de 20 días con rupturas hacia arriba y hacia abajo)
La idea tiene dos piezas. Una: un modelo de machine learning pronostica la volatilidad, es decir, cuánto se va a mover el precio; cuando el pronóstico está en el tercio más alto de su historia, calculado solo con el pasado, hay "alerta de movimiento". Dos: en esos días opero la ruptura del canal de 20 días, sin elegir dirección. Si el precio cierra sobre su máximo de 20 días, compro. Si cierra bajo su mínimo, vendo en corto.
> BOCETO: ilustración rotulada (no es dato real): canal de 20 días con dos flechas, ruptura arriba (compra, verde) y ruptura abajo (corto, rojo); barra de pronóstico de volatilidad con el tercil superior sombreado. Recuadro `params_view`: canal 20 d · tercil superior · 2 bps.

**[1:10 — Un día de alerta, paso a paso]** (pantalla: ilustración de un día de alerta)
Imagina que el modelo marca alerta de movimiento en el petróleo WTI. Ese día el precio cierra por encima de su máximo de 20 días: la regla compra. Si el movimiento sigue hacia arriba, gana; si era un pico y se da vuelta, pierde. Imagina ahora que cierra por debajo de su mínimo: la regla vende en corto, y funciona si el movimiento continúa. El modelo solo dijo "se viene algo grande"; la dirección la decide el precio al romper. Y ahí está el problema: una ruptura puede ser el comienzo de un movimiento o una falsa alarma.
> BOCETO: ilustración rotulada (no es dato real): vela que rompe el canal hacia arriba, con un "¿continúa?" y dos finales posibles (verde si sigue, rojo si revierte).

**[1:55 — Cómo se probó]** (pantalla: checklist y línea de tiempo 2020–2024)
Siete activos: S&P 500, Nasdaq 100, DAX, FTSE 100, WTI, Brent y oro. Datos de 2020 a 2024, con el pronóstico hecho fuera de muestra, entrenado solo con el pasado. Costo de 2 puntos básicos por cambio de posición. Un detalle: el umbral necesita 252 días de pronósticos, así que la estrategia no abre posiciones hasta enero de 2021; hasta entonces queda plana, mientras comprar y esperar sí corre. Comparo contra la misma ruptura siempre activa y contra comprar y esperar, con el Sharpe medio por activo.
> BOCETO: checklist con ✓ en "pronóstico fuera de muestra"; aviso ámbar "plana hasta enero de 2021". Línea de tiempo: 2020 en gris (sin posiciones) y 2021–2024 en blanco.

**[2:40 — Resultados]** (pantalla: dos tarjetas KPI + curva)
Sharpe con el filtro de volatilidad, promedio por activo: −0.44. Sharpe de comprar y esperar: 0.65. Recuerda que el Sharpe mide la ganancia por unidad de riesgo; uno negativo dice que, por cada unidad de riesgo, perdió dinero, y no solo que ganó menos que comprar y esperar. En la cartera equiponderada de los siete, la estrategia da −0.78 y comprar y esperar 0.88. En la curva, con $100,000, la cuenta se queda plana en $100,000 hasta 2021 y termina en $85,832.
> BOCETO: tarjetas `kpis` (−0.44 rojo, 0.65 verde) y la curva 0 de `series/extra-v53.json`: línea plana en 10,000, luego caída hasta 8,583 (escalada a $100,000 → $85,832); curva 1 en gris subiendo.

**[3:15 — Por qué falla]** (pantalla: texto de la ficha)
Aquí está la lección. Aunque sepas que viene un movimiento, sigues necesitando la dirección. Y la dirección, en mis pruebas, no se deja predecir; lo vimos en los experimentos 51 y 56. Ganar con volatilidad pura requeriría opciones, instrumentos que sí permiten apostar al movimiento sin elegir lado.
> BOCETO: la vela del inicio con la flecha de doble sentido; sobre ella, "volatilidad ✓ · dirección ✕". Chips "#51" y "#56".

**[3:40 — Qué haría falta de verdad]** (pantalla: tarjeta "opciones")
Para ganar con la volatilidad por sí sola, necesitas un instrumento cuyo pago dependa de cuánto se mueve el precio y no de hacia dónde, como las opciones. Eso cambia las reglas del juego: otros costos, otros riesgos y otros datos. Este experimento no las probó. Lo que sí probó es la versión accesible para quien opera índices, petróleo u oro: operar rupturas con un filtro de volatilidad. Y esa versión no funcionó.
> BOCETO: dos tarjetas: "Opciones: no probado" en gris con candado y "Rupturas con filtro de volatilidad: probado, −0.44" en rojo.

**[4:15 — Con tu capital]** (pantalla: tarjeta "Con tu capital")
Con $10,000, la estrategia termina en −$1,417. Con $100,000, en −$14,168. Comprar y esperar los siete activos en esas fechas: +$11,290 y +$112,904. La comparación en dólares incluye el tramo plano de la estrategia.
> BOCETO: tarjeta de capital: fila roja (estrategia) y fila gris (sin estrategia); nota al pie: "La estrategia no opera hasta ene-2021. Simulación, no es una promesa".

**[4:35 — Lo que sí te deja este experimento]** (pantalla: texto en pantalla)
No todo se pierde. El modelo de volatilidad funciona como lo que es, una medida de riesgo: en el experimento 52, esa misma idea sirve para controlar la caída máxima. Aquí, en cambio, se le pidió que dijera hacia dónde ir. Es la diferencia entre medir el clima y adivinar a qué hora va a llover.
> BOCETO: dos pictogramas: termómetro/medidor (verde, "medir riesgo ✓") y bola de cristal (rojo, "adivinar dirección ✕"); chip "#52".

**[5:05 — Ficha del experimento #53]** (pantalla: tarjeta con la URL)
Ficha del experimento #53. Estado: murió, no sirvió. Cifra clave: Sharpe de −0.44 con el filtro de volatilidad contra 0.65 de comprar y esperar, en promedio por activo. Filtro que decidió: batir a comprar y esperar, que no se cumple. Lección: saber que viene un movimiento no basta, hay que acertar la dirección. Revísalo completo en atlas-lab-one.vercel.app/e/53.
> BOCETO: tarjeta «FICHA · EXPERIMENTO #53» con Estado · Cifra clave · Filtro que decidió · Lección, y la URL `atlas-lab-one.vercel.app/e/53` en grande.

**[5:30 — Conclusión y cierre]** (pantalla: logo)
Saber que viene un movimiento no basta. Todos los datos en atlas-lab-one.vercel.app/e/53. Si quieres que pruebe otra idea para ganar con volatilidad, dímelo en los comentarios. Contenido educativo, no es asesoría financiera. El trading no se promete: se prueba.
> BOCETO: vela con flecha ↑↓ y el "?" final; fundido a la frase de marca.

---

## SHORT (9:16, ≈ 45 s) — "Sin dirección"
Título del Short: Sé que habrá un gran movimiento… no hacia dónde #Shorts

**[0-3 s]** "Sé que habrá un gran movimiento. No sé hacia dónde."
> BOCETO: B-roll vertical de pantallas de mercado con overlay 0.6; vela gigante con flecha ↑↓ y "SHARPE −0.44" en rojo; golpe de bajo y sacudida.

**[3-14 s]** "Un modelo pronostica cuándo la volatilidad será alta. Ese día opero la ruptura: si el precio rompe su máximo de 20 días, compro; si rompe su mínimo, vendo."
> BOCETO: canal de 20 días con dos flechas (verde arriba, roja abajo) alternando cada 2 s; chips "7 activos" y "20 días". Ken Burns hacia dentro.

**[14-22 s]** "Siete activos. Sharpe de la estrategia: −0.44. Comprar y esperar, sin hacer nada: 0.65."
> BOCETO: dos barras, −0.44 (hacia abajo, rojo) y 0.65 (hacia arriba, verde), con tick; whoosh y flash al entrar.

**[22-32 s]** "Con cien mil dólares, la cuenta terminó con $14,168 menos. Y la estrategia no abrió posiciones hasta enero de 2021."
> BOCETO: curva real de `series/extra-v53.json` (curva 0) plana y luego cayendo; contador rojo bajando hasta −$14,168.

**[32-45 s]** "Saber que viene un movimiento no basta: necesitas la dirección, y esa parte no funcionó. Experimento 53 completo en el enlace; el video completo está en el canal. No es asesoría financiera."
> BOCETO: regresa la vela con "?" del primer cuadro (loop con "no sé hacia dónde"); texto pequeño "El trading no se promete: se prueba." Abajo, «Experimento #53 completo en el enlace».

---

## Descripción (YouTube) — video largo
https://atlas-lab-one.vercel.app/e/53?utm_source=youtube&utm_medium=video&utm_campaign=exp053-t1
Ficha del experimento #53: murió (No sirvió) · Sharpe −0.44 frente a 0.65 de comprar y esperar (promedio por activo, 2020–2024).
Probé operar la ruptura del canal de 20 días solo cuando un modelo de machine learning pronostica volatilidad alta, sin elegir dirección, en 7 activos líquidos (2020-2024, fuera de muestra). Resultado: Sharpe medio de −0.44 contra +0.65 de comprar y esperar. Saber que viene un movimiento no basta; falta la dirección.
Contenido educativo. No es asesoría financiera ni recomendación de inversión.

Capítulos: 0:00 Gancho · 0:25 Presentación · 0:35 La idea · 1:10 Un día de alerta, paso a paso · 1:55 Cómo se probó · 2:40 Resultados · 3:15 Por qué falla · 3:40 Qué haría falta de verdad · 4:15 Con tu capital · 4:35 Lo que sí te deja este experimento · 5:05 Ficha del experimento #53 · 5:30 Conclusión y cierre

Etiquetas: volatilidad, ruptura de volatilidad, breakout, machine learning, canal de 20 días, estrategia de trading, backtest, Sharpe ratio, fuera de muestra, trading con datos, ATLAS Lab

## Descripción (YouTube) — Short
https://atlas-lab-one.vercel.app/e/53?utm_source=youtube&utm_medium=short&utm_campaign=exp053-t1
Experimento #53 · Ruptura de volatilidad sin dirección: murió · Sharpe −0.44 frente a 0.65 de comprar y esperar. Video completo en el canal. No es asesoría financiera.

## Rúbrica (autoevaluación, escala 1-5)
| Criterio | Nota | Por qué |
|---|---|---|
| hook_0_3s | 4 | Frase de contraste con "SHARPE −0.44" en pantalla; el número no se dice en los primeros 3 s |
| ritmo | 4 | Vela animada y canal; bloque de método algo largo |
| promesa_cumplida | 5 | Promete responder si se puede ganar sin dirección y lo responde con datos |
| potencial_loop | 5 | "No sé hacia dónde" abre y cierra; el "?" reaparece al final |
| claridad_no_traders | 4 | Explica volatilidad, canal de 20 días, Sharpe y fuera de muestra |
| honestidad_atlas | 5 | Avisa de que la estrategia estuvo plana hasta enero de 2021 y que la comparación en dólares lo incluye |
| audio | 4 | Voz por clonar; un golpe de bajo |
| cta | 4 | Una petición y remite al video completo |
Promedio: **4.38** (≥ 4.0). Hook del Short 4 (≥ 4) y honestidad 5: no descalificado.

## Otros temas de este experimento
- `exp-053-ruptura-volatilidad-sin-direccion.md` — Tema 1: Predije la volatilidad. Operar el movimiento dio −0.44
- `exp-053-t2-diversificar-amplifica-el-signo.md` — Tema 2: diversificar amplifica el signo (0.65 a 0.88 y −0.44 a −0.78)
- `exp-053-t3-nunca-volvio-a-100000.md` — Tema 3: ni un solo día por encima de $100,000

# Experimento #36 — Calidad intrínseca sin reglas de prop firm · Tema 3: apalancamiento ×2, ×3 y ×4

Estado del guion: **BORRADOR — pendiente de aprobación**
Tema 3 de 3 del experimento #36. Qué aporta frente a los otros temas: es el CONCEPTO. El tema 1 usa la tabla para responder si el problema eran las reglas de la prop firm y el tema 2 compara el bot con comprar y esperar; este tema enseña qué es el apalancamiento a un principiante, con tres escalones reales (×2, ×3, ×4) y la regla del 10% de las prop firms como contraste.
Estado del experimento: **MURIÓ** (sin reglas y con las señales de ayer, ni con ×2 hay ventaja: Sharpe −0.04)
Serie: **G — Construyendo un bot (y por qué murió)**
Datos usados: `experiments.json` (v=36: analysis, verdict, notes, metrics, kpis; v=31 y v=34: verdict/notes) · `exp_details.json` (v36: algo, filters) · fila #36 de la tabla «Con tu capital» (`docs/youtube/`).

## Títulos (opciones)
1. Subí el apalancamiento de ×2 a ×4: la caída pasó de −19.7% a −97.8%
2. Apalancamiento explicado con tres cuentas reales: ×2, ×3 y ×4
3. Con ×4 mi bot perdía 31.09% al año: así multiplica el apalancamiento

## Miniatura
Fondo #09090b. Una lupa enorme sobre una línea plana que se convierte en una pendiente hacia abajo y, debajo, tres cifras que bajan en rojo. Texto grande: «LA LUPA». Debajo, en blanco: «NO CREA NADA». Logo ATLAS en la esquina inferior derecha. (No repite los títulos.)

---

## VIDEO LARGO (16:9, ≈ 4:31)

**[0:00 — Gancho]** (pantalla — BOCETO: tres barras de caída máxima que bajan una tras otra, −19.7% → −61.9% → −97.8%, con las fichas ×2, ×3 y ×4 encima)
Una misma estrategia, tres tamaños. Con apalancamiento ×2, la peor caída desde su máximo fue de menos 19.7%. Con ×3, menos 61.9%. Con ×4, menos 97.8%. Lo único que cambié fue el tamaño de la apuesta.

**[0:15 — Este es el experimento #36]** (pantalla — BOCETO: rótulo «EXPERIMENTO #36 · CALIDAD INTRÍNSECA SIN REGLAS DE PROP FIRM» con el logo ATLAS; la URL pequeña debajo)
Este es el experimento #36 de ATLAS Lab: Calidad intrínseca sin reglas de prop firm. Todos los resultados están en la página del experimento. Aquí lo uso para explicar una palabra que todo trader escucha: apalancamiento.

**[0:30 — Qué es el apalancamiento]** (pantalla — BOCETO: ilustración rotulada, no es dato real: una balanza con $1 de capital sosteniendo $2 de posición; flechas de precio ▲ y ▼ que pesan el doble sobre la cuenta)
Apalancar es operar con una exposición mayor que tu capital. Con ×2, cada movimiento del precio pesa el doble en tu cuenta: si sube, ganas el doble; si baja, pierdes el doble. No cambia la estrategia, cambia el volumen con que la sientes. Por eso se lo llama una palanca: empuja más, pero empuja en las dos direcciones.

**[0:53 — Qué se midió]** (pantalla — BOCETO: tres iconos con una frase cada uno: balanza para el Sharpe, calendario para el crecimiento anual, montaña para la caída máxima; chips: ×2 · ×3 · ×4 · sin reglas de prop firm · señal de ayer)
Corrí la misma estrategia con ×2, ×3 y ×4, sin las reglas de la prop firm, para ver su calidad propia. Es una cesta con un filtro de pánico del VIX, el índice del miedo, sobre 28 y el crédito bajo su media de 40 días, decidido con el cierre de ayer, y un corte automático del 3% diario. Medí tres cosas: el Sharpe, la ganancia por unidad de riesgo; el crecimiento anual; y la caída máxima, el peor tramo de pico a valle.

**[1:26 — La escalera en 2014–2024]** (pantalla — BOCETO: tabla que se llena por filas; cada fila baja un escalón y se pinta más roja)
| 2014–2024 | Sharpe | Crecimiento anual | Caída máxima |
|---|---|---|---|
| ×2 | −0.04 | −0.61% | −19.7% |
| ×3 | −0.58 | −7.89% | −61.9% |
| ×4 | −1.80 | −31.09% | −97.8% |
Cada escalón empeora las tres columnas. Con ×2 el resultado queda casi en cero; con ×3 ya es una pérdida de 7.89% al año; con ×4, de 31.09% al año.

**[1:44 — La escalera en 2007–2013]** (pantalla — BOCETO: segunda tabla debajo, con el rótulo «años que el bot no vio al diseñarse»)
| 2007–2013 | Sharpe | Crecimiento anual | Caída máxima |
|---|---|---|---|
| ×2 | 0.00 | −0.16% | −11.8% |
| ×3 | −0.36 | −4.08% | −31.7% |
| ×4 | −1.42 | −22.03% | −83.1% |
Esos años son fuera de muestra, es decir, años que el bot no vio al diseñarse. El orden se repite: cuanto más apalancamiento, peor.

**[2:00 — El 10% de la prop firm]** (pantalla — BOCETO: una línea roja horizontal en −10% cruzando las barras de caída máxima; la de ×2 en 2014–2024 y la de ×2 en 2007–2013 también la superan, con el rótulo «incluso ×2»)
Ahora el contraste con el reto de fondeo. Una prop firm cierra la cuenta si cae 10% desde su máximo. Pues la caída máxima de este bot, incluso con ×2 y sin reglas, fue de menos 19.7% en 2014–2024 y de menos 11.8% en 2007–2013: las dos superan el 10%. Con las reglas puestas, la cuenta se cortaría antes de llegar a esas cifras.

**[2:26 — La lupa]** (pantalla — BOCETO: ilustración rotulada, no es dato real: una lupa que agranda una línea plana hasta convertirla en una pendiente; a un lado, una lupa sobre una ventaja que se hace más grande)
Una forma de recordarlo: el apalancamiento es una lupa. Si hay una ventaja, la agranda. Si no la hay, agranda lo que haya. Aquí el veredicto dice que la estrategia no tiene una calidad propia que proteger, y la lupa convirtió un resultado de casi cero en una caída. El orden importa: primero encontrar una ventaja, y solo después decidir cuánto apalancarla.

**[2:50 — ¿Y con otros tamaños?]** (pantalla — BOCETO: dos tarjetas: «experimento 31: ×1.5 sobrevive · Sharpe 0.09 y 0.11» y «experimento 34: ×2.5 −0.60 · ×3 −0.62 · ×4 −1.58 · mueren»)
Otros experimentos de la serie apuntan en la misma dirección. En el experimento 31, con ×1.5, la cuenta sobrevive, pero con Sharpe de 0.09 y 0.11, muy por debajo del 0.30 del laboratorio. En el experimento 34, con las reglas de la prop firm puestas, ningún apalancamiento alto sobrevive 2014–2024: ×2.5 da Sharpe de menos 0.60, ×3 menos 0.62 y ×4 menos 1.58.

**[3:15 — El marcador de filtros]** (pantalla — BOCETO: checklist de exp_details.filters: Sharpe 2014–2024 ✗ · Sharpe 2007–2013 ✗ · batir a comprar y esperar ✗ · ×3 y ×4 ✗ · señal rezagada ✓ · costos completos —)
El tablero de filtros: con ×2, el Sharpe de 2014–2024 es menos 0.04 y el de 2007–2013, 0.00, ambos bajo el 0.30 del laboratorio. No bate a comprar y esperar, con menos 6.1% contra más 58.9%. Con ×3 y ×4 no hay ventaja desde el primer escalón. Pasa uno: la señal va rezagada. Los costos completos no se aplicaron: solo hay deslizamiento de 0.2% en el corte.

**[3:42 — Con tu capital]** (pantalla — BOCETO: tarjeta «Con tu capital»: curva real del ×2 sin reglas terminando en −6.1%, con −$6,094 contra +$58,879 de comprar y esperar)
Con $100,000 simulados entre 2014 y 2024, el bot ×2 sin reglas termina en −$6,094. Comprar y esperar la misma cesta: +$58,879. Es la versión más suave de la escalera; ×3 y ×4 están en las métricas del experimento, con caídas mucho mayores. Es una simulación histórica, no una promesa; con $10,000 serían la décima parte.

**[4:04 — Ficha del experimento #36]** (pantalla — BOCETO: tarjeta de ficha con sello «NO SIRVIÓ», cuatro líneas y la URL atlas-lab-one.vercel.app/e/36; logo ATLAS)
Ficha del experimento #36. Estado: no sirvió. Cifra clave: caída máxima de menos 19.7%, menos 61.9% y menos 97.8% con ×2, ×3 y ×4. Filtro que decidió: el Sharpe de 2014–2024, menos 0.04, bajo el 0.30 del laboratorio. Lección: apalancar una estrategia sin ventaja no crea ventaja: multiplica el desgaste. Revísalo completo en atlas-lab-one.vercel.app/e/36. Contenido educativo, no es asesoría financiera. El trading no se promete: se prueba.

---

## SHORT (9:16, ≈ 43 s)
Título del Short: ×2: −19.7%. ×4: −97.8%. Lo único que cambié: el tamaño #shorts
Fórmula visual (CLAUDE.md del canal): b-roll vertical real con overlay 0.6, Ken Burns alternado, subtítulos karaoke en MAYÚSCULAS con cifras en rojo, ticker arriba, whoosh + flash en cada corte; golpe (bass + sacudida) solo en 0-3 s y 14-28 s.

**[0-3 s]** "Misma estrategia. Con ×2, caída de menos 19.7%. Con ×4, menos 97.8%."
- Boceto: b-roll de una palanca o grúa levantando un bloque (kb=in); dos barras de caída que crecen hacia abajo; golpe de bass.

**[3-14 s]** "Apalancar es operar con más exposición que tu capital: con ×2, cada movimiento del precio pesa el doble. Gana el doble, pierde el doble."
- Boceto: balanza con $1 de capital y $2 de posición; flechas ▲▼ duplicadas.

**[14-28 s]** "Mi estrategia no tenía ventaja. Con ×2 rendía menos 0.6% al año. Con ×3, menos 7.89%. Con ×4, menos 31.09% al año. La palanca empuja en las dos direcciones."
- Boceto: tres barras de crecimiento anual hacia abajo; sacudida en la de ×4.

**[28-40 s]** "Y el reto de fondeo corta la cuenta si cae 10%. Incluso con ×2 la caída llegó a menos 19.7%. Primero la ventaja; después, el tamaño."
- Boceto: línea roja en −10% cruzada por la barra de ×2; rótulo «PRIMERO LA VENTAJA».

**[40-48 s]** "Video completo en el canal. Experimento 36 completo en el enlace. No es asesoría financiera. Con ×4, ¿cuánto se hundió? Menos 97.8%."
- Boceto: sello «NO SIRVIÓ»; logo ATLAS y «EXPERIMENTO #36 · ENLACE». Loop: la pregunta final se responde con el gancho.

## Descripción (YouTube)
**Video largo**
https://atlas-lab-one.vercel.app/e/36?utm_source=youtube&utm_medium=video&utm_campaign=exp036-t3
Ficha del experimento #36 (calidad intrínseca sin reglas de prop firm): no sirvió. La misma estrategia con ×2, ×3 y ×4 en 2014–2024: caída máxima de −19.7%, −61.9% y −97.8%; crecimiento anual de −0.61%, −7.89% y −31.09%.
Explico qué es el apalancamiento con tres escalones reales y por qué, incluso con ×2, la caída (−19.7%) supera el 10% que tolera una prop firm.

Capítulos: 0:00 Gancho · 0:15 Este es el experimento #36 · 0:30 Qué es el apalancamiento · 0:53 Qué se midió · 1:26 La escalera en 2014–2024 · 1:44 La escalera en 2007–2013 · 2:00 El 10% de la prop firm · 2:26 La lupa · 2:50 ¿Y con otros tamaños? · 3:15 El marcador de filtros · 3:42 Con tu capital · 4:04 Ficha del experimento #36

**Short**
https://atlas-lab-one.vercel.app/e/36?utm_source=youtube&utm_medium=short&utm_campaign=exp036-t3
Experimento #36: misma estrategia, caída máxima de −19.7% con ×2 y −97.8% con ×4. No sirvió.

Contenido educativo. No es asesoría financiera ni recomendación de inversión.

Etiquetas: apalancamiento, leverage, caída máxima, drawdown, prop firm, reglas de fondeo, bot de trading, backtest, Sharpe ratio, gestión de riesgo, ATLAS Lab

## Rúbrica (autoevaluación — criterios del CLAUDE.md del canal, 1-5)
| hook_0_3s | ritmo | promesa_cumplida | potencial_loop | claridad_no_traders | honestidad_atlas | audio | cta |
|---|---|---|---|---|---|---|---|
| 5 | 4 | 5 | 5 | 5 | 5 | 4 | 4 |

Promedio: **4.63** → cumple el corte (≥ 4.0; hook ≥ 4 y honestidad 5).
Notas: el hook es una escalera de tres cifras con una sola variable cambiada. Punto débil: comparte tablas con el tema 1; se diferencia por el enfoque didáctico (qué es apalancar) y por el contraste con el 10% de la prop firm.

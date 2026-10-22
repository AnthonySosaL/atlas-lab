# Experimento #11 — Tema 2: dos fases, dos tamaños, ×4 para pasar y ×2 para cobrar

Tema 2 de 3 del experimento #11
Qué aporta frente a los otros temas: el tema 1 cuenta la cifra de +$5,919 y de dónde sale; este explica la lógica de tamaños del negocio: el examen se pasa con apuesta agresiva (×4, 47.9%) y la cuenta fondeada se cobra con apuesta moderada (×2, 79% de cobrar al menos un pago). Es el tema del concepto «sobrevivir para cobrar». El tema 3 compara este valor esperado con el ilustrativo del #10.
Estado del guion: **BORRADOR — pendiente de aprobación**
Estado del experimento: **parcial** (en el sitio: neutral). Simulación del negocio completo, sin señales propias · Serie E (Gestión de riesgo: lo poco que se sostuvo) · 1 largo + 1 Short
Datos usados: `experiments.json` (v=11: params, metrics, kpis, params_view, verdict, notes, capital con su aviso; v=9: P(pasar) y reventar a ×4; v=13: verdict, para la cuenta a ×2 que reventó en el COVID), `exp_details.json` (algo y filters del v=11) y tabla «Con tu capital» de docs/youtube (fila 11). Los valores esperados de los otros apalancamientos fondeados (×1, ×3, ×4) no figuran en los datos, solo que eran menores; el guion no los cita. Las cifras con 10,000 dólares son las de la tabla de 100,000 divididas entre 10.
Producción: b-roll real con overlay oscuro 0.6, Ken Burns alterno, subtítulos karaoke en MAYÚSCULAS con cifras en rojo, golpe de bajo solo en 1–2 momentos. Rojo `#e11d2a`, verde `#22c55e`, fondo `#09090b`.

## Títulos (3 opciones)
1. ×4 para pasar el examen, ×2 para cobrar: el negocio de fondeo tiene dos tamaños
2. 79% de cobrar al menos un pago: por qué en la cuenta fondeada gana el tamaño moderado
3. Sobrevivir para cobrar: la lógica de dos fases de una prop firm, simulada

## Miniatura
Fondo negro `#09090b`. Dos medidores de apalancamiento: el de la izquierda con la aguja en «×4» y «EXAMEN» debajo; el de la derecha en «×2» y «COBRAR». Texto grande: «2 TAMAÑOS» (2 palabras) y «79%» en verde. Logo ATLAS esquina inferior derecha.

---

## VIDEO LARGO (16:9, ≈ 4:32 min)

**[0:00 — Gancho]** (pantalla: dos medidores, ×4 y ×2)
Para pasar el examen de fondeo, el mejor tamaño de apuesta en mi simulación es ×4. Para cobrar después en la cuenta fondeada, es ×2: con ese tamaño, hay un 79% de cobrar al menos un pago.
> Boceto: dos medidores con las agujas en ×4 y ×2; «79%» en verde con sacudida. Ken Burns «in».

**[0:16 — Qué experimento es]** (pantalla: rótulo con el número y el nombre)
Este es el experimento #11 de ATLAS Lab: Valor esperado real de prop firm, desafío más fondeo. Todos los resultados están en la página del experimento. Hoy hablo de por qué conviene cambiar de tamaño.
> Boceto: rótulo «EXPERIMENTO #11 · Valor esperado real de prop firm» y URL pequeña. kb=out.

**[0:31 — Dos fases con objetivos distintos]** (pantalla: diagrama de dos fases)
El negocio tiene dos fases con objetivos distintos. En la primera, el examen, tienes que ganar 10% en 60 días sin pasar los límites; si no llegas, pierdes la cuota de 500 dólares. En la segunda, la cuenta fondeada de 100,000 dólares, ya no hay una meta que alcanzar rápido: lo que importa es no perder la cuenta, porque cada 21 días, durante hasta 24 meses, puedes retirar tu parte, un 80% de las ganancias.
> Boceto: diagrama de dos fases: «Fase 1: cuota $500 · +10% en 60 días» y «Fase 2: cuenta $100,000 · 80% · retiros cada 21 días hasta 24 meses». kb=in.

**[1:04 — Fase 1: apostar fuerte para llegar a tiempo]** (pantalla: barras de probabilidad)
En el examen hay un plazo de 60 días y una meta de 10%. Con una cesta que se mueve alrededor de 9.4% al año, hay que apalancar para llegar. El mejor caso del experimento 9 es ×4: pasas el 47.9% de las veces, pero la cuenta revienta el 50.4%. Aquí asumir riesgo es el precio de llegar a tiempo.
> Boceto: barras ×1 (5.4%), ×4 (47.9%) y ×8 (41.4%) y el pastel de 50.4% en dos rojos. kb=out.

**[1:32 — Fase 2: sobrevivir para cobrar]** (pantalla: calendario de retiros)
En la cuenta fondeada es otro juego. No necesitas llegar a una meta: necesitas que la cuenta siga viva el mayor número posible de ciclos de 21 días, porque cada ciclo es una oportunidad de retiro. Una apuesta agresiva pone la cuenta al borde de los límites de 10% de caída total y 5% de pérdida diaria; una apuesta moderada la deja respirar. En la simulación probé ×1, ×2, ×3 y ×4 en esta fase, y el mejor valor esperado salió con ×2; con los otros, el valor esperado era menor.
> Boceto: calendario con marcas cada 21 días; cuenta viva con una línea de límite del 10%; dos curvas, una cerca del límite y otra holgada. kb=in.

**[2:11 — Los números del mejor caso]** (pantalla: tarjetas KPI)
Con ×4 en el examen y ×2 en la cuenta fondeada: probabilidad de pasar, 47.9%; cobro esperado en la fase fondeada, 13,402 dólares; probabilidad de cobrar al menos un pago, 79%; y valor esperado de más 5,919 dólares por intento, ya restando la cuota. El valor esperado es el promedio ponderado de todos los resultados posibles de este modelo, no un resultado garantizado.
> Boceto: KPI en cascada (47.9%, $13,402, 79%, +$5,919); fórmula «47.9% × $13,402 − $500». kb=out.

**[2:40 — Lo que un modelo no ve]** (pantalla: aviso y curva cortada)
Aviso importante. Esas cifras salen de remuestrear una cesta de 2019 a 2024, un periodo alcista, sin costos y sin muestra aparte. Y en el experimento 13, una cuenta a ×2 sobre el camino histórico real reventó en el COVID. Un tamaño moderado es mejor que uno agresivo dentro del modelo, pero no es una garantía de sobrevivir a una crisis.
> Boceto: tres avisos ámbar y la curva real del #13 que se corta en marzo de 2020 con sello rojo. kb=in.

**[3:06 — La idea que sí se sostiene]** (pantalla: dos tamaños)
La idea que sí se sostiene es de lógica, no de promesa: el tamaño correcto depende de qué te piden. Si te piden llegar rápido, el riesgo es una herramienta. Si te piden aguantar, el riesgo es el enemigo. El propio experimento lo resume así: el dinero está en sobrevivir la fase fondeada con un tamaño conservador para cobrar varios pagos.
> Boceto: dos tarjetas: «llegar rápido → riesgo como herramienta» y «aguantar → riesgo como enemigo». kb=out.

**[3:30 — Con tu capital]** (pantalla: tarjeta «Con tu capital» con aviso)
Con 10,000 dólares, la curva base sin apalancar daría más 5,761, frente a más 5,175 de la cesta sin estrategia. Con 100,000, la tabla de ATLAS da más 57,609 contra más 51,747. Ojo: el experimento usa ×4 en el examen y ×2 en la cuenta fondeada, y todo depende de que la cesta suba como entonces.
> Boceto: tarjeta de capital con aviso ámbar «curva sin apalancar; el examen usa ×4 y la cuenta ×2» y las dos cifras en verde atenuado; selector $10,000 / $100,000.

**[3:57 — Ficha del experimento #11]** (pantalla: tarjeta con la URL)
Ficha del experimento 11. Estado: parcial. Cifra clave: valor esperado simulado de más 5,919 dólares por intento, con 79% de cobrar al menos un pago. Filtros que decidieron: ninguna muestra aparte, y el camino real a ×2 reventó en el COVID. Lección: el dinero está en sobrevivir con un tamaño moderado, no en pasar el examen. Revísalo completo en atlas-lab-one.vercel.app/e/11.
> Boceto: tarjeta oscura con «#11 · PARCIAL», cifras clave y «atlas-lab-one.vercel.app/e/11» en grande; logo.

**[4:24 — Cierre]**
Todos los datos en atlas-lab-one.vercel.app, experimento 11. Contenido educativo, no es asesoría financiera. El trading no se promete: se prueba.
> Boceto: pantalla oscura con la frase de marca.

---

## SHORT (9:16, ≈ 46 s)

**[0-3 s]** «Para pasar, ×4. Para cobrar, ×2.»
> Boceto: dos medidores ×4 y ×2; «79%» en verde con sacudida; b-roll de pantallas de trading, Ken Burns «in», overlay 0.6.

**[3-14 s]** «Con ×2, 79% de cobrar al menos un pago. Dos fases: el examen, con cuota de 500 dólares, y una cuenta fondeada de 100,000 con retiros cada 21 días.»
> Boceto: diagrama de dos fases; karaoke con «500 DÓLARES» y «21 DÍAS» en rojo; Ken Burns «out».

**[14-26 s]** «En el examen, la apuesta agresiva es el precio de llegar a tiempo: ×4 pasa el 47.9%. En la cuenta fondeada, lo que importa es no perderla: el mejor valor esperado salió con ×2.»
> Boceto: dos curvas, una cerca del límite y otra holgada; whoosh y flash blanco.

**[26-38 s]** «Cobro esperado, 13,402 dólares. Valor esperado, más 5,919 por intento. Pero es un periodo alcista, sin costos, y una cuenta a ×2 sobre el camino real reventó en el COVID.»
> Boceto: KPI +$5,919; tres avisos ámbar; sello rojo «#13»; Ken Burns «in».

**[38-46 s]** «Sobrevivir para cobrar, no pasar para presumir. Experimento once completo en el enlace. El video completo está en el canal. No es asesoría financiera.»
> Boceto: vuelven los dos medidores (loop con el gancho); texto «Experimento #11 completo en el enlace» y logo.

---

## Descripción de YouTube (video largo)
https://atlas-lab-one.vercel.app/e/11?utm_source=youtube&utm_medium=video&utm_campaign=exp011-t2
Ficha del experimento #11 (Valor esperado real de prop firm): estado parcial · examen a ×4 con 47.9% de pasar y cuota de $500 · cuenta fondeada de $100,000 a ×2 con 79% de cobrar al menos un pago · valor esperado simulado +$5,919 por intento.
Por qué el negocio de fondeo pide dos tamaños: apostar fuerte para pasar el examen y moderado para sobrevivir y cobrar (reparto del 80%, retiros cada 21 días hasta 24 meses), con los límites de la simulación.
Contenido educativo. No es asesoría financiera ni recomendación de inversión.

## Descripción del Short
https://atlas-lab-one.vercel.app/e/11?utm_source=youtube&utm_medium=short&utm_campaign=exp011-t2
Experimento #11 · parcial · ×4 para pasar el examen, ×2 para cobrar; valor esperado simulado +$5,919. No es asesoría financiera.

Capítulos: 0:00 Gancho · 0:16 Qué experimento es · 0:31 Dos fases con objetivos distintos · 1:04 Fase 1: apostar fuerte para llegar a tiempo · 1:32 Fase 2: sobrevivir para cobrar · 2:11 Los números del mejor caso · 2:40 Lo que un modelo no ve · 3:06 La idea que sí se sostiene · 3:30 Con tu capital · 3:57 Ficha del experimento #11 · 4:24 Cierre

Etiquetas: prop firm, cuenta fondeada, FTMO, valor esperado, apalancamiento, Monte Carlo, gestión de riesgo, challenge de fondeo, drawdown, simulación de trading, ATLAS Lab, trading con datos

## Rúbrica (autoevaluación, 1–5)
| Criterio | Short | Largo |
|---|---|---|
| hook_0_3s | 4 | 4 |
| ritmo | 4 | 4 |
| promesa_cumplida | 5 | 5 |
| potencial_loop | 5 | 4 |
| claridad_no_traders | 3 | 4 |
| honestidad_atlas | 5 | 5 |
| audio | 4 | 3 |
| cta | 4 | 4 |
| **Promedio** | **4.25** | **4.13** |

Notas: el gancho es una cifra positiva; la advertencia (periodo alcista, sin costos y camino real reventado) aparece dentro de los primeros 38 s del Short. El guion no cita valores esperados de ×1, ×3 ni ×4 en la cuenta fondeada porque no están en los datos. El Short cumple hook ≥ 4 y honestidad 5.

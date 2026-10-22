# Experimento #37 — Probabilidad de aprobar (versión ejecutable) · Tema 3: la misma estrategia, tres respuestas

Estado del guion: **BORRADOR — pendiente de aprobación**
Tema 3 de 3 del experimento #37. Qué aporta frente a los otros temas: es la LETRA PEQUEÑA. El tema 1 cuenta el resultado base y el tema 2 explica el método de simulación; este tema compara tres formas de medir el mismo reto (piso que sube con el máximo, piso fijo sobre el saldo inicial y salida medida el día de pánico) y enseña a leer una probabilidad con su rango, no con una sola cifra.
Estado del experimento: **PARCIAL** (técnicamente posible pasar un reto, pero sin ventaja detrás: sería suerte)
Serie: **G — Construyendo un bot (y por qué murió)**
Datos usados: `experiments.json` (v=37: analysis, verdict, notes, metrics, kpis, params_view, capital) · `exp_details.json` (algo con las tres variantes, filters) · fila #37 de la tabla «Con tu capital» (`docs/youtube/`) · v=38 (Sharpe con salida medida).

## Títulos (opciones)
1. 37.5%, 41.1% o 44.7%: la misma estrategia, tres respuestas
2. ¿Cuánto cambia la probabilidad de pasar un reto según las reglas?
3. El detalle que sube de 37.5% a 44.7% la probabilidad de pasar

## Miniatura
Fondo #09090b. Tres medidores de aguja lado a lado, cada uno marcando un valor distinto, y un signo de interrogación rojo (#e11d2a) encima. Texto grande: «¿CUÁL?». Logo ATLAS en la esquina inferior izquierda. (No repite las palabras de los títulos.)

---

## VIDEO LARGO (16:9, ≈ 4:31)

**[0:00 — Gancho]** (pantalla — BOCETO: tres medidores con agujas que suben a 37.5%, 41.1% y 44.7%; encima, «misma estrategia · mismo bot · mismos retornos»)
¿Qué probabilidad tiene mi bot de pasar un reto de fondeo sin límite de tiempo? Según cómo midas: 37.5%, 41.1% o 44.7%. Tres respuestas para una misma estrategia.

**[0:12 — Este es el experimento #37]** (pantalla — BOCETO: rótulo «EXPERIMENTO #37 · PROBABILIDAD DE APROBAR (VERSIÓN EJECUTABLE)» con el logo ATLAS; la URL pequeña debajo)
Este es el experimento #37 de ATLAS Lab: Probabilidad de aprobar, versión ejecutable. Todos los resultados están en la página del experimento. En este video no busco la cifra más bonita, sino enseñarte a leer una probabilidad con su letra pequeña.

**[0:28 — El reto en 20 segundos]** (pantalla — BOCETO: tarjeta params_view con cuatro reglas: objetivo +10% · caída máxima 10% · pérdida diaria 5% · mínimo 4 días; cartera ×2 · señales de ayer)
Un reto de fondeo es el examen que te pone una empresa, una prop firm, antes de prestarte una cuenta grande. Aquí se pide subir 10%, no caer 10% y no perder más de 5% en un solo día, con un mínimo de 4 días operando. Lo simulé 4,000 veces con los retornos diarios reales de mi bot, con ×2 y señales de ayer, en tres plazos: 252, 504 y 2,000 días de operación.

**[0:58 — Primera diferencia: el piso]** (pantalla — BOCETO: dos gráficos de una cuenta: uno con el piso que sube cada vez que la cuenta marca un nuevo máximo y otro con un piso fijo, horizontal, sobre el saldo inicial)
La primera letra pequeña es cómo se mide la caída de 10%. En mi simulación base, se mide desde el máximo que haya alcanzado la cuenta: si sube y luego baja 10%, pierdes. Es un piso que se mueve hacia arriba. Algunas empresas, como FTMO según la ficha del experimento, lo miden sobre el saldo inicial: un piso fijo, que no sube aunque la cuenta suba. El piso fijo deja más margen cuando la cuenta va ganando.

**[1:28 — Segunda diferencia: la salida]** (pantalla — BOCETO: una línea de tiempo de un día de pánico con dos relojes: «opera completo el día del disparo» y «sale con lo que ve a esa hora»; chip «φ = 0.94»)
La segunda es qué hace el bot el día de pánico. En la base opera completo ese día, porque decide con la señal de ayer. En la variante medida, sale con lo que puede ver a esa hora, con datos horarios. El φ de ese filtro es 0.94, es decir, el bot esquiva solo cerca del 6% del movimiento del día.

**[1:52 — La tabla de las tres respuestas]** (pantalla — BOCETO: tabla que se llena fila por fila; la columna «sin límite» se resalta; la fila base en blanco, las otras dos en gris)
| Versión | 252 días | 504 días | Sin límite | Mediana |
|---|---|---|---|---|
| Piso que sube con el máximo (base) | 6.4% | 18.7% | 37.5% | 516 días |
| Piso fijo sobre el saldo inicial | 6.7% | 18.4% | 44.7% | 594 días |
| Base con salida medida (φ = 0.94) | 6.3% | 19.1% | 41.1% | 522 días |
Mira las columnas. Con 252 días de plazo, las tres respuestas están entre 6.3% y 6.7%. Con 504, entre 18.4% y 19.1%. Donde se abren es sin límite de tiempo: de 37.5% a 44.7%. Y la mediana va de 516 a 594 días, de 1.6 a 1.9 años.

**[2:17 — Qué cambia y qué no]** (pantalla — BOCETO: dos tarjetas: «cambia: la cifra sin límite de tiempo» y «no cambia: la lectura»; la segunda con «Sharpe −0.03»)
Lo que cambia es la cifra, y más cuanto más tiempo le das al azar. Lo que no cambia es la lectura: con plazo, pasar es difícil en las tres versiones, y sin plazo es más probable solo porque el tiempo da más oportunidades. Y debajo de todo está lo mismo: el Sharpe de la cartera es menos 0.03, sin ventaja. Con la salida medida, el Sharpe sería 0.025, tampoco una ventaja.

**[2:46 — Cómo leer una sola cifra]** (pantalla — BOCETO: tres preguntas en tarjetas: «¿qué piso?» · «¿qué salida?» · «¿qué plazo?»; sobre cada una, la diferencia que produce)
Cuando alguien te dé «la probabilidad de pasar un reto», pregunta tres cosas: qué piso de caída usa, qué supone para la salida cuando hay pánico y con qué plazo. Y desconfía de quien te enseñe solo la cifra más alta. Aquí la más alta sería 44.7%, y la historia completa es el rango entero, de 37.5% a 44.7%, junto con el 6.4% del plazo corto.

**[3:12 — El marcador de filtros]** (pantalla — BOCETO: checklist de exp_details.filters: probabilidad de pasar ✗ · Sharpe 2007–2024 ✗ · batir a comprar y esperar ✗ · Monte Carlo de permutación — · Deflated Sharpe — · costos completos —)
El tablero de filtros: el criterio de probabilidad no se cumple, con 6.4% en 252 días. El Sharpe de menos 0.03 queda bajo el 0.30 del laboratorio. No bate a comprar y esperar, con menos 7.1% frente a más 68.7%. La prueba de permutación del laboratorio no es esta, el Deflated Sharpe está en el experimento 38 y los costos completos no se aplicaron: solo hay deslizamiento de 0.2% en el corte.

**[3:40 — Con tu capital]** (pantalla — BOCETO: tarjeta «Con tu capital»: −$7,102 contra +$68,723, 2007–2024; nota «cartera para simular, no para invertir»)
Con $100,000 simulados entre 2007 y 2024, esta cartera ×2 termina en −$7,102. Comprar y esperar la misma cesta: +$68,723. La cartera sirve para fabricar las historias del reto; el reto se pasa por suerte, y la cuenta de verdad termina en negativo. Es una simulación histórica, no una promesa; con $10,000 serían la décima parte.

**[4:03 — Ficha del experimento #37]** (pantalla — BOCETO: tarjeta de ficha con sello «PARCIAL», cuatro líneas y la URL atlas-lab-one.vercel.app/e/37; logo ATLAS)
Ficha del experimento #37. Estado: parcial. Cifra clave: probabilidad de pasar sin límite de tiempo de 37.5%, 41.1% o 44.7% según cómo se mida, y 6.4% con plazo de 252 días. Filtro que decidió: el Sharpe de menos 0.03, sin ventaja detrás. Lección: pide siempre el rango y los supuestos, no una cifra suelta. Revísalo completo en atlas-lab-one.vercel.app/e/37. Contenido educativo, no es asesoría financiera. El trading no se promete: se prueba.

---

## SHORT (9:16, ≈ 47 s)
Título del Short: Probabilidad de pasar un reto: 37.5%, 41.1% o 44.7% #shorts
Fórmula visual (CLAUDE.md del canal): b-roll vertical real con overlay 0.6, Ken Burns alternado, subtítulos karaoke en MAYÚSCULAS con cifras en rojo, ticker arriba, whoosh + flash en cada corte; golpe (bass + sacudida) solo en 0-3 s y 28-40 s.

**[0-3 s]** "¿Probabilidad de pasar un reto? 37.5%, 41.1% o 44.7%. Misma estrategia."
- Boceto: b-roll de una regla o cinta métrica (kb=in); tres cifras que aparecen una tras otra; golpe de bass.

**[3-14 s]** "Depende de cómo midas la caída máxima de 10%: desde el máximo de la cuenta, o sobre el saldo inicial. Y de qué hace el bot el día de pánico."
- Boceto: dos gráficos de cuenta con piso móvil y piso fijo.

**[14-28 s]** "Con 252 días de plazo, las tres versiones dan entre 6.3% y 6.7%. Con 504 días, entre 18.4% y 19.1%. Sin límite de tiempo, se abren: de 37.5% a 44.7%."
- Boceto: tabla de tres filas; la columna «sin límite» crece; tick en cada cifra.

**[28-40 s]** "La cifra cambia, la lectura no: el Sharpe es menos 0.03, sin ventaja. Pasar es suerte. Desconfía de quien te enseñe solo la cifra más alta."
- Boceto: sello «RANGO, NO UNA CIFRA»; sacudida al aparecer «−0.03».

**[40-48 s]** "Video completo en el canal. Experimento 37 completo en el enlace. No es asesoría financiera. ¿Qué probabilidad? Depende del piso: de 37.5% a 44.7%."
- Boceto: sello «PARCIAL»; logo ATLAS y «EXPERIMENTO #37 · ENLACE». Loop: la respuesta enlaza con las tres cifras del gancho.

## Descripción (YouTube)
**Video largo**
https://atlas-lab-one.vercel.app/e/37?utm_source=youtube&utm_medium=video&utm_campaign=exp037-t3
Ficha del experimento #37 (probabilidad de aprobar, versión ejecutable): parcial. Probabilidad de pasar sin límite de tiempo: 37.5% (piso que sube con el máximo), 44.7% (piso fijo) o 41.1% (salida medida); con 252 días de plazo, entre 6.3% y 6.7%. Sharpe −0.03.
Comparo tres formas de medir el mismo reto de fondeo y explico cómo leer una probabilidad con su rango y sus supuestos.

Capítulos: 0:00 Gancho · 0:12 Este es el experimento #37 · 0:28 El reto en 20 segundos · 0:58 Primera diferencia: el piso · 1:28 Segunda diferencia: la salida · 1:52 La tabla de las tres respuestas · 2:17 Qué cambia y qué no · 2:46 Cómo leer una sola cifra · 3:12 El marcador de filtros · 3:40 Con tu capital · 4:03 Ficha del experimento #37

**Short**
https://atlas-lab-one.vercel.app/e/37?utm_source=youtube&utm_medium=short&utm_campaign=exp037-t3
Experimento #37: la probabilidad de pasar un reto va de 37.5% a 44.7% según cómo se mida (Sharpe −0.03). Parcial.

Contenido educativo. No es asesoría financiera ni recomendación de inversión.

Etiquetas: reto de fondeo, prop firm, FTMO, drawdown, caída máxima, probabilidad, simulación, bot de trading, backtest, sensibilidad, ATLAS Lab

## Rúbrica (autoevaluación — criterios del CLAUDE.md del canal, 1-5)
| hook_0_3s | ritmo | promesa_cumplida | potencial_loop | claridad_no_traders | honestidad_atlas | audio | cta |
|---|---|---|---|---|---|---|---|
| 5 | 4 | 5 | 4 | 4 | 5 | 4 | 4 |

Promedio: **4.38** → cumple el corte (≥ 4.0; hook ≥ 4 y honestidad 5).
Notas: el hook son tres cifras para una sola pregunta y se resuelve con una tabla. La honestidad está en mostrar el rango completo y no solo la cifra más alta. Punto débil: «piso móvil» y «piso fijo» se explican con el gráfico de dos cuentas.

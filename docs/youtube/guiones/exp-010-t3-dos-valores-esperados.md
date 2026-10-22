# Experimento #10 — Tema 3: dos valores esperados para el mismo negocio, $3,410 y $5,919 (cubre #10 y #11)

Tema 3 de 4 del experimento #10 · también tema del #11 (3 de 3)
Qué aporta frente a los otros temas: es el tema de método sobre el valor esperado. Pone lado a lado el valor «ilustrativo» del #10 ($3,410) y el del modelo completo del #11 (+$5,919), explica por qué difieren y deja tres preguntas para leer cualquier valor esperado. Es la pieza de unión entre la paridad de riesgo y el negocio completo de fondeo.
Estado del guion: **BORRADOR — pendiente de aprobación**
Estado de los experimentos: ambos **parciales** (en el sitio: neutral). Herramientas de simulación, sin señales · Serie E (Gestión de riesgo: lo poco que se sostuvo) · 1 largo + 1 Short
Datos usados: `experiments.json` (v=10 y v=11: metrics, kpis, params_view, verdict, notes, capital con su aviso; v=13: verdict, solo para la cuenta a ×2 que reventó en el COVID), `exp_details.json` (algo y filters de v=10 y v=11) y tabla «Con tu capital» de docs/youtube (filas 10 y 11). Las cifras con 10,000 dólares son las de la tabla de 100,000 divididas entre 10.
Producción: b-roll real con overlay oscuro 0.6, Ken Burns alterno, subtítulos karaoke en MAYÚSCULAS con cifras en rojo, golpe de bajo solo en 1–2 momentos. Rojo `#e11d2a`, verde `#22c55e`, fondo `#09090b`.

## Títulos (3 opciones)
1. $3,410 o $5,919: dos valores esperados para el mismo negocio de fondeo (y ninguno es una promesa)
2. Cómo leer un valor esperado: el caso de dos simuladores de prop firm
3. ¿Cuánto vale un intento de fondeo? Depende de lo que supongas

## Miniatura
Fondo negro `#09090b`. Dos carteles de precio enfrentados: «$3,410» en ámbar con «ILUSTRATIVO» y «+$5,919» en verde con «SIMULADO»; entre ambos, un signo de interrogación grande. Texto superior: «¿CUÁL ES?» (2 palabras). Logo ATLAS esquina inferior derecha.

---

## VIDEO LARGO (16:9, ≈ 4:51 min)

**[0:00 — Gancho]** (pantalla: dos carteles de precio)
Mismo negocio de fondeo, dos valores esperados por intento: 3,410 dólares y 5,919 dólares. ¿Cuál es el bueno? Ninguno es una promesa, y la diferencia explica cómo leer cualquiera.
> Boceto: dos carteles que se enfrentan con «$3,410» y «+$5,919»; el signo de interrogación pulsa con sacudida. Ken Burns «in».

**[0:13 — Qué experimentos son]** (pantalla: rótulo con el número y el nombre)
Este es el experimento #10 de ATLAS Lab: Paridad de riesgo más tamaño óptimo, y hoy lo comparo con el experimento 11, el valor esperado real de prop firm. Todos los resultados están en la página de cada experimento.
> Boceto: rótulos «#10 Paridad de riesgo» y «#11 Valor esperado real» y URL pequeña. kb=out.

**[0:30 — Qué es un valor esperado]** (pantalla: dado y barra promedio)
Un valor esperado es un promedio ponderado de todos los resultados posibles. Si cada intento te cuesta 500 dólares de cuota y a veces cobras mucho y otras veces nada, el valor esperado es el resultado medio que saldría si repitieras el negocio muchísimas veces dentro de un modelo. No es lo que ganarás la próxima vez; es el promedio de un modelo con supuestos. Por eso importa tanto saber cuáles son.
> Boceto: un dado con caras «−$500», «+$…» y una barra promedio; texto «promedio de un modelo, no un resultado garantizado». kb=in.

**[0:58 — El de 3,410 dólares: el ilustrativo]** (pantalla: cuenta de un intento)
El del experimento 10 se llama ilustrativo. Usa una cuota de 500 dólares y un pago supuesto de 8,000 dólares, y combina eso con la probabilidad de pasar. Es optimista por construcción, porque supone que se cobra un pago en la fase fondeada. El experimento lo dice así: sirve para ver la mecánica, no como expectativa de ganancia.
> Boceto: operación en pantalla «−$500 de cuota» y «+$8,000 pago supuesto»; sello ámbar «ilustrativo · optimista por construcción». kb=out.

**[1:23 — El de 5,919 dólares: el modelo completo]** (pantalla: fórmula animada)
El del experimento 11 modela el negocio entero. Primero, el examen a ×4, que pasa el 47.9% de las veces. Después, la cuenta fondeada de 100,000 dólares, con ×2, un reparto del 80%, retiros cada 21 días durante hasta 24 meses, y los mismos límites de 10% de caída total y 5% diario. El cobro esperado en esa fase es de 13,402 dólares, y la probabilidad de cobrar al menos un pago es del 79%. Probabilidad de pasar por cobro esperado, menos la cuota: más 5,919.
> Boceto: fórmula «47.9% × $13,402 − $500 ≈ +$5,919» apareciendo pieza a pieza; tarjeta con 79% de al menos un pago. kb=in.

**[2:05 — Por qué son distintos]** (pantalla: dos esquemas)
Son distintos porque hacen supuestos distintos. El primero toma un pago fijo, que no depende de si la cuenta sobrevive. El segundo simula la cuenta fondeada día a día: se cobra solo si hay ganancias y si no se tocan los límites. Además, el experimento 10 trabaja con la cartera de paridad de riesgo y el 11, con pesos iguales. No se pueden comparar uno contra otro: es lo mismo pedir dos presupuestos con listas de materiales distintas.
> Boceto: esquema A con un pago fijo de $8,000; esquema B con una cuenta que sobrevive o no mes a mes y cobra cada 21 días; etiqueta «supuestos distintos». kb=out.

**[2:36 — Lo que comparten]** (pantalla: tres avisos)
Y comparten tres limitaciones. Las dos cifras salen de remuestrear una cesta de 2019 a 2024, un periodo alcista. Ninguna incluye costos de operación. Y ninguna tiene una muestra aparte para validar. Por eso el veredicto de los dos experimentos es parcial.
> Boceto: tres tarjetas ámbar («periodo alcista», «sin costos», «sin muestra aparte») y sello «PARCIAL». kb=in.

**[2:53 — El camino real]** (pantalla: curva cortada)
Y hay una prueba que las incomoda a las dos. En el experimento 13, una cuenta a ×2 sobre el camino histórico real reventó en el COVID, al tocar el límite de caída de 10%. En el papel, más 5,919. En la realidad, cuenta reventada. Un valor esperado simulado no sustituye al camino real.
> Boceto: pantalla dividida: «+$5,919 simulado» y curva real que se corta en marzo de 2020 con sello rojo «CUENTA REVENTADA (#13)». kb=out.

**[3:17 — Tres preguntas para cualquier valor esperado]** (pantalla: tres iconos)
Tres preguntas, para este y para cualquiera que veas. Una: ¿qué se supone que cobras, y cuánto de eso depende de sobrevivir? Dos: ¿de qué periodo salen los datos, y habría pasado lo mismo con un mercado malo? Tres: ¿se probó con datos que el modelo no vio? Si no puedes responder, el número es una ilustración.
> Boceto: tres iconos numerados (cobro, periodo, muestra aparte) con un signo de interrogación cada uno. kb=in.

**[3:40 — Con tu capital]** (pantalla: tarjeta «Con tu capital» con aviso)
Con 10,000 dólares, la curva de paridad de riesgo sin apalancar del experimento 10 daría más 2,189 y la base del 11, más 5,761, frente a más 5,175 de la cesta sin estrategia. Con 100,000, la tabla de ATLAS da más 21,885 y más 57,609, contra más 51,747. Ninguna curva muestra el apalancamiento del examen.
> Boceto: tarjeta de capital con tres cifras y aviso ámbar «curvas sin apalancar; los exámenes usan ×6 y ×4»; selector $10,000 / $100,000.

**[4:08 — Ficha del experimento #10 (con #11)]** (pantalla: tarjeta con las URL)
Ficha de los experimentos 10 y 11. Estado: los dos parciales. Cifra clave: valor esperado ilustrativo de 3,410 dólares en el 10 y de más 5,919 en el 11, con 47.9% de pasar el examen a ×4. Filtros que decidieron: ninguna muestra aparte, y en el 11, el camino real reventó en el COVID. Lección: un valor esperado vale lo que valgan sus supuestos. Revísalo completo en atlas-lab-one.vercel.app/e/10 y /e/11.
> Boceto: tarjeta oscura con «#10 · #11 · PARCIALES», las dos cifras y «atlas-lab-one.vercel.app/e/10» en grande; logo.

**[4:41 — Cierre]**
Todos los datos en atlas-lab-one.vercel.app, experimentos 10 y 11. Contenido educativo, no es asesoría financiera. El trading no se promete: se prueba.
> Boceto: pantalla oscura con la frase de marca.

---

## SHORT (9:16, ≈ 46 s)

**[0-3 s]** «Mismo negocio, dos valores esperados: 3,410 y 5,919 dólares.»
> Boceto: dos carteles enfrentados; sacudida; b-roll de billetes y pantallas de trading, Ken Burns «in», overlay 0.6.

**[3-14 s]** «El primero usa una cuota de 500 dólares y un pago supuesto de 8,000. Es ilustrativo y optimista por construcción: supone que cobras.»
> Boceto: «−$500» y «+$8,000 supuesto»; sello ámbar «ilustrativo»; Ken Burns «out».

**[14-26 s]** «El segundo simula el negocio completo: pasar el examen, 47.9% a ×4, y una cuenta fondeada de 100,000 con reparto del 80%. Cobro esperado, 13,402; probabilidad de algún pago, 79%.»
> Boceto: fórmula «47.9% × $13,402 − $500 ≈ +$5,919» y 79%; whoosh y flash blanco.

**[26-38 s]** «Los dos salen de una cesta alcista de 2019 a 2024, sin costos y sin muestra aparte. Y en el camino real, una cuenta a ×2 reventó en el COVID.»
> Boceto: tres avisos ámbar y sello rojo «#13»; Ken Burns «in».

**[38-46 s]** «Un valor esperado vale lo que valgan sus supuestos. Experimentos diez y once completos en el enlace. El video completo está en el canal. No es asesoría financiera.»
> Boceto: vuelven los dos carteles con la interrogación (loop con el gancho); texto «Experimentos #10 y #11 completos en el enlace» y logo.

---

## Descripción de YouTube (video largo)
https://atlas-lab-one.vercel.app/e/10?utm_source=youtube&utm_medium=video&utm_campaign=exp010-t3
Ficha de los experimentos #10 y #11 (negocio de fondeo simulado): parciales los dos · valor esperado ilustrativo de $3,410 (#10, cuota $500 y pago supuesto $8,000) y +$5,919 (#11, examen a ×4 con 47.9% de pasar, cuenta fondeada de $100,000, 79% de cobrar al menos un pago).
Por qué dos valores esperados del mismo negocio difieren y tres preguntas para leer cualquiera; el camino real a ×2 reventó en el COVID (#13).
Contenido educativo. No es asesoría financiera ni recomendación de inversión.
También: https://atlas-lab-one.vercel.app/e/11?utm_source=youtube&utm_medium=video&utm_campaign=exp010-t3

## Descripción del Short
https://atlas-lab-one.vercel.app/e/10?utm_source=youtube&utm_medium=short&utm_campaign=exp010-t3
Experimentos #10 y #11 · parciales · valores esperados de $3,410 y $5,919 para el mismo negocio. No es asesoría financiera.

Capítulos: 0:00 Gancho · 0:13 Qué experimentos son · 0:30 Qué es un valor esperado · 0:58 El de 3,410 dólares: el ilustrativo · 1:23 El de 5,919 dólares: el modelo completo · 2:05 Por qué son distintos · 2:36 Lo que comparten · 2:53 El camino real · 3:17 Tres preguntas para cualquier valor esperado · 3:40 Con tu capital · 4:08 Ficha del experimento #10 (con #11) · 4:41 Cierre

Etiquetas: valor esperado, prop firm, FTMO, cuenta fondeada, challenge de fondeo, Monte Carlo, simulación de trading, paridad de riesgo, gestión de riesgo, supuestos, ATLAS Lab, trading con datos

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

Notas: el gancho es una cifra positiva y atractiva; por eso la advertencia («ilustrativo, optimista, camino real reventado») aparece dentro de los primeros 38 s del Short. La fórmula del #11 (probabilidad de pasar por cobro esperado, menos la cuota) reproduce su valor esperado con los números de su ficha. El Short cumple hook ≥ 4 y honestidad 5.

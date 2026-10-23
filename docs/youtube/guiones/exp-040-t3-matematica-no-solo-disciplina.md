# Experimento #40 — Veredicto final de 40 experimentos · Tema 3: matemática, no solo disciplina

Estado del guion: **BORRADOR — pendiente de aprobación**
Tema 3 de 3 del experimento #40. Qué aporta frente a los otros temas: es el CONCEPTO para quien busca pasar retos de fondeo. El tema 1 resume los 40 experimentos y el tema 2 explica la lección de los dos relojes; este tema responde una pregunta distinta: si un bot no tiene emociones, ¿por qué no pasa el reto? Cuatro muros de matemática (ventaja, plazo, valor esperado y tiempo), sin dar a entender que nadie pueda pasar.
Estado del experimento: **MURIÓ** (la mejor versión ejecutable da Sharpe −0.03, Deflated Sharpe 0.010 y 6.4% de pasar un reto en 252 días)
Serie: **G — Construyendo un bot (y por qué murió)** · es el cierre de la serie.
Datos usados: `experiments.json` (v=40: analysis, verdict, notes, metrics, kpis, capital; v=37 y v=39: metrics) · `exp_details.json` (v40: filters) · `series/20260610_141058_veredicto-final-40-experimentos-v40.json` · fila #40 de la tabla «Con tu capital» (`docs/youtube/`).

## Títulos (opciones)
1. Un bot no tiene emociones y solo 6.4% pasa el reto: es matemática
2. ¿Disciplina o matemática? Lo que 40 experimentos dicen de los retos
3. Por qué fallan los retos de fondeo: 4 muros que la disciplina no salta

## Miniatura
Fondo #09090b. Un robot de perfil caminando hacia un muro de ladrillos con cuatro cifras grabadas («−0.03», «6.4%», «1.6», «−$500») en rojo (#e11d2a). Texto grande: «ROBOT VS NÚMEROS». Logo ATLAS en la esquina superior derecha. (No repite las palabras de los títulos.)

---

## VIDEO LARGO (16:9, ≈ 5:07)

**[0:00 — Gancho]** (pantalla — BOCETO: silueta de un robot sin rostro frente a un muro; sobre el muro aparece «6.4% en 252 días»)
Un bot no tiene miedo ni codicia. Aun así, el mejor bot que pude construir tiene 6.4% de probabilidad de pasar un reto de fondeo en 252 días. Si la falta de disciplina fuera todo el problema, un bot debería pasar. No pasa.

**[0:17 — Este es el experimento #40]** (pantalla — BOCETO: rótulo «EXPERIMENTO #40 · VEREDICTO FINAL DE 40 EXPERIMENTOS» con el logo ATLAS; la URL pequeña debajo)
Este es el experimento #40 de ATLAS Lab: Veredicto final de 40 experimentos. Todos los resultados están en la página del experimento. Hoy no hago un resumen, sino una pregunta: ¿por qué fallan los retos, si le quito las emociones a la ecuación?

**[0:35 — La explicación popular]** (pantalla — BOCETO: dos platos de una balanza, «disciplina» y «matemática», el primero pesa más en la creencia popular; el veredicto lo equilibra)
La explicación más repetida es que casi todos fallan por indisciplina: operan por impulso, no respetan sus reglas. Puede ser parte de la historia. Pero el veredicto de mis 40 experimentos dice que la baja tasa de aprobación no se explica solo por indisciplina: con esta clase de estrategia, también es cuestión de matemática. Un reto de fondeo es el desafío en que una empresa te presta una cuenta grande si cumples sus reglas.

**[1:04 — Muro 1: la ventaja]** (pantalla — BOCETO: medidor del Sharpe en −0.03 sobre el listón de 0.30; y el medidor del Deflated Sharpe en 0.010 sobre la meta 0.95)
Primer muro: la ventaja. El Sharpe, la ganancia por unidad de riesgo, de la mejor versión ejecutable es menos 0.03; el laboratorio pide más de 0.30. Y el Deflated Sharpe, la prueba que descuenta la suerte de haber probado muchas versiones, da 0.010 frente a los 0.95 necesarios. Sin ventaja, ninguna disciplina crea una.

**[1:26 — Muro 2: el plazo]** (pantalla — BOCETO: tres barras que crecen: 6.4% (252 días), 18.7% (504 días), 37.5% (sin límite); las dos primeras en rojo)
Segundo muro: el plazo. El reto que simulé en el experimento 37 pide subir 10% sin caer 10% desde el máximo ni perder 5% en un solo día. Con 252 días de operación, unos nueve meses y medio, pasa el 6.4%. Con 504 días, el 18.7%. Sin límite de tiempo, el 37.5%, pero eso es suerte: sin ventaja, un camino al azar puede tocar el 10% antes de romper una regla si le das años de intentos.

**[1:56 — Muro 3: el valor esperado]** (pantalla — BOCETO: fórmula «−$500 + 37.5% × $0 = −$500»; ticket del reto tachado)
Tercer muro: el valor esperado, del experimento 39. Pagas 500 dólares por intentar. Si pasas, el crecimiento anual de la estrategia es de menos 0.4%, así que en la fase fondeada no hay nada que cobrar. Menos 500, más 37.5% por cero: menos 500 dólares por intento. Pasar el reto no era el problema; lo que había del otro lado, no pagaba.

**[2:20 — Muro 4: el tiempo]** (pantalla — BOCETO: reloj de arena y barra: mediana 1.6 años contra el máximo de 1.5; sello ✕)
Cuarto muro: el tiempo. De los intentos que pasan, la mediana tarda 1.6 años, más que el máximo de 1.5 años que fijé como criterio en el experimento 39. Y la mayoría de los retos tienen plazo.

**[2:36 — ¿Y con otros supuestos?]** (pantalla — BOCETO: tres globos de diálogo con la objeción y su cifra: «menos apalancamiento» → Sharpe 0.09 · «sin reglas» → Sharpe −0.04 · «salida medida» → Sharpe 0.02)
Un escéptico diría: cambia un supuesto. Con ×1.5, en el experimento 31, el bot sobrevive, pero con Sharpe de 0.09 y no le gana a comprar y esperar. Sin las reglas del reto, con ×2, el Sharpe es menos 0.04. Con la salida medida el día del disparo, el Sharpe es 0.02 y la probabilidad de pasar en 252 días, 6.3%. Los cuatro muros siguen ahí.

**[3:02 — Qué significa y qué no]** (pantalla — BOCETO: dos columnas, «significa» (con datos gratis, rebalanceo diario y esta familia de estrategias: sin ventaja para pasar retos) y «no significa» (que nadie pueda pasar; que los retos sean una estafa), la segunda con una ✕)
Qué significa y qué no. Significa que, con precio y datos macro gratis, rebalanceo diario y esta familia de estrategias, no encontré una ventaja que pase retos con expectativa positiva. No significa que nadie en el mundo pueda pasar un reto, ni que los retos sean una estafa: eso los datos no lo dicen. Significa que, con lo que probé, la cuenta no cierra.

**[3:27 — La decisión]** (pantalla — BOCETO: dos tarjetas: «bot demo baja a ×2 como instrumento de medición» y «cero dinero en retos con esta clase de estrategia»; debajo, los caminos siguientes: carry y COT)
La decisión es doble. El bot demo baja a ×2 y pasa a ser un instrumento de medición, y no pongo dinero en retos de fondeo con esta clase de estrategia. Lo que sí queda: un método de validación al que no sobrevivieron seis o más resultados y la infraestructura completa. Los caminos siguientes son otros dos tipos de datos: el carry, con tasas de interés públicas, y el posicionamiento de los especuladores, el COT.

**[3:57 — El marcador de filtros]** (pantalla — BOCETO: checklist de exp_details.filters: Deflated Sharpe ✗ · Sharpe ejecutable ✗ · batir a comprar y esperar ✗ · probabilidad de pasar ✗ · señal rezagada ✓ · costos completos —)
El tablero de filtros: Deflated Sharpe de 0.010, bajo 0.95; Sharpe de menos 0.03, bajo 0.30; no bate a comprar y esperar, con menos 7.1% frente a más 68.7%; y 6.4% de probabilidad de pasar en 252 días. Pasa uno: la señal está rezagada un día. Los costos completos no se aplicaron: solo hay deslizamiento de 0.2% en el corte automático.

**[4:21 — Con tu capital]** (pantalla — BOCETO: tarjeta «Con tu capital»: $100,000 → −$7,102 contra +$68,723, 2007–2024; nota: «útil como instrumento de medición, no como estrategia para retos»)
Con $100,000 simulados entre 2007 y 2024, la cartera ×2 con señales de ayer termina en −$7,102. Comprar y esperar la misma cesta: +$68,723. Sirve como instrumento de medición, no como estrategia para retos. Es una simulación histórica, no una promesa; con $10,000 serían la décima parte.

**[4:40 — Ficha del experimento #40]** (pantalla — BOCETO: tarjeta de ficha con sello «NO SIRVIÓ», cuatro líneas y la URL atlas-lab-one.vercel.app/e/40; logo ATLAS)
Ficha del experimento #40. Estado: no sirvió. Cifra clave: 6.4% de probabilidad de pasar en 252 días, valor esperado de menos 500 dólares por intento y espera mediana de 1.6 años. Filtro que decidió: el Deflated Sharpe de 0.010. Lección: sin ventaja, ni el bot más disciplinado pasa el reto con expectativa positiva. Revísalo completo en atlas-lab-one.vercel.app/e/40. Contenido educativo, no es asesoría financiera. El trading no se promete: se prueba.

---

## SHORT (9:16, ≈ 47 s)
Título del Short: Un bot sin emociones: solo 6.4% pasa el reto #shorts
Fórmula visual (CLAUDE.md del canal): b-roll vertical real con overlay 0.6, Ken Burns alternado, subtítulos karaoke en MAYÚSCULAS con cifras en rojo, ticker arriba, whoosh + flash en cada corte; golpe (bass + sacudida) solo en 0-3 s y 28-40 s.

**[0-3 s]** "Un bot no tiene miedo ni codicia. Aun así, solo 6.4% pasa el reto en 252 días."
- Boceto: b-roll de un robot o máquina industrial (kb=in); «6.4%» gigante en rojo; golpe de bass.

**[3-14 s]** "Mi bot sigue reglas sin emociones. Si la falta de disciplina fuera todo el problema, debería pasar. Probé 40 experimentos para comprobarlo."
- Boceto: balanza «disciplina» contra «matemática»; contador de experimentos hasta 40.

**[14-28 s]** "Sharpe menos 0.03. Deflated Sharpe 0.010. Con plazo de 252 días, 6.4%. Sin plazo, 37.5%, con una mediana de 1.6 años. Valor esperado: menos 500 dólares por intento."
- Boceto: cuatro tarjetas que entran con tick (−0.03 · 0.010 · 6.4% · −$500); la última en rojo con sacudida.

**[28-40 s]** "La baja tasa de aprobación no se explica solo por indisciplina: con esta clase de estrategia, también es matemática. No digo que nadie pueda; digo que con lo que probé, la cuenta no cierra."
- Boceto: la balanza se equilibra; golpe de bass; subtítulo «TAMBIÉN ES MATEMÁTICA».

**[40-48 s]** "Video completo en el canal. Experimento 40 completo en el enlace. No es asesoría financiera. ¿Falla la disciplina o la cuenta? 6.4%."
- Boceto: sello «NO SIRVIÓ»; logo ATLAS y «EXPERIMENTO #40 · ENLACE». Loop: la pregunta final se responde con el gancho.

## Descripción (YouTube)
**Video largo**
https://atlas-lab-one.vercel.app/e/40?utm_source=youtube&utm_medium=video&utm_campaign=exp040-t3
Ficha del experimento #40 (veredicto final de 40 experimentos): no sirvió. Sharpe −0.03, Deflated Sharpe 0.010 (se necesita 0.95), 6.4% de pasar un reto en 252 días (37.5% sin límite, mediana 1.6 años) y valor esperado de −$500 por intento.
Cuatro muros de matemática (ventaja, plazo, valor esperado y tiempo) que explican por qué un bot sin emociones tampoco pasa el reto. No dice que nadie pueda pasar uno ni que los retos sean una estafa.

Capítulos: 0:00 Gancho · 0:17 Este es el experimento #40 · 0:35 La explicación popular · 1:04 Muro 1: la ventaja · 1:26 Muro 2: el plazo · 1:56 Muro 3: el valor esperado · 2:20 Muro 4: el tiempo · 2:36 ¿Y con otros supuestos? · 3:02 Qué significa y qué no · 3:27 La decisión · 3:57 El marcador de filtros · 4:21 Con tu capital · 4:40 Ficha del experimento #40

**Short**
https://atlas-lab-one.vercel.app/e/40?utm_source=youtube&utm_medium=short&utm_campaign=exp040-t3
Experimento #40: un bot sin emociones tiene 6.4% de pasar un reto en 252 días (Sharpe −0.03, valor esperado −$500). No sirvió.

Contenido educativo. No es asesoría financiera ni recomendación de inversión.

Etiquetas: reto de fondeo, prop firm, FTMO, disciplina, bot de trading, probabilidad, valor esperado, Deflated Sharpe, backtest, trading algorítmico, ATLAS Lab

## Rúbrica (autoevaluación — criterios del CLAUDE.md del canal, 1-5)
| hook_0_3s | ritmo | promesa_cumplida | potencial_loop | claridad_no_traders | honestidad_atlas | audio | cta |
|---|---|---|---|---|---|---|---|
| 5 | 4 | 5 | 5 | 5 | 5 | 4 | 4 |

Promedio: **4.63** → cumple el corte (≥ 4.0; hook ≥ 4 y honestidad 5).
Notas: el hook parte de una creencia popular y la desafía con una cifra. Se aclara en el largo y en el Short que no se afirma que nadie pueda pasar un reto ni que sean una estafa. Punto débil: comparte cifras con los temas 1 y 2; se diferencia por la estructura de cuatro muros.

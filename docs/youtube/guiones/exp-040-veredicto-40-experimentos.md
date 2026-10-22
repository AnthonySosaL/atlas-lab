# Experimento #40 — Veredicto final de 40 experimentos

Estado del guion: **BORRADOR — pendiente de aprobación**
Estado del experimento: **MURIÓ** (la mejor versión ejecutable da Sharpe −0.03, Deflated Sharpe 0.010 y 6.4% de pasar un reto en 252 días)
Serie: **G — Construyendo un bot (y por qué murió)** · es el cierre de la serie: resume #31–#39.
Datos usados: `experiments.json` (v=40: analysis, description, verdict, notes, metrics, kpis, params_view, capital) · `exp_details.json` (algo, filters) · `series/20260610_141058_veredicto-final-40-experimentos-v40.json` (curva 1 = cartera ×2 con señales de ayer 2007–2024; curva 2 = comprar y esperar) · fila #40 de la tabla «Con tu capital» (`docs/youtube/`).

## Títulos (opciones)
1. 40 experimentos, una conclusión: $0 en retos de fondeo
2. Mi bot tras 40 experimentos: Sharpe −0.03 y −$500 por intento
3. Veredicto final: ¿pasar un reto con un bot? 6.4% en 252 días

## Miniatura
Fondo #09090b. Texto gigante: "40" en blanco, una flecha y "$0" en rojo. Debajo, pequeño, "veredicto". Elemento visual: una pila de 40 carpetas que se convierte en un sello rojo. Logo ATLAS en la esquina inferior derecha. (No repite los títulos.)

---

## VIDEO LARGO (16:9, ≈ 7:26)

**[0:00 — Gancho]** (pantalla — BOCETO: pila de 40 carpetas numeradas que se comprime en un embudo; salen cinco cifras en fila: «−0.03 · 0.010 · 6.4% · 1.6 años · −$500»; sello final «$0 EN RETOS»)
Cuarenta experimentos. Un bot, datos al alcance de cualquiera y un objetivo: pasar retos de fondeo con expectativa positiva. Este es el resumen en cinco números: Sharpe de −0.03, Deflated Sharpe de 0.010, 6.4% de probabilidad de pasar en 252 días, 1.6 años de espera mediana y un valor esperado de −$500 por intento. La decisión: cero dólares en retos con esta clase de estrategia.

**[0:28 — Presentación]** (pantalla — BOCETO: rótulo «Experimento #40 · Veredicto final de 40 experimentos» sobre velas con opacidad 0.12; logo ATLAS)
Este es el experimento #40 de ATLAS Lab: Veredicto final de 40 experimentos. Todos los resultados están en la página del experimento.

**[0:38 — Lo que se buscaba]** (pantalla — BOCETO: tarjeta params_view: «precio + datos macro gratis · rebalanceo diario · cesta de forex, metales, índices y energía»; configuración final: VIX 28 / crédito 40 días, rezago de 1 día, kill-switch 3%, ×2)
Primero, el objetivo. Con los datos que tiene cualquier inversionista, precio y datos macro gratis, y un rebalanceo diario, ¿se puede construir un bot que pase retos de fondeo, esos desafíos en que una empresa te presta una cuenta grande si cumples sus reglas, con expectativa positiva? La configuración final es: una cesta de forex, metales, índices y energía, con un filtro de pánico del VIX, el índice del miedo, sobre 28 y el crédito bajo su media de 40 días, decidido con el cierre de ayer, un corte automático del 3% y apalancamiento ×2.

**[1:18 — Número 1: el Sharpe]** (pantalla — BOCETO: curva real de series/…v40.json, bot en rojo y comprar y esperar en gris, dibujándose 2007–2024; contador del Sharpe bajando a −0.03; recuadro: «mínimo del laboratorio: 0.30»)
Número uno: el Sharpe, la ganancia por unidad de riesgo. El de la versión ejecutable es −0.03, cuando el laboratorio pide más de 0.30. En el periodo completo, 2007–2024, la cartera termina en negativo. Con la salida medida el día del disparo, con un φ de 0.94, el Sharpe es 0.02. Tampoco es una ventaja.

**[1:42 — Número 2: el Deflated Sharpe]** (pantalla — BOCETO: medidor de 0 a 1 con la aguja en 0.010 y la meta en 0.95; recordatorio «descuenta la suerte de probar muchas versiones»)
Número dos: el Deflated Sharpe, la prueba que descuenta la suerte de haber probado muchas versiones. Dio 0.010, y hace falta 0.95. Con la salida medida, 0.019. En ambos casos, el Sharpe no se distingue del azar.

**[1:59 — Números 3 y 4: pasar el reto]** (pantalla — BOCETO: barra de 6.4% para el plazo de 252 días y marca de la mediana «1.6 años»; recuerda las reglas del reto: +10%, caída 10%, pérdida diaria 5%)
Número tres: la probabilidad de pasar un reto de fondeo en 252 días de operación, unos nueve meses y medio, es 6.4%. Con la salida medida, 6.3%. Sin límite de tiempo sube, pero la mediana tarda 1.6 años, y esa es la cifra número cuatro, más que el máximo de 1.5 años que fijé como criterio. Y recuerda que pasar sería cuestión de suerte, porque no hay ventaja detrás.

**[2:29 — Número 5: el valor esperado]** (pantalla — BOCETO: fórmula «−$500 + probabilidad de pasar × $0 = −$500»; ticket del reto tachado)
Número cinco, el que lo resume todo: valor esperado de −$500 por intento. Pagas la cuota, y aunque pases, el crecimiento de la estrategia es de −0.4% al año: no hay nada que cobrar en la fase fondeada. Lo único que queda es el costo del intento.

**[2:50 — Los nueve experimentos recientes]** (pantalla — BOCETO: tabla de 9 filas que se llena una a una, con el número del experimento a la izquierda y la cifra clave a la derecha; las cuentas cortadas con ✕ rojas)
| Experimento | Qué midió | Cifra clave |
|---|---|---|
| 31 | cuánto del día de pánico esquiva el bot | φ = 0.90: evita solo ~10% |
| 32 | años positivos de 2007 a 2024 | 10 de 18 (56%) |
| 33 | un filtro que dispara antes | cuenta cortada el 11-nov-2016 (−10.6%) |
| 34 | ×2.5 en calma | cuenta cortada el 10-nov-2016 (−10.2%) |
| 35 | curva de tasas como filtro | cuenta cortada el 11-nov-2016 (−10.4%) |
| 36 | sin reglas de prop firm | ×2: Sharpe −0.04 |
| 37 | probabilidad de pasar el reto | 6.4% en 252 días |
| 38 | Deflated Sharpe | 0.010 |
| 39 | valor esperado del negocio | −$500 por intento |
Estos son los nueve experimentos recientes, cada uno con su cifra. El 31 midió cuánto del día de pánico esquiva el bot: apenas cerca del 10%, con un φ de 0.90. El 32 lo miró año por año: 10 de 18 en positivo, 56%. El 33 hizo que el filtro disparara antes, y la cuenta se cortó el 11 de noviembre de 2016, con −10.6%. El 34 subió el apalancamiento en calma: se cortó el 10 de noviembre, con −10.2%. El 35 añadió la curva de tasas, y otra vez el 11 de noviembre, con −10.4%. El 36 quitó las reglas: con ×2, Sharpe de −0.04. El 37 simuló el reto: 6.4% en 252 días. El 38 aplicó el Deflated Sharpe: 0.010. Y el 39 hizo la cuenta del negocio: −$500 por intento.

**[3:46 — La lección de los relojes]** (pantalla — BOCETO: dos relojes enfrentados: «el cierre de hoy para decidir hoy → Sharpe 1.23» (gris, marcado como imposible) frente a «la señal de ayer → Sharpe −0.03» (rojo))
Hay una lección que atraviesa toda la serie. El filtro macro luce un Sharpe de 1.23 cuando usa información del mismo día, un dato que un bot real no tiene a esa hora. Con la señal de ayer, la versión que sí se puede ejecutar queda en −0.03. Antes de confiar en un backtest, pregunta qué información existía realmente en el momento de decidir.

**[4:14 — Con tu capital]** (pantalla — BOCETO: tarjeta «Con tu capital»: $100,000 → −$7,102 contra +$68,723, 2007–2024; nota: «útil como instrumento de medición, no como estrategia para retos»)
Con $100,000 simulados entre 2007 y 2024, la cartera ×2 con señales de ayer termina en −$7,102. Comprar y esperar la misma cesta: +$68,723. Es una simulación histórica, no una promesa; con $10,000 serían la décima parte. Es lo que quedó en pie tras 40 experimentos, y sirve como instrumento de medición, no como estrategia para retos.

**[4:39 — Tres objeciones razonables]** (pantalla — BOCETO: tres globos de diálogo que aparecen uno a uno con la objeción y, debajo, la respuesta con su cifra: Sharpe 0.09 · Sharpe −0.04 · φ = 0.90)
Tres objeciones razonables. Primera: «usa menos apalancamiento». Con ×1.5 el bot sobrevive, pero con Sharpe de 0.09 y no le gana a comprar y esperar. Segunda: «quita las reglas del reto». Sin ellas, con ×2 el Sharpe es −0.04: el problema no eran las reglas. Tercera: «que reaccione dentro del día». Se midió con datos horarios, y el bot se come cerca del 90% del movimiento del día de pánico. Las tres puertas se probaron y las tres quedaron cerradas.

**[5:13 — Qué significa este veredicto, y qué no]** (pantalla — BOCETO: dos columnas: «significa» (con datos gratis, rebalanceo diario y esta familia de estrategias: sin ventaja que pase retos con expectativa positiva) y «no significa» (que ninguna estrategia pueda pasar un reto; que los retos sean una estafa), la segunda con una ✕)
Ahora, qué significa este veredicto y qué no. Significa que, con precio y datos macro gratis, rebalanceo diario y esta familia de estrategias, no encontré una ventaja que pase retos con expectativa positiva. No significa que ninguna estrategia en el mundo pueda pasar un reto, ni que los retos sean una estafa: eso los datos no lo dicen. Significa que, con lo que probé, la cuenta no cierra.

**[5:43 — La decisión]** (pantalla — BOCETO: tres tarjetas verticales: «bot demo baja a ×2 como instrumento de medición» · «cero dinero en challenges» · «la tasa de aprobación también es matemática»)
La decisión es doble. El bot demo baja a ×2 y pasa a ser un instrumento de medición. Y no pongo dinero en retos de fondeo con esta clase de estrategia. Además, una conclusión sobre los retos en general: la baja tasa de aprobación no se explica solo por indisciplina. Con esta clase de estrategia, también es cuestión de matemática.

**[6:09 — Lo que sí queda]** (pantalla — BOCETO: lista con tres marcas verdes: «un método de validación al que no sobrevivieron 6 o más resultados» · «la infraestructura completa» · «un bot demo como instrumento de medición»; al fondo, los títulos de los experimentos 41 a 45)
Lo que sí queda es útil: un método de validación al que no sobrevivieron seis o más resultados, la infraestructura completa y un bot demo para medir. Los caminos que siguen son otros dos tipos de datos: el carry, con tasas de interés públicas, y el posicionamiento de los especuladores, el COT. Los pruebo en los experimentos 41 al 45.

**[6:35 — Ficha del experimento #40]** (pantalla — BOCETO: tarjeta de ficha con sello «NO SIRVIÓ», cuatro líneas y la URL atlas-lab-one.vercel.app/e/40; logo ATLAS)
Ficha del experimento #40.
Estado: no sirvió.
Cifra clave: Sharpe de menos 0.03, Deflated Sharpe de 0.010 frente a los 0.95 necesarios, 6.4% de probabilidad de pasar en 252 días y valor esperado de menos 500 dólares por intento.
Filtro que decidió: el Deflated Sharpe y el valor esperado del negocio, que no alcanzan el mínimo.
Lección: con esta clase de estrategia, el problema no es solo la disciplina: también es matemática.
Revísalo completo en atlas-lab-one.vercel.app/e/40.

**[7:04 — Conclusión y cierre]** (pantalla — BOCETO: sello «NO SIRVIÓ» sobre los cinco números; logo ATLAS + URL)
Veredicto: no sirvió. Con datos al alcance de cualquiera y rebalanceo diario, en esta familia de estrategias no encontré una ventaja aplicable que pase retos con expectativa positiva. Todos los datos están en atlas-lab-one.vercel.app/e/40. Contenido educativo, no es asesoría financiera. El trading no se promete: se prueba.

---

## SHORT (9:16, ≈ 50 s)
Título del Short: 40 experimentos: cuánto pondré en un reto de fondeo #shorts
Fórmula visual (CLAUDE.md del canal): b-roll vertical real con overlay 0.6, Ken Burns alternado, subtítulos karaoke en MAYÚSCULAS con cifras en rojo, ticker arriba, whoosh + flash en cada corte; golpe (bass + sacudida) solo en 0-3 s y 28-40 s.

**[0-3 s]** "40 experimentos. ¿Cuánto pondré en un reto de fondeo? Cero."
- Boceto: b-roll de carpetas apiladas (kb=in); «40» blanco → «$0» rojo gigante; golpe de bass.

**[3-14 s]** "Mi mejor bot, con datos al alcance de cualquiera: precio y datos macro gratis, y rebalanceo diario. Cuarenta experimentos para hacerlo funcionar."
- Boceto: contador de experimentos subiendo hasta 40 sobre un ticker; chips «PRECIO», «MACRO», «DIARIO».

**[14-28 s]** "El resultado: Sharpe menos 0.03. Deflated Sharpe, 0.010; se necesita 0.95. Probabilidad de pasar el reto en 252 días: 6.4%. Valor esperado: menos 500 dólares por intento."
- Boceto: cuatro tarjetas que entran una por una (−0.03 · 0.010 · 6.4% · −$500) con tick; la última en rojo con sacudida.

**[28-40 s]** "No es solo falta de disciplina. Con esta clase de estrategia, también es matemática. Lo que queda: un método de validación y un bot demo a ×2 como instrumento de medición."
- Boceto: balanza «DISCIPLINA» vs «MATEMÁTICA» inclinándose hacia la segunda; golpe de bass.

**[40-50 s]** "El video completo está en el canal. Experimento 40 completo en el enlace. No es asesoría financiera. Cuarenta experimentos después, ¿cuánto pondré en un reto de fondeo?"
- Boceto: sello «NO SIRVIÓ»; tarjeta «experimento #40 completo en el enlace» y la URL corta; logo ATLAS. Loop: la pregunta final se responde con el inicio «Cero».

## Descripción (YouTube)
https://atlas-lab-one.vercel.app/e/40?utm_source=youtube&utm_medium=video&utm_campaign=exp040-t1
Ficha del experimento #40 (Veredicto final de 40 experimentos): no sirvió · versión ejecutable (señal de ayer, ×2, 2007–2024): Sharpe −0.03, Deflated Sharpe 0.010 (se necesita 0.95), 6.4% de pasar un reto en 252 días.
Resumen de 40 experimentos con un bot de forex, metales, índices y energía, con datos al alcance de cualquiera. La mejor versión ejecutable (señales de ayer, ×2) da Sharpe −0.03, Deflated Sharpe 0.010 (se necesita 0.95), 6.4% de probabilidad de pasar un reto de fondeo en 252 días, 1.6 años de espera mediana y un valor esperado de −$500 por intento. Experimento #40.

Capítulos: 0:00 Gancho · 0:28 Presentación · 0:38 Lo que se buscaba · 1:18 Número 1: el Sharpe · 1:42 Número 2: el Deflated Sharpe · 1:59 Números 3 y 4: pasar el reto · 2:29 Número 5: el valor esperado · 2:50 Los nueve experimentos recientes · 3:46 La lección de los relojes · 4:14 Con tu capital · 4:39 Tres objeciones razonables · 5:13 Qué significa este veredicto, y qué no · 5:43 La decisión · 6:09 Lo que sí queda · 6:35 Ficha del experimento #40 · 7:04 Conclusión y cierre

Contenido educativo. No es asesoría financiera ni recomendación de inversión.

Etiquetas: prop firm, reto de fondeo, FTMO, bot de trading, backtest, Deflated Sharpe, valor esperado, trading algorítmico, validación de estrategias, conclusiones, ATLAS Lab

## Descripción del Short
https://atlas-lab-one.vercel.app/e/40?utm_source=youtube&utm_medium=short&utm_campaign=exp040-t1
Ficha del experimento #40: tras 40 experimentos, Sharpe −0.03, Deflated Sharpe 0.010 y valor esperado de −$500 por intento. No sirvió. Video completo en el canal. Contenido educativo, no es asesoría financiera.

## Rúbrica (autoevaluación — criterios del CLAUDE.md del canal, 1-5)
| hook_0_3s | ritmo | promesa_cumplida | potencial_loop | claridad_no_traders | honestidad_atlas | audio | cta |
|---|---|---|---|---|---|---|---|
| 4 | 4 | 5 | 4 | 4 | 5 | 4 | 4 |

Promedio: **4.25** → cumple el corte (≥ 4.0; hook ≥ 4 y honestidad 5).
Notas: el hook es una pregunta con respuesta («Cero») y cinco cifras reales; es un video-resumen, por lo que el Short compite menos por novedad que por claridad. Punto débil: depende de que la audiencia conozca el término «reto de fondeo»; el Short lo menciona sin explicarlo (el largo sí recuerda sus reglas).

## Otros temas de este experimento
1. Tema 1 (este archivo) — `exp-040-veredicto-40-experimentos.md` — 40 experimentos, una conclusión: $0 en retos de fondeo
2. Tema 2 — `exp-040-t2-leccion-de-los-relojes.md` — la lección de los dos relojes
3. Tema 3 — `exp-040-t3-matematica-no-solo-disciplina.md` — matemática, no solo disciplina

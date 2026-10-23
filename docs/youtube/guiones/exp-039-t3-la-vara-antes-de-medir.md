# Experimento #39 — Valor esperado del negocio ejecutable · Tema 3: poner la vara antes de medir

Estado del guion: **BORRADOR — pendiente de aprobación**
Tema 3 de 3 del experimento #39. Qué aporta frente a los otros temas: es el MÉTODO. El tema 1 recorre el negocio y el tema 2 explica la fórmula y su piso de −$500; este tema trata de cómo se fija un criterio de «sirve / no sirve» antes de ver los resultados (más de $1,000 de valor esperado y menos de 1.5 años de espera) y cómo se prueba que el veredicto resiste con otros supuestos.
Estado del experimento: **MURIÓ** (valor esperado de −$500 por intento; la espera mediana de 1.6 años supera el máximo de 1.5 exigido)
Serie: **G — Construyendo un bot (y por qué murió)**
Datos usados: `experiments.json` (v=39: analysis, verdict, notes, metrics, kpis, params_view, capital; v=37: metrics) · `exp_details.json` (v39: algo, filters; v37: algo) · fila #39 de la tabla «Con tu capital» (`docs/youtube/`).

## Títulos (opciones)
1. Fijé la vara antes de medir: más de $1,000 y menos de 1.5 años
2. Cómo decidir si algo «sirve» antes de ver los resultados
3. Mi criterio para el negocio de los retos: −$500 y 1.6 años

## Miniatura
Fondo #09090b. Una barra de salto de altura con el rótulo «$1,000» y un saltador que pasa muy por debajo; en el suelo, una línea roja (#e11d2a) en «−$500». Texto grande: «SALTO FALLIDO». Logo ATLAS en la esquina superior derecha. (No repite las palabras de los títulos.)

---

## VIDEO LARGO (16:9, ≈ 4:49)

**[0:00 — Gancho]** (pantalla — BOCETO: dos tarjetas con candado, «valor esperado > $1,000» y «espera mediana < 1.5 años», y debajo los resultados en rojo, «−$500» y «1.6 años»)
Antes de calcular nada, escribí la vara: para decir que el negocio de los retos sirve, el valor esperado tiene que ser mayor a 1,000 dólares y la espera mediana, menor a un año y medio. Después medí. Resultado: menos 500 dólares y 1.6 años. Las dos condiciones fallaron.

**[0:20 — Este es el experimento #39]** (pantalla — BOCETO: rótulo «EXPERIMENTO #39 · VALOR ESPERADO DEL NEGOCIO EJECUTABLE» con el logo ATLAS; la URL pequeña debajo)
Este es el experimento #39 de ATLAS Lab: Valor esperado del negocio ejecutable. Todos los resultados están en la página del experimento. Aquí me interesa el método: cómo fijar un criterio antes de mirar el resultado.

**[0:34 — Por qué la vara va primero]** (pantalla — BOCETO: ilustración rotulada, no es dato real: una portería que se mueve de lugar después del tiro, con el rótulo «mover la portería»)
Si decides qué es «éxito» después de ver los números, siempre encuentras una definición que te favorezca. Es como mover la portería después del tiro. Por eso el criterio queda escrito en el propio script antes de calcular: el experimento solo da «sirvió» si el valor esperado es mayor a 1,000 dólares y la espera mediana, menor a 1.5 años.

**[0:58 — La primera condición: dinero]** (pantalla — BOCETO: recta numérica con la cuota $500 y la marca «> $1,000»; el resultado, −$500, a la izquierda del cero)
La primera condición mide dinero: un valor esperado por intento mayor a 1,000 dólares. No pedí solo que fuera positivo, sino que dejara un margen claro sobre la cuota de 500 dólares, para no aprobar un negocio que apenas empata. Resultado del bot: menos 500. No solo no llega: está en el piso de la fórmula, porque el crecimiento anual es de menos 0.4% y la fase fondeada no deja nada que cobrar.

**[1:27 — La segunda condición: tiempo]** (pantalla — BOCETO: reloj de arena y barra de tiempo: mediana 516 días ≈ 1.6 años frente a la marca de 1.5 años; sello ✕)
La segunda condición mide tiempo: que la mediana de espera para pasar el reto sea menor a un año y medio. Es dinero atado y vida que pasa. En los datos, la mediana de los que pasan tarda 516 días, cerca de 1.6 años. Y si el piso de caída fuera fijo sobre el saldo inicial, la mediana sube a 594 días, cerca de 1.9 años, según el experimento 37.

**[1:55 — El veredicto a dos llaves]** (pantalla — BOCETO: dos llaves en dos cerraduras; ambas giran en falso con ✕; texto «basta que falle una»)
El veredicto exige las dos llaves a la vez. Aquí fallan las dos. Con una sola que fallara, el resultado ya sería «no sirvió». Esa es la ventaja de un criterio con dos condiciones: protege contra negocios que parecen buenos en una dimensión y malos en otra.

**[2:14 — ¿Resiste con otros supuestos?]** (pantalla — BOCETO: tarjeta «salida medida el día del disparo (φ = 0.94)»: «probabilidad de pasar 41.1% · crecimiento −0.02% · valor esperado −$500»)
Un criterio también se prueba cambiando un supuesto. Con la salida medida el día del disparo, con un φ de 0.94, el bot esquiva solo cerca del 6% de ese día. La probabilidad de pasar sube a 41.1%, pero el crecimiento anual queda en menos 0.02%: otra vez no hay nada que cobrar, y el valor esperado sigue en menos 500. La probabilidad cambió; el veredicto, no.

**[2:40 — El contraste del reloj]** (pantalla — BOCETO: dos tarjetas: «cierre de hoy para decidir hoy (imposible para un bot real): ~82% a ×4» frente a «señal de ayer, ×2: 37.5% en 1.6 años · −$500»)
Hay un contraste que enseña mucho sobre el tiempo. Con el cierre del mismo día, información que ningún bot real tiene a esa hora, la probabilidad de pasar sin límite de tiempo con ×4 llegaba a cerca de 82%. Con la señal de ayer, la que sí existe, es 37.5% y tarda 1.6 años. Una vara bien puesta tiene que usar la información que de verdad estaba disponible.

**[3:07 — Tres preguntas al criterio de otro]** (pantalla — BOCETO: tres tarjetas: «¿cuál era el criterio antes de medir?» · «¿se cambió después?» · «¿qué supuestos lo sostienen?»)
Cuando alguien te diga que algo «sirve», pregunta tres cosas. ¿Cuál era el criterio antes de medir? ¿Se cambió después de ver los números? ¿Qué supuestos lo sostienen, y qué pasa si cambian? Un criterio claro hace que el resultado sea comprobable, también cuando es incómodo.

**[3:26 — El marcador de filtros]** (pantalla — BOCETO: checklist de exp_details.filters: criterio del negocio ✗ · Sharpe −0.03 ✗ · batir a comprar y esperar ✗ · Deflated Sharpe — · costos completos —)
El tablero de filtros: el criterio del negocio no se cumple, con menos 500 frente a más de 1,000 dólares y 1.6 frente a menos de 1.5 años. El crecimiento de menos 0.4% al año corresponde a un Sharpe de menos 0.03, bajo el 0.30 del laboratorio. No bate a comprar y esperar, con menos 7.1% frente a más 68.7%. El Deflated Sharpe, 0.010, se calcula en el experimento 38, y los costos completos no se aplicaron: solo hay deslizamiento de 0.2% en el corte.

**[3:59 — Con tu capital]** (pantalla — BOCETO: tarjeta «Con tu capital»: $100,000 → −$7,102 contra +$68,723, 2007–2024)
Con $100,000 simulados entre 2007 y 2024, la cartera ×2 con señales de ayer termina en −$7,102. Comprar y esperar la misma cesta: +$68,723. La cartera se usa para calcular el valor esperado, no como cartera para invertir. Es una simulación histórica, no una promesa; con $10,000 serían la décima parte.

**[4:19 — Ficha del experimento #39]** (pantalla — BOCETO: tarjeta de ficha con sello «NO SIRVIÓ», cuatro líneas y la URL atlas-lab-one.vercel.app/e/39; logo ATLAS)
Ficha del experimento #39. Estado: no sirvió. Cifra clave: valor esperado de menos 500 dólares por intento y espera mediana de 1.6 años, contra una vara de más de 1,000 dólares y menos de 1.5 años. Filtro que decidió: el criterio del negocio, con las dos condiciones falladas. Lección: escribe la vara antes de medir y pruébala con otros supuestos. Revísalo completo en atlas-lab-one.vercel.app/e/39. Contenido educativo, no es asesoría financiera. El trading no se promete: se prueba.

---

## SHORT (9:16, ≈ 46 s)
Título del Short: Escribí la vara antes de medir: más de $1,000. Salió −$500 #shorts
Fórmula visual (CLAUDE.md del canal): b-roll vertical real con overlay 0.6, Ken Burns alternado, subtítulos karaoke en MAYÚSCULAS con cifras en rojo, ticker arriba, whoosh + flash en cada corte; golpe (bass + sacudida) solo en 0-3 s y 14-28 s.

**[0-3 s]** "Escribí la vara antes de medir: más de 1,000 dólares por intento. Salió menos 500."
- Boceto: b-roll de una barra de salto de altura (kb=in); «> $1,000» en blanco y «−$500» en rojo; golpe de bass.

**[3-14 s]** "Si decides qué es éxito después de ver los números, siempre encuentras una definición que te favorezca. Es como mover la portería después del tiro."
- Boceto: portería que se mueve de lugar; subtítulo «MOVER LA PORTERÍA».

**[14-28 s]** "Mi criterio tenía dos llaves: valor esperado mayor a 1,000 dólares y espera mediana menor a 1.5 años. Resultado: menos 500 dólares y 1.6 años. Fallaron las dos."
- Boceto: dos llaves y dos cerraduras con ✕; sacudida al aparecer 1.6.

**[28-40 s]** "Cambié un supuesto: con la salida medida, la probabilidad de pasar sube a 41.1%, pero el crecimiento sigue negativo. Valor esperado: otra vez menos 500."
- Boceto: tarjeta «φ = 0.94 · 41.1% · −0.02% anual · −$500».

**[40-48 s]** "Video completo en el canal. Experimento 39 completo en el enlace. No es asesoría financiera. La vara va primero, y la prueba de otros supuestos va después."
- Boceto: sello «NO SIRVIÓ»; logo ATLAS y «EXPERIMENTO #39 · ENLACE». Loop: la frase final enlaza con el gancho (vara antes de medir).

## Descripción (YouTube)
**Video largo**
https://atlas-lab-one.vercel.app/e/39?utm_source=youtube&utm_medium=video&utm_campaign=exp039-t3
Ficha del experimento #39 (valor esperado del negocio ejecutable): no sirvió. Valor esperado −$500 por intento (vara: más de $1,000) y espera mediana de 1.6 años (vara: menos de 1.5); probabilidad de pasar 37.5%, crecimiento anual −0.4%.
Cómo fijar un criterio de «sirve / no sirve» antes de ver los resultados y cómo probar que resiste con otros supuestos (salida medida, φ = 0.94).

Capítulos: 0:00 Gancho · 0:20 Este es el experimento #39 · 0:34 Por qué la vara va primero · 0:58 La primera condición: dinero · 1:27 La segunda condición: tiempo · 1:55 El veredicto a dos llaves · 2:14 ¿Resiste con otros supuestos? · 2:40 El contraste del reloj · 3:07 Tres preguntas al criterio de otro · 3:26 El marcador de filtros · 3:59 Con tu capital · 4:19 Ficha del experimento #39

**Short**
https://atlas-lab-one.vercel.app/e/39?utm_source=youtube&utm_medium=short&utm_campaign=exp039-t3
Experimento #39: la vara era más de $1,000 y menos de 1.5 años; salió −$500 y 1.6 años. No sirvió.

Contenido educativo. No es asesoría financiera ni recomendación de inversión.

Etiquetas: criterio de éxito, valor esperado, reto de fondeo, prop firm, validación, backtest, bot de trading, probabilidad, trading, método científico, ATLAS Lab

## Rúbrica (autoevaluación — criterios del CLAUDE.md del canal, 1-5)
| hook_0_3s | ritmo | promesa_cumplida | potencial_loop | claridad_no_traders | honestidad_atlas | audio | cta |
|---|---|---|---|---|---|---|---|
| 4 | 4 | 5 | 4 | 5 | 5 | 4 | 4 |

Promedio: **4.38** → cumple el corte (≥ 4.0; hook ≥ 4 y honestidad 5).
Notas: el hook contrasta la vara con el resultado. Punto débil: es el tema con menos cifras nuevas; el peso lo lleva el método (criterio previo, dos condiciones, otro supuesto). La razón de la vara de $1,000 se presenta como una elección de diseño, no como un dato.

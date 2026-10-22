# Experimento #32 — Validación ejecutable-reactiva · Tema 3: ¿suerte o ventaja?

Tema 3 de 3 del experimento #032 · Qué aporta frente a los otros temas: explica el Deflated Sharpe (la prueba que descuenta la suerte de haber probado muchas ideas) con los números del experimento #38 para una configuración relacionada, y qué pide para hablar de ventaja real. El tema 1 cuenta el año por año; el tema 2, la consistencia. Se entiende sin haber visto los otros temas.
Estado del guion: **BORRADOR — pendiente de aprobación**
Estado del experimento: **PARCIAL** (sobrevive con ×1.5, pero solo 10 de 18 años son positivos: 56%, bajo el mínimo de 60%) · Serie G — Construyendo un bot (y por qué murió)
Datos usados: `experiments.json` (v=32: analysis, verdict, metrics, kpis, capital; v=38: metrics, kpis, notes, verdict, params_view), `exp_details.json` (claves `…-v32`: filters.dsr; `…-v38`), tabla «Con tu capital» (archivo de capital en `docs/youtube/`).
Nota de datos: el Deflated Sharpe no se calculó para el #32 mismo; el #32 cita el valor de 0.010 del #38 para una configuración relacionada (×2 con las señales de ayer). El guion lo dice así y no atribuye ese valor al ×1.5.
Producción (CLAUDE.md del canal): b-roll real detrás de cada escena con overlay oscuro 0.6, Ken Burns alternando in/out, subtítulos karaoke en MAYÚSCULAS con cifras en rojo, un dato visual por escena, golpe de bajo + sacudida solo en 1–2 momentos. Colores: rojo `#e11d2a`, verde `#22c55e`, fondo `#09090b`.

## Títulos (3 opciones)
1. ¿Diez años en verde son ventaja o suerte? El Deflated Sharpe dice 0.010
2. Deflated Sharpe 0.010 contra 0.95: la prueba de la suerte, explicada
3. Probar 40 configuraciones y quedarte con la mejor: el azar da un Sharpe de 0.46

## Miniatura (pensada para el título 2)
Fondo `#09090b`. Un dado y una moneda a la izquierda; a la derecha un medidor con la aguja en «0.010» y la meta «0.95» en verde `#22c55e`. Texto en Segoe UI Black: «¿SUERTE?» (una palabra, sin repetir los títulos). Logo ATLAS abajo a la derecha.

---

## VIDEO LARGO (16:9, ≈ 4:03 min)

**[0:00 — Gancho]** (pantalla: medidor del Deflated Sharpe)
Mi bot terminó en positivo diez años de dieciocho. ¿Ventaja o suerte? La prueba que descuenta la suerte, para una configuración relacionada, dio 0.010. Para hablar de ventaja real se exige 0.95.
BOCETO: medidor de 0 a 1 con la aguja en 0.010 y la meta en 0.95; las 10 barras verdes del bot detrás. Golpe de bajo en la aguja. kb=in.

**[0:14 — Qué es este experimento]** (pantalla: rótulo con el número y el nombre)
Este es el experimento #32 de ATLAS Lab: Validación ejecutable-reactiva. Todos los resultados están en la página del experimento. En este video me pregunto si lo que muestra es ventaja o azar, y para eso uso el experimento 38.
BOCETO: rótulo «EXPERIMENTO #32 · Validación ejecutable-reactiva» y, al lado, «#38 · Deflated Sharpe». kb=out.

**[0:32 — El problema de probar muchas cosas]** (pantalla: monedas)
Si pruebas una idea, tu resultado dice algo. Si pruebas muchas y te quedas con la mejor, el resultado dice menos, porque entre muchas siempre hay una que parece buena por puro azar. Es como lanzar muchas monedas y mostrar la que cayó cara diez veces seguidas.
BOCETO: muchas tandas de monedas; la de más caras se resalta con una corona y el rótulo «la mejor de muchas».

**[0:51 — Qué es el Deflated Sharpe]** (pantalla: de un Sharpe a otro)
El Deflated Sharpe ajusta el Sharpe, la ganancia por unidad de riesgo, por cuántas ideas se probaron. Da un valor entre 0 y 1, y el laboratorio exige 0.95 para hablar de ventaja real. También calcula el mejor Sharpe que se esperaría solo por azar tras tantos intentos.
BOCETO: un Sharpe observado que pasa por un embudo «descuento por intentos» y sale un valor; medidor con la meta 0.95.

**[1:12 — Los números del experimento 38]** (pantalla: tarjetas del #38)
El experimento 38 lo aplica a la mejor versión ejecutable, con ×2 y las señales de ayer. Se estimaron unas 40 configuraciones probadas. El Sharpe observado es de menos 0.03; el mejor que daría el azar tras 40 intentos, 0.46. El Deflated Sharpe: 0.010, contra 0.95 necesario. Con 20 intentos, 0.020; con 91, 0.004. Con la salida medida del día de disparo, el Sharpe sería 0.02 y el valor, 0.019.
BOCETO: tarjetas del #38: «Sharpe −0.03», «azar 0.46», «DSR 0.010», «requerido 0.95», «~40 intentos (estimado)»; debajo, los casos de 20 y 91 intentos.

**[1:48 — Qué dice esto del experimento 32]** (pantalla: dos bots)
El experimento 32 es otra configuración: ×1.5, no ×2. Su ficha no calcula el Deflated Sharpe, pero cita el valor del 38 como configuración relacionada: no confirma una ventaja real. Y el propio 32 tiene un Sharpe de 0.09, bajo el 0.30 que pide el laboratorio, y 56% de años positivos, bajo el 60% exigido.
BOCETO: dos etiquetas: «#32 · ×1.5 · Sharpe 0.09 · 56%» y «#38 · ×2 · DSR 0.010»; flecha punteada «configuración relacionada».

**[2:15 — Diez verdes no son evidencia por sí solos]** (pantalla: 18 barras)
Diez años en verde de dieciocho suenan bien. Pero con un Sharpe de 0.09, años que van de menos 6.2% a más 6.5% y una prueba relacionada que no confirma ventaja, estos datos no permiten descartar la suerte. Eso no prueba que no haya ventaja: dice que estos datos no alcanzan para afirmarla.
BOCETO: las 18 barras; sobre ellas, una nube de interrogantes y el rótulo «datos insuficientes para afirmar ventaja».

**[2:39 — Qué haría falta]** (pantalla: tres candados)
Para hablar de ventaja haría falta batir a comprar y esperar, que dio Sharpe 0.47 y más 58.9% en 2014–2024; superar el 0.30 fuera de muestra; y un Deflated Sharpe de 0.95. Hoy este bot ×1.5 no cumple ninguna de las tres: 0.09, 0.11 en 2007–2013 y más 4.2%.
BOCETO: tres candados: «batir a comprar y esperar», «Sharpe ≥ 0.30 fuera de muestra», «Deflated Sharpe ≥ 0.95»; los tres en rojo o gris.

**[3:04 — Con tu capital]** (pantalla: tarjeta de capital $100,000)
Con 100,000 dólares simulados entre 2014 y 2024, el bot termina en más 4,155. Comprar y esperar la misma cesta: más 58,879. Es una simulación histórica, no una promesa.
BOCETO: tarjeta «Con tu capital» del sitio: +$4,155 contra +$58,879.

**[3:19 — La pregunta para cualquier vendedor]** (pantalla: pregunta)
La pregunta que sirve contra cualquier curva bonita: ¿cuántas ideas probaste antes de enseñarme esta? Si no hay respuesta, no hay forma de descontar la suerte.
BOCETO: pregunta «¿cuántas probaste?» en grande sobre una curva ascendente.

**[3:30 — Ficha del experimento #32]** (pantalla: tarjeta con la URL)
Ficha del experimento #32, Validación ejecutable-reactiva. Estado: parcial. Cifra clave: 10 de 18 años positivos, 56%; el Deflated Sharpe de una configuración relacionada es 0.010, contra 0.95 necesario. Filtros que decidieron: años positivos bajo el 60%, Sharpe bajo el 0.30 y no bate a comprar y esperar. Lección: pregunta cuántas ideas se probaron. Revísalo completo en atlas-lab-one.vercel.app/e/32. Contenido educativo, no es asesoría financiera. El trading no se promete: se prueba.
BOCETO: tarjeta final con cuatro líneas (estado · cifra clave · filtro que decidió · lección) y la URL «atlas-lab-one.vercel.app/e/32» en grande; logo ATLAS; fondo de velas con opacidad 0.12.

---

## SHORT (9:16, ≈ 47 s)

**[0-3 s]** «¿Suerte o ventaja? Deflated Sharpe: 0.010.»
BOCETO: medidor con la aguja en 0.010 y la meta 0.95; golpe de bajo + sacudida.
**[3-11 s]** «Si pruebas muchas ideas y te quedas con la mejor, parte del resultado es azar. El Deflated Sharpe lo descuenta.»
BOCETO: tandas de monedas con una coronada. kb=out.
**[11-19 s]** «En el experimento 38, con unas 40 configuraciones, el azar da Sharpe 0.46. El observado: menos 0.03.»
BOCETO: tarjetas «azar 0.46» y «observado −0.03».
**[19-27 s]** «Valor obtenido: 0.010. Hace falta 0.95 para hablar de ventaja real.»
BOCETO: aguja en 0.010 lejos de la meta de 0.95.
**[27-35 s]** «Mi bot del 32: 10 años de 18 en positivo. Con esto no se puede afirmar que sea ventaja.»
BOCETO: 18 barras con interrogantes.
**[35-43 s]** «Experimento 32 completo en el enlace. El video completo está en el canal. No es asesoría financiera. El trading no se promete: se prueba.»
BOCETO: tarjeta con «experimento #32 completo en el enlace» y la URL corta; logo ATLAS.
**[43-47 s]** «¿Cuántas ideas probaron antes de esta?»
BOCETO: el medidor del inicio con interrogación; corte directo al inicio (loop).

---

## Descripción de YouTube (video largo)
https://atlas-lab-one.vercel.app/e/32?utm_source=youtube&utm_medium=video&utm_campaign=exp032-t3
Ficha del experimento #32 (Validación ejecutable-reactiva): parcial · 10 de 18 años positivos (56%) · Sharpe 0.09 · el Deflated Sharpe de una configuración relacionada (#38, ×2 con señales de ayer) es 0.010, contra 0.95 necesario.
Qué descuenta el Deflated Sharpe y por qué diez años en verde no bastan para hablar de ventaja.
Contenido educativo. No es asesoría financiera ni recomendación de inversión.

## Descripción del Short
https://atlas-lab-one.vercel.app/e/32?utm_source=youtube&utm_medium=short&utm_campaign=exp032-t3
Ficha del experimento #32: parcial · Deflated Sharpe 0.010 (configuración relacionada, #38) contra 0.95 necesario. Video completo en el canal. Contenido educativo, no es asesoría financiera.

## Capítulos
0:00 Gancho · 0:14 Qué es este experimento · 0:32 El problema de probar muchas cosas · 0:51 Qué es el Deflated Sharpe · 1:12 Los números del experimento 38 · 1:48 Qué dice esto del experimento 32 · 2:15 Diez verdes no son evidencia por sí solos · 2:39 Qué haría falta · 3:04 Con tu capital · 3:19 La pregunta para cualquier vendedor · 3:30 Ficha del experimento #32

## Etiquetas
Deflated Sharpe, suerte o ventaja, overfitting, sesgo de selección, backtest, validación de estrategias, Sharpe ratio, bot de trading, probar muchas estrategias, trading con datos, atlas lab, trading algorítmico

## Rúbrica (autoevaluación, 1–5)
| Pieza | hook_0_3s | ritmo | promesa_cumplida | potencial_loop | claridad_no_traders | honestidad_atlas | audio | cta | Promedio |
|---|---|---|---|---|---|---|---|---|---|
| Largo | 4 | 4 | 5 | 4 | 4 | 5 | 4 | 4 | 4.25 |
| Short | 4 | 4 | 5 | 4 | 4 | 5 | 4 | 4 | 4.25 |

Hook ≥ 4 ✓ · honestidad 5 ✓. Punto débil: el 0.010 es de otra configuración (#38) y el guion lo repite para no atribuirlo al ×1.5; el hook del Short lo resume y el cuerpo lo aclara.

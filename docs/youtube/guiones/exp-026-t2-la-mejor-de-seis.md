# Experimento #26 — Reentrada cuando el pánico se enfría · Tema 2: la mejor de seis

Tema 2 de 3 del experimento #026 · Qué aporta frente a los otros temas: explica el sesgo de elegir la mejor de varias variantes con el mismo periodo que luego la califica («selección en la misma muestra») y por qué seis mejoras seguidas no son seis confirmaciones. El tema 1 se centra en la alarma de «demasiado bueno» y en la señal del mismo día. Se entiende sin haber visto los otros temas.
Estado del guion: **BORRADOR — pendiente de aprobación**
Estado del experimento: **murió** (veredicto del sitio: «No sirvió») · Serie G — Construyendo un bot (y por qué murió)
Datos usados: `experiments.json` (v=26: params, params_view, metrics, kpis, verdict, notes, capital; v=27 para −1.00; v=38 para el Deflated Sharpe), `exp_details.json` (clave `…-v26`: algo, filters), tabla «Con tu capital» (archivo de capital en `docs/youtube/`).
Producción (CLAUDE.md del canal): b-roll real detrás de cada escena con overlay oscuro 0.6, Ken Burns alternando in/out, subtítulos karaoke en MAYÚSCULAS con cifras en rojo, un dato visual por escena, golpe de bajo + sacudida solo en 1–2 momentos. Colores: rojo `#e11d2a`, verde `#22c55e`, fondo `#09090b`.

## Títulos (3 opciones)
1. Probé 6 variantes y publiqué la mejor: por qué eso infla un resultado
2. Selección en la misma muestra: 1 de 6 combinaciones, Sharpe 2.12
3. Seis de seis superan al bot base: lo que no te cuentan de «la mejor variante»

## Miniatura (pensada para el título 1)
Fondo `#09090b`. Seis cajas cerradas en fila; una se abre con una luz verde `#22c55e` y las otras cinco quedan en sombra. Texto en Segoe UI Black: «1 DE 6» y, en rojo `#e11d2a`, una flecha circular que vuelve a la misma caja. Logo ATLAS abajo a la derecha.

---

## VIDEO LARGO (16:9, ≈ 4:39 min)

**[0:00 — Gancho]** (pantalla: seis barras, una resaltada)
Probé seis variantes de una misma idea. Las seis superaron al bot base. Publiqué la mejor: Sharpe de 2.12. Ahí empieza el problema.
BOCETO: seis barras verdes de 1.36 a 2.12 con la línea de la base en 1.23; la de 2.12 se agranda. Golpe de bajo al cerrarse la frase.

**[0:10 — Qué es este experimento]** (pantalla: rótulo con el número y el nombre)
Este es el experimento #26 de ATLAS Lab: Reentrada cuando el pánico se enfría. Todos los resultados están en la página del experimento. Aquí no discuto la idea, sino cómo se elige entre varias versiones de una idea.
BOCETO: rótulo «EXPERIMENTO #26 · Reentrada cuando el pánico se enfría» sobre velas con opacidad 0.12. kb=out.

**[0:27 — La grilla]** (pantalla: rejilla de 6 casillas)
La idea es una regla fija, sin aprendizaje automático: volver al mercado, con menos apalancamiento, cuando el VIX baja desde su máximo reciente. Se probaron tres niveles de enfriamiento, 0.7, 0.8 y 0.9, por dos apalancamientos al re-entrar, ×1.5 y ×2. Eso da seis combinaciones. Dos periodos: 2014 a 2024 y 2007 a 2013.
BOCETO: rejilla 3×2 (0.7/0.8/0.9 por ×1.5/×2) que se ilumina casilla por casilla. kb=in.

**[0:54 — Los resultados]** (pantalla: seis barras de Sharpe)
Las seis combinaciones superan a la base, que daba un Sharpe de 1.23, la ganancia por unidad de riesgo. Van de 1.36 a 2.12. La mejor, enfriamiento 0.9 y ×2: Sharpe de 2.12, más 1,226.7% y caída máxima de menos 10.2%. Fuera de muestra, en 2007 a 2013, da 1.53 frente a 1.06 de la base.
BOCETO: seis barras de 1.36 a 2.12, línea de la base en 1.23; tarjetas con tick (2.12 · +1,226.7% · −10.2% · 1.53 contra 1.06).

**[1:23 — El truco de la moneda]** (pantalla: monedas lanzadas)
Ahora, la intuición. Si lanzas una moneda diez veces, el resultado te dice poco. Pero si repites la tanda muchas veces y te quedas con la mejor, esa tanda parecerá extraordinaria, y no lo es: solo es la mejor de muchas. Con las estrategias pasa igual. Quedarte con la mejor de seis le da a esa variante una ventaja de partida.
BOCETO: seis tandas de monedas; la que sale con más caras se resalta con una corona y el rótulo «la mejor de muchas».

**[1:48 — Selección en la misma muestra]** (pantalla: flecha circular)
Hay una segunda cuestión. La combinación ganadora se eligió por su Sharpe en 2014–2024, el mismo periodo con el que luego se la presenta. Eso se llama selección en la misma muestra. La regla también debía sobrevivir en 2007–2013, lo que es un control parcial, pero el parámetro se eligió con los mismos datos que la miden. La ficha del sitio lo marca como un filtro que falla.
BOCETO: seis cajas cerradas; una se abre con «la mejor» y una flecha circular vuelve a «2014–2024»; fila roja del checklist «parámetros elegidos en la misma muestra: falla».

**[2:16 — Seis mejoras no son seis pruebas]** (pantalla: seis flechas con un origen común)
Dato curioso: que las seis mejoren a la vez no significa seis confirmaciones independientes. Las seis comparten el mismo ingrediente: el VIX y la señal manual del mismo día. Si ese ingrediente trae información que un bot real no tendría, las seis mejoran juntas por la misma razón. Es una explicación coherente con lo que dicen los datos.
BOCETO: seis flechas hacia arriba que nacen de una misma caja «VIX y señal del mismo día»; la caja parpadea en ámbar.

**[2:40 — Lo que descuenta el Deflated Sharpe]** (pantalla: medidor)
Existe una herramienta para descontar la suerte de haber probado muchas ideas: el Deflated Sharpe. Aquí no se aplicó. En el experimento 38, con unas 40 configuraciones probadas, el mejor Sharpe que se esperaría solo por azar es 0.46, y el valor exigido para hablar de ventaja es 0.95. Es otro caso, pero muestra cuánto puede pesar el número de intentos.
BOCETO: medidor 0–1 con la meta en 0.95; etiqueta «ajuste por intentos: no aplicado en el #26»; recuadro «#38: ~40 intentos · azar 0.46».

**[3:07 — Y con la señal de ayer]** (pantalla: barra que se rompe)
Pero el problema de fondo no es la selección. Es que la regla usa el cierre del mismo día. Con la señal de ayer, en el experimento 27, la re-entrada pasa de 2.12 a menos 1.00 en 2014–2024 y de 1.53 a menos 0.76 en 2007–2013, y la cuenta no sobrevive.
BOCETO: barra verde «2.12» que se rompe y cae a «−1.00» roja; segunda pareja «1.53 → −0.76». Golpe de bajo y sacudida.

**[3:31 — Con tu capital]** (pantalla: tarjeta de capital $10,000 / $100,000)
Con 10,000 dólares, la simulación termina en más 122,781; con 100,000, en más 1,227,815. Comprando y esperando serían más 5,904 y más 59,039. Es la cifra más grande de la serie y la que no se puede cobrar.
BOCETO: tarjeta «Con tu capital» del sitio con el selector; curva verde disparada frente a la gris; aviso ámbar «información del mismo día».

**[3:50 — Cómo se vería una elección honesta]** (pantalla: tres pasos)
Una elección más honesta tendría tres pasos: elegir el parámetro con un periodo, evaluarlo en otro que no se tocó, y descontar por el número de intentos. Y usar solo datos que existan a la hora de decidir.
BOCETO: tres pasos numerados: «elegir en un periodo», «evaluar en otro», «descontar por intentos»; check atenuado en el cuarto: «datos de ayer».

**[4:06 — Ficha del experimento #26]** (pantalla: tarjeta con la URL)
Ficha del experimento #26, Reentrada cuando el pánico se enfría. Estado: murió. Cifra clave: Sharpe de 2.12 y más 1,226.7%, la mejor de seis; con la señal de ayer, menos 1.00. Filtros que decidieron: la selección en la misma muestra y el uso del cierre del mismo día. Lección: pregunta cuántas variantes se probaron antes de enseñarte la mejor. Revísalo completo en atlas-lab-one.vercel.app/e/26. Contenido educativo, no es asesoría financiera. El trading no se promete: se prueba.
BOCETO: tarjeta final con cuatro líneas (estado · cifra clave · filtro que decidió · lección) y la URL «atlas-lab-one.vercel.app/e/26» en grande; logo ATLAS; fondo de velas con opacidad 0.12.

---

## SHORT (9:16, ≈ 47 s)

**[0-3 s]** «Probé 6 variantes. Publiqué la mejor: Sharpe 2.12.»
BOCETO: seis cajas; una se abre con «2.12» gigante; golpe de bajo + sacudida.
**[3-11 s]** «Las seis superaron al bot base, que daba 1.23. Van de 1.36 a 2.12. Pero publiqué la mejor de seis.»
BOCETO: seis barras con la línea de la base en 1.23. kb=out.
**[11-19 s]** «La elegí con el mismo periodo con el que la califico. Se llama selección en la misma muestra.»
BOCETO: una flecha circular que vuelve a la misma muestra.
**[19-27 s]** «Y las seis comparten el mismo ingrediente: el VIX del cierre de hoy. No son seis pruebas, es una.»
BOCETO: seis flechas que nacen de una caja «VIX de hoy».
**[27-35 s]** «Con la señal de ayer, la re-entrada pasa de 2.12 a menos 1.00, y la cuenta muere.»
BOCETO: barra verde que se rompe en roja con golpe de bajo.
**[35-43 s]** «Experimento 26 completo en el enlace. El video completo está en el canal. No es asesoría financiera. El trading no se promete: se prueba.»
BOCETO: tarjeta con «experimento #26 completo en el enlace» y la URL corta; logo ATLAS.
**[43-47 s]** «Si te enseñan la mejor, ¿cuántas probaron?»
BOCETO: la caja abierta con «2.12» y cinco cajas en sombra; corte directo al inicio (loop).

---

## Descripción de YouTube (video largo)
https://atlas-lab-one.vercel.app/e/26?utm_source=youtube&utm_medium=video&utm_campaign=exp026-t2
Ficha del experimento #26 (Reentrada cuando el pánico se enfría): murió (No sirvió) · la mejor de 6 combinaciones: Sharpe 2.12, +1,226.7% y 1.53 fuera de muestra · con la señal de ayer: −1.00.
Por qué elegir la mejor de varias variantes con el mismo periodo que la califica infla el resultado, y por qué seis mejoras seguidas no son seis pruebas.
Contenido educativo. No es asesoría financiera ni recomendación de inversión.

## Descripción del Short
https://atlas-lab-one.vercel.app/e/26?utm_source=youtube&utm_medium=short&utm_campaign=exp026-t2
Ficha del experimento #26: murió · la mejor de 6 variantes, Sharpe 2.12; con la señal de ayer, −1.00. Video completo en el canal. Contenido educativo, no es asesoría financiera.

## Capítulos
0:00 Gancho · 0:10 Qué es este experimento · 0:27 La grilla · 0:54 Los resultados · 1:23 El truco de la moneda · 1:48 Selección en la misma muestra · 2:16 Seis mejoras no son seis pruebas · 2:40 Lo que descuenta el Deflated Sharpe · 3:07 Y con la señal de ayer · 3:31 Con tu capital · 3:50 Cómo se vería una elección honesta · 4:06 Ficha del experimento #26

## Etiquetas
selección de la mejor variante, overfitting, sobreajuste, Deflated Sharpe, backtest, demasiado bueno para ser verdad, VIX, bot de trading, Sharpe ratio, trading con datos, atlas lab, trading algorítmico

## Rúbrica (autoevaluación, 1–5)
| Pieza | hook_0_3s | ritmo | promesa_cumplida | potencial_loop | claridad_no_traders | honestidad_atlas | audio | cta | Promedio |
|---|---|---|---|---|---|---|---|---|---|
| Largo | 5 | 4 | 5 | 4 | 4 | 5 | 4 | 4 | 4.38 |
| Short | 5 | 4 | 5 | 5 | 4 | 5 | 4 | 4 | 4.50 |

Hook ≥ 4 ✓ · honestidad 5 ✓. Punto débil: la idea de que «seis mejoras comparten un ingrediente» es una lectura coherente con los datos, no una medición; el video lo dice así. El 0.46 y las ~40 configuraciones son del experimento 38, no del 26.

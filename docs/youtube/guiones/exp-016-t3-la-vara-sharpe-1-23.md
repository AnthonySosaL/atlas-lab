# Experimento #16 — Validación del filtro macro en múltiples crisis · Tema 3: La vara de medir: por qué cuatro ideas se compararon contra un Sharpe de 1.23

Tema 3 de 3 del experimento #16. Tema 1: `exp-016-filtro-macro-multicrisis.md`.
Qué aporta frente a los otros temas: Enseña el concepto de línea base (baseline) con las variantes que se midieron contra este experimento: #18, #19, #20 y #21. El tema 1 es la validación completa del filtro y el tema 2 el desglose año por año.
Estado del guion: **BORRADOR — pendiente de aprobación**
Estado del experimento: **murió** (veredicto del sitio: «No sirvió»)
Serie: G (Construyendo un bot, y por qué murió)
Datos usados: `experiments.json` (v=16: description, params, metrics, kpis, analysis, verdict, notes, capital, period), `exp_details.json` (algo, code, filters), `series/20260608_160317_validacion-filtro-macro-multi-crisis-v16.json` (curva 1 = estrategia, curva 2 = comprar y esperar) y la tabla «Con tu capital» de docs/youtube (fila 16). Las cifras con 10,000 dólares son las de la tabla de 100,000 divididas entre 10. Se citan, solo para el marcador, las cifras publicadas de #18, #19, #20 y #21 (kpis y tabla de capital).

## Títulos (3 opciones)
1. Sharpe 1.23: la vara con la que medí cuatro ideas para mejorar mi bot
2. Qué es una línea base (baseline) y por qué toda idea nueva debe vencerla
3. Cuatro variantes contra una vara de 1.23: una ganó en el papel y ninguna sirvió

## Miniatura
Fondo negro de la marca. Una regla o vara horizontal con la marca «1.23» y cuatro tarjetas pequeñas que quedan por encima o por debajo: «1.39», «1.06», «0.38» y «−1.52». Texto grande: «LA VARA» (blanco, 1.23 en rojo de marca). Logo ATLAS esquina inferior derecha.

---

## VIDEO LARGO (16:9, ≈ 4:57 min — 4–6 min: tema de una sola idea y pocas cifras)
Ritmo visual: algo cambia en pantalla cada 2-3 s; b-roll real detrás, Ken Burns alterno, subtítulos karaoke, whoosh + flash en cada corte, golpe de bass solo en el momento clave.

**[0:00 — Gancho]** (pantalla: una vara con la marca 1.23)
Durante cuatro experimentos, una sola cifra decidió si una idea mejoraba mi bot: un Sharpe de 1.23. Te explico qué es una línea base y cómo quedaron cuatro ideas frente a ella.
> Boceto: una vara horizontal con la marca «1.23» en rojo y cuatro tarjetas que caen por encima o por debajo con whoosh; b-roll de bolsa, Ken Burns «in».

**[0:13 — El experimento]** (pantalla: rótulo con el número y el nombre del experimento)
Este es el experimento #16 de ATLAS Lab: Validación del filtro macro en múltiples crisis. Todos los resultados están en la página del experimento.
> Boceto: rótulo animado «EXPERIMENTO #16» con el nombre «Validación del filtro macro en múltiples crisis» debajo y el logo ATLAS; whoosh de entrada y fondo de velas con opacidad 0.12.

**[0:23 — Qué es una línea base]** (pantalla: una regla de medir con y sin marcas)
Una línea base, o baseline, es la versión sencilla y fija contra la que comparas cualquier idea nueva. Sin ella, un +267.3% no significa nada: no sabes si es mucho, poco, o simple suerte. La línea base es tu regla de medir. Si tu idea no la supera, no hay mejora.
> Boceto: dos reglas: una con marcas y otra sin ellas; la segunda sin referencia dice «+267.3% ¿comparado con qué?»; texto «sin base no hay mejora».

**[0:44 — Cuál es la base]** (pantalla: tarjetas KPI de la validación)
La base es la validación del filtro de pánico de 2014 a 2024: cesta de 15 mercados, ×3, reglas de cuenta fondeada. Resultado: Sharpe de 1.23, retorno de +267.3%, caída máxima de −12.5% y 9 de 10 años positivos. Esa es la vara.
> Boceto: cinco tarjetas con tick (1.23 · +267.3% · −12.5% · 9/10 · ×3); la curva real (series, curva 1) subiendo; la marca «1.23» queda fija.

**[1:02 — Las reglas del juego]** (pantalla: una sola palanca)
Las tres primeras variantes siguen una regla: mismas reglas, una sola palanca. Cambia una cosa y todo lo demás se queda igual, para que la diferencia se pueda atribuir a ese cambio. Su criterio de éxito: sobrevivir a las reglas de la cuenta y superar el Sharpe de 1.23. La cuarta cambia solo el periodo, con un mínimo formal de Sharpe de 0.30, y se lee frente a la misma vara.
> Boceto: una fila de interruptores en gris con uno solo encendido; texto «mismas reglas, una palanca»; checklist «sobrevivir» y «Sharpe > 1.23».

**[1:31 — Variante 1: refugios]** (pantalla: oro y yen)
Primera variante, experimento 18: en lugar de quedarse en efectivo cuando hay riesgo, rotar a oro y yen. La cuenta se cerró a los 24 días, el 31 de octubre de 2014, con −4.0%, porque el oro y el yen cayeron a la vez. Con 24 días, su Sharpe de −1.52 no es comparable con el de la base.
> Boceto: la vara 1.23 y una tarjeta «#18» con X roja; calendario con «31-oct-2014» y «24 días».

**[1:55 — Variante 2: ×5 en calma]** (pantalla: escalera de apalancamiento)
Segunda, experimento 19: apalancar ×5 cuando el VIX está bajo 16. Superó la vara: Sharpe de 1.39 y +591.5%. Pero la caída máxima subió a −17.2%, desde −12.5%, y decide con el VIX del cierre del mismo día.
> Boceto: la tarjeta «#19: 1.39» sube por encima de la vara en verde; la caída máxima −17.2% en rojo debajo.

**[2:11 — Variante 3: cortos]** (pantalla: comprar y vender en corto)
Tercera, experimento 20: añadir ventas en corto según el momentum. Sharpe de 0.38, por debajo de la vara, +39.3%, caída máxima de −18.5% y cuenta cerrada el 4 de noviembre de 2022. En las mismas fechas, la versión solo en largo ganó +199% con Sharpe 1.31.
> Boceto: la tarjeta «#20: 0.38» cae bajo la vara; dos curvas: verde solo largo y roja largo-corto cortada con X.

**[2:30 — Variante 4: fuera de muestra]** (pantalla: otro periodo)
Cuarta, experimento 21: las mismas reglas, congeladas, en 2007 a 2013, con la crisis de 2008. Sharpe de 1.06, +84.6% y todos los años positivos. Es una caída razonable frente a 1.23, pero con la misma salvedad: usa el cierre del mismo día.
> Boceto: la tarjeta «#21: 1.06» queda cerca, un poco por debajo de la vara; dos tramos de línea de tiempo: «diseño 2014-24» y «prueba 2007-13».

**[2:47 — El marcador]** (pantalla: tabla de cinco filas)
El marcador completo. Base: 1.23. Refugios: −1.52 en 24 días. Apalancamiento ×5 en calma: 1.39. Cortos: 0.38. Otro periodo: 1.06. Solo una idea superó la vara en el papel, y lo hizo amplificando la caída.
> Boceto: tabla animada con cinco filas (base 1.23 · #18 −1.52 · #19 1.39 · #20 0.38 · #21 1.06) y una línea horizontal en 1.23; los que la superan en verde, los demás en rojo.

**[3:02 — La vara también tiene un defecto]** (pantalla: reloj del día)
Y la propia vara tiene un defecto: usa el VIX y el crédito del cierre del mismo día. Con la señal de ayer, la base da un Sharpe de −0.17, según el experimento 27. Las cuatro variantes se comparan de forma justa entre sí, porque comparten la misma señal, pero ninguna se puede ejecutar tal cual.
> Boceto: la vara 1.23 con una grieta; debajo, «señal de ayer: −0.17» en rojo; texto «comparación justa, pero no ejecutable».

**[3:25 — Cómo elegir una buena línea base]** (pantalla: cuatro condiciones)
Una buena línea base cumple cuatro condiciones: es sencilla, usa el mismo periodo y los mismos costos que la idea nueva, se puede ejecutar de verdad y se fija antes de probar las ideas. Si la base no se puede ejecutar, lo que mides son mejoras sobre algo que no existe.
> Boceto: cuatro casillas que se marcan: «simple», «mismo periodo y costos», «ejecutable» (en rojo aquí), «fijada de antemano».

**[3:46 — Con tu capital]** (pantalla: tarjeta «Con tu capital» con aviso)
Con 10,000 dólares, la base termina en más 26,727; el ×5 en calma, en más 59,150; los cortos, en más 3,929, y la prueba de 2007 a 2013, en más 8,446. Con 100,000, más 267,267, más 591,504, más 39,293 y más 84,462. Ninguna se puede replicar en real: dependen de información del mismo día.
> Boceto: tarjeta de capital con cuatro cifras por selector $10,000 / $100,000 y aviso ámbar «información del mismo día».

**[4:08 — Conclusión]** (pantalla: texto grande)
Veredicto de la base: no sirvió. Pero la lección del método sí queda: una idea nueva se mide contra una vara fija. Antes de aplaudir una cifra, pregunta cuál es la vara, si se puede ejecutar y quién la fijó.
> Boceto: sello ✕ rojo sobre la vara; la frase «¿contra qué se compara?» en blanco.

**[4:24 — Ficha del experimento #16]** (pantalla: tarjeta en pantalla con la ficha y la URL)
Ficha del experimento 16. Estado: murió (veredicto del sitio: «No sirvió»). Cifra clave: +267.3%, Sharpe 1.23, caída máxima −12.5% y 9 de 10 años positivos (2014-2024). Filtro que decidió: la señal rezagada un día falla; con la señal de ayer la base da Sharpe −0.17 (#27). Lección: que un resultado aguante varias crisis no sirve si usa información que aún no existe al decidir. Revísalo completo en atlas-lab-one.vercel.app/e/16. Contenido educativo, no es asesoría financiera. El trading no se promete: se prueba.
> Boceto: tarjeta con las líneas de la ficha apareciendo una a una (estado, cifra clave, filtro que decidió, lección) y, al pie, la URL «atlas-lab-one.vercel.app/e/16» resaltada; sello del estado del experimento; frase de marca, logo y URL.

---

## SHORT (9:16, ≈ 44 s)
Fórmula visual: b-roll vertical + overlay oscuro 0.6, Ken Burns alternando in/out, subtítulos karaoke en MAYÚSCULAS con las cifras en rojo, whoosh + flash en cada corte, golpe de bass + sacudida solo en el 0-3 s; ticker arriba.

**[0-3 s]** «Sharpe 1.23: la vara para cuatro ideas.»
> Boceto: texto gigante «1.23» sobre una vara horizontal; cuatro tarjetas caen con whoosh y sacudida; b-roll de bolsa, Ken Burns «in».
**[3-13 s]** «Mi bot base daba Sharpe de 1.23 y +267.3%. Cada idea nueva se medía contra esa vara y contra las reglas de una cuenta fondeada.»
> Boceto: tarjetas de la base; Ken Burns «out»; karaoke con «LA VARA» en rojo.
**[13-22 s]** «Apalancamiento ×5 en calma: 1.39, pero con una caída de −17.2%. Cortos: 0.38. Otro periodo: 1.06. Refugios: la cuenta murió en 24 días.»
> Boceto: cuatro tarjetas que quedan sobre o bajo la vara con tick; la última con X roja.
**[22-26 s]** «Solo una pasó la vara, y amplificando la caída.»
> Boceto: la vara con una sola tarjeta verde encima; Ken Burns «in».
**[26-33 s]** «Y la propia vara usa el cierre del mismo día: con la señal de ayer, el Sharpe es −0.17.»
> Boceto: la vara con una grieta y la cifra «−0.17» en rojo; golpe de bass breve.
**[33-40 s]** «El video completo está en el canal. Experimento #16 completo en el enlace. No es asesoría financiera.»
> Boceto: texto «Video completo en el canal» y «Experimento #16 en el enlace» con el logo ATLAS.
**[40-44 s]** «Antes de aplaudir una cifra, pregunta cuál es la vara.»
> Boceto: vuelve «1.23» sobre la vara (loop con el gancho); corte directo al inicio.

## Descripción (YouTube) — video largo
https://atlas-lab-one.vercel.app/e/16?utm_source=youtube&utm_medium=video&utm_campaign=exp016-t3
Ficha del experimento #16 (Validación del filtro macro en múltiples crisis): estado murió. +267.3%, Sharpe 1.23, caída máxima −12.5% y 9 de 10 años positivos; con la señal de un día antes, Sharpe −0.17.
Qué es una línea base y cómo se usó la validación del filtro macro (Sharpe 1.23, +267.3%, caída máxima −12.5%) como vara para cuatro variantes: refugios oro+yen (cuenta cerrada a los 24 días), ×5 en calma (Sharpe 1.39, caída máxima −17.2%), largo-corto (Sharpe 0.38) y fuera de muestra 2007-2013 (Sharpe 1.06).
La base y las variantes usan el cierre del mismo día; con la señal de ayer, la base da Sharpe −0.17 (experimento 27).
Contenido educativo. No es asesoría financiera ni recomendación de inversión.

## Descripción (YouTube) — Short
https://atlas-lab-one.vercel.app/e/16?utm_source=youtube&utm_medium=short&utm_campaign=exp016-t3
Ficha del experimento #16 (Validación del filtro macro en múltiples crisis): estado murió. +267.3%, Sharpe 1.23, caída máxima −12.5% y 9 de 10 años positivos; con la señal de un día antes, Sharpe −0.17.
Un Sharpe de 1.23 fue la vara de cuatro ideas para mi bot: solo una la superó, amplificando la caída.
Video completo en el canal. Experimento #16 completo en el enlace. Contenido educativo, no es asesoría financiera.

Capítulos: 0:00 Gancho · 0:13 El experimento · 0:23 Qué es una línea base · 0:44 Cuál es la base · 1:02 Las reglas del juego · 1:31 Variante 1: refugios · 1:55 Variante 2: ×5 en calma · 2:11 Variante 3: cortos · 2:30 Variante 4: fuera de muestra · 2:47 El marcador · 3:02 La vara también tiene un defecto · 3:25 Cómo elegir una buena línea base · 3:46 Con tu capital · 4:08 Conclusión · 4:24 Ficha del experimento #16

Etiquetas: línea base, baseline, Sharpe ratio, backtest, bot de trading, validación de estrategias, variantes, prop firm, comparar estrategias, ATLAS Lab, trading con datos, trading algorítmico

## Rúbrica (autoevaluación, 1–5)
| Criterio | Short | Largo |
|---|---|---|
| hook_0_3s | 4 | 4 |
| ritmo | 4 | 4 |
| promesa_cumplida | 5 | 5 |
| potencial_loop | 4 | 4 |
| claridad_no_traders | 4 | 4 |
| honestidad_atlas | 5 | 5 |
| audio | 4 | 3 |
| cta | 4 | 4 |
| **Promedio** | **4.25** | **4.13** |

Notas: el gancho nombra una cifra y la presenta como regla de juego; las cifras de las variantes (#18, #19, #20 y #21) son las publicadas en sus experimentos. El Short cumple hook ≥ 4 y honestidad 5 al decir que la vara tampoco es ejecutable.

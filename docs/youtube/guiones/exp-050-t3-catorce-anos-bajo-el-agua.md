# Experimento #50 — Cierre: 11 clases de estrategia probadas · Tema 3: la curva de 2007 a 2024 y más de 14 años sin volver al máximo

Estado del guion: **BORRADOR — pendiente de aprobación**
Tema 3 de 4 del experimento #50. Qué aporta frente a los otros temas: el tema 1 resume las 11 clases y el triple test; el tema 2 explica el rezago de un día; este usa la curva completa de 2007 a 2024 para enseñar cuánto tiempo puede pasar una cuenta bajo el agua y cómo se lee «Con tu capital» a 17 años.
Estado del experimento: **murió** (No sirvió: ninguna de las 11 clases pasa el triple test; el experimento no opera nada propio, resume el programa) · Serie: G ("Construyendo un bot, y por qué murió") · Relacionado: #38, #40
Datos usados: `experiments.json` (v=50: verdict, notes, metrics, kpis, capital.note, period), `exp_details.json` (v50: algo, filters), `series/20260610_142844_cierre-11-clases-probadas-v50.json` (curva 0 = configuración ejecutable x2 de #40 con señal rezagada, 5,609 puntos de 2007-05-22 a 2024-12-31; curva 1 = sin estrategia; máximos, mínimos y valores de fin de año derivados de las curvas) y la tabla «Con tu capital» (`docs/youtube/*-capital.md`) (fila #50).

## Títulos (3 opciones)
1. Estrategia ejecutable 2007–2024: −7.1% y Sharpe −0.03
2. Con $100,000 de 2007 a 2024: $92,898 contra $168,723
3. Cómo se ve una estrategia sin ventaja entre 2007 y 2024

## Miniatura (1280×720)
Fondo `#09090b`. Una curva casi plana con un máximo marcado por una línea punteada blanca; el resto de la curva queda debajo, en rojo `#e11d2a`. Un reloj de arena en una esquina. Texto enorme blanco: "14 AÑOS". Texto pequeño rojo: "BAJO EL AGUA". Logo ATLAS esquina superior derecha. (No repite el título 1.)

---

## VIDEO LARGO (16:9, ≈ 4.5 min)

**[0:00 — Gancho]** (pantalla: la curva completa con una línea punteada en el máximo)
El 4 de noviembre de 2010, esta cuenta simulada tocó su máximo: $108,186 por cada $100,000. No volvió a esa cifra jamás. Más de 14 años después, el 31 de diciembre de 2024, termina en $92,898.
> BOCETO: curva real de `series/…v50.json` (curva 0) dibujándose hasta el máximo ($108,186, 4-nov-2010) con una línea punteada blanca que se extiende a la derecha; la curva nunca la vuelve a tocar; contador "14 años" en rojo con sacudida de pantalla.

**[0:15 — De qué experimento hablamos]** (pantalla: rótulo con el número y el nombre)
Este es el experimento #50 de ATLAS Lab: Cierre: 11 clases de estrategia probadas. Todos los resultados están en la página del experimento.
> BOCETO: rótulo "EXPERIMENTO #50 · Cierre: 11 clases de estrategia probadas" con whoosh.

**[0:30 — La curva de qué estrategia]** (pantalla: esquema del filtro macro)
Es la configuración ejecutable del experimento 40: una cesta con apalancamiento 2 y un filtro macro de riesgo, el VIX y el crédito, con la señal de ayer, es decir, rezagada un día. Sin las reglas de una prop firm, así que la curva llega completa hasta 2024. Cubre de mayo de 2007 a diciembre de 2024, 5,609 puntos. Una nota: une dos cestas distintas, que cambian en 2014.
> BOCETO: tres semáforos (VIX · salto del VIX · crédito) y la caja "x2 · kill-switch 3% · deslizamiento 0.2%"; barra de tiempo 2007–2024 con la marca 2014 ("cambia la cesta").

**[1:00 — La curva en tres fotos]** (pantalla: tres tramos coloreados)
Primera foto, de 2007 a noviembre de 2010: sube hasta el máximo de $108,186. Segunda foto, de noviembre de 2010 a noviembre de 2022: baja y baja. El 3 de noviembre de 2022 toca su mínimo, $83,575. Tercera foto, de 2022 a 2024: se recupera hasta $92,898, pero sin llegar al máximo. El drawdown máximo, que es la mayor caída desde un pico, es de −22.7%.
> BOCETO: curva 0 en tres tramos (verde / rojo / ámbar) con marcadores en $108,186 (4-nov-2010), $83,575 (3-nov-2022) y $92,898 (31-dic-2024); flecha "−22.7%" entre los dos primeros.

**[1:30 — Fin de año a fin de año]** (pantalla: barras anuales)
Mira los cierres de cada año. 2007: $102,588. 2010: $103,706. 2012: $103,671. 2015: $93,168. 2018: $88,515. 2022: $87,041. 2024: $92,898. Al cierre de cada año, la cuenta queda siempre entre $87,041 y $103,706. No hay una tendencia hacia arriba que se pueda contar.
> BOCETO: barras de fin de año con los valores de `series/…v50.json`; la línea de $100,000 en blanco; barras por encima en verde claro, por debajo en rojo; resaltadas 2007, 2010, 2012, 2015, 2018, 2022 y 2024.

**[1:50 — Tiempo por encima del capital inicial]** (pantalla: contador 1,411 de 5,609)
De los 5,609 puntos de la curva, solo en 1,411 la cuenta estuvo por encima de sus $100,000 iniciales. Es decir, durante la mayor parte del periodo, la cuenta estaba por debajo de donde empezó.
> BOCETO: línea de 5,609 puntos con los 1,411 sobre el capital inicial en verde y el resto en rojo; contador "1,411 / 5,609".

**[2:05 — Qué quiere decir «bajo el agua»]** (pantalla: dibujo de un nivel de agua)
Estar bajo el agua es estar por debajo del último máximo. Dos cosas se miden: cuánto cayó, aquí −22.7%, y cuánto tiempo no se recuperó. La segunda suele quedar fuera de los gráficos de venta, y para quien invierte es tan importante como la primera: son más de 14 años con el capital sin crecer.
> BOCETO: ilustración rotulada (no es dato real): una línea de máximo como "nivel del agua" y la curva por debajo; doble medidor "cuánto cayó / cuánto tardó".

**[2:30 — Con tu capital]** (pantalla: tarjeta "Con tu capital")
Con $100,000, la configuración termina en −$7,102. Con $10,000, −$710. Comprar y esperar la cesta, de mayo de 2007 a diciembre de 2024, +$68,723 con $100,000 y +$6,872 con $10,000. Cuidado con una lectura: la comparación sirve de contexto, porque en esas fechas el mercado subió. Es lo que pasó en la simulación, no una promesa.
> BOCETO: tarjeta de capital con dos filas, estrategia (rojo) y sin estrategia (verde), y las curvas 0 y 1 al fondo.

**[3:00 — El Sharpe y la prueba que falta]** (pantalla: tarjetas KPI)
El Sharpe, la ganancia por unidad de riesgo, es de −0.03: −0.003 en 2007–2013 y −0.044 en 2014–2024. Y el Deflated Sharpe, que descuenta la suerte de haber probado muchas ideas, da 0.010 con 40 intentos, cuando se exigen 0.95. Un Sharpe cerca de cero es justo lo que esta curva muestra: una cuenta que no gana ni pierde con claridad.
> BOCETO: `kpis` con tick; barra DSR 0.010 contra la meta 0.95.

**[3:25 — Para llevarte]** (pantalla: tres ideas)
Tres ideas. Una: pregunta siempre cuánto tiempo estuvo bajo el agua, no solo cuánto cayó. Dos: una curva cuyos cierres anuales van de $87,041 a $103,706 entre 2007 y 2024 no tiene ventaja que cobrar. Tres: la señal de ayer importa; con la señal de hoy, el mismo cálculo daría +49.4%.
> BOCETO: tres tarjetas numeradas con whoosh; en la tercera, "+49.4% → −7.1%".

**[3:50 — Ficha del experimento #50]** (pantalla: tarjeta con la URL)
Ficha del experimento 50. Estado: murió, ninguna de las 11 clases pasa el triple test. Cifra clave: −7.1% y Sharpe de −0.03 en 2007–2024, con el máximo en 2010 sin volver a verse. Filtro que decidió: el Deflated Sharpe, de 0.010 contra 0.95. Lección: mira el tiempo bajo el agua, no solo la caída. Revísalo completo en atlas-lab-one.vercel.app/e/50.
> BOCETO: tarjeta "FICHA · EXPERIMENTO #50" con Estado · Cifra clave · Filtro que decidió · Lección, y la URL `atlas-lab-one.vercel.app/e/50` en grande.

**[4:15 — Cierre]**
Contenido educativo, no es asesoría financiera. El trading no se promete: se prueba.
> BOCETO: fundido a la frase de marca en blanco sobre negro; logo ATLAS.

---

## SHORT (9:16, ≈ 42 s) — "Bajo el agua"
Título del Short: Tocó su máximo en 2010 y nunca volvió #Shorts

**[0-3 s]** "Máximo el 4 de noviembre de 2010: $108,186. Nunca volvió."
> BOCETO: B-roll vertical de pantallas de bolsa con overlay 0.6; línea punteada en el máximo y "14 AÑOS" en rojo; golpe de bajo y sacudida.

**[3-14 s]** "Es la estrategia ejecutable de mi programa: apalancamiento doble, un filtro de riesgo con el VIX y la señal de ayer. De 2007 a 2024."
> BOCETO: tres semáforos y chip "x2"; barra de tiempo 2007–2024. Ken Burns hacia dentro.

**[14-27 s]** "Cierra en $92,898. Mínimo: $83,575, en noviembre de 2022. Solo en 1,411 de 5,609 días estuvo por encima de su capital inicial."
> BOCETO: curva real dibujándose; marcadores $92,898 y $83,575 con tick; contador "1,411 / 5,609" con flash.

**[27-36 s]** "Sharpe de −0.03 y Deflated Sharpe de 0.010, cuando se exige 0.95. Comprar y esperar, con cien mil dólares: +$68,723."
> BOCETO: barra del DSR contra 0.95; tarjeta de capital con −$7,102 y +$68,723.

**[36-42 s]** "Más de 14 años sin volver al máximo. Experimento 50 completo en el enlace; el video completo está en el canal. No es asesoría financiera."
> BOCETO: vuelve la línea punteada del máximo (loop con el primer cuadro); abajo "Experimento #50 completo en el enlace"; texto pequeño "El trading no se promete: se prueba."

---

## Descripción (YouTube) — video largo
https://atlas-lab-one.vercel.app/e/50?utm_source=youtube&utm_medium=video&utm_campaign=exp050-t3
Ficha del experimento #50 (Cierre: 11 clases de estrategia probadas): murió · configuración ejecutable x2 con señal rezagada, 2007–2024: −7.1%, Sharpe −0.03, drawdown −22.7%, Deflated Sharpe 0.010 (se exige 0.95); comprar y esperar, +$68,723 con $100,000.
Cuánto tiempo puede pasar una cuenta bajo el agua: máximo de $108,186 en noviembre de 2010 y cierre en $92,898 en diciembre de 2024.
Contenido educativo. No es asesoría financiera ni recomendación de inversión.

## Descripción (YouTube) — Short
https://atlas-lab-one.vercel.app/e/50?utm_source=youtube&utm_medium=short&utm_campaign=exp050-t3
Experimento #50 (Cierre: 11 clases de estrategia probadas): murió · máximo de $108,186 en 2010, sin volver a verse; cierre en $92,898 (2024). Video completo en el canal. No es asesoría financiera.

## Capítulos
0:00 Gancho · 0:15 De qué experimento hablamos · 0:30 La curva de qué estrategia · 1:00 La curva en tres fotos · 1:30 Fin de año a fin de año · 1:50 Tiempo por encima del capital inicial · 2:05 Qué quiere decir «bajo el agua» · 2:30 Con tu capital · 3:00 El Sharpe y la prueba que falta · 3:25 Para llevarte · 3:50 Ficha del experimento #50 · 4:15 Cierre

## Etiquetas
drawdown, tiempo bajo el agua, curva de capital, backtest, Sharpe ratio, Deflated Sharpe, estrategia de trading, resultados negativos, datos 2007-2024, trading con datos, ATLAS Lab, trading algorítmico

## Rúbrica (autoevaluación, escala 1-5)
| Criterio | Nota | Por qué |
|---|---|---|
| hook_0_3s | 4 | Fecha y cifra exactas con «nunca volvió»; la línea punteada es el cuadro 1 |
| ritmo | 4 | Tres tramos de curva, barras anuales y contadores; el bloque de fin de año es denso |
| promesa_cumplida | 5 | Promete mostrar el tiempo bajo el agua y lo muestra con máximo, mínimo y conteo de días |
| potencial_loop | 4 | El final vuelve a la línea punteada del máximo |
| claridad_no_traders | 4 | Explica drawdown, tiempo bajo el agua, Sharpe y Deflated Sharpe |
| honestidad_atlas | 5 | Declara que la curva une dos cestas, que el mercado subió en el periodo y que la comparación es contexto |
| audio | 4 | Voz por clonar; un golpe de bajo |
| cta | 4 | Una petición (la ficha en la web) y remite al video completo |
Promedio: **4.25** (≥ 4.0). Hook del Short 4 (≥ 4) y honestidad 5: no descalificado.

# Experimento #29 — Interruptor de emergencia con disparo temprano · Tema 3: la vara de «sirvió»

Tema 3 de 3 del experimento #029 · Qué aporta frente a los otros temas: explica cómo decide ATLAS Lab que una idea «sirvió» o «murió» (las varas escritas en el código de los experimentos #29 a #34 y en el #38), con ejemplos reales de cada número. Cubre también los experimentos #30, #31, #32, #33 y #34. Se entiende sin haber visto los otros temas.
Estado del guion: **BORRADOR — pendiente de aprobación**
Estado del experimento: **murió** (veredicto del sitio: «No sirvió») · Serie G — Construyendo un bot (y por qué murió)
Datos usados: `experiments.json` (v=29, 30, 31, 32, 33, 34 y 38: kpis, metrics, verdict, chart), `exp_details.json` (`filters` y `code.snippet` de esos experimentos, y de v23 y v25 para las reglas del script), tabla «Con tu capital» (archivo de capital en `docs/youtube/`: totales de los 91 experimentos).
Nota de datos: las varas son las que cada experimento declara en su propio código y en su ficha (no una regla única del sitio); el video las atribuye experimento por experimento.
Producción (CLAUDE.md del canal): b-roll real detrás de cada escena con overlay oscuro 0.6, Ken Burns alternando in/out, subtítulos karaoke en MAYÚSCULAS con cifras en rojo, un dato visual por escena, golpe de bajo + sacudida solo en 1–2 momentos. Colores: rojo `#e11d2a`, verde `#22c55e`, fondo `#09090b`.

## Títulos (3 opciones)
1. Cómo decido si una estrategia «sirvió»: 0.30, 0.50, 0.60, 60% y 0.95
2. De 91 experimentos, 1 sirvió: la vara está escrita en el código
3. Los números que separan «sirvió» de «murió» en ATLAS Lab

## Miniatura (pensada para el título 1)
Fondo `#09090b`. Una barra de salto (como de atletismo) con varias alturas marcadas «0.30 · 0.60 · 0.95» y una curva roja `#e11d2a` que pasa por debajo de todas. Texto en Segoe UI Black: «LA VARA» (dos palabras, sin repetir los títulos). Logo ATLAS arriba a la derecha.

---

## VIDEO LARGO (16:9, ≈ 4:30 min)

**[0:00 — Gancho]** (pantalla: barra de salto con tres alturas)
Cada experimento del laboratorio declara su vara: un Sharpe de al menos 0.30 fuera de muestra, 60% de años positivos, un Deflated Sharpe de 0.95. De 91 experimentos, sirvió uno.
BOCETO: barra de salto con las alturas «0.30», «60%» y «0.95» apareciendo una a una; contador «91 experimentos · 1 sirvió». Golpe de bajo en el «1». kb=in.

**[0:15 — Qué es este experimento]** (pantalla: rótulo con el número y el nombre)
Este es el experimento #29 de ATLAS Lab: Interruptor de emergencia con disparo temprano. Todos los resultados están en la página del experimento. Lo uso de punto de partida para explicar una cosa: cómo se decide, en cada experimento, si una idea sirvió o murió. También uso los experimentos 30, 31, 32, 33, 34 y 38.
BOCETO: rótulo «EXPERIMENTO #29 · Interruptor de emergencia con disparo temprano» y, debajo, «30 · 31 · 32 · 33 · 34 · 38». kb=out.

**[0:41 — La vara está en el código]** (pantalla: línea de código con un veredicto)
Cada experimento trae su propio veredicto escrito en el código, a la vista de quien lo revise. Por ejemplo, en el experimento 23: sirvió si sobrevive, si su Sharpe supera 1.23 y si sobrevive también fuera de muestra; parcial si sobrevive con un Sharpe mayor que 1.0. En el 25: sirvió si sobrevive en ambos periodos y supera a la base. El Sharpe es la ganancia por unidad de riesgo.
BOCETO: dos líneas de `verdict = "sirvio" if …` tomadas de `exp_details.json` de v23 y v25, con los umbrales resaltados.

**[1:12 — Puerta uno: sobrevivir]** (pantalla: una cuenta y su piso)
Primera puerta: sobrevivir a las reglas de una prop firm, la empresa que presta la cuenta y la cierra si pierdes demasiado, en dos periodos: 2014–2024 y 2007–2013. Este experimento, el 29, ni siquiera llega: sobrevive en 2014–2024, cero; sobrevive en 2007–2013, cero. Como no pasa la primera puerta, las demás ni se evalúan.
BOCETO: dos barras «Sobrevive» en 0; puerta 1 cerrada; las demás puertas atenuadas.

**[1:37 — Puerta dos: un Sharpe mínimo]** (pantalla: línea en 0.30)
Segunda puerta: un Sharpe mínimo. El laboratorio pide 0.30 fuera de muestra, es decir, en años que la estrategia no vio al diseñarse. Además, el script del experimento 31 exige 0.60 en 2014–2024 para decir sirvió, y el del 33, 0.50. Con ×1.5, el experimento 30 da 0.03 y 0.05; el 31, 0.09 y 0.11; el 34, 0.08 fuera de muestra. Todos quedan bajo la raya.
BOCETO: línea de referencia en 0.30 y marcas en 0.50 y 0.60; puntos pequeños en 0.03, 0.05, 0.08, 0.09 y 0.11 muy por debajo. kb=in.

**[2:11 — Puerta tres: consistencia]** (pantalla: 18 barras de años)
Tercera puerta, en el experimento 32: que al menos el 60% de los años terminen en positivo. Resultado: 10 de 18, o sea 56%. No pasa. La idea es que una estrategia no solo gane en total, sino que lo haga con regularidad.
BOCETO: 18 barras de años, 10 verdes y 8 no; línea roja en 60%; contador «56%».

**[2:32 — Puerta cuatro: no mirar el futuro]** (pantalla: reloj)
Cuarta puerta: que un bot real pueda ejecutarla. Los experimentos 28 a 34 usan la señal de ayer; en el 31 al 34, el día del disparo el bot sale con lo que puede ver a esa hora. Es la lección del experimento 27: con la señal de ayer, el filtro de 1.23 pasa a menos 0.17.
BOCETO: reloj con «decide hoy, opera mañana» y la cifra «1.23 → −0.17».

**[2:59 — El juez final: el Deflated Sharpe]** (pantalla: medidor en 0.95)
Y el juez final: el Deflated Sharpe, que descuenta la suerte de haber probado muchas ideas. Para hablar de ventaja real se exige 0.95. En el experimento 38, con unas 40 configuraciones probadas, la mejor versión ejecutable da 0.010, y el mejor Sharpe que se esperaría solo por azar es 0.46.
BOCETO: medidor de 0 a 1 con la meta en 0.95 y la aguja en 0.010; recuadro «~40 intentos · azar 0.46».

**[3:22 — Cómo cayeron los demás]** (pantalla: tabla de varas)
Resumen de cómo cayó cada uno contra su vara.
| Experimento | Vara | Resultado |
|---|---|---|
| #29 | sobrevivir en los dos periodos | no sobrevive en ninguno |
| #30 | Sharpe ≥ 0.30 fuera de muestra | 0.03 y 0.05 |
| #31 | Sharpe 2014–24 ≥ 0.60 (script) | 0.09 |
| #32 | ≥ 60% de años positivos | 56% |
| #33 | Sharpe ≥ 0.50 (script) | −0.58 |
| #38 | Deflated Sharpe ≥ 0.95 | 0.010 |
BOCETO: tabla animada fila por fila; cada resultado entra en rojo bajo su vara; sello «murió» o «parcial» según la ficha.

**[3:27 — Con tu capital]** (pantalla: tarjeta de capital $10,000 / $100,000)
Y para el #29 en concreto, con 10,000 dólares, la curva termina en menos 1,149; con 100,000, en menos 11,493. No hay curva de «sin estrategia» para comparar.
BOCETO: tarjeta «Con tu capital» del sitio con el selector; curva roja cortada en mayo de 2015.

**[3:41 — Por qué publicar las varas]** (pantalla: dos frases)
Publicar la vara tiene una razón: que nadie tenga que fiarse de mi palabra. Si dices sirvió, tienes que decir también a qué altura estaba la barra. De los 91 experimentos del laboratorio, 1 sirvió, 64 murieron y 26 quedaron en parcial o no concluyente.
BOCETO: barra de proporción 1 · 64 · 26; frase final «El trading no se promete: se prueba».

**[4:02 — Ficha del experimento #29]** (pantalla: tarjeta con la URL)
Ficha del experimento #29, Interruptor de emergencia con disparo temprano. Estado: murió. Cifra clave: sobrevive en 2014–2024, cero, y en 2007–2013, cero. Filtro que decidió: la primera puerta, sobrevivir a las reglas de la prop firm. Lección: cada «sirvió» debe venir con la altura de su barra. Revísalo completo en atlas-lab-one.vercel.app/e/29. Contenido educativo, no es asesoría financiera. El trading no se promete: se prueba.
BOCETO: tarjeta final con cuatro líneas (estado · cifra clave · filtro que decidió · lección) y la URL «atlas-lab-one.vercel.app/e/29» en grande; logo ATLAS; fondo de velas con opacidad 0.12.

---

## SHORT (9:16, ≈ 47 s)

**[0-3 s]** «Para decir "sirvió" pido Sharpe 0.30 fuera de muestra.»
BOCETO: barra de salto en «0.30» y una curva roja que pasa por debajo; golpe de bajo + sacudida.
**[3-11 s]** «Y 60% de años positivos. Y un Deflated Sharpe de 0.95. Y que la cuenta sobreviva a la prop firm.»
BOCETO: tres alturas más en la barra: «60%», «0.95», «sobrevive». kb=out.
**[11-20 s]** «Mis bots: 0.03 y 0.05, 0.09 y 0.11, 56% de años positivos, Deflated Sharpe 0.010. Ninguno llega.»
BOCETO: puntos pequeños bajo cada altura de la barra.
**[20-28 s]** «Este, el 29, ni siquiera pasa la primera puerta: sobrevivir. Cero de dos periodos.»
BOCETO: dos barras en cero y la puerta 1 cerrada.
**[28-35 s]** «De 91 experimentos, sirvió uno. Publico la altura de cada barra.»
BOCETO: barra de proporción «1 · 64 · 26».
**[35-43 s]** «Experimento 29 completo en el enlace. El video completo está en el canal. No es asesoría financiera. El trading no se promete: se prueba.»
BOCETO: tarjeta con «experimento #29 completo en el enlace» y la URL corta; logo ATLAS.
**[43-47 s]** «Si dicen "sirvió": ¿a qué altura estaba la barra?»
BOCETO: la barra del inicio con interrogación; corte directo al inicio (loop).

---

## Descripción de YouTube (video largo)
https://atlas-lab-one.vercel.app/e/29?utm_source=youtube&utm_medium=video&utm_campaign=exp029-t3
Ficha del experimento #29 (Interruptor de emergencia con disparo temprano): murió (No sirvió) · sobrevive en 2014–2024: no; en 2007–2013: no · se explican las varas de «sirvió» de los experimentos #29 a #34 y #38.
Sharpe mínimo de 0.30 fuera de muestra, 60% de años positivos y Deflated Sharpe de 0.95: de 91 experimentos, 1 sirvió, 64 murieron y 26 quedaron en parcial o no concluyente.
Contenido educativo. No es asesoría financiera ni recomendación de inversión.

## Descripción del Short
https://atlas-lab-one.vercel.app/e/29?utm_source=youtube&utm_medium=short&utm_campaign=exp029-t3
Ficha del experimento #29: murió · no sobrevive en ningún periodo. Las varas de «sirvió»: 0.30, 60% y 0.95. Video completo en el canal. Contenido educativo, no es asesoría financiera.

## Capítulos
0:00 Gancho · 0:15 Qué es este experimento · 0:41 La vara está en el código · 1:12 Puerta uno: sobrevivir · 1:37 Puerta dos: un Sharpe mínimo · 2:11 Puerta tres: consistencia · 2:32 Puerta cuatro: no mirar el futuro · 2:59 El juez final: el Deflated Sharpe · 3:22 Cómo cayeron los demás · 3:27 Con tu capital · 3:41 Por qué publicar las varas · 4:02 Ficha del experimento #29

## Etiquetas
cómo validar una estrategia, Sharpe ratio, fuera de muestra, Deflated Sharpe, años positivos, prop firm, backtest, validación de estrategias, bot de trading, trading con datos, atlas lab, trading algorítmico

## Rúbrica (autoevaluación, 1–5)
| Pieza | hook_0_3s | ritmo | promesa_cumplida | potencial_loop | claridad_no_traders | honestidad_atlas | audio | cta | Promedio |
|---|---|---|---|---|---|---|---|---|---|
| Largo | 4 | 4 | 5 | 4 | 4 | 5 | 4 | 4 | 4.25 |
| Short | 4 | 4 | 5 | 4 | 4 | 5 | 4 | 4 | 4.25 |

Hook ≥ 4 ✓ · honestidad 5 ✓. Punto débil: es un video de concepto con muchas cifras; la tabla ayuda en el largo y el Short se limita a tres alturas. Las varas no son una regla única del sitio: cada una se atribuye al experimento que la declara.

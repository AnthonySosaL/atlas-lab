# Experimento #81 — Tema 2: por qué el Deflated Sharpe las mata (0.31 de 0.95)

Tema 2 de 5 del experimento #81 · Qué aporta frente a los otros temas: es el largo 2 del plan (el Deflated Sharpe explicado paso a paso) y el Short «el filtro que nadie pasó». Explica desde cero qué descuenta el filtro, de dónde sale el 1.11 de «techo de suerte» y qué pasó con el mismo filtro en los experimentos 83 al 89. El tema 1 cuenta qué pasó; el tema 3, el patrón «real pero inútil»; el tema 4, las cinco puertas; el tema 5, la cuenta de los intentos.
Estado del guion: **BORRADOR — pendiente de aprobación**
Estado del experimento: **murió** (0 de 33,363 sobrevivieron; Deflated Sharpe máximo 0.31 de 0.95 exigido) · Serie C — «El experimento grande» (plan-series.md) · 1 largo + 1 Short
Datos usados: `experiments.json` (v=81: kpis, metrics, verdict, analysis, chart, capital), `exp_details.json` (extra-v81: algo, code, filters), y para la tabla comparativa los Deflated Sharpe máximos de los experimentos 83, 84, 85, 86, 88 y 89 (campo `forms`/`filters` de cada ficha). No tiene `series/`.
Producción (CLAUDE.md del canal): b-roll real detrás de cada escena con overlay oscuro 0.6, Ken Burns alternando in/out, subtítulos karaoke en MAYÚSCULAS con palabras clave en rojo, un dato visual por escena, golpe de bajo + sacudida solo en 1–2 momentos. Colores: rojo `#e11d2a`, verde `#22c55e`, fondo `#09090b`. Cifras en dígitos aquí; en el campo `tts` del JSON, en palabras.

## Títulos (3 opciones)
1. El filtro que ninguna de 33,363 estrategias pasó: Deflated Sharpe 0.31 de 0.95
2. Con 33,363 intentos, la suerte sola da un Sharpe de 1.11: así se descuenta
3. Deflated Sharpe explicado: por qué «la mejor de muchas» miente

## Miniatura (pensada para el título 1)
Fondo `#09090b`. Una barra horizontal que llega hasta 0.31 en rojo y una línea blanca punteada mucho más lejos, en 0.95. Texto grande: «¿SUERTE?» (1 palabra, sin repetir el título). Logo ATLAS arriba a la derecha.

---

## VIDEO LARGO (16:9, ≈ 7 min)

**[0:00 — Gancho]** (pantalla: barra de 0.31 frente a la línea de 0.95)
De 33,363 estrategias probadas, el mejor Deflated Sharpe fue 0.31. Hacía falta 0.95. Este es el filtro que decidió todo el experimento.
BOCETO: barra roja que sube hasta 0.31 y se detiene lejos de la línea punteada de 0.95; sacudida al detenerse. kb=in.

**[0:15 — Qué es este experimento]** (pantalla: rótulo con el número y el nombre)
Este es el experimento #81 de ATLAS Lab: Laboratorio automático, 33,363 estrategias probadas con 5 filtros. Todos los resultados están en la página del experimento.
BOCETO: rótulo en rojo y blanco «EXPERIMENTO #81» con el nombre debajo, sobre la barra atenuada (overlay 0.6). Whoosh corto. kb=out.

**[0:25 — El Sharpe, en una frase]** (pantalla: dos curvas con distinta agitación)
Primero el Sharpe: es la ganancia por unidad de riesgo. Dos estrategias que ganan lo mismo no son iguales si una se agita mucho y la otra poco; la tranquila tiene mejor Sharpe. Por debajo de cero, la estrategia pierde. Como referencia, comprar y esperar la cesta de siete divisas y oro da un Sharpe de 0.13 en el periodo de diseño, 2014–2020.
BOCETO: dos curvas que acaban en el mismo punto, una muy ondulada y otra suave, rotuladas «ilustración»; cartel «Comprar y esperar, 2014–20: 0.13». kb=in.

**[1:10 — El problema: la mejor de muchas]** (pantalla: monedas y una racha resaltada)
Imagina miles de personas lanzando una moneda varias veces. Alguna sacará una racha de caras que parece talento. No lo es: es que hubo muchísimos intentos. Con las estrategias pasa lo mismo. Si pruebas miles de reglas, la mejor siempre luce bien, aunque ninguna tenga ventaja. Por eso lo que importa no es solo qué tan bueno salió el Sharpe, sino cuántas veces lo intentaste.
BOCETO: cuadrícula de monedas (ilustración, sin números) con una fila de caras resaltada en verde; al lado, una cuadrícula de curvas de estrategias donde una sola se ilumina. kb=out.

**[2:10 — Qué hace el Deflated Sharpe]** (pantalla: techo de suerte)
El Deflated Sharpe lo propusieron Bailey y López de Prado, investigadores de finanzas cuantitativas, y hace una pregunta: dado cuántas estrategias probaste, ¿qué Sharpe es normal sacar solo por azar? Con 33,363 intentos, ese techo de suerte es de cerca de 1.11 al año. Luego compara el Sharpe de tu estrategia con ese techo, teniendo en cuenta cuánto se agitan sus rendimientos diarios, y entrega un número entre 0 y 1. Se lee como una probabilidad: cerca de 1 es «casi seguro que no es solo suerte»; cerca de 0 es «lo que ves se explica por haber probado tanto». La vara en ATLAS es 0.95.
BOCETO: eje vertical de Sharpe con una banda roja «techo de suerte ≈ 1.11 al año (33,363 intentos)»; una estrategia con punto verde que sube pero no sale de la banda. Escala lateral de 0 a 1 con la marca 0.95. kb=in.

**[3:20 — Lo que pasó en el laboratorio]** (pantalla: máximo 0.31 y cinco estrategias)
El mejor Deflated Sharpe de todas las 33,363 fue 0.31. Era una combinación de Double Seven, una regla clásica de reversión, con un RSI de 6 días menor que 18. Ninguna llegó a 0.95. Y lo más cerca que estuvo alguien de sobrevivir fueron cinco estrategias que pasaron los otros cuatro filtros, los dos periodos fuera de muestra, el Monte Carlo y batir a comprar y esperar, y cayeron en este. Año por año, esas cinco ganan entre +0.3% y +0.5% al año, con 1 a 4 años negativos de 18.
BOCETO: tarjeta «Deflated Sharpe: 0 de 33,363 > 0.95 · máximo 0.31 (D7-7 + RSI6<18)». Cinco puntos verdes que pasan cuatro puertas y se detienen en la quinta. Golpe de bajo + sacudida al leer 0.31.

**[4:20 — El contador de intentos]** (pantalla: dos contadores)
Un detalle de método: el motor guarda dos versiones del Deflated Sharpe. Una con el contador global, los 33,363 intentos, y otra con el contador de cada familia de estrategias al momento de probar. El veredicto del experimento usa el global, que cuenta todo lo que se probó. Es la manera de no esconder los intentos fallidos. Si solo cuentas las ideas que te gustaron, el techo de suerte baja y todo parece mejor de lo que es.
BOCETO: dos contadores: «global · 33,363» (grande, rojo) y «por familia» (pequeño, gris). Cartel: «el veredicto usa el global». kb=out.

**[5:10 — El mismo filtro en otros experimentos]** (pantalla: tabla)
El mismo filtro aplicado a las pruebas de TikTok da cifras todavía más bajas. Las 8 formas de EMAs del experimento 83: máximo 0.002. Las 12 de multitemporalidad, 0.01. Las 6 de ruptura del rango, 0.00. Las 10 de vela grande, 0.001. Las 8 de barrida, 0.00. Y las 32 formas del ORB del Nasdaq, 0.00, con un contador de 32 por ser otro mercado.
| Experimento | Formas | Deflated Sharpe máximo (se exige 0.95) |
|---|---|---|
| #81 Laboratorio | 33,363 | 0.31 |
| #83 EMAs | 8 | 0.002 |
| #84 Multitemporalidad | 12 | 0.01 |
| #85 Ruptura del rango | 6 | 0.00 |
| #86 Vela grande | 10 | 0.001 |
| #88 ORB del Nasdaq (N = 32) | 32 | 0.00 |
| #89 Barrida | 8 | 0.00 |
BOCETO: barras horizontales diminutas contra la línea de 0.95; la de #81 es la más larga (0.31), el resto casi invisibles. Cartel gris: «#88 usa N = 32 por ser el Nasdaq intradía».

**[6:10 — Con tu capital]** (pantalla: tarjeta vacía)
La tarjeta «Con tu capital» de este experimento está vacía a propósito. Se midió cuántas estrategias superan cada filtro, no una cartera, y ninguna de las 33,363 llegó a ser apta para operar.
BOCETO: tarjeta de capital con el texto de `capital.note` y un «—» grande.

**[6:30 — Conclusión]**
El Deflated Sharpe es el filtro que castiga haber probado mucho. Si alguien te enseña su mejor estrategia sin decirte cuántas probó, te enseña la mejor racha de una moneda. Aquí el máximo fue 0.31, lejos de 0.95. El trading no se promete: se prueba.

**[7:00 — Ficha del experimento #81]** (pantalla: tarjeta con la ficha y la URL)
Ficha del experimento #81. Estado: murió. Cifra clave: de 33,363 estrategias probadas, sobrevivieron 0. Filtro que decidió: el Deflated Sharpe, con un máximo de 0.31 cuando se exige 0.95. Lección: antes de creer en una estrategia, pregunta cuántas se probaron. Revísalo completo en atlas-lab-one.vercel.app/e/81.
BOCETO: tarjeta con el número «#81», el sello «MURIÓ» en rojo, tres líneas (cifra clave, filtro que decidió, lección) y la URL `atlas-lab-one.vercel.app/e/81` grande abajo. kb=in.

**[7:20 — Cierre]**
Todos los datos en atlas-lab-one.vercel.app, experimento 81. Contenido educativo, no es asesoría financiera.

---

## SHORT (9:16, ≈ 50 s)

**[0-3 s]** «El mejor Deflated Sharpe de 33,363 estrategias: 0.31. Hacía falta 0.95.»
BOCETO: barra roja que se detiene en 0.31 frente a la línea de 0.95, sobre b-roll de servidores (kb=in), overlay 0.6.

**[3-15 s]** «Con 33,363 intentos, la suerte sola puede darte un Sharpe de cerca de 1.11 al año.»
BOCETO: banda roja «techo de suerte ≈ 1.11» sobre el eje de Sharpe (kb=out); ticker arriba.

**[15-30 s]** «El Deflated Sharpe descuenta ese techo. Es como mirar solo la mejor racha de caras, entre miles de personas que lanzaron una moneda.»
BOCETO: cuadrícula de monedas con una fila de caras resaltada; tick al resaltar.

**[30-43 s]** «Cinco estrategias pasaron los otros cuatro filtros. Todas cayeron aquí.»
BOCETO: cinco puntos verdes que cruzan cuatro puertas y chocan con la quinta; golpe de bajo + sacudida.

**[43-50 s]** «El video completo está en el canal, y el experimento #81 completo, en el enlace. Cero punto treinta y uno contra cero punto noventa y cinco: el filtro que nadie pasó.»
BOCETO: texto final «Video completo en el canal · Experimento #81 completo en el enlace» + pequeño «No es asesoría financiera · El trading no se promete: se prueba». Loop: «0.31 contra 0.95» repite el hook.

---

## Descripción de YouTube (video largo)
https://atlas-lab-one.vercel.app/e/81?utm_source=youtube&utm_medium=video&utm_campaign=exp081-t2
Ficha del experimento #81: murió · 33,363 estrategias probadas, 0 sobrevivieron · Deflated Sharpe máximo 0.31 de 0.95 exigido · máximo de filtros superados: 4/5.
Explico qué descuenta el Deflated Sharpe: con 33,363 intentos, la suerte sola puede dar un Sharpe de cerca de 1.11 al año. Incluye el mismo filtro aplicado a los experimentos 83 al 89.
Contenido educativo. No es asesoría financiera ni recomendación de inversión.

## Descripción de YouTube (Short)
https://atlas-lab-one.vercel.app/e/81?utm_source=youtube&utm_medium=short&utm_campaign=exp081-t2
Ficha del experimento #81: murió · 0 de 33,363 sobrevivieron · Deflated Sharpe máximo 0.31 de 0.95.
Contenido educativo. No es asesoría financiera.

## Capítulos
0:00 Gancho · 0:15 Qué es este experimento · 0:25 El Sharpe en una frase · 1:10 La mejor de muchas · 2:10 Qué hace el Deflated Sharpe · 3:20 Lo que pasó · 4:20 El contador de intentos · 5:10 En otros experimentos · 6:10 Con tu capital · 6:30 Conclusión · 7:00 Ficha del experimento

## Etiquetas
deflated sharpe, sharpe ratio, pruebas múltiples, sobreajuste, backtest, lópez de prado, 33363 estrategias, suerte o habilidad, fuera de muestra, minería de estrategias, atlas lab, trading con datos

## Rúbrica (autoevaluación, 1–5)
| Pieza | hook_0_3s | ritmo | promesa_cumplida | potencial_loop | claridad_no_traders | honestidad_atlas | audio | cta | Promedio |
|---|---|---|---|---|---|---|---|---|---|
| Largo | 5 | 4 | 5 | 4 | 4 | 5 | 4 | 4 | 4.4 |
| Short | 5 | 4 | 5 | 5 | 4 | 5 | 4 | 4 | 4.5 |

Hook ≥ 4 ✓ · honestidad 5 ✓. Punto débil: es el concepto más técnico del programa; la imagen de la moneda está rotulada «ilustración» y no lleva números. La lectura de 0.31 como «explicado por haber probado tanto» es una explicación del filtro, no una afirmación de que cada estrategia sea suerte.

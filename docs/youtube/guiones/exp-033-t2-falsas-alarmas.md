# Experimento #33 — Activación temprana del filtro · Tema 2: el filtro más sensible murió primero

Tema 2 de 4 del experimento #033 · Qué aporta frente a los otros temas: explica el concepto de falsa alarma y por qué «cuanto antes mejor» no vale para salir del mercado, con la tabla de las seis combinaciones y sus fechas de muerte. El tema 1 cuenta el experimento completo; el tema 3, el margen de 89,358 contra 90,000 y la sensibilidad a φ; el tema 4, los dos periodos (6 de 6 contra 0 de 6). Se entiende sin haber visto los otros temas.
Estado del guion: **BORRADOR — pendiente de aprobación**
Estado del experimento: **MURIÓ** (0 de 6 combinaciones sobreviven 2014–2024 con ×2; la base se corta el 11-nov-2016) · Serie G — Construyendo un bot (y por qué murió)
Datos usados: `experiments.json` (v=33: analysis, notes, metrics, kpis, params_view, verdict, capital), `exp_details.json` (clave `…-v33`: algo, code.snippet, filters con las fechas y Sharpe de las 6 combinaciones), tabla «Con tu capital» (archivo de capital en `docs/youtube/`).
Producción (CLAUDE.md del canal): b-roll real detrás de cada escena con overlay oscuro 0.6, Ken Burns alternando in/out, subtítulos karaoke en MAYÚSCULAS con cifras en rojo, un dato visual por escena, golpe de bajo + sacudida solo en 1–2 momentos. Colores: rojo `#e11d2a`, verde `#22c55e`, fondo `#09090b`.

## Títulos (3 opciones)
1. El filtro de pánico más sensible murió primero: 25 de julio de 2016
2. Más sensible no es mejor: seis filtros de pánico, seis cuentas muertas
3. El punto óptimo de salir: por qué «cuanto antes mejor» es falso

## Miniatura (pensada para el título 1)
Fondo `#09090b`. Seis alarmas en fila, de la más sensible (a la izquierda) a la menos; la primera, en rojo `#e11d2a`, con una ✕ y la fecha «25 JUL 2016». Texto en Segoe UI Black: «PRIMERA EN CAER» (tres palabras, sin repetir los títulos). Logo ATLAS abajo a la derecha.

---

## VIDEO LARGO (16:9, ≈ 4:36 min)

**[0:00 — Gancho]** (pantalla: seis alarmas y sus fechas)
El filtro de pánico más sensible fue el primero en morir: el 25 de julio de 2016. Las otras cinco cuentas murieron entre el 9 y el 11 de noviembre. Seis versiones, cero supervivientes.
BOCETO: seis alarmas; la primera se apaga con ✕ y la fecha «25-jul-2016»; las otras cinco caen juntas con «9–11 nov». Golpe de bajo en la primera. kb=in.

**[0:16 — Qué es este experimento]** (pantalla: rótulo con el número y el nombre)
Este es el experimento #33 de ATLAS Lab: Activación temprana del filtro. Todos los resultados están en la página del experimento. Aquí explico por qué disparar antes puede salir peor.
BOCETO: rótulo «EXPERIMENTO #33 · Activación temprana del filtro» sobre velas con opacidad 0.12. kb=out.

**[0:29 — Las dos perillas]** (pantalla: dos perillas)
El bot compra una cesta de activos y tiene un filtro de pánico con dos perillas. La primera, el umbral del VIX, el índice del miedo de Wall Street: con 28 el bot se retira ante un miedo alto; con 22 se retira antes, porque ese nivel se cruza más a menudo. La segunda, la media del crédito, compara los bonos de empresas arriesgadas con los más seguros: si caen bajo su promedio de 40 o de 60 días, el bot también se retira. La de 40 días reacciona más rápido.
BOCETO: dos perillas animadas: VIX con marcas 22 · 24 · 28 y crédito con 40 y 60 días; una línea del VIX cruza cada umbral en momentos distintos.

**[1:09 — La hipótesis]** (pantalla: alarma tardía contra temprana)
La hipótesis tiene lógica: si la alarma suena antes, el día de salida es más pequeño y duele menos. Es sentido común: salir pronto. Y el sentido común es justo lo que hay que probar con datos.
BOCETO: dos gráficos de un mismo desplome: arriba alarma tardía, abajo alarma temprana con «¿duele menos?». kb=in.

**[1:24 — Las seis cuentas]** (pantalla: tabla animada)
Se probaron las seis combinaciones con apalancamiento ×2, en 2014 a 2024. La más sensible, VIX 22 con crédito de 40 días, muere el 25 de julio de 2016, con un Sharpe de menos 0.76. VIX 22 con 60 días, 24 con 40 y 24 con 60 mueren el 9 de noviembre. Las dos de VIX 28 mueren el 11 de noviembre, incluida la base, con 40 días. El Sharpe es la ganancia por unidad de riesgo: negativo, el bot pierde.
| VIX / media del crédito | Muere (2014–2024) | Sharpe |
|---|---|---|
| 22 / 40 días | 25-jul-2016 | −0.76 |
| 22 / 60 días | 9-nov-2016 | −0.64 |
| 24 / 40 días | 9-nov-2016 | −0.71 |
| 24 / 60 días | 9-nov-2016 | −0.66 |
| 28 / 40 días (base) | 11-nov-2016 | −0.58 |
| 28 / 60 días | 11-nov-2016 | −0.53 |
BOCETO: tabla que se llena fila por fila con una ✕ roja en cada una; una línea de tiempo con las seis fechas; la del 25-jul-2016 resaltada.

**[2:06 — Qué es una falsa alarma]** (pantalla: señales repetidas)
¿Por qué la más sensible cae primero? Por las falsas alarmas. Un filtro sensible dispara también cuando no pasa nada grave: el bot sale, vuelve a entrar y sale otra vez, y paga el vaivén. Cada salida y entrada cuesta, y las caídas pequeñas se acumulan. Ahí está la razón por la que la versión más sensible muere antes que la base.
BOCETO: gráfico de precio con varias señales de entrada y salida; las salidas sin caída posterior, marcadas «falsa alarma» en rojo.

**[2:32 — Cuánto esquiva en realidad]** (pantalla: φ de cada combinación)
Además, bajar el umbral no hizo que el bot esquivara mucho más. El φ medido, la fracción del movimiento del día de disparo que el bot se come, va de 0.90 a 0.96 en las seis combinaciones, y es 0.94 en la base. Con 205 días de disparo en la base. Ninguna se acerca al 0.5 que haría falta para esquivar la mitad del día.
BOCETO: medidor de φ con un rango sombreado de 0.90 a 0.96, la base en 0.94 y una marca lejana en 0.5 «no respaldado».

**[3:01 — Un punto óptimo]** (pantalla: curva con un máximo)
La lección: el momento de salir tiene un punto óptimo, no es «cuanto antes mejor». Si sales demasiado tarde, te comes la caída; si sales demasiado pronto, te comes las falsas alarmas. Los dos extremos cuestan.
BOCETO: curva en U invertida: eje «sensibilidad del filtro»; extremos «caída» y «falsas alarmas»; marca «punto óptimo».

**[3:15 — Qué no concluye este experimento]** (pantalla: dos columnas)
Conviene acotar la conclusión. No dice que un filtro nunca deba disparar temprano. Dice que, con estas dos perillas y este bot, ninguna de las seis versiones aguanta con ×2 en 2014–2024. Otras reglas, otros activos u otro apalancamiento serían otra prueba. Con ×1.5, la base sobrevive, pero con un Sharpe de 0.05 en 2014–2024 y 0.14 en 2007–2013.
BOCETO: dos columnas: «lo que sí se probó» y «lo que no» (casillas vacías); recuadro «×1.5: 0.05 / 0.14».

**[3:43 — Con tu capital]** (pantalla: tarjeta de capital $100,000)
Con 100,000 dólares simulados, la cuenta de la base se cierra con menos 10,642. Comprar y esperar la misma cesta, en las mismas fechas, 2014 a 2016: menos 5,766. Con tu capital verías esa cuenta cerrada.
BOCETO: tarjeta «Con tu capital» del sitio: −$10,642 contra −$5,766, rotulada «2014–2016, hasta que se cierra la cuenta».

**[4:01 — Ficha del experimento #33]** (pantalla: tarjeta con la URL)
Ficha del experimento #33, Activación temprana del filtro. Estado: murió. Cifra clave: 0 de 6 combinaciones sobreviven en 2014–2024; la más sensible muere el 25 de julio de 2016. Filtros que decidieron: ninguna sobrevive con ×2 y no bate a comprar y esperar. Lección: salir tiene un punto óptimo, y las falsas alarmas cuestan tanto como las tardías. Revísalo completo en atlas-lab-one.vercel.app/e/33. Contenido educativo, no es asesoría financiera. El trading no se promete: se prueba.
BOCETO: tarjeta final con cuatro líneas (estado · cifra clave · filtro que decidió · lección) y la URL «atlas-lab-one.vercel.app/e/33» en grande; logo ATLAS; fondo de velas con opacidad 0.12.

---

## SHORT (9:16, ≈ 47 s)

**[0-3 s]** «El filtro más sensible murió primero.»
BOCETO: seis alarmas; la primera se apaga con ✕ y «25 JUL 2016»; golpe de bajo + sacudida.
**[3-11 s]** «Probé seis filtros de pánico, del VIX 22 al 28. Más sensibles, para salir antes del crash.»
BOCETO: seis alarmas ordenadas de más a menos sensible. kb=out.
**[11-19 s]** «Las seis murieron: la más sensible, el 25 de julio de 2016; las otras, en noviembre.»
BOCETO: línea de tiempo con seis ✕ en sus fechas.
**[19-27 s]** «Por las falsas alarmas: el bot sale, vuelve y sale otra vez, pagando el vaivén.»
BOCETO: precio con salidas repetidas marcadas «falsa alarma».
**[27-35 s]** «Salir tiene un punto óptimo. Cuanto antes no es mejor.»
BOCETO: curva en U invertida con la marca «punto óptimo».
**[35-43 s]** «Experimento 33 completo en el enlace. El video completo está en el canal. No es asesoría financiera. El trading no se promete: se prueba.»
BOCETO: tarjeta con «experimento #33 completo en el enlace» y la URL corta; logo ATLAS.
**[43-47 s]** «¿Salir antes? Mira quién murió primero.»
BOCETO: la alarma de «25 JUL 2016» del inicio; corte directo al inicio (loop).

---

## Descripción de YouTube (video largo)
https://atlas-lab-one.vercel.app/e/33?utm_source=youtube&utm_medium=video&utm_campaign=exp033-t2
Ficha del experimento #33 (Activación temprana del filtro): murió · 0 de 6 combinaciones sobreviven en 2014–2024 con ×2 · la más sensible (VIX 22 / crédito 40) muere el 25-jul-2016 (Sharpe −0.76); las demás, entre el 9 y el 11-nov-2016.
Qué es una falsa alarma y por qué salir antes no es salir mejor.
Contenido educativo. No es asesoría financiera ni recomendación de inversión.

## Descripción del Short
https://atlas-lab-one.vercel.app/e/33?utm_source=youtube&utm_medium=short&utm_campaign=exp033-t2
Ficha del experimento #33: murió · 0 de 6 filtros sobreviven; el más sensible muere el 25-jul-2016. Video completo en el canal. Contenido educativo, no es asesoría financiera.

## Capítulos
0:00 Gancho · 0:16 Qué es este experimento · 0:29 Las dos perillas · 1:09 La hipótesis · 1:24 Las seis cuentas · 2:06 Qué es una falsa alarma · 2:32 Cuánto esquiva en realidad · 3:01 Un punto óptimo · 3:15 Qué no concluye este experimento · 3:43 Con tu capital · 4:01 Ficha del experimento #33

## Etiquetas
falsas alarmas, filtro de pánico, VIX, crédito, bot de trading, backtest, Sharpe ratio, prop firm, gestión de riesgo, apalancamiento, trading con datos, atlas lab

## Rúbrica (autoevaluación, 1–5)
| Pieza | hook_0_3s | ritmo | promesa_cumplida | potencial_loop | claridad_no_traders | honestidad_atlas | audio | cta | Promedio |
|---|---|---|---|---|---|---|---|---|---|
| Largo | 4 | 4 | 5 | 4 | 4 | 5 | 4 | 4 | 4.25 |
| Short | 4 | 4 | 5 | 5 | 4 | 5 | 4 | 4 | 4.38 |

Hook ≥ 4 ✓ · honestidad 5 ✓. Punto débil: la explicación de las falsas alarmas es la del análisis del experimento, no una medición de cuántas hubo por combinación; el video no inventa ese conteo.

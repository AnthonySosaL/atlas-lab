# Experimento #31 — Filtro reactivo intradía · Tema 2: el plan B, una regla de precio

Tema 2 de 4 del experimento #031 · Qué aporta frente a los otros temas: explica a fondo la alternativa que probó el #31 cuando el VIX no basta —salir si la cesta cae de 0.5 a 2 desviaciones durante el día— y el intercambio entre esquivar más y salir en falso. El tema 1 cuenta el bot, φ y los resultados; el tema 3, cómo se mide φ; el tema 4, el margen entre ×1.5 y ×2. Se entiende sin haber visto los otros temas.
Estado del guion: **BORRADOR — pendiente de aprobación**
Estado del experimento: **PARCIAL** (con ×1.5 sobrevive, pero con Sharpe 0.09 y 0.11, muy bajo el 0.30 que pide el laboratorio) · Serie G — Construyendo un bot (y por qué murió)
Datos usados: `experiments.json` (v=31: analysis, notes, metrics, kpis, params_view, verdict, capital), `exp_details.json` (clave `…-v31`: algo, filters), `series/20260610_140602_filtro-reactivo-intradia-v31.json`, tabla «Con tu capital» (archivo de capital en `docs/youtube/`).
Nota de datos: los rangos del plan B (φ 0.46–0.94; 4–39% de días sin disparo; Sharpe −0.77 a −0.01) se publican sin separar umbral por umbral; el video los presenta como rangos.
Producción (CLAUDE.md del canal): b-roll real detrás de cada escena con overlay oscuro 0.6, Ken Burns alternando in/out, subtítulos karaoke en MAYÚSCULAS con cifras en rojo, un dato visual por escena, golpe de bajo + sacudida solo en 1–2 momentos. Colores: rojo `#e11d2a`, verde `#22c55e`, fondo `#09090b`.

## Títulos (3 opciones)
1. Una regla de precio que sale del mercado hasta en 39% de los días sin motivo
2. Plan B contra el crash: φ de 0.46 a 0.94 y Sharpe de −0.77 a −0.01
3. Salir si la cesta cae de 0.5 a 2 desviaciones: lo que cuesta cada falsa alarma

## Miniatura (pensada para el título 1)
Fondo `#09090b`. Un calendario con muchas casillas; en 39% de ellas, una puerta de salida roja `#e11d2a` abierta aunque el día sea verde. Texto en Segoe UI Black: «39% EN FALSO» (dos palabras más el porcentaje, sin repetir los títulos). Logo ATLAS abajo a la derecha.

---

## VIDEO LARGO (16:9, ≈ 4:19 min)

**[0:00 — Gancho]** (pantalla: calendario con salidas falsas)
Probé una salida que no depende del VIX: salir cuando el precio cae. Esquiva más del crash, pero sale del mercado hasta en el 39% de los días en los que no había ninguna alarma.
BOCETO: calendario donde una fracción de los días verdes tiene una puerta de salida roja abierta; contador «hasta 39%». Golpe de bajo al aparecer el contador. kb=in.

**[0:15 — Qué es este experimento]** (pantalla: rótulo con el número y el nombre)
Este es el experimento #31 de ATLAS Lab: Filtro reactivo intradía. Todos los resultados están en la página del experimento. Aquí cuento el plan B que se probó dentro de ese experimento, para saber si salir por precio es mejor que salir por el VIX.
BOCETO: rótulo «EXPERIMENTO #31 · Filtro reactivo intradía» sobre velas con opacidad 0.12. kb=out.

**[0:34 — El problema de partida]** (pantalla: día de disparo)
El bot tiene un filtro de pánico que decide con el cierre de ayer. Pero el día en que la alarma suena, el bot ya está dentro y se come parte de la caída. Esa parte se llama φ, la letra griega fi: la fracción del movimiento del día de disparo que el bot se come. Si φ es 1, no esquivó nada; si es 0.5, esquivó la mitad. Medido con el VIX en vivo, φ vale 0.90: esquiva solo cerca del 10%.
BOCETO: vela roja grande; medidor de φ de 0 a 1 con la aguja en 0.90; texto «φ = parte del día que el bot se come».

**[1:10 — La idea del plan B]** (pantalla: una regla de precio)
El plan B no mira el VIX ni el crédito: mira el precio. La regla dice: si la cesta cae entre 0.5 y 2 desviaciones durante el día, sal. Una desviación es una medida de lo que suele moverse el precio; salir a 0.5 desviaciones es muy sensible, y a 2, mucho menos. Al no depender de datos que llegan tarde, debería reaccionar a tiempo.
BOCETO: línea de precio del día con dos niveles horizontales (−0.5 y −2 desviaciones); flecha de salida cuando el precio los cruza. kb=in.

**[1:38 — Lo que mejora]** (pantalla: φ de 0.46 a 0.94)
Y sí mejora la salida. Según el umbral, φ va de 0.46 a 0.94. Los valores bajos significan que se come menos del día de pánico; el más bajo, 0.46, queda cerca de la cota teórica de 0.44 en 2014–2024, que ningún bot alcanza porque exigiría salir al abrir sabiendo cómo cerrará el día. Aquí la regla, por definición, reacciona a lo que ya cayó, no a lo que va a pasar.
BOCETO: medidor de φ con un rango sombreado de 0.46 a 0.94; la línea punteada de la cota 0.44; la aguja de referencia 0.90 del VIX.

**[2:10 — El precio: las falsas alarmas]** (pantalla: barra de porcentaje)
Pero hay un precio. La regla también sale en días en que no había ningún disparo del filtro: entre el 4% y el 39% de esos días, según el umbral. Es una falsa alarma: el bot sale, y quizá vuelve a entrar, sin que pasara nada grave. Y cada operación cuesta 3 puntos básicos, el costo que usa el laboratorio.
BOCETO: barra de proporción con un tramo del 4% a 39% en rojo; recuadro «3 pb por operación».

**[2:36 — El efecto en el Sharpe]** (pantalla: barras negativas)
Resultado: con esos costos, el Sharpe, la ganancia por unidad de riesgo, queda negativo: de menos 0.77 a menos 0.01, según el umbral. Compáralo con el 0.09 que da la cartera ×1.5 del experimento con salida por VIX. La regla de precio esquiva más, pero paga todo lo que gana en operaciones de más.
BOCETO: barras rojas desde −0.77 hasta −0.01 con un tramo sombreado; al lado, la barra verde pequeña «0.09».

**[3:00 — Un intercambio, no una solución]** (pantalla: balanza)
Los datos publicados dan los rangos, sin separar umbral por umbral. Pero los extremos sugieren un intercambio: cuanto más sensible la regla, más esquiva y más falsas salidas. El experimento no recomienda esta regla. Muestra algo útil: reaccionar rápido no es lo mismo que reaccionar a tiempo.
BOCETO: balanza con «esquiva más» en un plato y «falsas salidas y costos» en el otro; rótulo «reaccionar rápido ≠ reaccionar a tiempo».

**[3:19 — Con tu capital]** (pantalla: tarjeta de capital $100,000)
El plan B no tiene curva propia. La cartera del experimento, con ×1.5 y la salida por VIX, termina en más 4,155 dólares con 100,000 simulados entre 2014 y 2024. Comprar y esperar la misma cesta: más 58,879. Es una simulación histórica, no una promesa.
BOCETO: tarjeta «Con tu capital» del sitio: +$4,155 (gris) contra +$58,879 (verde); pie «simulación histórica 2014–2024».

**[3:41 — Ficha del experimento #31]** (pantalla: tarjeta con la URL)
Ficha del experimento #31, Filtro reactivo intradía. Estado: parcial. Cifra clave: φ medido de 0.90 y, con ×1.5, un Sharpe de 0.09 y 0.11; el plan B de precio da de menos 0.77 a menos 0.01. Filtros que decidieron: Sharpe de 0.09 contra el 0.30 que pide el laboratorio, y no bate a comprar y esperar. Lección: reaccionar rápido no es reaccionar a tiempo. Revísalo completo en atlas-lab-one.vercel.app/e/31. Contenido educativo, no es asesoría financiera. El trading no se promete: se prueba.
BOCETO: tarjeta final con cuatro líneas (estado · cifra clave · filtro que decidió · lección) y la URL «atlas-lab-one.vercel.app/e/31» en grande; logo ATLAS; fondo de velas con opacidad 0.12.

---

## SHORT (9:16, ≈ 47 s)

**[0-3 s]** «Salir si cae el precio: hasta 39% en falso.»
BOCETO: calendario con puertas rojas en días verdes; «39%» gigante; golpe de bajo + sacudida.
**[3-11 s]** «El bot sale cuando suena la alarma, pero llega tarde. Plan B: salir si la cesta cae de 0.5 a 2 desviaciones.»
BOCETO: línea de precio con dos niveles y flecha de salida. kb=out.
**[11-19 s]** «Funciona a medias: esquiva más. El fi va de 0.46 a 0.94, contra 0.90 del VIX.»
BOCETO: medidor de φ con el rango sombreado de 0.46 a 0.94.
**[19-27 s]** «Pero sale entre 4% y 39% de los días sin alarma. Y con 3 puntos básicos por operación, el Sharpe es negativo.»
BOCETO: barra con tramo rojo de 4% a 39%; barras negativas de −0.77 a −0.01.
**[27-35 s]** «Reaccionar rápido no es reaccionar a tiempo. Salir sin motivo también cuesta.»
BOCETO: balanza «esquiva más / falsas salidas».
**[35-43 s]** «Experimento 31 completo en el enlace. El video completo está en el canal. No es asesoría financiera. El trading no se promete: se prueba.»
BOCETO: tarjeta con «experimento #31 completo en el enlace» y la URL corta; logo ATLAS.
**[43-47 s]** «Mi bot salía a tiempo… ¿o en falso?»
BOCETO: el calendario del inicio con interrogación; corte directo al inicio (loop).

---

## Descripción de YouTube (video largo)
https://atlas-lab-one.vercel.app/e/31?utm_source=youtube&utm_medium=video&utm_campaign=exp031-t2
Ficha del experimento #31 (Filtro reactivo intradía): parcial · con ×1.5 sobrevive, con Sharpe 0.09 y 0.11 (+4.2% en 2014–2024) · φ medido 0.90 · plan B de precio: Sharpe de −0.77 a −0.01 con 3 pb de costo.
La regla «salir si la cesta cae de 0.5 a 2 desviaciones» logra φ de 0.46 a 0.94 pero sale en 4–39% de los días sin disparo.
Contenido educativo. No es asesoría financiera ni recomendación de inversión.

## Descripción del Short
https://atlas-lab-one.vercel.app/e/31?utm_source=youtube&utm_medium=short&utm_campaign=exp031-t2
Ficha del experimento #31: parcial · el plan B de precio sale hasta en el 39% de los días sin alarma. Video completo en el canal. Contenido educativo, no es asesoría financiera.

## Capítulos
0:00 Gancho · 0:15 Qué es este experimento · 0:34 El problema de partida · 1:10 La idea del plan B · 1:38 Lo que mejora · 2:10 El precio: las falsas alarmas · 2:36 El efecto en el Sharpe · 3:00 Un intercambio, no una solución · 3:19 Con tu capital · 3:41 Ficha del experimento #31

## Etiquetas
falsas alarmas, stop de precio, desviación estándar, VIX, bot de trading, backtest, Sharpe ratio, costos de transacción, gestión de riesgo, trading con datos, atlas lab, trading algorítmico

## Rúbrica (autoevaluación, 1–5)
| Pieza | hook_0_3s | ritmo | promesa_cumplida | potencial_loop | claridad_no_traders | honestidad_atlas | audio | cta | Promedio |
|---|---|---|---|---|---|---|---|---|---|
| Largo | 5 | 4 | 5 | 4 | 4 | 5 | 4 | 4 | 4.38 |
| Short | 5 | 4 | 5 | 4 | 4 | 5 | 4 | 4 | 4.38 |

Hook ≥ 4 ✓ · honestidad 5 ✓. Punto débil: los rangos del plan B no se separan por umbral en los datos; el video habla de «los extremos sugieren» y no asigna cada cifra a un umbral concreto.

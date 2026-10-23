# Experimento #67 — Adelanto-retraso entre activos (petróleo→CAD, oro→AUD) · Tema 2 de 3: oro y dólar australiano

Estado del guion: **BORRADOR — pendiente de aprobación**
Tema 2 de 3 del experimento #67 · Qué aporta frente a los otros temas: es el tema del segundo PAR y del CONCEPTO de signo. Explica la relación de moda entre el oro y el dólar australiano (correlación −0.005, Sharpe bruto −0.11), cómo se lee una cotización de divisas y por qué el signo es +1 para el oro y −1 para el petróleo. El tema 1 abre con el petróleo y el panorama de los dos pares; el tema 3 trata del dinero y del arbitraje.
Estado del experimento: **murió** (correlaciones rezagadas casi cero; Sharpe bruto −0.00 y −0.11)
Serie: F, por tema (anomalías entre activos; el plan aún no lista #65–#67)
Datos usados: `experiments.json` (v=67: verdict, analysis, notes, kpis, metrics, params_view, capital) · `exp_details.json` (extra-v67: algo, code.snippet, filters) · `series/extra-v67.json` ([0] petróleo→USD/CAD, bruto; [1] USD/CAD comprar y esperar; el par oro→AUD no tiene curva) · tabla «Con tu capital» (`docs/youtube/*-capital.md`, fila #67; el $10k se calcula con la misma regla de la tarjeta del sitio).

## Títulos
1. Oro → dólar australiano: correlación −0.005 y Sharpe −0.11 (2012–2024)
2. ¿El dólar australiano sigue al oro? Lo medí con 12 años de datos
3. Signo +1 y signo −1: cómo se prueba una relación de moda entre dos activos

## Miniatura
Fondo `#09090b`. A la izquierda, un lingote de oro; a la derecha, un canguro estilizado en blanco; entre ambos, una flecha con un «0» rojo `#e11d2a`. Texto grande: «−0.005». Logo ATLAS esquina inferior derecha.

---

## VIDEO LARGO (≈ 4½ min, experimento corto)

**[0:00 — Gancho]** (pantalla: oro sube un día y el dólar australiano no se mueve; el número «−0.005»)
El oro de ayer no predice al dólar australiano de hoy: una correlación de −0.005 y un Sharpe de −0.11.
> BOCETO: línea del oro que sube un día; reloj que avanza; línea del AUD/USD plana; aparece «−0.005» en rojo; golpe de bajo y sacudida.

**[0:15 — Este experimento]** (pantalla: rótulo «Experimento #67 · Adelanto-retraso entre activos (petróleo→CAD, oro→AUD)»)
Este es el experimento #67 de ATLAS Lab: adelanto-retraso entre activos, con dos pares: petróleo con el dólar canadiense y oro con el dólar australiano. Todos los resultados están en la página del experimento. Hoy me quedo con el segundo par.
> BOCETO: rótulo con «#67» y el nombre del experimento; logo ATLAS; whoosh suave.

**[0:35 — La relación de moda]** (pantalla: oro y dólar australiano unidos por una cuerda)
Se suele decir que el dólar australiano acompaña al oro: cuando el oro sube, la moneda australiana también. Si además el oro se adelantara un día, tendrías una pista de lo que hará la moneda mañana. Eso se llama relación de adelanto-retraso, o lead-lag: un activo líder y otro seguidor.
> BOCETO: corredores: el oro (líder) sale primero y el AUD/USD (seguidor) un paso después; reloj de 1 día. Texto «líder → seguidor · 1 día».

**[1:10 — Cómo leer una cotización y por qué el signo]** (pantalla: dos cotizaciones con flechas)
Un detalle de las divisas. El AUD/USD dice cuántos dólares estadounidenses cuesta un dólar australiano: si sube, el dólar australiano se fortalece. Por eso, si el oro sube, el signo esperado para el AUD/USD es el mismo: más uno. En el otro par, el USD/CAD dice cuántos dólares canadienses cuesta un dólar estadounidense: si sube, el canadiense se debilita. Por eso para el petróleo el signo es el contrario: menos uno.
> BOCETO: dos tarjetas: «AUD/USD sube = AUD más fuerte → signo +1 con el oro» y «USD/CAD sube = CAD más débil → signo −1 con el petróleo». Recuadro `params_view` con las dos filas.

**[1:50 — Qué medí]** (pantalla: escala de correlación y checklist de filtros)
Hice dos cosas. Primero, la correlación entre el retorno de ayer del oro y el de hoy del AUD/USD. La correlación va de −1 a 1: 1 significa que se mueven igual, 0 que no hay relación, −1 que se mueven al revés. Segundo, operé el signo del oro de ayer sobre el AUD/USD de hoy y calculé el Sharpe, que mide la ganancia por unidad de riesgo. Mi referencia en el laboratorio es 0.13, que es lo que da comprar y esperar en 2014–2020. Todo bruto, de 2012 a 2024.
> BOCETO: escala con −1 «se mueven al revés», 0 «no hay relación», 1 «se mueven igual»; checklist ✗ «correlación casi cero» · ✗ «Sharpe por debajo de 0.13» · ✓ «líder rezagado 1 día» · — «costos: no aplicado (bruto)».

**[2:35 — Resultado]** (pantalla: tarjeta con la correlación y el Sharpe)
Oro con dólar australiano: correlación de −0.005 y Sharpe de −0.11. La aguja de la correlación está pegada al cero, y el Sharpe queda por debajo de cero y muy lejos de la referencia de 0.13.
| Par | Correlación rezagada 1 día | Sharpe bruto |
|---|---|---|
| Oro → AUD | −0.005 | −0.11 |
| Petróleo → CAD | 0.007 | −0.00 |
> BOCETO: la aguja de la correlación apenas se separa del cero; el Sharpe −0.11 en rojo con la línea verde punteada de 0.13; el segundo par en gris, como referencia.

**[3:10 — Qué significa −0.005]** (pantalla: aguja pegada al cero)
Si el dato de ayer del oro contuviera información útil sobre el dólar australiano de hoy, la correlación se alejaría del cero. No lo hace. −0.005 es tan pequeña que no se distingue del ruido. Y como cada intento adicional de buscar una relación aumenta la posibilidad de encontrar algo por pura suerte, lo honesto es decir lo que se probó: dos pares y un día de rezago.
> BOCETO: aguja pegada al cero con un zoom; etiqueta «ruido» y tarjeta «2 pares · 1 día de rezago».

**[3:40 — Lo que no se midió]** (pantalla: dos columnas)
Esto no dice que no exista relación entre el oro y el dólar australiano el mismo día: eso no lo medí. Tampoco otros rezagos ni otros pares. Dice que, a un día de distancia, el oro no anticipa al AUD/USD de forma que se pueda operar.
> BOCETO: dos columnas: «sí: oro → AUD, 1 día de rezago, 2012–2024» y «no medido: el mismo día, otros rezagos, otros pares».

**[4:05 — Con tu capital]** (pantalla: tarjeta «Con tu capital»)
El sitio solo tiene curva para el otro par, petróleo con el dólar canadiense: con $10,000, −$384 contra +$3,673 de comprar y esperar el USD/CAD; con $100,000, −$3,844 contra +$36,726. Para el par oro y dólar australiano no hay curva, solo las cifras de arriba. Son brutas, sin costos.
> BOCETO: tarjeta de capital del par petróleo→USD/CAD con dos filas; nota ámbar: «El par oro→AUD no tiene curva. Bruto, sin costos».

**[4:30 — Conclusión]** (pantalla: la aguja pegada al cero)
Una relación de moda no es una ventaja. Aquí, a un día, la aguja está en cero.
> BOCETO: la escala de correlación con la aguja en el 0.

**[4:40 — Ficha del experimento #67 y cierre]** (pantalla: tarjeta con la ficha y la URL)
Ficha del experimento #67. Estado: murió. Cifra clave: correlación rezagada de −0.005 entre el oro y el AUD, con Sharpe bruto de −0.11. Filtro que decidió: el Sharpe bruto por debajo de la referencia de 0.13 y una correlación casi cero. Lección: no hay adelanto explotable a un día. Revísalo completo en atlas-lab-one.vercel.app/e/67. Contenido educativo, no es asesoría financiera. El trading no se promete: se prueba.
> BOCETO: tarjeta en pantalla con las 4 líneas de la ficha (estado rojo «murió») y la URL `atlas-lab-one.vercel.app/e/67` en grande; fundido a la frase de marca.

---

## SHORT (9:16, ≈ 44 s) — "Oro hoy, dólar australiano mañana"

**[0-3 s]** "Oro hoy, dólar australiano mañana: correlación de menos 0.005."
> BOCETO: B-roll vertical de lingotes de oro, kb=in, overlay 0.6; línea del oro subiendo y la del AUD/USD plana; «−0.005» gigante; golpe de bajo + sacudida. Karaoke con «MAÑANA» en rojo.

**[3-14 s]** "Se suele decir que el dólar australiano acompaña al oro. Probé si el retorno de ayer del oro predice al dólar australiano de hoy, de 2012 a 2024."
> BOCETO: corredores líder y seguidor con reloj de 1 día; whoosh. Ken Burns hacia dentro.

**[14-26 s]** "Una correlación de 1 es moverse juntos; 0, no tener relación. Oro y dólar australiano: menos 0.005. Operarlo da un Sharpe de −0.11, sin costos."
> BOCETO: escala −1, 0, 1 con la aguja casi en 0; Sharpe −0.11 en rojo con la referencia 0.13; tick.

**[26-37 s]** "Ojo: solo medí un día de rezago y dos pares. No dice que no haya relación el mismo día; dice que no hay un adelanto que puedas operar."
> BOCETO: texto «solo 1 día de rezago · solo 2 pares»; flash blanco al entrar.

**[37-44 s]** "Video completo en el canal y experimento 67 completo en el enlace. Oro hoy, dólar australiano mañana: ¿cuánta correlación hay? Casi cero."
> BOCETO: vuelve la aguja en 0 (loop); rótulo «Experimento #67 completo en el enlace»; texto pequeño «No es asesoría financiera · El trading no se promete: se prueba».

---

## Descripción (YouTube)
https://atlas-lab-one.vercel.app/e/67?utm_source=youtube&utm_medium=video&utm_campaign=exp067-t2
Ficha del experimento #67: murió · oro → AUD/USD (2012–2024): correlación rezagada de −0.005 y Sharpe bruto de −0.11 · no hay adelanto explotable a 1 día.
Qué es una relación de adelanto-retraso, cómo se lee una cotización de divisas y por qué el signo es +1 para el oro y −1 para el petróleo. Cifras brutas, sin costos.
Contenido educativo. No es asesoría financiera ni recomendación de inversión.
Descripción del Short (primera línea): https://atlas-lab-one.vercel.app/e/67?utm_source=youtube&utm_medium=short&utm_campaign=exp067-t2

Capítulos: 0:00 Gancho · 0:15 Este experimento · 0:35 La relación de moda · 1:10 Cómo leer una cotización y por qué el signo · 1:50 Qué medí · 2:35 Resultado · 3:10 Qué significa −0.005 · 3:40 Lo que no se midió · 4:05 Con tu capital · 4:30 Conclusión · 4:40 Ficha del experimento #67 y cierre

Etiquetas: lead-lag, oro, dólar australiano, AUD/USD, correlación rezagada, divisas y materias primas, forex, backtest, Sharpe ratio, trading con datos, ATLAS Lab, estrategias de trading

## Rúbrica (autoevaluación)
| Pieza | hook_0_3s | ritmo | promesa_cumplida | potencial_loop | claridad_no_traders | honestidad_atlas | audio | cta | Promedio |
|---|---|---|---|---|---|---|---|---|---|
| Largo | 4 | 4 | 5 | 4 | 5 | 5 | 4 | 4 | 4.38 |
| Short | 5 | 4 | 5 | 5 | 4 | 5 | 4 | 4 | 4.50 |

Hook ≥ 4 ✓ · honestidad 5 ✓. Punto débil: el par oro→AUD no tiene curva de capital; el video lo dice y usa la tarjeta del otro par solo como referencia.

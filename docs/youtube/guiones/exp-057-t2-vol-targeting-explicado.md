# Experimento #57 — Volatilidad objetivo vs. apalancamiento fijo (bot en vivo) · Tema 2 de 3: el apalancamiento que «respira»

Estado del guion: **BORRADOR — pendiente de aprobación**
Tema 2 de 3 del experimento #57 · Qué aporta frente a los otros temas: es el tema del MÉTODO y del CONCEPTO. Explica desde cero cómo funciona la volatilidad objetivo (k ÷ volatilidad) y cómo se arma una comparación justa a igual exposición media (2.0 contra 1.96). El tema 1 cuenta el resultado del bot; el tema 3 compara este experimento con el #52.
Estado del experimento: **parcial** (neutral): recorta el drawdown en las crisis, pero no mejora el retorno (Sharpe 0.10, +0.5% anual) · Serie: E ("Gestión de riesgo: lo poco que se sostuvo") · Relacionado: #52, #58, #50
Datos usados: `experiments.json` (v=57: verdict, analysis, notes, metrics, kpis, params_view, capital.note), `exp_details.json` (algo, code.snippet, filters), `series/20260613_200850_vol-targeting-vs-leverage-fijo-bot-live.json` (curva 0 = vol-targeting, 1 = x2 fijo, 2 = comprar y esperar la cesta 1x) y la tabla «Con tu capital» (`docs/youtube/*-capital.md`, fila #57).

## Títulos (3 opciones)
1. Mismo apalancamiento medio (2.0 y 1.96), distinta caída en 2022: −13.9% contra −10.9%
2. Volatilidad objetivo explicada: el apalancamiento que sube y baja solo
3. Cómo comparar dos bots de forma justa: igual exposición, tope de 3.0, ventana de 60 días

## Miniatura (1280×720)
Fondo `#09090b`. Dos medidores tipo velocímetro: el de la izquierda, gris, con la aguja clavada en «2.0»; el de la derecha, verde `#22c55e`, con la aguja oscilando alrededor de «1.96». Texto grande blanco: «MISMO PROMEDIO». Debajo, en rojo `#e11d2a`: «OTRA CAÍDA». Logo ATLAS arriba a la derecha.

---

## VIDEO LARGO (16:9, ≈ 6 min)

**[0:00 — Gancho]** (pantalla: dos medidores de apalancamiento, uno fijo en 2.0 y otro que oscila y promedia 1.96)
Dos bots con el mismo apalancamiento medio: 2.0 el primero, 1.96 el segundo. El primero mantiene el 2 siempre; el segundo lo sube y lo baja según el mercado. En 2022, el primero cayó −13.9% y el segundo, −10.9%.
> BOCETO: los dos medidores; el de la derecha oscila. Debajo, dos valles de drawdown de 2022 (ilustración con las cifras de la ficha): −13.9% (gris) y −10.9% (verde). Sacudida solo al aparecer los dos valles.

**[0:15 — Este experimento]** (pantalla: rótulo «Experimento #57 · Volatilidad objetivo vs. apalancamiento fijo (bot en vivo)»)
Este es el experimento #57 de ATLAS Lab: volatilidad objetivo contra apalancamiento fijo, en el bot en vivo. Todos los resultados están en la página del experimento. Hoy te explico cómo funciona ese segundo bot, paso a paso, y qué consigue y qué no.
> BOCETO: rótulo con el número «#57» y el nombre del experimento sobre fondo negro `#09090b`, logo ATLAS arriba a la derecha; whoosh suave.

**[0:30 — Dos palabras: apalancamiento y volatilidad]** (pantalla: una palanca y una línea de precio con oleaje)
Apalancamiento es cuántas veces tu exposición supera a tu dinero: con apalancamiento 2, las ganancias y las pérdidas se duplican. Volatilidad es cuánto se mueve el precio de algo: un activo muy volátil sube y baja mucho; uno tranquilo, poco. Juntas, dan la idea de hoy: si el mercado se agita, quizá conviene arriesgar menos.
> BOCETO: palanca con «x2» que duplica una barra verde y una roja; al lado, dos líneas de precio, una tranquila y una agitada. Ilustración rotulada, sin datos.

**[1:05 — La idea: conducir según la niebla]** (pantalla: carretera con niebla que se espesa y se despeja)
Piensa en conducir. Con niebla, bajas la velocidad; con la carretera despejada, aceleras. Aquí la volatilidad es la niebla y el apalancamiento es la velocidad. La regla es: apalancamiento igual a una constante dividida entre la volatilidad esperada de la cartera. Si la volatilidad sube, el apalancamiento baja; si baja, sube. La volatilidad se mide con una ventana de 60 días y solo con datos pasados, lo que se llama ex-ante: nunca se mira el futuro. Hay un tope de 3.0 y un piso de 0.
> BOCETO: fórmula «apalancamiento = k ÷ volatilidad»; la niebla se espesa y la aguja del apalancamiento baja; luego se despeja y sube hasta el tope de 3.0 marcado con una línea roja.

**[1:55 — Para qué sirve esa constante k]** (pantalla: dos barras de exposición media del mismo alto)
La constante k decide cuánto apalancamiento tienes en promedio. Se calibra para que el promedio sea igual al del bot fijo: 2.0. En la práctica queda en 1.96. Esto es clave para comparar con justicia: si uno de los dos tuviera más exposición media, ganaría o perdería más solo por eso, y no sabrías si lo que ves viene de la regla o de la dosis. A igual dosis, la diferencia que queda sí es de la regla.
> BOCETO: dos barras de «exposición media» (2.0 y 1.96) casi idénticas con un signo «≈»; texto «igual dosis, distinta forma».

**[2:35 — El bot al que se lo apliqué]** (pantalla: esquema de cuatro cajas del bot)
El bot en vivo es una cartera de 15 activos con paridad de riesgo: cada activo pesa según lo poco volátil que es. Tiene un filtro macro que lo saca del mercado cuando el VIX está por encima de 28, cuando salta más de 50% en 5 días o cuando el crédito se debilita, y esa señal se decide con el cierre de ayer. Cuando el filtro dice «fuera», el apalancamiento es 0. El costo es de 1 punto básico por unidad de cambio de apalancamiento.
> BOCETO: 4 cajas (15 activos → paridad de riesgo → filtro macro con rezago de 1 día → apalancamiento); recuadro `params_view`: «tope x3.0 · ventana 60 d · rezago 1 día · 1 bp».

**[3:15 — Resultados]** (pantalla: tabla animada)
El retorno anual pasa de −0.3% a +0.5%. El Sharpe, la ganancia por unidad de riesgo, de −0.00 a 0.10. El drawdown máximo, la peor caída desde un pico, apenas baja de −17.8% a −17.3%. En las crisis sí se nota: COVID de −10.3% a −9.0%, y 2022 de −13.9% a −10.9%. En 2018 es peor.
| Métrica | x2 fijo | Volatilidad objetivo |
|---|---|---|
| Retorno anual (CAGR) | −0.3% | +0.5% |
| Sharpe | −0.00 | 0.10 |
| Drawdown máximo | −17.8% | −17.3% |
| COVID | −10.3% | −9.0% |
| 2022 | −13.9% | −10.9% |
> BOCETO: la tabla entra fila a fila con tick; las filas de COVID y 2022 en verde, chip ámbar «2018: peor». Curvas 0 y 1 de la serie por detrás, a baja opacidad.

**[3:55 — Qué hace bien y qué no]** (pantalla: dos columnas «cambia» y «no cambia»)
Por diseño, cuando la volatilidad sube el apalancamiento baja, y por eso en las crisis hay menos caída. Lo que no cambia es el retorno: +0.5% al año, y un Sharpe de 0.10 frente al 0.38 de comprar y esperar la misma cesta a 1x. Este experimento mide qué pasa, no cuánto aporta cada pieza: el filtro macro, el apalancamiento y la cesta no se separan en la ficha.
> BOCETO: dos columnas: «Cambia» (valles de COVID y 2022 más suaves, en verde) y «No cambia» (+0.5%, Sharpe 0.10, en gris); aviso ámbar «contribución por pieza: no separada».

**[4:35 — Las salvedades del método]** (pantalla: checklist con ámbar)
Tres límites de honestidad. Uno: la constante k se calibra con la media de toda la muestra, 2014 a 2024; los pesos y la volatilidad usan solo datos pasados, pero k no. Dos: no separé una parte fuera de muestra; es una sola ventana. Tres: no apliqué el Deflated Sharpe, el ajuste que descuenta la suerte de haber probado varias ideas. Además, el costo de 1 punto básico es menor que los 3 que usa el laboratorio.
> BOCETO: checklist ✓ «señal macro con rezago de 1 día», «pesos y volatilidad ex-ante»; ámbar «k con toda la muestra», «una sola ventana», «sin Deflated Sharpe», «costo 1 bp, no 3».

**[5:10 — Con tu capital]** (pantalla: tarjeta «Con tu capital»)
Con $10,000, la versión que respira termina en +$531; con $100,000, en +$5,308. Comprar y esperar la misma cesta, de julio de 2014 a finales de 2024, dio +$2,417 y +$24,173. La curva usa un apalancamiento alrededor de 2, con tope de 3: ganancias y pérdidas se amplifican en esa proporción.
> BOCETO: tarjeta de capital con dos filas (vol-targeting en blanco, sin estrategia en verde); curvas reales de la serie al fondo. Aviso: «Simulación con apalancamiento, no es una promesa».

**[5:35 — Conclusión]** (pantalla: los dos medidores del inicio)
Un apalancamiento que respira recorta la caída en las crisis, pero no vuelve rentable un bot que casi no rinde.
> BOCETO: los dos medidores del inicio quedan fijos con las cifras −13.9% y −10.9%.

**[5:50 — Ficha del experimento #57 y cierre]** (pantalla: tarjeta con la ficha y la URL)
Ficha del experimento #57. Estado: parcial. Cifra clave: el drawdown del COVID baja de −10.3% a −9.0%, con Sharpe de 0.10 y +0.5% anual. Filtro que decidió: no supera a comprar y esperar la cesta, que da Sharpe 0.38. Lección: mejora el riesgo, no el retorno. Revísalo completo en atlas-lab-one.vercel.app/e/57. Contenido educativo, no es asesoría financiera. El trading no se promete: se prueba.
> BOCETO: tarjeta en pantalla con las 4 líneas de la ficha (estado ámbar «parcial») y la URL `atlas-lab-one.vercel.app/e/57` en grande; fundido a la frase de marca en blanco sobre negro.

---

## SHORT (9:16, ≈ 44 s) — "Mismo promedio, otra caída"
Título del Short: Mismo apalancamiento medio, otra caída: −13.9% y −10.9% #Shorts

**[0-3 s]** "Mismo apalancamiento medio. Dos caídas distintas: menos 13.9 y menos 10.9."
> BOCETO: B-roll vertical de pantallas de mercado con overlay 0.6; dos medidores, «2.0» fijo y «1.96» oscilando; texto gigante «−13.9% / −10.9%»; golpe de bajo y sacudida. Karaoke con «MISMO» en rojo.

**[3-14 s]** "Un bot mantiene el apalancamiento fijo en 2. El otro lo ajusta a la niebla: lo baja cuando el mercado se agita y lo sube cuando se calma. Se llama volatilidad objetivo."
> BOCETO: carretera con niebla que se espesa; la aguja baja y sube; whoosh. Ken Burns hacia dentro.

**[14-26 s]** "La regla: apalancamiento igual a una constante dividida entre la volatilidad esperada. Ventana de 60 días, tope de 3, solo datos pasados. La constante iguala el promedio: 2.0 y 1.96."
> BOCETO: fórmula «k ÷ volatilidad» y dos barras de exposición media casi iguales; tick por barra.

**[26-37 s]** "En el COVID, la caída bajó de −10.3% a −9.0%. En 2022, de −13.9% a −10.9%. Pero el retorno: más 0.5% al año y Sharpe de 0.10. Comprar y esperar: 0.38."
> BOCETO: los dos valles con tick; tres barras de Sharpe (−0.00 gris, 0.10 blanca, 0.38 verde); flash blanco al entrar.

**[37-44 s]** "Menos caída, retorno casi cero. El video completo está en el canal, y el experimento 57 completo, en el enlace. Mismo promedio, distinta caída. No es asesoría financiera."
> BOCETO: vuelven los dos medidores y «−13.9% / −10.9%» del primer cuadro (loop); rótulo «Experimento #57 completo en el enlace»; texto pequeño «El trading no se promete: se prueba.»

---

## Descripción (YouTube)
https://atlas-lab-one.vercel.app/e/57?utm_source=youtube&utm_medium=video&utm_campaign=exp057-t2
Ficha del experimento #57: parcial (neutral) · COVID −10.3% a −9.0% · Sharpe 0.10 frente a 0.38 de comprar y esperar.
Qué es la volatilidad objetivo y cómo se compara de forma justa: un apalancamiento que sube y baja con la volatilidad (k ÷ volatilidad, ventana de 60 días, tope de 3.0) frente a uno fijo en 2.0, a igual exposición media (1.96). Recorta la caída en el COVID (−10.3% a −9.0%) y en 2022 (−13.9% a −10.9%), pero con Sharpe 0.10 y +0.5% anual no mejora el retorno.
Contenido educativo. No es asesoría financiera ni recomendación de inversión.
Descripción del Short (primera línea): https://atlas-lab-one.vercel.app/e/57?utm_source=youtube&utm_medium=short&utm_campaign=exp057-t2

Capítulos: 0:00 Gancho · 0:15 Este experimento · 0:30 Apalancamiento y volatilidad · 1:05 Conducir según la niebla · 1:55 Para qué sirve la constante k · 2:35 El bot al que se lo apliqué · 3:15 Resultados · 3:55 Qué hace bien y qué no · 4:35 Las salvedades del método · 5:10 Con tu capital · 5:35 Conclusión · 5:50 Ficha del experimento #57 y cierre

Etiquetas: volatilidad objetivo, vol targeting, apalancamiento variable, apalancamiento fijo, paridad de riesgo, bot de trading, drawdown, Sharpe ratio, gestión de riesgo, backtest, trading con datos, ATLAS Lab

## Rúbrica (autoevaluación, 1–5)
| Pieza | hook_0_3s | ritmo | promesa_cumplida | potencial_loop | claridad_no_traders | honestidad_atlas | audio | cta | Promedio |
|---|---|---|---|---|---|---|---|---|---|
| Largo | 4 | 4 | 5 | 4 | 5 | 5 | 4 | 4 | 4.38 |
| Short | 5 | 4 | 5 | 5 | 4 | 5 | 4 | 4 | 4.50 |

Hook ≥ 4 ✓ · honestidad 5 ✓. Punto débil: el bloque del método (k, ventana, tope) es denso; la analogía de la niebla lo aligera y la ficha no separa cuánto aporta cada pieza, algo que el video dice dos veces.

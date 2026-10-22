# Experimento #50 — Cierre: 11 clases de estrategia probadas

Estado del guion: **BORRADOR — pendiente de aprobación**
Estado del experimento: **murió** (No sirvió: ninguna de las 11 clases pasa el triple test; el experimento no opera nada propio, resume el programa) · Serie: G ("Construyendo un bot, y por qué murió") como video de cierre; el plan llega hasta #40, propuesta de ampliarlo a #50 · Relacionado: #38, #40
Datos usados: `experiments.json` (v=50: verdict, analysis, notes, metrics, kpis, capital.note, description), `exp_details.json` (algo, filters), `series/20260610_142844_cierre-11-clases-probadas-v50.json` (curva 0 = configuración ejecutable x2 de #40 con señal rezagada, curva 1 = sin estrategia) y la tabla «Con tu capital» (`docs/youtube/*-capital.md`) (fila #50).

## Títulos (3 opciones)
1. 49 experimentos, 11 clases de estrategia, 0 pasaron
2. Sharpe −0.03: así cerraron 49 experimentos de trading
3. Por qué ninguna de 11 clases de estrategia pasó la prueba

## Miniatura (1280×720)
Fondo `#09090b`. Cuadrícula de 11 casillas, cada una con una ✕ roja. Texto enorme rojo `#e11d2a`: "−0.03". Texto pequeño blanco: "TRIPLE TEST". Logo ATLAS esquina superior derecha. (No repite el título 1.)

---

## VIDEO LARGO (16:9, ≈ 6½ min — resumen de datos del programa)

**[0:00 — Gancho]** (pantalla: contador 49 experimentos → 11 clases → 0)
Cuarenta y nueve experimentos. Once clases de estrategia. Una pregunta: ¿cuántas pasan el triple test? Cero. La configuración ejecutable de referencia cierra con un Sharpe de −0.03 y una pérdida de 7.1% entre 2007 y 2024. Comprar y esperar, en esas mismas fechas, habría ganado $68,723 por cada $100,000.
> BOCETO: contador animado 49 → 11 → 0 con tick; las 11 casillas se llenan de ✕ rojas. Sacudida de pantalla solo en el "0".

**[0:25 — Presentación]** (pantalla: rótulo «Experimento #50 · Cierre: 11 clases de estrategia probadas»)
Este es el experimento #50 de ATLAS Lab: Cierre, 11 clases de estrategia probadas. Todos los resultados están en la página del experimento.
> BOCETO: rótulo «EXPERIMENTO #50 · Cierre: 11 clases de estrategia probadas» que entra con whoosh sobre el último cuadro del gancho a baja opacidad.

**[0:35 — Las 11 clases]** (pantalla: cuadrícula de 11 casillas con su nombre)
Las once clases son: machine learning sobre el precio, momentum de series de tiempo, intradía por sesión, tamaño de posición y fondeo, régimen macro, carry, posicionamiento COT, pares, arbitraje estadístico con PCA, momentum entre activos y cambio de mes. Todas salen de resumir los experimentos 1 a 49, con datos y costos de un operador minorista.
> BOCETO: las 11 casillas entran de a una con whoosh; cada una enlaza a su experimento (p. ej. 46 pares, 47 stat-arb, 48 momentum, 49 cambio de mes). Texto: "49 experimentos revisados".

**[1:05 — Cuatro cierres seguidos]** (pantalla: cuatro tarjetas de los experimentos 46 a 49)
Un vistazo a los últimos cuatro de la lista. Pares: −10.8% en 484 días. Arbitraje estadístico: −10.1% en 876 días. Momentum entre activos: −10.2% en 156 días. Cambio de mes: −10.9% en 179 días. Cuatro técnicas muy distintas, y las cuatro terminaron igual: la cuenta simulada cortada por las reglas de la prop firm —una empresa que financia traders y corta la cuenta con una caída máxima de 10%— con una pérdida de alrededor de 10%. Ojo: como el corte llega pronto, esas cuatro curvas son cortas; por eso el cierre usa la configuración con la curva completa, de 2007 a 2024.
> BOCETO: cuatro tarjetas con la curva real de cada experimento (series de 46, 47, 48 y 49) cayendo hasta el corte, con sus cifras (−10.8%, −10.1%, −10.2%, −10.9%) y días (484, 876, 156, 179). Sello ✕ en cada una.

**[1:50 — El triple test]** (pantalla: tres puertas)
El triple test tiene tres puertas, y se parece a un examen. Una: fuera de muestra, o sea, años que la estrategia nunca vio; no basta con sacar buena nota en los ejercicios que ya conocías. Dos: ejecutable, es decir, que la posición de hoy use solo información de ayer; con esa señal rezagada un día no hay forma de copiar las respuestas del futuro. Tres: el Deflated Sharpe, que descuenta la suerte de haber probado muchas ideas y debe superar 0.95; una nota alta después de muchos intentos puede ser casualidad. Una clase que no pase las tres no cuenta como ventaja.
> BOCETO: tres puertas con candado (fuera de muestra · ejecutable · Deflated Sharpe > 0.95) que se cierran una a una; los 11 iconos chocan contra la tercera. Checklist de `filters` (lag ✓, dsr ✕).

**[2:40 — La configuración ejecutable]** (pantalla: tarjetas KPI + curva 0)
Tomé la configuración ejecutable x2 de #40, con apalancamiento 2 y la señal macro, el VIX y el crédito, rezagada un día. Sharpe de −0.03. Retorno de −7.1% entre 2007 y 2024. Drawdown máximo, la mayor caída desde un pico: −22.7%. Por periodos: −0.003 en 2007–2013 y −0.044 en 2014–2024. Y el Deflated Sharpe: 0.010, con 40 intentos como en #38, contra los 0.95 que se exigen. Un Sharpe tan cerca de cero quiere decir que, con las reglas de ejecución reales, la configuración no ganaba ni perdía con claridad por unidad de riesgo; y el 0.010 dice que, descontando los intentos, no hay evidencia de ventaja.
> BOCETO: KPIs de la ficha en rojo; curva 0 de la serie (5609 puntos, 2007-05-22 a 2024-12-31) dibujándose; barra DSR 0.010 contra la meta 0.95 con marca roja.

**[3:25 — La diferencia es el futuro]** (pantalla: dos curvas, "señal de hoy" vs "señal de ayer")
Ahora mira esto. Si al mismo cálculo le das la señal del mismo día, la que en la vida real no conoces al decidir, saldría +49.4% y un Sharpe de 0.38. Con la señal de ayer: −7.1% y −0.03. Esa diferencia es información del futuro. Por eso la prueba exige la señal rezagada.
> BOCETO: pantalla dividida: izquierda "señal del mismo día" (+49.4%, Sharpe 0.38, en gris con rótulo "imposible en la vida real") y derecha "señal de ayer" (−7.1%, −0.03, en rojo). Texto: "DIFERENCIA = FUTURO".

**[3:55 — Dónde está la ventaja de los fondos]** (pantalla: tres iconos)
Entonces, ¿dónde está la ventaja de los fondos cuantitativos? No en la matemática: es pública y la probamos. Está en los datos, como los tick y el flujo de órdenes; en los costos, con acceso directo; y en la amplitud, con miles de instrumentos. Lo que me queda del programa es el marco de pruebas, la infraestructura y el bot demo con apalancamiento 2 midiendo. Una aclaración: el Deflated Sharpe solo se calculó para la configuración ejecutable; en los experimentos 42 a 49 no se calculó.
> BOCETO: tres iconos (datos · costos · amplitud) que se iluminan; debajo, tres chips de lo que queda (marco de pruebas · infraestructura · bot demo x2). Aviso ámbar: "DSR no calculado en #42–#49".

**[4:35 — Lo que te llevas]** (pantalla: tres tarjetas de conclusiones)
Tres ideas para llevarte. Una: un backtest bonito sin la señal del día anterior puede ser el futuro disfrazado; el mismo cálculo pasó de +49.4% a −7.1% al rezagarlo un día. Dos: la matemática pública no es una ventaja; lo es lo que la rodea, que son los datos, los costos y la amplitud. Tres: un resultado negativo bien medido te ahorra tiempo y dinero. Por eso publico los de este programa completos, también los que no sirvieron.
> BOCETO: tres tarjetas numeradas que entran con whoosh; en la primera, "+49.4% → −7.1%"; en la segunda, los tres iconos; en la tercera, la cuadrícula de 11 ✕.

**[5:10 — Con tu capital]** (pantalla: tarjeta "Con tu capital")
Con $10,000, esa configuración termina en −$710. Con $100,000, en −$7,102. Comprar y esperar, entre mayo de 2007 y diciembre de 2024, +$6,872 con $10,000 y +$68,723 con $100,000. La estrategia perdió y el mercado, en esas fechas, subió.
> BOCETO: tarjeta de capital con dos filas: estrategia (rojo) y sin estrategia (verde); curvas 0 y 1 de la serie al fondo. Aviso: "Simulación, no es una promesa".

**[5:35 — Ficha del experimento #50]** (pantalla: tarjeta con la URL)
Ficha del experimento #50. Estado: murió, ninguna de las 11 clases de estrategia pasa el triple test. Cifra clave: la configuración ejecutable x2, con la señal de ayer, da Sharpe de −0.03 y −7.1% entre 2007 y 2024, con una caída máxima de −22.7%. Filtro que decidió: el Deflated Sharpe, de 0.010 contra 0.95 exigido. Lección: la ventaja de los fondos está en los datos, los costos y la amplitud, no en la matemática. Revísalo completo en atlas-lab-one.vercel.app/e/50.
> BOCETO: tarjeta «FICHA · EXPERIMENTO #50» con Estado · Cifra clave · Filtro que decidió · Lección, y la URL `atlas-lab-one.vercel.app/e/50` en grande.

**[6:10 — Conclusión y cierre]** (pantalla: logo)
Once clases, cero pasaron. No es una derrota: es la información más útil del programa, porque te ahorra repetirlo. Todos los datos en atlas-lab-one.vercel.app/e/50. Si quieres que pruebe otra familia de estrategias, dímelo en los comentarios. Contenido educativo, no es asesoría financiera. El trading no se promete: se prueba.
> BOCETO: la cuadrícula de 11 ✕ se queda fija; fundido a la frase de marca en blanco sobre negro.

---

## SHORT (9:16, ≈ 45 s) — "Cero de once"
Título del Short: 49 experimentos, 11 clases, 0 pasaron #Shorts

**[0-3 s]** "Cuarenta y nueve experimentos. Cero pasaron."
> BOCETO: B-roll vertical de pantallas de bolsa con overlay 0.6; contador 49 → 11 → 0 en grande; golpe de bajo y sacudida en el "0". Subtítulos karaoke en mayúsculas.

**[3-11 s]** "Once clases de estrategia: machine learning, momentum, carry, pares, cambio de mes… todo con datos y costos de un minorista."
> BOCETO: las 11 casillas entran con whoosh, 1 por segundo aprox., cada una con su ✕ al llegar. Ken Burns hacia dentro.

**[11-22 s]** "El triple test: años que nunca vio, señal del día anterior y Deflated Sharpe. La configuración de referencia: Sharpe de −0.03 y −7.1%."
> BOCETO: tres puertas con candado; la última marca "DSR 0.010 / 0.95" en rojo; la curva real de la serie (curva 0) cae por detrás a baja opacidad.

**[22-32 s]** "Con la señal del mismo día daba +49.4%. Con la de ayer, −7.1%. Esa diferencia es el futuro."
> BOCETO: dos cifras enormes enfrentadas, "+49.4%" (gris, tachada con "imposible") y "−7.1%" (rojo); flash blanco al cambio de escena.

**[32-45 s]** "La ventaja de los fondos no es la matemática: son datos, costos y amplitud. Once clases, cero pasaron. Experimento 50 completo en el enlace; el video completo está en el canal. No es asesoría financiera."
> BOCETO: tres iconos (datos, costos, amplitud) y vuelve el contador del inicio, "49 → 11 → 0" (empalma con el primer cuadro: loop); texto pequeño "El trading no se promete: se prueba." Abajo, «Experimento #50 completo en el enlace».

---

## Descripción (YouTube) — video largo
https://atlas-lab-one.vercel.app/e/50?utm_source=youtube&utm_medium=video&utm_campaign=exp050-t1
Ficha del experimento #50: murió (No sirvió) · 11 clases de estrategia, 0 pasan el triple test · Sharpe −0.03 y −7.1% en 2007–2024 · Deflated Sharpe 0.010 frente a 0.95 exigido.
Cierre del programa: 49 experimentos resumidos en 11 clases de estrategia (ML de precio, momentum, intradía, fondeo, régimen macro, carry, COT, pares, stat-arb, momentum entre activos y cambio de mes). Ninguna pasa el triple test (fuera de muestra, ejecutable y Deflated Sharpe). La configuración ejecutable x2 de #40 da Sharpe −0.03 y −7.1% en 2007-2024, con Deflated Sharpe de 0.010.
Contenido educativo. No es asesoría financiera ni recomendación de inversión.

Capítulos: 0:00 Gancho · 0:25 Presentación · 0:35 Las 11 clases · 1:05 Cuatro cierres seguidos · 1:50 El triple test · 2:40 La configuración ejecutable · 3:25 La diferencia es el futuro · 3:55 Dónde está la ventaja de los fondos · 4:35 Lo que te llevas · 5:10 Con tu capital · 5:35 Ficha del experimento #50 · 6:10 Conclusión y cierre

Etiquetas: backtest, triple test, Deflated Sharpe, fuera de muestra, fondos cuantitativos, estrategias de trading, resultados negativos, Sharpe ratio, trading con datos, ATLAS Lab, quant, trading algorítmico

## Descripción (YouTube) — Short
https://atlas-lab-one.vercel.app/e/50?utm_source=youtube&utm_medium=short&utm_campaign=exp050-t1
Experimento #50 · Cierre: 11 clases de estrategia probadas: murió · 11 clases, 0 pasan el triple test · Deflated Sharpe 0.010 frente a 0.95 exigido. Video completo en el canal. No es asesoría financiera.

## Rúbrica (autoevaluación, escala 1-5)
| Criterio | Nota | Por qué |
|---|---|---|
| hook_0_3s | 5 | Cadena 49 → 11 → 0 en pantalla y «cuarenta y nueve… cero» en voz, con golpe en el 0 |
| ritmo | 4 | Cuadrícula animada y comparación dividida; el bloque del triple test es conceptual |
| promesa_cumplida | 5 | Promete "cero pasaron" y lo demuestra con la puerta del DSR |
| potencial_loop | 5 | Termina en "cero pasaron" y empalma con el contador 49 → 11 → 0 |
| claridad_no_traders | 4 | Explica fuera de muestra, señal rezagada y Deflated Sharpe en una frase cada uno |
| honestidad_atlas | 5 | Aclara que el DSR no se calculó en #42–#49 y que la señal del mismo día es imposible |
| audio | 4 | Voz por clonar; un solo golpe de bajo |
| cta | 4 | Una petición y remite al video completo |
Promedio: **4.5** (≥ 4.0). Hook del Short 5 (≥ 4) y honestidad 5: no descalificado.

## Otros temas de este experimento
- `exp-050-cierre-11-clases.md` — Tema 1: 49 experimentos, 11 clases de estrategia, 0 pasaron
- `exp-050-t2-senal-de-hoy-o-de-ayer.md` — Tema 2: el mismo cálculo con la señal de hoy (+49.4%) o la de ayer (−7.1%)
- `exp-050-t3-catorce-anos-bajo-el-agua.md` — Tema 3: la curva de 2007 a 2024 y más de 14 años sin volver al máximo
- `exp-050-t4-deflated-sharpe-0-010.md` — Tema 4: Deflated Sharpe 0.010, la prueba que descuenta la suerte

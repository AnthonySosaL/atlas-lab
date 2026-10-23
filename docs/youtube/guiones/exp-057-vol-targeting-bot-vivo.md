# Experimento #57 — Volatilidad objetivo vs. apalancamiento fijo (bot en vivo)

Estado del guion: **BORRADOR — pendiente de aprobación**
Estado del experimento: **parcial** (neutral): recorta el drawdown en las crisis, pero no mejora el retorno (Sharpe 0.10, +0.5% anual) · Serie: E ("Gestión de riesgo: lo poco que se sostuvo"), como segunda parte del #52 · Relacionado: #52, #58 (escenarios del bot), #50 (bot demo x2)
Datos usados: `experiments.json` (v=57: verdict, analysis, notes, metrics, kpis, params_view, capital.note), `exp_details.json` (algo, code.snippet, filters), `series/20260613_200850_vol-targeting-vs-leverage-fijo-bot-live.json` (curva 0 = vol-targeting, 1 = bot con apalancamiento fijo 2.0, 2 = comprar y esperar la cesta 1x) y la tabla «Con tu capital» (`docs/youtube/*-capital.md`) (fila #57).

## Títulos (3 opciones)
1. Vol-targeting en mi bot: COVID de −10.3% a −9.0%
2. ¿Mejora el bot con volatilidad objetivo? Sharpe 0.10 vs 0.38
3. Menos caída (−9.0% en el COVID), retorno +0.5%: mi bot

## Miniatura (1280×720)
Fondo `#09090b`. Dos valles de drawdown del COVID: uno gris más profundo y uno verde `#22c55e` más suave. Texto grande blanco: "RIESGO ✓" y debajo en rojo `#e11d2a`: "RETORNO ✕". Logo ATLAS esquina superior derecha. (No repite el título 1.)

---

## VIDEO LARGO (16:9, ≈ 7 min)

**[0:00 — Gancho]** (pantalla: dos valles del COVID, −10.3% y −9.0%)
El bot en vivo usa un apalancamiento fijo de 2. Probé cambiarlo por uno que se ajusta a la volatilidad, con la misma exposición media. En el COVID, la caída bajó de −10.3% a −9.0%. En 2022, de −13.9% a −10.9%. ¿La mala noticia? El retorno sigue casi en cero: +0.5% al año.
> BOCETO: dos valles de drawdown (ilustración con las cifras de la ficha) y contadores −10.3% → −9.0% y −13.9% → −10.9%; luego un "+0.5%" pequeño y gris. Sacudida solo al aparecer "casi cero".

**[0:25 — Presentación]** (pantalla: rótulo «Experimento #57 · Volatilidad objetivo vs. apalancamiento fijo (bot en vivo)»)
Este es el experimento #57 de ATLAS Lab: Volatilidad objetivo vs. apalancamiento fijo (bot en vivo). Todos los resultados están en la página del experimento.
> BOCETO: rótulo «EXPERIMENTO #57 · Volatilidad objetivo vs. apalancamiento fijo (bot en vivo)» que entra con whoosh sobre el último cuadro del gancho a baja opacidad.

**[0:35 — El bot y la idea]** (pantalla: esquema del bot)
Primero, el bot. Es una cartera de 15 activos con paridad de riesgo: cada activo pesa según lo poco volátil que es. Tiene un filtro macro, VIX y crédito, que lo saca del mercado en momentos de aversión al riesgo, decidido con la señal del día anterior. Y un apalancamiento fijo de 2, es decir, el doble de exposición, corriendo en una cuenta demo. La alternativa: un apalancamiento variable, igual a una constante dividida por la volatilidad esperada de la cartera. Cuando el mercado se agita, baja; cuando se calma, sube.
> BOCETO: esquema de 4 cajas (15 activos → paridad de riesgo → filtro macro VIX/crédito → apalancamiento) y, debajo, dos selectores "x2 fijo" y "apalancamiento = k ÷ volatilidad". Ilustración rotulada, sin datos inventados.

**[1:20 — La paridad de riesgo, en una imagen]** (pantalla: balanza con activos de distinta volatilidad)
La paridad de riesgo reparte el dinero para que cada activo aporte un riesgo parecido. Si un activo es muy volátil, recibe menos peso; si es tranquilo, más. Un reparto en partes iguales de dinero, en cambio, deja que el activo más volátil domine el riesgo de la cartera. Por eso, en este bot, los pesos se calculan con la inversa de la volatilidad de cada activo, usando solo datos pasados.
> BOCETO: balanza con tres activos de distinta volatilidad: el volátil con peso pequeño, el tranquilo con peso grande, y el riesgo aportado igualado; fórmula "peso ∝ 1 ÷ volatilidad".

**[1:55 — Cómo se probó]** (pantalla: checklist de reglas)
Para que sea justa, ambos tienen la misma exposición media: 2.0, con una real de 1.96. La volatilidad se mide con una ventana de 60 días, solo con datos pasados. Hay un tope de 3.0 y un costo de 1 punto básico por cada unidad de cambio de apalancamiento. Y tres límites de honestidad: la constante se calibra con la media de toda la muestra, 2014 a 2024; no separé una parte fuera de muestra, es una sola ventana; y no apliqué el Deflated Sharpe.
> BOCETO: checklist ✓ "señal macro con rezago de 1 día", "volatilidad ex-ante, ventana 60 d", "tope x3"; ámbar "constante calibrada con toda la muestra", "una sola ventana", "sin Deflated Sharpe".

**[2:35 — Resultados]** (pantalla: tabla animada)
Mira la comparación. El retorno anual pasa de −0.3% a +0.5%. El Sharpe, la ganancia por unidad de riesgo, de −0.00 a 0.10. El drawdown máximo, la mayor caída desde un pico, apenas baja de −17.8% a −17.3%. Donde sí se nota es en las crisis: COVID, de −10.3% a −9.0%; 2022, de −13.9% a −10.9%. En 2018, en cambio, es peor. Otros datos de la versión variable: peor día −3.7%, peor año −9.9%, el 58.3% de los años en positivo, y ningún día viola el límite diario de 5%.
| Métrica | x2 fijo | Volatilidad objetivo |
|---|---|---|
| Retorno anual (CAGR) | −0.3% | +0.5% |
| Sharpe | −0.00 | 0.10 |
| Drawdown máximo | −17.8% | −17.3% |
| COVID | −10.3% | −9.0% |
| 2022 | −13.9% | −10.9% |
> BOCETO: la tabla entra fila a fila con tick; las dos filas de crisis se resaltan en verde; chip ámbar "2018: peor". Curvas 0 y 1 de la serie por detrás a baja opacidad.

**[3:15 — Cómo leer riesgo versus retorno]** (pantalla: dos columnas: lo que cambia y lo que no)
Fíjate en lo que cambia y en lo que no. Cambia el riesgo en las crisis: menos caída en el COVID y en 2022. No cambia lo importante: el retorno anual sigue cerca de cero, +0.5% contra −0.3%, y el Sharpe de 0.10 queda lejos del 0.38 de comprar y esperar. Es como ponerle mejores frenos a un coche que no avanza: el coche es más seguro, pero no llegó más lejos. Y la mejora no es pareja: en 2018 la versión variable es peor.
> BOCETO: dos columnas: "Cambia" (COVID −10.3% → −9.0%, 2022 −13.9% → −10.9%, en verde) y "No cambia" (retorno +0.5%, Sharpe 0.10, en gris); icono de freno y de coche detenido.

**[3:55 — Contra comprar y esperar]** (pantalla: barra de Sharpe 0.38)
Y ahora la referencia. Comprar y esperar la misma cesta con los mismos pesos a 1x, sin filtro: Sharpe de 0.38, drawdown máximo de −12.8% y un +24.2% en total. Ninguna de las dos versiones del bot la supera: la variable llega a 0.10 y la fija a −0.00. Para el laboratorio, el umbral fuera de muestra es un Sharpe de 0.30; el 0.10 no lo alcanza.
> BOCETO: tres barras de Sharpe: fijo −0.00 (gris), variable 0.10 (blanca), comprar y esperar 0.38 (verde) y la marca de 0.30 como línea de meta.

**[4:30 — Lo que el experimento no explica]** (pantalla: aviso ámbar)
Este experimento mide qué pasa, no por qué. No sé cuánto del retorno cercano a cero viene del filtro macro, cuánto del apalancamiento 2 y cuánto de la cesta; la ficha no lo separa. Lo que sí sé es que ninguna de las dos versiones llega al 0.38 de comprar y esperar la cesta con los mismos pesos.
> BOCETO: tres piezas en una tubería (filtro macro · apalancamiento · cesta) con signos de interrogación ámbar sobre la contribución de cada una; sello "NO SEPARADO EN LA FICHA".

**[5:00 — Con tu capital]** (pantalla: tarjeta "Con tu capital")
Con $10,000, la versión variable termina en +$531; con $100,000, en +$5,308. La versión fija: −$275 y −$2,755. Comprar y esperar, entre julio de 2014 y finales de 2024: +$2,417 y +$24,173. La curva usa un apalancamiento que ronda 2, con tope de 3: las ganancias y las pérdidas se amplifican en la misma proporción.
> BOCETO: tarjeta de capital con tres filas (variable en blanco, fija en gris, sin estrategia en verde); curvas reales de la serie al fondo. Aviso: "Simulación con apalancamiento, no es una promesa".

**[5:25 — Tres preguntas antes de activar algo así]** (pantalla: tres tarjetas con preguntas)
Antes de activar un cambio como este en un bot, haría tres preguntas. Una: ¿mejora lo que más me importa? Aquí mejora el riesgo en las crisis, no el retorno. Dos: ¿lo probé en años que no usé para calibrarlo? La constante se calibra con toda la muestra y no hay un periodo fuera de muestra. Tres: ¿supera a no hacer nada? Aquí, no. Con esas respuestas, la decisión es la que recoge la ficha.
> BOCETO: tres tarjetas con ✓/✕: riesgo ✓, fuera de muestra ✕, supera a comprar y esperar ✕; sello final "OPCIÓN, NO ACTIVADA".

**[6:00 — Qué hago con esto]** (pantalla: texto de la ficha)
Mejora el riesgo, no el retorno. Por eso queda preparada como una opción activable, sin tocar el bot en producción. Hoy el bot sigue con apalancamiento fijo.
> BOCETO: interruptor "vol-targeting: OFF" en la pantalla de un panel de control; sello "OPCIÓN, NO ACTIVADA".

**[6:20 — Ficha del experimento #57]** (pantalla: tarjeta con la URL)
Ficha del experimento #57. Estado: parcial, neutral. Cifra clave: el drawdown del COVID baja de −10.3% a −9.0% y el de 2022, de −13.9% a −10.9%, pero con Sharpe de 0.10 y +0.5% anual. Filtro que decidió: no supera a comprar y esperar la cesta, que da Sharpe de 0.38. Lección: mejora el riesgo, no el retorno. Revísalo completo en atlas-lab-one.vercel.app/e/57.
> BOCETO: tarjeta «FICHA · EXPERIMENTO #57» con Estado · Cifra clave · Filtro que decidió · Lección, y la URL `atlas-lab-one.vercel.app/e/57` en grande.

**[6:50 — Conclusión y cierre]** (pantalla: logo)
Controlar el riesgo y ganar dinero son dos problemas distintos, y este experimento resuelve, un poco, solo el primero. Todos los datos en atlas-lab-one.vercel.app/e/57. Si quieres que pruebe otra mejora del bot, dímelo en los comentarios. Contenido educativo, no es asesoría financiera. El trading no se promete: se prueba.
> BOCETO: los dos valles del inicio quedan fijos; fundido a la frase de marca en blanco sobre negro.

---

## SHORT (9:16, ≈ 45 s) — "Menos caída, retorno casi cero"
Título del Short: Mejoré el riesgo de mi bot: COVID −10.3% a −9.0% #Shorts

**[0-3 s]** "Mejoré el riesgo de mi bot: la caída del COVID bajó."
> BOCETO: B-roll vertical de pantallas de mercado con overlay 0.6; texto gigante "−10.3% → −9.0%" (el 9.0% en verde); golpe de bajo y sacudida. Subtítulos karaoke con "MEJORÉ" en rojo.

**[3-16 s]** "De menos 10.3% a menos 9.0%. El bot usa apalancamiento fijo de 2: lo cambié por uno que se ajusta a la volatilidad, con la misma exposición media."
> BOCETO: dos selectores "x2 fijo" y "k ÷ volatilidad"; palanca que sube con mercado calmo y baja con mercado agitado (ilustración). Ken Burns hacia dentro.

**[16-25 s]** "En 2022, la caída bajó de −13.9% a −10.9%. Menos riesgo justo en las crisis."
> BOCETO: segundo valle de drawdown con −13.9% → −10.9% y tick; flash blanco al entrar; chip "2018: peor".

**[25-35 s]** "Pero el retorno: más 0.5% al año y Sharpe de 0.10. Comprar y esperar la cesta, en las mismas fechas: Sharpe de 0.38."
> BOCETO: tres barras de Sharpe (−0.00 gris, 0.10 blanca, 0.38 verde) con tick; curvas reales de la serie por detrás a baja opacidad.

**[35-45 s]** "Menos caída, retorno casi cero. Mejoré el riesgo, no el retorno. Experimento 57 completo en el enlace; el video completo está en el canal. No es asesoría financiera."
> BOCETO: vuelve "−10.3% → −9.0%" del primer cuadro con un "+0.5%" gris al lado (loop); texto pequeño "El trading no se promete: se prueba." Abajo, «Experimento #57 completo en el enlace».

---

## Descripción (YouTube) — video largo
https://atlas-lab-one.vercel.app/e/57?utm_source=youtube&utm_medium=video&utm_campaign=exp057-t1
Ficha del experimento #57: parcial (neutral) · COVID −10.3% a −9.0%, 2022 −13.9% a −10.9% · Sharpe 0.10 frente a 0.38 de comprar y esperar.
Comparé la configuración del bot en vivo (paridad de riesgo de 15 activos, filtro macro VIX/crédito con rezago de 1 día, apalancamiento fijo 2.0) con un apalancamiento dinámico por volatilidad objetivo a igual exposición media (2014-2024). Recorta el drawdown en el COVID (−10.3% a −9.0%) y en 2022 (−13.9% a −10.9%), pero con Sharpe 0.10 y +0.5% anual no mejora el retorno; comprar y esperar la cesta da Sharpe 0.38.
Contenido educativo. No es asesoría financiera ni recomendación de inversión.

Capítulos: 0:00 Gancho · 0:25 Presentación · 0:35 El bot y la idea · 1:20 La paridad de riesgo, en una imagen · 1:55 Cómo se probó · 2:35 Resultados · 3:15 Cómo leer riesgo versus retorno · 3:55 Contra comprar y esperar · 4:30 Lo que el experimento no explica · 5:00 Con tu capital · 5:25 Tres preguntas antes de activar algo así · 6:00 Qué hago con esto · 6:20 Ficha del experimento #57 · 6:50 Conclusión y cierre

Etiquetas: volatilidad objetivo, vol targeting, apalancamiento, paridad de riesgo, risk parity, bot de trading, drawdown, backtest, Sharpe ratio, gestión de riesgo, trading con datos, ATLAS Lab

## Descripción (YouTube) — Short
https://atlas-lab-one.vercel.app/e/57?utm_source=youtube&utm_medium=short&utm_campaign=exp057-t1
Experimento #57 · Volatilidad objetivo vs. apalancamiento fijo (bot en vivo): parcial · COVID −10.3% a −9.0% · Sharpe 0.10 frente a 0.38 de comprar y esperar. Video completo en el canal. No es asesoría financiera.

## Rúbrica (autoevaluación, escala 1-5)
| Criterio | Nota | Por qué |
|---|---|---|
| hook_0_3s | 4 | Cifras de antes y después (−10.3% → −9.0%) en pantalla; el matiz del retorno llega después |
| ritmo | 4 | Esquema, tabla y barras cambian cada 2–3 s; el bloque de reglas es denso |
| promesa_cumplida | 5 | Promete mejora de riesgo sin mejora de retorno y lo muestra |
| potencial_loop | 4 | Cierra con las mismas cifras del primer cuadro |
| claridad_no_traders | 4 | Explica paridad de riesgo, apalancamiento, drawdown y Sharpe |
| honestidad_atlas | 5 | Declara calibración con toda la muestra, ventana única, 2018 peor y que no supera a comprar y esperar |
| audio | 4 | Voz por clonar; un golpe de bajo |
| cta | 4 | Una petición y remite al video completo |
Promedio: **4.25** (≥ 4.0). Hook del Short 4 (≥ 4) y honestidad 5: no descalificado.

## Otros temas de este experimento
- Tema 1 de 3: `exp-057-vol-targeting-bot-vivo.md` — Vol-targeting en mi bot: COVID de −10.3% a −9.0%
- Tema 2 de 3: `exp-057-t2-vol-targeting-explicado.md` — Mismo apalancamiento medio (2.0 y 1.96), distinta caída en 2022: −13.9% contra −10.9%
- Tema 3 de 3: `exp-057-t3-dos-veredictos-misma-idea.md` — Volatilidad objetivo: de −40.3% a −19.2% en un experimento, de −17.8% a −17.3% en otro

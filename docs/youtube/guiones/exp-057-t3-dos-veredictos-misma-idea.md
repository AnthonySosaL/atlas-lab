# Experimento #57 — Volatilidad objetivo vs. apalancamiento fijo (bot en vivo) · Tema 3 de 3: dos veredictos para la misma idea

Estado del guion: **BORRADOR — pendiente de aprobación**
Tema 3 de 3 del experimento #57 · Qué aporta frente a los otros temas: es el tema de la COMPARACIÓN. Pone el #57 (parcial) junto al #52 (el único experimento del programa que sirvió) y explica por qué la misma idea da «de −40.3% a −19.2%» en uno y «de −17.8% a −17.3%» en el otro. El tema 1 cuenta el resultado del bot; el tema 2 explica cómo funciona la regla.
Estado del experimento: **parcial** (neutral): recorta el drawdown en las crisis, pero no mejora el retorno (Sharpe 0.10, +0.5% anual) · Serie: E ("Gestión de riesgo: lo poco que se sostuvo") · Relacionado: #52 (comparación), #58, #50
Datos usados: `experiments.json` (v=57: verdict, analysis, kpis, metrics, params_view; v=52: verdict, analysis, kpis, metrics, params_view, capital.note), `exp_details.json` (extra del #57: algo, filters), `series/20260613_200850_vol-targeting-vs-leverage-fijo-bot-live.json` y la tabla «Con tu capital» (`docs/youtube/*-capital.md`, filas #57 y #52).

## Títulos (3 opciones)
1. Volatilidad objetivo: de −40.3% a −19.2% en un experimento, de −17.8% a −17.3% en otro
2. Misma idea, dos veredictos: «sirvió» (#52) y «parcial» (#57)
3. ¿Cuánto recorta la caída la volatilidad objetivo? Depende de dónde partes

## Miniatura (1280×720)
Fondo `#09090b`, dividido en dos mitades. Izquierda: una flecha larga hacia abajo en verde `#22c55e`, texto «−40.3% → −19.2%» y sello pequeño «SIRVIÓ». Derecha: una flecha corta en gris, «−17.8% → −17.3%» y sello «PARCIAL». Centro, en blanco: «MISMA IDEA». Logo ATLAS arriba a la derecha.

---

## VIDEO LARGO (16:9, ≈ 6½ min)

**[0:00 — Gancho]** (pantalla: dos flechas de drawdown, una larga y una corta)
Misma idea, dos experimentos. En uno, la caída máxima pasó de −40.3% a −19.2%. En el otro, de −17.8% a −17.3%. ¿Por qué tanta diferencia?
> BOCETO: dos valles de drawdown (ilustración con las cifras de las fichas): el primero se recorta a la mitad (verde), el segundo apenas se mueve (gris). Sacudida solo al aparecer «−17.3%».

**[0:15 — Este experimento]** (pantalla: rótulo «Experimento #57 · Volatilidad objetivo vs. apalancamiento fijo (bot en vivo)»)
Este es el experimento #57 de ATLAS Lab: volatilidad objetivo contra apalancamiento fijo, en el bot en vivo. Todos los resultados están en la página del experimento. Hoy lo pongo al lado del experimento 52, el único de todo el programa que sirvió.
> BOCETO: rótulo con «#57» y el nombre del experimento; a su lado, un segundo rótulo «#52» más pequeño; logo ATLAS arriba a la derecha.

**[0:35 — La idea en común]** (pantalla: carretera con niebla)
Los dos experimentos usan la misma idea: la volatilidad objetivo. Volatilidad es cuánto se mueve el precio; objetivo significa que el apalancamiento, la dosis de exposición, se ajusta para mantener ese movimiento cerca de una meta. Con niebla bajas la velocidad; con la carretera despejada, aceleras. El apalancamiento es la velocidad.
> BOCETO: carretera con niebla; la aguja de apalancamiento baja al espesarse y sube al despejarse. Ilustración rotulada, sin datos.

**[1:10 — Experimento #52]** (pantalla: tarjeta con los datos del #52)
En el 52, la cesta es de 7 activos. Se compara un apalancamiento fijo de x2 contra uno que apunta a una volatilidad de 15% anual, con tope de x4 y un costo de 2 puntos básicos por cambio. El tramo comparado empieza el 18 de marzo de 2020, el primer día con pronóstico fuera de muestra. Resultado: la caída máxima baja de −40.3% con x2 fijo a −19.2%, con Sharpe de 0.79 frente a 0.93 del x2 fijo.
> BOCETO: tarjeta del #52: «7 activos · objetivo 15% · tope x4 · 2 bps · desde 18-mar-2020», con los dos drawdowns −40.3% y −19.2% y la volatilidad anual de 11.0%.

**[1:55 — Experimento #57]** (pantalla: tarjeta con los datos del #57)
En el 57, el bot en vivo tiene 15 activos con paridad de riesgo y un filtro macro que lo saca del mercado en momentos de aversión al riesgo. El apalancamiento variable se calibra para igualar la exposición media de 2.0, con tope de 3.0 y ventana de volatilidad de 60 días, de 2014 a 2024. Resultado: la caída máxima pasa de −17.8% a −17.3%, con Sharpe de 0.10 frente a −0.00 del x2 fijo.
> BOCETO: tarjeta del #57: «15 activos · filtro macro · media 2.0 · tope 3.0 · 1 bp · 2014–2024», con −17.8% y −17.3%.

**[2:40 — Lado a lado]** (pantalla: tabla animada)
Puestas en paralelo, las dos fichas no se parecen tanto.
| | #52 | #57 |
|---|---|---|
| Caída máxima, x2 fijo | −40.3% | −17.8% |
| Caída máxima, volatilidad objetivo | −19.2% | −17.3% |
| Sharpe, volatilidad objetivo | 0.79 (x2 fijo: 0.93) | 0.10 (x2 fijo: −0.00) |
| Objetivo | 15% anual, tope x4 | exposición media 2.0, tope 3.0 |
| Costo | 2 bps | 1 bp |
> BOCETO: la tabla entra fila a fila con tick; las dos filas de caída máxima resaltadas en verde, con barras proporcionales a cada cifra.

**[3:25 — Por qué no se pueden comparar directamente]** (pantalla: cinco diferencias en lista)
Cinco diferencias. La cesta: 7 activos contra 15. El periodo: desde marzo de 2020 contra 2014–2024. El objetivo: una volatilidad de 15% contra igualar una exposición media. El costo: 2 puntos básicos contra 1. Y el punto de partida: el bot del 57 ya trae un filtro macro que lo saca del mercado en las crisis. Por eso no es correcto decir «la volatilidad objetivo recorta la caída a la mitad» o «apenas la recorta»: cada cifra pertenece a su experimento.
> BOCETO: lista de cinco diferencias que aparecen con tick, cada una con un icono; sello ámbar «NO COMPARABLES CIFRA A CIFRA».

**[4:05 — Lo que sí tienen en común]** (pantalla: dos barras de dólares por experimento)
Dos cosas coinciden. Primera: las dos son control de riesgo, no una fuente de ganancia extra. Segunda: ninguna supera a comprar y esperar en dólares. En el 52, con $100,000 la volatilidad objetivo termina en +$60,839 y la cesta equiponderada a 1x, en +$129,383. En el 57, +$5,308 contra +$24,173. Además, en el 52 una desviación estándar simple de 20 días logra algo parecido, −16.1% y Sharpe de 0.83, así que el pronóstico de machine learning no aporta más.
> BOCETO: dos pares de barras (blanca = volatilidad objetivo, verde = comprar y esperar) con las cifras; nota al pie gris: «#52 desde el 18-mar-2020; #57 de 2014 a 2024».

**[4:50 — Una explicación posible, no medida]** (pantalla: dos depósitos de agua con distinta altura)
Una lectura, que estos experimentos no midieron por separado: cuanto más grande es la caída de partida, más hay que recortar. En el 52 se partía de −40.3%; en el 57, de −17.8%, con un filtro macro que ya había hecho parte del trabajo. Es una hipótesis, no un resultado: la ficha no separa cuánto aporta cada pieza.
> BOCETO: dos barras de caída de partida (−40.3% alta, −17.8% baja) con un signo de interrogación ámbar sobre la diferencia; sello «HIPÓTESIS, NO MEDIDA».

**[5:25 — Con tu capital]** (pantalla: tarjeta «Con tu capital» con las dos curvas)
Con $10,000, la versión variable del 57 termina en +$531; con $100,000, en +$5,308. Comprar y esperar la misma cesta, de julio de 2014 a finales de 2024: +$2,417 y +$24,173. Las curvas usan un apalancamiento alrededor de 2: ganancias y pérdidas se amplifican en la misma proporción.
> BOCETO: tarjeta de capital del #57 con tres filas (variable en blanco, fija en gris, sin estrategia en verde); aviso: «Simulación con apalancamiento, no es una promesa».

**[5:50 — Qué hago con esto]** (pantalla: interruptor «vol-targeting: OFF»)
En el 57, mejora el riesgo, no el retorno; por eso queda como una opción activable, sin tocar el bot en producción. Hoy el bot sigue con apalancamiento fijo.
> BOCETO: interruptor en un panel de control; sello «OPCIÓN, NO ACTIVADA».

**[6:05 — Conclusión]** (pantalla: las dos flechas del inicio)
La misma idea puede verse enorme o pequeña según de dónde partas. La pregunta útil no es «cuánto recorta», sino «cuánto riesgo había antes y cuánto retorno queda después».
> BOCETO: las dos flechas del inicio, fijas, con «−40.3% → −19.2%» y «−17.8% → −17.3%».

**[6:20 — Ficha del experimento #57 y cierre]** (pantalla: tarjeta con la ficha y la URL)
Ficha del experimento #57. Estado: parcial. Cifra clave: la caída del COVID baja de −10.3% a −9.0%, con Sharpe de 0.10 y +0.5% anual. Filtro que decidió: no supera a comprar y esperar la cesta, que da Sharpe 0.38. Lección: mejora el riesgo, no el retorno. Revísalo completo en atlas-lab-one.vercel.app/e/57. Contenido educativo, no es asesoría financiera. El trading no se promete: se prueba.
> BOCETO: tarjeta en pantalla con las 4 líneas de la ficha (estado ámbar «parcial») y la URL `atlas-lab-one.vercel.app/e/57` en grande; fundido a la frase de marca.

---

## SHORT (9:16, ≈ 45 s) — "Misma idea, dos resultados"
Título del Short: Volatilidad objetivo: −40.3% a −19.2%… y −17.8% a −17.3% #Shorts

**[0-3 s]** "La misma idea: en un experimento recorta la caída de menos 40.3 a menos 19.2. En otro, de menos 17.8 a menos 17.3."
> BOCETO: B-roll vertical de pantallas de mercado con overlay 0.6; dos flechas de drawdown, una larga y otra corta; golpe de bajo y sacudida. Karaoke con «MISMA IDEA» en rojo.

**[3-14 s]** "Se llama volatilidad objetivo: bajas el apalancamiento cuando el mercado se agita y lo subes cuando se calma. Probé la misma idea en dos experimentos."
> BOCETO: carretera con niebla y aguja de apalancamiento; whoosh. Ken Burns hacia dentro.

**[14-26 s]** "En el 52, siete activos, objetivo de 15% y tope de 4: la caída baja de −40.3% a −19.2%. Es el único experimento del programa que sirvió."
> BOCETO: tarjeta del #52 con la flecha larga en verde; sello «SIRVIÓ»; tick.

**[26-37 s]** "En el 57, el bot en vivo con quince activos y filtro macro: de −17.8% a −17.3%. Sharpe de 0.10. Parcial."
> BOCETO: tarjeta del #57 con la flecha corta en gris; sello ámbar «PARCIAL»; flash blanco al entrar.

**[37-45 s]** "Ninguno gana a comprar y esperar en dólares. Experimento 57 completo en el enlace; el video completo, en el canal. ¿De 40 a 19, o de 17 a 17? Depende de dónde partas."
> BOCETO: dos pares de barras en dólares (+$5,308 / +$24,173); vuelven las dos flechas del primer cuadro (loop); rótulo «Experimento #57 completo en el enlace»; texto pequeño «No es asesoría financiera · El trading no se promete: se prueba».

---

## Descripción (YouTube)
https://atlas-lab-one.vercel.app/e/57?utm_source=youtube&utm_medium=video&utm_campaign=exp057-t3
Ficha del experimento #57: parcial (neutral) · caída del COVID de −10.3% a −9.0% · Sharpe 0.10 frente a 0.38 de comprar y esperar.
Comparo la volatilidad objetivo del experimento 57 (bot en vivo, 15 activos, 2014–2024: caída máxima de −17.8% a −17.3%) con la del experimento 52 (7 activos, desde el 18-mar-2020: de −40.3% a −19.2%). Misma idea, distinto punto de partida, distinto veredicto.
Contenido educativo. No es asesoría financiera ni recomendación de inversión.
Descripción del Short (primera línea): https://atlas-lab-one.vercel.app/e/57?utm_source=youtube&utm_medium=short&utm_campaign=exp057-t3

Capítulos: 0:00 Gancho · 0:15 Este experimento · 0:35 La idea en común · 1:10 Experimento #52 · 1:55 Experimento #57 · 2:40 Lado a lado · 3:25 Por qué no se pueden comparar · 4:05 Lo que sí tienen en común · 4:50 Una explicación posible · 5:25 Con tu capital · 5:50 Qué hago con esto · 6:05 Conclusión · 6:20 Ficha del experimento #57 y cierre

Etiquetas: volatilidad objetivo, vol targeting, drawdown, apalancamiento, gestión de riesgo, bot de trading, Sharpe ratio, comparación de estrategias, backtest, trading con datos, ATLAS Lab, estrategias de trading

## Rúbrica (autoevaluación, 1–5)
| Pieza | hook_0_3s | ritmo | promesa_cumplida | potencial_loop | claridad_no_traders | honestidad_atlas | audio | cta | Promedio |
|---|---|---|---|---|---|---|---|---|---|
| Largo | 4 | 4 | 5 | 4 | 4 | 5 | 4 | 4 | 4.25 |
| Short | 5 | 4 | 5 | 5 | 4 | 5 | 4 | 4 | 4.50 |

Hook ≥ 4 ✓ · honestidad 5 ✓. Punto débil: comparar dos fichas con cestas, periodos y objetivos distintos exige una tabla; el video lo resuelve diciendo que las cifras no son comparables una a una y marcando la explicación como hipótesis.

# Experimento #48 — Momentum transversal (largo los 3 mejores, corto los 3 peores)

Estado del guion: **BORRADOR — pendiente de aprobación**
Estado del experimento: **murió** (No sirvió) · Serie: sin asignar en `plan-series.md`; propuesta: B ampliada ("Estrategias famosas, puestas a prueba") · Relacionado: #5 (TSMOM de cartera), #50 (cierre)
Datos usados: `experiments.json` (v=48: verdict, notes, metrics, kpis, params_view, period), `exp_details.json` (algo, code.snippet, filters), `series/20260610_142756_momentum-cross-sectional-v48.json` (curva 0 = estrategia, 1 = «sin reglas de prop firm», 2 = sin estrategia) y la tabla «Con tu capital» (`docs/youtube/*-capital.md`) (fila #48).
Aviso de datos: la curva dura solo 156 días; el guion lo dice en voz y no extrapola más allá de lo que mide.

## Títulos (3 opciones)
1. Largo los 3 mejores, corto los 3 peores: duró 156 días
2. Momentum entre activos: Sharpe −0.41 y −0.42 en dos épocas
3. El clásico académico del momentum, probado con 15 activos

## Miniatura (1280×720)
Fondo `#09090b`. Ranking vertical de 6 barras: 3 verdes arriba (↑) y 3 rojas abajo (↓), con una línea que las cruza. Texto enorme rojo `#e11d2a`: "−10.2%". Texto pequeño blanco: "CORTADA". Logo ATLAS esquina superior izquierda. (No repite el título 1.)

---

## VIDEO LARGO (16:9, ≈ 5 min — la curva es corta, 156 días)

**[0:00 — Gancho]** (pantalla: ranking de 15 activos que se reordena; contador "156 días")
Cada día, ordeno 15 activos por lo que subieron en 90 días. Compro los tres que más subieron y vendo en corto los tres que más cayeron. Es el momentum, uno de los clásicos de la academia. Resultado: la cuenta simulada duró 156 días y se cortó con una pérdida de 10.2%.
> BOCETO: barras de ranking reordenándose cada 2 s (whoosh); los 3 de arriba en verde, los 3 de abajo en rojo; al final el contador 156 días en rojo con sacudida.

**[0:25 — La idea]** (pantalla: dibujo del ranking y del suavizado)
Se la conoce como momentum transversal, al estilo de Jegadeesh y Titman: lo que ya subió tiende a seguir subiendo, y lo que cayó, a seguir cayendo. Compruebo el retorno a 90 días de cada activo, compro los 3 mejores y vendo en corto los 3 peores. Para no rotar todos los días, suavizo la posición con una media de 21 días. Es neutral al mercado: lo que compro y lo que vendo se compensan.
> BOCETO: ilustración rotulada (no es dato real): ranking de 15 activos con flecha "90 d"; media de 21 días suavizando la posición. Recuadro con code.snippet (rank, top-3, bottom-3, rolling(21)).

**[1:05 — Un ejemplo del ranking]** (pantalla: ranking de hoy con tres arriba y tres abajo)
Imagina el ranking de hoy: arriba, tres activos que vienen subiendo; abajo, tres que vienen cayendo. La regla compra los de arriba y vende en corto los de abajo, con el mismo tamaño en cada lado. Mientras los ganadores sigan ganando y los perdedores sigan perdiendo, cobra. Pero el ranking cambia: cuando un ganador se da vuelta, el suavizado de 21 días hace que la regla reaccione despacio. Ese es el riesgo típico del momentum. Ojo: este experimento no mide por qué cayó la curva, solo que cayó.
> BOCETO: ilustración rotulada (no es dato real): ranking de 15 barras; las 3 mejores en verde con ▲ y las 3 peores en rojo con ▼; un ganador que cambia de color a mitad de escena.

**[1:45 — Cómo se probó]** (pantalla: checklist de reglas)
Cesta de 15 activos entre 2014 y 2024, y de 8 entre 2007 y 2013, el periodo fuera de muestra: años que la estrategia nunca vio. Apalancamiento 2, kill-switch de −3%, deslizamiento de 0.2% y las posiciones decididas un día antes, sin mirar el futuro. La cuenta sigue las reglas de una prop firm: se corta con una caída máxima de 10% o una pérdida de 5% en un día. Y el único costo modelado es el deslizamiento del corte automático.
> BOCETO: checklist con ✓ en "señal del día anterior"; ámbar en "costos mínimos"; barra de tiempo con 2007–2013 en gris "fuera de muestra".

**[2:20 — Resultados]** (pantalla: 6 tarjetas KPI + curva 0)
Retorno total: −10.2%. Sharpe, la ganancia por unidad de riesgo, que debería ser positiva: −0.41 en 2014–2024 y −0.42 en 2007–2013. Los dos periodos dan negativo. Drawdown máximo: −28.1%. Fíjate en la forma de la curva: no es una pérdida lenta desde el primer día. Con $100,000, la cuenta llegó a $124,788 y terminó en $89,764 el 3 de abril de 2015: subió y después se desplomó. Por eso el drawdown, −28.1%, es mayor que la pérdida final, −10.2%: el drawdown se mide desde el pico, no desde el capital inicial.
> BOCETO: tarjetas `kpis` en rojo; curva 0 de la serie con zoom al pico ($124,788) y a la caída ($89,764); flecha roja de "−28.1%" entre ambos puntos.

**[3:05 — Lo que no sabemos]** (pantalla: aviso "156 días")
Una nota de honestidad. La curva dura solo 156 días, y la ficha lo dice: es una muestra muy corta para sacar más conclusiones. Hay tres cosas que este experimento no puede decirte. Una: qué pasaría con más de 156 días. Dos: qué pasaría con otros activos distintos de los 15 de la cesta. Tres: qué pasaría con más costos, porque aquí solo se modeló el deslizamiento del corte automático. Con la línea hipotética que ignora el corte de la prop firm, esa misma regla termina 2024 en $345 de cada $100,000. Es hipotética, en la realidad la cuenta se cierra ese día. Lo que sí se puede decir: Sharpe negativo en los dos periodos, el de diseño y el fuera de muestra.
> BOCETO: sello "MUESTRA CORTA" sobre un tramo de 156 días resaltado en la línea de tiempo; curva 1 punteada en gris cayendo hasta $345, rotulada "hipotética".

**[4:00 — Con tu capital]** (pantalla: tarjeta "Con tu capital")
Con $10,000, la cuenta simulada termina en −$1,024. Con $100,000, en −$10,236. En esas mismas fechas, comprar y esperar la cesta sin estrategia dio −$361 y −$3,608. O sea, la estrategia perdió más que no hacer nada.
> BOCETO: tarjeta de capital con filas "Estrategia" (rojo) y "Sin estrategia" (gris); aviso "Simulación, no es una promesa".

**[4:20 — Conclusión y cierre]** (pantalla: logo)
Otro clásico académico que no sobrevive a operar con CFDs, que son contratos por diferencia, el instrumento con el que opera un minorista. No es un veredicto sobre el momentum para siempre: es lo que esta implementación midió, y fue negativo. Todos los datos en atlas-lab-one.vercel.app, experimento 48. Si quieres que pruebe otro clásico de la academia, dímelo en los comentarios. Contenido educativo, no es asesoría financiera. El trading no se promete: se prueba.
> BOCETO: el ranking del inicio se congela y se tacha; fundido a la frase de marca.

---

## SHORT (9:16, ≈ 43 s) — "156 días"
Título del Short: Compra los 3 mejores, vende los 3 peores: 156 días #Shorts

**[0-3 s]** "Largo los tres mejores, corto los tres peores: duró 156 días."
> BOCETO: B-roll vertical de pantallas de mercado con overlay 0.6; ranking de 6 barras (3 verdes ↑, 3 rojas ↓) y texto gigante "156 DÍAS". Golpe de bajo y sacudida.

**[3-12 s]** "Es el momentum, un clásico de la academia. Quince activos, ordenados por lo que subieron en 90 días. Neutral al mercado, con apalancamiento doble."
> BOCETO: ranking que se reordena cada 2 s con whoosh; chips "90 días" y "x2". Ken Burns hacia fuera.

**[12-24 s]** "Resultado: Sharpe de −0.41 entre 2014 y 2024, y de −0.42 en 2007–2013, años que nunca vio. Los dos periodos, en negativo."
> BOCETO: dos barras rojas (−0.41, −0.42) hacia abajo con tick sonoro; etiqueta "nunca lo vio" en la segunda.

**[24-34 s]** "Con cien mil dólares subió hasta $124,788… y terminó en $89,764. La cuenta se cortó el 3 de abril de 2015."
> BOCETO: curva real de la serie (curva 0) dibujándose: sube al pico con contador verde y cae con contador rojo; flash blanco al corte. Sello ✕.

**[34-43 s]** "Es una muestra corta, y lo digo. Pero el clásico duró 156 días. El video completo está en el canal. No es asesoría financiera."
> BOCETO: vuelve al ranking del inicio y congela en "156 DÍAS" (empalma con el primer cuadro: loop); texto pequeño "El trading no se promete: se prueba."

---

## Descripción (YouTube)
Probé el momentum transversal (estilo Jegadeesh y Titman): cada día, largo los 3 activos con mejor retorno a 90 días y corto los 3 peores de una cesta de 15, con apalancamiento x2 y señal del día anterior. La cuenta simulada se cortó a los 156 días con −10.2% y Sharpe de −0.41 (2014-2024) y −0.42 (2007-2013). Es una muestra corta y el video lo dice.
Datos completos: https://atlas-lab-one.vercel.app (experimento #48)
Contenido educativo. No es asesoría financiera ni recomendación de inversión.

Capítulos: 0:00 Gancho · 0:25 La idea · 1:05 Un ejemplo del ranking · 1:45 Cómo se probó · 2:20 Resultados · 3:05 Lo que no sabemos · 4:00 Con tu capital · 4:20 Conclusión y cierre

Etiquetas: momentum, momentum transversal, Jegadeesh y Titman, largo y corto, estrategia de trading, backtest, Sharpe ratio, fuera de muestra, cartera neutral al mercado, trading con datos, ATLAS Lab

## Rúbrica (autoevaluación, escala 1-5)
| Criterio | Nota | Por qué |
|---|---|---|
| hook_0_3s | 4 | La premisa es clara y "156 días" está en pantalla desde el cuadro 1 |
| ritmo | 4 | Ranking animado, curva con pico y caída; bloque corto de 5 min |
| promesa_cumplida | 5 | Se muestra la caída desde el pico a la cuenta cortada |
| potencial_loop | 4 | Cierra en "156 días" y abre con el mismo número |
| claridad_no_traders | 4 | Explica momentum, Sharpe, fuera de muestra, CFD y prop firm |
| honestidad_atlas | 5 | Declara la muestra corta y no extrapola |
| audio | 4 | Voz por clonar; bajo en el gancho y whoosh en cada cambio |
| cta | 4 | Una sola petición y remite al video completo |
Promedio: **4.25** (≥ 4.0). Hook del Short 4 (≥ 4) y honestidad 5: no descalificado.

## Otros temas de este experimento
- `exp-048-momentum-transversal.md` — Tema 1: Largo los 3 mejores, corto los 3 peores: duró 156 días
- `exp-048-t2-el-pico-del-dia-61.md` — Tema 2: el gráfico que se corta en el pico (día 61 de 156)
- `exp-048-t3-neutral-no-es-sin-riesgo.md` — Tema 3: «neutral al mercado» no es «sin riesgo»

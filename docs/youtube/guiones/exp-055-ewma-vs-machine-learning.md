# Experimento #55 — EWMA clásico vs. machine learning (volatilidad)

Estado del guion: **BORRADOR — pendiente de aprobación**
Estado del experimento: **parcial** (neutral): en la misma muestra fuera de muestra, el EWMA simple predice mejor la volatilidad (R² 0.175) que el machine learning (0.113) · Serie: D/E (propuesta: mini-serie «La volatilidad sí se predice, la dirección no», #51 → #55) · Relacionado: #51, #52, #54
Datos usados: `experiments.json` (v=55: verdict, analysis, notes, metrics, kpis, params_view, chart.bars, capital.note), `exp_details.json` (algo, code.snippet, filters) y, para la conexión con el 52, `experiments.json` (v=52). No tiene `series/` (no simula cartera) ni fila en la tabla de capital (sección «Sin curva de capital»).
Aviso de datos: el experimento aporta pocas cifras (0.175, 0.113, el margen de 0.02, span 10, horizonte 5 d, 7 activos); por eso el video es corto (≈ 4 min) y se apoya en la conexión con el 52.

## Títulos (3 opciones)
1. Una línea de código le ganó al machine learning (R² 0.175)
2. EWMA 0.175 vs machine learning 0.113: gana lo simple
3. ¿Machine learning o EWMA? Predecir volatilidad en 7 activos

## Miniatura (1280×720)
Fondo `#09090b`. A la izquierda, un cerebro de IA con una gran ✕ gris. A la derecha, una sola línea de código brillando en verde `#22c55e`. Texto enorme: "SIMPLE > IA". Debajo, en pequeño: "0.175 vs 0.113". Logo ATLAS esquina inferior derecha. (No repite el título 1.)

---

## VIDEO LARGO (16:9, ≈ 4½ min — es una comparación de modelos, sin cuenta simulada)

**[0:00 — Gancho]** (pantalla: un cerebro de IA contra una sola línea de código; cifras 0.175 y 0.113)
Un modelo de machine learning contra una línea de código. El reto: predecir la volatilidad de los próximos 5 días en 7 activos. Ganó la línea: R² de 0.175 contra 0.113 del machine learning.
> BOCETO: dos tarjetas enfrentadas: "Machine learning" (cerebro, 0.113 en gris) y `ret.ewm(span=10).std().shift(1)` (código, 0.175 en verde). Whoosh y sacudida al revelar la ganadora. Subtítulo karaoke con "UNA LÍNEA" en rojo.

**[0:20 — Presentación]** (pantalla: rótulo «Experimento #55 · EWMA clásico vs. machine learning (volatilidad)»)
Este es el experimento #55 de ATLAS Lab: EWMA clásico vs. machine learning (volatilidad). Todos los resultados están en la página del experimento.
> BOCETO: rótulo «EXPERIMENTO #55 · EWMA clásico vs. machine learning (volatilidad)» que entra con whoosh sobre el último cuadro del gancho a baja opacidad.

**[0:30 — La navaja de Occam]** (pantalla: dos explicaciones, una simple y una compleja)
Hay una regla vieja llamada navaja de Occam: entre dos explicaciones que funcionan igual, quédate con la más simple. Aplicada al trading: no uses un modelo complicado si uno sencillo basta. Para decidirlo, puse una regla: el machine learning solo se queda si supera al método simple por al menos 0.02 de R². El R² es la parte de lo que varía que el modelo logra explicar: cero es como adivinar el promedio.
> BOCETO: ilustración rotulada (no es dato real): balanza con "simple" y "complejo"; debajo, la regla de la ficha, "ML se queda solo si gana por más de 0.02 de R²" (params_view).

**[1:05 — Qué es el EWMA]** (pantalla: cuadro de código y curva de pesos)
EWMA significa promedio móvil exponencial: un promedio que da más peso a los días recientes. Aquí lo uso sobre la desviación estándar de los retornos, con un span de 10 y rezagado un día, es decir, solo con datos hasta ayer. Es una línea de código. En el otro lado, un modelo HistGradientBoosting, entrenado fuera de muestra con walk-forward: aprende solo con el pasado y predice días que no ha visto.
> BOCETO: la línea de código `vewma = ret.ewm(span=10).std().shift(1)` resaltada; curva de pesos decayendo hacia atrás; al otro lado, esquema walk-forward con bloques que avanzan.

**[1:40 — Por qué un modelo complejo puede perder]** (pantalla: ilustración de ajuste al ruido)
¿Cómo puede perder un modelo sofisticado contra una línea de código? Porque un modelo con muchas piezas puede ajustarse al ruido de los datos de entrenamiento, y el ruido no se repite. Una regla simple tiene pocas piezas y, con frecuencia, aguanta mejor cuando llegan días nuevos. No es una ley: este experimento lo midió en siete activos y la línea ganó. Con otros datos podría pasar otra cosa, y por eso la comparación se hace fuera de muestra.
> BOCETO: ilustración rotulada (no es dato real): curva suave (EWMA) y curva ondulada pegada a puntos de entrenamiento (ML) que se desvía en los puntos nuevos; etiqueta "ruido que no se repite".

**[2:15 — Cómo se midió]** (pantalla: 7 activos y línea de tiempo)
Siete activos: S&P 500, Nasdaq 100, DAX, FTSE 100, WTI, Brent y oro. Datos de 2019 a 2024. Se predice la volatilidad realizada de los próximos 5 días, y el R² promedio se calcula para los dos métodos sobre exactamente los mismos días fuera de muestra, con una máscara común, para que la comparación sea justa: si uno de los dos se evaluara en días más fáciles, ganaría por eso.
> BOCETO: 7 chips de activos; checklist de `filters` con ✓ "misma muestra fuera de muestra para ambos"; línea de tiempo 2019–2024.

**[2:50 — Resultado]** (pantalla: dos barras de la ficha)
El EWMA, R² de 0.175. El machine learning, 0.113. El modelo complejo no solo no superó al simple por el margen de 0.02: quedó por debajo. La conclusión de la ficha es corta: para pronosticar volatilidad, usa lo simple.
> BOCETO: las dos barras reales del `chart.bars` de la ficha (EWMA 0.175 verde, Machine learning 0.113 gris) creciendo con tick; marca del margen de 0.02 sobre la barra gris, sin alcanzar.

**[3:10 — Lo que implica]** (pantalla: tabla del experimento 52)
Esto conecta con el experimento 52, el único que sirvió. Ahí, el vol-targeting con pronóstico de machine learning recortó la caída máxima a −19.2%, con Sharpe de 0.79; una desviación estándar simple de 20 días llegó a −16.1% con 0.83. El modelo complejo tampoco aportaba allí. Son dos medidas distintas, pero apuntan en la misma dirección: para controlar el riesgo no hace falta lo complicado. Este experimento no simula una cartera, así que no hay un resultado en dinero.
> BOCETO: tarjetas del 52 lado a lado: "ML −19.2% / 0.79" y "Desviación 20 d −16.1% / 0.83", con el enlace "#52". Aviso: "Sin cuenta simulada".

**[3:50 — Ficha del experimento #55]** (pantalla: tarjeta con la URL)
Ficha del experimento #55. Estado: parcial, neutral. Cifra clave: R² de 0.175 del EWMA contra 0.113 del machine learning, en la misma muestra fuera de muestra. Filtro que decidió: el machine learning no supera al EWMA. Lección: para pronosticar volatilidad basta una línea de código. Revísalo completo en atlas-lab-one.vercel.app/e/55.
> BOCETO: tarjeta «FICHA · EXPERIMENTO #55» con Estado · Cifra clave · Filtro que decidió · Lección, y la URL `atlas-lab-one.vercel.app/e/55` en grande.

**[4:15 — Cierre]** (pantalla: logo)
Una línea de código le ganó al machine learning. Todos los datos en atlas-lab-one.vercel.app/e/55. Si quieres que compare otro modelo complejo contra uno simple, dímelo en los comentarios. Contenido educativo, no es asesoría financiera. El trading no se promete: se prueba.
> BOCETO: la tarjeta del código se queda brillando y el cerebro se apaga; fundido a la frase de marca.

---

## SHORT (9:16, ≈ 45 s) — "Una línea"
Título del Short: Una línea de código le ganó al machine learning #Shorts

**[0-3 s]** "Una línea de código le ganó al machine learning."
> BOCETO: B-roll vertical de código con overlay 0.6; una línea de código brillante contra un cerebro de IA; texto gigante "0.175 vs 0.113"; golpe de bajo y sacudida.

**[3-9 s]** "El reto: predecir cuánto se moverá el mercado en los próximos cinco días, en siete activos."
> BOCETO: 7 chips de activos entrando con whoosh; icono de ondas de volatilidad. Ken Burns hacia dentro.

**[9-22 s]** "De un lado, un promedio que da más peso a los días recientes: una sola línea de código. Del otro, un modelo de machine learning entrenado con el pasado y evaluado fuera de muestra."
> BOCETO: pantalla dividida: izquierda la línea de código `ewm(span=10)`, derecha esquema de red neuronal; marcador "fuera de muestra".

**[22-32 s]** "Resultado en los mismos días: la línea, R² de 0.175. El machine learning, 0.113. Para quedarse, tenía que ganarle por más de 0.02."
> BOCETO: dos barras reales del `chart.bars` de la ficha (0.175 verde, 0.113 gris) con tick; flash blanco al entrar la verde.

**[32-45 s]** "Para pronosticar volatilidad, usa lo simple. Una línea de código le ganó al machine learning. Experimento 55 completo en el enlace; el video completo está en el canal. No es asesoría financiera."
> BOCETO: vuelve la línea de código brillando (empalma con el primer cuadro: loop); texto pequeño "El trading no se promete: se prueba." Abajo, «Experimento #55 completo en el enlace».

---

## Descripción (YouTube) — video largo
https://atlas-lab-one.vercel.app/e/55?utm_source=youtube&utm_medium=video&utm_campaign=exp055-t1
Ficha del experimento #55: parcial (neutral) · R² 0.175 del EWMA frente a 0.113 del machine learning (horizonte de 5 días).
Comparé un modelo de machine learning (HistGradientBoosting, walk-forward) con un EWMA de una línea (span 10, rezagado 1 día) para predecir la volatilidad de los próximos 5 días en 7 activos líquidos, 2019-2024. En la misma muestra fuera de muestra, el EWMA llegó a R² 0.175 y el machine learning a 0.113. No simula una cuenta; sirve para elegir el método.
Contenido educativo. No es asesoría financiera ni recomendación de inversión.

Capítulos: 0:00 Gancho · 0:20 Presentación · 0:30 La navaja de Occam · 1:05 Qué es el EWMA · 1:40 Por qué un modelo complejo puede perder · 2:15 Cómo se midió · 2:50 Resultado · 3:10 Lo que implica · 3:50 Ficha del experimento #55 · 4:15 Cierre

Etiquetas: EWMA, machine learning, volatilidad, navaja de Occam, pronóstico de volatilidad, R2 fuera de muestra, walk-forward, modelo simple, trading con datos, ATLAS Lab

## Descripción (YouTube) — Short
https://atlas-lab-one.vercel.app/e/55?utm_source=youtube&utm_medium=short&utm_campaign=exp055-t1
Experimento #55 · EWMA clásico vs. machine learning (volatilidad): parcial · R² 0.175 del EWMA frente a 0.113 del machine learning. Video completo en el canal. No es asesoría financiera.

## Rúbrica (autoevaluación, escala 1-5)
| Criterio | Nota | Por qué |
|---|---|---|
| hook_0_3s | 4 | Enfrentamiento claro (IA contra una línea) con las dos cifras en pantalla |
| ritmo | 4 | Tarjetas, barras y código cambian cada 2–3 s; video corto |
| promesa_cumplida | 5 | Promete quién gana y lo muestra con las barras de la ficha |
| potencial_loop | 4 | Cierra en la misma frase del gancho |
| claridad_no_traders | 4 | Define EWMA, R², navaja de Occam y fuera de muestra |
| honestidad_atlas | 5 | Dice que no hay cuenta simulada y que el experimento aporta pocas cifras |
| audio | 4 | Voz por clonar; un golpe de bajo |
| cta | 4 | Una petición y remite al video completo |
Promedio: **4.25** (≥ 4.0). Hook del Short 4 (≥ 4) y honestidad 5: no descalificado.

## Otros temas de este experimento
- `exp-055-ewma-vs-machine-learning.md` — Tema 1: Una línea de código le ganó al machine learning (R² 0.175)
- `exp-055-t2-comparar-sin-trampa.md` — Tema 2: cómo comparar dos modelos sin trampa (mismos días, margen de 0.02)
- `exp-055-t3-una-linea-explicada.md` — Tema 3: la línea de código que ganó, palabra por palabra

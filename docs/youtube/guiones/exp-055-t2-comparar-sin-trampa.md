# Experimento #55 — EWMA clásico vs. machine learning (volatilidad) · Tema 2: cómo comparar dos modelos sin trampa (mismos días, margen de 0.02)

Estado del guion: **BORRADOR — pendiente de aprobación**
Tema 2 de 3 del experimento #55. Qué aporta frente a los otros temas: el tema 1 cuenta el duelo (EWMA 0.175 contra ML 0.113) y la navaja de Occam; este explica el método de comparación (misma muestra, margen fijado en el script, datos hasta ayer) y las trampas que evita; el tema 3 desarma la línea de código.
Estado del experimento: **parcial** (neutral): en la misma muestra fuera de muestra, el EWMA simple predice mejor la volatilidad (R² 0.175) que el machine learning (0.113) · Serie: D/E (propuesta: mini-serie «La volatilidad sí se predice, la dirección no», #51 → #56) · Relacionado: #51, #52, #54
Datos usados: `experiments.json` (v=55: verdict, analysis, notes, metrics, kpis, params_view, chart.bars, capital.note, period), `exp_details.json` (v55: algo, code.snippet, filters). No tiene `series/` (no simula cartera) ni fila en la tabla «Con tu capital» (`docs/youtube/*-capital.md`): figura en su sección «Sin curva de capital».
Aviso de datos: el experimento aporta pocas cifras (0.175, 0.113, el margen de 0.02, span 10, horizonte 5 d, 7 activos); por eso el video es corto (≈ 4 min).

## Títulos (3 opciones)
1. Comparar dos modelos sin trampa: mismos días, margen 0.02
2. Machine learning contra una línea de código: la prueba justa
3. ¿Gana el modelo complejo? Así se decide, con datos

## Miniatura (1280×720)
Fondo `#09090b`. Dos calendarios idénticos con los mismos días marcados en verde `#22c55e`, y entre ellos un signo "=" en blanco. Texto enorme blanco: "MISMOS DÍAS". Texto pequeño rojo `#e11d2a`: "0.02". Logo ATLAS esquina superior derecha. (No repite el título 1.)

---

## VIDEO LARGO (16:9, ≈ 4 min — es una comparación de modelos, sin cuenta simulada)

**[0:00 — Gancho]** (pantalla: dos calendarios con los mismos días marcados y las cifras 0.175 y 0.113)
Comparar dos modelos tiene trampas: medirlos en días distintos, o fijar el criterio después de ver quién gana. Aquí se midieron en los mismos días fuera de muestra y con un margen escrito en el script: 0.02. Resultado: EWMA, 0.175; machine learning, 0.113.
> BOCETO: dos calendarios idénticos con los mismos días marcados; las barras reales del `chart.bars` de la ficha (0.175 verde, 0.113 gris) creciendo con tick; sacudida de pantalla al aparecer la gris. Subtítulo karaoke con "MISMOS DÍAS" en rojo.

**[0:20 — De qué experimento hablamos]** (pantalla: rótulo con el número y el nombre)
Este es el experimento #55 de ATLAS Lab: EWMA clásico vs. machine learning (volatilidad). Todos los resultados están en la página del experimento.
> BOCETO: rótulo «EXPERIMENTO #55 · EWMA clásico vs. machine learning (volatilidad)» con whoosh.

**[0:30 — El duelo en 20 segundos]** (pantalla: dos tarjetas enfrentadas)
La pregunta: ¿predice mejor la volatilidad de los próximos 5 días un modelo de machine learning, o un EWMA, un promedio que da más peso a los días recientes, de una sola línea de código? Siete activos: S&P 500, Nasdaq 100, DAX, FTSE 100, WTI, Brent y oro, de 2019 a 2024. La medida es el R²: la parte de lo que varía que el modelo logra explicar. Cero es como adivinar el promedio.
> BOCETO: tarjeta «Machine learning» (HistGradientBoosting, walk-forward) frente a tarjeta con la línea `ewm(span=10).std().shift(1)`; chip «R²».

**[1:05 — Trampa 1: días distintos]** (pantalla: dos calendarios con huecos distintos)
Primera trampa: medir cada modelo en días diferentes. El modelo de ML necesita historia para entrenarse antes de poder predecir, así que le faltan los primeros días. El EWMA, en cambio, puede predecir antes. Si cada uno se mide en sus propios días, no estás comparando lo mismo: uno puede ganar solo porque le tocaron días más fáciles. La solución del experimento: una máscara común. El R² de los dos se calcula únicamente en los días en que ambos tienen pronóstico.
> BOCETO: dos calendarios con huecos al inicio distintos; una máscara verde se superpone y deja solo los días comunes; checklist de `filters` con ✓ «misma muestra fuera de muestra para ambos».

**[1:40 — Trampa 2: mirar el futuro]** (pantalla: línea de código y flecha hacia atrás)
Segunda trampa: usar información de hoy para pronosticar hoy. El EWMA se corre un día, con shift de 1, para usar solo datos hasta ayer, y el ML se entrena con walk-forward, solo con el pasado y evaluando en días que no vio. Los dos juegan con las mismas reglas de tiempo.
> BOCETO: línea `.shift(1)` resaltada; bloques walk-forward avanzando; flecha «solo hasta ayer» con ✓.

**[2:05 — Trampa 3: el criterio después del resultado]** (pantalla: la regla del margen)
Tercera trampa: decidir el criterio después de ver quién ganó. Aquí hay una regla en el script: el machine learning se queda solo si supera al método simple por más de 0.02 de R². Una regla así protege de elegir el modelo complejo por una diferencia minúscula. Lo ideal es escribirla antes de mirar los resultados; la ficha la deja registrada junto con el código.
> BOCETO: tarjeta con la condición `ML > EWMA + 0.02` y una regla de 0.02 sobre las dos barras; sello «criterio escrito».

**[2:35 — El resultado]** (pantalla: dos barras de la ficha)
El EWMA, R² de 0.175. El machine learning, 0.113. El modelo complejo no solo no superó al simple por el margen de 0.02: quedó por debajo. La conclusión de la ficha: para pronosticar volatilidad, usa lo simple. Dos aclaraciones: el R² es el promedio de los siete activos, y la ficha no documenta otros valores de span para el EWMA.
> BOCETO: barras reales (0.175 verde, 0.113 gris) con la marca del margen de 0.02 sobre la gris, sin alcanzar; aviso ámbar «promedio de 7 activos · span 10».

**[3:05 — Con tu capital]** (pantalla: aviso)
Este experimento no simula una cartera, así que no hay un resultado en dinero que escalar a $10,000 o $100,000. Compara cuál método pronostica mejor la volatilidad.
> BOCETO: tarjeta «Con tu capital» con el texto «sin cuenta simulada: es una comparación de modelos».

**[3:15 — Ficha del experimento #55]** (pantalla: tarjeta con la URL)
Ficha del experimento 55. Estado: parcial, neutral. Cifra clave: R² de 0.175 del EWMA contra 0.113 del machine learning, en los mismos días fuera de muestra y con un margen de 0.02. Filtro que decidió: el machine learning no supera al EWMA por el margen. Lección: compara con los mismos días, con datos hasta ayer y con un criterio escrito. Revísalo completo en atlas-lab-one.vercel.app/e/55.
> BOCETO: tarjeta «FICHA · EXPERIMENTO #55» con Estado · Cifra clave · Filtro que decidió · Lección, y la URL `atlas-lab-one.vercel.app/e/55` en grande.

**[3:45 — Cierre]**
Contenido educativo, no es asesoría financiera. El trading no se promete: se prueba.
> BOCETO: fundido a la frase de marca en blanco sobre negro; logo ATLAS.

---

## SHORT (9:16, ≈ 41 s) — "Mismos días"
Título del Short: ML contra una línea de código, sin trampa #Shorts

**[0-3 s]** "Comparar dos modelos sin trampa: mismos días y un margen de 0.02."
> BOCETO: B-roll vertical de código con overlay 0.6; dos calendarios idénticos; texto gigante «MISMOS DÍAS»; golpe de bajo y sacudida.

**[3-14 s]** "Un modelo de machine learning contra una línea de código, un EWMA. Predicen la volatilidad de los próximos cinco días en siete activos."
> BOCETO: tarjetas enfrentadas con whoosh; 7 chips de activos. Ken Burns hacia dentro.

**[14-26 s]** "Tres reglas: solo días en que los dos tienen pronóstico. Solo datos hasta ayer. Y el machine learning se queda solo si gana por más de 0.02 de R²."
> BOCETO: máscara verde sobre dos calendarios; `.shift(1)`; regla de 0.02; tick por cada regla.

**[26-34 s]** "Resultado: EWMA, 0.175. Machine learning, 0.113. No llegó al margen."
> BOCETO: dos barras reales con tick; flash al entrar la verde.

**[34-41 s]** "Compara siempre con los mismos días. Experimento 55 completo en el enlace; el video completo está en el canal. No es asesoría financiera."
> BOCETO: vuelven los dos calendarios idénticos (loop con el primer cuadro); abajo «Experimento #55 completo en el enlace»; texto pequeño «El trading no se promete: se prueba.»

---

## Descripción (YouTube) — video largo
https://atlas-lab-one.vercel.app/e/55?utm_source=youtube&utm_medium=video&utm_campaign=exp055-t2
Ficha del experimento #55 (EWMA clásico vs. machine learning, volatilidad): parcial (neutral) · R² del EWMA 0.175 contra 0.113 del machine learning, en la misma muestra fuera de muestra · margen exigido: 0.02 · sin cuenta simulada.
Cómo comparar dos modelos sin trampa: mismos días, datos hasta ayer y un criterio escrito antes de ver el resultado.
Contenido educativo. No es asesoría financiera ni recomendación de inversión.

## Descripción (YouTube) — Short
https://atlas-lab-one.vercel.app/e/55?utm_source=youtube&utm_medium=short&utm_campaign=exp055-t2
Experimento #55 (EWMA clásico vs. machine learning): parcial · R² 0.175 (EWMA) contra 0.113 (ML) en los mismos días; margen de 0.02. Video completo en el canal. No es asesoría financiera.

## Capítulos
0:00 Gancho · 0:20 De qué experimento hablamos · 0:30 El duelo en 20 segundos · 1:05 Trampa 1: días distintos · 1:40 Trampa 2: mirar el futuro · 2:05 Trampa 3: el criterio después del resultado · 2:35 El resultado · 3:05 Con tu capital · 3:15 Ficha del experimento #55 · 3:45 Cierre

## Etiquetas
comparar modelos, EWMA, machine learning, volatilidad, R2 fuera de muestra, walk-forward, validación de modelos, navaja de Occam, backtest, trading con datos, ATLAS Lab

## Rúbrica (autoevaluación, escala 1-5)
| Criterio | Nota | Por qué |
|---|---|---|
| hook_0_3s | 4 | Promesa de método con las dos cifras de la ficha en pantalla |
| ritmo | 4 | Calendarios, máscara y barras cambian cada 2–3 s; las tres trampas son un bloque conceptual |
| promesa_cumplida | 5 | Promete la prueba justa y muestra las tres reglas con el código y el resultado de la ficha |
| potencial_loop | 4 | El final vuelve a los dos calendarios idénticos |
| claridad_no_traders | 4 | Explica R², EWMA, walk-forward y máscara común con calendarios |
| honestidad_atlas | 5 | Dice que el margen está en el script (lo ideal es fijarlo antes), que el R² es un promedio de 7 activos y que no hay otros spans documentados |
| audio | 4 | Voz por clonar; un golpe de bajo |
| cta | 4 | Una petición (la ficha en la web) y remite al video completo |
Promedio: **4.25** (≥ 4.0). Hook del Short 4 (≥ 4) y honestidad 5: no descalificado.

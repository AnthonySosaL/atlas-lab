# Experimento #55 — EWMA clásico vs. machine learning (volatilidad) · Tema 3: la línea de código que ganó, palabra por palabra

Estado del guion: **BORRADOR — pendiente de aprobación**
Tema 3 de 3 del experimento #55. Qué aporta frente a los otros temas: el tema 1 cuenta el duelo y la navaja de Occam; el tema 2 explica la comparación justa; este desarma la línea ganadora, `ret.ewm(span=10).std().shift(1)`, pieza por pieza, para que cualquiera entienda qué calcula, y la enlaza con la desviación de 20 días del experimento 52.
Estado del experimento: **parcial** (neutral): en la misma muestra fuera de muestra, el EWMA simple predice mejor la volatilidad (R² 0.175) que el machine learning (0.113) · Serie: D/E (propuesta: mini-serie «La volatilidad sí se predice, la dirección no», #51 → #56) · Relacionado: #51, #52, #54
Datos usados: `experiments.json` (v=55: verdict, analysis, notes, metrics, kpis, params_view, chart.bars, capital.note, period; v=52: metrics y params_view para la desviación de 20 días), `exp_details.json` (v55: algo, code.snippet, filters; v52: code.snippet). No tiene `series/` (no simula cartera) ni fila en la tabla «Con tu capital» (`docs/youtube/*-capital.md`): figura en su sección «Sin curva de capital».
Aviso de datos: el experimento aporta pocas cifras (0.175, 0.113, 0.02, span 10, horizonte 5 d, 7 activos); por eso el video es corto (≈ 4 min).

## Títulos (3 opciones)
1. La línea de código que le ganó al ML, explicada
2. ewm(span=10).std().shift(1): qué calcula, pieza por pieza
3. Cómo medir la volatilidad con una línea (R² 0.175)

## Miniatura (1280×720)
Fondo `#09090b`. La línea de código en grande, en verde `#22c55e` sobre fondo oscuro, con cuatro círculos numerados en rojo `#e11d2a` sobre `ewm`, `span`, `std` y `shift`. Texto enorme blanco: "4 PIEZAS". Texto pequeño: "1 LÍNEA". Logo ATLAS esquina inferior derecha. (No repite el título 1.)

---

## VIDEO LARGO (16:9, ≈ 3.5 min — es una comparación de modelos, sin cuenta simulada)

**[0:00 — Gancho]** (pantalla: la línea de código con cuatro piezas resaltadas)
Esta línea de código le ganó a un modelo de machine learning en pronosticar la volatilidad de los próximos 5 días en siete activos: R² de 0.175 contra 0.113. Tiene cuatro piezas. Te las explico una por una, sin matemáticas pesadas.
> BOCETO: la línea `vewma = ret.ewm(span=10).std().shift(1)` en grande; cuatro piezas que se iluminan con tick; cifras 0.175 y 0.113 abajo. Subtítulo karaoke con "UNA LÍNEA" en rojo.

**[0:20 — De qué experimento hablamos]** (pantalla: rótulo con el número y el nombre)
Este es el experimento #55 de ATLAS Lab: EWMA clásico vs. machine learning (volatilidad). Todos los resultados están en la página del experimento.
> BOCETO: rótulo «EXPERIMENTO #55 · EWMA clásico vs. machine learning (volatilidad)» con whoosh.

**[0:30 — Pieza 1: ret]** (pantalla: serie de retornos diarios)
La primera pieza, ret, son los retornos diarios: cuánto cambió el precio de un día al siguiente, en porcentaje. Un día sube, otro baja. La volatilidad es qué tan grandes son esos cambios, sin importar si son hacia arriba o hacia abajo.
> BOCETO: barras de retornos diarios positivos y negativos; sombreado sobre su tamaño. Texto: «volatilidad = tamaño de los cambios».

**[0:50 — Piezas 2 y 3: ewm y std]** (pantalla: pesos decayendo hacia atrás)
La segunda pieza, std, es la desviación estándar: una forma estándar de medir cuánto se alejan los retornos de su promedio. La tercera, ewm con span 10, es el promedio móvil exponencial: en vez de tratar todos los días por igual, da más peso a los recientes. Lo de ayer pesa más que lo de hace diez días. Juntas, std y ewm dan una medida de volatilidad que reacciona rápido cuando el mercado se agita.
> BOCETO: curva de pesos que decae hacia atrás en el tiempo; la última barra, la más alta; texto «más peso a lo reciente».

**[1:25 — Pieza 4: shift(1)]** (pantalla: reloj y flecha)
La cuarta pieza, shift de 1, mueve todo un día. Así, el valor que se usa hoy se calculó solo con datos hasta ayer. Sin esa pieza, la línea miraría el día de hoy para pronosticar hoy. Es la misma disciplina de «señal del día anterior» que usa todo el programa.
> BOCETO: la serie se desplaza un día hacia la derecha; flecha «solo hasta ayer» con ✓; chip «señal del día anterior».

**[1:50 — Qué predice y qué tan bien]** (pantalla: R² de la ficha)
Esa serie se usa como pronóstico de la volatilidad realizada de los próximos 5 días, y se mide con R², la parte de lo que varía que el modelo logra explicar. Promedio de los siete activos, en los mismos días fuera de muestra: EWMA 0.175, machine learning 0.113. Un R² de 0.175 es modesto, pero positivo, y le ganó a un modelo mucho más complejo.
> BOCETO: barras reales de `chart.bars` (0.175 verde, 0.113 gris) con tick; marca del margen de 0.02.

**[2:20 — Y en el control de riesgo]** (pantalla: tabla del experimento 52)
Esto conecta con el experimento 52, el único de 91 que sirvió. Allí, el control de riesgo con volatilidad objetivo usó un modelo de ML y bajó la caída máxima de −40.3% a −19.2%. Una versión más simple, la desviación estándar de los últimos 20 días, la dejó en −16.1%. No es el mismo método que el EWMA: es una pieza parecida, sin ewm. No probé el EWMA dentro del vol-targeting.
> BOCETO: tarjetas del #52 lado a lado: «ML −19.2% / 0.79» y «Desviación 20 d −16.1% / 0.83»; aviso ámbar «EWMA dentro del vol-targeting: no probado».

**[2:50 — Con tu capital]** (pantalla: aviso)
Este experimento no simula una cartera, así que no hay un resultado en dinero que escalar a $10,000 o $100,000. Mide qué método pronostica mejor la volatilidad.
> BOCETO: tarjeta «Con tu capital» con el texto «sin cuenta simulada: es una comparación de modelos».

**[3:05 — Ficha del experimento #55]** (pantalla: tarjeta con la URL)
Ficha del experimento 55. Estado: parcial, neutral. Cifra clave: R² de 0.175 del EWMA contra 0.113 del machine learning. Filtro que decidió: el machine learning no supera al EWMA por el margen de 0.02. Lección: para pronosticar volatilidad, empieza por una línea. Revísalo completo en atlas-lab-one.vercel.app/e/55.
> BOCETO: tarjeta «FICHA · EXPERIMENTO #55» con Estado · Cifra clave · Filtro que decidió · Lección, y la URL `atlas-lab-one.vercel.app/e/55` en grande.

**[3:25 — Cierre]**
Contenido educativo, no es asesoría financiera. El trading no se promete: se prueba.
> BOCETO: fundido a la frase de marca en blanco sobre negro; logo ATLAS.

---

## SHORT (9:16, ≈ 41 s) — "Cuatro piezas"
Título del Short: La línea de código que le ganó a la IA, explicada #Shorts

**[0-3 s]** "Una línea de código le ganó al machine learning. Cuatro piezas."
> BOCETO: B-roll vertical de código con overlay 0.6; la línea `ewm(span=10).std().shift(1)` y «0.175 vs 0.113»; golpe de bajo y sacudida.

**[3-14 s]** "Uno: los retornos diarios. Dos: su desviación estándar, que mide qué tan grandes son. Tres: un promedio que da más peso a los días recientes."
> BOCETO: cada pieza se ilumina con tick, 3 s cada una. Ken Burns hacia dentro.

**[14-24 s]** "Cuatro: moverlo un día, para usar solo datos hasta ayer. Resultado: R² de 0.175, contra 0.113 del machine learning."
> BOCETO: la serie se desplaza un día; barras reales con flash al entrar la verde.

**[24-33 s]** "Siete activos, de 2019 a 2024, fuera de muestra. Y el machine learning tenía que ganar por más de 0.02. No llegó."
> BOCETO: 7 chips; marca de 0.02 sobre la barra gris.

**[33-41 s]** "Cuatro piezas, una línea. Experimento 55 completo en el enlace; el video completo está en el canal. No es asesoría financiera."
> BOCETO: vuelve la línea de código brillando (loop con el primer cuadro); abajo «Experimento #55 completo en el enlace»; texto pequeño «El trading no se promete: se prueba.»

---

## Descripción (YouTube) — video largo
https://atlas-lab-one.vercel.app/e/55?utm_source=youtube&utm_medium=video&utm_campaign=exp055-t3
Ficha del experimento #55 (EWMA clásico vs. machine learning, volatilidad): parcial (neutral) · R² del EWMA 0.175 contra 0.113 del machine learning · 7 activos, 2019–2024, horizonte de 5 días · sin cuenta simulada.
La línea `ret.ewm(span=10).std().shift(1)` explicada pieza por pieza y su conexión con el control de riesgo del experimento 52 (−19.2% con ML, −16.1% con desviación de 20 días).
Contenido educativo. No es asesoría financiera ni recomendación de inversión.

## Descripción (YouTube) — Short
https://atlas-lab-one.vercel.app/e/55?utm_source=youtube&utm_medium=short&utm_campaign=exp055-t3
Experimento #55 (EWMA clásico vs. machine learning): parcial · R² 0.175 (EWMA, una línea de código) contra 0.113 (ML). Video completo en el canal. No es asesoría financiera.

## Capítulos
0:00 Gancho · 0:20 De qué experimento hablamos · 0:30 Pieza 1: ret · 0:50 Piezas 2 y 3: ewm y std · 1:25 Pieza 4: shift(1) · 1:50 Qué predice y qué tan bien · 2:20 Y en el control de riesgo · 2:50 Con tu capital · 3:05 Ficha del experimento #55 · 3:25 Cierre

## Etiquetas
EWMA, desviación estándar, volatilidad, pandas, código, shift, machine learning, R2, tutorial de trading, trading con datos, ATLAS Lab

## Rúbrica (autoevaluación, escala 1-5)
| Criterio | Nota | Por qué |
|---|---|---|
| hook_0_3s | 4 | Afirmación fuerte («una línea ganó») con el código y las dos cifras en pantalla |
| ritmo | 4 | Una pieza nueva cada 30 s en el largo y cada 3 s en el Short |
| promesa_cumplida | 5 | Promete explicar cada pieza y lo hace; la cifra de la ficha cierra el argumento |
| potencial_loop | 4 | El final vuelve a la línea de código |
| claridad_no_traders | 4 | Define retornos, desviación estándar, promedio exponencial y rezago sin fórmulas |
| honestidad_atlas | 5 | Aclara que el EWMA no se probó dentro del vol-targeting, que el 20 días es otra pieza y que no hay cuenta simulada |
| audio | 4 | Voz por clonar; un golpe de bajo |
| cta | 4 | Una petición (la ficha en la web) y remite al video completo |
Promedio: **4.25** (≥ 4.0). Hook del Short 4 (≥ 4) y honestidad 5: no descalificado.

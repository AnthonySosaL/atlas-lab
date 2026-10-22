# Experimento #47 — Arbitraje estadístico (residuo PCA)

Estado del guion: **BORRADOR — pendiente de aprobación**
Estado del experimento: **murió** (No sirvió) · Serie: sin asignar en `plan-series.md`; propuesta: B ampliada, tras #46 y antes de #48 · Relacionado: #50 (la lección sobre datos, costos y amplitud)
Datos usados: `experiments.json` (v=47: verdict, analysis, notes, metrics, kpis, params_view, period), `exp_details.json` (algo, code.snippet, filters), `series/20260610_142756_stat-arb-pca-residual-v47.json` (curva 0 = estrategia, 1 = «sin reglas de prop firm», 2 = sin estrategia) y la tabla «Con tu capital» (`docs/youtube/*-capital.md`) (fila #47).

## Títulos (3 opciones)
1. La técnica institucional por excelencia, probada: −10.1%
2. Arbitraje estadístico, 15 activos: la cuenta duró 876 días
3. Stat-arb al estilo Avellaneda y Lee: Sharpe −0.58 y −0.69

## Miniatura (1280×720)
Fondo `#09090b`. A la izquierda, silueta de edificio de oficinas (verde tenue, un "fondo") y a la derecha un gráfico de 15 puntos dispersos. Texto enorme rojo `#e11d2a`: "Sharpe −0.58". Texto pequeño blanco: "15 ACTIVOS". Logo ATLAS en la esquina inferior izquierda. (No repite el título 1.)

---

## VIDEO LARGO (16:9, ≈ 6 min — la cuenta duró 876 días)

**[0:00 — Gancho]** (pantalla: "TÉCNICA INSTITUCIONAL" y debajo un contador que baja a −10.1%)
Esta es la técnica institucional por excelencia: el arbitraje estadístico. La que se asocia a los fondos cuantitativos. La puse a prueba con una cesta de 15 activos y la cuenta simulada se cortó a los 876 días, con una pérdida de 10.1%. Sharpe de −0.58 entre 2014 y 2024, y de −0.69 en 2007–2013, años que la estrategia nunca vio. ¿Por qué lo que se usa en un fondo no se sostiene en una cuenta de operador minorista?
> BOCETO: título animado "ARBITRAJE ESTADÍSTICO" y la curva real (serie curva 0) cayendo; contador −10.1% en rojo; chip "15 ACTIVOS". Sacudida de pantalla solo en el −10.1%.

**[0:40 — La idea]** (pantalla: 15 líneas que comparten un movimiento común; una se desvía)
La idea viene de un trabajo de Avellaneda y Lee de 2010. Casi todos los activos comparten un movimiento común, el del mercado. Si le restas ese movimiento a cada activo, lo que queda es su residuo, su parte propia. La apuesta es que ese residuo, cuando se estira, regresa. Cada activo se compara con el factor común, se acumula su residuo de 60 días, y cuando su z-score pasa de 1.5 hacia arriba o hacia abajo, vendo en corto el estirado y compro el hundido. Dato clave de honestidad: el factor común es una aproximación, la media estandarizada de la cesta, no un PCA completo; el PCA es el método estadístico que lo calcularía de forma más fina.
> BOCETO: ilustración rotulada (no es dato real): 15 líneas grises con una verde que se separa del grupo y vuelve; flechas "compro" y "vendo". Recuadro de code.snippet (3 líneas: factor = media estandarizada · residuo 60 d · |z| > 1.5).

**[1:30 — Una analogía: el salón de clases]** (pantalla: aula con ruido general y un alumno que destaca)
Piensa en un salón de clases. Si hoy hay ruido en toda la clase, no sirve mirar a cada alumno por separado: el ruido es del grupo. Lo interesante es el alumno que hace ruido por su cuenta cuando el grupo está tranquilo. El arbitraje estadístico hace lo mismo con los activos: resta el movimiento del grupo y se queda con lo propio de cada uno. Si ese residuo se disparó, apuesta a que va a calmarse. Para que valga, el factor común tiene que estar bien medido; aquí es una aproximación, así que parte del ruido del grupo puede quedarse dentro del residuo.
> BOCETO: ilustración rotulada (no es dato real): aula con 15 siluetas; el "ruido general" como onda gris, un alumno con onda verde que se separa; flecha "el residuo regresa".

**[2:20 — Cómo se probó]** (pantalla: checklist de reglas + línea de tiempo)
Cesta de 15 activos entre 2014 y 2024 y de 8 entre 2007 y 2013, el periodo fuera de muestra. Beta móvil de 250 días, pesos acotados a ±3 y exposición bruta de 1. Apalancamiento 2, kill-switch de −3%, deslizamiento de 0.2% y las posiciones decididas un día antes, sin mirar el futuro. Además, las reglas de una prop firm: la cuenta se corta con una caída máxima de 10% o una pérdida de 5% en un día. Costos: lo único modelado es el deslizamiento del corte automático, sin spread por rotación.
> BOCETO: checklist con ✓ en "señal del día anterior"; ámbar en "PCA aproximado" y "costos mínimos". Barra de tiempo: 2007–2013 (8 activos, gris) y 2014–2024 (15 activos, blanco).

**[3:00 — Resultados]** (pantalla: 6 tarjetas KPI + curva)
Retorno total: −10.1%. Sharpe, la ganancia por unidad de riesgo, que debería ser positiva: −0.58 en 2014–2024 y −0.69 en 2007–2013. En 2007–2013 la cesta tenía 8 activos y en 2014–2024, 15: son dos cestas distintas, así que comparar los periodos es un indicio y no una réplica exacta. Drawdown máximo, la mayor caída desde un pico: −12.2%. La cuenta duró 876 días, hasta el 23 de julio de 2017. Y no sobrevive en ningún periodo. En la curva, con $100,000 llegó a $102,404 y se hundió hasta $89,924.
> BOCETO: tarjetas `kpis` en rojo con tick; luego curva 0 de la serie con zoom al máximo ($102,404) y al corte ($89,924), sello ✕ en el 23-jul-2017.

**[3:45 — Por qué falla]** (pantalla: texto de la ficha + comparación fondo vs minorista)
El veredicto de la ficha es corto: sin datos tick ni acceso directo, los residuos no pagan los costos. Los datos tick son cada cambio de precio, y el acceso directo es operar sin intermediarios. Es decir, la técnica puede ser correcta en el papel y aun así no alcanzar para quien la ejecuta con otros medios.
> BOCETO: pantalla dividida "Fondo" vs "Esta prueba": datos (tick vs diario), costos (acceso directo vs deslizamiento 0.2%), amplitud (miles vs 15 activos). Barras comparativas sin cifras inventadas: solo los números de la ficha.

**[4:10 — Qué preguntar cuando dicen "lo usan los fondos"]** (pantalla: tres iconos: datos, costos, amplitud)
Al cierre del programa, en el experimento 50, lo resumí así: la ventaja de los fondos cuantitativos no está en la matemática, que es pública y la probamos. Cuando oigas que una técnica la usan los fondos, pregunta qué hace falta para replicarla. Primero, datos: aquí trabajé con cierres diarios, no con cada cambio de precio. Segundo, costos: un fondo opera con acceso directo, y esta prueba modela solo un deslizamiento de 0.2% en el corte automático. Tercero, amplitud: miles de instrumentos frente a 15. Eso no dice que la técnica sea mala. Dice que la ventaja no viene incluida con la fórmula, y que copiar la fórmula sin lo demás no es copiar la técnica.
> BOCETO: tres tarjetas "pregunta" (datos, costos, amplitud) con las cifras de esta prueba a la derecha (diario · 0.2% · 15 activos). Tick sonoro al aparecer cada una.

**[5:05 — Con tu capital]** (pantalla: tarjeta "Con tu capital")
Con $10,000, la cuenta simulada termina en −$1,008. Con $100,000, en −$10,076. La referencia, comprar y esperar la cesta sin estrategia en esas mismas fechas, queda prácticamente plana: −$10 con $10,000 y −$99 con $100,000. La estrategia perdió dinero en un periodo en que no hacer nada no perdía casi nada.
> BOCETO: tarjeta de capital con tres filas; la referencia en gris, casi en cero, contrasta con las dos cifras rojas. Aviso: "Simulación, no es una promesa".

**[5:30 — Conclusión y cierre]** (pantalla: logo)
La técnica institucional por excelencia no se sostiene con datos y costos de un operador minorista. No es que la matemática esté mal: es que la ventaja está en otra parte. Todos los datos en atlas-lab-one.vercel.app, experimento 47. Si quieres que pruebe otra técnica de fondos, dímelo en los comentarios. Contenido educativo, no es asesoría financiera. El trading no se promete: se prueba.
> BOCETO: la curva termina en el sello ✕; fundido a la frase de marca.

---

## SHORT (9:16, ≈ 44 s) — "La técnica de los fondos"
Título del Short: La técnica de los fondos, con 15 activos: −10.1% #Shorts

**[0-3 s]** "La técnica de los fondos: menos 10.1%."
> BOCETO: B-roll vertical de oficina financiera con overlay 0.6; texto gigante "−10.1%" rojo y "15 ACTIVOS" debajo; golpe de bajo + sacudida. Subtítulos karaoke en mayúsculas.

**[3-14 s]** "Se llama arbitraje estadístico: a cada activo le restas el movimiento común, y apuestas a que lo que sobra va a regresar. Compras el hundido, vendes el estirado. Quince activos."
> BOCETO: 15 líneas grises y una que se desvía (ilustración); flecha "regresa"; chips "compro / vendo" con tick. Ken Burns hacia dentro.

**[14-27 s]** "Resultado: la cuenta simulada se cortó a los 876 días. Sharpe de −0.58 entre 2014 y 2024, y de −0.69 en 2007–2013, un periodo que nunca vio."
> BOCETO: dos barras de Sharpe (−0.58, −0.69) hacia abajo en rojo; etiqueta "nunca lo vio" en la segunda. Whoosh + flash al entrar.

**[27-35 s]** "La ventaja de los fondos no es la matemática, que es pública. Son los datos, los costos y la amplitud: miles de instrumentos. Yo tenía quince."
> BOCETO: tres iconos (datos, costos, amplitud) con contador "miles" vs "15"; la curva real de la serie (curva 0) cae por detrás a 0.12 de opacidad.

**[35-44 s]** "La técnica de los fondos no se copia: se prueba. Con 15 activos, menos 10.1%. El video completo está en el canal. No es asesoría financiera."
> BOCETO: congela en "−10.1%" y "15 ACTIVOS" (empalma con el primer cuadro: loop); texto pequeño "El trading no se promete: se prueba."

---

## Descripción (YouTube)
Probé el arbitraje estadístico por residuos (estilo Avellaneda y Lee, 2010) en una cesta de 15 activos: factor común aproximado, z-score del residuo de 60 días, apalancamiento x2 y señal del día anterior. La cuenta simulada se cortó a los 876 días con −10.1% y Sharpe de −0.58 (2014-2024) y −0.69 (2007-2013).
Datos completos: https://atlas-lab-one.vercel.app (experimento #47)
Contenido educativo. No es asesoría financiera ni recomendación de inversión.

Capítulos: 0:00 Gancho · 0:40 La idea · 1:30 Una analogía: el salón de clases · 2:20 Cómo se probó · 3:00 Resultados · 3:45 Por qué falla · 4:10 Qué preguntar cuando dicen "lo usan los fondos" · 5:05 Con tu capital · 5:30 Conclusión y cierre

Etiquetas: arbitraje estadístico, stat arb, Avellaneda y Lee, fondos cuantitativos, PCA, reversión a la media, backtest, Sharpe ratio, fuera de muestra, trading con datos, ATLAS Lab, estrategia de trading

## Rúbrica (autoevaluación, escala 1-5)
| Criterio | Nota | Por qué |
|---|---|---|
| hook_0_3s | 4 | "Técnica de los fondos" + −10.1% y 15 activos en pantalla |
| ritmo | 4 | Cambio visual cada 2–3 s; el bloque de la idea es el más abstracto |
| promesa_cumplida | 5 | El gancho promete una pérdida y el resultado la muestra con fechas |
| potencial_loop | 4 | El último cuadro repite "−10.1%" y "15 ACTIVOS" del primero |
| claridad_no_traders | 4 | Explica residuo, factor común, PCA, Sharpe y fuera de muestra |
| honestidad_atlas | 5 | Declara que el PCA es una aproximación y que el costo modelado es mínimo |
| audio | 4 | Voz por clonar; un solo golpe de bajo al inicio |
| cta | 4 | Una petición y remite al video completo |
Promedio: **4.25** (≥ 4.0). Hook del Short 4 (≥ 4) y honestidad 5: no descalificado.

# Experimento #35 — Curva de tasas como filtro · Tema 2: la prueba A/B de una regla extra

Estado del guion: **BORRADOR — pendiente de aprobación**
Tema 2 de 3 del experimento #35. Qué aporta frente a los otros temas: es el MÉTODO. El tema 1 cuenta la historia de las fechas (cuenta muerta en 2016, curva invertida en 2019) y el tema 3 explica por qué una variable que pesa en un modelo no sirve como regla; este tema enseña cómo se compara una regla nueva contra una versión idéntica sin ella, con el criterio escrito de antemano.
Estado del experimento: **MURIÓ** (la curva no mejora ningún periodo; la cuenta se corta el 11-nov-2016)
Serie: **G — Construyendo un bot (y por qué murió)**
Datos usados: `experiments.json` (v=35: analysis, verdict, metrics, kpis, params_view, capital) · `exp_details.json` (algo, filters) · `series/20260610_140833_curva-de-tasas-como-filtro-v35.json` (curva 1 = estrategia hasta la quiebra; curva 2 = «sin reglas de prop firm»; curva 3 = comprar y esperar) · fila #35 de la tabla «Con tu capital» (`docs/youtube/`).

## Títulos (opciones)
1. Con y sin curva de tasas, el mismo Sharpe: −0.57
2. Cómo probar una regla extra sin engañarte (caso real)
3. Dos versiones de mi bot, cero diferencia: −0.57 y 0.00

## Miniatura
Fondo #09090b. Dos tarjetas gemelas rotuladas «A» y «B»; en ambas, «−0.57» en rojo; entre ellas, un «=» blanco gigante. Texto inferior: «EMPATE». Logo ATLAS arriba a la derecha. (No repite las palabras del título.)

---

## VIDEO LARGO (16:9, ≈ 5:57)

**[0:00 — Gancho]** (pantalla — BOCETO: dos tarjetas A y B; el Sharpe de cada una cuenta hasta −0.57 y aparece un «=» rojo entre ambas)
Probé mi bot de dos maneras: una con la curva de tasas como regla extra y otra sin ella. Sharpe de la primera: menos 0.57. Sharpe de la segunda: menos 0.57. Idénticos. Y ese empate es el resultado que más enseña.

**[0:17 — Este es el experimento #35]** (pantalla — BOCETO: rótulo «EXPERIMENTO #35 · CURVA DE TASAS COMO FILTRO» con el logo ATLAS; la URL pequeña debajo)
Este es el experimento #35 de ATLAS Lab: Curva de tasas como filtro. Todos los resultados están en la página del experimento. Hoy no hablo de la curva en sí, sino de cómo se prueba una regla extra para saber si de verdad ayuda.

**[0:34 — La pregunta]** (pantalla — BOCETO: dos carriles paralelos, «A: filtro base» y «B: filtro base + curva invertida»; chips: ×2 · señal de ayer · corte −3% · deslizamiento 0.2%)
Si le añado una regla a mi bot, ¿mejora? Para saberlo se comparan dos versiones idénticas en todo menos en esa regla. La versión A es el filtro base: salir del mercado cuando el VIX, el índice del miedo, supera 28 y el crédito cae bajo su media de 40 días. La versión B es la misma más una regla: si la curva de tasas está invertida, es decir, si el bono a 10 años rinde menos que la letra a 3 meses, fuera del mercado. Lo demás no cambia: apalancamiento ×2, decisión con la señal de ayer, corte automático del 3% y un deslizamiento de 0.2%, que es el costo de ejecutar la salida a un precio algo peor que el esperado.

**[1:22 — El criterio, escrito antes]** (pantalla — BOCETO: tarjeta con un candado, «sirve solo si mejora el Sharpe en los dos periodos»; debajo, dos periodos: 2014–2024 y 2007–2013 «fuera de muestra»)
Segundo ingrediente: la vara de medir se fija antes de mirar los resultados. Aquí es: la regla sirve solo si mejora el Sharpe, la ganancia por unidad de riesgo, en los dos periodos, 2014–2024 y 2007–2013. El segundo es fuera de muestra, es decir, años que el bot no vio al diseñarse. Si el criterio no se escribe antes, después siempre se puede elegir el periodo en el que la regla luce bien.

**[1:51 — El resultado: un empate]** (pantalla — BOCETO: tabla con dos columnas; las celdas gemelas se enlazan con un «=» rojo y aparece el rótulo «mejora en ambos = falso»)
| Periodo | A: sin curva | B: con curva |
|---|---|---|
| 2014–2024 (hasta la quiebra) | −0.57 | −0.57 |
| 2007–2013 | 0.00 | 0.00 |
Empate en los dos periodos. La regla del script, mejorar en ambos, da falso. Fíjate en que la curva ni empeora ni mejora: no cambia nada.

**[2:07 — Cómo leer un empate]** (pantalla — BOCETO: línea de tiempo con una ✕ roja el 11-nov-2016 (día 659) y un marcador verde el 27-mar-2019; segunda escena: calendario de 2007 con una barra de marzo a agosto y el rótulo «2.3% de los días»)
Un empate exacto no significa que la regla sea neutral. Significa que no tuvo ocasión de actuar. En 2014–2024 la cuenta muere el 11 de noviembre de 2016, tras 659 días, y la curva se invierte por primera vez el 27 de marzo de 2019: la regla habría actuado más de dos años después de la muerte. Y en 2007–2013 estuvo invertida solo el 2.3% de los días, entre marzo y agosto de 2007. Cuando A y B dan exactamente lo mismo, la primera sospecha es que la regla nunca se activó a tiempo.

**[2:43 — Un control que sí discrimina]** (pantalla — BOCETO: tarjeta «control: sin las reglas de la prop firm»; dos barras, −0.04 (A) y −0.13 (B), la segunda más larga hacia abajo)
Cuando un test no discrimina, se busca un control en el que la regla sí pueda actuar. Aquí consiste en quitar las reglas de la prop firm, la empresa de fondeo que cierra la cuenta si cae 10%, para que la cuenta no muera y llegue hasta 2024. Ahí sí hay diferencia, y va en contra: sin curva, el Sharpe es menos 0.04; con curva, menos 0.13. Añadir la regla empeora. Es un control hipotético, porque con las reglas reales la cuenta ya está cerrada, pero muestra el sentido del efecto.

**[3:19 — ¿Resiste con otros supuestos?]** (pantalla — BOCETO: dos tarjetas, «supuesto base» y «salida medida, φ = 0.94»; la segunda muestra «11-nov-2016 · −0.58 en ambas» · «2007–2013: 0.04» · «sin reglas: 0.02 / −0.05»)
Una buena prueba se repite cambiando un supuesto, para ver si la conclusión aguanta. Aquí se repitió con la salida medida el día del disparo. El φ, que mide qué parte de ese día se come el bot, es 0.94: con datos horarios, el bot esquiva solo cerca del 6% del movimiento. Resultado: la cuenta muere igual el 11 de noviembre de 2016, con y sin curva, con Sharpe menos 0.58. En 2007–2013 da 0.04. Y sin las reglas de la prop firm, 0.02 sin curva y menos 0.05 con curva. Otro supuesto, la misma conclusión: la curva no mejora.

**[3:58 — El marcador de filtros]** (pantalla — BOCETO: checklist de exp_details.filters: 2014–2024 ✗ · 2007–2013 ✗ · «mejora en ambos periodos» = falso ✗ · señal rezagada ✓ · Deflated Sharpe — · costos completos —)
El tablero de filtros del laboratorio lo resume. En 2014–2024 no pasa, porque la cuenta muere antes de que la curva se invierta. En 2007–2013 tampoco, con Sharpe 0.00 en ambas versiones. Pasa uno: la señal está rezagada un día y no mira el futuro. El Deflated Sharpe, la prueba que descuenta la suerte de haber probado muchas ideas, no se aplicó, y los costos completos tampoco: solo hay deslizamiento de 0.2% en el corte, sin spread ni los 3 puntos básicos por rotación que usa el laboratorio.

**[4:32 — La receta A/B en cinco pasos]** (pantalla — BOCETO: cinco tarjetas numeradas que se marcan con tick: misma máquina · un solo cambio · criterio antes · dos periodos · un control)
La receta que te llevas. Uno: la misma máquina para A y para B. Dos: un solo cambio entre ambas. Tres: el criterio escrito antes de mirar. Cuatro: al menos dos periodos, uno que el sistema no haya visto. Cinco: un control donde la regla pueda actuar y otro supuesto para ver si la conclusión aguanta. Y una pregunta final que lo resume todo: ¿se activó la regla antes de que importara?

**[5:01 — Con tu capital]** (pantalla — BOCETO: tarjeta «Con tu capital»: $100,000 → −$10,368 contra −$5,766, «hasta el 11-nov-2016»; debajo, línea hipotética «sin reglas»: −6.1% y caída máxima −19.7%)
Con $100,000 simulados, la cuenta base se cierra con −$10,368 el 11 de noviembre de 2016. Comprar y esperar la misma cesta, en las mismas fechas: −$5,766. Sin las reglas de la prop firm, la misma estrategia habría terminado 2024 en −6.1%, con una caída máxima de −19.7%, pero esa línea es hipotética porque la cuenta real se cierra ese día. Es una simulación histórica, no una promesa; con $10,000 serían la décima parte.

**[5:30 — Ficha del experimento #35]** (pantalla — BOCETO: tarjeta de ficha con sello «NO SIRVIÓ», cuatro líneas y la URL atlas-lab-one.vercel.app/e/35; logo ATLAS)
Ficha del experimento #35. Estado: no sirvió, la curva no mejora ningún periodo. Cifra clave: Sharpe de menos 0.57 con y sin curva en 2014–2024, y 0.00 en 2007–2013. Filtro que decidió: «mejora en ambos periodos», que dio falso. Lección: un empate exacto suele decir que la regla nunca se activó a tiempo. Revísalo completo en atlas-lab-one.vercel.app/e/35. Contenido educativo, no es asesoría financiera. El trading no se promete: se prueba.

---

## SHORT (9:16, ≈ 53 s)
Título del Short: Con y sin curva de tasas: el mismo Sharpe, −0.57 #shorts
Fórmula visual (CLAUDE.md del canal): b-roll vertical real con overlay 0.6, Ken Burns alternado, subtítulos karaoke en MAYÚSCULAS con cifras en rojo, ticker arriba, whoosh + flash en cada corte; golpe (bass + sacudida) solo en 0-3 s y 14-28 s.

**[0-3 s]** "Con la curva de tasas: Sharpe menos 0.57. Sin la curva: menos 0.57."
- Boceto: b-roll de dos balanzas idénticas (kb=in); dos cifras «−0.57» en rojo unidas por un «=» blanco; golpe de bass.

**[3-14 s]** "Probé mi bot con y sin una regla extra: salir del mercado si la curva de tasas se invierte. Todo igual salvo esa regla."
- Boceto: dos carriles A y B; la regla extra resaltada en el carril B.

**[14-28 s]** "En 2014 a 2024: idénticos. En 2007 a 2013: cero en ambos. ¿Por qué? La cuenta murió el 11 de noviembre de 2016 y la curva se invirtió por primera vez el 27 de marzo de 2019."
- Boceto: línea de tiempo con ✕ el 11-nov-2016 y marcador el 27-mar-2019; sacudida al aparecer la ✕.

**[28-40 s]** "Un empate exacto suele decir que la regla nunca se activó a tiempo. Sin las reglas de la prop firm sí hay diferencia, pero en contra: de menos 0.04 a menos 0.13."
- Boceto: dos barras −0.04 y −0.13, la segunda más larga; rótulo «EMPATE = NUNCA ACTUÓ».

**[40-50 s]** "Una sola variable, el criterio antes y dos periodos. Video completo en el canal. Experimento 35 completo en el enlace. No es asesoría financiera. ¿Con curva o sin curva? Menos 0.57."
- Boceto: sello «NO SIRVIÓ»; logo ATLAS y «EXPERIMENTO #35 · ENLACE». Loop: la pregunta final se responde con el gancho «menos 0.57».

## Descripción (YouTube)
**Video largo**
https://atlas-lab-one.vercel.app/e/35?utm_source=youtube&utm_medium=video&utm_campaign=exp035-t2
Ficha del experimento #35 (curva de tasas como filtro): no sirvió. Sharpe −0.57 con y sin curva en 2014–2024, 0.00 en 2007–2013 y, sin reglas de prop firm, −0.04 sin curva frente a −0.13 con curva.
Cómo se compara una regla extra contra una versión idéntica sin ella: criterio escrito antes, dos periodos, un control y otro supuesto. La cuenta muere el 11 de noviembre de 2016; la curva se invierte por primera vez el 27 de marzo de 2019.

Capítulos: 0:00 Gancho · 0:17 Este es el experimento #35 · 0:34 La pregunta · 1:22 El criterio, escrito antes · 1:51 El resultado: un empate · 2:07 Cómo leer un empate · 2:43 Un control que sí discrimina · 3:19 ¿Resiste con otros supuestos? · 3:58 El marcador de filtros · 4:32 La receta A/B en cinco pasos · 5:01 Con tu capital · 5:30 Ficha del experimento #35

**Short**
https://atlas-lab-one.vercel.app/e/35?utm_source=youtube&utm_medium=short&utm_campaign=exp035-t2
Experimento #35: con y sin curva de tasas, Sharpe −0.57 en ambos (2014–2024). No sirvió.

Contenido educativo. No es asesoría financiera ni recomendación de inversión.

Etiquetas: prueba A/B, curva de tasas, regla extra, backtest, Sharpe ratio, fuera de muestra, bot de trading, prop firm, VIX, estrategia de trading, ATLAS Lab

## Rúbrica (autoevaluación — criterios del CLAUDE.md del canal, 1-5)
| hook_0_3s | ritmo | promesa_cumplida | potencial_loop | claridad_no_traders | honestidad_atlas | audio | cta |
|---|---|---|---|---|---|---|---|
| 5 | 4 | 5 | 4 | 4 | 5 | 4 | 4 |

Promedio: **4.38** → cumple el corte (≥ 4.0; hook ≥ 4 y honestidad 5).
Notas: el hook es una paradoja verificable (dos versiones, la misma cifra). Punto débil: «fuera de muestra» y «φ» se explican en una frase cada uno; en el Short se omiten y el empate se apoya en las fechas.

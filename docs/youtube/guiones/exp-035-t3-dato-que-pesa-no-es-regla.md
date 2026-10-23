# Experimento #35 — Curva de tasas como filtro · Tema 3: un dato que pesa en un modelo no es una regla

Estado del guion: **BORRADOR — pendiente de aprobación**
Tema 3 de 3 del experimento #35. Qué aporta frente a los otros temas: es el CONCEPTO. El tema 1 cuenta el calendario (2016 contra 2019) y el tema 2 enseña la prueba A/B; este tema explica la diferencia entre «pesar en un modelo de aprendizaje automático» y «servir como regla de salida», con el modelo del experimento 24 como origen de la idea.
Estado del experimento: **MURIÓ** (la curva no mejora ningún periodo; la cuenta se corta el 11-nov-2016)
Serie: **G — Construyendo un bot (y por qué murió)**
Datos usados: `experiments.json` (v=35: description, analysis, notes, metrics, kpis, capital; v=24: verdict, notes, metrics, kpis) · `exp_details.json` (v35: algo, filters) · `series/20260610_140833_curva-de-tasas-como-filtro-v35.json` · fila #35 de la tabla «Con tu capital» (`docs/youtube/`).

## Títulos (opciones)
1. La variable estrella de mi IA, como regla: Sharpe −0.57
2. El dato más pesado de mi modelo de IA, probado como regla
3. Machine learning dijo «curva de tasas». Los datos dijeron 0.00

## Miniatura
Fondo #09090b. A la izquierda, un gráfico de barras con una barra alta resaltada en verde; a la derecha, esa misma barra dentro de un semáforo en rojo con una ✕. Texto grande: «PESA ≠ SIRVE». Logo ATLAS en la esquina inferior derecha. (No repite las palabras de los títulos.)

---

## VIDEO LARGO (16:9, ≈ 4:51)

**[0:00 — Gancho]** (pantalla — BOCETO: una barra de «importancia» que sube hasta el primer puesto de un ranking; al pasarla a un semáforo se pone en rojo y aparece «Sharpe −0.57»)
La curva de tasas era una de las variables que más pesaban en mi modelo de inteligencia artificial. La convertí en una regla para sacar a mi bot del mercado. Resultado: Sharpe de menos 0.57, exactamente igual que sin ella.

**[0:16 — Este es el experimento #35]** (pantalla — BOCETO: rótulo «EXPERIMENTO #35 · CURVA DE TASAS COMO FILTRO» con el logo ATLAS; la URL pequeña debajo)
Este es el experimento #35 de ATLAS Lab: Curva de tasas como filtro. Todos los resultados están en la página del experimento. Este video trata de una confusión muy común: creer que un dato importante para un modelo es, por eso, una buena regla.

**[0:34 — Tres cosas que se confunden]** (pantalla — BOCETO: tres tarjetas en fila: «PESA en un modelo» · «PREDICE» · «SIRVE COMO REGLA»; la tercera brilla con una interrogación)
Un modelo de aprendizaje automático es un programa que aprende de datos del pasado combinando muchas variables a la vez. Cuando dice que una variable «pesa» mucho, quiere decir que la usa bastante para decidir. Eso no es lo mismo que predecir, y tampoco es lo mismo que servir como regla. Son tres cosas distintas, y cada una necesita su propia prueba.

**[0:59 — Una analogía]** (pantalla — BOCETO: ilustración rotulada, no es dato real: un plato con sal, pimienta y otras especias; la sal tiene la flecha más grande; al lado, un plato con solo sal tachado)
Piensa en la sal de una receta. Pesa mucho en el sabor del plato. Pero un plato hecho solo de sal no se come. En el modelo, la variable trabaja acompañada de muchas otras; como regla aislada, tiene que cargar con todo el peso.

**[1:16 — De dónde salió la idea]** (pantalla — BOCETO: tarjeta del experimento 24 con sus tres cifras: «Sharpe −1.34 · −7.0% · cuenta cortada a los 89 días (15-ene-2015)»; flecha hacia el experimento 35)
La idea salió del modelo del experimento 24, el régimen supervisado residual. Entre los datos más importantes de ese modelo estaba la curva de tasas. Pero ese modelo, probado de 2014 a 2024, dio un Sharpe de menos 1.34 y una pérdida de 7.0%: la cuenta se cortó a los 89 días, el 15 de enero de 2015. El Sharpe es la ganancia por unidad de riesgo; negativo significa que pierde. O sea, el modelo no sirvió, y lo que dejó fue una pista. Una pista no es un resultado: se prueba.

**[1:52 — De la pista a la regla]** (pantalla — BOCETO: la fórmula «TNX − IRX < 0 = curva invertida → fuera del mercado» sobre el carril del filtro base; chips: VIX > 28 · crédito bajo su media de 40 días · ×2 · señal de ayer)
Convertir la pista en regla es sencillo: si el rendimiento del bono a 10 años menos el de la letra a 3 meses es negativo, la curva está invertida y el bot sale del mercado. Se añade al filtro base, el VIX sobre 28 y el crédito bajo su media de 40 días, con apalancamiento ×2 y decisión con la señal de ayer. Y se compara con y sin la regla en 2014–2024 y en 2007–2013, años que el bot no vio al diseñarse.

**[2:25 — El resultado]** (pantalla — BOCETO: tabla de tres filas; las celdas A y B de cada fila se unen con «=» salvo la última, donde la segunda es más larga y roja)
| Periodo | Sin curva | Con curva |
|---|---|---|
| 2014–2024 (hasta la quiebra) | −0.57 | −0.57 |
| 2007–2013 | 0.00 | 0.00 |
| 2014–2024 sin reglas de prop firm | −0.04 | −0.13 |
La regla no mejora ningún periodo. En el control sin las reglas de la prop firm, la empresa de fondeo que cierra la cuenta si cae 10%, incluso empeora de menos 0.04 a menos 0.13.

**[2:46 — Por qué una variable pesa y no sirve]** (pantalla — BOCETO: dos escenas: calendario de 2007 con el 2.3% de los días iluminado entre marzo y agosto, y línea de tiempo con la ✕ del 11-nov-2016 antes del marcador del 27-mar-2019)
Aquí los datos señalan una razón concreta, la del tiempo. La curva estuvo invertida solo el 2.3% de los días en 2007–2013, de marzo a agosto de 2007. Y en 2014–2024 se invirtió por primera vez el 27 de marzo de 2019, mucho después de que la cuenta muriera. Una regla que casi nunca se activa, o que se activa tarde, no puede mejorar nada, por muy importante que fuera la variable dentro de un modelo.

**[3:16 — Lo que no dice este resultado]** (pantalla — BOCETO: dos columnas, «lo que dice» con tick y «lo que no dice» con aviso amarillo; texto: «una regla · un filtro base · ×2 · señal de ayer»)
Conviene ser preciso. Se probó una regla, sobre un filtro base, con ×2 y con la señal de ayer. No demuestra que la curva de tasas no sirva para otras cosas. Y falta rigor en dos cosas que el tablero de filtros marca como no aplicadas: el Deflated Sharpe, la prueba que descuenta la suerte de haber probado muchas ideas, y los costos completos; solo hay deslizamiento de 0.2% en el corte automático.

**[3:44 — Tres preguntas ante «la variable más importante»]** (pantalla — BOCETO: tres tarjetas que se marcan: «¿importante para qué?» · «¿se probó como regla en años que no vio?» · «¿cuántas variables se miraron antes de elegir esta?»)
La próxima vez que alguien te muestre «la variable más importante» de un modelo, pregunta tres cosas. Primera: ¿importante para qué, para predecir o para una regla? Segunda: ¿se probó como regla, en años que el sistema no vio? Tercera: ¿cuántas variables se miraron antes de escoger esta? Con muchas variables, siempre hay alguna que destaca por azar.

**[4:07 — Con tu capital]** (pantalla — BOCETO: tarjeta «Con tu capital»: $100,000 → −$10,368 contra −$5,766, «hasta el 11-nov-2016»)
Con $100,000 simulados, la cuenta base se cierra con −$10,368 el 11 de noviembre de 2016. Comprar y esperar la misma cesta, en las mismas fechas: −$5,766. Es una simulación histórica, no una promesa; con $10,000 serían la décima parte.

**[4:24 — Ficha del experimento #35]** (pantalla — BOCETO: tarjeta de ficha con sello «NO SIRVIÓ», cuatro líneas y la URL atlas-lab-one.vercel.app/e/35; logo ATLAS)
Ficha del experimento #35. Estado: no sirvió. Cifra clave: Sharpe de menos 0.57 con y sin la curva en 2014–2024, y 0.00 en 2007–2013. Filtro que decidió: la regla «mejora en ambos periodos», que dio falso. Lección: que un dato pese en un modelo no significa que funcione como regla de salida. Revísalo completo en atlas-lab-one.vercel.app/e/35. Contenido educativo, no es asesoría financiera. El trading no se promete: se prueba.

---

## SHORT (9:16, ≈ 52 s)
Título del Short: El dato más importante de mi IA no sirvió como regla #shorts
Fórmula visual (CLAUDE.md del canal): b-roll vertical real con overlay 0.6, Ken Burns alternado, subtítulos karaoke en MAYÚSCULAS con cifras en rojo, ticker arriba, whoosh + flash en cada corte; golpe (bass + sacudida) solo en 0-3 s y 14-28 s.

**[0-3 s]** "Era de las variables más importantes de mi IA. Como regla: Sharpe menos 0.57."
- Boceto: b-roll de un podio o ranking (kb=in); «−0.57» en rojo gigante; golpe de bass.

**[3-14 s]** "La curva de tasas: el bono a 10 años menos la letra a 3 meses. Si se invierte, fuera del mercado. La idea salió de un modelo de machine learning."
- Boceto: dos barras (10 años / 3 meses) que se cruzan; rótulo «INVERTIDA = FUERA».

**[14-28 s]** "Con la regla: menos 0.57. Sin la regla: menos 0.57. En 2007 a 2013: cero en ambos. La curva solo estuvo invertida el 2.3% de los días, y en 2014 a 2024 se invirtió después de que la cuenta muriera."
- Boceto: dos barras idénticas unidas por «=»; un 2.3% diminuto en un calendario; sacudida al aparecer el «=».

**[28-40 s]** "Sin las reglas de la prop firm, incluso empeora: de menos 0.04 a menos 0.13. Que un dato pese en un modelo no significa que funcione como regla."
- Boceto: dos barras −0.04 y −0.13; sello «PESA ≠ SIRVE».

**[40-48 s]** "Video completo en el canal. Experimento 35 completo en el enlace. No es asesoría financiera. ¿La variable más importante? Sharpe menos 0.57."
- Boceto: sello «NO SIRVIÓ»; logo ATLAS y «EXPERIMENTO #35 · ENLACE». Loop: la pregunta final se responde con el gancho.

## Descripción (YouTube)
**Video largo**
https://atlas-lab-one.vercel.app/e/35?utm_source=youtube&utm_medium=video&utm_campaign=exp035-t3
Ficha del experimento #35 (curva de tasas como filtro): no sirvió. Sharpe −0.57 con y sin curva en 2014–2024, 0.00 en 2007–2013 y, sin reglas de prop firm, −0.04 sin curva frente a −0.13 con curva.
La curva de tasas era una de las variables que más pesaban en el modelo del experimento 24 (Sharpe −1.34). Probada como regla de salida, no mejora ningún periodo: la curva estuvo invertida solo el 2.3% de los días en 2007–2013.

Capítulos: 0:00 Gancho · 0:16 Este es el experimento #35 · 0:34 Tres cosas que se confunden · 0:59 Una analogía · 1:16 De dónde salió la idea · 1:52 De la pista a la regla · 2:25 El resultado · 2:46 Por qué una variable pesa y no sirve · 3:16 Lo que no dice este resultado · 3:44 Tres preguntas ante «la variable más importante» · 4:07 Con tu capital · 4:24 Ficha del experimento #35

**Short**
https://atlas-lab-one.vercel.app/e/35?utm_source=youtube&utm_medium=short&utm_campaign=exp035-t3
Experimento #35: la curva de tasas pesaba en un modelo de IA y, como regla, dio Sharpe −0.57 con y sin ella. No sirvió.

Contenido educativo. No es asesoría financiera ni recomendación de inversión.

Etiquetas: machine learning, importancia de variables, curva de tasas, regla de salida, backtest, Sharpe ratio, bot de trading, filtro macro, inteligencia artificial, estrategia de trading, ATLAS Lab

## Rúbrica (autoevaluación — criterios del CLAUDE.md del canal, 1-5)
| hook_0_3s | ritmo | promesa_cumplida | potencial_loop | claridad_no_traders | honestidad_atlas | audio | cta |
|---|---|---|---|---|---|---|---|
| 4 | 4 | 5 | 4 | 5 | 5 | 4 | 4 |

Promedio: **4.38** → cumple el corte (≥ 4.0; hook ≥ 4 y honestidad 5).
Notas: el hook contrasta «variable estrella» con un Sharpe negativo. Punto débil: «aprendizaje automático» se define en una frase; la analogía de la sal está rotulada como ilustración y no usa cifras.

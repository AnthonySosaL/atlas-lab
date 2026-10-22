# Experimento #35 — Curva de tasas como filtro

Estado del guion: **BORRADOR — pendiente de aprobación**
Estado del experimento: **MURIÓ** (la curva no mejora ningún periodo; la cuenta se corta el 11-nov-2016)
Serie: **G — Construyendo un bot (y por qué murió)**
Datos usados: `experiments.json` (v=35: analysis, verdict, notes, metrics, kpis, params_view, capital) · `exp_details.json` (algo, filters) · `series/20260610_140833_curva-de-tasas-como-filtro-v35.json` (curvas: estrategia hasta la quiebra, «sin reglas de prop firm», comprar y esperar) · fila #35 de la tabla «Con tu capital» (`docs/youtube/`).

## Títulos (opciones)
1. Mi bot murió en 2016; la curva de tasas se invirtió en 2019
2. La curva de tasas como filtro: Sharpe −0.57 con y sin ella
3. ¿La curva de tasas mejora un bot? Dos periodos, cero mejoras

## Miniatura
Fondo #09090b. Una línea de tiempo horizontal: a la izquierda "2016" en rojo con una ✕; a la derecha "2019" en blanco con un pequeño icono de curva; texto grande "TARDE". Logo ATLAS arriba a la derecha. (Texto de 1 palabra + 2 años; no repite los títulos.)

---

## VIDEO LARGO (16:9, ≈ 5:16 · experimento corto: rango de 4 a 6 min)

**[0:00 — Gancho]** (pantalla — BOCETO: línea de tiempo 2014→2024 con dos marcadores que se iluminan: «11-nov-2016 · muere la cuenta» (✕ roja) y «27-mar-2019 · la curva se invierte» (verde); la distancia entre ambos se resalta con una llave)
11 de noviembre de 2016: muere la cuenta de mi bot. 27 de marzo de 2019: la curva de tasas se invierte por primera vez en el periodo 2014–2024. El filtro que quise añadir llegó más de dos años tarde.

**[0:18 — Qué es la curva de tasas]** (pantalla — BOCETO: dos barras, «bono a 10 años» y «letra a 3 meses»; cuando la segunda supera a la primera, la curva se pinta de rojo y aparece «TNX − IRX < 0 = invertida»)
Primero, qué es. La curva de tasas compara lo que paga un bono a 10 años con lo que paga una letra a 3 meses. Normalmente prestar a largo plazo paga más. Cuando se invierte, y el corto paga más que el largo, mucha gente la mira como señal de alarma. En los datos es simple: rendimiento a 10 años menos rendimiento a 3 meses; si es negativo, la curva está invertida.

**[0:49 — De dónde salió la idea]** (pantalla — BOCETO: gráfico de importancia de variables del modelo del experimento 24 con la barra de «curva de tasas» resaltada; flecha hacia el bot)
No la saqué de un libro. La sugirió el modelo de aprendizaje automático del experimento 24, donde era una de las variables que más pesaban. La pregunta natural: si un modelo la usa mucho, ¿funcionaría como regla para sacar al bot del mercado?

**[1:09 — Cómo se probó]** (pantalla — BOCETO: dos carriles en paralelo, «filtro base» y «filtro base + curva invertida»; chips: ×2 · señal de ayer · corte automático −3% · 2014–2024 y 2007–2013)
El diseño es una comparación limpia. Filtro base: el VIX, el índice del miedo, sobre 28 y el crédito bajo su media de 40 días. Segunda versión: la misma, más la regla «si la curva está invertida, fuera del mercado». Apalancamiento ×2, con la señal de ayer y sin suponer que el bot reacciona dentro del día. Se prueba en 2014–2024 y en 2007–2013, fuera de muestra, es decir, años que el bot no vio al diseñarse. La regla para decir «sirve» es estricta: tiene que mejorar el Sharpe, la ganancia por unidad de riesgo, en los dos periodos.

**[1:51 — Los resultados]** (pantalla — BOCETO: tabla con tres filas y dos columnas; las celdas iguales se enlazan con un signo «=» rojo; la última fila muestra el empeoramiento)
| Periodo | Sharpe sin curva | Sharpe con curva |
|---|---|---|
| 2014–2024 (hasta la quiebra) | −0.57 | −0.57 |
| 2007–2013 | 0.00 | 0.00 |
| 2014–2024 sin reglas de prop firm | −0.04 | −0.13 |
Resultado: la curva no mejora ningún periodo. En 2014–2024 el Sharpe es −0.57 con y sin curva, porque la cuenta muere el 11 de noviembre de 2016, antes de que la curva se invierta. En 2007–2013 es 0.00 en ambos casos. Y en el control sin las reglas de la prop firm, la empresa de fondeo que cierra la cuenta si cae 10%, añadir la curva empeora el Sharpe de −0.04 a −0.13.

**[2:23 — Por qué no mejora]** (pantalla — BOCETO: gráfico de barras: «días con curva invertida» 2.3% en 2007–2013; línea de tiempo marcando mar–ago de 2007; segunda escena con el reloj de 2014–2016 y la cuenta ya muerta)
Hay dos razones y las dos son de tiempo. En 2007–2013 la curva estuvo invertida solo el 2.3% de los días, entre marzo y agosto de 2007. Una señal que casi nunca se activa no puede discriminar nada. Y en 2014–2024 se activa cuando la cuenta ya está cerrada. No digo que la curva no sirva para otras cosas: digo que, como filtro de este bot, no mejoró ningún periodo.

**[2:53 — El marcador de filtros]** (pantalla — BOCETO: checklist de exp_details.filters: 2014–2024 ✗ · 2007–2013 ✗ · «mejora en ambos periodos» = falso ✗ · señal rezagada ✓ · Deflated Sharpe — · costos completos —)
El tablero de filtros lo resume. En 2014–2024 la cuenta muere antes de que la curva se invierta; en 2007–2013 el Sharpe es 0.00 con y sin curva; y la regla del script, mejorar el Sharpe en los dos periodos, da falso. Pasa uno: la señal está rezagada y no mira el futuro. El Deflated Sharpe, la prueba que descuenta la suerte de haber probado muchas ideas, y los costos completos no se aplicaron: solo hay deslizamiento de 0.2% en el corte automático.

**[3:29 — La lección]** (pantalla — BOCETO: dos tarjetas enfrentadas: «pesa en el modelo» vs «sirve como regla», con una ✕ roja en la segunda)
La lección es útil más allá del trading: que un dato pese en un modelo no significa que funcione como regla de salida. Un modelo combina muchas variables a la vez; una regla aislada tiene que cargar con todo el peso. Es otra fuente macro descartada con rigor.

**[3:51 — Tres preguntas antes de añadir una regla]** (pantalla — BOCETO: tres tarjetas numeradas que se marcan con ✗ rojas: «¿cuándo se activa?» · «¿antes o después del problema?» · «¿mejora en los dos periodos?»)
Una receta que te puedes llevar: antes de añadir una regla a cualquier sistema, hazle tres preguntas. Primera: ¿cuándo se activa? Si casi nunca, no puede discriminar nada. Segunda: ¿se activa antes del problema o después? Si es después, no sirve de filtro. Tercera: ¿mejora en los dos periodos o solo en uno? La curva de tasas falló las tres.

**[4:17 — Con tu capital]** (pantalla — BOCETO: tarjeta «Con tu capital»: $100,000 → −$10,368 contra −$5,766, rotulada «2014–2016, hasta que se cierra la cuenta»; debajo, línea «sin reglas»: −6.1% y caída máxima de −19.7% hasta 2024)
Con $100,000 simulados, la cuenta se cierra con −$10,368 el 11 de noviembre de 2016. Comprar y esperar la misma cesta, en las mismas fechas: −$5,766. Si no hubiera corte, la misma estrategia habría terminado 2024 en −6.1%, con una caída máxima de −19.7%, pero esa línea es hipotética: la cuenta real se cierra ese día. Es una simulación histórica, no una promesa; con $10,000 serían la décima parte.

**[4:47 — Conclusión]** (pantalla — BOCETO: sello «NO SIRVIÓ»; KPIs −0.57 · 0.00 · 2.3%)
Veredicto: no sirvió. Con las señales de ayer, la cartera base ×2 ya muere en 2014–2024, con o sin curva de tasas, y en 2007–2013 queda igual en 0.00. La curva no aporta en ninguno de los dos periodos.

**[5:05 — Cierre]** (pantalla — BOCETO: logo ATLAS + URL; la línea de tiempo 2016–2019 de fondo)
Todos los datos están en atlas-lab-one.vercel.app, experimento 35. Contenido educativo, no es asesoría financiera. El trading no se promete: se prueba.

---

## SHORT (9:16, ≈ 50 s)
Título del Short: Mi cuenta murió en 2016. La señal llegó en 2019 #shorts
Fórmula visual (CLAUDE.md del canal): b-roll vertical real con overlay 0.6, Ken Burns alternado, subtítulos karaoke en MAYÚSCULAS con cifras en rojo, ticker arriba, whoosh + flash en cada corte; golpe (bass + sacudida) solo en 0-3 s y 14-28 s.

**[0-3 s]** "Mi cuenta murió en 2016. La señal llegó en 2019."
- Boceto: b-roll de reloj de pared girando rápido (kb=in); «2016» en rojo con ✕ y «2019» en blanco; golpe de bass en la ✕.

**[3-14 s]** "La señal era la curva de tasas: el bono a 10 años menos la letra a 3 meses. Si se invierte, fuera del mercado. La idea me la dio un modelo de machine learning."
- Boceto: dos barras (10 años / 3 meses) que se cruzan; rótulo «INVERTIDA = FUERA».

**[14-28 s]** "Pero la cuenta murió el 11 de noviembre de 2016. La curva se invirtió por primera vez el 27 de marzo de 2019. Sharpe con curva: menos 0.57. Sin curva: menos 0.57."
- Boceto: línea de tiempo con las dos fechas; dos barras idénticas de −0.57 unidas por un «=» rojo; sacudida al aparecer el «=».

**[28-40 s]** "En 2007–2013 casi nunca se invirtió: solo el 2.3% de los días. Y sin las reglas de la prop firm, la curva empeora el Sharpe: de menos 0.04 a menos 0.13."
- Boceto: un 2.3% diminuto en un calendario; luego dos barras −0.04 y −0.13 (la segunda más larga).

**[40-50 s]** "Que un dato pese en un modelo no significa que sirva como regla. Video completo en el canal. No es asesoría financiera. Una señal tardía… llega en 2019."
- Boceto: sello «NO SIRVIÓ»; logo ATLAS. Loop: «llega en 2019» enlaza con «La señal llegó en 2019» y con el «Mi cuenta murió en 2016» inicial.

## Descripción (YouTube)
Probé la curva de tasas invertida (bono a 10 años menos letra a 3 meses) como filtro extra para sacar a mi bot del mercado. Resultado: Sharpe −0.57 con y sin la curva en 2014–2024 (la cuenta muere el 11 de noviembre de 2016, antes de la primera inversión del 27 de marzo de 2019) y 0.00 en 2007–2013. Experimento #35.

Datos completos: https://atlas-lab-one.vercel.app (experimento #35)

Capítulos: 0:00 Gancho · 0:18 Qué es la curva de tasas · 0:49 De dónde salió la idea · 1:09 Cómo se probó · 1:51 Los resultados · 2:23 Por qué no mejora · 2:53 El marcador de filtros · 3:29 La lección · 3:51 Tres preguntas antes de añadir una regla · 4:17 Con tu capital · 4:47 Conclusión · 5:05 Cierre

Contenido educativo. No es asesoría financiera ni recomendación de inversión.

Etiquetas: curva de tasas, curva invertida, bot de trading, backtest, prop firm, VIX, Sharpe ratio, filtro macro, estrategia de trading, machine learning, ATLAS Lab

## Rúbrica (autoevaluación — criterios del CLAUDE.md del canal, 1-5)
| hook_0_3s | ritmo | promesa_cumplida | potencial_loop | claridad_no_traders | honestidad_atlas | audio | cta |
|---|---|---|---|---|---|---|---|
| 5 | 4 | 5 | 4 | 4 | 5 | 4 | 4 |

Promedio: **4.38** → cumple el corte (≥ 4.0; hook ≥ 4 y honestidad 5).
Notas: el hook son dos años que chocan (2016 vs 2019), verificables en los datos. Punto débil: el concepto de «curva invertida» ocupa un bloque entero; en el Short se resume en una frase.

## Otros temas de este experimento
1. Tema 1 (este archivo) — `exp-035-curva-de-tasas-filtro.md` — Mi bot murió en 2016; la curva de tasas se invirtió en 2019
2. Tema 2 — `exp-035-t2-prueba-ab-regla-extra.md` — la prueba A/B de una regla extra
3. Tema 3 — `exp-035-t3-dato-que-pesa-no-es-regla.md` — un dato que pesa en un modelo no es una regla

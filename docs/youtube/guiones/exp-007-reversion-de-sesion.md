# Experimento #7 — Reversión de sesión (contratendencia)

Estado del guion: **BORRADOR — pendiente de aprobación**
Estado del experimento: **murió**
Serie: B (Estrategias famosas, puestas a prueba), por afinidad; los #4–#8 no figuran en plan-series.md
Datos usados: `experiments.json` (v=7: description, params, metrics, kpis, analysis, verdict, notes; v=8 solo para el Sharpe bruto por año), `exp_details.json` (algo, filters), `series/20260607_205435_reversion-de-sesion-fade-v7.json` (curva 1 = estrategia, curva 2 = comprar y esperar) y la tabla «Con tu capital» de docs/youtube (fila 7). Las cifras con 10,000 dólares son las de la tabla de 100,000 divididas entre 10.

## Títulos (3 opciones)
1. Sharpe +0.20 antes de costos, −1.99 después: 1,553 operaciones lo enterraron
2. Reversión de sesión en el euro: la ventaja era diminuta y los costos la borraron
3. Probé lo contrario de la ruptura del rango asiático: −22.5%

## Miniatura
Fondo negro de la marca. Dos cifras enfrentadas: a la izquierda «+0.20» en verde, a la derecha «−1.99» en rojo, con una flecha curva entre ambas rotulada «COSTOS» (palabra única; no repite el título). De fondo, tenue, la curva real de la serie 1 cayendo. Logo ATLAS esquina inferior derecha.

---

## VIDEO LARGO (16:9, ≈ 4:32 min — 4–6 min: experimento de una sola idea y pocas cifras)
Ritmo visual: algo cambia en pantalla cada 2-3 s; b-roll real detrás, Ken Burns alterno, subtítulos karaoke, whoosh + flash en cada corte, golpe de bass solo en el momento clave.

**[0:00 — Gancho]** (pantalla: «+0.20» verde que se convierte en «−1.99» rojo)
Antes de pagar costos, esta estrategia tenía un Sharpe de +0.20: una ventaja pequeña, pero positiva. Después de pagarlos, −1.99, y una pérdida de −22.5% de la cuenta. El problema no fue la idea. Fueron 1,553 peajes. Este video trata de la diferencia entre ganar en el papel y ganar en la cuenta, y de cuánto pesan los costos cuando operas todos los días.
> Boceto: «+0.20» verde en grande; 1,553 monedas caen sobre él y el número se transforma en «−1.99» rojo con sacudida de pantalla. Ken Burns «in» sobre b-roll de pantalla de trading.

**[0:27 — La idea: el espejo]** (pantalla: rango asiático con flechas invertidas)
En el experimento anterior probé la ruptura del rango de la madrugada, y perdió. Así que toca probar lo contrario, la reversión, o «fade». La intuición: si el precio no sigue la ruptura, a veces vuelve hacia el centro del rango; apuesto a ese regreso. Marco el rango asiático, de las 00:00 a las 07:00 UTC. Cuando el precio toca el techo de ese rango, vendo en corto; cuando toca el piso, compro. El objetivo está en el punto medio del rango, el stop a 0.5 veces el tamaño del rango más allá del extremo, y si no pasa nada salgo a las 16:00 UTC. Una operación al día, como máximo.
> Boceto: caja del rango con techo y piso; flechas que apuntan hacia adentro («VENTA EN CORTO» arriba, «COMPRA» abajo); línea punteada del objetivo en el medio y reloj marcando 16:00 UTC.

**[1:12 — Las reglas]** (pantalla: tarjeta de parámetros)
Euro-dólar con velas de un minuto, de 2019 a 2024. Una operación al día, 1,553 en total, el mismo número que en la ruptura del experimento 6: misma frecuencia, mismos costos, señal opuesta. Los parámetros están fijados de antemano: objetivo en el punto medio y stop a 0.5 veces el rango, sin barrer otros valores. Y costos reales en cada operación: comisión de 0.007% y deslizamiento de 0.002%, a la entrada y a la salida. En este experimento no se aplicó prueba de azar.
> Boceto: `params_view` (Rango asiático 00:00–07:00 UTC · Salida por tiempo 16:00 UTC · Take-profit 0.5× · Stop 0.5× · Comisión · Deslizamiento) con tick sonoro.

**[1:47 — Resultados]** (pantalla: tarjetas KPI)
Retorno total: −22.5%. Sharpe neto, ya con costos: −1.99. Sharpe bruto, antes de costos: 0.20. Peor caída: −22.8%. Acierta el 50.3% de las veces y el factor de beneficio es 0.75: ganó 0.75 dólares por cada dólar perdido. El PSR, la probabilidad de que el Sharpe real sea positivo, es 5.9e−7, que es prácticamente cero. Fíjate en que la estrategia acierta más de la mitad de las veces y aun así pierde más de una quinta parte de la cuenta: las pérdidas pesan más que las ganancias, y cada operación suma su peaje.
> Boceto: `kpis` en cascada con el par «Sharpe bruto 0.20 / neto −1.99» resaltado; curva real (series, curva 1) bajando de forma casi continua frente a la curva 2.

**[2:25 — Bruto contra neto]** (pantalla: dos barras de Sharpe)
Esa es la historia en dos cifras. El Sharpe bruto de +0.20 es incluso menor que el 0.245 que ya había obtenido el cruce de medias de la línea base, con costos y todo. Es una señal demasiado pequeña para operarla a diario. Y con 1,553 operaciones, cada una pagando comisión y deslizamiento, los costos la enterraron. El muro no era la falta de señal: eran los costos. Una ventaja pequeña puede ser real y aun así no valer la pena si el peaje por usarla es mayor que lo que deja.
> Boceto: barras: «Bruto +0.20» (verde, baja), «Línea base #0: 0.245» (gris) y «Neto −1.99» (rojo, enorme hacia abajo); contador de operaciones hasta 1,553.

**[3:03 — Ni siquiera ese +0.20 es sólido]** (pantalla: Sharpe bruto año a año)
Hay más. Cuando miras el Sharpe bruto año por año, cambia de signo: +1.58 en 2019, −0.95 en 2020, −1.36 en 2024. Y el Sharpe neto fue negativo los seis años. Un +0.20 que sale de promediar años buenos y malos se parece más a ruido que a ventaja: una estrategia con una ventaja real no cambia de signo cada año. El experimento siguiente, el 8, intenta rescatarla con machine learning y lo investiga a fondo.
> Boceto: gráfico de barras por año con 2019 en +1.58 (verde), 2020 en −0.95 y 2024 en −1.36 (rojo); una línea del promedio en +0.20 oscilando; texto «Neto: negativo los 6 años».

**[3:34 — Los filtros]** (pantalla: checklist)
Parámetros fijados de antemano: bien. Costos: la ventaja bruta se los come, con un Sharpe neto de −1.99. PSR de casi cero. La prueba de azar no se aplicó en este experimento. Resultado: no pasa.
> Boceto: checklist de `filters`: parámetros ✓ verde; costos ✗, PSR ✗; prueba de azar «no aplicado» en gris; sello ✕.

**[3:49 — Con tu capital]** (pantalla: tarjeta «Con tu capital»)
Con 10,000 dólares serían menos 2,234 para la estrategia, frente a menos 848 de comprar y esperar. Con 100,000, la tabla de ATLAS da menos 22,339 contra menos 8,482 en las mismas fechas.
> Boceto: tarjeta de capital con ambas cifras en rojo; curvas reales debajo; selector $10,000 / $100,000.

**[4:03 — Conclusión y cierre]**
Veredicto: no sirvió. Antes de costos, Sharpe de +0.20; después, −1.99 y −22.5%. La lección de este bloque: la señal era demasiado pequeña para sobrevivir a operar todos los días. Cuando una estrategia opera mucho, lo primero que hay que mirar no es cuánto gana, sino cuánto cuesta ganar. Todos los datos en atlas-lab-one.vercel.app, experimento 7. Contenido educativo, no es asesoría financiera. El trading no se promete: se prueba.
> Boceto: sello ✕ rojo sobre «+0.20»; frase de marca, logo y URL.

---

## SHORT (9:16, ≈ 46 s)
Fórmula visual: b-roll vertical + overlay oscuro 0.6, Ken Burns alternando in/out, subtítulos karaoke en MAYÚSCULAS con las cifras en rojo, whoosh + flash en cada corte, golpe de bass + sacudida solo en el 0-3 s; ticker arriba.

**[0-3 s]** «Antes de costos: Sharpe +0.20. Después: −1.99.»
> Boceto: texto gigante «+0.20 → −1.99» y debajo «Sharpe: antes y después de costos»; «+0.20» verde se transforma en «−1.99» rojo con sacudida de pantalla; b-roll de gráfico de velas, Ken Burns «in».
**[3-12 s]** «Es el espejo de la ruptura: si el precio toca el techo del rango de la madrugada, vendo en corto; si toca el piso, compro, con objetivo en el punto medio.»
> Boceto: caja del rango con flechas hacia adentro; Ken Burns «out»; karaoke con «TECHO» y «PISO» en rojo.
**[12-24 s]** «Una operación al día en el euro-dólar, con velas de un minuto, de 2019 a 2024. Antes de costos, una ventaja diminuta. Pero son 1,553 operaciones, y cada una paga comisión y deslizamiento.»
> Boceto: contador de monedas cayendo hasta 1,553; whoosh y flash blanco.
**[24-36 s]** «Resultado final: −22.5%, con un Sharpe de −1.99 y una caída máxima de −22.8%. Acierta el 50.3% de las veces, pero ganó 0.75 dólares por cada dólar perdido.»
> Boceto: curva real cayendo; sello rojo «−22.5%»; cifra 0.75 pulsando; Ken Burns «in».
**[36-46 s]** «El muro no era la falta de señal: eran los costos. Una ventaja de +0.20 que se deshace al pagar 1,553 veces. El video completo está en el canal. No es asesoría financiera.»
> Boceto: vuelve «+0.20» y es aplastado por «1,553» hasta quedar en «−1.99» (loop con el gancho); texto «Video completo en el canal» y logo.

## Descripción (YouTube)
Reversión intradía en el EUR/USD con velas de 1 minuto (2019-2024): vender en el techo del rango asiático y comprar en el piso, con objetivo en el punto medio. Sharpe bruto +0.20; neto, con 1,553 operaciones y costos reales, −1.99 y −22.5%. Explico por qué la señal era demasiado pequeña.
Todos los datos: https://atlas-lab-one.vercel.app (experimento #7)
Contenido educativo. No es asesoría financiera ni recomendación de inversión.

Capítulos: 0:00 Gancho · 0:27 La idea: el espejo · 1:12 Las reglas · 1:47 Resultados · 2:25 Bruto contra neto · 3:03 Ni siquiera ese +0.20 es sólido · 3:34 Los filtros · 3:49 Con tu capital · 4:03 Conclusión y cierre

Etiquetas: reversión a la media, contratendencia, fade, rango asiático, EUR/USD, trading intradía, costos de trading, backtest, Sharpe bruto y neto, ATLAS Lab, trading con datos, forex

## Rúbrica (autoevaluación, 1–5)
| Criterio | Short | Largo |
|---|---|---|
| hook_0_3s | 4 | 4 |
| ritmo | 4 | 4 |
| promesa_cumplida | 5 | 5 |
| potencial_loop | 5 | 4 |
| claridad_no_traders | 4 | 4 |
| honestidad_atlas | 5 | 5 |
| audio | 4 | 3 |
| cta | 4 | 4 |
| **Promedio** | **4.38** | **4.13** |

Notas: el gancho exige el rótulo en pantalla «Sharpe = ganancia por unidad de riesgo» para quien no es trader; sin él, el hook baja a 3. El Short cumple hook ≥ 4 y honestidad 5.

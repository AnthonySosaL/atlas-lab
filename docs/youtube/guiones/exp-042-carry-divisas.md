# Experimento #42 — Carry de divisas ejecutable

Estado del guion: **BORRADOR — pendiente de aprobación**
Estado del experimento: **MURIÓ** (el carry puro muere en los dos periodos, incluso sumando el interés; con el filtro macro tampoco sobrevive 2014–2024)
Serie: **G (epílogo)** — primer experimento que usa los datos de #41; continúa en #43.
Datos usados: `experiments.json` (v=42: analysis, description, verdict, notes, metrics, kpis, params_view, capital) · `exp_details.json` (algo, filters) · `series/20260610_142006_carry-fx-ejecutable-v42.json` (curva 1 = carry puro hasta la quiebra; curva 2 = «sin reglas de prop firm»; curva 3 = comprar y esperar) · fila #42 de la tabla «Con tu capital» (`docs/youtube/`).

## Títulos (opciones)
1. Cobré intereses cada día y mi cuenta murió: carry trade
2. Carry trade: Sharpe −1.79 y cuenta cortada a los 256 días
3. Probé el carry de divisas con 7 pares: ni el interés lo salvó

## Miniatura
Fondo #09090b. Texto gigante blanco "CARRY"; debajo, en rojo (#e11d2a), "256 DÍAS" con una ✕. Elemento visual: una pila de monedas con una grieta. Logo ATLAS en la esquina superior derecha. (No repite los títulos.)

---

## VIDEO LARGO (16:9, ≈ 6:30)

**[0:00 — Gancho]** (pantalla — BOCETO: contador de «interés cobrado» que sube a +1.4% mientras la curva real de series/…v42.json cae hasta el sello ✕ del 15-dic-2014; texto «256 DÍAS»)
Cobré intereses todos los días. Y aun así, la cuenta murió a los 256 días. Es el carry trade, una de las estrategias más conocidas de las divisas: comprar la moneda que paga más interés y vender la que paga menos. La probé con 7 pares de forex, tasas reales y el interés sumado a la posición. El Sharpe del carry puro: −1.79.

**[0:28 — Cómo funciona]** (pantalla — BOCETO: un par EUR/USD animado con dos tasas; flecha «compra la que paga más»; cada día suma monedas a la cuenta; fórmula «interés = diferencial × peso × ×2 × días/365»)
En cada par se comparan las tasas de interés de las dos monedas. Si la moneda paga más que el dólar, compras; si paga menos, la vendes en corto. Cada día se suma a la cuenta el interés de esa posición: cobras la tasa de lo que tienes y pagas la de lo que debes. Los pesos se reparten por riesgo, con apalancamiento ×2 y un corte automático del 3% diario.

**[0:59 — Las reglas del examen]** (pantalla — BOCETO: checklist de exp_details.filters: tasas de FRED (experimento 41) ✓ · señal rezagada 1 mes ✓ · interés sumado cada día ✓ · 2014–2024 y 2007–2013 ✓ · muere si cae 10% o pierde 5% en un día)
Las tasas vienen del experimento 41, y la señal va rezagada un mes; enseguida explico por qué. Probé dos variantes: carry puro, y carry con el filtro de pánico, basado en el VIX, el índice del miedo, y en el crédito. En dos periodos: 2014–2024 y 2007–2013, el segundo fuera de muestra, es decir, años que el bot no vio al diseñarse. Y la cuenta muere si toca 10% de caída o 5% de pérdida en un solo día.

**[1:33 — La señal con un mes de rezago]** (pantalla — BOCETO: calendario de dos meses; la tasa de enero se publica y se usa para operar en febrero; una segunda fila punteada con el rótulo «en la vida real puede tardar más»)
Un supuesto sobre el tiempo. Las tasas se publican con retraso, así que la señal de este mes usa el diferencial del mes anterior. Es un supuesto prudente, pero la publicación real puede tardar más. Si tardara más, el desfase sería mayor y el carry reaccionaría todavía más tarde a los cambios de tasas.

**[1:57 — Los costos que entran y los que faltan]** (pantalla — BOCETO: dos columnas: «entran» (interés del diferencial de tasas a 3 meses · deslizamiento 0.2% en el corte) con tick verde y «faltan» (spread · margen del broker sobre el swap · 3 puntos básicos por rotación) con aviso amarillo)
Conviene saber qué entra en la cuenta y qué no. Entra el interés del diferencial de tasas, sumado cada día, y un deslizamiento de 0.2% en el corte automático. Faltan el diferencial entre compra y venta, el margen que cobra el broker sobre el swap, y los 3 puntos básicos por rotación que usa el laboratorio. Todos esos costos empeorarían el resultado, no lo mejorarían.

**[2:25 — Los resultados]** (pantalla — BOCETO: tabla que se llena celda por celda; las celdas de muerte llevan ✕ y la fecha; a un lado, la curva real de series/…v42.json cayendo a −10.1% y KPI «caída máxima −14.5%»)
| Variante | 2014–2024 | 2007–2013 (fuera de muestra) |
|---|---|---|
| Carry puro | Sharpe −1.79 · muere el 15-dic-2014 (día 256) | Sharpe −2.86 · muere (155 días) |
| Carry + filtro de pánico | Sharpe −0.86 · muere el 24-jun-2016 | Sharpe −0.02 · sobrevive |
El Sharpe es la ganancia por unidad de riesgo: si es negativo, la estrategia pierde. El carry puro muere en los dos periodos. En 2014–2024, la cuenta se corta el 15 de diciembre de 2014 tras 256 días y −10.1%, con una caída máxima, el peor tramo de pico a valle, de −14.5%. En 2007–2013, el Sharpe es aún peor: −2.86. Con el filtro de pánico, 2007–2013 sobrevive, pero con Sharpe −0.02; en 2014–2024 muere el 24 de junio de 2016, con −0.86.

**[3:01 — ¿Y el interés?]** (pantalla — BOCETO: barra comparativa: «interés cobrado +1.4%» (verde, pequeña) frente a «pérdida −10.1%» (roja, grande); tabla de control: sin interés −1.94 / −3.07 y −0.83 / −0.99)
El interés sumó apenas +1.4% del capital en los 256 días que vivió la cuenta. Es poco porque, durante la década de 2010, las tasas de los países desarrollados estaban cerca de 0. Si quitas el interés y miras solo el precio, el carry puro da −1.94 y −3.07, y con filtro −0.83 y −0.99: peor, pero la misma historia. Y hay una razón de fondo: los crashes del carry coinciden con los de todo lo demás, así que no diversifica.

**[3:36 — La defensa del optimista]** (pantalla — BOCETO: curva real «sin reglas de prop firm» de series/…v42.json (carry puro, termina en −9.9%) y, aparte, una tarjeta hipotética del carry con filtro (+25.7% · Sharpe 0.33 · caída máxima −20.3%; no hay curva en series/) con tres avisos en amarillo)
Un optimista diría: es culpa de las reglas de la prop firm, la empresa de fondeo que cierra la cuenta si cae 10%. Veamos. Sin ellas, el carry puro habría terminado 2024 en −9.9%, con una caída máxima de −35.4%. En cambio, el carry con filtro habría ganado +25.7% en 2014–2024, con Sharpe 0.33 y caída máxima de −20.3%, usando la salida medida el día del disparo. Es el dato más favorable de este experimento. Pero tiene tres peros: la caída supera el 10% que una prop firm tolera, así que la cuenta real se habría cerrado; no incluye spread ni el margen que cobra el broker sobre el swap; y no se le aplicó el Deflated Sharpe, la prueba que descuenta la suerte de haber probado muchas ideas.

**[4:30 — El marcador de filtros]** (pantalla — BOCETO: checklist de exp_details.filters: Sharpe 2014–2024 ✗ · Sharpe 2007–2013 ✗ · sobrevivir en ambos periodos ✗ · señal rezagada ✓ · costos completos — · Deflated Sharpe —)
El tablero de filtros: el carry puro de 2014–2024, con Sharpe −1.79, no llega al 0.30 del laboratorio; el de 2007–2013, con −2.86, tampoco; y sobrevivir en ambos periodos es falso. Pasa uno: la señal está rezagada y no mira el futuro. Incluso con rezago puro de un día, el carry con filtro muere igual el 24 de junio de 2016, con Sharpe −0.80. Los costos completos y el Deflated Sharpe no se aplicaron.

**[5:02 — Con tu capital]** (pantalla — BOCETO: tarjeta «Con tu capital»: $100,000 → −$9,924 contra −$43 de comprar y esperar, rotulada «2014, hasta el corte del 15-dic-2014»)
Con $100,000 simulados, la cuenta del carry puro se cierra con −$9,924 tras 256 días. Comprar y esperar la misma cesta en las mismas fechas: −$43. La línea sin reglas es hipotética, porque la cuenta real se cierra ese día. Es una simulación histórica, no una promesa; con $10,000 serían la décima parte.

**[5:26 — Por qué muere]** (pantalla — BOCETO: metáfora gráfica: monedas pequeñas a lo largo de una línea y un golpe rojo grande al final; texto «+1.4% de interés · −10.1% de cuenta»)
El carry se parece a recoger monedas delante de una aplanadora: cobras poco todos los días, y cuando el mercado se mueve en contra pierdes mucho de golpe. Aquí se ve en números: +1.4% de interés frente a −10.1% de cuenta. Con apalancamiento ×2, el golpe llega antes de que el interés se acumule.

**[5:50 — Conclusión]** (pantalla — BOCETO: sello «NO SIRVIÓ»; KPIs −1.79 · −2.86 · −0.86 · −0.02)
Veredicto: no sirvió. Aun sumando el interés del carry, el carry puro muere en ambos periodos, con Sharpe −1.79 y −2.86, y ni con el filtro macro sobrevive 2014–2024. La promesa del carry es cobrar por esperar; la realidad que muestran los datos es que se cobra poco cada día y se pierde mucho de golpe. En el siguiente experimento intento rescatar la idea combinándola con tendencia.

**[6:19 — Cierre]** (pantalla — BOCETO: logo ATLAS + URL; monedas cayendo de fondo)
Todos los datos están en atlas-lab-one.vercel.app, experimento 42. Contenido educativo, no es asesoría financiera. El trading no se promete: se prueba.

---

## SHORT (9:16, ≈ 48 s)
Título del Short: Cobré intereses cada día… y la cuenta murió #shorts
Fórmula visual (CLAUDE.md del canal): b-roll vertical real con overlay 0.6, Ken Burns alternado, subtítulos karaoke en MAYÚSCULAS con cifras en rojo, ticker arriba, whoosh + flash en cada corte; golpe (bass + sacudida) solo en 0-3 s y 28-40 s.

**[0-3 s]** "Cobré intereses cada día… y la cuenta murió."
- Boceto: b-roll de monedas cayendo (kb=in); «+1.4%» verde pequeño y «✕ 256 DÍAS» rojo gigante; golpe de bass.

**[3-14 s]** "Es el carry trade: compras la moneda que paga más interés y vendes la que paga menos. Lo probé con 7 pares de divisas y tasas reales, sumando el interés a la cuenta."
- Boceto: un par de divisas con flechas de compra y venta; contador de monedas que suma interés.

**[14-28 s]** "Resultado: el carry puro murió el 15 de diciembre de 2014, a los 256 días, con Sharpe menos 1.79. El interés cobrado: apenas 1.4% del capital, contra una pérdida de 10.1%."
- Boceto: curva real de series/…v42.json hasta el sello ✕; barra de interés (1.4%) diminuta frente a la pérdida (−10.1%).

**[28-40 s]** "En 2007–2013, peor: menos 2.86. Con filtro de pánico tampoco sobrevivió 2014–2024: menos 0.86. Los crashes del carry coinciden con los de todo lo demás."
- Boceto: tres barras rojas (−1.79, −2.86, −0.86); texto «NO DIVERSIFICA»; sacudida en la barra más larga.

**[40-48 s]** "El video completo está en el canal. No es asesoría financiera. Cobrar intereses cada día no bastó. ¿Qué le pasó a la cuenta?"
- Boceto: sello «NO SIRVIÓ»; logo ATLAS. Loop: la pregunta final se responde con el inicio «…y la cuenta murió».

## Descripción (YouTube)
Probé el carry trade de divisas (comprar la moneda que paga más interés y vender la que paga menos) en 7 pares de forex con tasas reales de FRED y el interés sumado cada día a la posición. El carry puro muere en los dos periodos (Sharpe −1.79 en 2014–2024, cuenta cortada el 15 de diciembre de 2014 a los 256 días, y −2.86 en 2007–2013). Experimento #42.

Datos completos: https://atlas-lab-one.vercel.app (experimento #42)

Capítulos: 0:00 Gancho · 0:28 Cómo funciona · 0:59 Las reglas del examen · 1:33 La señal con un mes de rezago · 1:57 Los costos que entran y los que faltan · 2:25 Los resultados · 3:01 ¿Y el interés? · 3:36 La defensa del optimista · 4:30 El marcador de filtros · 5:02 Con tu capital · 5:26 Por qué muere · 5:50 Conclusión · 6:19 Cierre

Contenido educativo. No es asesoría financiera ni recomendación de inversión.

Etiquetas: carry trade, forex, divisas, tasas de interés, backtest, bot de trading, prop firm, Sharpe ratio, estrategia de trading, swap, ATLAS Lab

## Rúbrica (autoevaluación — criterios del CLAUDE.md del canal, 1-5)
| hook_0_3s | ritmo | promesa_cumplida | potencial_loop | claridad_no_traders | honestidad_atlas | audio | cta |
|---|---|---|---|---|---|---|---|
| 5 | 4 | 5 | 4 | 4 | 5 | 4 | 4 |

Promedio: **4.38** → cumple el corte (≥ 4.0; hook ≥ 4 y honestidad 5).
Notas: el hook plantea una paradoja (cobrar y aun así morir) con una cifra verificable (256 días). Se muestra de forma explícita el único escenario favorable (+25.7% sin reglas) con sus tres salvedades, para que la honestidad no dependa de lo que el espectador no ve.

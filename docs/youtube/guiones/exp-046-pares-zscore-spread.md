# Experimento #46 — Pares por z-score del spread (pairs trading)

Estado del guion: **BORRADOR — pendiente de aprobación**
Estado del experimento: **murió** (No sirvió) · Serie: sin asignar en `plan-series.md`; propuesta: ampliar la B ("Estrategias famosas, puestas a prueba") junto a #47 y #48 · Relacionado: #50 (cierre del programa)
Datos usados: `experiments.json` (v=46: verdict, metrics, kpis, params_view, period, capital.note), `exp_details.json` (algo, filters), `series/20260610_142755_pairs-cointegracion-v46.json` (curva 0 = estrategia, 1 = «sin reglas de prop firm», 2 = sin estrategia) y la tabla «Con tu capital» (`docs/youtube/*-capital.md`) (fila #46).

## Títulos (3 opciones)
1. Pairs trading con 5 pares: Sharpe −1.21 y cuenta cortada
2. Pairs trading: la relación existe, la ventaja no (−10.8%)
3. Oro-plata, Brent-WTI y 3 pares más: la cuenta duró 484 días

## Miniatura (1280×720)
Fondo `#09090b`. Dos líneas (blanca y verde) que corren juntas a la izquierda y se separan a la derecha. Texto enorme en rojo `#e11d2a`: "−10.8%". Texto pequeño blanco debajo: "484 DÍAS" (no repite el título 1). Sello ✕ rojo semitransparente sobre la separación. Logo ATLAS en la esquina superior derecha.

---

## VIDEO LARGO (16:9, ≈ 6 min — la cuenta duró 484 días)

**[0:00 — Gancho]** (pantalla: dos líneas que se mueven juntas y se separan; contador que baja hasta −10.8%)
Dos activos que suelen moverse juntos… hasta que un día se separan. La idea del pairs trading es apostar a que van a volver a juntarse. La probé con cinco pares: Brent y WTI, oro y plata, S&P 500 y Nasdaq 100, euro contra libra y dólar australiano contra neozelandés. Resultado: la cuenta simulada se cortó a los 484 días, con una pérdida de 10.8%. La relación entre los pares existe. La ventaja, no.
> BOCETO: curva real `series/…v46.json` curva 0 dibujándose sobre fondo oscuro; los 5 pares como chips que aparecen uno a uno (whoosh); al final, contador −10.8% en rojo con sacudida de pantalla. Texto: "484 DÍAS".

**[0:35 — La idea]** (pantalla: dibujo del spread con bandas en z = ±2 y z = ±0.5)
Piensa en dos activos hermanos, como el oro y la plata. Cada día calculo el "spread": la diferencia entre sus precios, ajustada por cuánto suele moverse uno respecto al otro; eso es la beta, estimada con los últimos 250 días. Luego mido cuántas desviaciones se alejó de su promedio: eso es el z-score. Cuando se aleja más de 2, el spread está estirado: vendo en corto el lado caro y compro el lado barato. Cuando vuelve por debajo de 0.5, cierro. Es una estrategia neutral al mercado: la mitad del dinero en cada pata.
> BOCETO: gráfico esquemático (no es dato real, rotulado "ilustración"): spread oscilando con bandas ±2 (rojo) y ±0.5 (gris); flechas de entrada y salida. Checklist lateral: "Beta 250 d · Entrada |z| > 2 · Salida |z| < 0.5" (params_view).

**[1:20 — Un ejemplo paso a paso]** (pantalla: animación de un spread que se estira y regresa)
Un ejemplo, sin números inventados. Supón que la plata sube mucho más que el oro y el z-score del spread cruza el 2. La regla vende la plata, compra el oro y reparte el dinero a partes iguales. Si pasan los días y el spread vuelve hacia su promedio, hasta bajar de 0.5, cierra las dos posiciones y cobra la diferencia. Si, en cambio, el spread se estira todavía más, la posición pierde hasta que el corte automático de −3% la cierra. Toda la apuesta es esa: que lo estirado regrese. Se llama reversión a la media. Y lo importante no es que los dos activos estén relacionados, sino que el spread regrese a tiempo y con ganancia después de costos.
> BOCETO: ilustración rotulada (no es dato real): dos líneas (oro y plata) que se separan; marcadores de entrada en |z| > 2 y de salida en |z| < 0.5; si el spread sigue abriéndose, flecha roja y rótulo "kill-switch −3%".

**[2:15 — Cómo se probó]** (pantalla: checklist de reglas y línea de tiempo 2007–2024)
Estas son las reglas de la prueba. Las posiciones se deciden un día antes, sin mirar el futuro. Apalancamiento 2, o sea el doble de exposición. Un corte automático, el kill-switch, si se pierde 3%, con un deslizamiento de 0.2%. Y la cuenta sigue las reglas de una prop firm, una empresa que financia traders: se corta con una caída máxima de 10% o una pérdida de 5% en un día. Se diseñó con 2014 a 2024 y se reservó 2007 a 2013 como periodo fuera de muestra: años que la estrategia nunca vio. Ahí solo hay datos de dos pares: euro-libra y dólar australiano-neozelandés. Una nota de honestidad: no hay un test estadístico formal de cointegración; la regla usa solo el z-score del spread.
> BOCETO: checklist animado con ✓ (señal del día anterior) y avisos ámbar: "sin test ADF", "2007–2013: solo 2 pares". Línea de tiempo con 2007–2013 en gris "fuera de muestra" y 2014–2024 en blanco "diseño".

**[3:10 — Resultados]** (pantalla: 6 tarjetas KPI de la ficha)
Retorno total: −10.8%. Sharpe, que mide cuánta ganancia obtienes por cada unidad de riesgo y debería ser positivo: −1.21 en 2014–2024 y −1.04 en 2007–2013, el periodo fuera de muestra. Un Sharpe negativo dice que, por cada unidad de riesgo que asumiste, perdiste dinero; y que el signo se repita en años que la estrategia nunca vio es lo que más pesa. Drawdown máximo, la mayor caída desde un pico: −13.8%. La cuenta duró 484 días, hasta el 21 de abril de 2016. ¿Sobrevive en todos los periodos? No.
> BOCETO: las 6 tarjetas de `kpis` apareciendo con tick sonoro, valores en rojo; la última, "Sobrevive todos: No", con sello ✕. Tipografía Segoe UI Black.

**[3:50 — La curva]** (pantalla: curva 0 y curva 1 de la serie)
Con $100,000, la cuenta llegó a tocar $103,481 y terminó en $89,153. Subió un poco y se fue cayendo hasta el corte. Hay también una línea hipotética que muestra qué habría pasado sin el corte de la prop firm: terminaría 2024 en $222 de cada $100,000. Es hipotética —en la realidad la cuenta se cierra ese día—, pero muestra hacia dónde iba la regla.
> BOCETO: curva 0 (blanca) dibujándose con zoom a +$103,481 y caída a $89,153; después aparece la curva 1 punteada, en gris, cayendo hasta $222 con rótulo "hipotética". Cámara Ken Burns hacia fuera.

**[4:25 — Por qué falla]** (pantalla: el spread estirado que no revierte)
La relación entre los pares existe: se mueven parecido. Lo que no apareció fue una ventaja neta para un operador minorista. La apuesta entera es que el spread revierta, y esa reversión murió. Ojo con un detalle: aquí el único costo modelado es el deslizamiento de 0.2% en el corte automático, no hay spread por rotación. Es decir, añadirle más costos solo empeoraría el resultado.
> BOCETO: gráfico esquemático del spread que sale de la banda y sigue de largo; sobre él, texto "reversión ✕". Lateral: línea de costos "0.2% solo en el kill-switch".

**[4:55 — Con tu capital]** (pantalla: tarjeta "Con tu capital")
Con $10,000, la cuenta simulada termina en −$1,085. Con $100,000, en −$10,847. En esas mismas fechas, comprar y esperar la cesta sin estrategia dio −$11,854 con $100,000. Esa comparación es solo contexto: esta estrategia pretendía ser neutral al mercado, así que no debía depender de si el mercado subía o bajaba.
> BOCETO: tarjeta de capital con dos columnas ($10,000 → −$1,085 · $100,000 → −$10,847) y una fila de referencia gris (−$11,854). Aviso al pie: "Simulación, no es una promesa".

**[5:20 — Tres preguntas para cualquier pairs trading]** (pantalla: tres tarjetas con preguntas)
Si alguien te vende pairs trading, hazle tres preguntas. Una: ¿lo probó en años que la estrategia nunca vio? Aquí, 2007 a 2013 dio −1.04. Dos: ¿cuenta todos los costos de comprar y vender las dos patas? Aquí el costo modelado es mínimo, y aun así pierde. Tres: ¿cuántas combinaciones probó antes de enseñarte esta? En este experimento fueron cinco pares con una sola regla, entrada en 2 y salida en 0.5. Y recuerda: dos activos relacionados no son una ventaja, son una hipótesis. Hay que probarla.
> BOCETO: tres tarjetas con icono (calendario = fuera de muestra, monedas = costos, lupa = cuántas pruebas) que entran con whoosh; cada una enlaza a una cifra de la ficha (−1.04 · 0.2% · 5 pares).

**[6:00 — Conclusión y cierre]** (pantalla: logo y frase de marca)
Una relación estadística que existe no es lo mismo que una ventaja que se puede cobrar. Todos los datos están en atlas-lab-one.vercel.app, experimento 46. Si quieres que pruebe otra técnica de las que usan los fondos, dímelo en los comentarios. Contenido educativo, no es asesoría financiera. El trading no se promete: se prueba.
> BOCETO: cierre con las dos líneas del inicio y el sello ✕; fade a la frase de marca en blanco sobre negro.

---

## SHORT (9:16, ≈ 43 s) — "Cinco pares"
Título del Short: Pairs trading: −10.8% en 484 días #Shorts

**[0-3 s]** "Cinco pares de activos. Cuenta cortada en 484 días."
> BOCETO: B-roll vertical de pantallas de mercado con overlay 0.6; texto gigante "484 DÍAS" en rojo y "−10.8%" debajo; golpe de bajo y sacudida. Subtítulo karaoke en mayúsculas.

**[3-11 s]** "Es pairs trading: cuando dos activos hermanos se separan, compras el barato, vendes el caro y esperas que vuelvan. Probé cinco pares."
> BOCETO: dos líneas que se separan (ilustración) y una flecha las vuelve a unir; cada 2 s aparece un chip: Brent-WTI, oro-plata, S&P-Nasdaq, EUR-GBP, AUD-NZD. Ken Burns hacia dentro.

**[11-26 s]** "Resultado: la cuenta simulada se cortó el 21 de abril de 2016. Sharpe de −1.21 entre 2014 y 2024, y de −1.04 en 2007–2013, años que nunca vio."
> BOCETO: dos barras rojas de Sharpe (−1.21 y −1.04) creciendo hacia abajo con tick; etiqueta "fuera de muestra" sobre la segunda; fecha "21-abr-2016" con sello ✕.

**[26-33 s]** "Con cien mil dólares llegó a $103,481… y terminó en $89,153."
> BOCETO: curva real de la serie (curva 0) dibujándose; contador numérico que sube a 103,481 y cae a 89,153 en rojo. Whoosh y flash al cambio de escena.

**[33-43 s]** "La relación entre los pares existe. La ventaja neta, ninguna. Cinco pares, 484 días. El video completo está en el canal. No es asesoría financiera."
> BOCETO: las dos líneas del inicio vuelven a separarse; congela en "484 DÍAS" (empalma con el primer cuadro: loop). Texto pequeño: "El trading no se promete: se prueba."

---

## Descripción (YouTube)
Probé el pairs trading con 5 pares (Brent-WTI, oro-plata, S&P 500-Nasdaq 100, EUR-GBP, AUD-NZD): z-score del spread con beta móvil de 250 días, apalancamiento x2, señal del día anterior. La cuenta simulada se cortó a los 484 días con −10.8% y Sharpe de −1.21 (2014-2024) y −1.04 (2007-2013).
Datos completos: https://atlas-lab-one.vercel.app (experimento #46)
Contenido educativo. No es asesoría financiera ni recomendación de inversión.

Capítulos: 0:00 Gancho · 0:35 La idea · 1:20 Un ejemplo paso a paso · 2:15 Cómo se probó · 3:10 Resultados · 3:50 La curva · 4:25 Por qué falla · 4:55 Con tu capital · 5:20 Tres preguntas para cualquier pairs trading · 6:00 Conclusión y cierre

Etiquetas: pairs trading, trading de pares, z-score, spread, arbitraje estadístico, backtest, Sharpe ratio, fuera de muestra, estrategia de trading, trading con datos, ATLAS Lab, oro y plata

## Rúbrica (autoevaluación, escala 1-5)
| Criterio | Nota | Por qué |
|---|---|---|
| hook_0_3s | 4 | "484 días" en voz y −10.8% en pantalla; sin pregunta ni logo |
| ritmo | 4 | Cambio visual cada 2–3 s; el bloque de reglas es el más denso |
| promesa_cumplida | 5 | El gancho promete pérdida y la curva la muestra |
| potencial_loop | 4 | Cierra en "484 días" y el primer cuadro es "484 DÍAS" |
| claridad_no_traders | 4 | Explica spread, beta, z-score, Sharpe y fuera de muestra |
| honestidad_atlas | 5 | Dice que no hay test de cointegración y que el costo modelado es mínimo |
| audio | 4 | Voz por clonar; bajo y whoosh en 2 momentos clave |
| cta | 4 | Una sola petición (otra técnica de fondos) y remite al video completo |
Promedio: **4.25** (≥ 4.0). Hook del Short 4 (≥ 4) y honestidad 5: no descalificado.

## Otros temas de este experimento
- `exp-046-pares-zscore-spread.md` — Tema 1: Pairs trading con 5 pares: Sharpe −1.21 y cuenta cortada
- `exp-046-t2-fuera-de-muestra.md` — Tema 2: la prueba de los años que la estrategia nunca vio
- `exp-046-t3-cuenta-plana-26-dias.md` — Tema 3: 484 días de cuenta, 26 con movimiento

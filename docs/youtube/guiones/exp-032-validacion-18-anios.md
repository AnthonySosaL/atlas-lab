# Experimento #32 — Validación ejecutable-reactiva (año por año)

Estado del guion: **BORRADOR — pendiente de aprobación**
Estado del experimento: **PARCIAL** (sobrevive con ×1.5, pero solo 10 de 18 años son positivos: 56%, bajo el mínimo de 60%)
Serie: **G — Construyendo un bot (y por qué murió)**
Datos usados: `experiments.json` (v=32: analysis, verdict, notes, metrics, kpis, params_view, capital) · `exp_details.json` (algo con el retorno de cada año, filters) · `series/20260610_140603_validacion-ejecutable-reactivo-v32.json` (misma curva que #31) · fila #32 de la tabla «Con tu capital» (`docs/youtube/`).

## Títulos (opciones)
1. Mi bot año por año (2007–2024): 10 de 18 años en positivo
2. +6.5% en 2017, −6.2% en 2018: mi bot visto año por año
3. ¿Sirve un bot con 56% de años positivos? Lo medí desde 2007

## Miniatura
Fondo #09090b. Texto gigante blanco "10 DE 18"; debajo, una fila de 18 barritas (10 verdes #22c55e, 8 rojas #e11d2a) y una línea roja horizontal con "60%". Logo ATLAS arriba a la izquierda. (No repite los títulos: el número y las barras son el gancho visual.)

---

## VIDEO LARGO (16:9, ≈ 5:41 · experimento corto: rango de 4 a 6 min)

**[0:00 — Gancho]** (pantalla — BOCETO: dos barras gigantes que crecen en pantalla, una verde «+6.5% · 2017» y otra roja «−6.2% · 2018»; luego se encoge todo y aparece la fila de 18 años)
+6.5% en 2017. −6.2% en 2018. Ese es el mejor y el peor año de mi bot entre 2007 y 2024. De 18 años, 10 terminaron en positivo. Suena decente, hasta que miras qué pasó con los otros ocho.

**[0:18 — La misma cuenta, vista año por año]** (pantalla — BOCETO: tarjeta params_view: ×1.5 · kill-switch −3% del día · φ medido 0.90 · periodos 2007–2024; mini-curva de series/…v32.json, idéntica a la de #31)
Esto no es una corrida nueva: es la lectura año por año del mismo cálculo del experimento 31. Una cartera de 15 activos con apalancamiento ×1.5 y un corte automático del 3% diario. El filtro de pánico se decide con el cierre de ayer, y el día del disparo el bot sale con lo que puede ver a esa hora, con el φ medido de 0.90: es decir, evita solo cerca del 10% del movimiento de ese día. El script revisa cada año de 2007 a 2024 y además seis crisis: 2008, 2011, 2015, 2018, 2020 y 2022, con huecos de apertura reales y un mínimo intradía conservador.

**[1:04 — La vara de medir]** (pantalla — BOCETO: checklist de dos casillas: «sobrevive en los dos periodos» ✓ · «≥ 60% de los años en positivo» ?)
La regla para llamarlo «sirvió» es simple: sobrevivir en los dos periodos, 2014–2024 y 2007–2013, y que al menos el 60% de los años terminen en positivo. No pide ganar mucho: pide ser consistente. El primer requisito se cumple con ×1.5. Falta el segundo.

**[1:24 — Dos supuestos que no regalan nada]** (pantalla — BOCETO: dos viñetas animadas: una vela que abre muy por debajo del cierre de ayer con la etiqueta «hueco de apertura»; un día de cada activo con su mínimo marcado en rojo y la suma de esos mínimos)
Dos detalles técnicos que importan. Primero, los huecos de apertura: a veces el mercado abre lejos del cierre de ayer y ningún corte automático puede evitarlo. Aquí se usan los huecos reales de cada día. Segundo, el mínimo intradía conservador: para saber si el corte del 3% se habría activado, se toma el peor momento del día de cada activo y se suman, aunque en la práctica no coincidan en la hora. Son supuestos hechos para no regalarle nada al bot.

**[1:59 — Los 18 años]** (pantalla — BOCETO: gráfico de barras por año con los retornos de exp_details.algo; barras verdes hacia arriba y rojas hacia abajo, apareciendo de izquierda a derecha cada 0.5 s; 2007 y 2014 con asterisco «año parcial»; contador de años verdes que sube hasta 10)
Mira las barras. Los años positivos: 2007, 2010, 2011, 2012, 2014, 2017, 2019, 2020, 2021 y 2024. Diez. De los otros ocho, 2008 termina en cero y los demás pierden: 2009, 2013, 2015, 2016, 2018, 2022 y 2023. El mejor, 2017, con +6.5%. El peor, 2018, con −6.2%. También duelen 2015, con −5.8%, y 2022, con −4.8%. Ojo: 2007 y 2014 son años parciales. Resultado: 10 de 18, o sea 56%. El mínimo era 60%. No pasa.

**[2:32 — Las seis crisis]** (pantalla — BOCETO: seis tarjetas, una por crisis, con el retorno en verde o rojo)
Un filtro de pánico debería lucirse justo en las crisis. Veamos.
| Crisis | Retorno del año |
|---|---|
| 2008 | 0.0% |
| 2011 | +0.4% |
| 2015 | −5.8% |
| 2018 | −6.2% |
| 2020 | +2.7% |
| 2022 | −4.8% |
Solo 2 de las 6 terminan en positivo: 2011 y 2020. 2008 queda en cero y las otras tres pierden.

**[2:47 — El resultado total]** (pantalla — BOCETO: curva real de series/…v32.json dibujándose, bot en rojo y «comprar y esperar» en gris; tarjetas Sharpe 0.09, ≈0.4% anual, −11.6%)
Sumando todo, el Sharpe —la ganancia por unidad de riesgo— es 0.09, el crecimiento es de unos 0.4% al año con ×1.5 y la caída máxima, el peor tramo de pico a valle, −11.6%. Eso con un costo mínimo: solo deslizamiento de 0.2% en los cortes, sin diferencial de compra y venta ni la comisión de 3 puntos básicos por rotación que usa el laboratorio. Para comparar: comprar y esperar la misma cesta entre 2014 y 2024 dio Sharpe 0.47 y +58.9%. El bot terminó en +4.2%.

**[3:24 — El marcador de filtros]** (pantalla — BOCETO: checklist de exp_details.filters con ocho filas: Sharpe 2014–2024 ✗ · Sharpe 2007–2013 ✗ · batir a comprar y esperar ✗ · años positivos ✗ · sensibilidad a φ ✗ · señal rezagada ✓ · Deflated Sharpe — · costos completos —)
El tablero de filtros resume el veredicto. De los ocho que se revisan: el Sharpe de 2014–2024, 0.092, no llega al 0.60 que pide el script para decir «sirvió»; el de 2007–2013, 0.113, no llega al 0.30; no bate a comprar y esperar; los años positivos no llegan al 60%; y el resultado depende demasiado de φ. Pasa uno: la señal está rezagada y no mira el futuro. El Deflated Sharpe, la prueba que descuenta la suerte de haber probado muchas ideas, y los costos completos no se aplicaron en este experimento.

**[4:03 — El escenario que los datos no respaldan]** (pantalla — BOCETO: dos tarjetas lado a lado: «φ medido 0.90 → 56% de años positivos» y «φ = 0.5 → 61%, Sharpe 0.37» con la segunda en gris y la leyenda «no respaldado por los datos»)
Hay un escenario que luce mejor. Si el bot pudiera esquivar la mitad del día de pánico, el mismo ×1.5 daría Sharpe 0.37 y 61% de años positivos. Pero para eso tendría que salir al abrir Wall Street sabiendo ya cómo va a cerrar el día. Los datos horarios no respaldan esa reacción, así que no cuenta.

**[4:28 — ¿Y el azar?]** (pantalla — BOCETO: medidor de 0 a 1 con la meta en 0.95 y la aguja en 0.010; rótulo «Deflated Sharpe, experimento 38»)
Una pregunta de fondo: ¿esos diez años en verde son ventaja o suerte? El Deflated Sharpe, una prueba que descuenta la suerte de haber probado muchas ideas, da 0.010 para una configuración relacionada, el ×2 con las señales de ayer. Necesita 0.95. No confirma una ventaja real. Lo explico en el experimento 38.

**[4:52 — Con tu capital]** (pantalla — BOCETO: tarjeta «Con tu capital»: $100,000 → +$4,155 contra +$58,879, periodo 2014–2024)
Con $100,000 simulados entre 2014 y 2024, el bot ×1.5 termina en +$4,155. Comprar y esperar la misma cesta: +$58,879. Es una simulación histórica, no una promesa ni una recomendación; con $10,000 serían la décima parte.

**[5:09 — Conclusión]** (pantalla — BOCETO: sello «PARCIAL»; KPIs 56% · 2/6 · −6.2% · +2.7%)
Veredicto: parcial. Sobrevive los dos periodos, pero con 56% de años positivos queda bajo el 60% exigido, solo 2 de 6 crisis terminan en positivo y no bate a comprar y esperar. Es un resultado modesto, muy lejos de lo que necesita un reto de fondeo corto.

**[5:30 — Cierre]** (pantalla — BOCETO: logo ATLAS + URL; las 18 barras de fondo, atenuadas)
Todos los datos están en atlas-lab-one.vercel.app, experimento 32. Contenido educativo, no es asesoría financiera. El trading no se promete: se prueba.

---

## SHORT (9:16, ≈ 48 s)
Título del Short: Mi bot: +6.5% en 2017, −6.2% en 2018 #shorts
Fórmula visual (CLAUDE.md del canal): b-roll vertical real con overlay 0.6, Ken Burns alternado, subtítulos karaoke en MAYÚSCULAS con cifras en rojo, ticker arriba, whoosh + flash en cada corte; golpe (bass + sacudida) solo en 0-3 s y 14-26 s.

**[0-3 s]** "Mi bot: +6.5% en 2017, −6.2% en 2018."
- Boceto: b-roll de gráfico de velas subiendo y cayendo (kb=in); dos barras gigantes verde y roja; golpe de bass en la barra roja.

**[3-14 s]** "Revisé cada año, de 2007 a 2024. Diez terminaron en positivo, ocho no. Eso es 56%, y la regla del laboratorio pedía al menos 60%. No pasa."
- Boceto: las 18 barras de exp_details.algo apareciendo de izquierda a derecha con tick en cada una; contador «10/18»; línea roja en «60%».

**[14-26 s]** "Y en las seis crisis, justo cuando un filtro de pánico debería lucirse, solo dos terminaron en positivo. Sharpe de toda la cartera: 0.09, y el mínimo del laboratorio es 0.30."
- Boceto: seis tarjetas de crisis (2008, 2011, 2015, 2018, 2020, 2022) con 2 en verde y 4 en rojo/gris; texto «2 DE 6».

**[26-38 s]** "Comprar y esperar la misma cesta: Sharpe 0.47. Si mi bot esquivara la mitad del día de pánico, sería 0.37 y 61% de años positivos. Pero los datos horarios dicen que no puede."
- Boceto: barras 0.09 / 0.47, y una barra fantasma punteada en 0.37 con «NO RESPALDADO».

**[38-48 s]** "Veredicto: parcial. El video completo está en el canal. No es asesoría financiera. Así se ve un bot sin ventaja demostrada: un año…"
- Boceto: sello «PARCIAL»; logo ATLAS. Loop: la frase queda abierta («un año…») y enlaza con «+6.5% en 2017» del inicio.

## Descripción (YouTube)
Revisé mi bot año por año, de 2007 a 2024, y en las seis crisis: 10 de 18 años terminan en positivo (56%) y el mínimo que pide el laboratorio es 60%. Mejor año +6.5% (2017), peor año −6.2% (2018). Experimento #32, resultado parcial.

Datos completos: https://atlas-lab-one.vercel.app (experimento #32)

Capítulos: 0:00 Gancho · 0:18 La misma cuenta, vista año por año · 1:04 La vara de medir · 1:24 Dos supuestos que no regalan nada · 1:59 Los 18 años · 2:32 Las seis crisis · 2:47 El resultado total · 3:24 El marcador de filtros · 4:03 El escenario que los datos no respaldan · 4:28 ¿Y el azar? · 4:52 Con tu capital · 5:09 Conclusión · 5:30 Cierre

Contenido educativo. No es asesoría financiera ni recomendación de inversión.

Etiquetas: trading, bot de trading, backtest, retorno anual, Sharpe ratio, prop firm, gestión de riesgo, validación de estrategias, estrategia de trading, crisis financieras, ATLAS Lab

## Rúbrica (autoevaluación — criterios del CLAUDE.md del canal, 1-5)
| hook_0_3s | ritmo | promesa_cumplida | potencial_loop | claridad_no_traders | honestidad_atlas | audio | cta |
|---|---|---|---|---|---|---|---|
| 5 | 4 | 5 | 4 | 5 | 5 | 4 | 4 |

Promedio: **4.50** → cumple el corte (≥ 4.0; hook ≥ 4 y honestidad 5).
Notas: el hook son dos cifras propias que se contradicen; la lista de 18 años se lee agrupada (verdes / otros) para no cansar. El dato de las crisis ya se ve en el gráfico, así que la narración solo lo resume.

## Otros temas de este experimento
- Tema 1: `exp-032-validacion-18-anios.md` — Validación ejecutable-reactiva (año por año)
- Tema 2: `exp-032-t2-consistencia-56-por-ciento.md` — 56% de años positivos
- Tema 3: `exp-032-t3-suerte-o-ventaja.md` — ¿suerte o ventaja?
- Ver también (temas de otro experimento que usan las cifras del #32): `exp-029-t3-la-vara-del-sirvio.md`

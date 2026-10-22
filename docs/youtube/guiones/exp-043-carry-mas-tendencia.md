# Experimento #43 — Combinación carry + tendencia

Estado del guion: **BORRADOR — pendiente de aprobación**
Estado del experimento: **MURIÓ** (la cuenta se corta el 25-ene-2017; en 2007–2013 sobrevive con Sharpe 0.18, bajo el 0.30 exigido)
Serie: **G (epílogo)** — continúa el carry de #42 con los datos de #41.
Datos usados: `experiments.json` (v=43: analysis, description, verdict, notes, metrics, kpis, params_view, capital) · `exp_details.json` (algo con la sensibilidad de supuestos, filters) · `series/20260610_142006_carry-trend-combo-v43.json` (curva 1 = carry∧tendencia+filtro hasta la quiebra; curva 2 = «sin reglas de prop firm»; curva 3 = comprar y esperar) · fila #43 de la tabla «Con tu capital» (`docs/youtube/`).

## Títulos (opciones)
1. Carry + tendencia: la cuenta murió el 25 de enero de 2017
2. Combiné dos señales para rescatar el carry: Sharpe −0.63
3. ¿Dos señales mejor que una? Carry y tendencia en forex

## Miniatura
Fondo #09090b. Texto gigante rojo "25 ENE 2017" con una ✕; debajo, en blanco, "2 SEÑALES". Elemento visual: dos flechas verdes alineadas que chocan contra una pared roja. Logo ATLAS en la esquina inferior izquierda. (No repite los títulos.)

---

## VIDEO LARGO (16:9, ≈ 6:58)

**[0:00 — Gancho]** (pantalla — BOCETO: dos flechas verdes («CARRY» y «TENDENCIA») que apuntan en la misma dirección sobre la curva real de series/…v43.json; la curva cae al sello ✕ «25-ene-2017»; un segundo sello ✕ «23-ene-2017 sin interés»)
La cuenta murió el 25 de enero de 2017. Sin el interés del carry, habría muerto el 23. Combiné dos señales, carry y tendencia, para rescatar una idea que había fallado sola. El resultado: Sharpe de −0.63 y una cuenta cortada.

**[0:19 — Presentación]** (pantalla — BOCETO: rótulo «Experimento #43 · Combinación carry + tendencia» sobre velas con opacidad 0.12; logo ATLAS)
Este es el experimento #43 de ATLAS Lab: Combinación carry más tendencia. Todos los resultados están en la página del experimento.

**[0:29 — La idea]** (pantalla — BOCETO: cuadrícula 2×2: carry positivo/negativo × tendencia positiva/negativa; solo las casillas donde coinciden se pintan de verde y se operan)
La hipótesis es simple: el carry solo falla cuando va contra la corriente del precio. Entonces solo tomo posición cuando coinciden dos cosas: el signo del carry, que sale del diferencial de tasas con un mes de rezago, y el de la tendencia, que sale de la dirección de los últimos 120 días. Compro la moneda que paga más solo si además viene subiendo; vendo la que paga menos solo si además viene bajando.

**[1:01 — Las reglas del examen]** (pantalla — BOCETO: tarjeta params_view: señal carry∧momentum 120 días · filtro VIX 28 / crédito 40 días · ×2 · kill-switch −3% · φ = 0.94 · interés del carry sumado cada día)
Son 7 pares de forex, con apalancamiento ×2, corte automático del 3% y el filtro de pánico de siempre: el VIX, el índice del miedo, sobre 28 y el crédito bajo su media de 40 días. Cada día se suma el interés del carry a la cuenta. El día del disparo el bot sale con lo que puede ver a esa hora, con un φ medido de 0.94: esquiva solo cerca del 6% de ese día. Se prueba en 2014–2024 y en 2007–2013, fuera de muestra, es decir, años que el bot no vio al diseñarse.

**[1:42 — Los resultados]** (pantalla — BOCETO: curva real de series/…v43.json (rojo) sobre la de comprar y esperar (gris) hasta el corte; KPI en tarjetas: Sharpe −0.63 · −10.1% · caída máxima −13.8% · interés +1.2%)
En 2014–2024 la cuenta muere el 25 de enero de 2017, tras 917 días: Sharpe −0.63 —la ganancia por unidad de riesgo—, −10.1% y una caída máxima, el peor tramo de pico a valle, de −13.8%. Eso sumando el interés del carry, que hasta ese día aportó apenas +1.2% del capital. Sin el interés, muere el 23 de enero, con Sharpe −0.69. En 2007–2013 sobrevive, con Sharpe 0.18 y +6.9%, pero queda bajo el 0.30 que exige el laboratorio; sin el interés, 0.08. Y comprar y esperar la misma cesta, en las mismas fechas, rinde −4.4% con Sharpe −0.40, aunque esa cesta no cobra intereses.

**[2:26 — ¿Y si cambio los supuestos?]** (pantalla — BOCETO: línea de tiempo de enero a octubre de 2017 con una ✕ por supuesto, cayendo en su fecha; la fila de φ = 0.5 en gris punteado con «sobrevive · no respaldado»)
La pregunta natural: ¿y si cambio los supuestos?
| Supuesto (2014–2024) | La cuenta muere |
|---|---|
| Costo de 3 pb por rotación (el del laboratorio) | 17-ene-2017 |
| Margen de swap del broker de 1% anual | 20-ene-2017 |
| Sin el interés del carry; costo de 1 pb; swap de 0.5% | 23-ene-2017 |
| Base: interés sumado, φ = 0.94 | 25-ene-2017 |
| Rezago puro de un día | 31-ene-2017 |
| φ constante de 0.90 | 25-oct-2017 |
| φ = 0.5 (no respaldado por los datos) | sobrevive, Sharpe 0.14 |
Con los costos del laboratorio, el 17 de enero. Con un margen de swap, el 20. Con rezago puro, el 31. Incluso con un φ de 0.90 la cuenta llega solo hasta el 25 de octubre de 2017. Solo sobreviviría con φ de 0.5: salir al abrir Wall Street sabiendo cómo cierra el día, algo que los datos horarios no respaldan.

**[2:56 — La defensa del optimista]** (pantalla — BOCETO: curva «sin reglas de prop firm» de series/…v43.json en azul sobre la de comprar y esperar en gris; tarjetas +6.3% · Sharpe 0.12 · caída máxima −16.6% frente a −3.7% · Sharpe −0.10)
Un optimista diría: sin las reglas de la prop firm, la empresa de fondeo que cierra la cuenta si cae 10%, habría terminado 2014–2024 en +6.3%, con Sharpe 0.12 y una caída máxima de −16.6%, por encima de comprar y esperar, que dio −3.7%. Es cierto, y es hipotético. Esa caída supera el 10% que una prop firm tolera, la cuenta real se cierra antes, y el cálculo no incluye spread ni el margen del broker sobre el swap. Un Sharpe de 0.12 sigue lejos del 0.30.

**[3:33 — Lo poco que funcionó]** (pantalla — BOCETO: dos tarjetas con aviso amarillo: «2007–2013: sobrevive, +6.9% · Sharpe 0.18 (0.08 sin interés)» y «sin reglas, 2014–2024: +6.3% frente a −3.7%»; ambas con la leyenda «bajo el listón de 0.30» / «hipotético»)
Es justo reconocer lo poco que funcionó. En 2007–2013 la combinación sobrevive, con +6.9% y Sharpe 0.18, o 0.08 sin el interés. Y sin las reglas de la prop firm habría superado a comprar y esperar en 2014–2024. Pero el primer dato queda bajo el 0.30 que exige el laboratorio, y el segundo es hipotético, porque la cuenta real se cierra antes.

**[4:00 — El interés frente a los costos]** (pantalla — BOCETO: balanza: «interés +1.2% = 2 días más de vida» frente a «3 puntos básicos de costo = 8 días menos» (17-ene vs 25-ene))
Mira cómo se comparan el interés y los costos. El interés del carry le regaló a la cuenta apenas dos días: del 23 al 25 de enero. Un costo de 3 puntos básicos por rotación, en cambio, la adelanta al 17 de enero. El interés, además, no incluye el spread ni el margen del broker sobre el swap. La cuenta no está en un punto donde los detalles la salven.

**[4:30 — El marcador de filtros]** (pantalla — BOCETO: checklist de exp_details.filters: Sharpe 2014–2024 ✗ · Sharpe 2007–2013 ✗ · batir a comprar y esperar ✗ · sobrevivir en ambos periodos ✗ · costos ✗ · señal rezagada ✓ · Deflated Sharpe —)
El tablero de filtros: el Sharpe de 2014–2024, −0.63, no llega al 0.30; el de 2007–2013, 0.18, tampoco; no bate a comprar y esperar, con −10.1% frente a −4.4%; no sobrevive en los dos periodos; y con los costos del laboratorio la cuenta muere antes. Pasa uno: el carry va rezagado un mes, el momentum un día, y el filtro un día; no mira el futuro. El Deflated Sharpe, la prueba que descuenta la suerte de haber probado muchas ideas, no se aplicó.

**[5:06 — Con tu capital]** (pantalla — BOCETO: tarjeta «Con tu capital»: $100,000 → −$10,098 contra −$4,422, rotulada «2014–2017, hasta el corte»; nota: «la cesta de comprar y esperar no incluye intereses»)
Con $100,000 simulados, la cuenta se cierra con −$10,098. Comprar y esperar la misma cesta, en las mismas fechas, 2014–2017: −$4,422. Es una simulación histórica, no una promesa; con $10,000 serían la décima parte.

**[5:22 — Qué aprendimos]** (pantalla — BOCETO: balanza: «interés del carry +1.2%» contra «pérdida de la cuenta −10.1%»; frase final en grande)
El interés del carry no alcanza a compensar la pérdida: la combinación muere en enero de 2017 con el interés y sin él, con solo dos días de diferencia. Y el resultado es robusto a los supuestos: la mayoría de las variantes mueren en enero de 2017. Lo que enseña el experimento es que, cuando una idea ya viene débil, sumarle una segunda señal no la vuelve robusta: cambia la fecha de la muerte, no el desenlace.

**[5:55 — Conclusión]** (pantalla — BOCETO: sello «NO SIRVIÓ»; KPIs −0.63 · 0.18 · 917 días · 25-ene-2017)
Veredicto: no sirvió. Con la salida medida del día del disparo, la cuenta muere en 2014–2024 el 25 de enero de 2017, aun sumando el interés del carry. En 2007–2013 sobrevive con Sharpe 0.18, bajo el 0.30 que exige el laboratorio. Queda un último camino en esta serie: el posicionamiento de los especuladores.

**[6:19 — Ficha del experimento #43]** (pantalla — BOCETO: tarjeta de ficha con sello «NO SIRVIÓ», cuatro líneas y la URL atlas-lab-one.vercel.app/e/43; logo ATLAS)
Ficha del experimento #43.
Estado: no sirvió.
Cifra clave: Sharpe de menos 0.63 y cuenta cortada el 25 de enero de 2017; sin el interés del carry, el 23.
Filtro que decidió: sobrevivir en los dos periodos, que dio falso: en 2007–2013 sobrevive con 0.18, bajo el 0.30 que exige el laboratorio.
Lección: sumar una segunda señal a una idea débil cambia la fecha de la muerte, no el desenlace.
Revísalo completo en atlas-lab-one.vercel.app/e/43.

**[6:47 — Cierre]** (pantalla — BOCETO: logo ATLAS + URL; dos flechas alineadas de fondo)
Todos los datos están en atlas-lab-one.vercel.app/e/43. Contenido educativo, no es asesoría financiera. El trading no se promete: se prueba.

---

## SHORT (9:16, ≈ 52 s)
Título del Short: Dos señales de acuerdo. Cuenta muerta igual #shorts
Fórmula visual (CLAUDE.md del canal): b-roll vertical real con overlay 0.6, Ken Burns alternado, subtítulos karaoke en MAYÚSCULAS con cifras en rojo, ticker arriba, whoosh + flash en cada corte; golpe (bass + sacudida) solo en 0-3 s y 14-28 s.

**[0-3 s]** "Dos señales de acuerdo. Cuenta muerta igual."
- Boceto: b-roll de dos flechas o dos manos que chocan (kb=in); dos flechas verdes y una ✕ roja; golpe de bass.

**[3-14 s]** "Carry más tendencia: solo opero donde las dos señales coinciden, con filtro de pánico y el interés del carry sumado a la cuenta."
- Boceto: cuadrícula 2×2 donde se iluminan solo las casillas que coinciden; texto «CARRY + TENDENCIA».

**[14-28 s]** "Resultado: la cuenta murió el 25 de enero de 2017, con Sharpe menos 0.63. El interés del carry aportó apenas 1.2% del capital. Sin ese interés, murió el 23 de enero."
- Boceto: curva real de series/…v43.json cayendo hasta el sello ✕; dos fechas (25-ene y 23-ene) con sacudida en la segunda.

**[28-41 s]** "Con costos de 3 puntos básicos, murió el 17 de enero. Con un margen de swap de 1%, el 20. Solo sobreviviría si el bot esquivara la mitad del día de pánico, y los datos horarios dicen que no puede."
- Boceto: línea de tiempo con tres ✕ (17, 20 y 25 de enero); una cuarta marca gris «φ = 0.5 · NO RESPALDADO».

**[41-52 s]** "En 2007–2013 sobrevive, con Sharpe 0.18, bajo el 0.30 exigido. Video completo en el canal. Experimento 43 completo en el enlace. No es asesoría financiera. Dos señales de acuerdo, y la cuenta…"
- Boceto: sello «NO SIRVIÓ»; tarjeta «experimento #43 completo en el enlace» y la URL corta; logo ATLAS. Loop: la frase queda abierta («y la cuenta…») y enlaza con «Cuenta muerta igual».

## Descripción (YouTube)
https://atlas-lab-one.vercel.app/e/43?utm_source=youtube&utm_medium=video&utm_campaign=exp043-t1
Ficha del experimento #43 (combinación carry + tendencia): no sirvió · la cuenta muere el 25-ene-2017 (Sharpe −0.63, 917 días); sin el interés del carry, el 23-ene-2017 · en 2007–2013 sobrevive con Sharpe 0.18, bajo el 0.30.
Combiné carry y tendencia (solo operar donde coinciden el signo del diferencial de tasas y el momentum de 120 días) en 7 pares de forex, con filtro de pánico, ×2 y el interés del carry sumado cada día. La cuenta muere el 25 de enero de 2017 (Sharpe −0.63); sin el interés, el 23. En 2007–2013 sobrevive con Sharpe 0.18, bajo el 0.30 exigido. Experimento #43.

Capítulos: 0:00 Gancho · 0:19 Presentación · 0:29 La idea · 1:01 Las reglas del examen · 1:42 Los resultados · 2:26 ¿Y si cambio los supuestos? · 2:56 La defensa del optimista · 3:33 Lo poco que funcionó · 4:00 El interés frente a los costos · 4:30 El marcador de filtros · 5:06 Con tu capital · 5:22 Qué aprendimos · 5:55 Conclusión · 6:19 Ficha del experimento #43 · 6:47 Cierre

Contenido educativo. No es asesoría financiera ni recomendación de inversión.

Etiquetas: carry trade, tendencia, momentum, forex, backtest, bot de trading, prop firm, divisas, Sharpe ratio, estrategia de trading, ATLAS Lab

## Descripción del Short
https://atlas-lab-one.vercel.app/e/43?utm_source=youtube&utm_medium=short&utm_campaign=exp043-t1
Ficha del experimento #43: con carry + tendencia, la cuenta murió el 25-ene-2017 con Sharpe −0.63. No sirvió. Video completo en el canal. Contenido educativo, no es asesoría financiera.

## Rúbrica (autoevaluación — criterios del CLAUDE.md del canal, 1-5)
| hook_0_3s | ritmo | promesa_cumplida | potencial_loop | claridad_no_traders | honestidad_atlas | audio | cta |
|---|---|---|---|---|---|---|---|
| 4 | 4 | 5 | 4 | 4 | 5 | 4 | 4 |

Promedio: **4.25** → cumple el corte (≥ 4.0; hook ≥ 4 y honestidad 5).
Notas: el hook es una paradoja corta; la tabla de sensibilidad ofrece un bloque visual fuerte. Punto débil: «swap» y «puntos básicos» se mencionan sin explicación detallada en el Short (en el largo se enuncian como costos).

## Otros temas de este experimento
1. Tema 1 (este archivo) — `exp-043-carry-mas-tendencia.md` — Carry + tendencia: la cuenta murió el 25 de enero de 2017
2. Tema 2 — `exp-043-t2-siete-escenarios-misma-muerte.md` — siete escenarios, casi la misma muerte
3. Tema 3 — `exp-043-t3-phi-el-6-por-ciento.md` — φ, el 6% del día de pánico que sí se esquiva
4. Tema 4 — `exp-043-t4-tres-fechas-de-muerte.md` — tres fechas de muerte, cada capa compra tiempo

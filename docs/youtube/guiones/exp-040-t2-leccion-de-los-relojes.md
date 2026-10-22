# Experimento #40 — Veredicto final de 40 experimentos · Tema 2: la lección de los dos relojes

Estado del guion: **BORRADOR — pendiente de aprobación**
Tema 2 de 3 del experimento #40. Qué aporta frente a los otros temas: es el CONCEPTO central de la serie. El tema 1 resume los 40 experimentos en cinco números y el tema 3 explica por qué los retos fallan por matemática y no solo por disciplina; este tema se queda con una sola pregunta, «¿qué información existía cuando el bot decidió?», y la responde con cuatro experimentos: con el cierre de hoy los Sharpe son altos y no ejecutables; con el cierre de ayer, −0.03.
Estado del experimento: **MURIÓ** (la mejor versión ejecutable da Sharpe −0.03, Deflated Sharpe 0.010 y 6.4% de pasar un reto en 252 días)
Serie: **G — Construyendo un bot (y por qué murió)** · es el cierre de la serie.
Datos usados: `experiments.json` (v=40: description, analysis, verdict, notes, metrics, kpis, capital; v=15, v=16, v=26 y v=27: verdict, notes, kpis) · `exp_details.json` (v40: filters; v27: algo) · `series/20260610_141058_veredicto-final-40-experimentos-v40.json` · fila #40 de la tabla «Con tu capital» (`docs/youtube/`).

## Títulos (opciones)
1. El mismo filtro: Sharpe 2.12 con el cierre de hoy, −1.00 con el de ayer
2. La lección de los dos relojes: qué sabía tu bot cuando decidió
3. Sharpe 1.23 que no se podía ejecutar: la pregunta que cambia todo

## Miniatura
Fondo #09090b. Dos relojes enfrentados: el de la izquierda, gris y tachado con una ✕, marcado «HOY»; el de la derecha, en rojo (#e11d2a), marcado «AYER». Texto grande: «DATO PROHIBIDO». Logo ATLAS en la esquina inferior derecha. (No repite las palabras de los títulos.)

---

## VIDEO LARGO (16:9, ≈ 4:23)

**[0:00 — Gancho]** (pantalla — BOCETO: dos relojes enfrentados; bajo el reloj gris «cierre de hoy», el contador sube a «Sharpe 2.12»; bajo el rojo «cierre de ayer», cae a «−1.00»)
El mismo filtro, la misma estrategia. Si el bot pudiera conocer el cierre de hoy para decidir hoy, el Sharpe era de 2.12. Con el cierre de ayer, la información que un bot de verdad tiene: menos 1.00. Esta es la lección que atraviesa mis 40 experimentos.

**[0:19 — Este es el experimento #40]** (pantalla — BOCETO: rótulo «EXPERIMENTO #40 · VEREDICTO FINAL DE 40 EXPERIMENTOS» con el logo ATLAS; la URL pequeña debajo)
Este es el experimento #40 de ATLAS Lab: Veredicto final de 40 experimentos. Todos los resultados están en la página del experimento. De los 40, hoy elijo una sola idea, porque es la que más cambió mis conclusiones.

**[0:34 — Los dos relojes]** (pantalla — BOCETO: línea de tiempo de un día: cierre del mercado, 17:30 el bot decide, mañana el bot opera; arriba, una flecha tachada «decidir hoy con el cierre de hoy»)
Un bot real decide a las 17:30 con lo que ya cerró y opera al día siguiente. Hay dos relojes. El reloj imposible: usar el VIX, el índice del miedo, y el crédito del cierre de hoy para decidir lo que ya pasó hoy. Y el reloj posible: usar el cierre de ayer para decidir hoy. Parecen casi iguales, pero entre los dos cambia el resultado entero.

**[1:01 — Cuatro experimentos, el mismo patrón]** (pantalla — BOCETO: tabla con cuatro filas; la columna izquierda en gris con aviso «no ejecutable» y la derecha en rojo)
| Experimento | Con el cierre de hoy (no ejecutable) | Con el cierre de ayer (ejecutable) |
|---|---|---|
| 15 | Sharpe 1.38 | a ×2 y ×3, Sharpe 0.25; a ×4 revienta |
| 16 | Sharpe 1.23 | la base muere: Sharpe −0.17 |
| 26 | Sharpe 2.12 | Sharpe −1.00 |
| 40 | — | Sharpe −0.03 (cartera ×2, 2007–2024) |
El Sharpe es la ganancia por unidad de riesgo. Los tres primeros usan el cierre del mismo día y lucen Sharpe de 1.38, 1.23 y 2.12. Cuando se rezaga la señal un día, caen a 0.25, a menos 0.17 y a menos 1.00. Y la versión final, con la señal de ayer, queda en menos 0.03.

**[1:30 — Un resultado demasiado bueno]** (pantalla — BOCETO: un semáforo que pasa de verde a ámbar con el rótulo «demasiado bueno = alarma»; una lista con ticks: fuera de muestra, varias crisis, y una ✕ en «¿se puede ejecutar?»)
Hay una frase del experimento 26 que me quedo: un resultado demasiado bueno es una alarma, no un premio. Esa estrategia pasaba las pruebas que se le ponían, incluso la de años que no había visto. Le faltaba una sola pregunta: ¿se puede ejecutar de verdad? El experimento 27 la hizo, rezagando todo un día, y cambió todo el veredicto.

**[1:54 — La versión que sí se puede ejecutar]** (pantalla — BOCETO: curva real de series/…v40.json, bot en rojo y comprar y esperar en gris, 2007–2024; KPIs: Sharpe −0.03 · Deflated Sharpe 0.010 · 6.4% · −$500)
La versión ejecutable es la cartera ×2 con señal de ayer, en 2007–2024. Su Sharpe es menos 0.03. Con la salida medida el día del disparo, con un φ de 0.94, es 0.02, tampoco una ventaja. El Deflated Sharpe, la prueba que descuenta la suerte de haber probado muchas versiones, da 0.010 frente a los 0.95 necesarios. Probabilidad de pasar un reto en 252 días: 6.4%. Valor esperado: menos 500 dólares por intento.

**[2:23 — Tres comprobaciones para cualquier backtest]** (pantalla — BOCETO: tres tarjetas con casillas: «¿la señal usa el cierre del mismo día que cobra?» · «¿hay rezago de al menos un día?» · «¿la salida del día de pánico es alcanzable?»)
Tres comprobaciones que puedes aplicar a cualquier backtest. Una: ¿la señal usa el cierre del mismo día en que cobra el retorno? Dos: ¿hay un rezago de al menos un día? Tres: ¿la salida del día de pánico es alcanzable? Aquí el bot, con datos horarios, esquiva solo cerca del 6% del movimiento de ese día. La respuesta honesta a la pregunta de los relojes separa un resultado que se puede ejecutar de uno que solo existe en el papel.

**[2:54 — El marcador de filtros]** (pantalla — BOCETO: checklist de exp_details.filters: Deflated Sharpe ✗ · Sharpe ejecutable ✗ · señal rezagada 1 día ✓ · batir a comprar y esperar ✗ · probabilidad de pasar ✗ · costos completos —)
El tablero de filtros de la versión final. El Deflated Sharpe, 0.010, no llega a 0.95. El Sharpe de menos 0.03 no llega al 0.30 del laboratorio. No bate a comprar y esperar, con menos 7.1% frente a más 68.7%. La probabilidad de pasar en 252 días es 6.4%, con una mediana de 1.6 años. Pasa uno, justamente el de esta lección: la señal está rezagada un día. Los costos completos no se aplicaron: solo hay deslizamiento de 0.2% en el corte automático.

**[3:27 — Con tu capital]** (pantalla — BOCETO: tarjeta «Con tu capital»: $100,000 → −$7,102 contra +$68,723, 2007–2024; nota: «las curvas con el cierre del mismo día quedan marcadas como no ejecutables»)
Con $100,000 simulados entre 2007 y 2024, la cartera ×2 con señales de ayer termina en −$7,102. Comprar y esperar la misma cesta: +$68,723. Las curvas que usan el cierre del mismo día terminan mucho más arriba, pero en la tabla «Con tu capital» del sitio están marcadas como información que un bot real no tiene. Es una simulación histórica, no una promesa; con $10,000 serían la décima parte.

**[3:54 — Ficha del experimento #40]** (pantalla — BOCETO: tarjeta de ficha con sello «NO SIRVIÓ», cuatro líneas y la URL atlas-lab-one.vercel.app/e/40; logo ATLAS)
Ficha del experimento #40. Estado: no sirvió. Cifra clave: Sharpe de menos 0.03 con la señal de ayer, frente a 1.23 o más con el cierre del mismo día. Filtro que decidió: la señal rezagada un día, con Deflated Sharpe de 0.010. Lección: antes de confiar en un backtest, pregunta qué información existía cuando se decidió. Revísalo completo en atlas-lab-one.vercel.app/e/40. Contenido educativo, no es asesoría financiera. El trading no se promete: se prueba.

---

## SHORT (9:16, ≈ 49 s)
Título del Short: El mismo filtro: Sharpe 2.12 con hoy, −1.00 con ayer #shorts
Fórmula visual (CLAUDE.md del canal): b-roll vertical real con overlay 0.6, Ken Burns alternado, subtítulos karaoke en MAYÚSCULAS con cifras en rojo, ticker arriba, whoosh + flash en cada corte; golpe (bass + sacudida) solo en 0-3 s y 14-28 s.

**[0-3 s]** "El mismo filtro: Sharpe 2.12 con el cierre de hoy. Menos 1.00 con el de ayer."
- Boceto: b-roll de un reloj de pared girando (kb=in); «2.12» gris tachado y «−1.00» rojo gigante; golpe de bass.

**[3-14 s]** "Hay dos relojes. El imposible: decidir hoy con el cierre de hoy. El posible: decidir hoy con el cierre de ayer. Un bot real decide a las 17:30 y opera al día siguiente."
- Boceto: línea de tiempo del día con la flecha tachada «hoy con hoy» y la verde «ayer para hoy».

**[14-28 s]** "Experimento 15: Sharpe 1.38 con el cierre de hoy, 0.25 con el de ayer. Experimento 16: 1.23 y la base muere con menos 0.17. Y el 26: de 2.12 a menos 1.00."
- Boceto: tres filas que caen; sacudida al llegar al −1.00.

**[28-40 s]** "La versión que sí se puede ejecutar: Sharpe menos 0.03, Deflated Sharpe 0.010. Un resultado demasiado bueno es una alarma, no un premio."
- Boceto: curva real de series/…v40.json en rojo; medidor 0.010 lejos de 0.95.

**[40-48 s]** "Video completo en el canal. Experimento 40 completo en el enlace. No es asesoría financiera. Antes de creer un backtest, pregunta: ¿qué reloj usó?"
- Boceto: sello «NO SIRVIÓ»; logo ATLAS y «EXPERIMENTO #40 · ENLACE». Loop: la pregunta final enlaza con el gancho (dos relojes).

## Descripción (YouTube)
**Video largo**
https://atlas-lab-one.vercel.app/e/40?utm_source=youtube&utm_medium=video&utm_campaign=exp040-t2
Ficha del experimento #40 (veredicto final de 40 experimentos): no sirvió. Versión ejecutable (señal de ayer, ×2, 2007–2024): Sharpe −0.03, Deflated Sharpe 0.010 (se necesita 0.95), 6.4% de pasar un reto en 252 días.
La lección de los dos relojes: con el cierre del mismo día, el Sharpe de un filtro llegaba a 1.23, 1.38 o 2.12 (experimentos 15, 16 y 26); con el cierre de ayer, 0.25, −0.17 y −1.00.

Capítulos: 0:00 Gancho · 0:19 Este es el experimento #40 · 0:34 Los dos relojes · 1:01 Cuatro experimentos, el mismo patrón · 1:30 Un resultado demasiado bueno · 1:54 La versión que sí se puede ejecutar · 2:23 Tres comprobaciones para cualquier backtest · 2:54 El marcador de filtros · 3:27 Con tu capital · 3:54 Ficha del experimento #40

**Short**
https://atlas-lab-one.vercel.app/e/40?utm_source=youtube&utm_medium=short&utm_campaign=exp040-t2
Experimento #40: el mismo filtro da Sharpe 2.12 con el cierre de hoy y −1.00 con el de ayer; la versión ejecutable, −0.03. No sirvió.

Contenido educativo. No es asesoría financiera ni recomendación de inversión.

Etiquetas: backtest, sesgo de anticipación, lookahead bias, rezago de señal, Sharpe ratio, VIX, bot de trading, validación de estrategias, prop firm, trading algorítmico, ATLAS Lab

## Rúbrica (autoevaluación — criterios del CLAUDE.md del canal, 1-5)
| hook_0_3s | ritmo | promesa_cumplida | potencial_loop | claridad_no_traders | honestidad_atlas | audio | cta |
|---|---|---|---|---|---|---|---|
| 5 | 4 | 5 | 4 | 4 | 5 | 4 | 4 |

Promedio: **4.38** → cumple el corte (≥ 4.0; hook ≥ 4 y honestidad 5).
Notas: el hook son dos cifras opuestas del mismo filtro (2.12 y −1.00, experimento 26). Los Sharpe «de hoy» se rotulan como no ejecutables. Punto débil: las cifras de los experimentos 15, 16 y 26 vienen de configuraciones distintas (periodos y apalancamientos); se presentan por fila, sin sumarlas ni compararlas entre sí.

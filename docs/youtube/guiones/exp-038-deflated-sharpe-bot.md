# Experimento #38 — Deflated Sharpe de la versión ejecutable

Estado del guion: **BORRADOR — pendiente de aprobación**
Estado del experimento: **MURIÓ** (Deflated Sharpe 0.010 frente a los 0.95 necesarios)
Serie: **G — Construyendo un bot (y por qué murió)**
Datos usados: `experiments.json` (v=38: analysis, verdict, notes, metrics, kpis, params_view, capital) · `exp_details.json` (algo con la fórmula y los casos N=20 y N=91, filters) · `series/20260610_140955_deflated-sharpe-del-ejecutable-v38.json` (curva 1 = cartera ×2 con señales de ayer 2007–2024; curva 2 = comprar y esperar) · fila #38 de la tabla «Con tu capital» (`docs/youtube/`).

## Títulos (opciones)
1. 40 intentos: el azar da Sharpe 0.46; mi bot, −0.03
2. El Deflated Sharpe de mi bot: 0.010 (se necesita 0.95)
3. ¿Ventaja o suerte? El juez estadístico le puso 0.010 a mi bot

## Miniatura
Fondo #09090b. Un mazo de juez golpeando; a la izquierda "0.010" gigante en rojo, a la derecha "0.95" en blanco más pequeño con una ✕ entre ambos. Logo ATLAS en la esquina superior derecha. (No repite los títulos.)

---

## VIDEO LARGO (16:9, ≈ 5:06 · experimento corto: rango de 4 a 6 min)

**[0:00 — Gancho]** (pantalla — BOCETO: dos barras enfrentadas: «lo que saca el azar tras ~40 intentos: 0.46» (gris) y «mi mejor versión: −0.03» (roja, por debajo de cero); cartel «DEFLATED SHARPE 0.010»)
Si pruebas unas 40 versiones de una estrategia que no vale nada y te quedas con la mejor, esa mejor tendrá, en promedio, un Sharpe de 0.46, con 5,609 días de datos. La mejor de las mías, después de unas 40 configuraciones, sacó −0.03. Esa diferencia es lo que mide el Deflated Sharpe, y mi bot obtuvo 0.010 sobre los 0.95 que hacen falta.

**[0:28 — El problema de probar mucho]** (pantalla — BOCETO: 40 monedas lanzándose; una se queda con una racha de caras y se ilumina; texto «si solo te muestran a la ganadora…»)
Imagina que 40 personas adivinan el resultado de una moneda varias veces seguidas. Alguna acertará una racha larga por pura suerte. Si solo te presentan a esa persona, parecerá clarividente. Con las estrategias pasa igual: quien prueba muchas versiones y enseña la mejor está enseñando, en parte, azar.

**[0:50 — Qué es el Deflated Sharpe]** (pantalla — BOCETO: fórmula conceptual en tres piezas: «Sharpe observado» − «mejor Sharpe esperado por azar con N intentos» → probabilidad entre 0 y 1; barra con meta en 0.95)
El Sharpe es la ganancia por unidad de riesgo. El Deflated Sharpe, de Bailey y López de Prado, lo compara con el mejor Sharpe que esperarías solo por azar, dado cuántas versiones probaste, y además ajusta por las rarezas de la distribución de los retornos. El resultado es una probabilidad: si pasa de 0.95, hay evidencia de ventaja real. Si no, el Sharpe no se distingue de la suerte.

**[1:20 — La fórmula, sin fórmulas]** (pantalla — BOCETO: cuatro peldaños numerados que se iluminan: 1 Sharpe del bot · 2 mejor Sharpe del azar con N intentos (0.464 al año con N = 40) · 3 ajuste por la forma de los retornos · 4 probabilidad final)
Si quieres ver cómo se arma sin fórmulas, son cuatro pasos. Uno: calcular el Sharpe del bot. Dos: calcular el mejor Sharpe que produciría el puro azar entre N intentos; con 40 intentos y 5,609 días, es 0.464 al año. Tres: ajustar por la forma de los retornos, porque si tienen asimetría o colas gordas el azar tiene más margen para engañar. Cuatro: convertir la diferencia en una probabilidad. Esa probabilidad es el Deflated Sharpe.

**[1:52 — Qué se calculó]** (pantalla — BOCETO: tarjeta params_view: ×2 · señal de ayer · 5,609 días (2007–2024) · ~40 intentos (estimado) · umbral 0.95)
Usé los retornos diarios de la versión ejecutable del bot: apalancamiento ×2, señales de ayer, 5,609 días entre 2007 y 2024. Su Sharpe es −0.03. El número de intentos lo estimé en unos 40 entre configuraciones y experimentos; no es un conteo exacto, y enseguida veremos que no importa.

**[2:14 — El veredicto del juez]** (pantalla — BOCETO: medidor de 0 a 1; la aguja sube a 0.010 y se queda lejísimos de la meta 0.95; al lado, barras «azar: 0.46» y «bot: −0.03»)
Con 40 intentos, el mejor Sharpe que daría el puro azar es 0.46. El bot sacó −0.03, muy por debajo. Resultado: Deflated Sharpe de 0.010. Se necesita 0.95. No hay evidencia estadística de ventaja: el bot no se distingue del azar.

**[2:33 — ¿Y si probé menos o más?]** (pantalla — BOCETO: tres tarjetas en fila: N = 20 → 0.020 · N = 40 → 0.010 · N = 91 → 0.004, todas con ✕ frente a la meta 0.95)
Para que nadie diga que el 40 estaba mal escogido, cambié el número de intentos.
| Intentos considerados | Deflated Sharpe |
|---|---|
| 20 | 0.020 |
| 40 | 0.010 |
| 91 | 0.004 |
Con 20 intentos, 0.020. Con 91, 0.004. En todos los casos queda por debajo de 0.03, y la meta es 0.95. La conclusión no depende del número exacto.

**[2:53 — Con la salida medida]** (pantalla — BOCETO: tarjeta comparativa «operando completo el día del disparo: Sharpe −0.03 · DSR 0.010» vs «con la salida medida (φ = 0.94): Sharpe 0.025 · DSR 0.019»)
Como en los experimentos anteriores, hay una versión con la salida medida el día del disparo, con un φ de 0.94. Ahí el Sharpe sería 0.025 y el Deflated Sharpe, 0.019. También muy lejos de 0.95. Y como límite, en este cálculo no entran spread ni la comisión por rotación del laboratorio, solo el deslizamiento de 0.2% en los cortes.

**[3:19 — Por qué importa más allá del bot]** (pantalla — BOCETO: checklist para el espectador: «¿cuántas versiones probó?» · «¿qué periodo no vio?» · «¿Deflated Sharpe?» con casillas que se marcan)
Este bot tiene Sharpe negativo, así que el ajuste solo confirma lo evidente. Pero la pregunta sirve para cualquier backtest bonito: ¿cuántas versiones se probaron antes de mostrar esta? Si nadie te lo dice, el número que ves ya está inflado. En el experimento 81 lo aplico a gran escala, con miles de estrategias.

**[3:43 — El marcador de filtros]** (pantalla — BOCETO: checklist de exp_details.filters: Deflated Sharpe ✗ · Sharpe observado ✗ · batir a comprar y esperar ✗ · número de intentos «estimado» — · costos completos —)
El tablero de filtros: el Deflated Sharpe, 0.010, no llega a 0.95; el Sharpe observado, −0.03, no llega al 0.30 del laboratorio; y no bate a comprar y esperar, con −7.1% frente a +68.7%. El número de intentos, 40, es una estimación, y por eso lo probé también con 20 y con 91. Los costos completos no se aplicaron: solo hay deslizamiento de 0.2% en el corte automático.

**[4:13 — Con tu capital]** (pantalla — BOCETO: tarjeta «Con tu capital»: $100,000 → −$7,102 contra +$68,723, 2007–2024; nota: «esta prueba mide si el Sharpe supera al azar, no cuánto rendiría una cuenta»)
Con $100,000 simulados entre 2007 y 2024, esa cartera ×2 termina en −$7,102. Comprar y esperar la misma cesta: +$68,723. Este experimento no mide cuánto rendiría una cuenta, sino si su Sharpe supera al azar. Es una simulación histórica, no una promesa; con $10,000 serían la décima parte.

**[4:35 — Conclusión]** (pantalla — BOCETO: sello «NO SIRVIÓ»; KPIs −0.03 · 0.46 · 0.010 · 0.95)
Veredicto: no sirvió. El Sharpe de −0.03 queda muy por debajo del 0.46 que se esperaría solo por azar tras unos 40 intentos, y el Deflated Sharpe de 0.010 está lejos del 0.95. Ni con 20 intentos ni con 91 cambia la historia.

**[4:55 — Cierre]** (pantalla — BOCETO: logo ATLAS + URL; mazo de juez en primer plano)
Todos los datos están en atlas-lab-one.vercel.app, experimento 38. Contenido educativo, no es asesoría financiera. El trading no se promete: se prueba.

---

## SHORT (9:16, ≈ 50 s)
Título del Short: El azar saca Sharpe 0.46. Mi bot, −0.03 #shorts
Fórmula visual (CLAUDE.md del canal): b-roll vertical real con overlay 0.6, Ken Burns alternado, subtítulos karaoke en MAYÚSCULAS con cifras en rojo, ticker arriba, whoosh + flash en cada corte; golpe (bass + sacudida) solo en 0-3 s y 14-28 s.

**[0-3 s]** "El azar saca Sharpe 0.46. Mi bot, menos 0.03."
- Boceto: b-roll de ruleta o dados (kb=in); dos cifras enfrentadas, «0.46» en gris y «−0.03» en rojo; golpe de bass al caer el rojo.

**[3-14 s]** "Si pruebas unas 40 versiones de una estrategia y te quedas con la mejor, parte de su brillo es suerte. El Deflated Sharpe descuenta esa suerte."
- Boceto: 40 monedas lanzándose y una iluminada; subtítulo «LA GANADORA ES SUERTE».

**[14-28 s]** "Con unos 40 intentos, el mejor Sharpe que daría el puro azar es 0.46. Mi mejor versión sacó menos 0.03. Deflated Sharpe: 0.010. Se necesita más de 0.95."
- Boceto: medidor que sube a 0.010 y se queda lejos de la meta 0.95; sacudida al marcar 0.010.

**[28-40 s]** "¿Y si hubiera probado solo 20 versiones? Da 0.020. ¿Y 91? Da 0.004. En todos los casos queda por debajo de 0.03. La conclusión no cambia: no hay evidencia de ventaja."
- Boceto: tres tarjetas N = 20 / 40 / 91 con sus valores y ✕ rojas.

**[40-50 s]** "Si un backtest solo te muestra a la ganadora, pregunta cuántas versiones probó. Video completo en el canal. No es asesoría financiera. ¿Ventaja o suerte? Mira lo que saca el azar:"
- Boceto: sello «NO SIRVIÓ»; logo ATLAS. Loop: la frase abierta enlaza con «El azar saca Sharpe 0.46».

## Descripción (YouTube)
Apliqué el Deflated Sharpe (Bailey y López de Prado) a mi bot ×2 con señales de ayer, 2007–2024 (5,609 días), tras unos 40 intentos. El Sharpe de −0.03 queda muy por debajo del 0.46 que daría el puro azar; el Deflated Sharpe es 0.010 (se necesita 0.95), y con 20 o 91 intentos sigue por debajo de 0.03. Experimento #38.

Datos completos: https://atlas-lab-one.vercel.app (experimento #38)

Capítulos: 0:00 Gancho · 0:28 El problema de probar mucho · 0:50 Qué es el Deflated Sharpe · 1:20 La fórmula, sin fórmulas · 1:52 Qué se calculó · 2:14 El veredicto del juez · 2:33 ¿Y si probé menos o más? · 2:53 Con la salida medida · 3:19 Por qué importa más allá del bot · 3:43 El marcador de filtros · 4:13 Con tu capital · 4:35 Conclusión · 4:55 Cierre

Contenido educativo. No es asesoría financiera ni recomendación de inversión.

Etiquetas: Deflated Sharpe, Sharpe ratio, backtest, overfitting, múltiples pruebas, López de Prado, bot de trading, estadística, validación de estrategias, trading cuantitativo, ATLAS Lab

## Rúbrica (autoevaluación — criterios del CLAUDE.md del canal, 1-5)
| hook_0_3s | ritmo | promesa_cumplida | potencial_loop | claridad_no_traders | honestidad_atlas | audio | cta |
|---|---|---|---|---|---|---|---|
| 5 | 4 | 5 | 4 | 4 | 5 | 4 | 4 |

Promedio: **4.38** → cumple el corte (≥ 4.0; hook ≥ 4 y honestidad 5).
Notas: el hook son dos cifras opuestas y verificables (0.46 vs −0.03); funciona mejor con audiencia que ya conoce el Sharpe. Punto débil: «Deflated Sharpe» es un término técnico; se resuelve con la analogía de las 40 monedas y con el medidor en pantalla.

## Otros temas de este experimento
1. Tema 1 (este archivo) — `exp-038-deflated-sharpe-bot.md` — 40 intentos: el azar da Sharpe 0.46; mi bot, −0.03
2. Tema 2 — `exp-038-t2-deflated-sharpe-paso-a-paso.md` — el cálculo paso a paso
3. Tema 3 — `exp-038-t3-liston-030-contra-azar-046.md` — el listón de 0.30 contra el azar de 0.46

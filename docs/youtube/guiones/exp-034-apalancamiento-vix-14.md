# Experimento #34 — Escalonado VIX<14 ejecutable (apalancamiento graduado)

Estado del guion: **BORRADOR — pendiente de aprobación**
Estado del experimento: **MURIÓ** (ninguno de los tres apalancamientos altos sobrevive 2014–2024)
Serie: **G — Construyendo un bot (y por qué murió)**
Datos usados: `experiments.json` (v=34: analysis, verdict, notes, metrics, kpis, params_view, capital) · `exp_details.json` (algo, filters con fechas y Sharpe de ×2.5, ×3 y ×4) · `series/20260610_140720_graduado-vix-14-ejecutable-v34.json` (curvas: estrategia ×2.5 hasta la quiebra, «sin reglas de prop firm», comprar y esperar) · fila #34 de la tabla «Con tu capital» (`docs/youtube/`).

## Títulos (opciones)
1. Más apalancamiento cuando hay calma: ×2.5, ×3 y ×4 murieron
2. Subí el riesgo con el VIX bajo 14: 3 cuentas, 3 muertes
3. ×4 en un mercado tranquilo: la cuenta duró hasta mayo de 2015

## Miniatura
Fondo #09090b. Texto gigante rojo "×4" con una ✕ blanca encima; debajo, pequeño, "5 MAY 2015". Elemento visual: un velocímetro con la aguja pasada de la zona roja. Logo ATLAS en la esquina inferior derecha. (No repite los títulos.)

---

## VIDEO LARGO (16:9, ≈ 5:31 · experimento corto: rango de 4 a 6 min)

**[0:00 — Gancho]** (pantalla — BOCETO: velocímetro que gira hasta «×4»; tarjeta de fecha «5-may-2015» con sello ✕; subtítulo «mercado en calma»)
Apalancamiento ×4. Mercado en calma. La cuenta murió el 5 de mayo de 2015. La idea era elegante: cuando el VIX está bajo 14, lejos de los desplomes, apalanca más. Probé ×2.5, ×3 y ×4. Las tres cuentas murieron en 2014–2024.

**[0:19 — Qué es el apalancamiento]** (pantalla — BOCETO: dos barras iguales; con «×4» la ganancia y la pérdida se cuadruplican, rotuladas «gana más» y «pierde más»; texto: «multiplica ganancias y pérdidas»)
Primero, una definición. El apalancamiento es operar con más dinero del que tienes: con ×2 mueves el doble, con ×4 el cuádruple. Multiplica las ganancias, pero también las pérdidas. Y las empresas de fondeo, las prop firms, te cortan la cuenta si cae 10%. Con apalancamiento alto, esa caída llega rápido.

**[0:42 — Por qué tienta la calma]** (pantalla — BOCETO: gráfico del VIX con una zona verde rotulada «bajo 14 = calma» y, a su lado, un auto acelerando en una recta con una curva que aparece al fondo)
El VIX, el índice del miedo de Wall Street, bajo 14 es la definición de mercado tranquilo. La tentación es obvia: si los desplomes parecen lejos, súbele el volumen. Es como conducir más rápido por una carretera recta. El problema es que las curvas aparecen sin avisar, y con ×4 hay mucho menos margen para absorber una.

**[1:07 — La idea]** (pantalla — BOCETO: gráfico del VIX con una franja verde bajo 14 rotulada «×alto» y el resto en gris «×1.5»; recordatorio del filtro: VIX > 28 y crédito bajo su media de 40 días)
La idea sale del experimento 33: usar el mejor filtro de pánico, el del VIX sobre 28 y el crédito bajo su media de 40 días, y graduar el riesgo. Si el VIX de ayer está por debajo de 14, el mercado está tranquilo y los desplomes parecen lejos: apalanca ×2.5, ×3 o ×4. El resto de los días, ×1.5. Es una apuesta razonable: más riesgo cuando hay calma.

**[1:37 — Cómo se probó]** (pantalla — BOCETO: checklist de exp_details.filters: señal de ayer ✓ · VIX de ayer para el nivel de apalancamiento ✓ · salida medida el día de disparo (φ = 0.94) ✓ · corte automático de −3% ✓ · periodos 2014–2024 y 2007–2013)
Todo se decide con datos de ayer: el nivel de apalancamiento usa el VIX de ayer, y el filtro de pánico también. El día del disparo el bot sale con lo que puede ver a esa hora, con el φ medido de 0.94: esquiva solo cerca del 6% de ese día. Hay un corte automático de −3% diario. Se prueba en 2014–2024 y en 2007–2013, fuera de muestra, es decir, años que el bot no vio al diseñarse, con la crisis de 2008.

**[2:13 — Los resultados]** (pantalla — BOCETO: tabla que se llena fila por fila con sellos ✕ rojos; debajo, curva real de series/…v34.json hasta la quiebra del 10-nov-2016)
| Apalancamiento en calma | Muere (2014–2024) | Sharpe 2014–2024 | Sharpe 2007–2013 |
|---|---|---|---|
| ×2.5 | 10-nov-2016 | −0.60 | 0.08 |
| ×3 | 6-oct-2016 | −0.62 | 0.02 |
| ×4 | 5-may-2015 | −1.58 | −0.28 (también muere) |
Ninguno sobrevive 2014–2024. Cuanto más apalanca, más rápido cae: el ×4 en mayo de 2015, el ×3 en octubre de 2016 y el ×2.5 en noviembre de 2016. En 2007–2013, el ×2.5 y el ×3 sobreviven, con Sharpe de 0.08 y 0.02; el ×4 también muere, con −0.28. Recuerda que el Sharpe es la ganancia por unidad de riesgo y el laboratorio pide más de 0.30.

**[2:42 — ¿Mejoró algo?]** (pantalla — BOCETO: dos barras: base del experimento 33, ×2 todos los días: −0.58; este experimento, ×2.5 en calma: −0.60; flecha «sin mejora»)
La base del experimento 33, con ×2 todos los días, tenía Sharpe −0.58. Con ×2.5 en calma da −0.60. Es decir, graduar el apalancamiento no mejora nada. Al ×2.5 le habría hecho falta un φ de 0.75 o menos para sobrevivir 2014–2024, y el medido es 0.94.

**[3:03 — ¿Y sin las reglas?]** (pantalla — BOCETO: curva «sin reglas de prop firm» de series/…v34.json sobre comprar y esperar; tarjetas +4.3% · Sharpe 0.09 · −15.6%; escenario φ = 0.5 en gris punteado: Sharpe 0.42, «no respaldado»)
Sin las reglas de la prop firm, el ×2.5 habría terminado 2014–2024 en +4.3%, con Sharpe 0.09 y una caída máxima, el peor tramo de pico a valle, de −15.6%. Es una línea hipotética: la cuenta real se cierra antes. Y comprar y esperar la misma cesta dio +58.9% con Sharpe 0.47. Con un φ de 0.5, el Sharpe sería 0.42, pero eso exigiría salir al abrir Wall Street sabiendo cómo cierra el día, y los datos horarios no lo respaldan.

**[3:38 — El marcador de filtros]** (pantalla — BOCETO: checklist de exp_details.filters: Sharpe 2014–2024 ✗ · Sharpe 2007–2013 ✗ · batir a comprar y esperar ✗ · parámetros ✗ · señal rezagada ✓ · Deflated Sharpe — · costos completos —)
El tablero de filtros lo confirma. El Sharpe de 2014–2024, −0.60, no mejora al de la base; fuera de muestra, 0.08, queda bajo el 0.30; no bate a comprar y esperar, con −10.2% frente a +58.9%; y ningún apalancamiento alto sobrevive 2014–2024. Pasa uno: la señal está rezagada y no mira el futuro. El Deflated Sharpe, la prueba que descuenta la suerte de haber probado muchas ideas, y los costos completos no se aplicaron: solo hay deslizamiento de 0.2% en el corte automático, sin diferencial de compra y venta ni comisión por rotación.

**[4:18 — La frontera del riesgo]** (pantalla — BOCETO: escala horizontal ×1 … ×4 con una marca verde en ×1.5 rotulada «hasta aquí aguanta la protección rezagada» y marcas rojas en ×2, ×2.5, ×3 y ×4)
Esto encaja con toda la serie: con filtros que reaccionan un día tarde, la protección no llega más allá de unas ×1.5. Subir el apalancamiento no crea ventaja; solo acelera el desenlace. El apalancamiento no es una estrategia: es un amplificador. Amplifica una ventaja si existe, y amplifica un vacío si no existe.

**[4:42 — Con tu capital]** (pantalla — BOCETO: tarjeta «Con tu capital»: $100,000 → −$10,178 contra −$4,698, rotulada «2014–2016, hasta que se cierra la cuenta»)
Con $100,000 simulados, la cuenta ×2.5 se cierra con −$10,178. Comprar y esperar la misma cesta, en las mismas fechas, 2014–2016: −$4,698. Es una simulación histórica, no una promesa; con $10,000 serían la décima parte.

**[4:58 — Conclusión]** (pantalla — BOCETO: sello «NO SIRVIÓ»; KPIs −10.2% · −0.60 · 0.08)
Veredicto: no sirvió. Con el φ medido, el ×2.5 en calma muere el 10 de noviembre de 2016, y el ×3 y el ×4 mueren todavía antes. Apalancar más cuando hay calma suena inteligente, pero no cambia lo esencial: el bot no tiene una ventaja que valga la pena multiplicar.

**[5:20 — Cierre]** (pantalla — BOCETO: logo ATLAS + URL; velocímetro en reposo de fondo)
Todos los datos están en atlas-lab-one.vercel.app, experimento 34. Contenido educativo, no es asesoría financiera. El trading no se promete: se prueba.

---

## SHORT (9:16, ≈ 48 s)
Título del Short: ×4 de apalancamiento en calma… la cuenta murió #shorts
Fórmula visual (CLAUDE.md del canal): b-roll vertical real con overlay 0.6, Ken Burns alternado, subtítulos karaoke en MAYÚSCULAS con cifras en rojo, ticker arriba, whoosh + flash en cada corte; golpe (bass + sacudida) solo en 0-3 s y 14-28 s.

**[0-3 s]** "×4 de apalancamiento en calma… y la cuenta murió."
- Boceto: b-roll de mar en calma que se rompe en tormenta (kb=in); «×4» gigante en rojo con ✕; golpe de bass.

**[3-14 s]** "La idea parece lógica: si el VIX, el índice del miedo, está bajo 14, lejos de los desplomes, apalanca más; el resto de los días, ×1.5. Probé ×2.5, ×3 y ×4."
- Boceto: gráfico del VIX con la franja verde bajo 14; tres fichas «×2.5», «×3», «×4» entrando una a una.

**[14-28 s]** "Resultado: las tres cuentas murieron. El ×4, el 5 de mayo de 2015. El ×3, el 6 de octubre de 2016. El ×2.5, el 10 de noviembre de 2016."
- Boceto: línea de tiempo con tres sellos ✕ cayendo en sus fechas; sacudida en el último.

**[28-40 s]** "Sharpe: ×2.5, menos 0.60. ×3, menos 0.62. ×4, menos 1.58. Más riesgo, peor resultado. La protección del bot no llega más allá de ×1.5."
- Boceto: tres barras rojas que crecen hacia abajo; texto «NEGATIVO = PIERDE» y marca verde en «×1.5».

**[40-48 s]** "El video completo está en el canal. No es asesoría financiera. Mercado en calma, apalancamiento alto… y ya sabes cómo termina:"
- Boceto: logo ATLAS sobre el velocímetro. Loop: frase abierta que enlaza con «×4 de apalancamiento en calma… y la cuenta murió».

## Descripción (YouTube)
Probé subir el apalancamiento (×2.5, ×3 y ×4) solo cuando el VIX de ayer está bajo 14, y usar ×1.5 el resto de los días. Resultado: las tres cuentas mueren en 2014–2024 (la de ×4 el 5 de mayo de 2015) y en 2007–2013 el ×4 también muere. Experimento #34.

Datos completos: https://atlas-lab-one.vercel.app (experimento #34)

Capítulos: 0:00 Gancho · 0:19 Qué es el apalancamiento · 0:42 Por qué tienta la calma · 1:07 La idea · 1:37 Cómo se probó · 2:13 Los resultados · 2:42 ¿Mejoró algo? · 3:03 ¿Y sin las reglas? · 3:38 El marcador de filtros · 4:18 La frontera del riesgo · 4:42 Con tu capital · 4:58 Conclusión · 5:20 Cierre

Contenido educativo. No es asesoría financiera ni recomendación de inversión.

Etiquetas: trading, apalancamiento, bot de trading, VIX, backtest, prop firm, gestión de riesgo, Sharpe ratio, estrategia de trading, mercado en calma, ATLAS Lab

## Rúbrica (autoevaluación — criterios del CLAUDE.md del canal, 1-5)
| hook_0_3s | ritmo | promesa_cumplida | potencial_loop | claridad_no_traders | honestidad_atlas | audio | cta |
|---|---|---|---|---|---|---|---|
| 4 | 4 | 5 | 4 | 4 | 5 | 4 | 4 |

Promedio: **4.25** → cumple el corte (≥ 4.0; hook ≥ 4 y honestidad 5).
Notas: el hook mezcla una cifra (×4) y un desenlace; la fecha precisa se deja para el segundo bloque. Punto débil: «Sharpe negativo» se explica con el rótulo en pantalla, no con más narración.

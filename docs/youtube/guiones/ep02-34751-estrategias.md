# EP02 — Experimento #81: "34,751 estrategias, 0 sobrevivieron"

Estado del guion: **BORRADOR — pendiente de aprobación**
Datos: `experiments.json` (v=81) y `exp_details.json`. Da para 2 largos; este es el primero (qué pasó). El segundo: el Deflated Sharpe explicado.

## Título (opciones)
1. Probé 34,751 estrategias de trading en una noche. Sobrevivieron 0
2. Puse a una IA a inventar estrategias de trading toda la noche: este fue el resultado
3. 34,751 estrategias y ninguna pasó: por qué casi todo backtest miente

## Miniatura
"34,751" en blanco gigante → "0" rojo debajo. Texto pequeño: "sobrevivieron".

---

## VIDEO LARGO (≈ 10 min)

**[0:00 — Gancho]** (pantalla: contador subiendo hasta 34,751)
Dejé una máquina toda la noche inventando y probando estrategias de trading. 34,751, todas distintas. Por la mañana, ¿cuántas habían sobrevivido? Cero. Y ese cero es lo más útil que he aprendido.

**[0:40 — Qué construí]** (pantalla: diagrama semillas → modelo → explorador → motor)
Un laboratorio automático con tres fuentes de ideas: unas semillas clásicas (medias móviles, Donchian, momentum, RSI, IBS, Double Seven y combinaciones), un modelo de lenguaje (DeepSeek/Qwen) que propone variantes, y un explorador que garantiza que ninguna se repita. Cada idea se convierte en una especificación que un motor fijo prueba siempre igual.

**[2:00 — Las reglas del juego]** (pantalla: cesta + costos)
Todas operan lo mismo: una cesta de 7 pares de divisas más oro, señal ejecutada al día siguiente y 3 puntos básicos de costo por operación. Sin trampas de mirar el futuro.

**[2:45 — El gauntlet de 5 filtros]** (pantalla: 5 puertas, una tras otra)
1. Fuera de muestra 2007-2013, con la crisis de 2008: Sharpe mayor que 0.30.
2. Fuera de muestra 2021-2024: Sharpe mayor que 0.30.
3. Deflated Sharpe mayor que 0.95: corrige por cuántas estrategias probé.
4. Monte Carlo con 5000 rotaciones de la señal: si no le gana a sus propias versiones desalineadas en el tiempo, su timing es suerte.
5. Batir a comprar y mantener en 2014-2020 (Sharpe 0.13).

**[5:00 — El resultado]** (pantalla: embudo 34,751 → 0)
Cero sobrevivieron. El máximo que alguna logró fue pasar 4 de los 5 filtros: engañó a los dos periodos fuera de muestra, al Monte Carlo y batió al mercado. Pero al revisarla año por año, pierde dinero: todo su resultado venía de un solo año de suerte.

**[6:15 — El filtro que nadie pasó]** (pantalla: barra DSR 0.70 vs meta 0.95)
El Deflated Sharpe nunca se superó. El mejor valor fue 0.70, cuando hacía falta 0.95. Cuando pruebas miles de ideas, alguna sale brillante por puro azar; este filtro es el que descuenta eso. Le dedico el próximo video.

**[7:15 — Lo único "real"]** (pantalla: texto)
Hubo una señal que se repite: una leve tendencia a la reversión con RSI. 49 de las 50 mejores son positivas en 18 años. Pero está fuera del mercado el 94% del tiempo, hace cerca de un 1% al año y pierde contra simplemente mantener. Real, medible… e inútil para ganar dinero.

**[8:15 — La lección]**
Si alguien te enseña la mejor de cientos de pruebas sin decirte cuántas hizo, te está enseñando ruido. Es exactamente por lo que López de Prado insiste en corregir el multiple testing. Mi conclusión, con datos de precio al alcance de un trader minorista: no encontré ventaja explotable.

**[9:15 — Cierre]**
Todo está publicado en atlas-lab-one.vercel.app, experimento 81. Contenido educativo, no es asesoría financiera.

---

## SHORT 1 (≈ 45 s) — "El contador"
**[0-3 s]** (contador rápido) "34,751 estrategias de trading probadas en una noche."
**[3-20 s]** "Cinco filtros: dos periodos que nunca vieron, Deflated Sharpe, Monte Carlo y batir al mercado."
**[20-38 s]** (embudo cayendo a 0, en rojo) "¿Cuántas pasaron? Cero. La mejor pasó 4 de 5… y año por año perdía dinero."
**[38-45 s]** "Video completo en el canal. No es asesoría financiera."

## SHORT 2 (≈ 40 s) — "El filtro que nadie pasó"
Deflated Sharpe: máximo 0.70 de 0.95. Qué es en una frase y por qué caza a los "ganadores" de suerte.

## SHORT 3 (≈ 40 s) — "Real pero inútil"
La reversión RSI: positiva en 49 de 50, pero 6% del tiempo en el mercado y ~1% al año.

## Descripción (YouTube)
Construí un laboratorio que genera y prueba estrategias de trading automáticamente. En una noche probó 34,751 estrategias únicas contra 5 filtros (dos out-of-sample, Deflated Sharpe, Monte Carlo de 5000 permutaciones y batir Buy & Hold). Sobrevivieron 0.

Datos completos: https://atlas-lab-one.vercel.app (experimento #81)

Contenido educativo. No es asesoría financiera ni recomendación de inversión.

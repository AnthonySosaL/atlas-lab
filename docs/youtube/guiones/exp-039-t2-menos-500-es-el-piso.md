# Experimento #39 — Valor esperado del negocio ejecutable · Tema 2: −$500 es el piso de la fórmula

Estado del guion: **BORRADOR — pendiente de aprobación**
Tema 2 de 3 del experimento #39. Qué aporta frente a los otros temas: es el CONCEPTO. El tema 1 recorre el negocio completo (reglas, cuenta, tiempo y vara) y el tema 3 trata de fijar el criterio antes de medir; este tema enseña qué es el valor esperado y por qué −$500 es lo peor que la fórmula permite, comparando la misma cuenta en tres experimentos (+$5,919, −$429 y −$500).
Estado del experimento: **MURIÓ** (valor esperado de −$500 por intento; la espera mediana de 1.6 años supera el máximo de 1.5 exigido)
Serie: **G — Construyendo un bot (y por qué murió)**
Datos usados: `experiments.json` (v=39: analysis, verdict, notes, metrics, kpis, params_view, capital; v=11 y v=17: verdict, metrics, kpis) · `exp_details.json` (v39: algo con la fórmula, filters; v11 y v17: algo) · fila #39 de la tabla «Con tu capital» (`docs/youtube/`).

## Títulos (opciones)
1. −$500 es el piso: cómo se calcula el valor esperado de un reto
2. Valor esperado en una línea: −$500 + 37.5% × $0
3. Tres experimentos, una fórmula: +$5,919, −$429 y −$500

## Miniatura
Fondo #09090b. Un suelo de concreto con una línea roja (#e11d2a) y una flecha hacia abajo bloqueada por el suelo; encima, un ticket «RETO $500». Texto grande: «NO HAY MÁS ABAJO». Logo ATLAS en la esquina inferior derecha. (No repite las palabras de los títulos.)

---

## VIDEO LARGO (16:9, ≈ 4:41)

**[0:00 — Gancho]** (pantalla — BOCETO: fórmula «EV = −500 + 37.5% × 0 = −500» que se arma sobre un suelo; una flecha intenta bajar más y rebota)
Pagar un reto de fondeo con mi bot tiene un valor esperado de menos 500 dólares por intento. Y esa cifra no es solo mala: es lo peor que la fórmula permite. Te explico por qué no puede bajar más.

**[0:16 — Este es el experimento #39]** (pantalla — BOCETO: rótulo «EXPERIMENTO #39 · VALOR ESPERADO DEL NEGOCIO EJECUTABLE» con el logo ATLAS; la URL pequeña debajo)
Este es el experimento #39 de ATLAS Lab: Valor esperado del negocio ejecutable. Todos los resultados están en la página del experimento. Hoy es una clase de valor esperado, con el bot como ejemplo.

**[0:30 — Qué es el valor esperado]** (pantalla — BOCETO: ilustración rotulada, no es dato real: una balanza con la probabilidad de ganar a un lado y el premio al otro, y una moneda de entrada en el platillo contrario)
El valor esperado es lo que ganarías en promedio si repitieras el intento muchísimas veces. Combina tres cosas: cuánto pagas por entrar, qué tan probable es ganar y cuánto recibes cuando ganas. Si el promedio es positivo, el negocio se sostiene. Si es negativo, cada intento te cuesta dinero, aunque a veces ganes.

**[0:52 — La fórmula del reto]** (pantalla — BOCETO: tarjeta params_view con las piezas: cuota $500 · probabilidad de pasar 37.5% · cuenta fondeada $100,000 · reparto 80% · fase de 2 años; la fórmula se arma con cada pieza)
En este experimento la fórmula es: menos la cuota, más la probabilidad de pasar por el cobro esperado. La cuota es de $500. Si pasas, te dan una cuenta de $100,000 durante dos años y te quedas con el 80% de las ganancias. La probabilidad de pasar, sin límite de tiempo, viene del experimento 37: 37.5%. Y el cobro esperado es el crecimiento anual de la estrategia por $100,000, por 80% y por 2 años.

**[1:21 — El piso]** (pantalla — BOCETO: una recta numérica con el valor esperado sobre ella; a la izquierda de −$500 una pared roja con el rótulo «imposible»; el cobro esperado nunca baja de cero)
Aquí está el truco. La fórmula no deja que el cobro esperado baje de cero, porque el modelo supone que, si la estrategia no gana en la cuenta fondeada, simplemente no hay nada que repartir. Y si el segundo término nunca es negativo, el valor esperado nunca puede ser peor que menos la cuota. Menos 500 dólares es el piso: en este modelo, lo máximo que pierdes por intento es lo que pagaste.

**[1:50 — Dónde cae mi bot]** (pantalla — BOCETO: la fórmula con números: «−500 + 37.5% × 0 = −500»; al lado, «crecimiento ejecutable −0.4% anual»)
El bot tiene un crecimiento anual de menos 0.4%, de 2007 a 2024 con señales de ayer. Con un crecimiento negativo, el cobro esperado es cero. Entonces: menos 500, más 37.5% por cero. Resultado: menos 500. El bot cae exactamente en el piso. Y aunque la probabilidad de pasar fuera mucho mayor, multiplicar por cero siempre da cero.

**[2:13 — Tres experimentos, una fórmula]** (pantalla — BOCETO: tabla con tres filas que se llenan; la última, resaltada con el suelo; notas al pie por experimento)
| Experimento | Probabilidad de pasar | Cobro esperado | Valor esperado |
|---|---|---|---|
| 11 (cesta en 2019–2024) | 47.9% | $13,402 | +$5,919 |
| 17 (límite de 30 días) | 0.6% | $12,322 | −$429 |
| 39 (señales de ayer) | 37.5% | $0 | −$500 |
Esta misma lógica se calcula en otros experimentos con otros supuestos. El experimento 11 usa el remuestreo de la cesta en 2019–2024, un periodo alcista, y su resultado sale solo de la subida de la cesta; el camino real del experimento 13 reventó en el COVID. El experimento 17 usa un límite de 30 días y el filtro con el cierre del mismo día, información que un bot real no tiene. El 39, el de hoy, es el único con las señales de ayer y sin límite de tiempo: cobro de cero.

**[2:55 — Lo que tendría que cambiar]** (pantalla — BOCETO: dos palancas, «crecimiento anual de la estrategia» y «espera mediana: 1.6 años contra 1.5», ambas con flechas que no llegan al criterio «valor esperado > $1,000»)
Para que el valor esperado dejara de estar en el piso, lo que tendría que cambiar es el cobro esperado: debería superar la cuota dividida entre la probabilidad de pasar, y eso solo pasa si la estrategia crece. Las dos palancas son de la estrategia, no del reto. Y la espera mediana de 1.6 años queda por encima del máximo de 1.5 que fijé como vara.

**[3:21 — El marcador de filtros]** (pantalla — BOCETO: checklist de exp_details.filters: criterio del negocio (−$500 contra > $1,000; 1.6 contra < 1.5 años) ✗ · Sharpe −0.03 ✗ · batir a comprar y esperar ✗ · Deflated Sharpe — (experimento 38) · costos completos —)
El tablero de filtros: el criterio del negocio no se cumple, con menos 500 frente a más de 1,000 dólares y 1.6 frente a menos de 1.5 años. El Sharpe de menos 0.03 queda bajo el 0.30 del laboratorio. No bate a comprar y esperar, con menos 7.1% frente a más 68.7%. El Deflated Sharpe, 0.010, está en el experimento 38. Los costos completos no se aplicaron: solo hay deslizamiento de 0.2% en el corte automático.

**[3:51 — Con tu capital]** (pantalla — BOCETO: tarjeta «Con tu capital»: $100,000 → −$7,102 contra +$68,723, 2007–2024; nota: «se usa para calcular el valor esperado, no como cartera para invertir»)
Con $100,000 simulados entre 2007 y 2024, esa cartera termina en −$7,102. Comprar y esperar la misma cesta: +$68,723. Aquí la uso solo para calcular el valor esperado de pagar retos. Es una simulación histórica, no una promesa; con $10,000 serían la décima parte.

**[4:09 — Ficha del experimento #39]** (pantalla — BOCETO: tarjeta de ficha con sello «NO SIRVIÓ», cuatro líneas y la URL atlas-lab-one.vercel.app/e/39; logo ATLAS)
Ficha del experimento #39. Estado: no sirvió. Cifra clave: valor esperado de menos 500 dólares por intento, con 37.5% de probabilidad de pasar y un crecimiento anual de menos 0.4%. Filtro que decidió: el criterio del negocio, más de 1,000 dólares y menos de 1.5 años, que no se cumple. Lección: si detrás de la puerta no hay nada que cobrar, la probabilidad de entrar da igual. Revísalo completo en atlas-lab-one.vercel.app/e/39. Contenido educativo, no es asesoría financiera. El trading no se promete: se prueba.

---

## SHORT (9:16, ≈ 48 s)
Título del Short: Valor esperado del reto: −$500, y no puede ser peor #shorts
Fórmula visual (CLAUDE.md del canal): b-roll vertical real con overlay 0.6, Ken Burns alternado, subtítulos karaoke en MAYÚSCULAS con cifras en rojo, ticker arriba, whoosh + flash en cada corte; golpe (bass + sacudida) solo en 0-3 s y 28-40 s.

**[0-3 s]** "Valor esperado de pagar un reto con mi bot: menos 500 dólares. Y no puede ser peor."
- Boceto: b-roll de un suelo de concreto o un ascensor llegando al sótano (kb=in); «−$500» rojo gigante; golpe de bass.

**[3-14 s]** "La cuenta: menos la cuota de 500, más la probabilidad de pasar por lo que cobrarías. Probabilidad de pasar: 37.5%."
- Boceto: fórmula armándose pieza por pieza; ticket «RETO $500».

**[14-28 s]** "Lo que cobrarías sale del crecimiento del bot: menos 0.4% al año. Si el bot no gana, no hay nada que repartir, así que el cobro nunca baja de cero. Menos 500, más 37.5% por cero."
- Boceto: «−0.4%/año» en rojo; el cobro esperado se queda en «$0» con tick; la fórmula se completa.

**[28-40 s]** "Resultado: menos 500. Es el piso: en este modelo, lo máximo que pierdes por intento es la cuota. Con otros supuestos, la misma fórmula dio más 5,919 y menos 429."
- Boceto: recta numérica con la pared en −$500; sacudida al llegar la flecha; luego dos tarjetas +$5,919 y −$429.

**[40-48 s]** "Video completo en el canal. Experimento 39 completo en el enlace. No es asesoría financiera. ¿Peor que menos 500? No se puede."
- Boceto: sello «NO SIRVIÓ»; logo ATLAS y «EXPERIMENTO #39 · ENLACE». Loop: la pregunta final se responde con el piso.

## Descripción (YouTube)
**Video largo**
https://atlas-lab-one.vercel.app/e/39?utm_source=youtube&utm_medium=video&utm_campaign=exp039-t2
Ficha del experimento #39 (valor esperado del negocio ejecutable): no sirvió. Valor esperado −$500 por intento con 37.5% de pasar un reto, crecimiento anual de −0.4% y espera mediana de 1.6 años (vara: más de $1,000 y menos de 1.5 años).
Clase de valor esperado: por qué −$500 es el piso de la fórmula y cómo cambia con otros supuestos (+$5,919 en el experimento 11, −$429 en el 17).

Capítulos: 0:00 Gancho · 0:16 Este es el experimento #39 · 0:30 Qué es el valor esperado · 0:52 La fórmula del reto · 1:21 El piso · 1:50 Dónde cae mi bot · 2:13 Tres experimentos, una fórmula · 2:55 Lo que tendría que cambiar · 3:21 El marcador de filtros · 3:51 Con tu capital · 4:09 Ficha del experimento #39

**Short**
https://atlas-lab-one.vercel.app/e/39?utm_source=youtube&utm_medium=short&utm_campaign=exp039-t2
Experimento #39: valor esperado de pagar un reto, −$500 por intento (37.5% de pasar, crecimiento −0.4% anual). No sirvió.

Contenido educativo. No es asesoría financiera ni recomendación de inversión.

Etiquetas: valor esperado, reto de fondeo, prop firm, FTMO, probabilidad, bot de trading, backtest, expectativa positiva, gestión de riesgo, trading, ATLAS Lab

## Rúbrica (autoevaluación — criterios del CLAUDE.md del canal, 1-5)
| hook_0_3s | ritmo | promesa_cumplida | potencial_loop | claridad_no_traders | honestidad_atlas | audio | cta |
|---|---|---|---|---|---|---|---|
| 5 | 4 | 5 | 4 | 5 | 5 | 4 | 4 |

Promedio: **4.50** → cumple el corte (≥ 4.0; hook ≥ 4 y honestidad 5).
Notas: el hook es una cifra única y una afirmación inesperada (no puede ser peor). La tabla de tres experimentos se rotula con el supuesto de cada uno para que +$5,919 no se lea como una promesa. Punto débil: el −$429 del experimento 17 viene redondeado de una probabilidad de 0.6%; se muestra tal cual la ficha.

# Experimento #39 — Valor esperado del negocio ejecutable

Estado del guion: **BORRADOR — pendiente de aprobación**
Estado del experimento: **MURIÓ** (valor esperado de −$500 por intento; la espera mediana de 1.6 años supera el máximo de 1.5 exigido)
Serie: **G — Construyendo un bot (y por qué murió)**
Datos usados: `experiments.json` (v=39: analysis, verdict, notes, metrics, kpis, params_view, capital) · `exp_details.json` (algo con la fórmula del valor esperado, filters) · `series/20260610_140955_ev-del-negocio-ejecutable-v39.json` (curva 1 = cartera ×2 con señales de ayer 2007–2024; curva 2 = comprar y esperar) · fila #39 de la tabla «Con tu capital» (`docs/youtube/`).

## Títulos (opciones)
1. Pagas $500 por el reto de fondeo: valor esperado, −$500
2. 37.5% de pasar el reto… y aun así pierdes $500 por intento
3. ¿Es negocio pagar retos de fondeo con mi bot? Hice la cuenta

## Miniatura
Fondo #09090b. Texto gigante rojo "−$500"; debajo, en blanco, "POR INTENTO". Elemento visual: un ticket de caja registradora con "RETO $500" tachado en verde (#22c55e) por un sello rojo. Logo ATLAS en la esquina inferior derecha. (No repite los títulos.)

---

## VIDEO LARGO (16:9, ≈ 5:31 · experimento corto: rango de 4 a 6 min)

**[0:00 — Gancho]** (pantalla — BOCETO: ticket «RETO $500»; contador que sube a «37.5% de pasar»; luego una balanza donde el platillo «cobro esperado» queda vacío; resultado en rojo «−$500»)
Pagas $500 por intentar un reto de fondeo. Hay 37.5% de probabilidades de pasarlo, si no hay límite de tiempo. Suena a buen negocio, hasta que haces la cuenta de cuánto se cobra después de pasar. Con mi bot, el valor esperado de cada intento es −$500: exactamente lo que pagas.

**[0:23 — Qué es el valor esperado]** (pantalla — BOCETO: animación de una moneda con premio; el promedio de muchos intentos converge a una línea; texto: «lo que ganas en promedio si repites el intento muchas veces»)
El valor esperado es lo que ganarías en promedio si repitieras el intento muchas veces. Mezcla dos cosas: qué tan probable es ganar y cuánto ganas cuando ganas, menos lo que pagas por jugar. Si es positivo, el negocio se sostiene. Si es negativo, cada intento te cuesta dinero en promedio.

**[0:46 — Las reglas del negocio]** (pantalla — BOCETO: tarjeta params_view con seis chips: cuota $500 · reparto 80% · cuenta fondeada $100,000 · fase fondeada 2 años · ×2 · señal de ayer; debajo, criterio: «sirve si EV > $1,000 y espera mediana < 1.5 años»)
Las reglas que usé: pagas $500 por el reto. Si lo pasas, te dan una cuenta de $100,000 y te quedas con el 80% de las ganancias durante dos años. Para decir que el negocio sirve, puse una vara: valor esperado mayor a $1,000 y una espera mediana para pasar menor a 1.5 años.

**[1:10 — La cuenta, paso a paso]** (pantalla — BOCETO: la fórmula armándose en pantalla: «EV = −500 + 37.5% × cobro esperado»; el cobro esperado se calcula en una segunda línea: «−0.4% anual → 0»; el producto se vuelve 0)
La fórmula es: menos la cuota, más la probabilidad de pasar por el cobro esperado. La probabilidad de pasar viene del experimento 37: 37.5% sin límite de tiempo. El cobro esperado sale del crecimiento anual de la estrategia, medido de 2007 a 2024 con señales de ayer: menos 0.4% al año. Si el crecimiento es negativo, el cobro esperado no baja de cero, porque no te cobran por perder. Entonces: menos 500, más 37.5% por cero. Resultado: menos 500.

**[1:44 — Por qué la probabilidad ya no importa]** (pantalla — BOCETO: dos puertas: «pasar el reto» (abierta) y detrás una sala vacía rotulada «cobro: $0»)
Fíjate en lo que pasa. Da igual que la probabilidad sea 37.5% o mucho más: si detrás de la puerta no hay nada que cobrar, multiplicar por cero siempre da cero. Pasar el reto solo te da acceso a una cuenta donde la estrategia, en promedio, no gana.

**[2:06 — El tiempo también cuenta]** (pantalla — BOCETO: reloj de arena y barra de tiempo: mediana 516 días ≈ 1.6 años frente a la vara de 1.5; sello ✕ en el criterio de espera)
Y está el reloj. La mediana de espera para pasar es de 1.6 años, más que el máximo de 1.5 que puse como vara. Y aun contando la probabilidad sin límite de tiempo, el valor esperado queda en −$500, lejos de los $1,000.

**[2:26 — El contraste del reloj]** (pantalla — BOCETO: dos tarjetas: «si el bot viera el cierre de hoy para decidir hoy (imposible): ~82% a ×4» frente a «con la señal de ayer, ×2: 37.5% en 1.6 años · EV −$500»)
Hay un contraste que enseña mucho. Si el bot decidiera con el cierre del mismo día, algo que ningún bot real puede hacer, la probabilidad de pasar sin límite de tiempo con ×4 llegaría a cerca de 82%. Con la señal de ayer, que sí existe a esa hora, es 37.5% y tarda 1.6 años, con un valor esperado de −$500. La información que de verdad tienes y el tiempo real hacen desaparecer la ganancia nominal.

**[2:59 — Con la salida medida]** (pantalla — BOCETO: tarjeta «salida medida el día del disparo (φ = 0.94): P(pasar) 41.1% · crecimiento −0.02% · EV −$500»)
Con la salida medida el día del disparo, con un φ de 0.94, la probabilidad de pasar sube a 41.1%, pero el crecimiento anual queda en −0.02%: otra vez no hay nada que cobrar, y el valor esperado sigue en −$500. Tampoco incluyo spread ni la comisión por rotación del laboratorio; solo el deslizamiento de 0.2% en los cortes.

**[3:25 — El marcador de filtros]** (pantalla — BOCETO: checklist de exp_details.filters: criterio del negocio (−$500 vs > $1,000; 1.6 vs < 1.5 años) ✗ · Sharpe −0.03 ✗ · batir a comprar y esperar ✗ · Deflated Sharpe — (experimento 38) · costos completos —)
El tablero de filtros: el criterio del negocio no se cumple, con −$500 frente a más de $1,000, y 1.6 años frente a menos de 1.5. El crecimiento ejecutable, −0.4% al año, corresponde a un Sharpe de −0.03, la ganancia por unidad de riesgo, bajo el 0.30 del laboratorio. Y no bate a comprar y esperar, con −7.1% frente a +68.7%. El Deflated Sharpe de esta cartera, la prueba que descuenta la suerte, 0.010, está en el experimento 38, y los costos completos no se aplicaron: solo hay deslizamiento de 0.2% en el corte automático.

**[4:05 — Con tu capital]** (pantalla — BOCETO: tarjeta «Con tu capital»: $100,000 → −$7,102 contra +$68,723 (2007–2024); nota: «la cartera sirve para calcular el valor esperado, no como cartera para invertir»)
Con $100,000 simulados entre 2007 y 2024, esa cartera termina en −$7,102. Comprar y esperar la misma cesta: +$68,723. Aquí la uso solo para calcular el valor esperado de pagar retos, no como cartera para invertir. Es una simulación histórica, no una promesa; con $10,000 serían la décima parte.

**[4:27 — Qué tendría que cambiar]** (pantalla — BOCETO: dos palancas animadas, «crecimiento anual» y «espera mediana», con flechas hacia el criterio; ambas se quedan cortas)
¿Qué tendría que cambiar para que el negocio sirviera? Dos cosas, y las dos son de la estrategia, no del reto. Primero, que el crecimiento anual fuera lo bastante positivo como para dejar un cobro que supere la cuota. Segundo, que la espera mediana para pasar bajara de 1.5 años. Con un crecimiento de −0.4%, ninguna de las dos se cumple, y por eso el valor esperado queda en −$500 aunque el reto se pase.

**[4:59 — Conclusión]** (pantalla — BOCETO: sello «NO SIRVIÓ»; KPIs −$500 · 37.5% · 1.6 años · −0.4% anual · −0.03)
Veredicto: no sirvió. Valor esperado de −$500 por intento, crecimiento anual de −0.4% que no deja nada que cobrar en la fase fondeada, y una espera mediana de 1.6 años. Con esta estrategia, el problema no era pasar el reto: era lo que había del otro lado.

**[5:20 — Cierre]** (pantalla — BOCETO: logo ATLAS + URL; ticket «RETO $500» de fondo)
Todos los datos están en atlas-lab-one.vercel.app, experimento 39. Contenido educativo, no es asesoría financiera. El trading no se promete: se prueba.

---

## SHORT (9:16, ≈ 48 s)
Título del Short: Reto de fondeo: 37.5% de pasar, valor esperado −$500 #shorts
Fórmula visual (CLAUDE.md del canal): b-roll vertical real con overlay 0.6, Ken Burns alternado, subtítulos karaoke en MAYÚSCULAS con cifras en rojo, ticker arriba, whoosh + flash en cada corte; golpe (bass + sacudida) solo en 0-3 s y 28-40 s.

**[0-3 s]** "Reto de fondeo: 37.5% de pasar, valor esperado menos 500."
- Boceto: b-roll de billetes o caja registradora (kb=in); «37.5%» en blanco y «−$500» en rojo gigante; golpe de bass.

**[3-14 s]** "Pagas $500 por intento. Si pasas, te dan una cuenta de $100,000 y te quedas con el 80% de las ganancias, durante dos años."
- Boceto: ticket de $500; cuenta de $100,000 con un 80% resaltado; calendario de dos años.

**[14-28 s]** "Con mi bot, la probabilidad de pasar sin límite de tiempo es 37.5%, y la mediana tarda 1.6 años, más que el máximo de 1.5 que fijé. Pero el bot crece menos 0.4% al año. Cobro esperado: cero."
- Boceto: barra de 37.5% que se llena; luego un «−0.4%/año» en rojo; el cobro esperado marcado en «$0» con tick.

**[28-40 s]** "La cuenta: menos 500, más 37.5% por cero. Valor esperado: menos 500 dólares por intento. Pasar no era el problema. Lo que había después, no pagaba."
- Boceto: fórmula «−500 + 37.5% × 0 = −500» armándose; sacudida y sello rojo en «−500».

**[40-48 s]** "El video completo está en el canal. No es asesoría financiera. Pagas 500, hay 37.5% de pasar… ¿y cuánto esperas ganar?"
- Boceto: sello «NO SIRVIÓ»; logo ATLAS. Loop: la pregunta final se responde con el gancho «valor esperado menos 500».

## Descripción (YouTube)
Calculé el valor esperado de pagar retos de fondeo con mi bot ×2 y señales de ayer: cuota de $500, cuenta de $100,000, 80% de reparto y dos años de fase fondeada. Probabilidad de pasar sin límite de tiempo: 37.5% (mediana de 1.6 años), pero el crecimiento anual de −0.4% no deja nada que cobrar. Valor esperado: −$500 por intento. Experimento #39.

Datos completos: https://atlas-lab-one.vercel.app (experimento #39)

Capítulos: 0:00 Gancho · 0:23 Qué es el valor esperado · 0:46 Las reglas del negocio · 1:10 La cuenta, paso a paso · 1:44 Por qué la probabilidad ya no importa · 2:06 El tiempo también cuenta · 2:26 El contraste del reloj · 2:59 Con la salida medida · 3:25 El marcador de filtros · 4:05 Con tu capital · 4:27 Qué tendría que cambiar · 4:59 Conclusión · 5:20 Cierre

Contenido educativo. No es asesoría financiera ni recomendación de inversión.

Etiquetas: prop firm, reto de fondeo, valor esperado, FTMO, bot de trading, backtest, probabilidad, gestión de riesgo, trading, estrategia de trading, ATLAS Lab

## Rúbrica (autoevaluación — criterios del CLAUDE.md del canal, 1-5)
| hook_0_3s | ritmo | promesa_cumplida | potencial_loop | claridad_no_traders | honestidad_atlas | audio | cta |
|---|---|---|---|---|---|---|---|
| 5 | 4 | 5 | 4 | 5 | 5 | 4 | 4 |

Promedio: **4.50** → cumple el corte (≥ 4.0; hook ≥ 4 y honestidad 5).
Notas: el hook junta dos cifras que parecen contradecirse (37.5% y −$500) y el Short lo resuelve con una cuenta de una línea. Punto débil: el bloque del contraste con el cierre del mismo día (~82%) puede recortarse si el video se alarga.

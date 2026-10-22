# Experimento #78 — Calmar y retiros: ¿mejor que comprar y mantener para ingreso?

Estado del guion: **BORRADOR — pendiente de aprobación**
Estado del experimento: **parcial** (Turtle y Faber ganan en Calmar a comprar y esperar, pero retirando 4% al año comprar y esperar termina más alto) · Serie E — «Gestión de riesgo: lo poco que se sostuvo» (plan-series.md) · 1 largo + 1 Short
Datos usados: `experiments.json` (v=78: kpis, metrics, verdict, analysis, market, capital, period), `exp_details.json` (extra-v78: algo, code, filters), `series/extra-v78.json` (1.ª curva = Turtle, la mejor por Calmar; 2.ª = «Sin estrategia»), tabla «Con tu capital» de `docs/youtube`.
Producción (CLAUDE.md del canal): b-roll real detrás de cada escena con overlay oscuro 0.6, Ken Burns alternando in/out, subtítulos karaoke en MAYÚSCULAS con palabras clave en rojo, un dato visual por escena, golpe de bajo + sacudida solo en 1–2 momentos. Colores: rojo `#e11d2a`, verde `#22c55e`, fondo `#09090b`. Cifras en dígitos aquí; en el campo `tts` del JSON, en palabras.

## Títulos (3 opciones)
1. Retirando 4%: Turtle $37,864, comprar y esperar $56,401
2. Calmar 0.29 contra 0.17: la mejor no es la que más deja
3. ¿Qué estrategia aguanta mejor retirar dinero? Probé 4 con datos

## Miniatura (pensada para el título 1)
Fondo `#09090b`. Texto en dos líneas: «MEJOR CALMAR» en verde con un ✓ y «MENOS DINERO» en rojo (4 palabras; sin repetir las del título). Elemento visual: dos frascos de monedas, uno casi vacío (rojo) y otro lleno (verde). Logo ATLAS arriba a la derecha.

---

## VIDEO LARGO (16:9, ≈ 7½ min)

**[0:00 — Gancho]** (pantalla: dos frascos y dos cifras)
Turtle, una famosa estrategia de tendencia, tiene mejor Calmar que comprar y esperar: 0.29 contra 0.17. Gana. Pero si empiezas con 50,000 dólares y retiras 4% al año, Turtle termina en 37,864. Comprar y esperar, en 56,401. ¿Cómo se explica? De eso va este video.
BOCETO: dos frascos que se vacían a ritmo de retiros anuales; al final se congelan en $37,864 (rojo) y $56,401 (verde), cifras de las KPIs de la ficha. Texto: «Retiro 4% anual · $50,000».

**[0:20 — Presentación]** (pantalla: rótulo «Experimento #78 · Calmar y retiros: ¿mejor que comprar y mantener para ingreso?»)
Este es el experimento #78 de ATLAS Lab: Calmar y retiros, ¿mejor que comprar y mantener para ingreso? Todos los resultados están en la página del experimento.
BOCETO: rótulo en rojo y blanco «EXPERIMENTO #78» con el nombre debajo, sobre la última imagen del gancho atenuada (overlay 0.6); whoosh corto; logo en la esquina.

**[0:40 — La pregunta]** (pantalla: texto y fórmula)
Comparar todo con comprar y esperar por retorno total es injusto si lo tuyo es retirar dinero. En ese caso lo que pesa es el drawdown, la caída máxima, por el riesgo del orden de los retornos: una caída fuerte justo cuando ya estás retirando daña más que la misma caída cuando solo mantienes. La métrica para eso es el Calmar: el retorno anual dividido entre la caída máxima. Cuanto más alto, más retorno por cada punto de caída.
BOCETO: fórmula «Calmar = retorno anual ÷ caída máxima» en pantalla; dos mini-curvas ilustrativas (rotuladas «ilustración») con la misma caída, una antes y otra después de empezar a retirar.

**[1:45 — Cómo lo probé]** (pantalla: 4 contendientes y checklist)
Once activos: cuatro índices, oro, cuatro pares de divisas, Brent y WTI, de 2012 a 2024, con datos diarios. Cuatro contendientes. Comprar y esperar. Faber, que está comprado mientras el precio supera su media de 200 días. Turtle, un sistema de rupturas, en su versión Donchian 20/10. Y un vol-target al que llamo B3: comprar y esperar multiplicado por 2 y por la fracción de activos en tendencia, entre 0 y 2 veces. Posiciones rezagadas un día. Faber y Turtle pagan 3 puntos básicos; B3 no modela costos ni el financiamiento del apalancamiento. Para el retiro, empiezo con 50,000 dólares y saco 4% al año, 2,000 dólares anuales. Una advertencia: aquí no hay fuera de muestra, todo el periodo es una sola muestra, y no apliqué el Deflated Sharpe.
BOCETO: cuatro tarjetas con su nombre. Checklist `filters`: ✓ rezago 1 día; costos «Faber/Turtle 3 bps, B3 sin costos» en ámbar; «fuera de muestra» y «Deflated Sharpe»: gris, «no aplicado».

**[3:00 — Resultados]** (pantalla: tabla animada)
Primero el Calmar: Turtle 0.29, Faber y B3 0.20, comprar y esperar 0.17. Turtle y Faber ganan en Calmar porque, aunque rinden menos, caen mucho menos. Ahora el dinero real con retiros. Comprar y esperar termina en 56,401; el vol-target B3, en 53,486; Turtle, en 37,864; Faber, en 37,646. Y B3 conserva casi todo el retorno, +5.0% contra +5.2%, con menos drawdown: −25% contra −30%.
| Estrategia | Calmar | Saldo final retirando 4%/año (de $50,000) |
|---|---|---|
| Turtle (Donchian 20/10) | 0.29 | $37,864 |
| Faber (MA200) | 0.20 | $37,646 |
| Vol-target (B3) | 0.20 | $53,486 |
| Comprar y esperar | 0.17 | $56,401 |
BOCETO: barras horizontales del Calmar (verde las que superan 0.17) y luego, en otra pantalla, barras del saldo final (rojas Turtle y Faber, verdes B3 y comprar y esperar). Sacudida al aparecer $37,864.

**[4:20 — Por qué]** (pantalla: dos curvas con retiros)
Con retiros no basta con caer poco: tienes que ganar al menos lo que retiras. Comprar y esperar rinde alrededor de +5% al año, y eso sostiene un retiro de 4%. Turtle y Faber, con +2.7% anual, ganan menos de lo que sacas, así que el retiro va consumiendo el capital. Para dormir tranquilo, mejor Calmar: Turtle o Faber. Para retiros altos, necesitas un retorno igual o mayor que el retiro. Lo ideal, mucho retorno con poca caída, es justo lo difícil.
BOCETO: dos curvas de saldo, una que sube (verde) y otra que se hunde (roja), con una línea horizontal en $50,000. Texto: «Retorno < retiro = el capital se consume». kb=in.

**[5:30 — Con tu capital]** (pantalla: tarjeta de capital)
Esta es la curva de Turtle sobre los 11 activos, la misma cartera del experimento 74; aquí se evalúa por Calmar y por retiros, no por retorno total. Con 100,000 dólares entre 2012 y 2024, sin retiros, Turtle gana 41,686 y comprar y esperar gana 92,344. Con 10,000 dólares serían unos +4,169 contra +9,234.
BOCETO: curvas reales de `series/extra-v78.json` (Turtle en verde, «Sin estrategia» en blanco); pie: «sin retiros · cifras escaladas a $100,000».

**[6:20 — Conclusión]**
Resultado parcial. Turtle y Faber superan a comprar y esperar en Calmar, 0.29 y 0.20 contra 0.17, pero retirando 4% al año comprar y esperar termina más alto: 56,401 contra 37,864. El Calmar sirve para dormir tranquilo; el retorno sirve para sostener un retiro. El trading no se promete: se prueba.

**[6:50 — Ficha del experimento #78]** (pantalla: tarjeta con la ficha y la URL abajo)
Ficha del experimento 78. Estado: parcial. Cifras clave: Calmar de Turtle 0.29 y de Faber 0.20, contra 0.17 de comprar y esperar; retirando 4% al año, comprar y esperar termina en 56,401 y Turtle en 37,864. Lo que decidió: el retiro, que exige un retorno al menos igual a lo que sacas. Lección: el mejor Calmar no es el mejor retiro. Revísalo completo en atlas-lab-one.vercel.app/e/78.
BOCETO: tarjeta con el número «#78», el sello «PARCIAL» en ámbar y cuatro líneas (estado, cifra clave, lo que decidió, lección) que entran con tick; al final, la URL «atlas-lab-one.vercel.app/e/78» grande y resaltada en verde. kb=in.

**[7:20 — Cierre]**
Todos los datos en atlas-lab-one.vercel.app/e/78. Contenido educativo, no es asesoría financiera.

---

## SHORT (9:16, ≈ 50 s)

**[0-3 s]** «Retiras 4% al año de 50,000 dólares. Turtle te deja 37,864. Comprar y esperar, 56,401.»
BOCETO: dos frascos de monedas que se vacían, cifras gigantes en rojo y verde, sobre b-roll de billetes (kb=in), overlay 0.6.

**[3-15 s]** «Turtle tiene mejor Calmar que comprar y esperar: 0.29 contra 0.17. El Calmar es el retorno anual dividido entre la caída máxima.»
BOCETO: fórmula en pantalla y dos barras (0.29 verde, 0.17 blanca) (kb=out).

**[15-30 s]** «Pero al retirar 4% al año, comprar y esperar termina en 56,401. Turtle, en 37,864. Faber, en 37,646.»
BOCETO: barras de saldo final cayendo; Turtle y Faber en rojo; golpe de bajo + sacudida en 37,864.

**[30-42 s]** «Turtle y Faber caen menos, pero ganan +2.7% al año, menos de lo que retiras. El retiro se come el capital.»
BOCETO: curva roja descendiendo hasta cruzar la línea de $50,000; texto «+2.7% < 4%».

**[42-50 s]** «Mejor Calmar no es mejor retiro: 37,864 contra 56,401. El video completo está en el canal y experimento #78 completo en el enlace.»
BOCETO: sello ✕ sobre «Mejor Calmar»; texto «Video completo en el canal · Experimento #78 completo en el enlace» + pequeño «No es asesoría financiera · El trading no se promete: se prueba». Loop: las dos cifras finales conectan con el hook.

---

## Descripción de YouTube (video largo)
https://atlas-lab-one.vercel.app/e/78?utm_source=youtube&utm_medium=video&utm_campaign=exp078-t1
Ficha del experimento #78: parcial · Calmar de Turtle 0.29, Faber 0.20 y comprar y esperar 0.17 · retirando 4% al año, comprar y esperar termina en $56,401 y Turtle en $37,864.
Si vas a retirar dinero, importa la caída máxima: por eso existe el Calmar. Comparé comprar y esperar, Faber, Turtle y un vol-target en 11 activos (2012–2024): Turtle gana en Calmar (0.29 contra 0.17), pero retirando 4% al año sobre $50,000 termina en $37,864 y comprar y esperar en $56,401.
Contenido educativo. No es asesoría financiera ni recomendación de inversión.

## Descripción de YouTube (Short)
https://atlas-lab-one.vercel.app/e/78?utm_source=youtube&utm_medium=short&utm_campaign=exp078-t1
Ficha del experimento #78: parcial · mejor Calmar (0.29 contra 0.17), pero con retiro de 4% termina en $37,864 contra $56,401.
Contenido educativo, no es asesoría financiera.

## Capítulos
0:00 Gancho · 0:20 Presentación · 0:40 La pregunta · 1:45 Cómo lo probé · 3:00 Resultados · 4:20 Por qué · 5:30 Con tu capital · 6:20 Conclusión · 6:50 Ficha del experimento #78 · 7:20 Cierre

## Etiquetas
calmar ratio, retiro del 4%, turtle trading, faber gtaa, drawdown, comprar y mantener, ingreso por retiros, orden de los retornos, backtest, atlas lab, trading con datos

## Rúbrica (autoevaluación, 1–5)
| Pieza | hook_0_3s | ritmo | promesa_cumplida | potencial_loop | claridad_no_traders | honestidad_atlas | audio | cta | Promedio |
|---|---|---|---|---|---|---|---|---|---|
| Largo | 5 | 4 | 5 | 4 | 4 | 5 | 4 | 4 | 4.4 |
| Short | 5 | 4 | 5 | 4 | 4 | 5 | 4 | 4 | 4.4 |

Hook ≥ 4 ✓ · honestidad 5 ✓. Punto débil: «Calmar» y «orden de los retornos» exigen una explicación rápida; el B3 se muestra sin costos y debe llevar la nota ámbar.

## Otros temas de este experimento
- Tema 1 (este archivo): `exp-078-calmar-y-retiros.md` — Calmar y retiros: ¿mejor que comprar y mantener para ingreso?
- Tema 2: `exp-078-t2-tres-metricas-tres-ganadores.md` — Tres métricas, tres ganadores (Turtle gana en Sharpe y en Calmar, y pierde en dinero)
- Tema 3: `exp-078-t3-b3-casi-todo-el-retorno.md` — B3, casi todo el retorno con menos caída (+5.0% contra +5.2% y −25% contra −30%), y la letra pequeña

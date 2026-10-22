# Experimento #4 — Tema 4: un mercado o quince, el mismo −4% (cubre #4 y #5)

Tema 4 de 4 del experimento #4 · también tema del #5 (4 de 4)
Qué aporta frente a los otros temas: compara el momentum de un solo par (#4) con el de quince mercados (#5): el resultado casi no cambia (−4.3% y −4.1%), pero el rival sí: el euro solo cayó −9.7% y la cesta de 15 subió (+$26,775 por cada $100,000). Enseña que un mismo resultado puede verse como victoria o como derrota según contra qué lo compares. Cada experimento tiene además un tema propio sobre su caso concreto.
Estado del guion: **BORRADOR — pendiente de aprobación**
Estado de los experimentos: ambos **murieron** · Serie B (Estrategias famosas, puestas a prueba), por afinidad · 1 largo + 1 Short
Datos usados: `experiments.json` (v=4 y v=5: kpis, metrics, params, verdict, notes), `exp_details.json` (filters de ambos) y tabla «Con tu capital» de docs/youtube (filas 4 y 5). Las cifras con 10,000 dólares son el saldo final del #4 o la tabla de 100,000 dividida entre 10 en el #5. Los periodos no son idénticos (#4: 1,877 días; #5: 1,754 días desde mayo de 2019) y el guion lo dice.
Producción: b-roll real con overlay oscuro 0.6, Ken Burns alterno, subtítulos karaoke en MAYÚSCULAS con cifras en rojo, golpe de bajo solo en 1–2 momentos. Rojo `#e11d2a`, verde `#22c55e`, fondo `#09090b`.

## Títulos (3 opciones)
1. Dos estrategias, el mismo −4%: una le ganó al mercado y la otra perdió por goleada
2. Momentum en 1 mercado o en 15: −4.3% y −4.1%, pero el rival cambia todo
3. ¿Contra qué te comparas? El caso del euro (−9.7%) y la cesta de 15 mercados (+26,775 dólares)

## Miniatura
Fondo negro `#09090b`. Dos pares de cifras: «−4.3% vs −9.7%» con un check verde, y «−4.1% vs +26.8%» con una ✕ roja. Texto grande: «MISMO RESULTADO» (2 palabras) en blanco y «OTRO RIVAL» en rojo. Logo ATLAS esquina inferior derecha.

---

## VIDEO LARGO (16:9, ≈ 4:06 min)

**[0:00 — Gancho]** (pantalla: dos resultados casi idénticos)
Dos estrategias de momentum, dos resultados casi iguales: menos 4.3% y menos 4.1%. Una le ganó al mercado. La otra perdió contra una cesta que ganó 26,775 dólares por cada 100,000.
> Boceto: «−4.3%» y «−4.1%» juntos; después aparecen los rivales: «−9.7%» (check verde) y «+$26,775» (✕ rojo) con sacudida. Ken Burns «in».

**[0:16 — Qué experimento es]** (pantalla: rótulo con el número y el nombre)
Este es el experimento #4 de ATLAS Lab: Momentum de serie temporal diario, y hoy lo comparo con el experimento 5, la cartera de 15 activos. Todos los resultados están en la página de cada experimento.
> Boceto: rótulos «#4 Momentum diario · 1 par» y «#5 TSMOM · 15 activos»; URL pequeña. kb=out.

**[0:31 — La misma regla, dos tamaños]** (pantalla: un par frente a una rejilla)
La regla es la misma en los dos: si el activo subió en los últimos 120 días, compra; si bajó, vende en corto. El experimento 4 la aplica solo al euro-dólar. El experimento 5 la aplica a 15 mercados a la vez: divisas, metales, índices y energía, y ajusta el tamaño de cada posición por su volatilidad, con un objetivo de 10% anual. La literatura académica dice que el momentum necesita diversificarse. Esta es la prueba.
> Boceto: un símbolo (EUR/USD) y, al lado, la rejilla de 15 símbolos en cuatro grupos de color. kb=in.

**[1:03 — Los resultados]** (pantalla: tabla comparativa)
El euro solo: menos 4.3%, Sharpe menos 0.08, 75 operaciones. Los 15 mercados: menos 4.1%, Sharpe menos 0.10, 953 cambios de señal. Casi lo mismo. La prueba de azar sí difiere: p de 0.585 en el euro y 0.003 en los 15. Pero ese 0.003 viene de la rotación de posiciones, no de una ventaja, y el PSR de la cartera fue 0.39, lejos del 0.95 que se exige. Los periodos no son idénticos: 1,877 días contra 1,754 días.
| | #4 Euro solo | #5 Cesta de 15 |
|---|---|---|
| Retorno | −4.3% | −4.1% |
| Sharpe | −0.08 | −0.10 |
| Caída máxima | −13.9% | −14.8% |
| Operaciones / cambios | 75 | 953 |
| p de azar | 0.585 | 0.003 |
| PSR | 0.47 | 0.39 |
> Boceto: tabla animada con las dos columnas casi iguales; la fila del p de azar con asterisco «0.003 era un artefacto de la rotación». kb=out.

**[1:44 — El rival del #4]** (pantalla: curva del euro)
Ahora, contra qué se compara cada una. En el experimento 4, el rival es comprar y esperar el euro-dólar: menos 9.7% en esos seis años. La estrategia perdió menos 4.3%. Suena a victoria. Pero perder menos que un mercado que cae no demuestra una ventaja: el propio euro bajó.
> Boceto: curva gris del euro (−9.7%) y curva de la estrategia (−4.3%) por encima; sello «pierde menos» en ámbar. kb=in.

**[2:06 — El rival del #5]** (pantalla: curva de la cesta)
En el experimento 5, el rival es comprar y esperar la misma cesta de 15 mercados. Esa cesta tuvo un Sharpe de 0.40 y con 100,000 dólares habría ganado 26,775. La estrategia, con 100,000, habría perdido 4,125. Mismo número, menos 4%, pero ahora es una derrota clara, porque no hacer nada era mucho mejor.
> Boceto: curva gris de la cesta subiendo con «+$26,775» y la curva de la estrategia plana con «−$4,125»; barras de Sharpe 0.40 contra −0.10. kb=out.

**[2:32 — Lo que dice la comparación]** (pantalla: dos veredictos)
Son dos mensajes distintos. Uno: diversificar mejoró al mercado, la cesta tiene un Sharpe de 0.40, pero no mejoró la estrategia, que siguió en torno a menos 4%. Dos: antes de celebrar un resultado, pregunta contra qué se compara. Un rival que cae hace brillar a casi cualquiera; un rival que sube deja ver la verdad.
> Boceto: dos tarjetas: «diversificar mejoró el mercado, no la estrategia» y «¿contra qué te comparas?» con una lupa. kb=in.

**[2:56 — Con tu capital]** (pantalla: tarjeta «Con tu capital»)
Con 10,000 dólares, el experimento 4 terminó en 9,575 contra 9,033 de comprar y esperar el euro. El experimento 5 terminó en menos 413 contra más 2,678 de comprar y esperar la cesta. Con 100,000, la tabla de ATLAS da menos 4,252 contra menos 9,673 en el primero, y menos 4,125 contra más 26,775 en el segundo.
> Boceto: dos tarjetas de capital, una con ambas cifras en rojo y otra con rojo y verde; selector $10,000 / $100,000.

**[3:27 — Ficha del experimento #4 (con #5)]** (pantalla: tarjeta con las URL)
Ficha de los experimentos 4 y 5. Estado: los dos murieron. Cifra clave: menos 4.3% y menos 4.1%, contra menos 9.7% del euro y más 26,775 dólares de la cesta por cada 100,000. Filtros que decidieron: prueba de azar y PSR, y la comparación con comprar y esperar. Lección: el rival importa tanto como el resultado. Revísalo completo en atlas-lab-one.vercel.app/e/4 y /e/5.
> Boceto: tarjeta oscura con «#4 · #5 · MURIERON», cifras clave y «atlas-lab-one.vercel.app/e/4» en grande; logo.

**[3:57 — Cierre]**
Todos los datos en atlas-lab-one.vercel.app, experimentos 4 y 5. Contenido educativo, no es asesoría financiera. El trading no se promete: se prueba.
> Boceto: pantalla oscura con la frase de marca.

---

## SHORT (9:16, ≈ 46 s)

**[0-3 s]** «Dos estrategias, −4.3% y −4.1%. Una ganó; la otra perdió.»
> Boceto: «−4.3%» y «−4.1%» juntos y luego un check verde y una ✕ roja con sacudida; b-roll de pantallas de bolsa, Ken Burns «in», overlay 0.6.

**[3-14 s]** «Es momentum: compra lo que subió en 120 días, vende lo que bajó. Una versión en el euro-dólar, otra en 15 mercados: divisas, metales, índices y energía.»
> Boceto: un símbolo y luego la rejilla de 15; karaoke con «15 MERCADOS» en rojo; Ken Burns «out».

**[14-27 s]** «El euro solo perdió −4.3%, mientras comprar y esperar perdió −9.7%. Parece una victoria. Pero perder menos que un mercado que cae no es una ventaja.»
> Boceto: curvas del euro; sello ámbar «pierde menos»; whoosh y flash blanco.

**[27-38 s]** «Los 15 mercados perdieron −4.1%, mientras la misma cesta sin estrategia ganó 26,775 dólares por cada 100,000. Su Sharpe fue 0.40; el de la estrategia, −0.10.»
> Boceto: curva gris subiendo con «+$26,775» y la de la estrategia plana; barras 0.40 contra −0.10; Ken Burns «in».

**[38-46 s]** «Pregunta siempre contra qué. Experimentos cuatro y cinco completos en el enlace. El video completo está en el canal. No es asesoría financiera.»
> Boceto: vuelve «−4.3% · −4.1%» con la lupa «¿contra qué?» (loop con el gancho); texto «Experimentos #4 y #5 completos en el enlace» y logo.

---

## Descripción de YouTube (video largo)
https://atlas-lab-one.vercel.app/e/4?utm_source=youtube&utm_medium=video&utm_campaign=exp004-t4
Ficha de los experimentos #4 y #5 (momentum): murieron los dos · EUR/USD solo −4.3% (comprar y esperar −9.7%) · cesta de 15 mercados −4.1% (la cesta sin estrategia, +$26,775 por cada $100,000; Sharpe 0.40 contra −0.10).
La misma regla de momentum de 120 días en un mercado y en quince: el resultado casi no cambia, pero el rival con el que se compara lo cambia todo. Periodos 2019-2024 (no idénticos).
Contenido educativo. No es asesoría financiera ni recomendación de inversión.
También: https://atlas-lab-one.vercel.app/e/5?utm_source=youtube&utm_medium=video&utm_campaign=exp004-t4

## Descripción del Short
https://atlas-lab-one.vercel.app/e/4?utm_source=youtube&utm_medium=short&utm_campaign=exp004-t4
Experimentos #4 y #5 · murieron · −4.3% y −4.1% con rivales opuestos. No es asesoría financiera.

Capítulos: 0:00 Gancho · 0:16 Qué experimento es · 0:31 La misma regla, dos tamaños · 1:03 Los resultados · 1:44 El rival del #4 · 2:06 El rival del #5 · 2:32 Lo que dice la comparación · 2:56 Con tu capital · 3:27 Ficha del experimento #4 (con #5) · 3:57 Cierre

Etiquetas: momentum trading, diversificación, cesta de 15 activos, comprar y esperar, benchmark, EUR/USD, backtest, volatilidad objetivo, estrategia de trading, Sharpe ratio, ATLAS Lab, trading con datos

## Rúbrica (autoevaluación, 1–5)
| Criterio | Short | Largo |
|---|---|---|
| hook_0_3s | 4 | 4 |
| ritmo | 4 | 4 |
| promesa_cumplida | 5 | 5 |
| potencial_loop | 5 | 4 |
| claridad_no_traders | 4 | 4 |
| honestidad_atlas | 5 | 5 |
| audio | 4 | 3 |
| cta | 4 | 4 |
| **Promedio** | **4.38** | **4.13** |

Notas: los periodos y los costos no son idénticos entre #4 (1,877 días, comisión de 0.007% más deslizamiento de 0.002%) y #5 (1,754 días, 2 puntos básicos por rotación); el guion lo avisa y no atribuye el parecido de resultados a una causa. El Short cumple hook ≥ 4 y honestidad 5.

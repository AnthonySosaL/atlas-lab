# Experimento #2 — Tema 3: perder menos y tener peor Sharpe (cómo leer un panel de números)

Tema 3 de 4 del experimento #2
Qué aporta frente a los otros temas: el tema 1 cuenta el resultado y el tema 2 la confianza del modelo; este es el tema de método sobre el Sharpe: la IA del #2 perdió menos que la del #1 (−33.9% frente a −36.2%) y, aun así, tiene peor Sharpe (−4.79 frente a −4.43). Enseña a leer retorno, Sharpe, caída máxima y factor de beneficio juntos.
Estado del guion: **BORRADOR — pendiente de aprobación**
Estado del experimento: **murió** · Serie D (Machine learning en trading) · 1 largo + 1 Short
Datos usados: `experiments.json` (v=2 y v=1: kpis y metrics: retorno, Sharpe, Max Drawdown, Profit Factor, operaciones, Win Rate, p de Monte Carlo), `exp_details.json` (filters con el PSR) y tabla «Con tu capital» de docs/youtube (fila 2).
Producción: b-roll real con overlay oscuro 0.6, Ken Burns alterno, subtítulos karaoke en MAYÚSCULAS con cifras en rojo, golpe de bajo solo en 1–2 momentos. Rojo `#e11d2a`, verde `#22c55e`, fondo `#09090b`.

## Títulos (3 opciones)
1. Perdió menos (−33.9%) y su Sharpe es peor (−4.79): lo que significa el Sharpe
2. ¿Qué es el Sharpe y por qué puede empeorar cuando pierdes menos? Dos IAs en el euro
3. Cómo leer un backtest: retorno, Sharpe, caída máxima y factor de beneficio (caso real)

## Miniatura
Fondo negro `#09090b`. Dos tarjetas enfrentadas: «−33.9%» en verde tenue con una flecha hacia arriba y «Sharpe −4.79» en rojo con una flecha hacia abajo. Texto grande: «MEJOR Y PEOR» (3 palabras). Logo ATLAS abajo a la derecha.

---

## VIDEO LARGO (16:9, ≈ 4:01 min)

**[0:00 — Gancho]** (pantalla: dos cifras que se contradicen)
Esta IA perdió menos que la anterior: menos 33.9% contra menos 36.2%. Pero su Sharpe es peor: menos 4.79 contra menos 4.43. ¿Cómo puede ser mejor y peor a la vez?
> Boceto: «−33.9%» sube en verde tenue y «Sharpe −4.79» baja en rojo; signo de interrogación; sacudida al cruzarse. Ken Burns «in».

**[0:16 — Qué experimento es]** (pantalla: rótulo con el número y el nombre)
Este es el experimento #2 de ATLAS Lab: ML XGBoost más filtro de convicción. Todos los resultados están en la página del experimento. Hoy lo uso para aprender a leer un panel de números.
> Boceto: rótulo «EXPERIMENTO #2 · ML XGBoost + filtro de convicción» y URL pequeña abajo. kb=out.

**[0:30 — Qué mide cada número]** (pantalla: cuatro tarjetas)
Cuatro números, cuatro preguntas. El retorno total pregunta: ¿cuánto cambió la cuenta? El Sharpe pregunta: ¿cuánto ganas o pierdes por cada unidad de riesgo que asumes? Cero significa que no hay ventaja, y si es negativo, pierdes. La caída máxima, o drawdown, pregunta: ¿cuál fue el peor tramo desde un máximo? Y el factor de beneficio: ¿cuántos dólares ganaste por cada dólar perdido?
> Boceto: cuatro tarjetas con icono: cuenta, balanza riesgo/ganancia, escalón hacia abajo, dos montones de dinero. kb=in.

**[0:54 — Dos IAs, lado a lado]** (pantalla: tabla comparativa)
Aquí están las dos, en la misma ventana: de marzo de 2023 a diciembre de 2024. La primera, sin filtro, la segunda, operando solo con convicción mayor que 0.5. Retorno: la segunda pierde menos. Caída máxima: la segunda también cae menos, menos 35.4% contra menos 38.3%. Pero el Sharpe, el factor de beneficio y las pruebas de azar empeoran.
| | #1 Sin filtro | #2 Convicción > 0.5 |
|---|---|---|
| Retorno | −36.2% | −33.9% |
| Caída máxima | −38.3% | −35.4% |
| Sharpe | −4.43 | −4.79 |
| Factor de beneficio | 0.72 | 0.68 |
| Operaciones | 2,040 | 1,822 |
| p de azar | 0.78 | 0.86 |
| PSR | 0.19 | 0.14 |
> Boceto: tabla animada; verde tenue donde el #2 mejora (retorno, caída), rojo donde empeora (Sharpe, factor, p, PSR). kb=out.

**[1:21 — Por qué el Sharpe puede empeorar]** (pantalla: curva y barras de variación)
Una explicación probable. El Sharpe es un cociente: la ganancia media dividida entre cuánto se mueve la cuenta. Si operas menos, la cuenta pasa más tiempo quieta y se mueve menos. Cuando pierdes algo menos, pero tu cuenta se mueve bastante menos, el cociente se hace más negativo. Dicho de otro modo: podría haber perdido de forma algo más regular. No medí la volatilidad por separado; es la lectura natural de un cociente, no una cifra del experimento.
> Boceto: dos curvas de cuenta, una con ruido y otra más suave; el numerador y el denominador como dos barras; etiqueta gris «lectura, no dato». kb=in.

**[1:51 — Cómo leer el panel completo]** (pantalla: semáforo)
La enseñanza práctica: ningún número se lee solo. El retorno no dice el riesgo. El Sharpe no dice cuánto dinero. La caída máxima no dice si la ventaja es real. Para decidir, primero compara contra comprar y esperar: aquí, menos 2.2%. Después, mira si hay ventaja: el factor de beneficio debe pasar de 1, y las pruebas de azar deben dar un p menor que 0.05 y un PSR mayor que 0.95. El #2 falla en todas.
> Boceto: semáforo con cuatro luces: comprar y esperar ✗, factor de beneficio ✗ (0.68), p ✗ (0.86), PSR ✗ (0.14). kb=out.

**[2:25 — Una misma IA, cuatro lecturas]** (pantalla: cuatro tarjetas con veredictos distintos)
Mira cuántas conclusiones distintas salen de un mismo experimento. Si solo miras el retorno, el filtro ayudó. Si miras la caída máxima, también ayudó. Si miras el Sharpe, empeoró. Si miras el factor de beneficio, empeoró. Cuatro lecturas, dos veredictos opuestos. Quien quiera vender una idea elegirá la lectura que le convenga; quien quiera saber si funciona las mirará todas, y usará las pruebas de azar para decidir entre ellas.
> Boceto: cuatro tarjetas (retorno ✓, caída ✓, Sharpe ✗, factor ✗) y una balanza que no se inclina. kb=out.

**[2:52 — Lo que sí es verdad]** (pantalla: dos curvas)
Para ser justos, hay una mejora real: menos operaciones, menos comisiones, 2,097 dólares contra 2,327. Y una pérdida algo menor. Pero una mejora de la pérdida no es una ventaja. Las dos curvas siguen bajando casi juntas, y las dos terminan muy por debajo de comprar y esperar.
> Boceto: las dos curvas reales superpuestas (series de #1 y #2) cayendo casi juntas; la curva gris de comprar y esperar casi plana. kb=in.

**[3:13 — Con tu capital]** (pantalla: tarjeta «Con tu capital»)
Con 10,000 dólares, la cuenta terminó en 6,615 y comprar y esperar habría terminado en 9,775. Con 100,000, la tabla de ATLAS da menos 33,846 contra menos 2,237.
> Boceto: tarjeta de capital con ambas cifras en rojo; selector $10,000 / $100,000.

**[3:29 — Ficha del experimento #2]** (pantalla: tarjeta con la URL)
Ficha del experimento 2. Estado: murió. Cifra clave: menos 33.9% fuera de muestra contra menos 2.2% de comprar y esperar, con un Sharpe de menos 4.79. Filtros que decidieron: costos, prueba de azar y PSR. Lección: perder menos no es ganar, y ningún número se lee solo. Revísalo completo en atlas-lab-one.vercel.app/e/2.
> Boceto: tarjeta oscura con «#2 · MURIÓ», cifras clave y «atlas-lab-one.vercel.app/e/2» en grande; logo.

**[3:52 — Cierre]**
Todos los datos en atlas-lab-one.vercel.app, experimento 2. Contenido educativo, no es asesoría financiera. El trading no se promete: se prueba.
> Boceto: pantalla oscura con la frase de marca.

---

## SHORT (9:16, ≈ 45 s)

**[0-3 s]** «Perdió menos, −33.9%, y su Sharpe es peor: −4.79.»
> Boceto: «−33.9%» verde tenue y «Sharpe −4.79» rojo con sacudida; b-roll de gráfico de bolsa, Ken Burns «in», overlay 0.6.

**[3-14 s]** «Son dos versiones de la misma IA en el euro. La primera pierde −36.2% con un Sharpe de −4.43. La segunda, con un filtro de confianza, pierde −33.9% con un Sharpe de −4.79.»
> Boceto: dos columnas con las cifras; flechas contradictorias; Ken Burns «out».

**[14-26 s]** «El Sharpe es la ganancia por unidad de riesgo. Una posible lectura: si operas menos, tu cuenta se mueve menos, y una pérdida más regular da un Sharpe más negativo.»
> Boceto: dos curvas, una con ruido y otra suave; «lectura, no dato» en gris; whoosh y flash blanco.

**[26-38 s]** «La caída máxima también mejoró: −35.4%. Pero el factor de beneficio bajó a 0.68 y el p de azar fue 0.86. Comprar y esperar perdió −2.2%.»
> Boceto: semáforo de cuatro luces; barras −33.9% contra −2.2%; Ken Burns «in».

**[38-45 s]** «Ningún número se lee solo. Experimento dos completo en el enlace. El video completo está en el canal. No es asesoría financiera.»
> Boceto: vuelven las dos cifras enfrentadas (loop con el gancho); texto «Experimento #2 completo en el enlace» y logo.

---

## Descripción de YouTube (video largo)
https://atlas-lab-one.vercel.app/e/2?utm_source=youtube&utm_medium=video&utm_campaign=exp002-t3
Ficha del experimento #2 (ML XGBoost + filtro de convicción): estado murió · −33.9% fuera de muestra (comprar y esperar: −2.2%) · Sharpe −4.79 (frente a −4.43 del #1) · caída máxima −35.4%.
Qué mide el Sharpe y por qué una IA que pierde menos puede tener peor Sharpe: cómo leer retorno, Sharpe, caída máxima y factor de beneficio juntos, con un caso real en el EUR/USD (mar-2023 a dic-2024).
Contenido educativo. No es asesoría financiera ni recomendación de inversión.

## Descripción del Short
https://atlas-lab-one.vercel.app/e/2?utm_source=youtube&utm_medium=short&utm_campaign=exp002-t3
Experimento #2 · murió · retorno −33.9% y Sharpe −4.79. No es asesoría financiera.

Capítulos: 0:00 Gancho · 0:16 Qué experimento es · 0:30 Qué mide cada número · 0:54 Dos IAs, lado a lado · 1:21 Por qué el Sharpe puede empeorar · 1:51 Cómo leer el panel completo · 2:25 Una misma IA, cuatro lecturas · 2:52 Lo que sí es verdad · 3:13 Con tu capital · 3:29 Ficha del experimento #2 · 3:52 Cierre

Etiquetas: sharpe ratio, qué es el sharpe, drawdown, factor de beneficio, cómo leer un backtest, machine learning trading, XGBoost, EUR/USD, fuera de muestra, ATLAS Lab, trading con datos, riesgo y retorno

## Rúbrica (autoevaluación, 1–5)
| Criterio | Short | Largo |
|---|---|---|
| hook_0_3s | 4 | 4 |
| ritmo | 4 | 4 |
| promesa_cumplida | 4 | 4 |
| potencial_loop | 5 | 4 |
| claridad_no_traders | 4 | 4 |
| honestidad_atlas | 5 | 5 |
| audio | 4 | 3 |
| cta | 4 | 4 |
| **Promedio** | **4.25** | **4.00** |

Notas: la causa de que el Sharpe empeore es una lectura del cociente y el guion la marca como tal («lectura, no dato»); el experimento no publica la volatilidad. Promesa cumplida en 4 por esa razón. El Short cumple hook ≥ 4 y honestidad 5.

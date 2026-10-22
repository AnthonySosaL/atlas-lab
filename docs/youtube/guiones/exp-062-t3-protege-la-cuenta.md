# Experimento #62 — B3 continuo (prueba triple) · Tema 3 de 3: ¿al menos protege la cuenta?

Estado del guion: **BORRADOR — pendiente de aprobación**
Tema 3 de 3 del experimento #62 · Qué aporta frente a los otros temas: es el tema del RIESGO y del CON TU CAPITAL. Examina el último argumento a favor de B3, «aunque no gane más, protege», con las caídas máximas de dos periodos (−13.9% contra −10.8% dentro de muestra; −8.9% contra −10.9% fuera) y con lo que habría pasado con $10,000 y $100,000. El tema 1 es el examen de B3 (Deflated Sharpe 0.20); el tema 2 resume las siete ideas de la saga.
Estado del experimento: **murió** (cierra la saga de cambio de régimen: 7 ataques, ninguno pasa el triple test)
Serie: G, por tema (filtros de régimen; el plan aún no lista #61–#62) · Relacionado: #59, #60, #61
Datos usados: `experiments.json` (v=62: verdict, analysis, notes, kpis, metrics, period, params_view, capital) · `exp_details.json` (extra-v62: algo, code.snippet, filters) · `series/extra-v62.json` ([0] B3 MA200 cesta reducida, [1] sin estrategia) · tabla «Con tu capital» (`docs/youtube/*-capital.md`, fila #62; el $10k se calcula con la misma regla de la tarjeta del sitio).

## Títulos
1. ¿Protege la cuenta? Caída máxima −8.9% contra −10.9%… y peor en otro periodo
2. El último argumento a favor de la exposición continua, puesto a prueba
3. Con $100,000 perdió $6,680: qué pasa cuando una estrategia ni gana ni protege

## Miniatura
Fondo `#09090b`. Dos escudos: el de la izquierda, verde `#22c55e`, con «−8.9%»; el de la derecha, agrietado y rojo `#e11d2a`, con «−13.9%». Texto grande blanco: «¿PROTEGE?». Logo ATLAS esquina inferior derecha.

---

## VIDEO LARGO (≈ 5½ min)

**[0:00 — Gancho]** (pantalla: dos escudos, uno entero y otro agrietado)
Si una estrategia no gana, ¿al menos protege tu cuenta? Fuera de muestra, la mía cayó como máximo −8.9%, contra −10.9% de invertir a 1x. Pero dentro de muestra, −13.9% contra −10.8%.
> BOCETO: dos escudos con las cifras; el verde con «−8.9% contra −10.9%» y el agrietado con «−13.9% contra −10.8%»; golpe de bajo y sacudida al agrietarse.

**[0:20 — Este experimento]** (pantalla: rótulo «Experimento #62 · B3 continuo (prueba triple)»)
Este es el experimento #62 de ATLAS Lab: B3 continuo, con la prueba triple. Todos los resultados están en la página del experimento. Hoy examino el último argumento a favor de esta idea: que cuida el riesgo.
> BOCETO: rótulo con «#62» y el nombre del experimento; logo ATLAS; whoosh suave.

**[0:40 — Qué es el drawdown]** (pantalla: una montaña con un valle marcado)
El drawdown, o caída máxima, es la peor caída desde un pico: si tu cuenta llegó a un máximo y luego bajó, cuánto bajó desde ahí. Es lo que siente quien invierte. Una estrategia puede ganar poco, pero si cae menos que la alternativa, tiene un valor como control de riesgo.
> BOCETO: curva ilustrativa con un pico y un valle; flecha entre ambos rotulada «drawdown». Ilustración, sin datos.

**[1:15 — El argumento a favor]** (pantalla: B3 como un regulador de luz)
B3 es la exposición continua: dos veces la fracción de activos que están sobre su media de 200 días, como un regulador de luz que sube y baja. En el video anterior no superó a invertir a 1x en retorno. Quedaba una última defensa: que, aunque no gane más, cuida mejor la cuenta.
> BOCETO: regulador de luz de 0 a 2x; texto «2 × fracción de activos sobre su media».

**[1:50 — Dos periodos, dos resultados]** (pantalla: tabla animada)
Se midió en dos periodos. Dentro de muestra, de 2014 a 2024, B3 tuvo una caída máxima de −13.9%, peor que el −10.8% de invertir a 1x. Fuera de muestra, de 2007 a 2013, un periodo que no había visto y con la crisis de 2008, −8.9% contra −10.9%: mejor.
| Caída máxima | B3 | Invertido a 1x |
|---|---|---|
| Dentro de muestra, 2014–2024 | −13.9% | −10.8% |
| Fuera de muestra, 2007–2013 | −8.9% | −10.9% |
> BOCETO: las dos filas entran con tick; barras de drawdown: en la primera B3 es más larga (rojo), en la segunda más corta (verde).

**[2:35 — Cómo leer un resultado mixto]** (pantalla: balanza con dos pesas)
Un periodo a favor y otro en contra no confirma nada. Con dos periodos, lo que se puede decir es que el valor como control de riesgo no queda confirmado. Además, hay que mirarlo junto al retorno: fuera de muestra, su Sharpe, la ganancia por unidad de riesgo, fue de −0.03. Una caída algo menor, sin ganancia que la acompañe, no es una ventaja.
> BOCETO: balanza con una pesa en cada platillo («−8.9% vs −10.9%» y «−13.9% vs −10.8%»), sin inclinarse; sello ámbar «NO CONFIRMADO». Tarjeta «Sharpe fuera de muestra: −0.03».

**[3:15 — Con tu capital]** (pantalla: tarjeta «Con tu capital», selector $10,000 / $100,000)
De marzo de 2007 a diciembre de 2024, con $10,000, B3 habría perdido $668; invertido a 1x en la misma cesta, habría ganado $262. Con $100,000: −$6,680 contra +$2,616. La peor caída desde un máximo, en esa curva, fue de −$1,399 con $10,000 y de −$13,986 con $100,000, un −14.0%. La curva usa exposición de hasta el doble, así que todo se amplifica.
> BOCETO: curva de B3 (`series/extra-v62.json[0]`) cayendo bajo la línea de partida y curva gris `[1]` subiendo apenas; aviso ámbar «exposición de hasta x2». Tarjeta con los dos capitales.

**[4:00 — Cuando una estrategia ni gana ni protege]** (pantalla: dos columnas)
Aquí el resultado es incómodo: en dinero, B3 terminó por debajo de donde empezó; la alternativa más simple ganó poco, pero ganó. Y en riesgo, el resultado es mixto. Si una idea no gana más y no protege de forma consistente, no queda un motivo para elegirla.
> BOCETO: dos columnas: «Gana más: no» y «Protege de forma consistente: no confirmado», con ✕ y signo de interrogación.

**[4:30 — Qué dice y qué no dice]** (pantalla: dos columnas)
Dice que, en una cesta de divisas y oro, con datos diarios, costos de 3 puntos básicos y la señal de ayer, esta regla no tiene ventaja medible ni control de riesgo confirmado. No dice que la exposición continua sea mala en cualquier mercado.
> BOCETO: izquierda en verde «en forex y oro, datos diarios, no hay ventaja medible»; derecha en gris «no prueba que la idea sea mala en todos los mercados».

**[5:00 — Conclusión]** (pantalla: los dos escudos del inicio)
Proteger tiene que ser una promesa que se cumple en todos los periodos, no en uno solo.
> BOCETO: los dos escudos del inicio, fijos, con la etiqueta «no confirmado».

**[5:10 — Ficha del experimento #62 y cierre]** (pantalla: tarjeta con la ficha y la URL)
Ficha del experimento #62. Estado: murió. Cifra clave: caída máxima de −8.9% fuera de muestra contra −10.9% de invertir a 1x, pero −13.9% contra −10.8% dentro de muestra. Filtro que decidió: Deflated Sharpe de 0.20, cuando se exige más de 0.95. Lección: el valor como control de riesgo no queda confirmado. Revísalo completo en atlas-lab-one.vercel.app/e/62. Contenido educativo, no es asesoría financiera. El trading no se promete: se prueba.
> BOCETO: tarjeta en pantalla con las 4 líneas de la ficha (estado rojo «murió») y la URL `atlas-lab-one.vercel.app/e/62` en grande; fundido a la frase de marca.

---

## SHORT (9:16, ≈ 44 s) — "¿Protege o no?"

**[0-3 s]** "Si no gana, ¿al menos protege? Fuera de muestra: menos 8.9% contra menos 10.9%. Dentro de muestra: menos 13.9% contra menos 10.8%."
> BOCETO: dos escudos, uno entero y otro agrietado; b-roll de pantallas con velas rojas, kb=in, overlay 0.6; golpe de bajo y sacudida. Karaoke con «PROTEGE» en rojo.

**[3-14 s]** "La estrategia ajusta su exposición según cuántos activos están sobre su media de 200 días, como un regulador de luz. No le ganó a invertir y esperar. Quedaba una defensa: que cuidara la cuenta."
> BOCETO: regulador de luz de 0 a 2x; whoosh. Ken Burns hacia dentro.

**[14-26 s]** "La caída máxima es la peor caída desde un pico. En 2007–2013, con la crisis de 2008, B3 cayó menos 8.9%; invertir y esperar, menos 10.9%. En 2014–2024, al revés: menos 13.9% contra menos 10.8%."
> BOCETO: tabla de dos filas con barras de drawdown; tick por fila; flash blanco.

**[26-36 s]** "Con 100,000 dólares, de 2007 a 2024, B3 perdió 6,680. Invertir y esperar la misma cesta ganó 2,616."
> BOCETO: tarjeta de capital: «−$6,680» contra «+$2,616»; aviso «exposición hasta x2».

**[36-44 s]** "Un periodo a favor y otro en contra: no confirmado. Video completo en el canal y experimento 62 completo en el enlace. ¿Protege? Depende del periodo."
> BOCETO: vuelven los dos escudos (loop); rótulo «Experimento #62 completo en el enlace»; texto pequeño «No es asesoría financiera · El trading no se promete: se prueba».

---

## Descripción (YouTube)
https://atlas-lab-one.vercel.app/e/62?utm_source=youtube&utm_medium=video&utm_campaign=exp062-t3
Ficha del experimento #62: murió · caída máxima de B3: −8.9% fuera de muestra (contra −10.9% de invertir a 1x) y −13.9% dentro de muestra (contra −10.8%) · con $100,000, −$6,680 contra +$2,616.
Examino el último argumento a favor de la exposición continua, el control de riesgo, en 7 pares de divisas más oro (2007–2024): el resultado es mixto y no queda confirmado.
Contenido educativo. No es asesoría financiera ni recomendación de inversión.
Descripción del Short (primera línea): https://atlas-lab-one.vercel.app/e/62?utm_source=youtube&utm_medium=short&utm_campaign=exp062-t3

Capítulos: 0:00 Gancho · 0:20 Este experimento · 0:40 Qué es el drawdown · 1:15 El argumento a favor · 1:50 Dos periodos, dos resultados · 2:35 Cómo leer un resultado mixto · 3:15 Con tu capital · 4:00 Cuando una estrategia ni gana ni protege · 4:30 Qué dice y qué no dice · 5:00 Conclusión · 5:10 Ficha del experimento #62 y cierre

Etiquetas: drawdown, caída máxima, control de riesgo, exposición continua, fuera de muestra, cambio de régimen, backtest, Sharpe ratio, forex y oro, trading con datos, ATLAS Lab, gestión de riesgo

## Rúbrica (autoevaluación)
| Pieza | hook_0_3s | ritmo | promesa_cumplida | potencial_loop | claridad_no_traders | honestidad_atlas | audio | cta | Promedio |
|---|---|---|---|---|---|---|---|---|---|
| Largo | 4 | 4 | 5 | 4 | 5 | 5 | 4 | 4 | 4.38 |
| Short | 4 | 4 | 5 | 5 | 4 | 5 | 4 | 4 | 4.38 |

Hook ≥ 4 ✓ · honestidad 5 ✓. Punto débil: el hook del Short lleva cuatro cifras; se resuelve con dos escudos y el sello «no confirmado». El resultado es mixto y el video lo presenta como tal.

# Experimento #53 — Ruptura de volatilidad sin dirección · Tema 2: diversificar amplifica el signo (0.65 a 0.88 y −0.44 a −0.78)

Estado del guion: **BORRADOR — pendiente de aprobación**
Tema 2 de 3 del experimento #53. Qué aporta frente a los otros temas: el tema 1 cuenta la idea de operar rupturas con volatilidad alta y su resultado; este explica un concepto, por qué el Sharpe de una cartera diversificada no es el promedio de sus activos, usando las dos parejas de cifras de la ficha (por activo y en cartera) y comparándolas con el experimento 51.
Estado del experimento: **murió** (No sirvió) · Serie: D/E (propuesta: mini-serie «La volatilidad sí se predice, la dirección no», #51 → #56; no figura en `plan-series.md`) · Relacionado: #51, #52, #54, #55, #56
Datos usados: `experiments.json` (v=53: verdict, analysis, notes, metrics, kpis, params_view, capital.note, period; v=51: capital.note y kpis para la comparación), `exp_details.json` (v53: algo, code.snippet, filters), `series/extra-v53.json` (curva 0 = estrategia con gate de volatilidad, curva 1 = comprar y esperar 7 activos) y la tabla «Con tu capital» (`docs/youtube/*-capital.md`) (filas #53 y #51).

## Títulos (3 opciones)
1. Diversificar amplifica el signo: 0.65 a 0.88 y −0.44 a −0.78
2. Qué le hace la diversificación a una estrategia que pierde
3. Sharpe por activo o de cartera: dos números, dos historias

## Miniatura (1280×720)
Fondo `#09090b`. Una lupa grande sobre dos cifras: "+0.88" en verde `#22c55e` y "−0.78" en rojo `#e11d2a`, que se ven más grandes bajo el cristal. Texto enorme blanco: "AMPLIFICA". Texto pequeño: "EL SIGNO". Logo ATLAS esquina superior derecha. (No repite el título 1.)

---

## VIDEO LARGO (16:9, ≈ 4 min — datos justos: dos parejas de cifras y una curva)

**[0:00 — Gancho]** (pantalla: dos parejas de cifras, 0.65 → 0.88 y −0.44 → −0.78)
Siete activos. Comprar y esperar: Sharpe medio por activo, 0.65; en cartera, 0.88. La estrategia de ruptura con volatilidad: por activo, −0.44; en cartera, −0.78. Diversificar mejoró lo que ganaba y empeoró lo que perdía.
> BOCETO: dos flechas: verde de 0.65 a 0.88 y roja de −0.44 a −0.78, con tick; sacudida de pantalla en el −0.78. Subtítulo karaoke con "AMPLIFICA" en rojo.

**[0:15 — De qué experimento hablamos]** (pantalla: rótulo con el número y el nombre)
Este es el experimento #53 de ATLAS Lab: Ruptura de volatilidad sin dirección. Todos los resultados están en la página del experimento.
> BOCETO: rótulo «EXPERIMENTO #53 · Ruptura de volatilidad sin dirección» con whoosh.

**[0:25 — La estrategia en 30 segundos]** (pantalla: canal de 20 días)
Un modelo de machine learning pronostica la volatilidad. Cuando el pronóstico está en el tercio más alto de su historia, opero la ruptura del canal de 20 días: compro si el precio cierra sobre su máximo y vendo en corto si cierra bajo su mínimo. Siete activos: S&P 500, Nasdaq 100, DAX, FTSE 100, WTI, Brent y oro. Costo de 2 puntos básicos por cambio de posición.
> BOCETO: canal de 20 días con flechas de ruptura; chips de los 7 activos; `params_view` (canal 20 d · tercil superior · 2 bps).

**[1:00 — Qué mide el Sharpe]** (pantalla: balanza ganancia / riesgo)
El Sharpe es la ganancia dividida entre el riesgo. Un Sharpe positivo dice que ganaste por cada unidad de riesgo; uno negativo, que perdiste. Para un activo suelto, el riesgo es lo que se mueve su precio. Pero en una cartera de varios activos, el riesgo no es el promedio de los riesgos: baja, porque los activos no se mueven exactamente igual, y lo que sube en uno compensa lo que baja en otro.
> BOCETO: balanza «ganancia ÷ riesgo»; siete líneas desiguales que, al promediarse, forman una línea más suave.

**[1:30 — La lupa sobre el signo]** (pantalla: cociente con denominador que se achica)
Ahora piensa en el cociente. Si el riesgo del denominador se achica, el resultado se agranda. Con una ganancia positiva, el Sharpe sube. Con una pérdida, el Sharpe se hace más negativo. Dividir el riesgo es una lupa: no cambia el signo, lo hace más grande. Por eso la cartera de comprar y esperar pasa de 0.65 a 0.88, y la estrategia, de −0.44 a −0.78.
> BOCETO: fracción «ganancia / riesgo» con el denominador encogiendo; el resultado crece en verde (ganancia positiva) o en rojo (negativa); lupa sobre el signo.

**[2:00 — Los números del experimento]** (pantalla: dos parejas de barras)
Los datos de la ficha. Sharpe con filtro de volatilidad, promedio por activo: −0.44. Sharpe de comprar y esperar, promedio por activo: 0.65. En la cartera equiponderada de los siete, la estrategia da −0.78 y comprar y esperar, 0.88. Una nota de honestidad: ambas curvas parten el 19 de marzo de 2020, pero la estrategia solo abre posiciones desde enero de 2021.
> BOCETO: cuatro barras (−0.44 y −0.78 en rojo; 0.65 y 0.88 en verde) agrupadas en «por activo» y «cartera»; aviso ámbar «estrategia plana hasta ene-2021».

**[2:30 — La misma lupa en el experimento 51]** (pantalla: tercera pareja de cifras)
Lo mismo se ve en el experimento 51, con 15 activos. Comprar y esperar: 0.37 por activo y 0.87 en cartera. La IA con indicadores: 0.15 por activo y 0.65 en cartera. Las dos suben, porque las dos ganan. La lupa funciona en los dos sentidos.
> BOCETO: barras reales de #51 (0.37 → 0.87 y 0.15 → 0.65) junto a las de #53; chip «#51».

**[2:50 — Con tu capital]** (pantalla: tarjeta "Con tu capital")
Con $10,000, la estrategia termina en −$1,417. Con $100,000, en −$14,168. Comprar y esperar los siete activos, en esas fechas, +$11,290 y +$112,904. La comparación en dólares incluye el tramo plano de la estrategia. Es lo que pasó en la simulación, no una promesa.
> BOCETO: tarjeta de capital con fila roja (estrategia) y fila gris (sin estrategia); nota «La estrategia no opera hasta ene-2021. Simulación, no es una promesa».

**[3:15 — Qué aprender]** (pantalla: tres ideas)
Tres ideas. Una: el Sharpe de un activo suelto no es el de tu cartera; pregunta cuál te están enseñando. Dos: diversificar reduce el riesgo, no arregla una estrategia que pierde: solo la hace ver peor en Sharpe. Tres: si una estrategia es mala en cada activo por separado, no la va a salvar juntar más activos.
> BOCETO: tres tarjetas numeradas con whoosh; en la segunda, la lupa sobre −0.78.

**[3:40 — Ficha del experimento #53]** (pantalla: tarjeta con la URL)
Ficha del experimento 53. Estado: murió, no sirvió. Cifra clave: Sharpe de −0.44 por activo y −0.78 en cartera, contra 0.65 y 0.88 de comprar y esperar. Filtro que decidió: batir a comprar y esperar, que no se cumple. Lección: saber que viene un movimiento no basta, y diversificar no arregla una estrategia que pierde. Revísalo completo en atlas-lab-one.vercel.app/e/53.
> BOCETO: tarjeta «FICHA · EXPERIMENTO #53» con Estado · Cifra clave · Filtro que decidió · Lección, y la URL `atlas-lab-one.vercel.app/e/53` en grande.

**[4:05 — Cierre]**
Contenido educativo, no es asesoría financiera. El trading no se promete: se prueba.
> BOCETO: fundido a la frase de marca en blanco sobre negro; logo ATLAS.

---

## SHORT (9:16, ≈ 42 s) — "La lupa"
Título del Short: Diversificar: Sharpe de 0.65 a 0.88… y de −0.44 a −0.78 #Shorts

**[0-3 s]** "Diversificar subió un Sharpe de 0.65 a 0.88. Y hundió otro, de menos 0.44 a menos 0.78."
> BOCETO: B-roll vertical de pantallas de mercado con overlay 0.6; dos flechas, una verde y una roja; golpe de bajo y sacudida.

**[3-14 s]** "Siete activos. Compro o vendo la ruptura del canal de 20 días, pero solo cuando se espera mucha volatilidad. El Sharpe mide ganancia entre riesgo."
> BOCETO: canal de 20 días; fracción ganancia / riesgo. Ken Burns hacia dentro.

**[14-27 s]** "En cartera, el riesgo baja. Si ganabas, el Sharpe sube. Si perdías, se vuelve más negativo. Diversificar es una lupa sobre el signo."
> BOCETO: fracción con denominador que encoge; lupa; el resultado cambia de tamaño con tick.

**[27-36 s]** "Con cien mil dólares, la estrategia perdió $14,168. Comprar y esperar ganó $112,904."
> BOCETO: tarjeta de capital con dos cifras; aviso «plana hasta ene-2021».

**[36-42 s]** "Diversificar no arregla una estrategia que pierde. Experimento 53 completo en el enlace; el video completo está en el canal. No es asesoría financiera."
> BOCETO: vuelven las dos flechas (loop con el primer cuadro); abajo «Experimento #53 completo en el enlace»; texto pequeño «El trading no se promete: se prueba.»

---

## Descripción (YouTube) — video largo
https://atlas-lab-one.vercel.app/e/53?utm_source=youtube&utm_medium=video&utm_campaign=exp053-t2
Ficha del experimento #53 (Ruptura de volatilidad sin dirección): murió (No sirvió) · Sharpe −0.44 por activo y −0.78 en cartera, contra 0.65 y 0.88 de comprar y esperar · con $100,000, −$14,168 contra +$112,904.
Por qué el Sharpe de una cartera no es el promedio de sus activos y qué hace la diversificación con una estrategia que pierde, con el caso del experimento 51 como segundo ejemplo.
Contenido educativo. No es asesoría financiera ni recomendación de inversión.

## Descripción (YouTube) — Short
https://atlas-lab-one.vercel.app/e/53?utm_source=youtube&utm_medium=short&utm_campaign=exp053-t2
Experimento #53 (Ruptura de volatilidad sin dirección): murió · Sharpe por activo −0.44 y en cartera −0.78; comprar y esperar, 0.65 y 0.88. Video completo en el canal. No es asesoría financiera.

## Capítulos
0:00 Gancho · 0:15 De qué experimento hablamos · 0:25 La estrategia en 30 segundos · 1:00 Qué mide el Sharpe · 1:30 La lupa sobre el signo · 2:00 Los números del experimento · 2:30 La misma lupa en el experimento 51 · 2:50 Con tu capital · 3:15 Qué aprender · 3:40 Ficha del experimento #53 · 4:05 Cierre

## Etiquetas
diversificación, Sharpe ratio, cartera, ruptura de volatilidad, riesgo, backtest, machine learning, volatilidad, estrategia de trading, trading con datos, ATLAS Lab

## Rúbrica (autoevaluación, escala 1-5)
| Criterio | Nota | Por qué |
|---|---|---|
| hook_0_3s | 4 | Paradoja «diversificar mejoró y empeoró» con cuatro cifras de la ficha en pantalla |
| ritmo | 4 | Flechas, fracción y barras cambian cada 2–3 s; el bloque conceptual del denominador es el más abstracto |
| promesa_cumplida | 5 | Promete explicar la paradoja y la explica con la fracción y las dos parejas de cifras |
| potencial_loop | 4 | El final vuelve a las dos flechas |
| claridad_no_traders | 4 | Explica Sharpe, riesgo y diversificación con una lupa visual |
| honestidad_atlas | 5 | Avisa de que la estrategia está plana hasta enero de 2021 y de que la comparación en dólares lo incluye |
| audio | 4 | Voz por clonar; un golpe de bajo |
| cta | 4 | Una petición (la ficha en la web) y remite al video completo |
Promedio: **4.25** (≥ 4.0). Hook del Short 4 (≥ 4) y honestidad 5: no descalificado.

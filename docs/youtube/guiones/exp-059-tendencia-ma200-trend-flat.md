# Experimento #59 — Tendencia o fuera (cambio de régimen con MA200)

Estado del guion: **BORRADOR — pendiente de aprobación**
Estado del experimento: **murió** (No sirvió): el +30.3% de 2014-2024 era beta de los índices; fuera de muestra (2007-2013) da Sharpe −0.09 y el Deflated Sharpe es 0.21 · Serie: sin asignar en `plan-series.md`; propuesta: nueva serie «Cambio de régimen» (#59 → #60), vecina de la E · Relacionado: #60, #57
Datos usados: `experiments.json` (v=59: verdict, analysis, notes, metrics, kpis, params_view, capital.note), `exp_details.json` (algo, code.snippet, filters), `series/extra-v59.json` (curva 0 = Trend-flat MA200, curva 1 = comprar y esperar la cesta) y la tabla «Con tu capital» (`docs/youtube/*-capital.md`) (fila #59).

## Títulos (3 opciones)
1. MA200: +30.3% dentro de muestra, −0.09 fuera de ella
2. El +30.3% que era solo beta: la media móvil de 200 días
3. Media de 200 días y mercado bajista: Deflated Sharpe 0.21

## Miniatura (1280×720)
Fondo `#09090b`. Una curva verde `#22c55e` ascendente, medio transparente, con un sello rojo `#e11d2a` enorme encima. Texto grande blanco: "SOLO BETA". Texto pequeño: "MA200". Logo ATLAS esquina superior derecha. (No repite el título 1.)

---

## VIDEO LARGO (16:9, ≈ 7½ min)

**[0:00 — Gancho]** (pantalla: curva ascendente con "+30.3%" y luego un sello)
Una regla de una sola línea: si el mercado está por encima de su media de 200 días, compro con apalancamiento 2; si está por debajo, me salgo. Sobre la cesta completa, de 2014 a 2024: +30.3%. Parece que funciona. Hasta que la pruebo en otro periodo y en una cesta sin índices: Sharpe de −0.09.
> BOCETO: curva real `series/extra-v59.json` curva 0 subiendo, contador +30.3% en verde; corte seco y sello rojo "SOLO BETA" con sacudida; el "−0.09" aparece en rojo.

**[0:30 — Presentación]** (pantalla: rótulo «Experimento #59 · Tendencia o fuera (cambio de régimen con MA200)»)
Este es el experimento #59 de ATLAS Lab: Tendencia o fuera (cambio de régimen con MA200). Todos los resultados están en la página del experimento.
> BOCETO: rótulo «EXPERIMENTO #59 · Tendencia o fuera (cambio de régimen con MA200)» que entra con whoosh sobre el último cuadro del gancho a baja opacidad.

**[0:40 — La idea]** (pantalla: precio y media de 200 días)
La media móvil de 200 días es el promedio del precio de los últimos 200 días. Cuando el precio está por encima, se dice que el mercado está en tendencia alcista; por debajo, bajista. La idea es detectar el mercado bajista y quedarse sin posición. La regla compra con apalancamiento 2 la cartera de paridad de riesgo cuando el índice equiponderado de la cesta está sobre su media de 200 días, y sale al efectivo cuando está debajo. La señal se aplica con un día de rezago y el costo es de 3 puntos básicos por unidad de rotación.
> BOCETO: gráfico esquemático (ilustración) de precio con media de 200 días; tramos verdes "x2" sobre la media y grises "fuera" debajo. Recuadro `params_view`: MA200 · x2 / 0 · rezago 1 día · 3 bps.

**[1:25 — Qué es la beta y por qué importa aquí]** (pantalla: ilustración de una marea que sube)
Beta es lo que ganas por estar dentro de un mercado que sube, sin que cuente tu habilidad. Piensa en una marea: cuando sube, todos los barcos suben. Si metes índices en la cesta durante un periodo en que los índices suben, cualquier regla que esté comprada con apalancamiento va a ganar, sea buena o no. Por eso el truco para evaluar una regla no es mirar cuánto ganó, sino cuánto ganó que no se explique por estar dentro del mercado. Es justo lo que intenta medir el triple test.
> BOCETO: ilustración rotulada (no es dato real): marea que sube con barcos de distinto tamaño; texto "¿cuánto es marea y cuánto es el barco?".

**[2:05 — En la cesta completa]** (pantalla: dos tarjetas de Sharpe)
En la cesta completa, la que incluye índices, de 2014 a 2024, da +30.3%. Pero su Sharpe, la ganancia por unidad de riesgo, es de 0.33. Estar invertido a 1x, sin apalancar y sin hacer nada, da 0.37. Es decir, ni siquiera aquí supera a estar invertido sin más.
> BOCETO: dos tarjetas: "Trend-flat 0.33" (blanca) y "Invertido a 1x 0.37" (verde); la segunda es mayor. Curva 0 y curva 1 de la serie dibujándose al lado.

**[2:30 — Por qué importa el Sharpe y no solo el retorno]** (pantalla: dos tarjetas de Sharpe y apalancamiento)
Un retorno alto puede venir de asumir más riesgo. El apalancamiento 2 duplica ganancias y pérdidas, así que el retorno solo no dice si la regla es buena. El Sharpe ajusta por eso: divide la ganancia entre el riesgo. Un 0.33 contra 0.37 dice que, por unidad de riesgo, la regla rinde algo menos que estar invertido sin hacer nada. Y la ficha explica de dónde sale el +30.3%: de la beta de los índices, que el apalancamiento 2 amplifica.
> BOCETO: dos tarjetas: "Retorno +30.3%" y "Sharpe 0.33 vs 0.37"; una flecha de "apalancamiento x2" que agranda la primera; tick sonoro al revelar el Sharpe.

**[3:10 — El triple test]** (pantalla: tres puertas)
Entonces la pruebo con rigor, en una cesta reducida: siete pares de divisas más oro, una cesta con datos desde 2007 y sin índices. Tres pruebas. Una: dentro de muestra, 2014 a 2024, con ventanas de media móvil de 50 a 300 días. Dos: el Deflated Sharpe, que descuenta la suerte de haber probado varias ventanas. Tres: fuera de muestra, 2007 a 2013, con la regla de 200 días congelada, es decir, sin retocarla.
| Prueba | Resultado | Exigencia |
|---|---|---|
| Dentro de muestra 2014–2024 (6 ventanas) | MA200: Sharpe −0.04; el resto, de −0.12 a −0.39 | — |
| Deflated Sharpe (ajustado por 6 ventanas) | 0.21 | mayor que 0.95 |
| Fuera de muestra 2007–2013 (MA200 congelada) | Sharpe −0.09, retorno −5.6%, caída máxima −13.6% | Sharpe mayor que 0.30 |
> BOCETO: tres puertas con candado que se cierran una a una, con los resultados de la tabla sobre cada una; barra DSR 0.21 contra la meta 0.95; las 6 ventanas como puntos rojos bajo cero. Aviso ámbar: "las 6 ventanas dan negativo: no hay ventana robusta".

**[3:45 — Cómo leer las seis ventanas]** (pantalla: seis puntos bajo cero)
La grilla probó seis ventanas de media móvil, de 50 a 300 días. Si una hubiera salido muy positiva, sospecharía de la suerte, porque con seis intentos alguna puede destacar. Pero salieron las seis en negativo: la de 200 días dio −0.04 y las otras, entre −0.12 y −0.39. No hay una ventana robusta. Y el Deflated Sharpe, que ajusta justo por esa cantidad de intentos, dio 0.21, lejos del 0.95 que se exige.
> BOCETO: seis puntos (MA50, 100, 150, 200, 250, 300) por debajo de la línea de cero, el de MA200 en −0.04 y los demás entre −0.12 y −0.39; barra DSR 0.21 contra la marca 0.95.

**[4:20 — Por qué falla: era beta]** (pantalla: curva de la cesta completa y de los índices)
Aquí está la explicación. El +30.3% era beta de los índices disfrazada de ventaja por régimen. Beta es lo que ganas por estar dentro de un mercado que sube. Con índices en la cesta y apalancamiento 2, la regla gana en un periodo alcista. Sin índices y en años que la regla no había visto, la ventaja desaparece. Además, un detector lento, como la tendencia, sobrevive mejor a la ejecución que uno rápido, como el VIX; pero igual no genera ventaja.
> BOCETO: pantalla dividida: izquierda "con índices" (curva 0, +30.3%), derecha "sin índices / fuera de muestra" (−5.6%, Sharpe −0.09). Texto: "BETA ≠ VENTAJA".

**[5:00 — El detector lento y el detector rápido]** (pantalla: dos relojes: lento y rápido)
Un detector de mercado bajista puede ser rápido, como el VIX, o lento, como la media de 200 días. El rápido necesita ejecutarse con la señal de ayer, y ese retraso le quita mucho. El lento sufre menos por ese retraso, porque su señal tarda en cambiar. La ficha lo resume así: la tendencia sobrevive mejor la ejecución que el VIX, pero igual no genera ventaja. Sobrevivir a la ejecución no es lo mismo que ganar.
> BOCETO: dos relojes: uno rápido (VIX, aguja que salta) y uno lento (MA200, aguja pausada); un sello "sobrevive la ejecución ≠ ventaja".

**[5:35 — Con tu capital]** (pantalla: tarjeta "Con tu capital")
Con $10,000, la regla termina en +$3,027; con $100,000, en +$30,275. Comprar y esperar la cesta a 1x, entre julio de 2014 y finales de 2024: +$2,310 y +$23,098. Gana más en dólares, sí, porque opera con apalancamiento 2 en un periodo en que los índices subieron. Por unidad de riesgo rinde menos que estar invertido a 1x. Y en la cesta sin índices, fuera de muestra, pierde.
> BOCETO: tarjeta de capital con dos filas (regla en verde claro, sin estrategia en gris); nota al pie ámbar: "Ganancia de apalancamiento x2 en un mercado que subió". Aviso: "Simulación, no es una promesa".

**[6:10 — Tres preguntas para una regla de una línea]** (pantalla: tres tarjetas con preguntas)
Si alguien te enseña una regla de una línea con un número bonito, pregunta tres cosas. Una: ¿incluye activos que subieron mucho en ese periodo? Si sí, quizá es beta. Dos: ¿cuántas variantes probó antes de enseñarte esta? Aquí fueron seis ventanas. Tres: ¿la probó en años que no usó para elegirla? Aquí, 2007 a 2013, y dio −0.09.
> BOCETO: tres tarjetas con icono (marea = beta, dados = cuántas variantes, calendario = fuera de muestra) con las cifras de la ficha (6 ventanas · −0.09).

**[6:40 — Lo que sigue]** (pantalla: texto de la ficha)
Esta regla perdía en el mercado bajista, y esa fue la razón de buscar un arreglo. En el experimento 60 probé tres.
> BOCETO: tarjeta "#60: ataques al cambio de régimen" con tres flechas; transición con whoosh.

**[6:55 — Ficha del experimento #59]** (pantalla: tarjeta con la URL)
Ficha del experimento #59. Estado: murió, no sirvió. Cifra clave: el +30.3% de 2014–2024 era beta de los índices; fuera de muestra (2007–2013), Sharpe de −0.09. Filtro que decidió: el Deflated Sharpe de 0.21, cuando se exige más de 0.95. Lección: un número bonito dentro de muestra no es una ventaja. Revísalo completo en atlas-lab-one.vercel.app/e/59.
> BOCETO: tarjeta «FICHA · EXPERIMENTO #59» con Estado · Cifra clave · Filtro que decidió · Lección, y la URL `atlas-lab-one.vercel.app/e/59` en grande.

**[7:20 — Conclusión y cierre]** (pantalla: logo)
Un número bonito dentro de muestra no es una ventaja. Todos los datos en atlas-lab-one.vercel.app/e/59. Si quieres que pruebe otra regla de tendencia, dímelo en los comentarios. Contenido educativo, no es asesoría financiera. El trading no se promete: se prueba.
> BOCETO: la curva del inicio y el sello "SOLO BETA"; fundido a la frase de marca.

---

## SHORT (9:16, ≈ 45 s) — "Beta disfrazada"
Título del Short: Esta regla de una línea dio +30.3%… era beta #Shorts

**[0-3 s]** "Esta regla dio más 30.3%. Era solo beta."
> BOCETO: B-roll vertical de pantallas de mercado con overlay 0.6; texto gigante "+30.3%" verde con sello rojo "BETA"; golpe de bajo y sacudida. Subtítulos karaoke con "BETA" en rojo.

**[3-11 s]** "Si el mercado está sobre su media de 200 días, compras con apalancamiento doble. Si está debajo, sales. Una regla de una línea."
> BOCETO: precio con media de 200 días (ilustración); tramos verdes "x2" y grises "fuera" alternando con whoosh. Ken Burns hacia dentro.

**[11-23 s]** "En la cesta completa, de 2014 a 2024: +30.3%. Pero su Sharpe, 0.33, queda por debajo del 0.37 de estar invertido sin apalancar."
> BOCETO: curva 0 de `series/extra-v59.json` subiendo; dos barras de Sharpe (0.33 blanca, 0.37 verde) con tick.

**[23-34 s]** "En una cesta sin índices y en años que nunca vio, 2007 a 2013: Sharpe de −0.09. Y Deflated Sharpe: 0.21, cuando hace falta 0.95."
> BOCETO: barra roja de −0.09 y barra DSR 0.21 contra la marca 0.95 en rojo; flash blanco al entrar.

**[34-45 s]** "El más 30.3% era beta de los índices. No era ventaja. Experimento 59 completo en el enlace; el video completo está en el canal. No es asesoría financiera."
> BOCETO: vuelve el "+30.3%" con el sello "BETA" del primer cuadro (loop); texto pequeño "El trading no se promete: se prueba." Abajo, «Experimento #59 completo en el enlace».

---

## Descripción (YouTube) — video largo
https://atlas-lab-one.vercel.app/e/59?utm_source=youtube&utm_medium=video&utm_campaign=exp059-t1
Ficha del experimento #59: murió (No sirvió) · +30.3% de 2014–2024 era beta · Sharpe −0.09 fuera de muestra (2007–2013) · Deflated Sharpe 0.21 frente a 0.95 exigido.
Probé una regla de tendencia de una línea: largo 2x en la cartera de paridad de riesgo cuando la cesta está sobre su MA200 y fuera cuando está debajo. En la cesta completa da +30.3% (2014-2024), pero con Sharpe 0.33 frente a 0.37 de estar invertido a 1x. En la cesta reducida (7 pares de forex + oro): todas las ventanas MA50-MA300 negativas, Deflated Sharpe 0.21 y Sharpe −0.09 fuera de muestra (2007-2013).
Contenido educativo. No es asesoría financiera ni recomendación de inversión.

Capítulos: 0:00 Gancho · 0:30 Presentación · 0:40 La idea · 1:25 Qué es la beta y por qué importa aquí · 2:05 En la cesta completa · 2:30 Por qué importa el Sharpe y no solo el retorno · 3:10 El triple test · 3:45 Cómo leer las seis ventanas · 4:20 Por qué falla: era beta · 5:00 El detector lento y el detector rápido · 5:35 Con tu capital · 6:10 Tres preguntas para una regla de una línea · 6:40 Lo que sigue · 6:55 Ficha del experimento #59 · 7:20 Conclusión y cierre

Etiquetas: media móvil 200, MA200, seguimiento de tendencia, trend following, mercado bajista, Deflated Sharpe, fuera de muestra, beta, backtest, Sharpe ratio, trading con datos, ATLAS Lab

## Descripción (YouTube) — Short
https://atlas-lab-one.vercel.app/e/59?utm_source=youtube&utm_medium=short&utm_campaign=exp059-t1
Experimento #59 · Tendencia o fuera (cambio de régimen con MA200): murió · el +30.3% era beta · Sharpe −0.09 fuera de muestra · Deflated Sharpe 0.21. Video completo en el canal. No es asesoría financiera.

## Rúbrica (autoevaluación, escala 1-5)
| Criterio | Nota | Por qué |
|---|---|---|
| hook_0_3s | 5 | «+30.3%» y el giro «solo beta» dentro de los primeros 3 s |
| ritmo | 4 | Tres puertas, tabla y pantalla dividida; el bloque del triple test es denso |
| promesa_cumplida | 5 | Promete explicar el giro y lo explica con la tabla de las tres pruebas |
| potencial_loop | 4 | Cierra con el mismo "+30.3%" y el sello |
| claridad_no_traders | 4 | Define media móvil, beta, Sharpe, Deflated Sharpe y fuera de muestra |
| honestidad_atlas | 5 | Dice que en dólares la regla gana más que comprar y esperar y explica por qué no es ventaja |
| audio | 4 | Voz por clonar; un golpe de bajo |
| cta | 4 | Una petición y remite al video completo |
Promedio: **4.38** (≥ 4.0). Hook del Short 5 (≥ 4) y honestidad 5: no descalificado.

## Otros temas de este experimento
- Tema 1 de 4: `exp-059-tendencia-ma200-trend-flat.md` — MA200: +30.3% dentro de muestra, −0.09 fuera de ella
- Tema 2 de 4: `exp-059-t2-seis-ventanas-sin-ganadora.md` — Seis versiones de la media móvil, seis Sharpe negativos (MA50 a MA300)
- Tema 3 de 4: `exp-059-t3-mas-dolares-peor-sharpe.md` — Ganó más dinero que comprar y esperar (+$30,275 contra +$23,098) y era peor estrategia
- Tema 4 de 4: `exp-059-t4-fuera-de-muestra-2008.md` — La regla de la media de 200 días en 2007–2013, con la crisis de 2008: retorno −5.6%, Sharpe −0.09

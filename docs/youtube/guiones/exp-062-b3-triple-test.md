# Experimento #62 — B3 continuo (prueba triple)

Estado del guion: **BORRADOR — pendiente de aprobación**
Estado del experimento: **murió** (cierra la saga de cambio de régimen: 7 ataques, ninguno pasa el triple test)
Serie: G, por tema (filtros de régimen; el plan aún no lista #61–#62). Continúa el #61.
Datos usados: `experiments.json` (v=62: verdict, analysis, notes, kpis, metrics, period, capital) · `exp_details.json` (extra-v62: algo, code, filters) · `series/extra-v62.json` ([0] B3 MA200 cesta reducida, [1] sin estrategia) · tabla «Con tu capital» (docs/youtube, archivo de capital, fila #62; el $10k se calcula con la misma regla de la tarjeta del sitio).

## Títulos
1. 7 ataques al cambio de régimen: ninguno pasó el examen
2. Deflated Sharpe de 0.20: así reprueba una estrategia
3. La última idea para detectar crisis a tiempo: Sharpe −0.03

## Miniatura
Fondo `#09090b`. Un medidor semicircular con la aguja clavada en el extremo rojo y la marca de meta en verde; a la derecha, sello rojo `#e11d2a` inclinado con «REPROBADO» (una sola palabra, Segoe UI Black). Logo ATLAS esquina inferior derecha.

---

## VIDEO LARGO (≈ 7 min)

**[0:00 — Gancho]** (pantalla: medidor «Deflated Sharpe» con meta 0.95; la aguja sube y se queda en 0.20)
BOCETO: negro, medidor que se llena; golpe de bajo y sacudida cuando la aguja se frena en 0.20.
> Necesitaba 0.95 para aprobar. Sacó 0.20. Esta es la última prueba de una saga de siete ataques al mismo problema: detectar a tiempo que el mercado cambió de régimen, para salir antes de las caídas. Y el resultado final es claro: ninguno pasó.

**[0:20 — Presentación]** (pantalla: rótulo «Experimento #62 · B3 continuo (prueba triple)»)
BOCETO: rótulo «EXPERIMENTO #62 · B3 continuo (prueba triple)» que entra con whoosh sobre el último cuadro del gancho a baja opacidad.
> Este es el experimento #62 de ATLAS Lab: B3 continuo (prueba triple). Todos los resultados están en la página del experimento.

**[0:30 — El candidato]** (pantalla: curva `series/extra-v62.json[0]` contra la gris `[1]`)
BOCETO: retoma la tarjeta del #61: «B3 = 2 × fracción de activos sobre su media», el regulador de luz de 0 a 2x.
> En el video anterior probé tres ideas para detectar el cambio de régimen, y la mejor fue B3, la exposición continua: dos veces la fracción de activos que están sobre su media de 200 días, como un regulador de luz. En la cesta de 15 activos igualó a invertir a 1x, con +22.5% contra +23.1%, y cuidó mejor el riesgo, pero no superó a la alternativa más simple. Un resultado así deja una pregunta: ¿esa igualdad es una ventaja escondida o es solo ruido? Para saberlo, le toca el examen completo: el triple test.

**[1:10 — Por qué un triple test]** (pantalla: un estudiante con las preguntas del examen en la mano; luego preguntas nuevas)
BOCETO: dos hojas de examen: «las que ya vio» (tachada) y «preguntas nuevas» (resaltada en verde); al lado, seis monedas.
> Probar una regla con datos del pasado, lo que se llama un backtest, tiene un problema: es fácil que la regla se vea bien simplemente porque la estuve ajustando mirando esos mismos datos. Es como un estudiante que vio las preguntas del examen antes de presentarlo. Para saber si hay algo real, hay que hacerle preguntas nuevas, y además descontar lo afortunado que puede ser un resultado cuando pruebas muchas versiones y te quedas con la mejor. De ahí el triple test: tres pruebas distintas, y hay que pasarlas todas.

**[1:45 — Las tres puertas]** (pantalla: tres puertas, una tras otra)
BOCETO: puerta 1 «Dentro de muestra, grilla de 6 ventanas: 50, 100, 150, 200, 250, 300»; puerta 2 «Fuera de muestra 2007–2013, media de 200 congelada»; puerta 3 «Deflated Sharpe > 0.95».
> Primera puerta: probar seis ventanas de media, de 50 a 300 días, entre 2014 y 2024, para ver si el resultado depende de un número caprichoso. Segunda: tomar la media de 200 días, congelarla y probarla en 2007–2013, un periodo que la estrategia nunca vio y que incluye la crisis de 2008. Eso es la prueba fuera de muestra, y pedía un Sharpe mayor que 0.30. El Sharpe mide cuánto rindes por cada unidad de riesgo. Tercera puerta: el Deflated Sharpe, que ajusta el Sharpe por cuántas versiones probaste, y pedía más de 0.95.

**[2:25 — Las reglas del juego]** (pantalla: tarjeta «7 pares de divisas + oro · desde 2007 · 3 bps · señal de ayer»)
BOCETO: icono de moneda y de lingote; contador «3 bps» y reloj retrocediendo un día.
> Para llegar hasta 2007 uso una cesta más chica: 7 pares de divisas más oro, que sí tienen datos de esos años. Los pesos son inversos a la volatilidad de 60 días, igual que antes. Costos de 3 puntos básicos por cada movimiento de la cartera, y la señal siempre con los datos de ayer. De referencia, comprar y esperar en 2014–2020 da un Sharpe de 0.13: ese es el listón que cualquier estrategia debería superar.

**[2:55 — Puerta 1: dentro de muestra]** (pantalla: seis barras, una por ventana, todas hacia abajo)
BOCETO: barras rojas; la de MA200 rotulada −0.14 y la mejor, MA150, rotulada −0.12; línea verde punteada en 0.13 como referencia.
> Resultado de la primera puerta: Sharpe negativo en las seis ventanas. La media de 200 días da −0.14. La mejor de todas, la de 150, da −0.12. Fíjate que no se trata de que una ventana funcione y las otras no: ninguna llega siquiera a cero, y mucho menos a la referencia de 0.13. Que sea negativo en toda la grilla significa que el problema no está en el número que elegí para la media. La puerta uno ya está cerrada, pero para completar el examen pasé a la siguiente.

**[3:35 — Puerta 2: fuera de muestra]** (pantalla: línea de tiempo 2007–2013 sombreada, marca 2008)
BOCETO: aguja del Sharpe que sube hasta −0.03 y choca con la meta 0.30; sello ✕.
> Segunda puerta. Con la media de 200 días congelada en 2007–2013, el Sharpe fue −0.03, muy lejos del 0.30 que se necesitaba. Es decir, en un periodo que la regla nunca vio, y que incluye la crisis de 2008, no rindió por encima de cero. Su caída máxima fue de −8.9%, contra −10.9% de invertir a 1x: una caída algo menor, pero sin ganancia que la acompañe.

**[4:00 — Puerta 3: Deflated Sharpe]** (pantalla: medidor con la meta en 0.95 y la aguja en 0.20; seis monedas de las que solo una se ilumina)
BOCETO: el medidor del gancho, ahora con el rótulo «N = 6 ventanas».
> Tercera puerta, el Deflated Sharpe. Imagina que seis personas lanzan monedas y solo miras a la que sacó más caras: no dirías que es una experta, solo que fue la más afortunada de las seis. Eso mismo hace este indicador: toma el mejor Sharpe de la grilla y lo ajusta por haber probado seis ventanas. El resultado fue 0.20. Hacía falta más de 0.95. No es ni de cerca.

**[4:30 — ¿Al menos controla el riesgo?]** (pantalla: dos pares de barras de drawdown, dentro y fuera de muestra)
BOCETO: dentro de muestra B3 −13.9% (rojo) contra 1x −10.8% (gris); fuera de muestra B3 −8.9% contra 1x −10.9%.
> Quedaba una última defensa: que, aunque no gane más, B3 al menos proteja la cuenta. Dentro de la muestra, su drawdown, la peor caída desde un máximo, fue de −13.9%, peor que el −10.8% de invertir a 1x. Fuera de la muestra, −8.9% contra −10.9%, mejor. Un resultado mixto: el valor como control de riesgo no queda confirmado.

**[4:55 — Con tu capital]** (pantalla: tarjeta «Con tu capital», selector $10,000 / $100,000)
BOCETO: curva B3 cayendo bajo la línea de partida; aviso ámbar «exposición de hasta x2».
> Con $10,000 en B3, de marzo de 2007 a diciembre de 2024, habrías perdido $668; invertido a 1x en la misma cesta, habrías ganado $262. Con $100,000: −$6,680 contra +$2,616. La peor caída desde un máximo: −$1,399 con 10,000 y −$13,986 con 100,000, un −14.0%. La curva usa exposición de hasta el doble, así que todo se amplifica. Y fíjate en lo que dice: en 17.8 años, la alternativa más simple ni siquiera ganó mucho, pero B3 terminó por debajo de donde empezó.

**[5:30 — Qué significa y qué no]** (pantalla: dos columnas, «lo que dice el resultado» y «lo que no dice»)
BOCETO: izquierda en verde "en forex y oro, con datos diarios, no hay ventaja medible"; derecha en gris "no prueba que la idea sea mala en todos los mercados".
> Conviene decir con precisión qué demuestra este resultado y qué no. Demuestra que, en una cesta de divisas y oro, con datos diarios, costos de 3 puntos básicos y la señal de ayer, esta regla no tiene una ventaja medible: ni dentro de muestra, ni fuera, ni después de ajustar por las seis ventanas. No demuestra que la exposición continua sea una mala idea en cualquier mercado. Lo que sí demuestra es que no basta con que una curva se vea bien en un periodo: tiene que sobrevivir a periodos nuevos y a un ajuste por haber probado varias versiones.

**[6:10 — Ficha del experimento #62]** (pantalla: tarjeta con la URL)
BOCETO: tarjeta «FICHA · EXPERIMENTO #62» con Estado · Cifra clave · Filtro que decidió · Lección, y la URL `atlas-lab-one.vercel.app/e/62` en grande.
> Ficha del experimento #62. Estado: murió, no sirvió. Cifra clave: Sharpe de −0.03 fuera de muestra (2007–2013) y Deflated Sharpe de 0.20, con Sharpe negativo en toda la grilla de 2014–2024. Filtro que decidió: el Deflated Sharpe, de 0.20 contra 0.95 exigido. Lección: siete intentos de detectar el cambio de régimen, ninguno pasa el triple test y nada le gana a invertir a 1x. Revísalo completo en atlas-lab-one.vercel.app/e/62.

**[6:40 — Cierre de la saga]** (pantalla: siete tarjetas que se apagan una a una; queda el texto «el muro: detectar el régimen a tiempo con datos minoristas»)
BOCETO: siete tarjetas numeradas (los ataques) se apagan una a una con tick; queda una pared con el texto «el muro: detectar el régimen a tiempo con datos minoristas»; cierre con el logo.
> Con esto cierra la saga del cambio de régimen: siete ataques, ninguno pasa el triple test, y nada le gana a invertir a 1x. ¿Qué aprendí? Que el muro no es la falta de ideas: es detectar el régimen a tiempo con datos de un inversor minorista. Quizá con otros datos sea distinto, pero con lo que tengo al alcance, no lo es. Todos los datos en atlas-lab-one.vercel.app/e/62. El trading no se promete: se prueba. Contenido educativo, no es asesoría financiera.

---

## SHORT (9:16, ≈ 45 s)

**[0-3 s]** (boceto: medidor con la aguja en 0.20 y la meta 0.95 en verde; texto «0.95 → 0.20»; b-roll de un examen con tachones rojos, kb=in; golpe de bajo)
> Necesitaba 0.95 para aprobar. Sacó 0.20.

**[3-14 s]** (boceto: seis tarjetas de ventanas 50 a 300 que se reducen a una; whoosh)
> Esa nota se llama Deflated Sharpe: descuenta la suerte. Si pruebas seis versiones de una regla y te quedas con la mejor, la mejor tiende a verse mejor de lo que realmente es.

**[14-23 s]** (boceto: línea de tiempo 2007–2013 con 2008 resaltado; cifra −0.03 en rojo; sello ✕; b-roll de mercado en caída, kb=out)
> Además, en 2007–2013, un periodo que la regla nunca vio y que incluye 2008, su Sharpe fue −0.03. Y dentro de muestra fue negativo con las seis ventanas.

**[23-34 s]** (boceto: siete tarjetas que se apagan; texto «7 ataques · 0 pasaron»; tick por tarjeta)
> Era el cierre de una saga de siete ataques al mismo problema: detectar a tiempo el cambio de régimen. Ninguno pasó el examen y ninguno le ganó a invertir a 1x.

**[34-40 s]** (boceto: tarjeta «Con tu capital»: −$6,680 contra +$2,616; aviso «exposición hasta x2»)
> Con $100,000, la curva perdió $6,680 entre 2007 y 2024; comprar y esperar la misma cesta ganó $2,616.

**[40-45 s]** (boceto: medidor vacío con la meta 0.95; logo; abajo, «Experimento #62 completo en el enlace»)
> Video completo en el canal. Experimento 62 completo en el enlace. Necesitaba 0.95. ¿Cuánto sacó?

Gancho alterno A: «Siete formas de detectar la crisis a tiempo. Ninguna pasó.» · B: «Sharpe de −0.03 en el periodo que nunca vio.»

## Descripción (YouTube) — video largo
https://atlas-lab-one.vercel.app/e/62?utm_source=youtube&utm_medium=video&utm_campaign=exp062-t1
Ficha del experimento #62: murió (No sirvió) · Sharpe −0.03 fuera de muestra (2007–2013) · Deflated Sharpe 0.20 frente a 0.95 exigido.
Triple test de B3 (exposición continua por tendencia) en 7 pares de divisas más oro: grilla de 6 ventanas en 2014–2024, prueba fuera de muestra 2007–2013 y Deflated Sharpe. Resultado: Sharpe −0.03 fuera de muestra y Deflated Sharpe de 0.20 (meta 0.95). Cierra la saga de cambio de régimen.

Contenido educativo. No es asesoría financiera ni recomendación de inversión.

Capítulos: 0:00 Gancho · 0:20 Presentación · 0:30 El candidato · 1:10 Por qué un triple test · 1:45 Las tres puertas · 2:25 Las reglas del juego · 2:55 Puerta 1: dentro de muestra · 3:35 Puerta 2: fuera de muestra · 4:00 Puerta 3: Deflated Sharpe · 4:30 ¿Al menos controla el riesgo? · 4:55 Con tu capital · 5:30 Qué significa y qué no · 6:10 Ficha del experimento #62 · 6:40 Cierre de la saga

Etiquetas: Deflated Sharpe, prueba fuera de muestra, cambio de régimen, media móvil, backtest, trading con datos, forex y oro, Sharpe ratio, ATLAS Lab, estrategias de trading, sobreajuste, validación de estrategias

## Descripción (YouTube) — Short
https://atlas-lab-one.vercel.app/e/62?utm_source=youtube&utm_medium=short&utm_campaign=exp062-t1
Experimento #62 · B3 continuo (prueba triple): murió · Sharpe −0.03 fuera de muestra · Deflated Sharpe 0.20 frente a 0.95. Video completo en el canal. No es asesoría financiera.

## Rúbrica (autoevaluación)
| Criterio | Short | Largo |
|---|---|---|
| hook_0_3s | 4 | 4 |
| ritmo | 4 | 4 |
| promesa_cumplida | 5 | 5 |
| potencial_loop | 5 | 4 |
| claridad_no_traders | 4 | 4 |
| honestidad_atlas | 5 | 5 |
| audio | 4 | 4 |
| cta | 4 | 4 |
| **Promedio** | **4.38** | **4.25** |

## Otros temas de este experimento
- Tema 1 de 3: `exp-062-b3-triple-test.md` — 7 ataques al cambio de régimen: ninguno pasó el examen
- Tema 2 de 3: `exp-062-t2-siete-reglas-una-vara.md` — Siete reglas para detectar la crisis a tiempo, una sola vara: el Sharpe de 0.37
- Tema 3 de 3: `exp-062-t3-protege-la-cuenta.md` — ¿Protege la cuenta? Caída máxima −8.9% contra −10.9%… y peor en otro periodo

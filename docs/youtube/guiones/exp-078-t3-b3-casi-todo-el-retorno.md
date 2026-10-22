# Experimento #78 — Tema 3: B3, casi todo el retorno con menos caída (+5.0% contra +5.2% y −25% contra −30%), y la letra pequeña

**Tema 3 de 3 del experimento #78** · Qué aporta frente a los otros temas: es el tema de la letra pequeña. Se centra en la cuarta opción del #78, el vol-target B3 (comprar y esperar × 2 × la fracción de activos en tendencia), que casi no cuesta retorno, y explica qué no incluye (costos y financiamiento) y qué pasó con B3 en otros experimentos (#61, #62 y #80). Se entiende sin los otros temas.
Estado del guion: **BORRADOR — pendiente de aprobación**
Estado del experimento: **parcial** (Turtle y Faber ganan en Calmar a comprar y esperar, pero retirando 4% al año comprar y esperar termina más alto)
Serie: E (gestión de riesgo: lo poco que se sostuvo). Cruza con #61, #62 y #80.
Datos usados: `experiments.json` (v=78: kpis, metrics, analysis, params_view, filters; v=80: B3 +11.2% contra +11.0% anual, drawdown −26% contra −31%, Calmar 0.43 contra 0.36, Sharpe 0.67 contra 0.76, retiro sostenible 10% contra 12%; v=61: B3 +22.5% contra +23.1%, drawdown de 2022 −6.5%; v=62: Deflated Sharpe 0.20, Sharpe fuera de muestra −0.03) · `exp_details.json` (extra-v78: algo, code —función `voltarget`—, filters).
Producción (CLAUDE.md del canal): b-roll real detrás de cada escena con overlay 0.6, Ken Burns alternando, subtítulos karaoke en MAYÚSCULAS, un dato visual por escena. Colores: rojo `#e11d2a`, verde `#22c55e`, fondo `#09090b`.

## Títulos
1. B3: +5.0% contra +5.2% al año y −25% contra −30% de caída (la letra pequeña)
2. La única opción que casi no cuesta retorno: vol-target B3, con costos supuestos
3. Exposición por tendencia: el B3 en cuatro experimentos de ATLAS

## Miniatura
Fondo `#09090b`. Dos barras casi iguales («+5.0%» verde `#22c55e` y «+5.2%» gris) y debajo dos barras de caída («−25%» y «−30%»); sobre todo, un sello ámbar «SIN COSTOS». Texto: «CASI GRATIS». Logo ATLAS esquina inferior derecha.

---

## VIDEO LARGO (≈ 6½ min)

**[0:00 — Gancho]** (pantalla: dos pares de barras casi iguales; el sello «sin costos» cae encima)
BOCETO: barras de retorno +5.0% y +5.2%, y de caída −25% y −30%; un sello ámbar «SIN COSTOS NI FINANCIAMIENTO» cae con sacudida.
> Una opción conserva casi todo el retorno de comprar y esperar, +5.0% al año contra +5.2%, y reduce la peor caída de −30% a −25%. Suena gratis. No lo es: esa opción no incluye costos ni el financiamiento del apalancamiento.

**[0:18 — Qué experimento es]** (pantalla: rótulo «Experimento #78 · ATLAS Lab» y el nombre debajo)
BOCETO: rótulo con el número 78 y el nombre «Calmar y retiros: ¿mejor que comprar y mantener para ingreso?»; logo en la esquina.
> Este es el experimento #78 de ATLAS Lab: Calmar y retiros, ¿mejor que comprar y mantener para ingreso? Todos los resultados están en la página del experimento.

**[0:45 — Qué es el B3]** (pantalla: once semáforos, uno por activo, y una palanca)
BOCETO: once semáforos (4 índices, oro, 4 pares de divisas, Brent y WTI); la fracción en verde multiplica una palanca de 0 a 2.
> El B3 es una regla de exposición continua: comprar y esperar los once activos, multiplicado por 2 y por la fracción de activos que están sobre su media de 200 días. Si todos están sobre su media, la exposición es 2x. Si ninguno, 0. Siempre acotado entre 0 y 2 veces, con la señal de ayer. No es un interruptor: sube y baja de forma gradual.

**[1:30 — Los resultados en el #78]** (pantalla: tabla con cuatro filas)
BOCETO: barras gemelas; B3 en verde cerca de comprar y esperar en gris.
| Medida (11 activos, 2012–2024) | Vol-target B3 | Comprar y esperar |
|---|---|---|
| Crecimiento anual | +5.0% | +5.2% |
| Drawdown máximo | −25% | −30% |
| Calmar | 0.20 | 0.17 |
| Saldo final retirando 4% de $50,000 | $53,486 | $56,401 |
> El B3 crece +5.0% al año contra +5.2%, y reduce la caída máxima de −30% a −25%. El Calmar, que es el retorno anual dividido entre la caída máxima, sube de 0.17 a 0.20. Pero con un retiro de 4% al año, termina con $53,486 contra $56,401: no supera a quedarse quieto ni siquiera para el retiro.

**[2:25 — La letra pequeña]** (pantalla: cuatro avisos en ámbar)
BOCETO: cuatro avisos: «sin costos de operar», «sin financiamiento del apalancamiento», «sin fuera de muestra», «sin Deflated Sharpe».
> Ahora lo importante. El B3 no modela costos de operación ni el financiamiento del apalancamiento. Cuando la exposición supera 1x, estás usando dinero prestado, y eso cuesta. Tampoco hay prueba fuera de muestra: todo el periodo es una sola muestra. Y no apliqué el Deflated Sharpe. Es una referencia para entender la idea, no una cifra operable.

**[3:10 — El B3 en otros experimentos]** (pantalla: cuatro tarjetas)
BOCETO: tarjetas con tick: «#61: iguala a 1x con menor caída», «#62: triple test, murió», «#78: casi gratis, sin costos», «#80: beta gestionada».
> No es la primera vez que aparece. En el experimento 61, el B3 en una cesta de 15 activos iguala a invertir a 1x, +22.5% contra +23.1%, y una caída de −6.5% en 2022. En el 62, sometido al triple test, murió: Sharpe de −0.03 fuera de muestra y Deflated Sharpe de 0.20, cuando se exige 0.95. Y en el 80, con índices y oro, rinde +11.2% contra +11.0% al año, con caída de −26% contra −31%.

**[4:10 — Beta gestionada, no alfa]** (pantalla: dos palabras: «beta» y «alfa»)
BOCETO: «beta = seguir al mercado», «alfa = ventaja propia»; el B3 queda bajo «beta gestionada».
> La conclusión del experimento 80 es honesta: es beta gestionada, no ventaja. Beta es lo que ganas por estar en el mercado; alfa es una ventaja propia. El B3 reduce la caída sin perder retorno, pero en ese mismo experimento no mejora el Sharpe, 0.67 contra 0.76, y sostiene un retiro de 10% al año contra 12% de comprar y esperar. Mejora una cosa y empeora otra.

**[4:55 — Con tu capital]** (pantalla: dos frascos de $50,000 que se vacían al ritmo del retiro)
BOCETO: frascos: B3 termina en $53,486 y comprar y esperar en $56,401; nota «sin costos ni financiamiento».
> Con $50,000 y un retiro de 4% al año, es decir, $2,000 cada año, de 2012 a 2024: comprar y esperar termina en $56,401 y B3 en $53,486. Con un costo del apalancamiento, B3 terminaría más abajo, y el experimento no lo mide.

**[5:25 — Preguntas de un escéptico]** (pantalla: tres tarjetas: «¿con costos?», «¿con financiamiento?», «¿otros activos?»)
BOCETO: tres tarjetas que se voltean con «no modelado» y «no probado».
> Preguntas que me haría un escéptico. ¿Y con costos? No se modelan, así que el resultado real sería menor. ¿Y con el costo del dinero prestado? Tampoco. ¿Y con otros activos? En el 80 con índices y oro da algo parecido, y en el 62, con divisas y oro, murió.

**[5:50 — Ficha del experimento #78]** (pantalla: tarjeta con la ficha y la URL abajo)
BOCETO: tarjeta con cinco líneas que entran con tick y, al final, la URL resaltada en verde.
> Ficha del experimento 78. Estado: parcial. Cifras clave: B3, +5.0% contra +5.2% al año y −25% contra −30% de caída; con retiro de 4%, $53,486 contra $56,401. Lo que decidió: sin costos ni financiamiento, y comprar y esperar termina más alto. Lección: casi gratis no es gratis. Revísalo completo en atlas-lab-one.vercel.app/e/78.

**[6:20 — Cierre]**
BOCETO: los dos pares de barras con el sello ámbar; logo.
> Todos los datos en atlas-lab-one.vercel.app, experimento 78. El trading no se promete: se prueba. Contenido educativo, no es asesoría financiera.

---

## SHORT (9:16, ≈ 49 s)

**[0-3 s]** (boceto: barras +5.0% y +5.2%; sello «sin costos»; b-roll de palanca, kb=in; golpe de bajo)
> Una opción conserva casi todo el retorno: +5.0% contra +5.2%. Con menos caída.

**[3-14 s]** (boceto: once semáforos y una palanca de 0 a 2)
> Es el B3: comprar y esperar, por dos, por la fracción de activos sobre su media de 200 días. Once activos, de 2012 a 2024.

**[14-25 s]** (boceto: barras de caída −25% contra −30%; Calmar 0.20 contra 0.17)
> Su peor caída es de −25%, contra −30%. Su Calmar, 0.20 contra 0.17.

**[25-37 s]** (boceto: sello ámbar «SIN COSTOS NI FINANCIAMIENTO»)
> Pero no incluye costos ni el costo del dinero prestado cuando la exposición pasa de 1x. Casi gratis no es gratis.

**[37-44 s]** (boceto: frascos de $50,000: $53,486 y $56,401)
> Retirando 4% al año de $50,000, termina con $53,486. Quedarse quieto: $56,401.

**[44-49 s]** (boceto: texto «Experimento #78 completo en el enlace»; logo)
> Video completo en el canal y experimento #78 completo en el enlace. ¿Casi gratis?

Gancho alterno A: «Menos caída casi sin perder retorno… en un backtest sin costos.» · B: «Beta gestionada, no ventaja: el B3 en cuatro experimentos.»

## Descripción de YouTube — video largo
https://atlas-lab-one.vercel.app/e/78?utm_source=youtube&utm_medium=video&utm_campaign=exp078-t3
Ficha: experimento #78, Calmar y retiros. Estado: parcial. B3: +5.0% contra +5.2% al año y −25% contra −30% de caída; Calmar 0.20 contra 0.17. Retirando 4% de $50,000: $53,486 contra $56,401.
El vol-target B3 sin costos ni financiamiento, y qué pasó con él en los experimentos 61, 62 y 80: beta gestionada, no ventaja.
Contenido educativo. No es asesoría financiera ni recomendación de inversión.

## Descripción de YouTube — Short
https://atlas-lab-one.vercel.app/e/78?utm_source=youtube&utm_medium=short&utm_campaign=exp078-t3
Ficha: experimento #78, parcial. B3: +5.0% contra +5.2% al año y −25% contra −30% de caída, sin costos ni financiamiento. Contenido educativo, no es asesoría financiera.

## Capítulos
0:00 Gancho · 0:18 Qué experimento es · 0:45 Qué es el B3 · 1:30 Los resultados en el #78 · 2:25 La letra pequeña · 3:10 El B3 en otros experimentos · 4:10 Beta gestionada, no alfa · 4:55 Con tu capital · 5:25 Preguntas de un escéptico · 5:50 Ficha del experimento #78 · 6:20 Cierre

## Etiquetas
vol-target, exposición por tendencia, B3, beta gestionada, apalancamiento, Calmar ratio, retiro del 4%, drawdown, costos de trading, backtest, trading con datos, ATLAS Lab

## Rúbrica (autoevaluación, 1–5)
| Pieza | hook_0_3s | ritmo | promesa_cumplida | potencial_loop | claridad_no_traders | honestidad_atlas | audio | cta | Promedio |
|---|---|---|---|---|---|---|---|---|---|
| Largo | 4 | 4 | 5 | 4 | 4 | 5 | 4 | 4 | 4.25 |
| Short | 5 | 4 | 5 | 4 | 4 | 5 | 4 | 4 | 4.38 |

Hook ≥ 4 ✓ · honestidad 5 ✓. Punto débil: el hook «casi gratis» invita a creer en el B3; el guion lo desmonta de inmediato con el sello «sin costos ni financiamiento» y con lo que pasó en los experimentos 62 y 80.

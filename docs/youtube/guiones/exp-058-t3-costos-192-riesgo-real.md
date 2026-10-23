# Experimento #58 — Escenarios: capital del bot (1x / 2x / volatilidad objetivo) · Tema 3 de 3: $192 de costos y el riesgo real

Estado del guion: **BORRADOR — pendiente de aprobación**
Tema 3 de 3 del experimento #58 · Qué aporta frente a los otros temas: es el tema del COSTO y de la letra pequeña. Muestra que operar el bot cuesta poco ($192 en 6 meses) y que el riesgo real está en la dirección del mercado, en los swaps y en las reglas de una cuenta de fondeo. El tema 1 cuenta el contraste COVID contra mercado bajista; el tema 2 trata de la reproducibilidad de los precios.
Estado del experimento: **parcial** (neutral): simulación hipotética; a 2x el mismo bot gana +13.1% en 2020 y +6.7% en 6 meses, pero pierde −17.0% en 2022 · Serie: G ("Construyendo un bot, y por qué murió") · Relacionado: #57, #13, #50
Datos usados: `experiments.json` (v=58: verdict, analysis, notes, metrics, kpis, params_view, capital.note; v=13: params_view, verdict para las reglas de la cuenta de fondeo), `exp_details.json` (extra-v58: algo, filters), `series/extra-v58.json` y la tabla «Con tu capital» (`docs/youtube/*-capital.md`, fila #58, solo la curva del COVID).

## Títulos (3 opciones)
1. $192 de costos en 6 meses: el riesgo de un bot a 2x no está en las comisiones
2. Costos mínimos, −17.0% en un año bajista: dónde está el riesgo real de mi bot
3. Cuenta de fondeo y apalancamiento 2x: por qué un año positivo (+13.1%) no basta

## Miniatura (1280×720)
Fondo `#09090b`. A la izquierda, una moneda diminuta en gris con el texto «$192». A la derecha, una ola enorme en rojo `#e11d2a` con «−17.0%». Texto grande blanco en el centro: «¿DÓNDE ESTÁ EL RIESGO?». Logo ATLAS esquina superior derecha.

---

## VIDEO LARGO (16:9, ≈ 5½ min)

**[0:00 — Gancho]** (pantalla: «$192» pequeño y «−17.0%» enorme)
Ciento noventa y dos dólares. Eso pagó el bot de costos en seis meses. Y en 2022, con el mismo bot a 2x, la simulación perdió −17.0%. Si los costos son tan pequeños, ¿dónde está el riesgo?
> BOCETO: moneda de «$192» que se encoge junto a una ola roja «−17.0%» que crece; golpe de bajo y sacudida al aparecer la ola.

**[0:20 — Este experimento]** (pantalla: rótulo «Experimento #58 · Escenarios: capital del bot (1x / 2x / volatilidad objetivo)»)
Este es el experimento #58 de ATLAS Lab: escenarios del capital del bot. Todos los resultados están en la página del experimento. Hoy no hablo de si gana o pierde, sino de qué cuesta operarlo y de dónde viene el riesgo de verdad.
> BOCETO: rótulo con «#58» y el nombre del experimento; logo ATLAS; whoosh suave.

**[0:40 — Qué cuesta operar el bot]** (pantalla: caja de costos con tres líneas)
La simulación cobra 3 puntos básicos por cada unidad de rotación. Un punto básico es la centésima parte de un 1%. Rotación es cuánto cambia la cartera: si no cambias nada, no pagas. Con eso, los costos de 6 meses suman unos $192. Es un número pequeño, y eso es lo que importa: operar este bot no es caro.
> BOCETO: caja «costo: 3 bps por unidad de rotación» y un contador que sube hasta «$192 en 6 meses»; recuadro `params_view` con las 4 filas de la ficha.

**[1:20 — Entonces, ¿dónde está el riesgo?]** (pantalla: dos curvas, COVID y 2022)
En la dirección del mercado. En 2020, con el COVID, el bot a 2x ganó +13.1%. En 2022, con un mercado bajista, perdió −17.0%. Mismo bot, mismas reglas. Eso es beta apalancada: lo que ganas o pierdes solo por estar dentro del mercado, multiplicado por 2. Los costos casi no pesan; pesa si el mercado sube o baja.
> BOCETO: curvas 0 y 1 de `series/extra-v58.json` (COVID sube a 11,315; 2022 cae a 8,303, normalizadas a 10,000); contadores +13.1% verde y −17.0% rojo.

**[2:10 — Los swaps: el costo que no está en la cuenta]** (pantalla: reloj de 24 horas con un cobro nocturno)
El swap es el costo o el ingreso por mantener una posición abierta de un día para otro. La ficha lo nombra, junto con la dirección del mercado, como parte del riesgo real. Este experimento no mide cuánto serían los swaps; solo avisa de que existen. Por eso conviene leer los $192 como el costo de operar, no como el costo total de tener el bot.
> BOCETO: reloj con una moneda que cae a medianoche; sello ámbar «SWAPS: NO MEDIDOS AQUÍ».

**[2:45 — Un año positivo no cuenta el camino]** (pantalla: curva que baja y luego sube, con una línea de límite)
Una cuenta de fondeo tiene reglas. En el experimento 13, el límite de drawdown es del 10% sobre el balance inicial y la pérdida diaria máxima, del 5%. Allí el bot a x2 reventó el 12 de marzo de 2020, con un retorno de −10.3% y una caída de −15.3% desde su máximo previo. Esta simulación del 58 no aplica esas reglas, así que +13.1% en 2020 no dice si el camino habría tocado un límite. No es la misma configuración que el 13; lo que enseña es que un número al final del año no cuenta el camino.
> BOCETO: curva ilustrativa en forma de «V» con una línea roja horizontal «límite 10%» y un candado; dos etiquetas: «#13: cortada el 12-mar-2020» y «#58: sin reglas de fondeo». Rotulada como ilustración.

**[3:30 — Lo que dice la ficha de un año bajista]** (pantalla: aviso ámbar)
La ficha lo resume así: en un año bajista perderías, y a 2x el drawdown reventaría una cuenta de fondeo. No es una predicción ni una promesa; es lo que muestra 2022 en retrospectiva, con −17.0%.
> BOCETO: aviso ámbar con la frase de la ficha; la curva de 2022 en rojo por detrás.

**[3:55 — Con tu capital]** (pantalla: tarjeta «Con tu capital»)
Con $10,000, el escenario del COVID da +$1,315 y el de 2022, −$1,697. Con $100,000, +$13,149 y −$16,967. La misma cuenta, con las mismas reglas, en dos años distintos. Son escenarios en retrospectiva, no una predicción.
> BOCETO: tarjeta de capital con dos filas, 2020 en verde y 2022 en rojo, y dos columnas ($10,000 y $100,000). Aviso: «Simulación hipotética, no es una promesa».

**[4:25 — Conclusión]** (pantalla: moneda y ola del inicio)
El costo de operar es pequeño: $192. El riesgo es grande y está en otro sitio: en la dirección del mercado, en los swaps y en las reglas de la cuenta.
> BOCETO: la moneda pequeña y la ola del inicio; el «$192» queda al lado del «−17.0%».

**[4:45 — Ficha del experimento #58 y cierre]** (pantalla: tarjeta con la ficha y la URL)
Ficha del experimento #58. Estado: parcial. Cifra clave: a 2x, +13.1% en 2020 y −17.0% en 2022, con unos $192 de costos en 6 meses. Filtro que decidió: no tiene criterio de aprobado; es una simulación hipotética. Lección: el riesgo real es la dirección del mercado, no el costo de operar. Revísalo completo en atlas-lab-one.vercel.app/e/58. Contenido educativo, no es asesoría financiera. El trading no se promete: se prueba.
> BOCETO: tarjeta en pantalla con las 4 líneas de la ficha (estado ámbar «parcial») y la URL `atlas-lab-one.vercel.app/e/58` en grande; fundido a la frase de marca.

---

## SHORT (9:16, ≈ 43 s) — "El costo no es el riesgo"
Título del Short: $192 de costos en 6 meses… y −17.0% en 2022 #Shorts

**[0-3 s]** "Mi bot pagó 192 dólares de costos en seis meses. El riesgo está en otro lado."
> BOCETO: B-roll vertical de pantallas de mercado con overlay 0.6; «$192» pequeño y «−17.0%» enorme; golpe de bajo y sacudida. Karaoke con «OTRO LADO» en rojo.

**[3-14 s]** "Simulé mi bot con apalancamiento doble. Cobra tres puntos básicos por cada cambio de cartera, y en seis meses suma unos 192 dólares."
> BOCETO: caja de costos con contador hasta «$192»; whoosh. Ken Burns hacia dentro.

**[14-27 s]** "El riesgo es la dirección del mercado. En 2020, más 13.1%. En 2022, menos 17.0%. El mismo bot: es beta apalancada."
> BOCETO: curvas 0 y 1 de la serie dibujándose una tras otra; contadores verde y rojo; flash blanco al cambio.

**[27-37 s]** "Y en una cuenta de fondeo, el límite de pérdida es del 10%. En un año bajista, a doble apalancamiento, ese límite se rompería."
> BOCETO: línea roja «límite 10%» sobre la curva de 2022; candado; tick.

**[37-43 s]** "Costo pequeño, riesgo grande. Video completo en el canal y experimento 58 completo en el enlace. No es asesoría financiera."
> BOCETO: vuelven «$192» y «−17.0%» del primer cuadro (loop); rótulo «Experimento #58 completo en el enlace»; texto pequeño «El trading no se promete: se prueba».

---

## Descripción (YouTube)
https://atlas-lab-one.vercel.app/e/58?utm_source=youtube&utm_medium=video&utm_campaign=exp058-t3
Ficha del experimento #58: parcial (neutral) · a 2x: +13.1% en 2020 y −17.0% en 2022 · costos de unos $192 en 6 meses.
Simulación hipotética del bot en vivo (paridad de riesgo, filtro macro VIX/crédito, apalancamiento 2x, 3 bps por unidad de rotación). Los costos de operar son mínimos; el riesgo real es la dirección del mercado, los swaps y las reglas de la cuenta de fondeo.
Contenido educativo. No es asesoría financiera ni recomendación de inversión.
Descripción del Short (primera línea): https://atlas-lab-one.vercel.app/e/58?utm_source=youtube&utm_medium=short&utm_campaign=exp058-t3

Capítulos: 0:00 Gancho · 0:20 Este experimento · 0:40 Qué cuesta operar el bot · 1:20 Entonces, ¿dónde está el riesgo? · 2:10 Los swaps · 2:45 Un año positivo no cuenta el camino · 3:30 Lo que dice la ficha de un año bajista · 3:55 Con tu capital · 4:25 Conclusión · 4:45 Ficha del experimento #58 y cierre

Etiquetas: costos de trading, swaps, apalancamiento 2x, beta apalancada, cuenta de fondeo, prop firm, bot de trading, mercado bajista 2022, COVID 2020, backtest, trading con datos, ATLAS Lab

## Rúbrica (autoevaluación, 1–5)
| Pieza | hook_0_3s | ritmo | promesa_cumplida | potencial_loop | claridad_no_traders | honestidad_atlas | audio | cta | Promedio |
|---|---|---|---|---|---|---|---|---|---|
| Largo | 5 | 4 | 5 | 4 | 4 | 5 | 4 | 4 | 4.38 |
| Short | 5 | 4 | 5 | 5 | 4 | 5 | 4 | 4 | 4.50 |

Hook ≥ 4 ✓ · honestidad 5 ✓. Punto débil: el bloque de la cuenta de fondeo cruza dos experimentos (#13 y #58) con configuraciones distintas; el video lo dice de forma explícita y no afirma que el escenario de 2020 se habría cortado.

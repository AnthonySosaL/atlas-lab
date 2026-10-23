# Experimento #45 — COT contrario en extremos · Tema 2: la cuenta que aguantó 2,560 días

Estado del guion: **BORRADOR — pendiente de aprobación**
Tema 2 de 3 del experimento #45. Qué aporta frente a los otros temas: es el DETALLE SORPRENDENTE y la COMPARACIÓN. El tema 1 cuenta la idea, la regla y el resultado; el tema 3 explica la trampa de los pares invertidos; este tema se centra en una cifra propia, la cuenta aguantó 2,560 días (hasta el 28-abr-2022), la compara con las de #35, #42 y #43 y enseña que vivir mucho no es lo mismo que tener ventaja.
Estado del experimento: **MURIÓ** (Sharpe −0.28 en 2014–2024, con la cuenta cortada el 28-abr-2022, y −1.37 en 2007–2013)
Serie: **G (epílogo)** — usa los datos de #44; cierra los «caminos futuros» del veredicto de #40.
Datos usados: `experiments.json` (v=45: analysis, notes, metrics, kpis, params_view, capital; v=35, v=42 y v=43: period, kpis) · `exp_details.json` (v45: algo, filters) · `series/20260610_142118_cot-contrarian-extremos-v45.json` (curva 1 = estrategia hasta la quiebra del 28-abr-2022; curva 2 = «sin reglas de prop firm»; curva 3 = comprar y esperar) · fila #45 de la tabla «Con tu capital» (`docs/youtube/`).

## Títulos (opciones)
1. Mi cuenta aguantó 2,560 días y aun así murió (COT contrario)
2. Vivir 8 años no es tener ventaja: la cuenta que murió despacio
3. 256, 659, 917 y 2,560 días: cuánto vive una cuenta sin ventaja
(Para el Short: «Mi cuenta aguantó 2,560 días… y murió igual #shorts».)

## Miniatura
Fondo #09090b. Un calendario enorme con las hojas cayendo muy despacio y una vela casi consumida con una ✕ roja (#e11d2a). Texto grande: «LENTA, PERO MUERTA». Logo ATLAS en la esquina superior derecha. (No repite los números ni las palabras de los títulos.)

---

## VIDEO LARGO (16:9, ≈ 4:22)

**[0:00 — Gancho]** (pantalla — BOCETO: contador de días que sube hasta 2,560 sobre la curva real de series/…v45.json; al llegar, sello ✕ «28-abr-2022»)
2,560 días de operación. Más de ocho años de calendario. Es lo que aguantó la cuenta de mi estrategia del COT contrario, mucho más que cualquier otra de esta serie. Y murió igual, el 28 de abril de 2022.

**[0:16 — Este es el experimento #45]** (pantalla — BOCETO: rótulo «EXPERIMENTO #45 · COT CONTRARIO EN EXTREMOS» con el logo ATLAS; la URL pequeña debajo)
Este es el experimento #45 de ATLAS Lab: COT contrario en extremos. Todos los resultados están en la página del experimento. La estrategia, en una frase: vender cuando los especuladores están muy comprados y comprar cuando están muy vendidos, según el informe semanal COT, en siete pares de divisas con apalancamiento ×2.

**[0:37 — Cuánto vive cada cuenta]** (pantalla — BOCETO: barras horizontales de longitud proporcional a los días: #42 carry puro 256 · #35 curva de tasas 659 · #43 carry + tendencia 917 · #45 COT contrario 2,560; cada una con su Sharpe)
| Cuenta | Días hasta el corte | Sharpe 2014–2024 (hasta la quiebra) |
|---|---|---|
| Carry puro (#42) | 256 | −1.79 |
| Curva de tasas (#35) | 659 | −0.57 |
| Carry + tendencia (#43) | 917 | −0.63 |
| COT contrario (#45) | 2,560 | −0.28 |
En esta serie de cuentas con apalancamiento ×2 y las reglas de la prop firm, las vidas van de 256 a 2,560 días. El Sharpe es la ganancia por unidad de riesgo. Fíjate en que la cuenta que más vive es también la de Sharpe menos negativo.

**[1:03 — Una muerte lenta]** (pantalla — BOCETO: curva real de series/…v45.json: sube hasta $101,648 y baja despacio hasta $89,781; el límite de caída de 10% en rojo; texto «−10.2%»)
Con $100,000 simulados, la curva de esta cuenta nunca se alejó mucho del punto de partida: su punto más alto fue de $101,648. Después fue perdiendo, hasta cerrarse con −$10,219 el 28 de abril de 2022. Es una muerte lenta: un Sharpe pequeño y negativo pierde despacio, pero pierde. El reto de fondeo pide subir 10% sin caer 10% desde el máximo; esta cuenta ni se acercó al +10%.

**[1:30 — Vivir no es ganar]** (pantalla — BOCETO: dos tarjetas: «cuánto vive» con una barra larga y «cuánto gana» con una barra vacía; el Sharpe −0.28 en rojo)
Aquí está la lección. Que una cuenta dure mucho no mide si hay ventaja. Mide, a lo sumo, que la pérdida diaria es pequeña. Con más tiempo, un Sharpe negativo se paga igual: el tiempo no lo arregla. Y quien mirara la curva a mitad de camino vería una línea casi plana, y podría pensar que va bien.

**[1:53 — Sin las reglas y contra comprar y esperar]** (pantalla — BOCETO: tres líneas de series/…v45.json: la cuenta cortada en rojo, la «sin reglas» discontinua terminando en −4.4% y la cesta en gris terminando en −3.7%; etiqueta «hipotética»)
Sin las reglas de la prop firm, la misma estrategia habría seguido hasta 2024 y terminado en menos 4.4%, con una caída máxima de menos 13.5%. Comprar y esperar la misma cesta terminó en menos 3.7%. Fíjate: dos resultados parecidos, ambos negativos. En el corte de abril de 2022, comprar y esperar iba en −$5,266 contra los −$10,219 de la cuenta. Esa línea sin reglas es hipotética, porque en la realidad la cuenta se cierra ese día.

**[2:23 — El otro periodo]** (pantalla — BOCETO: dos barras de Sharpe, −0.28 (2014–2024) y −1.37 (2007–2013), la segunda más larga, con el rótulo «fuera de muestra, incluye 2008»)
En 2007–2013, años que el bot no vio al diseñarse, que incluyen 2008, el Sharpe es menos 1.37 y la cuenta muere. Es el periodo donde se ve con más claridad que la estrategia no tenía ventaja que sostener: lo que en 2014–2024 fue un Sharpe pequeño y negativo, aquí es mucho más negativo.

**[2:45 — Los asteriscos de los datos]** (pantalla — BOCETO: checklist de exp_details.filters: señal rezagada 3 días ✓ · 2014–2024 y 2007–2013 ✓ · 6 pares efectivos antes de 2023 ⚠ · series con contratos cruzados ⚠ · costos: solo deslizamiento 0.2%)
Las cuentas largas piden decir también los asteriscos. Son siete pares en el código, pero el dólar neozelandés no tiene señal hasta el 3 de febrero de 2023, así que antes de esa fecha operan seis. Sin ese par, el Sharpe es menos 0.25 y menos 1.30. Las series de euro, libra y yen mezclan contratos cruzados, como conté en el experimento 44. Y de costos, solo hay deslizamiento de 0.2% en los cortes.

**[3:14 — El marcador de filtros]** (pantalla — BOCETO: checklist de exp_details.filters: Sharpe 2014–2024 ✗ · Sharpe 2007–2013 ✗ · sobrevivir en ambos periodos ✗ · señal rezagada ✓ · datos «6 pares efectivos» — · costos completos — · Deflated Sharpe —)
El tablero de filtros: el Sharpe de 2014–2024, menos 0.28, y el de 2007–2013, menos 1.37, son negativos, y la cuenta no sobrevive en los dos periodos. Pasa uno: la señal va rezagada tres días y no mira el futuro. Los costos completos y el Deflated Sharpe, la prueba que descuenta la suerte de haber probado muchas ideas, no se aplicaron.

**[3:38 — Con tu capital]** (pantalla — BOCETO: tarjeta «Con tu capital»: $100,000 → −$10,219 contra −$5,266, «2014–2022, hasta el corte»; la línea «sin reglas» discontinua con la etiqueta «hipotética»)
Con $100,000 simulados, la cuenta se cierra con −$10,219 el 28 de abril de 2022. Comprar y esperar la misma cesta, en las mismas fechas: −$5,266. Es una simulación histórica, no una promesa; con $10,000 serían la décima parte.

**[3:54 — Ficha del experimento #45]** (pantalla — BOCETO: tarjeta de ficha con sello «NO SIRVIÓ», cuatro líneas y la URL atlas-lab-one.vercel.app/e/45; logo ATLAS)
Ficha del experimento #45. Estado: no sirvió. Cifra clave: Sharpe de menos 0.28 en 2014–2024, con la cuenta cortada el 28 de abril de 2022 tras 2,560 días, y menos 1.37 en 2007–2013. Filtro que decidió: sobrevivir en los dos periodos, que dio falso. Lección: que una cuenta dure mucho no demuestra ventaja. Revísalo completo en atlas-lab-one.vercel.app/e/45. Contenido educativo, no es asesoría financiera. El trading no se promete: se prueba.

---

## SHORT (9:16, ≈ 44 s)
Título del Short: Mi cuenta aguantó 2,560 días… y murió igual #shorts
Fórmula visual (CLAUDE.md del canal): b-roll vertical real con overlay 0.6, Ken Burns alternado, subtítulos karaoke en MAYÚSCULAS con cifras en rojo, ticker arriba, whoosh + flash en cada corte; golpe (bass + sacudida) solo en 0-3 s y 14-28 s.

**[0-3 s]** "Mi cuenta aguantó 2,560 días. Más de ocho años. Y murió igual."
- Boceto: b-roll de hojas de calendario cayendo despacio (kb=in); «2,560» gigante en blanco y ✕ roja; golpe de bass.

**[3-14 s]** "Es la estrategia del COT contrario: vender cuando los especuladores están muy comprados y comprar cuando están muy vendidos, en siete pares de divisas."
- Boceto: barra de posición neta que sube a la zona roja y dispara «VENDER»; siete fichas de pares.

**[14-28 s]** "Las otras cuentas de la serie duraron 256, 659 y 917 días. Esta, 2,560, hasta el 28 de abril de 2022. Su Sharpe: menos 0.28. Su punto más alto: 101,648 dólares sobre 100,000."
- Boceto: cuatro barras de días con sus Sharpe; sacudida en la de 2,560.

**[28-40 s]** "Aguantar no es ganar: un Sharpe pequeño y negativo pierde despacio. Terminó en menos 10,219 dólares; comprar y esperar, en menos 5,266."
- Boceto: curva real de series/…v45.json hasta el sello ✕; dos cifras enfrentadas.

**[40-48 s]** "Video completo en el canal. Experimento 45 completo en el enlace. No es asesoría financiera. Ocho años de vida, ¿y de ventaja? Ninguna."
- Boceto: sello «NO SIRVIÓ»; logo ATLAS y «EXPERIMENTO #45 · ENLACE». Loop: la respuesta enlaza con «murió igual».

## Descripción (YouTube)
**Video largo**
https://atlas-lab-one.vercel.app/e/45?utm_source=youtube&utm_medium=video&utm_campaign=exp045-t2
Ficha del experimento #45 (COT contrario en extremos): no sirvió. Sharpe −0.28 en 2014–2024 con la cuenta cortada el 28-abr-2022 tras 2,560 días (−$10,219 sobre $100,000) y −1.37 en 2007–2013.
Comparo la vida de esta cuenta con las de los experimentos 42, 35 y 43 (256, 659 y 917 días) y explico por qué vivir mucho no demuestra ventaja.

Capítulos: 0:00 Gancho · 0:16 Este es el experimento #45 · 0:37 Cuánto vive cada cuenta · 1:03 Una muerte lenta · 1:30 Vivir no es ganar · 1:53 Sin las reglas y contra comprar y esperar · 2:23 El otro periodo · 2:45 Los asteriscos de los datos · 3:14 El marcador de filtros · 3:38 Con tu capital · 3:54 Ficha del experimento #45

**Short**
https://atlas-lab-one.vercel.app/e/45?utm_source=youtube&utm_medium=short&utm_campaign=exp045-t2
Experimento #45: la cuenta del COT contrario aguantó 2,560 días y murió el 28-abr-2022 (Sharpe −0.28). No sirvió.

Contenido educativo. No es asesoría financiera ni recomendación de inversión.

Etiquetas: COT, CFTC, estrategia contraria, posicionamiento, forex, prop firm, Sharpe ratio, backtest, supervivencia, bot de trading, ATLAS Lab

## Rúbrica (autoevaluación — criterios del CLAUDE.md del canal, 1-5)
| hook_0_3s | ritmo | promesa_cumplida | potencial_loop | claridad_no_traders | honestidad_atlas | audio | cta |
|---|---|---|---|---|---|---|---|
| 5 | 4 | 5 | 4 | 4 | 5 | 4 | 4 |

Promedio: **4.38** → cumple el corte (≥ 4.0; hook ≥ 4 y honestidad 5).
Notas: el hook es una cifra extrema (2,560 días) con una paradoja (aguantó y murió). Los Sharpe de la tabla se miden «hasta la quiebra» de cada cuenta; se presentan por fila y se dice que no son una comparación controlada. Punto débil: el punto más alto y la caída sin reglas salen de la curva de series/ y se rotulan como tales.

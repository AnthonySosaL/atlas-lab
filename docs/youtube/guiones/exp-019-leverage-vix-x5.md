# Experimento #19 — Apalancamiento escalonado por VIX (×5 en calma)

Estado del guion: **BORRADOR — pendiente de aprobación**
Estado del experimento: **murió** (veredicto del sitio: «No sirvió») · Serie G — Construyendo un bot (y por qué murió)
Datos usados: `experiments.json` (v=19: kpis, metrics, params, verdict, analysis, notes, capital), `exp_details.json` (clave `…-v19`: algo, filters), `series/20260609_210756_leverage-graduado-por-vix-v19.json` (curva de la estrategia y curva «Sin estrategia»), tabla «Con tu capital» (archivo de capital en `docs/youtube/`). Relacionados: #16 (la base, Sharpe 1.23) y #27 (la señal de ayer).

## Títulos
1. Apalancamiento ×5 cuando el mercado está en calma: +591.5% (¿real?)
2. Sharpe 1.39: el bot que sube la apuesta cuando el VIX está bajo
3. Subir la apuesta en calma da +591.5%… y una caída de −17.2%

## Miniatura
Fondo `#09090b`. Un «×5» gigante en verde `#22c55e` y Segoe UI Black a la izquierda; a la derecha, la curva real subiendo muy empinada con un cartel rojo `#e11d2a` «VIX < 16» (dos palabras, sin repetir los títulos). Logo ATLAS abajo a la derecha.

---

## VIDEO LARGO (16:9, ≈ 5:59 min)
Ritmo visual: algo cambia en pantalla cada 2-3 s; los pasos de cada boceto van en orden. Fórmula del canal: b-roll real detrás, Ken Burns alterno, subtítulos karaoke, whoosh + flash en cada corte.

**[0:00 — Gancho]** (pantalla: la curva real dibujándose, empinada)
¿Y si en lugar de asustarte cuando hay miedo, subes la apuesta cuando hay calma? Probé eso: apalancamiento ×5, o sea posiciones cinco veces más grandes que el capital, cuando el VIX, el índice del miedo, está por debajo de 16; ×3 el resto del tiempo y fuera del mercado cuando hay riesgo. Resultado en diez años: más 591.5% y un Sharpe de 1.39, que mide el retorno por cada unidad de riesgo. Con 100,000 dólares, más $591,504. Y aun así, no sirvió. Te explico por qué.
> Boceto: la curva de la estrategia dibujándose con el contador «+591.5%»; el selector de apalancamiento «×3 → ×5» parpadeando; al final, sello rojo «¿SIRVIÓ?».

**[0:36 — Dónde encaja en la serie]** (pantalla: mapa de la serie, #15 al #30)
Este es el segundo de tres experimentos que modifican el bot base del experimento 16: después del refugio del #18 y antes de los cortos del #20. Todos usan las mismas reglas para poder compararse con la base, que dio un Sharpe de 1.23.
> Boceto: tres ramas que salen del #16 hacia #18, #19 y #20; la del #19 se ilumina; texto «mismas reglas, una sola palanca».

**[0:55 — El bot y el filtro, en 30 segundos]** (pantalla: cesta de 15 activos y semáforo)
Recordatorio del bot: una cesta de 15 activos —divisas, metales, índices y energía— con apalancamiento, que significa operar posiciones más grandes que tu capital, bajo las reglas de una prop firm: la cuenta se cierra si pierde 10% del capital inicial o más de 5% en un día. Un filtro macro lo saca del mercado cuando el VIX, el índice del miedo de Wall Street, está alto, salta, o el crédito se debilita.
> Boceto: cesta con iconos, barra de apalancamiento y semáforo del filtro; dos muros rojos «−10%» y «−5% / día».

**[1:26 — Qué es el VIX y qué significa 16]** (pantalla: termómetro del VIX)
Una aclaración sobre el VIX. Es un índice que mide la volatilidad que el mercado espera para el S&P 500, y sube cuando hay miedo. Por debajo de 16 se considera calma estricta en este experimento; el umbral de pánico del filtro es 28. Entre los dos hay una zona intermedia, donde el bot opera a ×3.
> Boceto: termómetro vertical con tres zonas: verde bajo 16 («×5»), amarilla entre 16 y 28 («×3») y roja sobre 28 («fuera»).

**[1:50 — La idea: más apuesta en calma]** (pantalla: escalera de apalancamiento)
La idea es graduar el apalancamiento según el VIX. Si el VIX está por debajo de 16, mercado muy tranquilo, el bot opera con ×5. Si no, con ×3. Y si el filtro detecta riesgo, queda fuera. Los umbrales se fijaron de antemano; no probé una grilla de valores para quedarme con el mejor.
> Boceto: escalera de tres peldaños («fuera», «×3», «×5») que sube según un termómetro de VIX; marca en 16.

**[2:14 — Cómo se probó]** (pantalla: checklist de filtros)
Periodo: 2014 a 2024, con las reglas de la prop firm y paridad de riesgo con pesos de ayer. Para llamarlo exitoso, tenía que sobrevivir y superar el Sharpe de 1.23 de la base. Lo supera. Pero hay dos avisos: como en el experimento 16, no se descuentan costos, y el VIX que decide el apalancamiento es el del cierre del mismo día.
> Boceto: checklist de `exp_details.json`: «Sharpe 1.39 > 1.23: pasa», «Años positivos: pasa», «Caída máxima ≤ 10%: FALLA», «Señal rezagada 1 día: FALLA», «Costos: no aplicado».

**[2:40 — Resultados]** (pantalla: tarjetas de KPI)
Retorno total, más 591.5%. Sharpe de 1.39 frente a 1.23 de la base. Años positivos: 9 de 10, o sea 90%. Mejor año, 2016, con más 41.4%. Peor año completo, 2015, con menos 2.1%. Y una caída máxima de menos 17.2%.
> Boceto: tarjetas con tick (+591.5% · 1.39 · 9/10 · +41.4% · −2.1% · −17.2%); la curva de la estrategia con marcas en 2016 (verde) y 2015 (rojo).

**[2:58 — Base contra ×5]** (pantalla: tabla de dos columnas)
Compararlo con la base ayuda. La base, el experimento 16, dio un Sharpe de 1.23, más 267.3% y una caída máxima de menos 12.5%. Con ×5 en calma: Sharpe de 1.39, más 591.5% y caída máxima de menos 17.2%. Más retorno y más caída: es lo que hace cualquier palanca. Lo que cambia entre una y otra es cuánto estás dispuesto a sufrir en el camino.
> Boceto: tabla animada de dos columnas, «base ×3» y «×5 en calma», con filas Sharpe · retorno · caída máxima; las cifras de la columna ×5 entran más grandes y la caída se resalta en rojo.

**[3:26 — El precio del ×5]** (pantalla: dos reglas de drawdown)
Esa caída de 17.2% desde el máximo es más grande que el 10% de pérdida máxima que fija una prop firm. ¿Cómo sobrevive entonces? Porque el límite se mide contra el capital inicial, lo que se llama drawdown estático, y la cuenta ya iba muy por encima. En una firma con drawdown dinámico, que mide desde el último máximo, no pasaría. Subir el apalancamiento en calma también amplifica las caídas.
> Boceto: dos diagramas lado a lado: «estático: 10% del capital inicial» (línea horizontal fija) y «dinámico: 10% desde el máximo» (línea que sube con la curva); la caída de −17.2% cruza solo la segunda.

**[3:56 — El detalle que lo invalida]** (pantalla: reloj y cierre de hoy)
Y el problema de fondo: el apalancamiento se decide con el VIX del cierre de hoy, y ese mismo día se cobra el retorno. Un bot real no conoce el cierre antes de operar ese día. Una regla que decide con el VIX del mismo día no se puede ejecutar en real; con la señal de ayer, la base muere, como verás en el experimento 27.
> Boceto: línea de tiempo con el cierre de hoy y la flecha roja «cobra HOY» tachada; sello «no ejecutable».

**[4:23 — Qué haría falta para creerle]** (pantalla: tres candados)
Para creerle a un ×5 haría falta decidir con el VIX de ayer, descontar costos y probarlo con datos que el bot no haya visto. De las tres, la primera es la que decide: con la señal de ayer, la base muere, así que subir el apalancamiento sobre esa base solo amplifica el problema.
> Boceto: tres candados; el primero («VIX de ayer») parpadea en rojo y arrastra a los otros dos; texto «la base manda».

**[4:47 — Con tu capital]** (pantalla: tarjeta de capital $10,000 / $100,000)
Con 10,000 dólares, la curva termina en más $59,150; con 100,000, en más $591,504. Sin estrategia, comprando y esperando, serían más $5,904 y más $59,039. Es una diferencia enorme, pero no se puede cobrar: depende de información del mismo día y de apalancamiento de ×3 a ×5.
> Boceto: tarjeta «Con tu capital» del sitio con el selector $10,000 / $100,000; curva verde empinada frente a la gris «Sin estrategia»; aviso ámbar «información del mismo día».

**[5:07 — Lo que sí aporta este experimento]** (pantalla: palanca)
La lección aprovechable: subir el apalancamiento en calma amplifica tanto las ganancias como las caídas, y más apalancamiento no es lo mismo que más ventaja. Una palanca más larga mueve más peso, pero no cambia la fuerza de quien la empuja.
> Boceto: una palanca con dos pesos, uno verde (ganancias) y otro rojo (caídas) que crecen a la vez al alargar el brazo de ×3 a ×5.

**[5:25 — Conclusión]** (pantalla: texto grande)
Veredicto: no sirvió. El más 591.5% con Sharpe 1.39 depende de usar el VIX del cierre del mismo día, y aun así tuvo una caída máxima de menos 17.2%. Un resultado así no es una ventaja: es una pregunta que hay que hacerle al dato antes de creerle.
> Boceto: sello rojo «NO SIRVIÓ»; frase final «El trading no se promete: se prueba».

**[5:45 — Cierre]** (pantalla: logo y enlace)
En el siguiente video, qué pasa si el bot también apuesta a la baja: el experimento 20. Todos los datos en atlas-lab-one.vercel.app, experimento 19. Contenido educativo, no es asesoría financiera.
> Boceto: pantalla final con enlace y logo ATLAS; fondo de velas animadas con opacidad 0.12.

---

## SHORT (9:16, ≈ 42 s)
Fórmula visual: b-roll Pexels vertical + overlay oscuro 0.6, Ken Burns alternando in/out, subtítulos karaoke en MAYÚSCULAS con las cifras en rojo, whoosh + flash en cada corte, golpe de bass + sacudida solo en el 0-3 s y en la caída de −17.2%; ticker arriba, viñeta y velas con opacidad ≤ 0.12.

**[0-2 s]** "Apalancamiento ×5 cuando hay calma: más 591.5%."
> Boceto: curva real empinada dibujándose; «×5» enorme en verde; contador «+591.5%».
**[2-11 s]** "La regla: si el VIX, el índice del miedo, está por debajo de 16, apalanco ×5. Si no, ×3. Y si hay pánico, me salgo."
> Boceto: termómetro de VIX con la marca en 16; escalera «fuera / ×3 / ×5» que se ilumina.
**[11-16 s]** "Diez años, de 2014 a 2024, con las reglas de una prop firm."
> Boceto: barra de tiempo 2014 → 2024 llenándose; chip «prop firm».
**[16-18 s]** "Sharpe de 1.39. Con 100,000 dólares: más 591,504."
> Boceto: tarjeta «1.39» y contador de dólares hasta «+$591,504».
**[18-21 s]** "Mejor año: más 41.4%. Peor año completo: menos 2.1%."
> Boceto: dos barras, una verde (2016) y una roja pequeña (2015).
**[21-26 s]** "Pero la caída máxima fue de 17.2%: solo serviría en firmas de drawdown estático."
> Boceto: la curva cae un tramo con sacudida; rótulo rojo «−17.2%».
**[26-32 s]** "Y decide con el VIX del cierre de hoy, un dato que un bot real aún no tiene."
> Boceto: reloj del cierre; flecha roja «cobra HOY» tachada.
**[32-39 s]** "El video completo está en el canal. No es asesoría financiera. El trading no se promete: se prueba."
> Boceto: sello «NO SIRVIÓ»; frase de marca; logo ATLAS.
**[39-42 s]** "Así que cuando veas un retorno de tres dígitos:"
> Boceto: la cifra «+591.5%» en grande; corte directo al inicio (loop).

## Descripción (YouTube)
Probé subir el apalancamiento a ×5 cuando el VIX está por debajo de 16 (×3 el resto del tiempo y fuera del mercado cuando hay riesgo).
En 2014–2024: +591.5%, Sharpe 1.39, 9 de 10 años positivos y una caída máxima de −17.2%.
Decide con el VIX del cierre del mismo día, por eso no se puede ejecutar en real.
Todos los datos: https://atlas-lab-one.vercel.app (experimento #19)
Contenido educativo. No es asesoría financiera ni recomendación de inversión.

Capítulos: 0:00 Gancho · 0:36 Dónde encaja en la serie · 0:55 El bot y el filtro, en 30 segundos · 1:26 Qué es el VIX y qué significa 16 · 1:50 La idea: más apuesta en calma · 2:14 Cómo se probó · 2:40 Resultados · 2:58 Base contra ×5 · 3:26 El precio del ×5 · 3:56 El detalle que lo invalida · 4:23 Qué haría falta para creerle · 4:47 Con tu capital · 5:07 Lo que sí aporta este experimento · 5:25 Conclusión · 5:45 Cierre

Etiquetas: apalancamiento, VIX, bot de trading, backtest, Sharpe ratio, prop firm, drawdown estático, gestión de riesgo, trading con datos, ATLAS Lab, trading algorítmico, riesgo de ruina

## Rúbrica (autoevaluación del Short)
hook_0_3s 5 · ritmo 4 · promesa_cumplida 5 · potencial_loop 4 · claridad_no_traders 4 · honestidad_atlas 5 · audio 4 · cta 4 → promedio 4.38 (aprobado: ≥ 4.0, hook ≥ 4, honestidad 5)
Notas: el gancho es un número alto y específico con apalancamiento visible; la honestidad es 5 porque la caída de −17.2%, el veredicto y la limitación del VIX del mismo día se dicen en el propio Short.

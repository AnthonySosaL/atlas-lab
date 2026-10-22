# Experimento #16 — Validación del filtro macro en múltiples crisis

Estado del guion: **BORRADOR — pendiente de aprobación**
Estado del experimento: **murió** (veredicto del sitio: «No sirvió») · Serie G — Construyendo un bot (y por qué murió)
Datos usados: `experiments.json` (v=16: kpis, metrics, params, verdict, analysis, capital), `exp_details.json` (clave `…-v16`: algo, filters), `series/20260608_160317_validacion-filtro-macro-multi-crisis-v16.json` (curva 1 = estrategia, curva 2 = comprar y esperar), tabla «Con tu capital» (archivo de capital en `docs/youtube/`). Relacionados: #15 (el filtro), #21 y #27 (las pruebas siguientes).

## Títulos
1. Un bot ganó +267% pasando 4 crisis… pero no se puede operar
2. Sharpe 1.23 y 9 de 10 años positivos: por qué este bot no es real
3. Probé un filtro de pánico en 4 crisis (2015, 2018, 2020 y 2022)

## Miniatura
Fondo `#09090b`. A la izquierda, la curva real de la estrategia subiendo en verde `#22c55e`; a la derecha, en rojo `#e11d2a` y Segoe UI Black, el texto «CIERRE DE HOY» (tres palabras, sin repetir el título) con un reloj tachado. Logo ATLAS abajo a la derecha.

---

## VIDEO LARGO (16:9, ≈ 6:14 min)
Ritmo visual: algo cambia en pantalla cada 2-3 s; los pasos de cada boceto van en orden. Fórmula del canal: b-roll real detrás, Ken Burns alterno, subtítulos karaoke, whoosh + flash en cada corte.

**[0:00 — Gancho]** (pantalla: la curva real dibujándose de abajo hacia arriba)
Con 100,000 dólares, esta estrategia habría ganado 267,267 dólares en diez años. Pasó por cuatro crisis —2015, 2018, el COVID de 2020 y 2022— y en nueve de esos diez años cerró en positivo. Es el tipo de gráfico que ponen en la portada de un curso. Y un bot real no puede operarla. Te explico por qué, con los números exactos.
> Boceto: curva 1 de `series/…v16.json` dibujándose en verde; contador animado hasta «+$267,267»; bandas rojas translúcidas en las 4 crisis; al final, golpe de bass y sacudida con el texto «¿se puede operar?» en rojo.

**[0:26 — Dónde encaja en la serie]** (pantalla: mapa de la serie con los experimentos 15 al 30)
Este experimento valida, con las mismas reglas, el filtro macro del experimento 15. Después vienen las variantes —#18, #19 y #20—, la prueba con datos de 2007 a 2013 en el #21, los intentos con inteligencia artificial del #22 al #25, y el #27, que decide si un bot real podría operar esta regla. Si quieres entender por qué murió el bot, este es el punto de partida.
> Boceto: línea con 15 puntos (#15 al #30); el #16 se ilumina en verde y se marcan con candados los que se desbloquean después; texto «Serie: construyendo un bot».

**[0:55 — Qué es un backtest]** (pantalla: gráfico de precios con una regla encima)
Un backtest es simular una estrategia con datos del pasado. Es la herramienta básica de cualquier trader cuantitativo y también la más fácil de usar mal. Una curva bonita puede salir de reglas ajustadas a lo que ya pasó, de costos que no se descuentan o de información que no estaba disponible al decidir. Esta serie de experimentos existe para revisar justo eso.
> Boceto: precios históricos con una regla que dibuja flechas de compra y venta; tres banderas rojas que aparecen una a una («ajuste al pasado», «sin costos», «información que no existía»).

**[1:22 — El bot en 40 segundos]** (pantalla: cesta de 15 activos y tres reglas)
Primero, el bot. Es una cesta de 15 activos —divisas, metales, índices y energía— donde cada uno aporta un riesgo parecido; eso se llama paridad de riesgo. Opera con apalancamiento ×3: posiciones tres veces más grandes que el capital. Y vive bajo las reglas de una prop firm, una empresa que te presta una cuenta si respetas sus límites: si pierdes 10% del capital inicial, o más de 5% en un solo día, la cuenta se cierra.
> Boceto: cuatro iconos (divisas, metales, índices, energía) entran en una cesta; texto «×3»; dos barras rojas con «−10%» y «−5% / día» como límites de la cuenta.

**[1:54 — La idea: un filtro de pánico]** (pantalla: tres semáforos)
La idea es un filtro macro: quedarse fuera del mercado cuando hay miedo. Tiene tres señales. Una: que el VIX, el índice del miedo de Wall Street, esté por encima de 28. Dos: que el VIX dé un salto brusco. Tres: que el crédito, medido con dos fondos de bonos llamados HYG y LQD, caiga por debajo de su media de 60 días. Si salta cualquiera de las tres, el bot se queda en efectivo. La hipótesis es sencilla: cuando el miedo sube, las pérdidas suelen venir en racha, y quedarse fuera evita lo peor.
> Boceto: tres semáforos pasan a rojo uno por uno con «VIX > 28», «salto del VIX», «crédito < media 60 d»; la curva de precios se vuelve línea plana cuando alguno está en rojo.

**[2:34 — Cómo se probó]** (pantalla: checklist de filtros)
Las reglas se fijaron de antemano y no se barrieron parámetros. Periodo: de 2014 a 2024, con desglose año por año. Para darlo por bueno, el bot debía sobrevivir a las reglas de la prop firm, tener un Sharpe positivo —el Sharpe mide cuánto retorno obtienes por cada unidad de riesgo; cuanto más alto, mejor, y bajo cero significa que perdió— y al menos 70% de los años en positivo. Dos aclaraciones: esta prueba no descuenta costos, y la señal usa el cierre del mismo día.
> Boceto: checklist animado tomado de `exp_details.json`: «Rendimiento 2014–2024: pasa», «Años positivos: pasa», «Parámetros: no se barrieron», «Señal rezagada 1 día: FALLA» (sello rojo), «Costos: no aplicado».

**[3:09 — Resultados]** (pantalla: tarjetas con los números)
Sharpe de 1.23. Retorno total de +267.3%. Drawdown máximo —la peor caída desde un máximo de la cuenta— de −12.5%. Años positivos: 9 de 10, o sea 90%. El bot pasó 1,465 días fuera del mercado, de 3,204 simulados. Y los años de crisis, 2020 y 2022, cerraron en positivo. Sobrevive a las reglas de la prop firm incluso con ×3. Sobre el papel, aprobado.
> Boceto: tarjetas de KPI con tick (Sharpe 1.23 · +267.3% · −12.5% · 9/10 años · 1,465 días fuera); luego la curva 1 con las bandas de 2015, 2018, 2020 y 2022 resaltándose una a una.

**[3:37 — El detalle que lo invalida]** (pantalla: línea de tiempo de un día con reloj)
Ahora el detalle. El filtro decide con el VIX y el crédito del cierre de ese mismo día, y con esa decisión cobra el retorno de ese mismo día. Imagina que apuestas a un partido cuando ya conoces el marcador del primer tiempo. Un bot real decide por la tarde, con el cierre ya hecho, y aplica la decisión al día siguiente. La información del mismo día, un bot real no la tiene.
> Boceto: línea de tiempo con dos relojes: «cierre de hoy → decide → cobra HOY» (rojo, tachado) frente a «cierre de hoy → decide → cobra MAÑANA» (verde); texto «información que aún no existe».

**[4:08 — Dos Sharpe, una sola diferencia]** (pantalla: dos barras)
Cuando la señal se rezaga un día, que es la única versión ejecutable, esta misma base da un Sharpe de −0.17, como se mide en el experimento 27. Es el mismo bot y las mismas reglas: cambia solo la hora a la que se conoce el dato. De 1.23 a −0.17.
> Boceto: dos barras comparativas, «señal del mismo día: 1.23» (verde, alta) y «señal de ayer: −0.17» (roja, hacia abajo); golpe de bass cuando la barra cae bajo cero.

**[4:30 — Tres preguntas antes de creerle a un backtest]** (pantalla: tres tarjetas)
Te dejo tres preguntas para cualquier backtest. Primera: ¿con qué dato decide y a qué hora se conoce? Aquí, con el cierre del mismo día. Segunda: ¿descuenta costos? Aquí no. Tercera: ¿se probó con datos que nunca vio? Eso se hace en el experimento 21. Una curva que aguanta cuatro crisis no sirve si la primera respuesta es «con información que aún no existe».
> Boceto: tres tarjetas numeradas; cada una recibe un sello (rojo «mismo día», ámbar «sin costos», gris «ver #21») con tick sonoro.

**[4:57 — Con tu capital]** (pantalla: tarjeta de capital $10,000 / $100,000)
Con 10,000 dólares, la curva termina en +$26,727; con 100,000, en +$267,267. Sin estrategia, comprando y esperando, serían +$5,904 y +$59,039. Pero la diferencia es la que no se puede cobrar: depende de la información del mismo día y, además, opera con apalancamiento ×3.
> Boceto: tarjeta «Con tu capital» del sitio con el selector $10,000 / $100,000; curva de la estrategia (verde) frente a la gris «Sin estrategia»; aviso ámbar «información del mismo día».

**[5:16 — Lo que sí aporta este experimento]** (pantalla: piso de la serie)
Aun así, este experimento deja algo útil: es el punto de partida de la serie. La base con la señal del mismo día es la vara con la que se miden las variantes de los experimentos siguientes. Y plantea la pregunta que domina el resto: ¿se puede ejecutar?
> Boceto: una barra horizontal marcada «1.23» como línea de referencia; las variantes siguientes (#18 a #26) se dibujan como puntos por encima y por debajo de ella.

**[5:36 — Conclusión]** (pantalla: texto grande)
Mi conclusión: una regla que se salva de las crisis mirando el cierre de hoy no es una regla, es una foto. El veredicto de este experimento es «no sirvió». Primero hay que asegurar que un bot real pueda ejecutar la regla, y eso lo sigo probando en los siguientes videos de la serie.
> Boceto: sello rojo «NO SIRVIÓ» sobre la curva; después la frase «El trading no se promete: se prueba» en blanco.

**[6:00 — Cierre]** (pantalla: logo y enlace)
En el siguiente video de la serie, el negocio de las prop firms con este mismo filtro: el experimento 17. Todos los datos en atlas-lab-one.vercel.app, experimento 16. Contenido educativo, no es asesoría financiera.
> Boceto: pantalla final con enlace y logo ATLAS; fondo de velas animadas con opacidad 0.12.

---

## SHORT (9:16, ≈ 49 s)
Fórmula visual: b-roll Pexels vertical + overlay oscuro 0.6, Ken Burns alternando in/out, subtítulos karaoke en MAYÚSCULAS con las cifras en rojo, whoosh + flash en cada corte, golpe de bass + sacudida solo en el 0-3 s y en el giro del Sharpe; ticker arriba, viñeta y velas con opacidad ≤ 0.12.

**[0-2 s]** "Cuatro crisis y +$267,267. Imposible de operar."
> Boceto: curva real subiendo de golpe con el contador «+$267,267»; texto gigante «4 CRISIS»; sello rojo «IMPOSIBLE» al cerrar la frase.
**[2-9 s]** "Es un bot que se sale del mercado cuando el VIX, el índice del miedo, pasa de 28."
> Boceto: semáforo que pasa a rojo con «VIX > 28»; la curva se vuelve línea plana.
**[9-14 s]** "Lo probé de 2014 a 2024, con apalancamiento ×3 y las reglas de una prop firm."
> Boceto: barra de tiempo 2014 → 2024 que se llena; chips «×3» y «prop firm» entran por los lados.
**[14-22 s]** "Sharpe de 1.23. Caída máxima de 12.5%. Nueve de diez años en positivo, incluidos 2020 y 2022. Con 100,000 dólares: más 267,267."
> Boceto: cuatro tarjetas con tick (1.23 · −12.5% · 9/10 · +$267,267) que aparecen cada 1.5 s sobre la curva.
**[22-27 s]** "El detalle: decide con el VIX del cierre de hoy y cobra el retorno de hoy."
> Boceto: reloj con el cierre de hoy; flecha roja hacia «cobra HOY».
**[27-34 s]** "Un bot real decide al cierre y opera mañana. Con la señal de ayer, el Sharpe cae a menos 0.17."
> Boceto: dos barras, 1.23 verde y −0.17 roja; la verde se rompe con golpe de bass y sacudida.
**[34-42 s]** "Una curva que aguanta crisis no vale nada si usa información que aún no existe. El trading no se promete: se prueba."
> Boceto: sello «NO SIRVIÓ» sobre la curva; la frase de marca en blanco.
**[42-49 s]** "El video completo está en el canal. No es asesoría financiera. Así que la próxima vez que veas una curva así:"
> Boceto: logo ATLAS y «video completo en el canal»; corte directo al inicio (loop).

## Descripción (YouTube)
Un bot con filtro de pánico ganó +267.3% con Sharpe 1.23 en 2014–2024, pasando cuatro crisis y con 9 de 10 años positivos.
Pero decide con el VIX y el crédito del cierre del mismo día, información que un bot real no tiene: con la señal de ayer, la base da Sharpe −0.17.
Todos los datos: https://atlas-lab-one.vercel.app (experimento #16)
Contenido educativo. No es asesoría financiera ni recomendación de inversión.

Capítulos: 0:00 Gancho · 0:26 Dónde encaja en la serie · 0:55 Qué es un backtest · 1:22 El bot en 40 segundos · 1:54 La idea: un filtro de pánico · 2:34 Cómo se probó · 3:09 Resultados · 3:37 El detalle que lo invalida · 4:08 Dos Sharpe, una sola diferencia · 4:30 Tres preguntas antes de creerle a un backtest · 4:57 Con tu capital · 5:16 Lo que sí aporta este experimento · 5:36 Conclusión · 6:00 Cierre

Etiquetas: bot de trading, filtro macro, VIX, backtest, Sharpe ratio, prop firm, apalancamiento, drawdown, sesgo de mirar el futuro, trading con datos, ATLAS Lab, trading algorítmico

## Rúbrica (autoevaluación del Short)
hook_0_3s 5 · ritmo 4 · promesa_cumplida 5 · potencial_loop 5 · claridad_no_traders 4 · honestidad_atlas 5 · audio 4 · cta 4 → promedio 4.50 (aprobado: ≥ 4.0, hook ≥ 4, honestidad 5)
Notas: el gancho da número y el giro en 3 s; la honestidad es 5 porque las cifras salen tal cual de `experiments.json` y el veredicto («no sirvió») se dice en voz y en pantalla.

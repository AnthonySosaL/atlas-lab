# Experimento #59 — Tendencia o fuera (cambio de régimen con MA200) · Tema 4 de 4: la prueba fuera de muestra, 2007–2013

Estado del guion: **BORRADOR — pendiente de aprobación**
Tema 4 de 4 del experimento #59 · Qué aporta frente a los otros temas: es el tema de la PRUEBA FUERA DE MUESTRA. Explica qué es, por qué incluye la crisis de 2008 y qué muestra: Sharpe −0.09, retorno −5.6% y caída máxima −13.6%; además contrapone el detector lento (tendencia) con el rápido (VIX). El tema 1 cuenta la historia del +30.3% que era beta; el tema 2 trata de las seis ventanas; el tema 3, de dólares contra Sharpe.
Estado del experimento: **murió** (No sirvió): el +30.3% de 2014-2024 era beta de los índices; fuera de muestra (2007-2013) da Sharpe −0.09 y el Deflated Sharpe es 0.21 · Serie: G (propuesta «Cambio de régimen», #59 → #62) · Relacionado: #60, #61, #62, #27
Datos usados: `experiments.json` (v=59: verdict, analysis, notes, metrics, kpis, params_view, capital.note), `exp_details.json` (extra-v59: algo, code.snippet, filters), `series/extra-v59.json` y la tabla «Con tu capital» (`docs/youtube/*-capital.md`, filas #59 y #27 en la columna «Ojo»).

## Títulos (3 opciones)
1. La regla de la media de 200 días en 2007–2013, con la crisis de 2008: retorno −5.6%, Sharpe −0.09
2. Fuera de muestra: qué es y por qué es la prueba más difícil de pasar
3. Detector lento contra detector rápido: la tendencia sobrevive a la ejecución, pero no gana

## Miniatura (1280×720)
Fondo `#09090b`. Un calendario con los años 2007 a 2013, el 2008 resaltado con un contorno rojo `#e11d2a`. Encima, sello blanco: «NUNCA LO VIO». Texto grande: «−5.6%» en rojo. Logo ATLAS esquina superior derecha.

---

## VIDEO LARGO (16:9, ≈ 5½ min)

**[0:00 — Gancho]** (pantalla: calendario 2007–2013 y el contador «−5.6%»)
Congelé la regla y la probé en un periodo que nunca había visto, de 2007 a 2013, con la crisis de 2008 dentro. Resultado: retorno de −5.6% y un Sharpe de −0.09.
> BOCETO: calendario que recorre 2007 a 2013, con 2008 resaltado; contador «−5.6%» en rojo con golpe de bajo y sacudida.

**[0:15 — Este experimento]** (pantalla: rótulo «Experimento #59 · Tendencia o fuera (cambio de régimen con MA200)»)
Este es el experimento #59 de ATLAS Lab: tendencia o fuera, un cambio de régimen con la media de 200 días. Todos los resultados están en la página del experimento. Hoy te explico la prueba más exigente: la que se hace en años que la regla no vio.
> BOCETO: rótulo con «#59» y el nombre del experimento; logo ATLAS; whoosh suave.

**[0:35 — Dentro y fuera de muestra]** (pantalla: dos recetas de cocina y dos jurados)
Dentro de muestra es probar una regla con los mismos años con los que la diseñaste. Es como un chef que ajusta la receta para unos jueces que ya conoce: lo normal es que les guste. Fuera de muestra es presentarla a jueces nuevos, con la receta congelada, sin retoques. Esa es la prueba que dice si había algo real.
> BOCETO: dos escenas ilustradas: «jueces conocidos» (receta ajustándose) y «jueces nuevos» (receta congelada, con candado). Rotulada, sin datos.

**[1:10 — Por qué 2007–2013]** (pantalla: línea de tiempo con 2008 marcado)
Usé una cesta de 7 pares de divisas más oro, que tiene datos desde 2007. Es una cesta sin índices. El periodo 2007–2013 incluye la crisis de 2008, el tipo de momento para el que está pensada la regla: sacarte del mercado cuando es bajista. Y como nunca se usó para diseñar la regla, es un examen limpio.
> BOCETO: línea de tiempo 2007–2024 con dos zonas: «diseño 2014–2024» (gris) y «fuera de muestra 2007–2013» (resaltada), con 2008 marcado.

**[1:50 — Qué significa «congelada»]** (pantalla: checklist de reglas fijas)
Congelada significa que la media de 200 días se queda como está, sin buscar una ventana mejor para este periodo. Apalancamiento 2 cuando el mercado está sobre su media, fuera cuando está debajo, señal con un día de rezago y 3 puntos básicos de costo por unidad de rotación.
> BOCETO: checklist ✓ «MA200 sin retoques», ✓ «x2 / 0», ✓ «rezago 1 día», ✓ «3 bps»; candado sobre el parámetro de la media.

**[2:25 — Resultado]** (pantalla: tres cifras en una tarjeta)
Sharpe de −0.09, cuando el laboratorio exige más de 0.30. Retorno de −5.6%. Caída máxima, la peor caída desde un pico, de −13.6%. La regla no aprueba: ni siquiera queda cerca.
| Fuera de muestra 2007–2013 | Resultado | Exigencia |
|---|---|---|
| Sharpe | −0.09 | mayor que 0.30 |
| Retorno | −5.6% | — |
| Caída máxima | −13.6% | — |
> BOCETO: la tabla entra fila a fila con tick; una barra roja de Sharpe −0.09 contra la meta 0.30 en verde; sello ✕.

**[3:00 — ¿Y la crisis de 2008?]** (pantalla: texto en dos columnas)
Es natural preguntar si la regla ayudó justo en 2008, que era su momento. La ficha no desglosa 2008 por separado; mide el periodo completo, 2007 a 2013, y en ese periodo el resultado es negativo. Lo que sí puedo decir es lo que mide el experimento: la regla congelada no tiene ventaja en esos años, con la crisis dentro.
> BOCETO: dos columnas: «Lo que mide la ficha: 2007–2013 completo» y «Lo que no desglosa: 2008 por separado» (gris, con ?). Sello ámbar «NO DESGLOSADO».

**[3:35 — Detector lento y detector rápido]** (pantalla: dos relojes, uno lento y otro rápido)
La ficha deja una lección. Un detector de mercado bajista puede ser lento, como la media de 200 días, o rápido, como el VIX. El rápido necesita ejecutarse con la señal de ayer, y ese retraso le quita mucho; en experimentos anteriores del bot, los filtros basados en el VIX dejaron de funcionar cuando se usó la señal de ayer. El lento sufre menos esa pérdida. Pero sobrevivir a la ejecución no es lo mismo que ganar: la tendencia lo hace mejor, y aun así no genera ventaja.
> BOCETO: dos relojes: uno rápido (VIX, aguja que salta) y uno lento (MA200, aguja pausada); sello «sobrevive la ejecución ≠ ventaja».

**[4:15 — Con tu capital]** (pantalla: tarjeta «Con tu capital»)
La tarjeta del sitio muestra la cesta completa, de 2014 a 2024: con $10,000, +$3,027; con $100,000, +$30,275, contra +$2,310 y +$23,098 de comprar y esperar. El periodo fuera de muestra no tiene curva propia: lo que hay son sus tres cifras, Sharpe de −0.09, retorno de −5.6% y caída máxima de −13.6%.
> BOCETO: tarjeta de capital con dos filas (regla y sin estrategia); al lado, tarjeta ámbar «fuera de muestra: −0.09 · −5.6% · −13.6%». Aviso: «Simulación con apalancamiento x2, no es una promesa».

**[4:45 — Qué dice y qué no dice]** (pantalla: dos columnas)
Dice que esta regla, en esta cesta y con este costo, no tiene ventaja medible fuera de muestra. No dice que la tendencia no funcione en ningún mercado: no lo medí aquí.
> BOCETO: dos columnas: «sí: media de 200 días, 7 pares + oro, 2007–2013» y «no medido: otros mercados, otras reglas».

**[5:05 — Conclusión]** (pantalla: el calendario del inicio)
Una regla que solo funciona en los años en que fue diseñada no ha demostrado nada. La prueba fuera de muestra es la que lo dice.
> BOCETO: el calendario del inicio, con el «−5.6%» en rojo.

**[5:20 — Ficha del experimento #59 y cierre]** (pantalla: tarjeta con la ficha y la URL)
Ficha del experimento #59. Estado: murió. Cifra clave: fuera de muestra, 2007–2013, retorno de −5.6% y Sharpe de −0.09. Filtro que decidió: Sharpe fuera de muestra de −0.09 (se exige más de 0.30) y Deflated Sharpe de 0.21. Lección: un número bonito dentro de muestra no es una ventaja. Revísalo completo en atlas-lab-one.vercel.app/e/59. Contenido educativo, no es asesoría financiera. El trading no se promete: se prueba.
> BOCETO: tarjeta en pantalla con las 4 líneas de la ficha (estado rojo «murió») y la URL `atlas-lab-one.vercel.app/e/59` en grande; fundido a la frase de marca.

---

## SHORT (9:16, ≈ 44 s) — "Años que nunca vio"
Título del Short: La regla congelada en 2007–2013: −5.6% #Shorts

**[0-3 s]** "Congelé la regla y la probé en años que nunca vio: menos 5.6%."
> BOCETO: B-roll vertical de pantallas de mercado con overlay 0.6; calendario 2007–2013 con 2008 resaltado y «−5.6%» en rojo; golpe de bajo y sacudida. Karaoke con «NUNCA VIO» en rojo.

**[3-14 s]** "Se llama prueba fuera de muestra: como presentar una receta a jueces nuevos, sin retocarla. La regla: media de 200 días, apalancamiento doble sobre ella, fuera debajo."
> BOCETO: dos jueces y una receta con candado; precio con media móvil; whoosh. Ken Burns hacia dentro.

**[14-26 s]** "Siete divisas y oro, de 2007 a 2013, con la crisis de 2008. Sharpe de −0.09. Se exigía más de 0.30. Caída máxima: −13.6%."
> BOCETO: tabla de tres cifras con tick; barra roja de −0.09 contra la meta 0.30.

**[26-37 s]** "La tendencia sobrevive mejor a la ejecución que el VIX. Pero sobrevivir no es ganar: no hay ventaja."
> BOCETO: dos relojes, uno lento y otro rápido; flash blanco al entrar; sello «sobrevivir ≠ ganar».

**[37-44 s]** "Video completo en el canal y experimento 59 completo en el enlace. Una regla que no funciona en años nuevos no ha demostrado nada."
> BOCETO: vuelve el calendario con «−5.6%» (loop); rótulo «Experimento #59 completo en el enlace»; texto pequeño «No es asesoría financiera · El trading no se promete: se prueba».

---

## Descripción (YouTube)
https://atlas-lab-one.vercel.app/e/59?utm_source=youtube&utm_medium=video&utm_campaign=exp059-t4
Ficha del experimento #59: murió · fuera de muestra 2007–2013: Sharpe −0.09, retorno −5.6%, caída máxima −13.6% · Deflated Sharpe 0.21.
La regla de la media de 200 días, congelada y probada en 7 pares de divisas más oro en un periodo que no vio (2007–2013, con la crisis de 2008). Qué es la prueba fuera de muestra y por qué un detector lento sobrevive mejor a la ejecución que el VIX, aunque no genere ventaja.
Contenido educativo. No es asesoría financiera ni recomendación de inversión.
Descripción del Short (primera línea): https://atlas-lab-one.vercel.app/e/59?utm_source=youtube&utm_medium=short&utm_campaign=exp059-t4

Capítulos: 0:00 Gancho · 0:15 Este experimento · 0:35 Dentro y fuera de muestra · 1:10 Por qué 2007–2013 · 1:50 Qué significa congelada · 2:25 Resultado · 3:00 ¿Y la crisis de 2008? · 3:35 Detector lento y detector rápido · 4:15 Con tu capital · 4:45 Qué dice y qué no dice · 5:05 Conclusión · 5:20 Ficha del experimento #59 y cierre

Etiquetas: fuera de muestra, out of sample, crisis de 2008, media móvil 200, seguimiento de tendencia, VIX, backtest, Sharpe ratio, validación de estrategias, trading con datos, ATLAS Lab, forex y oro

## Rúbrica (autoevaluación, 1–5)
| Pieza | hook_0_3s | ritmo | promesa_cumplida | potencial_loop | claridad_no_traders | honestidad_atlas | audio | cta | Promedio |
|---|---|---|---|---|---|---|---|---|---|
| Largo | 4 | 4 | 5 | 4 | 5 | 5 | 4 | 4 | 4.38 |
| Short | 5 | 4 | 5 | 5 | 4 | 5 | 4 | 4 | 4.50 |

Hook ≥ 4 ✓ · honestidad 5 ✓. Punto débil: la ficha no desglosa 2008 por separado; el video lo dice en un bloque propio en vez de insinuar un resultado que no existe.

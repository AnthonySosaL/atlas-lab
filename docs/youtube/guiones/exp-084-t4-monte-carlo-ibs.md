# Experimento #84 — Tema 4: pasó el Monte Carlo (p = 0.01) y perdió dinero (el caso del IBS)

Tema 4 de 4 del experimento #84 · Qué aporta frente a los otros temas: es el tema del método. Explica el Monte Carlo con un caso real en que una forma lo pasa y aun así pierde en todos los periodos, y lo contrasta con el mejor p de los experimentos 83, 85, 86, 88 y 89. El tema 1 recorre las 12 combinaciones; el tema 2 sigue a la mejor del diseño; el tema 3 compara comprar caídas con seguir la tendencia.
Estado del guion: **BORRADOR — pendiente de aprobación**
Estado del experimento: **murió** (las 12 formas murieron, máximo 2 de 5 filtros; algunas brillan en 2007–2013 y se hunden en 2021–2024) · Serie A — «Probé la estrategia de TikTok» (plan-series.md) · 1 largo + 1 Short
Datos usados: `experiments.json` (v=84: kpis, metrics, forms, verdict, analysis), `exp_details.json` (extra-v84: algo, filters, en especial `mc` y `bh`), `series/extra-v84.json` (1.ª curva = «MA200 filtro + RSI4<20», la forma del IBS no tiene curva), tabla «Con tu capital» de `docs/youtube`; mejor p de Monte Carlo de los experimentos 83, 85, 86, 88 y 89.
Producción (CLAUDE.md del canal): b-roll real detrás de cada escena con overlay oscuro 0.6, Ken Burns alternando in/out, subtítulos karaoke en MAYÚSCULAS con palabras clave en rojo, un dato visual por escena, golpe de bajo + sacudida solo en 1–2 momentos. Colores: rojo `#e11d2a`, verde `#22c55e`, fondo `#09090b`. Cifras en dígitos aquí; en el campo `tts` del JSON, en palabras.

## Títulos (3 opciones)
1. Pasó el Monte Carlo con p = 0.01… y su Sharpe fue 0.07, −0.29 y −0.33
2. Pasar un filtro no es ganar dinero: el caso del IBS
3. Monte Carlo explicado: qué mide y qué no mide

## Miniatura (pensada para el título 1)
Fondo `#09090b`. Un sello verde «p = 0.01 ✓» y, justo debajo, tres cifras rojas «0.07 · −0.29 · −0.33». Texto grande: «NO BASTA» (2 palabras, sin repetir el título). Logo ATLAS arriba a la derecha.

---

## VIDEO LARGO (16:9, ≈ 5.5 min)

**[0:00 — Gancho]** (pantalla: sello verde y tres cifras rojas)
De 12 combinaciones, una pasó el filtro del Monte Carlo, con un p de 0.01. Y sus Sharpe en los tres periodos fueron 0.07, −0.29 y −0.33. Pasar un filtro no es lo mismo que ganar dinero.
BOCETO: sello «Monte Carlo p = 0.01 ✓» en verde; debajo aparecen tres barras 0.07 (verde pálido), −0.29 y −0.33 (rojas). Golpe de bajo en −0.33. kb=in.

**[0:15 — Qué es este experimento]** (pantalla: rótulo con el número y el nombre)
Este es el experimento #84 de ATLAS Lab: Filtro multitemporalidad, media superior más entrada inferior, 12 formas. Todos los resultados están en la página del experimento.
BOCETO: rótulo en rojo y blanco «EXPERIMENTO #84» con el nombre debajo, sobre el sello atenuado (overlay 0.6). Whoosh corto. kb=out.

**[0:25 — Qué hace el Monte Carlo]** (pantalla: señal que se desplaza)
Una estrategia es una secuencia de días: dentro del mercado o fuera. El Monte Carlo toma esa secuencia y la desplaza en el tiempo, 5,000 veces. La estrategia sigue estando dentro la misma cantidad de días; solo cambia cuándo. Si la estrategia real no le gana a sus propias copias desalineadas, su timing podría ser suerte. El resultado es un p: la fracción de copias que le igualan o le ganan. Se exige un p menor que 0.05.
BOCETO: una barra de días «dentro/fuera» que se desplaza a izquierda y derecha en muchas copias, rotulada «ilustración»; contador «5,000 copias». Al lado, el umbral «p < 0.05». kb=in.

**[1:20 — El caso: filtro de 200 días con IBS]** (pantalla: precio y cierre cerca del mínimo)
La forma que lo pasó combina el cierre sobre su media de 200 días con un IBS menor que 0.2. El IBS mide dónde cierra el día dentro de su rango: un valor bajo significa que cerró cerca del mínimo. Es comprar un cierre débil dentro de una tendencia alcista. Versión diaria, siete pares de divisas y oro, señal del día siguiente, 3 puntos básicos de costo, solo compra.
BOCETO: vela diaria con el cierre cerca del mínimo marcado y el texto «IBS < 0.2»; precio sobre su MA200 (esquema ilustrativo, rotulado «ilustración»). Cartel ámbar fijo «Versión diaria · no intradía». kb=out.

**[2:10 — Los números]** (pantalla: tabla)
Su p de Monte Carlo es 0.01, el único de las 12 por debajo de 0.05. Las otras 11 van de 0.13 a 0.64. Pero esa misma forma da un Sharpe de 0.07 en el diseño, 2014–2020, bajo el 0.13 de comprar y esperar. En 2007–2013, da −0.29. Y en 2021–2024, −0.33. Su Deflated Sharpe es 0.001, cuando se exige 0.95. De los cinco filtros pasa uno.
| Medida | MA200 filtro + IBS<0.2 | Vara |
|---|---|---|
| Monte Carlo (p) | 0.01 | 0.05 |
| Diseño 2014–2020 | 0.07 | 0.13 (comprar y esperar) |
| Fuera de muestra 2007–2013 | −0.29 | 0.30 |
| Fuera de muestra 2021–2024 | −0.33 | 0.30 |
| Deflated Sharpe | 0.001 | 0.95 |
BOCETO: tabla fila a fila; solo la primera en verde, el resto en rojo/gris. Cartel «las otras 11: p entre 0.13 y 0.64».

**[3:05 — Cómo pueden pasar las dos cosas]** (pantalla: dos preguntas)
¿Cómo puede pasar el filtro y perder? Porque responde a otra pregunta. El Monte Carlo pregunta: ¿tu timing es mejor que el de tus copias? No pregunta: ¿ganas dinero estando dentro? Mi lectura, que no medí: las copias desplazadas pagan los mismos costos y pierden más que la original, así que la original sale «menos mala» que ellas, pero sigue sin ganar. Un timing mejor que el azar no es una ventaja suficiente si estar dentro ya cuesta más de lo que rinde.
BOCETO: dos preguntas en pantalla, «¿mejor que sus copias?» con ✓ y «¿gana dinero?» con ✗. Etiqueta gris «razonamiento, no medido» junto a la explicación. kb=in.

**[3:55 — No es un caso aislado]** (pantalla: tabla comparativa)
Pasó lo mismo en otro experimento. En el ORB del Nasdaq, el 88, 11 de 32 formas salen con p menor que 0.05, y las 11 tienen Sharpe negativo en el diseño. Y en las otras pruebas de TikTok, el mejor p fue 0.42 en las EMAs del 83, 0.16 en la ruptura del 85, 0.14 en la vela grande del 86 y 0.08 en la barrida del 89. En la mayoría ni siquiera pasa el timing.
| Experimento | Mejor p de Monte Carlo |
|---|---|
| #84 Multitemporalidad (IBS) | 0.01 |
| #89 Barrida | 0.08 |
| #86 Vela grande | 0.14 |
| #85 Ruptura del rango | 0.16 |
| #83 EMAs | 0.42 |
| #88 ORB del Nasdaq | 11 de 32 formas con p < 0.05, todas con Sharpe de diseño negativo |
BOCETO: barras horizontales de p contra la línea de 0.05; la del #84 es la única que la cruza; nota para #88 en ámbar: «el filtro del #88 compara la dirección de la primera ruptura, no la ganancia».

**[4:40 — Con tu capital]** (pantalla: tarjeta de capital)
La forma del IBS no tiene curva en la ficha. La curva publicada es la de la mejor del diseño, MA200 con RSI de 4 días menor que 20. Con 100,000 dólares gana 1,738. Comprar y esperar la misma cesta gana 14,407. Con 10,000 dólares serían unos +174 contra +1,441.
BOCETO: curvas reales de `series/extra-v84.json` con contadores finales; cartel gris «la forma del IBS no tiene curva en la ficha».

**[5:00 — Conclusión]**
El Monte Carlo es un filtro útil, pero mide una sola cosa: si tu momento de entrada es mejor que el azar. Una estrategia puede pasarlo y perder en los tres periodos. Por eso son cinco filtros y no uno. El trading no se promete: se prueba.

**[5:25 — Ficha del experimento #84]** (pantalla: tarjeta con la ficha y la URL)
Ficha del experimento #84. Estado: murió. Cifra clave: una forma pasa el Monte Carlo con p de 0.01 y da Sharpe 0.07, −0.29 y −0.33. Filtro que decidió: el Deflated Sharpe, máximo 0.01 de 0.95. Lección: pasar un filtro no es ganar dinero. Revísalo completo en atlas-lab-one.vercel.app/e/84.
BOCETO: tarjeta con el número «#84», el sello «MURIÓ» en rojo, tres líneas (cifra clave, filtro que decidió, lección) y la URL `atlas-lab-one.vercel.app/e/84` grande abajo. kb=in.

**[5:45 — Cierre]**
Todos los datos en atlas-lab-one.vercel.app, experimento 84. Contenido educativo, no es asesoría financiera.

---

## SHORT (9:16, ≈ 49 s)

**[0-3 s]** «Pasó el filtro del Monte Carlo con un p de 0.01. Y perdió dinero.»
BOCETO: sello verde «p = 0.01 ✓» que se agrieta; sobre b-roll de gráfico (kb=in), overlay 0.6.

**[3-15 s]** «El Monte Carlo desplaza la señal en el tiempo 5,000 veces. Si la original no le gana a sus copias, su timing es suerte.»
BOCETO: barra de días dentro/fuera con muchas copias desplazadas (kb=out); ticker arriba.

**[15-30 s]** «Una de 12 lo pasó: media de 200 días con IBS menor que 0.2. Pero su Sharpe fue 0.07, menos 0.29 y menos 0.33.»
BOCETO: tres barras 0.07 → −0.29 → −0.33; golpe de bajo + sacudida en −0.33.

**[30-43 s]** «Pasar un filtro no es ganar dinero. En el ORB del Nasdaq, 11 de 32 formas pasan este filtro, y las 11 pierden en el diseño.»
BOCETO: cartel «11 / 32 pasan · 11 pierden» en rojo.

**[43-49 s]** «El video completo está en el canal, y el experimento #84 completo, en el enlace. Pasó el filtro. Perdió igual.»
BOCETO: texto final «Video completo en el canal · Experimento #84 completo en el enlace» + pequeño «No es asesoría financiera · El trading no se promete: se prueba». Loop: «perdió igual» responde al «perdió dinero» del arranque.

---

## Descripción de YouTube (video largo)
https://atlas-lab-one.vercel.app/e/84?utm_source=youtube&utm_medium=video&utm_campaign=exp084-t4
Ficha del experimento #84: murió · 12 formas, 0 sobrevivientes, máximo 2 de 5 filtros · una forma (MA200 + IBS<0.2) pasa el Monte Carlo con p = 0.01 y da Sharpe 0.07, −0.29 y −0.33 · Deflated Sharpe máximo 0.01 de 0.95.
Explico qué mide el Monte Carlo (5,000 copias desplazadas de la señal) y qué no mide, con un caso real y la comparación con los experimentos 83, 85, 86, 88 y 89. Versión diaria, siete pares de divisas y oro, 3 puntos básicos de costo.
Contenido educativo. No es asesoría financiera ni recomendación de inversión.

## Descripción de YouTube (Short)
https://atlas-lab-one.vercel.app/e/84?utm_source=youtube&utm_medium=short&utm_campaign=exp084-t4
Ficha del experimento #84: murió · pasa el Monte Carlo (p = 0.01) pero su Sharpe es 0.07, −0.29 y −0.33 · 0 de 12 sobreviven.
Contenido educativo. No es asesoría financiera.

## Capítulos
0:00 Gancho · 0:15 Qué es este experimento · 0:25 Qué hace el Monte Carlo · 1:20 El caso del IBS · 2:10 Los números · 3:05 Cómo pasan las dos cosas · 3:55 No es un caso aislado · 4:40 Con tu capital · 5:00 Conclusión · 5:25 Ficha del experimento

## Etiquetas
monte carlo, p-valor, ibs, internal bar strength, pasar un filtro, backtest, validación de estrategias, fuera de muestra, deflated sharpe, estrategia de tiktok, atlas lab, trading con datos

## Rúbrica (autoevaluación, 1–5)
| Pieza | hook_0_3s | ritmo | promesa_cumplida | potencial_loop | claridad_no_traders | honestidad_atlas | audio | cta | Promedio |
|---|---|---|---|---|---|---|---|---|---|
| Largo | 4 | 4 | 5 | 4 | 4 | 5 | 4 | 4 | 4.3 |
| Short | 5 | 4 | 5 | 5 | 4 | 5 | 4 | 4 | 4.5 |

Hook ≥ 4 ✓ · honestidad 5 ✓. Punto débil: el Monte Carlo es abstracto; se explica con una barra de días que se desplaza. El filtro del #88 es otra versión (compara la dirección de la primera ruptura) y se rotula así. La explicación de por qué pasa y pierde está marcada «razonamiento, no medido».

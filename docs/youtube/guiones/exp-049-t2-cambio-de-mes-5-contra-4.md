# Experimento #49 — Cambio de mes en índices · Tema 2: ¿existe el efecto calendario? +5 puntos básicos contra +4

Estado del guion: **BORRADOR — pendiente de aprobación**
Tema 2 de 3 del experimento #49. Qué aporta frente a los otros temas: el tema 1 cuenta la estrategia y su resultado; este explica el concepto (qué es un efecto de calendario y cómo se mide) con la medición pura del experimento #68, sin cuenta simulada, y la enlaza con el resultado del #49.
Estado del experimento: **murió** (No sirvió) · Serie: F ("Anomalías y estacionalidad") · Relacionado: #68 (estacionalidad medida aparte)
Datos usados: `experiments.json` (v=49: verdict, notes, metrics, kpis, params_view, capital.note; v=68: verdict, analysis, notes, metrics, chart.bars, period), `exp_details.json` (v49: algo, filters; v68: algo, filters) y la tabla «Con tu capital» (`docs/youtube/*-capital.md`) (fila #49).
Aviso de datos: el #68 es una medición descriptiva (sin costos ni cuenta simulada); el #49 tiene 179 días de curva y no tiene periodo fuera de muestra.

## Títulos (3 opciones)
1. ¿Existe el efecto cambio de mes? +5 contra +4 puntos básicos
2. Efecto calendario en el S&P 500: ¿señal o ruido? p = 0.67
3. Lunes a viernes y fin de mes en el S&P 500, medidos

## Miniatura (1280×720)
Fondo `#09090b`. Calendario con los días 28 a 3 resaltados en verde. Dos barras casi iguales: "+5" verde y "+4" gris. Texto enorme rojo `#e11d2a`: "¿RUIDO?". Texto pequeño blanco: "p = 0.67". Logo ATLAS esquina superior derecha. (No repite el título 1.)

---

## VIDEO LARGO (16:9, ≈ 4.5 min — medición de datos más el resultado del #49)

**[0:00 — Gancho]** (pantalla: calendario y dos barras casi iguales, +5 y +4)
Se repite que el mercado sube más a fin de mes. En el S&P 500, de 2012 a 2024, los días 28 al 3 rinden +5 puntos básicos por día. El resto del mes, +4. Un punto de diferencia.
> BOCETO: calendario mensual con los días 28 a 3 en verde; las dos barras reales de `chart.bars` del #68 (+5 y +4) creciendo con tick; sacudida de pantalla al aparecer la diferencia. Subtítulo karaoke con "UN PUNTO" en rojo.

**[0:20 — De qué experimento hablamos]** (pantalla: rótulo con el número y el nombre)
Este es el experimento #49 de ATLAS Lab: Cambio de mes en índices. Todos los resultados están en la página del experimento. Hoy lo explico con una medición hermana, el experimento 68, que mide la estacionalidad sin simular ninguna cuenta.
> BOCETO: rótulo "EXPERIMENTO #49 · Cambio de mes en índices" y debajo, más pequeño, "con datos del #68"; whoosh.

**[0:35 — Qué es un punto básico]** (pantalla: regla de porcentajes)
Un punto básico es una centésima de por ciento. Cinco puntos básicos por día son 0.05% por día. Son cifras diminutas, y por eso importan los costos: la ficha del #68 lo dice sin rodeos, diferencias de unos pocos puntos básicos por día no pagan ningún costo de operación.
> BOCETO: regla que muestra 1 punto básico = 0.01%; la barra de +5 con la etiqueta "0.05% al día"; chip "costos > diferencia".

**[1:00 — Qué es un efecto calendario]** (pantalla: calendario semanal)
Un efecto calendario es una regla que no mira el precio: mira la fecha. Por ejemplo, «los lunes el mercado baja» o «a fin de mes sube». Se mide fácil: se promedia el retorno diario según el día de la semana o la época del mes, y se compara. Eso es lo que hace el #68, sobre el S&P 500 entre 2012 y 2024.
> BOCETO: calendario con cinco columnas lunes a viernes; un promedio por columna que aparece como barra pequeña. Texto: "SE MIDE SIN ESTRATEGIA".

**[1:30 — Lo que midió]** (pantalla: cuatro barras de `chart.bars`)
El resultado: cambio de mes, +5 puntos básicos por día; resto del mes, +4. Por día de la semana, de lunes a viernes, los promedios van de +3 a +9 puntos básicos. Parece que hay diferencias. La pregunta es si son reales o ruido.
> BOCETO: las cuatro barras reales del `chart.bars` del #68 (cambio de mes +5 · resto +4 · día más bajo +3 · día más alto +9) con tick.

**[1:50 — ¿Señal o ruido?]** (pantalla: dos valores de p)
Para saberlo se usa una prueba estadística. El valor p responde: si en realidad no hubiera ningún efecto, ¿qué tan seguido verías una diferencia como esta solo por casualidad? Para el cambio de mes contra el resto, p = 0.67: el 67% de las veces. Para los días de la semana, p = 0.89. Para creer en un efecto suele pedirse un p pequeño; aquí son enormes. Las diferencias están dentro del ruido.
> BOCETO: dos tarjetas "p = 0.67" y "p = 0.89" con una escala de 0 a 1; un marcador en la zona «ruido».

**[2:25 — Un detalle de los datos]** (pantalla: aviso ámbar)
Un detalle de honestidad que viene en la ficha: la serie del S&P 500 incluye 484 filas de domingo, con un promedio de −3.2 puntos básicos, y 102 de sábado. Entran en «resto del mes» pero no en la tabla por día de la semana. Si se miran solo lunes a viernes, el cambio de mes rinde +6.7 y el resto +5.1, con p = 0.70. Otra manera de mirarlo, la misma conclusión.
> BOCETO: barra de las 484 filas de domingo en gris; tarjeta con "+6.7 vs +5.1 · p = 0.70".

**[2:55 — Y la estrategia del #49]** (pantalla: curva 0 del #49 y la cifra de capital)
Ahora, la estrategia. El experimento 49 compró cuatro índices solo en las últimas 2 y las primeras 3 filas diarias de cada mes, con apalancamiento 2. Resultado: Sharpe de −1.63, retorno de −10.9% y la cuenta cortada a los 179 días. Con $100,000, −$11,071; comprar y esperar los índices en esas mismas fechas, +$11,000. Una medición dice «no hay diferencia clara»; la estrategia dice «perdió». Cuadra.
> BOCETO: curva real `series/…v49.json` (curva 0) cayendo; dos cifras: −$11,071 (rojo) y +$11,000 (verde, referencia). Aviso: "Simulación, no es una promesa".

**[3:25 — Qué haría falta para creer en un efecto]** (pantalla: tres requisitos)
Para creer en un efecto calendario haría falta: muchos años, varios mercados y una diferencia que sobreviva a los costos. Aquí hay un mercado, el periodo 2012–2024 y una diferencia de un punto básico. La ficha del #68 resume: las anomalías de calendario, si existieron, ya están arbitradas.
> BOCETO: tres casillas con tick/✕: "muchos años ✓ (2012–2024)", "varios mercados ✕ (S&P 500)", "supera costos ✕".

**[3:50 — Ficha del experimento #49]** (pantalla: tarjeta con la URL)
Ficha del experimento 49. Estado: murió, no sirvió. Cifra clave: Sharpe de −1.63 y retorno de −10.9%, con la cuenta cortada a los 179 días, mientras la medición del #68 da +5 contra +4 puntos básicos. Filtro que decidió: sobrevivir en todos los periodos, que no se cumple, y no hubo prueba fuera de muestra. Lección: un efecto calendario es una diferencia diminuta que tiene que sobrevivir a los costos. Revísalo completo en atlas-lab-one.vercel.app/e/49.
> BOCETO: tarjeta "FICHA · EXPERIMENTO #49" con Estado · Cifra clave · Filtro que decidió · Lección, y la URL `atlas-lab-one.vercel.app/e/49` en grande.

**[4:25 — Cierre]**
Contenido educativo, no es asesoría financiera. El trading no se promete: se prueba.
> BOCETO: fundido a la frase de marca en blanco sobre negro; logo ATLAS.

---

## SHORT (9:16, ≈ 42 s) — "Uno de diferencia"
Título del Short: ¿Sube más a fin de mes? +5 contra +4 #Shorts

**[0-3 s]** "¿El mercado sube más a fin de mes? Cinco contra cuatro."
> BOCETO: B-roll vertical de calendario/bolsa con overlay 0.6; barras "+5" y "+4" casi iguales; golpe de bajo y sacudida.

**[3-14 s]** "Medí el S&P 500 de 2012 a 2024. Los días 28 al 3 rinden cinco puntos básicos al día. El resto del mes, cuatro. Un punto básico es 0.01%."
> BOCETO: calendario con los días 28 a 3 en verde; regla "1 punto básico = 0.01%". Ken Burns hacia dentro.

**[14-27 s]** "¿Señal o ruido? p = 0.67. Si no hubiera efecto, verías algo así el 67% de las veces. Por día de la semana, p = 0.89."
> BOCETO: dos marcadores en la escala de 0 a 1, ambos en la zona «ruido»; tick y flash.

**[27-36 s]** "La estrategia de comprar solo cinco días al mes: Sharpe de −1.63 y cuenta cortada a los 179 días."
> BOCETO: curva real del #49 cayendo al sello ✕; barra de Sharpe en rojo.

**[36-42 s]** "Un punto básico no paga costos. Experimento 49 completo en el enlace; el video completo está en el canal. No es asesoría financiera."
> BOCETO: vuelven "+5" y "+4" (loop con el primer cuadro); abajo "Experimento #49 completo en el enlace"; texto pequeño "El trading no se promete: se prueba."

---

## Descripción (YouTube) — video largo
https://atlas-lab-one.vercel.app/e/49?utm_source=youtube&utm_medium=video&utm_campaign=exp049-t2
Ficha del experimento #49 (Cambio de mes en índices): murió (No sirvió) · retorno −10.9% · Sharpe −1.63 · cuenta cortada a los 179 días; la medición del #68 en el S&P 500 da +5 puntos básicos por día en el cambio de mes contra +4 el resto (p = 0.67).
Qué es un efecto calendario, qué es un punto básico, cómo se lee un valor p y qué haría falta para creer en el cambio de mes.
Contenido educativo. No es asesoría financiera ni recomendación de inversión.

## Descripción (YouTube) — Short
https://atlas-lab-one.vercel.app/e/49?utm_source=youtube&utm_medium=short&utm_campaign=exp049-t2
Experimento #49 (Cambio de mes en índices): murió · S&P 500 2012–2024: +5 contra +4 puntos básicos por día (p = 0.67) · estrategia con Sharpe −1.63. Video completo en el canal. No es asesoría financiera.

## Capítulos
0:00 Gancho · 0:20 De qué experimento hablamos · 0:35 Qué es un punto básico · 1:00 Qué es un efecto calendario · 1:30 Lo que midió · 1:50 ¿Señal o ruido? · 2:25 Un detalle de los datos · 2:55 Y la estrategia del #49 · 3:25 Qué haría falta para creer en un efecto · 3:50 Ficha del experimento #49 · 4:25 Cierre

## Etiquetas
efecto calendario, turn-of-month, estacionalidad, puntos básicos, valor p, S&P 500, cambio de mes, backtest, anomalías de mercado, trading con datos, ATLAS Lab

## Rúbrica (autoevaluación, escala 1-5)
| Criterio | Nota | Por qué |
|---|---|---|
| hook_0_3s | 4 | Pregunta popular con «+5 contra +4» en pantalla; la diferencia mínima es la sorpresa |
| ritmo | 4 | Barras, calendario y escala de p cambian cada 2–3 s; el bloque del valor p es conceptual |
| promesa_cumplida | 5 | Promete medir si el efecto existe y lo responde con la medición y el valor p |
| potencial_loop | 4 | El cierre vuelve a «+5 y +4» |
| claridad_no_traders | 4 | Define punto básico, efecto calendario y valor p con un ejemplo cotidiano |
| honestidad_atlas | 5 | Declara los domingos de la serie, que el #68 no simula cuenta y que el #49 tiene 179 días sin fuera de muestra |
| audio | 4 | Voz por clonar; golpe de bajo solo en el gancho |
| cta | 4 | Una petición (la ficha en la web) y remite al video completo |
Promedio: **4.25** (≥ 4.0). Hook del Short 4 (≥ 4) y honestidad 5: no descalificado.

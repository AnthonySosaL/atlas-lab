# Experimento #46 — Pares por z-score del spread · Tema 3: 484 días de cuenta, 26 con movimiento

Estado del guion: **BORRADOR — pendiente de aprobación**
Tema 3 de 3 del experimento #46. Qué aporta frente a los otros temas: el tema 1 cuenta la estrategia y su cifra; este mira el camino de la cuenta día a día (el detalle de la curva), la letra pequeña del corte automático y de la prop firm, y qué habría pasado sin el corte.
Estado del experimento: **murió** (No sirvió) · Serie: sin asignar en `plan-series.md`; propuesta: B ampliada ("Estrategias famosas, puestas a prueba") · Relacionado: #47, #48, #49, #50
Datos usados: `experiments.json` (v=46: kpis, metrics, params_view, period, capital.note), `exp_details.json` (v46: algo, filters), `series/20260610_142755_pairs-cointegracion-v46.json` (curva 0 = estrategia; curva 1 = «sin reglas de prop firm»; curva 2 = sin estrategia; fechas, picos y días con cambio derivados de las curvas) y la tabla «Con tu capital» (`docs/youtube/*-capital.md`) (fila #46).

## Títulos (3 opciones)
1. La cuenta duró 484 días… y solo se movió 26
2. Pairs trading: 457 días en $100,000 y una caída en 14 días
3. Si no la cortan: $222 de cada $100,000 en pairs trading

## Miniatura (1280×720)
Fondo `#09090b`. Una línea blanca horizontal larguísima a la izquierda (plana) que al final se dobla hacia abajo en rojo `#e11d2a`. Texto enorme: "457 DÍAS PLANA" en blanco con "PLANA" en rojo (3 palabras). Logo ATLAS esquina superior derecha. (No repite el título 1.)

---

## VIDEO LARGO (16:9, ≈ 5.5 min)

**[0:00 — Gancho]** (pantalla: una línea plana de $100,000 que ocupa casi toda la pantalla y cae al final)
La cuenta de este experimento duró 484 días. Pero durante 457 de ellos estuvo clavada en $100,000. Todo lo que pasó, pasó entre el 22 de marzo y el 21 de abril de 2016: subió a $103,481 y terminó en $89,153.
> BOCETO: la curva real de `series/…v46.json` (curva 0) en línea plana casi todo el cuadro; contador "457 días sin moverse"; al final la línea se dobla en rojo con sacudida de pantalla.

**[0:20 — De qué experimento hablamos]** (pantalla: rótulo con el número y el nombre)
Este es el experimento #46 de ATLAS Lab: Pares por z-score del spread. Todos los resultados están en la página del experimento.
> BOCETO: rótulo "EXPERIMENTO #46 · Pares por z-score del spread" con whoosh; fondo, la línea plana a baja opacidad.

**[0:30 — La estrategia en 30 segundos]** (pantalla: cinco pares y parámetros)
Es pairs trading: tomas dos activos que suelen moverse juntos y apuestas a que, si se separan, vuelven a juntarse. Aquí, cinco pares: Brent–WTI, oro–plata, S&P 500–Nasdaq 100, euro–libra y dólar australiano–neozelandés. Calcula el z-score del spread con una beta de 250 días, entra cuando pasa de 2 y sale cuando baja de 0.5. Apalancamiento 2 y señal decidida un día antes.
> BOCETO: 5 chips de pares; caja `params_view` (x2 · beta 250 d · |z| > 2 · |z| < 0.5 · kill-switch −3% · deslizamiento 0.2%).

**[1:00 — La línea, día por día]** (pantalla: la curva con zoom a marzo–abril de 2016)
Mira la curva. Del 5 de octubre de 2014 al 21 de marzo de 2016, la cuenta no cambia: $100,000 los primeros 457 días. El 22 de marzo de 2016 se mueve por primera vez. El 7 de abril toca su máximo, $103,481. Y entonces cae: el 11 de abril pierde 3.20% en un día, el 19 de abril otro 3.20% y el 21 de abril otro más, y la cuenta termina en $89,153. De los 484 días, la cuenta cambió en 26.
> BOCETO: curva 0 en tres tramos: 457 días planos (gris), subida a $103,481 el 7-abr-2016 (verde) y tres escalones rojos de −3.20% con tick y flash; calendario pequeño que marca 22-mar → 21-abr.

**[1:35 — ¿Por qué plana?]** (pantalla: parámetros de ventana de 250 días)
La ficha no dice por qué la cuenta no se mueve al principio. Lo que sí dice es que la regla necesita una beta de 250 días y un z-score calculado sobre ventanas de 250 días. Lo más probable es que la estrategia espere tener historia suficiente antes de abrir posiciones, pero es una lectura mía: el dato firme es que la curva está plana hasta el 21 de marzo de 2016. Y esto cambia cómo leer "484 días": no son 484 días de operar, son 484 filas de calendario, y la cuenta se movió solo al final.
> BOCETO: ventanas de 250 días dibujadas sobre una línea de tiempo, con el rótulo "lectura probable, no confirmada por la ficha"; la línea plana resaltada hasta marzo de 2016.

**[2:20 — Tres días de −3.20%]** (pantalla: tres escalones rojos)
Los tres días de −3.20% no son casualidad. El corte automático, el kill-switch, está en −3%, y el deslizamiento, el costo de ejecutar a un precio peor que el esperado, es de 0.2%. Tres más dos décimas: −3.20%. Y la cuenta sigue las reglas de una prop firm: se corta con una caída máxima de 10% o una pérdida de 5% en un día. El 21 de abril de 2016, con $89,153, la cuenta quedó 10.8% por debajo de su capital inicial. Fin.
> BOCETO: fórmula "−3% + 0.2% = −3.20%" que se completa con tick; los tres escalones de la curva se iluminan uno a uno; sello ✕ en el 21-abr-2016.

**[3:00 — Qué dice el Sharpe de una curva así]** (pantalla: Sharpe −1.21 sobre la curva)
El Sharpe, la ganancia por unidad de riesgo, queda en −1.21 entre 2014 y 2024, y en −1.04 en 2007–2013, años fuera de muestra, es decir, que la estrategia nunca vio. La ficha aclara que el Sharpe se calcula sobre la curva truncada por el corte. Por eso este experimento no es un resultado de años de operación: es un mes de pérdidas con mucho calendario plano detrás. Eso no lo salva: el signo es negativo en los dos periodos.
> BOCETO: tarjetas `kpis` (−1.21, −1.04, −13.8%, −10.8%) con el aviso ámbar "Sharpe sobre curva truncada"; la curva plana detrás.

**[3:35 — La línea que nadie vive]** (pantalla: curva 1 hipotética)
Hay una segunda línea en los datos: «sin reglas de prop firm». Es la misma estrategia sin el corte. Es hipotética, porque en la realidad la cuenta se cierra ese día. Pasa por $39,579 en julio de 2019, por $11,064 en febrero de 2021, por $2,685 en octubre de 2022, y termina 2024 en $222 de cada $100,000. Lo que enseña no es una predicción: es que el corte, en este caso, habría evitado seguir perdiendo.
> BOCETO: curva 1 punteada gris cayendo desde $89,153 con cuatro marcadores ($39,579 · $11,064 · $2,685 · $222) y el rótulo "hipotética".

**[4:10 — Con tu capital]** (pantalla: tarjeta "Con tu capital")
Con $100,000, el resultado final es −$10,847. Comprar y esperar la cesta, en las mismas fechas, dio −$11,854. Es solo contexto: la estrategia se presentaba como neutral al mercado. Simulación, no una promesa.
> BOCETO: tarjeta de capital con −$10,847 en rojo y una fila gris de referencia (−$11,854).

**[4:25 — Lo que aprendes de una curva plana]** (pantalla: tres ideas)
Primero: antes de creer en "484 días", mira la curva, no el número. Segundo: una estrategia que casi no opera tiene pocas observaciones; la muestra es corta aunque el calendario sea largo. Tercero: la letra pequeña, el corte de −3% y el deslizamiento de 0.2%, explica la forma de la caída tanto como la idea de los pares.
> BOCETO: tres tarjetas numeradas con whoosh; en la primera, la línea plana con "484" tachado y "26" encima.

**[4:55 — Ficha del experimento #46]** (pantalla: tarjeta con la URL)
Ficha del experimento 46. Estado: murió, no sirvió. Cifra clave: retorno de −10.8%, Sharpe de −1.21 y cuenta cortada a los 484 días, de los cuales 26 con movimiento. Filtro que decidió: sobrevivir en todos los periodos, que no se cumple. Lección: mira el camino de la cuenta, no solo la cifra final. Revísalo completo en atlas-lab-one.vercel.app/e/46.
> BOCETO: tarjeta "FICHA · EXPERIMENTO #46" con Estado · Cifra clave · Filtro que decidió · Lección, y la URL `atlas-lab-one.vercel.app/e/46` en grande.

**[5:20 — Cierre]**
Contenido educativo, no es asesoría financiera. El trading no se promete: se prueba.
> BOCETO: fundido a la frase de marca; logo ATLAS.

---

## SHORT (9:16, ≈ 44 s) — "La línea plana"
Título del Short: 484 días de cuenta, 26 con movimiento #Shorts

**[0-3 s]** "484 días de cuenta. Solo se movió en 26."
> BOCETO: B-roll vertical de pantallas con overlay 0.6; línea plana larguísima y "457 DÍAS PLANA" en grande; golpe de bajo y sacudida. Subtítulos karaoke con "26" en rojo.

**[3-14 s]** "Es pairs trading: oro y plata, Brent y WTI, tres pares más. Si se separan, apuestas a que se juntan. La cuenta empieza con $100,000 y no cambia en 457 días."
> BOCETO: dos líneas que se separan (ilustración rotulada); la línea plana se alarga. Ken Burns hacia dentro.

**[14-27 s]** "El 7 de abril de 2016 toca $103,481. Luego tres días de menos 3.20%: el corte de menos 3 más 0.2 de deslizamiento. El 21 de abril termina en $89,153."
> BOCETO: curva real (curva 0) con zoom a abril de 2016; tres escalones rojos con tick; flash al corte y sello ✕.

**[27-36 s]** "Sin el corte, la misma regla termina 2024 en $222 de cada cien mil. Es hipotética, pero muestra hacia dónde iba."
> BOCETO: curva 1 punteada cayendo hasta "$222" con rótulo "hipotética".

**[36-44 s]** "Antes de creer en 484 días, mira la curva. Experimento 46 completo en el enlace; el video completo está en el canal. No es asesoría financiera."
> BOCETO: vuelve la línea plana del primer cuadro y "26" (loop con "solo se movió en 26"); abajo "Experimento #46 completo en el enlace"; texto pequeño "El trading no se promete: se prueba."

---

## Descripción (YouTube) — video largo
https://atlas-lab-one.vercel.app/e/46?utm_source=youtube&utm_medium=video&utm_campaign=exp046-t3
Ficha del experimento #46 (Pares por z-score del spread): murió (No sirvió) · retorno −10.8% · Sharpe −1.21 (2014–2024) · cuenta cortada a los 484 días, con la curva plana en $100,000 durante los primeros 457.
Miro el camino de la cuenta día a día, la letra pequeña del corte automático (−3% más 0.2% de deslizamiento) y la línea hipotética sin las reglas de la prop firm.
Contenido educativo. No es asesoría financiera ni recomendación de inversión.

## Descripción (YouTube) — Short
https://atlas-lab-one.vercel.app/e/46?utm_source=youtube&utm_medium=short&utm_campaign=exp046-t3
Experimento #46 (Pares por z-score del spread): murió · −10.8% · cuenta cortada a los 484 días, con movimiento en 26. Video completo en el canal. No es asesoría financiera.

## Capítulos
0:00 Gancho · 0:20 De qué experimento hablamos · 0:30 La estrategia en 30 segundos · 1:00 La línea, día por día · 1:35 ¿Por qué plana? · 2:20 Tres días de −3.20% · 3:00 Qué dice el Sharpe de una curva así · 3:35 La línea que nadie vive · 4:10 Con tu capital · 4:25 Lo que aprendes de una curva plana · 4:55 Ficha del experimento #46 · 5:20 Cierre

## Etiquetas
pairs trading, curva de capital, kill-switch, prop firm, drawdown, backtest, Sharpe ratio, estrategia de trading, trading con datos, ATLAS Lab, oro y plata

## Rúbrica (autoevaluación, escala 1-5)
| Criterio | Nota | Por qué |
|---|---|---|
| hook_0_3s | 5 | Contraste «484 días / 26» en voz y pantalla; dato verificable en la curva |
| ritmo | 4 | La curva cambia de tramo cada 2–3 s; el bloque de la ventana de 250 días es el más técnico |
| promesa_cumplida | 5 | Promete el detalle de la curva y lo muestra fecha por fecha |
| potencial_loop | 4 | El final vuelve a la línea plana y al «26» |
| claridad_no_traders | 4 | Explica kill-switch, deslizamiento, prop firm y Sharpe |
| honestidad_atlas | 5 | Distingue el dato (curva plana) de la lectura (ventana de 250 días) y rotula la línea hipotética |
| audio | 4 | Voz por clonar; un golpe de bajo |
| cta | 4 | Una petición (la ficha en la web) y remite al video completo |
Promedio: **4.38** (≥ 4.0). Hook del Short 5 (≥ 4) y honestidad 5: no descalificado.

# Experimento #44 — Posicionamiento COT (datos) · Tema 2: un cambio de nombre y los contratos cruzados (calidad de datos)

Estado del guion: **BORRADOR — pendiente de aprobación**
Tema 2 de 2 del experimento #44 (cubre también #45, que usa estos datos). Qué aporta frente a los otros temas: es el DETALLE SORPRENDENTE y el MÉTODO de calidad de datos. El tema 1 cuenta qué hay en la descarga (40 años, 7 pares y oro) y su limitación en una frase; este tema se dedica a las dos trampas de datos gratis (un contrato que cambió de nombre y filtros por nombre que mezclan contratos cruzados), a cómo detectarlas y a qué efecto tuvieron en la prueba de #45.
Estado del experimento: **NO CONCLUYENTE** (es un paso de datos: no opera ni prueba rentabilidad; habilita la prueba contraria de #45)
Serie: **G (epílogo)** — segundo de los «caminos futuros» del veredicto de #40 (posicionamiento COT).
Datos usados: `experiments.json` (v=44: analysis, description, verdict, notes, metrics, kpis, params_view, capital, chart; v=45: analysis, notes, metrics, kpis, capital) · `exp_details.json` (v44: algo con la cobertura y las limitaciones, code.snippet; v45: algo, filters) · fila #45 de la tabla «Con tu capital» (`docs/youtube/`). No hay `series/` para #44.
**Datos justos:** experimento de datos, sin curva propia. El Short se apoya en la cifra de #45 (Sharpe −0.28 con y −0.25 sin el dólar neozelandés), rotulada como tal.

## Títulos (opciones)
1. Un cambio de nombre me borró la historia del dólar neozelandés
2. Datos gratis, trampas gratis: 2 errores en 40 años de COT
3. El COT gratis mezcla contratos cruzados: cómo detectarlo

## Miniatura
Fondo #09090b. Un gráfico de barras semanales que empieza lleno en 1986 y tiene un hueco enorme antes de 2022 en una de las filas; una etiqueta con dos nombres, uno tachado en rojo (#e11d2a). Texto grande: «HUECO ANTES DE 2022». Logo ATLAS en la esquina inferior derecha. (No repite las palabras de los títulos.)

---

## VIDEO LARGO (16:9, ≈ 4:32)

**[0:00 — Gancho]** (pantalla — BOCETO: filas por mercado con barras que empiezan en 1986, 1987 y 1999; la fila del dólar neozelandés está vacía hasta 2022; una etiqueta cambia de «NEW ZEALAND DOLLAR» a «NZ DOLLAR» el 1-feb-2022)
Descargué hasta 40 años de posicionamiento de especuladores. Seis de los siete pares tienen historia antes de 2022. El dólar neozelandés empieza el 8 de febrero de 2022, no porque el contrato no existiera, sino porque tenía otro nombre y mi descarga filtra por nombre.

**[0:18 — Este es el experimento #44]** (pantalla — BOCETO: rótulo «EXPERIMENTO #44 · POSICIONAMIENTO COT (DATOS)» con el logo ATLAS; la URL pequeña debajo)
Este es el experimento #44 de ATLAS Lab: Posicionamiento COT, datos. Todos los resultados están en la página del experimento. Es un paso de datos, sin backtest. Hoy cuento lo que más enseña de él: las trampas de los datos gratis y cómo se detectan.

**[0:36 — Qué se descargó]** (pantalla — BOCETO: tarjeta params_view: API pública de la CFTC · especuladores (non-commercial) · semanal · posición neta sobre interés abierto · euro, libra, yen, dólar australiano, canadiense y neozelandés, franco suizo y oro)
El COT es un informe semanal de la CFTC, una agencia del gobierno de EE. UU., sobre cuántas posiciones largas, apuestas a que sube el precio, y cortas, apuestas a que baja, tienen distintos grupos en los futuros. Me interesan los especuladores, que la CFTC llama no comerciales. Para cada mercado guardé su posición neta sobre el interés abierto, el total de contratos abiertos. La fuente es una API pública, sin clave.

**[1:05 — Trampa 1: el contrato que cambió de nombre]** (pantalla — BOCETO: línea de tiempo del dólar neozelandés: «hasta el 1-feb-2022: NEW ZEALAND DOLLAR» (gris, fuera del filtro) y «desde el 8-feb-2022: NZ DOLLAR» (verde, dentro); un cursor pregunta «¿y antes?»)
La primera trampa. Mi código pide a la API todos los contratos cuyo nombre contiene cierto texto. El contrato del dólar neozelandés se llamaba «New Zealand Dollar» hasta el 1 de febrero de 2022, y el filtro busca «NZ Dollar», así que solo recoge desde el 8 de febrero de 2022. Todo lo anterior existe, pero mi descarga no lo ve. Resultado: de siete pares, seis tienen historia antes de 2022.

**[1:33 — Trampa 2: los contratos cruzados]** (pantalla — BOCETO: checklist amarilla de exp_details.algo: «euro, libra, yen: contratos cruzados mezclados (EURO FX/BRITISH POUND desde 10-jun-2014 · EURO FX/JAPANESE YEN desde 1-ago-2017)» · «oro: índice Goldman-Sachs y micro oro»)
La segunda trampa va al revés: el filtro recoge de más. Al buscar «Euro FX», entran también los contratos cruzados, EURO FX contra libra desde el 10 de junio de 2014 y EURO FX contra yen desde el 1 de agosto de 2017, que no son apuestas sobre el euro frente al dólar. Con la libra y el yen pasa algo parecido, y en el oro entran el índice Goldman-Sachs y el micro oro. Esas series mezclan posiciones de otros mercados.

**[2:04 — La cobertura real]** (pantalla — BOCETO: línea de tiempo con barras por mercado: libra, yen, CAD, CHF y oro desde el 15-ene-1986; AUD desde el 30-ene-1987; euro desde el 5-ene-1999; NZD desde el 8-feb-2022; fin el 2-jun-2026)
Y la cobertura de cada serie. Libra, yen, dólar canadiense, franco suizo y oro empiezan el 15 de enero de 1986. El dólar australiano, el 30 de enero de 1987. El euro, el 5 de enero de 1999. El neozelandés, el 8 de febrero de 2022. Todos terminan el 2 de junio de 2026. Unos 40 años en la mayoría de los mercados.

**[2:29 — Cómo se detectan]** (pantalla — BOCETO: cuatro tarjetas que se marcan: «primera y última fecha de cada serie» · «qué contratos entra cada filtro» · «¿el resultado cambia sin el problema?» · «decir la limitación»)
Cuatro hábitos para detectar estas trampas. Uno: mirar la primera y la última fecha de cada serie antes de usarla. Dos: revisar qué contratos entran realmente en cada filtro. Tres: repetir la prueba sin el problema y ver si el resultado cambia. Cuatro: escribir la limitación donde el espectador la vea. Eso es lo que hice, y por eso las dos trampas están en la ficha del experimento.

**[2:56 — Qué efecto tuvo en el experimento 45]** (pantalla — BOCETO: tarjeta del experimento 45: «Sharpe 2014–2024: −0.28 con 7 pares · −0.25 sin el dólar neozelandés» y «2007–2013: −1.37 · −1.30»; aviso «contratos cruzados: sin cuantificar»)
En el experimento 45 usé estos datos para probar ir contra los especuladores. El dólar neozelandés no tiene señal hasta el 3 de febrero de 2023, así que antes de esa fecha operan seis pares. Sin ese par, el Sharpe es menos 0.25 en 2014–2024 y menos 1.30 en 2007–2013, frente a menos 0.28 y menos 1.37. El hueco casi no cambia el resultado. El efecto de los contratos cruzados, en cambio, no se midió, y por eso conviene repetir la descarga con series limpias.

**[3:30 — Lo que este experimento no es]** (pantalla — BOCETO: tres iconos tachados «backtest», «curva de capital», «rentabilidad»; texto «paso de datos»)
Qué no es este experimento: un backtest. No opera, no tiene curva de capital y no prueba rentabilidad; por eso su veredicto es no concluyente. Pero un dato bien revisado vale más que una idea sin datos, y uno mal revisado puede dar una conclusión sobre algo que no mediste.

**[3:50 — Con tu capital]** (pantalla — BOCETO: la tarjeta «Con tu capital» vacía con el mensaje de la web: «No hay cartera: es la descarga del posicionamiento COT»; nota: «para ver dólares, experimento 45»)
Este experimento no tiene cuenta ni curva de capital: es la descarga del posicionamiento COT, sin cifras en dinero. Para ver dólares en juego, mira el experimento 45, donde la cuenta se cierra con −$10,219 sobre $100,000 simulados.

**[4:05 — Ficha del experimento #44]** (pantalla — BOCETO: tarjeta de ficha con sello «NO CONCLUYENTE», cuatro líneas y la URL atlas-lab-one.vercel.app/e/44; logo ATLAS)
Ficha del experimento #44. Estado: no concluyente, es un paso de datos. Cifra clave: hasta 40 años de historia semanal; 6 de los 7 pares con datos antes de 2022. Filtro que decidió: ninguno; aquí no hay backtest. Lección: revisa fechas y contratos de cada serie, y escribe las limitaciones. Revísalo completo en atlas-lab-one.vercel.app/e/44. Contenido educativo, no es asesoría financiera. El trading no se promete: se prueba.

---

## SHORT (9:16, ≈ 47 s)
Título del Short: Un cambio de nombre me borró años de datos #shorts
Fórmula visual (CLAUDE.md del canal): b-roll vertical real con overlay 0.6, Ken Burns alternado, subtítulos karaoke en MAYÚSCULAS con cifras en rojo, ticker arriba, whoosh + flash en cada corte; golpe (bass + sacudida) solo en 0-3 s y 28-40 s.

**[0-3 s]** "Un cambio de nombre me borró la historia del dólar neozelandés antes de 2022."
- Boceto: b-roll de un archivo o carpeta siendo borrado (kb=in); «2022» gigante en blanco con un hueco rojo a la izquierda; golpe de bass.

**[3-14 s]** "Descargué el COT, el posicionamiento semanal de los especuladores. Mi código filtra por nombre. Ese contrato se llamaba «New Zealand Dollar» hasta el 1 de febrero de 2022."
- Boceto: etiqueta con dos nombres, uno tachado; línea de tiempo con un corte en 2022.

**[14-28 s]** "Resultado: solo hay datos desde el 8 de febrero de 2022. Y hay otra trampa: el filtro del euro, la libra y el yen suma contratos cruzados, y el del oro, el micro oro."
- Boceto: tarjeta amarilla «LIMITACIÓN» con los cuatro nombres.

**[28-40 s]** "¿Importó? Con esos datos, el COT contrario dio Sharpe menos 0.28. Sin el dólar neozelandés, menos 0.25. El hueco casi no cambió el resultado."
- Boceto: rótulo «DATO DEL EXPERIMENTO 45»; dos barras −0.28 y −0.25; sacudida.

**[40-48 s]** "Video completo en el canal. Experimento 44 completo en el enlace. No es asesoría financiera. Datos gratis: revisa siempre la primera fecha."
- Boceto: sello «NO CONCLUYENTE»; logo ATLAS y «EXPERIMENTO #44 · ENLACE». Loop: la frase final enlaza con el gancho (la primera fecha).

## Descripción (YouTube)
**Video largo**
https://atlas-lab-one.vercel.app/e/44?utm_source=youtube&utm_medium=video&utm_campaign=exp044-t2
Ficha del experimento #44 (posicionamiento COT, datos): no concluyente, es un paso de datos. Hasta 40 años de historia semanal de los especuladores (libra, yen, dólar canadiense, franco suizo y oro desde el 15-ene-1986); el dólar neozelandés solo desde el 8-feb-2022 por un cambio de nombre del contrato, y contratos cruzados mezclados en euro, libra y yen.
Dos trampas de los datos gratis, cómo se detectan y qué efecto tuvieron en el experimento 45 (Sharpe −0.28 con el dólar neozelandés y −0.25 sin él).

Capítulos: 0:00 Gancho · 0:18 Este es el experimento #44 · 0:36 Qué se descargó · 1:05 Trampa 1: el contrato que cambió de nombre · 1:33 Trampa 2: los contratos cruzados · 2:04 La cobertura real · 2:29 Cómo se detectan · 2:56 Qué efecto tuvo en el experimento 45 · 3:30 Lo que este experimento no es · 3:50 Con tu capital · 4:05 Ficha del experimento #44

**Short**
https://atlas-lab-one.vercel.app/e/44?utm_source=youtube&utm_medium=short&utm_campaign=exp044-t2
Experimento #44: el dólar neozelandés solo tiene datos COT desde el 8-feb-2022 porque el contrato cambió de nombre. No concluyente (paso de datos).

Contenido educativo. No es asesoría financiera ni recomendación de inversión.

Etiquetas: COT, CFTC, calidad de datos, datos gratis, contratos cruzados, posicionamiento, forex, futuros, backtest, limitaciones, ATLAS Lab

## Rúbrica (autoevaluación — criterios del CLAUDE.md del canal, 1-5)
| hook_0_3s | ritmo | promesa_cumplida | potencial_loop | claridad_no_traders | honestidad_atlas | audio | cta |
|---|---|---|---|---|---|---|---|
| 4 | 4 | 5 | 4 | 4 | 5 | 4 | 4 |

Promedio: **4.25** → cumple el corte (≥ 4.0; hook ≥ 4 y honestidad 5).
Notas: el hook es un detalle concreto y verificable (fecha del cambio de nombre) con una consecuencia clara. Es un tema de honestidad: publica la limitación y mide su efecto (−0.28 contra −0.25). Punto débil: «contratos cruzados» necesita la imagen de los nombres de contrato en pantalla.

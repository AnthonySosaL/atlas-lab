# Experimento #44 — Posicionamiento COT (datos)

Estado del guion: **BORRADOR — pendiente de aprobación**
Estado del experimento: **NO CONCLUYENTE** (es un paso de datos: no opera ni prueba rentabilidad; habilita la prueba contraria de #45)
Serie: **G (epílogo)** — el plan-series.md llega hasta #40; este es el segundo de los «caminos futuros» del veredicto de #40 (posicionamiento COT).
Datos usados: `experiments.json` (v=44: analysis, description, verdict, notes, metrics, kpis, params_view, capital, chart) · `exp_details.json` (algo con la cobertura por mercado; sin curva). No hay `series/` ni fila en la tabla «Con tu capital»; para el payoff se cita la fila #45 de esa tabla (`docs/youtube/`).
**Datos justos:** es un experimento de datos, sin resultado de rentabilidad propio. Se recomienda publicarlo como video corto (≈4 min) o como capítulo inicial del video de #45; su Short se apoya en el resultado de #45, marcado como tal.

## Títulos (opciones)
1. 40 años de lo que apuestan los especuladores, gratis (COT)
2. Descargué el COT de la CFTC: 7 monedas y oro desde 1986
3. Cada semana EE. UU. publica esto: lo descargué (COT, CFTC)

## Miniatura
Fondo #09090b. Texto gigante blanco "40 AÑOS"; debajo, en rojo (#e11d2a), "COT". Elemento visual: una hilera de barras largas (verde) y cortas (roja) que se ordenan como un histograma semanal. Logo ATLAS en la esquina inferior derecha. (No repite los títulos.)

---

## VIDEO LARGO (16:9, ≈ 4:04 · experimento de datos: rango de 4 a 6 min)

**[0:00 — Gancho]** (pantalla — BOCETO: contador de semanas que corre desde «1986» hasta «2026» mientras se llena una tabla de barras largas y cortas; texto «40 años · semanal · gratis»)
Cada semana, una agencia del gobierno de EE. UU., la CFTC, publica cuánto apuestan los especuladores en los futuros de divisas y de oro. Es público, es gratis y hay hasta 40 años de historia. Descargué todo eso para siete pares de divisas y el oro.

**[0:21 — Qué es el COT]** (pantalla — BOCETO: gráfico de dos barras opuestas «posiciones largas = apuestas a que sube» y «posiciones cortas = apuestas a que baja»; un balance neto dividido por el total de contratos abiertos)
COT son las siglas, en inglés, de Compromisos de los Operadores. Cada semana la CFTC publica cuántas posiciones largas, apuestas a que el precio sube, y cuántas cortas, apuestas a que baja, tienen distintos grupos. Los comerciales son empresas que usan los futuros para protegerse de riesgos reales de su negocio. Me interesa el otro grupo, el de los especuladores, que la CFTC llama no comerciales: quienes apuestan por el precio. Con eso calculé una cifra por mercado: la posición neta sobre el interés abierto, o sea, el balance entre largos y cortos dividido por el total de contratos abiertos.

**[1:03 — Qué descargué]** (pantalla — BOCETO: tarjeta params_view: fuente API pública de la CFTC · grupo especuladores (non-commercial) · frecuencia semanal · mercados: euro, libra, yen, dólar australiano, canadiense y neozelandés, franco suizo y oro)
Descargué los futuros del euro, la libra, el yen, el dólar australiano, el canadiense y el neozelandés, el franco suizo y el oro: siete pares de forex más oro. La fuente es la API pública de la CFTC, sin clave, y el dato es semanal.

**[1:23 — Desde cuándo hay datos]** (pantalla — BOCETO: línea de tiempo con barras por mercado: libra, yen, CAD, CHF y oro desde el 15-ene-1986; AUD 30-ene-1987; euro 5-ene-1999; NZD 8-feb-2022; fin 2-jun-2026; es el chart del experimento: 40 años · 7 pares · 6 con historia antes de 2022)
La cobertura varía. La libra, el yen, el dólar canadiense, el franco suizo y el oro empiezan el 15 de enero de 1986: unos 40 años. El dólar australiano, el 30 de enero de 1987. El euro, el 5 de enero de 1999. Y el dólar neozelandés, solo desde el 8 de febrero de 2022, porque hasta el 1 de febrero de 2022 el contrato tenía otro nombre y la descarga, que filtra por nombre, no lo recoge antes. Los datos llegan hasta el 2 de junio de 2026. Seis de los siete pares tienen historia antes de 2022.

**[2:05 — La limitación que hay que conocer]** (pantalla — BOCETO: checklist de exp_details.algo en amarillo: «euro/libra/yen: contratos cruzados mezclados (EURO FX/BRITISH POUND desde 10-jun-2014; EURO FX/JAPANESE YEN desde 1-ago-2017)» · «oro: índice Goldman-Sachs y micro oro» · «NZD: sin historia antes de 2022»)
Hay una limitación que prefiero decir de frente. La descarga filtra por el nombre del mercado y suma todos los contratos que lo contienen. En euro, libra y yen eso mezcla contratos cruzados: EURO FX contra libra desde el 10 de junio de 2014, y EURO FX contra yen desde el 1 de agosto de 2017. En el oro entran el índice Goldman-Sachs y el micro oro. Esas series mezclan posiciones de otros mercados, y conviene repetir la descarga con series limpias.

**[2:40 — Lo que este experimento no es]** (pantalla — BOCETO: tres iconos tachados: «backtest», «curva de capital», «rentabilidad»; texto: «paso de datos»)
También conviene decir qué no es. Es un paso de datos: no opera, no tiene curva de capital y no prueba rentabilidad. Su resultado es una tabla lista para usar, con hasta 40 años de historia, y por eso su veredicto es no concluyente. Aun así, un buen dato vale más que una idea sin datos: sin esta tabla no habría prueba posible.

**[3:08 — Para qué sirvió]** (pantalla — BOCETO: flecha desde la tabla COT hasta la tarjeta del experimento 45 («comprar cuando los especuladores están muy vendidos, vender cuando están muy comprados»); dato de la tarjeta de capital del 45: −$10,219 sobre $100,000 simulados, 2014–2022, sello ✕)
Estos datos hicieron posible la prueba contraria del experimento 45: ir en contra de los especuladores cuando están en sus extremos. Adelanto el resultado: esa cuenta se cortó, con −$10,219 sobre $100,000 simulados entre 2014 y 2022. Lo cuento completo en el siguiente video.

**[3:28 — Con tu capital]** (pantalla — BOCETO: la tarjeta «Con tu capital» vacía con el mensaje de la web: «No hay cartera: es la descarga del posicionamiento COT»)
Este experimento no tiene cuenta ni curva de capital: es la descarga del posicionamiento COT, sin cifras en dinero. Para ver dólares en juego, mira el experimento 45.

**[3:42 — Conclusión y cierre]** (pantalla — BOCETO: sello «NO CONCLUYENTE» sobre la tabla de barras; logo ATLAS + URL)
Veredicto: no concluyente. Es un paso de datos, sin prueba de rentabilidad: reúne hasta 40 años de posicionamiento de los especuladores, con la limitación de los contratos mezclados. Todos los datos están en atlas-lab-one.vercel.app, experimento 44. Contenido educativo, no es asesoría financiera. El trading no se promete: se prueba.

---

## SHORT (9:16, ≈ 49 s)
Título del Short: 40 años de lo que apuestan los especuladores #shorts
Fórmula visual (CLAUDE.md del canal): b-roll vertical real con overlay 0.6, Ken Burns alternado, subtítulos karaoke en MAYÚSCULAS con cifras en rojo, ticker arriba, whoosh + flash en cada corte; golpe (bass + sacudida) solo en 0-3 s y 30-40 s.

**[0-3 s]** "40 años de lo que apuestan los especuladores. Gratis."
- Boceto: b-roll de pantalla de bolsa con barras (kb=in); «40 AÑOS» gigante en blanco y «GRATIS» en verde; golpe de bass.

**[3-15 s]** "Se llama COT y lo publica la CFTC cada semana: cuántas posiciones largas y cortas tienen los especuladores en futuros de divisas y de oro. Lo descargué para siete pares y el oro."
- Boceto: dos barras opuestas (largos / cortos) que se actualizan cada semana; texto «CADA SEMANA».

**[15-30 s]** "Los más antiguos empiezan el 15 de enero de 1986: libra, yen, dólar canadiense, franco suizo y oro. El dólar australiano, en 1987. El euro, en 1999. El dólar neozelandés, solo desde 2022."
- Boceto: línea de tiempo con tick por mercado (1986, 1987, 1999, 2022) y la banda de 40 años.

**[30-40 s]** "Un aviso: la descarga mezcla contratos cruzados en euro, libra, yen y oro. Lo publico como limitación: conviene repetirla con series limpias."
- Boceto: tarjeta amarilla «LIMITACIÓN» con los cuatro nombres; sacudida suave.

**[40-49 s]** "Con estos datos probé ir contra los especuladores, y esa cuenta se cortó. Video completo en el canal. No es asesoría financiera. Cuarenta años de datos… ¿sirven?"
- Boceto: rótulo «DATO DEL EXPERIMENTO 45»; sello ✕; logo ATLAS. Loop: la pregunta final enlaza con «40 años de lo que apuestan los especuladores».

## Descripción (YouTube)
Paso de datos: descargué el posicionamiento semanal de los especuladores (COT, de la CFTC) en futuros de 7 pares de forex y oro, con hasta 40 años de historia (libra, yen, dólar canadiense, franco suizo y oro desde el 15 de enero de 1986; euro desde 1999; dólar neozelandés desde 2022). Incluye una limitación: mezcla contratos cruzados en euro, libra, yen y oro. Experimento #44, no concluyente (no prueba rentabilidad).

Datos completos: https://atlas-lab-one.vercel.app (experimento #44)

Capítulos: 0:00 Gancho · 0:21 Qué es el COT · 1:03 Qué descargué · 1:23 Desde cuándo hay datos · 2:05 La limitación que hay que conocer · 2:40 Lo que este experimento no es · 3:08 Para qué sirvió · 3:28 Con tu capital · 3:42 Conclusión y cierre

Contenido educativo. No es asesoría financiera ni recomendación de inversión.

Etiquetas: COT, CFTC, Commitments of Traders, especuladores, posicionamiento, forex, futuros, datos gratis, oro, backtest, ATLAS Lab

## Rúbrica (autoevaluación — criterios del CLAUDE.md del canal, 1-5)
| hook_0_3s | ritmo | promesa_cumplida | potencial_loop | claridad_no_traders | honestidad_atlas | audio | cta |
|---|---|---|---|---|---|---|---|
| 4 | 4 | 4 | 4 | 4 | 5 | 4 | 4 |

Promedio: **4.13** → cumple el corte (≥ 4.0; hook ≥ 4 y honestidad 5).
Notas: el hook usa el arquetipo «dato oculto y gratis» con una cifra (40 años) y una fuente oficial, pero sin conflicto propio: es el hook más débil de este grupo y el 4 es ajustado. Alternativa para A/B si la retención inicial es baja: «Hacer lo contrario de los especuladores me cortó la cuenta. Los datos son gratis.» Se recomienda no producirlo suelto o fusionarlo con #45.

## Otros temas de este experimento
1. Tema 1 (este archivo) — `exp-044-datos-cot-cftc.md` — 40 años de lo que apuestan los especuladores, gratis (COT)
2. Tema 2 — `exp-044-t2-cambio-de-nombre-borra-historia.md` — un cambio de nombre y los contratos cruzados (calidad de datos)

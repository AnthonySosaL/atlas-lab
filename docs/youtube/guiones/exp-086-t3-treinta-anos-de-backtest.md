# Experimento #86 — Tema 3: «30 años de backtest» (qué pedirle a un backtest antes de creerlo)

Tema 3 de 3 del experimento #86 · Qué aporta frente a los otros temas: es el tema del método. Usa una sola forma del experimento (la misma regla da 0.08, −1.00 y −0.32 según la época) para enseñar tres cosas que un backtest largo puede esconder (épocas mezcladas, costos, número de intentos) y cierra con cuatro preguntas que cualquiera puede hacer. No afirma nada sobre el backtest del TikTok, que no se puede verificar. El tema 1 cuenta el resultado completo de las 10 formas; el tema 2 trata qué vela es «grande».
Estado del guion: **BORRADOR — pendiente de aprobación**
Estado del experimento: **murió** (las 10 formas murieron sin pasar ningún filtro, 0 de 5; la peor llega a −1.55 fuera de muestra) · Serie A — «Probé la estrategia de TikTok» (plan-series.md) · 1 largo + 1 Short
Datos usados: `experiments.json` (v=86: kpis, metrics, forms, analysis, notes, period), `exp_details.json` (extra-v86: algo, code, filters), `series/extra-v86.json` (1.ª curva = «MA200 + volumen>2.0x(20)»; 2.ª = «Sin estrategia»), tabla «Con tu capital» de `docs/youtube`; el contador de 33,363 intentos del #81.
Producción (CLAUDE.md del canal): b-roll real detrás de cada escena con overlay oscuro 0.6, Ken Burns alternando in/out, subtítulos karaoke en MAYÚSCULAS con palabras clave en rojo, un dato visual por escena, golpe de bajo + sacudida solo en 1–2 momentos. Colores: rojo `#e11d2a`, verde `#22c55e`, fondo `#09090b`. Cifras en dígitos aquí; en el campo `tts` del JSON, en palabras.

## Títulos (3 opciones)
1. Misma regla, tres épocas: 0.08, −1.00 y −0.32. Lo que esconde un backtest largo
2. «30 años de backtest»: las 4 preguntas que hay que hacer antes de creerlo
3. Un solo número para todo el periodo: lo que no ves en un backtest

## Miniatura (pensada para el título 1)
Fondo `#09090b`. Una línea de tiempo larga con tres tramos de colores (rojo, verde pálido, rojo) y las cifras −1.00, 0.08 y −0.32 sobre cada uno; encima, una etiqueta «UN SOLO NÚMERO ?». Texto grande: «¿QUÉ ESCONDE?» (2 palabras, sin repetir el título). Logo ATLAS arriba a la derecha.

---

## VIDEO LARGO (16:9, ≈ 5.5 min)

**[0:00 — Gancho]** (pantalla: tres épocas, tres cifras)
La misma regla da un Sharpe de 0.08 en una época, −1.00 en otra y −0.32 en la tercera. Si te muestran un solo número para todo el periodo, no ves esto.
BOCETO: línea de tiempo con tres tramos y tres barras: −1.00 (2007–13), 0.08 (2014–20) y −0.32 (2021–24). Golpe de bajo en −1.00. kb=in.

**[0:15 — Qué es este experimento]** (pantalla: rótulo con el número y el nombre)
Este es el experimento #86 de ATLAS Lab: TikTok 2, MA200 a favor de la tendencia más vela de alto rango. Todos los resultados están en la página del experimento.
BOCETO: rótulo en rojo y blanco «EXPERIMENTO #86» con el nombre debajo, sobre la línea de tiempo atenuada (overlay 0.6). Whoosh corto. kb=out.

**[0:25 — Lo que promete el TikTok]** (pantalla: «+30% al año» y «30 años de backtest»)
Un TikTok promete +30% al año con 30 años de backtest. No puedo verificar ese backtest, y no voy a decir nada sobre él. Lo que sí puedo hacer es probar la versión diaria de su idea con reglas que se puedan revisar, y usarla para mostrar qué conviene pedirle a cualquier backtest. La regla: la media de 200 días como dirección y entrar en una vela de alto volumen, con un múltiplo del promedio. No probé la pirámide ni el ratio de 1 a 3.
BOCETO: «+30%» y «30 años» en pantalla; a un lado, la lista «Probado: versión diaria» y «No probado: pirámide ×3, ratio 1:3». Cartel gris: «Sobre el backtest del TikTok: no verificable». kb=in.

**[1:15 — Problema 1: las épocas se mezclan]** (pantalla: una forma, tres periodos)
Primer problema. Un solo número para todo el periodo mezcla épocas muy distintas. Aquí la mejor forma de diseño, la media de 200 días con volumen mayor que 2.0 veces su promedio, da 0.08 en 2014–2020. Pero en 2007–2013, con la crisis de 2008, da −1.00. Y en 2021–2024, −0.32. El Sharpe es la ganancia por unidad de riesgo. Un promedio de todo hubiera tapado la diferencia. Por eso separo el periodo de diseño de dos periodos que la estrategia nunca vio.
BOCETO: tres barras por época con la forma «MA200 + volumen>2.0x(20)»; una barra gris «todo el periodo mezclado» sobre ellas, con un signo de interrogación. kb=out.

**[2:10 — Problema 2: los costos]** (pantalla: dos rangos)
Segundo problema: los costos. Sin contar costos, el Sharpe de estas formas va de −0.73 a +0.44, según la forma y el periodo. Con 3 puntos básicos por rotación, casi todo queda en negativo. Un backtest que no dice si incluye costos puede ser un backtest que no pagó nada por entrar y salir.
BOCETO: dos franjas: «sin costos: de −0.73 a +0.44» y «con costos: casi todo negativo», con una cuña roja entre ellas que dice «3 bps por rotación». kb=in.

**[3:00 — Problema 3: cuántas ideas se probaron]** (pantalla: contador de intentos)
Tercer problema: cuántas ideas se probaron hasta encontrar esta. Si pruebas miles de reglas, la mejor siempre luce bien por pura suerte. Por eso uso el Deflated Sharpe, que descuenta eso, con un contador global de 33,363 intentos. Aquí su máximo es 0.001, cuando se exige 0.95. Y de las diez formas, ninguna pasa ningún filtro.
BOCETO: contador 33,363 que sube; barra 0.001 frente a la línea 0.95; sello «0 / 5 filtros». kb=out.

**[3:45 — Mis datos, para ser claros]** (pantalla: línea de tiempo 2007–2024)
Una precisión: mis datos de esta cesta, siete pares de divisas más oro, van de 2007 a 2024. No son 30 años. Eso no desmiente ni confirma nada sobre el backtest de otra persona; solo dice qué prueba hay aquí.
BOCETO: línea de tiempo 2007–2024 con las tres épocas rotuladas. Cartel ámbar: «Esta prueba: 2007–2024».

**[4:15 — Cuatro preguntas para cualquier backtest]** (pantalla: checklist)
Las cuatro preguntas. Uno: ¿separó una época de diseño de otras que no vio? Dos: ¿incluye costos de operación? Tres: ¿dice cuántas ideas probó hasta llegar a esta? Cuatro: ¿se puede reproducir con reglas exactas? Si falta una, el número es una opinión.
BOCETO: cuatro casillas que se marcan una a una; las de «épocas» y «costos» y «intentos» llevan su cifra de este experimento. kb=in.

**[4:50 — Con tu capital]** (pantalla: tarjeta de capital)
La curva de esa forma sobre la cesta de 8 entre 2007 y 2024. Con 100,000 dólares pierde 5,692. Comprar y esperar la misma cesta gana 14,407. Con 10,000 dólares serían unos −569 contra +1,441.
BOCETO: curvas reales de `series/extra-v86.json` (estrategia roja, ligeramente a la baja; «Sin estrategia» blanca subiendo) con contadores finales.

**[5:10 — Conclusión]**
Un backtest largo no es una prueba si mezcla épocas, ignora costos y no cuenta intentos. Aquí, la versión diaria de esta idea no pasó ningún filtro. El trading no se promete: se prueba.

**[5:30 — Ficha del experimento #86]** (pantalla: tarjeta con la ficha y la URL)
Ficha del experimento #86. Estado: murió. Cifra clave: la misma regla da 0.08, −1.00 y −0.32 según la época; con 100,000 dólares pierde 5,692. Filtro que decidió: ninguno se supera, 0 de 5; el Deflated Sharpe máximo es 0.001. Lección: pide épocas separadas, costos y número de intentos. Revísalo completo en atlas-lab-one.vercel.app/e/86.
BOCETO: tarjeta con el número «#86», el sello «MURIÓ» en rojo, tres líneas (cifra clave, filtro que decidió, lección) y la URL `atlas-lab-one.vercel.app/e/86` grande abajo. kb=in.

**[5:50 — Cierre]**
Todos los datos en atlas-lab-one.vercel.app, experimento 86. Contenido educativo, no es asesoría financiera.

---

## SHORT (9:16, ≈ 48 s)

**[0-3 s]** «La misma regla: Sharpe de 0.08 en una época. Y menos 1.00 en otra.»
BOCETO: barra 0.08 que salta a −1.00 sobre b-roll de gráfico (kb=in), overlay 0.6; golpe de bajo.

**[3-15 s]** «Un TikTok promete 30% al año con 30 años de backtest. Probé su versión diaria: media de 200 días y una vela con el doble de volumen.»
BOCETO: «+30%» y vela grande sobre la MA200 (kb=out); ticker arriba.

**[15-30 s]** «Con un solo número no ves esto: 0.08 de 2014 a 2020, menos 1.00 de 2007 a 2013, menos 0.32 de 2021 a 2024.»
BOCETO: línea de tiempo con tres barras; tick en cada cifra.

**[30-42 s]** «Pide épocas separadas, costos y cuántas ideas probaron. Aquí, cero de diez formas pasan un filtro.»
BOCETO: checklist de tres casillas y sello «0 / 10».

**[42-48 s]** «El video completo está en el canal, y el experimento #86 completo, en el enlace. Un backtest largo sin épocas separadas esconde esto.»
BOCETO: texto final «Video completo en el canal · Experimento #86 completo en el enlace» + pequeño «No es asesoría financiera · El trading no se promete: se prueba». Loop: «esconde esto» responde al «menos 1.00 en otra» del arranque.

---

## Descripción de YouTube (video largo)
https://atlas-lab-one.vercel.app/e/86?utm_source=youtube&utm_medium=video&utm_campaign=exp086-t3
Ficha del experimento #86: murió · 10 formas, 0 de 5 filtros · la misma regla (MA200 + volumen > 2.0 veces) da Sharpe 0.08, −1.00 y −0.32 en tres épocas · con $100,000: −$5,692 contra +$14,407 de comprar y esperar.
Uso la versión diaria de un TikTok que promete «+30% al año con 30 años de backtest» para explicar qué pedirle a cualquier backtest: épocas separadas, costos y número de intentos. No afirmo nada sobre el backtest del TikTok; mis datos van de 2007 a 2024.
Contenido educativo. No es asesoría financiera ni recomendación de inversión.

## Descripción de YouTube (Short)
https://atlas-lab-one.vercel.app/e/86?utm_source=youtube&utm_medium=short&utm_campaign=exp086-t3
Ficha del experimento #86: murió · la misma regla: Sharpe 0.08, −1.00 y −0.32 según la época · 0 de 10 formas pasan un filtro.
Contenido educativo. No es asesoría financiera.

## Capítulos
0:00 Gancho · 0:15 Qué es este experimento · 0:25 Lo que promete el TikTok · 1:15 Las épocas se mezclan · 2:10 Los costos · 3:00 Cuántas ideas se probaron · 3:45 Mis datos · 4:15 Cuatro preguntas · 4:50 Con tu capital · 5:10 Conclusión · 5:30 Ficha del experimento

## Etiquetas
backtest, 30 años de backtest, estrategia de tiktok, fuera de muestra, costos de trading, deflated sharpe, sobreajuste, media de 200 días, vela de alto volumen, forex, atlas lab, trading con datos

## Rúbrica (autoevaluación, 1–5)
| Pieza | hook_0_3s | ritmo | promesa_cumplida | potencial_loop | claridad_no_traders | honestidad_atlas | audio | cta | Promedio |
|---|---|---|---|---|---|---|---|---|---|
| Largo | 4 | 4 | 5 | 4 | 4 | 5 | 4 | 4 | 4.2 |
| Short | 4 | 4 | 5 | 5 | 4 | 5 | 4 | 4 | 4.4 |

Hook ≥ 4 ✓ · honestidad 5 ✓. Punto débil: el tema toca un backtest ajeno; el guion dice dos veces que no se verifica y no lo valora. Sin nombre ni imagen de la persona. Lo no probado (pirámide y ratio 1:3) se declara en el bloque 0:25 y en la descripción.

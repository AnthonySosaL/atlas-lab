# Experimento #12 — Prueba de estrés por régimen · Tema 2: Cómo se fabrica un valor esperado: el remuestreo por bloques, paso a paso

Tema 2 de 3 del experimento #12. Tema 1: `exp-012-prueba-estres-regimen.md`.
Qué aporta frente a los otros temas: Explica el método: cómo sale cada cifra de valor esperado al barajar bloques de días reales. El tema 1 muestra el resultado en las cuatro ventanas malas y el tema 3 se centra en la ventana más débil, 2014-15.
Estado del guion: **BORRADOR — pendiente de aprobación**
Estado del experimento: **parcial** (en el sitio: neutral). Simulación, sin señales propias.
Serie: E (Gestión de riesgo: lo poco que se sostuvo)
Datos usados: `experiments.json` (v=12: description, params, metrics, kpis, analysis, verdict, notes, capital, period), `exp_details.json` (algo, code, filters), `series/20260607_212532_stress-test-por-regimen-v12.json` (curva 1 = cesta base sin apalancar 2006-2024, curva 2 = comprar y esperar) y la tabla «Con tu capital» de docs/youtube (fila 12). Las cifras con 10,000 dólares son las de la tabla de 100,000 divididas entre 10.

## Títulos (3 opciones)
1. +$3,414 por intento: así se fabrica un número barajando días
2. Remuestreo por bloques (bootstrap) explicado con el COVID de 2020
3. Valor esperado explicado: cuota de $500, probabilidad de pasar y lo que cobras

## Miniatura
Fondo negro de la marca. Una baraja de cartas, cada una con un día del año 2020, que se mezcla en abanico. Texto grande: «+$3,414» (verde) y debajo «BARAJADO» (rojo de marca). Logo ATLAS esquina inferior derecha.

---

## VIDEO LARGO (16:9, ≈ 5:02 min — 4–6 min: tema de una sola idea y pocas cifras)
Ritmo visual: algo cambia en pantalla cada 2-3 s; b-roll real detrás, Ken Burns alterno, subtítulos karaoke, whoosh + flash en cada corte, golpe de bass solo en el momento clave.

**[0:00 — Gancho]** (pantalla: «+$3,414» sobre una baraja de cartas)
En la ventana del COVID, mi simulación dio un valor esperado de +3,414 dólares por intento. Ese número no salió de operar: salió de barajar los días de 2020 como si fueran cartas. Te enseño cómo se fabrica.
> Boceto: cifra «+$3,414» verde enorme; las cartas (días) saltan y se reordenan con whoosh; b-roll de pantallas de bolsa, Ken Burns «in».

**[0:16 — El experimento]** (pantalla: rótulo con el número y el nombre del experimento)
Este es el experimento #12 de ATLAS Lab: Prueba de estrés por régimen. Todos los resultados están en la página del experimento.
> Boceto: rótulo animado «EXPERIMENTO #12» con el nombre «Prueba de estrés por régimen» debajo y el logo ATLAS; whoosh de entrada y fondo de velas con opacidad 0.12.

**[0:25 — El negocio que se calcula]** (pantalla: esquema de dos fases con la cuota)
El negocio que modelo es el del fondeo: pagas una cuota de 500 dólares, haces un examen con apalancamiento ×4 y, si lo pasas, operas una cuenta fondeada a ×2. Sin entrar en las reglas finas, importa una sola pregunta: ¿cuánto dinero espero ganar o perder cada vez que lo intento?
> Boceto: diagrama de las dos fases (examen ×4, cuenta fondeada ×2) con una moneda «$500» a la entrada; al final, un signo de interrogación sobre «¿cuánto por intento?».

**[0:46 — Qué es un valor esperado]** (pantalla: boleto de lotería y fórmula)
Eso es el valor esperado: el resultado promedio si repitieras el intento muchas veces. Piensa en un boleto de lotería: cuesta algo, casi siempre no pasa nada y de vez en cuando hay premio. El valor esperado junta las tres cosas: la cuota, la probabilidad de ganar y el tamaño del premio. En el código es una línea: menos la cuota, más la probabilidad de pasar por lo que cobras si pasas.
> Boceto: boleto con precio «$500»; fórmula animada «−cuota + P(pasar) × cobro esperado» que se arma pieza por pieza con tick en cada término; fondo de velas con opacidad 0.12.

**[1:15 — El problema: una sola historia]** (pantalla: línea de 2020 con signo de interrogación)
Para estimar la probabilidad de pasar hay un problema: el COVID ocurrió una sola vez. Con una sola historia solo sabes lo que pasó, no lo que habría podido pasar. Necesitas muchas historias parecidas, y no existen. Así que se fabrican.
> Boceto: la curva real de 2020 (series, curva 1) como una única línea; a su alrededor aparecen líneas fantasma punteadas con «¿y si?»; Ken Burns «out».

**[1:32 — Remuestrear por bloques]** (pantalla: cortar la curva en trozos y pegarlos en otro orden)
Se llama remuestreo por bloques, o bootstrap. Tomas los retornos diarios de la ventana, los cortas en trozos de días consecutivos y los pegas en otro orden. Cada reordenación es una historia alternativa hecha con días reales. Repites muchas veces y cuentas en cuántas historias pasas el examen. Se usan bloques y no días sueltos para conservar las rachas, porque en el mercado los días malos suelen venir juntos.
> Boceto: la curva real cortada en bloques de colores que se reordenan; cada reordenación dibuja una curva nueva con un semáforo (pasa / no pasa); contador de historias subiendo.

**[2:00 — Una ventana a la vez]** (pantalla: línea de tiempo 2006-2024 con cuatro ventanas)
En este experimento el remuestreo se hace dentro de cada ventana, y solo con los días de esa ventana. La crisis de 2008 va de julio de 2007 a junio de 2009. Dólar y materias primas, de julio de 2014 a febrero de 2016. El COVID es el año 2020 y el mercado bajista, el año 2022. Y de referencia, el periodo completo, de 2006 a 2024.
> Boceto: la curva real de la cesta base (series, curva 1) con cuatro franjas rojas rotuladas con sus fechas y una franja verde «2006-2024»; las franjas entran una a una con tick.

**[2:28 — Los números que salen]** (pantalla: barras por ventana)
Los resultados: crisis de 2008, +1,229 dólares por intento. Dólar y materias primas, +122. COVID, +3,414. Bajista de 2022, +2,147. Y todo 2006-2024, +4,241. Las cuatro ventanas malas dan positivo: el 100%. Es el criterio del experimento: el negocio sirve solo si el valor esperado es positivo en todas las ventanas malas.
> Boceto: gráfico de barras animado con las cinco cifras (kpis del experimento); contador «100% de las ventanas malas > 0» con tick; el +$3,414 se resalta.

**[2:49 — El punto ciego]** (pantalla: caminos suaves contra caída real)
Ahora, el punto ciego. Al barajar bloques cortos, el simulador casi nunca reproduce lo que más daño hace a una cuenta: una caída larga y simultánea de muchos activos. Por eso el remuestreo subestima los drawdowns largos. Y hay una comprobación: con el camino real del experimento 13, la misma idea a ×2 reventó en el COVID, justo la ventana donde el remuestreo daba +3,414.
> Boceto: pantalla dividida: a la izquierda caminos barajados, suaves y verdes; a la derecha la caída vertical y roja de marzo de 2020 con «CUENTA REVENTADA (#13)»; sacudida breve.

**[3:15 — Cómo usarlo bien]** (pantalla: tres hábitos)
Entonces, ¿para qué sirve? Para dimensionar la apuesta: te dice si el negocio tiene margen en promedio y cuánto depende del régimen. No sirve como certificado. Tres hábitos: contrastarlo con el camino real, mirar el peor tramo y no solo el promedio, y recordar que aquí solo se descontó la cuota de 500 dólares, sin costos de operación.
> Boceto: tres tarjetas ámbar que entran una a una: «Contrasta con el camino real», «Mira el peor tramo», «Sin costos de operación»; sello «PARCIAL».

**[3:39 — Con tu capital]** (pantalla: tarjeta «Con tu capital» con aviso)
En la tarjeta del sitio, la curva es la cesta base sin apalancar de 2006 a 2024. Con 10,000 dólares serían unos más 10,512, frente a más 4,560 de la cesta sin estrategia. Con 100,000, más 105,115 contra más 45,601. Ojo: el negocio simulado usa ×4 en el examen y ×2 en la cuenta fondeada, algo que esa curva no muestra y que amplifica ganancias y caídas.
> Boceto: tarjeta de capital con aviso ámbar; las dos curvas de 2006 a 2024; selector $10,000 / $100,000.

**[4:06 — Conclusión]** (pantalla: texto grande)
Veredicto del experimento: parcial. El valor esperado simulado fue positivo en las cuatro ventanas malas, pero un remuestreo no sustituye al camino real. Cuando veas un valor esperado, pregunta cómo se fabricó: qué datos se barajaron y qué no puede ver ese método.
> Boceto: sello «PARCIAL»; debajo, la pregunta «¿qué cartas barajaron?» en blanco.

**[4:24 — Ficha del experimento #12]** (pantalla: tarjeta en pantalla con la ficha y la URL)
Ficha del experimento 12. Estado: parcial (el sitio lo muestra como neutral). Cifra clave: valor esperado simulado positivo en las cuatro ventanas malas, de +$122 (2014-15) a +$3,414 (COVID), y +$4,241 en 2006-2024. Filtro que decidió: el criterio «valor esperado mayor que cero en todas las ventanas malas» pasa en la simulación; con el camino real (#13) la cuenta reventó en el COVID. Lección: el remuestreo subestima los drawdowns largos; la prueba final es el camino real. Revísalo completo en atlas-lab-one.vercel.app/e/12. Contenido educativo, no es asesoría financiera. El trading no se promete: se prueba.
> Boceto: tarjeta con las líneas de la ficha apareciendo una a una (estado, cifra clave, filtro que decidió, lección) y, al pie, la URL «atlas-lab-one.vercel.app/e/12» resaltada; sello del estado del experimento; frase de marca, logo y URL.

---

## SHORT (9:16, ≈ 51 s)
Fórmula visual: b-roll vertical + overlay oscuro 0.6, Ken Burns alternando in/out, subtítulos karaoke en MAYÚSCULAS con las cifras en rojo, whoosh + flash en cada corte, golpe de bass + sacudida solo en el 0-3 s; ticker arriba.

**[0-3 s]** «Este +3,414 dólares salió de barajar cartas.»
> Boceto: texto gigante «+$3,414» verde sobre una baraja de cartas que se mezcla con sacudida; b-roll de bolsa, Ken Burns «in».
**[3-15 s]** «Es el valor esperado de mi negocio de fondeo en el COVID. Se fabrica con remuestreo: tomo los días de 2020, los corto en bloques y los pego en otro orden.»
> Boceto: la curva de 2020 cortada en bloques de colores que se reordenan; Ken Burns «out»; karaoke con «OTRO ORDEN» en rojo.
**[15-25 s]** «Repito eso muchas veces y cuento cuántas historias pasan el examen. Así salen +1,229 en 2008, +122 en 2014-15, +2,147 en 2022 y +4,241 en 2006-2024.»
> Boceto: barras animadas con cada cifra; la de +122 casi invisible; whoosh y flash blanco.
**[25-30 s]** «Las cuatro ventanas malas dan positivo: el 100%. Pero es una simulación.»
> Boceto: contador «100%» con el sello «EN SIMULACIÓN»; Ken Burns «in».
**[30-39 s]** «Barajar bloques cortos no reproduce una caída larga y simultánea. Con el camino real, la cuenta a ×2 reventó en el COVID.»
> Boceto: caminos suaves a la izquierda y caída roja a la derecha con «CUENTA REVENTADA»; golpe de bass breve.
**[39-46 s]** «El video completo está en el canal. Experimento #12 completo en el enlace. No es asesoría financiera.»
> Boceto: texto «Video completo en el canal» y «Experimento #12 en el enlace» con el logo ATLAS.
**[46-51 s]** «La próxima vez que te den un valor esperado, pregunta qué cartas barajaron.»
> Boceto: vuelve la baraja con «+$3,414» (loop con el gancho); corte directo al inicio.

## Descripción (YouTube) — video largo
https://atlas-lab-one.vercel.app/e/12?utm_source=youtube&utm_medium=video&utm_campaign=exp012-t2
Ficha del experimento #12 (Prueba de estrés por régimen): estado parcial. Valor esperado simulado por intento: +$1,229 (2008), +$122 (2014-15), +$3,414 (COVID 2020), +$2,147 (2022) y +$4,241 (2006-2024).
Cómo se calcula el valor esperado de un negocio de fondeo (examen a ×4, cuenta fondeada a ×2, cuota de $500) con remuestreo por bloques: +$1,229 en 2008, +$122 en 2014-15, +$3,414 en el COVID y +$2,147 en 2022, frente a +$4,241 en 2006-2024.
El remuestreo subestima las caídas largas: con el camino real (#13) la cuenta a ×2 reventó en el COVID.
Contenido educativo. No es asesoría financiera ni recomendación de inversión.

## Descripción (YouTube) — Short
https://atlas-lab-one.vercel.app/e/12?utm_source=youtube&utm_medium=short&utm_campaign=exp012-t2
Ficha del experimento #12 (Prueba de estrés por régimen): estado parcial. Valor esperado simulado por intento: +$1,229 (2008), +$122 (2014-15), +$3,414 (COVID 2020), +$2,147 (2022) y +$4,241 (2006-2024).
Un valor esperado de +$3,414 sale de barajar días de 2020 en bloques: así se calcula y qué no puede ver.
Video completo en el canal. Experimento #12 completo en el enlace. Contenido educativo, no es asesoría financiera.

Capítulos: 0:00 Gancho · 0:16 El experimento · 0:25 El negocio que se calcula · 0:46 Qué es un valor esperado · 1:15 El problema: una sola historia · 1:32 Remuestrear por bloques · 2:00 Una ventana a la vez · 2:28 Los números que salen · 2:49 El punto ciego · 3:15 Cómo usarlo bien · 3:39 Con tu capital · 4:06 Conclusión · 4:24 Ficha del experimento #12

Etiquetas: remuestreo por bloques, bootstrap, valor esperado, Monte Carlo, prueba de estrés, prop firm, simulación, COVID 2020, gestión de riesgo, ATLAS Lab, trading con datos, estadística para traders

## Rúbrica (autoevaluación, 1–5)
| Criterio | Short | Largo |
|---|---|---|
| hook_0_3s | 4 | 4 |
| ritmo | 4 | 4 |
| promesa_cumplida | 5 | 5 |
| potencial_loop | 5 | 4 |
| claridad_no_traders | 4 | 4 |
| honestidad_atlas | 5 | 5 |
| audio | 4 | 3 |
| cta | 4 | 4 |
| **Promedio** | **4.38** | **4.13** |

Notas: el gancho es un número del propio experimento con una imagen concreta (las cartas); la honestidad es 5 porque el Short dice «es una simulación» y que el camino real reventó. Se entiende sin haber visto el tema 1.

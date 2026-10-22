# Experimento #12 — Prueba de estrés por régimen

Estado del guion: **BORRADOR — pendiente de aprobación**
Estado del experimento: **parcial** (en el sitio: neutral). Simulación, sin señales propias.
Serie: E (Gestión de riesgo: lo poco que se sostuvo)
Datos usados: `experiments.json` (v=12: description, params, metrics, kpis, analysis, verdict, notes, capital), `exp_details.json` (algo, filters), `series/20260607_212532_stress-test-por-regimen-v12.json` (curva 1 = cesta base sin apalancar 2006-2024) y la tabla «Con tu capital» de docs/youtube (fila 12). Se cita el #13 solo por su veredicto. Las cifras con 10,000 dólares son las de la tabla de 100,000 divididas entre 10.

## Títulos (3 opciones)
1. En el COVID mi simulación decía +$3,414. La cuenta real reventó
2. 2008, 2014-15, COVID y 2022: una prueba de estrés al negocio del fondeo
3. Valor esperado positivo en las 4 crisis… menos una: lo que no ve un Monte Carlo

## Miniatura
Fondo negro de la marca. Texto grande: «4 CRISIS» (blanco) y «¿COVID?» (rojo de marca). Cuatro barras verdes de distinta altura con la del COVID tachada con una grieta roja. De fondo, tenue, la curva real de la serie 1 con las caídas de 2008 y 2020. Logo ATLAS esquina inferior derecha.

---

## VIDEO LARGO (16:9, ≈ 4:27 min — 4–6 min: experimento de una sola idea y pocas cifras)
Ritmo visual: algo cambia en pantalla cada 2-3 s; b-roll real detrás, Ken Burns alterno, subtítulos karaoke, whoosh + flash en cada corte, golpe de bass solo en el momento clave.

**[0:00 — Gancho]** (pantalla: «+$3,414» verde que se rompe)
En la ventana del COVID, mi simulación daba un valor esperado de +3,414 dólares por intento. Pero cuando probé la misma idea sobre el camino real, la cuenta reventó. Este video es una prueba de estrés al negocio del fondeo en cuatro mercados malos, y su conclusión es incómoda: lo que un Monte Carlo no ve puede ser justo lo que te hace perder la cuenta.
> Boceto: cifra «+$3,414» verde enorme; una grieta roja la parte en dos y aparece «CUENTA REVENTADA (#13)». Ken Burns «in» sobre b-roll de bolsa en caída.

**[0:27 — Qué es una prueba de estrés]** (pantalla: línea de tiempo 2006–2024 con cuatro ventanas)
Los bancos y los fondos hacen pruebas de estrés para saber cómo se comportarían en las peores condiciones. No preguntan qué pasa en promedio, sino qué pasa cuando el mercado va mal. Aquí tomo la historia de 2006 a 2024 y marco cuatro ventanas adversas: la crisis de 2008, el dólar y las materias primas de 2014-15, el COVID de 2020 y el mercado bajista de 2022. Más la historia completa para comparar. Si el negocio del fondeo sobrevive en esos tramos, es más robusto que si solo funciona cuando todo sube.
> Boceto: la curva real de la cesta 2006-2024 (series, curva 1) con cuatro franjas rojas rotuladas y una verde «2006-2024».

**[1:05 — Cómo se calculó]** (pantalla: negocio de dos fases)
Es el mismo negocio del experimento anterior: examen a ×4 y cuenta fondeada a ×2, con una cuota de 500 dólares. Para cada ventana remuestreo por bloques solo los retornos de esa ventana, es decir, solo los días de la crisis, y calculo el valor esperado por intento. El criterio que fijé en el código: el negocio «sirve» solo si el valor esperado es positivo en todas las ventanas malas. Es un criterio exigente a propósito: basta con que falle una para que el veredicto no sea favorable.
> Boceto: diagrama de las dos fases (×4 y ×2, cuota $500); regla en pantalla «Sirve = valor esperado > 0 en todas las ventanas malas».

**[1:41 — Resultados]** (pantalla: barras por ventana)
Crisis de 2008: +1,229 dólares por intento. Dólar y materias primas 2014-15: +122. COVID 2020: +3,414. Mercado bajista de 2022: +2,147. Y todo el periodo 2006-2024: +4,241. Las ventanas malas con valor esperado positivo: el 100%. Sobre el papel, el negocio aguanta cuatro crisis. Un resultado así, mirado solo, parece muy sólido, y por eso conviene seguir leyendo la ficha.
> Boceto: gráfico de barras animado con las 5 cifras (`kpis`); las cuatro de crisis en verde decreciente y la de 2006-2024 en verde fuerte; contador «100% de las ventanas malas > 0».

**[2:06 — La ventana débil]** (pantalla: 2014-15)
La más débil es 2014-15: apenas +122 dólares, casi cero. En esa ventana la cesta perdía un 8.8% anual. Es decir, el negocio aguanta, pero depende del régimen: cuando el mercado se deteriora despacio y durante años, el margen desaparece. No hace falta una crisis dramática para que la ventaja se esfume; basta un mercado que lleva demasiado tiempo cayendo.
> Boceto: barra de +$122 casi invisible junto a una flecha descendente «cesta −8.8% anual»; texto «Depende del régimen».

**[2:31 — La trampa del remuestreo]** (pantalla: Monte Carlo contra camino real)
Aquí está el problema. El remuestreo por bloques subestima los drawdowns largos: baraja bloques cortos de días y no reproduce bien una caída sostenida y simultánea de muchos activos. En la ventana del COVID daba +3,414. Pero en el experimento 13, con el camino real, una cuenta a ×2 reventó. Un mercado bajista real sería peor que lo simulado. El Monte Carlo es útil para ver el tamaño de la apuesta; no sustituye al camino real.
> Boceto: pantalla dividida: izquierda, caminos de Monte Carlo barajados y suaves; derecha, la caída real de marzo de 2020, vertical y roja. Texto: «Simulación ≠ camino real».

**[3:03 — Los límites]** (pantalla: tres avisos)
Otros límites. La ventana de 2008 cae en 2007-2013, pero es un remuestreo dentro de cada ventana, no una prueba fuera de muestra de reglas. Y solo cuento la cuota de 500 dólares: no hay costos de operación. Por eso el veredicto es parcial. Es una buena prueba de estrés para un modelo, pero un modelo no es el mercado.
> Boceto: tres tarjetas ámbar «Remuestreo, no fuera de muestra», «Subestima caídas largas», «Sin costos de operación»; sello «PARCIAL».

**[3:28 — Con tu capital]** (pantalla: tarjeta «Con tu capital» con aviso)
Con 10,000 dólares, la curva base sin apalancar de 2006 a 2024 daría unos más 10,512, frente a más 4,560 de la cesta sin estrategia. Con 100,000, la tabla de ATLAS da más 105,115 contra más 45,601. Ojo: el experimento usa ×4 en el examen y ×2 en la cuenta fondeada, que esa curva no muestra y que amplifican ganancias y caídas.
> Boceto: tarjeta de capital con aviso ámbar; las dos curvas de 2006 a 2024; selector $10,000 / $100,000.

**[3:54 — Conclusión y cierre]**
Veredicto: parcial. El valor esperado simulado fue positivo en las cuatro ventanas malas, de +122 a +3,414 dólares, pero el camino real reventó en el COVID. Resiste en la simulación; en la realidad, la prueba es el camino real. Y eso es exactamente lo que pruebo en el siguiente experimento: un bot en una cuenta fondeada, día a día, con datos reales. Todos los datos en atlas-lab-one.vercel.app, experimento 12. Contenido educativo, no es asesoría financiera. El trading no se promete: se prueba.
> Boceto: sello «PARCIAL»; frase de marca, logo y URL.

---

## SHORT (9:16, ≈ 47 s)
Fórmula visual: b-roll vertical + overlay oscuro 0.6, Ken Burns alternando in/out, subtítulos karaoke en MAYÚSCULAS con las cifras en rojo, whoosh + flash en cada corte, golpe de bass + sacudida solo en el 0-3 s; ticker arriba.

**[0-3 s]** «COVID: la simulación decía +3,414 dólares. La cuenta real reventó.»
> Boceto: texto gigante «COVID: +$3,414» y debajo «CUENTA REVENTADA»; cifra verde que se agrieta y se vuelve roja con sacudida; b-roll de bolsa cayendo, Ken Burns «in».
**[3-12 s]** «Repetí el negocio del fondeo en cuatro mercados malos: la crisis de 2008, el dólar y las materias primas de 2014-15, el COVID y la caída de 2022.»
> Boceto: línea de tiempo con cuatro franjas rojas; Ken Burns «out»; karaoke con «CUATRO» en rojo.
**[12-24 s]** «El valor esperado por intento salió positivo en todas: +1,229 en 2008, +2,147 en 2022, +3,414 en el COVID y solo +122 en 2014-15. En todo 2006-2024, +4,241.»
> Boceto: barras animadas con cada cifra; la de +122 casi invisible; whoosh y flash blanco.
**[24-36 s]** «En 2014-15 la cesta perdía un 8.8% al año y el margen casi desaparece. El 100% de las ventanas malas dieron positivo, pero eso es en simulación.»
> Boceto: flecha descendente «−8.8% anual»; contador «100%» con el sello «EN SIMULACIÓN»; Ken Burns «in».
**[36-47 s]** «El remuestreo subestima las caídas largas: con el camino real, la cuenta a ×2 reventó en el COVID. Resiste en el papel, no en la realidad. El video completo está en el canal. No es asesoría financiera.»
> Boceto: vuelve la cifra «+$3,414» con la grieta roja (loop con el gancho); texto «Video completo en el canal» y logo.

## Descripción (YouTube)
Prueba de estrés al negocio del fondeo (examen a ×4 + cuenta fondeada a ×2) en cuatro ventanas adversas: crisis de 2008 (+$1,229), dólar y materias primas 2014-15 (+$122), COVID 2020 (+$3,414) y mercado bajista de 2022 (+$2,147), frente a +$4,241 en todo 2006-2024. Valor esperado simulado; el remuestreo subestima los drawdowns largos y el camino real reventó en el COVID.
Todos los datos: https://atlas-lab-one.vercel.app (experimento #12)
Contenido educativo. No es asesoría financiera ni recomendación de inversión.

Capítulos: 0:00 Gancho · 0:27 Qué es una prueba de estrés · 1:05 Cómo se calculó · 1:41 Resultados · 2:06 La ventana débil · 2:31 La trampa del remuestreo · 3:03 Los límites · 3:28 Con tu capital · 3:54 Conclusión y cierre

Etiquetas: prueba de estrés, stress test, crisis 2008, COVID 2020, mercado bajista 2022, prop firm, valor esperado, Monte Carlo, bootstrap, gestión de riesgo, ATLAS Lab, trading con datos

## Rúbrica (autoevaluación, 1–5)
| Criterio | Short | Largo |
|---|---|---|
| hook_0_3s | 4 | 4 |
| ritmo | 4 | 4 |
| promesa_cumplida | 5 | 5 |
| potencial_loop | 5 | 4 |
| claridad_no_traders | 4 | 3 |
| honestidad_atlas | 5 | 5 |
| audio | 4 | 3 |
| cta | 4 | 4 |
| **Promedio** | **4.38** | **4.00** |

Notas: el gancho comparte historia con #11 y #13, por lo que conviene publicarlos en secuencia o con una lista de reproducción. El Short cumple hook ≥ 4 y honestidad 5.

## Otros temas de este experimento

- Tema 1 — `exp-012-prueba-estres-regimen.md` — Prueba de estrés por régimen (este archivo).
- Tema 2 — `exp-012-t2-remuestreo-por-bloques.md` — Cómo se fabrica un valor esperado: el remuestreo por bloques, paso a paso
- Tema 3 — `exp-012-t3-ventana-debil-2014-15.md` — La ventana débil: 2014-15, dólar y materias primas, y los +$122

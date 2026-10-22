# Experimento #11 — Valor esperado real de prop firm (desafío + fondeo)

Estado del guion: **BORRADOR — pendiente de aprobación**
Estado del experimento: **parcial** (en el sitio: neutral). Simulación del negocio completo, sin señales propias.
Serie: E (Gestión de riesgo: lo poco que se sostuvo)
Datos usados: `experiments.json` (v=11: description, params, metrics, kpis, analysis, verdict, notes, capital), `exp_details.json` (algo, filters), `series/20260607_211742_ev-real-prop-firm-challenge-fondeo-v11.json` (curva 1 = cesta base sin apalancar, la misma del #9) y la tabla «Con tu capital» de docs/youtube (fila 11). Se cita el #13 solo por su veredicto (cuenta reventada en el COVID). Las cifras con 10,000 dólares son las de la tabla de 100,000 divididas entre 10.

## Títulos (3 opciones)
1. +$5,919 por intento de fondeo: así de bueno salía el negocio en mi simulación
2. 79% de probabilidad de cobrar un pago: lo que dice (y lo que no dice) mi simulador de fondeo
3. Simulé el negocio completo de una prop firm: examen + cuenta de $100,000

## Miniatura
Fondo negro de la marca. Texto gigante: «+$5,919» en verde. Debajo, en rojo y menor, «¿Y LA REALIDAD?» (3 palabras). A la derecha, el icono de una calculadora junto a una cuenta rota. Logo ATLAS esquina inferior derecha.

---

## VIDEO LARGO (16:9, ≈ 4:49 min — 4–6 min: experimento de una sola idea y pocas cifras)
Ritmo visual: algo cambia en pantalla cada 2-3 s; b-roll real detrás, Ken Burns alterno, subtítulos karaoke, whoosh + flash en cada corte, golpe de bass solo en el momento clave.

**[0:00 — Gancho]** (pantalla: «+$5,919» verde y «79%»)
+5,919 dólares por intento. Eso es lo que sale de mi simulación del negocio completo de una empresa de fondeo, con un 79% de probabilidad de cobrar al menos un pago. Parece un negocio redondo. Pero hay una razón por la que este experimento tiene el veredicto parcial, y es lo más importante de este video: de dónde sale ese número, y qué pasó cuando lo comparé con el camino real.
> Boceto: contador de 0 a +$5,919 verde con sonido de caja registradora; al final aparece un sello ámbar «PARCIAL» y la cifra «79%» parpadea. Ken Burns «in» sobre b-roll de una pantalla de trading.

**[0:29 — El negocio completo]** (pantalla: diagrama de dos fases)
El negocio tiene dos fases. Primera: pagas 500 dólares por el examen y lo intentas con apalancamiento ×4, que en el experimento anterior pasaba el 47.9% de las veces. Segunda: si pasas, operas una cuenta fondeada de 100,000 dólares con una caída máxima permitida de 10%, una pérdida diaria de 5% y un reparto en el que te quedas con el 80% de las ganancias, con retiros cada 21 días durante hasta 24 meses. En esa fase pruebo apalancamientos de ×1 a ×4. Es, traducido a números, el modelo de negocio de una empresa de fondeo.
> Boceto: diagrama: «Fase 1: cuota $500 · ×4 · 47.9%» → «Fase 2: cuenta $100,000 · reparto 80% · retiros cada 21 días». Tarjeta `params_view` con los valores.

**[1:09 — Cómo se calculó]** (pantalla: Monte Carlo por bloques)
Es un Monte Carlo: tomo los retornos de la cesta de 2019 a 2024 y los remuestreo por bloques para simular miles de caminos de la cuenta fondeada. En cada camino, la cuenta opera, y cada 21 días se retira la parte que te toca si hay ganancias; si toca uno de los límites, la cuenta se pierde. Calculo cuánto cobrarías en promedio y combino eso con la probabilidad de pasar el examen y con la cuota de 500 dólares. El modelo supone que los bloques de días son independientes entre sí, y no incluye costos de operación.
> Boceto: curva real (series, curva 1) partida en bloques que se barajan; sobre ellos, una fórmula animada «prob. de pasar × cobro esperado − cuota → valor esperado».

**[1:49 — Resultados]** (pantalla: tarjetas KPI)
El mejor caso es operar la cuenta fondeada con ×2. El cobro esperado en la fase fondeada es de 13,402 dólares, la probabilidad de cobrar al menos un pago es del 79%, y de ahí sale un valor esperado de +5,919 dólares por intento, ya restando la cuota. Con otros apalancamientos fondeados, ×1, ×3 o ×4, el valor esperado era menor. Un apalancamiento moderado en la cuenta fondeada resulta mejor que uno agresivo: el dinero está en sobrevivir para cobrar varios pagos.
> Boceto: `kpis` en cascada (valor esperado +$5,919, pasar 47.9%, mejor apalancamiento fondeado ×2, cobro esperado $13,402, algún pago 79%, cuenta $100,000).

**[2:23 — Cómo leer un valor esperado]** (pantalla: dado con resultados)
Un valor esperado es un promedio ponderado de todos los resultados posibles. +5,919 por intento no significa que ganarás eso cada vez: significa que, si repitieras el negocio muchísimas veces dentro de este modelo, ese sería el promedio. Algunos intentos perderían la cuota de 500 y nada más; otros cobrarían bastante más. Y no es un resultado del mercado real, es el resultado de un modelo con supuestos. Por eso importa tanto saber qué supone.
> Boceto: un dado con caras «−$500», «+$13,402»… que gira y se detiene en una barra promedio «+$5,919»; texto «Promedio de un modelo, no un resultado garantizado».

**[2:54 — De dónde sale ese número]** (pantalla: curva ascendente de la cesta)
Aquí está lo importante. El propio experimento lo dice: ese valor esperado sale solo de la subida general de la cesta en 2019-2024, un periodo alcista, aprovechada con el capital de la empresa de fondeo. No es una ventaja propia, es la subida del mercado con dinero ajeno. No hay muestra fuera de ese periodo; la prueba con mercados malos se hizo aparte, en el experimento 12. Si el mercado hubiera estado de lado o a la baja, esta cifra no existiría.
> Boceto: la curva real de la cesta subiendo con el texto «Beta: la subida del mercado, no ventaja propia»; sello ámbar «Solo 2019-2024».

**[3:28 — Qué pasó en el camino real]** (pantalla: curva de la cuenta cortada)
Y hay una prueba que lo contradice. En el experimento 13 probé una cuenta a ×2 sobre el camino histórico real, no sobre un remuestreo, y reventó en el COVID. Un Monte Carlo por bloques puede subestimar una caída larga y simultánea de muchos activos. Dos formas de mirar lo mismo: en el papel, +5,919; en el camino real, cuenta reventada.
> Boceto: pantalla dividida: izquierda «Simulación: +$5,919»; derecha curva real que se corta en marzo de 2020 con sello rojo «CUENTA REVENTADA (#13)».

**[3:53 — Con tu capital]** (pantalla: tarjeta «Con tu capital» con aviso)
Con 10,000 dólares, la curva base sin apalancar daría más 5,761, frente a más 5,175 de la cesta sin estrategia. Con 100,000, la tabla de ATLAS da más 57,609 contra más 51,747. Ojo: el experimento aplica ×4 al examen y ×2 a la cuenta fondeada, que esa curva no muestra, y todo depende de que la cesta suba como entonces.
> Boceto: tarjeta de capital con aviso ámbar y las dos cifras en verde atenuado; selector $10,000 / $100,000.

**[4:18 — Conclusión y cierre]**
Veredicto: parcial. En simulación, +5,919 dólares por intento y 79% de cobrar un pago; en la realidad, el camino real reventó en el COVID. El dinero está en sobrevivir la fase fondeada con un tamaño conservador, no en pasar el examen. En el siguiente experimento pongo a prueba el negocio en cuatro mercados malos. Todos los datos en atlas-lab-one.vercel.app, experimento 11. Contenido educativo, no es asesoría financiera. El trading no se promete: se prueba.
> Boceto: sello «PARCIAL»; frase de marca, logo y URL.

---

## SHORT (9:16, ≈ 47 s)
Fórmula visual: b-roll vertical + overlay oscuro 0.6, Ken Burns alternando in/out, subtítulos karaoke en MAYÚSCULAS con las cifras en rojo, whoosh + flash en cada corte, golpe de bass + sacudida solo en el 0-3 s; ticker arriba.

**[0-3 s]** «+5,919 dólares por intento de fondeo. Eso decía mi simulación.»
> Boceto: texto gigante «+$5,919 POR INTENTO»; contador verde con sonido de caja; b-roll de billetes y gráfico, Ken Burns «in».
**[3-12 s]** «Simulé el negocio completo: pagar 500 dólares por el examen, pasarlo con apalancamiento ×4, y operar una cuenta fondeada de 100,000 dólares quedándome con el 80%.»
> Boceto: diagrama de dos fases; Ken Burns «out»; karaoke con «500 DÓLARES» en rojo.
**[12-24 s]** «Resultado: 47.9% de pasar el examen, 79% de cobrar al menos un pago y un cobro esperado de 13,402 dólares en la cuenta fondeada, con ×2. De ahí sale un valor esperado de +5,919 por intento.»
> Boceto: barras 47.9% y 79%; cifra $13,402; tarjeta de valor esperado; whoosh y flash blanco.
**[24-36 s]** «Pero ese número sale solo de que la cesta subió en 2019-2024, con capital ajeno. No es una ventaja propia. Y no hay muestra fuera de ese periodo.»
> Boceto: curva real de la cesta subiendo con «Beta, no ventaja»; sello ámbar «Solo 2019-2024»; Ken Burns «in».
**[36-47 s]** «En la prueba real, la cuenta a ×2 reventó en el COVID. En el papel, +5,919. En la realidad, cuenta reventada. El video completo está en el canal. No es asesoría financiera.»
> Boceto: el «+$5,919» del inicio se parte con una grieta roja (loop con el gancho); texto «Video completo en el canal» y logo.

## Descripción (YouTube)
Simulación Monte Carlo del negocio completo de una prop firm: examen a ×4 (47.9% de pasar, cuota $500) y cuenta fondeada de $100,000 con reparto del 80%. Resultado simulado: +$5,919 por intento (fondeo a ×2), 79% de cobrar al menos un pago. Explico por qué ese valor sale solo de la subida de la cesta en 2019-2024 y por qué el camino real reventó en el COVID.
Todos los datos: https://atlas-lab-one.vercel.app (experimento #11)
Contenido educativo. No es asesoría financiera ni recomendación de inversión.

Capítulos: 0:00 Gancho · 0:29 El negocio completo · 1:09 Cómo se calculó · 1:49 Resultados · 2:23 Cómo leer un valor esperado · 2:54 De dónde sale ese número · 3:28 Qué pasó en el camino real · 3:53 Con tu capital · 4:18 Conclusión y cierre

Etiquetas: prop firm, cuenta fondeada, FTMO, valor esperado, Monte Carlo, challenge de fondeo, gestión de riesgo, apalancamiento, simulación de trading, ATLAS Lab, trading con datos, drawdown

## Rúbrica (autoevaluación, 1–5)
| Criterio | Short | Largo |
|---|---|---|
| hook_0_3s | 4 | 4 |
| ritmo | 4 | 4 |
| promesa_cumplida | 5 | 5 |
| potencial_loop | 5 | 4 |
| claridad_no_traders | 3 | 3 |
| honestidad_atlas | 5 | 5 |
| audio | 4 | 3 |
| cta | 4 | 4 |
| **Promedio** | **4.25** | **4.00** |

Notas: el gancho es una cifra positiva y atractiva; por eso la honestidad depende de que la advertencia (beta de 2019-2024 y cuenta reventada en el camino real) aparezca dentro de los primeros 40 s del Short, como está escrito. El Short cumple hook ≥ 4 y honestidad 5.

## Otros temas de este experimento
Cada tema = video largo + Short, con su propia ficha del experimento. Todos en estado BORRADOR — pendiente de aprobación.
- Tema 1: este archivo — Valor esperado real de prop firm (desafío + fondeo)
- Tema 2: [exp-011-t2-sobrevivir-para-cobrar.md](exp-011-t2-sobrevivir-para-cobrar.md) — dos fases, dos tamaños, ×4 para pasar y ×2 para cobrar
- Tema 3: [exp-010-t3-dos-valores-esperados.md](exp-010-t3-dos-valores-esperados.md) — dos valores esperados para el mismo negocio, $3,410 y $5,919 (cubre #10 y #11)

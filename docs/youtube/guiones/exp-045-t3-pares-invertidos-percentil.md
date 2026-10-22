# Experimento #45 — COT contrario en extremos · Tema 3: la trampa de los pares invertidos

Estado del guion: **BORRADOR — pendiente de aprobación**
Tema 3 de 3 del experimento #45. Qué aporta frente a los otros temas: es el MÉTODO y el CONCEPTO para principiantes. El tema 1 cuenta la regla y el resultado y el tema 2 la cuenta que aguantó 2,560 días; este tema explica cómo se traduce el COT en operaciones (percentil móvil de 104 semanas, mínimo 52, rezago de 3 días) y por qué en 3 de los 7 pares el signo se invierte, un error clásico de implementación.
Estado del experimento: **MURIÓ** (Sharpe −0.28 en 2014–2024, con la cuenta cortada el 28-abr-2022, y −1.37 en 2007–2013)
Serie: **G (epílogo)** — usa los datos de #44; cierra los «caminos futuros» del veredicto de #40.
Datos usados: `experiments.json` (v=45: analysis, notes, metrics, kpis, params_view, capital; v=44: params_view) · `exp_details.json` (v45: algo, code.snippet del percentil y de la inversión de signo, filters) · `series/20260610_142118_cot-contrarian-extremos-v45.json` · fila #45 de la tabla «Con tu capital» (`docs/youtube/`).

## Títulos (opciones)
1. En 3 de los 7 pares, la señal del COT se da la vuelta
2. Cómo se traduce el COT en operaciones: percentil 90/10 y pares invertidos
3. Comprar cuando debías vender: la trampa de los pares invertidos

## Miniatura
Fondo #09090b. Una flecha verde apuntando a la derecha que, al cruzar una línea, se da la vuelta en rojo (#e11d2a) hacia la izquierda; tres banderitas pequeñas al pie. Texto grande: «SIGNO INVERTIDO». Logo ATLAS en la esquina inferior derecha. (No repite las palabras de los títulos.)

---

## VIDEO LARGO (16:9, ≈ 4:57)

**[0:00 — Gancho]** (pantalla — BOCETO: siete fichas de pares; en cuatro la flecha apunta igual y en tres (yen, dólar canadiense, franco suizo) se da la vuelta; contador «3 de 7»)
En 3 de los 7 pares que probé, la señal del COT se da la vuelta. Si no lo sabes, compras justo cuando la regla manda vender. Es un error de implementación clásico, y este video explica por qué ocurre y cómo se evita.

**[0:18 — Este es el experimento #45]** (pantalla — BOCETO: rótulo «EXPERIMENTO #45 · COT CONTRARIO EN EXTREMOS» con el logo ATLAS; la URL pequeña debajo)
Este es el experimento #45 de ATLAS Lab: COT contrario en extremos. Todos los resultados están en la página del experimento. Aquí me quedo con la parte técnica: cómo se convierte un informe semanal de posiciones en órdenes de compra y venta.

**[0:35 — De la posición neta al percentil]** (pantalla — BOCETO: 104 barras semanales ordenadas; una barra resaltada que supera al 90% de las demás en rojo y otra bajo el 10% en verde; la leyenda «percentil rodante de 104 semanas»)
El COT da, cada semana, cuántas apuestas al alza y a la baja tienen los especuladores en el futuro de una divisa. Se resume en una cifra: la posición neta sobre el interés abierto, el balance entre largos y cortos dividido por el total de contratos. Luego se pregunta qué tan extrema es esa cifra comparada con las últimas 104 semanas, dos años. Estar en el percentil 90 significa estar más alto que el 90% de esas semanas. La regla exige al menos 52 semanas de historia antes de dar señal.

**[1:10 — La regla contraria]** (pantalla — BOCETO: barra que sube a la zona roja «percentil > 90 → vender» y baja a la zona verde «percentil < 10 → comprar»; chips: rezago 3 días · ×2 · kill-switch −3% · deslizamiento 0.2% · sin filtro macro)
La regla es contraria: por encima del percentil 90, los especuladores están saturados de compras y se vende; por debajo del 10, saturados de ventas y se compra. La señal es semanal, se estira a diario y se rezaga 3 días por la publicación. Después, pesos por paridad de riesgo, apalancamiento ×2, corte automático del 3% y deslizamiento de 0.2%, sin filtro macro.

**[1:35 — La trampa]** (pantalla — BOCETO: dos cotizaciones lado a lado: «EUR/USD: euro primero» y «USD/JPY: dólar primero»; en cada una, la flecha de «vender la divisa» apunta a «vender el par» o a «comprar el par»)
Aquí llega la trampa. El futuro del COT es siempre de la divisa contra el dólar. Pero en el mercado de contado, algunos pares se escriben con la divisa primero, euro-dólar, libra-dólar, dólar australiano-dólar y dólar neozelandés-dólar, y otros con el dólar primero: dólar-yen, dólar-canadiense y dólar-franco suizo. Si los especuladores están saturados de comprar yen, la regla manda vender yen. Vender yen es comprar el par dólar-yen. Por eso, en esos tres pares, el signo se invierte.

**[2:06 — Qué pasa si te olvidas]** (pantalla — BOCETO: tabla de dos filas: «con el signo invertido (como en el código)» → contrario ✓ y «sin invertir» → sigue a los especuladores ✕; texto «lo contrario de lo que crees»)
Si olvidas invertir el signo, en esos tres pares estarías siguiendo a los especuladores en lugar de ir en contra, aunque creas que haces lo contrario. El error no avisa: el código corre, las operaciones salen, y el backtest da un resultado que ya no es el de la idea que querías probar. Por eso conviene escribir la dirección de cada par y comprobar a mano un día concreto.

**[2:33 — El resultado]** (pantalla — BOCETO: curva real de series/…v45.json hasta el sello ✕ del 28-abr-2022; tabla con las tres filas aparece a la derecha)
| Periodo | Sharpe | Qué pasó con la cuenta |
|---|---|---|
| 2014–2024 | −0.28 | se corta el 28-abr-2022 (día 2560) |
| 2007–2013 (fuera de muestra) | −1.37 | muere |
| Sin el dólar neozelandés: 2014–2024 / 2007–2013 | −0.25 / −1.30 | casi igual |
Con el signo bien puesto, la idea contraria muere en los dos periodos. El Sharpe es la ganancia por unidad de riesgo. El 2007–2013 es fuera de muestra, es decir, años que el bot no vio al diseñarse.

**[2:55 — Otra consecuencia de la regla de 52 semanas]** (pantalla — BOCETO: línea de tiempo del dólar neozelandés: datos desde el 8-feb-2022 y primera señal el 3-feb-2023; el resto del tiempo, seis pares)
La exigencia de 52 semanas tiene un efecto visible: el dólar neozelandés solo tiene datos COT desde el 8 de febrero de 2022, y su primera señal aparece el 3 de febrero de 2023. Antes de esa fecha operan seis pares, no siete. Sin ese par, el resultado casi no cambia: menos 0.25 y menos 1.30.

**[3:17 — Lo que dice y lo que no dice]** (pantalla — BOCETO: dos columnas: «lo que dice» (esta regla, estos datos, estas reglas de cuenta) y «lo que no dice» (que el COT no sirva nunca; otras ventanas, otros percentiles, seguir a los especuladores))
Hay que ser preciso. Esta prueba usa una sola regla: percentil 90 y 10 de dos años, con ×2 y las reglas de la prop firm, la empresa que cierra la cuenta si cae 10%, y con datos que mezclan contratos cruzados. No demuestra que el COT no sirva nunca: demuestra que esta regla, con estos datos, no sirvió. No probé la versión inversa, seguir a los especuladores, ni otros percentiles ni otras ventanas.

**[3:46 — El marcador de filtros]** (pantalla — BOCETO: checklist de exp_details.filters: Sharpe 2014–2024 ✗ · Sharpe 2007–2013 ✗ · sobrevivir en ambos periodos ✗ · señal rezagada ✓ · datos «6 pares efectivos» — · costos completos — · Deflated Sharpe —)
El tablero de filtros: los dos Sharpe son negativos y la cuenta no sobrevive en los dos periodos. Pasa uno: la señal va rezagada tres días. Los datos tienen asteriscos, seis pares efectivos antes de 2023 y contratos cruzados. Los costos completos y el Deflated Sharpe, la prueba que descuenta la suerte de haber probado muchas ideas, no se aplicaron.

**[4:10 — Con tu capital]** (pantalla — BOCETO: tarjeta «Con tu capital»: $100,000 → −$10,219 contra −$5,266, «2014–2022, hasta el corte»)
Con $100,000 simulados, la cuenta se cierra con −$10,219 el 28 de abril de 2022. Comprar y esperar la misma cesta, en las mismas fechas: −$5,266. Es una simulación histórica, no una promesa; con $10,000 serían la décima parte.

**[4:26 — Ficha del experimento #45]** (pantalla — BOCETO: tarjeta de ficha con sello «NO SIRVIÓ», cuatro líneas y la URL atlas-lab-one.vercel.app/e/45; logo ATLAS)
Ficha del experimento #45. Estado: no sirvió. Cifra clave: Sharpe de menos 0.28 en 2014–2024, con la cuenta cortada el 28 de abril de 2022, y menos 1.37 en 2007–2013; el signo se invierte en 3 de los 7 pares. Filtro que decidió: sobrevivir en los dos periodos, que dio falso. Lección: comprueba el sentido de cada par antes de creer un backtest. Revísalo completo en atlas-lab-one.vercel.app/e/45. Contenido educativo, no es asesoría financiera. El trading no se promete: se prueba.

---

## SHORT (9:16, ≈ 52 s)
Título del Short: En 3 de 7 pares, la señal del COT se da la vuelta #shorts
Fórmula visual (CLAUDE.md del canal): b-roll vertical real con overlay 0.6, Ken Burns alternado, subtítulos karaoke en MAYÚSCULAS con cifras en rojo, ticker arriba, whoosh + flash en cada corte; golpe (bass + sacudida) solo en 0-3 s y 14-28 s.

**[0-3 s]** "En 3 de los 7 pares, la señal del COT se da la vuelta."
- Boceto: b-roll de una señal de tráfico o una flecha de dirección (kb=in); «3 de 7» gigante; la flecha gira en rojo; golpe de bass.

**[3-14 s]** "El COT cuenta las apuestas al alza y a la baja de los especuladores. La regla contraria: si están muy comprados, vender. Si están muy vendidos, comprar."
- Boceto: barra de posición neta que sube a la zona roja y dispara «VENDER»; luego a la verde y «COMPRAR».

**[14-28 s]** "Pero en el yen, el dólar canadiense y el franco suizo, el par se escribe con el dólar primero. Vender el yen es comprar el par dólar-yen. Si no inviertes el signo, haces lo contrario de lo que crees."
- Boceto: dos cotizaciones, euro-dólar y dólar-yen, con la flecha de «vender la divisa» apuntando a lados opuestos; sacudida.

**[28-40 s]** "Con el signo bien puesto, el COT contrario dio Sharpe menos 0.28 en 2014 a 2024 y menos 1.37 en 2007 a 2013. La cuenta murió el 28 de abril de 2022."
- Boceto: curva real de series/…v45.json hasta el sello ✕; dos barras rojas.

**[40-48 s]** "Video completo en el canal. Experimento 45 completo en el enlace. No es asesoría financiera. ¿Cuántos pares se invierten? Tres de siete."
- Boceto: sello «NO SIRVIÓ»; logo ATLAS y «EXPERIMENTO #45 · ENLACE». Loop: la respuesta enlaza con el gancho.

## Descripción (YouTube)
**Video largo**
https://atlas-lab-one.vercel.app/e/45?utm_source=youtube&utm_medium=video&utm_campaign=exp045-t3
Ficha del experimento #45 (COT contrario en extremos): no sirvió. Sharpe −0.28 en 2014–2024 (cuenta cortada el 28-abr-2022) y −1.37 en 2007–2013; el signo de la señal se invierte en 3 de los 7 pares (USDJPY, USDCAD y USDCHF).
Cómo se convierte el COT en operaciones: percentil 90/10 de 104 semanas, rezago de 3 días y la trampa de los pares con el dólar primero.

Capítulos: 0:00 Gancho · 0:18 Este es el experimento #45 · 0:35 De la posición neta al percentil · 1:10 La regla contraria · 1:35 La trampa · 2:06 Qué pasa si te olvidas · 2:33 El resultado · 2:55 Otra consecuencia de la regla de 52 semanas · 3:17 Lo que dice y lo que no dice · 3:46 El marcador de filtros · 4:10 Con tu capital · 4:26 Ficha del experimento #45

**Short**
https://atlas-lab-one.vercel.app/e/45?utm_source=youtube&utm_medium=short&utm_campaign=exp045-t3
Experimento #45: en 3 de los 7 pares la señal del COT se invierte; el COT contrario dio Sharpe −0.28 y −1.37. No sirvió.

Contenido educativo. No es asesoría financiera ni recomendación de inversión.

Etiquetas: COT, CFTC, percentil, estrategia contraria, forex, pares de divisas, USDJPY, backtest, sesgo de implementación, bot de trading, ATLAS Lab

## Rúbrica (autoevaluación — criterios del CLAUDE.md del canal, 1-5)
| hook_0_3s | ritmo | promesa_cumplida | potencial_loop | claridad_no_traders | honestidad_atlas | audio | cta |
|---|---|---|---|---|---|---|---|
| 4 | 4 | 5 | 4 | 4 | 5 | 4 | 4 |

Promedio: **4.25** → cumple el corte (≥ 4.0; hook ≥ 4 y honestidad 5).
Notas: el hook es un dato concreto (3 de 7) que despierta curiosidad práctica. Punto débil: depende de explicar la cotización de los pares; el largo lo hace con la comparación euro-dólar y dólar-yen en pantalla y el Short lo resume en dos frases.

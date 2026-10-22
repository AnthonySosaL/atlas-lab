# Experimento #74 — Turtle Trading, ruptura de Donchian (Richard Dennis)

Estado del guion: **BORRADOR — pendiente de aprobación**
Estado del experimento: **parcial** (fuera de muestra logra Sharpe 0.75, sobre 0.67 sin estrategia, pero en 2012–2018 solo 0.21: depende del periodo)
Serie: B (estrategias famosas, puestas a prueba). Primo del #73; su cartera base se analiza por Calmar y retiros en #78.
Datos usados: `experiments.json` (v=74: verdict, analysis, notes, kpis, metrics, params_view, capital, period) · `exp_details.json` (extra-v74: algo, code, filters) · `series/extra-v74.json` ([0] Turtle Donchian 20/10, [1] los 11 activos comprar y esperar) · tabla «Con tu capital» (docs/youtube, archivo de capital, fila #74; el $10k se calcula con la misma regla de la tarjeta del sitio).

## Títulos
1. Turtle Trading: Sharpe 0.75, pero +32.8% contra +70.8%
2. Turtle Trading de Richard Dennis, probado en 11 activos con costos
3. ¿Sigue funcionando Turtle Trading? Sharpe 0.21 y 0.75 según el periodo

## Miniatura
Fondo `#09090b`. Una tortuga verde `#22c55e` caminando sobre una curva ascendente; encima, un cartel blanco «DEPENDE DEL PERIODO» (3 palabras) y una línea roja `#e11d2a` partida en dos tramos de distinta pendiente. Logo ATLAS esquina inferior derecha.

---

## VIDEO LARGO (≈ 6½ min)

**[0:00 — Gancho]** (pantalla: dos medidores de Sharpe: «2012–2018: 0.21» y «2019–2024: 0.75»; debajo, dos barras de dinero: «+32.8%» y «+70.8%»)
BOCETO: el medidor salta de 0.21 a 0.75 con whoosh; después las barras de dinero muestran que la verde (Turtle) es más corta; golpe de bajo.
> Turtle Trading tuvo un Sharpe de 0.75 entre 2019 y 2024, mejor que el 0.67 de comprar y esperar. Pero entre 2012 y 2018 fue de apenas 0.21. Y en dinero, ganó +32.8% contra +70.8%. Tres cifras que parecen contradecirse. Te explico cómo caben juntas, y qué dicen sobre el seguimiento de tendencia.

**[0:25 — El seguimiento de tendencia]** (pantalla: una flecha larga que sube con un jinete que se sube a mitad del recorrido y se baja antes del final)
BOCETO: una flecha larga que sube; un jinete se sube a mitad del recorrido y se baja antes del final; texto «seguir tendencias, no predecirlas».
> Turtle Trading nace del experimento de 1983 de Richard Dennis. Es un sistema de seguimiento de tendencia: la idea no es predecir hacia dónde va el mercado, sino subirse a los movimientos largos cuando ya empezaron y bajarse cuando se agotan. Cosecha mucho cuando hay tendencias claras y sufre cuando el mercado se mueve de lado.

**[0:45 — La regla: el canal de Donchian]** (pantalla: precio con un canal: línea superior = máximo de 20 días, línea inferior = mínimo de 10 días)
BOCETO: cuando el precio rompe la línea superior aparece «COMPRA» en verde; cuando pierde la inferior, «SALE». Cesta de 11 activos como mosaico.
> La regla usa un canal de Donchian: dos líneas que marcan el máximo de los últimos 20 días y el mínimo de los últimos 10. Compro cuando el precio rompe el máximo de 20 días: es una señal de que está saliendo de su rango hacia arriba. Salgo cuando pierde el mínimo de 10 días: es una señal de que la fuerza se agotó. Solo en largo, es decir, no vendo en corto. Se aplica a 11 activos: 4 índices, oro, 4 pares de divisas, Brent y WTI, con el mismo peso cada uno.

**[1:25 — Cómo lo probé]** (pantalla: checklist de filtros con los valores reales)
BOCETO: ✓ En muestra 2012–2018: Sharpe 0.21 (casi igual a 0.20 sin estrategia) · ✓ Fuera de muestra 2019–2024: Sharpe 0.75 (> 0.30) · ✓ Sharpe mayor que comprar y esperar, pero ✗ retorno menor · ✗ Consistencia entre periodos · ✓ Costos: 3 bps · ✓ Señal de ayer · — Deflated Sharpe: no aplicado.
> Costos de 3 puntos básicos por movimiento y señal siempre de ayer. Diseño en 2012–2018 y prueba fuera de muestra, en un periodo no usado al diseñar, de 2019 a 2024. Todo se compara con comprar y esperar la misma cesta. El Sharpe mide cuánto rindes por cada unidad de riesgo. No apliqué Deflated Sharpe ni Monte Carlo en este experimento, y probé una sola combinación del canal, 20 y 10, sin ajustarla para mejorar el resultado.

**[2:00 — Resultados]** (pantalla: tabla con tres filas; barras gemelas)
BOCETO: barras verdes (Turtle) y grises (sin estrategia); la fila de retorno es la única donde la gris gana; sello ámbar «parcial».
| Medida | Turtle 20/10 | Sin estrategia |
|---|---|---|
| Sharpe 2012–2018 | 0.21 | 0.20 |
| Sharpe fuera de muestra (2019–24) | 0.75 | 0.67 |
| Retorno fuera de muestra | +32.8% | +70.8% |
> En 2012–2018, Turtle y no hacer nada empatan: 0.21 contra 0.20. En 2019–2024, Turtle gana en Sharpe, 0.75 contra 0.67. Pero el retorno fue de +32.8% contra +70.8%. Menos de la mitad.

**[2:10 — Cómo caben juntas]** (pantalla: dos curvas: una con tramos planos en efectivo y otra siempre dentro del mercado)
BOCETO: dos curvas: una con tramos planos en efectivo (Turtle) y otra siempre dentro; sobre ellas, dos medidores: Sharpe mayor, retorno menor.
> Un Sharpe más alto no significa más dinero: significa más retorno por cada unidad de riesgo. Piensa en dos conductores. Uno viaja siempre a buena velocidad y llega más lejos. El otro frena a menudo: llega más cerca, pero con menos desgaste del auto. Turtle es el segundo. Como sale del mercado cuando se rompe el mínimo de 10 días, pasa tiempo en efectivo: asume menos riesgo y también gana menos. Por eso puede tener mejor Sharpe y peor retorno a la vez.

**[2:45 — Mercado de tendencia contra mercado lateral]** (pantalla: dos mercados: uno sube de forma sostenida y otro oscila sin rumbo; la regla compra y sale en cada uno)
BOCETO: pantalla partida: a la izquierda un precio que sube sostenido con entradas verdes; a la derecha un precio que oscila con entradas y salidas rojas.
> Imagina dos mercados. En el primero, el precio sube de forma sostenida: cada pocos días rompe un máximo nuevo, la regla compra pronto y se queda dentro mientras la tendencia dure. En el segundo, el precio sube y baja sin rumbo: la regla compra al romper un máximo, el precio da la vuelta, y la salida llega después de perder parte de lo ganado. En el primer mercado, Turtle brilla. En el segundo, paga la entrada una y otra vez.

**[3:20 — Depende del periodo]** (pantalla: dos periodos lado a lado: 2012–2018 con Sharpe 0.21 y 2019–2024 con Sharpe 0.75, «muy tendencial»)
BOCETO: dos periodos lado a lado con sus medidores (0.21 y 0.75) y la etiqueta «muy tendencial» sobre el segundo.
> Además, 2019–2024 fue un periodo muy tendencial, justo lo que esta estrategia aprovecha. Entre 2012 y 2018, Turtle y no hacer nada empatan. Esa diferencia entre un periodo y otro es lo que vuelve inconsistente el resultado. El seguimiento de tendencia cosecha cuando hay tendencias y sufre en mercados laterales. No es una ventaja estable: es una apuesta a que vuelvan a aparecer tendencias.

**[3:50 — Con tu capital]** (pantalla: tarjeta «Con tu capital»; curva `series/extra-v74.json[0]` contra `[1]`)
BOCETO: la tarjeta cubre todo el periodo 2012–2024; una nota aclara que es la misma cartera base del experimento 78.
> Veamos qué significa en dinero, de enero de 2012 a diciembre de 2024. Con $10,000, Turtle dio +$4,169; comprar y esperar, +$9,234. Con $100,000: +$41,686 contra +$92,344. La peor caída desde un máximo fue de −$948 con 10,000 y −$9,479 con 100,000, un −9.5%. Esa cartera la analizo con otra métrica en el experimento 78. Aquí, la lección es sencilla: menos riesgo y menos dinero.

**[4:15 — Qué significa «parcial»]** (pantalla: dos columnas: «lo que sí» y «lo que no»)
BOCETO: sí = «Sharpe 0.75 fuera de muestra, caída menor»; no = «0.21 en 2012–2018, menos dinero, depende del periodo».
> Parcial significa que hay algo, pero no una ventaja estable. Sí: fuera de muestra, un Sharpe de 0.75 con una caída menor. No: apenas 0.21 en 2012–2018, menos dinero que quedarse quieto, y un resultado que depende de que haya tendencias.

**[4:35 — Lo que me llevo]** (pantalla: dos periodos lado a lado con la leyenda «no te quedes con uno solo»)
BOCETO: dos periodos lado a lado con la leyenda «no te quedes con uno solo»; texto «Sharpe ≠ dinero».
> Hay una lección práctica en esto. Cuando evalúes una estrategia de tendencia, no te quedes con un solo periodo. Un periodo muy tendencial puede hacer que cualquier sistema de seguimiento de tendencia se vea brillante, y uno lateral puede hacerlo ver mediocre. Lo que importa es si el resultado se sostiene en periodos distintos. Aquí no se sostiene: 0.21 en uno y 0.75 en el otro. Y ganar en Sharpe no es lo mismo que ganar en dinero: la estrategia que mejor te deja dormir no siempre es la que más te deja ganar.

**[5:10 — Preguntas de un escéptico]** (pantalla: tres tarjetas: «¿otras ventanas?», «¿vender en corto?», «¿más peso a unos activos?»)
BOCETO: tres tarjetas que se voltean: «¿otras ventanas?», «¿vender en corto?», «¿más peso a unos activos?», todas «no probado».
> Preguntas que me haría un escéptico. ¿Y si cambio 20 y 10 por otras ventanas? No lo probé; usé una sola combinación. ¿Y si permito vender en corto? Esta versión es solo en largo. ¿Y si doy más peso a unos activos que a otros? Aquí todos pesan lo mismo. Lo que sí queda claro es que el resultado cambia mucho entre dos periodos, 0.21 y 0.75, y eso ya dice algo sobre su fiabilidad.

**[5:45 — Resumen]** (pantalla: tarjeta con las cifras clave: 0.21 · 0.75 · 0.20 · 0.67 · +32.8% · +70.8% · +$41,686 · +$92,344 · −9.5%)
BOCETO: tarjeta con las cifras (0.21, 0.75, 0.20, 0.67, +32.8%, +70.8%, +$41,686, +$92,344 y −9.5%) y sello «PARCIAL».
> Resumen en tres bloques de cifras. Sharpe de 0.21 en 2012–2018 y 0.75 fuera de muestra, contra 0.20 y 0.67 de comprar y esperar. Retorno fuera de muestra de +32.8% contra +70.8%. Y en dinero, con $100,000 entre 2012 y 2024: +$41,686 contra +$92,344, con una peor caída de −9.5%. Veredicto: parcial.

**[6:05 — Conclusión]**
BOCETO: la tortuga sobre la curva con un tramo ascendente y otro plano; cierre con el logo.
> Turtle Trading no es una ventaja estable: es una forma de seguir tendencias que funciona cuando las hay. Todos los datos en atlas-lab-one.vercel.app, experimento 74. El trading no se promete: se prueba. Contenido educativo, no es asesoría financiera.

---

## SHORT (9:16, ≈ 47 s)

**[0-3 s]** (boceto: «0.75 vs 0.67» y «+32.8% vs +70.8%» en dos filas, la segunda en rojo; b-roll de una tortuga en el agua, kb=in; golpe de bajo)
> Turtle Trading: mejor Sharpe, pero ganó +32.8% contra +70.8%.

**[3-14 s]** (boceto: canal de Donchian con 20 y 10 resaltados; flechas de compra y salida; whoosh)
> La regla: compra cuando el precio rompe su máximo de 20 días y sal cuando pierde el mínimo de 10. Once activos, con costos. Es el experimento de 1983 de Richard Dennis.

**[14-21 s]** (boceto: dos medidores: 0.21 en 2012–2018 y 0.75 en 2019–2024; tick por cifra; b-roll de gráfico de bolsa, kb=out)
> De 2019 a 2024, su Sharpe fue 0.75, contra 0.67 de comprar y esperar. Pero de 2012 a 2018, apenas 0.21.

**[21-26 s]** (boceto: canal 20/10; texto «solo en largo · mismo peso por activo · una sola combinación»)
> Una sola combinación del canal, sin ajustarla. Solo en largo y con el mismo peso por activo.

**[26-34 s]** (boceto: curva con tramos planos en efectivo; texto «seguimiento de tendencia: cosecha en tendencia, sufre en lateral»)
> Gana cuando hay tendencias y sufre en mercados laterales. Y 2019–2024 fue muy tendencial. Menos riesgo, pero menos de la mitad del dinero.

**[34-37 s]** (boceto: tarjeta con $10,000: +$4,169 contra +$9,234)
> Con $10,000 serían +$4,169 contra +$9,234 de comprar y esperar.

**[37-42 s]** (boceto: tarjeta «Con tu capital»: +$41,686 contra +$92,344; caída −9.5%)
> En todo el periodo, con $100,000: +$41,686 contra +$92,344, con una peor caída de −9.5%.

**[42-47 s]** (boceto: texto «¿mejor Sharpe o más dinero?»; sello ámbar «parcial»; logo)
> Veredicto: parcial. Video completo en el canal. Mejor Sharpe o más dinero: ¿qué prefieres?

Gancho alterno A: «El mismo Turtle Trading: Sharpe 0.21 en un periodo y 0.75 en otro.» · B: «Más Sharpe no siempre es más dinero.»

## Descripción (YouTube)
Turtle Trading de Richard Dennis (canal de Donchian): comprar al romper el máximo de 20 días y salir al perder el mínimo de 10, solo en largo, en 11 activos con costos de 3 puntos básicos. Fuera de muestra (2019–2024): Sharpe 0.75 contra 0.67, pero +32.8% contra +70.8%; en 2012–2018, solo 0.21. Parcial: depende del periodo.

Datos completos: https://atlas-lab-one.vercel.app (experimento #74)

Contenido educativo. No es asesoría financiera ni recomendación de inversión.

Capítulos: 0:00 Gancho · 0:25 El seguimiento de tendencia · 0:45 La regla: el canal de Donchian · 1:25 Cómo lo probé · 2:00 Resultados · 2:10 Cómo caben juntas · 2:45 Mercado de tendencia contra mercado lateral · 3:20 Depende del periodo · 3:50 Con tu capital · 4:15 Qué significa «parcial» · 4:35 Lo que me llevo · 5:10 Preguntas de un escéptico · 5:45 Resumen · 6:05 Conclusión

Etiquetas: Turtle Trading, Richard Dennis, canal de Donchian, seguimiento de tendencia, breakout, estrategias famosas, prueba fuera de muestra, backtest, Sharpe ratio, trading con datos, ATLAS Lab, comprar y mantener

## Rúbrica (autoevaluación)
| Criterio | Short | Largo |
|---|---|---|
| hook_0_3s | 4 | 4 |
| ritmo | 4 | 4 |
| promesa_cumplida | 5 | 5 |
| potencial_loop | 4 | 3 |
| claridad_no_traders | 4 | 4 |
| honestidad_atlas | 5 | 5 |
| audio | 4 | 4 |
| cta | 4 | 4 |
| **Promedio** | **4.25** | **4.13** |

## Otros temas de este experimento
- Tema 1 (este archivo): `exp-074-turtle-donchian.md` — Turtle Trading, ruptura de Donchian (Richard Dennis)
- Tema 2: `exp-074-t2-ano-por-ano-la-tortuga.md` — La tortuga año por año (le ganó al mercado en 5 de 13 años, cuatro de ellos en años de caída)
- Tema 3: `exp-074-t3-una-sola-combinacion.md` — Una sola combinación (20 y 10) contra 33,363 intentos

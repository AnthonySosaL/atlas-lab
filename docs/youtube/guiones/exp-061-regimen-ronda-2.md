# Experimento #61 — Ataques al cambio de régimen, ronda 2

Estado del guion: **BORRADOR — pendiente de aprobación**
Estado del experimento: **murió** (ninguna variante supera a invertir a 1x)
Serie: G, por tema (filtros de régimen; el plan aún no lista #61–#62). Sigue en #62.
Datos usados: `experiments.json` (v=61: verdict, analysis, notes, kpis, metrics, period, capital) · `exp_details.json` (extra-v61: algo, filters) · `series/extra-v61.json` ([0] B3, [1] cesta a 1x) · tabla «Con tu capital» (docs/youtube, archivo de capital, fila #61; el $10k se calcula con la misma regla de la tarjeta del sitio).

## Títulos
1. Probé 3 formas de adivinar el mercado: ninguna le ganó a 1x
2. La estrategia «neutral» que perdió 28.0% (2014–2024)
3. ¿Se puede detectar el cambio de régimen? 3 intentos, 0 victorias

## Miniatura
Fondo `#09090b`. A la izquierda, tres barras (rojo −28.0, rojo −9.6, verde +22.5) y una línea punteada blanca en +23.1. A la derecha, texto enorme blanco «NEUTRAL» y debajo, en rojo `#e11d2a`, «−28.0%». Logo ATLAS en la esquina inferior derecha. (No hay curva de B1 ni de B2 en `series/`: se dibujan como barras con los KPI.)

---

## VIDEO LARGO (≈ 7½ min)

**[0:00 — Gancho]** (pantalla: «−28.0%» rojo; contador que baja de 0 a −28.0%; subtítulo «Estrategia neutral · 2014–2024»)
BOCETO: negro, número golpeando con sacudida (bass), línea de tiempo 2014→2024 abajo.
> Una estrategia diseñada para no depender de si el mercado sube o baja perdió 28.0% entre 2014 y 2024. Y eso es con costos: sin costos ya iba en −10.6%. Hoy te cuento las tres ideas que probé para detectar el cambio de régimen del mercado, y por qué ninguna le ganó a algo tan simple como invertir y esperar.

**[0:25 — El cambio de régimen]** (pantalla: curva gris de la cesta sin estrategia, `series/extra-v61.json[1]`, con 2020 y 2022 sombreados en rojo)
BOCETO: la curva se dibuja de 2014 a 2024; al llegar a 2020 y 2022 la pantalla se tiñe y aparece el texto «régimen = cómo se comporta el mercado».
> Piensa en el mercado como el clima. No te vistes igual en verano que en invierno, y lo que funciona en una estación no funciona en la otra. En los mercados hay épocas tranquilas, en que casi todo sube, y crisis, como 2020 o 2022, en que casi todo cae a la vez. A eso se le llama un cambio de régimen. Si pudieras detectar a tiempo que el régimen cambió, saldrías antes de la caída. El problema es que el cambio solo se ve con claridad cuando ya pasó. Esta es la segunda ronda de ataques al mismo problema: la misma cesta, pero con ideas distintas.

**[1:10 — La cesta de 15 activos]** (pantalla: tarjeta «15 activos · diario · pesos inversos a la volatilidad de 60 días»; semáforo por activo sobre/bajo su MA200)
BOCETO: mosaico de 15 casillas; cada una se pinta verde si el activo está sobre su media de 200 días y gris si está debajo; el tamaño de cada casilla es menor cuanto más volátil.
> Todas las pruebas usan una cesta de 15 activos, con datos diarios. Cada activo pesa menos cuanto más se mueve: eso es lo que significa «pesos inversos a la volatilidad de 60 días». Para saber si un activo está en buena o mala racha, miro si su precio está por encima o por debajo de su media de los últimos 200 días, la MA200. Esa información siempre se calcula con los datos de ayer. Y como punto de comparación tengo la misma cesta invertida a 1x, sin hacer nada.

**[1:45 — Idea 1: neutral en dólares]** (pantalla: tarjeta B1 con dos columnas del mismo tamaño, «compra» verde y «venta en corto» rojo)
BOCETO: la mitad fuerte de la cesta pasa a la columna verde y la débil a la roja; una balanza que queda nivelada.
> La idea uno, B1, es neutral en dólares. Cada día ordeno los activos según cuánto están por encima de su media de 200 días. Compro la mitad más fuerte y vendo en corto la mitad más débil, por el mismo monto. Vender en corto es apostar a que algo baja. En teoría, si todo el mercado cae, lo que pierdo comprando lo compenso con lo que gano vendiendo, así que no dependo de la dirección general. Esa es la promesa de lo neutral: ganar sin importar si el mercado sube o baja.

**[2:25 — Idea 2: núcleo más capa neutral]** (pantalla: tarjeta B2, bloque verde grande con una capa fina encima)
BOCETO: un bloque verde (núcleo 1x) sobre el que cae una capa roja fina (la capa neutral); el bloque se tiñe de rojo al tocarla; texto «el núcleo solo: +23.1%».
> La idea dos, B2, es una mezcla. Dejo la cartera normal comprada, a 1x, que es el núcleo, y le pongo encima esa capa neutral de la idea uno. La esperanza es que la capa neutral le sume un extra al núcleo.

**[2:45 — Idea 3: exposición continua]** (pantalla: tarjeta B3, un regulador de luz que va de 0 a 2x)
BOCETO: interruptor tachado a la izquierda; a la derecha el regulador sube con la fracción de activos que están sobre su media.
> Y la idea tres, B3, cambia el interruptor por un regulador de luz. Un interruptor se enciende o se apaga: dentro o fuera del mercado. Un regulador sube y baja poco a poco. La exposición es dos veces la fracción de activos que están sobre su media de 200 días. Si todos están arriba, voy al doble; si la mitad, a 1x; si ninguno, a cero. Así no entro ni salgo de golpe, y evito las entradas y salidas a destiempo.

**[3:15 — Cómo lo probé]** (pantalla: checklist animado de filtros con los valores reales de `exp_details.json`)
BOCETO: ✓ Costos: 3 bps por rotación · ✓ Señal de ayer (rezago de 1 día) · ✗ Superar a invertir a 1x · ✗ Criterio del script · — Fuera de muestra: no aplicado · — Deflated Sharpe: no aplicado. Cada fila entra con tick.
> Las reglas del juego, iguales para las tres. Costo de 3 puntos básicos cada vez que se mueve la cartera; un punto básico es la centésima parte de un 1%. La señal siempre sale de los datos de ayer, para no mirar el futuro. Todo se compara contra la misma cesta invertida a 1x, de 2014 a 2024, y además en dos años de crisis: 2020 y 2022. El criterio era exigente: Sharpe positivo en todo el periodo y en 2022, y además superar a 1x. El Sharpe mide cuánto rindes por cada unidad de riesgo que aguantas; el de invertir a 1x es 0.37. En este experimento no apliqué la prueba fuera de muestra, que es probar en un periodo que la estrategia nunca vio, ni el Deflated Sharpe, que ajusta por cuántas versiones probaste. Esas pruebas las hago en el siguiente video.

**[4:15 — Resultado de B1 y B2]** (pantalla: barras horizontales + tabla)
BOCETO: barras que crecen de izquierda a derecha, rojas las negativas, verde B3 y gris punteada la de 1x; el sello ✕ rojo cae sobre B1 y B2.
| Variante | Retorno 2014–2024 | Sharpe |
|---|---|---|
| B1 neutral en dólares | −28.0% | −0.22 |
| B2 núcleo 1x + capa neutral | −9.6% | −0.03 |
| B3 exposición continua | +22.5% | 0.35 |
| Invertido a 1x (sin estrategia) | +23.1% | 0.37 |
> Empecemos por B1, la neutral. Perdió 28.0% entre 2014 y 2024, con un Sharpe de −0.22. Y mira el dato importante: sin costos ya perdía 10.6%. Es decir, no tiene ventaja ni antes de pagar nada; comprar lo más fuerte y vender lo más débil dentro de esta cesta no deja margen, y los costos la hunden todavía más.
> B2 es la que más duele. El núcleo comprado por sí solo da +23.1%. Con la capa neutral encima quedó en −9.6%, con un Sharpe de −0.03. La capa perdedora envenenó al núcleo ganador. Una lección útil: no puedes mezclar algo que pierde con algo que gana y esperar que el promedio sea bueno. Si una capa no tiene ventaja, solo resta.

**[5:05 — Resultado de B3]** (pantalla: curva B3 contra 1x, `series/extra-v61.json[0]` y `[1]`, casi pegadas; zoom a 2022)
BOCETO: zoom a 2022 con una caja «caída máxima B3: −6.5%» y debajo «Sharpe 2022: −0.61 (el criterio pedía positivo)».
> B3 fue la mejor: +22.5%, con un Sharpe de 0.35. Casi idéntica a invertir a 1x, que dio +23.1% y 0.37. Casi, pero no la supera. Lo que sí hizo bien fue cuidar el riesgo: tuvo el menor drawdown, la peor caída desde un máximo, en las dos crisis. En 2022, su caída máxima fue de −6.5%. Pero ese mismo año su Sharpe fue de −0.61, y el criterio pedía que fuera positivo. Cuidó el riesgo, pero no ganó más.

**[5:40 — Por qué falla lo neutral]** (pantalla: dos dibujos: «comparar activos entre sí» con una ✕ y «regular la exposición» con un ✓ a medias)
BOCETO: dos tarjetas lado a lado; la izquierda «comparar activos entre sí» se tacha con ✕ rojo y el texto «sin ventaja ni en bruto»; la derecha «regular la exposición» muestra un ✓ a medias y «iguala a 1x».
> ¿Por qué no funciona lo neutral aquí? Porque la ventaja tendría que salir de comparar los activos entre sí, y entre estos 15 esa comparación no aporta nada: ni siquiera en bruto. El análisis lo resume así: lo neutral entre activos está muerto. B3 se porta mejor porque no apuesta a un día concreto de cambio; solo regula cuánto riesgo tomo. Pero regular no es lo mismo que ganar: iguala a 1x, no lo supera.

**[6:10 — Con tu capital]** (pantalla: tarjeta «Con tu capital» con el selector $10,000 / $100,000 y el aviso ámbar)
BOCETO: tarjeta idéntica a la del sitio; al pasar a $100,000 los números cambian con animación; el aviso «llega hasta x2» parpadea una vez.
> Veamos qué significa en dinero. Esta es la tarjeta «Con tu capital» del sitio, para B3, de julio de 2014 a diciembre de 2024. Con $10,000, B3 habría ganado +$2,249; invertido a 1x y esperando, +$2,310. Con $100,000: +$22,490 contra +$23,098. Prácticamente lo mismo. La peor caída desde un máximo fue de −$1,364 con 10,000, o −$13,640 con 100,000: un −13.6%. Ojo con esta curva: llega a exposición de hasta el doble, así que ganancias y pérdidas se amplifican en esa proporción. Es una simulación con datos pasados, no una promesa de lo que pasará.

**[6:50 — Conclusión]** (pantalla: las cuatro cifras finales, luego el logo)
BOCETO: las cuatro barras finales (−28.0, −9.6, +22.5 y la línea punteada +23.1) quedan fijas; encima, sello «NINGUNA LE GANÓ A 1x»; cierre con el logo y la frase «El trading no se promete: se prueba.»
> Resumen. Tres intentos de adivinar cuándo cambia el mercado, y ninguno superó a invertir y esperar: −28.0%, −9.6% y +22.5% contra +23.1%. Lo neutral entre activos no tiene ventaja. Lo continuo cuida el riesgo, pero no gana más. En el próximo video le hago a B3 el examen completo, con la prueba fuera de muestra y el Deflated Sharpe. Todos los datos en atlas-lab-one.vercel.app, experimento 61. El trading no se promete: se prueba. Contenido educativo, no es asesoría financiera.

---

## SHORT (9:16, ≈ 45 s)

**[0-3 s]** (boceto: «−28.0%» rojo gigante con sacudida; b-roll de pantallas con velas rojas, kb=in; audio: golpe de bajo)
> Perdió 28.0% siendo neutral al mercado.

**[3-12 s]** (boceto: dos columnas «compra lo fuerte» / «vende lo débil» sobre b-roll de ciudad de noche, kb=out; whoosh)
> Era la estrategia que, en teoría, no dependía del mercado. Se llama neutral en dólares: compra lo más fuerte y vende en corto lo más débil.

**[12-18 s]** (boceto: balanza nivelada y mosaico de 15 casillas; línea de tiempo 2014→2024; sello «con costos»; kb=in)
> Así da igual si el mercado sube o baja. La probé en 15 activos, de 2014 a 2024, con costos.

**[18-26 s]** (boceto: contador −10.6% → −28.0% en rojo; sello ✕; tick por cada cifra)
> Antes de costos ya perdía 10.6%. Con costos, 28.0%. Y cuando la mezclé con una cartera buena, la arrastró: −9.6% en vez de +23.1%.

**[26-36 s]** (boceto: curva verde B3 pegada a la gris de 1x; b-roll de regulador de luz, kb=in)
> La tercera idea, un regulador en vez de un interruptor, aguantó: +22.5%. Pero invertir y esperar dio +23.1%. No la supera, y en 2022 su Sharpe fue −0.61.

**[36-45 s]** (boceto: texto «¿cuánto perdió?» sobre fondo negro; logo; el último fotograma corta y entra «−28.0%»)
> Detectar el cambio de régimen no mejoró nada. Video completo en el canal. Y la pregunta que queda: ¿cuánto perdió la estrategia que, en teoría, no dependía del mercado?

Gancho alterno A: «Tres formas de adivinar el mercado. Ninguna le ganó a no hacer nada.» · B: «Neutral al mercado, pero perdió 28.0%.»

## Descripción (YouTube)
Probé tres ideas para detectar el cambio de régimen del mercado en una cesta de 15 activos (2014–2024): largo/corto neutral en dólares, núcleo 1x con capa neutral y exposición continua. Ninguna superó a invertir a 1x (+23.1%): −28.0%, −9.6% y +22.5%.

Datos completos: https://atlas-lab-one.vercel.app (experimento #61)

Contenido educativo. No es asesoría financiera ni recomendación de inversión.

Capítulos: 0:00 Gancho · 0:25 El cambio de régimen · 1:10 La cesta de 15 activos · 1:45 Idea 1: neutral en dólares · 2:25 Idea 2: núcleo más capa neutral · 2:45 Idea 3: exposición continua · 3:15 Cómo lo probé · 4:15 Resultado de B1 y B2 · 5:05 Resultado de B3 · 5:40 Por qué falla lo neutral · 6:10 Con tu capital · 6:50 Conclusión

Etiquetas: cambio de régimen, estrategia neutral, long short, media móvil 200, backtest, trading con datos, Sharpe ratio, drawdown, ATLAS Lab, estrategias de trading, exposición continua, comprar y mantener

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

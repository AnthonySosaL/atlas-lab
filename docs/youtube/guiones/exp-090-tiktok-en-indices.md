# Experimento #90 — ¿Cambia en índices? Nasdaq, S&P 500, DAX y FTSE

Estado del guion: **BORRADOR — pendiente de aprobación**
Estado del experimento: **parcial** (la tendencia sí gana dinero en índices, +$10.9k a +$14.8k sobre $10k, pero ninguna estrategia supera a comprar y esperar, +$29,368) · Serie A — «Probé la estrategia de TikTok» (plan-series.md) · el plan prevé 1 largo + 2 shorts; este archivo cubre el largo y el Short «comprar y esperar gana el doble»; queda para otro guion el Short «beta contra alfa»
Datos usados: `experiments.json` (v=90: kpis, metrics, chart, verdict, analysis, market, capital, period), `exp_details.json` (extra-v90: algo, filters; sin script original), `series/extra-v90.json` (7 curvas: 3 tendencias, comprar y esperar y 3 setups de TikTok), tabla «Con tu capital» de `docs/youtube`.
Producción (CLAUDE.md del canal): b-roll real detrás de cada escena con overlay oscuro 0.6, Ken Burns alternando in/out, subtítulos karaoke en MAYÚSCULAS con palabras clave en rojo, un dato visual por escena, golpe de bajo + sacudida solo en 1–2 momentos. Colores: rojo `#e11d2a`, verde `#22c55e`, fondo `#09090b`. Cifras en dígitos aquí; en el campo `tts` del JSON, en palabras.

## Títulos (3 opciones)
1. En índices: tendencia +$14,814, comprar y esperar +$29,368
2. +$14,814 ganando en índices… y comprar y esperar ganó el doble
3. Probé los TikToks en S&P 500, Nasdaq 100, DAX y FTSE 100

## Miniatura (pensada para el título 1)
Fondo `#09090b`. Dos columnas: una verde corta y otra blanca (referencia) justo el doble de alta. Texto enorme: «EL DOBLE» en blanco y, pequeño debajo, «sin estrategia». Logo ATLAS arriba a la derecha.

---

## VIDEO LARGO (16:9, ≈ 8 min)

**[0:00 — Gancho]** (pantalla: dos columnas, una el doble que la otra)
Hay una crítica justa a mis pruebas en divisas: «yo opero índices, no forex». Los probé en el S&P 500, el Nasdaq 100, el DAX y el FTSE 100, de 2012 a 2024. La tendencia clásica sí gana dinero: hasta +14,814 dólares sobre 10,000. Pero comprar y esperar gana +29,368. Habrías ganado el doble sin hacer ninguna estrategia.
BOCETO: dos columnas de `series/extra-v90.json`: EMA 50/200 (verde) que sube hasta +$14,814 y «Sin estrategia» (blanca) que llega al doble, +$29,368. Contadores animados. kb=in.

**[0:50 — Por qué importa el instrumento]** (pantalla: forex frente a índices)
Mis pruebas anteriores fueron en 7 pares de divisas más oro. Varios TikToks, en cambio, hablan de futuros, de acciones o de la apertura del Nasdaq. Y los dos mundos se comportan distinto: el forex revierte dentro del día, y los índices tienden al alza. Por eso repetí las pruebas donde ellos dicen operar.
BOCETO: dos paneles: «Forex: revierte dentro del día» con zigzag; «Índices: tienden al alza» con curva ascendente (esquemas ilustrativos, rotulados «ilustración»). kb=out.

**[1:50 — Qué medí]** (pantalla: dos preguntas y siete curvas)
Dos preguntas. ¿Gana dinero? ¿Supera a comprar y esperar los índices? Probé tres tendencias clásicas: precio sobre la media de 200 días, cruce de medias EMA 50/200 y momentum de 252 días. Y los núcleos de tres TikToks: la ruptura del máximo de 5 días, la barrida del mínimo del día previo y la media de 200 días con volumen doble. Todo sobre 10,000 dólares. Una aclaración de transparencia: el código original de este experimento no se conserva; las curvas se rehicieron con parámetros reconstruidos, que reproducen al dólar las cifras publicadas. Por eso los periodos y los costos de esta prueba no se pueden verificar.
BOCETO: siete etiquetas que forman la leyenda del gráfico; cartel ámbar «Parámetros reconstruidos: reproducen las cifras publicadas». Checklist `filters`: «periodos y costos: no verificable» en gris.

**[3:05 — Resultados]** (pantalla: tabla y curvas)
Las tres tendencias ganan dinero: entre +10,878 y +14,814 sobre 10,000. Pero comprar y esperar, con un Sharpe de 0.67, gana +29,368. Cero estrategias lo superan. Y los setups de los TikToks fallan incluso en índices: la ruptura, −424; la barrida, +353; el volumen, +707. Prácticamente cero.
| Con $10,000, 2012–2024, 4 índices | Resultado |
|---|---|
| Comprar y esperar | +$29,368 (Sharpe 0.67) |
| Tendencia: cruce de EMA 50/200 | +$14,814 |
| Tendencia: momentum de 252 días | +$11,854 |
| Tendencia: precio sobre la media de 200 días | +$10,878 |
| TikTok 2: media de 200 días + volumen doble | +$707 |
| TikTok 5: barrida del mínimo del día previo | +$353 |
| TikTok 1 y 4: ruptura del máximo de 5 días | −$424 |
BOCETO: las siete curvas reales de `series/extra-v90.json` dibujándose de 2012 a 2024; comprar y esperar en blanco grueso, tendencias en verde, setups de TikTok en gris y una roja (la ruptura). Sacudida cuando la roja cruza por debajo de 10,000.

**[4:25 — La trampa: es beta, no habilidad]** (pantalla: texto y curvas)
Aquí está la trampa. Cualquiera que opere índices y se ponga comprado puede mostrar un «+X% al año»: los índices subieron. Eso se llama beta, lo que gana el mercado por sí solo. La habilidad, o alfa, sería ganarle a comprar y esperar, y ninguna lo logra: habrías ganado el doble comprando y manteniendo. Su rentabilidad es beta pura, el mercado subió. Y los setups específicos de los TikToks no suman nada: lo único que gana es el sesgo genérico de estar comprado en el índice.
BOCETO: definición en dos cajas: «Beta = lo que gana el mercado solo» / «Alfa = ganarle a comprar y esperar». Las curvas de tendencia por debajo de la de referencia; texto «0 estrategias superan a comprar y esperar».

**[5:35 — El instrumento no cambia la conclusión]** (pantalla: enlace con el #80)
El instrumento cambia cuánta beta capturas, pero la ventaja sigue sin existir. Y eso conecta con el experimento 80: estar comprado en índices con gestión de riesgo es un plan de ingreso sensato, el camino realista, pero eso es beta gestionada, no alfa. No hay atajo.
BOCETO: tarjeta con «#80: beta gestionada» y flecha hacia «#90». kb=out.

**[6:25 — Con tu capital]** (pantalla: tarjeta de capital con advertencia)
Con 10,000 dólares, la mejor tendencia gana +14,814 y comprar y esperar, +29,368. Con 100,000 dólares, esa escala es +148,140 contra +293,680; los setups de los TikToks serían −4,240 la ruptura, +3,530 la barrida y +7,070 el volumen. Recuerda la advertencia: las curvas usan parámetros reconstruidos que reproducen las cifras publicadas.
BOCETO: barras del `chart` de la ficha («Ganancia 2012–2024 escalada a $100,000»): 293,680 (referencia), 148,140 y 108,780 (tendencias), 7,070, 3,530 y −4,240 (setups). Cartel ámbar con `capital.note`.

**[7:15 — Conclusión]**
Resultado parcial. La tendencia sí gana dinero en índices, pero no le gana a comprar y esperar, y los setups de los TikToks no suman nada. Ganar dinero no es lo mismo que tener ventaja. El trading no se promete: se prueba.

**[7:45 — Cierre]**
Todos los datos en atlas-lab-one.vercel.app, experimento 90. Contenido educativo, no es asesoría financiera.

---

## SHORT (9:16, ≈ 50 s)

**[0-3 s]** «Esta estrategia gana +14,814 en índices. Y aun así, comprar y esperar ganó el doble.»
BOCETO: dos columnas, la verde (+$14,814) y la blanca el doble de alta (+$29,368), sobre b-roll de pantallas de índices (kb=in), overlay 0.6.

**[3-15 s]** «Muchos TikToks dicen operar índices, no forex. Los probé: S&P 500, Nasdaq 100, DAX y FTSE 100, de 2012 a 2024, con 10,000 dólares.»
BOCETO: cuatro iconos de índices y el contador «$10,000» (kb=out); ticker arriba.

**[15-29 s]** «La tendencia clásica gana entre +10,878 y +14,814. Comprar y esperar: +29,368. Ninguna estrategia le gana.»
BOCETO: las curvas reales dibujándose; la blanca queda arriba; golpe de bajo + sacudida cuando se ve +29,368.

**[29-42 s]** «Los setups de los TikToks: la ruptura, −424. La barrida, +353. El volumen, +707. Casi cero.»
BOCETO: tres barras casi planas (una roja, dos verde pálido) con tick por cada cifra.

**[42-50 s]** «Es el mercado que subió, no habilidad. El video completo está en el canal. La estrategia ganó dinero… pero el doble lo ganó comprar y esperar.»
BOCETO: texto final «Video completo en el canal» + pequeño «No es asesoría financiera · El trading no se promete: se prueba». Loop: «el doble» conecta con el hook.

---

## Descripción de YouTube
Varios TikToks dicen operar índices y no forex, así que repetí las pruebas en S&P 500, Nasdaq 100, DAX y FTSE 100 (2012–2024) con $10,000: la tendencia clásica gana entre +$10,878 y +$14,814, pero comprar y esperar gana +$29,368, el doble. Los setups de los TikToks (ruptura −$424, barrida +$353, volumen +$707) fallan incluso en índices. Las curvas usan parámetros reconstruidos que reproducen las cifras publicadas.
Datos completos: https://atlas-lab-one.vercel.app (experimento #90)
Contenido educativo. No es asesoría financiera ni recomendación de inversión.

## Capítulos
0:00 Gancho · 0:50 Por qué importa el instrumento · 1:50 Qué medí · 3:05 Resultados · 4:25 La trampa: beta, no habilidad · 5:35 El instrumento no cambia la conclusión · 6:25 Con tu capital · 7:15 Conclusión

## Etiquetas
trading en índices, s&p 500, nasdaq 100, dax, ftse 100, comprar y mantener, beta contra alfa, seguimiento de tendencia, estrategias de tiktok, backtest, atlas lab, trading con datos

## Rúbrica (autoevaluación, 1–5)
| Pieza | hook_0_3s | ritmo | promesa_cumplida | potencial_loop | claridad_no_traders | honestidad_atlas | audio | cta | Promedio |
|---|---|---|---|---|---|---|---|---|---|
| Largo | 5 | 4 | 5 | 4 | 4 | 5 | 4 | 4 | 4.4 |
| Short | 5 | 4 | 5 | 5 | 4 | 5 | 4 | 4 | 4.5 |

Hook ≥ 4 ✓ · honestidad 5 ✓. Punto débil: no hay script original, así que periodos y costos no son verificables; el cartel «parámetros reconstruidos» debe aparecer junto a las curvas y el Short debe dejarlo en la descripción.

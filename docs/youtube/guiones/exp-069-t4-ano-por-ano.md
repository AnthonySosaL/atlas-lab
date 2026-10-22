# Experimento #69 — Tema 4: Año por año (2022: el S&P 500 cae 19.4% y esta estrategia, en el papel, gana 6.7%)

**Tema 4 de 4 del experimento #69** · Qué aporta frente a los otros temas: es el tema «con tu capital y el calendario». Baja la curva a cada año calendario, muestra cómo se portó en los años malos y buenos del mercado, señala el año sospechoso (+54.2% en 2021) y el tiempo bajo el agua. Se entiende sin los otros temas.
Estado del guion: **BORRADOR — pendiente de aprobación**
Estado del experimento: **parcial** (Sharpe 1.85 y peor día de −7.8%, pero el costo del put es un supuesto y falta el triple test con datos de opciones reales)
Serie: F (anomalías y estacionalidad). Continúa el #64.
Datos usados: `series/extra-v69.json` ([0] VRP protegido, bruto; [1] S&P 500 comprar y esperar) para los retornos por año calendario (último valor de cada año contra el del año anterior), el tiempo bajo el agua y las fechas del drawdown (cifras calculadas de la curva) · `experiments.json` (v=69: metrics —92% de años positivos, peor año −6% en 2018, MaxDD −32%—, capital.note) · tabla «Con tu capital» (fila #69: +$780,194 contra +$347,885 con $100,000; $10,000: +$78,019).
Producción (CLAUDE.md del canal): b-roll real detrás de cada escena con overlay 0.6, Ken Burns alternando, subtítulos karaoke en MAYÚSCULAS, un dato visual por escena. Colores: rojo `#e11d2a`, verde `#22c55e`, fondo `#09090b`.

## Títulos
1. 2022: el S&P 500 cae 19.4% y esta estrategia gana 6.7% (en el papel)
2. Año por año: 12 de 13 años positivos y un +54.2% sospechoso
3. VRP protegido de 2012 a 2024: cómo se portó en cada año

## Miniatura
Fondo `#09090b`. Una fila de 13 barras anuales: doce verdes `#22c55e` y una roja `#e11d2a` (2018); sobre la barra de 2021, un círculo amarillo con «+54.2%?». Texto grande: «AÑO POR AÑO». Logo ATLAS esquina inferior derecha.

---

## VIDEO LARGO (≈ 6 min)

**[0:00 — Gancho]** (pantalla: dos barras de 2022: gris «S&P 500 −19.4%» hacia abajo y verde «estrategia +6.7%» hacia arriba)
BOCETO: la barra gris cae con whoosh; la verde sube a contramarcha; golpe de bajo; texto pequeño «en el papel, bruto».
> En 2022 el S&P 500 cayó 19.4%. Una estrategia de vender volatilidad con cobertura, en el papel, ganó 6.7%. Hoy la miro año por año, de 2012 a 2024, para ver cuándo gana, cuándo se queda atrás y qué año me hace desconfiar.

**[0:18 — Qué experimento es]** (pantalla: rótulo «Experimento #69 · ATLAS Lab» y el nombre debajo)
BOCETO: rótulo con el número 69 y el nombre «VRP protegido (cobertura de cola)»; logo en la esquina.
> Este es el experimento #69 de ATLAS Lab: VRP protegido, cobertura de cola. Todos los resultados están en la página del experimento.

**[0:35 — Cómo leer esta tabla]** (pantalla: curva de `series/extra-v69.json[0]` cortada en 13 tramos anuales)
BOCETO: la curva se parte en tramos por año; cada tramo se convierte en una barra; nota «2012 empieza el 19 de enero; cifras calculadas de la curva».
> Tomo la curva de la estrategia y la del S&P 500 comprar y esperar, y calculo cuánto cambió cada una dentro de cada año calendario. La estrategia vende la prima de volatilidad y compra un put lejano que limita la pérdida. Todo es bruto, sin costos, y el precio del put es un supuesto.

**[1:05 — Los tres años malos del mercado]** (pantalla: tabla con tres filas)
BOCETO: tres pares de barras (estrategia en verde o rojo, mercado en gris); la de 2022 con la mayor diferencia.
| Año | Estrategia | S&P 500 |
|---|---|---|
| 2015 | +3.5% | −0.8% |
| 2018 | −6.0% | −6.3% |
| 2022 | +6.7% | −19.4% |
> En los años malos del mercado, 2015, 2018 y 2022, la estrategia hizo +3.5%, −6.0% y +6.7%. El mercado: −0.8%, −6.3% y −19.4%. El año de la estrategia con pérdida es 2018, el peor del backtest: −6%, casi igual que el mercado. En 2022 es donde más se nota la cobertura.

**[2:00 — Los años buenos: se queda atrás]** (pantalla: tabla con dos filas, 2013 y 2019)
BOCETO: dos pares de barras donde la gris es más alta que la verde; texto «el seguro tiene un precio».
| Año | Estrategia | S&P 500 |
|---|---|---|
| 2013 | +17.3% | +29.6% |
| 2019 | +7.5% | +28.9% |
> En los años buenos del mercado, se queda atrás. En 2013, +17.3% contra +29.6%. En 2019, +7.5% contra +28.9%. Es el trato de la estrategia: gana poco cuando el mercado sube mucho, y se defiende cuando el mercado cae. No es magia: es otro perfil de riesgo.

**[2:45 — El año sospechoso: 2021]** (pantalla: barra de 2021 en amarillo, «+54.2%», contra el mercado, «+27.1%»)
BOCETO: la barra de 2021 destaca sobre las demás y un signo de interrogación pulsa a su lado; sello «aproximación con el VIX».
> Ahora el año que me hace desconfiar: 2021, con +54.2%, el doble del mercado, que hizo +27.1%. Un resultado así no lo celebro, lo cuestiono. Esta es una aproximación con el VIX, no con opciones reales, sin costos y con el precio del seguro supuesto. Un año tan extremo dice que la aproximación puede estar sobreestimando, no que la estrategia sea mágica. Lo marco como señal de cautela.

**[3:30 — El 2020 y el tiempo bajo el agua]** (pantalla: curva con el valle del 16 de marzo de 2020 marcado; dos relojes de arena)
BOCETO: curva con el valle del 16-mar-2020 marcado en rojo y el tramo bajo el agua sombreado; dos relojes: «estrategia: 1.9 años» y «S&P 500: 2.1 años».
> En 2020 la estrategia terminó en +32.7%, pero su peor caída del backtest, de −32%, llegó el 16 de marzo de 2020, desde un máximo de octubre de 2018. Tardó hasta agosto de 2020 en recuperar ese máximo: cerca de 1.9 años bajo el agua. El S&P 500 tuvo su racha más larga bajo el agua entre fines de 2021 y principios de 2024: unos 2.1 años. Es decir, aun con la cobertura, hubo un periodo largo en el que se sentía mal.

**[4:15 — Con tu capital]** (pantalla: tarjeta «Con tu capital» con el aviso ámbar; curva verde contra la gris)
BOCETO: sello «BRUTO · SIN COSTOS REALES» sobre la tarjeta; los números de $100,000 aparecen atenuados con «no es una expectativa».
> Con $10,000, la curva de esta aproximación terminó en +$78,019; con $100,000, en +$780,194, contra +$347,885 de comprar y esperar el S&P 500. Es bruta: el propio experimento estima que lo realista sería la mitad. Y recuerda que, para operarlo, haría falta una cuenta de opciones.

**[4:50 — Lo que NO muestra una tabla anual]** (pantalla: tres avisos en ámbar)
BOCETO: tres avisos: «años completos, no el peor día», «bruto», «precio del put supuesto».
> Una tabla anual esconde lo que pasa dentro del año. El peor día de la estrategia fue de −7.8%, y un año positivo puede incluir semanas muy malas. Y todo lo que ves está calculado sin costos reales. Por eso el estado sigue siendo parcial.

**[5:20 — Preguntas de un escéptico]** (pantalla: tres tarjetas: «¿con costos?», «¿otro periodo?», «¿y 2021?»)
BOCETO: tres tarjetas que se voltean: «no medido», «solo 2012–2024», «señal de cautela».
> ¿Y con costos? No los medí. ¿Y en otro periodo? Solo 2012 a 2024. ¿Y 2021? Lo trato como una señal de cautela, no como una prueba de nada.

**[5:40 — Ficha del experimento #69]** (pantalla: tarjeta con la ficha y la URL abajo)
BOCETO: tarjeta con cinco líneas que entran con tick y, al final, la URL resaltada en verde.
> Ficha del experimento 69. Estado: parcial. Cifras clave: 12 de 13 años positivos, peor año −6% en 2018, y +6.7% en 2022 contra −19.4% del mercado. Lo que decidió: el precio del put es un supuesto y faltan opciones reales, fuera de muestra y Deflated Sharpe. Lección: una curva muy regular merece más preguntas, no menos. Revísalo completo en atlas-lab-one.vercel.app/e/69.

**[6:10 — Cierre]**
BOCETO: 13 barras anuales con la de 2021 marcada con «?»; logo.
> Todos los datos en atlas-lab-one.vercel.app, experimento 69. El trading no se promete: se prueba. Contenido educativo, no es asesoría financiera.

---

## SHORT (9:16, ≈ 49 s)

**[0-3 s]** (boceto: barra gris «−19.4%» hacia abajo y barra verde «+6.7%» hacia arriba; b-roll de bolsa cayendo, kb=in; golpe de bajo)
> 2022: el S&P 500 cae 19.4%. Esta estrategia, en el papel, gana 6.7%.

**[3-14 s]** (boceto: 13 barras anuales, 12 verdes y una roja; whoosh)
> Es el VRP protegido: vende la prima de volatilidad con un seguro. De 2012 a 2024, 12 de 13 años positivos. Su único año malo: 2018, con −6%.

**[14-26 s]** (boceto: tres pares de barras: 2015, 2018, 2022; ticks)
> En los años malos del mercado, 2015, 2018 y 2022, hizo +3.5%, −6.0% y +6.7%. El mercado: −0.8%, −6.3% y −19.4%.

**[26-35 s]** (boceto: 2019: barra verde corta +7.5% y gris larga +28.9%)
> En los buenos, se queda atrás: en 2019, +7.5% contra +28.9%.

**[35-44 s]** (boceto: barra de 2021 en amarillo «+54.2%?»; sello «aproximación, sin costos»)
> Y un +54.2% en 2021 me hace sospechar: es una aproximación con el VIX, sin costos. Estado: parcial.

**[44-49 s]** (boceto: texto «Experimento #69 completo en el enlace»; logo)
> Video completo en el canal y experimento #69 completo en el enlace. ¿Qué año te daría más desconfianza?

Gancho alterno A: «12 de 13 años positivos: ¿demasiado bueno?» · B: «+54.2% en un año: por qué no lo celebro.»

## Descripción de YouTube — video largo
https://atlas-lab-one.vercel.app/e/69?utm_source=youtube&utm_medium=video&utm_campaign=exp069-t4
Ficha: experimento #69, VRP protegido (cobertura de cola). Estado: parcial. 12 de 13 años positivos, peor año −6% (2018); en 2022, +6.7% contra −19.4% del S&P 500. Con $100,000 (bruto): +$780,194 contra +$347,885 de comprar y esperar.
La estrategia año por año, de 2012 a 2024: cuándo gana, cuándo se queda atrás y por qué desconfío del +54.2% de 2021. Aproximación con el VIX, sin costos reales.
Contenido educativo. No es asesoría financiera ni recomendación de inversión.

## Descripción de YouTube — Short
https://atlas-lab-one.vercel.app/e/69?utm_source=youtube&utm_medium=short&utm_campaign=exp069-t4
Ficha: experimento #69, parcial. 2022: +6.7% contra −19.4% del S&P 500 (en el papel, bruto). Contenido educativo, no es asesoría financiera.

## Capítulos
0:00 Gancho · 0:18 Qué experimento es · 0:35 Cómo leer esta tabla · 1:05 Los tres años malos del mercado · 2:00 Los años buenos · 2:45 El año sospechoso · 3:30 El 2020 y el tiempo bajo el agua · 4:15 Con tu capital · 4:50 Lo que no muestra una tabla anual · 5:20 Preguntas de un escéptico · 5:40 Ficha del experimento #69 · 6:10 Cierre

## Etiquetas
VRP protegido, año por año, retorno anual, S&P 500, cobertura de cola, 2022, drawdown, tiempo bajo el agua, backtest, trading con datos, ATLAS Lab, vender volatilidad

## Rúbrica (autoevaluación, 1–5)
| Pieza | hook_0_3s | ritmo | promesa_cumplida | potencial_loop | claridad_no_traders | honestidad_atlas | audio | cta | Promedio |
|---|---|---|---|---|---|---|---|---|---|
| Largo | 5 | 4 | 5 | 4 | 4 | 5 | 4 | 4 | 4.38 |
| Short | 5 | 4 | 5 | 4 | 4 | 5 | 4 | 4 | 4.38 |

Hook ≥ 4 ✓ · honestidad 5 ✓. Punto débil: los retornos por año se calculan de la curva bruta (no figuran en la ficha del sitio); todo el guion repite «bruto / aproximación» y marca 2021 como señal de cautela.

# Experimento #69 — Tema 2: Apalancamiento x4 (cuando el peor día pierde más de lo que tienes)

**Tema 2 de 4 del experimento #69** · Qué aporta frente a los otros temas: el tema 1 cuenta la estrategia y su resultado; este explica el apalancamiento y la cola con la prueba más dura del experimento: multiplicar la apuesta por cuatro. Se entiende sin haber visto el tema 1.
Estado del guion: **BORRADOR — pendiente de aprobación**
Estado del experimento: **parcial** (Sharpe 1.85 y peor día de −7.8%, pero el costo del put es un supuesto y falta el triple test con datos de opciones reales)
Serie: F (anomalías y estacionalidad). Continúa el #64.
Datos usados: `experiments.json` (v=69: kpis, metrics, notes, analysis, capital; v=64: peor día −28.6σ el 12 de marzo de 2020, prima positiva el 82% de los días; v=13: la cuenta se corta el 12-mar-2020) · `exp_details.json` (extra-v69: algo, code, filters: «−31% vs −108%» con x4) · `series/extra-v69.json` ([0] VRP protegido, bruto). Cálculos sencillos sobre cifras publicadas: −26.9% por 4 ≈ −108% y −7.8% por 4 ≈ −31% (los dos resultados ya figuran en el experimento); sobre $10,000, esos porcentajes son $10,800 y $3,100.
Producción (CLAUDE.md del canal): b-roll real detrás de cada escena con overlay 0.6, Ken Burns alternando, subtítulos karaoke en MAYÚSCULAS, un dato visual por escena. Colores: rojo `#e11d2a`, verde `#22c55e`, fondo `#09090b`.

## Títulos
1. Apalancamiento x4: −108% sin seguro, −31% con seguro
2. Cómo un solo día puede liquidar una cuenta: −26.9%
3. Vender volatilidad multiplicando por cuatro: lo que pasa el peor día

## Miniatura
Fondo `#09090b`. Una barra de saldo verde `#22c55e` partida por una grieta roja `#e11d2a` con «x4» y «−108%»; a la derecha, una barra más corta con un paraguas blanco y «−31%». Texto grande: «MÁS DE LO QUE TIENES». Logo ATLAS esquina inferior derecha.

---

## VIDEO LARGO (≈ 7 min)

**[0:00 — Gancho]** (pantalla: dos barras de pérdida del peor día con x4: roja «−108%» que rompe el borde de la pantalla y verde «−31%» frenada por un paraguas)
BOCETO: la barra roja crece, pasa la línea del 100% («todo tu dinero») y sale de la pantalla; la verde se frena; golpe de bajo en −108%.
> Hay una estrategia que cobra casi todos los días y que, multiplicada por cuatro, puede perder 108% de tu cuenta en un solo día. Es decir, más de lo que tienes. Con un seguro que cuesta el 12% de lo que cobra, ese mismo día pierde 31%.

**[0:18 — Qué experimento es]** (pantalla: rótulo «Experimento #69 · ATLAS Lab» y el nombre debajo)
BOCETO: rótulo con el número 69 y el nombre «VRP protegido (cobertura de cola)»; logo en la esquina.
> Este es el experimento #69 de ATLAS Lab: VRP protegido, cobertura de cola. Todos los resultados están en la página del experimento.

**[0:40 — Qué es el apalancamiento]** (pantalla: una palanca con una bolsa de dinero en cada lado; etiquetas «x1» y «x4»)
BOCETO: balanza-palanca; con x1 el saldo oscila poco; al pasar a x4 la oscilación se cuadruplica; la línea del 100% marcada en rojo.
> Apalancar es multiplicar la apuesta. Con x1 apuestas lo que tienes. Con x4 apuestas cuatro veces: ganas cuatro veces más cuando acierta, y pierdes cuatro veces más cuando falla. Si el peor día de la estrategia a x1 es una pérdida de 26.9%, a x4 son 107.6%: la cuenta no solo se vacía, quedas debiendo. En el experimento sale redondeado como −108%.

**[1:25 — La estrategia en 30 segundos]** (pantalla: curva de capital de `series/extra-v69.json[0]` con una caída marcada; texto «prima positiva el 82% de los días»)
BOCETO: la curva sube en escalones pequeños; una caída enorme marcada «12-mar-2020»; texto «vendes un seguro contra caídas».
> La estrategia vende la prima de volatilidad del S&P 500, o sea, vende un seguro contra caídas. Cada día cobras una prima pequeña: en el experimento 64 salió positiva el 82% de los días. Cuando llega el desastre, pagas. El peor día de esa serie fue el 12 de marzo de 2020, de 28.6 desviaciones estándar. Es la definición de cola: pocos días, pérdidas enormes.

**[2:05 — Dos versiones, la misma apuesta]** (pantalla: dos columnas: «sin seguro» y «con seguro: put 6%, cuesta 12%»)
BOCETO: dos columnas con el mismo tamaño de apuesta (15% de volatilidad anual); la segunda lleva un paraguas y un techo punteado en la pérdida diaria.
> Comparé dos versiones con el mismo tamaño de apuesta. La primera, sin seguro. La segunda compra un put lejano: un contrato que gana valor cuando el mercado se desploma, y que cuesta el 12% de la prima que cobras. Ese put pone un tope a la pérdida de cada día. El tamaño se fija para que la versión sin seguro tenga 15% de volatilidad anual.

**[2:45 — La prueba: x1 contra x4]** (pantalla: tabla animada con barras)
BOCETO: filas que aparecen con tick; las cifras sin seguro en rojo largo, las de con seguro en verde corto; fila final con sello «cuenta liquidada».
| Medida (2012–2024) | Sin seguro | Con seguro |
|---|---|---|
| Peor día | −26.9% | −7.8% |
| Peor día con apalancamiento x4 | −108% | −31% |
| Drawdown máximo | −62% | −32% |
| Sharpe | 1.56 | 1.85 |
> El peor día pasa de −26.9% a −7.8%. Con x4, de −108% a −31%. El drawdown máximo, que es la peor caída desde un máximo, de −62% a −32%. Y el Sharpe, que mide cuánto rindes por cada unidad de riesgo, sube de 1.56 a 1.85. La conclusión del experimento: el put convierte una venta de volatilidad peligrosa en un riesgo definido.

**[3:30 — Con $10,000]** (pantalla: dos vasos de agua: uno desbordado y otro al 69%; leyenda «ilustración con las cifras del experimento»)
BOCETO: sobre $10,000, la barra roja pasa por encima del saldo y deja una deuda de $800; la verde deja $6,900. Sello «ilustración, no es una simulación nueva».
> Sobre $10,000, perder 108% significa perder los $10,000 y deber $800 más. Perder 31% son $3,100: te duele, pero la cuenta sigue viva. Eso es una ilustración con las cifras del experimento, no una simulación nueva. Pero muestra por qué los profesionales miran primero la cola y después el promedio.

**[4:10 — El mismo día en otro experimento]** (pantalla: tarjeta del experimento 13 con «12-mar-2020» y la curva cortada)
BOCETO: línea de tiempo con una marca el 12 de marzo de 2020; a un lado la tarjeta del #13 («la cuenta se corta») y al otro la del #64 («−28.6σ»).
> No es un riesgo de laboratorio. El 12 de marzo de 2020 también cortó la cuenta del bot del experimento 13, que operaba con x2 y reventó al tocar el límite de drawdown de 10%. Una pérdida concentrada en un día pasa por encima de cualquier promedio. La cola no avisa.

**[4:45 — Lo que NO está probado]** (pantalla: tres avisos en ámbar)
BOCETO: tres avisos: «el costo del put es un supuesto (12% de la prima)», «aproximación con el VIX, no opciones reales», «sin prueba fuera de muestra ni Deflated Sharpe».
> Esto es una aproximación con el VIX, de 2012 a 2024, y el costo del put es un supuesto: no incluye la diferencia entre el precio de compra y el de venta de las opciones. No hay prueba fuera de muestra ni Deflated Sharpe. Y ojo: −31% en un día sigue siendo un golpe enorme. El seguro limita la pérdida, no la elimina.

**[5:25 — Para quién es esto, y para quién no]** (pantalla: dos iconos: una cuenta de opciones y un bot de CFD tachado)
BOCETO: dos tarjetas: «requiere cuenta de opciones» en verde y «no es para el bot de CFD» tachada en rojo.
> Operarlo exige una cuenta de opciones, no el bot de CFD. Y el experimento lo deja como parcial: es lo más prometedor de los primeros 69 experimentos, pero prometedor no es probado.

**[5:50 — Preguntas de un escéptico]** (pantalla: tres tarjetas: «¿el put más caro?», «¿x4 real?», «¿otra época?»)
BOCETO: tres tarjetas que se voltean con «no medido» o «aproximación».
> Preguntas que me haría un escéptico. ¿Y si el put costara más? No lo medí con precios reales; la mejora sería menor. ¿Existe un x4 real? Es un escenario del experimento, no una recomendación. ¿Y otra época? Solo cubre 2012–2024.

**[6:20 — Ficha del experimento #69]** (pantalla: tarjeta con la ficha y la URL abajo)
BOCETO: tarjeta con cinco líneas que entran con tick y, al final, la URL resaltada en verde.
> Ficha del experimento 69. Estado: parcial. Cifras clave: Sharpe 1.85 contra 1.56 sin seguro; peor día −7.8% contra −26.9%; con x4, −31% contra −108%. Lo que decidió: faltan precios de opciones reales y el triple test. Lección: mira la cola antes que el promedio. Revísalo completo en atlas-lab-one.vercel.app/e/69.

**[6:50 — Cierre]**
BOCETO: paraguas abierto sobre la barra y el texto «el seguro limita, no elimina»; logo.
> Todos los datos en atlas-lab-one.vercel.app, experimento 69. El trading no se promete: se prueba. Contenido educativo, no es asesoría financiera.

---

## SHORT (9:16, ≈ 50 s)

**[0-3 s]** (boceto: barra roja «−108%» que sale de la pantalla; b-roll de palanca/grúa, kb=in; golpe de bajo)
> Multiplicada por cuatro, esta estrategia pierde 108% en un día. Más de lo que tienes.

**[3-14 s]** (boceto: curva en escalones con una caída; «prima positiva el 82% de los días»; whoosh)
> Vende la prima de volatilidad del S&P 500: cobras casi todos los días, y un día malo se paga caro. Su peor día fue de −26.9%.

**[14-24 s]** (boceto: palanca x1 → x4; −26.9% se convierte en −108%; ticks)
> Apalancar es multiplicar la apuesta. Con x4, un −26.9% se vuelve −108%: pierdes todo y debes más.

**[24-36 s]** (boceto: paraguas; barras −7.8% y −31%; sello «put a 6%, cuesta 12%»)
> Con un put lejano que cuesta el 12% de lo que cobras, el peor día baja a −7.8%. Y con x4 queda en −31%, no en −108%.

**[36-44 s]** (boceto: sello ámbar «PARCIAL · aproximación con el VIX»)
> Ojo: es una aproximación con el VIX, el costo del put es un supuesto y falta la prueba con opciones reales. Estado: parcial.

**[44-50 s]** (boceto: texto «Experimento #69 completo en el enlace»; logo)
> Video completo en el canal y experimento #69 completo en el enlace. ¿Cuánto apalancamiento es demasiado?

Gancho alterno A: «Pierdes 108% en un día: más de lo que tienes.» · B: «Un seguro baja el peor día de −26.9% a −7.8%.»

## Descripción de YouTube — video largo
https://atlas-lab-one.vercel.app/e/69?utm_source=youtube&utm_medium=video&utm_campaign=exp069-t2
Ficha: experimento #69, VRP protegido (cobertura de cola). Estado: parcial. Sharpe 1.85 contra 1.56 sin seguro; peor día −7.8% contra −26.9%; con apalancamiento x4, −31% contra −108%.
Qué es el apalancamiento y por qué un solo día de cola puede liquidar una cuenta. Aproximación con el VIX, 2012–2024; el costo del put es un supuesto y falta el triple test con opciones reales.
Contenido educativo. No es asesoría financiera ni recomendación de inversión.

## Descripción de YouTube — Short
https://atlas-lab-one.vercel.app/e/69?utm_source=youtube&utm_medium=short&utm_campaign=exp069-t2
Ficha: experimento #69, parcial. Con x4: −108% sin seguro, −31% con seguro. Contenido educativo, no es asesoría financiera.

## Capítulos
0:00 Gancho · 0:18 Qué experimento es · 0:40 Qué es el apalancamiento · 1:25 La estrategia en 30 segundos · 2:05 Dos versiones, la misma apuesta · 2:45 La prueba: x1 contra x4 · 3:30 Con $10,000 · 4:10 El mismo día en otro experimento · 4:45 Lo que no está probado · 5:25 Para quién es esto · 5:50 Preguntas de un escéptico · 6:20 Ficha del experimento #69 · 6:50 Cierre

## Etiquetas
apalancamiento, apalancamiento x4, VRP, vender volatilidad, riesgo de cola, put, cobertura, drawdown, S&P 500, VIX, trading con datos, ATLAS Lab

## Rúbrica (autoevaluación, 1–5)
| Pieza | hook_0_3s | ritmo | promesa_cumplida | potencial_loop | claridad_no_traders | honestidad_atlas | audio | cta | Promedio |
|---|---|---|---|---|---|---|---|---|---|
| Largo | 5 | 4 | 5 | 4 | 4 | 5 | 4 | 4 | 4.38 |
| Short | 5 | 4 | 5 | 5 | 4 | 5 | 4 | 4 | 4.50 |

Hook ≥ 4 ✓ · honestidad 5 ✓. Punto débil: «−108%» exige explicar que es el escenario x4 del experimento (el Short lo dice como «multiplicada por cuatro»); la parte de los $10,000 es una ilustración con cifras ya publicadas y así se rotula.

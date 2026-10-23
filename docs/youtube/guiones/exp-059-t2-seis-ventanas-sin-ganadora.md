# Experimento #59 — Tendencia o fuera (cambio de régimen con MA200) · Tema 2 de 4: seis ventanas, ninguna ganadora

Estado del guion: **BORRADOR — pendiente de aprobación**
Tema 2 de 4 del experimento #59 · Qué aporta frente a los otros temas: es el tema del MÉTODO de los parámetros. Explica qué es una media móvil, por qué elegir la ventana es una trampa y cómo una grilla de 6 ventanas (MA50 a MA300) y el Deflated Sharpe (0.21) muestran que no hay ventana robusta. El tema 1 cuenta la historia del +30.3% que era beta; el tema 3 compara dólares con Sharpe; el tema 4 trata de la prueba fuera de muestra 2007–2013.
Estado del experimento: **murió** (No sirvió): el +30.3% de 2014-2024 era beta de los índices; fuera de muestra (2007-2013) da Sharpe −0.09 y el Deflated Sharpe es 0.21 · Serie: G (propuesta «Cambio de régimen», #59 → #62) · Relacionado: #60, #61, #62
Datos usados: `experiments.json` (v=59: verdict, analysis, notes, metrics, kpis, params_view, capital.note), `exp_details.json` (extra-v59: algo, code.snippet, filters), `series/extra-v59.json` (curva 0 = Trend-flat MA200, curva 1 = comprar y esperar la cesta) y la tabla «Con tu capital» (`docs/youtube/*-capital.md`, fila #59).

## Títulos (3 opciones)
1. Seis versiones de la media móvil, seis Sharpe negativos (MA50 a MA300)
2. ¿Y si la ventana fuera otra? Ninguna de las seis salva la regla (MA200: Sharpe −0.04)
3. Cómo saber si una regla depende de un número caprichoso: grilla de ventanas y Deflated Sharpe 0.21

## Miniatura (1280×720)
Fondo `#09090b`. Una línea blanca horizontal rotulada «0» y, debajo, seis puntos rojos `#e11d2a` (uno por ventana) que no la tocan. Texto grande blanco: «6 DE 6 NEGATIVAS». Texto pequeño: «MA50 · MA100 · MA150 · MA200 · MA250 · MA300». Logo ATLAS esquina superior derecha.

---

## VIDEO LARGO (16:9, ≈ 5½ min)

**[0:00 — Gancho]** (pantalla: seis puntos que caen por debajo de una línea de cero)
Probé seis versiones de la misma regla de tendencia, con medias móviles de 50 a 300 días. Las seis dan un Sharpe negativo.
> BOCETO: línea de cero y seis puntos que caen uno a uno bajo ella, con tick; el de MA200 queda rotulado «−0.04». Golpe de bajo y sacudida al caer el sexto.

**[0:15 — Este experimento]** (pantalla: rótulo «Experimento #59 · Tendencia o fuera (cambio de régimen con MA200)»)
Este es el experimento #59 de ATLAS Lab: tendencia o fuera, un cambio de régimen con la media de 200 días. Todos los resultados están en la página del experimento. Hoy me centro en una pregunta: ¿importa qué número elegiste para la media?
> BOCETO: rótulo con «#59» y el nombre del experimento; logo ATLAS; whoosh suave.

**[0:35 — Qué es una media móvil]** (pantalla: precio con su media de 200 días)
La media móvil de 200 días es el promedio del precio de los últimos 200 días. Si el precio está por encima, se dice que el mercado está en tendencia alcista; por debajo, bajista. La regla: con el mercado sobre su media, compras con apalancamiento 2; debajo, sales a efectivo. La señal se aplica con un día de rezago y cuesta 3 puntos básicos por cada unidad de rotación.
> BOCETO: gráfico esquemático (ilustración) de precio con media de 200 días; tramos verdes «x2» sobre la media y grises «fuera» debajo. Recuadro `params_view`: MA200 · x2 / 0 · rezago 1 día · 3 bps.

**[1:05 — El riesgo de elegir el número]** (pantalla: un panel con seis botones, uno iluminado)
¿Por qué 200 y no 150 o 250? Si pruebas muchas ventanas y te quedas con la que mejor salió, esa ventana tiende a verse mejor de lo que realmente es: parte de su éxito es suerte. Es como quien dispara seis veces y dibuja la diana alrededor del mejor tiro. Por eso conviene probar toda una grilla de ventanas y mirar la forma completa, no solo la mejor.
> BOCETO: seis botones numerados (50, 100, 150, 200, 250, 300); se ilumina uno y aparece una diana dibujada alrededor de un tiro. Ilustración rotulada, sin datos.

**[1:45 — La grilla]** (pantalla: checklist de la prueba)
Probé seis ventanas: 50, 100, 150, 200, 250 y 300 días. Lo hice en una cesta de 7 pares de divisas más oro, con datos desde 2007, sobre el periodo 2014 a 2024. Con apalancamiento 2, rezago de 1 día y 3 puntos básicos de costo.
> BOCETO: checklist ✓ «7 pares + oro», ✓ «MA50 a MA300 (6)», ✓ «rezago 1 día», ✓ «3 bps», con la línea de tiempo 2014–2024 marcada.

**[2:25 — Resultado]** (pantalla: seis puntos bajo cero)
La media de 200 días da un Sharpe de −0.04. Las otras cinco, entre −0.12 y −0.39. El Sharpe es la ganancia por unidad de riesgo; por debajo de cero, la regla pierde. Las seis están por debajo de cero.
> BOCETO: seis puntos (MA50, MA100, MA150, MA200, MA250, MA300) bajo la línea de cero: MA200 en −0.04 y los demás entre −0.12 y −0.39; aviso ámbar «las 6 ventanas dan negativo».

**[3:00 — Cómo leer una grilla]** (pantalla: una meseta y un pico)
Una regla sólida se parece a una meseta: funciona con muchas ventanas parecidas. Una regla frágil se parece a un pico: funciona con una ventana y se cae con las vecinas. Si una sola ventana hubiera salido muy positiva, sospecharía del pico y de la suerte. Aquí no hay ni pico ni meseta: están todas bajo cero. La ficha lo resume así: no hay ventana robusta.
> BOCETO: dos siluetas, «meseta = sólida» y «pico = frágil»; los seis puntos reales debajo, ni meseta ni pico, solo un suelo de números negativos.

**[3:40 — El Deflated Sharpe]** (pantalla: medidor con meta en 0.95 y aguja en 0.21)
El Deflated Sharpe ajusta el Sharpe por el número de intentos: descuenta la suerte de haber probado seis ventanas. La nota que se exige es mayor que 0.95. Esta regla sacó 0.21. No se queda cerca.
> BOCETO: medidor semicircular con la meta 0.95 en verde y la aguja clavada en 0.21; seis monedas de las que solo una se ilumina.

**[4:15 — El contraste: la cesta completa]** (pantalla: curva de la cesta completa, `series/extra-v59.json[0]`, con +30.3%)
Entonces, ¿de dónde sale el +30.3% que se ve en la cesta completa? De la beta de los índices: en la cesta con índices y apalancamiento 2, la regla gana mientras los índices suben. Aun ahí, su Sharpe es de 0.33, por debajo del 0.37 de estar invertido a 1x. Sin los índices, no queda ventaja.
> BOCETO: pantalla dividida: izquierda «con índices» (+30.3%, Sharpe 0.33 contra 0.37), derecha «sin índices» (6 ventanas negativas); texto «BETA ≠ VENTAJA».

**[4:45 — Con tu capital]** (pantalla: tarjeta «Con tu capital»)
Con $10,000, la curva de la cesta completa termina en +$3,027; con $100,000, en +$30,275. Comprar y esperar la cesta a 1x, de julio de 2014 a finales de 2024: +$2,310 y +$23,098. Ojo: esta es la curva de la cesta completa con apalancamiento 2; en la cesta sin índices, las seis ventanas son negativas.
> BOCETO: tarjeta de capital con dos filas (regla en verde claro, sin estrategia en gris); nota ámbar: «Curva de la cesta completa. Simulación, no es una promesa».

**[5:10 — Conclusión]** (pantalla: los seis puntos del inicio)
Cuando una regla depende de un número, pregunta cuántos probaron. Aquí fueron seis, y ninguno funcionó.
> BOCETO: los seis puntos del inicio, fijos, bajo la línea de cero.

**[5:25 — Ficha del experimento #59 y cierre]** (pantalla: tarjeta con la ficha y la URL)
Ficha del experimento #59. Estado: murió. Cifra clave: el +30.3% de 2014–2024 era beta; con seis ventanas, todas dan Sharpe negativo. Filtro que decidió: Deflated Sharpe de 0.21, cuando se exige más de 0.95, y Sharpe de −0.09 fuera de muestra. Lección: un número bonito dentro de muestra no es una ventaja. Revísalo completo en atlas-lab-one.vercel.app/e/59. Contenido educativo, no es asesoría financiera. El trading no se promete: se prueba.
> BOCETO: tarjeta en pantalla con las 4 líneas de la ficha (estado rojo «murió») y la URL `atlas-lab-one.vercel.app/e/59` en grande; fundido a la frase de marca.

---

## SHORT (9:16, ≈ 44 s) — "Seis de seis"
Título del Short: 6 versiones de la media móvil, 6 negativas #Shorts

**[0-3 s]** "Seis versiones de la misma regla. Seis resultados negativos."
> BOCETO: B-roll vertical de pantallas de mercado con overlay 0.6; seis puntos rojos que caen bajo una línea de cero; golpe de bajo y sacudida. Karaoke con «SEIS» en rojo.

**[3-14 s]** "La media móvil es el promedio del precio de los últimos días. La probé con 50, 100, 150, 200, 250 y 300 días, en siete divisas y oro, con costos."
> BOCETO: precio con media móvil y seis botones de ventana; whoosh. Ken Burns hacia dentro.

**[14-26 s]** "La de 200 días: Sharpe de −0.04. Las otras cinco, entre −0.12 y −0.39. Ninguna ventana se salva."
> BOCETO: los seis puntos bajo cero con tick; el de MA200 resaltado; flash blanco.

**[26-37 s]** "Y el Deflated Sharpe, que descuenta la suerte de probar seis versiones: 0.21. Se exigía más de 0.95."
> BOCETO: medidor con la aguja en 0.21 y la meta 0.95 en verde.

**[37-44 s]** "Si una hubiera salido bien, sospecharía de la suerte. Salieron seis mal. Video completo en el canal y experimento 59 completo en el enlace. ¿Cuántas funcionaron? Cero de seis."
> BOCETO: vuelven los seis puntos del primer cuadro (loop); rótulo «Experimento #59 completo en el enlace»; texto pequeño «No es asesoría financiera · El trading no se promete: se prueba».

---

## Descripción (YouTube)
https://atlas-lab-one.vercel.app/e/59?utm_source=youtube&utm_medium=video&utm_campaign=exp059-t2
Ficha del experimento #59: murió · seis ventanas de MA50 a MA300 con Sharpe negativo (MA200: −0.04) · Deflated Sharpe 0.21 frente a 0.95 exigido.
Probé una regla de tendencia con seis medias móviles en una cesta de 7 pares de divisas más oro (2014–2024), con apalancamiento 2, rezago de 1 día y costos de 3 bps. No hay ventana robusta: las seis dan Sharpe negativo.
Contenido educativo. No es asesoría financiera ni recomendación de inversión.
Descripción del Short (primera línea): https://atlas-lab-one.vercel.app/e/59?utm_source=youtube&utm_medium=short&utm_campaign=exp059-t2

Capítulos: 0:00 Gancho · 0:15 Este experimento · 0:35 Qué es una media móvil · 1:05 El riesgo de elegir el número · 1:45 La grilla · 2:25 Resultado · 3:00 Cómo leer una grilla · 3:40 El Deflated Sharpe · 4:15 El contraste: la cesta completa · 4:45 Con tu capital · 5:10 Conclusión · 5:25 Ficha del experimento #59 y cierre

Etiquetas: media móvil, MA200, parámetros, sobreajuste, Deflated Sharpe, seguimiento de tendencia, backtest, Sharpe ratio, forex y oro, trading con datos, ATLAS Lab, estrategias de trading

## Rúbrica (autoevaluación, 1–5)
| Pieza | hook_0_3s | ritmo | promesa_cumplida | potencial_loop | claridad_no_traders | honestidad_atlas | audio | cta | Promedio |
|---|---|---|---|---|---|---|---|---|---|
| Largo | 5 | 4 | 5 | 4 | 5 | 5 | 4 | 4 | 4.50 |
| Short | 5 | 4 | 5 | 5 | 4 | 5 | 4 | 4 | 4.50 |

Hook ≥ 4 ✓ · honestidad 5 ✓. Punto débil: la ficha solo da la cifra de la MA200 y el rango de las otras cinco; el video no inventa el valor de cada ventana y lo dice como rango.

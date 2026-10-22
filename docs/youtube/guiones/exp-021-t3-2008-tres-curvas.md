# Experimento #21 — Fuera de muestra temporal 2007-2013 (anti-sobreajuste) · Tema 3: 2008 sin tocar nada: con filtro +84.6%, sin filtro −11% y comprar y esperar +6.2%

Tema 3 de 3 del experimento #21. Tema 1: `exp-021-prueba-2008-fuera-muestra.md`.
Qué aporta frente a los otros temas: Compara las tres curvas del periodo 2007-2013 (con filtro, sin filtro y comprar y esperar) y repasa qué hizo cada una en 2008 y en 2011. El tema 1 cuenta la historia completa y el tema 2 enseña la escalera de pruebas de validación.
Estado del guion: **BORRADOR — pendiente de aprobación**
Estado del experimento: **murió** (veredicto del sitio: «No sirvió»)
Serie: G (Construyendo un bot, y por qué murió)
Datos usados: `experiments.json` (v=21: description, params, metrics, kpis, analysis, verdict, notes, capital, period), `exp_details.json` (algo, code, filters), `series/20260610_022556_oos-temporal-2007-2013-anti-overfit-v21.json` (curva de la estrategia y curva «Sin estrategia», 2007-05-22 a 2013-12-31) y la tabla «Con tu capital» de docs/youtube (fila 21). Las cifras con 10,000 dólares son las de la tabla de 100,000 divididas entre 10. Los rendimientos de 2008 (+8.6% el bot, −5.7% comprar y esperar) y de 2011 (+8.4% y +2.0%) son por año calendario, calculados de las curvas de la serie; el mínimo de comprar y esperar (−7.2%, 12-nov-2008) también se lee de la serie.

## Títulos (3 opciones)
1. 2008 sin tocar nada: +8.6% con filtro, −5.7% comprando y esperando
2. Tres curvas, una crisis: con filtro +84.6%, sin filtro −11%, comprar y esperar +6.2%
3. Las crisis de 2008 y de 2011 vistas por un bot con filtro de pánico

## Miniatura
Fondo negro de la marca. Tres curvas saliendo del mismo punto en 2007: verde subiendo, gris plana y roja cortada con X; sobre 2008, una franja roja. Texto grande: «2008» (blanco) y «+84.6% / −11% / +6.2%» (cada cifra de su color). Logo ATLAS esquina inferior derecha.

---

## VIDEO LARGO (16:9, ≈ 4:27 min — 4–6 min: tema de una sola idea y pocas cifras)
Ritmo visual: algo cambia en pantalla cada 2-3 s; b-roll real detrás, Ken Burns alterno, subtítulos karaoke, whoosh + flash en cada corte, golpe de bass solo en el momento clave.

**[0:00 — Gancho]** (pantalla: tres curvas cruzando 2008)
En 2008, mientras comprar y esperar la cesta perdía −5.7%, mi bot con filtro de pánico ganó +8.6%. Y sin el filtro, a ×3, la cuenta no sobrevivía. Tres curvas, una crisis.
> Boceto: tres curvas cruzando una franja roja de 2008: la verde sube, la gris cae y la roja se corta con X y sacudida; b-roll de bolsa en caída, Ken Burns «in».

**[0:13 — El experimento]** (pantalla: rótulo con el número y el nombre del experimento)
Este es el experimento #21 de ATLAS Lab: Fuera de muestra temporal 2007-2013 (anti-sobreajuste). Todos los resultados están en la página del experimento.
> Boceto: rótulo animado «EXPERIMENTO #21» con el nombre «Fuera de muestra temporal 2007-2013 (anti-sobreajuste)» debajo y el logo ATLAS; whoosh de entrada y fondo de velas con opacidad 0.12.

**[0:23 — Las reglas y el periodo]** (pantalla: reglas congeladas, 2007-2013)
Las reglas del filtro, fijadas con datos de 2014 a 2024, se aplican sin tocar nada a 2007-2013, con la crisis de 2008 y la del euro de 2011. La cesta es de siete pares de divisas más oro, con paridad de riesgo y apalancamiento ×3, y las reglas de una cuenta fondeada.
> Boceto: candado «reglas congeladas»; los ocho símbolos entrando en la cesta; marcas de 2008 y 2011 sobre el eje de tiempo.

**[0:45 — Las tres curvas]** (pantalla: tres tarjetas)
Las tres curvas, en todo el periodo. Con filtro: +84.6%, Sharpe de 1.06 y caída máxima de −10.8%. Sin filtro, con el mismo ×3: −11% y Sharpe de −0.59; la cuenta no sobrevive. Y la cesta sin estrategia, comprando y esperando: +6.2% y Sharpe de 0.22.
> Boceto: tres tarjetas: verde «con filtro +84.6% · 1.06 · −10.8%», roja «sin filtro −11% · −0.59» y gris «comprar y esperar +6.2% · 0.22».

**[1:04 — El año 2008]** (pantalla: barras de 2008)
En el año calendario de 2008, el bot con filtro hizo +8.6%. Comprar y esperar, −5.7%. Comprar y esperar tocó su punto más bajo del periodo el 12 de noviembre de 2008, con −7.2% desde el inicio de la curva.
> Boceto: dos barras de 2008: «bot +8.6%» verde y «comprar y esperar −5.7%» roja; marca ámbar en el 12-nov-2008 sobre la curva gris.

**[1:20 — La lógica del filtro]** (pantalla: alarmas del filtro)
Esa es la lógica del filtro: en una crisis, las alarmas deberían sonar y sacar al bot del mercado. Se activa si el VIX supera 28, si salta de golpe o si el crédito se debilita. La curva verde, sin caídas profundas en 2008, es compatible con esa idea, aunque el experimento no desglosa día por día qué pasó.
> Boceto: tres semáforos que se encienden sobre la franja de 2008; la curva verde pasa de largo; etiqueta ámbar «compatible, no medido día por día».

**[1:44 — La crisis del euro, 2011]** (pantalla: barras de 2011)
La otra prueba del periodo: la crisis del euro de 2011. En el año 2011, el bot hizo +8.4% y comprar y esperar, +2.0%. Las dos crisis cayeron dentro de una curva que terminó en positivo.
> Boceto: dos barras de 2011: «bot +8.4%» y «comprar y esperar +2.0%»; las marcas de 2008 y 2011 sobre el eje.

**[1:59 — Sin filtro: la curva que murió]** (pantalla: curva roja cortada)
Ahora la curva roja. Con los mismos pesos y el mismo ×3, pero sin filtro, el resultado fue de −11% y un Sharpe de −0.59, y la cuenta no sobrevive a las reglas. Todo lo que cambia entre esta curva y la verde es el filtro. En el papel, la diferencia es enorme.
> Boceto: curva roja que baja y se corta con X; fila gris «mismos pesos · mismo ×3 · misma cesta» y una sola casilla distinta: «filtro».

**[2:21 — Parece la prueba perfecta]** (pantalla: tres cifras en verde)
Parece la demostración perfecta de que el filtro funciona: mejor que no hacer nada, mucho mejor que operar sin protección, y con la crisis de 2008 en medio. Medido con el cierre del mismo día, así se ve. Pero hay una salvedad.
> Boceto: tres tarjetas verdes con tick (vs comprar y esperar, vs sin filtro, 6 de 7 años positivos (2013 quedó en −0.02%)); al final aparece un asterisco rojo.

**[2:38 — La salvedad]** (pantalla: dos barras de Sharpe)
El filtro decide con el VIX y el crédito del cierre del mismo día. Con la señal de un día antes, la base de 2007 a 2013 da un Sharpe de −0.46 y no sobrevive, como se mide en el experimento 27. Es la curva verde la que cambia de lado.
> Boceto: dos barras: «mismo día: 1.06» (verde) que se rompe y «señal de ayer: −0.46» (roja); golpe de bass; sello «NO EJECUTABLE».

**[2:59 — Qué aprendemos de comparar tres curvas]** (pantalla: contraste correcto)
Comparar con comprar y esperar y con la versión sin filtro es el contraste correcto: aísla el efecto del filtro. Pero un contraste correcto con una señal imposible sigue siendo imposible. La calidad de la comparación no arregla un dato que aún no existe.
> Boceto: balanza con dos platos equilibrados «bien comparado» y un tercero rojo «dato imposible»; texto en blanco.

**[3:17 — Con tu capital]** (pantalla: tarjeta «Con tu capital» con aviso)
Con 10,000 dólares, la curva con filtro termina en más 8,446; con 100,000, en más 84,462. Comprar y esperar daría más 620 y más 6,196. La curva va de mayo de 2007 a diciembre de 2013. En real no se puede replicar: usa el cierre del mismo día y ×3.
> Boceto: tarjeta de capital con aviso ámbar; curva verde frente a la gris; selector $10,000 / $100,000.

**[3:38 — Conclusión]** (pantalla: texto grande)
Veredicto: no sirvió. El bot con filtro superó a 2008 sobre el papel, con +84.6% y Sharpe de 1.06. Una buena crisis de 2008 en un backtest no prueba nada si el bot no podía conocer la señal cuando operaba.
> Boceto: sello ✕ rojo sobre la curva verde; las otras dos curvas quedan en su lugar.

**[3:54 — Ficha del experimento #21]** (pantalla: tarjeta en pantalla con la ficha y la URL)
Ficha del experimento 21. Estado: murió (veredicto del sitio: «No sirvió»). Cifra clave: +84.6%, Sharpe 1.06, 6 de 7 años positivos (2013 quedó en −0.02%) y caída máxima −10.8% en 2007-2013. Filtro que decidió: la señal rezagada un día falla; con la señal de ayer la base de 2007-2013 da Sharpe −0.46 (#27). Lección: una prueba fuera de muestra no protege contra usar información que aún no existe al decidir. Revísalo completo en atlas-lab-one.vercel.app/e/21. Contenido educativo, no es asesoría financiera. El trading no se promete: se prueba.
> Boceto: tarjeta con las líneas de la ficha apareciendo una a una (estado, cifra clave, filtro que decidió, lección) y, al pie, la URL «atlas-lab-one.vercel.app/e/21» resaltada; sello del estado del experimento; frase de marca, logo y URL.

---

## SHORT (9:16, ≈ 41 s)
Fórmula visual: b-roll vertical + overlay oscuro 0.6, Ken Burns alternando in/out, subtítulos karaoke en MAYÚSCULAS con las cifras en rojo, whoosh + flash en cada corte, golpe de bass + sacudida solo en el 0-3 s; ticker arriba.

**[0-3 s]** «2008: con filtro +8.6%, comprar y esperar −5.7%.»
> Boceto: texto gigante «2008» con dos cifras (+8.6% verde y −5.7% rojo); la curva verde cruza la franja roja; sacudida; b-roll de bolsa en caída, Ken Burns «in».
**[3-11 s]** «Tomé las reglas de mi bot, fijadas con datos de 2014 a 2024, y las apliqué sin tocar nada a 2007-2013.»
> Boceto: candado «reglas congeladas» que salta de periodo; Ken Burns «out»; karaoke con «SIN TOCAR NADA» en rojo.
**[11-18 s]** «En todo el periodo: con filtro, +84.6%. Sin filtro, a ×3, −11%. Comprar y esperar, +6.2%.»
> Boceto: tres tarjetas verde, roja y gris que entran con tick; whoosh y flash blanco.
**[18-21 s]** «Parece la prueba perfecta de que el filtro funciona.»
> Boceto: tres ticks verdes; Ken Burns «in».
**[21-30 s]** «Pero decide con el cierre del mismo día. Con la señal de ayer, el Sharpe es −0.46 y la cuenta no sobrevive.»
> Boceto: barra 1.06 que se rompe y barra −0.46 roja; golpe de bass.
**[30-37 s]** «El video completo está en el canal. Experimento #21 completo en el enlace. No es asesoría financiera.»
> Boceto: texto «Video completo en el canal» y «Experimento #21 en el enlace» con el logo ATLAS.
**[37-41 s]** «2008 sin tocar nada, pero con información de ese mismo día.»
> Boceto: vuelve «2008» con el asterisco rojo (loop con el gancho); corte directo al inicio.

## Descripción (YouTube) — video largo
https://atlas-lab-one.vercel.app/e/21?utm_source=youtube&utm_medium=video&utm_campaign=exp021-t3
Ficha del experimento #21 (Fuera de muestra temporal 2007-2013 (anti-sobreajuste)): estado murió. 2007-2013 fuera de muestra: +84.6%, Sharpe 1.06, 6 de 7 años positivos (2013 quedó en −0.02%) y caída máxima −10.8%; con la señal de un día antes, Sharpe −0.46.
Tres curvas de 2007 a 2013 con la crisis de 2008 y la del euro de 2011, sobre 7 pares de divisas + oro a ×3: con filtro de pánico +84.6% (Sharpe 1.06, caída máxima −10.8%, 6 de 7 años positivos (2013 quedó en −0.02%)), sin filtro −11% (Sharpe −0.59) y comprar y esperar +6.2% (Sharpe 0.22). En 2008: +8.6% contra −5.7%.
El filtro decide con el cierre del mismo día: con la señal de un día antes, la base da Sharpe −0.46 y no sobrevive (experimento 27).
Contenido educativo. No es asesoría financiera ni recomendación de inversión.

## Descripción (YouTube) — Short
https://atlas-lab-one.vercel.app/e/21?utm_source=youtube&utm_medium=short&utm_campaign=exp021-t3
Ficha del experimento #21 (Fuera de muestra temporal 2007-2013 (anti-sobreajuste)): estado murió. 2007-2013 fuera de muestra: +84.6%, Sharpe 1.06, 6 de 7 años positivos (2013 quedó en −0.02%) y caída máxima −10.8%; con la señal de un día antes, Sharpe −0.46.
En 2008, un bot con filtro de pánico hizo +8.6% mientras comprar y esperar perdía −5.7%; con la señal de ayer, no sobrevive.
Video completo en el canal. Experimento #21 completo en el enlace. Contenido educativo, no es asesoría financiera.

Capítulos: 0:00 Gancho · 0:13 El experimento · 0:23 Las reglas y el periodo · 0:45 Las tres curvas · 1:04 El año 2008 · 1:20 La lógica del filtro · 1:44 La crisis del euro, 2011 · 1:59 Sin filtro: la curva que murió · 2:21 Parece la prueba perfecta · 2:38 La salvedad · 2:59 Qué aprendemos de comparar tres curvas · 3:17 Con tu capital · 3:38 Conclusión · 3:54 Ficha del experimento #21

Etiquetas: crisis de 2008, crisis del euro, fuera de muestra, filtro de pánico, VIX, bot de trading, comprar y esperar, backtest, prop firm, ATLAS Lab, trading con datos, divisas y oro

## Rúbrica (autoevaluación, 1–5)
| Criterio | Short | Largo |
|---|---|---|
| hook_0_3s | 4 | 4 |
| ritmo | 4 | 4 |
| promesa_cumplida | 5 | 5 |
| potencial_loop | 4 | 4 |
| claridad_no_traders | 4 | 4 |
| honestidad_atlas | 5 | 5 |
| audio | 4 | 3 |
| cta | 4 | 4 |
| **Promedio** | **4.25** | **4.13** |

Notas: el gancho contrasta dos cifras de 2008 (+8.6% y −5.7%) y promete tres curvas; las cifras de año calendario se calculan de la serie y las de periodo completo son los kpis del sitio. No se citan los rendimientos de 2013 (cercanos a cero) para no contradecir el 6 de 7 años positivos (2013 quedó en −0.02%) que publica el sitio. El Short cumple hook ≥ 4 y honestidad 5.

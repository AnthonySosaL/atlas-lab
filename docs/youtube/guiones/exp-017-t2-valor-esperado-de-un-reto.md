# Experimento #17 — Dinero real con filtro macro · Tema 2: Valor esperado: por qué un cobro de $12,322 puede dar −$429 por intento

Tema 2 de 3 del experimento #17. Tema 1: `exp-017-prop-firm-valor-esperado.md`.
Qué aporta frente a los otros temas: Explica el valor esperado con la lógica de un boleto de lotería y los números de este experimento. El tema 1 es la historia completa con y sin filtro; el tema 3 se centra en el plazo del reto.
Estado del guion: **BORRADOR — pendiente de aprobación**
Estado del experimento: **murió** (veredicto del sitio: «No sirvió»)
Serie: G (Construyendo un bot, y por qué murió); enlaza con la Serie E (negocio de fondeo)
Datos usados: `experiments.json` (v=17: description, params, metrics, kpis, analysis, verdict, notes, capital, period), `exp_details.json` (algo, code, filters), `series/20260608_164506_dinero-real-con-filtro-macro-v17.json` (curva de la cartera con filtro y curva «Sin estrategia») y la tabla «Con tu capital» de docs/youtube (fila 17). Las cifras con 10,000 dólares son las de la tabla de 100,000 divididas entre 10. Las reglas de la cuenta (pérdida máxima de 10% y de 5% en un día) vienen de los experimentos 13 y 14, que usan las mismas reglas.

## Títulos (3 opciones)
1. Cobras $12,322 si pasas, pero el valor esperado es −$429: la matemática de un reto de fondeo
2. Valor esperado explicado con un boleto de lotería y un reto de prop firm
3. Si pasas el reto, el 99% cobra; el problema es pasarlo (0.6%)

## Miniatura
Fondo negro de la marca. Un boleto de lotería con «$500» y una balanza: de un lado «$12,322» (verde), del otro «0.6%» (rojo de marca). Texto grande: «−$429». Logo ATLAS esquina inferior derecha.

---

## VIDEO LARGO (16:9, ≈ 4:22 min — 4–6 min: tema de una sola idea y pocas cifras)
Ritmo visual: algo cambia en pantalla cada 2-3 s; b-roll real detrás, Ken Burns alterno, subtítulos karaoke, whoosh + flash en cada corte, golpe de bass solo en el momento clave.

**[0:00 — Gancho]** (pantalla: una balanza con $12,322 y −$429)
Si pasas un reto de fondeo, cobras en promedio 12,322 dólares y el 99% cobra al menos un pago. Y aun así, cada intento vale −429 dólares. La contradicción es solo aparente: se llama valor esperado.
> Boceto: balanza: «$12,322» verde pesa mucho de un lado y «0.6%» aparece del otro; la cifra «−$429» cae en rojo con sacudida; b-roll de pantallas de bolsa, Ken Burns «in».

**[0:15 — El experimento]** (pantalla: rótulo con el número y el nombre del experimento)
Este es el experimento #17 de ATLAS Lab: Dinero real con filtro macro. Todos los resultados están en la página del experimento.
> Boceto: rótulo animado «EXPERIMENTO #17» con el nombre «Dinero real con filtro macro» debajo y el logo ATLAS; whoosh de entrada y fondo de velas con opacidad 0.12.

**[0:24 — Cómo funciona un reto]** (pantalla: línea de tiempo del reto)
Un reto de prop firm es una prueba con cuota. Pagas 500 dólares y tienes 30 días para ganar 10% sin perder más de 10% del capital inicial ni más de 5% en un solo día. Si pasas, te dan una cuenta fondeada y puedes cobrar pagos. Si fallas, pierdes la cuota.
> Boceto: línea de tiempo de 30 días con meta «+10%», dos muros rojos «−10%» y «−5% / día», flecha verde a «cuenta fondeada» y flecha roja a «cuota perdida».

**[0:46 — El boleto de lotería]** (pantalla: un boleto con precio y premio)
Piensa en un boleto de lotería: cuesta algo, el premio es grande y pocos ganan. ¿Vale la pena? Depende de dos cosas: cuánto pagas y cuánto esperas cobrar en promedio, que es el premio multiplicado por la probabilidad de ganarlo.
> Boceto: boleto con precio «$500» y premio «$12,322»; una rueda de probabilidad con un sector minúsculo en verde.

**[1:02 — La fórmula]** (pantalla: una línea de código)
Con el reto es igual. Valor esperado es menos la cuota, más la probabilidad de pasar por lo que cobras si pasas. Es el resultado promedio por intento si pudieras repetirlo muchas veces. En el código es una sola línea.
> Boceto: fórmula «−500 + P(pasar) × cobro esperado» que se arma pieza por pieza con tick; al lado, la línea del snippet «ev = −500 + p_pass × e_ext».

**[1:19 — Los tres números]** (pantalla: tres tarjetas)
Aquí hay tres datos. La cuota: 500 dólares. El cobro esperado si pasas, en la fase fondeada: 12,322 dólares. Y la probabilidad de pasar el reto en 30 días: 0.6%. Con esos tres ingredientes, el valor esperado sale en −429 dólares por intento.
> Boceto: tres tarjetas: «cuota $500» (gris), «cobro esperado $12,322» (verde), «P(pasar en 30 días) 0.6%» (rojo); se juntan en «−$429».

**[1:36 — Por qué un premio grande no basta]** (pantalla: premio y probabilidad)
Un premio de 12,322 suena enorme, pero se multiplica por 0.6%. Es como un boleto con un premio gordo y casi ninguna probabilidad: lo que importa no es el tamaño del premio, sino el producto de las dos cosas. Y ese producto no compensa la cuota de 500.
> Boceto: dos barras: «premio» muy alta y «probabilidad» minúscula; su producto, una barra baja, no alcanza la línea de la cuota.

**[1:56 — La otra mitad: si pasas]** (pantalla: embudo estrecho al principio)
Lo curioso es lo que pasa después. Si pasas, la probabilidad de cobrar al menos un pago es del 99%. La fase fondeada, a ×2, funciona bien en esta simulación. El embudo es estrecho al principio, no al final.
> Boceto: embudo: arriba «intentos», en el cuello «0.6% pasa» brillando en rojo y abajo «99% cobra al menos un pago» en verde.

**[2:12 — De dónde sale la probabilidad]** (pantalla: bloques de días barajados)
¿De dónde sale el 0.6%? De una simulación. Con los retornos diarios reales del bot entre 2014 y 2024 se barajan bloques de días y se repite el reto 4,000 veces. Se cuenta en cuántas se llega al 10% sin romper los límites dentro del plazo.
> Boceto: la curva real cortada en bloques de colores que se reordenan; contador de 0 a 4,000 con cuadritos rojos y uno verde; texto «4,000 simulaciones».

**[2:31 — Con filtro y sin filtro]** (pantalla: dos barras de valor esperado)
El experimento hizo la cuenta con el filtro de pánico del bot y sin él. Con filtro: −429 dólares por intento. Sin filtro: −127. El filtro, que debía proteger, empeoró el negocio, porque pasa tantos días fuera del mercado que no llega a tiempo al 10%.
> Boceto: dos barras horizontales rojas, «sin filtro −$127» y «con filtro −$429», la segunda más larga; golpe de bass en la segunda.

**[2:50 — Cómo leer un valor esperado]** (pantalla: tres preguntas)
Tres preguntas para leer cualquier valor esperado. ¿Cuáles son los ingredientes por separado? ¿De dónde sale la probabilidad? ¿Qué se descontó? Aquí solo se descuenta la cuota: los retornos del bot no incluyen costos de mercado, y el filtro usa el cierre del mismo día.
> Boceto: tres tarjetas numeradas que reciben un sello: «ingredientes ✓», «probabilidad: simulación» (ámbar), «costos: no aplicado» (gris).

**[3:08 — Con tu capital]** (pantalla: tarjeta «Con tu capital» con aviso)
La tarjeta del sitio muestra la curva de la cartera con filtro: con 10,000 dólares, más 5,593; con 100,000, más 55,935. Sin estrategia, comprando y esperando, serían más 5,904 y más 59,039. Pero esa curva no mide el negocio del fondeo: el negocio da −429 dólares por intento, y depende de información del mismo día.
> Boceto: tarjeta «Con tu capital» con selector $10,000 / $100,000; curva de la estrategia frente a la gris «Sin estrategia»; aviso ámbar.

**[3:31 — Conclusión]** (pantalla: texto grande)
Veredicto: no sirvió. Un cobro esperado de 12,322 dólares multiplicado por casi nada no compensa una cuota de 500. Antes de mirar el premio, mira la probabilidad: el valor esperado es el producto de las dos cosas, menos lo que pagas.
> Boceto: sello ✕ rojo sobre la balanza; la frase «mira la probabilidad, no solo el premio» en blanco.

**[3:48 — Ficha del experimento #17]** (pantalla: tarjeta en pantalla con la ficha y la URL)
Ficha del experimento 17. Estado: murió (veredicto del sitio: «No sirvió»). Cifra clave: valor esperado de −$429 por intento (sin filtro, −$127) y 0.6% de probabilidad de pasar en 30 días. Filtro que decidió: el criterio «valor esperado mayor que cero y mayor que sin filtro» falla, y la señal del cierre del mismo día también. Lección: en un reto con plazo, el límite de tiempo es decisivo. Revísalo completo en atlas-lab-one.vercel.app/e/17. Contenido educativo, no es asesoría financiera. El trading no se promete: se prueba.
> Boceto: tarjeta con las líneas de la ficha apareciendo una a una (estado, cifra clave, filtro que decidió, lección) y, al pie, la URL «atlas-lab-one.vercel.app/e/17» resaltada; sello del estado del experimento; frase de marca, logo y URL.

---

## SHORT (9:16, ≈ 44 s)
Fórmula visual: b-roll vertical + overlay oscuro 0.6, Ken Burns alternando in/out, subtítulos karaoke en MAYÚSCULAS con las cifras en rojo, whoosh + flash en cada corte, golpe de bass + sacudida solo en el 0-3 s; ticker arriba.

**[0-3 s]** «Cobro esperado: $12,322. Valor esperado: −$429.»
> Boceto: texto gigante «$12,322» verde que se parte y deja «−$429» en rojo con sacudida; b-roll de bolsa, Ken Burns «in».
**[3-10 s]** «Un reto de fondeo cuesta 500 dólares. Si lo pasas, el 99% cobra al menos un pago.»
> Boceto: boleto «$500» y la cifra «99%» en verde; Ken Burns «out»; karaoke con «500 DÓLARES» en rojo.
**[10-15 s]** «El problema es pasar: la probabilidad en 30 días fue de 0.6%.»
> Boceto: un solo cuadrito verde entre miles rojos; «0.6%» enorme con golpe de bass.
**[15-23 s]** «Lo simulé 4,000 veces con los retornos reales del bot, de 2014 a 2024, y conté cuántas llegaban al 10% a tiempo.»
> Boceto: la curva real cortada en bloques que se barajan; contador de 0 a 4,000; cuadritos rojos y uno verde.
**[23-30 s]** «Un premio enorme multiplicado por casi cero no compensa la cuota. Eso es el valor esperado.»
> Boceto: balanza donde el premio pesa pero la probabilidad es una pluma; whoosh y flash blanco.
**[30-34 s]** «Sin el filtro de pánico era −127. El filtro empeoró el negocio.»
> Boceto: dos barras rojas, −$127 y −$429; Ken Burns «in».
**[34-41 s]** «El video completo está en el canal. Experimento #17 completo en el enlace. No es asesoría financiera.»
> Boceto: texto «Video completo en el canal» y «Experimento #17 en el enlace» con el logo ATLAS.
**[41-44 s]** «Un premio grande por casi nada: −$429.»
> Boceto: vuelve «$12,322» roto (loop con el gancho); corte directo al inicio.

## Descripción (YouTube) — video largo
https://atlas-lab-one.vercel.app/e/17?utm_source=youtube&utm_medium=video&utm_campaign=exp017-t2
Ficha del experimento #17 (Dinero real con filtro macro): estado murió. Valor esperado −$429 por intento (sin filtro, −$127), probabilidad de pasar en 30 días 0.6% y cobro esperado $12,322 si se pasa.
El valor esperado explicado con un reto de prop firm: cuota de $500, probabilidad de pasar en 30 días de 0.6%, cobro esperado de $12,322 si se pasa y 99% de cobrar al menos un pago. Resultado: −$429 por intento con el filtro de pánico del bot (−$127 sin filtro), según 4,000 simulaciones con retornos de 2014 a 2024.
El filtro hereda la señal del cierre del mismo día y los retornos no incluyen costos de mercado.
Contenido educativo. No es asesoría financiera ni recomendación de inversión.

## Descripción (YouTube) — Short
https://atlas-lab-one.vercel.app/e/17?utm_source=youtube&utm_medium=short&utm_campaign=exp017-t2
Ficha del experimento #17 (Dinero real con filtro macro): estado murió. Valor esperado −$429 por intento (sin filtro, −$127), probabilidad de pasar en 30 días 0.6% y cobro esperado $12,322 si se pasa.
Cobro esperado de $12,322 y valor esperado de −$429: el producto de un premio enorme por una probabilidad de 0.6%.
Video completo en el canal. Experimento #17 completo en el enlace. Contenido educativo, no es asesoría financiera.

Capítulos: 0:00 Gancho · 0:15 El experimento · 0:24 Cómo funciona un reto · 0:46 El boleto de lotería · 1:02 La fórmula · 1:19 Los tres números · 1:36 Por qué un premio grande no basta · 1:56 La otra mitad: si pasas · 2:12 De dónde sale la probabilidad · 2:31 Con filtro y sin filtro · 2:50 Cómo leer un valor esperado · 3:08 Con tu capital · 3:31 Conclusión · 3:48 Ficha del experimento #17

Etiquetas: valor esperado, prop firm, reto de fondeo, probabilidad, simulación Monte Carlo, bot de trading, cuenta fondeada, matemáticas del trading, riesgo, ATLAS Lab, trading con datos, trading algorítmico

## Rúbrica (autoevaluación, 1–5)
| Criterio | Short | Largo |
|---|---|---|
| hook_0_3s | 4 | 4 |
| ritmo | 4 | 4 |
| promesa_cumplida | 5 | 5 |
| potencial_loop | 4 | 4 |
| claridad_no_traders | 4 | 5 |
| honestidad_atlas | 5 | 5 |
| audio | 4 | 3 |
| cta | 4 | 4 |
| **Promedio** | **4.25** | **4.25** |

Notas: el gancho enfrenta dos números que parecen contradecirse; la analogía de la lotería da claridad a no traders. La advertencia de la señal del mismo día está en el largo y en la descripción. El Short cumple hook ≥ 4 y honestidad 5.

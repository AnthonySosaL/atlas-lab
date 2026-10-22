# Experimento #17 — Dinero real con filtro macro · Tema 3: El reloj del reto: 30 días, 60 días y sin plazo

Tema 3 de 3 del experimento #17. Tema 1: `exp-017-prop-firm-valor-esperado.md`.
Qué aporta frente a los otros temas: Se centra en el plazo como letra pequeña del negocio: cómo cambia la probabilidad de pasar con el límite de tiempo y con el apalancamiento. El tema 1 es la historia completa y el tema 2 explica el valor esperado.
Estado del guion: **BORRADOR — pendiente de aprobación**
Estado del experimento: **murió** (veredicto del sitio: «No sirvió»)
Serie: G (Construyendo un bot, y por qué murió); enlaza con la Serie E (negocio de fondeo)
Datos usados: `experiments.json` (v=17: description, params, metrics, kpis, analysis, verdict, notes, capital, period), `exp_details.json` (algo, code, filters), `series/20260608_164506_dinero-real-con-filtro-macro-v17.json` (curva de la cartera con filtro y curva «Sin estrategia») y la tabla «Con tu capital» de docs/youtube (fila 17). Las cifras con 10,000 dólares son las de la tabla de 100,000 divididas entre 10. Las reglas de la cuenta (pérdida máxima de 10% y de 5% en un día) vienen de los experimentos 13 y 14, que usan las mismas reglas.

## Títulos (3 opciones)
1. Con 30 días pasa el 0.6%; con 60 días, el 6%: el reloj es parte del precio de un reto
2. Más apalancamiento, menos probabilidad de pasar: 89% a ×3 contra 82% a ×4 sin plazo
3. La letra pequeña de un reto de fondeo: el límite de tiempo

## Miniatura
Fondo negro de la marca. Un reloj de arena grande con «30 DÍAS» arriba y tres cifras abajo: «0.6%», «6%», «89%» (la primera en rojo de marca). Texto: «EL RELOJ MANDA». Logo ATLAS esquina inferior derecha.

---

## VIDEO LARGO (16:9, ≈ 4:27 min — 4–6 min: tema de una sola idea y pocas cifras)
Ritmo visual: algo cambia en pantalla cada 2-3 s; b-roll real detrás, Ken Burns alterno, subtítulos karaoke, whoosh + flash en cada corte, golpe de bass solo en el momento clave.

**[0:00 — Gancho]** (pantalla: reloj de arena y tres cifras)
Con 30 días de plazo, mi bot pasaba un reto de fondeo el 0.6% de las veces. Con 60 días, el 6%. En un reto, el reloj es parte del precio.
> Boceto: reloj de arena; la cifra «0.6%» en rojo se transforma en «6%» al duplicar los días; b-roll de relojes y pantallas de bolsa, Ken Burns «in».

**[0:13 — El experimento]** (pantalla: rótulo con el número y el nombre del experimento)
Este es el experimento #17 de ATLAS Lab: Dinero real con filtro macro. Todos los resultados están en la página del experimento.
> Boceto: rótulo animado «EXPERIMENTO #17» con el nombre «Dinero real con filtro macro» debajo y el logo ATLAS; whoosh de entrada y fondo de velas con opacidad 0.12.

**[0:22 — El reto, en breve]** (pantalla: línea de tiempo del reto)
Recuerda el reto: pagas una cuota de 500 dólares y tienes 30 días para ganar 10% sin perder más de 10% del capital inicial ni más de 5% en un solo día. Si pasas, te dan una cuenta fondeada. Si no, pierdes la cuota.
> Boceto: calendario de 30 días con meta «+10%» y dos muros rojos; moneda «$500» a la entrada.

**[0:40 — El bot y su filtro]** (pantalla: cesta de 15 mercados y filtro de pánico)
El bot es una cesta de 15 mercados, con un filtro de pánico que lo saca del mercado cuando hay riesgo. Fuera del mercado no se gana. Y para llegar al +10% hace falta estar dentro. El filtro pasa mucho tiempo en efectivo, y eso tiene un precio cuando el tiempo está limitado.
> Boceto: cesta de 15 símbolos y semáforo del filtro; la curva real con zonas grises de «fuera del mercado»; flecha hacia la meta «+10%».

**[1:02 — Las cifras de probabilidad]** (pantalla: cinco barras de probabilidad)
Probabilidad de pasar el reto con el filtro. A ×3 y 30 días: 0.6%. A ×4 y 30 días: 3.3%. A ×3 y 60 días: 6%. Y sin límite de tiempo: alrededor de 89% a ×3 y de 82% a ×4.
> Boceto: barras horizontales que crecen en orden (0.6% · 3.3% · 6% · ≈89% · 82%); las dos últimas en gris con el sello «sin plazo».

**[1:19 — El plazo, la palanca más grande]** (pantalla: doble de días)
El plazo es la palanca más grande del negocio. Duplicar los días, de 30 a 60, sube la probabilidad de 0.6% a 6%. Quitar el límite la lleva a cerca de 89%. El mismo bot, las mismas reglas: lo único que cambia es cuánto tiempo tienes.
> Boceto: tres relojes (30 d, 60 d, sin límite) con su barra de probabilidad; flecha de 0.6% a 6% y a ≈89%.

**[1:38 — Con plazo, más palanca ayuda]** (pantalla: dos apalancamientos a 30 días)
Con 30 días, más apalancamiento ayuda: de 0.6% a ×3 pasa a 3.3% a ×4. Tiene sentido, porque con más palanca se llega antes a la meta. Pero la palanca no es gratis, y eso se ve al quitar el reloj.
> Boceto: dos barras a 30 días: «×3: 0.6%» y «×4: 3.3%»; una nota «¿gratis?» con interrogación.

**[1:55 — Sin plazo, al revés]** (pantalla: dos apalancamientos sin límite)
Sin límite de tiempo ocurre lo contrario: alrededor de 89% a ×3 y 82% a ×4. Con todo el tiempo del mundo, más palanca significa más riesgo de romper un límite antes de llegar. El apalancamiento tiene un punto dulce, y depende del reloj.
> Boceto: dos barras sin plazo: «×3: ≈89%» alta y «×4: 82%» más baja; el sello «sin reloj»; texto «el punto dulce depende del reloj».

**[2:13 — Una advertencia sobre las cifras sin plazo]** (pantalla: aviso ámbar)
Cuidado con las cifras sin límite de tiempo: usan el cierre del mismo día, información que un bot real no tiene al decidir. Con la señal de ayer la base muere, como verás en el experimento 27. No son una conclusión operativa; sirven para ver cómo se comporta el reloj.
> Boceto: aviso ámbar «información del mismo día» sobre las barras grises; cuadro pequeño «señal de ayer: ver #27».

**[2:33 — La paradoja del filtro]** (pantalla: protección contra tiempo)
Hay una paradoja. Lo que te protege en el mercado, el filtro que te saca en los días malos, te perjudica en un reto con plazo. Protegerse cuesta tiempo, y el tiempo es justo lo que el reto no te da. Con el filtro el valor esperado fue de −429 dólares por intento; sin filtro, −127.
> Boceto: escudo verde que se convierte en reloj rojo; dos barras −$127 y −$429.

**[2:56 — Preguntas de método antes de un reto]** (pantalla: lista de cuatro preguntas)
Si estás analizando un reto, estas son preguntas de método, no consejos. ¿Cuántos días hay de plazo? ¿Qué meta hay que alcanzar? ¿Cuáles son los límites de pérdida? Y ¿cuántos días necesita tu estrategia, estando dentro del mercado, para llegar a esa meta?
> Boceto: cuatro tarjetas con signo de interrogación que entran una a una: «plazo», «meta», «límites», «días dentro del mercado».

**[3:14 — Con tu capital]** (pantalla: tarjeta «Con tu capital» con aviso)
En la tarjeta del sitio, la curva de la cartera con filtro da más 5,593 con 10,000 dólares y más 55,935 con 100,000, frente a más 5,904 y más 59,039 de comprar y esperar. Pero esa curva no mide el negocio del fondeo, que da −429 dólares por intento, y depende de información del mismo día.
> Boceto: tarjeta de capital con aviso ámbar; curva de la estrategia frente a la gris; selector $10,000 / $100,000.

**[3:37 — Conclusión]** (pantalla: texto grande)
Veredicto: no sirvió. La probabilidad de pasar es de 0.6% con 30 días y de 6% con 60. El factor decisivo del negocio no es el filtro: es el plazo. En un reto, el tiempo es parte del precio.
> Boceto: sello ✕ rojo sobre el reloj; la frase «el tiempo es parte del precio» en blanco.

**[3:53 — Ficha del experimento #17]** (pantalla: tarjeta en pantalla con la ficha y la URL)
Ficha del experimento 17. Estado: murió (veredicto del sitio: «No sirvió»). Cifra clave: valor esperado de −$429 por intento (sin filtro, −$127) y 0.6% de probabilidad de pasar en 30 días. Filtro que decidió: el criterio «valor esperado mayor que cero y mayor que sin filtro» falla, y la señal del cierre del mismo día también. Lección: en un reto con plazo, el límite de tiempo es decisivo. Revísalo completo en atlas-lab-one.vercel.app/e/17. Contenido educativo, no es asesoría financiera. El trading no se promete: se prueba.
> Boceto: tarjeta con las líneas de la ficha apareciendo una a una (estado, cifra clave, filtro que decidió, lección) y, al pie, la URL «atlas-lab-one.vercel.app/e/17» resaltada; sello del estado del experimento; frase de marca, logo y URL.

---

## SHORT (9:16, ≈ 43 s)
Fórmula visual: b-roll vertical + overlay oscuro 0.6, Ken Burns alternando in/out, subtítulos karaoke en MAYÚSCULAS con las cifras en rojo, whoosh + flash en cada corte, golpe de bass + sacudida solo en el 0-3 s; ticker arriba.

**[0-3 s]** «30 días: 0.6% de pasar. 60 días: 6%.»
> Boceto: reloj de arena con «0.6%» en rojo que se convierte en «6%» al duplicar los días; sacudida; b-roll de relojes, Ken Burns «in».
**[3-11 s]** «Es un reto de fondeo con mi bot: 500 dólares de cuota, meta de 10% y límites de pérdida.»
> Boceto: calendario de 30 días con meta y dos muros rojos; moneda «$500»; Ken Burns «out»; karaoke con «30 DÍAS» en rojo.
**[11-19 s]** «Con ×3 y 30 días, pasa el 0.6%. Con ×4 y 30 días, el 3.3%. Con ×3 y 60 días, el 6%.»
> Boceto: tres barras que crecen con tick; whoosh y flash blanco.
**[19-27 s]** «Sin plazo, pasa cerca del 89% a ×3, pero el 82% a ×4: sin reloj, más palanca no ayuda.»
> Boceto: dos barras grises sin plazo, ×3 más alta que ×4; aviso ámbar «información del mismo día».
**[27-33 s]** «Un filtro que te saca del mercado no llega a tiempo. El plazo es parte del precio.»
> Boceto: semáforo del filtro y reloj corriendo; Ken Burns «in».
**[33-40 s]** «El video completo está en el canal. Experimento #17 completo en el enlace. No es asesoría financiera.»
> Boceto: texto «Video completo en el canal» y «Experimento #17 en el enlace» con el logo ATLAS.
**[40-43 s]** «Treinta días: 0.6%. Sesenta: 6%. El reloj manda.»
> Boceto: vuelve el reloj de arena con las cifras (loop con el gancho); corte directo al inicio.

## Descripción (YouTube) — video largo
https://atlas-lab-one.vercel.app/e/17?utm_source=youtube&utm_medium=video&utm_campaign=exp017-t3
Ficha del experimento #17 (Dinero real con filtro macro): estado murió. Valor esperado −$429 por intento (sin filtro, −$127), probabilidad de pasar en 30 días 0.6% y cobro esperado $12,322 si se pasa.
Cómo cambia la probabilidad de pasar un reto de fondeo con el plazo y el apalancamiento, con el bot de ATLAS y su filtro de pánico: 0.6% a ×3 y 30 días, 3.3% a ×4 y 30 días, 6% a ×3 y 60 días, y alrededor de 89% a ×3 y 82% a ×4 sin límite de tiempo.
Valor esperado: −$429 por intento con filtro (−$127 sin filtro). Las cifras sin plazo usan el cierre del mismo día.
Contenido educativo. No es asesoría financiera ni recomendación de inversión.

## Descripción (YouTube) — Short
https://atlas-lab-one.vercel.app/e/17?utm_source=youtube&utm_medium=short&utm_campaign=exp017-t3
Ficha del experimento #17 (Dinero real con filtro macro): estado murió. Valor esperado −$429 por intento (sin filtro, −$127), probabilidad de pasar en 30 días 0.6% y cobro esperado $12,322 si se pasa.
Con 30 días pasa el reto el 0.6%; con 60, el 6%: el reloj es parte del precio de un reto de fondeo.
Video completo en el canal. Experimento #17 completo en el enlace. Contenido educativo, no es asesoría financiera.

Capítulos: 0:00 Gancho · 0:13 El experimento · 0:22 El reto, en breve · 0:40 El bot y su filtro · 1:02 Las cifras de probabilidad · 1:19 El plazo, la palanca más grande · 1:38 Con plazo, más palanca ayuda · 1:55 Sin plazo, al revés · 2:13 Una advertencia sobre las cifras sin plazo · 2:33 La paradoja del filtro · 2:56 Preguntas de método antes de un reto · 3:14 Con tu capital · 3:37 Conclusión · 3:53 Ficha del experimento #17

Etiquetas: prop firm, reto de fondeo, plazo, apalancamiento, probabilidad de pasar, valor esperado, bot de trading, filtro de pánico, cuenta fondeada, ATLAS Lab, trading con datos, simulación

## Rúbrica (autoevaluación, 1–5)
| Criterio | Short | Largo |
|---|---|---|
| hook_0_3s | 4 | 4 |
| ritmo | 4 | 4 |
| promesa_cumplida | 5 | 5 |
| potencial_loop | 5 | 4 |
| claridad_no_traders | 4 | 4 |
| honestidad_atlas | 5 | 5 |
| audio | 4 | 3 |
| cta | 4 | 4 |
| **Promedio** | **4.38** | **4.13** |

Notas: el gancho contrasta 0.6% y 6% al duplicar los días; el hallazgo de que sin plazo más palanca baja la probabilidad (89% contra 82%) es un patrón del experimento y se rotula con el aviso de señal del mismo día. La explicación de «más riesgo de romper un límite» es una lectura, no una medición. El Short cumple hook ≥ 4 y honestidad 5.

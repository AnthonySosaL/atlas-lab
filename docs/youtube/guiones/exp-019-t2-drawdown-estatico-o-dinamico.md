# Experimento #19 — Apalancamiento escalonado por VIX · Tema 2: Drawdown estático o dinámico: la letra pequeña que decide si una caída de −17.2% te cierra la cuenta

Tema 2 de 3 del experimento #19. Tema 1: `exp-019-leverage-vix-x5.md`.
Qué aporta frente a los otros temas: Explica la letra pequeña de las reglas de pérdida de una prop firm (límite fijo contra límite que sube con las ganancias) usando la caída máxima de −17.2% de este experimento. El tema 1 es el resultado completo y el tema 3 desglosa los años.
Estado del guion: **BORRADOR — pendiente de aprobación**
Estado del experimento: **murió** (veredicto del sitio: «No sirvió»)
Serie: G (Construyendo un bot, y por qué murió)
Datos usados: `experiments.json` (v=19: description, params, metrics, kpis, analysis, verdict, notes, capital, period), `exp_details.json` (algo, code, filters), `series/20260609_210756_leverage-graduado-por-vix-v19.json` (curva de la estrategia y curva «Sin estrategia») y la tabla «Con tu capital» de docs/youtube (fila 19). Las cifras con 10,000 dólares son las de la tabla de 100,000 divididas entre 10. El punto más bajo de la curva respecto al inicio (−6.1%, 11-mar-2015) se lee de la curva 1 de la serie. Se citan los experimentos 13 y 16 por las reglas de la cuenta y por la caída máxima de la base.

## Títulos (3 opciones)
1. −17.2% de caída y la cuenta sigue viva: drawdown estático contra dinámico en una prop firm
2. La misma curva, dos reglas: viva en una firma, cerrada en otra
3. ¿10% de qué? El detalle de las reglas de caída máxima que casi nadie lee

## Miniatura
Fondo negro de la marca. Una curva que sube con dos líneas de piso: una horizontal fija, «ESTÁTICO», en verde, y otra escalonada que sube con la curva, «DINÁMICO», en rojo de marca, que la cruza. Texto grande: «−17.2%». Logo ATLAS esquina inferior derecha.

---

## VIDEO LARGO (16:9, ≈ 4:08 min — 4–6 min: tema de una sola idea y pocas cifras)
Ritmo visual: algo cambia en pantalla cada 2-3 s; b-roll real detrás, Ken Burns alterno, subtítulos karaoke, whoosh + flash en cada corte, golpe de bass solo en el momento clave.

**[0:00 — Gancho]** (pantalla: curva con dos pisos, uno fijo y uno que sube)
Mi bot cayó −17.2% desde su máximo y la cuenta siguió viva. En otra prop firm, con exactamente la misma curva, habría quedado cerrada. Todo depende de cómo se mide la caída máxima.
> Boceto: la curva real (series, curva 1) sube en diagonal; el piso fijo verde la deja pasar y el piso rojo que sube la cruza con sacudida; b-roll de pantallas de bolsa, Ken Burns «in».

**[0:14 — El experimento]** (pantalla: rótulo con el número y el nombre del experimento)
Este es el experimento #19 de ATLAS Lab: Apalancamiento escalonado por VIX. Todos los resultados están en la página del experimento.
> Boceto: rótulo animado «EXPERIMENTO #19» con el nombre «Apalancamiento escalonado por VIX» debajo y el logo ATLAS; whoosh de entrada y fondo de velas con opacidad 0.12.

**[0:23 — Qué es el drawdown]** (pantalla: del máximo al mínimo)
El drawdown, o caída máxima, es la distancia entre el punto más alto de tu cuenta y el más bajo que viene después. Si tu cuenta llega a un máximo y luego cae un 17.2%, ese es su drawdown. Las empresas de fondeo ponen un tope a esa caída, aquí 10%, y si lo cruzas te cierran la cuenta.
> Boceto: la curva con una flecha vertical del pico al valle rotulada «−17.2%»; una línea roja «límite: 10%».

**[0:47 — Drawdown estático]** (pantalla: piso fijo en 90% del capital inicial)
Hay dos formas de aplicar ese límite de 10%. En el estático, el piso es fijo: el 90% del capital inicial. Da igual cuánto hayas ganado, el piso sigue donde empezó. Mientras tu cuenta no baje de ese nivel, estás dentro.
> Boceto: curva con una línea horizontal verde al 90% del capital inicial («piso fijo»); la curva sube lejos de ella.

**[1:04 — Drawdown dinámico]** (pantalla: piso que sube con la cuenta (trailing))
En el dinámico, o trailing, el piso sube contigo: se mide contra el máximo que alcanzó la cuenta, y cada vez que ganas, el piso sube. Nunca baja. Es más exigente, porque cada ganancia te acerca el límite si luego retrocedes.
> Boceto: la misma curva con un piso rojo escalonado que sube con cada nuevo máximo y que se mantiene cuando la curva baja; texto «el piso solo sube».

**[1:21 — Qué pasa con esta curva]** (pantalla: la curva contra los dos pisos)
Con este bot, el ×5 en calma tuvo una caída máxima de −17.2% desde un máximo. En el esquema estático, eso no importa mientras la cuenta no baje del 90% del capital inicial: el punto más bajo de la curva fue −6.1% respecto al inicio, el 11 de marzo de 2015, bastante lejos del piso. En el dinámico, una caída de 17.2% desde el máximo habría roto el límite de 10%.
> Boceto: dos copias de la curva: a la izquierda con el piso fijo (la curva nunca lo toca, marca «−6.1%, 11-mar-2015») y a la derecha con el piso trailing (cruce rojo, «CUENTA CERRADA»).

**[1:49 — Un suelo fijo y un suelo que sube]** (pantalla: analogía)
Es como caminar por una escalera. En el estático, el suelo es el del piso de abajo, fijo, aunque hayas subido muchos pisos. En el dinámico, el suelo sube contigo: cada escalón que ganas queda como nuevo suelo, y la caída permitida se cuenta desde ahí.
> Boceto: una escalera con un suelo fijo abajo (verde) y una versión donde el suelo sube con cada escalón (rojo); personaje que sube y baja un tramo.

**[2:08 — Ninguno es mejor en abstracto]** (pantalla: dos reglas de un mismo juego)
Ninguno es mejor en abstracto: son reglas distintas del mismo juego. Lo importante es saber cuál tiene tu reto antes de elegir el apalancamiento. Una misma curva puede ser viable en uno e inviable en otro, y las firmas no usan todas la misma.
> Boceto: dos tarjetas lado a lado «estático» y «dinámico» con la misma curva y resultados distintos (✓ / ✗); texto «lee la regla antes de apalancar».

**[2:26 — Qué dice el experimento]** (pantalla: nota del veredicto)
En palabras del experimento: con un drawdown máximo de −17.2%, el bot solo serviría en firmas de drawdown estático, nunca en las de drawdown dinámico. Y además, la regla del cierre del mismo día impide ejecutarlo en la práctica.
> Boceto: tarjeta con la nota del análisis; sello verde «estático: ✓ en la muestra», rojo «dinámico: ✗» y ámbar «cierre del mismo día».

**[2:43 — La palanca amplifica la caída]** (pantalla: dos caídas máximas)
Un último detalle: la base de este experimento, con ×3, tuvo una caída máxima de −12.5%. Subir el apalancamiento en calma a ×5 la llevó a −17.2%. Más palanca, más drawdown, y menos margen frente a cualquier regla de pérdida.
> Boceto: dos barras de caída máxima: «base ×3: −12.5%» y «×5 en calma: −17.2%», la segunda más larga y roja.

**[2:59 — Con tu capital]** (pantalla: tarjeta «Con tu capital» con aviso)
Con 10,000 dólares, la curva termina en más 59,150; con 100,000, en más 591,504. Sin estrategia, comprando y esperando, serían más 5,904 y más 59,039. Es una diferencia enorme, pero no se puede cobrar: depende de información del mismo día y de apalancamiento de ×3 a ×5.
> Boceto: tarjeta de capital con aviso ámbar «información del mismo día»; curva verde empinada frente a la gris; selector $10,000 / $100,000.

**[3:18 — Conclusión]** (pantalla: texto grande)
Veredicto: no sirvió. Una caída de −17.2% puede dejarte vivo o cerrarte la cuenta según cómo la mida tu firma. Antes de mirar el retorno, lee cómo se mide la caída máxima: es parte de la estrategia.
> Boceto: sello ✕ rojo sobre el piso dinámico; la frase «lee cómo se mide la caída máxima» en blanco.

**[3:34 — Ficha del experimento #19]** (pantalla: tarjeta en pantalla con la ficha y la URL)
Ficha del experimento 19. Estado: murió (veredicto del sitio: «No sirvió»). Cifra clave: +591.5%, Sharpe 1.39 (la base: 1.23), caída máxima −17.2% y 9 de 10 años positivos. Filtro que decidió: la señal rezagada un día falla (el VIX es el del cierre del mismo día) y la caída de −17.2% solo sirve en firmas de drawdown estático. Lección: subir el apalancamiento en calma amplifica ganancias y caídas. Revísalo completo en atlas-lab-one.vercel.app/e/19. Contenido educativo, no es asesoría financiera. El trading no se promete: se prueba.
> Boceto: tarjeta con las líneas de la ficha apareciendo una a una (estado, cifra clave, filtro que decidió, lección) y, al pie, la URL «atlas-lab-one.vercel.app/e/19» resaltada; sello del estado del experimento; frase de marca, logo y URL.

---

## SHORT (9:16, ≈ 45 s)
Fórmula visual: b-roll vertical + overlay oscuro 0.6, Ken Burns alternando in/out, subtítulos karaoke en MAYÚSCULAS con las cifras en rojo, whoosh + flash en cada corte, golpe de bass + sacudida solo en el 0-3 s; ticker arriba.

**[0-3 s]** «−17.2% de caída y la cuenta sigue viva.»
> Boceto: texto gigante «−17.2%» sobre la curva que cae; un piso fijo verde no la toca; sacudida; b-roll de bolsa, Ken Burns «in».
**[3-11 s]** «Es un bot que apalanca ×5 cuando el VIX está bajo 16, con las reglas de una cuenta fondeada.»
> Boceto: termómetro del VIX con la marca en 16 y el chip «×5»; Ken Burns «out»; karaoke con «×5» en rojo.
**[11-19 s]** «El límite de caída es 10%. Pero ¿10% de qué? En el estático se mide contra el capital inicial: un piso fijo.»
> Boceto: piso horizontal verde en el 90% del capital inicial; la curva lo supera; whoosh y flash blanco.
**[19-28 s]** «En el dinámico, contra el máximo que alcanzó la cuenta. Con −17.2% desde el máximo, esta curva solo serviría en el estático.»
> Boceto: piso rojo escalonado que sube con la curva y la cruza; sello «CUENTA CERRADA»; Ken Burns «in».
**[28-35 s]** «Una misma curva puede vivir en una firma y morir en otra. Lee la regla antes de apalancar.»
> Boceto: dos tarjetas «estático ✓» y «dinámico ✗»; golpe de bass breve.
**[35-42 s]** «El video completo está en el canal. Experimento #19 completo en el enlace. No es asesoría financiera.»
> Boceto: texto «Video completo en el canal» y «Experimento #19 en el enlace» con el logo ATLAS.
**[42-45 s]** «−17.2%: viva o cerrada, depende de la regla.»
> Boceto: vuelve «−17.2%» con la curva (loop con el gancho); corte directo al inicio.

## Descripción (YouTube) — video largo
https://atlas-lab-one.vercel.app/e/19?utm_source=youtube&utm_medium=video&utm_campaign=exp019-t2
Ficha del experimento #19 (Apalancamiento escalonado por VIX): estado murió. +591.5%, Sharpe 1.39 (base 1.23), caída máxima −17.2% y 9 de 10 años positivos, con el VIX del cierre del mismo día.
Drawdown estático contra dinámico (trailing) explicado con la curva del bot de ATLAS que apalanca ×5 cuando el VIX está bajo 16: caída máxima de −17.2% desde el máximo, pero el punto más bajo respecto al capital inicial fue −6.1% (11-mar-2015). Sirve en firmas de drawdown estático y no en las de drawdown dinámico.
Resultado del experimento: +591.5%, Sharpe 1.39 y 9 de 10 años positivos con el VIX del cierre del mismo día (no ejecutable).
Contenido educativo. No es asesoría financiera ni recomendación de inversión.

## Descripción (YouTube) — Short
https://atlas-lab-one.vercel.app/e/19?utm_source=youtube&utm_medium=short&utm_campaign=exp019-t2
Ficha del experimento #19 (Apalancamiento escalonado por VIX): estado murió. +591.5%, Sharpe 1.39 (base 1.23), caída máxima −17.2% y 9 de 10 años positivos, con el VIX del cierre del mismo día.
Una caída de −17.2% desde el máximo deja viva la cuenta con drawdown estático y la cierra con drawdown dinámico.
Video completo en el canal. Experimento #19 completo en el enlace. Contenido educativo, no es asesoría financiera.

Capítulos: 0:00 Gancho · 0:14 El experimento · 0:23 Qué es el drawdown · 0:47 Drawdown estático · 1:04 Drawdown dinámico · 1:21 Qué pasa con esta curva · 1:49 Un suelo fijo y un suelo que sube · 2:08 Ninguno es mejor en abstracto · 2:26 Qué dice el experimento · 2:43 La palanca amplifica la caída · 2:59 Con tu capital · 3:18 Conclusión · 3:34 Ficha del experimento #19

Etiquetas: drawdown estático, drawdown dinámico, trailing drawdown, prop firm, reglas de fondeo, caída máxima, apalancamiento, bot de trading, gestión de riesgo, ATLAS Lab, trading con datos, cuenta fondeada

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

Notas: el gancho enfrenta un número con una condición («en otra firma estaría cerrada») sin jerga; el tema es de letra pequeña útil para quien analiza retos de fondeo. La honestidad es 5 porque se dice que el bot depende del VIX del mismo día y que no es ejecutable. El Short cumple hook ≥ 4.

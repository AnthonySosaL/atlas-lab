# Experimento #14 — Bot ATLAS con volatilidad objetivo (simulación) · Tema 2: Volatilidad objetivo explicada: la fórmula que debía mantener el riesgo constante

Tema 2 de 3 del experimento #14. Tema 1: `exp-014-bot-volatilidad-objetivo.md`.
Qué aporta frente a los otros temas: Explica el concepto desde cero (qué es la volatilidad, la fórmula 9.5% ÷ volatilidad reciente, el tope ×4) y por qué la idea es popular. El tema 1 cuenta cómo falló en el COVID y el tema 3 compara este bot con el de ×2 fijo.
Estado del guion: **BORRADOR — pendiente de aprobación**
Estado del experimento: **murió**
Serie: G (Construyendo un bot, y por qué murió)
Datos usados: `experiments.json` (v=14: description, params, metrics, kpis, analysis, verdict, notes, capital, period), `exp_details.json` (algo, code, filters), `series/20260607_214233_bot-atlas-vol-target-paper-v14.json` (curva 1 = bot, curva 2 = sin reglas de prop firm, curva 3 = comprar y esperar) y la tabla «Con tu capital» de docs/youtube (fila 14). Las cifras con 10,000 dólares son las de la tabla de 100,000 divididas entre 10. Se cita el #52 solo por su veredicto y sus cifras de la tabla de capital y del propio experimento.

## Títulos (3 opciones)
1. La fórmula de una línea que decide cuánto apalancar: 9.5% ÷ volatilidad
2. Volatilidad objetivo explicada: cómo mantener el riesgo constante (y dónde falla)
3. ¿Qué es la volatilidad? La idea de apostar menos cuando el mercado se agita

## Miniatura
Fondo negro de la marca. Fórmula enorme: «9.5% ÷ VOLATILIDAD» (blanco, con «÷» en rojo de marca). Debajo, un dial de apalancamiento con la aguja entre «×2» y «×4». Logo ATLAS esquina inferior derecha.

---

## VIDEO LARGO (16:9, ≈ 4:37 min — 4–6 min: tema de una sola idea y pocas cifras)
Ritmo visual: algo cambia en pantalla cada 2-3 s; b-roll real detrás, Ken Burns alterno, subtítulos karaoke, whoosh + flash en cada corte, golpe de bass solo en el momento clave.

**[0:00 — Gancho]** (pantalla: fórmula «9.5% ÷ volatilidad» y un dial)
Mi bot decidía cuánto apostar con una división: 9.5% entre la volatilidad reciente, con un tope de ×4. Es una idea famosa de gestión de riesgo. Te explico cómo funciona y por qué en el COVID salió mal.
> Boceto: fórmula «9.5% ÷ volatilidad» en grande; la aguja del dial sube hasta ×4 y tiembla; b-roll de pantallas de bolsa, Ken Burns «in».

**[0:16 — El experimento]** (pantalla: rótulo con el número y el nombre del experimento)
Este es el experimento #14 de ATLAS Lab: Bot ATLAS con volatilidad objetivo (simulación). Todos los resultados están en la página del experimento.
> Boceto: rótulo animado «EXPERIMENTO #14» con el nombre «Bot ATLAS con volatilidad objetivo (simulación)» debajo y el logo ATLAS; whoosh de entrada y fondo de velas con opacidad 0.12.

**[0:25 — Qué es la volatilidad]** (pantalla: dos mercados, uno nervioso y otro tranquilo)
La volatilidad mide cuánto se mueve un mercado. Si sube y baja mucho cada día, es nervioso; si casi no se mueve, es tranquilo. Se calcula con la desviación estándar de los retornos diarios. Y como se quiere expresar en años y no en días, se anualiza multiplicando por la raíz de 252, que son los días de mercado de un año.
> Boceto: dos curvas de precio, una con zigzag grande («nervioso») y otra casi plana («tranquilo»), con una banda que mide su ancho; aparece «× raíz de 252» como etiqueta.

**[0:51 — La idea: un riesgo fijo]** (pantalla: objetivo y tope)
La volatilidad objetivo consiste en fijar cuánto riesgo quieres y ajustar la apuesta para mantenerlo. Aquí el objetivo es 9.5% anual. Cada día, el apalancamiento es ese objetivo dividido entre la volatilidad reciente de la cartera, medida con los últimos 60 días, con un tope de ×4.
> Boceto: tarjeta params_view (9.5% anual · ventana 60 d · tope ×4); la fórmula se arma pieza por pieza con tick.

**[1:10 — El conductor prudente]** (pantalla: dial y carretera)
Es como un conductor con limitador: cuando la carretera se llena de curvas, levanta el pie; en la recta, acelera. Si la volatilidad se duplica, el apalancamiento se reduce a la mitad. Si el mercado se calma mucho, el apalancamiento sube, hasta chocar con el tope de ×4.
> Boceto: carretera con curvas y recta; el dial baja en las curvas y sube en la recta (valores solo ilustrativos, sin cifras intermedias); tope ×4 marcado.

**[1:30 — Por qué suena tan bien]** (pantalla: tres ventajas)
Suena bien por tres razones. Mantiene el riesgo estable en el tiempo. Reduce la apuesta cuando el mercado se agita. Y es una técnica conocida de gestión de riesgo, por eso es natural ponerla a prueba con un bot real.
> Boceto: tres tarjetas verdes que entran una a una: «riesgo estable», «menos apuesta si hay agitación», «técnica conocida».

**[1:46 — El bot que la usa]** (pantalla: dos tarjetas: antes y ahora)
En el experimento la usé sobre la misma cartera del bot anterior: 15 mercados con paridad de riesgo, solo compras y las reglas de una cuenta fondeada, con pérdida diaria de 5% y caída máxima de 10%. Lo único que cambia es el apalancamiento: antes, ×2 fijo; ahora, variable, con una media de ×3.15.
> Boceto: dos tarjetas lado a lado: «#13: ×2 fijo» y «#14: variable, media ×3.15, tope ×4»; checklist de filters: pesos y volatilidad con datos hasta t−1 ✓, costos «no aplicado» en gris.

**[2:08 — Cuando la fórmula choca con el COVID]** (pantalla: línea de tiempo de febrero a marzo de 2020)
Aquí la fórmula se encuentra con la realidad. Antes del COVID, la volatilidad reciente estaba baja: el denominador era pequeño y el apalancamiento, alto. El 24 de febrero de 2020 operaba a ×3.9. El 12 de marzo, cuando la cuenta se cerró, todavía iba a ×2.2: había bajado, pero tarde.
> Boceto: línea de tiempo con dos marcas: «24-feb: ×3.9» (rojo) y «12-mar: ×2.2» (ámbar); la curva real (series, curva 1) cae al final con sacudida.

**[2:29 — El punto débil: mira hacia atrás]** (pantalla: ventana de 60 días y un salto fuera de ella)
El punto débil está en la palabra «reciente». La volatilidad de los últimos 60 días describe el pasado. Un salto repentino, un gap entre un día y otro, no está en esa ventana. La fórmula no ve venir la tormenta: reacciona a la anterior. Y cuando la volatilidad por fin sube, ya se está perdiendo dinero.
> Boceto: ventana de 60 días tranquila y, a la derecha, un salto vertical rojo fuera de la ventana; texto «el pasado tranquilo no avisa».

**[2:52 — El resultado]** (pantalla: tarjetas KPI)
El resultado sobre el camino real: retorno de −14.2%, Sharpe de −0.91 y caída máxima de −21.6%. La cuenta se cerró el 12 de marzo de 2020, esta vez por la regla de pérdida diaria de 5%.
> Boceto: kpis en cascada (−14.2% · −0.91 · −21.6% · ×3.15 · 313 días) en rojo; la curva real cortada en la raya del 12-mar.

**[3:07 — La idea no es mala en sí]** (pantalla: otro experimento del programa)
Eso no significa que la idea sea inútil. Más adelante, en el experimento 52, una versión distinta, que pronostica la volatilidad hacia adelante y dimensiona cada activo, sí sirvió: desde el 18 de marzo de 2020 recorta la caída máxima de −40.3% con ×2 fijo a −19.2%. Pero sirvió como control de riesgo, no como fuente de ganancia.
> Boceto: dos barras de caída máxima del #52, «×2 fijo: −40.3%» y «vol-targeting: −19.2%»; etiqueta «control de riesgo, no ganancia».

**[3:31 — Con tu capital]** (pantalla: tarjeta «Con tu capital» con aviso)
Con 10,000 dólares serían menos 1,388 para el bot, frente a menos 1,156 de comprar y esperar en las mismas fechas. Con 100,000, la tabla de ATLAS da menos 13,877 contra menos 11,558. La curva se detiene el 12 de marzo de 2020 porque la cuenta se cierra, y opera con apalancamiento de hasta ×4.
> Boceto: tarjeta de capital con aviso ámbar; curva 1 cortada, curva 2 punteada hipotética y curva 3 gris; selector $10,000 / $100,000.

**[3:53 — Conclusión]** (pantalla: texto grande)
Veredicto: no sirvió. La fórmula de la volatilidad objetivo es sencilla y elegante, pero mira hacia atrás: en este camino real aumentó el apalancamiento justo antes del salto y la cuenta se cerró con −14.2%.
> Boceto: sello ✕ rojo sobre el dial; la fórmula «9.5% ÷ volatilidad» queda en blanco.

**[4:08 — Ficha del experimento #14]** (pantalla: tarjeta en pantalla con la ficha y la URL)
Ficha del experimento 14. Estado: murió. Cifra clave: retorno −14.2%, Sharpe −0.91, caída máxima −21.6% y apalancamiento medio ×3.15. Filtro que decidió: la regla de pérdida diaria de 5% de la cuenta fondeada: no sobrevive; cierre el 12 de marzo de 2020. Lección: ajustar el apalancamiento por volatilidad pasada no protege de un salto repentino. Revísalo completo en atlas-lab-one.vercel.app/e/14. Contenido educativo, no es asesoría financiera. El trading no se promete: se prueba.
> Boceto: tarjeta con las líneas de la ficha apareciendo una a una (estado, cifra clave, filtro que decidió, lección) y, al pie, la URL «atlas-lab-one.vercel.app/e/14» resaltada; sello del estado del experimento; frase de marca, logo y URL.

---

## SHORT (9:16, ≈ 44 s)
Fórmula visual: b-roll vertical + overlay oscuro 0.6, Ken Burns alternando in/out, subtítulos karaoke en MAYÚSCULAS con las cifras en rojo, whoosh + flash en cada corte, golpe de bass + sacudida solo en el 0-3 s; ticker arriba.

**[0-3 s]** «9.5% ÷ volatilidad: así decidía cuánto apostar.»
> Boceto: texto gigante «9.5% ÷ VOLATILIDAD»; el dial sube hasta ×4 y tiembla con sacudida; b-roll de bolsa, Ken Burns «in».
**[3-13 s]** «La volatilidad mide cuánto se mueve un mercado. Si se agita, el bot baja el apalancamiento; si está tranquilo, lo sube, hasta un tope de ×4.»
> Boceto: dos curvas, nerviosa y tranquila, y el dial que baja o sube; Ken Burns «out»; karaoke con «TOPE ×4» en rojo.
**[13-18 s]** «Con los últimos 60 días de datos, el apalancamiento medio fue ×3.15.»
> Boceto: ventana de 60 días sobre la curva y la cifra «×3.15» que aparece con tick.
**[18-25 s]** «Antes del COVID la volatilidad estaba baja, y el 24 de febrero de 2020 operaba a ×3.9.»
> Boceto: línea de tiempo con la marca roja «×3.9»; whoosh y flash blanco.
**[25-32 s]** «La cuenta se cerró el 12 de marzo con −14.2%. La fórmula mira el pasado: no ve el salto.»
> Boceto: curva real cayendo y cortada; cifra «−14.2%» en rojo; Ken Burns «in».
**[32-39 s]** «El video completo está en el canal. Experimento #14 completo en el enlace. No es asesoría financiera.»
> Boceto: texto «Video completo en el canal» y «Experimento #14 en el enlace» con el logo ATLAS.
**[39-44 s]** «Una división no te protege de lo que aún no ha pasado.»
> Boceto: vuelve la fórmula «9.5% ÷ volatilidad» con ✕ (loop con el gancho); corte directo al inicio.

## Descripción (YouTube) — video largo
https://atlas-lab-one.vercel.app/e/14?utm_source=youtube&utm_medium=video&utm_campaign=exp014-t2
Ficha del experimento #14 (Bot ATLAS con volatilidad objetivo (simulación)): estado murió. Retorno −14.2%, Sharpe −0.91, caída máxima −21.6%; apalancamiento medio ×3.15 y cuenta cerrada el 12-mar-2020.
La volatilidad objetivo explicada con el bot de ATLAS: apalancamiento diario = 9.5% anual ÷ volatilidad de los últimos 60 días, con tope ×4 y media ×3.15, sobre 15 mercados y con reglas de cuenta fondeada.
Entró al COVID con ×3.9 (24-feb-2020) y la cuenta se cerró el 12-mar-2020: −14.2%, Sharpe −0.91, caída máxima −21.6%.
Contenido educativo. No es asesoría financiera ni recomendación de inversión.

## Descripción (YouTube) — Short
https://atlas-lab-one.vercel.app/e/14?utm_source=youtube&utm_medium=short&utm_campaign=exp014-t2
Ficha del experimento #14 (Bot ATLAS con volatilidad objetivo (simulación)): estado murió. Retorno −14.2%, Sharpe −0.91, caída máxima −21.6%; apalancamiento medio ×3.15 y cuenta cerrada el 12-mar-2020.
Un bot que apostaba 9.5% ÷ volatilidad: cómo funciona la volatilidad objetivo y por qué en el COVID entró con ×3.9.
Video completo en el canal. Experimento #14 completo en el enlace. Contenido educativo, no es asesoría financiera.

Capítulos: 0:00 Gancho · 0:16 El experimento · 0:25 Qué es la volatilidad · 0:51 La idea: un riesgo fijo · 1:10 El conductor prudente · 1:30 Por qué suena tan bien · 1:46 El bot que la usa · 2:08 Cuando la fórmula choca con el COVID · 2:29 El punto débil: mira hacia atrás · 2:52 El resultado · 3:07 La idea no es mala en sí · 3:31 Con tu capital · 3:53 Conclusión · 4:08 Ficha del experimento #14

Etiquetas: volatilidad objetivo, vol targeting, volatilidad, apalancamiento, bot de trading, gestión de riesgo, COVID 2020, cuenta fondeada, desviación estándar, ATLAS Lab, trading con datos, backtest

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

Notas: el gancho es una fórmula con número que se entiende en 3 s y promete explicar el porqué; el dial es ilustrativo (sin valores intermedios inventados). La mención del #52 usa solo sus cifras publicadas y aclara que es control de riesgo. El Short cumple hook ≥ 4 y honestidad 5.

# Experimento #14 — Bot ATLAS con volatilidad objetivo (simulación) · Tema 3: Sharpe −0.95 contra −0.91: cuando la palanca cambia el dolor pero no el Sharpe

Tema 3 de 3 del experimento #14. Tema 1: `exp-014-bot-volatilidad-objetivo.md`.
Qué aporta frente a los otros temas: Compara el bot de ×2 fijo (#13) con el de volatilidad objetivo (#14) sobre el mismo camino y enseña por qué el Sharpe apenas los distingue mientras las pérdidas sí. El tema 1 cuenta el mecanismo del ×3.9 y el tema 2 explica la fórmula.
Estado del guion: **BORRADOR — pendiente de aprobación**
Estado del experimento: **murió**
Serie: G (Construyendo un bot, y por qué murió)
Datos usados: `experiments.json` (v=14: description, params, metrics, kpis, analysis, verdict, notes, capital, period), `exp_details.json` (algo, code, filters), `series/20260607_214233_bot-atlas-vol-target-paper-v14.json` (curva 1 = bot, curva 2 = sin reglas de prop firm, curva 3 = comprar y esperar) y la tabla «Con tu capital» de docs/youtube (fila 14). Las cifras con 10,000 dólares son las de la tabla de 100,000 divididas entre 10. Se usan las cifras del #13 (v=13: metrics, kpis y fila 13 de la tabla de capital) solo como comparación.

## Títulos (3 opciones)
1. Sharpe −0.95 y −0.91: casi iguales, pero una cuenta perdió −10.3% y la otra −14.2%
2. Por qué el Sharpe no te avisa de cuánto va a doler: dos bots, un mismo camino
3. Misma cartera, mismo día, otra palanca: el 12 de marzo de 2020 con ×2 y con ×3.15 de media

## Miniatura
Fondo negro de la marca. Dos tarjetas lado a lado con «−0.95» y «−0.91» en gris (casi iguales) y, debajo de cada una, «−10.3%» y «−14.2%» en rojo de marca, claramente distintas. Texto: «MISMO SHARPE, OTRO DOLOR». Logo ATLAS esquina inferior derecha.

---

## VIDEO LARGO (16:9, ≈ 4:17 min — 4–6 min: tema de una sola idea y pocas cifras)
Ritmo visual: algo cambia en pantalla cada 2-3 s; b-roll real detrás, Ken Burns alterno, subtítulos karaoke, whoosh + flash en cada corte, golpe de bass solo en el momento clave.

**[0:00 — Gancho]** (pantalla: dos tarjetas con Sharpe casi iguales)
Dos bots, la misma cartera, el mismo camino. Sharpe: −0.95 y −0.91, casi iguales. Pero uno perdió −10.3% y el otro −14.2%. Te explico qué esconde el Sharpe.
> Boceto: dos tarjetas con los Sharpe en gris que parecen idénticos; debajo caen las pérdidas en rojo con sacudida; b-roll de bolsa, Ken Burns «in».

**[0:12 — El experimento]** (pantalla: rótulo con el número y el nombre del experimento)
Este es el experimento #14 de ATLAS Lab: Bot ATLAS con volatilidad objetivo (simulación). Todos los resultados están en la página del experimento.
> Boceto: rótulo animado «EXPERIMENTO #14» con el nombre «Bot ATLAS con volatilidad objetivo (simulación)» debajo y el logo ATLAS; whoosh de entrada y fondo de velas con opacidad 0.12.

**[0:21 — Los dos bots]** (pantalla: dos tarjetas: ×2 fijo y volatilidad objetivo)
Los dos usan la misma cartera: 15 mercados, solo compras, paridad de riesgo y las mismas reglas de cuenta fondeada, con pérdida diaria de 5% y caída máxima de 10%. El primero, el del experimento 13, apalanca ×2 fijo. El segundo, el del 14, ajusta el apalancamiento por volatilidad: media de ×3.15 y tope de ×4.
> Boceto: dos tarjetas «#13: ×2 fijo» y «#14: media ×3.15, tope ×4» sobre la rejilla de los 15 símbolos; reglas comunes en una fila gris.

**[0:44 — El mismo día]** (pantalla: dos curvas que se cortan en la misma raya)
Los dos recorren el mismo camino real, desde marzo de 2019, y se apagan el mismo día: el 12 de marzo de 2020, el día 313. Lo que cambia es la regla que los apaga: el primero toca el límite de caída máxima; el segundo, el de pérdida diaria.
> Boceto: las curvas reales de los dos bots (series, curva 1 de cada uno) superpuestas, cortándose en la misma raya «12-MAR-2020»; dos etiquetas de causa.

**[1:04 — Cifra por cifra]** (pantalla: tabla de dos columnas)
Lado a lado. Retorno: −10.3% contra −14.2%. Caída máxima: −15.3% contra −21.6%. Sharpe: −0.95 contra −0.91. El de ×2 pierde menos, el de volatilidad objetivo pierde más, y aun así el Sharpe del segundo es algo mejor.
> Boceto: tabla animada #13 contra #14 con filas retorno · caída máxima · Sharpe; las dos primeras filas se separan en rojo y la tercera casi coincide.

**[1:20 — Qué mide el Sharpe]** (pantalla: cociente retorno entre riesgo)
El Sharpe mide cuánto retorno obtienes por cada unidad de riesgo. Si subes el apalancamiento de una estrategia, subes por igual retorno y riesgo, y el cociente casi no cambia. Es una medida que no depende del tamaño de la apuesta.
> Boceto: fracción «retorno ÷ riesgo»; cuando el numerador y el denominador crecen a la vez, el cociente permanece quieto; etiqueta «casi invariante a la palanca».

**[1:37 — Una analogía]** (pantalla: dos conductores con la misma destreza)
Piensa en dos conductores igual de hábiles, uno a velocidad moderada y otro más rápido. La destreza, el Sharpe, es la misma. Pero si aparece un obstáculo imprevisto, el rápido tiene menos margen para frenar. La cuenta fondeada es ese obstáculo: no pregunta por tu destreza, pregunta si llegaste a tiempo.
> Boceto: dos coches con la misma etiqueta «destreza: igual»; ante un obstáculo rojo, el lento frena a tiempo y el rápido lo toca; Ken Burns «out».

**[1:58 — Lo que sí nota la cuenta]** (pantalla: límites fijos en porcentaje)
Pero una cuenta fondeada no mide en Sharpe. Mide en porcentajes fijos: 5% en un día, 10% en total. Con más apalancamiento llegas antes a esos límites. Dos estrategias con casi el mismo Sharpe pueden tocar el límite por reglas distintas, y una puede pasarlo antes que la otra.
> Boceto: dos barras de pérdida subiendo hacia dos líneas rojas «−5% / día» y «−10% total»; la de más palanca llega primero.

**[2:18 — Qué pasó con cada uno]** (pantalla: dos causas de cierre)
En el bot de ×2 fijo, el cierre fue por la caída máxima: la cuenta tocó −10.3% sobre el saldo inicial. En el de volatilidad objetivo, la pérdida de un solo día superó el 5% permitido, con la caída máxima llegando a −21.6%. Más palanca llevó al límite diario. Es el mismo evento, el COVID, visto con dos apuestas distintas.
> Boceto: dos candados rojos: «caída máxima 10%» en el #13 y «pérdida diaria 5%» en el #14; la curva del #14 cae más vertical.

**[2:42 — Qué mirar además del Sharpe]** (pantalla: lista de tres cosas)
Si evalúas una estrategia para una cuenta con límites, mira tres cosas además del Sharpe: la caída máxima, el apalancamiento que usa y la peor pérdida de un solo día. El Sharpe te dice si la relación entre riesgo y retorno es buena; las otras tres te dicen si sobrevives al camino.
> Boceto: checklist con tres ítems que entran con tick: «caída máxima», «apalancamiento», «peor día»; el Sharpe aparece aparte con una nota «no basta».

**[3:03 — Con tu capital]** (pantalla: tarjeta con tres cifras)
Con 10,000 dólares, el bot de ×2 sería menos 1,006; el de volatilidad objetivo, menos 1,388; y la cesta sin estrategia, menos 1,156, en las mismas fechas. Con 100,000, menos 10,056, menos 13,877 y menos 11,558. Las dos curvas se detienen el 12 de marzo de 2020 porque las cuentas se cierran; el segundo opera con hasta ×4.
> Boceto: tarjeta de capital con tres cifras por selector $10,000 / $100,000; aviso ámbar «las curvas se cortan el 12-mar-2020»; curva gris de comprar y esperar.

**[3:27 — Conclusión]** (pantalla: texto grande)
Veredicto de ambos: no sirvió. Un Sharpe de −0.95 y otro de −0.91 dicen que las dos ideas eran igual de malas por unidad de riesgo en ese tramo; las pérdidas dicen que una palanca más alta llega antes al límite. Un número bonito o feo no sustituye mirar el camino.
> Boceto: sello ✕ rojo sobre las dos tarjetas; frase «el Sharpe no avisa del dolor» en blanco.

**[3:48 — Ficha del experimento #14]** (pantalla: tarjeta en pantalla con la ficha y la URL)
Ficha del experimento 14. Estado: murió. Cifra clave: retorno −14.2%, Sharpe −0.91, caída máxima −21.6% y apalancamiento medio ×3.15. Filtro que decidió: la regla de pérdida diaria de 5% de la cuenta fondeada: no sobrevive; cierre el 12 de marzo de 2020. Lección: ajustar el apalancamiento por volatilidad pasada no protege de un salto repentino. Revísalo completo en atlas-lab-one.vercel.app/e/14. Contenido educativo, no es asesoría financiera. El trading no se promete: se prueba.
> Boceto: tarjeta con las líneas de la ficha apareciendo una a una (estado, cifra clave, filtro que decidió, lección) y, al pie, la URL «atlas-lab-one.vercel.app/e/14» resaltada; sello del estado del experimento; frase de marca, logo y URL.

---

## SHORT (9:16, ≈ 45 s)
Fórmula visual: b-roll vertical + overlay oscuro 0.6, Ken Burns alternando in/out, subtítulos karaoke en MAYÚSCULAS con las cifras en rojo, whoosh + flash en cada corte, golpe de bass + sacudida solo en el 0-3 s; ticker arriba.

**[0-3 s]** «Sharpe −0.95 y −0.91. Pérdidas: −10.3% y −14.2%.»
> Boceto: dos Sharpe grises casi idénticos arriba y dos pérdidas rojas muy distintas abajo, con sacudida; b-roll de bolsa, Ken Burns «in».
**[3-14 s]** «Dos bots con la misma cartera de 15 mercados y el mismo camino real. Uno apalanca ×2 fijo; el otro ajusta por volatilidad, con una media de ×3.15.»
> Boceto: dos tarjetas «#13: ×2» y «#14: ×3.15 medio»; Ken Burns «out»; karaoke con «MISMO CAMINO» en rojo.
**[14-18 s]** «Los dos se apagaron el 12 de marzo de 2020.»
> Boceto: las dos curvas se cortan en la misma raya roja; whoosh y flash blanco.
**[18-30 s]** «El Sharpe, el retorno por unidad de riesgo, casi no cambia con la palanca. Pero una cuenta fondeada se mide en límites fijos: 5% al día y 10% en total.»
> Boceto: fracción retorno ÷ riesgo quieta mientras suben ambos; dos muros rojos «−5% / día» y «−10%».
**[30-35 s]** «Más palanca, más cerca del límite: caída máxima de −15.3% contra −21.6%.»
> Boceto: dos barras de caída máxima, la segunda más larga; Ken Burns «in».
**[35-41 s]** «El video completo está en el canal. Experimento #14 completo en el enlace. No es asesoría financiera.»
> Boceto: texto «Video completo en el canal» y «Experimento #14 en el enlace» con el logo ATLAS.
**[41-45 s]** «Dos Sharpe casi iguales. Dos dolores muy distintos.»
> Boceto: vuelven los dos Sharpe grises con las pérdidas rojas (loop con el gancho); corte directo al inicio.

## Descripción (YouTube) — video largo
https://atlas-lab-one.vercel.app/e/14?utm_source=youtube&utm_medium=video&utm_campaign=exp014-t3
Ficha del experimento #14 (Bot ATLAS con volatilidad objetivo (simulación)): estado murió. Retorno −14.2%, Sharpe −0.91, caída máxima −21.6%; apalancamiento medio ×3.15 y cuenta cerrada el 12-mar-2020.
Dos bots de ATLAS con la misma cartera de 15 mercados sobre el mismo camino real: ×2 fijo (experimento 13: −10.3%, Sharpe −0.95, caída máxima −15.3%) y volatilidad objetivo (experimento 14: −14.2%, Sharpe −0.91, caída máxima −21.6%, media ×3.15).
Ambos se apagaron el 12-mar-2020: el Sharpe apenas los distingue, las reglas de la cuenta sí.
Contenido educativo. No es asesoría financiera ni recomendación de inversión.

## Descripción (YouTube) — Short
https://atlas-lab-one.vercel.app/e/14?utm_source=youtube&utm_medium=short&utm_campaign=exp014-t3
Ficha del experimento #14 (Bot ATLAS con volatilidad objetivo (simulación)): estado murió. Retorno −14.2%, Sharpe −0.91, caída máxima −21.6%; apalancamiento medio ×3.15 y cuenta cerrada el 12-mar-2020.
Sharpe −0.95 y −0.91, casi iguales; pérdidas de −10.3% y −14.2%: lo que el Sharpe no muestra de la palanca.
Video completo en el canal. Experimento #14 completo en el enlace. Contenido educativo, no es asesoría financiera.

Capítulos: 0:00 Gancho · 0:12 El experimento · 0:21 Los dos bots · 0:44 El mismo día · 1:04 Cifra por cifra · 1:20 Qué mide el Sharpe · 1:37 Una analogía · 1:58 Lo que sí nota la cuenta · 2:18 Qué pasó con cada uno · 2:42 Qué mirar además del Sharpe · 3:03 Con tu capital · 3:27 Conclusión · 3:48 Ficha del experimento #14

Etiquetas: Sharpe ratio, apalancamiento, volatilidad objetivo, bot de trading, cuenta fondeada, prop firm, drawdown, COVID 2020, gestión de riesgo, ATLAS Lab, trading con datos, backtest

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

Notas: el gancho enfrenta dos números casi iguales con dos números muy distintos; se entiende sin haber visto el tema 1. La afirmación «el Sharpe casi no cambia con la palanca» es una propiedad del cociente, no un resultado del experimento, y se dice con «casi». El Short cumple hook ≥ 4 y honestidad 5.

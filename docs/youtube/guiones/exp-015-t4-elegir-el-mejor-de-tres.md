# Experimento #15 — Bot + filtro de régimen macro · Tema 4: Elegir el mejor de tres: el apalancamiento escogido en la misma muestra

Tema 4 de 4 del experimento #15. Tema 1: `exp-015-bot-filtro-macro-vix.md`.
Qué aporta frente a los otros temas: Se centra en una debilidad concreta del método: el apalancamiento se eligió entre ×2, ×3 y ×4 mirando el resultado, en la misma muestra. El tema 1 cuenta el resultado, el tema 2 la prueba del día de retraso y el tema 3 los indicadores del filtro.
Estado del guion: **BORRADOR — pendiente de aprobación**
Estado del experimento: **murió**
Serie: G (Construyendo un bot, y por qué murió)
Datos usados: `experiments.json` (v=15: description, params, metrics, kpis, analysis, verdict, notes, capital, period), `exp_details.json` (algo, code, filters), `series/20260608_160139_bot-filtro-macro-regimen-v15.json` (curva 1 = bot con el filtro del mismo día, curva 2 = comprar y esperar) y la tabla «Con tu capital» de docs/youtube (fila 15). Las cifras con 10,000 dólares son las de la tabla de 100,000 divididas entre 10. El número 33,363 (estrategias del laboratorio, #81) sale de la tabla de capital.

## Títulos (3 opciones)
1. Probé ×2, ×3 y ×4 y publiqué el mejor: +190.4% (la trampa de elegir en la misma muestra)
2. Elegir el mejor de tres también infla el resultado: el caso del ×4
3. Reglas fijadas de antemano contra parámetros elegidos mirando el resultado

## Miniatura
Fondo negro de la marca. Tres tarjetas, «×2», «×3» y «×4»; la de «×4» con una corona y «+190.4%». Texto grande: «¿EL MEJOR?» (blanco, con el signo de interrogación en rojo de marca). Logo ATLAS esquina inferior derecha.

---

## VIDEO LARGO (16:9, ≈ 4:11 min — 4–6 min: tema de una sola idea y pocas cifras)
Ritmo visual: algo cambia en pantalla cada 2-3 s; b-roll real detrás, Ken Burns alterno, subtítulos karaoke, whoosh + flash en cada corte, golpe de bass solo en el momento clave.

**[0:00 — Gancho]** (pantalla: tres tarjetas ×2, ×3 y ×4 y una corona)
Probé mi bot con ×2, ×3 y ×4 de apalancamiento y publiqué el mejor: +190.4%. Elegir al ganador mirando el resultado tiene un nombre y un costo. Te lo explico con este caso.
> Boceto: tres tarjetas ×2, ×3 y ×4 que giran; la corona cae sobre ×4 con «+190.4%»; b-roll de pantallas de bolsa, Ken Burns «in».

**[0:14 — El experimento]** (pantalla: rótulo con el número y el nombre del experimento)
Este es el experimento #15 de ATLAS Lab: Bot + filtro de régimen macro. Todos los resultados están en la página del experimento.
> Boceto: rótulo animado «EXPERIMENTO #15» con el nombre «Bot + filtro de régimen macro» debajo y el logo ATLAS; whoosh de entrada y fondo de velas con opacidad 0.12.

**[0:23 — El bot y sus parámetros]** (pantalla: tarjeta de parámetros)
El bot es el de siempre: cesta de 15 mercados, paridad de riesgo, solo compras, reglas de cuenta fondeada, de 2019 a 2024, con un filtro de pánico basado en el VIX y el crédito. Los parámetros del filtro se fijaron de antemano: VIX 28, subida de 50% en 5 días y media de 60 días del crédito. No se optimizaron.
> Boceto: params_view (VIX 28 · +50% / 5 d · crédito 60 d) con candado «fijados de antemano»; cesta de 15 símbolos.

**[0:48 — Lo que sí se eligió]** (pantalla: tres opciones, un ganador)
Pero hay una cosa que no se fijó de antemano: el apalancamiento. Se probaron ×2, ×3 y ×4, y se publica el de mayor Sharpe que sobrevive. Ganó el ×4: +190.4%, Sharpe de 1.38 y caída máxima de −13.4%.
> Boceto: tres tarjetas con un filtro «sobrevive» y «mayor Sharpe»; la de ×4 queda; kpis (+190.4% · 1.38 · −13.4%).

**[1:04 — Por qué es un problema]** (pantalla: tres monedas)
¿Cuál es el problema? Que el mismo periodo sirvió para elegir y para medir. Imagina que lanzas tres monedas y te quedas con la que más caras sacó: parece la mejor moneda, pero solo es la más afortunada. Cuando eliges al ganador entre varios mirando los resultados, el ganador sale inflado por la suerte.
> Boceto: tres monedas que caen; la que sacó más caras se marca «la mejor»; la leyenda cambia a «la más afortunada».

**[1:27 — Dos tipos de decisiones]** (pantalla: dos columnas)
Conviene separar dos tipos de decisiones. Las fijadas de antemano, que no miran el resultado: los umbrales del filtro. Y las elegidas después de ver los resultados: el apalancamiento. Las primeras no inflan la cifra; las segundas sí, y más cuantas más opciones pruebas.
> Boceto: dos columnas: «fijado de antemano» (candado verde: VIX 28, 50% en 5 d, 60 d) y «elegido mirando el resultado» (ámbar: ×2/×3/×4).

**[1:45 — Tres opciones es poco, pero el principio es el mismo]** (pantalla: laboratorio de 33,363 estrategias)
Con tres opciones, el efecto es pequeño. El principio, en cambio, es el mismo que en el laboratorio del experimento 81, donde se probaron 33,363 estrategias: cuantas más opciones pruebas, más probable es que alguna salga bien por puro azar. Para eso existen pruebas, como el Deflated Sharpe, que descuentan el número de intentos.
> Boceto: una cuadrícula enorme de estrategias donde unas pocas se iluminan en verde por azar; contador «33,363» y etiqueta «cuantos más intentos, más suerte».

**[2:07 — Qué pasó con el elegido]** (pantalla: tres apalancamientos con señal de ayer)
Y mira lo que pasó con el elegido. Con la señal de un día antes, el ×4 es justo el que revienta: la cuenta se cierra por la pérdida diaria. A ×2 y ×3, el Sharpe baja a 0.25. El ganador de la selección fue el más frágil.
> Boceto: tres tarjetas con señal de ayer: ×2 y ×3 en ámbar «Sharpe 0.25» y ×4 con X roja «cuenta reventada».

**[2:26 — Sumado al problema de fondo]** (pantalla: reloj del día)
Esto se suma al problema principal del bot: el filtro usa el cierre del mismo día, y por eso el 1.38 no se puede ejecutar. La selección en la misma muestra no es la falla más grande de este experimento, pero es la que más se repite en backtests de todo tipo.
> Boceto: reloj con flecha roja «cierre de hoy → cobra hoy» y, a su lado, el aviso ámbar «apalancamiento elegido en la misma muestra».

**[2:48 — Cómo evitar elegir en la misma muestra]** (pantalla: tres hábitos)
¿Cómo se evita? Tres hábitos. Fija de antemano todo lo que puedas. Si tienes que elegir, elige en un periodo y mide en otro que no hayas usado. Y cuenta cuántas cosas probaste, porque ese número importa tanto como el resultado.
> Boceto: tres tarjetas: «fija de antemano», «elige en un periodo, mide en otro», «cuenta tus intentos»; dos tramos de línea de tiempo separados por un candado.

**[3:05 — Con tu capital]** (pantalla: tarjeta «Con tu capital» con aviso)
Con 10,000 dólares serían más 19,201 para esta curva, frente a más 4,049 de comprar y esperar. Con 100,000, más 192,009 contra más 40,488. Es la curva del ×4 elegido, con el cierre del mismo día: no se puede replicar en real.
> Boceto: tarjeta de capital con aviso ámbar «No replicable en real» y sello «NO EJECUTABLE»; selector $10,000 / $100,000.

**[3:22 — Conclusión]** (pantalla: texto grande)
Veredicto: no sirvió. El mejor de tres no es el mejor: es el más afortunado, y con la señal de ayer era el que reventaba. Antes de creer un número, pregunta qué se decidió antes de ver el resultado y qué se decidió después.
> Boceto: sello ✕ rojo sobre la corona del ×4; frase final en blanco.

**[3:40 — Ficha del experimento #15]** (pantalla: tarjeta en pantalla con la ficha y la URL)
Ficha del experimento 15. Estado: murió. Cifra clave: +190.4% y Sharpe 1.38 con el cierre del mismo día; 878 días fuera del mercado. Filtro que decidió: la señal rezagada un día falla: a ×4 la cuenta revienta y a ×2/×3 el Sharpe cae a 0.25. Lección: una señal macro debe usarse con al menos un día de rezago. Revísalo completo en atlas-lab-one.vercel.app/e/15. Contenido educativo, no es asesoría financiera. El trading no se promete: se prueba.
> Boceto: tarjeta con las líneas de la ficha apareciendo una a una (estado, cifra clave, filtro que decidió, lección) y, al pie, la URL «atlas-lab-one.vercel.app/e/15» resaltada; sello del estado del experimento; frase de marca, logo y URL.

---

## SHORT (9:16, ≈ 47 s)
Fórmula visual: b-roll vertical + overlay oscuro 0.6, Ken Burns alternando in/out, subtítulos karaoke en MAYÚSCULAS con las cifras en rojo, whoosh + flash en cada corte, golpe de bass + sacudida solo en el 0-3 s; ticker arriba.

**[0-3 s]** «Probé ×2, ×3 y ×4 y publiqué el mejor: +190.4%.»
> Boceto: texto gigante «+190.4%» con la corona sobre ×4 y tres tarjetas ×2, ×3, ×4; sacudida; b-roll de bolsa, Ken Burns «in».
**[3-11 s]** «Ganó el ×4: Sharpe de 1.38 y caída máxima de −13.4%, sobre 15 mercados, con un filtro de pánico.»
> Boceto: tarjetas verdes con tick; Ken Burns «out»; karaoke con «GANÓ EL ×4» en rojo.
**[11-18 s]** «Pero elegí el apalancamiento mirando el resultado, en la misma muestra. El mejor de tres suele salir inflado.»
> Boceto: tres monedas y la ganadora marcada «la más afortunada»; whoosh y flash blanco.
**[18-26 s]** «Los umbrales del filtro sí se fijaron de antemano: VIX 28, 50% en 5 días, crédito contra su media de 60 días.»
> Boceto: candado verde sobre los tres umbrales; Ken Burns «in».
**[26-35 s]** «Y con la señal de un día antes, el ×4 es el que revienta. A ×2 y ×3, el Sharpe baja a 0.25.»
> Boceto: ×4 con X roja; ×2 y ×3 con «0.25» en ámbar.
**[35-42 s]** «El video completo está en el canal. Experimento #15 completo en el enlace. No es asesoría financiera.»
> Boceto: texto «Video completo en el canal» y «Experimento #15 en el enlace» con el logo ATLAS.
**[42-47 s]** «El mejor de tres no es el mejor: es el más afortunado.»
> Boceto: vuelve la corona del ×4 con ✕ (loop con el gancho); corte directo al inicio.

## Descripción (YouTube) — video largo
https://atlas-lab-one.vercel.app/e/15?utm_source=youtube&utm_medium=video&utm_campaign=exp015-t4
Ficha del experimento #15 (Bot + filtro de régimen macro): estado murió. Con el cierre del mismo día: +190.4%, Sharpe 1.38, caída máxima −13.4%. Con la señal de un día antes: Sharpe 0.25 (×2/×3) y a ×4 la cuenta revienta.
Un bot con filtro de pánico (VIX y crédito) probó ×2, ×3 y ×4 y se publicó el de mayor Sharpe que sobrevive, ×4: +190.4%, Sharpe 1.38, caída máxima −13.4%. El apalancamiento se eligió en la misma muestra en la que se mide el resultado, mientras los umbrales del filtro estaban fijados de antemano.
Con la señal de un día antes, el ×4 es el que revienta y a ×2/×3 el Sharpe cae a 0.25.
Contenido educativo. No es asesoría financiera ni recomendación de inversión.

## Descripción (YouTube) — Short
https://atlas-lab-one.vercel.app/e/15?utm_source=youtube&utm_medium=short&utm_campaign=exp015-t4
Ficha del experimento #15 (Bot + filtro de régimen macro): estado murió. Con el cierre del mismo día: +190.4%, Sharpe 1.38, caída máxima −13.4%. Con la señal de un día antes: Sharpe 0.25 (×2/×3) y a ×4 la cuenta revienta.
Probé ×2, ×3 y ×4 y publiqué el mejor (+190.4%): por qué elegir en la misma muestra infla el resultado.
Video completo en el canal. Experimento #15 completo en el enlace. Contenido educativo, no es asesoría financiera.

Capítulos: 0:00 Gancho · 0:14 El experimento · 0:23 El bot y sus parámetros · 0:48 Lo que sí se eligió · 1:04 Por qué es un problema · 1:27 Dos tipos de decisiones · 1:45 Tres opciones es poco, pero el principio es el mismo · 2:07 Qué pasó con el elegido · 2:26 Sumado al problema de fondo · 2:48 Cómo evitar elegir en la misma muestra · 3:05 Con tu capital · 3:22 Conclusión · 3:40 Ficha del experimento #15

Etiquetas: sobreajuste, selección en la misma muestra, apalancamiento, backtest, parámetros, Deflated Sharpe, bot de trading, VIX, cuenta fondeada, ATLAS Lab, trading con datos, validación de estrategias

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

Notas: el gancho combina tres opciones y una cifra y promete nombrar el sesgo; la honestidad es 5 porque se dice que el apalancamiento se eligió en la misma muestra y que el elegido era el que reventaba con la señal de ayer. El Short cumple hook ≥ 4.

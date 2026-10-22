# Experimento #22 — Detección de régimen con HMM (IA) · Tema 3: Dos estrategias, el mismo resultado: −10.37%, Sharpe −2.314 y 81 días

Tema 3 de 4 del experimento #22. Tema 1: `exp-022-hmm-ia-regimen.md`.
Qué aporta frente a los otros temas: Se centra en el hallazgo central del experimento: la IA y operar sin filtro dieron exactamente lo mismo, y cómo se comprobó. Enseña a desconfiar de un resultado idéntico y a verificarlo. El tema 1 cuenta el experimento, el tema 2 explica el HMM y el tema 4 el segundo periodo.
Estado del guion: **BORRADOR — pendiente de aprobación**
Estado del experimento: **no concluyente** (el sitio lo muestra como neutral)
Serie: D (Machine learning en trading: lo que pasó)
Datos usados: `experiments.json` (v=22: description, params, metrics, kpis, analysis, verdict, notes, capital, period), `exp_details.json` (algo, code, filters), `series/20260610_134200_hmm-regime-detection-ia-v22.json` (curva de la estrategia hasta el corte, curva hipotética «Sin reglas de prop firm» y «Sin estrategia») y la tabla «Con tu capital» de docs/youtube (fila 22). Las cifras con 10,000 dólares son las de la tabla de 100,000 divididas entre 10. Las cifras con decimales (−10.37% y Sharpe −2.314) son las de exp_details (filters, clave «other»).

## Títulos (3 opciones)
1. Dos estrategias distintas dieron exactamente −10.37%: por qué el HMM no llegó a decidir
2. 500 días de calentamiento contra 81 días de vida: la IA que no llegó a operar
3. Cómo comprobar que dos resultados idénticos son la misma operación

## Miniatura
Fondo negro de la marca. Dos curvas superpuestas que coinciden exactamente, una con chip de IA y otra sin nada, con el signo «=» entre ellas. Texto grande: «−10.37%» (rojo de marca) y «81 DÍAS» (blanco). Logo ATLAS esquina inferior derecha.

---

## VIDEO LARGO (16:9, ≈ 4:20 min — 4–6 min: tema de una sola idea y pocas cifras)
Ritmo visual: algo cambia en pantalla cada 2-3 s; b-roll real detrás, Ken Burns alterno, subtítulos karaoke, whoosh + flash en cada corte, golpe de bass solo en el momento clave.

**[0:00 — Gancho]** (pantalla: dos curvas idénticas y el signo igual)
Dos estrategias distintas dieron exactamente el mismo resultado: −10.37%, Sharpe de −2.314 y 81 días. Una era una inteligencia artificial. La otra, ningún filtro. Te cuento por qué, y cómo se comprobó.
> Boceto: dos curvas, «HMM» y «×3 sin filtro», que se superponen hasta ser una sola; el rótulo «idénticas» parpadea; b-roll de bolsa, Ken Burns «in».

**[0:13 — El experimento]** (pantalla: rótulo con el número y el nombre del experimento)
Este es el experimento #22 de ATLAS Lab: Detección de régimen con HMM (IA). Todos los resultados están en la página del experimento.
> Boceto: rótulo animado «EXPERIMENTO #22» con el nombre «Detección de régimen con HMM (IA)» debajo y el logo ATLAS; whoosh de entrada y fondo de velas con opacidad 0.12.

**[0:23 — Las dos estrategias]** (pantalla: IA contra sin filtro)
La primera: un modelo oculto de Markov que aprende cuándo salir del mercado. La segunda: la misma cartera de mercados a ×3, sin ningún filtro. Dos reglas distintas, y la misma curva en cada punto.
> Boceto: dos tarjetas lado a lado, «HMM (IA)» y «×3 sin filtro», sobre la misma cesta de mercados.

**[0:38 — El resultado]** (pantalla: tarjetas KPI)
El resultado de 2014 a 2024: retorno de −10.4%, Sharpe de −2.31 y caída máxima de −11.1%. La cuenta duró 81 días: se cerró el 6 de enero de 2015, al tocar el límite de pérdida de la prop firm.
> Boceto: tarjetas con tick (−10.4% · −2.31 · −11.1% · 81 días); la curva real dibujándose hasta el 6-ene-2015.

**[0:54 — Una coincidencia sospechosa]** (pantalla: dos cifras iguales hasta los decimales)
Cuando dos métodos distintos dan el mismo resultado hasta los decimales, hay que sospechar. O algo falla en la prueba, o los dos métodos hicieron exactamente lo mismo. Merece una comprobación antes de interpretar nada.
> Boceto: lupa sobre dos números idénticos «−10.37%» y «−10.37%» con un signo de interrogación.

**[1:09 — La comprobación]** (pantalla: volver a ejecutar la base)
La comprobación consistió en volver a ejecutar la base sin filtro y comparar. El resultado coincide al decimal: −10.37%, Sharpe de −2.314 y 81 días. No era una casualidad ni un error de la prueba: eran la misma operación.
> Boceto: el botón de volver a ejecutar; dos tablas cuyos números se alinean uno a uno y se marcan con tick; sello verde «coinciden».

**[1:25 — La explicación: el calentamiento]** (pantalla: barra de 500 días)
La explicación es el calentamiento. El modelo necesita 500 días de historia antes de empezar a decidir. Mientras tanto, su señal vale cero, es decir, el bot opera sin filtro. La cuenta duró 81 días, mucho menos que 500. Durante toda su vida, la IA no decidió nada.
> Boceto: barra «calentamiento» que se llena hasta 81 de 500 días y se corta con X roja; texto «señal = 0: sin filtro».

**[1:44 — Por qué existe el calentamiento]** (pantalla: poca historia, mucho ruido)
Un calentamiento no es un capricho. Con muy poca historia, un modelo así no distingue bien entre calma y pánico, y sus conclusiones serían puro ruido. Por eso se le exigen 500 días antes de dejarle decidir, y después se reentrena cada 126 días. El problema no es el calentamiento, sino que la cuenta se cerró antes de que terminara.
> Boceto: un modelo con pocos puntos (nube desordenada) que se ordena al acumular historia; hitos «500 días» y «reentrena cada 126 días»; la X roja cae antes del hito.

**[2:09 — El guardia que llega tarde]** (pantalla: analogía)
Es como contratar a un guardia de seguridad que empieza a trabajar 500 días después de abrir la tienda. Si el robo ocurre antes, no es culpa del guardia, pero tampoco prueba que sirva.
> Boceto: tienda con la puerta abierta; un reloj avanza 81 días y ocurre el «robo» (la caída de la cuenta); el guardia aparece recién en el día 500.

**[2:23 — Qué no se puede concluir]** (pantalla: balanza vacía)
Por eso la muerte de la cuenta es un artefacto del periodo inicial, no evidencia contra el HMM. Pero tampoco es evidencia a su favor, porque el modelo no llegó a hacer nada. Mi veredicto: no concluyente.
> Boceto: balanza con dos platos vacíos y el sello gris «NO CONCLUYENTE».

**[2:38 — Qué haría falta para juzgarlo]** (pantalla: periodo más largo)
Para juzgar a un modelo con calentamiento, hace falta un periodo en el que la cuenta siga viva después de que el calentamiento termine. Si no, la prueba mide al periodo, no al modelo.
> Boceto: dos líneas de tiempo: una donde la cuenta muere a los 81 días (modelo sin actuar) y otra donde la cuenta sigue viva pasados los 500 días.

**[2:52 — Una regla general]** (pantalla: cuántas decisiones tomó)
Una regla general: antes de interpretar un resultado, pregunta si la estrategia llegó a actuar. Cuenta cuántas decisiones tomó. Un backtest en el que la regla no decide nada no evalúa la regla.
> Boceto: contador «decisiones del filtro: 0» en gris; texto «sin decisiones, sin evaluación».

**[3:06 — Con tu capital]** (pantalla: tarjeta «Con tu capital» con aviso)
Con 10,000 dólares, la curva termina en menos 1,026; con 100,000, en menos 10,258. Comprando y esperando en esas fechas serían menos 578 y menos 5,776. Con tu capital verías esa cuenta cerrada; la línea «Sin reglas de prop firm» muestra cómo habría seguido, pero es hipotética.
> Boceto: tarjeta de capital con selector; curva roja cortada en enero de 2015; curva punteada «hipotética» en gris claro.

**[3:25 — Conclusión]** (pantalla: texto grande)
Veredicto: no concluyente. Menos 10.4% con Sharpe de −2.31, idéntico a no usar filtro, porque el HMM seguía en sus 500 días de calentamiento cuando la cuenta se cerró. Un resultado idéntico no es un empate: es una pregunta que hay que contestar.
> Boceto: sello gris «NO CONCLUYENTE»; frase «¿llegó a actuar?» en blanco.

**[3:43 — Ficha del experimento #22]** (pantalla: tarjeta en pantalla con la ficha y la URL)
Ficha del experimento 22. Estado: no concluyente (neutral en el sitio). Cifra clave: 2014-2024, retorno −10.4% y Sharpe −2.31 con la cuenta cerrada a los 81 días, idéntico a operar a ×3 sin filtro. Filtro que decidió: el calentamiento de 500 días; el modelo no llegó a decidir antes del corte. En 2007-2013: −11.9%, Sharpe −0.54. Lección: un modelo con 500 días de calentamiento no se puede juzgar en un periodo que termina antes. Revísalo completo en atlas-lab-one.vercel.app/e/22. Contenido educativo, no es asesoría financiera. El trading no se promete: se prueba.
> Boceto: tarjeta con las líneas de la ficha apareciendo una a una (estado, cifra clave, filtro que decidió, lección) y, al pie, la URL «atlas-lab-one.vercel.app/e/22» resaltada; sello del estado del experimento; frase de marca, logo y URL.

---

## SHORT (9:16, ≈ 44 s)
Fórmula visual: b-roll vertical + overlay oscuro 0.6, Ken Burns alternando in/out, subtítulos karaoke en MAYÚSCULAS con las cifras en rojo, whoosh + flash en cada corte, golpe de bass + sacudida solo en el 0-3 s; ticker arriba.

**[0-3 s]** «Dos estrategias distintas. El mismo resultado: −10.37%.»
> Boceto: dos curvas que se superponen hasta ser una; texto gigante «−10.37%» con sacudida; b-roll de bolsa, Ken Burns «in».
**[3-9 s]** «Una era una IA que aprende cuándo salir del mercado. La otra, ningún filtro.»
> Boceto: tarjetas «HMM» y «sin filtro» con signo «=»; Ken Burns «out»; karaoke con «IDÉNTICO» en rojo.
**[9-16 s]** «Mismo retorno, mismo Sharpe de −2.314, mismos 81 días. Se comprobó volviendo a ejecutar la base sin filtro.»
> Boceto: dos tablas que se alinean con tick; whoosh y flash blanco.
**[16-21 s]** «El motivo: la IA necesita 500 días de calentamiento. La cuenta duró 81.»
> Boceto: barra de calentamiento que llega a 81 de 500 con sacudida; Ken Burns «in».
**[21-28 s]** «Mientras calentaba, el bot operó la cesta completa a ×3, sin protección, con las reglas de la prop firm.»
> Boceto: la cesta de mercados con el chip «×3» y el semáforo del filtro apagado; candado de las reglas de la cuenta.
**[28-33 s]** «Durante toda su vida, la IA no decidió nada. Veredicto: no concluyente.»
> Boceto: contador «decisiones: 0»; sello gris «NO CONCLUYENTE».
**[33-40 s]** «El video completo está en el canal. Experimento #22 completo en el enlace. No es asesoría financiera.»
> Boceto: texto «Video completo en el canal» y «Experimento #22 en el enlace» con el logo ATLAS.
**[40-44 s]** «Dos estrategias, un solo resultado: la IA nunca actuó.»
> Boceto: vuelve «−10.37%» con las dos curvas (loop con el gancho); corte directo al inicio.

## Descripción (YouTube) — video largo
https://atlas-lab-one.vercel.app/e/22?utm_source=youtube&utm_medium=video&utm_campaign=exp022-t3
Ficha del experimento #22 (Detección de régimen con HMM (IA)): estado no concluyente. 2014-2024: −10.4%, Sharpe −2.31, cuenta cerrada a los 81 días, resultado idéntico a ×3 sin filtro; 2007-2013: −11.9% y Sharpe −0.54.
Un HMM de 2 estados (IA) y operar a ×3 sin filtro dieron exactamente el mismo resultado en 2014-2024: −10.37%, Sharpe −2.314 y 81 días (cuenta cerrada el 6-ene-2015). Se verificó volviendo a ejecutar la base sin filtro: el modelo necesita 500 días de calentamiento y la cuenta duró 81, así que nunca decidió nada.
Veredicto: no concluyente. No es evidencia contra el HMM ni a su favor.
Contenido educativo. No es asesoría financiera ni recomendación de inversión.

## Descripción (YouTube) — Short
https://atlas-lab-one.vercel.app/e/22?utm_source=youtube&utm_medium=short&utm_campaign=exp022-t3
Ficha del experimento #22 (Detección de régimen con HMM (IA)): estado no concluyente. 2014-2024: −10.4%, Sharpe −2.31, cuenta cerrada a los 81 días, resultado idéntico a ×3 sin filtro; 2007-2013: −11.9% y Sharpe −0.54.
Una IA y operar sin filtro dieron el mismo resultado exacto (−10.37%, 81 días) porque la IA seguía calentando.
Video completo en el canal. Experimento #22 completo en el enlace. Contenido educativo, no es asesoría financiera.

Capítulos: 0:00 Gancho · 0:13 El experimento · 0:23 Las dos estrategias · 0:38 El resultado · 0:54 Una coincidencia sospechosa · 1:09 La comprobación · 1:25 La explicación: el calentamiento · 1:44 Por qué existe el calentamiento · 2:09 El guardia que llega tarde · 2:23 Qué no se puede concluir · 2:38 Qué haría falta para juzgarlo · 2:52 Una regla general · 3:06 Con tu capital · 3:25 Conclusión · 3:43 Ficha del experimento #22

Etiquetas: HMM, inteligencia artificial, calentamiento del modelo, burn-in, backtest, verificar resultados, régimen de mercado, prop firm, bot de trading, ATLAS Lab, trading con datos, validación de estrategias

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

Notas: el gancho es una paradoja con una cifra exacta (−10.37%) y promete la explicación y la comprobación; la honestidad es 5 porque el cierre dice que no hay evidencia ni a favor ni en contra del modelo. El Short cumple hook ≥ 4.

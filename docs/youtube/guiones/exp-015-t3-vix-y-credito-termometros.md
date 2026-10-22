# Experimento #15 — Bot + filtro de régimen macro · Tema 3: VIX y crédito: los dos termómetros del miedo detrás del filtro

Tema 3 de 4 del experimento #15. Tema 1: `exp-015-bot-filtro-macro-vix.md`.
Qué aporta frente a los otros temas: Explica los dos indicadores del filtro (VIX y cociente HYG/LQD) y cómo funcionan las tres alarmas, para quien nunca los ha visto. El tema 1 cuenta el resultado en papel, el tema 2 la prueba del día de retraso y el tema 4 la elección del apalancamiento.
Estado del guion: **BORRADOR — pendiente de aprobación**
Estado del experimento: **murió**
Serie: G (Construyendo un bot, y por qué murió)
Datos usados: `experiments.json` (v=15: description, params, metrics, kpis, analysis, verdict, notes, capital, period), `exp_details.json` (algo, code, filters), `series/20260608_160139_bot-filtro-macro-regimen-v15.json` (curva 1 = bot con el filtro del mismo día, curva 2 = comprar y esperar) y la tabla «Con tu capital» de docs/youtube (fila 15). Las cifras con 10,000 dólares son las de la tabla de 100,000 divididas entre 10.

## Títulos (3 opciones)
1. Tres alarmas decidían si mi bot operaba: VIX, salto del VIX y crédito
2. ¿Qué es el VIX? ¿Y el cociente HYG/LQD? Los termómetros del miedo explicados
3. 878 días fuera del mercado de 1,816: el bot que se apagaba con tres alarmas

## Miniatura
Fondo negro de la marca. Tres semáforos en rojo rotulados «VIX > 28», «VIX +50%» y «CRÉDITO». Texto grande: «878 DÍAS FUERA» (blanco, «FUERA» en rojo de marca). Logo ATLAS esquina inferior derecha.

---

## VIDEO LARGO (16:9, ≈ 4:11 min — 4–6 min: tema de una sola idea y pocas cifras)
Ritmo visual: algo cambia en pantalla cada 2-3 s; b-roll real detrás, Ken Burns alterno, subtítulos karaoke, whoosh + flash en cada corte, golpe de bass solo en el momento clave.

**[0:00 — Gancho]** (pantalla: tres semáforos y el contador 878)
Mi bot tenía tres alarmas. Si sonaba una, se quedaba fuera del mercado. En 1,816 días, estuvo fuera 878. Te explico qué mide cada alarma y cómo se leen.
> Boceto: tres semáforos que pasan a rojo con tick; contador que sube hasta 878 sobre «1,816»; b-roll de pantallas de bolsa, Ken Burns «in».

**[0:12 — El experimento]** (pantalla: rótulo con el número y el nombre del experimento)
Este es el experimento #15 de ATLAS Lab: Bot + filtro de régimen macro. Todos los resultados están en la página del experimento.
> Boceto: rótulo animado «EXPERIMENTO #15» con el nombre «Bot + filtro de régimen macro» debajo y el logo ATLAS; whoosh de entrada y fondo de velas con opacidad 0.12.

**[0:22 — Para qué sirve un filtro]** (pantalla: cesta de 15 mercados y un interruptor)
Hasta aquí, los bots miraban solo precios y reventaban en el COVID. La idea nueva es mirar datos que no están en el precio de lo que operas: señales de miedo del resto del mercado. Y quedarse en efectivo cuando suenan. Un filtro no predice: reacciona a señales de estrés.
> Boceto: cesta de 15 símbolos con un interruptor que la apaga («apalancamiento 0») cuando se enciende una alarma roja.

**[0:42 — Alarma 1: el VIX]** (pantalla: termómetro del VIX con la marca en 28)
El VIX es el índice del miedo de Wall Street. Mide la volatilidad que el mercado espera para el S&P 500, y sube cuando los inversionistas se asustan. La primera alarma suena si el VIX supera 28.
> Boceto: termómetro vertical con la línea roja en 28; el mercurio sube y la alarma «VIX > 28» se enciende.

**[0:58 — Alarma 2: el salto del VIX]** (pantalla: velocidad, no nivel)
La segunda alarma no mira el nivel, sino la velocidad: suena si el VIX sube 50% en 5 días. Un VIX moderado puede ser normal; un VIX que se dispara en pocos días es un susto, aunque no haya llegado todavía al umbral de 28.
> Boceto: dos líneas de VIX: una suave, otra con un salto vertical en 5 días; la segunda activa «VIX +50% en 5 d».

**[1:16 — Alarma 3: el crédito]** (pantalla: cociente HYG entre LQD)
La tercera mira el crédito. HYG es un fondo de bonos de empresas de alto riesgo y LQD, uno de bonos de empresas sólidas. Se calcula el cociente de HYG entre LQD. Cuando el mercado se pone nervioso, los bonos de alto riesgo pierden frente a los sólidos y el cociente baja. La alarma suena cuando cae por debajo de su media de 60 días.
> Boceto: dos iconos de bonos (HYG alto riesgo, LQD sólidos) y su cociente como línea; la línea cruza por debajo de su media de 60 días y se enciende «Crédito < media 60 d».

**[1:43 — Basta una]** (pantalla: tres alarmas unidas por «o»)
Las tres alarmas están unidas por un «o»: basta que suene una para que el bot se salga, con apalancamiento cero. Las reglas se fijaron de antemano y no se optimizaron: los umbrales de 28, de 50% y de 60 días no se barrieron para quedarse con los mejores.
> Boceto: tres semáforos conectados a una compuerta «O»; etiqueta «reglas fijadas de antemano, sin optimizar».

**[2:03 — Cuánto se activó]** (pantalla: barra de 1,816 días)
¿Cuánto se activó? El bot pasó 878 días fuera del mercado, de 1,816 en total, casi la mitad del tiempo. Los demás días operó la cesta de 15 mercados a ×4, de 2019 a 2024.
> Boceto: barra horizontal de 1,816 días con 878 sombreados en gris «fuera del mercado»; la curva real (series, curva 1) con esas zonas.

**[2:17 — El resultado en papel]** (pantalla: tarjetas KPI)
Con el filtro, el bot sobrevivió al COVID a ×4, donde sin filtro reventaba. Retorno de +190.4%, Sharpe de 1.38 y caída máxima de −13.4%. Un resultado espectacular sobre el papel.
> Boceto: kpis en cascada con tick (+190.4% · 1.38 · −13.4% · 878 · 1,816); la curva real subiendo en diagonal.

**[2:30 — La condición que lo invalida]** (pantalla: reloj del día)
Pero hay una condición. Las tres alarmas se calculan con el cierre del mismo día en que el bot opera, y un bot real no conoce ese cierre antes de decidir. Con la señal de un día antes, a ×4 la cuenta revienta y a ×2 y ×3 el Sharpe cae de 1.38 a 0.25.
> Boceto: reloj con «cierre de hoy» y flecha roja imposible; dos barras 1.38 verde y 0.25 ámbar; sello «NO EJECUTABLE».

**[2:53 — Lo que enseñan los indicadores de miedo]** (pantalla: termómetro leído al final del día)
Una lección de estos indicadores: sirven para describir el estado del mercado, pero cuándo los conoces importa tanto como lo que dicen. Un termómetro que se lee al final del día no avisa de la fiebre de la mañana.
> Boceto: termómetro con un reloj al final del día; texto «el dato llega tarde» en ámbar.

**[3:09 — Con tu capital]** (pantalla: tarjeta «Con tu capital» con aviso)
Con 10,000 dólares serían más 19,201 para la curva con el filtro, frente a más 4,049 de comprar y esperar. Con 100,000, más 192,009 contra más 40,488. Esas cifras no se pueden replicar en real: usan el cierre del mismo día y operan a ×4.
> Boceto: tarjeta de capital con aviso ámbar «No replicable en real»; sello «NO EJECUTABLE» sobre la cifra de la estrategia; selector $10,000 / $100,000.

**[3:27 — Conclusión]** (pantalla: texto grande)
Veredicto: no sirvió. El VIX y el crédito son buenos termómetros, pero el bot los leía al final del día en que operaba. Para que una alarma sirva, hay que recibirla a tiempo.
> Boceto: sello ✕ rojo sobre los tres semáforos; frase final en blanco.

**[3:41 — Ficha del experimento #15]** (pantalla: tarjeta en pantalla con la ficha y la URL)
Ficha del experimento 15. Estado: murió. Cifra clave: +190.4% y Sharpe 1.38 con el cierre del mismo día; 878 días fuera del mercado. Filtro que decidió: la señal rezagada un día falla: a ×4 la cuenta revienta y a ×2/×3 el Sharpe cae a 0.25. Lección: una señal macro debe usarse con al menos un día de rezago. Revísalo completo en atlas-lab-one.vercel.app/e/15. Contenido educativo, no es asesoría financiera. El trading no se promete: se prueba.
> Boceto: tarjeta con las líneas de la ficha apareciendo una a una (estado, cifra clave, filtro que decidió, lección) y, al pie, la URL «atlas-lab-one.vercel.app/e/15» resaltada; sello del estado del experimento; frase de marca, logo y URL.

---

## SHORT (9:16, ≈ 44 s)
Fórmula visual: b-roll vertical + overlay oscuro 0.6, Ken Burns alternando in/out, subtítulos karaoke en MAYÚSCULAS con las cifras en rojo, whoosh + flash en cada corte, golpe de bass + sacudida solo en el 0-3 s; ticker arriba.

**[0-3 s]** «Tres alarmas apagaban mi bot: 878 días fuera.»
> Boceto: texto gigante «878 DÍAS FUERA»; tres semáforos pasan a rojo con tick y sacudida; b-roll de bolsa, Ken Burns «in».
**[3-16 s]** «Una: el VIX, el índice del miedo, por encima de 28. Dos: el VIX sube 50% en 5 días. Tres: el crédito, HYG entre LQD, cae bajo su media de 60 días.»
> Boceto: tres semáforos con sus rótulos que se encienden uno a uno; Ken Burns «out»; karaoke con «TRES» en rojo.
**[16-20 s]** «Si suena una sola, el bot se queda fuera del mercado.»
> Boceto: compuerta «O» y la cesta que se apaga; whoosh y flash blanco.
**[20-27 s]** «En 1,816 días estuvo fuera 878. Con eso, +190.4%, Sharpe de 1.38 y caída de −13.4%, a ×4.»
> Boceto: barra de 1,816 días con 878 en gris; tarjetas verdes con tick; Ken Burns «in».
**[27-35 s]** «Pero las alarmas usan el cierre del mismo día. Con la señal de ayer, el Sharpe cae a 0.25.»
> Boceto: reloj con flecha roja imposible; barras 1.38 y 0.25; sello «NO EJECUTABLE».
**[35-41 s]** «El video completo está en el canal. Experimento #15 completo en el enlace. No es asesoría financiera.»
> Boceto: texto «Video completo en el canal» y «Experimento #15 en el enlace» con el logo ATLAS.
**[41-44 s]** «Tres alarmas. Un día de retraso.»
> Boceto: vuelven los tres semáforos con un reloj (loop con el gancho); corte directo al inicio.

## Descripción (YouTube) — video largo
https://atlas-lab-one.vercel.app/e/15?utm_source=youtube&utm_medium=video&utm_campaign=exp015-t3
Ficha del experimento #15 (Bot + filtro de régimen macro): estado murió. Con el cierre del mismo día: +190.4%, Sharpe 1.38, caída máxima −13.4%. Con la señal de un día antes: Sharpe 0.25 (×2/×3) y a ×4 la cuenta revienta.
Qué mide cada una de las tres alarmas del filtro de pánico del bot: VIX por encima de 28, VIX con +50% en 5 días y cociente de crédito HYG/LQD bajo su media de 60 días. Basta una para quedarse fuera: 878 días de 1,816, con ×4 y 15 mercados.
En papel: +190.4%, Sharpe 1.38, caída máxima −13.4%. Con la señal de un día antes, a ×2/×3 el Sharpe cae a 0.25 y a ×4 la cuenta revienta.
Contenido educativo. No es asesoría financiera ni recomendación de inversión.

## Descripción (YouTube) — Short
https://atlas-lab-one.vercel.app/e/15?utm_source=youtube&utm_medium=short&utm_campaign=exp015-t3
Ficha del experimento #15 (Bot + filtro de régimen macro): estado murió. Con el cierre del mismo día: +190.4%, Sharpe 1.38, caída máxima −13.4%. Con la señal de un día antes: Sharpe 0.25 (×2/×3) y a ×4 la cuenta revienta.
Tres alarmas (VIX, salto del VIX y crédito) dejaron a mi bot 878 días fuera de 1,816: cómo se leen.
Video completo en el canal. Experimento #15 completo en el enlace. Contenido educativo, no es asesoría financiera.

Capítulos: 0:00 Gancho · 0:12 El experimento · 0:22 Para qué sirve un filtro · 0:42 Alarma 1: el VIX · 0:58 Alarma 2: el salto del VIX · 1:16 Alarma 3: el crédito · 1:43 Basta una · 2:03 Cuánto se activó · 2:17 El resultado en papel · 2:30 La condición que lo invalida · 2:53 Lo que enseñan los indicadores de miedo · 3:09 Con tu capital · 3:27 Conclusión · 3:41 Ficha del experimento #15

Etiquetas: VIX, índice del miedo, HYG LQD, crédito, filtro de régimen, bot de trading, riesgo de mercado, volatilidad, cuenta fondeada, ATLAS Lab, trading con datos, indicadores de miedo

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

Notas: el gancho da dos cifras (878 de 1,816) y una promesa de explicación; la claridad es 5 en el largo porque cada indicador tiene su termómetro. El Short cumple hook ≥ 4 y honestidad 5 al decir que las alarmas usan el cierre del mismo día.

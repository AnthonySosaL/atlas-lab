# Experimento #15 — Bot + filtro de régimen macro

Estado del guion: **BORRADOR — pendiente de aprobación**
Estado del experimento: **murió**
Serie: G (Construyendo un bot, y por qué murió)
Datos usados: `experiments.json` (v=15: description, params, metrics, kpis, analysis, verdict, notes, capital, period), `exp_details.json` (algo, filters), `series/20260608_160139_bot-filtro-macro-regimen-v15.json` (curva 1 = bot con el filtro del mismo día, curva 2 = comprar y esperar) y la tabla «Con tu capital» de docs/youtube (fila 15). Las cifras del #27 se citan tal como figuran en los campos de este experimento. Las cifras con 10,000 dólares son las de la tabla de 100,000 divididas entre 10.
Nota de datos: el experimento publica dos lecturas (filtro con el cierre del mismo día y versión ejecutable con la señal de un día antes). No hay curva de capital de la versión ejecutable en este experimento; solo sus cifras.

## Títulos (3 opciones)
1. +190% y Sharpe 1.38 en papel: por qué este bot no se puede ejecutar
2. Bot con filtro de VIX y crédito: 1.38 con el dato de hoy, 0.25 con el de ayer
3. Por qué un backtest que usa el cierre del mismo día no vale: el caso del filtro macro

## Miniatura
Fondo negro de la marca. A la izquierda «+190%» en verde enorme; a la derecha un sello rojo girado «NO EJECUTABLE» (2 palabras). Debajo, pequeño, «1.38 → 0.25». De fondo, tenue, la curva real de la serie 1 subiendo en diagonal. Logo ATLAS esquina inferior derecha.

---

## VIDEO LARGO (16:9, ≈ 5:01 min — 4–6 min: experimento de una sola idea y pocas cifras)
Ritmo visual: algo cambia en pantalla cada 2-3 s; b-roll real detrás, Ken Burns alterno, subtítulos karaoke, whoosh + flash en cada corte, golpe de bass solo en el momento clave.

**[0:00 — Gancho]** (pantalla: «+190.4%», «Sharpe 1.38», «−13.4%»)
+190.4%, Sharpe de 1.38 y una caída máxima de solo −13.4%. Si vieras esos números en una cuenta de redes sociales, probablemente te emocionarías. Este bot los consiguió, y además sobrevivió al COVID a ×4. Pero no se pueden ejecutar. Te muestro por qué, y qué pasa cuando usas el dato de ayer en lugar del de hoy. Es una lección que cualquiera que mire backtests debería conocer.
> Boceto: tres tarjetas verdes entran con tick sonoro; la curva real (series, curva 1) sube en diagonal hasta casi triplicar; de repente un sello rojo «NO EJECUTABLE» la cruza con sacudida de pantalla.

**[0:28 — La idea]** (pantalla: VIX y crédito)
Hasta aquí, los dos bots miraban solo precios y reventaban en el COVID. La nueva idea: usar datos que no están en el precio. Primero, el VIX, el llamado índice del miedo, que mide la volatilidad que espera el mercado: cuando los inversionistas se asustan, sube. Segundo, el crédito: el cociente entre bonos de alto riesgo, HYG, y bonos de calidad, LQD, que se debilita cuando el mercado se pone nervioso. La regla saca al bot del mercado, con apalancamiento cero, si el VIX supera 28, si sube 50% en 5 días, o si el crédito cae por debajo de su media de 60 días. Tres señales de alarma, y basta con que suene una.
> Boceto: tres semáforos: «VIX > 28», «VIX +50% en 5 días», «Crédito < media de 60 días»; si alguno se enciende en rojo, la cartera de 15 símbolos se apaga («apalancamiento 0»).

**[1:15 — Cómo se probó]** (pantalla: tarjeta de parámetros)
La misma cartera de solo compras con paridad de riesgo sobre 15 instrumentos, con reglas de cuenta fondeada, de 2019 a 2024. Las reglas del filtro estaban fijadas de antemano, sin optimizar. Probé ×2, ×3 y ×4 y publico el de mayor Sharpe que sobrevive, que es ×4. Y eso es una debilidad: el apalancamiento se eligió en la misma muestra en la que se mide el resultado. El motor del bot tampoco descuenta costos de operación. Anoto las debilidades antes de mostrarte las cifras, para que las leas con ellas en la cabeza.
> Boceto: `params_view` (×4 · VIX 28 · +50% en 5 d · crédito 60 d · 878 días fuera del mercado); aviso ámbar «Apalancamiento elegido en la misma muestra».

**[1:54 — Resultado en papel]** (pantalla: tarjetas KPI)
Con el filtro, el bot sobrevivió el COVID a ×4. Retorno total: +190.4%. Sharpe: 1.38. Caída máxima: −13.4%. Pasó 878 días fuera del mercado, de 1,816 días en total. Sin filtro, el bot reventaba en el COVID. En el papel es un resultado espectacular: gana mucho, cae poco y, además, se salva del evento que mató a los bots anteriores. Por eso es importante mirar con lupa de dónde sale.
> Boceto: `kpis` en cascada; la curva real con las zonas «fuera del mercado» sombreadas en gris.

**[2:23 — El problema]** (pantalla: reloj del día)
Aquí viene el problema. Para decidir si el día t está dentro o fuera del mercado, el filtro usa el cierre del VIX y del crédito del mismo día t, el mismo día cuyo retorno cobra. Un bot real todavía no conoce ese cierre cuando tiene que decidir: es información del mismo día que un bot real aún no tendría. Es como decidir si llevas paraguas mirando el pronóstico, pero con el pronóstico que sale al final del día, cuando ya te mojaste.
> Boceto: reloj de 24 h: marca «cierre de hoy» a la derecha y «decisión del bot» a la izquierda; flecha roja imposible hacia atrás. Texto: «Usa el cierre de HOY para operar HOY».

**[2:57 — La versión ejecutable]** (pantalla: dos Sharpe)
Con la señal rezagada un día, es decir, con el dato de ayer, que sí se conoce: a ×4 la cuenta revienta por pérdida diaria, y a ×2 y ×3 el Sharpe cae de 1.38 a 0.25. La diferencia entre 1.38 y 0.25 es lo que valía el dato del futuro. Y fíjate que la versión ejecutable ni siquiera tiene curva espectacular que mostrar: pierde la que era la mejor configuración, la de ×4.
> Boceto: dos barras: «Dato de hoy: 1.38» (verde, alta) y «Dato de ayer: 0.25» (ámbar, baja); a un lado, «×4 → cuenta reventada» en rojo.

**[3:28 — Y la base sin filtro]** (pantalla: Sharpe negativos)
Hay más. En una base más larga, con las señales de ayer, el experimento 27 muestra que la base muere: Sharpe de −0.17 en 2014-2024 a ×3, y −0.46 en 2007-2013. Es decir, sin el dato del futuro el filtro no rescata la estrategia: la mayor parte de lo que parecía ventaja venía del dato que aún no existía.
> Boceto: barras: «2014-24 a ×3: −0.17» y «2007-13: −0.46» en rojo; sello «MUERE».

**[3:52 — Con tu capital]** (pantalla: tarjeta «Con tu capital» con aviso)
Con 10,000 dólares serían más 19,201 para esta curva, frente a más 4,049 de comprar y esperar. Con 100,000, la tabla de ATLAS da más 192,009 contra más 40,488. Ese número no se puede replicar en real: usa el cierre del mismo día, y además opera a ×4.
> Boceto: tarjeta de capital con aviso ámbar «No replicable en real» y las dos cifras; la cifra de la estrategia con sello «NO EJECUTABLE»; selector $10,000 / $100,000.

**[4:12 — La lección]** (pantalla: texto)
Un filtro que decide con el cierre del mismo día en que opera no se puede ejecutar. Cualquier señal macro debe usarse con al menos un día de rezago. Antes de emocionarte con un número, pregunta qué dato necesitaba la estrategia para decidir, y si lo tenía a esa hora. Es una pregunta sencilla y sirve para cualquier backtest.
> Boceto: checklist de `filters`: ventana de apalancamiento «misma muestra» ámbar; rezago ✗ rojo; costos «no aplicado»; pregunta final «¿Qué dato necesitaba y cuándo lo tenía?».

**[4:37 — Conclusión y cierre]**
Veredicto: no sirvió. El +190% con Sharpe 1.38 depende de usar el VIX y el crédito del cierre del mismo día. En el siguiente experimento valido este filtro en varias crisis, para ver si el patrón se repite. Todos los datos en atlas-lab-one.vercel.app, experimento 15. Contenido educativo, no es asesoría financiera. El trading no se promete: se prueba.
> Boceto: sello ✕ rojo sobre «1.38»; frase de marca, logo y URL.

---

## SHORT (9:16, ≈ 48 s)
Fórmula visual: b-roll vertical + overlay oscuro 0.6, Ken Burns alternando in/out, subtítulos karaoke en MAYÚSCULAS con las cifras en rojo, whoosh + flash en cada corte, golpe de bass + sacudida solo en el 0-3 s; ticker arriba.

**[0-3 s]** «Sharpe 1.38 y +190%. Y no se puede operar.»
> Boceto: texto gigante «+190% · SHARPE 1.38» y sello «NO EJECUTABLE» desde el primer fotograma; tarjetas verdes que entran y un sello rojo que las cruza con sacudida; b-roll de pantallas de bolsa, Ken Burns «in».
**[3-12 s]** «Es un bot con un filtro que lo saca del mercado si el VIX, el índice del miedo, supera 28, sube 50% en 5 días o el crédito se debilita.»
> Boceto: tres semáforos que se ponen en rojo; Ken Burns «out»; karaoke con «FUERA DEL MERCADO» en rojo.
**[12-24 s]** «Cesta de 15 mercados, apalancamiento ×4, de 2019 a 2024. En papel: +190.4%, Sharpe de 1.38, caída máxima de −13.4%, 878 días fuera del mercado, y sobrevivió al COVID.»
> Boceto: curva real subiendo con zonas grises de «fuera del mercado»; contador de 878; whoosh y flash blanco.
**[24-36 s]** «Pero cada día decide con el cierre de ese mismo día, un dato que un bot real no tiene antes de operar. Con la señal de un día antes, a ×4 la cuenta revienta.»
> Boceto: reloj con la flecha imposible; cuenta reventada en rojo; Ken Burns «in».
**[36-48 s]** «A ×2 y ×3, el Sharpe cae de 1.38 a 0.25: 1.38 con el dato de hoy, 0.25 con el de ayer. El video completo está en el canal. No es asesoría financiera.»
> Boceto: dos barras 1.38 → 0.25; vuelve «Sharpe 1.38» con ✕ (loop con el gancho); texto «Video completo en el canal» y logo.

## Descripción (YouTube)
Bot de paridad de riesgo (solo compras, 15 instrumentos, ×4, 2019-2024) con un filtro macro: fuera del mercado si el VIX supera 28, sube 50% en 5 días o el crédito (HYG/LQD) cae bajo su media de 60 días. Con el cierre del mismo día: +190.4%, Sharpe 1.38. Con la señal de un día antes, que es la ejecutable: a ×4 la cuenta revienta y a ×2/×3 el Sharpe cae a 0.25.
Todos los datos: https://atlas-lab-one.vercel.app (experimento #15)
Contenido educativo. No es asesoría financiera ni recomendación de inversión.

Capítulos: 0:00 Gancho · 0:28 La idea · 1:15 Cómo se probó · 1:54 Resultado en papel · 2:23 El problema · 2:57 La versión ejecutable · 3:28 Y la base sin filtro · 3:52 Con tu capital · 4:12 La lección · 4:37 Conclusión y cierre

Etiquetas: VIX, filtro de régimen, HYG LQD, crédito, bot de trading, backtest, look-ahead bias, información del mismo día, COVID 2020, gestión de riesgo, ATLAS Lab, trading con datos

## Rúbrica (autoevaluación, 1–5)
| Criterio | Short | Largo |
|---|---|---|
| hook_0_3s | 4 | 4 |
| ritmo | 4 | 4 |
| promesa_cumplida | 5 | 5 |
| potencial_loop | 5 | 4 |
| claridad_no_traders | 3 | 3 |
| honestidad_atlas | 5 | 5 |
| audio | 4 | 3 |
| cta | 4 | 4 |
| **Promedio** | **4.25** | **4.00** |

Notas: la honestidad exige que «NO EJECUTABLE» aparezca en pantalla desde el segundo 0 del Short; el hook es una cifra atractiva y se desactiva a sí mismo en 3 s. El Short cumple hook ≥ 4 y honestidad 5.

## Otros temas de este experimento

- Tema 1 — `exp-015-bot-filtro-macro-vix.md` — Bot + filtro de régimen macro (este archivo).
- Tema 2 — `exp-015-t2-prueba-del-dia-de-retraso.md` — Un día de retraso: la prueba que desinfla un backtest
- Tema 3 — `exp-015-t3-vix-y-credito-termometros.md` — VIX y crédito: los dos termómetros del miedo detrás del filtro
- Tema 4 — `exp-015-t4-elegir-el-mejor-de-tres.md` — Elegir el mejor de tres: el apalancamiento escogido en la misma muestra

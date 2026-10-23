# Experimento #20 — Tendencia largo-corto con filtro · Tema 3: El día 2,529: más de ocho años vivo y un solo día de −5.2%

Tema 3 de 3 del experimento #20. Tema 1: `exp-020-largo-corto-bot.md`.
Qué aporta frente a los otros temas: Se centra en la muerte de la cuenta (4-nov-2022): cómo un solo día cierra una cuenta que llevaba más de ocho años y por qué ganarle a comprar y esperar en el papel no basta. El tema 1 cuenta la historia completa y el tema 2 explica el momentum y los cortos.
Estado del guion: **BORRADOR — pendiente de aprobación**
Estado del experimento: **murió** (veredicto del sitio: «No sirvió»; la cuenta se cortó el 4-nov-2022)
Serie: G (Construyendo un bot, y por qué murió)
Datos usados: `experiments.json` (v=20: description, params, metrics, kpis, analysis, verdict, notes, capital, period), `exp_details.json` (algo, code, filters), `series/20260609_210757_trend-long-short-filtrado-v20.json` (curva de la estrategia hasta el corte y curva «Sin estrategia») y la tabla «Con tu capital» de docs/youtube (fila 20). Las cifras con 10,000 dólares son las de la tabla de 100,000 divididas entre 10. El máximo de la curva (+47.0%, 21-sep-2022) y las fechas de inicio (5-oct-2014) y fin se leen de la curva 1 de la serie. Se citan #14 y #18 solo por haberse cerrado también por la pérdida diaria.

## Títulos (3 opciones)
1. 2,529 días vivo y un solo día de −5.2% lo cerró: la cuenta de mi bot largo-corto
2. Ganó a comprar y esperar (+39.3% contra +23.5%) y aun así murió
3. El límite diario de una prop firm: 5% en una sola jornada

## Miniatura
Fondo negro de la marca. Una curva larga que sube y, al final, una barra roja vertical «−5.2%» que la corta; contador «2,529 DÍAS». Texto grande: «UN SOLO DÍA». Logo ATLAS esquina inferior derecha.

---

## VIDEO LARGO (16:9, ≈ 4:15 min — 4–6 min: tema de una sola idea y pocas cifras)
Ritmo visual: algo cambia en pantalla cada 2-3 s; b-roll real detrás, Ken Burns alterno, subtítulos karaoke, whoosh + flash en cada corte, golpe de bass solo en el momento clave.

**[0:00 — Gancho]** (pantalla: curva larga cortada por una barra roja)
Mi bot largo-corto llevaba 2,529 días vivo, iba ganando +39.3% y le iba mejor que a comprar y esperar. Un solo día, el 4 de noviembre de 2022, perdió 5.2% y la cuenta se cerró.
> Boceto: la curva real (series, curva 1) dibujándose durante años y, al final, una barra roja «−5.2%» la corta con X y sacudida; contador de días hasta 2,529; b-roll de bolsa, Ken Burns «in».

**[0:15 — El experimento]** (pantalla: rótulo con el número y el nombre del experimento)
Este es el experimento #20 de ATLAS Lab: Tendencia largo-corto con filtro. Todos los resultados están en la página del experimento.
> Boceto: rótulo animado «EXPERIMENTO #20» con el nombre «Tendencia largo-corto con filtro» debajo y el logo ATLAS; whoosh de entrada y fondo de velas con opacidad 0.12.

**[0:23 — El bot y sus reglas]** (pantalla: cesta de 15 mercados y límites)
Es un bot de 15 mercados que compra lo que sube y vende en corto lo que baja, según el momentum de 120 días, con filtro de pánico y apalancamiento ×3, bajo reglas de cuenta fondeada: caída máxima de 10% sobre el saldo inicial y pérdida máxima de 5% en un solo día.
> Boceto: cesta de 15 símbolos con flechas verdes y rojas; dos muros rojos «−10% total» y «−5% / día»; chip «×3».

**[0:45 — Una cuenta de más de ocho años]** (pantalla: línea de tiempo 2014-2022)
La cuenta empezó en octubre de 2014 y duró 2,529 días de operación, más de ocho años, hasta noviembre de 2022. La curva llegó a su máximo el 21 de septiembre de 2022, con +47.0% sobre el capital inicial. Seis semanas después, la cuenta estaba cerrada.
> Boceto: línea de tiempo con tres marcas: «oct-2014: inicio», «21-sep-2022: máximo +47.0%» y «4-nov-2022: cierre»; la curva real con la raya roja.

**[1:04 — Las dos reglas de pérdida]** (pantalla: dos límites distintos)
Las firmas de fondeo ponen normalmente dos límites: una pérdida total máxima y una pérdida máxima en un solo día. Son reglas distintas. Puedes ir ganando mucho en total y cruzar la del día. Aquí, el límite diario es del 5%, y el 4 de noviembre el bot perdió 5.2% en una sola jornada.
> Boceto: dos medidores: «pérdida total: bien (+39.3%)» en verde y «pérdida del día: −5.2% (límite −5%)» en rojo, cruzando su línea; sello «CUENTA CERRADA».

**[1:26 — Qué pasó ese día]** (pantalla: aviso de honestidad)
El experimento no detalla qué hizo cada mercado ese día; lo que dice es que la pérdida de esa jornada superó el límite. Con ×3, un día adverso en varios mercados se triplica en la cuenta. Es lo único que se puede afirmar, y por eso no voy a inventar una explicación.
> Boceto: tarjeta ámbar «el experimento no detalla el día» y la cifra «−5.2%»; chip «×3» triplicando una barra.

**[1:47 — Ganar en el papel no basta]** (pantalla: tres curvas)
Mira las tres curvas en las mismas fechas. Comprar y esperar la cesta daría +23.5%. La del bot largo-corto terminó en +39.3%, más. Pero la cuenta no sigue: se cerró. Superar a comprar y esperar en el papel no sirve si en el camino cruzas un límite.
> Boceto: tres curvas: gris «comprar y esperar +23.5%», roja «largo-corto +39.3%» cortada con X y, aparte, verde «solo largo»; flecha «ya estás fuera».

**[2:07 — Contra la versión solo en largo]** (pantalla: comparación justa)
Y la versión que solo compra, en las mismas fechas, con el mismo filtro y el mismo ×3, ganó +199% con un Sharpe de 1.31. La única diferencia son los cortos. Los cortos no solo restaron retorno: añadieron el día que cerró la cuenta.
> Boceto: dos barras: «solo largo: +199%, Sharpe 1.31» alta y verde, «largo-corto: +39.3%, Sharpe 0.38» baja y roja; fila gris con los parámetros iguales.

**[2:25 — No es la primera vez]** (pantalla: tres cuentas cerradas por pérdida diaria)
No es la primera vez en esta serie de experimentos. En el experimento 14, la cuenta se cerró por la regla de pérdida diaria el 12 de marzo de 2020. En el 18, el 31 de octubre de 2014, con −5.1% en un día. Con reglas de cuenta, lo que decide es el peor día, no el día típico.
> Boceto: tres calendarios con sus fechas y la barra de pérdida diaria cruzando −5%: #14, #18 y #20; texto «el peor día manda».

**[2:49 — Qué haría falta]** (pantalla: tres candados)
Aun si los cortos hubieran funcionado, faltarían tres cosas: decidir con la señal de ayer, descontar costos y probar con datos que el bot no haya visto. Aquí ninguna de las tres está resuelta, y el filtro usa el cierre del mismo día.
> Boceto: tres candados cerrados en rojo («señal de ayer», «costos», «fuera de muestra»).

**[3:07 — Con tu capital]** (pantalla: tarjeta «Con tu capital» con aviso)
Con 10,000 dólares, la curva termina en más 3,929; con 100,000, en más 39,293. Comprar y esperar daría más 2,351 y más 23,511. La curva termina el 4 de noviembre de 2022 porque la cuenta se cierra ese día, y además usa el cierre del mismo día y ×3.
> Boceto: tarjeta de capital con aviso ámbar «la cuenta se corta el 4-nov-2022»; selector $10,000 / $100,000.

**[3:27 — Conclusión]** (pantalla: texto grande)
Veredicto: no sirvió. Sharpe de 0.38 contra 1.23, caída máxima de −18.5% y una cuenta que murió en el día 2,529. En un reto o en una cuenta fondeada, no basta con ganar: hay que sobrevivir a cada día.
> Boceto: sello ✕ rojo sobre la barra de −5.2%; la frase «sobrevivir a cada día» en blanco.

**[3:43 — Ficha del experimento #20]** (pantalla: tarjeta en pantalla con la ficha y la URL)
Ficha del experimento 20. Estado: murió (cuenta cortada el 4 de noviembre de 2022). Cifra clave: Sharpe 0.38 (solo largo: 1.23), +39.3%, caída máxima −18.5% y 56% de años positivos. Filtro que decidió: superar el Sharpe de 1.23 falla, y sobrevivir a la prop firm también (pérdida diaria de −5.2%). Lección: en una cesta con tendencia alcista de largo plazo, los cortos restan. Revísalo completo en atlas-lab-one.vercel.app/e/20. Contenido educativo, no es asesoría financiera. El trading no se promete: se prueba.
> Boceto: tarjeta con las líneas de la ficha apareciendo una a una (estado, cifra clave, filtro que decidió, lección) y, al pie, la URL «atlas-lab-one.vercel.app/e/20» resaltada; sello del estado del experimento; frase de marca, logo y URL.

---

## SHORT (9:16, ≈ 43 s)
Fórmula visual: b-roll vertical + overlay oscuro 0.6, Ken Burns alternando in/out, subtítulos karaoke en MAYÚSCULAS con las cifras en rojo, whoosh + flash en cada corte, golpe de bass + sacudida solo en el 0-3 s; ticker arriba.

**[0-3 s]** «2,529 días vivo. Un solo día de −5.2% lo cerró.»
> Boceto: texto gigante «2,529 DÍAS» y una barra roja «−5.2%» que corta la curva con sacudida; b-roll de bolsa, Ken Burns «in».
**[3-8 s]** «Mi bot largo-corto ganaba +39.3%, más que comprar y esperar, que daba +23.5%.»
> Boceto: dos curvas, roja y gris, con las cifras; Ken Burns «out»; karaoke con «+39.3%» en rojo.
**[8-16 s]** «Pero una prop firm tiene un límite diario: perder más de 5% en una sola jornada cierra la cuenta.»
> Boceto: muro rojo «−5% / día»; whoosh y flash blanco.
**[16-22 s]** «El 4 de noviembre de 2022 perdió 5.2% con apalancamiento ×3, y la cuenta se cerró.»
> Boceto: barra «−5.2%» que cruza el muro; X roja sobre la curva; golpe de bass.
**[22-29 s]** «La cuenta llevaba más de ocho años. El límite diario no mira el historial: mira el peor día.»
> Boceto: calendario de ocho años que se comprime en un solo cuadro rojo; texto «el peor día manda».
**[29-34 s]** «Solo comprando, en las mismas fechas, ganó +199% con Sharpe 1.31.»
> Boceto: curva verde que sigue subiendo mientras la roja se queda cortada; Ken Burns «in».
**[34-40 s]** «El video completo está en el canal. Experimento #20 completo en el enlace. No es asesoría financiera.»
> Boceto: texto «Video completo en el canal» y «Experimento #20 en el enlace» con el logo ATLAS.
**[40-43 s]** «2,529 días, y mandó un solo día.»
> Boceto: vuelve el contador «2,529 DÍAS» con la barra roja (loop con el gancho); corte directo al inicio.

## Descripción (YouTube) — video largo
https://atlas-lab-one.vercel.app/e/20?utm_source=youtube&utm_medium=video&utm_campaign=exp020-t3
Ficha del experimento #20 (Tendencia largo-corto con filtro): estado murió (cuenta cortada el 4-nov-2022). Sharpe 0.38 contra 1.23 de la versión solo en largo, +39.3% y caída máxima −18.5%.
La cuenta de un bot largo-corto (15 mercados, filtro de pánico, ×3) llevaba 2,529 días y +39.3% cuando perdió 5.2% en un solo día (4-nov-2022): el límite diario de la prop firm es 5% y la cuenta se cerró. En las mismas fechas, comprar y esperar daba +23.5% y la versión solo en largo, +199% con Sharpe 1.31.
Sharpe 0.38, caída máxima −18.5%, 56% de años positivos.
Contenido educativo. No es asesoría financiera ni recomendación de inversión.

## Descripción (YouTube) — Short
https://atlas-lab-one.vercel.app/e/20?utm_source=youtube&utm_medium=short&utm_campaign=exp020-t3
Ficha del experimento #20 (Tendencia largo-corto con filtro): estado murió (cuenta cortada el 4-nov-2022). Sharpe 0.38 contra 1.23 de la versión solo en largo, +39.3% y caída máxima −18.5%.
Una cuenta de 2,529 días y +39.3% se cerró por un solo día de −5.2% (límite diario: 5%).
Video completo en el canal. Experimento #20 completo en el enlace. Contenido educativo, no es asesoría financiera.

Capítulos: 0:00 Gancho · 0:15 El experimento · 0:23 El bot y sus reglas · 0:45 Una cuenta de más de ocho años · 1:04 Las dos reglas de pérdida · 1:26 Qué pasó ese día · 1:47 Ganar en el papel no basta · 2:07 Contra la versión solo en largo · 2:25 No es la primera vez · 2:49 Qué haría falta · 3:07 Con tu capital · 3:27 Conclusión · 3:43 Ficha del experimento #20

Etiquetas: límite diario, prop firm, cuenta fondeada, largo y corto, bot de trading, gestión de riesgo, drawdown, apalancamiento, comprar y esperar, ATLAS Lab, trading con datos, backtest

## Rúbrica (autoevaluación, 1–5)
| Criterio | Short | Largo |
|---|---|---|
| hook_0_3s | 4 | 4 |
| ritmo | 4 | 4 |
| promesa_cumplida | 5 | 5 |
| potencial_loop | 5 | 4 |
| claridad_no_traders | 4 | 5 |
| honestidad_atlas | 5 | 5 |
| audio | 4 | 3 |
| cta | 4 | 4 |
| **Promedio** | **4.38** | **4.25** |

Notas: el gancho une una duración larga (2,529 días) con un solo día adverso; la honestidad es 5 porque se dice que el experimento no detalla qué pasó ese día y que el número final supera a comprar y esperar. El Short cumple hook ≥ 4.

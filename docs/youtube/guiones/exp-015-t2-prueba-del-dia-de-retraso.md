# Experimento #15 — Bot + filtro de régimen macro · Tema 2: Un día de retraso: la prueba que desinfla un backtest

Tema 2 de 4 del experimento #15. Tema 1: `exp-015-bot-filtro-macro-vix.md`.
Qué aporta frente a los otros temas: Enseña el método: cómo comprobar si la señal de una estrategia se puede ejecutar (retrasarla un día) y qué cambia en los números. El tema 1 cuenta el filtro y su resultado, el tema 3 explica el VIX y el crédito, y el tema 4 la elección del apalancamiento.
Estado del guion: **BORRADOR — pendiente de aprobación**
Estado del experimento: **murió**
Serie: G (Construyendo un bot, y por qué murió)
Datos usados: `experiments.json` (v=15: description, params, metrics, kpis, analysis, verdict, notes, capital, period), `exp_details.json` (algo, code, filters), `series/20260608_160139_bot-filtro-macro-regimen-v15.json` (curva 1 = bot con el filtro del mismo día, curva 2 = comprar y esperar) y la tabla «Con tu capital» de docs/youtube (fila 15). Las cifras con 10,000 dólares son las de la tabla de 100,000 divididas entre 10. Las cifras del #27 (Sharpe −0.17 y −0.46) se citan tal como figuran en los campos de este experimento.

## Títulos (3 opciones)
1. Retrasé la señal un solo día: el Sharpe pasó de 1.38 a 0.25
2. La prueba del día de retraso: cómo saber si un backtest se puede ejecutar de verdad
3. Look-ahead bias explicado: la estrategia que ve el futuro sin que lo notes

## Miniatura
Fondo negro de la marca. Un reloj partido en dos mitades, «HOY» y «AYER». Texto grande: «1.38 → 0.25» (verde que se vuelve rojo) y debajo «1 DÍA» en blanco. Logo ATLAS esquina inferior derecha.

---

## VIDEO LARGO (16:9, ≈ 4:57 min — 4–6 min: tema de una sola idea y pocas cifras)
Ritmo visual: algo cambia en pantalla cada 2-3 s; b-roll real detrás, Ken Burns alterno, subtítulos karaoke, whoosh + flash en cada corte, golpe de bass solo en el momento clave.

**[0:00 — Gancho]** (pantalla: «1.38 → 0.25» sobre un reloj)
Retrasé la señal de mi bot un solo día. El Sharpe pasó de 1.38 a 0.25, y a ×4 la cuenta reventó. Esta es la prueba más barata para saber si un backtest se puede ejecutar de verdad.
> Boceto: reloj con una aguja que retrocede un día; la cifra «1.38» verde cae a «0.25» en rojo con sacudida; b-roll de pantallas de bolsa, Ken Burns «in».

**[0:16 — El experimento]** (pantalla: rótulo con el número y el nombre del experimento)
Este es el experimento #15 de ATLAS Lab: Bot + filtro de régimen macro. Todos los resultados están en la página del experimento.
> Boceto: rótulo animado «EXPERIMENTO #15» con el nombre «Bot + filtro de régimen macro» debajo y el logo ATLAS; whoosh de entrada y fondo de velas con opacidad 0.12.

**[0:25 — Un backtest espectacular sobre el papel]** (pantalla: tarjetas KPI y curva)
Primero, el contexto. Un bot con un filtro de pánico daba +190.4%, un Sharpe de 1.38 y una caída máxima de solo −13.4%, sobre 15 mercados, a ×4, de 2019 a 2024. Sobrevivía incluso al COVID. Un resultado así invita a creerlo. Antes hay que hacerle una pregunta.
> Boceto: tres tarjetas verdes (+190.4% · 1.38 · −13.4%) con tick; la curva real (series, curva 1) subiendo en diagonal.

**[0:45 — ¿A qué hora se conoce cada dato?]** (pantalla: línea de tiempo de un día)
La pregunta es: ¿a qué hora se conoce cada dato que usa la estrategia? Un bot real decide cuando el mercado cierra, con el cierre de ese día, y opera al día siguiente. Si la prueba usa el cierre de hoy para cobrar el retorno de hoy, está usando una información que, a la hora de decidir, todavía no existía.
> Boceto: línea de tiempo de 24 horas con «cierre de hoy» a la derecha y «decisión del bot» a la izquierda; flecha roja imposible hacia atrás.

**[1:10 — Se llama look-ahead]** (pantalla: definición en pantalla)
Eso se llama sesgo de mirar el futuro, o look-ahead bias. Es de los sesgos más comunes y más difíciles de ver en un backtest, porque la curva sale preciosa y el código parece correcto. No hay una línea que diga «hago trampa»: basta un índice, t en lugar de t menos uno.
> Boceto: dos líneas de código: «ro.iloc[t]» en rojo y «ro.iloc[t−1]» en verde, con la diferencia resaltada; texto «un solo índice».

**[1:31 — Dónde está en este bot]** (pantalla: checklist del código)
En este bot, la señal de pánico de cada día se calcula con el VIX y el crédito del cierre de ese mismo día, y con ella se decide si el bot está dentro o fuera del mercado ese mismo día. En el código, la línea que decide usa la posición de hoy. La línea que calcula los pesos, en cambio, corta los datos en ayer.
> Boceto: checklist de filters: «pesos con datos hasta ayer ✓» en verde y «señal con el cierre de hoy ✗» en rojo; costos «no aplicado» en gris.

**[1:58 — La prueba]** (pantalla: dos relojes: hoy contra ayer)
La prueba es muy simple: retrasar la señal un día. Se decide con el cierre de ayer y se cobra el retorno de hoy. Es lo que haría un bot real. No cambia nada más: ni los mercados, ni el periodo, ni las reglas. Si el resultado sobrevive, la ventaja era de verdad. Si se desinfla, no lo era.
> Boceto: dos relojes: «cierra hoy → decide → cobra HOY» tachado en rojo y «cierra hoy → decide → cobra MAÑANA» en verde.

**[2:22 — Qué pasó con los números]** (pantalla: dos barras de Sharpe)
Con la señal de un día antes: a ×4 la cuenta revienta por la pérdida diaria. A ×2 y ×3, el Sharpe cae de 1.38 a 0.25. Con el dato de hoy, 1.38; con el dato de ayer, 0.25. Esa diferencia es lo que valía una información que todavía no existe.
> Boceto: dos barras «dato de hoy: 1.38» (verde, alta) y «dato de ayer: 0.25» (ámbar, baja); aparte, «×4 → cuenta reventada» en rojo.

**[2:43 — Por qué ayuda tanto el dato de hoy]** (pantalla: un día de caída)
¿Por qué ayuda tanto el dato del mismo día? Una explicación natural, que el experimento no mide: el VIX sube justo los días en que el mercado cae. Si el filtro ve el cierre de ese día, ya sabe que fue un mal día y se queda fuera. Esquiva las caídas porque las conoce de antemano. Con la señal de ayer, esa ventaja desaparece.
> Boceto: una vela roja grande y el VIX subiendo el mismo día; el filtro se apaga «antes» de la caída (flecha imposible); etiqueta ámbar «explicación, no medición».

**[3:09 — Y en otras bases]** (pantalla: barras negativas)
No es solo esta configuración. En el experimento 27, con las señales de ayer, la base de 2014 a 2024 a ×3 da un Sharpe de −0.17, y la de 2007 a 2013, de −0.46. Sin el dato del futuro, el filtro no rescata la estrategia.
> Boceto: dos barras rojas hacia abajo «2014-24 a ×3: −0.17» y «2007-13: −0.46»; sello «MUERE».

**[3:28 — Cómo aplicarlo a cualquier backtest]** (pantalla: tres preguntas)
Puedes aplicar esta prueba a cualquier backtest que veas. Pregunta qué datos usa, a qué hora se conocen y si el código los desplaza un día. Si no te lo pueden decir, la curva no vale mucho. Y si te lo dicen, pide el resultado con un día de retraso.
> Boceto: tres tarjetas numeradas que entran con tick: «¿qué datos?», «¿a qué hora se conocen?», «¿y con un día de retraso?».

**[3:49 — Con tu capital]** (pantalla: tarjeta «Con tu capital» con aviso)
Con 10,000 dólares, la curva con el dato de hoy daría más 19,201, frente a más 4,049 de comprar y esperar. Con 100,000, más 192,009 contra más 40,488. Esas cifras no se pueden replicar en real: usan el cierre del mismo día, y además operan a ×4.
> Boceto: tarjeta de capital con aviso ámbar «No replicable en real»; la cifra de la estrategia con sello «NO EJECUTABLE»; selector $10,000 / $100,000.

**[4:08 — Conclusión]** (pantalla: texto grande)
Veredicto: no sirvió. El +190.4% con Sharpe 1.38 depende de usar el VIX y el crédito del cierre del mismo día. Un día de retraso es la prueba más barata de un backtest, y la que más rápido separa una ventaja real de una apariencia.
> Boceto: sello ✕ rojo sobre «1.38»; la frase «¿qué dato necesitaba y cuándo lo tenía?» en blanco.

**[4:27 — Ficha del experimento #15]** (pantalla: tarjeta en pantalla con la ficha y la URL)
Ficha del experimento 15. Estado: murió. Cifra clave: +190.4% y Sharpe 1.38 con el cierre del mismo día; 878 días fuera del mercado. Filtro que decidió: la señal rezagada un día falla: a ×4 la cuenta revienta y a ×2/×3 el Sharpe cae a 0.25. Lección: una señal macro debe usarse con al menos un día de rezago. Revísalo completo en atlas-lab-one.vercel.app/e/15. Contenido educativo, no es asesoría financiera. El trading no se promete: se prueba.
> Boceto: tarjeta con las líneas de la ficha apareciendo una a una (estado, cifra clave, filtro que decidió, lección) y, al pie, la URL «atlas-lab-one.vercel.app/e/15» resaltada; sello del estado del experimento; frase de marca, logo y URL.

---

## SHORT (9:16, ≈ 44 s)
Fórmula visual: b-roll vertical + overlay oscuro 0.6, Ken Burns alternando in/out, subtítulos karaoke en MAYÚSCULAS con las cifras en rojo, whoosh + flash en cada corte, golpe de bass + sacudida solo en el 0-3 s; ticker arriba.

**[0-3 s]** «Retrasé la señal un día: Sharpe de 1.38 a 0.25.»
> Boceto: texto gigante «1.38 → 0.25»; el verde se vuelve rojo con sacudida; reloj que retrocede un día; b-roll de bolsa, Ken Burns «in».
**[3-12 s]** «Mi bot tenía un filtro de pánico con el VIX y el crédito: +190.4%, Sharpe de 1.38 y caída máxima de −13.4%.»
> Boceto: tres tarjetas verdes que entran; Ken Burns «out»; karaoke con «+190.4%» en rojo.
**[12-20 s]** «Pero decidía con el cierre de ese mismo día, un dato que un bot real no tiene antes de operar.»
> Boceto: reloj con la flecha roja imposible hacia «cobra HOY»; whoosh y flash blanco.
**[20-28 s]** «Con la señal de un día antes, a ×4 la cuenta revienta, y a ×2 y ×3 el Sharpe cae a 0.25.»
> Boceto: dos barras, 1.38 verde y 0.25 ámbar; «×4 → reventada» en rojo; Ken Burns «in».
**[28-33 s]** «Es la prueba más barata de cualquier backtest: retrasa la señal un día.»
> Boceto: checklist con una sola línea «¿y con un día de retraso?»; tick sonoro.
**[33-40 s]** «El video completo está en el canal. Experimento #15 completo en el enlace. No es asesoría financiera.»
> Boceto: texto «Video completo en el canal» y «Experimento #15 en el enlace» con el logo ATLAS.
**[40-44 s]** «Un día de retraso, y de 1.38 queda 0.25.»
> Boceto: vuelve «1.38 → 0.25» con ✕ (loop con el gancho); corte directo al inicio.

## Descripción (YouTube) — video largo
https://atlas-lab-one.vercel.app/e/15?utm_source=youtube&utm_medium=video&utm_campaign=exp015-t2
Ficha del experimento #15 (Bot + filtro de régimen macro): estado murió. Con el cierre del mismo día: +190.4%, Sharpe 1.38, caída máxima −13.4%. Con la señal de un día antes: Sharpe 0.25 (×2/×3) y a ×4 la cuenta revienta.
Cómo comprobar si un backtest se puede ejecutar: retrasar la señal un día. Un bot con filtro de pánico (VIX y crédito) daba +190.4%, Sharpe 1.38 y caída máxima −13.4% con el cierre del mismo día; con la señal de un día antes, a ×4 la cuenta revienta y a ×2/×3 el Sharpe cae a 0.25.
Con las señales de ayer, la base da Sharpe −0.17 (2014-24, ×3) y −0.46 (2007-13) en el experimento 27.
Contenido educativo. No es asesoría financiera ni recomendación de inversión.

## Descripción (YouTube) — Short
https://atlas-lab-one.vercel.app/e/15?utm_source=youtube&utm_medium=short&utm_campaign=exp015-t2
Ficha del experimento #15 (Bot + filtro de régimen macro): estado murió. Con el cierre del mismo día: +190.4%, Sharpe 1.38, caída máxima −13.4%. Con la señal de un día antes: Sharpe 0.25 (×2/×3) y a ×4 la cuenta revienta.
Retrasé la señal de mi bot un día y el Sharpe pasó de 1.38 a 0.25: la prueba más barata de un backtest.
Video completo en el canal. Experimento #15 completo en el enlace. Contenido educativo, no es asesoría financiera.

Capítulos: 0:00 Gancho · 0:16 El experimento · 0:25 Un backtest espectacular sobre el papel · 0:45 ¿A qué hora se conoce cada dato? · 1:10 Se llama look-ahead · 1:31 Dónde está en este bot · 1:58 La prueba · 2:22 Qué pasó con los números · 2:43 Por qué ayuda tanto el dato de hoy · 3:09 Y en otras bases · 3:28 Cómo aplicarlo a cualquier backtest · 3:49 Con tu capital · 4:08 Conclusión · 4:27 Ficha del experimento #15

Etiquetas: look-ahead bias, sesgo de mirar el futuro, backtest, señal rezagada, VIX, bot de trading, Sharpe ratio, prueba de backtest, cuenta fondeada, ATLAS Lab, trading con datos, trading algorítmico

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

Notas: el gancho es la prueba y su resultado en una frase con dos cifras; la explicación de por qué ayuda el dato del mismo día se rotula como «explicación, no medición». El Short cumple hook ≥ 4 y honestidad 5. Se entiende sin haber visto el tema 1.

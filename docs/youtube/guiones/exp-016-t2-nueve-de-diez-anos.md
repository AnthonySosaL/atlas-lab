# Experimento #16 — Validación del filtro macro en múltiples crisis · Tema 2: 9 de 10 años positivos: el desglose año por año de un bot con filtro de pánico

Tema 2 de 3 del experimento #16. Tema 1: `exp-016-filtro-macro-multicrisis.md`.
Qué aporta frente a los otros temas: Muestra el resultado año por año (2015-2024) frente a comprar y esperar y enseña a leer un «90% de años positivos». El tema 1 es la validación completa del filtro y el tema 3 explica la línea base contra la que se miden las variantes.
Estado del guion: **BORRADOR — pendiente de aprobación**
Estado del experimento: **murió** (veredicto del sitio: «No sirvió»)
Serie: G (Construyendo un bot, y por qué murió)
Datos usados: `experiments.json` (v=16: description, params, metrics, kpis, analysis, verdict, notes, capital, period), `exp_details.json` (algo, code, filters), `series/20260608_160317_validacion-filtro-macro-multi-crisis-v16.json` (curva 1 = estrategia, curva 2 = comprar y esperar) y la tabla «Con tu capital» de docs/youtube (fila 16). Las cifras con 10,000 dólares son las de la tabla de 100,000 divididas entre 10. Los rendimientos por año calendario se calculan a partir de las curvas 1 y 2 de la serie (último valor del año frente al último del año anterior), igual que el desglose que muestra el sitio (años completos 2015-2024).

## Títulos (3 opciones)
1. 9 de 10 años en positivo: el único en rojo fue 2015 (−3.7%)
2. El desglose año por año de mi bot: de +25.3% en 2016 a −3.7% en 2015
3. Cómo leer un «90% de años positivos» (y cuándo comprar y esperar le ganó: 2023)

## Miniatura
Fondo negro de la marca. Diez barras verticales, una por año, nueve verdes y una roja pequeña rotulada «2015». Texto grande: «9 DE 10» (blanco, con «DE 10» en rojo de marca). Logo ATLAS esquina inferior derecha.

---

## VIDEO LARGO (16:9, ≈ 4:02 min — 4–6 min: tema de una sola idea y pocas cifras)
Ritmo visual: algo cambia en pantalla cada 2-3 s; b-roll real detrás, Ken Burns alterno, subtítulos karaoke, whoosh + flash en cada corte, golpe de bass solo en el momento clave.

**[0:00 — Gancho]** (pantalla: diez barras anuales, una roja)
Un bot con filtro de pánico cerró en positivo nueve de diez años, incluidos 2020 y 2022. El único año en rojo fue 2015, con −3.7%. Veamos el desglose año por año y cómo se lee un resultado así.
> Boceto: diez barras que suben una a una con tick; la de 2015 baja en rojo con sacudida; b-roll de pantallas de bolsa, Ken Burns «in».

**[0:16 — El experimento]** (pantalla: rótulo con el número y el nombre del experimento)
Este es el experimento #16 de ATLAS Lab: Validación del filtro macro en múltiples crisis. Todos los resultados están en la página del experimento.
> Boceto: rótulo animado «EXPERIMENTO #16» con el nombre «Validación del filtro macro en múltiples crisis» debajo y el logo ATLAS; whoosh de entrada y fondo de velas con opacidad 0.12.

**[0:26 — El bot, en breve]** (pantalla: cesta de 15 mercados, filtro y reglas)
Es una cesta de 15 mercados con paridad de riesgo y apalancamiento ×3, bajo las reglas de una cuenta fondeada, de 2014 a 2024. Un filtro de pánico lo saca del mercado cuando el VIX, el índice del miedo, supera 28, salta de golpe, o el crédito se debilita. En total estuvo 1,465 días fuera, de 3,204.
> Boceto: cesta de 15 símbolos, chip «×3», semáforo del filtro y la barra de 3,204 días con 1,465 en gris.

**[0:50 — Por qué mirar año por año]** (pantalla: un total que esconde el camino)
Un retorno total de +267.3% esconde cómo se llegó. Un solo año enorme puede cargar con todo. El desglose por años enseña si la ganancia es constante o depende de una racha. El criterio del experimento pedía, además de sobrevivir y tener Sharpe positivo, al menos 70% de años en positivo.
> Boceto: una barra gigante «+267.3%» que se parte en diez barras anuales; línea de umbral «70% de años positivos».

**[1:10 — Los diez años]** (pantalla: barras anuales 2015-2024)
Los diez años completos, de 2015 a 2024. 2015, −3.7%. 2016, +25.3%. 2017, +22.0%. 2018, +6.4%. 2019, +17.0%. 2020, +23.1%. 2021, +24.2%. 2022, +11.9%. 2023, +2.5%. 2024, +15.9%. Nueve verdes y una roja: el 90%.
> Boceto: barras anuales con su cifra, una a una; contador «9 / 10 = 90%»; las cifras se leen de la curva 1 de series.

**[1:25 — El único año en rojo]** (pantalla: 2015 resaltado)
El único año en rojo fue 2015, con −3.7%. Comprar y esperar la misma cesta, ese año, perdió −4.4%. Es uno de los cuatro episodios de estrés que el experimento marca: 2015, 2018, el COVID de 2020 y 2022.
> Boceto: la curva real con 2015 sombreado; dos barras 2015: «bot −3.7%» y «comprar y esperar −4.4%»; las cuatro franjas de estrés al fondo.

**[1:41 — Los cuatro años de estrés]** (pantalla: cuatro pares de barras)
Los cuatro años de estrés, bot contra comprar y esperar. 2015: −3.7% contra −4.4%. 2018: +6.4% contra −6.6%. 2020: +23.1% contra +10.9%. 2022: +11.9% contra −9.0%. En los cuatro, el bot rindió más que comprar y esperar. Con una advertencia: usa ×3 y el cierre del mismo día.
> Boceto: cuatro pares de barras (verde bot, gris comprar y esperar) que entran de dos en dos; aviso ámbar «×3 · cierre del mismo día».

**[2:01 — El año en que comprar y esperar ganó]** (pantalla: 2023)
Hubo un año en que comprar y esperar ganó con claridad: 2023, con +12.4% contra +2.5% del bot. Un filtro que te saca del mercado puede costar cuando el mercado sube sin sobresaltos. No es un defecto: es el precio del filtro.
> Boceto: barras de 2023: «comprar y esperar +12.4%» alta y «bot +2.5%» baja; la zona gris de días fuera del mercado sobre la curva.

**[2:18 — Cómo leer un 9 de 10]** (pantalla: tres cuidados)
Nueve de diez suena a consistencia, pero hay que leerlo con tres cuidados. Un año positivo puede ser pequeño: 2023 fue +2.5%. Son años de calendario, no ventanas de estrés. Y todo está medido con el cierre del mismo día y con ×3.
> Boceto: tres tarjetas ámbar: «positivo ≠ grande», «calendario ≠ estrés», «cierre del mismo día + ×3».

**[2:36 — La prueba de fuego]** (pantalla: dos barras de Sharpe)
Y está la prueba que más pesa. Con la señal rezagada un día, la base de este experimento da un Sharpe de −0.17, como se mide en el experimento 27. Los nueve años en verde dependen de información que un bot real no tiene antes de operar.
> Boceto: dos barras: «señal del mismo día: 1.23» (verde) y «señal de ayer: −0.17» (roja); golpe de bass cuando la barra cae bajo cero.

**[2:55 — Con tu capital]** (pantalla: tarjeta «Con tu capital» con aviso)
Con 10,000 dólares, la curva termina en más 26,727; con 100,000, en más 267,267. Comprando y esperando serían más 5,904 y más 59,039. Esa diferencia no se puede cobrar: depende de la información del mismo día y de apalancamiento ×3.
> Boceto: tarjeta de capital con aviso ámbar «información del mismo día»; curva verde frente a curva gris; selector $10,000 / $100,000.

**[3:12 — Conclusión]** (pantalla: texto grande)
Veredicto: no sirvió. Nueve años de diez en positivo, con un Sharpe de 1.23 y una caída máxima de −12.5%, pero con una señal que un bot real no puede usar. El desglose por años enseña la forma del resultado, no su validez.
> Boceto: sello ✕ rojo sobre las barras; la barra de 2015 queda en rojo.

**[3:29 — Ficha del experimento #16]** (pantalla: tarjeta en pantalla con la ficha y la URL)
Ficha del experimento 16. Estado: murió (veredicto del sitio: «No sirvió»). Cifra clave: +267.3%, Sharpe 1.23, caída máxima −12.5% y 9 de 10 años positivos (2014-2024). Filtro que decidió: la señal rezagada un día falla; con la señal de ayer la base da Sharpe −0.17 (#27). Lección: que un resultado aguante varias crisis no sirve si usa información que aún no existe al decidir. Revísalo completo en atlas-lab-one.vercel.app/e/16. Contenido educativo, no es asesoría financiera. El trading no se promete: se prueba.
> Boceto: tarjeta con las líneas de la ficha apareciendo una a una (estado, cifra clave, filtro que decidió, lección) y, al pie, la URL «atlas-lab-one.vercel.app/e/16» resaltada; sello del estado del experimento; frase de marca, logo y URL.

---

## SHORT (9:16, ≈ 45 s)
Fórmula visual: b-roll vertical + overlay oscuro 0.6, Ken Burns alternando in/out, subtítulos karaoke en MAYÚSCULAS con las cifras en rojo, whoosh + flash en cada corte, golpe de bass + sacudida solo en el 0-3 s; ticker arriba.

**[0-3 s]** «Nueve de diez años positivos. Falló 2015: −3.7%.»
> Boceto: diez barras anuales: nueve verdes suben con tick y la de 2015 cae en rojo con sacudida; b-roll de bolsa, Ken Burns «in».
**[3-15 s]** «Es un bot con filtro de pánico: sale del mercado si el VIX pasa de 28, salta o el crédito se debilita. Cesta de 15 mercados, ×3, de 2014 a 2024.»
> Boceto: semáforo del filtro y cesta de 15 símbolos; Ken Burns «out»; karaoke con «×3» en rojo.
**[15-24 s]** «En los cuatro años de estrés le ganó a comprar y esperar: +6.4% contra −6.6% en 2018 y +11.9% contra −9.0% en 2022.»
> Boceto: dos pares de barras (verde y gris) que entran con whoosh; flash blanco.
**[24-28 s]** «Pero en 2023, comprar y esperar ganó: +12.4% contra +2.5%.»
> Boceto: barras de 2023 invertidas; Ken Burns «in».
**[28-35 s]** «Y decide con el cierre del mismo día. Con la señal de ayer, el Sharpe es −0.17.»
> Boceto: reloj con flecha roja; barras 1.23 y −0.17.
**[35-42 s]** «El video completo está en el canal. Experimento #16 completo en el enlace. No es asesoría financiera.»
> Boceto: texto «Video completo en el canal» y «Experimento #16 en el enlace» con el logo ATLAS.
**[42-45 s]** «Nueve de diez no es lo mismo que real.»
> Boceto: vuelven las diez barras con ✕ (loop con el gancho); corte directo al inicio.

## Descripción (YouTube) — video largo
https://atlas-lab-one.vercel.app/e/16?utm_source=youtube&utm_medium=video&utm_campaign=exp016-t2
Ficha del experimento #16 (Validación del filtro macro en múltiples crisis): estado murió. +267.3%, Sharpe 1.23, caída máxima −12.5% y 9 de 10 años positivos; con la señal de un día antes, Sharpe −0.17.
Desglose año por año (2015-2024) de un bot con filtro de pánico (VIX y crédito), 15 mercados y ×3: 9 de 10 años positivos, solo 2015 en rojo (−3.7%), +267.3% en 2014-2024, Sharpe 1.23 y caída máxima −12.5%. En 2018 (+6.4% contra −6.6%) y 2022 (+11.9% contra −9.0%) superó a comprar y esperar; en 2023 no (+2.5% contra +12.4%).
Decide con el cierre del mismo día: con la señal de un día antes, la base da Sharpe −0.17 (experimento 27).
Contenido educativo. No es asesoría financiera ni recomendación de inversión.

## Descripción (YouTube) — Short
https://atlas-lab-one.vercel.app/e/16?utm_source=youtube&utm_medium=short&utm_campaign=exp016-t2
Ficha del experimento #16 (Validación del filtro macro en múltiples crisis): estado murió. +267.3%, Sharpe 1.23, caída máxima −12.5% y 9 de 10 años positivos; con la señal de un día antes, Sharpe −0.17.
Nueve de diez años positivos con un bot de filtro de pánico (solo 2015 falló, −3.7%), pero con una señal que un bot real no puede usar.
Video completo en el canal. Experimento #16 completo en el enlace. Contenido educativo, no es asesoría financiera.

Capítulos: 0:00 Gancho · 0:16 El experimento · 0:26 El bot, en breve · 0:50 Por qué mirar año por año · 1:10 Los diez años · 1:25 El único año en rojo · 1:41 Los cuatro años de estrés · 2:01 El año en que comprar y esperar ganó · 2:18 Cómo leer un 9 de 10 · 2:36 La prueba de fuego · 2:55 Con tu capital · 3:12 Conclusión · 3:29 Ficha del experimento #16

Etiquetas: años positivos, backtest, filtro de pánico, VIX, bot de trading, Sharpe ratio, comprar y esperar, resultados por año, prop firm, ATLAS Lab, trading con datos, trading algorítmico

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

Notas: el gancho es una proporción (9 de 10) más el nombre del año que falló; los rendimientos anuales se leen de la curva del experimento y coinciden con el 90% (9/10) del sitio. El Short cumple hook ≥ 4 y honestidad 5 al decir que usa el cierre del mismo día.

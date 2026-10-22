# Experimento #13 — Bot ATLAS: simulación en cuenta fondeada · Tema 2: Paridad de riesgo: cómo reparte el bot su dinero entre 15 mercados

Tema 2 de 3 del experimento #13. Tema 1: `exp-013-bot-cuenta-fondeada.md`.
Qué aporta frente a los otros temas: Explica cómo está construido el bot por dentro (15 mercados, paridad de riesgo, 60 días de volatilidad, datos hasta ayer, ×2) para quien nunca ha visto una cartera cuantitativa. El tema 1 cuenta los 313 días y el tema 3 qué habría pasado sin el corte de la cuenta.
Estado del guion: **BORRADOR — pendiente de aprobación**
Estado del experimento: **murió**
Serie: G (Construyendo un bot, y por qué murió)
Datos usados: `experiments.json` (v=13: description, params, metrics, kpis, analysis, verdict, notes, capital, period), `exp_details.json` (algo, code, filters), `series/20260607_214022_bot-atlas-paper-run-funded-v13.json` (curva 1 = bot, curva 2 = sin reglas de prop firm, curva 3 = comprar y esperar) y la tabla «Con tu capital» de docs/youtube (fila 13). Las cifras con 10,000 dólares son las de la tabla de 100,000 divididas entre 10.

## Títulos (3 opciones)
1. Repartí mi dinero entre 15 mercados con una fórmula de tres líneas: −10.3%
2. Paridad de riesgo explicada: por qué no todos los mercados pesan lo mismo
3. Cómo funciona mi bot por dentro: 15 mercados, 60 días de volatilidad y ×2

## Miniatura
Fondo negro de la marca. Una rejilla de 15 casillas de distinto tamaño (los pesos) con el símbolo de cada mercado. Texto grande: «15 MERCADOS» (blanco) y, abajo, «−10.3%» en rojo de marca. Logo ATLAS esquina inferior derecha.

---

## VIDEO LARGO (16:9, ≈ 4:57 min — 4–6 min: tema de una sola idea y pocas cifras)
Ritmo visual: algo cambia en pantalla cada 2-3 s; b-roll real detrás, Ken Burns alterno, subtítulos karaoke, whoosh + flash en cada corte, golpe de bass solo en el momento clave.

**[0:00 — Gancho]** (pantalla: rejilla de 15 mercados y la cifra «−10.3%»)
Mi bot reparte el dinero entre 15 mercados con una fórmula de tres líneas. Con ella, y con las reglas de una cuenta fondeada, duró 313 días y cerró en −10.3%. Te explico la fórmula.
> Boceto: rejilla de 15 casillas que se llenan con whoosh; contador de días hasta 313 y cifra «−10.3%» en rojo; b-roll de pantallas de bolsa, Ken Burns «in».

**[0:15 — El experimento]** (pantalla: rótulo con el número y el nombre del experimento)
Este es el experimento #13 de ATLAS Lab: Bot ATLAS: simulación en cuenta fondeada. Todos los resultados están en la página del experimento.
> Boceto: rótulo animado «EXPERIMENTO #13» con el nombre «Bot ATLAS: simulación en cuenta fondeada» debajo y el logo ATLAS; whoosh de entrada y fondo de velas con opacidad 0.12.

**[0:24 — Qué hace el bot]** (pantalla: esquema del bot)
Es un bot de solo compras y sin predicciones: no intenta adivinar qué va a subir. Hace una sola cosa, decidir cuánto dinero poner en cada mercado y aplicar un apalancamiento fijo de ×2. Opera día a día sobre un camino histórico real, de 2019 a 2024.
> Boceto: esquema de tres piezas: «15 mercados → pesos por riesgo → ×2»; etiqueta «solo compras» y «camino real 2019-2024».

**[0:44 — Los 15 mercados]** (pantalla: cuatro familias de activos)
La cesta tiene 15 instrumentos en cuatro familias. Siete pares de divisas. Oro y plata. Cuatro índices: el S&P 500, el Nasdaq 100, el DAX y el FTSE 100. Y dos petróleos, el Brent y el WTI. Es una mezcla que busca diversificar entre familias.
> Boceto: cuatro cajas (siete de divisas, dos de metales, cuatro de índices, dos de energía) que se llenan con los 15 símbolos de params.instrumentos; contador hasta 15.

**[1:02 — El problema de repartir a partes iguales]** (pantalla: barras de dinero y de riesgo)
La forma ingenua de repartir es poner lo mismo en cada mercado. El problema es que no todos se mueven igual. Un índice o el petróleo dan saltos grandes cada día; un par de divisas tranquilo se mueve poco. Con partes iguales de dinero, los mercados nerviosos mandan sobre el riesgo de toda la cartera.
> Boceto: dos filas de barras: «dinero por mercado» (todas iguales) y «riesgo por mercado» (muy desiguales, el petróleo y los índices altísimos en rojo).

**[1:25 — La idea de la paridad de riesgo]** (pantalla: balanza)
La paridad de riesgo resuelve eso: que cada mercado aporte un riesgo parecido. Lo tranquilo recibe más dinero y lo nervioso, menos. Es como repartir el volumen en una mesa de mezclas: el instrumento que suena más fuerte se baja y el que casi no se oye se sube, para que ninguno tape a los demás.
> Boceto: mesa de mezclas con 15 deslizadores: los de mercados nerviosos bajan, los tranquilos suben, hasta igualarse; texto «riesgo parecido, no dinero parecido».

**[1:47 — La fórmula, en tres líneas]** (pantalla: tres líneas de código)
En el código son tres líneas. Primera: toma los retornos diarios de los últimos 60 días. Segunda: calcula la desviación estándar de cada mercado, que es su volatilidad, y toma su inverso, uno dividido entre esa cifra. Tercera: divide cada inverso entre la suma de todos, para que los pesos sumen 100%. Eso es toda la fórmula.
> Boceto: tres líneas del snippet de exp_details (rets.tail(60), 1/std, inv/inv.sum()) que se resaltan una a una con tick; a la derecha, las casillas cambian de tamaño.

**[2:11 — Con datos hasta ayer]** (pantalla: línea de tiempo con el corte en t−1)
Un detalle que parece menor y no lo es: los pesos de hoy se calculan con datos hasta ayer. El bot nunca usa el cierre del propio día para decidir cuánto poner. Si lo hiciera, estaría mirando el futuro. En el código, el panel de precios se corta antes de hoy, así que lo que ves en la prueba es lo que un bot real habría podido hacer.
> Boceto: línea de tiempo con una raya vertical en «hoy»; el panel de datos se detiene en «ayer» (verde ✓); checklist de filters: «pesos con datos hasta t−1 ✓», costos «no aplicado» en gris.

**[2:38 — Apalancamiento y reglas de la cuenta]** (pantalla: candado y límites)
Luego multiplica por dos: apalancamiento fijo ×2, es decir, posiciones del doble del capital. Y vive bajo las reglas de una cuenta fondeada: si pierde más de 5% en un día, o si la cuenta cae 10% por debajo del saldo inicial, el bot se apaga, igual que lo haría la empresa que presta la cuenta.
> Boceto: tarjeta params_view (×2 · vol 60 d · drawdown 10% · pérdida diaria 5%); dos muros rojos «−5% / día» y «−10% total»; candado que se cierra.

**[3:01 — El resultado]** (pantalla: tarjetas KPI y curva real)
Sobre el camino real, el bot operó 313 días y se apagó el 12 de marzo de 2020 por el límite de caída. Retorno total: −10.3%. Sharpe: −0.95. Caída máxima desde su punto más alto: −15.3%. Antes del golpe del COVID, la cuenta iba ganando.
> Boceto: kpis en cascada (−10.3% · −0.95 · −15.3% · 313 días · ×2); la curva real (series, curva 1) sube y se corta con una raya roja «12-MAR-2020».

**[3:20 — Lo que la paridad de riesgo no hace]** (pantalla: 15 mercados cayendo juntos)
¿Falló la fórmula? No exactamente. La paridad de riesgo reparte el riesgo entre mercados, pero no los protege cuando caen todos a la vez. En marzo de 2020 el desplome fue sostenido y correlacionado, y con ×2 bastó. Diversificar entre 15 mercados sirve cuando se mueven distinto, no cuando se mueven igual.
> Boceto: las 15 casillas pasan a rojo a la vez; texto «diversificar no es blindar»; Ken Burns «in».

**[3:41 — Con tu capital]** (pantalla: tarjeta «Con tu capital» con aviso)
Con 10,000 dólares serían menos 1,006 para el bot, frente a menos 1,156 de comprar y esperar en las mismas fechas. Con 100,000, menos 10,056 contra menos 11,558. La curva se detiene el 12 de marzo de 2020 porque la cuenta se cierra, y opera con apalancamiento ×2, que amplifica ganancias y pérdidas.
> Boceto: tarjeta de capital con aviso ámbar; curva 1 cortada en rojo y curva 3 gris; selector $10,000 / $100,000.

**[4:03 — Conclusión]** (pantalla: texto grande)
Veredicto: no sirvió. Repartir bien el riesgo entre 15 mercados no evitó que la cuenta a ×2 reventara en el COVID. Entender cómo está hecho un bot es el primer paso para saber por qué falla. Y en otro tema de este experimento verás qué habría pasado si nadie hubiera apagado la cuenta.
> Boceto: sello ✕ rojo sobre la rejilla de 15 casillas; frase final en blanco.

**[4:25 — Ficha del experimento #13]** (pantalla: tarjeta en pantalla con la ficha y la URL)
Ficha del experimento 13. Estado: murió. Cifra clave: retorno −10.3%, Sharpe −0.95, caída máxima −15.3% y 313 días operados. Filtro que decidió: la regla de la cuenta fondeada (caída máxima de 10% sobre el saldo inicial): no sobrevive; el bot se apagó el 12 de marzo de 2020. Lección: antes de arriesgar dinero hay que probar el camino real, no solo simulaciones. Revísalo completo en atlas-lab-one.vercel.app/e/13. Contenido educativo, no es asesoría financiera. El trading no se promete: se prueba.
> Boceto: tarjeta con las líneas de la ficha apareciendo una a una (estado, cifra clave, filtro que decidió, lección) y, al pie, la URL «atlas-lab-one.vercel.app/e/13» resaltada; sello del estado del experimento; frase de marca, logo y URL.

---

## SHORT (9:16, ≈ 46 s)
Fórmula visual: b-roll vertical + overlay oscuro 0.6, Ken Burns alternando in/out, subtítulos karaoke en MAYÚSCULAS con las cifras en rojo, whoosh + flash en cada corte, golpe de bass + sacudida solo en el 0-3 s; ticker arriba.

**[0-3 s]** «15 mercados y una fórmula: aun así, −10.3%.»
> Boceto: texto gigante «15 MERCADOS» con la rejilla llenándose; la cifra «−10.3%» cae en rojo con sacudida; b-roll de bolsa, Ken Burns «in».
**[3-14 s]** «Mi bot reparte el dinero por riesgo, no a partes iguales: más dinero a lo tranquilo y menos a lo nervioso, según la volatilidad de los últimos 60 días.»
> Boceto: mesa de mezclas: deslizadores nerviosos bajan, tranquilos suben; Ken Burns «out»; karaoke con «POR RIESGO» en rojo.
**[14-22 s]** «Son tres líneas de código, con datos hasta ayer, y luego apalancamiento ×2 con las reglas de una cuenta fondeada.»
> Boceto: tres líneas del código que se resaltan; chip «×2» y candado; whoosh y flash blanco.
**[22-31 s]** «Sobre el camino real duró 313 días y se apagó el 12 de marzo de 2020: retorno de −10.3% y Sharpe de −0.95.»
> Boceto: curva real cortada en rojo; dos cifras −10.3% y −0.95; Ken Burns «in».
**[31-36 s]** «Repartir bien no sirve si todos los mercados caen a la vez.»
> Boceto: las 15 casillas pasan a rojo al mismo tiempo; golpe de bass breve.
**[36-43 s]** «El video completo está en el canal. Experimento #13 completo en el enlace. No es asesoría financiera.»
> Boceto: texto «Video completo en el canal» y «Experimento #13 en el enlace» con el logo ATLAS.
**[43-46 s]** «Quince mercados, una fórmula y 313 días.»
> Boceto: vuelve «15 MERCADOS» con el sello ✕ (loop con el gancho); corte directo al inicio.

## Descripción (YouTube) — video largo
https://atlas-lab-one.vercel.app/e/13?utm_source=youtube&utm_medium=video&utm_campaign=exp013-t2
Ficha del experimento #13 (Bot ATLAS: simulación en cuenta fondeada): estado murió. Retorno −10.3%, Sharpe −0.95, caída máxima −15.3%; cuenta cerrada el 12-mar-2020 (día 313).
Cómo está construido el bot de ATLAS: cartera solo de compras con paridad de riesgo sobre 15 instrumentos (divisas, oro y plata, índices y petróleo), pesos inversos a la volatilidad de 60 días calculados con datos hasta ayer, apalancamiento ×2 y reglas de cuenta fondeada.
Sobre el camino real de 2019-2024 duró 313 días: −10.3%, Sharpe −0.95 y cierre el 12-mar-2020.
Contenido educativo. No es asesoría financiera ni recomendación de inversión.

## Descripción (YouTube) — Short
https://atlas-lab-one.vercel.app/e/13?utm_source=youtube&utm_medium=short&utm_campaign=exp013-t2
Ficha del experimento #13 (Bot ATLAS: simulación en cuenta fondeada): estado murió. Retorno −10.3%, Sharpe −0.95, caída máxima −15.3%; cuenta cerrada el 12-mar-2020 (día 313).
Un bot reparte su dinero entre 15 mercados por riesgo, no a partes iguales; duró 313 días y cerró en −10.3%.
Video completo en el canal. Experimento #13 completo en el enlace. Contenido educativo, no es asesoría financiera.

Capítulos: 0:00 Gancho · 0:15 El experimento · 0:24 Qué hace el bot · 0:44 Los 15 mercados · 1:02 El problema de repartir a partes iguales · 1:25 La idea de la paridad de riesgo · 1:47 La fórmula, en tres líneas · 2:11 Con datos hasta ayer · 2:38 Apalancamiento y reglas de la cuenta · 3:01 El resultado · 3:20 Lo que la paridad de riesgo no hace · 3:41 Con tu capital · 4:03 Conclusión · 4:25 Ficha del experimento #13

Etiquetas: paridad de riesgo, risk parity, bot de trading, volatilidad, cuenta fondeada, prop firm, diversificación, apalancamiento, backtest, ATLAS Lab, trading con datos, gestión de riesgo

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

Notas: el gancho une una cifra de construcción (15) con el resultado (−10.3%); la claridad es alta porque la mesa de mezclas explica la paridad de riesgo sin fórmulas. El Short cumple hook ≥ 4 y honestidad 5. Se entiende sin haber visto el tema 1.

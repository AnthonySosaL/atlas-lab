# Experimento #13 — Bot ATLAS: simulación en cuenta fondeada · Tema 3: La curva que no existió: qué habría pasado si nadie apagaba la cuenta

Tema 3 de 3 del experimento #13. Tema 1: `exp-013-bot-cuenta-fondeada.md`.
Qué aporta frente a los otros temas: Usa la línea hipotética «Sin reglas de prop firm» del sitio para explicar el riesgo de ruina: la misma estrategia con y sin corte. El tema 1 cuenta el camino real de 313 días y el tema 2 explica cómo está construido el bot.
Estado del guion: **BORRADOR — pendiente de aprobación**
Estado del experimento: **murió**
Serie: G (Construyendo un bot, y por qué murió)
Datos usados: `experiments.json` (v=13: description, params, metrics, kpis, analysis, verdict, notes, capital, period), `exp_details.json` (algo, code, filters), `series/20260607_214022_bot-atlas-paper-run-funded-v13.json` (curva 1 = bot, curva 2 = sin reglas de prop firm, curva 3 = comprar y esperar) y la tabla «Con tu capital» de docs/youtube (fila 13). Las cifras con 10,000 dólares son las de la tabla de 100,000 divididas entre 10. Las cifras de la línea hipotética (+46.3%, −16.5%, +14.4%) y de la curva «Sin estrategia» (−17.6%, +40.5%) se leen de las curvas 2 y 3 de la serie, medidas desde el inicio de la curva (la misma base de la tarjeta «Con tu capital»).

## Títulos (3 opciones)
1. Mi bot habría terminado en +46.3% si nadie lo apagaba: la curva que no existió
2. La cuenta se cerró 10 días antes del punto más bajo: ruina en una cuenta fondeada
3. Por qué una caída temporal puede ser una pérdida definitiva

## Miniatura
Fondo negro de la marca. Dos curvas que salen del mismo punto: la roja se corta con una X el «12-MAR-2020»; la gris punteada sigue, se hunde y luego sube hasta «+46.3%» con la etiqueta «HIPOTÉTICO». Texto grande: «LA CURVA QUE NO EXISTIÓ» (tres palabras clave en blanco). Logo ATLAS esquina inferior derecha.

---

## VIDEO LARGO (16:9, ≈ 4:20 min — 4–6 min: tema de una sola idea y pocas cifras)
Ritmo visual: algo cambia en pantalla cada 2-3 s; b-roll real detrás, Ken Burns alterno, subtítulos karaoke, whoosh + flash en cada corte, golpe de bass solo en el momento clave.

**[0:00 — Gancho]** (pantalla: dos curvas: la real cortada y la hipotética)
Si nadie hubiera apagado mi bot el 12 de marzo de 2020, su línea hipotética habría terminado en +46.3%. Pero antes habría caído hasta −16.5%. Esta es la curva que no existió.
> Boceto: dos curvas desde el mismo punto; la roja se corta con X y sacudida; la punteada sigue cayendo y luego sube hasta «+46.3%»; b-roll de bolsa, Ken Burns «in».

**[0:13 — El experimento]** (pantalla: rótulo con el número y el nombre del experimento)
Este es el experimento #13 de ATLAS Lab: Bot ATLAS: simulación en cuenta fondeada. Todos los resultados están en la página del experimento.
> Boceto: rótulo animado «EXPERIMENTO #13» con el nombre «Bot ATLAS: simulación en cuenta fondeada» debajo y el logo ATLAS; whoosh de entrada y fondo de velas con opacidad 0.12.

**[0:23 — Qué pasó el 12 de marzo]** (pantalla: curva real con el corte)
Recuerda la historia. Un bot de solo compras sobre 15 mercados, a ×2, con las reglas de una cuenta fondeada. El 12 de marzo de 2020, día 313, la cuenta tocó el límite de caída de 10% sobre el saldo inicial, con un retorno de −10.3%. La empresa cierra la cuenta y la historia termina ahí.
> Boceto: la curva real (series, curva 1) subiendo hasta enero de 2020 y cortándose el 12-mar-2020 con raya roja; kpis −10.3% y 313 días.

**[0:46 — La línea hipotética]** (pantalla: tercera curva punteada)
El sitio dibuja otra línea: «Sin reglas de prop firm». Es la misma estrategia, con los mismos pesos, pero sin el corte, como si pudieras seguir operando. Es hipotética: en la realidad no hay cuenta después del 12 de marzo. Pero sirve para entender qué se perdió y qué no.
> Boceto: aparece la curva 2 punteada gris continuando desde el corte; etiqueta «hipotética: la cuenta real ya no existe»; Ken Burns «out».

**[1:06 — Diez días más de caída]** (pantalla: zoom a marzo de 2020)
Mira lo que hace esa línea. La cuenta se cierra el 12 de marzo, pero la línea sigue bajando diez días más. El 22 de marzo de 2020 toca su punto más bajo: −16.5% respecto al inicio de la curva. Comprar y esperar, en esas mismas fechas, tocó fondo el mismo día, con −17.6%.
> Boceto: zoom a marzo de 2020: marca roja «12-mar: cierre», marca ámbar «22-mar: mínimo −16.5%»; la curva gris de comprar y esperar toca fondo en la misma fecha.

**[1:29 — La recuperación]** (pantalla: la línea hipotética sube)
Y desde ahí, la recuperación. A finales de 2020 la línea hipotética está en +14.4%, y al final de la serie, en +46.3%. Quien hubiera aguantado sin reglas externas, habría visto una caída profunda y luego una subida. Pero la cuenta fondeada no estaba en ese camino: se había cerrado diez días antes del fondo.
> Boceto: la línea punteada sube con marcadores «fin de 2020: +14.4%» y «fin de la serie: +46.3%»; la línea real queda fija en el corte con X roja.

**[1:51 — Dos mundos]** (pantalla: invertir sin reglas contra cuenta fondeada)
Hay dos formas de vivir esa caída. Si inviertes sin reglas externas, una caída de −16.5% duele, pero es temporal: puedes esperar. Si operas una cuenta fondeada, la regla cierra la cuenta al cruzar el límite, y la caída se vuelve pérdida definitiva. Es la diferencia entre caer y quedar fuera del juego. Eso se llama riesgo de ruina.
> Boceto: pantalla dividida: a la izquierda «sin reglas: la caída es un tramo» (curva que se recupera); a la derecha «con reglas: la caída es el final» (curva con X).

**[2:15 — El camino importa, no solo el final]** (pantalla: dos caminos con el mismo final)
Por eso el retorno final no basta. Dos estrategias pueden terminar igual y haber hecho recorridos muy distintos; la que cruza el límite en el camino nunca llega al final. Con reglas de cuenta, lo que decide es el punto más bajo del recorrido, no el de llegada.
> Boceto: dos caminos que terminan en el mismo punto; el que pasa bajo la línea roja «−10%» queda tachado.

**[2:35 — No es una defensa del bot]** (pantalla: avisos ámbar)
Ojo, esto no rescata al bot. El +46.3% es hipotético, con ×2, y el motor del bot no descuenta costos de operación. Y comprar y esperar terminó en +40.5%, cerca. La ventaja sobre comprar y esperar es pequeña, y llega con apalancamiento. La cuenta real murió.
> Boceto: dos barras finales «hipotética +46.3%» y «comprar y esperar +40.5%»; tres avisos ámbar: «hipotético», «×2», «sin costos de operación».

**[2:54 — Qué haría falta]** (pantalla: dos candados)
Para convertir esta curva hipotética en una conclusión faltarían costos de operación y una prueba con datos que el bot no haya visto. Con lo que hay, la lectura es una sola: en una cuenta fondeada, la regla importa tanto como la estrategia.
> Boceto: dos candados cerrados («costos», «datos nuevos») y la frase «la regla importa tanto como la estrategia».

**[3:11 — Con tu capital]** (pantalla: tarjeta «Con tu capital» con aviso)
En la tarjeta del sitio, con 10,000 dólares serían menos 1,006 para el bot en el camino real, frente a menos 1,156 de comprar y esperar en las mismas fechas. Con 100,000, menos 10,056 contra menos 11,558. La línea punteada «Sin reglas de prop firm» sigue hasta 2024 y es hipotética.
> Boceto: tarjeta de capital con aviso ámbar; curva 1 cortada, curva 2 punteada, curva 3 gris; selector $10,000 / $100,000.

**[3:32 — Conclusión]** (pantalla: texto grande)
Veredicto del experimento: no sirvió. La cuenta se cerró el 12 de marzo de 2020, diez días antes del punto más bajo de la línea hipotética. Con reglas de cuenta fondeada, una caída temporal puede ser definitiva.
> Boceto: sello ✕ rojo sobre el corte; la curva punteada continúa tenue.

**[3:48 — Ficha del experimento #13]** (pantalla: tarjeta en pantalla con la ficha y la URL)
Ficha del experimento 13. Estado: murió. Cifra clave: retorno −10.3%, Sharpe −0.95, caída máxima −15.3% y 313 días operados. Filtro que decidió: la regla de la cuenta fondeada (caída máxima de 10% sobre el saldo inicial): no sobrevive; el bot se apagó el 12 de marzo de 2020. Lección: antes de arriesgar dinero hay que probar el camino real, no solo simulaciones. Revísalo completo en atlas-lab-one.vercel.app/e/13. Contenido educativo, no es asesoría financiera. El trading no se promete: se prueba.
> Boceto: tarjeta con las líneas de la ficha apareciendo una a una (estado, cifra clave, filtro que decidió, lección) y, al pie, la URL «atlas-lab-one.vercel.app/e/13» resaltada; sello del estado del experimento; frase de marca, logo y URL.

---

## SHORT (9:16, ≈ 43 s)
Fórmula visual: b-roll vertical + overlay oscuro 0.6, Ken Burns alternando in/out, subtítulos karaoke en MAYÚSCULAS con las cifras en rojo, whoosh + flash en cada corte, golpe de bass + sacudida solo en el 0-3 s; ticker arriba.

**[0-3 s]** «Sin el corte, mi bot habría terminado en +46.3%.»
> Boceto: texto gigante «+46.3%» en gris punteado con etiqueta «HIPOTÉTICO»; la curva real se corta con X y sacudida; b-roll de bolsa, Ken Burns «in».
**[3-12 s]** «Pero la cuenta se cerró el 12 de marzo de 2020, al cruzar el límite de pérdida de 10% sobre el saldo inicial.»
> Boceto: curva real cortada con raya roja «12-MAR-2020»; muro rojo «−10%»; Ken Burns «out»; karaoke con «SE CERRÓ» en rojo.
**[12-18 s]** «La línea hipotética siguió cayendo diez días más, hasta −16.5%, y después se recuperó.»
> Boceto: zoom a marzo de 2020: la punteada toca «−16.5%» el 22 de marzo y sube; whoosh y flash blanco.
**[18-26 s]** «Esa es la diferencia entre invertir sin reglas y operar una cuenta fondeada: una caída temporal se vuelve una pérdida definitiva.»
> Boceto: pantalla dividida: «sin reglas» (se recupera) y «cuenta fondeada» (X roja); Ken Burns «in».
**[26-33 s]** «Y ojo: comprar y esperar terminó en +40.5%. No es una victoria: es hipotético, con ×2 y sin costos.»
> Boceto: dos barras +46.3% y +40.5%; tres avisos ámbar «hipotético», «×2», «sin costos».
**[33-40 s]** «El video completo está en el canal. Experimento #13 completo en el enlace. No es asesoría financiera.»
> Boceto: texto «Video completo en el canal» y «Experimento #13 en el enlace» con el logo ATLAS.
**[40-43 s]** «Esa es la curva que no existió: +46.3%.»
> Boceto: vuelve «+46.3%» punteado (loop con el gancho); corte directo al inicio.

## Descripción (YouTube) — video largo
https://atlas-lab-one.vercel.app/e/13?utm_source=youtube&utm_medium=video&utm_campaign=exp013-t3
Ficha del experimento #13 (Bot ATLAS: simulación en cuenta fondeada): estado murió. Retorno −10.3%, Sharpe −0.95, caída máxima −15.3%; cuenta cerrada el 12-mar-2020 (día 313).
La línea hipotética «Sin reglas de prop firm» del experimento 13: la misma estrategia, sin el corte del 12-mar-2020, habría caído hasta −16.5% el 22 de marzo de 2020 y terminado en +46.3% (comprar y esperar: +40.5%).
La cuenta real se cerró diez días antes del punto más bajo: con reglas de cuenta fondeada, una caída temporal puede ser definitiva.
Contenido educativo. No es asesoría financiera ni recomendación de inversión.

## Descripción (YouTube) — Short
https://atlas-lab-one.vercel.app/e/13?utm_source=youtube&utm_medium=short&utm_campaign=exp013-t3
Ficha del experimento #13 (Bot ATLAS: simulación en cuenta fondeada): estado murió. Retorno −10.3%, Sharpe −0.95, caída máxima −15.3%; cuenta cerrada el 12-mar-2020 (día 313).
Sin el corte del 12 de marzo de 2020, el bot habría terminado en +46.3% (hipotético); con las reglas de la cuenta, murió.
Video completo en el canal. Experimento #13 completo en el enlace. Contenido educativo, no es asesoría financiera.

Capítulos: 0:00 Gancho · 0:13 El experimento · 0:23 Qué pasó el 12 de marzo · 0:46 La línea hipotética · 1:06 Diez días más de caída · 1:29 La recuperación · 1:51 Dos mundos · 2:15 El camino importa, no solo el final · 2:35 No es una defensa del bot · 2:54 Qué haría falta · 3:11 Con tu capital · 3:32 Conclusión · 3:48 Ficha del experimento #13

Etiquetas: riesgo de ruina, cuenta fondeada, prop firm, drawdown, COVID 2020, bot de trading, curva hipotética, camino real, gestión de riesgo, ATLAS Lab, trading con datos, backtest

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

Notas: el gancho promete un contraste (ganar +46.3% hipotético frente a cuenta cerrada) y la honestidad es 5 porque se dice «hipotético» desde el primer segundo y se aclara que comprar y esperar terminó en +40.5%. Las cifras de la línea hipotética se leen de la serie del experimento.

# Experimento #67 — Adelanto-retraso entre activos (petróleo→CAD, oro→AUD) · Tema 3 de 3: lo obvio ya está en el precio

Estado del guion: **BORRADOR — pendiente de aprobación**
Tema 3 de 3 del experimento #67 · Qué aporta frente a los otros temas: es el tema del CONCEPTO de arbitraje y del CON TU CAPITAL. Explica por qué una relación que todo el mundo conoce (petróleo y dólar canadiense) no deja dinero a un día de distancia: −$3,844 con $100,000, contra +$36,726 de comprar y esperar el USD/CAD, con una caída de −25.4%. El tema 1 abre con el panorama de los dos pares; el tema 2 trata del par oro y dólar australiano.
Estado del experimento: **murió** (correlaciones rezagadas casi cero; Sharpe bruto −0.00 y −0.11)
Serie: F, por tema (anomalías entre activos; el plan aún no lista #65–#67)
Datos usados: `experiments.json` (v=67: verdict, analysis, notes, kpis, metrics, params_view, capital) · `exp_details.json` (extra-v67: algo, code.snippet, filters) · `series/extra-v67.json` ([0] petróleo→USD/CAD, bruto; [1] USD/CAD comprar y esperar) · tabla «Con tu capital» (`docs/youtube/*-capital.md`, fila #67; el $10k se calcula con la misma regla de la tarjeta del sitio).

## Títulos
1. La relación que todos conocen no deja dinero: −$3,844 por cada $100,000 (petróleo y dólar canadiense)
2. ¿Por qué lo obvio no funciona? Mercados que ya arbitraron el adelanto a 1 día
3. Petróleo y dólar canadiense: Sharpe −0.00 y una caída de −25.4%

## Miniatura
Fondo `#09090b`. Un barril de petróleo a la izquierda y una hoja de maple a la derecha, unidos por una flecha con un cartel «YA ESTÁ EN EL PRECIO». Abajo, en rojo `#e11d2a`: «−$3,844». Logo ATLAS esquina inferior derecha.

---

## VIDEO LARGO (≈ 4½ min, experimento corto)

**[0:00 — Gancho]** (pantalla: barril, hoja de maple y el contador «−$3,844»)
Con $100,000, operar la relación que todo el mundo conoce, el petróleo y el dólar canadiense, dio −$3,844.
> BOCETO: barril y hoja de maple unidos por una flecha; contador que baja a «−$3,844» en rojo; golpe de bajo y sacudida.

**[0:15 — Este experimento]** (pantalla: rótulo «Experimento #67 · Adelanto-retraso entre activos (petróleo→CAD, oro→AUD)»)
Este es el experimento #67 de ATLAS Lab: adelanto-retraso entre activos. Todos los resultados están en la página del experimento. Hoy me centro en el par petróleo y dólar canadiense y en la pregunta de fondo: ¿por qué lo obvio no deja dinero?
> BOCETO: rótulo con «#67» y el nombre del experimento; logo ATLAS; whoosh suave.

**[0:35 — Qué significa «ya está en el precio»]** (pantalla: fila en un mostrador ante una oferta)
Arbitrar significa aprovechar una diferencia hasta que desaparece. Imagina que una panadería pone una oferta de pan a mitad de precio: la fila se forma en minutos y la oferta se acaba. En los mercados pasa igual: cuando mucha gente ve que el petróleo sube y que el dólar canadiense debería reaccionar, compran o venden de inmediato y el precio se ajusta antes de que llegue el día siguiente. Para cuando tú ves el dato de ayer, la ventaja ya se acabó.
> BOCETO: ilustración rotulada (no es dato real): una oferta cuya fila se forma y la oferta se acaba; texto «arbitraje = la ventaja se borra». Línea de tiempo de 1 día.

**[1:15 — La regla probada]** (pantalla: esquema de la regla)
La regla es simple. El petróleo WTI es el líder y el USD/CAD, el cambio entre el dólar estadounidense y el canadiense, es el seguidor. Se suele decir que la moneda canadiense acompaña al petróleo: si el petróleo sube, el USD/CAD debería bajar, así que uso el signo contrario. Cada día opero el signo del retorno del petróleo de ayer sobre el USD/CAD de hoy. Es bruto, sin costos, de 2012 a 2024.
> BOCETO: esquema «petróleo ayer → signo −1 → USD/CAD hoy»; recuadro `params_view`: rezago 1 día · bruto · 2012–2024.

**[1:55 — Con tu capital]** (pantalla: tarjeta «Con tu capital»; curva roja plana-descendente y gris subiendo)
Con $10,000, operar el petróleo contra el USD/CAD habría perdido $384; comprar y esperar el USD/CAD dio +$3,673. Con $100,000: −$3,844 contra +$36,726. La peor caída desde un máximo fue de −$2,542 con $10,000 y de −$25,415 con $100,000: un −25.4%. Y sin descontar ni un costo: con costos, el resultado sería peor.
> BOCETO: curva `series/extra-v67.json[0]` roja y `[1]` gris; selector $10,000 / $100,000; aviso ámbar «bruto, sin costos».

**[2:40 — Un Sharpe de −0.00 con una pérdida de dinero]** (pantalla: medidor del Sharpe en cero)
El Sharpe de esta regla es −0.00. El Sharpe mide la ganancia por unidad de riesgo, así que −0.00 quiere decir que, por cada unidad de riesgo, la regla no ganó nada. En dinero, ese «nada» se traduce en una pérdida de −$3,844 con $100,000. Y la referencia del laboratorio es 0.13, que es lo que da comprar y esperar en 2014–2020: la regla ni se acerca.
> BOCETO: medidor con la aguja en −0.00 y una línea verde punteada en 0.13; al lado, el contador −$3,844.

**[3:15 — Lo obvio ya está en el precio]** (pantalla: correlación 0.007 en la escala)
La correlación rezagada fue de 0.007, tan cerca de cero que no se distingue del ruido. El análisis lo resume así: los mercados ya arbitraron cualquier adelanto obvio. Cuanto más conocida es una relación, menos probable es que quede algo por cobrar a un día.
> BOCETO: escala de correlación con la aguja pegada al 0 («0.007»); texto «lo obvio ya está en el precio».

**[3:45 — Lo que no se midió]** (pantalla: tres tarjetas)
Tres límites. Solo medí un día de rezago, no varios. Probé dos pares, no más. Y no dice que no haya relación entre el petróleo y el dólar canadiense el mismo día: eso no lo medí. Lo que no hay es un adelanto del que se pueda sacar partido al día siguiente.
> BOCETO: tres tarjetas: «¿varios días de rezago?» → no medido; «¿otros pares?» → no medido; «¿el mismo día?» → no medido.

**[4:10 — Conclusión]** (pantalla: barril y hoja de maple)
Si todos conocen una relación, es raro que sobre dinero a un día de distancia. Aquí, con $100,000, no sobró.
> BOCETO: el barril y la hoja de maple del inicio con el «−$3,844».

**[4:20 — Ficha del experimento #67 y cierre]** (pantalla: tarjeta con la ficha y la URL)
Ficha del experimento #67. Estado: murió. Cifra clave: correlación rezagada de 0.007 entre el petróleo y el USD/CAD, Sharpe bruto de −0.00 y −$3,844 por cada $100,000. Filtro que decidió: el Sharpe bruto por debajo de la referencia de 0.13 y una correlación casi cero. Lección: los mercados ya arbitraron lo obvio a un día. Revísalo completo en atlas-lab-one.vercel.app/e/67. Contenido educativo, no es asesoría financiera. El trading no se promete: se prueba.
> BOCETO: tarjeta en pantalla con las 4 líneas de la ficha (estado rojo «murió») y la URL `atlas-lab-one.vercel.app/e/67` en grande; fundido a la frase de marca.

---

## SHORT (9:16, ≈ 44 s) — "Lo que todos saben"

**[0-3 s]** "Operar la relación que todos conocen, petróleo y dólar canadiense, dio menos 3,844 dólares por cada 100,000."
> BOCETO: B-roll vertical de bombas de petróleo al atardecer, kb=in, overlay 0.6; barril, hoja de maple y «−$3,844» en rojo; golpe de bajo + sacudida. Karaoke con «TODOS» en rojo.

**[3-14 s]** "Se suele decir que el dólar canadiense acompaña al petróleo. Probé si el retorno de ayer del petróleo predice al USD/CAD de hoy, de 2012 a 2024, sin costos."
> BOCETO: esquema «petróleo ayer → USD/CAD hoy» con reloj de 1 día; whoosh. Ken Burns hacia dentro.

**[14-26 s]** "La correlación: 0.007, prácticamente cero. El Sharpe: −0.00. Comprar y esperar el USD/CAD ganó 36,726; la regla perdió 3,844, con una caída máxima de −25.4%."
> BOCETO: aguja pegada al cero; barras roja −$3,844 y gris +$36,726; tick; flash blanco.

**[26-37 s]** "Arbitrar es aprovechar una diferencia hasta que desaparece. Cuando ves el dato de ayer, la ventaja ya se acabó."
> BOCETO: oferta cuya fila se forma y la oferta se acaba; reloj de 1 día.

**[37-44 s]** "Video completo en el canal y experimento 67 completo en el enlace. Lo obvio ya está en el precio."
> BOCETO: vuelve el barril con la hoja de maple y «−$3,844» (loop); rótulo «Experimento #67 completo en el enlace»; texto pequeño «No es asesoría financiera · El trading no se promete: se prueba».

---

## Descripción (YouTube)
https://atlas-lab-one.vercel.app/e/67?utm_source=youtube&utm_medium=video&utm_campaign=exp067-t3
Ficha del experimento #67: murió · petróleo → USD/CAD (2012–2024): correlación rezagada de 0.007 y Sharpe bruto de −0.00 · con $100,000, −$3,844 contra +$36,726 de comprar y esperar · caída máxima de −25.4%.
Por qué una relación que todo el mundo conoce no deja dinero a un día de distancia: el concepto de arbitraje, explicado con una oferta de pan. Cifras brutas, sin costos.
Contenido educativo. No es asesoría financiera ni recomendación de inversión.
Descripción del Short (primera línea): https://atlas-lab-one.vercel.app/e/67?utm_source=youtube&utm_medium=short&utm_campaign=exp067-t3

Capítulos: 0:00 Gancho · 0:15 Este experimento · 0:35 Qué significa «ya está en el precio» · 1:15 La regla probada · 1:55 Con tu capital · 2:40 Un Sharpe de −0.00 con una pérdida de dinero · 3:15 Lo obvio ya está en el precio · 3:45 Lo que no se midió · 4:10 Conclusión · 4:20 Ficha del experimento #67 y cierre

Etiquetas: arbitraje, eficiencia del mercado, lead-lag, petróleo, dólar canadiense, USD/CAD, correlación rezagada, forex, backtest, Sharpe ratio, trading con datos, ATLAS Lab

## Rúbrica (autoevaluación)
| Pieza | hook_0_3s | ritmo | promesa_cumplida | potencial_loop | claridad_no_traders | honestidad_atlas | audio | cta | Promedio |
|---|---|---|---|---|---|---|---|---|---|
| Largo | 4 | 4 | 5 | 4 | 5 | 5 | 4 | 4 | 4.38 |
| Short | 5 | 4 | 5 | 5 | 4 | 5 | 4 | 4 | 4.50 |

Hook ≥ 4 ✓ · honestidad 5 ✓. Punto débil: el ejemplo de la panadería es una ilustración, no un dato; va rotulado así y no se usa para afirmar nada sobre la velocidad real del mercado.

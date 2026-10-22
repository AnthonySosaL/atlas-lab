# Experimento #67 — Adelanto-retraso entre activos (petróleo→CAD, oro→AUD)

Estado del guion: **BORRADOR — pendiente de aprobación**
Estado del experimento: **murió** (correlaciones rezagadas casi cero; Sharpe bruto −0.00 y −0.11)
Serie: F, por tema (anomalías entre activos; el plan aún no lista #65–#67).
Datos usados: `experiments.json` (v=67: verdict, analysis, notes, kpis, metrics, params_view, capital) · `exp_details.json` (extra-v67: algo, code, filters) · `series/extra-v67.json` ([0] petróleo→USD/CAD, bruto; [1] USD/CAD comprar y esperar) · tabla «Con tu capital» (docs/youtube, archivo de capital, fila #67; el $10k se calcula con la misma regla de la tarjeta del sitio).

## Títulos
1. ¿El petróleo mueve al dólar canadiense? Correlación 0.007
2. Petróleo→CAD y oro→AUD: lo probé con datos de 2012 a 2024
3. Adelanto entre activos a 1 día: no hay nada que explotar

## Miniatura
Fondo `#09090b`. A la izquierda un barril de petróleo, a la derecha una hoja de maple; entre ambos una flecha blanca con un «0» rojo `#e11d2a` en el centro. Texto: «CASI CERO». Logo ATLAS esquina inferior derecha.

---

## VIDEO LARGO (≈ 6 min, experimento corto)

**[0:00 — Gancho]** (pantalla: dos líneas, petróleo y USD/CAD; texto «¿ayer predice hoy?»; después el número «0.007» en rojo)
BOCETO: la línea del petróleo sube un día y el reloj avanza; la de USD/CAD se queda plana; cuando llega «0.007» hay golpe de bajo.
> Si el petróleo sube hoy, ¿se mueve mañana el dólar canadiense? Y si el oro sube hoy, ¿se mueve mañana el dólar australiano? Medí esa relación entre 2012 y 2024. Resultado: una correlación de 0.007 y otra de −0.005. Prácticamente cero.

**[0:20 — Presentación]** (pantalla: rótulo «Experimento #67 · Adelanto-retraso entre activos (petróleo→CAD, oro→AUD)»)
BOCETO: rótulo «EXPERIMENTO #67 · Adelanto-retraso entre activos (petróleo→CAD, oro→AUD)» que entra con whoosh sobre el último cuadro del gancho a baja opacidad.
> Este es el experimento #67 de ATLAS Lab: Adelanto-retraso entre activos (petróleo→CAD, oro→AUD). Todos los resultados están en la página del experimento.

**[0:30 — La idea: adelanto-retraso]** (pantalla: dos corredores; uno sale primero y el otro lo sigue un paso después, con un reloj de 1 día)
BOCETO: dos corredores en pista: el líder sale, un reloj de 1 día avanza y el seguidor sale después; texto «líder → seguidor · 1 día».
> Hay una idea muy popular en los mercados: algunos activos se adelantan a otros. Si pudieras ver qué hizo ayer el líder, tendrías una pista de lo que hará hoy el seguidor. A eso se le llama relación de adelanto-retraso, o lead-lag en inglés. Sería una ventaja enorme, porque no necesitarías adivinar nada: solo mirar quién se mueve primero.

**[0:55 — Los dos pares]** (pantalla: dos pares: «petróleo WTI → USD/CAD» y «oro → AUD/USD»; flecha con reloj de 1 día)
BOCETO: cada par con un candado «signo −1» y «signo +1»: si el petróleo sube, USD/CAD debería bajar; si el oro sube, AUD/USD debería subir.
> Probé dos casos. El primero: el petróleo WTI como líder y el USD/CAD, el cambio entre el dólar estadounidense y el canadiense, como seguidor. Se suele decir que la moneda canadiense acompaña al petróleo; por eso, si el petróleo sube, el USD/CAD debería bajar, y uso el signo contrario. El segundo: el oro como líder y el AUD/USD, el dólar australiano frente al estadounidense. Se suele decir que el dólar australiano acompaña al oro, así que aquí uso el mismo signo.

**[1:25 — Cómo lo medí]** (pantalla: escala de correlación de −1 a 1 y checklist de filtros)
BOCETO: escala con −1 «se mueven al revés», 0 «no hay relación», 1 «se mueven igual»; checklist: ✗ Correlación casi cero · ✗ Sharpe por debajo de la referencia 0.13 · ✓ Líder rezagado 1 día · — Costos: no aplicado (bruto) · — Fuera de muestra: no aplicado.
> Hice dos cosas. Primero, la correlación entre el retorno de ayer del líder y el de hoy del seguidor. La correlación va de −1 a 1: 1 significa que se mueven igual, 0 que no hay relación, −1 que se mueven al revés. Segundo, operé el signo del líder de ayer y calculé el Sharpe, que mide cuánto rindes por cada unidad de riesgo. Mi referencia en el laboratorio es 0.13, que es lo que da comprar y esperar en 2014–2020. Todo bruto, sin costos, lo cual favorece a la estrategia, y sin prueba fuera de muestra.

**[2:05 — Resultados]** (pantalla: dos tarjetas con la correlación y el Sharpe de cada par)
BOCETO: la aguja de la correlación apenas se separa del cero (0.007 y −0.005); debajo, el Sharpe −0.00 y −0.11 con la línea de la referencia 0.13 en verde punteado.
| Par | Correlación rezagada 1 día | Sharpe bruto |
|---|---|---|
| Petróleo → CAD | 0.007 | −0.00 |
| Oro → AUD | −0.005 | −0.11 |
> Petróleo con dólar canadiense: correlación de 0.007 y Sharpe de −0.00. Oro con dólar australiano: correlación de −0.005 y Sharpe de −0.11. Ninguno de los dos Sharpe llega siquiera a la referencia de 0.13. Fíjate en cuán cerca del cero están las dos correlaciones: si el dato de ayer del líder contuviera información útil sobre hoy, esas cifras se alejarían del cero. No lo hacen.

**[2:35 — Por qué no hay nada]** (pantalla: texto «los mercados ya arbitraron lo obvio»)
BOCETO: una pizarra donde una diferencia entre dos precios se cierra rápido (la brecha se borra); texto «arbitraje = la ventaja se acaba».
> No hay una relación de adelanto explotable a un día. La explicación más probable es la que da el propio análisis: los mercados ya arbitraron cualquier lead-lag obvio. Arbitrar significa aprovechar una diferencia hasta que desaparece: cuando mucha gente ve que el petróleo sube y que el dólar canadiense debería reaccionar, compran o venden de inmediato y el precio ajusta antes de que llegue el día siguiente. Para cuando tú ves el dato de ayer, la ventaja ya se acabó.

**[3:10 — Con tu capital]** (pantalla: tarjeta «Con tu capital»; curva `series/extra-v67.json[0]` plana-descendente y gris `[1]` subiendo)
BOCETO: aviso ámbar «bruto, sin costos»; la tarjeta usa el par petróleo→USD/CAD.
> Veamos qué significa en dinero. Con $10,000 operando petróleo contra el USD/CAD, de 2012 a 2024, habrías perdido $384; comprar y esperar el USD/CAD dio +$3,673. Con $100,000: −$3,844 contra +$36,726. La peor caída desde un máximo fue de −$2,542 con 10,000 y −$25,415 con 100,000, un −25.4%. Y sin descontar ni un costo: con costos, el resultado sería peor.

**[3:35 — Preguntas de un escéptico]** (pantalla: tres tarjetas: «¿rezago de varios días?», «¿otros pares?», «¿relación pequeña?»)
BOCETO: tres tarjetas que se voltean: «¿varios días de rezago?» → no medido; «¿otros pares?» → no medido; «¿relación pequeña?» → 0.007.
> Preguntas que me haría un escéptico. ¿Y si el rezago fuera de varios días en vez de uno? Aquí solo medí un día. ¿Y con otros pares de divisas o de materias primas? Probé dos pares, no más. ¿Y si la relación existe, pero es demasiado pequeña para operarla? Esa es justamente la lectura de las cifras: una correlación de 0.007 es tan pequeña que no se distingue del ruido. Y como cada intento adicional aumenta la posibilidad de encontrar algo por pura suerte, lo honesto es decir qué se probó y qué no.

**[4:15 — Qué dice y qué no dice]** (pantalla: dos columnas: «lo que sí» y «lo que no»)
BOCETO: dos columnas: «sí: 1 día de rezago, 2 pares» y «no medido: el mismo día, otros rezagos».
> Este experimento dice que, a un día de distancia, ni el petróleo anticipa al dólar canadiense ni el oro anticipa al australiano. No dice que no exista relación entre ellos el mismo día: eso no lo medí. Lo que no hay es un adelanto del que se pueda sacar partido al día siguiente.

**[4:35 — Resumen]** (pantalla: tarjeta con las cifras clave: 0.007 · −0.005 · −0.00 · −0.11 · −$3,844 · +$36,726)
BOCETO: tarjeta con las seis cifras entrando con tick: 0.007, −0.005, −0.00, −0.11, −$3,844 y +$36,726.
> Resumen en tres bloques de cifras. Correlación rezagada de 0.007 entre el petróleo y el USD/CAD, y de −0.005 entre el oro y el AUD/USD. Sharpe bruto de −0.00 y de −0.11. Y en dinero, −$3,844 por cada $100,000 contra +$36,726 de comprar y esperar el USD/CAD. De 2012 a 2024, sin costos.

**[5:00 — Ficha del experimento #67]** (pantalla: tarjeta con la URL)
BOCETO: tarjeta «FICHA · EXPERIMENTO #67» con Estado · Cifra clave · Filtro que decidió · Lección, y la URL `atlas-lab-one.vercel.app/e/67` en grande.
> Ficha del experimento #67. Estado: murió, no sirvió. Cifra clave: correlaciones rezagadas de 0.007 (petróleo y CAD) y de −0.005 (oro y AUD), con Sharpe bruto de −0.00 y −0.11. Filtro que decidió: una correlación casi cero y un Sharpe bruto por debajo del 0.13 de referencia. Lección: no hay adelanto explotable a un día; los mercados ya arbitraron lo obvio. Revísalo completo en atlas-lab-one.vercel.app/e/67.

**[5:30 — Conclusión]**
BOCETO: la escala de correlación con la aguja pegada al 0; cierre con el logo.
> No hay adelanto explotable del petróleo sobre el dólar canadiense ni del oro sobre el australiano a un día. Todos los datos en atlas-lab-one.vercel.app/e/67. El trading no se promete: se prueba. Contenido educativo, no es asesoría financiera.

---

## SHORT (9:16, ≈ 50 s)

**[0-3 s]** (boceto: línea de petróleo subiendo y USD/CAD plana; texto «0.007»; b-roll de bombas de petróleo al atardecer, kb=in; golpe de bajo)
> Petróleo hoy, dólar canadiense mañana: correlación 0.007.

**[3-12 s]** (boceto: dos pares «petróleo → CAD» y «oro → AUD» con flecha y reloj; b-roll de lingotes de oro, kb=out; whoosh)
> Probé dos relaciones intuitivas: petróleo con el dólar canadiense y oro con el australiano. Con lo de ayer intento predecir lo de hoy, de 2012 a 2024.

**[12-19 s]** (boceto: escala −1, 0, 1 con la aguja casi en 0; cifras 0.007 y −0.005; tick)
> Una correlación de 1 es moverse juntos; 0, no tener relación. Petróleo y dólar canadiense: 0.007. Oro y dólar australiano: −0.005.

**[19-27 s]** (boceto: curva roja descendente contra gris ascendente; cifras −$3,844 y +$36,726; sello ✕)
> Operarlo da Sharpe de −0.00 y −0.11, sin costos. Con petróleo y dólar canadiense: −$3,844 por cada $100,000, contra +$36,726 de comprar y esperar.

**[27-37 s]** (boceto: reloj de 1 día y dos pares; texto «solo 1 día de rezago · solo 2 pares»)
> Ojo: solo medí un día de rezago y dos pares. No dice que no haya relación el mismo día; dice que no hay un adelanto que puedas operar al día siguiente.

**[37-44 s]** (boceto: reloj de 1 día con la ventaja que se apaga; b-roll de bolsa, kb=in)
> Los mercados ya arbitraron lo obvio a un día: cuando ves el dato de ayer, la ventaja ya se acabó.

**[44-50 s]** (boceto: texto «¿cuánta correlación?»; logo; abajo, «Experimento #67 completo en el enlace»)
> Video completo en el canal. Experimento 67 completo en el enlace. Petróleo hoy, dólar canadiense mañana: ¿cuánta correlación hay?

Gancho alterno A: «El oro predice al dólar australiano: correlación de −0.005.» · B: «Lo obvio ya está en el precio: lo probé con petróleo y CAD.»

## Descripción (YouTube) — video largo
https://atlas-lab-one.vercel.app/e/67?utm_source=youtube&utm_medium=video&utm_campaign=exp067-t1
Ficha del experimento #67: murió (No sirvió) · correlación rezagada 0.007 (petróleo y CAD) y −0.005 (oro y AUD) · Sharpe bruto −0.00 y −0.11.
¿El retorno de ayer del petróleo predice al USD/CAD, y el del oro al AUD/USD? Medí la correlación rezagada 1 día y el Sharpe bruto de operar según el activo líder (2012–2024): 0.007 y −0.005 de correlación, Sharpe de −0.00 y −0.11. No hay adelanto explotable a un día.

Contenido educativo. No es asesoría financiera ni recomendación de inversión.

Capítulos: 0:00 Gancho · 0:20 Presentación · 0:30 La idea: adelanto-retraso · 0:55 Los dos pares · 1:25 Cómo lo medí · 2:05 Resultados · 2:35 Por qué no hay nada · 3:10 Con tu capital · 3:35 Preguntas de un escéptico · 4:15 Qué dice y qué no dice · 4:35 Resumen · 5:00 Ficha del experimento #67 · 5:30 Conclusión

Etiquetas: lead-lag, correlación rezagada, petróleo y dólar canadiense, oro y dólar australiano, USD/CAD, AUD/USD, backtest, forex, materias primas, trading con datos, ATLAS Lab, estrategias de trading

## Descripción (YouTube) — Short
https://atlas-lab-one.vercel.app/e/67?utm_source=youtube&utm_medium=short&utm_campaign=exp067-t1
Experimento #67 · Adelanto-retraso entre activos (petróleo→CAD, oro→AUD): murió · correlación rezagada 0.007 y −0.005 · Sharpe bruto −0.00 y −0.11. Video completo en el canal. No es asesoría financiera.

## Rúbrica (autoevaluación)
| Criterio | Short | Largo |
|---|---|---|
| hook_0_3s | 4 | 4 |
| ritmo | 4 | 4 |
| promesa_cumplida | 5 | 5 |
| potencial_loop | 5 | 4 |
| claridad_no_traders | 4 | 4 |
| honestidad_atlas | 5 | 5 |
| audio | 4 | 4 |
| cta | 4 | 4 |
| **Promedio** | **4.38** | **4.25** |

## Otros temas de este experimento
- Tema 1 de 3: `exp-067-lead-lag-petroleo-cad.md` — ¿El petróleo mueve al dólar canadiense? Correlación 0.007
- Tema 2 de 3: `exp-067-t2-oro-y-dolar-australiano.md` — Oro → dólar australiano: correlación −0.005 y Sharpe −0.11 (2012–2024)
- Tema 3 de 3: `exp-067-t3-lo-obvio-ya-esta-en-el-precio.md` — La relación que todos conocen no deja dinero: −$3,844 por cada $100,000 (petróleo y dólar canadiense)

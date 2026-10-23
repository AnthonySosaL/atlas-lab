# Experimento #18 — Rotación defensiva oro + yen · Tema 3: 24 días de diez años: qué se puede (y qué no) concluir de una prueba tan corta

Tema 3 de 3 del experimento #18. Tema 1: `exp-018-refugio-oro-yen.md`.
Qué aporta frente a los otros temas: Se centra en el tamaño de la muestra: por qué 24 días no bastan para juzgar una idea, por qué su Sharpe no es comparable y qué haría falta. El tema 1 cuenta la historia del 31-oct-2014 y el tema 2 explica el oro, el yen y el par USD/JPY.
Estado del guion: **BORRADOR — pendiente de aprobación**
Estado del experimento: **murió** (veredicto del sitio: «No sirvió»; la cuenta se cortó a los 24 días)
Serie: G (Construyendo un bot, y por qué murió)
Datos usados: `experiments.json` (v=18: description, params, metrics, kpis, analysis, verdict, notes, capital, period), `exp_details.json` (algo, code, filters), `series/20260609_210755_rotacion-defensiva-oro-yen-v18.json` (24 días de la estrategia y curva «Sin estrategia») y la tabla «Con tu capital» de docs/youtube (fila 18). Las cifras con 10,000 dólares son las de la tabla de 100,000 divididas entre 10. Los 3,204 días de la prueba planeada son la longitud de la curva «Sin estrategia».

## Títulos (3 opciones)
1. Mi prueba duró 24 días de los 3,204 planeados: qué se puede concluir
2. Una muestra de 24 días no prueba nada: el caso de los refugios oro y yen
3. Sharpe −1.52 en 24 días: por qué no se puede comparar con 1.23

## Miniatura
Fondo negro de la marca. Una barra de tiempo larga casi vacía con apenas una marca roja al inicio y el texto «24 / 3,204». Texto grande: «24 DÍAS» (blanco, «DÍAS» en rojo de marca). Logo ATLAS esquina inferior derecha.

---

## VIDEO LARGO (16:9, ≈ 4:10 min — 4–6 min: tema de una sola idea y pocas cifras)
Ritmo visual: algo cambia en pantalla cada 2-3 s; b-roll real detrás, Ken Burns alterno, subtítulos karaoke, whoosh + flash en cada corte, golpe de bass solo en el momento clave.

**[0:00 — Gancho]** (pantalla: barra de 3,204 días y una marca roja)
Planeé una prueba de diez años y duró 24 días. Con tan pocos días, el Sharpe de −1.52 no se puede comparar con el 1.23 de la base. Te explico qué se puede concluir de una muestra tan corta.
> Boceto: una barra larga de tiempo que se llena hasta 3,204 días; solo los primeros 24 se pintan en rojo y se cortan con X; b-roll de relojes y calendarios, Ken Burns «in».

**[0:16 — El experimento]** (pantalla: rótulo con el número y el nombre del experimento)
Este es el experimento #18 de ATLAS Lab: Rotación defensiva oro + yen. Todos los resultados están en la página del experimento.
> Boceto: rótulo animado «EXPERIMENTO #18» con el nombre «Rotación defensiva oro + yen» debajo y el logo ATLAS; whoosh de entrada y fondo de velas con opacidad 0.12.

**[0:25 — Qué se probó]** (pantalla: bot con rotación a refugios)
Una variante del bot: cuando el filtro de pánico detecta riesgo, en vez de quedarse en efectivo, rota a refugios, la mitad en oro y la mitad en yen, con ×2. En calma opera la cesta de 15 mercados con paridad de riesgo a ×3. La cuenta se cerró el 31 de octubre de 2014, con un retorno de −4.0%.
> Boceto: dos portafolios en paralelo (calma / riesgo); curva real de 24 días cortándose en el 31-oct-2014.

**[0:50 — 24 de 3,204 días]** (pantalla: barra de tiempo)
La prueba estaba planeada de 2014 a 2024. Se cortó a los 24 días de operación: de los 3,204 días de la curva completa, la estrategia solo vive 24. Es menos del uno por ciento del periodo.
> Boceto: barra horizontal con 3,204 divisiones; 24 en rojo y el resto en gris vacío; contador «24 / 3,204».

**[1:05 — Todo en un solo régimen]** (pantalla: señal encendida 24 de 24 días)
Peor aún: la señal de riesgo estuvo encendida los 24 días de 24. El bot nunca operó la cesta normal; vivió entero en modo refugio. No probó cómo se comporta la rotación en calma ni en varios episodios. Probó un único tramo de miedo.
> Boceto: 24 casillas, todas en rojo «riesgo»; ninguna en verde; etiqueta «un solo régimen».

**[1:23 — Qué es una muestra]** (pantalla: puñado de datos contra una mina)
En estadística, una muestra es la parte de la realidad que observas. Si la muestra es pequeña, el resultado depende más de la suerte. Con 24 días, un solo día malo decide todo el resultado.
> Boceto: un puñado de puntos junto a una nube enorme de puntos; texto «poca muestra, mucha suerte».

**[1:38 — Un solo día manda]** (pantalla: barra de pérdida del día contra retorno total)
Mira cuánto pesa ese día. La pérdida del 31 de octubre fue de −5.1%; el retorno total de la cuenta, −4.0%. Un solo día fue más grande que el resultado completo: los demás días, en conjunto, sumaron a favor.
> Boceto: dos barras: «pérdida del día: −5.1%» (larga) y «retorno total: −4.0%» (más corta); la curva de 24 días con el último escalón resaltado.

**[1:54 — Por qué el Sharpe no es comparable]** (pantalla: dos Sharpe con distinta duración)
El Sharpe de −1.52 de esta prueba se calcula con 24 días. El Sharpe de la base, 1.23, con diez años y 3,204 días. Compararlos es como comparar el promedio de una semana con el de una década. Con tan pocos días, el Sharpe es muy inestable.
> Boceto: dos reglas: una cortita («24 días: −1.52») y una larguísima («3,204 días: 1.23»); signo ≠ entre ambas.

**[2:13 — Lo que sí se puede decir]** (pantalla: un hecho)
Lo que sí se puede decir con certeza: ese día concreto, con ×2, el oro y el yen cayeron juntos y rompieron el límite diario. Es un hecho y también una advertencia: un refugio no es una garantía.
> Boceto: tarjeta verde «lo que sí»: «el 31-oct-2014 cayeron a la vez» y «un refugio no es una garantía».

**[2:29 — Lo que no se puede decir]** (pantalla: tres afirmaciones tachadas)
Lo que no se puede decir: que los refugios no sirvan, que la rotación sea mala en general o que exista una regla sobre el oro o el yen. Un episodio no es una regla.
> Boceto: tres frases tachadas en rojo: «los refugios no sirven», «la rotación es mala», «regla del oro y el yen»; debajo, «1 episodio ≠ regla».

**[2:43 — Qué haría falta]** (pantalla: cuatro candados)
Para decidir haría falta probar muchos episodios, con la señal de ayer, con costos y con datos que el bot no haya visto. La señal de esta prueba usa el cierre del mismo día. Esta prueba se detuvo demasiado pronto para aportar nada de eso.
> Boceto: cuatro candados cerrados («más episodios», «señal de ayer», «costos», «datos nuevos»); barra de 24 días casi vacía.

**[3:02 — Con tu capital]** (pantalla: tarjeta «Con tu capital» con aviso)
Con 10,000 dólares, la curva termina en menos 360; con 100,000, en menos 3,604. Comprando y esperando en esas mismas fechas serían menos 77 y menos 767. La curva termina el 31 de octubre de 2014 porque la cuenta se cierra ese día.
> Boceto: tarjeta de capital con selector $10,000 / $100,000; curva roja de 24 días frente a la gris; aviso ámbar «la cuenta se corta a los 24 días».

**[3:20 — Conclusión]** (pantalla: texto grande)
Veredicto: no sirvió. Una prueba de 24 días sobre 3,204 sirve para ilustrar un riesgo, no para dictar una regla. Antes de creer o descartar una idea, mira cuántos días, cuántos episodios y cuántos regímenes se probaron.
> Boceto: sello ✕ rojo sobre la barra de tiempo; la frase «¿cuántos días? ¿cuántos episodios?» en blanco.

**[3:35 — Ficha del experimento #18]** (pantalla: tarjeta en pantalla con la ficha y la URL)
Ficha del experimento 18. Estado: murió (la cuenta se cortó a los 24 días). Cifra clave: retorno −4.0%; el 31 de octubre de 2014 el oro cayó 2.3% y USD/JPY subió 2.8%: pérdida del día de −5.1%. Filtro que decidió: sobrevivir a la prop firm falla (pérdida diaria mayor a 5%). Lección: los refugios también caen en algunos golpes de mercado; es un solo episodio, no una regla general. Revísalo completo en atlas-lab-one.vercel.app/e/18. Contenido educativo, no es asesoría financiera. El trading no se promete: se prueba.
> Boceto: tarjeta con las líneas de la ficha apareciendo una a una (estado, cifra clave, filtro que decidió, lección) y, al pie, la URL «atlas-lab-one.vercel.app/e/18» resaltada; sello del estado del experimento; frase de marca, logo y URL.

---

## SHORT (9:16, ≈ 47 s)
Fórmula visual: b-roll vertical + overlay oscuro 0.6, Ken Burns alternando in/out, subtítulos karaoke en MAYÚSCULAS con las cifras en rojo, whoosh + flash en cada corte, golpe de bass + sacudida solo en el 0-3 s; ticker arriba.

**[0-3 s]** «Mi prueba duró 24 días de 3,204 planeados.»
> Boceto: texto gigante «24 / 3,204»; la barra de tiempo se corta con X y sacudida; b-roll de relojes, Ken Burns «in».
**[3-9 s]** «Probé rotar a oro y yen cuando el filtro de pánico se activa, con apalancamiento ×2.»
> Boceto: lingote y yen dentro de un escudo; chip «×2»; Ken Burns «out»; karaoke con «24 DÍAS» en rojo.
**[9-16 s]** «El 31 de octubre de 2014 perdió 5.1% en un día y la cuenta se cerró, con −4.0%.»
> Boceto: barra de pérdida cruzando la línea de −5%; curva de 24 días cortada; whoosh y flash blanco.
**[16-25 s]** «Y la señal de riesgo estuvo encendida los 24 días: el bot nunca operó la cesta normal, solo vivió en modo refugio.»
> Boceto: 24 casillas rojas seguidas, ninguna verde; etiqueta «un solo régimen».
**[25-32 s]** «Su Sharpe, −1.52, no se compara con el 1.23 de la base: son 24 días contra diez años.»
> Boceto: dos reglas, corta y larga, con signo ≠; Ken Burns «in».
**[32-38 s]** «Un episodio no es una regla. Esto no prueba que los refugios nunca sirvan.»
> Boceto: texto «1 episodio ≠ regla» y los dos refugios con interrogación.
**[38-45 s]** «El video completo está en el canal. Experimento #18 completo en el enlace. No es asesoría financiera.»
> Boceto: texto «Video completo en el canal» y «Experimento #18 en el enlace» con el logo ATLAS.
**[45-47 s]** «Veinticuatro días no son una prueba.»
> Boceto: vuelve «24 / 3,204» con la barra casi vacía (loop con el gancho); corte directo al inicio.

## Descripción (YouTube) — video largo
https://atlas-lab-one.vercel.app/e/18?utm_source=youtube&utm_medium=video&utm_campaign=exp018-t3
Ficha del experimento #18 (Rotación defensiva oro + yen): estado murió (cuenta cortada a los 24 días). Retorno −4.0%; el 31-oct-2014 oro −2.3% y USD/JPY +2.8%: pérdida del día de −5.1% (límite 5%).
Una variante del bot que rotaba a oro y yen (×2) cuando el filtro detectaba riesgo se cortó a los 24 días de los 3,204 planeados (31-oct-2014, pérdida del día −5.1%): retorno −4.0%, Sharpe −1.52 y caída máxima −10.9%.
Con 24 días y la señal de riesgo encendida los 24 días, el Sharpe no es comparable con el 1.23 de la base y no se puede concluir nada general sobre el oro ni sobre el yen.
Contenido educativo. No es asesoría financiera ni recomendación de inversión.

## Descripción (YouTube) — Short
https://atlas-lab-one.vercel.app/e/18?utm_source=youtube&utm_medium=short&utm_campaign=exp018-t3
Ficha del experimento #18 (Rotación defensiva oro + yen): estado murió (cuenta cortada a los 24 días). Retorno −4.0%; el 31-oct-2014 oro −2.3% y USD/JPY +2.8%: pérdida del día de −5.1% (límite 5%).
Una prueba de refugios (oro y yen) duró 24 días de 3,204 planeados: por qué no se puede concluir nada general.
Video completo en el canal. Experimento #18 completo en el enlace. Contenido educativo, no es asesoría financiera.

Capítulos: 0:00 Gancho · 0:16 El experimento · 0:25 Qué se probó · 0:50 24 de 3,204 días · 1:05 Todo en un solo régimen · 1:23 Qué es una muestra · 1:38 Un solo día manda · 1:54 Por qué el Sharpe no es comparable · 2:13 Lo que sí se puede decir · 2:29 Lo que no se puede decir · 2:43 Qué haría falta · 3:02 Con tu capital · 3:20 Conclusión · 3:35 Ficha del experimento #18

Etiquetas: tamaño de muestra, estadística, backtest, activos refugio, oro, yen, Sharpe ratio, bot de trading, prop firm, ATLAS Lab, trading con datos, validación de estrategias

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

Notas: el gancho muestra la desproporción entre lo planeado y lo ocurrido (24 de 3,204); la honestidad es 5 porque separa con claridad lo que sí se puede decir y lo que no. El Short cumple hook ≥ 4. Se entiende sin haber visto el tema 1.

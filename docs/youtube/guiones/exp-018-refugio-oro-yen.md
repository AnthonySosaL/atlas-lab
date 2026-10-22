# Experimento #18 — Rotación defensiva oro + yen

Estado del guion: **BORRADOR — pendiente de aprobación**
Estado del experimento: **murió** (veredicto del sitio: «No sirvió»; la cuenta se cortó a los 24 días) · Serie G — Construyendo un bot (y por qué murió)
Datos usados: `experiments.json` (v=18: kpis, metrics, params, verdict, analysis, notes, capital), `exp_details.json` (clave `…-v18`: algo, filters), `series/20260609_210755_rotacion-defensiva-oro-yen-v18.json` (24 días de la estrategia y curva «Sin estrategia»), tabla «Con tu capital» (archivo de capital en `docs/youtube/`). Relacionado: #16 (el bot base).

## Títulos
1. Oro y yen cayeron a la vez: −5.1% en un día y la cuenta murió
2. Mis «refugios» fallaron: así murió el bot en 24 días
3. ¿Protegen el oro y el yen? Mi bot los probó: −4.0% en 24 días

## Miniatura
Fondo `#09090b`. Dos velas rojas gigantes lado a lado, una dorada con «ORO −2.3%» y otra con «YEN −2.8%»; encima, en rojo `#e11d2a` y Segoe UI Black, «AMBOS CAEN» (dos palabras, sin repetir los títulos). Logo ATLAS abajo a la derecha.

---

## VIDEO LARGO (16:9, ≈ 6:24 min)
Ritmo visual: algo cambia en pantalla cada 2-3 s; los pasos de cada boceto van en orden. Fórmula del canal: b-roll real detrás, Ken Burns alterno, subtítulos karaoke, whoosh + flash en cada corte.

**[0:00 — Gancho]** (pantalla: calendario con el 31 de octubre de 2014 en rojo)
31 de octubre de 2014. Mi bot tenía la mitad del dinero en oro y la otra mitad en yen, los dos refugios clásicos cuando hay miedo en el mercado. Ese día cayeron a la vez: el oro, 2.3%, y el yen, 2.8% frente al dólar. Con apalancamiento ×2 —posiciones del doble del capital—, la pérdida del día fue de 5.1%, y el límite de la prop firm, la empresa que presta la cuenta, es 5%. Cuenta cerrada, al día 24.
> Boceto: calendario con la fecha marcada; dos velas rojas (oro −2.3%, yen −2.8%) que caen con golpe de bass y sacudida; luego la cifra «−5.1%» sobre una barra que cruza la línea roja de 5%.

**[0:34 — Presentación]** (pantalla: rótulo «Experimento #18 · Rotación defensiva oro + yen»)
Este es el experimento #18 de ATLAS Lab: Rotación defensiva oro + yen. Todos los resultados están en la página del experimento.
> Boceto: rótulo grande «EXPERIMENTO #18 · Rotación defensiva oro + yen» sobre velas de fondo con overlay oscuro; abajo, la URL pequeña «atlas-lab-one.vercel.app/e/18». Ken Burns «out».

**[0:44 — Dónde encaja en la serie]** (pantalla: mapa de la serie, #15 al #30)
Este es el primero de tres experimentos que modifican el bot base del experimento 16: el #18 cambia lo que hace cuando hay riesgo; el #19, cuánto apalanca en calma; el #20, si puede apostar a la baja. Los tres usan las mismas reglas del #16 para poder compararse con él.
> Boceto: tres ramas que salen del #16 hacia #18, #19 y #20; la rama del #18 se ilumina; texto «tres variantes, mismas reglas».

**[1:06 — La idea: un refugio en lugar de efectivo]** (pantalla: dos portafolios)
En el experimento 16, cuando el filtro detecta riesgo, el bot se queda en efectivo. Esta variante pregunta: ¿y si en lugar de quedarse quieto, rota hacia refugios? La mitad en oro y la otra mitad en yen —el yen se compra vendiendo el par USD/JPY—, con apalancamiento ×2. Cuando hay calma, todo sigue igual: paridad de riesgo a ×3.
> Boceto: dos portafolios en paralelo, «calma: cesta ×3» y «riesgo: 50% oro + 50% yen ×2»; el semáforo del filtro hace que el dinero pase de uno a otro con una flecha.

**[1:31 — Cómo se compra yen con un par de divisas]** (pantalla: par USD/JPY)
Un detalle técnico. Las divisas se cotizan por pares, una contra otra. El par USD/JPY dice cuántos yenes vale un dólar. Si USD/JPY sube, el dólar se fortalece y el yen se debilita. Vender USD/JPY equivale a comprar yen, y por eso el bot, para estar en yen, vende ese par.
> Boceto: dos monedas en una balanza; cuando el dólar sube, la moneda del yen sube de plato; flechas «USD/JPY sube = yen más débil» y «vender USD/JPY = comprar yen».

**[1:53 — Lo que se espera de un refugio]** (pantalla: texto y dos iconos)
La lógica detrás de rotar a oro y yen es conocida: cuando hay miedo, mucha gente compra oro y yen, así que suelen subir o caer menos que el resto. Esa es la hipótesis que se probó; no es una ley. Y justamente por eso el experimento es útil: una hipótesis tan repetida merece una prueba con datos.
> Boceto: dos iconos (lingote y yen) con un escudo verde; luego el escudo se agrieta con la etiqueta «hipótesis, no ley».

**[2:18 — Cómo se probó]** (pantalla: checklist de filtros)
Estaba planeado para 2014–2024 con las reglas de una prop firm: la cuenta se cierra si pierde 10% desde el inicio o más de 5% en un día. La señal de riesgo es la misma del experimento 16, calculada con el cierre del mismo día; los pesos en calma usan datos de ayer. El criterio para llamarlo exitoso: sobrevivir y superar el Sharpe de 1.23 de la base; el Sharpe es el retorno por unidad de riesgo. No se descuentan costos.
> Boceto: checklist de `exp_details.json`: «Sobrevive a la prop firm: FALLA», «Señal rezagada 1 día: FALLA», «Costos: no aplicado», «Sharpe comparable con la base: no (solo 24 días)».

**[2:52 — Resultados]** (pantalla: tarjetas de KPI y curva de 24 días)
Retorno total: menos 4.0%. Drawdown máximo, la peor caída desde un máximo de la cuenta: menos 10.9%. Duración de la cuenta: 24 días. Y la señal de riesgo estuvo encendida los 24 días de 24: el bot pasó toda su vida en el portafolio de refugio. El Sharpe fue de menos 1.52, pero con solo 24 días no es comparable con el de la base.
> Boceto: la curva real de la estrategia (24 puntos, de 2014-10-05 a 2014-10-31) dibujándose y cortándose en seco; tarjetas −4.0% · −10.9% · 24 días · 24/24.

**[3:19 — La caída y el corte no son lo mismo]** (pantalla: dos reglas distintas)
Fíjate en una diferencia. La caída máxima desde el pico fue de menos 10.9%, pero el retorno final es de menos 4.0% sobre el capital inicial. La regla del 10% se mide contra el capital inicial, no contra el pico, y no se rompió. Lo que cerró la cuenta fue la otra regla: más de 5% de pérdida en una sola jornada.
> Boceto: dos medidores, «pérdida contra el capital inicial: −4.0% (límite −10%)» y «pérdida del día: −5.1% (límite −5%)»; solo el segundo cruza su línea roja y dispara el cierre.

**[3:46 — El día del corte]** (pantalla: operación aritmética)
Hagamos la cuenta del 31 de octubre. Mitad del capital en oro, con ×2: el oro cae 2.3%, pierde 2.3% de la cuenta. Mitad en yen, con ×2: el dólar sube 2.8% frente al yen, y como estamos vendidos en USD/JPY, pierde 2.8%. Suma: menos 5.1% en una jornada. El límite diario es 5%.
> Boceto: dos barras que se apilan, «oro −2.3%» y «yen −2.8%», sumando «−5.1%» contra la línea roja de «−5% / día»; sello «CUENTA CERRADA».

**[4:09 — Qué no demuestra]** (pantalla: texto)
Ojo: es un solo episodio. Que el oro y el yen cayeran juntos ese día no prueba que los refugios nunca sirvan. Lo que sí muestra es que un refugio no es una garantía, y que con apalancamiento ×2 un día malo de los dos basta para cerrar la cuenta.
> Boceto: texto «1 episodio ≠ regla general» en blanco; debajo, los dos refugios con un signo de interrogación.

**[4:30 — Qué haría falta para decidir]** (pantalla: tres candados)
Para saber si los refugios sirven habría que probar muchos episodios, no uno; con la señal de ayer, con costos y con datos que el bot no haya visto. Esta prueba se detuvo a los 24 días, así que no alcanza para concluir nada general sobre el oro ni sobre el yen.
> Boceto: tres candados cerrados («más episodios», «señal de ayer», «costos») y el contador «24 días» sobre una barra de diez años casi vacía.

**[4:53 — Con tu capital]** (pantalla: tarjeta de capital $10,000 / $100,000)
Con 10,000 dólares, la curva termina en menos $360; con 100,000, en menos $3,604. Sin estrategia, comprando y esperando en esas mismas fechas, serían menos $77 y menos $767. La curva termina el 31 de octubre de 2014 porque la cuenta se cierra ese día, y además la señal de riesgo usa el cierre del mismo día.
> Boceto: tarjeta «Con tu capital» del sitio con el selector; curva de 24 días en rojo frente a la gris «Sin estrategia»; aviso ámbar «la cuenta se corta a los 24 días».

**[5:17 — Conclusión]** (pantalla: texto grande)
Veredicto: no sirvió. Reventó a los 24 días, con un retorno de menos 4.0%. Los refugios también caen en algunos golpes de mercado, y lo único que aprendemos con certeza de un solo episodio es que hay que probar la idea con más historia antes de confiar en ella.
> Boceto: sello rojo «NO SIRVIÓ»; frase final «El trading no se promete: se prueba».

**[5:38 — Ficha del experimento #18]** (pantalla: tarjeta con la URL)
Ficha del experimento 18. Estado: murió (veredicto del sitio: «No sirvió»; la cuenta se cortó a los 24 días). Cifra clave: la cuenta se cortó el 31 de octubre de 2014 con un retorno de menos 4.0%, porque el oro y el yen cayeron a la vez y la pérdida de ese día superó el 5%. Filtro que decidió: la regla de la cuenta fondeada, que no sobrevive. Lección: los refugios también caen en algunos golpes de mercado; es un solo episodio, no una regla general. Revísalo completo en atlas-lab-one.vercel.app/e/18.
> Boceto: tarjeta oscura con el estado del experimento #18 arriba, las cifras clave en el centro y «atlas-lab-one.vercel.app/e/18» en grande al pie; las líneas de la ficha entran una a una; logo ATLAS.

**[6:13 — Cierre]** (pantalla: logo y enlace)
En el siguiente video, el apalancamiento escalonado por VIX: el experimento 19. Todos los datos en atlas-lab-one.vercel.app/e/18. Contenido educativo, no es asesoría financiera.
> Boceto: pantalla final con enlace y logo ATLAS; fondo de velas animadas con opacidad 0.12.

---

## SHORT (9:16, ≈ 45 s)
Fórmula visual: b-roll Pexels vertical + overlay oscuro 0.6, Ken Burns alternando in/out, subtítulos karaoke en MAYÚSCULAS con las cifras en rojo, whoosh + flash en cada corte, golpe de bass + sacudida solo en el 0-3 s y en el «−5.1%»; ticker arriba, viñeta y velas con opacidad ≤ 0.12.

**[0-3 s]** "Oro y yen cayeron a la vez: menos 5.1%."
> Boceto: dos velas rojas (oro y yen) que caen con sacudida; texto gigante «−5.1%».
**[3-10 s]** "Mi bot rotaba a refugios cuando había miedo: la mitad en oro, la mitad en yen, con apalancamiento ×2."
> Boceto: dos iconos (lingote y yen) entran en una cesta con la etiqueta «×2».
**[10-16 s]** "El 31 de octubre de 2014, el oro cayó 2.3%. El yen cayó 2.8% frente al dólar."
> Boceto: calendario con la fecha; dos barras rojas que aparecen con tick, una por cifra.
**[16-21 s]** "Resultado: pérdida de 5.1% en un solo día. El límite de la prop firm es 5%."
> Boceto: barra «−5.1%» que cruza la línea roja de «−5%» con golpe de bass.
**[21-26 s]** "La cuenta se cerró al día 24, con un retorno de menos 4.0%."
> Boceto: la curva real de 24 días cortándose en seco; contador «día 24».
**[26-32 s]** "Es un solo episodio: no prueba que los refugios nunca sirvan. Pero un refugio no es una garantía."
> Boceto: texto «1 episodio» y «refugio ≠ garantía» en blanco.
**[32-40 s]** "El trading no se promete: se prueba. El video completo está en el canal. Experimento #18 completo en el enlace. No es asesoría financiera."
> Boceto: sello «NO SIRVIÓ»; frase de marca; logo ATLAS; texto «Experimento #18 completo en el enlace».
**[40-45 s]** "Así que la próxima vez que te digan que el oro y el yen te protegen:"
> Boceto: dos iconos con interrogación; corte directo al inicio (loop).

## Descripción de YouTube (video largo)
https://atlas-lab-one.vercel.app/e/18?utm_source=youtube&utm_medium=video&utm_campaign=exp018-t1
Ficha del experimento #18 (Rotación defensiva oro + yen): estado murió · cuenta cortada el 31-oct-2014, a los 24 días, con −4.0% · oro y yen cayeron a la vez.
Una variante del bot que, en lugar de quedarse en efectivo cuando hay riesgo, rota a refugios (50% oro, 50% yen, a ×2).
El 31 de octubre de 2014 el oro cayó 2.3% y el yen 2.8% frente al dólar: pérdida de 5.1% en un día, por encima del límite de 5% de la prop firm, y cuenta cerrada a los 24 días con −4.0%.
Contenido educativo. No es asesoría financiera ni recomendación de inversión.

## Descripción del Short
https://atlas-lab-one.vercel.app/e/18?utm_source=youtube&utm_medium=short&utm_campaign=exp018-t1
Experimento #18 · murió · cuenta cortada a los 24 días con −4.0%: oro y yen cayeron a la vez. No es asesoría financiera.

Capítulos: 0:00 Gancho · 0:34 Presentación · 0:44 Dónde encaja en la serie · 1:06 La idea: un refugio en lugar de efectivo · 1:31 Cómo se compra yen con un par de divisas · 1:53 Lo que se espera de un refugio · 2:18 Cómo se probó · 2:52 Resultados · 3:19 La caída y el corte no son lo mismo · 3:46 El día del corte · 4:09 Qué no demuestra · 4:30 Qué haría falta para decidir · 4:53 Con tu capital · 5:17 Conclusión · 5:38 Ficha del experimento #18 · 6:13 Cierre

Etiquetas: oro, yen, activos refugio, bot de trading, prop firm, apalancamiento, USDJPY, drawdown, riesgo, trading con datos, ATLAS Lab, backtest

## Rúbrica (autoevaluación del Short)
hook_0_3s 5 · ritmo 4 · promesa_cumplida 5 · potencial_loop 4 · claridad_no_traders 4 · honestidad_atlas 5 · audio 4 · cta 4 → promedio 4.38 (aprobado: ≥ 4.0, hook ≥ 4, honestidad 5)
Notas: el gancho es un dato concreto y verificable (fecha, oro, yen, −5.1%); la honestidad es 5 porque se dice que es un solo episodio y que la cuenta se cortó a los 24 días.

## Otros temas de este experimento

- Tema 1 — `exp-018-refugio-oro-yen.md` — Rotación defensiva oro + yen (este archivo).
- Tema 2 — `exp-018-t2-oro-yen-y-el-par-usdjpy.md` — Oro, yen y el par USD/JPY: la hipótesis del refugio, explicada
- Tema 3 — `exp-018-t3-muestra-de-24-dias.md` — 24 días de diez años: qué se puede (y qué no) concluir de una prueba tan corta

# Experimento #18 — Rotación defensiva oro + yen · Tema 2: Oro, yen y el par USD/JPY: la hipótesis del refugio, explicada

Tema 2 de 3 del experimento #18. Tema 1: `exp-018-refugio-oro-yen.md`.
Qué aporta frente a los otros temas: Explica el concepto: qué es un activo refugio, cómo se compra yen con un par de divisas y cómo suman las pérdidas con apalancamiento. El tema 1 cuenta la historia de los 24 días y el tema 3 trata de lo que una muestra tan corta puede (y no puede) probar.
Estado del guion: **BORRADOR — pendiente de aprobación**
Estado del experimento: **murió** (veredicto del sitio: «No sirvió»; la cuenta se cortó a los 24 días)
Serie: G (Construyendo un bot, y por qué murió)
Datos usados: `experiments.json` (v=18: description, params, metrics, kpis, analysis, verdict, notes, capital, period), `exp_details.json` (algo, code, filters), `series/20260609_210755_rotacion-defensiva-oro-yen-v18.json` (24 días de la estrategia y curva «Sin estrategia») y la tabla «Con tu capital» de docs/youtube (fila 18). Las cifras con 10,000 dólares son las de la tabla de 100,000 divididas entre 10.

## Títulos (3 opciones)
1. Cómo se compra yen con USD/JPY (y por qué el 31-oct-2014 el oro y el yen cayeron a la vez)
2. Activos refugio explicados: oro, yen y la hipótesis de que protegen
3. Oro −2.3% y USD/JPY +2.8%: la aritmética de un día de −5.1%

## Miniatura
Fondo negro de la marca. Dos velas rojas gigantes lado a lado: una dorada con «ORO −2.3%» y otra con «USD/JPY +2.8%». Texto grande: «¿REFUGIO?» (blanco, con el signo de interrogación en rojo de marca). Logo ATLAS esquina inferior derecha.

---

## VIDEO LARGO (16:9, ≈ 4:20 min — 4–6 min: tema de una sola idea y pocas cifras)
Ritmo visual: algo cambia en pantalla cada 2-3 s; b-roll real detrás, Ken Burns alterno, subtítulos karaoke, whoosh + flash en cada corte, golpe de bass solo en el momento clave.

**[0:00 — Gancho]** (pantalla: dos velas rojas: oro y yen)
El oro y el yen son los refugios clásicos. El 31 de octubre de 2014 cayeron a la vez: el oro, 2.3%, y el dólar subió 2.8% frente al yen. En mi bot, eso fue una pérdida de 5.1% en un día.
> Boceto: calendario con la fecha marcada; dos velas rojas (oro −2.3%, USD/JPY +2.8%) que caen con golpe de bass; la cifra «−5.1%» aparece sobre ellas; b-roll de monedas y barras de oro, Ken Burns «in».

**[0:17 — El experimento]** (pantalla: rótulo con el número y el nombre del experimento)
Este es el experimento #18 de ATLAS Lab: Rotación defensiva oro + yen. Todos los resultados están en la página del experimento.
> Boceto: rótulo animado «EXPERIMENTO #18» con el nombre «Rotación defensiva oro + yen» debajo y el logo ATLAS; whoosh de entrada y fondo de velas con opacidad 0.12.

**[0:27 — Qué es un activo refugio]** (pantalla: escudo sobre oro y yen)
Un refugio es un activo al que mucha gente acude cuando hay miedo. Por eso suele subir, o caer menos, cuando el resto del mercado sufre. El oro y el yen son los dos clásicos. Es una hipótesis muy repetida, no una ley, y merece una prueba con datos.
> Boceto: lingote y yen dentro de un escudo verde que luego se agrieta con la etiqueta «hipótesis, no ley»; Ken Burns «out».

**[0:47 — La idea del bot]** (pantalla: dos portafolios: calma y riesgo)
El bot base se queda en efectivo cuando su filtro de pánico detecta riesgo. Esta variante prueba otra cosa: en vez de quedarse quieto, rotar a refugios. La mitad en oro y la otra mitad en yen, con apalancamiento ×2. En calma, todo sigue igual: paridad de riesgo a ×3.
> Boceto: dos portafolios en paralelo, «calma: cesta de 15 a ×3» y «riesgo: 50% oro + 50% yen a ×2»; el semáforo hace pasar el dinero de uno a otro con una flecha.

**[1:07 — Cómo se compra yen]** (pantalla: par USD/JPY y una balanza)
Las divisas se cotizan por pares, una contra otra. El par USD/JPY dice cuántos yenes vale un dólar. Si sube, el dólar se fortalece y el yen se debilita. Para tener yen hay que vender ese par: vender USD/JPY equivale a comprar yen.
> Boceto: dos monedas en una balanza; cuando el dólar sube, el plato del yen se eleva; flechas «USD/JPY sube = yen más débil» y «vender USD/JPY = comprar yen».

**[1:25 — Cómo lo hace el bot]** (pantalla: dos posiciones)
El bot lo implementa así: la mitad en oro, comprando XAUUSD, y la mitad en yen, vendiendo USDJPY. Los dos con apalancamiento ×2. La apuesta es que, con miedo en el mercado, ambos aguanten o suban.
> Boceto: dos tarjetas «+0.5 XAUUSD» y «−0.5 USDJPY» con el chip «×2»; flecha verde esperada «aguantan».

**[1:40 — El día: 31 de octubre de 2014]** (pantalla: dos velas rojas con cifras)
Ese día el oro cayó 2.3%. Y el par USD/JPY subió 2.8%: el yen se debilitó. Los dos refugios cayeron a la vez, y el bot estaba vendido en el par que subía.
> Boceto: dos barras rojas que aparecen con tick, «oro −2.3%» y «USD/JPY +2.8% (el yen cae)»; sacudida breve.

**[1:54 — La aritmética del día]** (pantalla: dos barras que se apilan)
Hagamos la cuenta. La mitad del capital en oro, con ×2, equivale a una posición del tamaño de toda la cuenta: si el oro pierde 2.3%, la cuenta pierde 2.3%. La otra mitad, en yen, igual: el dólar sube 2.8% y la cuenta pierde 2.8%. Suma: −5.1%. El límite diario de una prop firm es 5%.
> Boceto: dos barras «oro −2.3%» y «yen −2.8%» que se apilan hasta «−5.1%» y cruzan la línea roja de «−5% / día»; sello «CUENTA CERRADA».

**[2:16 — Lo que pasó con la cuenta]** (pantalla: tarjetas KPI y curva de 24 días)
La cuenta se cerró el día 24. Retorno total, −4.0%; caída máxima desde su punto más alto, −10.9%. Y la señal de riesgo estuvo encendida los 24 días de 24: el bot pasó toda su vida en modo refugio.
> Boceto: la curva real de 24 días (series, curva 1) dibujándose y cortándose en el 31-oct-2014; tarjetas −4.0% · −10.9% · 24 días · 24/24.

**[2:33 — Qué enseña el concepto]** (pantalla: diversificación entre refugios)
Un refugio puede reducir el riesgo en promedio, pero no te protege de todos los golpes. Cuando los dos refugios caen juntos, la diversificación entre ellos desaparece. Y con apalancamiento ×2, un día malo de los dos basta para romper el límite diario.
> Boceto: dos escudos del mismo color que se rompen a la vez; texto «dos refugios, una misma caída»; chip «×2».

**[2:50 — Qué no prueba]** (pantalla: un episodio)
Y es un solo episodio. Que el oro y el yen cayeran a la vez ese día no demuestra que los refugios nunca sirvan. Demuestra que un refugio no es una garantía, y que la hipótesis necesita muchos episodios para juzgarse.
> Boceto: texto «1 episodio ≠ regla general»; debajo, los dos refugios con signo de interrogación.

**[3:07 — Con tu capital]** (pantalla: tarjeta «Con tu capital» con aviso)
Con 10,000 dólares, la curva termina en menos 360; con 100,000, en menos 3,604. Comprando y esperando en esas fechas serían menos 77 y menos 767. La curva termina el 31 de octubre de 2014 porque la cuenta se cierra ese día, y además la señal de riesgo usa el cierre del mismo día.
> Boceto: tarjeta de capital con selector; curva de 24 días en rojo frente a la gris «Sin estrategia»; aviso ámbar «la cuenta se corta a los 24 días».

**[3:29 — Conclusión]** (pantalla: texto grande)
Veredicto: no sirvió. La cuenta se cerró a los 24 días, con −4.0%, porque el oro y el yen cayeron juntos. Los refugios son una hipótesis útil, no un seguro: antes de apoyarte en ellos, pruébalos con más historia.
> Boceto: sello ✕ rojo sobre el escudo; la frase «un refugio no es una garantía» en blanco.

**[3:45 — Ficha del experimento #18]** (pantalla: tarjeta en pantalla con la ficha y la URL)
Ficha del experimento 18. Estado: murió (la cuenta se cortó a los 24 días). Cifra clave: retorno −4.0%; el 31 de octubre de 2014 el oro cayó 2.3% y USD/JPY subió 2.8%: pérdida del día de −5.1%. Filtro que decidió: sobrevivir a la prop firm falla (pérdida diaria mayor a 5%). Lección: los refugios también caen en algunos golpes de mercado; es un solo episodio, no una regla general. Revísalo completo en atlas-lab-one.vercel.app/e/18. Contenido educativo, no es asesoría financiera. El trading no se promete: se prueba.
> Boceto: tarjeta con las líneas de la ficha apareciendo una a una (estado, cifra clave, filtro que decidió, lección) y, al pie, la URL «atlas-lab-one.vercel.app/e/18» resaltada; sello del estado del experimento; frase de marca, logo y URL.

---

## SHORT (9:16, ≈ 44 s)
Fórmula visual: b-roll vertical + overlay oscuro 0.6, Ken Burns alternando in/out, subtítulos karaoke en MAYÚSCULAS con las cifras en rojo, whoosh + flash en cada corte, golpe de bass + sacudida solo en el 0-3 s; ticker arriba.

**[0-3 s]** «Oro −2.3% y yen −2.8% el mismo día.»
> Boceto: texto gigante «−5.1%» sobre dos velas rojas (oro y yen) que caen con sacudida; b-roll de lingotes y monedas, Ken Burns «in».
**[3-11 s]** «Eran los dos refugios de mi bot: la mitad en oro y la mitad en yen, con apalancamiento ×2.»
> Boceto: lingote y yen dentro de una cesta con el chip «×2»; Ken Burns «out»; karaoke con «REFUGIOS» en rojo.
**[11-16 s]** «Para tener yen, el bot vende el par USD/JPY. Ese día el par subió 2.8%.»
> Boceto: balanza dólar-yen; flecha «USD/JPY +2.8%»; whoosh y flash blanco.
**[16-26 s]** «La cuenta pierde 2.3% por el oro y 2.8% por el yen: −5.1% en un día. El límite de la prop firm es 5%.»
> Boceto: dos barras que se apilan hasta «−5.1%» y cruzan la línea de «−5%»; golpe de bass.
**[26-33 s]** «Cuenta cerrada al día 24, con −4.0%. Es un solo episodio, pero un refugio no es una garantía.»
> Boceto: curva de 24 días cortándose con X; texto «1 episodio ≠ regla»; Ken Burns «in».
**[33-40 s]** «El video completo está en el canal. Experimento #18 completo en el enlace. No es asesoría financiera.»
> Boceto: texto «Video completo en el canal» y «Experimento #18 en el enlace» con el logo ATLAS.
**[40-44 s]** «Oro y yen: los dos refugios que cayeron a la vez.»
> Boceto: vuelven las dos velas rojas (loop con el gancho); corte directo al inicio.

## Descripción (YouTube) — video largo
https://atlas-lab-one.vercel.app/e/18?utm_source=youtube&utm_medium=video&utm_campaign=exp018-t2
Ficha del experimento #18 (Rotación defensiva oro + yen): estado murió (cuenta cortada a los 24 días). Retorno −4.0%; el 31-oct-2014 oro −2.3% y USD/JPY +2.8%: pérdida del día de −5.1% (límite 5%).
Qué es un activo refugio y cómo se compra yen con el par USD/JPY. El 31 de octubre de 2014 el oro cayó 2.3% y USD/JPY subió 2.8% (el yen cayó): con 50% oro y 50% yen a ×2, la pérdida del día fue de −5.1% (límite de la prop firm: 5%) y la cuenta se cerró a los 24 días con −4.0%.
Es un solo episodio: no prueba que los refugios nunca sirvan, pero un refugio no es una garantía.
Contenido educativo. No es asesoría financiera ni recomendación de inversión.

## Descripción (YouTube) — Short
https://atlas-lab-one.vercel.app/e/18?utm_source=youtube&utm_medium=short&utm_campaign=exp018-t2
Ficha del experimento #18 (Rotación defensiva oro + yen): estado murió (cuenta cortada a los 24 días). Retorno −4.0%; el 31-oct-2014 oro −2.3% y USD/JPY +2.8%: pérdida del día de −5.1% (límite 5%).
El oro cayó 2.3% y el yen 2.8% el mismo día: −5.1% en un día con ×2 y la cuenta cerrada al día 24.
Video completo en el canal. Experimento #18 completo en el enlace. Contenido educativo, no es asesoría financiera.

Capítulos: 0:00 Gancho · 0:17 El experimento · 0:27 Qué es un activo refugio · 0:47 La idea del bot · 1:07 Cómo se compra yen · 1:25 Cómo lo hace el bot · 1:40 El día: 31 de octubre de 2014 · 1:54 La aritmética del día · 2:16 Lo que pasó con la cuenta · 2:33 Qué enseña el concepto · 2:50 Qué no prueba · 3:07 Con tu capital · 3:29 Conclusión · 3:45 Ficha del experimento #18

Etiquetas: activos refugio, oro, yen, USDJPY, divisas, prop firm, apalancamiento, bot de trading, diversificación, ATLAS Lab, trading con datos, forex para principiantes

## Rúbrica (autoevaluación, 1–5)
| Criterio | Short | Largo |
|---|---|---|
| hook_0_3s | 4 | 4 |
| ritmo | 4 | 4 |
| promesa_cumplida | 5 | 5 |
| potencial_loop | 4 | 4 |
| claridad_no_traders | 4 | 5 |
| honestidad_atlas | 5 | 5 |
| audio | 4 | 3 |
| cta | 4 | 4 |
| **Promedio** | **4.25** | **4.25** |

Notas: el gancho es una fecha y tres cifras verificables; el tema explica el par USD/JPY para quien no opera forex. La honestidad es 5 porque se dice que es un solo episodio y que la cuenta se cortó a los 24 días. El Short cumple hook ≥ 4.

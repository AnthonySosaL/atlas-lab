# Experimento #50 — Cierre: 11 clases de estrategia probadas · Tema 4: Deflated Sharpe 0.010, la prueba que descuenta la suerte

Estado del guion: **BORRADOR — pendiente de aprobación**
Tema 4 de 4 del experimento #50. Qué aporta frente a los otros temas: el tema 1 resume las 11 clases y el triple test; este explica a fondo una sola de las tres puertas, el Deflated Sharpe, con las cifras de la ficha (#50), las del experimento #38 que lo calcula y las del laboratorio (#81).
Estado del experimento: **murió** (No sirvió: ninguna de las 11 clases pasa el triple test; el experimento no opera nada propio, resume el programa) · Serie: G ("Construyendo un bot, y por qué murió") · Relacionado: #38, #40, #81
Datos usados: `experiments.json` (v=50: verdict, analysis, notes, metrics, kpis; v=38: verdict, analysis, notes, metrics, kpis, params_view; v=81: verdict, metrics, chart.bars), `exp_details.json` (v50: algo, filters; v38: algo, filters; v81: algo, filters) y la tabla «Con tu capital» (`docs/youtube/*-capital.md`) (fila #50).

## Títulos (3 opciones)
1. Deflated Sharpe 0.010: la prueba que descuenta la suerte
2. 40 intentos: el Sharpe del azar es 0.464. El mío, −0.03
3. Por qué probar muchas estrategias inventa ganadoras falsas

## Miniatura (1280×720)
Fondo `#09090b`. Una fila de monedas en el aire, una de ellas dorada y señalada con un círculo. Texto enorme rojo `#e11d2a`: "¿SUERTE?". Texto pequeño blanco: "0.95 EXIGIDO". Logo ATLAS esquina superior derecha. (No repite el título 1.)

---

## VIDEO LARGO (16:9, ≈ 5 min)

**[0:00 — Gancho]** (pantalla: tres cifras: 0.464, −0.03 y 0.010)
Si pruebas 40 estrategias sin ninguna ventaja real, la mejor de las 40 parecerá buena. El Sharpe que se esperaría solo por azar es de 0.464. El de mi mejor configuración ejecutable: −0.03. Y el Deflated Sharpe, la prueba que descuenta la suerte, da 0.010. Se exige 0.95.
> BOCETO: tres cifras que entran con tick: "0.464 · AZAR" (gris), "−0.03 · MÍO" (rojo), "0.010 / 0.95" (rojo sobre una barra casi vacía); sacudida de pantalla en el 0.010. Subtítulo karaoke con "SUERTE" en rojo.

**[0:20 — De qué experimento hablamos]** (pantalla: rótulo con el número y el nombre)
Este es el experimento #50 de ATLAS Lab: Cierre: 11 clases de estrategia probadas. Todos los resultados están en la página del experimento.
> BOCETO: rótulo "EXPERIMENTO #50 · Cierre: 11 clases de estrategia probadas" con whoosh.

**[0:35 — Primero, el Sharpe]** (pantalla: balanza ganancia / riesgo)
El Sharpe mide cuánta ganancia obtienes por cada unidad de riesgo. Positivo es bueno, cero es neutro, negativo dice que perdiste dinero por cada unidad de riesgo. Un Sharpe alto parece una prueba de talento. El problema aparece cuando se llegó a él probando muchas veces.
> BOCETO: balanza con "ganancia" a un lado y "riesgo" al otro; el cociente como número que sube o baja.

**[0:55 — La sala de las monedas]** (pantalla: una sala llena de personas lanzando monedas)
Imagina una sala llena de gente lanzando monedas. Quien saque más caras parecerá un experto en monedas, y no sabe nada: solo había mucha gente lanzando. Con las estrategias pasa igual. Si pruebas muchas configuraciones, la mejor mostrará un buen Sharpe aunque todas sean ruido. Por eso un Sharpe alto no se puede juzgar sin saber cuántas ideas se probaron antes.
> BOCETO: ilustración rotulada (no es dato real): decenas de siluetas lanzando monedas; la que tiene más caras se ilumina con el rótulo "parece experta"; texto "CUÁNTAS PROBASTE".

**[1:25 — Qué hace el Deflated Sharpe]** (pantalla: tres ajustes)
El Deflated Sharpe, de Bailey y López de Prado, hace tres ajustes. Calcula cuál sería el mejor Sharpe esperado solo por azar entre N intentos. Mide la probabilidad de que el Sharpe observado lo supere. Y ajusta por la asimetría y la curtosis de los retornos: si las ganancias y las pérdidas son parejas o hay golpes grandes hacia un lado, y qué tan frecuentes son los días extremos. El resultado es una probabilidad. Por encima de 0.95 se considera ventaja real.
> BOCETO: tres tarjetas (N intentos · probabilidad de superar el azar · asimetría y curtosis) que entran con whoosh; una escala de 0 a 1 con la marca 0.95 en verde.

**[2:00 — Con los números de la ficha]** (pantalla: cifras del #38 y del #50)
Los números, de la configuración ejecutable con la señal de ayer, entre 2007 y 2024. El Sharpe observado: −0.03. Con 40 intentos y 5,609 días de datos, el mejor Sharpe que daría el azar es de 0.464. El Deflated Sharpe: 0.010. Muy lejos de 0.95. El Sharpe observado ni siquiera llega a lo que el azar produce.
> BOCETO: barra del Sharpe observado (−0.03, roja) contra la barra del azar (0.464, gris); debajo la barra DSR 0.010 contra la meta 0.95; datos de #38 con la etiqueta "5,609 días · N = 40".

**[2:25 — ¿Y si fueron 20 o 91?]** (pantalla: tres valores de N)
El número de intentos, 40, es una estimación, no un conteo exacto. Por eso se recalcula: con 20 intentos, el Deflated Sharpe es de 0.020. Con 91, de 0.004. En los tres casos, lejos de 0.95. La conclusión no depende del número exacto, y se nota la dirección: a más intentos, menos evidencia.
> BOCETO: tres barras (N = 20 → 0.020 · N = 40 → 0.010 · N = 91 → 0.004) que encogen con tick; marca de 0.95 muy arriba.

**[2:50 — La versión industrial: 33,363]** (pantalla: embudo del laboratorio, experimento 81)
En el laboratorio automático del experimento 81 se probaron 33,363 estrategias en una noche. El Deflated Sharpe se calculó con el contador global de 33,363 intentos. Ninguna lo superó: el máximo fue 0.31, de 0.95 necesarios. La ficha lo resume bien: minar miles de estrategias garantiza falsos positivos, y solo el ajuste por pruebas múltiples los caza.
> BOCETO: barras reales del `chart.bars` de #81 (33,363 · 5,252 · 4,566 · 2,631 · 1,360 · 0 · 0); la barra del Deflated Sharpe en 0 con el máximo 0.31 anotado.

**[3:20 — Con tu capital]** (pantalla: tarjeta "Con tu capital")
Con $100,000, la configuración termina en −$7,102. Comprar y esperar su cesta, de mayo de 2007 a diciembre de 2024, +$68,723. Es lo que pasó en la simulación, no una promesa.
> BOCETO: tarjeta de capital con la cifra roja (−$7,102) y la verde de referencia (+$68,723).

**[3:35 — Lo que falta]** (pantalla: aviso ámbar)
Dos advertencias. Una: el Deflated Sharpe solo se calculó para esta configuración. En los experimentos 42 a 49 no se calculó: algunos murieron antes por las reglas de la prop firm y el 44 es un paso de datos. Dos: el 40 es una estimación. Una conclusión que cambia si cambias el número de intentos sería débil; esta no cambia.
> BOCETO: lista ámbar: "DSR solo para la configuración ejecutable", "DSR no calculado en #42–#49", "N = 40 estimado"; marca ✓ en "la conclusión se mantiene con N = 20 y N = 91".

**[4:00 — La pregunta que cambia todo]** (pantalla: una sola pregunta)
La pregunta que cambia cómo lees cualquier backtest es una: ¿cuántas versiones probaste antes de esta? Si la respuesta es «una», el Sharpe vale más. Si es «no sé» o «muchas», necesitas algo como el Deflated Sharpe para saber si lo que ves es una habilidad o una moneda con suerte.
> BOCETO: texto grande en la zona segura: "¿CUÁNTAS PROBASTE ANTES?"; monedas de fondo a baja opacidad.

**[4:25 — Ficha del experimento #50]** (pantalla: tarjeta con la URL)
Ficha del experimento 50. Estado: murió, ninguna de las 11 clases pasa el triple test. Cifra clave: Deflated Sharpe de 0.010 contra 0.95, con un Sharpe de −0.03 y −7.1% en 2007–2024. Filtro que decidió: el Deflated Sharpe. Lección: sin contar los intentos, un buen Sharpe puede ser suerte. Revísalo completo en atlas-lab-one.vercel.app/e/50.
> BOCETO: tarjeta "FICHA · EXPERIMENTO #50" con Estado · Cifra clave · Filtro que decidió · Lección, y la URL `atlas-lab-one.vercel.app/e/50` en grande.

**[4:50 — Cierre]**
Contenido educativo, no es asesoría financiera. El trading no se promete: se prueba.
> BOCETO: fundido a la frase de marca en blanco sobre negro; logo ATLAS.

---

## SHORT (9:16, ≈ 44 s) — "La moneda con suerte"
Título del Short: El Sharpe del azar: 0.464. El mío: −0.03 #Shorts

**[0-3 s]** "Prueba 40 estrategias y la mejor parecerá buena. El azar da Sharpe de 0.464."
> BOCETO: B-roll vertical de monedas/bolsa con overlay 0.6; "0.464 · AZAR" en grande; una moneda dorada que gira; golpe de bajo y sacudida.

**[3-14 s]** "Como una sala llena de gente lanzando monedas: la que saque más caras parecerá experta. No sabe nada: había mucha gente."
> BOCETO: sala de siluetas lanzando monedas; una se ilumina. Ken Burns hacia dentro.

**[14-27 s]** "Mi mejor configuración ejecutable: Sharpe de −0.03. Deflated Sharpe: 0.010. Se exige 0.95. Con 20 intentos, 0.020. Con 91, 0.004."
> BOCETO: barras 0.464 (gris) y −0.03 (roja); luego tres barras de N con tick; flash al cambio de escena.

**[27-36 s]** "En el laboratorio, 33,363 estrategias en una noche. El mejor Deflated Sharpe: 0.31. Ninguna llegó a 0.95."
> BOCETO: contador 33,363 → 0 con tick; marca "0.31 / 0.95".

**[36-44 s]** "Antes de creer un Sharpe, pregunta cuántas probaste. Experimento 50 completo en el enlace; el video completo está en el canal. No es asesoría financiera."
> BOCETO: vuelve la moneda dorada (loop con "parecerá buena"); abajo "Experimento #50 completo en el enlace"; texto pequeño "El trading no se promete: se prueba."

---

## Descripción (YouTube) — video largo
https://atlas-lab-one.vercel.app/e/50?utm_source=youtube&utm_medium=video&utm_campaign=exp050-t4
Ficha del experimento #50 (Cierre: 11 clases de estrategia probadas): murió · Deflated Sharpe 0.010 (se exige 0.95) con 40 intentos · Sharpe −0.03 · −7.1% en 2007–2024; el Sharpe esperado solo por azar es 0.464.
Explico qué es el Deflated Sharpe, por qué hay que contar los intentos y qué pasó con 20 intentos (0.020), 91 (0.004) y las 33,363 estrategias del laboratorio (máximo 0.31).
Contenido educativo. No es asesoría financiera ni recomendación de inversión.

## Descripción (YouTube) — Short
https://atlas-lab-one.vercel.app/e/50?utm_source=youtube&utm_medium=short&utm_campaign=exp050-t4
Experimento #50 (Cierre: 11 clases de estrategia probadas): murió · Deflated Sharpe 0.010 contra 0.95 exigido · Sharpe del azar 0.464 contra −0.03. Video completo en el canal. No es asesoría financiera.

## Capítulos
0:00 Gancho · 0:20 De qué experimento hablamos · 0:35 Primero, el Sharpe · 0:55 La sala de las monedas · 1:25 Qué hace el Deflated Sharpe · 2:00 Con los números de la ficha · 2:25 ¿Y si fueron 20 o 91? · 2:50 La versión industrial: 33,363 · 3:20 Con tu capital · 3:35 Lo que falta · 4:00 La pregunta que cambia todo · 4:25 Ficha del experimento #50 · 4:50 Cierre

## Etiquetas
Deflated Sharpe, Sharpe ratio, pruebas múltiples, sobreajuste, backtest, López de Prado, falsos positivos, validación de estrategias, trading con datos, ATLAS Lab, estadística, trading algorítmico

## Rúbrica (autoevaluación, escala 1-5)
| Criterio | Nota | Por qué |
|---|---|---|
| hook_0_3s | 4 | Premisa contraintuitiva con la cifra 0.464 en pantalla y en voz |
| ritmo | 4 | Cifras, monedas y barras cambian cada 2–3 s; los bloques conceptuales duran más |
| promesa_cumplida | 5 | Promete explicar el DSR con cifras y lo hace con #50, #38 y #81 |
| potencial_loop | 4 | El final vuelve a la moneda dorada y a «parecerá buena» |
| claridad_no_traders | 4 | Usa la sala de monedas para explicar pruebas múltiples; define Sharpe, asimetría y curtosis |
| honestidad_atlas | 5 | Declara que el 40 es estimado, que el DSR no se calculó en #42–#49 y que la conclusión no cambia con 20 o 91 |
| audio | 4 | Voz por clonar; un golpe de bajo |
| cta | 4 | Una petición (la ficha en la web) y remite al video completo |
Promedio: **4.25** (≥ 4.0). Hook del Short 4 (≥ 4) y honestidad 5: no descalificado.

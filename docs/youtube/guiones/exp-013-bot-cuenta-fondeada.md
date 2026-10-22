# Experimento #13 — Bot ATLAS: simulación en cuenta fondeada

Estado del guion: **BORRADOR — pendiente de aprobación**
Estado del experimento: **murió**
Serie: G (Construyendo un bot, y por qué murió)
Datos usados: `experiments.json` (v=13: description, params, metrics, kpis, analysis, verdict, notes, capital, period), `exp_details.json` (algo, filters), `series/20260607_214022_bot-atlas-paper-run-funded-v13.json` (curva 1 = bot, curva 2 = sin reglas de prop firm, curva 3 = comprar y esperar) y la tabla «Con tu capital» de docs/youtube (fila 13). Se citan #11 y #12 solo por sus valores esperados. Las cifras con 10,000 dólares son las de la tabla de 100,000 divididas entre 10.
Nota de datos: el script exacto de esta versión no se conserva (lo dice `exp_details`); el guion lo declara. El motor del bot no descuenta costos de operación.

## Títulos (3 opciones)
1. Mi bot de trading duró 313 días: el COVID lo apagó el 12 de marzo de 2020
2. Probé mi bot en una cuenta fondeada con datos reales: −10.3% y cuenta cerrada
3. Lo que decía la simulación (+$5,919) y lo que pasó en el camino real (313 días)

## Miniatura
Fondo negro de la marca. Texto gigante: «313 DÍAS» (blanco; «DÍAS» en rojo de marca). Debajo, la curva real de la serie 1 subiendo y cortándose en seco en una raya vertical roja con «12-MAR-2020». A un lado, un icono de robot apagado. Logo ATLAS esquina inferior derecha.

---

## VIDEO LARGO (16:9, ≈ 4:53 min — 4–6 min: experimento de una sola idea y pocas cifras)
Ritmo visual: algo cambia en pantalla cada 2-3 s; b-roll real detrás, Ken Burns alterno, subtítulos karaoke, whoosh + flash en cada corte, golpe de bass solo en el momento clave.

**[0:00 — Gancho]** (pantalla: contador «313 días» y raya roja)
Mi bot duró 313 días. El 12 de marzo de 2020, en pleno COVID, se apagó solo, porque la cuenta tocó el límite de pérdida. Era el primer bot listo para operar, con las reglas de una cuenta fondeada, y lo probé sobre el camino histórico real. Las simulaciones daban un valor esperado positivo. La realidad dio −10.3%. En este video vemos el bot, el camino real y lo que la simulación no vio.
> Boceto: contador de días hasta 313; la curva real (series, curva 1) sube y se corta con raya roja y sacudida de pantalla; texto «Apagado por el bot».

**[0:31 — El bot]** (pantalla: esquema del bot con 15 instrumentos)
Es una cartera solo de compras sobre 15 instrumentos: siete divisas, oro y plata, cuatro índices y dos petróleos. Reparte el riesgo por paridad: más peso a lo tranquilo, menos a lo nervioso, según la volatilidad de los últimos 60 días, calculada con datos hasta ayer. Apalancamiento fijo ×2. Y las reglas de una cuenta fondeada: pérdida máxima de 5% en un día y caída máxima de 10% sobre el saldo inicial. Si se violan, el bot se apaga, igual que lo haría la empresa de fondeo al cerrarte la cuenta. Es, en esencia, el negocio de los experimentos 9 a 12 convertido en un bot que opera día a día.
> Boceto: rejilla con los 15 símbolos de `params.instrumentos`; tarjeta `params_view` (×2 · vol 60 d · drawdown 10% · pérdida diaria 5%); candado rojo que cierra al violarse una regla.

**[1:16 — Cómo lo probé]** (pantalla: Monte Carlo contra camino real)
Hasta aquí, los experimentos 9 a 12 eran simulaciones: remuestreos de datos. Esta vez no. Es un solo camino histórico real, día a día, de 2019 a 2024, y cada día el bot solo ve datos hasta el día anterior; los pesos se calculan con esa información, nunca con la del propio día. Es como jugar una partida una sola vez, sin repeticiones: la historia ocurrió así y punto. Dos advertencias: el motor del bot no descuenta costos de operación, y el script exacto de esta versión no se conserva; está documentado, pero no puedo mostrarte el código.
> Boceto: dos paneles: izquierda caminos de Monte Carlo (muchas líneas), derecha una sola línea real; etiqueta «un solo camino real». Checklist de `filters`: pesos con datos hasta t−1 ✓; costos «no aplicado» en gris.

**[1:56 — Resultado]** (pantalla: tarjetas KPI)
El bot operó 313 días. Se apagó el 12 de marzo de 2020 por tocar el límite de caída. Retorno total: −10.3%. Sharpe: −0.95. Y la caída máxima desde su punto más alto: −15.3%. En 2020, antes del golpe, la cuenta llevaba ganancias; la historia no empieza mal, termina mal. Y termina antes de que podamos saber qué habría pasado después, porque la cuenta se cierra.
> Boceto: `kpis` en cascada (retorno −10.3%, Sharpe −0.95, drawdown −15.3%, días operados 313, apalancamiento ×2); la curva real con el punto de corte marcado en rojo.

**[2:24 — ¿10.3% o 15.3%?]** (pantalla: curva con pico y valle)
La diferencia importa. El límite es del 10% sobre el saldo inicial, y la cuenta cerró en −10.3% respecto al inicio: ahí se activó la regla. Pero antes había llegado a un máximo en enero de 2020, y desde ese punto la caída fue de −15.3%. El mercado sube, el bot gana, y luego devuelve todo y más. Para una empresa de fondeo, lo que importa es el saldo inicial; para ti, lo que duele es la distancia desde tu mejor momento.
> Boceto: la curva con el pico de enero de 2020 marcado («máximo») y la caída hasta el corte; dos cotas: «−15.3% desde el máximo» y «−10.3% sobre el saldo inicial (límite 10%)».

**[2:57 — Por qué la simulación no lo vio]** (pantalla: simulación contra realidad)
En el experimento 11, la simulación daba +5,919 dólares por intento, y en el 12, +3,414 en la ventana del COVID. El motivo de la diferencia: el Monte Carlo no reproducía un desplome sostenido y correlacionado entre activos. En marzo de 2020 muchos activos cayeron a la vez, y a ×2 eso bastó. Al barajar bloques de días, el simulador no reproduce semanas seguidas de caídas simultáneas. La teoría sobrevivía; la realidad no.
> Boceto: a la izquierda «Simulación COVID: +$3,414» en verde; a la derecha «Camino real: cuenta apagada» en rojo; flecha entre ambos con «correlación».

**[3:28 — Con tu capital]** (pantalla: tarjeta «Con tu capital» con aviso)
Con 10,000 dólares serían menos 1,006 para el bot, frente a menos 1,156 de comprar y esperar en las mismas fechas: el mercado también cayó. Con 100,000, la tabla de ATLAS da menos 10,056 contra menos 11,558. La curva se detiene el 12 de marzo de 2020, porque la cuenta se cierra ese día; la línea «sin reglas de prop firm» muestra cómo habría seguido, pero es hipotética, porque en la realidad no hay cuenta que siga.
> Boceto: tarjeta de capital con aviso ámbar; curva 1 cortada en rojo, curva 2 punteada hipotética continuando hasta 2024 y curva 3 gris; selector $10,000 / $100,000.

**[3:59 — La lección]** (pantalla: texto)
Antes de arriesgar dinero hay que probar el camino real, no solo simulaciones. Un Monte Carlo puede decirte que el negocio es positivo en promedio; el camino real te dice si tu cuenta sobrevive a la peor semana. Y las reglas de una cuenta fondeada no perdonan la peor semana: una vez que cruzas el límite, no hay promedio que te rescate.
> Boceto: dos columnas «Simulación» y «Camino real», con el camino real en rojo.

**[4:25 — Conclusión y cierre]**
Veredicto: no sirvió. A ×2 la cuenta reventó en el COVID con −10.3%, Sharpe de −0.95 y una caída de −15.3% desde el máximo. En el siguiente experimento intento protegerme con un ajuste por volatilidad, y verás que la idea suena mejor de lo que funciona. Todos los datos en atlas-lab-one.vercel.app, experimento 13. Contenido educativo, no es asesoría financiera. El trading no se promete: se prueba.
> Boceto: sello ✕ rojo sobre «313»; frase de marca, logo y URL.

---

## SHORT (9:16, ≈ 47 s)
Fórmula visual: b-roll vertical + overlay oscuro 0.6, Ken Burns alternando in/out, subtítulos karaoke en MAYÚSCULAS con las cifras en rojo, whoosh + flash en cada corte, golpe de bass + sacudida solo en el 0-3 s; ticker arriba.

**[0-3 s]** «Mi bot de trading duró 313 días.»
> Boceto: texto gigante «313 DÍAS»; contador hasta 313 con tic de reloj y corte seco en rojo con sacudida; b-roll de bolsa en caída, Ken Burns «in».
**[3-12 s]** «Era una cartera de 15 mercados, apalancada ×2, con las reglas de una cuenta fondeada: si la cuenta cae más de 10% del saldo inicial, se cierra.»
> Boceto: rejilla de 15 símbolos; candado con «10%»; Ken Burns «out»; karaoke con «SE CIERRA» en rojo.
**[12-24 s]** «La probé sobre el camino histórico real de 2019 en adelante, no en una simulación. El 12 de marzo de 2020, por el COVID, tocó el límite. Retorno de −10.3% y Sharpe de −0.95.»
> Boceto: curva real cortada en rojo; dos cifras −10.3% y −0.95; whoosh y flash blanco.
**[24-36 s]** «Desde su máximo, la caída fue de −15.3%. Y mi simulación de Monte Carlo había dado un valor esperado positivo, hasta de +3,414 dólares en la ventana del COVID.»
> Boceto: cota «−15.3% desde el máximo» sobre la curva; cifra verde «+3,414» que se agrieta; Ken Burns «in».
**[36-47 s]** «Antes de arriesgar dinero hay que probar el camino real, no solo simulaciones. La teoría sobrevivía; la realidad no. Mi bot duró 313 días. El video completo está en el canal. No es asesoría financiera.»
> Boceto: vuelve «313 DÍAS» con un sello ✕ (loop con el gancho); texto «Video completo en el canal» y logo.

## Descripción (YouTube)
Primer bot listo para operar de ATLAS: cartera solo de compras con paridad de riesgo sobre 15 instrumentos, ×2 y reglas de cuenta fondeada, probada sobre el camino histórico real (2019-2024). El 12 de marzo de 2020 (día 313) la cuenta tocó el límite: retorno −10.3%, Sharpe −0.95, caída desde el máximo −15.3%. La simulación Monte Carlo no reproducía un desplome correlacionado.
Todos los datos: https://atlas-lab-one.vercel.app (experimento #13)
Contenido educativo. No es asesoría financiera ni recomendación de inversión.

Capítulos: 0:00 Gancho · 0:31 El bot · 1:16 Cómo lo probé · 1:56 Resultado · 2:24 ¿10.3% o 15.3%? · 2:57 Por qué la simulación no lo vio · 3:28 Con tu capital · 3:59 La lección · 4:25 Conclusión y cierre

Etiquetas: bot de trading, cuenta fondeada, prop firm, COVID 2020, paridad de riesgo, drawdown, apalancamiento, backtest, camino real, gestión de riesgo, ATLAS Lab, trading con datos

## Rúbrica (autoevaluación, 1–5)
| Criterio | Short | Largo |
|---|---|---|
| hook_0_3s | 5 | 4 |
| ritmo | 4 | 4 |
| promesa_cumplida | 5 | 5 |
| potencial_loop | 5 | 4 |
| claridad_no_traders | 4 | 4 |
| honestidad_atlas | 5 | 5 |
| audio | 4 | 3 |
| cta | 4 | 4 |
| **Promedio** | **4.50** | **4.13** |

Notas: el gancho «313 días» es narrativo y numérico a la vez (se entiende sin jerga). Se publica mejor tras #11 y #12. El Short cumple hook ≥ 4 y honestidad 5.

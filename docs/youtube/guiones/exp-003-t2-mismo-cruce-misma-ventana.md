# Experimento #3 — Tema 2: ¿mejoró la IA al cruce de medias? Misma señal, misma ventana

Tema 2 de 4 del experimento #3
Qué aporta frente a los otros temas: el tema 1 cuenta el resultado del meta-etiquetado (−19.0%) y avisa de que el periodo es distinto al de la línea base; este resuelve esa duda con una comparación justa: la curva del #0 recortada a las mismas fechas (16-mar-2023 a 31-dic-2024), donde el cruce de medias solo cae −5.2% frente a −19.0% con la IA. El tema 3 explica el meta-etiquetado y el tema 4 compara las tres IAs.
Estado del guion: **BORRADOR — pendiente de aprobación**
Estado del experimento: **murió** · Serie D (Machine learning en trading) · 1 largo + 1 Short
Datos usados: `experiments.json` (v=3: metrics, kpis, params, verdict; v=0: kpis), `series/20260607_144908_baseline-sma-20-50.json` (curva 1 recortada a la ventana del #3: de 11,384 el 16-mar-2023 a 10,789 el 31-dic-2024, es decir −5.2%; caída máxima en la ventana −14.8%) y tabla «Con tu capital» de docs/youtube (fila 3). El recorte es un cálculo sobre la curva publicada del #0, y el guion lo dice.
Producción: b-roll real con overlay oscuro 0.6, Ken Burns alterno, subtítulos karaoke en MAYÚSCULAS con cifras en rojo, golpe de bajo solo en 1–2 momentos. Rojo `#e11d2a`, verde `#22c55e`, fondo `#09090b`.

## Títulos (3 opciones)
1. ¿La IA mejoró al cruce de medias? En la misma ventana: −5.2% solo, −19.0% con IA
2. Misma señal, misma ventana: SMA 20/50 con y sin machine learning (2023-2024)
3. Comparación justa: el cruce de medias contra su versión con filtro XGBoost

## Miniatura
Fondo negro `#09090b`. Dos barras horizontales enfrentadas: «SOLO −5.2%» (gris-rojo) y «CON IA −19.0%» (rojo intenso, mucho más larga). Texto grande: «¿AYUDÓ LA IA?» (3 palabras). Logo ATLAS esquina inferior derecha.

---

## VIDEO LARGO (16:9, ≈ 4:31 min)

**[0:00 — Gancho]** (pantalla: dos barras enfrentadas)
En la misma ventana de tiempo, el cruce de medias solo perdió menos 5.2%. Con una inteligencia artificial decidiendo cuándo operar, menos 19.0%. ¿Ayudó la IA?
> Boceto: dos barras que crecen hacia abajo: la corta («solo −5.2%») y la larga («con IA −19.0%»); sacudida al llegar a −19.0%. Ken Burns «in».

**[0:12 — Qué experimento es]** (pantalla: rótulo con el número y el nombre)
Este es el experimento #3 de ATLAS Lab: meta-etiquetado con ML, SMA más XGBoost. Todos los resultados están en la página del experimento. Hoy lo comparo con la línea base, el experimento 0.
> Boceto: rótulo «EXPERIMENTO #3 · Meta-etiquetado SMA + XGBoost» junto a «#0 Línea base SMA 20/50»; URL pequeña. kb=out.

**[0:26 — La pregunta]** (pantalla: cruce de medias y un filtro)
El experimento 3 toma la señal del cruce de medias, la de 20 y 50 velas del experimento 0, y le pone un modelo de machine learning encima que decide si tomar cada cruce. La pregunta es natural: ¿lo hace mejor que el cruce solo? El primer video de este experimento avisaba de que no se podía comparar de forma directa, porque los periodos eran distintos. Aquí lo resuelvo.
> Boceto: velas con flechas del cruce; un embudo que deja pasar unas y bloquea otras; texto «¿Mejor que sin filtro?». kb=in.

**[0:55 — Cómo se hace una comparación justa]** (pantalla: dos líneas de tiempo)
El experimento 0 cubre de 2019 a 2024. El experimento 3 solo opera de marzo de 2023 a diciembre de 2024, la parte que el modelo nunca vio. Para comparar, recorto la curva del experimento 0 a esas mismas fechas, del 16 de marzo de 2023 al 31 de diciembre de 2024, y miro cuánto cambió su cuenta en ese tramo. Es un cálculo sobre la curva publicada, no un experimento nuevo.
> Boceto: dos barras de tiempo, 2019-2024 y mar-2023→dic-2024; un recorte tijera sobre la curva del #0 con el tramo resaltado. kb=out.

**[1:27 — El cruce solo]** (pantalla: curva recortada)
En ese tramo, el cruce de medias solo pasa de 11,384 dólares a 10,789: menos 5.2%. En el camino llega a 12,461 el 3 de enero de 2024 y su peor caída dentro de la ventana es de menos 14.8%. Comprar y esperar el euro, en esas fechas, pierde menos 2.2%. Es decir: el cruce solo ya perdió más que el mercado, pero no mucho.
> Boceto: curva real del #0 recortada, con puntos «11,384 · 16-mar-2023», «12,461 · 3-ene-2024», «10,789 · fin»; curva gris de comprar y esperar −2.2%. Nota: «cálculo sobre la curva de la serie». kb=in.

**[1:58 — Con la IA]** (pantalla: curva del #3)
Con la IA: 1,173 operaciones, 41.8% de ganadoras, un factor de beneficio de 0.71 y 1,474 dólares en costos. La cuenta de 10,000 termina en 8,096: menos 19.0%, y su peor caída es de menos 20.1%. Su Sharpe, que es la ganancia por unidad de riesgo, es menos 3.28. Es decir, en esta ventana el cruce con filtro perdió más del triple que el cruce solo.
> Boceto: tarjetas KPI del #3 en cascada; las dos barras de la miniatura una al lado de la otra con «−5.2%» y «−19.0%». kb=out.

**[2:31 — Lo que no es idéntico]** (pantalla: dos reglas de salida)
Ahora, la honestidad. No es una comparación perfecta. En el experimento 0, la estrategia sale cuando las medias se cruzan en sentido contrario; siempre está dentro del mercado. En el experimento 3, cada operación se cierra con la regla de la triple barrera: ganancia o pérdida a 2 ATR, o un límite de 24 horas. Por eso opera más veces. No puedo separar cuánto del peor resultado se debe al filtro de la IA y cuánto a esa forma de salir: el experimento no lo mide.
> Boceto: dos esquemas: «salida por cruce contrario» y «salida por barreras 2 ATR / 24 h»; cartel ámbar «no separa filtro y salida». kb=in.

**[3:07 — Qué sí sabemos]** (pantalla: checklist)
Lo que sí sabemos: el filtro no se distingue del azar, con un p de 0.48 y un PSR de 0.51, y no le gana ni al cruce solo ni a comprar y esperar. En esta ventana, añadir machine learning no mejoró nada. Es una versión más de la lección: filtrar una señal sin ventaja no crea ventaja.
> Boceto: checklist: p = 0.48 ✗, PSR = 0.51 ✗, vs. cruce solo ✗, vs. comprar y esperar ✗; Deflated Sharpe «no aplicado» en gris. kb=out.

**[3:31 — Con tu capital]** (pantalla: tarjeta «Con tu capital»)
Con 10,000 dólares puestos el 16 de marzo de 2023, el cruce solo habría terminado en 9,477; la versión con IA, en 8,096; y comprar y esperar, en 9,775. Con 100,000, la tabla de ATLAS da menos 19,037 para la IA contra menos 2,237 de comprar y esperar.
> Boceto: tres cifras en barras: 9,477 (gris), 8,096 (rojo), 9,775 (gris claro); tarjeta con la cifra de 100,000. Nota: «9,477 = cálculo sobre la curva del #0».

**[3:56 — Ficha del experimento #3]** (pantalla: tarjeta con la URL)
Ficha del experimento 3. Estado: murió. Cifra clave: menos 19.0% fuera de muestra, contra menos 5.2% del cruce solo en la misma ventana y menos 2.2% de comprar y esperar. Filtros que decidieron: costos, prueba de azar con p de 0.48 y PSR de 0.51. Lección: filtrar ruido sigue dando ruido. Revísalo completo en atlas-lab-one.vercel.app/e/3.
> Boceto: tarjeta oscura con «#3 · MURIÓ», cifras clave y «atlas-lab-one.vercel.app/e/3» en grande; logo.

**[4:23 — Cierre]**
Todos los datos en atlas-lab-one.vercel.app, experimento 3. Contenido educativo, no es asesoría financiera. El trading no se promete: se prueba.
> Boceto: pantalla oscura con la frase de marca.

---

## SHORT (9:16, ≈ 45 s)

**[0-3 s]** «Cruce solo: −5.2%. Con una IA encima: −19.0%.»
> Boceto: dos barras, la corta y la larga; «−19.0%» con sacudida; b-roll de pantallas de bolsa, Ken Burns «in», overlay 0.6.

**[3-14 s]** «Tomé la curva del cruce de medias SMA 20/50 y la recorté a las mismas fechas que la IA: del 16 de marzo de 2023 al 31 de diciembre de 2024.»
> Boceto: curva larga que se recorta con tijera al tramo; Ken Burns «out»; karaoke con «MISMAS FECHAS» en rojo.

**[14-26 s]** «Ahí, el cruce solo pasa de 11,384 a 10,789 dólares. La IA hizo 1,173 operaciones y quedó en 8,096. Comprar y esperar perdió −2.2%.»
> Boceto: tres cifras en barras (10,789 gris, 8,096 rojo, comprar y esperar −2.2% gris claro); whoosh y flash blanco.

**[26-38 s]** «El filtro tuvo un p de 0.48 y un PSR de 0.51: no se distingue del azar. Ojo: las salidas son distintas, así que no separo filtro y salida.»
> Boceto: moneda con «p = 0.48»; cartel ámbar de la limitación; Ken Burns «in».

**[38-45 s]** «Añadir machine learning no mejoró nada. Experimento tres completo en el enlace. El video completo está en el canal. No es asesoría financiera.»
> Boceto: vuelven las dos barras (loop con el gancho); texto «Experimento #3 completo en el enlace» y logo.

---

## Descripción de YouTube (video largo)
https://atlas-lab-one.vercel.app/e/3?utm_source=youtube&utm_medium=video&utm_campaign=exp003-t2
Ficha del experimento #3 (meta-etiquetado SMA + XGBoost): estado murió · −19.0% fuera de muestra (comprar y esperar: −2.2%) · Sharpe −3.28 · p de azar 0.48 · PSR 0.51.
Comparo el cruce de medias SMA 20/50 solo (curva del experimento #0 recortada del 16-mar-2023 al 31-dic-2024: −5.2%) con la versión filtrada por XGBoost (−19.0%) y explico por qué la comparación no es perfecta (las salidas son distintas).
Contenido educativo. No es asesoría financiera ni recomendación de inversión.

## Descripción del Short
https://atlas-lab-one.vercel.app/e/3?utm_source=youtube&utm_medium=short&utm_campaign=exp003-t2
Experimento #3 · murió · cruce solo −5.2% frente a −19.0% con IA en las mismas fechas. No es asesoría financiera.

Capítulos: 0:00 Gancho · 0:12 Qué experimento es · 0:26 La pregunta · 0:55 Cómo se hace una comparación justa · 1:27 El cruce solo · 1:58 Con la IA · 2:31 Lo que no es idéntico · 3:07 Qué sí sabemos · 3:31 Con tu capital · 3:56 Ficha del experimento #3 · 4:23 Cierre

Etiquetas: meta-etiquetado, cruce de medias móviles, XGBoost, machine learning trading, SMA 20 50, EUR/USD, backtest, fuera de muestra, comparación de estrategias, inteligencia artificial trading, ATLAS Lab, trading con datos

## Rúbrica (autoevaluación, 1–5)
| Criterio | Short | Largo |
|---|---|---|
| hook_0_3s | 4 | 4 |
| ritmo | 4 | 4 |
| promesa_cumplida | 4 | 4 |
| potencial_loop | 5 | 4 |
| claridad_no_traders | 4 | 4 |
| honestidad_atlas | 5 | 5 |
| audio | 4 | 3 |
| cta | 4 | 4 |
| **Promedio** | **4.25** | **4.00** |

Notas: el −5.2% y el 9,477 son cálculos sobre la curva publicada del #0, no cifras de la ficha; el guion lo dice en pantalla y en el Short. Promesa cumplida en 4 porque no se puede separar el efecto del filtro del de la salida por barreras. El Short cumple hook ≥ 4 y honestidad 5.

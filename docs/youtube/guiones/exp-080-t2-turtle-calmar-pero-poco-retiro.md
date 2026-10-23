# Experimento #80 — Tema 2: el mejor Calmar (Turtle, 0.56) no es el que más retiro sostiene

Tema 2 de 4 del experimento #80 · Qué aporta frente a los otros temas: es la comparación de los cuatro contendientes. Muestra que ordenar por Calmar y ordenar por retiro sostenible da dos rankings exactamente opuestos (el tema 1 se centra en B3 contra comprar y esperar; el tema 3 en la letra pequeña del 2x; el tema 4 en Calmar contra Sharpe).
Estado del guion: **BORRADOR — pendiente de aprobación**
Estado del experimento: **parcial** (la exposición por tendencia B3 rinde casi igual que comprar y esperar con menos caída, pero es beta gestionada, no ventaja) · Serie E — «Gestión de riesgo: lo poco que se sostuvo» (plan-series.md) · 1 largo + 1 Short
Datos usados: `experiments.json` (v=80: kpis, metrics, verdict, analysis, market, capital, period), `exp_details.json` (extra-v80: algo, code, filters), `series/extra-v80.json` (solo 2 curvas: B3 y «Sin estrategia»; Turtle y Faber no tienen curva en la ficha), tabla «Con tu capital» de `docs/youtube`. Las cifras de Turtle y Faber salen del texto de `analysis` y del código de la ficha.
Producción (CLAUDE.md del canal): b-roll real detrás de cada escena con overlay oscuro 0.6, Ken Burns alternando in/out, subtítulos karaoke en MAYÚSCULAS con palabras clave en rojo, un dato visual por escena, golpe de bajo + sacudida solo en 1–2 momentos. Colores: rojo `#e11d2a`, verde `#22c55e`, fondo `#09090b`. Cifras en dígitos aquí; en el campo `tts` del JSON, en palabras.

## Títulos (3 opciones)
1. Calmar 0.56 con caída de solo −7%: ¿sirve para vivir de retiros?
2. Dos rankings opuestos: el mejor Calmar sostiene el 6% y comprar y esperar, el 12.0%
3. Turtle contra comprar y esperar: menos caída, la mitad del retiro

## Miniatura (pensada para el título 1)
Fondo `#09090b`. Dos barras horizontales de la misma estrategia (Turtle): una verde muy larga que dice «Calmar 0.56» y otra roja muy corta que dice «retiro 6%». Texto grande en blanco: «DOS RANKINGS» (2 palabras, sin repetir el título). Logo ATLAS arriba a la derecha.

---

## VIDEO LARGO (16:9, ≈ 6 min)

**[0:00 — Gancho]** (pantalla: dos listas de cuatro nombres que se ordenan y quedan al revés)
Ordena cuatro estrategias por Calmar y gana Turtle, con 0.56 y una caída de apenas −7%. Ordénalas por el retiro anual que sostienen y Turtle queda última: 6%, contra 12.0% de comprar y esperar. Las dos listas son exactamente opuestas.
BOCETO: dos columnas de cuatro tarjetas (Turtle, Faber, B3, comprar y esperar). A la izquierda ordenadas por Calmar; a la derecha se reordenan por retiro y quedan en espejo, con flechas cruzadas. Contadores «0.56» y «6%». kb=in.

**[0:15 — Qué es este experimento]** (pantalla: rótulo con el número y el nombre)
Este es el experimento #80 de ATLAS Lab: Estrategia de ingreso óptima por Calmar (índices + oro). Todos los resultados están en la página del experimento.
BOCETO: rótulo en rojo y blanco «EXPERIMENTO #80» con el nombre debajo, sobre las dos columnas atenuadas (overlay 0.6). Whoosh corto. kb=out.

**[0:25 — Qué mide cada número]** (pantalla: tres definiciones)
Te cuento por qué importa. Una caída máxima, o drawdown, es lo más que baja la cartera desde un punto alto hasta el punto bajo que viene después. El Calmar divide el crecimiento anual entre esa caída: cuánto ganas por cada punto de dolor. Y el retiro anual sostenible es la tasa más alta con la que puedes sacar dinero cada año sin que la cartera se agote y conservando al menos la mitad del capital. Para vivir de retiros, ese último número es el que decide.
BOCETO: tres tarjetas que entran una a una: «Caída máxima = lo más que baja desde un pico», «Calmar = retorno anual ÷ caída máxima», «Retiro sostenible = el mayor % anual que no agota la cartera y conserva ≥ 50%». kb=out.

**[1:15 — Los contendientes]** (pantalla: cinco activos y cuatro estrategias)
Cinco activos, de 2012 a 2024: S&P 500, Nasdaq 100, DAX, FTSE 100 y oro. Cuatro contendientes. Comprar y esperar, sin hacer nada. Faber, que solo está comprado mientras el activo cotiza sobre su media de 200 días. Turtle, un sistema clásico de seguimiento de tendencia que compra rupturas. Y B3, comprar y esperar multiplicado por 2 y por la fracción de activos sobre su media de 200 días, entre 0 y 2 veces. Faber y Turtle pagan 3 puntos básicos de costo, que es una centésima de un por ciento por rotación. B3 no incluye costos. Hay una quinta, la combinación 50/50, de la que la ficha no publica cifras, así que no la comparo.
BOCETO: iconos de los cinco activos y cuatro tarjetas; la de B3 con un pequeño candado ámbar «2x · sin costos». Checklist `filters`: ✓ indicador de tendencia rezagado 1 día; ámbar «costos: Faber y Turtle 3 bps; B3 sin costos».

**[2:10 — Resultados]** (pantalla: tabla animada, una fila por contendiente)
Por Calmar gana Turtle con 0.56, seguido de Faber con 0.45, B3 con 0.43 y comprar y esperar con 0.36. Pero mira cuánto crece cada una al año: Turtle, +4.2%; Faber, +5.5%; B3, +11.2%; comprar y esperar, +11.0%. Y el retiro sostenible: Turtle, 6%; Faber, 7%; B3, 10.0%; comprar y esperar, 12.0%.
| | Crecimiento anual | Caída máxima | Calmar | Retiro sostenible |
|---|---|---|---|---|
| Turtle | +4.2% | −7% | 0.56 | 6% |
| Faber | +5.5% | — | 0.45 | 7% |
| B3 (exposición por tendencia) | +11.2% | −26% | 0.43 | 10.0% |
| Comprar y esperar | +11.0% | −31% | 0.36 | 12.0% |
BOCETO: tabla fila a fila con barras de color. Columna Calmar: Turtle en verde largo, comprar y esperar en gris corto. Columna retiro: al revés. La celda «—» de Faber se muestra en gris con nota «la ficha no publica su caída». Golpe de bajo + sacudida cuando aparece «6%» junto a «12.0%».

**[3:15 — Por qué los rankings se invierten]** (pantalla: texto y dos curvas esquemáticas)
Mi lectura, que no medí: Turtle y Faber salen del mercado cuando la tendencia se rompe. Eso recorta la caída y por eso su Calmar sube. Pero también se pierden buena parte de las subidas, y su crecimiento queda en +4.2% y +5.5%. El Calmar premia la caída pequeña; el retiro sostenible necesita además que la cartera crezca lo bastante para pagar los retiros. Con poca caída y poco crecimiento, el retiro sostenible es bajo. Con mucha caída y mucho crecimiento, como comprar y esperar, el retiro sostenible es alto en este periodo.
BOCETO: dos curvas esquemáticas rotuladas «ilustración»: una plana con valles pequeños (poca caída, poco crecimiento) y otra que sube mucho con valles hondos. Etiqueta gris «razonamiento, no medido» junto al párrafo. kb=in.

**[4:10 — ¿Y B3?]** (pantalla: B3 entre los otros)
B3 queda en medio. Mejora el Calmar de comprar y esperar, 0.43 contra 0.36, con una caída de −26% contra −31%, y conserva el crecimiento: +11.2% contra +11.0%. Pero su retiro sostenible es 10.0%, menor que el 12.0%. Y no mejora el Sharpe, que es la ganancia por unidad de riesgo: 0.67 contra 0.76. Ninguna de las cuatro gana en todo. Por eso el resultado del experimento es parcial.
BOCETO: B3 destacada en el centro de la tabla con tres iconos: ✓ Calmar, ✓ caída, ✗ retiro y Sharpe. Cartel ámbar permanente: «B3: hasta 2x, sin costos ni financiamiento; sin prueba fuera de muestra».

**[4:55 — Con tu capital]** (pantalla: tarjeta de capital con advertencia)
Esta ficha solo trae curva para B3 y para comprar y esperar; Turtle y Faber no tienen curva de capital. Con 100,000 dólares entre 2012 y 2024, B3 gana 297,399 y comprar y esperar gana 286,540. Con 10,000 dólares serían unos +29,740 contra +28,654. Cuidado: la curva de B3 usa hasta 2x y no incluye costos ni el financiamiento de ese apalancamiento; en la vida real sería menor.
BOCETO: curvas reales de `series/extra-v80.json` (B3 verde, «Sin estrategia» blanca, casi pegadas) con contadores finales; cartel ámbar con `capital.note`.

**[5:35 — Conclusión]**
Un Calmar alto significa poca caída por cada punto de retorno, no que puedas retirar más. Para vivir de retiros hay que mirar las dos cosas: la caída y cuánto sostiene la cartera. En este experimento, el mejor Calmar y el mayor retiro sostenible nunca coinciden. El trading no se promete: se prueba.

**[6:05 — Ficha del experimento #80]** (pantalla: tarjeta con la ficha y la URL)
Ficha del experimento #80. Estado: parcial. Cifra clave: Turtle tiene el mejor Calmar, 0.56, pero sostiene un retiro de 6%, contra 12.0% de comprar y esperar. Filtro que decidió: B3 no mejora el Sharpe, 0.67 contra 0.76, ni el retiro sostenible, y no tiene prueba fuera de muestra. Lección: el mejor Calmar no es el mayor retiro. Revísalo completo en atlas-lab-one.vercel.app/e/80.
BOCETO: tarjeta con el número «#80», el sello «PARCIAL» en ámbar, tres líneas (cifra clave, filtro que decidió, lección) y la URL `atlas-lab-one.vercel.app/e/80` grande abajo. kb=in.

**[6:25 — Cierre]**
Todos los datos en atlas-lab-one.vercel.app, experimento 80. Contenido educativo, no es asesoría financiera.

---

## SHORT (9:16, ≈ 47 s)

**[0-3 s]** «El mejor Calmar de las cuatro: 0.56. Y el que menos retiro sostiene.»
BOCETO: «0.56» gigante en verde y debajo «retiro 6%» en rojo, sobre b-roll de gráfico de bolsa (kb=in), overlay 0.6.

**[3-15 s]** «Turtle cae solo −7%. Su Calmar, el retorno entre la caída, es 0.56. Comprar y esperar: 0.36.»
BOCETO: barra verde 0.56 contra barra gris 0.36; ticker arriba (kb=out).

**[15-30 s]** «Pero crece +4.2% al año, contra +11.0%. Y el retiro que sostiene es 6%, contra 12.0%.»
BOCETO: dos pares de cifras; los de Turtle en rojo; golpe de bajo + sacudida en «6%» frente a «12.0%».

**[30-42 s]** «Faber, igual: Calmar 0.45, retiro 7%. Ordena por Calmar y por retiro: las dos listas quedan al revés.»
BOCETO: las dos columnas de cuatro tarjetas que se reordenan en espejo, con tick en cada cambio.

**[42-49 s]** «El video completo está en el canal, y el experimento #80 completo, en el enlace. Menos caída, la mitad del retiro.»
BOCETO: texto final «Video completo en el canal · Experimento #80 completo en el enlace» + pequeño «No es asesoría financiera · El trading no se promete: se prueba». Loop: «la mitad del retiro» responde al «el que menos retiro sostiene» del arranque.

---

## Descripción de YouTube (video largo)
https://atlas-lab-one.vercel.app/e/80?utm_source=youtube&utm_medium=video&utm_campaign=exp080-t2
Ficha del experimento #80: parcial · exposición por tendencia B3 +11.2% anual contra +11.0% de comprar y esperar, caída −26% contra −31% · Calmar de Turtle 0.56 con retiro sostenible de 6%, contra 12.0%.
Comparé cuatro estrategias de ingreso en S&P 500, Nasdaq 100, DAX, FTSE 100 y oro (2012–2024): Turtle tiene el mejor Calmar (0.56, caída de −7%) pero sostiene un retiro de 6% al año, frente a 12.0% de comprar y esperar. Ordenar por Calmar y por retiro sostenible da dos rankings opuestos.
Contenido educativo. No es asesoría financiera ni recomendación de inversión.

## Descripción de YouTube (Short)
https://atlas-lab-one.vercel.app/e/80?utm_source=youtube&utm_medium=short&utm_campaign=exp080-t2
Ficha del experimento #80: parcial · Turtle: Calmar 0.56, retiro sostenible 6% · comprar y esperar: Calmar 0.36, retiro 12.0%.
Contenido educativo. No es asesoría financiera.

## Capítulos
0:00 Gancho · 0:15 Qué es este experimento · 0:25 Qué mide cada número · 1:15 Los contendientes · 2:10 Resultados · 3:15 Por qué se invierten · 4:10 ¿Y B3? · 4:55 Con tu capital · 5:35 Conclusión · 6:05 Ficha del experimento

## Etiquetas
calmar ratio, retiro sostenible, vivir de retiros, turtle trading, faber, media de 200 días, drawdown, comprar y mantener, beta gestionada, backtest, atlas lab, trading con datos

## Rúbrica (autoevaluación, 1–5)
| Pieza | hook_0_3s | ritmo | promesa_cumplida | potencial_loop | claridad_no_traders | honestidad_atlas | audio | cta | Promedio |
|---|---|---|---|---|---|---|---|---|---|
| Largo | 4 | 4 | 5 | 4 | 4 | 5 | 4 | 4 | 4.3 |
| Short | 4 | 4 | 5 | 5 | 4 | 5 | 4 | 4 | 4.4 |

Hook ≥ 4 ✓ · honestidad 5 ✓. Punto débil: Calmar y retiro sostenible son conceptos nuevos para un principiante; se definen en el bloque 0:35 y el Short los resume en una frase. La explicación de por qué se invierten los rankings está rotulada «razonamiento, no medido». El cartel ámbar de B3 es obligatorio en toda escena con su curva.

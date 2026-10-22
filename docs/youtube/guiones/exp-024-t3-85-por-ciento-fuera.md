# Experimento #24 — Régimen supervisado residual · Tema 3: el Sharpe de 0.21 con el 85% de los días fuera

Tema 3 de 3 del experimento #024 · Qué aporta frente a los otros temas: se centra en cómo leer un Sharpe positivo calculado sobre pocos días operados (2007–2013) y en lo que decide cuando el modelo todavía no tiene señal, con el #23 como contraste. Se entiende sin haber visto los otros temas.
Estado del guion: **BORRADOR — pendiente de aprobación**
Estado del experimento: **murió** (veredicto del sitio: «No sirvió») · Serie D — Machine learning en trading: lo que pasó
Datos usados: `experiments.json` (v=24: metrics, kpis, notes, params_view, verdict, period; v=23 para el contraste: notes), `exp_details.json` (claves `…-v24` y `…-v23`: algo, filters), tabla «Con tu capital» (archivo de capital en `docs/youtube/`).
Producción (CLAUDE.md del canal): b-roll real detrás de cada escena con overlay oscuro 0.6, Ken Burns alternando in/out, subtítulos karaoke en MAYÚSCULAS con cifras en rojo, un dato visual por escena, golpe de bajo + sacudida solo en 1–2 momentos. Colores: rojo `#e11d2a`, verde `#22c55e`, fondo `#09090b`.

## Títulos (3 opciones)
1. Sharpe 0.21 con el bot fuera del mercado el 85% de los días
2. ~350 días operados: por qué este Sharpe positivo no prueba nada
3. Dos reglas para cuando no hay señal, dos resultados (experimentos #23 y #24)

## Miniatura (pensada para el título 1)
Fondo `#09090b`. Un eje de tiempo casi todo gris con un tramo corto en verde `#22c55e` al final; encima, «0.21» en blanco y, en rojo `#e11d2a` y Segoe UI Black, «85% FUERA» (dos palabras más el porcentaje, sin repetir los títulos). Logo ATLAS arriba a la derecha.

---

## VIDEO LARGO (16:9, ≈ 4:21 min)

**[0:00 — Gancho]** (pantalla: eje 2007–2013 casi todo gris)
Un Sharpe de 0.21 en 2007 a 2013. Suena a que el bot sobrevivió a la crisis de 2008. Pero estuvo fuera del mercado el 85% de los días.
BOCETO: eje de tiempo gris con un tramo verde corto; contadores «0.21» y «85% fuera». Golpe de bajo al aparecer el 85%.

**[0:15 — Qué es este experimento]** (pantalla: rótulo con el número y el nombre)
Este es el experimento #24 de ATLAS Lab: Régimen supervisado residual. Todos los resultados están en la página del experimento. En este video no hablo de si la IA acertó, sino de cuándo estuvo realmente en el mercado.
BOCETO: rótulo «EXPERIMENTO #24 · Régimen supervisado residual» sobre velas con opacidad 0.12. kb=out.

**[0:31 — Por qué importa 2007–2013]** (pantalla: periodo fuera de muestra)
Primero, por qué ese periodo importa. Fuera de muestra significa datos que el modelo no usó para diseñarse, y 2007 a 2013 incluye la crisis de 2008. Es la prueba que más se parece a un examen sorpresa: si el modelo sirve, debería notarse ahí. El Sharpe es la ganancia por unidad de riesgo, y aquí da 0.21.
BOCETO: eje 2007–2013 con la crisis de 2008 marcada; etiqueta «fuera de muestra: años que el modelo no vio». kb=in.

**[0:57 — El calentamiento]** (pantalla: línea de tiempo con tramos)
Pero el modelo no puede opinar desde el primer día. Se entrena con walk-forward: 750 días de calentamiento, y un umbral que se calcula con el percentil 75 de sus últimos 500 días de probabilidades. Sin señal, la regla es quedarse fuera del mercado. En 2007 a 2013, la señal llega recién el 21 de junio de 2012.
BOCETO: línea de tiempo con un tramo gris largo «sin señal = fuera» y un tramo verde desde 2012-06-21; hito «crisis de 2008» dentro del tramo gris.

**[1:24 — Lo que sale de ahí]** (pantalla: porcentaje de días)
El resultado: el modelo estuvo fuera del mercado el 85% de los días. El Sharpe de 0.21 sale de unos 350 días operados. Eso no pone a prueba al modelo en 2008, porque en 2008 no estaba operando: la señal llegó mucho después.
BOCETO: barra de proporción 85% gris / el resto verde; contador «~350 días operados»; la crisis de 2008 en el tramo gris.

**[1:45 — Qué significa un Sharpe sobre pocos días]** (pantalla: dos muestras)
Un Sharpe es un promedio dividido por una dispersión. Si lo calculas sobre pocos días, puede salir positivo o negativo casi por casualidad. No hay un número mágico de días; lo importante es mirar cuántos hubo, y aquí son unos 350 operados. El propio experimento lo advierte: ese 0.21 no prueba al modelo.
BOCETO: dos muestras de curva: una con muchas barras diarias y otra con pocas; la segunda con la etiqueta «poco para concluir».

**[2:07 — Dos reglas para cuando no hay señal]** (pantalla: dos líneas de tiempo, #23 y #24)
Hay un contraste interesante con el experimento 23. Allí, sin señal, el bot queda invertido a ×3, y la cuenta de 2007 a 2013 muere el 4 de septiembre de 2008. Aquí, sin señal, queda fuera del mercado, y el Sharpe es de 0.21. Dos reglas distintas para el mismo hueco, dos resultados distintos, y en ninguno de los dos casos el modelo opinó durante la crisis de 2008.
BOCETO: dos líneas de tiempo paralelas: arriba #23 («sin señal: ×3») con una X roja en 4-sep-2008; abajo #24 («sin señal: fuera») con tramo gris largo y «0.21».

**[2:40 — Y en 2014–2024]** (pantalla: tarjetas de KPI)
En 2014 a 2024 sí hay señal, y el resultado es otro: menos 7.0%, Sharpe de menos 1.34, caída máxima de menos 11.3% y la cuenta cerrada a los 89 días, el 15 de enero de 2015. Frente a un filtro manual de 1.23 que usa el cierre del mismo día. Por eso el experimento marca que no sobrevive en ambos periodos.
BOCETO: tarjetas con tick (−7.0% · −1.34 · −11.3% · 89 días); la curva real se corta el 2015-01-15; etiqueta «Sobrevivió ambos: no».

**[3:10 — Qué mirar en cualquier ficha]** (pantalla: ficha del sitio)
Una regla práctica para leer cualquier resultado: mira siempre cuántos días estuvo operando. En las fichas de ATLAS Lab aparece como días operados. Un Sharpe positivo con poca presencia en el mercado es un dato débil, aunque se vea bonito en un titular.
BOCETO: la ficha del sitio con el KPI «Días operados» resaltado; flecha hacia el Sharpe.

**[3:27 — Con tu capital]** (pantalla: tarjeta de capital $10,000 / $100,000)
Con 10,000 dólares, la curva de 2014 a 2024 termina en menos 693; con 100,000, en menos 6,929. Comprando y esperando en esas fechas: menos 637 y menos 6,370. Es una cuenta cerrada, no una inversión que sigue corriendo.
BOCETO: tarjeta «Con tu capital» del sitio con el selector; curva roja cortada y gris «Sin estrategia».

**[3:48 — Ficha del experimento #24]** (pantalla: tarjeta con la URL)
Ficha del experimento #24, Régimen supervisado residual. Estado: murió. Cifra clave: menos 7.0% y Sharpe de menos 1.34 en 89 días; en 2007–2013, 0.21 con el 85% de los días fuera. Filtros: no sobrevive en 2014–2024; el 0.21 de 2007–2013 no prueba al modelo. Lección: pregunta cuántos días operó. Revísalo completo en atlas-lab-one.vercel.app/e/24. Contenido educativo, no es asesoría financiera. El trading no se promete: se prueba.
BOCETO: tarjeta final con cuatro líneas (estado · cifra clave · filtro que decidió · lección) y la URL «atlas-lab-one.vercel.app/e/24» en grande; logo ATLAS; fondo de velas con opacidad 0.12.

---

## SHORT (9:16, ≈ 48 s)

**[0-3 s]** «Sharpe 0.21… pero 85% fuera del mercado.»
BOCETO: eje casi todo gris; «0.21» y «85% FUERA» gigantes; golpe de bajo + sacudida.
**[3-11 s]** «Es 2007 a 2013, con la crisis de 2008. Pero la señal llega en junio de 2012.»
BOCETO: eje 2007–2013, la crisis de 2008 en el tramo gris y la señal verde en 2012. kb=out.
**[11-19 s]** «Ese 0.21 sale de unos 350 días operados. Con tan pocos días, un Sharpe no prueba nada.»
BOCETO: contador «~350 días» y dos muestras de curva, una corta con «poco para concluir».
**[19-28 s]** «En el experimento 23, sin señal el bot quedaba invertido a ×3 y moría en 2008. Aquí, sin señal, queda fuera.»
BOCETO: dos líneas de tiempo paralelas, la X roja arriba y el tramo gris abajo.
**[28-36 s]** «En 2014 a 2024 sí hubo señal: menos 7.0%, Sharpe menos 1.34, cuenta cerrada a los 89 días.»
BOCETO: curva real cayendo hasta el corte; tarjetas «−7.0%» y «−1.34».
**[36-44 s]** «Experimento 24 completo en el enlace. El video completo está en el canal. No es asesoría financiera. El trading no se promete: se prueba.»
BOCETO: tarjeta con «experimento #24 completo en el enlace» y la URL corta; logo ATLAS.
**[44-48 s]** «Un Sharpe bonito, ¿con cuántos días?»
BOCETO: el eje gris del inicio con interrogación; corte directo al inicio (loop).

---

## Descripción de YouTube (video largo)
https://atlas-lab-one.vercel.app/e/24?utm_source=youtube&utm_medium=video&utm_campaign=exp024-t3
Ficha del experimento #24 (Régimen supervisado residual): murió (No sirvió) · 2014–2024: −7.0% y Sharpe −1.34 en 89 días · 2007–2013: Sharpe 0.21 con el 85% de los días fuera (~350 días operados).
Cómo leer un Sharpe positivo calculado sobre pocos días, y por qué el periodo 2007–2013 no pone a prueba al modelo en la crisis de 2008.
Contenido educativo. No es asesoría financiera ni recomendación de inversión.

## Descripción del Short
https://atlas-lab-one.vercel.app/e/24?utm_source=youtube&utm_medium=short&utm_campaign=exp024-t3
Ficha del experimento #24: murió · Sharpe 0.21 con el 85% de los días fuera del mercado. Video completo en el canal. Contenido educativo, no es asesoría financiera.

## Capítulos
0:00 Gancho · 0:15 Qué es este experimento · 0:31 Por qué importa 2007–2013 · 0:57 El calentamiento · 1:24 Lo que sale de ahí · 1:45 Qué significa un Sharpe sobre pocos días · 2:07 Dos reglas para cuando no hay señal · 2:40 Y en 2014–2024 · 3:10 Qué mirar en cualquier ficha · 3:27 Con tu capital · 3:48 Ficha del experimento #24

## Etiquetas
Sharpe ratio, fuera de muestra, días operados, crisis de 2008, XGBoost, machine learning, walk-forward, backtest, inteligencia artificial, bot de trading, trading con datos, atlas lab

## Rúbrica (autoevaluación, 1–5)
| Pieza | hook_0_3s | ritmo | promesa_cumplida | potencial_loop | claridad_no_traders | honestidad_atlas | audio | cta | Promedio |
|---|---|---|---|---|---|---|---|---|---|
| Largo | 5 | 4 | 5 | 4 | 4 | 5 | 4 | 4 | 4.38 |
| Short | 5 | 4 | 5 | 4 | 4 | 5 | 4 | 4 | 4.38 |

Hook ≥ 4 ✓ · honestidad 5 ✓. Punto débil: «Sharpe sobre pocos días» es abstracto; se apoya en el contador de ~350 días y en el contraste con el #23. No se da un número mínimo de días porque no existe en los datos.

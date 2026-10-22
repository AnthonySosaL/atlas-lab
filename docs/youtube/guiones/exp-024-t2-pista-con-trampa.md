# Experimento #24 — Régimen supervisado residual · Tema 2: la pista que tenía trampa

Tema 2 de 3 del experimento #024 · Qué aporta frente a los otros temas: el tema 1 cuenta el experimento completo (tres cambios al modelo, resultados, 2007–2013); este se centra en un solo concepto —el aprendizaje residual y una pista que usa el cierre del mismo día— y en cómo cambia la lectura de la vara de 1.23. Se entiende sin haber visto los otros temas.
Estado del guion: **BORRADOR — pendiente de aprobación**
Estado del experimento: **murió** (veredicto del sitio: «No sirvió») · Serie D — Machine learning en trading: lo que pasó
Datos usados: `experiments.json` (v=24: params_view, metrics, kpis, notes, verdict, capital, period; v=27 para −0.17 y −0.46), `exp_details.json` (clave `…-v24`: algo, filters), tabla «Con tu capital» (archivo de capital en `docs/youtube/`).
Producción (CLAUDE.md del canal): b-roll real detrás de cada escena con overlay oscuro 0.6, Ken Burns alternando in/out, subtítulos karaoke en MAYÚSCULAS con cifras en rojo, un dato visual por escena, golpe de bajo + sacudida solo en 1–2 momentos. Colores: rojo `#e11d2a`, verde `#22c55e`, fondo `#09090b`.

## Títulos (3 opciones)
1. Le di una pista a la IA… y la pista usaba el cierre de hoy
2. Sharpe 1.23 con el cierre de hoy, −0.17 con el de ayer: la vara de la IA
3. Aprendizaje residual: por qué darle a una IA la regla manual no la salvó

## Miniatura (pensada para el título 1)
Fondo `#09090b`. Un chip de IA que recibe una nota amarilla «PISTA» y, debajo de la nota, un reloj pequeño con la hora del cierre marcada en rojo `#e11d2a`. Texto en Segoe UI Black: «PISTA DE HOY» (tres palabras, sin repetir los títulos). Logo ATLAS abajo a la derecha.

---

## VIDEO LARGO (16:9, ≈ 5:07 min)

**[0:00 — Gancho]** (pantalla: nota «filtro manual» entrando a un chip de IA)
Le di a una inteligencia artificial una pista: la regla manual que ya funcionaba. El problema es que esa regla usa el cierre de hoy. Con la señal de ayer, su Sharpe de 1.23 pasa a menos 0.17.
BOCETO: la nota adhesiva entra al chip de IA; encima aparece un reloj con «cierre de hoy»; contadores «1.23 → −0.17». Golpe de bajo en el −0.17.

**[0:17 — Qué es este experimento]** (pantalla: rótulo con el número y el nombre)
Este es el experimento #24 de ATLAS Lab: Régimen supervisado residual. Todos los resultados están en la página del experimento. Aquí me fijo en una sola idea: qué pasa cuando le das a una IA, como pista, una regla que ya tiene información que un bot real no tendría.
BOCETO: rótulo «EXPERIMENTO #24 · Régimen supervisado residual» sobre velas con opacidad 0.12. kb=out.

**[0:37 — Qué es aprender «el residuo»]** (pantalla: una regla y lo que le falta)
Aprendizaje residual significa que el modelo no aprende desde cero: recibe la regla manual como un dato más, y se supone que aprende solo lo que a esa regla le falta. Es como estudiar con los apuntes del profesor y concentrarte en lo que los apuntes no explican. Aquí la regla manual entra a un XGBoost, un conjunto de 200 árboles de decisión de profundidad 3, junto con los datos macro del día anterior.
BOCETO: caja «regla manual» que entra como un dato más a un árbol de decisión, junto con los chips de datos macro; etiqueta «aprende lo que le falta». kb=in.

**[1:08 — La vara y la pista]** (pantalla: dos usos del mismo filtro)
El filtro manual cumple aquí dos papeles. Es la pista que recibe el modelo, y es la vara que el modelo debe superar: un Sharpe de 1.23 en 2014–2024 y de 1.06 en 2007–2013. El Sharpe es la ganancia por unidad de riesgo. Pregunta clave: ¿a qué hora se conocía el dato que usa ese filtro?
BOCETO: el filtro manual aparece dos veces: como nota que entra al chip y como barra de referencia «1.23» a vencer; una flecha une las dos con la pregunta «¿a qué hora se conocía?».

**[1:33 — El cierre de hoy]** (pantalla: reloj de un día de mercado)
El filtro decide con el VIX y el crédito del cierre del mismo día. Un bot real calcula sus señales después del cierre y opera al día siguiente: no puede usar el cierre de hoy para hoy. El propio experimento lo reconoce: el filtro manual que usa como dato incluye el cierre del mismo día, información que un bot real aún no tendría. Es una pista heredada, y la vara también la hereda.
BOCETO: reloj con tres marcas, «cierre», «decide» y «mañana: opera»; una flecha roja tachada de «cierre de hoy» a «hoy». Checklist de `filters`: «filtro con cierre del mismo día: heredado».

**[2:03 — Qué dice la prueba de ayer]** (pantalla: dos barras que se separan)
El experimento 27 midió qué pasa si esa misma regla usa la señal de ayer. En 2014–2024 el Sharpe de la base pasa de 1.23 a menos 0.17; en 2007–2013, de 1.06 a menos 0.46. O sea: la vara y la pista valen mucho menos de lo que parecen cuando se las rezaga un día.
BOCETO: dos pares de barras: 1.23 verde → −0.17 roja (2014–2024) y 1.06 verde → −0.46 roja (2007–2013); golpe de bajo en la segunda caída.

**[2:29 — Qué hizo el modelo]** (pantalla: tarjetas de KPI)
Con la pista, y con el umbral que se adapta usando el percentil 75 de sus últimos 500 días, el modelo da en 2014–2024 un retorno de menos 7.0%, un Sharpe de menos 1.34 y una caída máxima de menos 11.3%. La cuenta se cierra el 15 de enero de 2015, a los 89 días, cuando toca el límite de pérdida de la prop firm, la empresa que presta la cuenta y la cierra si pierdes demasiado.
BOCETO: tarjetas con tick (−7.0% · −1.34 · −11.3% · 89 días); la curva real de `series/…v24.json` se corta el 2015-01-15; barra «manual 1.23» frente a la roja.

**[3:05 — Qué miró el modelo]** (pantalla: ranking de datos)
¿En qué se apoyó el modelo? Los datos que más pesaron fueron la curva de tasas, el VIX, el momentum del dólar a 60 días y el VIX frente a su media de 60 días. Son datos macro del mismo tipo que usa el filtro manual, y entre los cuatro que más pesaron no aparece la pista misma.
BOCETO: ranking horizontal con cuatro barras (curva de tasas, VIX, momentum del dólar 60 d, VIX vs media 60 d) animándose de arriba abajo.

**[3:29 — Qué haría falta]** (pantalla: tres candados)
Para tomarse en serio a un modelo así haría falta una pista que no use el cierre del mismo día, un periodo de prueba largo después del calentamiento y costos de transacción, que este motor no modela. Con la pista rezagada, el modelo se evaluaría contra una vara de menos 0.17, no contra 1.23.
BOCETO: tres candados («pista sin cierre del mismo día», «periodo largo», «costos») y la vara «1.23 → −0.17».

**[3:53 — Con tu capital]** (pantalla: tarjeta de capital $10,000 / $100,000)
Con 10,000 dólares, la curva termina en menos 693; con 100,000, en menos 6,929. Comprando y esperando en esas fechas: menos 637 y menos 6,370. Con tu capital verías esa cuenta cerrada, no una inversión que sigue corriendo.
BOCETO: tarjeta «Con tu capital» del sitio con el selector; curva roja cortada el 15-ene-2015 y curva gris «Sin estrategia».

**[4:12 — La lección]** (pantalla: pregunta en grande)
La lección es de método. Cuando una pista y la vara comparten el mismo atajo, no sabes si el modelo aprende algo o simplemente comparte el atajo. Antes de comparar una IA contra una regla, comprueba que las dos usan información que existe a la hora de decidir.
BOCETO: dos cajas con el mismo reloj tachado; texto «misma información de hoy» sobre las dos.

**[4:31 — Ficha del experimento #24]** (pantalla: tarjeta con la URL)
Ficha del experimento #24, Régimen supervisado residual. Estado: murió. Cifra clave: menos 7.0% y Sharpe de menos 1.34 en 89 días, frente a 1.23 del filtro manual con el cierre del mismo día. Filtros: no sobrevive en 2014–2024; en 2007–2013 sobrevive con 0.21, pero eso no prueba al modelo. Lección: la pista y la vara usan información de hoy. Revísalo completo en atlas-lab-one.vercel.app/e/24. Contenido educativo, no es asesoría financiera. El trading no se promete: se prueba.
BOCETO: tarjeta final con cuatro líneas (estado · cifra clave · filtro que decidió · lección) y la URL «atlas-lab-one.vercel.app/e/24» en grande; logo ATLAS; fondo de velas con opacidad 0.12.

---

## SHORT (9:16, ≈ 48 s)

**[0-3 s]** «Una pista para la IA… con el cierre de hoy.»
BOCETO: nota «pista» entrando a un chip de IA, con un reloj rojo encima; golpe de bajo + sacudida.
**[3-11 s]** «Era el filtro manual, con Sharpe 1.23. Pero decide con el cierre del mismo día, algo que un bot real no tiene.»
BOCETO: reloj con «cierre de hoy» y flecha roja tachada; barra verde «1.23». kb=out.
**[11-19 s]** «Con la señal de ayer, el mismo filtro da menos 0.17, y menos 0.46 en 2007 a 2013.»
BOCETO: dos pares de barras que caen de verde a rojo; golpe de bajo en la segunda.
**[19-28 s]** «Con la pista: menos 7.0%, Sharpe menos 1.34 y cuenta cerrada a los 89 días.»
BOCETO: curva real cayendo hasta el corte; tarjetas «−7.0%» y «−1.34».
**[28-36 s]** «Miró los mismos datos macro que la regla. Y la regla y la pista comparten el mismo atajo.»
BOCETO: ranking de datos con curva de tasas, VIX y dólar; las dos cajas con el mismo reloj tachado.
**[36-44 s]** «Experimento 24 completo en el enlace. El video completo está en el canal. No es asesoría financiera. El trading no se promete: se prueba.»
BOCETO: tarjeta con «experimento #24 completo en el enlace» y la URL corta; logo ATLAS.
**[44-48 s]** «Una pista del cierre de hoy no la tiene un bot real.»
BOCETO: el reloj del inicio con la nota «pista»; corte directo al inicio (loop).

---

## Descripción de YouTube (video largo)
https://atlas-lab-one.vercel.app/e/24?utm_source=youtube&utm_medium=video&utm_campaign=exp024-t2
Ficha del experimento #24 (Régimen supervisado residual): murió (No sirvió) · −7.0% y Sharpe −1.34 en 89 días (cuenta cerrada el 15-ene-2015) · vara del filtro manual: 1.23 con el cierre del mismo día.
Qué es el aprendizaje residual y por qué una pista que usa el cierre del mismo día cambia la lectura: con la señal de ayer, el filtro manual da −0.17 (2014–2024) y −0.46 (2007–2013).
Contenido educativo. No es asesoría financiera ni recomendación de inversión.

## Descripción del Short
https://atlas-lab-one.vercel.app/e/24?utm_source=youtube&utm_medium=short&utm_campaign=exp024-t2
Ficha del experimento #24: murió · −7.0% y Sharpe −1.34 en 89 días. Video completo en el canal. Contenido educativo, no es asesoría financiera.

## Capítulos
0:00 Gancho · 0:17 Qué es este experimento · 0:37 Qué es aprender «el residuo» · 1:08 La vara y la pista · 1:33 El cierre de hoy · 2:03 Qué dice la prueba de ayer · 2:29 Qué hizo el modelo · 3:05 Qué miró el modelo · 3:29 Qué haría falta · 3:53 Con tu capital · 4:12 La lección · 4:31 Ficha del experimento #24

## Etiquetas
aprendizaje residual, XGBoost, machine learning, pista, sesgo de mirar el futuro, filtro manual, inteligencia artificial, backtest, Sharpe ratio, bot de trading, trading con datos, atlas lab

## Rúbrica (autoevaluación, 1–5)
| Pieza | hook_0_3s | ritmo | promesa_cumplida | potencial_loop | claridad_no_traders | honestidad_atlas | audio | cta | Promedio |
|---|---|---|---|---|---|---|---|---|---|
| Largo | 4 | 4 | 5 | 4 | 4 | 5 | 4 | 4 | 4.25 |
| Short | 4 | 4 | 5 | 5 | 4 | 5 | 4 | 4 | 4.38 |

Hook ≥ 4 ✓ · honestidad 5 ✓. Punto débil: «aprendizaje residual» es un término técnico; en el largo se explica con la analogía de los apuntes y en el Short se resume como «pista».

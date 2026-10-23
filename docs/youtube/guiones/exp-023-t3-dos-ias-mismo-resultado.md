# Experimento #23 — Régimen supervisado con XGBoost (walk-forward) · Tema 3: dos IAs, el mismo resultado

Tema 3 de 3 del experimento #023 · Qué aporta frente a los otros temas: compara el #23 con el #22 (otra IA distinta) y explica cómo se descubre que un modelo «no hizo nada» y qué significa el veredicto «no concluyente». Cubre el #22 solo como dato de contraste. Se entiende sin haber visto los otros temas.
Estado del guion: **BORRADOR — pendiente de aprobación**
Estado del experimento: **no concluyente** (el sitio lo muestra como neutral: «No concluyente») · Serie D — Machine learning en trading: lo que pasó
Datos usados: `experiments.json` (v=23: metrics, kpis, verdict, notes, period, capital; v=22 solo para el contraste: metrics, analysis, params_view), `exp_details.json` (clave `…-v23`: filters), tabla «Con tu capital» (archivo de capital en `docs/youtube/`, incluidos sus totales de los 91 experimentos).
Producción (CLAUDE.md del canal): b-roll real detrás de cada escena con overlay oscuro 0.6, Ken Burns alternando in/out, subtítulos karaoke en MAYÚSCULAS con cifras en rojo, un dato visual por escena, golpe de bajo + sacudida solo en 1–2 momentos. Colores: rojo `#e11d2a`, verde `#22c55e`, fondo `#09090b`.

## Títulos (3 opciones)
1. Dos IAs distintas, el mismo resultado: −10.4% y Sharpe −2.31
2. Cómo saber que una IA no hizo nada: cifras idénticas a las de no usar filtro
3. «No concluyente»: el veredicto más incómodo de ATLAS Lab

## Miniatura (pensada para el título 1)
Fondo `#09090b`. Dos chips de IA distintos (uno con árboles, otro con estados) y entre ellos un signo «=» enorme en blanco; debajo, en rojo `#e11d2a` y Segoe UI Black, «−10.4%». Logo ATLAS abajo a la derecha. (El título 1 no repite el texto: la miniatura muestra la igualdad.)

---

## VIDEO LARGO (16:9, ≈ 5:13 min)

**[0:00 — Gancho]** (pantalla: dos curvas que se superponen)
Dos inteligencias artificiales distintas dieron exactamente el mismo resultado: menos 10.4% y un Sharpe de menos 2.31. Esa coincidencia no es suerte: es la huella de que ninguna de las dos hizo nada.
BOCETO: dos curvas rojas, una azul y una naranja, caen y se funden en una sola; contadores «−10.4%» y «−2.31». Golpe de bajo al fundirse.

**[0:15 — Qué es este experimento]** (pantalla: rótulo con el número y el nombre)
Este es el experimento #23 de ATLAS Lab: Régimen supervisado con XGBoost, en walk-forward. Todos los resultados están en la página del experimento. Lo comparo con el #22, que probó otro tipo de IA, para entender un veredicto raro: no concluyente.
BOCETO: rótulo «EXPERIMENTO #23 · Régimen supervisado con XGBoost (walk-forward)» y, al lado, «#22 · HMM (contraste)». kb=out.

**[0:33 — Las dos IAs]** (pantalla: dos modelos lado a lado)
El experimento 22 usó un modelo oculto de Markov gaussiano de 2 estados, con 500 días de calentamiento. El 23 usa XGBoost, árboles de decisión: 200 árboles de profundidad 3, con 750 días de calentamiento. Dos métodos, dos familias, la misma tarea: aprender cuándo salir del mercado con un apalancamiento de ×3.
BOCETO: tabla de dos columnas: «#22 HMM · 2 estados · 500 días» y «#23 XGBoost · 200 árboles, profundidad 3 · 750 días». kb=in.

**[0:58 — La coincidencia]** (pantalla: dos columnas de cifras iguales)
Ahora las cifras. En 2014 a 2024, el retorno es de menos 10.4%, el Sharpe de menos 2.31, la caída máxima de menos 11.1% y los días operados, 81. En los dos. Los datos publicados coinciden decimal por decimal. El Sharpe, para quien llega ahora, es la ganancia por unidad de riesgo: por debajo de cero, el bot pierde.
BOCETO: dos columnas con las mismas cuatro cifras (−10.4% · −2.31 · −11.1% · 81 días); un «=» verde entre cada par. kb=out.

**[1:26 — La tercera curva: el control]** (pantalla: un tercer actor, «×3 sin filtro»)
La explicación está en un tercer participante: el control. Es la misma cartera a ×3, sin ningún filtro. El experimento 23 verificó, volviendo a ejecutarlo, que sus cifras coinciden exactamente con las de ese control. Cuando un modelo y un control dan lo mismo, el modelo no cambió ninguna decisión que importara. Ese es el método: comparar siempre contra lo que habría pasado sin el modelo.
BOCETO: tres curvas superpuestas: «HMM», «XGBoost» y «×3 sin filtro» coinciden; el rótulo «control» se ilumina. Checklist de `filters`: «cifras idénticas a ×3 sin filtro (verificado)».

**[1:53 — Mismo resultado, dos razones]** (pantalla: dos líneas de tiempo)
Pero cuidado: el mismo resultado no tuvo la misma razón. El HMM seguía en sus 500 días de calentamiento cuando la cuenta reventó, en enero de 2015: no había decidido nada. En el XGBoost, el análisis dice que el modelo nunca apagó la exposición antes de la quiebra. La cuenta se cerró el 6 de enero de 2015, el día 81. En los dos casos, la cuenta murió antes de que el modelo pudiera marcar la diferencia.
BOCETO: dos líneas de tiempo: la de arriba (HMM) con un bloque gris «calentamiento» que no termina antes de la X; la de abajo (XGBoost) con la X en 6-ene-2015 y el rótulo «nunca apagó la exposición».

**[2:27 — Y fuera de muestra, tampoco]** (pantalla: periodo 2007–2013)
Fuera de muestra, es decir, con años que no se usaron para diseñar el modelo, el panorama es parecido. El HMM solo estuvo activo desde agosto de 2008 y la cuenta reventó en diciembre de 2008, con un Sharpe de menos 0.54. El XGBoost no tiene señal hasta el 25 de junio de 2010, y la cuenta ya había muerto el 4 de septiembre de 2008, con un Sharpe de menos 0.59. Ninguno de los dos periodos pone a prueba al modelo.
BOCETO: eje 2007–2013 con dos pares de marcas: HMM (ago-2008 → X en dic-2008) y XGBoost (X en 4-sep-2008, señal en 25-jun-2010).

**[3:05 — Qué significa «no concluyente»]** (pantalla: tres estados posibles)
En ATLAS Lab hay tres veredictos posibles para un experimento: sirvió, murió, o no concluyente. No concluyente no quiere decir que la IA falló; quiere decir que la prueba no llegó a medirla. De los 91 experimentos del laboratorio, 1 sirvió, 64 murieron y 26 quedaron en parcial o no concluyente. Publicarlos todos, incluido el que no mide nada, es parte de la regla del canal.
BOCETO: tres sellos: verde «SIRVIÓ», rojo «MURIÓ», gris «NO CONCLUYENTE» (resaltado); barra de proporción 1 · 64 · 26 de los 91.

**[3:33 — Lo que sí queda en pie]** (pantalla: pocos ejemplos)
Algo sí queda. El análisis lo dice así: los crashes son eventos rarísimos, con unos 2 ejemplos por ventana, y cada crisis es distinta. Un clasificador necesita muchos casos parecidos para aprender; aquí tiene muy pocos y todos distintos. Que el modelo no actuara no demuestra que el régimen sea imposible de aprender.
BOCETO: rejilla de días con solo dos celdas rojas de formas distintas; sello «no demuestra imposibilidad».

**[3:56 — Con tu capital]** (pantalla: tarjeta de capital $10,000 / $100,000)
Es la misma curva en los dos experimentos. Con 10,000 dólares, termina en menos 1,026; con 100,000, en menos 10,258. Comprando y esperando en esas fechas, menos 578 y menos 5,776. Con tu capital verías esa cuenta cerrada.
BOCETO: tarjeta «Con tu capital» con el selector; curva roja cortada en enero de 2015.

**[4:15 — La regla para tu propio backtest]** (pantalla: pregunta en grande)
Una regla práctica que sale de aquí: si el resultado de tu modelo es idéntico al del control, no lo celebres ni lo entierres. Todavía no se probó. Antes de decir que una IA sirve o no sirve, hay que comprobar que tomó alguna decisión distinta a la del control.
BOCETO: pregunta «¿cambió alguna decisión?» con dos respuestas: «sí → se puede medir», «no → no concluyente».

**[4:35 — Ficha del experimento #23]** (pantalla: tarjeta con la URL)
Ficha del experimento #23, Régimen supervisado con XGBoost. Estado: no concluyente. Cifra clave: menos 10.4% y Sharpe de menos 2.31 en 81 días, idéntico al control a ×3 sin filtro y al experimento 22. Filtros: no sobrevive en 2014–2024 y en 2007–2013 no se puso a prueba al modelo; el walk-forward con embargo sí pasa. Lección: antes de juzgar un modelo, compáralo con el control. Revísalo completo en atlas-lab-one.vercel.app/e/23. Contenido educativo, no es asesoría financiera. El trading no se promete: se prueba.
BOCETO: tarjeta final con cuatro líneas (estado · cifra clave · filtro que decidió · lección) y la URL «atlas-lab-one.vercel.app/e/23» en grande; logo ATLAS; fondo de velas con opacidad 0.12.

---

## SHORT (9:16, ≈ 48 s)

**[0-3 s]** «Dos IAs distintas. El mismo resultado: menos 10.4%.»
BOCETO: dos chips de IA con un «=» gigante y «−10.4%» en rojo; golpe de bajo + sacudida.
**[3-11 s]** «Una usa estados ocultos, la otra árboles. En 2014 a 2024 las dos dan Sharpe menos 2.31 y 81 días.»
BOCETO: dos columnas con las mismas cifras y un «=» entre cada par. kb=out.
**[11-19 s]** «Y operar a ×3 sin ningún filtro también da lo mismo. Se verificó volviendo a ejecutarlo.»
BOCETO: tres curvas que se funden en una; rótulo «control».
**[19-29 s]** «Significa que ninguna cambió una decisión importante: la cuenta murió el 6 de enero de 2015, antes de que pudieran actuar.»
BOCETO: línea de tiempo con la X roja en 6-ene-2015.
**[29-36 s]** «Por eso el veredicto es no concluyente: no prueba que una IA no pueda aprender, prueba que esta prueba no la midió.»
BOCETO: sello gris «NO CONCLUYENTE».
**[36-44 s]** «Experimento 23 completo en el enlace. El video completo está en el canal. No es asesoría financiera. El trading no se promete: se prueba.»
BOCETO: tarjeta con «experimento #23 completo en el enlace» y la URL corta; logo ATLAS.
**[44-48 s]** «Si dos IAs dan lo mismo, ¿cuál de las dos funcionó?»
BOCETO: los dos chips con interrogación; corte directo al inicio (loop: la respuesta es «ninguna»).

---

## Descripción de YouTube (video largo)
https://atlas-lab-one.vercel.app/e/23?utm_source=youtube&utm_medium=video&utm_campaign=exp023-t3
Ficha del experimento #23 (Régimen supervisado con XGBoost, walk-forward): no concluyente · −10.4% y Sharpe −2.31 en 81 días, idéntico a operar a ×3 sin filtro · fuera de muestra (2007–2013): −0.59.
Comparo el #23 con el #22 (otra IA) y explico qué significa «no concluyente»: de 91 experimentos, 1 sirvió, 64 murieron y 26 quedaron en parcial o no concluyente.
Contenido educativo. No es asesoría financiera ni recomendación de inversión.

## Descripción del Short
https://atlas-lab-one.vercel.app/e/23?utm_source=youtube&utm_medium=short&utm_campaign=exp023-t3
Ficha del experimento #23: no concluyente · −10.4% y Sharpe −2.31 en 81 días. Video completo en el canal. Contenido educativo, no es asesoría financiera.

## Capítulos
0:00 Gancho · 0:15 Qué es este experimento · 0:33 Las dos IAs · 0:58 La coincidencia · 1:26 La tercera curva: el control · 1:53 Mismo resultado, dos razones · 2:27 Y fuera de muestra, tampoco · 3:05 Qué significa «no concluyente» · 3:33 Lo que sí queda en pie · 3:56 Con tu capital · 4:15 La regla para tu propio backtest · 4:35 Ficha del experimento #23

## Etiquetas
no concluyente, XGBoost, HMM, machine learning, inteligencia artificial, grupo de control, backtest, Sharpe ratio, bot de trading, walk-forward, trading con datos, atlas lab

## Rúbrica (autoevaluación, 1–5)
| Pieza | hook_0_3s | ritmo | promesa_cumplida | potencial_loop | claridad_no_traders | honestidad_atlas | audio | cta | Promedio |
|---|---|---|---|---|---|---|---|---|---|
| Largo | 5 | 4 | 5 | 4 | 4 | 5 | 4 | 4 | 4.38 |
| Short | 5 | 4 | 5 | 5 | 4 | 5 | 4 | 4 | 4.50 |

Hook ≥ 4 ✓ · honestidad 5 ✓. Punto débil: la diferencia entre «mismo resultado» y «misma razón» exige dos líneas de tiempo; en el Short se omite y se dice solo «ninguna cambió una decisión importante».

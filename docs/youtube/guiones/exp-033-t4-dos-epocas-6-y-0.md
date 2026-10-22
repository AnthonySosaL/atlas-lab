# Experimento #33 — Activación temprana del filtro · Tema 4: dos épocas, 6 de 6 y 0 de 6

Tema 4 de 4 del experimento #033 · Qué aporta frente a los otros temas: compara los dos periodos del #33 (2007–2013, con la crisis de 2008, y 2014–2024) y explica por qué sobrevivir en uno no prueba nada y por qué el laboratorio exige los dos. El tema 1 cuenta el experimento completo; el tema 2, las falsas alarmas; el tema 3, el margen de 89,358 contra 90,000. Se entiende sin haber visto los otros temas.
Estado del guion: **BORRADOR — pendiente de aprobación**
Estado del experimento: **MURIÓ** (0 de 6 combinaciones sobreviven 2014–2024 con ×2; la base se corta el 11-nov-2016) · Serie G — Construyendo un bot (y por qué murió)
Datos usados: `experiments.json` (v=33: analysis, notes, metrics, kpis, params_view, verdict, capital, period; v=31: market y metrics para el contraste de cestas y de comprar y esperar en 2007–2013), `exp_details.json` (clave `…-v33`: filters, algo), tabla «Con tu capital» (archivo de capital en `docs/youtube/`).
Producción (CLAUDE.md del canal): b-roll real detrás de cada escena con overlay oscuro 0.6, Ken Burns alternando in/out, subtítulos karaoke en MAYÚSCULAS con cifras en rojo, un dato visual por escena, golpe de bajo + sacudida solo en 1–2 momentos. Colores: rojo `#e11d2a`, verde `#22c55e`, fondo `#09090b`.

## Títulos (3 opciones)
1. El mismo filtro: 6 de 6 sobreviven en 2007–2013 y 0 de 6 en 2014–2024
2. Dos épocas, dos resultados: cuando sobrevivir en un periodo no prueba nada
3. Sobrevivió a la crisis de 2008 con Sharpe 0.04 y murió en 2016

## Miniatura (pensada para el título 1)
Fondo `#09090b`. Dos mitades: a la izquierda «2007–2013» con seis escudos verdes `#22c55e`; a la derecha «2014–2024» con seis escudos rotos en rojo `#e11d2a`. Texto en Segoe UI Black: «6 DE 6 · 0 DE 6» (sin repetir los títulos). Logo ATLAS abajo a la derecha.

---

## VIDEO LARGO (16:9, ≈ 4:30 min)

**[0:00 — Gancho]** (pantalla: dos mitades con seis escudos)
Seis versiones del mismo filtro de pánico. En 2007 a 2013, las seis sobreviven. En 2014 a 2024, ninguna. Cero de seis.
BOCETO: izquierda seis escudos verdes; derecha seis escudos que se rompen uno a uno; contadores «6/6» y «0/6». Golpe de bajo en el último escudo. kb=in.

**[0:12 — Qué es este experimento]** (pantalla: rótulo con el número y el nombre)
Este es el experimento #33 de ATLAS Lab: Activación temprana del filtro. Todos los resultados están en la página del experimento. Aquí comparo los dos periodos en que se probó, para entender por qué se exigen los dos.
BOCETO: rótulo «EXPERIMENTO #33 · Activación temprana del filtro» sobre velas con opacidad 0.12. kb=out.

**[0:28 — Qué se probó]** (pantalla: cuadrícula 3×2)
Seis combinaciones de un filtro de pánico: umbral del VIX de 22, 24 o 28 y media del crédito de 40 o 60 días, con apalancamiento ×2 y las reglas de una prop firm, la empresa que presta la cuenta y la cierra si pierdes demasiado. Todo con la señal de ayer, salvo el día del disparo, en que el bot sale con lo que puede ver a esa hora.
BOCETO: cuadrícula 3×2 (VIX 22/24/28 por crédito 40/60 días) que se ilumina casilla por casilla. kb=in.

**[0:59 — Dos épocas, dos cestas]** (pantalla: dos periodos)
Se probó en dos periodos. 2014 a 2024, con una cesta de 15 activos entre divisas, metales, índices y energía. Y 2007 a 2013, fuera de muestra, es decir, años que el bot no vio al diseñarse, con una cesta más pequeña: siete pares de divisas más oro. Ese segundo periodo incluye la crisis de 2008. No son la misma cesta, y conviene tenerlo presente al comparar.
BOCETO: dos barras de tiempo: «2014–2024 · 15 activos» y «2007–2013 · 7 pares + oro · incluye 2008»; nota «cestas distintas».

**[1:30 — 2007–2013: las seis sobreviven]** (pantalla: seis barras de Sharpe pequeñas)
En 2007 a 2013, las seis sobreviven, con un Sharpe que va de 0.04 a 0.20, y 0.04 en la base. El Sharpe es la ganancia por unidad de riesgo. Suena a éxito, pero el mínimo que pide el laboratorio fuera de muestra es 0.30, y ninguna de las seis llega. Sobreviven, sí, pero con casi nada de ganancia por el riesgo.
BOCETO: seis barras diminutas entre 0.04 y 0.20 bajo una línea de referencia en 0.30; escudos verdes con la etiqueta «sobrevive».

**[1:58 — 2014–2024: ninguna sobrevive]** (pantalla: tabla con fechas)
En 2014 a 2024, ninguna. La más sensible muere el 25 de julio de 2016; las demás, entre el 9 y el 11 de noviembre de 2016. La base, VIX 28 con crédito de 40 días, cae a 89,358 el 11 de noviembre de 2016 y se cierra, con menos 10.6% y un Sharpe de menos 0.58.
BOCETO: línea de tiempo 2014–2016 con seis ✕ en sus fechas; la base resaltada con «89,358» y «−0.58».

**[2:29 — Qué se concluye de un 6/6 y un 0/6]** (pantalla: dos preguntas)
¿Qué se concluye? Que un solo periodo no prueba nada. Con seis de seis, una persona podría decir: «sobrevive a 2008». Con cero de seis, otra diría: «no sobrevive a 2016». Las dos tienen razón en su periodo. Por eso la regla del laboratorio exige sobrevivir en ambos, y por eso este experimento se marca como que murió.
BOCETO: dos burbujas de diálogo con «sobrevive a 2008» y «no sobrevive a 2016» y un sello que las une: «se exigen los dos periodos».

**[2:54 — Qué no dice]** (pantalla: texto)
Y lo que no dice: no explica por qué ocurre. Los datos no atribuyen la diferencia a un evento de mercado concreto; muestran que con otra cesta y otra época, el mismo filtro tiene otro desenlace. Tampoco es un ranking de épocas: son dos pruebas distintas.
BOCETO: dos frases: «no dice: por qué 2016 fue distinto» (tachada) y «dice: un periodo no basta» (resaltada).

**[3:13 — Con ×1.5]** (pantalla: tarjetas)
Con un apalancamiento menor, la base sí sobrevive: con ×1.5, el Sharpe es de 0.05 en 2014–2024 y de 0.14 en 2007–2013. Sobrevivir en los dos periodos es posible bajando el apalancamiento, a costa de ganar poco. Comprar y esperar la misma cesta dio más 58.9% con un Sharpe de 0.47 en 2014–2024.
BOCETO: dos tarjetas «×1.5: 0.05 / 0.14» y «comprar y esperar: +58.9% · 0.47».

**[3:38 — Con tu capital]** (pantalla: tarjeta de capital $100,000)
Con 100,000 dólares simulados, la cuenta de la base se cierra con menos 10,642. Comprar y esperar la misma cesta, en las mismas fechas, 2014 a 2016: menos 5,766. Con tu capital verías esa cuenta cerrada.
BOCETO: tarjeta «Con tu capital» del sitio: −$10,642 contra −$5,766, «2014–2016, hasta que se cierra la cuenta».

**[3:56 — Ficha del experimento #33]** (pantalla: tarjeta con la URL)
Ficha del experimento #33, Activación temprana del filtro. Estado: murió. Cifra clave: 0 de 6 combinaciones sobreviven en 2014–2024 y 6 de 6 en 2007–2013, con Sharpe de 0.04 a 0.20. Filtros que decidieron: sobrevivir en los dos periodos y el 0.30 fuera de muestra. Lección: un solo periodo no prueba nada. Revísalo completo en atlas-lab-one.vercel.app/e/33. Contenido educativo, no es asesoría financiera. El trading no se promete: se prueba.
BOCETO: tarjeta final con cuatro líneas (estado · cifra clave · filtro que decidió · lección) y la URL «atlas-lab-one.vercel.app/e/33» en grande; logo ATLAS; fondo de velas con opacidad 0.12.

---

## SHORT (9:16, ≈ 47 s)

**[0-4 s]** «Seis de seis sobreviven en una época. Cero de seis, en otra.»
BOCETO: seis escudos verdes y seis rotos; «6/6» y «0/6»; golpe de bajo + sacudida.
**[4-11 s]** «Seis versiones del mismo filtro de pánico, con ×2. Dos épocas, dos cestas distintas.»
BOCETO: cuadrícula 3×2 y dos barras de tiempo. kb=out.
**[11-19 s]** «En 2007–2013 sobreviven, pero con Sharpe de 0.04 a 0.20: bajo el 0.30 que se pide.»
BOCETO: seis barras diminutas bajo la línea de 0.30.
**[19-27 s]** «En 2014 a 2024, mueren las seis: la más sensible, el 25 de julio de 2016.»
BOCETO: línea de tiempo con seis ✕; la del 25-jul-2016 resaltada.
**[27-35 s]** «Un solo periodo no prueba nada. Por eso se exigen los dos.»
BOCETO: dos burbujas y un sello «se exigen los dos periodos».
**[35-43 s]** «Experimento 33 completo en el enlace. El video completo está en el canal. No es asesoría financiera. El trading no se promete: se prueba.»
BOCETO: tarjeta con «experimento #33 completo en el enlace» y la URL corta; logo ATLAS.
**[43-47 s]** «Seis de seis… ¿en qué época?»
BOCETO: los escudos del inicio con interrogación; corte directo al inicio (loop).

---

## Descripción de YouTube (video largo)
https://atlas-lab-one.vercel.app/e/33?utm_source=youtube&utm_medium=video&utm_campaign=exp033-t4
Ficha del experimento #33 (Activación temprana del filtro): murió · 0 de 6 combinaciones sobreviven en 2014–2024; en 2007–2013 sobreviven las 6, con Sharpe de 0.04 a 0.20 (el laboratorio pide 0.30).
Por qué sobrevivir en un periodo no prueba nada y por qué se exigen dos (cestas distintas: 15 activos en 2014–2024; 7 pares + oro en 2007–2013).
Contenido educativo. No es asesoría financiera ni recomendación de inversión.

## Descripción del Short
https://atlas-lab-one.vercel.app/e/33?utm_source=youtube&utm_medium=short&utm_campaign=exp033-t4
Ficha del experimento #33: murió · 6 de 6 sobreviven en 2007–2013 y 0 de 6 en 2014–2024. Video completo en el canal. Contenido educativo, no es asesoría financiera.

## Capítulos
0:00 Gancho · 0:12 Qué es este experimento · 0:28 Qué se probó · 0:59 Dos épocas, dos cestas · 1:30 2007–2013: las seis sobreviven · 1:58 2014–2024: ninguna sobrevive · 2:29 Qué se concluye de un 6/6 y un 0/6 · 2:54 Qué no dice · 3:13 Con ×1.5 · 3:38 Con tu capital · 3:56 Ficha del experimento #33

## Etiquetas
fuera de muestra, validación, crisis de 2008, VIX, filtro de pánico, bot de trading, backtest, Sharpe ratio, prop firm, dos periodos, trading con datos, atlas lab

## Rúbrica (autoevaluación, 1–5)
| Pieza | hook_0_3s | ritmo | promesa_cumplida | potencial_loop | claridad_no_traders | honestidad_atlas | audio | cta | Promedio |
|---|---|---|---|---|---|---|---|---|---|
| Largo | 5 | 4 | 5 | 4 | 4 | 5 | 4 | 4 | 4.38 |
| Short | 5 | 4 | 5 | 4 | 4 | 5 | 4 | 4 | 4.38 |

Hook ≥ 4 ✓ · honestidad 5 ✓. Punto débil: el 6/6 podría leerse como éxito; el video lo aclara dos veces (Sharpe 0.04–0.20 bajo 0.30, y cestas distintas). No se atribuye la diferencia entre épocas a ningún evento porque los datos no lo hacen.

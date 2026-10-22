# Experimento #30 — Interruptor de emergencia + apalancamiento bajo · Tema 3: cómo leer un Sharpe de 0.03

Tema 3 de 3 del experimento #030 · Qué aporta frente a los otros temas: es un tema de concepto para principiantes —qué es un Sharpe, cómo leer su signo y su tamaño, y por qué un Sharpe alto puede ser engañoso— con una escala de ejemplos reales de la serie (de −2.31 a 2.12). El tema 1 cuenta el #30; el tema 2, la escalera del apalancamiento. Se entiende sin haber visto los otros temas.
Estado del guion: **BORRADOR — pendiente de aprobación**
Estado del experimento: **murió** (veredicto del sitio: «No sirvió») · Serie G — Construyendo un bot (y por qué murió)
Datos usados: `experiments.json` (v=30: kpis, chart; y, para la escala: v=23, 26, 27, 28, 31 y 16: kpis, metrics), `exp_details.json` (clave `extra-v30`: filters), tabla «Con tu capital» (archivo de capital en `docs/youtube/`; el #30 no tiene curva).
Nota de datos: el #30 publica solo dos Sharpe (0.03 y 0.05), el mínimo del laboratorio (0.30) y «retorno ≈ 0%»; las demás cifras de la escala vienen de las fichas de los experimentos citados (cestas y periodos distintos; el video lo aclara).
Producción (CLAUDE.md del canal): b-roll real detrás de cada escena con overlay oscuro 0.6, Ken Burns alternando in/out, subtítulos karaoke en MAYÚSCULAS con cifras en rojo, un dato visual por escena, golpe de bajo + sacudida solo en 1–2 momentos. Colores: rojo `#e11d2a`, verde `#22c55e`, fondo `#09090b`.

## Títulos (3 opciones)
1. Qué es un Sharpe de 0.03 y cómo leer cualquier Sharpe
2. De −2.31 a 2.12: una escala del Sharpe con ejemplos reales
3. Sharpe 0.03: ¿ganancia o cero? (experimento #30)

## Miniatura (pensada para el título 2)
Fondo `#09090b`. Un termómetro horizontal con una aguja en 0.03, casi sobre el cero; a la derecha una marca azul «0.30». Texto en Segoe UI Black: «¿CASI CERO?» (dos palabras, sin repetir los títulos). Logo ATLAS abajo a la derecha.

---

## VIDEO LARGO (16:9, ≈ 4:28 min)

**[0:00 — Gancho]** (pantalla: escala con la aguja en 0.03)
Sharpe de 0.03. El bot sobrevive, pero su retorno es casi cero. Hoy te explico qué es un Sharpe y cómo leer cualquiera, con ejemplos reales de esta serie.
BOCETO: termómetro horizontal con la aguja en 0.03, casi pegada al cero; marca «0.30» en azul a la derecha. kb=in.

**[0:13 — Qué es este experimento]** (pantalla: rótulo con el número y el nombre)
Este es el experimento #30 de ATLAS Lab: Interruptor de emergencia más apalancamiento bajo. Todos los resultados están en la página del experimento. Con ×1.5, la cuenta sobrevive en los dos periodos con un Sharpe de 0.03 y de 0.05.
BOCETO: rótulo «EXPERIMENTO #30 · Interruptor de emergencia + apalancamiento bajo» sobre velas con opacidad 0.12. kb=out.

**[0:31 — Qué mide el Sharpe]** (pantalla: dos bots)
El Sharpe mide la ganancia por unidad de riesgo. Imagina dos bots que ganan lo mismo; el que se mueve menos, con menos sobresaltos, tiene un Sharpe más alto. Si dos bots tienen los mismos sobresaltos, gana el que más gana. No es el dinero: es lo que obtienes en relación con lo que arriesgas.
BOCETO: dos curvas que terminan igual; una con zigzag grande y otra suave; la suave lleva una etiqueta «Sharpe mayor».

**[0:54 — El signo]** (pantalla: línea con el cero)
Lo primero es el signo. Por encima de cero, ganó algo en relación con el riesgo; en cero, nada; por debajo de cero, perdió. Y el tamaño importa: un valor cercano a cero, como 0.03, significa que casi no hay ganancia por el riesgo que se corrió.
BOCETO: línea horizontal con cero al centro, zona verde a la derecha («ganó»), zona roja a la izquierda («perdió»); la aguja en 0.03.

**[1:14 — Una escala con ejemplos reales]** (pantalla: tabla animada)
Una escala con ejemplos reales. Menos 2.31: el experimento 23, cuenta cerrada a los 81 días. Menos 1.06: el 28 con ×3. Menos 0.17: la base con la señal de ayer, en el 27. 0.03: este experimento, el 30. 0.09: el 31, con más 4.2% en 2014–2024. 0.30: el mínimo del laboratorio fuera de muestra. 0.47: comprar y esperar la misma cesta, con más 58.9%. 1.23 y 2.12: las del cierre del mismo día, en el 16 y el 26.
| Sharpe | Qué es | De dónde |
|---|---|---|
| −2.31 | Cuenta cerrada a los 81 días | #23 |
| −1.06 | ×3 con kill-switch | #28 |
| −0.17 | Base con la señal de ayer | #27 |
| 0.03 | ×1.5 con kill-switch (retorno ≈ 0%) | #30 |
| 0.09 | ×1.5 con φ medido (+4.2%) | #31 |
| 0.30 | Mínimo del laboratorio fuera de muestra | #30 |
| 0.47 | Comprar y esperar la misma cesta (+58.9%) | #31 |
| 1.23 | Filtro con el cierre del mismo día | #16 |
| 2.12 | Re-entrada con el VIX del mismo día | #26 |
BOCETO: la aguja recorre una escala horizontal de −2.31 a 2.12 y se detiene en cada fila de la tabla; negativos en rojo, positivos pequeños en verde, 0.30 con línea azul.

**[1:57 — La trampa de los Sharpe altos]** (pantalla: dos cifras que caen)
Y aquí la trampa. Los Sharpe más altos de la escala, 1.23 y 2.12, usan información del cierre del mismo día, algo que un bot real no tiene. Con la señal de ayer, en el experimento 27, caen a menos 0.17 y a menos 1.00. En cambio, el 0.03 de este experimento es poco, pero es ejecutable: la señal está rezagada un día. Un Sharpe pequeño y honesto vale más que uno grande que no se puede operar.
BOCETO: dos barras verdes altas («1.23», «2.12») que caen a rojo («−0.17», «−1.00») con golpe de bajo; al lado, la barra pequeña «0.03» con un sello «ejecutable».

**[2:32 — Cuidado al comparar]** (pantalla: etiquetas de cesta y periodo)
Una advertencia: no compares Sharpe de cestas y periodos distintos como si fueran un ranking. El 0.47 de comprar y esperar es de la cesta de 15 activos entre 2014 y 2024; el 1.23 es de otro bot, con otro apalancamiento. Cada cifra va con su contexto. Aquí la escala sirve para entender el tamaño de las cosas, no para ordenar experimentos.
BOCETO: cada fila de la escala con una etiqueta pequeña de cesta y periodo; rótulo «escala de referencia, no ranking».

**[3:00 — Qué dice un 0.03 en la práctica]** (pantalla: tarjetas del #30 y del #31)
En este experimento, el retorno es de aproximadamente 0%. Para tener una idea de un Sharpe bajo en dólares, el experimento 31, con ×1.5 y un Sharpe de 0.09, termina en más 4,155 dólares con 100,000 simulados entre 2014 y 2024. Un 0.03 queda por debajo de eso. No es una promesa ni una recomendación: es lo que pasó en la simulación.
BOCETO: tarjeta del #30 «≈ 0%» y tarjeta del #31 «+$4,155 con $100,000 (2014–2024)»; pie «simulación histórica».

**[3:30 — Qué mínimo exige el laboratorio]** (pantalla: línea en 0.30)
El laboratorio exige al menos 0.30 fuera de muestra, es decir, en años que la estrategia no vio al diseñarse. Es el piso para considerar que una idea tiene algo. Con 0.03 y 0.05, este experimento queda muy lejos.
BOCETO: línea de piso en 0.30 y dos barras diminutas en 0.03 y 0.05.

**[3:48 — Con tu capital]** (pantalla: tarjeta de capital sin curva)
El experimento 30 no tiene curva de capital. Con cualquier capital, el resultado sería prácticamente nulo.
BOCETO: tarjeta «Con tu capital» del sitio con el texto «sin curva de capital» y «≈ 0%».

**[3:55 — Ficha del experimento #30]** (pantalla: tarjeta con la URL)
Ficha del experimento #30, Interruptor de emergencia más apalancamiento bajo. Estado: murió. Cifra clave: Sharpe de 0.03 y 0.05 con ×1.5, retorno de casi 0%. Filtro que decidió: el mínimo de 0.30 fuera de muestra. Lección: un Sharpe se lee con su signo, su tamaño y la hora en que se conocían los datos. Revísalo completo en atlas-lab-one.vercel.app/e/30. Contenido educativo, no es asesoría financiera. El trading no se promete: se prueba.
BOCETO: tarjeta final con cuatro líneas (estado · cifra clave · filtro que decidió · lección) y la URL «atlas-lab-one.vercel.app/e/30» en grande; logo ATLAS; fondo de velas con opacidad 0.12.

---

## SHORT (9:16, ≈ 47 s)

**[0-3 s]** «Sharpe 0.03: ¿ganancia o cero?»
BOCETO: termómetro con la aguja en 0.03, casi sobre el cero; golpe de bajo + sacudida.
**[3-11 s]** «El Sharpe mide la ganancia por unidad de riesgo. Por debajo de cero, pierdes. Cerca de cero, casi no ganas.»
BOCETO: línea con cero al centro y zonas roja y verde. kb=out.
**[11-19 s]** «Este bot sobrevive con ×1.5, pero su retorno es casi 0%. El laboratorio pide 0.30 fuera de muestra.»
BOCETO: dos barras diminutas (0.03 y 0.05) bajo la línea de 0.30.
**[19-27 s]** «Los Sharpe de 1.23 y 2.12 usaban el cierre de hoy. Con la señal de ayer: menos 0.17 y menos 1.00.»
BOCETO: dos barras verdes que caen a rojo.
**[27-35 s]** «Un Sharpe pequeño y ejecutable vale más que uno grande que no se puede operar.»
BOCETO: barra pequeña con sello «ejecutable» frente a barra alta con sello «no ejecutable».
**[35-43 s]** «Experimento 30 completo en el enlace. El video completo está en el canal. No es asesoría financiera. El trading no se promete: se prueba.»
BOCETO: tarjeta con «experimento #30 completo en el enlace» y la URL corta; logo ATLAS.
**[43-47 s]** «Sharpe 0.03: casi cero.»
BOCETO: la aguja del inicio; corte directo al inicio (loop).

---

## Descripción de YouTube (video largo)
https://atlas-lab-one.vercel.app/e/30?utm_source=youtube&utm_medium=video&utm_campaign=exp030-t3
Ficha del experimento #30 (Interruptor de emergencia + apalancamiento bajo): murió (No sirvió) · con ×1.5 sobrevive en 2014–2024 y 2007–2013 con Sharpe 0.03 y 0.05 y retorno ≈0% · mínimo del laboratorio fuera de muestra: 0.30.
Qué es un Sharpe y cómo leerlo, con ejemplos reales de la serie: de −2.31 a 2.12 (escala de referencia; cestas y periodos distintos).
Contenido educativo. No es asesoría financiera ni recomendación de inversión.

## Descripción del Short
https://atlas-lab-one.vercel.app/e/30?utm_source=youtube&utm_medium=short&utm_campaign=exp030-t3
Ficha del experimento #30: murió · Sharpe 0.03 y 0.05 con ×1.5, retorno ≈0%. Video completo en el canal. Contenido educativo, no es asesoría financiera.

## Capítulos
0:00 Gancho · 0:13 Qué es este experimento · 0:31 Qué mide el Sharpe · 0:54 El signo · 1:14 Una escala con ejemplos reales · 1:57 La trampa de los Sharpe altos · 2:32 Cuidado al comparar · 3:00 Qué dice un 0.03 en la práctica · 3:30 Qué mínimo exige el laboratorio · 3:48 Con tu capital · 3:55 Ficha del experimento #30

## Etiquetas
Sharpe ratio, qué es el Sharpe, riesgo y retorno, trading para principiantes, kill-switch, apalancamiento, bot de trading, backtest, fuera de muestra, trading con datos, atlas lab, trading algorítmico

## Rúbrica (autoevaluación, 1–5)
| Pieza | hook_0_3s | ritmo | promesa_cumplida | potencial_loop | claridad_no_traders | honestidad_atlas | audio | cta | Promedio |
|---|---|---|---|---|---|---|---|---|---|
| Largo | 4 | 4 | 5 | 4 | 5 | 5 | 4 | 4 | 4.38 |
| Short | 4 | 4 | 5 | 4 | 5 | 5 | 4 | 4 | 4.38 |

Hook ≥ 4 ✓ · honestidad 5 ✓. Punto débil: la escala mezcla experimentos con cestas y periodos distintos; lleva el aviso «escala de referencia, no ranking» y no se dan umbrales generales de «bueno» o «malo» que no estén en los datos.

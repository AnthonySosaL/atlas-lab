# Experimento #30 — Interruptor de emergencia + apalancamiento bajo · Tema 2: ×1.5, la zona segura

Tema 2 de 3 del experimento #030 · Qué aporta frente a los otros temas: junta lo que dicen los experimentos #28, #30, #31, #33 y #34 sobre cada nivel de apalancamiento (de ×1.5 a ×4) y muestra que la línea entre vivir y morir pasa siempre entre ×1.5 y ×2. El tema 1 cuenta solo el #30 y el repaso 16–30. Cubre también los experimentos #28, #31, #33 y #34. Se entiende sin haber visto los otros temas.
Estado del guion: **BORRADOR — pendiente de aprobación**
Estado del experimento: **murió** (veredicto del sitio: «No sirvió») · Serie G — Construyendo un bot (y por qué murió)
Datos usados: `experiments.json` (v=30: kpis, chart, verdict, notes; v=28, 31, 33 y 34: kpis, metrics, verdict, analysis, capital), `exp_details.json` (claves `extra-v28`, `extra-v30`, `…-v31`, `…-v33`, `…-v34`: filters, algo), tabla «Con tu capital» (archivo de capital en `docs/youtube/`; el #30 no tiene curva).
Nota de datos: el #30 publica solo dos Sharpe (0.03 y 0.05), el mínimo del laboratorio (0.30) y «retorno ≈ 0%»; las cifras salen de una reproducción con el motor del #28. Las cifras de los demás niveles de apalancamiento vienen de las fichas de los experimentos citados (variantes distintas del mismo bot; el video lo dice).
Producción (CLAUDE.md del canal): b-roll real detrás de cada escena con overlay oscuro 0.6, Ken Burns alternando in/out, subtítulos karaoke en MAYÚSCULAS con cifras en rojo, un dato visual por escena, golpe de bajo + sacudida solo en 1–2 momentos. Colores: rojo `#e11d2a`, verde `#22c55e`, fondo `#09090b`.

## Títulos (3 opciones)
1. ×1.5 sobrevivió en tres experimentos distintos: Sharpe 0.03, 0.09 y 0.05
2. La escalera del apalancamiento: de ×1.5 a ×4, quién vive y quién muere
3. Seguridad que no paga: por qué ×1.5 sobrevive y gana casi nada

## Miniatura (pensada para el título 2)
Fondo `#09090b`. Una escalera vertical con cinco peldaños (×1.5 verde `#22c55e`, ×2, ×2.5, ×3 y ×4 con ✕ rojas `#e11d2a`). Texto en Segoe UI Black: «SOLO ×1.5» (dos palabras, sin repetir los títulos). Logo ATLAS abajo a la derecha.

---

## VIDEO LARGO (16:9, ≈ 4:49 min)

**[0:00 — Gancho]** (pantalla: escalera de apalancamientos)
El apalancamiento ×1.5 sobrevivió en tres experimentos distintos. Su Sharpe: 0.03, 0.09 y 0.05. Con ×2, la cuenta muere. La línea entre vivir y morir siempre cae en el mismo sitio.
BOCETO: escalera de cinco peldaños; ×1.5 en verde, los demás con ✕ roja apareciendo de abajo arriba; contadores «0.03 · 0.09 · 0.05». Golpe de bajo en la ✕ del ×2. kb=in.

**[0:16 — Qué es este experimento]** (pantalla: rótulo con el número y el nombre)
Este es el experimento #30 de ATLAS Lab: Interruptor de emergencia más apalancamiento bajo. Todos los resultados están en la página del experimento. Lo junto con los experimentos 28, 31, 33 y 34, que probaron otros niveles de apalancamiento con el mismo bot.
BOCETO: rótulo «EXPERIMENTO #30 · Interruptor de emergencia + apalancamiento bajo» y debajo «28 · 31 · 33 · 34». kb=out.

**[0:36 — Qué es el apalancamiento]** (pantalla: dos barras que se multiplican)
Apalancamiento es operar con más dinero del que tienes: con ×2 mueves el doble, con ×4 el cuádruple. Multiplica las ganancias y también las pérdidas. Y una prop firm, la empresa que presta la cuenta y la cierra si pierdes demasiado, corta la cuenta si cae 10%. Con más apalancamiento, esa caída llega más rápido.
BOCETO: dos barras iguales; con «×4» ambas se cuadruplican: «gana más» y «pierde más»; línea de corte en −10%.

**[1:00 — La escalera]** (pantalla: tabla animada)
Esto dicen los experimentos, en 2014 a 2024. Con ×1.5: sobrevive. Sharpe de 0.03 en el 30, de 0.09 en el 31 y de 0.05 en el 33. Con ×2: muere. Menos 0.52 en el 28, menos 0.53 en el 31 y menos 0.58 en el 33, estas dos últimas el 11 de noviembre de 2016. Con ×2.5, menos 0.60 el 10 de noviembre de 2016. Con ×3, menos 1.06 en el 28 y en el 31, y menos 0.62 el 6 de octubre de 2016 en el 34. Con ×4, menos 1.59 y menos 1.58, este último el 5 de mayo de 2015.
| Apalancamiento | ¿Sobrevive 2014–24? | Sharpe 2014–24 |
|---|---|---|
| ×1.5 | Sí | 0.03 (#30) · 0.09 (#31) · 0.05 (#33) |
| ×2 | No | −0.52 (#28) · −0.53 (#31) · −0.58 (#33) |
| ×2.5 | No | −0.60 (#34) |
| ×3 | No | −1.06 (#28 y #31) · −0.62 (#34) |
| ×4 | No | −1.59 (#28) · −1.58 (#34) |
BOCETO: la tabla se llena fila por fila con la escalera al lado; los Sharpe positivos pequeños en verde, los negativos en rojo con sacudida en ×4. Nota al pie: «variantes distintas del mismo bot».

**[2:01 — Qué tiene ×1.5]** (pantalla: margen frente al piso)
¿Por qué ×1.5 sí aguanta? Porque con menos apalancamiento las caídas son más pequeñas, y la cuenta tarda más en cruzar el límite. En el experimento 31, con ×1.5, el punto más bajo de la cuenta fue 91,292, el 18 de noviembre de 2016, por encima del piso de 90,000. Con ×2, esa misma caída llevó la cuenta a 89,908, y se cerró.
BOCETO: curva real del #31 con el mínimo «91,292 · 18-nov-2016» sobre la línea de 90,000 y, en rojo, la curva ×2 cruzándola en «89,908 · 11-nov-2016».

**[2:31 — El precio de la seguridad]** (pantalla: balanza)
Pero la seguridad tiene un precio. Con ×1.5 el Sharpe, la ganancia por unidad de riesgo, queda en 0.03, 0.09 y 0.05, y el laboratorio pide 0.30 fuera de muestra. En el experimento 30, el retorno es de aproximadamente 0%; en el 31, de más 4.2% en 2014–2024, contra más 58.9% de comprar y esperar la misma cesta. La seguridad la pagas con ganancia.
BOCETO: balanza con «sobrevive» en un plato y «retorno» en el otro; barras 0.03 · 0.09 · 0.05 frente a la línea de 0.30 y a la barra «comprar y esperar +58.9%».

**[3:03 — Por qué no hay punto medio]** (pantalla: frontera de riesgo)
El experimento 34 lo resume: con filtros que reaccionan un día tarde, la protección no llega más allá de unas ×1.5. Subir el apalancamiento no crea ventaja, solo acelera el desenlace. Para pasar un reto necesitas ganar; para no reventar necesitas apostar poco. Con esta señal, no hay punto intermedio que haga las dos cosas.
BOCETO: escala ×1 … ×4 con una marca verde en ×1.5 «hasta aquí aguanta la protección rezagada» y marcas rojas en ×2, ×2.5, ×3 y ×4.

**[3:27 — Con tu capital]** (pantalla: tarjeta de capital sin curva)
En el experimento 30 no hay curva de capital: el retorno es de casi 0%, así que con cualquier capital el resultado sería prácticamente nulo. Para ver qué es un ×1.5 en dólares, el experimento 31: con 100,000 dólares simulados entre 2014 y 2024, termina en más 4,155. Comprar y esperar la misma cesta: más 58,879.
BOCETO: tarjeta «Con tu capital» del sitio sin curva para el #30 y «≈ 0%»; segunda tarjeta del #31: +$4,155 (gris) contra +$58,879 (verde).

**[3:54 — La lección]** (pantalla: texto)
La lección es doble. Una: el apalancamiento no es una estrategia, es un amplificador. Amplifica una ventaja si existe, y amplifica un vacío si no existe. Dos: ×1.5 no es una solución, es la zona donde el bot no se rompe mientras casi no gana. Para saber si hay ventaja, hace falta otra cosa.
BOCETO: «amplificador» sobre un altavoz; dos entradas: «ventaja → más ventaja», «nada → más nada».

**[4:17 — Ficha del experimento #30]** (pantalla: tarjeta con la URL)
Ficha del experimento #30, Interruptor de emergencia más apalancamiento bajo. Estado: murió. Cifra clave: con ×1.5 sobrevive en los dos periodos, con Sharpe de 0.03 y 0.05 y retorno de casi 0%. Filtro que decidió: Sharpe mínimo de 0.30 fuera de muestra. Lección: sobrevivir y ganar no se logran juntos con esta señal. Revísalo completo en atlas-lab-one.vercel.app/e/30. Contenido educativo, no es asesoría financiera. El trading no se promete: se prueba.
BOCETO: tarjeta final con cuatro líneas (estado · cifra clave · filtro que decidió · lección) y la URL «atlas-lab-one.vercel.app/e/30» en grande; logo ATLAS; fondo de velas con opacidad 0.12.

---

## SHORT (9:16, ≈ 47 s)

**[0-3 s]** «×1.5 sobrevivió tres veces. Ganó casi nada.»
BOCETO: escalera con ×1.5 en verde; tres contadores; golpe de bajo + sacudida.
**[3-11 s]** «Con ×2, ×2.5, ×3 y ×4, las cuentas mueren. Sharpe de menos 0.52 hasta menos 1.59.»
BOCETO: peldaños con ✕ rojas apareciendo; barras negativas. kb=out.
**[11-19 s]** «Con ×1.5, la cuenta toca 91,292. Con ×2, 89,908. El piso: 90,000.»
BOCETO: dos curvas contra la línea de 90,000: la verde por encima, la roja por debajo.
**[19-27 s]** «Pero ×1.5 casi no gana: más 4.2% en diez años, contra más 58.9% de comprar y esperar.»
BOCETO: barra gris pequeña frente a barra verde alta.
**[27-35 s]** «El apalancamiento no es una estrategia: es un amplificador. Sobrevivir y ganar, con esta señal, no van juntos.»
BOCETO: altavoz «amplificador» con dos entradas; balanza «sobrevivir / ganar».
**[35-43 s]** «Experimento 30 completo en el enlace. El video completo está en el canal. No es asesoría financiera. El trading no se promete: se prueba.»
BOCETO: tarjeta con «experimento #30 completo en el enlace» y la URL corta; logo ATLAS.
**[43-47 s]** «¿Cuánto apalancas tú?»
BOCETO: la escalera del inicio con interrogación; corte directo al inicio (loop).

---

## Descripción de YouTube (video largo)
https://atlas-lab-one.vercel.app/e/30?utm_source=youtube&utm_medium=video&utm_campaign=exp030-t2
Ficha del experimento #30 (Interruptor de emergencia + apalancamiento bajo): murió (No sirvió) · con ×1.5 sobrevive en 2014–2024 y 2007–2013 con Sharpe 0.03 y 0.05 y retorno ≈0% · el mínimo del laboratorio fuera de muestra es 0.30.
La escalera del apalancamiento con los experimentos #28, #31, #33 y #34: ×1.5 sobrevive; ×2, ×2.5, ×3 y ×4 mueren.
Contenido educativo. No es asesoría financiera ni recomendación de inversión.

## Descripción del Short
https://atlas-lab-one.vercel.app/e/30?utm_source=youtube&utm_medium=short&utm_campaign=exp030-t2
Ficha del experimento #30: murió · ×1.5 sobrevive con Sharpe 0.03 y 0.05 y retorno ≈0%. Video completo en el canal. Contenido educativo, no es asesoría financiera.

## Capítulos
0:00 Gancho · 0:16 Qué es este experimento · 0:36 Qué es el apalancamiento · 1:00 La escalera · 2:01 Qué tiene ×1.5 · 2:31 El precio de la seguridad · 3:03 Por qué no hay punto medio · 3:27 Con tu capital · 3:54 La lección · 4:17 Ficha del experimento #30

## Etiquetas
apalancamiento, ×1.5, kill-switch, gestión de riesgo, prop firm, Sharpe ratio, riesgo de ruina, bot de trading, backtest, trading con datos, atlas lab, trading algorítmico

## Rúbrica (autoevaluación, 1–5)
| Pieza | hook_0_3s | ritmo | promesa_cumplida | potencial_loop | claridad_no_traders | honestidad_atlas | audio | cta | Promedio |
|---|---|---|---|---|---|---|---|---|---|
| Largo | 4 | 4 | 5 | 4 | 4 | 5 | 4 | 4 | 4.25 |
| Short | 4 | 4 | 5 | 4 | 4 | 5 | 4 | 4 | 4.25 |

Hook ≥ 4 ✓ · honestidad 5 ✓. Punto débil: la tabla mezcla variantes distintas del mismo bot (kill-switch, φ y filtros cambian entre experimentos), por eso lleva nota al pie y el video lo dice; no se presenta como una sola curva.

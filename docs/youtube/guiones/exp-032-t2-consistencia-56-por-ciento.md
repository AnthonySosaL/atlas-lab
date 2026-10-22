# Experimento #32 — Validación ejecutable-reactiva · Tema 2: 56% de años positivos

Tema 2 de 3 del experimento #032 · Qué aporta frente a los otros temas: explica el concepto de consistencia (porcentaje de años positivos) y por qué se exige 60%, con las 18 barras del bot y su contraste con el 90% del filtro con el cierre del mismo día (#16). El tema 1 cuenta el mejor y el peor año y las seis crisis; el tema 3, la prueba de la suerte (Deflated Sharpe). Se entiende sin haber visto los otros temas.
Estado del guion: **BORRADOR — pendiente de aprobación**
Estado del experimento: **PARCIAL** (sobrevive con ×1.5, pero solo 10 de 18 años son positivos: 56%, bajo el mínimo de 60%) · Serie G — Construyendo un bot (y por qué murió)
Datos usados: `experiments.json` (v=32: analysis, notes, metrics, kpis, params_view, verdict, capital; v=16: kpis), `exp_details.json` (clave `…-v32`: algo con el retorno de cada año, filters), `series/20260610_140603_validacion-ejecutable-reactivo-v32.json`, tabla «Con tu capital» (archivo de capital en `docs/youtube/`).
Producción (CLAUDE.md del canal): b-roll real detrás de cada escena con overlay oscuro 0.6, Ken Burns alternando in/out, subtítulos karaoke en MAYÚSCULAS con cifras en rojo, un dato visual por escena, golpe de bajo + sacudida solo en 1–2 momentos. Colores: rojo `#e11d2a`, verde `#22c55e`, fondo `#09090b`.

## Títulos (3 opciones)
1. 56% de años positivos: qué mide la consistencia y por qué se exige 60%
2. 18 años de un bot en 18 barras: 10 verdes y 8 que no
3. Más consistente que rentable: el bot ×1.5 año por año

## Miniatura (pensada para el título 2)
Fondo `#09090b`. Una fila de 18 barras (10 verdes `#22c55e`, 8 rojas `#e11d2a` o grises) sobre una línea horizontal. Texto en Segoe UI Black: «56% < 60%» (sin repetir los títulos). Logo ATLAS arriba a la izquierda.

---

## VIDEO LARGO (16:9, ≈ 4:28 min)

**[0:00 — Gancho]** (pantalla: 18 barras de años)
Dieciocho años de mi bot, dieciocho barras. Diez en verde y ocho que no. Eso es 56% de años positivos, y la vara pedía 60%.
BOCETO: 18 barras que aparecen una a una cada 0.5 s con tick; contador de verdes hasta 10; línea roja «60%». Golpe de bajo al cerrar. kb=in.

**[0:12 — Qué es este experimento]** (pantalla: rótulo con el número y el nombre)
Este es el experimento #32 de ATLAS Lab: Validación ejecutable-reactiva. Todos los resultados están en la página del experimento. Es la lectura año por año, de 2007 a 2024, del mismo bot del experimento 31.
BOCETO: rótulo «EXPERIMENTO #32 · Validación ejecutable-reactiva» sobre velas con opacidad 0.12. kb=out.

**[0:28 — Por qué mirar año por año]** (pantalla: un total y sus partes)
Un retorno total puede esconder mucho. Una estrategia puede ganar mucho gracias a uno o dos años excepcionales y perder en el resto. Mirar el porcentaje de años positivos mide otra cosa: la regularidad. No pide ganar mucho; pide ser consistente.
BOCETO: dos curvas con el mismo final: una escalonada por un solo año enorme y otra con años parecidos; rótulo «¿cuántos años ganan?».

**[0:45 — La vara]** (pantalla: dos casillas)
La regla del experimento para llamarlo «sirvió» tiene dos casillas: sobrevivir en los dos periodos, 2014–2024 y 2007–2013, y que al menos el 60% de los años terminen en positivo. Con ×1.5 sobrevive. Falta ver la segunda.
BOCETO: checklist de dos casillas: «sobrevive en los dos periodos» ✓ y «≥ 60% de los años en positivo» ?.

**[1:03 — Las 18 barras]** (pantalla: barras por año)
Los años positivos: 2007, 2010, 2011, 2012, 2014, 2017, 2019, 2020, 2021 y 2024. Diez. Los otros ocho: 2008, que termina en 0.0%, y 2009, 2013, 2015, 2016, 2018, 2022 y 2023, que pierden. El mejor es 2017, con más 6.5%. El peor, 2018, con menos 6.2%. Ojo: 2007 y 2014 son años parciales.
BOCETO: gráfico de barras de `exp_details.algo`: positivos en verde (2017 +6.5% resaltado), el resto en rojo (2018 −6.2% resaltado) y 2008 en gris «0.0%»; asterisco en 2007 y 2014 «año parcial».

**[1:39 — El marcador]** (pantalla: porcentaje)
Diez de dieciocho es 56%. El mínimo era 60%. No pasa. Ningún año del bot supera más 6.5% ni baja de menos 6.2%: es un bot de rango estrecho. Su crecimiento es de unos 0.4% al año con ×1.5, con un Sharpe de 0.09 y una caída máxima de menos 11.6%.
BOCETO: marcador «10 / 18 = 56%» frente a «60%»; tarjetas «≈ 0.4% al año · Sharpe 0.09 · −11.6%».

**[2:04 — Un contraste: el filtro del mismo día]** (pantalla: dos medidores)
Un contraste. El filtro del experimento 16, que decide con el cierre del mismo día, tuvo 90% de años positivos, 9 de 10, entre 2015 y 2024. Es otro bot, con ×3, y una información que un bot real no tiene. Con la señal ejecutable, la regularidad baja a 56%. La consistencia, igual que el Sharpe, depende de la hora a la que se conocen los datos.
BOCETO: dos medidores: «#16 · cierre del mismo día: 90% (9/10)» verde y «#32 · señal ejecutable: 56% (10/18)» ámbar; nota «bots distintos».

**[2:35 — El escenario que los datos no respaldan]** (pantalla: tarjeta gris)
Hay un escenario que luce mejor. Si el bot pudiera esquivar la mitad del día de pánico, es decir, φ de 0.5, el mismo ×1.5 tendría un Sharpe de 0.37 y 61% de años positivos. Pasaría. Pero eso exige salir al abrir Wall Street sabiendo cómo cierra el día, y los datos horarios dicen que el φ real es 0.90. Esa tarjeta se queda en gris.
BOCETO: tarjeta gris «φ = 0.5 → 61% y Sharpe 0.37» con el rótulo «no respaldado por los datos»; al lado, «φ medido 0.90 → 56%».

**[3:05 — Qué dice esto del bot]** (pantalla: texto)
Sobrevivir no basta, y tampoco basta sobrevivir con años verdes. El bot ×1.5 es modesto: no bate a comprar y esperar, que dio más 58.9% con Sharpe de 0.47 en 2014–2024, y está muy lejos de lo que necesita un reto de fondeo corto. Es un resultado parcial, y se publica como tal.
BOCETO: sello «PARCIAL»; barra gris pequeña «+4.2%» frente a la verde alta «+58.9%».

**[3:28 — Con tu capital]** (pantalla: tarjeta de capital $100,000)
Con 100,000 dólares simulados entre 2014 y 2024, el bot termina en más 4,155. Comprar y esperar la misma cesta: más 58,879. Es una simulación histórica, no una promesa.
BOCETO: tarjeta «Con tu capital» del sitio: +$4,155 contra +$58,879; pie «simulación histórica».

**[3:43 — Cómo usar esta vara]** (pantalla: pregunta)
La vara se puede usar con cualquier estrategia que te muestren: no preguntes solo cuánto ganó, pregunta en cuántos años. Si un resultado depende de uno o dos años, el total engaña.
BOCETO: pregunta «¿en cuántos años ganó?» sobre las 18 barras.

**[3:57 — Ficha del experimento #32]** (pantalla: tarjeta con la URL)
Ficha del experimento #32, Validación ejecutable-reactiva. Estado: parcial. Cifra clave: 10 de 18 años positivos, 56%, y Sharpe de 0.09. Filtro que decidió: el mínimo de 60% de años positivos; además, 2 de 6 crisis en positivo. Lección: la consistencia pone a prueba lo que el total esconde. Revísalo completo en atlas-lab-one.vercel.app/e/32. Contenido educativo, no es asesoría financiera. El trading no se promete: se prueba.
BOCETO: tarjeta final con cuatro líneas (estado · cifra clave · filtro que decidió · lección) y la URL «atlas-lab-one.vercel.app/e/32» en grande; logo ATLAS; fondo de velas con opacidad 0.12.

---

## SHORT (9:16, ≈ 47 s)

**[0-4 s]** «Diez de 18 años en positivo: 56%, no 60%.»
BOCETO: 18 barras, 10 verdes; línea roja «60%»; golpe de bajo + sacudida.
**[4-11 s]** «La vara pedía 60% de años positivos: no solo ganar mucho, ser consistente.»
BOCETO: checklist de dos casillas, la segunda con interrogación. kb=out.
**[11-19 s]** «El mejor año, 2017: más 6.5%. El peor, 2018: menos 6.2%. Un bot de rango estrecho: Sharpe 0.09.»
BOCETO: barras 2017 y 2018 resaltadas.
**[19-27 s]** «El filtro con el cierre del mismo día tenía 90% de años positivos. Con la señal ejecutable, 56%.»
BOCETO: dos medidores: 90% verde y 56% ámbar.
**[27-35 s]** «Con fi 0.5 sería 61%. Pero los datos horarios dicen que el fi real es 0.90.»
BOCETO: tarjeta gris «61% · no respaldado» y la aguja en 0.90.
**[35-43 s]** «Experimento 32 completo en el enlace. El video completo está en el canal. No es asesoría financiera. El trading no se promete: se prueba.»
BOCETO: tarjeta con «experimento #32 completo en el enlace» y la URL corta; logo ATLAS.
**[43-47 s]** «¿Cuántos años ganó tu estrategia?»
BOCETO: las 18 barras del inicio; corte directo al inicio (loop).

---

## Descripción de YouTube (video largo)
https://atlas-lab-one.vercel.app/e/32?utm_source=youtube&utm_medium=video&utm_campaign=exp032-t2
Ficha del experimento #32 (Validación ejecutable-reactiva): parcial · 10 de 18 años positivos (56%, mínimo 60%) · Sharpe 0.09 · mejor año 2017 (+6.5%), peor 2018 (−6.2%) · 2 de 6 crisis en positivo.
Qué mide el porcentaje de años positivos, por qué se exige 60% y qué cambia cuando la señal es ejecutable.
Contenido educativo. No es asesoría financiera ni recomendación de inversión.

## Descripción del Short
https://atlas-lab-one.vercel.app/e/32?utm_source=youtube&utm_medium=short&utm_campaign=exp032-t2
Ficha del experimento #32: parcial · 10 de 18 años positivos (56%); el mínimo era 60%. Video completo en el canal. Contenido educativo, no es asesoría financiera.

## Capítulos
0:00 Gancho · 0:12 Qué es este experimento · 0:28 Por qué mirar año por año · 0:45 La vara · 1:03 Las 18 barras · 1:39 El marcador · 2:04 Un contraste: el filtro del mismo día · 2:35 El escenario que los datos no respaldan · 3:05 Qué dice esto del bot · 3:28 Con tu capital · 3:43 Cómo usar esta vara · 3:57 Ficha del experimento #32

## Etiquetas
años positivos, consistencia, retorno anual, bot de trading, backtest, validación de estrategias, Sharpe ratio, prop firm, estrategia de trading, trading con datos, atlas lab, trading algorítmico

## Rúbrica (autoevaluación, 1–5)
| Pieza | hook_0_3s | ritmo | promesa_cumplida | potencial_loop | claridad_no_traders | honestidad_atlas | audio | cta | Promedio |
|---|---|---|---|---|---|---|---|---|---|
| Largo | 4 | 4 | 5 | 4 | 5 | 5 | 4 | 4 | 4.38 |
| Short | 4 | 4 | 5 | 4 | 5 | 5 | 4 | 4 | 4.38 |

Hook ≥ 4 ✓ · honestidad 5 ✓. Punto débil: el contraste con el 90% del #16 mezcla dos bots distintos; el video lo aclara («otro bot, con ×3 y cierre del mismo día»). La lista de años se lee agrupada para no cansar.

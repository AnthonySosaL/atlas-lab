# Experimento #27 — Prueba de fuego: reentrada con retraso de 1 día · Tema 3: cinco cuentas, un mismo máximo

Tema 3 de 3 del experimento #027 · Qué aporta frente a los otros temas: junta las curvas de capital de cinco experimentos ejecutables (#27, #28, #29, #33 y #34) y muestra un detalle que ninguna ficha cuenta por separado: todas tocan su máximo el mismo día y terminan bajo el piso de 90,000. Es un tema de «letra pequeña» de la prop firm. Cubre también los experimentos #28, #29, #33 y #34. Se entiende sin haber visto los otros temas.
Estado del guion: **BORRADOR — pendiente de aprobación**
Estado del experimento: **murió** (veredicto del sitio: «No sirvió») · Serie G — Construyendo un bot (y por qué murió)
Datos usados: `series/20260610_135143_prueba-de-fuego-lag-1-re-entrada-v27.json`, `series/extra-v28.json`, `series/extra-v29.json`, `series/20260610_140718_disparo-temprano-del-filtro-v33.json` y `series/20260610_140720_graduado-vix-14-ejecutable-v34.json` (1.ª curva de cada una: máximo, fecha del máximo, cierre); `experiments.json` (v=27, 28, 29, 33, 34: params_view, period, capital); `exp_details.json` (v33: «piso de 90,000»).
Producción (CLAUDE.md del canal): b-roll real detrás de cada escena con overlay oscuro 0.6, Ken Burns alternando in/out, subtítulos karaoke en MAYÚSCULAS con cifras en rojo, un dato visual por escena, golpe de bajo + sacudida solo en 1–2 momentos. Colores: rojo `#e11d2a`, verde `#22c55e`, fondo `#09090b`.

## Títulos (3 opciones)
1. Cinco cuentas tocaron su máximo el mismo día: 25 de febrero de 2015
2. Cinco bots, un mismo máximo y ninguno llegó vivo a 2017
3. Cinco cuentas de 100,000 dólares terminaron entre 88,507 y 89,968

## Miniatura (pensada para el título 1)
Fondo `#09090b`. Cinco curvas de colores distintos que nacen de 100,000, suben juntas hasta un mismo punto marcado con una chincheta y luego caen, cada una cortada con una ✕ roja `#e11d2a`. Texto en Segoe UI Black: «MISMO DÍA» (dos palabras, sin repetir los títulos). Logo ATLAS abajo a la derecha.

---

## VIDEO LARGO (16:9, ≈ 4:34 min)

**[0:00 — Gancho]** (pantalla: cinco curvas con un mismo pico)
Cinco cuentas distintas tocaron su máximo el mismo día: el 25 de febrero de 2015. Ninguna llegó viva a 2017.
BOCETO: cinco curvas que suben juntas hasta una chincheta «25-feb-2015»; luego caen y se cortan con ✕ una a una. Golpe de bajo en la quinta.

**[0:10 — Qué es este experimento]** (pantalla: rótulo con el número y el nombre)
Este es el experimento #27 de ATLAS Lab: Prueba de fuego, reentrada con retraso de 1 día. Todos los resultados están en la página del experimento. Aquí lo junto con cuatro experimentos más, el 28, el 29, el 33 y el 34, que comparten un mismo punto de partida.
BOCETO: rótulo «EXPERIMENTO #27 · Prueba de fuego: reentrada con retraso de 1 día» y debajo los números 28 · 29 · 33 · 34. kb=out.

**[0:34 — El punto de partida]** (pantalla: cuenta de 100,000)
Todas las cuentas parten de 100,000 dólares simulados, con las señales de ayer, la única versión que un bot real puede ejecutar (en el 33 y el 34, salvo el día del disparo, cuando el bot sale con lo que puede ver a esa hora), y con las reglas de una prop firm: la empresa que presta la cuenta y la cierra si pierdes demasiado. En el experimento 33, la propia ficha habla de un piso de 90,000: si la cuenta cae a ese nivel, se cierra.
BOCETO: una cuenta de 100,000 con una línea roja horizontal «piso 90,000». kb=in.

**[1:02 — Las cinco cuentas]** (pantalla: tabla animada)
Estas son las cinco. La re-entrada del experimento 27, con ×3 y ×2 al volver: máximo de 102,983 y cierre el 12 de julio de 2015, en 89,968. El kill-switch de menos 3% del experimento 28, con ×3: máximo de 106,496 y cierre el 29 de junio de 2015, en 89,186. El de menos 2.5% del 29: el mismo máximo y cierre el 5 de mayo de 2015, en 88,507. El filtro de pánico con ×2 del 33: máximo de 102,580 y cierre el 11 de noviembre de 2016, en 89,358. Y el apalancamiento graduado del 34: máximo de 103,154 y cierre el 10 de noviembre de 2016, en 89,822.
| Exp. | Variante | Máximo (25-feb-2015) | Cierre | Final |
|---|---|---|---|---|
| #27 | Re-entrada ×3 / ×2, señal de ayer | 102,983 | 12-jul-2015 | 89,968 |
| #28 | ×3, kill-switch −3% | 106,496 | 29-jun-2015 | 89,186 |
| #29 | ×3, kill-switch −2.5% | 106,496 | 5-may-2015 | 88,507 |
| #33 | ×2, filtro VIX 28 / crédito 40 | 102,580 | 11-nov-2016 | 89,358 |
| #34 | ×2.5 en calma, ×1.5 el resto | 103,154 | 10-nov-2016 | 89,822 |
BOCETO: tabla que se llena fila por fila; cada curva real de `series/` se dibuja al lado con su ✕ y su fecha; las cinco comparten la chincheta del 25-feb-2015.

**[2:02 — Por qué el mismo día]** (pantalla: una ruta, cinco vehículos)
¿Por qué el mismo día? Las fichas no lo explican con un evento. Lo que dicen es que todas operan una cesta de activos ponderada por riesgo; y lo que muestran las curvas es que suben y bajan juntas. Son versiones del mismo bot: cuando la cesta sube, todas suben; cuando cae, todas caen. El máximo coincide porque el camino es el mismo.
BOCETO: una carretera con cinco coches de colores distintos; todos llegan juntos a la cima del 25-feb-2015 y todos bajan.

**[2:27 — Dos grupos de muertes]** (pantalla: línea de tiempo 2015–2016)
Las cuentas se reparten en dos grupos. Tres mueren en 2015: el 5 de mayo, el 29 de junio y el 12 de julio. Dos mueren en noviembre de 2016, con un día de diferencia: el 10 y el 11. Ninguna sobrevive al piso de 90,000 y ninguna llega viva a 2017.
BOCETO: línea de tiempo 2015–2016 con cinco ✕ en sus fechas; las de 2015 en un grupo y las de noviembre de 2016, pegadas.

**[2:54 — La raya de 90,000]** (pantalla: finales sobre la raya)
Fíjate en los finales: 88,507; 89,186; 89,358; 89,822 y 89,968. Los cinco quedan justo bajo 90,000. La cuenta se cierra el día en que cruza la raya, y el cierre queda un poco por debajo. Es lo que ve el sitio en «Con tu capital»: una curva que termina de golpe, no una inversión que sigue corriendo.
BOCETO: los cinco finales como puntos justo debajo de la línea roja de 90,000, con sus cifras; ampliar la zona.

**[3:20 — Cinco cuentas no son cinco pruebas]** (pantalla: una caja origen)
Una lección: cinco cuentas que comparten el mismo camino no son cinco confirmaciones independientes. Es la misma historia contada con cinco apalancamientos y cinco reglas de salida. Y la historia es una: con la señal de ayer, ninguna de estas versiones sobrevive 2014–2024.
BOCETO: cinco flechas que nacen de una misma caja «misma cesta, mismo camino»; sello «una sola historia».

**[3:38 — Con tu capital]** (pantalla: tarjeta de capital $10,000 / $100,000)
Con la primera de ellas, la re-entrada del experimento 27, y 10,000 dólares, la curva termina en menos 996; con 100,000, en menos 9,959. Comprando y esperando en esas fechas: menos 443 y menos 4,428.
BOCETO: tarjeta «Con tu capital» del sitio con el selector; curva roja cortada el 12-jul-2015 y gris «Sin estrategia».

**[3:57 — Ficha del experimento #27]** (pantalla: tarjeta con la URL)
Ficha del experimento #27, Prueba de fuego con retraso de 1 día. Estado: murió. Cifra clave: con la señal de ayer, la re-entrada da un Sharpe de menos 1.00 y la cuenta se cierra el 12 de julio de 2015 con menos 10.0%. Filtros que decidieron: la señal rezagada y las reglas de la prop firm. Lección: cinco cuentas con el mismo máximo cuentan una sola historia. Revísalo completo en atlas-lab-one.vercel.app/e/27. Contenido educativo, no es asesoría financiera. El trading no se promete: se prueba.
BOCETO: tarjeta final con cuatro líneas (estado · cifra clave · filtro que decidió · lección) y la URL «atlas-lab-one.vercel.app/e/27» en grande; logo ATLAS; fondo de velas con opacidad 0.12.

---

## SHORT (9:16, ≈ 47 s)

**[0-3 s]** «Cinco cuentas. Un mismo máximo: febrero de 2015.»
BOCETO: cinco curvas que suben hasta una chincheta; golpe de bajo + sacudida.
**[3-11 s]** «Son cinco versiones del mismo bot: un freno de menos 3%, uno de menos 2.5%, un filtro de pánico, un apalancamiento graduado.»
BOCETO: cinco chips con sus nombres sobre las curvas. kb=out.
**[11-20 s]** «Cierres: 5 de mayo, 29 de junio y 12 de julio de 2015; 10 y 11 de noviembre de 2016.»
BOCETO: línea de tiempo con cinco ✕ cayendo en sus fechas.
**[20-29 s]** «Finales: de 88,507 a 89,968. Todas justo bajo el piso de 90,000. Ninguna llegó viva a 2017.»
BOCETO: cinco puntos bajo la línea roja de 90,000, con zoom.
**[29-35 s]** «Cinco cuentas con el mismo camino no son cinco pruebas. Es una sola historia.»
BOCETO: cinco flechas que nacen de una misma caja.
**[35-43 s]** «Experimento 27 completo en el enlace. El video completo está en el canal. No es asesoría financiera. El trading no se promete: se prueba.»
BOCETO: tarjeta con «experimento #27 completo en el enlace» y la URL corta; logo ATLAS.
**[43-47 s]** «Cinco cuentas, un mismo día…»
BOCETO: las cinco curvas del inicio; corte directo al inicio (loop: la frase queda abierta).

---

## Descripción de YouTube (video largo)
https://atlas-lab-one.vercel.app/e/27?utm_source=youtube&utm_medium=video&utm_campaign=exp027-t3
Ficha del experimento #27 (Prueba de fuego: reentrada con retraso de 1 día): murió (No sirvió) · con la señal de ayer, Sharpe −1.00 y cuenta cerrada el 12-jul-2015 (−10.0%) · se compara con los experimentos #28, #29, #33 y #34.
Cinco cuentas de 100,000 dólares tocan su máximo el 25-feb-2015 y terminan entre 88,507 y 89,968, bajo el piso de 90,000.
Contenido educativo. No es asesoría financiera ni recomendación de inversión.

## Descripción del Short
https://atlas-lab-one.vercel.app/e/27?utm_source=youtube&utm_medium=short&utm_campaign=exp027-t3
Ficha del experimento #27: murió · cinco cuentas con el mismo máximo (25-feb-2015) y finales entre 88,507 y 89,968. Video completo en el canal. Contenido educativo, no es asesoría financiera.

## Capítulos
0:00 Gancho · 0:10 Qué es este experimento · 0:34 El punto de partida · 1:02 Las cinco cuentas · 2:02 Por qué el mismo día · 2:27 Dos grupos de muertes · 2:54 La raya de 90,000 · 3:20 Cinco cuentas no son cinco pruebas · 3:38 Con tu capital · 3:57 Ficha del experimento #27

## Etiquetas
prop firm, piso de 90,000, drawdown, curva de capital, kill-switch, apalancamiento, bot de trading, backtest, señal de ayer, trading con datos, atlas lab

## Rúbrica (autoevaluación, 1–5)
| Pieza | hook_0_3s | ritmo | promesa_cumplida | potencial_loop | claridad_no_traders | honestidad_atlas | audio | cta | Promedio |
|---|---|---|---|---|---|---|---|---|---|
| Largo | 5 | 4 | 5 | 4 | 4 | 5 | 4 | 4 | 4.38 |
| Short | 5 | 4 | 5 | 4 | 4 | 5 | 4 | 4 | 4.38 |

Hook ≥ 4 ✓ · honestidad 5 ✓. Punto débil: los máximos y cierres salen de las curvas de `series/` (no de las fichas), y el motivo del máximo común no está en las fichas; el video lo declara. El piso de 90,000 se cita como lo describe el #33.

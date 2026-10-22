# Experimento #30 — Interruptor de emergencia + apalancamiento bajo

Estado del guion: **BORRADOR — pendiente de aprobación** (datos escasos: ver «Nota de datos»)
Estado del experimento: **murió** (veredicto del sitio: «No sirvió») · Serie G — Construyendo un bot (y por qué murió)
Datos usados: `experiments.json` (v=30: kpis, chart, metrics, params_view, verdict, analysis, notes, capital), `exp_details.json` (clave `extra-v30`: algo, filters). No tiene curva en `series/` ni fila de curva en la tabla «Con tu capital» (archivo de capital en `docs/youtube/`: figura en «Sin curva de capital»). Relacionados: #28 y #29.
Nota de datos: el experimento publica solo dos Sharpe (0.03 y 0.05), el mínimo del laboratorio (0.30) y «retorno ≈ 0%»; no hay curva, drawdown ni retorno exacto, y la corrida exacta no está en el repositorio (cifras de una reproducción con el motor del #28). Por eso el video largo es corto y el «Con tu capital» no lleva cifras.

## Títulos
1. Bajé el apalancamiento a ×1.5: la cuenta sobrevive, pero gana ≈0%
2. Sharpe 0.03: el bot que sobrevive y no sirve para nada
3. Un intercambio sin salida: sobrevivir o ganar (kill-switch + ×1.5)

## Miniatura
Fondo `#09090b`. A la izquierda, un escudo verde `#22c55e` con «SOBREVIVE»; a la derecha, una alcancía vacía y, en gris y Segoe UI Black, «SIN PREMIO» (dos palabras, sin repetir los títulos). Logo ATLAS abajo a la derecha.

---

## VIDEO LARGO (16:9, ≈ 4:36 min)
Ritmo visual: algo cambia en pantalla cada 2-3 s; los pasos de cada boceto van en orden. Fórmula del canal: b-roll real detrás, Ken Burns alterno, subtítulos karaoke, whoosh + flash en cada corte.

**[0:00 — Gancho]** (pantalla: escudo verde y barra casi vacía)
Después de ver morir cuentas con ×2, ×3 y ×4, bajé el apalancamiento a ×1.5, con el kill-switch de menos 3% y las señales de ayer. Por fin, la cuenta sobrevive en los dos periodos. El problema: el Sharpe, el retorno por unidad de riesgo, es de 0.03 y de 0.05, y el retorno, casi cero.
> Boceto: tres cuentas (×2, ×3, ×4) que se tiñen de rojo y se cortan; una cuarta, ×1.5, queda en verde; al lado, la barra de Sharpe 0.03 casi invisible; golpe de bass.

**[0:24 — Dónde encaja en la serie]** (pantalla: mapa de la serie, #15 al #30)
Este es el tercero de los experimentos ejecutables, y el último de este tramo de la serie. El #28 probó un freno a menos 3%; el #29, un freno más temprano; este baja el apalancamiento para intentar sobrevivir al crash.
> Boceto: puntos #28, #29 y #30 unidos; el #30 iluminado; flecha final «cierre de esta serie».

**[0:41 — La idea: sobrevivir primero]** (pantalla: dial bajando)
Si el problema es morir, la solución evidente es apostar menos. Con ×1.5, las posiciones son una vez y media el capital, en lugar de tres veces. Se mantienen el freno de menos 3% del día, con 0.2% de deslizamiento, y la señal rezagada un día.
> Boceto: dial de apalancamiento que baja de ×3 a ×1.5; chips «kill-switch −3%», «deslizamiento 0.2%» y «señal de ayer».

**[1:01 — Cómo se probó]** (pantalla: checklist de filtros)
Dos periodos, 2014 a 2024 y 2007 a 2013, con las reglas de una prop firm, la empresa que presta la cuenta y la cierra si pierdes demasiado. Costos: solo el deslizamiento del freno; sin spread ni comisiones. Una nota de transparencia: la corrida exacta no está en el repositorio, y las cifras salen de una reproducción con el motor ejecutable del experimento 28.
> Boceto: checklist de `exp_details.json`: «señal rezagada 1 día: pasa», «×1.5 sobrevive a la prop firm: pasa», «Sharpe ≥ 0.30: FALLA», «costos: solo deslizamiento».

**[1:28 — Resultados]** (pantalla: barras de Sharpe contra el mínimo)
Con ×1.5, la cuenta sobrevive en los dos periodos. El Sharpe es de 0.03 en 2014 a 2024 y de 0.05 en 2007 a 2013. El mínimo que exige el laboratorio fuera de muestra es 0.30. Y el retorno es de aproximadamente 0%.
> Boceto: gráfico de barras de `experiments.json` (chart «Sharpe con ×1.5 frente al mínimo»): 0.03 y 0.05 en gris, la barra de referencia de 0.30 en azul punteado; tarjeta «retorno ≈ 0%».

**[1:47 — Qué es el mínimo de 0.30]** (pantalla: línea de referencia)
Una aclaración sobre el 0.30. El laboratorio exige un Sharpe de al menos 0.30 fuera de muestra, es decir, en datos que la estrategia no vio cuando se diseñó. Es el piso para considerar que una idea tiene algo. Con 0.03 y 0.05, esta queda lejos de ese piso.
> Boceto: una línea de piso en 0.30 y dos barras diminutas en 0.03 y 0.05 muy por debajo.

**[2:08 — Por qué el retorno es casi cero]** (pantalla: posiciones pequeñas)
¿Por qué el retorno es casi cero? Porque el apalancamiento bajo reduce el tamaño de las pérdidas, pero también el de las ganancias: con ×1.5, las posiciones son pequeñas y el resultado neto queda en casi nada. La seguridad que compraste con el apalancamiento bajo la pagas con ganancia.
> Boceto: una balanza con «seguridad» en un plato y «retorno» en el otro; al bajar de ×3 a ×1.5, el primero sube y el segundo se achica hasta casi tocar la mesa.

**[2:29 — Un intercambio sin salida]** (pantalla: balanza)
Es un intercambio sin salida. Bajar el apalancamiento evita reventar la cuenta, pero el retorno cae tanto que la estrategia deja de servir. Para pasar un reto de prop firm necesitas ganar; para no reventar necesitas apostar poco. Con esta señal, no hay punto intermedio que haga las dos cosas.
> Boceto: balanza con «sobrevivir» en un plato y «ganar» en el otro; cuando uno baja, el otro sube; rótulo «sin punto medio».

**[2:51 — Qué haría falta para creerle]** (pantalla: tres candados)
Aun si el retorno hubiera sido positivo, haría falta un Sharpe de al menos 0.30 fuera de muestra, costos de mercado completos y una prueba en datos que el bot nunca vio. Con un retorno de casi 0%, la discusión se termina antes de empezar.
> Boceto: tres candados («Sharpe ≥ 0.30», «costos completos», «datos nuevos») y una cifra «≈ 0%» que los deja cerrados.

**[3:10 — Con tu capital]** (pantalla: tarjeta de capital sin curva)
Este experimento no tiene curva de cartera: mide si bajar el apalancamiento a ×1.5 con kill-switch sobrevive las reglas de la prop firm. Sobrevive, pero con retorno de casi 0%, así que con cualquier capital el resultado sería prácticamente nulo.
> Boceto: tarjeta «Con tu capital» del sitio sin curva y con el texto «sin curva de capital»; sobre ella, los selectores $10,000 y $100,000 apagados y el rótulo «≈ 0%».

**[3:28 — Repaso de los experimentos 16 al 30]** (pantalla: recorrido)
Repasemos el recorrido. El filtro macro del experimento 16 dio un Sharpe de 1.23 y más 267.3%. Con ×5 en calma, el experimento 19, más 591.5%. Con IA para el tamaño, el experimento 25, más 203.8%. Con re-entrada, el experimento 26, más 1,226.7%. Todos con la señal del mismo día. Con la señal de ayer, el experimento 27, la base da menos 0.17 y la re-entrada, menos 1.00. Con kill-switch, el experimento 28, ningún apalancamiento sobrevive; y con ×1.5, un Sharpe de 0.03.
> Boceto: línea con una escalera de números ascendente (267.3, 591.5, 1,226.7) marcados en ámbar «mismo día», seguida de una caída a −0.17, −1.00 y 0.03 en rojo con la etiqueta «señal de ayer».

**[4:03 — Conclusión]** (pantalla: texto grande)
Veredicto: no sirvió. Con ×1.5 sobrevive en los dos periodos, pero con un Sharpe de 0.03 y de 0.05, por debajo del 0.30 que exige el laboratorio, y un retorno de casi cero. No alcanza para pasar un reto.
> Boceto: sello rojo «NO SIRVIÓ»; frase final «El trading no se promete: se prueba».

**[4:20 — Cierre]** (pantalla: logo y enlace)
En los siguientes videos de la serie, el bot se prueba con datos horarios y cierra con un veredicto final de 40 experimentos. Todos los datos en atlas-lab-one.vercel.app, experimento 30. Contenido educativo, no es asesoría financiera.
> Boceto: pantalla final con enlace y logo ATLAS; fondo de velas animadas con opacidad 0.12.

---

## SHORT (9:16, ≈ 43 s)
Fórmula visual: b-roll Pexels vertical + overlay oscuro 0.6, Ken Burns alternando in/out, subtítulos karaoke en MAYÚSCULAS con las cifras en rojo, whoosh + flash en cada corte, golpe de bass + sacudida solo en el 0-3 s y en el «0.03»; ticker arriba, viñeta y velas con opacidad ≤ 0.12.

**[0-3 s]** "La cuenta sobrevive. Gana casi cero: Sharpe 0.03."
> Boceto: escudo verde «SOBREVIVE» y, al lado, la barra de Sharpe 0.03 casi vacía; texto gigante «≈ 0%».
**[3-8 s]** "Después de ver morir cuentas con ×2, ×3 y ×4, bajé el apalancamiento a ×1.5."
> Boceto: tres cuentas rojas cortadas y una cuarta verde con «×1.5».
**[8-11 s]** "Con kill-switch de menos 3% y señales de ayer."
> Boceto: botón de emergencia y reloj «decide hoy, opera mañana».
**[11-16 s]** "Por fin sobrevive en los dos periodos: 2014 a 2024 y 2007 a 2013."
> Boceto: dos barras de tiempo con checks verdes.
**[16-18 s]** "Pero el Sharpe es 0.03 y 0.05."
> Boceto: dos barras diminutas con las cifras en rojo y golpe de bass.
**[18-21 s]** "El laboratorio exige al menos 0.30 fuera de muestra."
> Boceto: línea de referencia en 0.30 muy por encima de las dos barras.
**[21-28 s]** "El retorno es casi 0%: con cualquier capital, el resultado sería prácticamente nulo. Es un intercambio sin salida."
> Boceto: balanza «sobrevivir / ganar» con un plato arriba y el otro abajo.
**[28-33 s]** "Bajar el apalancamiento evita reventar, pero el retorno cae tanto que no sirve para pasar un reto."
> Boceto: dial de apalancamiento bajando junto a una barra de retorno que se achica.
**[33-43 s]** "El trading no se promete: se prueba. El video completo está en el canal. No es asesoría financiera. Y cuando alguien te diga que su bot sobrevive:"
> Boceto: frase de marca en blanco; logo ATLAS; corte directo al inicio (loop).

## Descripción (YouTube)
Kill-switch de −3% con apalancamiento bajo (×1.5) y señal rezagada un día, para intentar sobrevivir al crash.
La cuenta sobrevive en 2014–2024 y 2007–2013, pero con Sharpe de 0.03 y 0.05 (el laboratorio exige 0.30 fuera de muestra) y un retorno de ≈0%: no sirve para pasar un reto de prop firm.
Un intercambio sin salida.
Todos los datos: https://atlas-lab-one.vercel.app (experimento #30)
Contenido educativo. No es asesoría financiera ni recomendación de inversión.

Capítulos: 0:00 Gancho · 0:24 Dónde encaja en la serie · 0:41 La idea: sobrevivir primero · 1:01 Cómo se probó · 1:28 Resultados · 1:47 Qué es el mínimo de 0.30 · 2:08 Por qué el retorno es casi cero · 2:29 Un intercambio sin salida · 2:51 Qué haría falta para creerle · 3:10 Con tu capital · 3:28 Repaso de los experimentos 16 al 30 · 4:03 Conclusión · 4:20 Cierre

Etiquetas: kill-switch, apalancamiento bajo, sobrevivir, gestión de riesgo, bot de trading, prop firm, Sharpe ratio, backtest, trading con datos, ATLAS Lab, trading algorítmico, riesgo de ruina

## Rúbrica (autoevaluación del Short)
hook_0_3s 4 · ritmo 4 · promesa_cumplida 4 · potencial_loop 4 · claridad_no_traders 4 · honestidad_atlas 5 · audio 4 · cta 4 → promedio 4.13 (aprobado: ≥ 4.0, hook ≥ 4, honestidad 5)
Notas: el gancho contrapone «sobrevive» con «gana casi cero» y da un número (0.03); es el experimento con menos material, por eso la promesa cumplida y el potencial de loop quedan en 4. La honestidad es 5 porque no se inventa ninguna cifra de retorno ni de capital.

## Otros temas de este experimento
- Tema 1: `exp-030-kill-switch-leverage-bajo.md` — Interruptor de emergencia + apalancamiento bajo
- Tema 2: `exp-030-t2-x1-5-zona-segura.md` — ×1.5, la zona segura
- Tema 3: `exp-030-t3-escala-del-sharpe.md` — cómo leer un Sharpe de 0.03
- Ver también (temas de otro experimento que usan las cifras del #30): `exp-029-t3-la-vara-del-sirvio.md`

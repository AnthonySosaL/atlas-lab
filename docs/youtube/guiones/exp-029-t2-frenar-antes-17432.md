# Experimento #29 — Interruptor de emergencia con disparo temprano · Tema 2: frenar antes sale más caro

Tema 2 de 3 del experimento #029 · Qué aporta frente a los otros temas: compara las líneas hipotéticas del freno de −2.5% (17,432) y del de −3% (41,902) y muestra cuándo se cierra cada cuenta; el tema 1 cuenta la hipótesis y el resultado binario (ninguna sobrevive). Experimento de pocos datos publicados: todo se apoya en la curva y en la comparación con el #28. Se entiende sin haber visto los otros temas.
Estado del guion: **BORRADOR — pendiente de aprobación**
Estado del experimento: **murió** (veredicto del sitio: «No sirvió») · Serie G — Construyendo un bot (y por qué murió)
Datos usados: `series/extra-v29.json` (1.ª curva: ×3 con tope de −2.5% hasta el 5-may-2015; 2.ª: «Sin reglas de prop firm»), `series/extra-v28.json` (para la comparación con el tope de −3%), `experiments.json` (v=29: analysis, notes, kpis, chart, capital, period; v=28), `exp_details.json` (clave `extra-v29`: algo, filters), tabla «Con tu capital» (archivo de capital en `docs/youtube/`; sin curva de «Sin estrategia»).
Nota de datos: el #29 solo publica «sobrevive: no» en los dos periodos; la corrida exacta no está en el repositorio y las cifras salen de una reproducción con el motor del #28. Por eso el largo es corto y se apoya en el #28.
Producción (CLAUDE.md del canal): b-roll real detrás de cada escena con overlay oscuro 0.6, Ken Burns alternando in/out, subtítulos karaoke en MAYÚSCULAS con cifras en rojo, un dato visual por escena, golpe de bajo + sacudida solo en 1–2 momentos. Colores: rojo `#e11d2a`, verde `#22c55e`, fondo `#09090b`.

## Títulos (3 opciones)
1. Frené antes (−2.5%) y la línea sin reglas termina en 17,432
2. Frenar antes sale más caro: 17,432 contra 41,902
3. Kill-switch de −2.5%: la cuenta se cierra el 5 de mayo de 2015, al día 183

## Miniatura (pensada para el título 2)
Fondo `#09090b`. Dos columnas: «−3%» con una barra gris que baja hasta «41,902» y «−2.5%» con una barra roja `#e11d2a` más corta hasta «17,432». Texto en Segoe UI Black: «MÁS CARO» (dos palabras, sin repetir los títulos). Logo ATLAS abajo a la derecha.

---

## VIDEO LARGO (16:9, ≈ 4:29 min)

**[0:00 — Gancho]** (pantalla: dos barras finales)
Frené antes: a menos 2.5% en vez de a menos 3%. Resultado: sin reglas de prop firm, 100,000 dólares terminan en 17,432, frente a 41,902 con el freno de menos 3%.
BOCETO: dos barras que bajan, «tope −3%: 41,902» y «tope −2.5%: 17,432»; golpe de bajo en la segunda. kb=in.

**[0:16 — Qué es este experimento]** (pantalla: rótulo con el número y el nombre)
Este es el experimento #29 de ATLAS Lab: Interruptor de emergencia con disparo temprano. Todos los resultados están en la página del experimento. Es una variante del experimento 28, con el freno más sensible.
BOCETO: rótulo «EXPERIMENTO #29 · Interruptor de emergencia con disparo temprano» sobre velas con opacidad 0.12. kb=out.

**[0:31 — La hipótesis]** (pantalla: tres líneas de tope)
La idea parece lógica: si el freno se activa antes, cada mal día pierde menos, y la cuenta aguanta lo suficiente para recuperarse. Por eso se bajó el tope diario de menos 3% a menos 2% y a menos 2.5%, con apalancamiento ×2 y ×3 y con la señal de ayer, en 2014–2024 y en 2007–2013.
BOCETO: tres líneas de tope (−3%, −2.5%, −2%) sobre un mismo día de precios; flechas de cierre cada vez más arriba.

**[0:58 — El resultado]** (pantalla: dos barras en cero)
El resultado es binario: sobrevive en 2014 a 2024, cero; sobrevive en 2007 a 2013, cero. Ninguna cuenta aguanta las reglas de la prop firm, la empresa que presta la cuenta y la cierra si pierdes demasiado. La que se muestra, con ×3 y tope de menos 2.5%, se cierra el 5 de mayo de 2015, al día 183.
BOCETO: gráfico de barras «Sobrevive, 1 = sí, 0 = no» con dos barras en 0 y las etiquetas «2014–2024» y «2007–2013»; luego la curva ×3 cortándose en 2015-05-05.

**[1:27 — Dos cortes, dos fechas]** (pantalla: línea de tiempo 2015)
Compáralo con el experimento 28. Con ×3 y tope de menos 3%, la cuenta toca su máximo de 106,496 el 25 de febrero de 2015 y se cierra el 29 de junio de 2015, al día 230, en 89,186. Con tope de menos 2.5%, el mismo máximo y cierre el 5 de mayo de 2015, al día 183, en 88,507. Frenar antes no la salvó: murió antes.
BOCETO: línea de tiempo 2015 con el pico del 25-feb y dos ✕: «día 183 · 5-may-2015 · tope −2.5%» y «día 230 · 29-jun-2015 · tope −3%».

**[2:02 — La línea sin reglas]** (pantalla: dos líneas hipotéticas)
Ahora la pregunta importante: ¿y si no hubiera reglas? Con tope de menos 3%, la línea hipotética termina en 41,902, partiendo de 100,000, y toca 37,133 en el camino. Con tope de menos 2.5%, termina en 17,432, con un mínimo de 16,977 el 5 de octubre de 2023. Es decir: con el tope más bajo, el resultado hipotético es mucho peor.
BOCETO: dos líneas punteadas desde 100,000: la de −3% baja hasta 41,902; la de −2.5% baja hasta 17,432; mínimos marcados (37,133 y 16,977).

**[2:32 — Por qué puede salir más caro]** (pantalla: freno que se activa muchas veces)
¿Por qué? El experimento no lo mide, así que va como explicación plausible. Cada vez que el freno se activa, la simulación paga 0.2% de deslizamiento. Un tope más cercano a cero se activa más veces, y cada activación cuesta. Frenar antes también significa pagar el costo de frenar más a menudo.
BOCETO: dos relojes de días: con tope −3% pocas marcas rojas; con tope −2.5% muchas, cada una con «0.2%»; rótulo «explicación plausible, no medida».

**[2:54 — Una nota de transparencia]** (pantalla: checklist de filtros)
Una nota de transparencia. La corrida exacta de este experimento no está en el repositorio, así que las cifras salen de una reproducción con el mismo motor del experimento 28. El resultado publicado es que ninguna cuenta sobrevive, y la reproducción lo confirma. Los valores exactos del tope temprano no se pueden verificar, y el único costo es el deslizamiento: sin spread ni comisiones.
BOCETO: checklist de `filters`: «señal rezagada 1 día: pasa», «sobrevive a la prop firm: falla», «valores exactos del tope: no verificables», «costos: solo deslizamiento».

**[3:20 — Con tu capital]** (pantalla: tarjeta de capital $10,000 / $100,000)
Con 10,000 dólares, la curva termina en menos 1,149; con 100,000, en menos 11,493. No hay curva de «sin estrategia» para comparar. Con tu capital verías esa cuenta cerrada.
BOCETO: tarjeta «Con tu capital» del sitio con el selector; curva roja cortada en mayo de 2015; comparación en «—».

**[3:34 — Lo que queda]** (pantalla: dos preguntas)
Lo que queda es una regla simple: la velocidad del freno no era el problema. Las pérdidas se acumulan en una racha de muchos días, y el tope diario no las ve. Queda una última idea, bajar el apalancamiento, en el experimento 30.
BOCETO: dos tarjetas: «#29: frenar antes → no» y «#30: menos apalancamiento» con candado.

**[3:53 — Ficha del experimento #29]** (pantalla: tarjeta con la URL)
Ficha del experimento #29, Interruptor de emergencia con disparo temprano. Estado: murió. Cifra clave: ninguna cuenta sobrevive; con ×3 y tope de menos 2.5%, se cierra el 5 de mayo de 2015, al día 183. Filtro que decidió: sobrevivir a la prop firm en los dos periodos. Lección: frenar antes no cambia la racha, y la línea sin reglas termina en 17,432. Revísalo completo en atlas-lab-one.vercel.app/e/29. Contenido educativo, no es asesoría financiera. El trading no se promete: se prueba.
BOCETO: tarjeta final con cuatro líneas (estado · cifra clave · filtro que decidió · lección) y la URL «atlas-lab-one.vercel.app/e/29» en grande; logo ATLAS; fondo de velas con opacidad 0.12.

---

## SHORT (9:16, ≈ 47 s)

**[0-3 s]** «Frené antes. Sin reglas, 100,000 terminan en 17,432.»
BOCETO: barra roja cayendo hasta «17,432»; golpe de bajo + sacudida.
**[3-11 s]** «Tope de menos 2.5% en vez de menos 3%. Con ×3, la cuenta se cierra a los 183 días.»
BOCETO: dial que baja de −3% a −2.5%; curva real cortada con ✕. kb=out.
**[11-19 s]** «Con el tope de menos 3%, se cerraba el 29 de junio. Frenar antes no la salvó: murió antes.»
BOCETO: línea de tiempo 2015 con dos ✕, «día 183» y «día 230».
**[19-27 s]** «Sin reglas, el freno de menos 3% termina en 41,902. El de menos 2.5%, en 17,432.»
BOCETO: dos líneas punteadas que caen a 41,902 y a 17,432.
**[27-35 s]** «Una explicación posible: un tope más cercano se activa más veces, y cada activación paga 0.2%.»
BOCETO: relojes de días con más marcas rojas «0.2%»; rótulo «explicación posible».
**[35-43 s]** «Experimento 29 completo en el enlace. El video completo está en el canal. No es asesoría financiera. El trading no se promete: se prueba.»
BOCETO: tarjeta con «experimento #29 completo en el enlace» y la URL corta; logo ATLAS.
**[43-47 s]** «¿Frenar antes? Mira la línea punteada.»
BOCETO: la barra roja del inicio; corte directo al inicio (loop).

---

## Descripción de YouTube (video largo)
https://atlas-lab-one.vercel.app/e/29?utm_source=youtube&utm_medium=video&utm_campaign=exp029-t2
Ficha del experimento #29 (Interruptor de emergencia con disparo temprano): murió (No sirvió) · ninguna cuenta sobrevive en 2014–2024 ni en 2007–2013 · con ×3 y tope de −2.5% se cierra el 5-may-2015 (día 183) · sin reglas, la línea termina en 17,432 (con tope de −3%: 41,902).
Cifras de una reproducción con el motor del experimento 28; la corrida exacta no está en el repositorio.
Contenido educativo. No es asesoría financiera ni recomendación de inversión.

## Descripción del Short
https://atlas-lab-one.vercel.app/e/29?utm_source=youtube&utm_medium=short&utm_campaign=exp029-t2
Ficha del experimento #29: murió · frenar antes (−2.5%) no salva la cuenta; sin reglas termina en 17,432. Video completo en el canal. Contenido educativo, no es asesoría financiera.

## Capítulos
0:00 Gancho · 0:16 Qué es este experimento · 0:31 La hipótesis · 0:58 El resultado · 1:27 Dos cortes, dos fechas · 2:02 La línea sin reglas · 2:32 Por qué puede salir más caro · 2:54 Una nota de transparencia · 3:20 Con tu capital · 3:34 Lo que queda · 3:53 Ficha del experimento #29

## Etiquetas
kill-switch, stop diario, gestión de riesgo, deslizamiento, prop firm, drawdown, apalancamiento, bot de trading, backtest, trading con datos, atlas lab, riesgo de ruina

## Rúbrica (autoevaluación, 1–5)
| Pieza | hook_0_3s | ritmo | promesa_cumplida | potencial_loop | claridad_no_traders | honestidad_atlas | audio | cta | Promedio |
|---|---|---|---|---|---|---|---|---|---|
| Largo | 5 | 4 | 5 | 4 | 4 | 5 | 4 | 4 | 4.38 |
| Short | 5 | 4 | 4 | 4 | 4 | 5 | 4 | 4 | 4.25 |

Hook ≥ 4 ✓ · honestidad 5 ✓. Punto débil: el experimento no publica Sharpe ni retornos por variante; el guion se apoya en la curva y marca como «explicación plausible, no medida» el motivo por el que el freno temprano sale más caro.

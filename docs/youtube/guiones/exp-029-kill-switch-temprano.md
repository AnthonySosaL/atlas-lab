# Experimento #29 — Interruptor de emergencia con disparo temprano

Estado del guion: **BORRADOR — pendiente de aprobación** (datos escasos: ver «Nota de datos»)
Estado del experimento: **murió** (veredicto del sitio: «No sirvió») · Serie G — Construyendo un bot (y por qué murió)
Datos usados: `experiments.json` (v=29: kpis, chart, verdict, analysis, notes, params_view, capital), `exp_details.json` (clave `extra-v29`: algo, filters), `series/extra-v29.json` (curva ×3 con tope de −2.5% hasta el corte y curva hipotética «Sin reglas de prop firm»), tabla «Con tu capital» (archivo de capital en `docs/youtube/`; sin curva de «Sin estrategia»). Relacionado: #28.
Nota de datos: este experimento solo publica «sobrevive: no» para los dos periodos y no da Sharpe ni retornos por variante; la corrida exacta no está en el repositorio y las cifras salen de una reproducción con el motor del #28. Por eso el video largo es corto y se apoya en el #28.

## Títulos
1. Frenar antes (−2%) tampoco salvó al bot: así murió con kill-switch
2. Kill-switch de −2% y −2.5%: la cuenta muere igual (×2 y ×3)
3. Reaccionar antes no evita la racha mala: la cuenta se cierra al día 183

## Miniatura
Fondo `#09090b`. Un dial de freno que gira de «−3%» a «−2%» con una flecha, y la curva real hundiéndose igual detrás; texto en Segoe UI Black «ANTES TAMPOCO» (dos palabras, sin repetir los títulos) en rojo `#e11d2a`. Logo ATLAS abajo a la derecha.

---

## VIDEO LARGO (16:9, ≈ 5:44 min)
Ritmo visual: algo cambia en pantalla cada 2-3 s; los pasos de cada boceto van en orden. Fórmula del canal: b-roll real detrás, Ken Burns alterno, subtítulos karaoke, whoosh + flash en cada corte.

**[0:00 — Gancho]** (pantalla: dial de freno bajando de −3% a −2%)
En el video anterior, el freno de emergencia a los menos 3% del día no salvó al bot. La respuesta lógica es frenar antes. Probé menos 2% y menos 2.5%, con apalancamiento —el tamaño de las posiciones frente al capital— ×2 y ×3 y señales de ayer. Resultado: ninguna cuenta sobrevive, ni en 2014 a 2024 ni en 2007 a 2013.
> Boceto: dial que gira de −3% a −2% y −2.5%; después cuatro tarjetas de cuenta (×2 y ×3 en los dos periodos) que se tiñen de rojo una a una; golpe de bass en la cuarta.

**[0:26 — Presentación]** (pantalla: rótulo «Experimento #29 · Interruptor de emergencia con disparo temprano»)
Este es el experimento #29 de ATLAS Lab: Interruptor de emergencia con disparo temprano. Todos los resultados están en la página del experimento.
> Boceto: el rótulo «EXPERIMENTO #29 · Interruptor de emergencia con disparo temprano» entra sobre velas animadas con opacidad 0.12.

**[0:36 — Dónde encaja en la serie]** (pantalla: mapa de la serie, #15 al #30)
Es el segundo de los tres experimentos de la versión ejecutable. El #28 probó el freno a menos 3%; este lo adelanta; el #30 baja el apalancamiento. Los tres usan la señal de ayer, la única que un bot real puede tener.
> Boceto: tres puntos #28, #29 y #30 unidos; el #29 iluminado; etiqueta «señal de ayer».

**[0:54 — La hipótesis: frenar antes]** (pantalla: tope diario)
La hipótesis es sencilla. Si el interruptor se dispara antes, la pérdida de cada mal día es menor, y quizá la cuenta aguante lo suficiente para recuperarse. Por eso se bajó el tope del día: de menos 3% a menos 2% y a menos 2.5%.
> Boceto: tres líneas de tope en un mismo día (−3%, −2.5% y −2%) y tres flechas de cierre cada vez más arriba.

**[1:14 — Qué mide cada tope]** (pantalla: tres topes)
Un tope de menos 2% hace que el freno se active con una caída más pequeña que el de menos 3%. Un tope de menos 2.5% queda en medio. Cuanto más cerca de cero está el tope, más veces se activa el freno y más veces se queda el bot fuera de lo que sigue del día.
> Boceto: tres líneas de tope sobre un mismo día de precios, con marcas de activación; contador de activaciones creciendo al bajar el tope.

**[1:38 — Cómo se probó y una nota de transparencia]** (pantalla: checklist de filtros)
Mismo motor que el experimento 28: señal macro rezagada un día, apalancamientos ×2 y ×3, dos periodos y las reglas de una prop firm, la empresa que presta la cuenta y la cierra si pierdes demasiado. Costos: solo el deslizamiento al activarse el freno; no hay spread ni comisiones. Una nota de transparencia: la corrida exacta no está en el repositorio, así que las cifras salen de una reproducción con el mismo motor. El resultado publicado es que ninguna cuenta sobrevive, y la reproducción lo confirma.
> Boceto: checklist de `exp_details.json`: «señal rezagada 1 día: pasa», «sobrevive a la prop firm: FALLA», «valores exactos del tope: no verificables», «costos: solo deslizamiento».

**[2:14 — Resultados]** (pantalla: dos barras en cero)
El resultado es binario: sobrevive en 2014 a 2024, cero; sobrevive en 2007 a 2013, cero. No hay una tabla de Sharpe en este experimento: lo que se publica es que ninguna combinación aguanta. Con ×3 y tope de menos 2.5%, la cuenta se cierra el 5 de mayo de 2015, al día 183.
> Boceto: gráfico de barras de `experiments.json` (chart «Sobrevive, 1 = sí, 0 = no»): dos barras en 0 en rojo con las etiquetas «2014–2024» y «2007–2013»; luego la curva ×3 cortándose en 2015-05-05.

**[2:37 — Día 183 y día 230]** (pantalla: dos cortes en la línea de tiempo)
Un dato curioso. La curva del experimento 28, con ×3 y tope de menos 3%, se corta el 29 de junio de 2015, al día 230. La de este experimento, con ×3 y tope de menos 2.5%, se corta el 5 de mayo de 2015, al día 183. Son dos configuraciones distintas sobre una misma ruta de datos; lo que muestran es que frenar antes no mejora la supervivencia.
> Boceto: línea de tiempo 2014–2015 con dos marcas rojas: «día 183 · 5-may-2015 (tope −2.5%)» y «día 230 · 29-jun-2015 (tope −3%)».

**[3:06 — Por qué no sirve frenar antes]** (pantalla: escalera de pérdidas)
Reaccionar antes dentro del día no resuelve nada. Con topes de menos 2% y menos 2.5% todas las cuentas mueren igual, por pérdidas acumuladas que cruzan el drawdown de 10%, la caída máxima permitida. Es lo que vimos en el 28: el freno protege de la jornada mala, no de la racha, y la racha se compone de muchas jornadas, que el freno diario no evita.
> Boceto: escalera de pérdidas pequeñas, todas por debajo de −2%, que suman hasta cruzar −10%; rótulo «ninguna toca el tope».

**[3:34 — La línea hipotética]** (pantalla: curva hipotética)
Si se ignoraran las reglas de la prop firm, la curva hipotética del ×3 con tope de menos 2.5% terminaría en 17,432, partiendo de 100,000. Es solo una referencia: en la realidad la cuenta se cierra el día del corte.
> Boceto: la curva real cortada en 2015-05-05 y, en gris punteado, la línea hipotética hasta 17,432 con el rótulo «hipotética».

**[3:52 — El patrón de los dos experimentos]** (pantalla: dos topes, una causa)
Junta los dos experimentos y el patrón es claro. Con un tope de menos 3%, las cuentas mueren. Con topes de menos 2% y menos 2.5%, también. La causa en todos los casos es la misma: el drawdown acumulado cruza el 10%. El tope diario no es la variable que decide.
> Boceto: tres topes (−3%, −2.5%, −2%) conectados con una misma flecha roja hacia «drawdown acumulado > 10%».

**[4:13 — Con tu capital]** (pantalla: tarjeta de capital $10,000 / $100,000)
Con 10,000 dólares, la curva termina en menos $1,149; con 100,000, en menos $11,493. No hay curva de «sin estrategia» para comparar. Con tu capital verías esa cuenta cerrada, no una inversión que sigue corriendo.
> Boceto: tarjeta «Con tu capital» del sitio con el selector; curva roja cortada en mayo de 2015; el cuadro de comparación en «—».

**[4:29 — Cómo habría sido un buen resultado]** (pantalla: criterio del laboratorio)
Para que esta idea hubiera sido interesante, tendría que haber sobrevivido en los dos periodos y, además, superar el mínimo que exige el laboratorio fuera de muestra, es decir, con datos que la estrategia no vio al diseñarse: un Sharpe, el retorno por unidad de riesgo, de 0.30. Ni siquiera llega a la primera condición, así que la segunda ni se evalúa.
> Boceto: dos puertas en cadena, «sobrevivir en ambos periodos» (cerrada) y «Sharpe ≥ 0.30» (atenuada detrás).

**[4:55 — Conclusión]** (pantalla: texto grande)
Veredicto: no sirvió. Con disparo temprano la cuenta tampoco sobrevive, ni con ×2 ni con ×3, en ningún periodo. La velocidad del freno no era el problema. Queda una última idea: bajar el apalancamiento, en el experimento 30.
> Boceto: sello rojo «NO SIRVIÓ»; frase final «El trading no se promete: se prueba».

**[5:12 — Ficha del experimento #29]** (pantalla: tarjeta con la URL)
Ficha del experimento #29.
Estado: murió.
Cifra clave: ninguna cuenta sobrevive; con ×3 y tope de menos 2.5%, se cierra el 5 de mayo de 2015, al día 183.
Filtro que decidió: sobrevivir a la prop firm en los dos periodos.
Lección: frenar antes no cambia la racha.
Revísalo completo en atlas-lab-one.vercel.app/e/29.
> Boceto: tarjeta final con cuatro líneas (estado · cifra clave · filtro que decidió · lección) y la URL «atlas-lab-one.vercel.app/e/29» en grande; sello «NO SIRVIÓ»; fondo de velas con opacidad 0.12.

**[5:32 — Cierre]** (pantalla: logo y enlace)
En el siguiente video, qué pasa si se baja el apalancamiento: el experimento 30. Todos los datos en atlas-lab-one.vercel.app/e/29. Contenido educativo, no es asesoría financiera.
> Boceto: pantalla final con enlace y logo ATLAS; fondo de velas animadas con opacidad 0.12.

---

## SHORT (9:16, ≈ 44 s)
Fórmula visual: b-roll Pexels vertical + overlay oscuro 0.6, Ken Burns alternando in/out, subtítulos karaoke en MAYÚSCULAS con las cifras en rojo, whoosh + flash en cada corte, golpe de bass + sacudida solo en el 0-3 s y en el «ninguna sobrevive»; ticker arriba, viñeta y velas con opacidad ≤ 0.12.

**[0-3 s]** "Frené antes, a menos 2%. La cuenta murió igual."
> Boceto: dial de freno que baja de −3% a −2%; la curva real cae igual; texto gigante «−2%».
**[3-8 s]** "En el video anterior, el kill-switch de menos 3% no salvó al bot."
> Boceto: la curva del #28 cortándose con X; rótulo «−3%».
**[8-13 s]** "Así que probé frenar más temprano: a menos 2% y a menos 2.5% del día."
> Boceto: dos topes (−2% y −2.5%) bajando sobre un día de precios.
**[13-16 s]** "Con apalancamiento ×2 y ×3, señales de ayer, dos periodos."
> Boceto: cuatro tarjetas (×2 y ×3 en 2014–2024 y 2007–2013).
**[16-21 s]** "Resultado: ninguna cuenta sobrevive. Ni en 2014 a 2024 ni en 2007 a 2013."
> Boceto: dos barras de «sobrevive» en 0; sello «NINGUNA SOBREVIVE» con golpe de bass y sacudida.
**[21-28 s]** "Con ×3 y tope de menos 2.5%, la cuenta se cierra el 5 de mayo de 2015, al día 183."
> Boceto: la curva real hasta el corte con contador «día 183».
**[28-33 s]** "Reaccionar antes dentro del día no resuelve nada: las pérdidas acumuladas cruzan el 10%."
> Boceto: escalera de pérdidas pequeñas que cruza la línea de −10%.
**[33-41 s]** "El video completo está en el canal. Experimento 29 completo en el enlace. No es asesoría financiera. El trading no se promete: se prueba."
> Boceto: frase de marca en blanco; tarjeta «experimento #29 completo en el enlace» y la URL corta; logo ATLAS.
**[41-44 s]** "Y cuando te digan que basta con frenar antes:"
> Boceto: dial de freno con interrogación; corte directo al inicio (loop).

## Descripción (YouTube)
https://atlas-lab-one.vercel.app/e/29?utm_source=youtube&utm_medium=video&utm_campaign=exp029-t1
Ficha del experimento #29 (Interruptor de emergencia con disparo temprano): murió (No sirvió) · ninguna cuenta sobrevive en 2014–2024 ni en 2007–2013 · con ×3 y tope de −2.5% se cierra el 5-may-2015 (día 183).
Variante del kill-switch con disparo más temprano (−2% y −2.5% del día) y señal rezagada un día, con ×2 y ×3 en 2014–2024 y 2007–2013. Ninguna cuenta sobrevive; con ×3 y tope de −2.5% la cuenta se cierra el 5-may-2015, al día 183.
Las cifras salen de una reproducción con el motor del experimento 28. Reaccionar antes no evita la racha mala.
Contenido educativo. No es asesoría financiera ni recomendación de inversión.

Capítulos: 0:00 Gancho · 0:26 Presentación · 0:36 Dónde encaja en la serie · 0:54 La hipótesis: frenar antes · 1:14 Qué mide cada tope · 1:38 Cómo se probó y una nota de transparencia · 2:14 Resultados · 2:37 Día 183 y día 230 · 3:06 Por qué no sirve frenar antes · 3:34 La línea hipotética · 3:52 El patrón de los dos experimentos · 4:13 Con tu capital · 4:29 Cómo habría sido un buen resultado · 4:55 Conclusión · 5:12 Ficha del experimento #29 · 5:32 Cierre

Etiquetas: kill-switch, stop diario, gestión de riesgo, bot de trading, prop firm, drawdown, apalancamiento, backtest, trading con datos, ATLAS Lab, trading algorítmico, riesgo de ruina

## Descripción del Short
https://atlas-lab-one.vercel.app/e/29?utm_source=youtube&utm_medium=short&utm_campaign=exp029-t1
Ficha del experimento #29: murió · frenar antes (−2.5%) no salva la cuenta; se cierra al día 183. Video completo en el canal. Contenido educativo, no es asesoría financiera.

## Rúbrica (autoevaluación del Short)
hook_0_3s 4 · ritmo 4 · promesa_cumplida 4 · potencial_loop 4 · claridad_no_traders 4 · honestidad_atlas 5 · audio 4 · cta 4 → promedio 4.13 (aprobado: ≥ 4.0, hook ≥ 4, honestidad 5)
Notas: el gancho es débil frente a otros de la tanda porque el experimento no tiene Sharpe ni retornos por variante; la honestidad es 5 porque se dice qué se publicó (supervivencia) y se evita inventar cifras que no existen.

## Otros temas de este experimento
- Tema 1: `exp-029-kill-switch-temprano.md` — Interruptor de emergencia con disparo temprano
- Tema 2: `exp-029-t2-frenar-antes-17432.md` — frenar antes sale más caro
- Tema 3: `exp-029-t3-la-vara-del-sirvio.md` — la vara de «sirvió»
- Ver también (temas de otro experimento que usan las cifras del #29): `exp-027-t3-cinco-cuentas-un-maximo.md`

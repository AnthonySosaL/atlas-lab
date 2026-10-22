# Experimento #20 — Tendencia largo-corto con filtro

Estado del guion: **BORRADOR — pendiente de aprobación**
Estado del experimento: **murió** (veredicto del sitio: «No sirvió»; la cuenta se cortó el 4-nov-2022) · Serie G — Construyendo un bot (y por qué murió)
Datos usados: `experiments.json` (v=20: kpis, metrics, params, verdict, analysis, notes, capital), `exp_details.json` (clave `…-v20`: algo, filters), `series/20260609_210757_trend-long-short-filtrado-v20.json` (curva de la estrategia hasta el corte y curva «Sin estrategia»), tabla «Con tu capital» (archivo de capital en `docs/youtube/`). Relacionado: #16 (la versión solo en largo).

## Títulos
1. Añadí cortos a mi bot y su Sharpe cayó de 1.23 a 0.38
2. Añadí cortos a mi bot y la cuenta murió en 2022 (Sharpe 0.38)
3. Largo-corto: +39.3% contra +199% de solo largo (mismas fechas)

## Miniatura
Fondo `#09090b`. Dos curvas reales: arriba, en verde `#22c55e`, la versión solo en largo; abajo, en rojo `#e11d2a`, la versión con cortos que se corta con una X. Texto en Segoe UI Black: «SOLO LARGO GANA» (tres palabras, sin repetir los títulos). Logo ATLAS abajo a la derecha.

---

## VIDEO LARGO (16:9, ≈ 6:26 min)
Ritmo visual: algo cambia en pantalla cada 2-3 s; los pasos de cada boceto van en orden. Fórmula del canal: b-roll real detrás, Ken Burns alterno, subtítulos karaoke, whoosh + flash en cada corte.

**[0:00 — Gancho]** (pantalla: dos curvas que se separan)
En una caída, lo lógico sería apostar a la baja. Eso se llama ir en corto: vender algo que no tienes para recomprarlo más barato. Probé añadirle cortos a mi bot. Resultado: su Sharpe, que mide el retorno por unidad de riesgo, pasó de 1.23, la versión que solo compra, a 0.38. Y la cuenta se cerró el 4 de noviembre de 2022, con una pérdida de 5.2% en un solo día.
> Boceto: dos curvas reales saliendo del mismo punto, la verde sube y la roja se queda atrás y se corta con una X; contadores «1.23» y «0.38»; golpe de bass en el corte.

**[0:30 — Presentación]** (pantalla: rótulo «Experimento #20 · Tendencia largo-corto con filtro»)
Este es el experimento #20 de ATLAS Lab: Tendencia largo-corto con filtro. Todos los resultados están en la página del experimento.
> Boceto: rótulo grande «EXPERIMENTO #20 · Tendencia largo-corto con filtro» sobre velas de fondo con overlay oscuro; abajo, la URL pequeña «atlas-lab-one.vercel.app/e/20». Ken Burns «out».

**[0:40 — Dónde encaja en la serie]** (pantalla: mapa de la serie, #15 al #30)
Este es el tercero de tres experimentos que modifican el bot base del experimento 16: después del refugio del #18 y del apalancamiento escalonado del #19. Los tres usan las mismas reglas para poder compararse con la base.
> Boceto: tres ramas que salen del #16 hacia #18, #19 y #20; la del #20 se ilumina; texto «mismas reglas, una sola palanca».

**[0:57 — Cómo funciona un corto]** (pantalla: préstamo, venta y recompra)
Ir en corto es pedir prestado un activo, venderlo ahora y recomprarlo más tarde para devolverlo. Si el precio baja, ganas la diferencia; si sube, la pierdes, y esa pérdida, en teoría, no tiene tope. Con apalancamiento ×3, el efecto de un movimiento en contra se triplica.
> Boceto: tres viñetas secuenciales: «presta», «vende hoy», «recompra mañana»; una flecha verde si el precio baja y una roja, más larga, si sube; chip «×3».

**[1:17 — La idea: comprar lo que sube, vender lo que baja]** (pantalla: dos flechas)
Hasta ahora el bot solo compra. Aquí, el peso de cada activo se multiplica por el signo de su momentum de 120 días, que es la dirección del precio en ese tiempo. Si en los últimos 120 días subió, el bot lo compra; si bajó, lo vende en corto. Conserva el mismo filtro macro del experimento 16 y el apalancamiento ×3.
> Boceto: un activo con flecha verde (momentum positivo → «largo») y otro con flecha roja (momentum negativo → «corto»); etiqueta «120 días» y «×3».

**[1:43 — Cómo se probó]** (pantalla: checklist de filtros)
De 2014 a 2024, con las reglas de la prop firm: la cuenta se cierra si pierde 10% del capital inicial o más de 5% en un solo día. El signo del momentum usa datos de ayer, pero el filtro macro sigue usando el cierre del mismo día, igual que en la base, y por eso la comparación entre ambas es justa. El criterio: superar el Sharpe de 1.23 de la versión solo en largo. No se descuentan costos.
> Boceto: checklist de `exp_details.json`: «Sharpe > 1.23: FALLA», «Sobrevive a la prop firm: FALLA», «Señal rezagada: el momentum usa ayer; el filtro, el mismo día», «Costos: no aplicado».

**[2:16 — Resultados]** (pantalla: tarjetas de KPI)
Sharpe de 0.38. Retorno total, más 39.3%. Drawdown máximo, la peor caída desde un máximo de la cuenta, de menos 18.5%. Años positivos: solo 56%. Y la cuenta se cierra el 4 de noviembre de 2022, después de 2,529 días, por una pérdida de 5.2% en una sola jornada, cuando el límite es 5%.
> Boceto: la curva real de la estrategia dibujándose y cortándose el 2022-11-04; tarjetas con tick (0.38 · +39.3% · −18.5% · 56% · 2,529 días); barra de pérdida diaria «−5.2%» cruzando la línea de «−5%».

**[2:39 — La comparación justa]** (pantalla: dos barras de Sharpe)
Aquí está la comparación que importa. En las mismas fechas, la versión solo en largo con el filtro ganó más 199% con un Sharpe de 1.31. La versión largo-corto, más 39.3% con un Sharpe de 0.38. Mismo filtro, mismo apalancamiento, mismo periodo: la única diferencia son los cortos.
> Boceto: barras comparativas «solo largo: Sharpe 1.31 · +199%» (verde, alta) y «largo-corto: Sharpe 0.38 · +39.3%» (roja, baja); el resto de parámetros iguales en una fila gris.

**[3:00 — Cifra por cifra]** (pantalla: tabla de dos columnas)
Pongámoslo cifra por cifra. La versión solo en largo: Sharpe de 1.23, caída máxima de menos 12.5% y 90% de años positivos. La versión largo-corto: Sharpe de 0.38, caída máxima de menos 18.5% y 56% de años positivos. Más riesgo, menos retorno por unidad de riesgo y menos años en verde.
> Boceto: tabla «solo largo» frente a «largo-corto» con filas Sharpe · caída máxima · años positivos; las cifras del largo-corto entran en rojo, una por una, con tick.

**[3:22 — Un detalle del filtro]** (pantalla: semáforo y cortos)
Un detalle importante: el filtro sigue sacando al bot del mercado cuando detecta peligro, así que los cortos no se usan en esos días. Operan en los días de calma, vendiendo en corto los activos que llevan 120 días bajando. Es decir, los cortos no protegen en la crisis: apuestan en la calma contra lo que viene cayendo.
> Boceto: semáforo; en rojo, el bot queda «fuera del mercado» y los cortos se apagan; en verde, se encienden las flechas rojas de cortos sobre los activos que vienen cayendo.

**[3:47 — Por qué los cortos restan]** (pantalla: curva de la cesta subiendo)
La cesta tiene un sesgo alcista de largo plazo: sube con los años. En una cesta así, cada corto va contra la corriente. Los cortos restaron más de lo que sumaron, y la versión solo en largo le gana. Además, con apalancamiento ×3, un movimiento en contra se triplica, y un día malo basta para romper el límite diario.
> Boceto: curva de la cesta con pendiente alcista; flechas rojas de cortos apuntando contra la pendiente; al final, un día rojo con «×3» que cruza la línea de −5%.

**[4:12 — Qué haría falta para creerle]** (pantalla: tres candados)
Aun si los cortos hubieran funcionado, faltarían tres cosas: decidir con la señal de ayer, descontar costos y probar con datos que el bot no haya visto. Aquí ninguna de las tres está resuelta. Con estos datos, la conclusión es solo una: añadir cortos no mejoró al bot.
> Boceto: tres candados («señal de ayer», «costos», «fuera de muestra») cerrados en rojo; el texto final «cortos: no mejoró».

**[4:32 — Con tu capital]** (pantalla: tarjeta de capital $10,000 / $100,000)
Con 10,000 dólares, la curva termina en más $3,929; con 100,000, en más $39,293. Comprar y esperar en esas fechas daría más $2,351 y más $23,511. El número final supera al de comprar y esperar, pero ya estás fuera: la cuenta se cierra el 4 de noviembre de 2022 por la regla diaria. Además, la señal de riesgo usa el cierre del mismo día y el apalancamiento es ×3.
> Boceto: tarjeta «Con tu capital» del sitio con el selector; curva roja cortada en 2022 frente a la gris «Sin estrategia»; aviso ámbar «la cuenta se corta el 4-nov-2022».

**[5:02 — Lo que sí aporta este experimento]** (pantalla: texto)
Lo que deja el experimento es una respuesta clara a una intuición muy común. Apostar a la baja suena como una defensa natural, pero en esta cesta restó más de lo que sumó. Probarlo costó poco y evita construir encima de una idea que no funciona.
> Boceto: la intuición «cortos = defensa» tachada con una X roja; debajo, «probarlo costó poco» con un reloj.

**[5:21 — Conclusión]** (pantalla: texto grande)
Veredicto: no sirvió. Sharpe de 0.38 frente a 1.23 de la versión solo en largo, cuenta cerrada por una pérdida diaria de 5.2% y una caída máxima de 18.5%. En una cesta con tendencia alcista de largo plazo, los cortos restan.
> Boceto: sello rojo «NO SIRVIÓ»; frase final «El trading no se promete: se prueba».

**[5:39 — Ficha del experimento #20]** (pantalla: tarjeta con la URL)
Ficha del experimento 20. Estado: murió (veredicto del sitio: «No sirvió»; la cuenta se cortó el 4-nov-2022). Cifra clave: Sharpe de 0.38 frente a 1.23 de la versión solo en largo, con una pérdida diaria de menos 5.2% y una caída máxima de menos 18.5%. Filtros que decidieron: el Sharpe menor que el de la base y la regla de la cuenta fondeada, que no sobrevive. Lección: en una cesta con tendencia alcista de largo plazo, los cortos restan. Revísalo completo en atlas-lab-one.vercel.app/e/20.
> Boceto: tarjeta oscura con el estado del experimento #20 arriba, las cifras clave en el centro y «atlas-lab-one.vercel.app/e/20» en grande al pie; las líneas de la ficha entran una a una; logo ATLAS.

**[6:11 — Cierre]** (pantalla: logo y enlace)
En el siguiente video, la prueba con datos que el bot nunca vio, de 2007 a 2013: el experimento 21. Todos los datos en atlas-lab-one.vercel.app/e/20. Contenido educativo, no es asesoría financiera.
> Boceto: pantalla final con enlace y logo ATLAS; fondo de velas animadas con opacidad 0.12.

---

## SHORT (9:16, ≈ 46 s)
Fórmula visual: b-roll Pexels vertical + overlay oscuro 0.6, Ken Burns alternando in/out, subtítulos karaoke en MAYÚSCULAS con las cifras en rojo, whoosh + flash en cada corte, golpe de bass + sacudida solo en el 0-3 s y en el corte de la cuenta; ticker arriba, viñeta y velas con opacidad ≤ 0.12.

**[0-3 s]** "Cortos al bot: Sharpe de 1.23 a 0.38."
> Boceto: dos barras, 1.23 verde y 0.38 roja que se encoge con sacudida; texto gigante «CORTOS».
**[3-6 s]** "Un corto es apostar a que el precio baja."
> Boceto: flecha roja hacia abajo con la etiqueta «corto = apuesta a la baja».
**[6-12 s]** "La regla: si el precio sube en los últimos 120 días, compro; si baja, vendo en corto."
> Boceto: dos activos, uno con flecha verde «compra» y otro con flecha roja «corto», con el contador «120 días».
**[12-16 s]** "Con el mismo filtro de pánico y apalancamiento ×3, de 2014 a 2024."
> Boceto: barra de tiempo 2014 → 2024; chips «filtro» y «×3».
**[16-21 s]** "Resultado: más 39.3%, pero caída máxima de 18.5% y solo 56% de años positivos."
> Boceto: la curva roja subiendo y cayendo; tarjetas con tick (+39.3% · −18.5% · 56%).
**[21-27 s]** "El 4 de noviembre de 2022 perdió 5.2% en un día y la cuenta se cerró."
> Boceto: barra de pérdida «−5.2%» que cruza la línea roja de «−5%»; la curva se corta con X y golpe de bass.
**[27-32 s]** "La versión solo en largo ganó más 199% con Sharpe 1.31 en esas mismas fechas."
> Boceto: la curva verde sube sola frente a la roja cortada; tarjeta «+199% · 1.31».
**[32-38 s]** "En una cesta que sube con los años, los cortos restan. El trading no se promete: se prueba."
> Boceto: pendiente alcista con flechas rojas contra ella; sello «NO SIRVIÓ»; frase de marca.
**[38-46 s]** "El video completo está en el canal. Experimento #20 completo en el enlace. No es asesoría financiera. Antes de apostar a la baja, recuerda:"
> Boceto: logo ATLAS; corte directo al inicio (loop); texto «Experimento #20 completo en el enlace».

## Descripción de YouTube (video largo)
https://atlas-lab-one.vercel.app/e/20?utm_source=youtube&utm_medium=video&utm_campaign=exp020-t1
Ficha del experimento #20 (Tendencia largo-corto con filtro): estado murió · Sharpe 0.38 frente a 1.23 solo en largo · cuenta cerrada el 4-nov-2022 por −5.2% en un día · caída máxima −18.5%.
Añadí ventas en corto al bot (peso por el signo del momentum de 120 días, mismo filtro macro y ×3) y comparé con la versión solo en largo en 2014–2024: Sharpe 0.38 contra 1.23, caída máxima de −18.5% y 56% de años positivos.
La cuenta se cerró el 4-nov-2022 por una pérdida diaria de −5.2%; en las mismas fechas, solo en largo ganó +199% con Sharpe 1.31.
Contenido educativo. No es asesoría financiera ni recomendación de inversión.

## Descripción del Short
https://atlas-lab-one.vercel.app/e/20?utm_source=youtube&utm_medium=short&utm_campaign=exp020-t1
Experimento #20 · murió · Sharpe 0.38 frente a 1.23 solo en largo; cuenta cerrada por −5.2% en un día. No es asesoría financiera.

Capítulos: 0:00 Gancho · 0:30 Presentación · 0:40 Dónde encaja en la serie · 0:57 Cómo funciona un corto · 1:17 La idea: comprar lo que sube, vender lo que baja · 1:43 Cómo se probó · 2:16 Resultados · 2:39 La comparación justa · 3:00 Cifra por cifra · 3:22 Un detalle del filtro · 3:47 Por qué los cortos restan · 4:12 Qué haría falta para creerle · 4:32 Con tu capital · 5:02 Lo que sí aporta este experimento · 5:21 Conclusión · 5:39 Ficha del experimento #20 · 6:11 Cierre

Etiquetas: ventas en corto, largo y corto, momentum, bot de trading, backtest, Sharpe ratio, prop firm, apalancamiento, drawdown, trading con datos, ATLAS Lab, trading algorítmico

## Rúbrica (autoevaluación del Short)
hook_0_3s 4 · ritmo 4 · promesa_cumplida 5 · potencial_loop 4 · claridad_no_traders 4 · honestidad_atlas 5 · audio 4 · cta 4 → promedio 4.25 (aprobado: ≥ 4.0, hook ≥ 4, honestidad 5)
Notas: el gancho cruza una intuición («en la caída, apuesta a la baja») con dos Sharpe; la honestidad es 5 porque se dice el veredicto, la fecha del corte y la comparación completa, incluido que el número final supera a comprar y esperar en el video largo.

## Otros temas de este experimento

- Tema 1 — `exp-020-largo-corto-bot.md` — Tendencia largo-corto con filtro (este archivo).
- Tema 2 — `exp-020-t2-momentum-y-cortos.md` — Momentum y ventas en corto: comprar lo que sube y vender lo que baja
- Tema 3 — `exp-020-t3-el-dia-2529.md` — El día 2,529: más de ocho años vivo y un solo día de −5.2%

# Experimento #31 — Filtro reactivo intradía · Tema 3: medir en lugar de suponer (φ)

Tema 3 de 4 del experimento #031 · Qué aporta frente a los otros temas: es el tema de método del #31 —cómo se mide φ con datos horarios y por qué un supuesto (φ = 0.5) cambia el veredicto— con la tabla de sensibilidad. El tema 1 cuenta el bot y los resultados; el tema 2, el plan B de precio; el tema 4, el margen entre ×1.5 y ×2. Se entiende sin haber visto los otros temas.
Estado del guion: **BORRADOR — pendiente de aprobación**
Estado del experimento: **PARCIAL** (con ×1.5 sobrevive, pero con Sharpe 0.09 y 0.11, muy bajo el 0.30 que pide el laboratorio) · Serie G — Construyendo un bot (y por qué murió)
Datos usados: `experiments.json` (v=31: analysis, notes, metrics, kpis, params_view, verdict), `exp_details.json` (clave `…-v31`: algo, code.snippet, filters), tabla «Con tu capital» (archivo de capital en `docs/youtube/`).
Producción (CLAUDE.md del canal): b-roll real detrás de cada escena con overlay oscuro 0.6, Ken Burns alternando in/out, subtítulos karaoke en MAYÚSCULAS con cifras en rojo, un dato visual por escena, golpe de bajo + sacudida solo en 1–2 momentos. Colores: rojo `#e11d2a`, verde `#22c55e`, fondo `#09090b`.

## Títulos (3 opciones)
1. Con φ = 0.5 mi bot pasa el listón; con el φ medido, no
2. φ = 0.90 (IC 95%: 0.83–0.96): cómo se mide cuánto esquiva un bot
3. Un supuesto decide el veredicto: medir en lugar de suponer (experimento #31)

## Miniatura (pensada para el título 1)
Fondo `#09090b`. Dos medidores semicirculares: uno verde `#22c55e` con la aguja en «0.5» y la etiqueta «SUPUESTO», otro rojo `#e11d2a` con la aguja en «0.90» y «MEDIDO». Texto en Segoe UI Black: «¿SUPUESTO O MEDIDO?» (tres palabras, sin repetir los títulos). Logo ATLAS abajo a la derecha.

---

## VIDEO LARGO (16:9, ≈ 5:03 min)

**[0:00 — Gancho]** (pantalla: dos medidores)
Con un supuesto de φ igual a 0.5, mi bot pasa el listón del laboratorio. Con el φ medido, 0.90, no lo pasa. Todo depende de un número que no se puede suponer: hay que medirlo.
BOCETO: dos medidores: el de 0.5 en verde con «pasa» y el de 0.90 en rojo con «no pasa»; golpe de bajo en el segundo. kb=in.

**[0:16 — Qué es este experimento]** (pantalla: rótulo con el número y el nombre)
Este es el experimento #31 de ATLAS Lab: Filtro reactivo intradía. Todos los resultados están en la página del experimento. Aquí me concentro en cómo se midió φ, porque ese número decide el veredicto.
BOCETO: rótulo «EXPERIMENTO #31 · Filtro reactivo intradía» sobre velas con opacidad 0.12. kb=out.

**[0:31 — Qué es φ]** (pantalla: un día de pánico)
El bot sale del mercado cuando se dispara su filtro de pánico. Pero el día del disparo ya está dentro. φ, la letra griega fi, es la fracción del movimiento de ese día que el bot se come. Si φ vale 1, no esquivó nada. Si vale 0.5, esquivó la mitad. Es el punto débil de cualquier bot que reacciona a una alarma.
BOCETO: vela roja del día de disparo; una línea de salida a distintas alturas con φ = 1, 0.75 y 0.5.

**[0:57 — Qué pasa si lo supones]** (pantalla: tabla de sensibilidad)
Veamos qué pasa con el Sharpe, la ganancia por unidad de riesgo, con ×1.5, según el φ que se suponga. Con φ de 0.5: Sharpe de 0.37 en 2014–2024 y 0.34 en 2007–2013. Con 0.75: 0.20 y 0.19. Con 0.90, que es el medido: 0.09 y 0.11. Con 1, que es el rezago puro de un día: 0.02 y 0.05. El laboratorio pide al menos 0.30 fuera de muestra.
| φ | Sharpe 2014–2024 | Sharpe 2007–2013 |
|---|---|---|
| 0.50 (no respaldado por los datos) | 0.37 | 0.34 |
| 0.75 | 0.20 | 0.19 |
| 0.90 (medido) | 0.09 | 0.11 |
| 1 (rezago puro de un día) | 0.02 | 0.05 |
BOCETO: tabla que se llena fila por fila; línea horizontal «mínimo del laboratorio: 0.30»; solo la fila de 0.5 la cruza, y se marca en gris «no respaldado».

**[1:34 — El problema de suponer]** (pantalla: dos veredictos)
Fíjate en lo que implica. Si el análisis hubiera supuesto φ de 0.5, el veredicto sería «prometedor». Con el φ medido, es «sin ventaja». Todo el salto entre una cosa y otra está en un número que parece un detalle técnico. Por eso este experimento lo mide.
BOCETO: dos sellos: «prometedor» (sobre la fila 0.5) y «parcial: sin ventaja» (sobre la fila 0.90).

**[1:54 — Cómo se mide]** (pantalla: datos horarios)
¿Cómo se mide? Con datos horarios de Dukascopy. El bot, el día del disparo, sale una hora después de ver que el VIX en vivo cruza el umbral. Pero el VIX en vivo no se puede bajar tal cual: se reconstruye con VXX, un producto que sigue la volatilidad, y eso solo existe desde marzo de 2017. Antes de esa fecha, y en los días en que la señal es de crédito, no hay VIX en vivo.
BOCETO: línea de tiempo del día con barras horarias; flecha «sale 1 hora después de verlo»; recuadro «VIX en vivo = VIX de ayer × exp(2.03 × cambio de VXX), desde mar-2017».

**[2:25 — Los días solo de crédito]** (pantalla: torta 3 de 4)
Hay una complicación: en 3 de cada 4 días de disparo, la señal es solo de crédito, y del crédito no hay datos dentro del día. Su mejor sustituto disponible explica apenas el 68% de su variación diaria. Esa señal solo existe tras el cierre de Nueva York, así que ese día el bot sale al cierre, a las 17:00, hora de Nueva York. Se asume lo que un bot real podría ver, ni más ni menos.
BOCETO: torta «3 de cada 4 días: solo crédito»; recuadro «sustituto: explica 68%»; reloj con «16:15 ET: existen VIX y crédito del día» y «17:00 ET: sale».

**[2:58 — El resultado de la medición]** (pantalla: medidor con intervalo)
El resultado: φ igual a 0.90, con un intervalo de confianza del 95% entre 0.83 y 0.96, sobre 188 días de disparo entre 2007 y 2024. En 2014–2024 vale 0.90, y en 2007–2013, 0.89. En los 30 días en que dispara el VIX en vivo, baja a 0.80: algo mejor, pero con pocos días.
BOCETO: medidor semicircular con la aguja en 0.90 y el arco sombreado de 0.83 a 0.96; tarjetas «2014–2024: 0.90», «2007–2013: 0.89», «30 días de VIX en vivo: 0.80».

**[3:28 — Por qué 0.5 no existe]** (pantalla: la cota)
¿Y el 0.5? Para comerse solo la mitad del día habría que salir al abrir Wall Street sabiendo ya cómo va a cerrar. El mejor φ teórico es 0.44 en 2014–2024 y 0.58 en 2007–2013. Es una cota imposible: ningún bot la alcanza. Por eso el 0.5 no cuenta como un escenario realista.
BOCETO: línea punteada en 0.44 y 0.58 rotulada «cota imposible»; el 0.5 en gris con «no respaldado por los datos».

**[3:52 — Con tu capital]** (pantalla: tarjeta de capital $100,000)
Con el φ medido y ×1.5, 100,000 dólares simulados entre 2014 y 2024 terminan en más 4,155. Comprar y esperar la misma cesta: más 58,879. Es una simulación histórica, no una promesa.
BOCETO: tarjeta «Con tu capital» del sitio: +$4,155 (gris) contra +$58,879 (verde).

**[4:09 — La regla para tu propio análisis]** (pantalla: pregunta)
Una regla para cualquier análisis: si el resultado depende de un número que podrías haber supuesto, mídelo, o muestra qué pasa con todos los valores posibles. Un backtest honesto enseña la tabla completa, no solo la fila que le conviene.
BOCETO: pregunta «¿supuesto o medido?» con la tabla completa de sensibilidad debajo.

**[4:26 — Ficha del experimento #31]** (pantalla: tarjeta con la URL)
Ficha del experimento #31, Filtro reactivo intradía. Estado: parcial. Cifra clave: φ medido de 0.90 y, con ×1.5, un Sharpe de 0.09 y 0.11; con φ de 0.5 sería 0.37, un valor que los datos no respaldan. Filtros que decidieron: Sharpe bajo el 0.30 que pide el laboratorio y no bate a comprar y esperar. Lección: lo que decide el veredicto se mide. Revísalo completo en atlas-lab-one.vercel.app/e/31. Contenido educativo, no es asesoría financiera. El trading no se promete: se prueba.
BOCETO: tarjeta final con cuatro líneas (estado · cifra clave · filtro que decidió · lección) y la URL «atlas-lab-one.vercel.app/e/31» en grande; logo ATLAS; fondo de velas con opacidad 0.12.

---

## SHORT (9:16, ≈ 47 s)

**[0-3 s]** «Con fi 0.5, el bot pasa. Medido, no.»
BOCETO: dos medidores: 0.5 en verde, 0.90 en rojo; golpe de bajo + sacudida.
**[3-11 s]** «Fi es lo que el bot se come del día de pánico. Con 1 no esquiva nada; con 0.5, la mitad.»
BOCETO: vela roja con la línea de salida a φ = 1 y φ = 0.5. kb=out.
**[11-19 s]** «Lo medí con datos horarios: fi igual a 0.90, con un intervalo entre 0.83 y 0.96.»
BOCETO: medidor con el arco sombreado de 0.83 a 0.96; «188 días de disparo».
**[19-27 s]** «Con 0.5, el Sharpe sería 0.37, y pasaría. Con 0.90, es 0.09. El laboratorio pide 0.30.»
BOCETO: barras 0.37 (gris, «no respaldado») y 0.09 (roja) frente a la línea de 0.30.
**[27-35 s]** «Para esquivar la mitad habría que salir al abrir sabiendo cómo cierra. Ningún bot puede.»
BOCETO: línea punteada «cota imposible» en 0.44.
**[35-43 s]** «Experimento 31 completo en el enlace. El video completo está en el canal. No es asesoría financiera. El trading no se promete: se prueba.»
BOCETO: tarjeta con «experimento #31 completo en el enlace» y la URL corta; logo ATLAS.
**[43-47 s]** «¿Supuesto o medido?»
BOCETO: los dos medidores del inicio; corte directo al inicio (loop).

---

## Descripción de YouTube (video largo)
https://atlas-lab-one.vercel.app/e/31?utm_source=youtube&utm_medium=video&utm_campaign=exp031-t3
Ficha del experimento #31 (Filtro reactivo intradía): parcial · φ medido 0.90 (IC 95%: 0.83–0.96; 188 días de disparo) · con ×1.5, Sharpe 0.09 y 0.11 · con φ = 0.5 sería 0.37, un escenario que los datos no respaldan.
Cómo se mide cuánto de la caída del día de pánico alcanza a esquivar un bot, y por qué un supuesto puede decidir el veredicto.
Contenido educativo. No es asesoría financiera ni recomendación de inversión.

## Descripción del Short
https://atlas-lab-one.vercel.app/e/31?utm_source=youtube&utm_medium=short&utm_campaign=exp031-t3
Ficha del experimento #31: parcial · φ medido 0.90; con φ = 0.5 el Sharpe sería 0.37, no respaldado por los datos. Video completo en el canal. Contenido educativo, no es asesoría financiera.

## Capítulos
0:00 Gancho · 0:16 Qué es este experimento · 0:31 Qué es φ · 0:57 Qué pasa si lo supones · 1:34 El problema de suponer · 1:54 Cómo se mide · 2:25 Los días solo de crédito · 2:58 El resultado de la medición · 3:28 Por qué 0.5 no existe · 3:52 Con tu capital · 4:09 La regla para tu propio análisis · 4:26 Ficha del experimento #31

## Etiquetas
análisis de sensibilidad, supuestos, VIX, VXX, datos horarios, intervalo de confianza, bot de trading, backtest, Sharpe ratio, gestión de riesgo, trading con datos, atlas lab

## Rúbrica (autoevaluación, 1–5)
| Pieza | hook_0_3s | ritmo | promesa_cumplida | potencial_loop | claridad_no_traders | honestidad_atlas | audio | cta | Promedio |
|---|---|---|---|---|---|---|---|---|---|
| Largo | 4 | 4 | 5 | 4 | 4 | 5 | 4 | 4 | 4.25 |
| Short | 4 | 4 | 5 | 5 | 4 | 5 | 4 | 4 | 4.38 |

Hook ≥ 4 ✓ · honestidad 5 ✓. Punto débil: la reconstrucción del VIX con VXX es técnica; el largo la explica con un recuadro y el Short la omite. El escenario φ = 0.5 se presenta siempre como «no respaldado por los datos».

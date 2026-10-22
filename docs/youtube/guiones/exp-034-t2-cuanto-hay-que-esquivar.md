# Experimento #34 — Escalonado VIX<14 ejecutable · Tema 2: cuánto habría que esquivar para sobrevivir

Tema 2 de 3 del experimento #034 · Qué aporta frente a los otros temas: introduce el φ de equilibrio (cuánto del día de pánico habría que esquivar para que cada apalancamiento sobreviva: ≤ 0.90 con ×2, ≤ 0.75 con ×2.5) frente al φ medido de 0.94. El tema 1 cuenta la idea, la tabla de muertes y la frontera del riesgo; el tema 3, la calma como señal. Cubre también el #33 como dato de contraste. Se entiende sin haber visto los otros temas.
Estado del guion: **BORRADOR — pendiente de aprobación**
Estado del experimento: **MURIÓ** (ninguno de los tres apalancamientos altos sobrevive 2014–2024) · Serie G — Construyendo un bot (y por qué murió)
Datos usados: `experiments.json` (v=34: analysis, notes, metrics, kpis, params_view, verdict, capital; v=33: notes, metrics; v=31: notes; v=30: kpis), `exp_details.json` (clave `…-v34`: algo, filters), `series/20260610_140720_graduado-vix-14-ejecutable-v34.json`, tabla «Con tu capital» (archivo de capital en `docs/youtube/`).
Producción (CLAUDE.md del canal): b-roll real detrás de cada escena con overlay oscuro 0.6, Ken Burns alternando in/out, subtítulos karaoke en MAYÚSCULAS con cifras en rojo, un dato visual por escena, golpe de bajo + sacudida solo en 1–2 momentos. Colores: rojo `#e11d2a`, verde `#22c55e`, fondo `#09090b`.

## Títulos (3 opciones)
1. ¿Cuánta caída tendrías que esquivar para sobrevivir? ×2: φ 0.90; ×2.5: φ 0.75
2. Cuanto más apalancas, más tendrías que esquivar: el φ de equilibrio de un bot
3. φ medido 0.94 contra φ necesario 0.75: la brecha del ×2.5

## Miniatura (pensada para el título 3)
Fondo `#09090b`. Un medidor semicircular con dos marcas: «NECESARIO 0.75» en verde `#22c55e` y «MEDIDO 0.94» en rojo `#e11d2a`, con un hueco amplio entre las dos. Texto en Segoe UI Black: «LA BRECHA» (dos palabras, sin repetir los títulos). Logo ATLAS abajo a la derecha.

---

## VIDEO LARGO (16:9, ≈ 5:04 min)

**[0:00 — Gancho]** (pantalla: medidor con dos marcas)
Para que el apalancamiento ×2.5 sobreviviera, el bot tendría que comerse como máximo el 75% del día de pánico: φ de 0.75 o menos. El medido es 0.94. Hay una brecha, y es la razón por la que la cuenta muere.
BOCETO: medidor de φ con la marca verde «necesario ≤ 0.75» y la roja «medido 0.94»; el hueco entre ambas se sombrea. Golpe de bajo al aparecer el 0.94. kb=in.

**[0:19 — Qué es este experimento]** (pantalla: rótulo con el número y el nombre)
Este es el experimento #34 de ATLAS Lab: Escalonado VIX bajo 14, ejecutable. Todos los resultados están en la página del experimento. Aquí explico una medida que sirve para cualquier bot: cuánto habría que esquivar para sobrevivir.
BOCETO: rótulo «EXPERIMENTO #34 · Escalonado VIX<14 ejecutable» sobre velas con opacidad 0.12. kb=out.

**[0:35 — Qué es φ]** (pantalla: día de disparo)
El bot tiene un filtro de pánico. Cuando se dispara, el bot ya está dentro, y ese día se come parte de la caída. φ, la letra griega fi, es la fracción del movimiento de ese día que el bot se come. Si φ vale 1, no esquivó nada; si vale 0.5, esquivó la mitad. Para este filtro, medido con datos horarios, φ vale 0.94: el bot esquiva apenas cerca del 6%.
BOCETO: vela roja grande; línea de salida a φ = 1, 0.75 y 0.5; medidor con la aguja en 0.94.

**[1:07 — El apalancamiento mueve el punto de equilibrio]** (pantalla: escalera de exigencia)
Aquí viene la idea. Cuanto más apalancas, más grande es cada golpe, y más tendrías que esquivar para que la cuenta aguante. Con ×1.5, la cuenta sobrevive incluso con el rezago puro de un día, que es φ igual a 1: el experimento 30 lo muestra. Con ×2, el experimento 33 dice que haría falta φ de 0.90 o menos; con 0.95 muere. Con ×2.5, este experimento: φ de 0.75 o menos.
BOCETO: escalera con tres peldaños: ×1.5 «sobrevive aunque φ = 1», ×2 «φ ≤ 0.90», ×2.5 «φ ≤ 0.75»; la exigencia sube a medida que sube el apalancamiento.

**[1:41 — Contra lo que se mide]** (pantalla: tres marcas en el medidor)
Ahora ponlo contra lo que se mide. El φ medido de este filtro es 0.94, con un intervalo del 95% entre 0.87 y 1.00 en la base. Con ×2 estás cerca del borde, y por eso el experimento 33 muere por poco. Con ×2.5 estás lejos: 0.94 contra 0.75. La cuenta con ×2.5 muere el 10 de noviembre de 2016, con un Sharpe, la ganancia por unidad de riesgo, de menos 0.60.
BOCETO: medidor con tres marcas necesarias (0.90 para ×2, 0.75 para ×2.5) y la medida 0.94; la distancia al 0.75 resaltada; tarjeta «×2.5 · muere 10-nov-2016 · −0.60».

**[2:17 — ¿Y se puede esquivar más?]** (pantalla: la cota)
¿Se puede esquivar más? Hay un límite. Esquivar la mitad del día exigiría salir al abrir Wall Street sabiendo ya cómo cerrará. Con φ de 0.5, el ×2.5 daría un Sharpe de 0.42, pero los datos horarios no respaldan esa reacción. Y la regla de precio del experimento 31 llega a φ entre 0.46 y 0.94, pero con costos de 3 puntos básicos su Sharpe es negativo, de menos 0.77 a menos 0.01.
BOCETO: tarjeta gris «φ = 0.5 → Sharpe 0.42 · no respaldado»; barra «regla de precio (#31): φ 0.46–0.94 → Sharpe −0.77 a −0.01».

**[2:51 — Los otros dos apalancamientos]** (pantalla: tabla)
Los otros dos apalancamientos altos mueren antes. El ×3 el 6 de octubre de 2016, con menos 0.62, y el ×4 el 5 de mayo de 2015, con menos 1.58. En 2007 a 2013, el ×2.5 sobrevive con un Sharpe de 0.08, el ×3 con 0.02, y el ×4 también muere, con menos 0.28.
| Apalancamiento alto | Muere (2014–2024) | Sharpe 2014–24 | Sharpe 2007–13 |
|---|---|---|---|
| ×2.5 | 10-nov-2016 | −0.60 | 0.08 |
| ×3 | 6-oct-2016 | −0.62 | 0.02 |
| ×4 | 5-may-2015 | −1.58 | −0.28 (muere) |
BOCETO: tabla que se llena fila por fila con ✕ rojas; línea de tiempo con las tres fechas.

**[3:22 — Qué dice la línea sin reglas]** (pantalla: línea hipotética)
Y sin las reglas de la prop firm, la empresa que presta la cuenta y la cierra si pierdes demasiado, el ×2.5 habría terminado 2014–2024 en más 4.3%, con Sharpe de 0.09 y caída máxima de menos 15.6%. Es una línea hipotética: en la realidad la cuenta se cierra antes. Comprar y esperar la misma cesta dio más 58.9% con Sharpe de 0.47.
BOCETO: línea punteada «Sin reglas de prop firm» que termina en +4.3%; tarjetas «0.09 · −15.6%» y barra de comprar y esperar «+58.9% · 0.47».

**[3:51 — Con tu capital]** (pantalla: tarjeta de capital $100,000)
Con 100,000 dólares simulados, la cuenta ×2.5 se cierra con menos 10,178. Comprar y esperar la misma cesta, en las mismas fechas, 2014 a 2016: menos 4,698. Con tu capital verías esa cuenta cerrada.
BOCETO: tarjeta «Con tu capital» del sitio: −$10,178 contra −$4,698, «2014–2016, hasta que se cierra la cuenta».

**[4:09 — La medida para cualquier bot]** (pantalla: pregunta)
La medida sirve para cualquier bot que sale ante una alarma: pregunta cuánto del golpe se come el día de la alarma y cuánto necesitaría esquivar para aguantar con el apalancamiento que usa. Si la brecha es grande, el apalancamiento es el problema, no la alarma.
BOCETO: pregunta «¿cuánto necesito esquivar?» con el medidor y la brecha sombreada.

**[4:28 — Ficha del experimento #34]** (pantalla: tarjeta con la URL)
Ficha del experimento #34, Escalonado VIX bajo 14, ejecutable. Estado: murió. Cifra clave: con ×2.5 en calma, la cuenta muere el 10 de noviembre de 2016, con Sharpe de menos 0.60; habría hecho falta φ de 0.75 o menos, y el medido es 0.94. Filtro que decidió: ningún apalancamiento alto sobrevive en 2014–2024. Lección: cuanto más apalancas, más tendrías que esquivar. Revísalo completo en atlas-lab-one.vercel.app/e/34. Contenido educativo, no es asesoría financiera. El trading no se promete: se prueba.
BOCETO: tarjeta final con cuatro líneas (estado · cifra clave · filtro que decidió · lección) y la URL «atlas-lab-one.vercel.app/e/34» en grande; logo ATLAS; fondo de velas con opacidad 0.12.

---

## SHORT (9:16, ≈ 47 s)

**[0-4 s]** «Con ×2.5 hace falta fi 0.75. El medido: 0.94.»
BOCETO: medidor con «necesario ≤ 0.75» en verde y «medido 0.94» en rojo; golpe de bajo + sacudida.
**[4-12 s]** «Fi es la parte del día de pánico que el bot se come. Con 1, no esquiva nada. Con 0.5, esquiva la mitad.»
BOCETO: vela roja con la línea de salida a φ = 1 y φ = 0.5. kb=out.
**[12-20 s]** «Con ×1.5 aguanta sin esquivar nada. Con ×2, fi de 0.90 o menos. Con ×2.5, 0.75.»
BOCETO: escalera de exigencia con tres peldaños.
**[20-28 s]** «Cuanto más apalancas, más tendrías que esquivar. El bot esquiva apenas cerca del 6%.»
BOCETO: el hueco entre 0.75 y 0.94 sombreado.
**[28-35 s]** «El ×2.5 muere el 10 de noviembre de 2016. El ×4, en mayo de 2015.»
BOCETO: tres ✕ en la línea de tiempo con sus fechas.
**[35-43 s]** «Experimento 34 completo en el enlace. El video completo está en el canal. No es asesoría financiera. El trading no se promete: se prueba.»
BOCETO: tarjeta con «experimento #34 completo en el enlace» y la URL corta; logo ATLAS.
**[43-47 s]** «¿Cuánto tendrías que esquivar tú?»
BOCETO: el medidor del inicio con interrogación; corte directo al inicio (loop).

---

## Descripción de YouTube (video largo)
https://atlas-lab-one.vercel.app/e/34?utm_source=youtube&utm_medium=video&utm_campaign=exp034-t2
Ficha del experimento #34 (Escalonado VIX<14 ejecutable): murió · con ×2.5 en calma la cuenta muere el 10-nov-2016 (Sharpe −0.60); habría hecho falta φ ≤ 0.75 y el medido es 0.94 · ×3 muere el 6-oct-2016 (−0.62) y ×4 el 5-may-2015 (−1.58).
El φ de equilibrio: cuánto del día de pánico habría que esquivar para que cada apalancamiento sobreviva (×2: 0.90; ×2.5: 0.75).
Contenido educativo. No es asesoría financiera ni recomendación de inversión.

## Descripción del Short
https://atlas-lab-one.vercel.app/e/34?utm_source=youtube&utm_medium=short&utm_campaign=exp034-t2
Ficha del experimento #34: murió · con ×2.5 habría hecho falta φ ≤ 0.75; el medido es 0.94. Video completo en el canal. Contenido educativo, no es asesoría financiera.

## Capítulos
0:00 Gancho · 0:19 Qué es este experimento · 0:35 Qué es φ · 1:07 El apalancamiento mueve el punto de equilibrio · 1:41 Contra lo que se mide · 2:17 ¿Y se puede esquivar más? · 2:51 Los otros dos apalancamientos · 3:22 Qué dice la línea sin reglas · 3:51 Con tu capital · 4:09 La medida para cualquier bot · 4:28 Ficha del experimento #34

## Etiquetas
apalancamiento, φ, filtro de pánico, VIX, bot de trading, backtest, Sharpe ratio, prop firm, gestión de riesgo, riesgo de ruina, trading con datos, atlas lab

## Rúbrica (autoevaluación, 1–5)
| Pieza | hook_0_3s | ritmo | promesa_cumplida | potencial_loop | claridad_no_traders | honestidad_atlas | audio | cta | Promedio |
|---|---|---|---|---|---|---|---|---|---|
| Largo | 4 | 4 | 5 | 4 | 4 | 5 | 4 | 4 | 4.25 |
| Short | 4 | 4 | 5 | 4 | 4 | 5 | 4 | 4 | 4.25 |

Hook ≥ 4 ✓ · honestidad 5 ✓. Punto débil: el concepto de φ pide un bloque previo; el Short lo resume en una frase. Los umbrales 0.90 (×2) y 0.75 (×2.5) vienen de dos experimentos distintos (#33 y #34) y el video lo dice.

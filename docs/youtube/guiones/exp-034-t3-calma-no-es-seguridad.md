# Experimento #34 — Escalonado VIX<14 ejecutable · Tema 3: la calma no es seguridad

Tema 3 de 3 del experimento #034 · Qué aporta frente a los otros temas: compara el ×2.5 en calma con el ×2 de todos los días (Sharpe −0.60 contra −0.58) para mostrar que graduar el riesgo por el VIX no mejora nada, y qué dice la línea sin reglas (+4.3%, mínimo 88,261). El tema 1 cuenta la idea y la frontera del riesgo; el tema 2, el φ de equilibrio. Se entiende sin haber visto los otros temas.
Estado del guion: **BORRADOR — pendiente de aprobación**
Estado del experimento: **MURIÓ** (ninguno de los tres apalancamientos altos sobrevive 2014–2024) · Serie G — Construyendo un bot (y por qué murió)
Datos usados: `experiments.json` (v=34: analysis, notes, metrics, kpis, params_view, verdict, capital; v=33: metrics, kpis), `exp_details.json` (clave `…-v34`: algo, filters), `series/20260610_140720_graduado-vix-14-ejecutable-v34.json` (1.ª curva: ×2.5 hasta la quiebra; 2.ª: «Sin reglas de prop firm»; 3.ª: comprar y esperar), tabla «Con tu capital» (archivo de capital en `docs/youtube/`).
Producción (CLAUDE.md del canal): b-roll real detrás de cada escena con overlay oscuro 0.6, Ken Burns alternando in/out, subtítulos karaoke en MAYÚSCULAS con cifras en rojo, un dato visual por escena, golpe de bajo + sacudida solo en 1–2 momentos. Colores: rojo `#e11d2a`, verde `#22c55e`, fondo `#09090b`.

## Títulos (3 opciones)
1. Más riesgo en la calma: Sharpe −0.60. Con ×2 todos los días: −0.58
2. VIX bajo 14: por qué un mercado tranquilo no es un mercado seguro
3. Subir el apalancamiento cuando hay calma no mejoró nada (experimento #34)

## Miniatura (pensada para el título 1)
Fondo `#09090b`. Dos barras casi iguales hacia abajo: «×2 SIEMPRE −0.58» (gris) y «×2.5 EN CALMA −0.60» (rojo `#e11d2a`); encima, un termómetro de VIX marcando «14» en verde `#22c55e`. Texto en Segoe UI Black: «CALMA ≠ SEGURO» (sin repetir los títulos). Logo ATLAS abajo a la derecha.

---

## VIDEO LARGO (16:9, ≈ 4:38 min)

**[0:00 — Gancho]** (pantalla: dos barras negativas casi iguales)
Subí el apalancamiento cuando el mercado estaba en calma. Resultado: un Sharpe de menos 0.60. El mismo bot, con ×2 todos los días, daba menos 0.58. Más riesgo en la calma no compró nada.
BOCETO: dos barras rojas hacia abajo, casi iguales: «×2 siempre · −0.58» y «×2.5 en calma · −0.60»; golpe de bajo en la segunda. kb=in.

**[0:16 — Qué es este experimento]** (pantalla: rótulo con el número y el nombre)
Este es el experimento #34 de ATLAS Lab: Escalonado VIX bajo 14, ejecutable. Todos los resultados están en la página del experimento. Aquí me pregunto si un mercado tranquilo da permiso para apostar más.
BOCETO: rótulo «EXPERIMENTO #34 · Escalonado VIX<14 ejecutable» sobre velas con opacidad 0.12. kb=out.

**[0:31 — Qué es el VIX bajo 14]** (pantalla: termómetro)
El VIX es el índice del miedo de Wall Street. Cuando está bajo 14, el mercado está tranquilo: los inversores no esperan sacudidas. La tentación es obvia: si el miedo está bajo, súbele el volumen al riesgo. Es una apuesta razonable, y por eso se probó.
BOCETO: termómetro del VIX con una zona verde bajo 14 rotulada «calma»; una flecha «¿más riesgo?». kb=in.

**[0:50 — La regla]** (pantalla: dos niveles de apalancamiento)
La regla: se usa el mejor filtro de pánico de la serie, el del VIX sobre 28 y el crédito bajo su media de 40 días. Si el VIX de ayer está por debajo de 14, el bot apalanca más: ×2.5, ×3 o ×4. El resto de los días, ×1.5. Apalancar es operar con más dinero del que tienes: multiplica las ganancias y también las pérdidas.
BOCETO: gráfico del VIX con una franja verde bajo 14 «×alto» y el resto en gris «×1.5»; recuadro del filtro «VIX > 28 · crédito < media de 40 días».

**[1:21 — Dos bots casi iguales]** (pantalla: dos curvas)
Compara. La base del experimento 33, con ×2 todos los días, muere el 11 de noviembre de 2016, con un Sharpe de menos 0.58. El bot de este experimento, con ×2.5 en calma y ×1.5 el resto, muere el 10 de noviembre de 2016, con menos 0.60. Una fecha casi idéntica y un Sharpe casi idéntico. Graduar el riesgo no cambió el desenlace.
BOCETO: dos curvas que caen juntas y se cortan con una ✕ con un día de diferencia; tarjetas «#33: 11-nov-2016 · −0.58» y «#34: 10-nov-2016 · −0.60».

**[1:52 — Cuanto más alto, antes]** (pantalla: tres fechas)
Y si subes más el apalancamiento en calma, la cuenta cae antes. Con ×3, el 6 de octubre de 2016, con menos 0.62. Con ×4, el 5 de mayo de 2015, con menos 1.58. En 2007 a 2013, el ×2.5 sobrevive con 0.08, el ×3 con 0.02, y el ×4 también muere, con menos 0.28.
BOCETO: línea de tiempo con tres ✕: 5-may-2015 (×4), 6-oct-2016 (×3), 10-nov-2016 (×2.5); barras de Sharpe −1.58, −0.62, −0.60.

**[2:23 — La cuenta]** (pantalla: curva real hasta la quiebra)
La cuenta del ×2.5 parte de 100,000, toca 103,154 el 25 de febrero de 2015 y el 10 de noviembre de 2016, el día 658, se cierra en 89,822. Retorno de menos 10.2% y caída máxima de menos 12.9%. Aun con la regla de apalancar más solo en los días tranquilos, la cuenta terminó cayendo.
BOCETO: curva real de `series/…v34.json` con el máximo «103,154 · 25-feb-2015» y la ✕ en «89,822 · 10-nov-2016»; tarjetas con tick (−10.2% · −12.9% · día 658).

**[2:51 — Sin las reglas]** (pantalla: línea hipotética)
Sin las reglas de la prop firm, la empresa que presta la cuenta y la cierra si pierdes demasiado, la línea hipotética del ×2.5 termina 2014–2024 en 104,281, o sea más 4.3%, con Sharpe de 0.09. Pero antes baja hasta 88,261 el 18 de noviembre de 2016, y su caída máxima es de menos 15.6%. Comprar y esperar la misma cesta terminó en más 58.9%, con Sharpe de 0.47.
BOCETO: línea punteada que baja a «88,261 · 18-nov-2016» y termina en «104,281»; tarjetas «+4.3% · 0.09 · −15.6%»; barra gris de comprar y esperar «+58.9% · 0.47».

**[3:25 — Calma no es seguridad]** (pantalla: texto)
La lección es de lectura. Un indicador tranquilo describe cómo está el mercado hoy; no dice cuándo viene el siguiente golpe. El experimento 34 lo resume: con filtros que reaccionan un día tarde, la protección no llega más allá de unas ×1.5. Subir el apalancamiento no crea ventaja: solo acelera el desenlace.
BOCETO: termómetro verde bajo 14 y, detrás, una sombra roja; escala ×1 … ×4 con marca verde en ×1.5.

**[3:48 — Con tu capital]** (pantalla: tarjeta de capital $100,000)
Con 100,000 dólares simulados, la cuenta ×2.5 se cierra con menos 10,178. Comprar y esperar la misma cesta, en las mismas fechas, 2014 a 2016: menos 4,698. Con tu capital verías esa cuenta cerrada.
BOCETO: tarjeta «Con tu capital» del sitio: −$10,178 contra −$4,698, «2014–2016, hasta que se cierra la cuenta».

**[4:05 — Ficha del experimento #34]** (pantalla: tarjeta con la URL)
Ficha del experimento #34, Escalonado VIX bajo 14, ejecutable. Estado: murió. Cifra clave: ×2.5 en calma, Sharpe de menos 0.60, contra menos 0.58 de la base con ×2; la cuenta muere el 10 de noviembre de 2016. Filtro que decidió: ningún apalancamiento alto sobrevive en 2014–2024. Lección: la calma no es seguridad. Revísalo completo en atlas-lab-one.vercel.app/e/34. Contenido educativo, no es asesoría financiera. El trading no se promete: se prueba.
BOCETO: tarjeta final con cuatro líneas (estado · cifra clave · filtro que decidió · lección) y la URL «atlas-lab-one.vercel.app/e/34» en grande; logo ATLAS; fondo de velas con opacidad 0.12.

---

## SHORT (9:16, ≈ 47 s)

**[0-3 s]** «Más riesgo en la calma: Sharpe menos 0.60.»
BOCETO: dos barras rojas casi iguales; golpe de bajo + sacudida.
**[3-11 s]** «Con el VIX bajo 14, apalanca ×2.5. Con ×2 todos los días, daba menos 0.58.»
BOCETO: termómetro del VIX con la franja verde bajo 14. kb=out.
**[11-19 s]** «Resultado: la cuenta muere el 10 de noviembre de 2016. La base con ×2 moría el 11. Casi el mismo día.»
BOCETO: dos curvas que se cortan con un día de diferencia.
**[19-27 s]** «Con ×3, muere el 6 de octubre de 2016. Con ×4, el 5 de mayo de 2015.»
BOCETO: línea de tiempo con tres ✕.
**[27-35 s]** «La calma describe el mercado de hoy. No avisa del siguiente golpe.»
BOCETO: termómetro verde con una sombra roja detrás.
**[35-43 s]** «Experimento 34 completo en el enlace. El video completo está en el canal. No es asesoría financiera. El trading no se promete: se prueba.»
BOCETO: tarjeta con «experimento #34 completo en el enlace» y la URL corta; logo ATLAS.
**[43-47 s]** «Calma, y aun así…»
BOCETO: el termómetro del inicio; corte directo al inicio (loop: la frase queda abierta).

---

## Descripción de YouTube (video largo)
https://atlas-lab-one.vercel.app/e/34?utm_source=youtube&utm_medium=video&utm_campaign=exp034-t3
Ficha del experimento #34 (Escalonado VIX<14 ejecutable): murió · ×2.5 cuando el VIX de ayer está bajo 14 y ×1.5 el resto: Sharpe −0.60 y cuenta cerrada el 10-nov-2016 (la base ×2 del #33: −0.58, 11-nov-2016) · ×3 muere el 6-oct-2016 y ×4 el 5-may-2015.
Por qué un mercado tranquilo no es un mercado seguro: graduar el apalancamiento por el VIX no mejoró nada.
Contenido educativo. No es asesoría financiera ni recomendación de inversión.

## Descripción del Short
https://atlas-lab-one.vercel.app/e/34?utm_source=youtube&utm_medium=short&utm_campaign=exp034-t3
Ficha del experimento #34: murió · más riesgo en la calma da Sharpe −0.60 (con ×2 todos los días, −0.58). Video completo en el canal. Contenido educativo, no es asesoría financiera.

## Capítulos
0:00 Gancho · 0:16 Qué es este experimento · 0:31 Qué es el VIX bajo 14 · 0:50 La regla · 1:21 Dos bots casi iguales · 1:52 Cuanto más alto, antes · 2:23 La cuenta · 2:51 Sin las reglas · 3:25 Calma no es seguridad · 3:48 Con tu capital · 4:05 Ficha del experimento #34

## Etiquetas
VIX, mercado en calma, apalancamiento, riesgo de ruina, bot de trading, backtest, Sharpe ratio, prop firm, gestión de riesgo, estrategia de trading, trading con datos, atlas lab

## Rúbrica (autoevaluación, 1–5)
| Pieza | hook_0_3s | ritmo | promesa_cumplida | potencial_loop | claridad_no_traders | honestidad_atlas | audio | cta | Promedio |
|---|---|---|---|---|---|---|---|---|---|
| Largo | 4 | 4 | 5 | 4 | 4 | 5 | 4 | 4 | 4.25 |
| Short | 4 | 4 | 5 | 4 | 4 | 5 | 4 | 4 | 4.25 |

Hook ≥ 4 ✓ · honestidad 5 ✓. Punto débil: la comparación con el ×2 del #33 mezcla dos configuraciones (sus ×1.5 de resto de días difieren); el video lo presenta como «dos bots casi iguales» sin afirmar equivalencia.

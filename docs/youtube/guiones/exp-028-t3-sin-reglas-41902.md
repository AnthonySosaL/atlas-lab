# Experimento #28 — Retraso de 1 día + interruptor de emergencia · Tema 3: aunque no existieran las reglas

Tema 3 de 3 del experimento #028 · Qué aporta frente a los otros temas: responde a «¿murió por las reglas de la prop firm o por la estrategia?» usando la línea hipotética «Sin reglas de prop firm» (100,000 dólares terminan en 41,902). El tema 1 cuenta el resultado general y el tema 2, el método del simulador. Se entiende sin haber visto los otros temas.
Estado del guion: **BORRADOR — pendiente de aprobación**
Estado del experimento: **murió** (veredicto del sitio: «No sirvió») · Serie G — Construyendo un bot (y por qué murió)
Datos usados: `series/extra-v28.json` (1.ª curva: estrategia ×3 hasta el 29-jun-2015; 2.ª: «Sin reglas de prop firm»: máximo, mínimo y final), `experiments.json` (v=28: analysis, notes, kpis, capital, period; v=29 para la referencia al tope de −2.5%), `exp_details.json` (clave `extra-v28`), tabla «Con tu capital» (archivo de capital en `docs/youtube/`).
Producción (CLAUDE.md del canal): b-roll real detrás de cada escena con overlay oscuro 0.6, Ken Burns alternando in/out, subtítulos karaoke en MAYÚSCULAS con cifras en rojo, un dato visual por escena, golpe de bajo + sacudida solo en 1–2 momentos. Colores: rojo `#e11d2a`, verde `#22c55e`, fondo `#09090b`.

## Títulos (3 opciones)
1. Aunque no existieran las reglas de la prop firm: 100,000 se convierten en 41,902
2. ¿Murió por las reglas o por la estrategia? La cuenta ×3 sin corte
3. El kill-switch no salva una estrategia que pierde (línea hipotética del #28)

## Miniatura (pensada para el título 1)
Fondo `#09090b`. Una curva que sube un poco, se corta con una ✕ roja `#e11d2a` y, en gris punteado, sigue cayendo hasta «41,902». Texto en Segoe UI Black: «SIN REGLAS TAMBIÉN» (tres palabras, sin repetir los títulos). Logo ATLAS abajo a la derecha.

---

## VIDEO LARGO (16:9, ≈ 4:22 min)

**[0:00 — Gancho]** (pantalla: curva real y línea punteada)
¿Y si la cuenta no hubiera tenido reglas? Con apalancamiento ×3 y un freno de menos 3%, 100,000 dólares terminarían en 41,902. La cuenta no murió por mala suerte con las reglas.
BOCETO: curva real que se corta con ✕ y, en gris punteado, la línea hipotética que sigue cayendo; contador final «41,902». Golpe de bajo en el contador.

**[0:16 — Qué es este experimento]** (pantalla: rótulo con el número y el nombre)
Este es el experimento #28 de ATLAS Lab: Retraso de 1 día más interruptor de emergencia. Todos los resultados están en la página del experimento. Aquí respondo una objeción típica: «las reglas de la prop firm son demasiado duras».
BOCETO: rótulo «EXPERIMENTO #28 · Retraso de 1 día + interruptor de emergencia» sobre velas con opacidad 0.12. kb=out.

**[0:33 — La objeción]** (pantalla: dos curvas posibles)
Una prop firm es la empresa que presta la cuenta y la cierra si pierdes demasiado: caída máxima de 10%, pérdida diaria de 5%. La objeción es que esas reglas matan estrategias que habrían ganado si las dejaras seguir. Para probarlo, el sitio dibuja una segunda línea: la misma estrategia, sin el corte. Se llama «Sin reglas de prop firm» y es hipotética, porque en la realidad la cuenta se cierra.
BOCETO: una curva con la ✕ y una segunda curva punteada que continúa; leyenda «Sin reglas de prop firm: hipotética». kb=in.

**[1:02 — La cuenta real]** (pantalla: curva hasta el corte)
La cuenta real, con ×3 y kill-switch de menos 3%, sube hasta un máximo de 106,496 el 25 de febrero de 2015. Después cae, y el 29 de junio de 2015, al día 230, la curva termina en 89,186. Ahí se cierra, por pérdidas acumuladas que cruzan el drawdown de 10%.
BOCETO: curva real de `series/extra-v28.json` con el máximo marcado «106,496 · 25-feb-2015» y la ✕ en «89,186 · 29-jun-2015».

**[1:29 — La línea hipotética]** (pantalla: la curva continúa)
Ahora la línea hipotética, sin corte. Después del máximo de febrero de 2015 sigue cayendo, toca su punto más bajo en 37,133 el 5 de octubre de 2023 y termina el 31 de diciembre de 2024 en 41,902, partiendo de 100,000. Es decir, menos de la mitad del capital. Sin reglas, la estrategia tampoco se recupera.
BOCETO: la línea punteada se dibuja completa; se marcan «máximo 106,496», «mínimo 37,133 · 5-oct-2023» y «final 41,902 · 31-dic-2024». kb=out.

**[1:56 — Lo que dice el Sharpe]** (pantalla: barras de Sharpe)
Esto encaja con el Sharpe, la ganancia por unidad de riesgo. Con ×3, en 2014–2024, es de menos 1.06; con ×2, menos 0.52; con ×4, menos 1.59. Un Sharpe negativo significa que, en relación con el riesgo asumido, el bot pierde dinero. No es el corte de la cuenta lo que lo vuelve negativo.
BOCETO: tres barras rojas (−0.52, −1.06, −1.59) con el rótulo «NEGATIVO = PIERDE».

**[2:22 — Por qué el freno no lo arregla]** (pantalla: escalera de pérdidas)
Y el freno no puede arreglarlo. El análisis dice que las cuentas mueren por pérdidas acumuladas, entre 34 días y unos 23 meses desde el máximo hasta la quiebra. El kill-switch protege de un día malo, no de una racha de muchos días un poco malos. La línea hipotética es esa racha, vista de 2014 a 2024.
BOCETO: escalera de pérdidas pequeñas, todas por debajo del tope de −3%, que suman hasta bajar la curva; rótulo «34 días a unos 23 meses».

**[2:47 — Y si frenara antes]** (pantalla: dos topes)
Se podría pensar: entonces frenemos antes. El experimento 29 lo prueba, con un tope de menos 2.5%. Su línea hipotética termina en 17,432, peor que los 41,902 de aquí. Es otro video, pero el patrón ya se ve: ni las reglas ni el freno son el problema principal.
BOCETO: dos finales: «tope −3%: 41,902» y «tope −2.5%: 17,432»; flecha mínima «más peor».

**[3:09 — Con tu capital]** (pantalla: tarjeta de capital $10,000 / $100,000)
Con tu capital, en la realidad, la cuenta se cierra: menos 1,081 dólares con 10,000 y menos 10,814 con 100,000. En este experimento no hay curva de «sin estrategia» para comparar, así que no pongo una cifra de comprar y esperar.
BOCETO: tarjeta «Con tu capital» del sitio con el selector; curva roja cortada; comparación en «—».

**[3:28 — Cómo leer la línea hipotética]** (pantalla: dos escenarios)
Una regla para leer cualquier cuenta cerrada: mira la línea hipotética. Si sin reglas la curva termina bien, las reglas pueden ser el problema. Si sin reglas también cae, como aquí, el problema es la estrategia. Y no es una línea para ilusionarse: es una referencia, no un resultado.
BOCETO: dos escenarios: «hipotética sube → pregunta por las reglas» y «hipotética baja → problema de la estrategia» (resaltado).

**[3:48 — Ficha del experimento #28]** (pantalla: tarjeta con la URL)
Ficha del experimento #28, Retraso de 1 día más interruptor de emergencia. Estado: murió. Cifra clave: sin reglas de prop firm, la misma cuenta ×3 terminaría en 41,902 desde 100,000; con ×3, Sharpe de menos 1.06. Filtro que decidió: ningún apalancamiento sobrevive en los dos periodos. Lección: el freno diario no salva una estrategia que pierde. Revísalo completo en atlas-lab-one.vercel.app/e/28. Contenido educativo, no es asesoría financiera. El trading no se promete: se prueba.
BOCETO: tarjeta final con cuatro líneas (estado · cifra clave · filtro que decidió · lección) y la URL «atlas-lab-one.vercel.app/e/28» en grande; logo ATLAS; fondo de velas con opacidad 0.12.

---

## SHORT (9:16, ≈ 47 s)

**[0-3 s]** «Sin reglas, 100,000 dólares terminan en 41,902.»
BOCETO: línea punteada cayendo hasta «41,902»; golpe de bajo + sacudida.
**[3-10 s]** «Es el bot con ×3 y un freno de menos 3%. La prop firm lo cierra en junio de 2015.»
BOCETO: curva real que se corta con ✕ en la fecha. kb=out.
**[10-18 s]** «Pero dibujé la misma estrategia sin el corte. Tocó 37,133 en octubre de 2023 y terminó en 41,902.»
BOCETO: línea hipotética con el mínimo marcado y el final.
**[18-27 s]** «O sea: no murió por las reglas. La estrategia pierde. Con ×3, Sharpe menos 1.06.»
BOCETO: barra roja −1.06; sello «el problema es la estrategia».
**[27-35 s]** «El freno protege del día malo, no de la racha. Las pérdidas se acumulan durante semanas o meses.»
BOCETO: escalera de pérdidas pequeñas bajo el tope.
**[35-43 s]** «Experimento 28 completo en el enlace. El video completo está en el canal. No es asesoría financiera. El trading no se promete: se prueba.»
BOCETO: tarjeta con «experimento #28 completo en el enlace» y la URL corta; logo ATLAS.
**[43-47 s]** «¿Y si no hubiera reglas? Mira la línea punteada.»
BOCETO: la línea punteada del inicio; corte directo al inicio (loop).

---

## Descripción de YouTube (video largo)
https://atlas-lab-one.vercel.app/e/28?utm_source=youtube&utm_medium=video&utm_campaign=exp028-t3
Ficha del experimento #28 (Retraso de 1 día + interruptor de emergencia): murió (No sirvió) · con ×3, Sharpe −1.06 (2014–2024) · cuenta cerrada el 29-jun-2015 (día 230) · sin reglas de prop firm, 100,000 terminarían en 41,902.
¿Murió por las reglas de la prop firm o por la estrategia? La línea hipotética «Sin reglas» responde: la estrategia también pierde sin corte.
Contenido educativo. No es asesoría financiera ni recomendación de inversión.

## Descripción del Short
https://atlas-lab-one.vercel.app/e/28?utm_source=youtube&utm_medium=short&utm_campaign=exp028-t3
Ficha del experimento #28: murió · sin reglas, 100,000 terminarían en 41,902. Video completo en el canal. Contenido educativo, no es asesoría financiera.

## Capítulos
0:00 Gancho · 0:16 Qué es este experimento · 0:33 La objeción · 1:02 La cuenta real · 1:29 La línea hipotética · 1:56 Lo que dice el Sharpe · 2:22 Por qué el freno no lo arregla · 2:47 Y si frenara antes · 3:09 Con tu capital · 3:28 Cómo leer la línea hipotética · 3:48 Ficha del experimento #28

## Etiquetas
prop firm, reglas de fondeo, drawdown, kill-switch, línea hipotética, gestión de riesgo, apalancamiento, backtest, Sharpe ratio, bot de trading, trading con datos, atlas lab

## Rúbrica (autoevaluación, 1–5)
| Pieza | hook_0_3s | ritmo | promesa_cumplida | potencial_loop | claridad_no_traders | honestidad_atlas | audio | cta | Promedio |
|---|---|---|---|---|---|---|---|---|---|
| Largo | 5 | 4 | 5 | 4 | 4 | 5 | 4 | 4 | 4.38 |
| Short | 5 | 4 | 5 | 4 | 4 | 5 | 4 | 4 | 4.38 |

Hook ≥ 4 ✓ · honestidad 5 ✓. Punto débil: la línea hipotética es una referencia, no un resultado del experimento; el video lo repite dos veces. Las cifras de la curva (106,496; 89,186; 37,133; 41,902) salen de `series/extra-v28.json`.

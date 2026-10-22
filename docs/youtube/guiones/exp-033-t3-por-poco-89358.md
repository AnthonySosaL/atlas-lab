# Experimento #33 — Activación temprana del filtro · Tema 3: 89,358 contra 90,000

Tema 3 de 4 del experimento #033 · Qué aporta frente a los otros temas: cuenta cómo un resultado que «murió por poco» depende de un supuesto (φ) medido con incertidumbre, y qué dice la línea hipotética sin reglas. El tema 1 cuenta el experimento completo; el tema 2, las falsas alarmas; el tema 4, los dos periodos. Se entiende sin haber visto los otros temas.
Estado del guion: **BORRADOR — pendiente de aprobación**
Estado del experimento: **MURIÓ** (0 de 6 combinaciones sobreviven 2014–2024 con ×2; la base se corta el 11-nov-2016) · Serie G — Construyendo un bot (y por qué murió)
Datos usados: `series/20260610_140718_disparo-temprano-del-filtro-v33.json` (1.ª curva: base ×2 hasta la quiebra; 2.ª: «Sin reglas de prop firm»; 3.ª: comprar y esperar), `experiments.json` (v=33: analysis, notes, metrics, kpis, params_view, verdict, capital), `exp_details.json` (clave `…-v33`: algo, filters), tabla «Con tu capital» (archivo de capital en `docs/youtube/`).
Producción (CLAUDE.md del canal): b-roll real detrás de cada escena con overlay oscuro 0.6, Ken Burns alternando in/out, subtítulos karaoke en MAYÚSCULAS con cifras en rojo, un dato visual por escena, golpe de bajo + sacudida solo en 1–2 momentos. Colores: rojo `#e11d2a`, verde `#22c55e`, fondo `#09090b`.

## Títulos (3 opciones)
1. 89,358 contra 90,000: el bot que murió por poco
2. Con φ 0.90 sobrevive; con 0.95, muere: el filtro frágil
3. Cuando «por poco» no cuenta: la cuenta del experimento #33

## Miniatura (pensada para el título 1)
Fondo `#09090b`. Una lupa sobre el último punto de una curva roja `#e11d2a` que queda justo bajo una línea blanca «90,000»; en la lupa, «89,358». Texto en Segoe UI Black: «POR POCO» (dos palabras, sin repetir los títulos). Logo ATLAS abajo a la derecha.

---

## VIDEO LARGO (16:9, ≈ 4:37 min)

**[0:00 — Gancho]** (pantalla: curva con zoom al último punto)
La cuenta cayó a 89,358. El piso era 90,000. Con un φ de 0.90 habría sobrevivido; con 0.95, muere. Un resultado que depende de un detalle que no se conoce con exactitud.
BOCETO: curva real que se acerca a la raya de 90,000; zoom al último punto «89,358» con sello ✕; fecha «11-nov-2016». Golpe de bajo en la ✕. kb=in.

**[0:16 — Qué es este experimento]** (pantalla: rótulo con el número y el nombre)
Este es el experimento #33 de ATLAS Lab: Activación temprana del filtro. Todos los resultados están en la página del experimento. Aquí me fijo en un caso: la cuenta base, que se cierra por muy poco.
BOCETO: rótulo «EXPERIMENTO #33 · Activación temprana del filtro» sobre velas con opacidad 0.12. kb=out.

**[0:31 — La cuenta base]** (pantalla: curva real hasta la quiebra)
La base es el bot con apalancamiento ×2 y un filtro de pánico que se activa con el VIX sobre 28 y el crédito bajo su media de 40 días, con una prop firm, la empresa que presta la cuenta y la cierra si pierdes demasiado. Parte de 100,000, toca su máximo de 102,580 el 25 de febrero de 2015 y el 11 de noviembre de 2016, el día 659, cae a 89,358. Retorno de menos 10.6%, caída máxima de menos 12.9% y Sharpe de menos 0.58.
BOCETO: curva real de `series/…v33.json` con el máximo «102,580 · 25-feb-2015» y la ✕ en «89,358 · 11-nov-2016»; tarjetas con tick (−10.6% · −12.9% · −0.58).

**[1:14 — Qué es φ]** (pantalla: día de disparo)
Pero hay un número escondido. El día en que se dispara el filtro, el bot ya está dentro y se come parte de la caída. φ, la letra griega fi, es la fracción de ese movimiento que se come. Si es 1, no esquiva nada; si es 0.5, esquiva la mitad. Para esta base, φ medido con datos horarios es 0.94, con un intervalo de confianza del 95% entre 0.87 y 1.00.
BOCETO: medidor de φ con la aguja en 0.94 y el arco sombreado de 0.87 a 1.00.

**[1:46 — El umbral invisible]** (pantalla: tres valores de φ)
Ahora la sensibilidad. Si φ fuera constante en 0.90, el mismo bot ×2 sobreviviría, con un Sharpe de 0.08 en 2014–2024 y de 0.13 en 2007–2013. Con 0.95, muere. El φ medido en 2014–2024 para la base es de 0.95. Es decir, el resultado está justo en el borde: entre 0.90 y 0.95 pasa de vivir a morir.
BOCETO: tres medidores: φ = 0.90 («sobrevive · Sharpe 0.08 / 0.13» verde), φ = 0.94 («medido» ámbar) y φ = 0.95 («muere» rojo).

**[2:16 — Qué significa «por poco»]** (pantalla: dos lecturas)
Hay dos lecturas posibles. Una: «casi sobrevive, así que con un ajuste pequeño funcionaría». Otra: «el resultado no es robusto». La segunda es la honesta. Si el intervalo de φ incluye valores a ambos lados del punto crítico, no sabemos de qué lado está. Y una estrategia no puede depender de un margen que no se conoce.
BOCETO: dos tarjetas: «casi sobrevive» (tachada) y «no es robusto: el intervalo cruza el punto crítico» (resaltada); el arco 0.87–1.00 cruzando el 0.90–0.95.

**[2:39 — Si pudiera esquivar la mitad]** (pantalla: tarjeta gris)
Si el bot pudiera esquivar la mitad del día de pánico, φ de 0.5, el Sharpe sería 0.40. Pero eso exige salir al abrir Wall Street sabiendo ya cómo cerrará el día, y los datos horarios no lo respaldan. Esa tarjeta queda en gris.
BOCETO: tarjeta gris «φ = 0.5 → Sharpe 0.40 · no respaldado por los datos».

**[2:58 — ¿Y sin las reglas?]** (pantalla: línea hipotética)
Podrías pensar que el problema son las reglas. Sin ellas, la misma base ×2 terminaría 2014–2024 en 99,025, o sea menos 1.0%, con un Sharpe de 0.02 y una caída máxima de menos 16.1%. Es una línea hipotética: en la realidad la cuenta se cierra ese día. Comprar y esperar la misma cesta dio más 58.9% con un Sharpe de 0.47.
BOCETO: línea punteada «Sin reglas de prop firm» que termina en 99,025 sobre la gris de comprar y esperar; tarjetas «−1.0% · 0.02 · −16.1%» y «+58.9% · 0.47».

**[3:27 — Con tu capital]** (pantalla: tarjeta de capital $100,000)
Con 100,000 dólares simulados, la cuenta se cierra con menos 10,642. Comprar y esperar la misma cesta, en las mismas fechas, 2014 a 2016: menos 5,766. Con tu capital verías esa cuenta cerrada.
BOCETO: tarjeta «Con tu capital» del sitio: −$10,642 contra −$5,766, «2014–2016, hasta que se cierra la cuenta».

**[3:43 — La regla de lectura]** (pantalla: pregunta)
Una regla para leer cualquier «casi»: pregunta de qué depende el casi. Aquí depende de φ, y φ tiene un intervalo que cruza el punto crítico. Un «por poco» así no es una promesa; es una señal de que el resultado no es robusto.
BOCETO: pregunta «¿de qué depende el casi?» con el medidor de φ y su intervalo.

**[4:01 — Ficha del experimento #33]** (pantalla: tarjeta con la URL)
Ficha del experimento #33, Activación temprana del filtro. Estado: murió. Cifra clave: la base cae a 89,358 frente al piso de 90,000 el 11 de noviembre de 2016, con Sharpe de menos 0.58. Filtro que decidió: ninguna de las 6 combinaciones sobrevive con ×2 en 2014–2024. Lección: un «por poco» que depende de un supuesto no es robusto. Revísalo completo en atlas-lab-one.vercel.app/e/33. Contenido educativo, no es asesoría financiera. El trading no se promete: se prueba.
BOCETO: tarjeta final con cuatro líneas (estado · cifra clave · filtro que decidió · lección) y la URL «atlas-lab-one.vercel.app/e/33» en grande; logo ATLAS; fondo de velas con opacidad 0.12.

---

## SHORT (9:16, ≈ 47 s)

**[0-3 s]** «La cuenta cayó a 89,358. El piso: 90,000.»
BOCETO: curva que se queda justo bajo la raya; zoom a «89,358»; golpe de bajo + sacudida.
**[3-11 s]** «El 11 de noviembre de 2016 se cerró el bot ×2. Murió por poco, pero por poco no cuenta.»
BOCETO: la ✕ sobre la fecha. kb=out.
**[11-19 s]** «Con fi de 0.90 habría sobrevivido. Con 0.95, muere. El fi medido: 0.94, con intervalo entre 0.87 y 1.00.»
BOCETO: tres medidores: verde 0.90, ámbar 0.94, rojo 0.95; arco de 0.87 a 1.00.
**[19-27 s]** «El resultado depende de un número que no se conoce con exactitud. No es robusto.»
BOCETO: el arco cruzando el punto crítico; sello «no es robusto».
**[27-35 s]** «Si esquivara la mitad, Sharpe 0.40. Pero eso exige adivinar el cierre del día.»
BOCETO: tarjeta gris «φ = 0.5 · 0.40 · no respaldado».
**[35-43 s]** «Experimento 33 completo en el enlace. El video completo está en el canal. No es asesoría financiera. El trading no se promete: se prueba.»
BOCETO: tarjeta con «experimento #33 completo en el enlace» y la URL corta; logo ATLAS.
**[43-47 s]** «¿De qué depende tu casi?»
BOCETO: la lupa del inicio; corte directo al inicio (loop).

---

## Descripción de YouTube (video largo)
https://atlas-lab-one.vercel.app/e/33?utm_source=youtube&utm_medium=video&utm_campaign=exp033-t3
Ficha del experimento #33 (Activación temprana del filtro): murió · la base ×2 cae a 89,358 frente al piso de 90,000 el 11-nov-2016 (Sharpe −0.58) · con φ ≤ 0.90 sobreviviría (Sharpe 0.08); φ medido 0.94 (IC 95%: 0.87–1.00).
Por qué un «por poco» que depende de un supuesto no es un resultado robusto.
Contenido educativo. No es asesoría financiera ni recomendación de inversión.

## Descripción del Short
https://atlas-lab-one.vercel.app/e/33?utm_source=youtube&utm_medium=short&utm_campaign=exp033-t3
Ficha del experimento #33: murió · la base cae a 89,358 con el piso en 90,000. Video completo en el canal. Contenido educativo, no es asesoría financiera.

## Capítulos
0:00 Gancho · 0:16 Qué es este experimento · 0:31 La cuenta base · 1:14 Qué es φ · 1:46 El umbral invisible · 2:16 Qué significa «por poco» · 2:39 Si pudiera esquivar la mitad · 2:58 ¿Y sin las reglas? · 3:27 Con tu capital · 3:43 La regla de lectura · 4:01 Ficha del experimento #33

## Etiquetas
robustez, sensibilidad, φ, VIX, bot de trading, backtest, Sharpe ratio, prop firm, intervalo de confianza, gestión de riesgo, trading con datos, atlas lab

## Rúbrica (autoevaluación, 1–5)
| Pieza | hook_0_3s | ritmo | promesa_cumplida | potencial_loop | claridad_no_traders | honestidad_atlas | audio | cta | Promedio |
|---|---|---|---|---|---|---|---|---|---|
| Largo | 5 | 4 | 5 | 4 | 4 | 5 | 4 | 4 | 4.38 |
| Short | 5 | 4 | 5 | 4 | 4 | 5 | 4 | 4 | 4.38 |

Hook ≥ 4 ✓ · honestidad 5 ✓. Punto débil: «φ» exige un bloque de explicación; en el Short se reduce a «fi» y a tres medidores. Los valores de φ (0.90, 0.94, 0.95) y del intervalo son los que publica el experimento.

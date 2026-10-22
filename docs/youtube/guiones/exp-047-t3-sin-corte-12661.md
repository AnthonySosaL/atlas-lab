# Experimento #47 — Arbitraje estadístico (residuo PCA) · Tema 3: la línea sin corte, de $102,404 a $12,661

Estado del guion: **BORRADOR — pendiente de aprobación**
Tema 3 de 3 del experimento #47. Qué aporta frente a los otros temas: el tema 1 cuenta la idea y el resultado; el tema 2 desarma la técnica; este mira la letra pequeña de la prop firm y la línea hipotética «sin reglas», año por año, para entender qué hace un corte automático.
Estado del experimento: **murió** (No sirvió) · Serie: sin asignar en `plan-series.md`; propuesta: B ampliada, tras #46 y antes de #48 · Relacionado: #46, #48, #49, #50
Datos usados: `experiments.json` (v=47: kpis, metrics, params_view, period, capital.note), `exp_details.json` (v47: algo, filters), `series/20260610_142756_stat-arb-pca-residual-v47.json` (curva 0 = estrategia; curva 1 = «sin reglas de prop firm»; curva 2 = sin estrategia; picos, valores de fin de año y fechas derivados de las curvas) y la tabla «Con tu capital» (`docs/youtube/*-capital.md`) (fila #47).

## Títulos (3 opciones)
1. Sin el corte de la prop firm: $12,661 de cada $100,000
2. Stat-arb: la cuenta cortada en $89,924 y la que no
3. Se cortó en −10.1%. Sin corte, la caída llegó a −90.8%

## Miniatura (1280×720)
Fondo `#09090b`. Dos líneas que salen del mismo punto: una blanca corta que se detiene con un ✕ rojo, y una roja punteada que sigue cayendo hasta el borde inferior. Texto enorme: "$12,661" en rojo `#e11d2a`. Texto pequeño blanco: "SIN CORTE". Logo ATLAS esquina superior derecha. (No repite el título 1.)

---

## VIDEO LARGO (16:9, ≈ 5 min)

**[0:00 — Gancho]** (pantalla: dos líneas que salen del mismo punto; una se corta y otra sigue cayendo)
Esta cuenta simulada se cortó en $89,924 por las reglas de una prop firm. Parece una pérdida. Pero hay una segunda línea en los datos, la de la misma estrategia sin el corte: llegó a tocar $9,404 y terminó 2024 en $12,661 de cada $100,000.
> BOCETO: curva 0 blanca que se detiene con ✕ en $89,924; curva 1 roja punteada que sigue cayendo hasta "$12,661" con contador y sacudida de pantalla. Rótulo "hipotética".

**[0:20 — De qué experimento hablamos]** (pantalla: rótulo con el número y el nombre)
Este es el experimento #47 de ATLAS Lab: Arbitraje estadístico (residuo PCA). Todos los resultados están en la página del experimento.
> BOCETO: rótulo "EXPERIMENTO #47 · Arbitraje estadístico (residuo PCA)" con whoosh.

**[0:30 — La estrategia en 30 segundos]** (pantalla: 15 líneas y un residuo que se estira)
Arbitraje estadístico: le restas a cada uno de 15 activos el movimiento común del grupo y te quedas con su residuo. Si el z-score del residuo de 60 días pasa de 1.5, compras el hundido y vendes el estirado. Apalancamiento 2, corte automático del −3%, deslizamiento de 0.2% y posiciones decididas un día antes. El factor común es una aproximación, no un PCA completo.
> BOCETO: 15 líneas grises y una verde que se desvía; caja `params_view` (x2 · beta 250 d · residuo 60 d · |z| > 1.5 · kill-switch −3% · deslizamiento 0.2%).

**[1:00 — Qué es una prop firm y por qué corta]** (pantalla: dos reglas)
Una prop firm es una empresa que financia traders y les impone reglas. Aquí se simulan dos: caída máxima de 10% y pérdida de 5% en un día. Cuando la cuenta toca el límite, se cierra. Es un freno de emergencia. La curva termina antes de tiempo y con pérdida: no representa una cartera que siga operando, y la ficha lo dice así.
> BOCETO: dos medidores, "caída máxima 10%" y "pérdida diaria 5%"; la aguja del primero llega al tope y aparece "cuenta cerrada".

**[1:30 — La cuenta real]** (pantalla: curva 0 con las fechas)
En la cuenta real, la curva está plana en $100,000 durante 748 días. El 24 de febrero de 2017 se mueve por primera vez. El 2 de marzo toca su máximo, $102,404. Después hay días de −3.20%, que son el corte de −3% más el deslizamiento de 0.2%: el 10 de marzo, el 14 de marzo y el 20 de junio. El 23 de julio de 2017, a los 876 días, la cuenta se cierra en $89,924. El drawdown máximo, la mayor caída desde un pico, fue de −12.2%.
> BOCETO: curva 0: tramo plano en gris (748 días), subida corta a $102,404, tres escalones rojos de −3.20% con tick y flash, sello ✕ en el 23-jul-2017.

**[2:10 — La línea sin corte]** (pantalla: curva 1, año por año)
Ahora la línea hipotética. Es la misma regla, dejada correr hasta fin de 2024. Fin de 2017: $95,805. Fin de 2018: $70,560. Fin de 2019: $80,076. Y en 2020, $19,290. Después, $17,545 en 2021, $10,869 en 2022, $9,886 en 2023 y $12,661 en 2024. Su punto más bajo fue $9,404, el 16 de agosto de 2022. Desde el máximo de $102,404, eso es una caída de −90.8%.
> BOCETO: curva 1 dibujándose con marcadores de fin de año ($95,805 · $70,560 · $80,076 · $19,290 · $17,545 · $10,869 · $9,886 · $12,661); el valle de $9,404 se marca con un círculo rojo.

**[2:40 — Qué enseña esta línea (y qué no)]** (pantalla: dos columnas)
Qué enseña: que un corte automático hace su trabajo, protege de una caída de −90.8%, y que la cuenta real, aun con pérdida, se cerró en −10.1%. Qué no enseña: no es una predicción ni una cartera real, porque la cuenta se cierra ese día; la línea tampoco incluye spread por rotación, así que con más costos no iría mejor. Y tampoco prueba que el corte sea «bueno»: te saca del juego, sea cual sea lo que venga después.
> BOCETO: columna "Qué enseña" (corte = freno, −10.1% frente a −90.8%) y columna "Qué no enseña" (no es predicción · no es cartera real · sin spread por rotación) con ✕.

**[3:15 — Comprar y esperar en las mismas fechas]** (pantalla: curva 2)
Para tener un punto de referencia, comprar y esperar la cesta sin estrategia, de 2014 a 2024, terminó en $158,879 de cada $100,000. Dentro de la ventana de la cuenta real, entre 2014 y julio de 2017, esa referencia quedó prácticamente plana: −$99. La estrategia perdió en un periodo en que no hacer nada casi no perdía.
> BOCETO: curva 2 gris subiendo hasta "$158,879" al fondo; luego zoom a la ventana de la cuenta real con la cifra "−$99" en gris. Aviso: "cestas de 15 activos (8 en 2007–2013)".

**[3:45 — Con tu capital]** (pantalla: tarjeta "Con tu capital")
Con $100,000, la cuenta simulada termina en −$10,076. Comprar y esperar, en las mismas fechas, −$99. Es lo que pasó en la simulación, no una promesa.
> BOCETO: tarjeta de capital con la cifra roja (−$10,076) y la fila gris (−$99).

**[3:55 — Dos lecciones sobre los cortes]** (pantalla: dos tarjetas)
Una: cuando veas una cuenta cortada, pregunta cuánto habría perdido sin el corte; aquí, mucho más. Dos: cuando veas un backtest que sigue y sigue sin ningún corte, pregunta si alguna regla real lo habría cerrado antes. La curva de una estrategia y la vida de una cuenta no son lo mismo.
> BOCETO: dos tarjetas con whoosh; en la primera, las dos curvas del inicio; en la segunda, una línea de backtest con un ✕ que aparece en el punto de un posible corte.

**[4:20 — Ficha del experimento #47]** (pantalla: tarjeta con la URL)
Ficha del experimento 47. Estado: murió, no sirvió. Cifra clave: −10.1% con Sharpe de −0.58 en 2014–2024 y −0.69 en 2007–2013, y la cuenta cortada a los 876 días; sin el corte, $12,661 de cada $100,000 al final de 2024. Filtro que decidió: sobrevivir en todos los periodos, que no se cumple. Lección: el corte limita el daño pero no arregla la estrategia. Revísalo completo en atlas-lab-one.vercel.app/e/47.
> BOCETO: tarjeta "FICHA · EXPERIMENTO #47" con Estado · Cifra clave · Filtro que decidió · Lección, y la URL `atlas-lab-one.vercel.app/e/47` en grande.

**[4:50 — Cierre]**
Contenido educativo, no es asesoría financiera. El trading no se promete: se prueba.
> BOCETO: fundido a la frase de marca en blanco sobre negro; logo ATLAS.

---

## SHORT (9:16, ≈ 43 s) — "Sin corte"
Título del Short: Esta cuenta se cortó. Sin corte: $12,661 #Shorts

**[0-3 s]** "La cuenta se cortó en $89,924. Sin el corte, terminó en $12,661."
> BOCETO: B-roll vertical de bolsa con overlay 0.6; dos líneas que salen del mismo punto, una se corta y otra cae; texto gigante "$12,661" en rojo; golpe de bajo y sacudida.

**[3-14 s]** "Es arbitraje estadístico, la técnica de los fondos, con quince activos. La prop firm, una empresa que financia traders, cierra la cuenta si cae 10%."
> BOCETO: 15 líneas con una que se desvía; medidor de caída máxima hasta 10%; "cuenta cerrada". Ken Burns hacia dentro.

**[14-27 s]** "La cuenta real se cerró el 23 de julio de 2017 en $89,924. La misma regla sin corte: $19,290 en 2020 y $12,661 al final de 2024, de cada cien mil."
> BOCETO: curva 0 y curva 1 (punteada) dibujándose; marcadores $89,924, $19,290 y $12,661 con tick; flash blanco al cambio de escena.

**[27-36 s]** "Es hipotética, porque la cuenta real se cierra ese día. Pero enseña qué hace un corte: limita el daño, no arregla la estrategia."
> BOCETO: rótulo "hipotética" sobre la curva punteada; frase en la zona segura del centro.

**[36-43 s]** "Cuenta cortada: menos 10.1%. Sin corte: casi todo. Experimento 47 completo en el enlace; el video completo está en el canal. No es asesoría financiera."
> BOCETO: vuelven las dos líneas del primer cuadro y "$12,661" (loop); abajo "Experimento #47 completo en el enlace"; texto pequeño "El trading no se promete: se prueba."

---

## Descripción (YouTube) — video largo
https://atlas-lab-one.vercel.app/e/47?utm_source=youtube&utm_medium=video&utm_campaign=exp047-t3
Ficha del experimento #47 (Arbitraje estadístico, residuo PCA): murió (No sirvió) · retorno −10.1% · Sharpe −0.58 (2014–2024) y −0.69 (2007–2013) · cuenta cortada a los 876 días; la línea hipotética sin corte termina 2024 en $12,661 de cada $100,000.
Miro qué es una prop firm, por qué corta la cuenta y qué habría pasado sin ese corte, año por año.
Contenido educativo. No es asesoría financiera ni recomendación de inversión.

## Descripción (YouTube) — Short
https://atlas-lab-one.vercel.app/e/47?utm_source=youtube&utm_medium=short&utm_campaign=exp047-t3
Experimento #47 (Arbitraje estadístico, residuo PCA): murió · −10.1% · cuenta cortada a los 876 días · sin corte (hipotética), $12,661 de cada $100,000. Video completo en el canal. No es asesoría financiera.

## Capítulos
0:00 Gancho · 0:20 De qué experimento hablamos · 0:30 La estrategia en 30 segundos · 1:00 Qué es una prop firm y por qué corta · 1:30 La cuenta real · 2:10 La línea sin corte · 2:40 Qué enseña esta línea (y qué no) · 3:15 Comprar y esperar en las mismas fechas · 3:45 Con tu capital · 3:55 Dos lecciones sobre los cortes · 4:20 Ficha del experimento #47 · 4:50 Cierre

## Etiquetas
prop firm, fondeo, kill-switch, drawdown, arbitraje estadístico, stat arb, curva de capital, backtest, gestión de riesgo, trading con datos, ATLAS Lab, estrategia de trading

## Rúbrica (autoevaluación, escala 1-5)
| Criterio | Nota | Por qué |
|---|---|---|
| hook_0_3s | 5 | Contraste «cortada en 89 mil / sin corte, 12 mil» con las curvas en pantalla |
| ritmo | 4 | La curva cambia de año cada 2–3 s; el bloque de la prop firm es el más conceptual |
| promesa_cumplida | 5 | Promete la línea sin corte y la muestra año por año |
| potencial_loop | 4 | El final repite las dos líneas y el «$12,661» del primer cuadro |
| claridad_no_traders | 4 | Explica prop firm, kill-switch, drawdown y hipotético |
| honestidad_atlas | 5 | Rotula la línea como hipotética, aclara que no incluye spread por rotación y que el corte no valida la estrategia |
| audio | 4 | Voz por clonar; un golpe de bajo |
| cta | 4 | Una petición (la ficha en la web) y remite al video completo |
Promedio: **4.38** (≥ 4.0). Hook del Short 5 (≥ 4) y honestidad 5: no descalificado.

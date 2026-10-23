# Experimento #90 — Tema 2: beta contra alfa (comprar y esperar gana el doble)

Tema 2 de 4 del experimento #90 · Qué aporta frente a los otros temas: es el Short «beta contra alfa» que el plan reservaba para este experimento. Explica desde cero qué es beta y qué es alfa con las cifras del #90, da tres preguntas para leer cualquier «+X% al año» y conecta con la beta gestionada del #80. El tema 1 cuenta el resultado completo en índices; el tema 3 compara la misma regla en dos mercados; el tema 4 trata la transparencia de las curvas reconstruidas.
Estado del guion: **BORRADOR — pendiente de aprobación**
Estado del experimento: **parcial** (la tendencia sí gana dinero en índices, +$10.9k a +$14.8k sobre $10k, pero ninguna estrategia supera a comprar y esperar, +$29,368) · Serie A — «Probé la estrategia de TikTok» (plan-series.md) · 1 largo + 1 Short
Datos usados: `experiments.json` (v=90: kpis, metrics, chart, verdict, analysis, notes, capital, period) y, para el vínculo con el #80, las cifras de su ficha (+11.2% contra +11.0%, caída −26% contra −31%); `exp_details.json` (extra-v90: algo, filters; sin script original), `series/extra-v90.json` (7 curvas: 3 tendencias, comprar y esperar y 3 setups de TikTok), tabla «Con tu capital» de `docs/youtube`.
Producción (CLAUDE.md del canal): b-roll real detrás de cada escena con overlay oscuro 0.6, Ken Burns alternando in/out, subtítulos karaoke en MAYÚSCULAS con palabras clave en rojo, un dato visual por escena, golpe de bajo + sacudida solo en 1–2 momentos. Colores: rojo `#e11d2a`, verde `#22c55e`, fondo `#09090b`. Cifras en dígitos aquí; en el campo `tts` del JSON, en palabras.

## Títulos (3 opciones)
1. Beta contra alfa: la tendencia ganó +$14,814 en índices y comprar y esperar, el doble
2. ¿Beta o habilidad? 0 de 6 estrategias le ganan a comprar y esperar en índices
3. Cómo leer un «+X% al año»: la trampa de la beta, con datos de 2012 a 2024

## Miniatura (pensada para el título 1)
Fondo `#09090b`. Dos cajas con letras grandes: «β» en blanco con «el mercado solo» y «α» en verde con «ganarle al mercado», esta última vacía con un «0». Texto grande: «¿HABILIDAD?» (1 palabra, sin repetir el título). Logo ATLAS arriba a la derecha.

---

## VIDEO LARGO (16:9, ≈ 6.5 min)

**[0:00 — Gancho]** (pantalla: dos columnas, una el doble que la otra)
En el S&P 500, el Nasdaq 100, el DAX y el FTSE 100, una estrategia de tendencia ganó +14,814 dólares sobre 10,000. Comprar y esperar ganó +29,368, el doble. Lo primero tiene un nombre: beta.
BOCETO: dos columnas, la verde corta (+$14,814) y la blanca el doble de alta (+$29,368), con la palabra «beta» iluminándose sobre la blanca. kb=in.

**[0:15 — Qué es este experimento]** (pantalla: rótulo con el número y el nombre)
Este es el experimento #90 de ATLAS Lab: ¿Cambia en índices? Nasdaq, S&P 500, DAX y FTSE. Todos los resultados están en la página del experimento.
BOCETO: rótulo en rojo y blanco «EXPERIMENTO #90» con el nombre debajo, sobre las columnas atenuadas (overlay 0.6). Whoosh corto. kb=out.

**[0:25 — Beta y alfa, en dos frases]** (pantalla: dos definiciones)
Beta es lo que gana el mercado solo, por el simple hecho de estar comprado. Si los índices suben, cualquiera que esté comprado gana, sin habilidad alguna. Alfa es ganarle a eso: hacer algo que supere a comprar y esperar. Para medirlo, la vara práctica es esta: ¿superas a comprar y esperar los mismos índices en el mismo periodo?
BOCETO: dos cajas: «Beta = lo que gana el mercado solo» (gris) y «Alfa = ganarle a comprar y esperar» (verde). Línea guía de referencia que atraviesa la pantalla: «comprar y esperar». kb=in.

**[1:15 — La prueba]** (pantalla: siete curvas)
Probé seis estrategias en índices, de 2012 a 2024, con 10,000 dólares. Tres tendencias clásicas: precio sobre la media de 200 días, cruce de EMAs 50/200 y momentum de 252 días. Y los núcleos de tres TikToks: la ruptura del máximo de 5 días, la barrida del mínimo del día previo y la media de 200 días con volumen doble. Una transparencia: el código original no se conserva; las curvas se rehicieron con parámetros reconstruidos que reproducen al dólar las cifras publicadas, así que los periodos y los costos no se pueden verificar.
BOCETO: siete etiquetas que forman la leyenda del gráfico; cartel ámbar «Parámetros reconstruidos: reproducen las cifras publicadas». kb=out.

**[2:10 — Resultados]** (pantalla: tabla)
Comprar y esperar, con un Sharpe de 0.67, que es la ganancia por unidad de riesgo, gana +29,368. Las tres tendencias ganan dinero: +14,814, +11,854 y +10,878. Los tres setups de los TikToks: −424, +353 y +707. Cero de seis superan a comprar y esperar.
| Con $10,000, 2012–2024, 4 índices | Resultado |
|---|---|
| Comprar y esperar | +$29,368 (Sharpe 0.67) |
| Tendencia: cruce de EMA 50/200 | +$14,814 |
| Tendencia: momentum de 252 días | +$11,854 |
| Tendencia: precio sobre la media de 200 días | +$10,878 |
| TikTok: media de 200 días + volumen doble | +$707 |
| TikTok: barrida del mínimo del día previo | +$353 |
| TikTok: ruptura del máximo de 5 días | −$424 |
BOCETO: las siete curvas reales de `series/extra-v90.json`; la blanca de comprar y esperar queda arriba, las verdes debajo y las tres de TikTok casi planas. Cartel «0 estrategias superan a comprar y esperar».

**[3:10 — Cuánto del mercado capturan]** (pantalla: porcentaje de la columna blanca)
Mira cuánto del mercado capturan. La mejor tendencia gana algo más de la mitad de lo que ganó comprar y esperar. La peor de las tres, poco más de un tercio. Mi lectura: sale del mercado cuando la tendencia se rompe, y mientras está fuera, no gana lo que sube el índice. Pero no mide el alfa: para tener alfa, tendría que ganar más que comprar y esperar, y ninguna lo logra.
BOCETO: la columna blanca de 29,368 con las verdes superpuestas en distintas alturas: 14,814 a poco más de la mitad; 10,878 a poco más de un tercio. Etiqueta gris «lectura, no medida: tiempo fuera del mercado» junto a la explicación. kb=out.

**[3:55 — La trampa del «+X% al año»]** (pantalla: tres preguntas)
Aquí está la trampa. Cualquiera que opere índices y se ponga comprado puede mostrarte un «+X% al año», porque los índices subieron. Eso es beta. Antes de creer un «+X% al año», haz tres preguntas. Una: ¿en qué mercado y en qué periodo? Dos: ¿cuánto ganó comprar y esperar ese mismo mercado en ese mismo periodo? Tres: ¿con cuánta caída? Si la respuesta a la segunda es «más», no hay habilidad que mostrar.
BOCETO: tres casillas que se marcan; la segunda ilumina la columna blanca de referencia. kb=in.

**[4:50 — La beta gestionada (experimento 80)]** (pantalla: tarjeta del #80)
¿Significa que estar comprado en índices no sirve? No. Significa que es beta, y que la pregunta honesta es cómo gestionarla. En el experimento 80, una exposición por tendencia creció +11.2% al año contra +11.0% de comprar y esperar, con una caída máxima de −26% contra −31%. Es un plan de ingreso sensato, pero beta gestionada, no alfa. No hay atajo: el camino realista es estar comprado y controlar el riesgo.
BOCETO: tarjeta del #80 con «+11.2% contra +11.0%» y «−26% contra −31%»; nota ámbar: «#80: hasta 2x, sin costos ni financiamiento». kb=out.

**[5:30 — Con tu capital]** (pantalla: tarjeta de capital con advertencia)
Con 10,000 dólares, la mejor tendencia gana +14,814 y comprar y esperar, +29,368. Con 100,000 dólares, esa escala es +148,140 contra +293,680; la ruptura sería −4,240, la barrida +3,530 y el volumen +7,070. Recuerda la advertencia: las curvas usan parámetros reconstruidos que reproducen las cifras publicadas.
BOCETO: barras del `chart` de la ficha («Ganancia 2012–2024 escalada a $100,000»): 293,680, 148,140, 108,780, 7,070, 3,530 y −4,240. Cartel ámbar con `capital.note`.

**[6:00 — Conclusión]**
Resultado parcial. Con la vara de comprar y esperar, el alfa medido es cero. Lo que ganan las tendencias es beta: el índice subió. Ganar dinero no es lo mismo que tener ventaja. El trading no se promete: se prueba.

**[6:20 — Ficha del experimento #90]** (pantalla: tarjeta con la ficha y la URL)
Ficha del experimento #90. Estado: parcial. Cifra clave: la mejor tendencia gana +14,814 sobre 10,000 en índices y comprar y esperar, +29,368, el doble. Filtro que decidió: 0 estrategias superan a comprar y esperar. Lección: lo que gana el mercado solo es beta, no habilidad. Revísalo completo en atlas-lab-one.vercel.app/e/90.
BOCETO: tarjeta con el número «#90», el sello «PARCIAL» en ámbar, tres líneas (cifra clave, filtro que decidió, lección) y la URL `atlas-lab-one.vercel.app/e/90` grande abajo. kb=in.

**[6:40 — Cierre]**
Todos los datos en atlas-lab-one.vercel.app, experimento 90. Contenido educativo, no es asesoría financiera.

---

## SHORT (9:16, ≈ 50 s)

**[0-3 s]** «¿Beta o alfa? Una estrategia ganó +14,814 en índices. Comprar y esperar ganó el doble: +29,368.»
BOCETO: dos columnas, la verde corta y la blanca el doble de alta, sobre b-roll de pantallas de índices (kb=in), overlay 0.6.

**[3-15 s]** «Beta es lo que gana el mercado solo. Alfa es ganarle a comprar y esperar.»
BOCETO: dos cajas con «β» y «α» que se iluminan una a una (kb=out); ticker arriba.

**[15-30 s]** «Probé tres tendencias clásicas y tres setups de TikTok en S&P 500, Nasdaq 100, DAX y FTSE 100, de 2012 a 2024, con 10,000 dólares. Cero superan a comprar y esperar.»
BOCETO: las seis curvas bajo la blanca de referencia; contador «0 / 6» rojo con golpe de bajo + sacudida.

**[30-43 s]** «Cualquiera que opere índices y esté comprado puede mostrarte un más X por ciento. El índice subió. Eso es beta.»
BOCETO: tarjeta «+X% al año» que se tacha y se transforma en «índice subió».

**[43-50 s]** «El video completo está en el canal, y el experimento #90 completo, en el enlace. Alfa medido: cero. El doble lo ganó comprar y esperar.»
BOCETO: texto final «Video completo en el canal · Experimento #90 completo en el enlace» + pequeño «No es asesoría financiera · El trading no se promete: se prueba». Loop: «el doble» responde al hook. Nota en la descripción: curvas con parámetros reconstruidos.

---

## Descripción de YouTube (video largo)
https://atlas-lab-one.vercel.app/e/90?utm_source=youtube&utm_medium=video&utm_campaign=exp090-t2
Ficha del experimento #90: parcial · con $10,000 en S&P 500, Nasdaq 100, DAX y FTSE 100 (2012–2024): tendencia +$10,878 a +$14,814, comprar y esperar +$29,368 (Sharpe 0.67), setups de TikTok −$424 a +$707 · 0 estrategias superan a comprar y esperar.
Explico qué es beta (lo que gana el mercado solo) y qué es alfa (ganarle a comprar y esperar), con tres preguntas para leer cualquier «+X% al año». Las curvas usan parámetros reconstruidos que reproducen las cifras publicadas.
Contenido educativo. No es asesoría financiera ni recomendación de inversión.

## Descripción de YouTube (Short)
https://atlas-lab-one.vercel.app/e/90?utm_source=youtube&utm_medium=short&utm_campaign=exp090-t2
Ficha del experimento #90: parcial · la mejor tendencia +$14,814 sobre $10,000, comprar y esperar +$29,368 · 0 de 6 estrategias le ganan. Curvas con parámetros reconstruidos que reproducen las cifras publicadas.
Contenido educativo. No es asesoría financiera.

## Capítulos
0:00 Gancho · 0:15 Qué es este experimento · 0:25 Beta y alfa · 1:15 La prueba · 2:10 Resultados · 3:10 Cuánto capturan · 3:55 La trampa del «+X% al año» · 4:50 Beta gestionada (#80) · 5:30 Con tu capital · 6:00 Conclusión · 6:20 Ficha del experimento

## Etiquetas
beta y alfa, comprar y mantener, alfa en trading, trading en índices, s&p 500, nasdaq 100, dax, ftse 100, seguimiento de tendencia, estrategias de tiktok, atlas lab, trading con datos

## Rúbrica (autoevaluación, 1–5)
| Pieza | hook_0_3s | ritmo | promesa_cumplida | potencial_loop | claridad_no_traders | honestidad_atlas | audio | cta | Promedio |
|---|---|---|---|---|---|---|---|---|---|
| Largo | 5 | 4 | 5 | 4 | 5 | 5 | 4 | 4 | 4.5 |
| Short | 5 | 4 | 5 | 5 | 5 | 5 | 4 | 4 | 4.6 |

Hook ≥ 4 ✓ · honestidad 5 ✓. Punto débil: no hay script original, así que periodos y costos no son verificables; el cartel «parámetros reconstruidos» debe aparecer junto a las curvas y el Short lo deja en la descripción. La definición práctica de alfa («ganarle a comprar y esperar») es la del experimento, no la definición académica completa. La lectura sobre el tiempo fuera del mercado está rotulada «no medida».

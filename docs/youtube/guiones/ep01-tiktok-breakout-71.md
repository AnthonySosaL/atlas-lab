# EP01 — Experimento #85: "TikTok 1 — Breakout del rango previo + retroceso"

Estado del guion: **BORRADOR — pendiente de aprobación**
Datos: `experiments.json` (v=85) y `exp_details.json`. Relacionado: #90 (índices).

## Título (opciones)
1. Probé la estrategia de TikTok del "71% de aciertos": esto pasó
2. ¿Funciona el breakout del rango del día anterior? Lo probé con datos
3. La estrategia de TikTok del 71%… puesta a prueba con 18 años de datos

## Miniatura
Fondo negro, "71%" grande tachado en rojo, texto "LO PROBÉ", logo ATLAS esquina.

---

## VIDEO LARGO (≈ 8 min)

**[0:00 — Gancho]** (pantalla: "71% de aciertos" en grande)
En TikTok circula una estrategia que promete un 71% de aciertos. Romper el rango del día anterior, esperar el retroceso y entrar. La puse a prueba con datos de 2007 a 2024 y con los mismos cinco filtros que uso para todo en ATLAS Lab. Spoiler: no es lo que parece.

**[0:30 — La estrategia, tal como la cuentan]** (pantalla: dibujo del rango previo, alto/bajo marcados)
La versión del video (atribuida a Carl Ericsson / ProRealAlgos) es así:
1. Marcas el máximo y el mínimo del día anterior.
2. En 15 minutos esperas un cierre claro fuera de ese rango.
3. Esperas que el precio vuelva a tocar el nivel.
4. En 5 minutos buscas una vela envolvente o un martillo.
5. Entras al romper esa vela, stop debajo del patrón y objetivo 1 a 3.

**[1:45 — Qué probé exactamente (y qué no)]** (pantalla: texto)
Seamos honestos: la parte del retroceso y de la vela en 5 minutos es discrecional, depende de cómo la mire cada persona, y no se puede automatizar. Lo que sí se puede probar es su núcleo: comprar cuando el precio cierra por encima del máximo de los días anteriores. Si el núcleo no tiene ventaja, la decoración encima difícilmente la crea.

**[2:30 — Cómo lo probé]** (pantalla: esquema de los 5 filtros)
- Una cesta de 7 pares de divisas más oro.
- La señal se ejecuta al día siguiente (sin mirar el futuro) y con costos de 3 puntos básicos por operación.
- Seis variantes: romper el máximo de 1, 2, 3 o 5 días, con y sin el filtro de la media de 200.
- Cinco filtros: periodo de diseño 2014-2020, dos periodos que la estrategia nunca vio (2007-2013, con la crisis de 2008, y 2021-2024), Deflated Sharpe y Monte Carlo de 5000 permutaciones.

**[4:00 — Resultados]** (pantalla: tabla animada, una fila por variante)
| Variante | Sharpe 2014-20 | 2007-13 | 2021-24 |
|---|---|---|---|
| MA200 + rompe 5 días | −0.54 | −0.86 | −0.80 |
| Rompe 5 días | −0.97 | −1.02 | −1.65 |
| Rompe 3 días | −1.05 | −1.02 | −1.67 |
| MA200 + rompe 1 día | −1.10 | −0.97 | −1.24 |
| Rompe 2 días | −1.13 | −1.17 | −1.69 |
| Rompe 1 día | −1.58 | −1.19 | −1.44 |

Las seis variantes, negativas en los tres periodos. Cero de seis pasan el primer filtro. No es que gane poco: pierde, y pierde de forma consistente.

**[5:30 — Por qué pierde]** (pantalla: gráfico de precio que rompe y revierte)
En estos mercados, perseguir el rompimiento del rango anterior no deja ventaja bruta: la ruptura de 1 día, sin contar costos, da Sharpe −0.10 en 2014-2020. Y como la estrategia entra y sale muy seguido, los costos terminan de rematarla.

**[6:15 — "Pero yo opero índices, no forex"]** (pantalla: resultado del experimento #90)
Es una crítica justa, así que la repetí en índices (S&P 500, Nasdaq 100, DAX y FTSE 100, 2012-2024). El breakout de este video dio −424 dólares sobre 10.000. En índices otras ideas de tendencia sí ganan dinero, pero ninguna supera a simplemente comprar y mantener el índice, que dio +29,368 dólares. Eso lo cuento en su propio video.

**[7:00 — Conclusión]**
El 71% de aciertos no aparece en los datos. Lo que sí aparece es lo de siempre: una regla sencilla que en el gráfico bonito funciona, y en 18 años de datos con costos no. Todos los números están en atlas-lab-one.vercel.app, experimento 85.

**[7:30 — Cierre]**
Si quieres que pruebe otra estrategia de redes, déjala en los comentarios. Contenido educativo, no es asesoría financiera.

---

## SHORT (≈ 45 s, vertical)

**[0-3 s]** (texto gigante "71% de aciertos") "Esta estrategia de TikTok promete un 71% de aciertos. La probé."
**[3-15 s]** "Comprar cuando el precio rompe el máximo del día anterior. Seis variantes, 18 años de datos, con costos."
**[15-35 s]** (barras rojas apareciendo) "Las seis pierden en los tres periodos. Sharpe de −0.54 a −1.69. Cero de seis pasan el primer filtro."
**[35-45 s]** "Perseguir el rompimiento no deja ventaja bruta y los costos rematan. El análisis completo está en el canal. No es asesoría financiera."

## Descripción (YouTube)
Probé el núcleo de la estrategia de TikTok del "71% de aciertos" (breakout del rango del día anterior) con datos de 2007 a 2024, costos reales y 5 filtros estadísticos. Resultado: 0 de 6 variantes sobreviven.

Datos completos: https://atlas-lab-one.vercel.app (experimento #85)

Capítulos: 0:00 Gancho · 0:30 La estrategia · 1:45 Qué probé · 2:30 Método · 4:00 Resultados · 5:30 Por qué pierde · 6:15 ¿Y en índices? · 7:00 Conclusión

Contenido educativo. No es asesoría financiera ni recomendación de inversión.

# Experimento #5 — Tema 2: en el crash del COVID subió +4.0%, y aun así perdió

Tema 2 de 4 del experimento #5
Qué aporta frente a los otros temas: el tema 1 es la historia del p = 0.003 que no significaba nada; este es el detalle de la crisis: del 7 de enero al 22 de marzo de 2020 la cesta cayó −25.7% y la estrategia subió +4.0%. Cuenta qué hace una estrategia de tendencia en un crash y por qué, aun así, el balance de seis años fue negativo (−4.1% contra +26.8%). El tema 3 explica el ajuste por volatilidad y el 4 compara un mercado con quince.
Estado del guion: **BORRADOR — pendiente de aprobación**
Estado del experimento: **murió** · Serie B (Estrategias famosas, puestas a prueba), por afinidad · 1 largo + 1 Short
Datos usados: `experiments.json` (v=5: kpis, metrics, params, verdict, notes), `series/20260607_204455_tsmom-cartera-15-activos-v5.json` (curva 1 = estrategia, curva 2 = comprar y esperar la cesta; de ahí los valores del 7-ene, 4-mar y 22-mar de 2020, el máximo del 14-oct-2022 y los retornos por año) y tabla «Con tu capital» de docs/youtube (fila 5). Las cifras con 10,000 dólares son las de la tabla de 100,000 divididas entre 10.
Producción: b-roll real con overlay oscuro 0.6, Ken Burns alterno, subtítulos karaoke en MAYÚSCULAS con cifras en rojo, golpe de bajo solo en 1–2 momentos. Rojo `#e11d2a`, verde `#22c55e`, fondo `#09090b`.

## Títulos (3 opciones)
1. En el crash del COVID la cesta cayó −25.7%; esta estrategia subió +4.0%… y perdió −4.1%
2. Momentum en 15 mercados durante el COVID: protegió, pero el seguro salió caro
3. Qué hace una estrategia de tendencia en una crisis: datos de 2020

## Miniatura
Fondo negro `#09090b`. Dos curvas reales del 7 de enero al 22 de marzo de 2020: la cesta cae en rojo hasta «−25.7%» y la estrategia sube en verde hasta «+4.0%». Texto grande: «COVID» (blanco) y «¿Y LUEGO?» (rojo). Logo ATLAS arriba a la derecha.

---

## VIDEO LARGO (16:9, ≈ 4:20 min)

**[0:00 — Gancho]** (pantalla: dos curvas que se separan)
Entre el 7 de enero y el 22 de marzo de 2020, una cesta de 15 mercados cayó menos 25.7%. En esas mismas semanas, esta estrategia subió más 4.0%. Y aun así, en seis años perdió.
> Boceto: dos curvas reales; la cesta cae en rojo, la estrategia sube en verde; cifras con sacudida en el punto de máxima separación. Ken Burns «in».

**[0:18 — Qué experimento es]** (pantalla: rótulo con el número y el nombre)
Este es el experimento #5 de ATLAS Lab: TSMOM cartera de 15 activos. Todos los resultados están en la página del experimento. Hoy miro qué pasó cuando llegó una crisis.
> Boceto: rótulo «EXPERIMENTO #5 · TSMOM cartera de 15 activos» y URL pequeña. kb=out.

**[0:30 — La estrategia en 20 segundos]** (pantalla: rejilla de 15 símbolos)
Es momentum de serie temporal sobre 15 instrumentos: divisas, metales, índices y energía. Para cada uno, si subió en los últimos 120 días, compra; si bajó, vende en corto. El tamaño de cada posición se ajusta para apuntar a un 10% de volatilidad anual, con un tope de 3 veces, y se opera con la señal del día anterior. Una de las comparaciones es con la misma cesta comprada y mantenida.
> Boceto: rejilla de 15 símbolos; flechas verdes y rojas; tarjeta «objetivo 10% · tope 3× · señal de ayer». kb=in.

**[1:00 — Del 7 de enero al 22 de marzo de 2020]** (pantalla: dos curvas con cifras)
El 7 de enero de 2020, la cesta valía 10,612 dólares sobre una base de 10,000. El 22 de marzo, 7,882: menos 25.7%. La estrategia, en esas fechas, pasó de 9,619 a 10,001: más 4.0%. Ojo: no fue una línea recta. El 4 de marzo llegó a bajar hasta 9,254, y después subió con fuerza en las últimas semanas del tramo.
> Boceto: las dos curvas reales sobre 7-ene→22-mar-2020 con marcas «10,612 → 7,882» y «9,619 → 9,254 → 10,001»; sombra roja sobre la cesta. Nota: «valores de la curva de la serie». kb=out.

**[1:32 — Por qué una estrategia de tendencia puede ganar en un crash]** (pantalla: precio cayendo)
Una explicación natural, que es una interpretación y no una cifra del experimento. La estrategia puede vender en corto: cuando los mercados bajan durante semanas, las señales de venta se activan y apuestan a que sigan bajando. Un crash largo y continuo es el escenario favorito de una regla de tendencia. Una regla que solo comprara no tendría esa defensa.
> Boceto: flechas rojas de «venta en corto» sobre las velas cayendo; etiqueta gris «interpretación». kb=in.

**[1:56 — Los años buenos y los malos del mercado]** (pantalla: barras por año)
Mira todos los años. En 2020, la estrategia hizo más 4.0% y la cesta, más 2.9%. En 2022, cuando la cesta perdió menos 4.9%, la estrategia ganó más 5.3%. Pero en 2023 y 2024, con la cesta subiendo más 5.1% y más 6.8%, la estrategia perdió menos 6.7% y menos 2.8%. En los años de caída ganó; en los años de subida fuerte ganó poco o perdió.
| Año | Estrategia | Cesta sin estrategia |
|---|---|---|
| 2019 | −3.7% | +5.3% |
| 2020 | +4.0% | +2.9% |
| 2021 | +0.3% | +9.3% |
| 2022 | +5.3% | −4.9% |
| 2023 | −6.7% | +5.1% |
| 2024 | −2.8% | +6.8% |
> Boceto: pares de barras por año; verde cuando la estrategia gana, rojo cuando pierde; nota «retornos de la curva de la serie; 2019 desde el 26 de mayo». kb=out.

**[2:30 — El seguro salió caro]** (pantalla: comparación del total)
Es como un seguro: te protege en el mal año, pero pagas la prima todos los demás. El total de seis años fue menos 4.1%, con un Sharpe de menos 0.10, mientras la cesta sin hacer nada tuvo un Sharpe de 0.40. Y la peor caída de la estrategia, menos 14.8%, no ocurrió en el crash: fue entre octubre de 2022 y agosto de 2024.
> Boceto: dos barras de Sharpe (−0.10 y 0.40); la curva de la estrategia con la caída de −14.8% sombreada entre oct-2022 y ago-2024. kb=in.

**[2:59 — Protección no es ganancia]** (pantalla: tres notas)
Dos aclaraciones para no confundirnos. Una: el p de azar de 0.003 de este experimento viene de la rotación de posiciones, no de una ventaja; sin costos, el Sharpe fue menos 0.003. Dos: que una estrategia suba en una crisis no la hace buena; la hace distinta. Para usarla como protección, tendría que costar menos de lo que protege, y aquí no ocurrió.
> Boceto: tres tarjetas: «p = 0.003 = artefacto», «Sharpe sin costos −0.003», «protegió, no compensó»; sello ✕. kb=out.

**[3:26 — Con tu capital]** (pantalla: tarjeta «Con tu capital»)
Con 10,000 dólares serían unos menos 413 para la estrategia, contra unos más 2,678 de comprar y esperar la cesta. Con 100,000, la tabla de ATLAS da menos 4,125 contra más 26,775.
> Boceto: tarjeta de capital con «Estrategia −$4,125» (rojo) y «Comprar y esperar +$26,775» (verde); selector $10,000 / $100,000.

**[3:43 — Ficha del experimento #5]** (pantalla: tarjeta con la URL)
Ficha del experimento 5. Estado: murió. Cifra clave: Sharpe de menos 0.10 contra 0.40 de la cesta sin estrategia, y en el crash del COVID, más 4.0% contra menos 25.7%. Filtros que decidieron: PSR de 0.39 y comparación con comprar y esperar. Lección: proteger en la crisis no basta si el resto del tiempo cuesta más. Revísalo completo en atlas-lab-one.vercel.app/e/5.
> Boceto: tarjeta oscura con «#5 · MURIÓ», cifras clave y «atlas-lab-one.vercel.app/e/5» en grande; logo.

**[4:11 — Cierre]**
Todos los datos en atlas-lab-one.vercel.app, experimento 5. Contenido educativo, no es asesoría financiera. El trading no se promete: se prueba.
> Boceto: pantalla oscura con la frase de marca.

---

## SHORT (9:16, ≈ 45 s)

**[0-3 s]** «COVID: la cesta cayó −25.7%. Esta estrategia subió +4.0%.»
> Boceto: dos curvas que se separan, roja cayendo y verde subiendo; sacudida; b-roll de pantallas de bolsa en rojo, Ken Burns «in», overlay 0.6.

**[3-14 s]** «Es momentum sobre 15 mercados: compra lo que sube, vende en corto lo que baja. Del 7 de enero al 22 de marzo de 2020, la cesta pasó de 10,612 a 7,882 dólares.»
> Boceto: rejilla de 15 símbolos y curva de la cesta con las dos cifras; Ken Burns «out».

**[14-27 s]** «También ganó en 2022, más 5.3% con la cesta en −4.9%. Pero en 2023 perdió −6.7% y en 2024, −2.8%, mientras la cesta subía.»
> Boceto: pares de barras por año; verde, verde, rojo, rojo; whoosh y flash blanco.

**[27-38 s]** «Total en seis años: −4.1% y un Sharpe de −0.10, contra 0.40 de la cesta sin estrategia. Protegió, pero el seguro salió caro.»
> Boceto: barras de Sharpe −0.10 y 0.40; contador −$4,125 contra +$26,775; Ken Burns «in».

**[38-45 s]** «Protección no es ganancia. Experimento cinco completo en el enlace. El video completo está en el canal. No es asesoría financiera.»
> Boceto: vuelven las dos curvas del COVID con «+4.0%» y «−4.1% total» (loop con el gancho); texto «Experimento #5 completo en el enlace» y logo.

---

## Descripción de YouTube (video largo)
https://atlas-lab-one.vercel.app/e/5?utm_source=youtube&utm_medium=video&utm_campaign=exp005-t2
Ficha del experimento #5 (TSMOM cartera de 15 activos): estado murió · −4.1% en seis años, Sharpe −0.10 (la cesta sin estrategia: Sharpe 0.40, +$26,775 por cada $100,000) · del 7-ene al 22-mar-2020, la estrategia +4.0% y la cesta −25.7%.
Qué hizo una estrategia de momentum diversificada en el crash del COVID y por qué, aun así, el balance de 2019-2024 fue negativo.
Contenido educativo. No es asesoría financiera ni recomendación de inversión.

## Descripción del Short
https://atlas-lab-one.vercel.app/e/5?utm_source=youtube&utm_medium=short&utm_campaign=exp005-t2
Experimento #5 · murió · +4.0% en el crash del COVID frente a −25.7% de la cesta, y −4.1% en total. No es asesoría financiera.

Capítulos: 0:00 Gancho · 0:18 Qué experimento es · 0:30 La estrategia en 20 segundos · 1:00 Del 7 de enero al 22 de marzo de 2020 · 1:32 Por qué una estrategia de tendencia puede ganar en un crash · 1:56 Los años buenos y los malos del mercado · 2:30 El seguro salió caro · 2:59 Protección no es ganancia · 3:26 Con tu capital · 3:43 Ficha del experimento #5 · 4:11 Cierre

Etiquetas: COVID, crash de 2020, momentum trading, trend following, cartera de 15 activos, volatilidad objetivo, backtest, Sharpe ratio, comprar y esperar, ATLAS Lab, trading con datos, estrategia de trading

## Rúbrica (autoevaluación, 1–5)
| Criterio | Short | Largo |
|---|---|---|
| hook_0_3s | 5 | 4 |
| ritmo | 4 | 4 |
| promesa_cumplida | 5 | 5 |
| potencial_loop | 5 | 4 |
| claridad_no_traders | 4 | 4 |
| honestidad_atlas | 5 | 5 |
| audio | 4 | 3 |
| cta | 4 | 4 |
| **Promedio** | **4.50** | **4.13** |

Notas: el gancho es una cifra positiva y por eso el Short dice en 40 s que el total fue negativo; la honestidad depende de que ese cierre no se recorte. Los valores del tramo del COVID y los retornos por año salen de la curva de la serie, y la explicación del porqué está rotulada como interpretación. El Short cumple hook ≥ 4 y honestidad 5.

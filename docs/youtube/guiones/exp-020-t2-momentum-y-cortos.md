# Experimento #20 — Tendencia largo-corto con filtro · Tema 2: Momentum y ventas en corto: comprar lo que sube y vender lo que baja

Tema 2 de 3 del experimento #20. Tema 1: `exp-020-largo-corto-bot.md`.
Qué aporta frente a los otros temas: Explica los dos conceptos (momentum de 120 días y venta en corto) y muestra año por año dónde restan los cortos frente a la versión solo en largo. El tema 1 cuenta la historia completa y el tema 3 se centra en el día en que murió la cuenta.
Estado del guion: **BORRADOR — pendiente de aprobación**
Estado del experimento: **murió** (veredicto del sitio: «No sirvió»; la cuenta se cortó el 4-nov-2022)
Serie: G (Construyendo un bot, y por qué murió)
Datos usados: `experiments.json` (v=20: description, params, metrics, kpis, analysis, verdict, notes, capital, period), `exp_details.json` (algo, code, filters), `series/20260609_210757_trend-long-short-filtrado-v20.json` (curva de la estrategia hasta el corte y curva «Sin estrategia») y la tabla «Con tu capital» de docs/youtube (fila 20). Las cifras con 10,000 dólares son las de la tabla de 100,000 divididas entre 10. Los rendimientos por año calendario de este experimento y de la versión solo en largo (la base del #16) se calculan de las curvas de series (último valor del año frente al último del año anterior). Con 2014 como año parcial, 5 de 9 años positivos reproducen el 56% del sitio.

## Títulos (3 opciones)
1. Comprar lo que sube y vender lo que baja: Sharpe 0.38 contra 1.23 solo comprando
2. Momentum de 120 días explicado: la regla que convirtió +25.3% en −3.5% en 2016
3. Qué es vender en corto y por qué, en una cesta que sube con los años, resta

## Miniatura
Fondo negro de la marca. Dos flechas: una verde hacia arriba, «COMPRA», y una roja hacia abajo, «CORTO». Texto grande: «0.38 VS 1.23» (la primera cifra en rojo de marca). Logo ATLAS esquina inferior derecha.

---

## VIDEO LARGO (16:9, ≈ 4:41 min — 4–6 min: tema de una sola idea y pocas cifras)
Ritmo visual: algo cambia en pantalla cada 2-3 s; b-roll real detrás, Ken Burns alterno, subtítulos karaoke, whoosh + flash en cada corte, golpe de bass solo en el momento clave.

**[0:00 — Gancho]** (pantalla: flechas verde y roja y las dos cifras)
La idea más famosa del trading cabe en una frase: comprar lo que sube y vender lo que baja. La probé en 15 mercados. Resultado: Sharpe de 0.38, frente a 1.23 con la versión que solo compra.
> Boceto: flecha verde «COMPRA» y flecha roja «CORTO»; las cifras «0.38» y «1.23» chocan, la roja se encoge con sacudida; b-roll de bolsa, Ken Burns «in».

**[0:15 — El experimento]** (pantalla: rótulo con el número y el nombre del experimento)
Este es el experimento #20 de ATLAS Lab: Tendencia largo-corto con filtro. Todos los resultados están en la página del experimento.
> Boceto: rótulo animado «EXPERIMENTO #20» con el nombre «Tendencia largo-corto con filtro» debajo y el logo ATLAS; whoosh de entrada y fondo de velas con opacidad 0.12.

**[0:24 — El bot de partida]** (pantalla: bot solo en largo con filtro)
La versión base solo compra: una cesta de 15 mercados con paridad de riesgo, apalancamiento ×3, reglas de cuenta fondeada y un filtro de pánico basado en el VIX y el crédito, de 2014 a 2024. Sharpe de 1.23, +267.3% y caída máxima de −12.5%. La pregunta de este tema: ¿mejora si también puede apostar a la baja?
> Boceto: tarjetas de la base (1.23 · +267.3% · −12.5%) y la cesta de 15 símbolos; interrogación sobre «¿y si vende en corto?».

**[0:48 — Qué es el momentum]** (pantalla: inercia de los precios)
Momentum significa inercia: lo que ha subido tiende a seguir subiendo, y lo que ha bajado, a seguir bajando. Es una idea muy conocida. Aquí se mide con el signo del cambio de precio en los últimos 120 días: si es positivo, el mercado tiene momentum alcista; si es negativo, bajista.
> Boceto: dos curvas con ventana de 120 días: una sube («+») y otra baja («−»); etiqueta «signo del momentum, 120 días».

**[1:09 — La regla]** (pantalla: peso por el signo)
La regla del bot: el peso de cada mercado, que sale de la paridad de riesgo, se multiplica por ese signo. Si subió en 120 días, compra; si bajó, vende en corto. El signo se calcula con datos de ayer. El filtro de pánico y el ×3 se quedan igual.
> Boceto: fórmula «peso de riesgo × signo del momentum»; dos activos, uno con flecha verde «largo» y otro con flecha roja «corto»; chip «×3».

**[1:29 — Qué es vender en corto]** (pantalla: préstamo, venta y recompra)
Vender en corto es apostar a que el precio baja: pides prestado un activo, lo vendes hoy y lo recompras después, esperando que cueste menos. Si baja, ganas la diferencia. Si sube, la pierdes, y en teoría esa pérdida no tiene tope. Con ×3, el efecto de un movimiento en contra se triplica.
> Boceto: tres viñetas: «presta», «vende hoy», «recompra mañana»; flecha verde corta si el precio baja y roja más larga si sube; chip «×3».

**[1:51 — Lo que pasó]** (pantalla: tarjetas KPI y curva cortada)
Resultado de 2014 a 2022: Sharpe de 0.38, retorno de +39.3%, caída máxima de −18.5% y solo 56% de años positivos. La cuenta se cerró el 4 de noviembre de 2022, después de 2,529 días, por una pérdida diaria de 5.2%. Más riesgo, menos retorno por unidad de riesgo y menos años en verde que la versión solo en largo.
> Boceto: kpis con tick (0.38 · +39.3% · −18.5% · 56% · 2,529 días); la curva real dibujándose y cortándose el 4-nov-2022.

**[2:16 — Dónde restan los cortos]** (pantalla: tres pares de barras)
Compara año por año con la versión solo en largo, la del experimento 16. En 2016: +25.3% solo comprando y −3.5% con cortos. En 2017: +22.0% contra −7.6%. En 2019: +17.0% contra −4.5%. En los años en que la cesta subió con fuerza, cada corto iba contra la corriente.
> Boceto: tres pares de barras (verde solo largo, roja largo-corto) para 2016, 2017 y 2019, que entran con tick; flechas rojas de cortos contra una pendiente alcista.

**[2:36 — Dónde ayudaron]** (pantalla: un año a favor de los cortos)
También hubo un año en que los cortos ayudaron: 2015. La versión con cortos hizo +14.6% y la que solo compra, −3.7%. Un año a favor no compensa varios en contra, pero muestra que la idea no es absurda: depende de en qué mercado te toque.
> Boceto: par de barras de 2015 con la roja-corta invertida a favor: «largo-corto +14.6%» contra «solo largo −3.7%».

**[2:55 — Por qué restan en conjunto]** (pantalla: cesta alcista)
La cesta tiene un sesgo alcista de largo plazo: sube con los años. En una cesta así, en promedio, cada corto va contra la corriente. El experimento lo resume en una frase: en una cesta con tendencia alcista de largo plazo, los cortos restan.
> Boceto: curva de la cesta con pendiente alcista y flechas rojas de cortos apuntando contra ella; texto «sesgo alcista de largo plazo».

**[3:13 — El filtro sigue ahí]** (pantalla: semáforo y cortos)
Un detalle: el filtro de pánico sigue sacando al bot del mercado cuando detecta peligro, así que los cortos no se usan en esos días. Operan en calma, contra lo que lleva 120 días bajando. No son una cobertura de crisis.
> Boceto: semáforo rojo que apaga los cortos y semáforo verde que enciende las flechas rojas sobre activos que venían cayendo.

**[3:30 — Con tu capital]** (pantalla: tarjeta «Con tu capital» con aviso)
Con 10,000 dólares, la curva termina en más 3,929; con 100,000, en más 39,293. Comprar y esperar en esas fechas daría más 2,351 y más 23,511. El número supera al de comprar y esperar, pero ya estás fuera: la cuenta se cerró el 4 de noviembre de 2022. Además, usa el cierre del mismo día y ×3.
> Boceto: tarjeta de capital con aviso ámbar «la cuenta se corta el 4-nov-2022»; curva roja cortada frente a la gris; selector $10,000 / $100,000.

**[3:53 — Conclusión]** (pantalla: texto grande)
Veredicto: no sirvió. Vender lo que baja suena lógico, pero en una cesta que sube con los años los cortos restaron más de lo que sumaron: Sharpe de 0.38 contra 1.23. Una idea muy conocida también necesita su prueba.
> Boceto: sello ✕ rojo sobre la flecha de corto; la flecha verde de compra queda en pie.

**[4:09 — Ficha del experimento #20]** (pantalla: tarjeta en pantalla con la ficha y la URL)
Ficha del experimento 20. Estado: murió (cuenta cortada el 4 de noviembre de 2022). Cifra clave: Sharpe 0.38 (solo largo: 1.23), +39.3%, caída máxima −18.5% y 56% de años positivos. Filtro que decidió: superar el Sharpe de 1.23 falla, y sobrevivir a la prop firm también (pérdida diaria de −5.2%). Lección: en una cesta con tendencia alcista de largo plazo, los cortos restan. Revísalo completo en atlas-lab-one.vercel.app/e/20. Contenido educativo, no es asesoría financiera. El trading no se promete: se prueba.
> Boceto: tarjeta con las líneas de la ficha apareciendo una a una (estado, cifra clave, filtro que decidió, lección) y, al pie, la URL «atlas-lab-one.vercel.app/e/20» resaltada; sello del estado del experimento; frase de marca, logo y URL.

---

## SHORT (9:16, ≈ 44 s)
Fórmula visual: b-roll vertical + overlay oscuro 0.6, Ken Burns alternando in/out, subtítulos karaoke en MAYÚSCULAS con las cifras en rojo, whoosh + flash en cada corte, golpe de bass + sacudida solo en el 0-3 s; ticker arriba.

**[0-3 s]** «Comprar lo que sube, vender lo que baja: Sharpe 0.38.»
> Boceto: flecha verde y flecha roja; texto gigante «0.38» en rojo que se encoge con sacudida; b-roll de bolsa, Ken Burns «in».
**[3-11 s]** «Es el momentum: miro los últimos 120 días de cada mercado. Si subió, compro; si bajó, vendo en corto.»
> Boceto: dos activos con ventana de 120 días, uno verde y otro rojo; Ken Burns «out»; karaoke con «EN CORTO» en rojo.
**[11-14 s]** «Con 15 mercados, filtro de pánico y apalancamiento ×3.»
> Boceto: cesta de 15 símbolos y chip «×3»; whoosh y flash blanco.
**[14-24 s]** «Vender en corto es apostar a que el precio baja. Si sube, la pérdida no tiene tope, y con ×3 el efecto se triplica.»
> Boceto: flecha roja hacia abajo «corto» y una flecha larga hacia arriba «sin tope»; chip «×3».
**[24-30 s]** «Solo comprando, el Sharpe era 1.23. Con cortos, 0.38, y solo 56% de años positivos.»
> Boceto: dos barras de Sharpe, 1.23 verde y 0.38 roja; tarjeta «56%»; Ken Burns «in».
**[30-33 s]** «En 2016, solo comprando: +25.3%. Con cortos: −3.5%.»
> Boceto: par de barras de 2016, verde alta y roja bajo cero.
**[33-40 s]** «El video completo está en el canal. Experimento #20 completo en el enlace. No es asesoría financiera.»
> Boceto: texto «Video completo en el canal» y «Experimento #20 en el enlace» con el logo ATLAS.
**[40-44 s]** «Vender lo que baja suena lógico. Los datos dicen: 0.38.»
> Boceto: vuelve «0.38» con la flecha de corto (loop con el gancho); corte directo al inicio.

## Descripción (YouTube) — video largo
https://atlas-lab-one.vercel.app/e/20?utm_source=youtube&utm_medium=video&utm_campaign=exp020-t2
Ficha del experimento #20 (Tendencia largo-corto con filtro): estado murió (cuenta cortada el 4-nov-2022). Sharpe 0.38 contra 1.23 de la versión solo en largo, +39.3% y caída máxima −18.5%.
Momentum de 120 días y ventas en corto probados en un bot de 15 mercados con filtro de pánico y ×3: Sharpe 0.38 contra 1.23 de la versión solo en largo, +39.3%, caída máxima −18.5% y 56% de años positivos. En 2016: +25.3% solo comprando y −3.5% con cortos.
La cuenta se cerró el 4-nov-2022 por una pérdida diaria de −5.2%. En una cesta con tendencia alcista de largo plazo, los cortos restan.
Contenido educativo. No es asesoría financiera ni recomendación de inversión.

## Descripción (YouTube) — Short
https://atlas-lab-one.vercel.app/e/20?utm_source=youtube&utm_medium=short&utm_campaign=exp020-t2
Ficha del experimento #20 (Tendencia largo-corto con filtro): estado murió (cuenta cortada el 4-nov-2022). Sharpe 0.38 contra 1.23 de la versión solo en largo, +39.3% y caída máxima −18.5%.
Comprar lo que sube y vender lo que baja en 15 mercados: Sharpe 0.38 contra 1.23 de la versión que solo compra.
Video completo en el canal. Experimento #20 completo en el enlace. Contenido educativo, no es asesoría financiera.

Capítulos: 0:00 Gancho · 0:15 El experimento · 0:24 El bot de partida · 0:48 Qué es el momentum · 1:09 La regla · 1:29 Qué es vender en corto · 1:51 Lo que pasó · 2:16 Dónde restan los cortos · 2:36 Dónde ayudaron · 2:55 Por qué restan en conjunto · 3:13 El filtro sigue ahí · 3:30 Con tu capital · 3:53 Conclusión · 4:09 Ficha del experimento #20

Etiquetas: momentum, ventas en corto, largo y corto, tendencia, bot de trading, Sharpe ratio, prop firm, backtest, apalancamiento, ATLAS Lab, trading con datos, trading algorítmico

## Rúbrica (autoevaluación, 1–5)
| Criterio | Short | Largo |
|---|---|---|
| hook_0_3s | 4 | 4 |
| ritmo | 4 | 4 |
| promesa_cumplida | 5 | 5 |
| potencial_loop | 4 | 4 |
| claridad_no_traders | 4 | 5 |
| honestidad_atlas | 5 | 5 |
| audio | 4 | 3 |
| cta | 4 | 4 |
| **Promedio** | **4.25** | **4.25** |

Notas: el gancho nombra la idea más conocida del trading y la contrasta con dos cifras; los rendimientos anuales se calculan de las curvas y se muestran también los años en que los cortos ayudaron (2015). El Short cumple hook ≥ 4 y honestidad 5.

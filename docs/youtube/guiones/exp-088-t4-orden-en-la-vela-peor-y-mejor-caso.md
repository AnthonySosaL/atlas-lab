# Experimento #88 — Tema 4: el orden dentro de la vela de 30 minutos (peor caso y mejor caso: 0 de 32 en los dos)

Tema 4 de 4 del experimento #88 · Qué aporta frente a los otros temas: es el tema del método. Explica qué no puede saber una vela de 30 minutos (si se tocó antes el stop o el objetivo), cómo se resolvió probando el peor caso y el mejor caso, y qué reglas evitan mirar el futuro. El tema 1 cuenta el resultado completo; el tema 2 trata el costo; el tema 3, los stops y los objetivos.
Estado del guion: **BORRADOR — pendiente de aprobación**
Estado del experimento: **murió** (ninguna de las 32 formas pasa; versión del video: Sharpe −1.73 en 2014–2020) · Serie A — «Probé la estrategia de TikTok» (plan-series.md) · 1 largo + 1 Short
Datos usados: `experiments.json` (v=88: kpis, metrics, verdict, analysis, notes, capital, period), `exp_details.json` (extra-v88: algo, code, filters, en especial `lag`, `costs` y `other`), `series/extra-v88.json` (1.ª curva = versión del video; 3.ª = «Sin estrategia»), tabla «Con tu capital» de `docs/youtube`.
Producción (CLAUDE.md del canal): b-roll real detrás de cada escena con overlay oscuro 0.6, Ken Burns alternando in/out, subtítulos karaoke en MAYÚSCULAS con palabras clave en rojo, un dato visual por escena, golpe de bajo + sacudida solo en 1–2 momentos. Colores: rojo `#e11d2a`, verde `#22c55e`, fondo `#09090b`. Cifras en dígitos aquí; en el campo `tts` del JSON, en palabras.

## Títulos (3 opciones)
1. Peor caso y mejor caso: 0 de 32 formas del ORB pasan en los dos
2. Una vela de 30 minutos no sabe qué se tocó primero: cómo lo resolví
3. 3,594 sesiones de Nueva York y un solo límite honesto: el orden dentro de la vela

## Miniatura (pensada para el título 1)
Fondo `#09090b`. Una vela de 30 minutos grande con una interrogación entre el stop y el objetivo; a los lados dos sellos, «PEOR 0/32» en rojo y «MEJOR 0/32» en verde con una ✕. Texto grande: «¿QUÉ PRIMERO?» (2 palabras, sin repetir el título). Logo ATLAS arriba a la derecha.

---

## VIDEO LARGO (16:9, ≈ 5.5 min)

**[0:00 — Gancho]** (pantalla: vela con interrogación y dos sellos)
Una vela de 30 minutos no te dice si el precio tocó primero el stop o el objetivo. Probé el peor caso y el mejor caso: en los dos, 0 de 32 formas del ORB del Nasdaq pasan.
BOCETO: vela de 30 minutos con una interrogación entre el stop y el objetivo; dos sellos «0 / 32» (rojo y verde) que aparecen a los lados. kb=in.

**[0:15 — Qué es este experimento]** (pantalla: rótulo con el número y el nombre)
Este es el experimento #88 de ATLAS Lab: TikTok 4, ORB del Nasdaq a las 9:30. Todos los resultados están en la página del experimento.
BOCETO: rótulo en rojo y blanco «EXPERIMENTO #88» con el nombre debajo, sobre la vela atenuada (overlay 0.6). Whoosh corto. kb=out.

**[0:25 — Qué sabe una vela y qué no]** (pantalla: una vela con cuatro precios)
Una vela de 30 minutos guarda cuatro precios: apertura, máximo, mínimo y cierre. No guarda el orden. Si dentro de esa vela el precio llegó al stop y también al objetivo, no sé cuál tocó primero. Para una estrategia como el ORB, que entra por un rango y sale por un stop o un objetivo, esa diferencia decide si la operación gana o pierde.
BOCETO: una vela con cuatro etiquetas (apertura, máximo, mínimo, cierre) y dos caminos posibles dibujados en gris que llegan al mismo máximo y mínimo en distinto orden (ilustración). kb=in.

**[1:15 — Solución 1: el peor caso]** (pantalla: camino desfavorable)
En mi prueba asumo siempre el orden desfavorable: una vez que entra la operación, el precio toca primero el extremo malo y después el bueno. Es un caso pesimista a propósito. Si una estrategia pasa con el peor orden, no depende de la suerte del orden. Las 32 formas se prueban así, con 3 puntos básicos por lado de costo.
BOCETO: la misma vela con el camino malo resaltado en rojo («primero el stop») y el bueno apagado. Checklist `filters`: ✓ orden intrabarra desfavorable, ✓ costos 3 bps por lado. kb=out.

**[2:05 — Solución 2: el mejor caso]** (pantalla: camino favorable)
Pero un peor caso puede ser demasiado duro. Así que también hice lo contrario: le di el orden más favorable en cada vela, con 3 puntos básicos por lado. Es una cota superior, lo mejor que podría pasar con estos datos. Resultado: tampoco pasa ninguna de las 32 formas. Cero de 32 en el peor caso, cero de 32 en el mejor.
BOCETO: la vela con el camino favorable resaltado en verde; dos sellos «0 / 32» lado a lado, con una ✕ cada uno. Golpe de bajo + sacudida al aparecer el segundo sello.

**[3:00 — Sin mirar el futuro]** (pantalla: línea de tiempo del día)
Otro control es no usar información que aún no existe. Las formas con rango de la vela de las 9:30 o de la primera hora empiezan a operar en la vela siguiente al rango. Las de premercado usan solo velas anteriores a las 9:30. Y las órdenes son stops que se ejecutan al tocar el nivel, o a la apertura si el precio abre más allá del nivel. Una operación por día, y si no sale antes, cierra a las 16:00.
BOCETO: línea de tiempo de un día de Nueva York con las ventanas de cada rango (4:00–9:30, 9:00–9:30, 9:30, 9:30–10:30) y la hora 16:00 marcada; las zonas de entrada empiezan siempre después del rango. kb=in.

**[3:50 — Los datos]** (pantalla: tarjeta de datos)
Los datos son velas de 30 minutos del Nasdaq 100 de Dukascopy, de 2012 a 2026: 3,594 sesiones de Nueva York, sin feriados ni medias sesiones. El diseño es 2014–2020, y fuera de muestra, en periodos que la estrategia no vio, 2012–2013, 2021–2024 y 2025–2026. El Deflated Sharpe, que descuenta la suerte de probar muchas ideas, usa como contador las 32 formas: su máximo es 0.00, cuando se exige 0.95.
BOCETO: tarjeta «Nasdaq 100 · velas de 30 min · 2012–2026 · 3,594 sesiones»; línea de tiempo con cuatro tramos. kb=out.

**[4:30 — Lo que no sé]** (pantalla: nota de alcance)
Un límite honesto. Con velas de 30 minutos no puedo saber cuál sería el resultado exacto con el orden real. Por eso acoto con el peor y el mejor caso. La curva de la versión del video que verás en «Con tu capital» es la del caso pesimista. Pero ninguno de los dos casos hace pasar una forma.
BOCETO: cartel ámbar «el orden real no se conoce con velas de 30 minutos: peor caso y mejor caso».

**[4:55 — Con tu capital]** (pantalla: tarjeta de capital)
Con 100,000 dólares entre 2012 y 2026, la versión del video pierde 77,076. Comprar y esperar el Nasdaq 100 gana 1,102,826. Con 10,000 dólares serían unos −7,708 contra +110,283. Esa curva asume el peor orden dentro de cada vela.
BOCETO: curvas reales de `series/extra-v88.json` (versión del video roja, «Sin estrategia» verde); cartel ámbar con la nota de `capital.note`.

**[5:15 — Conclusión]**
Cuando un dato no te dice algo, no lo inventes: acótalo. Peor caso, mejor caso, y ninguna de las 32 formas pasa. El trading no se promete: se prueba.

**[5:35 — Ficha del experimento #88]** (pantalla: tarjeta con la ficha y la URL)
Ficha del experimento #88. Estado: murió. Cifra clave: 0 de 32 formas pasan, tanto con el peor orden dentro de la vela como con el mejor; con 100,000 dólares, la versión del video pierde 77,076. Filtro que decidió: 0 de 32 superan a comprar y esperar, Sharpe 1.01. Lección: si no sabes algo, acótalo con el peor y el mejor caso. Revísalo completo en atlas-lab-one.vercel.app/e/88.
BOCETO: tarjeta con el número «#88», el sello «MURIÓ» en rojo, tres líneas (cifra clave, filtro que decidió, lección) y la URL `atlas-lab-one.vercel.app/e/88` grande abajo. kb=in.

**[5:55 — Cierre]**
Todos los datos en atlas-lab-one.vercel.app, experimento 88. Contenido educativo, no es asesoría financiera.

---

## SHORT (9:16, ≈ 49 s)

**[0-3 s]** «Una vela de 30 minutos no dice qué se tocó primero. Probé el peor caso y el mejor: cero de 32 en los dos.»
BOCETO: vela con interrogación y dos sellos «0/32» sobre b-roll de bolsa de Nueva York (kb=in), overlay 0.6.

**[3-15 s]** «Es el ORB del Nasdaq, de un TikTok. Treinta y dos versiones, con 3 puntos básicos de costo por lado.»
BOCETO: cubo de 32 formas que se llena (kb=out); ticker arriba.

**[15-30 s]** «Con el peor orden dentro de la vela, cero de 32 pasan. Con el mejor orden, y los mismos costos, también cero de 32.»
BOCETO: dos caminos en la vela, uno rojo y uno verde; dos sellos «0/32» con tick; golpe de bajo + sacudida.

**[30-43 s]** «3,594 sesiones de Nueva York, de 2012 a 2026. Si hasta el mejor caso falla, el resultado no es un detalle del método.»
BOCETO: tarjeta de datos con el contador 3,594 y la línea de tiempo 2012–2026.

**[43-49 s]** «El video completo está en el canal, y el experimento #88 completo, en el enlace. Peor caso, mejor caso: cero de treinta y dos.»
BOCETO: texto final «Video completo en el canal · Experimento #88 completo en el enlace» + pequeño «No es asesoría financiera · El trading no se promete: se prueba». Loop: «cero de 32» repite el hook.

---

## Descripción de YouTube (video largo)
https://atlas-lab-one.vercel.app/e/88?utm_source=youtube&utm_medium=video&utm_campaign=exp088-t4
Ficha del experimento #88: murió · 32 formas del ORB del Nasdaq 100, 0 pasan con el peor orden dentro de la vela y 0 con el mejor · versión del video: Sharpe −1.73 en 2014–2020 · con $100,000: −$77,076 contra +$1,102,826 de comprar y esperar.
Explico cómo se probó una estrategia intradía con velas de 30 minutos (Dukascopy, 2012–2026, 3,594 sesiones de Nueva York): orden desfavorable y favorable dentro de la vela, sin mirar el futuro y con 3 puntos básicos por lado.
Contenido educativo. No es asesoría financiera ni recomendación de inversión.

## Descripción de YouTube (Short)
https://atlas-lab-one.vercel.app/e/88?utm_source=youtube&utm_medium=short&utm_campaign=exp088-t4
Ficha del experimento #88: murió · 0 de 32 formas pasan con el peor y con el mejor orden dentro de la vela · 3,594 sesiones, 2012–2026.
Contenido educativo. No es asesoría financiera.

## Capítulos
0:00 Gancho · 0:15 Qué es este experimento · 0:25 Qué sabe una vela · 1:15 El peor caso · 2:05 El mejor caso · 3:00 Sin mirar el futuro · 3:50 Los datos · 4:30 Lo que no sé · 4:55 Con tu capital · 5:15 Conclusión · 5:35 Ficha del experimento

## Etiquetas
orb, velas de 30 minutos, orden dentro de la vela, backtest intradía, sin lookahead, nasdaq 100, dukascopy, peor caso mejor caso, estrategia de tiktok, backtest, atlas lab, trading con datos

## Rúbrica (autoevaluación, 1–5)
| Pieza | hook_0_3s | ritmo | promesa_cumplida | potencial_loop | claridad_no_traders | honestidad_atlas | audio | cta | Promedio |
|---|---|---|---|---|---|---|---|---|---|
| Largo | 4 | 4 | 5 | 4 | 4 | 5 | 4 | 4 | 4.2 |
| Short | 5 | 4 | 5 | 5 | 4 | 5 | 4 | 4 | 4.5 |

Hook ≥ 4 ✓ · honestidad 5 ✓. Punto débil: tema metodológico con pocas cifras; las dos que lo sostienen son los dos «0 de 32». La ficha solo da el resultado del mejor caso como «0/32», sin Sharpe; el guion no inventa más. El «+214%» es una promesa del TikTok.

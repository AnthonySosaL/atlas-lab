# Experimento #81 — Tema 5: la cuenta del laboratorio (34,751 generadas, 1,388 que casi no operaron, 33,363 intentos)

Tema 5 de 5 del experimento #81 · Qué aporta frente a los otros temas: es el tema de la contabilidad honesta. Explica de dónde salen las 34,751 estrategias, por qué 1,388 no cuentan como intento y por qué el número de intentos es lo que decide si un resultado es suerte. El tema 1 cuenta qué pasó; el tema 2 profundiza en el Deflated Sharpe; el tema 3 trata el patrón «real pero inútil»; el tema 4, las cinco puertas.
Estado del guion: **BORRADOR — pendiente de aprobación**
Estado del experimento: **murió** (0 de 33,363 sobrevivieron; Deflated Sharpe máximo 0.31 de 0.95 exigido) · Serie C — «El experimento grande» (plan-series.md) · 1 largo + 1 Short
Datos usados: `experiments.json` (v=81: kpis, metrics, analysis, chart, params_view), `exp_details.json` (extra-v81: algo, code, filters, en especial `other` y el comentario de `code.snippet` sobre el contador N = 33,363 y SR0 ≈ 1.11), y la nota del Deflated Sharpe del experimento 88 (N = 32). No tiene `series/`.
Producción (CLAUDE.md del canal): b-roll real detrás de cada escena con overlay oscuro 0.6, Ken Burns alternando in/out, subtítulos karaoke en MAYÚSCULAS con palabras clave en rojo, un dato visual por escena, golpe de bajo + sacudida solo en 1–2 momentos. Colores: rojo `#e11d2a`, verde `#22c55e`, fondo `#09090b`. Cifras en dígitos aquí; en el campo `tts` del JSON, en palabras.

## Títulos (3 opciones)
1. 34,751 estrategias generadas, 33,363 probadas: ¿y las 1,388 que faltan?
2. Cuántas veces lo intentaste: el número que decide si es suerte
3. La cuenta de un laboratorio: 1,735 + 33,016 = 34,751

## Miniatura (pensada para el título 1)
Fondo `#09090b`. Una cuadrícula de puntos rojos con un pequeño grupo de puntos grises apartado a un lado; encima, «−1,388» en blanco. Texto grande: «NO CUENTAN» (2 palabras, sin repetir el título). Logo ATLAS arriba a la derecha.

---

## VIDEO LARGO (16:9, ≈ 6.5 min)

**[0:00 — Gancho]** (pantalla: contador 34,751 que baja a 33,363)
Mi laboratorio generó 34,751 estrategias distintas. Pero solo 33,363 cuentan como intento. ¿Qué pasó con las otras 1,388?
BOCETO: contador 34,751 que se descuenta en 1,388 y queda en 33,363; los 1,388 puntos grises se apartan de la cuadrícula. kb=in.

**[0:15 — Qué es este experimento]** (pantalla: rótulo con el número y el nombre)
Este es el experimento #81 de ATLAS Lab: Laboratorio automático, 33,363 estrategias probadas con 5 filtros. Todos los resultados están en la página del experimento.
BOCETO: rótulo en rojo y blanco «EXPERIMENTO #81» con el nombre debajo, sobre la cuadrícula atenuada (overlay 0.6). Whoosh corto. kb=out.

**[0:25 — De dónde salen las ideas]** (pantalla: tres cajas hacia un motor)
Las ideas vienen de tres fuentes. Primera: semillas clásicas, como medias móviles, Donchian, momentum, RSI, IBS, Double Seven y combinaciones. Segunda: un modelo de lenguaje, DeepSeek y Qwen, que propone variantes. Tercera: un explorador que garantiza novedad sin fin. Cada idea se convierte en una especificación, y un motor fijo la prueba siempre igual.
BOCETO: tres cajas («semillas», «modelo de lenguaje», «explorador») que alimentan una caja «motor fijo». kb=in.

**[1:15 — La huella: ninguna se repite]** (pantalla: dos estrategias iguales con la misma huella)
Un problema de cualquier generador de ideas es repetirse. Si la misma estrategia entra dos veces, parece que probaste más de lo que probaste, o peor, parece que acertaste dos veces. Por eso cada especificación recibe una huella, una especie de código único. Si la huella ya existe, no se prueba otra vez. Así las 34,751 son todas distintas.
BOCETO: dos tarjetas con distinto nombre pero la misma huella que se fusionan en una; cartel «34,751 únicas». kb=out.

**[2:00 — La cuenta]** (pantalla: suma y resta)
Y aquí va la cuenta, que es lo que más se malinterpreta. No todo ocurrió en una noche. Había 1,735 estrategias de pruebas anteriores. En una corrida nocturna completa se agregaron 33,016 nuevas. Suman 34,751. De ellas, 1,388 casi nunca operaron. Restas, y quedan 33,363 estrategias que sí se probaron de verdad.
BOCETO: operación en pantalla: «1,735 previas + 33,016 nuevas = 34,751 únicas» y, debajo, «− 1,388 casi nunca operaron = 33,363 probadas». Cada línea con tick. Aclaración en gris: «las 1,735 son de pruebas anteriores».

**[3:00 — Las 1,388 que casi no operaron]** (pantalla: señal que casi nunca se activa)
¿Por qué no cuentan? Una estrategia que casi nunca opera no genera rendimientos que medir: sin operaciones no hay un Sharpe que comparar con nada. El motor las marca como «sin operaciones» y no las cuenta como intento. No pasan ni suspenden: no llegaron a jugar. Y esto es importante: no están escondidas, están en el registro. De los 34,751 que hay en el registro, 33,363 murieron en los filtros y 1,388 no operaron.
BOCETO: línea de tiempo con una señal que casi nunca se activa (rotulada «ilustración»); etiqueta «noop · sin operaciones». Dos columnas: «33,363 descartadas» y «1,388 sin operaciones». kb=in.

**[3:55 — Por qué el denominador decide]** (pantalla: techo de suerte)
Ahora, ¿por qué contar tan bien? Porque cuantos más intentos haces, más alto es el Sharpe que puedes sacar solo por suerte. Con 33,363 intentos, ese techo de suerte es de cerca de 1.11 al año. El Deflated Sharpe usa ese número de intentos para descontar. Si alguien te enseña la mejor estrategia sin decirte cuántas probó, no puedes saber a qué techo compararla.
BOCETO: eje de Sharpe con una banda roja que sube a medida que un contador de intentos aumenta hasta 33,363, y se detiene en «≈ 1.11 al año». kb=out.

**[4:50 — Un contador distinto según el mercado]** (pantalla: dos contadores)
Esto se nota al comparar con los otros experimentos. Las pruebas de TikTok en divisas y oro, como las de EMAs o la de barridas, usan el contador global del laboratorio, 33,363 intentos previos. El ORB del Nasdaq, que es otro mercado y otras reglas, usa como contador las 32 formas del propio experimento. Elegir el contador cambia el filtro, y por eso se publica cuál se usó.
BOCETO: dos contadores: «divisas + oro · 33,363 previos» y «Nasdaq 100 intradía · 32 formas». Cartel «el contador usado se publica en cada ficha». kb=in.

**[5:35 — Con tu capital]** (pantalla: tarjeta vacía)
La tarjeta «Con tu capital» de este experimento está vacía a propósito. No hay curva de capital: se midió cuántas estrategias superan cada filtro, y ninguna de las 33,363 probadas llegó a ser apta para operar.
BOCETO: tarjeta de capital con el texto de `capital.note` y un «—» grande.

**[5:55 — Conclusión]**
Un resultado sin su contador de intentos no se puede interpretar. Aquí fueron 33,363 intentos, 1,388 que casi no operaron y 0 sobrevivientes. El trading no se promete: se prueba.

**[6:20 — Ficha del experimento #81]** (pantalla: tarjeta con la ficha y la URL)
Ficha del experimento #81. Estado: murió. Cifra clave: 34,751 estrategias únicas, 33,363 probadas de verdad y 0 sobrevivientes. Filtro que decidió: el Deflated Sharpe, máximo 0.31 de 0.95, con un contador de 33,363 intentos. Lección: cuenta siempre cuántas veces lo intentaste. Revísalo completo en atlas-lab-one.vercel.app/e/81.
BOCETO: tarjeta con el número «#81», el sello «MURIÓ» en rojo, tres líneas (cifra clave, filtro que decidió, lección) y la URL `atlas-lab-one.vercel.app/e/81` grande abajo. kb=in.

**[6:40 — Cierre]**
Todos los datos en atlas-lab-one.vercel.app, experimento 81. Contenido educativo, no es asesoría financiera.

---

## SHORT (9:16, ≈ 50 s)

**[0-3 s]** «34,751 estrategias generadas. Solo 33,363 cuentan. ¿Dónde están las otras?»
BOCETO: contador 34,751 → 33,363 sobre b-roll de servidores (kb=in), overlay 0.6; puntos grises que se apartan.

**[3-15 s]** «En una noche se agregaron 33,016 estrategias nuevas a 1,735 de pruebas anteriores. Total: 34,751, todas distintas.»
BOCETO: suma «1,735 + 33,016 = 34,751» con tick (kb=out); ticker arriba.

**[15-30 s]** «De esas, 1,388 casi nunca operaron. Sin operaciones no hay nada que medir, así que no cuentan como intento.»
BOCETO: «− 1,388» en gris que se desprende del total; golpe de bajo + sacudida.

**[30-43 s]** «Quedan 33,363 intentos. Y ese número importa: con tantos, la suerte sola puede dar un Sharpe de cerca de 1.11 al año.»
BOCETO: banda roja de «techo de suerte ≈ 1.11» que sube con el contador.

**[43-50 s]** «El video completo está en el canal, y el experimento #81 completo, en el enlace. Las otras 1,388: casi no operaron.»
BOCETO: texto final «Video completo en el canal · Experimento #81 completo en el enlace» + pequeño «No es asesoría financiera · El trading no se promete: se prueba». Loop: «las otras 1,388» responde a «¿dónde están las otras?» del arranque.

---

## Descripción de YouTube (video largo)
https://atlas-lab-one.vercel.app/e/81?utm_source=youtube&utm_medium=video&utm_campaign=exp081-t5
Ficha del experimento #81: murió · 34,751 estrategias únicas = 33,363 probadas + 1,388 que casi no operaron · 0 sobrevivientes · Deflated Sharpe máximo 0.31 de 0.95 exigido.
Explico la cuenta del laboratorio: 1,735 de pruebas anteriores más 33,016 nuevas, por qué 1,388 no cuentan como intento y por qué el número de intentos, 33,363, fija el techo de suerte (cerca de 1.11 de Sharpe al año).
Contenido educativo. No es asesoría financiera ni recomendación de inversión.

## Descripción de YouTube (Short)
https://atlas-lab-one.vercel.app/e/81?utm_source=youtube&utm_medium=short&utm_campaign=exp081-t5
Ficha del experimento #81: murió · 1,735 + 33,016 = 34,751 estrategias; 1,388 casi no operaron; 33,363 intentos; 0 sobrevivientes.
Contenido educativo. No es asesoría financiera.

## Capítulos
0:00 Gancho · 0:15 Qué es este experimento · 0:25 De dónde salen las ideas · 1:15 La huella · 2:00 La cuenta · 3:00 Las 1,388 · 3:55 Por qué el denominador decide · 4:50 Un contador por mercado · 5:35 Con tu capital · 5:55 Conclusión · 6:20 Ficha del experimento

## Etiquetas
laboratorio de trading, estrategias generadas, número de intentos, pruebas múltiples, deflated sharpe, sobreajuste, backtest, deepseek, qwen, 33363 estrategias, atlas lab, trading con datos

## Rúbrica (autoevaluación, 1–5)
| Pieza | hook_0_3s | ritmo | promesa_cumplida | potencial_loop | claridad_no_traders | honestidad_atlas | audio | cta | Promedio |
|---|---|---|---|---|---|---|---|---|---|
| Largo | 4 | 4 | 5 | 4 | 4 | 5 | 4 | 4 | 4.3 |
| Short | 4 | 4 | 5 | 5 | 4 | 5 | 4 | 4 | 4.4 |

Hook ≥ 4 ✓ · honestidad 5 ✓. Punto débil: es el tema más «contable» del experimento; el gancho funciona por la resta 34,751 − 1,388. La cuenta debe quedar clara en pantalla: 1,735 son de pruebas anteriores y no todo se generó en una noche. Se dice «casi no operaron» y no «nunca operaron», como en la ficha.

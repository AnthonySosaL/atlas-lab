# Experimento #37 — Probabilidad de aprobar (versión ejecutable) · Tema 2: Monte Carlo, 4,000 historias alternativas

Estado del guion: **BORRADOR — pendiente de aprobación**
Tema 2 de 3 del experimento #37. Qué aporta frente a los otros temas: es el MÉTODO. El tema 1 cuenta el resultado (6.4%, 18.7% y 37.5% de pasar) y el tema 3 compara tres formas de medir el reto; este tema explica paso a paso cómo se fabrican las 4,000 historias alternativas con bloques de 5 días y qué puede y qué no puede decir una simulación así.
Estado del experimento: **PARCIAL** (técnicamente posible pasar un reto, pero sin ventaja detrás: sería suerte)
Serie: **G — Construyendo un bot (y por qué murió)**
Datos usados: `experiments.json` (v=37: description, analysis, verdict, notes, metrics, kpis, params_view, capital) · `exp_details.json` (algo, code, filters) · `series/20260610_140954_p-pasar-ejecutable-v37.json` (retornos de la cartera ×2 con señales de ayer, 2007–2024) · fila #37 de la tabla «Con tu capital» (`docs/youtube/`).

## Títulos (opciones)
1. Monte Carlo para principiantes: 4,000 historias de un mismo bot
2. Cómo fabriqué 4,000 historias alternativas con bloques de 5 días
3. Una historia no es una estadística: simulé 4,000 retos de fondeo

## Miniatura
Fondo #09090b. Una baraja de cartas que se mezcla y de la que salen muchas curvas finas desde un solo tronco; una de las curvas, en verde (#22c55e), toca una línea de meta. Texto grande: «BARAJAR EL PASADO». Logo ATLAS en la esquina superior derecha. (No repite las palabras de los títulos.)

---

## VIDEO LARGO (16:9, ≈ 4:30)

**[0:00 — Gancho]** (pantalla — BOCETO: la curva real de series/…v37.json cortada en bloques de colores que se barajan y forman una curva nueva; contador «4,000 historias»)
Mi bot tiene una sola historia real. Pero esa historia es una de las muchas que podrían haber ocurrido. Así que corté sus días en bloques de 5, los barajé y fabriqué 4,000 historias distintas con las mismas piezas.

**[0:16 — Este es el experimento #37]** (pantalla — BOCETO: rótulo «EXPERIMENTO #37 · PROBABILIDAD DE APROBAR (VERSIÓN EJECUTABLE)» con el logo ATLAS; la URL pequeña debajo)
Este es el experimento #37 de ATLAS Lab: Probabilidad de aprobar, versión ejecutable. Todos los resultados están en la página del experimento. Hoy me concentro en el método, la simulación de Monte Carlo, y en lo que sí y no puede decirte.

**[0:33 — Por qué simular]** (pantalla — BOCETO: una sola curva con la leyenda «lo que pasó» y, difuminadas detrás, muchas curvas con «lo que pudo pasar»)
Un reto de fondeo se pasa o no se pasa, pero con una sola historia no sabes si fue mérito o suerte. Un reto de fondeo es el desafío en que una empresa, una prop firm, te presta una cuenta grande si subes 10% sin romper sus límites. Para estimar una probabilidad hay que repetir el experimento muchas veces, y el mercado no se deja repetir. Entonces se simula: Monte Carlo es, simplemente, usar el azar de forma controlada y repetirlo miles de veces.

**[1:06 — La receta en cinco pasos]** (pantalla — BOCETO: cinco tarjetas que se encienden en orden: retornos diarios → bloques de 5 días → pegar hasta el horizonte → aplicar las reglas → contar)
Uno: tomo los retornos diarios del bot, con ×2 y señales de ayer, entre 2007 y 2024. Dos: los corto en bloques de 5 días. Tres: elijo bloques al azar y los pego hasta cubrir un horizonte. Cuatro: día a día aplico las reglas del reto: llegar a +10%, no caer 10% desde el máximo, no perder 5% en un solo día, y operar al menos 4 días. Cinco: miro si esa historia llegó al +10% antes de romper una regla. Y repito los pasos tres a cinco 4,000 veces.

**[1:41 — Por qué bloques y no días sueltos]** (pantalla — BOCETO: dos tiras de barras, una con días barajados uno a uno que pierde sus rachas y otra con bloques de 5 donde las rachas siguen juntas; el rótulo «ilustración, no es dato real»)
Barajar días sueltos rompería algo importante: las rachas. En los mercados, los días buenos y los malos tienden a venir en grupos. Barajar bloques de 5 días conserva esa estructura dentro de cada bloque y mezcla entre bloques. No es perfecto, pero es más honesto que tratar cada día como una moneda independiente.

**[2:02 — Tres horizontes]** (pantalla — BOCETO: tres barras horizontales que crecen: 6.4% (252 días ≈ 0.8 años), 18.7% (504 días ≈ 1.6 años), 37.5% (2,000 días ≈ 6.3 años); marca de la mediana 516 días)
| Horizonte | Probabilidad de pasar |
|---|---|
| 252 días de operación (≈0.8 años) | 6.4% |
| 504 días (≈1.6 años) | 18.7% |
| 2,000 días (≈6.3 años, sin límite práctico) | 37.5% |
Un detalle: los datos tienen unas 318 observaciones por año de calendario, así que 252 días son cerca de 0.8 años, no un año. La mediana de los que pasan tarda 516 días, cerca de 1.6 años.

**[2:23 — Qué puede decir y qué no]** (pantalla — BOCETO: dos columnas: «puede decir» con tick (una probabilidad bajo ciertas reglas; cómo crece con el plazo) y «no puede decir» con aviso (que el futuro se parezca al pasado; que haya ventaja))
Una simulación así puede decir cuál sería la probabilidad si los días futuros se parecieran a los días pasados, bajo estas reglas. No puede decir que el futuro se parezca al pasado. Tampoco crea ventaja: el Sharpe de la cartera es menos 0.03, así que pasar es cuestión de suerte, y el bot no gana después. Además, la cartera une dos cestas distintas en 2014, siete divisas más oro hasta 2013 y 15 activos desde 2014, por lo que estos retornos sirven para simular el reto, no como el resultado de una cuenta.

**[3:00 — No es la prueba del laboratorio]** (pantalla — BOCETO: checklist de exp_details.filters: probabilidad de pasar ✗ · Sharpe 2007–2024 ✗ · batir a comprar y esperar ✗ · Monte Carlo de permutación — · Deflated Sharpe — · costos completos —)
Una aclaración sobre el nombre. El laboratorio tiene su propia prueba Monte Carlo, de permutación, con p menor a 0.05. Esta no lo es: aquí el remuestreo por bloques sirve para simular el reto. Por eso el tablero de filtros la marca como no aplicada. El criterio de probabilidad no se cumple, el Sharpe de menos 0.03 queda bajo el 0.30 del laboratorio, y no bate a comprar y esperar, con menos 7.1% frente a más 68.7%. El Deflated Sharpe, que descuenta la suerte de haber probado muchas ideas, se calcula en el experimento 38; solo hay deslizamiento de 0.2% en el corte automático.

**[3:40 — Con tu capital]** (pantalla — BOCETO: curva real de series/…v37.json: bot −7.1% sobre comprar y esperar +68.7%; tarjeta «Con tu capital»: −$7,102 contra +$68,723, 2007–2024)
Con $100,000 simulados entre 2007 y 2024, esa cartera ×2 termina en −$7,102. Comprar y esperar la misma cesta: +$68,723. Aquí la cartera no es una inversión: es la materia prima de la simulación. Es una simulación histórica, no una promesa; con $10,000 serían la décima parte.

**[3:59 — Ficha del experimento #37]** (pantalla — BOCETO: tarjeta de ficha con sello «PARCIAL», cuatro líneas y la URL atlas-lab-one.vercel.app/e/37; logo ATLAS)
Ficha del experimento #37. Estado: parcial. Cifra clave: 6.4% de probabilidad de pasar en 252 días, 18.7% en 504 y 37.5% sin límite de tiempo, con una mediana de 516 días. Filtro que decidió: el Sharpe de menos 0.03, sin ventaja detrás; pasar sería suerte. Lección: una simulación responde «si el futuro se parece al pasado», no «qué va a pasar». Revísalo completo en atlas-lab-one.vercel.app/e/37. Contenido educativo, no es asesoría financiera. El trading no se promete: se prueba.

---

## SHORT (9:16, ≈ 48 s)
Título del Short: Barajé mi bot en bloques de 5 días: 4,000 historias #shorts
Fórmula visual (CLAUDE.md del canal): b-roll vertical real con overlay 0.6, Ken Burns alternado, subtítulos karaoke en MAYÚSCULAS con cifras en rojo, ticker arriba, whoosh + flash en cada corte; golpe (bass + sacudida) solo en 0-3 s y 28-40 s.

**[0-3 s]** "Barajé los días de mi bot en bloques de 5 y fabriqué 4,000 historias."
- Boceto: b-roll de una baraja mezclándose (kb=in); «4,000» gigante en blanco; golpe de bass.

**[3-14 s]** "Se llama Monte Carlo: usar el azar de forma controlada y repetirlo miles de veces. Con una sola historia no sabes si fue mérito o suerte."
- Boceto: una curva real y, detrás, miles de curvas finas apareciendo.

**[14-28 s]** "En cada historia: ¿llega a más 10% sin caer 10% desde el máximo ni perder 5% en un día? Con 252 días: 6.4%. Con 504 días: 18.7%. Sin límite de tiempo: 37.5%."
- Boceto: línea verde en +10% y roja en −10%; tres barras que crecen con tick.

**[28-40 s]** "Pero el Sharpe de la cartera es menos 0.03: no hay ventaja. Pasar es suerte. Una simulación responde «si el futuro se parece al pasado», no «qué va a pasar»."
- Boceto: rótulo «SHARPE −0.03 = SIN VENTAJA»; sacudida al aparecer el 0.03.

**[40-48 s]** "Video completo en el canal. Experimento 37 completo en el enlace. No es asesoría financiera. Cuatro mil historias, ¿cuántas pasan en 252 días? 6.4%."
- Boceto: sello «PARCIAL»; logo ATLAS y «EXPERIMENTO #37 · ENLACE». Loop: la pregunta final se responde con la cifra.

## Descripción (YouTube)
**Video largo**
https://atlas-lab-one.vercel.app/e/37?utm_source=youtube&utm_medium=video&utm_campaign=exp037-t2
Ficha del experimento #37 (probabilidad de aprobar, versión ejecutable): parcial. Probabilidad de pasar un reto: 6.4% en 252 días, 18.7% en 504 y 37.5% sin límite de tiempo (mediana 516 días); Sharpe −0.03, sin ventaja detrás.
Explico el método: 4,000 historias alternativas con bloques de 5 días, las reglas del reto aplicadas día a día y los límites de una simulación Monte Carlo.

Capítulos: 0:00 Gancho · 0:16 Este es el experimento #37 · 0:33 Por qué simular · 1:06 La receta en cinco pasos · 1:41 Por qué bloques y no días sueltos · 2:02 Tres horizontes · 2:23 Qué puede decir y qué no · 3:00 No es la prueba del laboratorio · 3:40 Con tu capital · 3:59 Ficha del experimento #37

**Short**
https://atlas-lab-one.vercel.app/e/37?utm_source=youtube&utm_medium=short&utm_campaign=exp037-t2
Experimento #37: 4,000 historias alternativas de un bot; 6.4% pasa el reto en 252 días, 37.5% sin límite (Sharpe −0.03). Parcial.

Contenido educativo. No es asesoría financiera ni recomendación de inversión.

Etiquetas: Monte Carlo, simulación, bootstrap por bloques, reto de fondeo, prop firm, probabilidad, backtest, bot de trading, Sharpe ratio, azar y suerte, ATLAS Lab

## Rúbrica (autoevaluación — criterios del CLAUDE.md del canal, 1-5)
| hook_0_3s | ritmo | promesa_cumplida | potencial_loop | claridad_no_traders | honestidad_atlas | audio | cta |
|---|---|---|---|---|---|---|---|
| 4 | 4 | 5 | 4 | 5 | 5 | 4 | 4 |

Promedio: **4.38** → cumple el corte (≥ 4.0; hook ≥ 4 y honestidad 5).
Notas: el hook es una imagen simple (barajar el pasado) con dos cifras (5 y 4,000). Punto débil: «Monte Carlo» es un término técnico; se define con la frase «azar controlado repetido miles de veces» y con la ilustración de las curvas.

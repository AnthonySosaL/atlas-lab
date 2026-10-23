# Experimento #9 — Tema 3: cómo se fabrican 4,000 exámenes con una sola historia (remuestreo por bloques)

Tema 3 de 4 del experimento #9
Qué aporta frente a los otros temas: es el tema de método. Explica paso a paso el remuestreo por bloques (bootstrap) y el Monte Carlo del simulador: 4,000 exámenes de 60 días a partir de seis años de historia, bloques de 5 días, y el control del mercado plano (37.7%). El tema 1 cuenta el resultado, el tema 2 mira el COVID y el tema 4 los dos modos de reventar.
Estado del guion: **BORRADOR — pendiente de aprobación**
Estado del experimento: **parcial** (en el sitio: neutral). Herramienta de simulación, no una estrategia · Serie E (Gestión de riesgo: lo poco que se sostuvo) · 1 largo + 1 Short
Datos usados: `experiments.json` (v=9: params con n_sims 4,000 y bloque 5, metrics, kpis, params_view, verdict, notes, capital con su aviso), `exp_details.json` (algo y filters del v=9), `series/20260607_210548_simulador-prop-firm-cartera-v9.json` (curva 1 = cesta base sin apalancar) y tabla «Con tu capital» de docs/youtube (fila 9). Solo hay en los datos los puntos ×1, ×4 y ×8 por apalancamiento; el guion no cita los otros.
Producción: b-roll real con overlay oscuro 0.6, Ken Burns alterno, subtítulos karaoke en MAYÚSCULAS con cifras en rojo, golpe de bajo solo en 1–2 momentos. Rojo `#e11d2a`, verde `#22c55e`, fondo `#09090b`.

## Títulos (3 opciones)
1. Con seis años de historia fabriqué 4,000 exámenes de fondeo: el remuestreo por bloques
2. Monte Carlo y bootstrap explicados con un examen de prop firm (47.9% de aprobar a ×4)
3. ¿Cómo se simula un examen de fondeo? 4,000 intentos, bloques de 5 días

## Miniatura
Fondo negro `#09090b`. Una curva real cortada en bloques de colores que se reordenan en muchas líneas nuevas que salen en abanico. Texto grande: «4,000 EXÁMENES» (2 palabras) en blanco y «1 HISTORIA» en rojo. Logo ATLAS esquina inferior derecha.

---

## VIDEO LARGO (16:9, ≈ 4:18 min)

**[0:00 — Gancho]** (pantalla: una curva que se multiplica)
Con seis años de historia fabriqué 4,000 exámenes de fondeo distintos. Con un apalancamiento de ×4, se pasa en el 47.9% de ellos. Así se hace.
> Boceto: una curva real que se corta en bloques y se multiplica en miles de curvas nuevas en abanico; contador hasta 4,000. Ken Burns «in».

**[0:13 — Qué experimento es]** (pantalla: rótulo con el número y el nombre)
Este es el experimento #9 de ATLAS Lab: Simulador de prop firm, cartera. Todos los resultados están en la página del experimento. Hoy explico el método.
> Boceto: rótulo «EXPERIMENTO #9 · Simulador de prop firm (cartera)» y URL pequeña. kb=out.

**[0:24 — El problema: solo hay una historia]** (pantalla: una curva)
Para saber qué tan probable es pasar un examen necesitas muchos exámenes, y la historia solo te da uno: la que ocurrió. Si miras 2019 a 2024 una vez, obtienes un único camino. Eso no basta para hablar de probabilidades. Hace falta una forma de generar muchos caminos que se parezcan al mercado real, pero que nunca ocurrieron.
> Boceto: una sola curva real y un signo de interrogación sobre «¿qué tan probable?». kb=in.

**[0:47 — El remuestreo por bloques]** (pantalla: curva cortada en bloques)
Se llama remuestreo por bloques, o bootstrap. Paso uno: corto la historia real de la cesta en bloques de 5 días seguidos. Paso dos: extraigo bloques al azar y los pego uno detrás de otro, hasta formar un camino de 60 días, la duración del examen. Los bloques conservan lo que pasa en cinco días seguidos; el orden de los bloques es nuevo. Paso tres: repito el proceso 4,000 veces.
> Boceto: la curva real cortada en bloques de 5 días de colores; flechas que sacan bloques al azar y los encadenan en un camino nuevo de 60 días; contador de 4,000. kb=out.

**[1:16 — Cómo se mide cada examen]** (pantalla: reglas)
A cada camino se le aplican las reglas del examen: ganar 10%, sin perder más de 5% en un día ni más de 10% en total, en 60 días. Lo que se cuenta es en cuántos de los 4,000 caminos se pasa, en cuántos se revienta por la caída total y en cuántos por la pérdida diaria. Y se repite todo con distintos apalancamientos: ×1, ×4 y ×8, entre otros.
> Boceto: tres contadores: «pasa», «revienta por caída total», «revienta por pérdida diaria» que suben mientras caen caminos. kb=in.

**[1:48 — Lo que salió]** (pantalla: barras por apalancamiento)
Con ×1, solo se pasa el 5.4%: en 60 días rara vez se llega al 10%. Con ×4, el 47.9%. Con ×8, baja a 41.4%. Y la probabilidad de reventar por pérdida diaria sube de 3.2% a ×1 hasta 51.9% a ×8. A ×4, la cuenta revienta el 50.4% de las veces: 16.6% por caída total y 33.8% por pérdida diaria.
> Boceto: barras de probabilidad de pasar (5.4%, 47.9%, 41.4%) y una línea roja de reventar por pérdida diaria (3.2% → 51.9%); pastel del 50.4% en dos rojos. kb=out.

**[2:22 — El control del mercado plano]** (pantalla: línea plana)
Todo método de simulación necesita un control. Aquí: repetir el ejercicio con retornos de media cero, es decir, un mercado sin ventaja, que no sube ni baja en promedio. A ×4, todavía se pasa el 37.7%. Eso dice cuánto de aprobar es la apuesta y cuánto la subida del mercado: la diferencia con el 47.9% es lo que aporta la subida de la cesta en esos años.
> Boceto: línea plana con 37.7% y la cesta real con 47.9%; la diferencia sombreada. kb=in.

**[2:50 — Los puntos ciegos del método]** (pantalla: tres avisos)
Un método honesto cuenta lo que no ve. Uno: se remuestrea un periodo alcista, de 2019 a 2024. Dos: no hay costos de operación. Tres: no hay una muestra aparte para validar. Y un cuarto, de método: al barajar bloques de 5 días, una caída larga y seguida puede quedar subestimada. Por eso el veredicto del experimento es parcial.
> Boceto: cuatro tarjetas ámbar; sello «PARCIAL». kb=out.

**[3:15 — Con tu capital]** (pantalla: tarjeta «Con tu capital» con aviso)
Con 10,000 dólares, la curva base sin apalancar daría más 5,761, frente a más 5,175 de la cesta sin estrategia. Con 100,000, la tabla de ATLAS da más 57,609 contra más 51,747. Esa curva no muestra el ×4 del examen, donde la cuenta revienta el 50.4% de las veces.
> Boceto: tarjeta de capital con aviso ámbar «curva sin apalancar; el examen usa ×4»; selector $10,000 / $100,000.

**[3:40 — Ficha del experimento #9]** (pantalla: tarjeta con la URL)
Ficha del experimento 9. Estado: parcial. Cifra clave: 4,000 simulaciones; a ×4 se pasa el 47.9% y la cuenta revienta el 50.4%; en un mercado plano se pasa el 37.7%. Filtros que decidieron: el criterio propio del script y ninguna validación aparte. Lección: la probabilidad de aprobar depende del tamaño de la apuesta y del método con que se simula. Revísalo completo en atlas-lab-one.vercel.app/e/9.
> Boceto: tarjeta oscura con «#9 · PARCIAL», cifras clave y «atlas-lab-one.vercel.app/e/9» en grande; logo.

**[4:09 — Cierre]**
Todos los datos en atlas-lab-one.vercel.app, experimento 9. Contenido educativo, no es asesoría financiera. El trading no se promete: se prueba.
> Boceto: pantalla oscura con la frase de marca.

---

## SHORT (9:16, ≈ 46 s)

**[0-3 s]** «Fabriqué 4,000 exámenes de fondeo. A ×4, pasas 47.9%.»
> Boceto: curva que se multiplica en abanico; contador 4,000 y «47.9%» con sacudida; b-roll de pantallas de trading, Ken Burns «in», overlay 0.6.

**[3-14 s]** «Se llama remuestreo por bloques: corto la historia en bloques de 5 días, los barajo y armo caminos nuevos de 60 días. Repetido 4,000 veces.»
> Boceto: bloques de colores que se barajan y forman caminos; karaoke con «BLOQUES DE 5 DÍAS» en rojo; Ken Burns «out».

**[14-26 s]** «A cada camino le aplico las reglas del examen: ganar 10%, sin perder 5% en un día ni 10% en total. Con ×1 se pasa el 5.4%; con ×8, el 41.4%.»
> Boceto: tres tarjetas de reglas y barras de probabilidad; whoosh y flash blanco.

**[26-38 s]** «Control: en un mercado plano, sin ventaja, a ×4 aún se pasa el 37.7%. Pero es un periodo alcista, sin costos y sin muestra aparte.»
> Boceto: línea plana con 37.7%; tres avisos ámbar; Ken Burns «in».

**[38-46 s]** «Un simulador es útil si cuenta lo que no ve. Experimento nueve completo en el enlace. El video completo está en el canal. No es asesoría financiera.»
> Boceto: vuelve el abanico de curvas (loop con el gancho); texto «Experimento #9 completo en el enlace» y logo.

---

## Descripción de YouTube (video largo)
https://atlas-lab-one.vercel.app/e/9?utm_source=youtube&utm_medium=video&utm_campaign=exp009-t3
Ficha del experimento #9 (Simulador de prop firm): estado parcial · 4,000 simulaciones · a ×4 pasa el 47.9% y revienta el 50.4% · mercado plano a ×4: 37.7% · cesta base: Sharpe 0.70, volatilidad 9.4%.
Cómo funciona el remuestreo por bloques (bootstrap) y el Monte Carlo de un examen de fondeo tipo FTMO con una cesta de forex, metales, índices y energía (2019-2024), y cuáles son sus puntos ciegos.
Contenido educativo. No es asesoría financiera ni recomendación de inversión.

## Descripción del Short
https://atlas-lab-one.vercel.app/e/9?utm_source=youtube&utm_medium=short&utm_campaign=exp009-t3
Experimento #9 · parcial · 4,000 exámenes simulados con bloques de 5 días; a ×4 se pasa el 47.9%. No es asesoría financiera.

Capítulos: 0:00 Gancho · 0:13 Qué experimento es · 0:24 El problema: solo hay una historia · 0:47 El remuestreo por bloques · 1:16 Cómo se mide cada examen · 1:48 Lo que salió · 2:22 El control del mercado plano · 2:50 Los puntos ciegos del método · 3:15 Con tu capital · 3:40 Ficha del experimento #9 · 4:09 Cierre

Etiquetas: bootstrap, remuestreo por bloques, Monte Carlo, simulación de trading, prop firm, FTMO, challenge de fondeo, apalancamiento, gestión de riesgo, backtest, ATLAS Lab, trading con datos

## Rúbrica (autoevaluación, 1–5)
| Criterio | Short | Largo |
|---|---|---|
| hook_0_3s | 4 | 4 |
| ritmo | 4 | 4 |
| promesa_cumplida | 5 | 5 |
| potencial_loop | 5 | 4 |
| claridad_no_traders | 4 | 4 |
| honestidad_atlas | 5 | 5 |
| audio | 4 | 3 |
| cta | 4 | 4 |
| **Promedio** | **4.38** | **4.13** |

Notas: los datos solo traen ×1, ×4 y ×8 por apalancamiento; el guion no cita ×2, ×3 ni ×6. El cuarto punto ciego (caída larga y seguida subestimada) es una limitación general del método, no una cifra. El Short cumple hook ≥ 4 y honestidad 5.

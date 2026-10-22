# Experimento #36 — Calidad intrínseca sin reglas de prop firm

Estado del guion: **BORRADOR — pendiente de aprobación**
Estado del experimento: **MURIÓ** (sin reglas y con las señales de ayer, ni con ×2 hay ventaja: Sharpe −0.04)
Serie: **G — Construyendo un bot (y por qué murió)**
Datos usados: `experiments.json` (v=36: analysis, verdict, notes, metrics, kpis, params_view, capital) · `exp_details.json` (algo, filters) · `series/20260610_140835_calidad-intrinseca-sin-reglas-prop-v36.json` (curva 1 = ×2 sin reglas 2014–2024; curva 2 = comprar y esperar) · fila #36 de la tabla «Con tu capital» (`docs/youtube/`).

## Títulos (opciones)
1. Quité las reglas de fondeo a mi bot: con ×4 se hunde 97.8%
2. ¿Reglas o estrategia? Sin reglas, ×3 pierde 7.89% al año
3. Mi bot sin red de seguridad: ×2 rinde −0.6% al año

## Miniatura
Fondo #09090b. Texto gigante rojo "−97.8%"; debajo, en blanco, "SIN REGLAS". Elemento visual: una curva cayendo casi en vertical hasta el borde inferior. Logo ATLAS en la esquina superior derecha. (No repite los títulos.)

---

## VIDEO LARGO (16:9, ≈ 6:10)

**[0:00 — Gancho]** (pantalla — BOCETO: curva ×4 de la ficha del experimento cayendo hasta el borde; contador que baja de 0 a −97.8% en rojo; texto «SIN REGLAS»)
Cuando una estrategia no pasa un reto de fondeo, es fácil culpar a las reglas: «si no me limitaran, funcionaría». Así que quité todas las reglas a mi bot y lo dejé correr con ×2, ×3 y ×4. Con ×4 se hundió 97.8% desde su máximo.

**[0:21 — La pregunta]** (pantalla — BOCETO: balanza con dos platos, «estrategia mala» vs «reglas demasiado duras»; texto: «pérdida diaria máx. 5% · caída máx. 10%» tachado)
La pregunta es sencilla: ¿la estrategia es mala o las reglas son el cuello de botella? Para separarlas, corrí exactamente la misma estrategia sin la pérdida diaria máxima de 5% y sin el límite de caída de 10% que imponen las empresas de fondeo, las prop firms. Si la estrategia tuviera calidad propia, sin las reglas debería lucirse.

**[0:47 — Qué se probó]** (pantalla — BOCETO: checklist de exp_details.filters: filtro VIX 28 / crédito 40 días ✓ · señal de ayer ✓ · corte automático −3% ✓ · deslizamiento 0.2% ✓ · reglas de prop firm: ninguna; chips: ×2, ×3, ×4 · 2014–2024 y 2007–2013)
La estrategia es la de siempre: una cesta de 15 activos, un filtro de pánico con el VIX, el índice del miedo, sobre 28 y el crédito bajo su media de 40 días, decidido con el cierre de ayer, y un corte automático del 3% diario. Aquí el día del disparo se opera completo: no se supone que el bot reaccione dentro del día. Se mide con ×2, ×3 y ×4 en 2014–2024 y en 2007–2013, fuera de muestra, es decir, años que el bot no vio al diseñarse. Es un diagnóstico, no un examen de aprobado o reprobado.

**[1:29 — Cómo leer la tabla]** (pantalla — BOCETO: tres iconos con una frase cada uno: balanza para el Sharpe «¿compensa el riesgo?», calendario para el crecimiento anual «¿cuánto por año?», montaña para la caída máxima «¿qué tan hondo duele?»)
Voy a medir tres cosas por apalancamiento, y conviene leerlas como el boletín de un paciente. El Sharpe dice si el esfuerzo compensa el riesgo: por debajo de cero, la estrategia pierde en promedio. El crecimiento anual dice cuánto gana o pierde por año. Y la caída máxima es el peor tramo desde un pico hasta un valle: qué tan hondo habría llegado a doler.

**[1:57 — Resultados 2014–2024]** (pantalla — BOCETO: tabla que se llena por filas; la última fila crece y se pinta de rojo; al lado, minigráfico de caída máxima con tres barras que bajan)
Primero, 2014–2024.
| 2014–2024 | Sharpe | Crecimiento anual | Caída máxima |
|---|---|---|---|
| ×2 | −0.04 | −0.61% | −19.7% |
| ×3 | −0.58 | −7.89% | −61.9% |
| ×4 | −1.80 | −31.09% | −97.8% |
Con ×2, la estrategia no rinde nada: −0.6% al año. Con ×3 pierde 7.89% al año y cae 61.9% desde su pico. Con ×4 pierde 31.1% al año y llega a −97.8%.

**[2:13 — Resultados 2007–2013]** (pantalla — BOCETO: segunda tabla debajo de la primera con el rótulo «fuera de muestra, con la crisis de 2008»; resaltar que las tendencias se repiten)
| 2007–2013 | Sharpe | Crecimiento anual | Caída máxima |
|---|---|---|---|
| ×2 | 0.00 | −0.16% | −11.8% |
| ×3 | −0.36 | −4.08% | −31.7% |
| ×4 | −1.42 | −22.03% | −83.1% |
El periodo anterior dice lo mismo. Sharpe 0.00 con ×2; caídas de −31.7% con ×3 y de −83.1% con ×4. No es mala suerte de una década: es el mismo patrón en las dos.

**[2:29 — La caída máxima es lo que de verdad duele]** (pantalla — BOCETO: dos vasos de agua, uno con caída moderada y otro casi vacío, rotulados «−61.9%» y «−97.8%»; la línea de regreso al punto de partida se alarga)
Fíjate en la caída máxima, porque es lo que hace daño de verdad. Una cuenta que cae 61.9% o 97.8% difícilmente se recupera solo con paciencia: cuanto más cae, más difícil es volver al punto de partida. Por eso el veredicto dice que con ×3 o más la estrategia se autodestruye. No es un mal año aislado; es lo que hace el apalancamiento cuando no hay ventaja que amplificar.

**[2:59 — Resumen en tres frases]** (pantalla — BOCETO: tres tarjetas que entran una a una con una cifra cada una: «×2: −0.6% al año» · «caída máxima: −19.7% → −61.9% → −97.8%» · «2007–2013: −11.8% → −31.7% → −83.1%»)
Resumen en tres frases. Uno: con ×2 el bot no gana ni pierde de forma relevante; queda en −0.6% al año. Dos: cada vez que sube el apalancamiento, la caída máxima se dispara, de −19.7% a −61.9% y a −97.8%. Tres: el periodo anterior repite el patrón con números más suaves, −11.8%, −31.7% y −83.1%. Es la misma historia en dos épocas distintas.

**[3:27 — Qué significa]** (pantalla — BOCETO: balanza que se inclina hacia «estrategia»; frase: «las reglas no eran el cuello de botella»)
La conclusión del diagnóstico es incómoda. Las reglas de la prop firm no eran el cuello de botella: la estrategia no tiene una calidad propia que proteger. Con ×2 no rinde nada, y más apalancamiento solo acelera la ruina. Apalancar una estrategia sin ventaja no crea ventaja: multiplica el desgaste.

**[3:49 — La lupa del apalancamiento]** (pantalla — BOCETO: una lupa que agranda una línea plana: sobre una estrategia con ventaja (esquema genérico, sin cifras) agranda la ganancia; sobre la estrategia del experimento agranda un resultado de cero hasta convertirlo en una caída)
Una analogía para quedarte con la idea: apalancar es ponerle una lupa al resultado. Si hay una ventaja, la lupa la agranda. Si no la hay, la lupa agranda lo que haya, y aquí no había nada. Con ×2 el resultado queda en cero; con ×3 y ×4 la lupa lo convierte en una caída. El orden importa: primero hay que encontrar una ventaja, y solo después tiene sentido decidir cuánto apalancarla.

**[4:20 — Un matiz sobre la salida]** (pantalla — BOCETO: tarjeta comparativa «opera completo el día del disparo: Sharpe −0.04, −0.6%» vs «con la salida medida (φ = 0.94): Sharpe 0.02, −0.1%» con la leyenda «ninguna es una ventaja»)
Un matiz para ser justos. Si en vez de operar completo el día del disparo se usa la salida medida con datos horarios, con un φ de 0.94, el ×2 da Sharpe 0.02 y −0.1% al año. Mejora un poco, pero tampoco es una ventaja. Y en los costos solo hay deslizamiento de 0.2% en el corte automático: sin diferencial de compra y venta ni la comisión por rotación del laboratorio.

**[4:51 — El marcador de filtros]** (pantalla — BOCETO: checklist de exp_details.filters: Sharpe 2014–2024 ✗ · Sharpe 2007–2013 ✗ · batir a comprar y esperar ✗ · ×3 y ×4 ✗ · señal rezagada ✓ · costos completos —)
El tablero de filtros lo resume. Con ×2 y sin reglas, el Sharpe de 2014–2024 es −0.04, y el de 2007–2013, 0.00: los dos bajo el 0.30 del laboratorio. No bate a comprar y esperar, con −6.1% frente a +58.9%. Y ni con ×3 ni con ×4 aparece ventaja. Pasa uno: la señal está rezagada y no mira el futuro. Los costos completos no se aplicaron: solo hay deslizamiento de 0.2% en el corte automático.

**[5:23 — Con tu capital]** (pantalla — BOCETO: curva real de series/…v36.json: ×2 sin reglas terminando en −6.1% sobre la gris de comprar y esperar en +58.9%; tarjeta «Con tu capital»: −$6,094 contra +$58,879)
Con $100,000 simulados entre 2014 y 2024, el bot ×2 sin reglas termina en −$6,094. Comprar y esperar la misma cesta: +$58,879. Es una simulación histórica, no una promesa; con $10,000 serían la décima parte.

**[5:39 — Conclusión]** (pantalla — BOCETO: sello «NO SIRVIÓ»; KPIs −0.04 · −0.6% · −19.7% · −61.9% · −97.8%)
Veredicto: no sirvió. Sin reglas de prop firm y con las señales de ayer, ni con ×2 hay ventaja, y con ×3 o más la cuenta se autodestruye, con caídas de −61.9% a −97.8%. El techo es de la estrategia, no de las reglas.

**[5:59 — Cierre]** (pantalla — BOCETO: logo ATLAS + URL; curva en caída libre como fondo)
Todos los datos están en atlas-lab-one.vercel.app, experimento 36. Contenido educativo, no es asesoría financiera. El trading no se promete: se prueba.

---

## SHORT (9:16, ≈ 50 s)
Título del Short: Sin reglas, mi bot ×4 se hundió 97.8% #shorts
Fórmula visual (CLAUDE.md del canal): b-roll vertical real con overlay 0.6, Ken Burns alternado, subtítulos karaoke en MAYÚSCULAS con cifras en rojo, ticker arriba, whoosh + flash en cada corte; golpe (bass + sacudida) solo en 0-3 s y 28-40 s.

**[0-3 s]** "Sin reglas, mi bot ×4 se hundió 97.8%."
- Boceto: b-roll de un acantilado o derrumbe (kb=in); «−97.8%» gigante en rojo; golpe de bass.

**[3-14 s]** "Es fácil pensar: «si no me limitaran las reglas del reto, mi estrategia funcionaría». Quité todas las reglas de mi bot y lo probé con ×2, ×3 y ×4."
- Boceto: candado que se abre; tres fichas «×2», «×3», «×4» entrando.

**[14-28 s]** "Con ×2: Sharpe menos 0.04 y menos 0.6% al año. Con ×3: menos 7.89% al año y una caída de 61.9%. Con ×4: menos 31.1% al año y caída de 97.8%."
- Boceto: tres barras rojas de caída máxima que crecen hacia abajo (−19.7%, −61.9%, −97.8%); texto con el crecimiento anual bajo cada barra.

**[28-40 s]** "Las reglas no eran el problema. La estrategia no tenía una calidad propia que proteger. Más apalancamiento solo acelera la ruina: sin ventaja, multiplicar solo multiplica el desgaste."
- Boceto: balanza que se inclina hacia «ESTRATEGIA»; sacudida; subtítulo «NO ERAN LAS REGLAS».

**[40-50 s]** "Comprar y esperar la misma cesta: más 58.9%. Mi bot ×2: menos 6.1%. Video completo en el canal. No es asesoría financiera. Sin reglas, ¿cuánto se hundió el ×4?"
- Boceto: dos cifras enfrentadas (+58.9% verde / −6.1% rojo); logo ATLAS. Loop: la pregunta final se responde con el gancho «se hundió 97.8%».

## Descripción (YouTube)
Quité todas las reglas de fondeo (pérdida diaria máxima y límite de caída) a mi bot para saber si el problema eran las reglas o la estrategia. Con ×2: Sharpe −0.04 y −0.6% al año; con ×3, −7.89% al año y caída de −61.9%; con ×4, −31.1% al año y caída de −97.8% (2014–2024). Experimento #36.

Datos completos: https://atlas-lab-one.vercel.app (experimento #36)

Capítulos: 0:00 Gancho · 0:21 La pregunta · 0:47 Qué se probó · 1:29 Cómo leer la tabla · 1:57 Resultados 2014–2024 · 2:13 Resultados 2007–2013 · 2:29 La caída máxima es lo que de verdad duele · 2:59 Resumen en tres frases · 3:27 Qué significa · 3:49 La lupa del apalancamiento · 4:20 Un matiz sobre la salida · 4:51 El marcador de filtros · 5:23 Con tu capital · 5:39 Conclusión · 5:59 Cierre

Contenido educativo. No es asesoría financiera ni recomendación de inversión.

Etiquetas: prop firm, reglas de fondeo, apalancamiento, bot de trading, backtest, caída máxima, drawdown, Sharpe ratio, gestión de riesgo, estrategia de trading, ATLAS Lab

## Rúbrica (autoevaluación — criterios del CLAUDE.md del canal, 1-5)
| hook_0_3s | ritmo | promesa_cumplida | potencial_loop | claridad_no_traders | honestidad_atlas | audio | cta |
|---|---|---|---|---|---|---|---|
| 5 | 4 | 5 | 5 | 4 | 5 | 4 | 4 |

Promedio: **4.50** → cumple el corte (≥ 4.0; hook ≥ 4 y honestidad 5).
Notas: el hook es una sola cifra extrema (−97.8%) y verificable; el loop es pregunta-respuesta. Punto débil: «caída máxima» y «Sharpe» se explican en el largo; en el Short se confía en el rótulo en pantalla.

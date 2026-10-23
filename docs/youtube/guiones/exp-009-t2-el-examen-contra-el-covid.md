# Experimento #9 — Tema 2: el examen de fondeo contra el COVID (−24.2% frente a un límite de 10%)

Tema 2 de 4 del experimento #9
Qué aporta frente a los otros temas: el tema 1 cuenta que pasar el examen depende del tamaño de la apuesta (37.7% en mercado plano); este mira la letra pequeña frente a la historia real: la cesta del simulador, sin apalancar, cayó −24.2% entre el 7 de enero y el 22 de marzo de 2020, y el límite de caída total del examen es 10%. Explica qué ve y qué no ve un simulador que baraja días. El tema 3 explica el remuestreo y el tema 4 los dos modos de reventar.
Estado del guion: **BORRADOR — pendiente de aprobación**
Estado del experimento: **parcial** (en el sitio: neutral). Herramienta de simulación, no una estrategia · Serie E (Gestión de riesgo: lo poco que se sostuvo) · 1 largo + 1 Short
Datos usados: `experiments.json` (v=9: params, metrics, kpis, params_view, verdict, notes, capital con su aviso; v=13: verdict, para la cuenta a ×2 que reventó en el COVID), `series/20260607_210548_simulador-prop-firm-cartera-v9.json` (curva 1 = cesta base sin apalancar; de ahí los valores del 7-ene y del 22-mar de 2020) y tabla «Con tu capital» de docs/youtube (fila 9). Las cifras con 10,000 dólares son las de la tabla de 100,000 divididas entre 10.
Producción: b-roll real con overlay oscuro 0.6, Ken Burns alterno, subtítulos karaoke en MAYÚSCULAS con cifras en rojo, golpe de bajo solo en 1–2 momentos. Rojo `#e11d2a`, verde `#22c55e`, fondo `#09090b`.

## Títulos (3 opciones)
1. La cesta del examen de fondeo cayó −24.2% en el COVID. El límite de la prueba es 10%
2. Qué no ve un simulador de prop firm: el crash de 2020 frente a las reglas del examen
3. Antes de pagar un challenge de fondeo: pregunta si tu estrategia sobrevive a un 2020

## Miniatura
Fondo negro `#09090b`. La curva real de la cesta cayendo en rojo de enero a marzo de 2020 hasta «−24.2%»; una línea horizontal verde punteada marcada «LÍMITE 10%» muy por encima del fondo. Texto grande: «2020 VS 10%» (3 palabras). Logo ATLAS arriba a la derecha.

---

## VIDEO LARGO (16:9, ≈ 4:33 min)

**[0:00 — Gancho]** (pantalla: curva cayendo y una línea de 10%)
La cesta que usé para simular exámenes de fondeo cayó menos 24.2% entre el 7 de enero y el 22 de marzo de 2020. El límite de caída total del examen es de 10%.
> Boceto: la curva real baja de 11,437 a 8,674 y atraviesa la línea punteada del 10% con sacudida. Ken Burns «in».

**[0:16 — Qué experimento es]** (pantalla: rótulo con el número y el nombre)
Este es el experimento #9 de ATLAS Lab: Simulador de prop firm, cartera. Todos los resultados están en la página del experimento. Hoy lo pongo frente a la historia.
> Boceto: rótulo «EXPERIMENTO #9 · Simulador de prop firm (cartera)» y URL pequeña. kb=out.

**[0:29 — Las reglas del examen]** (pantalla: tres tarjetas)
El examen que simulo es de tipo FTMO. Para pasar tienes que ganar 10% en 60 días. Para no perder la cuenta, no puedes perder más de 5% en un solo día ni dejar que la cuenta caiga más de 10% en total. Tocas cualquiera de los límites y se acabó. Por eso, la pregunta no es solo cuánto puedes ganar, sino cuánto puede caer lo que operas.
> Boceto: tres tarjetas: «Objetivo +10%», «Pérdida diaria máx. 5%», «Caída total máx. 10%»; reloj de 60 días. kb=in.

**[0:58 — La cesta]** (pantalla: cuatro familias de mercados)
La cesta del simulador reúne forex, metales, índices y energía, con pesos iguales y solo compras, de 2019 a 2024. Sin apalancar tiene un Sharpe de 0.70 y una volatilidad de 9.4% anual. Con esos números, parece una cartera tranquila. Veamos qué le pasó en 2020.
> Boceto: cuatro iconos (forex, oro, índices, petróleo) y tarjeta «Sharpe 0.70 · volatilidad 9.4%». kb=out.

**[1:19 — Enero–marzo de 2020]** (pantalla: curva real)
El 7 de enero de 2020, la curva de la cesta marcaba 11,437 dólares, partiendo de unos 10,000. El 22 de marzo, 8,674. Una caída de menos 24.2%, sin apalancar. Comprar y esperar la cesta tuvo una caída parecida, de menos 23.7%. Es un solo tramo continuo de caída. Y el límite del examen está en 10%.
> Boceto: curva real de enero a marzo de 2020 con marcas «11,437 · 7-ene» y «8,674 · 22-mar», cota «−24.2%» y línea del 10% en verde. Nota: «valores de la curva de la serie». kb=in.

**[1:47 — Y con apalancamiento]** (pantalla: multiplicador)
Con apalancamiento, esa caída se multiplica. El examen que mejor resultado dio en el simulador usa ×4: cada punto que se mueve la cesta se convierte en cuatro puntos en tu cuenta. No he calculado qué habría pasado a ×4 con esa secuencia exacta, pero el experimento 13 probó una cuenta a ×2 sobre el camino histórico real, y reventó en el COVID, al tocar el límite de caída de 10%.
> Boceto: un multiplicador «×4» sobre la curva; tarjeta del #13 con «cuenta a ×2 · reventó en el COVID»; sello rojo. kb=out.

**[2:17 — Lo que ve el simulador]** (pantalla: bloques barajados)
Entonces, ¿por qué el simulador da 47.9% de aprobar a ×4? Porque no reproduce 2020 tal cual. Corta la historia en bloques de 5 días y los baraja, para crear 4,000 exámenes de 60 días. Los días del COVID aparecen, pero troceados y mezclados con días buenos. Es un método válido, pero tiene un punto ciego: puede subestimar una caída larga y seguida. Lo digo como limitación del método.
> Boceto: la curva de 2020 cortada en bloques de colores que se mezclan con bloques verdes; etiqueta «limitación del método». kb=in.

**[2:48 — Los otros límites]** (pantalla: tres avisos)
Y tres avisos más del experimento. Uno: se remuestrea un periodo alcista, de 2019 a 2024. Dos: no hay costos de operación. Tres: no hay una muestra aparte para validar. A ×4, la cuenta revienta el 50.4% de las veces: 16.6% por la caída total y 33.8% por la pérdida diaria.
> Boceto: tres tarjetas ámbar («periodo alcista», «sin costos», «sin muestra aparte») y el desglose 16.6% + 33.8% = 50.4%. kb=out.

**[3:11 — Qué preguntar antes de pagar una cuota]** (pantalla: pregunta)
La enseñanza práctica, educativa y sin recomendaciones: antes de dar por buena cualquier cifra de aprobar un examen, pregunta si se probó sobre una crisis real y seguida, como la de 2020, y no solo sobre días barajados. Esa es la diferencia entre un número de simulador y un camino real.
> Boceto: una lupa sobre «¿se probó con una crisis real?»; dos columnas «días barajados» y «camino real». kb=in.

**[3:32 — Con tu capital]** (pantalla: tarjeta «Con tu capital» con aviso)
Con 10,000 dólares, la curva base sin apalancar daría más 5,761, frente a más 5,175 de la cesta sin estrategia. Con 100,000, la tabla de ATLAS da más 57,609 contra más 51,747. Ojo: esa curva no muestra el ×4 del examen, que revienta el 50.4% de las veces.
> Boceto: tarjeta de capital con aviso ámbar «curva sin apalancar; el examen usa ×4» y las dos cifras en verde atenuado; selector $10,000 / $100,000.

**[3:57 — Ficha del experimento #9]** (pantalla: tarjeta con la URL)
Ficha del experimento 9. Estado: parcial. Cifra clave: a ×4 se pasa el 47.9% y la cuenta revienta el 50.4%; en el COVID, la cesta sin apalancar cayó menos 24.2%. Filtros que decidieron: ninguno de validación; es un remuestreo de un periodo alcista, sin costos. Lección: un simulador de días barajados no sustituye a una crisis real. Revísalo completo en atlas-lab-one.vercel.app/e/9.
> Boceto: tarjeta oscura con «#9 · PARCIAL», cifras clave y «atlas-lab-one.vercel.app/e/9» en grande; logo.

**[4:24 — Cierre]**
Todos los datos en atlas-lab-one.vercel.app, experimento 9. Contenido educativo, no es asesoría financiera. El trading no se promete: se prueba.
> Boceto: pantalla oscura con la frase de marca.

---

## SHORT (9:16, ≈ 46 s)

**[0-3 s]** «COVID: la cesta cayó −24.2%. El límite del examen: 10%.»
> Boceto: curva cayendo y atravesando una línea de 10%; «−24.2%» en rojo con sacudida; b-roll de pantallas de bolsa en rojo, Ken Burns «in», overlay 0.6.

**[3-14 s]** «Entre el 7 de enero y el 22 de marzo de 2020, la cesta pasó de 11,437 a 8,674 dólares. Y eso, sin apalancar. Con ×4, cada punto se multiplica por cuatro.»
> Boceto: curva real con las dos cifras; multiplicador ×4; Ken Burns «out».

**[14-26 s]** «El simulador da 47.9% de aprobar a ×4, pero baraja bloques de 5 días y no reproduce una caída larga y seguida. Y la cuenta revienta el 50.4% de las veces.»
> Boceto: bloques que se mezclan; pastel 47.9% / 50.4%; whoosh y flash blanco.

**[26-38 s]** «En el experimento 13, una cuenta a ×2 sobre el camino real reventó en el COVID. Además, el simulador remuestrea un periodo alcista y no tiene costos.»
> Boceto: tarjeta del #13 con sello rojo; tres avisos ámbar; Ken Burns «in».

**[38-46 s]** «Pregunta si se probó con una crisis real. Experimento nueve completo en el enlace. El video completo está en el canal. No es asesoría financiera.»
> Boceto: vuelve la curva cruzando la línea de 10% (loop con el gancho); texto «Experimento #9 completo en el enlace» y logo.

---

## Descripción de YouTube (video largo)
https://atlas-lab-one.vercel.app/e/9?utm_source=youtube&utm_medium=video&utm_campaign=exp009-t2
Ficha del experimento #9 (Simulador de prop firm): estado parcial · a ×4 pasa el 47.9% y revienta el 50.4% (16.6% por caída total, 33.8% por pérdida diaria) · en un mercado plano a ×4 pasa el 37.7% · la cesta sin apalancar cayó −24.2% del 7-ene al 22-mar-2020.
El examen de fondeo tipo FTMO (+10%, 5% diario, 10% total, 60 días) frente al crash de 2020, y qué puede subestimar un simulador que baraja bloques de 5 días.
Contenido educativo. No es asesoría financiera ni recomendación de inversión.

## Descripción del Short
https://atlas-lab-one.vercel.app/e/9?utm_source=youtube&utm_medium=short&utm_campaign=exp009-t2
Experimento #9 · parcial · la cesta cayó −24.2% en el COVID; el límite del examen es 10%. No es asesoría financiera.

Capítulos: 0:00 Gancho · 0:16 Qué experimento es · 0:29 Las reglas del examen · 0:58 La cesta · 1:19 Enero–marzo de 2020 · 1:47 Y con apalancamiento · 2:17 Lo que ve el simulador · 2:48 Los otros límites · 3:11 Qué preguntar antes de pagar una cuota · 3:32 Con tu capital · 3:57 Ficha del experimento #9 · 4:24 Cierre

Etiquetas: prop firm, FTMO, challenge de fondeo, COVID, crash 2020, Monte Carlo, apalancamiento, drawdown, gestión de riesgo, simulación de trading, ATLAS Lab, trading con datos

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

Notas: el guion no calcula qué habría pasado a ×4 con la secuencia de 2020 y lo dice; solo cita la caída de la cesta sin apalancar (curva de la serie) y el resultado del #13 a ×2. El punto ciego del remuestreo se presenta como limitación del método. El Short cumple hook ≥ 4 y honestidad 5.

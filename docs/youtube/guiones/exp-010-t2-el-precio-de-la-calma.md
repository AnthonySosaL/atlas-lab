# Experimento #10 — Tema 2: el precio de la calma, la paridad de riesgo en el COVID (−11.3% contra −24.2%)

Tema 2 de 4 del experimento #10
Qué aporta frente a los otros temas: el tema 1 compara aprobar contra reventar (46.0% y 46.5%); este compara la cartera de paridad de riesgo con la de pesos iguales en la crisis del COVID y en el balance de seis años: la caída máxima baja de −24.2% a −11.3%, pero la ganancia baja de +57.6% a +21.9%. Enseña la relación entre calma y rentabilidad. El tema 3 compara dos valores esperados y el tema 4 los dos modos de reventar.
Estado del guion: **BORRADOR — pendiente de aprobación**
Estado del experimento: **parcial** (en el sitio: neutral). Herramienta de simulación, sin señales · Serie E (Gestión de riesgo: lo poco que se sostuvo) · 1 largo + 1 Short
Datos usados: `experiments.json` (v=10 y v=9: metrics, kpis, params_view, exp_details algo con la nota de los primeros 60 días, verdict, notes, capital con su aviso), `series/20260607_211610_risk-parity-sizing-optimo-v10.json` y `series/20260607_210548_simulador-prop-firm-cartera-v9.json` (curva 1 de cada una; de ahí las caídas máximas de enero a marzo de 2020) y tabla «Con tu capital» de docs/youtube (filas 9 y 10). Las cifras con 10,000 dólares son las de la tabla de 100,000 divididas entre 10.
Producción: b-roll real con overlay oscuro 0.6, Ken Burns alterno, subtítulos karaoke en MAYÚSCULAS con cifras en rojo, golpe de bajo solo en 1–2 momentos. Rojo `#e11d2a`, verde `#22c55e`, fondo `#09090b`.

## Títulos (3 opciones)
1. La paridad de riesgo cortó la caída del COVID de −24.2% a −11.3%, y la ganancia de +57.6% a +21.9%
2. El precio de la calma: risk parity contra pesos iguales en 2020 y en seis años
3. ¿Qué pierdes al reducir la volatilidad de tu cartera? Datos de dos carteras reales

## Miniatura
Fondo negro `#09090b`. Dos curvas reales: una cae profundo en rojo hasta «−24.2%» y otra cae poco en verde hasta «−11.3%»; a la derecha, dos barras finales de distinta altura «+57.6%» y «+21.9%». Texto grande: «CALMA TIENE PRECIO» (3 palabras). Logo ATLAS arriba a la derecha.

---

## VIDEO LARGO (16:9, ≈ 4:23 min)

**[0:00 — Gancho]** (pantalla: dos curvas y dos barras)
Una cartera repartida por paridad de riesgo cayó menos 11.3% en el COVID, contra menos 24.2% de la de pesos iguales. Pero en seis años ganó 21.9%, contra 57.6%.
> Boceto: dos curvas reales de enero a marzo de 2020, la roja profunda y la verde corta, y al final dos barras de ganancia, la verde más baja; sacudida al cruzarse. Ken Burns «in».

**[0:15 — Qué experimento es]** (pantalla: rótulo con el número y el nombre)
Este es el experimento #10 de ATLAS Lab: Paridad de riesgo más tamaño óptimo. Todos los resultados están en la página del experimento. Hoy lo miro desde el precio de la calma.
> Boceto: rótulo «EXPERIMENTO #10 · Paridad de riesgo + tamaño óptimo» y URL pequeña. kb=out.

**[0:28 — Qué es la paridad de riesgo]** (pantalla: balanza)
Una cartera con pesos iguales pone el mismo dinero en cada mercado. Pero unos mercados son nerviosos y otros tranquilos, y los nerviosos dominan el riesgo total. La paridad de riesgo compensa eso: da más peso a los tranquilos y menos a los nerviosos, con pesos inversos a la volatilidad de los últimos 60 días, calculados con datos hasta el día anterior. El objetivo es que cada mercado aporte un riesgo parecido.
> Boceto: balanza con mercados de distinto tamaño; barras de peso inverso a la volatilidad. kb=in.

**[0:57 — El COVID en las dos carteras]** (pantalla: curvas de enero a marzo de 2020)
Ponlas frente a frente en la crisis. Sin apalancar, la cartera de pesos iguales del experimento 9 cae menos 24.2% entre el 7 de enero y el 22 de marzo de 2020. Comprar y esperar la cesta, menos 23.7%. La de paridad de riesgo, desde su máximo del 19 de enero hasta el 22 de marzo, cae menos 11.3%. Menos de la mitad.
> Boceto: tres curvas reales de enero a marzo de 2020 (pesos iguales roja, comprar y esperar gris, risk parity verde) con sus cifras; nota «caídas calculadas de las curvas de la serie». kb=out.

**[1:26 — La factura]** (pantalla: tres barras finales)
La calma cuesta. En los seis años, 2019 a 2024, sin apalancar: pesos iguales, más 57.6%; comprar y esperar la cesta, más 51.7%; paridad de riesgo, más 21.9%. El Sharpe, la ganancia por unidad de riesgo, baja de 0.70 a 0.58. Menos riesgo, pero mucha menos ganancia.
> Boceto: tres barras finales (+57.6%, +51.7%, +21.9%) y Sharpe 0.70 → 0.58; la barra de risk parity pulsando. kb=in.

**[1:50 — Por qué hace falta ×6]** (pantalla: multiplicador)
Una cartera tranquila se mueve poco, y para llegar al +10% del examen en 60 días hay que apalancarla más. El mejor caso de la paridad de riesgo es ×6: pasa el 46.0% de las veces, menos que el 47.9% de los pesos iguales a ×4. Y a ×6 la cuenta revienta el 46.5%: 23.0% por caída total y 23.5% por pérdida diaria. La caída de menos 11.3% es sin apalancar; el examen la multiplica.
> Boceto: dos medidores: pesos iguales ×4 (47.9%) y risk parity ×6 (46.0%); pastel de 46.5% en dos rojos. kb=out.

**[2:26 — Una comparación más justa]** (pantalla: sin los primeros 60 días)
Hay un detalle. En los primeros 60 días, la paridad de riesgo aún no tiene pesos, porque necesita esa ventana de volatilidad, y su retorno vale cero. Si quito esos 60 días en las dos carteras, el Sharpe sería 0.59 contra 0.61, y la probabilidad de pasar a ×6 sería 43.9% contra 43.7%. Prácticamente un empate.
> Boceto: dos pares de barras casi iguales con «≈»; texto «sin los primeros 60 días». kb=in.

**[2:52 — La lección]** (pantalla: calma y rentabilidad)
La lección: reducir la volatilidad no es gratis. Una cartera más calma cae menos en una crisis, pero también gana menos, y para el examen necesitas apalancarla para compensarlo. Por eso el experimento concluye que manda la volatilidad total para llegar al objetivo a tiempo, no la sofisticación del reparto. No lo tomes como una regla: es un resultado de un remuestreo de un periodo alcista, sin costos y sin muestra aparte.
> Boceto: balanza «menos caída ↔ menos ganancia»; tres avisos ámbar. kb=out.

**[3:21 — Con tu capital]** (pantalla: tarjeta «Con tu capital» con aviso)
Con 10,000 dólares, la curva de paridad de riesgo sin apalancar daría más 2,189, frente a más 5,175 de la cesta sin estrategia. Con 100,000, la tabla de ATLAS da más 21,885 contra más 51,747. Esa curva no muestra el ×6 del examen, donde la cuenta revienta el 46.5% de las veces.
> Boceto: tarjeta de capital con aviso ámbar «curva sin apalancar; el examen usa ×6» y la curva risk parity por debajo; selector $10,000 / $100,000.

**[3:47 — Ficha del experimento #10]** (pantalla: tarjeta con la URL)
Ficha del experimento 10. Estado: parcial. Cifra clave: a ×6 pasa el 46.0% y revienta el 46.5%; sin apalancar, cae menos 11.3% en el COVID y gana 21.9% en seis años. Filtros que decidieron: no mejora a los pesos iguales del #9, 47.9%. Lección: reducir la volatilidad tiene un precio en ganancia. Revísalo completo en atlas-lab-one.vercel.app/e/10.
> Boceto: tarjeta oscura con «#10 · PARCIAL», cifras clave y «atlas-lab-one.vercel.app/e/10» en grande; logo.

**[4:14 — Cierre]**
Todos los datos en atlas-lab-one.vercel.app, experimento 10. Contenido educativo, no es asesoría financiera. El trading no se promete: se prueba.
> Boceto: pantalla oscura con la frase de marca.

---

## SHORT (9:16, ≈ 46 s)

**[0-3 s]** «Cayó casi la mitad en el COVID: −11.3%, no −24.2%.»
> Boceto: dos curvas y dos barras; cifras con sacudida; b-roll de pantallas de bolsa, Ken Burns «in», overlay 0.6.

**[3-14 s]** «Es la paridad de riesgo: más dinero en los mercados tranquilos y menos en los nerviosos. Pero en seis años ganó 21.9%, contra 57.6% de los pesos iguales.»
> Boceto: balanza con barras inversas; karaoke con «TRANQUILOS» y «NERVIOSOS» en rojo; Ken Burns «out».

**[14-26 s]** «Sin apalancar: comprar y esperar, +51.7%; paridad de riesgo, +21.9%. El Sharpe baja de 0.70 a 0.58.»
> Boceto: tres barras finales y Sharpe 0.70 → 0.58; whoosh y flash blanco.

**[26-38 s]** «Para pasar el examen necesita ×6: pasa el 46.0% y revienta el 46.5%. Los pesos iguales, a ×4: 47.9%. La sofisticación casi no cambia nada.»
> Boceto: dos medidores 47.9% y 46.0%; pastel de 46.5%; Ken Burns «in».

**[38-46 s]** «Menos riesgo, menos ganancia: la calma tiene un precio. Experimento diez completo en el enlace. El video completo está en el canal. No es asesoría financiera.»
> Boceto: vuelven las dos curvas y las dos barras (loop con el gancho); texto «Experimento #10 completo en el enlace» y logo.

---

## Descripción de YouTube (video largo)
https://atlas-lab-one.vercel.app/e/10?utm_source=youtube&utm_medium=video&utm_campaign=exp010-t2
Ficha del experimento #10 (Paridad de riesgo + tamaño óptimo): estado parcial · a ×6 pasa el 46.0% y revienta el 46.5% (pesos iguales a ×4: 47.9%) · Sharpe 0.58 frente a 0.70 · sin apalancar, −11.3% en el COVID y +21.9% en seis años.
La paridad de riesgo frente a los pesos iguales en el crash de 2020 y en el balance 2019-2024: la caída baja de −24.2% a −11.3%, la ganancia de +57.6% a +21.9%.
Contenido educativo. No es asesoría financiera ni recomendación de inversión.

## Descripción del Short
https://atlas-lab-one.vercel.app/e/10?utm_source=youtube&utm_medium=short&utm_campaign=exp010-t2
Experimento #10 · parcial · −11.3% en el COVID frente a −24.2%, y +21.9% frente a +57.6%. No es asesoría financiera.

Capítulos: 0:00 Gancho · 0:15 Qué experimento es · 0:28 Qué es la paridad de riesgo · 0:57 El COVID en las dos carteras · 1:26 La factura · 1:50 Por qué hace falta ×6 · 2:26 Una comparación más justa · 2:52 La lección · 3:21 Con tu capital · 3:47 Ficha del experimento #10 · 4:14 Cierre

Etiquetas: paridad de riesgo, risk parity, volatilidad, gestión de riesgo, COVID, drawdown, prop firm, FTMO, Monte Carlo, apalancamiento, ATLAS Lab, trading con datos

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

Notas: las caídas del COVID y los retornos de seis años salen de las curvas de series; la de paridad de riesgo vale cero los primeros 60 días y el guion lo dice, aunque eso favorece a su caída. El guion no extrapola esas caídas al ×6. El Short cumple hook ≥ 4 y honestidad 5.

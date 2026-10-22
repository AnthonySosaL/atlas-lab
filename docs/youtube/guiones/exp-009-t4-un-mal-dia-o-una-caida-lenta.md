# Experimento #9 — Tema 4: reventar de dos maneras, un mal día o una caída lenta (cubre #9 y #10)

Tema 4 de 4 del experimento #9 · también tema del #10 (4 de 4)
Qué aporta frente a los otros temas: desglosa las dos maneras de perder la cuenta en un examen de fondeo (pérdida diaria de 5% y caída total de 10%) en los dos simuladores. Su hallazgo propio: a ×4 con pesos iguales (#9), 33.8% de los 50.4% que revientan es por un solo mal día; con paridad de riesgo a ×6 (#10), el reparto se equilibra: 23.0% por caída total y 23.5% por pérdida diaria. Es la pieza de unión recomendada para #9 + #10.
Estado del guion: **BORRADOR — pendiente de aprobación**
Estado de los experimentos: ambos **parciales** (en el sitio: neutral). Herramientas de simulación, no estrategias · Serie E (Gestión de riesgo: lo poco que se sostuvo) · 1 largo + 1 Short
Datos usados: `experiments.json` (v=9 y v=10: metrics, kpis, params_view, verdict, notes, capital con su aviso) y tabla «Con tu capital» de docs/youtube (filas 9 y 10). De la pérdida diaria del #9 solo existen en los datos los puntos ×1 (3.2%), ×4 (33.8%) y ×8 (51.9%). Las cifras con 10,000 dólares son las de la tabla de 100,000 divididas entre 10.
Producción: b-roll real con overlay oscuro 0.6, Ken Burns alterno, subtítulos karaoke en MAYÚSCULAS con cifras en rojo, golpe de bajo solo en 1–2 momentos. Rojo `#e11d2a`, verde `#22c55e`, fondo `#09090b`.

## Títulos (3 opciones)
1. A ×4 la cuenta revienta el 50.4%, y 33.8% es por un solo mal día
2. Dos maneras de perder una cuenta fondeada: la pérdida diaria y la caída total (#9 y #10)
3. ¿Un mal día o una caída lenta? Qué mata más cuentas en un examen de fondeo

## Miniatura
Fondo negro `#09090b`. Un pastel dividido en dos tonos de rojo: «33.8%» (rojo intenso, «1 DÍA») y «16.6%» (rojo oscuro, «CAÍDA LENTA»). Texto grande: «UN MAL DÍA» (3 palabras). Logo ATLAS esquina inferior derecha.

---

## VIDEO LARGO (16:9, ≈ 4:21 min)

**[0:00 — Gancho]** (pantalla: un pastel de 50.4%)
En el mejor caso del simulador, a ×4, la cuenta revienta el 50.4% de las veces. Y 33.8% se pierde por una sola razón: un mal día.
> Boceto: pastel del 50.4% con el tramo grande «33.8% · pérdida diaria» en rojo intenso y «16.6% · caída total» en rojo oscuro; sacudida al marcar el tramo grande. Ken Burns «in».

**[0:13 — Qué experimentos son]** (pantalla: rótulo con el número y el nombre)
Este es el experimento #9 de ATLAS Lab: Simulador de prop firm, cartera, y hoy lo comparo con el experimento 10, paridad de riesgo. Todos los resultados están en la página de cada experimento.
> Boceto: rótulos «#9 Pesos iguales ×4» y «#10 Risk parity ×6» y URL pequeña. kb=out.

**[0:27 — Las dos reglas que te eliminan]** (pantalla: dos tarjetas)
Un examen de fondeo tipo FTMO tiene dos límites de pérdida. La pérdida diaria máxima: no puedes perder más del 5% en un solo día. Y la caída total máxima: no puedes dejar que la cuenta caiga más del 10%. Son límites distintos. El primero castiga un día terrible; el segundo, una cuenta que se va desangrando poco a poco.
> Boceto: dos tarjetas: «Un día: −5%» con un rayo y «Total: −10%» con una escalera hacia abajo. kb=in.

**[0:53 — El desglose del experimento 9]** (pantalla: pastel)
En el simulador de pesos iguales, a ×4: pasas el 47.9% y revientas el 50.4%. De ese 50.4%, 16.6% es por llegar al límite de caída total, y 33.8% por la pérdida diaria. La mayor parte de las cuentas que revientan caen por un solo día. Las pérdidas llegan de golpe, no despacio.
> Boceto: pastel con tres tramos (47.9% verde, 33.8% rojo intenso, 16.6% rojo oscuro). kb=out.

**[1:18 — Cómo cambia con el apalancamiento]** (pantalla: línea de pérdida diaria)
El apalancamiento mueve esta cifra. La probabilidad de reventar por pérdida diaria es 3.2% con ×1, 33.8% con ×4 y 51.9% con ×8. Con apalancamiento, cada punto que se mueve la cesta se multiplica en tu cuenta, y un solo día malo alcanza más fácil el 5%. Es la razón por la que subir la apuesta mejora la probabilidad de llegar a la meta solo hasta cierto punto.
> Boceto: tres puntos en una línea roja ascendente (×1 3.2%, ×4 33.8%, ×8 51.9%) y, debajo, la probabilidad de pasar (5.4%, 47.9%, 41.4%). kb=in.

**[1:49 — El desglose del experimento 10]** (pantalla: segundo pastel)
Con paridad de riesgo, que reparte el dinero inversamente a la volatilidad de cada mercado, el mejor caso es ×6. Pasas el 46.0% y revientas el 46.5%: 23.0% por caída total y 23.5% por pérdida diaria. El reparto cambia: ahora son mitad y mitad. Mi lectura, que no es una cifra del experimento: dar menos peso a los mercados nerviosos reduce el riesgo de un día feo, pero un apalancamiento mayor, ×6, hace más fácil llegar al límite acumulado.
> Boceto: segundo pastel con 46.0% verde, 23.5% rojo intenso y 23.0% rojo oscuro; etiqueta gris «lectura, no dato». kb=out.

**[2:24 — Lado a lado]** (pantalla: dos pasteles)
Los dos pasteles, juntos. En el primero, mandan los días malos. En el segundo, se reparten. Y en ambos, casi la mitad de las cuentas revienta. La sofisticación del reparto mueve el tipo de riesgo, no el tamaño total: pasar o reventar siguen siendo casi lo mismo.
> Boceto: dos pasteles juntos con las cifras; sello «casi la mitad revienta en ambos». kb=in.

**[2:42 — Qué significa para quien evalúa un examen]** (pantalla: dos preguntas)
Dos preguntas útiles, sin recomendaciones. Una: ¿mi estrategia puede tener un día muy malo? Si es así, el límite diario es tu mayor enemigo. Dos: ¿mi estrategia se desangra poco a poco? Entonces te amenaza el límite total. Cada estrategia tiene su manera de reventar, y conviene saberla antes de pagar la cuota. Recuerda que ambos simuladores usan un periodo alcista, sin costos y sin muestra aparte.
> Boceto: dos tarjetas con una pregunta cada una; tres avisos ámbar al final. kb=out.

**[3:09 — Con tu capital]** (pantalla: tarjeta «Con tu capital» con avisos)
Con 10,000 dólares, la curva base sin apalancar del experimento 9 daría más 5,761 y la de paridad de riesgo del 10, más 2,189, frente a más 5,175 de la cesta sin estrategia. Con 100,000, la tabla de ATLAS da más 57,609 y más 21,885, contra más 51,747. Ninguna de las dos curvas muestra el apalancamiento del examen.
> Boceto: tarjeta de capital con tres cifras y aviso ámbar «curvas sin apalancar; el examen usa ×4 y ×6»; selector $10,000 / $100,000.

**[3:38 — Ficha del experimento #9 (con #10)]** (pantalla: tarjeta con las URL)
Ficha de los experimentos 9 y 10. Estado: los dos parciales. Cifra clave: a ×4, revienta el 50.4%, con 33.8% por un solo día; a ×6 con paridad de riesgo, revienta el 46.5%, repartido 23.0% y 23.5%. Filtros que decidieron: el criterio propio del script y ninguna muestra aparte. Lección: la pérdida diaria mata más cuentas que la caída lenta cuando apalancas. Revísalo completo en atlas-lab-one.vercel.app/e/9 y /e/10.
> Boceto: tarjeta oscura con «#9 · #10 · PARCIALES», los dos pasteles pequeños y «atlas-lab-one.vercel.app/e/9» en grande; logo.

**[4:11 — Cierre]**
Todos los datos en atlas-lab-one.vercel.app, experimentos 9 y 10. Contenido educativo, no es asesoría financiera. El trading no se promete: se prueba.
> Boceto: pantalla oscura con la frase de marca.

---

## SHORT (9:16, ≈ 46 s)

**[0-3 s]** «A ×4 revienta el 50.4%; 33.8%, por un solo día.»
> Boceto: pastel con el tramo de 33.8% en rojo intenso y sacudida; b-roll de pantallas de trading en rojo, Ken Burns «in», overlay 0.6.

**[3-14 s]** «Un examen de fondeo te elimina de dos maneras: perder más del 5% en un día, o dejar que la cuenta caiga más del 10% en total.»
> Boceto: dos tarjetas con rayo y escalera; karaoke con «5%» y «10%» en rojo; Ken Burns «out».

**[14-26 s]** «A ×4 con pesos iguales: pasas el 47.9%. Revientas el 50.4%, con 16.6% por caída total y 33.8% por pérdida diaria. Con ×1, la pérdida diaria era solo el 3.2%.»
> Boceto: pastel y línea de 3.2% → 33.8%; whoosh y flash blanco.

**[26-38 s]** «Con paridad de riesgo a ×6: pasas el 46.0% y revientas el 46.5%, repartido casi mitad y mitad: 23.0% y 23.5%.»
> Boceto: segundo pastel, dos rojos casi iguales; Ken Burns «in».

**[38-46 s]** «Cada estrategia revienta a su manera. Experimentos nueve y diez completos en el enlace. El video completo está en el canal. No es asesoría financiera.»
> Boceto: vuelve el pastel con el tramo del mal día (loop con el gancho); texto «Experimentos #9 y #10 completos en el enlace» y logo.

---

## Descripción de YouTube (video largo)
https://atlas-lab-one.vercel.app/e/9?utm_source=youtube&utm_medium=video&utm_campaign=exp009-t4
Ficha de los experimentos #9 y #10 (simuladores de challenge de fondeo, 4,000 simulaciones, 2019-2024): parciales los dos · #9 a ×4: pasa 47.9%, revienta 50.4% (16.6% caída total, 33.8% pérdida diaria) · #10 a ×6: pasa 46.0%, revienta 46.5% (23.0% y 23.5%).
Las dos maneras de perder una cuenta en un examen tipo FTMO (5% diario, 10% total) y cómo cambia el desglose con pesos iguales o con paridad de riesgo.
Contenido educativo. No es asesoría financiera ni recomendación de inversión.
También: https://atlas-lab-one.vercel.app/e/10?utm_source=youtube&utm_medium=video&utm_campaign=exp009-t4

## Descripción del Short
https://atlas-lab-one.vercel.app/e/9?utm_source=youtube&utm_medium=short&utm_campaign=exp009-t4
Experimentos #9 y #10 · parciales · a ×4, 33.8% reventó por un solo mal día. No es asesoría financiera.

Capítulos: 0:00 Gancho · 0:13 Qué experimentos son · 0:27 Las dos reglas que te eliminan · 0:53 El desglose del experimento 9 · 1:18 Cómo cambia con el apalancamiento · 1:49 El desglose del experimento 10 · 2:24 Lado a lado · 2:42 Qué significa para quien evalúa un examen · 3:09 Con tu capital · 3:38 Ficha del experimento #9 (con #10) · 4:11 Cierre

Etiquetas: prop firm, FTMO, challenge de fondeo, pérdida diaria, drawdown, apalancamiento, paridad de riesgo, Monte Carlo, gestión de riesgo, simulación de trading, ATLAS Lab, trading con datos

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

Notas: la interpretación del reparto 23.0% y 23.5% está rotulada como lectura, no como dato. El guion no convierte 33.8% de 50.4% en una fracción; cita las dos cifras. Los dos experimentos usan un periodo alcista, sin costos y sin muestra aparte, y el guion lo dice. El Short cumple hook ≥ 4 y honestidad 5.

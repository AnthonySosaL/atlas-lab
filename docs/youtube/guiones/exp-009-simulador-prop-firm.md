# Experimento #9 — Simulador de prop firm (cartera)

Estado del guion: **BORRADOR — pendiente de aprobación**
Estado del experimento: **parcial** (en el sitio: neutral). Es una herramienta de simulación, no una estrategia con señales.
Serie: E (Gestión de riesgo: lo poco que se sostuvo)
Datos usados: `experiments.json` (v=9: description, params, metrics, kpis, analysis, verdict, notes, capital), `exp_details.json` (algo, filters), `series/20260607_210548_simulador-prop-firm-cartera-v9.json` (curva 1 = cesta base sin apalancar) y la tabla «Con tu capital» de docs/youtube (fila 9). Las cifras con 10,000 dólares son las de la tabla de 100,000 divididas entre 10.
Nota de datos: solo hay tres puntos de la tabla por apalancamiento (×1, ×4 y ×8); los otros (×2, ×3, ×6) hay que tomarlos del propio experimento al producir los gráficos.

## Títulos (3 opciones)
1. El examen de fondeo se pasa el 37.7% de las veces… sin ninguna ventaja
2. Simulé 4,000 exámenes de fondeo: a ×4 pasas 47.9% y reventas 50.4%
3. ¿Qué decide si pasas un challenge de fondeo: la estrategia o el tamaño de tu apuesta?

## Miniatura
Fondo negro de la marca. Texto gigante: «37.7%» en blanco con «SIN VENTAJA» (2 palabras) en rojo de marca debajo. A la derecha, un medidor de apalancamiento con la aguja en «×4» y una cuenta con una grieta. Logo ATLAS esquina inferior derecha.

---

## VIDEO LARGO (16:9, ≈ 5:40 min — 4–6 min: experimento de una sola idea y pocas cifras)
Ritmo visual: algo cambia en pantalla cada 2-3 s; b-roll real detrás, Ken Burns alterno, subtítulos karaoke, whoosh + flash en cada corte, golpe de bass solo en el momento clave.

**[0:00 — Gancho]** (pantalla: gráfico plano y «37.7%»)
Imagina un mercado completamente plano: en promedio no sube ni baja, sin ventaja para nadie. Aun así, en mi simulador, con apalancamiento ×4, se pasa el examen de fondeo el 37.7% de las veces. Pero con ese mismo tamaño de apuesta, en el mejor caso la cuenta revienta el 50.4%. Este video trata de por qué pasar la prueba depende tanto del tamaño de la apuesta, y qué significa eso si alguna vez piensas pagar por un examen de este tipo.
> Boceto: línea plana de precio y contador hasta 37.7%; después un medidor «×4» y una cifra roja «50.4% revienta» con sacudida de pantalla. Ken Burns «in» sobre b-roll de pantallas de trading.

**[0:33 — Qué es un examen de fondeo]** (pantalla: reglas en tres tarjetas)
Algunas empresas, las prop firms, te dejan operar una cuenta grande si pasas una prueba. La prueba que simulo es de tipo FTMO: ganar 10% en 60 días, sin perder más de 5% en un solo día y sin que la cuenta caiga más de 10% en total. Si tocas cualquiera de los dos límites, pierdes la cuenta. Por eso la pregunta no es solo cuánto puedes ganar, sino cuánta apuesta aguantas. El apalancamiento es justamente eso: operar con posiciones más grandes que tu capital. Multiplica las ganancias, pero también las pérdidas, y los límites de la prueba están ahí para que no puedas exagerar.
> Boceto: tres tarjetas: «Objetivo +10%», «Pérdida diaria máx. 5%», «Drawdown máx. 10%» y un reloj «60 días»; la cuenta se tacha en rojo al tocar un límite.

**[1:16 — El simulador]** (pantalla: remuestreo por bloques)
Esto no es una estrategia con señales de compra y venta; es un simulador. Tomo una cesta de forex, metales, índices y energía, con pesos iguales y solo compras, de 2019 a 2024. Para generar miles de exámenes distintos uso el remuestreo por bloques, o bootstrap: corto la historia real en bloques de 5 días y los barajo para armar caminos nuevos que se parecen al mercado real, pero que nunca ocurrieron. Hago 4,000 simulaciones y repito el ejercicio con distintos apalancamientos: ×1, ×2, ×3, ×4, ×6 y ×8. La cesta base tiene un Sharpe de 0.70 y una volatilidad anual de 9.4%.
> Boceto: la curva real de la cesta (series, curva 1) cortada en bloques de colores que se barajan y forman 4,000 caminos nuevos; tarjeta `params_view` (4,000 simulaciones, bloque 5 días, apalancamientos x1–x8).

**[1:59 — Resultados por apalancamiento]** (pantalla: barras de probabilidad de pasar)
Con ×1, solo pasas el 5.4% de las veces: con ese tamaño de apuesta, 60 días rara vez alcanzan para llegar al 10%. Con ×4, el mejor caso, pasas el 47.9%. Con ×8, la probabilidad baja otra vez, a 41.4%. Y la probabilidad de reventar por pérdida diaria sube de 3.2% con ×1 hasta 51.9% con ×8. Es decir: más apuesta te acerca a la meta, pero también a los límites, y a partir de cierto punto los límites ganan.
> Boceto: barras de P(pasar) por apalancamiento (×1 = 5.4%, ×4 = 47.9%, ×8 = 41.4%; completar ×2, ×3 y ×6 con los valores del experimento); línea roja de «reventar por pérdida diaria» de 3.2% a 51.9%.

**[2:32 — El mejor caso tiene su precio]** (pantalla: desglose de reventar)
En el mejor caso, ×4, pasas el 47.9%, pero la cuenta revienta el 50.4% de las veces: 16.6% por llegar al límite de caída total y 33.8% por la pérdida diaria. Pasar y reventar, casi lo mismo. Es decir, con la apuesta que más te acerca a aprobar, la probabilidad de perder la cuenta es ligeramente mayor que la de aprobar. Y la mayor parte de esas pérdidas llega por un solo mal día, no por una caída lenta.
> Boceto: gráfico de pastel: 47.9% pasa (verde), 16.6% drawdown (rojo oscuro), 33.8% pérdida diaria (rojo claro), con la leyenda «×4».

**[3:04 — La prueba del mercado plano]** (pantalla: línea plana y medidor)
Ahora lo más revelador. Repito el simulador con retornos de media cero: un mercado sin ventaja alguna, que no sube ni baja en promedio. A ×4 todavía pasas el examen el 37.7% de las veces. Es decir, una parte grande de «pasar» es la apuesta, no la estrategia. La diferencia con el 47.9% de la cesta real es lo que aporta la subida del mercado en esos años. El tamaño de posición pesa mucho, y la suerte de la secuencia de días, también.
> Boceto: dos barras: «Cesta real 47.9%» y «Mercado plano 37.7%» con la diferencia sombreada y el texto «El tamaño de la apuesta decide».

**[3:38 — Por qué el tamaño manda]** (pantalla: tubo estrecho entre dos límites)
Para pasar necesitas ganar 10% en 60 días. Con una cesta que se mueve alrededor de un 9.4% al año, eso exige apalancar. Pero cada vez que apalancas más, los días malos pesan más, y un solo día de pérdida del 5% ya te saca de la prueba. Entre pasar y reventar hay una zona estrecha: poco apalancamiento no llega a la meta a tiempo, y demasiado se estrella contra los límites. Lo que decide el resultado, entonces, no es la sofisticación de la estrategia, sino el tamaño de la apuesta.
> Boceto: dos paredes rojas (pérdida diaria y caída total) con una pelota que rebota; el apalancamiento sube o baja la pelota; la meta del +10% aparece al fondo.

**[4:16 — Los límites de esta prueba]** (pantalla: tres avisos)
Tres avisos. Uno: remuestreo un periodo alcista, 2019 a 2024; el mercado subió, y eso favorece las cifras. Dos: no hay costos de operación. Tres: no hay una muestra aparte para validar. Por eso el veredicto es parcial: es una herramienta para entender el tamaño de la apuesta, no una prueba de que exista una ventaja. Lo que sí te dice es qué esperar de un examen de este tipo si la apuesta es agresiva.
> Boceto: tres tarjetas ámbar «Periodo alcista», «Sin costos», «Sin muestra aparte»; sello «PARCIAL».

**[4:47 — Con tu capital]** (pantalla: tarjeta «Con tu capital» con aviso)
Con 10,000 dólares, la curva base sin apalancar daría más 5,761, frente a más 5,175 de la cesta sin estrategia. Con 100,000, la tabla de ATLAS da más 57,609 contra más 51,747. Ojo: el examen se juega a ×4 y esa curva no lo muestra; a ×4 la cuenta revienta el 50.4% de las veces.
> Boceto: tarjeta de capital con aviso ámbar «Curva sin apalancar; el examen usa ×4» y las dos cifras en verde atenuado; selector $10,000 / $100,000.

**[5:10 — Conclusión y cierre]**
Veredicto: parcial. Con ×4 pasas el 47.9% y revientas el 50.4%, y hasta en un mercado plano pasas el 37.7%. Antes de pagar por un examen, mira el tamaño de la apuesta, no solo la estrategia. En el siguiente experimento pruebo si repartir mejor el riesgo entre los mercados cambia estas cifras. Todos los datos en atlas-lab-one.vercel.app, experimento 9. Contenido educativo, no es asesoría financiera. El trading no se promete: se prueba.
> Boceto: sello «PARCIAL» sobre el medidor ×4; frase de marca, logo y URL.

---

## SHORT (9:16, ≈ 47 s)
Fórmula visual: b-roll vertical + overlay oscuro 0.6, Ken Burns alternando in/out, subtítulos karaoke en MAYÚSCULAS con las cifras en rojo, whoosh + flash en cada corte, golpe de bass + sacudida solo en el 0-3 s; ticker arriba.

**[0-3 s]** «Sin ninguna ventaja, pasas el examen de fondeo el 37.7%.»
> Boceto: texto gigante «37.7%» y «SIN NINGUNA VENTAJA»; línea de precio plana; contador hasta 37.7% con sacudida; b-roll de pantallas de trading, Ken Burns «in».
**[3-12 s]** «Las empresas de fondeo te dan una cuenta grande si pasas una prueba: ganar 10% en 60 días sin perder más de 5% en un día ni 10% en total.»
> Boceto: tres tarjetas de reglas entrando; Ken Burns «out»; karaoke con «5%» y «10%» en rojo.
**[12-24 s]** «Simulé 4,000 intentos con una cesta real de mercados, de 2019 a 2024. Con apalancamiento ×1, pasas solo el 5.4%. Con ×4, el 47.9%. Con ×8, vuelve a bajar: 41.4%.»
> Boceto: barras 5.4% → 47.9% → 41.4%; whoosh y flash blanco.
**[24-36 s]** «Pero a ×4 la cuenta revienta el 50.4% de las veces: 16.6% por drawdown y 33.8% por pérdida diaria. Y en un mercado plano, a ×4, aun así pasas el 37.7%.»
> Boceto: pastel del 50.4% en dos tonos de rojo; línea plana con «37.7%»; Ken Burns «in».
**[36-47 s]** «Pasar depende más del tamaño de tu apuesta que de la estrategia. Y esto es un periodo alcista y sin costos. El video completo está en el canal. No es asesoría financiera.»
> Boceto: vuelve la línea plana con «37.7%» (loop con el gancho: aprobar no prueba que haya ventaja); texto «Video completo en el canal» y logo.

## Descripción (YouTube)
Simulador Monte Carlo de un challenge de fondeo tipo FTMO (objetivo +10%, pérdida diaria 5%, drawdown 10%, 60 días) sobre una cesta de forex, metales, índices y energía (2019-2024, 4,000 simulaciones). A ×4 se pasa el 47.9% y la cuenta revienta el 50.4%; en un mercado plano a ×4 se pasa el 37.7%. Es una herramienta, no una estrategia; sin costos y sobre un periodo alcista.
Todos los datos: https://atlas-lab-one.vercel.app (experimento #9)
Contenido educativo. No es asesoría financiera ni recomendación de inversión.

Capítulos: 0:00 Gancho · 0:33 Qué es un examen de fondeo · 1:16 El simulador · 1:59 Resultados por apalancamiento · 2:32 El mejor caso tiene su precio · 3:04 La prueba del mercado plano · 3:38 Por qué el tamaño manda · 4:16 Los límites de esta prueba · 4:47 Con tu capital · 5:10 Conclusión y cierre

Etiquetas: prop firm, FTMO, challenge de fondeo, cuenta fondeada, Monte Carlo, apalancamiento, gestión de riesgo, simulación de trading, drawdown, backtest, ATLAS Lab, trading con datos

## Rúbrica (autoevaluación, 1–5)
| Criterio | Short | Largo |
|---|---|---|
| hook_0_3s | 4 | 4 |
| ritmo | 4 | 4 |
| promesa_cumplida | 5 | 5 |
| potencial_loop | 4 | 3 |
| claridad_no_traders | 3 | 4 |
| honestidad_atlas | 5 | 5 |
| audio | 4 | 3 |
| cta | 4 | 4 |
| **Promedio** | **4.13** | **4.00** |

Notas: el hook usa jerga («examen de fondeo»); el texto en pantalla «SIN NINGUNA VENTAJA» y el gráfico plano lo sostienen. Los límites (periodo alcista, sin costos) se dicen en el propio Short. El Short cumple hook ≥ 4 y honestidad 5.

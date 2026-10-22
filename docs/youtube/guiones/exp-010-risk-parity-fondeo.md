# Experimento #10 — Paridad de riesgo + tamaño óptimo

Estado del guion: **BORRADOR — pendiente de aprobación**
Estado del experimento: **parcial** (en el sitio: neutral). Herramienta de simulación, sin señales.
Serie: E (Gestión de riesgo: lo poco que se sostuvo)
Datos usados: `experiments.json` (v=10: description, params, metrics, kpis, analysis, verdict, notes, capital; v=9 para comparar), `exp_details.json` (algo, filters), `series/20260607_211610_risk-parity-sizing-optimo-v10.json` (curva 1 = cartera risk parity sin apalancar) y la tabla «Con tu capital» de docs/youtube (fila 10). Las cifras con 10,000 dólares son las de la tabla de 100,000 divididas entre 10.
Nota de datos: es el experimento con menos material propio (una comparación contra el #9); el largo queda corto y por debajo de 4.0 en la rúbrica. Recomendación: Short primero; el largo, mejor unido al #9 o al #11.

## Títulos (3 opciones)
1. Pasar el examen de fondeo: 46.0%. Reventar la cuenta: 46.5%
2. Risk parity contra pesos iguales en un challenge de fondeo: 46.0% frente a 47.9%
3. ¿Un método sofisticado de gestión de riesgo mejora tus opciones de pasar un challenge?

## Miniatura
Fondo negro de la marca. Dos monedas enfrentadas: a la izquierda «46.0%» en verde rotulada «PASA», a la derecha «46.5%» en rojo rotulada «REVIENTA». Texto grande central: «CASI IGUAL» (2 palabras). Logo ATLAS esquina inferior derecha.

---

## VIDEO LARGO (16:9, ≈ 4:07 min — experimento corto: comparación contra el #9)
Ritmo visual: algo cambia en pantalla cada 2-3 s; b-roll real detrás, Ken Burns alterno, subtítulos karaoke, whoosh + flash en cada corte, golpe de bass solo en el momento clave.

**[0:00 — Gancho]** (pantalla: dos monedas «46.0%» y «46.5%»)
Con apalancamiento ×6, en mi simulador, la probabilidad de pasar el examen de fondeo es 46.0%. La de reventar la cuenta, 46.5%. Pasar o reventar: casi una moneda al aire. Y esto es con un método más sofisticado de repartir el riesgo que el del experimento anterior. La pregunta es si, además de más sofisticado, es mejor. Spoiler: casi no cambia nada.
> Boceto: dos monedas que giran y caen en 46.0% (verde) y 46.5% (rojo); sacudida de pantalla al coincidir las cifras.

**[0:26 — Dónde estábamos]** (pantalla: resultado del #9)
Resumen del experimento 9: un simulador del examen de fondeo —ganar 10% sin perder más de 5% en un día ni 10% en total— sobre una cesta de forex, metales, índices y energía con pesos iguales, es decir, con la misma cantidad de dinero en cada mercado. Su mejor caso fue ×4, con 47.9% de pasar. La pregunta ahora es: ¿repartir mejor el riesgo mejora esa cifra? Es una pregunta lógica, porque no todos los mercados pesan lo mismo en el riesgo de la cartera: unos son mucho más nerviosos que otros.
> Boceto: tarjeta «#9: pesos iguales ×4 → 47.9%» con interrogación sobre un logo «risk parity»; tres barras de distinta altura (mercados nerviosos y tranquilos) con el mismo dinero.

**[1:04 — La idea: paridad de riesgo]** (pantalla: balanza de riesgo)
Imagina una cartera con un mercado muy nervioso y otro muy tranquilo. Si les das el mismo dinero, el nervioso domina el riesgo total, y el tranquilo casi no cuenta. La paridad de riesgo corrige eso: da más peso a los mercados tranquilos y menos a los nerviosos, con pesos inversos a la volatilidad de los últimos 60 días, calculados con datos hasta el día anterior. La idea es que cada mercado aporte un riesgo parecido. Pruebo apalancamientos de ×2 a ×6 en el mismo simulador de 4,000 exámenes.
> Boceto: balanza con barras de colores: mercado nervioso (barra pequeña) y mercado tranquilo (barra grande), ambas aportando igual riesgo; tarjeta `params_view` (Risk parity 60 d · x2, x3, x4, x5, x6).

**[1:40 — Resultados]** (pantalla: tarjetas KPI)
El mejor caso es ×6: pasa el 46.0% de las veces. Supera el umbral del 45% que fijé en el código, pero no mejora a los pesos iguales del experimento 9, que pasaban 47.9%. El Sharpe baja de 0.70 a 0.58. Y a ×6 la cuenta revienta el 46.5% de las veces: 23.0% por caída total y 23.5% por pérdida diaria. Es decir, la cartera más sofisticada pasa un poco menos, tiene menos retorno por unidad de riesgo y, además, necesita más apalancamiento para llegar a su mejor punto.
> Boceto: tabla comparativa animada: «Pesos iguales ×4: pasa 47.9% · Sharpe 0.70» contra «Risk parity ×6: pasa 46.0% · Sharpe 0.58»; pastel del 46.5% de reventar en dos tonos de rojo.

**[2:17 — La comparación justa]** (pantalla: sin los primeros 60 días)
Una aclaración honesta. En los primeros 60 días la paridad de riesgo aún no tiene pesos, porque necesita esa ventana de volatilidad, y su retorno vale cero. Si quito esos 60 días en ambas carteras, el Sharpe sería 0.59 frente a 0.61, y la probabilidad de pasar a ×6 sería 43.9% frente a 43.7%. Prácticamente un empate. Dicho de otro modo: la ventaja de los pesos iguales en las cifras principales se explica, en buena parte, por esos 60 días iniciales. La sofisticación casi no cambia nada.
> Boceto: dos pares de barras casi iguales (0.59/0.61 y 43.9%/43.7%) con el signo «≈»; texto «Quitando los primeros 60 días».

**[2:53 — El valor esperado «ilustrativo»]** (pantalla: cuenta de resultados de un intento)
El experimento incluye un valor esperado por intento de 3,410 dólares, con una cuota de 500 dólares y un pago supuesto de 8,000. Es un número optimista por construcción, porque supone que cobras un pago en la fase fondeada. No lo tomes como una expectativa de ganancia: solo muestra la mecánica de cómo se combinan la probabilidad de pasar, la cuota y el pago. En el experimento 11 calculo ese valor esperado con más cuidado.
> Boceto: operación en pantalla: «−$500 de cuota» y «+$8,000 pago supuesto» con la etiqueta «ilustrativo» y un sello ámbar «optimista».

**[3:24 — Con tu capital]** (pantalla: tarjeta «Con tu capital» con aviso)
Con 10,000 dólares, la curva risk parity sin apalancar daría unos más 2,189, frente a más 5,175 de la cesta sin estrategia. Con 100,000, la tabla de ATLAS da más 21,885 contra más 51,747. Esa curva no muestra el ×6 del examen, donde la cuenta revienta el 46.5% de las veces.
> Boceto: tarjeta de capital con aviso ámbar y ambas curvas; la curva risk parity por debajo; selector $10,000 / $100,000.

**[3:45 — Conclusión y cierre]**
Veredicto: parcial. El método sofisticado no mejora al simple: 46.0% frente a 47.9%. Lo que manda es la volatilidad total para llegar al objetivo a tiempo, no la sofisticación del tamaño de posición. Todos los datos en atlas-lab-one.vercel.app, experimento 10. Contenido educativo, no es asesoría financiera. El trading no se promete: se prueba.
> Boceto: sello «PARCIAL»; frase de marca, logo y URL.

---

## SHORT (9:16, ≈ 46 s)
Fórmula visual: b-roll vertical + overlay oscuro 0.6, Ken Burns alternando in/out, subtítulos karaoke en MAYÚSCULAS con las cifras en rojo, whoosh + flash en cada corte, golpe de bass + sacudida solo en el 0-3 s; ticker arriba.

**[0-3 s]** «Pasar el examen de fondeo: 46.0%. Reventar: 46.5%.»
> Boceto: texto gigante «PASAR 46.0% · REVENTAR 46.5%»; dos monedas girando que caen en las cifras; b-roll de pantallas de bolsa, Ken Burns «in».
**[3-12 s]** «Probé un método más sofisticado para repartir el riesgo, la paridad de riesgo, que da más peso a los mercados tranquilos, con apalancamiento ×6 y 4,000 intentos.»
> Boceto: balanza de riesgo; Ken Burns «out»; karaoke con «SOFISTICADO» en rojo.
**[12-24 s]** «Resultado: pasa el 46.0%, menos que el 47.9% de repartir el dinero en partes iguales. El Sharpe baja de 0.70 a 0.58. Y la cuenta revienta el 46.5% de las veces.»
> Boceto: barras 47.9% contra 46.0%; Sharpe 0.70 → 0.58; whoosh y flash blanco.
**[24-36 s]** «De esas, 23.0% por drawdown y 23.5% por pérdida diaria. Y si quito los primeros 60 días, cuando aún no hay pesos, ambas carteras empatan: 43.9% contra 43.7%.»
> Boceto: pastel de reventar en dos rojos; dos barras casi iguales con «≈»; Ken Burns «in».
**[36-46 s]** «Manda la volatilidad total para llegar a tiempo, no lo sofisticado del método. Pasar o reventar: casi lo mismo. El video completo está en el canal. No es asesoría financiera.»
> Boceto: vuelven las dos monedas con 46.0% y 46.5% (loop con el gancho); texto «Video completo en el canal» y logo.

## Descripción (YouTube)
Cambio los pesos iguales del experimento 9 por paridad de riesgo (pesos inversos a la volatilidad de 60 días) y pruebo apalancamientos de ×2 a ×6 en el simulador de challenge de fondeo. Mejor caso, ×6: pasa el 46.0% (pesos iguales a ×4: 47.9%), el Sharpe baja de 0.70 a 0.58 y la cuenta revienta el 46.5% de las veces.
Todos los datos: https://atlas-lab-one.vercel.app (experimento #10)
Contenido educativo. No es asesoría financiera ni recomendación de inversión.

Capítulos: 0:00 Gancho · 0:26 Dónde estábamos · 1:04 La idea: paridad de riesgo · 1:40 Resultados · 2:17 La comparación justa · 2:53 El valor esperado «ilustrativo» · 3:24 Con tu capital · 3:45 Conclusión y cierre

Etiquetas: risk parity, paridad de riesgo, prop firm, challenge de fondeo, FTMO, apalancamiento, gestión de riesgo, Monte Carlo, simulación de trading, Sharpe ratio, ATLAS Lab, trading con datos

## Rúbrica (autoevaluación, 1–5)
| Criterio | Short | Largo |
|---|---|---|
| hook_0_3s | 4 | 4 |
| ritmo | 4 | 3 |
| promesa_cumplida | 5 | 4 |
| potencial_loop | 5 | 3 |
| claridad_no_traders | 3 | 4 |
| honestidad_atlas | 5 | 5 |
| audio | 4 | 3 |
| cta | 4 | 4 |
| **Promedio** | **4.25** | **3.75** |

Notas: el largo no llega a 4.0 (material escaso, comparación contra el #9). Opciones: producir solo el Short, o unir el largo con el #9 en «Fondeo: lo que decide el resultado». El Short cumple hook ≥ 4 y honestidad 5.

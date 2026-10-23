# Experimento #38 — Deflated Sharpe de la versión ejecutable · Tema 2: el cálculo paso a paso

Estado del guion: **BORRADOR — pendiente de aprobación**
Tema 2 de 3 del experimento #38. Qué aporta frente a los otros temas: es el MÉTODO A FONDO. El tema 1 explica la idea con la analogía de las monedas y el veredicto; este tema abre el cálculo con el código real del experimento, cinco pasos con los números del bot (Sharpe, 40 intentos, 5,609 días), y muestra qué palanca mueve cada resultado.
Estado del experimento: **MURIÓ** (Deflated Sharpe 0.010 frente a los 0.95 necesarios)
Serie: **G — Construyendo un bot (y por qué murió)**
Datos usados: `experiments.json` (v=38: analysis, verdict, notes, metrics, kpis, params_view, capital) · `exp_details.json` (algo, code.snippet con la fórmula, filters) · `series/20260610_140955_deflated-sharpe-del-ejecutable-v38.json` · fila #38 de la tabla «Con tu capital» (`docs/youtube/`).

## Títulos (opciones)
1. Deflated Sharpe paso a paso: así salió 0.010 con mi bot
2. Cómo se calcula si tu estrategia es suerte: 5 pasos y un código real
3. 40 intentos, 5,609 días, Sharpe −0.03: la cuenta del juez estadístico

## Miniatura
Fondo #09090b. Una pizarra con cinco peldaños numerados; en el último, una aguja de medidor clavada en el extremo izquierdo con «0.010» en rojo (#e11d2a). Texto grande: «5 PELDAÑOS». Logo ATLAS en la esquina superior derecha. (No repite las palabras de los títulos.)

---

## VIDEO LARGO (16:9, ≈ 4:50)

**[0:00 — Gancho]** (pantalla — BOCETO: cinco peldaños que se iluminan uno a uno; en la entrada tres números, «−0.03 · 40 · 5,609», y en la salida «0.010» sobre una meta de 0.95)
El juez que decide si mi bot tiene ventaja o solo suerte se calcula en cinco pasos. Entran tres números: un Sharpe de menos 0.03, unos 40 intentos y 5,609 días de datos. Sale uno: 0.010. Y se necesita 0.95.

**[0:16 — Este es el experimento #38]** (pantalla — BOCETO: rótulo «EXPERIMENTO #38 · DEFLATED SHARPE DE LA VERSIÓN EJECUTABLE» con el logo ATLAS; la URL pequeña debajo)
Este es el experimento #38 de ATLAS Lab: Deflated Sharpe de la versión ejecutable. Todos los resultados están en la página del experimento. Hoy abro la caja: vamos a ver el cálculo con los números reales, sin fórmulas intimidantes.

**[0:32 — Qué entra]** (pantalla — BOCETO: tarjeta params_view: ×2 · señal de ayer · 2007–2024 · 5,609 días · ~40 intentos (estimado) · umbral 0.95)
Los datos de entrada son los retornos diarios de la versión ejecutable del bot: apalancamiento ×2, señales de ayer, de 2007 a 2024, un total de 5,609 días. Su Sharpe, la ganancia por unidad de riesgo, es menos 0.03. Y un número que no sale de los retornos: cuántas configuraciones se probaron antes de quedarme con esta. Lo estimé en unas 40; no es un conteo exacto.

**[0:59 — Pasos 1 y 2: el Sharpe diario y el ruido]** (pantalla — BOCETO: fragmento del código real con las líneas resaltadas: «sr_d = sh / sqrt(252)» y «std0 = sqrt(1 / T)», con T = 5,609)
Paso uno: convertir el Sharpe anual en diario, dividiéndolo por la raíz de 252, la convención de días de operación al año. Paso dos: calcular cuánto ruido hay en un Sharpe diario cuando no existe ninguna ventaja. Ese ruido es la raíz de uno entre T, donde T son los días de datos. Con más días, menos ruido: un Sharpe pequeño medido durante muchos años dice más que uno medido durante pocos meses.

**[1:27 — Paso 3: el mejor Sharpe que da el azar]** (pantalla — BOCETO: 40 curvas de azar con una resaltada como «la mejor»; la barra de su Sharpe anualizado sube hasta 0.464; el rótulo «N = 40»)
Paso tres, el corazón del método. Si pruebas 40 estrategias que no valen nada y te quedas con la mejor, esa mejor tendrá un Sharpe positivo solo por suerte. La fórmula calcula cuánto, con un percentil de la curva de campana que depende de N, el número de intentos. Con 40 intentos y 5,609 días, es 0.464 al año. Ese es el listón del azar.

**[1:53 — Paso 4: la forma de los retornos]** (pantalla — BOCETO: dos histogramas, uno simétrico y otro con cola larga; rótulos «asimetría» y «colas gordas»; línea del código «denom = sqrt(1 − skew·sr_d + (kurt − 1)/4 · sr_d²)»)
Paso cuatro: ajustar por la forma de los retornos. Si hay asimetría o colas gordas, es decir, días extremos más frecuentes de lo normal, el azar tiene más margen para engañar y la prueba se vuelve más exigente. El código lo hace con la asimetría y la curtosis de los retornos del bot.

**[2:14 — Paso 5: la probabilidad]** (pantalla — BOCETO: medidor de 0 a 1; la aguja baja a 0.010 y la meta 0.95 queda lejos; barras «azar: 0.46» y «bot: −0.03»)
Paso cinco: comparar. Se resta el listón del azar al Sharpe del bot, se escala por los días de datos y se traduce en una probabilidad entre 0 y 1. Esa probabilidad es el Deflated Sharpe. Aquí: 0.010. Si pasara de 0.95, habría evidencia de ventaja real. No pasa: el Sharpe de menos 0.03 queda por debajo de lo que el azar da con 40 intentos.

**[2:40 — Qué palanca mueve qué]** (pantalla — BOCETO: tres palancas con flechas: «Sharpe observado ↑ → Deflated Sharpe ↑» · «intentos N ↑ → Deflated Sharpe ↓» · «días T ↑ → ruido ↓ → Deflated Sharpe ↑»)
Con los pasos a la vista, se entiende qué mueve el resultado. Un Sharpe observado más alto sube el Deflated Sharpe. Más intentos lo bajan, porque el azar tiene más oportunidades de lucir bien. Más días de datos lo suben, porque baja el ruido. Por eso un backtest que no te dice cuántas versiones probó está escondiendo una de las tres palancas.

**[3:05 — ¿Y si el número de intentos fuera otro?]** (pantalla — BOCETO: tabla de tres filas con ✕ rojas frente a la meta 0.95; al lado, la variante de salida medida)
| Intentos considerados | Deflated Sharpe |
|---|---|
| 20 | 0.020 |
| 40 | 0.010 |
| 91 | 0.004 |
Con 20 intentos, 0.020; con 91, 0.004. La conclusión no depende del número exacto. Con la salida medida el día del disparo, con un φ de 0.94, el Sharpe sería 0.025 y el Deflated Sharpe, 0.019. También muy lejos de 0.95.

**[3:28 — Los límites del cálculo]** (pantalla — BOCETO: checklist de exp_details.filters: Deflated Sharpe ✗ · Sharpe observado ✗ · batir a comprar y esperar ✗ · número de intentos «estimado» — · costos completos —)
Los límites. El número de intentos es una estimación, y por eso lo probé con 20 y con 91. Como el Sharpe es negativo, el ajuste solo confirma lo evidente; el método brilla cuando el Sharpe es positivo y hay que decidir si es ventaja o suerte. El Sharpe de menos 0.03 tampoco llega al 0.30 del laboratorio, el bot no bate a comprar y esperar, con menos 7.1% frente a más 68.7%, y los costos completos no se aplicaron: solo hay deslizamiento de 0.2% en el corte automático.

**[4:03 — Con tu capital]** (pantalla — BOCETO: tarjeta «Con tu capital»: $100,000 → −$7,102 contra +$68,723, 2007–2024; nota: «esta prueba mide si el Sharpe supera al azar, no cuánto rendiría una cuenta»)
Con $100,000 simulados entre 2007 y 2024, esa cartera ×2 termina en −$7,102. Comprar y esperar la misma cesta: +$68,723. Este experimento no mide cuánto rendiría una cuenta, sino si su Sharpe supera al azar. Es una simulación histórica, no una promesa; con $10,000 serían la décima parte.

**[4:22 — Ficha del experimento #38]** (pantalla — BOCETO: tarjeta de ficha con sello «NO SIRVIÓ», cuatro líneas y la URL atlas-lab-one.vercel.app/e/38; logo ATLAS)
Ficha del experimento #38. Estado: no sirvió. Cifra clave: Deflated Sharpe de 0.010 frente a los 0.95 necesarios; el azar da 0.46 con 40 intentos y el bot, menos 0.03. Filtro que decidió: el propio Deflated Sharpe. Lección: la ventaja se mide contra lo que el azar entrega para tantos intentos y tantos días. Revísalo completo en atlas-lab-one.vercel.app/e/38. Contenido educativo, no es asesoría financiera. El trading no se promete: se prueba.

---

## SHORT (9:16, ≈ 43 s)
Título del Short: Cinco pasos para saber si tu estrategia es suerte: 0.010 #shorts
Fórmula visual (CLAUDE.md del canal): b-roll vertical real con overlay 0.6, Ken Burns alternado, subtítulos karaoke en MAYÚSCULAS con cifras en rojo, ticker arriba, whoosh + flash en cada corte; golpe (bass + sacudida) solo en 0-3 s y 14-28 s.

**[0-3 s]** "Tres números entran: menos 0.03, 40 intentos, 5,609 días. Sale uno: 0.010."
- Boceto: b-roll de una pizarra con cálculos (kb=in); los tres números entran y «0.010» sale en rojo; golpe de bass.

**[3-14 s]** "Es el Deflated Sharpe. Si pruebas 40 estrategias sin valor y te quedas con la mejor, esa mejor tendrá un Sharpe positivo solo por suerte. El método calcula cuánto."
- Boceto: 40 curvas, una resaltada; la barra del azar sube.

**[14-28 s]** "Con 40 intentos y 5,609 días, el azar solo ya da 0.46 al año. Mi bot dio menos 0.03. Resultado: 0.010. Se necesita 0.95."
- Boceto: medidor que baja a 0.010 lejos de la meta 0.95; barras «azar 0.46» y «bot −0.03»; sacudida.

**[28-40 s]** "Más intentos bajan el resultado; más días de datos lo suben. Con 20 intentos: 0.020. Con 91: 0.004. La conclusión no cambia."
- Boceto: tres palancas con flechas y tres tarjetas N = 20 / 40 / 91.

**[40-48 s]** "Video completo en el canal. Experimento 38 completo en el enlace. No es asesoría financiera. ¿Suerte o ventaja? Mira lo que saca el azar: 0.46."
- Boceto: sello «NO SIRVIÓ»; logo ATLAS y «EXPERIMENTO #38 · ENLACE». Loop: la frase final enlaza con el listón del azar.

## Descripción (YouTube)
**Video largo**
https://atlas-lab-one.vercel.app/e/38?utm_source=youtube&utm_medium=video&utm_campaign=exp038-t2
Ficha del experimento #38 (Deflated Sharpe de la versión ejecutable): no sirvió. Sharpe −0.03, azar 0.46 con 40 intentos, Deflated Sharpe 0.010 (se necesita 0.95); con 20 o 91 intentos, 0.020 y 0.004.
Cálculo paso a paso del Deflated Sharpe (Bailey y López de Prado) con el código real del experimento: Sharpe diario, ruido, mejor Sharpe del azar, forma de los retornos y probabilidad final.

Capítulos: 0:00 Gancho · 0:16 Este es el experimento #38 · 0:32 Qué entra · 0:59 Pasos 1 y 2: el Sharpe diario y el ruido · 1:27 Paso 3: el mejor Sharpe que da el azar · 1:53 Paso 4: la forma de los retornos · 2:14 Paso 5: la probabilidad · 2:40 Qué palanca mueve qué · 3:05 ¿Y si el número de intentos fuera otro? · 3:28 Los límites del cálculo · 4:03 Con tu capital · 4:22 Ficha del experimento #38

**Short**
https://atlas-lab-one.vercel.app/e/38?utm_source=youtube&utm_medium=short&utm_campaign=exp038-t2
Experimento #38: Deflated Sharpe 0.010 con Sharpe −0.03, 40 intentos y 5,609 días; el azar da 0.46. No sirvió.

Contenido educativo. No es asesoría financiera ni recomendación de inversión.

Etiquetas: Deflated Sharpe, Sharpe ratio, López de Prado, overfitting, pruebas múltiples, backtest, estadística, validación de estrategias, bot de trading, trading cuantitativo, ATLAS Lab

## Rúbrica (autoevaluación — criterios del CLAUDE.md del canal, 1-5)
| hook_0_3s | ritmo | promesa_cumplida | potencial_loop | claridad_no_traders | honestidad_atlas | audio | cta |
|---|---|---|---|---|---|---|---|
| 4 | 4 | 5 | 4 | 4 | 5 | 4 | 4 |

Promedio: **4.25** → cumple el corte (≥ 4.0; hook ≥ 4 y honestidad 5).
Notas: el hook usa tres entradas y una salida, verificables. Punto débil: es el tema más técnico de la tanda; las fórmulas solo aparecen como líneas de código resaltadas y se narran en palabras. Se dice que el Sharpe negativo hace el ajuste trivial.

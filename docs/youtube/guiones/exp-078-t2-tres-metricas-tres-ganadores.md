# Experimento #78 — Tema 2: Tres métricas, tres ganadores (Turtle gana en Sharpe y en Calmar, y pierde en dinero)

**Tema 2 de 3 del experimento #78** · Qué aporta frente a los otros temas: es el tema del método y de la comparación. Pone las cuatro opciones del #78 (Turtle, Faber, vol-target B3 y comprar y esperar) frente a cuatro métricas (Sharpe, Calmar, saldo con retiro y dinero total) y muestra que el ganador cambia con la métrica. Se entiende sin los otros temas.
Estado del guion: **BORRADOR — pendiente de aprobación**
Estado del experimento: **parcial** (Turtle y Faber ganan en Calmar a comprar y esperar, pero retirando 4% al año comprar y esperar termina más alto)
Serie: E (gestión de riesgo: lo poco que se sostuvo).
Datos usados: `experiments.json` (v=78: kpis, metrics, analysis, params_view; v=73 y v=74: Sharpe fuera de muestra de Faber y Turtle y de comprar y esperar los 11 activos) · `exp_details.json` (extra-v78: algo, code, filters) · tabla «Con tu capital» (filas #73, #74 y #78: Faber +$41,712, Turtle +$41,686, comprar y esperar +$92,344 con $100,000, 2012–2024).
Producción (CLAUDE.md del canal): b-roll real detrás de cada escena con overlay 0.6, Ken Burns alternando, subtítulos karaoke en MAYÚSCULAS, un dato visual por escena. Colores: rojo `#e11d2a`, verde `#22c55e`, fondo `#09090b`.

## Títulos
1. Turtle gana en Sharpe y en Calmar y pierde en dinero: tres métricas, tres ganadores
2. ¿Cuál es la mejor estrategia? Depende de la métrica: Sharpe, Calmar y retiros
3. Retirando 4% al año: Turtle $37,864 contra $56,401 de quedarse quieto

## Miniatura
Fondo `#09090b`. Un podio con tres cajas, cada una con un ganador distinto: «TURTLE» (verde `#22c55e`) en dos y «QUEDARSE QUIETO» (blanco) en la tercera. Texto: «¿MEJOR PARA QUÉ?». Logo ATLAS arriba a la derecha.

---

## VIDEO LARGO (≈ 6½ min)

**[0:00 — Gancho]** (pantalla: tres podios con ganadores distintos: Sharpe → Turtle, Calmar → Turtle, retiro → comprar y esperar)
BOCETO: tres podios que aparecen uno tras otro; los dos primeros con la tortuga verde, el tercero con el lingote blanco «comprar y esperar»; golpe de bajo en el tercero.
> Con la misma cartera de once activos, Turtle gana si mides por Sharpe, 0.75 contra 0.67, y por Calmar, 0.29 contra 0.17. Pero si retiras 4% al año de $50,000, termina con $37,864 y quedarte quieto con $56,401.

**[0:18 — Qué experimento es]** (pantalla: rótulo «Experimento #78 · ATLAS Lab» y el nombre debajo)
BOCETO: rótulo con el número 78 y el nombre «Calmar y retiros: ¿mejor que comprar y mantener para ingreso?»; logo en la esquina.
> Este es el experimento #78 de ATLAS Lab: Calmar y retiros, ¿mejor que comprar y mantener para ingreso? Todos los resultados están en la página del experimento.

**[0:45 — Las cuatro opciones]** (pantalla: cuatro tarjetas)
BOCETO: tarjetas: «Turtle (ruptura de 20 y 10)», «Faber (sobre la media de 200 días)», «vol-target B3 (comprar y esperar × 2 × fracción de activos en tendencia, de 0 a 2)» y «comprar y esperar»; cesta de 11 activos.
> Cuatro opciones sobre once activos, de 2012 a 2024: comprar y esperar; Faber, que mantiene un activo mientras está sobre su media de 200 días; Turtle, que compra al romper el máximo de 20 días y sale al perder el mínimo de 10; y un vol-target al que llamo B3, que multiplica comprar y esperar por 2 y por la fracción de activos en tendencia, entre 0 y 2 veces.

**[1:30 — Las métricas]** (pantalla: tres fórmulas simples)
BOCETO: tres tarjetas: «Sharpe = ganancia por unidad de riesgo», «Calmar = retorno anual ÷ caída máxima», «saldo con retiro = cuánto queda después de sacar 4% al año».
> Tres formas de medir. El Sharpe es la ganancia por cada unidad de riesgo; el riesgo es cuánto se mueve la estrategia, hacia arriba o hacia abajo. El Calmar es el retorno anual dividido entre la caída máxima, la peor bajada desde un máximo. Y el saldo con retiro mide lo que queda después de sacar 4% al año de $50,000, o sea, $2,000 cada año.

**[2:10 — Los resultados]** (pantalla: tabla animada con el ganador de cada fila resaltado)
BOCETO: filas que aparecen con tick; la celda ganadora en verde.
| Métrica | Turtle | Faber | Vol-target B3 | Comprar y esperar | Ganador |
|---|---|---|---|---|---|
| Sharpe fuera de muestra (2019–2024) | 0.75 | 0.58 | no se midió | 0.67 | Turtle |
| Calmar (2012–2024) | 0.29 | 0.20 | 0.20 | 0.17 | Turtle |
| Saldo con retiro de 4% (de $50,000) | $37,864 | $37,646 | $53,486 | $56,401 | Comprar y esperar |
| Con $100,000 sin retiros (2012–2024) | +$41,686 | +$41,712 | no se midió | +$92,344 | Comprar y esperar |
> Turtle gana las dos métricas de riesgo. Pero cuando mides dinero, ya sea sin retiros o retirando 4%, gana comprar y esperar. Y B3 queda segundo en la cuenta de retiros, con $53,486. Ojo con la tabla: el Sharpe es de 2019 a 2024 y el Calmar, de 2012 a 2024, así que son periodos distintos.

**[3:10 — Por qué cambia el ganador]** (pantalla: dos curvas de saldo con retiros)
BOCETO: dos curvas de saldo que parten de $50,000; la verde (comprar y esperar) sube y la roja (Turtle) baja bajo la línea inicial; texto «+5% > 4% · +2.7% < 4%».
> Cada métrica premia algo distinto. El Sharpe y el Calmar premian estar poco expuesto: Turtle pasa tiempo en efectivo y cae poco. Pero el dinero premia ganar. Comprar y esperar rinde alrededor de +5% al año, y eso sostiene un retiro de 4%. Turtle y Faber, con +2.7% anual, ganan menos de lo que retiras, y el retiro va consumiendo el capital.

**[3:55 — Qué métrica usar según lo que quieres]** (pantalla: tres caminos con tres personas)
BOCETO: tres personas: «quiero ganar más» → dinero total; «quiero retirar» → saldo con retiro; «quiero dormir» → Calmar y caída máxima.
> Si quieres ganar lo máximo posible, mira el dinero total: ganó comprar y esperar. Si vas a retirar dinero, mira el saldo después de retirar: ganó comprar y esperar, con B3 muy cerca. Si tu prioridad es aguantar caídas pequeñas, mira el Calmar y la caída máxima: ganó Turtle. Ninguna estrategia ganó las tres cosas a la vez, y eso es lo difícil.

**[4:40 — Con tu capital]** (pantalla: tarjeta «Con tu capital» con la curva de Turtle y la gris)
BOCETO: nota «sin retiros»; contadores finales; marca de la caída máxima de −9.5% contra −29.8%.
> Sin retiros, con $100,000 entre 2012 y 2024: Turtle gana $41,686 y comprar y esperar, $92,344. Con $10,000: +$4,169 contra +$9,234. Con retiros del 4% sobre $50,000, los saldos finales son los de la tabla.

**[5:10 — Preguntas de un escéptico]** (pantalla: tres tarjetas: «¿fuera de muestra?», «¿B3 con costos?», «¿otro retiro?»)
BOCETO: tres tarjetas que se voltean con «no aplicado», «sin costos ni financiamiento» y «no probado».
> Preguntas que me haría un escéptico. ¿Y fuera de muestra? Aquí todo el periodo es una sola muestra. ¿Y B3 con costos? No los modela, ni el financiamiento del apalancamiento. ¿Y otro retiro? Solo probé 4%.

**[5:35 — Ficha del experimento #78]** (pantalla: tarjeta con la ficha y la URL abajo)
BOCETO: tarjeta con cinco líneas que entran con tick y, al final, la URL resaltada en verde.
> Ficha del experimento 78. Estado: parcial. Cifras clave: Calmar de Turtle 0.29, de Faber 0.20 y de comprar y esperar 0.17; con retiro de 4%, $37,864 contra $56,401. Lo que decidió: el retiro, que exige un retorno al menos igual a lo que sacas. Lección: la mejor estrategia depende de la métrica. Revísalo completo en atlas-lab-one.vercel.app/e/78.

**[6:05 — Cierre]**
BOCETO: los tres podios con sus tres ganadores; logo.
> Todos los datos en atlas-lab-one.vercel.app, experimento 78. El trading no se promete: se prueba. Contenido educativo, no es asesoría financiera.

---

## SHORT (9:16, ≈ 50 s)

**[0-3 s]** (boceto: tres podios con ganadores distintos; b-roll de podio deportivo, kb=in; golpe de bajo)
> Turtle gana en Sharpe y en Calmar. Y pierde en dinero.

**[3-14 s]** (boceto: barras Sharpe 0.75 contra 0.67 y Calmar 0.29 contra 0.17)
> Su Sharpe fuera de muestra es 0.75, contra 0.67 de comprar y esperar. Su Calmar es 0.29, contra 0.17. El Calmar es el retorno anual dividido entre la caída máxima.

**[14-28 s]** (boceto: dos frascos de monedas de $50,000 que se vacían; cifras $37,864 y $56,401)
> Pero si empiezas con $50,000 y retiras 4% al año, Turtle termina con $37,864. Quedarte quieto: $56,401.

**[28-40 s]** (boceto: línea de «+5%» sobre «4%» y «+2.7%» bajo «4%»)
> Comprar y esperar rinde unos 5% al año y sostiene el retiro. Turtle rinde 2.7%, menos de lo que retiras.

**[40-45 s]** (boceto: texto «¿mejor para qué?»)
> Ganar, retirar o dormir: la mejor depende de la métrica.

**[45-50 s]** (boceto: texto «Experimento #78 completo en el enlace»; logo)
> Video completo en el canal y experimento #78 completo en el enlace. ¿Qué quieres de tu estrategia?

Gancho alterno A: «Mejor Calmar no es mejor retiro: $37,864 contra $56,401.» · B: «Tres métricas, tres ganadores.»

## Descripción de YouTube — video largo
https://atlas-lab-one.vercel.app/e/78?utm_source=youtube&utm_medium=video&utm_campaign=exp078-t2
Ficha: experimento #78, Calmar y retiros. Estado: parcial. Calmar: Turtle 0.29, Faber 0.20, B3 0.20 y comprar y esperar 0.17. Retirando 4% al año de $50,000: comprar y esperar $56,401, B3 $53,486, Turtle $37,864 y Faber $37,646.
Cuatro opciones, once activos (2012–2024) y cuatro métricas: el ganador cambia con la métrica. Sin prueba fuera de muestra en el cálculo de Calmar y retiros.
Contenido educativo. No es asesoría financiera ni recomendación de inversión.

## Descripción de YouTube — Short
https://atlas-lab-one.vercel.app/e/78?utm_source=youtube&utm_medium=short&utm_campaign=exp078-t2
Ficha: experimento #78, parcial. Calmar de Turtle 0.29 contra 0.17; con retiro de 4%, $37,864 contra $56,401. Contenido educativo, no es asesoría financiera.

## Capítulos
0:00 Gancho · 0:18 Qué experimento es · 0:45 Las cuatro opciones · 1:30 Las métricas · 2:10 Los resultados · 3:10 Por qué cambia el ganador · 3:55 Qué métrica usar según lo que quieres · 4:40 Con tu capital · 5:10 Preguntas de un escéptico · 5:35 Ficha del experimento #78 · 6:05 Cierre

## Etiquetas
Calmar ratio, Sharpe ratio, retiro del 4%, Turtle Trading, Faber GTAA, drawdown, comparar estrategias, métricas de trading, comprar y mantener, backtest, trading con datos, ATLAS Lab

## Rúbrica (autoevaluación, 1–5)
| Pieza | hook_0_3s | ritmo | promesa_cumplida | potencial_loop | claridad_no_traders | honestidad_atlas | audio | cta | Promedio |
|---|---|---|---|---|---|---|---|---|---|
| Largo | 5 | 4 | 5 | 4 | 4 | 5 | 4 | 4 | 4.38 |
| Short | 5 | 4 | 5 | 4 | 4 | 5 | 4 | 4 | 4.38 |

Hook ≥ 4 ✓ · honestidad 5 ✓. Punto débil: la fila de Sharpe y la de Calmar usan periodos distintos (2019–2024 y 2012–2024); el largo lo avisa en voz y en pantalla. B3 se muestra sin costos ni financiamiento, con nota ámbar.

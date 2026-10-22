# Experimento #33 — Activación temprana del filtro (disparo temprano)

Estado del guion: **BORRADOR — pendiente de aprobación**
Estado del experimento: **MURIÓ** (0 de 6 combinaciones sobreviven 2014–2024 con ×2; la base se corta el 11-nov-2016)
Serie: **G — Construyendo un bot (y por qué murió)**
Datos usados: `experiments.json` (v=33: analysis, verdict, notes, metrics, kpis, params_view, capital) · `exp_details.json` (algo, filters con las fechas y Sharpe de las 6 combinaciones) · `series/20260610_140718_disparo-temprano-del-filtro-v33.json` (curvas: estrategia hasta la quiebra, «sin reglas de prop firm», comprar y esperar) · fila #33 de la tabla «Con tu capital» (`docs/youtube/`).

## Títulos (opciones)
1. Salir ANTES del crash no salvó mi bot: 0 de 6 sobreviven
2. 6 filtros de pánico más sensibles: las 6 cuentas murieron
3. Cayó a 89,358 con el piso en 90,000: el bot que salía antes

## Miniatura
Fondo #09090b. Texto gigante rojo "0 DE 6" con seis pequeñas ✕ blancas debajo; abajo, en blanco y pequeño, "11 NOV 2016". Elemento visual: una vela roja con un reloj adelantado. Logo ATLAS en la esquina inferior derecha. (No repite el título 1; combina bien con el 3.)

---

## VIDEO LARGO (16:9, ≈ 6:35)

**[0:00 — Gancho]** (pantalla — BOCETO: línea del saldo de la cuenta de series/…v33.json acercándose a una línea roja rotulada «piso 90,000»; zoom al último punto: «89,358»; sello ✕ y fecha «11-nov-2016»)
La cuenta llegó a 89,358. El piso era 90,000. Con ese margen murió mi bot el 11 de noviembre de 2016. Había hecho lo que parece más sensato: que el filtro de pánico dispare más temprano, para salir antes de que la caída duela. Seis versiones. Cero sobrevivieron a 2014–2024.

**[0:22 — El bot y su día incómodo]** (pantalla — BOCETO: diagrama «cesta de 15 activos → filtro VIX/crédito → dentro/fuera»; resaltar el día del disparo con un reloj; tarjeta: «φ = 0.94 con este filtro»)
Para quien llega nuevo: el bot compra una cesta de 15 activos y tiene un filtro de pánico basado en el VIX, el índice del miedo, y en el crédito. Decide con el cierre de ayer. Pero el día en que se dispara, ya está dentro y se come parte de la caída. Con este filtro medí cuánto: φ igual a 0.94, es decir, el bot esquiva apenas cerca del 6% del movimiento de ese día. Y juega con las reglas de una empresa de fondeo, una prop firm: si la cuenta cae 10%, la cierran.

**[1:03 — La hipótesis]** (pantalla — BOCETO: dos gráficos de un mismo desplome; arriba, alarma tardía; abajo, alarma temprana con el rótulo «¿duele menos?»; texto «umbral VIX 28 → 24 → 22»)
La idea tiene lógica. Si el umbral del VIX baja, la alarma suena antes, el día de salida es más pequeño y el golpe duele menos. Es sentido común: salir pronto. Y el sentido común es justo lo que hay que probar con datos.

**[1:23 — Las dos perillas del filtro]** (pantalla — BOCETO: dos perillas animadas; la del VIX con marcas 22 · 24 · 28 y la del crédito con 40 y 60 días; una línea del VIX cruzando cada umbral en momentos distintos)
Antes de la prueba, una aclaración sobre las dos perillas. El umbral del VIX decide a partir de qué nivel de miedo el bot se retira: 28 es un nivel alto y 22 es más sensible, porque se cruza más a menudo. La media del crédito compara los bonos de empresas arriesgadas con los más seguros: si caen por debajo de su promedio de 40 o de 60 días, el bot también se retira. Una media más corta reacciona más rápido. Más sensibilidad en las dos significa más disparos.

**[2:01 — Cómo se probó]** (pantalla — BOCETO: cuadrícula 3×2 animada «VIX 22/24/28» × «crédito 40/60 días»; chips: ×2 · φ medido por combinación 0.90–0.96 · 205 días de disparo en la base · 2014–2024 y 2007–2013)
Armé una cuadrícula de seis combinaciones: umbral del VIX de 22, 24 o 28, y media del crédito de 40 o 60 días. Apalancamiento ×2. Para cada una medí el φ con datos horarios: entre 0.90 y 0.96, y 0.94 en la base, sobre 205 días de disparo. Todo con la señal de ayer, en 2014–2024 y en 2007–2013, que es el periodo fuera de muestra, es decir, años que el bot no vio al diseñarse, e incluye la crisis de 2008. Para medir cada versión uso el Sharpe, la ganancia por unidad de riesgo: si es negativo, la estrategia pierde.

**[2:44 — Los resultados]** (pantalla — BOCETO: tabla que se llena fila por fila; cada fila termina con un sello ✕ rojo; la base resaltada. Barra lateral con las 6 fechas de muerte sobre una línea de tiempo)
| Umbral VIX / media del crédito | Muere (2014–2024) | Sharpe |
|---|---|---|
| 22 / 40 días | 25-jul-2016 | −0.76 |
| 22 / 60 días | 9-nov-2016 | −0.64 |
| 24 / 40 días | 9-nov-2016 | −0.71 |
| 24 / 60 días | 9-nov-2016 | −0.66 |
| 28 / 40 días (base) | 11-nov-2016 | −0.58 |
| 28 / 60 días | 11-nov-2016 | −0.53 |
Seis de seis mueren en 2014–2024. La más sensible, VIX 22 con crédito de 40 días, es la primera en caer: el 25 de julio de 2016. Las demás, entre el 9 y el 11 de noviembre de 2016: cinco de las seis mueren en la misma ventana, sin importar el umbral. En 2007–2013, en cambio, las seis sobreviven, con Sharpe entre 0.04 y 0.20.

**[3:12 — Por qué falla]** (pantalla — BOCETO: gráfico de precio con señales de entrada y salida repetidas, marcadas como «falsa alarma» en rojo; texto «no es cuanto antes mejor»)
Disparar antes produce falsas alarmas: el bot sale, vuelve a entrar y sale otra vez sin que haya pasado nada grave, pagando el vaivén. Por eso la versión más sensible muere antes que la base. El momento de salir tiene un punto óptimo; no es «cuanto antes mejor».

**[3:34 — El margen que faltó]** (pantalla — BOCETO: curva real de series/…v33.json (hasta la quiebra, en rojo) con zoom a 89,358 vs 90,000; tres tarjetas: «φ ≤ 0.90 → Sharpe 0.08», «φ = 0.94 medido (IC 95%: 0.87–1.00)», «φ = 0.5 → Sharpe 0.40, no respaldado»)
La base muere por poco: baja hasta 89,358 frente al piso de 90,000. Con un φ de 0.90 o menos sobreviviría, con Sharpe 0.08. Pero el medido es 0.94, y su intervalo de confianza llega hasta 1.00. Si pudiera esquivar la mitad del día, lo que los datos no respaldan, el Sharpe sería 0.40. Y con ×1.5 la base sí sobrevive, pero con Sharpe 0.05 en 2014–2024 y 0.14 en 2007–2013: poco.

**[4:05 — ¿Y si no hubiera corte?]** (pantalla — BOCETO: curva «sin reglas de prop firm» de series/…v33.json en azul sobre la de comprar y esperar en gris; tarjetas −1.0% · −16.1% · Sharpe 0.02)
Podrías pensar que el problema son las reglas. Sin ellas, la misma base ×2 habría terminado 2014–2024 en −1.0%, con Sharpe 0.02 y una caída máxima, el peor tramo de pico a valle, de −16.1%. Comprar y esperar la misma cesta dio +58.9% con Sharpe 0.47. Es una línea hipotética: en la realidad, la cuenta se cierra ese día.

**[4:31 — El marcador de filtros]** (pantalla — BOCETO: checklist de exp_details.filters: Sharpe 2014–2024 ✗ · Sharpe 2007–2013 ✗ · batir a comprar y esperar ✗ · 6 combinaciones ✗ · señal rezagada ✓ · Deflated Sharpe — · costos completos —)
El tablero de filtros confirma el veredicto. El Sharpe de la base, −0.58, no llega a lo exigido; fuera de muestra, 0.04, tampoco alcanza el 0.30; no bate a comprar y esperar, con −10.6% frente a +58.9%; y de las seis combinaciones, ninguna sobrevive. Pasa uno solo: la señal está rezagada y no mira el futuro. El Deflated Sharpe, la prueba que descuenta la suerte de haber probado muchas ideas, no se aplicó, porque con ninguna de las seis cuentas viva en 2014–2024 no hay un Sharpe que contrastar por selección. Los costos completos tampoco: solo el deslizamiento de 0.2% en el corte automático.

**[5:15 — Qué no concluye este experimento]** (pantalla — BOCETO: dos columnas: «lo que sí se probó» (6 combinaciones, ×2, 2014–2024 y 2007–2013) y «lo que no» (otros activos, otros apalancamientos, otras reglas), esta última con casillas vacías)
Conviene acotar la conclusión. No dice que un filtro nunca deba disparar temprano. Dice que, con estas dos perillas y este bot, ninguna de las seis versiones aguanta con ×2 en 2014–2024. Otras reglas, otros activos u otro apalancamiento serían otra prueba, y habría que hacerla con el mismo rigor.

**[5:37 — Con tu capital]** (pantalla — BOCETO: tarjeta «Con tu capital»: $100,000 → −$10,642 contra −$5,766, rotulada «2014–2016, hasta que se cierra la cuenta»)
Con $100,000 simulados, la cuenta del bot se cierra con −$10,642. Comprar y esperar la misma cesta, en las mismas fechas, 2014–2016: −$5,766. Es una simulación histórica, no una promesa; con $10,000 serían la décima parte, y en la tarjeta «Con tu capital» de la web verías esa cuenta cerrada.

**[5:59 — Conclusión]** (pantalla — BOCETO: sello «NO SIRVIÓ»; KPIs −10.6% · −0.58 · 0 de 6)
Veredicto: no sirvió. Disparar antes no ayuda: con el φ medido ninguna de las seis combinaciones sobrevive 2014–2024 con ×2. Lo que sí queda es un principio: salir tiene un punto óptimo, y las falsas alarmas cuestan tanto como las tardías. En el próximo experimento pruebo lo contrario: apalancar más cuando el mercado está en calma.

**[6:24 — Cierre]** (pantalla — BOCETO: logo ATLAS + URL; las seis ✕ de fondo)
Todos los datos están en atlas-lab-one.vercel.app, experimento 33. Contenido educativo, no es asesoría financiera. El trading no se promete: se prueba.

---

## SHORT (9:16, ≈ 48 s)
Título del Short: Salir antes del crash: 0 de 6 sobreviven #shorts
Fórmula visual (CLAUDE.md del canal): b-roll vertical real con overlay 0.6, Ken Burns alternado, subtítulos karaoke en MAYÚSCULAS con cifras en rojo, ticker arriba, whoosh + flash en cada corte; golpe (bass + sacudida) solo en 0-3 s y 28-40 s.

**[0-3 s]** "Salir antes del crash: 0 de 6 sobreviven."
- Boceto: b-roll de bolsa cayendo (kb=in); «0 DE 6» gigante en rojo con seis ✕ cayendo; golpe de bass.

**[3-14 s]** "Mi bot sale del mercado cuando el VIX, el índice del miedo, se dispara. Probé seis versiones más sensibles, con apalancamiento ×2, para que saliera antes de la caída."
- Boceto: cuadrícula 3×2 de las seis versiones (VIX 22/24/28 × crédito 40/60) iluminándose una a una.

**[14-28 s]** "Resultado: las seis cuentas murieron. La más sensible, la primera: el 25 de julio de 2016. Sus falsas alarmas la mataron antes. Las otras cinco, entre el 9 y el 11 de noviembre."
- Boceto: línea de tiempo con seis sellos ✕ cayendo en sus fechas; la del 25-jul-2016 se resalta en rojo.

**[28-40 s]** "La base cayó a 89,358. El piso era 90,000. Murió por poco: con un fi de 0.90 habría sobrevivido. El medido fue 0.94."
- Boceto: curva real de series/…v33.json acercándose a la línea de 90,000; zoom al punto final; sacudida. Texto: «φ (fi) = parte del movimiento del día de pánico que el bot se come».

**[40-48 s]** "Salir antes no es salir mejor. El video completo está en el canal. No es asesoría financiera. Seis versiones, y el resultado es este:"
- Boceto: logo ATLAS; fondo atenuado con las seis ✕. Loop: la frase queda abierta y enlaza con «0 de 6 sobreviven» al reiniciar.

## Descripción (YouTube)
Probé seis versiones de mi filtro de pánico que se disparan más temprano (umbral del VIX 22, 24 o 28 y media del crédito de 40 o 60 días) con apalancamiento ×2. Resultado: ninguna sobrevive 2014–2024; la base se corta el 11 de noviembre de 2016 al caer a 89,358 con el piso en 90,000. Experimento #33.

Datos completos: https://atlas-lab-one.vercel.app (experimento #33)

Capítulos: 0:00 Gancho · 0:22 El bot y su día incómodo · 1:03 La hipótesis · 1:23 Las dos perillas del filtro · 2:01 Cómo se probó · 2:44 Los resultados · 3:12 Por qué falla · 3:34 El margen que faltó · 4:05 ¿Y si no hubiera corte? · 4:31 El marcador de filtros · 5:15 Qué no concluye este experimento · 5:37 Con tu capital · 5:59 Conclusión · 6:24 Cierre

Contenido educativo. No es asesoría financiera ni recomendación de inversión.

Etiquetas: trading, bot de trading, backtest, VIX, filtro de pánico, prop firm, apalancamiento, Sharpe ratio, gestión de riesgo, falsas alarmas, ATLAS Lab

## Rúbrica (autoevaluación — criterios del CLAUDE.md del canal, 1-5)
| hook_0_3s | ritmo | promesa_cumplida | potencial_loop | claridad_no_traders | honestidad_atlas | audio | cta |
|---|---|---|---|---|---|---|---|
| 4 | 4 | 5 | 5 | 4 | 5 | 4 | 4 |

Promedio: **4.38** → cumple el corte (≥ 4.0; hook ≥ 4 y honestidad 5).
Notas: el hook usa un resultado contraintuitivo (0 de 6) en 8 palabras; el loop es de frase abierta. Punto débil: «φ» y «piso» requieren el bloque de contexto; en el Short se reduce a «0.94» sin explicarlo a fondo.

# Experimento #31 — Filtro reactivo intradía

Estado del guion: **BORRADOR — pendiente de aprobación**
Estado del experimento: **PARCIAL** (con ×1.5 sobrevive, pero con Sharpe 0.09 y 0.11, muy bajo el 0.30 que pide el laboratorio)
Serie: **G — Construyendo un bot (y por qué murió)**
Datos usados: `experiments.json` (v=31: analysis, verdict, notes, metrics, kpis, params_view, capital) · `exp_details.json` (algo, filters) · `series/20260610_140602_filtro-reactivo-intradia-v31.json` (curva 1 = estrategia ×1.5; curva 2 = comprar y esperar) · fila #31 de la tabla «Con tu capital» (`docs/youtube/`).

## Títulos (opciones)
1. Mi bot huye del crash… y solo evita ~10% de la caída del día
2. Medí cuánto crash esquiva un bot en vivo: φ = 0.90
3. Bot que sale al sonar la alarma del VIX: +4.2% vs +58.9%

## Miniatura
Fondo #09090b. Texto gigante rojo (#e11d2a) "SOLO 10%"; debajo, en blanco y pequeño, "del crash esquiva". Elemento visual: una vela roja enorme cayendo y una flecha verde de salida que apenas toca el último tramo. Logo ATLAS en la esquina inferior derecha. (No repite el título: usar con el título 2 o 3.)

---

## VIDEO LARGO (16:9, ≈ 6:34)

**[0:00 — Gancho]** (pantalla — BOCETO: fondo negro, vela roja gigante cayendo; un contador sube de 0 a 90% con la etiqueta «φ = 0.90» y queda en rojo; texto «SOLO ~10% ESQUIVADO»)
Mi bot tiene un botón de pánico: cuando el mercado se pone feo, sale. Pero el día en que suena la alarma, el mercado ya se movió. Así que medí, con datos hora por hora, cuánto de esa caída alcanza a esquivar. La respuesta: solo alrededor del 10%. El otro 90% se lo come igual.

**[0:24 — El bot en 40 segundos]** (pantalla — BOCETO: diagrama animado «cesta de 15 activos → filtro de pánico → dentro/fuera»; tarjeta de params_view: ×1.5, kill-switch −3% del día, VIX > 28)
Para quien llega nuevo: es un bot que compra una cesta de 15 activos —divisas, metales, índices y energía—, con más peso en lo que menos se mueve. Tiene un filtro de pánico: si el VIX, el índice del miedo de Wall Street, pasa de 28, si salta más de 50% en cinco días, o si el crédito se debilita, hoy se queda fuera. Esa decisión se toma con el cierre de ayer. Tiene también un corte automático: si en un día pierde 3%, cierra la posición. Además juega con las reglas de una empresa de fondeo, una prop firm: si la cuenta cae 10%, o pierde 5% en un solo día, la cierran. Y hay un día incómodo: el día del disparo, cuando la alarma suena y el bot todavía está dentro.

**[1:20 — La pregunta]** (pantalla — BOCETO: línea de tiempo de un día de mercado; dos flechas: «salir al cierre» vs «salir en vivo»; aparece la letra φ y una barra de 0 a 1)
Hay dos maneras de manejar ese día. Una: esperar al cierre y salir. Otra: reaccionar dentro del mismo día, con un monitor que sigue el VIX en vivo y sale en cuanto cruza el umbral. Este experimento mide cuánto vale la segunda. Para eso definí una medida: φ, la letra griega fi. Es la fracción del movimiento del día de disparo que el bot se come. Si φ vale 1, no esquivó nada. Si vale 0.5, esquivó la mitad.

**[1:54 — Cómo se midió]** (pantalla — BOCETO: checklist animado de exp_details.filters: datos horarios de Dukascopy ✓ · VIX en vivo reconstruido con VXX (desde mar-2017) ✓ · crédito sin datos intradía ✗; gráfico de torta «3 de cada 4 días de disparo = solo crédito»)
Los datos son horarios, de Dukascopy. Si el VIX en vivo cruza el umbral, el bot sale una hora después de verlo. Pero el VIX en vivo no se puede bajar tal cual: lo reconstruí con VXX, un producto que sigue la volatilidad, y eso solo existe desde marzo de 2017. Además, en 3 de cada 4 días de disparo la señal es solo de crédito, y del crédito no hay datos dentro del día: su mejor sustituto explica apenas el 68% de su variación diaria. Esa señal solo existe tras el cierre de Nueva York, así que ese día el bot sale al cierre.

**[2:38 — El resultado: φ = 0.90]** (pantalla — BOCETO: medidor semicircular que marca 0.90 con su intervalo 0.83–0.96; tarjetas «2014–2024: 0.90», «2007–2013: 0.89», «30 días de VIX en vivo: 0.80»; línea punteada en 0.44 y 0.58 rotulada «cota imposible»)
El resultado: φ igual a 0.90, con un intervalo de confianza del 95% entre 0.83 y 0.96, sobre 188 días de disparo entre 2007 y 2024. En 2014–2024 vale 0.90 y en 2007–2013, 0.89. En los 30 días en que dispara el VIX en vivo baja a 0.80: algo mejor, pero son pocos días. Traducido: el bot evita solo cerca del 10% del movimiento de ese día. ¿Y esquivar la mitad? Tendría que salir al abrir Wall Street sabiendo ya cómo va a cerrar. Esa cota, 0.44 en 2014–2024 y 0.58 en 2007–2013, es teórica: ningún bot la alcanza.

**[3:20 — Por qué importa: el Sharpe según φ]** (pantalla — BOCETO: tabla animada fila por fila; la fila de φ = 0.90 se resalta en rojo; línea horizontal «mínimo del laboratorio: 0.30»)
Aquí está lo importante. El Sharpe es la ganancia por unidad de riesgo; el laboratorio exige más de 0.30 fuera de muestra, o sea, en años que el bot no vio al diseñarse. Mira cómo cambia con ×1.5 según φ.
| φ | Sharpe 2014–2024 | Sharpe 2007–2013 |
|---|---|---|
| 0.50 (no respaldado por los datos) | 0.37 | 0.34 |
| 0.75 | 0.20 | 0.19 |
| 0.90 (medido) | 0.09 | 0.11 |
| 1 (rezago puro de un día) | 0.02 | 0.05 |
Con φ de 0.5 pasaría el listón. Con el φ medido, no. Toda la diferencia entre «prometedor» y «sin ventaja» está en un número que no se puede suponer: se tiene que medir.

**[3:52 — Los resultados de la cartera]** (pantalla — BOCETO: curva real de series/…v31.json dibujándose de izquierda a derecha, estrategia en rojo y «comprar y esperar» en gris; tarjetas kpis: +4.2%, −11.6%, Sharpe −0.53 con ×2, Sharpe −1.06 con ×3; sello ✕ el 11-nov-2016 sobre la línea de ×2)
Con el φ medido y ×1.5, la cuenta sobrevive los dos periodos, pero con Sharpe 0.09 en 2014–2024 y 0.11 en 2007–2013; el retorno total es +4.2% y la caída máxima, el peor tramo de pico a valle, −11.6%. Con ×2, la cuenta toca el límite de la empresa de fondeo y muere el 11 de noviembre de 2016, con Sharpe −0.53. Con ×3 también muere, con −1.06. Y la vara de comparación: comprar y esperar la misma cesta dio Sharpe 0.47 y +58.9% en 2014–2024; en 2007–2013, Sharpe 0.15 y +6.2%, frente a 0.11 y +3.0% del bot.

**[4:34 — Plan B: una regla de precio]** (pantalla — BOCETO: tarjeta con rango «0.5 a 2 desviaciones»; barras: φ 0.46 → 0.94, salidas falsas 4% → 39%, Sharpe −0.77 → −0.01 en rojo)
Probé otra salida que no depende del VIX: salir si la cesta cae entre 0.5 y 2 desviaciones durante el día. Con ella φ mejora, de 0.46 a 0.94 según el umbral. Pero la regla sale en entre el 4% y el 39% de los días en que no había ningún disparo, y con 3 puntos básicos de costo por operación su Sharpe es negativo: de −0.77 a −0.01.

**[5:04 — Lo que este experimento no cubre]** (pantalla — BOCETO: checklist de exp_details.filters con tres líneas en gris: «costos: solo deslizamiento 0.2%», «spread: no», «Deflated Sharpe: no aplicado»)
Seamos claros con los límites. En los costos solo apliqué un deslizamiento de 0.2% en los días de corte automático: no hay diferencial entre compra y venta, ni la comisión de 3 puntos básicos por rotación que usa el laboratorio. Con costos completos, el resultado no mejoraría. Y el Deflated Sharpe, la prueba que descuenta la suerte de haber probado muchas ideas, no se aplicó en este experimento. Lo veremos en el experimento 38.

**[5:36 — Con tu capital]** (pantalla — BOCETO: tarjeta «Con tu capital» de la web: $100,000 → +$4,155 (rojo/gris) contra +$58,879 (verde); pie: «simulación histórica 2014–2024»)
Con $100,000 simulados entre 2014 y 2024, el bot ×1.5 termina en +$4,155. Comprar y esperar la misma cesta: +$58,879. Es una simulación histórica, no una promesa ni una recomendación; con $10,000 serían la décima parte.

**[5:53 — Conclusión]** (pantalla — BOCETO: sello «PARCIAL» sobre los KPIs; frase en grande: «reaccionar rápido ≠ reaccionar a tiempo»)
Veredicto: parcial. Con ×1.5 sobrevive, pero su Sharpe, de 0.09 y 0.11, queda muy por debajo del 0.30 que exige el laboratorio, y no le gana a comprar y esperar. La lección: reaccionar rápido no es lo mismo que reaccionar a tiempo. Cuando la alarma suena, la mayor parte del movimiento del día ya pasó, y la señal que podría llegar antes —el crédito— no existe dentro del día.

**[6:23 — Cierre]** (pantalla — BOCETO: logo ATLAS + URL en grande; fondo con la curva del bot en cámara lenta)
Todos los datos están en atlas-lab-one.vercel.app, experimento 31. Contenido educativo, no es asesoría financiera. El trading no se promete: se prueba.

---

## SHORT (9:16, ≈ 48 s)
Título del Short: Mi bot huye del crash… y solo evita el 10% #shorts
Fórmula visual (CLAUDE.md del canal): b-roll vertical real con overlay 0.6, Ken Burns alternado, subtítulos karaoke en MAYÚSCULAS con cifras en rojo, ticker arriba, whoosh + flash en cada corte; golpe (bass + sacudida) solo en 0-3 s y 12-26 s.

**[0-3 s]** "Mi bot huye del crash… y solo evita el 10%."
- Boceto: b-roll de pantalla de bolsa en rojo (kb=in); texto gigante «SOLO 10%» en rojo; golpe de bass + sacudida.

**[3-12 s]** "Cuando el VIX se dispara, el bot sale. Pero ese día el mercado ya se movió. Medí con datos hora por hora cuánto alcanza a esquivar."
- Boceto: b-roll de reloj/ticker (kb=out); línea de tiempo de un día con una alarma sonando; texto «DATOS HORA POR HORA».

**[12-26 s]** "Resultado: fi igual a 0.90. El bot se come el 90% del movimiento de ese día. Para esquivar la mitad, tendría que salir al abrir Wall Street sabiendo cómo va a cerrar. Ningún bot puede."
- Boceto: medidor que sube hasta 0.90 y se pinta de rojo; barra 90% rojo / 10% verde; texto «φ = 0.90».

**[26-37 s]** "Con ×1.5 el Sharpe queda en 0.09. Comprar y esperar la misma cesta: 0.47. El laboratorio pide más de 0.30. Veredicto: parcial."
- Boceto: dos barras (0.09 rojo vs 0.47 verde) con una línea en 0.30; sello «PARCIAL».

**[37-48 s]** "Salir en vivo no es salir a tiempo. Mi bot huye del crash, sí… pero llega tarde. El video completo está en el canal. No es asesoría financiera."
- Boceto: vela roja cayendo y la flecha de salida llegando tarde; logo ATLAS. Loop: «…llega tarde» enlaza con «Mi bot huye del crash…» del inicio.

## Descripción (YouTube)
Mi bot sale del mercado cuando suena la alarma del VIX, pero ¿cuánto de la caída alcanza a esquivar? Lo medí con datos horarios: φ = 0.90, es decir, se come cerca del 90% del movimiento del día de disparo. Experimento #31, resultado parcial.

Datos completos: https://atlas-lab-one.vercel.app (experimento #31)

Capítulos: 0:00 Gancho · 0:24 El bot en 40 segundos · 1:20 La pregunta · 1:54 Cómo se midió · 2:38 El resultado: φ = 0.90 · 3:20 Por qué importa: el Sharpe según φ · 3:52 Los resultados de la cartera · 4:34 Plan B: una regla de precio · 5:04 Lo que este experimento no cubre · 5:36 Con tu capital · 5:53 Conclusión · 6:23 Cierre

Contenido educativo. No es asesoría financiera ni recomendación de inversión.

Etiquetas: trading, bot de trading, backtest, VIX, prop firm, Sharpe ratio, gestión de riesgo, algoritmos de trading, estrategia de trading, datos de mercado, ATLAS Lab

## Rúbrica (autoevaluación — criterios del CLAUDE.md del canal, 1-5)
| hook_0_3s | ritmo | promesa_cumplida | potencial_loop | claridad_no_traders | honestidad_atlas | audio | cta |
|---|---|---|---|---|---|---|---|
| 5 | 4 | 5 | 4 | 4 | 5 | 4 | 4 |

Promedio: **4.38** → cumple el corte (≥ 4.0; hook ≥ 4 y honestidad 5).
Notas: el hook es un dato propio y contraintuitivo (10%); el término φ se explica con «esquivó la mitad». Punto débil: la explicación del filtro de crédito es densa para no traders; en pantalla se resume con el checklist.

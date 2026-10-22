# Experimento #49 — Cambio de mes en índices · Tema 3: ventana por ventana, de $100,000 a $88,929 (y once años sin corte)

Estado del guion: **BORRADOR — pendiente de aprobación**
Tema 3 de 3 del experimento #49. Qué aporta frente a los otros temas: el tema 1 cuenta la estrategia y su resultado; el tema 2 mide el efecto calendario sin estrategia (#68); este recorre la curva ventana por ventana (de 6 ventanas completas, solo la primera ganó) y mira la línea hipotética de once años sin corte, contra comprar y esperar.
Estado del experimento: **murió** (No sirvió) · Serie: F ("Anomalías y estacionalidad") · Relacionado: #68
Datos usados: `experiments.json` (v=49: description, verdict, notes, metrics, kpis, params_view, period, capital.note), `exp_details.json` (v49: algo, code.snippet, filters), `series/20260610_142756_turn-of-month-indices-v49.json` (curva 0 = estrategia; curva 1 = «sin reglas de prop firm»; curva 2 = sin estrategia; valores por ventana y de fin de año derivados de las curvas) y la tabla «Con tu capital» (`docs/youtube/*-capital.md`) (fila #49).
Aviso de datos: 179 días de curva y sin periodo fuera de muestra (la cesta de 2007–2013 no tiene índices); el guion lo dice y no extrapola.

## Títulos (3 opciones)
1. Comprar 5 días al mes: de 6 ventanas, solo ganó la primera
2. Cambio de mes sin corte, 11 años: $67,594 contra $289,679
3. Turn-of-month ventana por ventana: de $100,000 a $88,929

## Miniatura (1280×720)
Fondo `#09090b`. Seis cuadros de calendario en fila: el primero verde, los otros cinco rojos `#e11d2a` con una flecha hacia abajo. Texto enorme blanco: "1 DE 6". Texto pequeño rojo: "VENTANAS". Logo ATLAS esquina superior derecha. (No repite el título 1.)

---

## VIDEO LARGO (16:9, ≈ 5 min — la curva es corta, 179 días)

**[0:00 — Gancho]** (pantalla: seis ventanas de calendario, la primera en verde y las demás en rojo)
Compré cuatro índices bursátiles solo cinco días al mes, los últimos dos del mes y los primeros tres del siguiente. De las seis ventanas completas de la cuenta simulada, ganó la primera. Las otras cinco, perdieron.
> BOCETO: seis cuadros de calendario con sus cifras de cierre ($102,314 · $101,842 · $95,661 · $94,705 · $94,404 · $91,868); el primero se pone verde y los otros cinco, rojos, con tick. Sacudida de pantalla en el último. Subtítulo karaoke con "SOLO LA PRIMERA" en rojo.

**[0:15 — De qué experimento hablamos]** (pantalla: rótulo con el número y el nombre)
Este es el experimento #49 de ATLAS Lab: Cambio de mes en índices. Todos los resultados están en la página del experimento.
> BOCETO: rótulo "EXPERIMENTO #49 · Cambio de mes en índices" con whoosh.

**[0:30 — La regla]** (pantalla: calendario animado)
Es el efecto turn-of-month, el cambio de mes. Compro el S&P 500, el Nasdaq 100, el DAX y el FTSE 100 en las últimas 2 y las primeras 3 filas diarias de cada mes, y el resto del mes me quedo en efectivo. Apalancamiento 2, corte automático del −3% y deslizamiento de 0.2%. No miro el precio: miro la fecha. Y la cuenta sigue las reglas de una prop firm, una empresa que financia traders: se corta con una caída máxima de 10% o una pérdida de 5% en un día.
> BOCETO: calendario que pasa de mes a mes con 5 casillas encendidas; caja `params_view` (x2 · kill-switch −3% · deslizamiento 0.2% · 2014–2024).

**[1:10 — Ventana 1: la que ganó]** (pantalla: curva 0, primer tramo)
La cuenta no se mueve hasta el 31 de octubre de 2014. Esa primera ventana, del 31 de octubre al 5 de noviembre, lleva los $100,000 a $102,314. Es la única de las seis que termina por encima de donde empezó. Con solo ese tramo, esta estrategia tendría un gráfico de portada.
> BOCETO: zoom a la curva real en octubre-noviembre de 2014; contador verde $100,000 → $102,314 con tick.

**[1:35 — Ventanas 2 a 6: las que perdieron]** (pantalla: curva 0, cinco tramos)
La segunda ventana, del 30 de noviembre al 4 de diciembre, termina en $101,842. La tercera, del 31 de diciembre al 5 de enero de 2015, en $95,661. La cuarta, de fines de enero a principios de febrero, en $94,705. La quinta, de fines de febrero a principios de marzo, en $94,404. La sexta, a principios de abril, en $91,868. Cada una empieza donde terminó la anterior, y cada una termina más abajo.
> BOCETO: la curva avanza ventana por ventana; cada tramo rojo se enciende con tick y deja su cifra de cierre; entre ventanas, la línea plana en gris.

**[2:05 — La séptima: el corte]** (pantalla: último día)
La séptima ventana empieza el 30 de abril de 2015 y dura un día: −3.20%, el corte automático de −3% más el deslizamiento de 0.2%. La cuenta termina en $88,929, a los 179 días. En total, la cuenta se movió solo en 31 de esos 179 días, y tres de ellos fueron de −3.20%.
> BOCETO: último punto de la curva con flash y sello ✕ en el 30-abr-2015; contador "31 / 179".

**[2:30 — El resultado y el calendario con domingos]** (pantalla: tarjetas KPI y aviso ámbar)
Retorno total, −10.9%. Sharpe, la ganancia por unidad de riesgo, −1.63. Drawdown máximo, la mayor caída desde un pico, −13.4%. Un límite que hay que decir: el calendario de esta cesta incluye domingos, 105 de las 630 filas de la ventana en 2014–2024, y el motor desplaza la ventana un día. Y solo existe el periodo 2014–2024: no hay prueba fuera de muestra, es decir, en años que la estrategia nunca vio.
> BOCETO: `kpis` en rojo con tick; barra de 630 filas con 105 en gris; avisos ámbar "ventana desplazada un día" y "sin fuera de muestra".

**[3:05 — Once años sin corte]** (pantalla: curva 1 y curva 2)
Ahora una línea que en la vida real no existe, porque la cuenta se cierra ese día: la misma regla sin el corte de la prop firm, de 2014 a 2024. Es hipotética. Con $100,000 pasaría por $93,801 al final de 2015, por $65,195 al final de 2016 y terminaría 2024 en $67,594. Comprar y esperar los cuatro índices, en el mismo periodo, terminaría en $289,679.
> BOCETO: curva 1 punteada gris y curva 2 verde dibujándose juntas; marcadores en 2015 ($93,801), 2016 ($65,195) y 2024 ($67,594 contra $289,679); rótulo "hipotética".

**[3:35 — Con tu capital]** (pantalla: tarjeta "Con tu capital")
En la cuenta real, con $100,000, la estrategia termina en −$11,071. Comprar y esperar los índices, en esas mismas fechas, +$11,000. Es lo que pasó en la simulación, no una promesa.
> BOCETO: tarjeta de capital con dos cifras, −$11,071 (rojo) y +$11,000 (verde), con el aviso "Simulación, no es una promesa".

**[3:50 — Qué sí dice y qué no]** (pantalla: dos columnas)
Qué sí dice: en este tramo y con esta implementación, cinco ventanas de seis perdieron mientras comprar y esperar ganaba. Qué no dice: nada sobre el cambio de mes para siempre. Son 179 días y un solo periodo. Para ver la pregunta general, sin estrategia, mira la medición del experimento 68.
> BOCETO: columna "Sí dice" (5 de 6 ventanas perdieron · −$11,071 frente a +$11,000) y columna "No dice" (todos los años · otros mercados) en gris; chip "#68".

**[4:15 — Ficha del experimento #49]** (pantalla: tarjeta con la URL)
Ficha del experimento 49. Estado: murió, no sirvió. Cifra clave: Sharpe de −1.63 y retorno de −10.9%, con la cuenta cortada a los 179 días. Filtro que decidió: sobrevivir en todos los periodos, que no se cumple, y no hubo prueba fuera de muestra. Lección: una estrategia por calendario se puede describir en una frase, y eso no la hace buena. Revísalo completo en atlas-lab-one.vercel.app/e/49.
> BOCETO: tarjeta "FICHA · EXPERIMENTO #49" con Estado · Cifra clave · Filtro que decidió · Lección, y la URL `atlas-lab-one.vercel.app/e/49` en grande.

**[4:45 — Cierre]**
Contenido educativo, no es asesoría financiera. El trading no se promete: se prueba.
> BOCETO: fundido a la frase de marca en blanco sobre negro; logo ATLAS.

---

## SHORT (9:16, ≈ 42 s) — "Seis ventanas"
Título del Short: Comprar 5 días al mes: ganó 1 de 6 ventanas #Shorts

**[0-3 s]** "Compré cinco días al mes. De seis ventanas, ganó una."
> BOCETO: B-roll vertical de calendario/bolsa con overlay 0.6; seis cuadros, uno verde y cinco rojos, y "1 DE 6"; golpe de bajo y sacudida.

**[3-14 s]** "Los dos últimos días del mes y los tres primeros del siguiente, en cuatro índices: S&P 500, Nasdaq 100, DAX y FTSE 100. Cien mil dólares, apalancamiento doble."
> BOCETO: calendario que enciende 5 casillas por mes; chips de los 4 índices con tick. Ken Burns hacia dentro.

**[14-27 s]** "La primera ventana la lleva a $102,314. Después: $101,842, $95,661, $94,705, $94,404 y $91,868. El 30 de abril de 2015, $88,929."
> BOCETO: las seis cifras entran en cascada con tick; la última, con sello ✕ y flash.

**[27-36 s]** "Sharpe de −1.63, cuenta cortada a los 179 días. Y sin el corte, once años después: $67,594 de cada cien mil. Comprar y esperar: $289,679."
> BOCETO: curva 1 punteada y curva 2 verde; dos cifras finales con rótulo "hipotética".

**[36-42 s]** "Cinco días al mes, una de seis. Experimento 49 completo en el enlace; el video completo está en el canal. No es asesoría financiera."
> BOCETO: vuelve el "1 DE 6" (loop con el primer cuadro); abajo "Experimento #49 completo en el enlace"; texto pequeño "El trading no se promete: se prueba."

---

## Descripción (YouTube) — video largo
https://atlas-lab-one.vercel.app/e/49?utm_source=youtube&utm_medium=video&utm_campaign=exp049-t3
Ficha del experimento #49 (Cambio de mes en índices): murió (No sirvió) · retorno −10.9% · Sharpe −1.63 · cuenta cortada a los 179 días; con $100,000, −$11,071 frente a +$11,000 de comprar y esperar en las mismas fechas.
La curva ventana por ventana (de 6 ventanas completas, solo la primera cierra en positivo) y la línea hipotética sin corte: $67,594 contra $289,679 en 2014–2024.
Contenido educativo. No es asesoría financiera ni recomendación de inversión.

## Descripción (YouTube) — Short
https://atlas-lab-one.vercel.app/e/49?utm_source=youtube&utm_medium=short&utm_campaign=exp049-t3
Experimento #49 (Cambio de mes en índices): murió · de 6 ventanas completas, ganó 1 · Sharpe −1.63 · cuenta cortada a los 179 días. Video completo en el canal. No es asesoría financiera.

## Capítulos
0:00 Gancho · 0:15 De qué experimento hablamos · 0:30 La regla · 1:10 Ventana 1: la que ganó · 1:35 Ventanas 2 a 6: las que perdieron · 2:05 La séptima: el corte · 2:30 El resultado y el calendario con domingos · 3:05 Once años sin corte · 3:35 Con tu capital · 3:50 Qué sí dice y qué no · 4:15 Ficha del experimento #49 · 4:45 Cierre

## Etiquetas
turn-of-month, efecto calendario, cambio de mes, índices bursátiles, curva de capital, prop firm, backtest, Sharpe ratio, estacionalidad, trading con datos, ATLAS Lab

## Rúbrica (autoevaluación, escala 1-5)
| Criterio | Nota | Por qué |
|---|---|---|
| hook_0_3s | 5 | «De seis ventanas, ganó una» en voz y en pantalla, verificable en la curva |
| ritmo | 4 | Una ventana nueva cada 3–4 s; el bloque de límites es el más denso |
| promesa_cumplida | 5 | Promete el recorrido ventana por ventana y muestra las seis cifras de cierre |
| potencial_loop | 4 | El final vuelve a «1 de 6» |
| claridad_no_traders | 4 | Explica turn-of-month, prop firm, Sharpe, drawdown y fuera de muestra |
| honestidad_atlas | 5 | Declara domingos en el calendario, 179 días, sin fuera de muestra y rotula la línea hipotética |
| audio | 4 | Voz por clonar; un golpe de bajo |
| cta | 4 | Una petición (la ficha en la web) y remite al video completo |
Promedio: **4.38** (≥ 4.0). Hook del Short 5 (≥ 4) y honestidad 5: no descalificado.

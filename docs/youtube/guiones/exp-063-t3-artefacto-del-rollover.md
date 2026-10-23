# Experimento #63 — Efecto nocturno (sesión diurna vs. nocturna) · Tema 3 de 4: ¿patrón real o costura de los datos?

Estado del guion: **BORRADOR — pendiente de aprobación**
Tema 3 de 4 del experimento #63 · Qué aporta frente a los otros temas: es el tema del MÉTODO y de la calidad de los datos. Explica qué es un contrato continuo y un rollover, cómo un salto de datos podría fabricar un patrón como el +149% de noche y −72% de día del Brent, y qué pruebas habría que pedir antes de creerlo. El tema 1 abre con el panorama de los 7 activos; el tema 2 trata de los índices; el tema 4, del oro con costos reales.
Estado del experimento: **no concluyente** (estudio descriptivo bruto: sin señal de trading, sin costos, sin prueba fuera de muestra)
Serie: F (anomalías y estacionalidad) · Continúa en #71 (el mismo efecto con costos reales)
Datos usados: `experiments.json` (v=63: verdict, analysis, notes, kpis, metrics, market, period, params_view, capital), `exp_details.json` (extra-v63: algo, filters), `series/extra-v63.json` ([0] oro solo de noche, bruto; [1] oro comprar y esperar) y la tabla «Con tu capital» (`docs/youtube/*-capital.md`, fila #63).
Experimento de datos: el video explica qué se midió y para qué sirve; no hay una estrategia que aprobar o reprobar.

## Títulos
1. Brent: +149% de noche y −72% de día. Antes de creerlo, hay que descartar un error de los datos
2. Contrato continuo y rollover: cómo una serie de precios puede inventar un patrón
3. Un patrón que parece una mina de oro y quizá sea una costura de los datos

## Miniatura
Fondo `#09090b`. Una línea de precio hecha de tres tramos de colores distintos, unidos por costuras blancas; una de las costuras, resaltada con un círculo rojo `#e11d2a`. Texto grande blanco: «¿PATRÓN O COSTURA?». Texto pequeño verde `#22c55e`: «+149% / −72%». Logo ATLAS esquina inferior derecha.

---

## VIDEO LARGO (≈ 5 min, experimento de datos)

**[0:00 — Gancho]** (pantalla: dos contadores, luna «+149%» y sol «−72%»)
Brent, entre 2012 y 2024: +149% de noche y −72% de día. O es una ineficiencia enorme del mercado, o es un truco de cómo se construyen los datos.
> BOCETO: contadores de luna (verde, sube) y sol (rojo, baja) con rótulo «Brent · 2012–2024»; una costura blanca recorre la línea y aparece un signo de interrogación; golpe de bajo y sacudida.

**[0:20 — Este experimento]** (pantalla: rótulo «Experimento #63 · Efecto nocturno (sesión diurna vs. nocturna)»)
Este es el experimento #63 de ATLAS Lab: efecto nocturno, sesión diurna contra sesión nocturna. Todos los resultados están en la página del experimento. Hoy no hablo de si el patrón es bueno, sino de si es real.
> BOCETO: rótulo con «#63» y el nombre del experimento; logo ATLAS; whoosh suave.

**[0:40 — Qué es un contrato de futuros]** (pantalla: tres contratos con fechas de vencimiento)
Muchos activos, como el petróleo, se negocian en contratos que vencen. Un contrato de Brent tiene una fecha límite; cuando se acerca, el mercado se traslada al siguiente contrato. Si quieres una serie de precios larga, de muchos años, tienes que unir esos contratos uno tras otro.
> BOCETO: tres contratos en fila con fechas; flecha que traslada el mercado de uno al siguiente. Ilustración rotulada, sin datos.

**[1:20 — El contrato continuo y el rollover]** (pantalla: costura entre dos tramos de precio)
A esa serie armada pegando trozos de distintos contratos se le llama contrato continuo. El punto donde se cambia de contrato se llama rollover. En ese punto, el precio de un contrato y el del siguiente no son iguales, así que la serie puede tener un salto. La ficha lo señala: el Brent se calculó con un contrato continuo.
> BOCETO: dos tramos de precio de distinto color unidos por una costura; entre ambos, un escalón. Etiqueta «rollover = salto en la costura».

**[2:00 — Barras de casi 24 horas]** (pantalla: barra del día con el hueco entre cierre y apertura)
Segundo ingrediente: las barras diarias de los CFD cubren casi 24 horas. El tramo que llamo «noche» va del cierre de ayer a la apertura de hoy, y puede incluir justo el hueco donde ocurre el salto del rollover. Si ese salto cae siempre en el tramo nocturno, se atribuye a la noche algo que es una costura de los datos.
> BOCETO: barra de 24 horas con la franja «cierre de ayer → apertura de hoy» y la costura dentro; texto «la costura cae en la noche».

**[2:40 — Cómo un salto fabrica un patrón]** (pantalla: dos curvas ilustrativas)
Imagina, como ejemplo y no como dato, que cada vez que se cambia de contrato la serie salta hacia un lado en el tramo nocturno. Sumados durante años, esos saltos darían un tramo nocturno muy distinto del diurno, sin que el mercado hiciera nada especial de noche. No digo que eso ocurra aquí: digo que es una explicación posible, que la ficha no descartó.
> BOCETO: curva ilustrativa con saltos hacia arriba en el tramo nocturno y curva plana en el diurno; sello «ilustración, no es un dato».

**[3:20 — Qué se hizo y qué no]** (pantalla: checklist de filtros con los valores reales)
La ficha es clara. Son cifras brutas: sin costos. No hay una señal de operación, y tampoco una prueba fuera de muestra. Y el posible artefacto del rollover no se descartó con datos de sesión reales.
> BOCETO: ✗ «Costos: no aplicado (bruto)» · — «Señal de ayer: no aplica» · — «Fuera de muestra: no aplicado» · — «Deflated Sharpe: no aplicado»; sello ámbar «ROLLOVER: NO DESCARTADO».

**[3:50 — Qué pruebas pedir]** (pantalla: tres tarjetas)
Antes de creer un patrón así, pediría tres cosas. Una: datos de sesión reales, con horas de apertura y cierre del mercado de verdad. Dos: restar los costos de operar, el spread y el swap. Tres: una prueba fuera de muestra, en años que no se usaron para mirar los datos. El experimento 71 se centra en la segunda, los costos.
> BOCETO: tres tarjetas con icono (reloj = datos de sesión, monedas = costos, calendario = fuera de muestra); la segunda con una flecha «ver #71».

**[4:15 — Con tu capital]** (pantalla: tarjeta «Con tu capital»; curva del oro de noche contra la gris)
La tarjeta del sitio es del oro, no del Brent. Con $10,000, comprar el oro solo de noche, de 2012 a 2024, da +$2,721; mantenerlo, +$6,698. Con $100,000: +$27,208 contra +$66,979. Es bruto, sin costos, y la misma duda de los datos aplica.
> BOCETO: curva del oro solo de noche (verde) por debajo de la gris de comprar y esperar; sello «BRUTO · SIN COSTOS».

**[4:40 — Conclusión]** (pantalla: la línea con costuras)
Un patrón enorme en un activo hecho de pedazos pegados merece una pregunta antes del aplauso: ¿es el mercado o es la costura?
> BOCETO: la línea de tres tramos con una lupa sobre la costura marcada.

**[4:50 — Ficha del experimento #63 y cierre]** (pantalla: tarjeta con la ficha y la URL)
Ficha del experimento #63. Estado: no concluyente. Cifra clave: Brent, +149% de noche y −72% de día; oro, Sharpe de 0.99 de noche. Filtro que decidió: ninguno; son cifras brutas y el rollover no se descartó. Lección: antes de creer un patrón, hay que descartar que sea un artefacto de los datos. Revísalo completo en atlas-lab-one.vercel.app/e/63. Contenido educativo, no es asesoría financiera. El trading no se promete: se prueba.
> BOCETO: tarjeta en pantalla con las 4 líneas de la ficha (estado ámbar «no concluyente») y la URL `atlas-lab-one.vercel.app/e/63` en grande; fundido a la frase de marca.

---

## SHORT (9:16, ≈ 45 s) — "La costura"

**[0-3 s]** "Brent: más 149% de noche. La culpa puede ser una costura en los datos."
> BOCETO: contador «+149%» sobre una luna y una costura blanca resaltada en rojo; b-roll de refinería de noche, kb=in, overlay 0.6; golpe de bajo + sacudida. Karaoke con «COSTURA» en rojo.

**[3-14 s]** "El petróleo se negocia en contratos que vencen. Para tener una serie larga, los datos pegan contratos uno tras otro. En cada pegadura, el precio puede saltar."
> BOCETO: tres contratos que se unen; escalón en la costura; whoosh. Ken Burns hacia dentro.

**[14-26 s]** "Y las barras de CFD cubren casi 24 horas, así que ese salto puede caer justo en el tramo nocturno: del cierre de ayer a la apertura de hoy."
> BOCETO: barra de 24 horas con la costura dentro de la franja nocturna; tick; flash blanco.

**[26-37 s]** "En el Brent, de noche subió 149% y de día cayó 72%. La ficha no descartó que sea un artefacto. Son cifras brutas, sin costos, sin prueba fuera de muestra."
> BOCETO: dos contadores +149% y −72%; sello ámbar «NO CONCLUYENTE».

**[37-45 s]** "Video completo en el canal y experimento 63 completo en el enlace. ¿Patrón… o costura?"
> BOCETO: vuelve la línea con una costura resaltada (loop); rótulo «Experimento #63 completo en el enlace»; texto pequeño «No es asesoría financiera · El trading no se promete: se prueba».

---

## Descripción (YouTube)
https://atlas-lab-one.vercel.app/e/63?utm_source=youtube&utm_medium=video&utm_campaign=exp063-t3
Ficha del experimento #63: no concluyente · Brent: +149% de noche y −72% de día (2012–2024) · oro: Sharpe 0.99 de noche · cifras brutas, sin costos ni fuera de muestra.
Qué es un contrato continuo y un rollover, cómo un salto de datos podría fabricar un patrón nocturno y qué pruebas pedir antes de creerlo. La ficha no descartó el artefacto con datos de sesión reales.
Contenido educativo. No es asesoría financiera ni recomendación de inversión.
Descripción del Short (primera línea): https://atlas-lab-one.vercel.app/e/63?utm_source=youtube&utm_medium=short&utm_campaign=exp063-t3

Capítulos: 0:00 Gancho · 0:20 Este experimento · 0:40 Qué es un contrato de futuros · 1:20 El contrato continuo y el rollover · 2:00 Barras de casi 24 horas · 2:40 Cómo un salto fabrica un patrón · 3:20 Qué se hizo y qué no · 3:50 Qué pruebas pedir · 4:15 Con tu capital · 4:40 Conclusión · 4:50 Ficha del experimento #63 y cierre

Etiquetas: rollover, contrato continuo, futuros, petróleo Brent, efecto nocturno, calidad de datos, artefacto de datos, anomalías de mercado, backtest, trading con datos, ATLAS Lab, CFD

## Rúbrica (autoevaluación)
| Pieza | hook_0_3s | ritmo | promesa_cumplida | potencial_loop | claridad_no_traders | honestidad_atlas | audio | cta | Promedio |
|---|---|---|---|---|---|---|---|---|---|
| Largo | 4 | 4 | 4 | 4 | 4 | 5 | 4 | 4 | 4.13 |
| Short | 5 | 4 | 4 | 5 | 4 | 5 | 4 | 4 | 4.38 |

Hook ≥ 4 ✓ · honestidad 5 ✓. Punto débil: el mecanismo de la costura se presenta como explicación posible, con un ejemplo ilustrativo; la ficha no mide el efecto del rollover y el video lo dice dos veces.

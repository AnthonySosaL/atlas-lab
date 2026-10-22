# Experimento #28 — Retraso de 1 día + interruptor de emergencia · Tema 2: cómo se simula un freno con realismo

Tema 2 de 3 del experimento #028 · Qué aporta frente a los otros temas: es el tema de método del #28 —los tres supuestos (deslizamiento, saltos de apertura y mínimo del día) que hacen honesta la simulación de un stop de emergencia— explicado para principiantes. El tema 1 cuenta el resultado y la diferencia entre día malo y racha mala. Se entiende sin haber visto los otros temas.
Estado del guion: **BORRADOR — pendiente de aprobación**
Estado del experimento: **murió** (veredicto del sitio: «No sirvió») · Serie G — Construyendo un bot (y por qué murió)
Datos usados: `experiments.json` (v=28: analysis, notes, kpis, params_view, chart, capital, market), `exp_details.json` (clave `extra-v28`: algo, code.snippet, filters), tabla «Con tu capital» (archivo de capital en `docs/youtube/`; sin curva de «Sin estrategia»).
Producción (CLAUDE.md del canal): b-roll real detrás de cada escena con overlay oscuro 0.6, Ken Burns alternando in/out, subtítulos karaoke en MAYÚSCULAS con cifras en rojo, un dato visual por escena, golpe de bajo + sacudida solo en 1–2 momentos. Colores: rojo `#e11d2a`, verde `#22c55e`, fondo `#09090b`.

## Títulos (3 opciones)
1. Cómo se simula un freno de emergencia sin hacer trampa: deslizamiento, saltos y mínimos
2. Mi freno de emergencia cuesta 0.2% cada vez que se activa
3. Los tres supuestos que hacen honesto un stop (experimento #28)

## Miniatura (pensada para el título 2)
Fondo `#09090b`. Un gráfico de un día de precios con una línea de tope en −3%; el precio la atraviesa y la salida queda más abajo, con una flecha roja `#e11d2a` rotulada «0.2%». Texto en Segoe UI Black: «NO CIERRA EN EL TOPE» (cuatro palabras, sin repetir los títulos). Logo ATLAS abajo a la derecha.

---

## VIDEO LARGO (16:9, ≈ 5:18 min)

**[0:00 — Gancho]** (pantalla: precio que cruza el tope)
Un freno de emergencia que cierra justo en el tope no existe. Este backtest paga 0.2% de deslizamiento cada vez que frena, respeta los saltos de apertura reales y usa el peor momento del día de cada activo.
BOCETO: precio que baja, cruza la línea de −3% y la salida queda más abajo con «0.2%»; golpe de bajo en la salida. kb=in.

**[0:16 — Qué es este experimento]** (pantalla: rótulo con el número y el nombre)
Este es el experimento #28 de ATLAS Lab: Retraso de 1 día más interruptor de emergencia. Todos los resultados están en la página del experimento. Aquí me quedo con una pregunta de método: ¿cómo se simula un freno sin hacerle trampa al backtest?
BOCETO: rótulo «EXPERIMENTO #28 · Retraso de 1 día + interruptor de emergencia» sobre velas con opacidad 0.12. kb=out.

**[0:35 — Qué es un kill-switch]** (pantalla: botón de emergencia)
Un kill-switch es un interruptor de emergencia: si la pérdida del día llega a cierto punto, se cierra todo. Aquí el tope es menos 3% del día. La versión de libro de texto dice: pierdes 3% y listo. La realidad es más incómoda, y por eso este backtest tiene tres supuestos que no le regalan nada al bot.
BOCETO: botón rojo y la línea de −3% sobre un día de precios; tres candados numerados 1, 2, 3 que se abren después.

**[1:00 — Supuesto uno: el deslizamiento]** (pantalla: salida más abajo del tope)
Uno: el deslizamiento. Nadie cierra exactamente en el tope: entre que el precio lo toca y la orden se ejecuta, el precio sigue moviéndose. El backtest suma 0.2% de pérdida adicional cada vez que se activa el freno. Es una estimación fija, y la ficha lo avisa: es el único costo del experimento.
BOCETO: precio que toca −3% y baja un poco más; la distancia se rotula «0.2%».

**[1:22 — Supuesto dos: los saltos de apertura]** (pantalla: dos días de precios)
Dos: los saltos de apertura, o gaps. A veces el mercado abre ya por debajo del cierre de ayer. Si el precio abre más abajo que el tope, el freno no puede salvarte: cierras ya fuera de él. El backtest usa los saltos reales de cada día. Si el salto ya supera el tope, la pérdida es el salto más el deslizamiento.
BOCETO: dos días: en uno el precio cae gradualmente y el freno cierra cerca del −3%; en el otro abre ya por debajo y cierra más abajo.

**[1:47 — Supuesto tres: el peor momento del día]** (pantalla: mínimos de cada activo)
Tres: el mínimo del día. Para saber si el freno se habría activado, hay que saber cuál fue el peor momento. El backtest toma el mínimo real de cada activo y los suma, aunque en la práctica no ocurrieran a la misma hora. Es un cálculo conservador: exagera un poco el mal momento para no regalar nada.
BOCETO: tres activos con sus mínimos marcados en horas distintas y una suma en la parte inferior «peor momento conservador».

**[2:10 — La regla completa]** (pantalla: tres ramas)
Juntando las tres, la regla del día tiene tres ramas. Si el salto de apertura ya supera el tope: pierdes el salto más el deslizamiento. Si el peor momento del día toca el tope: pierdes el tope más el deslizamiento. Y si no, ganas o pierdes el retorno completo del día. Todo eso, con la señal macro rezagada un día y los pesos calculados con datos de ayer.
BOCETO: diagrama de tres ramas, «salto ≥ tope», «peor momento ≥ tope» y «día normal», tomadas del `snippet` de `exp_details.json`.

**[2:38 — Qué se probó]** (pantalla: tres apalancamientos y dos periodos)
Con ese simulador se probaron los apalancamientos ×2, ×3 y ×4, es decir, el tamaño de las posiciones frente al capital. En 2014 a 2024, con 15 instrumentos, y en 2007 a 2013, con siete pares de divisas más oro. Con las reglas de una prop firm, la empresa que presta la cuenta y la cierra si pierdes demasiado: caída máxima de 10% y pérdida diaria de 5%.
BOCETO: tres chips (×2, ×3, ×4) y dos barras de periodo con los instrumentos; recuadro «prop firm: DD 10% · día −5%».

**[3:10 — Resultados]** (pantalla: barras de Sharpe)
Resultado: Sharpe, la ganancia por unidad de riesgo, de menos 0.52 con ×2, menos 1.06 con ×3 y menos 1.59 con ×4 en 2014–2024. En 2007–2013, con ×3 y ×4, menos 0.57 y menos 1.15. Ningún apalancamiento sobrevive a las reglas de la prop firm en los dos periodos. Con un simulador así de exigente no sobrevive ninguno.
BOCETO: barras rojas que crecen hacia abajo: ×2 −0.52, ×3 −1.06, ×4 −1.59; segunda fila con ×3 −0.57 y ×4 −1.15; sello «ninguno sobrevive».

**[3:41 — Lo que el simulador no incluye]** (pantalla: casillas grises)
Y lo que no incluye. Solo está el deslizamiento de 0.2%: no hay diferencial entre compra y venta, ni la comisión de 3 puntos básicos por rotación que usa el laboratorio. Con costos completos, el resultado no mejoraría. Una nota de transparencia: las cifras salen de una reproducción con el motor ejecutable, porque el script termina sin registrar carpeta cuando ningún apalancamiento sobrevive en los dos periodos.
BOCETO: checklist de `filters`: «señal rezagada 1 día: pasa», «sobrevive en ambos periodos: falla», «costos: solo deslizamiento 0.2%».

**[4:09 — Con tu capital]** (pantalla: tarjeta de capital $10,000 / $100,000)
Con 10,000 dólares, la curva con ×3 termina en menos 1,081; con 100,000, en menos 10,814. En este experimento no hay curva de «sin estrategia» para comparar, y con tu capital verías esa cuenta cerrada.
BOCETO: tarjeta «Con tu capital» del sitio con el selector; curva roja cortada el 29-jun-2015; comparación en «—».

**[4:26 — Tres preguntas para un backtest con stop]** (pantalla: tres preguntas)
Si te muestran un backtest con stop-loss, hazle tres preguntas. ¿Cierra exactamente en el tope o se paga deslizamiento? ¿Respeta los saltos de apertura reales? ¿Cómo estima el peor momento del día? Si no hay respuesta, el stop del gráfico es más bonito que el de la vida real.
BOCETO: las tres preguntas aparecen con tick; cada una con el número del supuesto 1, 2 y 3.

**[4:46 — Ficha del experimento #28]** (pantalla: tarjeta con la URL)
Ficha del experimento #28, Retraso de 1 día más interruptor de emergencia. Estado: murió. Cifra clave: con ×3, Sharpe de menos 1.06 en 2014–2024; ningún apalancamiento sobrevive en los dos periodos. Filtro que decidió: sobrevivir a las reglas de la prop firm. Lección: el freno diario protege del día malo, no de la racha. Revísalo completo en atlas-lab-one.vercel.app/e/28. Contenido educativo, no es asesoría financiera. El trading no se promete: se prueba.
BOCETO: tarjeta final con cuatro líneas (estado · cifra clave · filtro que decidió · lección) y la URL «atlas-lab-one.vercel.app/e/28» en grande; logo ATLAS; fondo de velas con opacidad 0.12.

---

## SHORT (9:16, ≈ 47 s)

**[0-3 s]** «Mi freno cuesta 0.2% cada vez que se activa.»
BOCETO: precio que cruza −3% y sale más abajo con «0.2%» gigante; golpe de bajo + sacudida.
**[3-10 s]** «El tope es menos 3% del día. Pero nadie cierra justo ahí: el precio sigue moviéndose hasta que la orden se ejecuta.»
BOCETO: precio que toca −3% y baja un poco más. kb=out.
**[10-18 s]** «Segundo supuesto: los saltos de apertura reales. Si el precio abre bajo el tope, el freno no te salva.»
BOCETO: día que abre ya por debajo de la línea de −3%.
**[18-26 s]** «Tercero: el peor momento del día. Se suman los mínimos reales de cada activo, aunque no coincidan en hora.»
BOCETO: tres activos con mínimos en horas distintas y una suma conservadora.
**[26-35 s]** «Con ese simulador exigente, ningún apalancamiento sobrevive. Con ×3, Sharpe menos 1.06.»
BOCETO: barras rojas ×2 −0.52, ×3 −1.06, ×4 −1.59; sello «ninguno sobrevive».
**[35-43 s]** «Experimento 28 completo en el enlace. El video completo está en el canal. No es asesoría financiera. El trading no se promete: se prueba.»
BOCETO: tarjeta con «experimento #28 completo en el enlace» y la URL corta; logo ATLAS.
**[43-47 s]** «Un freno que no cuesta nada no existe.»
BOCETO: el botón rojo del inicio con «0.2%»; corte directo al inicio (loop).

---

## Descripción de YouTube (video largo)
https://atlas-lab-one.vercel.app/e/28?utm_source=youtube&utm_medium=video&utm_campaign=exp028-t2
Ficha del experimento #28 (Retraso de 1 día + interruptor de emergencia): murió (No sirvió) · Sharpe −0.52 con ×2, −1.06 con ×3 y −1.59 con ×4 (2014–2024); ningún apalancamiento sobrevive en los dos periodos.
Los tres supuestos que hacen honesta la simulación de un kill-switch: deslizamiento de 0.2%, saltos de apertura reales y mínimo del día conservador.
Contenido educativo. No es asesoría financiera ni recomendación de inversión.

## Descripción del Short
https://atlas-lab-one.vercel.app/e/28?utm_source=youtube&utm_medium=short&utm_campaign=exp028-t2
Ficha del experimento #28: murió · el freno cuesta 0.2% por activación; con ×3, Sharpe −1.06. Video completo en el canal. Contenido educativo, no es asesoría financiera.

## Capítulos
0:00 Gancho · 0:16 Qué es este experimento · 0:35 Qué es un kill-switch · 1:00 Supuesto uno: el deslizamiento · 1:22 Supuesto dos: los saltos de apertura · 1:47 Supuesto tres: el peor momento del día · 2:10 La regla completa · 2:38 Qué se probó · 3:10 Resultados · 3:41 Lo que el simulador no incluye · 4:09 Con tu capital · 4:26 Tres preguntas para un backtest con stop · 4:46 Ficha del experimento #28

## Etiquetas
kill-switch, stop loss, deslizamiento, gap de apertura, backtest realista, gestión de riesgo, apalancamiento, prop firm, bot de trading, trading con datos, atlas lab, trading algorítmico

## Rúbrica (autoevaluación, 1–5)
| Pieza | hook_0_3s | ritmo | promesa_cumplida | potencial_loop | claridad_no_traders | honestidad_atlas | audio | cta | Promedio |
|---|---|---|---|---|---|---|---|---|---|
| Largo | 4 | 4 | 5 | 4 | 4 | 5 | 4 | 4 | 4.25 |
| Short | 4 | 4 | 5 | 5 | 4 | 5 | 4 | 4 | 4.38 |

Hook ≥ 4 ✓ · honestidad 5 ✓. Punto débil: es un tema técnico; se apoya en tres dibujos simples. No se afirma nada sobre simuladores de otros autores: solo se describe el de este experimento.

# Experimento #14 — Bot ATLAS con volatilidad objetivo (simulación)

Estado del guion: **BORRADOR — pendiente de aprobación**
Estado del experimento: **murió**
Serie: G (Construyendo un bot, y por qué murió)
Datos usados: `experiments.json` (v=14: description, params, metrics, kpis, analysis, verdict, notes, capital, period), `exp_details.json` (algo, filters), `series/20260607_214233_bot-atlas-vol-target-paper-v14.json` (curva 1 = bot, curva 2 = sin reglas de prop firm, curva 3 = comprar y esperar) y la tabla «Con tu capital» de docs/youtube (fila 14). Se compara con las cifras del #13. Las cifras con 10,000 dólares son las de la tabla de 100,000 divididas entre 10.
Nota de datos: el motor del bot no descuenta costos de operación.

## Títulos (3 opciones)
1. Mi sistema de seguridad entró al COVID con apalancamiento ×3.9
2. Volatilidad objetivo en un bot: −14.2% y cuenta cerrada el 12 de marzo de 2020
3. Por qué ajustar el apalancamiento por volatilidad pasada no te protege de un crash

## Miniatura
Fondo negro de la marca. Texto gigante: «×3.9» en rojo con «¿SEGURO?» (1 palabra) en blanco debajo. A un lado, un escudo agrietado. De fondo, tenue, las curvas reales de la serie 1 cayendo en vertical. Logo ATLAS esquina inferior derecha.

---

## VIDEO LARGO (16:9, ≈ 4:49 min — 4–6 min: experimento de una sola idea y pocas cifras)
Ritmo visual: algo cambia en pantalla cada 2-3 s; b-roll real detrás, Ken Burns alterno, subtítulos karaoke, whoosh + flash en cada corte, golpe de bass solo en el momento clave.

**[0:00 — Gancho]** (pantalla: «×3.9» rojo y fecha «24-feb-2020»)
El 24 de febrero de 2020, el sistema que diseñé para reducir el riesgo operaba con un apalancamiento de ×3.9. El 12 de marzo la cuenta reventó, con −14.2% de retorno y −21.6% de caída máxima. Peor que el bot sin protección del experimento anterior. En este video te explico la idea del ajuste por volatilidad, por qué suena tan bien y por qué, en este caso, aumentó el riesgo justo antes de la tormenta.
> Boceto: medidor de apalancamiento con la aguja subiendo hasta ×3.9 y una fecha «24-feb-2020»; la curva real (series, curva 1) se desploma al final con sacudida de pantalla.

**[0:31 — Presentación]** (pantalla: rótulo «Experimento #14 · Bot ATLAS con volatilidad objetivo (simulación)»)
Este es el experimento #14 de ATLAS Lab: Bot ATLAS con volatilidad objetivo (simulación). Todos los resultados están en la página del experimento.
> Boceto: rótulo grande «EXPERIMENTO #14 · Bot ATLAS con volatilidad objetivo (simulación)» sobre velas de fondo con overlay oscuro; abajo, la URL pequeña «atlas-lab-one.vercel.app/e/14». Ken Burns «out».

**[0:41 — La idea: volatilidad objetivo]** (pantalla: dial de apalancamiento)
La idea suena inteligente: mantener el riesgo constante. Cada día, el apalancamiento es la volatilidad objetivo, 9.5% anual, dividida entre la volatilidad reciente de la cartera, calculada con los últimos 60 días, con un tope de ×4. Si el mercado se agita, el apalancamiento baja; si está tranquilo, sube. Es como un conductor que levanta el pie cuando hay curvas y acelera en las rectas. Con esta regla, el apalancamiento medio fue ×3.15. Es una técnica conocida de gestión de riesgo, y por eso es natural ponerla a prueba.
> Boceto: dial con dos estados: mercado agitado → la aguja baja; mercado tranquilo → la aguja sube hasta el tope ×4 (sin valores intermedios: son solo ilustrativos); fórmula en pantalla «9.5% ÷ volatilidad 60 d, tope ×4».

**[1:18 — Cómo lo probé]** (pantalla: igual que el #13)
Igual que en el experimento 13, para que la comparación sea limpia: cartera de solo compras con paridad de riesgo sobre 15 instrumentos, reglas de cuenta fondeada —pérdida diaria de 5% y caída máxima de 10%—, y un solo camino histórico real desde 2019, con pesos y volatilidad calculados con datos hasta ayer. Lo único que cambia es el apalancamiento: antes fijo en ×2, ahora variable. El motor del bot no descuenta costos de operación.
> Boceto: dos tarjetas lado a lado: «#13: ×2 fijo» y «#14: ×variable, tope ×4». Checklist de `filters`: pesos y volatilidad con datos hasta t−1 ✓; costos «no aplicado» en gris.

**[1:49 — Resultado]** (pantalla: tarjetas KPI)
La cuenta se apagó el 12 de marzo de 2020, el día 313, esta vez por la regla de pérdida diaria de 5%. Retorno total: −14.2%. Sharpe: −0.91. Caída máxima: −21.6%. Con el ×2 fijo del experimento 13 fue −10.3% y −15.3%: la protección empeoró el resultado, y lo hizo el mismo día, en el mismo evento. Es decir, la idea que debía reducir el daño lo aumentó.
> Boceto: tabla animada #13 contra #14: retorno (−10.3% → −14.2%), caída máxima (−15.3% → −21.6%), en rojo. Curvas reales de ambos superpuestas.

**[2:17 — El mecanismo]** (pantalla: volatilidad baja antes del salto)
Aquí está la causa. La volatilidad reciente estaba baja justo antes del golpe del COVID. Mira lo que hace la fórmula: volatilidad baja en el denominador significa apalancamiento alto. El sistema vio calma y subió el apalancamiento: entró al desplome con ×3.9 el 24 de febrero de 2020, cuando el bot del experimento 13 usaba ×2 fijo. Y el 12 de marzo, cuando la cuenta reventó, todavía operaba a ×2.2: fue bajando el apalancamiento a medida que subía la volatilidad, pero para entonces ya había sufrido las pérdidas.
> Boceto: línea de tiempo de febrero a marzo de 2020: gráfico de volatilidad reciente baja hasta el salto, con el apalancamiento subiendo a ×3.9 el 24-feb y marca «×2.2» el 12-mar.

**[2:53 — La lección]** (pantalla: texto)
Ajustar por volatilidad pasada no protege de un salto repentino. La volatilidad que mides mira hacia atrás; el gap del COVID, ese salto brusco entre un día y otro, no estaba en esos 60 días. La calma del pasado no avisa de la tormenta que viene. Dicho de otro modo: el sistema reaccionó a la última tormenta, no a la siguiente. Esta lección marcó el diseño del bot actual.
> Boceto: ventana de 60 días con el pasado tranquilo y, a la derecha, un salto vertical rojo fuera de la ventana. Texto: «El pasado tranquilo no avisa».

**[3:22 — Con tu capital]** (pantalla: tarjeta «Con tu capital» con aviso)
Con 10,000 dólares serían menos 1,388 para el bot, frente a menos 1,156 de comprar y esperar en las mismas fechas. Con 100,000, la tabla de ATLAS da menos 13,877 contra menos 11,558. La curva se detiene el 12 de marzo de 2020, porque la cuenta se cierra; la línea «sin reglas de prop firm» es hipotética. Y opera con apalancamiento de hasta ×4.
> Boceto: tarjeta de capital con aviso ámbar; curva 1 cortada, curva 2 punteada hipotética y curva 3 gris; selector $10,000 / $100,000.

**[3:48 — Ficha del experimento #14]** (pantalla: tarjeta con la URL)
Ficha del experimento 14. Estado: murió. Cifra clave: la cuenta reventó por pérdida diaria con un retorno de menos 14.2% y una caída máxima de menos 21.6%, peor que el bot fijo del experimento 13. Filtro que decidió: la regla de la cuenta fondeada; el sistema entró al desplome a ×3.9 el 24 de febrero de 2020. Lección: ajustar por volatilidad pasada no protege de un salto repentino. Revísalo completo en atlas-lab-one.vercel.app/e/14.
> Boceto: tarjeta oscura con el estado del experimento #14 arriba, las cifras clave en el centro y «atlas-lab-one.vercel.app/e/14» en grande al pie; las líneas de la ficha entran una a una; logo ATLAS.

**[4:16 — Conclusión y cierre]**
Veredicto: no sirvió. Reventó por la pérdida diaria con −14.2% y una caída de −21.6%, peor que el bot de ×2 fijo del experimento 13. Una protección que mira el pasado puede dar una falsa sensación de seguridad justo cuando más importa. En el siguiente experimento pruebo otra fuente de información, que no está en el precio: indicadores macro. Todos los datos en atlas-lab-one.vercel.app/e/14. Contenido educativo, no es asesoría financiera. El trading no se promete: se prueba.
> Boceto: sello ✕ rojo sobre el dial; frase de marca, logo y URL.

---

## SHORT (9:16, ≈ 49 s)
Fórmula visual: b-roll vertical + overlay oscuro 0.6, Ken Burns alternando in/out, subtítulos karaoke en MAYÚSCULAS con las cifras en rojo, whoosh + flash en cada corte, golpe de bass + sacudida solo en el 0-3 s; ticker arriba.

**[0-3 s]** «Mi sistema de seguridad apostó ×3.9 justo antes del COVID.»
> Boceto: texto gigante «×3.9» rojo y «24 FEB 2020»; medidor que sube hasta ×3.9 y se queda temblando; b-roll de bolsa, Ken Burns «in».
**[3-12 s]** «Quise proteger el bot ajustando el apalancamiento según la volatilidad reciente: mercado nervioso, menos apuesta; mercado tranquilo, más apuesta. Objetivo de 9.5% anual, tope ×4.»
> Boceto: dial con dos estados; Ken Burns «out»; karaoke con «MÁS APUESTA» en rojo.
**[12-24 s]** «Pero la volatilidad estaba baja justo antes del golpe. El 24 de febrero de 2020 operaba a ×3.9. El 12 de marzo, cuando la cuenta reventó, aún estaba a ×2.2. El apalancamiento medio fue ×3.15.»
> Boceto: línea de tiempo con las dos fechas; marca «×3.9» y «×2.2»; whoosh y flash blanco.
**[24-36 s]** «Resultado: la cuenta se apagó por la pérdida diaria, con −14.2% de retorno, un Sharpe de −0.91 y una caída máxima de −21.6%. Peor que el bot de ×2 fijo.»
> Boceto: curva real cayendo; cifras en rojo; Ken Burns «in».
**[36-49 s]** «Entró al desplome con más apalancamiento que el bot fijo. Ajustar por volatilidad pasada no protege de un salto repentino. El video completo está en el canal. Experimento #14 completo en el enlace. No es asesoría financiera.»
> Boceto: vuelve el medidor en ×3.9 con ✕ (loop con el gancho); textos «Video completo en el canal» y «Experimento #14 completo en el enlace»; logo.

## Descripción de YouTube (video largo)
https://atlas-lab-one.vercel.app/e/14?utm_source=youtube&utm_medium=video&utm_campaign=exp014-t1
Ficha del experimento #14 (Bot ATLAS con volatilidad objetivo (simulación)): estado murió · retorno −14.2% · caída máxima −21.6% · Sharpe −0.91 · entró al desplome a ×3.9.
Igual que el bot del experimento 13, pero con volatilidad objetivo (9.5% anual, tope ×4, apalancamiento medio ×3.15). La volatilidad reciente estaba baja antes del COVID, así que el sistema entró al desplome con ×3.9 (24-feb-2020) y la cuenta reventó el 12-mar-2020: −14.2% y caída máxima −21.6%. Ajustar por volatilidad pasada no protege de un salto repentino.
Contenido educativo. No es asesoría financiera ni recomendación de inversión.

## Descripción del Short
https://atlas-lab-one.vercel.app/e/14?utm_source=youtube&utm_medium=short&utm_campaign=exp014-t1
Experimento #14 · murió · −14.2% y caída máxima −21.6%; entró al COVID a ×3.9. No es asesoría financiera.

Capítulos: 0:00 Gancho · 0:31 Presentación · 0:41 La idea: volatilidad objetivo · 1:18 Cómo lo probé · 1:49 Resultado · 2:17 El mecanismo · 2:53 La lección · 3:22 Con tu capital · 3:48 Ficha del experimento #14 · 4:16 Conclusión y cierre

Etiquetas: volatilidad objetivo, vol targeting, bot de trading, COVID 2020, apalancamiento, gestión de riesgo, cuenta fondeada, drawdown, backtest, ATLAS Lab, trading con datos, paridad de riesgo

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

Notas: «apalancamiento ×3.9» exige el medidor visual para no traders. El dial del boceto es solo ilustrativo (sin valores intermedios inventados). El Short cumple hook ≥ 4 y honestidad 5.

## Otros temas de este experimento

- Tema 1 — `exp-014-bot-volatilidad-objetivo.md` — Bot ATLAS con volatilidad objetivo (simulación) (este archivo).
- Tema 2 — `exp-014-t2-volatilidad-objetivo-explicada.md` — Volatilidad objetivo explicada: la fórmula que debía mantener el riesgo constante
- Tema 3 — `exp-014-t3-sharpe-contra-palanca.md` — Sharpe −0.95 contra −0.91: cuando la palanca cambia el dolor pero no el Sharpe

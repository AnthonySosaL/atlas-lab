# Experimento #21 — Fuera de muestra temporal 2007-2013 (anti-sobreajuste) · Tema 2: Seis pruebas para creerle a un bot: este pasó dos, falló una y tres ni se aplicaron

Tema 2 de 3 del experimento #21. Tema 1: `exp-021-prueba-2008-fuera-muestra.md`.
Qué aporta frente a los otros temas: Enseña la escalera de pruebas de validación (fuera de muestra, comparación con comprar y esperar, segundo periodo, Deflated Sharpe, Monte Carlo y señal de ayer) y en cuál se quedó este bot. El tema 1 cuenta la historia completa y el tema 3 compara las tres curvas de 2007-2013.
Estado del guion: **BORRADOR — pendiente de aprobación**
Estado del experimento: **murió** (veredicto del sitio: «No sirvió»)
Serie: G (Construyendo un bot, y por qué murió)
Datos usados: `experiments.json` (v=21: description, params, metrics, kpis, analysis, verdict, notes, capital, period), `exp_details.json` (algo, code, filters), `series/20260610_022556_oos-temporal-2007-2013-anti-overfit-v21.json` (curva de la estrategia y curva «Sin estrategia», 2007-05-22 a 2013-12-31) y la tabla «Con tu capital» de docs/youtube (fila 21). Las cifras con 10,000 dólares son las de la tabla de 100,000 divididas entre 10.

## Títulos (3 opciones)
1. Seis pruebas para creerle a un bot: este pasó dos, falló una y tres ni se aplicaron
2. La escalera de validación de una estrategia: fuera de muestra, Deflated Sharpe, Monte Carlo y señal de ayer
3. Pasó la prueba fuera de muestra con Sharpe 1.06… y le quedaban cuatro por pasar

## Miniatura
Fondo negro de la marca. Una escalera de seis peldaños: dos en verde con tick, uno en rojo con X y tres en gris con candado. Texto grande: «2 DE 6» (blanco, el «2» en verde y el «6» en rojo de marca). Logo ATLAS esquina inferior derecha.

---

## VIDEO LARGO (16:9, ≈ 4:21 min — 4–6 min: tema de una sola idea y pocas cifras)
Ritmo visual: algo cambia en pantalla cada 2-3 s; b-roll real detrás, Ken Burns alterno, subtítulos karaoke, whoosh + flash en cada corte, golpe de bass solo en el momento clave.

**[0:00 — Gancho]** (pantalla: escalera de seis pruebas)
Mi bot pasó la prueba fuera de muestra con un Sharpe de 1.06. Pero hay seis pruebas para creerle a una estrategia, y este bot superó dos, falló una y otras tres ni se aplicaron. Te las explico.
> Boceto: escalera de seis peldaños que se iluminan: dos verdes con tick, uno rojo con X y tres grises con candado; sacudida en la X; b-roll de pantallas de bolsa, Ken Burns «in».

**[0:16 — El experimento]** (pantalla: rótulo con el número y el nombre del experimento)
Este es el experimento #21 de ATLAS Lab: Fuera de muestra temporal 2007-2013 (anti-sobreajuste). Todos los resultados están en la página del experimento.
> Boceto: rótulo animado «EXPERIMENTO #21» con el nombre «Fuera de muestra temporal 2007-2013 (anti-sobreajuste)» debajo y el logo ATLAS; whoosh de entrada y fondo de velas con opacidad 0.12.

**[0:25 — El bot de 2007 a 2013]** (pantalla: reglas congeladas, nuevo periodo)
El caso: las reglas de un bot con filtro de pánico, fijadas mirando los años 2014 a 2024, se aplican sin tocar nada a 2007-2013, con la crisis de 2008 y la del euro de 2011. Una cesta de siete pares de divisas más oro, con paridad de riesgo y ×3. Resultado: Sharpe de 1.06, +84.6%, caída máxima de −10.8% y todos los años positivos.
> Boceto: candado «reglas congeladas» sobre 2014-2024 que se traslada a 2007-2013; tarjetas (1.06 · +84.6% · −10.8% · 6 de 7 años); los ocho símbolos entrando en la cesta.

**[0:52 — Prueba 1: fuera de muestra]** (pantalla: examen con respuestas memorizadas)
Primera prueba: fuera de muestra. Se congelan las reglas y se prueban en un periodo que no se usó para diseñarlas. Sirve contra el sobreajuste, que es memorizar el pasado como quien se aprende las respuestas del examen de ayer. El mínimo que se exige aquí es un Sharpe de 0.30. El bot dio 1.06. Pasa.
> Boceto: hoja de examen con respuestas tachadas «memorizadas»; dos tramos de línea de tiempo separados por un candado; medidor de Sharpe con la marca en 0.30 y la aguja en 1.06; tick verde.

**[1:15 — Prueba 2: contra comprar y esperar]** (pantalla: tres curvas)
Segunda: ganarle a comprar y esperar la misma cesta. Sin estrategia, la cesta ganó +6.2% con un Sharpe de 0.22; el bot, +84.6%. Y sin el filtro, con el mismo ×3, la cuenta perdía −11% y no sobrevivía. También pasa.
> Boceto: tres curvas: verde (bot), gris (comprar y esperar, +6.2%) y roja cortada (sin filtro, −11%); tick verde.

**[1:31 — Prueba 3: un segundo periodo]** (pantalla: periodo 2021-2024 dentro de la muestra)
Tercera: un segundo periodo fuera de muestra. Se pensó en 2021 a 2024, pero ese tramo cae dentro del periodo con el que se diseñaron las reglas, así que no cuenta como una prueba nueva. No aplicada.
> Boceto: línea de tiempo con el tramo 2021-2024 dentro de la zona de diseño 2014-2024; candado gris «no aplicado».

**[1:47 — Prueba 4: Deflated Sharpe]** (pantalla: contador de intentos)
Cuarta: el Deflated Sharpe. Es un Sharpe ajustado por el número de cosas que probaste: pregunta si tu resultado sigue siendo bueno una vez que cuentas cuántos intentos hiciste hasta llegar a él. Aquí no se aplicó.
> Boceto: un Sharpe que se encoge mientras un contador de intentos sube; candado gris «no aplicado».

**[2:02 — Prueba 5: Monte Carlo]** (pantalla: curva barajada)
Quinta: Monte Carlo. Se barajan los retornos muchas veces para ver si el resultado depende del orden en que ocurrieron los días, o de la suerte. Tampoco se aplicó aquí.
> Boceto: la curva real cortada en bloques que se barajan; abanico de curvas alternativas; candado gris «no aplicado».

**[2:14 — Prueba 6: la señal de ayer]** (pantalla: reloj del día)
Sexta: la señal de ayer. Que la estrategia use solo información disponible antes de operar. Y aquí falla: con las señales de un día antes, la base de 2007 a 2013 da un Sharpe de −0.46 y no sobrevive, como se mide en el experimento 27.
> Boceto: reloj con la flecha roja «cobra HOY» tachada; dos barras: «mismo día: 1.06» (verde) que se rompe y «señal de ayer: −0.46» (roja); golpe de bass y sacudida.

**[2:33 — El marcador]** (pantalla: seis pruebas, tres colores)
El marcador: dos superadas, una fallida, tres sin aplicar. Las dos que pasa miden el periodo y la comparación. La que falla mide si el bot podía operar así de verdad, y por eso pesa más: cambia el signo del resultado, de 1.06 a −0.46.
> Boceto: escalera completa con los seis peldaños marcados; el peldaño rojo se agranda y se resalta con el rótulo «la que más pesa».

**[2:52 — En qué orden probar]** (pantalla: de lo barato a lo caro)
Una buena práctica: ordena las pruebas de la más barata a la más cara y detente en la primera que falla. La del día de retraso cuesta casi nada y aquí ya decide. Las demás pruebas, más elaboradas, importan solo si la primera se supera.
> Boceto: flecha de «barata» a «cara» sobre las seis pruebas; la del día de retraso al principio; texto «para en la primera que falla».

**[3:10 — Con tu capital]** (pantalla: tarjeta «Con tu capital» con aviso)
Con 10,000 dólares, la curva termina en más 8,446; con 100,000, en más 84,462. Comprar y esperar la cesta en esas fechas daría más 620 y más 6,196. La curva va de mayo de 2007 a diciembre de 2013. Pero decide con el cierre del mismo día y con ×3: en real no se puede replicar.
> Boceto: tarjeta de capital con aviso ámbar «información del mismo día»; curva verde frente a la gris; selector $10,000 / $100,000.

**[3:33 — Conclusión]** (pantalla: texto grande)
Veredicto: no sirvió. Pasar la prueba fuera de muestra es necesario, pero no suficiente. De seis pruebas, el bot superó dos, y la que falló es la que dice si se puede operar de verdad.
> Boceto: sello ✕ rojo sobre la escalera; la frase «necesaria no es suficiente» en blanco.

**[3:48 — Ficha del experimento #21]** (pantalla: tarjeta en pantalla con la ficha y la URL)
Ficha del experimento 21. Estado: murió (veredicto del sitio: «No sirvió»). Cifra clave: +84.6%, Sharpe 1.06, 6 de 7 años positivos (2013 quedó en −0.02%) y caída máxima −10.8% en 2007-2013. Filtro que decidió: la señal rezagada un día falla; con la señal de ayer la base de 2007-2013 da Sharpe −0.46 (#27). Lección: una prueba fuera de muestra no protege contra usar información que aún no existe al decidir. Revísalo completo en atlas-lab-one.vercel.app/e/21. Contenido educativo, no es asesoría financiera. El trading no se promete: se prueba.
> Boceto: tarjeta con las líneas de la ficha apareciendo una a una (estado, cifra clave, filtro que decidió, lección) y, al pie, la URL «atlas-lab-one.vercel.app/e/21» resaltada; sello del estado del experimento; frase de marca, logo y URL.

---

## SHORT (9:16, ≈ 46 s)
Fórmula visual: b-roll vertical + overlay oscuro 0.6, Ken Burns alternando in/out, subtítulos karaoke en MAYÚSCULAS con las cifras en rojo, whoosh + flash en cada corte, golpe de bass + sacudida solo en el 0-3 s; ticker arriba.

**[0-3 s]** «Seis pruebas para creerle a un bot: pasó dos.»
> Boceto: escalera de seis peldaños: dos verdes con tick, uno rojo con X, tres grises con candado; sacudida; b-roll de bolsa, Ken Burns «in».
**[3-12 s]** «Reglas fijadas con datos de 2014 a 2024, aplicadas a 2007-2013, con la crisis de 2008: Sharpe 1.06 y todos los años positivos.»
> Boceto: candado «reglas congeladas» que se traslada a 2007-2013; tarjetas 1.06 y «6 de 7 años»; Ken Burns «out»; karaoke con «2008» en rojo.
**[12-19 s]** «Es la escalera de validación de una estrategia, de la prueba más barata a la más cara.»
> Boceto: escalera de seis peldaños que se arma de abajo hacia arriba con tick en cada peldaño.
**[19-23 s]** «Pasó dos: fuera de muestra y ganarle a comprar y esperar.»
> Boceto: dos peldaños verdes con tick; whoosh y flash blanco.
**[23-29 s]** «Tres no se aplicaron: un segundo periodo, el Deflated Sharpe y el Monte Carlo.»
> Boceto: tres peldaños grises con candado; Ken Burns «in».
**[29-36 s]** «Y una falló: con la señal de ayer, el Sharpe es −0.46 y la cuenta no sobrevive.»
> Boceto: barra 1.06 que se rompe y barra −0.46 roja; golpe de bass.
**[36-42 s]** «El video completo está en el canal. Experimento #21 completo en el enlace. No es asesoría financiera.»
> Boceto: texto «Video completo en el canal» y «Experimento #21 en el enlace» con el logo ATLAS.
**[42-46 s]** «De seis pruebas, la que más pesa la falló.»
> Boceto: vuelve la escalera con el peldaño rojo (loop con el gancho); corte directo al inicio.

## Descripción (YouTube) — video largo
https://atlas-lab-one.vercel.app/e/21?utm_source=youtube&utm_medium=video&utm_campaign=exp021-t2
Ficha del experimento #21 (Fuera de muestra temporal 2007-2013 (anti-sobreajuste)): estado murió. 2007-2013 fuera de muestra: +84.6%, Sharpe 1.06, 6 de 7 años positivos (2013 quedó en −0.02%) y caída máxima −10.8%; con la señal de un día antes, Sharpe −0.46.
La escalera de seis pruebas para creerle a una estrategia, aplicada a un bot con filtro de pánico en 2007-2013 (7 pares de divisas + oro, ×3): pasa la prueba fuera de muestra (Sharpe 1.06, +84.6%, 6 de 7 años positivos (2013 quedó en −0.02%), caída máxima −10.8%) y la comparación con comprar y esperar (+6.2%) y sin filtro (−11%).
No se aplicaron un segundo periodo, el Deflated Sharpe ni el Monte Carlo; la señal de ayer falla (Sharpe −0.46, experimento 27).
Contenido educativo. No es asesoría financiera ni recomendación de inversión.

## Descripción (YouTube) — Short
https://atlas-lab-one.vercel.app/e/21?utm_source=youtube&utm_medium=short&utm_campaign=exp021-t2
Ficha del experimento #21 (Fuera de muestra temporal 2007-2013 (anti-sobreajuste)): estado murió. 2007-2013 fuera de muestra: +84.6%, Sharpe 1.06, 6 de 7 años positivos (2013 quedó en −0.02%) y caída máxima −10.8%; con la señal de un día antes, Sharpe −0.46.
Un bot pasó 2 de 6 pruebas de validación: fuera de muestra y comparación; falló la señal de ayer (Sharpe −0.46).
Video completo en el canal. Experimento #21 completo en el enlace. Contenido educativo, no es asesoría financiera.

Capítulos: 0:00 Gancho · 0:16 El experimento · 0:25 El bot de 2007 a 2013 · 0:52 Prueba 1: fuera de muestra · 1:15 Prueba 2: contra comprar y esperar · 1:31 Prueba 3: un segundo periodo · 1:47 Prueba 4: Deflated Sharpe · 2:02 Prueba 5: Monte Carlo · 2:14 Prueba 6: la señal de ayer · 2:33 El marcador · 2:52 En qué orden probar · 3:10 Con tu capital · 3:33 Conclusión · 3:48 Ficha del experimento #21

Etiquetas: validación de estrategias, fuera de muestra, sobreajuste, Deflated Sharpe, Monte Carlo, señal de ayer, bot de trading, backtest, crisis de 2008, ATLAS Lab, trading con datos, trading algorítmico

## Rúbrica (autoevaluación, 1–5)
| Criterio | Short | Largo |
|---|---|---|
| hook_0_3s | 4 | 4 |
| ritmo | 4 | 4 |
| promesa_cumplida | 5 | 5 |
| potencial_loop | 4 | 4 |
| claridad_no_traders | 4 | 5 |
| honestidad_atlas | 5 | 5 |
| audio | 4 | 3 |
| cta | 4 | 4 |
| **Promedio** | **4.25** | **4.25** |

Notas: el gancho promete el marcador (superó dos, falló una, tres sin aplicar) y lo cumple; la escalera ordena de lo barato a lo caro. Los conteos salen de los filtros del experimento (oos1 y bh pasan; lag falla; oos2, dsr y mc sin aplicar). El Short cumple hook ≥ 4 y honestidad 5.

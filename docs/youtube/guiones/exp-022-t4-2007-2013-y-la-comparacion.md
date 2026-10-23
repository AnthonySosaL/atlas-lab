# Experimento #22 — Detección de régimen con HMM (IA) · Tema 4: 2007-2013: la IA activa solo desde agosto de 2008 y una comparación que parte con desventaja

Tema 4 de 4 del experimento #22. Tema 1: `exp-022-hmm-ia-regimen.md`.
Qué aporta frente a los otros temas: Cubre el segundo periodo (2007-2013), el resultado combinado con el filtro manual (0.98 y 1.03) y por qué comparar con el filtro manual no es pareja (el HMM usa el dato de ayer; el manual, el de hoy). El tema 1 cuenta el experimento, el tema 2 explica el HMM y el tema 3 el resultado idéntico.
Estado del guion: **BORRADOR — pendiente de aprobación**
Estado del experimento: **no concluyente** (el sitio lo muestra como neutral)
Serie: D (Machine learning en trading: lo que pasó)
Datos usados: `experiments.json` (v=22: description, params, metrics, kpis, analysis, verdict, notes, capital, period), `exp_details.json` (algo, code, filters), `series/20260610_134200_hmm-regime-detection-ia-v22.json` (curva de la estrategia hasta el corte, curva hipotética «Sin reglas de prop firm» y «Sin estrategia») y la tabla «Con tu capital» de docs/youtube (fila 22). Las cifras con 10,000 dólares son las de la tabla de 100,000 divididas entre 10. Se citan #16 y #21 por las vallas del filtro manual (Sharpe 1.23 y 1.06) y por los Sharpe con la señal de ayer (−0.17 y −0.46).

## Títulos (3 opciones)
1. El HMM solo estuvo activo desde agosto de 2008 y la cuenta murió en diciembre: Sharpe −0.54
2. IA contra filtro manual: 0.98 y 1.03 contra 1.23 y 1.06 (y por qué la comparación no es pareja)
3. Dos relojes: el HMM usa el dato de ayer, el filtro manual usa el de hoy

## Miniatura
Fondo negro de la marca. Dos relojes: uno verde «AYER» (HMM) y otro ámbar «HOY» (filtro manual). Texto grande: «¿PAREJA?» (blanco, con el signo de interrogación en rojo de marca). Logo ATLAS esquina inferior derecha.

---

## VIDEO LARGO (16:9, ≈ 4:09 min — 4–6 min: tema de una sola idea y pocas cifras)
Ritmo visual: algo cambia en pantalla cada 2-3 s; b-roll real detrás, Ken Burns alterno, subtítulos karaoke, whoosh + flash en cada corte, golpe de bass solo en el momento clave.

**[0:00 — Gancho]** (pantalla: dos relojes y la fecha ago-2008)
En 2007-2013, el modelo de inteligencia artificial solo estuvo activo desde agosto de 2008. En diciembre de 2008 la cuenta ya se había cerrado, con −11.9%. Y comparado con mi filtro manual, parte con desventaja.
> Boceto: eje 2007-2013 con la marca «activo desde ago-2008» y una X roja en dic-2008; dos relojes enfrentados; b-roll de bolsa, Ken Burns «in».

**[0:15 — El experimento]** (pantalla: rótulo con el número y el nombre del experimento)
Este es el experimento #22 de ATLAS Lab: Detección de régimen con HMM (IA). Todos los resultados están en la página del experimento.
> Boceto: rótulo animado «EXPERIMENTO #22» con el nombre «Detección de régimen con HMM (IA)» debajo y el logo ATLAS; whoosh de entrada y fondo de velas con opacidad 0.12.

**[0:24 — El segundo periodo]** (pantalla: fuera de muestra 2007-2013)
Además de 2014-2024, el experimento prueba el modelo en 2007 a 2013, con la crisis de 2008. Es la segunda oportunidad de que la inteligencia artificial demuestre algo, en un periodo que no se usó para diseñar nada.
> Boceto: dos tramos de línea de tiempo, «2014-2024» y «2007-2013 (fuera de muestra)» con la marca de 2008.

**[0:40 — Cuándo estuvo activo]** (pantalla: calentamiento de 500 días)
Pero el modelo necesita 500 días de calentamiento. En 2007-2013 solo estuvo activo desde agosto de 2008. Y la cuenta se cerró en diciembre de 2008: apenas unos meses de actividad, en plena crisis.
> Boceto: barra de calentamiento de 500 días que termina en ago-2008; tramo de actividad de ago a dic-2008 con X roja.

**[0:54 — El resultado]** (pantalla: tarjetas KPI)
Retorno de −11.9% y Sharpe de −0.54: la cuenta no sobrevivió. Y el filtro manual, en ese mismo periodo, da un Sharpe de 1.06.
> Boceto: tarjetas con tick (−11.9% · −0.54) frente a la vara «filtro manual: 1.06».

**[1:04 — La versión combinada]** (pantalla: HMM más filtro manual)
El experimento también probó combinar el HMM con el filtro manual. Resultado: Sharpe de 0.98 en 2014-2024 y de 1.03 en 2007-2013, frente a 1.23 y 1.06 del filtro manual solo. Al combinarse, el modelo quedó por debajo.
> Boceto: tabla «combinado: 0.98 / 1.03» frente a «manual: 1.23 / 1.06»; la columna combinada en ámbar.

**[1:20 — Dos relojes]** (pantalla: hasta ayer contra hasta hoy)
Ahora, una advertencia de justicia: esta comparación no es pareja. El HMM usa datos hasta ayer: la probabilidad que emplea es la de ayer. El filtro manual con el que se compara usa el cierre del mismo día, información que un bot real no tendría. Cada uno juega con un reloj distinto.
> Boceto: dos relojes: el del HMM marca «hasta ayer» en verde y el del filtro manual «hasta hoy» en ámbar; texto «condiciones distintas».

**[1:41 — Qué significa]** (pantalla: carrera con ventaja)
Es decir, el HMM compite con la restricción de un bot real y el filtro manual no. Eso lo pone en desventaja frente a su vara de 1.23. Probablemente una parte de la brecha se debe al reloj y no a la calidad del modelo, aunque el experimento no la mide por separado.
> Boceto: dos corredores, uno con una pesa en la espalda («hasta ayer») y otro sin ella («hasta hoy»); etiqueta ámbar «no medido por separado».

**[2:03 — Y la vara tampoco es alcanzable]** (pantalla: dos barras negativas)
Además, con la señal de ayer, la vara manual también cae: según el experimento 27, la base de 2014 a 2024 da un Sharpe de −0.17, y la de 2007 a 2013, de −0.46. Es decir, la vara de 1.23 y 1.06 no es alcanzable por un bot real.
> Boceto: la vara 1.23 con una grieta y dos barras rojas «−0.17» y «−0.46»; texto «vara no ejecutable».

**[2:23 — Qué se puede concluir]** (pantalla: balanza)
La conclusión honesta: el modelo no demostró nada ni a favor ni en contra. En 2014-2024 no llegó a actuar. En 2007-2013 actuó unos meses y la cuenta murió. Y su comparación con el filtro manual es injusta. El veredicto es no concluyente.
> Boceto: balanza con dos platos vacíos; tres ítems tachados («sin actuar», «unos meses», «comparación injusta»); sello gris «NO CONCLUYENTE».

**[2:41 — Qué haría falta]** (pantalla: igualdad de condiciones)
Para un veredicto haría falta un periodo donde la cuenta sobreviva después del calentamiento, o una versión sin reglas de cuenta para medir la calidad de la señal, y compararla en igualdad de condiciones, con la señal de ayer en las dos.
> Boceto: tres tarjetas: «periodo más largo», «sin reglas de cuenta», «señal de ayer en las dos».

**[2:58 — Con tu capital]** (pantalla: tarjeta «Con tu capital» con aviso)
Con 10,000 dólares, la curva de 2014 a 2015 termina en menos 1,026; con 100,000, en menos 10,258. Comprando y esperando en esas fechas, menos 578 y menos 5,776. Con tu capital verías esa cuenta cerrada; la línea «Sin reglas de prop firm» es hipotética.
> Boceto: tarjeta de capital con selector; curva roja cortada en enero de 2015; curva punteada «hipotética».

**[3:16 — Conclusión]** (pantalla: texto grande)
Veredicto: no concluyente. Una IA que llega con 500 días de retraso y que compite con un reloj más estricto no puede demostrar ni refutar nada. Antes de juzgar a un modelo, iguala las reglas del juego.
> Boceto: sello gris «NO CONCLUYENTE»; los dos relojes se igualan al final.

**[3:32 — Ficha del experimento #22]** (pantalla: tarjeta en pantalla con la ficha y la URL)
Ficha del experimento 22. Estado: no concluyente (neutral en el sitio). Cifra clave: 2014-2024, retorno −10.4% y Sharpe −2.31 con la cuenta cerrada a los 81 días, idéntico a operar a ×3 sin filtro. Filtro que decidió: el calentamiento de 500 días; el modelo no llegó a decidir antes del corte. En 2007-2013: −11.9%, Sharpe −0.54. Lección: un modelo con 500 días de calentamiento no se puede juzgar en un periodo que termina antes. Revísalo completo en atlas-lab-one.vercel.app/e/22. Contenido educativo, no es asesoría financiera. El trading no se promete: se prueba.
> Boceto: tarjeta con las líneas de la ficha apareciendo una a una (estado, cifra clave, filtro que decidió, lección) y, al pie, la URL «atlas-lab-one.vercel.app/e/22» resaltada; sello del estado del experimento; frase de marca, logo y URL.

---

## SHORT (9:16, ≈ 46 s)
Fórmula visual: b-roll vertical + overlay oscuro 0.6, Ken Burns alternando in/out, subtítulos karaoke en MAYÚSCULAS con las cifras en rojo, whoosh + flash en cada corte, golpe de bass + sacudida solo en el 0-3 s; ticker arriba.

**[0-3 s]** «El HMM solo estuvo activo desde agosto de 2008.»
> Boceto: eje 2007-2013 con la marca «ago-2008» y X roja en diciembre; sacudida; b-roll de bolsa, Ken Burns «in».
**[3-8 s]** «Probé una IA para detectar crisis en 2007-2013. Necesita 500 días de calentamiento.»
> Boceto: barra de calentamiento de 500 días; Ken Burns «out»; karaoke con «500 DÍAS» en rojo.
**[8-15 s]** «Era la segunda oportunidad de la IA: un periodo que no se usó para diseñar nada.»
> Boceto: dos tramos de línea de tiempo, «diseño» y «prueba 2007-2013», separados por un candado.
**[15-21 s]** «La cuenta se cerró en diciembre de 2008, con −11.9% y un Sharpe de −0.54.»
> Boceto: curva cortada con X; tarjetas −11.9% y −0.54; whoosh y flash blanco.
**[21-28 s]** «Combinada con mi filtro manual: Sharpe de 0.98 y 1.03, contra 1.23 y 1.06 del filtro manual solo.»
> Boceto: tabla de dos columnas con las cuatro cifras; Ken Burns «in».
**[28-36 s]** «Pero el filtro manual usa el cierre del mismo día. La IA, solo el de ayer. No es una comparación pareja.»
> Boceto: dos relojes, «hoy» ámbar y «ayer» verde; sello «NO PAREJA».
**[36-43 s]** «El video completo está en el canal. Experimento #22 completo en el enlace. No es asesoría financiera.»
> Boceto: texto «Video completo en el canal» y «Experimento #22 en el enlace» con el logo ATLAS.
**[43-46 s]** «Una IA que llega tarde no demuestra nada.»
> Boceto: vuelve el eje con «ago-2008» (loop con el gancho); corte directo al inicio.

## Descripción (YouTube) — video largo
https://atlas-lab-one.vercel.app/e/22?utm_source=youtube&utm_medium=video&utm_campaign=exp022-t4
Ficha del experimento #22 (Detección de régimen con HMM (IA)): estado no concluyente. 2014-2024: −10.4%, Sharpe −2.31, cuenta cerrada a los 81 días, resultado idéntico a ×3 sin filtro; 2007-2013: −11.9% y Sharpe −0.54.
El segundo periodo del experimento del HMM (IA), 2007-2013: el modelo solo estuvo activo desde agosto de 2008 y la cuenta se cerró en diciembre de 2008 con −11.9% y Sharpe −0.54. Combinado con el filtro manual quedó en Sharpe 0.98 y 1.03, frente a 1.23 y 1.06 del filtro manual solo.
La comparación no es pareja: el HMM usa el dato de ayer y el filtro manual el cierre del mismo día. Veredicto: no concluyente.
Contenido educativo. No es asesoría financiera ni recomendación de inversión.

## Descripción (YouTube) — Short
https://atlas-lab-one.vercel.app/e/22?utm_source=youtube&utm_medium=short&utm_campaign=exp022-t4
Ficha del experimento #22 (Detección de régimen con HMM (IA)): estado no concluyente. 2014-2024: −10.4%, Sharpe −2.31, cuenta cerrada a los 81 días, resultado idéntico a ×3 sin filtro; 2007-2013: −11.9% y Sharpe −0.54.
El HMM solo estuvo activo desde agosto de 2008 y la cuenta murió en diciembre: Sharpe −0.54, y una comparación injusta.
Video completo en el canal. Experimento #22 completo en el enlace. Contenido educativo, no es asesoría financiera.

Capítulos: 0:00 Gancho · 0:15 El experimento · 0:24 El segundo periodo · 0:40 Cuándo estuvo activo · 0:54 El resultado · 1:04 La versión combinada · 1:20 Dos relojes · 1:41 Qué significa · 2:03 Y la vara tampoco es alcanzable · 2:23 Qué se puede concluir · 2:41 Qué haría falta · 2:58 Con tu capital · 3:16 Conclusión · 3:32 Ficha del experimento #22

Etiquetas: HMM, inteligencia artificial, crisis de 2008, filtro manual, comparación justa, señal de ayer, Sharpe ratio, bot de trading, prop firm, ATLAS Lab, trading con datos, validación de estrategias

## Rúbrica (autoevaluación, 1–5)
| Criterio | Short | Largo |
|---|---|---|
| hook_0_3s | 4 | 4 |
| ritmo | 4 | 4 |
| promesa_cumplida | 5 | 5 |
| potencial_loop | 4 | 4 |
| claridad_no_traders | 4 | 4 |
| honestidad_atlas | 5 | 5 |
| audio | 4 | 3 |
| cta | 4 | 4 |
| **Promedio** | **4.25** | **4.13** |

Notas: el gancho une una fecha concreta (agosto de 2008) con el cierre de la cuenta; la honestidad es 5 porque se advierte que la comparación no es pareja y que la parte atribuible al reloj no se mide por separado. El Short cumple hook ≥ 4.

# Experimento #45 — COT contrario en extremos

Estado del guion: **BORRADOR — pendiente de aprobación**
Estado del experimento: **MURIÓ** (Sharpe −0.28 en 2014–2024, con la cuenta cortada el 28-abr-2022, y −1.37 en 2007–2013)
Serie: **G (epílogo)** — usa los datos de #44; cierra los «caminos futuros» del veredicto de #40.
Datos usados: `experiments.json` (v=45: analysis, description, verdict, notes, metrics, kpis, params_view, capital) · `exp_details.json` (algo, filters) · `series/20260610_142118_cot-contrarian-extremos-v45.json` (curva 1 = estrategia hasta la quiebra del 28-abr-2022; curva 2 = «sin reglas de prop firm»; curva 3 = comprar y esperar) · fila #45 de la tabla «Con tu capital» (`docs/youtube/`).

## Títulos (opciones)
1. Hacer lo contrario de los especuladores (COT): Sharpe −1.37
2. ¿Vender cuando los especuladores están muy comprados? Lo probé
3. COT contrario: la cuenta murió el 28 de abril de 2022

## Miniatura
Fondo #09090b. Texto gigante: "AL REVÉS" en blanco y una ✕ roja encima. Elemento visual: una multitud de siluetas mirando a la derecha y una sola, en rojo, caminando a la izquierda. Pequeño, en una esquina: "COT". Logo ATLAS en la esquina inferior derecha. (No repite los títulos.)

---

## VIDEO LARGO (16:9, ≈ 5:36 · experimento corto: rango de 4 a 6 min)

**[0:00 — Gancho]** (pantalla — BOCETO: multitud de siluetas apuntando a la derecha y una en rojo a la izquierda; sobre ella aparecen dos cifras: «−0.28 · 2014–2024» y «−1.37 · 2007–2013» con sellos ✕)
Cuando los especuladores están en su extremo comprador, ¿conviene vender? Es la idea del posicionamiento contrario. La probé en 7 pares de divisas, con una sola regla clara: Sharpe de −0.28 en 2014–2024 y de −1.37 en 2007–2013. Murió en los dos periodos.

**[0:20 — La lógica de la idea]** (pantalla — BOCETO: barra de posición neta de los especuladores que sube hasta una zona roja «extremo comprador»; flecha de «vender»; la misma barra en zona verde «extremo vendedor» con flecha de «comprar»)
Del experimento 44: cada semana la CFTC publica cuántas apuestas al alza y a la baja tienen los especuladores. La lógica de la idea es vieja: cuando casi todos ya están comprados, queda poca gente para seguir empujando el precio hacia arriba. Entonces, si están muy comprados, vender; si están muy vendidos, comprar.

**[0:44 — La regla]** (pantalla — BOCETO: tarjeta params_view: percentil >90 vender · <10 comprar · ventana 104 semanas · rezago 3 días · ×2 · kill-switch −3%; gráfico del percentil rodante con las dos franjas)
Una sola regla, definida de antemano. Para cada par se calcula en qué percentil está la posición de los especuladores respecto a las últimas 104 semanas, dos años. Estar en el percentil 90 significa que hoy están más comprados que en el 90% de esas semanas. Por encima de 90, vender; por debajo de 10, comprar. En tres pares el sentido se invierte, USDJPY, USDCAD y USDCHF, porque el futuro es de la divisa contra el dólar. La señal se rezaga 3 días por la publicación, con apalancamiento ×2, corte automático del 3%, deslizamiento de 0.2% y sin filtro macro.

**[1:26 — Un ejemplo de percentil]** (pantalla — BOCETO: 104 barras semanales ordenadas; una barra resaltada que supera al 90% de las demás y se pinta de rojo con la leyenda «hoy: más comprados que en el 90% de las semanas»)
Un ejemplo para que el percentil quede claro. Imagina las últimas 104 semanas ordenadas de la menos comprada a la más comprada. Si esta semana queda más arriba que el 90% de ellas, estamos en el percentil 90: los especuladores están en un extremo comprador y la regla vende. Si queda más abajo que el 90%, en el percentil 10, están en un extremo vendedor y la regla compra.

**[1:56 — Cómo se probó]** (pantalla — BOCETO: checklist de exp_details.filters: señal rezagada 3 días ✓ · 2014–2024 y 2007–2013 ✓ · 6 pares efectivos antes de 2023 ⚠ · series con contratos cruzados ⚠ · costos: solo deslizamiento 0.2%)
Se prueba en 2014–2024 y en 2007–2013, el periodo fuera de muestra, es decir, años que el bot no vio al diseñarse, que incluye 2008. Son siete pares en el código, pero el dólar neozelandés no tiene señal hasta el 3 de febrero de 2023, así que antes de esa fecha operan seis. Y las series de euro, libra y yen mezclan contratos cruzados, como conté en el experimento 44. De costos, solo el deslizamiento de 0.2% en los cortes.

**[2:30 — Los resultados]** (pantalla — BOCETO: curva real de series/…v45.json (rojo) hasta el sello ✕ del 28-abr-2022; tabla de tres filas aparece a la derecha; contador de días que llega a 2560)
| Periodo | Sharpe | Qué pasó con la cuenta |
|---|---|---|
| 2014–2024 | −0.28 | se corta el 28-abr-2022 (día 2560) |
| 2007–2013 (fuera de muestra) | −1.37 | muere |
| Sin el dólar neozelandés: 2014–2024 / 2007–2013 | −0.25 / −1.30 | casi igual |
El Sharpe es la ganancia por unidad de riesgo: negativo significa que pierde. La cuenta aguantó mucho más que las otras cuentas de esta serie, hasta el día 2560, el 28 de abril de 2022. Pero murió. Y el periodo fuera de muestra, con la crisis de 2008, es peor: Sharpe −1.37. Sin el dólar neozelandés, que casi no tiene historia, el resultado casi no cambia: −0.25 y −1.30.

**[3:00 — Qué dice y qué no dice]** (pantalla — BOCETO: dos columnas: «lo que dice la prueba» con tick y «lo que no dice» con aviso; texto: «una sola regla · percentil 90/10 · 2 años · ×2»)
Hay que ser precisos. En esta prueba, el posicionamiento de los especuladores no anticipó el retorno en plazos que un inversionista minorista pueda aprovechar. Pero probé una sola regla, percentil 90 y 10 de dos años, con ×2 y las reglas de la prop firm, la empresa de fondeo que cierra la cuenta si cae 10%, y con datos que mezclan contratos cruzados. No demuestra que el COT no sirva nunca: demuestra que esta regla, con estos datos, no sirvió.

**[3:34 — Lo que no probé]** (pantalla — BOCETO: lista con casillas vacías: «seguir a los especuladores en vez de ir en contra» · «otros percentiles» · «otras ventanas» · «series COT sin contratos cruzados»)
Y aquí va lo que no probé. Probé una sola regla. No probé la versión inversa, seguir a los especuladores en vez de ir en contra; ni otros percentiles, ni otras ventanas de tiempo. Y las series tienen la limitación de los contratos cruzados del experimento 44. Por eso la conclusión es estrecha: con esta regla, estos datos y estas reglas de cuenta, no funcionó.

**[4:02 — El marcador de filtros]** (pantalla — BOCETO: checklist de exp_details.filters: Sharpe 2014–2024 ✗ · Sharpe 2007–2013 ✗ · sobrevivir en ambos periodos ✗ · señal rezagada ✓ · datos «6 pares efectivos» — · costos completos — · Deflated Sharpe —)
El tablero de filtros: el Sharpe de 2014–2024, −0.28, y el de 2007–2013, −1.37, son negativos, y la cuenta no sobrevive en los dos periodos. Pasa uno: la señal va rezagada tres días y no mira el futuro. Los datos tienen sus asteriscos: seis pares efectivos antes de 2023 y contratos cruzados. Los costos completos y el Deflated Sharpe, la prueba que descuenta la suerte de haber probado muchas ideas, no se aplicaron.

**[4:34 — Con tu capital]** (pantalla — BOCETO: tarjeta «Con tu capital»: $100,000 → −$10,219 contra −$5,266, rotulada «2014–2022, hasta el corte»; la línea «sin reglas» en discontinua con la etiqueta «hipotética»)
Con $100,000 simulados, la cuenta se cierra con −$10,219 el 28 de abril de 2022. Comprar y esperar la misma cesta, en las mismas fechas: −$5,266. La línea «sin reglas de prop firm» es hipotética, porque en la realidad la cuenta se cierra ese día. Es una simulación histórica, no una promesa; con $10,000 serían la décima parte.

**[5:00 — Cierra dos caminos]** (pantalla — BOCETO: mapa de los experimentos 41 a 45 con tres sellos ✕ (42, 43, 45) y dos tarjetas de datos (41, 44) en gris)
Con este experimento se cierran los dos caminos que dejó el veredicto de los 40 experimentos: el carry, con las tasas de FRED, y el posicionamiento de los especuladores, con el COT. Ninguno produjo una ventaja con las reglas y los datos que usé.

**[5:20 — Conclusión y cierre]** (pantalla — BOCETO: sello «NO SIRVIÓ»; KPIs −0.28 · −1.37 · 28-abr-2022; logo ATLAS + URL)
Veredicto: no sirvió. Ir contra los extremos del COT muere en ambos periodos. Todos los datos están en atlas-lab-one.vercel.app, experimento 45. Contenido educativo, no es asesoría financiera. El trading no se promete: se prueba.

---

## SHORT (9:16, ≈ 49 s)
Título del Short: Hacer lo contrario de los especuladores: Sharpe −1.37 #shorts
Fórmula visual (CLAUDE.md del canal): b-roll vertical real con overlay 0.6, Ken Burns alternado, subtítulos karaoke en MAYÚSCULAS con cifras en rojo, ticker arriba, whoosh + flash en cada corte; golpe (bass + sacudida) solo en 0-3 s y 29-41 s.

**[0-3 s]** "Hacer lo contrario de los especuladores: Sharpe menos 1.37."
- Boceto: b-roll de multitud caminando en una dirección (kb=in) con una persona a contracorriente; «−1.37 · 2007–2013» en rojo gigante; golpe de bass.

**[3-15 s]** "Cada semana, la CFTC publica cuánto apuestan los especuladores. Si están muy comprados, vendo. Si están muy vendidos, compro. Es la idea del posicionamiento contrario."
- Boceto: barra de posición neta que sube a la zona roja y dispara «VENDER»; luego a la verde y «COMPRAR».

**[15-29 s]** "Una sola regla, con dos años de historia para definir qué es «muy»: percentil 90 y percentil 10. La probé en siete pares de divisas, con apalancamiento ×2."
- Boceto: gráfico del percentil rodante con las franjas del 90 y el 10; siete fichas de pares entrando.

**[29-41 s]** "Resultado: Sharpe menos 0.28 en 2014–2024, con la cuenta cortada el 28 de abril de 2022. Y menos 1.37 en 2007–2013. Murió en los dos periodos. Sin el dólar neozelandés, casi igual."
- Boceto: curva real de series/…v45.json hasta el sello ✕; dos barras rojas (−0.28 y −1.37); sacudida en la segunda.

**[41-49 s]** "En esta prueba, el posicionamiento no anticipó el retorno. Video completo en el canal. No es asesoría financiera. Hacer lo contrario de los especuladores…"
- Boceto: sello «NO SIRVIÓ»; logo ATLAS. Loop: la frase queda abierta y enlaza con «…Sharpe menos 1.37».

## Descripción (YouTube)
Probé la estrategia contraria con el posicionamiento COT de la CFTC: vender cuando los especuladores están en su extremo comprador (percentil 90 de 2 años) y comprar en el extremo opuesto (percentil 10), en 7 pares de forex con ×2. Resultado: Sharpe −0.28 en 2014–2024 (cuenta cortada el 28 de abril de 2022) y −1.37 en 2007–2013. Una sola regla, probada con datos que mezclan contratos cruzados. Experimento #45.

Datos completos: https://atlas-lab-one.vercel.app (experimento #45)

Capítulos: 0:00 Gancho · 0:20 La lógica de la idea · 0:44 La regla · 1:26 Un ejemplo de percentil · 1:56 Cómo se probó · 2:30 Los resultados · 3:00 Qué dice y qué no dice · 3:34 Lo que no probé · 4:02 El marcador de filtros · 4:34 Con tu capital · 5:00 Cierra dos caminos · 5:20 Conclusión y cierre

Contenido educativo. No es asesoría financiera ni recomendación de inversión.

Etiquetas: COT, CFTC, posicionamiento, especuladores, estrategia contraria, forex, backtest, Sharpe ratio, prop firm, trading, ATLAS Lab

## Rúbrica (autoevaluación — criterios del CLAUDE.md del canal, 1-5)
| hook_0_3s | ritmo | promesa_cumplida | potencial_loop | claridad_no_traders | honestidad_atlas | audio | cta |
|---|---|---|---|---|---|---|---|
| 4 | 4 | 5 | 4 | 4 | 5 | 4 | 4 |

Promedio: **4.25** → cumple el corte (≥ 4.0; hook ≥ 4 y honestidad 5).
Notas: el hook es una cifra concreta ligada a una idea que el público trader conoce; se aclara el periodo en pantalla («2007–2013») para que la cifra no parezca de otro contexto. Punto débil: «percentil» se explica con la frase de las 104 semanas en el largo; en el Short solo con el gráfico.

## Otros temas de este experimento
1. Tema 1 (este archivo) — `exp-045-cot-contrario-extremos.md` — Hacer lo contrario de los especuladores (COT): Sharpe −1.37
2. Tema 2 — `exp-045-t2-cuenta-aguanto-2560-dias.md` — la cuenta que aguantó 2,560 días
3. Tema 3 — `exp-045-t3-pares-invertidos-percentil.md` — la trampa de los pares invertidos

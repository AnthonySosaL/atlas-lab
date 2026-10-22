# Experimento #21 — Fuera de muestra temporal 2007-2013 (anti-sobreajuste)

Estado del guion: **BORRADOR — pendiente de aprobación**
Estado del experimento: **murió** (veredicto del sitio: «No sirvió») · Serie G — Construyendo un bot (y por qué murió)
Datos usados: `experiments.json` (v=21: kpis, metrics, params, params_view, verdict, analysis, notes, capital), `exp_details.json` (clave `…-v21`: algo, filters), `series/20260610_022556_oos-temporal-2007-2013-anti-overfit-v21.json` (curva de la estrategia y curva «Sin estrategia», 2007-05-22 a 2013-12-31), tabla «Con tu capital» (archivo de capital en `docs/youtube/`). Relacionados: #16 (las reglas), #19 (variante VIX < 14) y #27 (la señal de ayer).

## Títulos
1. Dejé a mi bot atravesar la crisis de 2008 sin tocar nada: Sharpe 1.06
2. Prueba anti-sobreajuste en 2007-2013: +84.6% y 100% de años positivos
3. Una prueba fuera de muestra no lo salva todo: Sharpe 1.06 y −0.46

## Miniatura
Fondo `#09090b`. «2008» enorme en blanco, Segoe UI Black, con la curva real en verde `#22c55e` cruzando el año; un sello rojo `#e11d2a` en diagonal con «SIN TOCAR» (dos palabras en total, sin repetir los títulos). Logo ATLAS abajo a la derecha.

---

## VIDEO LARGO (16:9, ≈ 5:21 min)
Ritmo visual: algo cambia en pantalla cada 2-3 s; los pasos de cada boceto van en orden. Fórmula del canal: b-roll real detrás, Ken Burns alterno, subtítulos karaoke, whoosh + flash en cada corte.

**[0:00 — Gancho]** (pantalla: la curva real de 2007 a 2013 dibujándose)
Tomé las reglas de mi bot, fijadas mirando los años 2014 a 2024, y las apliqué sin tocar nada a 2007 a 2013: datos que nunca vio, con la crisis de 2008. Resultado: Sharpe de 1.06, que es el retorno por unidad de riesgo, más 84.6% y todos los años en positivo. Sin el filtro, a ×3, la cuenta perdía 11%. Parece la prueba perfecta. Veamos qué le falta.
> Boceto: curva de la estrategia (verde) cruzando la zona de 2008 sin caer; la curva sin filtro (roja) se hunde y se corta; contador «+84.6%» y texto «datos que nunca vio».

**[0:29 — Dónde encaja en la serie]** (pantalla: mapa de la serie, #15 al #30)
Después de validar el filtro en diez años (#16) y de probar tres variantes (#18, #19 y #20), este experimento hace la pregunta clásica: ¿las reglas funcionan en un periodo distinto del que se usó para diseñarlas? Es la última prueba de la serie antes de que entre la inteligencia artificial, del #22 al #25.
> Boceto: línea de tiempo de la serie con el #21 iluminado y una etiqueta «¿generaliza?».

**[0:51 — Qué es el sobreajuste]** (pantalla: examen memorizado)
Cuando diseñas una estrategia mirando datos del pasado, corres el riesgo de memorizarlos, como un estudiante que se aprende las respuestas del examen de ayer. Eso se llama sobreajuste. La defensa clásica es la prueba fuera de muestra: congelar las reglas y probarlas con datos que no se usaron para diseñarlas.
> Boceto: hoja de examen con respuestas tachadas «memorizadas»; luego dos tramos de línea de tiempo: «diseño 2014–2024» (gris) y «prueba 2007–2013» (verde) separados por un candado.

**[1:13 — La prueba]** (pantalla: reglas congeladas y cesta)
Las reglas son idénticas a las del experimento 16: VIX por encima de 28, salto del VIX o crédito por debajo de su media de 60 días, con paridad de riesgo a ×3. El periodo: 2007 a 2013, con la crisis de 2008 y la crisis del euro de 2011. La cesta es más pequeña: siete pares de divisas más oro. El mínimo que se exige fuera de muestra es un Sharpe de 0.30.
> Boceto: tarjeta con candado «reglas congeladas»; los ocho símbolos (EURUSD, GBPUSD, USDJPY, AUDUSD, USDCAD, USDCHF, NZDUSD, XAUUSD) entrando en la cesta; marcas de 2008 y 2011 sobre el eje de tiempo.

**[1:44 — Resultados]** (pantalla: tarjetas de KPI)
Sharpe de 1.06, frente a 1.23 en 2014–2024: una caída razonable. Retorno total, más 84.6%. Drawdown máximo, la peor caída desde un máximo de la cuenta, de menos 10.8%. Años positivos: 100%. Y sobrevive a 2008.
> Boceto: tarjetas con tick (1.06 · +84.6% · −10.8% · 100%); la curva con la banda de 2008 resaltada y el sello verde «sobrevive».

**[2:00 — Cómo leer un 100% de años positivos]** (pantalla: calendario de años)
Un 100% de años positivos significa que cada uno de los años de 2007 a 2013, incluyendo 2008, cerró en positivo. Es una marca llamativa, pero hay que leerla con cuidado: un año positivo puede ser pequeño, y la cuenta depende de que no haya una pérdida diaria fuerte. Por eso se mira junto con el Sharpe y con la caída máxima.
> Boceto: siete casillas de años (2007 a 2013) que se pintan de verde una a una; debajo, dos medidores pequeños: Sharpe 1.06 y caída máxima −10.8%.

**[2:26 — Los dos periodos lado a lado]** (pantalla: tabla comparativa)
Pongamos los dos periodos lado a lado. En 2014 a 2024: Sharpe de 1.23, más 267.3% y caída máxima de menos 12.5%. En 2007 a 2013: Sharpe de 1.06, más 84.6% y caída máxima de menos 10.8%. Parecidos en forma, que es lo que haría una prueba fuera de muestra bien superada: que el resultado no dependa del periodo.
> Boceto: tabla de dos columnas («2014–2024, diseño» y «2007–2013, fuera de muestra») con filas Sharpe · retorno · caída máxima; las cifras de la columna de la derecha entran con tick y un cartel verde «no depende del periodo».

**[2:51 — Contra qué se compara]** (pantalla: tres curvas)
Sin el filtro, con el mismo apalancamiento ×3, el retorno es de menos 11%, el Sharpe de menos 0.59 y la cuenta no sobrevive. Y la cesta sin ninguna estrategia, comprando y esperando, ganó más 6.2% con un Sharpe de 0.22. Es decir, el filtro hace una diferencia enorme en el papel.
> Boceto: tres curvas del eje 2007–2013: estrategia (verde), «×3 sin filtro» (roja, cortada) y «comprar y esperar» (gris); tarjetas «−11% · −0.59» y «+6.2% · 0.22».

**[3:13 — La lista de pruebas]** (pantalla: checklist de filtros)
La lista completa: fuera de muestra, pasa. Frente a comprar y esperar, pasa. Un segundo periodo fuera de muestra, 2021 a 2024: no aplicado, porque ese tramo cae dentro del periodo de diseño. Dos pruebas estadísticas más, el Deflated Sharpe y el Monte Carlo: no aplicadas. Y la señal rezagada un día: falla.
> Boceto: checklist de `exp_details.json`: «OOS 2007–2013: pasa», «vs comprar y esperar: pasa», «2021–2024: no aplicado», «DSR y Monte Carlo: no aplicados», «Señal de ayer: FALLA» con sello rojo.

**[3:36 — El detalle de siempre]** (pantalla: reloj y cierre de hoy)
Y aquí está el detalle: la señal sigue usando el VIX y el crédito del cierre del mismo día. Con la señal rezagada un día, la base de 2007 a 2013 da un Sharpe de menos 0.46 y no sobrevive; eso se mide en el experimento 27. Una prueba fuera de muestra no protege contra usar información que aún no existe al decidir: la misma falla viaja a cualquier periodo.
> Boceto: dos barras, «señal del mismo día: 1.06» (verde) y «señal de ayer: −0.46» (roja); la verde se rompe con golpe de bass y sacudida.

**[4:05 — Con tu capital]** (pantalla: tarjeta de capital $10,000 / $100,000)
Con 10,000 dólares, la curva termina en más $8,446; con 100,000, en más $84,462. Comprar y esperar la cesta en esas fechas daría más $620 y más $6,196. La curva va de mayo de 2007 a diciembre de 2013. Pero decide con el cierre del mismo día y con apalancamiento ×3: en real no se puede replicar.
> Boceto: tarjeta «Con tu capital» del sitio con el selector; curva verde frente a la gris «Sin estrategia»; aviso ámbar «información del mismo día».

**[4:30 — Qué haría falta para creerle]** (pantalla: tres candados)
Para creerle a este resultado haría falta la señal de ayer, costos y un segundo periodo que no se usara para diseñar nada. La lección no es que la prueba fuera de muestra sea inútil: es que responde una sola pregunta, la del periodo, y no las demás.
> Boceto: tres candados cerrados («señal de ayer», «costos», «segundo periodo») y uno abierto («periodo distinto»).

**[4:50 — Conclusión]** (pantalla: texto grande)
Veredicto: no sirvió. El más 84.6% con Sharpe 1.06 depende de usar el VIX y el crédito del cierre del mismo día; con la señal de un día antes, la base de 2007 a 2013 tiene un Sharpe de menos 0.46 y no sobrevive.
> Boceto: sello rojo «NO SIRVIÓ»; frase final «El trading no se promete: se prueba».

**[5:10 — Cierre]** (pantalla: logo y enlace)
En el siguiente video, entra la inteligencia artificial: el experimento 22. Todos los datos en atlas-lab-one.vercel.app, experimento 21. Contenido educativo, no es asesoría financiera.
> Boceto: pantalla final con enlace y logo ATLAS; fondo de velas animadas con opacidad 0.12.

---

## SHORT (9:16, ≈ 44 s)
Fórmula visual: b-roll Pexels vertical + overlay oscuro 0.6, Ken Burns alternando in/out, subtítulos karaoke en MAYÚSCULAS con las cifras en rojo, whoosh + flash en cada corte, golpe de bass + sacudida solo en el 0-3 s y en el giro del −0.46; ticker arriba, viñeta y velas con opacidad ≤ 0.12.

**[0-3 s]** "Crisis de 2008: más 84.6% sin tocar nada."
> Boceto: curva real cruzando 2008 sin caer; contador «+84.6%»; texto gigante «2008».
**[3-7 s]** "Tomé las reglas de mi bot, fijadas mirando 2014 a 2024."
> Boceto: tarjeta con candado «reglas congeladas» sobre el tramo 2014–2024.
**[7-12 s]** "Las apliqué a 2007 a 2013, datos que nunca vio, con la crisis de 2008."
> Boceto: el candado se desplaza al tramo 2007–2013; marca roja en 2008.
**[12-15 s]** "Sharpe 1.06. Todos los años positivos. Caída máxima de 10.8%."
> Boceto: tres tarjetas con tick (1.06 · 100% · −10.8%).
**[15-21 s]** "Sin el filtro, a ×3, la cuenta perdía 11%. Comprar y esperar esa cesta: más 6.2%."
> Boceto: curva roja sin filtro que cae y se corta; barra gris pequeña «+6.2%».
**[21-29 s]** "Pero el filtro decide con el cierre de hoy. Con la señal de ayer, el Sharpe es menos 0.46 y la cuenta no sobrevive."
> Boceto: dos barras, 1.06 verde y −0.46 roja; la verde se rompe con golpe de bass y sacudida.
**[29-37 s]** "Una prueba fuera de muestra no te protege de usar información que aún no existe. El trading no se promete: se prueba."
> Boceto: sello «NO SIRVIÓ»; la frase de marca en blanco.
**[37-44 s]** "El video completo está en el canal. No es asesoría financiera. Y si un bot sobrevive a 2008 en el papel:"
> Boceto: logo ATLAS; corte directo al inicio (loop).

## Descripción (YouTube)
Congelé las reglas del filtro macro (fijadas con datos de 2014–2024) y las apliqué a 2007–2013, con la crisis de 2008 y la del euro de 2011, sobre 7 pares de divisas más oro: +84.6%, Sharpe 1.06, 100% de años positivos.
Sin el filtro, a ×3, perdía −11%.
Pero con la señal de un día antes, la base da Sharpe −0.46 y no sobrevive.
Todos los datos: https://atlas-lab-one.vercel.app (experimento #21)
Contenido educativo. No es asesoría financiera ni recomendación de inversión.

Capítulos: 0:00 Gancho · 0:29 Dónde encaja en la serie · 0:51 Qué es el sobreajuste · 1:13 La prueba · 1:44 Resultados · 2:00 Cómo leer un 100% de años positivos · 2:26 Los dos periodos lado a lado · 2:51 Contra qué se compara · 3:13 La lista de pruebas · 3:36 El detalle de siempre · 4:05 Con tu capital · 4:30 Qué haría falta para creerle · 4:50 Conclusión · 5:10 Cierre

Etiquetas: fuera de muestra, sobreajuste, crisis de 2008, backtest, bot de trading, Sharpe ratio, VIX, prop firm, trading con datos, ATLAS Lab, validación de estrategias, trading algorítmico

## Rúbrica (autoevaluación del Short)
hook_0_3s 5 · ritmo 4 · promesa_cumplida 5 · potencial_loop 4 · claridad_no_traders 4 · honestidad_atlas 5 · audio 4 · cta 4 → promedio 4.38 (aprobado: ≥ 4.0, hook ≥ 4, honestidad 5)
Notas: el gancho promete un resultado en una crisis conocida y el Short cumple con el giro del −0.46; la honestidad es 5 porque el veredicto y la limitación (señal del mismo día) se dicen en voz.

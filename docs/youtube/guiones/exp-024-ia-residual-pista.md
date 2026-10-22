# Experimento #24 — Régimen supervisado residual (XGBoost v2)

Estado del guion: **BORRADOR — pendiente de aprobación**
Estado del experimento: **murió** (veredicto del sitio: «No sirvió») · Serie D — Machine learning en trading: lo que pasó
Datos usados: `experiments.json` (v=24: kpis, metrics, params, params_view, verdict, analysis, notes, capital), `exp_details.json` (clave `…-v24`: algo, filters), `series/20260610_134831_regimen-supervisado-v2-residual-v24.json` (curva de la estrategia hasta el corte, curva hipotética «Sin reglas de prop firm» y «Sin estrategia»), tabla «Con tu capital» (archivo de capital en `docs/youtube/`). Relacionados: #23 (la versión 1) y #27 (la señal de ayer).

## Títulos
1. Le di el filtro manual a la IA como pista: −7.0% en 89 días
2. Segundo intento con IA contra las crisis: Sharpe −1.34 y cuenta cerrada
3. XGBoost v2: umbral adaptativo y cuenta cerrada a los 89 días

## Miniatura
Fondo `#09090b`. Un chip de IA que recibe una nota adhesiva amarilla con la palabra «pista»; a la derecha, en rojo `#e11d2a` y Segoe UI Black, «IA + PISTA = X» (tres palabras más el signo, sin repetir los títulos). Logo ATLAS abajo a la derecha.

---

## VIDEO LARGO (16:9, ≈ 5:15 min)
Ritmo visual: algo cambia en pantalla cada 2-3 s; los pasos de cada boceto van en orden. Fórmula del canal: b-roll real detrás, Ken Burns alterno, subtítulos karaoke, whoosh + flash en cada corte.

**[0:00 — Gancho]** (pantalla: nota adhesiva «filtro manual» entrando al modelo)
Si a la inteligencia artificial le cuesta aprender sola cuándo salir del mercado, ¿y si le doy una pista? Le pasé como dato extra el filtro manual, compensé que los crashes son raros y puse un umbral que se adapta. Resultado: menos 7.0%, un Sharpe, el retorno por unidad de riesgo, de menos 1.34 y la cuenta cerrada a los 89 días.
> Boceto: el chip de IA recibe la nota «filtro manual»; contadores «−7.0%», «−1.34» y «89 días»; golpe de bass cuando la curva real se corta.

**[0:26 — Dónde encaja en la serie]** (pantalla: mapa de la serie, #15 al #30)
Es la segunda versión del experimento 23. Allí el modelo, XGBoost, no llegó a actuar y no se pudo medir. Aquí se le ayuda de tres formas para ver si el problema era el ajuste. Spoiler: no lo era.
> Boceto: línea de la serie con el #23 y el #24 unidos por una flecha «v2»; el #24 en primer plano.

**[0:43 — Tres cambios]** (pantalla: tres mejoras al modelo)
Tres cambios. Uno: el filtro manual entra como un dato más; a eso se le llama aprendizaje residual, porque el modelo aprende lo que le falta a la regla. Dos: como los días malos son pocos, se les da más peso, lo que se llama balancear las clases. Tres: el umbral se adapta, usando el percentil 75 de su propia probabilidad de los últimos 500 días; y cuando no hay señal, el bot queda fuera del mercado.
> Boceto: tres tarjetas animadas: «filtro manual como dato», «días malos con más peso» (balanza), «umbral = percentil 75 de 500 días» (curva de probabilidad con una línea que sube y baja).

**[1:16 — Por qué un umbral que se adapta]** (pantalla: umbral fijo contra umbral móvil)
Un umbral fijo supone que la probabilidad del modelo significa lo mismo todo el tiempo. Uno adaptativo compara cada día con los últimos 500: pregunta si hoy está entre los días más preocupantes de su propia historia reciente. Suena más inteligente, y por eso se probó; el resultado muestra que no cambió el desenlace.
> Boceto: dos gráficos de probabilidad con una línea de umbral: en el primero es recta; en el segundo sube y baja con la historia de los últimos 500 días.

**[1:39 — Cómo se probó]** (pantalla: checklist de filtros)
Con walk-forward: 750 días de calentamiento, reentrenamiento cada 126 días y embargo de 10, con datos del día anterior. Apalancamiento ×3 y reglas de prop firm, la empresa que presta la cuenta y la cierra si pierdes demasiado, en 2014 a 2024 y en 2007 a 2013. La vara a superar: el filtro manual, con Sharpe de 1.23 usando el cierre del mismo día. Y ese filtro, usado como dato, hereda esa información del mismo día. No se descuentan costos.
> Boceto: checklist de `exp_details.json`: «sin mirar el futuro: pasa», «Sharpe > 1.23: FALLA», «filtro manual con cierre del mismo día: heredado», «costos: no aplicado».

**[2:12 — Resultados]** (pantalla: tarjetas de KPI)
En 2014 a 2024: retorno de menos 7.0%, Sharpe de menos 1.34 y caída máxima de menos 11.3%. La cuenta toca el límite a los 89 días, el 15 de enero de 2015. Frente al 1.23 del filtro manual, el modelo con la pista queda muy lejos.
> Boceto: tarjetas con tick (−7.0% · −1.34 · −11.3% · 89 días); barra «manual 1.23» frente a la roja del modelo; la curva real se corta el 2015-01-15.

**[2:33 — Comparado con el experimento 23]** (pantalla: dos barras)
Comparado con la primera versión: el #23 cerró a los 81 días con un Sharpe de menos 2.31; este cierra a los 89 días con menos 1.34. Es una nota menos mala, no un desenlace distinto: en los dos casos, la cuenta se cierra a comienzos de enero de 2015.
> Boceto: dos barras rojas, «#23: −2.31 · 81 días» y «#24: −1.34 · 89 días», con el rótulo «menos mala, igual de cerrada».

**[2:54 — Qué miró el modelo]** (pantalla: ranking de variables)
Los datos que más pesaron fueron la curva de tasas, el VIX, el momentum del dólar a 60 días y el VIX frente a su media de 60 días. Es decir, el modelo se apoyó en datos macro del mismo tipo que usa el filtro manual.
> Boceto: ranking horizontal con cuatro barras (curva de tasas, VIX, momentum del dólar 60 d, VIX vs media 60 d) animándose de arriba abajo.

**[3:14 — El periodo 2007-2013: ojo]** (pantalla: eje de tiempo casi vacío)
En 2007 a 2013, el Sharpe es de 0.21 y sobrevive. Pero cuidado: el modelo estuvo fuera del mercado el 85% de los días, sin señal hasta el 21 de junio de 2012. Ese 0.21 sale de unos 350 días operados y no pone a prueba al modelo en la crisis de 2008.
> Boceto: eje 2007–2013 casi todo en gris «fuera del mercado 85%» y un tramo corto en verde desde 2012-06-21; rótulo «0.21 sale de ~350 días».

**[3:37 — Por qué no cambió el desenlace]** (pantalla: texto)
Ajustar el modelo, con clases balanceadas y umbral adaptativo, no cambió el desenlace. El problema no era el ajuste fino, sino la naturaleza del fenómeno: los crashes son pocos, y cada uno es distinto. Eso refuerza lo que dejó el experimento 23.
> Boceto: dos intentos (v1 y v2) como dos puntos rojos en el mismo gráfico de Sharpe; texto «el problema no era el ajuste».

**[3:55 — Qué haría falta para creerle]** (pantalla: tres candados)
Para tomarse en serio a un modelo así haría falta un periodo de prueba largo después del calentamiento, costos y una pista que no use el cierre del mismo día. Con la señal de ayer, el filtro manual da un Sharpe de menos 0.17, como se mide en el experimento 27.
> Boceto: tres candados cerrados («periodo largo tras el calentamiento», «costos», «pista sin cierre del mismo día») y la cifra «−0.17».

**[4:17 — Con tu capital]** (pantalla: tarjeta de capital $10,000 / $100,000)
Con 10,000 dólares, la curva termina en menos $693; con 100,000, en menos $6,929. Comprando y esperando en esas fechas: menos $637 y menos $6,370. Con tu capital verías esa cuenta cerrada, no una inversión que sigue corriendo. La línea hipotética «Sin reglas de prop firm» muestra cómo habría seguido sin el corte, pero en la realidad la cuenta se cierra ese día.
> Boceto: tarjeta «Con tu capital» del sitio con el selector; curva roja cortada el 15 de enero de 2015 y curva punteada gris «hipotética».

**[4:44 — Conclusión]** (pantalla: texto grande)
Veredicto: no sirvió. En 2014 a 2024 da un Sharpe de menos 1.34 y menos 7.0%, frente a 1.23 del filtro manual, y la cuenta toca el límite de pérdida. Ni con una pista, ni con clases balanceadas, ni con un umbral adaptativo.
> Boceto: sello rojo «NO SIRVIÓ»; frase final «El trading no se promete: se prueba».

**[5:02 — Cierre]** (pantalla: logo y enlace)
En el siguiente video, la IA decide solo el tamaño de la apuesta: el experimento 25. Todos los datos en atlas-lab-one.vercel.app, experimento 24. Contenido educativo, no es asesoría financiera.
> Boceto: pantalla final con enlace y logo ATLAS; fondo de velas animadas con opacidad 0.12.

---

## SHORT (9:16, ≈ 45 s)
Fórmula visual: b-roll Pexels vertical + overlay oscuro 0.6, Ken Burns alternando in/out, subtítulos karaoke en MAYÚSCULAS con las cifras en rojo, whoosh + flash en cada corte, golpe de bass + sacudida solo en el 0-3 s y en el corte de la cuenta; ticker arriba, viñeta y velas con opacidad ≤ 0.12.

**[0-3 s]** "IA con pista: menos 7.0% en 89 días."
> Boceto: chip de IA con nota adhesiva «pista»; texto gigante «−7.0%» y contador «89 días».
**[3-7 s]** "Segundo intento con XGBoost: le di el filtro manual como una pista más."
> Boceto: la nota «filtro manual» entra al chip de IA con un whoosh.
**[7-12 s]** "Compensé que los crashes son raros y puse un umbral que se adapta."
> Boceto: balanza que se inclina hacia los días malos; línea de umbral subiendo y bajando.
**[12-18 s]** "Resultado de 2014 a 2024: Sharpe menos 1.34, menos 7.0%, cuenta cerrada el 15 de enero de 2015."
> Boceto: la curva real cayendo hasta el corte; tarjetas «−1.34» y «−7.0%»; golpe de bass en la X.
**[18-22 s]** "El filtro manual, con el cierre del mismo día, da Sharpe 1.23."
> Boceto: barra verde «1.23» frente a la roja «−1.34».
**[22-30 s]** "En 2007 a 2013, el modelo estuvo fuera del mercado el 85% de los días: ese resultado no prueba nada sobre 2008."
> Boceto: eje 2007–2013 casi todo gris con el rótulo «85% fuera».
**[30-34 s]** "Ajustar el modelo no cambió el desenlace: el problema es la naturaleza del fenómeno."
> Boceto: dos intentos (v1 y v2) como dos puntos rojos; sello «NO SIRVIÓ».
**[34-41 s]** "El video completo está en el canal. No es asesoría financiera. El trading no se promete: se prueba."
> Boceto: frase de marca en blanco; logo ATLAS.
**[41-45 s]** "Y cuando alguien te diga que su IA ya tiene la pista:"
> Boceto: nota adhesiva con interrogación; corte directo al inicio (loop).

## Descripción (YouTube)
Segunda versión del régimen supervisado: XGBoost con el filtro manual como dato, clases balanceadas, umbral adaptativo (percentil 75 de los últimos 500 días) y walk-forward.
En 2014–2024: Sharpe −1.34 y −7.0%, con la cuenta cerrada a los 89 días (el filtro manual daba 1.23 con el cierre del mismo día).
En 2007–2013 estuvo fuera del mercado el 85% de los días.
Todos los datos: https://atlas-lab-one.vercel.app (experimento #24)
Contenido educativo. No es asesoría financiera ni recomendación de inversión.

Capítulos: 0:00 Gancho · 0:26 Dónde encaja en la serie · 0:43 Tres cambios · 1:16 Por qué un umbral que se adapta · 1:39 Cómo se probó · 2:12 Resultados · 2:33 Comparado con el experimento 23 · 2:54 Qué miró el modelo · 3:14 El periodo 2007-2013: ojo · 3:37 Por qué no cambió el desenlace · 3:55 Qué haría falta para creerle · 4:17 Con tu capital · 4:44 Conclusión · 5:02 Cierre

Etiquetas: XGBoost, aprendizaje residual, machine learning, balanceo de clases, walk-forward, inteligencia artificial, bot de trading, backtest, prop firm, trading con datos, ATLAS Lab, trading algorítmico

## Rúbrica (autoevaluación del Short)
hook_0_3s 4 · ritmo 4 · promesa_cumplida 5 · potencial_loop 4 · claridad_no_traders 4 · honestidad_atlas 5 · audio 4 · cta 4 → promedio 4.25 (aprobado: ≥ 4.0, hook ≥ 4, honestidad 5)
Notas: el gancho da dos cifras y una imagen clara (la pista); la honestidad es 5 porque el Short aclara que el 2007-2013 no prueba al modelo (85% fuera del mercado) y que la vara de 1.23 usa el cierre del mismo día.

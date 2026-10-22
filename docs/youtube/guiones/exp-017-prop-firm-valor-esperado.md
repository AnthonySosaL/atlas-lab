# Experimento #17 — Dinero real con filtro macro (valor esperado de un reto de prop firm)

Estado del guion: **BORRADOR — pendiente de aprobación**
Estado del experimento: **murió** (veredicto del sitio: «No sirvió») · Serie G — Construyendo un bot (y por qué murió); enlaza con la Serie E (negocio de fondeo)
Datos usados: `experiments.json` (v=17: kpis, metrics, params, verdict, analysis, capital), `exp_details.json` (clave `…-v17`: algo, filters), `series/20260608_164506_dinero-real-con-filtro-macro-v17.json` (curva de la cartera con filtro y curva «Sin estrategia»), tabla «Con tu capital» (archivo de capital en `docs/youtube/`). Relacionados: #15, #16 (el filtro) y #27 (la señal de ayer).

## Títulos
1. Simulé 4,000 retos de prop firm con mi bot: −$429 por intento
2. ¿Vale la pena pagar $500 por un reto de fondeo? Lo simulé 4,000 veces
3. Si pasas el reto cobras casi seguro (99%). El problema: pasarlo (0.6%)

## Miniatura
Fondo `#09090b`. Un calendario con «30 DÍAS» y un reloj de arena; al centro, en rojo `#e11d2a` y Segoe UI Black, «0.6%» enorme y debajo en blanco «DE PASAR» (tres palabras en total, sin repetir los títulos). Un billete de $500 tachado en una esquina. Logo ATLAS abajo a la derecha.

---

## VIDEO LARGO (16:9, ≈ 6:16 min)
Ritmo visual: algo cambia en pantalla cada 2-3 s; los pasos de cada boceto van en orden. Fórmula del canal: b-roll real detrás, Ken Burns alterno, subtítulos karaoke, whoosh + flash en cada corte.

**[0:00 — Gancho]** (pantalla: contador de intentos y dos cifras en rojo)
Simulé 4,000 intentos de pasar un reto de prop firm —una empresa que te presta una cuenta si superas una prueba— con mi bot. Cada intento cuesta 500 dólares. En promedio, el resultado fue una pérdida de 429 dólares por intento. Y lo más raro: el filtro de pánico, que debía proteger al bot, empeoró el negocio. Sin filtro, la pérdida promedio era de 127 dólares. Te muestro por qué.
> Boceto: contador 0 → 4,000 con cuadritos que se vuelven rojos; al final dos barras, «sin filtro −$127» y «con filtro −$429»; golpe de bass en la segunda.

**[0:30 — Dónde encaja en la serie]** (pantalla: mapa de la serie, #15 al #30)
Este experimento hereda el filtro macro de los experimentos 15 y 16 y lo conecta con la pregunta que más le interesa a quien busca un fondeo: cuánto dinero esperas ganar o perder. Más adelante, el experimento 27 prueba si ese filtro se puede ejecutar con la señal de ayer.
> Boceto: línea con los puntos #15 al #30; el #17 se ilumina y une con una flecha al #16 (filtro) y al #27 (señal de ayer); texto «de la curva al negocio».

**[0:51 — Cómo funciona el negocio de las prop firms]** (pantalla: línea de tiempo del reto)
Una prop firm te vende un reto. Pagas una cuota, aquí 500 dólares, y tienes 30 días para ganar 10% sin perder más de 10% del capital inicial ni más de 5% en un solo día. Si pasas, te dan una cuenta fondeada, con dinero de la empresa, donde ya puedes cobrar pagos. Si fallas, pierdes la cuota. La pregunta es simple: ¿cuánto ganas o pierdes, en promedio, por cada intento?
> Boceto: línea de tiempo de 30 días con una meta «+10%» y dos muros rojos «−10%» y «−5% / día»; flecha verde hacia «cuenta fondeada» y flecha roja hacia «cuota perdida».

**[1:21 — El valor esperado en 30 segundos]** (pantalla: dos monedas y una balanza)
Eso se llama valor esperado: el resultado promedio si repitieras el negocio miles de veces. Se calcula con la probabilidad de pasar el reto y con lo que cobrarías si pasas, menos la cuota. Para estimarlo tomé los retornos diarios reales del bot entre 2014 y 2024, con y sin el filtro macro, y mezclé bloques de días para simular 4,000 retos: el reto a ×3 con límite de 30 días y la cuenta fondeada a ×2.
> Boceto: fórmula animada «P(pasar) × cobro − cuota»; bloques de la curva real de `series/…v17.json` barajándose como cartas; texto «4,000 simulaciones».

**[1:53 — Cómo se simulan 4,000 retos]** (pantalla: bloques de días que se barajan)
Con una sola historia real no se pueden simular miles de intentos, así que se barajan trozos de esa historia. Se toman bloques de días consecutivos, para conservar las rachas y las calmas, y se pegan en un orden distinto. Así sale una versión alternativa de los diez años. Se repite 4,000 veces, y en cada una se mira si el reto se pasa o no dentro del plazo.
> Boceto: la curva real cortada en bloques de colores que se reordenan; cada reordenación produce una curva nueva con un semáforo (pasa o no pasa) y un contador hasta 4,000.

**[2:22 — Cómo se probó]** (pantalla: checklist de filtros)
El criterio del experimento: el valor esperado debía ser positivo y mayor que el de operar sin filtro. Tres aclaraciones: no se aplicó una prueba fuera de muestra, es decir, con datos que el bot nunca vio, los retornos del bot salen del motor del experimento 16, que no descuenta costos de mercado, y el filtro hereda la señal del cierre del mismo día, información que un bot real no tendría.
> Boceto: checklist tomada de `exp_details.json`: «Valor esperado > 0 y > sin filtro: FALLA», «Señal rezagada 1 día: FALLA» (sello rojo), «Fuera de muestra: no aplicado».

**[2:52 — Resultados]** (pantalla: tarjetas de KPI)
Con filtro, la probabilidad de pasar el reto en 30 días es de 0.6%. El valor esperado: menos 429 dólares por intento. Sin filtro: menos 127. En la fase fondeada, el cobro esperado es de 12,322 dólares, y la probabilidad de cobrar al menos un pago es de 99%.
> Boceto: cuatro tarjetas con tick (0.6% · −$429 · −$127 · $12,322 · 99%); las dos barras de valor esperado en rojo, la de −$429 más larga.

**[3:13 — La paradoja]** (pantalla: embudo)
Fíjate en el contraste. Si logras pasar el reto, es casi seguro que cobras: 99%, y el cobro esperado es de 12,322 dólares. El problema no es cobrar, es llegar. Con 0.6% de probabilidad de pasar, casi nadie llega.
> Boceto: embudo estrecho: arriba «intentos», en el cuello «0.6% pasa», abajo «99% cobra al menos un pago»; el cuello brilla en rojo.

**[3:30 — El plazo manda]** (pantalla: barras de probabilidad)
¿Por qué tan bajo? Porque el filtro pasa mucho tiempo fuera del mercado, y fuera del mercado no se ganan 10%. Con ×3 y 30 días: 0.6%. Con ×4 y 30 días: 3.3%. Con ×3 y 60 días: 6%. Y sin límite de tiempo, la probabilidad sube a alrededor de 89% con ×3 y 82% con ×4. El factor decisivo del negocio no es el filtro: es el plazo.
> Boceto: barras horizontales que crecen en orden (0.6% · 3.3% · 6% · ≈89% · 82%) con el reloj de 30 días a un lado; las dos últimas en gris con el sello «sin plazo».

**[4:00 — La advertencia]** (pantalla: aviso ámbar)
Y cuidado con esas cifras sin límite de tiempo: usan el cierre del mismo día, información que un bot real no tiene al decidir. Por eso no son una conclusión operativa. Con la señal de ayer, la base muere, como verás en el experimento 27.
> Boceto: aviso ámbar «información del mismo día» sobre las barras grises; cuadro pequeño con «señal de ayer: ver #27».

**[4:19 — Qué haría falta para creerle]** (pantalla: tres candados)
Para creer estas cifras haría falta que el filtro decidiera con la señal de ayer, que los retornos incluyeran costos y que el resultado se repitiera fuera de muestra. Ninguna de las tres cosas se cumple aquí. Por eso lo útil de este experimento no es la cifra exacta, sino la forma: en un reto con plazo, un filtro que te saca del mercado juega en contra.
> Boceto: tres candados que se abren uno por uno y quedan cerrados en rojo («señal de ayer», «costos», «fuera de muestra»); frase «la forma importa más que la cifra».

**[4:47 — Con tu capital]** (pantalla: tarjeta de capital $10,000 / $100,000)
La tarjeta del sitio muestra la curva de la cartera con filtro: con 10,000 dólares, +$5,593; con 100,000, +$55,935. Sin estrategia, comprando y esperando, serían +$5,904 y +$59,039. Pero esa curva no mide el negocio de fondeo: el negocio da menos 429 dólares por intento, y además depende de información del mismo día.
> Boceto: tarjeta «Con tu capital» del sitio con el selector $10,000 / $100,000; curva de la estrategia frente a la gris «Sin estrategia»; aviso ámbar.

**[5:10 — Lo que sí aporta este experimento]** (pantalla: regla práctica)
Aunque la cifra no sea operativa, deja una regla útil para cualquier reto: calcula primero el plazo. El mismo bot pasa de 0.6% a 6% de probabilidad al duplicar el plazo, de 30 a 60 días. Cuando un reto tiene un límite de tiempo, la estrategia que más te saca del mercado es la que menos tiempo te deja para llegar.
> Boceto: dos relojes, «30 días: 0.6%» y «60 días: 6%», con una flecha entre ambos; texto «primero calcula el plazo».

**[5:36 — Conclusión]** (pantalla: texto grande)
No sirvió. El valor esperado fue de −429 dólares por intento, peor que los −127 sin filtro. Un filtro que te saca del mercado no llega a 10% en 30 días: en el negocio de los retos, el tiempo es parte del precio. Y eso, antes de preguntar si el bot puede operar con la señal de ayer.
> Boceto: sello rojo «NO SIRVIÓ» sobre las barras; luego la frase «El trading no se promete: se prueba».

**[6:01 — Cierre]** (pantalla: logo y enlace)
En el siguiente video, qué pasa si el bot rota a oro y yen en lugar de quedarse en efectivo: el experimento 18. Todos los datos en atlas-lab-one.vercel.app, experimento 17. Contenido educativo, no es asesoría financiera.
> Boceto: pantalla final con enlace y logo ATLAS; fondo de velas animadas con opacidad 0.12.

---

## SHORT (9:16, ≈ 43 s)
Fórmula visual: b-roll Pexels vertical + overlay oscuro 0.6, Ken Burns alternando in/out, subtítulos karaoke en MAYÚSCULAS con las cifras en rojo, whoosh + flash en cada corte, golpe de bass + sacudida solo en el 0-3 s y en el «0.6%»; ticker arriba, viñeta y velas con opacidad ≤ 0.12.

**[0-2 s]** "500 dólares por intento. Pérdida promedio: 429."
> Boceto: billete de $500 que se rompe; texto gigante «−$429» en rojo con sacudida.
**[2-8 s]** "Es un reto de prop firm: 30 días para ganar 10% sin romper los límites de pérdida."
> Boceto: calendario de 30 días con la meta «+10%» y dos muros rojos.
**[8-13 s]** "Simulé 4,000 intentos con los retornos reales de mi bot, de 2014 a 2024."
> Boceto: contador 0 → 4,000 con cuadritos que se vuelven rojos.
**[13-15 s]** "Probabilidad de pasar el reto: 0.6%."
> Boceto: «0.6%» enorme con golpe de bass; un solo cuadrito verde entre miles rojos.
**[15-22 s]** "Si pasas, cobras en promedio 12,322 dólares, y el 99% cobra al menos un pago. El problema es llegar."
> Boceto: tarjeta «$12,322» y «99%»; flecha hacia el cuello del embudo.
**[22-31 s]** "El filtro de pánico pasa tanto tiempo fuera del mercado que no alcanza el 10% en 30 días. Sin filtro, la pérdida promedio era de 127."
> Boceto: curva plana (fuera del mercado) frente a la meta +10%; dos barras, −$127 y −$429.
**[31-37 s]** "Con 60 días, la probabilidad sube a 6%. El plazo manda. El trading no se promete: se prueba."
> Boceto: reloj 30 → 60 días y la barra «6%» creciendo; frase de marca.
**[37-43 s]** "El video completo está en el canal. No es asesoría financiera. Antes de pagar un reto, recuerda:"
> Boceto: logo ATLAS; corte directo al inicio (loop).

## Descripción (YouTube)
Simulé 4,000 retos de prop firm (30 días, cuota de $500) con los retornos del bot ATLAS entre 2014 y 2024: con filtro macro la probabilidad de pasar fue de 0.6% y el valor esperado, −$429 por intento (sin filtro, −$127).
Si se pasa, el cobro esperado es de $12,322, pero el plazo es el factor decisivo.
Todos los datos: https://atlas-lab-one.vercel.app (experimento #17)
Contenido educativo. No es asesoría financiera ni recomendación de inversión.

Capítulos: 0:00 Gancho · 0:30 Dónde encaja en la serie · 0:51 Cómo funciona el negocio de las prop firms · 1:21 El valor esperado en 30 segundos · 1:53 Cómo se simulan 4,000 retos · 2:22 Cómo se probó · 2:52 Resultados · 3:13 La paradoja · 3:30 El plazo manda · 4:00 La advertencia · 4:19 Qué haría falta para creerle · 4:47 Con tu capital · 5:10 Lo que sí aporta este experimento · 5:36 Conclusión · 6:01 Cierre

Etiquetas: prop firm, reto de fondeo, valor esperado, simulación Monte Carlo, bot de trading, trading con datos, backtest, probabilidad de pasar, cuenta fondeada, riesgo, ATLAS Lab, trading algorítmico

## Rúbrica (autoevaluación del Short)
hook_0_3s 4 · ritmo 4 · promesa_cumplida 5 · potencial_loop 4 · claridad_no_traders 4 · honestidad_atlas 5 · audio 4 · cta 4 → promedio 4.25 (aprobado: ≥ 4.0, hook ≥ 4, honestidad 5)
Notas: el gancho pone dinero en juego (500 y 429); la honestidad es 5 porque el veredicto («no sirvió») y el valor esperado se dicen tal cual, y la advertencia de la señal del mismo día queda en el video largo y en la descripción.

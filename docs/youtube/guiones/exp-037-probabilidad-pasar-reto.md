# Experimento #37 — Probabilidad de aprobar (versión ejecutable)

Estado del guion: **BORRADOR — pendiente de aprobación**
Estado del experimento: **PARCIAL** (técnicamente posible pasar un reto, pero sin ventaja detrás: sería suerte)
Serie: **G — Construyendo un bot (y por qué murió)**
Datos usados: `experiments.json` (v=37: analysis, verdict, notes, metrics, kpis, params_view, capital) · `exp_details.json` (algo, filters) · `series/20260610_140954_p-pasar-ejecutable-v37.json` (retornos de la cartera ×2 con señales de ayer, 2007–2024, que alimentan la simulación) · fila #37 de la tabla «Con tu capital» (`docs/youtube/`).

## Títulos (opciones)
1. ¿Pasa un reto de fondeo una estrategia sin ventaja? 37.5%
2. 4,000 retos de fondeo simulados: 6.4% pasan en 252 días
3. 37.5% de pasar el reto con Sharpe −0.03: así se ve la suerte

## Miniatura
Fondo #09090b. Texto gigante blanco "37.5%"; debajo, en rojo, "SIN VENTAJA". Elemento visual: un dado cayendo sobre un gráfico de velas. Logo ATLAS en la esquina inferior izquierda. (No repite los títulos.)

---

## VIDEO LARGO (16:9, ≈ 5:37 · experimento corto: rango de 4 a 6 min)

**[0:00 — Gancho]** (pantalla — BOCETO: contador que sube hasta «37.5%» con el rótulo «sin límite de tiempo»; se parte la pantalla y aparece «6.4% · plazo de 252 días»; fondo de dado girando)
37.5%. Esa es la probabilidad de que un bot sin ninguna ventaja pase un reto de fondeo, si no hay límite de tiempo. Con un plazo de 252 días de operación, baja a 6.4%. Simulé 4,000 retos con los retornos reales de mi bot, y el resultado es una lección sobre la suerte.

**[0:24 — Presentación]** (pantalla — BOCETO: rótulo «Experimento #37 · Probabilidad de aprobar (versión ejecutable)» sobre velas con opacidad 0.12; logo ATLAS)
Este es el experimento #37 de ATLAS Lab: Probabilidad de aprobar, versión ejecutable. Todos los resultados están en la página del experimento.

**[0:34 — Cómo funciona un reto]** (pantalla — BOCETO: tarjeta params_view con cuatro reglas animadas: objetivo +10% · caída máxima 10% desde el pico · pérdida diaria 5% · mínimo 4 días; pie: «más estricto que FTMO, que mide el piso sobre el saldo inicial»)
Primero, las reglas. Una empresa de fondeo, una prop firm, te presta una cuenta grande si pasas un reto. El que simulé pide tres cosas: subir 10%, no caer 10% desde el máximo que hayas alcanzado, y no perder más de 5% en un solo día, con un mínimo de 4 días operando. Romper cualquier regla es perder el reto.

**[1:00 — Cómo se simuló]** (pantalla — BOCETO: la curva de series/…v37.json cortada en bloques de 5 días de colores que se barajan y se pegan en una historia nueva; contador de 4,000 historias; chips ×2 · señales de ayer · 2007–2024)
Tomé los retornos diarios del bot en su versión ejecutable, con ×2 y señales de ayer, entre 2007 y 2024. Los corté en bloques de 5 días y los barajé para fabricar 4,000 historias alternativas, un método de remuestreo, de tipo Monte Carlo. Se barajan bloques y no días sueltos para que las rachas de días buenos y malos sigan juntas. En cada historia pregunté lo mismo: ¿toca +10% antes de romper una regla? Probé tres plazos: 252, 504 y 2,000 días de operación, que equivalen a unos 0.8, 1.6 y 6.3 años de calendario.

**[1:40 — Los resultados]** (pantalla — BOCETO: tres barras horizontales que crecen: 6.4% (rojo), 18.7% (naranja), 37.5% (verde); marca de la mediana: «516 días ≈ 1.6 años»)
| Plazo | Probabilidad de pasar |
|---|---|
| 252 días de operación (≈9.5 meses) | 6.4% |
| 504 días | 18.7% |
| Sin límite de tiempo (2,000 días) | 37.5% |
Con un plazo de unos nueve meses y medio, pasa el 6.4%. Con 504 días, el 18.7%. Sin límite de tiempo, el 37.5%, y la mediana de los que pasan tarda 516 días: cerca de 1.6 años.

**[1:57 — Dos formas de medir el piso]** (pantalla — BOCETO: dos gráficos pequeños de una cuenta: uno con el piso que sube con el máximo (caída desde el pico) y otro con un piso fijo sobre el saldo inicial; debajo, las cifras 6.7% · 18.4% · 44.7% y «mediana 594 días ≈ 1.9 años»)
Un detalle de reglamento que cambia las cifras. En mi simulación, el límite de caída se mide desde el máximo que alcance la cuenta: si sube y luego baja 10%, pierdes. Algunas empresas, como FTMO, lo miden sobre el saldo inicial, con un piso fijo. Con ese piso estático las probabilidades son 6.7%, 18.4% y 44.7%, con una mediana de 594 días, unos 1.9 años. Cambian algo las cifras, no la historia: pasar es difícil con plazo y mucho más probable solo si el tiempo no importa.

**[2:34 — ¿Cómo es posible?]** (pantalla — BOCETO: camino aleatorio dibujado muchas veces; algunos tocan la línea de +10% (verde) antes de la de −10% (roja); texto: «Sharpe −0.03»)
Aquí está el truco, y es un aviso. Los retornos de este bot no tienen ventaja: su Sharpe, la ganancia por unidad de riesgo, es −0.03. Entonces pasar es cuestión de suerte: un camino al azar puede tocar +10% antes de romper una regla, sobre todo si le das años de intentos. Pero una vez pasado, no habría nada que cobrar, porque el bot no gana.

**[3:03 — Lo que la cifra esconde]** (pantalla — BOCETO: calendario que avanza 1.6 años con un contador de cuotas acumulándose; frase: «los retos tienen plazo»)
Y el 37.5% esconde dos cosas. La primera, el tiempo: la mayoría de los retos tienen plazo, y pagar varios intentos durante más de año y medio se come cualquier ganancia. La segunda, de dónde salen los retornos: la cartera une dos cestas distintas en 2014, siete divisas más oro hasta 2013 y 15 activos desde 2014. Por eso estos retornos sirven para simular el reto, no como el resultado de una cuenta.

**[3:35 — El marcador de filtros]** (pantalla — BOCETO: checklist de exp_details.filters: probabilidad de pasar ✗ · Sharpe combinado 2007–2024 ✗ · batir a comprar y esperar ✗ · Monte Carlo de permutación — · Deflated Sharpe — (experimento 38) · costos completos —)
El tablero de filtros es claro. El criterio de probabilidad no se cumple: 6.4% en 252 días. El Sharpe combinado de 2007 a 2024, −0.03, queda bajo el 0.30 del laboratorio, así que el 37.5% sin límite sale del azar. No bate a comprar y esperar, con −7.1% frente a +68.7%. La prueba Monte Carlo de permutación del laboratorio no es esta: aquí remuestreo bloques para simular el reto. El Deflated Sharpe, la prueba que descuenta la suerte de haber probado muchas ideas, se calcula en el experimento 38, y los costos completos no se aplicaron.

**[4:16 — Con tu capital]** (pantalla — BOCETO: curva real de series/…v37.json: estrategia terminando en −7.1% sobre comprar y esperar en +68.7%; tarjeta «Con tu capital»: −$7,102 contra +$68,723, 2007–2024)
Con $100,000 simulados entre 2007 y 2024, esa cartera ×2 termina en −$7,102. Comprar y esperar la misma cesta: +$68,723. Es una simulación histórica, no una promesa; con $10,000 serían la décima parte. Pasar el reto con esta cartera, entonces, sería haber tenido suerte con una estrategia que, en el periodo completo, termina en negativo.

**[4:40 — Conclusión]** (pantalla — BOCETO: sello «PARCIAL»; KPIs 6.4% · 18.7% · 37.5% · 516 días · −0.03)
Veredicto: parcial. La probabilidad de pasar es solo 6.4% en 252 días; sin límite llega a 37.5%, con una mediana de 1.6 años, pero sin ventaja detrás. Técnicamente posible, prácticamente inviable como fuente de ingresos. En el experimento 39 convierto esto en dinero: cuánto vale cada intento.

**[5:01 — Ficha del experimento #37]** (pantalla — BOCETO: tarjeta de ficha con sello «PARCIAL», cuatro líneas y la URL atlas-lab-one.vercel.app/e/37; logo ATLAS)
Ficha del experimento #37.
Estado: parcial.
Cifra clave: 6.4% de probabilidad de pasar en 252 días, 18.7% en 504 y 37.5% sin límite de tiempo, con una mediana de 516 días.
Filtro que decidió: el Sharpe de menos 0.03, sin ventaja detrás; pasar sería suerte.
Lección: una simulación responde «si el futuro se parece al pasado», no «qué va a pasar».
Revísalo completo en atlas-lab-one.vercel.app/e/37.

**[5:26 — Cierre]** (pantalla — BOCETO: logo ATLAS + URL; dado girando de fondo)
Todos los datos están en atlas-lab-one.vercel.app/e/37. Contenido educativo, no es asesoría financiera. El trading no se promete: se prueba.

---

## SHORT (9:16, ≈ 50 s)
Título del Short: 37.5% de pasar un reto de fondeo… sin ventaja #shorts
Fórmula visual (CLAUDE.md del canal): b-roll vertical real con overlay 0.6, Ken Burns alternado, subtítulos karaoke en MAYÚSCULAS con cifras en rojo, ticker arriba, whoosh + flash en cada corte; golpe (bass + sacudida) solo en 0-3 s y 28-40 s.

**[0-3 s]** "37.5% de pasar un reto de fondeo… sin ninguna ventaja."
- Boceto: b-roll de dados rodando (kb=in); «37.5%» gigante en blanco y «SIN VENTAJA» en rojo; golpe de bass.

**[3-14 s]** "Simulé 4,000 retos con los retornos reales de mi bot. Objetivo: subir 10% sin caer 10% desde el máximo ni perder 5% en un día."
- Boceto: 4,000 curvas finas apareciendo; dos líneas, verde en +10% y roja en −10%.

**[14-28 s]** "Con 252 días de plazo, unos nueve meses y medio: 6.4%. Con 504 días: 18.7%. Sin límite de tiempo: 37.5%, y la mediana de los que pasan tarda 516 días, cerca de 1.6 años."
- Boceto: tres barras que crecen (6.4% → 18.7% → 37.5%) con tick en cada una; calendario que avanza.

**[28-40 s]** "¿Cómo pasa tanto un bot con Sharpe menos 0.03? Por pura suerte: un camino al azar toca el 10% antes de romper una regla. Pero después, no habría nada que cobrar."
- Boceto: un camino aleatorio que roza +10%; rótulo «SHARPE −0.03 = SIN VENTAJA»; sacudida al aparecer el 0.03.

**[40-50 s]** "Técnicamente posible, prácticamente inviable. El video completo está en el canal. Experimento 37 completo en el enlace. No es asesoría financiera. ¿Probabilidad de pasar sin ventaja? La respuesta:"
- Boceto: sello «PARCIAL»; tarjeta «experimento #37 completo en el enlace» y la URL corta; logo ATLAS. Loop: la pregunta final se responde con el gancho «37.5%».

## Descripción (YouTube)
https://atlas-lab-one.vercel.app/e/37?utm_source=youtube&utm_medium=video&utm_campaign=exp037-t1
Ficha del experimento #37 (probabilidad de aprobar, versión ejecutable): parcial · probabilidad de pasar un reto: 6.4% en 252 días, 18.7% en 504 y 37.5% sin límite de tiempo (mediana 516 días); Sharpe −0.03, sin ventaja detrás.
Simulé 4,000 retos de fondeo (objetivo +10%, caída máxima 10% desde el pico, pérdida diaria 5%) con los retornos diarios de mi bot ×2 con señales de ayer. Probabilidad de pasar: 6.4% en 252 días de operación, 18.7% en 504 y 37.5% sin límite de tiempo, con mediana de 1.6 años y un Sharpe de −0.03. Experimento #37, resultado parcial.

Capítulos: 0:00 Gancho · 0:24 Presentación · 0:34 Cómo funciona un reto · 1:00 Cómo se simuló · 1:40 Los resultados · 1:57 Dos formas de medir el piso · 2:34 ¿Cómo es posible? · 3:03 Lo que la cifra esconde · 3:35 El marcador de filtros · 4:16 Con tu capital · 4:40 Conclusión · 5:01 Ficha del experimento #37 · 5:26 Cierre

Contenido educativo. No es asesoría financiera ni recomendación de inversión.

Etiquetas: prop firm, reto de fondeo, FTMO, simulación Monte Carlo, probabilidad, bot de trading, backtest, Sharpe ratio, gestión de riesgo, trading, ATLAS Lab

## Descripción del Short
https://atlas-lab-one.vercel.app/e/37?utm_source=youtube&utm_medium=short&utm_campaign=exp037-t1
Ficha del experimento #37: 4,000 historias alternativas de un bot; 6.4% pasa el reto en 252 días, 37.5% sin límite (Sharpe −0.03). Parcial. Video completo en el canal. Contenido educativo, no es asesoría financiera.

## Rúbrica (autoevaluación — criterios del CLAUDE.md del canal, 1-5)
| hook_0_3s | ritmo | promesa_cumplida | potencial_loop | claridad_no_traders | honestidad_atlas | audio | cta |
|---|---|---|---|---|---|---|---|
| 5 | 4 | 5 | 4 | 4 | 5 | 4 | 4 |

Promedio: **4.38** → cumple el corte (≥ 4.0; hook ≥ 4 y honestidad 5).
Notas: el hook plantea una paradoja (37.5% sin ventaja) y el Short aclara de inmediato la condición «sin límite de tiempo» y el 6.4% con plazo, para no inflar la cifra. Punto débil: remuestreo/Monte Carlo se explica en una frase.

## Otros temas de este experimento
1. Tema 1 (este archivo) — `exp-037-probabilidad-pasar-reto.md` — ¿Pasa un reto de fondeo una estrategia sin ventaja? 37.5%
2. Tema 2 — `exp-037-t2-montecarlo-4000-historias.md` — Monte Carlo, 4,000 historias alternativas
3. Tema 3 — `exp-037-t3-tres-respuestas-misma-estrategia.md` — la misma estrategia, tres respuestas

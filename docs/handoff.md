# Handoff — ATLAS Lab (web + canal de YouTube)

Actualizado: 2026-10-21 (noche). Léelo antes de seguir. El contexto del portafolio, los artículos, AdSense y Search
Console está en el repo `curricula`, en `docs/marketing/handoff.md`.

## Reglas de Anthony
- Responder siempre en **español**.
- No inventar datos: cada número sale de `public/data/*.json` o de re-correr el script original.
- Cambios pequeños, archivos < 200 líneas, compilar antes de cada commit, rama nueva + PR (él mergea).
- **Nunca** mostrar en la web "corrección", "reclasificado" ni "auditoría": todo debe leerse como si
  siempre hubiera sido así.
- Mostrar avances por tandas y **en orden desde el #0/#1**.
- No proponer redes, posts ni videos por iniciativa propia; la estrategia del canal la decide él.
- Nunca subir claves (API de YouTube, tokens) al repo ni pegarlas en el chat.

## Hecho el 2026-10-21

### Pestaña Experimentos (91 experimentos, #0–#90) — publicado
- Cada experimento tiene: nombre limpio en español, **Mercado** y **Periodo** resaltados bajo el título,
  "Lección clave" que empieza por "No sirvió: / Parcial: / Sirvió:" coherente con el estado, análisis,
  algoritmo y filtros en español claro, métricas (`kpis`) y parámetros (`params_view`) legibles.
- Tarjeta **"Con tu capital"** (`src/components/exp-capital-card.tsx`): selector $10k/$100k/$1M →
  "Con la estrategia", "Sin estrategia (comprar y esperar)" y "Peor caída". Usa la primera curva de
  `series/<id>.json` y la curva cuyo nombre contiene "Sin estrategia". Si no hay curva de referencia,
  usa `metrics["Benchmark Return [%]"]`. El aviso ámbar sale de `capital.note` (apalancamiento, curva bruta,
  información del mismo día, cuenta cortada por la prop firm).
- Experimentos sin curva → gráfico de barras con sus propios datos (campo `chart`).
- Orden ascendente por número; sin avisos de reclasificación; #25 = murió.
  Totales vigentes: ver «Revisión final 2026-10-21» (1 sirvió, 61 murieron, 29 parciales o no concluyentes).
- Leyendas "Buy & Hold"/"Benchmark" → "Sin estrategia (comprar y esperar)".
- Campos nuevos en `experiments.json`: `market`, `period`, `kpis`, `params_view`, `capital`, `chart`.
- Roadmap (`public/data/roadmap.json`) reescrito para que no contradiga los estados finales (PR #7).

### Canal de YouTube "ATLAS Lab" (@ATLASLabQuant)
- Creado como cuenta de marca, con logo y banner (`docs/brand/`), descripción, enlace a la web,
  configuración avanzada lista, identidad verificada y funciones avanzadas habilitadas.
- Subida de videos: con el programa de Anthony vía YouTube Data API (OAuth). **Pendiente:** auditoría
  del proyecto de Google Cloud; sin ella, los videos subidos por API quedan privados.
- Plan de series: `docs/youtube/plan-series.md` (fase 1 = pestaña Experimentos, luego Laboratorio,
  luego Forja; cada tema = 1 video largo + 1 Short; un experimento puede dar varios videos).
- Guiones en borrador, pendientes de aprobación: `docs/youtube/guiones/ep01-tiktok-breakout-71.md` (#85)
  y `ep02-34751-estrategias.md` (#81). Actualizar sus cifras con la tarjeta de capital (p. ej. #85 con
  $100,000: −$25,460 frente a +$14,407 sin estrategia).
- Tabla de capital por experimento: `docs/youtube/auditoria-capital.md` (referencia para guiones).
- Voz: pendiente decidir si graba Anthony o la voz del programa.

## Hecho el 2026-10-21 (noche, chat local)
- **Curvas regeneradas** (ver `docs/regenerar-curvas.md`): "Sin estrategia (comprar y esperar)" en 45 experimentos
  (#1–#4 cuadran con `Benchmark Return [%]`); "Sin reglas de prop firm (periodo completo)" en 15 de los 17 que
  reventaron (los controles reproducen exacto la curva cortada). **#18 y #20 no la llevan**: su señal usa el cierre
  del mismo día y estirarla 10 años daría un resultado falso (#18 saldría +1,399%). Curvas nuevas para #28, #29,
  #58 (escenarios de 1 y 6 meses con precios de Dukascopy) y #90 (código original perdido; parámetros
  reconstruidos que reproducen al dólar todas las cifras publicadas). 81 de 91 con curva.
- **#88 probado de verdad** en el Nasdaq 100 (Dukascopy, velas de 30 min, 2012–2026): 0 de 32 formas pasan →
  murió. Script: `atlas-quant-lab/src/exp88_orb_nasdaq.py`.
- **Tarjeta "Con tu capital"**: "sin estrategia" se mide ahora en las mismas fechas que la estrategia (antes, en
  los que reventaron, comparaba 1.5 años contra 10).
- **Cifras exactas**: laboratorio = 34,751 generadas, 33,363 probadas de verdad (1,388 casi nunca operaron), 0
  sobrevivieron (`lab.json` → `tested`, `noop`). "En una noche" → 33,016 en la corrida nocturna. Hallazgos sin cifras
  no reproducibles.
- **Forja forward**: no se publicaba desde el 7-oct (el push fallaba). Publicado y arreglado
  (`D:\ATLAS\srcorward_forja.py` ahora hace `git pull` antes de `push`).

## Revisión final 2026-10-21 (rama `claude/revision-final`)
Hecho: los 91 experimentos se revisaron contra el código y los datos (texto, cifras, curvas y estados, en es/en/pt).
- Totales vigentes: **1 sirvió (#52), 61 murieron, 29 parciales o no concluyentes** (#9–#12 pasan a parcial).
- Señal rezagada 1 día: #35–#40 y #50 se re-ejecutaron sin el supuesto de reacción dentro del día (#36 muere; #50 pasa de
  Sharpe 0.38 a −0.03, Deflated Sharpe 0.010). #42/#43 suman el interés del carry (#43 queda parcial). #52 se mide desde
  el 18-mar-2020 (drawdown −19.2% frente a −40.3% del ×2 fijo). Ajustes de cifras en #55, #57, #64, #72, #78, #80
  (+11.2% anual), #81 (Deflated Sharpe máximo 0.31 con el contador global), #83–#86, #88 y #90.
- #31–#34 conservan el supuesto φ = 0.5 (sin medir) y lo dicen: sin φ, la base ×2 de #33 muere (Sharpe −0.57), el ×2.5 de #34
  también (−0.65) y el ×1.5 de #33 queda en 0.00 / 0.08. Siguen «Parcial» porque con φ = 0.5 sobreviven ambos periodos; si se
  prefiere el criterio estricto, #33 y #34 serían «No sirvió» (los totales pasarían a 63 murieron y 27 parciales).
- `roadmap.json`, `src/lib/i18n.tsx`, los guiones EP01/EP02, `plan-series.md` y la tabla de capital quedaron alineados con las fichas.
Pendiente (código fuera de esta rama, en `D:\ATLAS\src` y `D:\ATLAS\lab`):
1. Copiar a `D:\ATLAS\src` las versiones con años de calendario de `withdrawal_test.py` (#78) e `income_calmar.py` (#80);
   están en `scratchpadevision	rabajo_69_90\`. Hoy el disco sigue con 252 filas por año.
2. Rezagar la señal (`ro[t-1]`, sin la rama φ) en `exp_final50.py` y `exp_phaseB2_35_36.py` (y `exp_phaseC_37_39.py`), para que el
   script del repo reproduzca lo publicado en #35–#40 y #50.
3. El motor del laboratorio guarda el Deflated Sharpe por familia; los publicados en #81 son el recálculo con el contador global
   (N = 33,363). Regenerar `lab.json` para que el campo `dsr` de cada ítem coincida.
4. `lab/runner.py` debe exportar `tested` y `noop` (ya estaba pendiente).

## Pendiente (en este orden)
1. #30: sin curva (su configuración exacta no se conserva). `lab/runner.py` debe exportar `tested` y `noop` en `lab.json`.
2. Aprobar los guiones EP01/EP02 y luego producir: gráficos con datos reales, miniatura, montaje (ffmpeg),
   subida en privado y revisión.
3. Pestañas **Laboratorio** y **Forja**: mismo tratamiento que Experimentos (todavía dicen "Buy&Hold").
4. Auditoría de la API de YouTube en Google Cloud.

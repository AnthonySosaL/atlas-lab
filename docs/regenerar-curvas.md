# Regenerar curvas de capital (para correr en la PC con los datos)

Esto NO se puede hacer en la nube: necesita los datos de `D:\ATLAS\data` y el código de investigación
(`atlas-quant-lab` para #0–#50; `lab/engine.py` para #51 en adelante). Ningún número de la web se
inventa: cada curva nueva sale de re-correr el script original del experimento.

## Formato de salida (lo que lee la web)
Cada experimento tiene `public/data/series/<id>.json` = lista de curvas `{ "name", "x": [fechas ISO], "y": [capital] }`.
- La **primera** curva es la de la estrategia (la usa la tarjeta "Con tu capital").
- Añadir curvas al final, con estos nombres exactos:
  - `Sin estrategia (comprar y esperar)` → mismo mercado, mismas fechas y mismo capital inicial.
  - `Sin reglas de prop firm (periodo completo)` → la estrategia sin el corte por drawdown/pérdida diaria.
- Si un experimento no tenía archivo, crearlo y poner `"has_equity": true` en `experiments.json`.
- Mismo capital inicial que la curva original (10,000 o 100,000).
- No tocar textos: si una curva nueva cambia una cifra citada, avisar antes de publicar.

## 1. Curva completa de los que reventaron (17)
En todos: crear el gestor de riesgo con `RiskManager(daily=1.0, max_dd=1.0)` (`bot/risk.py`).
Quitar solo el `if not rm.alive: break` no basta, porque con `alive=False` la equity deja de moverse.

| # | Script | Periodo |
|---|---|---|
| 13 | `bot/run_paper.py` con apalancamiento fijo x2 (el script original no se conserva) | 2019–2024 |
| 14 | `bot/run_paper.py` (`run()`, vol-targeting) | 2019–2024 |
| 18 | `src/exp_variants18.py`, variante "Rotacion defensiva oro+yen" | 2014–2024 |
| 20 | `src/exp_variants18.py`, variante "Trend long-short filtrado" | 2014–2024 |
| 22 | `src/exp_ml22_hmm.py` | 2014–2024 |
| 23 | `src/exp_ml23_supervised.py`, variante "ML p>0.5" | 2014–2024 |
| 24 | `src/exp_ml24_residual.py`, variante "ML v2" | 2014–2024 |
| 27 | `src/exp_lag27_final.py`, variante "reentry lag1 (0.9/x2)" | 2014–2024 |
| 28 | `src/exp_phaseA_28_30.py` (x2/x3/x4, kill-switch −3%) — guardar curva | 2014–2024 y 2007–2013 |
| 29 | `src/exp_phaseA_28_30.py` (kill-switch −2% y −2.5%, x2/x3) — guardar curva | 2014–2024 y 2007–2013 |
| 42 | `src/exp_carry_42_43.py`, "carry puro" x2 | 2014–2024 |
| 43 | `src/exp_carry_42_43.py`, "carry∧trend+filtro" x2 | 2014–2024 |
| 45 | `src/exp_cot_44_45.py` | 2014–2024 |
| 46 | `src/exp_quant_46_49.py`, #46 pairs | 2014–2024 |
| 47 | `src/exp_quant_46_49.py`, #47 stat-arb PCA | 2014–2024 |
| 48 | `src/exp_quant_46_49.py`, #48 momentum transversal | 2014–2024 |
| 49 | `src/exp_quant_46_49.py`, #49 turn-of-month | 2014–2024 |

## 2. Añadir "Sin estrategia (comprar y esperar)" (45 experimentos)
#1, 2, 3, 4, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 31, 32,
33, 34, 35, 36, 37, 38, 39, 40, 42, 43, 45, 46, 47, 48, 49, 50, 52, 70.
Comprar al inicio el mismo mercado/cesta del experimento (pesos iguales si es cesta, sin apalancamiento)
y mantener hasta el final de la curva. En los que reventaron, usar el periodo completo.

## 3. Curva para los que no tienen (15)
#28, 29, 30 (re-correr y guardar curva) · #58 (simulación del bot a 2x por periodos) ·
#90 (índices 2012–2024: curvas de comprar y esperar, tendencia y setups de TikTok).
#41 y #44 son descargas de datos y #54, #55, #56, #68, #81, #82, #87, #88 miden otra cosa
(R², acierto de dirección, estadística de calendario, embudo de filtros, simulación de desafíos): no
generan una cartera, se quedan con su gráfico de barras salvo que el script guarde una.

## 4. Antes de publicar
`npx tsc --noEmit`, `npm run build`, abrir 3–4 experimentos en local y comprobar que la tarjeta
"Con tu capital" y la leyenda muestran las curvas nuevas.

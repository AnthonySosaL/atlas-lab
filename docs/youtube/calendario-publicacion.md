# Calendario de publicación — canal ATLAS Lab (@ATLASLabQuant)

Material: **291 temas** (91 experimentos) → cada tema = **1 video largo + 1 Short** = **582 piezas**.
Zona horaria de referencia: **Ecuador (UTC−5)** = Colombia y Perú misma hora · México −1 h · Argentina y Chile +2 h · España +7 h.

## Ritmo
| | Cuántos | Cuándo (hora Ecuador) | Por qué |
|---|---|---|---|
| **Tema completo** | **1 por día** | **Todos los días a las 18:00: el largo y su Short juntos** | Hora de salida del trabajo en LATAM (México 17:00, Argentina 20:00). El Short sale con su largo y lo empuja ("video completo en el canal"). |
| Total | **14 piezas por semana** | | 2 subidas al día por la API, después de las tandas de los otros canales (00:05 y 06:30). |

**Cuánto dura el material:** 291 temas, uno por día ≈ **42 semanas (≈ 10 meses)**: del 27-oct-2026 al 13-ago-2027. Después vienen las fases 2 (Laboratorio) y 3 (Forja) de `plan-series.md`.
**Revisión a las 4 semanas** con los datos de `medir-trafico.md`: si los largos retienen poco, acortarlos a 4–6 min; si el ritmo diario no se puede sostener, pasar a 5 temas por semana.

## Inicio
- **Video 0, la introducción del canal:** publicada el lunes 26-oct-2026 (largo y Short).
- **Serie: martes 27-oct-2026** con el #88 T1 (largo y Short publicados a las 21:00). Desde el miércoles 28-oct, un tema por día a las 18:00.
- Cada tema se manda por Telegram (largo y Short juntos) para su aprobación antes de la hora de salida.

## Orden de publicación
1. **27-oct al 28-nov: Serie A — "Probé la estrategia de TikTok"** (10 experimentos, 33 temas). Es lo más buscado y la mejor puerta de entrada. Empieza por #88 (ORB del Nasdaq), #85 (71% de aciertos) y #90 (en índices).
2. **29-nov al 6-dic: Serie C — el laboratorio** (#81 y #82, 8 temas): "33,363 estrategias, 0 sobrevivieron".
3. **Desde el 7-dic, rotación proporcional**: cada vez sale un experimento de la serie que lleva menos porcentaje publicado. Las series son **B** (famosas), **D** (machine learning), **E** (riesgo), **F** (anomalías) y **G** (bot). Así todas duran hasta el final (agosto de 2027) y nunca salen más de 3 experimentos del bot seguidos. Dentro de cada experimento, los temas van seguidos (T1, T2, T3…) para que formen una mini-serie. Fecha por fecha: `calendario-completo.md` (lo genera `D:\canal_atlas\tools\calendario_completo.py`).
4. Uniones recomendadas del índice: #6+#7, #9+#10, #41→#42, #44→#45 se publican juntos o seguidos.

## Primera semana
| Fecha | Hora | Tema (largo + Short) |
|---|---|---|
| Mar 27-oct | 21:00 | #88 T1 — La estrategia ORB del Nasdaq, probada en 32 formas: 0 pasan |
| Mié 28-oct | 18:00 | #88 T2 — Sin costos, positiva fuera de muestra; con costos, −1.73 |
| Jue 29-oct | 18:00 | #85 T1 |
| Vie 30-oct | 18:00 | #90 T1 |
| Sáb 31-oct | 18:00 | #88 T3 |
| Dom 1-nov | 18:00 | #88 T4 |
| … | | (continúa la Serie A según `guiones/INDICE.md`) |

## Reglas de cada publicación
- Título, descripción (con el enlace `/e/N?utm_…` en la primera línea), capítulos y etiquetas salen del guion aprobado.
- Miniatura propia, subtítulos `.srt` en español, y la casilla **"contenido alterado o sintético"** marcada (voz generada).
- Nunca se publica nada sin tu aprobación (ver `produccion-automatica.md`).

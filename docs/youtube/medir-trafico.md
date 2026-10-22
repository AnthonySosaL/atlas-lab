# Medir el tráfico de YouTube → ATLAS Lab

La web ya tiene **Google Analytics 4** (`G-N2H066P5K6`, cargado en `public/analytics.js`). Cuenta cada visita y de
dónde viene. Los datos son privados: solo los ve la cuenta de Google de Anthony en analytics.google.com.

## Enlaces que van en los videos
- En voz y en pantalla: **atlas-lab-one.vercel.app/e/N** (N = número del experimento). Redirige a la ficha completa.
- En la descripción (con seguimiento), uno por video:
  `https://atlas-lab-one.vercel.app/e/N?utm_source=youtube&utm_medium=video&utm_campaign=expNNN-tK`
  - `utm_medium`: `video` (largo) o `short`.
  - `utm_campaign`: `exp` + número con 3 dígitos + `-t` + tema. Ej.: `exp088-t2` = experimento #88, tema 2.
  - El redirect de `/e/N` conserva estos parámetros (configurado en `next.config.ts`).

## Dónde mirarlo en Analytics
1. **Visitas desde YouTube**: Informes → Adquisición → *Adquisición de tráfico* → filtro "Fuente/medio de la sesión"
   contiene `youtube`. Muestra usuarios, sesiones y tiempo de interacción.
2. **Qué video trae más gente**: mismo informe → cambiar la dimensión principal a *Campaña de la sesión* → cada fila es
   un video (`exp088-t2`, …). Comparar `video` contra `short` con la dimensión *Medio de la sesión*.
3. **Qué miran al llegar**: Informes → Interacción → *Páginas y pantallas* (con el filtro de fuente `youtube`).
4. **Tiempo real** (justo después de publicar): Informes → *Tiempo real* → tarjeta "Fuente de usuarios".
5. Recomendado una vez: Exploración → *Exploración libre* con filas = Campaña de la sesión, columnas = Medio,
   valores = Usuarios y Sesiones con interacción. Guardarla como "YouTube → ATLAS".

## Desde YouTube Studio
Análisis → *Alcance* y *Participación* por video. YouTube no cuenta los clics a enlaces externos de la descripción;
por eso la medida fiable de "cuánta gente pasó a la web" es la campaña en Analytics.

## Qué mirar cada semana
| Métrica | Dónde | Señal de que vamos bien |
|---|---|---|
| Sesiones con fuente `youtube` | Analytics → Adquisición | Crecen semana a semana |
| Campañas con más sesiones | Analytics → Campaña | Repetir el tipo de tema que más trae |
| Tiempo medio en la ficha | Analytics → Páginas | La gente lee el experimento, no rebota |
| Vistas y retención del video | YouTube Studio | Retención > 40% en Shorts |

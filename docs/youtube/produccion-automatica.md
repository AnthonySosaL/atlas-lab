# Producción automática con tu aprobación — canal ATLAS Lab

Tres pasos. **Nada se sube sin que lo apruebes.** Todo corre en tu PC (RTX 5070) con los datos de ATLAS.

```
[1. CREAR] (cada noche 01:00) ──► carpeta del tema, estado "pendiente de revisión"
        │
[2. REVISAR] (tú, en http://localhost:4321) ──► Aprobar  /  Pedir cambios (con nota)
        │
[3. SUBIR] (cada día 10:00) ──► YouTube, programado a su fecha y hora del calendario
```

## 1. Crear (tarea programada de Windows, 01:00)
Toma los siguientes temas de la cola (orden de `calendario-publicacion.md`) hasta tener **2 semanas** de colchón, y por cada tema genera en `D:\ATLAS\videos\vNNN-…\tK\`:
- **Voz**: la voz elegida, frase por frase, con los números en palabras; cada frase se comprueba con Whisper y se regenera si no dice lo escrito; unión con pausas naturales; masterizado a −14 LUFS.
- **Imagen** (Remotion, pipeline de `D:\canal_atlas`): los gráficos REALES del experimento (curva de `series/`, barras de las formas, tarjeta "Con tu capital", checklist de filtros), rótulo "Experimento #N", ficha final con `/e/N`, subtítulos palabra por palabra.
- **Largo 16:9** y **Short 9:16**, miniatura 1280×720, `metadatos.json` (título, descripción con UTM, capítulos, etiquetas, fecha y hora de publicación) y `estado.json` = `pendiente_revision`.
- Aviso por Telegram (el bot que ya tienes) o en la galería: "N videos listos para revisar".

## 2. Revisar (tú)
La galería local (`D:\canal_atlas\server.mjs`, acceso directo "Canal ATLAS") muestra cada video pendiente con su guion y metadatos:
- **Aprobar** → `estado.json` = `aprobado`.
- **Pedir cambios** + nota → vuelve a la cola de creación con tu nota; se rehace esa noche.
Sugerencia: revisar una vez por semana (≈ 8 videos), siempre con 2 semanas de margen.

## 3. Subir (tarea programada de Windows, 10:00)
Sube los videos **aprobados** cuya fecha de publicación cae en los próximos 2 días, con `tools/subir_youtube.py`:
- Canal **ATLAS Lab (@atlaslabquant)**, permiso en `D:\canal_atlas\token_canal_es.json` (autorizado el 22-oct-2026).
- Se sube como **programado** (`publishAt` = fecha y hora del calendario), con miniatura y subtítulos; guarda el ID del video en `estado.json` = `subido`.
- Máximo 2–4 subidas por día para no gastar la cuota compartida con tus otros canales (≈ 6 subidas/día en total por proyecto de Google Cloud).

## Pendiente antes de activarlo
1. **Voz**: elegir entre las muestras de `D:\ATLAS\videos\_voces\muestras\`.
2. **Auditoría de la API de YouTube** (Google Cloud): hasta que Google la apruebe, los videos subidos por la API quedan **privados** aunque se programen. Mientras tanto, el paso 3 sube en privado y tú los publicas/programas en YouTube Studio con un clic.
3. **Cuota**: recomendable un proyecto de Google Cloud propio para ATLAS (no compartir con los otros 3 canales).
4. Crear las 2 tareas programadas de Windows (01:00 y 10:00) — solo con tu visto bueno.

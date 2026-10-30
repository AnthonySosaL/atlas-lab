# Producción con tu aprobación — canal ATLAS Lab

Tres pasos. **Nada se sube sin que lo apruebes.** Todo corre en tu PC (RTX 5070) con los datos de ATLAS, y convive con el sistema de videos automáticos de `D:\videos` sin chocar (ver «Convivencia»).

```
[1. CREAR] (03:00, después de la producción de D:\videos) ──► video + Short + miniatura, estado "pendiente de revisión"
        │
[2. REVISAR] (tú, desde Telegram) ──► te llega la versión 720p + miniatura; respondes «OK» o las mejoras por escrito
        │
[3. SUBIR] (10:00) ──► YouTube, programado a su fecha y hora del calendario
```

## 1. Crear
Por cada tema de la cola (orden de `calendario-publicacion.md`), manteniendo **2 semanas** de colchón:
- **Guion**: el de `docs/youtube/guiones/`, con cada cifra sacada de `public/data` (nada inventado).
- **Voz**: la **voz 2** que elegiste, generada frase por frase. Cada frase se comprueba con Whisper y se rehace si no dice lo escrito. Cada frase queda guardada: si pides un cambio, solo se rehace lo editado.
- **Imagen** (Remotion, `D:\canal_atlas`): los gráficos REALES del experimento (curvas, tablas, «Con tu capital», ficha con `/e/N`), b-roll de fondo, subtítulos palabra por palabra.
- **Música**: la pista **B** (piano suave, hecha con tu IA local, sin derechos de terceros), unos 14 dB por debajo de la voz; baja sola cuando se habla.
- **Sonido final**: −14 LUFS, el nivel de YouTube.
- **Entregables**:
  - el **largo 16:9** y el **Short 9:16**;
  - la **miniatura** 1280×720 (número real y una palabra en rojo, legible en pequeño);
  - `metadatos.json` con título, descripción con enlace y UTM, capítulos, etiquetas, fecha y hora;
  - `estado.json` = `pendiente_revision`.

## 2. Revisar (tú, desde el celular)
- Te llega por **Telegram** (el mismo bot de siempre) la versión 720p, la miniatura y el título propuesto.
- Respondes escribiendo, sin `/`:
  - **«OK»** → `aprobado`;
  - **las mejoras** → se rehace esa parte y te llega la nueva versión.
- Un vigilante en tu PC avisa a Claude en menos de un minuto cuando escribes. **Esperar no gasta créditos**; cada respuesta tuya cuesta lo mismo que un mensaje normal.
- Ritmo: un tema por día (largo y Short juntos a las 18:30), así que llega uno nuevo cada día para revisar antes de su hora de salida.

## 3. Subir (10:00)
Sube los videos **aprobados** cuya fecha cae en los próximos 2 días, con `tools/subir_youtube.py`:
- **Canal**: ATLAS Lab (@atlaslabquant), permiso en `D:\canal_atlas\token_canal_es.json` (autorizado el 22-oct-2026).
- **Programado** (`publishAt` = fecha y hora del calendario), con miniatura, subtítulos y la casilla «contenido alterado o sintético» marcada (voz generada). Guarda el ID en `estado.json` = `subido`.
- **Cuota de la API compartida** con tus otros canales:
  - ATLAS sube **después** de las subidas del día de `D:\videos`, como mucho 2 por día;
  - si la cuota se acabó, **no insiste** y lo intenta al día siguiente.

## Convivencia con el sistema de `D:\videos` (acordado el 26-oct-2026)
| Tema | Acuerdo |
|---|---|
| Quién hace qué | Chat **CANAL**: Hechos Interesantes y Primal Data (IA local, automático). Chat **ATLAS**: este canal, video a video con tu aprobación. |
| Horario | La producción de `D:\videos` corre solo cuando pulsas ▶️ Iniciar en el bot: de 00:05 a ~02:30. ATLAS crea a las **03:00** y sube a las **10:00**. |
| Tarjeta gráfica | **Turno compartido** (`D:\videos\gpu_en_uso.json`): quien la necesita mira si la usa el otro; si sí, espera. |
| Telegram | **Un solo bot**: lo que escribes con `/` es para el bot de videos; lo demás llega a ATLAS (buzón `D:\canal_atlas\buzon_telegram.jsonl`). |
| Carpetas | ATLAS no toca `D:\videos`; CANAL no toca `D:\canal_atlas`. Se avisan en `D:\videos\COORDINACION-CON-ATLAS.md`. |

## Pendiente antes de activarlo
1. **Plantilla de escenas para videos de experimento**: hacerla con el #88. Luego cada video es sobre todo datos y guion, no código nuevo.
2. Crear las 2 tareas programadas de Windows (03:00 y 10:00), **solo con tu visto bueno**.
3. Comprobar en la primera subida si la API deja programar en público o fuerza «privado» (depende de la verificación del proyecto de Google Cloud).

# Roadmap

Trabajo comprometido: lo que sí se va a hacer. Código `RM-###` (nunca se reutiliza).
Al terminar una tarea se mueve al changelog y se borra de aquí.

**Formato de cada entrada:**
- **Objetivo:** qué se quiere lograr.
- **Hecho cuando:** criterio claro de finalización.
- **Fecha** y **Estado** (Abierto / En progreso).

---

## [RM-001] Reposicionar la web de game dev a full-stack/web
- **Objetivo:** Voltear la narrativa del portafolio. Full-stack/web pasa a ser la columna; game dev se degrada a mención de hobby (una línea, sin sección propia). Quitar game jams como proyectos destacados. TV Perú se conserva pero presentado como sistema web (no como juego). Ajustar Hero, Stack, Experience, Projects y los textos es/en.
- **Hecho cuando:** Ningún componente presenta game dev como eje principal; los game jams ya no figuran en Proyectos; TV Perú aparece como sistema web; `es.json` y `en.json` actualizados y coherentes entre sí.
- **Fecha:** 2026-07-31 · **Estado:** Abierto

## [RM-004] Mantener sitio, LinkedIn y PDFs sincronizados con el CV (fuente de verdad)
- **Objetivo:** `cv/cv.en.md` y `cv/cv.es.md` son la **fuente de verdad** de la información profesional (experiencia, títulos, fechas, proyectos). Propagar cualquier cambio del CV a: (a) el contenido del sitio en `src/lib/i18n/messages/*.json` (se ejecuta junto con RM-001); (b) los PDFs de `public/` que sirve el botón "Descargar CV" — hoy desactualizados, reemplazar por los de `cv/dist/`; (c) LinkedIn (alinear títulos, p. ej. GDP "Desarrollador de videojuegos" → "Software Developer").
- **Hecho cuando:** Sitio, PDFs públicos y LinkedIn reflejan lo que dice el CV, y el repo deja claro que el CV es la fuente de verdad.
- **Fecha:** 2026-08-01 · **Estado:** Abierto

## [RM-003] Flujo asistido de búsqueda y postulación a ofertas
- **Objetivo:** Definir un flujo repetible donde Claude busca ofertas relevantes (full-stack/web, Perú/remoto), las contrasta contra el perfil con el criterio del 60% de match, y ayuda a postular: adaptar CV y carta por oferta, romper el auto-descarte por inseguridad. Límites conocidos: Claude puede buscar listados y redactar/adaptar, pero **no** puede auto-enviar formularios ni superar logins/captcha; el envío final lo hace el usuario.
- **Hecho cuando:** Hay un flujo acordado + una primera tanda de ofertas encontradas y evaluadas contra el perfil, con al menos una postulación preparada para enviar.
- **Fecha:** 2026-07-31 · **Estado:** En progreso (2026-08-01)

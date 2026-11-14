# Roadmap

Trabajo comprometido: lo que sí se va a hacer. Código `RM-###` (nunca se reutiliza).
Al terminar una tarea se mueve al changelog y se borra de aquí.

**Formato de cada entrada:**
- **Objetivo:** qué se quiere lograr.
- **Hecho cuando:** criterio claro de finalización.
- **Fecha** y **Estado** (Abierto / En progreso).

---

Rediseño "editorial cinematográfico" (RM-007 a RM-012): fotos a pantalla completa
con blur, grano y degradé, tipografía enorme y scroll animado con GSAP + Lenis.
Audiencia: reclutadores y tech leads. La TV es un capítulo destacado, no la
identidad del sitio.

## [RM-010] Experiencia con capítulo TV
- **Objetivo:** línea de tiempo compacta con IRTP como escena destacada (foto de sala de control, 5 años en vivo sin fallos).
- **Hecho cuando:** la sección Experiencia en `/demo` usa el diseño nuevo y el resto de empleos no queda opacado por la TV.
- **Prerequisito:** RM-008.
- **Fecha:** 2026-11-13 · **Estado:** Abierto

## [RM-011] Stack, Contacto y Footer
- **Objetivo:** stack como tipografía en movimiento en vez de tarjetas; cierre con foto y llamada a la acción gigante.
- **Hecho cuando:** las tres secciones existen en `/demo` con el diseño nuevo, sin `glass-card` ni `badge-tech`.
- **Prerequisito:** RM-008.
- **Fecha:** 2026-11-13 · **Estado:** Abierto

## [RM-012] Casos de estudio TV Perú
- **Objetivo:** que las páginas `/tv-peru/*` adopten el mismo lenguaje visual.
- **Hecho cuando:** `TvPeruCaseStudy` usa el sistema nuevo en ambas páginas.
- **Prerequisito:** RM-010.
- **Fecha:** 2026-11-13 · **Estado:** Abierto

## [RM-013] Cambio final: la landing nueva reemplaza a la actual
- **Objetivo:** mover la landing de `/demo` a `/`, llevar fuentes y scroll suave al layout raíz y borrar lo viejo.
- **Hecho cuando:** `/` muestra la landing nueva, `/demo` ya no existe y no quedan componentes ni clases del diseño anterior.
- **Prerequisito:** RM-009, RM-010, RM-011 y RM-012.
- **Fecha:** 2026-11-13 · **Estado:** Abierto

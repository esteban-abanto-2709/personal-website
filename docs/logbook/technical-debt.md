# Deuda Técnica

Registro de atajos, decisiones pendientes y riesgos a futuro de este proyecto.
Código `TD-###` (nunca se reutiliza). Al resolverse, la entrada se mueve al
changelog y se borra de aquí.

**Formato de cada entrada:**
- **Ubicación:** `archivo:línea` afectado.
- **Riesgo:** del 1 al 10 (1-3 cosmético · 4-6 ralentiza/moderado · 7-9 bug latente o seguridad · 10 crítico).
- **Problema:** qué está mal, sintetizado.
- **Impacto futuro:** qué puede causar si no se atiende.
- **Fecha** y **Estado** (Abierto / En progreso).

---

## [TD-001] Páginas de TV Perú hardcodeadas en español, fuera de i18n
- **Ubicación:** `src/app/tv-peru/que-gane-el-mejor/page.tsx`, `src/app/tv-peru/pukllaspa-yachay/page.tsx`
- **Riesgo:** 5/10
- **Problema:** Todo el texto de estas dos páginas de caso de estudio está escrito directo en JSX en español, sin pasar por el sistema i18n (`messages/es.json` · `en.json`) que usa el resto del sitio.
- **Impacto futuro:** Un visitante en inglés ve el sitio en inglés pero estas subpáginas en español. Al actualizar contenido hay que tocar JSX en dos idiomas a mano; fácil que queden desincronizadas con el CV.
- **Fecha:** 2026-07-31 · **Estado:** Abierto

## [TD-002] Dependencia `next-intl` instalada pero sin uso
- **Ubicación:** `package.json:16`
- **Riesgo:** 2/10
- **Problema:** `next-intl` figura en dependencies pero el i18n está resuelto con una implementación propia (`src/lib/i18n/`). La librería nunca se importa.
- **Impacto futuro:** Peso muerto en el bundle/instalación y confusión sobre cuál es el mecanismo real de i18n. Decidir: adoptarla y borrar el custom, o quitarla.
- **Fecha:** 2026-07-31 · **Estado:** Abierto

## [TD-003] Juego repetido en la lista de "Que Gane el Mejor"
- **Ubicación:** `src/app/tv-peru/que-gane-el-mejor/page.tsx:74`
- **Riesgo:** 2/10
- **Problema:** La frase lista los juegos como «"Personajes", "Mi libro favorito" y "Personajes"» — "Personajes" aparece dos veces; el tercero debería ser otro juego.
- **Impacto futuro:** Error de contenido visible en una página pública de portafolio; da impresión de descuido a un reclutador.
- **Fecha:** 2026-07-31 · **Estado:** Abierto

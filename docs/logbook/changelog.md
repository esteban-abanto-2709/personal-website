# Changelog

Registro permanente de todo el trabajo terminado. Indexado por código de tarea
(`TD-`, `RM-`, `WL-`). Orden inverso: lo más nuevo arriba.

**Formato de cada entrada:**

```
## [CÓDIGO] Título (YYYY-MM-DD HH:MM)
Resumen en ≤2 líneas de lo que se hizo.
```

---

## [RM-001] Reposicionamiento del sitio: de game dev a full-stack (2026-08-26 22:13)
Volcado el sitio a full-stack/web en 5 commits: PDFs públicos, datos de experiencia (+GDP Studios), stack sin barras de %, hero, proyectos web, metadata y páginas tv-peru reencuadradas como sistema web. Build verde en cada bloque.

## [RM-004] Sitio y PDFs sincronizados con la fuente de verdad (2026-08-26 22:13)
Sitio (i18n messages) y PDFs de `public/` alineados con el CV. La fuente de verdad de los hechos pasó a `historial.md` → CV → sitio/PDFs/LinkedIn (documentado en CLAUDE.md). La alineación de LinkedIn queda del lado del usuario.

## [TD-002] Dependencia next-intl instalada pero sin uso (2026-08-26 22:10)
Eliminada con `npm uninstall next-intl`; el i18n propio queda como único mecanismo. Build verde.

## [TD-003] Juego repetido en la lista de "Que Gane el Mejor" (2026-08-26 22:05)
Corregido al reescribir la página `tv-peru/que-gane-el-mejor` en el reframe a sistema web; la frase ya no duplica "Personajes".

## [RM-002] Investigación CV ATS-friendly + plantilla iterable (2026-08-01 14:12)
Investigada la estructura de CV compatible con ATS y montado pipeline Markdown→Pandoc→DOCX + Word→PDF (`cv/`). Generado el CV completo EN y ES con toda la experiencia real, ATS-safe. Hallazgos en `docs/cv-research.md`.

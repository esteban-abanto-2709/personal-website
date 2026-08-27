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

## [TD-004] Nombre de TDCLA reconciliado — sin cambios en el sitio (2026-08-26 22:47)
El cerebro confirmó, con la constancia firmada, que la razón social es "Tecnologías del Conocimiento S.A.C." ("Latinoamérica" no figura en el documento). El sitio ya usaba "S.A.C. (TDCLA)" (correcto); el error estaba en el CV y se corrigió allá. Sin cambios en este repo.

## [TD-001] Páginas de TV Perú movidas al sistema i18n (2026-08-26 22:45)
El contenido de las dos páginas `tv-peru/*` (antes hardcodeado en español) se movió a la sección `tvPeru` de `messages/es.json` + `en.json`, con traducción al inglés. Las rutas ahora renderizan un componente compartido `TvPeruCaseStudy` que lee de i18n. Build verde.

## [RM-004] Sincronización del sitio con la fuente de verdad + salida del CV del repo (2026-08-26 22:36)
Sitio (i18n) y PDFs de `public/` alineados con el CV, **incluida la entrada de IRTP reencuadrada como sistema web** (título, descripción y stack) y las tarjetas de proyecto. El CV (`cv/*.md`, `dist/`) y los docs de investigación se mudaron a `PersonalDevelopment/profesional/cv/`; este repo queda solo con la web. Fuente de verdad de los hechos: `profesional/trayectoria.md` → CV → sitio/PDFs/LinkedIn (README y CLAUDE.md actualizados). Alineación de LinkedIn: del lado del usuario.

## [TD-002] Dependencia next-intl instalada pero sin uso (2026-08-26 22:10)
Eliminada con `npm uninstall next-intl`; el i18n propio queda como único mecanismo. Build verde.

## [TD-003] Juego repetido en la lista de "Que Gane el Mejor" (2026-08-26 22:05)
Corregido al reescribir la página `tv-peru/que-gane-el-mejor` en el reframe a sistema web; la frase ya no duplica "Personajes".

## [RM-002] Investigación CV ATS-friendly + plantilla iterable (2026-08-01 14:12)
Investigada la estructura de CV compatible con ATS y montado pipeline Markdown→Pandoc→DOCX + Word→PDF (`cv/`). Generado el CV completo EN y ES con toda la experiencia real, ATS-safe. Hallazgos en `docs/cv-research.md`.

# Changelog

Registro permanente de todo el trabajo terminado. Indexado por código de tarea
(`TD-`, `RM-`, `WL-`). Orden inverso: lo más nuevo arriba.

**Formato de cada entrada:**

```
## [CÓDIGO] Título (YYYY-MM-DD HH:MM)
Resumen en ≤2 líneas de lo que se hizo.
```

---

## [RM-012] Casos de estudio TV Perú (2026-11-13 20:32)
Páginas `/demo/tv-peru/*` con portada a pantalla completa, cifras y bloques editoriales en el diseño nuevo; el header navega a la landing desde fuera de ella. Las páginas reales se reemplazan en RM-013.

## [RM-011] Stack, Contacto y Footer (2026-11-13 20:27)
Stack de `/demo` con dos cintas en movimiento ligadas al scroll e índice por categorías; cierre a pantalla completa con foto y email gigante que se copia, y footer sobrio. Claves `copyEmail`, `emailCopied` y `write` en `contact`.

## [RM-010] Experiencia con capítulo TV (2026-11-13 20:08)
Sección Experiencia de `/demo`: banda a pantalla completa para IRTP / TV Perú con foto y cifras (`highlights` en los messages) y línea de tiempo compacta para los demás empleos.

## [RM-009] Proyectos con foto (2026-11-13 18:37)
Sección Proyectos de `/demo` con cinco piezas apiladas (foto con parallax y revelado, título serif gigante). Campo `image` en los messages y orden nuevo con Treno primero, que también aplica a la landing actual.

## [RM-008] Header de la landing nueva en `/demo` (2026-11-13 18:22)
Header fijo en `/demo` con navegación por secciones vía Lenis y cambio de idioma ES/EN; la landing real sigue intacta.

## [RM-007] Demo aislada del hero (2026-11-13 18:22)
Hero cinematográfico en `/demo`: foto a pantalla completa con grano, Instrument Serif gigante y scroll fijado con GSAP + Lenis. Estilo aprobado.

## [RM-006] Sitio y PDFs sincronizados con el CV de noviembre 2026 (2026-11-13 16:52)
PDFs de `public/` reemplazados por `cv/dist` y contenido ES/EN alineado al CV: IRTP cerrado en setiembre 2026 con cargo y logros reales, Treno, stack con AWS e IA aplicada, fecha de Netdreams corregida. Páginas `tv-peru/*` reescritas sin las afirmaciones falsas (Supabase/Vercel, rollback, load-first, editor). Build verde.

## [RM-001] Reposicionamiento del sitio: de game dev a full-stack (2026-08-26 22:13)
Volcado el sitio a full-stack/web en 5 commits: PDFs públicos, datos de experiencia (+GDP Studios), stack sin barras de %, hero, proyectos web, metadata y páginas tv-peru reencuadradas como sistema web. Build verde en cada bloque.

## [RM-005] Migración de npm a pnpm (2026-08-26 22:51)
Proyecto migrado a pnpm: `packageManager: pnpm@11.8.0` en package.json, `package-lock.json` eliminado y `pnpm-lock.yaml` generado. `pnpm run build` verde. README y CLAUDE.md actualizados.

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

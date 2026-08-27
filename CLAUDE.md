# CLAUDE.md — personal-website

Convenciones específicas de este repo. Lo general (estilo de código, logbook,
flujo de trabajo) vive en el `CLAUDE.md` global.

## Qué es

Portafolio personal en **Next.js 16 (App Router) + React 19 + Tailwind v4 + TypeScript**,
desplegado en Vercel. Landing de una sola página + páginas de caso de estudio en
`src/app/tv-peru/*`.

## Reglas al trabajar aquí

- **El contenido del sitio vive en `src/lib/i18n/messages/es.json` y `en.json`**, no en
  los componentes. Un cambio de texto (experiencia, proyectos, stack) se hace en esos
  dos archivos, y **ambos idiomas se mantienen en sincronía**.
- **i18n es propio**, no `next-intl` (está en `package.json` pero sin usar → deuda).
  El patrón es `useTranslations("seccion")` + `useMessages()` sobre el `LocaleProvider`.
- Las páginas `src/app/tv-peru/*` renderizan `<TvPeruCaseStudy which="…" />`, que lee su
  contenido de la sección `tvPeru` de los messages (es/en) — igual que el resto del sitio.
- Tailwind v4: usar utilidades modernas (`bg-linear-to-br`, etc.), no config de v3.

## CV / PDFs de descarga

Los PDFs `public/CV_Esteban_Abanto_ES.pdf` y `_EN.pdf` (que sirve el botón "Descargar
CV" en `Hero.tsx`) son **artefactos generados**. Su fuente en Markdown y el pipeline de
generación (Pandoc → DOCX → PDF con Word) viven **fuera de este repo**, en
`Projects-GitHub/PersonalDevelopment/profesional/cv/`.

Para refrescarlos: regenerar los PDF allá y copiar cada uno a `public/` **conservando los
nombres** (`CV_Esteban_Abanto_ES.pdf`, `_EN.pdf`) para no romper el link.

> **Fuente de verdad de los hechos:** `PersonalDevelopment/profesional/trayectoria.md`
> (contrastado con certificados) → se recorta al CV (`profesional/cv/cv.*.md`, fuera de
> este repo) → derivan el contenido del sitio (`src/lib/i18n/messages/*.json`), los PDFs
> de `public/` y LinkedIn. Nunca al revés.

## Comandos

```bash
npm run dev     # desarrollo
npm run build   # build de producción
npm run lint    # eslint
```

## Seguimiento

Roadmap, deuda técnica y changelog en `docs/logbook/`. Usar el skill `logbook`
(`/logbook next`, `/logbook audit`) para la mecánica.

# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

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
- **i18n es propio**, sin librería. El patrón es `useTranslations("seccion")` (claves
  string) o `useMessages()` (objeto tipado, para arrays/estructuras), ambos exportados
  desde `@/hooks` y leídos del `LocaleProvider`.
- **Agregar o cambiar la forma de una clave** = tocar `es.json`, `en.json` **y** la
  interfaz `Messages` en `src/lib/i18n/types/index.ts`. `useTranslations` no falla con
  una clave inexistente: hace `console.warn` y devuelve la clave tal cual.
- **Cómo se elige el idioma:** `layout.tsx` (server) siempre carga `en` como
  `initialMessages`; en el cliente, `LocaleProvider` lee `localStorage["locale"]` o el
  idioma del navegador y, si no es `en`, importa dinámicamente el otro JSON. Por eso
  todo componente que muestra texto es `"use client"` (ver TD-006 por el parpadeo).
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
pnpm dev     # desarrollo
pnpm build   # build de producción
pnpm lint    # eslint (hoy falla por TD-005 en LocaleProvider)
```

No hay tests: la verificación de un cambio es `pnpm build` (incluye type-check) y
`pnpm lint`. Deploy automático en Vercel al hacer push a `main`.

## Seguimiento

Roadmap, deuda técnica y changelog en `docs/logbook/`. Usar el skill `logbook`
(`/logbook next`, `/logbook audit`) para la mecánica.

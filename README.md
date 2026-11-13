# Esteban Abanto — Personal Website

Portafolio personal de Esteban Abanto (desarrollador de software). Landing de una
sola página con secciones de experiencia, proyectos y stack, más páginas de caso de
estudio, i18n español/inglés y descarga de CV.

**En vivo:** https://esteban-abanto.vercel.app

## Stack

- **Next.js 16** (App Router) · **React 19** · **TypeScript**
- **Tailwind CSS v4**
- **i18n propio** (sin librerías) — ver abajo
- Deploy en **Vercel** (Analytics + Speed Insights)

## Desarrollo

```bash
pnpm install
pnpm dev      # http://localhost:3000
```

Otros scripts: `pnpm build`, `pnpm start`, `pnpm lint`.

## Estructura

```
src/
├── app/                 # Rutas (App Router): page.tsx + tv-peru/* (casos de estudio)
├── components/          # Secciones de la página (Hero, Experience, Projects, Stack…)
├── hooks/               # useScrollSpy, useScrollToSection, useTranslations
├── lib/i18n/
│   ├── messages/        # es.json · en.json  ← EL CONTENIDO DEL SITIO VIVE AQUÍ
│   ├── components/       # LocaleProvider
│   └── index.ts         # detección de idioma, storage
└── ui/                  # Botones/íconos reutilizables

docs/logbook/            # roadmap, deuda técnica, changelog del proyecto
public/                  # avatar, CVs en PDF que sirve el botón "Descargar CV"
```

## Contenido e i18n

El texto del sitio **no está hardcodeado** en los componentes: vive en
`src/lib/i18n/messages/es.json` e `en.json`. Para editar experiencia, proyectos o
stack, se editan esos archivos — **ambos idiomas deben mantenerse en sincronía**.
Las páginas de caso de estudio (`src/app/tv-peru/*`) también: leen la sección `tvPeru`.

## CV

Los PDF de `public/` que descarga el botón "Descargar CV" son **artefactos generados**.
Su fuente y el pipeline de generación viven fuera de este repo (ver `CLAUDE.md`).

## Deploy

Automático en Vercel al hacer push a `main`.

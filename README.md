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
npm install
npm run dev      # http://localhost:3000
```

Otros scripts: `npm run build`, `npm run start`, `npm run lint`.

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

cv/                      # CV en Markdown → DOCX/PDF (ver cv/, sección abajo)
docs/
├── cv-research.md       # investigación de estructura de CV ATS-friendly
└── logbook/             # roadmap, deuda técnica, changelog del proyecto
public/                  # avatar, CVs en PDF que sirve el botón "Descargar CV"
```

## Contenido e i18n

El texto del sitio **no está hardcodeado** en los componentes: vive en
`src/lib/i18n/messages/es.json` e `en.json`. Para editar experiencia, proyectos o
stack, se editan esos archivos — **ambos idiomas deben mantenerse en sincronía**.

> Excepción conocida: las páginas `src/app/tv-peru/*` sí tienen el texto en el JSX
> (solo español). Registrado como deuda técnica en `docs/logbook/technical-debt.md`.

## CV

El CV se escribe una vez en Markdown y se genera a DOCX (ATS-safe) y PDF:

```
cv/
├── cv.en.md · cv.es.md   # fuentes (una por idioma)
└── dist/                 # salidas .docx y .pdf
```

Regenerar (requiere **Pandoc** y **MS Word** en Windows):

```bash
pandoc cv/cv.en.md -o cv/dist/cv.en.docx
pandoc cv/cv.es.md -o cv/dist/cv.es.docx
# DOCX → PDF vía Word (ver comando en CLAUDE.md)
```

## Deploy

Automático en Vercel al hacer push a `main`.

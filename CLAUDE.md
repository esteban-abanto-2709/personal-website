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
- Las páginas `src/app/tv-peru/*` tienen el texto hardcodeado en JSX (solo ES) — fuera
  del sistema i18n. Es deuda conocida; ver `docs/logbook/technical-debt.md`.
- Tailwind v4: usar utilidades modernas (`bg-linear-to-br`, etc.), no config de v3.

## CV (`cv/`)

Fuente en Markdown por idioma → DOCX (Pandoc) → PDF (Word). Requiere **Pandoc** y
**MS Word** instalados (Windows).

> **Fuente de verdad, en dos niveles:**
>
> Los **hechos** (experiencia, fechas, títulos, qué documento prueba cada cosa) viven
> fuera de este repo, en `Projects-GitHub/PersonalDevelopment/profesional/trayectoria/historial.md`.
> Ahí está el historial completo, incluido lo que no entra en un CV.
>
> `cv/cv.en.md` y `cv/cv.es.md` son el **recorte ATS-safe** de ese historial y la
> referencia canónica de lo que **se envía**. El contenido del sitio
> (`src/lib/i18n/messages/*.json`), los PDFs de `public/` y LinkedIn **derivan del CV**:
> si el CV cambia, se propaga a los demás. Ver `docs/logbook/roadmap.md` (RM-004).
>
> Dirección del flujo: `historial.md` → `cv.*.md` → sitio · PDFs · LinkedIn. Nunca al
> revés. Un dato nuevo de un trabajo entra primero al historial.

```powershell
# DOCX
pandoc cv/cv.en.md -o cv/dist/cv.en.docx
pandoc cv/cv.es.md -o cv/dist/cv.es.docx
# DOCX -> PDF con Word COM
$w = New-Object -ComObject Word.Application
foreach ($l in @("en","es")) {
  $d = $w.Documents.Open("$PWD\cv\dist\cv.$l.docx")
  $d.SaveAs([ref]"$PWD\cv\dist\cv.$l.pdf",[ref]17); $d.Close($false)
}
$w.Quit()
```

Criterio del CV: estructura **ATS-safe** (una columna, headings estándar, sin tablas ni
imágenes). Fundamentos en `docs/cv-research.md`.

## Comandos

```bash
npm run dev     # desarrollo
npm run build   # build de producción
npm run lint    # eslint
```

## Seguimiento

Roadmap, deuda técnica y changelog en `docs/logbook/`. Usar el skill `logbook`
(`/logbook next`, `/logbook audit`) para la mecánica.

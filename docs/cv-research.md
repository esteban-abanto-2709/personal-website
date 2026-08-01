# Investigación: estructura de CV ATS-friendly (base para el CV de Esteban)

Hallazgos de investigación (2026) que definen cómo construir y hoja de ruta para
iterar el CV. Objetivo central: que un filtro **ATS/IA parsee la info sin errores**;
si el algoritmo lee mal, se descarta antes de llegar a un humano.

Fuentes al final.

---

## 1. Formato de archivo

- **DOCX es la opción universal más segura:** parsea >95% en todos los ATS, incluidos los viejos (Taleo). El PDF cae a ~83% en esos.
- **PDF *text-based*** lo parsean bien los ATS modernos (Workday, Greenhouse, Lever), pero **solo si el texto es seleccionable** (no una imagen/render).
- **Regla práctica:** mantener **DOCX como entregable principal**; PDF text-based como secundario para enviar por correo/subir donde se vea mejor el layout.
- ⚠️ Nunca exportar un CV donde headings o skills sean **imágenes** (barras de skill, íconos): el ATS no hace OCR en vivo → esa info desaparece. (Justo lo que hace hoy la web con las barras de %.)

## 2. Layout

- **Una sola columna.** Multi-columna, tablas, text-boxes → el ATS mezcla el orden del texto.
- **Sin** imágenes, gráficos, íconos con texto, ni barras de progreso.
- **Fuentes web-safe:** Arial, Calibri, Georgia, Garamond, Times New Roman. Cuerpo 10–12 pt, headings 14–16 pt.
- **Márgenes** 1" (mínimo 0.5"). 
- **Orden cronológico inverso** (lo más reciente primero). Es el formato más ATS-friendly.

## 3. Headings (títulos de sección) — usar los exactos

El ATS reconoce nombres estándar. **Nada creativo** ("Mi trayecto", "Lo que aporto")
rompe la categorización.

| Usar | Evitar |
|---|---|
| Professional Summary / Summary | About me, My journey |
| Skills / Technical Skills | What I bring, Toolbox |
| Work Experience / Professional Experience | Where I've been |
| Projects | Things I built |
| Education | — |
| Languages | — |

## 4. Orden de secciones (para el caso de Esteban)

Esteban tiene experiencia real (TV Perú 4+ años) **y** proyectos → perfil early/mid,
donde los proyectos cuentan casi como experiencia. Orden recomendado:

1. **Contacto** (nombre, título, email, teléfono, LinkedIn, GitHub, portfolio) — texto, no íconos.
2. **Professional Summary** — 3–4 líneas: años de experiencia + foco técnico (full-stack) + 1 logro cuantificado.
3. **Skills / Technical Skills** — 10–12 ítems máx, agrupados: Languages · Frameworks · Databases · Tools/DevOps. Los más relevantes a la oferta, primero.
4. **Work Experience** — cronológico inverso, 3–5 bullets por rol. **TV Perú es el ancla.**
5. **Projects** — los web bien documentados (gym-tracker, rally, apothecary, ephemeral-chat). Link a repo/demo.
6. **Education**
7. **Languages** — ver §6.

## 5. Bullets: fórmula XYZ + cuantificar

- **Fórmula:** *Verbo de acción + tarea específica + resultado cuantificado.*
  "Accomplished **X**, measured by **Y**, by doing **Z**."
- Cuantificar todo lo posible (%, tiempo, cantidad, escala). CVs con logros
  cuantificados reciben ~40% más respuestas (estudio Jobscan).
- Verbos fuertes: developed, implemented, built, optimized, reduced, led, shipped, automated.
- Ejemplos para su caso (a pulir con datos reales):
  - "Operé software en vivo para un concurso de TV nacional durante 4 años **sin caídas al aire**, en transmisiones de hasta 2h."
  - "Construí un sistema de puntajes en tiempo real que gestionó **28 colegios y 600+ participantes** simultáneamente."
  - "Migré el sistema QGEM de Unity a una arquitectura web multi-repo (C#/TS)."

## 6. Idiomas — honestidad con escala CEFR

- Usar **CEFR**, no "conversacional"/"intermedio" (ambiguos, se marcan en entrevista).
- Inglés de Esteban: se defiende en conversación, no fluido → **English — B1 (Intermediate)**.
  Nunca inflar: un CV en inglés impecable + "Native" y luego una llamada donde no fluye
  es peor que declarar B1 desde el inicio.
- Español — C2 (Native).

## 7. Keywords / tailoring por oferta

- **Espejar el vocabulario de la oferta:** si pide "CI/CD", "PostgreSQL", "REST APIs",
  usar esas palabras exactas (si son ciertas). El ATS puntúa por match de keywords.
- Reordenar Skills por oferta: lo que la oferta pide, arriba.
- Esto exige **una versión por oferta** → de ahí la necesidad de una forma iterable (§8).

## 8. Forma iterable recomendada: Markdown → Pandoc → DOCX

Decisión de tooling (reúsa antes que construir):

- **Fuente única en Markdown**, un archivo por idioma (`cv.es.md`, `cv.en.md`).
- **Pandoc** genera DOCX (y PDF text-based) ATS-safe desde el Markdown, con un
  *reference-doc* que fija fuente/headings/márgenes de §2.
- **Ventajas:** versionado en git (cada cambio es un diff legible, no un binario opaco),
  contenido separado del formato, tailoring por oferta = copiar el `.md`, ajustar y regenerar.
- Proyectos comunidad de referencia: `mszep/pandoc_resume`, `roguh/pandoc-resume`,
  plantilla "ATS Safe Resume" de pandoc-templates.org.
- **Dependencia:** Pandoc no está instalado; se instala con `winget install JohnMacFarlane.Pandoc`.
- Alternativa si no se quiere Pandoc: mantener el DOCX directo (peor para iterar/versionar).

## 9. Cómo validar que un ATS lo lee bien

- **Test copy-paste:** abrir el PDF/DOCX, seleccionar todo, copiar y pegar en texto plano.
  Si el orden se mantiene y no falta info → el ATS lo leerá parecido.
- Si algo sale como imagen o se desordena → arreglar antes de enviar.

---

## Fuentes

- [Jobscan — Anatomy of an ATS Friendly Resume Format (2026)](https://www.jobscan.co/blog/20-ats-friendly-resume-templates/)
- [Resumemate — PDF vs DOCX 2026](https://www.resumemate.io/blog/pdf-vs-docx-for-resumes-in-2025-what-recruiters-ats-really-prefer/)
- [Resume Optimizer Pro — ATS Best Practices 2026](https://resumeoptimizerpro.com/blog/ats-friendly-resume-tips)
- [Resume Optimizer Pro — How to List Languages (CEFR/ILR)](https://resumeoptimizerpro.com/blog/how-to-list-languages-on-resume)
- [Interview Kickstart — Structure your SWE resume 2026](https://interviewkickstart.com/blogs/articles/how-to-structure-your-software-engineering-resume)
- [Wonsulting — XYZ formula for quantified bullets](https://www.wonsulting.com/job-search-hub/the-power-of-quantifiable-results-how-to-use-the-xyz-formula-to-supercharge-your-resume)
- [genezini — Maintainable resume with Markdown and Pandoc](https://blog.genezini.com/p/creating-a-maintainable-resume-with-markdown-and-pandoc/)
- [pandoc-templates.org — ATS Safe Resume template](https://pandoc-templates.org/template/ats-safe-resume/)

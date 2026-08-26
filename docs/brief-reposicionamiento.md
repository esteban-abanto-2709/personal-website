# Brief de reposicionamiento — qué debe reflejar el sitio

Instrucciones para ejecutar RM-001 y RM-004, emitidas desde
`PersonalDevelopment/profesional/`, que es donde vive la estrategia de búsqueda de
empleo y el historial verificado.

Fecha: 2026-08-26

---

## Contexto que cambia las prioridades

Esteban está buscando trabajo **ahora**, no en abstracto. El ingreso del IRTP se
corta después de octubre de 2026. El objetivo son puestos full-stack remotos en
LatAm de US$ 2.500–3.500/mes, y ya hay una primera tanda de ofertas puntuadas.

Eso reordena la lista: **la prioridad no es cuán falso es un dato, sino qué tan
rápido lo ve un reclutador.**

## Fuente de verdad — cambió

```
PersonalDevelopment/profesional/trayectoria/historial.md    los HECHOS
        ↓ se recorta
cv/cv.es.md · cv/cv.en.md                                   lo que se ENVÍA
        ↓ deriva
sitio · public/*.pdf · LinkedIn
```

`historial.md` tiene las fechas contrastadas contra los certificados originales.
Ante cualquier duda de fecha, nombre de empresa o cargo, manda ese archivo — no
el CV, y no el sitio.

## Dos correcciones a la lista previa

**1. Rebel Rabbit está al revés.** La lista dice: sitio "Feb 2022" → corregir a
"Ene 2022". **No.** El certificado de trabajo firmado por RBLRBT SAC dice
textualmente *"desde el 01 de febrero del 2022 al 31 de marzo del 2023"*.

**El sitio está bien y el CV está mal.** Corregir el CV a febrero, no el sitio a
enero. Aplicar el cambio al revés metería en el sitio una fecha que el
certificado desmiente, justo en el dato que una verificación de referencias
compara primero.

**2. TDCLA: no es un error claro.** La constancia está membretada
*"Tecnologías del Conocimiento S.A.C."* y firmada en esa razón social; TDCLA es
el nombre comercial (tdcla.com). El sitio no está mintiendo.

Usar **"Tecnologías del Conocimiento S.A.C. (TDCLA)"**: cubre la razón social del
documento y el nombre por el que se la conoce.

## Orden de ejecución

### Bloque 1 — lo que un reclutador ve primero

**1.1 Reemplazar `public/CV_Esteban_Abanto_ES.pdf` y `_EN.pdf` por los de
`cv/dist/`.**

Es lo que entrega el botón "Descargar CV". Hoy sirve el CV viejo. Es el arreglo
de mayor impacto y el más barato de toda la lista: un reclutador que descarga el
CV se lleva la versión desactualizada aunque el sitio esté perfecto. **Hacer esto
primero, hoy.**

### Bloque 2 — la contradicción que bloquea postular

El CV dice "Software Developer — Full-Stack Web & C#/.NET" y enlaza al sitio. El
sitio dice "Game Development (Enfoque Principal)". Un reclutador hace click y ve
otra persona.

- **Stack** (`messages/*.json`): sacar "Game Development (Enfoque Principal)".
  Columna = software/web. Game dev baja a una mención, sin sección propia.
  Aprovechar y **eliminar las barras de porcentaje**: la investigación ATS de
  `docs/cv-research.md` las señala como información que se pierde, y un "Unity 92%"
  contra un "Next.js 70%" dice lo contrario de lo que quieres que diga.
- **Hero** (`messages/*.json`): no arrancar con "videojuegos interactivos".
- **Metadata** (`src/app/layout.tsx`): "Backend & Game Development" → framing
  full-stack.
- **`src/app/tv-peru/*`**: hoy están enmarcadas como juego. **Es la mejor carta
  del CV y el sitio la está tirando.** Lo que hay que contar: sistema en tiempo
  real, en producción, al aire en televisión nacional, migrado por él de Unity a
  Next.js + Vercel + Supabase + Cloudflare, con versionado por despliegue y
  rollback instantáneo. Ese es el argumento que hace creíble el pivote a web.
- **Proyectos** (`messages/*.json`): 5 de 8 son game jams. Reemplazar por los web
  reales: `gym-tracker`, `rally-app`, `Ephemeral-Chat`.

**Sobre añadir "apothecary": todavía no.** El repo se llama
`UTP-AnalisisDeSistemas-ApothecaryInventory`, no tiene descripción, y el nombre
anuncia "tarea de universidad" antes de que nadie mire el código. Como está,
resta. Si se va a incluir, primero hay que renombrarlo y darle README; eso se
hace en su repo, no aquí.

**Nuevo, no estaba en la lista: el seudónimo "Baphomet".** Los proyectos de game
jam salen firmados así. El CV, LinkedIn y GitHub van como Esteban Abanto, y los
certificados como Wilder Esteban Abanto García. Un cuarto nombre en el portafolio
solo agrega ruido. Si esos proyectos se quedan, va el nombre real; si se van con
la limpieza del bloque 2, el problema desaparece solo.

### Bloque 3 — datos incorrectos

Todos en `messages/es.json` + `en.json`, sección `experience`. Los valores
correctos salen de `historial.md`:

| Qué | Corregir a |
|---|---|
| "TV Perú (Canal 7)" | **IRTP / TV Perú**. Y la descripción debe mencionar la migración web (ver bloque 2) |
| "Tecnologías del Conocimiento SAC" | **Tecnologías del Conocimiento S.A.C. (TDCLA)** — ver corrección 2 |
| Net Dreams: "GameMaker/JavaScript" | **Unity / C#** |
| Net Dreams: fin "Enero 2022" | **Diciembre 2021** |
| Rebel Rabbit | **Febrero 2022 – Marzo 2023**. Ver corrección 1: el sitio ya está bien |
| Falta GDP Studios | Añadir: **Nov 2024 – Feb 2025**, Software Developer. Unity/C# en producción para tragamonedas sobre Linux; refactor grande y mentoring a un equipo de ingenieros C++ |

### Bloque 4 — cosmético, cuando haya tiempo

Footer "© 2025" → 2026 · typo "Personajes" duplicado (TD-003) · emojis en Footer
y `tv-peru` (❤️, 📺, ✓) contra la regla global · `next-intl` sin usar (TD-002).

Nada de esto bloquea una postulación. No dejar que consuma el tiempo de los
bloques 1 y 2.

## Regla de honestidad

Aplica a todo lo que se escriba en el sitio: **framing sí, mentira no.** No
etiquetar el vínculo laboral (nada de "freelance" ni "honorarios"), no poner
"full-time" en IRTP —no lo es—, y los cinco empleos se mantienen aunque la
narrativa web quedara más limpia sin alguno.

Presentar TV Perú como sistema web **no** es framing forzado: es exactamente lo
que el sistema es hoy.

## Al terminar

Avisar a `PersonalDevelopment/profesional/` qué quedó hecho, para actualizar el
estado en `busqueda/estrategia.md`. Y actualizar RM-004 en el logbook: el CV dejó
de ser la fuente de verdad de los hechos; ahora lo es `historial.md`.

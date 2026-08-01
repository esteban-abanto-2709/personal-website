# Roadmap

Trabajo comprometido: lo que sí se va a hacer. Código `RM-###` (nunca se reutiliza).
Al terminar una tarea se mueve al changelog y se borra de aquí.

**Formato de cada entrada:**
- **Objetivo:** qué se quiere lograr.
- **Hecho cuando:** criterio claro de finalización.
- **Fecha** y **Estado** (Abierto / En progreso).

---

## [RM-001] Reposicionar la web de game dev a full-stack/web
- **Objetivo:** Voltear la narrativa del portafolio. Full-stack/web pasa a ser la columna; game dev se degrada a mención de hobby (una línea, sin sección propia). Quitar game jams como proyectos destacados. TV Perú se conserva pero presentado como sistema web (no como juego). Ajustar Hero, Stack, Experience, Projects y los textos es/en.
- **Hecho cuando:** Ningún componente presenta game dev como eje principal; los game jams ya no figuran en Proyectos; TV Perú aparece como sistema web; `es.json` y `en.json` actualizados y coherentes entre sí.
- **Fecha:** 2026-07-31 · **Estado:** Abierto

## [RM-002] Investigar estructura de CV ATS-friendly y fabricar plantilla iterable
- **Objetivo:** Investigar la estructura de CV más recomendada y **legible por filtros ATS/IA** (orden de secciones, formato de una sola columna, qué evita el parseo, palabras clave). El riesgo real: si un algoritmo lee mal la info, se descarta el CV antes de llegar a un humano. Producir una plantilla base (PDF u otro formato) lista para iterar por oferta.
- **Hecho cuando:** Existe un documento con los hallazgos de la investigación (qué estructura usar, qué evitar, cómo validar que un ATS lo lee bien) **y** un primer CV generado siguiendo esa estructura, listo para iterar.
- **Notas:** CV en ES **y** EN. Inglés del usuario es básico (se defiende en conversación, no fluido) → declarar nivel de idioma con honestidad (CEFR), no inflar.
- **Fecha:** 2026-07-31 · **Estado:** En progreso (2026-07-31)

## [RM-003] Flujo asistido de búsqueda y postulación a ofertas
- **Objetivo:** Definir un flujo repetible donde Claude busca ofertas relevantes (full-stack/web, Perú/remoto), las contrasta contra el perfil con el criterio del 60% de match, y ayuda a postular: adaptar CV y carta por oferta, romper el auto-descarte por inseguridad. Límites conocidos: Claude puede buscar listados y redactar/adaptar, pero **no** puede auto-enviar formularios ni superar logins/captcha; el envío final lo hace el usuario.
- **Hecho cuando:** Hay un flujo acordado + una primera tanda de ofertas encontradas y evaluadas contra el perfil, con al menos una postulación preparada para enviar.
- **Fecha:** 2026-07-31 · **Estado:** Abierto

# Deuda Técnica

Registro de atajos, decisiones pendientes y riesgos a futuro de este proyecto.
Código `TD-###` (nunca se reutiliza). Al resolverse, la entrada se mueve al
changelog y se borra de aquí.

**Formato de cada entrada:**
- **Ubicación:** `archivo:línea` afectado.
- **Riesgo:** del 1 al 10 (1-3 cosmético · 4-6 ralentiza/moderado · 7-9 bug latente o seguridad · 10 crítico).
- **Problema:** qué está mal, sintetizado.
- **Impacto futuro:** qué puede causar si no se atiende.
- **Fecha** y **Estado** (Abierto / En progreso).

---

## [TD-005] `pnpm lint` falla en LocaleProvider
- **Ubicación:** `src/lib/i18n/components/LocaleProvider.tsx:47`
- **Riesgo:** 4/10
- **Problema:** dos errores de `react-hooks`: `setState` síncrono dentro del `useEffect` y `loadMessages` usado antes de declararse.
- **Impacto futuro:** el lint no pasa, así que deja de servir como verificación y tapa errores nuevos.
- **Fecha:** 2026-11-13 · **Estado:** Abierto

## [TD-006] `<html lang>` fijo en inglés y parpadeo de idioma
- **Ubicación:** `src/app/layout.tsx:21`
- **Riesgo:** 3/10
- **Problema:** el servidor siempre renderiza en inglés con `lang="en"`; el cambio a español ocurre en el cliente y el atributo `lang` nunca se actualiza.
- **Impacto futuro:** un visitante en español ve primero el texto en inglés, y buscadores y lectores de pantalla reciben el idioma equivocado.
- **Fecha:** 2026-11-13 · **Estado:** Abierto

## [TD-007] El contenedor de desarrollo no recarga los cambios en Windows
- **Ubicación:** `compose.yaml:5`
- **Riesgo:** 3/10
- **Problema:** `next dev` (Turbopack) dentro del contenedor no detecta los cambios de archivos del bind mount de Windows; `WATCHPACK_POLLING` no tiene efecto y el HMR por WebSocket falla.
- **Impacto futuro:** tras cada cambio hay que correr `docker compose restart web` para verlo; es fácil revisar una versión vieja sin darse cuenta.
- **Fecha:** 2026-11-13 · **Estado:** Abierto

## [TD-008] Claves de `contact` declaradas en el tipo pero ausentes en los JSON
- **Ubicación:** `src/lib/i18n/types/index.ts:92`
- **Riesgo:** 2/10
- **Problema:** el tipo `contact` declara `description2`, `description3`, `sendProposal`, `letsTalk` y `connect`, que no existen en `es.json` ni en `en.json` y nadie usa.
- **Impacto futuro:** el tipo deja de describir los datos reales; un componente podría usar una de esas claves sin error de compilación y mostrar la clave en crudo.
- **Fecha:** 2026-11-13 · **Estado:** Abierto

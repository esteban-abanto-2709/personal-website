# Roadmap

Trabajo comprometido: lo que sí se va a hacer. Código `RM-###` (nunca se reutiliza).
Al terminar una tarea se mueve al changelog y se borra de aquí.

**Formato de cada entrada:**
- **Objetivo:** qué se quiere lograr.
- **Hecho cuando:** criterio claro de finalización.
- **Fecha** y **Estado** (Abierto / En progreso).

---

## [RM-005] Migrar de npm a pnpm
- **Objetivo:** Cambiar el gestor de paquetes del proyecto de npm a pnpm (instalación, scripts, lockfile), por velocidad de instalación y ahorro de disco.
- **Hecho cuando:** Existe `pnpm-lock.yaml` y se elimina `package-lock.json`; `pnpm install` y `pnpm run build` funcionan; README y CLAUDE.md reflejan pnpm.
- **Fecha:** 2026-08-26 · **Estado:** Abierto

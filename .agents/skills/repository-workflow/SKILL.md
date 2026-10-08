---
name: repository-workflow
description: Use when starting or implementing a bug, documentation change, or feature in this repository, or when preparing its pull request. Create or identify a GitHub issue first, use a conventional branch named from the issue type, validate the change, and prepare a PR that closes the issue and targets develop for squash merge.
---

# Repository workflow

Lleva cada cambio desde una issue trazable hasta una PR lista para **squash merge** en `develop`.

## Flujo obligatorio

### 1. Crear o identificar la issue

Antes de editar código, crea una issue en GitHub o vincula una issue existente. Clasifícala como una de estas tres clases:

- **bug**: algo existente no funciona como se espera.
- **documentation**: contenido, ejemplos o instrucciones que deben añadirse o corregirse.
- **feature**: comportamiento nuevo.

La issue debe describir el problema u objetivo, el alcance y un criterio verificable
de aceptación. Mantenla como fuente de verdad cuando el feedback cambie nombres,
alcance o validaciones durante la implementación. Si la petición no encaja claramente
en una clase, resuelve la clasificación antes de crear la rama.

### 2. Crear la rama convencional

Parte de la rama base acordada por el repositorio y crea una rama con este formato:

```text
<tipo>/<issue>-<descripcion-corta>
```

Usa estos prefijos:

| Issue | Prefijo |
| --- | --- |
| bug | `fix/` |
| documentation | `docs/` |
| feature | `feat/` |

Ejemplos: `fix/42-invalid-email-error`, `docs/17-contributing-guide`, `feat/63-date-picker`.

La descripción debe estar en kebab-case, ser breve y reflejar la issue. Conserva el número de issue para mantener la trazabilidad.

### 3. Implementar y validar

Lee las convenciones y la configuración existentes antes de cambiar archivos. Implementa solo el alcance de la issue y añade o actualiza las pruebas y documentación directamente relacionadas.

Ejecuta los comandos de validación definidos por el repositorio. En este proyecto, como mínimo:

```bash
pnpm test
pnpm lint
pnpm build
pnpm build-storybook
```

Corrige los fallos que introduzca el cambio. La tarea no está lista mientras la aceptación de la issue no sea comprobable y las validaciones aplicables no pasen.

### 4. Preparar la pull request

Abre una PR desde la rama convencional hacia `develop`. El título debe describir el cambio y mantener el tipo de la rama cuando sea útil, por ejemplo `feat: add date picker`.

La descripción de la PR debe incluir siempre una línea que cierre la issue, usando el número real:

```text
Closes #<issue>
```

Incluye también un resumen breve, las pruebas ejecutadas y cualquier validación manual
pendiente. Mantén el detalle del alcance y los criterios en la issue. Cuando cambie UI,
aplica `storybook-pr-visuals`: la PR no contiene capturas ni inventarios de rutas, solo
el estado de la revisión local. No abras una PR sin una issue enlazada.

### 5. Fusionar

La PR se fusiona exclusivamente con **Squash and merge** y tiene como rama destino `develop`. Después de la fusión, comprueba que la issue quedó cerrada y que el estado de CI es correcto.

## Criterio de finalización

El cambio está terminado cuando existe una issue clasificada, la rama sigue el formato convencional con su número, la implementación cumple los criterios de aceptación, las validaciones pasan, la PR apunta a `develop` y su descripción contiene `Closes #<issue>`. La fusión queda pendiente si no la ejecuta una persona con permisos.

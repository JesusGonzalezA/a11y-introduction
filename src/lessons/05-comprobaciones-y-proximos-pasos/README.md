# Módulo 5. Primeras comprobaciones y próximos pasos

**≈ 10 minutos.** Herramientas sencillas para ver lo que reciben las personas, sus límites y cómo seguir.

| Lección | Persona y tarea | Errores → solución | Ejemplo |
| --- | --- | --- | --- |
| [5.1 Inspeccionar el contenido con bookmarklets](./05.01-bookmarklets/README.md) | Ver la exposición como la recorre Elena | Niveles desordenados, `alt` con nombre de archivo → jerarquía y `alt` útil | `museo` |
| [5.2 Detectar problemas con Accessibility Insights](./05.02-accessibility-insights/README.md) | Elena pide cita en un taller | Texto sin asociar al campo → `label` | `taller-bicicletas` |
| [5.3 Cómo continuar aprendiendo](./05.03-como-continuar-aprendiendo/README.md) | Repaso de las cinco personas | — | — |

## Preparación antes de clase

- Instalar los bookmarklets Headings e Images en la barra de marcadores.
- Instalar Accessibility Insights for Web en Chrome o Edge.

## Materiales

| Material | Ruta local (`pnpm dev`) |
| --- | --- |
| Diapositivas | `/diapositivas/#/modulo-5` |
| Ejemplos | `/ejemplos/#modulo-5` |
| Contenido | `/contenido/modulo-5` y `/contenido/<lección>` |
| Notas del presentador | `/contenido/<lección>/presentador` |

El índice `/` enlaza todo por módulo y lección.

## Evidencia y límites

- [Auditoría del módulo](./audit.md) e [investigación](../../../docs/research/05-comprobaciones-y-proximos-pasos.md).
- Los tests usan axe en JSDOM; no equivalen a ejecutar FastPass ni los bookmarklets.

## Matriz manual pendiente

| Entorno | Qué revisar |
| --- | --- |
| Chrome/Edge | Ejecutar Headings, Images, FastPass y Tab stops con y sin arreglo |
| Autor | Revisión visual y ensayo |

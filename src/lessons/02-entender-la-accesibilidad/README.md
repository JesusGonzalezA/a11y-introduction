# Módulo 2. Entender la accesibilidad

**≈ 10 minutos.** Quién usa la web y cómo, y qué entiende el navegador de nuestro HTML.

| Lección | Persona y tarea | Error → solución | Ejemplo |
| --- | --- | --- | --- |
| [2.1 Personas, formas de interacción y barreras](./02.01-personas-interaccion-y-barreras/README.md) | Andrés (teclado) compra una taza | `div` con clic → `button` | `tienda-online` |
| [2.2 Cómo interpreta el navegador nuestra interfaz](./02.02-como-interpreta-el-navegador-la-interfaz/README.md) | Elena (lector) elige sesión de cine | Sin rol, estado ni aviso → `button`, `disabled`, `role="status"` | `cine` |

## Materiales

| Material | Ruta local (`pnpm dev`) |
| --- | --- |
| Diapositivas | `/diapositivas/#/modulo-2` |
| Ejemplos | `/ejemplos/#modulo-2` |
| Contenido | `/contenido/modulo-2` y `/contenido/<lección>` |
| Notas del presentador | `/contenido/<lección>/presentador` |

El índice `/` enlaza todo por módulo y lección.

## Evidencia y límites

- Tests de cada página junto a su ejemplo; tests de slides en `src/lessons/slides.test.tsx`.
- [Auditoría del módulo](./audit.md) e [investigación](../../../docs/research/02-entender-la-accesibilidad.md).

## Matriz manual pendiente

| Entorno | Qué revisar |
| --- | --- |
| Chrome y Safari, teclado | Tab, Shift + Tab, foco visible, Enter y Espacio |
| NVDA + Chrome, VoiceOver + Safari | Rol y nombre de los botones, estado deshabilitado, anuncio de la confirmación |
| Control por voz | Activar «Añadir a la cesta» por su nombre |
| Autor | Revisión visual y ensayo |

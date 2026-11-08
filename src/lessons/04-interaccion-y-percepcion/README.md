# Módulo 4. Permitir la interacción y la percepción

**≈ 19 minutos.** Teclado y foco; color, contraste y tamaño del texto; animaciones y preferencias del sistema.

| Lección | Persona y tarea | Errores → solución | Ejemplo |
| --- | --- | --- | --- |
| [4.1 Navegación por teclado y foco visible](./04.01-teclado-y-foco-visible/README.md) | Andrés (teclado) entra en la biblioteca | `outline: none`, cabecera fija tapa el foco → `:focus-visible`, `scroll-padding-top` | `biblioteca` |
| [4.2 Contraste, color y tamaño del texto](./04.02-contraste-color-y-ampliacion/README.md) | Manuel (daltonismo, letra grande) consulta su autobús | Solo color, gris claro, `px`/`vw`, caja rígida → texto, contraste, `rem`/`clamp()`, caja flexible | `horarios` |
| [4.3 Animaciones y movimiento](./04.03-animaciones-y-movimiento/README.md) | Ana (trastorno vestibular) compra un abono | Animación que ignora «Reducir movimiento», cartel sin pausa → `prefers-reduced-motion`, botón de pausa | `festival` |

Este módulo enseña también **selectores y media queries de CSS** ligados a la
persona (`:focus-visible`, `prefers-reduced-motion`, `prefers-contrast`,
`forced-colors`) y **ajustes del sistema operativo y del navegador** (tamaño de
letra, «Reducir movimiento»).

## Materiales

| Material | Ruta local (`pnpm dev`) |
| --- | --- |
| Diapositivas | `/diapositivas/#/modulo-4` |
| Ejemplos | `/ejemplos/#modulo-4` |
| Contenido | `/contenido/modulo-4` y `/contenido/<lección>` |
| Notas del presentador | `/contenido/<lección>/presentador` |

El índice `/` enlaza todo por módulo y lección.

## Evidencia y límites

- [Auditoría del módulo](./audit.md) (4.1 y 4.2) e [investigación](../../../docs/research/04-interaccion-y-percepcion.md).
- 4.3 documenta sus criterios en su propio [README](./04.03-animaciones-y-movimiento/README.md).
- JSDOM no calcula estilos ni media queries: contraste, tamaño de letra, reflujo y movimiento se revisan en navegador.

## Matriz manual pendiente

| Entorno | Qué revisar |
| --- | --- |
| Chrome y Safari, teclado | Foco visible y no tapado en todo el recorrido |
| Navegador, ajustes | Tamaño de fuente «Muy grande», zoom 200 %/400 %, ancho 320 px |
| macOS/Windows/devtools | «Reducir movimiento» activado y desactivado en `festival` |
| Autor | Revisión visual y ensayo |

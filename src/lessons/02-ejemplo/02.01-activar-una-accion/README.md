# 2.1 Activar una acción

Lección de muestra de la plantilla. Sustitúyela al definir el curso concreto.
Duración orientativa: 3–5 minutos.

## Objetivo y alcance

Una persona necesita reconocer una acción y ejecutarla con puntero o teclado.
El ejemplo enseña el botón HTML, su nombre visible y el estado deshabilitado.
No implementa navegación, envío, menús, diálogos ni botones de alternancia.

## Materiales y ejecución

- [Slides](./slides.tsx): dos diapositivas consecutivas de la lección 2.1.
- [Guion](./presenter.md): un apartado por slide.
- [Componente](./examples/Button/Button.tsx), [stories](./examples/Button/Button.stories.tsx)
  y [pruebas](./examples/Button/Button.test.tsx).
- Desde la raíz: `pnpm install`, `pnpm dev` y `pnpm storybook` en otra terminal.
- Storybook: `Módulo 2: Ejemplo/Lección 2.1: Activar una acción/Componentes/Button`.
- Variantes: `Default` y `Disabled`. La activación se registra en el panel Actions.

## Contrato accesible

`Button` renderiza un `button` con `type="button"`. El texto visible proporciona
su nombre; no necesita un rol ARIA adicional. `onClick` conecta la acción que
decida el escenario y `disabled` utiliza el estado nativo. El foco permanece en
el botón cuando la acción no cambia de contexto.

| Interacción | Resultado |
| --- | --- |
| Tab / Shift + Tab | Entra y sale del botón habilitado en el orden del documento. |
| Enter / Espacio | Ejecuta la acción una vez. |
| Clic | Ejecuta la acción una vez. |
| Botón con `disabled` | No se activa y queda fuera del recorrido de Tab. |

MagentaA11y también documenta `aria-disabled` para conservar controles inactivos
en el recorrido de foco. Esta muestra elige `disabled` nativo para enseñar una
acción completamente inactiva; no implementa esa otra variante.

## Fuentes y matriz de comprobación

- [HTML: button](https://html.spec.whatwg.org/multipage/form-elements.html#the-button-element).
- [WAI-ARIA APG: Button](https://www.w3.org/WAI/ARIA/apg/patterns/button/).
- [MagentaA11y: Button, incluido Gherkin](https://www.magentaa11y.com/web-criteria/component/button).
- [Fuente del Gherkin de MagentaA11y](https://github.com/tmobile/magentaA11y/blob/main/public/content/documentation/web/component/button.md).

Ejemplo de criterio original: “THEN when I use the spacebar and/or enter key to
activate the button I SEE the intended action occurs”.

La tabla clasifica todos los grupos de criterios de teclado, lector de escritorio
y lector móvil de esa fuente para el alcance de este botón.

| Criterio y fuente | Tipo | Evidencia o comprobación pendiente |
| --- | --- | --- |
| Rol y nombre, HTML/APG/MagentaA11y | Automatizado (DOM) | Test «expone un botón con nombre visible y no envía formularios». |
| Alcanzar con Tab, HTML/MagentaA11y | Automatizado (DOM) | Test de activación con cada tecla comprueba el foco antes y después. |
| Activación con Enter y Espacio, APG/Gherkin | Automatizado | Test parametrizado «activa una sola vez…». |
| Activación por puntero, HTML | Automatizado | Test «activa una sola vez mediante el puntero». |
| Estado deshabilitado, HTML/MagentaA11y | Automatizado (DOM) | Test «omite el botón deshabilitado…» verifica estado, foco y ausencia de acción. |
| Reglas automáticas de accesibilidad | Automatizado | Axe en las variantes habilitada y deshabilitada. |
| Foco visible y salida con Shift + Tab, MagentaA11y/APG | Manual | Chrome y Safari: recorrer ambas stories; comprobar indicador, orden y salida. |
| Anuncios de nombre, rol, estado y activación, Gherkin de escritorio | Manual | NVDA + Chrome (Windows), VoiceOver + Safari (macOS); probar teclado y navegación de lectura para el botón deshabilitado. |
| Gestos, anuncios y activación, Gherkin móvil | Manual | TalkBack + Chrome (Android), VoiceOver + Safari (iOS); deslizar y doble toque. |
| Grupo/popup, pressed y expanded, MagentaA11y | No aplicable | El botón no abre un popup y no representa alternancia ni expansión. |
| Contraste, zoom y dimensiones | Manual | Comprobar texto, foco y estados en navegador; objetivo mínimo de diseño 44 × 44 CSS px. |

Las comprobaciones manuales están pendientes del autor. JSDOM y axe no prueban
anuncios reales, gestos, contraste ni el aspecto del foco. La muestra es una base
para enseñar y verificar el patrón, no una declaración de conformidad completa.

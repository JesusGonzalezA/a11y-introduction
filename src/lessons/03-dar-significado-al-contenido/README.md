# Módulo 3. Dar significado al contenido

**18 minutos**, incluidas las demostraciones. Fuente: [issue #4](https://github.com/JesusGonzalezA/a11y-introduction/issues/4)
y [temario #1](https://github.com/JesusGonzalezA/a11y-introduction/issues/1).
La persona necesita localizar información de una actividad, comprenderla y saber
cómo inscribirse. Primero descubre la organización del contenido; después, el
propósito de cada imagen, enlace y control.

| Lección | Objetivo | Duración | Slides (portada = 1) |
| --- | --- | --- | --- |
| [3.1 Estructura de página y orden de lectura](03.01-estructura-y-orden-de-lectura/README.md) | Localizar secciones y conservar una secuencia con sentido | 9 min | 20–26 (`/#/19` a `/#/25`) |
| [3.2 Imágenes, enlaces y controles comprensibles](03.02-imagenes-enlaces-y-controles/README.md) | Comunicar información, destino, acción y dato solicitado | 9 min | 27–34 (`/#/26` a `/#/33`) |

El guion y las slides mantienen 7 y 8 apartados respectivamente. Tiempos previstos
540 s por lección; **ensayo cronometrado pendiente**. Teclado/foco y percepción se
profundizan en el módulo 4; herramientas de auditoría en el 5. No se implementan
validación avanzada, datos persistentes, peticiones de red ni patrones ARIA compuestos.

## Ejecutar y revisar

Desde la raíz: `pnpm install --frozen-lockfile`, `pnpm dev` y `pnpm storybook`.
Slides: `http://localhost:5173`. Storybook: `http://localhost:6006`.
`VITE_STORYBOOK_URL` configura los enlaces de las slides. En esta sesión se usan
**5175 y 6008** para no ocupar los servidores de los módulos anteriores:

```bash
VITE_STORYBOOK_URL=http://localhost:6008 pnpm dev --host 127.0.0.1 --port 5175 --strictPort
pnpm storybook --host 127.0.0.1 --port 6008 --ci
```

Las siguientes rutas se añaden al origen de Storybook. Para la demo con lector
usar el documento aislado `/iframe.html?id=ID&viewMode=story`; los enlaces de las
slides ya lo hacen. `pageLayout: true` cambia el contenedor global de Storybook a
div únicamente para estas páginas: evita main anidado. Las stories anteriores
conservan su contenedor y sus rutas.

| Superficie | ID de story |
| --- | --- |
| 3.1 Contraejemplo deliberado: estructura y secuencia | `m3-activity-structure--contraejemplo` |
| 3.1 Solución: estructura y orden | `m3-activity-structure--estructura-corregida` |
| 3.2 Contraejemplo deliberado: información insuficiente | `m3-activity-content--contraejemplo` |
| 3.2 Solución: nombres y etiqueta | `m3-activity-content--contenido-corregido` |
| 3.2 Solución: imagen redundante en contexto | `m3-activity-content--imagen-decorativa` |

## Interfaces y etapas conservadas

- [Interfaces compartidas entre módulos](../shared/README.md): datos estables de
  actividad y `RegistrationAction`. La extracción mantiene la acción, confirmación,
  estado cerrado y apariencia del módulo 2; sus stories siguen recuperables.
- `shared/ActivityPage.tsx`: composición de página completa, una por documento.
  `stage: 'structure' | 'content'` delimita la lección; `barrier` introduce solo
  las barreras de esa etapa; `decorative` añade el equivalente textual visible y
  vacía alt en la etapa de contenido; `onRegister` observa la acción simulada.
- `ActivityStructure` expone barrier/onRegister; `ActivityContent` añade decorative.
  Son escenarios co-localizados con sus stories/tests, no nuevos controles genéricos.
- La ilustración SVG local es original del curso. Se usa como `img`, con alt en el
  HTML anfitrión. El title interno permite abrir el archivo aislado; no sustituye
  el alt. La variante redundante conserva la información en un párrafo visible.

La etapa 3.1 añade encabezados y regiones, sin campo ni imagen. La 3.2 conserva esa
estructura e introduce el nombre opcional. El formulario intercepta el envío;
el botón submit activa la simulación una sola vez. La confirmación permanece en
status y no traslada el foco de teclado. No hay datos reales ni estados de error,
required, readonly, selección, expansión o popup.

## Criterios y límites de evidencia

La [investigación previa](../../../docs/research/03-dar-significado-al-contenido.md)
contiene el inventario de criterios y los originales MagentaA11y fijados por commit,
con paráfrasis y enlaces para respetar condiciones de uso. La [auditoría](audit.md)
cruza por separado tests y documentación contra ese contrato. No se declara
conformidad completa con toda la guía ni con WCAG a partir de axe.

| Área | Automatizado | Manual o no aplicable |
| --- | --- | --- |
| Encabezados/regiones | Roles, nombres, niveles, un main, jerarquía DOM y Tab sin paradas añadidas | Descubrimiento y lectura real pendientes; headings ARIA custom NA |
| Secuencia | Pasos en orden DOM y barrera invertida | Comprensión y lectura con AT pendientes; flowto/tabindex positivo NA |
| Imágenes | alt informativo; decorativa con alt vacío y texto equivalente | Pertinencia editorial revisada; lectura real pendiente; complejas/funcionales NA |
| Enlace | Nombre visible, href/destino, Tab y evento Enter/clic | Navegación real comprobada técnicamente; AT/móvil/voz pendientes |
| Campo | label/for/id, nombre/type/autocomplete, foco por etiqueta, escribir/editar, etiqueta persistente | Teclado virtual/AT/voz pendientes; required/error/readonly/disabled/grupo NA |
| Acción y resultado | Contrato heredado más integración submit, activación única, status previo y foco | Anuncios reales pendientes; toggles/popup NA |
| Slides | Títulos, registro ordenado, 1:1 con guion, enlaces y axe | Revisión visual humana y ensayo pendientes |

Una sola navegación usa nombre «Actividad». No existe navegación adicional en el
pie ni enlace de salto a main: no aplican sus condicionales. El campo no tiene
ayuda asociada ni errores; la indicación de simulación es contenido general del
formulario. Si se amplía la API, reclasificar esos criterios y probarlos.

## Matriz manual pendiente

Registrar fecha, SO, versión de navegador/AT, configuración, recorrido y resultado.

| Entorno | Comprobación | Estado |
| --- | --- | --- |
| NVDA + Firefox y Chrome, Windows | H/Shift+H, D/Shift+D, lectura secuencial; nombre/rol/etiqueta, alt y confirmación | No ejecutado |
| VoiceOver + Safari, macOS | Rotor de encabezados/regiones, secuencia, alt informativo y omisión de redundante, campo/acción/resultado | No ejecutado |
| VoiceOver iOS/Safari y TalkBack Android/Chrome | Deslizar y doble toque; encabezados/regiones, imágenes, controles y teclado virtual | No ejecutado |
| Control por voz | Localizar por texto visible y activar enlace, campo y botón | No ejecutado |
| Chrome/Safari/Firefox, teclado humano | Tab/Shift+Tab, foco perceptible, enlaces al destino, envío simulado; Safari con navegación de teclado habilitada | Revisión humana pendiente |
| Zoom 200%/400%, ancho 320 CSS px | Texto, controles, lectura y reflujo sin recortes | No ejecutado |
| Autor humano | Revisión visual final de cinco stories y quince slides; ensayo 9 + 9 minutos | Pendiente |

El navegador y las comprobaciones de geometría/colores no ejecutan un lector.
La demo auditiva está preparada y reproducible, pero no se da por realizada.
Los resultados reales de tests/builds y revisión técnica están en [audit.md](audit.md).

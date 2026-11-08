# Módulo 4. Permitir la interacción y la percepción

**17 minutos**, incluidas demos. [Issue #5](https://github.com/JesusGonzalezA/a11y-introduction/issues/5),
[temario #1](https://github.com/JesusGonzalezA/a11y-introduction/issues/1).
La persona debe poder completar un formulario sin ratón y localizar el foco
(4.1, acceso a una biblioteca), y entender estados y conservar la información al
ampliar (4.2, horarios de autobús).

| Lección | Objetivo | Duración | Slides (portada = 1) |
| --- | --- | --- | --- |
| [4.1 Navegación por teclado y foco visible](04.01-teclado-y-foco-visible/README.md) | Recorrer, activar, localizar foco y salir | 9 min | 35–41 (`/#/34` a `/#/40`) |
| [4.2 Contraste, color y ampliación del contenido](04.02-contraste-color-y-ampliacion/README.md) | Leer estados y conservar contenido/controles al ampliar | 8 min | 42–48 (`/#/41` a `/#/47`) |

Siete slides y siete apartados de guion por lección. Tiempos nominales: 540 y 480 s.
**Ensayo cronometrado pendiente**, incluidas las demos. Herramientas de auditoría
se desarrollan en el módulo 5; aquí basta inspeccionar una pareja de colores.
No se añaden widgets ARIA compuestos, validación, backend ni datos persistentes.

## Ejecutar y revisar

Desde la raíz: `pnpm install --frozen-lockfile` y `pnpm dev`. Slides en
`http://localhost:5173`; páginas de ejemplo en `http://localhost:5173/ejemplos/`.
Cada página se abre con la barrera. El botón flotante **Aplicar arreglo** la
corrige sin recargar y **Ver cambios** resalta dónde está cada cambio y explica
por qué. `?arreglo=1` abre directamente la versión corregida; los enlaces de las
slides usan ambas rutas.

| Lección | Página | Ruta | Arreglos |
| --- | --- | --- | --- |
| 4.1 | Acceso a la cuenta de una biblioteca | `/ejemplos/biblioteca` | `:focus-visible` en lugar de `outline: none`; `scroll-padding` bajo la cabecera fija |
| 4.2 | Próximas salidas de una línea de autobús | `/ejemplos/horarios` | Estado escrito junto al color; texto secundario con contraste suficiente; aviso sin tamaño fijo ni recorte |

## Páginas de ejemplo y límites

`LibraryLogin` y `BusTimetable` son escenarios de página completa. Ocultar el foco
cambia solo CSS acotado a la página; **no intercepta Tab** y la herramienta
flotante conserva su propio foco. La trampa de teclado se explica con un fragmento
no ejecutable. El margen de desplazamiento de 4.1 se aplica como clase en `html`
mientras la página está montada con el arreglo.

En 4.2, `#b4b4b4` sobre blanco da 2,07:1 y `#52525b` da 7,73:1 (calculado con la
fórmula de luminancia relativa de WCAG). El aviso con barrera tiene ancho y alto
fijos con `overflow: hidden`; la versión corregida crece con su contenido. Los
puntos de color son decorativos (`aria-hidden`) y nunca son la única señal en la
versión corregida. JSDOM no calcula contraste, foco dibujado ni reflujo.

[Investigación previa](../../../docs/research/04-interaccion-y-percepcion.md).
La [auditoría](audit.md) registra la evidencia de los ejemplos anteriores a las
páginas de ejemplo; su matriz manual sigue vigente como lista de comprobaciones.
No se declara conformidad completa mediante axe ni mediante esta muestra.

## Matriz manual pendiente

Registrar fecha, SO, navegador/versión, configuración, recorrido y resultado.

| Entorno | Comprobación | Estado |
| --- | --- | --- |
| NVDA + Firefox/Chrome, Windows | Leer nombre/rol, editar campo, activar enlaces/botón, escuchar confirmación, salir | No ejecutado |
| VoiceOver + Safari, macOS | Igual; rotor y navegación de formulario según configuración | No ejecutado |
| VoiceOver iOS/Safari y TalkBack Android/Chrome | Gestos, teclado virtual, nombre/rol, estados y confirmación; ambas orientaciones | No ejecutado |
| Control por voz | Alcanzar y activar por nombre visible | No ejecutado |
| Chrome, Firefox y Safari con teclado humano | Tab/Shift+Tab, Enter/Espacio, foco perceptible/no tapado por la cabecera fija, salida al entorno; habilitar navegación por teclado cuando proceda | Pendiente |
| Zoom real de navegador, 100→200% y 1280 al 400% | Texto legible, aviso completo, formulario operable y sin pérdida; pasos intermedios | Pendiente; no sustituir con zoom CSS |
| Autor humano | Revisión visual final de dos páginas de ejemplo en ambos estados y 14 slides, colores/foco/legibilidad y ensayo 9 + 8 min | Pendiente |

La revisión técnica de navegador y reflujo a 320 CSS px se registra en audit.md;
no equivale a zoom real, percepción humana ni anuncios de AT.

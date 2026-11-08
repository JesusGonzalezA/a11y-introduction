# Módulo 3. Dar significado al contenido

**18 minutos**, incluidas las demostraciones. Fuente: [issue #4](https://github.com/JesusGonzalezA/a11y-introduction/issues/4)
y [temario #1](https://github.com/JesusGonzalezA/a11y-introduction/issues/1).
La persona necesita localizar información, comprenderla y saber dónde actuar.
Primero descubre la organización del contenido (3.1, una receta); después, el
propósito de cada imagen, enlace y control (3.2, una noticia local).

| Lección | Objetivo | Duración | Slides (portada = 1) |
| --- | --- | --- | --- |
| [3.1 Estructura de página y orden de lectura](03.01-estructura-y-orden-de-lectura/README.md) | Localizar secciones y conservar una secuencia con sentido | 9 min | 20–26 (`/#/19` a `/#/25`) |
| [3.2 Imágenes, enlaces y controles comprensibles](03.02-imagenes-enlaces-y-controles/README.md) | Comunicar información, destino, acción y dato solicitado | 9 min | 27–34 (`/#/26` a `/#/33`) |

El guion y las slides mantienen 7 y 8 apartados respectivamente. Tiempos previstos
540 s por lección; **ensayo cronometrado pendiente**. Teclado/foco y percepción se
profundizan en el módulo 4; herramientas de auditoría en el 5. No se implementan
validación avanzada, datos persistentes, peticiones de red ni patrones ARIA compuestos.

## Ejecutar y revisar

Desde la raíz: `pnpm install --frozen-lockfile` y `pnpm dev`. Slides en
`http://localhost:5173`; páginas de ejemplo en `http://localhost:5173/ejemplos/`.
Cada página se abre con la barrera. El botón flotante **Aplicar arreglo** la
corrige sin recargar y **Ver cambios** resalta dónde está cada cambio y explica
por qué. `?arreglo=1` abre directamente la versión corregida; los enlaces de las
slides usan ambas rutas.

| Lección | Página | Ruta | Arreglos |
| --- | --- | --- | --- |
| 3.1 | Receta en un blog de cocina | `/ejemplos/receta` | Encabezados h1–h3; regiones header/nav/main/footer; pasos en una `ol` en orden de documento |
| 3.2 | Noticia en un periódico local | `/ejemplos/noticia` | alt del gráfico; alt vacío del icono; texto del enlace; texto del botón; label del campo |

## Páginas de ejemplo

`RecipePage` y `NewsArticle` son escenarios de página completa, no componentes
reutilizables. La barrera de 3.1 conserva el aspecto pero sustituye encabezados y
regiones por `div` y escribe los pasos al revés en el DOM, recolocados con
`column-reverse`. La de 3.2 mantiene controles nativos para concentrarse en la
información: alt con nombres de archivo, «Leer más», «Aceptar» y un campo con solo
placeholder. Las ilustraciones SVG son originales del curso; su title interno no
sustituye el alt. El formulario del boletín intercepta el envío y muestra una
confirmación de prueba en `status`, sin datos reales ni estados de error.

## Criterios y límites de evidencia

La [investigación previa](../../../docs/research/03-dar-significado-al-contenido.md)
contiene el inventario de criterios y los originales MagentaA11y fijados por commit,
con paráfrasis y enlaces para respetar condiciones de uso. La [auditoría](audit.md)
cruza por separado tests y documentación contra ese contrato. No se declara
conformidad completa con toda la guía ni con WCAG a partir de axe.

| Área | Automatizado | Manual o no aplicable |
| --- | --- | --- |
| Encabezados/regiones | Barrera sin encabezados ni regiones; arreglo con niveles h1/h2/h3 en orden, un main, banner, navegación con nombre y contentinfo | Descubrimiento y lectura real pendientes |
| Secuencia | Barrera con pasos invertidos en el DOM; arreglo con `ol` en orden | Comprensión con AT pendiente |
| Imágenes | Gráfico con alt de datos; icono con alt vacío fuera del árbol | Pertinencia editorial y lectura real pendientes |
| Enlace | Nombre descriptivo y destino existente | AT/móvil/voz pendientes |
| Campo y botón | label/for/id, type/autocomplete, etiqueta tras escribir, botón «Suscribirme», confirmación | Teclado virtual/AT/voz pendientes |
| Slides | Títulos, registro ordenado, 1:1 con guion, enlaces y axe | Revisión visual humana y ensayo pendientes |

La [auditoría](audit.md) registra la evidencia de los ejemplos anteriores a las
páginas de ejemplo; su matriz manual sigue vigente como lista de comprobaciones.

## Matriz manual pendiente

Registrar fecha, SO, versión de navegador/AT, configuración, recorrido y resultado.

| Entorno | Comprobación | Estado |
| --- | --- | --- |
| NVDA + Firefox y Chrome, Windows | H/Shift+H, D/Shift+D, lectura secuencial y lista de dos pasos; nombre/rol/etiqueta, alt y confirmación | No ejecutado |
| VoiceOver + Safari, macOS | Rotor de encabezados/regiones, secuencia, alt informativo y omisión de redundante, campo/acción/resultado | No ejecutado |
| VoiceOver iOS/Safari y TalkBack Android/Chrome | Deslizar y doble toque; encabezados/regiones, imágenes, controles y teclado virtual | No ejecutado |
| Control por voz | Localizar por texto visible y activar enlace, campo y botón | No ejecutado |
| Chrome/Safari/Firefox, teclado humano | Tab/Shift+Tab, foco perceptible, enlaces al destino, envío simulado; Safari con navegación de teclado habilitada | Revisión humana pendiente |
| Zoom 200%/400%, ancho 320 CSS px | Texto, controles, lectura y reflujo sin recortes | No ejecutado |
| Autor humano | Revisión visual final de dos páginas de ejemplo en ambos estados y quince slides; ensayo 9 + 9 minutos | Pendiente |

El navegador y las comprobaciones de geometría/colores no ejecutan un lector.
La demo auditiva está preparada y reproducible, pero no se da por realizada.
Los resultados reales de tests/builds y revisión técnica están en [audit.md](audit.md).

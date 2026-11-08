# Módulo 5. Primeras comprobaciones de accesibilidad y próximos pasos

**10 minutos**, incluidas demos. [Issue #6](https://github.com/JesusGonzalezA/a11y-introduction/issues/6),
[temario #1](https://github.com/JesusGonzalezA/a11y-introduction/issues/1).
La persona necesita reconocer qué información expone una página, localizar una
barrera, corregirla y saber qué revisar después. Se completa el programa de
**5 módulos, 11 lecciones y 60 minutos nominales**.

| Lección | Objetivo | Duración | Slides (portada = 1) |
| --- | --- | --- | --- |
| [5.1 Inspeccionar el contenido con bookmarklets](05.01-bookmarklets/README.md) | Revelar niveles y alt; interpretarlos en contexto | 4 min | 49–53 (`/#/48` a `/#/52`) |
| [5.2 Detectar problemas con Accessibility Insights](05.02-accessibility-insights/README.md) | Localizar, corregir, repetir; observar Tab stops | 4 min | 54–58 (`/#/53` a `/#/57`) |
| [5.3 Cómo continuar aprendiendo](05.03-como-continuar-aprendiendo/README.md) | Elegir continuación y recuperar recursos | 2 min | 59–61 (`/#/58` a `/#/60`) |

Cinco/cinco/tres slides y apartados de guion correspondientes. Los tiempos
240/240/120 s incluyen las demos, con herramientas preparadas antes de clase.
**Ensayo cronometrado pendiente**. No se añaden patrones avanzados ni una demo
en la recapitulación. La instalación completa se prepara fuera de la grabación;
5.1 sí explica y muestra cómo guardar/ejecutar un marcador.

## Ejecutar y revisar

Desde la raíz: `pnpm install --frozen-lockfile` y `pnpm dev`. Slides en
`http://localhost:5173`; páginas de ejemplo en `http://localhost:5173/ejemplos/`.
Cada página se abre con la barrera. El botón flotante **Aplicar arreglo** la
corrige sin recargar y **Ver cambios** resalta dónde está cada cambio y explica
por qué. `?arreglo=1` abre directamente la versión corregida; los enlaces de las
slides usan ambas rutas.

| Lección | Página | Ruta | Arreglos |
| --- | --- | --- | --- |
| 5.1 | Exposición temporal en la web de un museo | `/ejemplos/museo` | Secciones h2 y subsecciones h3; alt descriptivo del tapiz |
| 5.2 | Formulario de cita en un taller de bicicletas | `/ejemplos/taller-bicicletas` | `span` visible no asociado → `label` con for/id |

Antes de ejecutar bookmarklets o Accessibility Insights, cierra el panel «Ver
cambios»: la herramienta flotante no añade encabezados, imágenes ni regiones,
pero sí controles al final del recorrido de Tab. Para comparar el antes y el
después con una herramienta que no se actualiza sola, recarga tras alternar o
abre directamente la ruta con `?arreglo=1`.

`MuseumExhibition` y `RepairBooking` son escenarios de página completa. En 5.1 el
tamaño de los títulos lo fija una clase, de modo que ambas versiones se ven igual
y solo Headings revela la diferencia de niveles. En 5.2 axe detecta en JSDOM la
regla `label` sobre el teléfono sin arreglo y ninguna infracción con el arreglo;
FastPass sigue sin ejecutarse.

## Evidencia y límites

[Investigación previa fechada](../../../docs/research/05-comprobaciones-y-proximos-pasos.md),
[auditoría separada de tests y documentación](audit.md), que registra la evidencia
de los ejemplos anteriores a las páginas de ejemplo. Las lecciones indican los
pasos reproducibles y el estado de cada herramienta. DOM/axe no son FastPass ni AT.

| Comprobación | Estado / cómo completarla |
| --- | --- |
| Headings e Images en fichas oficiales | Enlaces ejecutados realmente; etiquetas observadas. Guardado en barra y ejecución en actividad local pendientes |
| Accessibility Insights / FastPass / Tab stops | No ejecutado: política del navegador bloqueó `chrome://extensions/`; no se intentó eludirla. Procedimiento en 5.2 |
| Autor humano | Revisión visual final de 13 slides y dos páginas de ejemplo en ambos estados; ensayo 4 + 4 + 2 min pendientes |
| NVDA + Firefox/Chrome en Windows; VoiceOver + Safari en macOS | Niveles, alternativas, campo, enlaces, botón y confirmación; no ejecutado |
| VoiceOver iOS/Safari; TalkBack Android/Chrome | Lectura, gestos, edición/teclado virtual y confirmación; no ejecutado |
| Teclado humano en Chrome/Firefox/Safari | Recorrido ida/vuelta, activación, foco visible/no tapado y salida; pendiente |
| Control por voz | Activar por nombre visible; no ejecutado |
| Zoom real 200%/400%, reflujo, orientación móvil | Legibilidad, contenido y operabilidad; pendientes, no sustituidos por JSDOM |

Registrar fecha, SO, navegador/versión, herramienta/versión, URL/variante, pasos,
resultado y bloqueos. No marcar completo sin esa evidencia. Formularios (curso
específico) y Data Display no tienen publicación/URL verificadas; la ruta prevista
se conserva con recursos WAI de apoyo, sin inventar disponibilidad.

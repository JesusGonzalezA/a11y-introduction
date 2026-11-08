# Módulo 2. Entender la accesibilidad

**10 minutos**, incluidas las demos. Fuente: [issue #3](https://github.com/JesusGonzalezA/a11y-introduction/issues/3)
y [temario #1](https://github.com/JesusGonzalezA/a11y-introduction/issues/1).
Cada lección usa una página de ejemplo distinta donde la barrera aparece con naturalidad.

| Lección | Objetivo | Duración | Slides (portada = 1) |
| --- | --- | --- | --- |
| [2.1 Personas, formas de interacción y barreras](02.01-personas-interaccion-y-barreras/README.md) | Relacionar formas de uso y necesidades con barreras observables | 5 min | 9–13 (`/#/8` a `/#/12`) |
| [2.2 Cómo interpreta el navegador nuestra interfaz](02.02-como-interpreta-el-navegador-la-interfaz/README.md) | Reconocer nombre, rol y estado; partir de HTML y completar con ARIA | 5 min | 14–19 (`/#/13` a `/#/18`) |

## Decisiones pedagógicas

La persona necesita localizar una acción, entender qué hace y reconocer su
resultado. Primero se descubre que una acción visible puede resultar inalcanzable
(2.1, ficha de producto de una tienda); después se explica qué significado
transmite el navegador (2.2, elegir sesión en un cine).

No se recogen datos: la cesta y la sesión elegida son simulaciones y el pie de
cada página lo indica. Estructura completa y formularios se desarrollan en los
módulos posteriores. No se añade multimedia para ilustrar la barrera de
subtítulos ni se enseña a reconstruir un botón genérico con ARIA.

## Ejecutar y revisar

Desde la raíz: `pnpm install --frozen-lockfile` y `pnpm dev`. Slides en
`http://localhost:5173`; páginas de ejemplo en `http://localhost:5173/ejemplos/`.
Cada página se abre con la barrera. El botón flotante **Aplicar arreglo** la
corrige sin recargar y **Ver cambios** resalta dónde está cada cambio y explica
por qué. `?arreglo=1` abre directamente la versión corregida; los enlaces de las
slides usan ambas rutas.

| Lección | Página | Ruta | Arreglos |
| --- | --- | --- | --- |
| 2.1 | Ficha de producto de una tienda online | `/ejemplos/tienda-online` | `div` con clic → `button` |
| 2.2 | Elegir sesión en la web de un cine | `/ejemplos/cine` | Sesiones como `button`; sesión agotada con `disabled` y texto; confirmación en `role="status"` |

Cada slide que abre una demo tiene su enlace; los guiones mantienen los mismos
5 y 6 apartados que sus respectivas slides.

## Páginas de ejemplo

`ProductPage` y `CinemaBooking` son escenarios de página completa, no componentes
reutilizables. Reciben `fixed: boolean` y marcan con `data-fix` los elementos que
cambian. Sus definiciones (`*.example.ts`) describen cada arreglo con dónde está,
por qué y el código antes y después.

Las barreras usan un `div` con `onClick`, con dos supresiones de lint locales
justificadas; no se ocultan con roles ni tabulación artificial. En 2.2 la
confirmación `status` existe vacía antes de actuar y recibe el texto completo, con
`aria-atomic="true"`; el foco de teclado permanece en el botón. Un botón `disabled`
no recibe foco: su estado se comprueba en el árbol de accesibilidad.

## Criterios y evidencia

El [inventario previo de fuentes y criterios](../../../docs/research/02-entender-la-accesibilidad.md)
clasifica todas las cláusulas de Magenta Button, las partes transferibles de Alert
y ARIA22 como automatizadas, manuales o no aplicables. Conserva los enlaces a los
originales y paráfrasis con identificadores G1/G2/G3. Los contratos de encabezados,
listas y enlaces se heredan de la investigación del módulo 1. La
[auditoría separada de tests y documentación](audit.md) cruza ese inventario con
la evidencia concreta y las brechas; no es una declaración de conformidad completa.

| Área | Automatizado | Manual o no aplicable |
| --- | --- | --- |
| Acción con teclado (2.1) | Barrera: Tab salta la acción y solo el clic la activa. Arreglo: Tab la alcanza, Enter y Espacio la activan, foco conservado | Apariencia del foco, lectura real y voz pendientes |
| Rol y estado (2.2) | Barrera: sin botones ni estado. Arreglo: tres botones, «19:00 · Agotada» deshabilitado, Tab salta la sesión agotada | Estado con lector pendiente |
| Confirmación (2.2) | Región previa vacía, texto actualizado, atomicidad | Anuncio real pendiente |
| Solución | axe sin infracciones detectables con el arreglo | Contraste, zoom y reflujo no demostrables en JSDOM |
| Herramienta flotante | Estado en URL, teclado, panel, resaltado y orden de foco (`src/examples`) | Revisión visual humana pendiente |
| Slides | Títulos/axe, enlaces de demos, foco simulado, registro ordenado | Revisión visual humana y ensayo pendientes |

La [auditoría](audit.md) registra la evidencia de los ejemplos anteriores a las
páginas de ejemplo; su matriz manual sigue vigente como lista de comprobaciones.

## Matriz manual pendiente

Registrar versión, sistema, fecha y resultado al ejecutar. Las pruebas del DOM no
sustituyen ninguna de estas comprobaciones.

| Entorno | Recorrido | Estado |
| --- | --- | --- |
| Chrome y Safari, teclado | Tab/Shift+Tab, foco visible, Enter/Espacio, resultado y navegación de enlaces; en Safari habilitar navegación de teclado | Pendiente de revisión humana |
| NVDA + Chrome y Firefox, Windows | Nombre/rol del botón, estado disabled en lectura, confirmación completa sin mover foco | Pendiente; no ejecutado |
| VoiceOver + Safari, macOS | Mismo recorrido; verificar resultado con interacción real y lectura posterior | Pendiente; no ejecutado |
| VoiceOver + Safari, iOS; TalkBack + Chrome, Android | Deslizar, reconocer control/estado, doble toque, leer confirmación | Pendiente; no ejecutado |
| Control por voz, macOS/Safari | Activar por nombre visible «Añadir a la cesta» con el arreglo aplicado | Pendiente; no ejecutado |
| Navegador, zoom 200%/400% y ancho 320 CSS px | Legibilidad, reflujo, foco y controles sin recortes; contraste calculado no sustituye inspección | Pendiente de revisión humana |
| Autor humano | Revisar todas las superficies; ensayar 5 + 5 minutos incluidas demos e inspección | Pendiente; tiempos estimados, no ensayo |

## Validación de entrega

Consultar [audit.md](audit.md) para resultados reales y revisión técnica de superficies.
Ejecutar `pnpm test`, `pnpm lint` y `pnpm build` desde la raíz.
Los builds y las comprobaciones técnicas no dan por realizada la revisión visual
final del autor, el ensayo ni las pruebas de tecnologías de apoyo.

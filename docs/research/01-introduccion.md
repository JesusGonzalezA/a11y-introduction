# Investigación del módulo 1: Introducción

Fecha de consulta: **2026-10-08**. Investigación previa a la implementación.
Alcance: [issue #2](https://github.com/JesusGonzalezA/a11y-introduction/issues/2),
según la [especificación del curso #1](https://github.com/JesusGonzalezA/a11y-introduction/issues/1).

## Decisiones pedagógicas

La accesibilidad busca que las personas con discapacidad puedan percibir,
comprender, navegar e interactuar con la web. Las decisiones de diseño y código
pueden crear o retirar barreras; incorporarla desde el comienzo del desarrollo
evita trabajo posterior. Esta es la base para presentar la accesibilidad como
parte del trabajo de desarrollo, sin reducirla a una herramienta o una revisión
final. Fuente: [introducción de W3C WAI](https://www.w3.org/WAI/fundamentals/accessibility-intro/)
(actualizada el 3 de febrero de 2026).

La tarea conductora será **conocer una actividad e inscribirse**. La introducción
presentará cómo estructura, información comprensible e interacción contribuyen
a esa tarea. El detalle técnico y las demostraciones se desarrollarán en los
módulos posteriores; no hace falta inventar un formulario interactivo para
presentar el curso. Esta delimitación procede de las issues #1 y #2, no de una
exigencia de accesibilidad externa.

Conservar las dos lecciones y sus tiempos: «Bienvenida y presentación» (2 minutos)
y «Objetivos y contenidos» (3 minutos). El mapa completo suma 5 módulos, 11
lecciones y 60 minutos (5 + 10 + 18 + 17 + 10). Describir el mapa como programa
del curso no equivale a afirmar que todos sus materiales estén ya desarrollados.
La identidad o experiencia del docente solo puede proceder de datos confirmados;
el guion puede pedir que se presente brevemente con sus propios datos. No atribuir
biografía ni disponibilidad de otros cursos a estas fuentes.

La primera revisión permite detectar problemas, pero no acredita la accesibilidad
completa: WAI explica que una herramienta aislada no determina la conformidad y
requiere evaluación humana. Una formulación adecuada del resultado es «comenzar
a revisar una interfaz». Fuentes: [evaluación en WAI](https://www.w3.org/WAI/fundamentals/accessibility-intro/#evaluating)
y [Easy Checks](https://www.w3.org/WAI/test-evaluate/preliminary/).

## Contrato semántico de las slides

El contenido del módulo utiliza títulos, párrafos, listas y un enlace a los
materiales. Mantener el `h1` de la portada del curso y `h2` para cada slide; no
elegir niveles por su tamaño visual. HTML asigna significado y nivel a los
encabezados. Fuente: [HTML, encabezados](https://html.spec.whatwg.org/multipage/sections.html#the-h1,-h2,-h3,-h4,-h5,-and-h6-elements).

Usar `ul` para resultados sin orden obligatorio, `ol` cuando el orden sea parte
del significado y `li` para cada elemento. No reproducir listas mediante saltos
de línea o contenedores genéricos. Fuente: [HTML, agrupación de contenido](https://html.spec.whatwg.org/multipage/grouping-content.html#the-ul-element).

El enlace a los materiales debe ser `a` con `href` real y texto visible que
identifique su destino. HTML define el enlace con `href` y el contenido como su
etiqueta; no hace falta añadir un rol o un nombre ARIA redundante. Fuente:
[HTML, enlaces](https://html.spec.whatwg.org/multipage/text-level-semantics.html#the-a-element).

HTML-AAM describe el mapeo de encabezados a `heading` con su nivel, listas a
`list`, elementos a `listitem` y enlaces con `href` a `link`. Es una especificación
de mapeos, no evidencia de que una combinación concreta de navegador y lector
los anuncie correctamente. La edición consultada es un **Working Draft del 5 de
octubre de 2026**, sujeto a cambios. Fuente: [HTML-AAM](https://www.w3.org/TR/html-aam/).

APG recomienda usar el enlace HTML nativo. Su patrón de enlace incluye activación
con Enter; asignar `role="link"` por sí solo no crea ese comportamiento. Los
encabezados y listas de contenido no requieren un widget APG. Fuentes:
[APG Link Pattern](https://www.w3.org/WAI/ARIA/apg/patterns/link/) y
[APG Read Me First](https://www.w3.org/WAI/ARIA/apg/practices/read-me-first/).

La recomendación es no añadir estados ARIA, regiones vivas, gestión de foco ni
controles personalizados al contenido de estas lecciones. La navegación existente
del reproductor de slides es otra superficie: las pruebas aisladas del contenido
no verifican su comportamiento ni el de Storybook.

## Contraste con MagentaA11y

Se consultaron los criterios web de [heading](https://www.magentaa11y.com/web-criteria/component/heading),
[list](https://www.magentaa11y.com/web-criteria/component/list) y
[link](https://www.magentaa11y.com/web-criteria/component/link).
El sitio sirve una aplicación JavaScript que no expuso los criterios al lector
web; se leyó el Markdown oficial de T-Mobile mediante la API de GitHub, en la
revisión `c0d97812d9298757f5a2d8902ed7671afb1aa9ba`:

- [Fuente de heading](https://github.com/tmobile/magentaA11y/blob/c0d97812d9298757f5a2d8902ed7671afb1aa9ba/public/content/documentation/web/component/heading.md).
- [Fuente de list](https://github.com/tmobile/magentaA11y/blob/c0d97812d9298757f5a2d8902ed7671afb1aa9ba/public/content/documentation/web/component/list.md).
- [Fuente de link](https://github.com/tmobile/magentaA11y/blob/c0d97812d9298757f5a2d8902ed7671afb1aa9ba/public/content/documentation/web/component/link.md).

Los siguientes criterios son paráfrasis de sus escenarios Gherkin, separados en
partes verificables. No son una declaración de conformidad con toda la guía.
La columna de evidencia propone cómo validarlos después de implementar: esta
investigación no ejecuta ni da por superadas esas pruebas.

| Criterio y fuente | Clasificación | Evidencia prevista o justificación |
| --- | --- | --- |
| Encabezado con texto, rol y nivel; jerarquía coherente (`heading`) | Automatizado | Testing Library por rol, nombre y nivel; verificar `h1` de portada y `h2` de slides. La idoneidad del texto requiere revisión editorial. |
| Encabezados fuera de la secuencia de Tab (`heading`) | Automatizado | Comprobar ausencia de `tabindex` y que Tab en el contenido alcanza el enlace, no los títulos. |
| Encabezado entra en vista al recorrerlo; propósito, nivel y orden se perciben con lector de escritorio (`heading`) | Manual | Navegador con lector real, pendiente. Las flechas mencionadas por la guía se interpretan en navegación del lector, no como interacción propia del encabezado. |
| Lectura de encabezado y nivel mediante gestos móviles (`heading`) | Manual | Safari/VoiceOver iOS o Chrome/TalkBack Android, pendiente. |
| Lista real y elementos contenidos; lista fuera de Tab (`list`) | Automatizado | Roles `list`/`listitem`, estructura `ul`/`ol` → `li`, ausencia de tabulación artificial. |
| Lista entra en vista y lector de escritorio informa de lista y número de elementos (`list`) | Manual | Recorrido real con lector; pendiente. El número de nodos DOM no demuestra el anuncio. |
| Lista y número de elementos con gestos móviles (`list`) | Manual | Lector móvil con verbosidad de formato/posición de lista habilitada; pendiente. |
| Enlace con rol, nombre visible comprensible y destino (`link`) | Automatizado | `getByRole('link', { name })`, texto visible y `href` esperado. Revisión editorial del propósito. |
| Tab alcanza el enlace (`link`) | Automatizado | `user-event` comprueba foco DOM; no acredita su aspecto. |
| Foco del enlace visible y Enter navega al destino (`link`, APG) | Manual | Navegador real; pendiente. JSDOM no acredita navegación de página ni foco visible. |
| Lector de escritorio identifica propósito y rol y permite activar el enlace (`link`) | Manual | Lector real con teclado; pendiente. |
| Deslizar y doble toque permiten identificar y abrir enlace (`link`) | Manual | Lector móvil; pendiente. |
| Estados `pressed`, `expanded`, `selected`, `disabled`, error y relaciones de formulario | No aplicable | El módulo no implementa esos controles ni estados. No crear un widget para satisfacer una plantilla de pruebas. |
| Estados o relaciones ARIA personalizados; foco compuesto | No aplicable | El contenido usa semántica nativa y un enlace, sin patrón compuesto. |
| Demos, variantes con barreras y pruebas de esas variantes | No aplicable | #2 presenta el curso; no especifica demo. Eliminar la muestra no implica reemplazarla por otra. |

## Límites y cierre de la investigación

Los tests pueden comprobar estructura DOM, nombres calculados, atributos, foco
simulado y reglas detectables por axe. Un resultado sin violaciones no prueba
contraste, zoom, recortes, anuncios reales, gestos móviles ni conformidad completa.
APG requiere contrastar las combinaciones de navegador y tecnología de asistencia
relevantes; no se deduce soporte universal de un mapeo o de una prueba unitaria.
Fuentes: [APG, soporte de navegador y AT](https://www.w3.org/WAI/ARIA/apg/practices/read-me-first/#browser-and-assistive-technology-support)
y [WAI Easy Checks](https://www.w3.org/WAI/test-evaluate/preliminary/).

Reservar como **manual pendiente** la lectura con AT, el teclado y foco visible
del reproductor completo, la percepción del contenido, el contraste, ampliación y
reflujo en navegador, y la revisión visual final del autor humano. Registrar
navegador, versión, AT y resultado cuando se ejecuten. El ensayo cronometrado de
2 y 3 minutos también requiere una ejecución humana; la estimación escrita no lo
sustituye. Los resultados efectivos de tests, builds y revisión de superficies
deben anotarse en la documentación de entrega después de ejecutarlos.

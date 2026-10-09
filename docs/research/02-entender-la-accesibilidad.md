# Investigación del módulo 2: Entender la accesibilidad

Fecha de consulta: **2026-10-08**, antes de implementar. Alcance:
[issue #3](https://github.com/JesusGonzalezA/a11y-introduction/issues/3), según
[temario #1](https://github.com/JesusGonzalezA/a11y-introduction/issues/1).
Esta nota continúa [la investigación del módulo 1](01-introduccion.md): conserva
sus contratos de encabezados, listas y enlaces sin repetirlos. Los criterios
siguientes son un contrato previo; no registran pruebas superadas.

## Personas, interacción y barreras

No asignar una tecnología a cada discapacidad como si todas las personas de un
grupo actuasen igual. Las capacidades, preferencias y herramientas varían y pueden
combinarse o cambiar. La accesibilidad contempla necesidades funcionales, no una
clasificación médica cerrada. Fuente: [WAI, diversidad de capacidades](https://www.w3.org/WAI/people-use-web/abilities-barriers/).

La misma tarea —conocer una actividad e inscribirse— debe poder completarse de
distintas formas. Teclado, ratón adaptado o convencional y entrada por voz son
formas de introducir acciones; ampliación y lector de pantalla ayudan a percibir
y recorrer la información. Pueden combinarse: el lector no es un dispositivo de
entrada equivalente al ratón, ni la ampliación una forma de activar controles.
Fuentes: [WAI, herramientas y estrategias](https://www.w3.org/WAI/people-use-web/tools-techniques/)
y [WAI, entrada](https://www.w3.org/WAI/people-use-web/tools-techniques/input/).

| Necesidad | Barrera concreta en una actividad | Decisión que la evita | Fuente primaria |
| --- | --- | --- | --- |
| Visual: distinguir disponibilidad, leer ampliado o acceder a estructura mediante voz sintetizada/braille | Plaza disponible indicada solo en verde; texto recortado al ampliar; control sin semántica | Texto que indique disponibilidad, contenido adaptable y controles nativos | [WAI Visual](https://www.w3.org/WAI/people-use-web/abilities-barriers/visual/) |
| Auditiva: conocer lo explicado en un vídeo | Presentación de la actividad con información solo hablada y sin subtítulos | Subtítulos que incluyan habla y sonidos significativos; no asumir que todas las personas sordas usan lengua de signos | [WAI Auditory](https://www.w3.org/WAI/people-use-web/abilities-barriers/auditory/) |
| Motora: completar una acción sin puntero preciso | Inscripción que solo responde al clic y no se alcanza con teclado | Acción disponible desde teclado; conservar alternativas de entrada | [WAI Physical](https://www.w3.org/WAI/people-use-web/abilities-barriers/physical/) |
| Cognitiva: entender qué hacer y anticipar el resultado | Instrucciones ambiguas o muchos pasos sin estructura | Frases claras, orden coherente y etiquetas que describan acciones | [WAI Cognitive and learning](https://www.w3.org/WAI/people-use-web/abilities-barriers/cognitive/) |

Los ejemplos de la tabla son una aplicación didáctica al hilo del curso, no una
lista exhaustiva de necesidades ni una promesa de resolverlas con un único cambio.
No hace falta introducir un vídeo real ni una demo de contraste en este módulo:
#3 pide reconocer esas barreras y demostrar la acción inalcanzable.

Correspondencia con WCAG 2.2: [2.1.1 Teclado](https://www.w3.org/WAI/WCAG22/Understanding/keyboard.html)
exige disponibilidad por interfaz de teclado de la funcionalidad que no depende
esencialmente de la trayectoria del movimiento; inscribirse no tiene esa excepción.
[1.4.1 Uso del color](https://www.w3.org/WAI/WCAG22/Understanding/use-of-color.html)
impide que solo el color comunique información.
[1.2.2 Subtítulos pregrabados](https://www.w3.org/WAI/WCAG22/Understanding/captions-prerecorded.html)
se refiere al audio pregrabado en contenido multimedia sincronizado, con su
excepción específica para alternativas a texto identificadas como tales. No
convertir «todo vídeo necesita subtítulos» en una regla independiente del contenido.
Las páginas Understanding son explicaciones informativas de los criterios.

## Lo que el navegador comunica

El árbol de accesibilidad representa la estructura de la interfaz mediante objetos
expuestos por APIs de accesibilidad. No es una captura de pantalla ni una copia
literal de cada nodo DOM. Es apropiado introducir tres preguntas: cómo se llama
el control, qué clase de control es y en qué estado está. Fuente:
[WAI-ARIA 1.2, términos](https://www.w3.org/TR/wai-aria-1.2/#dfn-accessibility-tree).
[WCAG 4.1.2](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value.html)
requiere información determinable por software sobre nombre, rol y los estados,
propiedades y valores pertinentes; no obliga a añadir atributos ARIA a todo.

[HTML define `button`](https://html.spec.whatwg.org/multipage/form-elements.html#the-button-element)
como un botón etiquetado por su contenido. Para una acción local simulada,
`type="button"` hace explícito que no se envía un formulario. El atributo nativo
`disabled` vuelve el control no interactivo. No añadir `role="button"`,
`aria-label` o `aria-disabled` redundantes al botón del ejemplo.

[HTML-AAM, button](https://www.w3.org/TR/html-aam/#el-button) lo mapea al rol
`button`; [HTML-AAM, span](https://www.w3.org/TR/html-aam/#el-span) mapea `span`
a `generic`. El texto de un elemento genérico puede seguir siendo legible: la
afirmación correcta es que no aporta la semántica ni interacción nativas de un
botón. Un `onClick` no basta para aportar ese contrato. HTML-AAM consultado es el
Working Draft del 5 de octubre de 2026: describe mapeos, no demuestra los anuncios
de una combinación concreta de lector y navegador.

[APG Button](https://www.w3.org/WAI/ARIA/apg/patterns/button/) especifica
activación con Enter y Espacio. Si la acción conserva el contexto, normalmente
conserva el foco en el botón. Aquí no hay diálogo, atajo ni paso nuevo. La
comparación genérica es un contraejemplo deliberado; la solución es `button`,
sin desarrollar un botón personalizado. [Using ARIA, primera regla](https://www.w3.org/TR/using-aria/#rule1)
prioriza el elemento nativo adecuado.

Para voz, la etiqueta visible debe estar incluida en el nombre accesible; el
texto interior «Inscribirme» permite conservar esa coincidencia sin sobreescribir
el nombre. Fuente: [WCAG 2.5.3 Label in Name](https://www.w3.org/WAI/WCAG22/Understanding/label-in-name.html).
La activación real con software de voz sigue siendo una comprobación manual.

## ARIA para completar: resultado de la acción

La inscripción es una simulación local. Su confirmación visible no cambia el
contexto ni pide interrumpir urgentemente: corresponde `role="status"`.
El rol aporta `aria-live="polite"` y `aria-atomic="true"` implícitos; no es un
botón ni un estado «pulsado». La especificación recomienda no enfocar el mensaje
al cambiar y relacionar con `aria-controls` el control que actualiza la región.
Fuente: [WAI-ARIA 1.2, status](https://www.w3.org/TR/wai-aria-1.2/#status).

[ARIA22](https://www.w3.org/WAI/WCAG22/Techniques/aria/ARIA22) comprueba que el
contenedor tenga `role="status"` antes del cambio, que reciba el mensaje y que
incluya toda la información equivalente a la confirmación visual. Recomienda
`aria-atomic="true"` explícito por diferencias de soporte. Decisión: montar la
región vacía, conservarla, sustituir su texto completo tras la acción y mantener
el foco en el botón. Usar un ID único por instancia si se aplica `aria-controls`.
No necesitar `aria-live` redundante, temporizadores, `aria-busy` ni mensajes urgentes.

[WCAG 4.1.3 Status Messages](https://www.w3.org/WAI/WCAG22/Understanding/status-messages.html)
sitúa el resultado de una acción entre los mensajes de estado que deben poder
presentarse mediante tecnologías de apoyo sin tomar el foco. Comprobar una
mutación DOM no demuestra que se anuncie. La guía local
[live-regions](../../.agents/skills/aria-patterns/references/live-regions.md)
advierte de diferencias entre lectores; no repetir sus cifras de soporte como
mediciones actuales. Validar con AT real, incluida la integridad del mensaje.

## Inventario de criterios del botón

Consultados [MagentaA11y Button](https://www.magentaa11y.com/web-criteria/component/button)
y su [fuente oficial fijada](https://github.com/tmobile/magentaA11y/blob/c0d97812d9298757f5a2d8902ed7671afb1aa9ba/public/content/documentation/web/component/button.md).
La aplicación web no devolvió contenido legible al lector web; se leyó el Markdown
oficial mediante `gh api`. El commit vigente consultado es
`c0d97812d9298757f5a2d8902ed7671afb1aa9ba`.
Su repositorio declara [Apache-2.0](https://github.com/tmobile/magentaA11y/blob/c0d97812d9298757f5a2d8902ed7671afb1aa9ba/LICENSE.txt).
Se conserva trazabilidad a cada escenario original mediante sección y número;
las filas son paráfrasis propias, no reproducción integral de Gherkin ni
declaración de cumplimiento de toda la guía.

En la tabla, **M-B** significa la fuente Button anterior; G1, G2 y G3 identifican
sus escenarios Gherkin de teclado, lector de escritorio y lector móvil.
Cada fila manual queda pendiente hasta registrar combinación, versión y resultado.

| Criterio / origen exacto | Clasificación | Evidencia prevista o motivo |
| --- | --- | --- |
| Tab alcanza el botón habilitado (M-B, G1; Condensed 1) | Automatizado | `userEvent.tab()` desde el enlace anterior; foco en botón y luego enlace posterior; regreso con Shift+Tab. |
| El foco se distingue visualmente (M-B, G1; Developer notes Focus) | Manual | Navegador con teclado; inspección del indicador. `toHaveFocus` no prueba su aspecto. |
| Espacio activa la acción (M-B, G1; Condensed 1) | Automatizado | Resultado observable, una llamada por activación. |
| Enter activa la acción (M-B, G1; Condensed 1) | Automatizado | Resultado observable, una llamada por activación. |
| La acción prevista se ve al activar (M-B, G1) | Manual | Recorrido de demo en navegador; texto de confirmación legible y localizado. |
| Propósito y rol en DOM (M-B, G2/G3: Name y Role; Developer notes) | Automatizado | Rol `button`, nombre «Inscribirme», texto visible persistente; `type="button"`. |
| Lector de escritorio alcanza con Tab y comunica propósito/rol (M-B, G2) | Manual | NVDA con Firefox y/o Chrome, VoiceOver con Safari; anotar lo percibido, sin frase universal esperada. |
| Enter/Espacio permiten percibir resultado con lector de escritorio (M-B, G2) | Manual | Acción y anuncio de confirmación, sin mover foco. |
| Deslizar localiza botón y comunica propósito/rol (M-B, G3; Condensed 2) | Manual | VoiceOver iOS/Safari o TalkBack Android/Chrome. |
| Doble toque activa y permite percibir resultado (M-B, G3) | Manual | Dispositivo y lector móvil reales. |
| Estado disabled nativo (M-B, G2/G3 State; Fully disabled button) | Automatizado | `disabled`, nombre/rol conservados, omitido por Tab, sin acción por clic ni teclado. |
| Estado no disponible se comunica (M-B, G2/G3 State) | Manual | Navegación de lectura: `disabled` no recibe Tab; sigue siendo descubrible por lector. |
| Popup/grupo (M-B, G2/G3 Group; Developer notes Group) | No aplicable | No hay menú, listbox ni popup. No añadir `aria-haspopup`. |
| pressed y expanded (M-B, G2/G3 State; Developer notes State) | No aplicable | Acción simple; no alterna una preferencia ni expande contenido. |
| Botón deshabilitado que conserva foco / aria-disabled (M-B, Focusable disabled button) | No aplicable | La variante enseña indisponibilidad nativa con `disabled`, no validación de formulario. |
| Nombre con aria-label, icono sin texto y botones repetidos (M-B, Code examples/Name) | No aplicable | Etiqueta visible completa; instancias comparadas tienen contexto didáctico. |
| Botón personalizado con tabindex y rol (M-B, When you can’t use semantic HTML) | No aplicable como solución | Existe `button` nativo; el genérico se conserva únicamente como contraejemplo rotulado. |

Magenta prefiere en ciertos formularios `aria-disabled` para conservar
descubribilidad y permitir comunicar errores; esta demo no contiene ese flujo.
HTML nativo determina la variante deshabilitada y sus efectos. Fuente:
[HTML, disabled](https://html.spec.whatwg.org/multipage/form-control-infrastructure.html#enabling-and-disabling-form-controls:-the-disabled-attribute).
Tampoco trasladar su nota genérica `aria-haspopup="true"` a cualquier popup:
[APG Button](https://www.w3.org/WAI/ARIA/apg/patterns/button/) la vincula al menú;
esa propiedad queda fuera del módulo.

## Inventario del mensaje de estado y de la barrera

Se consultó [MagentaA11y Alert notification](https://www.magentaa11y.com/web-criteria/component/alert-notification)
y su [Markdown oficial fijado](https://github.com/tmobile/magentaA11y/blob/c0d97812d9298757f5a2d8902ed7671afb1aa9ba/public/content/documentation/web/component/alert-notification.md).
No se encontró una página específica de `status` en el árbol del repositorio.
No convertir la confirmación en `alert` para satisfacer una guía de otro patrón.

| Criterio y fuente | Clasificación | Evidencia prevista o motivo |
| --- | --- | --- |
| Región existente antes del mensaje, contenido dentro, contexto completo (ARIA22, Tests 1–3) | Automatizado | Nodo inicialmente vacío; tras acción, mismo nodo con mensaje completo visible. |
| Atomicidad explícita y relación (ARIA22 Description; WAI-ARIA status) | Automatizado | `aria-atomic="true"`; `aria-controls` resuelve al ID único del status si se usa. |
| Actualización no toma foco (WAI-ARIA status; Magenta Alert G1–G3 como contraste) | Automatizado | Activación con teclado conserva foco en botón; status sin tabulación añadida. |
| Confirmación perceptible sin desplazar foco (WCAG 4.1.3; ARIA22) | Manual | Lectores de escritorio y móvil: anuncio íntegro y descubrible al recorrer después. |
| Mensaje visible al ejecutar la acción (Magenta Alert G1, parte transferible) | Manual | Navegador; leer confirmación sin depender de color. |
| Se anuncia específicamente como alerta (Magenta Alert G2/G3) | No aplicable | Mensaje informativo `status`, sin urgencia; no exigir palabra «alerta». |
| Flechas/gestos recorren mensaje (Magenta Alert Condensed, parte transferible) | Manual | Navegación de lectura real; no añadir manejadores de flechas al texto. |
| Controles dentro de alerta y botón de cerrar (Magenta Alert Condensed) | No aplicable | Confirmación de texto persistente, sin controles internos. |
| Error asociado mediante aria-describedby (Magenta Alert ejemplo de error) | No aplicable | No hay campo ni error de formulario en este módulo. |
| Clic activa el genérico; Tab lo omite; no ofrece rol button (WCAG 2.1.1, HTML-AAM span) | Automatizado | Tests del contraejemplo prueban la barrera esperada y la separan del caso nativo. |
| Aspecto similar no aporta misma semántica (HTML-AAM button/span) | Manual | Comparar representación del navegador; no afirmar que el genérico carece de todo contenido accesible. |
| Análisis axe de estados nativos inicial, confirmado y disabled | Automatizado | Reglas detectables por axe en JSDOM; no exigir un fallo axe concreto en el genérico sin teclado. |
| Uso real de entrada por voz (WCAG 2.5.3) | Manual | Activar por la etiqueta visible con software de voz; coincidencia DOM no acredita funcionamiento real. |
| Foco, contraste, ampliación y reflujo | Manual | Navegador, revisión humana; [WCAG 2.4.7](https://www.w3.org/WAI/WCAG22/Understanding/focus-visible.html) y [1.4.10](https://www.w3.org/WAI/WCAG22/Understanding/reflow.html). |
| Vídeo/subtítulos en la demo | No aplicable | Solo se explica la barrera; no se incorpora multimedia. |

## Recomendación de autoría y auditoría posterior

2.1 comienza por la tarea y las distintas maneras de completarla, conecta las
cuatro necesidades con barreras y termina recorriendo dos etapas recuperables:
control genérico inalcanzable y botón nativo. 2.2 explica representación,
nombre/rol/estado y contrasta el mismo escenario, incluida una variante disabled;
la confirmación `status` ofrece un caso acotado de ARIA que completa HTML.
La inscripción se identifica como simulada, sin envío ni datos personales.

Auditar después **tests** y **documentación** por separado contra esta nota y las
fuentes originales. Los tests deben demostrar contrato DOM, interacciones y
transiciones; la documentación debe justificar cada fila manual/no aplicable y
no atribuir anuncios, contraste ni conformidad completa a JSDOM o axe. La revisión
del navegador y AT requiere evidencia propia; véase [APG, soporte de navegador y AT](https://www.w3.org/WAI/ARIA/apg/practices/read-me-first/#browser-and-assistive-technology-support).

El ensayo humano de cinco minutos por lección, la revisión visual final del autor
y las combinaciones AT no ejecutadas deben mantenerse explícitamente pendientes.
No confundir construcción correcta de Storybook con revisión visual o ensayo.

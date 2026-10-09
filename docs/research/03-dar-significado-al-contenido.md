# Investigación del módulo 3: Dar significado al contenido

Fecha de consulta: **2026-10-09**, antes de implementar. Alcance:
[issue #4](https://github.com/JesusGonzalezA/a11y-introduction/issues/4), según
[temario #1](https://github.com/JesusGonzalezA/a11y-introduction/issues/1).
Dos lecciones de nueve minutos: estructura/orden y alternativas/nombres/etiquetas.
Esta nota añade el contrato específico del módulo; reutiliza el contrato de botón,
confirmación `status` y límites de evidencia de
[la investigación del módulo 2](02-entender-la-accesibilidad.md), sin duplicarlo.
Es un contrato previo, no un registro de validaciones superadas.

## Estructura que permite localizar y comprender

La presentación visual no sustituye relaciones determinables por software:
[WCAG 1.3.1](https://www.w3.org/WAI/WCAG22/Understanding/info-and-relationships.html).
Los títulos describen el tema o propósito de cada bloque:
[WCAG 2.4.6](https://www.w3.org/WAI/WCAG22/Understanding/headings-and-labels.html).
La [guía WAI de encabezados](https://www.w3.org/WAI/tutorials/page-structure/headings/)
recomienda anidar niveles según relaciones entre secciones y evitar saltos al
profundizar. Volver de h3 a h2 al iniciar otra sección sí es coherente.
El ejemplo adopta un h1 para la actividad, h2 para secciones y h3 para una
subsección; es una convención didáctica clara, no una afirmación de que WCAG
imponga exactamente un h1 en cualquier documento. No seleccionar nivel por tamaño.

[HTML, headings](https://html.spec.whatwg.org/multipage/sections.html#headings-and-outlines)
y [HTML-AAM, h1–h6](https://www.w3.org/TR/html-aam/#el-h1-h6) aportan estructura
nativa y nivel. No usar `role="heading"` ni `aria-level` cuando basta h1–h6.
Tampoco añadir tabulación: el recorrido de lectura y la navegación de encabezados
pertenecen al lector; Tab visita controles y enlaces. Las cifras de soporte de
[aria-patterns](../../.agents/skills/aria-patterns/references/at-support-gotchas.md)
son contexto, no mediciones actuales del módulo.

Las [regiones WAI](https://www.w3.org/WAI/tutorials/page-structure/regions/) y
[APG Landmarks](https://www.w3.org/WAI/ARIA/apg/practices/landmark-regions/)
organizan áreas importantes. En una página aislada, header/footer de nivel de
página aportan banner/contentinfo; nav aporta navigation y main identifica el
contenido principal. Un header dentro de main/section no debe enseñarse como
banner global. No convertir cada párrafo en region ni confundir nav con un menú
ARIA. Una navegación única puede carecer de nombre; varias con propósitos
distintos necesitan distinguirse. HTML prioriza
[un main sin hidden por documento](https://html.spec.whatwg.org/multipage/grouping-content.html#the-main-element).
La story debe abrirse aislada en su iframe para no anidar el main de la actividad
en el de la presentación. No insertar la página completa dentro de las slides.

[WCAG 1.3.2](https://www.w3.org/WAI/WCAG22/Understanding/meaningful-sequence.html)
requiere una secuencia correcta determinable cuando el orden afecta al significado;
puede haber más de una secuencia correcta. La solución conserva en el DOM el orden
necesario para entender instrucciones; CSS cambia aspecto sin invertirlo. No
reparar un DOM incoherente mediante tabindex positivo ni `aria-flowto`.

## Información equivalente y propósito de los elementos

[WCAG 1.1.1](https://www.w3.org/WAI/WCAG22/Understanding/non-text-content.html)
exige alternativas según la función del contenido no textual; no una descripción
mecánica de todos los píxeles. El
[árbol de decisión WAI](https://www.w3.org/WAI/tutorials/images/decision-tree/)
distingue información, función y decoración según contexto: imagen informativa,
alt breve que aporta lo relevante; decorativa o redundante, `alt=""` explícito.
El mismo archivo puede necesitar alternativas distintas en contextos distintos.
La demo usa img con recurso local, no SVG inline; no añadir rol redundante.
[HTML-AAM img](https://www.w3.org/TR/html-aam/#el-img) define su exposición.
Que el DOM contenga alt no demuestra que el texto sea pertinente: revisión humana.

[APG Link](https://www.w3.org/WAI/ARIA/apg/patterns/link/) recomienda `a` con href:
el enlace conduce a un destino, Enter lo activa. El texto visible descriptivo
permite anticiparlo. [WCAG 2.4.4](https://www.w3.org/WAI/WCAG22/Understanding/link-purpose-in-context.html)
permite determinar propósito desde el texto y su contexto programáticamente
identificable; «Ver más» no es siempre un incumplimiento por sí solo. La mejora
enseñada funciona también al consultar una lista de enlaces. No usar
`aria-describedby` como si sustituyera el nombre: aporta descripción.

El botón nativo nombra una acción, por ejemplo «Inscribirme»; conserva el contrato
[APG Button](https://www.w3.org/WAI/ARIA/apg/patterns/button/) y el status ya
investigados en módulo 2. No añadir pressed/expanded a una acción simple.

El campo necesita una etiqueta visible que siga disponible después de escribir.
[WAI Labeling Controls](https://www.w3.org/WAI/tutorials/forms/labels/),
[HTML label](https://html.spec.whatwg.org/multipage/forms.html#the-label-element)
y [WCAG 3.3.2](https://www.w3.org/WAI/WCAG22/Understanding/labels-or-instructions.html)
sustentan `label` asociado mediante for/id. Un ID único por instancia evita
asociaciones ambiguas. [HTML placeholder](https://html.spec.whatwg.org/multipage/input.html#the-placeholder-attribute)
lo define como pista, no sustituto de label. La barrera es la ausencia de una
etiqueta persistente; no prometer que todos los lectores guardarán silencio:
[HTML-AAM](https://www.w3.org/TR/html-aam/) contempla información de placeholder
como respaldo en el cálculo del nombre de determinados campos. Tests JSDOM pueden
diferir del nombre calculado por el navegador real. Si se pide correo, usar
`type="email"` y `autocomplete="email"`; comprobar teclado móvil manualmente.

## Fuentes MagentaA11y y condiciones de uso

La aplicación web no entregó texto utilizable en la consulta. Se leyó la fuente
oficial por `gh api`, commit vigente
[`c0d97812d9298757f5a2d8902ed7671afb1aa9ba`](https://github.com/tmobile/magentaA11y/tree/c0d97812d9298757f5a2d8902ed7671afb1aa9ba).
El repositorio declara
[Apache-2.0](https://github.com/tmobile/magentaA11y/blob/c0d97812d9298757f5a2d8902ed7671afb1aa9ba/LICENSE.txt).
Esta nota conserva trazabilidad exacta por archivo, sección y escenario, con
paráfrasis propias; no reproduce integralmente el Gherkin ni declara conformidad
con toda la guía. Los originales siguientes conservan su redacción íntegra.

| Clave | Página concreta | Original fijado |
| --- | --- | --- |
| H | [Heading](https://www.magentaa11y.com/web-criteria/component/heading) | [heading.md](https://github.com/tmobile/magentaA11y/blob/c0d97812d9298757f5a2d8902ed7671afb1aa9ba/public/content/documentation/web/component/heading.md) |
| M | [Main](https://www.magentaa11y.com/web-criteria/page-level/main-landmark) | [main-landmark.md](https://github.com/tmobile/magentaA11y/blob/c0d97812d9298757f5a2d8902ed7671afb1aa9ba/public/content/documentation/web/page-level/main-landmark.md) |
| B | [Banner](https://www.magentaa11y.com/web-criteria/page-level/header-landmark) | [header-landmark.md](https://github.com/tmobile/magentaA11y/blob/c0d97812d9298757f5a2d8902ed7671afb1aa9ba/public/content/documentation/web/page-level/header-landmark.md) |
| N | [Navigation](https://www.magentaa11y.com/web-criteria/page-level/navigation-landmark) | [navigation-landmark.md](https://github.com/tmobile/magentaA11y/blob/c0d97812d9298757f5a2d8902ed7671afb1aa9ba/public/content/documentation/web/page-level/navigation-landmark.md) |
| F | [Footer](https://www.magentaa11y.com/web-criteria/page-level/footer) | [footer-landmark.md](https://github.com/tmobile/magentaA11y/blob/c0d97812d9298757f5a2d8902ed7671afb1aa9ba/public/content/documentation/web/page-level/footer-landmark.md) |
| I | [Informative image](https://www.magentaa11y.com/web-criteria/component/informative-image) | [informative-image.md](https://github.com/tmobile/magentaA11y/blob/c0d97812d9298757f5a2d8902ed7671afb1aa9ba/public/content/documentation/web/component/informative-image.md) |
| D | [Decorative image](https://www.magentaa11y.com/web-criteria/component/decorative-image) | [decorative-image.md](https://github.com/tmobile/magentaA11y/blob/c0d97812d9298757f5a2d8902ed7671afb1aa9ba/public/content/documentation/web/component/decorative-image.md) |
| L | [Link](https://www.magentaa11y.com/web-criteria/component/link) | [link.md](https://github.com/tmobile/magentaA11y/blob/c0d97812d9298757f5a2d8902ed7671afb1aa9ba/public/content/documentation/web/component/link.md) |
| T | [Text input](https://www.magentaa11y.com/web-criteria/component/text-input) | [text-input.md](https://github.com/tmobile/magentaA11y/blob/c0d97812d9298757f5a2d8902ed7671afb1aa9ba/public/content/documentation/web/component/text-input.md) |

En las matrices, G1/G2/G3 son los escenarios de teclado, lector de escritorio y
lector móvil de la sección Gherkin de cada original. «Automatizado» indica
capacidad de comprobar DOM/interacciones, no ejecución ya realizada. El README o
la auditoría final deben enlazar el test concreto y su resultado para cada fila.

## Contrato de estructura y secuencia

| Criterio / fuente | Clasificación | Evidencia prevista o motivo |
| --- | --- | --- |
| H, G2/G3 Name/Role/Group; HTML-AAM: headings con nombre, nivel y jerarquía | Automatizado | Roles heading, texto y niveles exactos en orden; un h1 de actividad; h2/h3 según relaciones. |
| H, G1 Tab / G2 Tab | Automatizado | user-event recorre enlaces/controles sin enfocar encabezados; no tabindex añadido a títulos. |
| H, G1 flechas / G2 / G3 | Manual | Lector desktop: comandos de lectura y encabezados; móvil: gesto de lectura; propósito, nivel y orden percibidos. No añadir manejadores de flechas. |
| M/B/N/F, G2/G3 Role/Group; HTML/APG | Automatizado | Un main aislado empieza por h1 y contiene contenido principal; banner/nav/contentinfo nativos en nivel correcto, con contenido correspondiente. |
| M/B/N/F, G2/G3 descubrimiento | Manual | Atajos/rotor de regiones y lectura secuencial desktop y móvil; semántica percibida y contenido agrupado. |
| M/B/N/F, G1 y Condensed Tab | Automatizado | Los controles de cada región que los contenga siguen el orden DOM; contenedores no añaden parada de Tab. |
| M/B/N/F, G1 desplazamiento y foco visible | Manual | Navegador real, lectura/Tab y desplazamiento; `toHaveFocus` no prueba dibujo ni scroll. |
| M/B/N/F, Condensed skip-links | No aplicable a la demo acotada si no los ofrece | El módulo enseña regiones; los ejemplos de enlaces de salto no obligan a añadir un salto a cada región. Si la página incorpora salto a main, probar href/ID, activación y foco real y reclasificarlo. |
| N, nombre cuando hay varias regiones navigation | No aplicable si solo hay una | Si se añade navegación en footer, nombrar ambas y probar las relaciones; no copiar la palabra «navegación» al nombre por obligación. |
| WCAG 1.3.2, secuencia de instrucciones | Automatizado | Orden DOM de los pasos correcto en solución y deliberadamente invertido en contraejemplo. |
| WCAG 1.3.2, secuencia comprendida y correspondencia visual | Manual | Leer sin depender de disposición visual, comparar con lectura real y a diferentes anchos. |
| ARIA heading custom, flowto y niveles >6 | No aplicable | Hay HTML nativo suficiente; no remediar orden mediante ARIA. |

## Contrato de imagen, enlace y campo

| Criterio / fuente | Clasificación | Evidencia prevista o motivo |
| --- | --- | --- |
| I, G2/G3 Name/Role; HTML-AAM img | Automatizado | img informativa con alt esperado y rol img/nombre; recurso local existente. |
| I, G1/G2/G3: percibir imagen y alternativa pertinente | Manual | Revisar pertinencia del alt para la imagen/contexto y anunciar con lector desktop/móvil. |
| D, G1/G2/G3: imagen decorativa, base DOM | Automatizado | Alt vacío, sin title/ARIA/foco que la haga significativa. |
| D, G1/G2/G3: omisión percibida | Manual | Lector real desktop/móvil confirma que la imagen decorativa se omite. |
| I/D, SVG inline, imágenes funcionales, complejas o animadas | No aplicable | La demo utiliza img estática informativa y decorativa; explicar la decisión por propósito sin implementar todos los tipos. |
| L, G2/G3 Name/Role; APG Link | Automatizado | a con href de destino válido, texto visible descriptivo y nombre coincidente, sin rol redundante. |
| L, G1 Tab/Enter | Automatizado | Foco con Tab y activación Enter/clic del enlace; href y destino identificado. No equiparar evento con navegación real. |
| L, G1/G2 destino, G3 Swipe/Doubletap | Manual | Navegador llega al destino, foco visible; lector desktop/móvil comunica propósito/rol y permite activar. |
| L, enlaces sin href, role custom, disabled | No aplicable | Navegación nativa habilitada. No tabindex para imitar enlace. |
| T, G2/G3 Name/Role y Developer notes Name | Automatizado | input con label visible asociado por for/id único, nombre y tipo esperado; etiqueta persiste tras escribir; clic en label enfoca. |
| T, G1 Tab | Automatizado | Recorrido hacia y desde campo, escribir/editar conserva valor y etiqueta. |
| T, G1 foco visible / G2/G3 lectura / Condensed teclado móvil | Manual | Foco perceptible, propósito y tipo anunciados; gestos y teclado virtual en dispositivo real. |
| T, G2/G3 Group hints/errors | No aplicable si no hay ayuda/error | Si se añade ayuda, probar relación aria-describedby y lectura real; no atribuir esa cobertura al label. |
| T, G2/G3 Group de campos | No aplicable | Campo único; no se fuerza fieldset/legend como decoración. |
| T, G2/G3 State required/disabled; variantes readonly | No aplicable | Campo opcional editable sin validación en módulo 3; el módulo posterior puede ampliar contrato. |
| Botón/status heredados, DOM/interacción | Automatizado | Reutilizar contrato y evidencia del módulo 2; probar integración. |
| Botón/status heredados, anuncio | Manual | Conservar pendiente anuncio real; DOM actualizado no lo acredita. |
| WCAG 2.5.3 Label in Name, heredado | Automatizado | Nombre contiene texto visible de enlace/botón/campo. |
| Activación por voz, heredado | Manual | Software de voz real sigue pendiente. |
| Barreras deliberadas de alt/enlace/placeholder | Automatizado | Test identifica cada barrera en su variante; no exigir que axe falle por alt inútil, texto genérico o placeholder. |
| axe de solución y estados representativos | Automatizado | Sin infracciones detectables; resultado limitado a reglas disponibles en JSDOM. |
| Contraste, foco visual, zoom, reflujo | Manual | Navegador/humano; axe JSDOM no acredita estos aspectos. |

## Divergencias y decisiones

Magenta formula algunas recomendaciones como reglas generales. Su instrucción de
no enfocar headings se aplica al Tab habitual del ejemplo: un destino de enlace de
salto con tabindex=-1 es otro uso y no debe declararse universalmente incorrecto.
Su G3 de main menciona header; se trata como texto inconsistente de la guía,
priorizando HTML/APG y el propósito de main. Los ejemplos de varias regiones main
no autorizan varios main HTML visibles en el mismo documento. Su sugerencia de
usar aria-describedby en un enlace genérico aporta descripción, no nombre; aquí
se mejora directamente el texto del enlace. Su texto sobre img sin alt no garantiza
una frase universal del lector: se registra únicamente el comportamiento observado.
No copiar sus variantes readonly/aria-disabled, popup o validación que no forman
parte de este módulo. HTML-AAM consultado es un Working Draft, no una prueba de
interoperabilidad. WCAG Understanding/APG/WAI son guías; distinguir recomendaciones
didácticas de requisitos normativos.

## Preparación reproducible de la demo con lector

Abrir cada story de página en su iframe aislado. Registrar sistema, versión de
navegador, lector y configuración. Comparar etapa con barrera y etapa corregida,
primero lista de encabezados, después regiones y lectura de instrucciones.

- VoiceOver/Safari en macOS: con VoiceOver activo, VO-U abre menús del rotor;
  izquierda/derecha elige Encabezados, arriba/abajo recorre y Return lleva al
  elemento. VO representa Control+Option o la tecla configurada. Si la categoría
  no aparece, revisar las categorías activas del rotor. Fuente:
  [manual oficial Apple](https://support.apple.com/en-ie/guide/voiceover/mchlp2719/mac).
- NVDA/Firefox o Chrome en Windows: en modo exploración, H y Shift+H recorren
  encabezados; D y Shift+D regiones; flechas leen la secuencia. El foco de edición
  cambia la interpretación de las teclas, por lo que hay que salir del campo o
  volver a modo exploración. Fuente:
  [manual NVDA estable, 2026.2 al consultar](https://download.nvaccess.org/releases/stable/documentation/en/userGuide.html#SingleLetterNavigation).

La expectativa es semántica: localizar actividad/secciones, distinguir niveles,
alcanzar contenido principal y comprender pasos. No inventar transcripciones ni
una frase idéntica para todas las combinaciones. Si no se ejecuta lector real,
marcar **pendiente manual**. La inspección de roles con navegador o Testing Library
no sustituye la demostración auditiva.

## Auditoría posterior y límites

Auditar **tests** por separado contra las matrices: rol, nombre, asociaciones,
atributos funcionales, tabulación, activación y transiciones; indicar evidencia
concreta y brecha. Auditar **documentación** por separado: precisión de cada regla,
trazabilidad al original, estados no aplicables, promesas sobre AT y límites de axe.
Cruzar ambos resultados en la auditoría local de módulo antes de pedir revisión.
Mantener explícitos ensayo humano de nueve minutos por lección, revisión visual
final humana y validaciones AT/voz/zoom no ejecutadas. La construcción de slides y
Storybook no acredita ninguna de ellas.

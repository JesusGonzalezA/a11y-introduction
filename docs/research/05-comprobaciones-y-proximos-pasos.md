# Investigación del módulo 5: Comprobaciones y próximos pasos

Consulta: **2026-10-09**, antes de implementar el módulo. Alcance:
[issue #6](https://github.com/JesusGonzalezA/a11y-introduction/issues/6),
[temario #1](https://github.com/JesusGonzalezA/a11y-introduction/issues/1).
Tres lecciones de 4, 4 y 2 minutos. Se reutilizan la página de actividad y los
contratos de [módulo 3](03-dar-significado-al-contenido.md) y
[módulo 4](04-interaccion-y-percepcion.md). Esta nota documenta el delta de
inspección; no acredita una auditoría completa ni repite los patrones heredados.

## Bookmarklets seleccionados: documentación y código del autor

Un bookmarklet es un marcador cuya dirección ejecuta JavaScript sobre la página
actual. El [catálogo de Paul J. Adam](https://pauljadam.com/bookmarklets/)
ofrece los enlaces de instalación y demos. Para preparar la clase: mostrar la
barra de marcadores, abrir cada ficha y arrastrar su enlace de instalación a esa
barra. Como alternativa, la ficha ofrece el código URL para editar un marcador.
Abrir la actividad aislada y activar el marcador guardado; recargar para retirar
las anotaciones antes de cambiar de comprobación. No basta guardar la URL de la
ficha: el marcador debe contener el código `javascript:` ofrecido por el autor.

| Herramienta real | Resultado documentado y lectura didáctica |
| --- | --- |
| [Headings Bookmarklet](https://pauljadam.com/bookmarklets/headings.html) | Inserta anotaciones con etiquetas de apertura/cierre de h1–h6 y headings ARIA de niveles 1–6. Leer esos niveles y compararlos con las relaciones entre título, sección y subsección. No interpreta por nosotros si la estructura tiene sentido. |
| [Images Bookmarklet](https://pauljadam.com/bookmarklets/images.html) | Superpone información de imágenes y el valor de alt, incluido alt vacío. En imágenes simples sin nombres alternativos, distingue la ausencia de alt. Que aparezca alt o una señal verde no acredita que el texto sea útil en ese contexto. |

Se contrastó el código oficial en commit
[`82ebdc1a357fa83db441c25ef15e6e1efcf0b30e`](https://github.com/pauljadam/bookmarklets/tree/82ebdc1a357fa83db441c25ef15e6e1efcf0b30e),
archivos [headings.js](https://github.com/pauljadam/bookmarklets/blob/82ebdc1a357fa83db441c25ef15e6e1efcf0b30e/headings.js)
e [images.js](https://github.com/pauljadam/bookmarklets/blob/82ebdc1a357fa83db441c25ef15e6e1efcf0b30e/images.js).
La instalación carga scripts externos; estos cargan jQuery. El código de Images
consultado usa borde verde sólido y anotaciones con interrogaciones; la descripción
de la ficha menciona borde discontinuo. Enseñar el atributo y su interpretación,
sin prometer una decoración exacta ni que todo verde equivalga a aprobado.
El catálogo limita la inspección de iframes a mismo origen. Abrir la story aislada
evita mezclar los encabezados de la interfaz de Storybook con los de la actividad.

**Estado:** selección, enlaces, instalación y comportamiento contrastados con
documentación/código. La autora ejecutó mediante CUA, en el navegador integrado,
los enlaces `javascript:` oficiales en sus propias páginas: Headings insertó las
etiquetas HTML/ARIA e Images mostró alt vacío, ausencia de alt y los valores de
ejemplo. Es ejecución real del código del enlace. **Guardar en la barra y ejecutar
en la actividad local siguen pendientes**. El botón de demo Show Headings no
produjo etiquetas en ese intento; el DOM mostró un script HTTP, mientras el enlace
instalable HTTPS sí funcionó. Usar el enlace de instalación, no ese botón como
sustituto de la preparación. Si alguna política impide completar los pasos,
registrar el bloqueo exacto y no sustituir la evidencia por una simulación.

## FastPass oficial y demo reproducible

Instalar Accessibility Insights for Web desde
[Downloads oficial](https://accessibilityinsights.io/downloads/), usando la opción
de Chrome o Edge. La [guía FastPass](https://accessibilityinsights.io/docs/web/getstarted/fastpass/)
distingue análisis automático, recorrido asistido de teclado y casos que requieren
revisión humana. Procedimiento acotado para la clase:

1. Abrir la story aislada con campo sin etiqueta y lanzar la extensión; elegir
   **FastPass** para iniciar **Automated checks**.
2. Expandir el resultado relacionado con el nombre del campo y seleccionar su
   instancia para localizarlo resaltado. Leer la explicación y propuesta de arreglo.
   **Inspect HTML** requiere tener DevTools abierto.
3. Abrir la versión corregida mediante label visible asociado por for/id; volver a
   ejecutar el análisis sobre esa página. Registrar resultado real y versión.
4. Elegir **Tab stops**, recargar la página objetivo, activar **Show tab stops** y
   recorrer controles con Tab y Shift+Tab. Las marcas numeradas reflejan el recorrido
   realizado; revisar orden, alcance, salida y foco visible. Registrar el juicio humano.

Los resultados **Needs review** requieren decisión humana. Cero fallos automáticos
no garantiza accesibilidad. FastPass usa axe-core, pero ejecutar axe en tests no
equivale a ejecutar esta extensión ni su recorrido asistido.

**Estado de ejecución:** pendiente. Durante preparación, la herramienta de navegador
CUA bloqueó `chrome://extensions/` por su política de URL; la instrucción del bloqueo
prohíbe rodearlo mediante otra vía. No se acredita instalación ni ejecución de la
extensión y no se simula con axe. Mantener este límite en el registro de entrega;
el procedimiento anterior sigue preparado para ejecución humana autorizada.

## Contrato del delta de la actividad

La barrera 5.1 conserva el título h1, pero presenta secciones h3 y una subsección
h2. Corregirlas a h2 y h3 expresa sus relaciones: [WAI headings](https://www.w3.org/WAI/tutorials/page-structure/headings/)
y [WCAG 1.3.1](https://www.w3.org/WAI/WCAG22/Understanding/info-and-relationships.html).
Volver de h3 a h2 para otra sección puede ser correcto. No afirmar que cualquier
salto de nivel incumple automáticamente WCAG o que WCAG impone exactamente un h1.
[HTML headings](https://html.spec.whatwg.org/multipage/sections.html#headings-and-outlines)
y [HTML-AAM h1–h6](https://www.w3.org/TR/html-aam/#el-h1-h6) sustentan el nivel nativo.

El alt `actividad.svg` demuestra que existir no basta: se contrasta su utilidad con
la imagen y el propósito de la página. La solución conserva la alternativa
contextual heredada, según [WAI, árbol de decisión](https://www.w3.org/WAI/tutorials/images/decision-tree/)
y [WCAG 1.1.1](https://www.w3.org/WAI/WCAG22/Understanding/non-text-content.html).
Usar img nativa y su [mapeo HTML-AAM](https://www.w3.org/TR/html-aam/#el-img).

La barrera 5.2 elimina label y placeholder del campo para no introducir un nombre
de respaldo. Tampoco debe incluir title, aria-label ni aria-labelledby. En la
solución, label visible y persistente «Nombre (opcional)» usa for/id único; el tipo
text permanece.
Fuentes: [WAI Labels](https://www.w3.org/WAI/tutorials/forms/labels/),
[HTML label](https://html.spec.whatwg.org/multipage/forms.html#the-label-element),
[HTML-AAM input text](https://www.w3.org/TR/html-aam/#el-input-text),
[WCAG 3.3.2](https://www.w3.org/WAI/WCAG22/Understanding/labels-or-instructions.html)
y [WCAG 4.1.2](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value.html).
No prometer silencio del lector ni una frase universal cuando falta nombre.
[APG Read Me First](https://www.w3.org/WAI/ARIA/apg/practices/read-me-first/)
respalda preferir semántica nativa; aquí no hay widget compuesto que reconstruir.

## MagentaA11y y clasificación de evidencia

Se comprobó que el commit oficial sigue siendo
[`c0d97812d9298757f5a2d8902ed7671afb1aa9ba`](https://github.com/tmobile/magentaA11y/tree/c0d97812d9298757f5a2d8902ed7671afb1aa9ba).
Se consultaron los originales de
[Heading](https://github.com/tmobile/magentaA11y/blob/c0d97812d9298757f5a2d8902ed7671afb1aa9ba/public/content/documentation/web/component/heading.md),
[Informative image](https://github.com/tmobile/magentaA11y/blob/c0d97812d9298757f5a2d8902ed7671afb1aa9ba/public/content/documentation/web/component/informative-image.md)
y [Text input](https://github.com/tmobile/magentaA11y/blob/c0d97812d9298757f5a2d8902ed7671afb1aa9ba/public/content/documentation/web/component/text-input.md).
Se conservan sus criterios mediante paráfrasis, con G1/G2/G3 = escenarios de teclado,
lector de escritorio y lector móvil. Citas breves de referencia: Heading, Developer
notes Group: «Headings must be logically ordered»; Informative image, G2: «the content
of the image alt text is clear»; Text input, Developer notes Name: «Don't hide the
label on focus». Aplican los límites y divergencias ya documentados en módulo 3.

| Criterio concreto | Clasificación | Evidencia necesaria en este módulo |
| --- | --- | --- |
| Heading G2/G3 Name/Role/Group; HTML-AAM | Automatizado | Assertar texto, roles y niveles del contraejemplo y solución; mantener título/sección/subsección. |
| Heading G1/G2 Tab | Automatizado | Encabezados sin paradas de Tab añadidas; recorrido conserva controles heredados. |
| Heading G2/G3 anuncio/navegación | Manual | Lector real reconoce niveles y estructura; bookmarklet no acredita anuncio. |
| Informative image G2/G3 Name/Role | Automatizado | Verificar img y alt concreto según variante; existencia no prueba calidad. |
| Informative image G1/G2/G3 comprensión | Manual | Revisar imagen/contexto y alternativa; lectura desktop/móvil real pendiente. |
| Text input Developer notes Name/Role | Automatizado | Solución tiene label visible asociado, nombre y textbox nativos; ausencia explícita del nombre en barrera. |
| Text input G1 y Name | Automatizado | Tab entra/sale; escribir mantiene valor y etiqueta; clic en label enfoca. |
| Text input G1 foco visual, G2/G3 anuncio/gestos | Manual | Navegador, lector real y teclado móvil; no inferir de toHaveFocus ni DOM. |
| Text input Group/State, validación avanzada | No aplicable al delta | No se añaden agrupaciones, estados disabled/readonly ni validación nueva; conservar contrato heredado si la etapa usada los presenta. |
| Headings ARIA, imágenes interactivas/SVG inline, widgets compuestos APG | No aplicable | Se inspeccionan elementos HTML nativos ya existentes. |
| Bookmarklets: instalación, activación, lectura de superposición | Manual | Enlaces oficiales ejecutados en sus demos; guardado en barra y ejecución sobre actividad local pendientes. |
| FastPass Automated checks | Automatizado, ejecución pendiente | Registrar extensión/versión/página/resultado cuando se ejecute; tests axe separados. |
| FastPass Tab stops y Needs review | Manual asistido, pendiente | Recorrido y juicio humano; numeración no demuestra teclado totalmente accesible. |
| Tests de solución con axe y barrera de nombre | Automatizado | Registrar resultados de tests propios; no atribuirlos a FastPass ni AT. |
| Zoom, reflujo, voz, móvil, AT y revisión visual final | Manual | Pendientes hasta contar con ejecución real identificada. |

La auditoría final debe separar **tests** (asserts concretos y resultado) de
**documentación** (fuentes, procedimientos, nombres correctos y límites). Clasificar
un criterio como automatizable no significa haberlo comprobado todavía.

## Continuación: nombres del temario y disponibilidad verificada

Se consultaron [catálogo público weAAAre](https://weaaare.com/cursos) y fichas
enlazadas desde él. Disponibilidad significa ficha pública que presenta curso y
acceso, no compra ni revisión de lecciones de una cuenta de pago.

| Ruta formativa prevista en #6 | Enlace público comprobado y estado al consultar |
| --- | --- |
| HTML Semántico | [HTML Semántico para diseñadores](https://weaaare.com/cursos/curso-accesibilidad-digital-html-semantico-para-disenadores). Ficha pública verificada; conservar su título real al enlazar. |
| Fundamentos de ARIA | [Introducción a ARIA](https://weaaare.com/cursos/curso-accesibilidad-digital-introduccion-a-aria). Ficha de curso premium; «Fundamentos de ARIA» es un módulo del curso. |
| Testing de componentes para accesibilidad | [Testing de accesibilidad para desarrolladores](https://weaaare.com/cursos/curso-testing-de-accesibilidad-digital-para-desarrolladores). Ficha de curso premium; usar título real. |
| Formularios / navegación | Navegación: [ARIA Avanzado: Navegación accesible](https://weaaare.com/cursos/aria-avanzado-navegacion-accesible), ficha premium verificada. Curso específico de Formularios: **URL y publicación no verificadas**. |
| Data Display futuro | **Sin URL ni publicación verificadas**. Mantenerlo como continuación futura prevista, sin inventar enlace o fecha. |

La búsqueda oficial de Formularios encuentra un
[taller de formularios accesibles](https://www.weaaare.com/talleres/formularios-accesibles)
marcado como ya celebrado, que no demuestra publicación de un curso asíncrono ni
acceso actual a su grabación. No intercambiarlo por el curso previsto. Recursos
primarios de apoyo: [WAI formularios](https://www.w3.org/WAI/tutorials/forms/labels/),
[WAI estructura y encabezados](https://www.w3.org/WAI/tutorials/page-structure/headings/)
y [APG](https://www.w3.org/WAI/ARIA/apg/practices/read-me-first/).
No abrir otra demo en el cierre: reunir herramientas, actividad y ruta de aprendizaje.

## Límites de la investigación

Se verificaron las fuentes públicas y código indicados. La autora ejecutó los
enlaces de bookmarklets en sus demos oficiales; quedan pendientes guardarlos en
barra y ejecutarlos sobre actividad local. No se ejecutaron extensión, lector,
voz, móvil, zoom ni ensayo cronometrado. La autoría debe conservar estos pendientes;
builds y tests no sustituyen la revisión visual humana final ni los ensayos de
4/4/2 minutos.

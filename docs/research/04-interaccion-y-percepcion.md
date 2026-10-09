# Investigación del módulo 4: Permitir la interacción y la percepción

Fecha de consulta: **2026-10-09**, antes de implementar. Alcance:
[issue #5](https://github.com/JesusGonzalezA/a11y-introduction/issues/5) y
[temario #1](https://github.com/JesusGonzalezA/a11y-introduction/issues/1).
Lecciones 4.1 (9 minutos) y 4.2 (8 minutos). Este contrato amplía la página de
actividad de módulos anteriores. Reutiliza la investigación de
[botón y confirmación](02-entender-la-accesibilidad.md) y de
[estructura, enlace y campo](03-dar-significado-al-contenido.md); no vuelve a
implementar esos patrones. Es evidencia de consulta y un contrato previo, no un
registro de pruebas superadas.

## Poder operar, localizar el foco y continuar

[WCAG 2.1.1, Keyboard](https://www.w3.org/WAI/WCAG22/Understanding/keyboard.html)
requiere que la funcionalidad sea operable mediante interfaz de teclado, salvo
funciones dependientes del recorrido del movimiento. Esta inscripción no tiene
esa excepción. Un control inalcanzable es una señal para investigar: el criterio
evalúa la funcionalidad, y puede existir una alternativa de teclado equivalente.
No afirmar que cualquier control excluido de Tab incumple automáticamente WCAG.

[APG Keyboard Interface](https://www.w3.org/WAI/ARIA/apg/practices/keyboard-interface/)
explica Tab/Shift+Tab entre controles, foco perceptible y orden DOM como base
predecible. Los widgets compuestos pueden usar flechas dentro de una parada de
Tab; no son objeto del módulo. Tab no es un comando para leer cada párrafo.
En macOS, revisar la configuración de navegación por teclado del sistema y del
navegador si Tab omite enlaces antes de atribuirlo al código.

[APG Button](https://www.w3.org/WAI/ARIA/apg/patterns/button/): Enter y Espacio
activan el botón; si la acción conserva el contexto, el foco suele permanecer en
él. [APG Link](https://www.w3.org/WAI/ARIA/apg/patterns/link/): Enter activa el
enlace. Espacio no es una activación de enlace que debamos añadir. Mantener
`button` y `a href` nativos y sus nombres visibles heredados; no añadir
`role`, `aria-pressed` o `aria-expanded` a una acción simple.

[HTML tabindex](https://html.spec.whatwg.org/multipage/interaction.html#the-tabindex-attribute)
define participación y orden de navegación secuencial; valores positivos alteran
prioridades y no reparan un orden de lectura incoherente. La solución conserva
el DOM lógico sin tabindex positivo. [HTML button](https://html.spec.whatwg.org/multipage/form-elements.html#the-button-element)
y [HTML-AAM button](https://www.w3.org/TR/html-aam/#el-button) sustentan la acción
y el rol nativos; el tipo del botón debe corresponder a su integración real en
el formulario. HTML-AAM es un documento de mapeos, no una prueba de soporte AT.

[WCAG 2.4.3, Focus Order](https://www.w3.org/WAI/WCAG22/Understanding/focus-order.html)
requiere preservar significado y operación, no un único orden geométrico. Comparar
DOM, recorrido de teclado y disposición; puede haber varios recorridos válidos.
[WCAG 2.1.2, No Keyboard Trap](https://www.w3.org/WAI/WCAG22/Understanding/no-keyboard-trap.html)
exige poder salir usando teclado. Si la salida necesita un método distinto de
Tab/flechas o métodos estándar, debe explicarse. Un modal cerrable no es por sí
solo una trampa incumplidora. Decisión didáctica: explicar el bloqueo con código
no ejecutable; **no interceptar Tab ni crear una trampa activa** en las stories.
Así se mantiene la navegación del entorno incluso en contraejemplos.

[WCAG 2.4.7, Focus Visible](https://www.w3.org/WAI/WCAG22/Understanding/focus-visible.html)
exige un indicador visible durante la operación con teclado. Eliminar `outline`
sin sustituto visible oculta dónde se actuará. El contraejemplo sin foco debe
estar rotulado y acotado a su propia página; la solución conserva o define
un indicador visible. `toHaveFocus()` solo verifica foco DOM, no su dibujo.
[WCAG 2.4.11, Focus Not Obscured](https://www.w3.org/WAI/WCAG22/Understanding/focus-not-obscured-minimum.html)
exige que el componente enfocado no quede totalmente oculto por contenido creado
por el autor. Revisarlo también al ampliar. No presentar un tamaño de anillo de
2 píxeles como requisito de 2.4.7: las métricas adicionales de apariencia son
[2.4.13, nivel AAA](https://www.w3.org/TR/WCAG22/#focus-appearance).

## Percibir información sin depender de un color

[WCAG 1.4.1, Use of Color](https://www.w3.org/WAI/WCAG22/Understanding/use-of-color.html)
exige otra señal visual cuando el color transmite información. «Plazas
disponibles» y «Actividad completa» visibles comunican disponibilidad sin
interpretar verde/rojo. Un `aria-label` o texto solo para lectores no resuelve
la necesidad de personas videntes que no distinguen esos colores. Los colores
pueden conservarse como refuerzo; no describir una simulación en gris como la
experiencia universal de daltonismo. Esta disponibilidad puede ser contenido
estático; no necesita un rol interactivo ni una región viva si no cambia.

[WCAG 1.4.3, Contrast Minimum](https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum.html)
fija 4.5:1 para texto normal y 3:1 para texto grande: al menos 18 pt, o 14 pt en
negrita (24 y aproximadamente 18.67 píxeles CSS). Son umbrales sin redondear:
4.499 no cumple 4.5. Medir color de texto contra su fondo efectivo, también en
estados de interacción, no escoger un píxel suavizado de una captura. Logos,
texto incidental e interfaces inactivas tienen excepciones; el aviso informativo
no queda exento por ser secundario ni por usar colores de marca.

[WCAG 1.4.11, Non-text Contrast](https://www.w3.org/WAI/WCAG22/Understanding/non-text-contrast.html)
fija 3:1 contra colores adyacentes para información visual necesaria para
identificar controles, estados y gráficos significativos, con sus excepciones.
Aplica al indicador de foco personalizado; no significa que todos los bordes
decorativos necesiten 3:1. Un punto redundante junto al estado textual no debe
convertirse en la única señal significativa. El contraste entre rojo y verde no
sustituye el contraste texto/fondo ni la alternativa visible al color.

La [definición WCAG del contraste](https://www.w3.org/TR/WCAG22/#dfn-contrast-ratio)
usa luminancia relativa: (L más clara + 0.05)/(L más oscura + 0.05).
Para la demo bastan dos colores sólidos conocidos y un cálculo reproducible;
registrar colores computados, fondo efectivo, ratio sin redondeo para decidir y
umbral. Un ratio calculado desde constantes CSS demuestra esa pareja, no que
sean los colores finalmente pintados en todas las situaciones. Confirmar en
navegador o dejar explícita la comprobación pendiente.

## Ampliar y reorganizar sin perder información

[WCAG 1.4.4, Resize Text](https://www.w3.org/WAI/WCAG22/Understanding/resize-text.html)
requiere ampliar el texto hasta 200 % sin perder contenido ni funcionalidad,
con excepción de subtítulos e imágenes de texto. Incluye texto de controles y
etiquetas. El navegador puede proporcionar el mecanismo; no hace falta construir
un zoom propio. Comprobar también pasos intermedios disponibles. No confundir
zoom CSS, escalado de capturas o fuente grande artificial con una prueba del
zoom del navegador ejecutada por la persona.

[WCAG 1.4.10, Reflow](https://www.w3.org/WAI/WCAG22/Understanding/reflow.html)
requiere que el contenido de lectura vertical se presente a un ancho equivalente
a 320 píxeles CSS sin pérdida ni desplazamiento en dos dimensiones, salvo partes
que necesitan una disposición bidimensional. Equivale a un viewport inicial de
1280 píxeles CSS al 400 %; un viewport de 320 permite comprobar reflujo, pero no
acredita por sí solo el zoom. La página de inscripción y su aviso no justifican
la excepción de mapas, tablas o presentaciones. El scroll vertical es esperado.
Un ancho/alto fijo y `overflow: hidden` en un aviso pueden recortar información;
la solución deja crecer el contenido, ajusta ancho y permite saltos de línea.

## MagentaA11y: páginas concretas, trazabilidad y reutilización

La web de MagentaA11y no devolvió texto utilizable. Se consultó el repositorio
oficial por `gh api`, cuya rama main sigue en
[`c0d97812d9298757f5a2d8902ed7671afb1aa9ba`](https://github.com/tmobile/magentaA11y/tree/c0d97812d9298757f5a2d8902ed7671afb1aa9ba)
el 2026-10-09. No existe en el árbol consultado una página de criterio
`color-contrast`; contraste y reflujo se fundamentan directamente en WCAG.
Las fuentes heredadas de botón/enlace/campo se releen por su nuevo papel en el
recorrido; se añaden formulario y página básica para contraste del contrato.

| Clave | Página | Original con Gherkin íntegro |
| --- | --- | --- |
| B | [Button](https://www.magentaa11y.com/web-criteria/component/button) | [button.md](https://github.com/tmobile/magentaA11y/blob/c0d97812d9298757f5a2d8902ed7671afb1aa9ba/public/content/documentation/web/component/button.md) |
| L | [Link](https://www.magentaa11y.com/web-criteria/component/link) | [link.md](https://github.com/tmobile/magentaA11y/blob/c0d97812d9298757f5a2d8902ed7671afb1aa9ba/public/content/documentation/web/component/link.md) |
| T | [Text input](https://www.magentaa11y.com/web-criteria/component/text-input) | [text-input.md](https://github.com/tmobile/magentaA11y/blob/c0d97812d9298757f5a2d8902ed7671afb1aa9ba/public/content/documentation/web/component/text-input.md) |
| F | [Form](https://www.magentaa11y.com/web-criteria/page-level/form) | [form.md](https://github.com/tmobile/magentaA11y/blob/c0d97812d9298757f5a2d8902ed7671afb1aa9ba/public/content/documentation/web/page-level/form.md) |
| P | [Basic web page](https://www.magentaa11y.com/web-criteria/page-level/basic-web-page) | [basic-web-page.md](https://github.com/tmobile/magentaA11y/blob/c0d97812d9298757f5a2d8902ed7671afb1aa9ba/public/content/documentation/web/page-level/basic-web-page.md) |

Magenta declara [Apache-2.0](https://github.com/tmobile/magentaA11y/blob/c0d97812d9298757f5a2d8902ed7671afb1aa9ba/LICENSE.txt).
Esta investigación usa paráfrasis y enlaza los escenarios exactos; no copia el
Gherkin completo ni atribuye cobertura de toda la guía. WAI permite uso con
atribución según [Permission to use WAI material](https://www.w3.org/WAI/about/using-wai-material/).
Las explicaciones y ejemplos del curso son propios; conservar enlaces y no
presentar adaptaciones como texto oficial. WCAG es la norma; Understanding,
APG y Magenta son explicaciones, patrones y criterios auxiliares.

## Matriz previa de cobertura

G1/G2/G3 remiten a las secciones Gherkin teclado/lector de escritorio/lector
móvil de cada original; P añade G4 de ampliación. «Automatizado» describe lo
comprobable, **no ejecutado todavía**. La auditoría final debe enlazar evidencia
concreta por fila y registrar brechas. Si se introduce una API nueva o un estado
adicional, ampliar la matriz antes de afirmar cobertura.

| Criterio y fuente | Clasificación | Evidencia prevista o justificación |
| --- | --- | --- |
| B/L/T G2/G3: nombre/rol; HTML/HTML-AAM | Automatizado | Conservar controles nativos, nombres visibles, label/for/id único y tipo/autocomplete heredados. Probar por rol/nombre en integración. |
| B/L/T G1: alcanzar y salir; F G1 orden; WCAG 2.1.1/2.4.3 | Automatizado | Tab y Shift+Tab desde enlace/campo hasta inscripción y salida del escenario; escribir y editar valor; sin tabindex positivo. |
| B G1 activación | Automatizado | Enter, Espacio y clic producen una acción por interacción y confirmación observable; foco permanece si no cambia contexto. |
| L G1 activación | Automatizado | Enter/clic y href correcto; evento en JSDOM no demuestra navegación real. |
| L G1/G2/G3 destino | Manual | Navegador llega al destino; lector desktop/móvil permite interpretar y activar enlace. |
| B/L/T G1 foco; F G1; P Condensed Tab; WCAG 2.4.7/2.4.11 | Manual | Navegador con teclado muestra cada foco, también al ampliar; control no totalmente tapado. Comparar variante con/sin indicador. |
| WCAG 2.1.2 salida | Automatizado | No captura de Tab; recorrido entra/sale en ambos sentidos. Concepto de trampa explicado sin ejecutarla. |
| WCAG 2.1.2 salida del entorno | Manual | Salir de story/iframe con teclado real, configuración registrada. |
| B/L/T G2: propósito/rol/estado/acción; F G2 modo formulario | Manual | NVDA + Firefox/Chrome y VoiceOver + Safari: recorrer y operar. No exigir una frase literal ni un cambio de modo idéntico entre lectores. |
| B/L/T G3; F G3 | Manual | VoiceOver iOS/Safari o TalkBack Android/Chrome: gestos, propósito, estados y acción; teclado virtual del input. |
| B popup/pressed/expanded/disabled; T required/disabled/readonly | No aplicable si no ofrecidos | Acción simple y campo editable opcional heredados. No añadir estados para satisfacer ejemplos ajenos. |
| T Group hints/errors; F Condensed errores | No aplicable si ausentes | No se incorpora validación nueva. Si se añade ayuda/error, probar relación y percepción real. |
| T/F grupo de campos | No aplicable con campo único heredado | No introducir fieldset de adorno. Si se añaden campos relacionados, revisar agrupación y actualizar contrato. |
| F controles y formulario nativo; [HTML form](https://html.spec.whatwg.org/multipage/forms.html#the-form-element) | Automatizado | ActivityPage en etapa content ya contiene un form único, sin nombre accesible, con onSubmit que cancela la navegación, un campo opcional y RegistrationAction type=submit. Conservar y verificar esta integración y la acción observable. |
| F G2/G3: nombres para distinguir múltiples formularios | No aplicable | Solo existe un formulario en la página de actividad aislada; no hay varios formularios que distinguir. |
| F G2/G3: descubrimiento como landmark con nombre; [HTML-AAM form](https://www.w3.org/TR/html-aam/#el-form) y [APG Form Landmark](https://www.w3.org/WAI/ARIA/apg/patterns/landmarks/examples/form.html) | No aplicable al contrato de landmark elegido | Se conserva el form nativo heredado sin nombre, por lo que no se promete una región form localizable por atajos. HTML no obliga a convertir cada formulario en landmark; para exponerlo como tal hace falta nombre accesible y APG recomienda identificarlo desde texto visible. Magenta espera ese descubrimiento: esta recomendación queda fuera del alcance elegido, y no se declara cobertura completa de su página. Los controles y su recorrido sí se verifican. |
| F skip-links | No aplicable | No son una interacción nueva en este módulo ni exigencia de añadir un salto por formulario. |
| P G1/G2/G3 título/regiones | Automatizado + manual heredado | Mantener estructura de módulo 3 en iframe aislado; DOM prueba roles; título de documento y atajos/rotor requieren navegador/AT. |
| P G3 orientación | Manual | Dispositivo o navegador en vertical/horizontal; verificar que contenido y acciones permanecen accesibles. |
| P G4/Condensed zoom; WCAG 1.4.4 | Manual | Zoom real 100→200 %, incluidos pasos intermedios: texto mayor, sin recortes y botón disponible. Registrar navegador, zoom y viewport. |
| WCAG 1.4.10 reflujo | Manual | Navegador a 320 CSS px y, aparte, 1280 al 400 % cuando se ejecute zoom; leer y operar sin scroll horizontal ni pérdida. |
| WCAG 1.4.1 estado disponible/completo | Automatizado | Texto visible de cada estado en solución; contraejemplo solo color identificado, sin confundir nombre accesible con alternativa visual. |
| WCAG 1.4.1 significado visible | Manual | Sin identificar tonos todavía se entiende cada estado; revisión de pertinencia y visibilidad real. |
| WCAG 1.4.3 pareja texto/fondo | Manual / cálculo reproducible | Colores computados y ratio contrastados en navegador; constantes calculadas no acreditan pintura, cascada ni composición. |
| WCAG 1.4.11 control/foco | Manual / cálculo reproducible | Identificar las señales necesarias y colores adyacentes; medir y mirar foco en navegador. |
| Barreras CSS deliberadas | Automatizado limitado | Identificar la variante y sus datos; el DOM no demuestra recorte, bajo contraste ni ausencia del dibujo de foco. |
| axe solución y confirmación | Automatizado | Estados inicial y posterior sin infracciones detectables; no equivale a contraste, zoom, voz o lector real. |
| Confirmación dinámica status | Automatizado + manual heredado | Mantener contrato de módulo 2; DOM de mensaje y foco comprobables, anuncio con AT pendiente si no ejecutado. |
| Voz | Manual | Activación por nombre visible en software de voz real; no acreditada por getByRole. |
| Widgets ARIA compuestos, foco roving, diálogos | No aplicable | Fuera del alcance introductorio; no construirlos para demostrar teclado básico. |

## Evidencia que debe quedar al cerrar la implementación

Auditar por separado **tests** (roles, nombres, asociaciones, atributos, teclado,
estados y transiciones) y **documentación** (precisión normativa, escenarios
aplicables, límites y fuentes), cruzándolos después con la matriz. Una prueba que
comprueba clases CSS no acredita el efecto visual que esa clase intenta producir.
Registrar por superficie el navegador, ancho, zoom, acciones, resultado observado
y cualquier bloqueo de herramienta, sin convertir una intención en evidencia.

La revisión visual final del autor humano, ensayo de nueve/ocho minutos, lectores
de pantalla, voz, gestos y zoom/reflujo que no se hayan ejecutado permanecen
**pendientes manuales explícitos**. Construir Storybook y aprobar axe no los
sustituye. Las cifras históricas de soporte de la skill aria-patterns son avisos
para investigar, no mediciones del módulo: la implementación nativa limita ARIA
nuevo y no promete interoperabilidad por la presencia de un atributo.

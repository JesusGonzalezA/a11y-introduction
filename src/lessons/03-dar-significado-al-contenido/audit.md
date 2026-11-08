# Auditoría del módulo 3

> **Nota (#13).** Los ejemplos auditados aquí se sustituyeron por páginas de
> ejemplo con conmutador de arreglo. Esta auditoría conserva la evidencia
> histórica de los ejemplos anteriores; la evidencia automatizada actual está en
> los README de cada lección y en los tests de cada página. La matriz manual
> sigue vigente como lista de comprobaciones pendientes.

Pasada separada de la autoría, **2026-10-09**. Alcance: delta propio de #4 sobre
`f98c911610a80bfa7f1fe33b7c0dec61317db7e8` (PR #8, que hereda #7).
La [investigación](../../../docs/research/03-dar-significado-al-contenido.md) quedó
registrada en el commit `e4dbb7a` antes de implementar. Se releyeron los nueve
originales Magenta fijados en esa nota (H/M/B/N/F/I/D/L/T), sus Gherkin y
condicionales, y se contrastaron por separado tests y documentación con
[WAI headings](https://www.w3.org/WAI/tutorials/page-structure/headings/),
[WCAG secuencia](https://www.w3.org/WAI/WCAG22/Understanding/meaningful-sequence.html),
[APG main](https://www.w3.org/WAI/ARIA/apg/patterns/landmarks/examples/main.html),
[HTML main](https://html.spec.whatwg.org/multipage/grouping-content.html#the-main-element),
[WAI alt](https://www.w3.org/WAI/tutorials/images/decision-tree/),
[WAI label](https://www.w3.org/WAI/tutorials/forms/labels/),
[APG Link](https://www.w3.org/WAI/ARIA/apg/patterns/link/) y
[HTML-AAM](https://www.w3.org/TR/html-aam/).
El contrato heredado de botón/status se preserva; no se usa la implementación
como fuente normativa ni se trasladan cifras históricas de soporte ARIA a las slides.

## Auditoría de tests

**E** = ActivityStructure.test.tsx; **C** = ActivityContent.test.tsx;
**S** = slides.test.tsx del módulo. G1/G2/G3 remiten a los originales de la
[investigación](../../../docs/research/03-dar-significado-al-contenido.md#fuentes-magentaa11y-y-condiciones-de-uso).
La evidencia DOM se separa de los criterios que exigen percepción o AT real.

| Criterio y fuente | Clasificación | Evidencia concreta | Brecha |
| --- | --- | --- | --- |
| H G2/G3 nombre, rol, nivel y grupo; HTML-AAM h1–h6 | Automatizado | E «expone regiones nativas y jerarquía…»: nombres y H1/H2/H2/H3/H2 dentro del main | Lectura real pendiente |
| H G1/G2 Tab, M/B/N/F controles en DOM | Automatizado | E «conserva la secuencia…» y C «recorre enlaces…»: Tab/Shift+Tab, sin tabindex | Dibujo del foco y scroll no demostrados por JSDOM |
| M/B/N/F G2/G3 rol y grupo; HTML/APG | Automatizado | E: MAIN/HEADER/NAV/FOOTER y h1 al principio de main; nav «Actividad» | Rotor/regiones reales pendientes; cabecera/pie sin controles propios |
| LS G2/G3 rol/grupo; HTML ol/HTML-AAM/H48 | Automatizado | E «conserva la secuencia…» y C «conserva lista ordenada…»: ol con dos li, texto/orden y sin hijos ajenos; Tab omite lista/ítems | Lectura de cantidad y gestos pendientes |
| LS G1 desplazamiento, G2/G3 lista/cantidad | Manual | Matriz NVDA/VoiceOver/TalkBack, verbosidad de listas habilitada | No ejecutado con AT; controles internos/lista ARIA custom NA |
| WCAG 1.3.2 secuencia | Automatizado | E compara instrucciones primero→segundo y DOM invertido del contraejemplo | Comprensión con AT pendiente |
| H/M y barreras de estructura | Automatizado | E: ausencia deliberada de heading/main, rótulo visible y secuencia invertida | No se exige infracción axe específica |
| I G2/G3 Name/Role; HTML-AAM img | Automatizado | C «nombra la imagen…»: rol img con alternativa esperada | Pertinencia revisada editorialmente; lectura real pendiente |
| D G1/G2/G3 omisión, parte DOM | Automatizado | C «omite la imagen redundante…»: alt vacío, sin title/aria-label/tabindex, equivalente visible; sin rol img consultable | No equivale a probar gestos ni anuncio |
| L G2/G3 Name/Role; APG Link | Automatizado | C nombre de enlace visible y destino de fragmento existente | Propósito real depende también de contexto |
| L G1 Tab/Enter | Automatizado | C «activa el enlace…»: Enter y clic una vez cada uno; recorrido Tab | Navegación real verificada aparte |
| T G2/G3 Name/Role; HTML label/input | Automatizado | C «nombra la imagen…»: label/for/id, textbox/type=text/autocomplete=given-name, campo opcional, clic etiqueta enfoca | Teclado virtual y lectura pendientes |
| T G1 edición y persistencia | Automatizado | C escribe/borra valor, etiqueta permanece y conserva nombre; Tab bidireccional | Percepción humana no acreditada |
| Botón/status heredados; APG Button/ARIA22 | Automatizado | C «activa la inscripción…»: Enter/Espacio/clic una vez, type=submit, status previo y mismo nodo, atomicidad/relación/foco | Anuncio real pendiente |
| Formulario nativo en esta etapa | Automatizado | C «permite envío implícito…»: Enter desde campo, un callback, submit cancelado, foco en campo | No implementa validación ni backend |
| IDs por instancia | Automatizado | C «mantiene IDs independientes…», label asociado; tests heredados de 2.2 para relaciones de acción | No promete navegación por aria-controls |
| Barreras de contenido | Automatizado | C identifica alt de archivo, enlace Ver más, Aceptar y ausencia de label antes/después de escribir | No equipara placeholder a silencio ni axe limpio a ausencia de barrera |
| Estados de solución | Automatizado | E axe inicial; C axe inicial, confirmación por 3 vías y decorativa | Sin contraste/AT/zoom en JSDOM |
| Slides e integración | Automatizado | S: 15 slides con título/axe, cinco enlaces aislados, registro único, títulos 1:1 y tiempos nominales 540 s | Suma de tiempos no equivale a ensayo |
| H/I G1 entrada en vista; M/N G1 scroll; foco G1 de L/T/botón | Manual | Recorrido técnico en navegador descrito abajo; matriz humana preparada | Inspección humana entre navegadores pendiente |
| H/M/B/N/F G2/G3 navegación/lectura y L/T/I G2/G3 nombres/roles | Manual | [Matriz del módulo](README.md#matriz-manual-pendiente): NVDA/VoiceOver/TalkBack | No ejecutado con AT |
| D G1/G2/G3 omisión real; botón/status confirmación | Manual | Misma matriz; variantes aisladas reproducibles | No ejecutado con AT |
| L G3 doble toque; T teclado móvil; voz WCAG 2.5.3 | Manual | Matriz móvil y voz; nombre coincide con texto visible en DOM | No ejecutado |
| Skip-links M/B/N/F; navegación múltiple N | No aplicable | Sin enlaces de salto; una sola nav. No se promete cobertura de estas variantes | Reclasificar al ampliar API |
| Header/footer controles y doble toque | No aplicable | Estas regiones solo contienen texto; nav está separada | Su descubrimiento/lectura sí es manual |
| T hints/errors/grupo/required/disabled/readonly | No aplicable | Campo único opcional sin validación ni ayuda asociada | Label no se presenta como descripción |
| L contexto opcional Shift+F10 | Manual | Se conserva comportamiento nativo de a/href; menú contextual fuera de la demo | No ejecutado |
| I/D SVG inline, imagen funcional/compleja, animación | No aplicable | Recurso SVG externo estático dentro de img | No se extrapola contrato a otros tipos |
| Custom heading/flowto; botón pressed/expanded/popup | No aplicable | HTML nativo y acción simple sin esos estados | Contrato no requiere añadir ARIA |

## Auditoría de documentación

| Afirmación / fuente | Contraste independiente | Límite o resultado |
| --- | --- | --- |
| Jerarquía, WAI/HTML/WCAG 1.3.1 y 2.4.6 | Slide y guion diferencian tamaño de nivel; h3→h2 al cerrar sección; h1 como convención | No presentan cantidad universal WCAG |
| Regiones, APG/HTML-AAM | Cabecera/pie de página fuera de main; no nav=menu; section sin nombre no fuerza region | Main aislado, sin main anidado en Storybook |
| Orden, WCAG 1.3.2 | Distingue lectura y Tab; barrera altera DOM y CSS, solución ordena documento | Puede existir más de una secuencia válida |
| Alternativa, WAI/HTML-AAM | Decisión por propósito; redundancia visible con mismo archivo; vacío ≠ omitido | Código de SVG contiene sendero/parterres/pabellón/árbol; juicio humano final pendiente |
| Enlace, WCAG 2.4.4/APG | Texto descriptivo mejora lista de enlaces; se admite contexto determinable | No acusa a todo Ver más de incumplimiento |
| Etiqueta, WAI/HTML placeholder | for/id, etiqueta visible persistente, placeholder como pista, nombre de respaldo posible | No promete una frase universal de AT |
| Acción, APG/contrato heredado | Botón nativo con nombre visible, confirmación simulada, sin datos reales | Sin ARIA redundante ni estados ficticios |
| Narrativa, #4/course-structure | 7/8 slides y apartados con mismos títulos; 5 enlaces en sus slides de demo; conceptos transferibles | Ensayo 9 + 9 min pendiente |
| Cobertura, contrato Magenta y aria-patterns | Se separan DOM, navegador, AT/manual y NA; originales fijados/enlazados con paráfrasis | No copia extensa ni declaración de conformidad completa |

La primera pasada propia no identificó el problema de los pasos como párrafos.
La revisión externa detectó esa omisión y se corrigió mediante ol/li en las soluciones.
La pasada posterior contrasta lista, dos elementos y orden en tests y documentación
contra HTML, HTML-AAM, H48 y el original Magenta LS añadido a la investigación. Se corrigió un desbordamiento de enlaces de la slide 25
antes de terminar. La revisión externa del SHA se registra en GitHub.

## Validaciones y revisión técnica de superficies

- `pnpm test`: **64 tests**, siete archivos; 29 heredados y 35 del módulo 3.
- `pnpm lint`: pasa.
- `pnpm build`: pasa, TypeScript y Vite.
- `pnpm build-storybook`: pasa; índice con nueve stories (cinco nuevas y cuatro
  heredadas). Avisos de dependencia por eval/tamaño de chunks/deprecación de Node,
  sin errores de build. Node local 25.2.1, pnpm 10.26.1.

Revisión técnica en navegador integrado de Codex, viewport **1280 × 720**, sin
capturas. Las quince slides, posiciones 20–34, se renderizaron en orden. Se
compararon las cajas de bloques y enlaces con el lienzo Reveal y se verificaron
solapamientos; tras reducir texto repetido de la slide 25, todo cabe en el lienzo.
Las cinco stories nuevas y las cuatro heredadas se renderizaron: sin desbordamiento
horizontal a ese tamaño; imágenes locales cargadas; solución con un main y sin
anidamiento, contraejemplo 3.1 sin main. El contenedor oculto de diagnóstico de
Storybook no forma parte de la demo ni de sus encabezados visibles.

En 3.1 se comprobó la inversión deliberada: segundo paso antes del primero en DOM,
pero primer paso visualmente encima mediante column-reverse. La solución coincide
en DOM y pantalla. En 3.2, Enter sobre el enlace llevó al fragmento Información
práctica y lo puso en vista. La etiqueta permitió editar Ana; Tab llegó al botón;
Enter produjo la confirmación conservando el foco. El árbol del navegador mostró
el nombre de la imagen informativa; la decorativa se omitió y conservó el párrafo
equivalente. Esto **no** es una prueba de anuncios de lector de pantalla.

Foco computado: outline azul de 3 px y separación de 4 px. Colores comprobados en
CSS/navegador y contraste calculado con luminancia relativa WCAG: texto/botón
#18181b/blanco **17,72:1**; texto sobre #f4f4f5 **16,12:1**; enlace/foco #004fc4/blanco
**7,20:1**; borde #71717a/blanco **4,83:1**; placeholder #52525b/blanco **7,73:1**.
No sustituyen percepción humana, zoom ni reflujo.

Límite de herramienta documentado: la API de evaluación solo expone DOM y no
permitió leer navigator.userAgent; la capacidad CDP rechazó Browser.getVersion
como método no soportado. No se usó otro mecanismo para eludirlo. La versión
exacta del navegador integrado no pudo registrarse. Esto no impidió renderizar,
medir y recorrer las superficies con las APIs admitidas.

Servidores locales: slides `http://localhost:5175`, Storybook `http://localhost:6008`.
Rutas y posiciones en el [mapa del módulo](README.md#ejecutar-y-revisar); no se
incluye inventario de rutas ni capturas en la PR.

**Pendiente explícito:** revisión visual final del autor humano, ensayo de duración,
lectores reales de escritorio/móvil, voz, zoom/reflujo y teclado humano entre
navegadores. La demo con lector está preparada y documentada, no ejecutada.


## Corrección tras revisión independiente

La [revisión del primer HEAD](https://github.com/JesusGonzalezA/a11y-introduction/pull/9#pullrequestreview-5468662464)
detectó un P2: la solución presentaba pasos como p/div. Ahora las soluciones usan
ol con dos li y numeración nativa; la barrera de estructura conserva p/div y su
inversión deliberada. Se añadió primero la expectativa list/listitem, se observó
su fallo y después se corrigió el componente. La investigación incorpora la clave
LS, fuentes y clasificación de todos sus criterios. H48 se trata como técnica
suficiente, sin presentarla como obligación WCAG independiente.

Según self-learning, esta corrección de producto se conserva en implementación,
pruebas y contrato existente; no añade reglas duplicadas a las skills. Las slides
no cambian. Se renderizaron de nuevo las cinco stories afectadas a 1280×720:
las soluciones exponen ol/li con marcadores decimales y dos ítems en orden;
el contraejemplo de estructura conserva p/div con orden DOM invertido. No hay
desbordamiento horizontal; el árbol del navegador expone la lista. Se mantienen
las comprobaciones humanas y AT pendientes. El nuevo dictamen debe corresponder
al SHA de la corrección, no al primer HEAD.

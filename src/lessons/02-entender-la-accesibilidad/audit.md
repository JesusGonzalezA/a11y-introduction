# Auditoría del módulo 2

Pasada separada de la autoría, **2026-10-09**. Alcance: delta de #3 sobre
`7e36269e5638eda00209327b5d3c4674dc48f1a2`. El módulo 1 es contexto heredado.
La [investigación previa](../../../docs/research/02-entender-la-accesibilidad.md)
se consultó el 8 de octubre. Esta auditoría no sustituye la revisión externa del
HEAD de la PR ni la validación visual humana.

## Fuentes y método

Se releyeron el Gherkin y las notas de [Magenta Button](https://github.com/tmobile/magentaA11y/blob/c0d97812d9298757f5a2d8902ed7671afb1aa9ba/public/content/documentation/web/component/button.md),
[APG Button](https://www.w3.org/WAI/ARIA/apg/patterns/button/),
[HTML button](https://html.spec.whatwg.org/multipage/form-elements.html#the-button-element),
[HTML-AAM button/span](https://www.w3.org/TR/html-aam/),
[WAI-ARIA status](https://www.w3.org/TR/wai-aria-1.2/#status) y
[ARIA22](https://www.w3.org/WAI/WCAG22/Techniques/aria/ARIA22).
Se contrastaron las expectativas ejecutables y, en una segunda pasada, las
explicaciones y clasificaciones documentadas. El código no se usó como fuente
normativa. Los G1/G2/G3 siguientes identifican los escenarios originales de
Magenta; la investigación contiene cada cláusula y los condicionales, sin copiar
el documento entero. Encabezados/listas/enlaces reutilizan el contrato documentado
del módulo 1; no se añade un patrón compuesto.

## Auditoría de tests

Abreviaturas: **K** = `KeyboardRegistration.test.tsx`; **B** =
`ButtonSemantics.test.tsx`; **S** = `slides.test.tsx` de este módulo.

| Criterio y fuente | Clasificación | Evidencia concreta | Brecha |
| --- | --- | --- | --- |
| Tab y orden inverso, Magenta G1/Condensed 1 | Automatizado | K «recorre información, acción y ayuda en ambos sentidos» | No acredita percepción del foco |
| Enter/Espacio y acción, Magenta G1; APG Keyboard | Automatizado | K «activa una vez con…» parametrizado por tecla y puntero; callback una vez y confirmación | Anuncio real pendiente |
| Nombre/rol, Magenta G2/G3; HTML-AAM; WCAG 2.5.3 | Automatizado | B «expone nombre y rol nativos…»: botón/type/texto visible; K mantiene nombre al actuar | Propósito revisado editorialmente; percepción por AT/voz pendiente |
| disabled, Magenta State/Fully disabled; HTML disabled | Automatizado | B «expone disabled nativo…»: estado, descripción relacionada, omisión de Tab, no callback por clic/teclado | No equivale a probar lectura de estado con AT |
| Foco después de actuar, APG Keyboard | Automatizado | K activa con Enter/Espacio y conserva foco DOM | Puntero en JSDOM no promete foco por clic en Safari |
| Región antes/después, ARIA22 Tests 1–3 | Automatizado | K: mismo status inicialmente vacío; texto completo visible tras actuar, sin tabindex | Anuncio completo con AT pendiente |
| Atomicidad/relación, ARIA22 y WAI-ARIA status | Automatizado | K aria-atomic y aria-controls; B IDs diferentes por instancia; B descripción de indisponibilidad | No demuestra navegación por aria-controls en AT |
| Barrera deliberada, WCAG 2.1.1; HTML-AAM span | Automatizado | K «documenta que el contraejemplo salta…» y B ausencia de rol button | Se admite lectura del texto genérico; no se espera infracción axe específica |
| Estados nativos inicial/confirmado/cerrado, análisis axe | Automatizado | K axe antes/después de actuar; B axe disabled | No detecta todas las barreras ni prueba conformidad |
| Semántica de slides y enlaces, contrato heredado HTML/HTML-AAM | Automatizado | S 11 slides con encabezado y axe; cuatro href y recorrido Tab; registro en orden | Navegación real y reproductor con AT pendientes |
| Foco fuerte/resultado visible, Magenta G1 | Manual | Chrome: recorrido técnico y estilos calculados comprobados; matriz del módulo para validación humana | Inspección humana pendiente |
| Nombre/rol/estado/resultado por lector de escritorio, Magenta G2 | Manual | Matriz: NVDA Chrome/Firefox, VoiceOver Safari | No ejecutado |
| Deslizar/doble toque/nombre/rol/estado/resultado, Magenta G3 | Manual | Matriz: VoiceOver iOS y TalkBack Android | No ejecutado |
| Confirmación sin mover foco y lectura posterior, ARIA22/WCAG 4.1.3; Magenta Alert transferible | Manual | Matriz de AT; texto persistente en DOM | No ejecutado con AT |
| Popup/grupo, pressed/expanded, Magenta G2/G3 condicionales | No aplicable | Acción simple sin menú, listbox, selección ni expansión | Justificado por el alcance |
| aria-disabled enfocable, icono sin texto, nombres ambiguos y reparación genérica, variantes Magenta | No aplicable | HTML disabled y etiqueta textual; genérico solo como barrera | No se declara conformidad con todas las variantes |
| Alerta urgente, controles internos, cierre y error de campo, Magenta Alert | No aplicable | Status informativo sin controles ni formulario | WAI-ARIA/ARIA22 gobiernan el mensaje |

## Auditoría de documentación

| Afirmación / fuente | Clasificación y contraste | Brecha |
| --- | --- | --- |
| Personas y formas de uso, WAI People Use Web | Revisión editorial: las cinco formas y cuatro necesidades aparecen en 2.1; son combinables y se relacionan con barreras concretas | No se simula una discapacidad ni se atribuye un único dispositivo a un grupo |
| Árbol y nombre/rol/estado, WAI-ARIA términos, HTML-AAM y WCAG 4.1.2 | Revisión editorial: 2.2 distingue representación de DOM/píxeles, botón nativo de texto genérico; disabled no equivale a desaparición | Observación del árbol no acredita anuncios |
| HTML primero, Using ARIA y APG | Revisión editorial: no se enseña una reparación del span ni ARIA redundante para button/disabled | Ninguna brecha de alcance identificada |
| ARIA completa información, status/ARIA22 | Revisión editorial: slide/guion exponen región previa, propósito no urgente, atomicidad y límite de anuncios | Relaciones de implementación se explican en README, sin añadir otra narrativa al guion |
| Cobertura y contraejemplos, inventario Magenta | Revisión documental: criterios de la investigación enlazados a tests o matriz manual/NA; barrera rotulada en story, DOM, README y test | No se afirma que axe detecte ausencia de teclado ni soporte universal |
| Narrativa, #3 y course-structure | Revisión editorial: 5/6 slides y 5/6 apartados, mismos títulos/orden; cuatro enlaces de demo; conceptos transferibles | Ensayo de 5 min por lección pendiente |

Resultado de la pasada: no se identificaron discrepancias bloqueantes entre
contrato, tests y documentación. Se añadió comprobación explícita de la descripción
de disabled y de conservación del nodo status para que la evidencia cubra esas
afirmaciones. El dictamen externo se registra en GitHub sobre el SHA revisado.

## Validación y superficies

- `pnpm test`: **29 tests pasan**, 4 archivos (21 tests nuevos y 8 heredados).
- `pnpm lint`: **pasa**.
- `pnpm build`: **pasa** (TypeScript y Vite).
- `pnpm build-storybook`: **pasa**, cuatro stories. Avisos no bloqueantes del runtime
  de Storybook por eval, tamaño de chunks y deprecación de Node; sin errores de build.

Revisión técnica sin capturas con **Chrome 154.0.8037.98**, viewport **1440 × 900**:
se renderizaron las once slides nuevas, posiciones 9–19, tras cargar las fuentes.
Se comprobaron cajas de todos sus bloques y enlaces frente al lienzo de Reveal:
ningún bloque fuera del lienzo ni solapamiento entre bloques. Las cuatro stories
se renderizaron y sus IDs figuran en el índice de Storybook. El árbol expone el
botón «Inscribirme» y el estado disabled donde corresponde. La comparación no
expone rol button para el span. La revisión técnica de geometría no sustituye
la valoración visual final del autor.

El recorrido real de Chrome pasa de información a ayuda en el contraejemplo y
por el botón en la solución. La activación nativa muestra la confirmación.
El indicador de foco computado tiene 3 px y separación de 4 px. Contrastes
calculados desde los colores CSS mediante luminancia relativa WCAG: texto/botón
`#18181b` frente a blanco **17,72:1**; enlace/foco `#004fc4` frente a blanco
**7,20:1**; borde `#71717a` frente a blanco **4,83:1**; texto deshabilitado
`#52525b` frente a `#e4e4e7` **6,09:1**. El contraste del contenido deshabilitado se
registra como información, no como requisito normativo de controles inactivos.
No se midieron zoom, reflujo ni anuncios de lectores con esos cálculos.

Superficies de revisión local de esta sesión: slides en `http://localhost:5174`
con enlaces configurados a Storybook en `http://localhost:6007`. Posiciones y rutas
en el [mapa del módulo](README.md#ejecutar-y-revisar). Si se reinicia, usar
`VITE_STORYBOOK_URL=http://localhost:6007 pnpm dev --port 5174` y
`pnpm storybook --port 6007`, o los puertos convencionales indicados en el mapa.

**Pendiente explícito:** revisión visual final del autor, ensayo cronometrado,
lectores de escritorio y móvil, voz, zoom/reflujo y teclado humano entre navegadores.
Ver la [matriz manual](README.md#matriz-manual-pendiente). No se fusiona la PR.

# Auditoría del módulo 4

Fecha: **2026-10-09**. Delta propio de #5 sobre
`e8813d7a7afb762c4861936d33ddaf07fd7ce6fc` (PR #9, que hereda #8/#7).
La investigación se guardó en `503ceec` antes de implementar componentes.
Primero se ejecutaron tests en rojo por imports aún ausentes; después se implementó
la composición mínima. Esta es una pasada propia separada de la autoría; el dictamen
independiente del SHA se registra en la PR.

## Fuentes recontrastadas

Se releyeron por `gh api` los originales B/L/T/F/P fijados en la
[investigación](../../../docs/research/04-interaccion-y-percepcion.md#magentaa11y-páginas-concretas-trazabilidad-y-reutilización),
especialmente Gherkin y sus condicionales. Se contrastaron con
[APG Button](https://www.w3.org/WAI/ARIA/apg/patterns/button/),
[APG Link](https://www.w3.org/WAI/ARIA/apg/patterns/link/),
[HTML form](https://html.spec.whatwg.org/multipage/forms.html#the-form-element),
[HTML-AAM](https://www.w3.org/TR/html-aam/#el-form),
[Keyboard](https://www.w3.org/WAI/WCAG22/Understanding/keyboard.html),
[No Keyboard Trap](https://www.w3.org/WAI/WCAG22/Understanding/no-keyboard-trap.html),
[Focus Order](https://www.w3.org/WAI/WCAG22/Understanding/focus-order.html),
[Focus Visible](https://www.w3.org/WAI/WCAG22/Understanding/focus-visible.html),
[Use of Color](https://www.w3.org/WAI/WCAG22/Understanding/use-of-color.html),
[Contrast Minimum](https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum.html),
[Non-text Contrast](https://www.w3.org/WAI/WCAG22/Understanding/non-text-contrast.html),
[Resize Text](https://www.w3.org/WAI/WCAG22/Understanding/resize-text.html) y
[Reflow](https://www.w3.org/WAI/WCAG22/Understanding/reflow.html).
El contrato de lista nativa, estructura e imagen se hereda de la investigación 03;
acción/status y prudencia sobre anuncios, de la 02. Se consultaron las referencias
at-support-gotchas y live-regions de aria-patterns: no se convierten cifras antiguas
de soporte en promesas actuales. `aria-labelledby` de la lista enlaza su título;
los puntos redundantes son decorativos. No hay widget ARIA nuevo.

## Auditoría de tests

**K** = [FocusRegistration.test.tsx](04.01-teclado-y-foco-visible/examples/FocusRegistration/FocusRegistration.test.tsx),
**P** = [PerceptionRegistration.test.tsx](04.02-contraste-color-y-ampliacion/examples/PerceptionRegistration/PerceptionRegistration.test.tsx),
**S** = [slides.test.tsx](slides.test.tsx).
G1/G2/G3 y claves Magenta remiten a los originales enlazados arriba; no implican
que sus frases de lectura se hayan ejecutado con AT.

| Criterio y fuente | Clasificación | Evidencia concreta | Brecha |
| --- | --- | --- | --- |
| B/L/T G2/G3 nombre/rol; HTML-AAM | Automatizado parcial | K consulta links/textbox/button por nombre; type=text/submit, autocomplete; for/id y etiqueta tras escribir | Anuncios reales pendientes |
| B/L/T G1 y F G1; 2.1.1/2.4.3 | Automatizado | K «recorre y abandona…»: 3 enlaces→campo→botón, ambos sentidos; P mantiene mismo recorrido, lista sin parada | Percepción del recorrido humana pendiente |
| 2.1.2 | Automatizado | K controles centinela antes/después, entrada/salida con Tab/Shift+Tab en ambas variantes; sin tabindex | Salida técnica en navegador abajo; teclado humano pendiente |
| B G1 activación; APG Button | Automatizado | K «completa…» Enter/Espacio/clic: callback una vez, foco conservado, confirmación | AT/móvil pendientes |
| L G1 activación; APG Link | Automatizado | K Enter y clic, href resuelve a información práctica | Evento cancelado JSDOM no prueba navegación; navegador abajo |
| T persistencia/edición | Automatizado | K/P escribir Ana conservando label; prueba heredada ActivityContent edita/borra y enfoca mediante label | Teclado virtual pendiente |
| F integración nativa | Automatizado heredado | ActivityContent «permite envío implícito…»: submit cancelado, callback una vez y foco campo; extracción mantiene conducta | Form único sin nombre; no se promete landmark form |
| Status/ARIA22 heredado | Automatizado | K nodo previo y mismo nodo final, atomicidad, aria-controls, texto de confirmación; P final | Anuncio no garantizado por DOM ni aria-controls |
| LS HTML/HTML-AAM, 1.4.1 | Automatizado | P «expresa los dos estados…»: UL, dos LI, nombre desde heading, orden y textos visibles | Lectura de cantidad y pertinencia visual humanas pendientes |
| 1.4.1 contraejemplo | Automatizado parcial | P «identifica la ausencia…»: solo 10:00/12:00 en lista, sin estados; rótulo de barrera | CSS/color y percepción comprobados aparte |
| Contraejemplo de foco | Automatizado limitado | K repite recorrido y comprueba rótulo; foco DOM sigue activo | Solo navegador confirma outline none |
| Axe estados representativos | Automatizado | K inicial y 3 vías de confirmación; P inicial y confirmado, cero infracciones detectables | No mide contraste, zoom ni AT real |
| Registro, narrativa y rutas | Automatizado | S: 14 títulos/axe, orden único tras M3, 4 enlaces iframe y títulos de guion 1:1, 540/480 s nominales | Sumar tiempos no es ensayo |
| B/L/T G1; F G1; 2.4.7/2.4.11 | Manual/navegador | Cinco paradas de solución con outline 3px/4px, en vista; botón sin outline en barrera | Revisión humana/zoom/otros navegadores pendientes |
| L G1 destino | Manual/navegador | Enter cambia hash y pone Información práctica en vista | Lectura/gestos pendientes |
| 1.4.3/1.4.11 | Manual/cálculo | Colores computados y luminancia en tabla inferior | No conformidad de todos los estados/temas |
| 1.4.10 | Manual/navegador | 320 CSS px: aviso solución crece, no desbordamiento horizontal, botón operable | 400% de zoom real pendiente |
| 1.4.4, P G4 y Condensed | Manual | Protocolo 100→200% con pasos intermedios en README/guion | No ejecutado con zoom real |
| B/L/T/F G2/G3, LS lectura, status | Manual | Matriz NVDA/VoiceOver/TalkBack del módulo | No ejecutado; no inventar transcripciones |
| P G1/G2/G3 título y regiones | Manual + heredado | Navegador muestra título técnico de story y regiones; M3 prueba roles nativos | Storybook iframe usa ID técnico como título: no se atribuye cumplimiento integral P ni título editorial de página de producto; AT pendiente |
| P G3 orientación; voz | Manual | Matriz móvil y software de voz | No ejecutado |
| B popup/pressed/expanded/disabled; T required/disabled/readonly | No aplicable | Acción simple habilitada y campo opcional; el turno completo es texto, no botón disabled | Reclasificar si cambia API |
| T Group hints/errors; F errores y grupos | No aplicable | Campo único sin ayuda/error asociado; instrucciones generales preceden al formulario | Sin promesa de validación completa |
| F múltiples formularios, skip-links | No aplicable | Un único form, sin enlaces de salto específicos | Magenta recomienda landmark con nombre; contrato no lo ofrece ni presume cubrir ese Gherkin |
| Widgets compuestos/diálogos/roving; LS interactiva | No aplicable | HTML nativo y lista estática | No extrapolar Tab a widgets compuestos |

## Auditoría de documentación

| Afirmación / fuente | Comprobación | Resultado y límite |
| --- | --- | --- |
| Teclado, APG y WCAG 2.1.1 | Distingue alcanzar y activar; enlace Enter, botón Enter/Espacio; alternativa funcional | No afirma que excluir cualquier control de Tab sea siempre incumplimiento |
| Orden, WCAG 2.4.3 | DOM coherente, sin promover tabindex positivo como arreglo | No impone un único orden geométrico |
| Salida, 2.1.2 | Código ilustrativo no ejecutado, salida no estándar explicada, modal cerrable no equivale a trampa | Ninguna story bloquea navegación |
| Foco, 2.4.7 y 2.4.11 | Dibujo perceptible y control no tapado; 3px es diseño | No atribuye métricas AAA a AA |
| Color, 1.4.1 | Texto visible para ambos estados; nombre oculto insuficiente | Sin simulación universal de daltonismo |
| Contraste, 1.4.3/1.4.11 | 4,5:1 normal, 3:1 grande con definición y señales necesarias; fondo efectivo, sin redondeo para aprobar | No exige 3:1 a todo borde decorativo |
| Ampliación/reflujo, 1.4.4/1.4.10 | 200% distinto de 320 CSS px / 1280 al 400%; altura flexible, sin pérdida | 320 no se presenta como prueba de zoom |
| Form, HTML/HTML-AAM/APG frente a Magenta | Form heredado real, único, sin nombre; no se confunde elemento con landmark | Límite explícito del contrato Magenta F |
| Pedagogía, #5 | Primera slide usa nombre completo; conceptos transferibles; código y demos contextualizan; 7/7 apartados 1:1 | Ensayo humano pendiente |
| Fuentes y condiciones | Originales fijados, paráfrasis y enlaces; investigación propia añade solo delta | No declaración de conformidad global |

No se detectaron bloqueos propios tras esta pasada. La corrección de la nota
previa sobre form se integró antes del commit de investigación: el form ya existía
en la etapa de contenido, no se podía tratar como ausente.

## Validaciones y superficies reales

- `pnpm test`: **92 tests**, 10 archivos; 64 heredados y 28 de módulo 4.
- `pnpm lint`: pasa.
- `pnpm build`: TypeScript/Vite pasan.
- `pnpm build-storybook`: pasa, 13 stories (9 heredadas y 4 nuevas).
- Avisos no bloqueantes heredados del build de Storybook: eval, tamaño de chunks
  y deprecación de Node al lanzar proceso. Sin dependencia nueva ni cambio de lockfile.

Navegador integrado de Codex en macOS, **1280×720** y **320×720 CSS px**, sin
capturas. Versión exacta del motor no registrada. Se renderizaron las catorce
slides nuevas (35–48), comparando cajas de bloques/enlaces con el lienzo Reveal y
entre sí: sin recorte ni solapamiento. Se revisó de nuevo la slide de color tras
ajustar su fragmento. Revisión visual final humana pendiente.

Se renderizaron las 13 stories a 1280×720. Ancho de documento y scrollWidth
coinciden en 1280; las imágenes locales cargan. Las páginas corregidas conservan
un main y las variantes históricas sus barreras. La extracción de ActivityPage
mantiene 5 stories de M3 con el mismo contenido; las 4 de M2 siguen disponibles.

Recorrido real 4.1: los tres enlaces, campo y botón muestran outline azul sólido
3px con offset 4px; los cinco controles quedaron dentro de la altura visible al
alcanzarlos. Enter sobre el enlace lleva al fragmento Información práctica
(top observado 86,22px). Tab lleva al campo, escribir Ana conserva etiqueta,
Tab lleva al botón y Enter confirma manteniendo foco. Tab después del botón
abandona el contenido (activeElement BODY), Shift+Tab retorna al botón. Esto no
acredita interacción humana con el chrome del navegador. En la barrera, el mismo
botón tiene outline-style none y box-shadow none, conservando foco DOM.

| Aviso 4.2 | Espacio contenedor | Ancho interior aviso | Alto interior / scrollHeight | Resultado |
| --- | --- | --- | --- | --- |
| Barrera, viewport 1280 | 686 px | 574 px | 142 / 142 px | Cabe inicialmente; texto gris y estados solo por color |
| Solución, viewport 1280 | 686 px | 684 px | 120 / 120 px | Texto y estados visibles |
| Barrera, viewport 320 | 238 px | 574 px | 142 / 142 px | Contenedor overflow hidden recorta horizontalmente el aviso |
| Solución, viewport 320 | 238 px | 236 px | 272 / 272 px | Reorganiza líneas y crece; overflow visible, sin recorte |

Ambas páginas reportan scrollWidth 320 a ancho 320: demuestra por qué la ausencia
de barra horizontal no basta para excluir recorte. En la solución se completó
el formulario a ese ancho; botón 117,03×44px, x=41px, y=475,10px, foco azul,
confirmación visible. Se restauró el viewport tras revisar. El aviso no es un
control y sus estados no cambian; no se atribuyen anuncios dinámicos al texto.

Colores efectivos observados: instrucción de barrera rgb(170,170,170), solución
rgb(24,24,27), fondo rgb(255,255,255); foco rgb(0,79,196). Ratios calculados según
la fórmula WCAG enlazada en el README, sin usar capturas ni píxeles suavizados:

| Pareja sobre blanco | Ratio sin redondear | Lectura |
| --- | --- | --- |
| #aaa, texto de barrera | 2.3231230535045992 | No alcanza 4,5:1 |
| #18181b, texto solución/botón | 17.71676507806213 | Supera 4,5:1 |
| #004fc4, foco/enlace | 7.2028877110670955 | Supera 3:1 de indicador y 4,5:1 de texto |
| #71717a, borde de campo (CSS compartido) | 4.832895561154151 | Supera 3:1 contra blanco; cálculo de constante heredada |
| #52525b, placeholder (CSS compartido) | 7.729820868495424 | Supera 4,5:1; cálculo de constante heredada |

No se ha ejecutado zoom real 200%/400%, lector de pantalla, voz, gestos/orientación
móvil ni ensayo. La inspección de árbol del navegador no es una prueba de AT.
Pendientes y protocolo: [matriz manual](README.md#matriz-manual-pendiente).
Las superficies locales quedan en 5176/6009; inventario en README, fuera de la PR.

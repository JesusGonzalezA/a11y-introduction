# 2.2 Cómo interpreta el navegador nuestra interfaz

**5 minutos, demo incluida.** Para actuar, la persona necesita reconocer el
control y saber si está disponible. Al terminar, el alumnado distinguirá nombre,
rol y estado; entenderá para qué sirve el árbol de accesibilidad y por qué se
empieza por HTML antes de añadir ARIA.

## Recorrido y alcance

Seis slides y seis apartados del [guion](presenter.md): necesidad (35 s), árbol
(45 s), nombre/rol/estado (50 s), comparación (90 s), HTML/ARIA (50 s) y comprobación
(30 s). Total previsto 300 s; **ensayo humano pendiente**. El inspector se usa
solo para observar significado. La enseñanza de herramientas de auditoría queda
en el módulo 5; no se introduce un patrón ARIA avanzado ni una reparación del span.

## Ejecutar la demo

Desde la raíz: `pnpm install --frozen-lockfile`, `pnpm dev` y `pnpm storybook`.
Abrir las [slides 14–19](http://localhost:5173/#/13), después:

1. [Comparación](http://localhost:6006/?path=/story/m2-button-semantics--comparacion).
   En herramientas de desarrollo de Chrome, seleccionar el botón y su panel de
   accesibilidad: nombre «Inscribirme», rol button. Comparar con el span del panel
   rotulado como contraejemplo. Su texto puede aparecer en el árbol, pero no aporta
   el contrato de botón. Ambos usan la misma clase visual; el clic del genérico
   no incorpora semántica ni teclado. No presentar una frase universal de lector.
2. [No disponible](http://localhost:6006/?path=/story/m2-button-semantics--no-disponible).
   Inspeccionar disabled y la descripción de inscripción cerrada. Tab omite el
   botón; un lector puede descubrirlo al recorrer el contenido. La disponibilidad
   está fijada para esta story, no se cambia como consecuencia de la inscripción.

Preparar el inspector antes de grabar para encajar en 90 s. Recargar reinicia la
confirmación. Las versiones concretas de navegador/AT deben acompañar cualquier
registro de anuncios reales; observar el árbol no es ejecutar un lector.

## Ejemplo, semántica y pruebas

`examples/ButtonSemantics` compone dos instancias del escenario
[compartido](../README.md#interfaz-compartida-explícita), separadas por regiones con
nombre, o una sola instancia no disponible. La acción es `button type="button"`;
su texto aporta el nombre. `disabled` es nativo, sin `aria-disabled` redundante;
`aria-describedby` identifica el motivo visible. Los IDs se generan por instancia.

La confirmación usa `role="status"`, montado vacío antes del cambio, y
`aria-atomic="true"`; `aria-controls` enlaza botón y resultado. No necesita
`aria-pressed`, `aria-expanded`, popup ni `alert`. Se conserva el foco de teclado
en la acción y el texto del mensaje permanece visible. El código de la slide
sintetiza la región; el escenario ejecutable contiene la relación y el manejador.

`ButtonSemantics.test.tsx` verifica nombre/rol/type nativos y texto visible,
ausencia de rol button en el contraejemplo, IDs independientes y relación;
verifica disabled, omisión de Tab, descripción, bloqueo de acción y axe del estado
cerrado. La interacción y transición del escenario compartido se prueban en 2.1,
sin duplicar esos tests. Clasificación exhaustiva y brechas en la
[matriz del módulo](../README.md#criterios-y-evidencia) y [auditoría](../audit.md).
Anuncios reales, gestos, voz, revisión humana y ensayo permanecen pendientes.

## Fuentes

[Investigación específica](../../../../docs/research/02-entender-la-accesibilidad.md):
[HTML-AAM button](https://www.w3.org/TR/html-aam/#el-button) y
[span](https://www.w3.org/TR/html-aam/#el-span),
[APG Button](https://www.w3.org/WAI/ARIA/apg/patterns/button/),
[Magenta Button](https://www.magentaa11y.com/web-criteria/component/button),
[WAI-ARIA status](https://www.w3.org/TR/wai-aria-1.2/#status),
[ARIA22](https://www.w3.org/WAI/WCAG22/Techniques/aria/ARIA22) y
[primera regla de ARIA](https://www.w3.org/TR/using-aria/#rule1).
El contrato preciso del mensaje procede de status/ARIA22: la guía Magenta de
alertas se consulta y se limita explícitamente, sin convertir información no
urgente en una alerta.

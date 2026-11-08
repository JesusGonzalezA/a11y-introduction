# 2.2 Cómo interpreta el navegador nuestra interfaz

**5 minutos, demo incluida.** Para actuar, la persona necesita reconocer el
control y saber si está disponible. Al terminar, el alumnado distinguirá nombre,
rol y estado; entenderá para qué sirve el árbol de accesibilidad y por qué se
empieza por HTML antes de añadir ARIA.

## Recorrido y alcance

Del HTML al árbol de accesibilidad; nombre, rol y estado; el aspecto no define el
control; HTML primero y ARIA para completar información (`role="status"`). No se
enseña a reconstruir un botón genérico con ARIA.

## Página de ejemplo

Instalar y arrancar según el [mapa del módulo](../README.md#ejecutar-y-revisar). Ruta: `/ejemplos/cine`, página de una película con
sus sesiones del día. Enlaces de la slide 4: «Comparar nombre y rol» (barrera) e
«Inspeccionar el estado no disponible» (`?arreglo=1`).

| Arreglo | Sin arreglo | Con arreglo |
| --- | --- | --- |
| Rol | Sesiones como `div` con clic | `<button type="button">16:30</button>` |
| Estado | Sesión agotada solo con color apagado | `<button disabled>19:00 · Agotada</button>` |
| Mensaje | Confirmación en un `p` sin rol | `<p role="status" aria-atomic="true">` |

Demo: abrir el árbol de accesibilidad de las devtools del navegador e inspeccionar
la sesión de las 16:30 y la de las 19:00 con la barrera. Pulsar **Aplicar
arreglo**, abrir **Ver cambios** y repetir: rol botón, nombre desde el texto y
estado deshabilitado. Elegir una sesión para mostrar la confirmación sin mover el
foco. La representación exacta varía según navegador.

## Componentes y pruebas

`CinemaBooking` (escenario de página completa) recibe `fixed: boolean`; su
definición está en `CinemaBooking.example.ts`. La región `status` existe vacía
antes de actuar. Un botón `disabled` no recibe foco: su estado se comprueba en
el árbol de accesibilidad, no con Tab.

`CinemaBooking.test.tsx` comprueba que con la barrera no hay botones, estado ni
región de mensaje; con el arreglo, tres botones con sus nombres, la sesión
agotada deshabilitada y fuera del recorrido de Tab, activación con Enter,
confirmación en `status` con `aria-atomic` y axe sin infracciones detectables.
Anuncios reales y voz quedan en la [matriz manual del módulo](../README.md#matriz-manual-pendiente).

## Fuentes

[Investigación específica](../../../../docs/research/02-entender-la-accesibilidad.md):
[HTML-AAM button](https://www.w3.org/TR/html-aam/#el-button) y
[div](https://www.w3.org/TR/html-aam/#el-div),
[APG Button](https://www.w3.org/WAI/ARIA/apg/patterns/button/),
[Magenta Button](https://www.magentaa11y.com/web-criteria/component/button),
[WAI-ARIA status](https://www.w3.org/TR/wai-aria-1.2/#status),
[ARIA22](https://www.w3.org/WAI/WCAG22/Techniques/aria/ARIA22) y
[primera regla de ARIA](https://www.w3.org/TR/using-aria/#rule1).
El contrato preciso del mensaje procede de status/ARIA22: la guía Magenta de
alertas se consulta y se limita explícitamente, sin convertir información no
urgente en una alerta.

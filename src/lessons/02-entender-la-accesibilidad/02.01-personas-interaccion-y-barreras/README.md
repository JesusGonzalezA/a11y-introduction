# 2.1 Personas, formas de interacción y barreras

**5 minutos, demo incluida.** La persona quiere localizar una acción, alcanzarla
y reconocer el resultado. Al terminar, el alumnado relacionará teclado, ratón, voz,
ampliación y lector de pantalla con distintas formas de usar una web; reconocerá
barreras visuales, auditivas, motoras y cognitivas.

## Recorrido y alcance

Primero se presentan formas de uso y necesidades; después, una barrera motora
observable: una acción que solo responde al clic. Las slides contienen la
explicación; la demo la hace visible. La semántica del botón se amplía en 2.2.

## Página de ejemplo

Instalar y arrancar según el [mapa del módulo](../README.md#ejecutar-y-revisar). Ruta: `/ejemplos/tienda-online`, ficha de una
taza en la tienda de un taller de cerámica. Enlaces de la slide 4: «Observar una
acción inalcanzable» (barrera) y «Completar la acción con teclado» (`?arreglo=1`).

| Arreglo | Sin arreglo | Con arreglo |
| --- | --- | --- |
| Acción con teclado | `<div onclick>` con aspecto de botón | `<button type="button">Añadir a la cesta</button>` |

Demo: con la barrera, recorrer con Tab desde «Consultar envíos y devoluciones»:
el foco salta a «¿Dudas sobre la pieza?». Pulsar **Aplicar arreglo** y **Ver
cambios** para ver el botón resaltado. Repetir: Tab llega al botón, Enter o
Espacio añaden la taza, la cesta cambia y el foco permanece en el botón.

## Componentes y pruebas

`ProductPage` (escenario de página completa) recibe `fixed: boolean`; su
definición está en `ProductPage.example.ts`. La barrera es un `div` con dos
supresiones de lint locales justificadas. La confirmación usa `role="status"`
en ambos estados; no es el foco de esta lección.

`ProductPage.test.tsx` comprueba que con la barrera no existe el botón, Tab salta
la acción y solo el clic la ejecuta; con el arreglo, Tab la alcanza, Enter y
Espacio la activan una vez, la cesta se actualiza, el foco se conserva y axe no
detecta infracciones. Foco dibujado, lectores reales y voz quedan en la
[matriz manual del módulo](../README.md#matriz-manual-pendiente).

## Fuentes

La [investigación específica](../../../../docs/research/02-entender-la-accesibilidad.md)
conserva fecha, enlaces primarios y criterios originales trazables: WAI
[formas de uso](https://www.w3.org/WAI/people-use-web/tools-techniques/),
[necesidades y barreras](https://www.w3.org/WAI/people-use-web/abilities-barriers/),
[APG Button](https://www.w3.org/WAI/ARIA/apg/patterns/button/),
[Magenta Button](https://www.magentaa11y.com/web-criteria/component/button),
[HTML button](https://html.spec.whatwg.org/multipage/form-elements.html#the-button-element)
y [WCAG teclado](https://www.w3.org/WAI/WCAG22/Understanding/keyboard.html).

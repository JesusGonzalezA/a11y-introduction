# 2.1 Personas, formas de interacción y barreras

> Módulo 2 · Entender la accesibilidad · ejemplo: `/ejemplos/tienda-online`

## Objetivo

- Conocer a las cinco personas del curso y cómo usan la web.
- Relacionar cada tipo de necesidad con una barrera típica.
- Reconocer la barrera más básica: una acción que solo funciona con ratón.

## Situación

- **Persona:** Andrés — temblor en las manos; usa solo el teclado.
- **Tarea:** añadir una taza a la cesta en una tienda online.

## Error común → solución

| Error | Qué le pasa a Andrés | Solución |
| --- | --- | --- |
| «Añadir a la cesta» es un `div` con `onclick` | Tab salta el botón: no puede comprar | `<button type="button">` |

## Ejemplo

- Página: ficha de una taza en la tienda de un taller de cerámica.
- Demo: Tab desde «Consultar envíos y devoluciones» → el foco salta a «¿Dudas sobre la pieza?» → **Aplicar arreglo** → Tab llega al botón → Enter o Espacio añaden la taza.
- Código: `examples/ProductPage/` (página, definición y tests).

## Conceptos clave

- Formas de uso: ratón, teclado, voz, ampliación, lector de pantalla. Se combinan.
- Necesidades visuales, auditivas, motoras y cognitivas; permanentes, temporales o de situación.
- El botón nativo trae foco, Enter, Espacio y rol sin código extra.

## Pruebas

- Automatizadas (`ProductPage.test.tsx`): con barrera no hay botón y Tab lo salta; con arreglo Tab lo alcanza, Enter y Espacio lo activan, el foco se conserva y axe no detecta infracciones.
- Manuales pendientes: foco dibujado, lector de pantalla y control por voz ([matriz del módulo](../README.md)).

## Fuentes

- [Cómo usan la web las personas, W3C WAI](https://www.w3.org/WAI/people-use-web/tools-techniques/)
- [Necesidades y barreras, W3C WAI](https://www.w3.org/WAI/people-use-web/abilities-barriers/)
- [HTML button](https://html.spec.whatwg.org/multipage/form-elements.html#the-button-element) · [APG Button](https://www.w3.org/WAI/ARIA/apg/patterns/button/) · [Magenta Button](https://www.magentaa11y.com/web-criteria/component/button)
- [WCAG 2.1.1 Teclado](https://www.w3.org/WAI/WCAG22/Understanding/keyboard.html)
- Investigación previa: [docs/research/02](../../../../docs/research/02-entender-la-accesibilidad.md)

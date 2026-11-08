# 3.1 Estructura de página y orden de lectura

> Módulo 3 · Dar significado al contenido · ejemplo: `/ejemplos/receta`

## Objetivo

- Usar encabezados con un nivel que exprese la jerarquía.
- Identificar grandes áreas con regiones.
- Mantener en el HTML el orden en que debe leerse el contenido.

## Situación

- **Persona:** Elena — ciega; usa lector de pantalla y salta por encabezados y regiones.
- **Tarea:** ir directa a los ingredientes de una receta y seguir los pasos en orden.

## Errores comunes → solución

| Error | Qué le pasa a Elena | Solución |
| --- | --- | --- |
| Títulos con `div` y clases de tamaño | No encuentra encabezados: escucha toda la página | `h1`, `h2`, `h3` según la jerarquía |
| Sin regiones (`div.cabecera`, `div.contenido`) | No puede saltar al contenido principal | `header`, `nav`, `main`, `footer` |
| Pasos invertidos con `column-reverse` | Oye los pasos al revés | HTML en orden + `ol` |

## Ejemplo

- Página: receta de lentejas en el blog «La Cuchara Lenta».
- Demo: lista de encabezados y de regiones del lector (o del inspector) → leer los pasos → **Aplicar arreglo** → repetir.
- Código: `examples/RecipePage/`.

## Conceptos clave

- El nivel indica jerarquía, no tamaño; el tamaño es CSS.
- Un solo `h1` y un solo `main` por página.
- CSS coloca; el HTML decide el orden de lectura.

## Pruebas

- Automatizadas (`RecipePage.test.tsx`): con barrera no hay encabezados, regiones ni lista ordenada; con arreglo jerarquía, regiones, pasos en orden y axe sin infracciones.
- Manuales pendientes: recorrido real con lector de pantalla.

## Fuentes

- [Encabezados, W3C WAI](https://www.w3.org/WAI/tutorials/page-structure/headings/) · [Regiones, W3C WAI](https://www.w3.org/WAI/tutorials/page-structure/regions/)
- [HTML main](https://html.spec.whatwg.org/multipage/grouping-content.html#the-main-element) · [HTML-AAM h1–h6](https://www.w3.org/TR/html-aam/#el-h1-h6)
- [APG regiones](https://www.w3.org/WAI/ARIA/apg/practices/landmark-regions/)
- [WCAG 1.3.2 Secuencia con significado](https://www.w3.org/WAI/WCAG22/Understanding/meaningful-sequence.html)
- [Magenta Heading](https://www.magentaa11y.com/web-criteria/component/heading) · [Magenta Main](https://www.magentaa11y.com/web-criteria/page-level/main-landmark)

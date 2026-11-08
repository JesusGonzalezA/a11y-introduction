# 3.1 Estructura de página y orden de lectura

**9 minutos, demo incluida.** La persona quiere localizar información antes de
actuar. Aprenderá a reconocer secciones, jerarquía y contenido principal y a
comprobar que una secuencia sigue teniendo sentido sin depender de su posición.

## Recorrido y alcance

Encabezados → niveles → regiones → secuencia del documento → demo con lector →
comprobación. Teclado y foco se profundizan en el módulo 4.

## Página de ejemplo

Instalar y arrancar según el [mapa del módulo](../README.md#ejecutar-y-revisar). Ruta: `/ejemplos/receta`, una receta de lentejas
en un blog de cocina. Enlaces de la slide 6: «Examinar estructura con barreras»
y «Recorrer estructura corregida» (`?arreglo=1`).

| Arreglo | Sin arreglo | Con arreglo |
| --- | --- | --- |
| Encabezados | Títulos como `div` con estilos | h1, h2 (Ingredientes, Preparación, Consejo) y h3 (Para el sofrito, Para el guiso) |
| Regiones | Cabecera, navegación, contenido y pie como `div` | `header`, `nav aria-label="Principal"`, `main`, `footer` |
| Orden | Pasos escritos al revés y recolocados con `column-reverse` | `ol` con los pasos en orden de documento |

Ambas versiones se ven prácticamente igual: la diferencia está en el documento.

## Demo preparada con lector de pantalla

1. Abrir la barrera. Con NVDA o VoiceOver, abrir la lista de encabezados: no
   aparece ninguno. Buscar regiones: no hay contenido principal.
2. Leer la preparación en secuencia: el lector empieza por «Cuece 35 minutos».
3. Pulsar **Aplicar arreglo** y abrir **Ver cambios**; los tres cambios quedan
   resaltados. Cerrar el panel y repetir: seis encabezados en tres niveles,
   cuatro regiones y los pasos en orden.

La herramienta flotante no añade encabezados ni regiones. Recorrer con Tab y leer
en secuencia son comprobaciones distintas.

## Componentes y pruebas

`RecipePage` (escenario de página completa) recibe `fixed: boolean`; su definición
está en `RecipePage.example.ts`. `RecipePage.test.tsx` comprueba que la barrera no
expone encabezados ni regiones y que su DOM invierte los pasos; con el arreglo,
la jerarquía exacta, una única `main`, banner, navegación con nombre, contentinfo,
la `ol` en orden y axe sin infracciones detectables. La lectura real con AT queda
en la [matriz manual del módulo](../README.md#matriz-manual-pendiente).

## Referencias

[Investigación previa](../../../../docs/research/03-dar-significado-al-contenido.md),
[WAI encabezados](https://www.w3.org/WAI/tutorials/page-structure/headings/),
[WAI regiones](https://www.w3.org/WAI/tutorials/page-structure/regions/),
[APG regiones](https://www.w3.org/WAI/ARIA/apg/practices/landmark-regions/),
[HTML main](https://html.spec.whatwg.org/multipage/grouping-content.html#the-main-element),
[HTML-AAM headings](https://www.w3.org/TR/html-aam/#el-h1-h6),
[WCAG secuencia](https://www.w3.org/WAI/WCAG22/Understanding/meaningful-sequence.html),
[Magenta Heading](https://www.magentaa11y.com/web-criteria/component/heading) y
[Magenta Main](https://www.magentaa11y.com/web-criteria/page-level/main-landmark).
Los originales específicos de cada región están fijados en la investigación.

# 3.2 Imágenes, enlaces y controles comprensibles

**9 minutos, demo incluida.** La persona necesita entender qué información aporta
una imagen, adónde lleva un enlace, qué hace un botón y qué introducir en un campo.
Aprenderá a decidir alt por propósito y a proporcionar nombres y etiquetas visibles.

## Recorrido y alcance

Alternativa por propósito → imagen decorativa → enlace → botón → etiqueta
persistente → demo → comprobación. Imágenes complejas o funcionales, validación y
errores quedan fuera de esta lección.

## Página de ejemplo

Instalar y arrancar según el [mapa del módulo](../README.md#ejecutar-y-revisar). Ruta: `/ejemplos/noticia`, una noticia de un
periódico local con un gráfico y un formulario de boletín. Enlaces de la slide 7:
«Examinar información con barreras» y «Comprobar nombres, etiqueta e imagen
decorativa» (`?arreglo=1`).

| Arreglo | Sin arreglo | Con arreglo |
| --- | --- | --- |
| Imagen informativa | `alt="grafico_final_v2.png"` | alt con las dos cifras del gráfico |
| Imagen decorativa | `alt="icono-sobre.svg"` | `alt=""`; el título ya dice lo mismo |
| Enlace | «Leer más» | «Consultar el informe de movilidad 2026» |
| Botón | «Aceptar» | «Suscribirme» |
| Campo | Solo placeholder «Tu correo» | `label` «Correo electrónico» asociada, `type="email"`, `autocomplete="email"` |

## Demo de corrección

1. Con la barrera, revisar la lista de enlaces y controles del lector o el árbol
   de accesibilidad. Escribir un correo y comprobar que el placeholder desaparece.
2. Pulsar **Aplicar arreglo** y abrir **Ver cambios**: los cinco cambios se
   resaltan. Hacer clic en la etiqueta para enfocar el campo, escribir y
   comprobar que la etiqueta permanece.
3. Con **Localizar «El icono decorativo tiene alt vacío»**, mostrar el icono que
   ya no se anuncia. Activar **Suscribirme** y leer la confirmación de prueba.

## Componentes y pruebas

`NewsArticle` (escenario de página completa) recibe `fixed: boolean`; su
definición está en `NewsArticle.example.ts`. Los controles son nativos en ambas
versiones para aislar la información que comunican. El formulario intercepta el
envío y no transmite datos. Las ilustraciones SVG son originales del curso.

`NewsArticle.test.tsx` comprueba los nombres poco útiles y la ausencia de label
con la barrera; con el arreglo, el alt del gráfico, el icono fuera del árbol, el
destino del enlace, la etiqueta asociada y persistente, el botón, la confirmación
y axe sin infracciones detectables. La pertinencia editorial del alt y la lectura
real quedan en la [matriz manual del módulo](../README.md#matriz-manual-pendiente).

## Referencias

[Investigación previa](../../../../docs/research/03-dar-significado-al-contenido.md),
[WAI decisión alt](https://www.w3.org/WAI/tutorials/images/decision-tree/),
[WAI etiquetas](https://www.w3.org/WAI/tutorials/forms/labels/),
[HTML placeholder](https://html.spec.whatwg.org/multipage/input.html#the-placeholder-attribute),
[HTML-AAM img](https://www.w3.org/TR/html-aam/#el-img),
[APG Link](https://www.w3.org/WAI/ARIA/apg/patterns/link/),
[APG Button](https://www.w3.org/WAI/ARIA/apg/patterns/button/),
[Magenta imagen](https://www.magentaa11y.com/web-criteria/component/informative-image),
[decorativa](https://www.magentaa11y.com/web-criteria/component/decorative-image),
[enlace](https://www.magentaa11y.com/web-criteria/component/link) y
[campo](https://www.magentaa11y.com/web-criteria/component/text-input).
Originales y condiciones de uso en la investigación; contrato heredado de
[botón/status](../../../../docs/research/02-entender-la-accesibilidad.md).

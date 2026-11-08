# 3.2 Imágenes, enlaces y controles comprensibles

> Módulo 3 · Dar significado al contenido · ejemplo: `/ejemplos/noticia`

## Objetivo

- Escribir el `alt` según el propósito de la imagen; reconocer las decorativas.
- Escribir enlaces que anticipen su destino.
- Nombrar botones por su acción y etiquetar campos de forma persistente.

## Situaciones

- **Elena** (lector de pantalla) lee una noticia: quiere entender el gráfico y abrir el informe.
- **Lucía** (TDAH y dislexia) se suscribe al boletín: necesita saber qué pide el campo mientras escribe.

## Errores comunes → solución

| Error | Qué le pasa | Solución |
| --- | --- | --- |
| `alt="grafico_final_v2.png"` | Elena oye un nombre de archivo, no los datos | `alt` con la información del gráfico |
| Icono decorativo con `alt` = nombre de archivo | Elena oye ruido | `alt=""` |
| Enlace «Leer más» | En la lista de enlaces no sabe adónde lleva | Texto que describe el destino |
| Placeholder como etiqueta | Lucía olvida qué pedía el campo al escribir; Elena oye «campo de edición» | `label` asociado con `for`/`id` |
| Botón «Aceptar» | No dice qué ocurrirá | «Suscribirme» |

## Ejemplo

- Página: noticia sobre el carril bici en «Diario de Barrio».
- Demo: lista de enlaces y controles; escribir en el campo del boletín → **Aplicar arreglo** → repetir.
- Código: `examples/NewsArticle/`.

## Conceptos clave

- Pregunta clave del `alt`: ¿qué se perdería si no se viera la imagen?
- Sin `alt`, el lector lee el nombre del archivo; `alt=""` la ignora.
- Enlace navega; botón actúa. Ambos necesitan un texto claro.
- Placeholder = pista, nunca etiqueta.

## Pruebas

- Automatizadas (`NewsArticle.test.tsx`): nombres accesibles de imagen, enlace, botón y campo con y sin arreglo; axe sin infracciones con el arreglo.
- Manuales pendientes: calidad del texto en contexto con lector de pantalla.

## Fuentes

- [Árbol de decisión del alt, W3C WAI](https://www.w3.org/WAI/tutorials/images/decision-tree/) · [HTML-AAM img](https://www.w3.org/TR/html-aam/#el-img)
- [Etiquetar controles, W3C WAI](https://www.w3.org/WAI/tutorials/forms/labels/) · [HTML placeholder](https://html.spec.whatwg.org/multipage/input.html#the-placeholder-attribute)
- [APG Link](https://www.w3.org/WAI/ARIA/apg/patterns/link/) · [APG Button](https://www.w3.org/WAI/ARIA/apg/patterns/button/)
- MagentaA11y: [imagen informativa](https://www.magentaa11y.com/web-criteria/component/informative-image), [decorativa](https://www.magentaa11y.com/web-criteria/component/decorative-image), [enlace](https://www.magentaa11y.com/web-criteria/component/link), [campo](https://www.magentaa11y.com/web-criteria/component/text-input)

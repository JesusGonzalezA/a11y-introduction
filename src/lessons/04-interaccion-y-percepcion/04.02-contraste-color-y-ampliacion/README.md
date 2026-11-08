# 4.2 Contraste, color y tamaño del texto

> Módulo 4 · Permitir la interacción y la percepción · ejemplo: `/ejemplos/horarios`

## Objetivo

- No transmitir información solo con color.
- Garantizar contraste suficiente entre texto y fondo.
- Escribir letra responsive que respete el tamaño elegido por la persona (`rem`, `clamp()`).
- Permitir ampliar sin recortar contenido (reflujo).

## Situación

- **Persona:** Manuel — 72 años, vista cansada, no distingue rojo y verde; tiene la letra del navegador y del móvil aumentada.
- **Tarea:** saber si su autobús de las 09:05 sale a tiempo y leer el aviso de obras.

## Errores comunes → solución

| Error | Qué le pasa a Manuel | Solución |
| --- | --- | --- |
| Estado solo con un punto de color | No sabe que su autobús está cancelado | Texto del estado junto al punto |
| Gris `#b4b4b4` sobre blanco (2,07:1) | El texto se confunde con el fondo | `#52525b` (7,73:1); mínimo 4,5:1 |
| `font-size: 15px` y título en `4vw` | La letra no crece con su ajuste ni con el zoom | `1rem` y `clamp(1.5rem, 1rem + 2vw, 2.25rem)` |
| Aviso con ancho y alto fijos y `overflow: hidden` | El texto se corta al ampliar | Caja flexible sin altura fija |

## Ejemplo

- Página: próximas salidas de la línea 7 de «Autobuses Ría».
- Demo:
  1. Mirar la lista de salidas sin color (o con un simulador de daltonismo de las devtools).
  2. Medir el contraste del texto gris con el selector de color de las devtools.
  3. Navegador → Ajustes → Aspecto → Tamaño de fuente «Muy grande»: el texto no crece.
  4. Zoom al 200 % o ventana de 320 px: el aviso se corta.
  5. **Aplicar arreglo** y repetir.
- Código: `examples/BusTimetable/`.

## Conceptos clave

- Color como refuerzo, nunca como única señal.
- Contraste: 4,5:1 texto normal; 3:1 texto grande (desde 18 pt o 14 pt en negrita) e iconos necesarios.
- `rem` = tamaño de letra elegido por la persona (16 px por defecto). `px` lo ignora; `vw` no crece con el zoom.
- `clamp(mínimo, ideal, máximo)` con mínimo en `rem`: tipografía adaptable sin perder la preferencia.
- Reflujo: a 320 px CSS (1280 px al 400 %) se lee con scroll solo vertical.

## Pruebas

- Automatizadas (`BusTimetable.test.tsx`): texto del estado y clase de barrera según el estado; aviso completo y axe sin infracciones con el arreglo.
- Manuales pendientes (JSDOM no calcula estilos): contraste medido, tamaño de letra del navegador, zoom 200 %/400 % y 320 px.

## Fuentes

- [WCAG 1.4.1 Uso del color](https://www.w3.org/WAI/WCAG22/Understanding/use-of-color.html)
- [WCAG 1.4.3 Contraste mínimo](https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum.html) · [WCAG 1.4.11 Contraste no textual](https://www.w3.org/WAI/WCAG22/Understanding/non-text-contrast.html)
- [WCAG 1.4.4 Cambio de tamaño del texto](https://www.w3.org/WAI/WCAG22/Understanding/resize-text.html) · [Fallo F94: texto en unidades de viewport](https://www.w3.org/WAI/WCAG22/Techniques/failures/F94)
- [WCAG 1.4.10 Reflujo](https://www.w3.org/WAI/WCAG22/Understanding/reflow.html)
- [clamp(), MDN](https://developer.mozilla.org/es/docs/Web/CSS/clamp)

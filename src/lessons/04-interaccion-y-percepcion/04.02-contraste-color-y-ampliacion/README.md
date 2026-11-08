# 4.2 Contraste, color y ampliación del contenido

**8 minutos**, incluida demo. La persona necesita distinguir el estado de cada
salida, leer el aviso y conservar el acceso al contenido al ampliar. Primero
pregunta qué significa cada estado; después distingue texto/fondo y comprueba
reorganización. No se introduce una auditoría exhaustiva ni una herramienta nueva.

## Página de ejemplo

Instalar y arrancar según el [mapa del módulo](../README.md#ejecutar-y-revisar). Ruta: `/ejemplos/horarios`, próximas salidas de
una línea de autobús con un aviso por obras. Enlaces de la slide 6: «Examinar
color y recortes» y «Revisar texto, contraste y reflujo» (`?arreglo=1`).

| Arreglo | Sin arreglo | Con arreglo |
| --- | --- | --- |
| Color | Solo un punto verde, ámbar o rojo | Punto decorativo + «A tiempo», «Retraso de 10 minutos», «Cancelado» |
| Contraste | `#b4b4b4` sobre blanco: 2,07:1 | `#52525b`: 7,73:1; aviso con el color de texto principal |
| Reflujo | Aviso de 40rem × 9,5rem con `overflow: hidden` | Sin tamaños fijos, `overflow-wrap: anywhere` |

Los ratios se calculan con la fórmula de luminancia relativa de WCAG, sin redondear
para alcanzar el umbral.

## Demostración reproducible

1. Con la barrera, intentar saber qué salida está cancelada sin distinguir colores.
2. Inspeccionar el texto de la parada y medir su contraste en las devtools.
3. Ampliar con el zoom real del navegador hasta 200%, revisando pasos intermedios;
   después reducir a 320 px CSS (o 1280 px al 400%). El aviso se recorta.
4. Pulsar **Aplicar arreglo** y abrir **Ver cambios**. Repetir los tres pasos: los
   estados se leen, el contraste supera 4,5:1 y el aviso crece sin recorte.

## Componentes y pruebas

`BusTimetable` (escenario de página completa) recibe `fixed: boolean`; su
definición está en `BusTimetable.example.ts`. La lista toma su nombre del
encabezado «Próximas salidas»; los puntos son `aria-hidden`.

`BusTimetable.test.tsx` comprueba que con la barrera la lista solo contiene horas
y que con el arreglo cada salida escribe su estado, el aviso conserva su texto y
axe no detecta infracciones. JSDOM no calcula contraste ni reflujo: esas
comprobaciones son manuales según la [matriz del módulo](../README.md#matriz-manual-pendiente).

[Investigación de color/contraste/ampliación](../../../../docs/research/04-interaccion-y-percepcion.md)
y [originales Magenta y condiciones](../../../../docs/research/04-interaccion-y-percepcion.md#magentaa11y-páginas-concretas-trazabilidad-y-reutilización).

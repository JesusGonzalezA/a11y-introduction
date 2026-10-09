# 4.2 Contraste, color y ampliación del contenido

**8 minutos**, incluida demo. La persona necesita distinguir disponibilidad,
leer el aviso y conservar acceso al formulario al ampliar. Primero pregunta qué
significa cada estado; después distingue texto/fondo y comprueba reorganización.
No se introduce una auditoría exhaustiva ni una herramienta nueva de producto.

## Ejecución y materiales

`pnpm install --frozen-lockfile`; [servidores, rutas y posiciones](../README.md#ejecutar-y-revisar).
Siete slides y siete apartados del presentador, 480 s nominales; ensayo pendiente.
La slide 6 enlaza ambas variantes de `PerceptionRegistration`. Props:
`barrier?: boolean` y `onRegister?: () => void`. Composición de ActivityPage con
un aviso en su slot `notice`; no hay un nuevo control reutilizable.

El aviso es una lista nativa de dos turnos estáticos. 10:00 tiene plazas; 12:00
está completo. El formulario sigue la actividad de las 10:00 y no selecciona turno.
En la solución hay palabras visibles; los puntos redundantes usan aria-hidden.
La lista se nombra con aria-labelledby del encabezado visible, con ID único.
No se usa status para información estática. El status de confirmación del
formulario conserva el contrato de módulos 2/3.

## Demostración reproducible

1. Abrir el contraejemplo aislado y reconocer que los puntos no explican su
   significado sin interpretar el tono. El aviso está rotulado como barrera.
2. Inspeccionar color computado de la instrucción y su fondo: `#aaa` / `#fff`.
   Calcular ratio con luminancia relativa WCAG: aproximadamente **2,32:1**,
   inferior a 4,5:1 para texto normal. La solución `#18181b` / `#fff` da **17,72:1**.
   Los valores mostrados se redondean solo para comunicar, nunca para aprobar.
3. Con zoom **real del navegador**, probar 100→200% incluidos pasos intermedios.
   Leer hasta «punto de encuentro»; comprobar campo y botón. Registrar resultado.
4. Comprobar por separado reflujo a **320 CSS px**, o 1280 al 400% real. El aviso
   rígido usa ancho/alto y recorta; no basta buscar barras de scroll para detectar
   pérdida. La solución permite ajustar líneas y crecer.
5. Repetir con la solución, leer ambos estados, llegar al formulario y activarlo.
   Restaurar zoom y viewport. Cambiar el ancho solo acredita reflujo, no zoom.

Fórmula reproducible: linealizar cada canal sRGB en [0,1] (si ≤0,04045, dividir
por 12,92; si no, ((canal+0,055)/1,055)^2,4); luminancia =
0,2126R + 0,7152G + 0,0722B; ratio = (L clara+0,05)/(L oscura+0,05).
[Definición WCAG](https://www.w3.org/TR/WCAG22/#dfn-contrast-ratio).
El cálculo comprueba la pareja elegida; la cascada, fondos efectivos y otros
estados se comprueban en navegador. El gris informativo no es texto exento.

## Contrato y pruebas

[Investigación de color/contraste/ampliación](../../../../docs/research/04-interaccion-y-percepcion.md),
[originales Magenta y condiciones](../../../../docs/research/04-interaccion-y-percepcion.md#magentaa11y-páginas-concretas-trazabilidad-y-reutilización),
[auditoría cruzada](../audit.md). Lista y controles heredan el contrato de módulos 2/3.

| Criterio / fuente | Clasificación | Evidencia / límite |
| --- | --- | --- |
| 1.4.1 estado sin color | Automatizado parcial | `PerceptionRegistration.test.tsx`: lista UL, dos LI y texto visible en ambos estados; solo horas en barrera |
| HTML/HTML-AAM lista, Magenta LS heredado | Automatizado | Rol list/nombre desde heading, ítems nativos y orden; la lista no añade parada de Tab |
| B/L/T/F recorrido/acción; status heredado | Automatizado | «mantiene la inscripción…»: Tab por enlaces/campo/botón, volver, escribir y activar una vez |
| Axe solución inicial/confirmación | Automatizado | Sin infracciones detectables en ambos estados |
| 1.4.1 pertinencia y visibilidad de estados | Manual | Revisar que se entiendan sin distinguir tonos; no basta un aria-label |
| 1.4.3 texto/fondo y 1.4.11 señales necesarias | Manual / cálculo | Colores reales y ratios en auditoría; sin prueba completa mediante JSDOM |
| 1.4.4 hasta 200% y Magenta P G4 | Manual | Zoom real, contenido/funcionalidad conservados; pendiente si no ejecutado |
| 1.4.10 a 320 CSS px | Manual / navegador | Leer sin pérdida ni desplazamiento bidimensional; no confundir con prueba de zoom |
| P orientación, AT, voz y lectura de lista/estado | Manual | Matriz del módulo; inspección DOM no acredita percepción ni anuncio |
| Lista interactiva, selección/disabled, estado dinámico del aviso | No aplicable | Solo texto informativo, sin selector ni actualizaciones |
| Excepción bidimensional de reflujo | No aplicable | Aviso/formulario no necesitan disposición fija como un mapa |
| Resto de condicionales de form/campo/botón | No aplicable o heredado | Campo opcional único y acción simple; ver matriz 4.1 e investigación |

Validación focalizada: `pnpm exec vitest run src/lessons/04-interaccion-y-percepcion/04.02-contraste-color-y-ampliacion`.
Generales: `pnpm test`, `pnpm lint`, `pnpm build`, `pnpm build-storybook`.
Revisión visual final humana, AT/voz, zoom real y ensayo siguen pendientes hasta
registrar su ejecución. No declarar la demo conforme por un resultado axe limpio.

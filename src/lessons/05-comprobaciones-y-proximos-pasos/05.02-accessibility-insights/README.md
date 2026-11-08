# 5.2 Detectar problemas con Accessibility Insights

**4 minutos**, incluida demo. Objetivo: localizar un campo que no indica qué
introducir, comprender la corrección y repetir una revisión. Secuencia: tarea →
hallazgo → elemento → label nativo → nueva comprobación → recorrido asistido.
Sin auditoría exhaustiva ni automatización profunda.

## Preparación y ejecución reproducible

Instalar el proyecto y arrancar los [servidores del módulo](../README.md#ejecutar-y-revisar).
Instalar previamente Accessibility Insights for Web desde
[Downloads oficial](https://accessibilityinsights.io/downloads/) para Chrome/Edge.
[Guía FastPass](https://accessibilityinsights.io/docs/web/getstarted/fastpass/).
Abrir la página de ejemplo con el panel «Ver cambios» cerrado.

1. Abrir `/ejemplos/taller-bicicletas` (cita en un taller de bicicletas).
   Abrir extensión desde su icono (atajo oficial Option+Shift+K en macOS,
   Alt+Shift+K en Windows/Linux, si no está reasignado). Elegir **FastPass**;
   **Automated checks** analiza la página objetivo.
2. Expandir la regla del nombre del campo (`label`, el rótulo depende de versión).
   Seleccionar su instancia para resaltarla; leer explicación y propuesta de arreglo.
   **Inspect HTML** requiere DevTools abierto. El texto «Teléfono» es un `span`
   visible sin relación con el input, que no tiene label, placeholder, title,
   aria-label ni aria-labelledby.
3. Pulsar **Aplicar arreglo** y abrir **Ver cambios**: el span pasa a ser
   `<label for="telefono">Teléfono</label>` asociado a
   `<input id="telefono" type="tel" autocomplete="tel">` (en React, htmlFor; los
   IDs reales son únicos por instancia). La etiqueta permanece al escribir.
4. Cerrar el panel. Lanzar de nuevo FastPass; si se reutiliza la ventana de
   resultados, verificar página objetivo y usar **Start over**. Registrar que
   desaparece el fallo del campo. No prometer un total de fallos fijo entre versiones.
5. En la página corregida, elegir **Tab stops**, recargar la página objetivo y activar
   **Show tab stops**. Volver al documento; Tab recorre Servicios → Pedir cita →
   Nombre → Teléfono → ¿Qué le pasa a la bicicleta? → Pedir cita (botón).
   Escribir en los campos; Shift+Tab vuelve desde el botón; Tab y Espacio confirman.
   Las últimas paradas son los controles de la herramienta flotante del curso.
6. Leer las marcas numeradas, revisar alcance/orden/foco/salida y registrar Pass/Fail
   por requisito tras revisar posibles hallazgos. **Start Over** reinicia Tab stops.
   Atender **Needs review** cuando haya casos que necesitan juicio humano.

Cero fallos automáticos no prueba accesibilidad. FastPass incluye trabajo manual;
las anotaciones no reemplazan el indicador propio de foco ni el juicio de uso.

## Ejemplo, contrato y tests

`RepairBooking` (escenario de página completa) recibe `fixed: boolean`; su
definición está en `RepairBooking.example.ts`. A diferencia del placeholder del
módulo 3, el campo no tiene ningún nombre alternativo: el texto visible no está
asociado, un fallo frecuente y reproducible. El envío está interceptado y no
transmite datos. No hay componente de extensión, backend, validación ni ARIA nuevos.

`RepairBooking.test.tsx`: con la barrera, el teléfono no tiene nombre y axe informa
exactamente la regla `label`; con el arreglo, nombre por etiqueta, `type`/
`autocomplete`, foco al hacer clic en la etiqueta, confirmación y axe sin
infracciones. Son pruebas DOM/JSDOM; **no ejecución de FastPass**.
Fuentes, criterios Gherkin enlazados y matriz en [audit.md](../audit.md) y
[nota de investigación](../../../../docs/research/05-comprobaciones-y-proximos-pasos.md).

## Registro real y pendientes

**2026-10-09: extensión no ejecutada.** La política de URL del navegador CUA
bloqueó el acceso a `chrome://extensions/` al comprobar la extensión instalada y
prohibió buscar un rodeo. No se acreditan instalación, versión, resultados FastPass
ni Tab stops reales; no se sustituyeron por axe. Los pasos anteriores quedan listos
para una ejecución humana en Chrome/Edge antes de grabar.

Al ejecutar, completar: fecha, SO, navegador/versión, extensión/versión, URL y
estado del arreglo, regla e instancia antes, resultado después, recorrido Tab stops y bloqueo
si lo hubiera. La demo del guion describe el recorrido previsto, no una ejecución
ya realizada. AT/voz/móvil/zoom, teclado humano, visual final y ensayo pendientes
según [matriz](../README.md#evidencia-y-límites).

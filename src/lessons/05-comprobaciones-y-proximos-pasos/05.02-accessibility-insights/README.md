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
Dejar dos pestañas de actividad aislada preparadas; no analizar el panel Storybook.

1. Abrir [campo sin etiqueta](http://localhost:6010/iframe.html?id=m5-label-inspection--contraejemplo&viewMode=story).
   Abrir extensión desde su icono (atajo oficial Option+Shift+K en macOS,
   Alt+Shift+K en Windows/Linux, si no está reasignado). Elegir **FastPass**;
   **Automated checks** analiza la página objetivo.
2. Expandir la regla del nombre del campo (`label`, el rótulo depende de versión).
   Seleccionar su instancia para resaltarla; leer explicación y propuesta de arreglo.
   **Inspect HTML** requiere DevTools abierto. El input de este contraejemplo no
   tiene label, placeholder, title, aria-label ni aria-labelledby.
3. Mostrar la solución con `<label for="nombre">Nombre (opcional)</label>` e
   `<input id="nombre" type="text" autocomplete="given-name">` (en React, htmlFor;
   los IDs reales son únicos por instancia). La etiqueta permanece al escribir.
4. Abrir [campo corregido](http://localhost:6010/iframe.html?id=m5-label-inspection--solucion&viewMode=story).
   Lanzar de nuevo FastPass desde esa pestaña; si se reutiliza la ventana de
   resultados, verificar página objetivo y usar **Start over**. Registrar que
   desaparece el fallo del campo. No prometer un total de fallos fijo entre versiones.
5. En la página corregida, elegir **Tab stops**, recargar la página objetivo y activar
   **Show tab stops**. Volver al documento; Tab recorre Sobre la actividad →
   Inscripción → Consultar información práctica → Nombre → Inscribirme.
   Escribir Ana; Shift+Tab vuelve al campo desde el botón; Tab y Espacio confirman.
   Continuar con Tab fuera del formulario (puede llegar a la interfaz del navegador).
6. Leer las marcas numeradas, revisar alcance/orden/foco/salida y registrar Pass/Fail
   por requisito tras revisar posibles hallazgos. **Start Over** reinicia Tab stops.
   Atender **Needs review** cuando haya casos que necesitan juicio humano.

Cero fallos automáticos no prueba accesibilidad. FastPass incluye trabajo manual;
las anotaciones no reemplazan el indicador propio de foco ni el juicio de uso.

## Ejemplo, contrato y tests

`LabelInspection` compone ActivityPage con `inspectionBarrier='label'` en la barrera
rotulada. A diferencia del placeholder del módulo 3, aquí se elimina cualquier
nombre alternativo para disponer de un fallo reproducible. La solución mantiene el
campo text opcional, label/for/id, autocomplete y el envío simulado nativo heredado.
No hay componente de extensión, backend, validación ni ARIA nuevos.

`LabelInspection.test.tsx`: barrera sin nombre y regla label en axe; solución con
etiqueta persistente, edición, clic de etiqueta, Tab/Shift+Tab, activación, confirmación,
salida y axe inicial/final. Son pruebas DOM/JSDOM; **no ejecución de FastPass**.
Fuentes, criterios Gherkin enlazados y matriz en [audit.md](../audit.md) y
[nota de investigación](../../../../docs/research/05-comprobaciones-y-proximos-pasos.md).

## Registro real y pendientes

**2026-10-09: extensión no ejecutada.** La política de URL del navegador CUA
bloqueó el acceso a `chrome://extensions/` al comprobar la extensión instalada y
prohibió buscar un rodeo. No se acreditan instalación, versión, resultados FastPass
ni Tab stops reales; no se sustituyeron por axe. Los pasos anteriores quedan listos
para una ejecución humana en Chrome/Edge antes de grabar.

Al ejecutar, completar: fecha, SO, navegador/versión, extensión/versión, URL de ambas
variantes, regla e instancia antes, resultado después, recorrido Tab stops y bloqueo
si lo hubiera. La demo del guion describe el recorrido previsto, no una ejecución
ya realizada. AT/voz/móvil/zoom, teclado humano, visual final y ensayo pendientes
según [matriz](../README.md#evidencia-y-límites).

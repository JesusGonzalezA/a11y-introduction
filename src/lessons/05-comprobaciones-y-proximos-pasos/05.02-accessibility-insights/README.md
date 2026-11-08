# 5.2 Detectar problemas con Accessibility Insights

> Módulo 5 · Primeras comprobaciones y próximos pasos · ejemplo: `/ejemplos/taller-bicicletas`

## Objetivo

- Ejecutar **FastPass → Automated checks**, abrir un resultado y localizar el elemento.
- Corregir y repetir la comprobación.
- Recorrer la página con **Tab stops**.
- Entender los límites de las pruebas automáticas.

## Situación

- **Persona:** Elena — ciega; usa lector de pantalla.
- **Tarea:** pedir cita en un taller de bicicletas (nombre, teléfono, avería).
- Tab stops permite revisar también el recorrido de **Andrés** con teclado.

## Error común → solución

| Error | Qué le pasa a Elena | Solución |
| --- | --- | --- |
| `<span>Teléfono</span>` sin asociar al `input` | Oye «campo de edición» sin nombre | `<label for="telefono">` |

## Ejemplo

- Página: «Pide cita» del Taller La Cadena.
- Demo:
  1. Instalar [Accessibility Insights for Web](https://accessibilityinsights.io/downloads/) (Chrome o Edge).
  2. Abrir la página con el panel «Ver cambios» cerrado; lanzar la extensión (Alt/Option + Shift + K).
  3. **FastPass → Automated checks** → expandir la regla de etiqueta → seleccionar la instancia.
  4. **Aplicar arreglo** → **Start over** → el fallo desaparece.
  5. **Tab stops** → recargar → recorrer con Tab y Shift + Tab.
- Código: `examples/RepairBooking/`.

## Conceptos clave

- Las reglas automáticas detectan solo una parte de los problemas.
- No deciden si un texto se entiende ni si la tarea se completa.
- Combinar: herramienta + teclado + lector de pantalla + personas usuarias.

## Pruebas

- Automatizadas (`RepairBooking.test.tsx`): con barrera axe detecta la regla `label`; con arreglo el campo tiene nombre, `type`/`autocomplete` y axe sin infracciones. No equivale a ejecutar FastPass.
- Manuales pendientes: ejecución real de FastPass y Tab stops antes de grabar ([auditoría](../audit.md)).

## Fuentes

- [FastPass, Accessibility Insights](https://accessibilityinsights.io/docs/web/getstarted/fastpass/)
- [Etiquetar controles, W3C WAI](https://www.w3.org/WAI/tutorials/forms/labels/)
- [Evaluar la accesibilidad, W3C WAI](https://www.w3.org/WAI/test-evaluate/)

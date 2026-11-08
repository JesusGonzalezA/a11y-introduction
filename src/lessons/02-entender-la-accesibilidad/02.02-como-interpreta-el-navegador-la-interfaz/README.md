# 2.2 Cómo interpreta el navegador nuestra interfaz

> Módulo 2 · Entender la accesibilidad · ejemplo: `/ejemplos/cine`

## Objetivo

- Entender el árbol de accesibilidad.
- Reconocer nombre, rol y estado de un control.
- Aplicar «primero HTML; ARIA solo completa».

## Situación

- **Persona:** Elena — ciega; usa lector de pantalla.
- **Tarea:** elegir una sesión con entradas en la web de un cine y saber que la ha elegido.

## Errores comunes → solución

| Error | Qué le pasa a Elena | Solución |
| --- | --- | --- |
| Sesiones como `div` con clic | Oye «16:30» sin rol: no sabe que se puede pulsar | `<button type="button">` |
| Sesión agotada solo en gris | No sabe que está agotada | `disabled` + texto «Agotada» |
| Confirmación que aparece sin más | Nadie le lee el mensaje | `role="status"` + `aria-atomic="true"` |

## Ejemplo

- Página: elegir sesión de «La ola tranquila» en Cine Alameda.
- Demo: abrir el árbol de accesibilidad de las devtools → comparar `div` y `button` → **Aplicar arreglo** → elegir sesión y ver la confirmación.
- Código: `examples/CinemaBooking/`.

## Conceptos clave

- HTML → árbol de accesibilidad → tecnología de apoyo.
- Nombre (qué es) · rol (qué tipo de control) · estado (cómo está).
- ARIA añade información, no comportamiento ni teclado.

## Pruebas

- Automatizadas (`CinemaBooking.test.tsx`): con barrera no hay botones ni estado; con arreglo tres botones, «19:00 · Agotada» deshabilitado, región de estado vacía antes y completa después, axe sin infracciones.
- Manuales pendientes: anuncio real de la confirmación con lector de pantalla.

## Fuentes

- [HTML-AAM button](https://www.w3.org/TR/html-aam/#el-button) · [HTML-AAM div](https://www.w3.org/TR/html-aam/#el-div)
- [WAI-ARIA status](https://www.w3.org/TR/wai-aria-1.2/#status) · [Técnica ARIA22](https://www.w3.org/WAI/WCAG22/Techniques/aria/ARIA22)
- [Primera regla de uso de ARIA](https://www.w3.org/TR/using-aria/#rule1)
- [APG Button](https://www.w3.org/WAI/ARIA/apg/patterns/button/) · [Magenta Button](https://www.magentaa11y.com/web-criteria/component/button)

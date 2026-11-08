# 4.1 Navegación por teclado y foco visible

> Módulo 4 · Permitir la interacción y la percepción · ejemplo: `/ejemplos/biblioteca`

## Objetivo

- Recorrer y activar controles con teclado: Tab, Shift + Tab, Enter, Espacio.
- Mantener un indicador de foco visible y con contraste.
- Evitar que elementos fijos tapen el foco.

## Situación

- **Persona:** Andrés — temblor en las manos; usa solo el teclado.
- **Tarea:** entrar en su cuenta de la biblioteca (carné y PIN) para renovar un préstamo.

## Errores comunes → solución

| Error | Qué le pasa a Andrés | Solución |
| --- | --- | --- |
| `*:focus { outline: none }` | No sabe dónde está: navega a ciegas | `:focus-visible { outline: 3px solid … }` |
| Cabecera `sticky` tapa el foco al retroceder | El foco existe, pero no se ve | `html { scroll-padding-top: 6rem }` |

## Ejemplo

- Página: acceso a la cuenta de la Biblioteca Municipal, con cabecera fija.
- Demo: Tab hasta el final y Shift + Tab de vuelta, sin y con arreglo.
- Código: `examples/LibraryLogin/`.

## Conceptos clave

- Alcanzar, ver, activar y abandonar con teclado.
- `:focus-visible`: selector CSS para el foco cuando hace falta verlo (teclado).
- Contraste del indicador de foco: 3:1 con los colores adyacentes.
- Barreras de teclado: inalcanzable (2.1), foco invisible o tapado (aquí), trampas de teclado (no se puede salir).

## Pruebas

- Automatizadas (`LibraryLogin.test.tsx`): recorrido con Tab y Shift + Tab en ambos estados, clase de foco y margen de desplazamiento solo con arreglo, envío con Enter y axe sin infracciones.
- Manuales pendientes: apariencia real del foco y cabecera en navegador.

## Fuentes

- [WCAG 2.4.7 Foco visible](https://www.w3.org/WAI/WCAG22/Understanding/focus-visible.html)
- [WCAG 2.4.11 Foco no tapado](https://www.w3.org/WAI/WCAG22/Understanding/focus-not-obscured-minimum.html)
- [WCAG 2.1.2 Sin trampas de teclado](https://www.w3.org/WAI/WCAG22/Understanding/no-keyboard-trap.html)
- [:focus-visible, MDN](https://developer.mozilla.org/es/docs/Web/CSS/:focus-visible) · [scroll-padding, MDN](https://developer.mozilla.org/es/docs/Web/CSS/scroll-padding)

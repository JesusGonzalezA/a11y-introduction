# 4.3 Animaciones y movimiento

> Módulo 4 · Permitir la interacción y la percepción · ejemplo: `/ejemplos/festival`

## Objetivo

- Saber dónde se activa «Reducir movimiento» en cada sistema operativo.
- Leer esa preferencia con la media query `prefers-reduced-motion`.
- Ofrecer un control para pausar el contenido que se mueve solo.
- Conocer otras preferencias del sistema que CSS puede leer.

## Situación

- **Persona:** Ana — trastorno vestibular; tiene activado «Reducir movimiento».
- **Tarea:** ver el cartel de un festival y comprar un abono.
- También afecta a **Lucía**: el movimiento constante le impide concentrarse.

## Errores comunes → solución

| Error | Qué le pasa a Ana | Solución |
| --- | --- | --- |
| Fondo y botón animados siempre | Se marea aunque pidió menos movimiento | Animar dentro de `@media (prefers-reduced-motion: no-preference)` |
| Cartel que se desplaza sin fin | Ana se marea; Lucía no consigue leerlo | Botón «Pausar el cartel»; con movimiento reducido, lista quieta |

## Ejemplo

- Página: portada del festival «Sonidos del Norte 2027».
- Demo:
  1. Activar «Reducir movimiento» en el sistema o en devtools (Rendering → Emulate CSS media feature `prefers-reduced-motion: reduce`).
  2. Con la barrera, todo sigue moviéndose.
  3. **Aplicar arreglo**: sin movimiento y el cartel pasa a lista.
  4. Quitar la emulación: vuelve la animación y aparece «Pausar el cartel».
- Código: `examples/FestivalPage/`.

## Dónde se activa «Reducir movimiento»

| Sistema | Ruta |
| --- | --- |
| macOS | Ajustes del Sistema → Accesibilidad → Pantalla → Reducir movimiento |
| Windows 11 | Configuración → Accesibilidad → Efectos visuales → Efectos de animación (desactivar) |
| iOS / iPadOS | Ajustes → Accesibilidad → Movimiento → Reducir movimiento |
| Android | Ajustes → Accesibilidad → Quitar animaciones (el nombre varía por fabricante) |

## Conceptos clave

- El movimiento como mejora progresiva: se añade solo con `no-preference`.
- Movimiento automático de más de 5 segundos → pausar, detener u ocultar.
- Botón de pausa: `button` nativo; su texto cambia («Pausar» / «Reanudar»), por eso no usa `aria-pressed`.
- Otras preferencias: `prefers-color-scheme`, `prefers-contrast`, `forced-colors`; el tamaño de letra se respeta con `rem` (4.2).

## Pruebas

- Automatizadas (`FestivalPage.test.tsx`): sin arreglo no hay control de pausa; con arreglo el botón pausa y reanuda con clic y Enter conservando el foco; la lista de artistas se expone una sola vez; axe sin infracciones.
- Manuales pendientes (JSDOM no evalúa media queries): comportamiento con «Reducir movimiento» activado y desactivado en navegador real.

## Fuentes

- [WCAG 2.2.2 Pausar, detener, ocultar](https://www.w3.org/WAI/WCAG22/Understanding/pause-stop-hide.html)
- [WCAG 2.3.3 Animación desde interacciones](https://www.w3.org/WAI/WCAG22/Understanding/animation-from-interactions.html) · [Técnica C39](https://www.w3.org/WAI/WCAG22/Techniques/css/C39)
- [prefers-reduced-motion, MDN](https://developer.mozilla.org/es/docs/Web/CSS/@media/prefers-reduced-motion)
- [Media Queries Level 5: preferencias del usuario](https://www.w3.org/TR/mediaqueries-5/#mf-user-preferences)
- [APG Button (botón de alternancia)](https://www.w3.org/WAI/ARIA/apg/patterns/button/)

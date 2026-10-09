# 2.1 Personas, formas de interacción y barreras

**5 minutos, demo incluida.** La persona quiere conocer una actividad, alcanzar
la acción de inscripción y reconocer el resultado. Al terminar, el alumnado
relacionará teclado, ratón, voz, ampliación y lector de pantalla con distintas
formas de usar una web; reconocerá barreras visuales, auditivas, motoras y cognitivas.

## Recorrido y alcance

Cinco slides y cinco apartados del [guion](presenter.md): tarea (35 s), formas de
uso (55 s), necesidades/barreras (65 s), demo de teclado (90 s) y comprobación
(55 s). Total previsto 300 s; **ensayo humano pendiente**. La solución técnica
aparece después del problema. La inspección del árbol se reserva para 2.2; el
recorrido completo del formulario y el foco se profundizan en el módulo 4.

## Ejecutar la demo

Desde la raíz: `pnpm install --frozen-lockfile`, `pnpm dev` y `pnpm storybook`.
Abrir las [slides 9–13](http://localhost:5173/#/8), después:

1. [Contraejemplo deliberado](http://localhost:6006/?path=/story/m2-keyboard-registration--contraejemplo).
   Entrar al canvas/iframe de la story, empezar antes del primer enlace y usar
   Tab. Se pasa de información a ayuda sin alcanzar «Inscribirme». No confundir
   la navegación de la interfaz de Storybook con la de la demo.
2. [Botón nativo](http://localhost:6006/?path=/story/m2-keyboard-registration--boton-nativo).
   Recorrer información → botón → ayuda; volver con Shift+Tab y activar con Enter.
   Aparece una confirmación de prueba y se conserva el foco. Espacio también activa.
   Recargar la story para reiniciar la confirmación antes de repetirla.

En Safari se debe habilitar la navegación de teclado. El ensayo no debe implicar
que no ver foco por una preferencia del navegador prueba una barrera del ejemplo.

## Ejemplo y contrato

`examples/KeyboardRegistration` compone el escenario compartido documentado en el
[mapa del módulo](../README.md#interfaz-compartida-explícita). No hay componente de
botón personalizado: la solución es HTML nativo y el genérico solo es un
contraejemplo identificado. Ratón/voz/ampliación/lector se explican; la demo guiada
se centra en teclado. No se implementan vídeo, formulario ni envío real.

| Entrada | Resultado nativo |
| --- | --- |
| Tab / Shift+Tab | Recorre enlace, botón y ayuda en orden / orden inverso |
| Enter / Espacio, botón enfocado | Ejecuta una vez; confirmación visible; conserva foco |
| Clic | Misma acción; el foco por clic depende del navegador |

`KeyboardRegistration.test.tsx` comprueba el recorrido bidireccional, activación
una vez por entrada, resultado, relación con status y axe inicial/final. El test
del contraejemplo documenta ausencia de rol y salto en Tab; un resultado limpio
de axe no lo convierte en solución. La prueba de foco con clic solo describe
JSDOM, no promete el mismo foco de puntero en Safari.

Consultar [matriz de criterios y manuales](../README.md#criterios-y-evidencia) y
[auditoría](../audit.md). Quedan pendientes lector real, voz, gestos móviles,
foco visual, ampliación/reflujo y revisión visual final humana.

## Fuentes

La [investigación específica](../../../../docs/research/02-entender-la-accesibilidad.md)
conserva fecha, enlaces primarios y criterios originales trazables: WAI
[formas de uso](https://www.w3.org/WAI/people-use-web/tools-techniques/),
[necesidades y barreras](https://www.w3.org/WAI/people-use-web/abilities-barriers/),
[APG Button](https://www.w3.org/WAI/ARIA/apg/patterns/button/),
[Magenta Button](https://www.magentaa11y.com/web-criteria/component/button),
[HTML button](https://html.spec.whatwg.org/multipage/form-elements.html#the-button-element)
y [WCAG teclado](https://www.w3.org/WAI/WCAG22/Understanding/keyboard.html).

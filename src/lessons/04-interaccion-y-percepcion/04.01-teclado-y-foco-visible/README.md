# 4.1 Navegación por teclado y foco visible

**9 minutos**, incluida la comparación con/sin foco. La persona necesita completar
la inscripción sin ratón y continuar fuera del formulario. El descubrimiento
parte de la tarea: alcanzar → escribir → reconocer foco → activar → confirmar →
salir. No se estudian todavía controles compuestos ni gestión de foco de diálogos.

## Ejecución y materiales

Instalar con `pnpm install --frozen-lockfile`; ejecutar slides y Storybook según
[el mapa del módulo](../README.md#ejecutar-y-revisar). `slides.tsx` contiene siete
ideas transferibles; `presenter.md` amplía cada una en el mismo orden. El ensayo
real de 540 s sigue pendiente. Demos enlazadas desde la slide 6.

`FocusRegistration` es una composición de la página compartida, no un control
nuevo. Props: `hideFocus?: boolean` (contraejemplo CSS acotado) y `onRegister?: () => void`
(observa la acción simulada sin datos). Reutiliza ActivityPage, su campo Nombre
opcional, enlaces y RegistrationAction con `type="submit"`. No hay ARIA nuevo.
La versión inicial del status existe antes del cambio y el foco permanece en
el botón. `aria-controls` heredado expresa relación; no promete navegación AT.

## Recorrido y demostración

| Lugar | Tecla | Resultado |
| --- | --- | --- |
| Página | Tab / Shift + Tab | Enlaces → campo → inscripción, y vuelta |
| Enlace | Enter | Sigue el href |
| Campo | Caracteres / edición | Cambia el nombre opcional |
| Botón | Enter / Espacio | Una inscripción de prueba y confirmación |
| Último control | Tab | Continúa fuera del formulario |

Abrir la solución aislada, llegar al primer campo con Tab, escribir Ana y llegar
al botón. Volver al campo, regresar al botón y activar. Salir y volver. Probar el
enlace de información con Enter. Repetir en el contraejemplo y observar que el
foco DOM sigue moviéndose pero desaparece el contorno. El cursor del campo puede
seguir dando una pista: no afirmamos desaparición universal de todo indicio.
En macOS comprobar navegación de teclado del sistema/navegador.

Las barreras de control inalcanzable y orden incoherente se explican retomando
los módulos 2 y 3. La slide de trampa muestra código **no conectado**; ninguna
story bloquea Tab ni captura Escape. No equiparar un modal cerrable con una
trampa incumplidora. Un método de salida no estándar debe estar explicado.

## Contrato y pruebas

[Fuentes y originales Magenta B/L/T/F/P](../../../../docs/research/04-interaccion-y-percepcion.md#magentaa11y-páginas-concretas-trazabilidad-y-reutilización)
y [auditoría cruzada](../audit.md). Los criterios originales íntegros se mantienen
en sus enlaces fijados; aquí se expresa su aplicación con palabras propias.

| Criterio | Clasificación | Evidencia / límite |
| --- | --- | --- |
| B/L/T rol/nombre, HTML-AAM; label persistente, type/autocomplete | Automatizado | `FocusRegistration.test.tsx`: localizar por rol/nombre, for/id y etiqueta tras escribir; contrato base M3 |
| B/L/T G1, F orden; WCAG 2.1.1/2.4.3/2.1.2 | Automatizado | «recorre y abandona…» verifica ambos sentidos con controles centinela fuera de página; «completa…» verifica tarea |
| B G1 Enter/Espacio/clic, foco y resultado | Automatizado | Tres métodos, callback una vez, mismo status/atomicidad/aria-controls y foco en botón |
| L G1 Enter/clic/href | Automatizado | «activa el enlace…»; el evento cancelado de JSDOM no acredita navegación |
| Form único heredado y envío interceptado | Automatizado heredado | Test «permite envío implícito…» de ActivityContent; no se modifica esa conducta |
| Axe inicial/confirmación | Automatizado | Estado inicial y resultado por tres vías, sin infracciones detectables |
| Foco visible/no tapado, 2.4.7/2.4.11 y B/L/T G1 | Manual | Navegador y persona: ver cada parada y comparar variantes; JSDOM no lo dibuja |
| L destino, salida real al entorno, B/L/T/F lectura/gestos | Manual | Navegación técnica y matriz humana/AT en módulo y auditoría |
| F nombre para distinguir múltiples formularios | No aplicable | Solo existe un form; no se promete landmark form con nombre |
| Popup, toggle, expanded/pressed, campos requeridos/error/disabled, grupos | No aplicable | API no ofrece estos estados; único campo opcional nativo |

Validación focalizada: `pnpm exec vitest run src/lessons/04-interaccion-y-percepcion/04.01-teclado-y-foco-visible`.
Comprobaciones generales: `pnpm test`, `pnpm lint`, `pnpm build`, `pnpm build-storybook`.
La apariencia del foco, lectores reales, voz, teclado humano entre navegadores,
zoom y ensayo pendientes están detallados en la matriz del módulo.

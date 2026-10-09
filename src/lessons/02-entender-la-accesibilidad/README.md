# Módulo 2. Entender la accesibilidad

**10 minutos**, incluidas las demos. Fuente: [issue #3](https://github.com/JesusGonzalezA/a11y-introduction/issues/3)
y [temario #1](https://github.com/JesusGonzalezA/a11y-introduction/issues/1).
Continúa la tarea presentada en el módulo 1: conocer una actividad e inscribirse.

| Lección | Objetivo | Duración | Slides (portada = 1) |
| --- | --- | --- | --- |
| [2.1 Personas, formas de interacción y barreras](02.01-personas-interaccion-y-barreras/README.md) | Relacionar formas de uso y necesidades con barreras observables | 5 min | 9–13 (`/#/8` a `/#/12`) |
| [2.2 Cómo interpreta el navegador nuestra interfaz](02.02-como-interpreta-el-navegador-la-interfaz/README.md) | Reconocer nombre, rol y estado; partir de HTML y completar con ARIA | 5 min | 14–19 (`/#/13` a `/#/18`) |

## Decisiones pedagógicas

La persona necesita conocer la actividad, localizar la acción y reconocer su
resultado. Primero se descubre que una acción visible puede resultar inalcanzable;
después se explica qué significado transmite el navegador. Las dos lecciones
comparten contenido y estilos de la actividad para aislar la diferencia del control.

No se implementa un formulario ni se recogen datos. El aviso visible identifica la
inscripción como simulación. Imagen, estructura completa y formulario se desarrollan
en los módulos posteriores; aquí basta título, descripción e información práctica
para contextualizar la acción. No se añade multimedia para ilustrar la barrera de
subtítulos ni se enseña a reconstruir un botón genérico con ARIA.

## Ejecutar y revisar

Desde la raíz: `pnpm install --frozen-lockfile`, `pnpm dev` y, en otra terminal,
`pnpm storybook`. Slides en `http://localhost:5173`; Storybook en
`http://localhost:6006`. `VITE_STORYBOOK_URL` cambia el destino de los enlaces de
las slides. Las stories conservan estas etapas y se pueden abrir por separado:

| Superficie | Ruta de Storybook |
| --- | --- |
| 2.1 Contraejemplo deliberado: acción inalcanzable | `/?path=/story/m2-keyboard-registration--contraejemplo` |
| 2.1 Solución: botón nativo | `/?path=/story/m2-keyboard-registration--boton-nativo` |
| 2.2 Botón HTML y contraejemplo genérico | `/?path=/story/m2-button-semantics--comparacion` |
| 2.2 Botón HTML: inscripción cerrada | `/?path=/story/m2-button-semantics--no-disponible` |

Jerarquía: `Módulo 2: Entender la accesibilidad/Lección 2.N: Título/Ejemplos/Nombre`.
Cada slide que abre una demo tiene su enlace; los guiones mantienen los mismos
5 y 6 apartados que sus respectivas slides.

## Interfaz compartida explícita

`shared/ActivityRegistration.tsx` contiene **el escenario**, no un componente de
botón genérico reutilizable. Sus props son `barrier` (contraejemplo intencional),
`unavailable` (estado nativo cerrado) y `onRegister` (observador opcional de la acción
simulada). No se usa `barrier` junto a `unavailable`. `KeyboardRegistration` restringe
la API a la comparación de teclado; `ButtonSemantics` compone la comparación o el
estado cerrado. Sus stories y tests están co-localizados en cada lección.

La acción nativa usa `button type="button"`, nombre desde el texto visible y
`disabled` solo en la variante cerrada. `aria-describedby` relaciona la explicación
de indisponibilidad. La confirmación `status` existe vacía antes de actuar y recibe
el texto completo, con `aria-atomic="true"`. `aria-controls` apunta a su ID único;
no se promete que esa relación permita saltar al resultado en cualquier lector.
El foco de teclado permanece en el botón: no cambia de contexto. No hay popup,
selección, expansión, error ni carga asíncrona. El contraejemplo `span onClick`
tiene dos supresiones de lint locales justificadas; no se ocultan las barreras con
roles ni tabulación artificial.

## Criterios y evidencia

El [inventario previo de fuentes y criterios](../../../docs/research/02-entender-la-accesibilidad.md)
clasifica todas las cláusulas de Magenta Button, las partes transferibles de Alert
y ARIA22 como automatizadas, manuales o no aplicables. Conserva los enlaces a los
originales y paráfrasis con identificadores G1/G2/G3. Los contratos de encabezados,
listas y enlaces se heredan de la investigación del módulo 1. La
[auditoría separada de tests y documentación](audit.md) cruza ese inventario con
la evidencia concreta y las brechas; no es una declaración de conformidad completa.

| Área | Automatizado | Manual o no aplicable |
| --- | --- | --- |
| Botón | Nombre/rol/texto/type, Tab y Shift+Tab, Enter/Espacio/clic una vez, foco DOM | Apariencia del foco, lectura real y voz pendientes |
| Indisponibilidad | disabled, descripción, ausencia de activación y de Tab | Descubribilidad/estado con lector pendientes; aria-disabled enfocable no aplicable |
| Confirmación | Región previa, texto actualizado, atomicidad, relación única, foco retenido | Anuncio real y lectura por gestos pendientes; alert urgente no aplicable |
| Contraejemplo | Ausencia de rol button; Tab lo salta; solo clic produce acción | Comparar semántica real en navegador; no exige que axe detecte la barrera |
| Solución | axe antes/después de actuar y estado cerrado | Contraste, zoom y reflujo no demostrables en JSDOM |
| Slides | Títulos/axe, enlaces de demos, foco simulado, registro ordenado | Revisión visual humana y ensayo pendientes |

## Matriz manual pendiente

Registrar versión, sistema, fecha y resultado al ejecutar. Las pruebas del DOM no
sustituyen ninguna de estas comprobaciones.

| Entorno | Recorrido | Estado |
| --- | --- | --- |
| Chrome y Safari, teclado | Tab/Shift+Tab, foco visible, Enter/Espacio, resultado y navegación de enlaces; en Safari habilitar navegación de teclado | Pendiente de revisión humana |
| NVDA + Chrome y Firefox, Windows | Nombre/rol del botón, estado disabled en lectura, confirmación completa sin mover foco | Pendiente; no ejecutado |
| VoiceOver + Safari, macOS | Mismo recorrido; verificar resultado con interacción real y lectura posterior | Pendiente; no ejecutado |
| VoiceOver + Safari, iOS; TalkBack + Chrome, Android | Deslizar, reconocer control/estado, doble toque, leer confirmación | Pendiente; no ejecutado |
| Control por voz, macOS/Safari | Activar por nombre visible «Inscribirme» en story nativa aislada | Pendiente; no ejecutado |
| Navegador, zoom 200%/400% y ancho 320 CSS px | Legibilidad, reflujo, foco y controles sin recortes; contraste calculado no sustituye inspección | Pendiente de revisión humana |
| Autor humano | Revisar todas las superficies; ensayar 5 + 5 minutos incluidas demos e inspección | Pendiente; tiempos estimados, no ensayo |

## Validación de entrega

Consultar [audit.md](audit.md) para resultados reales y revisión técnica de superficies.
Ejecutar `pnpm test`, `pnpm lint`, `pnpm build` y `pnpm build-storybook` desde la raíz.
Los builds y las comprobaciones técnicas no dan por realizada la revisión visual
final del autor, el ensayo ni las pruebas de tecnologías de apoyo.

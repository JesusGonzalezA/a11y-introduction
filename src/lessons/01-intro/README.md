# Módulo 1: Introducción

**5 minutos** de Introducción al desarrollo web accesible. Presenta la tarea de
conocer una actividad e inscribirse, la audiencia, los resultados de aprendizaje
y el programa de 5 módulos, 11 lecciones y 60 minutos. Fuente: [issue #2](https://github.com/JesusGonzalezA/a11y-introduction/issues/2).

| Lección | Duración | Slides | Guion |
| --- | --- | --- | --- |
| [1.1 Bienvenida y presentación](./01.01-bienvenida-y-presentacion/README.md) | 2 min | 3 | [3 apartados](./01.01-bienvenida-y-presentacion/presenter.md) |
| [1.2 Objetivos y contenidos](./01.02-objetivos-y-contenidos/README.md) | 3 min | 4 | [4 apartados](./01.02-objetivos-y-contenidos/presenter.md) |

## Secuencia y alcance

Primero se reconoce lo que la persona necesita hacer; después se relaciona con
estructura, información e interacción. La lección 1.2 explica qué aprenderemos y
cómo pasar de una necesidad a un concepto, su implementación, una demostración y
su comprobación en las lecciones prácticas. Este módulo presenta ese recorrido:
no implementa el formulario ni necesita demos o stories nuevas.

Los tiempos previstos por slide son 35 + 40 + 45 segundos en 1.1 y
45 + 55 + 40 + 40 segundos en 1.2. Incluyen las transiciones; la portada sirve de
entrada, sin narración independiente. El **ensayo cronometrado está pendiente**:
los presupuestos no prueban una duración oral real.

La implementación técnica se desarrolla en los módulos 2–4; las herramientas en
el 5. Los ejercicios autónomos son adicionales. No se enseñan aquí patrones ARIA
avanzados, auditorías exhaustivas ni automatización profunda.

## Ejecución y superficies

Desde la raíz, con Node.js 22.12+ y pnpm 10.26.1:

```bash
pnpm install --frozen-lockfile
pnpm dev
pnpm storybook
```

`pnpm dev` sirve la presentación en `http://localhost:5173`. `pnpm storybook`
se ejecuta en otra terminal y sirve `http://localhost:6006`, sin stories en esta
entrega. Se conserva la infraestructura para las lecciones prácticas posteriores.

| Posición global / hash | Lección | Título |
| --- | --- | --- |
| 0 / `/#/` | Portada | Introducción al desarrollo web accesible |
| 1 / `/#/1` | 1.1 | Bienvenida y presentación |
| 2 / `/#/2` | 1.1 | La accesibilidad se construye al desarrollar |
| 3 / `/#/3` | 1.1 | Conocer una actividad e inscribirse |
| 4 / `/#/4` | 1.2 | Objetivos y contenidos |
| 5 / `/#/5` | 1.2 | El recorrido del curso |
| 6 / `/#/6` | 1.2 | Aprender desde una tarea |
| 7 / `/#/7` | 1.2 | Consultar los materiales y seguir practicando |

## Criterios y evidencia

Contrato contrastado antes de implementar en la
[investigación fechada](../../../docs/research/01-introduccion.md), que enlaza HTML,
HTML-AAM, WAI, APG y los criterios originales de MagentaA11y. Esta matriz registra
la evidencia de implementación, separada de las propuestas de investigación.

| Criterio | Clasificación | Evidencia o límite |
| --- | --- | --- |
| Encabezados con nombre visible, rol y nivel nativos | Automatizado | `slides.test.tsx`: cada slide expone un `h2` por rol y nombre no vacío; no tabula artificialmente. [HTML](https://html.spec.whatwg.org/multipage/sections.html#the-h1,-h2,-h3,-h4,-h5,-and-h6-elements), [Magenta heading](https://www.magentaa11y.com/web-criteria/component/heading). |
| Listas y elementos nativos fuera de Tab | Automatizado | Mismo test: `ul`/`ol`, `li` y ausencia de `tabindex`; el orden pedagógico se revisa editorialmente. [HTML](https://html.spec.whatwg.org/multipage/grouping-content.html#the-ul-element), [Magenta list](https://www.magentaa11y.com/web-criteria/component/list). |
| Enlace a materiales con texto visible, rol, destino y foco DOM | Automatizado | Test «permite enfocar el enlace…»: `a[href]`, nombre visible y `user-event.tab()`. [HTML](https://html.spec.whatwg.org/multipage/text-level-semantics.html#the-a-element), [Magenta link](https://www.magentaa11y.com/web-criteria/component/link). |
| Reglas detectables por axe en las siete slides aisladas | Automatizado | `axe` en cada slide dentro de `main`; no equivale a conformidad ni valida Reveal.js. [WAI, evaluación](https://www.w3.org/WAI/fundamentals/accessibility-intro/#evaluating). |
| Jerarquía de portada `h1` y slides `h2`; comprensión y orden de lectura en reproductor | Manual | Pendiente con VoiceOver/Safari macOS y NVDA/Chrome Windows. Verificar título/nivel, listas y número de elementos, propósito del enlace y contenido que entra en vista. [HTML-AAM](https://www.w3.org/TR/html-aam/), criterios Magenta anteriores. |
| Navegación real con teclado, foco visible y Enter en el enlace | Manual | Pendiente en Chrome y Safari, sin ratón. Abrir materiales con acceso autorizado y comprobar regreso al deck; revisar también controles de Reveal.js. [APG Link](https://www.w3.org/WAI/ARIA/apg/patterns/link/). |
| Anuncios y gestos móviles de encabezados, listas y enlace | Manual | Pendiente con VoiceOver/Safari iOS y TalkBack/Chrome Android: deslizar, identificar estructura y activar enlace con doble toque. Criterios Magenta anteriores. |
| Contraste, ampliación al 200 %/400 %, recortes y reflujo | Manual | Pendiente en navegador real. La presentación usa un lienzo escalado: inspeccionar texto y controles; el ajuste del lienzo no prueba reflujo. [WAI Easy Checks](https://www.w3.org/WAI/test-evaluate/preliminary/). |
| Revisión visual final y ensayo 2/3 minutos | Manual | Pendientes del autor humano; registrar entorno y fecha cuando se ejecuten. |
| Estados de formulario, disabled, pressed, expanded, selected, error y relaciones ARIA | No aplicable | El contenido no implementa controles con esos estados. Usa HTML nativo, sin ARIA añadido. |
| Patrones compuestos, foco gestionado y sus teclas APG | No aplicable | No hay widgets nuevos; la navegación del reproductor requiere la revisión manual anterior. |
| Demos, contraejemplos con barreras y sus stories/tests | No aplicable | #2 solo presenta el curso; no se inventan ejemplos. |

Los tests viven en [slides.test.tsx](./slides.test.tsx) y cubren el contenido de
ambas lecciones, sin duplicar la suite por slide. La revisión de documentación
contrasta las afirmaciones y el alcance con las fuentes; la revisión de tests
contrasta por separado lo que sus expectativas realmente pueden demostrar.
Ninguna lectura real de tecnología de asistencia está acreditada por JSDOM.

## Validación de entrega

El 8 de octubre de 2026, en macOS con Node.js 25.2.1 y pnpm 10.26.1:

- `pnpm test`: 8 pruebas superadas (siete slides y enlace a materiales).
- `pnpm lint`: correcto.
- `pnpm build`: correcto.
- `pnpm build-storybook`: correcto; aviso esperado de ausencia de stories.
- Navegador integrado de Codex a 1280 × 720: portada y las siete slides
  recorridas por sus hashes; medidas DOM de títulos, párrafos, listas y enlaces
  dentro del lienzo, sin recortes ni solapamientos entre bloques. Sin capturas.

Las superficies locales quedan disponibles mediante los comandos y rutas de esta
página. La comprobación geométrica del navegador no acredita contraste, reflujo,
lectura con AT ni calidad visual humana. CI utiliza Node 22 según `.nvmrc`.
La revisión visual final del autor humano permanece pendiente aunque pasen builds,
tests y la comprobación técnica del lienzo.

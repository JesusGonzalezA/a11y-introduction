---
name: create-lesson
description: Use when the user asks to create, develop, start, or add a course lesson in src/lessons. Creating a lesson means delivering the complete vertical slice ready to teach; only an explicit request for a scaffold, skeleton, or empty lesson produces structure without content.
---

# Create a lesson

Entrega una lección lista para impartir y revisar: documentación, guion, slides,
superficies ejecutables, stories, tests e integración en el curso. La lección incluida en `02-ejemplo` muestra la estructura técnica mínima;
la profundidad pedagógica se define por los objetivos y la duración del curso.

## Flujo

1. **Localiza la especificación.** Aplica `repository-workflow`, revisa el README del
   módulo, la issue de la lección y las lecciones anteriores de las que depende.
   Confirma el identificador, el título y la ruta numerada en kebab-case, sin tildes
   ni colisiones.
   **Completado cuando:** issue, alcance, dependencias, ruta y criterios de aceptación
   describen la misma lección.

2. **Extrae el contrato accesible.** Para cada control o patrón, aplica
   `accessible-components` y `aria-patterns`. Consulta la página concreta de W3C,
   WAI-ARIA APG, HTML o HTML-AAM que gobierna su semántica y la página concreta de
   MagentaA11y que aporta los criterios de aceptación. Si no existe un patrón APG,
   conserva el control HTML nativo y usa su especificación y mapeo de accesibilidad.
   Clasifica cada criterio como automatizado, manual o no aplicable y enlaza cada
   prueba con la conducta que demuestra.
   **Completado cuando:** toda afirmación normativa y todo test de accesibilidad se
   puede contrastar con una fuente identificada y no quedan criterios sin clasificar.

3. **Diseña la secuencia pedagógica.** Aplica `course-structure`: define primero la
   tarea de la persona y lo que se aplaza, ordena el descubrimiento desde la necesidad
   hasta el nombre técnico y fija juntos slides y presentador. Respeta el límite de
   duración indicado por la issue.
   **Completado cuando:** cada slide tiene un apartado equivalente en el guion, cada
   demostración tiene una razón dentro del recorrido y el alcance aplazado es explícito.

4. **Implementa la vertical slice.** Crea dentro de la lección:

   - `README.md` con objetivo, ejecución, componentes o ejemplos, accesibilidad,
     cobertura automatizada, matriz manual y fuentes;
   - `presenter.md`, listo para leer durante la grabación;
   - `slides.tsx`, fiel al guion y con enlaces a las stories que se demuestran;
   - componentes y ejemplos ejecutables co-localizados con sus stories y tests.

   Actualiza el mapa del módulo y `src/lessons/lessonRegistry.ts` una sola vez y en
   orden. Reutiliza las convenciones visuales y técnicas existentes.
   **Completado cuando:** la lección puede leerse, presentarse, ejecutarse y probarse
   sin depender de archivos de otra ubicación salvo interfaces compartidas explícitas.

5. **Audita tests y documentación contra las fuentes.** Después de implementar, aplica
   el modo revisión de `accessible-components` como una pasada separada: vuelve a
   extraer el contrato desde MagentaA11y, W3C, HTML/HTML-AAM y APG, y contrástalo con
   `aria-patterns`. Revisa de forma independiente las expectativas ejecutables y las
   afirmaciones documentadas; no uses la intención de la implementación como evidencia.
   **Completado cuando:** cada criterio tiene fuente, clasificación y evidencia o
   justificación; ningún test exige un rol inexistente y la documentación no presenta
   como automatizado lo que requiere navegador o tecnología de asistencia real.

6. **Valida y prepara la revisión.** Ejecuta `pnpm test`, `pnpm lint`, `pnpm build` y
   `pnpm build-storybook`. Aplica `storybook-pr-visuals` para comprobar que todas las
   stories y slides tienen una ruta local y deja la revisión visual manual claramente
   marcada. Revisa el diff completo antes de preparar la PR.
   **Completado cuando:** pasan las cuatro validaciones, todas las superficies se pueden
   revisar localmente y la PR cumple `repository-workflow`.

7. **Aprende del feedback real.** Cuando la revisión revele una convención reutilizable,
   aplica `self-learning` y actualiza la fuente de verdad más pequeña que gobierne esa
   decisión. Conserva las correcciones puntuales solo en la lección o la issue.
   **Completado cuando:** el feedback queda resuelto en el producto y, si es repetible,
   también en una única instrucción persistente y verificable.

## Decisiones de alcance

- “Crear” y “desarrollar” significan entregar la vertical slice completa.
- “Scaffold”, “esqueleto” o “lección vacía” significan crear solo la estructura
  solicitada; en ese caso no se registra contenido que aún no puede presentarse.
- Una lección completa no se declara terminada con archivos vacíos, ejemplos sin
  stories, tests sin trazabilidad o validaciones manuales implícitamente omitidas.

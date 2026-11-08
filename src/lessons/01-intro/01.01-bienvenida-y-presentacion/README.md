# 1.1 Bienvenida y presentación

**Duración: 2 minutos.** Presentar al docente, la audiencia y el propósito del curso,
y reconocer la tarea que conectará sus lecciones: conocer una actividad e
inscribirse. Solo se utiliza el nombre del docente ya presente en `src/course.ts`;
no se atribuyen biografía ni credenciales adicionales.

## Recorrido

1. **Bienvenida y presentación**: HTML y CSS básicos como punto de partida;
   reconocer barreras, aplicar soluciones y comenzar a revisar.
2. **La accesibilidad se construye al desarrollar**: relacionar estructura,
   instrucciones y controles con percibir, comprender, navegar e interactuar.
3. **Conocer una actividad e inscribirse**: reconocer el contenido, decidir,
   introducir los datos, enviar y reconocer el resultado.

El detalle del navegador, HTML, controles y herramientas se enseña después. Aquí
se presenta la necesidad de la persona antes de introducir soluciones técnicas.

## Material y ejecución

- [Slides](./slides.tsx): posiciones globales 1–3; entrada `http://localhost:5173/#/1`.
- [Guion](./presenter.md): tres apartados, uno por slide, listo para narrar.
- Componentes, demos y stories: no aplicables a esta introducción documental.

Desde la raíz, con Node.js 22.12+ y pnpm 10.26.1, ejecuta
`pnpm install --frozen-lockfile` y `pnpm dev`. El contenido se entiende sin abrir los ejemplos.
Presupuesto oral: 35/40/45 segundos, incluidas transiciones. Ensayo real pendiente.

## Accesibilidad y pruebas

Las slides usan encabezados `h2`, párrafos, listas y elementos `li` nativos.
No tienen controles propios, estados ARIA ni gestión de foco. La
[matriz del módulo](../README.md#criterios-y-evidencia) clasifica criterios,
fuentes, pruebas y comprobaciones manuales. Se hereda completa para estas tres
slides; el criterio de enlace no aplica a esta lección porque no tiene enlaces.

[Tests compartidos](../slides.test.tsx): semántica por rol/nivel y axe por slide.
Ejecutar `pnpm test`, `pnpm lint` y `pnpm build` desde la
raíz. El DOM no acredita anuncios reales, contraste, zoom ni navegación del deck.
La lectura con tecnología de asistencia, los gestos móviles, la revisión visual
humana y el ensayo de duración permanecen pendientes.

## Fuentes

[Investigación previa y contrato del módulo](../../../../docs/research/01-introduccion.md),
consultados el 8 de octubre de 2026. Base conceptual:
[Introducción a la accesibilidad de WAI](https://www.w3.org/WAI/fundamentals/accessibility-intro/).
La tarea y el alcance proceden de [#2](https://github.com/JesusGonzalezA/a11y-introduction/issues/2).

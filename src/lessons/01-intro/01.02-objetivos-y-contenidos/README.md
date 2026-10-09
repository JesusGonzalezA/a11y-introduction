# 1.2 Objetivos y contenidos

**Duración: 3 minutos.** Identificar los cuatro resultados del aprendizaje,
ubicarlos en el programa de 5 módulos y 11 lecciones, y saber cómo utilizar las
slides, los ejemplos y los materiales después del curso.

## Recorrido

1. **Objetivos y contenidos**: estructurar, identificar elementos, facilitar la
   interacción y comenzar a revisar conociendo los límites de las herramientas.
2. **El recorrido del curso**: cinco módulos que suman 60 minutos, incluidas demos.
3. **Aprender desde una tarea**: necesidad → concepto → implementación → demo →
   comprobación; empezar por HTML nativo y conservar etapas en Storybook.
4. **Consultar los materiales y seguir practicando**: README, slides, guion y
   ejemplos; ejercicios adicionales y alcance de esta primera base.

El [mapa completo](../../../../README.md#programa) distingue lo desarrollado de lo
planificado. No se afirma disponibilidad de otros cursos ni se ofrecen demos de
módulos pendientes. Las herramientas se concentran en el módulo 5.

## Material y ejecución

- [Slides](./slides.tsx): posiciones globales 4–7; entrada `http://localhost:5173/#/4`.
- [Guion](./presenter.md): cuatro apartados equivalentes a las cuatro slides.
- Componentes, demos y stories: no aplicables a esta introducción documental.

Desde la raíz, con Node.js 22.12+ y pnpm 10.26.1, ejecuta
`pnpm install --frozen-lockfile` y `pnpm dev`. `pnpm storybook` conserva la
infraestructura en el puerto 6006, sin stories todavía. No se abre durante esta
lección. Presupuesto oral: 45/55/40/40 segundos. Ensayo real pendiente.

El enlace de la última slide abre el README del repositorio privado con acceso
autorizado. Una copia local permite consultar los mismos documentos.

## Accesibilidad y pruebas

Se usan `h2`, `ul`/`ol`, `li` y un enlace `a[href]` con texto visible descriptivo.
No se añaden roles redundantes, estados ARIA ni gestión de foco. La
[matriz del módulo](../README.md#criterios-y-evidencia) se aplica a estas cuatro
slides y clasifica todos los criterios, incluidos los del enlace.

[Tests compartidos](../slides.test.tsx): estructura semántica, axe por slide y foco
DOM con Tab en el enlace. Ejecutar `pnpm test`, `pnpm lint`, `pnpm build` y
`pnpm build-storybook`. Navegar realmente con Enter, identificar el foco, leer con
tecnologías de asistencia, usar gestos móviles, medir contraste o ampliar la
presentación requiere las comprobaciones manuales pendientes de la matriz.
También quedan pendientes la revisión visual final del autor y el ensayo oral.

## Fuentes

[Investigación previa y contrato del módulo](../../../../docs/research/01-introduccion.md),
consultados el 8 de octubre de 2026. [WAI, evaluación](https://www.w3.org/WAI/fundamentals/accessibility-intro/#evaluating)
fundamenta el límite de las herramientas; [APG Link](https://www.w3.org/WAI/ARIA/apg/patterns/link/)
y [MagentaA11y Link](https://www.magentaa11y.com/web-criteria/component/link)
fundamentan el enlace nativo. Objetivos, programa y duración proceden de
[#1](https://github.com/JesusGonzalezA/a11y-introduction/issues/1) y
[#2](https://github.com/JesusGonzalezA/a11y-introduction/issues/2).

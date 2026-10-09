# Introducción al desarrollo web accesible

Curso de **weaaare** para personas con HTML y CSS básicos, sin conocimientos
previos de accesibilidad. Docente: **Jesús González Álvarez**.

En **60 minutos**, incluidas las demostraciones guiadas, aprenderás a reconocer
barreras frecuentes, aplicar soluciones básicas y comenzar a revisar una
interfaz. La tarea que conecta las lecciones es **conocer una actividad e
inscribirse**: una página con título, descripción, imagen, información práctica
y un formulario breve.

## Programa

Fuente de verdad: [especificación #1](https://github.com/JesusGonzalezA/a11y-introduction/issues/1).
El programa completo contiene **5 módulos y 11 lecciones**. En esta entrega está
desarrollados los módulos 1 y 2; los módulos 3–5 están planificados y todavía no se
incluyen en la presentación ni en Storybook.

| Módulo | Lecciones | Duración |
| --- | --- | --- |
| [1. Introducción](./src/lessons/01-intro/README.md) | 1.1 Bienvenida y presentación (2 min); 1.2 Objetivos y contenidos (3 min) | 5 min |
| [2. Entender la accesibilidad](./src/lessons/02-entender-la-accesibilidad/README.md) | 2.1 Personas, formas de interacción y barreras (5 min); 2.2 Cómo interpreta el navegador nuestra interfaz (5 min) | 10 min |
| 3. Dar significado al contenido | 3.1 Estructura de página y orden de lectura (9 min); 3.2 Imágenes, enlaces y controles comprensibles (9 min) | 18 min |
| 4. Permitir la interacción y la percepción | 4.1 Navegación por teclado y foco visible (9 min); 4.2 Contraste, color y ampliación del contenido (8 min) | 17 min |
| 5. Primeras comprobaciones de accesibilidad y próximos pasos | 5.1 Inspeccionar el contenido con bookmarklets (4 min); 5.2 Detectar problemas con Accessibility Insights (4 min); 5.3 Cómo continuar aprendiendo (2 min) | 10 min |

## Resultados y dinámica

- Estructurar contenido para orientarse y encontrar información.
- Identificar imágenes, enlaces, botones y campos con información comprensible.
- Facilitar la interacción con teclado y la percepción del contenido.
- Comenzar a revisar una interfaz y reconocer los límites de las herramientas.

Las lecciones prácticas parten de una necesidad, explican el concepto y la
implementación, muestran la demo y comprueban el resultado. Las slides se
entienden por sí mismas; las stories conservan las etapas implementadas del ejemplo.
Las herramientas se concentran en el módulo 5. Los ejercicios autónomos son
material adicional a los 60 minutos. ARIA avanzado, auditorías exhaustivas y
automatización profunda quedan fuera de esta introducción.

## Instalar y ejecutar

Requisitos: Node.js 22.12 o posterior y pnpm 10.26.1. `.nvmrc` selecciona Node 22.
El repositorio es privado: utiliza una copia local o acceso autorizado a GitHub.
Desde la raíz:

```bash
pnpm install --frozen-lockfile
pnpm dev        # Slides: http://localhost:5173
pnpm storybook  # Storybook: http://localhost:6006 (otra terminal)
```

Usa las flechas para recorrer la presentación. La portada precede las slides
numeradas por lección; el hash permite volver a una posición. El
[mapa del módulo 1](./src/lessons/01-intro/README.md) identifica todas sus rutas.
El [mapa del módulo 2](./src/lessons/02-entender-la-accesibilidad/README.md) enlaza
las demos de teclado y semántica del botón. Las lecciones introductorias no
necesitan demos.

## Consultar y mantener los materiales

Cada lección reúne `README.md` (objetivo, ejecución, accesibilidad, pruebas y
fuentes), `presenter.md` (narración) y `slides.tsx` (explicación visual). Las
lecciones prácticas reúnen ejemplos, stories y tests co-localizados.

- [Bienvenida y presentación](./src/lessons/01-intro/01.01-bienvenida-y-presentacion/README.md).
- [Objetivos y contenidos](./src/lessons/01-intro/01.02-objetivos-y-contenidos/README.md).
- [Entender la accesibilidad](./src/lessons/02-entender-la-accesibilidad/README.md).
- [Investigación y fuentes del módulo 2](./docs/research/02-entender-la-accesibilidad.md).
- [Investigación y fuentes del módulo 1](./docs/research/01-introduccion.md).

`src/course.ts` contiene la identidad del curso; `src/lessons/lessonRegistry.ts`
ordena la presentación continua. `src/slides/CourseSlides.tsx` compone las slides.
La infraestructura usa React, TypeScript, Vite, Reveal.js, Storybook, Vitest,
Testing Library, user-event, axe-core y Biome. Los estilos usan Geist y BEM.
Las stories siguen `Módulo N: Nombre/Lección N.M: Nombre/Componentes|Ejemplos/Nombre`.
`VITE_STORYBOOK_URL` permite configurar su destino al publicarlas.

## Validar

```bash
pnpm test
pnpm lint
pnpm build
pnpm build-storybook
```

`pnpm check` reúne los cuatro comandos que ejecuta CI. `pnpm test:watch` acompaña
el desarrollo y `pnpm format` aplica el formato. Los builds generan `dist/` y
`storybook-static/`; `pnpm preview` sirve la presentación compilada.

Los tests de introducción comprueban semántica DOM, foco simulado del enlace y
reglas detectables por axe en las siete slides. No validan el reproductor completo,
lectores de pantalla, contraste, zoom ni navegación real. Consulta la
[matriz del módulo](./src/lessons/01-intro/README.md#criterios-y-evidencia).
Los tests del módulo 2 añaden recorrido de teclado, activación, semántica y estados
de las demos; su [matriz y auditoría](./src/lessons/02-entender-la-accesibilidad/audit.md)
separan evidencia automática de comprobaciones manuales.
La revisión visual final del autor y el ensayo de duración permanecen pendientes.

Las convenciones de autoría están enlazadas desde [AGENTS.md](./AGENTS.md).
Los cambios siguen issue → rama → PR hacia `develop`, con squash merge cuando
se autorice la fusión. La skill `aria-patterns` procede de
[weaaare/a11y-agents-kit](https://github.com/weaaare/a11y-agents-kit) (MIT);
sus cifras históricas de soporte requieren contraste actual antes de enseñarlas.

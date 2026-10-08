# a11y-course

Plantilla privada de **weaaare** para crear un repositorio por curso de
accesibilidad. Incluye diapositivas, guiones, ejemplos en Storybook y skills de
autoría. El contenido inicial es una base para personalizar, no un curso terminado.

## Crear un curso

En GitHub, selecciona **Use this template → Create a new repository**, elige un
nombre para el curso y mantenlo privado. Copia únicamente la rama por defecto.
También puedes utilizar GitHub CLI:

```bash
gh repo create nombre-del-curso --private --template JesusGonzalezA/a11y-course --clone
cd nombre-del-curso
pnpm install
```

Requisitos: Node.js 22.12 o posterior y pnpm 10.26.1. `.nvmrc` selecciona Node 22.
GitHub CLI solo es necesario para gestionar el repositorio y sus issues.

1. Cambia el nombre y la descripción en `package.json` y ejecuta `pnpm install`.
2. Define título, subtítulo, autor, duración, audiencia y objetivos en
   [`src/course.ts`](./src/course.ts). La portada y el título del navegador usan
   estos datos. Configura `storybookUrl` si publicas las demos; para cambiarlo
   localmente utiliza `VITE_STORYBOOK_URL` en un archivo `.env.local`.
3. Adapta las dos lecciones del [módulo 1](./src/lessons/01-intro/README.md).
4. Sustituye el [módulo de ejemplo](./src/lessons/02-ejemplo/README.md) por los
   módulos del temario validado, actualizando `src/lessons/lessonRegistry.ts`.
5. Actualiza este README con el mapa, objetivos y requisitos del nuevo curso.

La plantilla utiliza `develop` como rama por defecto. Si GitHub genera el nuevo
repositorio con `main`, crea y publica `develop` desde esa rama antes de iniciar
las lecciones, y selecciónala como rama por defecto. La CI cubre ambas ramas.
Los ajustes de GitHub no se heredan del template: configura squash merge en el
nuevo repositorio. Las skills describen el flujo issue → rama → PR a `develop`.

## Ejecutar

```bash
pnpm dev        # Slides: http://localhost:5173
pnpm storybook  # Ejemplos: http://localhost:6006 (otra terminal)
```

En la presentación, usa las flechas para avanzar. El número de lección y el hash
de la URL permiten localizar cada parte. Las slides de demostración enlazan las
stories que indica el guion. Antes de grabar, convierte los guiones introductorios
de plantilla en una narración propia y comprueba la duración real.

## Estructura

```text
.agents/skills/                Skills locales incluidas
.storybook/                   Storybook y panel de accesibilidad
src/
  course.ts                   Datos generales del curso
  lessons/
    lessonRegistry.ts         Orden de la presentación continua
    01-intro/
      README.md               Mapa del módulo
      01.01-bienvenida-y-presentacion/
      01.02-objetivos-y-contenidos/
    02-ejemplo/
      README.md
      02.01-activar-una-accion/
        README.md             Objetivo, accesibilidad, pruebas y fuentes
        presenter.md          Guion organizado por slide
        slides.tsx            Diapositivas de la lección
        examples/Button/
          Button.tsx
          Button.css
          Button.stories.tsx
          Button.test.tsx
  slides/CourseSlides.tsx      Composición de la presentación
  test/setup.ts               Testing Library y jest-axe
```

Cada lección reúne su material en una carpeta. Las stories siguen la jerarquía
`Módulo N: Nombre/Lección N.M: Nombre/Componentes|Ejemplos/Nombre` y se ordenan
numéricamente. Una lección puramente introductoria no necesita un componente.

## Base técnica

- React, TypeScript y Vite para el proyecto.
- Reveal.js y su integración React para las diapositivas.
- Storybook con Controls, Actions y Accessibility para explorar los ejemplos.
- Vitest, Testing Library, user-event y jest-axe/axe-core para las pruebas.
- Biome para formato y lint; Geist y CSS con BEM para la base visual.

Un único paquete; los ejemplos iniciales funcionan sin servidor de datos.

## Validar

```bash
pnpm check
```

Ejecuta `pnpm test`, `pnpm lint`, `pnpm build` y `pnpm build-storybook`, los mismos
cuatro controles que GitHub Actions. Puedes ejecutarlos por separado.
`pnpm test:watch` acompaña el desarrollo y `pnpm format` aplica el formato.

`pnpm build` produce `dist/`; `pnpm build-storybook` produce `storybook-static/`.
`pnpm preview` permite revisar la presentación compilada. Publicar estos
artefactos y configurar sus URLs se decide en cada curso.

Las pruebas automáticas del ejemplo cubren semántica DOM, teclado, deshabilitado
y reglas de axe. La [matriz de la lección](./src/lessons/02-ejemplo/02.01-activar-una-accion/README.md)
identifica las comprobaciones visuales, móviles y con lector de pantalla que
requieren revisión manual. El panel Accessibility no sustituye esa revisión.

## Skills incluidas

Las skills viven en `.agents/skills/`, con todas sus referencias locales, y se
descubren desde el repositorio. [AGENTS.md](./AGENTS.md) enlaza cuándo aplicar cada una.

| Skill | Uso |
| --- | --- |
| `course-structure` | Organizar módulos, lecciones, slides y ejemplos. |
| `create-lesson` | Desarrollar una lección completa a partir de su especificación. |
| `accessible-components` | Implementar y revisar componentes con fuentes y pruebas. |
| `aria-patterns` | Consultar patrones y límites de tecnologías de apoyo. |
| `repository-workflow` | Gestionar issues, ramas, validaciones y PRs. |
| `storybook-pr-visuals` | Preparar las superficies para revisión manual. |
| `self-learning` | Incorporar convenciones reutilizables a partir del feedback. |

`aria-patterns` procede de [weaaare/a11y-agents-kit](https://github.com/weaaare/a11y-agents-kit)
(licencia MIT); esta copia adapta su descripción para la validación de skills.
Las skills se mantienen dentro del repositorio, sin un instalador externo.

Las cifras de soporte incluidas en referencias de ARIA son evidencia histórica:
contrástalas con las fuentes y versiones actuales antes de enseñarlas como vigentes.

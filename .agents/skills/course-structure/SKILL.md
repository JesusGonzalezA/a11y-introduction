---
name: course-structure
description: Use when creating, moving, or reviewing course modules, lessons, slides, presenter notes, Markdown content, example pages, or tests in this repository. Apply the vertical-slice lesson structure and keep the continuous slide registry ordered.
---

# Course structure

Organiza cada lección como un **vertical slice**: todo lo necesario para explicar,
presentar, ejecutar y verificar una unidad vive dentro de su carpeta.

## Estructura canónica

```text
src/lessons/
├── 01-intro/
│   └── 01.01-nombre-de-la-leccion/
│       ├── README.md
│       ├── presenter.md
│       ├── slides.tsx
│       └── examples/
│           └── ExampleName/
│               ├── ExampleName.tsx
│               ├── ExampleName.example.ts
│               ├── example-name.css
│               └── ExampleName.test.tsx
└── 02-nombre-del-modulo/
```

El módulo 1 conserva las lecciones «Bienvenida y presentación» y «Objetivos y
contenidos» en todos los cursos. Su contenido y duración se adaptan al curso.
Los módulos siguientes se definen según el temario validado por el autor en GitHub.

Los módulos contienen un `README.md` con el mapa del módulo. Las lecciones usan
numeración `02.01`, `02.02`, etc., seguida de un nombre en kebab-case.

## Flujo de autoría

Desarrolla una lección en este orden para que el código siga a la explicación y
no al revés:

1. **Define la tarea de la persona.** Expresa en lenguaje cotidiano qué intenta
   entender o completar, qué información necesita reconocer, dónde actúa y cómo
   sabe que ha terminado. Separa los conceptos imprescindibles de los que se
   enseñarán más adelante.
   **Completado cuando:** el objetivo puede explicarse sin depender todavía de
   nombres de componentes, atributos ARIA ni tests.
2. **Traza el descubrimiento.** Ordena la narración como
   necesidad de la persona → control o relación que la resuelve → nombre técnico.
   Introduce cada término después del problema que permite resolver y conserva el
   orden real de la tarea, incluido el recorrido de teclado.
   **Completado cuando:** ningún concepto técnico aparece antes de tener una razón
   comprensible para la persona.
3. **Fija la columna vertebral.** Define juntos el título y la idea visible de cada
   slide, el desarrollo oral correspondiente y, si procede, la página de ejemplo que se abrirá.
   El presentador amplía lo que la slide plantea; no mantiene una segunda narrativa
   ni introduce afirmaciones ausentes de la presentación.
   **Completado cuando:** cada slide tiene un único apartado equivalente en el guion
   y ambos cuentan la misma lección en el mismo orden. Si una slide se elimina o se
   reordena, su apartado se elimina o se renumera en el mismo cambio.
4. **Diseña las superficies ejecutables.** Elige para cada barrera la página real
   donde aparecería con más naturalidad y define qué arreglos la corrigen. Implementa
   la página, su definición y sus tests después de que ese límite sea explícito.
   **Completado cuando:** cada nombre describe un componente o un escenario, pero no
   mezcla ambos papeles.
5. **Valida la lección completa.** Comprueba contenido, slides, guion, ejemplos,
   tests y revisión local como una unidad. Ajusta primero la columna pedagógica cuando
   una revisión revele que la explicación no se entiende.
   **Completado cuando:** todos los artefactos enseñan el mismo alcance y distinguen
   claramente lo automatizado, lo manual y lo aplazado.

## Contrato de una lección

Toda lección práctica cuenta la misma historia, centrada en una persona usuaria:

1. **Lección:** título completo de la lección y qué se va a aprender.
2. **Situación:** una persona de `src/personas.ts` (Andrés, Elena, Lucía, Manuel,
   Ana), cómo usa la web y qué quiere hacer en la página del ejemplo.
3. **Error común:** qué falla en el código y qué le pasa a esa persona.
4. **Solución:** el código corregido, por qué funciona y los enlaces a la página
   de ejemplo con y sin arreglo.

Cuando una lección tiene varias barreras, repite pares error → solución. Puede
añadir slides de tipo «Lección» con conceptos previos y cerrar con un «Resumen».

- `slides.tsx`: se entiende sin el vídeo ni otro material. Usa las piezas de
  `src/slides/parts.tsx`: `SlideTitle` (tipo `leccion`, `situacion`, `error`,
  `solucion`, `comprobar` o `resumen`), `PersonaCard`, `Code` (tono `error`,
  `solucion` o `neutral`) y `ExampleLinks`. La primera slide es de tipo
  `leccion` y su título es el nombre completo de la lección. Cada título nombra
  el concepto o el error concreto en lenguaje cotidiano. El texto de error dice
  «Qué le pasa a <persona>». El código reproduce el antes y el después de la
  definición del ejemplo. Los enlaces se rotulan por la interacción que permiten
  revisar. **Nunca muestres tiempos en las slides.**
- `presenter.md`: guía para presentar, no texto para leer. Por cada slide, un
  apartado `## N. Título` con palabras clave en viñetas, frases importantes como
  cita (`> «…»`) y acotaciones `[Ejemplo: …]` cuando cambia la pantalla. La
  cabecera puede indicar la duración aproximada y la demo.
- `README.md`: resumen esquemático con estas secciones: Objetivo, Situación,
  Errores comunes → solución (tabla error / qué le pasa / solución), Ejemplo
  (página, pasos de la demo, código), Conceptos clave, Pruebas (automatizadas y
  manuales pendientes) y Fuentes. Sin prosa larga ni duplicar las slides.
- `examples/`: páginas de ejemplo de la lección.
- `*.example.ts`: definición de la página (slug, lección, título, qué probar y lista
  de arreglos con dónde, por qué y código antes/después). Se registra una vez en
  `src/examples/exampleRegistry.ts`, en el orden del curso.
- `*.test.tsx`: comportamiento, semántica accesible y teclado de la página con y sin
  arreglo.

Las lecciones de introducción y cierre (1.1, 1.2, 5.3) no tienen persona ni
ejemplo: usan slides `leccion` y `resumen`.

## Páginas de ejemplo

Cada ejemplo es una página simple y creíble de un sitio distinto (tienda, receta,
noticia…), elegido porque la barrera aparece ahí con naturalidad. La aplicación
la sirve en `/ejemplos/<slug>`; `?arreglo=1` la abre con el arreglo aplicado.

- La página recibe `fixed: boolean` y muestra por defecto la barrera. No incluye
  rótulos didácticos: la herramienta flotante del curso explica el cambio.
- Marca con `data-fix="<id>"` cada elemento que cambia, en ambos estados, para que
  «Ver cambios» lo resalte. Cada `id` corresponde a un arreglo de la definición.
- Cada arreglo dice dónde está, por qué la versión sin arreglo es una barrera y
  muestra el código antes y después con los mismos detalles que la página.
- Las barreras se acotan al bloque BEM de la página; nunca afectan a la
  herramienta flotante ni capturan el teclado de forma real.
- La herramienta flotante no añade encabezados ni regiones, para no alterar lo que
  revelan lectores, bookmarklets o Accessibility Insights.

## Slides continuas y superficies del servidor

`src/lessons/lessonRegistry.ts` (`courseModules`) es la única fuente del orden de
módulos, lecciones y slides. Cada lección exporta `slides` (elementos React con
claves únicas) desde su `slides.tsx`. `CourseSlides` añade la portada, una slide
separadora por módulo (`#/modulo-N`), el identificador de la primera slide de cada
lección (`#/leccion-N-M`) y la etiqueta «Lección N.M · Título»; no contiene
contenido de lecciones. Una lección no importa `lessonRegistry` (dependencia
circular).

El servidor ofrece cuatro superficies (rutas en `src/routes.ts`):

- `/`: índice; por módulo y lección enlaza diapositivas, ejemplos y contenido.
- `/diapositivas/`: la presentación.
- `/ejemplos/`: páginas de ejemplo, agrupadas por módulo (`#modulo-N`).
- `/contenido/`: Markdown del repositorio (`modulo-N`, `N.M`, `N.M/presentador`).

`src/lessons/slides.test.tsx` valida todas las slides: tipo y título, axe,
situación → error → solución en lecciones con ejemplo, enlaces a cada ejemplo y
ausencia de tiempos.

## Reglas de colocación

1. Coloca una página de ejemplo, su definición y sus tests dentro de la lección que la enseña.
2. Reutiliza un módulo desde otra lección solo cuando sea realmente compartido; entonces
   muévelo a un módulo común explícito y documenta su interfaz.
3. Registra cada página de ejemplo una sola vez en `src/examples/exampleRegistry.ts`.
4. No dupliques el contenido completo en Markdown y slides: el primero desarrolla, las
   segundas sintetizan.
5. Usa nombres de carpetas estables, numerados y sin espacios ni tildes.
6. Nombra los componentes por el concepto o elemento que enseñan. Usa `Form`,
   `TextField`, `TextArea` o `SubmitButton`, no prefijos de cualidad como
   `Accessible` o `A11y`. Separa las composiciones completas como ejemplos con
   nombre de escenario, por ejemplo `BasicForm`, y documéntalas fuera de la
   lista de componentes reutilizables.
7. Escribe los estilos de los ejemplos con BEM: cada componente define un
   bloque y expresa sus partes y variantes mediante elementos y modificadores.
8. Mantén una correspondencia uno a uno entre los apartados de `presenter.md` y
   las slides. Cuando una acotación abra un ejemplo, incluye en esa misma slide
   un enlace directo con `exampleUrl(slug, fixed)` y nombre descriptivo.
9. Da a cada página de ejemplo una identidad propia y creíble para su sitio
   (nombre, acento pastel, contenido) dibujada con el lenguaje visual de weAAAre
   que define la skill `weaaare-brand`, con un foco inequívoco salvo cuando el foco
   sea la barrera. La herramienta flotante mantiene un aspecto propio de devtools,
   distinto de la página.
10. Representa las affordances comunes como aparecerían en producto. Por ejemplo,
    usa un SVG decorativo en un botón de icono y conserva el nombre y el estado
    accesibles; evita indicadores pedagógicos ajenos a una interfaz real.
11. Da a cada página un título de documento como lo tendría la web real y usa el
    número y el título de la lección del mapa del curso en su definición.

## Checklist de finalización

- [ ] La lección está bajo el módulo numerado correcto.
- [ ] El README del módulo y el README de la lección describen la ubicación actual.
- [ ] El README permite instalar, ejecutar y reconocer los componentes y sus
      consideraciones de accesibilidad sin duplicar el guion.
- [ ] La tarea de la persona, el orden de descubrimiento y lo que queda para
      lecciones posteriores están definidos antes de los detalles técnicos.
- [ ] `presenter.md` y `slides.tsx` existen cuando la lección está preparada.
- [ ] Las slides siguen lección → situación → error común → solución, con una
      persona de `src/personas.ts`, y no muestran tiempos.
- [ ] `presenter.md` contiene palabras clave y frases importantes por slide, no
      narración para leer.
- [ ] Cada slide usa `SlideTitle`, tiene fondo blanco y contenido alineado a la
      izquierda, y tiene un apartado equivalente en `presenter.md`.
- [ ] Los títulos y el texto principal se entienden sin conocer el ejemplo; cualquier
      detalle del escenario queda dentro de código de apoyo y los enlaces nombran el
      concepto o la interacción que permiten revisar.
- [ ] El guion desarrolla únicamente conceptos presentes en las slides y mantiene
      su mismo orden pedagógico.
- [ ] Las slides retiradas o reordenadas tienen el mismo cambio reflejado en el
      guion del presentador, incluidos sus números y acotaciones.
- [ ] Cada salto a un ejemplo indicado en el guion tiene un enlace directo a la
      página en la slide correspondiente.
- [ ] Cada ejemplo tiene página, definición y test co-localizados, y está en el
      registro de ejemplos.
- [ ] La lección está incluida una sola vez y en orden en `lessonRegistry.ts` y
      aparece en el índice `/` con sus diapositivas, ejemplos y contenido.
- [ ] Las páginas de ejemplo y slides afectadas quedan disponibles para la
      revisión manual del autor, y la PR indica si esa revisión está pendiente
      o completada.
- [ ] `pnpm test`, `pnpm lint` y `pnpm build` pasan.

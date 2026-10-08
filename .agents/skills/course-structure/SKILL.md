---
name: course-structure
description: Use when creating, moving, or reviewing course modules, lessons, slides, presenter notes, Markdown content, Storybook examples, or tests in this repository. Apply the vertical-slice lesson structure and keep the continuous slide registry ordered.
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
│               ├── ExampleName.stories.tsx
│               └── ExampleName.test.tsx
└── 02-nombre-del-modulo/
```

El módulo 1 conserva las lecciones «Bienvenida y presentación» y «Objetivos y
contenidos» en todos los cursos. Su contenido y duración se adaptan al curso.
Los módulos siguientes se definen según el temario validado por el autor.
`02-ejemplo` solo demuestra la infraestructura; se sustituye al crear un curso.

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
   slide, el desarrollo oral correspondiente y, si procede, la story que se abrirá.
   El presentador amplía lo que la slide plantea; no mantiene una segunda narrativa
   ni introduce afirmaciones ausentes de la presentación.
   **Completado cuando:** cada slide tiene un único apartado equivalente en el guion
   y ambos cuentan la misma lección en el mismo orden. Si una slide se elimina o se
   reordena, su apartado se elimina o se renumera en el mismo cambio.
4. **Diseña las superficies ejecutables.** Separa los componentes que enseñan una
   pieza reutilizable de los ejemplos que componen el recorrido completo. Implementa
   stories y tests después de que ese límite sea explícito.
   **Completado cuando:** cada nombre describe un componente o un escenario, pero no
   mezcla ambos papeles.
5. **Valida la lección completa.** Comprueba contenido, slides, guion, ejemplos,
   tests y revisión local como una unidad. Ajusta primero la columna pedagógica cuando
   una revisión revele que la explicación no se entiende.
   **Completado cuando:** todos los artefactos enseñan el mismo alcance y distinguen
   claramente lo automatizado, lo manual y lo aplazado.

## Contrato de una lección

- `README.md`: guía mínima de la lección: objetivo, instalación y ejecución,
  componentes, consideraciones de accesibilidad, pruebas y referencias.
- `presenter.md`: narración completa, organizada por slide y lista para leer
  durante una grabación. Usa acotaciones breves como
  `[Storybook: mostrar …]` solo cuando haya que cambiar lo que aparece en
  pantalla.
- `slides.tsx`: columna vertebral visual del guion. Cada slide muestra el número
  de la lección en formato humano (`2.1`, `2.2`, etc.), seguido de un título arriba,
  fondo blanco y contenido alineado a la izquierda. Debe representar fielmente lo
  que desarrolla el presentador sin copiar toda la narración. Presenta primero la
  tarea de la persona en lenguaje cotidiano y descubre los controles técnicos
  a partir de las acciones necesarias para completarla. Formula cada concepto
  desde la pregunta o necesidad que resuelve para la persona antes de explicar
  la técnica. Los títulos y el texto explicativo expresan conceptos transferibles
  que se entienden sin conocer la demo. Los detalles propios del escenario aparecen
  solo en fragmentos de código; los enlaces a Storybook se rotulan por la interacción
  o el concepto que permiten revisar. Cuando una lección presenta los primeros
  elementos de una familia
  más amplia, sitúalos como punto de partida y anticipa que el resto aparecerá
  a lo largo del curso. Al explicar teclado, describe el recorrido en el orden
  de la tarea y cómo permite completarla sin saltos inesperados. Reserva el
  detalle de tests y las decisiones de alcance para el README, salvo cuando
  sean el concepto que se está explicando.
  La primera slide usa como título el nombre completo publicado en el `README.md`
  del módulo y define de forma directa qué se va a aprender. Todos los demás
  títulos nombran el concepto concreto de la slide; evita conclusiones abstractas
  que presupongan que la audiencia ya conoce el tema. Una persona debe poder
  identificar y comprender la lección leyendo las slides en orden, sin abrir
  Storybook. Las demos refuerzan una explicación ya visible.
  En una lección dedicada a un componente o patrón interactivo, ordena la
  explicación para responder de forma explícita y con ejemplos concretos:
  **para qué sirve y cuándo se usa → qué alternativa nativa existe → qué ARIA
  necesita y para qué sirve cada atributo → qué interacciones ofrece → qué
  consideraciones o límites especiales tiene**. No uses como título una
  conclusión metafórica o un contraste técnico —por ejemplo, «ya tiene
  contrato»— antes de explicar en lenguaje básico qué significa.
- `examples/`: módulos ejecutables de la lección.
- `*.stories.tsx`: estados y variantes del ejemplo en el Storybook único del repositorio.
- `*.test.tsx`: comportamiento, semántica accesible y teclado del mismo ejemplo.

Una lección puede ser inicialmente documental. Añade `slides.tsx` y `presenter.md`
cuando se prepare para impartirla; no inventes
componentes solo para completar una plantilla.

## Slides continuas

`src/lessons/lessonRegistry.ts` es la única fuente de orden de las slides. Cada nueva
lección debe exportar `slides` (elementos React con claves únicas) desde su `slides.tsx` y añadirse al registro en el
orden pedagógico. Cada elemento contiene el título y el contenido;
`CourseSlides` añade el contenedor y el número de lección. La composición de `src/slides/CourseSlides.tsx` solo renderiza ese
registro y no contiene contenido específico de una lección.

## Reglas de colocación

1. Coloca un ejemplo y sus stories y tests dentro de la lección que lo enseña.
2. Reutiliza un módulo desde otra lección solo cuando sea realmente compartido; entonces
   muévelo a un módulo común explícito y documenta su interfaz.
3. Mantén un único Storybook para todo `src/lessons/**/examples/**/*.stories.tsx`.
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
   las slides. Cuando una acotación abra Storybook, incluye en esa misma slide
   un enlace directo y con nombre descriptivo a la story que se va a mostrar.
9. Usa en los ejemplos una base visual sobria inspirada en shadcn: tipografía
   sans compacta como Geist, superficies blancas, escala neutral, controles
   compactos, bordes y sombras sutiles y un foco inequívoco. La referencia
   visual no implica añadir shadcn como dependencia.
10. Representa las affordances comunes como aparecerían en producto. Por ejemplo,
    usa un SVG decorativo en un botón de icono y conserva el nombre y el estado
    accesibles; evita indicadores pedagógicos ajenos a una interfaz real.
11. Agrupa las stories con la jerarquía
    `Módulo N: Nombre/Lección N.M: Nombre/Componentes|Ejemplos/Story`. Usa los
    títulos del mapa del curso y no crees una raíz genérica como `Lecciones`.

## Checklist de finalización

- [ ] La lección está bajo el módulo numerado correcto.
- [ ] El README del módulo y el README de la lección describen la ubicación actual.
- [ ] El README permite instalar, ejecutar y reconocer los componentes y sus
      consideraciones de accesibilidad sin duplicar el guion.
- [ ] La tarea de la persona, el orden de descubrimiento y lo que queda para
      lecciones posteriores están definidos antes de los detalles técnicos.
- [ ] `presenter.md` y `slides.tsx` existen cuando la lección está preparada.
- [ ] `presenter.md` se puede leer en voz alta y sus únicas instrucciones son
      acotaciones breves para cambiar la superficie mostrada.
- [ ] Cada slide tiene el título arriba, fondo blanco y contenido alineado a la
      izquierda, y sirve de base al apartado equivalente del guion.
- [ ] Los títulos y el texto principal se entienden sin conocer el ejemplo; cualquier
      detalle del escenario queda dentro de código de apoyo y los enlaces nombran el
      concepto o la interacción que permiten revisar.
- [ ] El guion desarrolla únicamente conceptos presentes en las slides y mantiene
      su mismo orden pedagógico.
- [ ] Las slides retiradas o reordenadas tienen el mismo cambio reflejado en el
      guion del presentador, incluidos sus números y acotaciones.
- [ ] Cada salto a Storybook indicado en el guion tiene un enlace directo al
      ejemplo en la slide correspondiente.
- [ ] Cada ejemplo tiene implementación, story y test co-localizados.
- [ ] La lección está incluida una sola vez y en orden en `lessonRegistry.ts`.
- [ ] Los componentes, stories y slides afectados quedan disponibles para la
      revisión manual del autor, y la PR indica si esa revisión está pendiente
      o completada.
- [ ] `pnpm test`, `pnpm lint`, `pnpm build` y `pnpm build-storybook` pasan.

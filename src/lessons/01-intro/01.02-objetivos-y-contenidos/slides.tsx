import { Fragment } from 'react'
import { course } from '../../../course'

export const slides = [
  <Fragment key="objetivos">
    <h2 className="lesson-slide__title">Objetivos y contenidos</h2>
    <p>Al terminar podrás dar estos primeros pasos:</p>
    <ul>
      {course.objectives.map((objective) => (
        <li key={objective}>{objective}</li>
      ))}
    </ul>
  </Fragment>,
  <Fragment key="mapa-del-curso">
    <h2 className="lesson-slide__title">El recorrido del curso</h2>
    <p>5 módulos · 11 lecciones · 60 minutos, incluidas las demos</p>
    <ol>
      <li>Introducción · 5 min</li>
      <li>Entender la accesibilidad · 10 min</li>
      <li>Dar significado al contenido · 18 min</li>
      <li>Permitir la interacción y la percepción · 17 min</li>
      <li>
        Primeras comprobaciones de accesibilidad y próximos pasos · 10 min
      </li>
    </ol>
  </Fragment>,
  <Fragment key="dinamica">
    <h2 className="lesson-slide__title">Aprender desde una tarea</h2>
    <ol>
      <li>Partir de una necesidad de la persona.</li>
      <li>
        Entender el concepto y su implementación, empezando por HTML nativo.
      </li>
      <li>
        Observar la barrera en una página de ejemplo y activar el arreglo.
      </li>
    </ol>
    <p>
      Las slides explican los conceptos; cada página de ejemplo muestra dónde
      está el arreglo y por qué funciona.
    </p>
    <p>Las herramientas de revisión se presentan en el módulo 5.</p>
  </Fragment>,
  <Fragment key="materiales-y-alcance">
    <h2 className="lesson-slide__title">
      Consultar los materiales y seguir practicando
    </h2>
    <ul>
      <li>README de cada lección: ejecución, fuentes y comprobaciones.</li>
      <li>Slides y guion: volver sobre la explicación.</li>
      <li>Páginas de ejemplo: activar y desactivar cada arreglo.</li>
    </ul>
    <p>Los ejercicios autónomos son adicionales a los 60 minutos.</p>
    <p>
      Esta primera base no cubre ARIA avanzado, auditorías exhaustivas ni
      automatización profunda.
    </p>
    <a
      className="lesson-slide__example-link"
      href="https://github.com/JesusGonzalezA/a11y-introduction#readme"
    >
      Consultar los materiales del curso
    </a>
  </Fragment>,
]

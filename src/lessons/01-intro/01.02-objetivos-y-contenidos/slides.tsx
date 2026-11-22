import { Fragment } from 'react'
import { course } from '../../../course'
import { SlideTitle } from '../../../slides/parts'

export const slides = [
  <Fragment key="objetivos">
    <SlideTitle kind="leccion">Objetivos y contenidos</SlideTitle>
    <p>Al terminar sabrás:</p>
    <ul>
      {course.objectives.map((objective) => (
        <li key={objective}>{objective}</li>
      ))}
    </ul>
    <p>
      Es una primera base. ARIA avanzado, auditorías completas y tests
      automáticos quedan para otros cursos.
    </p>
  </Fragment>,
  <Fragment key="mapa-del-curso">
    <SlideTitle kind="leccion">El recorrido del curso</SlideTitle>
    <ol className="course-map">
      <li>
        <strong>Introducción:</strong> objetivos y recorrido.
      </li>
      <li>
        <strong>Entender la accesibilidad:</strong> cómo usan la web distintas
        personas y qué entiende el navegador de nuestro HTML.
      </li>
      <li>
        <strong>Dar significado al contenido:</strong> estructura, imágenes,
        enlaces, botones y campos.
      </li>
      <li>
        <strong>Permitir la interacción y la percepción:</strong> teclado, foco,
        color, contraste, tamaño de letra y animaciones.
      </li>
      <li>
        <strong>Primeras comprobaciones y próximos pasos:</strong> bookmarklets,
        Accessibility Insights y cómo seguir aprendiendo.
      </li>
    </ol>
  </Fragment>,
]

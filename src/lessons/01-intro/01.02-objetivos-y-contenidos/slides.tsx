import { Fragment } from 'react'
import { course } from '../../../course'
import { portalUrl } from '../../../routes'
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
    <ol className="course-map" start={2}>
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
  <Fragment key="materiales">
    <SlideTitle kind="leccion">Dónde encontrar los materiales</SlideTitle>
    <p>Cada lección tiene tres materiales:</p>
    <ul>
      <li>
        <strong>Diapositivas:</strong> se entienden solas, sin el vídeo.
      </li>
      <li>
        <strong>Ejemplos:</strong> páginas para probar cada error y su arreglo.
      </li>
      <li>
        <strong>Contenido:</strong> resumen de la lección, con fuentes y
        comprobaciones.
      </li>
    </ul>
    <p>
      <a className="lesson-slide__example-link" href={portalUrl}>
        Abrir el índice del curso
      </a>
    </p>
  </Fragment>,
]

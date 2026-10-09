import { Fragment } from 'react'
import { course } from '../../../course'

export const slides = [
  <Fragment key="bienvenida">
    <h2 className="lesson-slide__title">Bienvenida y presentación</h2>
    <p>{course.description}</p>
    <p>{course.author} · weaaare</p>
    <p>{course.audience}</p>
  </Fragment>,
  <Fragment key="accesibilidad-en-desarrollo">
    <h2 className="lesson-slide__title">
      La accesibilidad se construye al desarrollar
    </h2>
    <p>
      Las personas necesitan percibir, comprender, navegar e interactuar con la
      web.
    </p>
    <ul>
      <li>La estructura ayuda a encontrar lo que se busca.</li>
      <li>Las instrucciones permiten entender qué hacer.</li>
      <li>Los controles deben poder utilizarse de distintas formas.</li>
    </ul>
    <p>
      Cada decisión de contenido y código puede crear o reducir una barrera.
    </p>
  </Fragment>,
  <Fragment key="tarea-de-inscripcion">
    <h2 className="lesson-slide__title">Conocer una actividad e inscribirse</h2>
    <ol>
      <li>Reconocer de qué trata: título, descripción e imagen.</li>
      <li>Consultar la información práctica para decidir.</li>
      <li>
        Entender los campos, introducir los datos y enviar la inscripción.
      </li>
      <li>Reconocer el resultado para saber si se ha completado.</li>
    </ol>
    <p>Seguiremos esta misma tarea al mejorar la página durante el curso.</p>
  </Fragment>,
]

import { Fragment } from 'react'
import { course } from '../../../course'

export const slides = [
  <Fragment key="objetivos">
    <h2 className="lesson-slide__title">Objetivos y contenidos</h2>
    <ul>
      {course.objectives.map((objective) => (
        <li key={objective}>{objective}</li>
      ))}
    </ul>
    <p>Explicaciones con diapositivas y demostraciones en Storybook.</p>
  </Fragment>,
]

import { Fragment } from 'react'
import { course } from '../../../course'

export const slides = [
  <Fragment key="bienvenida">
    <h2 className="lesson-slide__title">Bienvenida y presentación</h2>
    <p>{course.description}</p>
    <p>{course.author}</p>
    <p>{course.audience}</p>
  </Fragment>,
]

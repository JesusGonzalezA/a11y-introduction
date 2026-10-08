import type { ReactElement } from 'react'
import { slides as welcomeSlides } from './01-intro/01.01-bienvenida-y-presentacion/slides'
import { slides as objectivesSlides } from './01-intro/01.02-objetivos-y-contenidos/slides'
import { slides as exampleSlides } from './02-ejemplo/02.01-activar-una-accion/slides'

interface LessonSlide {
  lessonNumber: string
  slide: ReactElement
}

const registerLesson = (
  lessonNumber: string,
  slides: ReactElement[],
): LessonSlide[] => slides.map((slide) => ({ lessonNumber, slide }))

export const lessonSlides = [
  ...registerLesson('1.1', welcomeSlides),
  ...registerLesson('1.2', objectivesSlides),
  ...registerLesson('2.1', exampleSlides),
]

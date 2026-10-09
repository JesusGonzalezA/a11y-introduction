import type { ReactElement } from 'react'
import { slides as welcomeSlides } from './01-intro/01.01-bienvenida-y-presentacion/slides'
import { slides as objectivesSlides } from './01-intro/01.02-objetivos-y-contenidos/slides'

import { slides as barriersSlides } from './02-entender-la-accesibilidad/02.01-personas-interaccion-y-barreras/slides'
import { slides as semanticsSlides } from './02-entender-la-accesibilidad/02.02-como-interpreta-el-navegador-la-interfaz/slides'

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
  ...registerLesson('2.1', barriersSlides),
  ...registerLesson('2.2', semanticsSlides),
]

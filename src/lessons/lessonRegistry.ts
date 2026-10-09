import type { ReactElement } from 'react'
import { slides as welcomeSlides } from './01-intro/01.01-bienvenida-y-presentacion/slides'
import { slides as objectivesSlides } from './01-intro/01.02-objetivos-y-contenidos/slides'

import { slides as barriersSlides } from './02-entender-la-accesibilidad/02.01-personas-interaccion-y-barreras/slides'
import { slides as semanticsSlides } from './02-entender-la-accesibilidad/02.02-como-interpreta-el-navegador-la-interfaz/slides'

import { slides as structureSlides } from './03-dar-significado-al-contenido/03.01-estructura-y-orden-de-lectura/slides'
import { slides as contentSlides } from './03-dar-significado-al-contenido/03.02-imagenes-enlaces-y-controles/slides'

import { slides as focusSlides } from './04-interaccion-y-percepcion/04.01-teclado-y-foco-visible/slides'
import { slides as perceptionSlides } from './04-interaccion-y-percepcion/04.02-contraste-color-y-ampliacion/slides'

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
  ...registerLesson('3.1', structureSlides),
  ...registerLesson('3.2', contentSlides),
  ...registerLesson('4.1', focusSlides),
  ...registerLesson('4.2', perceptionSlides),
]

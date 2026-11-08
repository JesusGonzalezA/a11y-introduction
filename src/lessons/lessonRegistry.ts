import type { ReactElement } from 'react'
import { slides as welcomeSlides } from './01-intro/01.01-bienvenida-y-presentacion/slides'
import { slides as objectivesSlides } from './01-intro/01.02-objetivos-y-contenidos/slides'

import { slides as barriersSlides } from './02-entender-la-accesibilidad/02.01-personas-interaccion-y-barreras/slides'
import { slides as semanticsSlides } from './02-entender-la-accesibilidad/02.02-como-interpreta-el-navegador-la-interfaz/slides'

import { slides as structureSlides } from './03-dar-significado-al-contenido/03.01-estructura-y-orden-de-lectura/slides'
import { slides as contentSlides } from './03-dar-significado-al-contenido/03.02-imagenes-enlaces-y-controles/slides'

import { slides as focusSlides } from './04-interaccion-y-percepcion/04.01-teclado-y-foco-visible/slides'
import { slides as perceptionSlides } from './04-interaccion-y-percepcion/04.02-contraste-color-y-ampliacion/slides'
import { slides as motionSlides } from './04-interaccion-y-percepcion/04.03-animaciones-y-movimiento/slides'

import { slides as bookmarkletSlides } from './05-comprobaciones-y-proximos-pasos/05.01-bookmarklets/slides'
import { slides as insightsSlides } from './05-comprobaciones-y-proximos-pasos/05.02-accessibility-insights/slides'
import { slides as nextStepsSlides } from './05-comprobaciones-y-proximos-pasos/05.03-como-continuar-aprendiendo/slides'

export interface CourseLesson {
  /** Número humano: `2.1`. */
  number: string
  title: string
  /** Carpeta dentro de `src/lessons/<módulo>/`. */
  folder: string
  slides: ReactElement[]
}

export interface CourseModule {
  number: number
  title: string
  /** Carpeta dentro de `src/lessons/`. */
  folder: string
  lessons: CourseLesson[]
}

/** Única fuente del orden del curso: módulos, lecciones y slides. */
export const courseModules: CourseModule[] = [
  {
    number: 1,
    title: 'Introducción',
    folder: '01-intro',
    lessons: [
      {
        number: '1.1',
        title: 'Bienvenida y presentación',
        folder: '01.01-bienvenida-y-presentacion',
        slides: welcomeSlides,
      },
      {
        number: '1.2',
        title: 'Objetivos y contenidos',
        folder: '01.02-objetivos-y-contenidos',
        slides: objectivesSlides,
      },
    ],
  },
  {
    number: 2,
    title: 'Entender la accesibilidad',
    folder: '02-entender-la-accesibilidad',
    lessons: [
      {
        number: '2.1',
        title: 'Personas, formas de interacción y barreras',
        folder: '02.01-personas-interaccion-y-barreras',
        slides: barriersSlides,
      },
      {
        number: '2.2',
        title: 'Cómo interpreta el navegador nuestra interfaz',
        folder: '02.02-como-interpreta-el-navegador-la-interfaz',
        slides: semanticsSlides,
      },
    ],
  },
  {
    number: 3,
    title: 'Dar significado al contenido',
    folder: '03-dar-significado-al-contenido',
    lessons: [
      {
        number: '3.1',
        title: 'Estructura de página y orden de lectura',
        folder: '03.01-estructura-y-orden-de-lectura',
        slides: structureSlides,
      },
      {
        number: '3.2',
        title: 'Imágenes, enlaces y controles comprensibles',
        folder: '03.02-imagenes-enlaces-y-controles',
        slides: contentSlides,
      },
    ],
  },
  {
    number: 4,
    title: 'Permitir la interacción y la percepción',
    folder: '04-interaccion-y-percepcion',
    lessons: [
      {
        number: '4.1',
        title: 'Navegación por teclado y foco visible',
        folder: '04.01-teclado-y-foco-visible',
        slides: focusSlides,
      },
      {
        number: '4.2',
        title: 'Contraste, color y tamaño del texto',
        folder: '04.02-contraste-color-y-ampliacion',
        slides: perceptionSlides,
      },
      {
        number: '4.3',
        title: 'Animaciones y movimiento',
        folder: '04.03-animaciones-y-movimiento',
        slides: motionSlides,
      },
    ],
  },
  {
    number: 5,
    title: 'Primeras comprobaciones y próximos pasos',
    folder: '05-comprobaciones-y-proximos-pasos',
    lessons: [
      {
        number: '5.1',
        title: 'Inspeccionar el contenido con bookmarklets',
        folder: '05.01-bookmarklets',
        slides: bookmarkletSlides,
      },
      {
        number: '5.2',
        title: 'Detectar problemas con Accessibility Insights',
        folder: '05.02-accessibility-insights',
        slides: insightsSlides,
      },
      {
        number: '5.3',
        title: 'Cómo continuar aprendiendo',
        folder: '05.03-como-continuar-aprendiendo',
        slides: nextStepsSlides,
      },
    ],
  },
]

export const courseLessons = courseModules.flatMap((module) =>
  module.lessons.map((lesson) => ({ ...lesson, module })),
)

export interface LessonSlide {
  lessonNumber: string
  slide: ReactElement
}

/** Slides en orden, con el número de su lección. */
export const lessonSlides: LessonSlide[] = courseLessons.flatMap((lesson) =>
  lesson.slides.map((slide) => ({ lessonNumber: lesson.number, slide })),
)

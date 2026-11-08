import { Deck, Slide } from '@revealjs/react'
import { type ReactNode, useEffect, useMemo, useState } from 'react'
import { BrandMark } from '../brand/BrandMark'
import { course } from '../course'
import { courseModules } from '../lessons/lessonRegistry'
import { lessonAnchor, moduleAnchor, portalUrl } from '../routes'
import { canvasHeight, canvasWidthFor } from './canvas'
import 'reveal.js/dist/reveal.css'
import 'reveal.js/dist/theme/white.css'

function useCanvasWidth() {
  const [width, setWidth] = useState(() =>
    canvasWidthFor(window.innerWidth, window.innerHeight),
  )
  useEffect(() => {
    const update = () =>
      setWidth(canvasWidthFor(window.innerWidth, window.innerHeight))
    window.addEventListener('resize', update)
    return () => window.removeEventListener('resize', update)
  }, [])
  return width
}

export function CourseSlides() {
  const width = useCanvasWidth()
  const config = useMemo(
    () => ({
      center: false,
      hash: true,
      slideNumber: true,
      transition: 'none' as const,
      width,
      height: canvasHeight,
      margin: 0,
      maxScale: 3,
    }),
    [width],
  )
  return (
    <main className="course-deck">
      <Deck config={config}>
        <Slide>
          <div className="course-cover slide-cover">
            <p className="course-cover__mark">
              <BrandMark />
            </p>
            <p className="course-cover__brand">
              Tu escuela de accesibilidad digital
            </p>
            <h1 className="course-cover__title">
              <CoverTitle title={course.title} />
            </h1>
            <p className="course-cover__subtitle">{course.subtitle}</p>
            <p className="course-cover__author">{course.author}</p>
            <p>
              <a className="course-cover__portal" href={portalUrl}>
                Índice del curso: diapositivas, ejemplos y contenido
              </a>
            </p>
          </div>
        </Slide>
        {courseModules.map((module) => [
          <Slide
            key={moduleAnchor(module.number)}
            id={moduleAnchor(module.number)}
          >
            <div className="module-slide slide-cover">
              <p className="lesson-badge">
                <span className="lesson-badge__lesson">
                  Módulo {module.number}
                </span>
              </p>
              <h2 className="module-slide__title">{module.title}</h2>
              <ol className="module-slide__lessons">
                {module.lessons.map((lesson) => (
                  <li key={lesson.number}>
                    <span className="module-slide__lesson-number">
                      {lesson.number}
                    </span>{' '}
                    {lesson.title}
                  </li>
                ))}
              </ol>
            </div>
          </Slide>,
          ...module.lessons.flatMap((lesson) =>
            lesson.slides.map((slide, index) => (
              <Slide
                key={`${lesson.number}-${slide.key}`}
                id={index === 0 ? lessonAnchor(lesson.number) : undefined}
              >
                <SlideFrame
                  moduleNumber={module.number}
                  moduleTitle={module.title}
                  cover={index === 0}
                >
                  <div className="lesson-slide">
                    {index === 0 ? (
                      <p className="lesson-badge">
                        <span className="lesson-badge__module">
                          Módulo {module.number}
                        </span>
                        <span className="lesson-badge__lesson">
                          Lección {lesson.number}
                        </span>
                      </p>
                    ) : (
                      <p className="lesson-slide__lesson-number">
                        Lección {lesson.number} · {lesson.title}
                      </p>
                    )}
                    {slide}
                  </div>
                </SlideFrame>
              </Slide>
            )),
          ),
        ])}
      </Deck>
    </main>
  )
}

/** Subraya a mano la última palabra del título, como en la portada de weAAAre. */
function CoverTitle({ title }: { title: string }) {
  const index = title.lastIndexOf(' ')
  if (index < 0) return title
  return (
    <>
      {title.slice(0, index + 1)}
      <span className="course-cover__highlight">{title.slice(index + 1)}</span>
    </>
  )
}

/**
 * Marco de las presentaciones de weAAAre: barra superior con el logotipo y el
 * curso, barra inferior con el módulo. Es decorativo: el lector de pantalla
 * ya recibe el título de cada slide.
 */
function SlideFrame({
  moduleNumber,
  moduleTitle,
  cover = false,
  children,
}: {
  moduleNumber: number
  moduleTitle: string
  cover?: boolean
  children: ReactNode
}) {
  return (
    <div className={`slide-frame${cover ? ' slide-cover' : ''}`}>
      <div
        className="slide-frame__bar slide-frame__bar--top"
        aria-hidden="true"
      >
        <span className="slide-frame__logo">
          <BrandMark />
        </span>
        <span className="slide-frame__cell">{course.title}</span>
        <span className="slide-frame__cell slide-frame__cell--end">
          weAAAre
        </span>
      </div>
      <div className="slide-frame__body">{children}</div>
      <div
        className="slide-frame__bar slide-frame__bar--bottom"
        aria-hidden="true"
      >
        <span className="slide-frame__cell slide-frame__cell--module">
          Módulo {moduleNumber}
        </span>
        <span className="slide-frame__cell">{moduleTitle}</span>
        <span className="slide-frame__cell slide-frame__cell--end" />
      </div>
    </div>
  )
}

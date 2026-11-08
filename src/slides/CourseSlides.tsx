import { Deck, Slide } from '@revealjs/react'
import { course } from '../course'
import { courseModules } from '../lessons/lessonRegistry'
import { lessonAnchor, moduleAnchor, portalUrl } from '../routes'
import 'reveal.js/dist/reveal.css'
import 'reveal.js/dist/theme/white.css'

export function CourseSlides() {
  return (
    <main className="course-deck">
      <Deck
        config={{
          center: false,
          hash: true,
          slideNumber: true,
          transition: 'none',
        }}
      >
        <Slide>
          <div className="course-cover">
            <p className="course-cover__brand">weaaare</p>
            <h1 className="course-cover__title">{course.title}</h1>
            <p>{course.subtitle}</p>
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
            <div className="module-slide">
              <p className="module-slide__number">Módulo {module.number}</p>
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
                <div className="lesson-slide">
                  <p className="lesson-slide__lesson-number">
                    Lección {lesson.number}
                    {index > 0 && ` · ${lesson.title}`}
                  </p>
                  {slide}
                </div>
              </Slide>
            )),
          ),
        ])}
      </Deck>
    </main>
  )
}

import { Deck, Slide } from '@revealjs/react'
import { course } from '../course'
import { lessonSlides } from '../lessons/lessonRegistry'
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
            <p className="course-cover__author">
              {course.author} · {course.duration}
            </p>
          </div>
        </Slide>
        {lessonSlides.map(({ lessonNumber, slide }) => (
          <Slide key={`${lessonNumber}-${slide.key}`}>
            <div className="lesson-slide">
              <p className="lesson-slide__lesson-number">
                Lección {lessonNumber}
              </p>
              {slide}
            </div>
          </Slide>
        ))}
      </Deck>
    </main>
  )
}

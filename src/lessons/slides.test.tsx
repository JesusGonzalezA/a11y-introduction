import { render, screen } from '@testing-library/react'
import { axe } from 'jest-axe'
import { describe, expect, it } from 'vitest'
import { exampleRegistry } from '../examples/exampleRegistry'
import { exampleUrl } from '../examples/exampleUrl'
import { courseLessons, courseModules, lessonSlides } from './lessonRegistry'

const slideCases = courseLessons.flatMap((lesson) =>
  lesson.slides.map(
    (slide) => [`${lesson.number} ${String(slide.key)}`, slide] as const,
  ),
)

describe('Slides del curso', () => {
  it.each(slideCases)(
    '%s tiene tipo, título y ninguna infracción detectable',
    async (_, slide) => {
      const { container } = render(<main>{slide}</main>)
      const heading = screen.getByRole('heading', { level: 2 })
      expect(heading).toHaveAccessibleName()
      expect(heading).not.toHaveAttribute('tabindex')
      expect(container.querySelector('.lesson-slide__kind')).not.toBeNull()
      for (const link of screen.queryAllByRole('link'))
        expect(link).toHaveAccessibleName()
      expect(await axe(container)).toHaveNoViolations()
    },
  )

  it('usan claves únicas y la primera slide de cada lección es su presentación', () => {
    const keys = lessonSlides.map(({ slide }) => slide.key)
    expect(new Set(keys).size).toBe(keys.length)
    for (const lesson of courseLessons) {
      const { container, unmount } = render(<main>{lesson.slides[0]}</main>)
      expect(
        container.querySelector('.lesson-slide__kind--leccion'),
        lesson.number,
      ).not.toBeNull()
      expect(screen.getByRole('heading', { level: 2 })).toHaveTextContent(
        lesson.title,
      )
      unmount()
    }
  })

  it('las lecciones prácticas presentan una situación, un error y una solución', () => {
    const practical = courseLessons.filter((lesson) =>
      exampleRegistry.some((example) => example.lesson === lesson.number),
    )
    for (const lesson of practical) {
      const { container, unmount } = render(<main>{lesson.slides}</main>)
      const kinds = [...container.querySelectorAll('.lesson-slide__kind')].map(
        (node) => node.className.replace(/.*--/, ''),
      )
      const situation = kinds.indexOf('situacion')
      const error = kinds.indexOf('error')
      const solution = kinds.indexOf('solucion')
      expect(situation, lesson.number).toBeGreaterThan(0)
      expect(error, lesson.number).toBeGreaterThan(situation)
      expect(solution, lesson.number).toBeGreaterThan(error)
      unmount()
    }
  })

  it('cada página de ejemplo se enlaza, con y sin arreglo, desde su lección', () => {
    for (const example of exampleRegistry) {
      const lesson = courseLessons.find(
        ({ number }) => number === example.lesson,
      )
      expect(lesson, example.slug).toBeDefined()
      const { unmount } = render(<main>{lesson?.slides}</main>)
      const hrefs = screen
        .getAllByRole('link')
        .map((link) => link.getAttribute('href'))
      expect(hrefs).toContain(exampleUrl(example.slug))
      expect(hrefs).toContain(exampleUrl(example.slug, true))
      unmount()
    }
  })

  it('numera módulos y lecciones en orden', () => {
    expect(courseModules.map(({ number }) => number)).toEqual([1, 2, 3, 4, 5])
    for (const module of courseModules)
      module.lessons.forEach((lesson, index) => {
        expect(lesson.number).toBe(`${module.number}.${index + 1}`)
      })
  })

  it('no muestra tiempos en las diapositivas', () => {
    const { container } = render(
      <main>{lessonSlides.map(({ slide }) => slide)}</main>,
    )
    // Formato de los tiempos del temario: «· 5 min».
    expect(container.textContent).not.toMatch(/·\s*\d+\s*min/)
  })
})

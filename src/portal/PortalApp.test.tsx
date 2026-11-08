import { render, screen, within } from '@testing-library/react'
import { axe } from 'jest-axe'
import { describe, expect, it } from 'vitest'
import { exampleRegistry } from '../examples/exampleRegistry'
import { exampleUrl } from '../examples/exampleUrl'
import { courseModules } from '../lessons/lessonRegistry'
import { PortalApp } from './PortalApp'

describe('Índice del curso', () => {
  it('lleva a diapositivas, ejemplos y contenido de todo el curso', () => {
    render(<PortalApp />)
    expect(
      screen.getByRole('heading', {
        level: 1,
        name: /desarrollo web accesible/,
      }),
    ).toBeInTheDocument()
    const hrefs = screen
      .getAllByRole('link')
      .map((link) => link.getAttribute('href'))
    expect(hrefs).toEqual(
      expect.arrayContaining(['/diapositivas/', '/ejemplos/', '/contenido/']),
    )
  })

  it('agrupa por módulo los tres materiales y, por lección, sus enlaces', () => {
    const { container } = render(<PortalApp />)
    const modules = container.querySelectorAll('.portal__module')
    expect(modules).toHaveLength(courseModules.length)
    courseModules.forEach((module, index) => {
      const item = modules[index] as HTMLElement
      expect(within(item).getByRole('heading', { level: 3 })).toHaveTextContent(
        `Módulo ${module.number} ${module.title}`,
      )
      const hrefs = within(item)
        .getAllByRole('link')
        .map((link) => link.getAttribute('href'))
      expect(hrefs).toContain(`/diapositivas/#/modulo-${module.number}`)
      expect(hrefs).toContain(`/contenido/modulo-${module.number}`)
      for (const lesson of module.lessons) {
        const anchor = lesson.number.replace('.', '-')
        expect(hrefs).toContain(`/diapositivas/#/leccion-${anchor}`)
        expect(hrefs).toContain(`/contenido/${lesson.number}`)
        expect(hrefs).toContain(`/contenido/${lesson.number}/presentador`)
        for (const example of exampleRegistry.filter(
          ({ lesson: number }) => number === lesson.number,
        ))
          expect(hrefs).toContain(exampleUrl(example.slug))
      }
    })
  })

  it('no tiene infracciones detectables', async () => {
    const { container } = render(<PortalApp />)
    expect(await axe(container)).toHaveNoViolations()
  })
})

import { readFileSync } from 'node:fs'
import { render, screen } from '@testing-library/react'
import { axe } from 'jest-axe'
import { describe, expect, it } from 'vitest'
import { lessonSlides } from '../lessonRegistry'
import { slides as bookmarklets } from './05.01-bookmarklets/slides'
import { slides as insights } from './05.02-accessibility-insights/slides'
import { slides as nextSteps } from './05.03-como-continuar-aprendiendo/slides'

const slides = [...bookmarklets, ...insights, ...nextSteps]

describe('Slides de comprobaciones y próximos pasos', () => {
  it.each(slides.map((slide) => [slide.key, slide] as const))(
    '%s tiene título y pasa las reglas detectables',
    async (_, slide) => {
      const { container } = render(<main>{slide}</main>)
      expect(screen.getByRole('heading', { level: 2 })).toHaveAccessibleName()
      expect(await axe(container)).toHaveNoViolations()
    },
  )
  it('completa once lecciones en orden sin duplicar el módulo final', () => {
    expect([
      ...new Set(lessonSlides.map(({ lessonNumber }) => lessonNumber)),
    ]).toEqual([
      '1.1',
      '1.2',
      '2.1',
      '2.2',
      '3.1',
      '3.2',
      '4.1',
      '4.2',
      '5.1',
      '5.2',
      '5.3',
    ])
    expect(
      lessonSlides
        .filter(({ lessonNumber }) => lessonNumber.startsWith('5.'))
        .map(({ slide }) => slide),
    ).toEqual(slides)
    expect(lessonSlides.slice(47).map(({ slide }) => slide)).toEqual(slides)
  })
  it.each([
    ['05.01-bookmarklets', bookmarklets, 240],
    ['05.02-accessibility-insights', insights, 240],
    ['05.03-como-continuar-aprendiendo', nextSteps, 120],
  ] as const)(
    '%s conserva guion 1:1 y tiempo nominal',
    (folder, lesson, duration) => {
      render(<main>{lesson}</main>)
      const presenter = readFileSync(
        `src/lessons/05-comprobaciones-y-proximos-pasos/${folder}/presenter.md`,
        'utf8',
      )
      expect(
        [...presenter.matchAll(/^## \d+\. (.+) · \d+ s/gm)].map(
          (match) => match[1],
        ),
      ).toEqual(
        screen.getAllByRole('heading').map((heading) => heading.textContent),
      )
      expect(
        [...presenter.matchAll(/^## .+ · (\d+) s/gm)].reduce(
          (sum, match) => sum + Number(match[1]),
          0,
        ),
      ).toBe(duration)
    },
  )
  it('enlaza las cuatro variantes aisladas y mantiene los límites de disponibilidad', () => {
    render(<main>{slides}</main>)
    const ids = screen
      .getAllByRole('link')
      .map((link) =>
        new URL(link.getAttribute('href') || '').searchParams.get('id'),
      )
      .filter(Boolean)
    expect([...new Set(ids)]).toEqual([
      'm5-content-inspection--contraejemplo',
      'm5-content-inspection--solucion',
      'm5-label-inspection--contraejemplo',
      'm5-label-inspection--solucion',
    ])
    expect(
      screen.getByText(
        /Curso específico de Formularios y Data Display: publicación y URL no verificadas/,
      ),
    ).toBeVisible()
  })
})

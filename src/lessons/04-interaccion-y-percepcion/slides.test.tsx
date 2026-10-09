import { readFileSync } from 'node:fs'
import { render, screen } from '@testing-library/react'
import { axe } from 'jest-axe'
import { describe, expect, it } from 'vitest'
import { lessonSlides } from '../lessonRegistry'
import { slides as structure } from './04.01-teclado-y-foco-visible/slides'
import { slides as content } from './04.02-contraste-color-y-ampliacion/slides'

const slides = [...structure, ...content]

describe('Slides de interacción y percepción', () => {
  it.each(slides.map((slide) => [slide.key, slide] as const))(
    '%s tiene título y no presenta infracciones detectables',
    async (_, slide) => {
      const { container } = render(<main>{slide}</main>)
      expect(screen.getByRole('heading', { level: 2 })).toHaveAccessibleName()
      expect(await axe(container)).toHaveNoViolations()
    },
  )

  it('registra ambas lecciones una sola vez después del módulo 3', () => {
    const registered = lessonSlides.filter(({ lessonNumber }) =>
      lessonNumber.startsWith('4.'),
    )
    expect(registered.map(({ slide }) => slide)).toEqual(slides)
    expect(registered.map(({ lessonNumber }) => lessonNumber)).toEqual([
      ...structure.map(() => '4.1'),
      ...content.map(() => '4.2'),
    ])
    expect(lessonSlides.indexOf(registered[0])).toBe(33)
  })

  it('enlaza las cuatro demos de página aislada', () => {
    render(<main>{slides}</main>)
    expect(
      screen.getAllByRole('link').map((link) => {
        const url = new URL(link.getAttribute('href') || '')
        expect(url.pathname).toBe('/iframe.html')
        return url.searchParams.get('id')
      }),
    ).toEqual([
      'm4-focus-registration--contraejemplo',
      'm4-focus-registration--solucion',
      'm4-perception-registration--contraejemplo',
      'm4-perception-registration--solucion',
    ])
  })

  it.each([
    ['04.01-teclado-y-foco-visible', structure],
    ['04.02-contraste-color-y-ampliacion', content],
  ] as const)(
    '%s mantiene títulos y orden 1:1 en el guion',
    (folder, lesson) => {
      render(<main>{lesson}</main>)
      const presenter = readFileSync(
        `src/lessons/04-interaccion-y-percepcion/${folder}/presenter.md`,
        'utf8',
      )
      const titles = [...presenter.matchAll(/^## \d+\. (.+) · \d+ s/gm)].map(
        (match) => match[1],
      )
      expect(titles).toEqual(
        screen.getAllByRole('heading').map((heading) => heading.textContent),
      )
      const seconds = [...presenter.matchAll(/^## .+ · (\d+) s/gm)].reduce(
        (sum, match) => sum + Number(match[1]),
        0,
      )
      expect(seconds).toBe(folder.startsWith('04.01') ? 540 : 480)
    },
  )
})

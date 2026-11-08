import { readFileSync } from 'node:fs'
import { render, screen } from '@testing-library/react'
import { axe } from 'jest-axe'
import { describe, expect, it } from 'vitest'
import { lessonSlides } from '../lessonRegistry'
import { slides as structure } from './03.01-estructura-y-orden-de-lectura/slides'
import { slides as content } from './03.02-imagenes-enlaces-y-controles/slides'

const slides = [...structure, ...content]

describe('Slides de dar significado al contenido', () => {
  it.each(slides.map((slide) => [slide.key, slide] as const))(
    '%s tiene título y no presenta infracciones detectables',
    async (_, slide) => {
      const { container } = render(<main>{slide}</main>)
      expect(screen.getByRole('heading', { level: 2 })).toHaveAccessibleName()
      expect(await axe(container)).toHaveNoViolations()
    },
  )

  it('registra ambas lecciones una sola vez después del módulo 2', () => {
    const registered = lessonSlides.filter(({ lessonNumber }) =>
      lessonNumber.startsWith('3.'),
    )
    expect(registered.map(({ slide }) => slide)).toEqual(slides)
    expect(registered.map(({ lessonNumber }) => lessonNumber)).toEqual([
      ...structure.map(() => '3.1'),
      ...content.map(() => '3.2'),
    ])
    expect(lessonSlides.indexOf(registered[0])).toBe(18)
  })

  it('enlaza las páginas de ejemplo con y sin arreglo', () => {
    render(<main>{slides}</main>)
    expect(
      screen.getAllByRole('link').map((link) => link.getAttribute('href')),
    ).toEqual([
      '/ejemplos/receta',
      '/ejemplos/receta?arreglo=1',
      '/ejemplos/noticia',
      '/ejemplos/noticia?arreglo=1',
    ])
  })

  it.each([
    ['03.01-estructura-y-orden-de-lectura', structure],
    ['03.02-imagenes-enlaces-y-controles', content],
  ] as const)(
    '%s mantiene títulos y orden 1:1 en el guion',
    (folder, lesson) => {
      render(<main>{lesson}</main>)
      const presenter = readFileSync(
        `src/lessons/03-dar-significado-al-contenido/${folder}/presenter.md`,
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
      expect(seconds).toBe(540)
    },
  )
})

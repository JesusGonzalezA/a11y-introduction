import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { axe } from 'jest-axe'
import { describe, expect, it } from 'vitest'
import { lessonSlides } from '../lessonRegistry'
import { slides as barriers } from './02.01-personas-interaccion-y-barreras/slides'
import { slides as semantics } from './02.02-como-interpreta-el-navegador-la-interfaz/slides'

const slides = [...barriers, ...semantics]

describe('Slides de entender la accesibilidad', () => {
  it.each(slides.map((slide) => [slide.key, slide] as const))(
    '%s conserva título y estructura sin infracciones detectables',
    async (_, slide) => {
      const { container } = render(<main>{slide}</main>)
      expect(screen.getByRole('heading', { level: 2 })).toHaveAccessibleName()
      expect(await axe(container)).toHaveNoViolations()
    },
  )

  it('enlaza las cuatro etapas de demo y permite enfocarlas en orden', async () => {
    const user = userEvent.setup()
    render(<main>{slides}</main>)
    const links = screen.getAllByRole('link')
    expect(
      links.map((link) => new URL(link.getAttribute('href') || '').search),
    ).toEqual([
      '?path=/story/m2-keyboard-registration--contraejemplo',
      '?path=/story/m2-keyboard-registration--boton-nativo',
      '?path=/story/m2-button-semantics--comparacion',
      '?path=/story/m2-button-semantics--no-disponible',
    ])
    for (const link of links) {
      expect(link).toHaveAccessibleName()
      await user.tab()
      expect(link).toHaveFocus()
    }
  })

  it('registra ambas lecciones una sola vez y después de la introducción', () => {
    const moduleSlides = lessonSlides.filter(({ lessonNumber }) =>
      lessonNumber.startsWith('2.'),
    )
    expect(moduleSlides.map(({ slide }) => slide)).toEqual(slides)
    expect(moduleSlides.map(({ lessonNumber }) => lessonNumber)).toEqual([
      ...barriers.map(() => '2.1'),
      ...semantics.map(() => '2.2'),
    ])
    expect(lessonSlides.indexOf(moduleSlides[0])).toBe(7)
  })
})

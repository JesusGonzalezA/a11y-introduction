import { render, screen, within } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { axe } from 'jest-axe'
import { describe, expect, it } from 'vitest'
import { slides as welcomeSlides } from './01.01-bienvenida-y-presentacion/slides'
import { slides as objectivesSlides } from './01.02-objetivos-y-contenidos/slides'

const slides = [...welcomeSlides, ...objectivesSlides]

describe('Slides de introducción', () => {
  it.each(slides.map((slide) => [slide.key, slide] as const))(
    '%s conserva un encabezado nativo y una estructura sin infracciones detectables',
    async (_, slide) => {
      const { container } = render(<main>{slide}</main>)
      const heading = screen.getByRole('heading', { level: 2 })
      expect(heading.tagName).toBe('H2')
      expect(heading).toBeVisible()
      expect(heading).toHaveAccessibleName()
      expect(heading).not.toHaveAttribute('tabindex')
      for (const list of screen.queryAllByRole('list')) {
        expect(['UL', 'OL']).toContain(list.tagName)
        expect(list).not.toHaveAttribute('tabindex')
        for (const item of within(list).getAllByRole('listitem')) {
          expect(item.tagName).toBe('LI')
          expect(item).not.toHaveAttribute('tabindex')
        }
      }
      expect(await axe(container)).toHaveNoViolations()
    },
  )

  it('permite enfocar el enlace a los materiales con un destino identificable', async () => {
    const user = userEvent.setup()
    render(<main>{objectivesSlides}</main>)
    const link = screen.getByRole('link', {
      name: 'Consultar los materiales del curso',
    })
    expect(link.tagName).toBe('A')
    expect(link).toBeVisible()
    expect(link).toHaveAttribute(
      'href',
      'https://github.com/JesusGonzalezA/a11y-introduction#readme',
    )
    await user.tab()
    expect(link).toHaveFocus()
  })
})

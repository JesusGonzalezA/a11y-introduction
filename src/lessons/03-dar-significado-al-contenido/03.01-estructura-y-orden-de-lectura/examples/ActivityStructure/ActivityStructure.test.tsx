import { render, screen, within } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { axe } from 'jest-axe'
import { describe, expect, it } from 'vitest'
import { ActivityStructure } from './ActivityStructure'

describe('Estructura de la página de actividad', () => {
  it('expone regiones nativas y jerarquía de secciones en orden', () => {
    render(<ActivityStructure />)
    const main = screen.getByRole('main')
    expect(main.tagName).toBe('MAIN')
    expect(screen.getByRole('banner').tagName).toBe('HEADER')
    expect(screen.getByRole('navigation', { name: 'Actividad' }).tagName).toBe(
      'NAV',
    )
    expect(screen.getByRole('contentinfo').tagName).toBe('FOOTER')
    expect(main.firstElementChild).toBe(
      screen.getByRole('heading', { level: 1 }),
    )
    expect(
      within(main)
        .getAllByRole('heading')
        .map((heading) => [heading.tagName, heading.textContent]),
    ).toEqual([
      ['H1', 'Paseo por el jardín botánico'],
      ['H2', 'Sobre la actividad'],
      ['H2', 'Información práctica'],
      ['H3', 'Punto de encuentro'],
      ['H2', 'Inscripción'],
    ])
  })

  it('conserva la secuencia de instrucciones y Tab omite texto y regiones', async () => {
    const user = userEvent.setup()
    const { container } = render(<ActivityStructure />)
    const steps = screen.getByText(
      '1. Inscríbete antes del viernes.',
    ).parentElement
    expect(steps?.textContent).toBe(
      '1. Inscríbete antes del viernes.2. Acude al punto de encuentro el sábado.',
    )
    const stops = [
      ...screen.getAllByRole('link'),
      screen.getByRole('button', { name: 'Inscribirme' }),
    ]
    for (const stop of stops) {
      await user.tab()
      expect(stop).toHaveFocus()
    }
    for (const stop of stops.slice(0, -1).reverse()) {
      await user.tab({ shift: true })
      expect(stop).toHaveFocus()
    }
    expect(container.querySelector('[tabindex]')).toBeNull()
  })

  it('documenta títulos solo visuales, ausencia de main y pasos invertidos en la barrera', () => {
    render(<ActivityStructure barrier />)
    expect(screen.getByText(/Contraejemplo deliberado/)).toBeVisible()
    expect(screen.queryByRole('main')).toBeNull()
    expect(screen.queryByRole('heading')).toBeNull()
    const steps = screen.getByText(
      '1. Inscríbete antes del viernes.',
    ).parentElement
    expect(steps?.textContent).toBe(
      '2. Acude al punto de encuentro el sábado.1. Inscríbete antes del viernes.',
    )
  })

  it('no presenta infracciones detectables en la página estructurada', async () => {
    const { container } = render(<ActivityStructure />)
    expect(await axe(container)).toHaveNoViolations()
  })
})

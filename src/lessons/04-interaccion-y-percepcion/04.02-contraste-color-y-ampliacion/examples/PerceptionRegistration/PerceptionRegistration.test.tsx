import { render, screen, within } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { axe } from 'jest-axe'
import { describe, expect, it, vi } from 'vitest'
import { PerceptionRegistration } from './PerceptionRegistration'

describe('Disponibilidad y percepción de la actividad', () => {
  it('expresa los dos estados con texto visible en una lista nativa', async () => {
    const { container } = render(<PerceptionRegistration />)
    const list = screen.getByRole('list', { name: 'Disponibilidad por turno' })
    expect(list.tagName).toBe('UL')
    const items = within(list).getAllByRole('listitem')
    expect(items).toHaveLength(2)
    expect(items[0]).toHaveTextContent('10:00 · Plazas disponibles')
    expect(items[1]).toHaveTextContent('12:00 · Completo')
    expect(
      within(items[0]).getByText('Plazas disponibles', { exact: false }),
    ).toBeVisible()
    expect(
      within(items[1]).getByText('Completo', { exact: false }),
    ).toBeVisible()
    expect(await axe(container)).toHaveNoViolations()
  })

  it('identifica la ausencia deliberada de información textual en ambos estados', () => {
    render(<PerceptionRegistration barrier />)
    expect(
      screen.getByText(/Contraejemplo deliberado: color, contraste y recorte/),
    ).toBeVisible()
    const list = screen.getByRole('list', { name: 'Disponibilidad por turno' })
    expect(
      within(list)
        .getAllByRole('listitem')
        .map((item) => item.textContent),
    ).toEqual(['10:00', '12:00'])
    expect(within(list).queryByText(/Plazas disponibles|Completo/)).toBeNull()
    // CSS produce bajo contraste y recorte; no afirmar que axe/JSDOM los detectan.
  })

  it('mantiene la inscripción del turno de las 10:00 alcanzable, activable y con resultado', async () => {
    const user = userEvent.setup()
    const onRegister = vi.fn()
    const { container } = render(
      <PerceptionRegistration onRegister={onRegister} />,
    )
    const input = screen.getByRole('textbox', { name: 'Nombre (opcional)' })
    const stops = [
      ...screen.getAllByRole('link'),
      input,
      screen.getByRole('button', { name: 'Inscribirme' }),
    ]
    for (const stop of stops) {
      await user.tab()
      expect(stop).toHaveFocus()
    }
    await user.tab({ shift: true })
    expect(input).toHaveFocus()
    await user.keyboard('Ana')
    await user.tab()
    await user.keyboard('[Enter]')
    expect(onRegister).toHaveBeenCalledOnce()
    expect(screen.getByRole('button')).toHaveFocus()
    expect(screen.getByRole('status')).toHaveTextContent(
      'Inscripción de prueba registrada.',
    )
    expect(await axe(container)).toHaveNoViolations()
  })
})

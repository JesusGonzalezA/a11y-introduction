import { render, screen, within } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { axe } from 'jest-axe'
import { describe, expect, it, vi } from 'vitest'
import { ButtonSemantics } from './ButtonSemantics'

describe('Significado del botón', () => {
  it('expone nombre y rol nativos; el texto genérico no adquiere rol button', () => {
    render(<ButtonSemantics />)
    const native = within(
      screen.getByRole('region', { name: 'Solución: botón HTML' }),
    )
    const generic = within(
      screen.getByRole('region', {
        name: 'Contraejemplo deliberado: elemento genérico',
      }),
    )
    const button = native.getByRole('button', { name: 'Inscribirme' })
    expect(button.tagName).toBe('BUTTON')
    expect(button).toHaveAttribute('type', 'button')
    expect(button).not.toHaveAttribute('role')
    expect(button).toHaveTextContent('Inscribirme')
    expect(button).toBeVisible()
    expect(button).toBeEnabled()
    expect(generic.queryByRole('button')).not.toBeInTheDocument()
    expect(generic.getByText('Inscribirme').tagName).toBe('SPAN')
    expect(generic.getByText('Inscribirme')).not.toHaveAttribute('tabindex')
    const statuses = screen.getAllByRole('status')
    expect(new Set(statuses.map((status) => status.id)).size).toBe(2)
    expect(button).toHaveAttribute(
      'aria-controls',
      native.getByRole('status').id,
    )
  })

  it('expone disabled nativo, lo excluye de Tab e impide la acción', async () => {
    const user = userEvent.setup()
    const onRegister = vi.fn()
    const { container } = render(
      <ButtonSemantics unavailable onRegister={onRegister} />,
    )
    const action = screen.getByRole('button', { name: 'Inscribirme' })
    expect(action).toBeDisabled()
    expect(action).toHaveAccessibleDescription(
      'Inscripción cerrada: no quedan plazas.',
    )
    expect(
      screen.getByText('Inscripción cerrada: no quedan plazas.'),
    ).toBeVisible()
    await user.tab()
    await user.tab()
    expect(
      screen.getByRole('link', { name: 'Consultar ayuda para la inscripción' }),
    ).toHaveFocus()
    await user.click(action)
    await user.keyboard('[Enter][Space]')
    expect(onRegister).not.toHaveBeenCalled()
    expect(screen.getByRole('status')).toBeEmptyDOMElement()
    expect(await axe(container)).toHaveNoViolations()
  })
})

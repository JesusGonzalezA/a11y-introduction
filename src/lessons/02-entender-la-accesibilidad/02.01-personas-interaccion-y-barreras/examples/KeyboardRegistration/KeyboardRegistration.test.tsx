import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { axe } from 'jest-axe'
import { describe, expect, it, vi } from 'vitest'
import { KeyboardRegistration } from './KeyboardRegistration'

describe('Recorrido de inscripción', () => {
  it('recorre información, acción y ayuda en ambos sentidos', async () => {
    const user = userEvent.setup()
    render(<KeyboardRegistration />)
    const information = screen.getByRole('link', {
      name: 'Consultar información práctica',
    })
    const action = screen.getByRole('button', { name: 'Inscribirme' })
    const help = screen.getByRole('link', {
      name: 'Consultar ayuda para la inscripción',
    })
    await user.tab()
    expect(information).toHaveFocus()
    await user.tab()
    expect(action).toHaveFocus()
    await user.tab()
    expect(help).toHaveFocus()
    await user.tab({ shift: true })
    expect(action).toHaveFocus()
    await user.tab({ shift: true })
    expect(information).toHaveFocus()
  })

  it.each(['Enter', 'Space', 'puntero'])(
    'activa una vez con %s y conserva el foco en el botón',
    async (input) => {
      const user = userEvent.setup()
      const onRegister = vi.fn()
      render(<KeyboardRegistration onRegister={onRegister} />)
      const action = screen.getByRole('button', { name: 'Inscribirme' })
      const status = screen.getByRole('status')
      expect(status).toBeEmptyDOMElement()
      expect(action).toHaveAttribute('aria-controls', status.id)
      expect(status).toHaveAttribute('aria-atomic', 'true')
      await user.tab()
      await user.tab()
      if (input === 'puntero') await user.click(action)
      if (input !== 'puntero') await user.keyboard(`[${input}]`)
      expect(onRegister).toHaveBeenCalledOnce()
      expect(status).toHaveTextContent(
        'Inscripción de prueba registrada. No se han enviado datos.',
      )
      expect(action).toHaveFocus()
      expect(action).toHaveAccessibleName('Inscribirme')
      expect(screen.getByRole('status')).toBe(status)
      expect(status).toBeVisible()
      expect(status).not.toHaveAttribute('tabindex')
    },
  )

  it('documenta que el contraejemplo salta la acción y solo responde al puntero', async () => {
    const user = userEvent.setup()
    const onRegister = vi.fn()
    render(<KeyboardRegistration barrier onRegister={onRegister} />)
    expect(screen.getByText(/Contraejemplo deliberado/)).toBeVisible()
    expect(
      screen.queryByRole('button', { name: 'Inscribirme' }),
    ).not.toBeInTheDocument()
    await user.tab()
    await user.tab()
    expect(
      screen.getByRole('link', { name: 'Consultar ayuda para la inscripción' }),
    ).toHaveFocus()
    await user.keyboard('[Space]')
    expect(onRegister).not.toHaveBeenCalled()
    expect(screen.getByRole('status')).toBeEmptyDOMElement()
    // La ausencia de rol y de foco es precisamente la barrera que se enseña.
    await user.click(screen.getByText('Inscribirme'))
    expect(onRegister).toHaveBeenCalledOnce()
  })

  it('no presenta infracciones detectables en la solución antes y después de actuar', async () => {
    const user = userEvent.setup()
    const { container } = render(<KeyboardRegistration />)
    expect(await axe(container)).toHaveNoViolations()
    await user.click(screen.getByRole('button', { name: 'Inscribirme' }))
    expect(await axe(container)).toHaveNoViolations()
  })
})

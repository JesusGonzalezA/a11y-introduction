import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { axe } from 'jest-axe'
import { describe, expect, it } from 'vitest'
import { LibraryLogin } from './LibraryLogin'

describe('Acceso a la biblioteca: teclado y foco visible', () => {
  it.each([false, true])(
    'recorre el formulario hacia delante y atrás, arreglo=%s',
    async (fixed) => {
      const user = userEvent.setup()
      render(<LibraryLogin fixed={fixed} />)
      const stops = [
        screen.getByRole('link', { name: 'Horarios' }),
        screen.getByRole('textbox', { name: 'Número de carné' }),
        screen.getByLabelText('PIN'),
        screen.getByRole('checkbox', { name: 'Mantener la sesión iniciada' }),
        screen.getByRole('button', { name: 'Entrar' }),
        screen.getByRole('link', { name: '¿Has olvidado tu PIN?' }),
      ]
      stops[0].focus()
      for (const stop of stops.slice(1)) {
        await user.tab()
        expect(stop).toHaveFocus()
      }
      for (const stop of stops.slice(0, -1).reverse()) {
        await user.tab({ shift: true })
        expect(stop).toHaveFocus()
      }
      expect(document.querySelector('[tabindex]')).toBeNull()
    },
  )

  it('aplica el indicador de foco y el margen de desplazamiento solo con el arreglo', () => {
    const { container, unmount } = render(<LibraryLogin fixed={false} />)
    expect(container.firstChild).toHaveClass('library-login--no-focus')
    expect(document.documentElement).not.toHaveClass(
      'library-login-scroll-padding',
    )
    unmount()
    const fixed = render(<LibraryLogin fixed />)
    expect(fixed.container.firstChild).not.toHaveClass(
      'library-login--no-focus',
    )
    expect(document.documentElement).toHaveClass('library-login-scroll-padding')
    fixed.unmount()
    expect(document.documentElement).not.toHaveClass(
      'library-login-scroll-padding',
    )
  })

  it('envía con Enter sin enviar datos y sin infracciones detectables', async () => {
    const user = userEvent.setup()
    const { container } = render(<LibraryLogin fixed />)
    await user.type(
      screen.getByRole('textbox', { name: 'Número de carné' }),
      '1234{Enter}',
    )
    expect(screen.getByRole('status')).toHaveTextContent(
      'Acceso de prueba: no se ha enviado ningún dato.',
    )
    expect(await axe(container)).toHaveNoViolations()
  })
})

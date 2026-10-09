import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { axe } from 'jest-axe'
import { describe, expect, it, vi } from 'vitest'
import { FocusRegistration } from './FocusRegistration'

describe('Recorrido de inscripción con teclado', () => {
  it.each([false, true])(
    'recorre y abandona el formulario en ambos sentidos, sin foco visible=%s',
    async (hideFocus) => {
      const user = userEvent.setup()
      render(
        <>
          <button type="button">Antes de la página</button>
          <FocusRegistration hideFocus={hideFocus} />
          <button type="button">Después de la página</button>
        </>,
      )
      const stops = [
        screen.getByRole('button', { name: 'Antes de la página' }),
        ...screen.getAllByRole('link'),
        screen.getByRole('textbox', { name: 'Nombre (opcional)' }),
        screen.getByRole('button', { name: 'Inscribirme' }),
        screen.getByRole('button', { name: 'Después de la página' }),
      ]
      for (const stop of stops) {
        await user.tab()
        expect(stop).toHaveFocus()
      }
      for (const stop of stops.slice(0, -1).reverse()) {
        await user.tab({ shift: true })
        expect(stop).toHaveFocus()
      }
      if (hideFocus)
        expect(
          screen.getByText(/Contraejemplo deliberado: foco oculto/),
        ).toBeVisible()
      // JSDOM demuestra foco DOM y salida; el dibujo se verifica en navegador.
    },
  )

  it.each(['Enter', 'Space', 'puntero'])(
    'completa una inscripción con %s y conserva foco y confirmación',
    async (method) => {
      const user = userEvent.setup()
      const onRegister = vi.fn()
      const { container } = render(
        <FocusRegistration onRegister={onRegister} />,
      )
      const input = screen.getByRole('textbox', { name: 'Nombre (opcional)' })
      const label = screen.getByText('Nombre (opcional)', { selector: 'label' })
      expect(label).toHaveAttribute('for', input.id)
      expect(input).toHaveAttribute('autocomplete', 'given-name')
      const status = screen.getByRole('status')
      expect(status).toBeEmptyDOMElement()
      await user.tab()
      await user.tab()
      await user.tab()
      await user.tab()
      expect(input).toHaveFocus()
      await user.keyboard('Ana')
      expect(input).toHaveValue('Ana')
      expect(label).toBeVisible()
      await user.tab()
      const button = screen.getByRole('button', { name: 'Inscribirme' })
      expect(button).toHaveFocus()
      expect(button).toHaveAttribute('type', 'submit')
      expect(button).toHaveAttribute('aria-controls', status.id)
      if (method === 'puntero') await user.click(button)
      else await user.keyboard(`[${method}]`)
      expect(onRegister).toHaveBeenCalledOnce()
      expect(button).toHaveFocus()
      expect(screen.getByRole('status')).toBe(status)
      expect(status).toHaveAttribute('aria-atomic', 'true')
      expect(status).toHaveTextContent('Inscripción de prueba registrada.')
      expect(await axe(container)).toHaveNoViolations()
    },
  )

  it('activa el enlace con Enter y clic, con destino existente', async () => {
    const user = userEvent.setup()
    render(<FocusRegistration />)
    const link = screen.getByRole('link', {
      name: 'Consultar información práctica',
    })
    expect(
      document.getElementById(link.getAttribute('href')?.slice(1) || ''),
    ).toHaveTextContent('Información práctica')
    const activated = vi.fn((event: Event) => event.preventDefault())
    link.addEventListener('click', activated)
    await user.tab()
    await user.tab()
    await user.tab()
    await user.keyboard('[Enter]')
    expect(activated).toHaveBeenCalledOnce()
    await user.click(link)
    expect(activated).toHaveBeenCalledTimes(2)
  })

  it('conserva semántica nativa y axe en el estado inicial', async () => {
    const { container } = render(<FocusRegistration />)
    expect(screen.getAllByRole('main')).toHaveLength(1)
    expect(screen.getByRole('textbox')).toHaveAttribute('type', 'text')
    expect(container.querySelector('[tabindex]')).toBeNull()
    expect(await axe(container)).toHaveNoViolations()
  })
})

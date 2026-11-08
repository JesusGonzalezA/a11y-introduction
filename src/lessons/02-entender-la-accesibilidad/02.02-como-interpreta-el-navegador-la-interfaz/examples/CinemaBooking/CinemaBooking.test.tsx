import { render, screen, within } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { axe } from 'jest-axe'
import { describe, expect, it } from 'vitest'
import { CinemaBooking } from './CinemaBooking'

describe('Elegir sesión: rol, nombre y estado', () => {
  it('con la barrera, las sesiones no exponen rol, estado ni mensaje', async () => {
    const user = userEvent.setup()
    render(<CinemaBooking fixed={false} />)
    const list = screen.getByRole('list', { name: '' })
    expect(within(list).queryAllByRole('button')).toHaveLength(0)
    expect(screen.queryByText(/Agotada/)).toBeNull()
    expect(screen.queryByRole('status')).toBeNull()
    await user.click(screen.getByText('21:45'))
    expect(
      screen.getByText(
        'Has elegido la sesión de las 21:45. Ahora puedes escoger butacas.',
      ),
    ).toBeInTheDocument()
  })

  it('con el arreglo, cada sesión es un botón y la agotada está deshabilitada', async () => {
    const user = userEvent.setup()
    const { container } = render(<CinemaBooking fixed />)
    const sessions = screen
      .getAllByRole('button')
      .map((button) => button.textContent)
    expect(sessions).toEqual(['16:30', '19:00 · Agotada', '21:45'])
    const soldOut = screen.getByRole('button', { name: '19:00 · Agotada' })
    expect(soldOut).toBeDisabled()
    const status = screen.getByRole('status')
    expect(status).toBeEmptyDOMElement()
    expect(status).toHaveAttribute('aria-atomic', 'true')

    screen.getByRole('link', { name: 'Cómo llegar' }).focus()
    await user.tab()
    expect(screen.getByRole('button', { name: '16:30' })).toHaveFocus()
    await user.tab()
    expect(screen.getByRole('button', { name: '21:45' })).toHaveFocus()
    await user.keyboard('[Enter]')
    expect(status).toHaveTextContent('Has elegido la sesión de las 21:45.')
    expect(await axe(container)).toHaveNoViolations()
  })
})

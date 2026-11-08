import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { axe } from 'jest-axe'
import { describe, expect, it } from 'vitest'
import { FestivalPage } from './FestivalPage'

describe('Festival: animaciones y movimiento', () => {
  it('con la barrera, el movimiento no depende de la preferencia y no se puede pausar', () => {
    const { container } = render(<FestivalPage fixed={false} />)
    expect(container.firstChild).toHaveClass('festival--barrier')
    expect(screen.queryByRole('button')).not.toBeInTheDocument()
  })

  it('con el arreglo, el cartel se pausa y se reanuda con un botón', async () => {
    const user = userEvent.setup()
    const { container } = render(<FestivalPage fixed />)
    expect(container.firstChild).not.toHaveClass('festival--barrier')
    const pause = screen.getByRole('button', { name: 'Pausar el cartel' })
    const ticker = container.querySelector('.festival__ticker')
    await user.click(pause)
    expect(ticker).toHaveClass('festival__ticker--paused')
    expect(pause).toHaveAccessibleName('Reanudar el cartel')
    pause.focus()
    await user.keyboard('{Enter}')
    expect(ticker).not.toHaveClass('festival__ticker--paused')
    expect(pause).toHaveFocus()
  })

  it('expone una sola vez la lista de artistas a las tecnologías de apoyo', async () => {
    const { container } = render(<FestivalPage fixed />)
    expect(screen.getAllByRole('list', { hidden: false })[0]).toHaveTextContent(
      'Las Mareas',
    )
    expect(
      screen
        .getAllByRole('listitem')
        .filter((item) => item.textContent?.includes('Las Mareas')),
    ).toHaveLength(1)
    // JSDOM no evalúa prefers-reduced-motion: se comprueba en navegador.
    expect(await axe(container)).toHaveNoViolations()
  })
})

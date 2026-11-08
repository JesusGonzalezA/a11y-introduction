import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { axe } from 'jest-axe'
import { describe, expect, it } from 'vitest'
import { ProductPage } from './ProductPage'

describe('Ficha de producto: añadir a la cesta con teclado', () => {
  it('con la barrera, el foco salta la acción y solo el puntero la activa', async () => {
    const user = userEvent.setup()
    render(<ProductPage fixed={false} />)
    expect(
      screen.queryByRole('button', { name: 'Añadir a la cesta' }),
    ).toBeNull()
    screen
      .getByRole('link', { name: 'Consultar envíos y devoluciones' })
      .focus()
    await user.tab()
    expect(
      screen.getByRole('link', { name: '¿Dudas sobre la pieza? Escríbenos' }),
    ).toHaveFocus()
    await user.click(screen.getByText('Añadir a la cesta'))
    expect(screen.getByRole('status')).toHaveTextContent(
      'Tienes 1 artículo en la cesta.',
    )
  })

  it.each(['Enter', 'Space'])(
    'con el arreglo, el botón entra en el recorrido y se activa con %s',
    async (key) => {
      const user = userEvent.setup()
      const { container } = render(<ProductPage fixed />)
      screen
        .getByRole('link', { name: 'Consultar envíos y devoluciones' })
        .focus()
      await user.tab()
      const button = screen.getByRole('button', { name: 'Añadir a la cesta' })
      expect(button).toHaveFocus()
      expect(button).toHaveAttribute('type', 'button')
      await user.keyboard(`[${key}]`)
      expect(screen.getByRole('status')).toHaveTextContent(
        'Tienes 1 artículo en la cesta.',
      )
      expect(screen.getByText('Cesta (1)')).toBeInTheDocument()
      expect(button).toHaveFocus()
      expect(await axe(container)).toHaveNoViolations()
    },
  )
})

import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { axe } from 'jest-axe'
import { describe, expect, it, vi } from 'vitest'
import { Button } from './Button'

describe('Button', () => {
  it('expone un botón con nombre visible y no envía formularios', () => {
    render(<Button onClick={() => {}}>Continuar</Button>)
    const button = screen.getByRole('button', { name: 'Continuar' })
    expect(button).toBeVisible()
    expect(button).toHaveAttribute('type', 'button')
  })

  it.each(['[Enter]', '[Space]'])(
    'activa una sola vez con %s y conserva el foco',
    async (key) => {
      const user = userEvent.setup()
      const onClick = vi.fn()
      render(<Button onClick={onClick}>Continuar</Button>)
      const button = screen.getByRole('button', { name: 'Continuar' })
      await user.tab()
      expect(button).toHaveFocus()
      await user.keyboard(key)
      expect(onClick).toHaveBeenCalledOnce()
      expect(button).toHaveFocus()
    },
  )

  it('activa una sola vez mediante el puntero', async () => {
    const user = userEvent.setup()
    const onClick = vi.fn()
    render(<Button onClick={onClick}>Continuar</Button>)
    await user.click(screen.getByRole('button', { name: 'Continuar' }))
    expect(onClick).toHaveBeenCalledOnce()
  })

  it('omite el botón deshabilitado al tabular y no ejecuta su acción', async () => {
    const user = userEvent.setup()
    const onClick = vi.fn()
    render(
      <>
        <Button disabled onClick={onClick}>
          Continuar
        </Button>
        <a href="#materiales">Materiales</a>
      </>,
    )
    const button = screen.getByRole('button', { name: 'Continuar' })
    expect(button).toBeDisabled()
    await user.tab()
    expect(screen.getByRole('link', { name: 'Materiales' })).toHaveFocus()
    await user.click(button)
    expect(onClick).not.toHaveBeenCalled()
  })

  it.each([false, true])(
    'no presenta infracciones detectables por axe con disabled=%s',
    async (disabled) => {
      const { container } = render(
        <Button disabled={disabled} onClick={() => {}}>
          Continuar
        </Button>,
      )
      expect(await axe(container)).toHaveNoViolations()
    },
  )
})

import { render, screen, within } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { axe } from 'jest-axe'
import { describe, expect, it, vi } from 'vitest'
import { ActivityContent } from './ActivityContent'

describe('Contenido comprensible de la actividad', () => {
  it.each([false, true])(
    'conserva lista ordenada de dos pasos, con imagen decorativa=%s',
    (decorative) => {
      render(<ActivityContent decorative={decorative} />)
      const list = screen.getByRole('list')
      expect(list.tagName).toBe('OL')
      const items = within(list).getAllByRole('listitem')
      expect(items.map((item) => [item.tagName, item.textContent])).toEqual([
        ['LI', 'Inscríbete antes del viernes.'],
        ['LI', 'Acude al punto de encuentro el sábado.'],
      ])
      expect(list.children).toHaveLength(2)
      expect(list.querySelector('[tabindex]')).toBeNull()
      expect(list).not.toHaveAttribute('tabindex')
    },
  )

  it('nombra la imagen y el destino y asocia una etiqueta persistente al campo', async () => {
    const user = userEvent.setup()
    render(<ActivityContent />)
    expect(
      screen.getByRole('img', {
        name: 'Sendero entre parterres que conduce a un pabellón junto a un árbol.',
      }),
    ).toBeVisible()
    const link = screen.getByRole('link', {
      name: 'Consultar información práctica',
    })
    expect(
      document.getElementById(link.getAttribute('href')?.slice(1) || ''),
    ).toHaveTextContent('Información práctica')
    const input = screen.getByRole('textbox', { name: 'Nombre (opcional)' })
    expect(input).toHaveAttribute('type', 'text')
    expect(input).toHaveAttribute('autocomplete', 'given-name')
    expect(input).not.toBeRequired()
    const label = screen.getByText('Nombre (opcional)', { selector: 'label' })
    expect(label).toHaveAttribute('for', input.id)
    await user.click(label)
    expect(input).toHaveFocus()
    await user.type(input, 'Ana')
    await user.keyboard('[Backspace]')
    expect(input).toHaveValue('An')
    expect(label).toBeVisible()
    expect(input).toHaveAccessibleName('Nombre (opcional)')
  })

  it('recorre enlaces, campo y acción en ambos sentidos sin añadir paradas', async () => {
    const user = userEvent.setup()
    render(<ActivityContent />)
    const stops = [
      ...screen.getAllByRole('link'),
      screen.getByRole('textbox'),
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
  })

  it.each(['Enter', 'Space', 'puntero'])(
    'activa la inscripción una vez con %s y mantiene foco y confirmación',
    async (method) => {
      const user = userEvent.setup()
      const onRegister = vi.fn()
      const { container } = render(<ActivityContent onRegister={onRegister} />)
      const button = screen.getByRole('button', { name: 'Inscribirme' })
      const status = screen.getByRole('status')
      expect(button).toHaveAttribute('type', 'submit')
      expect(button).toHaveAttribute('aria-controls', status.id)
      expect(status).toBeEmptyDOMElement()
      expect(status).toHaveAttribute('aria-atomic', 'true')
      await user.click(screen.getByRole('textbox'))
      await user.tab()
      if (method === 'puntero') await user.click(button)
      if (method !== 'puntero') await user.keyboard(`[${method}]`)
      expect(onRegister).toHaveBeenCalledOnce()
      expect(button).toHaveFocus()
      expect(screen.getByRole('status')).toBe(status)
      expect(status).toHaveTextContent(
        'Inscripción de prueba registrada. No se han enviado datos.',
      )
      expect(await axe(container)).toHaveNoViolations()
    },
  )

  it('activa el enlace nativo con Enter y puntero', async () => {
    const user = userEvent.setup()
    render(<ActivityContent />)
    const link = screen.getByRole('link', {
      name: 'Consultar información práctica',
    })
    const activated = vi.fn((event: Event) => event.preventDefault())
    link.addEventListener('click', activated)
    await user.tab()
    await user.tab()
    await user.tab()
    expect(link).toHaveFocus()
    await user.keyboard('[Enter]')
    expect(activated).toHaveBeenCalledTimes(1)
    await user.click(link)
    expect(activated).toHaveBeenCalledTimes(2)
  })

  it('permite envío implícito desde el campo sin navegar ni enviar datos', async () => {
    const user = userEvent.setup()
    const onRegister = vi.fn()
    const { container } = render(<ActivityContent onRegister={onRegister} />)
    const submitted = vi.fn()
    container.addEventListener('submit', submitted)
    const input = screen.getByRole('textbox', { name: 'Nombre (opcional)' })
    await user.type(input, 'Ana{Enter}')
    expect(onRegister).toHaveBeenCalledOnce()
    expect(submitted).toHaveBeenCalledOnce()
    expect(submitted.mock.calls[0][0].defaultPrevented).toBe(true)
    expect(input).toHaveFocus()
    expect(screen.getByRole('status')).toHaveTextContent(
      'Inscripción de prueba registrada.',
    )
  })

  it('omite la imagen redundante del nombre accesible y conserva la información en texto', async () => {
    const { container } = render(<ActivityContent decorative />)
    expect(screen.queryByRole('img')).toBeNull()
    const image = container.querySelector('img')
    expect(image).toHaveAttribute('alt', '')
    expect(image).not.toHaveAttribute('title')
    expect(image).not.toHaveAttribute('tabindex')
    expect(image).not.toHaveAttribute('aria-label')
    expect(
      screen.getByText(
        'Sendero entre parterres que conduce a un pabellón junto a un árbol.',
      ),
    ).toBeVisible()
    expect(await axe(container)).toHaveNoViolations()
  })

  it('identifica alt inútil, enlace genérico y ausencia de label en el contraejemplo', async () => {
    const user = userEvent.setup()
    const { container } = render(<ActivityContent barrier />)
    expect(screen.getByText(/Contraejemplo deliberado/)).toBeVisible()
    expect(screen.getByRole('img', { name: 'actividad.svg' })).toBeVisible()
    expect(screen.getByRole('link', { name: 'Ver más' })).toBeVisible()
    expect(screen.getByRole('button', { name: 'Aceptar' })).toBeVisible()
    expect(container.querySelector('label')).toBeNull()
    const input = screen.getByPlaceholderText('Nombre')
    await user.type(input, 'Ana')
    expect(input).toHaveValue('Ana')
    // No se exige silencio universal del lector ni fallo de axe: placeholder puede ser nombre de respaldo.
    expect(container.querySelector('label')).toBeNull()
  })

  it('mantiene IDs independientes y pasa axe en el estado inicial corregido', async () => {
    const first = render(<ActivityContent />)
    const firstId = screen.getByRole('textbox').id
    expect(await axe(first.container)).toHaveNoViolations()
    first.unmount()
    render(<ActivityContent />)
    expect(screen.getByRole('textbox').id).not.toBe(firstId)
  })
})

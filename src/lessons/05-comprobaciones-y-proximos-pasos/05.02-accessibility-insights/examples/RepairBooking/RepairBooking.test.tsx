import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { axe } from 'jest-axe'
import { describe, expect, it } from 'vitest'
import { RepairBooking } from './RepairBooking'

describe('Cita en el taller: campo sin nombre accesible', () => {
  it('con la barrera, axe detecta el campo de teléfono sin etiqueta', async () => {
    const { container } = render(<RepairBooking fixed={false} />)
    expect(screen.queryByRole('textbox', { name: 'Teléfono' })).toBeNull()
    expect(screen.getByText('Teléfono')).toBeVisible()
    const results = await axe(container)
    expect(results.violations.map(({ id }) => id)).toEqual(['label'])
  })

  it('con el arreglo, la etiqueta nombra el campo y desaparece el fallo', async () => {
    const user = userEvent.setup()
    const { container } = render(<RepairBooking fixed />)
    const phone = screen.getByRole('textbox', { name: 'Teléfono' })
    expect(phone).toHaveAttribute('type', 'tel')
    expect(phone).toHaveAttribute('autocomplete', 'tel')
    await user.click(screen.getByText('Teléfono'))
    expect(phone).toHaveFocus()
    await user.click(screen.getByRole('button', { name: 'Pedir cita' }))
    expect(screen.getByRole('status')).toHaveTextContent(
      'Solicitud de prueba: no se ha enviado ningún dato.',
    )
    expect(await axe(container)).toHaveNoViolations()
  })
})

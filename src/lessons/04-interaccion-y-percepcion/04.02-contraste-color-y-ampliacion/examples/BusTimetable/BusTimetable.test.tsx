import { render, screen, within } from '@testing-library/react'
import { axe } from 'jest-axe'
import { describe, expect, it } from 'vitest'
import { BusTimetable } from './BusTimetable'

describe('Horarios: color, contraste y reflujo', () => {
  it('con la barrera, el estado solo se expresa con color', () => {
    const { container } = render(<BusTimetable fixed={false} />)
    const list = screen.getByRole('list', { name: 'Próximas salidas' })
    expect(
      within(list)
        .getAllByRole('listitem')
        .map((item) => item.textContent),
    ).toEqual(['08:15', '08:40', '09:05', '09:30'])
    expect(container.firstChild).toHaveClass('bus-timetable--barrier')
  })

  it('con el arreglo, cada salida escribe su estado y el aviso no se recorta', async () => {
    const { container } = render(<BusTimetable fixed />)
    const list = screen.getByRole('list', { name: 'Próximas salidas' })
    expect(
      within(list)
        .getAllByRole('listitem')
        .map((item) => item.textContent),
    ).toEqual([
      '08:15A tiempo',
      '08:40Retraso de 10 minutos',
      '09:05Cancelado',
      '09:30A tiempo',
    ])
    expect(container.firstChild).not.toHaveClass('bus-timetable--barrier')
    expect(
      screen.getByRole('region', { name: 'Aviso por obras' }),
    ).toHaveTextContent('calle Real, número 14')
    // JSDOM no calcula contraste ni reflujo: se comprueban en navegador.
    expect(await axe(container)).toHaveNoViolations()
  })
})

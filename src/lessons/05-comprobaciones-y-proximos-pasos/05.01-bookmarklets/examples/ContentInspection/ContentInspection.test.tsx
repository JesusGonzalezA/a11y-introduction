import { render, screen } from '@testing-library/react'
import { axe } from 'jest-axe'
import { describe, expect, it } from 'vitest'
import { ContentInspection } from './ContentInspection'

describe('Inspección del contenido', () => {
  it('identifica niveles incoherentes y un alt presente pero poco útil', () => {
    render(<ContentInspection barrier />)
    expect(screen.getByText(/Contraejemplo deliberado/)).toBeVisible()
    expect(
      screen.getAllByRole('heading').map((heading) => heading.tagName),
    ).toEqual(['H1', 'H3', 'H3', 'H2', 'H3'])
    expect(
      screen.getByRole('heading', { name: 'Punto de encuentro', level: 2 }),
    ).toBeVisible()
    expect(screen.getByRole('img', { name: 'actividad.svg' })).toBeVisible()
    expect(
      screen.getByRole('textbox', { name: 'Nombre (opcional)' }),
    ).toBeVisible()
  })

  it('recupera la jerarquía y la información de la imagen en la solución', async () => {
    const { container } = render(<ContentInspection />)
    expect(
      screen.getAllByRole('heading').map((heading) => heading.tagName),
    ).toEqual(['H1', 'H2', 'H2', 'H3', 'H2'])
    expect(
      screen.getByRole('img', {
        name: 'Sendero entre parterres que conduce a un pabellón junto a un árbol.',
      }),
    ).toBeVisible()
    expect(screen.getAllByRole('main')).toHaveLength(1)
    expect(await axe(container)).toHaveNoViolations()
  })
})

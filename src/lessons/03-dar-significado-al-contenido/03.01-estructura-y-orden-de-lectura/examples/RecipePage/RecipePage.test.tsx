import { render, screen } from '@testing-library/react'
import { axe } from 'jest-axe'
import { describe, expect, it } from 'vitest'
import { RecipePage } from './RecipePage'

const stepsInOrder = [
  'Pica la cebolla, el pimiento y la zanahoria.',
  'Sofríe las verduras 10 minutos a fuego medio.',
  'Añade las lentejas, el pimentón y el agua.',
  'Cuece 35 minutos y deja reposar antes de servir.',
]

describe('Receta: estructura y orden de lectura', () => {
  it('con la barrera, no hay encabezados, regiones ni pasos en orden', () => {
    const { container } = render(<RecipePage fixed={false} />)
    expect(screen.queryAllByRole('heading')).toHaveLength(0)
    for (const role of ['banner', 'navigation', 'main', 'contentinfo'])
      expect(screen.queryByRole(role)).toBeNull()
    const steps = container.querySelectorAll('.recipe-page__steps p')
    expect(Array.from(steps, (step) => step.textContent)).toEqual(
      stepsInOrder.map((step, index) => `${index + 1}. ${step}`).reverse(),
    )
  })

  it('con el arreglo, expone jerarquía, regiones y pasos en el documento', async () => {
    const { container } = render(<RecipePage fixed />)
    expect(
      screen
        .getAllByRole('heading')
        .map((heading) => [heading.tagName, heading.textContent]),
    ).toEqual([
      ['H1', 'Lentejas estofadas con verduras'],
      ['H2', 'Ingredientes'],
      ['H3', 'Para el sofrito'],
      ['H3', 'Para el guiso'],
      ['H2', 'Preparación'],
      ['H2', 'Consejo'],
    ])
    expect(screen.getByRole('banner')).toBeInTheDocument()
    expect(
      screen.getByRole('navigation', { name: 'Principal' }),
    ).toBeInTheDocument()
    expect(screen.getAllByRole('main')).toHaveLength(1)
    expect(screen.getByRole('contentinfo')).toBeInTheDocument()
    const list = container.querySelector('ol')
    expect(list).not.toBeNull()
    expect(
      Array.from(list?.querySelectorAll('li') ?? [], (li) => li.textContent),
    ).toEqual(stepsInOrder)
    expect(await axe(container)).toHaveNoViolations()
  })
})

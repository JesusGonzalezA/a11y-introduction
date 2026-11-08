import { render, screen } from '@testing-library/react'
import { axe } from 'jest-axe'
import { describe, expect, it } from 'vitest'
import { MuseumExhibition, tapestryAlt } from './MuseumExhibition'

const outline = () =>
  screen
    .getAllByRole('heading')
    .map((heading) => `${heading.tagName} ${heading.textContent}`)

describe('Exposición: niveles y alternativa que revelan los bookmarklets', () => {
  it('con la barrera, los niveles se invierten y alt es un archivo', () => {
    render(<MuseumExhibition fixed={false} />)
    expect(outline()).toEqual([
      'H1 Hilos del Mediterráneo',
      'H3 Sobre la exposición',
      'H3 Información práctica',
      'H2 Horarios',
      'H2 Entradas',
    ])
    expect(screen.getByRole('img')).toHaveAttribute('alt', 'sala3_IMG_0412.jpg')
  })

  it('con el arreglo, la jerarquía y el alt explican el contenido', async () => {
    const { container } = render(<MuseumExhibition fixed />)
    expect(outline()).toEqual([
      'H1 Hilos del Mediterráneo',
      'H2 Sobre la exposición',
      'H2 Información práctica',
      'H3 Horarios',
      'H3 Entradas',
    ])
    expect(screen.getByRole('img', { name: tapestryAlt })).toBeInTheDocument()
    expect(await axe(container)).toHaveNoViolations()
  })
})

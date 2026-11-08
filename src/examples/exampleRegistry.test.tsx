import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { ExamplesApp, slugFromPath } from './ExamplesApp'
import { exampleRegistry } from './exampleRegistry'
import { exampleUrl } from './exampleUrl'

describe('Registro de páginas de ejemplo', () => {
  it('usa direcciones únicas en el orden de las lecciones', () => {
    const slugs = exampleRegistry.map(({ slug }) => slug)
    expect(new Set(slugs).size).toBe(slugs.length)
    expect(exampleRegistry.map(({ lesson }) => lesson)).toEqual([
      '2.1',
      '2.2',
      '3.1',
      '3.2',
      '4.1',
      '4.2',
      '4.3',
      '5.1',
      '5.2',
    ])
  })

  it.each(exampleRegistry.map((example) => [example.slug, example] as const))(
    '%s marca en la página cada arreglo, con y sin aplicar',
    (_, { fixes, Page }) => {
      for (const fixed of [false, true]) {
        const { unmount } = render(<Page fixed={fixed} />)
        for (const fix of fixes)
          expect(
            document.querySelector(`[data-fix="${fix.id}"]`),
            `${fix.id} con fixed=${fixed}`,
          ).not.toBeNull()
        expect(
          screen.queryAllByRole('heading', { level: 1 }).length,
        ).toBeLessThanOrEqual(1)
        unmount()
      }
    },
  )

  it('resuelve las rutas y enlaza todos los ejemplos desde el índice', () => {
    expect(slugFromPath('/ejemplos/cine')).toBe('cine')
    expect(slugFromPath('/ejemplos/cine/')).toBe('cine')
    expect(slugFromPath('/ejemplos/')).toBe('')
    expect(slugFromPath('/ejemplos')).toBe('')
    expect(exampleUrl('cine')).toBe('/ejemplos/cine')
    expect(exampleUrl('cine', true)).toBe('/ejemplos/cine?arreglo=1')

    render(<ExamplesApp pathname="/ejemplos/" />)
    expect(
      screen.getByRole('heading', { level: 1, name: 'Páginas de ejemplo' }),
    ).toBeInTheDocument()
    const exampleLinks = screen
      .getAllByRole('link')
      .map((link) => link.getAttribute('href'))
      .filter((href) => href?.startsWith('/ejemplos/'))
    expect(exampleLinks).toEqual(
      exampleRegistry.map(({ slug }) => exampleUrl(slug)),
    )
    expect(
      screen.getByRole('link', { name: 'Índice del curso' }),
    ).toHaveAttribute('href', '/')
  })

  it('avisa de una página inexistente sin perder el índice', () => {
    render(<ExamplesApp pathname="/ejemplos/no-existe" />)
    expect(
      screen.getByText(
        /No existe ninguna página de ejemplo llamada «no-existe»/,
      ),
    ).toBeInTheDocument()
    expect(screen.getAllByRole('link')).toHaveLength(exampleRegistry.length + 1)
  })

  it('monta la página y la herramienta para una ruta conocida', () => {
    render(<ExamplesApp pathname="/ejemplos/cine" />)
    expect(
      screen.getByRole('heading', { level: 1, name: 'La ola tranquila' }),
    ).toBeInTheDocument()
    expect(
      screen.getByRole('button', { name: 'Aplicar arreglo' }),
    ).toBeInTheDocument()
  })
})

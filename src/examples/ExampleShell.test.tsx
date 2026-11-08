import { render, screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { axe } from 'jest-axe'
import { afterEach, describe, expect, it } from 'vitest'
import { ExampleShell } from './ExampleShell'
import type { ExampleDefinition } from './types'

const example: ExampleDefinition = {
  slug: 'prueba',
  name: 'Página de prueba',
  lesson: '9.9',
  lessonTitle: 'Lección de prueba',
  title: 'Página de prueba · Sitio',
  tryIt: 'Pulsa el botón.',
  fixes: [
    {
      id: 'name',
      title: 'El botón tiene nombre',
      where: 'Botón principal.',
      why: 'Sin texto no se sabe qué hace.',
      before: '<button></button>',
      after: '<button>Guardar</button>',
    },
  ],
  Page: ({ fixed }) => (
    <main>
      <h1>Prueba</h1>
      <button type="button" data-fix="name">
        {fixed ? 'Guardar' : 'Botón'}
      </button>
    </main>
  ),
}

afterEach(() => window.history.replaceState(null, '', '/'))

describe('Herramienta flotante de arreglo', () => {
  it('abre con la barrera y alterna el arreglo con teclado', async () => {
    const user = userEvent.setup()
    window.history.replaceState(null, '', '/ejemplos/prueba#seccion')
    render(<ExampleShell example={example} />)
    const toggle = screen.getByRole('button', { name: 'Aplicar arreglo' })
    expect(toggle).toHaveAttribute('aria-pressed', 'false')
    expect(screen.getByRole('button', { name: 'Botón' })).toBeInTheDocument()
    expect(document.title).toBe('Página de prueba · Sitio')

    toggle.focus()
    await user.keyboard('[Enter]')
    expect(toggle).toHaveAttribute('aria-pressed', 'true')
    expect(toggle).toHaveFocus()
    expect(screen.getByRole('button', { name: 'Guardar' })).toBeInTheDocument()
    expect(window.location.search).toBe('?arreglo=1')
    expect(window.location.hash).toBe('#seccion')

    await user.keyboard('[Space]')
    expect(toggle).toHaveAttribute('aria-pressed', 'false')
    expect(window.location.search).toBe('')
  })

  it('respeta el estado de la URL', () => {
    window.history.replaceState(null, '', '/ejemplos/prueba?arreglo=1')
    render(<ExampleShell example={example} />)
    expect(
      screen.getByRole('button', { name: 'Aplicar arreglo' }),
    ).toHaveAttribute('aria-pressed', 'true')
    expect(screen.getByRole('button', { name: 'Guardar' })).toBeInTheDocument()
  })

  it('explica dónde y por qué, y resalta los elementos afectados', async () => {
    const user = userEvent.setup()
    render(<ExampleShell example={example} />)
    const details = screen.getByRole('button', { name: 'Ver cambios (1)' })
    expect(details).toHaveAttribute('aria-expanded', 'false')
    expect(document.querySelector('[data-highlight]')).toBeNull()

    await user.click(details)
    expect(details).toHaveAttribute('aria-expanded', 'true')
    const panel = document.getElementById(
      details.getAttribute('aria-controls') || '',
    )
    expect(panel).toBeVisible()
    expect(panel).toHaveTextContent('Estás viendo la página con la barrera.')
    expect(panel).toHaveTextContent('DóndeBotón principal.')
    expect(panel).toHaveTextContent('Por quéSin texto no se sabe qué hace.')
    expect(screen.getByText('Sin arreglo · en pantalla')).toBeInTheDocument()
    expect(screen.getByText('<button>Guardar</button>')).toBeInTheDocument()
    await waitFor(() =>
      expect(document.querySelectorAll('[data-highlight="name"]')).toHaveLength(
        1,
      ),
    )
    const overlay = document.querySelector('.fix-highlights')
    expect(overlay).toHaveAttribute('aria-hidden', 'true')
    expect(overlay).toHaveTextContent('1 · Barrera')

    await user.click(screen.getByRole('button', { name: 'Aplicar arreglo' }))
    expect(screen.getByText('Con arreglo · en pantalla')).toBeInTheDocument()
    expect(overlay).toHaveTextContent('1 · Arreglo')

    await user.click(
      screen.getByRole('checkbox', {
        name: 'Resaltar los cambios en la página',
      }),
    )
    expect(document.querySelector('[data-highlight]')).toBeNull()

    await user.click(
      screen.getByRole('button', { name: 'Localizar «El botón tiene nombre»' }),
    )
    expect(
      screen.getByRole('checkbox', {
        name: 'Resaltar los cambios en la página',
      }),
    ).toBeChecked()
    await waitFor(() =>
      expect(document.querySelector('[data-highlight="name"]')).toHaveClass(
        'fix-highlights__box--located',
      ),
    )
  })

  it('cierra el panel con Escape y devuelve el foco', async () => {
    const user = userEvent.setup()
    render(<ExampleShell example={example} />)
    const details = screen.getByRole('button', { name: 'Ver cambios (1)' })
    await user.click(details)
    await user.tab()
    await user.keyboard('[Escape]')
    expect(details).toHaveAttribute('aria-expanded', 'false')
    expect(details).toHaveFocus()
  })

  it('va después de la página en el orden de foco y no añade infracciones', async () => {
    const user = userEvent.setup()
    const { container } = render(<ExampleShell example={example} />)
    await user.tab()
    expect(screen.getByRole('button', { name: 'Botón' })).toHaveFocus()
    await user.tab()
    expect(
      screen.getByRole('button', { name: 'Aplicar arreglo' }),
    ).toHaveFocus()
    await user.click(screen.getByRole('button', { name: 'Ver cambios (1)' }))
    expect(await axe(container)).toHaveNoViolations()
    expect(screen.getAllByRole('heading')).toHaveLength(1)
  })
})

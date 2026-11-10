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
  tryIt: ['Pulsa el botón.'],
  fixes: [
    {
      id: 'name',
      title: 'El botón tiene nombre',
      where: 'Botón principal.',
      problem: 'Sin texto no se sabe qué hace.',
      solution: 'Un texto que nombra la acción.',
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

const barrier = () => screen.getByRole('radio', { name: 'Con barrera' })
const fix = () => screen.getByRole('radio', { name: 'Con arreglo' })
const explanation = () => screen.getByRole('button', { name: 'Explicación' })

describe('Herramienta flotante de arreglo', () => {
  it('abre con la barrera y cambia de versión con teclado', async () => {
    const user = userEvent.setup()
    window.history.replaceState(null, '', '/ejemplos/prueba#seccion')
    render(<ExampleShell example={example} />)
    expect(
      screen.getByRole('radiogroup', { name: 'Ver la página' }),
    ).toBeInTheDocument()
    expect(barrier()).toBeChecked()
    expect(fix()).not.toBeChecked()
    expect(screen.getByRole('button', { name: 'Botón' })).toBeInTheDocument()
    expect(document.title).toBe('Página de prueba · Sitio')

    barrier().focus()
    await user.keyboard('[ArrowRight]')
    expect(fix()).toBeChecked()
    expect(fix()).toHaveFocus()
    expect(screen.getByRole('button', { name: 'Guardar' })).toBeInTheDocument()
    expect(window.location.search).toBe('?arreglo=1')
    expect(window.location.hash).toBe('#seccion')

    await user.keyboard('[ArrowLeft]')
    expect(barrier()).toBeChecked()
    expect(window.location.search).toBe('')
  })

  it('respeta el estado de la URL', () => {
    window.history.replaceState(null, '', '/ejemplos/prueba?arreglo=1')
    render(<ExampleShell example={example} />)
    expect(fix()).toBeChecked()
    expect(screen.getByRole('button', { name: 'Guardar' })).toBeInTheDocument()
  })

  it('explica qué probar, dónde está cada cambio, el problema y la solución', async () => {
    const user = userEvent.setup()
    render(<ExampleShell example={example} />)
    const details = explanation()
    expect(details).toHaveAttribute('aria-expanded', 'false')
    expect(document.querySelector('[data-highlight]')).toBeNull()

    await user.click(details)
    expect(details).toHaveAttribute('aria-expanded', 'true')
    const panel = document.getElementById(
      details.getAttribute('aria-controls') || '',
    )
    expect(panel).toBeVisible()
    expect(panel).toHaveTextContent('Estás viendo la página con la barrera.')
    expect(panel).toHaveTextContent('Pulsa el botón.')
    expect(panel).toHaveTextContent('Qué cambia: 1 arreglo')
    expect(panel).toHaveTextContent('DóndeBotón principal.')
    expect(panel).toHaveTextContent('ProblemaSin texto no se sabe qué hace.')
    expect(panel).toHaveTextContent('SoluciónUn texto que nombra la acción.')
    expect(panel).toHaveTextContent('Con barrera · lo que ves ahora')
    expect(screen.getByText('<button>Guardar</button>')).toBeInTheDocument()
    await waitFor(() =>
      expect(document.querySelectorAll('[data-highlight="name"]')).toHaveLength(
        1,
      ),
    )
    const overlay = document.querySelector('.fix-highlights')
    expect(overlay).toHaveAttribute('aria-hidden', 'true')
    expect(overlay).toHaveTextContent('1 · Barrera')

    await user.click(fix())
    expect(panel).toHaveTextContent('Estás viendo la página con el arreglo.')
    expect(panel).toHaveTextContent('Con arreglo · lo que ves ahora')
    expect(overlay).toHaveTextContent('1 · Arreglo')

    const mark = screen.getByRole('checkbox', {
      name: 'Marcar los cambios en la página',
    })
    await user.click(mark)
    expect(document.querySelector('[data-highlight]')).toBeNull()

    await user.click(
      screen.getByRole('button', {
        name: 'Mostrar en la página: El botón tiene nombre',
      }),
    )
    expect(mark).toBeChecked()
    await waitFor(() =>
      expect(document.querySelector('[data-highlight="name"]')).toHaveClass(
        'fix-highlights__box--located',
      ),
    )
  })

  it('cierra la explicación con Escape o con «Cerrar» y devuelve el foco', async () => {
    const user = userEvent.setup()
    render(<ExampleShell example={example} />)
    const details = explanation()
    await user.click(details)
    await user.tab()
    await user.keyboard('[Escape]')
    expect(details).toHaveAttribute('aria-expanded', 'false')
    expect(details).toHaveFocus()

    await user.click(details)
    await user.click(screen.getByRole('button', { name: 'Cerrar' }))
    expect(details).toHaveAttribute('aria-expanded', 'false')
    expect(details).toHaveFocus()
  })

  it('va después de la página en el orden de foco y no añade infracciones', async () => {
    const user = userEvent.setup()
    const { container } = render(<ExampleShell example={example} />)
    await user.tab()
    expect(screen.getByRole('button', { name: 'Botón' })).toHaveFocus()
    await user.tab()
    expect(barrier()).toHaveFocus()
    await user.tab()
    expect(explanation()).toHaveFocus()
    await user.click(explanation())
    expect(await axe(container)).toHaveNoViolations()
    expect(screen.getAllByRole('heading')).toHaveLength(1)
  })
})

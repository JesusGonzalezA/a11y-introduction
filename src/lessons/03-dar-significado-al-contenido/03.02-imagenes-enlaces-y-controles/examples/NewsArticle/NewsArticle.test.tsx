import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { axe } from 'jest-axe'
import { describe, expect, it } from 'vitest'
import { chartAlt, NewsArticle } from './NewsArticle'

describe('Noticia: imágenes, enlace, botón y campo comprensibles', () => {
  it('con la barrera, los nombres no explican nada y el campo depende del placeholder', async () => {
    const user = userEvent.setup()
    render(<NewsArticle fixed={false} />)
    expect(
      screen.getByRole('img', { name: 'grafico_final_v2.png' }),
    ).toBeInTheDocument()
    expect(
      screen.getByRole('img', { name: 'icono-sobre.svg' }),
    ).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Leer más' })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Aceptar' })).toBeInTheDocument()
    const field = screen.getByPlaceholderText('Tu correo')
    expect(document.querySelector(`label[for="${field.id}"]`)).toBeNull()
    await user.type(field, 'ana@ejemplo.com')
    expect(field).toHaveValue('ana@ejemplo.com')
  })

  it('con el arreglo, cada elemento comunica su propósito', async () => {
    const user = userEvent.setup()
    const { container } = render(<NewsArticle fixed />)
    expect(screen.getByRole('img', { name: chartAlt })).toBeInTheDocument()
    const icon = container.querySelector('.news-article__icon')
    expect(icon).toHaveAttribute('alt', '')
    expect(screen.getAllByRole('img')).toHaveLength(1)
    const link = screen.getByRole('link', {
      name: 'Consultar el informe de movilidad 2026',
    })
    expect(
      document.getElementById(link.getAttribute('href')?.slice(1) || ''),
    ).toBeInTheDocument()
    const field = screen.getByRole('textbox', { name: 'Correo electrónico' })
    expect(field).toHaveAttribute('type', 'email')
    expect(field).toHaveAttribute('autocomplete', 'email')
    await user.type(field, 'ana@ejemplo.com')
    expect(screen.getByText('Correo electrónico')).toBeVisible()
    await user.click(screen.getByRole('button', { name: 'Suscribirme' }))
    expect(screen.getByRole('status')).toHaveTextContent(
      'Suscripción de prueba: no se ha enviado ningún dato.',
    )
    expect(await axe(container)).toHaveNoViolations()
  })
})

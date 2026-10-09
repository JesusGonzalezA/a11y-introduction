import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { axe } from 'jest-axe'
import { describe, expect, it } from 'vitest'
import { LabelInspection } from './LabelInspection'

describe('Inspección de una etiqueta', () => {
  it('aísla un campo sin nombre detectable sin simular FastPass', async () => {
    const { container } = render(<LabelInspection barrier />)
    expect(screen.getByText(/Contraejemplo deliberado/)).toBeVisible()
    const field = screen.getByRole('textbox', { name: '' })
    expect(field).not.toHaveAccessibleName()
    expect(field).not.toHaveAttribute('placeholder')
    expect(container.querySelector('label')).toBeNull()
    expect(screen.getByRole('img')).not.toHaveAccessibleName('actividad.svg')
    const results = await axe(container)
    expect(results.violations.map(({ id }) => id)).toContain('label')
  })

  it('mantiene etiqueta nativa visible al editar y completar la inscripción', async () => {
    const user = userEvent.setup()
    const { container } = render(<LabelInspection />)
    const field = screen.getByRole('textbox', { name: 'Nombre (opcional)' })
    const label = screen.getByText('Nombre (opcional)', { selector: 'label' })
    expect(label).toHaveAttribute('for', field.id)
    expect(field).toHaveAttribute('type', 'text')
    expect(field).toHaveAttribute('autocomplete', 'given-name')
    expect(field).not.toBeRequired()
    expect(await axe(container)).toHaveNoViolations()
    const stops = [
      ...screen.getAllByRole('link'),
      field,
      screen.getByRole('button', { name: 'Inscribirme' }),
    ]
    for (const stop of stops) {
      await user.tab()
      expect(stop).toHaveFocus()
    }
    await user.tab({ shift: true })
    expect(field).toHaveFocus()
    await user.type(field, 'Ana{Backspace}')
    expect(field).toHaveValue('An')
    expect(label).toBeVisible()
    expect(field).toHaveAccessibleName('Nombre (opcional)')
    await user.click(label)
    expect(field).toHaveFocus()
    await user.tab()
    await user.keyboard('[Space]')
    expect(screen.getByRole('status')).toHaveTextContent(
      'Inscripción de prueba registrada.',
    )
    expect(screen.getByRole('button', { name: 'Inscribirme' })).toHaveFocus()
    expect(await axe(container)).toHaveNoViolations()
    await user.tab()
    expect(document.body).toHaveFocus()
  })
})

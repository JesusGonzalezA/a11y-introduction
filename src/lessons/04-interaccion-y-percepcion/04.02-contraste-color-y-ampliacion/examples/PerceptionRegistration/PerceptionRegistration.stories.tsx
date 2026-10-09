import type { Meta, StoryObj } from '@storybook/react'
import { PerceptionRegistration } from './PerceptionRegistration'

const meta = {
  id: 'm4-perception-registration',
  title:
    'Módulo 4: Permitir la interacción y la percepción/Lección 4.2: Contraste, color y ampliación del contenido/Ejemplos/Inscripción',
  component: PerceptionRegistration,
  parameters: { pageLayout: true },
} satisfies Meta<typeof PerceptionRegistration>
export default meta
type Story = StoryObj<typeof meta>

export const Contraejemplo: Story = {
  name: 'Contraejemplo deliberado: color, contraste y recorte',
  args: { barrier: true },
}
export const Solucion: Story = { name: 'Solución: texto y reflujo' }

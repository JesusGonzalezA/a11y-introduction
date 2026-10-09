import type { Meta, StoryObj } from '@storybook/react'
import { FocusRegistration } from './FocusRegistration'

const meta = {
  id: 'm4-focus-registration',
  title:
    'Módulo 4: Permitir la interacción y la percepción/Lección 4.1: Navegación por teclado y foco visible/Ejemplos/Inscripción',
  component: FocusRegistration,
  parameters: { pageLayout: true },
} satisfies Meta<typeof FocusRegistration>
export default meta
type Story = StoryObj<typeof meta>

export const Contraejemplo: Story = {
  name: 'Contraejemplo deliberado: foco oculto',
  args: { hideFocus: true },
}
export const Solucion: Story = { name: 'Solución: foco visible' }

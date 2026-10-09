import type { Meta, StoryObj } from '@storybook/react'
import { KeyboardRegistration } from './KeyboardRegistration'

const meta = {
  id: 'm2-keyboard-registration',
  title:
    'Módulo 2: Entender la accesibilidad/Lección 2.1: Personas, formas de interacción y barreras/Ejemplos/Inscripción con teclado',
  component: KeyboardRegistration,
} satisfies Meta<typeof KeyboardRegistration>
export default meta
type Story = StoryObj<typeof meta>

export const Contraejemplo: Story = {
  name: 'Contraejemplo deliberado: acción inalcanzable',
  args: { barrier: true },
}

export const BotonNativo: Story = {
  name: 'Solución: botón nativo',
}

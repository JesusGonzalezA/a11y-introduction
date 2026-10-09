import type { Meta, StoryObj } from '@storybook/react'
import { ButtonSemantics } from './ButtonSemantics'

const meta = {
  id: 'm2-button-semantics',
  title:
    'Módulo 2: Entender la accesibilidad/Lección 2.2: Cómo interpreta el navegador nuestra interfaz/Ejemplos/Significado del botón',
  component: ButtonSemantics,
} satisfies Meta<typeof ButtonSemantics>
export default meta
type Story = StoryObj<typeof meta>

export const Comparacion: Story = {
  name: 'Botón HTML y contraejemplo genérico',
}
export const NoDisponible: Story = {
  name: 'Botón HTML: inscripción cerrada',
  args: { unavailable: true },
}

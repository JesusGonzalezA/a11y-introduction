import type { Meta, StoryObj } from '@storybook/react'
import { ActivityStructure } from './ActivityStructure'

const meta = {
  id: 'm3-activity-structure',
  title:
    'Módulo 3: Dar significado al contenido/Lección 3.1: Estructura de página y orden de lectura/Ejemplos/Página de actividad',
  component: ActivityStructure,
  parameters: { pageLayout: true },
} satisfies Meta<typeof ActivityStructure>
export default meta
type Story = StoryObj<typeof meta>

export const Contraejemplo: Story = {
  name: 'Contraejemplo deliberado: estructura y secuencia',
  args: { barrier: true },
}
export const EstructuraCorregida: Story = {
  name: 'Solución: estructura y orden',
}

import type { Meta, StoryObj } from '@storybook/react'
import { LabelInspection } from './LabelInspection'

const meta = {
  id: 'm5-label-inspection',
  title:
    'Módulo 5: Primeras comprobaciones de accesibilidad y próximos pasos/Lección 5.2: Detectar problemas con Accessibility Insights/Ejemplos/Inspección de la actividad',
  component: LabelInspection,
  parameters: { pageLayout: true },
} satisfies Meta<typeof LabelInspection>
export default meta
type Story = StoryObj<typeof meta>
export const Contraejemplo: Story = {
  name: 'Contraejemplo deliberado: campo sin etiqueta',
  args: { barrier: true },
}
export const Solucion: Story = { name: 'Solución: etiqueta visible asociada' }

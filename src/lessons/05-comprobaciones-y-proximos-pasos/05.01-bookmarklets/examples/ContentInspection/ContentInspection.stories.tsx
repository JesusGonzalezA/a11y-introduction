import type { Meta, StoryObj } from '@storybook/react'
import { ContentInspection } from './ContentInspection'

const meta = {
  id: 'm5-content-inspection',
  title:
    'Módulo 5: Primeras comprobaciones de accesibilidad y próximos pasos/Lección 5.1: Inspeccionar el contenido con bookmarklets/Ejemplos/Inspección de la actividad',
  component: ContentInspection,
  parameters: { pageLayout: true },
} satisfies Meta<typeof ContentInspection>
export default meta
type Story = StoryObj<typeof meta>
export const Contraejemplo: Story = {
  name: 'Contraejemplo deliberado: niveles y alt',
  args: { barrier: true },
}
export const Solucion: Story = {
  name: 'Solución: jerarquía y alternativa contextual',
}

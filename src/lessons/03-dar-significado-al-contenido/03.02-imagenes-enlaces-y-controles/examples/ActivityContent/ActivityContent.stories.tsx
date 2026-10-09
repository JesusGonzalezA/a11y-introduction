import type { Meta, StoryObj } from '@storybook/react'
import { ActivityContent } from './ActivityContent'

const meta = {
  id: 'm3-activity-content',
  title:
    'Módulo 3: Dar significado al contenido/Lección 3.2: Imágenes, enlaces y controles comprensibles/Ejemplos/Página de actividad',
  component: ActivityContent,
  parameters: { pageLayout: true },
} satisfies Meta<typeof ActivityContent>
export default meta
type Story = StoryObj<typeof meta>

export const Contraejemplo: Story = {
  name: 'Contraejemplo deliberado: información insuficiente',
  args: { barrier: true },
}
export const ContenidoCorregido: Story = {
  name: 'Solución: nombres y etiqueta',
}
export const ImagenDecorativa: Story = {
  name: 'Solución: imagen redundante en contexto',
  args: { decorative: true },
}

import type { Meta, StoryObj } from '@storybook/react'
import { Button } from './Button'

const meta = {
  title: 'Módulo 2: Ejemplo/Lección 2.1: Activar una acción/Componentes/Button',
  component: Button,
  args: { children: 'Ejecutar acción', disabled: false },
  argTypes: { onClick: { action: 'acción ejecutada' } },
} satisfies Meta<typeof Button>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {}
export const Disabled: Story = { args: { disabled: true } }

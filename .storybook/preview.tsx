import type { Preview } from '@storybook/react'
import './preview.css'

const preview: Preview = {
  decorators: [
    (Story, context) =>
      context.parameters.pageLayout ? (
        <div className="storybook-canvas">
          <Story />
        </div>
      ) : (
        <main className="storybook-canvas">
          <Story />
        </main>
      ),
  ],
  parameters: {
    layout: 'padded',
    options: {
      storySort: { method: 'alphabetical', locales: 'es', numeric: true },
    },
  },
}

export default preview

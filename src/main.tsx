import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { examplesBase } from './examples/exampleUrl'

const root = document.getElementById('root')

if (!root) {
  throw new Error('The application root was not found.')
}

const { pathname } = window.location
const isExample = `${pathname}/`.startsWith(examplesBase)

// Cada superficie carga solo sus estilos: las páginas de ejemplo no heredan Reveal.
const surface = isExample
  ? import('./examples/ExamplesApp').then(({ ExamplesApp }) => (
      <ExamplesApp pathname={pathname} />
    ))
  : import('./slides/SlidesApp').then(({ SlidesApp }) => <SlidesApp />)

surface.then((element) => {
  createRoot(root).render(<StrictMode>{element}</StrictMode>)
})

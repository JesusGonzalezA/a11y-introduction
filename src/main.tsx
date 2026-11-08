import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { contentBase, examplesBase, slidesBase } from './routes'

const root = document.getElementById('root')

if (!root) {
  throw new Error('The application root was not found.')
}

const { pathname } = window.location
const startsWith = (base: string) => `${pathname}/`.startsWith(base)

// Cada superficie carga solo sus estilos: las páginas de ejemplo no heredan Reveal.
const surface = startsWith(examplesBase)
  ? import('./examples/ExamplesApp').then(({ ExamplesApp }) => (
      <ExamplesApp pathname={pathname} />
    ))
  : startsWith(slidesBase)
    ? import('./slides/SlidesApp').then(({ SlidesApp }) => <SlidesApp />)
    : startsWith(contentBase)
      ? import('./content/ContentApp').then(({ ContentApp }) => (
          <ContentApp pathname={pathname} />
        ))
      : import('./portal/PortalApp').then(({ PortalApp }) => <PortalApp />)

surface.then((element) => {
  createRoot(root).render(<StrictMode>{element}</StrictMode>)
})

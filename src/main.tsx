import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { legacyExampleRedirect } from './examples/exampleUrl'
import { contentBase, slidesBase } from './routes'

const root = document.getElementById('root')

if (!root) {
  throw new Error('The application root was not found.')
}

const { pathname, search } = window.location

// Las páginas de ejemplo viven en su propio sitio: se redirigen los enlaces antiguos.
const redirect = legacyExampleRedirect(pathname, search)
if (redirect) {
  window.location.replace(redirect)
  throw new Error(`Redirigiendo a ${redirect}`)
}
const startsWith = (base: string) => `${pathname}/`.startsWith(base)

// Cada superficie carga solo sus estilos.
const surface = startsWith(slidesBase)
  ? import('./slides/SlidesApp').then(({ SlidesApp }) => <SlidesApp />)
  : startsWith(contentBase)
    ? import('./content/ContentApp').then(({ ContentApp }) => (
        <ContentApp pathname={pathname} />
      ))
    : import('./portal/PortalApp').then(({ PortalApp }) => <PortalApp />)

surface.then((element) => {
  createRoot(root).render(<StrictMode>{element}</StrictMode>)
})

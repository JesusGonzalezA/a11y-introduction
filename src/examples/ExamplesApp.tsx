import { ExampleShell } from './ExampleShell'
import { ExamplesIndex } from './ExamplesIndex'
import { exampleRegistry } from './exampleRegistry'
import { examplesBase } from './exampleUrl'
import './example-base.css'

export function slugFromPath(pathname: string) {
  return decodeURIComponent(pathname)
    .slice(examplesBase.length - 1)
    .replace(/^\/+|\/+$/g, '')
}

export function ExamplesApp({ pathname }: { pathname: string }) {
  const slug = slugFromPath(pathname)
  const example = exampleRegistry.find((item) => item.slug === slug)
  if (example) return <ExampleShell example={example} />
  document.title =
    'Páginas de ejemplo · Introducción al desarrollo web accesible'
  return (
    <ExamplesIndex examples={exampleRegistry} missing={slug || undefined} />
  )
}

import { examplesBase } from './exampleRegistry'

/** Enlace a la página de ejemplo publicada, con la barrera o con el arreglo. */
export function exampleUrl(slug: string, fixed = false) {
  return `${examplesBase}${slug}/${fixed ? 'arreglo/' : ''}`
}

/** Enlace al índice de ejemplos de un módulo del sitio publicado. */
export function moduleExamplesUrl(moduleNumber: number) {
  return `${examplesBase}#module-${moduleNumber}`
}

const legacyBase = `${import.meta.env.BASE_URL}ejemplos`

/**
 * Las páginas de ejemplo ya no se sirven aquí. Devuelve la dirección publicada
 * que sustituye a una antigua `/ejemplos/…`, o `undefined` si no lo es.
 */
export function legacyExampleRedirect(pathname: string, search = '') {
  if (pathname !== legacyBase && !pathname.startsWith(`${legacyBase}/`))
    return undefined
  const slug = pathname.slice(legacyBase.length).split('/').filter(Boolean)[0]
  if (!slug) return examplesBase
  const fixed = new URLSearchParams(search).get('arreglo') === '1'
  return exampleUrl(slug, fixed)
}

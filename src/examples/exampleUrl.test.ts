import { describe, expect, it } from 'vitest'
import { exampleRegistry } from './exampleRegistry'
import { exampleUrl, legacyExampleRedirect } from './exampleUrl'

const site =
  'https://weaaare.github.io/curso-introduccion-desarrollo-web-accesible/'

describe('Enlaces a los ejemplos publicados', () => {
  it('apuntan al sitio de ejemplos, con y sin arreglo', () => {
    expect(exampleUrl('cine')).toBe(`${site}cine/`)
    expect(exampleUrl('cine', true)).toBe(`${site}cine/arreglo/`)
  })

  it('registra cada ejemplo una sola vez', () => {
    const slugs = exampleRegistry.map(({ slug }) => slug)
    expect(new Set(slugs).size).toBe(slugs.length)
  })

  it('redirige las direcciones antiguas /ejemplos/', () => {
    expect(legacyExampleRedirect('/ejemplos/', '')).toBe(site)
    expect(legacyExampleRedirect('/ejemplos/cine', '')).toBe(`${site}cine/`)
    expect(legacyExampleRedirect('/ejemplos/cine/', '?arreglo=1')).toBe(
      `${site}cine/arreglo/`,
    )
    expect(legacyExampleRedirect('/contenido/')).toBeUndefined()
  })
})

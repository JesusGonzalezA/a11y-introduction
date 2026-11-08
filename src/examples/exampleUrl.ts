export const examplesBase = `${import.meta.env.BASE_URL}ejemplos/`

/** Enlace a una página de ejemplo con el arreglo desactivado o activado. */
export function exampleUrl(slug: string, fixed = false) {
  return `${examplesBase}${slug}${fixed ? '?arreglo=1' : ''}`
}

export function readFixedParam(search: string) {
  return new URLSearchParams(search).get('arreglo') === '1'
}

export function withFixedParam(href: string, fixed: boolean) {
  const url = new URL(href)
  if (fixed) url.searchParams.set('arreglo', '1')
  else url.searchParams.delete('arreglo')
  return `${url.pathname}${url.search}${url.hash}`
}

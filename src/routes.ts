import { examplesBase } from './examples/exampleUrl'

const base = import.meta.env.BASE_URL

/** Superficies del servidor: portal, diapositivas, ejemplos y contenido. */
export const portalUrl = base
export const slidesBase = `${base}diapositivas/`
export const contentBase = `${base}contenido/`
export { examplesBase }

export const moduleAnchor = (moduleNumber: number) => `modulo-${moduleNumber}`
export const lessonAnchor = (lessonNumber: string) =>
  `leccion-${lessonNumber.replace('.', '-')}`

/** Diapositivas, opcionalmente en la slide con ese identificador. */
export function slidesUrl(anchor?: string) {
  return anchor ? `${slidesBase}#/${anchor}` : slidesBase
}

export const moduleContentPath = (moduleNumber: number) =>
  `modulo-${moduleNumber}`
export const presenterContentPath = (lessonNumber: string) =>
  `${lessonNumber}/presentador`

/** Documentación Markdown del curso servida como página. */
export function contentUrl(path = '') {
  return `${contentBase}${path}`
}

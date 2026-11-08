import type { ComponentType } from 'react'

/** Un cambio concreto que el conmutador aplica sobre la página de ejemplo. */
export interface ExampleFix {
  /** Valor de `data-fix` en los elementos que cambian con este arreglo. */
  id: string
  title: string
  /** Dónde está el cambio, en lenguaje de la página. */
  where: string
  /** Por qué la versión sin arreglo es una barrera y qué resuelve el cambio. */
  why: string
  before: string
  after: string
}

export interface ExamplePageProps {
  fixed: boolean
}

export interface ExampleDefinition {
  /** Segmento de la URL: `/ejemplos/<slug>`. */
  slug: string
  /** Qué página es, para el índice de ejemplos. */
  name: string
  lesson: string
  lessonTitle: string
  /** Título del documento, como lo tendría la web real. */
  title: string
  /** Qué hacer en la página para notar la barrera. */
  tryIt: string
  fixes: ExampleFix[]
  Page: ComponentType<ExamplePageProps>
}

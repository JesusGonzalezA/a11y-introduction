import type { ComponentType } from 'react'

/** Un cambio concreto entre la página con barrera y la página con arreglo. */
export interface ExampleFix {
  /** Valor de `data-fix` en los elementos que cambian con este arreglo. */
  id: string
  /** Cómo queda la página con el arreglo, en una frase corta. */
  title: string
  /** Dónde está el cambio, en lenguaje de la página. */
  where: string
  /** Qué falla sin el arreglo y a quién le afecta. */
  problem: string
  /** Qué cambia en el código y qué consigue. */
  solution: string
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
  /** Pasos breves para notar la barrera en la página. */
  tryIt: string[]
  fixes: ExampleFix[]
  Page: ComponentType<ExamplePageProps>
}

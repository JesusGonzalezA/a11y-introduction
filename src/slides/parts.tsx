import type { ReactNode } from 'react'
import { exampleUrl } from '../examples/exampleUrl'
import { type PersonaId, personas } from '../personas'
import { type CodeLanguage, guessLanguage, highlight } from './highlight'

/**
 * Piezas comunes de las slides. Cada lección sigue el mismo recorrido:
 * lección → situación de una persona → error común → solución.
 */
export type SlideKind =
  | 'leccion'
  | 'situacion'
  | 'error'
  | 'solucion'
  | 'comprobar'
  | 'resumen'

const kindLabels: Record<SlideKind, string> = {
  leccion: 'Lección',
  situacion: 'Situación',
  error: 'Error común',
  solucion: 'Solución',
  comprobar: 'Cómo comprobarlo',
  resumen: 'Resumen',
}

/** Tipo de slide y título. El tipo orienta la lectura sin abrir la demo. */
export function SlideTitle({
  kind,
  children,
}: {
  kind: SlideKind
  children: ReactNode
}) {
  return (
    <>
      <p className={`lesson-slide__kind lesson-slide__kind--${kind}`}>
        {kindLabels[kind]}
      </p>
      <h2 className="lesson-slide__title">{children}</h2>
    </>
  )
}

/** Quién es la persona, cómo usa la web y qué quiere hacer en esta lección. */
export function PersonaCard({ id, task }: { id: PersonaId; task: ReactNode }) {
  const persona = personas[id]
  return (
    <dl className="persona">
      <dt className="persona__name">{persona.name}</dt>
      <dd>{persona.who}</dd>
      <dt>Cómo usa la web</dt>
      <dd>{persona.how}</dd>
      <dt>Qué quiere hacer</dt>
      <dd>{task}</dd>
    </dl>
  )
}

/** Fragmento de código rotulado como error o como solución. */
export function Code({
  tone,
  caption,
  lang,
  children,
}: {
  tone: 'error' | 'solucion' | 'neutral'
  caption?: string
  /** Lenguaje del fragmento; si falta, se deduce del propio código. */
  lang?: CodeLanguage
  children: string
}) {
  const language = lang ?? guessLanguage(children)
  // Un fragmento puede mezclar HTML y CSS separados por una línea en blanco.
  const html = children
    .split('\n\n')
    .map((part) => highlight(part, lang ?? guessLanguage(part)))
    .join('\n\n')
  return (
    <figure className={`code code--${tone}`}>
      {caption && (
        <figcaption className="code__caption">
          {tone !== 'neutral' && (
            <span className="code__mark" aria-hidden="true">
              {tone === 'error' ? '✕' : '✓'}
            </span>
          )}
          {caption}
        </figcaption>
      )}
      <pre>
        <code
          className={`hljs language-${language}`}
          // biome-ignore lint/security/noDangerouslySetInnerHtml: highlight.js escapa el código
          dangerouslySetInnerHTML={{ __html: html }}
        />
      </pre>
    </figure>
  )
}

/** Enlaces a la página de ejemplo: con la barrera y con el arreglo aplicado. */
export function ExampleLinks({
  slug,
  barrier,
  fixed,
}: {
  slug: string
  barrier?: string
  fixed?: string
}) {
  return (
    <p className="example-links">
      {barrier && (
        <a
          className="lesson-slide__example-link example-links__barrier"
          href={exampleUrl(slug)}
        >
          {barrier}
        </a>
      )}
      {fixed && (
        <a
          className="lesson-slide__example-link example-links__fixed"
          href={exampleUrl(slug, true)}
        >
          {fixed}
        </a>
      )}
    </p>
  )
}

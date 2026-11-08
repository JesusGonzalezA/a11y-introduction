import { exampleUrl } from './exampleUrl'
import type { ExampleDefinition } from './types'
import './examples-index.css'

export function ExamplesIndex({
  examples,
  missing,
}: {
  examples: ExampleDefinition[]
  missing?: string
}) {
  return (
    <div className="examples-index">
      <main className="examples-index__main">
        <h1>Páginas de ejemplo</h1>
        {missing && (
          <p className="examples-index__missing">
            No existe ninguna página de ejemplo llamada «{missing}». Elige una
            de la lista.
          </p>
        )}
        <p>
          Cada página se abre con una barrera. Usa el botón flotante «Aplicar
          arreglo» para corregirla y «Ver cambios» para saber dónde está cada
          cambio y por qué.
        </p>
        <ul className="examples-index__list">
          {examples.map((example) => (
            <li key={example.slug}>
              <a href={exampleUrl(example.slug)}>
                Lección {example.lesson}: {example.name}
              </a>
              <p>{example.lessonTitle}</p>
            </li>
          ))}
        </ul>
      </main>
    </div>
  )
}

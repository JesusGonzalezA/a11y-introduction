import { courseModules } from '../lessons/lessonRegistry'
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
  const groups = courseModules
    .map((module) => ({
      module,
      examples: examples.filter((example) =>
        module.lessons.some((lesson) => lesson.number === example.lesson),
      ),
    }))
    .filter((group) => group.examples.length > 0)
  return (
    <div className="examples-index">
      <main className="examples-index__main">
        <p>
          <a href={import.meta.env.BASE_URL}>Índice del curso</a>
        </p>
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
        {groups.map(({ module, examples: moduleExamples }) => (
          <section
            key={module.number}
            aria-labelledby={`modulo-${module.number}`}
          >
            <h2 id={`modulo-${module.number}`}>
              Módulo {module.number}: {module.title}
            </h2>
            <ul className="examples-index__list">
              {moduleExamples.map((example) => (
                <li key={example.slug}>
                  <a href={exampleUrl(example.slug)}>
                    Lección {example.lesson}: {example.name}
                  </a>
                  <p>{example.lessonTitle}</p>
                </li>
              ))}
            </ul>
          </section>
        ))}
      </main>
    </div>
  )
}

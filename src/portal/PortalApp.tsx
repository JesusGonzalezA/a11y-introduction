import { course } from '../course'
import { exampleRegistry } from '../examples/exampleRegistry'
import { exampleUrl } from '../examples/exampleUrl'
import { courseModules } from '../lessons/lessonRegistry'
import {
  contentUrl,
  examplesBase,
  lessonAnchor,
  moduleAnchor,
  moduleContentPath,
  presenterContentPath,
  slidesUrl,
} from '../routes'
import './portal.css'

/** Índice del servidor: por módulo, diapositivas, ejemplos y contenido. */
export function PortalApp() {
  document.title = `${course.title} · weaaare`
  return (
    <div className="portal">
      <header className="portal__header">
        <p className="portal__brand">weaaare</p>
        <h1 className="portal__title">{course.title}</h1>
        <p className="portal__subtitle">{course.subtitle}</p>
        <ul className="portal__surfaces">
          <li>
            <a className="portal__surface" href={slidesUrl()}>
              <span className="portal__surface-name">Diapositivas</span>
              <span>Todo el curso, de principio a fin</span>
            </a>
          </li>
          <li>
            <a className="portal__surface" href={examplesBase}>
              <span className="portal__surface-name">Ejemplos</span>
              <span>Páginas con barreras y su arreglo</span>
            </a>
          </li>
          <li>
            <a className="portal__surface" href={contentUrl()}>
              <span className="portal__surface-name">Contenido</span>
              <span>Documentación del curso</span>
            </a>
          </li>
        </ul>
      </header>
      <main className="portal__main">
        <h2 className="portal__section-title">Módulos</h2>
        <ol className="portal__modules">
          {courseModules.map((module) => {
            const moduleExamples = exampleRegistry.filter((example) =>
              module.lessons.some((lesson) => lesson.number === example.lesson),
            )
            return (
              <li key={module.number} className="portal__module">
                <h3 className="portal__module-title">
                  <span className="portal__module-number">
                    Módulo {module.number}
                  </span>{' '}
                  {module.title}
                </h3>
                <ul className="portal__module-links">
                  <li>
                    <a href={slidesUrl(moduleAnchor(module.number))}>
                      Diapositivas
                    </a>
                  </li>
                  <li>
                    {moduleExamples.length > 0 ? (
                      <a href={`${examplesBase}#modulo-${module.number}`}>
                        Ejemplos ({moduleExamples.length})
                      </a>
                    ) : (
                      <span className="portal__none">Sin ejemplos</span>
                    )}
                  </li>
                  <li>
                    <a href={contentUrl(moduleContentPath(module.number))}>
                      Contenido
                    </a>
                  </li>
                </ul>
                <ol className="portal__lessons">
                  {module.lessons.map((lesson) => {
                    const examples = exampleRegistry.filter(
                      (example) => example.lesson === lesson.number,
                    )
                    return (
                      <li key={lesson.number} className="portal__lesson">
                        <p className="portal__lesson-title">
                          <span className="portal__lesson-number">
                            {lesson.number}
                          </span>{' '}
                          {lesson.title}
                        </p>
                        <ul className="portal__lesson-links">
                          <li>
                            <a href={slidesUrl(lessonAnchor(lesson.number))}>
                              Diapositivas
                              <span className="visually-hidden">
                                {' '}
                                de la lección {lesson.number}
                              </span>
                            </a>
                          </li>
                          {examples.map((example) => (
                            <li key={example.slug}>
                              <a href={exampleUrl(example.slug)}>
                                Ejemplo: {example.name}
                              </a>
                            </li>
                          ))}
                          <li>
                            <a href={contentUrl(lesson.number)}>
                              Contenido
                              <span className="visually-hidden">
                                {' '}
                                de la lección {lesson.number}
                              </span>
                            </a>
                          </li>
                          <li>
                            <a
                              href={contentUrl(
                                presenterContentPath(lesson.number),
                              )}
                            >
                              Notas del presentador
                              <span className="visually-hidden">
                                {' '}
                                de la lección {lesson.number}
                              </span>
                            </a>
                          </li>
                        </ul>
                      </li>
                    )
                  })}
                </ol>
              </li>
            )
          })}
        </ol>
      </main>
      <footer className="portal__footer">
        <p>{course.author} · weaaare</p>
      </footer>
    </div>
  )
}
